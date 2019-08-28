function Water(config) {
    Entity.call(this);
    this.body = physics.create(physics.BOX, {
        width: 10,
        height: 10,
        x: -1500,
        y: -1500,
        mass: 0,
        material: "water",
        collisionGroup: "water",
        collisionMask: ["player"],
        sensor: true

    });
};

Water.prototype = Object.create(Entity.prototype);
Water.prototype.constructor = Water;

Water.prototype.reset = function (x, y, width, height) {
    Entity.prototype.reset.call(this, x, y);
    this.width = width;
    this.height = height;
    this.body.removeShape(this.body.shapes[0]);
    var shape = new p2.Box({
        width: width,
        height: height,
        material: physics.getMaterial("water"),
        collisionGroup: physics.getCollisionGroup("water"),
        collisionMask: physics.getCollisionMask(["player", "bodypart", "bullet"]),
        sensor: true
    });
    this.body.addShape(shape);
    this.body.updateMassProperties();
};

Water.prototype.onCollide = function (other) {

};
