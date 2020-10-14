import { Component, Entity } from './main.js';

export class Emitter extends Component {
	get count(){ return this.particles.length }
	set count(val) {
		this.particles.length = val;
		this.particleAge.length = val;
		this.warmed = false;
	}

	constructor({count = 1000, life = 1000, rate = 1000, offset = [0,0,0], velocity = [0,0,0], entityCreate = () => { return this.entityCreate() } } = {}) {
		super();

		this._r = {
			i: null,
			frameTime: 0,
			timeAccumulator: 0
		}
		this.warmed = false;
		
		this.rate = rate;
		this.life = life;
		this.offset = offset;
		this.velocity = velocity;
		// this.timeToLiveMin = timeToLiveMin;
		// this.timeToLiveMax = timeToLiveMax;
		// this.velocityMin = 1;
		// this.velocityMax = 10;

		this.particles = [];
		this.particleAge = [];
		this.count = count;
	}
	
	render(dt, scene, viewport, camera, entity){
		super.render(dt, scene, viewport, camera, entity);

		for(var i = 0; i < this.particles.length; i++){
			if(this.particles[i].visible){
				this.particles[i].render(dt, scene, viewport, camera, entity, this);
			}
		}
	}
	
	update(dt, scene, entity){
		super.update(dt, scene, entity);

		if(!this.warmed) this.prewarm();

		// Update particles
		for(var i = 0; i < this.particles.length; i++){
			if(!this.particles[i].enabled) continue;

			// Update current particle positions
			this.particles[i].transform.translate(this.velocity[0], this.velocity[1], this.velocity[2]);

			// Kill any particles that are EOL
			this.particleAge[i] += dt;
			if(this.particleAge[i] >= this.life){
				this.particles[i].enabled = false;
				this.particles[i].visible = false;
			}
		}

		if(!this.rate) return;

		// Emit new particles
		this._r.timeAccumulator += dt;

		this._r.i = Math.floor(this._r.timeAccumulator / this.rate);
		while(this._r.i-- >= 0){
			this.emit();
			this._r.timeAccumulator -= this.rate;
		}
	}

	// Meant to be overridden 
	entityCreate(index) {
		
	}

	// TODO: Not sure how I feel about this function name
	prewarm(){
		for(var i = 0; i < this.particles.length; i++){
			if(!this.particles[i]){
				this.particles[i] = this.entityCreate(i);
				this.particles[i].enabled = false;
				this.particles[i].visible = false;
				this.particleAge[i] = 0;
			}
		}
		this.warmed = true;
	}

	emit(){
		// Find next available particle
		for(var i = 0; i < this.particles.length; i++){
			if(!this.particles[i].enabled){
				this.particles[i].enabled = true;
				this.particles[i].visible = true;
				this.particleAge[i] = 0;
				this.particles[i].transform.translateTo(this.offset[0], this.offset[1], this.offset[2]);
				return;
			}
		}
	}
}