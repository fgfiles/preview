function EntityFactory() {

}
EntityFactory.playerQty;
EntityFactory.pool = [];
EntityFactory.updatable = [];
EntityFactory.BODY_SIZE = 100;
EntityFactory.entityTypes = [
    "PLAYER_1", "PLAYER_2", "FLYER", "SHOOTER_DEMON", "WALKER", "WALKER_HELMET", "FLYER_DEMON", "FLOOR", "WATER", "BUMPER_RECT", "BUMPER_CIRCLE", "BODY_PART", "BULLET_DEMON", "CINNAMON_BOSS", "GROUND_DEMON", "GROUND_DEMON_HELMET", "KILL"]

WONBATS.addEnum(EntityFactory, EntityFactory.entityTypes);

EntityFactory.PLAYERS = [EntityFactory.PLAYER_1, EntityFactory.PLAYER_2];
EntityFactory.BUMPERS = [EntityFactory.BUMPER_RECT, EntityFactory.BUMPER_CIRCLE];
EntityFactory.ENEMIES = [EntityFactory.FLYER, EntityFactory.WALKER, EntityFactory.FLYER_DEMON, EntityFactory.SHOOTER_DEMON, EntityFactory.CINNAMON_BOSS, EntityFactory.GROUND_DEMON];
EntityFactory.BULLETS = [EntityFactory.BULLET_DEMON];

EntityFactory.prototype.create = function (type, config) {
    switch (type) {
        case EntityFactory.KILL:
            var e = this.getFirstDead(Kill);
            e.reset(config.x, config.y, config.width, config.height);
            if (e.debugText) {
                e.debugText.text = "KILL";
            }
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.FLOOR:
            var e = this.getFirstDead(Floor);
            e.reset(config.x, config.y, config.width, config.height);
            if (e.debugText) {
                e.debugText.text = "FLOOR";
            }
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.BUMPER_RECT:
            
            var e = this.getFirstDead(BumperRect);
            e.reset(config.x, config.y, config.width, config.height);
            if (e.debugText) {
                e.debugText.text = "BUMPER RECT";
            }
            e.body.emitterType = ge.FALLING_ROCKS;
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.BUMPER_CIRCLE:
            var e = this.getFirstDead(BumperCircle);
            e.reset(config.x, config.y, config.radius);
            if (e.debugText) {
                e.debugText.text = "BUMPER CIRCLE";
            }
            e.body.emitterType = ge.FALLING_ROCKS;
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.WATER:
            var e = this.getFirstDead(Water);
            e.reset(config.x, config.y, config.width, config.height);
            if (e.debugText) {
                e.debugText.text = "WATER";
            }
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.PLAYER_1:
        case EntityFactory.PLAYER_2:
            var e = this.relocatePlayer(type, config.x, config.y);
            break;
        case EntityFactory.FLYER:
            var e = this.getFirstDead(Flyer);
            e.reset(config.x, config.y);
            if (e.debugText) {
                e.debugText.text = "CPU FLYER";
            }

            e.floatForceX = 200;
            e.maxVelocityX = 200;
            e.maxVelocityY = -150;

            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.FLYER_DEMON:
            var e = this.getFirstDead(FlyerDemon);
            e.reset(config.x, config.y);
            if (e.debugText) {
                e.debugText.text = "CPU FLYER DEMON";
            }

            e.floatForceX = 200;
            e.maxVelocityX = 300;
            e.maxVelocityY = -200;
            e.rayCenterOffsetY = 19;

            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.SHOOTER_DEMON:
            var e = this.getFirstDead(ShooterDemon);
            e.reset(config.x, config.y);
            if (e.debugText) {
                e.debugText.text = "CPU SHOOTER DEMON";
            }

            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.WALKER:
            var e = this.getFirstDead(Walker);
            e.reset(config.x, config.y);
            if (e.debugText) {
                e.debugText.text = "CPU WALKER";
            }
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.WALKER_HELMET:
            var e = this.getFirstDead(Walker);
            e.reset(config.x, config.y, 2);
            if (e.debugText) {
                e.debugText.text = "CPU WALKER HELMET";
            }
            type = EntityFactory.WALKER;
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.GROUND_DEMON:
            var e = this.getFirstDead(GroundDemon);
            e.reset(config.x, config.y);
            if (e.debugText) {
                e.debugText.text = "CPU GROUND DEMON";
            }
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.GROUND_DEMON_HELMET:
            var e = this.getFirstDead(GroundDemon);
            e.reset(config.x, config.y, 2);
            if (e.debugText) {
                e.debugText.text = "CPU GROUND DEMON HELMET";
            }
            type = EntityFactory.GROUND_DEMON;
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.BODY_PART:
            var e = this.getFirstDead(BodyPart, config.json, config.classname);
            e.reset(config.x, config.y);
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.BULLET_DEMON:
            var e = this.getFirstDead(BulletDemon, config.json, config.classname);
            e.reset(config.x, config.y);
            if (e.debugText) {
                e.debugText.text = "BULLET_DEMON";
            }
            EntityFactory.updatable.push(e);
            break;
        case EntityFactory.CINNAMON_BOSS:
            var e = this.getFirstDead(CinnamonBoss);
            e.reset(config.x, config.y);
            if (e.debugText) {
                e.debugText.text = "CINNAMON_BOSS";
            }
            EntityFactory.updatable.push(e);
            break;

    }
    if (e) {
        e.id = type;
        if (config.container) {
            config.container.addChild(e.view);
        }
        return e;
    }
};

EntityFactory.prototype.getFirstDead = function (type, json, classname) {
    for (var i = EntityFactory.pool.length - 1; i > -1; i--) {
        var entity = EntityFactory.pool[i];
        var isType = WONBATS.isType(entity, type);
        if ((isType && !classname) || (isType && classname && classname === entity.movieclip.classname)) {
            
            WONBATS.splice(EntityFactory.pool, i, 1);
            return entity;
        }
    }
    var entity = null;
    if (json && classname) {
        entity = new type(json, classname);
    } else {
        entity = new type();
    }
    return entity;
};

EntityFactory.prototype.update = function (dt) {
    var physicsCollisionData = [],
        hitboxesCollisionData = [],
        raysCollisionData = [];
    for (var i = 0; i < EntityFactory.updatable.length; i++) {
        var entity = EntityFactory.updatable[i],
            other;
        entity.update(dt);
        var shootbox = entity.getBox ? entity.getBox("character", "shootbox") : null;
        if (shootbox) {
            entity.shoot(shootbox);
        }
        if (entity.rayHitBoxes) {
            raysCollisionData.push(entity.rayHitBoxes);
        }
        for (var j = 0; j < EntityFactory.updatable.length; j++) {
            other = EntityFactory.updatable[j];
            if ((other !== entity) && other.body.overlaps(entity.body)) {
                physicsCollisionData.push([other, entity]);
            }
            if ((other !== entity) && other.getBox && entity.getBox) {

                var hittablebox11 = entity.getBox("balloons", "hittablebox");
                var hittablebox12 = entity.getBox("character", "hittablebox");
                var attackbox1 = entity.getBox("character", "attackbox");

                var hittablebox21 = other.getBox("balloons", "hittablebox");
                var hittablebox22 = other.getBox("character", "hittablebox");
                var attackbox2 = other.getBox("character", "attackbox");

                if ((other !== entity) && (((hittablebox11 || hittablebox12) && attackbox2) || ((hittablebox21 || hittablebox22) && attackbox1))) {
                    var data = {
                        entity1: entity,
                        entity2: other,
                        hitboxes: {
                            entity1: {
                                hit1: hittablebox11,
                                hit2: hittablebox12,
                                attack1: attackbox1
                            },
                            entity2: {
                                hit1: hittablebox21,
                                hit2: hittablebox22,
                                attack1: attackbox2
                            }
                        }
                    };
                    hitboxesCollisionData.push(data);
                }
            }
        }
    }

    for (var index = 0; index < raysCollisionData.length; index++) {
        var data = raysCollisionData[index];
        for (var i = 0; i < EntityFactory.updatable.length; i++) {
            var entity = EntityFactory.updatable[i];
            if (entity.getBox && entity.onRayCollide) {
                var hittablebox1 = entity.getBox("balloons", "hittablebox");
                for (var j = 0; j < data.length; j++) {
                    if (hittablebox1) {
                        entity.onRayCollide(hittablebox1, data[j]);
                    }
                }
            }
        }
    }

    for (var index in physicsCollisionData) {
        var entity1 = physicsCollisionData[index][0],
            entity2 = physicsCollisionData[index][1];
        entity1.onPhysicsCollide(entity2);
        entity2.onPhysicsCollide(entity1);
    }
    for (var index in hitboxesCollisionData) {
        var entity1 = hitboxesCollisionData[index].entity1,
            entity2 = hitboxesCollisionData[index].entity2,
            hitboxes1 = hitboxesCollisionData[index].hitboxes,
            hitboxes2 = {
                entity1: entity2, //WONBATS.clone(hitboxesCollisionData[index].hitboxes.entity2),
                entity2: entity1 //WONBATS.clone(hitboxesCollisionData[index].hitboxes.entity1)
            };
        entity1.onHitboxCollide(entity2, hitboxes1);
        entity2.onHitboxCollide(entity1, hitboxes2);
    }

    for (var i = EntityFactory.updatable.length - 1; i > -1; i -= 1) {
        var entity = EntityFactory.updatable[i];
        if (entity.kill && !entity.dead) {
            EntityFactory.updatable = WONBATS.splice(EntityFactory.updatable, i, 1);
            EntityFactory.pool.push(entity);
            entity.onDead();
        }
    }
};

EntityFactory.prototype.forcePool = function () {
    for (var i = EntityFactory.updatable.length - 1; i > -1; i -= 1) {
        var entity = EntityFactory.updatable[i];
        entity.onForcePool();
        EntityFactory.updatable = WONBATS.splice(EntityFactory.updatable, i, 1);
        EntityFactory.pool.push(entity);
    }
};

EntityFactory.prototype.setAll = function (types, property, value) {
    for (var i = EntityFactory.updatable.length - 1; i > -1; i -= 1) {
        var entity = EntityFactory.updatable[i];
        var isType = types.indexOf(entity.id) !== -1;
        if (isType) {
            var properties = property.split(".");
            var chain = entity,
                propToMod;
            for (var j in properties) {
                if (properties.length > 1 && j < properties.length - 1) {
                    chain = chain[properties[j]];
                } else {
                    propToMod = properties[j];
                }
            }
            chain[propToMod] = value;
        }
    }
};

EntityFactory.prototype.callAll = function (types, method) {
    for (var i = EntityFactory.updatable.length - 1; i > -1; i -= 1) {
        var entity = EntityFactory.updatable[i];
        var isType = types.indexOf(entity.id) !== -1;
        if (isType) {
            entity[method]();
        }
    }
};

EntityFactory.prototype.getAll = function (types) {
    var entities = [];
    for (var i = EntityFactory.updatable.length - 1; i > -1; i -= 1) {
        var entity = EntityFactory.updatable[i];
        var isType = types.indexOf(entity.id) !== -1;
        if (isType) {
            entities.push(entity);
        }
    }
    return entities;
};

EntityFactory.prototype.clearInput = function () {
    for (var i = 0; i < EntityFactory.pool.length; i++) {
        var entity = EntityFactory.pool[i];
        if (EntityFactory.PLAYERS.indexOf(entity.id) !== -1) {
            entity.input.clearAllKeys();
        }
    }
    for (var i = 0; i < EntityFactory.updatable.length; i++) {
        var entity = EntityFactory.updatable[i];
        if (EntityFactory.PLAYERS.indexOf(entity.id) !== -1) {
            entity.input.clearAllKeys();
        }
    }

};

EntityFactory.prototype.relocatePlayer = function (type, x, y) {
    var e = null;
    if (EntityFactory.playerQty === 1 && type === EntityFactory.PLAYER_1) {
        e = this.getFirstDead(Peppermint);
        e.reset(x, y);
        e.lookAt = e.lookDir = Fighter.RIGHT;
        e.setInput({
            left: ["arrowleft", "left"],
            right: ["arrowright", "right"],
            action_autofire: ["arrowup", "up"]
        });
        if (e.debugText) {
            e.debugText.text = "P1";
        }

    } else if (EntityFactory.playerQty === 2 && type === EntityFactory.PLAYER_1) {
        e = this.getFirstDead(Starchy);
        e.reset(x, y);
        e.lookAt = e.lookDir = Fighter.RIGHT;
        e.setInput({
            left: ["a", "u+0041"],
            right: ["d", "u+0044"],
            action_autofire: ["w", "u+0057"]
        });
        if (e.debugText) {
            e.debugText.text = "P2";
        }
    } else if (EntityFactory.playerQty === 2 && type === EntityFactory.PLAYER_2) {
        e = this.getFirstDead(Peppermint);
        e.reset(x, y);
        e.lookAt = e.lookDir = Fighter.LEFT;
        e.setInput({
            left: ["arrowleft", "left"],
            right: ["arrowright", "right"],
            action_autofire: ["arrowup", "up"]
        });
        if (e.debugText) {
            e.debugText.text = "P1";
        }
    }
    EntityFactory.updatable.push(e);
    return e;
};
