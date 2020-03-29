HH.StartMenu = function (soul) {
    GS.LFrame.call(this, soul, 'StartMenu');
    var s = this.soul.startS * 3;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.titleBack = new HH.Img('title', HH.TITLE_ID, s, 0, 0, new PIXI.Point()));
    if(HH.TITLE_SWORD_ID >= 0) {
        this.container.addChild(this.title_swords = new HH.Img('title_swords', HH.TITLE_SWORD_ID, s, 0, 0, new PIXI.Point()));
    }

    this.container.addChild(this.b_play = new HH.ImgButton('b_play', this, 0, 0, HH.S('play', 1), 35 * s, soul.W * .003,HH.BUTTON_DY * s, 3, null, 0x100000));
    this.container.addChild(this.b_settings = new HH.ImgButton('b_settings', this, 0, 0));

    addEvent(this.b_play, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_settings, Games.ImgButton.CLICK, this.h_buttons);



}; extend(HH.StartMenu, GS.LFrame);

pro.init = function () {
    GS.WebText.deleteAll();
    var webElem;
    var s = this.soul.startS * 2.8;
    if(HH.IS_ARAB) {
        webElem = new GS.WebText(HH.S('play', 1), 40 * s, 'wf1', '#100000', this.S, this.b_play);
        this.b_play.label.visible = false; webElem.noAlpha = true; webElem.dx = - 44 * s; webElem.dy = - 41 * s;
    }

    this.visible = true;
    this.Scale = this.lastScale;
    if(!this.isFirst) {
        this.isFirst = true;
        GS.playSound('zmighty', 0, HH.SOUND);
    }

    if(HH.SOUND) {
        GS.volumeSound('zloop', 1);
    }
    if(!this.isPlayedSound) {
          GS.playSound('zloop', -1, HH.SOUND);
    }
    this.isPlayedSound = true;
};
pro.update = function () {
    if(this.visible) {
        GS.WebText.returnAlphas();
        GS.WebText.update(this.scale.x);
    }
};

pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent.parent;
   switch(t) {
       case p.b_play:
           p.isPlayedSound = false;
           p.S.gameover.lastLead = 5;
           p.S.screenTo([p.S.playerselect], p);
           break;
       case p.b_settings:
           p.S.screenTo([p.S.settings], p);
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

        this.b_settings.x = w * .71;
        this.b_play.x = w * .88;
        this.b_settings.y =
        this.b_play.y = h * .9;
    }
});