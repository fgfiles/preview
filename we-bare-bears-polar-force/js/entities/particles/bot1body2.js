function Bot1Body2(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Bot1Body2.prototype = Object.create(WONBATS.WreckPart.prototype);
Bot1Body2.prototype.constructor = Bot1Body2;

WONBATS.Bot1Body2 = Bot1Body2;
