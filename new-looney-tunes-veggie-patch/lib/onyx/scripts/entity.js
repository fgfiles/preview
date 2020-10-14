import { mat4, vec3, vec4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { Timer, Transform, Tween } from './main.js';


let _id = 0;
let _index = 0;
export class Entity {
    constructor({id = _id++, components = [], enabled = true, visible = true, pointerEvents = true, transform = new Transform()} = {}){
        // Extend _priv vars
        if(!this._priv){
            this._priv = {
                events: []
            };
        }

        if(!this._priv.events) this._priv.events = [];
		
        this.id = id;
        this.index = _index++;
        
        this.enabled = enabled;
        this.visible = visible;
		this.opacity = 1.0;
        this.pointerEvents = pointerEvents;

        this.parentScene = null;

		this.components = components;

        this.transform = transform;
        
        this.tMatrix = mat4.create();
	}

	/**
	 * Called on every Scene update
	 */
	update(dt, scene) {
        for(var i = 0; i < this.components.length; i++){
            if(this.components[i].enabled){
                this.components[i].update(dt, scene, this);
            }
		}
	}

	/**
	 * Called on every Scene render
	 */
	render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, materialOverride, frameBufferTextureStack) {
		stack.push(this);

        // Calculate model matrix
        if(modelMatrix){
            mat4.mul(this.tMatrix, modelMatrix, this.transform.localMatrix);
        }else{
            mat4.copy(this.tMatrix, this.transform.localMatrix);
        }

        for(var i = 0; i < this.components.length; i++){
            if(this.components[i].visible){
                // matrix is being multiplied by other children's
                this.components[i].render(dt, scene, viewport, camera, stack, viewMatrix, this.tMatrix, materialOverride, frameBufferTextureStack);
            }
        }
        
		stack.pop();
	}

	/**
	 * Add a new component
	 */
	addComponent( component ) {
        this.components.push( component );

        component.parentScene = this.parentScene;

        return component;
    }
    
    /**
	 * Add a new component
	 */
	removeComponent( component ) {
        if(this.components.indexOf(component) <= -1) return;
        
		this.components.splice( this.components.indexOf(component), 1 );
        
        return component;
	}

	/**
	 * Called on every Scene render pick
	 */
	renderPick( viewport, camera, entityId ) {
        if(!this.visible || !this.pointerEvents) return;
        
		for(var i = 0; i < this.components.length; i++){
            if(this.components[i].visible){
                if(this.components[i].renderPick) this.components[i].renderPick( viewport, camera, this, entityId );
            }
		}
    }
    
    findByIndex(index){
        if(this.index === index) return this;

		for(var i = 0; i < this.components.length; i++){
            if(this.components[i].index === index) return this.components[i];

            // TODO: Optimize
            if(this.components[i].findByIndex && this.components[i].findByIndex(index)) return this.components[i].findByIndex(index);
        }
    }

    registerHandler(...args){
        // keep track of eventhandlers so we can remove them on destroy
        // this._priv.events.push();
    }

    unregisterHandler(){
        
    }

    onload(){
        for(let event of this._priv.events){
            this.registerHandler(event);
        }
    }

    onunload(){
        for(let event of this._priv.events){
            this.unregisterHandler(event);
        }
    }

    /**
	 * Called every time the object is added to the scene
	 */
    onSpawn( scene ){
        this.parentScene = scene;
    }

	/**
	 * Called every time the object is removed from the scene
	 */
	onDestroy( scene ) {
        
    }
    
    onMouseDown( event ){

    }
    
    onMouseUp( event ){

    }
    
    onMouseOver( event ){

    }

    onMouseDrop( event ){

    }

	setTimeout( callback, delay ) {
		let timer = new Timer();
		this.addComponent( timer );
        
        timer.setTimeout(( entity, dt, progress ) => {
            this.removeComponent(timer);
			if(callback) callback();
		}, delay );

		return timer;
	}

	setInterval( callback, delay = 0, intervalCount = 0 ) {
		let timer = new Timer();
		this.addComponent( timer );
        
        timer.setInterval(( entity, dt, progress ) => {
			if(callback) callback();
		}, delay, intervalCount );

		return timer;
	}

	setModulate( callback, delay ) {
		let timer = new Timer();
		this.addComponent( timer );
        
        timer.setModulate(( entity, dt, progress ) => {
			if(callback) callback(entity, dt, progress);
		}, delay );

		return timer;
	}
    
    setTween({propParent = this, property, to, from, duration, method, onComplete}){
        let t = new Tween({ propParent, property, to, from, duration, method, callback: () => {
            if(onComplete) onComplete();

            this.removeComponent(t);
        }});
        this.addComponent(t);

        return t;
    }

    // TODO
    emit(id, ...args){
        for(let event of this._priv.events){
            if(event.event == id){
                event.target[event.property].apply(this, args);
            }
        }
    }

    static resetIndex(val = 0){
        _index = val;
    }

    static getIndex(){
        return _index;
    }
}