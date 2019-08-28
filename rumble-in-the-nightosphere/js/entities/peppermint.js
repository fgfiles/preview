function Peppermint() {
    this.movieclipPackage = peppermint;
    this.movieclipClass = "peppermint";
    Player.call(this);
};

Peppermint.prototype = Object.create(Player.prototype);
Peppermint.prototype.constructor = Peppermint;
