function WeaponSaw2(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponSaw2.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponSaw2.prototype.constructor = WeaponSaw2;

WeaponSaw2.prototype.create = function () {
    WONBATS.PhysicParticle.prototype.create.call(this);
    this.movieclip.x = this.movieclip.width / 4;
    this.movieclip.y = this.movieclip.height / 4;
};

WONBATS.WeaponSaw2 = WeaponSaw2;
