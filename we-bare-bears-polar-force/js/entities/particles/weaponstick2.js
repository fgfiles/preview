function WeaponStick2(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponStick2.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponStick2.prototype.constructor = WeaponStick2;

WONBATS.WeaponStick2 = WeaponStick2;
