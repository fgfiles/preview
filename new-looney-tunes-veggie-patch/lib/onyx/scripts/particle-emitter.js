import { Emitter, Sprite } from './main.js';

export class ParticleEmitter extends Emitter {
	constructor({count = 1000, life = 1000, rate = 1000, velocity = [0,0,0], offset = [0,0,0], spriteOptions = {}} = {}) {
		super(arguments[0]);

		this.sprites = [];
		this.spriteOptions = spriteOptions;
	}

	entityCreate(index) {
		if(!this.sprites[index]){
			this.sprites[index] = new Sprite(this.spriteOptions);
		}
		
		return this.sprites[index];
	}
}