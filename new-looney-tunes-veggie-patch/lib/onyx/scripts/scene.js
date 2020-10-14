import { CONST, Color, Camera, Entity, Light, DirectionalLight, PointLight, SpotLight, RenderPass, RenderPassShadow, Viewport } from './main.js';

export class Scene extends Entity {
    constructor({template = null, templateURL = null, sceneURL = null, element = "", clock = null} = {}){
        super();

        this.viewports = [];
        this.viewportElements = [];
        
		this.entities = [];
		this.removeEntities = []; // For deferred removal

        this.cameras = [];
        this.lights = [];

        this.renderPasses = [new RenderPassShadow({
            renderPasses: [new RenderPass()]
        })];

        // this.renderPasses = [new RenderPass()];

        this.templateURL = templateURL; // TODO: Should this whole "template" thing be in a "Route" class?
        this.sceneURL = sceneURL;

        this.template = template;

        this.clock = clock;

        this.ambientLightColor = new Color(0.05, 0.05, 0.05, 1.0);

        this.directionalLight = new DirectionalLight({
            id: "DirectionalLight_Default",
            diffuseColor: new Color(0.5, 0.5, 0.5, 1),
            intensity: 2,
            vector: [-0.85, -0.8, -0.75]
        });

        this.fogColor = new Color(1.0, 1.0, 1.0, 1.0);
        this.fogDensity = 0.0;

        if(element){
            this.element = document.querySelector(element);
            if(!this.element){
                console.warn(`[Onyx] Element '${element}' not found`);
            }
        }

        if(clock){
            clock.add(this);
        }
        
        this.queryDOM(this.element);

        this.loadSceneURL();
        this.loadTemplateURL();
    }

    registerHandler(event){
        // Get element
        var element = (event.elementId)?document.getElementById(event.elementId):document.body;
        if(!element){
            console.warn(`[Onyx] Element "${event.elementId}" not found`);
            return;
        }

        // Assign event to element
        //TODO Error checking / Remove need for setTimeout
        window.setTimeout(()=>{
            event.callback = event.target[event.property].bind(this);
            if(element.addEventListener){
                element.addEventListener(event.event, event.callback);
            }else{
                element[event.event] = event.callback ;
            }
        }, 0);

    }

    unregisterHandler(event){
        // Get element
        var element = (event.elementId)?document.getElementById(event.elementId):document.body;
        if(!element){
            console.warn(`[Onyx] Element "${event.elementId}" not found`);
            return;
        }

        // Unassign event to element
        if(element.addEventListener){
            element.removeEventListener(event.event, event.callback);
        }else{
            element[event.event] = null;
        }
    }

    modalResult(result, unload){
        if(this._modal){
            this._modal.callee.modalResult(result, this._modal, unload);
        } 
    }

    modalUnload(){
        if(this._modal){
            this._modal.callee.modalUnload(this._modal);
        }
    }

    loadSceneURL(url = this.sceneURL){
        if(!url) return false;

        this.fetchTemplate(url).then((response) => {
            this.scene = response;
        });
    }

    loadTemplateURL(url = this.templateURL){
        if(!url) return false;

        this.fetchTemplate(url).then((response) => {
            this.template = response;
        });
    }

    // TODO: rename to onLoad
    onload(...args){
        super.onload(...args);

        if(this.element) this.queryDOM(this.element);
    }

    onunload(...args){
        super.onunload(...args);

        // TODO Call onDestroy for everything

        this.entities = [];
        this.viewports = [];
        this.viewportElements = [];
        this.components = [];

        if(this.element){
            this.element.innerHTML = "";
            this.element.style.display = "none";
        }
    }

    populateDOM(elem){
        if(this.template !== null && this.template !== undefined) elem.innerHTML = this.template;

        if(this.element) this.element.style.display = "block";

        this.queryDOM(this.element);
    }

    clearDom(elem){
        if(elem) elem.innerHTML = "";
    }

    queryDOM(elem = document.body){
        // if(elem)

        // Grab all viewports
        this.viewportElements = [];
        
        // Note: CocoonJS doesn't fully support querySelectorAll, so we're doing this manually, rather than querySelectorAll
        // Any <onyx-viewport> tags
        let nodes = elem.getElementsByTagName("onyx-viewport");
        for(var i = 0; i < nodes.length; i++){
            // TODO(?): use this element to create a canvas inside of it
            this.viewportElements.push(nodes[i]);
        }

        // Any <ANY onyx-viewport> tags

        if(typeof document.querySelectorAll !== "undefined" && !navigator.isCocoonJS){
            nodes = elem.querySelectorAll("[onyx-viewport]");

            for(var i = 0; i < nodes.length; i++){
                this.viewportElements.push(nodes[i]);
            }
        }else{
            // Fallback for older browsers / CocoonJS
            nodes = elem.getElementsByTagName("*");

            for(var i = 0; i < nodes.length; i++){
                var node = nodes[i];
                if(typeof node["onyx-viewport"] !== "undefined" || (node.hasAttribute && node.hasAttribute("onyx-viewport"))) {
                    this.viewportElements.push(node);
                }
            }
        }
        
        // Assign a new viewport for each one
        for(let elem of this.viewportElements){
            this.viewports.push(new Viewport(elem));    
        }
    }

    render(dt){
        if(!this.visible) return;

        // TODO: Update DOM elements

        for(let renderPass of this.renderPasses){
            for(let viewport of this.viewports){
                renderPass.render(dt, this, viewport, [this], this.transform.localMatrix);
            }
        }
    }
	
	/**
	 * Called every logic cycle
	 */
	update(deltaTime) {
        super.update(deltaTime, this);
        
        if(!this.enabled) return;
        
		for(let entity of this.entities){
			entity.update(deltaTime, this);	
		}

		for(let entity of this.removeEntities){
			this.remove(entity, false);	
		}
		this.removeEntities = [];
	}

    add(entity){
        this.entities.push(entity);
        if(entity.onSpawn) entity.onSpawn(this);
        
        if(entity instanceof Camera) this.cameras.push(entity);
        if(entity instanceof Light || entity instanceof PointLight || entity instanceof SpotLight){
            this.lights.push(entity);
            if(this.lights.length > CONST.MAX_LIGHTS) console.warn("[Onyx] Warning: Light count greater than MAX_LIGHTS.");
        }
    }

	addRenderPass( pass ) {
		this.renderPasses.push(pass);
	}

    remove(entity, defer){ //TODO: make defer an option object?
		if(defer){
			this.removeEntities.push(entity);
		}else{
			if(this.entities.indexOf(entity) > -1){
				this.entities.splice(this.entities.indexOf(entity), 1);
				if(entity.onDestroy) entity.onDestroy(this);
			}
		}
    }
    
    findByIndex(index){
        super.findByIndex(index);
        
        for(var i = 0; i < this.entities.length; i++){
            if(this.entities[i].index === index) return this.entities[i];

            // TODO: Optimize
            if(this.entities[i].findByIndex(index)) return this.entities[i].findByIndex(index);
        }
    }

    start(){
        if(!this.clock) return;

        this.clock.start();
        // this.onload();
    }

    stop(){
        if(!this.clock) return;

        this.clock.stop();
        // this.onunload();
    }

    sortEntitiesByZ(inverse){
        if(inverse){
            this.entities.sort(function(a, b) {
                return (a.transform && b.transform) && a.transform.z - b.transform.z;
            });
        }else{
            this.entities.sort(function(a, b) {
                return (!a.transform || !b.transform) || b.transform.z - a.transform.z;
            });
        }
    }
    
    // Fetch Template
    fetchTemplate(url){
        return fetch(url, {
            "Content-Type": "text/html"
        }).then((response) => {
            // Read response
            if (!response.ok) {
                throw Error(response.statusText, response.url);
            }
            return response.text();
        }).then(
            // Return contents
            (contents) => contents
        ).catch((e) => {
            console.error(`Error fetching template '${url}'.`, e);
            // this.loadView('__loadingFailure__');
        });
    }
}