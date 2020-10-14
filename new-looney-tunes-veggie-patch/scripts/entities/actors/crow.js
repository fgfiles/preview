import Actor from '../actor.js';

const SPEED = 10;

export default class Crow extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Crow";
    }

    update(){
        super.update(...arguments);

        if(this.state === "fly" || this.state === "land"){
            this.transform.z = 80;//this.z;
            this.body.bounds.bottom = this.groundY;
        }else{
            this.body.velocity[0] = 0;
            this.body.velocity[1] = 0;
            this.groundY = this.body.bounds.bottom;
        }

        // if(this.transform.y > 3000) this.parentScene.remove();
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        this.body.gravityScale = 0;
        // this.z = 0;

        this.transform.y = 10000 + (Math.random() * 10000);
        this.groundY = this.body.bounds.bottom;
        this.state = "fly";

        this.setTimeout(() => {
            this.body.velocity[1] = -SPEED;
        }, 0.5 * 60 * 1000); // Wait 0.5 minutes before entering scene
    }

    flyaway(){
        if(this.state !== "takeoff"){
            this.state = "takeoff";

            this.sprite.currentAnimation.callback = () => {
                this.state = "fly";

                this.body.velocity[1] = SPEED;
                // this.z = this.transform.z;
            }

            game.playSFX("SO-Crow-Flap-Long");

            // Come back
            this.setTimeout(() => {
                this.body.velocity[1] = -SPEED;

            }, (Math.random() * 5000) + 30000);
        }
    }

    onMouseDown(){
        super.onMouseDown(...arguments);

        // this.flyaway();
    }

    onHitFloor(){
        this.state = "takeoff";

        this.sprite.currentAnimation.callback = () => {
            this.state = "idle";
        }
    }
}