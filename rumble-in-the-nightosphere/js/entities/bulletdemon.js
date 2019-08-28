function BulletDemon(json, classname) {
    Bullet.call(this, json, classname);
};

BulletDemon.prototype = Object.create(Bullet.prototype);
BulletDemon.prototype.constructor = BulletDemon;

BulletDemon.prototype.applyPush = function (other) {

};

BulletDemon.prototype.onPhysicsCollide = function (other) {
    Bullet.prototype.onPhysicsCollide.call(this, other);
    soundManager.play("hitSpit", true);
};
