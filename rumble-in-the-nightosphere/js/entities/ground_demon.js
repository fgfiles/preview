function GroundDemon() {
    this.movieclipPackage = ground_demon;
    this.movieclipClass = "ground_demon";
    Walker.call(this);
};

GroundDemon.prototype = Object.create(Walker.prototype);
GroundDemon.prototype.constructor = GroundDemon;

GroundDemon.prototype.getAnimDuration = function (label) {
    var animData = this.movieclipPackage["_ground_demon_ground_demon_" + label];
    var duration = animData.totalFrames / animData.fps;
    return duration;
};
