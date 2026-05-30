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
export const BULLET_SPRITE_HEIGHT_GU = 20 / 22;

// Clean XML vector asset for laser projectile streams
export const BULLET_IMAGE_DATA = `data:image/svg+xml;utf8,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 20">
	<rect x="4" y="2" width="2" height="16" fill="%2300ffff" rx="1"/>
	<rect x="3" y="6" width="4" height="8" fill="%23ffffff" opacity="0.7"/>
</svg>`.replace(/\n/g, '').replace(/\t/g, '');

/* ───────────── Ship image ───────────── */
// Clean vector blueprint matching the iconic custom 90-degree square console wings
export const SHIP_IMAGE_DATA = `data:image/svg+xml;utf8,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35">
	<rect x="0" y="16" width="6" height="14" fill="%23e11d48"/>
	<rect x="2" y="10" width="4" height="6" fill="%23ffffff"/>
	
	<rect x="10" y="8" width="12" height="24" fill="%23ffffff"/>
	<rect x="13" y="0" width="6" height="8" fill="%23e11d48"/>
	
	<rect x="26" y="16" width="6" height="14" fill="%23e11d48"/>
	<rect x="26" y="10" width="4" height="6" fill="%23ffffff"/>
	
	<rect x="6" y="22" width="4" height="6" fill="%232563eb"/>
	<rect x="22" y="22" width="4" height="6" fill="%232563eb"/>
	<rect x="14" y="32" width="4" height="3" fill="%23ea580c"/>
</svg>`.replace(/\n/g, '').replace(/\t/g, '');
