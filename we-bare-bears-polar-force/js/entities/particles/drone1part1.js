function Drone1Part1(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Drone1Part1.prototype = Object.create(WONBATS.WreckPart.prototype);
Drone1Part1.prototype.constructor = Drone1Part1;

WONBATS.Drone1Part1 = Drone1Part1;
