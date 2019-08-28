function WreckPart(physics, namespace, className) {
    WONBATS.PhysicParticle.call(this, physics, namespace, className);
};
WreckPart.prototype = Object.create(WONBATS.PhysicParticle.prototype);
WreckPart.prototype.constructor = WreckPart;

WreckPart.prototype.reset = function (x, y, lookDir) {
    WONBATS.PhysicParticle.prototype.reset.call(this, x, y, lookDir);
    if (this.smokeEmitter) {
        this.smokeEmitter.emit = true;
        this.smokeEmitter.updateSpawnPos(this.view.x, this.view.y);
        this.smokeEmitter.addAtBack = true;
        this.smokeEmitter.resetPositionTracking();
    }
};

WreckPart.prototype.dieState = function (dt) {
    WONBATS.PhysicParticle.prototype.dieState.call(this, dt);
    if (!this.smokeEmitter) {
        this.smokeEmitter = new PIXI.particles.Emitter(this.view.parent, [PIXI.Texture.fromFrame("smokeparticle_x")], game.config.particles.smoke);
        this.smokeEmitter.addAtBack = true;
    }
    this.smokeEmitter.updateSpawnPos(this.view.x, this.view.y);
    this.smokeEmitter.update(dt);
    if (this.timeCounter <= 0) {
        this.smokeEmitter.emit = false;
    }
};

WreckPart.prototype.outOfScreen = function () {
    WONBATS.PhysicParticle.prototype.outOfScreen.call(this);
    this.smokeEmitter.emit = false;
};

WreckPart.prototype.forceRecycle = function () {
    this.smokeEmitter.emit = false;
    this.smokeEmitter.cleanup();
    WONBATS.PhysicParticle.prototype.forceRecycle.call(this);
};

WreckPart.prototype.dispose = function () {
    if (this.smokeEmitter) {
        this.smokeEmitter.cleanup();
        this.smokeEmitter.destroy();
    }
    this.smokeEmitter = null;
    WONBATS.PhysicParticle.prototype.dispose.call(this);
};

WONBATS.WreckPart = WreckPart;
