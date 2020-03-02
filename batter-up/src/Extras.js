var g_Chicken = null;

var Chicken = cc.Sprite.extend({

	interval: null,
	t: 0,
	_move: false,
	_direction: 0,
	ctor:function() {
		this._super("#gobj_chicken_0.png");
		g_Chicken = this;
		this.init();
	},

	init:function() {
		this.a_run = Tools.createSpritesheetAnimation("gobj_chicken_", 0, 5, 0.083, true);
		// this.a_run = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_chicken"), true);
		this.interval = GC.CHICKEN.INTERVAL;
		this.t = 0;
		this.currentInterval = this.interval[Tools.random(0, 2)];
		this._direction = Tools.random(0, 1);
	},

	behavior:function(dt) {
		this.t += dt;
		if (this.t >= this.currentInterval && !this._move && !g_Squeaks.initialize) {
			this._move = true;
			this.destination = null;
			this.origin = null;
			this.flip = false;
			if (this._direction) {
				this.flip = true;
				this.destination = GC.CHICKEN.LEFTPOS;
				this.origin = GC.CHICKEN.LEFTSTART;
			}
			else {
				this.flip = false;
				this.destination = GC.CHICKEN.RIGHTPOS;
				this.origin = GC.CHICKEN.RIGHTSTART;
			}
			this.setPosition(this.origin);
			this.setFlippedX(this.flip);
			var a_move = cc.moveTo(1, this.destination);
			var action = cc.sequence(a_move, cc.callFunc(this.stop, this));
			this.runAction(this.a_run);
			this.runAction(action);
			this.t = 0;
			g_Squeaks.t -= 5;
			this.sfx = Tools.playSFX(res.sfx_chicken, false);
		}
		if (this._move && this.t >= GC.CHICKEN.STAY) {
			this.hide();
		}
	},

	hide:function() {
		var move = cc.moveTo(0.75, this.origin);
		this.setFlippedX(!this.flip);
		this.runAction(move);
		this.runAction(this.a_run);
		this.t = 0;
		this._move = false;
		this.currentInterval = this.interval[Tools.random(0, 2)];
		this._direction = Tools.random(0, 1);

		Tools.stopSFX(this.sfx);
		Tools.playSFX(res.sfx_chicken, false);
	},

	stop:function() {
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("gobj_chicken_1.png"));
		this.stopAllActions();
	}
});

var g_Feathers = null;

var Feather = cc.Sprite.extend({

	ctor:function() {
		this._super("#fx_feather_0.png");
		g_Feathers = this;
		this.init();
	},

	init:function() {
		var anim = Tools.createSpritesheetAnimation("fx_feather_", 0, 10, 0.083, false);
		// var anim = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_feathers"), false);
		var action = cc.sequence(anim, cc.callFunc(this.destroy, this));
		this.runAction(action);
	},

	destroy:function() {
		this.removeFromParent(true);
	}
});

var g_Speech = null;

var SpeechBubble = cc.Sprite.extend({

	ctor:function() {
		this._super("#ui_word_0.png");
		g_Speech = this;
		this.setAnchorPoint(0, 0);
		this.setScale(0);
	},

	animate:function() {
		var rng = Tools.random(0, 12);
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("ui_word_" + rng + ".png"));
		this.setScale(0);
		var scaleTo = cc.scaleTo(0.25, 1);
		var scaleDown = cc.scaleTo(0.25, 0);
		this.runAction(cc.sequence(scaleTo.easing(cc.easeBackOut(0.75)), cc.delayTime(1.2), scaleDown.easing(cc.easeBackIn())));
	}
});

var Impact = cc.Sprite.extend({
	good: undefined,
	bad: undefined,
	ctor:function() {
		this._super("#fx_badImpact_0.png");
		this.good = Tools.createSpritesheetAnimation("fx_goodImpact_", 0, 10, 0.083, false);
		this.bad = Tools.createSpritesheetAnimation("fx_badImpact_", 0, 3, 0.083, false);
		// this.good = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_impactGood"), false);
		// this.bad = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_impactBad"), false);
		// this.setVisible(false);
	},

	animate:function(goodOrBad) {
		this.setVisible(true);
		this.runAction(cc.sequence(this[goodOrBad], cc.callFunc(this.destroy, this)));
	},

	destroy:function() {
		this.setVisible(false);
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("fx_badImpact_0.png"));
	}
});

var Missed = cc.Sprite.extend({

	ctor:function() {
		this._super("#fx_miss_0.png");
		this.init();
	},

	init:function() {
		this.anim = Tools.createSpritesheetAnimation("fx_miss_", 0, 9, 0.05, false);
		// this.anim = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_missed"), false);
	},

	animate:function() {
		this.setScale(1);
		this.stopAllActions();
		this.runAction(cc.sequence(this.anim, cc.callFunc(this.destroy, this)));
	},

	destroy:function() {
		this.runAction(cc.scaleTo(0.25, 0).easing(cc.easeBackIn()));
		g_sharedGameplayLyr.box.setOpacity(150);
		g_sharedGameplayLyr.cross.setOpacity(255);
	}
});

var BombsAway = cc.Sprite.extend({

	ctor:function() {
		this._super("#ui_bombsAway.png");
		this.setScale(0);
	},

	animate:function() {
		this.stopAllActions();
		this.setPosition(GC.SCREEN.CENTER.X, GC.SCREEN.CENTER.Y);
		this.setScale(0);
		var scaleIn = cc.scaleTo(0.25, 1);
		var scaleOut = cc.scaleTo(0.25, 0);
		this.runAction(cc.sequence(scaleIn.easing(cc.easeBackOut()), cc.delayTime(0.15), scaleOut.easing(cc.easeBackIn()), cc.callFunc(this.offset, this)));
	},

	offset:function() {
		this.setPosition(GC.OFF_POSITION);
	}
});

var GRENADE = {
	FACTOR: {
		SLOW: 1,
		MEDIUM: 1.25,
		FAST: 1.45
	},
	SPEED: {
		SLOW: 15,
		MEDIUM: 21,
		FAST: 25
	}
};

var THROW = {
	DELAY: [1, 0.5, 0]
};