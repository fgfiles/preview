function NerdVacuum1(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdVacuum1.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdVacuum1.prototype.constructor = NerdVacuum1;

WONBATS.NerdVacuum1 = NerdVacuum1;
