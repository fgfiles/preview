HH.Cactus = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('cactus', 11, 1, 0, 0, 1, new PIXI.Point(0.5, .95)));
    this.addChild(this.cut = new HH.MovieClip('cactus_cut', 5, 1, 0, 0, 1, new PIXI.Point(0.5, 1.15)));

    this.H = this.mov.height * s;
    this.mov.setToFrame(this.frameID = parseInt(5 * Math.random()));
    this.cut.setToFrame(this.frameID);
    this.cut.visible = false;
    this.ww = s * 86;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.speed = new PIXI.Point(s * -5, 0);
}; extend(HH.Cactus, PIXI.DisplayObjectContainer);


pro.update = function (player, isEnd) {
    var isDamage = false;
    var dist = this.x - player.x;
    if(player.isSlash) {
        if(dist > 0 && dist < this.ww * 2.2) {
            if(!this.isKilled) {
                this.isKilled = true;
                this.mov.setToFrame(this.frameID + 6);
                if(!this.cut.visible) {
                    GS.playSound('zlobster', 0, HH.SOUND);
                }
                this.cut.visible = true;
                player.isSlash = false;
            }
        }
    }
    if(this.x < this.a && this.x > this.a * .2) {
        player.sy += (this.y - player.sy + player.W * .5 -this.H) * 0.1;
    }
    if(this.cut.visible) {
        this.cut.x += this.ww * .02;
        this.cut.y -= this.ww * .065;
        this.cut.rotation -= .25;
        this.cut.anchor.y += (.5 - this.cut.anchor.y) * .15;
    }
    if(!this.isDamaged && player.hitTimer == 0 && !this.isKilled && this.jay == null) {
        if(dist < this.ww * 1.65) {
            this.isDamaged = true;
            player.damage();
            isDamage = true;
        }
    }

    this.x -= HH.SPEED3 * this.s;
    return isDamage;
};