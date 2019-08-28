function WeaponNut1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponNut1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponNut1.prototype.constructor = WeaponNut1;

WONBATS.WeaponNut1 = WeaponNut1;
