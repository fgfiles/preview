HH.Interface = function (parent) {
    PIXI.DisplayObjectContainer.call(this);

    this.addChild(this.bar = new HH.Img('bar', 0, 1, HH.GAME_W * .02, HH.GAME_H * .06, new PIXI.Point(0, 0.5)));
    this.addChild(this.cursor = new HH.MovieClip('cursor', 10, 1, 0, this.bar.y, 1, new PIXI.Point(0, 0.72)));

    this.hearts = [[], [], []];
    var heart;
    var sx = HH.GAME_W * .84;
    var sy = HH.GAME_H * .065;
    var sw = HH.GAME_W * .045;
    for(var i = 0; i<3; i++) {
        heart = new HH.Img("heart1", 0, 1, sx + sw * i, sy, new PIXI.Point(.5, .5));
        this.hearts[i].push(heart);
        this.addChild(heart);
        heart = new HH.Img("heart3", 0, 1, sx + sw * i, sy, new PIXI.Point(.5, .5));
        this.hearts[i].push(heart);
        this.addChild(heart);
        heart = new HH.MovieClip('heart2', 15, 1, sx + sw * i, sy, 1, new PIXI.Point(.6, .6));
        this.hearts[i].push(heart);
        this.addChild(heart);
    }
    this.sbx = this.bar.x + this.bar.width * .025;
    this.bw = this.bar.width * .885;
    this.p = parent;

}; extend(HH.Interface, PIXI.DisplayObjectContainer);


pro.damage = function () {
    this.lives--;
    if(this.lives >= 0) {
        var id = 2 - this.lives;
       this.hearts[id][1].visible = false;
       this.hearts[id][0].visible =
       this.hearts[id][2].visible = true;
    }
    return this.lives == 0;
};
pro.init = function () {
    this.pos = 0;
    this.lives = 3;
    for(var i = 0; i<3; i++) {
        this.hearts[i][1].visible = true;
        this.hearts[i][2].visible = false;
        this.hearts[i][2].setToFrame(0);
        this.hearts[i][0].visible = false;
    }
};
pro.update = function () {
    //this.pos += .035;
    this.pos += .00035;
    if(this.pos > 1) {
        this.pos = 1;
        var enemies = this.p.enemies;
        var isCanFinish = true;
        for(var e = 0; e<enemies.length; e++) {
            if(!enemies[e].isKilled) {
                isCanFinish = false;
            }
        }
        if(isCanFinish) {
            this.p.endLevel(true);
        }
    }
    this.cursor.nextFrame();
    this.cursor.x = this.sbx + this.bw * this.pos;

    for(var i = 0; i<3; i++) {
        if(this.hearts[i][2].visible) {
            this.hearts[i][2].nextFrame();
            if(this.hearts[i][2].currentFrame > 14) {
                this.hearts[i][2].visible = false;
            }
        }

    }
};