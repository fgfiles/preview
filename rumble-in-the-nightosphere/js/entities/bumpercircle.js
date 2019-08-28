function BumperCircle() {
    Entity.call(this);
    this.body = physics.create(physics.CIRCLE, {
        radius: 10,
        x: -1500,
        y: -1500,
        mass: 0,
        material: "bumper",
        collisionGroup: "bumper",
        collisionMask: ["player"]

    });
};

BumperCircle.prototype = Object.create(Entity.prototype);
BumperCircle.prototype.constructor = BumperCircle;

BumperCircle.prototype.reset = function (x, y, radius) {
    Entity.prototype.reset.call(this, x, y);
    this.width = radius;
    this.height = radius;
    this.body.removeShape(this.body.shapes[0]);
    var shape = new p2.Circle({
        radius: radius,
        material: physics.getMaterial("bumper"),
        collisionGroup: physics.getCollisionGroup("bumper"),
        collisionMask: physics.getCollisionMask(["player", "bodypart"])
    });
    this.body.addShape(shape);
    this.body.updateMassProperties();
};

BumperCircle.prototype.onCollide = function (other) {};
