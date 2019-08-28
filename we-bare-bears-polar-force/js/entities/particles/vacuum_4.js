function Vacuum4(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Vacuum4.prototype = Object.create(WONBATS.WreckPart.prototype);
Vacuum4.prototype.constructor = Vacuum4;

WONBATS.Vacuum4 = Vacuum4;
