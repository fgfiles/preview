var WONBATS = WONBATS || {};

function Bot2(physics) {
    WONBATS.BaseBot.call(this, physics);
};
Bot2.prototype = Object.create(WONBATS.BaseBot.prototype);
Bot2.prototype.constructor = Bot2;

Bot2.prototype.reset = function (x, y, lookDir) {
    this.life = [Entity.NOTHING, Entity.NOTHING];
    WONBATS.BaseBot.prototype.reset.call(this, x, y, lookDir);
    this.attackDelay = 0.15;
    this.moveSpeed = 350;
};

WONBATS.Bot2 = Bot2;
