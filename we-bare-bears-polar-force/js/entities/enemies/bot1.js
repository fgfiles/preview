var WONBATS = WONBATS || {};

function Bot1(physics) {
    WONBATS.BaseBot.call(this, physics);
};
Bot1.prototype = Object.create(WONBATS.BaseBot.prototype);
Bot1.prototype.constructor = Bot1;

Bot1.prototype.reset = function (x, y, lookDir) {
    this.life = [Entity.NOTHING];
    WONBATS.BaseBot.prototype.reset.call(this, x, y, lookDir);
    this.attackDelay = 0.3;
    this.moveSpeed = 300;
};

WONBATS.Bot1 = Bot1;
