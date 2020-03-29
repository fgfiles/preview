HH.Transmission = function(soul) {
    this.soul = soul;
    Games.Transmission.call(this, soul,.1, 0xffffff);
    this.isFirstStart = true;

    this.graphics.clear();

    var mw = 100;
    this.rect(this.graphics.w = mw, this.graphics.h = mw * this.soul.H/this.soul.W, this.color, 1, 0, 0);

    this.graphics.scale.x = this.graphics.scale.y = soul.startS /GodStep.IMAGE_RESOLUTION * GodStep.SCALE * 17.98;
    //this.graphics.scale.y = this.graphics.oS = this.soul.SH/mw * soul.assets.Scale;
};
extend(HH.Transmission, Games.Transmission);
pro.start = function(screenArr, outScreen) {
    this.isFirstStart = false;
    if(this.isFirstStart) {
        this.isFirstStart = false;
        if(outScreen.isOnlyOneView) {
            outScreen.destrukt();
        }
        outScreen.visible = false;
        for(var s in screenArr) {
            screenArr[s].init();
        }
        return;
    }
    if(!this.isStarted) {
        this.screens = screenArr;
        this.outScreen = outScreen;
        this.isStarted = true;
        this.isGoesUp = true;
        this.alpha = .9;
        this.visible = true;
    }
};
Object.defineProperty(pro, 'Scale', {
    get: function() {
        return this.scale.x;
    },
    set: function(value) {
        this.scale.x = this.scale.y = value;

        this.graphics.y = 0;//-(this.soul.OH - this.soul.H)/2 / value;

        if(this.soul.FULLRESIZE) {
            this.graphics.y = this.graphics.x = 0;
        }
        return;
        this.graphics.scale.y = this.graphics.oS * this.soul.OH/this.soul.H;
        this.graphics.scale.x = this.graphics.oS * (this.soul.FULLRESIZE ?(this.soul.OW/this.soul.W) : 1);
    }
});
