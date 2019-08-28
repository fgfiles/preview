function PhysicParticle(physics, namespace, className) {
    this.fsm = new WONBATS.StackFSM();
    this.dieDelay = 4;
    this.blinkStartDelay = 3;
    this.blinkDelay = 0.05;
    this.blinkSwitchCounter = 0;
    this.blinkStartCounter = 0;
    this.blink = true;
    this.namespace = namespace;
    this.className = className;
    WONBATS.Entity.call(this, physics);
};
PhysicParticle.prototype = Object.create(WONBATS.Entity.prototype);
PhysicParticle.prototype.constructor = PhysicParticle;

PhysicParticle.prototype.create = function () {
    WONBATS.Entity.prototype.create.call(this);
    this.view = new PIXI.Container();
    this.movieclip = new WONBATS.MovieClip(this.namespace, this.className);
    this.view.addChild(this.movieclip);
    var bound = this.movieclip.getChildByName("bound");
    this.width = game.config.BODYBOX_SIZE * this.scale * bound.scale.x;
    this.height = game.config.BODYBOX_SIZE * this.scale * bound.scale.y;
    this.body = this.physics.create(this.physics.BOX, {
        x: -5000,
        y: -5000,
        width: this.width,
        height: this.height,
        mass: 1,
        material: "physics_particle",
        collisionGroup: "physics_particle",
        collisionMask: ["ground_particles"]
    });
    this.movieclip.rotation = bound.rotation;
};
PhysicParticle.prototype.update = function (dt) {
    WONBATS.Entity.prototype.update.call(this, dt);
    this.fsm.update(dt);
};

PhysicParticle.prototype.reset = function (x, y, lookDir) {
    WONBATS.Entity.prototype.reset.call(this, x, y, lookDir);
    this.blink = true;
    this.fsm.clear();
    this.timeCounter = this.dieDelay;
    this.blinkSwitchCounter = this.blinkDelay;
    this.blinkStartCounter = this.blinkStartDelay;
    this.fsm.pushState(this.dieState.bind(this));
};

PhysicParticle.prototype.dieState = function (dt) {
    this.timeCounter -= dt;
    if (this.blink) {
        this.blinkStartCounter -= dt;
        if (this.blinkStartCounter <= 0 && this.blinkSwitchCounter > 0) {
            this.blinkSwitchCounter -= dt;
            if (this.blinkSwitchCounter <= 0) {
                this.blinkSwitchCounter = this.blinkDelay;
                this.view.visible = !this.view.visible;
            }
        }
    }

    if (this.timeCounter <= 0) {
        this.kill = true;
    }
};

PhysicParticle.prototype.outOfScreen = function () {
    this.view.visible = false;
    this.blink = false;
    this.body.sleep();
};

PhysicParticle.prototype.forceRecycle = function () {
    this.kill = true;
    this.outOfScreen();
};

PhysicParticle.prototype.dispose = function () {
    this.dieDelay = null;
    this.blinkStartDelay = null;
    this.blinkDelay = null;
    this.blinkSwitchCounter = null;
    this.blinkStartCounter = null;
    this.namespace = null;
    this.className = null;
    WONBATS.Entity.prototype.dispose.call(this);
};

WONBATS.PhysicParticle = PhysicParticle;
