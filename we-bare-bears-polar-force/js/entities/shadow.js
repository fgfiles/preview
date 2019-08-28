var WONBATS = WONBATS || {};

function Shadow() {
    this.target;
    this.kill = false;
    this.dead = false;
    this.groundY = 0;
    this.initialScale = 1;
    this.dieCb = function () {};
    WONBATS.MovieClip.call(this, shadow, "shadow");
};
Shadow.prototype = Object.create(WONBATS.MovieClip.prototype);
Shadow.prototype.constructor = Shadow;

Shadow.prototype.setTarget = function (target, initialScale, groundY, backgroundName) {
    this.target = target;
    this.initialScale = initialScale;
    this.kill = false;
    this.dead = false;
    this.groundY = groundY;
    this.gotoAndStop(backgroundName.split("background_")[1]);
    this.visible = true;
    this.x = 15000;
    this.y = 15000;
};

Shadow.prototype.update = function (dt) {
    if (this.target) {
        this.x = this.target.body.position[0];
        this.y = this.groundY;
        var distance = Math.abs(this.groundY - (this.target.body.position[1] + (this.target.height / 2)));
        distance = Math.abs(distance / 500, 0, this.initialScale);
        this.scale.x = this.scale.y = Math.clamp(this.initialScale - distance, 0.1, this.initialScale);
        this.kill = this.target.kill;
        this.visible = this.target.view.visible;
    }
    if (this.kill) {
        this.target = null;
        this.visible = false;
        this.x = 15000;
        this.y = 15000;
    }
    WONBATS.MovieClip.prototype.update.call(this, dt, true);
};

Shadow.prototype.dispose = function () {
    this.target = null;
    this.kill = null;
    this.dead = null;
    this.groundY = null;
    this.dieCb = null;
};

WONBATS.Shadow = Shadow;
