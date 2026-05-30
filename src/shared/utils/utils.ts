import { CELL_SIZE, GAME_THEMES, GAP_SIZE, GRID_HEIGHT, GRID_WIDTH } from '../constants.ts';
import { ContributionGridCell, BaseStore } from '../types.ts';
export const Utils = {
	getCurrentTheme(store: any) {
		const themeName = store.config?.gameTheme || 'github';
		return GAME_THEMES[themeName] || GAME_THEMES.github;
	},

	buildMonthLabels(store: BaseStore) {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		store.monthLabels = Array(GRID_WIDTH).fill('');
		
		store.contributions.forEach((day, index) => {
			const col = Math.floor(index / GRID_HEIGHT);
			if (col >= GRID_WIDTH) return;
			const d = new Date(day.date);
			if (d.getDate() <= 7) {
				store.monthLabels[col] = months[d.getMonth()];
			}
		});
	},

	createGridFromData(store: any): ContributionGridCell[][] {
		const theme = this.getCurrentTheme(store);
		const grid: ContributionGridCell[][] = [];

		for (let x = 0; x < GRID_WIDTH; x++) {
			const column: ContributionGridCell[] = [];
			for (let y = 0; y < GRID_HEIGHT; y++) {
				const dataIndex = x * GRID_HEIGHT + y;
				const dayData = store.contributions[dataIndex];

				column.push({
					date: dayData ? dayData.date : '',
					commitsCount: dayData ? dayData.count : 0,
					level: dayData ? dayData.level : 'NONE',
					color: dayData ? theme.intensityColors[this.getLevelIndex(dayData.level)] : theme.intensityColors[0]
				});
			}
			grid.push(column);
		}
		return grid;
	},

	getLevelIndex(level: string): number {
		const mapping: Record<string, number> = {
			NONE: 0,
			FIRST_QUARTILE: 1,
			SECOND_QUARTILE: 2,
			THIRD_QUARTILE: 3,
			FOURTH_QUARTILE: 4
		};
		return mapping[level] ?? 0;
	},

	buildGrid(store: BaseStore) {
		store.grid = this.createGridFromData(store);
	}
};
