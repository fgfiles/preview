function Kill(config) {
    Entity.call(this);
    this.body = physics.create(physics.BOX, {
        width: 10,
        height: 10,
        x: -1500,
        y: -1500,
        mass: 0,
        material: "kill",
        collisionGroup: "kill",
        collisionMask: ["player"],
        sensor: true

    });
};

Kill.prototype = Object.create(Entity.prototype);
Kill.prototype.constructor = Kill;

Kill.prototype.reset = function (x, y, width, height) {
    Entity.prototype.reset.call(this, x, y);
    this.width = width;
    this.height = height;
    this.body.removeShape(this.body.shapes[0]);
    var shape = new p2.Box({
        width: width,
        height: height,
        material: physics.getMaterial("kill"),
        collisionGroup: physics.getCollisionGroup("kill"),
        collisionMask: physics.getCollisionMask(["player", "bodypart", "bullet"]),
        sensor: true
    });
    this.body.addShape(shape);
    this.body.updateMassProperties();
};

Kill.prototype.onCollide = function (other) {};
