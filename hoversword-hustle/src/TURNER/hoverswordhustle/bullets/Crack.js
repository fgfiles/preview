HH.Crack = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('crack', 7, 1, 0, 0, 1, new PIXI.Point(0, .5)));
    this.scale.x = this.scale.y = s;
    this.life = 2;
    this.isShaked = true;
}; extend(HH.Crack, PIXI.DisplayObjectContainer);

pro.hit = function () {

};
pro.update = function () {
    if(this.mov.cycle == 0) {
        this.mov.nextFrame();
    }
    if(this.mov.cycle > 0) {
        this.mov.setToFrame(7);
        this.mov.alpha -= 0.05;
        if(this.mov.alpha < 0.01) {
            this.isKilled = true;
        }
    }
    this.x += this.speed.x * this.back.speed3;
    if(this.life-- < 0) {
        this.isHit = true;
    }

};