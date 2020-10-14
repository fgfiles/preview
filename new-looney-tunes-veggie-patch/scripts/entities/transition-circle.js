import * as Onyx from '../../lib/onyx/scripts/main.js';

const SCREEN_LENGTH = 1242;

export default class TransitionCircle extends Onyx.Entity {
    constructor(offsetZ){
        super();

        this.covered = true;
        this.size = SCREEN_LENGTH;

        this.currentTweens = [];

        this.center = new Onyx.Sprite({
            id: "background", 
            src: "res/textures/transition_circle_black.png",
            pixelsPerUnit: 1,
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR", 
            pivot: [0.5, 0.5]
        });
        // this.center.transform.sxyz = [0, 0, 1];
        this.center.mesh.material = game.materialColorized;
        this.addComponent(this.center);
        
        this.top = new Onyx.Sprite({
            id: "background", 
            src: "res/textures/transition_pixel.png",
            pixelsPerUnit: 1,
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR", 
            pivot: [0.5, 0.5]
        });
        this.top.mesh.material = game.materialColorized;
        this.addComponent(this.top);
        
        this.bottom = new Onyx.Sprite({
            id: "background", 
            src: "res/textures/transition_pixel.png",
            pixelsPerUnit: 1,
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR", 
            pivot: [0.5, 0.5]
        });
        this.bottom.mesh.material = game.materialColorized;
        this.addComponent(this.bottom);
        
        this.left = new Onyx.Sprite({
            id: "background", 
            src: "res/textures/transition_pixel.png",
            pixelsPerUnit: 1,
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR", 
            pivot: [0.5, 0.5]
        });
        this.left.mesh.material = game.materialColorized;
        this.addComponent(this.left);
        
        this.right = new Onyx.Sprite({
            id: "background", 
            src: "res/textures/transition_pixel.png",
            pixelsPerUnit: 1,
            minFilter: "LINEAR_MIPMAP_NEAREST",
            magFilter: "LINEAR", 
            pivot: [0.5, 0.5]
        });
        this.right.mesh.material = game.materialColorized;
        this.addComponent(this.right);

        this.transform.z = offsetZ;
    }

    onSpawn(){
        super.onSpawn(...arguments);

        this.alignCenter();
    }

    alignCenter(){
        let screenHeight = this.parentScene.viewports[0].orthoHeight * this.parentScene.cameras[0].transform.sy;
        let screenWidth = (this.parentScene.viewports[0].orthoWidth) ? this.parentScene.viewports[0].orthoWidth * this.parentScene.cameras[0].transform.sx : screenHeight * (16/9);

        this.size = Math.max(screenWidth, screenHeight) * 2;
        // console.log(this.size);

        this.transform.xyz = [this.parentScene.cameras[0].transform.x + (screenWidth / 2), this.parentScene.cameras[0].transform.y + (screenHeight / 2), this.transform.z];
        this.transform.z = 99;

        this.top.transform.xyz    = [0,  this.size / 2, 0];
        this.bottom.transform.xyz = [0, -this.size / 2, 0];
        this.left.transform.xyz   = [-this.size / 2, 0, 0];
        this.right.transform.xyz  = [ this.size / 2, 0, 0];

        this.top.transform.sx = this.size;
        this.bottom.transform.sx = this.size;
        this.left.transform.sy = this.size;
        this.right.transform.sy = this.size;

        if(this.covered){
            this.center.transform.sxyz = [0, 0, 1];
            this.top.transform.sy = this.size;
            this.bottom.transform.sy = this.size;
            this.left.transform.sx = this.size;
            this.right.transform.sx = this.size;
        }else{
            this.center.transform.sxyz = [this.size / 512, this.size / 512, 1];
            this.top.transform.sy = 0;
            this.bottom.transform.sy = 0;
            this.left.transform.sx = 0;
            this.right.transform.sx = 0;
        }

        this.parentScene.sortEntitiesByZ(true);
    }

    cover(callback, duration = 484){
        this.alignCenter();

        this.covered = true;
        this.visible = true;

        for(let t of this.currentTweens){
            this.removeComponent(t);
        }

        this.currentTweens.push(this.setTween({
            method: "easeIn",
            propParent: this.center.transform,
            property: "sx",
            to: 0,
            from: this.size / 512,
            duration: duration,
            onComplete: () => {
                if(callback){
                    // We're going to give this a 2 frame delay, so that we have a chance to show the whole screen covered before moving on
                    this.setTimeout(() => {
                        callback();
                        // this.visible = false;
                    }, 64);
                }else{
                    // this.visible = false;
                }
            }
        }));

        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.center.transform, property: "sy", to: 0, from: this.size / 512, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.top.transform,    property: "sy", to: this.size, from: 0, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.bottom.transform, property: "sy", to: this.size, from: 0, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.left.transform,   property: "sx", to: this.size, from: 0, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.right.transform,  property: "sx", to: this.size, from: 0, duration: duration }));
    }

    uncover(callback, duration = 484){
        this.alignCenter();

        this.covered = false;
        this.visible = true;

        for(let t of this.currentTweens){
            this.removeComponent(t);
        }

        this.currentTweens.push(this.setTween({
            method: "easeIn",
            propParent: this.center.transform,
            property: "sx",
            to: this.size / 512,
            from: 0,
            duration: duration,
            onComplete: () => {
                if(callback){
                    // We're going to give this a 2 frame delay, so that we have a chance to show the whole screen covered before moving on
                    this.setTimeout(() => {
                        callback();
                        this.visible = false;
                    }, 64);
                }else{
                    this.visible = false;
                }
            }
        }))

        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.center.transform, property: "sy", to: this.size / 512, from: 0, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.top.transform,    property: "sy", to: 0, from: this.size, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.bottom.transform, property: "sy", to: 0, from: this.size, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.left.transform,   property: "sx", to: 0, from: this.size, duration: duration }));
        this.currentTweens.push(this.setTween({ method: "easeIn", propParent: this.right.transform,  property: "sx", to: 0, from: this.size, duration: duration }));
    }
}