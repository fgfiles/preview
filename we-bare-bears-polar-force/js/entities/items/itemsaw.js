function ItemSaw(physics) {
    this.weapon = "saw";
    WONBATS.Item.call(this, physics);
};
ItemSaw.prototype = Object.create(WONBATS.Item.prototype);
ItemSaw.prototype.constructor = ItemSaw;

WONBATS.ItemSaw = ItemSaw;
