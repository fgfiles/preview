function NerdPart6(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdPart6.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdPart6.prototype.constructor = NerdPart6;

WONBATS.NerdPart6 = NerdPart6;
