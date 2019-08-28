function NerdPart5(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdPart5.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdPart5.prototype.constructor = NerdPart5;

WONBATS.NerdPart5 = NerdPart5;
