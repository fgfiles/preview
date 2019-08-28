function ItemAxe(physics) {
    this.weapon = "axe";
    WONBATS.Item.call(this, physics);
};
ItemAxe.prototype = Object.create(WONBATS.Item.prototype);
ItemAxe.prototype.constructor = ItemAxe;

WONBATS.ItemAxe = ItemAxe;
