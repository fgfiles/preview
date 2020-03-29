HH.Box = function (s, type) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.img = new HH.MovieClip('box', 1, 1, 0, 0, 1, new PIXI.Point(.5, .5)));
    this.addChild(this.mov2 = new HH.MovieClip('explosion', 9, 1, 0, 0, 1, new PIXI.Point(.5, .5)));
    this.img.setToFrame(type);
    this.type = type;
    this.mov2.visible = false;
    this.scale.x = this.scale.y = s;
    this.phase = Math.random();
    this.ww = s * 45;
}; extend(HH.Box, PIXI.DisplayObjectContainer);

pro.hit = function () {
    this.isHit = true;
    this.isKilled = true;
    this.visible = false;
    if(this.isHit) {
        this.img.visible = true;
    }
};
pro.interact = function (bullet) {
    if(!bullet.isHit && !this.isKilled && !this.isHitted) {
        var dist = Math.sqrt(Math.pow(bullet.x - this.x, 2) + Math.pow(bullet.y - this.y, 2));
        if(dist <  this.ww * .9) {
            bullet.hit();
            this.img.visible = false;
            if(!this.mov2.visible) {
                GS.playSound('zexplode', 0, HH.SOUND);
            }
            this.mov2.visible = true;
            this.isHitted = true;
        }
    }
};
pro.update = function (player, isEnd) {
    if(this.mov2.visible) {
        this.mov2.nextFrame();
        if(this.mov2.cycle > 0) {
            this.isKilled = true;
            this.mov2.visible = false;
        }
    }
    if(this.player) {
        if(this.isBullet) {
            this.x += this.a * .01;
        }
    } else {
        this.phase += .08;
        this.y = this.sy + Math.sin(this.phase) * this.a * .008;
        this.x += this.sx * this.a * .004;
        var isDamage = false;
        var dist = Math.sqrt(Math.pow(this.y - player.y - player.W, 2) + Math.pow(this.x - player.x - player.W, 2));

        if(player.magnetTimer > 0 && !this.mov2.visible && !this.isKilled && this.type == 0 && this.x < this.a * .95) {
            if(Math.abs(player.y + player.W * .3 - this.y) < player.W * .4) {
                player.getBox(this);
                player.magnetTimer = 0;
                this.player = player;
            }
        }

        if(dist < player.W * 1.1 && !this.isKilled && this.visible && !isEnd && !player.isDead && player.hitTimer == 0) {
            if(!this.isDamaged) {
                this.isDamaged = true;
                player.damage();
                isDamage = true;
            }
        }
    }

    return isDamage;
};