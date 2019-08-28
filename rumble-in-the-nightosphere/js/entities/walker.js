function Walker() {
    this.movieclipPackage = this.movieclipPackage || skeleton_spear;
    this.movieclipClass = this.movieclipClass || "skeleton_spear";
    Fighter.call(this);
    this.addEdgeRays();
};

Walker.prototype = Object.create(Fighter.prototype);
Walker.prototype.constructor = Walker;

Walker.prototype.reset = function (x, y, life) {
    Fighter.prototype.reset.call(this, x, y);
    this.onObstacleCollide = false;
    this.edgeDistance = this.rayMaxLength;
    this.walkForce = 700;
    this.maxVelocityX = 100;
    this.body.gravityScale = 1;
    this.life = life || 1;
    this.isAttacking = false;
    this.lookAt = Math.random() < 0.5 ? Fighter.LEFT : Fighter.RIGHT;
    this.lookDir = this.lookAt;
    this.isWalking = true;
    this.damageTimeout = 0;
    this.gotoAndStopOnce("waiting");
    this.fsm.clear();
    this.fsm.pushState(this.idleState.bind(this));
};

Walker.prototype.addEdgeRays = function () {
    var ray = new p2.Ray({
        mode: p2.Ray.ALL,
        from: [0, 0],
        to: [0, this.rayMaxLength],
        skipBackfaces: true,
        collisionGroup: physics.getCollisionGroup("player"),
        collisionMask: physics.getCollisionMask(["floor"])
    });
    var rayResult = new p2.RaycastResult();
    this.edgeRay = {
        ray: ray,
        result: rayResult,
        distance: this.rayMaxLength
    };
    ray.callback = this.onRaycast.bind(this, this.edgeRay);
    this.edgeDistance = this.rayMaxLength;
};

Walker.prototype.update = function (dt) {

    this.onEdge = false;
    this.edgeRay.ray.from[0] = this.body.position[0] + (25 * this.getLookScale() * -1);
    this.edgeRay.ray.from[1] = this.body.position[1] + this.rayCenterOffsetY;
    this.edgeRay.ray.to[0] = this.edgeRay.ray.from[0];
    this.edgeRay.ray.to[1] = this.body.position[1] + this.rayCenterOffsetY + this.rayMaxLength;

    this.edgeRay.ray.update();
    physics.world.raycast(this.edgeRay.result, this.edgeRay.ray);
    if (game.config.DEBUG) {
        physics.drawLine(this.edgeRay.ray.from, [this.edgeRay.ray.from[0], this.edgeRay.ray.from[1] + this.edgeRay.distance]);
    }
    if (this.edgeRay.distance < this.edgeDistance) {
        this.edgeDistance = this.edgeRay.distance;
    }
    if (this.edgeRay.distance > 3) {
        this.onEdge = true;
    }
    this.edgeRay.distance = this.rayMaxLength;
    this.edgeDistance = this.rayMaxLength;

    if (this.movieclip.getCurrentLabel() === "spawn") {
        if (this.animFinished()) {
            this.gotoAndStopOnce("ground_idle");
        }
    }

    Fighter.prototype.update.call(this, dt);

    var character = this.movieclip.getChildByName(this.characterName);
    var helmet = character ? character.getChildByName("helmet") : null;

    if (helmet) {
        if (helmet.attribs.visible !== (this.life > 1)) {
            helmet.attribs.visible = this.life > 1;
            character.update(0);
        }
    }
};

Walker.prototype.setInput = function (actions) {};

Walker.prototype.onPhysicsCollide = function (other) {

    var isEnemy = EntityFactory.ENEMIES.indexOf(other.id) !== -1,
        isBodyPart = other.id === EntityFactory.BODY_PART,
        isLookingInDir = (this.lookDir === Fighter.LEFT && other.body.position[0] < this.body.position[0]) || (this.lookDir === Fighter.RIGHT && other.body.position[0] > this.body.position[0]);

    if (!this.isDrowning && other.id === EntityFactory.WATER) {
        globalsignal.emit(ge.SPLASH, {
            x: this.view.x,
            y: this.view.y
        });
        this.isDrowning = true;
        this.life = 0;
        this.fsm.clear();
        for (var i = 0; i < this.body.shapes.length; i++) {
            this.body.shapes[i].collisionMask = physics.getCollisionMask(["kill"]);
        }
    }
    if (this.isDrowning && other.id === EntityFactory.KILL) {
        this.kill = true;
    }
    if (this.life <= 0) {
        return;
    }

    if ((isEnemy || isBodyPart) && isLookingInDir && !this.onObstacleCollide) {
        this.onObstacleCollide = true;
    }
};

Walker.prototype.onHitboxCollide = function (other, hitboxes) {
    var isPlayer = EntityFactory.PLAYERS.indexOf(other.id) !== -1;
    if (isPlayer && !this.onDamage && this.life > 0) {
        var attackBox = hitboxes.entity2.attack1,
            bodyBox = hitboxes.entity1.hit2;
        var hit = (bodyBox && attackBox) ? WONBATS.rectVsRect(bodyBox, attackBox) : false;
        if (hit) {
            soundManager.play("hitEnemy", true);
            this.damageProcess(other);
        }
        if (this.life < 0) {
            return;
        }
        var hittableBalloonBox = hitboxes.entity2.hit1,
            hittableBodyBox = hitboxes.entity2.hit2,
            isPlayerAlive = !other.onDamage;
        attackBox = hitboxes.entity1.attack1;
        var enemyHitBalloons = (hittableBalloonBox && attackBox) ? WONBATS.rectVsRect(hittableBalloonBox, attackBox) : false;
        var enemyHitBody = (hittableBodyBox && attackBox) ? WONBATS.rectVsRect(hittableBodyBox, attackBox) : false;
        var isLookingAt = ((this.lookDir === Fighter.LEFT) && this.body.position[0] > other.body.position[0]) || ((this.lookDir === Fighter.RIGHT) && this.body.position[0] < other.body.position[0]);
        if ((enemyHitBalloons || enemyHitBody) && isPlayerAlive && isLookingAt && !this.isTurning && !this.isAttacking && !this.inAir) {
            globalsignal.emit(ge.SKELETON_HIT, {
                x: attackBox.x + ((attackBox.width) * this.getLookScale() * -1),
                y: attackBox.y
            });
            soundManager.play("enemySword", true);
            this.gotoAndStopOnce("attack");
            this.isAttacking = true;
            this.fsm.clear();
            this.fsm.pushState(this.attackState.bind(this));
        }
    }
};

Walker.prototype.updateAnims = function (dt) {
    var character = this.movieclip.getChildByName(this.characterName);
    character.scale.x = this.getLookScale();
};

Walker.prototype.damageProcess = function (other) {
    globalsignal.emit(ge.SKELETON_HIT, {
        x: this.view.x,
        y: this.view.y - 40
    });

    if (other) {
        other.applyPush(this);
    }

    this.life -= 1;
    if (this.life <= 0) {
        if (this.id === EntityFactory.GROUND_DEMON || this.id === EntityFactory.SHOOTER_DEMON) {
            soundManager.play("demonDie", true);
        } else {
            soundManager.play("skeletonDie", true);
        }
        this.fsm.clear();
        this.kill = true;
        this.movieclip.gotoAndStop("crash");
        this.movieclip.update(0);
        var character = this.movieclip.getChildByName("character");
        globalsignal.emit(ge.CREATE_BODY_PARTS, character.children);
    } else {
        this.onDamage = true;
        this.damageTimeout = 0.5;
        var character = this.movieclip.getChildByName(this.characterName);
        var helmet = character.getChildByName("helmet");
        globalsignal.emit(ge.CREATE_BODY_PARTS, [helmet]);
        if (this.id === EntityFactory.GROUND_DEMON || this.id === EntityFactory.SHOOTER_DEMON) {
            soundManager.play("hitHead_W2", true);
        } else {
            soundManager.play("hitHead", true);
        }
    }
};

Walker.prototype.updateFliyingThing = function (dt) {};

Walker.prototype.castBalloons = function () {
    this.gotoAndStopOnce("spawn");
};

Walker.prototype.updateBalloons = function () {};

Walker.prototype.afterTransition = function () {
    this.fsm.enabled = true;
};

Walker.prototype.beforeTransition = function () {
    this.fsm.enabled = false;
};

Walker.prototype.getAnimDuration = function (label) {
    var animData = this.movieclipPackage["_skeleton_spear_skeleton_" + label];
    var duration = animData.totalFrames / animData.fps;
    return duration;
};

Walker.prototype.gotoAndStopOnce = function (targetLabel) {
    if (this.movieclip.getCurrentLabel() !== targetLabel) {
        this.movieclip.gotoAndStop(targetLabel);
        this.movieclip.update(0);
        this.updateAnims(0);
    }
};

Walker.prototype.idleState = function (dt) {
    if (!this.inAir && this.isWalking) {
        this.fsm.clear();
        this.fsm.pushState(this.moveState.bind(this));
    } else {
        this.gotoAndStopOnce("ground_idle");
    }
};

Walker.prototype.moveState = function (dt) {
    var isSliding = Math.abs(this.body.velocity[0]) < 3;
    if ((this.onEdge || this.onObstacleCollide) && !isSliding) {
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

Walker.prototype.turnState = function (dt) {
    if (this.movieclip.getCurrentLabel() === "ground_turn" && this.animFinished()) {
        this.lookAt = (this.lookAt === Fighter.RIGHT) ? Fighter.LEFT : Fighter.RIGHT;
        this.lookDir = this.lookAt;
        this.onObstacleCollide = false;
        this.gotoAndStopOnce("ground_idle");
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Walker.prototype.attackState = function (dt) {
    if (this.movieclip.getCurrentLabel() === "attack" && this.animFinished()) {
        this.isAttacking = false;
        this.gotoAndStopOnce("ground_idle");
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Walker.prototype.stopState = function (dt) {
    if (this.movieclip.getCurrentLabel() === "ground_stop" && this.animFinished()) {
        this.timeCounter = this.getAnimDuration("ground_idle") * 2;
        this.gotoAndStopOnce("ground_idle");
        this.fsm.clear();
        this.fsm.pushState(this.stopWaitState.bind(this));
    }
};

Walker.prototype.stopWaitState = function (dt) {
    this.timeCounter -= dt;
    if (this.timeCounter <= 0) {
        this.gotoAndStopOnce("ground_turn");
        this.fsm.clear();
        this.fsm.pushState(this.turnState.bind(this));
    }
};

Walker.prototype.animFinished = function () {
    var character = this.movieclip.getChildByName(this.characterName);
    return character.currentFrame === (character.totalFrames - 1);
};

Walker.prototype.onDead = function () {
    Fighter.prototype.onDead.call(this);
    globalsignal.emit(ge.ENEMY_DIE);
};
