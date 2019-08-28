function NerdVacuum4(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
NerdVacuum4.prototype = Object.create(WONBATS.WreckPart.prototype);
NerdVacuum4.prototype.constructor = NerdVacuum4;

WONBATS.NerdVacuum4 = NerdVacuum4;
