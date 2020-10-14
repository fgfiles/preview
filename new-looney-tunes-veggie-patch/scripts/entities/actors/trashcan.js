import Actor from '../actor.js';

export default class TrashCan extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "TrashCan";
    }

    // onMouseUp(){
    //     super.onMouseUp(...arguments);
    //     console.log(1);
    // }

    onDroppedItem(evt, item){
        if(item.constructorName === "Character") return;

        if(item.clean) item.clean();
        
        this.parentScene.removeActor(item);
        game.playSFX("SO-Trash");

        if(item.heldItems[0]){
            item.heldItems[0].state = "idle";
            item.removeItem();
        }

        this.state = "toss";
        this.sprite.currentAnimation.callback = () => {
            this.state = "idle";
        }
    }
}