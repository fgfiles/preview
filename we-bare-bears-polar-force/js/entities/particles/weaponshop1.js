function WeaponShop1(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
    this.dieDelay = 1.5;
    this.blinkStartDelay = 1;
};
WeaponShop1.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponShop1.prototype.constructor = WeaponShop1;

WONBATS.WeaponShop1 = WeaponShop1;
