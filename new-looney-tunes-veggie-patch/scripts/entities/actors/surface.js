import Actor from '../actor.js';

export default class Surface extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Surface";
    }

    onReady(){
        if(super.onReady() === false) return;

        // this.setInterval(() => {
        //     this.spawnApple();
        // }, 60000);

        this.setInterval(() => {
            // Check for Porky
            let porky = this.parentScene.getItemsByClass("PorkyPig")[0];
            let broom = this.parentScene.getItemsByClass("OB-Broom")[0];
            
            if(!porky && broom && !broom.parentItems.length && broom.isReady && Math.abs(broom.body.velocity[1]) < 1){
                this.parentScene.addActor({
                    cls: "PorkyPig",
                    position: [broom.transform.x - 300, 10000 + broom.transform.y, 2]
                }, true);
            }

            // Check for Daffy
            let daffy = this.parentScene.getItemsByClass("DaffyDuck")[0];
            let airhorn = this.parentScene.getItemsByClass("OB-AirHorn")[0];
            let paintbucket = this.parentScene.getItemsByClass("OB-PaintBucket")[0];
            
            if(!daffy && airhorn && !airhorn.parentItems.length && airhorn.isReady && Math.abs(airhorn.body.velocity[1]) < 1){
                this.parentScene.addActor({
                    cls: "DaffyDuck",
                    position: [airhorn.transform.x - 300, 10000 + airhorn.transform.y, 2]
                }, true);
            }
            if(!daffy && paintbucket && !paintbucket.parentItems.length && paintbucket.isReady && Math.abs(paintbucket.body.velocity[1]) < 1){
                this.parentScene.addActor({
                    cls: "DaffyDuck",
                    position: [paintbucket.transform.x - 300, 10000 + paintbucket.transform.y, 2]
                }, true);
            }

            // Check for Taz
            let taz = this.parentScene.getItemsByClass("Taz")[0];
            let food = this.parentScene.getItemsByClass("OB-PL-Watermelon")[0];
            
            if(!taz && food && !food.parentItems.length && food.isReady && Math.abs(food.body.velocity[1]) < 1){
                this.parentScene.addActor({
                    cls: "Taz",
                    position: [food.transform.x - 300, 10000 + food.transform.y, 2]
                }, true);
            }
        }, 1000);
    }

    spawnApple(spawnAll){
        this.setTimeout(() => {
            if(this.parentScene.actors["OB-Apple"] && this.parentScene.actors["OB-Apple"].length > 12) return;

            let x = (Math.random() * 600) + 400;

            let apple = this.parentScene.addActor({
                cls: "OB-Apple",
                position: [this.transform.x + x, 1500 + (Math.random() * 200), 2],
                scale: [0.35, 0.35, 1]
            }, true);
    
            apple.setTimeout(() => {
                apple.body.bounds.bottom = 300 + (Math.random() * 300);
            }, 100);
    
            if(spawnAll && this.parentScene.actors["OB-Apple"].length <= 12) this.spawnApple(spawnAll);
        }, Math.random() * 100);
        
    }
}