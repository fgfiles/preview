import * as Onyx from '../lib/onyx/scripts/main.js';

import CONFIG from './config/config.js';

import TransitionCircle from './entities/transition-circle.js';
import SimplePhysicsWorld2D from './simple-physics/world.js';

import Actor from './entities/actor.js';

const CAMERA_SHAKE_FORCE = 20;
const CAMERA_SHAKE_DECAY = 0.95;
const CAMERA_SHAKE_TIME = 5000;

const EDITOR_ENABLED = false;

export default class GameScene extends Onyx.Scene{
    constructor(){
        super();

        this.CONFIG = CONFIG;

        this.editMode = false;

        this.actors = {};
        this.classes = {};

        this.selectedObject = null;
        this.selectedPointerStartPos = [0, 0];
        this.selectedActorStartPos = [0, 0];
        this.hoverItem = null;

        this.currentScale = 0;
        this.lastScale = 0;

        this.savedStates = {};

        this.mouseState = {
            isTouch: false,
            position: {x: 0, y: 0},
            buttons: []
        };
    }

    onload(){
        // this.viewports[0].id = 0; // Hack so it doesn't reload the textures (It's creating a new viewport object every scene)
        this.viewports = game.router.map.preloader.module.viewports;

        let camera = new Onyx.Camera({
            projectionType: "orthographic",
            transform: new Onyx.Transform({
                position: [0, 0, 100]
            })
        });
        this.add(camera);
        this.viewports[0].bindToCamera(camera);

        camera.velocityX = 0;
        camera.velocityY = 0;

        this.viewports[0].clearColor.set(0, 0, 0);

        this.loadScene();
        this.setupListeners();

        // this.viewports[0].renderPick(0, this, [this], this.transform.localMatrix, undefined, undefined, 0, 0, {}, this.mouseEventRadius);

        camera.visible=false;

        // Editor
        this.loadActorClasses();
    }

    async loadScene(layoutName = CONFIG.meta.defaultLayout, layout = CONFIG.layout[layoutName]){
        Onyx.Entity.resetIndex(100);

        // Physics world
        this.world = this.addComponent(new SimplePhysicsWorld2D({
            bounds: layout.bounds
        }));

        // Scene properties
        this.width = this.world.bounds.right;
        this.height = this.world.bounds.top;
        this.groundEndY = layout.groundEndY;

        // Camera
        this.cameras[0].transform.xyz = layout.cameraPosition;
        this.cameras[0].transform.sxyz = layout.cameraScale || [1, 1, 1];

        this.limitCameraScale = this.height / this.viewports[0].orthoHeight;
        this.lastScale = this.currentScale = this.limitCameraScale;

        // this.cameras[0].limit = {
        //     minimum: {
        //         x: 0,
        //         y: 0,
        //         z: null
        //     },
        //     maximum: {
        //         x: this.width - (this.viewports[0].orthoHeight * (16/9)),
        //         y: this.height - (this.viewports[0].orthoHeight),
        //         z: null
        //     }
        // }

        // Actors
        for(let actor of Object.values(layout.actors)){
            this.addActor(actor);
        }

        if(!this.transitionCircle){
            // Iris wipe 
            this.transitionCircle = new TransitionCircle(99);
            this.add(this.transitionCircle);

            window.t = this.transitionCircle;
        }

        this.transitionCircle.alignCenter();
        return new Promise((resolve, reject) => {
            game.stopAllMusic(0, true);

            this.setTimeout(() => {
                // Start music
                this.music = layout.music;
                game.playMusic(this.music);

                this.transitionCircle.uncover(() => {
                    resolve();
                });
            }, 500);
        })
    }

    async unloadScene(){
        // Stop music
        game.stopAllMusic();
        game.stopAllSFX(500);

        return new Promise((resolve, reject) => {
            this.transitionCircle.cover(() => {
                this.selectedObject = null;
                this.panning = false;

                // Set a timeout to give any held items a chance to resolve being dropped (e.g. watercan stop making sfx)
                this.setTimeout(() => {
                    this.removeComponent(this.world);
    
                    for(let actorClass of Object.values(this.actors)){
                        for(let actor of actorClass){
                            this.remove(actor);
                        }
                    }
    
                    // Clear
                    this.actors = {};
    
                    resolve();
                }, 100);
            });
        });
    }

    async changeScenes(layoutName, layout){
        await this.unloadScene();

        await this.loadScene(layoutName, layout);
    }

    addActor(actor, addToScene = true){
        let actorClass = actor.cls;
        let newActor;

        if(CONFIG.classes[actorClass].behavior){
            newActor = new CONFIG.classes[actorClass].behavior(CONFIG.classes[actorClass], actor);
        }else{
            newActor = new Actor(CONFIG.classes[actorClass], actor);
        }

        if(!this.actors[actorClass]) this.actors[actorClass] = [];
        this.actors[actorClass].push(newActor);

        if(addToScene) this.add(newActor);

        return newActor;
    }

    removeActor(actor, removeFromScene = true){
        if(!actor) return;

        let index = this.actors[actor.className].indexOf(actor);

        this.actors[actor.className].splice(index, 1);

        if(removeFromScene) this.remove(actor);
    }

    setupListeners(){
        // Listen for mouse/touch events
        // this.viewports[0].listenForMouseEvents({scene: this});

        let updateMousePos = (ev) =>{
            this.cameraPanLeft = false;
            this.cameraPanRight = false;
            this.cameraPanUp = false;
            this.cameraPanDown = false;

            let rect = this.viewports[0].contextElement.getBoundingClientRect();
            let scale = this.viewports[0].orthoHeight / rect.height;
            
            let x = ev.clientX;
            let y = ev.clientY;

            if(ev.targetTouches && ev.targetTouches[0]){
                x = ev.targetTouches[0].clientX;
                y = ev.targetTouches[0].clientY;
            }

            if(ev.center){
                x = ev.center.x;
                y = ev.center.y;
            }

            // Offset
            x -= rect.left;
            y -= rect.top;

            // Inverse Y
            y = rect.height - y;

            // Push against edges
            if(x / rect.width < 0.05){
                this.cameraPanLeft = true;
            }

            if(x / rect.width > 0.95){
                this.cameraPanRight = true;
            }

            if(y / rect.height < 0.05){
                this.cameraPanUp = true;
            }

            if(y / rect.height > 0.95){
                this.cameraPanDown = true;
            }

            // Scale
            x *= scale * this.cameras[0].transform.sx;
            y *= scale * this.cameras[0].transform.sy;

            this.mouseState.position.x = x;
            this.mouseState.position.y = y;
        }

        // Listen for gestures (using HammerJS)
        var hammertime = new Hammer(this.viewports[0].contextElement);
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime.get('pinch').set({ enable: true });
        hammertime.get('pan').requireFailure('pinch');
        hammertime.get('press').set({ time: 0 });
        // hammertime.get('tap').set({ taps: 2 });
        // hammertime.get('pressup').set({ time: 0 });
        // hammertime.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
        // hammertime.add( new Hammer.Tap({ event: 'singletap' }) );
        // hammertime.get('doubletap').recognizeWith('singletap');
        // hammertime.get('singletap').requireFailure('doubletap');

        hammertime.on('panstart', (ev) => {
            this.panning = true;

            updateMousePos(ev);

            if(!this.selectedObject){
                this.selectedActorStartPos = [...this.cameras[0].transform.xyz];
            }else{
                this.selectedActorStartPos = [...this.selectedObject.transform.xyz];
                this.selectedObject.isDragged = true;
            }
        });

        hammertime.on('panend', (ev) => {
            if(!this.panning) return;

            this.panning = false;

            // Scale touch velocity different than mouse
            let scale = this.viewports[0].getDevicePixelRatio() * this.cameras[0].transform.sx;

            if(!this.selectedObject){
                this.cameras[0].velocityX = ev.velocityX * 17 * scale;
                this.cameras[0].velocityY = -ev.velocityY * 17 * scale;
            }else{
                if(this.selectedObject.body){
                    this.selectedObject.body.velocity[0] = ev.velocityX * 17 * scale;
                    this.selectedObject.body.velocity[1] = -ev.velocityY * 17 * scale;
                    // this.selectedObject.onMouseUp();
                }
            }
        });

        hammertime.on('pan', (ev) => {
            updateMousePos(ev);

            if(!this.panning) return;

            if(ev.overallVelocityX || ev.overallVelocityY){
                let scale = (this.viewports[0].orthoHeight / ev.target.clientHeight) * this.cameras[0].transform.sx;

                if(!this.selectedObject){
                    this.cameras[0].transform.x = this.selectedActorStartPos[0] - (ev.deltaX * scale);
                    this.cameras[0].transform.y = this.selectedActorStartPos[1] + (ev.deltaY * scale);
                    // this.cameras[0].velocityX = -ev.velocityX * 17;               
                }else{
                    // this.selectedObject.transform.x = Math.min(Math.max(this.selectedActorStartPos[0] + (ev.deltaX * scale), 0), this.width);
                    // this.selectedObject.transform.y = Math.min(Math.max(this.selectedActorStartPos[1] - (ev.deltaY * scale), 0), this.width);
                    this.selectedObject.transform.x = this.selectedActorStartPos[0] + (ev.deltaX * scale);
                    this.selectedObject.transform.y = this.selectedActorStartPos[1] - (ev.deltaY * scale);
                }
            }

            // this.viewports[0].renderPick(0, this, [this], this.transform.localMatrix, undefined, undefined, 0, 0, {eventType: "mousemove"}, this.mouseEventRadius);
        });

        hammertime.on('pinchstart', function(ev) {
            this.lastScale = this.currentScale;
            this.panning = false;
        });
        hammertime.on('pinchend', function(ev) {
            this.lastScale = this.currentScale;
            this.panning = false;
        });

        hammertime.on('pinchmove', (ev) => {
            this.currentScale = Math.max(Math.min(this.lastScale * (1 / ev.scale), this.limitCameraScale), 0.5);

            let oldHeight = this.viewports[0].orthoHeight * this.cameras[0].transform.sy;
            
            this.cameras[0].transform.sx = this.currentScale;
            this.cameras[0].transform.sy = this.currentScale;

            updateMousePos(ev);

            // center
            // Get difference
            let newHeight = this.viewports[0].orthoHeight * this.cameras[0].transform.sy;
            let difference = oldHeight - newHeight;
            this.cameras[0].transform.x += (difference * (16/9)) * (this.mouseState.position.x / (newHeight * (16/9)));
            this.cameras[0].transform.y += difference * (this.mouseState.position.y / newHeight);
        });

        window.addEventListener("wheel", event => {
            const delta = Math.sign(event.deltaY);
            let speed = 0.03;

            let oldHeight = this.viewports[0].orthoHeight * this.cameras[0].transform.sy;

            this.cameras[0].transform.sx = Math.max(Math.min(this.cameras[0].transform.sx + (speed * delta), this.limitCameraScale), 0.5);
            this.cameras[0].transform.sy = Math.max(Math.min(this.cameras[0].transform.sy + (speed * delta), this.limitCameraScale), 0.5);

            updateMousePos(event);

            // center
            // Get difference
            let newHeight = this.viewports[0].orthoHeight * this.cameras[0].transform.sy;
            let difference = oldHeight - newHeight;
            this.cameras[0].transform.x += (difference * (16/9)) * (this.mouseState.position.x / (newHeight * (16/9)));
            this.cameras[0].transform.y += difference * (this.mouseState.position.y / newHeight);
        });
        
        // hammertime.on("tap", (ev) => {
        //     let oldHeight = this.viewports[0].orthoHeight * this.cameras[0].transform.sy;

        //     if(this.cameras[0].transform.sx >= this.limitCameraScale - 0.01){
        //         this.cameras[0].transform.sx = 0.5;
        //         this.cameras[0].transform.sy = 0.5;
        //     }else{
        //         this.cameras[0].transform.sx = this.limitCameraScale;
        //         this.cameras[0].transform.sy = this.limitCameraScale;
        //     }

        //     updateMousePos(ev);
            
        //     // center
        //     // Get difference
        //     let newHeight = this.viewports[0].orthoHeight * this.cameras[0].transform.sy;
        //     let difference = oldHeight - newHeight;
        //     this.cameras[0].transform.x += (difference * (16/9)) * (this.mouseState.position.x / (newHeight * (16/9)));
        //     this.cameras[0].transform.y += difference * (this.mouseState.position.y / newHeight);
        // });

        window.addEventListener("mousedown", (ev) => {
            this.viewports[0].contextElement.style.cursor = "grabbing";

            updateMousePos(ev);
        });

        window.addEventListener("touchstart", (ev) => {
            updateMousePos(ev);
        });
        
        window.addEventListener("mouseup", (ev) => {
            this.viewports[0].contextElement.style.cursor = "grab";

            if(ev.target !== this.viewports[0].contextElement) this.selectedObject = null;
        });

        window.addEventListener("touchend", (ev) => {
            if(ev.target !== this.viewports[0].contextElement) this.selectedObject = null;

            this.lastScale = this.currentScale;
            this.cameraPanLeft = false;
            this.cameraPanRight = false;
            this.cameraPanUp = false;
            this.cameraPanDown = false;
        });

        let mouseleave = (ev) => {
            this.cameraPanLeft = false;
            this.cameraPanRight = false;
            this.cameraPanUp = false;
            this.cameraPanDown = false;
        };

        this.viewports[0].contextElement.addEventListener("mouseleave", mouseleave);
        this.viewports[0].contextElement.addEventListener("touchleave", mouseleave);
        
        this.viewports[0].contextElement.addEventListener("mousemove", updateMousePos);
        this.viewports[0].contextElement.addEventListener("touchmove", updateMousePos);

        window.addEventListener("keypress", (evt) => {
            // console.log(evt);

            if(evt.key === "~" || evt.key === "`"){
                this.toggleEditor();
            }

            if(this.editMode && this.selectedObject){
                if(evt.key === "x"){
                    this.selectedObject.flipX = !this.selectedObject.flipX;
                }
    
                if(evt.key === "y"){
                    this.selectedObject.flipY = !this.selectedObject.flipY;
                }
    
                if(evt.key === "r"){
                    this.selectedObject.roll = !this.selectedObject.roll;
                }
    
                if(evt.key === "r"){
                    this.selectedObject.roll = !this.selectedObject.roll;
                }
    
                if(evt.key === "+" || evt.key === "="){
                    this.selectedObject.sprite.transform.sx += 0.05;
                    this.selectedObject.sprite.transform.sy += 0.05;
                }

                if(evt.key === "-"){
                    this.selectedObject.sprite.transform.sx -= 0.05;
                    this.selectedObject.sprite.transform.sy -= 0.05;
                }
            }

            if(evt.key === "e"){
                game.toggleErrorConsole();
            }
        });

        // // Set mouse cursor
        this.viewports[0].contextElement.style.cursor = "grab";
    }

    update(dt){
        if(!this.editMode) super.update(...arguments);

        if(this.cameraPanLeft) this.cameras[0].velocityX += 1.2;
        if(this.cameraPanRight) this.cameras[0].velocityX -= 1.2;
        if(this.cameraPanUp) this.cameras[0].velocityY += 1.2;
        if(this.cameraPanDown) this.cameras[0].velocityY -= 1.2;

        this.cameras[0].velocityX *= 0.9;
        this.cameras[0].velocityY *= 0.9;
        
        this.cameras[0].transform.x -= this.cameras[0].velocityX;
        this.cameras[0].transform.y -= this.cameras[0].velocityY;

        let oldX = this.cameras[0].transform.x;
        let oldY = this.cameras[0].transform.y;

        this.cameras[0].transform.x = Math.min(Math.max(this.cameras[0].transform.x, 0), this.width - ((this.viewports[0].orthoHeight * (16/9)) * this.cameras[0].transform.sx));
        this.cameras[0].transform.y = Math.min(Math.max(this.cameras[0].transform.y, 0), this.height - (this.viewports[0].orthoHeight * this.cameras[0].transform.sy));
        
        this.cameras[0].transform.sx = Math.max(Math.min(this.cameras[0].transform.sx, this.limitCameraScale), 0.5);
        this.cameras[0].transform.sy = Math.max(Math.min(this.cameras[0].transform.sy, this.limitCameraScale), 0.5);
        
        if(this.selectedObject){
            if(oldX === this.cameras[0].transform.x){
                this.selectedObject.transform.x -= this.cameras[0].velocityX;
                this.selectedActorStartPos[0] -= this.cameras[0].velocityX;
            }

            if(oldY === this.cameras[0].transform.y){
                this.selectedObject.transform.y -= this.cameras[0].velocityY;
                this.selectedActorStartPos[1] -= this.cameras[0].velocityY;
            }
        }

        this.sortEntitiesByY();
    }

    sortEntitiesByY(){
        for(let entity of this.entities){
            if(entity.className && entity.sortableY){
                let y = 0;

                if(entity.body){
                    // y = entity.transform.y;
                    // y -= entity.body.bottom;
                    y = entity.body.bounds.bottom; // based on entity's ground pos
                }else{
                    y = entity.transform.y;
                }

                let z = 3 - (y / 10000);
                
                if(entity.className.indexOf("Particle") > -1) z += 1;

                if(this.selectedObject === entity) z += 1;

                entity.transform.z = z;
            }
        }

        this.sortEntitiesByZ(true); // Inverse
    }

    getItemsByClass(className){
        let items = [];

        if(this.actors[className]) items.push(...this.actors[className]);

        for(let cls of Object.values(this.actors)){
            if(cls.length && cls[0].constructorName === className) items.push(...cls);
        }

        return items;
    }

    onMouseUp(event){
        if(!this.selectedObject) return;

        // // Set ground level for object
        this.selectedObject.setGroundLevel();

        // Fire mouse event
        this.selectedObject.onMouseUp(event);

        // // Check for anything under it
        // this.selectedObject.visible = false;
        // this.viewports[0].renderPick(0, this, [this], this.transform.localMatrix, undefined, undefined, event.offsetX, event.offsetY, event, this.mouseEventRadius);
        // this.selectedObject.visible = true;

        // Remove selection
        this.selectedObject = null;
    }

    onMouseOver(){
        this.hoverItem = null;
    }

    shakeCamera(){
        let shake = CAMERA_SHAKE_FORCE;
        let polarity = 1;
        this.setInterval(() => {
            var angle = (Math.random() * Math.PI) * polarity;
            var px = Math.cos(angle) * shake;
            var py = Math.sin(angle) * shake;

            this.cameras[0].transform.x += px;
            this.cameras[0].transform.y += py;

            shake *= CAMERA_SHAKE_DECAY;
            polarity = (polarity === 1)?-1:1;
        }, 0, CAMERA_SHAKE_TIME / (1000/60));
    }

    save(stateName){
        let jsonObj = {
            music: this.music,
            gravity: this.world.gravity,
            bounds: this.world.bounds,
            cameraPosition: [...this.cameras[0].transform.xyz],
            cameraScale: [...this.cameras[0].transform.sxyz],
            groundEndY: this.groundEndY,
            actors: []
        };
        
        for(let actorClass of Object.keys(this.actors)){
            for(let actor of this.actors[actorClass]){
                if(actor.save()) jsonObj.actors.push(actor.save())
            }
        }

        if(EDITOR_ENABLED) document.getElementById('json').value = 'export default ' + JSON.stringify(jsonObj);
    }

    load(jsonText = document.getElementById('json').value){
        if(!jsonText) return;

        try{
            if(jsonText instanceof Object){
                this.setTimeout(() => this.changeScenes(undefined, jsonText));
            }else{
                let jsonObj = JSON.parse(jsonText.replace('export default ', ''));
                this.setTimeout(() => this.changeScenes(undefined, jsonObj));
            }

            this.toggleEditor(false);
        }catch(e){

        }
    }

    saveState(stateName){
        let state = {
            entities: [...this.entities],
            entityIndex: Onyx.Entity.getIndex(),
            components: [...this.components],
            actors: this.actors,
            world: this.world,
            cameraTransform: {xyz: [...this.cameras[0].transform.xyz], sxyz: [...this.cameras[0].transform.sxyz]},
            width: this.width,
            height: this.height,
            groundEndY: this.groundEndY,
            music: [],
            sfx: []
        }

        for(let key of Object.keys(game.music)){
            let snd = game.music[key];

            if(snd.playing()){
                state.music.push({
                    name: key,
                    seek: snd.seek()
                });
            }
        }

        for(let key of Object.keys(game.sfx)){
            let snd = game.sfx[key];

            if(snd.playing()){
                state.sfx.push({
                    name: key,
                    seek: snd.seek()
                });
            }
        }

        if(stateName) this.savedStates[stateName] = state;

        return state;
    }

    async loadState(stateName){
        await this.unloadScene();

        let state = this.savedStates[stateName];

        if(!state) throw new Error("State not found");

        // Actors
        this.entities = [...state.entities];
        this.actors = state.actors;
        // for(let entity of this.entities){
        //     let actorClass = entity.className;

        //     if(actorClass){
        //         if(!this.actors[actorClass]) this.actors[actorClass] = [];
        //         this.actors[actorClass].push(entity);
        //     }
        // }

        // Components
        this.components = [...state.components];

        // World
        this.world = state.world;

        this.width = state.width;
        this.height = state.height;
        this.groundEndY = state.groundEndY;

        // Camera
        this.cameras[0].transform.xyz = state.cameraTransform.xyz;
        this.cameras[0].transform.sxyz = state.cameraTransform.sxyz;
        this.limitCameraScale = this.height / this.viewports[0].orthoHeight;
        this.lastScale = this.currentScale = this.limitCameraScale;

        Onyx.Entity.resetIndex(state.entityIndex);

        for(let snd of state.music){
            game.playMusic(snd.name);
            game.music[snd.name].seek(snd.seek);
        }

        for(let snd of state.sfx){
            game.playSFX(snd.name);
            game.sfx[snd.name].seek(snd.seek);
        }

        this.transitionCircle.alignCenter();
        this.setTimeout(() => {
            this.transitionCircle.uncover();
        }, 400);
    }

    toggleEditor(enabled = !this.editMode){
        if(!EDITOR_ENABLED) return;
        
        this.editMode = enabled;

        let el = document.getElementById('editor');
        if(!this.editMode){
            el.style.display = "none";
        }else{
            el.style.display = "";
        }
    }

    loadActorClasses(){
        let el = document.getElementById('actor-classes');
        el.innerHTML = "";

        let ignore = ["Plant-Pot", "OB-Seeds-PU", "OB-Seeds-MU", "OB-Seeds-Empty", "OB-Fertilizer"];

        for(let actorClass of Object.keys(CONFIG.classes)){
            if(ignore.indexOf(actorClass) > -1) continue;

            let opt = document.createElement("option");
            opt.value = actorClass;
            opt.innerHTML = actorClass;
            
            el.appendChild(opt);
        }
    }

    addActorToScene(flipX){
        let cls = document.getElementById('actor-classes').value;
        let scale = 1;

        if(cls === "OB-Apple"){
            scale = 0.35;
        }

        if(cls === "OB-AirHorn"){
            scale = 1.25;
        }

        if(cls === "OB-Spray"){
            scale = 1.20;
        }

         this.addActor({
            cls: cls,
            position: [this.cameras[0].transform.x + 400, this.cameras[0].transform.y + 1000, 1],
            scale: [scale, scale, 1],
            flipX: flipX
        }, true);
    }

    togglePhysics(){
        this.world.enabled = !this.world.enabled;
    }
}