function Bearbot1Part1(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Bearbot1Part1.prototype = Object.create(WONBATS.WreckPart.prototype);
Bearbot1Part1.prototype.constructor = Bearbot1Part1;

WONBATS.Bearbot1Part1 = Bearbot1Part1;
