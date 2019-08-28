var WONBATS = WONBATS || {};

function Player(physics, input) {
    this.input = input;
    this.canAttackCb;
    this.attackLandedCb;
    this.discardWeaponCb;
    this.throwCb;
    this.vacuumExplosionCb;
    this.attackRange = [0, 0]; //0 left, 1 right
    this.missDelay = 0.7;
    this.missVelocity = 100;
    this.noMiss = true;
    this.attackVelocity = 10;
    this.attackSlideVelocity = 100; //100;
    this.attackDelay = 0.1;
    this.attacked = false;
    this.attackLandDistance = 0;
    this.attackHitstunDelay = 0.2; //0.2;
    this.attackFreezeFrame = 5;
    this.attackLabels = [];
    this.throwDelay = 0.2;
    this.lastAttackAnim = "";
    this.damaged = false;
    this.weapons = {
        hand: {
            attackDistance: 80,
            damage: 1,
            attackRange: [300, 300],
            life: -1
        },
        axe: {
            attackDistance: 110,
            life: 3,
            damage: 999,
            attackRange: [450, 450],
            particlesOffset: {
                x: 150,
                y: -30
            }
        },
        mace: {
            attackDistance: 110,
            life: 3,
            damage: 999, //if we wanted one hit kill damage should be like the highest value posible ex:100
            attackRange: [450, 450],
            particlesOffset: {
                x: 150,
                y: -30
            }
        },
        bat: {
            attackDistance: 110,
            life: 5,
            damage: 999, //if we wanted one hit kill damage should be like the highest value posible ex:100
            attackRange: [450, 450],
            particlesOffset: {
                x: 150,
                y: -30
            }
        },
        hammer: {
            attackDistance: 110,
            life: 3,
            damage: 999, //if we wanted one hit kill damage should be like the highest value posible ex:100
            attackRange: [450, 450],
            particlesOffset: {
                x: 150,
                y: -30
            }
        },
        saw: {
            life: 3,
            damage: 0, //if we wanted one hit kill damage should be like the highest value posible ex:100
            attackRange: [1000, 1000],
            bulletType: EntityFactory.BULLET_SAW,
            offset: {
                x: 120,
                y: -40
            }
        }
    };
    this.currentWeapon = {};
    this.clothes;
    this.width = 80;
    this.height = 100;
    WONBATS.Character.call(this, physics);

    this.mcIndex = 1;
};

Player.prototype = Object.create(WONBATS.Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.create = function () {
    WONBATS.Character.prototype.create.call(this);
    this.body = this.physics.create(this.physics.CAPSULE, {
        x: -5000,
        y: -5000,
        radius: this.width / 2,
        length: this.height,
        mass: 1,
        material: "player",
        collisionGroup: "player",
        collisionMask: ["ground"],
        fixedRotation: true,
        angle: Math.toRadians(90)
    });
    this.movieclip = new WONBATS.MovieClip(polar, "polar");
    this.movieclip.rotation = Math.toRadians(-90);
    this.movieclip.x = 85;
    this.view.addChild(this.movieclip);
    this.setWeapon("hand");
    if (this.currentWeapon.id === "hand") {
        this.movieclip.gotoAndStop("zen");
    }
};

Player.prototype.setTrail = function (parent) {
    this.trail = new WONBATS.Trail(this.view, parent, 0.01, 0.3, {
        movieclip: this.movieclip,
        labels: {
            attack_weapon_1: {
                x: 50,
                y: 0
            },
            attack_weapon_2: {
                x: 50,
                y: -20
            },
            attack_hand_1: {
                x: 0,
                y: 0
            },
            attack_hand_2: {
                x: 0,
                y: 0
            },
            attack_hand_3: {
                x: 0,
                y: -10
            },
            attack_hand_4: {
                x: 0,
                y: -20
            }
        }
    });
};

Player.prototype.reset = function (x, y, lookDir) {
    WONBATS.Character.prototype.reset.call(this, x, y, lookDir);
    this.life = 3;
    this.damaged = false;
    this.fsm.pushState(this.idleState.bind(this));
};

Player.prototype.update = function (dt) {
    WONBATS.Character.prototype.update.call(this, dt);

    var weapon = this.movieclip.children[this.mcIndex].getChildByName("weapon");
    if (weapon) {
        this.movieclip.update(0);
        weapon.gotoAndStop(this.currentWeapon.id);
        weapon.update(0);
    }

    var currentLabel = this.movieclip.getCurrentLabel();
    var currentFrame = this.movieclip.children[this.mcIndex].currentFrame;
    if (currentLabel.indexOf("attack") !== -1) {
        if (this.isCurrentAnimFinished()) {
            this.movieclip.gotoAndStop("idle_" + this.getWeaponType());
        }
    }
    if (this.life > 0) {
        var vacuum = this.movieclip.children[0];
        if (vacuum.getCurrentLabel() !== "_" + this.life) {
            vacuum.gotoAndStop("_" + this.life);
        }
    }

    this.trail.update(dt);
};

Player.prototype.idleState = function (dt) {
    var leftDown = this.input.actions["left"].isDown,
        leftJustPressed = this.input.actions["left"].isJustPressed,
        canAttackLeft = leftDown && !leftJustPressed,
        rightDown = this.input.actions["right"].isDown,
        rightJustPressed = this.input.actions["right"].isJustPressed,
        canAttackRight = rightDown && !rightJustPressed,
        canAttack = canAttackLeft || canAttackRight,
        weaponType = this.getWeaponType(),
        throwableWeapon = (weaponType === "saw"),
        previousLookDir = this.lookDir;

    if (game.config.ATTRACT_MODE) {
        this.lookDir = (Math.random() < 0.5) ? Entity.LEFT : Entity.RIGHT;
        var visibleTargets = this.canAttackCb();
        if (visibleTargets && visibleTargets.length > 0 && (visibleTargets[0].distance < this.attackRange[0])) {
            if (visibleTargets[0].target.body.position[0] < this.body.position[0]) {
                canAttackLeft = true;
                this.lookDir = Entity.LEFT;
            } else if (visibleTargets[0].target.body.position[0] > this.body.position[0]) {
                canAttackRight = true;
                this.lookDir = Entity.RIGHT;
            }
            canAttack = canAttackLeft || canAttackRight;
        }
    }

    if (canAttack && !throwableWeapon) {
        this.lookDir = canAttackLeft ? Entity.LEFT : Entity.RIGHT;
        var targets = this.canAttackCb();
        this.gotoAndStopAttackAnim();
        WONBATS.soundManager.playRandom("polarPunch", 3);
        if (targets) {
            var isItem = WONBATS.EntityFactory.isItemClass(targets[0].target);
            this.trail.start();
            var diff = targets[0].distance;
            this.body.velocity[0] = diff * this.attackVelocity * this.lookDir;
            this.timeCounter = this.attackDelay;
            this.fsm.pushState(this.attackState.bind(this, targets[0].target, isItem));
        } else {
            this.noMiss = false;
            this.body.velocity[0] = this.missVelocity * this.lookDir;
            this.timeCounter = this.missDelay;
            this.fsm.pushState(this.missState.bind(this));
        }
        if (this.clothes) {
            this.dropClothes();
        }

    } else if (canAttack) { //throwable weapon equiped
        this.lookDir = canAttackLeft ? Entity.LEFT : Entity.RIGHT;
        this.fsm.pushState(this.throwState.bind(this));
    } else {
        this.lookDir = previousLookDir;
    }
};

Player.prototype.throwState = function (dt) {
    if (!this.attacked) {
        var weaponType = this.getWeaponType(),
            attackAnim = "attack_" + weaponType,
            weaponConfig = this.weapons[this.currentWeapon.id];

        if (this.currentWeapon.life > 0) {
            this.currentWeapon.life -= 1;
        }
        if (this.currentWeapon.life === 0) {
            var emptyAnim = attackAnim + "_empty";
            this.forceAnimUpdate(emptyAnim);
            this.lastAttackAnim = emptyAnim;
        } else {
            this.forceAnimUpdate(attackAnim);
            this.lastAttackAnim = attackAnim;
        }
        this.throwCb(weaponConfig.bulletType, this.body.position[0] + weaponConfig.offset.x * this.lookDir, this.body.position[1] + weaponConfig.offset.y, this.lookDir, this.view.parent);
        this.attacked = true;
        this.timeCounter = this.throwDelay;
        this.updateWeapon();
    } else {
        this.timeCounter -= dt;
        if (this.timeCounter <= 0) {
            this.attacked = false;
            this.fsm.popState();
        }
    }
};

Player.prototype.attackState = function (target, isItem, dt) { //FIXME: item grab and long slide bug
    if (target.kill) {
        this.attacked = false;
        this.body.velocity[0] = 0;
        this.trail.stop();
        this.fsm.popState();
        return;
    }
    if (!this.attacked) {
        var bounds = this.getBounds(target);
        var diff = this.getDiff(target);
        var sign = Math.sign(diff);
        this.attackLandDistance = this.weapons[this.currentWeapon.id].attackDistance;
        if (isItem) {
            if ((Math.abs(diff) <= bounds + this.attackLandDistance)) {
                this.attacked = true;
                this.body.velocity[0] = 0;
                this.body.position[0] = target.body.position[0] + ((bounds + this.attackLandDistance) * sign);
                this.body.velocity[0] = this.attackSlideVelocity * sign * -1;
                this.timeCounter = this.attackDelay;
                this.trail.stop();
            }
        } else if (Math.abs(diff) <= bounds + this.attackLandDistance) {
            this.attacked = true;
            this.body.velocity[0] = 0;
            this.body.position[0] = target.body.position[0] + ((bounds + this.attackLandDistance) * sign);
            this.body.velocity[0] = this.attackSlideVelocity * sign * -1;
            this.timeCounter = this.attackDelay;
            var weaponDamage = this.weapons[this.currentWeapon.id].damage;
            if (WONBATS.isType(target, [WONBATS.BearBot1, WONBATS.BearBot2, WONBATS.BearBot3])) {
                weaponDamage = 1;
            }
            var targetLife = target.life;
            var targetLifeLength = targetLife.length || targetLife;
            var isOverKill = (targetLifeLength - weaponDamage) <= 0;
            var targetLifeIndex = Math.clamp(weaponDamage - 1, 0, targetLifeLength - 1);
            var hitLanded = true;
            if (targetLife.length && (targetLife[targetLifeIndex] === Entity.SIDE_CHANGE)) {
                hitLanded = false;
            }
            if (this.getWeaponType() === "weapon") {
                if (this.currentWeapon.life > 0 && (hitLanded || isOverKill)) {
                    this.currentWeapon.life -= 1;
                }
                if (this.currentWeapon.life === 0) {
                    var emptyAnim = "attack_" + this.getWeaponType() + "_empty";
                    this.movieclip.gotoAndStop(emptyAnim);
                    this.lastAttackAnim = emptyAnim;
                }
            }

            var attackBox = this.movieclip.children[this.mcIndex].getChildByName("attackbox");
            if (attackBox && (hitLanded || isOverKill)) {
                var pos = attackBox.toGlobal(new PIXI.Point(0, 0));
                pos = this.movieclip.parent.parent.toLocal(pos);
                globalsignal.emit(ge.HIT_CONNECTED, {
                    x: pos.x,
                    y: pos.y
                });
            }

            target.hit(weaponDamage, this.attackHitstunDelay);
            this.startHitstun(this.attackHitstunDelay, this.attackFreezeFrame);
            WONBATS.swapChildren(this.view, target.view, this.view.parent, true);
            this.attackLandedCb(this, target);
            this.trail.stop();
            this.updateWeapon();
        }
    } else {
        this.timeCounter -= dt;
        if (this.timeCounter <= 0) {
            this.attacked = false;
            this.fsm.popState();
        }
    }
};

Player.prototype.hit = function (damage, hitstunDelay) {
    if (this.damaged) {
        return;
    }
    var hurtLabel = "hurt_" + this.getWeaponType();
    var currentLabel = this.movieclip.getCurrentLabel();
    this.damaged = true;
    WONBATS.Character.prototype.hit.call(this, damage, hitstunDelay);
    this.body.velocity[0] = 0;
    this.attacked = false;
    globalsignal.emit(ge.PLAYER_HURT, {
        hp: this.life
    });

    globalsignal.emit(ge.SHAKE, {
        intensity: 5,
        duration: 0.2
    });

    this.fsm.clear();
    if (this.life > 0) {
        this.forceAnimUpdate(hurtLabel);
        this.fsm.pushState(this.animationFinishedToIdle.bind(this));
    } else {
        this.forceAnimUpdate("die");
        var vacuum = this.movieclip.children[0];
        vacuum.attribs.visible = false;
        this.vacuumExplosionCb(vacuum, this.body.position[0], this.body.position[1] + (this.height / 2), this.currentWeapon.id, this.view.parent);
        this.body.applyImpulse([500 * WONBATS.getRandomFromArray([1, -1]), -1100]);
        globalsignal.emit(ge.ENEMY_EXPLODE, {
            x: this.view.x,
            y: this.view.y + (this.height / 2)
        });
        globalsignal.emit(ge.SHAKE, {
            intensity: 8,
            duration: 0.2
        });
        globalsignal.emit(ge.PLAYER_DIE);
        this.fsm.pushState(this.dieState.bind(this));
        this.dieCb(this);
    }

    if (this.clothes) {
        this.dropClothes();
    }
};

Player.prototype.animationFinishedToIdle = function (dt) {
    if (this.isCurrentAnimFinished()) {
        this.fsm.clear();
        this.attacked = false;
        this.timeCounter = 0;
        this.movieclip.gotoAndStop("idle_" + this.getWeaponType());
        this.damaged = false;
        this.fsm.pushState(this.idleState.bind(this));
    }
};

Player.prototype.missState = function (dt) {
    this.timeCounter -= dt;
    var currentFrame = this.movieclip.children[this.mcIndex].currentFrame;
    if (currentFrame >= this.attackFreezeFrame) {
        this.movieclip.children[this.mcIndex].stop();
    }
    if (this.timeCounter <= 0) {
        this.movieclip.children[this.mcIndex].play();
        this.fsm.popState();
    }
};

Player.prototype.gotoAndStopAttackAnim = function (newAnim) {
    var anim = this.getNewAttackAnim();
    while (anim === this.lastAttackAnim) {
        anim = this.getNewAttackAnim();
    }
    this.forceAnimUpdate(anim);
    this.lastAttackAnim = anim;
};

Player.prototype.getNewAttackAnim = function () {
    var currentWeapon = this.getWeaponType();
    for (var label in this.movieclip.labels) {
        if (label.indexOf("attack_" + currentWeapon) !== -1 && label.indexOf("attack_" + currentWeapon + "_empty") === -1) {
            this.attackLabels.push(label);
        }
    }
    var anim = WONBATS.getRandomFromArray(this.attackLabels);
    this.attackLabels = WONBATS.splice(this.attackLabels, 0, this.attackLabels.length);
    return anim;
};

Player.prototype.getWeaponType = function () {
    if (this.currentWeapon.id === "saw") {
        return "saw";
    } else if (this.currentWeapon.id !== "hand") {
        return "weapon";
    }
    return "hand";
};

Player.prototype.dieState = function (dt) {
    var vacuum = this.movieclip.children[0];
    vacuum.visible = false;
};

Player.prototype.updateWeapon = function () {
    if (this.currentWeapon.life === 0) {
        var weaponConfig = this.weapons[this.currentWeapon.id];
        if (weaponConfig.particlesOffset) {
            this.discardWeaponCb(this.currentWeapon.id, this.body.position[0] + (weaponConfig.particlesOffset.x * this.lookDir), this.body.position[1] + (weaponConfig.particlesOffset.y), this.view.parent, -90, 15);
        }
        this.setWeapon("hand");
    }
};

Player.prototype.setWeapon = function (type, playIdle, unbreakable) {
    switch (type) {
        case WONBATS.ItemAxe:
            this.currentWeapon.id = "axe";
            
            break;
        case WONBATS.ItemMace:
            this.currentWeapon.id = "mace";
            
            break;
        case WONBATS.ItemBat:
            this.currentWeapon.id = "bat";
            
            this.movieclip.gotoAndStop("bat");
            break;
        case WONBATS.ItemHammer:
            this.currentWeapon.id = "hammer";
            
            break;
        case WONBATS.ItemSaw:
            this.currentWeapon.id = "saw";
            
            break;
        case "hand":
            this.currentWeapon.id = "hand";
            break;
    }
    this.currentWeapon.life = unbreakable ? -1 : WONBATS.clone(this.weapons[this.currentWeapon.id].life);
    this.currentWeapon.attackRange = WONBATS.clone(this.weapons[this.currentWeapon.id].attackRange);
    this.attackRange = WONBATS.clone(this.currentWeapon.attackRange);
    this.timeCounter = 0;
    this.attacked = false;
    this.damaged = false;
    this.body.velocity[0] = 0;
    this.fsm.clear();
    this.fsm.pushState(this.idleState.bind(this));
    if (playIdle) {
        this.movieclip.gotoAndStop("idle_" + this.getWeaponType());
    }
};

Player.prototype.setClothes = function (id) {
    this.clothes = id;
    this.movieclip.gotoAndStop("idle_" + this.clothes);
};

Player.prototype.dropClothes = function () {
    this.discardWeaponCb(this.clothes, this.body.position[0], this.body.position[1], this.view.parent, -90, 15);
    this.clothes = null;
};

Player.prototype.dispose = function () {
    this.input = null;
    this.canAttackCb = null;
    this.attackLandedCb = null;
    this.discardWeaponCb = null;
    this.throwCb = null;
    this.vacuumExplosionCb = null;
    this.attackRange = WONBATS.splice(this.attackRange, 0, this.attackRange.length);
    this.attackRange = null;
    this.missDelay = null;
    this.missVelocity = null;
    this.attackVelocity = null;
    this.attackSlideVelocity = null; //100;
    this.attackDelay = null;
    this.attacked = null;
    this.attackLandDistance = null;
    this.attackHitstunDelay = null; //0.2;
    this.attackFreezeFrame = null;
    this.attackLabels = WONBATS.splice(this.attackLabels, 0, this.attackLabels.length);
    this.throwDelay = 0.2;
    this.lastAttackAnim = null;
    this.damaged = null;
    this.weapons = null;
    this.currentWeapon = null;
    this.width = null;
    this.height = null;
    this.mcIndex = null;
    WONBATS.Character.prototype.dispose.call(this);
};

WONBATS.Player = Player;
