function WeaponBat1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponBat1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponBat1.prototype.constructor = WeaponBat1;

WONBATS.WeaponBat1 = WeaponBat1;
