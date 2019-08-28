function EmitterManager(container, isFire, hasMist) {
    this.container = container;
    this.isFire = isFire;
    this.hasMist = hasMist;
    this.emitters = {};

    globalsignal.add(this.onGlobalSignal.bind(this));
}

EmitterManager.prototype.onGlobalSignal = function (e, data) {
    switch (e) {
        case ge.VOLCANO:
            this.emit(ge.VOLCANO, [PIXI.Texture.fromFrame("fire_1"), PIXI.Texture.fromFrame("fire_2")], game.config.particles.volcano, data.x, data.y);
            break;
        case ge.MIST:
            this.emit(ge.MIST, [PIXI.Texture.fromFrame("mist")], game.config.particles.mist, data.x, data.y, data.dt);
            break;
        case ge.SPECTRAL_FIRE:
            var toGlobalPos = data.mc.toGlobal(new PIXI.Point());
            var toContainerPos = this.container.toLocal(toGlobalPos);
            this.emit(ge.SPECTRAL_FIRE, [PIXI.Texture.fromFrame("eyefire_1_x"), PIXI.Texture.fromFrame("eyefire_2_x"), PIXI.Texture.fromFrame("eyefire_3_x")], game.config.particles.spectralfire, toContainerPos.x, toContainerPos.y)
            break;

        case ge.SNOT_LAUNCH:
            var toGlobalPos = data.mc.toGlobal(new PIXI.Point());
            var toContainerPos = this.container.toLocal(toGlobalPos);
            this.emit(ge.SPECTRAL_FIRE, [PIXI.Texture.fromFrame("snot_1"), PIXI.Texture.fromFrame("snot_2"), PIXI.Texture.fromFrame("snot_3")], game.config.particles.snot_launch, toContainerPos.x, toContainerPos.y)
            break;

        case ge.SPECTRAL_BUBBLES:
            var megaParent = data.mc.parent.parent.parent.parent.parent;
            if (!megaParent.visible) {
                return;
            }
            var toGlobalPos = data.mc.toGlobal(new PIXI.Point());
            var toContainerPos = this.container.toLocal(toGlobalPos);
            this.emit(ge.SPECTRAL_BUBBLES, [PIXI.Texture.fromFrame("soul_1_x"), PIXI.Texture.fromFrame("soul_2_x")], game.config.particles.spectralbubble, toContainerPos.x, toContainerPos.y)
            break;
        case ge.STEP:
            var toGlobalPos = data.mc.toGlobal(new PIXI.Point());
            var toContainerPos = this.container.toLocal(toGlobalPos);
            if (this.isFire) {
                this.emit(ge.LANDING_DUST, [PIXI.Texture.fromFrame("floordust_1_x"), PIXI.Texture.fromFrame("floordust_2_x"), PIXI.Texture.fromFrame("floordust_3_x")], game.config.particles.dust_nigthosphere, toContainerPos.x, toContainerPos.y)
            } else {
                this.emit(ge.LANDING_DUST, [PIXI.Texture.fromFrame("floordust_1_x"), PIXI.Texture.fromFrame("floordust_2_x"), PIXI.Texture.fromFrame("floordust_3_x")], game.config.particles.dust, toContainerPos.x, toContainerPos.y)
            }
            break;
        case ge.LANDING_DUST:
            if (this.isFire) {
                this.emit(ge.LANDING_DUST, [PIXI.Texture.fromFrame("floordust_1_x"), PIXI.Texture.fromFrame("floordust_2_x"), PIXI.Texture.fromFrame("floordust_3_x")], game.config.particles.dust_nigthosphere, data.x, data.y)
            } else {
                this.emit(ge.LANDING_DUST, [PIXI.Texture.fromFrame("floordust_1_x"), PIXI.Texture.fromFrame("floordust_2_x"), PIXI.Texture.fromFrame("floordust_3_x")], game.config.particles.dust, data.x, data.y)
            }
            break;
        case ge.SPLASH:
            if (!this.isFire && !this.hasMist) {
                this.emit(ge.SPLASH, [PIXI.Texture.fromFrame("drop_2"), PIXI.Texture.fromFrame("drop_1")], game.config.particles.splash, data.x, data.y);
            }
            break;
        case ge.LASER_HIT:
            this.emit(ge.LASER_HIT, [PIXI.Texture.fromFrame("sparkparticle"), PIXI.Texture.fromFrame("rainparticle")], game.config.particles.laser_hit, data.x, data.y);
            break;
        case ge.WARP_OUT:
            this.emit(ge.WARP_OUT, [PIXI.Texture.fromFrame("hardrain_x"), PIXI.Texture.fromFrame("sparks_x")], game.config.particles.warpout, data.x, data.y);
            break;
        case ge.FALLING_ROCKS:
            this.emit(ge.FALLING_ROCKS, [PIXI.Texture.fromFrame("dust_1_x"), PIXI.Texture.fromFrame("dust_2_x")], game.config.particles.rocks, data.x, data.y);
            break;
        case ge.SKELETON_HIT:
            
            this.emit(ge.SKELETON_HIT, [PIXI.Texture.fromFrame("sparkparticle"), PIXI.Texture.fromFrame("rainparticle")], game.config.particles.sparks, data.x, data.y);
            break;
        case ge.SNOT_HIT:
            
            this.emit(ge.SNOT_HIT, [PIXI.Texture.fromFrame("snot_1"), PIXI.Texture.fromFrame("snot_2"), PIXI.Texture.fromFrame("snot_3")], game.config.particles.snot, data.x, data.y);
            break;
        case ge.PLAYER_HIT:
            
            this.emit(ge.PLAYER_HIT, [PIXI.Texture.fromFrame("soul_1_x"), PIXI.Texture.fromFrame("soul_2_x")], game.config.particles.soulhitspark, data.x, data.y);
            break;
        default:
            break;
    };
};

EmitterManager.prototype.stopEmitters = function (type) {
    if (!this.emitters[type]) {
        return;
    }

    for (var i = 0; i < this.emitters[type].length; i++) {
        this.emitters[type][i].emit = false;
    }
}

EmitterManager.prototype.emit = function (type, textures, config, x, y, dt) {
    if (!this.emitters[type]) {
        this.emitters[type] = [];
    }

    var emitter;

    for (var i = 0; i < this.emitters[type].length; i++) {
        if (this.emitters[type][i].emit === false) {
            emitter = this.emitters[type][i];
            break;
        }
    }

    if (!emitter) {
        emitter = new PIXI.particles.Emitter(this.container, textures, config);
        this.emitters[type].push(emitter);
    }

    emitter.updateSpawnPos(x, y);
    emitter.resetPositionTracking();
    emitter.emit = true;

    emitter.update(dt || 0)
}

EmitterManager.prototype.update = function (dt) {
    for (var key in this.emitters) {
        for (var i = 0; i < this.emitters[key].length; i++) {
            this.emitters[key][i].update(dt);
        }
    }
};

EmitterManager.prototype.dispose = function () {
    globalsignal.remove(this.onGlobalSignal.bind(this));
};
