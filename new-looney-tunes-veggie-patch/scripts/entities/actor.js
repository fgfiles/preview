import * as Onyx from '../../lib/onyx/scripts/main.js';
import SimplePhysicsBody2D from '../simple-physics/body.js';

let ANIMATIONS;

export default class Actor extends Onyx.Entity {
    get state(){ return this._state }
    set state(val){
        let oldVal = this._state;

        this._state = val;

        if(this.states[val]){
            if(this.sprite){
                if(!Array.isArray(this.states[val])){
                    this.sprite.selectAnimation(this.states[val]);
                }else{
                    if(this.states[val][0] === "HIDDEN"){
                        this.sprite.visible = false;
                        return;
                    }else{
                        this.sprite.visible = true;
                    }
    
                    let rnd = Math.floor(Math.random() * this.states[val].length);
                    this.sprite.selectAnimation(this.states[val][rnd]);
                }
                this.sprite.currentAnimation.play();
            }

            if(val !== oldVal) this.onStateChange(val, oldVal);
        }else{
            console.warn(`State '${val}' not found.`, this);
        }
    }

    constructor({sprite = { src: "res/textures/nlt-gfug-0.json" }, animations = {}, states = {}, audio = {}, events = {}, collidable = false, pointerEvents = true, draggable = true, physics = true, interactive = true, gravityScale = 2, restitution = 0.5, terminalVelocity = 100, autoGroundLevel = true, defaultState = "idle", sortableY = true, canHold = [], canUse = []}, {cls = "actor", state = null, flipX = false, flipY = false, isDraggable = undefined, hasPointerEvents = undefined, isPersistent = true, limitedToWorld = true, position = [0, 0, 0], scale = [1, 1, 1], roll = 0, HSV = [0,0,0], data = {}}){
        super();

        this.constructorName = "Actor";

        this.transform.xyz = [...position];
        this.transform.sxyz = [...scale];

        this.interactive = interactive;
        this.pointerEvents = (hasPointerEvents !== undefined)?hasPointerEvents:pointerEvents;
        this.draggable = (isDraggable !== undefined)?isDraggable:draggable;
        this.physics = physics;
        this.gravityScale = gravityScale;
        this.restitution = restitution;

        this.data = JSON.parse(JSON.stringify(data));

        this.isPersistent = isPersistent;
        
        if(this.physics){
            this.body = this.addComponent(new SimplePhysicsBody2D({
                gravityScale,
                restitution,
                terminalVelocity,
                collidable,
                isSensor: true
            }));
                
            this.body.limitedToWorld = limitedToWorld;
        }

        this.className = cls;
        this.states = states;
        this._state = state || defaultState;
        this.audio = audio;
        this.isOnGround = false;
        this.sortableY = sortableY;
        this.autoGroundLevel = autoGroundLevel;

        this.posMouseDownStart = {x: 0, y: 0};

        this.zoom = 1;
        this._zoom = 1;
        this.holdZoom = 0;

        this.velocityX = 0;
        this.velocityY = 0;

        if(Array.isArray(sprite.src) || sprite.src.split(".").pop() == "json"){
            this.loadTexturePacker(sprite, animations, scale);
        }else{
            this.loadSprite(sprite, animations, scale);
        }

        for(let event of Object.keys(events)){
            this[event] = events[event];
        }

        this.canHold = canHold;
        this.canUse = canUse;
        this.heldItems = [];
        this.parentItems = [];

        this.roll = (roll)?Math.PI/2:0;

        this.HSV = new Float32Array(3);
        this.HSV.set(HSV);

        this.transform.roll = roll;

        this.flipX = flipX;
        this.flipY = flipY;

        this.isReady = false;
    }

    render(){
        if(!this.isReady || !this.sprite) return;

        // this.HSV[0] = (this.HSV[0] + 0.001) % 1;

        this.sprite.mesh.material.diffuseTexture = this.sprite.textures[this.sprite._materialIndex];

        super.render(...arguments);
    }

    update(){
        super.update(...arguments);

        if(!this.sprite || !this.parentScene) return;

        this.onUpdate();

        if(this.parentScene.selectedObject == this){
            if(this.holdZoom < 0.1) this.holdZoom += .1;
            this.transform.z = 91;
            for(let item of this.heldItems){
                item.transform.z = 0;
            }
        }else{
            if(this.holdZoom > 0) this.holdZoom -= .1;
            // if(this.sortableY) this.transform.z = 0;
            // for(let item of this.heldItems){
            //     item.transform.z = 0;
            // }
        }

        if(this._zoom < this.zoom) this._zoom += .2;
        if(this._zoom > this.zoom) this._zoom -= .2;
        this.transform.sx = (this._zoom + this.holdZoom) * ((this.flipX)?-1:1);
        this.transform.sy = (this._zoom + this.holdZoom) * ((this.flipY)?-1:1);

        if(!this.parentItems[0] && this.constructorName !== "WaterCan" && this.constructorName !== "Seeds") this.transform.roll = (this.roll)?Math.PI/2:0;

        this.setPhysicsBody();

        // if(this.physics && this.parentScene.selectedObject !== this) this.updatePhysics();
    }

    onSpawn(){
        super.onSpawn(...arguments);

        this.onReady();
    }

    onReady(){
        if(this.sprite && this.parentScene){
            this.setPhysicsBody();
            this.setGroundLevel(0);
            this.isReady = true;
        }else{
            return false;
        }
    }

    setPhysicsBody(){
        if(this.physics && this.body && this.sprite){
            if(this.roll){
                this.body.height = this.sprite.height * this.sprite.transform.sx;
                this.body.width = this.sprite.width * this.sprite.transform.sy;
                this.body.bottom = -this.body.width / 2;
                this.body.left = -this.body.height / 2;
            }else{
                this.body.width = this.sprite.width * this.sprite.transform.sx;
                this.body.height = this.sprite.height * this.sprite.transform.sy;

                if(this.sprite.currentAnimation){
                    this.body.left = -this.body.width * this.sprite.currentAnimation.currentFrame.pivotX;
                    this.body.bottom = -this.body.height * this.sprite.currentAnimation.currentFrame.pivotY;
                }else{
                    this.body.left = -(this.body.width / 2);
                    this.body.bottom = -(this.body.height / 2);
                }
            }

            // If this is a new height
            if(this.prevBottom && this.body.bottom !== this.prevBottom && this.autoGroundLevel) this.setGroundLevel(0);

            this.prevBottom = this.body.bottom;

            // Disable physics while holding
            if(this.parentScene.selectedObject == this){
                this.body.enabled = false;
            }else{
                this.body.enabled = true;
            }
        }
    }

    async loadSprite(sprite, animations = {}, scale = [1, 1, 1]){
        this.sprite = new Onyx.Sprite(sprite);
        this.initSprite(this.sprite, animations, scale);

        this.addComponent(this.sprite, animations, scale);

        this.state = this._state;

        this.onReady();
    }

    async loadTexturePacker(sprite, animations, scale = [1, 1, 1]){
        // Pull sprite's animations
        if(Object.keys(game.spritesheets[sprite.src.split("/").pop()].animations).length){
            ANIMATIONS = game.spritesheets[sprite.src.split("/").pop()].animations;
            game.spritesheets[sprite.src.split("/").pop()].animations = {};
        }

        this.sprite = await Onyx.ImportSpriteFromTexturePacker.cloneSprite(game.spritesheets[sprite.src.split("/").pop()], true);
        await this.initSprite(this.sprite, animations, scale);

        this.addComponent(this.sprite, animations, scale);

        this.state = this._state;

        this.onReady();
    }

    async initSprite(sprite, animations, scale = [1, 1, 1]){
        sprite.transform.sxyz = [scale[0] * game.SPRITE_SCALE, scale[1] * game.SPRITE_SCALE, scale[2] * game.SPRITE_SCALE];
        sprite.animations = {};

        this.sprite.mesh.material = game.materialColorized;
        // this.sprite.mesh.material = new MaterialSpriteColorized();

        // Remove all unused animations...
        // Find all used animations
        let usedAnims = [];
        for(let state of Object.values(this.states)){
            for(let animName of state){
                usedAnims.push(animName.split("=")[0]);
            }
        } 

        // Set animation speeds
        for(let name of Object.keys(animations)){

            let animation = ANIMATIONS[name];

            for(let i in animations[name].timing){
                animation.frames[i].speed = animations[name].timing[i];
            }

            if(animations[name].loop !== undefined) animation.loop = animations[name].loop;
        }

        // Parse animation sequence from folder title
        for(let name of Object.keys(ANIMATIONS)){
            // 
            let parsedName = name.split("=")[0];

            // If this isn't used...
            if(usedAnims.indexOf(parsedName) < 0){
                continue;
            }

            let animation = ANIMATIONS[name];

            sprite.animations[parsedName] = new Onyx.SpriteAnimation(animation, sprite);//Object.assign({}, animation);
            animation = sprite.animations[parsedName];
            
            // Set speeds
            for(let frame of animation.frames){
                frame.speed = 1000 / 8;
            }

            if(name.indexOf("=") > -1){
                // Parse order
                let sequenceArr = name.split("=")[1].split(",");
    
                // Set frame order
                // Clone, sort, and clear...
                let frames = animation.frames.sort((a, b) => {
                    if(a.name < b.name) return -1;
                    if(a.name > b.name) return 1;
                    return 0;
                });

                // frames.sort((a, b) => {return a.name < b.name});
                animation.frames = [];
                for(let step of sequenceArr){
                    if(step == ''){
                        // console.warn('space');
                        continue;
                    };

                    switch(step[0].toUpperCase()){
                        case 'E':
                        case 'S':
                                animation.loop = false;
                            break;
                        case 'P':
                            let frame = animation.frames[animation.frames.length - 1];
                            let range = step.replace("P", "").split("-");

                            if(!range[1]){
                                frame.speed = range[0] * 1000;
                            }else{
                                frame.onStart = () => {
                                    frame.speed = ((Math.random() * range[1]) + range[0]) * 1000;
                                }
                            }
                            break;
                        case 'R':
                            let frameIndex = step.replace("R", "") - 1;

                            animation.frames[animation.frames.length - 1].onComplete = () => {
                                animation.setFrame(frameIndex);
                            }
                            break;
                        case 'L':
                            animation.loop = true;
                            break;
                        default:
                            animation.frames.push(Object.assign({}, frames[step - 1]));
                    }
                }
            }
        }
    }

    save(){
        if(!this.isPersistent) return;

        return {
            cls: this.className,
            position: [...this.transform.xyz],
            scale: [this.sprite.transform.sx / game.SPRITE_SCALE, this.sprite.transform.sy / game.SPRITE_SCALE, this.sprite.transform.sz / game.SPRITE_SCALE],
            flipX: this.flipX,
            flipY: this.flipY,
            roll: this.roll,
            state: this.state
        }
    }

    onStateChange(newState, oldState){

    }

    getItem(className = "", remove = false){
        for(let item of this.heldItems){
            if(item.className === className){
                if(remove) this.removeItem(item);
                return item;
            }
        }
    }

    holdItem(item, hideItem){
        this.removeItem();

        this.heldItems.push(item);
        item.parentItems.push(this);
        if(item.body) item.body.enabled = false;
        this.addComponent(item);
        this.parentScene.remove(item);
        item.transform.xyz = [0, 0, 0];

        if(hideItem) item.sprite.visible = false;
    }

    removeItem(item = this.heldItems[0], toss = true){
        if(!item) return;

        this.heldItems.splice(this.heldItems.indexOf(item), 1);
        item.parentItems.splice(item.parentItems.indexOf(this), 1);
        if(item.body) item.body.enabled = true;
        this.removeComponent(item);
        this.parentScene.add(item);
        item.transform.xyz = [...this.transform.xyz];

        item.sprite.visible = true;
        item.setGroundLevel();

        if(toss && item.body){
            item.body.velocity[0] = (Math.random() > 0.5)?10:-10;
            item.body.velocity[1] = 20;
            item.transform.y -= 20;
        }
    }

    getNearestItem(maxDistance = Infinity, {offsetX = 0, offsetY = 0, excludeClasses = [], whitelistClasses = []} = {}){
        let closestItem;
        let closestDistance = maxDistance;

        for(let key of Object.keys(this.parentScene.actors)){
            for(let actor of Object.values(this.parentScene.actors[key])){
                if(actor !== this && excludeClasses.indexOf(actor.className) < 0 && (!whitelistClasses.length || whitelistClasses.indexOf(actor.className) >= 0 || whitelistClasses.indexOf(actor.constructorName) >= 0) && this.parentScene.entities.indexOf(actor) > -1 && actor.interactive){
                    let distance = this.getItemDistance(actor, {offsetX, offsetY});
                    if(distance < closestDistance){
                        closestItem = actor;
                        closestDistance = distance;         
                    }  
                }
            }
        }

        return closestItem;
    }

    getNearbyItems(maxDistance = Infinity, {offsetX = 0, offsetY = 0, excludeClasses = [], whitelistClasses = []} = {}){
        let closestItems = [];

        for(let key of Object.keys(this.parentScene.actors)){
            for(let actor of Object.values(this.parentScene.actors[key])){
                if(actor !== this && excludeClasses.indexOf(actor.className) < 0 && (!whitelistClasses.length || whitelistClasses.indexOf(actor.className) >= 0 || whitelistClasses.indexOf(actor.constructorName) >= 0) && this.parentScene.entities.indexOf(actor) > -1 && actor.interactive){
                    let distance = this.getItemDistance(actor, {offsetX, offsetY});
                    if(distance < maxDistance){
                        closestItems.push(actor);
                    }  
                }
            }
        }

        return closestItems;
    }

    getItemDistance(item, {offsetX = 0, offsetY = 0} = {}){
        let a = item.transform.x - this.transform.x - offsetX;
        let b = item.transform.y - this.transform.y - offsetY;

        return Math.sqrt( a*a + b*b );
    }

    setGroundLevel(offsetY = -100){
        if(this.body) this.body.bounds.bottom = Math.min(this.transform.y + this.body.bottom + offsetY, this.parentScene.groundEndY);
    }

    onUpdate(){

    }

    onMouseDown(evt){
        if(!this.pointerEvents) return;

        this.posMouseDownStart.x = this.parentScene.mouseState.position.x;
        this.posMouseDownStart.y = this.parentScene.mouseState.position.y;

        if(this.draggable || this.parentScene.editMode){
            this.parentScene.selectedObject = this;
            this.parentScene.selectedActorStartPos = [...this.transform.xyz];
            this.onStartDrag(evt);
            // game.playSFX("SO-GL-pickup");
        }else if(this.parentItems.length){
            this.parentItems[0].onMouseDown(evt);
        }
    }

    onMouseUp(evt){
        if(!this.pointerEvents) return;
        if(this.parentScene.selectedObject !== this){
            if(this.parentScene.selectedObject) this.parentScene.selectedObject.onMouseUp(evt);
            return;
        }

        // game.playSFX("SO-GL-drop-02");
        //this.onDroppedItem(evt, this.parentScene.selectedObject);

        var a = this.posMouseDownStart.x - this.parentScene.mouseState.position.x;
        var b = this.posMouseDownStart.y - this.parentScene.mouseState.position.y;
        // let distance = Math.sqrt( a*a + b*b );

        if(Math.abs(b) > 15){
            this.setGroundLevel();
        }

        // Check for anything under it
        let rect = this.parentScene.viewports[0].contextElement.getBoundingClientRect();
        let offsetX = Math.round(evt.clientX - rect.left);
        let offsetY = Math.round(evt.clientY - rect.top);
        // this.visible = false;
        // this.sprite.visible = false;
        let index = this.index;
        this.index = -1;
        this.parentScene.viewports[0].renderPick(0, this.parentScene, [this.parentScene], this.parentScene.transform.localMatrix, undefined, undefined, offsetX, offsetY, {type: "mousedrop", item: this}, this.parentScene.mouseEventRadius, () => {
            this.index = index;
            // this.visible = true;
            // this.sprite.visible = true;

            // Remove selection
            this.parentScene.selectedObject = null;
        });

        // Play random ricochet sfx
        if(this.body && Math.abs(this.body.velocity[0]) > 50){
            game.playSFX("SO-ricochet-" + "ABC"[Math.floor(Math.random() * 3)]);
        }
    }

    onMouseDrop(evt){
        // TODO: This is because we're firing a virtual "click" to determine if something is dropped below it. Change the way the render pick works so it goes direct to onMouseUp?
        if(evt.item !== this) this.onDroppedItem(evt, evt.item);
        // evt.item.onDroppedItem(evt, this);
    }

    onStartDrag(evt){
        this.isOnGround = false;
    }

    onDroppedItem(evt, item){
        // console.log("Dropped ", evt, item.className);
        let itemUsed = false;

        // Check for state of holding item
        for(let state of Object.keys(this.states)){
            if(state.toLowerCase() === "attached-" + item.className.toLowerCase()){
                this.state = state;
                if(this.parentItems[0]) this.parentItems[0].removeItem(this, false);

                this.holdItem(item, false);

                itemUsed = true;
            }

            if(state.toLowerCase() === "holding-" + item.className.toLowerCase()){
                if(this.parentItems[0]) this.parentItems[0].removeItem(this, false);
                this.state = state;

                this.holdItem(item, true);

                if(item.className !== "OB-Mask"){
                    if(this.sprite.currentAnimation.frames.length > 1) this.sprite.currentAnimation.callback = () => {
                        this.removeItem(item);
                        this.state = "idle";
                    }
                }

                itemUsed = true;
            }

            if(state.toLowerCase() === "consume-" + item.className.toLowerCase()){
                let s = "idle";//this.state;
                this.state = state;

                this.sprite.playAnimation(this.states[state][0], () => {
                    this.state = s;
                });

                if(item.HSV[0]) this.HSV[0] = item.HSV[0];
                if(item.HSV[1]) this.HSV[1] = item.HSV[1];
                if(item.HSV[2]) this.HSV[2] = item.HSV[2];

                this.removeItem();

                this.parentScene.removeActor(item);

                if(this.className === "Squeaks"){
                    game.playSFX("SO-SS-Eats-mix");
                }else if(this.className === "DaffyDuck"){
                    game.playSFX("SO-Gulp");
                }else if(this.className === "Taz"){
                    game.playSFX("SO-TD-SpinChew-mix");
                }else{
                    game.playSFX("SO-GL-crunch2");
                }

                itemUsed = true;

                if(item.clean) item.clean();
            }
        }

        // Check for item's state of being held
        for(let state of Object.keys(item.states)){
            if(state.toLowerCase() === "held-" + this.className.toLowerCase()){
                item.state = state;
                
                itemUsed = true;
            }
        }

        if(!itemUsed && this.states["reject"]){
            if(this.parentItems[0]) this.parentItems[0].removeItem(this, false);

            let s = "idle";//this.state;
            this.state = "reject";
            // item.holdItem(this, false);

            if(item.body){
                item.body.velocity[0] = (Math.random() > 0.5)?10:-10;
                item.body.velocity[1] = 20;
                item.transform.y -= 20;
            }

            this.sprite.playAnimation(this.states["reject"][0], () => {
                this.state = s;
            });

            this.removeItem();

            game.playSFX("SO-Reject");
        }
    }

    onHitFloor(event){
        this.isOnGround = true;
    }

    addBubble(type = "Water", {x = 20, y = 0, z = 0} = {}){
        this.bubble = this.parentScene.addActor({
            cls: "FX-Bubble-" + type,
            position: [x, y, z],
            draggable: false,
            isPersistent: false
        }, false);

        this.addComponent(this.bubble);
    }

    removeBubble(){
        if(!this.bubble) return;

        this.parentScene.removeActor(this.bubble);

        this.removeComponent(this.bubble);

        this.bubble = null;
    }

    onCollide(event, item){
        // console.log(`Collide: ${this.className}:${item.className}`);
    }

    paint(){
        this.HSV[0] = Math.random();
        this.HSV[1] = (Math.random() / 4) - 0.125;
        this.HSV[2] = (Math.random() / 4) - 0.125;

        for(let item of this.heldItems) item.paint();
        if(this.plant) this.plant.paint();
    }
}