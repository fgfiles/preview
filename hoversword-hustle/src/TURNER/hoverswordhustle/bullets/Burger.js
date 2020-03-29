HH.Burger = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('burger', 1, 1, 0, 0, 1, new PIXI.Point(0.5, .5)));

    this.scale.x = this.scale.y = s;
}; extend(HH.Burger, PIXI.DisplayObjectContainer);

pro.hit = function () {
    this.isHit = true;
    this.isKilled = true;
    if(this.isHit) {
        this.mov.visible = true;
    }
};
pro.update = function () {
    this.x += this.speed.x * this.speed.a;
    this.y += this.speed.y * this.speed.a;
    this.speed.y -= this.speed.gy;
    this.mov.nextFrame();
};