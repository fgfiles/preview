function WeaponStick1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponStick1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponStick1.prototype.constructor = WeaponStick1;

WONBATS.WeaponStick1 = WeaponStick1;
