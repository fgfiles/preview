HH.Tomato = function (s) {
    PIXI.DisplayObjectContainer.call(this);

    this.addChild(this.shadow = new HH.Img('shadow', 0, 1, 0, 0, new PIXI.Point(.5, -1)));
    this.addChild(this.img = new HH.Img('tomato', 0, 1, 0, 0, new PIXI.Point(.5, .5)));
    this.addChild(this.vampire = new HH.Img('vampire3', 0, 1, 0, 0, new PIXI.Point(.2, .7)));
    this.addChild(this.mov2 = new HH.MovieClip('hitfx', 2, 1, 0, 0, 1, new PIXI.Point(0.5, .5)));
    this.vampire.visible = false;
    this.mov2.visible = false;
    this.shadow.visible = false;
    this.img.rotation = -Math.PI;
    this.scale.x = this.scale.y = s;
}; extend(HH.Tomato, PIXI.DisplayObjectContainer);

pro.hit = function () {
    this.isHit = true;
    if(this.isHit) {
        this.vampire.visible = true;
        this.mov2.visible = true;
    }
};
pro.update = function () {
    if(!this.isLanding) {
        this.x += this.speed.x * this.speed.a;
        this.y += this.speed.y * this.speed.a;
        this.vampire.rotation = this.img.rotation += .12;
        this.speed.y += this.speed.gy;
    }

    if(this.mov2.visible) {
        this.mov2.nextFrame();
        if(this.mov2.cycle > 0) {
            this.mov2.visible = false;
        }
    }
    if(this.y >= this.landY) {
        this.y = this.landY;
        this.speed.y = 0;
        if(!this.isLanding) {
            GS.playSound('zhit2', 0, HH.SOUND);
        }

        this.shadow.visible = true;
        this.vampire.rotation = this.img.rotation += (0 - this.img.rotation) * .5;
        this.isLanding = true;
        this.x -= this.speed.lx;
    }
};