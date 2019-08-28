var WONBATS = WONBATS || {};

function Entity(physics) {
    this.physics = physics;
    this.kill = false;
    this.dead = false;
    this.view;
    this.movieclip;
    this.body;
    this.lookDir;
    this.timeCounter = 0;
    this.life = [];
    this.scale = 1;
    this.hitstunDelay = 0;
    this.hitstun = false;
    this.hitstunFrame;
    this.dieCb = function () {
        
    };
    this.create();
    this.mcIndex = 0;
};
Entity.LEFT = -1;
Entity.RIGHT = 1;
Entity.SIDE_CHANGE = 1;
Entity.NOTHING = 2;

Entity.prototype.create = function () {

};

Entity.prototype.reset = function (x, y, lookDir) {
    this.kill = false;
    this.dead = false;
    this.lookDir = lookDir | 1;
    this.hitstunDelay = 0;
    if (this.body) {
        this.body.position[0] = x;
        this.body.position[1] = y;
        this.body.wakeUp();
    }
    this.view.visible = true;
    this.view.x = 15000;
    this.view.y = 15000;
};
Entity.prototype.update = function (dt) {

    if (this.view && this.body && this.movieclip) {
        this.movieclip.update(dt);
        this.view.x = this.body.position[0];
        this.view.y = this.body.position[1];
        this.view.rotation = this.body.angle;
        this.movieclip.scale.x = this.scale * this.lookDir;
        this.movieclip.scale.y = this.scale;
    }
    if (this.hitstun) {
        this.hitstunDelay -= dt;
        if (this.hitstunDelay < 0) {
            WONBATS.applyRecursive(this.movieclip, "play");
            this.hitstun = false;
        } else {
            WONBATS.applyRecursive(this.movieclip, "stop", this.hitstunFrame);
        }
    }
};

Entity.prototype.isCurrentAnimFinished = function () {
    if (this.movieclip && (this.movieclip.children[this.mcIndex].currentFrame === this.movieclip.children[this.mcIndex].totalFrames - 1)) {
        return true;
    }
    return false;
};

Entity.prototype.getDiff = function (other) {
    return this.body.position[0] - other.body.position[0];
};

Entity.prototype.getBounds = function (other) {
    return (other.width / 2) + (this.width / 2);
};

Entity.prototype.hit = function (damage, hitstunDelay) {
    this.life -= damage;
    this.life = Math.clamp(this.life, 0, 999);
    this.startHitstun(hitstunDelay);
};

Entity.prototype.startHitstun = function (hitstunDelay, frame) {
    this.hitstunDelay = hitstunDelay;
    this.hitstun = true;
    this.hitstunFrame = frame;
};

Entity.prototype.forceAnimUpdate = function (label) {
    this.movieclip.gotoAndStop(label);
    this.movieclip.children[this.mcIndex].gotoAndPlay(0);
    this.movieclip.update(0.8);
};

Entity.prototype.dispose = function () {
    this.physics = null;
    this.kill = null;
    this.dead = null;
    this.view = null;
    this.movieclip = null;
    this.body = null;
    this.lookDir = null;
    this.timeCounter = null;
    this.life = null;
    this.scale = null;
    this.hitstunDelay = null;
    this.hitstun = null;
    this.hitstunFrame = null;
    this.dieCb = null;
    this.mcIndex = null;
    
};

WONBATS.Entity = Entity;
