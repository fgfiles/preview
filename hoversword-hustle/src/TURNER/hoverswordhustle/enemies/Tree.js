HH.Tree = function (s, type) {
    PIXI.DisplayObjectContainer.call(this);
    this.addChild(this.mov = new HH.MovieClip('tree', 7, 1, 0, 0, 1, new PIXI.Point(0.5, .95)));
    this.addChild(this.cut = new HH.MovieClip('tree_cut', 7, 1, 0, 0, 1, new PIXI.Point(0.49, 1.32)));

    if(type == 0) {
        this.mov.visible = false;
        this.addChild(this.jay = new HH.MovieClip('treejay', 0, 1, 0, 0, 1, new PIXI.Point(0.5, .95)));
    }
    this.mov.setToFrame(this.frameID = parseInt(4 * Math.random()));
    this.cut.setToFrame(this.frameID);
    this.cut.visible = false;
    this.ww = s * 86;
    this.s = s;
    this.scale.x = this.scale.y = s;
    this.speed = new PIXI.Point(s * -5, 0);
    this.isTree2 = true;
}; extend(HH.Tree, PIXI.DisplayObjectContainer);

pro.update = function (player, isEnd) {
    var isDamage = false;
    var dist = this.x - player.x;
    if(player.isSlash) {
        if(dist > 0 && dist < this.ww * 2.2) {
            if(!this.isKilled) {
                if(this.jay && player.hitTimer == 0) {
                    this.isDamaged = true;
                    player.damage();
                    isDamage = true;
                } else {
                    if(!this.jay) {
                        this.isKilled = true;
                        this.mov.setToFrame(this.frameID + 4);
                        if(!this.cut.visible) {
                            GS.playSound('zsizzle', 0, HH.SOUND);
                        }
                        this.cut.visible = true;
                    }
                }
            }
        }
    }
    if(this.cut.visible) {
        this.cut.x += this.ww * .01;
        this.cut.y -= this.ww * .015;
        this.cut.rotation -= .022;
    }
    if(!this.isDamaged && player.hitTimer == 0 && !this.isKilled && this.jay == null) {
        if(dist < this.ww * 1.65) {
            this.isDamaged = true;
            player.damage();
            isDamage = true;
        }
    }

    this.x -= HH.SPEED3 * this.s;
    return isDamage;
};