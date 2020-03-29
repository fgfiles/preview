HH.Snowball = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.img = new HH.Img('snowball', 0, 1, 0, 0, new PIXI.Point(.5, .5)));
    this.scale.x = this.scale.y = s;
}; extend(HH.Snowball, PIXI.DisplayObjectContainer);

pro.hit = function () {
    this.isHit = true;
    this.isKilled = true;
    if(this.isHit) {
        this.img.visible = true;
    }
};
pro.update = function () {
    this.img.rotation += 0.3;
    this.x += this.speed.x * this.speed.a;
    this.y += this.speed.y * this.speed.a;
    this.speed.y += this.speed.gy;
};