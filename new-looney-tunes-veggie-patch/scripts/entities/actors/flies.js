import Actor from '../actor.js';

let SPEED = 0.1;
let MAX_DISTANCE = 2;
let FOLLOW_OFFSET_Y = 75;

export default class Flies extends Actor {
    constructor(){
        super(...arguments);

        this.constructorName = "Flies";
    }

    onReady(){
        if(super.onReady(...arguments) === false) return;

        // this.follow = null;
        this.sortableY = false;

        this.sprite.currentAnimation.setFrame(Math.round(Math.random() * 3));

        this.sprite.transform.y = FOLLOW_OFFSET_Y;
    }

    onUpdate(){
        if(this.follow){
            let distance = this.getItemDistance(this.follow);

            if(distance > MAX_DISTANCE){
                let x = this.follow.transform.x - this.transform.x, y = this.follow.transform.y - this.transform.y,
                    angle = -this.transform.roll,
                    cos = Math.cos(angle),
                    sin = Math.sin(angle),
                    nx = (cos * x) + (sin * y),
                    ny = (cos * y) - (sin * x);

                this.transform.x += nx * SPEED;
                this.transform.y += ny * SPEED;
            }

            this.transform.z = this.follow.transform.z + 1;// 0.001;
        }
    }
    
    flyaway(){
        if(this.state !== "exit"){
            this.state = "exit";
            this.follow = null;

            this.sprite.currentAnimation.callback = () => {
                this.parentScene.remove(this);
            }
        }
    }
}