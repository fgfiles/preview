var WONBATS = WONBATS || {};

function BearBot2(physics) {
    WONBATS.Enemy.call(this, physics);
};
BearBot2.prototype = Object.create(WONBATS.Enemy.prototype);
BearBot2.prototype.constructor = BearBot2;

BearBot2.prototype.create = function () {
    this.width = 100;
    this.height = 130;
    this.body = this.physics.create(this.physics.CAPSULE, {
        x: -5000,
        y: -5000,
        radius: this.width / 2,
        length: this.height,
        mass: 1,
        material: "enemy",
        collisionGroup: "enemy",
        collisionMask: ["ground"],
        fixedRotation: true,
        angle: Math.toRadians(90)
    });
    this.movieclip = new WONBATS.MovieClip(bearbot, "bearbot");
    this.movieclip.rotation = Math.toRadians(-90);
    this.movieclip.x = 110;
    this.view.addChild(this.movieclip);
    WONBATS.Enemy.prototype.create.call(this);
};

BearBot2.prototype.reset = function (x, y, lookDir) {
    this.life = this.getRandomLife(14);
    this.life.unshift(Entity.NOTHING);
    WONBATS.Enemy.prototype.reset.call(this, x, y, lookDir);
    this.attackDelay = 0.1;
    this.moveSpeed = 400;
    this.attackDistance = 140;
    this.attackReach = 150;
};

BearBot2.prototype.hit = function (damage, hitstunDelay, bullet) {
    if (!bullet || !WONBATS.isType(bullet, WONBATS.BulletSaw)) {
        damage = 1;
    }
    WONBATS.Enemy.prototype.hit.call(this, damage, hitstunDelay);
};

WONBATS.BearBot2 = BearBot2;
