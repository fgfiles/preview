function Starchy() {
    this.movieclipPackage = starchy;
    this.movieclipClass = "starchy";
    Player.call(this);
};

Starchy.prototype = Object.create(Player.prototype);
Starchy.prototype.constructor = Starchy;
