export class Router {
    constructor(options = {map: [], clock: null}){
        this.map = options.map;

        this.currentController = [];

        this.clock = options.clock;
        this.routeViews = [];
        // this.viewports = []; // this should be at the stage level
        this.scenes = [];

        this.queryDOM();
    }

    navigate(routeName, params, {view = "main"} = {}){
        // Unload previous route
        this.routeUnload(this.currentController[view], view);

        // Load new route
        let route = this.map[routeName];
        if(!route) return false;

        // Load new route
        this.queryDOM();

        // console.log("route view loop " + this.routeViews.length);
        for(let v of this.routeViews){
            if(!view || view == v.id || view.id == v){
                route.module.populateDOM(v);
            }
        }
        route.module.onload(params);
        route.module.start();

        this.currentController[view] = route.module; // TODO: Inject params?
        this.currentRoute = route;

        if(this.clock && !route.module.clock){
            this.clock.add(route.module);
            this.clock.resetAccumulator();
        }

        // console.log(`[Onyx] Navigation to "${route}" complete.`);

        return true;
    }

    modal(routeName, onResolve = function(){}, onReject = function(){}, params, {view = "main"} = {}){
        // Load new route
        let route = this.map[routeName];
        if(!route) return false;

        // Load new route
        this.queryDOM();

        for(let v of this.routeViews){
            if(!view || view == v.id || view.id == v){
                route.module.populateDOM(v);
            }
        }
        route.module.onload(params);
        route.module.start();
        route.module._modal = {
            callee: this,
            module: route.module,
            view: view,
            onResolve: onResolve,
            onReject: onReject
        }

        this.currentController[view] = route.module; // TODO: Inject params?
        this.currentRoute = route;

        if(this.clock){
            this.clock.add(route.module);
            this.clock.resetAccumulator();
        }

        return route.module._modal;        
    }

    modalResult(result, modal, unload = true){
        if(!modal) return;

        if(unload) this.routeUnload(modal.module, modal.view);

        if(result){
            modal.onResolve();
        }else{
            modal.onReject();
        }
    }

    modalUnload(modal){
        if(!modal) return;
        
        this.routeUnload(modal.module, modal.view);
    }

    // query for <onyx-route-view> tags
    queryDOM(){
        this.routeViews = [];
        
        // Note: CocoonJS doesn't fully support querySelectorAll, so we're doing this manually, rather than querySelectorAll
        // Any <onyx-route-view> tags
        let nodes = document.getElementsByTagName("onyx-route-view");
        for(var i = 0; i < nodes.length; i++){
            this.routeViews.push(nodes[i]);
        }

        // Workaround for CocoonJS
        if(!this.routeViews.length && document.getElementById("onyx-route-view")){
            this.routeViews.push(document.getElementById("onyx-route-view"));
        }
    }

    routeUnload(controller = null, view = null){
        if(!controller) return;

        controller.stop();

        if(this.clock){
            this.clock.remove(controller);
        }

        for(let v of this.routeViews){
            // view.innerHTML = response;
            if(!view || view == v.id || view.id == v){
                controller.onunload(v);
                controller.clearDom(v);
            }
        }
    }
}