var WONBATS = WONBATS || {};

function Drone1(physics) {
    WONBATS.Enemy.call(this, physics);
};
Drone1.prototype = Object.create(WONBATS.Enemy.prototype);
Drone1.prototype.constructor = Drone1;

Drone1.prototype.create = function () {
    this.width = 125;
    this.heigth = 50;
    this.body = this.physics.create(this.physics.BOX, {
        x: -5000,
        y: -5000,
        width: this.width,
        height: this.heigth,
        mass: 1,
        material: "enemy",
        collisionGroup: "enemy",
        collisionMask: ["ground"]
    });
    this.movieclip = new WONBATS.MovieClip(drone, "drone");
    this.view.addChild(this.movieclip);
    WONBATS.Enemy.prototype.create.call(this);
};

Drone1.prototype.reset = function (x, y, lookDir) {
    this.life = [WONBATS.Entity.SIDE_CHANGE, WONBATS.Entity.NOTHING];
    WONBATS.Enemy.prototype.reset.call(this, x, y, lookDir);
    this.body.angle = Math.toRadians(0);
    this.body.fixedRotation = true;
    this.body.updateMassProperties();
    this.body.position[1] = 450;
    this.movieclip.y = 100;
    this.attackDelay = 0.3;
    this.moveSpeed = 300;
};

Drone1.prototype.update = function (dt) {
    WONBATS.Enemy.prototype.update.call(this, dt);
    if (this.life.length > 0) {
        this.body.velocity[1] = 0;
        this.body.position[1] = 450;
    }
};

Drone1.prototype.pushBack = function (next) {
    WONBATS.Enemy.prototype.pushBack.call(this, next);
    
};

WONBATS.Drone1 = Drone1;
