function WreckHardware(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WreckHardware.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WreckHardware.prototype.constructor = WreckHardware;

WreckHardware.prototype.create = function () {
    var scaleMin = 0.3;
    var scaleMax = 1;
    this.scale = scaleMin + ((scaleMax - scaleMin) * Math.random());
    WONBATS.PhysicParticle.prototype.create.call(this);
};

WONBATS.WreckHardware = WreckHardware;
