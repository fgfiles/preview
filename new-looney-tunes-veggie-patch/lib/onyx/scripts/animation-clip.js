export class AnimationClip {
	constructor({ name = "", tracks = [], loop = true, enabled = false, rate = 1, paused = false } = {}) {
        this.name = name;
        this.tracks = tracks;

        this.enabled = enabled; // TODO: Should be false by default
        this.paused = paused;

        this.rate = rate;
        this.currentTime = 0;

        this.loop = loop;
    }
    
    update(dt){
        if(!this.enabled || this.paused || !this.rate) return;

        this.currentTime += dt * this.rate;

        var allComplete = true;
        for(var i = 0; i < this.tracks.length; i++){
            this.tracks[i].update(dt * this.rate, this.currentTime);

            if(!this.tracks[i].complete) allComplete = false;
        }
        
        if(allComplete){
            if(!this.loop){
                this.stop();
            }else{
                this.reset();
            }
        }
    }

    pause(val = !this.paused){
        this.paused = val;
    }

    stop(){
        this.reset();
        this.enabled = false; // TODO: Does it make sense to have a separate isPlaying boolean?
    }

    play(){
        if(this.enabled) this.reset();

        this.enabled = true;
    }

    reset(){
        for(var i = 0; i < this.tracks.length; i++){
            this.tracks[i].reset();
        }
        this.currentTime = 0;
    }
}