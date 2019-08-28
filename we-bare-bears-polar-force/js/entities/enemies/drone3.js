var WONBATS = WONBATS || {};

function Drone3(physics) {
    WONBATS.Enemy.call(this, physics);
};
Drone3.prototype = Object.create(WONBATS.Enemy.prototype);
Drone3.prototype.constructor = Drone3;

Drone3.prototype.create = function () {
    this.width = 50;
    this.heigth = 50;
    this.body = this.physics.create(this.physics.CAPSULE, {
        x: -5000,
        y: -5000,
        radius: this.width / 2,
        length: this.heigth,
        mass: 1,
        material: "enemy",
        collisionGroup: "enemy",
        collisionMask: ["ground"]
    });
    this.movieclip = new WONBATS.MovieClip(drone, "drone");
    this.view.addChild(this.movieclip);
    WONBATS.Enemy.prototype.create.call(this);
};

Drone3.prototype.reset = function (x, y, lookDir) {
    this.life = this.getRandomLife(2);
    this.life.push(WONBATS.Entity.NOTHING);
    this.life.unshift(WONBATS.Entity.SIDE_CHANGE);
    WONBATS.Enemy.prototype.reset.call(this, x, y, lookDir);
    this.body.angle = Math.toRadians(0);
    this.body.fixedRotation = true;
    this.body.updateMassProperties();
    this.body.position[1] = 450;
    this.movieclip.y = 100;
    this.attackDelay = 0.1;
    this.moveSpeed = 350;
};

Drone3.prototype.update = function (dt) {
    WONBATS.Enemy.prototype.update.call(this, dt);
    if (this.life.length > 0) {
        this.body.velocity[1] = 0;
        this.body.position[1] = 450;
    }
};


WONBATS.Drone3 = Drone3;
