/* ─── Re-export shared constants so galaga code has one import location ─── */
export { CELL_SIZE, DELTA_TIME, GAME_THEMES, GAP_SIZE, GRID_HEIGHT, GRID_WIDTH } from '../../shared/constants.js';

/* ───────────── Ship ───────────── */
/** Ship center Y in grid units (just below the 7-row grid) */
export const SHIP_Y = 10.5;

/** Ship horizontal speed in grid units per frame */
export const SHIP_SPEED = 0.4;

/** Ship half-width in grid units (used for clamping) */
export const SHIP_HALF_WIDTH = 0.8;

/* ───────────── Bullets ───────────── */
/** Upward speed of a bullet in grid units per frame */
export const BULLET_SPEED = 0.6;

/** Maximum simultaneous active bullets */
export const MAX_BULLETS = 10;

/** Fire a new bullet every this many frames when aligned with a target */
export const FIRE_RATE = 2;
/** Minimum frames the ship shoots at one target before moving to the next */
export const FRAMES_PER_TARGET_MIN = 4;
/** Maximum frames the ship shoots at one target before moving to the next */
export const FRAMES_PER_TARGET_MAX = 8;
/** Number of frames an explosion animation lasts */
export const EXPLOSION_FRAMES = 7;

/* ─────────────── Bullet image ─────────────── */
/** Bullet sprite height in grid units (sprite is 20px, slot is 22px) — used for leading-edge collision */
/* ─────────────── Bullet image ─────────────── */
/** Bullet sprite height in grid units (sprite is 20px, slot is 22px) — used for leading-edge collision */
export const BULLET_SPRITE_HEIGHT_GU = 20 / 22;

export const BULLET_IMAGE_DATA = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2010%2020%22%3E%3Crect%20x%3D%224%22%20y%3D%222%22%20width%3D%222%22%20height%3D%2216%22%20fill%3D%22%2300ffff%22%20rx%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%226%22%20width%3D%224%22%20height%3D%228%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.7%22%2F%3E%3C%2Fsvg%3E';

/* ───────────── Ship image ───────────── */
export const SHIP_IMAGE_DATA = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2035%22%3E%3Crect%20x%3D%220%22%20y%3D%2216%22%20width%3D%226%22%20height%3D%2214%22%20fill%3D%22%23e11d48%22%2F%3E%3Crect%20x%3D%222%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%226%22%20fill%3D%22%23ffffff%22%20%2F%3E%3Crect%20x%3D%2210%22%20y%3D%228%22%20width%3D%2212%22%20height%3D%2224%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%220%22%20width%3D%226%22%20height%3D%228%22%20fill%3D%22%23e11d48%22%2F%3E%3Crect%20x%3D%2226%22%20y%3D%2216%22%20width%3D%226%22%20height%3D%2214%22%20fill%3D%22%23e11d48%22%2F%3E%3Crect%20x%3D%2226%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%226%22%20fill%3D%22%23ffffff%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%2222%22%20width%3D%224%22%20height%3D%226%22%20fill%3D%22%232563eb%22%2F%3E%3Crect%20x%3D%2222%22%20y%3D%2222%22%20width%3D%224%22%20height%3D%226%22%20fill%3D%22%232563eb%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%2232%22%20width%3D%224%22%20height%3D%223%22%20fill%3D%22%23ea580c%22%2F%3E%3C%2Fsvg%3E';
