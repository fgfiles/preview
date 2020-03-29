HH.Tree2 = function (s) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('tree2', 1, 1, 0, 0, 1, new PIXI.Point(0.5, .0)));


    this.fires = [];
    var count = Math.random() * 4;

    this.s = s;
    if(Math.random() > .5) {
        this.mov.setToFrame(1);
    }
    this.W = this.mov.width * s;
    this.H = this.mov.height * s;

    for(var i = 0; i<count; i++) {
        var fire = new HH.MovieClip('fire' + parseInt(5 * Math.random() + 1), 6, 1, 0, 0, 1, new PIXI.Point(0.5, .5));
        this.addChild(fire);
        fire.setToFrame(parseInt(6 * Math.random()));
        this.fires.push(fire);
        fire.y = (Math.random() * this.H * .55 + this.H * .25)/this.s;
        fire.x = (Math.random() * this.H * .15 - this.H * .05)/this.s;
    }

    this.scale.x = this.scale.y = s;
}; extend(HH.Tree2, PIXI.DisplayObjectContainer);

pro.interact = function (bullet) {
    for(var f = 0; f<this.fires.length; f++) {
        var fire = this.fires[f];
        var dist = Math.sqrt(Math.pow(this.y + fire.y * this.s - bullet.y, 2) + Math.pow(this.x + fire.x * this.s - bullet.x, 2));
        if(dist < this.W * .09) {
            if(fire.visible) {
                GS.playSound('zsizzle', 0, HH.SOUND);
            }
            fire.visible = false;
        }
    }
};
pro.update = function (player, isEnd) {
    var isDamage = false;
    for(var f = 0; f<this.fires.length; f++) {
        var fire = this.fires[f];
        if(fire.visible) {
            fire.nextFrame();
            var dist = Math.sqrt(Math.pow(this.y + fire.y * this.s - player.y - player.W, 2) + Math.pow(this.x + fire.x * this.s - player.x - player.W, 2));
            if (dist < player.W && !this.isKilled && this.visible && !isEnd  && !player.isDead && player.hitTimer == 0) {
                if(!fire.isDamaged) {
                    fire.isDamaged = true;
                    player.damage();
                    isDamage = true;
                }
            }
        }

    }
    this.x -= HH.SPEED3 * this.s * .53;
    return isDamage;
};