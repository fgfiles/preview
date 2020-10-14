import Actor from '../actor.js';
import * as Onyx from '../../../lib/onyx/scripts/main.js';


export default class TweetyBird extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "TweetyBird";
    }

    onReady(){
        super.onReady();
        
        this.body.gravityScale = 0;
        this.body.limitedToWorld = false;
        this.sortableY = false;

        this.transform.z = 3;

        this.flying = false;
        this.birdbath = false;
        this.item = null;

        this.itemQueue = [];

        this.transform.x = -300;
        this.flyingY = this.transform.y;

        // Wait 5 seconds
        this.setTimeout(() => {
            this.carryNext();
            
            this.flying = true;
        }, 5000);
    }
    
    onUpdate(){

        if(this.flying){
            this.body.velocity[0] = 5;
        }else{
            this.body.velocity[0] = 0;
        }

        if(this.birdbath){
            this.body.gravityScale = 1;
            this.body.bounds.bottom = 0;
        }else{
            this.body.gravityScale = 0;

            // Fly to where Tweety started
            if(this.transform.y < this.flyingY){
                this.body.velocity[1] = 10;
            }else if(this.transform.y > this.flyingY && Math.abs(this.transform.y - this.flyingY) > 10){
                this.body.velocity[1] = -10;
            }else{
                this.body.velocity[1] = 0;
            }
        }

        if(this.transform.x > this.parentScene.width + 200){
            this.transform.x = -200;

            this.carryNext();

            // Wait 2 seconds
            this.flying = false;
            this.pauseTimer = this.setTimeout(() => {
                this.flying = true;
                this.pauseTimer = null;
            }, 2000);
        }

        if(this.parentScene.hoverItem === this && (this.state === "idle" || this.state === "hover")){
            if(this.state !== "hover") this.state = "hover";
            this.body.velocity[0] = 0;
        }else if(this.state === "hover"){
            this.state = "idle";
        }

        // Check if bird bath is below
        if(!this.birdbath){
            let birdbath = this.getNearestItem(10000, { whitelistClasses: ["BirdBath"] });

            if(birdbath && birdbath.isReady && birdbath.water.state === "full" && birdbath.transform.y < this.transform.y && Math.abs(birdbath.transform.x - this.transform.x) < 10){
                this.flying = false;
                this.birdbath = birdbath;
    
                this.body.velocity[1] = 20;
            }
        }else{
            // Verify it's still under Tweety
            if(Math.abs(this.birdbath.transform.x - this.transform.x) > 10){
                this.birdbath = null;
                this.flying = true;
            }
        }

        if(this.item){
            this.item.transform.xyz = [this.transform.x + this.itemOffset.x, this.transform.y + this.itemOffset.y, this.transform.z]
            // this.item.transform.roll = this.item.roll;
        }

        this.specialObjectActions();
    }

    onMouseDown(){
        super.onMouseDown(...arguments);

        this.dropItem();
    }

    onMouseOver(){
        // this.parentScene.hoverItem = this;
    }

    updateQueue(){
        let playlist = [
            // Pot Orange  (Default Item, Appears if there are fewer than 10)
            { item: "OB-Pot-Orange", required: 10, flipX: false, scale: 1, angle: -45, offset: { x: 34, y: -86 } },

            // Watering  Can (Default Item, Appears if trashed)
            { item: "WaterCan", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: -10, y: -50 } },
            
            // Seeds: Strawberry  (if none are present)
            { item: "OB-Seeds-ST", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 20, y: -68 } },

            // Jackhammer  (if none are present) (-34 Degrees)
            { item: "OB-Jackhammer", required: 1, flipX: false, scale: 1, angle: 34, offset: { x: -45, y: -92 } },

            // Gong  (if none are present)
            { item: "Gong", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: -56, y: -190 } },

            // Hose (if none are present) (45 Degrees)
            { item: "OB-Hose", required: 1, flipX: false, scale: 1, angle: 45, offset: { x: -53, y: -96 } },

            // Paint Bucket (if none are present) (45 Degrees)
            { item: "OB-PaintBucket", required: 1, flipX: false, scale: 1, angle: 45, offset: { x: -33, y: -81 } },

            // AirHorn (if none are present) (45 Degrees) 
            { item: "OB-AirHorn", required: 1, flipX: false, scale: 1.25, angle: 45, offset: { x: -10, y: -100 } },

            // Spray  (Default Item, Appears if trashed)
            { item: "OB-Spray", required: 1, flipX: false, scale: 1.20, angle: -45, offset: { x: -20, y: -100 } },

            // Mask  (if none are present)
            { item: "OB-Mask", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: -11, y: -101 } },

            // Seeds: Misc  (if none are present)
            { item: "OB-Seeds-Misc", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 20, y: -68 } },
            
            // Seed Bag: Bush  (if none are present)
            { item: "OB-Seeds-BU", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 20, y: -68 } },

            // Chainsaw  (if none are present) (Flipped Horiz, -45 Degrees) 
            { item: "OB-Chainsaw", required: 1, flipX: true, scale: 1, angle: 45, offset: { x: -11, y: -95 } },

            // Lounge Chair  (if none are present)  (28 Degrees)
            { item: "LoungeChair", required: 1, flipX: false, scale: 1, angle: -28, offset: { x: 38, y: -11 } },
            
            // Broom   (Default Item, Appears if trashed)
            { item: "OB-Broom", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: -25, y: -60 } },

            // Fruit Hat (if none are present)
            { item: "OB-FruitHat", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: -47, y: -100 } },

            // Bird Bath  (if none are present) (45 Degrees) 
            { item: "OB-BirdBath", required: 1, flipX: false, scale: 1, angle: 45, offset: { x: -62, y: -267 } },

            // TrashCan (if none are present) (45 Degrees) 
            { item: "OB-TrashCan", required: 2, flipX: false, scale: 1, angle: 45, offset: { x: -62, y: -100 } },

            // Gold Pot  (if none are present)
            { item: "OB-Pot-Gold", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 23, y: -78 } },

            // Seeds: Watermelon  (if none are present)
            { item: "OB-Seeds-WA", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 20, y: -68 } },

            // Seeds: Beet  (if none are present)
            { item: "OB-Seeds-BE", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 20, y: -68 } },

            // Seeds: Carrot  (Default Item, Appears if trashed)
            { item: "OB-Seeds-CA", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 20, y: -68 } },

            // Green can  (if none are present)
            { item: "OB-Pot-Green", required: 1, flipX: false, scale: 1, angle: -45, offset: { x: 26, y: -77 } },

            // Sunglasses (if none are present) (-15 Degrees)
            { item: "OB-Sunglasses", required: 1, flipX: false, scale: 1, angle: 15, offset: { x: -50, y: -73 } },
        ];

        for(let q of playlist){
            if(this.itemQueue[0] && this.itemQueue[0].item === q.item) continue;

            // Get count already in queue
            let count = 0;
            for(let r of this.itemQueue){
                if(r.item === q.item) count++;
            }

            if(((this.parentScene.actors[q.item])?this.parentScene.actors[q.item].length:0) + count < q.required){
                this.itemQueue.push(q);
            }
        }
    }

    carryNext(){
        let currentQueued = this.itemQueue[0];
        this.deleteItem();

        this.updateQueue();
        
        // Carry latest in queue
        if(this.itemQueue[0]){
            this.carryItem(this.itemQueue[0]);
            this.itemQueue.splice(0, 1);

            // Add old to end of queue
            // if(currentQueued) this.itemQueue.push(currentQueued);
        }
    }

    carryItem(queue){

        this.item = this.parentScene.addActor({
            cls: queue.item,
            position: [this.transform.x + queue.offset.x, this.transform.y + queue.offset.y, this.transform.z],
            roll: queue.angle * (Math.PI/180),
            scale: [queue.scale, queue.scale, 1],
            flipX: queue.flipX,
            isPersistent: false,
            data: this.data,
            isDraggable: false,
            isClickable: false
        }, true);
        this.item.sortableY = true;
        this.item.enabled = false;
        this.itemOffset = queue.offset;

        this.item.parentItems.push(this);

        // this.components.push(this.item);
        // this.components.splice(this.components.indexOf(this.sprite), 0, this.item);
        // this.components.unshift(this.item);

        // So that the item renders behind tweety
        // this.components.reverse();
    }

    dropItem(){
        if(this.item){
            game.playSFX("TB-DropItem");

            // this.removeItem(this.item);
            if(this.item.body){
                this.item.body.velocity[0] = (Math.random() > 0.5)?10:-10;
                this.item.body.velocity[1] = 20;
                this.item.transform.y -= 20;
            }
            this.item.enabled = true;
            this.item.roll = 0;
            this.item.transform.roll = 0;
            this.item.draggable = true;
            this.item.pointerEvents + true;
            this.item.flipX = false;
            this.item.parentItems.splice(this.item.parentItems.indexOf(this), 1);
            this.item = null;

            this.state = "flydrop";
            this.sprite.currentAnimation.callback = () =>{
                this.state = "idle";
            }

            this.flying = false;
            this.setTimeout(() => {
                this.flying = true;
            }, 1000);
            
            this.parentScene.addActor({ cls: "FX-TB-Drop", position: [this.transform.x, this.transform.y, 90] }, true);
        }
    }

    deleteItem(){
        if(this.item){
            this.parentScene.removeActor(this.item);

            this.removeComponent(this.item);

            this.item = null;
        }
    }

    specialObjectActions(){
        let bugs = this.parentScene.actors["BugsBunny"][0];

        // If bugs is lounging, fly faster
        if(bugs && bugs.state === "held-loungechair") {
            this.body.velocity[0] *= 1.5;

            // No pause
            if(this.pauseTimer) this.pauseTimer.currentTime = Infinity;
        }

        // If bugs is wearing a fruit hat, bring bananas
        let isInQueue = false;
        for(let q of this.itemQueue){
            if(q.item === "OB-Bananas") isInQueue = true;
        }
        if(bugs && bugs.state === "holding-ob-fruithat" && !isInQueue) this.itemQueue.splice(0, 0, { item: "OB-Bananas", flipX: false, scale: 1, angle: -45, offset: { x: -36, y: -112 } });
    }
}