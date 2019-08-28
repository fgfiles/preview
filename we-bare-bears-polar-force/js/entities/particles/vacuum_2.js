function Vacuum2(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Vacuum2.prototype = Object.create(WONBATS.WreckPart.prototype);
Vacuum2.prototype.constructor = Vacuum2;

WONBATS.Vacuum2 = Vacuum2;
