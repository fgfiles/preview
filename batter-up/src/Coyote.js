var g_Coyote = null;

var Coyote = cc.Sprite.extend({
	isHit: false,
	ctor:function() {
		this._super("#anim_wileyHit_14.png");
		g_Coyote = this;
		this.init();
	},

	init:function() {
		this.isHit = false;
		this.setAnchorPoint(0.5, 0);

		this.a_throw1 = Tools.createSpritesheetAnimation("anim_wileyThrow_", 0, 2, 0.05, false);
		this.a_throw2 = Tools.createSpritesheetAnimation("anim_wileyThrow_", 3, 14, 0.05, false);
		this.a_idle = Tools.createSpritesheetAnimation("anim_wileyIdle_", 0, 11, 0.083, true);
		this.a_hit1 = Tools.createSpritesheetAnimation("anim_wileyHit_", 0, 3, 0.125, false);
		this.a_hit2 = Tools.createSpritesheetAnimation("anim_wileyHit_", 3, 14, 0.083, false);
		
		// this.a_throw1 = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_coyoteThrow_1"), false);
		// this.a_throw2 = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_coyoteThrow_2"), false);
		// this.a_idle = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_coyoteIdle"), true);
		// this.a_hit1 = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_coyoteHit_1"), false);
		// this.a_hit2 = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_coyoteHit_2"), false);

		this.idleAnimation();
	},

	throwGrenade:function() {
		this.stopAllActions();
		g_Coyote.isHit = false;
		var idle = Tools.createSpritesheetAnimation("anim_wileyIdle_", 0, 11, 0.083, false);
		var delay = THROW.DELAY[LEVEL[GC.WAVE.CURRENT].SPEED[GC.WAVE.REPEATS - 1]];
		var action = cc.sequence(
			this.a_throw1, 
			cc.delayTime(delay), 
			cc.callFunc(g_sharedGameplayLyr.throwGrenade, g_sharedGameplayLyr), 
			this.a_throw2, 
			cc.callFunc(this.idleAnimation, this));
		this.runAction(action);
	},

	idleAnimation:function() {
		this.stopAllActions();
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("anim_wileyIdle_0.png"));
		this.runAction(this.a_idle);
	},

	hitAnimation:function() {
		this.isHit = true;
		this.stopAllActions();
		var action = cc.sequence(
			this.a_hit1, 
			cc.delayTime(0.5),
			this.a_hit2,
			cc.callFunc(function() {
			g_Coyote.isHit = false;
		}, g_Coyote), this.a_idle);
		this.runAction(action);
	},

	hitStay:function() {
		this.isHit = true;
		this.stopAllActions();
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("anim_wileyHit_3.png"));
	},

	hitContinue:function() {
		this.isHit = true;
		this.stopAllActions();
		var action = cc.sequence(
			cc.delayTime(0.5),
			this.a_hit2,
			cc.delayTime(0.1),
			cc.callFunc(function() {
			g_Coyote.isHit = false;
		}, g_Coyote),
			this.a_idle);
		this.runAction(action);
	}
});