function WeaponHammer1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WeaponHammer1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponHammer1.prototype.constructor = WeaponHammer1;

WONBATS.WeaponHammer1 = WeaponHammer1;
