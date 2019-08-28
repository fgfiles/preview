function Fighter() {
    this.characterName = this.characterName || "character";
    this.movieclipPackage = this.movieclipPackage || character;
    this.movieclipClass = this.movieclipClass || "";

    Entity.call(this);
    WONBATS.addEnum(Fighter, [
        "LEFT",
        "RIGHT"
    ]);
    this.createBody();
    this.groundDistance = 0;
    this.rayMaxLength = 10000;
    this.rayDistance = this.rayMaxLength;
    this.rayCenterOffsetY = 25;
    this.addRay();
    this.addRay();
    this.addRay();
    this.blendAnimData = {};
};

Fighter.prototype = Object.create(Entity.prototype);
Fighter.prototype.constructor = Fighter;

Fighter.prototype.createBody = function () {
    this.view = new PIXI.Container();
    this.movieclip = new WONBATS.MovieClip(this.movieclipPackage, this.movieclipClass);
    this.view.addChild(this.movieclip);
    this.movieclip.update(0);
    var physicsBody = this.movieclip.getChildByName("physics");
    var compound = [];
    var minWidth = 1000,
        minX = 1000,
        maxWidth = 0,
        maxHeight = 0;
    for (var i = 0; i < physicsBody.children.length; i++) { //maybe move this to physics like "compound parser"
        var shape = physicsBody.children[i];
        if (shape.classname.indexOf("circle") != -1) {
            compound.push({
                x: shape.x,
                y: shape.y,
                radius: shape.scale.x * 50
            });

        } else if (shape.classname.indexOf("box") != -1) {
            compound.push({
                x: shape.x,
                y: shape.y,
                width: shape.scale.x * EntityFactory.BODY_SIZE,
                height: shape.scale.y * EntityFactory.BODY_SIZE,
            });
        }
        if (compound[i].width < minWidth) {
            minWidth = compound[i].width;
        }
        if (compound[i].radius && (compound[i].radius * 2) < minWidth) {
            minWidth = compound[i].radius * 2;
        }
    }
    this.body = physics.create(physics.COMPOUND, {
        x: -1500,
        y: -1500,
        fixedRotation: true,
        mass: 1,
        material: "player",
        collisionGroup: "player",
        collisionMask: this.collisionMask,
        compound: compound
    });
    this.body.gravityScale = 0.1;
    this.width = minWidth;
    this.height = physicsBody.height;
};

Fighter.prototype.reset = function (x, y) {
    this.collisionMask = ["floor", "player", "water", "bumper", "bodypart", "bullet", "kill"];
    Entity.prototype.reset.call(this, x, y);
    this.onEdge = false;
    this.lookDir = Fighter.RIGHT;
    this.lookAt = Fighter.RIGHT;
    this.damageDir = (Math.random() < 0.5) ? Fighter.RIGHT : Fighter.LEFT;
    this.groundDistance = 0;
    this.body.gravityScale = 0.1;
    this.life = 2;
    this.walkForce = 1000;
    this.floatForceX = 300;
    this.maxVelocityX = 250;
    this.maxVelocityY = -300;
    this.flapForce = -3000;
    this.flapcooldown = 0;
    this.flaprate = 0.1;
    this.onDamage = false;
    this.isTurning = false;
    this.isWalking = false;
    this.isFlapping = false;
    this.flappingInput = false;
    this.inAir = true;
    this.isDrowning = false;

    for (var i = 0; i < this.body.shapes.length; i++) {
        var isCircle = WONBATS.isType(this.body.shapes[i], p2.Circle);
        if (isCircle) {
            this.body.shapes[i].material = physics.getMaterial("player_body");
        } else {
            this.body.shapes[i].material = physics.getMaterial("player");
        }
        this.body.shapes[i].collisionGroup = physics.getCollisionGroup("player");
        this.body.shapes[i].collisionMask = physics.getCollisionMask(this.collisionMask);
    }
    this.body.gravityScale = 0.1;
    this.body.fixedRotation = true;
    this.damageTimeout = 0;

    var character = this.movieclip.getChildByName("character");
    character.rotation = 0;

    if (!this.fsm) {
        this.fsm = new StackFSM();
    }

    this.fsm.clear();
    this.fsm.pushState(this.idleState.bind(this));
};

Fighter.prototype.addRay = function () {
    if (!this.rays) {
        this.rays = [];
    }
    var ray = new p2.Ray({
        mode: p2.Ray.ALL,
        from: [0, 0],
        to: [0, this.rayMaxLength],
        skipBackfaces: true,
        collisionGroup: physics.getCollisionGroup("player"),
        collisionMask: physics.getCollisionMask(["floor", "bodypart"])
    });
    this.rays.push({
        ray: ray,
        result: new p2.RaycastResult(),
        distance: this.rayMaxLength
    });
    ray.callback = this.onRaycast.bind(this, this.rays[this.rays.length - 1]);
};

Fighter.prototype.setInput = function (config) {

};

Fighter.prototype.idleState = function (dt) {

    if ((this.input.actions["left"].isDown || this.input.actions["right"].isDown)) {
        this.fsm.clear();
        this.fsm.pushState(this.moveState.bind(this));
    }
    if (this.flappingInput) {
        this.fsm.clear();
        this.fsm.pushState(this.flapState.bind(this));
    }
};

Fighter.prototype.moveState = function (dt) {
    if (this.input.actions["left"].isDown && !this.isTurning) {
        this.lookAt = Fighter.LEFT;
        var turning = this.lookAt !== this.lookDir;
        if (this.inAir && !turning) {
            this.body.applyForce([-this.floatForceX, 0]);
        } else if (!turning) {
            this.body.applyForce([-this.walkForce, 0]);
        }
    } else if (this.input.actions["right"].isDown && !this.isTurning) {
        this.lookAt = Fighter.RIGHT;
        var turning = this.lookAt !== this.lookDir;
        if (this.inAir && !turning) {
            this.body.applyForce([this.floatForceX, 0]);
        } else if (!turning) {
            this.body.applyForce([this.walkForce, 0]);
        }
    } else {
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
    if (!this.inAir && (this.input.actions["right"].isDown || this.input.actions["left"].isDown)) {
        this.isWalking = true;
    }

    if (this.flappingInput) {
        this.fsm.clear();
        this.fsm.pushState(this.flapState.bind(this));
    }
};

Fighter.prototype.flapState = function (dt) {
    if (this.flapcooldown <= 0) {
        this.flapcooldown = this.flaprate;
        this.body.applyForce([0, this.flapForce]);
        this.isFlapping = true;
    }

    if (this.input.actions["left"].isDown && !this.isTurning) {
        this.lookAt = Fighter.LEFT;
        var turning = this.lookAt !== this.lookDir;
        if (this.inAir && !turning) {
            this.body.applyForce([-this.floatForceX, 0]);
        } else if (!turning) {
            this.body.applyForce([-this.walkForce, 0]);
        }
    } else if (this.input.actions["right"].isDown && !this.isTurning) {
        this.lookAt = Fighter.RIGHT;
        var turning = this.lookAt !== this.lookDir;
        if (this.inAir && !turning) {
            this.body.applyForce([this.floatForceX, 0]);
        } else if (!turning) {
            this.body.applyForce([this.walkForce, 0]);
        }
    }

    this.fsm.clear();
    this.fsm.pushState(this.idleState.bind(this));
};

Fighter.prototype.onRaycast = function (rayData, result) {
    var distance = result.getHitDistance(rayData.ray);
    if (distance < rayData.distance && (result.body != this.body)) {
        rayData.distance = distance;
    }
};

Fighter.prototype.update = function (dt) {
    this.damageTimeout -= dt;

    if (this.onDamage && this.damageTimeout <= 0) {
        this.onDamage = false;
    }

    if (this.input) {
        this.isWalking = false;
        this.flapcooldown -= dt;
        this.input.update(dt);
        this.flappingInput = this.input.actions["action_autofire"].isDown;
        this.isFlapping = this.flappingInput;
    }
    this.fsm.update(dt);

    if (this.life > 0) {
        this.body.velocity[0] = Math.clamp(this.body.velocity[0], -this.maxVelocityX, this.maxVelocityX);
        if (this.inAir && (this.body.velocity[1] < this.maxVelocityY)) {
            this.body.velocity[1] = this.maxVelocityY;
        }
    }
    if (this.body.position[0] < game.config.LEVEL_LEFT_LIMIT) {
        globalsignal.emit(ge.WARP_OUT, {
            x: game.config.LEVEL_RIGHT_LIMIT,
            y: this.body.position[1]
        });

        this.body.position[0] = game.config.LEVEL_RIGHT_LIMIT - 10;
        this.body.position[1] = this.body.position[1] - 0.1;
    } else if (this.body.position[0] > game.config.LEVEL_RIGHT_LIMIT) {
        globalsignal.emit(ge.WARP_OUT, {
            x: game.config.LEVEL_LEFT_LIMIT,
            y: this.body.position[1]
        });

        this.body.position[0] = game.config.LEVEL_LEFT_LIMIT + 10;
        this.body.position[1] = this.body.position[1] - 0.1;
    }
    for (var i = 0; i < this.rays.length; i++) {
        var rayData = this.rays[i],
            divider = 2;
        rayData.ray.from[0] = this.body.position[0] + ((this.width / divider) * i) - (this.width / (divider * 2)) * (this.rays.length - 1);
        rayData.ray.from[1] = this.body.position[1] + this.rayCenterOffsetY;
        rayData.ray.to[1] = rayData.ray.from[0];
        rayData.ray.to[1] = this.body.position[1] + this.rayCenterOffsetY + this.rayMaxLength;
        rayData.ray.update();
        physics.world.raycast(rayData.result, rayData.ray);
        if (game.config.DEBUG) {
            physics.drawLine(rayData.ray.from, [rayData.ray.from[0], rayData.ray.from[1] + rayData.distance]);
        }
        if (rayData.distance < this.rayDistance) {
            this.rayDistance = rayData.distance;
            this.groundDistance = this.rayDistance;
        }
        rayData.distance = this.rayMaxLength;
    }
    this.isTurning = (this.lookAt !== this.lookDir);

    var wasInAir = this.inAir;

    this.inAir = (this.rayDistance < 3) ? false : true;

    if (wasInAir && !this.inAir && this.life > 0) {
        globalsignal.emit(ge.LANDING_DUST, {
            x: this.rays[1].ray.from[0],
            y: this.rays[1].ray.from[1]
        });
        soundManager.play("hitFloor");
    }

    this.rayDistance = this.rayMaxLength;

    Entity.prototype.update.call(this, dt);

    if (this.movieclip) {
        this.updateAnims(dt);
        this.updateFliyingThing(dt);
    }
};

Fighter.prototype.updateFliyingThing = function (dt) {
    var balloons = this.movieclip.getChildByName("balloons");
    var velocityXRatio = -this.body.velocity[0] / 720;
    var velocityYRatio = -this.body.velocity[1] / 720;
    balloons.rotation += (velocityXRatio - balloons.rotation) * dt * 10;

    var balloon1 = balloons.getChildByName("balloon1");
    var balloon2 = balloons.getChildByName("balloon2");

    if (balloon1) {
        balloon1.rotation = -balloons.rotation;
    }

    if (balloon2) {
        balloon2.rotation = -balloons.rotation;
    }

    if (!this.balloonsPos) {
        this.balloonsPos = [0, 0];
    }

    this.balloonsPos[0] += (velocityXRatio * 30 - this.balloonsPos[0]) * dt * 10;
    this.balloonsPos[1] += (velocityYRatio * 30 - this.balloonsPos[1]) * dt * 10;

    balloons.x = this.balloonsPos[0];
    balloons.y = -16 + this.balloonsPos[1];
};

Fighter.prototype.updateAnims = function (dt) {
    var character = this.movieclip.getChildByName(this.characterName);
    var animFinished = character.currentFrame === (character.totalFrames - 1),
        currentLabel = this.movieclip.getCurrentLabel(),
        slideVelocity = 10;
    var isSliding = (this.body.velocity[0] > slideVelocity || this.body.velocity[0] < -slideVelocity);
    character.scale.x = this.getLookScale();

    if (this.life > 0 && (currentLabel !== "waiting" && currentLabel !== "spawn" && currentLabel !== "respawn")) {
        if (this.inAir) {
            this.updateBodyPart(character.getChildByName("arm1"), "arm1");
            this.updateBodyPart(character.getChildByName("arm2"), "arm2");
            this.updateBodyPart(character.getChildByName("eye1"), "eye1");
            this.updateBodyPart(character.getChildByName("eye2"), "eye2");
            this.updateBodyPart(character.getChildByName("mouth"), "mouth");
        }

        if (!this.isTurning) {
            if (this.inAir) {
                this.gotoAndStopOnceCharacter(currentLabel, "air_idle");
            } else if (this.isWalking) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_run");
            } else if (!this.isWalking && isSliding) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_stop");
            } else if (!this.isWalking) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_idle");
            }
        } else {
            if (this.inAir) {
                this.gotoAndStopOnceCharacter(currentLabel, "air_turn");
            } else if (currentLabel === "air_turn") {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_stopturn");
            } else if (currentLabel === "air_turn" && !isSliding) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_turn");
            } else if ((currentLabel === "ground_run") && isSliding) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_stopturn");
            } else if (currentLabel === "ground_stop" && isSliding) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_stopturn");
            } else if (currentLabel === "ground_stop" && !isSliding) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_turn_fast");
            } else if (currentLabel === "ground_idle" && !isSliding) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_turn_fast");
            } else if (currentLabel === "ground_idle" && isSliding) {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_stopturn");
            } else if (currentLabel === "ground_run") {
                this.gotoAndStopOnceCharacter(currentLabel, "ground_stopturn");
            }
        }

        if (animFinished) {
            if (currentLabel === "air_turn") {
                this.lookDir = this.lookAt;
                this.gotoAndStopOnceCharacter(currentLabel, "air_idle");
            } else if (currentLabel === "ground_turn" || currentLabel === "ground_stopturn" || currentLabel === "ground_turn_fast") {
                this.lookDir = this.lookAt;
                if (!this.isWalking) {
                    this.gotoAndStopOnceCharacter(currentLabel, "ground_idle");
                } else {
                    this.gotoAndStopOnceCharacter(currentLabel, "ground_run");
                }
            }
            this.blendAnimData.targetLabel = "";
            this.blendAnimData.previousLabel = "";
            this.blendAnimData.targetFrame = 0;
        } else {
            if (this.blendAnimData.targetLabel === currentLabel && character.currentFrame < this.blendAnimData.targetFrame) {
                character.gotoAndPlay(this.blendAnimData.targetFrame);
                character.update(dt);
                this.blendAnimData.targetFrame = 0;
                this.blendAnimData.targetLabel = "";
                this.blendAnimData.previousLabel = "";
            }
        }
    }
    this.updateBalloons();
};

Fighter.prototype.updateBodyPart = function (part, childName) {
    if (!part) {
        return;
    }
    var child = part.getChildByName(childName);
    var label = part.getCurrentLabel(),
        animFinished = true,
        partFinished = (part.currentFrame === part.totalFrames - 1);
    if (child) {
        animFinished = (child.currentFrame === child.totalFrames - 1);
    }
    if (this.isFlapping) {
        if (label !== "flap") {
            part.gotoAndStop("flap");
        }
    } else if (label === "flap") {
        part.gotoAndPlay("flap_out");
    } else if (label === "flap_out" && partFinished) {
        part.gotoAndStop("idle");
    }
};

Fighter.prototype.gotoAndStopOnceCharacter = function (currentLabel, targetLabel) {
    if (currentLabel !== targetLabel) {
        this.blendAnimData.targetFrame = 0;
        this.blendAnimData.targetLabel = "";
        if ((currentLabel === "ground_turn" || currentLabel === "air_turn" || currentLabel === "ground_stopturn" || currentLabel === "ground_stop") && (targetLabel === "ground_turn" || targetLabel === "air_turn" || targetLabel === "ground_stopturn" || targetLabel === "ground_stop")) {
            var character = this.movieclip.getChildByName(this.characterName);
            this.blendAnimData.targetLabel = targetLabel;
            this.blendAnimData.targetFrame = character.currentFrame;
            this.blendAnimData.previousLabel = currentLabel;
        }
        this.movieclip.gotoAndStop(targetLabel);
    }
};

Fighter.prototype.updateBalloons = function () {
    var lookingDir = (this.lookAt === Fighter.RIGHT) ? "right" : "left";
    var balloons = this.movieclip.getChildByName("balloons");
    var isRespawning = this.movieclip.getCurrentLabel() === "respawn";
    var newLabel = (this.isTurning) ? "turn_" + lookingDir : "idle_" + lookingDir,
        currentLabel = balloons.getCurrentLabel();
    newLabel = newLabel + "_" + this.life;
    if (isRespawning) {
        return;
    }
    if (this.onDamage && this.life === 1) {
        lookingDir = (this.damageDir === Fighter.RIGHT) ? "right" : "left";
        newLabel = "puncture_" + lookingDir;
    } else if (this.life === 1 && (currentLabel !== "puncture_left" || currentLabel !== "puncture_right")) {
        newLabel = "idle_" + this.life;
    } else if (this.life === 0) {
        newLabel = "puncture_center";
    }
    if (currentLabel !== newLabel) {
        balloons.gotoAndPlay(newLabel);
        balloons.update(0);
    }
};

Fighter.prototype.onPhysicsCollide = function (other) {
    if (!this.isDrowning && other.id === EntityFactory.WATER) {
        this.isDrowning = true;
        this.input.enabled = false;
        for (var i = 0; i < this.body.shapes.length; i++) {
            this.body.shapes[i].collisionMask = physics.getCollisionMask(["kill"]);
        }
        globalsignal.emit(ge.SPLASH, {
            x: this.view.x,
            y: this.view.y
        });
        this.fsm.clear();
    }
    if (this.isDrowning && other.id === EntityFactory.KILL) {
        this.kill = true;
    }
};

Fighter.prototype.dieState = function (dt) {
    this.timeCounter -= dt;
    if (this.timeCounter <= 0) {
        this.timeCounter = 0;
        this.fsm.clear();
        this.kill = true;
        this.body.sleep();
    }
};

Fighter.prototype.getLookScale = function () {
    return (this.lookDir === Fighter.RIGHT) ? -1 : 1;
};


Fighter.prototype.applyPush = function (other) {};

Fighter.prototype.damageProcess = function (other) {
    if (other && other.applyPush) {
        other.applyPush(this);
    }

    this.life -= 1;
    if (this.life <= 0) {
        this.onDamage = true;
        this.timeCounter = 5;
        for (var i = 0; i < this.body.shapes.length; i++) {
            this.body.shapes[i].collisionMask = physics.getCollisionMask(["water", "kill"]);
        }
        this.body.gravityScale = 1;
        this.body.fixedRotation = false;
        this.body.velocity[0] = this.body.velocity[1] = 0;
        this.body.applyImpulse([100 * (Math.random() - Math.random()), -500], [(Math.random() - Math.random()) * this.width, 0]);
        this.fsm.clear();
        this.movieclip.gotoAndStop("die");
        var character = this.movieclip.getChildByName(this.characterName);
        character.rotation = 0;
        if (this.id === EntityFactory.PLAYER_1) {
            soundManager.play("hitDie");
        } else {
            soundManager.play("starchyDie");
        }
    } else {
        if (other) {
            this.damageDir = (this.body.position[0] < other.body.position[0]) ? Fighter.RIGHT : Fighter.LEFT;
        } else {
            this.damageDir = (Math.random() < 0.5) ? Fighter.RIGHT : Fighter.LEFT;
        }
        this.onDamage = true;
        this.damageTimeout = 0.5;
    }
};

Fighter.prototype.getBox = function (childName, boxname) {
    var hittableBox = this.movieclip.getChildByName(childName);
    if (hittableBox) {
        hittableBox = hittableBox.getChildByName(boxname);
    }
    if (hittableBox) {
        var position = hittableBox.toGlobal(new PIXI.Point());
        position = this.view.parent.toLocal(position);
        var rect = {
            x: position.x,
            y: position.y,
            width: hittableBox.scale.x * 100,
            height: hittableBox.scale.y * 100
        };
        rect.x -= (rect.width / 2);
        rect.y -= (rect.height / 2);
        return rect;
        position = null;
    }
    return;
};

Fighter.prototype.getAnimDuration = function (label) {

};

Fighter.prototype.beforeTransition = function () {
    this.fsm.enabled = false;
    this.input.enabled = false;
};

Fighter.prototype.afterTransition = function () {
    this.fsm.enabled = true;
    this.input.enabled = true;
};
