function BulletSaw(physics) {
    WONBATS.Bullet.call(this, physics);
};
BulletSaw.prototype = Object.create(WONBATS.Bullet.prototype);
BulletSaw.prototype.constructor = BulletSaw;

BulletSaw.prototype.create = function () {
    this.movieclip = new WONBATS.MovieClip(polar, "saw");
    WONBATS.Bullet.prototype.create.call(this);
    this.movieclip.gotoAndStop("static");
};

BulletSaw.prototype.reset = function (x, y, lookDir) {
    WONBATS.Bullet.prototype.reset.call(this, x, y, lookDir);
    this.id = "saw";
    this.speed = 1500;
    this.damage = 999;
    this.movieclip.x = 5 * this.lookDir;
    this.movieclip.y = 12;
    this.body.angularVelocity = 15 * this.lookDir;
    this.lifeDelay = 0.4;
};

WONBATS.BulletSaw = BulletSaw;
