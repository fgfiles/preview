function WeaponShop2(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
    this.dieDelay = 1.5;
    this.blinkStartDelay = 1;
};
WeaponShop2.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WeaponShop2.prototype.constructor = WeaponShop2;

WONBATS.WeaponShop2 = WeaponShop2;
