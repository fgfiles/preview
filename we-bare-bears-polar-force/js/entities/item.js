function Item(physics) {
    this.fsm = new WONBATS.StackFSM();
    this.weapon;
    WONBATS.Entity.call(this, physics);
};
Item.prototype = Object.create(WONBATS.Entity.prototype);
Item.prototype.constructor = Item;

Item.prototype.create = function () {
    WONBATS.Entity.prototype.create.call(this);
    this.view = new PIXI.Container();
    this.movieclip = new WONBATS.MovieClip(polar, "weaponitem");
    this.movieclip.getChildByName("weapon").gotoAndStop(this.weapon);
    this.movieclip.update(1);
    this.view.addChild(this.movieclip);
    var bound = this.movieclip.getChildByName("weapon").getChildByName("bound");
    this.width = game.config.BODYBOX_SIZE * this.scale * bound.scale.x;
    this.height = game.config.BODYBOX_SIZE * this.scale * bound.scale.y;
    this.body = this.physics.create(this.physics.BOX, {
        x: -5000,
        y: -5000,
        width: this.width,
        height: this.height,
        mass: 1,
        material: "item",
        collisionGroup: "item",
        collisionMask: ["ground"],
        fixedRotation: true
    });
    this.movieclip.rotation = bound.rotation;
};
Item.prototype.update = function (dt) {
    if (this.weapon) {
        this.movieclip.getChildByName("weapon").gotoAndStop(this.weapon);
    }
    WONBATS.Entity.prototype.update.call(this, dt);
    this.fsm.update(dt);
};

Item.prototype.reset = function (x, y, lookDir) {
    WONBATS.Entity.prototype.reset.call(this, x, y, lookDir);
    this.fsm.clear();
    this.timeCounter = 3;
};

Item.prototype.grabbed = function () {
    this.fsm.clear();
    this.kill = true;
};

Item.prototype.idleUpdate = function (dt) {
    this.timeCounter -= dt;
    if (this.timeCounter <= 0) {
        this.fsm.clear();
        this.kill = true;
    }
};

Item.prototype.bounceToPlayer = function (enemy, player) {
    var diff = player.getDiff(enemy);
    this.body.applyImpulse([diff + ((diff / 2.5) * -1), -500]);
};

Item.prototype.dipose = function () {
    this.fsm.dispose();
    this.fsm = null;
    this.weapon = null;
    WONBATS.Entity.prototype.dispose.call(this);
};

WONBATS.Item = Item;
