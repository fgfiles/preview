HH.Crow = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov1 = new HH.MovieClip('crow', 52, 1, 0, 0, 1, new PIXI.Point(.5, .5)));
    this.addChild(this.mov2 = new HH.MovieClip('crow2', 1, 1, 0, 0, 1, new PIXI.Point(.5, .5)));

    this.mov2.visible = false;
    this.ww = s * 45;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.phase1 = Math.random() * 4;
    this.r = 4;
    this.hitTimer = 30;
    this.speedY = 0;
    this.attackTimer = 30;
    this.addY = Math.random() * .00025;
    this.isSpawnZ = false;

}; extend(HH.Crow, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {
    if(!bullet.isHit && !this.isKilled && !this.isHitted) {
        var dist = Math.sqrt(Math.pow(bullet.x - this.x, 2) + Math.pow(bullet.y - this.y, 2));
        if(dist <  this.ww * .9) {
            bullet.hit();
            this.isHitted = true;
            this.mov1.visible = false;
            this.mov2.visible = true;
            GS.playSound('zcrow', 0, HH.SOUND);
            this.sx = this.x;
            this.speedY = 0;
        }
    }
};
pro.update = function (player, isEnd) {
    var isDamage = false;

    if(this.isHitted) {
        this.mov2.nextFrame();
      //  if(this.mov2.cycle > 0) {
      //      this.isKilled = true;
     //       this.visible = false;
     //   }
        this.phase = 0.1;
        this.sy += this.a * this.speedY;
        this.speedY += 0.001;
        this.x = this.sx + Math.sin(this.phase) * this.a *.2;
    } else {
        if(this.isCrowAttack) {
            this.mov2.nextFrame();
            this.speedX += (this.a * .015 - this.speedX) * .05;
            this.x -= this.speedX;
            this.speedY -= 0.00019;
            if(this.speedY < 0) this.speedY = 0;
            this.sy += this.a * this.speedY;
            if(this.y > player.y - player.W/2) {
                this.speedY *= 0.982;
            }
           // var P = new PIXI.Point(this.speedX/max, this.speedY/max);
            this.mov1.rotation = Math.atan2(this.speedX, this.speedY * this.a) - Math.PI/2;
        } else {
            //this.phase1 += 0.05;
            this.mov1.nextFrame();
            this.x += this.a * .002;
            this.sy += this.a * this.addY;
            if(this.x > this.a * .95) {
                this.speedY = 0.0127;
                this.speedX = 0.001;
                this.mov2.scale.x = this.mov1.scale.x = -this.mov1.scale.x;
                this.mov1.setToFrame(20);
                this.isCrowAttack = true;
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