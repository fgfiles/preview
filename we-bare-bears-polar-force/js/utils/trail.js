function Trail(target, container, delay, duration, config) {
    this.target = target;
    this.config = config;
    this.container = container;
    this.timeCounter = 0;
    this.delay = delay;
    this.duration = duration;
    this.render = false;
    this.trails = [];
    this.colorFilter;
};

Trail.prototype.update = function (dt) {

    if (this.render) {
        this.timeCounter -= dt;
        if (this.timeCounter <= 0) {
            this.timeCounter = this.delay;
            this.createTrail();
        }
    }
    for (var i = this.trails.length - 1; i > -1; i -= 1) {
        var trail = this.trails[i];
        trail.alpha -= (1 / this.duration) * dt;
        if (trail.alpha <= 0) {
            this.trails = WONBATS.splice(this.trails, i, 1);
            trail.destroy(true, true, true); //FIX to avoid memory leak
            trail = null;
        }
    }
};

Trail.prototype.start = function () {
    this.render = true;
    this.timeCounter = this.delay;
};

Trail.prototype.stop = function () {
    this.render = false;
    this.colorFilter = null;
};

Trail.prototype.createTrail = function () {
    var labelConfig = this.config.labels[this.config.movieclip.getCurrentLabel()];
    if (!labelConfig) {
        return;
    }
    var texture = game.renderer.generateTexture(this.target);
    var trail = new PIXI.Sprite(texture);
    trail.anchor.x = trail.anchor.y = 0.5;
    if (!this.colorFilter) {
        this.colorFilter = new PIXI.filters.ColorMatrixFilter();
        this.colorFilter.matrix = [
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 0.1, 0
        ];
    } else {
        this.colorFilter.matrix[8] += 0.2;
        this.colorFilter.matrix[3] -= 0.2;
    }
    trail.filters = [this.colorFilter];
    texture = game.renderer.generateTexture(trail);
    trail = new PIXI.Sprite(texture);
    trail.anchor.x = trail.anchor.y = 0.5;
    trail.rotation = this.target.rotation;
    trail.x = this.target.x + (labelConfig.x * this.config.movieclip.scale.x);
    trail.y = this.target.y + labelConfig.y;
    this.container.addChild(trail);
    this.container.swapChildren(trail, this.target);
    this.trails.push(trail);
};

Trail.prototype.dispose = function () {
    for (var i = this.trails.length - 1; i > -1; i -= 1) {
        var trail = this.trails[i];
        this.trails = WONBATS.splice(this.trails, i, 1);
        trail.destroy(true, true, true); //FIX to avoid memory leak
        trail = null;
    }
    this.trails = null;
    this.config = null;
    this.container = null;
    this.colorFilter = null;
};

WONBATS.Trail = Trail;
