function CinnamonBoss() {
    Entity.call(this);
    this.view = new PIXI.Container();
    this.movieclip = new WONBATS.MovieClip(cinnamon_boss, "cinnamon_boss");
    this.view.addChild(this.movieclip);
    this.movieclip.update(0);
    this.collisionMask = ["player"];
    var physicsBody = this.movieclip.getChildByName("physics");
    var compound = [];
    for (var i = 0; i < physicsBody.children.length; i++) {
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
    }
    this.body = physics.create(physics.COMPOUND, {
        x: -1500,
        y: -1500,
        fixedRotation: true,
        mass: 0,
        material: "player",
        collisionGroup: "player",
        collisionMask: this.collisionMask,
        compound: compound
    });
    this.width = physicsBody.width;
    this.height = physicsBody.height;
    this.fsm = new StackFSM();
    this.onDamage = false;
    this.attackTimeout = 0;
    this.rayMaxLength = 100000;
    this.rayDistance = [this.rayMaxLength, this.rayMaxLength];
    this.addEyesRay();
    this.addEyesRay();
    this.attackPattern = [[100, 50, 700, 50], [700, 50, 100, 50]];
    this.attackPatternIndex = 0;
    this.moveTween = {
        x: null,
        y: null
    };
    this.levitateTween = null;
    this.rayHitBoxes = [];
    this.glowDistance = 20;
    this.glow = new PIXI.filters.GlowFilter(this.glowDistance, 2, 0, 0x00ff00, 0.2); //distance, outerStrength, innerStrength, color, quality
    this.view.filters = [this.glow];
    this.canHurt = true;

}

CinnamonBoss.prototype = Object.create(Entity.prototype);
CinnamonBoss.prototype.constructor = CinnamonBoss;

CinnamonBoss.prototype.reset = function (x, y) {
    Entity.prototype.reset.call(this, x, y);
    this.life = 3;
    this.onDamage = false;
    this.attackTimeout = 0;
    this.timeCounter = 3;
    this.rayHitBoxes = [];
    if (this.levitateTween) {
        WONBATS.Tween.kill(this.levitateTween);
    }
    this.levitateTween = null;
    this.levitateDir = 1;
    if (this.moveTween.x && this.moveTween.x) {
        WONBATS.Tween.kill(this.moveTween.x);
        WONBATS.Tween.kill(this.moveTween.y);
    }
    this.rayDistance = [this.rayMaxLength, this.rayMaxLength];
    this.glow.enabled = true;
    this.fsm.clear();
    this.fsm.pushState(this.idleState.bind(this));
    this.movieclip.gotoAndStop("idle");
    globalsignal.add(this.onGlobalSignal.bind(this));
    this.canHurt = true;
};

CinnamonBoss.prototype.onGlobalSignal = function (globalEvent, data) {
    switch (globalEvent) {
        case ge.PAUSE_RESUME:
            soundManager.fadeTo("cinnamon_evil_attack_loop", 1, 1);
            break;
        case ge.PAUSE_OUT:
            soundManager.stop("cinnamon_evil_attack_loop");
            break;
        case ge.ON_PAUSE:
            soundManager.fadeTo("cinnamon_evil_attack_loop", 0, 1);
            break;
        case ge.GAMEOVER_OUT:
        case ge.GAMEOVER_IN:
            soundManager.stop("cinnamon_evil_attack_loop");
            break;
    }
};

CinnamonBoss.prototype.addEyesRay = function () {
    if (!this.eyeRays) {
        this.eyeRays = [];
        this.laserGraphics = [];
        this.rayDistance = [this.rayMaxLength, this.rayMaxLength];
    }
    var ray = new p2.Ray({
        mode: p2.Ray.ALL,
        from: [0, 0],
        to: [0, this.rayMaxLength],
        skipBackfaces: true,
        collisionGroup: physics.getCollisionGroup("player"),
        collisionMask: physics.getCollisionMask(["floor", "player"])
    });
    this.eyeRays.push({
        ray: ray,
        result: new p2.RaycastResult(),
        distance: this.rayMaxLength
    });
    ray.callback = this.onRaycast.bind(this, this.eyeRays[this.eyeRays.length - 1]);
    var rayGraphic = new PIXI.Graphics();
    this.laserGraphics.push(rayGraphic);
};

CinnamonBoss.prototype.update = function (dt) {
    this.fsm.update(dt);
    Entity.prototype.update.call(this, dt);
    this.updateEyes(dt);
};

CinnamonBoss.prototype.updateEyes = function (dt) {
    this.rayHitBoxes = [];
    if (!this.canAttack()) {
        return;
    }
    var character = this.movieclip.getChildByName("character");
    var laserboxes = [];
    if (character.getChildByName("laserbox1") && character.getChildByName("laserbox2")) {
        laserboxes[0] = character.getChildByName("laserbox1");
        laserboxes[1] = character.getChildByName("laserbox2");
    }

    for (var i = 0; i < laserboxes.length; i++) {
        var rayData = this.eyeRays[i],
            rayWidth = 6,
            eyeGlobalPos = laserboxes[i].toGlobal(new PIXI.Point());
        var eyeLocalPos = this.view.parent.toLocal(eyeGlobalPos);
        rayData.ray.from[0] = eyeLocalPos.x;
        rayData.ray.from[1] = eyeLocalPos.y;
        rayData.ray.to[1] = rayData.ray.from[0];
        rayData.ray.to[1] = eyeLocalPos.y + this.rayMaxLength;
        rayData.ray.update();
        physics.world.raycast(rayData.result, rayData.ray);
        if (this.laserGraphics[i].parent !== this.view.parent) {
            this.view.parent.addChild(this.laserGraphics[i]);
        }
        this.laserGraphics[i].clear();
        this.laserGraphics[i].beginFill(0x00ff00, 0.8);
        this.laserGraphics[i].drawRect(rayData.ray.from[0] - (rayWidth / 2), rayData.ray.from[1], rayWidth, rayData.distance - 3);
        this.laserGraphics[i].beginFill(0x90ff90, 0.8);
        this.laserGraphics[i].drawRect(rayData.ray.from[0] - (rayWidth / 4), rayData.ray.from[1], rayWidth / 2, rayData.distance - 3);
        this.laserGraphics[i].endFill();
        globalsignal.emit(ge.LASER_HIT, {
            x: eyeLocalPos.x,
            y: eyeLocalPos.y + rayData.distance
        });

        this.rayHitBoxes[i] = {
            x: eyeLocalPos.x - (rayWidth / 2),
            y: eyeLocalPos.y,
            width: rayWidth,
            height: rayData.distance
        };

        if (rayData.distance < this.rayDistance[i]) {
            this.rayDistance[i] = rayData.distance;
        }

        rayData.distance = this.rayMaxLength;
    }
};

CinnamonBoss.prototype.onRaycast = function (rayData, result) {
    var distance = result.getHitDistance(rayData.ray);
    if (distance < rayData.distance && (result.body != this.body)) {
        rayData.distance = distance;
    }
};

CinnamonBoss.prototype.beforeTransition = function () {
};

CinnamonBoss.prototype.afterTransition = function () {
    this.timeCounter = 3;
};

CinnamonBoss.prototype.castBalloons = function () {

};

CinnamonBoss.prototype.idleState = function (dt) {
    this.timeCounter -= dt;
    this.levitate(dt);
    if (this.timeCounter <= 0) {
        WONBATS.Tween.kill(this.moveTween.x);
        WONBATS.Tween.kill(this.moveTween.y);
        this.onDamage = false;
        this.fsm.clear();
        WONBATS.Tween.kill(this.levitateTween);
        this.levitateTween = null;

        if (this.canAttack()) {
            soundManager.play("cinnamon_evil_laugh");
            this.attackPatternIndex = Math.floor(this.attackPattern.length * Math.random());

            this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[0], this.attackPattern[this.attackPatternIndex][0], 2);
            this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[1], this.attackPattern[this.attackPatternIndex][1], 2);

            this.fsm.pushState(this.moveState.bind(this));
        } else {
            soundManager.play("cinnamon_evil_dash");
            var players = entityFactory.getAll(EntityFactory.PLAYERS);
            if (players.length === 0) {
                var randomX = ((game.config.GAME_WIDTH - 200) * Math.random()) + 100,
                    randomY = ((game.config.GAME_HEIGHT - 200) * Math.random()) + 100;
                this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[0], randomX, 1);
                this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[1], randomY, 1);
            } else {
                var target = WONBATS.getRandomFromArray(players);
                if (target.input.enabled) {
                    this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[0], target.body.position[0], 2);
                    this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[1], target.body.position[1], 2);
                } else {
                    var randomX = ((game.config.GAME_WIDTH - 200) * Math.random()) + 100,
                        randomY = ((game.config.GAME_HEIGHT - 200) * Math.random()) + 100;
                    this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[0], randomX, 1);
                    this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.easeOutCubic, this.body.position[1], randomY, 1);
                }
            }
            this.fsm.pushState(this.moveState.bind(this));
        }
    }
};

CinnamonBoss.prototype.moveState = function (dt) {
    this.body.position[0] = WONBATS.Tween.update(this.moveTween.x, dt);
    this.body.position[1] = WONBATS.Tween.update(this.moveTween.y, dt);
    if (this.moveTween.x.finished && this.moveTween.y.finished) {
        WONBATS.Tween.kill(this.moveTween.x);
        WONBATS.Tween.kill(this.moveTween.y);
        this.timeCounter = 1;
        this.fsm.clear();
        if (this.canAttack()) {
            this.fsm.pushState(this.preAttackState.bind(this));
        } else {
            this.fsm.pushState(this.idleState.bind(this));
        }
        this.attackTimeout += 1;
    }
};

CinnamonBoss.prototype.preAttackState = function (dt) {
    var character = this.movieclip.getChildByName("character");
    if (this.movieclip.getCurrentLabel() !== "preattack") {
        this.movieclip.gotoAndStop("preattack");
    } else if (character.currentFrame === (character.totalFrames - 1)) {
        soundManager.play("cinnamon_evil_attack_start");
        soundManager.play("cinnamon_evil_attack_loop");
        soundManager.fadeTo("cinnamon_evil_attack_loop", 1, 1);
        this.movieclip.gotoAndStop("attack");
        this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.linear, this.body.position[0], this.attackPattern[this.attackPatternIndex][2], 4);
        this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.linear, this.body.position[1], this.attackPattern[this.attackPatternIndex][3], 4);
        this.fsm.clear();
        this.fsm.pushState(this.attackState.bind(this));
    }

};

CinnamonBoss.prototype.attackState = function (dt) {
    this.body.position[0] = WONBATS.Tween.update(this.moveTween.x, dt);
    this.body.position[1] = WONBATS.Tween.update(this.moveTween.y, dt);
    if (this.moveTween.x.finished && this.moveTween.y.finished) {
        soundManager.play("cinnamon_evil_attack_end");
        soundManager.stop("cinnamon_evil_attack_loop");
        WONBATS.Tween.kill(this.moveTween.x);
        WONBATS.Tween.kill(this.moveTween.y);
        for (var i = 0; i < this.laserGraphics.length; i++) {
            this.laserGraphics[i].clear();
        }
        this.attackTimeout = 0;
        this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.linear, this.body.position[1], this.body.position[1] + 200, 4);
        this.glow.enabled = false;
        soundManager.play("respawn");
        this.movieclip.gotoAndStop("dizzy");
        this.canHurt = false;
        this.fsm.clear();
        this.fsm.pushState(this.dizzyState.bind(this));
    }

};

CinnamonBoss.prototype.dizzyState = function (dt) {
    this.body.position[1] = WONBATS.Tween.update(this.moveTween.y, dt);
    if (this.moveTween.y.finished) {
        this.timeCounter = 0.5;
        WONBATS.Tween.kill(this.moveTween.y);
        this.moveTween.y = null;
        this.fsm.clear();
        this.fsm.pushState(this.dizzyRecoveryState.bind(this));
    }
};

CinnamonBoss.prototype.dizzyRecoveryState = function (dt) {
    this.levitate(dt);
    this.timeCounter -= dt;
    if (this.timeCounter <= 0) {
        WONBATS.Tween.kill(this.levitateTween);
        this.levitateTween = null;
        soundManager.play("respawn");
        this.movieclip.gotoAndStop("dizzy_end");
        this.fsm.clear();
        this.fsm.pushState(this.dizzyEndState.bind(this));
        this.glow.enabled = true;
    }
};

CinnamonBoss.prototype.dizzyEndState = function (dt) {
    this.levitate(dt);
    if (this.animFinished("dizzy_end")) {
        this.canHurt = true;
        WONBATS.Tween.kill(this.levitateTween);
        this.levitateTween = null;
        this.timeCounter = 1;
        this.movieclip.gotoAndStop("idle");
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

CinnamonBoss.prototype.onHitboxCollide = function (other, hitboxes) {
    var isPlayer = EntityFactory.PLAYERS.indexOf(other.id) !== -1;
    if (isPlayer && !this.onDamage && this.life > 0) {
        var attackBox = hitboxes.entity2.attack1,
            bodyBox = hitboxes.entity1.hit2;
        var hit = (bodyBox && attackBox) ? WONBATS.rectVsRect(bodyBox, attackBox) : false;
        if (hit) {
            globalsignal.emit(ge.SKELETON_HIT, {
                x: this.view.x,
                y: this.view.y - 60
            });
            this.onDamage = true;
            this.life -= 1;
            this.fsm.clear();
            WONBATS.Tween.kill(this.levitateTween);
            this.levitateTween = null;
            soundManager.play("demonDie");
            soundManager.play("skeletonDie");
            if (this.life > 0) {
                this.timeCounter = 1;
                this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.easeOutBack, this.body.position[0], this.body.position[0] - (other.body.position[0] - this.body.position[0]), 0.5);
                this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.easeOutBack, this.body.position[1], this.body.position[1] - (other.body.position[1] - this.body.position[1]), 0.5);
                this.movieclip.gotoAndStop("hurt");
                this.glow.enabled = true;
                this.canHurt = true;
            } else {
                this.glow.enabled = false;
                this.canHurt = false;
                globalsignal.emit(ge.CINNAMON_DEFEATED);
                this.timeCounter = 1;
                this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.easeOutElastic, this.body.position[0], 400, 2);
                this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.easeOutElastic, this.body.position[1], 300, 2);
                this.movieclip.gotoAndStop("dying");
                soundManager.play("cinnamon_evil_death");
            }
            this.fsm.pushState(this.bounceState.bind(this));
        }
    }
};

CinnamonBoss.prototype.deadState = function (dt) {
    this.levitate(dt);
    this.timeCounter -= dt;
    if (this.timeCounter <= 0) {
        WONBATS.Tween.kill(this.levitateTween);
        this.levitateTween = null;
        globalsignal.emit(ge.WARP_OUT, {
            x: this.view.x,
            y: this.view.y
        });
        soundManager.play("cinnamon_evil_explosion");
        this.fsm.clear();
        this.fsm.pushState(this.rebornState.bind(this));
        globalsignal.emit(ge.CINNAMON_REBORN);
        this.timeCounter = 0.3;
    }
};

CinnamonBoss.prototype.rebornState = function (dt) {
    this.levitate(dt);
    this.timeCounter -= dt;
    if (this.timeCounter <= 0) {
        WONBATS.Tween.kill(this.levitateTween);
        this.levitateTween = null;
        this.fsm.clear();
        this.movieclip.gotoAndStop("cinnamon");
        globalsignal.emit(ge.CINNAMON_CLEAR);
        this.fsm.pushState(this.endingState.bind(this));
    }
};

CinnamonBoss.prototype.endingState = function (dt) {
    this.levitate(dt);
};

CinnamonBoss.prototype.bounceState = function (dt) {
    this.body.position[0] = WONBATS.Tween.update(this.moveTween.x, dt);
    this.body.position[1] = WONBATS.Tween.update(this.moveTween.y, dt);
    if (this.moveTween.x.finished && this.moveTween.y.finished) {
        WONBATS.Tween.kill(this.moveTween.x);
        WONBATS.Tween.kill(this.moveTween.y);
        this.fsm.clear();
        if (this.life <= 0) {
            this.fsm.pushState(this.deadState.bind(this));
        } else {
            this.fsm.pushState(this.bounceRecover.bind(this));
        }
    }
};

CinnamonBoss.prototype.bounceRecover = function (dt) {
    this.levitate(dt);
    if (this.animFinished("hurt")) {
        WONBATS.Tween.kill(this.levitateTween);
        this.levitateTween = null;
        this.fsm.clear();
        this.timeCounter = 1;
        this.movieclip.gotoAndStop("idle");
        this.fsm.pushState(this.idleState.bind(this));
    }
};

CinnamonBoss.prototype.getBox = function (childName, boxname) {
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

CinnamonBoss.prototype.levitate = function (dt) {
    if (!this.levitateTween) {
        this.levitateDir = (this.levitateDir === 1) ? -1 : 1;
        this.levitateTween = WONBATS.Tween.tween(WONBATS.Tween.easeInOutCubic, this.body.position[1], this.body.position[1] - ((this.body.position[1] + (20 * this.levitateDir)) - this.body.position[1]), 1);
    }
    if (this.levitateTween) {
        this.body.position[1] = WONBATS.Tween.update(this.levitateTween, dt);
        if (this.levitateTween.finished) {
            WONBATS.Tween.kill(this.levitateTween);
            this.levitateTween = null;
        }
    }
};

CinnamonBoss.prototype.canAttack = function () {
    return this.attackTimeout >= 4; //4
};

CinnamonBoss.prototype.animFinished = function (name) {
    var character = this.movieclip.getChildByName("character"),
        isCurrentLabel = this.movieclip.getCurrentLabel() === name;
    if (character.currentFrame === (character.totalFrames - 1) && isCurrentLabel) {
        return true;
    }
    return false;
};

CinnamonBoss.prototype.onDead = function () {
    Entity.prototype.onDead.call(this);
    globalsignal.emit(ge.ENEMY_DIE);
};

CinnamonBoss.prototype.damageProcess = function () {
    soundManager.play("demonDie");
    soundManager.play("skeletonDie");
    globalsignal.emit(ge.CINNAMON_DEFEATED);
    globalsignal.emit(ge.SKELETON_HIT, {
        x: this.view.x,
        y: this.view.y - 60
    });
    this.onDamage = true;
    this.life -= 1;
    this.fsm.clear();
    WONBATS.Tween.kill(this.levitateTween);
    this.levitateTween = null;
    this.timeCounter = 2;
    this.glow.enabled = false;
    this.moveTween.x = WONBATS.Tween.tween(WONBATS.Tween.easeOutBack, this.body.position[0], 400, 2);
    this.moveTween.y = WONBATS.Tween.tween(WONBATS.Tween.easeOutBack, this.body.position[1], 300, 2);
    this.fsm.pushState(this.bounceState.bind(this));
    this.movieclip.gotoAndStop("dying");
    soundManager.play("cinnamon_evil_death");
};
