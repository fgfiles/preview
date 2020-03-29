HH.MovieClip = function(frames_name, c, scale, px, py, a, anchor) {
    this.frames = [];
    var s = '';
    this.atime = a;
    this.atimer = a;
    for(var i = 0; i<=c; i++) {
        s = i + "";
        if(s.length == 1) {
            s = '00' + s;
        } else
        if(s.length == 2) {
            s = '0' + s;
        }
        this.frames.push(frames_name + '0' + s);
    }
    this.cycle = 0;
    var tex = GodStep.textures[ this.frames[0] ];
    if(!tex) {
        tex = PIXI.Texture.fromFrame(this.frames[0]);
    }
    GodStep.Image.call(this, tex);
    this.Scale = this.startS = scale/GodStep.IMAGE_RESOLUTION  * GodStep.SCALE;
    this.currentFrame = 0;
    this.totalFrames = frames.length;

    if(anchor == 0.5) {
        this.anchor = new PIXI.Point(.5, .5);
    } else {
        if(anchor) {
            this.anchor = anchor;
        }
    }
    this.place(px, py);

    this.animTime = 2;
    this.animTimer = 2;
}; extend(HH.MovieClip, GodStep.MovieClip);


pro.setToFrame = function(frame) {
    this.currentFrame = frame;
    var tex = GodStep.textures[this.frames[frame]];
    if(!tex) {
        tex = PIXI.Texture.fromFrame(this.frames[frame]);
    }
    this.setTexture(tex);
};

pro.nextFrame = function() {
    if(this.atimer-- == 0) {
        this.atimer = this.atime;
        this.currentFrame++;
        if(this.currentFrame == this.frames.length) {
            this.currentFrame = 0;
            this.cycle++;
        }

        var tex = GodStep.textures[this.frames[this.currentFrame]];
        if(!tex) {
            tex = PIXI.Texture.fromFrame(this.frames[this.currentFrame]);
        }
        this.setTexture(tex);
        return this.currentFrame;
    }

};