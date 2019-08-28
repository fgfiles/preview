function Bearbot1Part2(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Bearbot1Part2.prototype = Object.create(WONBATS.WreckPart.prototype);
Bearbot1Part2.prototype.constructor = Bearbot1Part2;

WONBATS.Bearbot1Part2 = Bearbot1Part2;
