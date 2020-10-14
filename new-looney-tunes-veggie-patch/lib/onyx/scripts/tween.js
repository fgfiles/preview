import { Component } from './main.js';

export class Tween extends Component {
	constructor({ propParent, property, to, from, duration, direction, callback, method = "linear" } = {}) {
		super();

		this.set(propParent, property, to, from, duration, direction, callback, method);
	}
	
	update(dt, scene, entity) {
		if(!this.enabled || this.percentComplete === 1) return;
		
		this.currentTime += dt * this.direction;
        this.percentComplete = Math.min(this.currentTime / this.duration, 1);

        if(this.percentComplete === 1 && this.callback){
			this.propParent[this.property] = this.to;

			this.callback();
		}else{
			switch(this.method){
				case "linear":
					// a + ((b-a) * %)
					this.propParent[this.property] = this.from + ((this.to - this.from) * this.percentComplete);
					break;
				case "easeIn":
					// function(a,b,percent) { return a + (b-a)*((-Math.cos(percent*Math.PI)/2) + 0.5);        }
					this.propParent[this.property] = this.from + (this.to-this.from)*((-Math.cos(this.percentComplete*Math.PI)/2) + 0.5);
					break;
			}
		}
	}

	set( propParent, property, to, from, duration, direction = 1, callback, method = "linear" ) {
		this.duration = duration;
		this.direction = direction;
        this.propParent = propParent;
        this.property = property;
        this.from = from;
		this.to = to;
        this.callback = callback;

		this.method = method;
		this.currentTime = 0;
		this.percentComplete = 0;

		if(from === undefined && propParent) from = propParent[property]; 
    }

    linear( propParent, property, to, from = propParent[prop], duration, callback ) {
		this.set(propParent, property, to, from, duration, callback, "linear");
    }
	
	easeIn( propParent, property, to, from = propParent[prop], duration, callback ) {
		this.set(propParent, property, to, from, duration, callback, "easeIn");
	}
    
}