function ItemBat(physics) {
    this.weapon = "bat";
    WONBATS.Item.call(this, physics);
};
ItemBat.prototype = Object.create(WONBATS.Item.prototype);
ItemBat.prototype.constructor = ItemBat;

WONBATS.ItemBat = ItemBat;
