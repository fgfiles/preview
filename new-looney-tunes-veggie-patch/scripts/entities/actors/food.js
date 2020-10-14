import Actor from '../actor.js';

export default class Food extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Food";
    }

    update(){
        super.update(...arguments);

        // if(this.flies){
        //     this.flies.roll = -this.roll;
        //     this.flies.flipX = this.flipX;
        //     // this.flies.zoom = 1 / this.zoom;
        // }

        if(this.witherState === 2){
            this.HSV[1] = -0.3;
            this.HSV[2] = -0.1;
        }else{
            this.HSV[1] = 0;
            this.HSV[2] = 0;
        }
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        this.witherState = this.data.witherState || -1;

        this.wither();

        // chance of this being able to rot
        let rotChance = (Math.random() < 0.20);

        if(rotChance) this.witherTimer = this.setInterval(() => {
            this.wither();
        }, 2 * 60 * 1000);

        this.dropTimer = null;
    }
    
    wither(step = this.witherState + 1){
        let bugs;
        if(this.parentScene.actors["BugsIntro"]) bugs = this.parentScene.actors["BugsIntro"][0];
        if(this.parentScene.actors["BugsBunny"]) bugs = this.parentScene.actors["BugsBunny"][0];

        if(bugs && bugs.state === "held-gong") return;

        if(this.witherState >= 3) return;
        
        if(!this.flies || this.witherState !== step){
            this.witherState = step;
            
            // this.removeComponent(this.flies);
            this.parentScene.removeActor(this.flies);

            let x = (this.flies)?this.flies.transform.x:this.transform.x;
            let y = (this.flies)?this.flies.transform.y:this.transform.y;

            if(this.witherState === 1){
                // Show show
                this.flies = this.parentScene.addActor({
                    cls: "OB-Fly",
                    position: [x, y, 2],
                    isPersistent: false
                }, true);

                // this.addComponent(this.flies);
                this.flies.follow = this;
            }else if(this.witherState === 2){
                let aOrB = (Math.random() > 0.5)?"A":"B";
                // Show show
                this.flies = this.parentScene.addActor({
                    cls: "OB-Flies-" + aOrB,
                    position: [x, y, 2],
                    isPersistent: false
                }, true);

                // this.addComponent(this.flies);
                this.flies.follow = this;
            }else if(this.witherState === 3){
                this.parentScene.removeActor(this);

                this.flies = null;
            }
        } 
    }

    clean(){
        if(this.flies) this.parentScene.removeActor(this.flies);
        this.witherState = 0;
    }

    onStartDrag(){
        super.onStartDrag(...arguments);

        if(this.flies && this.witherState === 2){
            this.flies.flyaway();
            this.flies = null;

            // this.witherState = 0;
            if(this.witherTimer) this.witherTimer.restart();
        }

        if(this.dropTimer){
            this.removeComponent(this.dropTimer);
            this.dropTimer = null;
        }
    }

    onMouseUp(){
        super.onMouseUp(...arguments);

        if(!this.dropTimer) this.dropTimer = this.setTimeout(() => {
            this.wither(this.witherState);
            this.dropTimer = null;
        }, 1000);
    }

    // onHitFloor(){
    //     super.onHitFloor(...arguments);
        
    //     if(this.parentScene.selectedItem !== this) this.wither(this.witherState);
    // }
}