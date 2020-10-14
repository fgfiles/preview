import { Entity } from './main.js';

export class Timer extends Entity {
	constructor() {
		super();
		this.currentTime = 0;
		this.interval = 0;
		this.currentIntervalCount = 0;
		this.intervalCount = -1;
		this.mode = "timeout";
		this.direction = 1;
		this.enabled = true;
		
		this.callback = function(){};
	}
	
	update(dt, scene) {
		if(!this.enabled) return;
		
		this.currentTime += dt * this.direction;
		
		switch(this.mode){
			case "timeout":
				if(this.currentTime > this.interval){
					this.callback( scene );
					this.enabled = false;
				}
				break;
			case "interval":
				if(this.currentTime > this.interval){
					this.currentTime = 0 + (this.currentTime - this.interval); // Carry over the remainder
					this.callback( scene );
					
					this.currentIntervalCount++;
					if(this.intervalCount > 0 && this.currentIntervalCount >= this.intervalCount){
						this.enabled = false;
					} 
				}
				break;
			case "modulate":
				if(this.currentTime > this.interval){
					this.currentTime = this.interval - (this.currentTime - this.interval);
					this.direction = -1;
				}else if(this.currentTime < 0){
					this.currentTime = 0 - this.currentTime;
					this.direction = 1;
				}
				
				this.callback( scene, dt, this.currentTime / this.interval );
				break;
		}
	}
	
	setTimeout( callback, interval = 0 ) {
		this.interval = interval;
		this.callback = callback;
		this.mode = "timeout";
		
		this.currentTime = 0;
		
		this.enabled = true;
	}
	
	setInterval( callback, interval = 0, count = 0 ) {
		this.interval = interval;
		this.intervalCount = count;
		this.callback = callback;
		this.mode = "interval";
		
		this.currentTime = 0;
		this.currentIntervalCount = 0;
		
		this.enabled = true;
	}
	
	setModulate( callback, interval = 0 ) {
		this.interval = interval;
		this.callback = callback;
		this.mode = "modulate";
		
		this.currentTime = 0;
		
		this.enabled = true;
	}

	restart(){
		this.currentTime = 0;
	}
}