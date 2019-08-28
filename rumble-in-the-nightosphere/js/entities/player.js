function Player() {
    Fighter.call(this);
};

Player.prototype = Object.create(Fighter.prototype);
Player.prototype.constructor = Player;

Player.prototype.reset = function (x, y) {
    Fighter.prototype.reset.call(this, x, y);
    this.floatForceX = 600;
    this.gotoAndStopOnceCharacter("", "ground_idle");
    this.onDamage = true;
    this.damageTimeout = 3;
    this.fsm.clear();
    this.fsm.pushState(this.idleState.bind(this));
};

Player.prototype.applyPush = function (other) {
    

    var diffx = this.view.x - other.view.x;
    var diffy = this.view.y - other.view.y;

    var ln = Math.sqrt(diffx * diffx + diffy * diffy);

    this.body.velocity[0] = (diffx / ln) * 10;
    this.body.velocity[1] = (diffy / ln) * 100;
};

Player.prototype.respawn = function () {
    
    for (var i = 0; i < this.body.shapes.length; i++) {
        this.body.shapes[i].collisionMask = physics.getCollisionMask(["water", "floor"]);
    }
    this.body.gravityScale = 0;
    this.input.enabled = false;
    this.onDamage = true;
    this.damageTimeout = 3;
    this.movieclip.gotoAndStop("respawn");
    this.movieclip.update(0);
    var character = this.movieclip.getChildByName("character");
    character.gotoAndPlay(0);
    var balloons = this.movieclip.getChildByName("balloons");
    balloons.gotoAndPlay("respawn");
    soundManager.play("respawn");
    this.fsm.clear();
    this.fsm.pushState(this.respawnState.bind(this));

}

Player.prototype.respawnState = function (dt) {
    var currentLabel = this.movieclip.getCurrentLabel();
    var character = this.movieclip.getChildByName(this.characterName);
    var animFinished = character.currentFrame === (character.totalFrames - 1);
    if (currentLabel === "respawn" && animFinished) {
        for (var i = 0; i < this.body.shapes.length; i++) {
            this.body.shapes[i].collisionMask = physics.getCollisionMask(this.collisionMask);
        }
        this.body.gravityScale = 0.1;
        this.input.enabled = true;
        this.gotoAndStopOnceCharacter(this.currentLabel, "air_idle");
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Player.prototype.setInput = function (config) {
    if (!this.input) {
        this.input = new Input();
        for (var action in config) {
            this.input.addKey(action, config[action]);
        }
    }
    this.input.reset();
};

Player.prototype.flapState = function (dt) {
    if (this.flapcooldown <= 0) {
        soundManager.playRandom("mentitaFlying", 7);
    }
    Fighter.prototype.flapState.call(this, dt);
};

Player.prototype.onPhysicsCollide = function (other) {
    Fighter.prototype.onPhysicsCollide.call(this, other);
    var isBullet = EntityFactory.BULLETS.indexOf(other.id) !== -1,
        isBoss = other.id === EntityFactory.CINNAMON_BOSS;
    if ((isBullet || (isBoss && other.canHurt)) && !this.onDamage && this.life > 0) {
        this.damageProcess(other);
    }
};

Player.prototype.onHitboxCollide = function (other, hitboxes) {
    if (this.onDamage) {
        return;
    }
    var isWalker = other.id === EntityFactory.WALKER || other.id === EntityFactory.GROUND_DEMON,
        isFlyer = other.id === EntityFactory.FLYER || other.id === EntityFactory.FLYER_DEMON,
        isPlayer = EntityFactory.PLAYERS.indexOf(other.id) !== -1;
    if (isWalker && other.isAttacking && !other.inAir && this.life > 0) {
        var hittableBalloonBox = hitboxes.entity1.hit1,
            hittableBodyBox = hitboxes.entity1.hit2,
            attackBox = hitboxes.entity2.attack1;
        var enemyHitBalloons = (hittableBalloonBox && attackBox) ? WONBATS.rectVsRect(hittableBalloonBox, attackBox) : false;
        var enemyHitBody = (hittableBodyBox && attackBox) ? WONBATS.rectVsRect(hittableBodyBox, attackBox) : false;
        if (enemyHitBalloons) {
            this.damageProcess(other);
        } else if (enemyHitBody) {
            this.damageProcess(other);
        }
    } else if (isFlyer && this.life > 0) {
        var hittableBox = hitboxes.entity1.hit1,
            attackBox = hitboxes.entity2.attack1;
        var enemyHitBalloons = (hittableBox && attackBox) ? WONBATS.rectVsRect(hittableBox, attackBox) : false;
        if (enemyHitBalloons) {
            this.damageProcess(other);
            globalsignal.emit(ge.PLAYER_HIT, { //TODO: replace this for a real hit particle
                x: attackBox.x,
                y: attackBox.y
            });
        }

    } else if (isPlayer && !this.onDamage && this.life > 0) {
        var hittableBox = hitboxes.entity1.hit1,
            attackBox = hitboxes.entity2.attack1;
        var enemyHitBalloons = (hittableBox && attackBox) ? WONBATS.rectVsRect(hittableBox, attackBox) : false;
        if (enemyHitBalloons) {
            this.damageProcess(other);
        }
    }
};

Player.prototype.onRayCollide = function (hittableBox, rayHitBox) {
    if (this.onDamage) {
        return;
    }
    var rayHit = WONBATS.rectVsRect(hittableBox, rayHitBox);
    if (rayHit) {
        this.life = 1;
        this.damageProcess();
    }
};

Player.prototype.damageProcess = function (other) {
    Fighter.prototype.damageProcess.call(this, other);
    soundManager.play("hitSoul", true);
    this.damageTimeout = 1;
};

Player.prototype.onDead = function () {
    Fighter.prototype.onDead.call(this);
    globalsignal.emit(ge.PLAYER_DIE, this.id);
};
