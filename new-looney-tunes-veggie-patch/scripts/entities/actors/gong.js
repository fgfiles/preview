import Actor from '../actor.js';

export default class Gong extends Actor {
    constructor(){
        super(...arguments);
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;
        
        this.smoke = this.parentScene.addActor({
            cls: "FX-GongSmoke",
            position: [15, -10, 0],
            scale: [0.6, 0.6, 1]
        }, false);

        this.addComponent(this.smoke);
    }
    
    onUpdate(){
        if(this.smoke){
            this.smoke.visible = (this.heldItems.length > 0);
        }
    }
}