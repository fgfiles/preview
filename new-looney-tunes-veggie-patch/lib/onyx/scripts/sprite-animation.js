export class SpriteAnimation {
	constructor({loop = true, frames = []} = {}, sprite = null) {
		this.sprite = sprite;
		
		this.frames = [];
		
		this.state = 0;
		this.loop = loop;
		
		this.currentTime = 0;
		this.currentFrame = null;
		this.currentFrameIndex = 0;

		this.callback = null;

		for(let frame of frames){
			this.addFrame(frame);
		}
	}
	
	update(dt, scene, entity, sprite){
		if(!this.state) return;
		let speed = this.currentFrame.speed || 0;
		
		if(this.currentTime + dt > speed){
			let prevFrame = this.currentFrame;

			// Advance frame index
			this.currentFrameIndex++;
			if(!this.frames[this.currentFrameIndex]){
				if(this.callback) this.callback();
				
				if(this.loop){
					this.currentFrameIndex = 0;
				}else{
					this.state = 0;
					return;
				}
			}
			
			// Assign frame
			this.setFrame();

			if(prevFrame.onComplete) prevFrame.onComplete();
			if(this.currentFrame.onStart) this.currentFrame.onStart();
			
			// Clear
			this.currentTime = 0;
		}
		
		this.currentTime += dt;
	}

	pause(val = (this.state)?0:1){
		this.state = val;
	}
	
	play(callback = null, loop = this.loop){
		this.state = 1;
		this.loop = loop;
		this.callback = callback;
		this.reset();
		this.setFrame();
	}
	
	reset(frameIndex = 0){
		this.currentTime = 0;
		this.currentFrame = this.frames[frameIndex];
		this.currentFrameIndex = frameIndex;
	}

	addFrame({name = "", x = 0, y = 0, width = 0, height = 0, offsetX = 0, offsetY = 0, pivotX = 0, pivotY = 0, speed = 0, materialIndex = 0} = {}){
		this.frames.push({name, x, y, width, height, pivotX, pivotY, offsetX, offsetY, speed, materialIndex});
	}

	setFrame(frameIndex = this.currentFrameIndex){
		this.currentTime = 0;
		this.currentFrame = this.frames[frameIndex];
		this.currentFrameIndex = frameIndex;
		
		// TODO: "this.sprite" feels a little hacky
		this.sprite.selectFrame(this.currentFrame.x, this.currentFrame.y, this.currentFrame.width, this.currentFrame.height, this.currentFrame.pivotX, this.currentFrame.pivotY, this.currentFrame.offsetX, this.currentFrame.offsetY, this.currentFrame.materialIndex);
	}
}