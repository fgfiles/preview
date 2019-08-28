function BulletTime() {
    this.time = 1;
    this.config = [
        1, //initial time delay to be set
        0, //initial time value
        true, //initial time set?
        1, //final time wait to be set
        1, //final time value
        0, //final time tween duration
        true //final time set?
    ];
};

BulletTime.prototype.reset = function (initialDelay, initialTime, finalDelay, finalTime, initialToFinalTweenDuration) {
    this.config[0] = initialDelay;
    this.config[1] = initialTime;

    this.config[2] = false;

    this.config[3] = finalDelay;
    this.config[4] = finalTime;

    this.config[5] = initialToFinalTweenDuration;

    this.config[6] = false;
};

BulletTime.prototype.update = function (dt) {

    if (!this.config[6]) {
        this.config[0] -= dt;
        if (!this.config[2] && this.config[0] <= 0) {
            this.time = this.config[1];
            this.config[2] = true;
        } else if (this.config[2]) {
            this.config[3] -= dt;
            if (this.config[3] <= 0) {
                var diff = this.config[4] - this.time;
                this.time += diff * this.config[5];
                if (Math.abs(diff) < 0.01) {
                    this.bulletTime = this.config[4];
                    this.config[6] = true;
                }
            }
        }
    }

    dt *= this.time;
    return dt;
};

BulletTime.prototype.dispose = function () {
    this.config = WONBATS.splice(this.config, 0, this.config.length);
    this.config = null;
};
WONBATS.BulletTime = BulletTime;
