import Actor from '../actor.js';

export default class BugsIntro extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "BugsIntro";
    }

    onReady(){
        super.onReady(...arguments);

        this.step = 0;

        // Show watercan sprout bubble if not watered
        this.setTimeout(() => {
            let watchPlant = this.parentScene.actors["Plant-Pot"][0];
            let watchWater = this.parentScene.actors["WaterCan"][0];

            // If still on "watered-CA-1"
            if(!watchWater.bubble && !watchPlant.state.split("-1").pop()){
                watchWater.addBubble("Sprout");
            }
        }, 6000);
    }

    onUpdate(){
        if(this.isComplete) return;

        let watchPot = this.parentScene.actors["OB-Pot-Orange"][0];
        let watchPlant = this.parentScene.actors["Plant-Pot"][0];
        let step = watchPlant.state.split("-").pop() * 1;

        switch(step){
            case NaN:
                if(this.step !== 0){
                    this.step = 0;
                    this.state = "step-1";
                }
                break;
            case 1:
                if(this.step !== 1){
                    this.step = 1;
                    this.setTimeout(() => {
                        this.state = "step-2";
                    }, 1000);
                }
                break;
            case 2:
                if(this.step !== 2){
                    this.step = 2;
                    this.setTimeout(() => {
                        // this.state = "step-3";
                    }, 1000);
                }
                break;
            case 3:
                if(this.step !== 3){
                    this.step = 3;
                    this.setTimeout(() => {
                        // this.state = "step-4";
                    }, 1000);
                }
                break;
            case 4:
                if(this.step !== 4){
                    this.step = 4;

                    this.endScene();
                }
                break;
        }

        if(!watchPot){
            this.endScene();
        }
    }

    endScene(){
        if(this.isComplete) return; 

        this.isComplete = true;

        this.setTimeout(() => {
            this.state = "step-5";

            this.setTimeout(() => {
                if(this.parentScene.savedStates["surface"]){
                    this.parentScene.loadState("surface");
                }else{
                    // let watchPot = this.parentScene.actors["OB-Pot-Orange"][0];
                    let watchSqueaks = this.parentScene.actors["Squeaks"][0];

                    // Cheat
                    if(watchSqueaks.state.indexOf("consume") > -1){
                        this.parentScene.changeScenes('Surface-SS');
                    }else{
                        this.parentScene.changeScenes('Surface');
                    }
                }
            }, 3000);
        }, 1000);
    }
}