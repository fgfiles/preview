var WONBATS = WONBATS || {};

function Physics(gravityX, gravityY, container) {
    
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
    this.maxSubsteps = 0;
    this.BOX = 0;
    this.CIRCLE = 1;
    this.CAPSULE = 2;
}

Physics.prototype.create = function (type, config) {
    switch (type) {
        case this.BOX:
            var shape = new p2.Box({
                width: config.width,
                height: config.height,
                material: this.getMaterial(config.material),
                collisionGroup: this.getCollisionGroup(config.collisionGroup),
                collisionMask: this.getCollisionMask(config.collisionMask)
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
                view.beginFill(0x551A8B, 0.3);
                view.lineStyle(1, 0x551A88, 0.5);
                view.drawRect(-config.width / 2, -config.height / 2, config.width, config.height);
                view.moveTo(0, 0);
                view.lineTo(config.width / 2, config.height / 2);
                view.endFill();
            }
            return this.setBody(body, shape, view);
            break;

        case this.CIRCLE:
            var shape = new p2.Circle({
                radius: config.radius,
                material: this.getMaterial(config.material),
                collisionGroup: this.getCollisionGroup(config.collisionGroup),
                collisionMask: this.getCollisionMask(config.collisionMask)
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
                view.beginFill(0x551A8B, 0.3);
                view.lineStyle(1, 0x551A88, 0.5);
                view.drawCircle(0, 0, config.radius);
                view.moveTo(0, 0);
                view.lineTo(config.radius, 0);
                view.endFill();
            }

            return this.setBody(body, shape, view);
            break;

        case this.CAPSULE:
            var shape = new p2.Capsule({
                radius: config.radius,
                length: config.length,
                material: this.getMaterial(config.material),
                collisionGroup: this.getCollisionGroup(config.collisionGroup),
                collisionMask: this.getCollisionMask(config.collisionMask)
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
                view.beginFill(0x551A8B, 0.3);
                view.lineStyle(1, 0x551A88, 0.5);
                view.drawRect(-config.length / 2, -config.radius, config.length, config.radius * 2);
                view.moveTo(0, 0);
                view.lineTo(config.length / 2, config.radius);
                view.drawCircle(config.length / 2, 0, config.radius);
                view.drawCircle(-config.length / 2, 0, config.radius);
                view.endFill();
            }

            return this.setBody(body, shape, view);
            break;
    }
};

Physics.prototype.setBody = function (body, shape, view) {
    body.addShape(shape);

    this.bodies.push({
        body: body,
        view: view
    });
    this.world.addBody(body);
    if (view) {
        view.cacheAsBitmap = true;
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

Physics.prototype.update = function (dt) {
    this.world.step(dt, 0, this.maxSubsteps);
    for (var i = 0; i < this.bodies.length; i++) {
        if (this.bodies[i].view) {
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

Physics.prototype.dispose = function () {
    this.world.clear();
    this.world = null;
    this.container = null;
    WONBATS.splice(this.bodies, 0, this.bodies.length);
    this.bodies = null;
    this.materials = null;
    this.contactMaterials = null;
    this.categoryBits = null;
};
WONBATS.Physics = Physics;
