var g_Squeaks = null;

var Squeaks = cc.Sprite.extend({
	t: undefined,
	initialize: undefined,
	onPosition: undefined,
	repeat: undefined,
	throwed: undefined,
	done: undefined,
    allowThrow: undefined,
    allowTouch: undefined,
    a_run: undefined,
    a_stand: undefined,
    a_idle: undefined,
    a_throw: undefined,
	ctor:function() {
		this._super("#anim_squeaksThrow_0.png");
		g_Squeaks = this;
        this.a_run = Tools.createSpritesheetAnimation("anim_squeaksRun_", 0, 4, 0.083, false);
        this.a_stand = Tools.createSpritesheetAnimation("anim_squeaksIdle_", 0, 5, 0.083, false);
        this.a_idle = Tools.createSpritesheetAnimation("anim_squeaksIdle_", 5, 13, 0.04, true);
        this.a_throw = Tools.createSpritesheetAnimation("anim_squeaksThrow_", 0, 13, 0.04, false);
        
        // this.a_run = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_squeaksRun"), false);
        // this.a_stand = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_squeaksStand"), false);
        // this.a_idle = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_squeaksIdle"), true);
        // this.a_throw = Tools.getCachedAnimation(cc.animationCache.getAnimation("a_squeaksThrow"), false);
        this.init();
	},

	init:function() {
        this.t = this.repeat = 0;
        this.initialize = this.onPosition = this.throwed = this.allowThrow = this.allowTouch = false;
        this.done = true;

		this.setAnchorPoint(0.5, 0);
		this.setScale(0.75);
	},

	behavior:function(dt) {
		this.t += dt;
        if (this.t >= GC.SQUEAKS.INTERVAL && !this.initialize) {
            var a_flipEnter;
            var destination;
            // this.setOpacity(255);
            this.direction = Tools.random(-1, 1);
            if (this.direction === -1) {
                this.setPosition(GC.SQUEAKS.LEFTSTART);
                a_flipEnter = cc.flipX(false);
                destination = GC.SQUEAKS.LEFTPOS;
            }
            else {
                this.direction = 1;
                this.setPosition(GC.SQUEAKS.RIGHTSTART);
                a_flipEnter = cc.flipX(true);
                destination = GC.SQUEAKS.RIGHTPOS;
            }

            var move = cc.spawn(this.a_run, cc.moveTo(5 * 0.083, destination), a_flipEnter);
            var action = cc.sequence(move, cc.callFunc(function() {
            	g_Squeaks.onPosition = true;
            	g_Squeaks.t = 0;
            }, g_Squeaks), this.a_stand, this.a_idle.repeat(5));
            this.runAction(action);
            this.t = 0;
            this.initialize = true;
            this.allowTouch = true;
            this.repeat = 0;
            g_Chicken.t -= 5;
            GC.SQUEAKS.REPEAT = 0;
        }

        if (this.initialize && this.t >= (14 * 0.04) && !this.throwed && this.onPosition) {
            if (this.allowThrow) {
                this.stopAllActions();
                this.t = 0;
                this.runAction(cc.sequence(this.a_throw, this.a_idle));
                this.runAction(cc.sequence(cc.delayTime(3 * 0.04), cc.callFunc(
                    g_sharedGameplayLyr.squeaksSpecial, g_sharedGameplayLyr, g_Squeaks.direction
                    )));
                GC.SQUEAKS.REPEAT++;
                this.repeat++;
                if (this.repeat >= GC.SQUEAKS.THROWS) {
                    this.throwed = true;
                    this.t = 0;
                    this.allowTouch = false;
                }
                else if (this.repeat === 1) {
                    g_sharedGameplayLyr.bombsAway.animate();
                }
            }
        	else {
                if (this.t >= GC.SQUEAKS.STAY) {
                    this.throwed = true;
                    this.t = 1.1;
                    this.allowTouch = false;
                }
            }
        }

        if (this.throwed && this.t >= (14 * 0.083)) {
        	this.throwed = false;
            this.stopAllActions();
            var a_flipExit;
            var destination;
            if (this.direction === -1) {
                a_flipExit = cc.flipX(true);
                destination = GC.SQUEAKS.LEFTSTART;
            }
            else {
                a_flipExit = cc.flipX(false);
                destination = GC.SQUEAKS.RIGHTSTART;
            }
        	var hide = cc.spawn(this.a_run, cc.moveTo(5 * 0.083, destination), a_flipExit);
        	var hideAction = cc.sequence(hide, cc.callFunc(function() {
        		g_Squeaks.done = true;
        		g_Squeaks.initialize = false;
        		g_Squeaks.t = 0;
                g_Squeaks.allowThrow = false;
                g_Squeaks.allowTouch = false;
        	}, g_Squeaks));
        	this.runAction(hideAction);
        	this.t = 0;
        	this.onPosition = false;
        }
	}
});