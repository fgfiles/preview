function Drone1Part2(physics, namespace, className) {
    WONBATS.WreckPart.call(this, physics, namespace, className);
};
Drone1Part2.prototype = Object.create(WONBATS.WreckPart.prototype);
Drone1Part2.prototype.constructor = Drone1Part2;

WONBATS.Drone1Part2 = Drone1Part2;
