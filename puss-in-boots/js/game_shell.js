//GAME SHELL
var game_shell = (function() {
    //game_shell version number
	this.version = 2.12;
	//
    this.config = {};//for external config
	//namespaces
    this.screens = {};
    this.game = {};
    this.data = {};
    this.json = {};//used to store loaded json
    //prevent IE errors
    if(typeof window.console == 'undefined'){
        window.console = {};
        window.console.log = function(){};
    }
    //
    this.init = function(){
		//parse the config object
        alex.statics.copy(this.config);       
        //call screen event to customize stuff
        this.onGameEvent({msg:"scripts_loaded"});
        //
        alex.GenericGame.call(this);
        this.setup();
	};
    //************************************************
    // HOOK FOR EXTERNAL APIs
    //************************************************
    this.onGameEvent = function(event){ };
    //************************************************
    this.loadScripts = function() {
        var self = this;
        var files = this.config.files.slice();
        ScriptLoader.load(files, function(){
			//*************************************
			// disable native touchmove behavior to prevent overscroll
			if(typeof document.attachEvent != 'undefined'){
				document.attachEvent("ontouchmove", function(event) { event.preventDefault(); });
			} else {
				document.addEventListener("touchmove", function(event) { event.preventDefault(); }, false);
			}
			//init after 1 sec, allows window time to size properly
			setTimeout(function(){
                self.init.call(self);
            },1000);
		});
    };
    //
    return this;
    //call in this scope not in window scope
}).call({});

//make a shortcut to get the game time
Object.defineProperty(game_shell, 'time', {
    configurable: true,
    get: function(){
        return game_shell.runLoop.currentTime;
    }
});

//make a shortcut to get the resolution
Object.defineProperty(game_shell, 'resolution', {
    get: function(){
        return game_shell.pixiStage.renderer.resolution;
    }
});
//
var ScriptLoader = (function(){
    var manifest,callback;
    function load(p_manifest,p_callback){
        manifest = p_manifest; callback = p_callback; loadNext();
    }
    function loadNext(){
        (manifest.length > 0)? loadScript(manifest.shift(), loadNext) : callback();
    }
    function loadScript(p_path, p_callback) {
        var head = document.getElementsByTagName('head')[0], script = document.createElement('script');
        script.type = 'text/javascript'; script.src = p_path; script.onload = p_callback;
        script.onreadystatechange = function() {
            if (this.readyState == 'complete') p_callback();
        };
        head.appendChild(script);
    }
    return {load:load};
})();

