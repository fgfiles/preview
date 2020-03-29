HH.Eye = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov1 = new HH.MovieClip('eye', 8, 1, 0, 0, 1, new PIXI.Point(.5, .5)));

    this.ww = s * 30;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.phase1 = Math.random() * 4;
    this.r = 4;
    this.hitTimer = 30;
    this.speedY = 0;
    this.attackTimer = 30;
    this.addY = Math.random() * .00025;
    this.isSpawnZ = false;

    this.life = 180 * Math.random() + 30;

}; extend(HH.Eye, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {

};
pro.update = function (player, isEnd) {
    var isDamage = false;
    this.mov1.nextFrame();
    var dist;
   if(!this.isHitted && player.aimContainer.visible) {
       var s = player.S.startS;
       var sp = new PIXI.Point(Math.cos(player.aimContainer.rotation) * s, Math.sin(player.aimContainer.rotation) * s);
       var pos = new PIXI.Point(player.x + (player.aimContainer.x + 150)*s, player.y + (player.aimContainer.y - 1)*s);

       for(var i = 2; i<10; i++) {
            dist = Math.sqrt(Math.pow(this.y - pos.y - sp.y * 70 * i, 2) + Math.pow(this.x - pos.x - sp.x *70 * i, 2));
            if(dist < this.ww * .9) {
                GS.playSound('zbat', 0, HH.SOUND);
                this.isHitted = true;
                this.sp = sp;
                break;
            }
        }
    }

    if(this.isDamaged) {
        this.x -=this.a * .005;
    } else {
        if(this.isHitted) {
            this.x += this.sp.x * this.a * .047;
            this.sy += this.sp.y * this.a * .047;
        } else
            {
            if(this.isEyeAttack) {
                this.speedX += (this.a * .015 - this.speedX) * .05;
              //  this.x -= this.speedX;
             //   this.speedY -= 0.00019;
             //   if(this.speedY < 0) this.speedY = 0;
               // this.sy += this.a * this.speedY;

                this.x += (player.x - this.x + player.W * 1.1) * .04;
                this.sy += (player.y - this.sy + player.W * .9) * .04;
                if(this.y > player.y - player.W/2) {
                    this.speedY *= 0.982;
                }
                // var P = new PIXI.Point(this.speedX/max, this.speedY/max);
                //   this.mov1.rotation = Math.atan2(this.speedX, this.speedY * this.a) - Math.PI/2;
            } else {
                if(this.life-- < 0) {
                    this.isEyeAttack = true;
                    this.speedY = 0.0127;
                    this.speedX = 0.001;
                    if(this.x > player.x + player.W) {
                        this.mov1.scale.x = -this.mov1.scale.x;
                    }
                }

                this.x += this.a * .007;
                this.sy += this.a * this.addY;
                if(this.x > this.a * .95) {
                    this.speedY = 0.0127;
                    this.speedX = 0.001;
                    this.mov1.scale.x = -this.mov1.scale.x;
                    this.isEyeAttack = true;
                }
            }
        }

        this.y += (this.sy - this.y + Math.sin(this.phase1) * this.a * .01) * .1;
    }

    dist = Math.sqrt(Math.pow(this.y - player.y - player.W, 2) + Math.pow(this.x - player.x - player.W, 2));
    if(dist < player.W && !this.isKilled && this.visible && !isEnd && !this.isHitted) {
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