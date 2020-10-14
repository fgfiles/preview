import Actor from '../actor.js';

let particles = [];

export default class Rain extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Rain";
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        this.velX = -10;

        if(!particles.length){
            for(let i = 0; i < 100; i++){
                particles.push(this.parentScene.addActor({
                    cls: "WaterParticle",
                    scale: [2, 2, 1],
                    isPersistent: false,
                    limitedToWorld: false
                }, false))
            }
        }

        // // Water drops
        // this.setInterval(() => {
        //     for(let item of this.parentScene.entities){
        //         if(item.waterDrop){
        //             item.waterDrop();
        //         }
        //     }
        // }, 500);

        // // Wash away paint
        // this.setInterval(() => {
        //     for(let item of this.parentScene.entities){
        //         // wash away paint
        //     }
        // }, 20000);

        // End / remove
        this.setTimeout(() => {
            this.parentScene.removeActor(this);
        }, 30000);
    }

    onUpdate(){
        // for(let i = 0; i < 2; i++){
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
                particle.value = 3;
                this.parentScene.add(particle);
    
                particle.transform.xyz = [Math.random() * this.parentScene.width * 1.2, this.parentScene.height * 1.5, 90];
    
                particle.body.velocity[0] = this.velX;
                particle.body.velocity[1] = (Math.random() * 1) - 0.5;
                particle.body.restitution = 0.2;
    
                particle.setGroundLevel(-2000);
            }
        // }

        // Wash items
        for(let entity of this.parentScene.entities){
            if(entity.HSV){
                entity.HSV[0] -= 0.001 * ((entity.HSV[0] < 0)?-1:1);
                entity.HSV[1] -= 0.001 * ((entity.HSV[1] < 0)?-1:1);
                entity.HSV[2] -= 0.001 * ((entity.HSV[2] < 0)?-1:1);
            }

            if(entity.heldItems && entity.heldItems[0]){
                entity.heldItems[0].HSV[0] -= 0.001 * ((entity.heldItems[0].HSV[0] < 0)?-1:1);
                entity.heldItems[0].HSV[1] -= 0.001 * ((entity.heldItems[0].HSV[1] < 0)?-1:1);
                entity.heldItems[0].HSV[2] -= 0.001 * ((entity.heldItems[0].HSV[2] < 0)?-1:1);
            }

            if(entity.plant){
                entity.plant.HSV[0] -= 0.001 * ((entity.plant.HSV[0] < 0)?-1:1);
                entity.plant.HSV[1] -= 0.001 * ((entity.plant.HSV[1] < 0)?-1:1);
                entity.plant.HSV[2] -= 0.001 * ((entity.plant.HSV[2] < 0)?-1:1);
            }
        }
    }
}