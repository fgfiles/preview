HH.Settings = function (soul) {
    GS.LFrame.call(this, soul, 'Settings');
    var s = this.soul.startS * 3;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.back = new HH.Img('back1', 0, s, 0, 0, new PIXI.Point()));
    this.container.addChild(this.label = new HH.Text(HH.S('settings', 0), 1, 65 * s, 0, 0, 'left', HH.RED));

    var st= 32; var s2 = 1.2;
    this.container.addChild(this.b_sound = new HH.ImgButton('b_menu', this, 0, 0, HH.S('on', 1).toUpperCase(), st * s, soul.W * .003,HH.BUTTON_DY * s, 3, s2, 0x100000));
    this.container.addChild(this.b_reset = new HH.ImgButton('b_menu', this, 0, 0, HH.S('reset', 1).toUpperCase(), st * s, soul.W * .003,HH.BUTTON_DY * s, 3, s2, 0x100000));
    this.container.addChild(this.b_menu = new HH.ImgButton('b_menu', this, 0, 0, HH.S('main', 1).toUpperCase(), st * s, soul.W * .003,HH.BUTTON_DY * s, 3, s2, 0x100000));
    this.container.addChild(this.b_unlock = new HH.ImgButton('b_menu', this, 0, 0, "CHEAT", st * s * .5, soul.W * .003,HH.BUTTON_DY * s * .5, 3, s2 * .5, 0x100000));

    this.container.addChild(this.pop = new PIXI.DisplayObjectContainer());
    this.pop.addChild(this.pBack = new HH.Img('messagebox', 0, s, 0, 0, new PIXI.Point(.5, .5)));
    this.pop.addChild(this.message = new HH.Text(HH.S('game reset', 0), 3, 32 * s, 0, 0, 'left', 0x100000));
    this.message.x = -this.message.width/2;
    this.message.y = -this.message.height * 1;

    this.pop.visible = false;
    this.popTimer = 0;
    this.container.addChild(this.dialog = new HH.Dialog(soul));
    addEvent(this.b_unlock , Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_menu, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_reset, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_sound, Games.ImgButton.CLICK, this.h_buttons);

}; extend(HH.Settings, GS.LFrame);

pro.closePop = function () {
    this.popTimer = 100;
    this.pop.visible = true;
    this.pop.scale.x = this.pop.scale.y = 2;
    if(HH.IS_ARAB) {
        this.message.web.elem.style.visibility = 'visible';
    }
};
pro.init = function () {
    GS.WebText.deleteAll();
    var webElem;
    var s = this.soul.startS * 2.8;

    this.visible = true;
    this.dialog.visible = false;
    this.Scale = this.lastScale;
    this.b_sound.setText(HH.S(HH.SOUND ? 'on' : 'off', 1).toUpperCase());

    if(HH.IS_ARAB) {
        var size = 30;
        webElem = new GS.WebText(HH.S(HH.SOUND ? 'on' : 'off', 1), size * s, 'wf1', '#100000', this.S, this.b_sound); this.b_sound.label.visible = false; webElem.noAlpha = true; webElem.dx = - 87 * s; webElem.dy = - 35 * s;
        this.b_sound.web = webElem;
        webElem = new GS.WebText(HH.S('reset', 1), size * s* .9, 'wf1', '#100000', this.S, this.b_reset); this.b_reset.label.visible = false; webElem.noAlpha = true; webElem.dx = - 100 * s; webElem.dy = - 31 * s;
        webElem = new GS.WebText(HH.S('main', 1), size * s * .9, 'wf1', '#100000', this.S, this.b_menu); this.b_menu.label.visible = false; webElem.noAlpha = true; webElem.dx = -95 * s; webElem.dy = - 31 * s;
        webElem = new GS.WebText(HH.S('settings', 1), size * s * 1.9, 'wf1', '#990000', this.S, this.label);  webElem.dx = -25 * s; webElem.dy = - 1 * s;
        webElem = new GS.WebText(HH.S('game reset', 0), size * s * .9, 'wf1', '#990000', this.S, this.message);  webElem.dx = -25 * s; webElem.dy = - 1 * s;
        this.message.web.addTargetPos = new PIXI.Point(this.pop.x, this.pop.y);
        this.message.web.elem.style.visibility = 'hidden';
    }

};
pro.initClose = function () {
    if(HH.IS_ARAB) {
        this.message.web.elem.style.visibility = 'hidden';
        this.b_reset.web.elem.style.visibility = 'visible';
        this.b_sound.web.elem.style.visibility = 'visible';
    }
};
pro.update = function () {
    if(this.visible) {
        GS.WebText.returnAlphas();
        if(this.pop.visible) {
            if(this.popTimer > 0) {
                this.popTimer--;
                if(this.popTimer == 0) {
                    this.pop.visible = false;
                    this.initClose();
                }
            }
        }
        this.pop.scale.x = this.pop.scale.y += (1 - this.pop.scale.x) * .1;
        this.dialog.container.scale.x = this.dialog.container.scale.y += (1 - this.dialog.container.scale.x) * .1;
        this.dialog.update();
        GS.WebText.update(this.scale.x);
    }
};

pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent.parent;
    if(p.dialog.visible || p.pop.visible) return;
   switch(t) {
       case p.b_unlock:
           p.S.unlockPlayer();
           break;
       case p.b_sound:
           HH.SOUND = !HH.SOUND;
           p.b_sound.setText(HH.S(HH.SOUND ? 'on' : 'off', 1).toUpperCase());
           if(HH.IS_ARAB) {
               p.b_sound.web.elem.innerText = HH.S(HH.SOUND ? 'on' : 'off', 1);
           }

           if(HH.SOUND) {
               GS.volumeSound('zloop', 1);
               GS.playSound('zloop', -1, HH.SOUND);
           } else {
               GodStep.volumeSound('zloop', 0);
           }
           p.S.savePlayer();
           break;
       case p.b_menu:
           p.S.screenTo([p.S.startmenu], p);
           break;
       case p.b_reset:
           if(HH.IS_ARAB) {
               p.b_reset.web.elem.style.visibility = 'hidden';
               p.b_sound.web.elem.style.visibility = 'hidden';
           }

            p.dialog.init();
            p.dialog.container.scale.x = p.dialog.container.scale.y = 2;
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

        this.b_unlock.x = this.b_menu.x = this.b_reset.x = this.b_sound.x = w/2;
        var sy = h * .4;
        var d = h * .2;
        this.b_unlock.y = sy + d * 2.8;
        this.b_menu.y = sy + d * 2;
        this.b_reset.y = sy + d;
        this.b_sound.y = sy;


        this.pop.x = w/2;
        this.pop.y = h/2;
        this.label.x = w/2 - this.label.width/2;
        this.label.y = h * .03;

        this.dialog.Scale = v;
    }
});