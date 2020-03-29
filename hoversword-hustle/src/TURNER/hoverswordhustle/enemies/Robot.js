HH.Robot = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.shadow = new HH.Img('shadow', 0, .8, 0, 0, new PIXI.Point(.4, .5)));
    this.addChild(this.mov = new HH.MovieClip('robot', 7, 1, 0, 0, 1, new PIXI.Point(.5, 1)));
    this.addChild(this.lazer = new HH.Img('lazer', 0, 1, -5 * s, -88 * s, new PIXI.Point(0, .5)));
    this.addChild(this.mov2 = new HH.MovieClip('explosion', 9, 1, 0, 0, 1, new PIXI.Point(.5, .5)));

    this.lazer.scale.x *= .5;
    this.H = 0;
    this.mov2.visible = this.lazer.visible = false;
    this.ww = s * 45;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.phase1 = Math.random() * 4;
    this.r = 4;
    this.hitTimer = 30;
    this.attackTimer = 30;

}; extend(HH.Robot, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {
    if(!bullet.isHit && !this.isKilled && !this.isHitted && this.x < this.a * .95) {
        if(Math.abs(bullet.y - this.y + this.ww * .7) < this.ww * .7) {
            bullet.hit();
            this.isHitted = true;
            this.startY = this.y;
            this.speedY = -this.ww * (.18 + Math.random() * .1);
        }
    }

};
pro.update = function (player, isEnd) {
    var isDamage = false;
    this.mov.nextFrame();
    this.x -= this.a * .0039;
    if( this.isHitted ) {
        this.mov.rotation -= .1;
        this.mov.y +=this.speedY;
        this.mov.anchor.x += (.5 - this.mov.anchor.x) * .1;
        this.mov.anchor.y += (.5 - this.mov.anchor.y) * .1;
        this.speedY += this.ww * .01;
        if(this.mov.y > 0 && this.speedY > 0) {
            this.mov.visible = this.shadow.visible = false;
            if(!this.mov2.visible) {
                GS.playSound('zexplode', 0, HH.SOUND);
            }
            this.mov2.visible = true;
        }
        if(this.mov2.visible) {
            this.mov2.nextFrame();
            if(this.mov2.cycle > 0) {
                this.visible = false;
                this.isKilled = true;
            }
        }
    } else {
        if(this.x - player.x < player.W * 3) {
            if(this.lazer.alpha > 0.01) {
                this.lazer.alpha-=.05;
            } else {
                this.x -= this.a * .008;
            }
            this.lazer.scale.x = Math.abs((this.x - player.x - player.W)/(player.W * 4.5));
            this.lazer.rotation = Math.atan2(player.y - this.y - this.lazer.y + player.W , player.x - this.x + player.W);// + Math.PI/2;// + Math.PI * 3/2;
            if( this.x > player.x + player.W && !this.isDamaged  && !this.isKilled && this.visible && !isEnd && !player.isDead && player.hitTimer == 0) {
                this.isDamaged = true;
                this.lazer.visible = true && !this.isKilled;
                player.damage();
                isDamage = true;
            }
        }
    }

    return isDamage;

};