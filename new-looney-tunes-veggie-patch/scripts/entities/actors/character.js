// import * as Onyx from '../../../lib/onyx/scripts/main.js';
import Actor from '../actor.js';

const HIT_FALL_VELOCITY = -45;

const particles = [];

export default class Character extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Character";
    }

    onReady(){
        super.onReady();

        if(!particles.length){
            for(let i = 0; i < 15; i++){
                particles.push(this.parentScene.addActor({
                    cls: "WaterParticle",
                    scale: [1.5, 1.5, 1],
                    isPersistent: false
                }, false))
            }
        }
        
        this.intervalWater = this.setInterval(() => {
            let particle = null;
        
            // Find an unused one
            for(let p of particles){
                if(!p.inUse){
                    particle = p;
                    break;
                }
            }
        
            if(particle){
                particle.inUse = true;
                particle.bounced = false;
                this.parentScene.add(particle);
        
                particle.transform.xyz = [...this.transform.xyz];
                particle.transform.z = 90;
        
                let x = 160 * ((this.flipX)?-1:1), y = -55 * ((this.flipY)?-1:1),
                    angle = -this.transform.roll,
                    cos = Math.cos(angle),
                    sin = Math.sin(angle),
                    nx = (cos * x) + (sin * y),
                    ny = (cos * y) - (sin * x);
        
                particle.transform.x += nx;
                particle.transform.y += ny;
        
                let vel = (1.5 + (Math.random() * 8) - 4);
                particle.body.velocity[0] = vel * ((this.flipX)?-1:1);
                particle.body.velocity[1] = (Math.random() * 1) - 0.5;
                particle.body.restitution = 0.2;
        
                particle.setGroundLevel(-400);
            }
        }, 60);

        this.intervalWater.enabled = false;
    }

    onUpdate(){
        let floor = 800;

        if(this.body.velocity[1] < HIT_FALL_VELOCITY && !this.playedFallWhistle){
            game.playSFX("SO-Falling-Whistle");
            this.playedFallWhistle = true;
        }

        // if(this.parentScene.hoverItem === this && (this.state === "idle" || this.state === "hover")){
        //     this.state = "hover";
        // }else if(this.state === "hover"){
        //     this.state = "idle";
        // }

        this.prevVelocity = [...this.body.velocity];

        // if(this.transform.y > floor){
        //     return;
        // }

        let offset = {offsetX: 0, offsetY: 0, excludeClasses: ["OB-Ladder-Out", "Gong", "WaterCan"]};

        // Taz's Spin drag 
        if(this.className == "Taz" && this.state === "drag"){
            // See if there's anything around
            let nearest = this.getNearestItem(300, offset);

            if(nearest && nearest.harvest) nearest.harvest();
        }

        // Gong
        if(this.state === "held-gong"){
            if(this.sprite.currentAnimation.currentTime < 17 && this.sprite.currentAnimation.currentFrame.name == "BB-18-Buddha-13.png"){
                game.playSFX("SO-BB-18-Gong");

                let items = this.parentScene.getItemsByClass("Plant");

                for(let item of items){
                    item.removeBubble();
                }
            }
            this.flipX = false;
        }

        if(this.state === "held-loungechair"){
            this.flipX = false;
        }

        if(this.state === "holding-ob-spray"){
            
            if(!this.sprite.currentAnimation.frames[8].onStart){
                this.sprite.currentAnimation.frames[8].onStart = () => {
                    let food = this.parentScene.getItemsByClass("Food");
                    // let items = [...food, ...plants];
        
                    // Find an item able to be grown
                    let item;
                    let closestDistance = 550;
        
                    for(let i of food){
                        // if(item){
                            let distance = this.getItemDistance(i);
                            if(distance < closestDistance){
                                item = i;
                                closestDistance = distance;         
                            }  
                        // }
                    }

                    if(item){
                        this.flipX = (item.transform.x < this.transform.x);
    
                        // Grow
                        item.zoom = (item.zoom === 1)?3:1;
                    }; 
                    
                    let sprayOffsetX = 0;
                    let sprayOffsetY = 0;
    
                    if(this.className === "BugsBunny"){
                        sprayOffsetX = 117;
                        sprayOffsetY = -59;
                    }else{
                        sprayOffsetX = 150;
                        sprayOffsetY = -13;
                    }
    
                    if(this.flipX) sprayOffsetX *= -1;
    
                    // Show spray
                    this.spray = this.parentScene.addActor({
                        cls: "FX-Spray",
                        position: [this.transform.x + sprayOffsetX, this.transform.y + sprayOffsetY, 2],
                        isPersistent: false
                    }, true);
                    this.spray.flipX = !this.flipX;
    
                    game.playSFX("SO-OB-spray");
                }
            }
            
        }

        // Falling animation
        if(this.body.velocity[1] < HIT_FALL_VELOCITY && (this.state == "idle" || this.state == "hit-floor-soft")){
            this.state = "hit-floor-hard";
            this.sprite.currentAnimation.pause(0);
        }else if(this.body.velocity[1] < -30 && this.state == "idle"){
            // this.state = "hit-floor-soft";
            // this.sprite.currentAnimation.pause(0);
        }

        if(this.state === "swimfly"){
            if(this.body.velocity[0]) this.flipX = (this.body.velocity[0] > 0);
            
            this.body.velocity[0] = 3 * ((this.flipX)?1:-1);
            this.body.velocity[1] = 0;
        }
    }

    onStateChange(newState, oldState){
        if(newState === "idle" || newState === "reject"){
            this.removeItem();
        }

        if(this.className == "Taz" && this.state === "drag"){
            this.sfxTazSpin = game.playSFX("SO-TD-SpinDrag");
        }

        if(oldState === "swimfly"){
            this.body.gravityScale = 1;
        }

        if(newState === "holding-ob-airhorn"){
            if(!this.sprite.currentAnimation.frames[5].onStart){
                this.sprite.currentAnimation.frames[5].onStart = () => {
                    let nearbyItems = this.getNearbyItems(1500, {
                        whitelistClasses: ["Flies", "OB-Crow"]
                    })

                    for(let item of nearbyItems){
                        if(item.flyaway) item.flyaway();
                    }

                    game.playSFX("AirHorn-02");
                }
            }
        }

        if(newState === "holding-ob-chainsaw"){
            game.playSFX("SO-BB-Chainsaw-mix");

            if(!this.sprite.currentAnimation.frames[1].onStart){
                this.sprite.currentAnimation.frames[1].onStart = () => {
                    let pots = this.parentScene.getItemsByClass("Pot");
                    let plants = this.parentScene.getItemsByClass("Plant");
                    let items = [...pots, ...plants];

                    // Find a bush able to be clipped
                    let bush;
                    let closestDistance = 300;

                    for(let item of items){
                        if(item && item.canClip()){
                            let distance = this.getItemDistance(item);
                            if(distance < closestDistance){
                                bush = item;
                                closestDistance = distance;         
                            }  
                        }
                    }
                    

                    if(bush){
                        bush.clip();
                        this.flipX = (bush.transform.x < this.transform.x);
                    }else{
                        this.state = "reject-ob-chainsaw";
                        this.sprite.currentAnimation.callback = () => {
                            this.removeItem();
                            this.state = "idle";
                        }
                    }
                }
            }
        }

        if(newState === "holding-ob-jackhammer"){
            game.playSFX("SO-BB-Jackham-mix");

            if(!this.sprite.currentAnimation.frames[1].onStart){
                this.sprite.currentAnimation.frames[1].onStart = this.sprite.currentAnimation.frames[7].onStart = () => {
                    // Show spray
                    this.spray = this.parentScene.addActor({
                        cls: "FX-SmokePuff",
                        position: [this.transform.x + 100, this.transform.y - 140, 3],
                        isPersistent: false
                    }, true);

                    // game.playSFX("AirHorn-02");
                    // this.parentScene.shakeCamera();
                }

                this.sprite.currentAnimation.frames[3].onStart = this.sprite.currentAnimation.frames[9].onStart = () => {
                    if(this.parentScene.actors["Background-Surface-1"]) this.parentScene.actors["Background-Surface-1"][0].spawnApple(true);
                }
            }
        }

        // Porky sweep away flies
        if(newState === "holding-ob-broom"){
            game.playSFX("SO-PP-Sweep-mix");

            if(!this.sprite.currentAnimation.frames[7].onStart){
                this.sprite.currentAnimation.frames[7].onStart = () => {
                    // Show spray
                    this.spray = this.parentScene.addActor({
                        cls: "FX-SmokePuff",
                        position: [this.transform.x + 300, this.transform.y - 140, 3],
                        isPersistent: false
                    }, true);

                    let items = this.getNearbyItems(1000, {
                        offsetX: 200 * (this.flipX)?-1:1,
                        whitelistClasses: ["Flies", "Food"],
                    });

                    for(let item of items){
                        if(item.flyaway) item.flyaway();
                        if(item.clean) item.clean();
                    }
                }
            }
        }

        // Daffy super cut
        if(newState === "holding-ob-sunglasses"){
            game.playSFX("SO-SuperClip-v3-mix");

            // Show cut
            this.spray = this.parentScene.addActor({
                cls: "FX-Supercut",
                position: [this.transform.x, this.transform.y, 2],
                isPersistent: false
            }, true);

            if(!this.sprite.currentAnimation.frames[15].onStart){
                this.sprite.currentAnimation.frames[15].onStart = () => {

                    // Add random watermelons
                    let count = (Math.random() * 5 + 15)
                    for(let i = 0; i < count; i++){
                        this.parentScene.addActor({
                            cls: "OB-PL-Watermelon",
                            position: [this.transform.x + ((Math.random() * 2000) - 1000), 1000 + (Math.random() * 200), 2],
                        }, true);
                    }

                    // game.playSFX("AirHorn-02");
                }
            }

            this.sprite.currentAnimation.callback = () => {
                this.removeItem();
                this.state = "idle";
            }
        }

        // Bugs mask
        if(newState === "holding-ob-mask"){
            game.playSFX("SO-TC-drums-fadeout", true);

            if(!this.sprite.currentAnimation.frames[24].onStart){
                this.sprite.currentAnimation.frames[24].onStart = () => {
                    this.setTimeout(() => {
                        // See if there's a geiser around
                        if(this.parentScene.actors["FX-Geiser-Water"]){
                            this.parentScene.actors["FX-Geiser-Water"][0].burst();
                        }
                    }, 1000);
                }
            }

            this.sprite.currentAnimation.callback = () => {
                if(this.state === "holding-ob-mask"){
                    this.state = "idle";
                }
            };
        }else{
            // game.stopSFX("SO-TC-drums-fadeout", 500);
        }

        if(newState === "holding-ob-paintbucket"){
            game.playSFX("SO-DD-Paints-mix");

            if(!this.sprite.currentAnimation.frames[15].onStart){
                this.sprite.currentAnimation.frames[15].onStart = () => {
                    let nearbyItems = this.getNearbyItems(200);

                    for(let item of nearbyItems){
                        item.paint();
                    }
                }
            }
        }

        if(newState === "holding-ob-fruithat"){
            game.playSFX("SO-FruitHat");
        }

        if(newState === "held-loungechair"){
            game.playSFX("SO-LoungeSqueak");
        }

        this.intervalWater.enabled = false;
        this.removeComponent(this.growInterval);

        if(newState === "holding-ob-hose"){
            this.intervalWater.enabled = true;

            game.playMusic("SO-BB-Watering");

            this.growInterval = this.setInterval(() => {
                let items = this.getNearbyItems(400, {
                    offsetX: 400 * (this.flipX)?-1:1,
                    whitelistClasses: ["Pot", "Plant"],
                });

                for(let item of items){
                    if(item.grow) item.grow();
                }
            }, 1500);

            this.sprite.currentAnimation.frames[2].onStart = () => {
                this.intervalWater.enabled = false;
                
                game.stopMusic("SO-BB-Watering");
            }
        }else{
            game.stopMusic("SO-BB-Watering");
        }
    }

    onMouseUp(event){
        super.onMouseUp(event);
        if(this.parentScene.selectedObject === this && this.state.indexOf("using-") < 0 && this.state.indexOf("held-") < 0) this.state = "idle";

        // Stop Taz
        if(this.sfxTazSpin){
            game.stopSFX("SO-TD-SpinDrag", 500, this.sfxTazSpin);
            this.state = "idle";
        }

        // Daffy's Swimfly
        if(this.isDragged && this.className === "DaffyDuck" && this.transform.y > 1000 && Math.abs(this.body.velocity[0]) < 5 && Math.abs(this.body.velocity[1]) < 5){
            if(this.state !== "swimfly"){
                this.state = "swimfly";
                this.body.gravityScale = 0;
                this.transform.y = Math.min(this.transform.y, this.parentScene.world.bounds.top - (this.body.height / 2) - 20);
            }else{
                this.state = "idle";
                this.body.gravityScale = 1;
            }

            // this.sprite.currentAnimation.callback = () => {
            //     this.state = "idle";
            //     this.body.gravityScale = 1;
            // }
        }

        this.isDragged = false;
    }

    onMouseOver(){
        // this.parentScene.hoverItem = this;
    }

    onStartDrag(event){
        for(let item of this.heldItems){
            this.removeItem(item);
            this.parentScene.selectedObject = item;
            this.state = "idle";
            item.state = "idle";
            item.sprite.visible = true;
        }

        // if(this.state.indexOf("held-") >= 0){
            this.state = "idle";
        // }

        for(let item of this.parentItems){
            item.removeItem(this);

            this.transform.x = this.parentScene.mouseState.position.x + this.parentScene.cameras[0].transform.x;
            this.transform.y = this.parentScene.mouseState.position.y + this.parentScene.cameras[0].transform.y;
        }

        if(this.state === "idle" && this.states["drag"]){
            this.state = "drag";

            this.sprite.currentAnimation.callback = () => {
                this.state = "idle";
            }
        }

        this.body.gravityScale = 1;
        this.playedFallWhistle = false;
    }

    onCollide(event, item){
        // console.log(item);
        if(item.className === "OB-Apple" || item.className === "OB-PL-Watermelon" || item.className === "OB-PL-Pumpkin"){
            if(event.direction && ((event.direction.left || event.direction.right) && Math.abs(event.bodyA.velocity[0]) > 3) || ((event.direction.top || event.direction.bottom) && Math.abs(event.bodyA.velocity[1]) > 3)){
                // if(event.direction.top || event.direction.bottom){
                //     item.state = "hit-top";
                // }else{
                //     item.state = "hit-side";
                // }
                // item.enabled = false;

                this.parentScene.addActor({ cls: "FX-Pow", position: [item.transform.x, item.transform.y, 90] }, true);

                this.state = "hit-ob";

                if(item.className === "OB-PL-Watermelon"){
                    game.playSFX("SO-Hit-Watermelon", true);

                    if(item.clean) item.clean();

                    item.state = "break";
                    item.flipX = event.direction.left;
                    item.body.velocity[0] = 0;
                    item.body.velocity[1] = 0;

                    item.sprite.currentAnimation.callback = () => {
                        item.parentScene.remove(item);
                    };
                }

                // Play random hit sfx
                game.playSFX("SO-Hit-" + "ABCD"[Math.floor(Math.random() * 4)]);

                // Richochet
                if(event.direction.left || event.direction.right) item.body.velocity[0] = -item.body.velocity[0] * item.body.restitution;
                if(event.direction.top || event.direction.bottom) item.body.velocity[1] = -item.body.velocity[1] * item.body.restitution;

                this.sprite.currentAnimation.callback = () => {
                    this.state = "idle";
                };
            }
        }

        if(item.className === "OB-Pot-Orange" && item.shatter && (((event.direction.left || event.direction.right) && Math.abs(event.bodyA.velocity[0]) > 10) || ((event.direction.top || event.direction.bottom) && Math.abs(event.bodyA.velocity[1]) > 10))){
            item.shatter();
            
            // Play random hit sfx
            game.playSFX("SO-Hit-" + "ABCD"[Math.floor(Math.random() * 4)], true);

            this.state = "hit-ob";
            this.sprite.currentAnimation.callback = () => {
                this.state = "idle";
            };
        }
    }

    onHitFloor(event){
        // if(event.bodyA.velocity[1] < -5) console.log(event.bodyA.velocity[1]);

        if(event.bodyA.velocity[1] < HIT_FALL_VELOCITY){
            this.state = "hit-floor-hard";

            this.sprite.currentAnimation.callback = () => {
                this.state = "idle";
            };

            event.bodyA.velocity[1] = 0;

            if(this.audio['fall-hard']){
                game.playSFX(this.audio['fall-hard']);
            }

        }else if(event.bodyA.velocity[1] < -30){
            // this.state = "hit-floor-soft";

            // this.sprite.currentAnimation.callback = () => {
            //     this.state = "idle";
            // };

            // event.bodyA.velocity[1] = 0;
        }

        this.sprite.currentAnimation.pause(1);
    }
}