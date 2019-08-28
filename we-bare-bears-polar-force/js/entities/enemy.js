var WONBATS = WONBATS || {};

function Enemy(physics) {
    this.playerRef;
    this.dieDelay = 2;
    this.dieTintDelay = 0;
    this.dieTintDuration = 0;
    this.timeCounter = 0;
    this.width = 70;
    this.height = 200;
    this.attackDelay = 0.5;
    this.attackDistance = 110;
    this.attackReach = 130;
    this.attackDamage = 1;
    this.attackHitstunDelay = 0.2;
    this.nextDistance = 120;
    this.pushedDistance = 50;
    this.moveSpeed = 300;
    this.pushedVelocity = 200;
    this.pushedDelay = 1;
    this.changeSideVelocity = 2000;
    this.changeSidePositionX = 0;
    this.hitPushBackVelocity = 200;
    this.hitPushBackPositionX = 0;
    this.dieVelocityX = 400;
    this.dieVelocityY = -600;
    this.dieVelocityYOffset = -200;
    this.dieAngularVelocity = 5;
    this.dieAngularVelocityOffset = 5;
    this.waitDelay = 0.5;
    this.previousLife;
    this.item;
    WONBATS.Character.call(this, physics);
};
Enemy.prototype = Object.create(WONBATS.Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.create = function () {
    WONBATS.Character.prototype.create.call(this);

    this.ui = new WONBATS.MovieClip(ui, "enemyindicator");
};

Enemy.prototype.inUI = function () {
    if (this.ui.getCurrentLabel() != "on") {
        this.ui.gotoAndPlay("on");
    }
};

Enemy.prototype.outUI = function () {
    if (this.ui.getCurrentLabel() != "off") {
        this.ui.gotoAndPlay("off");
    }
};

Enemy.prototype.update = function (dt) {
    WONBATS.Character.prototype.update.call(this, dt);
    this.ui.update(dt);

    if (this.view.parent) {
        if (this.ui.parent) {
            var uiPosition = this.view.toGlobal(new PIXI.Point());
            this.ui.x = uiPosition.x * (game.config.GAME_WIDTH / game.config.CANVAS_WIDTH);
            this.ui.y = 615;
        } else {
            this.view.parent.parent.parent.parent.getChildByName("ui").getChildByName("robotui").addChild(this.ui);
        }
    }
};

Enemy.prototype.reset = function (x, y, lookDir) {
    WONBATS.Character.prototype.reset.call(this, x, y, lookDir);
    this.view.filters = [];
    this.previousLife = Entity.NOTHING;
    this.fsm.pushState(this.idleState.bind(this));

    if (!this.isBrawler()) {
        var lifeIndex = this.life.length;
        this.ui.visible = true;
        this.ui.x = 15000;
        this.ui.y = 15000;
        var container = this.ui.getChildByName("container");
        container.gotoAndStop("_" + (lifeIndex - 1));
        container.getChildByName("lives").gotoAndStop(lifeIndex - 1);

        var lifeIndex = 5;

        for (var i = 0; i < this.life.length; i++) {
            var heart = container.getChildByName("heart" + (lifeIndex - (this.life.length - 1) + i));
            var action = this.life[i] === Entity.NOTHING ? "left_on" : "right_on";
            heart.gotoAndStop(action);
        }
    } else {
        this.ui.visible = false;
    }
};

Enemy.prototype.idleState = function (dt) {
    if (!this.isInAttackRange()) {
        this.movieclip.gotoAndStop("walk");
        this.fsm.pushState(this.moveState.bind(this));
    } else {
        if (this.movieclip.getCurrentLabel() !== "idle") {
            this.movieclip.gotoAndStop("idle");
        }
        if (this.playerRef.life > 0) {
            this.timeCounter = this.attackDelay;
            this.fsm.pushState(this.preAttackState.bind(this));
        }
    }
};
Enemy.prototype.moveState = function (dt) {
    if (this.playerRef.life <= 0) {
        this.movieclip.gotoAndStop("idle");
        this.body.velocity[0] = 0;
        return;
    }
    this.body.velocity[0] = this.moveSpeed * this.lookDir;
    if (this.isInAttackRange()) {
        this.body.velocity[0] = 0;
        this.fsm.popState();
    }
};

Enemy.prototype.preAttackState = function (dt) {
    if (!this.isInAttackRange()) {
        this.fsm.popState();
    } else {
        this.timeCounter -= dt;
        if (this.timeCounter <= 0) {
            this.movieclip.gotoAndStop("attack");
            this.fsm.pushState(this.attackState.bind(this));
        }
    }
};

Enemy.prototype.attackState = function (dt) {
    if (this.isCurrentAnimFinished()) {
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    } else {
        var hitbox = this.movieclip.children[0].getChildByName("hitbox");

        if (hitbox && this.weaponSound) WONBATS.soundManager.playRandom(this.weaponSound, 2);

        if (hitbox && this.isInAttackReach()) {
            this.movieclip.children[0].removeChild(hitbox);
            this.playerRef.hit(this.attackDamage, this.attackHitstunDelay);
            this.startHitstun(this.attackHitstunDelay);
            WONBATS.swapChildren(this.view, this.playerRef.view, this.view.parent, true);
        }
    }
};

Enemy.prototype.animationFinishedToIdle = function (dt) {
    if (this.isCurrentAnimFinished()) {
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Enemy.prototype.waitToIdleState = function (dt) {
    this.timeCounter -= dt;
    if (this.timeCounter <= 0) {
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Enemy.prototype.changeSideToIdleState = function (dt) {
    var diff = Math.abs(this.changeSidePositionX - this.body.position[0]);
    if (diff <= this.width / 2) {
        this.body.velocity[0] = 0;
        this.body.position[0] = this.changeSidePositionX;
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Enemy.prototype.dieState = function (dt) {
    this.timeCounter -= dt;
    this.dieTintDelay -= dt;
    if (this.dieTintDelay <= 0) {
        this.view.filters[0].matrix[4] += (0.5 / this.dieTintDuration) * dt;
        this.view.filters[0].matrix[6] -= (0.3 / this.dieTintDuration) * dt;
        this.view.filters[0].matrix[12] += (0.05 / this.dieTintDuration) * dt;
    }

    if (this.timeCounter <= 0) {
        globalsignal.emit(ge.ENEMY_EXPLODE, {
            x: this.view.x,
            y: this.view.y
        });
        globalsignal.emit(ge.SHAKE, {
            intensity: 8,
            duration: 0.2
        });
        this.fsm.clear();
        this.kill = true;
        this.ui.visible = false;
        this.movieclip.gotoAndStop("wreck");
    }
};

Enemy.prototype.isInAttackRange = function () {
    if (this.playerRef.life > 0 && Math.abs(this.getDiff(this.playerRef)) <= this.getBounds(this.playerRef) + this.attackDistance) {
        return true;
    }
    return false;
};

Enemy.prototype.isInAttackReach = function () {
    if (Math.abs(this.getDiff(this.playerRef)) <= this.getBounds(this.playerRef) + this.attackReach) {
        return true;
    }
    return false;
};

Enemy.prototype.isNearNext = function (next) {
    if (next && next.life.length > 0) {
        if (Math.abs(this.getDiff(next)) <= this.getBounds(next) + this.nextDistance) {
            return true;
        }
    }
    return false;
};

Enemy.prototype.isPushedByNext = function (next) {
    if (next && next.life.length > 0) {
        if (Math.abs(this.getDiff(next)) <= this.getBounds(next) + this.pushedDistance) {
            return true;
        }
    }
    return false;
};

Enemy.prototype.hit = function (damage, hitstunDelay) {
    this.previousLife = this.life[0];
    for (var i = 0; i < damage; i++) {
        this.life.shift();
    }

    var lifeIndex = this.life.length;
    var container = this.ui.getChildByName("container");
    container.gotoAndPlay("_" + lifeIndex);
    container.getChildByName("lives").gotoAndStop(lifeIndex - 1);

    if (this.life.length <= 0) {
        this.fsm.clear();
        this.movieclip.gotoAndStop("die");
        this.body.fixedRotation = false;
        this.body.shapes[0].mass = 1;
        this.body.updateMassProperties(); //Little of a hack, if we don't do this, after setting fixedRotation, it does crazy stuff.
        this.body.velocity[0] = this.dieVelocityX * this.lookDir * -1;
        this.body.velocity[1] = this.dieVelocityY + (this.dieVelocityYOffset * Math.random());
        this.body.angularVelocity = (this.dieAngularVelocity + (this.dieAngularVelocityOffset * Math.random())) * this.lookDir * -1;
        this.timeCounter = (this.dieDelay * Math.random());
        this.dieTintDelay = this.timeCounter * 0.8;
        this.dieTintDuration = this.timeCounter * 0.2;
        var colorFilter = new PIXI.filters.ColorMatrixFilter();
        this.view.filters = [colorFilter];
        colorFilter.matrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        this.fsm.pushState(this.dieState.bind(this));

        globalsignal.emit(ge.ENEMY_DIE);
        globalsignal.emit(ge.SHAKE, {
            intensity: 5,
            duration: 0.2
        });
    } else {
        this.startHitstun(hitstunDelay);
        this.hitPushBack();
    }
};

Enemy.prototype.pushBack = function (next) {
    this.movieclip.gotoAndStop("idle");
    this.fsm.clear();
    var bounds = this.getBounds(next);
    var diff = this.getDiff(next);
    if (Math.abs(diff) <= bounds) {
        this.body.position[0] = next.body.position[0] + ((bounds) * this.lookDir * -1);
    }
    this.body.velocity[0] = this.pushedVelocity * this.lookDir * -1;
    this.timeCounter = this.pushedDelay;
    this.fsm.pushState(this.waitToIdleState.bind(this));
};

Enemy.prototype.hitPushBack = function () {
    this.fsm.clear();
    if (!this.hasToChangeSide()) {
        this.movieclip.gotoAndStop("hurt");
        this.movieclip.children[0].gotoAndPlay(0);
        globalsignal.emit(ge.SHAKE, {
            intensity: 5,
            duration: 0.2
        });
    }
    this.body.velocity[0] = this.hitPushBackVelocity * this.lookDir * -1;
    this.hitPushBackPositionX = this.playerRef.body.position[0] + ((this.getBounds(this.playerRef) + this.attackDistance) * this.lookDir * -1);
    this.fsm.pushState(this.hitPushBackUpdate.bind(this));
};

Enemy.prototype.hitPushBackUpdate = function (dt) {
    if ( /*diff <= this.width / 2 || */ this.isCurrentAnimFinished()) {
        this.body.velocity[0] = 0;
        this.fsm.clear();
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Enemy.prototype.hasToChangeSide = function () {
    return (this.previousLife === Entity.SIDE_CHANGE);
};

Enemy.prototype.wait = function () {
    this.body.velocity[0] = 0;
    this.movieclip.gotoAndStop("idle");
    this.fsm.clear();
    this.timeCounter = this.waitDelay;
    this.fsm.pushState(this.waitToIdleState.bind(this));
};

Enemy.prototype.changeSide = function () {
    this.movieclip.gotoAndStop("idle");
    this.fsm.clear();
    this.previousLife = Entity.NOTHING;
    this.changeSidePositionX = this.playerRef.body.position[0] + ((this.getBounds(this.playerRef) + this.attackDistance) * this.lookDir);
    this.body.velocity[0] = this.changeSideVelocity * this.lookDir;
    this.lookDir *= -1;
    this.fsm.pushState(this.changeSideToIdleState.bind(this));
};

Enemy.prototype.getRandomLife = function (quantity) {
    var life = [];
    for (var i = 0; i < quantity; i++) {
        life.push(WONBATS.getRandomFromArray([Entity.SIDE_CHANGE, Entity.NOTHING]));
    }
    return life;
};

Enemy.prototype.isBrawler = function () {
    return WONBATS.isType(this, [WONBATS.BearBot1, WONBATS.BearBot2, WONBATS.BearBot3]); //add in a case needed, more bearbots
};

Enemy.prototype.setItem = function (config) {
    if (config.length > 0) {
        this.item = config;
    }
};

Enemy.prototype.dispose = function () {
    this.life = WONBATS.splice(this.life, 0, this.life.length);
    this.life = null;
    this.playerRef = null;
    this.dieDelay = null;
    this.dieTintDelay = null;
    this.dieTintDuration = null;
    this.timeCounter = null;
    this.width = null;
    this.height = null;
    this.attackDelay = null;
    this.attackDistance = null;
    this.attackReach = null;
    this.attackDamage = null;
    this.attackHitstunDelay = null;
    this.nextDistance = null;
    this.pushedDistance = null;
    this.moveSpeed = null;
    this.pushedVelocity = null;
    this.pushedDelay = null;
    this.changeSideDelay = null;
    this.changeSideVelocity = null;
    this.hitPushBackVelocity = null;
    this.dieVelocityX = null;
    this.dieVelocityY = null;
    this.dieVelocityYOffset = null;
    this.dieAngularVelocity = null;
    this.dieAngularVelocityOffset = null;
    this.waitDelay = null;
    this.previousLife = null;
    this.item = null;
    WONBATS.Character.prototype.dispose.call(this);
};

WONBATS.Enemy = Enemy;
