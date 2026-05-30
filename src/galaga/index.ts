import { Providers } from '../shared/providers/providers.ts';
import { Utils } from '../shared/utils/utils.ts';
import { GalagaGame } from './core/game.ts';
import { GalagaStore } from './core/store.ts';
import { GalagaConfig, GalagaStoreType } from './types.ts';
export { GalagaConfig } from './types.ts';

export class GalagaRenderer {
	store!: GalagaStoreType;
	conf: GalagaConfig;

	constructor(conf: GalagaConfig) {
		this.conf = { ...conf };
	}

	public async start() {
		const defaultConfig: GalagaConfig = {
			platform: 'github',
			username: '',
			svgCallback: (_: string) => {},
			gameOverCallback: () => {},
			gameTheme: 'github',
			pointsIncreasedCallback: (_: number) => {},
			githubSettings: { accessToken: '' }
		};

		this.store = JSON.parse(JSON.stringify(GalagaStore));
		this.store.config = { ...defaultConfig, ...this.conf };

		switch (this.store.config.platform) {
			case 'gitlab':
				this.store.contributions = await Providers.fetchGitlabContributions(this.store);
				break;
			case 'github':
				this.store.contributions = await Providers.fetchGithubContributions(this.store);
				break;
			default:
				throw new Error(`Unsupported platform: ${this.store.config.platform}`);
		}

		Utils.buildGrid(this.store);
		Utils.buildMonthLabels(this.store);

		await GalagaGame.startGame(this.store);
		return this.store;
	}

	public stop() {
		GalagaGame.stopGame(this.store);
	}
}
