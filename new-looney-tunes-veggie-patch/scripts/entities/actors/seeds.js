import Actor from '../actor.js';

const POUR_ANGLE = 25 * (Math.PI/180); // 15 degrees

export default class Seeds extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Seeds";
    }

    onReady(){
        super.onReady();

        let particles = [];

        let seedType = this.className.split("-").pop();

        for(let i = 0; i < 10; i++){
            particles.push(this.parentScene.addActor({
                cls: "FX-SeedDrops-"+seedType,
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

                let x = 20 * ((this.flipX)?-1:1), y = -5 * ((this.flipX)?-1:1),
                    angle = -this.transform.roll,
                    cos = Math.cos(angle),
                    sin = Math.sin(angle),
                    nx = (cos * x) + (sin * y),
                    ny = (cos * y) - (sin * x);

                particle.transform.x += nx;
                particle.transform.y += ny;

                particle.body.velocity[0] = (Math.random() * 5) - 2.5;
                particle.body.velocity[1] = (Math.random() * 1) - 0.5;
                particle.body.restitution = 0.2;

                particle.setGroundLevel(-400);
            }
        }, 60);

        this.intervalParticles.enabled = false;
    }
    
    onUpdate(){
        
        if(this.parentItems.length > 0){
            // Don't do anything if being carried (e.g. by tweety)
        }else if(this.parentScene.selectedObject !== this){
            this.intervalParticles.enabled = false;
            this.state = "idle";

            this.transform.roll = 0;
        // Pour seed particles
        }else if(this.parentScene.selectedObject === this){
            this.intervalParticles.enabled = true;
        
            this.intervalParticles.interval = 3000;
        
            // See if there's anything around
            let nearest = this.getNearestItem(200, {
                offsetX: 140,
                offsetY: -200,
                whitelistClasses: ["Plant", "Pot"]
            });

            if(nearest){
                this.intervalParticles.interval = 300;

                // Look at nearest item
                // this.flipX = (nearest.transform.x < this.transform.x);

                if(!this.flipX){
                    this.transform.roll = Math.max(this.transform.roll - 0.05, -POUR_ANGLE);
                }else{
                    this.transform.roll = Math.min(this.transform.roll + 0.05,  POUR_ANGLE);
                }
            }else{
                if(!this.flipX){
                    this.transform.roll = Math.min(this.transform.roll + 0.05, 0);
                }else{
                    this.transform.roll = Math.max(this.transform.roll - 0.05, 0);
                }
            }
        }
    }

    onMouseDown(){
        super.onMouseDown(...arguments);

        game.playSFX("SO-Seed-Rattle-01");
    }
}