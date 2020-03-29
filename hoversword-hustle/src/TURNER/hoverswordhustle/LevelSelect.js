HH.LevelSelect = function (soul) {
    GS.LFrame.call(this, soul, 'LevelSelect');
    var s = this.soul.startS *1;
    this.addChild(this.container = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.back00 = new HH.Img('back1', 0, s * 3, 0, 0, new PIXI.Point(0, 0))); this.back00.s = s;
    this.container.addChild(this.label = new HH.Text(HH.S('choose', 0), 2, 105 * s, 0, 0, 'left'));
    this.addChild(this.unlock = new HH.Text(HH.S('unlock', 0) , 2, 57 * s * (HH.IS_ARAB ? 2 : 1), 0, 0, 'center'));


    var w = this.S.W;
    this.SWW = w * .1;
    var h = this.S.H;
    var d = w * .18;
    var t = this.s;
    this.s *= 1.2;
    this.levels = [];
    var cost = -4;
    for(var i = 0; i<12; i++) {
        var but = new HH.LevelButton('b_level_back', this, i + 1, 25 * s, 0, 0, 1);
        var y = i > 4 ? (i > 8 ? h * .6 : h * .35) :  h* .1;
        but.x = i * d + w * .15 - (i > 4 ? (i > 8 ? 7: 4) : 0) * d;
        but.y = y + h * .25;
        this.container.addChild(but);
        this.levels.push(but);

        if(i > 10) {
            cost += 4;
        } else
        if(i > 7) {
            cost += 3;
        } else {
            cost += 2;
        }
        but.$ = cost;
        addEvent(but, GS.FRAME_UP, this.h_levelsMove);
        addEvent(but, GS.FRAME_OUT, this.h_levelsMove);
        addEvent(but, GS.FRAME_MOVE, this.h_levelsMove);
    }
    this.s = t;

    this.container.addChild(this.arrowL = new PIXI.DisplayObjectContainer());
    this.container.addChild(this.arrowR = new PIXI.DisplayObjectContainer());
    this.arrowL.addChild(this.amL = new HH.MovieClip('hint_l', 8, s * 3, 0, 0, 0, new PIXI.Point(1, 0.5)));
    this.arrowL.addChild(this.tL = new HH.Text('123', 3, 52 * s, 0, 0, 'right', 0xffffff));
    this.arrowR.addChild(this.amR = new HH.MovieClip('hint_r', 8, s * 3, 0, 0, 0, new PIXI.Point(0, 0.5)));
    this.arrowR.addChild(this.tR = new HH.Text('123', 3, 52 * s, 0, 0, 'left', 0xffffff));

    this.tR.H = this.tR.height;
    this.swords = [];
    for(var j = 0; j<12; j++) {
        this.swords.push(HH.S('s' + (j + 1), 2));
    }
}; extend(HH.LevelSelect, GS.LFrame);

pro.setPlayer = function (playerID) {
    this.playerID = playerID;
    if(this.player) {
        this.removeChild(this.player);
    }
    var w = this.S.W/this.scale.x;
    var h = this.S.H/this.scale.x;
    this.addChildAt(this.player = new HH.MovieClip('level_hero' + playerID, playerID == 1 ? 11 : 14, this.back00.s * 3, w * .1, h * 1.025, 2, new PIXI.Point(.5, 1)), 1);
};
pro.init = function () {
    this.visible = true;
    this.label.alpha = this.unlock.alpha = 1;
    this.arrowL.visible = this.arrowR.visible = false;
    var player = this.S.PLAYER;

    if(player.NEW_UNLOCKED) {
        player.NEW_UNLOCKED = false;
        this.lastUnlocked = this.levels[player.UNLOCK_ID];
        this.lastUnlocked.alpha = 0;
        this.lastUnlockedPX = new PIXI.Point(this.lastUnlocked.x ,this.lastUnlocked.y);
        GS.playSound('znewsword', 0, HH.SOUND);
    }
    var allUnlocked = true;
    for(var j = 0; j<this.levels.length; j++) {
        if(player.levels[j]) {
            this.levels[j].unlocked();
        } else {
            allUnlocked = false;
            this.levels[j].locked(this.levels[j].$ - player.points);
        }
    }
    var quests = 1;

    this.unlock.visible = !allUnlocked;
    if(this.S.PLAYER.nextUnlock == 0) {
        this.unlock.visible = false;
    }
    this.unlock.setText(HH.S('unlock', 0) + " " + this.S.PLAYER.nextUnlock  + " \n" + HH.S('quest', 0));
    this.unlock.updateText();
    this.unlock.filters = [new PIXI.BlurFilter()];
    this.unlock.filters[0].blurYFilter.uniforms.blur.value *=
    this.unlock.filters[0].blurXFilter.uniforms.blur.value *= .05;
    this.updateLabels();


    GS.playSound('zchoose', 0, HH.SOUND);

    GS.WebText.deleteAll();
    var webElem;
    var s = this.soul.startS * 2.8;
    if(HH.IS_ARAB) {
        var size = 30;
        webElem = new GS.WebText(HH.S('choose', 0), size * s * 1, 'wf2', '#ffffff', this.S, this.label);  webElem.dx = -5 * s; webElem.dy = 22 * s;
        webElem = new GS.WebText(this.unlock.text, size * s * .7, 'wf2', '#ffffff', this.S, this.unlock);  webElem.dx = -5 * s; webElem.dy = 22 * s;
        webElem = new GS.WebText('', size * s * .45, 'wf1', '#ffffff', this.S, this.arrowL);  this.tL.visible = false; webElem.noAlpha = true;  webElem.dx = 25 * s; webElem.dy = -17 * s;
        webElem = new GS.WebText('', size * s * .45, 'wf3', '#ffffff', this.S, this.arrowR);  this.tR.visible = false; webElem.noAlpha = true;  webElem.dx = -25 * s; webElem.dy = -17 * s;
        this.arrowR.sdx = webElem.dx;
    }


};
pro.updateLabels = function () {
    this.unlock.x = this.S.W/this.scale.x * .3 - this.unlock.width/2;
    this.unlock.y = this.S.H/this.scale.y * .8 - this.unlock.height/2;
};
pro.update = function () {
    if(this.visible) {
        GS.WebText.returnAlphas();

        if(this.player) {
            this.player.nextFrame();
            if(this.lastUnlocked) {
                this.lastUnlocked.alpha += (1 - this.lastUnlocked.alpha) * .05;
                this.lastUnlocked.x = this.lastUnlockedPX.x  + Math.random() * (1 - this.lastUnlocked.alpha) * this.SWW;
                this.lastUnlocked.y = this.lastUnlockedPX.y + Math.random()* (1 - this.lastUnlocked.alpha) * this.SWW;
            }
        }

        GS.WebText.update(this.scale.x);

    }
};
pro.h_levelsMove = function (e) {
    var t = e.target;
    var p = t.parent.parent;
    switch (e.type) {
        case GS.FRAME_UP:
        case GS.FRAME_OUT:
            if(e.type == GS.FRAME_UP) {
                if(!t.isLocked) {
                    var levelID = p.levels.indexOf(t);
                    p.S.pregame.setPlayer(p.playerID);
                    p.S.pregame.setLevel(levelID);
                    p.S.screenTo([p.S.pregame], p);
                    GS.playSound('zpop', 0, HH.SOUND);
                } else {
                    GS.playSound('zclick', 0, HH.SOUND);
                }
            }
            p.arrowL.visible =
            p.arrowR.visible = false;
            if(HH.IS_ARAB) {
                if(p.arrowR.web.elem) {
                    p.arrowR.web.elem.style.visibility = p.arrowL.visible ? "visible" : "hidden";
                    p.arrowL.web.elem.style.visibility = p.arrowR.visible ? "visible" : "hidden";
                }
            }

            break;
        case GS.FRAME_MOVE:
            if( p.levels) {
                var id = p.levels.indexOf(t);
                if(e.content.getLocalPosition) {
                    var HELPER_POINT = e.content.getLocalPosition(p);
                    var w = p.S.W/p.scale.x;
                    if(t.isOver) {
                        if(p.lastID != id) {
                            if(t.isLocked) {
                                p.tL.setText(HH.S('locked', 2));
                                p.tR.setText(HH.S('locked', 2));
                            } else {
                                p.tL.setText(p.swords[id]);
                                p.tR.setText(p.swords[id]);
                            }
                            p.tL.updateText();
                            p.tR.updateText();
                            p.tR.y =  p.tL.y =  -p.tR.H * 1.5;

                            p.amL.setToFrame(0);
                            p.amR.setToFrame(0);
                            p.arrowL.visible = HELPER_POINT.x > w/2;
                            p.arrowR.visible = HELPER_POINT.x < w/2;

                            if(HH.IS_ARAB) {
                                p.arrowL.web.elem.innerText =  p.tL.text;
                                p.arrowR.web.elem.innerText =  p.tR.text;
                            }

                            if(HH.IS_ARAB) {
                                if(p.arrowR.web.elem) {
                                    p.arrowR.web.elem.style.visibility = p.arrowL.visible ? "visible": "hidden";
                                    p.arrowL.web.elem.style.visibility = p.arrowR.visible ? "visible": "hidden";
                                    p.arrowR.web.dx = p.arrowR.sdx - p.arrowR.web.elem.clientWidth * p.scale.x;
                                    p.arrowR.web.updateY();
                                }
                            }

                            var d = p.S.W/p.scale.x * .066;
                            while(p.amR.currentFrame < p.amR.frames.length -1) {
                                if(d * (p.amR.currentFrame) < p.tR.width * 1.05) {
                                    p.amR.nextFrame();
                                } else {
                                    break;
                                }
                            }
                            while(p.amL.currentFrame < p.amL.frames.length -1) {
                                if(d * p.amL.currentFrame < p.tL.width * 1.05) {
                                    p.amL.nextFrame();
                                } else {
                                    break;
                                }
                            }

                            p.tR.x = p.amR.texture.crop.width * p.amR.scale.x/2 - p.tR.width/2;
                            p.tL.x = -(p.amL.texture.crop.width * p.amL.scale.x/2 + p.tL.width/2) - p.tL.height * .7;
                            trace(p.amL.texture.crop.width);
                         //   p.tR.x =  p.amR.width/2 - p.tR.width/2;//  p.tR.height * 1.7;
                        }
                    }

                    p.lastID = id;
                    p.arrowR.x = HELPER_POINT.x;
                    p.arrowR.y = HELPER_POINT.y;
                    p.arrowL.x = HELPER_POINT.x;
                    p.arrowL.y = HELPER_POINT.y;
                }
            }
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

        this.label.y = h * .05;
        this.label.x = w/2 - this.label.width/2;
        this.scale.x = this.scale.y = value;
        this.scale.x = this.scale.y = value;
        var d = w * .18;
        for(var i = 0; i<this.levels.length; i++) {
            var but = this.levels[i];
            var y = i > 4 ? (i > 8 ? h * .6 : h * .35) :  h* .1;
            but.x = i * d + w * .15 - (i > 4 ? (i > 8 ? 7: 4) : 0) * d;
            but.y = y + h * .25;
           // this.container.addChild(but);
           // this.levels.push(but);
          //  addEvent(but, GS.FRAME_MOVE, this.h_levelsMove);
        }
        this.updateLabels();
    }
});