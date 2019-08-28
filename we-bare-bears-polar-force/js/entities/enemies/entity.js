var WONBATS = WONBATS || {};

function BaseBot(physics) {
    WONBATS.Enemy.call(this, physics);
};
BaseBot.prototype = Object.create(WONBATS.Enemy.prototype);
BaseBot.prototype.constructor = BaseBot;

BaseBot.prototype.create = function () {
    this.body = this.physics.create(this.physics.CAPSULE, {
        x: -5000,
        y: -5000,
        radius: this.width / 2,
        length: this.height,
        mass: 1,
        material: "enemy",
        collisionGroup: "enemy",
        collisionMask: ["ground"],
        fixedRotation: true,
        angle: Math.toRadians(90)
    });
    this.movieclip = new WONBATS.MovieClip(arturito, "arturito");
    this.movieclip.rotation = Math.toRadians(-90);
    this.movieclip.x = 130;
    this.view.addChild(this.movieclip);

    WONBATS.Enemy.prototype.create.call(this);
};

BaseBot.prototype.reset = function (x, y, lookDir) {
    WONBATS.Enemy.prototype.reset.call(this, x, y, lookDir);
    this.currentWeapon = WONBATS.getRandomFromArray(["axe", "mace", "hammer"]);
};

BaseBot.prototype.update = function (dt) {
    WONBATS.Enemy.prototype.update.call(this, dt);
    var weaponChild = this.movieclip.getChildAt(0).getChildByName("weapon");
    if (weaponChild) {
        this.movieclip.update(0);
        weaponChild.gotoAndStop(this.currentWeapon);
        weaponChild.update(0);
    }
};

BaseBot.prototype.setItem = function (config) {
    WONBATS.Enemy.prototype.setItem.call(this, config);
    if (config.length === 0) {
        switch (this.currentWeapon) {
            case "axe":
                this.item = WONBATS.EntityFactory.ITEM_AXE;
                break;
            case "mace":
                this.item = WONBATS.EntityFactory.ITEM_MACE;
                break;
            case "hammer":
                this.item = WONBATS.EntityFactory.ITEM_HAMMER;
                break;
        }
    }
};

WONBATS.BaseBot = BaseBot;
