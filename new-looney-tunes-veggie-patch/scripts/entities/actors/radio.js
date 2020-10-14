import Actor from '../actor.js';

export default class Radio extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Radio";
    }

    onMouseDown(){
        super.onMouseDown(...arguments);

        game.playSFX("SO-RadioScratch");

        this.setTimeout(game.toggleMute, 1000);
    }
}