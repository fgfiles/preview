var g_Player = null;

var Player = cc.Sprite.extend({
	bat: undefined,
	allow: undefined,
	_swingSpeed: undefined,
	_batDecay: undefined,
	_idleSpeed: undefined,
	ctor:function() {
		this._super("#anim_bugsWhack_3.png");
		g_Player = this;
		this.init();
	},

	init:function() {
		this.bat = false;
		this.allow = true;
		this._swingSpeed = GC.PLAYER.SWINGSPEED;
		this._batDecay = GC.PLAYER.BATDECAY;
		this._idleSpeed = GC.PLAYER.IDLESPEED;
		this.setAnchorPoint(0.5, 0);
		this.a_whack = Tools.createSpritesheetAnimation("anim_bugsWhack_", 0, 13, this._swingSpeed, false);
		this.a_idle = Tools.createSpritesheetAnimation("anim_bugsIdle_", 0, 13, this._idleSpeed, true);
		// this.a_whack = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_bugsWhack"), false);
		// this.a_idle = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_bugsIdle"), true);
		this.idleAnim();
	},

	whack:function() {
		if (this.allow) {
			g_sharedGameplayLyr.box.setOpacity(0);
			g_sharedGameplayLyr.cross.setOpacity(0);
			this.allow = false;
			this.stopAllActions();
			var hit = cc.sequence(
				cc.delayTime(3 * this._swingSpeed), 
				cc.callFunc(this.enableHit, this), 
				cc.delayTime(this._batDecay), 
				cc.callFunc(this.removeHit, this));
			this.runAction(cc.sequence(cc.callFunc(this.offset, this), this.a_whack, cc.callFunc(this.idleAnim, this)));
			this.runAction(hit);

			Tools.playSFX(res.sfx_swingMiss, false);
		}
	},

	idleAnim:function() {
		g_sharedGameplayLyr.box.setOpacity(150);
		g_sharedGameplayLyr.cross.setOpacity(255);
		this.x -= 10;
		this.y -= 1;
		this.allow = true;
		this.stopAllActions();
		this.setSpriteFrame(cc.spriteFrameCache.getSpriteFrame("anim_bugsIdle_0.png"));
		this.runAction(this.a_idle);
	},

	offset:function() {
		this.x += 10;
		this.y += 1;
	},

	enableHit:function() {
		this.bat = true;
	},

	removeHit:function() {
		this.bat = false;
	}
});