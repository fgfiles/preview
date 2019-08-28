function Plate2(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Plate2.prototype = Object.create(WONBATS.WreckHardware.prototype);
Plate2.prototype.constructor = Plate2;

WONBATS.Plate2 = Plate2;
