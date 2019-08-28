function BulletRocket(physics) {
    WONBATS.Bullet.call(this, physics);
};
BulletRocket.prototype = Object.create(WONBATS.Bullet.prototype);
BulletRocket.prototype.constructor = BulletRocket;

BulletRocket.prototype.create = function () {
    this.movieclip = new WONBATS.MovieClip(polar, "saw");
    WONBATS.Bullet.prototype.create.call(this);
    this.movieclip.gotoAndStop("static");
};

BulletRocket.prototype.reset = function (x, y, lookDir) {
    WONBATS.Bullet.prototype.reset.call(this, x, y, lookDir);
    this.id = "saw";
    this.speed = 1000;
    this.damage = 1;
    this.lifeDelay = 3;
    this.movieclip.x = 5 * this.lookDir;
    this.movieclip.y = 12;
    this.body.angularVelocity = 15 * this.lookDir;
    this.body.position[1] = 400;
};

BulletRocket.prototype.hit = function (damage, hitstunDelay) {
    WONBATS.Bullet.prototype.hit.call(this, damage, hitstunDelay);
    globalsignal.emit(ge.SHAKE, {
        intensity: 5,
        duration: 0.2
    });
    if (this.life <= 0) {
        globalsignal.emit(ge.ENEMY_DIE);
    }
};

WONBATS.BulletRocket = BulletRocket;
