import Actor from '../actor.js';

const MISC_PLANT_TYPES = ["FL", "BO", "RS", "BU", "FN", "WF", "CS"]

let lastRandom = "";

export default class Plant extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Plant";
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        this.waterCount = 0;

        // if(!this.data.plantType) this.data.plantType = "CA";

        if(this.data.plantType){
            // Add seed
            this.addSeed(this, this.data.plantStep < 4, true);

            // Grow
            if(this.data.plantStep && this.data.plantStep > 1){
                this.state = "watered-" + this.data.plantType + "-" + (this.data.plantStep - 1);
            }
            if(this.data.plantStep && this.data.plantStep > 0){
                this.grow(this, true);
            }
        }

        let i = this.setInterval(() => {
            let bugs;
            if(this.parentScene.actors["BugsIntro"]) bugs = this.parentScene.actors["BugsIntro"][0];
            if(this.parentScene.actors["BugsBunny"]) bugs = this.parentScene.actors["BugsBunny"][0];

            if(this.bubble || (bugs && bugs.state === "held-gong")) return;

            let step = this.state.split("-").pop() * 1;

            if(!isNaN(step) && step < 4) this.addBubble("Water", { x: 18, y: 60, z: 0 });
        }, 1000);

        i.currentTime = Math.random() * 1000 | 0;
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
                plantType: this.data.plantType,
                plantStep: this.state.split("-").pop() * 1 || 0
            }
        }
    }

    setPhysicsBody(){
        if(this.physics && this.body && this.sprite){
            this.body.width = 50;
            this.body.height = 50;
            this.body.left = -25;
            this.body.bottom = -25;
        }
    }

    waterDrop(drop){
        if(drop){
            if(drop.used) return;

            drop.used = true;
            drop.onHitFloor();
            drop.body.velocity[1] = 0;
        }

        this.waterCount += drop.value || 1;

        if(this.waterCount > 20){
            this.grow();
            this.waterCount = 0;
        }
    }

    grow(source = this, silent = false){
        if(this.state.indexOf("clipped-") > -1) return;
        
        let step = this.state.split("-").pop() * 1;

        this.removeSeed();

        if((isNaN(step) || step == 0) && this.data.plantType){
            this.state = "watered-" + this.data.plantType + "-1";
            if(!silent) game.playSFX("SO-PL-grow-mound");
        }else if(step === 1){
            this.state = "watered-" + this.data.plantType + "-2";
            if(!silent) game.playSFX("SO-PL-grow-mound");
        }else if(step === 2){
            this.state = "watered-" + this.data.plantType + "-3";
            if(!silent) game.playSFX("SO-PL-grow-mound");
        }else if(step === 3){
            this.draggable = true;
            this.state = "watered-" + this.data.plantType + "-4";
            if(!silent) game.playSFX('SO-99-sparklepow');

            this.removeBubble();
        }
    }

    addSeed(source, bubble = true, silent = false){
        if(this.seed) return;

        // Get seed type
        if(source.className.toLowerCase().indexOf("seeddrop") > -1){
            let plantType = source.className.split("-").pop();

            if(plantType === "Misc"){
                let random = lastRandom;

                while(random === lastRandom) random = MISC_PLANT_TYPES[Math.round(Math.random() * (MISC_PLANT_TYPES.length - 1))];
                
                lastRandom = random;
                plantType = random;
            }

            this.data.plantType = plantType;
        }

        this.seed = this.parentScene.addActor({
            cls: "FX-SeedDrops-" + this.data.plantType,
            position: [0, 0, 0],
            isPersistent: false,
            data: this.data
        }, false);

        // this.plant.pointerEvents = false;

        this.addComponent(this.seed);

        if(!silent) game.playSFX("SO-Seed-tiny-02");

        // if(bubble) this.setTimeout(() => this.addBubble("Water", { x: 18, y: 60, z: 0 }), 2000);
    }

    removeSeed(){
        if(!this.seed) return;

        this.parentScene.removeActor(this.seed);

        this.removeComponent(this.seed);
    }

    onStartDrag(){
        if(this.state !== "idle") this.parentScene.selectedObject = this.harvest();
    }

    onCollide(event, item){
        // console.log(`Collide: ${this.className}:${item.className}`);

        if(item.className === "WaterParticle"){
            this.waterDrop(item);
        }

        if(item.className.indexOf("SeedDrops") > -1){
            this.addSeed(item);
        }
    }

    harvest(){
        let plant;
        let step = this.state.split("-").pop() * 1;

        if(this.state.indexOf("clipped-") > -1){
            step = 4;
        }

        if(step === 4){
            let c = this.seed.className.split("-")[2];

            let classes = {
                "CA": "OB-PL-Carrot",
                "ST": "OB-PL-Strawberry",
                "WA": "OB-PL-Watermelon", 
                "FL": "OB-PL-Flower",
                "BO": "OB-PL-BlueOrchid",
                "RS": "OB-PL-Rose",
                "BU": "OB-PL-Bush",
                "FN": "OB-PL-Fern",
                "WF": "OB-PL-WildFlower",
                "CS": "OB-PL-Cactus",
                "BE": "OB-PL-Beet"
            }

            if(classes[c]){
                let s = "idle";

                if(c === "BU" && this.state.indexOf("clipped-") > -1){
                    s = this.state.split("-")[2];
                }

                plant = this.parentScene.addActor({
                    cls: classes[c],
                    position: [...this.transform.xyz],
                    state: s
                });
    
                if(this.pot){
                    plant.transform.x += this.pot.transform.x;
                    plant.transform.y += this.pot.transform.y;
                }

                // if(c === "ST"){
                //     plant.transform.y += 110;
                // }

                plant.transform.x = this.parentScene.mouseState.position.x + this.parentScene.cameras[0].transform.x;
                plant.transform.y = this.parentScene.mouseState.position.y + this.parentScene.cameras[0].transform.y;

                plant.HSV[0] = this.HSV[0];
                plant.HSV[1] = this.HSV[1];
                plant.HSV[2] = this.HSV[2];

                game.playSFX("SO-PL-grow-spurt-h20");
    
                plant.body.velocity[0] = (Math.random() > 0.5)?10:-10;
                plant.body.velocity[1] = 20;
                plant.transform.y -= 20;

                this.dirt = this.parentScene.addActor({
                    cls: "OB-Pot-Break-Dirt",
                    position: [plant.transform.x, plant.transform.y, 90],
                    isPersistent: false,
                    data: {
                        removeWhenAnimComplete: true
                    }
                }, true);
        
                this.state = "idle";
                this.seed = null;
                this.draggable = false;
                this.data.plantType = null;
                this.dirt.body.gravityScale = 0;
            }
        }

        return plant;
    }

    canClip(){
        return this.seed && this.state === "watered-BU-4";
    }

    clip(){
        // Make sure it's not already clipped
        if(!this.canClip()) return false;

        let plantType = this.seed.className.split("-")[2];

        if(plantType === "BU"){
            let topiaries = ["BB", "CA", "DO", "EL", "PR", "SW", "TR"];
            this.state = "clipped-BU-" + (topiaries[Math.round(Math.random() * (topiaries.length - 1))]);

            // Falling leaves
            let fx = this.parentScene.addActor({
                cls: "FX-Leaf",
                position: [this.transform.x, this.transform.y, 90],
                isPersistent: false,
                data: {
                    removeWhenAnimComplete: true
                }
            }, true);

            if(this.pot){
                fx.transform.x += this.pot.transform.x;
                fx.transform.y += this.pot.transform.y;
            }
        }

        return true;
    }

    onDroppedItem(evt, item){
        super.onDroppedItem(evt, item);

        if(!this.seed && item.className.split("OB-PL-").length > 1){
            let classes = {
                "OB-PL-Carrot": "CA",
                "OB-PL-Strawberry": "ST",
                "OB-PL-Watermelon": "WA",
                "OB-PL-Flower": "FL",
                "OB-PL-BlueOrchid": "BO",
                "OB-PL-Rose": "RS",
                "OB-PL-Carrot": "CA",
                "OB-PL-Fern": "FN",
                "OB-PL-WildFlower": "WF",
                "OB-PL-Cactus": "CS",
                "OB-PL-Beet": "BE",
                "OB-PL-Bush": "BU",
            }

            this.data.plantType = classes[item.className];
            this.data.plantStep = 4;

            this.addSeed(this, false);
            this.state = "watered-" + this.data.plantType + "-4"
            this.grow(this, true);
            this.draggable = true;

            this.parentScene.remove(item);

            this.HSV[0] = item.HSV[0];
            this.HSV[1] = item.HSV[1];
            this.HSV[2] = item.HSV[2];

            if(this.data.plantType === "BU" && item.state !== "idle"){
                this.state = "clipped-BU-" + item.state;
                this.sprite.currentAnimation.setFrame(this.sprite.currentAnimation.frames.length - 1);
            }
            
            game.playSFX("SO-PL-RePotting");
        }
    }
}