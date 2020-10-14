import Actor from '../actor.js';

export default class BirdBath extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "BirdBath";
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        this.water = this.parentScene.addActor({
            cls: "FX-BirdBath-Water",
            position: [0, 206, 0.01],
            isPersistent: false,
            data: this.data
        }, false);

        // this.plant.pointerEvents = false;

        this.addComponent(this.water);

        this.waterCount = 0;
    }

    grow(source){
        // Called from the watering can
        this.fill();
    }

    waterDrop(drop){
        if(drop){
            if(drop.used) return;

            drop.used = true;
            drop.onHitFloor();
            drop.body.velocity[1] = 0;
        }

        this.waterCount++;

        if(this.waterCount > 30) this.fill();
    }

    fill(){
        this.waterCount = 0;
        if(this.water.state !== "full" && this.water.state !== "tweetybird-in" && this.water.state !== "tweetybird-idle" && this.water.state !== "tweetybird-out") this.water.state = "full";
    }

    empty(){
        if(this.water.state !== "empty") this.water.state = "empty";
        this.waterCount = 0;

        if(this.tweety){
            this.tweety.transform.x = this.transform.x + this.water.transform.x;
            this.tweety.transform.y = this.transform.y +this.water.transform.y;
            
            this.tweety.birdbath = undefined;
            this.tweety.flying = true;
            this.tweety.visible = true;
            this.tweety.enabled = true;
        }
    }

    onMouseDown(){
        super.onMouseDown(...arguments);

        if(this.water.state === "tweetybird-idle"){           
            this.water.state = "tweetybird-out";
            this.water.sprite.currentAnimation.callback = () => {
                this.empty();
            }
            game.playSFX("SO-Tap-BirdBath-1");
        }
    }

    onCollide(event, item){
        // console.log(`Collide: ${this.className}:${item.className}`);

        if(item.className === "WaterParticle"){
            this.waterDrop(item);
        }

        if(item.className === "TweetyBird" && this.water.state === "full"){
            // this.holdItem(item, true);

            this.tweety = item;

            this.tweety.dropItem();
            this.tweety.enabled = false;
            this.tweety.visible = false;

            this.water.state = "tweetybird-in";
            this.water.sprite.currentAnimation.callback = () => {
                this.water.state = "tweetybird-idle";
            }

            game.playSFX("SO-OB-BirdBath");
        }
    }
}