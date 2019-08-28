var WONBATS = WONBATS || {};

function Character(physics) {
    this.attackDamage = 1;
    this.fsm = new StackFSM();
    this.view = new PIXI.Container();
    WONBATS.Entity.call(this, physics);
};
Character.prototype = Object.create(WONBATS.Entity.prototype);
Character.prototype.constructor = Character;

Character.prototype.create = function () {};

Character.prototype.reset = function (x, y, lookDir) {
    WONBATS.Entity.prototype.reset.call(this, x, y, lookDir);
    this.fsm.clear();
    this.body.angle = Math.toRadians(90);
    this.body.fixedRotation = true;
    this.body.updateMassProperties();
};

Character.prototype.update = function (dt) {
    this.fsm.update(dt);
    WONBATS.Entity.prototype.update.call(this, dt);
};

Character.prototype.dispose = function () {
    this.attackDamage = null;
    this.fsm.dispose();
    this.fsm = null;
    WONBATS.Entity.prototype.dispose.call(this);
};

WONBATS.Character = Character;
