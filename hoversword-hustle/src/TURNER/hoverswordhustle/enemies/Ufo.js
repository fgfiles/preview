HH.Ufo = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.img = new HH.Img('ufo', 0, 1, 0, 0, new PIXI.Point(.5, .5)));
    this.addChild(this.img2 = new HH.Img('ufo2', 0, 1, 0, 0, new PIXI.Point(.5, .5)));
    this.addChild(this.mov2 = new HH.MovieClip('explosion', 9, 1, 0, 0, 1, new PIXI.Point(.5, .5)));

    this.mov2.visible =
    this.img2.visible = false;
    this.ww = s * 45;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.phase1 = Math.random() * 4;
    this.r = 4;
    this.hitTimer = 30;
    this.attackTimer = 30;

}; extend(HH.Ufo, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {
    if(!bullet.isHit && !this.isKilled && !this.isHitted) {
        var dist = Math.sqrt(Math.pow(bullet.x - this.x, 2) + Math.pow(bullet.y - this.y, 2));
        if(dist <  this.ww * .9) {
            bullet.hit();
            this.isHitted = true;
            this.img.visible = false;
            this.img2.visible = true;
            GS.playSound('zbubblehit', 0, HH.SOUND);
        }
    }
};
pro.update = function (player, isEnd) {
    var isDamage = false;
    this.phase1 += 0.3;

    if(this.isDamaged) {
        this.x += this.a * .05;
    } else {
        if(this.isHitted) {
            if(this.hitTimer-- < 0) {
                this.img2.visible = false;
                if(!this.mov2.visible) {
                    GS.playSound('zexplode', 0, HH.SOUND);
                }
                this.mov2.visible = true;
                this.mov2.nextFrame();
                if(this.mov2.cycle > 0) {
                    this.isKilled = true;
                    this.visible = false;
                }
            }
            this.sy -= this.a * .002;
        } else {
            if(this.r < 0) {
                if(this.attackTimer-- < 0) {
                    this.isDamaged = true;
                }
                this.x += (player.x - this.x + player.W * 1.1) * .1;
                this.sy += (player.y - this.sy + player.W * .9) * .1;
            } else {
                this.x += this.a * .005 * this.sx;
                var aa = .07;
                if(this.sx < 0) {
                    if(this.x < this.a * .05) {
                        this.sx = -this.sx;
                        this.sy += this.a * aa;
                        this.r--;
                    }
                } else {
                    if(this.x > this.a * .95) {
                        this.sx = -this.sx;
                        this.sy += this.a * aa;
                        this.r--;
                    }
                }
            }
        }

    }

    this.y += (this.sy - this.y + Math.sin(this.phase1) * this.a * .01) * .1;

    var dist = Math.sqrt(Math.pow(this.y - player.y - player.W, 2) + Math.pow(this.x - player.x - player.W, 2));
    if(dist < player.W && !this.isKilled && this.visible && !isEnd ) {
        if(Math.abs(this.y - player.y - player.W * .1) < player.W  && !player.isDead && player.hitTimer == 0) {
            if(!this.isDamaged) {
                this.isDamaged = true;
                player.damage();
                isDamage = true;
            }
        }
    }
    return isDamage;
};