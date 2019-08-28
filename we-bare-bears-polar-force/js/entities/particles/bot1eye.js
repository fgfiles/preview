function Bot1Eye(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Bot1Eye.prototype = Object.create(WONBATS.WreckPart.prototype);
Bot1Eye.prototype.constructor = Bot1Eye;

WONBATS.Bot1Eye = Bot1Eye;
