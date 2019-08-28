var WONBATS = WONBATS || {};

function Bot3(physics) {
    WONBATS.BaseBot.call(this, physics);
};
Bot3.prototype = Object.create(WONBATS.BaseBot.prototype);
Bot3.prototype.constructor = Bot3;

Bot3.prototype.reset = function (x, y, lookDir) {
    this.life = [Entity.NOTHING, Entity.NOTHING, Entity.NOTHING];
    WONBATS.BaseBot.prototype.reset.call(this, x, y, lookDir);
    this.attackDelay = 0.1;
    this.moveSpeed = 350;
};

WONBATS.Bot3 = Bot3;
