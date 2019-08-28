function ItemHammer(physics) {
    this.weapon = "hammer";
    WONBATS.Item.call(this, physics);
};
ItemHammer.prototype = Object.create(WONBATS.Item.prototype);
ItemHammer.prototype.constructor = ItemHammer;

WONBATS.ItemHammer = ItemHammer;
