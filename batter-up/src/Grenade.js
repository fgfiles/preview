var g_Grenade = null;

var Grenade = cc.Sprite.extend({
	_start: false,
	_scale: 0,
	_rotate: 0,
	_rotateBy: 0,
	_check: true,
	_speedfactor: 0,
	_flyAway: 0.5, // seconds
	_hitBack: 0.7, // seconds
	_myShadow: null,
	missed: false,
	type: 0,
	sqRepeat: 0,
	ctor:function(speedfactor) {
		this._super("#grenade.png");
		g_Grenade = this;
		this._speedfactor = speedfactor;
		this.init();
		this.scheduleUpdate();
	},

	init:function() {
		this._rotateBy = Tools.random(1, 5);
		this._scale = 0.5;
		this.setScale(this._scale);
	},

	update:function(dt) {
		if (this.type === 0) {
			this.normalThrow(dt);
		}
		else {
			this.squeaksType(dt);
		}
	},

	normalThrow:function(dt) {
		if (this._start) {
			if (g_Squeaks.allowThrow) {
				this.destroy();
			}
			this.lob(dt);
			this.perspective();
			this.checking(dt);
       		g_sharedGameplayLyr.shadow.setScale(this._scale / 1.8);
       		if (this.y < 0) {
       			GC.STRIKES++;
       			g_sharedHUDLyr.updateStrikes();
       			if (GC.STRIKES === 3) {
       				g_sharedGameplayLyr.megaExplosion();
       			}
       			GC.STREAKS = 0;
				this.destroy();
			}
		}
		else {
			this._scale -= 0.01;
			g_sharedGameplayLyr.shadow.setScale(this._scale / 1.8);
			this._rotate+= this._rotateBy;
			this.setRotation(this._rotate);
		}
		this._myShadow.x = this.x;
        this._myShadow.y = this.y - 150;

        if (this._myShadow.y >= GC.LANES.ENEMY[g_sharedGameplayLyr._enemyLane].y) {
        	this._myShadow.visible = false;
			this._myShadow.active = false;
        }
	},

	perspective:function() {
		this._rotate+= this._rotateBy;
		this._scale += 0.01;
		this._scale = cc.clampf(this._scale, 0, 1);
		this.setScale(this._scale);
		this.setRotation(this._rotate);
	},

	checking:function(dt) {
		if (this._check) {
			var dist = cc.pDistance(this.getPosition(), g_sharedGameplayLyr.box.getPosition());
			if (g_Player.bat) {
				if (dist <= GC.HITBOX.ALLOWANCE.BULLSEYE) {
					this.hitBack();
					g_sharedGameplayLyr.hitFX("good");
					Tools.playSFX(res.sfx_swingCorrect, false);
					GC.STREAKS++;
				}
				else if (dist <= GC.HITBOX.ALLOWANCE.DEFLECT){
					this.flyAway();
					g_sharedGameplayLyr.hitFX("bad");
					Tools.playSFX(res.sfx_swingWrong, false);
					GC.STREAKS = 0;
				}
				g_sharedHUDLyr.updateStreaks();
			}
			else if (dist > GC.HITBOX.ALLOWANCE.DEFLECT && this.y < g_sharedGameplayLyr.box.y && !this.missed) {
				g_sharedGameplayLyr.missFX();
				this.missed = true;
			}
		}
	},

	flyAway:function() {
		this._start = false;
		var randX = Tools.random(-100, GC.SCREEN.SIZE.WIDTH + 100);
		var move = cc.moveTo(this._flyAway, cc.p(randX, GC.SCREEN.SIZE.HEIGHT));
		var scale = cc.scaleTo(this._flyAway, 0.25);
		this.runAction(cc.sequence(move, cc.callFunc(this.destroy, this)));
		this.runAction(scale);
	},

	hitBack:function() {
		this._start = false;
		g_Coyote.isHit = true;
		
		var move = cc.moveTo(this._hitBack, cc.p(g_sharedGameplayLyr.coyote.getPosition().x, g_sharedGameplayLyr.coyote.getPosition().y + 100));
		var scale = cc.scaleTo(this._hitBack, 0.5);
		this.runAction(cc.sequence(move.easing(cc.easeSineOut()), cc.callFunc(function() {
			g_sharedGameplayLyr.startShake();
			g_sharedGameplayLyr.spawnExplosion();
			g_Coyote.hitAnimation();
			g_sharedHUDLyr.updateScore(25, true);
			g_Speech.animate();
			g_sharedHUDLyr.animateStreaks();
		}, g_sharedGameplayLyr), cc.callFunc(this.destroy, this)));
		this.runAction(scale.easing(cc.easeSineOut()));
	},

	lob:function(dt) {
		var dy = Math.abs(this.destination.y - this.y);
		this.x -= dt * this.leftWidth * this._speedfactor;
		if (dy > 0) {
			this.y -= dt * this.speed * -this.upHeight;
			if (this.upHeight > 0) {
				this.upHeight -= 0.8;
			}
			else {
				this.upHeight --;
			}
		}
	},

	squeaksType:function(dt) {
		this.y += this.ySpeed * dt * 2;
		this.ySpeed -= this.less;
		this.x += this.direction * this.xSpeed * dt;
		var checker = function() {
			g_sharedGameplayLyr.startShake();
			if (g_Grenade.sqRepeat === 3) {
				g_Coyote.hitContinue();
			}
			else {
				g_Coyote.hitStay();
			}
			g_sharedGameplayLyr.spawnExplosion();
			g_sharedHUDLyr.updateScore(50, false);
		};

		if (g_Squeaks.direction === -1) {
			if (this.x >= g_Coyote.getPosition().x - 25) {
				checker();
				this.destroy();
			}
		}
		else {
			if (this.x <= g_Coyote.getPosition().x + 25) {
				checker();
				this.destroy();
			}
		}
	},

	ready:function(destination, speed, maxheight, direction) {
		this._start = true;
		this.destination = destination;
		this.speed = speed;
		this.maxheight = maxheight;
		this.upHeight = Math.abs(maxheight - this.y);
		this.leftWidth = this.x - this.destination.x;

		//for squeaks
		this.ySpeed = Math.abs(this.leftWidth / 1);
		this.xSpeed = Math.abs(this.leftWidth / 1);
		this.less = this.xSpeed / 30;
		this.direction = -direction;
	},

	destroy:function() {
		this._myShadow.removeFromParent(true);
		this.removeFromParent(true);
		g_sharedHUDLyr.updateStreaks();
	}
});

var GrenadeShadow = cc.Sprite.extend({

	ctor:function() {
		this._super(res.p_lanes_png);
		this.init();
	},

	init:function() {
		this.setScale(0.5, 0.4);
		this.setColor(0, 0, 0, 200);
		this.setOpacity(100);
	}
});