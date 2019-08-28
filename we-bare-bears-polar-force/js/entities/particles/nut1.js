function Nut1(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Nut1.prototype = Object.create(WONBATS.WreckHardware.prototype);
Nut1.prototype.constructor = Nut1;

WONBATS.Nut1 = Nut1;
