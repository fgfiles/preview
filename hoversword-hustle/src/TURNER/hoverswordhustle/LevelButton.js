HH.LevelButton = function (img, parent, id, textSize, tdx, tdy, ss) {
    HH.ImgButton.call(this, img, parent, 0, 0, null, textSize, tdx, tdy, ss);
    this.addChild(this.img2 =  new HH.MovieClip('b_level', 1, this.img.scale.x, 0, 0, 2, new PIXI.Point(.55, .55)));
    this.addChild(this.sword =  new HH.MovieClip('pic', 11, this.img.scale.x, 0, 0, 2, new PIXI.Point(.5, .5)));
    this.addChild(this.lock = new HH.Img('lock', 0, this.img.scale.x * .9, 0, 0, new PIXI.Point(.5, .82)));
    this.addChild(this.cost = new HH.Img('cost', 0, this.img.scale.x * .9, 0, 0, new PIXI.Point(.5, -.01)));
    this.addChild(this.levelLabel = new HH.Text(id + "", 2, 16 * this.img.scale.x  * (HH.IS_ARAB ? 1.5 : 1), -this.W * .09, -this.H * .02 * (HH.IS_ARAB ? .5 : 1), 'left', 0xffffff));

    this.sword.setToFrame(HH.SWORD_ID[id-1]);
    addEvent(this, GodStep.FRAME_DOWN, this.h_mouse);
    addEvent(this, GodStep.FRAME_OUT, this.h_mouse);
    addEvent(this, GodStep.FRAME_OVER, this.h_mouse);
    addEvent(this.over, GodStep.FRAME_UP, this.h_mouse);

    this.rescale(1);

}; extend(HH.LevelButton, HH.ImgButton);

pro.locked = function (cost) {
    this.sword.visible = false;
    this.lock.visible =
    this.isLocked =
    this.cost.visible =
    this.levelLabel.visible = true;
    this.levelLabel.setText(cost + '');
    this.levelLabel.updateText();
    this.levelLabel.x = -this.W * .04 - this.levelLabel.width/2;
};
pro.unlocked = function () {
    this.sword.visible = true;
    this.lock.visible =
        this.isLocked =
          //  this.img2.visible =
                this.cost.visible =
                    this.levelLabel.visible = false;
};
pro.h_mouse = function(e) {
    var t = e.content.t;
    switch (e.type) {
        case GodStep.FRAME_DOWN:

            this.over.visible = true;
            this.over.interactive = true;
            this.over.hitArea = new PIXI.Rectangle(-this.p.W *.2, -this.p.W *.2, this.p.W *.4, this.p.W *.4);
            this.isClicked = true;
            this.isOvered = true;
            var p = e.content.getLocalPosition(this);
            this.over.x = p.x;
            this.over.y = p.y;
            this.img2.setToFrame(1);
            addEvent(this, GodStep.FRAME_MOVE, this.h_move);
            break;
        case GodStep.FRAME_UP:
            if(this.p.isClicked && this.p.isOvered) {
                dispatch(t.parent, Games.ImgButton.CLICK);
            }
            this.visible = false;
            this.p.isOvered = false;
            this.p.isDown = false;
            delEvent(this.p, GodStep.FRAME_MOVE, this.h_move);
            this.p.isClicked = false;
            break;
        case GodStep.FRAME_OUT:
            this.isOver = false;
            this.img2.setToFrame(0);
            this.isOvered = false;
            break;
        case GodStep.FRAME_OVER:
            this.img2.setToFrame(1);
            this.isOver = true;
            if(this.isClicked) {
                this.isOvered = true;
            }
            break;
    }
};