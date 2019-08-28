function WeaponBat2(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponBat2.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponBat2.prototype.constructor = WeaponBat2;

WONBATS.WeaponBat2 = WeaponBat2;
