function ItemMace(physics) {
    this.weapon = "mace";
    WONBATS.Item.call(this, physics);
};
ItemMace.prototype = Object.create(WONBATS.Item.prototype);
ItemMace.prototype.constructor = ItemMace;

WONBATS.ItemMace = ItemMace;
