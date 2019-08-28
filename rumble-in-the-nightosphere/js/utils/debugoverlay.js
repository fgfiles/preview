function DebugOverlay() {
    PIXI.Container.call(this);

    this.background = new PIXI.Graphics();
    this.background.beginFill(0x000000, 0.5);
    this.background.drawRect(0, 0, 800, 600);
    this.background.endFill();

    this.addChild(this.background);

    var style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: 0xffff00,
        wordWrap: true,
        wordWrapWidth: 440
    });
    this.efText1 = new PIXI.Text("", style);
    this.efText1.text = "Peppermint Butler";
    this.efText1.anchor.set(0.5, 0.5);
    this.efText1.x = 200;
    this.efText1.y = 200;
    this.addChild(this.efText1);
};
DebugOverlay.prototype = Object.create(PIXI.Container.prototype);
DebugOverlay.prototype.constructor = DebugOverlay;

DebugOverlay.prototype.update = function (dt) {
    this.parent.setChildIndex(this, this.parent.children.length - 1);

    var text = "Entities in pool: " + EntityFactory.pool.length;
    text += "\nEntities in update: " + EntityFactory.updatable.length;
    text += "\nTotal entities: " + (EntityFactory.pool.length + EntityFactory.updatable.length);

    for (var i = 0; i < EntityFactory.entityTypes.length; i++) {
        var type = EntityFactory.entityTypes[i],
            inPool = 0,
            inUpdatable = 0;
        for (var j = 0; j < EntityFactory.pool.length; j++) {
            if (EntityFactory.pool[j].id === EntityFactory[type]) {
                inPool++;
            }
        }
        for (var k = 0; k < EntityFactory.updatable.length; k++) {
            if (EntityFactory.updatable[k].id === EntityFactory[type]) {
                inUpdatable++;
            }
        }
        text += "\n" + type + ": (" + inPool + " / " + inUpdatable + ") = " + (inPool + inUpdatable);
    }
    this.efText1.text = text;
};
