import Actor from '../actor.js';

export default class Bubble extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Bubble";
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        this.setInterval(() => {
            this.sprite.currentAnimation.setFrame(1);
            this.sprite.currentAnimation.state = 1;
        }, 3000);
    }
}