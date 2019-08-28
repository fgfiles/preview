function Floor() {
    Entity.call(this);
    this.body = physics.create(physics.BOX, {
        width: 10,
        height: 10,
        x: -1500,
        y: -1500,
        mass: 0,
        material: "floor",
        collisionGroup: "floor",
        collisionMask: ["player"]

    });
};

Floor.prototype = Object.create(Entity.prototype);
Floor.prototype.constructor = Floor;

Floor.prototype.reset = function (x, y, width, height) {
    Entity.prototype.reset.call(this, x, y);
    this.width = width;
    this.height = height;
    this.body.removeShape(this.body.shapes[0]);
    var shape = new p2.Box({
        width: width,
        height: height,
        material: physics.getMaterial("floor"),
        collisionGroup: physics.getCollisionGroup("floor"),
        collisionMask: physics.getCollisionMask(["player", "bodypart", "bullet"])
    });
    this.body.addShape(shape);
    this.body.updateMassProperties();
};

Floor.prototype.onCollide = function (other) {};
