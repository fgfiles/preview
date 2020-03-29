HH.Pause = function (soul) {
    GS.LFrame.call(this, soul, 'Pause');
    var s = this.soul.startS * 3.01;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.back = new HH.Img('back1', 0, s, 0, -1, new PIXI.Point()));
    this.container.addChild(this.label = new HH.Text(HH.S('paused', 0), 1, 45 * s, 0, 0, 'left', HH.RED));

    var st= 32; var s2 = 1.2;
    this.container.addChild(this.b_resume = new HH.ImgButton('b_menu', this, 0, 0, HH.S('resume', 1), st * s, soul.W * .003,HH.BUTTON_DY * s, 3, s2, 0x100000));
    this.container.addChild(this.b_sound = new HH.ImgButton('b_menu', this, 0, 0, HH.S('on', 1), st * s, soul.W * .003,HH.BUTTON_DY * s, 3, s2, 0x100000));
    this.container.addChild(this.b_menu = new HH.ImgButton('b_menu', this, 0, 0, HH.S('quit', 1), st * s, soul.W * .003,HH.BUTTON_DY * s, 3, s2, 0x100000));

    this.webtexts = [];
    addEvent(this.b_menu, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_resume, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_sound, Games.ImgButton.CLICK, this.h_buttons);

}; extend(HH.Pause, GS.LFrame);

pro.closePop = function () {
    this.popTimer = 100;
    this.pop.visible = true;
    this.pop.scale.x = this.pop.scale.y = 2;
};
pro.init = function () {
    this.visible = true;
    this.Scale = this.lastScale;
    this.b_sound.setText(HH.S(HH.SOUND ? 'on' : 'off', 1));

    GS.WebText.deleteAll(this.webtexts);
    this.label.alpha = 1;
    var webElem;
    var s = this.soul.startS * 2.8;
    if(HH.IS_ARAB) {
        var size = 30;
        this.webtexts.push(webElem = new GS.WebText(HH.S('resume', 1), size * s, 'wf1', '#100000', this.S, this.b_resume)); this.b_resume.label.visible = false; webElem.noAlpha = true; webElem.dx = - 44 * s; webElem.dy = - 35 * s;
        this.webtexts.push(webElem = new GS.WebText(HH.S(HH.SOUND ? 'on' : 'off', 1), size * s, 'wf1', '#100000', this.S, this.b_sound)); this.b_sound.label.visible = false; webElem.noAlpha = true; webElem.dx = - 85 * s; webElem.dy = - 35 * s;
        this.webtexts.push(webElem = new GS.WebText(HH.S('quit', 1), size * s, 'wf1', '#100000', this.S, this.b_menu)); this.b_menu.label.visible = false; webElem.noAlpha = true; webElem.dx = - 75 * s; webElem.dy = - 35 * s;
        this.webtexts.push(webElem = new GS.WebText(HH.S('paused', 1), size * s * 1.5, 'wf1', '#990000', this.S, this.label));webElem.dx = 25 * s; webElem.dy = 18 * s;
    }

};
pro.update = function () {
    if(this.visible) {

    }
};

pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent.parent;
   switch(t) {
       case p.b_sound:
           HH.SOUND = !HH.SOUND;
           p.b_sound.setText(HH.S(HH.SOUND ? 'on' : 'off', 1));
           if(HH.SOUND) {
               GS.volumeSound('zloop1', 1);
               GS.playSound('zloop1', -1, HH.SOUND);
           } else {
               GodStep.volumeSound('zloop1', 0);
           }
           if(HH.IS_ARAB) {
               p.b_sound.web.elem.innerText = HH.S(HH.SOUND ? 'on' : 'off', 1);
           }
           p.S.savePlayer();
           break;
       case p.b_menu:
           GS.volumeSound('zloop1', 0);
           p.S.gameplay.isPlaySound = false;
           p.S.screenTo([p.S.startmenu], p.S.gameplay);
           if(p.S.gameplay.player.isBlowDry) {
             //  GS.playSound('zblowdry', -1, HH.SOUND);
               GS.volumeSound('zblowdry', 0);
           }
           break;
       case p.b_resume:
            GS.WebText.deleteAll(p.webtexts);
            p.visible = false;
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

        this.b_menu.x = this.b_resume.x = this.b_sound.x = w/2;
        var sy = h * .4;
        var d = h * .2;
        this.b_menu.y = sy + d * 2;
        this.b_sound.y = sy + d;
        this.b_resume.y = sy;

        this.label.x = w/2 - this.label.width/2;
        this.label.y = h * .03;

    }
});