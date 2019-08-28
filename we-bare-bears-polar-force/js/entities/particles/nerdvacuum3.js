function NerdVacuum3(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdVacuum3.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdVacuum3.prototype.constructor = NerdVacuum3;

WONBATS.NerdVacuum3 = NerdVacuum3;
