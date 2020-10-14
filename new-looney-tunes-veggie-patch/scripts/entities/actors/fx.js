import Actor from '../actor.js';

export default class FX extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "FX";
    }

    onReady(){
        if(!super.onReady(...arguments) === false) return;

        if(this.sprite && !this.sprite.currentAnimation.callback){
            this.sprite.currentAnimation.callback = () => {
                this.parentScene.removeActor(this, true);
            }
        }

        if(this.body) this.body.limitedToWorld = false;
        this.sortableY = false;
        this.isDraggable = false;
    }

    save(){
        return null;
    }
}