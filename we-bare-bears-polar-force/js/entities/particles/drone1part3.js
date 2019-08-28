function Drone1Part3(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Drone1Part3.prototype = Object.create(WONBATS.WreckPart.prototype);
Drone1Part3.prototype.constructor = Drone1Part3;

WONBATS.Drone1Part3 = Drone1Part3;
