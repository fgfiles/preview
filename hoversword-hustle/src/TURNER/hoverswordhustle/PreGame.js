HH.PreGame = function (soul) {
    GS.LFrame.call(this, soul, 'PreGame');
    var s = this.soul.startS * 3;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());

    this.container.addChild(this.back00 = new HH.Img('back1', 0, s, 0, 0, new PIXI.Point(0, 0)));
    this.container.addChild(this.back = new HH.Img('back4', 0, s, 0, 0, new PIXI.Point()));

    this.container.addChild(this.scroll = new HH.Img('scroll', 0, s, 0, 0, new PIXI.Point()));
    this.container.addChild(this.client = new HH.MovieClip('client', 11, s, 11,110, 2, new PIXI.Point(.5, .5)));
    this.container.addChild(this.message = new HH.MovieClip('message', 19, s, 11,110, 1, new PIXI.Point(.5, .5)));
    this.container.addChild(this.text = new HH.Text('123', 3, 23 * s, 0, 0, 'center', 0x1000000));

    var st= 32; var s2 = 1.2;
    this.container.addChild(this.b_play = new HH.ImgButton('b_play', this, 0, 0, HH.S('play', 1), st * s, soul.W * .004, 22 * s, 3, s2, 0x100000));
    addEvent(this.b_play, Games.ImgButton.CLICK, this.h_buttons);

    this.deltaW = this.back.width - this.back00.width;
    this.timer = 100;
    this.timerMax = 100;

    this.texts = [];
    for(var i = 0; i<12; i++) {
        this.texts.push(HH.S('q' + (i+1)));
    }


    this.addChild(this.maska = new PIXI.Graphics());
    var mw = 100;
    this.maska.clear();
    this.maska.beginFill(0xffffff, .5);
    this.maska.drawRect(0, 0, this.maska.w  = mw, this.maska.h = mw * this.S.H/this.S.W);
    this.maska.endFill();
    this.mask = this.maska;
}; extend(HH.PreGame, GS.LFrame);


pro.setPlayer = function (id) {
    this.playerID = id;
};
pro.setLevel = function (v) {
    this.swordID = v;
    this.client.setToFrame(HH.SWORD_ID[v]);
    var t = this.texts[HH.SWORD_ID[v]];
    this.text.setText(HH.WS(t, 24));
    this.text.updateText();

    this.message.visible = HH.SWORD_ID[v] == 1 || HH.SWORD_ID[v] == 3 || HH.SWORD_ID[v] == 7;


};
pro.init = function () {
    this.visible = true;
    this.back.x =0;
    this.timer =
    this.timerMax = 100;
    this.text.alpha = 1;
    GS.WebText.deleteAll();
    var webElem;
    var s = this.soul.startS * 2.8;
    if(HH.IS_ARAB) {
        var size = 30;
        webElem = new GS.WebText(HH.S('play', 1), size * s, 'wf1', '#ffffff', this.S, this.b_play); this.b_play.label.visible = false; webElem.noAlpha = true; webElem.dx = - 35 * s; webElem.dy = - 35 * s;
        webElem = new GS.WebText(this.text.text, size * s * 0.75, 'wf4', '#100000', this.S, this.text);  webElem.dx = -300 * s; webElem.dy = 41 * s;
    }

};
pro.update = function () {
    if(this.visible) {
        GS.WebText.returnAlphas();
        if(this.timer > 0) {
            this.timer-=2;
        }
        this.message.nextFrame();
        this.back.x = -(1 - this.timer/this.timerMax) * this.deltaW;
        this.scroll.x = this.back.x + this.deltaW * 2.6;
        this.client.x = this.back.x * .4;
        this.client.y = this.deltaW * 2.2;
        this.message.x = this.client.x + this.deltaW * 1.76;
        this.message.y = this.client.y - this.deltaW * 0.02;
        this.text.x = this.scroll.x + this.deltaW * 4.1 - (HH.IS_ARAB ? 0 :this.text.width);
        this.text.y = this.S.H/this.scale.y * .15;
        this.b_play.y = this.text.y + this.text.height  + this.deltaW * .7;
        this.b_play.x = this.text.x + this.deltaW * 1.2;
        if(HH.IS_ARAB) {
            this.b_play.x = this.scroll.x + this.deltaW * 4.1 - this.S.W * .2 / this.scale.x;
            this.b_play.y = this.text.y + this.text.height + this.deltaW * 1.5;
        }

        GS.WebText.update(this.scale.x);
    }
};

pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent.parent;
   switch(t) {
       case p.b_play:
           p.S.swordspreview.setSword(p.playerID, p.swordID + 1);
           p.S.screenTo([p.S.swordspreview], p);
           break;
   }
};

Object.defineProperty(pro, 'Scale', {
    get: function() {
        return this.scale.x;
    },
    set: function(v) {
        var value = this.lastScale = v;//Math.min(this.S.H/this.S.OH, this.S.W/this.S.OW) * this.S.startS;
        var S = this.soul;
        var w = S.W/v;
        var h = S.H/v;
        this.scale.x = this.scale.y = value;
        this.maska.scale.y = this.maska.scale.x = this.S.W/this.maska.w/value;
        var sy = h * .4;
        var d = h * .2;
    }
});