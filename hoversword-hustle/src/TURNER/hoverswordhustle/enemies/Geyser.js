HH.Geyser = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('geyser', 7, 1, 0, 0, 1, new PIXI.Point(0.48, .98)));
    this.addChild(this.base = new HH.MovieClip('geyserbase', 0, 1, 0, 0, 1, new PIXI.Point(0.5, 0)));

    this.ww = s * 86;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.speed = new PIXI.Point(s * -5, 0);
}; extend(HH.Geyser, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {
    if(!bullet.isHit && !this.isKilled && !this.isHitted) {
        var dist = Math.sqrt(Math.pow(bullet.x - this.x, 2) + Math.pow(bullet.y - this.y, 2));
        if(dist <  this.ww * .9) {
            bullet.hit();
            bullet.x = this.x - this.ww * .02;//
            bullet.shadow.visible = false;
            this.isHitted = true;
            bullet.y = bullet.landY;
            this.mov.visible = false;
        }
    }
};

pro.update = function (player, isEnd) {
    var isDamage = false;
    var dist = this.x - player.x;

    if(this.mov) {
        this.mov.nextFrame();
    }
    if(player.x + player.W * 1.5 > this.x && !this.isHitted && !player.isDead && player.hitTimer == 0) {
        if(!this.isDamaged) {
            this.isDamaged = true;
            player.damage();
            isDamage = true;
        }

    }

    this.x -= HH.SPEED3 * this.s;
    return isDamage;
};