export const GRID_WIDTH = 53;
export const GRID_HEIGHT = 7;
export const CELL_SIZE = 10;
export const GAP_SIZE = 2;
export const DELTA_TIME = 33; // ~30 FPS loop step timings

export const GAME_THEMES: Record<string, { name: string; intensityColors: [string, string, string, string, string] }> = {
	github: {
		name: 'github',
		intensityColors: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
	},
	classic: {
		name: 'classic',
		intensityColors: ['#111111', '#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd']
	}
};
