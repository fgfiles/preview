HH.Bird = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov1 = new HH.MovieClip('bird', 10, 1, 0, 0, 1, new PIXI.Point(.5, .5)));
    this.addChild(this.mov2 = new HH.MovieClip('bird2', 20, 1, 0, 0, 1, new PIXI.Point(.5, .5)));

    this.mov2.visible = false;
    this.ww = s * 45;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.phase1 = Math.random() * 4;
    this.r = 4;
    this.hitTimer = 30;
    this.speedY = 0;
    this.attackTimer = 30;
    this.isSpawnZ = false;

}; extend(HH.Bird, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {

};
pro.update = function (player, isEnd) {
    var isDamage = false;
    if(player.magnetTimer > 0 && this.mov1.visible && !this.isKilled && this.x < this.a * .95) {
        if(Math.abs(player.y + player.W * .3 - this.y) < player.W * .4 && player.x + player.W * .5 < this.x) {
            this.isKilled = true;
            this.isHitted = true;
            this.isSpawnZ = true;
            this.spawnTime = this.spawnTimer = 3;
            this.mov1.visible = false;
            if(!this.mov2.visible) {
                GS.playSound('zzzz', 0, HH.SOUND);
            }
            this.mov2.visible = true;
        }
    }
    if(this.isHitted) {
        this.mov2.nextFrame();
        if(this.mov2.cycle > 0) {
            this.isKilled = true;
            this.visible = false;
        }
        this.sy += this.a * this.speedY;
        this.speedY += 0.001;
        this.x -= this.a * .004 * 1.5;
    } else {
        this.phase1 += 0.05;
        this.mov1.nextFrame();
        this.x -= this.a * .005;
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