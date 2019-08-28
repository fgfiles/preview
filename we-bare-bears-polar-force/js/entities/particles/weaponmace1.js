function WeaponMace1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponMace1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponMace1.prototype.constructor = WeaponMace1;

WONBATS.WeaponMace1 = WeaponMace1;
