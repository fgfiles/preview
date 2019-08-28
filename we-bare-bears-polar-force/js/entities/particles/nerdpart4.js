function NerdPart4(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdPart4.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdPart4.prototype.constructor = NerdPart4;

WONBATS.NerdPart4 = NerdPart4;
