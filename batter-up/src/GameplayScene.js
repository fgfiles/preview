var g_sharedGameplayLyr;

var GameplayLayer = cc.Layer.extend({
    _lane: undefined,
    _wave: undefined,
    _lastLane: undefined,
    _enemyLane: undefined,
    _init: undefined,
    _repeats: undefined,
    _shakeDecay: undefined,
    a_throwed: undefined,
    a_final: undefined,
    allowChangeLane: undefined,
    throwed: undefined,
    t: undefined,
    allowShake: undefined,
    throwAgain: undefined,
    p_lanes: null,
    e_lanes: null,
    ctor:function() {
        this._super();
        g_sharedGameplayLyr = this;
        this.init();
    },

    init:function() {
        Tools.playBGM(res.sfx_wind, true);
        this.resetValues();
        this.addObjects();

        // this.startLoop();
    },

    resetValues:function() {
        this._lane = this._enemyLane = 1;
        this._wave = this._repeats = 0;
        this._init = this.a_throwed = this.a_final = this.throwed = this.allowShake = false;
        this.allowChangeLane = this.throwAgain = true;
        this._shakeDecay = 0.5;
        this.t = -2.5;
        GC.STARTED = false;
        GC.WAVE.CURRENT = this._wave;
        GC.STRIKES = GC.STREAKS = GC.WAVE.REPEATS = GC.SCORE = 0;
        GC.SQUEAKS.LEFTPOS = cc.p(275, GC.SCREEN.CENTER.Y - 50);
        GC.SQUEAKS.LEFTSTART = cc.p(-100, GC.SCREEN.CENTER.Y - 50);
        GC.SQUEAKS.RIGHTPOS = cc.p(GC.SCREEN.SIZE.WIDTH - 225, GC.SCREEN.CENTER.Y - 50);
        GC.SQUEAKS.RIGHTSTART = cc.p(GC.SCREEN.SIZE.WIDTH + 100, GC.SCREEN.CENTER.Y - 50);
        GC.CHICKEN.LEFTPOS = cc.p(250, GC.SCREEN.CENTER.Y + 25);
        GC.CHICKEN.LEFTSTART = cc.p(-100, GC.SCREEN.CENTER.Y + 25);
        GC.CHICKEN.RIGHTPOS = cc.p(GC.SCREEN.SIZE.WIDTH - 250, GC.SCREEN.CENTER.Y + 25);
        GC.CHICKEN.RIGHTSTART = cc.p(GC.SCREEN.SIZE.WIDTH + 100, GC.SCREEN.CENTER.Y + 25);
        GC.OFF_POSITION = cc.p(-300, 0);
        
        this.p_lanes = [];
        this.e_lanes = [];
        var h = GC.SCREEN.SIZE.HEIGHT - 320;
        this.p_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.2375, 85));
        this.p_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.4750, 85));
        this.p_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.7150, 85));
        this.e_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.355, h));
        this.e_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.545, h));
        this.e_lanes.push(cc.p(GC.SCREEN.SIZE.WIDTH * 0.73, h));
        GC.LANES.PLAYER = this.p_lanes;
        GC.LANES.ENEMY = this.e_lanes;
    },

    addObjects:function() {
        this.fxNode = new cc.SpriteBatchNode(res.anim_fx_png);
        this.objNode = new cc.SpriteBatchNode(res.anim_gobj_png);
        this.addChild(this.fxNode, GC.LAYER.EFFECTS);
        this.addChild(this.objNode, GC.LAYER.OBJ);

        this.crosshair();

        this.player = new Player();
        this.coyote = new Coyote();
        this.sq = new Squeaks();
        this.impact = new Impact();
        this.xplsn = new Explosion();
        this.miss = new Missed();
        this.bombsAway = new BombsAway();
        this.chicken = new Chicken();

        this.player.setPosition(GC.LANES.PLAYER[this._lane].x, GC.LANES.PLAYER[this._lane].y - 25);
        this.coyote.setPosition(GC.LANES.ENEMY[this._lane].x, GC.LANES.ENEMY[this._lane].y - 25);
        // this.impact.setPosition(cc.p(GC.LANES.PLAYER[this._enemyLane].x + 150, GC.LANES.PLAYER[this._enemyLane].y + 150));
        this.impact.setPosition(cc.p(0, -20));
        this.sq.setPosition(GC.SQUEAKS.LEFTSTART);
        // this.sq.setPosition(cc.p(0, -100));
        this.xplsn.setPosition(GC.OFF_POSITION);
        this.miss.setPosition(GC.OFF_POSITION);
        // this.bombsAway.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
        this.bombsAway.setPosition(GC.OFF_POSITION);
        this.chicken.setPosition(GC.CHICKEN.LEFTSTART);

        // this.impact.animate("good");
        // this.impact.animate("bad");
        // this.miss.animate();
        
        this.addChild(new Background(), GC.LAYER.BACKGROUND);
        this.addChild(this.player, GC.LAYER.BUGS);
        this.addChild(this.coyote, GC.LAYER.COYOTE);
        this.addChild(this.sq, GC.LAYER.SQUEAKS);
        this.addChild(this.bombsAway, GC.LAYER.EFFECTS + 1);
        this.fxNode.addChild(this.impact);
        this.fxNode.addChild(this.xplsn);
        this.fxNode.addChild(this.miss, 1);
        this.objNode.addChild(this.chicken, GC.LAYER.CHICKEN);

        // this.addChild(new Background(), 0);
        // this.addChild(this.player, 0);
        // this.addChild(this.coyote, 0);
        // this.addChild(this.sq, 0);
        // this.addChild(this.bombsAway, 1);
        // this.fxNode.addChild(this.impact);
        // this.fxNode.addChild(this.xplsn);
        // this.fxNode.addChild(this.miss, 1);
        // this.objNode.addChild(this.chicken, GC.LAYER.CHICKEN);
    },

    cacheAnimations:function() {
        cc.animationCache.addAnimation(Tools.createAnimation("fx_goodImpact_", 0, 10, 0.083), "a_impactGood");
        cc.animationCache.addAnimation(Tools.createAnimation("fx_badImpact_", 0, 3, 0.083), "a_impactBad");
        cc.animationCache.addAnimation(Tools.createAnimation("fx_miss_", 0, 9, 0.05), "a_missed");
        cc.animationCache.addAnimation(Tools.createAnimation("fx_feather_", 0, 10, 0.083), "a_feathers");
        cc.animationCache.addAnimation(Tools.createAnimation("gobj_chicken_", 0, 5, 0.083), "a_chicken");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_wileyThrow_", 0, 2, 0.05), "a_coyoteThrow_1");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_wileyThrow_", 3, 14, 0.05), "a_coyoteThrow_2");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_wileyIdle_", 0, 11, 0.083), "a_coyoteIdle");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_wileyHit_", 0, 3, 0.125), "a_coyoteHit_1");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_wileyHit_", 3, 14, 0.083), "a_coyoteHit_2");
        cc.animationCache.addAnimation(Tools.createAnimation("fx_deathExplosion_", 0, 1, 0.1), "a_megaExplosion_1");
        cc.animationCache.addAnimation(Tools.createAnimation("fx_deathExplosion_", 1, 16, 0.125), "a_megaExplosion_2");
        cc.animationCache.addAnimation(Tools.createAnimation("fx_explosion_", 0, 11, 0.083), "a_explosion");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_bugsWhack_", 0, 13, GC.PLAYER.SWINGSPEED), "a_bugsWhack");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_bugsIdle_", 0, 13, GC.PLAYER.IDLESPEED), "a_bugsIdle");

        cc.animationCache.addAnimation(Tools.createAnimation("anim_squeaksRun_", 0, 4, 0.083), "a_squeaksRun");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_squeaksIdle_", 0, 5, 0.083), "a_squeaksStand");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_squeaksIdle_", 5, 13, 0.04), "a_squeaksIdle");
        cc.animationCache.addAnimation(Tools.createAnimation("anim_squeaksThrow_", 0, 13, 0.04), "a_squeaksThrow");
    },

    startLoop:function() {
        this.sq.schedule(this.sq.behavior, 0.3);
        this.chicken.schedule(this.chicken.behavior, 1);
        this.schedule(this.loop, 0.05);
    },

    loop:function(dt) {
        if (!g_Squeaks.allowThrow) {
            this.t += dt;
            if (this.t >= LEVEL[this._wave].DELAY + GC.DELAY.OFFSET && !this._init && !this.a_final && this.throwAgain && !this.coyote.isHit) {
                this.coyoteChangeLane();
                this._init = true;
                this.t = 0;
            }

            if (this._init) {
                if (this.t >= LEVEL[this._wave].INTERVAL[GC.WAVE.REPEATS] && !this.a_throwed && this.throwAgain && !this.coyote.isHit) {
                    this.a_throwed = true;
                    this.t = 0;
                    GC.WAVE.REPEATS = this._repeats;
                    g_Coyote.throwGrenade();
                }
            }

            if (this.a_throwed) {
                if (GC.WAVE.REPEATS >= LEVEL[this._wave].INTERVAL.length || this._wave === 0) {
                    this.a_final = true;
                    this.a_throwed = false;
                    this._init = false;
                    this._repeats = 0;
                    GC.WAVE.REPEATS = this._repeats;
                }
                else {
                    this.a_throwed = false;
                    this.t = -1.162;
                }
            }

            if (this.t >= LEVEL[this._wave].INTERVAL[GC.WAVE.REPEATS] + LEVEL[this._wave + 1].DELAY + GC.DELAY.OFFSET && this.a_final && !this.coyote.isHit) {
                this.throwed = false;
                this._init = false;
                this.t = 0;
                this.a_final = false;
                this._wave++;
                if (g_sharedHUDLyr.waveTxt)
                    g_sharedHUDLyr.waveTxt.setString("Wave: " + this._wave);
                GC.WAVE.CURRENT = this._wave;
                if (this._wave >= LEVEL.length - 1) {
                    this._wave = 0;
                }
            }
        }
    },

    throwGrenade:function() {
        this._repeats++;
        this.throwed = true;
        var target = cc.p(GC.LANES.PLAYER[this._enemyLane].x + 150, GC.LANES.PLAYER[this._enemyLane].y + 150);
        var sf = 0;
        var spd = 0;
        var pos = cc.p(GC.LANES.ENEMY[this._enemyLane].x - 50, GC.LANES.ENEMY[this._enemyLane].y + 100);
        var maxheight = GC.LANES.ENEMY[1].y + 100;
        if (LEVEL[this._wave].SPEED[this._repeats] === 0) {
            sf = GRENADE.FACTOR.SLOW;
            spd = GRENADE.SPEED.SLOW;
            Tools.playSFX(res.sfx_throwSlow, false);
        }
        else if (LEVEL[this._wave].SPEED[this._repeats] === 1) {
            sf = GRENADE.FACTOR.MEDIUM;
            spd = GRENADE.SPEED.MEDIUM;
            Tools.playSFX(res.sfx_throwNormal, false);
        }
        else {
            sf = GRENADE.FACTOR.FAST;
            spd = GRENADE.SPEED.FAST;
            Tools.playSFX(res.sfx_throwFast, false);
        }
        var grenade = this.createGrenade(sf, pos, 0, target, spd, maxheight, 0);
        this.objNode.addChild(grenade);

        var shadow = new GrenadeShadow();
        shadow.setPosition(GC.LANES.ENEMY[this._lane].x, GC.LANES.ENEMY[this._lane].y - 25);
        this.addChild(shadow);

        this.shadow = grenade._myShadow = shadow;
    },

    squeaksSpecial:function(obj, direction) {
        var target = cc.p(GC.LANES.ENEMY[this._enemyLane].x, GC.LANES.ENEMY[this._enemyLane].y + 150);
        var pos = null;
        if (direction === -1) {
            pos = cc.pAdd(GC.SQUEAKS.LEFTPOS, cc.p(0, 50));
        }
        else {
            pos = cc.pAdd(GC.SQUEAKS.RIGHTPOS, cc.p(0, 50));
        }
        var grenade = this.createGrenade(0, pos, 1, target, 0, 0, direction);
        grenade.sqRepeat = GC.SQUEAKS.REPEAT;
        this.objNode.addChild(grenade);

        var shadow = new GrenadeShadow();
        shadow.setPosition(GC.LANES.ENEMY[this._lane].x, GC.LANES.ENEMY[this._lane].y - 25);
        // this.addChild(shadow);
        this.shadow = grenade._myShadow = shadow;

        Tools.playSFX(res.sfx_squeaksBomb, false);
    },

    createGrenade:function(speedfactor, pos, type, target, speed, maxheight, direction) {
        var grenade = new Grenade(speedfactor);
        grenade.setPosition(pos);
        grenade.type = type;
        grenade.ready(target, speed, maxheight, direction);
        return grenade;
    },

    crosshair:function() {
        this.box = new cc.Sprite("#ui_aimBase.png");
        this.box.setPosition(GC.LANES.PLAYER[this._lane ].x + 150, GC.LANES.PLAYER[this._lane ].y + 150);
        this.box.setOpacity(150);
        this.cross = new cc.Sprite("#ui_aimCross.png");
        this.cross.setPosition(this.box.width / 2, this.box.height / 2);
        this.cross.setOpacity(225);
        var pulse = cc.sequence(
                cc.scaleTo(0.4, 0.9),
                cc.scaleTo(0.4, 0.85)
            );
        this.cross.runAction(pulse.repeatForever());

        this.objNode.addChild(this.box);
        this.box.addChild(this.cross);
    },

    changeLane:function(direction) {
        if (this.allowChangeLane && this.player.allow) {
            this.allowChangeLane = false;
            var laneToGo = 0;
            if (direction == "left") {
                laneToGo = this._lane - 1;
            }
            else {
                laneToGo = this._lane + 1;
            }
            this._lane = cc.clampf(laneToGo, 0, 2);
            this.player.setPosition(cc.p(GC.LANES.PLAYER[this._lane ].x, GC.LANES.PLAYER[this._lane ].y - 25));
            this.box.setPosition(GC.LANES.PLAYER[this._lane].x + 150, GC.LANES.PLAYER[this._lane].y + 150);

            var cd = cc.sequence(cc.delayTime(0.1), cc.callFunc(function() {
                g_sharedGameplayLyr.allowChangeLane = true;
            }, g_sharedGameplayLyr));

            this.runAction(cd);
        }
    },

    coyoteChangeLane:function() {
        var rng = Tools.random(0, GC.LANES.ENEMY.length - 1);
        while(true) {
            if (rng === this._lastLane) {
                rng = Tools.random(0, GC.LANES.ENEMY.length - 1);
            }
            else {
                this._lastLane = rng;
                break;
            }
        }
        this.coyote.setPosition(cc.pAdd(GC.LANES.ENEMY[rng], cc.p(5, -25)));
        this._enemyLane = rng;
        Tools.playSFX(res.sfx_switchLane, false);
    },

    startShake:function() {
        this.allowShake = true;
        this.schedule(this.camShake);
        var delay = cc.sequence(cc.delayTime(this._shakeDecay), cc.callFunc(function() {
            g_sharedGameplayLyr.allowShake = false;
            this.unschedule(this.camShake);
        }, this));
        this.runAction(delay);
    },

    camShake:function() {
        var m = GC.CAMERA.SHAKE;

        this.x = Tools.random(-m, m);
        this.y = Tools.random(-m, m);
    },

    hitFX:function(goodOrBad) {
        this.impact.setPosition(cc.p(GC.LANES.PLAYER[this._enemyLane].x + 150, GC.LANES.PLAYER[this._enemyLane].y + 150));
        this.impact.animate(goodOrBad);
    },

    missFX:function() {
        g_sharedGameplayLyr.box.setOpacity(0);
        g_sharedGameplayLyr.cross.setOpacity(0);
        this.miss.setPosition(cc.p(GC.LANES.PLAYER[this._lane].x + 150, GC.LANES.PLAYER[this._lane].y + 150));
        this.miss.animate();
    },

    spawnExplosion:function() {
        this.xplsn.setPosition(cc.p(GC.LANES.ENEMY[this._enemyLane ].x, GC.LANES.ENEMY[this._enemyLane ].y + 75));
        this.xplsn.animate();
    }, 

    megaExplosion:function() {
        this.sq.unschedule(this.sq.behavior);
        this.chicken.unschedule(this.chicken.behavior);
        this.unschedule(this.loop);
        cc.eventManager.removeAllListeners();
        var megaExp = function() {
            var mega = new MegaExplosion();
            g_sharedGameplayLyr.addChild(mega, 1000);
        };
        var wait = cc.sequence(cc.delayTime(0.6), cc.callFunc(megaExp, g_sharedGameplayLyr), cc.callFunc(this.removeObjects, this));
        this.runAction(wait);
    },

    removeObjects:function() {
        this.fxNode.removeFromParent(true);
        this.objNode.removeFromParent(true);
        this.bombsAway.removeFromParent(true);
        this.sq.removeFromParent(true);
        this.coyote.removeFromParent(true);
        this.player.removeFromParent(true);
    }
});

var g_sharedHUDLyr;

var HudLayer = cc.Layer.extend({
    
    outs: [],
    pos: [],
    ready: false,
    ctor:function() {
        this._super();
        g_sharedHUDLyr = this;
        this.init();
    },

    init:function() {
        this.ready = false;
        this.hud = new cc.SpriteBatchNode(res.p_ui_png);
        this.addChild(this.hud);
        this.pregame = new cc.SpriteBatchNode(res.anim_gobj_png);
        this.addChild(this.pregame, 1);

        this.scoreTxt = new cc.LabelBMFont("999999", res.fnt_score_fnt);
        this.addChild(this.scoreTxt);
        this.scoreTxt.setPosition(GC.SCREEN.SIZE.WIDTH - 250, GC.SCREEN.SIZE.HEIGHT - 100);
        this.scoreTxt.setString("0");

        this.streakLabel = new cc.Sprite("#ui_streak.png");
        this.addChild(this.streakLabel);
        this.setAnchorPoint(1, 0.5);
        this.streakLabel.setPosition(GC.SCREEN.SIZE.WIDTH - 350, GC.SCREEN.SIZE.HEIGHT - 180);
        this.streakLabel.setScale(0);

        this.streakTxt = new cc.LabelBMFont("999", res.fnt_streak_fnt);
        this.streakLabel.addChild(this.streakTxt);
        this.streakTxt.setPosition(this.streakLabel.width + 50, 50);
        this.streakTxt.setString("0");

        this.bugs = new cc.Sprite("#ui_bugs.png");
        this.hud.addChild(this.bugs);
        this.bugs.setPosition(250, GC.SCREEN.SIZE.HEIGHT - 100);

        this.outs = [];
        this.pos[0] = this.bugs.x - this.bugs.width / 2 + 15;
        this.pos[1] = this.bugs.x;
        this.pos[2] = this.bugs.x + this.bugs.width / 2 - 15;
        for (var i = 0; i < 3; i++) {
            var strike = new cc.Sprite("#ui_strikeIn.png");
            this.outs.push(strike);
            strike.setPosition(this.pos[i], this.bugs.y - 90);
            this.hud.addChild(strike);
        }

        this.bubble = new SpeechBubble();
        this.addChild(this.bubble, 999);
        this.bubble.setPosition(300, GC.SCREEN.SIZE.HEIGHT - 170);

        // this.border(171);
        // this.border(GC.SCREEN.SIZE.WIDTH - 171);

        // this.waveTxt = new cc.LabelTTF("999", "Arial", 30);
        // this.addChild(this.waveTxt);
        // this.waveTxt.setAnchorPoint(1, 1);
        // this.waveTxt.setPosition(GC.SCREEN.SIZE.WIDTH, GC.SCREEN.SIZE.HEIGHT);
        // this.waveTxt.setString("Wave: 1");
        
        this.introed = false;
        var backdrop = new cc.LayerColor(cc.color(0, 0, 0, 150), GC.SCREEN.SIZE.WIDTH, GC.SCREEN.SIZE.HEIGHT);
        this.addChild(backdrop, -1);
        this.backdrop = backdrop;

        this.introduction();
    },

    addBombsAway:function() {
        this.bombsAway = new BombsAway();
        this.bombsAway.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
    },

    updateScore:function(score, mult) {
        if (mult) {
            var streak = Math.max(1, GC.STREAKS);
            score *= streak;
        }
        GC.SCORE += score;
        this.scoreTxt.setString(GC.SCORE.toString());
    },

    updateStrikes:function() {
        this.outs[Math.min(GC.STRIKES - 1, 2)].setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("ui_strikeOut.png"));
    },

    updateStreaks:function() {
        this.streakTxt.setString(GC.STREAKS.toString());
    },

    animateStreaks:function() {
        var scaleIn = cc.scaleTo(0.2, 0.5);
        var scaleOut = cc.scaleTo(0.2, 0);
        this.streakLabel.runAction(cc.sequence(scaleIn.easing(cc.easeBackOut()), cc.delayTime(0.5), scaleOut.easing(cc.easeBackIn())));
    },

    introduction:function() {
        var overlay = new cc.Sprite("#gobj_pregame.png");
        overlay.setPosition(-150, 0);
        overlay.setAnchorPoint(0.5, 0.2);
        overlay.stopAllActions();
        this.pregame.addChild(overlay);

        this.speech = new cc.Sprite("#gobj_speech_0.png");
        this.speech.setPosition(overlay.x + 700, overlay.y + overlay.height - 40);
        this.speech.setScale(0);
        this.speech.setVisible(false);
        overlay.addChild(this.speech);

        var init = cc.delayTime(2.5);
        var spawn = cc.moveTo(0.45, cc.p(300, 0)).easing(cc.easeSineOut());
        var speechIn = cc.scaleTo(0.25, 1).easing(cc.easeBackOut());

        var action = cc.sequence(init, spawn);
        overlay.runAction(action);

        var speechAction = cc.sequence(cc.delayTime(3.5), cc.callFunc(function() {
            g_sharedHUDLyr.speech.setVisible(true);
            g_sharedControlsLyr.addSwipe();
        }, this),speechIn, cc.callFunc(function() {g_sharedHUDLyr.introed = true;}, this));
        this.speech.runAction(speechAction);

        this.overlay = overlay;
    },

    removeIntro:function() {
        if (!this.ready) {
            this.ready = true;
            var out = cc.moveTo(0.45, cc.p(-150, 0)).easing(cc.easeSineIn());
            var speechOut = cc.scaleTo(0.15, 0);
            var startGame = function() {
                g_sharedGameplayLyr.startLoop();
                g_sharedHUDLyr.overlay.removeFromParent(true);
                g_sharedHUDLyr.backdrop.removeFromParent(true);
                GC.STARTED = true;
            };

            this.speech.runAction(cc.sequence(speechOut, cc.callFunc(this.removeSpeech, this)));
            this.overlay.runAction(cc.sequence(cc.delayTime(0.5), out, cc.callFunc(startGame, this)));
        }
    },

    removeSpeech:function() {
        this.speech.setPosition(-100, -100);
        this.speech.setVisible(false);
        this.speech.removeFromParent(true);
    },

    border:function(x) {
        var line = new cc.DrawNode();
        line.height = GC.SCREEN.SIZE.HEIGHT;
        line.width = 2;
        line.setAnchorPoint(0,0);
        line.setPosition(0,0);
        var origin = cc.p(x,0);
        var end = cc.pAdd(origin, cc.p(line.width, line.height));
        line.drawRect(origin, end, cc.color(255, 255, 255, 255));
        this.addChild(line);
    }
});

var g_sharedControlsLyr = null;

var GameControlsLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
        g_sharedControlsLyr = this;
        this.init();
    },
    init:function()
    {
        if (cc.sys.capabilities.hasOwnProperty('keyboard')){
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyReleased: KeyListener.onKeyReleased
            }, this);
        }

        if (cc.sys.capabilities.hasOwnProperty('mouse')) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: this.onMouseDown,
                onMouseMove: this.onMouseMove,
                onMouseUp:   this.onMouseUp
            }, this);
        }
        // cc.eventManager.addListener(GestureListener, this);
        // cc.eventManager.addListener(SwipeListener, this);
    },

    addSwipe:function() {
        cc.eventManager.addListener(SwipeListener, this);
    },

    onMouseDown:function(event) {
        var target = event.getCurrentTarget();
        var p = event.getLocation();
        target.clickChecker(p);
    },

    onMouseMove:function(event) {
        var target = event.getCurrentTarget();
        var p = event.getLocation();
    },

    onMouseUp:function(event) {
        var target = event.getCurrentTarget();
        var p = event.getLocation();
    },

    clickChecker:function(p) {
        if (GC.STARTED) {
            var dist = cc.pDistance(p, g_Squeaks.getPosition());
            var chk = cc.pDistance(p, g_Chicken.getPosition());
            if (dist <= 75 && g_Squeaks.allowTouch) {
                g_Squeaks.allowThrow = true;
                return;
            }
            else if (chk <= 50) {
                g_Chicken.hide();
                var feather = new Feather();
                feather.setPosition(p);
                g_sharedGameplayLyr.fxNode.addChild(feather);

                Tools.playSFX(res.sfx_chickenStartle, false);
                return;
            }
            else {
                g_Player.whack();
            }
        }
        else {
            if (g_sharedHUDLyr.introed) {
                g_sharedHUDLyr.removeIntro();
                g_sharedGameplayLyr.impact.animate("bad");
                g_sharedGameplayLyr.sq.setPosition(GC.SQUEAKS.LEFTSTART);
            }
                
        }
    }
});

var GameplayScene = cc.Scene.extend({
    gameplayLayer:null,
    ctor:function() {
        this._super();
    },
    
    onEnter:function () {
        this._super();
        var gl = this.gameplayLayer = new GameplayLayer();
        var hl = new HudLayer();
        var gcl = new GameControlsLayer();
        this.addChild(gl);
        this.addChild(hl);
        this.addChild(gcl);
        //Centralize update
        //this.schedule(this.update);
    },
    
    update:function(delta)
    {
        this.gameLayer.update(delta);
    }
});


