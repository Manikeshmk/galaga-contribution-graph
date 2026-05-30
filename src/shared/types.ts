export type ContributionLevel = 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';

export interface ContributionDay {
	date: string;
	count: number;
	level: ContributionLevel;
}

export interface ContributionGridCell {
	date: string;
	commitsCount: number;
	level: ContributionLevel;
	color: string;
}

export interface MonthLabel {
	name: string;
	colIndex: number;
}

export interface GameTheme {
	name: string;
	intensityColors: [string, string, string, string, string]; // [None, L1, L2, L3, L4]
}

export interface BaseConfig {
	platform: 'github' | 'gitlab';
	username: string;
	svgCallback: (svg: string) => void;
	gameOverCallback: () => void;
	pointsIncreasedCallback: (points: number) => void;
	gameTheme?: string;
	gameStatsCallback?: (stats: { totalScore: number; steps: number; ghostsEaten: number }) => void;
	githubSettings?: {
		accessToken: string;
	};
}

export interface BaseStore {
	contributions: ContributionDay[];
	grid: ContributionGridCell[][];
	monthLabels: string[];
}

export interface AnimationData {
	keyTimes: string;
	values: string;
}
