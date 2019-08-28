function NerdVacuum2(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdVacuum2.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdVacuum2.prototype.constructor = NerdVacuum2;

WONBATS.NerdVacuum2 = NerdVacuum2;
