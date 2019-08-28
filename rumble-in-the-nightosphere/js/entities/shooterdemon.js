function ShooterDemon() {
    this.movieclipPackage = worm;
    this.movieclipClass = "worm";
    Walker.call(this);
};

ShooterDemon.prototype = Object.create(Walker.prototype);
ShooterDemon.prototype.constructor = ShooterDemon;

ShooterDemon.prototype.reset = function (x, y, life) {
    this.shooting = false;
    this.shootTimeout = 2;
    this.shootCounter = this.shootTimeout;
    Walker.prototype.reset.call(this, x, y, life);
    this.rayCenterOffsetY = 20;
    this.walkForce = 550;
    this.maxVelocityX = 50;
};

ShooterDemon.prototype.idleState = function (dt) {
    if (!this.inAir && this.isWalking) {
        this.fsm.clear();
        this.fsm.pushState(this.moveState.bind(this));
    } else {
        this.gotoAndStopOnce("ground_idle");
    }
};

ShooterDemon.prototype.update = function (dt) {
    var currentLabel = this.movieclip.getCurrentLabel();
    if (!this.onEdge && !this.onObstacleCollide && this.shootCounter > 0 && this.life > 0 && currentLabel !== "waiting" && currentLabel !== "spawn") {
        this.shootCounter -= dt;
    }
    Walker.prototype.update.call(this, dt);
};

ShooterDemon.prototype.getAnimDuration = function (label) {
    var animData = this.movieclipPackage["_worm_worm_" + label];
    var duration = animData.totalFrames / animData.fps;
    return duration;
};

ShooterDemon.prototype.onHitboxCollide = function (other, hitboxes) {
    var isPlayer = EntityFactory.PLAYERS.indexOf(other.id) !== -1;
    if (isPlayer && !this.onDamage && this.life > 0) {
        var attackBox = hitboxes.entity2.attack1,
            bodyBox = hitboxes.entity1.hit2;
        var hit = (bodyBox && attackBox) ? WONBATS.rectVsRect(bodyBox, attackBox) : false;
        if (hit) {
            soundManager.play("hitEnemy", true);
            this.damageProcess(other);
        }
    }
};

ShooterDemon.prototype.moveState = function (dt) {
    var isSliding = Math.abs(this.body.velocity[0]) < 3;
    if ( /*!this.onEdge && !this.onObstacleCollide && */ this.shootCounter <= 0 && !isSliding) {
        this.gotoAndStopOnce("ground_stop");
        this.fsm.clear();
        this.fsm.pushState(this.stopShootState.bind(this));
    } else if ((this.onEdge || this.onObstacleCollide) && !isSliding) {
        this.gotoAndStopOnce("ground_stop");
        this.fsm.clear();
        this.fsm.pushState(this.stopState.bind(this));
    } else if (((this.onEdge || this.onObstacleCollide) && isSliding) || !this.onEdge && this.onObstacleCollide && this.lookAt !== this.lookDir) {
        this.gotoAndStopOnce("ground_turn");
        this.fsm.clear();
        this.fsm.pushState(this.turnState.bind(this));
    } else if (this.lookDir === Fighter.LEFT) {
        this.lookAt = Fighter.LEFT;
        this.body.applyForce([-this.walkForce, 0]);
        this.gotoAndStopOnce("ground_run");
    } else if (this.lookDir === Fighter.RIGHT) {
        this.lookAt = Fighter.RIGHT;
        this.body.applyForce([this.walkForce, 0]);
        this.gotoAndStopOnce("ground_run");
    }
};
ShooterDemon.prototype.stopShootState = function (dt) {
    if (this.movieclip.getCurrentLabel() === "ground_stop" && this.animFinished()) {
        this.gotoAndStopOnce("shoot");
        soundManager.play("enemySpit", true);
    }
    if (this.movieclip.getCurrentLabel() === "shoot" && this.animFinished()) {
        this.shootCounter = this.shootTimeout;
        this.shooting = false;
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

ShooterDemon.prototype.shoot = function (shootBox) {
    if (!this.shooting) {
        this.shooting = true;
        var bullet = entityFactory.create(EntityFactory.BULLET_DEMON, {
            x: shootBox.x,
            y: shootBox.y,
            json: worm,
            classname: "wormbullet",
            container: this.view.parent
        });
        bullet.body.velocity[0] = 300 * this.getLookScale() * -1;
        bullet.body.velocity[1] = -500;
    }
};
