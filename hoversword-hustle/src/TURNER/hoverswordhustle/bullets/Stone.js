HH.Stone = function (s) {
    PIXI.DisplayObjectContainer.call(this);

    this.addChild(this.shadow = new HH.Img('shadow', 0, .8, 0, 0, new PIXI.Point(.5, -1)));
    this.addChild(this.img = new HH.Img('boulder', 0, 1, 0, 0, new PIXI.Point(.5, .5)));
    this.addChild(this.mov2 = new HH.MovieClip('boulder_glow', 3, 1, 0, 0, 2, new PIXI.Point(0.5, .5)));
    this.img.visible = false;
    this.shadow.visible = false;
    this.img.rotation = -Math.PI;
    this.scale.x = this.scale.y = s;
}; extend(HH.Stone, PIXI.DisplayObjectContainer);

pro.hit = function () {
    this.isHit = true;
    if(this.isHit) {
        this.mov2.visible = true;
    }
};
pro.update = function () {
    if(!this.isLanding) {
        this.x += this.speed.x * this.speed.a;
        this.y += this.speed.y * this.speed.a;
        this.img.rotation += .12;
        this.speed.y += this.speed.gy;
    }

    if(this.mov2.visible) {
        this.mov2.nextFrame();
        if(this.mov2.cycle > 0) {
            this.img.visible = true;
            this.mov2.visible = false;
        }
    }
    if(this.y >= this.landY) {
        this.y = this.landY;
        this.speed.y = 0;
        this.shadow.visible = !this.isHit;
        this.img.rotation += (0 - this.img.rotation) * .5;
        if(!this.isLanding) {
            GS.playSound('zhit2', 0, HH.SOUND);
        }
        this.isLanding = true;
        this.x -= this.speed.lx;
    }
};