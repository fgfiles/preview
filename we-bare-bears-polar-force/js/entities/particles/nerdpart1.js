function NerdPart1(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdPart1.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdPart1.prototype.constructor = NerdPart1;

WONBATS.NerdPart1 = NerdPart1;
