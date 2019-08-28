function Physics(gravityX, gravityY, container) {
    
    WONBATS.addEnum(this, ["BOX", "CIRCLE", "CAPSULE", "COMPOUND"]);
    gravityY = gravityY || 10;
    this.world = new p2.World({
        gravity: [gravityX, gravityY]
    });
    this.world.defaultContactMaterial.friction = 0.3;
    this.world.setGlobalStiffness(1e5);
    this.container = container;
    this.bodies = [];
    this.materials = {};
    this.contactMaterials = {};
    this.categoryBits = {};
    this.maxSubsteps = 10;
    this.graphics = new PIXI.Graphics();
}

Physics.prototype.onBeginContact = function (e) {
    if (e.bodyA.emitterType) {
        globalsignal.emit(e.bodyA.emitterType, {
            x: e.bodyA.position[0] + e.contactEquations[0].contactPointB[0],
            y: e.bodyA.position[1] + e.contactEquations[0].contactPointB[1]
        });
    } else if (e.bodyB.emitterType) {
        globalsignal.emit(e.bodyB.emitterType, {
            x: e.bodyB.position[0] + e.contactEquations[0].contactPointA[0],
            y: e.bodyB.position[1] + e.contactEquations[0].contactPointA[1]
        });
    }
};

Physics.prototype.create = function (type, config) {
    switch (type) {
        case this.BOX:
            var shape = new p2.Box({
                width: config.width,
                height: config.height,
                material: this.getMaterial(config.material),
                collisionGroup: this.getCollisionGroup(config.collisionGroup),
                collisionMask: this.getCollisionMask(config.collisionMask),
                sensor: (config.sensor === undefined) ? false : config.sensor
            });
            var body = new p2.Body({
                mass: config.mass,
                position: [config.x, config.y],
                fixedRotation: config.fixedRotation,
                angle: config.angle
            });
            var view;
            if (game.config.DEBUG) {
                view = new PIXI.Graphics();
                view.bodyType = type;
            }
            body.addShape(shape);
            return this.setBody(body, view);
            break;

        case this.CIRCLE:
            var shape = new p2.Circle({
                radius: config.radius,
                material: this.getMaterial(config.material),
                collisionGroup: this.getCollisionGroup(config.collisionGroup),
                collisionMask: this.getCollisionMask(config.collisionMask),
                sensor: (config.sensor === undefined) ? false : config.sensor
            });
            var body = new p2.Body({
                mass: config.mass,
                position: [config.x, config.y],
                fixedRotation: config.fixedRotation,
                angle: config.angle
            });
            var view;
            if (game.config.DEBUG) {
                view = new PIXI.Graphics();
                view.bodyType = type;
            }
            body.addShape(shape);
            return this.setBody(body, view);
            break;

        case this.CAPSULE:
            var shape = new p2.Capsule({
                radius: config.radius,
                length: config.length,
                material: this.getMaterial(config.material),
                collisionGroup: this.getCollisionGroup(config.collisionGroup),
                collisionMask: this.getCollisionMask(config.collisionMask),
                sensor: (config.sensor === undefined) ? false : config.sensor
            });
            var body = new p2.Body({
                mass: config.mass,
                position: [config.x, config.y],
                fixedRotation: config.fixedRotation,
                angle: config.angle
            });
            var view;
            if (game.config.DEBUG) {
                view = new PIXI.Graphics();
                view.type = type;
            }
            body.addShape(shape);
            return this.setBody(body, view);
            break;

        case this.COMPOUND:
            var view;
            if (game.config.DEBUG) {
                view = new PIXI.Graphics();
                view.beginFill(0x551A8B, 0.3);
                view.lineStyle(1, 0x551A88, 0.5);
            }

            var body = new p2.Body({
                mass: config.mass,
                position: [config.x, config.y],
                fixedRotation: config.fixedRotation,
                angle: config.angle
            });
            var shape;
            for (var i = 0; i < config.compound.length; i++) {
                var compoundShape = config.compound[i];
                if (compoundShape.radius) {
                    
                    shape = new p2.Circle({
                        radius: compoundShape.radius,
                        material: this.getMaterial(config.material),
                        collisionGroup: this.getCollisionGroup(config.collisionGroup),
                        collisionMask: this.getCollisionMask(config.collisionMask),
                        sensor: (config.sensor === undefined) ? false : config.sensor
                    });
                    if (view) {
                        view.drawCircle(compoundShape.x, compoundShape.y, compoundShape.radius);
                        view.moveTo(compoundShape.x, compoundShape.y);
                        view.lineTo(compoundShape.radius / 2, compoundShape.radius / 2);
                    }
                } else {
                    
                    shape = new p2.Box({
                        width: compoundShape.width,
                        height: compoundShape.height,
                        material: this.getMaterial(config.material),
                        collisionGroup: this.getCollisionGroup(config.collisionGroup),
                        collisionMask: this.getCollisionMask(config.collisionMask),
                        sensor: (config.sensor === undefined) ? false : config.sensor
                    });
                    if (view) {
                        view.drawRect(compoundShape.x - (compoundShape.width / 2), compoundShape.y - (compoundShape.height / 2), compoundShape.width, compoundShape.height);
                        view.moveTo(compoundShape.x, compoundShape.y);
                        view.lineTo(compoundShape.width / 2, compoundShape.height / 2);
                    }
                }
                body.addShape(shape, [compoundShape.x, compoundShape.y]);
            }
            if (view) {
                view.endFill();
            }
            return this.setBody(body, view);
            break;

    }
};

Physics.prototype.setBody = function (body, view) {

    this.bodies.push({
        body: body,
        view: view
    });
    this.world.addBody(body);
    if (view) {
        this.container.addChild(view);
    }
    return this.bodies[this.bodies.length - 1].body;
};

Physics.prototype.setMaterials = function (materials, contactMaterials) {
    this.materials = WONBATS.clone(materials);
    this.contactMaterials = WONBATS.clone(contactMaterials);
    for (var material in this.materials) {
        this.materials[material] = new p2.Material();
    }

    for (var contactMaterial in this.contactMaterials) {
        var contactMaterialConfig = WONBATS.clone(this.contactMaterials[contactMaterial]);
        this.contactMaterials[contactMaterial] = new p2.ContactMaterial(this.getMaterial(contactMaterialConfig.materials[0]), this.getMaterial(contactMaterialConfig.materials[1]), contactMaterialConfig.config);
        this.world.addContactMaterial(this.contactMaterials[contactMaterial]);
    }
    
    
};

Physics.prototype.getMaterial = function (type) {
    if (!this.materials[type]) {
        alert("material doesn't exist: " + type);
    }
    return this.materials[type];
};

Physics.prototype.setCategoryBits = function (categoryBits) {
    this.categoryBits = WONBATS.clone(categoryBits);
};

Physics.prototype.getCollisionGroup = function (group) {
    return this.categoryBits[group];
};

Physics.prototype.getCollisionMask = function (mask) {
    var collisionMask = 0;
    for (var index in mask) {
        var categoryBit = this.categoryBits[mask[index]];
        collisionMask = collisionMask ^ categoryBit;
    }
    return collisionMask;
};

Physics.prototype.drawLine = function (from, to) {
    if (this.graphics.parent !== this.container) {
        this.container.addChild(this.graphics);
    }
    this.graphics.lineStyle(1, 0xff0000);
    this.graphics.moveTo(from[0], from[1]);
    this.graphics.lineTo(to[0], to[1]);
    this.graphics.endFill();
};

Physics.prototype.update = function (dt) {
    if (this.graphics) {
        this.graphics.clear();
    }
    this.world.step(dt); //, 0, this.maxSubsteps);

    for (var i = 0; i < this.bodies.length; i++) {
        if (this.bodies[i].view) {
            if (this.container !== this.bodies[i].view.parent) {
                this.container.addChild(this.bodies[i].view);
            }
            if (this.bodies[i].view.bodyType === this.BOX) {
                this.bodies[i].view.clear();
                var width = this.bodies[i].body.shapes[0].width,
                    height = this.bodies[i].body.shapes[0].height;
                this.bodies[i].view.beginFill(0x551A8B, 0.3);
                this.bodies[i].view.lineStyle(1, 0x551A88, 1);
                this.bodies[i].view.drawRect(-width / 2, -height / 2, width, height);
                this.bodies[i].view.moveTo(0, 0);
                this.bodies[i].view.lineTo(width / 2, height / 2);
                this.bodies[i].view.endFill();
            } else if (this.bodies[i].view.bodyType === this.CIRCLE) {
                this.bodies[i].view.clear();
                var radius = this.bodies[i].body.shapes[0].radius;
                this.bodies[i].view.beginFill(0x551A8B, 0.3);
                this.bodies[i].view.lineStyle(1, 0x551A88, 1);
                this.bodies[i].view.drawCircle(0, 0, radius);
                this.bodies[i].view.moveTo(0, 0);
                this.bodies[i].view.lineTo(radius / 2, radius / 2);
                this.bodies[i].view.endFill();
            }
            this.bodies[i].view.x = this.bodies[i].body.position[0];
            this.bodies[i].view.y = this.bodies[i].body.position[1];
            this.bodies[i].view.rotation = this.bodies[i].body.angle;
            var index = this.container.getChildIndex(this.bodies[i].view);
            if (index > this.bodies.length - 1) {
                this.container.setChildIndex(this.bodies[i].view, this.container.children.length - 1);
            }
        }
    }
};
