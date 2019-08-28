function WeaponSaw1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponSaw1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponSaw1.prototype.constructor = WeaponSaw1;

WONBATS.WeaponSaw1 = WeaponSaw1;
