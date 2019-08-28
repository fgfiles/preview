function WeaponAxe1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponAxe1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponAxe1.prototype.constructor = WeaponAxe1;

WONBATS.WeaponAxe1 = WeaponAxe1;
