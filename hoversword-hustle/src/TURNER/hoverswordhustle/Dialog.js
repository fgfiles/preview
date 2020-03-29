HH.Dialog = function (soul) {
    GS.LFrame.call(this, soul, 'Dialog');
    var s = this.soul.startS * 3;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.back = new HH.Img('pop_up', 0, s, 0, 0, new PIXI.Point(.5, .5)));
    var text = HH.S('this will', 0) + '\n' + HH.S('sure', 0);
    if(HH.IS_ARAB) {

    } else {
        text = HH.WS(text, 32);
    }
    this.container.addChild(this.label = new HH.Text(text, 3, 21 * s, 0, 0, 'center', 0x100000));

    var st= 32; var s2 = 1.2;
    this.container.addChild(this.b_yes = new HH.ImgButton('b_no', this, 0, 0, HH.S('yes', 1), st * s, soul.W * .003, HH.BUTTON_DY * s, 3, s2, 0x100000));
    this.container.addChild(this.b_no = new HH.ImgButton('b_no', this, 0, 0, HH.S('no', 1), st * s, soul.W * .003, HH.BUTTON_DY * s, 3, s2, 0x100000));

    addEvent(this.b_yes, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_no, Games.ImgButton.CLICK, this.h_buttons);

    this.webtexts = [];

}; extend(HH.Dialog, GS.LFrame);

pro.init = function () {
    this.visible = true;
    GS.WebText.deleteAll(this.webtexts);
    var webElem;
    var s = this.soul.startS * 2.8;
    this.label.alpha = 1;
    if(HH.IS_ARAB) {
        var size = 10;

        this.webtexts.push(webElem = new GS.WebText(HH.S('yes', 1), size * s* 3.4, 'wf1', '#100000', this.S, this.b_yes)); this.b_yes.label.visible = false; webElem.noAlpha = true; webElem.dx = - 35 * s; webElem.dy = - 32 * s;
        this.webtexts.push(webElem = new GS.WebText(HH.S('no', 1), size * s * 3.4, 'wf1', '#100000', this.S, this.b_no)); this.b_no.label.visible = false; webElem.noAlpha = true; webElem.dx = -20 * s; webElem.dy = - 32 * s;
        this.webtexts.push(webElem = new GS.WebText(this.label.text, size * s * 1.9, 'wf4', '#990000', this.S, this.label));  webElem.dx = -25 * s; webElem.dy = - 1 * s;
    }
};
pro.update = function () {
    if(this.visible) {
        if(HH.IS_ARAB) {
            this.b_yes.web.addTargetPos = new PIXI.Point(this.container.x, this.container.y);
            this.b_no.web.addTargetPos = new PIXI.Point(this.container.x, this.container.y);
            this.label.web.addTargetPos = new PIXI.Point(this.container.x, this.container.y);
        }
    }
};

pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent.parent;
   switch(t) {
       case p.b_yes:
           p.S.settings.closePop();
           p.visible = false;
           p.S.clearPlayer();
           GS.WebText.deleteAll(p.webtexts);
           break;
       case p.b_no:
           GS.WebText.deleteAll(p.webtexts);
           p.visible = false;
           p.parent.parent.initClose();
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
        this.scale.x = this.scale.y = 1;
        this.back.x = 0;//w/2;
        this.container.x = w/2;
        this.container.y = h/2;
        this.back.y = 0;
        this.b_no.y = this.b_yes.y = h * .1;
        this.b_yes.x = -w * .13;
        this.b_no.x = w * .13;
        this.label.x = -this.label.width/2;
        this.label.y = -h * .2;
    }
});