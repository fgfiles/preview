/**
 * Created by jonathan.kernick on 24/04/2017.
 */
Game.LoadScreen = function(){
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xEF168E;
    //console.log("load screen built");
    this.graphic = new PIXI.Graphics();
    this.addChild(this.graphic);
    this.addChild(CC.Utility.pixiAtlasSprite("logo_preloader.png"));

    Game.introFinished = true;

    this.animTimer = 0;
    this.update = function(delta){
        this.animTimer += delta;
        var value = this.animTimer*5;
        this.graphic.clear();
        this.graphic.beginFill(0xE5E5E5);
        this.graphic.drawRect(-80,-80,160,160);
        this.graphic.beginFill(0x56BCED);
        this.graphic.moveTo(-80,Math.cos(value+1)*10);
        this.graphic.bezierCurveTo(
            -20,Math.cos(value+2)*10,
            20,Math.cos(value+3)*10,
            80,Math.cos(value+4)*10);
        this.graphic.lineTo(80,80);
        this.graphic.lineTo(-80,80);

    }

};
Game.LoadScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.LoadScreen.prototype.constructor = Game.LoadScreen;
