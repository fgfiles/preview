function Vacuum1(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Vacuum1.prototype = Object.create(WONBATS.WreckPart.prototype);
Vacuum1.prototype.constructor = Vacuum1;

WONBATS.Vacuum1 = Vacuum1;
