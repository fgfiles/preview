function Plate1(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Plate1.prototype = Object.create(WONBATS.WreckHardware.prototype);
Plate1.prototype.constructor = Plate1;

WONBATS.Plate1 = Plate1;
