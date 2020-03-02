var MegaExplosion = cc.Layer.extend({

	magnitude: 0,
	ctor:function() {
		this._super();
		this.init();
		this.schedule(this.shake, 0.05);
	},

	init:function() {
		this.magnitude = 0;
		g_sharedHUDLyr.removeFromParent();

		cc.eventManager.removeAllListeners();
		var bg = new cc.Sprite(res.p_bgExp_png);
		bg.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
		bg.setScale(1.1);
		this.addChild(bg);

		var exp = new cc.Sprite("#fx_deathExplosion_0.png");
		exp.setPosition(GC.SCREEN.CENTER.X + 55, GC.SCREEN.CENTER.Y - 125 - exp.height / 2);
		exp.setAnchorPoint(0.47, 0);
		exp.setScale(1.5);
		exp.setVisible(false);
		this.addChild(exp);

		var e_1 = Tools.createSpritesheetAnimation("fx_deathExplosion_", 0, 1, 0.1, false);
		var e_2 = Tools.createSpritesheetAnimation("fx_deathExplosion_", 1, 16, 0.125, false);
		// var e_1 = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_megaExplosion_1"), false);
		// var e_2 = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_megaExplosion_2"), false);
		var scale = cc.scaleBy(2, 1.15);
		var sfx = function() {
			Tools.playSFX(res.sfx_explodeBig, false);
		};
		var visibleSet = function() {
			exp.setVisible(true);
		};
		var anim = cc.sequence(cc.delayTime(1), cc.callFunc(visibleSet, this), e_1.repeat(2), cc.callFunc(sfx, this), e_2, cc.callFunc(this.gameOver, this));

		exp.runAction(cc.sequence(cc.delayTime(1.2), scale));
		exp.runAction(anim);
	},

	shake:function(dt) {
		this.magnitude += dt;
		var m = this.magnitude;
        this.x = Tools.random(-m, m);
        this.y = Tools.random(-m, m);
	},

	gameOver:function() {
		var gameOverScene = new GameOverScene();
		cc.director.runScene(new cc.TransitionFade(0.25, gameOverScene));
	}
});


var g_Explosion = null;

var Explosion = cc.Sprite.extend({

	ctor:function() {
		this._super("#fx_explosion_6.png");
		g_Explosion = this;
		this.anim = Tools.createSpritesheetAnimation("fx_explosion_", 0, 11, 0.083, false);
		// this.anim = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_explosion"), false);
	},

	animate:function() {
		this.setVisible(true);
		this.stopAllActions();
		var action = cc.sequence(this.anim, cc.callFunc(this.destroy, this));
		this.runAction(action);

		Tools.playSFX(res.sfx_explodeSmall, false);
	},

	destroy:function() {
		// this.setPosition(GC.OFF_POSITION);
		this.setVisible(false);
	}
});