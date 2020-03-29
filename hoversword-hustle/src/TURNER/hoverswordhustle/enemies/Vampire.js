HH.Vampire = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('vampire', 6, 1, 0, 0, 1, new PIXI.Point(0.5, 1)));
    this.addChild(this.mov2 = new HH.MovieClip('vampire2', 6, 1, 0, 0, 1, new PIXI.Point(0.5, 1)));
    this.addChild(this.shadow = new HH.Img('shadow', 0, .8, 0, 0, new PIXI.Point(.4, .5)));

    this.ww = s * 76;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.speed = new PIXI.Point(s * -5, 0);
    this.mov2.visible = false;
}; extend(HH.Vampire, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {
    if(!bullet.isLanding) {
        var dist = Math.sqrt(Math.pow(bullet.x - this.x, 2) + Math.pow(bullet.y - this.y, 2));
        if(dist <  this.ww) {
            bullet.hit();
            if(this.visible) {
                GS.playSound('zsplat', 0, HH.SOUND);
            }
            this.visible = false;
        }
    }

};
pro.update = function (player, isEnd) {
    this.mov.nextFrame();
    this.mov2.nextFrame();
    var isDamage = false;

    if(this.x < player.x + player.W && !this.isKilled && this.visible && !isEnd ) {
        if(!this.impulse) {
            this.isJumping = true;
            this.startY = this.y;
            this.mov.visible = false;
            this.mov2.visible = true;
            this.impulse = new PIXI.Point(0, -1.7 - Math.random());
        } else {
            if(this.impulse.y > 0) {
                if(this.y > this.startY) {
                    this.y = this.startY;
                    this.x += this.speed.x * 2;
                    this.impulse.y = 0;
                    this.mov.visible = true;
                    this.mov2.visible = false;
                    this.isJumping = false;
                } else {
                    this.impulse.y += .1;
                }
            } else {
                if(this.y - player.y < 55 * this.s * 3 && this.isJumping && !player.isDead && player.hitTimer == 0) {
                    if(!this.isDamaged) {
                        this.isDamaged = true;
                        player.damage();
                        isDamage = true;
                    }

                }
                this.impulse.y += .1;
            }
            this.y += this.impulse.y * player.W * .1;
        }
    } else {
        this.x += this.speed.x;
    }
    return isDamage;
};