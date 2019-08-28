function Bot1Body1(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Bot1Body1.prototype = Object.create(WONBATS.WreckPart.prototype);
Bot1Body1.prototype.constructor = Bot1Body1;

WONBATS.Bot1Body1 = Bot1Body1;
