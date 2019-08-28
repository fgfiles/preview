function Screw1(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Screw1.prototype = Object.create(WONBATS.WreckHardware.prototype);
Screw1.prototype.constructor = Screw1;

WONBATS.Screw1 = Screw1;
