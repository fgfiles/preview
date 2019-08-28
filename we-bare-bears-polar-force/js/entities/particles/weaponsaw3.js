function WeaponSaw3(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponSaw3.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponSaw3.prototype.constructor = WeaponSaw3;

WeaponSaw3.prototype.create = function () {
    WONBATS.PhysicParticle.prototype.create.call(this);
    this.movieclip.x = this.movieclip.width / 2;
};

WONBATS.WeaponSaw3 = WeaponSaw3;
