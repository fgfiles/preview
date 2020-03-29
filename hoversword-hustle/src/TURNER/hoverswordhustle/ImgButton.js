HH.ImgButton = function(img, parent, px, py, text, textSize, tdx, tdy, font, ss, color, count) {

    GodStep.Frame.call(this, null, 2, 2);
    var fc = 1;
    if(count == 0) fc = 0;
    var startS = this.startS =  parent.s * Games.SCALE * (ss || 1);
    this.visible = true;
    this.p = parent;
    this.imgName = img;
    this.scaleble = true;
    this.addChild(this.img = new HH.MovieClip(img, fc, startS, 0, 0, 2, new PIXI.Point(.55, .55)));
    //this.addChild(this.img = new HH.Img(img, 0, startS, 0, 0, new PIXI.Point(0, 0)));

    this.W = this.img.width;
    this.H = this.img.height;
    this.frameCount = fc;
    GodStep.IOverOut.call(this, this.W, this.H);
    GodStep.IDownUp.call(this, this.W, this.H);
    if(text) {
        this.addChild(this.label = new HH.Text(text, font, textSize, 0, 0, 'left', color || 0xffffff));
        this.label.x -= this.label.width/2 + (tdx || 0);
        this.label.y -= this.label.height/2 + (tdy || 0);
        this.label.tdx = tdx || 0;
        this.label.tdy = tdy || 0;
        this.label.HW = -this.label.width/2;
        this.label.HH = -this.label.height/2;

        this.setText(text);
    }

    this.img.anchor = new PIXI.Point(0.5, 0.5);
    this.setHitArea(-this.W/2, -this.H/2, this.W, this.H);
    this.addChild(this.over = new GodStep.Frame('over')); this.over.p = this;

    GodStep.IDownUp.call(this.over, this.W, this.H);

    addEvent(this, GodStep.FRAME_DOWN, this.h_mouse);
    addEvent(this, GodStep.FRAME_OUT, this.h_mouse);
    addEvent(this, GodStep.FRAME_OVER, this.h_mouse);
    addEvent(this.over, GodStep.FRAME_UP, this.h_mouse);

    this.place(px, py);
}; extend(HH.ImgButton, Games.ImgButton);


pro.setTexture = function(name) {
    var tex = GodStep.textures[name];
    if(!tex) {
        tex = PIXI.Texture.fromFrame(name);
    }
    this.img.setTexture( tex);
};
pro.setText = function (v) {
    this.label.setText(v);
    this.label.updateText(v);
    this.label.x =  -(this.label.width/2 + ( this.label.tdx || 0));
    this.label.y = -(this.label.height/2 + (this.label.tdy || 0));
    this.label.HW = -this.label.width/2;
    this.label.HH = -this.label.height/2;
    if(this.label.width * 1.5 > this.W) {
        this.label.scale.x = this.label.scale.y = this.W/(this.label.width * 1.5) ;
        this.label.x =  -(this.label.width/2 + ( this.label.tdx || 0));
        this.label.y = -(this.label.height/2 + (this.label.tdy || 0));
        this.label.HW = -this.label.width/2;
        this.label.HH = -this.label.height/2;
    }
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
            if(this.frameCount > 0) this.img.setToFrame(1);
            addEvent(this, GodStep.FRAME_MOVE, this.h_move);
            break;
        case GodStep.FRAME_UP:
            if(this.p.isClicked && this.p.isOvered) {
                dispatch(t.parent, Games.ImgButton.CLICK);
                GS.playSound('zclick', 0, HH.SOUND);
            }
            this.visible = false;
            this.p.isOvered = false;
            this.p.isDown = false;
            delEvent(this.p, GodStep.FRAME_MOVE, this.h_move);
            this.p.isClicked = false;
            break;
        case GodStep.FRAME_OUT:
            if(this.frameCount > 0) this.img.setToFrame(0);
            this.isOvered = false;
            break;
        case GodStep.FRAME_OVER:
            if(this.frameCount > 0)  this.img.setToFrame(1);
            if(this.isClicked) {
                this.isOvered = true;
            }
            break;
    }
};