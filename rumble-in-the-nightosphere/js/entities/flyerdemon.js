function FlyerDemon() {
    this.movieclipPackage = devil_wings;
    this.movieclipClass = "devilwings";
    Flyer.call(this);
};

FlyerDemon.prototype = Object.create(Flyer.prototype);
FlyerDemon.prototype.constructor = FlyerDemon;
