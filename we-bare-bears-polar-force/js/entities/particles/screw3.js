function Screw3(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Screw3.prototype = Object.create(WONBATS.WreckHardware.prototype);
Screw3.prototype.constructor = Screw3;

WONBATS.Screw3 = Screw3;
