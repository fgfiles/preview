var WONBATS = WONBATS || {};

function BearBot3(physics) {
    WONBATS.Enemy.call(this, physics);
};
BearBot3.prototype = Object.create(WONBATS.Enemy.prototype);
BearBot3.prototype.constructor = BearBot3;

BearBot3.prototype.create = function () {
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
    this.movieclip = new WONBATS.MovieClip(nerd, "nerd");
    this.movieclip.rotation = Math.toRadians(-90);
    this.movieclip.x = 110;
    this.view.addChild(this.movieclip);
    WONBATS.Enemy.prototype.create.call(this);
};

BearBot3.prototype.reset = function (x, y, lookDir) {
    this.life = this.getRandomLife(35);
    this.life.unshift(Entity.NOTHING);
    WONBATS.Enemy.prototype.reset.call(this, x, y, lookDir);
    this.attackDelay = 0.3;
    this.moveSpeed = 200;
    this.attackDistance = 160;
    this.attackReach = 160;
};

BearBot3.prototype.hit = function (damage, hitstunDelay, bullet) {
    if (!bullet || !WONBATS.isType(bullet, WONBATS.BulletSaw)) {
        damage = 1;
    }
    WONBATS.Enemy.prototype.hit.call(this, damage, hitstunDelay);

    if (this.life <= 0) {
        this.dieVelocityX = 150;
        this.dieVelocityY = -100;
        this.dieVelocityYOffset = 0;
        this.body.velocity[0] = this.dieVelocityX * this.lookDir * -1;
        this.body.velocity[1] = this.dieVelocityY + (this.dieVelocityYOffset * Math.random());
        this.body.angularVelocity = 0;
        this.body.fixedRotation = true;
        this.body.updateMassProperties();
        this.dieDelay = 1;
        this.timeCounter = this.dieDelay;
        this.dieTintDelay = this.timeCounter * 0.8;
        this.dieTintDuration = this.timeCounter * 0.2;
    }
};

WONBATS.BearBot3 = BearBot3;
