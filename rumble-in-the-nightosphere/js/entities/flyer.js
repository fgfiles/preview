function Flyer() {
    this.movieclipPackage = this.movieclipPackage || skeleton;
    this.movieclipClass = this.movieclipClass || "skeleton";
    Fighter.call(this);

    this.addNavigationRay(25, -40, this.rayMaxLength);
    this.addNavigationRay(25, -15, this.rayMaxLength);
    this.addNavigationRay(25, 10, this.rayMaxLength);

    this.addNavigationRay(-25, -40, -this.rayMaxLength);
    this.addNavigationRay(-25, -15, -this.rayMaxLength);
    this.addNavigationRay(-25, 10, -this.rayMaxLength);

    this.addNavigationRay(-25, -40, 0, -this.rayMaxLength);
    this.addNavigationRay(0, -40, 0, -this.rayMaxLength);
    this.addNavigationRay(25, -40, 0, -this.rayMaxLength);

    this.addNavigationRay(-25, 10, 0, this.rayMaxLength);
    this.addNavigationRay(0, 10, 0, this.rayMaxLength);
    this.addNavigationRay(25, 10, 0, this.rayMaxLength);

    this.bestNavPosition = [[this.rayMaxLength, this.rayMaxLength], [this.rayMaxLength, this.rayMaxLength]];
};

Flyer.prototype = Object.create(Fighter.prototype);
Flyer.prototype.constructor = Flyer;

Flyer.prototype.reset = function (x, y) {
    Fighter.prototype.reset.call(this, x, y);
    this.rayCenterOffsetY = 15;
    this.walkForce = 0;
    this.floatForceX = 200;
    this.maxVelocityX = 200;
    this.maxVelocityY = -150;
    this.flapForce = -3000;
    this.life = 1;
    this.setInput(["left", "right", "action_autofire"]);
    this.fsm.clear();
    this.fsm.pushState(this.idleState.bind(this));
    this.movieclip.gotoAndStop("waiting");
};

Flyer.prototype.setInput = function (actions) {
    if (!this.input) {
        this.input = new AIFlyer(this);
        for (var action in actions) {
            this.input.addKey(actions[action]);
        }
    }
    this.input.reset();
};

Flyer.prototype.addNavigationRay = function (startX, startY, offsetX, offsetY) {
    if (!this.navRays) {
        this.navRays = [];
    }
    var ray = new p2.Ray({
        mode: p2.Ray.ALL,
        from: [0, 0],
        to: [0, 0],
        skipBackfaces: true,
        collisionGroup: physics.getCollisionGroup("player"),
        collisionMask: physics.getCollisionMask(["floor", "water", "bumper", "bodypart"])
    });
    this.navRays.push({
        startX: startX || 0,
        startY: startY || 0,
        offsetX: offsetX || 0,
        offsetY: offsetY || 0,
        ray: ray,
        result: new p2.RaycastResult(),
        distance: this.rayMaxLength
    });
    ray.callback = this.onNavRaycast.bind(this, this.navRays[this.navRays.length - 1]);
};

Flyer.prototype.onNavRaycast = function (rayData, result) {
    var distance = result.getHitDistance(rayData.ray);
    if (distance < rayData.distance && (result.body != this.body)) {
        rayData.distance = distance;
    }
};

Flyer.prototype.onPhysicsCollide = function (other) {

    if (!this.isDrowning && other.id === EntityFactory.WATER) {
        globalsignal.emit(ge.SPLASH, {
            x: this.view.x,
            y: this.view.y
        });
        this.life = 0;
        this.fsm.clear();
        this.input.enabled = false;
        this.isDrowning = true;
    }
    if (this.isDrowning && other.id === EntityFactory.KILL) {
        this.kill = true;
    }
    if (this.life <= 0) {
        return;
    }

    if (this.life === 0) {
        if (EntityFactory.FLYER_DEMON) {
            soundManager.play("demonDie", true);
        } else {
            soundManager.play("skeletonDie", true);
        }
    }
};

Flyer.prototype.onHitboxCollide = function (other, hitboxes) {
    var isPlayer = EntityFactory.PLAYERS.indexOf(other.id) !== -1;
    if (isPlayer && !this.onDamage && this.life > 0) {
        var hittableBox = hitboxes.entity1.hit2,
            attackBox = hitboxes.entity2.attack1;
        var enemyHitBalloons = (hittableBox && attackBox) ? WONBATS.rectVsRect(hittableBox, attackBox) : false;
        if (enemyHitBalloons) {
            soundManager.play("hitEnemy", true);
            this.damageProcess(other);
        }
    }
};

Flyer.prototype.damageProcess = function (other) {
    globalsignal.emit(ge.SKELETON_HIT, {
        x: this.view.x,
        y: this.view.y - 40
    });
    this.life -= 1;

    if (other) {
        other.applyPush(this);
    }

    if (this.life <= 0) {
        if (this.id === EntityFactory.FLYER_DEMON) {
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
        this.damageDir = (this.body.position[0] < other.body.position[0]) ? Fighter.RIGHT : Fighter.LEFT;
        this.onDamage = true;
        this.damageTimeout = 0.5;
    }
};

Flyer.prototype.update = function (dt) {

    this.bestNavPosition[0][0] = this.rayMaxLength;
    this.bestNavPosition[0][1] = this.rayMaxLength;
    this.bestNavPosition[1][0] = this.rayMaxLength;
    this.bestNavPosition[1][1] = this.rayMaxLength;

    for (var i = 0; i < this.navRays.length; i++) {
        var navRay = this.navRays[i];
        navRay.ray.from[0] = this.body.position[0] + navRay.startX;
        navRay.ray.from[1] = this.body.position[1] + navRay.startY;
        navRay.ray.to[0] = navRay.ray.from[0] + navRay.offsetX;
        navRay.ray.to[1] = navRay.ray.from[1] + navRay.offsetY;
        navRay.ray.update();
        physics.world.raycast(navRay.result, navRay.ray);

        if (navRay.offsetX === 0 && navRay.offsetY < 0) {
            if (this.bestNavPosition[1][0] > navRay.distance) {
                this.bestNavPosition[1][0] = navRay.distance;
            }
        } else if (navRay.offsetX === 0 && navRay.offsetY > 0) {
            if (this.bestNavPosition[1][1] > navRay.distance) {
                this.bestNavPosition[1][1] = navRay.distance;
            }
        } else if (navRay.offsetX > 0 && navRay.offsetY === 0) {
            if (this.bestNavPosition[0][0] > navRay.distance) {
                this.bestNavPosition[0][0] = navRay.distance;
            }
        } else if (navRay.offsetX < 0 && navRay.offsetY === 0) {
            if (this.bestNavPosition[0][1] > navRay.distance) {
                this.bestNavPosition[0][1] = navRay.distance;
            }
        }
        navRay.distance = this.rayMaxLength;
    }
    if (game.config.DEBUG) {
        var lineSize = 50,
            offsetX = [20, 0],
            offsetY = [15, 9, 37];
        physics.drawLine([this.body.position[0] + this.bestNavPosition[0][0] + offsetX[0], this.body.position[1] - lineSize - offsetY[0]], [this.body.position[0] + this.bestNavPosition[0][0] + offsetX[0], this.body.position[1] + lineSize - offsetY[0]]);

        physics.drawLine([this.body.position[0] - this.bestNavPosition[0][1] - offsetX[0], this.body.position[1] - lineSize - offsetY[0]], [this.body.position[0] - this.bestNavPosition[0][1] - offsetX[0], this.body.position[1] + lineSize - offsetY[0]]);

        physics.drawLine([this.body.position[0] - lineSize, this.body.position[1] - this.bestNavPosition[1][0] - offsetY[2]], [this.body.position[0] + lineSize, this.body.position[1] - this.bestNavPosition[1][0] - offsetY[2]]);

        physics.drawLine([this.body.position[0] - lineSize, this.body.position[1] + this.bestNavPosition[1][1] + offsetY[1]], [this.body.position[0] + lineSize, this.body.position[1] + this.bestNavPosition[1][1] + offsetY[1]]);
    }
    Fighter.prototype.update.call(this, dt);
};

Flyer.prototype.updateFliyingThing = function (dt) {
    var char = this.movieclip.getChildByName("character");
    var velocityXRatio = -this.body.velocity[0] / 1080;
    var velocityYRatio = -this.body.velocity[1] / 1080;
    char.rotation = -velocityXRatio;
};

Flyer.prototype.castBalloons = function () {};

Flyer.prototype.updateBalloons = function () {};

Flyer.prototype.castBalloons = function () {
    this.movieclip.gotoAndPlay("spawn");
};

Flyer.prototype.afterTransition = function () {
    Fighter.prototype.afterTransition.call(this);
};

Flyer.prototype.onDead = function () {
    Fighter.prototype.onDead.call(this);
    globalsignal.emit(ge.ENEMY_DIE);
};
