function Nut3(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Nut3.prototype = Object.create(WONBATS.WreckHardware.prototype);
Nut3.prototype.constructor = Nut3;

WONBATS.Nut3 = Nut3;
