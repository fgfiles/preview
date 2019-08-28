function NerdPart2(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdPart2.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdPart2.prototype.constructor = NerdPart2;

WONBATS.NerdPart2 = NerdPart2;
