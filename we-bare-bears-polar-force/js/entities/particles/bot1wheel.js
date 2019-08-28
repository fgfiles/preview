function Bot1Wheel(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Bot1Wheel.prototype = Object.create(WONBATS.WreckPart.prototype);
Bot1Wheel.prototype.constructor = Bot1Wheel;

WONBATS.Bot1Wheel = Bot1Wheel;
