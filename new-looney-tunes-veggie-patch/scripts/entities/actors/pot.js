import Actor from '../actor.js';

export default class Pot extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Pot";
    }

    onReady(){
        if(super.onReady() === false) return;

        this.addPlant();
    }

    save(){
        if(!this.isPersistent) return;

        return {
            cls: this.className,
            position: [...this.transform.xyz],
            scale: [this.sprite.transform.sx / game.SPRITE_SCALE, this.sprite.transform.sy / game.SPRITE_SCALE, this.sprite.transform.sz / game.SPRITE_SCALE],
            flipX: this.flipX,
            flipY: this.flipY,
            roll: this.roll,
            state: this.state,
            data: {
                plantType: (this.plant)?this.plant.data.plantType:undefined,
                plantStep: (this.plant)?this.plant.state.split("-").pop() * 1 || 0:undefined
            }
        }
    }

    addPlant(){
        this.plant = this.parentScene.addActor({
            cls: "Plant-Pot",
            position: [0, 0, 0],
            isPersistent: false,
            data: this.data
        }, false);

        // this.plant.pointerEvents = false;

        this.plant.pot = this;

        this.addComponent(this.plant);
    }

    addBubble(type = "Sprout", { x = 30, y = 80, z = 3 } = {}){
        super.addBubble(...arguments);
    }

    grow(source){
        this.plant.grow(source);

        if(this.plant.state !== "idle"){
            this.removeBubble();
        }

        // if(this.plant.state === "watered-4"){
        //     this.removeBubble();
        //     this.addBubble("Heart", { x: 18, y: 60, z: 0 });
        // }
    }

    shatter(){
        this.break = this.parentScene.addActor({
            cls: "OB-Pot-Break",
            position: [this.transform.x, this.transform.y, this.transform.z],
            isPersistent: false,
            data: {
                removeWhenAnimComplete: true
            }
        }, true);

        this.break.sortableY = false;
        this.break.body.gravityScale = 0;

        if(this.plant) this.plant.harvest();

        this.parentScene.removeActor(this);

        game.playSFX("SO-FX-PotBreak");
    }

    onCollide(event, item){
        if(this.plant) this.plant.onCollide(event, item);
    }

    waterDrop(drop){
        if(this.plant) this.plant.waterDrop(drop);

        if(this.className === "OB-Pot-Gold" || this.className === "OB-Pot-Green"){
            game.playSFX("SO-Hit-Metal");
        }
    }

    canClip(){
        if(this.plant) return this.plant.canClip();
    }

    clip(){
        if(this.plant) return this.plant.clip();
    }

    harvest(){
        if(this.plant) return this.plant.harvest();
    }

    onDroppedItem(evt, item){
        super.onDroppedItem(evt, item);

        if(this.plant) this.plant.onDroppedItem(evt, item);
    }
}