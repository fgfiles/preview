import Actor from '../actor.js';

const POUR_ANGLE = 25 * (Math.PI/180); // 15 degrees

export default class WaterCan extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "WaterCan";

        this.waterSFX = null;
    }

    onReady(){
        super.onReady();

        let particles = [];

        for(let i = 0; i < 15; i++){
            particles.push(this.parentScene.addActor({
                cls: "WaterParticle",
                isPersistent: false
            }, false))
        }

        this.intervalParticles = this.setInterval(() => {
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

                let x = 180 * ((this.flipX)?-1:1), y = 10 * ((this.flipY)?-1:1),
                    angle = -this.transform.roll,
                    cos = Math.cos(angle),
                    sin = Math.sin(angle),
                    nx = (cos * x) + (sin * y),
                    ny = (cos * y) - (sin * x);

                particle.transform.x += nx;
                particle.transform.y += ny;

                let vel = (!this.transform.roll)?0:(3.5 + (Math.random() * 5) - 2.5);
                particle.body.velocity[0] = vel * ((this.flipX)?-1:1);
                particle.body.velocity[1] = (Math.random() * 1) - 0.5;
                particle.body.restitution = 0.2;

                particle.setGroundLevel(-400);
            }
        }, 3000 + Math.random() * 500);
        this.intervalParticles.currentTime = Math.random() * 3000 | 0;

        // this.intervalParticles.enabled = false;
    }
    
    onUpdate(){
        if(this.parentItems.length > 0){
            // Don't do anything if being carried (e.g. by tweety)
        }else if(this.parentScene.selectedObject !== this){
            this.intervalParticles.enabled = false;
            this.state = "idle";

            this.transform.roll = 0;

            if(this.waterSFX){
                game.stopMusic("SO-OB-watercan-soft", 100, this.waterSFX);
                game.stopMusic("SO-OB-watercan", 100, this.waterSFX);
                this.waterSFX = null;
            }
        // Pour water particles
        }else if(this.parentScene.selectedObject === this){
            this.intervalParticles.enabled = true;

            this.intervalParticles.interval = 400 + (Math.random() * 100);
        
            // See if there's anything around
            let nearest = this.getNearestItem(200, {
                offsetX: 140 * ((this.flipX)?-1:1),
                offsetY: -200,
                whitelistClasses: ["Plant", "Pot", "BirdBath"]
            });

            if(nearest){
                this.intervalParticles.interval = 60;

                // Look at nearest item
                // let tflipX = this.flipX;
                // this.flipX = (nearest.transform.x < this.transform.x);
                // if(tflipX !== this.flipX) this.transform.roll *= -1;

                if(!this.flipX){
                    this.transform.roll = Math.max(this.transform.roll - 0.05, -POUR_ANGLE);
                }else{
                    this.transform.roll = Math.min(this.transform.roll + 0.05,  POUR_ANGLE);
                }
                
                game.stopMusic("SO-OB-watercan-soft", 0);
                if(!game.music["SO-OB-watercan"].playing()) this.waterSFX = game.playMusic("SO-OB-watercan");
            }else{
                if(!this.flipX){
                    this.transform.roll = Math.min(this.transform.roll + 0.05, 0);
                }else{
                    this.transform.roll = Math.max(this.transform.roll - 0.05, 0);
                }

                game.stopMusic("SO-OB-watercan", 0);
                if(!game.music["SO-OB-watercan-soft"].playing()) this.waterSFX = game.playMusic("SO-OB-watercan-soft");
            }
        }
    }

    addBubble(type = "Sprout", { x = 20, y = 20, z = 3 } = {}){
        if(this.parentScene.selectedObject === this) return;
        super.addBubble(type, {x: 47, y: 35, z});
    }

    onMouseDown(){
        super.onMouseDown(...arguments);

        this.removeBubble();
    }
}