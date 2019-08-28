function Nut2(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Nut2.prototype = Object.create(WONBATS.WreckHardware.prototype);
Nut2.prototype.constructor = Nut2;

WONBATS.Nut2 = Nut2;
