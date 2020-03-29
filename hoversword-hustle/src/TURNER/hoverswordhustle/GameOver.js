HH.GameOver = function (soul) {
    GS.LFrame.call(this, soul, 'GameOver');
    var s = this.soul.startS * 3.01;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.back = new HH.Img('back3', 0, s, 0, -1, new PIXI.Point()));
    this.container.addChild(this.label = new HH.Text(HH.S('over', 0), 1, 40 * s, 0, 0, 'left', HH.RED));
    this.container.addChild(this.total = new HH.Text(HH.S('total', 0) + "\n\n" + HH.S('best', 0), 3, 27 * s, 0, 0, 'center', 0xff5555));
    this.container.addChild(this.points = new HH.Text('123', 3, 27 * s, 0, 0, 'center', 0x100000));

    var st= 32; var s2 = 1.2;
    this.container.addChild(this.b_continue = new HH.ImgButton('b_continue', this, 0, 0, HH.S('continue', 1), st * s,5 * s, 5 * s, 3, s2, 0x100000));
    this.container.addChild(this.b_play = new HH.ImgButton('b_play', this, 0, 0, HH.S('play', 1), st * s, 5 * s,HH.BUTTON_DY * s, 3, s2, 0x100000));
    this.container.addChild(this.b_menu = new HH.ImgButton('b_play', this, 0, 0, HH.S('menu', 1), st * s, 5 * s,HH.BUTTON_DY * s * 1.1, 3, s2, 0x100000));

    this.container.addChild(this.leadContainer = new PIXI.DisplayObjectContainer());
    this.leads = [];
    for(var i = 0; i<5; i++) {
        var x = 25 * s * i;

        var lb = new HH.Img('lead1', 0, s, x, 0, new PIXI.Point(.5, .5));
        this.leadContainer.addChild(lb);
        var lf = new HH.Img('lead2', 0, s, x, 0, new PIXI.Point(.4, .4));
        this.leadContainer.addChild(lf);
        var la = new HH.MovieClip('lead3', 3, s, x, 0, 1, new PIXI.Point(.5,.5));
        this.leadContainer.addChild(la);
        la.b = lb;
        la.f = lf;
        this.leads.push(la);
    }
    this.maxTimer = 30;
    addEvent(this.b_menu, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_continue, Games.ImgButton.CLICK, this.h_buttons);
    addEvent(this.b_play, Games.ImgButton.CLICK, this.h_buttons);
    this.lastLead = 5;
}; extend(HH.GameOver, GS.LFrame);

pro.reset = function () {
    this.lastLead = 5;
};
pro.init = function () {
    this.visible = true;
    this.points.setText('0' + '\n\n' + '0');
    this.points.updateText();
    this.Scale = this.lastScale;
    this.label.alpha =
    this.total.alpha =
    this.points.alpha = 1;
    this.isPressed = false;
    for(var i = 0; i<5; i++) {
        if(this.lastLead <= i) {
            this.leads[i].f.visible = false;
        } else {
            this.leads[i].f.visible = true;
        }
        this.leads[i].cycle = 0;
        this.leads[i].visible = false;
    }

    GS.WebText.deleteAll();
    var webElem;
    var s = this.soul.startS * 2.8;
    if(HH.IS_ARAB) {
        var size = 30;
        webElem = new GS.WebText(HH.S('play', 1), size * s* .9, 'wf2', '#100000', this.S, this.b_play); this.b_play.label.visible = false; webElem.noAlpha = true; webElem.dx = - 32 * s; webElem.dy = - 15 * s;
        webElem = new GS.WebText(HH.S('menu', 1), size * s* .9, 'wf2', '#100000', this.S, this.b_menu); this.b_menu.label.visible = false; webElem.noAlpha = true;  webElem.dx = - 42 * s; webElem.dy = - 15 * s;
        webElem = new GS.WebText(HH.S('continue', 1), size * s* .9, 'wf2', '#100000', this.S, this.b_continue); this.b_continue.label.visible = false; webElem.noAlpha = true;  webElem.dx = - 40 * s; webElem.dy = -5 * s;
        webElem = new GS.WebText(this.points.text.replace('\n', '\n\n'), size * s * .9, 'wf2', '#100000', this.S, this.points); webElem.dx = 15 * s; webElem.dy = 11 * s;
        webElem = new GS.WebText(this.total.text.replace('\n', '\n\n'), size * s * .9, 'wf2', '#990000', this.S, this.total);  webElem.dx = -25 * s; webElem.dy = 5 * s;
        webElem = new GS.WebText(HH.S('over', 1), size * s * 1.9, 'wf1', '#990000', this.S, this.label);  webElem.dx = -45 * s; webElem.dy = - 1 * s;
    }

};
pro.update = function () {
    if(this.visible) {
        GS.WebText.returnAlphas();
        if(this.timer > 0) {
            this.timer--;
            if(this.timer == 0) {
                this.S.screenTo([this.S.gameplay], this);
            }

            for(var i =0; i<this.leads.length; i++) {
                if(this.leads[i].visible) {
                    this.leads[i].nextFrame();
                    if(this.leads[i].cycle > 0) {
                        this.leads[i].visible = false;
                    }
                }
            }
        }
        GS.WebText.update(this.scale.x);
    }
};

pro.h_buttons = function (e) {
    var t = e.target;
    var p = t.parent.parent;
   switch(t) {
       case p.b_continue:
           if(p.lastLead > 0 && !p.isPressed) {
               p.lastLead--;
               p.isPressed = true;
               p.timer = p.maxTimer;
               p.leads[p.lastLead].f.visible = false;
               p.leads[p.lastLead].visible = true;
               GS.playSound('zgot', 0, HH.SOUND);
           }
           break;
       case p.b_menu:
           p.S.screenTo([p.S.startmenu], p);
           break;
       case p.b_play:
            p.S.screenTo([p.S.playerselect], p);
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
        this.scale.x = this.scale.y = v;

        this.b_continue.x =  w/2;
        this.b_menu.x = w/2 - w * .35;
        this.b_play.x = w/2 + w * .35;
        this.b_menu.y =
        this.b_play.y = h * .9;
        this.b_continue.y = h * .88;

        this.label.x = w/2 - this.label.width/2;
        this.label.y = h * .04;
        this.total.x = w * .53 - this.total.width/2;
        this.points .x = w* .53 - this.points.width/2;
        this.total.y = h * .3;
        this.points.y = h * .36;

        this.leadContainer.x = this.b_continue.x - w * .09;
        this.leadContainer.y = this.b_continue.y - h * .05;
    }
});