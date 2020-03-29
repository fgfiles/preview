HH.PlayerSelect = function (soul) {
    GS.LFrame.call(this, soul, 'SwordsPreview');
    GS.IDownUp.call(this, soul, soul);
    GS.IOverOut.call(this, soul, soul);
    var s = this.soul.startS *1 * 3;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.back00 = new HH.Img('back1', 0, s, 0, 0, new PIXI.Point(0, 0)));     this.back00.s = s;
    this.container.addChild(this.label = new HH.Text(HH.S('select', 0), 1, 40 * s, 0, 0, 'center', HH.RED));

    this.container.addChild(this.player1 = new HH.MovieClip('player1', 1, this.back00.s, 111,111, 2, new PIXI.Point(.5, .5)));
    this.container.addChild(this.player2 = new HH.MovieClip('player2', 1, this.back00.s, 11,110, 2, new PIXI.Point(.5, .5)));

    this.addChild(this.b_player2 = new HH.ImgButton('b_player2', this, 0, 0, HH.S('Prohyas'), 35 * s, 0,  18 * s, 2, 1, 0xf0f000));
    this.addChild(this.b_player1 = new HH.ImgButton('b_player1', this, 0, 0, HH.S('Vambre'), 35 * s, 0,  18 * s, 2, 1, 0xf0f000));

   // this.b_player1.scaleble = false;
   // this.b_player2.scaleble = false;

    addEvent(this.b_player1, GodStep.FRAME_OVER, this.h_buttons);
    addEvent(this.b_player1, GodStep.FRAME_UP, this.h_buttons);
    addEvent(this.b_player1, GodStep.FRAME_DOWN, this.h_buttons);
    addEvent(this.b_player2, GodStep.FRAME_UP, this.h_buttons);
    addEvent(this.b_player2, GodStep.FRAME_OVER, this.h_buttons);
    addEvent(this.b_player2, GodStep.FRAME_DOWN, this.h_buttons);

    addEvent(this, GodStep.FRAME_UP, this.h_mouse);
    addEvent(this, GodStep.FRAME_DOWN, this.h_mouse);
    addEvent(this, GodStep.FRAME_MOVE, this.h_mouse);


}; extend(HH.PlayerSelect, GS.LFrame);

pro.init = function () {

    GS.WebText.deleteAll();
    var webElem;
    var s = this.soul.startS * 2.8;
    if(HH.IS_ARAB) {
        var size = 30;
        webElem = new GS.WebText(HH.S('Vambre'), size * s, 'wf1', '#f0f000', this.S, this.b_player1); this.b_player1.label.visible = false; webElem.noAlpha = true; webElem.dx = - 35 * s; webElem.dy = - 35 * s;
        webElem = new GS.WebText(HH.S('Prohyas'), size * s, 'wf1', '#f0f000', this.S, this.b_player2); this.b_player2.label.visible = false; webElem.noAlpha = true; webElem.dx = - 62 * s; webElem.dy = - 35 * s;
        webElem = new GS.WebText(HH.S('select', 0), size * s * 1.8, 'wf2', '#990000', this.S, this.label);  webElem.dx = -20 * s; webElem.dy = 41 * s;
    }

    this.visible = true;
    this.selectPlayer(0);
    this.S.gameover.reset();
    GS.WebText.returnAlphas();
};

pro.update = function () {
    if(this.visible) {
       // GS.WebText.returnAlphas();
        GS.WebText.update(this.scale.x);
        if(HH.IS_ARAB) {
            this.label.web.elem.style.opacity = 1;
        }
    }
};

pro.selectPlayer = function (id, isGo) {
    this.player1.setToFrame(id == 1 ? 1 : 0);
    this.player2.setToFrame(id == 2 ? 1 : 0);

    this.b_player1.alpha = id == 1 ? 1 : 0.5;
    this.b_player2.alpha = id == 2 ? 1 :  0.5;

    if(HH.IS_ARAB) {
        this.b_player1.web.elem.style.opacity = this.b_player1.alpha;
        this.b_player2.web.elem.style.opacity = this.b_player2.alpha;
    }
    if(id > 0 && isGo) {
        this.S.levelselect.setPlayer(id);
        this.S.screenTo([this.S.levelselect], this);
    }
   // this.b_player1.img.setTexture(id == 1 ? 'b_player10001' : 'b_player10000');
   // this.b_player2.img.setTexture(id == 2 ? 'b_player20001' : 'b_player20000');
};
pro.h_mouse = function (e) {
    var t = e.content.t;
    var p = e.content.t;
    var w;
    var HELPER_POINT;
    if(t.visible) {
        switch (e.type) {
            case GS.FRAME_UP:
            case GS.FRAME_MOVE:
            case GS.FRAME_DOWN:
                if(e.content.getLocalPosition) {
                    HELPER_POINT = e.content.getLocalPosition(t);
                    w = p.S.W/p.scale.x;
                    if(HELPER_POINT.x < w *.35) {
                        p.selectPlayer(1, e.type == GS.FRAME_UP);
                    }
                    if(HELPER_POINT.x > w *.65) {
                        p.selectPlayer(2, e.type == GS.FRAME_UP);
                    }
                }

                break;
        }
    }
};
pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent;
    switch (t) {
        case p.b_player1:
            p.selectPlayer(1, e.type == GS.FRAME_UP);
            break;
        case p.b_player2:
            p.selectPlayer(2, e.type == GS.FRAME_UP);
            break;
    }

};

Object.defineProperty(pro, 'Scale', {
    get: function() {
        return this.scale.x;
    },
    set: function(v) {
        var value = v;
        var S = this.soul;
        var w = this.S.W/this.scale.x;
        var h = this.S.H/this.scale.x;
        this.scale.x = this.scale.y = value;
        this.b_player1.x = w * .5;
        this.b_player2.x = w * .5;
        this.b_player1.y = h * .71;
        this.b_player2.y = h * .57;
        this.player1.x = w * .2; this.player1.y = h * .52;
        this.player2.x = w * .8; this.player2.y = h * .52;

        this.label.x = w/2 - this.label.width/2;
        var dx = (this.soul.OW - this.soul.W)/2/value;
        var dy = (this.soul.OH - this.soul.H)/2/value;
        this.setHitArea(-dx, -dy, this.S.OW/value, this.soul.OH/value);
    }
});