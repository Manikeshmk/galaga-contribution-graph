import { BaseConfig, BaseStore } from '../shared/types';

export interface GalagaShip {
	x: number;
}

export interface GalagaBullet {
	id: number;
	x: number;
	y: number;
	active: boolean;
}

export interface GalagaStoreType extends BaseStore {
	frameCount: number;
	nextBulletId: number;
	ship: GalagaShip;
	bullets: GalagaBullet[];
	gameHistory: { ship: GalagaShip; bullets: GalagaBullet[] }[];
	initialColors: string[][];
	cellEvents: { frameIndex: number; x: number; y: number; color: string }[];
	explosionEvents: { frameIndex: number; x: number; y: number; color: string }[];
	currentTargetCol: number;
	framesShootingAtTarget: number;
	framesAllowedForTarget: number;
	config: GalagaConfig;
}

export interface GalagaConfig extends BaseConfig {}
