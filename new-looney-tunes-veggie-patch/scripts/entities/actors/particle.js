import Actor from '../actor.js';

export default class Particle extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Particle";
    }

    onHitFloor(){
        if(this.bounced){
            this.done();
        }
        this.bounced = true;
        this.setGroundLevel(-50);
    }

    save(){
        return null;
    }

    done(){
        this.parentScene.remove(this);
        this.inUse = false;
        this.bounced = false;
        this.used = false;
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        this.sortableY = false;

        if(this.data.removeWhenAnimComplete){
            this.sprite.currentAnimation.callback = () => {
                this.parentScene.removeActor(this);
            }
        }
    }
}