HH.Player = function (type, sword, parent) {
    PIXI.DisplayObjectContainer.call(this);
    this.isBlowDry = false;
    this.levelID = sword;
    this.S = parent.S;
    var animSpeed = 1;

    this.slashTimer = 0;

    this.W = this.S.startS * 160;
    this.H = this.S.startS * 280;
    var tmp;
    this.p = parent;
    this.MOUSE = new PIXI.Point();

    tmp = HH['PLAYER_'+type+'_AIMHAND'];
    this.addChild(this.aimContainer = new PIXI.DisplayObjectContainer());
    this.aimContainer.x = tmp[0];
    this.aimContainer.y = tmp[1];

    var sw = .36;
    switch (sword) {
        case 0:
        case 2:
        case 5:
        case 6:
        case 7:
        case 11:
            this.addChildAt(this.aim = new HH.MovieClip('aim' + type, 8, 1, 0, 0, animSpeed, new PIXI.Point(0, 0)), 0);
            this.aimContainer.addChild(this.aimSword = new HH.MovieClip('swords', 11, 1, 0, 0, animSpeed, new PIXI.Point(0, 0)));
            this.aimSword.setToFrame(HH.SWORD_ID[sword]);
            this.aimContainer.addChild(this.aim_hand = new HH.Img('aim_hand' + type, 0, 1, 0, 0, new PIXI.Point(type == 2 ? .1 :.07, .5)));

            tmp = HH['PLAYER_'+type+'_AIMSWORD'];
            this.aimSword.x = tmp[0];
            this.aimSword.y = tmp[1];
            this.aimSword.rotation = tmp[2];

            this.createSwing(type, sword, animSpeed);

            switch(sword) {
                case 5:
                    this.createSurf(type, sword, animSpeed);
                    this.hideAim();
                    this.aimRotation = Math.PI * 2;
                    this.addChild(this.raySprite = new PIXI.DisplayObjectContainer());
                    this.rays = [];
                    this.magnetTimer = 0;
                    this.raySprite.visible = false;
                    for(var r = 0; r<2; r++) {
                        this.rays.push(this.raySprite.addChild(new HH.MovieClip('ray2', 2, .9, this.W * 2.8/this.S.startS * sw, this.W * .3 /this.S.startS * sw+ r * this.W /this.S.startS * sw* .4, 1, new PIXI.Point(0, .5))));
                        this.rays.push(this.raySprite.addChild(new HH.MovieClip('ray3', 2, .9, this.W * 2.8/this.S.startS * sw, this.W * .3/this.S.startS * sw + r * this.W /this.S.startS * sw* .4, 1, new PIXI.Point(0, .5))));
                    }
                    break;
                case 6:
                    this.createSurf(type, sword, animSpeed);
                    this.hideAim();
                    this.magnetTimer = 0;
                    this.aimRotation = Math.PI * 2;
                    this.addChild(this.raySprite = new PIXI.DisplayObjectContainer());
                    this.raySprite.visible = false;
                    this.rays = [];
                    this.rays.push(this.raySprite.addChild(new HH.MovieClip('ray', 1, .9, this.W * 3.3/this.S.startS * sw, this.W * .45/this.S.startS * sw, 1, new PIXI.Point(0, .5))));
                    break;
                case 7:
                    this.createSurf(type, sword, animSpeed);
                    this.hideAim();
                    this.reloadTime = 100000000;
                    break;
                case 11:
                    this.createSurf(type, sword, animSpeed);
                    this.hideAim();
                    this.reloadTime = 100000000;
                    this.aimContainer.addChild(this.fen = new HH.MovieClip('blow_lines', 2, .9, this.W * 2.1/this.S.startS * sw, this.W * .05/this.S.startS * sw, 1, new PIXI.Point(0, 1)));
                    break;
            }
            break;
        case 1:
            this.createSurf(type, sword, animSpeed);
            this.addChild(this.slash = new HH.MovieClip('slash' + type, 4, 1, 0, 0, animSpeed, new PIXI.Point(0, 0)));
            this.slash.visible = false;
            break;
        case 3:
        case 4:
        case 8:
        case 9:
        case 10:
            this.createSurf(type, sword, animSpeed);
            this.createSwing(type, sword, animSpeed);
            switch (sword) {
                case 10:
                case 4:
                    this.addChildAt(this.shadow = new HH.Img('shadow', 0, .9, 0, this.ssy = this.W * 1.3/this.S.startS * sw , new PIXI.Point(0, 0)), 0);
                    break;
                case 8:
                    this.addChild(this.arrow = new HH.Img('arrow2', 0, .9, this.W * 1.8, this.W * .3/this.S.startS * sw, new PIXI.Point(-1, .5)));
                    this.arrowPhase = 0;
                    this.arrowSpeed = .054;
                    break;
                default:
                    break;
            }
            break;
    }
    this.state = 0;
    this.timer = 0;
    this.hitTimer = 0;
    this.addChild(this.hit  = new HH.MovieClip('hit' + type, 8, 1, 0, 0, animSpeed, new PIXI.Point(0, 0)));
    this.addChild(this.hitSword = new HH.MovieClip('swords' + type, 12, 1, 0, 0, animSpeed, new PIXI.Point(1, 1)));
    this.hitSwordPosition = HH['PLAYER_'+type+'_SWORD_HIT'];
    this.hitSword.setToFrame(HH.SWORD_ID[sword]);
    this.addChild(this.board  = new HH.MovieClip('board' + type, 0, 1,type == 1 ? 0.05: -1.41, type == 1 ? 51 : 64, animSpeed, new PIXI.Point(0, 0)));
    this.addChild(this.fail  = new HH.MovieClip('fail' + type, 22, 1, -50, -30, animSpeed, new PIXI.Point(0, 0)));
    this.addChild(this.failSword  = new HH.MovieClip('swords', 22, 1, 80.080766765056367,25, animSpeed, new PIXI.Point(0.6, .8)));
    this.failSword.setToFrame(HH.SWORD_ID[sword]);

    this.hit.visible = this.hitSword.visible = false;
    this.board.visible = this.fail.visible = this.failSword.visible = false;
    this.failSword.speedY = -1;
    this.phase = 0;
    this.phase2 = 0;


    if(type == 1) {
        this.addChildAt(this.cape = new HH.MovieClip('cape', 6, 1, 21, 15, animSpeed, new PIXI.Point(0, 0)), 0); this.cape.sx = 21; this.cape.sy = 15;
    }
    addEvent(this.p.container, GodStep.FRAME_DOWN, this.h_mouse);
    addEvent(this.p.container, GodStep.FRAME_MOVE, this.h_mouse);
}; extend(HH.Player, PIXI.DisplayObjectContainer);

HH.SWORD_ID = [0, 1, 5, 9, 3, 6, 7, 10, 2, 4, 8, 11];

pro.destroy = function () {
    delEvent(this.p.container, GodStep.FRAME_DOWN, this.h_mouse);
    delEvent(this.p.container, GodStep.FRAME_MOVE, this.h_mouse);
    return this;
};
pro.createSwing = function (type, sword, animSpeed) {
    this.addChild(this.swingSword = new HH.MovieClip('swords', 11, 1, 0, 0, animSpeed, new PIXI.Point(0, 0)));

    this.addChildAt(this.swing = new HH.MovieClip('swing' + type, 5, 1, 0, type == 2 ? -56:-67, animSpeed, new PIXI.Point(0, 0)), 0);
    this.addChildAt(this.swing_hand = new HH.MovieClip('swing_hand' + type, 5, 1, type == 2 ? 81.5 :  91, type == 2 ? 34 : 26, animSpeed, new PIXI.Point(0, 0)), 1);
    this.swing_swordPosition = HH['PLAYER_'+type+'_AIMSWORD_SWING'];
    this.swingSword.setToFrame(HH.SWORD_ID[sword]);

    this.swing.visible = false;
    this.swing_hand.visible = false;
    this.swingSword.visible = false;
};
pro.createSurf = function (type, sword, animSpeed) {
    this.addChild(this.surfing = new HH.MovieClip('surfing' + type, 6, 1, 0, type == 1 ?  -8 : 0, animSpeed, new PIXI.Point(0, 0)));
    this.addChild(this.allsword = new HH.MovieClip('swords' + type, 12, 1, 0, 0, animSpeed, new PIXI.Point(0, 0)));
    this.surfingA = HH['PLAYER_'+ type +'_SURFANIM'];
    this.allsword.setToFrame(HH.SWORD_ID[sword]);
};
pro.move = function (levelID) {
    if(!this.isDead) {
        this.w = this.S.H/this.p.scale.x;
        this.x = this.sx;
        if(this.rays) {
            for(var r = 0; r<this.rays.length; r++) {
                this.rays[r].nextFrame();
            }
        }
        switch (levelID) {
            case 0:
                this.phase += 0.025;
                this.y = this.sy + Math.sin(this.phase) * this.w * .1;
                break;
            case 2:
                this.phase += 0.028;
                this.y = this.sy + Math.sin(this.phase) * this.w * .22;
                break;
            case 3:
                this.phase += 0.065;
                this.phase2 += 0.012;
                this.y = this.sy + Math.sin(this.phase) * this.w * .01;
                this.x = this.sx + Math.sin(this.phase2) * this.w * .22;
                break;
            case 4:
                this.phase += 0.05;
                this.y = this.sy + Math.sin(this.phase) * this.w * .15;
                this.shadow.y = this.ssy + Math.sin(this.phase + 1.2) * this.w * .012;
                break;
            case 5:
                this.phase += 0.055;
                this.y = this.sy + Math.sin(this.phase) * this.w * .165;
                if(this.box) {
                    this.box.x += (this.x + this.W * 3.8 - this.box.x) * .15;
                    this.box.y += (this.y + this.W  * .5 - this.box.y) * .9;
                }
                if(this.magnetTimer-- < 0) {
                    if(this.raySprite.visible) {
                        this.raySprite.visible = false;
                        this.hideAim();
                        this.showSurf();
                    }
                }
                break;
            case 6:
                this.phase += 0.068;
                this.y = this.sy + Math.sin(this.phase) * this.w * .23;
                if(this.magnetTimer-- < 0) {
                    if(this.raySprite.visible) {
                        this.raySprite.visible = false;
                        this.hideAim();
                        this.showSurf();
                    }
                }
                break;
            case 7:
                this.phase += 0.044;
                this.y = this.sy + Math.sin(this.phase) * this.w * .22;
                break;
            case 11:
                this.phase += 0.035;
                this.phase2 += 0.022;
                this.y = this.sy + Math.sin(this.phase) * this.w * .01;
                this.x = this.sx + Math.sin(this.phase2) * this.w * .22;
                break;
            case 10:
                this.phase += 0.065;
                this.y = this.sy + Math.sin(this.phase) * this.w * .01;
                this.shadow.y = this.ssy + Math.sin(this.phase + 1.2) * this.w * .012;
                break;
            default:
                this.phase += 0.065;
                this.y = this.sy + Math.sin(this.phase) * this.w * .01;
                break;
        }
    }
};
pro.update = function () {
    this.w = this.S.W;/// this.p.scale.x;
    this.ww = this.S.W/this.p.scale.x;

    if(this.isSlash) {
        if(this.slashTimer-- == 0) {
            this.isSlash = false;
        }
    }
    if(this.fen) {
        this.fen.nextFrame();
    }
    if(this.arrow && this.timer == 0) {
        this.arrow.rotation = this.arrowPhase;
        this.arrowPhase += this.arrowSpeed;
        if(this.arrowPhase > .0) {
            this.arrowSpeed = -this.arrowSpeed;
        }
        if(this.arrowPhase < -1.3) {
            this.arrowSpeed = -this.arrowSpeed;
        }
    }
    if(this.hitTimer > 0) {
        this.hitTimer--;
        this.alpha = this.alpha == 1 ? .5 : (this.alpha == .5 ?  .1 :  1);
        if(this.hitTimer == 0) {
            this.alpha = 1;

        }
    }
    if(this.timer > 0) {
        this.timer--;
    }
    if(this.aim) {
        if(this.aim.visible) {
            this.aim.nextFrame();
            if(this.aimRotation) {
                this.aimContainer.rotation = this.aimRotation;
            } else {
                this.aimContainer.rotation = -Math.PI + Math.atan2(this.y - this.MOUSE.y + this.w * .04/ this.p.scale.x, this.x - this.MOUSE.x+ this.w * .17/ this.p.scale.x);
                if(this.aimContainer.rotation < -Math.PI) {
                    this.aimContainer.rotation += Math.PI * 2;
                }
                if(this.levelID == 11) {
                    this.aimContainer.rotation = Math.max(-2.50, Math.min(0.11, this.aimContainer.rotation));
                } else {
                    this.aimContainer.rotation = Math.max(-.82, Math.min(1.05, this.aimContainer.rotation));
                }

            }
        }
    }

    if(this.cape) {
        this.cape.nextFrame();
        this.cape.x = this.cape.sx;
        this.cape.y = this.cape.sy;
        if(this.aim) {
           this.cape.x += (this.aim.visible ? this.w * .02 : 0);
            this.cape.y += (this.aim.visible ? -this.w * .008 : 0);
        }
    }
    if(this.slash) {
        if(this.slash.visible) {
            this.slash.nextFrame();
            if(this.slash.cycle == 1) {
                this.checkHandles();
            }
        }
    }
    if(this.surfing) {
        if(this.surfing.visible) {
            this.surfing.nextFrame();
            if(this.allsword) {
                this.allsword.x = this.surfingA[this.surfing.currentFrame * 3];
                this.allsword.y = this.surfingA[this.surfing.currentFrame * 3 + 1];
                this.allsword.rotation = this.surfingA[this.surfing.currentFrame * 3 + 2];
            }
        }
    }

    if(this.swing) {
        if(this.swing.visible) {
            this.swing.nextFrame();
            this.swing_hand.nextFrame();
            this.swingSword.x = this.aimContainer.x + this.swing_swordPosition[this.swing_hand.currentFrame * 3];
            this.swingSword.y = this.aimContainer.y + this.swing_swordPosition[this.swing_hand.currentFrame * 3 + 1];
            this.swingSword.rotation = this.swing_swordPosition[this.swing_hand.currentFrame * 3 + 2];
            if(this.swing.cycle == 1) {
                this.checkHandles();
            }
        }
    }
    if(this.hit.visible) {
        this.hit.nextFrame();
        if(this.hit.cycle > 0) {
            if(!this.isDead) {
                this.hit.visible =
                    this.hitSword.visible = false;
                this.showBody();
            }
        }
        this.hitSword.x = this.hitSwordPosition[this.hit.currentFrame * 3];
        this.hitSword.y = this.hitSwordPosition[this.hit.currentFrame * 3 + 1];
        this.hitSword.rotation = this.hitSwordPosition[this.hit.currentFrame * 3 + 2];
    }
    if(this.fail.visible) {
        if(this.shadow) {
            this.shadow.alpha += (0 - this.shadow.alpha) * .2;
        }
        if(this.fail.cycle == 0) this.fail.nextFrame();
        this.failSword.rotation += .12;
        this.failSword.x += this.w * .005;
        this.failSword.y += this.failSword.speedY * this.w * .02;
        this.failSword.speedY += .1;
        this.board.x += this.w * .02;
        if(this.fail.cycle > 0) {
            this.fail.alpha = 0;
        }
    }

    this.move(this.levelID);

    if(GodStep.IsKeyPressed(GodStep.KEY_LEFT)) {
        this.hitSword.rotation -= .1;
    }
    if(GodStep.IsKeyPressed(GodStep.KEY_RIGHT)) {
        this.hitSword.rotation += .1;
    }
    if(GodStep.IsKeyPressed(GodStep.KEY_W)) {
        trace(this.slash.x +',' + this.slash.y + ',' + this.slash.rotation + ',');
        this.slash.nextFrame();
        if(this.slash.currentFrame == 0) trace('finished');
    }

};
pro.fireBox = function () {
    var box = this.box;
    this.box = null;
    box.isBullet = true;
    this.S.gameplay.enemies.splice(this.S.gameplay.enemies.indexOf(box), 1);
    box.parent.removeChild(box);
    this.showSurf();
    this.hideAim();
    this.state = 0;
    return box;
};
pro.getBox = function (box) {
    if(!this.box) {
        GS.playSound('zsleep', 0, HH.SOUND);
    }

    this.timer = 0;
    this.box = box;
    this.state = 1;
    this.raySprite.visible = false;


};
pro.checkHandles = function () {
    if(this.h_hide) {
        this.h_hide();this.h_hide = null;
    }
    if(this.h_show) {
        this.h_show();this.h_show = null;
    }
};
pro.fireUp = function () {
    if(this.timer == 0 && !this.hit.visible && !this.isDead) {
        var bullet;
        var ss = this.S.startS;
        switch (this.levelID) {
            case 0:
                this.hideAim();
                this.showSwing(this.hideSwing, this.showAim);
                bullet = new HH.Tomato(ss * 3);
                bullet.speed = new PIXI.Point(Math.cos(this.aimContainer.rotation) * ss, Math.sin(this.aimContainer.rotation) * ss);
                bullet.x = this.x + (this.aimContainer.x + 190) * ss + bullet.speed.x * 300;
                bullet.y = this.y + (this.aimContainer.y + 55) * ss + bullet.speed.y * 300;
                bullet.speed.a = HH.TOMATO_SPEED;
                bullet.speed.r = .1;
                bullet.speed.lx = HH.SPEED3 * ss * 3;
                bullet.landY = this.S.H/this.p.scale.x * .83;
                bullet.speed.gy = HH.BULLET_GRAVITY * ss;
                GS.playSound('ztomato', 0, HH.SOUND);
                return bullet;
                break;
            case 2:
                GS.playSound('zsword', 0, HH.SOUND);
                this.hideAim();
                this.showSwing(this.hideSwing, this.showAim);
                bullet = new HH.CactusBall(ss * 3);
                bullet.speed = new PIXI.Point(Math.cos(this.aimContainer.rotation) * ss, Math.sin(this.aimContainer.rotation) * ss);
                bullet.x = this.x + (this.aimContainer.x + 190) * ss + bullet.speed.x * 300;
                bullet.y = this.y + (this.aimContainer.y + 55) * ss + bullet.speed.y * 300;
                bullet.speed.a = HH.CACTUS_BALL_SPEED;
                bullet.speed.gy = HH.BULLET_GRAVITY * ss * .5;
                return bullet;
                break;
        }
    }
};
pro.fireDown = function () {
    if(this.timer == 0 && !this.hit.visible && !this.isDead) {
        var bullet;
        var ss = this.S.startS;
        switch (this.levelID) {
            case 10:
                GS.playSound('zsword', 0, HH.SOUND);
                this.hideSurf();
                this.showSwing(this.hideSwing, this.showSurf);
                this.isSlash = true;
                this.slashTimer = 3;
                break;
            case 9:
                GS.playSound('zboulder', 0, HH.SOUND);

                this.hideSurf();
                this.showSwing(this.hideSwing, this.showSurf);
                bullet = new HH.Stone(ss * 3);
                bullet.speed = new PIXI.Point(Math.cos(this.aimContainer.rotation) * ss * .5, .9 * ss);
                bullet.x = this.x + (this.aimContainer.x + 300) * ss + bullet.speed.x * 300;
                bullet.y = this.y + (this.aimContainer.y + 1) * ss + bullet.speed.y * 300;
                bullet.speed.a = HH.TOMATO_SPEED;
                bullet.speed.r = .1;
                bullet.speed.lx = HH.SPEED3 * ss * 3;
                bullet.landY = this.S.H/this.p.scale.x * .83;
                bullet.speed.gy = HH.BULLET_GRAVITY * ss * 2;
                return bullet;
                break;
            case 8:
                GS.playSound('zsword', 0, HH.SOUND);
                this.hideSurf();
                this.showSwing(this.hideSwing, this.showSurf);
                bullet = new HH.Burger(ss * 3);
                bullet.speed = new PIXI.Point(Math.cos(this.arrow.rotation) * ss, Math.sin(this.arrow.rotation) * ss);
                bullet.x = this.x +( this.arrow.x + 230) * ss  + bullet.speed.x * 300;
                bullet.y = this.y + (this.arrow.y  + 35)* ss  + bullet.speed.y * 300;
                bullet.speed.a = HH.BURGER_SPEED * ss;
                bullet.speed.gy = HH.BURGER_GRAVITY * ss * .25;
                return bullet;
                break;
            case 0:
                break;
            case 1:
                this.hideSurf();
                this.slashTimer = 7;
                this.showSlash(this.hideSlash, this.showSurf);
                GS.playSound('zchainsaw', 0, HH.SOUND);
                break;
            case 3:
                GS.playSound('zbubble', 0, HH.SOUND);

                this.hideSurf();
                this.showSwing(this.hideSwing, this.showSurf);
                bullet = new HH.Bubble(ss * 3);
                bullet.speed = new PIXI.Point(0, - 1 * ss);
                bullet.x = this.x + this.W * 2.2;
                bullet.y = this.y - this.W * .6;
                bullet.speed.a = HH.BUBBLE_SPEED * ss;
                bullet.speed.gy = HH.BULLET_GRAVITY * ss * .5;
                return bullet;
                break;
            case 4:
                GS.playSound('zslam', 0, HH.SOUND);
                this.hideSurf();
                this.showSwing(this.hideSwing, this.showSurf);
                bullet = new HH.Crack(ss * 3);
                bullet.speed = new PIXI.Point(-1, 0);
                bullet.x = this.x + this.W * 2;
                bullet.y = this.y + this.W * .85;
                bullet.back = this.S.gameplay.background;
                return bullet;
                break;
            case 5:
                GS.playSound('zmagnet', 0, HH.SOUND);

                if(this.state == 0) {
                    this.hideSurf();
                    this.magnetTimer = 10;
                    this.showAim();
                    this.raySprite.visible = true;
                    this.timer = HH.FIRE_TIMER[this.levelID];
                } else {
                    return this.fireBox();
                }
                break;

            case 6:
                GS.playSound('zdragon', 0, HH.SOUND);

                this.hideSurf();
                this.magnetTimer = 36;
                this.showAim();
                this.raySprite.visible = true;
                this.timer = HH.FIRE_TIMER[this.levelID];
                break;
            case 7:
                this.hideSurf();
                this.showAim();
                this.reloadTimer =
                this.reloadTime = HH.FIRE_TIMER[this.levelID];
                break;
            case 11:
                if(!this.isBlowDry) {
                    this.isBlowDry = true;
                    GS.playSound('zblowdry', -1, HH.SOUND);
                    GS.volumeSound('zblowdry', 1);
                }


                this.hideSurf();
                this.showAim();
                this.timer = HH.FIRE_TIMER[this.levelID];
                break;
        }
    }
    return false;
};
pro.getSnowball = function () {
    var ss = this.S.startS;
    GS.playSound('zsnowball', 0, HH.SOUND);
    var bullet = new HH.Snowball(ss * 3);
    bullet.speed = new PIXI.Point(Math.cos(this.aimContainer.rotation) * ss, Math.sin(this.aimContainer.rotation) * ss);
    bullet.x = this.x + (this.aimContainer.x + 190) * ss + bullet.speed.x * 325;
    bullet.y = this.y + (this.aimContainer.y + 51) * ss + bullet.speed.y * 325;
    bullet.speed.a = HH.CACTUS_BALL_SPEED;
    bullet.speed.gy = HH.BULLET_GRAVITY * ss * .84;
    return bullet;
};
pro.die = function () {

    GS.volumeSound('zblowdry', 0);
    this.isDead = true;
    this.hitTimer = 0;
    this.alpha = 1;
    this.hit.visible = this.hitSword.visible = false;
    this.findBody();
    this.hideBody();
    if(this.fen) {
        this.fen.visible = false;
    }
    if(this.arrow) {
        this.arrow.visible = false;
    }
    if(this.raySprite) {
        this.raySprite.visible = false;
    }
    this.board.visible = this.fail.visible = this.failSword.visible = true;
};
pro.win = function () {
    GS.volumeSound('zblowdry', 0);
      if(this.arrow) {
          this.arrow.visible = false;
      }
    if(this.raySprite) {
        this.raySprite.visible = false;
    }
};
pro.showSlash = function (hide, show) {
    this.slash.visible = true;
    this.h_hide = hide;
    this.h_show = show;
    this.slash.cycle = 0;
    this.isSlash = true;
    this.slash.setToFrame(0);
};
pro.showAim = function () {
    this.aim_hand.visible = this.aim.visible = this.aimSword.visible = true;
    if(this.cape) {
        this.cape.visible = true;
    }
};
pro.showSurf = function () {
    this.allsword.visible =
    this.surfing.visible = true;
};
pro.hideSlash = function () {
    this.isSlash = false;
    this.slash.visible = false;
    this.timer = HH.FIRE_TIMER[this.levelID];
};
pro.hideSurf = function () {
    this.allsword.visible = false;
    this.surfing.visible = false;
};
pro.hideAim = function () {
    this.aim_hand.visible =  this.aim.visible = this.aimSword.visible = false;
};
pro.hideSwing = function () {
    this.isSlash = false;
    this.swing.visible = this.swingSword.visible = this.swing_hand.visible = false;
};
pro.showSwing = function (hide, show) {
    if(this.cape) {
        this.cape.visible = false;
    }
    this.h_hide = hide;
    this.h_show = show;
    this.swing.cycle = 0;
    this.swing.visible =
    this.swingSword.visible =
    this.swing_hand.visible = true;
    this.swing.setToFrame(0);
    this.swing_hand.setToFrame(0);
    this.swingSword.x = this.aimContainer.x + this.swing_swordPosition[this.swing_hand.currentFrame * 3];
    this.swingSword.y = this.aimContainer.y + this.swing_swordPosition[this.swing_hand.currentFrame * 3 + 1];
    this.swingSword.rotation = this.swing_swordPosition[this.swing_hand.currentFrame * 3 + 2];
    this.isSwing = true;
    this.timer = HH.FIRE_TIMER[this.levelID];
};
pro.damage = function () {
    if(!this.isDead) {
        if(!this.hit.visible && this.hitTimer == 0) {
            this.hit.cycle = 0;
            this.hitTimer = HH.HIT_TIMER;
            this.hit.setToFrame(0);

            if(!this.hit.visible) {
                GS.playSound('zhit1', 0, HH.SOUND);
            }
            this.hit.visible = true;
            this.hitSword.visible = true;

            if(this.raySprite) {
                this.raySprite.visible = false;
            }
            this.findBody();
            this.hideBody();
        }
    }
};
pro.findBody = function () {
    this.body = [];
    if(this.surfing) {
        if(this.surfing.visible) {
            this.body.push(this.surfing);
            this.body.push(this.allsword);
        }
    }
    if(this.slash) {
        if(this.slash.visible) {
            this.body.push(this.slash);
        }
    }
    if(this.swing) {
        if(this.swing.visible) {
            this.body.push(this.swing);
            this.body.push(this.swingSword);
            this.body.push(this.swing_hand);
        }
    }
    if(this.aim_hand) {
        if(this.aim_hand.visible) {
            this.body.push(this.aim_hand);
            this.body.push(this.aimSword);
            this.body.push(this.aim);
        }
    }
    if(this.cape) {
        if(this.cape.visible) {
            this.body.push(this.cape);
        }
    }
};
pro.showBody = function () {
    for(var i = 0; i<this.body.length; i++) {
        this.body[i].visible = true;
    }
};
pro.hideBody = function () {
    for(var i = 0; i<this.body.length; i++) {
        this.body[i].visible = false;
    }
};
pro.h_mouse = function (e)  {
    var t = e.content.t.parent.parent.player;
    var o = e.content.t.parent.parent;
    var HELPER_POINT;
    switch (e.type) {
        case GodStep.FRAME_DOWN:
        case GodStep.FRAME_MOVE:
            if(e.content.getLocalPosition) {
                t.MOUSE =  e.content.getLocalPosition(e.content.t.parent.parent.container);
            }
            break;
    }
};
