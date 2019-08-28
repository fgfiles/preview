function BumperRect() {
    Entity.call(this);
    this.body = physics.create(physics.BOX, {
        width: 10,
        height: 10,
        x: -1500,
        y: -1500,
        mass: 0,
        material: "bumper",
        collisionGroup: "bumper",
        collisionMask: ["player"]

    });
};

BumperRect.prototype = Object.create(Entity.prototype);
BumperRect.prototype.constructor = BumperRect;

BumperRect.prototype.reset = function (x, y, width, height) {
    Entity.prototype.reset.call(this, x, y);
    this.width = width;
    this.height = height;
    this.body.removeShape(this.body.shapes[0]);
    var shape = new p2.Box({
        width: width,
        height: height,
        material: physics.getMaterial("bumper"),
        collisionGroup: physics.getCollisionGroup("bumper"),
        collisionMask: physics.getCollisionMask(["player", "bodypart"])
    });
    this.body.addShape(shape);
    this.body.updateMassProperties();
};

BumperRect.prototype.onCollide = function (other) {};
