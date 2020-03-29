HH.Buzzard = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('buzzard', 11, 1, 0, 0, 1, new PIXI.Point(0.5, .5)));

    this.ww = s * 65;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.speed = new PIXI.Point(s * -5, 0);
    this.phase1 = Math.random() * 4;
    this.phase2 = Math.random() * 4;
    this.px = 0;
    this.py = 0;
    this.lives = 4;
    this.life = 600;
    this.cactuses = [];
}; extend(HH.Buzzard, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {
    if(!bullet.isLanding && !bullet.isHit && !this.isKilled) {
        var dist = Math.sqrt(Math.pow(bullet.x - this.x - this.ww * .5, 2) + Math.pow(bullet.y - this.y - this.ww * .5, 2));
        if(dist <  this.ww) {
            this.lives--;
            bullet.hit();
            var cactus;
            this.addChild(cactus = new HH.MovieClip('cactus_ball', 11, 1, 0, 0, 1, new PIXI.Point(0.5, .5)));
            this.cactuses.push(cactus);
            cactus.x += this.ww * (Math.random() - .5)* .5;
            cactus.y += this.ww * (Math.random() - .3)* .15;
            GS.playSound('zcactus', 0, HH.SOUND);
            if(this.lives == 0) {
                GS.playSound('zhit1', 0, HH.SOUND);
                this.isKilled = true;
            }
        }
    }

};
pro.update = function (player, isEnd) {
    this.mov.nextFrame();
    var isDamage = false;

    if(this.isKilled ) {
        this.rotation -= 0.01;
        this.px += -this.ax * .04;
        this.py += this.ay * .05;
    } else {
        if(this.life-- > 0) {
            this.px = this.sx + Math.sin(this.phase1) * this.ax;
            this.py = this.sy + Math.sin(this.phase2) * this.ay;
        } else {
            this.px += -this.ax * .085;
        }
    }


    this.phase1 += .035;
    this.phase2 += .011;
    this.x += (this.px - this.x) * .1;
    this.y += (this.py - this.y) * .1;

    if(this.x < player.x + player.W * 1.5 && !this.isKilled && this.visible && !isEnd ) {
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