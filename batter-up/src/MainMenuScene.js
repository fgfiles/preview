var MainMenuLayer = cc.Layer.extend({
    velocity:0,
    ctor:function () {
        this._super();
        this.init();
        this.scheduleUpdate();
        // this.cacheAnimations();
        return true;
    },
    
    init:function() {
        this._super();
        this.initAnchors();
        cc.spriteFrameCache.addSpriteFrames(res.p_ui_plist);
        cc.spriteFrameCache.addSpriteFrames(res.anim_bugs_plist);
        cc.spriteFrameCache.addSpriteFrames(res.anim_fx_plist);
        cc.spriteFrameCache.addSpriteFrames(res.anim_coyote_plist);
        cc.spriteFrameCache.addSpriteFrames(res.anim_squeaks_plist);
        cc.spriteFrameCache.addSpriteFrames(res.anim_explosion_plist);
        cc.spriteFrameCache.addSpriteFrames(res.anim_gobj_plist);
        
        var sprite = new cc.Sprite(res.p_titleScreen_png);
        sprite.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
        this.addChild(sprite, 0);

        var playButton = new cc.MenuItemImage(
        "#ui_btn_playU.png",
        "#ui_btn_playD.png",
        this.startGame,
        this);

        var howToButton = new cc.MenuItemImage(
        "#ui_btn_howToU.png",
        "#ui_btn_howToD.png",
        this.showRules,
        this);
        howToButton.y = -120;

        var mainMenu = new cc.Menu(playButton, howToButton);
        mainMenu.setPosition(GC.SCREEN.CENTER.X - 150, GC.SCREEN.CENTER.Y - 150);
        this.addChild(mainMenu, 1);
        return true;
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
    
    startGame:function () {
        Tools.playSFX(res.sfx_switchLane, false);
        var gameScene = new GameplayScene();
        // var gameScene = new GameOverScene();
        cc.director.runScene(new cc.TransitionFade(0.5, gameScene));
    },
    
    showRules:function() {
        Tools.playSFX(res.sfx_switchLane, false);
        var howToPlayScene = new HowToPlayScene(GC.HOW_TO_PLAY_PAGE.ONE);
        cc.director.runScene(new cc.TransitionFade(0.5, howToPlayScene));
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
    },

    initAnchors:function() {
        GC.EASYPOS.TL = cc.p(0, GC.SCREEN.SIZE.HEIGHT);
        GC.EASYPOS.TC = cc.p(GC.SCREEN.CENTER.X, GC.SCREEN.SIZE.HEIGHT);
        GC.EASYPOS.TR = cc.p(GC.SCREEN.SIZE.WIDTH, GC.SCREEN.SIZE.HEIGHT);
        GC.EASYPOS.CL = cc.p(0, GC.SCREEN.CENTER.Y);
        GC.EASYPOS.CC = cc.p(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
        GC.EASYPOS.CR = cc.p(GC.SCREEN.SIZE.WIDTH, GC.SCREEN.CENTER.Y);
        GC.EASYPOS.BL = cc.p(0, 0);
        GC.EASYPOS.BC = cc.p(GC.SCREEN.CENTER.X, 0);
        GC.EASYPOS.BR = cc.p(GC.SCREEN.SIZE.WIDTH, 0);
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});
