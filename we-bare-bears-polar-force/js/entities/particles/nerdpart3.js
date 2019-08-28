function NerdPart3(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdPart3.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdPart3.prototype.constructor = NerdPart3;

WONBATS.NerdPart3 = NerdPart3;
