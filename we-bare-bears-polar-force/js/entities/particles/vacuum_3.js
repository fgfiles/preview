function Vacuum3(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Vacuum3.prototype = Object.create(WONBATS.WreckPart.prototype);
Vacuum3.prototype.constructor = Vacuum3;

WONBATS.Vacuum3 = Vacuum3;
