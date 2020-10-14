import Actor from '../actor.js';

export default class Geiser extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Geiser";
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        // this.setInterval(() => this.burst(), 10000);
    }

    burst(){
        if(this.state !== "idle" || (this.parentScene.actors["FX-Rain"] && this.parentScene.actors["FX-Rain"][0])) return;

        this.state = "water";

        this.sprite.currentAnimation.callback = () => {
            this.state = "idle";

            this.rain = this.parentScene.addActor({
                cls: "FX-Rain",
                position: [this.transform.x, this.transform.y, 95],
                isPersistent: false
            }, true);
        };

        game.playSFX("SO-WaterExplosion");
    }
}