/**
 * Created by jonathan.kernick on 24/04/2017.
 */
Game.BaseScreen = function(){
    PIXI.Container.call(this);
    this.backgroundColor = 0xDDDDDD;
};

Game.BaseScreen.prototype = Object.create(PIXI.Container.prototype);
Game.BaseScreen.prototype.constructor = Game.BaseScreen;
