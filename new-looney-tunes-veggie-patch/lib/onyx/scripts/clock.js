import { performance, requestAnimationFrame } from './polyfills.js';

export class Clock {
	constructor({targetCyclesPerSecond = 60, targetFramesPerSecond = 60, autoRun = true} = {}) {
		this._running = false;
		this.targetCyclesPerSecond = targetCyclesPerSecond;
		this.targetFramesPerSecond = targetFramesPerSecond;
		this.frameAccumulatorRemainderThreshold = 16;

		this.renderEnabled = true;
		
		this.stats = {
			fps : 0,
			cps : 0,
			framesThisSecond : 0,
			cyclesThisSecond : 0,
			droppedFramesThisSecond : 0,
			framesSkippedThisSecond : 0,
			renderExecutionTime: 0,
			updateExecutionTime: 0,
			currentGameTime : 0,
			lastUpdate : performance.now(),
			lastRender : performance.now(),
			lastFrame : performance.now()
		}
		
		this._r = {
			i : null,
			newTime : performance.now(),
			deltaTime : 1 / this.targetCyclesPerSecond * 1000, // In milliseconds
			renderDeltaTime : 1 / this.targetFramesPerSecond * 1000, // In milliseconds
			frameAccumulator : 0
		}
		
		this.scenes = [];
		this.viewports = [];
		
		// Start main loop
		if(autoRun){
			this.start();
		}
	}
	
	/**
	 * Starts the engine
	 */
	start() {
		if(this._running) return;
		this._running = true;
		this.update();
	}
	
	/**
	 * Stops the engine
	 */
	stop() {
		this._running = false;
	}

	resetAccumulator(){
		this.stats.lastFrame = performance.now();
		this._r.frameAccumulator = 0;
	}
	
	/**
	 * Main loop
	 */
	update() {
		if(!this._running) return;
		
		// Calculate delta time #http://gafferongames.com/game-physics/fix-your-timestep/
		this._r.newTime = performance.now(); // Milliseconds with microsecond precision
		this._r.frameTime = this._r.newTime - this.stats.lastFrame; // Frametime will always be 16ms or higher with requestAnimationFrame()
		if(this._r.frameTime > 1000) this._r.frameTime = 1000; // note: max frame time to avoid spiral of death -- 1FPS
		this.stats.lastFrame = this._r.newTime;        
		
		this._r.frameAccumulator += this._r.frameTime;

		// Logic path
		
		this.stats.cyclesThisFrame = 0;
		this._r.i = Math.floor(this._r.frameAccumulator / this._r.deltaTime);
		let preexecutionTime = performance.now();
		while(this._r.i-- >= 0){
//			previousState = currentState;
//			integrate( currentState, t, dt );
			for(let scene of this.scenes){
				if(scene.enabled){
					scene.update(this._r.deltaTime);
				}
			}
			this.stats.currentGameTime += this._r.deltaTime * 100;
			this.stats.cyclesThisFrame++;

			// In case an update wants to stop everything (e.g. switching to a new scene)
			if(!this._running) return;
		}		
		this.stats.updateExecutionTime = performance.now() - preexecutionTime;
		this.stats.cyclesThisSecond += this.stats.cyclesThisFrame;

		// if(this.stats.cyclesThisFrame) this._r.frameAccumulator -= 1 / this.stats.cyclesThisFrame;
		this._r.frameAccumulator -= this.stats.cyclesThisFrame * this._r.deltaTime;
		this.stats.droppedFramesThisSecond += this.stats.cyclesThisSecond - 1;

		// Remove remainder
		// if(this._r.frameAccumulator > 1) this._r.frameAccumulator = 0;

		this.stats.frameAccumulatorRemainder = this._r.frameAccumulator;
		
//		_processing = false;
		
		// Render path
		preexecutionTime = performance.now();  
		if(this.renderEnabled && this.stats.cyclesThisFrame){// && (this._r.newTime - this.stats.lastRender >= this._r.renderDeltaTime)){
			for(let scene of this.scenes){
				scene.render(performance.now() - this.stats.lastRender);
			}
			this.stats.lastRender = performance.now();
			this.stats.framesThisSecond++;	
		}else{
			this.stats.framesSkippedThisSecond++
		};
		this.stats.renderExecutionTime = performance.now() - preexecutionTime;
		
		// Update stats
		if(performance.now() - this.stats.lastUpdate > 1000){
			this.stats.fps = this.stats.framesThisSecond;
			this.stats.cps = this.stats.cyclesThisSecond;
			this.stats.framesThisSecond = 0;
			this.stats.cyclesThisSecond = 0;
			this.stats.framesSkippedThisSecond = 0;
			this.stats.lastUpdate = performance.now();
		}
		
		// Debug
		// document.getElementById("debug").innerHTML = "FPS: " + this.stats.fps + " | CPS: " + this.stats.cps + "<br/>Render Time: " + Math.round(this.stats.renderExecutionTime) + "ms" + "<br/>Update Time: " + Math.round(this.stats.updateExecutionTime) + "ms" + "<br/>Current Gametime: " + Math.round(this.stats.currentGameTime);
		
		// this.stats.lastFrame = performance.now();    
		requestAnimationFrame(this.update.bind(this));
	}
	
	cyclesToMilliseconds(cycles){
		return cycles * this._r.deltaTime;
	}
	
	millisecondsToCycles(milliseconds){
		return milliseconds / this._r.deltaTime;
	}
	
	add(obj){
		this.scenes.push(obj);
		// obj.onload();
	}

	remove(obj){
		this.scenes.splice(this.scenes.indexOf(obj), 1);
		// obj.onunload();
	}
}