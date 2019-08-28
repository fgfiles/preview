function Screw2(physics, namespace, className) {
    WONBATS.WreckHardware.call(this, physics, namespace, className);
};
Screw2.prototype = Object.create(WONBATS.WreckHardware.prototype);
Screw2.prototype.constructor = Screw2;

WONBATS.Screw2 = Screw2;
