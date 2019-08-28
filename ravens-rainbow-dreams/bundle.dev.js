(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var Common          = require("./Common");
var GameScreen      = require("./screens/GameScreen");
var SplashScreen    = require("./screens/SplashScreen");
var IntroScreen     = require("./screens/IntroScreen");
var PauseOverlay    = require("./overlays/PauseOverlay");
var GameOverOverlay = require("./overlays/GameOverOverlay");
var CNMoreGamesScene = require("./overlays/CNMoreGamesScene");


var Transition      = require("./lib/Transition");
var SavedData       = require("./SavedData");

//===================================================
// CONSTRUCTOR
//===================================================

function Application()
{
	/**
	 * @type {AssetManager}
	 * @private
	 */
	this._assetManager = null;

	/**
	 * @type {ScreenManager}
	 * @private
	 */
	this._screenManager = null;

	/**
	 * @type {p3.Screen}
	 */
	this._currentScreen = null;

	/**
	 * @type {p3.Transition}
	 * @private
	 */
	this._transition = null;
}
module.exports = Application;

//===================================================
// PUBLIC METHODS
//===================================================

Application.prototype.init = function()
{
	console.log("APPLICATION INITIALIZED");

	this._assetManager = p3.AssetManager.instance;
	this._screenManager = Common.sceneManager;

	TweenMax.defaultOverwrite = "none";

	//Texture generation: black square
	if(Common.generatedTextures['blackSquare'] == undefined)
	{
		var gr = new PIXI.Graphics();
		gr.beginFill(0x000000);
		gr.drawRect(0, 0, 1, 1);
		Common.generatedTextures['blackSquare'] = gr.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);
	}

	Common.savedData = new SavedData();
	Common.savedData.init();

	this.showSplash();
};

Application.prototype.showSplash = function()
{
	var screen = new SplashScreen();
	this._screenManager.add(screen, this._getTransition());

	screen.signals.requestedPreviousScreen.addOnce(function()
	{

	}, this);
	screen.signals.requestedNextScreen.addOnce(function()
	{
		this.showIntro();
	}, this);
	screen.signals.moreGames.add(function()
	{
		this.showCNMoreGamesScene();
	}, this);

	this._currentScreen = screen;
};

Application.prototype.showIntro = function()
{
	var screen = new IntroScreen();
	this._screenManager.add(screen, this._getTransition());

	screen.signals.requestedPreviousScreen.addOnce(function()
	{

	}, this);
	screen.signals.requestedNextScreen.addOnce(function()
	{
		this.showGame(true);
	}, this);

	this._currentScreen = screen;

	return screen;
};


Application.prototype.showGame = function(showPause)
{
	var screen = new GameScreen();
	this._screenManager.add(screen, this._getTransition());

	screen.signals.requestedPreviousScreen.addOnce(function(){

	}, this);
	screen.signals.requestedNextScreen.addOnce(function(score, highscore){
		this.showGameOver(score, highscore);
	}, this);
	screen.signals.pausePressed.add(function(){
		this.showPause(false);
	}, this);

	this._currentScreen = screen;

	if(showPause && !Common.savedData.hasViewedInstructions)
	{
		this._currentScreen._showPause = true;
		Common.animator.setTimeout(function()
		{
			this.showPause(true);
			Common.savedData.hasViewedInstructions = true;
			Common.savedData.save();
		}, 0, this);
	}

	return screen;
};


Application.prototype.showPause = function(showHelp)
{
	var t = new Transition();
	t.replace = false;
	t.push = true;

	this._currentScreen.hideGUI(function()
	{
		var screen = new PauseOverlay();
		this._screenManager.add(screen, t);

		screen.signals.requestedNextScreen.addOnce(function(id)
		{
			this._screenManager.remove();
			this._currentScreen.showGUI();
		}, this);
		screen.signals.requestedPreviousScreen.addOnce(function(id)
		{
			this.showSplash();
		}, this);

		if(showHelp)
			p3.Timestep.queueCall(screen.setIntroHelpMode, [], screen);

	}, this, true);
};

Application.prototype.showGameOver = function(score, highscore)
{
	var t = new Transition();
	t.replace = false;
	t.push = true;

	this._currentScreen.hideGUI(function()
	{
		var screen = new GameOverOverlay(score, highscore);
		this._screenManager.add(screen, t);

		screen.signals.requestedNextScreen.addOnce(function(id)
		{
			this.showSplash();
		}, this);
		screen.signals.requestedPreviousScreen.addOnce(function(id)
		{
			screen.animateOut(this.showGame, this);
		}, this);
		screen.signals.moreGames.add(function()
		{
			this.showCNMoreGamesScene();
		}, this);
	}, this);
};

Application.prototype.showCNMoreGamesScene = function()
{
   // var scene = new CNMoreGamesScene();
   // scene.signals.next.add(function() {
        // Common.scene.remove();
   // });

   // var transition = new p3.Transition();
   // transition.push = true;
   // transition.replace = false;
   // Common.scene.add(scene, transition);
   // return scene;

	var t = new Transition();
	t.replace = false;
	t.push = true;

	var screen = new CNMoreGamesScene();
	this._screenManager.add(screen, t);

	screen.signals.requestedNextScreen.addOnce(function(id)
	{
		this._screenManager.remove();
	}, this);
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 */
Application.prototype._getTransition = function()
{
	var transition = new Transition();
	transition.replace = true;
	transition.push = false;
	return transition;
}

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"./Common":2,"./SavedData":4,"./lib/Transition":18,"./overlays/CNMoreGamesScene":19,"./overlays/GameOverOverlay":20,"./overlays/PauseOverlay":21,"./screens/GameScreen":22,"./screens/IntroScreen":23,"./screens/SplashScreen":26}],2:[function(require,module,exports){
"use strict";

/**
 *  Common
 *
 *  Created by Legman on 30/04/2015.
 *
 */

//===================================================
// CONSTRUCTOR
//===================================================

function Common() {}
module.exports = Common;


/* ------GENERIC------ */

/**
 * @type {Number}
 * @const
 */
Common.STAGE_WIDTH = 1900.0;

/**
 * @type {Number}
 * @const
 */
Common.STAGE_HEIGHT = 768.0;

/**
 * @type {PIXI.Container}
 * @static
 */
Common.stage = null;

/**
 * @type {PIXI.CanvasRenderer|PIXI.WebGLRenderer}
 * @static
 */
Common.renderer = null;

/**
 * @type {p3.Timestep}
 * @static
 */
Common.timestep = null;

/**
 * @type {p3.Animator}
 * @static
 */
Common.animator = null;

/**
 * @type {Keyboard}
 * @static
 */
Common.keyboard = null;

/**
 * @type {PIXI.Point}
 * @static
 */
Common.touch = new PIXI.Point(0.0, 0.0);

/**
 * @type {Number}
 * @static
 */
Common.paused = false;

/**
 * @type {Boolean}
 * @static
 */
Common.isWebGL = false;

/**
 * @type {Number}
 * @const
 */
Common.DEBUG_PAINT_MODE = 0;

/**
 * @type {Number}
 * @static
 */
Common.frameCount = 0;

/**
 * @type {Number}
 * @const
 */
Common.FPS = 60;

/**
 * @type {SavedData}
 * @static
 */
Common.sceneManager = null;

/**
 * @type {String}
 * @static
 */
Common.generatedTextures = {};

/**
 * @type {String}
 * @static
 */
Common.COUNTRY_CODE = 'en';

/**
 * @type {Object}
 * @static
 */
Common.animationData = {};

/**
 * @type {SavedData}
 * @static
 */
Common.savedData = null;


//===================================================
},{}],3:[function(require,module,exports){
"use strict";

/**
 *  Main
 *
 *  Created by Legman on 27/04/2015.
 *
 */

var Application   = require("./Application");
var Common        = require("./Common");
var Preloader     = require("./screens/Preloader");
var SceneManager  = require("./lib/SceneManager");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!Number} width
 * @param {!Number} height
 * @constructor
 */
function Main(width, height)
{
	/**
	 * @type {!Number}
	 * @private
	 */
	this._width  = width;
	this._height = height;

	/**
	 * @type {p3.AssetManager}
	 * @private
	 */
	this._assetManager = null;

	/**
	 * @type {p3.ScreenManager}
	 * @private
	 */
	this._screenManager = null;

	/**
	 * @type {Preloader}
	 * @private
	 */
	this._preloader = null;

	/**
	 * @type {Application}
	 * @private
	 */
	this._game = null;

	/**
	 * @type {Number}
	 * @private
	 */
	this._resolution = 1.0;

	/**
	 * @type {String}
	 * @private
	 */
	this._scale     = "hd/";
	this._renderFPS  = 60.0;
	this._frameCount = 0;

}
window.Main = Main;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Main.prototype.init = function()
{
  	this._assetManager  = p3.AssetManager.instance;
	this._screenManager = new SceneManager();

	Common.COUNTRY_CODE = window.og.language;

	var elementId   = "og-game-holder";
	var params      = new p3.ViewParams();
	params.width    = this._width;
	params.height   = this._height;
	params.holderId = elementId;
	params.rotateImageUrl   = "assets/images/system/" + Common.COUNTRY_CODE + "/rotate_device.jpg";
	params.rotateImageColor = "#000000";

	PIXI.RETINA_PREFIX = /\_(?=[^_]*$)(.+)x/;

	p3.Tracking.DEBUG = true;
	Common.tracking = new p3.Tracking();
	Common.tracking.init(new p3.TrackingModuleEcho(window.stats));

	p3.Device.init(window["bowser"]);

	TweenMax.defaultOverwrite = "none";
	TweenMax.ticker.fps(Common.FPS);

	var canvas = new p3.View(params);
	canvas.signals.ready.addOnce(function(canvas)
	{
		var isKindle = navigator.userAgent.match(/Kindle|Silk|KFA/) !== null;
		var options = {};
		options.view = canvas;
		options.transparent = isKindle;
		options.antialias = false;
		options.preserveDrawingBuffer = false;
		options.resolution = this._resolution;
		this._assetManager.scaleFactor = this._resolution;

		var stage = new PIXI.Container();
		Common.stage = stage;

		if(isLenovo())
			var renderer = new PIXI.CanvasRenderer(this._width, this._height, options);
		else
			var renderer = PIXI.autoDetectRenderer(this._width, this._height, options);
		Common.renderer = renderer;
		// PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

		this._screenManager.init(stage, renderer);
		Common.sceneManager = this._screenManager;

		Common.isWebGL = (renderer instanceof PIXI.WebGLRenderer);
		Common.DEBUG_PAINT_MODE = p3.Utils.getURLParameter("paint", 0);

		var timestep = new p3.Timestep();
		timestep.init(this.update, this.render, this);
		Common.timestep = timestep;

		Common.animator = new p3.Animator();
		Common.animator.init();

		this.loadPreloader();

	}, this);
	canvas.signals.resize.add(this.onCanvasResize, this);

	var hidden;
	"undefined" != typeof document.hidden ? (hidden = "hidden",
		this.visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (hidden = "mozHidden",
		this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (hidden = "msHidden",
		this.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (hidden = "webkitHidden",
		this.visibilityChange = "webkitvisibilitychange");

	document.addEventListener(this.visibilityChange, function(){
		document[hidden] ? Howler.volume(0) : Howler.volume(1);
	}, false);
};

/**
 */
Main.prototype.loadPreloader = function()
{
	var scale  = this._scale;
	var prefix = (scale === "sd/" ? "_0.5x" : "");
	var files =
	[
		{name:"preloader_0", url:"images/" + scale + "preloader" + prefix + ".json"},
		{name:"ui", url:"images/" + scale + "ui" + prefix + ".json"},
		{name:"preloader_bg", url:"images/" + scale + "titles_" + Common.COUNTRY_CODE + "/preloader" + prefix + ".jpg"}
	];
	var sounds = [
	];
	if (files.length)
	{
		this._assetManager.addFiles(files, window.og.gameDir + "assets/");
		this._assetManager.signalCompleted.addOnce(function() {this.loadAssets();}, this);
		this._assetManager.load();

		p3.AudioManager.instance.addSounds(sounds, [".mp3", ".ogg"], "");
	}
	else
	{
		this.loadAssets();
	}
};


/**
 */
Main.prototype.loadAssets = function()
{
	var scale  = this._scale;
	var prefix = (scale === "sd/" ? "_0.5x" : "");

	var files =
	[
		{name:"config", url:"data/config.json"},

		{name:"game_assets", url:"images/" + scale + "game_assets" + prefix + ".json"},
		{name:"game_assets2", url:"images/" + scale + "game_assets2" + prefix + ".json"},
		{name:"moregames_1x", url:"images/" + scale + "moregames_1x" + prefix + ".json"},
		{name:"splash", url:"images/" + scale + "splash" + prefix + ".json"},
		{name:"letshavefun", url:"images/" + scale + "titles_" + Common.COUNTRY_CODE + "/letshavefun" + prefix + ".png"},
		{name:"titlegame", url:"images/" + scale + "titles_" + Common.COUNTRY_CODE + "/titlegame" + prefix + ".png"},

		{name:"text", url:"fonts/text.json"},
		{name:"score", url:"fonts/score.json"},
		{name:"avatarBoost_ps", url:"particles/avatarBoost.json"},
		{name:"avatarDeath_ps", url:"particles/avatarDeath.json"},
		{name:"avatarHit_ps", url:"particles/avatarHit.json"},
		{name:"splashStars_ps", url:"particles/splashStars.json"},
		{name:"introStars_ps", url:"particles/introStars.json"},
		{name:"introBars_ps", url:"particles/introBars.json"},
		{name:"introSparks_ps", url:"particles/introSparks.json"},
		{name:"bomb_ps", url:"particles/bomb.json"},
		{name:"bombLite_ps", url:"particles/bombLite.json"}
	];
	var sounds =
	[
		"sfx_btn_press_00",
		"sfx_btn_rollover_00",
		"sfx_ui_popup_close_00",
		"sfx_cloud_bounce_00",
		"sfx_cloud_bounce_01",
		"sfx_cloud_bounce_02",
		"sfx_rainbow_pickups_00",
		"sfx_raven_rainbow_power_00",
		"sfx_unicorn_die_random_00",
		"sfx_unicorn_rainbow_power_random_00",
		"sfx_unicorn_rainbow_power_random_01",
		"sfx_raven_sparkle_00",
		"sfx_raven_laugh_00",
		"sfx_hit_concreteblock_00",
		"sfx_balloon_death_00",
		"sfx_balloon_death_01",
		"music_menu_intro_00",
		"music_menu_loop_00"
	];
	if (files.length)
	{
		this._assetManager.addFiles(files, window.og.gameDir + "assets/");
		this._assetManager.signalProgress.add(this.onLoadingProgress, this);
		this._assetManager.signalCompleted.addOnce(this.onLoadingCompleted, this);
		this._assetManager.load();

		this._preloader = new Preloader();
		this._preloader.signals.loadingComplete.addOnce(this.startGame, this);
		this._screenManager.add(this._preloader);

		p3.AudioManager.instance.addSounds(sounds, [".mp3", ".ogg"], window.og.gameDir + "assets/audio/");
	}
	else
	{
		this.startGame();
	}
};

/**
 */
Main.prototype.startGame = function()
{
	var that = this;
	that._game = new Application();
	that._game.init();
};

/**
 */
Main.prototype.update = function()
{
	this._screenManager.update();
	Common.animator.update();

	if (Common.DEBUG_PAINT_MODE > 0) {
		this.paintBadImage(Common.stage);
	}

	this._frameCount++;
	Common.frameCount = this._frameCount;
};

/**
 */
Main.prototype.render = function()
{
	Common.renderer.render(Common.stage);
};

/**
 * @param {!PIXI.DisplayObject} display
 * @param {Number=} color
 */
Main.prototype.paintBadImage = function(display, color)
{
	color = color || 0xAA00FF;

	var child;
	for (var i = 0; i < display.children.length; ++ i) {
		child = display.children[i];
		if (child instanceof PIXI.Sprite) {
			if (Common.DEBUG_PAINT_MODE == 1) {
				if (child.texture.width % 2 != 0 || child.texture.height % 2 != 0) {
					child.tint = color;
				} else {
					child.tint = 0xFFFFFF;
				}
			}
			if (Common.DEBUG_PAINT_MODE == 2) {
				if (child.position.x !== parseInt(child.position.x) || child.position.y !== parseInt(child.position.y)) {
					child.tint = color;
				} else {
					child.tint = 0xFFFFFF;
				}
			}
		}
		this.paintBadImage(child, color);
	}
};

//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

/**
 */
Main.prototype.onLoadingProgress = function(event)
{
	this._preloader.loadedPercentage = event.progress;
};

/**
 */
Main.prototype.onLoadingCompleted = function()
{
	this._preloader.loadedPercentage = 100.0;
	this._preloader.animateOut(null, this);

	this._preloader = null;

	this._assetManager.signalProgress.removeAll();
	this._assetManager.signalCompleted.removeAll();

	if(!p3.Device.isMobile)
	{
		this.startGame();
	}
};

/**
 * @param {!Boolean} correct
 */
Main.prototype.onCanvasResize = function(correct)
{
	if (correct)
	{
		Common.renderer.resize(p3.View.width, p3.View.height);

		if (this._screenManager)
		{
			this._screenManager.resize();
		}
	}
};

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================

function getAndroidVersion(ua) 
{
	ua = (ua || navigator.userAgent).toLowerCase(); 
	var match = ua.match(/android\s([0-9\.]*)/);
	 
	if( match ) 
	{
	var float = parseFloat( match[1] ) ;
	console.log( " getAndroidVersion = " , match , float ) ;
	return float ;
	}
	 
	return -1 ;
};
 
function isLenovo()
{
	var isAndroid = ( getAndroidVersion() >-1 ) ? true : false ;
	var lenovoRes = (window.screen.width / window.screen.height == 1024 / 600 ) ;
	 
	// Tab 2
	// Mozilla/5.0 (Linux; Android 4.4.2; Lenovo TAB 2 A7-30F Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36
	 
	// Tab 3 - from web
	// Mozilla/5.0 (Linux; Android 6.0.1; Lenovo TB-8703F Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
	 
	// Tab 3 - from Testology
	// Mozilla/5.0 (Linux; Android 5.0.1; Lenovo TB3-710F Build/LRX21M)
	 
	return isAndroid && lenovoRes && navigator.userAgent.indexOf( 'Lenovo') > -1 ;
}

},{"./Application":1,"./Common":2,"./lib/SceneManager":17,"./screens/Preloader":24}],4:[function(require,module,exports){
"use strict";

var Common = require("./Common");

//===================================================
// CONSTRUCTOR
//===================================================

function SavedData()
{
	var assetManager           = p3.AssetManager.instance;

	/**
	 * @type {String}
	 * @const
	 */
	this.SAVE_NAME = "teentitansgo_rainbow_dreams";
	this.SAVE_VERSION = "0.0.0";
	this.SAVE_SEED = "y5k0Eo6R177mUkb";

	/**
	 * @type {Boolean}
	 */
	this.hasViewedInstructions = false;
	this.hasSeenIntro          = false;

	/**
	 * @type {Number}
	 */
	this.highscore = 0;
}
module.exports = SavedData;

//===================================================
// PUBLIC METHODS
//===================================================

SavedData.prototype.init = function()
{
	if (!window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION])
	{
		console.log('reset');
		this.reset();
		this.save();
	}
	else
	{
		console.log('load');
		this.load();
	}

};

SavedData.prototype.reset = function()
{

};


SavedData.prototype.load = function()
{
	var data = window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION];
	data = JSON.parse(data);

	this.hasSeenIntro          = data.hasSeenIntro;
	this.hasViewedInstructions = data.hasViewedInstructions;
	this.highscore             = parseInt(data.highscore);

	/*
	var json = JSON.stringify(
	{
		hasViewedInstructions: data.hasViewedInstructions,
		hasSeenIntro: data.hasSeenIntro
	});

	var hash = md5(json + this.SAVE_SEED);
	if (hash != data.hash)
	{
		window.localStorage.removeItem(this.SAVE_NAME + "_" + this.SAVE_VERSION);
		location.reload();
	}
	else
	{
		this.hasSeenIntro = data.hasSeenIntro;
		this.hasViewedInstructions = data.hasViewedInstructions;
	}*/
};

SavedData.prototype.save = function()
{
	console.log('save');
	var data = {};
	data.hasSeenIntro = this.hasSeenIntro;
	data.hasViewedInstructions = this.hasViewedInstructions;
	data.highscore = this.highscore;

	var json = JSON.stringify(data);
	data.hash = md5(json + this.SAVE_SEED);

	window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION] = JSON.stringify(data);
};


//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================
},{"./Common":2}],5:[function(require,module,exports){
"use strict";

var Common          = require("../Common");
var ScrollerObject  = require("../scroller/ScrollerObject");
var SoundSFX        = require("../general/SoundSFX");
var RainbowTail     = require("../game/RainbowTail");


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Avatar()
{
	/**
	 * @type {PIXI.Sprite}
	 */
	this._characterHolder = null;

	/**
	 * @type {p3.MovieClip}
	 */
	this._runAnimation      = null;

	/**
	 * @type {RainbowTail}
	 */
	this._tail      = null;

	/**
	 * @type {Bool}
	 */
	this._isDead        = false;
	this._isFalling     = false;
	this._isBoost       = false;
	this._isOutOfScreen = false;

	/**
	 * @type {Number}
	 */
	this._jumpTime      = 1;
	this._jumpHeightMin = 150;
	this._jumpHeight    = 400;

	this._jumpSpeed    = null;
	this._gravity      = null;
	this._jumpTimeMin  = null;
	this._jumpSpeedMin = null;

	this._xBoost         = 0;
	this._ySpeed         = 0;
	this._dashTime       = 0;


	/**
	 * @type {cloudkid.Emitter}
	 */
	this._boostPS       = null;
	this._deathPS       = null;

	ScrollerObject.call(this, "avatar", false);

	/**
	 * @type {signals.Signal}
	 */
	this.signals.jump = new signals.Signal();

}
module.exports = Avatar;
Avatar.prototype = Object.create(ScrollerObject.prototype);
Avatar.prototype.constructor = Avatar;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Avatar.prototype.init = function()
{
	this._jumpSpeed    = (2 * this._jumpHeight) / this._jumpTime;
	this._gravity      = this._jumpSpeed/this._jumpTime;
	this._jumpTimeMin  = Math.sqrt(2 * this._jumpHeightMin/this._gravity);
	this._jumpSpeedMin = this._gravity * this._jumpTimeMin;


	// Particles
	this._boostPS      = new cloudkid.Emitter(this, [this._assetManager.getTexture("star_part"), this._assetManager.getTexture("dot_particle")], this._assetManager.getJSON("avatarBoost_ps"));
	this._boostPS.emit = false;
	this._deathPS      = new cloudkid.Emitter(this, [this._assetManager.getTexture("star2_part"), this._assetManager.getTexture("star2_part")], this._assetManager.getJSON("avatarDeath_ps"));
	this._deathPS.emit = false;

	// Animations
	this._characterHolder = new PIXI.Container();
	this.addChild(this._characterHolder);

	this._runAnimation = new p3.MovieClip(this._generateAnimationSequence("raven", 1));
	this._runAnimation.animationSpeed = 1;
	this._runAnimation.anchor  = new PIXI.Point(0.5, 0.5);
	this._runAnimation.looping = false;
	this._runAnimation.play();
	this._characterHolder.addChild(this._runAnimation);

	// Collisions
	this.collisionRect = new PIXI.Rectangle(-(this.width)/2 +40, this.height/2-40, this.width - 60, 40);

	// Debug
	// this.drawCollisionRect();
	
	this._boostTarget = new PIXI.Point();
	this._boostTargetSpeed = 1000;
}

/**
 */
Avatar.prototype.update = function()
{
	if(!this._isOutOfScreen)
	{
		if(!this._isDead) // Not hit by an enemy
		{
			if(this._dashTime > 0)
			{
				this._dashTime -=  p3.Timestep.deltaTime;
			}
			else if(!this._isBoost)
			{
				this._ySpeed += this._gravity * p3.Timestep.deltaTime * (this._isFalling ? 15 : 1) * (this._ySpeed < 0 ? 1 : 0.65);
				this._ySpeed = Math.min(this._ySpeed, 1700); // Limit the max falling speed. On slow device it can miss collisions when too fast
				this.y += this._ySpeed * p3.Timestep.deltaTime;

				if(this.y >= Common.STAGE_HEIGHT)
				{
					this._isDead = true;
					this._isOutOfScreen = true;
					this._deathPS.emit = true;
					SoundSFX.playRandomFrom(["sfx_hit_concreteblock_00"]);
				SoundSFX.playRandomFrom(["sfx_unicorn_die_random_00"]);
				}
			}
			else if(this._isBoost)
			{
				if(this._boostTarget.x != 0 && this._boostTarget.y != 0)
				{
					var distance = Math.sqrt(Math.pow(this._boostTarget.x - this.position.x,2) + Math.pow(this._boostTarget.y - this.position.y,2));
		
					if(distance < this._boostTargetSpeed * p3.Timestep.deltaTime)
					{
						// this.position.x = this._boostTarget.x;
						this.position.y = this._boostTarget.y;
					}
					else
					{
						// this.position.x = p3.Utils.lerpNumber((this._boostTargetSpeed * p3.Timestep.deltaTime)/distance, this.position.x, this._boostTarget.x);
						this.position.y = p3.Utils.lerpNumber((this._boostTargetSpeed * p3.Timestep.deltaTime)/distance, this.position.y, this._boostTarget.y);
					}
				}
			}
		}
		else // Hit by an enemy
		{
			this._ySpeed += this._gravity * p3.Timestep.deltaTime * 2;
			this._ySpeed = Math.min(this._ySpeed, this._jumpSpeed)

			if(this.y < Common.STAGE_HEIGHT)
			{
				this.y += this._ySpeed * p3.Timestep.deltaTime;
			}
			else
			{
				this._isOutOfScreen = true;
				this._deathPS.emit = true;
				SoundSFX.playRandomFrom(["sfx_hit_concreteblock_00"]);
				SoundSFX.playRandomFrom(["sfx_unicorn_die_random_00"]);
				
			}
		}
	}
	else
	{
		this.rotation = 0;
	}

	// Particles
	this._boostPS.update(p3.Timestep.deltaTime);
	this._deathPS.update(p3.Timestep.deltaTime);
};

/**
 */
Avatar.prototype.pause = function()
{
	this._runAnimation.stop();
}

/**
 */
Avatar.prototype.resume = function()
{
	this._runAnimation.play();
}

/**
 */
Avatar.prototype.fall = function()
{
	if(this._isBoost) return;

	this._isFalling = true;

	var tl = new TimelineMax();
	tl.to(this.scale, 0.15, {x:0.75, y:1.25, ease:Sine.easeInOut});
	Common.animator.add(tl);
}

/**
 */
Avatar.prototype.fallEnd = function(bounce)
{
	if(this._isBoost) return;

	this._isFalling = false;

	if(!bounce)
	{
		var tl = new TimelineMax();
		tl.to(this.scale, 0.15, {x:1, y:1, ease:Sine.easeOut});
		Common.animator.add(tl);
	}
	else
	{
		var tl = new TimelineMax();
		tl.to(this.scale, 0.2, {x:1.25, y:0.75, ease:Quart.easeOut});
		tl.to(this.scale, 0.2, {x:1, y:1, ease:Sine.easeOut});
		Common.animator.add(tl);
	}
}


/**
 */
Avatar.prototype.bounce = function()
{
	if(this._isBoost) return;

	this._ySpeed = -Math.max(this._jumpSpeedMin, Math.min(this._ySpeed, this._jumpSpeed));
	this.fallEnd(true);

	SoundSFX.playRandomFrom(["sfx_cloud_bounce_00", "sfx_cloud_bounce_01", "sfx_cloud_bounce_02"]);
}

Avatar.prototype.die = function()
{
	if(this._isDead) return false;
	if(this._isBoost) return false;

	this._isDead = true;
	var tl = new TimelineMax();
	tl.to(this.scale, 0.1, {x:1, y:1, ease:Linear.easeNone}, 0);
	tl.to(this, 2, {rotation:4 * 360 * PIXI.DEG_TO_RAD, ease:Sine.easeIn}, 0);
	tl.to(this, 1.5, {x: this.x + 600, ease:Sine.easeOut}, 0);
	Common.animator.add(tl);

	SoundSFX.playRandomFrom(["sfx_balloon_death_00", "sfx_balloon_death_01"]);

	if(this._ySpeed > 0)
	{
		this._ySpeed = -this._jumpSpeedMin;
	}

	return true;
}

Avatar.prototype.boost = function()
{
	if(this._isBoost) return;

	this._isBoost   = true;
	this._isFalling = false;
	this._xBoost    = this.x;

	
	var tl = new TimelineMax();
		tl.to(this, 0.85, {x:this.x + 600, ease:Sine.easeOut}, 0);
		tl.to(this.scale, 0.85, {x:1.1, y:0.9, ease:Sine.easeOut}, 0);
	
		// tl.to(this, 0.85, {x:this.x + 600, y:-100, ease:Sine.easeOut}, 0);
		// tl.to(this.scale, 0.85, {x:1.1, y:0.9, ease:Sine.easeOut}, 0);
		// tl.to(this, 1.2, {x:this.x + 600 -250, ease:Sine.easeInOut, repeat:-1, yoyo:true}, 0.85);
		// tl.to(this, 1.9, {y:50, ease:Sine.easeInOut, repeat:-1, yoyo:true}, 0.85);
	Common.animator.add(tl);
	
	this._tail._segmentLength *= 2;

	this._boostPS.emit = true;
	
	SoundSFX.play('sfx_raven_rainbow_power_00',{volume : 1});
}

Avatar.prototype.boostEnd = function()
{
	var tl = new TimelineMax(
	{
		onComplete:function()
		{
			this._isBoost = false;
			this._ySpeed = -this._jumpSpeedMin * 1.25;
		},
		onCompleteScope:this

	});
	// tl.to(this,       1, {x:this._xBoost, y:this.y, ease:Sine.easeInOut}, 0);
	tl.to(this,       1, {x:this._xBoost, ease:Sine.easeInOut}, 0);
	tl.to(this.scale, 1, {x:1, y:1, ease:Back.easeOut}, 0);
	tl.to(this._tail, 1, {_segmentLength:this._tail._segmentLength/2, ease:Sine.easeOut}, 0);
	Common.animator.add(tl);

	this._boostPS.emit = false;
}

Avatar.prototype.playLoops = function()
{

}

/**
 */

Avatar.prototype.stopLoops = function()
{

}

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * @param {!String} character
 * @param {!Number} frameLimit
 * @returns {!p3.MovieClipSequence}
 */
Avatar.prototype._generateAnimationSequence = function(character, frameLimit)
{
	var textureArr = [];
	if(frameLimit == 1)
	{
		textureArr[0] = this._assetManager.getTexture(character);
	}
	else
	{
		for(var i = frameStart + 1; i <= frameLimit; i++)
		{
			var n = "" + i;
			while(n.length < 3) n = "0" + n;
			textureArr.push(character + "_" + n);
		}
		for(var i = 0; i < textureArr.length; i++)
		{
			textureArr[i] = this._assetManager.getTexture(textureArr[i]);
		}
	}
	var sequence = new p3.MovieClipSequence();
	sequence.addTextures(textureArr);

	return sequence;
}

//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(Avatar.prototype, "isDead", {

	get: function() {
		return this._isDead;
	}
});


Object.defineProperty(Avatar.prototype, "verticalSpeed", {

	get: function() {
		return this._ySpeed;
	}
});

Object.defineProperty(Avatar.prototype, "isBoost", {

	get: function() {
		return this._isBoost;
	}
})

Object.defineProperty(Avatar.prototype, "isOutOfScreen", {

	get: function() {
		return this._isOutOfScreen;
	}
})
},{"../Common":2,"../game/RainbowTail":11,"../general/SoundSFX":14,"../scroller/ScrollerObject":29}],6:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function BoostBar()
{
	/**
	 * @type {p3.AssetManager}
	 */
	this._assetManager = p3.AssetManager.instance;


	PIXI.Container.call(this);
}
module.exports = BoostBar;
BoostBar.prototype = Object.create(PIXI.Container.prototype);
BoostBar.prototype.constructor = BoostBar;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
BoostBar.prototype.init = function()
{
	this.anchor = new PIXI.Point(0.5, 0.5);

	this._bg = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_box"));
	// this._bg.scale = new PIXI.Point(1.2, 1.2);
	this._bg.anchor = new PIXI.Point(0.5, 0.5);
	this.addChild(this._bg);

	this._bg._barStart = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_triangle_left"));
	this._bg._barStart.anchor = new PIXI.Point(0, 0.5);
	this._bg._barStart.x = -this._bg.width/2 + 10;
	this._bg._barStart.y = -0;
	this._bg._barStart.tint = 0x999999;
	this._bg.addChild(this._bg._barStart);

	this._bg._bar = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_fill"));
	this._bg._bar.texture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	this._bg._bar.anchor = new PIXI.Point(0, 0.5);
	this._bg._bar.scale = new PIXI.Point(1, 1);
	this._bg._bar.x = this._bg._barStart.x + this._bg._barStart.width - 0.5;
	this._bg._bar.y = this._bg._barStart.y;
	this._bg._bar.tint = 0x999999;
	this._bg.addChild(this._bg._bar);

	this._bg._barEnd = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_triangle_right"));
	this._bg._barEnd.anchor = new PIXI.Point(0, 0.5);
	this._bg._barEnd.x = this._bg._bar.x + this._bg._bar.width -1;
	this._bg._barEnd.y = -0;
	this._bg._barEnd.tint = 0x999999;
	this._bg.addChild(this._bg._barEnd);

	this._barStart = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_triangle_left"));
	this._barStart.anchor = new PIXI.Point(0, 0.5);
	this._barStart.x = this._bg._barStart.x;
	this._barStart.y = this._bg._barStart.y;
	this._barStart.alpha = 0;
	this._bg.addChild(this._barStart);

	this._bar = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_fill"));
	this._bar.anchor = new PIXI.Point(0, 0.5);
	this._bar.scale = new PIXI.Point(0, 1);
	this._bar.x = this._bg._bar.x;
	this._bar.y = this._bg._bar.y;
	this._bg.addChild(this._bar);

	this._barEnd = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_triangle_right"));
	this._barEnd.anchor = new PIXI.Point(0, 0.5);
	this._barEnd.x = this._bg._bar.x;
	this._barEnd.y = this._bg._bar.y;
	this._barEnd.alpha = 0;
	this._bg.addChild(this._barEnd);

	this._stars = new PIXI.Sprite(this._assetManager.getTexture("score_rainbow_stars"));
	this._stars.anchor = new PIXI.Point(0.5, 0.5);
	this._stars.x = -this._bg.width/2 + 160 + this._stars.width/2;
	this._stars.y = -this._bg.height/2 + -12 + this._stars.height/2;
	this._bg.addChild(this._stars);
};

/**
 */
BoostBar.prototype.updateBoostMeter = function(percentage)
{
	this._barStart.alpha = 1;
	this._barEnd.alpha   = 1;
	this._bar.scale = new PIXI.Point(0.9 * Math.min(1, percentage), 1);
	this._barEnd.x = this._bar.x + this._bar.width-1;

	var tl = new TimelineMax();
	tl.to(this._stars.scale, 0.1, {x: 1.3, y: 1.3, ease:Expo.easeOut}, 1);
	tl.to(this._stars.scale, 0.1, {x: 1, y: 1, ease:Sine.easeOut});
	Common.animator.add(tl);
};



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================



//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================




},{"../Common":2}],7:[function(require,module,exports){
"use strict";

var Common         = require("../Common");
var ScrollerObject = require("../scroller/ScrollerObject");
var SoundSFX       = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Cloud()
{
	/**
	 * @type {P3.MovieClip}
	 */
	this._sprite = null;

	/**
	 * @type {Boolean}
	 */
	this._hasBeenHit = false;

	/**
	 * @type {Number}
	 */
	this._scale

	ScrollerObject.call(this, "cloud", true);

	this.create();
}
module.exports = Cloud;
Cloud.prototype = Object.create(ScrollerObject.prototype);
Cloud.prototype.constructor = Cloud;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Cloud.prototype.create = function()
{
	var textureArr = [];
	textureArr.push(this._assetManager.getTexture("cloud"));

	var sequence = new p3.MovieClipSequence();
	sequence.addTextures(textureArr);

	this._rainbow = new PIXI.Sprite(this._assetManager.getTexture("rainbow2_bg"));
	this._rainbow.anchor = new PIXI.Point(0.5, 0);
	this.addChild(this._rainbow);
	
	this._sprite = new p3.MovieClip(sequence);
	this._sprite.anchor = new PIXI.Point(0.5, 0);
	this._sprite.gotoAndPlay(p3.Utils.randomInt(0, this._sprite.totalFrames));
	this.addChild(this._sprite);

	this.reset();
}

/**
 */
Cloud.prototype.init = function()
{

};

/**
 */
Cloud.prototype.update = function()
{
	ScrollerObject.prototype.update.call(this);
};

/**
 */
Cloud.prototype.reset = function()
{
	ScrollerObject.prototype.reset.call(this);

	this._sprite.x = 0;
	this._sprite.y = 0;

	this._hasBeenHit = false;

	var newSprite = p3.Utils.randomInt(0, this._sprite.totalFrames);
	this._sprite.gotoAndStop(newSprite);

	this._scale = 0.85 + Math.random() * 0.3;
	this._sprite.scale = new PIXI.Point(this._scale, this._scale);

	this.areaRect = new PIXI.Rectangle(-(this._sprite.width)/2 + 10, 45, this._sprite.width - 30, 50);
	this.collisionRect = this.areaRect.clone();


	if(!!this._timeline) this._timeline.clear();
	
	this._timeline = new TimelineMax();
	this._timeline.to(this._sprite.scale, 1, {x:this._scale + 0.1, ease:Quad.easeInOut, yoyo:true, repeat:-1}, 0);
	this._timeline.to(this._sprite.scale, 1, {y:this._scale + 0.1, ease:Quad.easeInOut, yoyo:true, repeat:-1}, Math.random());
	Common.animator.add(this._timeline);
	
	this._rainbow.x = this._sprite.width/2 - 30;
	this._rainbow.y = 20;
	this._rainbow.visible = false;

	// Debug
	// this.drawCollisionRect();
};

/**
 */
Cloud.prototype.hit = function()
{
	this._hasBeenHit = true;

	this._timeline = new TimelineMax();
	this._timeline.to(this._sprite.scale, 0.2, {x:this._scale + 0.25, y:this._scale + 0.25, ease:Back.easeOut});
	this._timeline.to(this._sprite.scale, 0.4, {x:this._scale, y:this._scale, ease:Sine.easeOut});
	Common.animator.add(this._timeline);
}

/**
 */
Cloud.prototype.pause = function()
{

}

/**
 */
Cloud.prototype.resume = function()
{

}



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================



//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(Cloud.prototype, "hasBeenHit", {

	get: function() {
		return this._hasBeenHit;
	}
});

//===================================================


},{"../Common":2,"../general/SoundSFX":14,"../scroller/ScrollerObject":29}],8:[function(require,module,exports){
"use strict";

var Common         = require("../Common");
var ScrollerObject = require("../scroller/ScrollerObject");
var SoundSFX       = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Enemy()
{
	/**
	 * @type {P3.MovieClip}
	 */
	this._sprite = null;

	/**
	 * @type {Boolean}
	 */
	this._hasBeenHit = false;

	ScrollerObject.call(this, "enemy", true);

	this.create();
}
module.exports = Enemy;
Enemy.prototype = Object.create(ScrollerObject.prototype);
Enemy.prototype.constructor = Enemy;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Enemy.prototype.create = function()
{
	this._container = new PIXI.Container();
	this.addChild(this._container);

	// String
	var sequence = new p3.MovieClipSequence();
	sequence.addTextures([this._assetManager.getTexture("balloon_thread01")]);

	this._string = new p3.MovieClip(sequence);
	this._string.anchor = new PIXI.Point(0.5, 0);
	this._string.scale = new PIXI.Point(1, 0.5);
	this._string.y += 43;
	// this._string.gotoAndPlay(0);
	this._string.animationSpeed = this._string.totalFrames/1;
	this._string.looping = true;
	this._container.addChild(this._string);
	
	// Balloon
	var sequence = new p3.MovieClipSequence();
	sequence.addTextures([this._assetManager.getTexture("balloon01")]);

	this._sprite = new p3.MovieClip(sequence);
	this._sprite.anchor = new PIXI.Point(0.5, 0.5);
	this._sprite.gotoAndPlay(p3.Utils.randomInt(0, this._sprite.totalFrames));
	this._container.addChild(this._sprite);

	// Particles
	this._hitPS      = new cloudkid.Emitter(this, [this._assetManager.getTexture("star_part"), this._assetManager.getTexture("dot_particle")], this._assetManager.getJSON("avatarHit_ps"));
	this._hitPS.emit = false;
	
	this._bombPS = new cloudkid.Emitter(this._container, [this._assetManager.getTexture("dot_particle")], this._assetManager.getJSON("bombLite_ps"));
	this._bombPS.emit = true;
	
	this.reset();
}

/**
 */
Enemy.prototype.init = function()
{

};

/**
 */
Enemy.prototype.update = function()
{
	ScrollerObject.prototype.update.call(this);

	// Particles
	this._hitPS.update(p3.Timestep.deltaTime);
	this._bombPS.update(p3.Timestep.deltaTime);
};

/**
 */
Enemy.prototype.reset = function()
{
	ScrollerObject.prototype.reset.call(this);

	this._container.x = 0;
	this._container.y = 0;
	this._container.scale = new PIXI.Point(1,1);
	this._container.alpha = 1;
	this._hasBeenHit = false;
	this._bombPS.emit = true;

	var newSprite = p3.Utils.randomInt(0, this._sprite.totalFrames);
	this._sprite.gotoAndStop(newSprite);

	this.areaRect = new PIXI.Rectangle(-(this._sprite.width)/2 + 15, -(this._sprite.height)/2 + 40, this._sprite.width - 30, this._sprite.height - 25);
	this.collisionRect = this.areaRect.clone();

	if(!!this._timeline) this._timeline.clear();

	this._timeline = new TimelineMax();
	this._timeline.to(this._container.scale, 0.5, {x:.9, y:.9, ease:Sine.easeInOut, yoyo:true, repeat:-1}, 0);
	this._timeline.to(this._container, 1, {y: 10 , ease:Sine.easeInOut, yoyo:true, repeat:-1}, Math.random());
	Common.animator.add(this._timeline);


	// Debug
	// this.drawCollisionRect();
};

/**
 */
Enemy.prototype.hit = function()
{
	if(this._hasBeenHit) return;

	this._hasBeenHit = true;
	this._bombPS.emit = false;

	this._timeline = new TimelineMax();
	this._timeline.to(this._container, 0.2, {alpha:0, ease:Linear.easeOut}, 0);
	this._timeline.to(this._container.scale, 0.2, {x:3, y:3, ease:Linear.easeOut}, 0);
	Common.animator.add(this._timeline);

	this._hitPS.emit = true;
}

/**
 */
Enemy.prototype.pause = function()
{

}

/**
 */
Enemy.prototype.resume = function()
{

}



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================



//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(Enemy.prototype, "hasBeenHit", {

	get: function() {
		return this._hasBeenHit;
	}
});

//===================================================


},{"../Common":2,"../general/SoundSFX":14,"../scroller/ScrollerObject":29}],9:[function(require,module,exports){
"use strict";

var Common         = require("../Common");
var ScrollerObject = require("../scroller/ScrollerObject");
var SoundSFX       = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Pickup()
{
	/**
	 * @type {P3.MovieClip}
	 */
	this._sprite = null;

	/**
	 * @type {Boolean}
	 */
	this._hasBeenHit = false;

	ScrollerObject.call(this, "pickup", true);

	this.create();
}
module.exports = Pickup;
Pickup.prototype = Object.create(ScrollerObject.prototype);
Pickup.prototype.constructor = Pickup;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Pickup.prototype.create = function()
{
	var textureArr = [];
	textureArr.push(this._assetManager.getTexture("pickup"));

	var sequence = new p3.MovieClipSequence();
	sequence.addTextures(textureArr);

	this._sprite = new p3.MovieClip(sequence);
	this._sprite.anchor = new PIXI.Point(0.5, 0.5);
	this._sprite.gotoAndPlay(p3.Utils.randomInt(0, this._sprite.totalFrames));
	this.addChild(this._sprite);

	this.reset();
}

/**
 */
Pickup.prototype.init = function()
{

};

/**
 */
Pickup.prototype.update = function()
{
	ScrollerObject.prototype.update.call(this);
};

/**
 */
Pickup.prototype.reset = function()
{
	ScrollerObject.prototype.reset.call(this);

	this._sprite.x = 0;
	this._sprite.y = 0;
	this._sprite.scale = new PIXI.Point(1,1);
	this._sprite.alpha = 1;
	this._hasBeenHit = false;

	var newSprite = p3.Utils.randomInt(0, this._sprite.totalFrames);
	this._sprite.gotoAndStop(newSprite);

	this.areaRect = new PIXI.Rectangle(-(this._sprite.width)/2 + 15, -(this._sprite.height)/2 + 15, this._sprite.width - 30, this._sprite.height - 30 + 100);
	this.collisionRect = this.areaRect.clone();

	if(!!this._timeline)
	{
		this._timeline.clear();
		Common.animator.remove(this._timeline);
	}

	this._timeline = new TimelineMax();
	this._timeline.to(this._sprite.scale, 0.5, {x:.9, y:.9, ease:Sine.easeInOut, yoyo:true, repeat:-1}, 0);
	this._timeline.to(this._sprite, 1, {y:50, ease:Sine.easeInOut, yoyo:true, repeat:-1}, Math.random());
	Common.animator.add(this._timeline);


	// Debug
	// this.drawCollisionRect();
};

/**
 */
Pickup.prototype.hit = function()
{
	if(this._hasBeenHit) return;

	this._hasBeenHit = true;
	
	this._timeline.clear();
	this._timeline = new TimelineMax();
	this._timeline.to(this._sprite, 0.1, {alpha:0, ease:Linear.easeOut}, 0);
	this._timeline.to(this._sprite.scale, 0.1, {x:1.75, y:1.75, ease:Linear.easeOut}, 0);
}

/**
 */
Pickup.prototype.pause = function()
{

}

/**
 */
Pickup.prototype.resume = function()
{

}



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================



//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(Pickup.prototype, "hasBeenHit", {

	get: function() {
		return this._hasBeenHit;
	}
});

//===================================================


},{"../Common":2,"../general/SoundSFX":14,"../scroller/ScrollerObject":29}],10:[function(require,module,exports){
var Common          = require("../Common");
var ScrollerObject  = require("../scroller/ScrollerObject");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 * @param {!Number} enemyType
 */
function PickupParticleHolder(x, y)
{
	/**
     * @type {p3.ObjectPool}
     */
    this._pool = null;

    /**
     * @type {Array<ScrollerObject>}
     */
    this._objects = null;

	this._targetX = x;
	this._targetY = y;

	ScrollerObject.call(this, "PickupParticleHolder", false);
}
module.exports = PickupParticleHolder;
PickupParticleHolder.prototype = Object.create(ScrollerObject.prototype);
PickupParticleHolder.prototype.constructor = PickupParticleHolder;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
PickupParticleHolder.prototype.init = function()
{
	this._pool = new p3.ObjectPool(PIXI.Sprite, 2, [this._assetManager.getTexture("star2_part")]);
	this._objects = [];
	this.areaRect = new PIXI.Rectangle(0, 0, 0, 0);
};

/**
 */
PickupParticleHolder.prototype.update = function()
{
	ScrollerObject.prototype.update.call(this);

	for(var i = 0; i < this._objects.length; i++)
	{

	}
};

/**
 * @param {ScrollerObject} obj
 * @param {Number} minScale
 * @param {Number} maxScale
 */
PickupParticleHolder.prototype.addObject = function(x, y, delay)
{
	var particle = this._pool.create();

	if(particle == null)
	{
		this._pool.expand(2);
		particle = this._pool.create();
	}

	var angle = Math.random() * 360;
	var radius = 35;
	
	particle.x = x + Math.cos(angle * PIXI.DEG_TO_RAD) * radius;
	particle.y = y + Math.sin(angle * PIXI.DEG_TO_RAD) * radius;
	particle.alpha = 0;
	particle.scale = new PIXI.Point(0.5, 0.5);
	particle.anchor = new PIXI.Point(0.5, 0.5);
	particle.rotation = 0;
	this.addChild(particle);
	this._objects.push({obj:particle});

	var tl = new TimelineMax(
	{
		onComplete: function()
		{
			this.removeObject(particle);

		},
		onCompleteScope: this
	});

	var angle = Math.random() * 360;
	var radius = 20;
	tl.to(particle, 1 + delay, {x: this._targetX + Math.cos(angle * PIXI.DEG_TO_RAD) * radius,  y: this._targetY + Math.sin(angle * PIXI.DEG_TO_RAD) * radius, ease:Back.easeIn}, 0);
	tl.to(particle, 0.25+ delay, {alpha:1, ease:Quad.easeOut}, 0);
	tl.to(particle, 0.25, {alpha:0, ease:Quad.easeOut}, 1 + delay);
	tl.to(particle.scale, 1 + delay, {x:1.25, y:1.25, ease:Sine.easeOut}, 0);
	tl.to(particle, 1+ delay, {rotation:360 * PIXI.DEG_TO_RAD, ease:Linear.easeNone}, 0);
	Common.animator.add(tl);

	return this._objects[this._objects.length-1];
}

/**
 */
PickupParticleHolder.prototype.removeObject = function(obj)
{
	for(var i = 0; i < this._objects.length; i++)
	{
		if(this._objects[i].obj == obj)
		{
			this.removeChild(this._objects[i].obj);
			this._pool.free(this._objects[i].obj);
			this._objects.splice(i, 1);
		}
	}
}



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================



//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================


},{"../Common":2,"../scroller/ScrollerObject":29}],11:[function(require,module,exports){
"use strict";

var Common         = require("../Common");
var ScrollerObject = require("../scroller/ScrollerObject");
var SoundSFX       = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function RainbowTail()
{
	this._segmentCount          = p3.Device.isMobile ? 20 : 30;
	this._segmentLength         = 10;
	this._rainbowColors         = [0x692D86, 0x19BED3, 0xE91575, 0xF5D30D, 0x6ABD46];
	this._rainbowColorThickness = 15;
	this._segments              = [];
	this._positions             = [];

	ScrollerObject.call(this, "rainbowTail", true);
}
module.exports = RainbowTail;
RainbowTail.prototype = Object.create(ScrollerObject.prototype);
RainbowTail.prototype.constructor = RainbowTail;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
RainbowTail.prototype.init = function()
{
	this._container = new PIXI.Container;
	this.addChild(this._container);

	for(var i = 0; i < this._segmentCount + 1; i++)
	{
		this._positions[i] = {x:0, y:0};
	}

	for(var i = 0; i < this._segmentCount; i++)
	{
		this._segments[i] = new PIXI.Graphics();
		this._container.addChild(this._segments[i]);
	}

	this.areaRect = new PIXI.Rectangle(-1,-1,2,2);
};


/**
 */
RainbowTail.prototype.update = function()
{
}

/**
 */
RainbowTail.prototype.follow = function(target, scrollingSpeed)
{
	this._positions[0].x = target.x ;
	this._positions[0].y = target.y ;

	for(var i = 1; i < this._segmentCount+1; i++)
	{
		if(this._positions[i].x == 0 && this._positions[i].y == 0)
		{
			this._positions[i].x = target.x;
			this._positions[i].y = target.y	;
		}

		this._positions[i].x -= scrollingSpeed;

		var distance = Math.sqrt(Math.pow(this._positions[i].x - this._positions[i-1].x, 2) + Math.pow(this._positions[i].y - this._positions[i-1].y, 2));

		if(distance > this._segmentLength)
		{
			var dX = this._positions[i-1].x - this._positions[i].x;
			var dY = this._positions[i-1].y - this._positions[i].y;

			this._positions[i].x = this._positions[i-1].x - dX * this._segmentLength/distance;
			this._positions[i].y = this._positions[i-1].y - dY * this._segmentLength/distance;
		}
	}

	for(var i = 0; i < this._segmentCount; i++)
	{
		this._segments[i].clear();

		for(var c = 0; c < this._rainbowColors.length; c++)
		{
			if(this._positions[i].x == this._positions[i+1].x && this._positions[i].y == this._positions[i+1].y) continue;

			// Get previous segment perpendicular vector (90° if the first)
			var perp1 = new PIXI.Point(0, 1);
			if(i != 0)
			{
				var v = new PIXI.Point(this._positions[i].x - this._positions[i-1].x, this._positions[i].y - this._positions[i-1].y);

				perp1 = new PIXI.Point(v.y, -v.x);
				var perp1Length = Math.sqrt(v.x * v.x + v.y * v.y);
				perp1.x /= perp1Length;
				perp1.y /= perp1Length;
			}

			// Get current segment's perpendicular vector
			var v = new PIXI.Point(this._positions[i+1].x - this._positions[i].x, this._positions[i+1].y - this._positions[i].y);
			var perp2       = new PIXI.Point(v.y, -v.x);
			var perp2Length = Math.sqrt(v.x * v.x + v.y * v.y);
			perp2.x /= perp2Length;
			perp2.y /= perp2Length;

			// Draw segment
			// this._segments[i].lineStyle(1, this._rainbowColors[c], 1); // debug
			this._segments[i].beginFill(this._rainbowColors[c], 1 - i/this._segmentCount);
			this._segments[i].moveTo(this._positions[i].x   + perp1.x * this._rainbowColorThickness/2 + perp1.x * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c),
			                         this._positions[i].y   + perp1.y * this._rainbowColorThickness/2 + perp1.y * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c));
			this._segments[i].lineTo(this._positions[i].x   - perp1.x * this._rainbowColorThickness/2 + perp1.x * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c),
			                         this._positions[i].y   - perp1.y * this._rainbowColorThickness/2 + perp1.y * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c));
			this._segments[i].lineTo(this._positions[i+1].x + perp2.x * this._rainbowColorThickness/2 + perp2.x * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c),
			                         this._positions[i+1].y + perp2.y * this._rainbowColorThickness/2 + perp2.y * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c));

			this._segments[i].moveTo(this._positions[i+1].x - perp2.x * this._rainbowColorThickness/2 + perp2.x * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c),
			                         this._positions[i+1].y - perp2.y * this._rainbowColorThickness/2 + perp2.y * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c));
			this._segments[i].lineTo(this._positions[i].x   - perp1.x * this._rainbowColorThickness/2 + perp1.x * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c),
			                         this._positions[i].y   - perp1.y * this._rainbowColorThickness/2 + perp1.y * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c));
			this._segments[i].lineTo(this._positions[i+1].x + perp2.x * this._rainbowColorThickness/2 + perp2.x * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c),
			                         this._positions[i+1].y + perp2.y * this._rainbowColorThickness/2 + perp2.y * this._rainbowColorThickness * (-(this._rainbowColors.length-1)/2 + c));
			this._segments[i].endFill();
		}
	}
};

/**
 */
RainbowTail.prototype.pause = function()
{

}

/**
 */
RainbowTail.prototype.resume = function()
{

}



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================



//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================


},{"../Common":2,"../general/SoundSFX":14,"../scroller/ScrollerObject":29}],12:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function ScoreCounter()
{
	/**
	 * @type {p3.AssetManager}
	 */
	this._assetManager = p3.AssetManager.instance;

	/**
	 * @type {p3.BitmapText}
	 */
	this._text = null;


	PIXI.Container.call(this);
}
module.exports = ScoreCounter;
ScoreCounter.prototype = Object.create(PIXI.Container.prototype);
ScoreCounter.prototype.constructor = ScoreCounter;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
ScoreCounter.prototype.init = function()
{
	// this._text = new p3.BitmapText("", this._assetManager.getFontAtlas("score"), p3.BitmapText.ALIGN_LEFT, 0xFFFF00);
	this._text = new PIXI.Text("", {font: "64px GrilledCheeseBTN-Regular", fill: 0xEC4399, align: "center", stroke: 0xffffff, strokeThickness: 12, lineJoin: 'round'});
	this._text.y = -42;
	this._text.scale = new PIXI.Point(0.7, 0.7);
	this.addChild(this._text);
};

/**
 */
ScoreCounter.prototype.updateScore = function(newScore)
{
	this._text.text = newScore.toString();
};

/**
 */
ScoreCounter.prototype.pause = function()
{

}

/**
 */
ScoreCounter.prototype.resume = function()
{

}

//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================



//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================




},{"../Common":2}],13:[function(require,module,exports){
"use strict";

var Common          = require("../Common");
var SoundSFX        = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function NextButton(buttonString, delay)
{
	/**
     * @type {p3.AssetManager}
     */
    this._assetManager = p3.AssetManager.instance;

	/**
     * @type {signals.Signal}
     */
    this.signals = {};
	this.signals.clicked = new signals.Signal();
	this.signals.clickFinish = new signals.Signal();

	/**
     * @type {PIXI.Sprite}
     */
    this._banner = null;

    /**
     * @type {p3.BitmapText}
     */
    this._button = null;

    /**
     * @type {String}
     */
    this._buttonString = buttonString || "next";

    /**
     * @type {Number}
     */
    this._delay = delay || 0;

	PIXI.Container.call(this);
}
module.exports = NextButton;
NextButton.prototype = Object.create(PIXI.Container.prototype);
NextButton.prototype.constructor = NextButton;


//===================================================
// PUBLIC METHODS
//===================================================


/**
 */
NextButton.prototype.init = function()
{
	Common.animator.setTimeout(function(){

		this._banner = new PIXI.Sprite(this._assetManager.getTexture("ui"));
		this._banner.anchor = new PIXI.Point(0.5, 0.5);
		// this._banner.scale.x = 0;
		this.addChild(this._banner);

		this._button = new p3.Button(
			this._assetManager.getTexture("but_" + this._buttonString + "_def"), 
			this._assetManager.getTexture("but_" + this._buttonString + "_over"), 
			this._assetManager.getTexture("but_" + this._buttonString + "_pressed"));
		
		// this._button.scale = new PIXI.Point(0, 0);
        this._button.signals.down.addOnce(this.onButtonClick, this);
		this._button.signals.over.add(this.onButtonOver, this);
		this._button.animate = false;
		this.addChild(this._button);

		// var tl = new TimelineMax();
		// tl.to(this._banner.scale, 1, {x:1, ease:Back.easeOut});
		// tl.to(this._button.scale, 1.3, {x:1, ease:Elastic.easeOut}, 0);
		// tl.to(this._button.scale, 1.3, {y:1, ease:Elastic.easeOut}, 0.1);
		// Common.animator.add(tl);

	}, this._delay, this);
};



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

/**
 */
NextButton.prototype.onButtonClick = function()
{
/*     TweenMax.killTweensOf(this._button.scale);
    Common.animator.add(TweenMax.to(this._button.scale, .2, {x:0.6, y:0.6, ease:Sine.easeInOut, onComplete:function(){
        Common.animator.add(TweenMax.to(this._button.scale, 1, {x:1, y:1, ease:Elastic.easeOut, onComplete:function(){
        	this.signals.clickFinish.dispatch();
        }, onCompleteScope:this}));
    }, onCompleteScope:this})); */

    // SoundSFX.play("sfx_button_play");
	this.signals.clicked.dispatch();
}

NextButton.prototype.onButtonOver = function()
{
    // SoundSFX.play("sfx_btn_rollover_00");
}


//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================




},{"../Common":2,"../general/SoundSFX":14}],14:[function(require,module,exports){
"use strict";

/**
 *  SoundSFX
 *
 *  Created by Legman on 11/06/2015.
 *
 */

var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function SoundSFX() {
}
module.exports = SoundSFX;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param {!p3.Button} button
 * @param {Boolean=} enableClickSound
 * @param {Boolean=} enableOverSound
 */
SoundSFX.button = function(button, enableClickSound, enableOverSound) {
    enableClickSound = enableClickSound == undefined ? true : enableClickSound;
    enableOverSound = enableOverSound == undefined ? true : enableOverSound;

    if(enableClickSound)
    {    
        button.signals.click.add(function(button) {
            p3.AudioManager.instance.playSound("sfx_btn_press_reverb");
        }, this);
    }

    if(enableOverSound)
    {    
        button.signals.over.add(function(button) {
            p3.AudioManager.instance.playSound("sfx_btn_rollover_reverb");
        }, this);
    }
};

/**
 * @param {!String} sound
 * @param {Object=} params
 * @param {Number=} delay
 */
SoundSFX.play = function(sound, params, delay) {

    if(delay == null)
    {    
        return p3.AudioManager.instance.playSound(sound, params);
    }
    else
    {    
        setTimeout(function(){
            p3.AudioManager.instance.playSound(sound, params);
        }, delay);
    }
};

SoundSFX.playMusic = function(sound, params, delay) {

    if(delay == null)
    {    
        p3.AudioManager.instance.playMusic(sound, params);
    }
    else
    {    
        setTimeout(function(){
            p3.AudioManager.instance.playMusic(sound, params);
        }, delay);
    }
};

/**
 * @param {!String} sound
 */
SoundSFX.stop = function(sound) {
    var currentSounds = p3.AudioManager.instance.soundsSFX;
    for(var i = 0; i < currentSounds.length; i++)
    {
        if(currentSounds[i].name == sound)
        {
           p3.AudioManager.instance.stopSound(sound);
        }   
    }
};

/**
 * @param {!Array <String>} sounds
 */
SoundSFX.playRandomFrom = function(sounds) {
	p3.AudioManager.instance.playSound(sounds[Math.floor(Math.random()*sounds.length)]);
};




//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2}],15:[function(require,module,exports){
/**
 *  MuteButton
 *
 *  Created by Legman on 16/09/2015.
 *
 */

/**
 * @param {!PIXI.Texture} onNormalTexture
 * @param {!PIXI.Texture} offNormalTexture
 * @param {PIXI.Texture=} onOverTexture
 * @param {PIXI.Texture=} offOverTexture
 * @param {PIXI.Texture=} onDownTexture
 * @param {PIXI.Texture=} offDownTexture
 * @param {PIXI.Texture=} onDisabledTexture
 * @param {PIXI.Texture=} offDisabledTexture
 * @constructor
 */
function MuteButton(
    onNormalTexture,
    offNormalTexture,
    onOverTexture,
    offOverTexture,
    onDownTexture,
    offDownTexture
) {
    var audio = p3.AudioManager.instance;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._onNormalTexture = onNormalTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._offNormalTexture = offNormalTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._onOverTexture = onOverTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._offOverTexture = offOverTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._onDownTexture = onDownTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._offDownTexture = offDownTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._normalTexture = audio.isMute ? offNormalTexture : onNormalTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._overTexture = audio.isMute ? offOverTexture : onOverTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._downTexture = audio.isMute ? offOverTexture : onDownTexture;


    p3.Button.call(
        this,
        this._normalTexture,
        this._overTexture,
        this._downTexture
    );
}
module.exports                      = MuteButton;
MuteButton.prototype                = Object.create(p3.Button.prototype);
MuteButton.prototype.constructor    = MuteButton;

/**
 * @param {!Event} event
 */
MuteButton.prototype.onMouseClick = function(event) {
    var audio = p3.AudioManager.instance;
    audio.mute(!audio.isMute);

    this._normalTexture     = audio.isMute ? this._offNormalTexture    : this._onNormalTexture;
    this._overTexture       = audio.isMute ? this._offOverTexture      : this._onOverTexture;
    this._downTexture       = audio.isMute ? this._offDownTexture      : this._onDownTexture;
    this._disabledTexture   = audio.isMute ? this._offDisabledTexture  : this._onDisabledTexture;

    p3.Button.prototype.onMouseClick.call(this, event);
};

},{}],16:[function(require,module,exports){
/**
 *  Scene
 *
 *  Created by Legman on 4/09/2015.
 *
 */

/**
 * @constructor
 */
function Scene() {
    this.signals            = {};
    this.signals.next       = new signals.Signal();
    this.signals.previous   = new signals.Signal();
    this.signals.home       = new signals.Signal();
    this.signals.pause      = new signals.Signal();

    PIXI.Container.call(this);
}
module.exports                  = Scene;
Scene.prototype                 = Object.create(PIXI.Container.prototype);
Scene.prototype.constructor     = Scene;

/**
 * This method is called when a scene is initialized.
 */
Scene.prototype.init = function() {
    // override
};

/**
 * This method is called when a scene is destroyed.
 */
Scene.prototype.dispose = function() {
    this.signals.next.dispose();
    this.signals.previous.dispose();
    this.signals.home.dispose();
    this.signals.pause.dispose();

    this.removeChildren();
};

/**
 * This method is called when the device dimensions are changed.
 */
Scene.prototype.resize = function() {
    // override
};

/**
 * This method is called when the scene is 'top' of the stack.
 */
Scene.prototype.update = function() {
    // override
};

/**
 * This method is called when the scene is shown for the first time.
 */
Scene.prototype.appear = function() {
    this.animateIn();
};

/**
 * This method is called when the scene is shown - regardless of actual visibility.
 */
Scene.prototype.show = function() {
    this.animateIn();
};

/**
 * This method is called when the scene is hidden - regardless of actual visibility.
 */
Scene.prototype.hide = function() {
    // override
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
Scene.prototype.animateIn = function(callback, scope) {
    scope = scope || window;
    if (callback) {
        callback.call(scope);
    }
};

/**
 * @param {!Function} callback
 * @param {*=} scope
 */
Scene.prototype.animateOut = function(callback, scope) {
    scope = scope || window;
    if (callback) {
        callback.call(scope);
    }
};
},{}],17:[function(require,module,exports){
/**
 *  SceneManager
 *
 *  Created by Legman on 4/09/2015.
 *
 */

var Scene       = require("./Scene");
var Transition  = require("./Transition");

/**
 * @constructor
 */
function SceneManager() {
    /**
     * @type {PIXI.DisplayObject}
     * @private
     */
    this._stage = null;

    /**
     * @type {PIXI.CanvasRenderer | PIXI.WebGLRenderer}
     * @private
     */
    this._renderer = null;

    /**
     * @type {Array.<Scene>}
     * @private
     */
    this._stack = [];

    /**
     * @type {Transition}
     * @private
     */
    this._transition = null;
}
module.exports = SceneManager;

/**
 * @param {!PIXI.DisplayObject} stage
 * @param {!PIXI.CanvasRenderer | !PIXI.WebGLRenderer} renderer
 */
SceneManager.prototype.init = function(stage, renderer) {
    this._stage         = stage;
    this._renderer      = renderer;
};

/**
 */
SceneManager.prototype.update = function() {
    if (this._stack.length) {
        this.top.update();
    }
};

/**
 * @param {!Scene} scene
 * @param {Transition=} transition
 */
SceneManager.prototype.add = function(scene, transition) {
    if (this.transitionInProgress) return;

    this._transition = transition || new Transition();
    if (this._transition.requiresWebGL && !(this._renderer instanceof PIXI.WebGLRenderer)) {
        this._transition            = transition.fallback();
        this._transition.push       = transition.push;
        this._transition.replace    = transition.replace;
        this._transition.wait       = transition.wait;
    }
    this._transition.init();
    this._stage.addChild(this._transition);

    this._transition.signals.in.addOnce(function(transition) {
        p3.Timestep.queueCall(swap, [scene], this);
    }, this);
    this._transition.signals.out.addOnce(function(transition) {
        this._transition = null;

        transition.parent.removeChild(transition);
        transition.dispose();

        if (transition.wait) {
            p3.Timestep.queueCall(scene.appear, null, scene);
        }
    }, this);
    this._transition.in();

    function swap(scene) {
        if (this.top) {
            this.top.hide();
            if (!this._transition.push) {
                while (this.top) {
                    this.top.parent.removeChild(this.top);
                    this.top.dispose();
                    this._stack.pop();
                }
            } else if (this._transition.replace) {
                var temp;
                for (var i = 0; i < this._stack.length; ++ i) {
                    temp = this._stack[i];
                    if (temp.parent) {
                        temp.parent.removeChild(temp);
                    }
                }
            }
        }

        scene.init();
        scene.resize();
        if (!scene.parent) {
            this.stage.addChildAt(scene, this._transition.parent.getChildIndex(this._transition));
        }
        this._stack.push(scene);

        if (!this._transition.wait) {
            p3.Timestep.queueCall(scene.appear, null, scene);
        }
        this._transition.out();

        console.log(this._stack);
    }
};

/**
 * @param {Transition=} transition
 * @param {Number=} count
 */
SceneManager.prototype.remove = function(transition, count) {
    if (this.transitionInProgress) return;

    this._transition    = transition || new Transition();
    count               = Math.max(1, count) || 1;
    if (this._transition.requiresWebGL && !(this._renderer instanceof PIXI.WebGLRenderer)) {
        this._transition            = transition.fallback();
        this._transition.push       = transition.push;
        this._transition.replace    = transition.replace;
        this._transition.wait       = transition.wait;
    }
    this._transition.init();
    this._stage.addChild(this._transition);

    this._transition.signals.in.addOnce(function(transition) {
        p3.Timestep.queueCall(swap, [count], this);
    }, this);
    this._transition.signals.out.addOnce(function(transition) {
        this._transition = null;

        transition.parent.removeChild(transition);
        transition.dispose();

        if (transition.wait) {
            this.top.show();
        }
    }, this);
    this._transition.in();

    function swap(count) {
        for (var i = 0; i < count; ++ i) {
            this.top.hide();
            this.top.parent.removeChild(this.top);
            this.top.dispose();
            this._stack.pop();
        }

        var scene = this.top;
        scene.resize();
        if (!scene.parent) {
            this.stage.addChildAt(scene, this._transition.parent.getChildIndex(this._transition));
        }

        if (!this._transition.wait) {
            scene.show();
        }
        this._transition.out();

        console.log(this._stack);
    }
};

/**
 */
SceneManager.prototype.clear = function() {
};

/**
 */
SceneManager.prototype.resize = function() {
    var scene;
    for (var i = 0; i < this._stack.length; ++ i) {
        scene = this._stack[i];
        scene.resize();
    }
    if (this._transition) {
        this._transition.resize();
    }
};

Object.defineProperty(SceneManager.prototype, "stage", {
    /**
     * @returns {PIXI.DisplayObject}
     */
    get: function() {
        return this._stage;
    }
});

Object.defineProperty(SceneManager.prototype, "top", {
    /**
     * @returns {Scene}
     */
    get: function() {
        return this._stack.length ? this._stack[this._stack.length - 1] : null;
    }
});

Object.defineProperty(SceneManager.prototype, "transitionInProgress", {
    /**
     * @returns {Boolean}
     */
    get: function() {
        return (this._transition != null ? true : false);
    }
});

},{"./Scene":16,"./Transition":18}],18:[function(require,module,exports){
/**
 *  Transition
 *
 *  Created by Legman on 4/09/2015.
 *
 */

/**
 * @constructor
 */
function Transition() {
    /**
     * @type {*}
     */
    this.signals        = {};
    this.signals.in     = new signals.Signal();
    this.signals.out    = new signals.Signal();

    /**
     * @type {Boolean}
     */
    this.push = false;

    /**
     * @type {Boolean}
     */
    this.replace = true;

    /**
     * @type {Boolean}
     */
    this.wait = true;

    /**
     * @type {Boolean}
     */
    this.requiresWebGL = false;

    PIXI.Container.call(this);
}
module.exports                      = Transition;
Transition.prototype                = Object.create(PIXI.Container.prototype);
Transition.prototype.constructor    = Transition;

Transition.prototype.init = function() {
    // override
};

Transition.prototype.dispose = function() {
    this.signals.in.dispose();
    this.signals.out.dispose();

    this.removeChildren();
};

Transition.prototype.in = function() {
    this.signals.in.dispatch(this);
};

Transition.prototype.out = function() {
    this.signals.out.dispatch(this);
};

/**
 * @returns {Transition}
 */
Transition.prototype.resize = function() {
    // override
};

Transition.prototype.fallback = function() {
    // override
};
},{}],19:[function(require,module,exports){
/**
 *  CNMoreGamesScene
 *
 *  Created by Legman on 13/07/2017.
 *
 */

"use strict";

var Common = require("../Common");
var SimpleScreen = require("../screens/SimpleScreen");

/**
 * @constructor
 */
function CNMoreGamesScene() {
    SimpleScreen.call(this);

    /**
     * @type {CNGamesWidget}
     * @private
     */
    this._cngw = null;

    /**
     * @type {PIXI.Graphics}
     * @private
     */
    this._overlay = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._panel = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._title = null;

    /**
     * @type {Array.<p3.Button>}
     * @private
     */
    this._buttons = [];
}
module.exports = CNMoreGamesScene;
CNMoreGamesScene.prototype = Object.create(SimpleScreen.prototype);
CNMoreGamesScene.prototype.constructor = CNMoreGamesScene;

CNMoreGamesScene.prototype.init = function() {
    SimpleScreen.prototype.init.call(this);

    this._cngw = new CNGamesWidget(window.og.language);

    var assets = Common.assets;

    this._overlay = new PIXI.Graphics();
    this._overlay.visible = false;
	this._overlay.interactive = true;
    this.addChild(this._overlay);

    this._panel = new PIXI.Sprite(this._assetManager.getTexture("cngw_panel"));
    this._panel.x = Common.STAGE_WIDTH * 0.5;
    this._panel.y = p3.View.height * 0.5;
    this._panel.anchor = new PIXI.Point(0.5, 0.5);
    this._panel.visible = false;
    this.addChild(this._panel);

    this._titleLabel = new PIXI.Text(this._cngw.title, {
        font: "60px Arial",
        align: "center",
        stroke: 0x003ABF,
        strokeThickness: 4, 
		lineJoin: 'round',
        fill: 0xFFFFFF, // [0xFFFFFF, 0xB8FFFF],
        fillGradientType: 0 // PIXI.TEXT_GRADIENT.LINEAR_VERTICAL
    });
    this._titleLabel.x = 0;
    this._titleLabel.y = -234;
    this._titleLabel.pivot.x = this._titleLabel.width * 0.5;
    this._titleLabel.pivot.y = this._titleLabel.height * 0.5;
    this._panel.addChild(this._titleLabel);

    this._loader = new PIXI.Sprite(this._assetManager.getTexture("cngw_loader"));
    this._loader.anchor = new PIXI.Point(0.5, 0.5);
    this._panel.addChild(this._loader);

    this._closeButton = new p3.Button(this._assetManager.getTexture("cngw_btn_close"));
    this._closeButton.x = this._panel.width * 0.5;
    this._closeButton.y = -this._panel.height * 0.5 + 14;
    this._closeButton.animate = true;
    this._closeButton.visible = true;
    this._closeButton.overSoundName = "sfx_btn_rollover_00";
    this._closeButton.clickSoundName = "sfx_btn_play_00";
    this._closeButton.signals.click.add(this._onCloseButtonClick, this);
    this._panel.addChild(this._closeButton);
};

CNMoreGamesScene.prototype.destroy = function() {
    TweenMax.killChildTweensOf(this);

    SimpleScreen.prototype.destroy.call(this);
};

CNMoreGamesScene.prototype.resize = function() {
    this.x = (p3.View.width - Common.STAGE_WIDTH) * 0.5;

	this._overlay.clear();
    this._overlay.beginFill(0x0, 0.6);
    this._overlay.drawRect((Common.STAGE_WIDTH - p3.View.width) * 0.5, 0, p3.View.width, p3.View.height);
    this._overlay.endFill();
};

CNMoreGamesScene.prototype.appear = function() {
    SimpleScreen.prototype.appear.call(this);

    this._loadTextures(function() {
        TweenMax.to(this._loader, 0.4, {
            delay: 0.4,
            alpha: 0,
            ease: Power1.easeInOut,
            onComplete: function() {
                this._createButtons();

                this._loader.visible = false;
                TweenMax.killTweensOf(this._loader);
            },
            onCompleteScope: this
        });
    }, this);
};

/**
 * @param {function} [callback]
 * @param {*} [scope]
 */
CNMoreGamesScene.prototype.animateIn = function(callback, scope)
{
    this._overlay.alpha = 0;
    TweenMax.to(this._overlay, 0.24, {
        alpha: 1,
        ease: Power1.easeInOut,
        onStart: function() {
            this._overlay.visible = true;
        },
        onStartScope: this
    });

    this._panel.scale = new PIXI.Point();
    TweenMax.to(this._panel.scale, 0.34, {
        x: 1,
        y: 1,
        ease: Back.easeOut,
        easeParams: [2],
        onStart: function() {
            this._panel.visible = true;
        },
        onStartScope: this
    });

    this._closeButton.scale = new PIXI.Point();
    TweenMax.to(this._closeButton.scale, 0.34, {
        delay: 0.4,
        x: 1,
        y: 1,
        ease: Back.easeOut,
        easeParams: [2],
        onStart: function() {
            this._closeButton.visible = true;
        },
        onStartScope: this
    });

    TweenMax.to(this._loader, 0.5, {
        rotation: this._loader.rotation - Math.PI * 2,
        ease: Power0.easeNone,
        repeat: -1
    });
};

/**
 * @param {function} [callback]
 * @param {*} [scope]
 * @private
 */
CNMoreGamesScene.prototype._loadTextures = function(callback, scope) {
    var count = 0,
        max = 4,
        game,
        texture;

    for (var i = 0; i < Math.min(max, this._cngw.games.length); ++ i) {
        game = this._cngw.games[i];
        if (PIXI.utils.TextureCache[game.imageUrl]) {
            (++ count >= max && callback) && callback.call(scope);
        } else {
            texture = PIXI.Texture.fromImage(game.imageUrl, true);
            texture.baseTexture.on("loaded", function(baseTexture) {
                (++ count >= max && callback) && callback.call(scope);
            }, this);
        }
    }
};

/**
 * @private
 */
CNMoreGamesScene.prototype._createButtons = function() {
    var assets = Common.assets;

    var spacing = new PIXI.Point(356, 230);
    var textures = [
        this._assetManager.getTexture("cngw_game_001"),
        this._assetManager.getTexture("cngw_game_002"),
        this._assetManager.getTexture("cngw_game_003"),
        this._assetManager.getTexture("cngw_game_004")
    ];

    var max = 4,
        game,
        states,
        button;

    for (var i = 0; i < Math.min(max, this._cngw.games.length); ++ i) {
        game = this._cngw.games[i];

        button = new p3.Button(PIXI.utils.TextureCache[game.imageUrl]);
        button.x = (i % 2 * spacing.x) - Math.floor((max - 1) / 2) * spacing.x * 0.5;
        button.y = Math.floor(i / 2) * spacing.y - 86;
        button.animate = true;
        button.url = game.url;
        button.signals.click.add(this._onGameButtonClick, this);
        this._panel.addChild(button);

        button.image = new PIXI.Sprite(textures[i]);
        button.image.anchor = new PIXI.Point(0.5, 0.5);
        button.addChild(button.image);

        animate.call(button, i * 0.04);
    }

    function animate(delay) {
        this.visible = false;
        this.interactive = false;

        this.scale = new PIXI.Point(0, 0);
        TweenMax.to(this.scale, 0.34, {
            delay: delay,
            x: 1,
            y: 1,
            ease: Back.easeOut,
            easeParams: [2],
            onStart: function() {
                this.visible = true;
            },
            onStartScope: this,
            onComplete: function() {
                this.interactive = true;
            },
            onCompleteScope: this
        });
    }
};

/**
 * @param {p3.Button} button
 * @private
 */
CNMoreGamesScene.prototype._onGameButtonClick = function(button) {
    window.open(button.url, "_BLANK");
};

/**
 * @param {p3.Button} button
 * @private
 */
CNMoreGamesScene.prototype._onCloseButtonClick = function(button) {
    this.signals.requestedNextScreen.dispatch(this);
};

},{"../Common":2,"../screens/SimpleScreen":25}],20:[function(require,module,exports){
"use strict";

var Common       = require("../Common");
var SimpleScreen = require("../screens/SimpleScreen");
var NextButton   = require("../general/NextButton");
var SoundSFX     = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function GameOverOverlay(score, highscore)
{
	/*
	 * @type {PIXI.Sprite}
	 */
	this._overlay          = null;
	this._gameoverPage     = null;
	this._screenTransition = null;

	/*
	 * @type {NextButton}
	 */
	this._nextButton = null;

	/*
	 * @type {p3.Button}
	 */
	this._restartButton = null;

	/*
	 * @type {p3.MuteButton}
	 */
	this._muteButton = null;

	/*
	 * @type {Number}
	 */
	this._score = score;
	this._highscore = highscore;

	/**
     * @type {p3.MovieClip}
     */
	// this._gumball = null;
	// this._darwin = null;

	SimpleScreen.call(this);

	this.signals.moreGames = new signals.Signal();
}
module.exports = GameOverOverlay;
GameOverOverlay.prototype = Object.create(SimpleScreen.prototype);
GameOverOverlay.prototype.constructor = GameOverOverlay;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
GameOverOverlay.prototype.init = function()
{
	console.log("GAME OVER INITIALIZED");

	SimpleScreen.prototype.init.call(this);

	this._overlay = new PIXI.Sprite(this._assetManager.getTexture("bg_pink", ".jpg"));
	this._overlay.alpha = 0;
	this.addChild(this._overlay);

	this._sun = new PIXI.Sprite(this._assetManager.getTexture("sun_bg"));
	this._sun.alpha = 0;
	this.addChild(this._sun);

	// Panel
	this._gameoverPage = new PIXI.Container();
	this._gameoverPage.x = Common.STAGE_WIDTH / 2;
	this._gameoverPage.y = Common.STAGE_HEIGHT / 2;
	this._gameoverPage.scale = new PIXI.Point(0, 0);
	this.addChild(this._gameoverPage);

	var bg = new PIXI.Graphics();
	bg.beginFill(0xffffff);
	bg.drawRect(-250, -110, 500, 320);
	this._gameoverPage.addChild(bg);

	var rainbow_bg = new PIXI.Sprite(this._assetManager.getTexture("bg_rainbox_endgame"));
	rainbow_bg.anchor = new PIXI.Point(0.5, 1);
	rainbow_bg.x = 0;
	rainbow_bg.y = 120;
	this._gameoverPage.addChild(rainbow_bg);

	var rainbow = new PIXI.Sprite(this._assetManager.getTexture("rainbox_endgame"));
	rainbow.anchor = new PIXI.Point(0.5, 1);
	rainbow.x = 0;
	rainbow.y = 0;
	rainbow_bg.addChild(rainbow);


		// Panel title
		var copy = this._assetManager.getJSON("config")['copy']["YOU_SCORED"][Common.COUNTRY_CODE];
		if(!copy.live)
			this._titleText = new PIXI.Text(copy.text, {font: "80px GrilledCheeseBTN-Regular", fill: 0xFCEC1B, align: "center", stroke: 0x000000, strokeThickness: 10, padding:5, lineJoin: 'round'});
		else
			this._titleText = new PIXI.Text(copy.text,  {font: (window.og.language == "ar" ? "72px FredFredburgerAra-Regular" : "72px Junegull-Regular"), fill: 0xFFFF00, align: "center", stroke: 0x000000, strokeThickness: 10, padding:5, lineJoin: 'round'});
		this._titleText.anchor = new PIXI.Point(0.5, 0.5);
		this._titleText.x = 0 + copy.offset.x;
		this._titleText.y = -320 + copy.offset.y - 50;
		this._titleText.alpha = 0;
		this._titleText.scale = new PIXI.Point(copy.scale, copy.scale);
		rainbow_bg.addChild(this._titleText);



		// Panel score
		this._scoreTextHolder = new PIXI.Container();
		this._scoreTextHolder.x = 0;
		this._scoreTextHolder.y = -140;
		this._scoreTextHolder.scale = new PIXI.Point(0, 1);
		rainbow_bg.addChild(this._scoreTextHolder);

			this._scoreText = new PIXI.Text(this._score.toString(), {font: "90px GrilledCheeseBTN-Regular", fill: 0xFF528F, align: "center", stroke: 0x000000, strokeThickness: 12, padding:5, lineJoin: 'round'});
			// var scoreText = new p3.BitmapText(this._score.toString(), this._assetManager.getFontAtlas("score"), p3.BitmapText.ALIGN_CENTER, 0xEC68A5);
			this._scoreText.x = 0;
			this._scoreText.y = -40;
			this._scoreText.anchor = new PIXI.Point(0.5, 0.5);
			this._scoreTextHolder.addChild(this._scoreText);

		// Panel highscore title
		var copy = this._assetManager.getJSON("config")['copy']["BEST_SO_FAR"][Common.COUNTRY_CODE];
		if(!copy.live)
			this._highscoreTitleText = new PIXI.Text(copy.text, {font: "48px GrilledCheeseBTN-Regular", fill: 0xFCEC1B, align: "center", stroke: 0x000000, strokeThickness: 12, padding:8, lineJoin: 'round'});
			// this._highscoreTitleText = new p3.BitmapText(copy.text, this._assetManager.getFontAtlas("text"), p3.BitmapText.ALIGN_CENTER, 0xFFFF00);
		else
			this._highscoreTitleText = new PIXI.Text(copy.text, {font: (window.og.language == "ar" ? "32px FredFredburgerAra-Regular" : "32px Junegull-Regular"), fill: 0xFFFF00, align: "center", stroke: 0x000000, strokeThickness: 10, lineJoin: 'round'});
		this._highscoreTitleText.anchor = new PIXI.Point(0.5, 0.5);
		this._highscoreTitleText.x = 0;
		this._highscoreTitleText.y = -130;
		this._highscoreTitleText.alpha = 0;
		this._highscoreTitleText.scale = new PIXI.Point(copy.scale, copy.scale);
		rainbow_bg.addChild(this._highscoreTitleText);

		if(copy.live)
		{
			this._highscoreTitleText.x += copy.offset.x;
			this._highscoreTitleText.y += copy.offset.y;
		}

		// Panel highscore
		this._highscoreTextHolder = new PIXI.Container();
		this._highscoreTextHolder.x = 0;
		this._highscoreTextHolder.y = -55;
		this._highscoreTextHolder.scale = new PIXI.Point(0, 0.75);
		rainbow_bg.addChild(this._highscoreTextHolder);

			// var highscoreText = new p3.BitmapText(this._highscore.toString(), this._assetManager.getFontAtlas("score"), p3.BitmapText.ALIGN_CENTER, 0xEC68A5);
			this._highscoreText = new PIXI.Text(this._highscore.toString(), {font: "64px GrilledCheeseBTN-Regular", fill: 0xFF528F, align: "center", stroke: 0x000000, strokeThickness: 12, padding:10, lineJoin: 'round'});
			this._highscoreText.x = 0;
			this._highscoreText.y = 0;
			this._highscoreText.anchor = new PIXI.Point(0.5, 0.5);
			this._highscoreText.scale = new PIXI.Point(1, 1);
			this._highscoreTextHolder.addChild(this._highscoreText);

		// Clouds
		var cloud = new PIXI.Sprite(this._assetManager.getTexture("cloud1"));
		cloud.anchor = new PIXI.Point(0.5, 1);
		cloud.x = -220;
		cloud.y = 120;
		rainbow_bg.addChild(cloud);

		var cloud = new PIXI.Sprite(this._assetManager.getTexture("cloud2"));
		cloud.anchor = new PIXI.Point(0.5, 1);
		cloud.x = 8;
		cloud.y = 150;
		rainbow_bg.addChild(cloud);

		var cloud = new PIXI.Sprite(this._assetManager.getTexture("cloud1"));
		cloud.anchor = new PIXI.Point(0.5, 1);
		cloud.x = 300;
		cloud.y = 170;
		rainbow_bg.addChild(cloud);

		var cloud = new PIXI.Sprite(this._assetManager.getTexture("cloud2"));
		cloud.anchor = new PIXI.Point(0.5, 1);
		cloud.scale = new PIXI.Point(-1, 1);
		cloud.x = 150;
		cloud.y = 110;
		rainbow_bg.addChild(cloud);

		var cloud = new PIXI.Sprite(this._assetManager.getTexture("cloud1"));
		cloud.anchor = new PIXI.Point(0.5, 1);
		cloud.scale = new PIXI.Point(-0.75, 0.75);
		cloud.x = -300;
		cloud.y = 160;
		rainbow_bg.addChild(cloud);

		this._raven = new PIXI.Sprite(this._assetManager.getTexture("raven_pink"));
		this._raven.anchor = new PIXI.Point(0.5, 1);
		this._raven.x = -320;
		this._raven.y = 120;
		rainbow_bg.addChild(this._raven);

		this._unicorn = new PIXI.Sprite(this._assetManager.getTexture("unicorn"));
		this._unicorn.anchor = new PIXI.Point(0.5, 1);
		this._unicorn.x = 350;
		this._unicorn.y = 140;
		rainbow_bg.addChild(this._unicorn);

	// Stars particle system
	this._particleContainer = new PIXI.Container();
	this._particleContainer.alpha = 0;
	this._particleContainer.x = Common.STAGE_WIDTH/2;
	this.addChild(this._particleContainer);
	this._starsPS = new cloudkid.Emitter(this._particleContainer, [this._assetManager.getTexture("star_part"), this._assetManager.getTexture("dot_particle")], this._assetManager.getJSON("splashStars_ps"));
	this._starsPS.emit = true;
	this._starsPS.update(4);

	// Buttons
	this._restartButton = new p3.Button(
		this._assetManager.getTexture("but_replay_def"),
		this._assetManager.getTexture("but_replay_over"),
		this._assetManager.getTexture("but_replay_pressed"));
	this._restartButton.init();
	this._restartButton.y = Common.STAGE_HEIGHT - 160;
	this._restartButton.x = (Common.STAGE_WIDTH / 2);
	this._restartButton.scale = new PIXI.Point(0, 0);
	this._restartButton.signals.down.add(this.restartClicked, this);
	this._restartButton.signals.over.add(this.buttonOver, this);
	this.addChild(this._restartButton);

	this._nextButton = new p3.Button
	(
		this._assetManager.getTexture("but_home_def"),
		this._assetManager.getTexture("but_home_over"),
		this._assetManager.getTexture("but_home_pressed")
	);
	this._nextButton.init();
	this._nextButton.y = this._guiButtonTopMargin;
	this._nextButton.scale = new PIXI.Point(0, 0);
	this._nextButton.signals.down.add(this.nextClicked, this);
	this._nextButton.signals.over.add(this.buttonOver, this);
	this.addChild(this._nextButton);

	this._muteButton = new p3.MuteButton
	(
		this._assetManager.getTexture("but_sound_on_def"),
		this._assetManager.getTexture("but_sound_off_def"),
		this._assetManager.getTexture("but_sound_on_over"),
		this._assetManager.getTexture("but_sound_off_over"),
		this._assetManager.getTexture("but_sound_on_pressed"),
		this._assetManager.getTexture("but_sound_off_pressed")
	);
	this._muteButton.id = "mute";
	this._muteButton.y = this._guiButtonTopMargin;
	this._muteButton.scale = new PIXI.Point(0, 0);
	this._muteButton.signals.over.add(this.buttonOver, this);
	this._muteButton.init();
	this.addChild(this._muteButton);


	// Black screen
	this._screenTransition = new PIXI.Container();
	this._screenTransition.alpha = 1;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)

	var colors = [0x11B066, 0xFFDE75, 0xF17AB0, 0x3991CF, 0x8D58A4];
	for(var i = 0; i < colors.length; i++)
	{
		var band = new PIXI.Sprite(Common.generatedTextures['whiteSquare']);
		band.tint = colors[i];
		band.width = Common.STAGE_WIDTH;
		band.height = Common.STAGE_HEIGHT/5;
		band.y = Common.STAGE_HEIGHT/5 * i;
		this._screenTransition.addChild(band);
	}

	// this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	// this._screenTransition.alpha = 1;
	// this._screenTransition.width = Common.STAGE_WIDTH;
	// this._screenTransition.height = Common.STAGE_HEIGHT;
	// this._screenTransition.x = -Common.STAGE_WIDTH;
	// this.addChild(this._screenTransition)

	if(this._assetManager.getJSON("config").moreGames && !checkDomain())
	{
		var that = this;
		setTimeout(function()
		{
			that.signals.moreGames.dispatch(this);
		}, 1000);
	}
};

/**
 */
GameOverOverlay.prototype.update = function()
{
	// Update particle system
	this._starsPS.update(p3.Timestep.deltaTime);
};

/**
 */
GameOverOverlay.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call(this);

	this._nextButton.x = this._getFirstButtonPositionLeft();
	this._muteButton.x = this._getFirstButtonPositionRight();
};

/**
 */
GameOverOverlay.prototype.dispose = function()
{

}

/**
 */
GameOverOverlay.prototype.showHelp = function()
{

}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
GameOverOverlay.prototype.animateIn = function(callback, scope) {

	if(this.animatedIn) return;
	this.animatedIn = true;


	var tl = new TimelineMax();
		tl.to(this._gameoverPage.scale,  1.6, {x:1, y:1, ease:Elastic.easeOut}, 0.1);

		tl.to(this._nextButton.scale, 1, {x:1, y:1, ease:Back.easeOut}, .8);
		tl.to(this._muteButton.scale, 1, {x:1, y:1, ease:Back.easeOut}, .8);
		tl.to(this._restartButton.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, 1.2);

		tl.to(this._overlay, 0.75, {alpha:1, ease:Sine.easeOut}, 0.1);
		tl.to(this._sun, 0.75, {alpha:1, ease:Sine.easeOut}, 0.1);
		tl.to(this._particleContainer, 0.75, {alpha:1, ease:Sine.easeOut}, 0.1);

		tl.to(this._titleText, 0.4, {alpha:1, ease:Sine.easeOut}, 0.4);
		tl.to(this._titleText, 0.4, {y: this._titleText.y+50, ease:Quad.easeOut}, 0.4);
		tl.to(this._titleText.scale, 2, {x: 1.1, y:1.1, ease:Quad.easeInOut, repeat:-1, yoyo:true}, 0.8);

		tl.to(this._scoreTextHolder.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, 0.7);

		tl.to(this._highscoreTitleText, 0.4, {alpha:1, ease:Sine.easeOut}, 1);
		tl.to(this._highscoreTitleText, 0.4, {y: this._highscoreTitleText.y+25, ease:Quad.easeOut}, 1);

		tl.to(this._highscoreTextHolder.scale, 1, {x:0.6, y:0.6, ease:Elastic.easeOut}, 1.2);

		tl.to(this._raven, 2, {rotation:5 * PIXI.DEG_TO_RAD, ease:Quad.easeInOut, repeat:-1, yoyo:true}, 0.1);
		tl.to(this._unicorn.scale, 0.85, {x:0.94, y:1.06, ease:Back.easeInOut, repeat:-1, yoyo:true}, 0.1);

	Common.animator.add(tl);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
GameOverOverlay.prototype.animateOut = function(callback, scope)
{
	var tl = new TimelineMax({onCompleteScope:scope, onComplete:callback});
		tl.to(this._gameoverPage.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._restartButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._nextButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._muteButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._screenTransition, 0.35, {x:0, ease:Sine.easeOut}, 0.5);

		// Ps
		tl.to(this._particleContainer, .5, {alpha:0, ease:Sine.EaseIn}, 0);
		this._starsPS.emit = false;


	Common.animator.add(tl);
};




//===================================================
// PRIVATE METHODS
//===================================================

/**
 * @param {!String} character
 * @param {!Number} frameLimit
 * @returns {!p3.MovieClipSequence}
 */
GameOverOverlay.prototype._generateAnimationSequence = function(character, frameLimit, frameBack)
{
	var textureArr = [];
	for(var i = 1; i <= frameLimit; i++)
	{
		var n = "" + i;
		while(n.length < 3) n = "0" + n;
		textureArr.push(character + "_" + n);
	}
	if(!!frameBack)
	{
		for(var i = frameBack -1; i > 1; i--)
		{
			var n = "" + i;
			while(n.length < 3) n = "0" + n;
			textureArr.push(character + "_" + n);
		}
	}

	for(var i = 0; i < textureArr.length; i++)
	{
		textureArr[i] = this._assetManager.getTexture(textureArr[i]);
	}
	var sequence = new p3.MovieClipSequence();
	sequence.addTextures(textureArr);

	return sequence;
}


//===================================================
// EVENTS
//===================================================

/**
 */
GameOverOverlay.prototype.nextClicked = function()
{
	this.signals.requestedNextScreen.dispatch();
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
GameOverOverlay.prototype.restartClicked = function()
{
	this.signals.requestedPreviousScreen.dispatch();
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
GameOverOverlay.prototype.buttonOver = function()
{
	SoundSFX.play("sfx_btn_rollover_00");
};


//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================


},{"../Common":2,"../general/NextButton":13,"../general/SoundSFX":14,"../screens/SimpleScreen":25}],21:[function(require,module,exports){
"use strict";

var Common       = require("../Common");
var SimpleScreen = require("../screens/SimpleScreen");
var NextButton   = require("../general/NextButton");
var SoundSFX     = require("../general/SoundSFX");
var MuteButton   = require("../lib/MuteButton");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function PauseOverlay()
{
	/*
	 * @type {Integer}
	 */
	this.STATUS_INSTRUCTIONS = 0;
	this.STATUS_AREYOUSURE   = 1;
	this.STATUS_RESUMING     = -1;
	this._status = this.STATUS_INSTRUCTIONS;

	/*
	 * @type {PIXI.Sprite}
	 */
	this._overlay = null;

	/*
	 * @type {NextButton}
	 */
	this._resumeButton = null;

	/*
	 * @type {p3.Button}
	 */
	this._muteButton = null;
	this._exitButton = null;

	/*
	 * @type {PIXI.Sprite}
	 */
	this._title = null;

	/**
	 * @type {PIXI.Container}
	 */
	this._instructionsPage = null;
	this._areYouSurePage = null;

	/**
	 * @type {Array<Object>}
	 */
	this._contents = null;
	this._imageContainer = null;

	/**
	 * @type {p3.Button}
	 */
	this._leftButton = null;
	this._rightButton = null;

	/**
	 * @type {Number}
	 */
	this._currentPage = 0;

	/**
	 * @type {Boolean}
	 */
	this._introHelpMode = false;

	/**
	 * @type {PIXI.Text}
	 */
	this._text = null;

	SimpleScreen.call(this);
}
module.exports = PauseOverlay;
PauseOverlay.prototype = Object.create(SimpleScreen.prototype);
PauseOverlay.prototype.constructor = PauseOverlay;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
PauseOverlay.prototype.init = function()
{
	console.log("PAUSE INITIALIZED");

	SimpleScreen.prototype.init.call(this);

	this._overlay = new PIXI.Sprite(Common.generatedTextures['whiteSquare']);
	this._overlay.alpha       = 0;
	this._overlay.width       = Common.STAGE_WIDTH;
	this._overlay.height      = Common.STAGE_HEIGHT;
	this._overlay.hitArea     = new PIXI.Rectangle(0, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
	this._overlay.interactive = true;
	this._overlay.tint        = 0x260721;
	this.addChild(this._overlay);

	// Instruction page
	this._instructionsPage       = new PIXI.Container();
	this._instructionsPage.x     = Common.STAGE_WIDTH / 2;
	this._instructionsPage.y     = Common.STAGE_HEIGHT / 2;
	this._instructionsPage.scale = new PIXI.Point(0, 0);
	this.addChild(this._instructionsPage);

	var bg = new PIXI.Graphics();
	bg.beginFill(0xECF9FF);
	bg.drawRect(-310, -180, 620, 320);
	bg.endFill();
	this._instructionsPage.addChild(bg);

	var panel = new PIXI.Sprite(this._assetManager.getTexture("panel"));
	panel.anchor = new PIXI.Point(0.5, 0.5);
	panel.x = 0;
	panel.y = 0;
	this._instructionsPage.addChild(panel);

		// Instruction title
		var copy = this._assetManager.getJSON("config")['copy']["INSTRUCTIONS"][Common.COUNTRY_CODE];

		if(!copy.live)
			titleText = new PIXI.Text(copy.text, {font: "42px GrilledCheeseBTN-Regular", fill: 0xFCEC1B, align: "center", stroke: 0x000000, strokeThickness: 8, padding:5, lineJoin: 'round'});
			// var titleText = new p3.BitmapText(copy.text, this._assetManager.getFontAtlas("text"), p3.BitmapText.ALIGN_CENTER, 0xFFFF00);
		else
			var titleText = new PIXI.Text(copy.text, {font: (window.og.language == "ar" ? "48px FredFredburgerAra-Regular" : "48px Junegull-Regular"), fill: 0xFCEC1B, align: "center", stroke: 0x000000, strokeThickness: 6, padding:5, lineJoin: 'round'});
		titleText.y      = -195;
		titleText.anchor = new PIXI.Point(0.5, 0.5);
		titleText.scale  = new PIXI.Point(copy.scale, copy.scale);
		panel.addChild(titleText);

		if(copy.live)
		{
			titleText.x += copy.offset.x;
			titleText.y += copy.offset.y;
		}

		// Instruction content
		this._contents = [];

			var mob = p3.Device.isMobile ? "MOB" : "PC";

			var copy = this._assetManager.getJSON("config")['copy']["INSTRUCTIONS_1"][Common.COUNTRY_CODE];
			this._contents.push({image:this._assetManager.getTexture('tutorial2'), text:copy.text, scale:copy.scale, offset:copy.offset, live:copy.live});
			var copy = this._assetManager.getJSON("config")['copy']["INSTRUCTIONS_2"][Common.COUNTRY_CODE];
			this._contents.push({image:this._assetManager.getTexture('tutorial3'), text:copy.text, scale:copy.scale, offset:copy.offset, live:copy.live});
			var copy = this._assetManager.getJSON("config")['copy']["INSTRUCTIONS_3"][Common.COUNTRY_CODE];
			this._contents.push({image:this._assetManager.getTexture('tutorial4'), text:copy.text, scale:copy.scale, offset:copy.offset, live:copy.live});

			this._imageContainer = new PIXI.Sprite();
			this._imageContainer.x = 0;
			this._imageContainer.y = -20;
			this._instructionsPage.addChild(this._imageContainer);

			this._image = new PIXI.Sprite(this._contents[0].image);
			this._image.anchor.x = this._image.anchor.y = 0.5;
			this._imageContainer.addChild(this._image);

			if(!copy.live)
				this._text = new PIXI.Text(this._contents[0].text, {font: "38px GrilledCheeseBTN-Regular", fill: 0x103B48, align: "center"});
			else
				this._text = new PIXI.Text(this._contents[0].text, {font: (window.og.language == "ar" ? "32px FredFredburgerAra-Regular" : "32px Junegull-Regular"), fill: 0x103B48, align: "center", padding:15});
			this._text.yStart = 165;
			this._text.y = this._text.yStart;
			this._text.anchor = new PIXI.Point(0.5, 0.5);
			this._text.scale = new PIXI.Point(this._contents[0].scale, this._contents[0].scale);
			panel.addChild(this._text);

	
			// this._text.x += this._contents[0].offset.x;
			this._text.y = this._text.yStart + this._contents[0].offset.y;
		

			this._resumeButton = new NextButton("play", 0);
			this._resumeButton.y = 220;
			this._resumeButton.x = 335;
			this._resumeButton.init();
			this._resumeButton.signals.clicked.add(this.resumeClicked, this);
			panel.addChild(this._resumeButton);

			this._leftButton = new p3.Button
			(
				this._assetManager.getTexture("but_arrow_def"),
				this._assetManager.getTexture("but_arrow_over"),
				this._assetManager.getTexture("but_arrow_pressed")
			);
			this._leftButton.init();
			this._leftButton.y = 0;
			this._leftButton.x = -335;
			this._leftButton.scale = new PIXI.Point(-1, 1);
			this._leftButton.signals.down.add(this.leftClicked, this);
			this._leftButton.signals.over.add(this.buttonOver, this);
			this._leftButton.animate = false;
			this._leftButton.visible = false;
			panel.addChild(this._leftButton);

			this._rightButton = new p3.Button
			(
				this._assetManager.getTexture("but_arrow_def"),
				this._assetManager.getTexture("but_arrow_over"),
				this._assetManager.getTexture("but_arrow_pressed")
			);
			this._rightButton.init();
			this._rightButton.y = 0;
			this._rightButton.x = 335;
			this._rightButton.signals.down.add(this.rightClicked, this);
			this._rightButton.signals.over.add(this.buttonOver, this);
			this._rightButton.animate = false;
			panel.addChild(this._rightButton);

	// Are you sure page
	this._areYouSurePage = new PIXI.Container();
	this._areYouSurePage.x = Common.STAGE_WIDTH / 2;
	this._areYouSurePage.y = Common.STAGE_HEIGHT / 2;
	this._areYouSurePage.scale = new PIXI.Point(0, 0);
	this.addChild(this._areYouSurePage);

		var panel = new PIXI.Sprite(this._assetManager.getTexture("panel_small"));
		panel.anchor = new PIXI.Point(0.5, 0.5);
		panel.x = 0;
		panel.y = 0;
		this._areYouSurePage.addChild(panel);

		// Are you sure question
		var copy = this._assetManager.getJSON("config")['copy']["QUIT"][Common.COUNTRY_CODE];
		if(!copy.live)
			var areYouSureText = new PIXI.Text(copy.text, {font: "38px GrilledCheeseBTN-Regular", fill: 0x103B48, align: "center", stroke: 0x000000});
		else
			var areYouSureText = new PIXI.Text(copy.text, {font: (window.og.language == "ar" ? "32px FredFredburgerAra-Regular" : "32px Junegull-Regular"), fill: 0xFFFF00, align: "center", stroke: 0x000000, strokeThickness: 6, padding:5});
		areYouSureText.anchor = new PIXI.Point(0.5, 0.5);
		areYouSureText.x = 0;
		areYouSureText.y = -30;
		areYouSureText.scale = new PIXI.Point(copy.scale, copy.scale);
		panel.addChild(areYouSureText);

		if(copy.live)
		{
			areYouSureText.x += copy.offset.x;
			areYouSureText.y += copy.offset.y;
		}

		// Are you sure buttons
		var yesButton = new p3.Button
		(
			this._assetManager.getTexture("but_ok_def"),
			this._assetManager.getTexture("but_ok_over"),
			this._assetManager.getTexture("but_ok_pressed")
		);
		yesButton.init();
		yesButton.x = 80;
		yesButton.y = 110;
		yesButton.signals.down.add(this.quitYesClicked, this);
		yesButton.signals.over.add(this.buttonOver, this);
		panel.addChild(yesButton);

		var noButton = new p3.Button
		(
			this._assetManager.getTexture("but_close_def"),
			this._assetManager.getTexture("but_close_over"),
			this._assetManager.getTexture("but_close_pressed")
		);
		noButton.init();
		noButton.x = -80;
		noButton.y = 110;
		noButton.signals.down.add(this.quitNoClicked, this);
		noButton.signals.over.add(this.buttonOver, this);
		panel.addChild(noButton);

	// Buttons
	this._exitButton = new p3.Button
	(
		this._assetManager.getTexture("but_home_def"),
		this._assetManager.getTexture("but_home_over"),
		this._assetManager.getTexture("but_home_pressed")
	);
	this._exitButton.init();
	this._exitButton.y = this._guiButtonTopMargin;
	this._exitButton.signals.down.add(this.exitClicked, this);
	this._exitButton.signals.over.add(this.buttonOver, this);
	this._exitButton.scale = new PIXI.Point(0, 0);
	this.addChild(this._exitButton);

	this._muteButton = new p3.MuteButton
	(
		this._assetManager.getTexture("but_sound_on_def"),
		this._assetManager.getTexture("but_sound_off_def"),
		this._assetManager.getTexture("but_sound_on_over"),
		this._assetManager.getTexture("but_sound_off_over"),
		this._assetManager.getTexture("but_sound_on_pressed"),
		this._assetManager.getTexture("but_sound_off_pressed")
	);
	this._muteButton.id    = "mute";
	this._muteButton.y     = this._guiButtonTopMargin;
	this._muteButton.scale = new PIXI.Point(0, 0);
	this._muteButton.signals.over.add(this.buttonOver, this);
	this._muteButton.init();
	this.addChild(this._muteButton);
};

/**
 */
PauseOverlay.prototype.update = function()
{
	this._exitButton.x = this._getFirstButtonPositionLeft();
	this._muteButton.x = this._getFirstButtonPositionRight();
};

/**
 */
PauseOverlay.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call(this);
};

/**
 */
PauseOverlay.prototype.dispose = function()
{

}

/**
 */
PauseOverlay.prototype.setIntroHelpMode = function()
{
    this._resumeButton.visible = false;
    this._introHelpMode = true;
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
PauseOverlay.prototype.animateIn = function(callback, scope)
{
	var tl = new TimelineMax();
		tl.to(this._instructionsPage.scale, .5, {x:1, y:1, ease:Back.easeOut}, 0);
		tl.to(this._exitButton.scale, .5, {x:1, y:1, ease:Back.easeOut}, 0);
		tl.to(this._muteButton.scale, .5, {x:1, y:1, ease:Back.easeOut}, 0);
		tl.to(this._overlay, .5, {alpha:0.8, ease:Back.easeOut}, 0);
	Common.animator.add(tl);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
PauseOverlay.prototype.animateOut = function(callback, scope)
{
	var tl = new TimelineMax({onCompleteScope:scope, onComplete:callback});
		tl.to(this._instructionsPage.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._exitButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._muteButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._overlay, .5, {alpha:0, ease:Back.easeIn}, 0);
	Common.animator.add(tl);
};

/**
 * @param {!Number} page
 */
PauseOverlay.prototype.setPage = function(page)
{
	var newImage = new PIXI.Sprite(this._contents[page].image);
	newImage.x = this._contents[page].x || 0;
	newImage.y = this._contents[page].y || 0;
	newImage.anchor = new PIXI.Point(0.5, 0.5);
	newImage.alpha = 0;
	this._imageContainer.addChild(newImage);

	if(page == 1)
	{
		var hand = this._assetManager.getSprite("hand_tutorial", true);
		hand.x = 225;
		hand.y = 100;
		newImage.addChild(hand);
	}

	Common.animator.add(TweenMax.to(this._image, 0.5, {alpha:0, ease:Sine.easeOut}));
	Common.animator.add(TweenMax.to(newImage, 0.5, {alpha:1, ease:Sine.easeOut, onCompleteScope:this, onComplete:function()
	{
		this._imageContainer.removeChild(this._image);
		this._image = newImage;
	}}));

	this._text.text = this._contents[page].text;
	this._text.scale = new PIXI.Point(this._contents[page].scale, this._contents[page].scale);
	this._text.y = this._text.yStart + this._contents[page].offset.y;
	
	if(page == 0)
		this._leftButton.visible = false;
	else
		this._leftButton.visible = true;

	if(page == this._contents.length-1)
	{
		this._rightButton.visible = false;
		if(this._introHelpMode)
			this._resumeButton.visible = true;
	}
	else
	{
		this._rightButton.visible = true;
		if(this._introHelpMode)
			this._resumeButton.visible = false;
	}

	this._currentPage = page;
}




//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

/**
 */
PauseOverlay.prototype.leftClicked = function()
{
	// Ignore if in transition
	if(this._image.alpha != 1) return;

	this.setPage(this._currentPage-1);
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
PauseOverlay.prototype.rightClicked = function()
{
	// Ignore if in transition
	if(this._image.alpha != 1) return;

	if(this._currentPage == this._contents.length-1)
	{
		this.signals.requestedNextScreen.dispatch();
		SoundSFX.play("sfx_btn_press_00");
	}
	else
	{
		this.setPage(this._currentPage+1);
		SoundSFX.play("sfx_btn_press_00");
	}

};

/**
 */
PauseOverlay.prototype.resumeClicked = function()
{
	if(this._status != this.STATUS_INSTRUCTIONS) return;
	this._status = this.STATUS_RESUMING;

	this.animateOut(function()
	{
		this.signals.requestedNextScreen.dispatch();
	}, this);

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
PauseOverlay.prototype.exitClicked = function()
{
	if(this._status != this.STATUS_INSTRUCTIONS) return;
	this._status = this.STATUS_AREYOUSURE;

	var tl = new TimelineMax();
		tl.to(this._instructionsPage.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._exitButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._areYouSurePage.scale, .5, {x:1, y:1, ease:Back.easeOut}, .5);
	Common.animator.add(tl);

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
PauseOverlay.prototype.helpClicked = function()
{
	this.showHelp();
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
PauseOverlay.prototype.quitYesClicked = function()
{
	this.signals.requestedPreviousScreen.dispatch();
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
PauseOverlay.prototype.quitNoClicked = function()
{
	if(this._status != this.STATUS_AREYOUSURE) return;
	this._status = this.STATUS_INSTRUCTIONS;

	var tl = new TimelineMax();
		tl.to(this._areYouSurePage.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._instructionsPage.scale, .5, {x:1, y:1, ease:Back.easeOut}, .5);
		tl.to(this._exitButton.scale, .5, {x:1, y:1, ease:Back.easeOut}, .5);
	Common.animator.add(tl);


	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
PauseOverlay.prototype.buttonOver = function()
{
	SoundSFX.play("sfx_btn_rollover_00");
}


//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================


},{"../Common":2,"../general/NextButton":13,"../general/SoundSFX":14,"../lib/MuteButton":15,"../screens/SimpleScreen":25}],22:[function(require,module,exports){
"use strict";

var Common                  = require("../Common");
var SimpleScreen            = require("./SimpleScreen");
var ScrollerEngine          = require("../scroller/ScrollerEngine");
var ScrollerObject          = require("../scroller/ScrollerObject");
var ScrollerObjectImage     = require("../scroller/ScrollerObjectImage");
var ScrollerLoopingRange    = require("../scroller/ScrollerLoopingRange");
var ScrollerObjectGenerator = require("../scroller/ScrollerObjectGenerator");
var SoundSFX                = require("../general/SoundSFX");
var Avatar                  = require("../game/Avatar");
var Cloud                   = require("../game/Cloud");
var Pickup                  = require("../game/Pickup");
var Enemy                   = require("../game/Enemy");
var RainbowTail             = require("../game/RainbowTail");
var ScoreCounter            = require("../game/ScoreCounter");
var BoostBar                = require("../game/BoostBar");
var PickupParticleHolder    = require("../game/PickupParticleHolder");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function GameScreen()
{
	/**
	 * @type {ScrollerEngine}
	 */
	this._scrollerEngine = null;

	/**
	 * @type {Number}
	 */
	this._activeBoundaryPadding = 100;
	this._scrollSpeed           = 5;
	this._scrollSpeedStart      = 10;
	this._scrollSpeedEnd        = 16;
	this._scrollSpeedTime       = 300;
	this._enemyPercentageStart  = 0.25;
	this._enemyPercentageEnd    = 1;

	/**
	 * @type {Avatar}
	 */
	this._avatar = null;

	/**
	 * @type {ScoreCounter}
	 */
	this._scoreCounter = null;
	this._boostBar     = null;

	/**
	 * @type {Number}
	 */
	this._score     = 0;
	this._highscore = 0;
	this._boostMeter = 0;
	this._boostMeterMax = 15;
	this._boostMeterIncrement = 5;
	this._boostSpeedMultiplier = 5;
	this._boostDuration = 4;

	/**
	 * @type {Boolean}
	 */
	this._paused = false;
	this._shake = false;

	/**
	 * @type {ScrollerObjectGenerator}
	 */
	this._cloudGenerator = null;

	/**
	 * @type {Howl}
	 */
	this._bgMusic = null;

	/**
	 * @type {PIXI.Sprite}
	 */
	this._hitArea = null;
    this._screenTransition = null;

	/**
	 * @type {p3.Button}
	 */
	this._pauseButton = null;
	this._muteButton  = null;

	/**
	 * @type {PickupParticleHolder}
	 */
	this._pickupParticleHolder = null;

// Intro

	/**
	 * @type {Bool}
	 */
	this._isIntro   = true;

	/**
	 * @type {Number}
	 */
	this._introTime = 2;

// Spawn

	/**
	 * @type {Array[Object]}
	 */

	this._spawnPatterns = [];
	this._spawnQueue    = [];

	/**
	 * @type {Number}
	 */
	this._spawnTimer          = 1;
	this._difficulty          = 0.7; // 0: doesn't increase, > 0: increases with scrollSpeed (max: 1)

	SimpleScreen.call(this);

	this.signals.pausePressed = new signals.Signal();
	this.signals.pauseIntro   = new signals.Signal();
}
module.exports = GameScreen;
GameScreen.prototype = Object.create(SimpleScreen.prototype);
GameScreen.prototype.constructor = GameScreen;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
GameScreen.prototype.init = function()
{
	console.log("GAME INITIALIZED");

	SimpleScreen.prototype.init.call(this);

// Save data
	this._highscore = Common.savedData.highscore;


// BG
	var canvas = document.createElement('canvas');
	canvas.width  = 100;
	canvas.height = 1;
	var ctx = canvas.getContext("2d");

	var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
	gradient.addColorStop(0,"#F1C3BD");
	gradient.addColorStop(0.35,"#F3D6C5");
	gradient.addColorStop(1,"#EA7A9E");
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	this._bg = new PIXI.Sprite(PIXI.Texture.fromCanvas(canvas));
	this._bg.width  = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this.addChild(this._bg);

// Scroller Engine Setup
	var p = this._activeBoundaryPadding;

	this._scrollerEngine = new ScrollerEngine(new PIXI.Point(Common.STAGE_WIDTH/2, Common.STAGE_HEIGHT/2),
	                                          new PIXI.Rectangle(-Common.STAGE_WIDTH/2, -Common.STAGE_HEIGHT/2, Common.STAGE_WIDTH, Common.STAGE_HEIGHT),
	                                          new PIXI.Rectangle(-(Common.STAGE_WIDTH/2)-p, -(Common.STAGE_HEIGHT/2)-p, (Common.STAGE_WIDTH*2)+(p*2), Common.STAGE_HEIGHT+(p*2))
	                                          );
	this._scrollerEngine.x = 0;
	this._scrollerEngine.init();
	this.addChild(this._scrollerEngine);

//Layers
	this._scrollerEngine.addLayer("backgroundSun", new PIXI.Point(0, 1));
	this._scrollerEngine.addLayer("backgroundCloudsTop", new PIXI.Point(0.2, 0));
	this._scrollerEngine.addLayer("backgroundRainbow", new PIXI.Point(0.2, 0));
	this._scrollerEngine.addLayer("backgroundCloudsMiddle", new PIXI.Point(0.3, 0));
	this._scrollerEngine.addLayer("backgroundCloudsBottom", new PIXI.Point(0.4, 0));

	this._scrollerEngine.addLayer("pickupLayer", new PIXI.Point(1, 1));
	this._scrollerEngine.addLayer("particleLayer", new PIXI.Point(0, 1));
	this._scrollerEngine.addLayer("playerLayer", new PIXI.Point(0, 1));
	this._scrollerEngine.addLayer("cloudLayer", new PIXI.Point(1, 1));

//Background layers

	this._addBackground([
	                       {texture:"sun_bg", width:3800, height:1536, offsetX:0, offsetY:-Common.STAGE_HEIGHT/2}
	                    ], "backgroundSun", 0);

	this._addBackground([
	                       {texture:"clouds1_bg", width:3628/2, height:1268/2, offsetX:0, offsetY:0},
						   {texture:"clouds1_bg", width:3628/2, height:1268/2, offsetX:0, offsetY:200},
						   {texture:"clouds1_bg", width:3628/2, height:1268/2, offsetX:0, offsetY:-200}
	                    ], "backgroundCloudsMiddle", 0);

	this._addBackground([
							{texture:"rainbow1_bg", width:3487/2, height:1544/2, offsetX:500, offsetY:0}
	                    ], "backgroundRainbow", 0);

	this._addBackground([
	                       {texture:"frame_upper-clouds", width:1900, height:76, offsetX:0, offsetY:0}
	                    ], "backgroundCloudsTop", 0);

	this._addBackground([
	                       {texture:"frame_lower-clouds", width:1900, height:76, offsetX:0, offsetY:Common.STAGE_HEIGHT - 76}
	                    ], "backgroundCloudsBottom", 0);




//Cloud Generator
	this._cloudGenerator = new ScrollerObjectGenerator(
	[
		{id:"cloud",  base:Cloud,  args:[]},
		{id:"pickup", base:Pickup, args:[]},
		{id:"enemy",  base:Enemy,  args:[]}
	]);
	this._cloudGenerator.signals.generateObjects.add(this.onGenerateCloud, this);
	this._cloudGenerator.signals.objectDisposed.add(this.onObjectDisposed, this);
	this._cloudGenerator.setFrequencies(1, 1);

    this._cloudGenerator.addPattern(
	[
	    {x:0, y:200, poolId:"cloud"},
		{x:240, y:-250, poolId:"enemy"},
	    {x:60, y:100, poolId:"pickup"},
	    {x:400, y:100, poolId:"cloud"},
	    {x:460, y:0, poolId:"pickup"},
	    {x:800, y:0, poolId:"cloud"},
	    {x:860, y:-100, poolId:"pickup"}
	], "stairs1");

    this._cloudGenerator.addPattern(
	[
	    {x:0, y:50, poolId:"cloud"},
	    {x:300, y:150, poolId:"cloud"},
	    {x:360, y:50, poolId:"pickup"},
	    {x:600, y:250, poolId:"cloud"},
		{x:660, y:150, poolId:"pickup"},
	    {x:660, y:-200, poolId:"enemy"},
	    {x:900, y:150, poolId:"cloud"},
	    {x:960, y:50, poolId:"pickup"},
	    {x:1200, y:50, poolId:"cloud"}
	], "stairs2");

	this._cloudGenerator.addPattern(
	[
		{x:0, y:150, poolId:"cloud"},
		{x:400, y:-150, poolId:"cloud"},
		{x:800, y:150, poolId:"cloud"},
		{x:60, y:0, poolId:"pickup"},
		{x:460, y:-300, poolId:"pickup"},
		{x:860, y:0, poolId:"pickup"},
		{x:460, y:150, poolId:"enemy"}
	], "stairs3");

	this._cloudGenerator.addPattern(
	[
		{x:0, y:250, poolId:"cloud"},
		{x:300, y:100, poolId:"cloud"},
		{x:600, y:-50, poolId:"cloud"},
		{x:1400, y:150, poolId:"cloud"},

		{x:1000, y:-150, poolId:"enemy"},
		{x:950, y:0, poolId:"enemy"},
		{x:900, y:150, poolId:"enemy"},
		{x:850, y:300, poolId:"enemy"},

		{x:60, y:150, poolId:"pickup"},
		{x:360, y:0, poolId:"pickup"},
		{x:660, y:-150, poolId:"pickup"},
		{x:1460, y:0, poolId:"pickup"}
	], "stairs4");


    this._cloudGenerator.addPattern(
	[
	    {x:0, y:150, poolId:"cloud"},
		{x:70, y:-300, poolId:"enemy"},
	    {x:400, y:-140, poolId:"pickup"},
		{x:550, y:-220, poolId:"pickup"},
		{x:700, y:-240, poolId:"pickup"},
		{x:700, y:50, poolId:"enemy"},
		{x:620, y:200, poolId:"cloud"},
		{x:850, y:-220, poolId:"pickup"},
		{x:1000, y:-140, poolId:"pickup"},
		{x:1370, y:-250, poolId:"enemy"},
	    {x:1300, y:150, poolId:"cloud"}

	], "rainbow1");

    this._cloudGenerator.addPattern(
	[
	    {x:0, y:100, poolId:"cloud"},
		{x:400, y:220, poolId:"cloud"},
		{x:750, y:0, poolId:"cloud"},
		{x:1250, y:80, poolId:"cloud"},
		{x:500, y:-100, poolId:"enemy"},
		{x:200, y:-100, poolId:"pickup"},
		{x:350, y:-250, poolId:"pickup"},
		{x:500, y:-280, poolId:"pickup"},
		{x:650, y:-200, poolId:"pickup"},
		{x:470, y:100, poolId:"pickup"},
		{x:1180, y:-180, poolId:"pickup"},
		{x:1300, y:-80, poolId:"pickup"}
	], "rainbow2");

    this._cloudGenerator.addPattern(
	[
	    {x:0, y:150, poolId:"cloud"},
		{x:60, y:-50, poolId:"pickup"},
		{x:500, y:0, poolId:"cloud"},
		{x:560, y:-200, poolId:"pickup"}
	], "doubleCloud1");

    this._cloudGenerator.addPattern(
	[
	    {x:0, y:50, poolId:"cloud"},
		{x:250, y:-250, poolId:"pickup"},
		{x:420, y:-250, poolId:"enemy"},
		{x:500, y:200, poolId:"cloud"},
		{x:560, y:0, poolId:"pickup"}
	], "doubleCloud2");

    this._cloudGenerator.addPattern(
	[
	    {x:0, y:100, poolId:"cloud"},
		{x:300, y:0, poolId:"enemy"},
		{x:400, y:-50, poolId:"enemy"},
		{x:350, y:-230, poolId:"pickup"},
		{x:600, y:50, poolId:"cloud"},
		{x:530, y:-190, poolId:"pickup"},
		{x:660, y:-50, poolId:"pickup"}
	], "obstacle1");

	this._cloudGenerator.addPattern(
	[
		{x:0, y:180, poolId:"cloud"},
		{x:450, y:80, poolId:"cloud"},
		{x:900, y:180, poolId:"cloud"},
		{x:60, y:-280, poolId:"enemy"},
		{x:360, y:-350, poolId:"enemy"},
		{x:660,  y:-350, poolId:"enemy"},
		{x:960, y:-280, poolId:"enemy"},
		{x:320, y:100, poolId:"enemy"},
		{x:740,  y:100, poolId:"enemy"},
		{x:235, y:-100, poolId:"pickup"},
		{x:410, y:-200, poolId:"pickup"},
		{x:660, y:-200, poolId:"pickup"},
		{x:885, y:-100, poolId:"pickup"}
	], "tunnel1");

	this._cloudGenerator.addPattern(
	[
		{x:0, y:180, poolId:"cloud"}
	], "simpleCloud1");

	this._cloudGenerator.addPattern(
	[
		{x:0, y:190, poolId:"enemy"},
		{x:110, y:90, poolId:"cloud"},
		{x:170, y:-50, poolId:"pickup"},
		{x:400, y:190, poolId:"enemy"}
	], "simpleCloud2")

	this._cloudGenerator.addPattern(
	[
		{x:0, y:150, poolId:"cloud"},
		{x:60, y:0, poolId:"pickup"},
		{x:90, y:-220, poolId:"enemy"}
	], "simpleCloud3");



// Characters
	this._tail = new RainbowTail();
	this._scrollerEngine.addObjectToLayer(this._tail, "playerLayer", 0, 0);

	this._avatar = new Avatar();
	this._avatar._tail = this._tail;
	this._scrollerEngine.addObjectToLayer(this._avatar, "playerLayer", -this._avatar.width/2, +60);



//Collisions
	this._scrollerEngine.addCollisionDetector("avatar", "cloud");
	this._scrollerEngine.addCollisionDetector("avatar", "pickup");
	this._scrollerEngine.addCollisionDetector("avatar", "enemy");
	this._scrollerEngine.signals.collisionFired.add(this.onCollision, this);

// HitArea
	this._hitArea = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._hitArea.alpha  = 0;
	this._hitArea.width  = Common.STAGE_WIDTH;
	this._hitArea.height = Common.STAGE_HEIGHT;
	this._hitArea.interactive = true;
	this.addChild(this._hitArea);

//UI
	this._scoreCounter = new ScoreCounter();
	this._scoreCounter.y = this._guiButtonTopMargin;
	this._scoreCounter.init();
	this.addChild(this._scoreCounter);
	this._scoreCounter.updateScore(0);

	this._boostBar = new BoostBar();
	this._boostBar.init();
	this._boostBar.x = Common.STAGE_WIDTH/2 - 40;
	this._boostBar.y = this._guiButtonTopMargin - 10;
	this.addChild(this._boostBar);

	this._pickupParticleHolder = new PickupParticleHolder(this._boostBar.x + this._boostBar._stars.x, this._boostBar.y + this._boostBar._stars.y);
	this.addChild(this._pickupParticleHolder);
	// this._scrollerEngine.addObjectToLayer(this._pickupParticleHolder, "particleLayer", 0, -Common.STAGE_HEIGHT/2);

	this._pauseButton = new p3.Button(this._assetManager.getTexture("but_pause_def"), this._assetManager.getTexture("but_pause_over"), this._assetManager.getTexture("but_pause_pressed"));
	this._pauseButton.y = this._guiButtonTopMargin;
	this._pauseButton.scale = new PIXI.Point(0, 0);
	this._pauseButton.signals.down.add(this.onPausePressed, this);
	this._pauseButton.signals.over.add(this.buttonOver, this);
	this.addChild(this._pauseButton);

	this._muteButton = new p3.MuteButton
	(
		this._assetManager.getTexture("but_sound_on_def"),
		this._assetManager.getTexture("but_sound_off_def"),
		this._assetManager.getTexture("but_sound_on_over"),
		this._assetManager.getTexture("but_sound_off_over"),
		this._assetManager.getTexture("but_sound_on_pressed"),
		this._assetManager.getTexture("but_sound_off_pressed")
	);
	this._muteButton.id = "mute";
	this._muteButton.y = this._guiButtonTopMargin;
	this._muteButton.scale = new PIXI.Point(0, 0);
	this._muteButton.signals.over.add(this.buttonOver, this);
	this._muteButton.init();
	this.addChild(this._muteButton);

	// Black screen
	this._screenTransition = new PIXI.Container();
	this._screenTransition.alpha = 1;
	this._screenTransition.x = 0;
	this.addChild(this._screenTransition)

	var colors = [0x11B066, 0xFFDE75, 0xF17AB0, 0x3991CF, 0x8D58A4];
	for(var i = 0; i < colors.length; i++)
	{
		var band = new PIXI.Sprite(Common.generatedTextures['whiteSquare']);
		band.tint = colors[i];
		band.width = Common.STAGE_WIDTH;
		band.height = Common.STAGE_HEIGHT/5;
		band.y = Common.STAGE_HEIGHT/5 * i;
		this._screenTransition.addChild(band);
	}

//Sounds
	// this._bgMusic = SoundSFX.play('music_ingame_loop_00', {loop:true});
	// this._bgMusic.fadeIn(1, 1000);


// Touch areas
	this._hitArea.touchstart  = this._hitArea.mousedown = this.onTouchStart.bind(this);
	this._hitArea.touchend    = this._hitArea.mouseup   = this.onTouchEnd.bind(this);

	
	this._hitArea.mousemove = this._hitArea.touchmove = function(e)
	{
		this._avatar._boostTarget.x = e.data.getLocalPosition(this).x;
		this._avatar._boostTarget.y = e.data.getLocalPosition(this).y - 400;
	}.bind(this);
	
	this.startGame();
};

/**
 */
GameScreen.prototype.startGame = function()
{
	this.showGUI();

	this._isIntro = true;
	this._cloudGenerator.generate();

	// Intro
	this._isIntro = true;
	var tl = new TimelineMax(
	{
		onComplete: function()
		{
			this._isIntro = false;
		},
		onCompleteScope: this
	});
	tl.to(this._avatar, this._introTime, {x:570, ease:Back.easeOut}, 0 );
	tl.to(this._avatar, this._introTime * .5, {x:570, ease:Sine.easeInOut}, this._introTime * .5 );
	tl.to(this._avatar, this._introTime, {y:this._avatar.y-200, ease:Elastic.easeOut}, 0);
	// tl.to(this._avatar, this._introTime * .5, {y:this._avatar.y-100, ease:Sine.easeInOut}, this._introTime * .5 );
	tl.to(this, this._introTime, {_scrollSpeed:this._scrollSpeedStart, ease:Sine.easeOut}, 0);
	Common.animator.add(tl);

	this._avatar._dashTime = this._introTime;
	// this.endGame();
}


/**
 */
GameScreen.prototype.endGame = function()
{
	this._paused = true;
	TweenMax.killAll();
	Common.animator.removeAll();

	this._score = Math.floor(this._score);

	if(this._score > this._highscore)
	{
		this._highscore = this._score;
		Common.savedData.highscore = this._highscore;
        Common.savedData.save();
	}

	this.signals.requestedNextScreen.dispatch(this._score, this._highscore);
};

/**
 */
GameScreen.prototype.update = function()
{
	if(!this._paused)
	{
		SimpleScreen.prototype.update.call(this);

		// Rainbow tail
		this._tail.follow(this._avatar, this._scrollSpeed);

		// Scroll
		var scrollDistance = this._scrollSpeed * (this._avatar.isBoost ? this._boostSpeedMultiplier : 1);
		scrollDistance = (scrollDistance * p3.Timestep.deltaTime)*60; // Makes the scrolling distance time dependant and not frame dependant

		this._scrollerEngine.viewX -= scrollDistance;
		this._scrollerEngine.update();

		if(!this._avatar.isDead)
		{
			// Increment scrollSpeed
			if(this._scrollSpeed < this._scrollSpeedEnd)
			{
				this._scrollSpeed += (((this._scrollSpeedEnd - this._scrollSpeedStart)/this._scrollSpeedTime) * p3.Timestep.deltaTime);

				if(this._scrollSpeed > this._scrollSpeedEnd) this._scrollSpeed = this._scrollSpeedEnd;
			}

			// Update score
			if(!this._isIntro)
			{
				this._score += this._scrollSpeed / 50;
				this._scoreCounter.updateScore(Math.floor(this._score));
			}

			// Generators
			this._cloudGenerator.update(scrollDistance);

			// Update boost
			if(this._avatar.isBoost && this._boostMeter != 0)
			{
				this._boostMeter -= (this._boostMeterMax * p3.Timestep.deltaTime)/this._boostDuration;

				if(this._boostMeter <= 0)
				{
					this._boostMeter = 0;
					this._avatar.boostEnd();
					this._boostMeterMax += this._boostMeterIncrement;
				}

				this._boostBar.updateBoostMeter(this._boostMeter/this._boostMeterMax);
			}

		}
		else if(this._avatar.isOutOfScreen)
		{
			if(!this._shake)
			{
				// Shake
				var tl = new TimelineMax();
				tl.to(this, 0.1, {x:this.x -80, ease:Quart.easeOut});
				tl.to(this, 0.1, {x:this.x +60, ease:Quart.easeOut});
				tl.to(this, 0.1, {x:this.x -40, ease:Quad.easeOut});
				tl.to(this, 0.1, {x:this.x +20, ease:Quad.easeOut});
				tl.to(this, 0.1, {x:this.x -1, ease:Sine.easeOut});
				tl.to(this, 0.1, {x:this.x, ease:Sine.easeOut});
				Common.animator.add(tl);
				this._shake = true;
			}


			// Stop scrolling when dead
			if(this._scrollSpeed > 0)
			{
				this._scrollSpeed -= p3.Timestep.deltaTime * this._scrollSpeedEnd * 0.4;

				if(this._scrollSpeed < 0)
				{
					this._scrollSpeed = 0;
				}
			}

			if(this._avatar.y >= Common.STAGE_HEIGHT && this._scrollSpeed == 0)
			{
				this.endGame();
			}
		}

	}
};

/**
 */
GameScreen.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call(this);

	this._muteButton.x   = this._getFirstButtonPositionRight();
	this._pauseButton.x  = this._getSecondButtonPositionRight() - 40;
	this._scoreCounter.x = this._getFirstButtonPositionLeft();
};

/**
 */
GameScreen.prototype.dispose = function()
{
	// SoundSFX.stop('music_ingame_loop_00');
	this._avatar.stopLoops();
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
GameScreen.prototype.animateIn = function(callback, scope) {

	SimpleScreen.prototype.animateIn.call(this);

	var tl = new TimelineMax({onComplete:function()
	{
		this._screenTransition.alpha = 0;
	}, onCompleteScope:this});
	tl.to(this._screenTransition, 0.35, {x:Common.STAGE_WIDTH, ease:Sine.easeIn}, 0.2);
	Common.animator.add(tl);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
GameScreen.prototype.animateOut = function(callback, scope) {

	SimpleScreen.prototype.animateOut.call(this);
};


/**
 */
GameScreen.prototype.hideGUI = function(callback, scope)
{
	this._paused = true;
	TweenMax.pauseAll();
	this._avatar.stopLoops();

	var tl = new TimelineMax({onCompleteScope:scope, onComplete:callback});
	tl.to(this._pauseButton.scale,  .35, {x:0, y:0, ease:Back.easeIn}, 0);
	tl.to(this._muteButton.scale,   .35, {x:0, y:0, ease:Back.easeIn}, 0);
	tl.to(this._scoreCounter.scale, .35, {x:0, y:0, ease:Back.easeIn}, 0);
	tl.to(this._boostBar.scale, .35, {x:0, y:0, ease:Back.easeIn}, 0);
	Common.animator.add(tl);

	this._scrollerEngine.pause();
}

/**
 */
GameScreen.prototype.showGUI = function()
{
	this._paused = false;
	TweenMax.resumeAll();
	this._avatar.playLoops();

	var tl = new TimelineMax();
	tl.to(this._muteButton.scale,   .5, {x:1, y:1, ease:Back.easeOut}, 0);
	tl.to(this._pauseButton.scale,  .5, {x:1, y:1, ease:Back.easeOut}, 0.1);
	tl.to(this._scoreCounter.scale, .5, {x:1, y:1, ease:Back.easeOut}, 0.1);
	tl.to(this._boostBar.scale, .5, {x:1, y:1, ease:Back.easeOut}, 0.1);
	Common.animator.add(tl);



	this._scrollerEngine.resume();
}


//===================================================
// PRIVATE METHODS
//===================================================

/**
 * @param {!Array} images
 * @param {!String} layerName
 * @param {!Number} yOffset
 */
GameScreen.prototype._addBackground = function(images, layerName, yOffset)
{
	var arr = [];

	for(var i = 0; i < images.length; i++)
	{
		arr.push(
		{
			base:ScrollerObjectImage,
			args:[layerName + "_" + (i+1), true, this._assetManager.getTexture(images[i].texture)],
			areaRect:new PIXI.Rectangle(0, 0, images[i].width, images[i].height),
			offset:{x:images[i].offsetX, y:images[i].offsetY}
		});
	}

	var loop = new ScrollerLoopingRange(arr, true, false);
	this._scrollerEngine.addLoopingRangeToLayer(loop, layerName, 0, yOffset);
};


//===================================================
// EVENTS
//===================================================

/**
 */
GameScreen.prototype.onTouchStart = function(e, id)
{
	if(this._isIntro) return;

	this._avatar.fall();
	
	if(p3.Device.isMobile)
	{
		this._avatar._boostTarget.x = e.data.getLocalPosition(this).x;
		this._avatar._boostTarget.y = e.data.getLocalPosition(this).y - 400;
	}
};

/**
 */
GameScreen.prototype.onTouchEnd = function(event, id)
{
	if(this._isIntro) return;

	this._avatar.fallEnd();
};

/**
 * @param {!ScrollingObject} object1
 * @param {!ScrollingObject} object2
 */
GameScreen.prototype.onCollision = function(object1, object2)
{
	if(this._avatar.isDead) return;

	// Character - Cloud
	if(object2.type == 'cloud')
	{
		if(this._avatar.verticalSpeed > 0)
		{
			this._avatar.bounce();
			object2.hit();
		}
	}
	else if(object2.type == "pickup")
	{
		if(object2.hasBeenHit) return;

		object2.hit();

		// Score
		this._score += this._scrollSpeed * (this._avatar.isBoost ? this._boostSpeedMultiplier : 1);;
		this._scoreCounter.updateScore(Math.floor(this._score));

		// Boost
		this._boostMeter += !this._avatar.isBoost ? 1 : (this._boostMeter > 1 ? 0.25 : 0);
		this._boostBar.updateBoostMeter(this._boostMeter/this._boostMeterMax);

		if(this._boostMeter >= this._boostMeterMax)
		{
			this._avatar.boost();
			this._cloudGenerator._targetTime /= this._boostSpeedMultiplier;
		}

		if(this._boostMeter == Math.floor(this._boostMeterMax/2))
			SoundSFX.playRandomFrom(["sfx_unicorn_rainbow_power_random_00", "sfx_unicorn_rainbow_power_random_01"]);
	
		SoundSFX.play("sfx_rainbow_pickups_00",{volume:0.35});

		// Particles
		for(var i = 0; i < 3; i++)
		{
			var x = object2.x + object2.parent.x;
			var y = object2.y + object2.parent.y + object2._sprite.y;
			this._pickupParticleHolder.addObject(x, y, i * 0.05);
		}
	}
	else if(object2.type == "enemy")
	{
		object2.hit();

		if(this._avatar.die())
		{
			// Shake
			var tl = new TimelineMax();
			tl.to(this, 0.1, {x:this.x -50, ease:Quart.easeOut});
			tl.to(this, 0.1, {x:this.x +30, ease:Quad.easeOut});
			tl.to(this, 0.1, {x:this.x -15, ease:Sine.easeOut});
			tl.to(this, 0.1, {x:this.x, ease:Sine.easeOut});
			Common.animator.add(tl);
		}
	}
}

/**
 */
GameScreen.prototype.onPausePressed = function()
{
	if(this._avatar.isDead) return;

	SoundSFX.play("sfx_btn_press_00");
	this._avatar.stopLoops();

	this.signals.pausePressed.dispatch();
}

/**
 */
GameScreen.prototype.buttonOver = function() {

	SoundSFX.play("sfx_btn_rollover_00");
};



/**
 * @param {Array<Obstacle>} objs
 */
GameScreen.prototype.onGenerateCloud = function(objs)
{
	var xMin = null;
	var xMax = null;

	// Chance for enemies to spawn
	var enemyPercentage = this._enemyPercentageStart + (this._enemyPercentageEnd - this._enemyPercentageStart) * ((this._scrollSpeed - this._scrollSpeedStart) / (this._scrollSpeedEnd - this._scrollSpeedStart))

    for(var i = 0; i < objs.length; i++)
    {
		// Don't spawn enemy when the player is invincibile, this way when it exit from that state there will be no enemies in front of him
		if(objs[i].obj._type == "enemy" && this._avatar.isBoost) continue;

		// Less enemies at the start
		if(objs[i].obj._type == "enemy" && Math.random() > enemyPercentage) continue;

        var layer = this._scrollerEngine.getLayerContainer("cloudLayer");
        var x = (layer.x*-1) + (this._scrollerEngine.viewBoundary.width);
        this._scrollerEngine.addObjectToLayer(objs[i].obj, "cloudLayer", x - objs[i].obj.areaRect.x + objs[i].offset.x, objs[i].offset.y);

		// Calculate the length of the current pattern
		var bounds = objs[i].obj.getLocalBounds();
		xMin = (xMin == null || xMin > objs[i].obj.x + bounds.x)                ? (objs[i].obj.x + bounds.x)                : xMin;
		xMax = (xMax == null || xMax < objs[i].obj.x + bounds.x + bounds.width) ? (objs[i].obj.x + bounds.x + bounds.width) : xMax;
    }

	var distance = (xMax - xMin);
	this._cloudGenerator.setFrequencies(distance, distance + 600);
}

/**
 * @param {ScrollerObject} obj
 */
GameScreen.prototype.onObjectDisposed = function(obj)
{

}


//===================================================
// GETTERS/SETTERS
//===================================================


},{"../Common":2,"../game/Avatar":5,"../game/BoostBar":6,"../game/Cloud":7,"../game/Enemy":8,"../game/Pickup":9,"../game/PickupParticleHolder":10,"../game/RainbowTail":11,"../game/ScoreCounter":12,"../general/SoundSFX":14,"../scroller/ScrollerEngine":27,"../scroller/ScrollerLoopingRange":28,"../scroller/ScrollerObject":29,"../scroller/ScrollerObjectGenerator":30,"../scroller/ScrollerObjectImage":31,"./SimpleScreen":25}],23:[function(require,module,exports){
"use strict";

var Common       = require("../Common");
var SimpleScreen = require("./SimpleScreen");
var NextButton   = require("../general/NextButton");
var SoundSFX     = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function IntroScreen()
{
	/**
	 * @type {PIXI.Container}
	 */
	this._bg                 = null;
	this._bandsContainer     = null;
	this._particleContainer  = null;
	this._characterContainer = null;

	/**
	 * @type {PIXI.TilingSprite}
	 */
	this._bands1 = null;
	this._bands2 = null;
	this._bands3 = null;

	/**
	 * @type {PIXI.Sprite}
	 */
	this._letshavefun = null;
	this._character1  = null;
	this._character2  = null;

	/**
	 * @type {cloudkid.Emitter}
	 */
	this._barsPS   = null;
	this._starsPS  = null;
	this._sparksPS = null;

	/*
	 * @type {NextButton}
	 */
	this._nextButton = null;

	/*
	 * @type {p3.MuteButton}
	 */
	this._muteButton = null;

	/*
	 * @type {PIXI.Sprite}
	 */
	this._screenTransition = null;

	SimpleScreen.call(this);
}
module.exports = IntroScreen;
IntroScreen.prototype = Object.create(SimpleScreen.prototype);
IntroScreen.prototype.constructor = IntroScreen;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
IntroScreen.prototype.init = function()
{
	console.log("INTRO INITIALIZED");

	SimpleScreen.prototype.init.call(this);


	// BG
	var canvas = document.createElement('canvas');
	canvas.width  = 1;
	canvas.height = 100;
	var ctx = canvas.getContext("2d");

	var gradient = ctx.createLinearGradient(0,0,0,canvas.height);
	gradient.addColorStop(1,"#FBF0C5");
	gradient.addColorStop(0,"#F38DB8");
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	this._bg = new PIXI.Sprite(PIXI.Texture.fromCanvas(canvas));
	this._bg.width  = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this.addChild(this._bg);

	// Bands
	this._bandsContainer = new PIXI.Container();
	this._bandsContainer.alpha = 0;
	this.addChild(this._bandsContainer);

	var canvas = document.createElement('canvas');
	canvas.width  = 700;
	canvas.height = 1;
	var ctx = canvas.getContext("2d");

	var gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
	gradient.addColorStop(1,"#F28BB7");
	gradient.addColorStop(0,"#F28BB7");
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 145, canvas.height);
	ctx.fillRect(160, 0, 20, canvas.height);
	ctx.fillRect(190, 0, 10, canvas.height);
	ctx.fillRect(310, 0, 25, canvas.height);
	ctx.fillRect(350, 0, 125, canvas.height);
	ctx.fillRect(490, 0, 35, canvas.height);

	this._bands1 = new PIXI.TilingSprite(PIXI.Texture.fromCanvas(canvas), Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
	this._bands1.width  = Common.STAGE_WIDTH;
	this._bands1.height = Common.STAGE_HEIGHT;
	this._bands1.alpha = 0.3;
	this._bandsContainer.addChild(this._bands1);

	this._bands2 = new PIXI.TilingSprite(PIXI.Texture.fromCanvas(canvas), Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
	this._bands2.width  = Common.STAGE_WIDTH;
	this._bands2.height = Common.STAGE_HEIGHT;
	this._bands2.alpha = 0.3;
	this._bands2.scale = new PIXI.Point(1.2, 1);
	this._bands2.tilePosition.x -= canvas.width * Math.random();
	this._bandsContainer.addChild(this._bands2);

	this._bands3 = new PIXI.TilingSprite(PIXI.Texture.fromCanvas(canvas), Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
	this._bands3.width  = Common.STAGE_WIDTH;
	this._bands3.height = Common.STAGE_HEIGHT;
	this._bands3.alpha = 0.3;
	this._bands3.tilePosition.x -= canvas.width * Math.random();
	this._bandsContainer.addChild(this._bands3);

	// Particle systems
	this._particleContainer = new PIXI.Container();
	this._particleContainer.x = Common.STAGE_WIDTH/2;
	this._particleContainer.y = Common.STAGE_HEIGHT;
	this.addChild(this._particleContainer);

	this._barsPS = new cloudkid.Emitter(this._particleContainer, [this._assetManager.getTexture("bar1_part"), this._assetManager.getTexture("bar2_part")], this._assetManager.getJSON("introBars_ps"));
	this._barsPS.emit = false;

	this._starsPS = new cloudkid.Emitter(this._particleContainer, [this._assetManager.getTexture("star_part"), this._assetManager.getTexture("dot_particle")], this._assetManager.getJSON("introStars_ps"));
	this._starsPS.emit = false;

	// Letshavefun
	this._letshavefun = new PIXI.Sprite(this._assetManager.getTexture("letshavefun"));
	this._letshavefun.anchor = new PIXI.Point(0.5, 0.5);
	this._letshavefun.x = Common.STAGE_WIDTH/2-240;
	this._letshavefun.y = Common.STAGE_HEIGHT/2-80;
	this._letshavefun.scale = new PIXI.Point(0, 0);
	this.addChild(this._letshavefun);


	// Character
	this._characterContainer = new PIXI.Container();
	this._characterContainer.x = Common.STAGE_WIDTH/2 + 210;
	this._characterContainer.y = Common.STAGE_HEIGHT;
	this.addChild(this._characterContainer);

	this._character1 = new PIXI.Sprite(this._assetManager.getTexture("raven1"));
	this._character1.anchor = new PIXI.Point(0.5, 1);
	this._characterContainer.addChild(this._character1);
	this._character2 = new PIXI.Sprite(this._assetManager.getTexture("raven2"));
	this._character2.anchor = new PIXI.Point(0.5, 1);
	this._character2.alpha = 0;
	this._characterContainer.addChild(this._character2);

	this._characterContainer.y += this._character1.height


	this._sparksPS = new cloudkid.Emitter(this._characterContainer, [this._assetManager.getTexture("star3_part")], this._assetManager.getJSON("introSparks_ps"));
	this._sparksPS.emit = false;



	// Buttons
	this._nextButton = new NextButton("arrow", 0);
	this._nextButton.y = Common.STAGE_HEIGHT - 130;
	this._nextButton.init();
	this._nextButton.signals.clicked.addOnce(this.nextClicked, this);
	this._nextButton.signals.clickFinish.addOnce(this.nextClickFinish, this);
	this._nextButton.scale = new PIXI.Point(0,0);
	// this._nextButton.signals.over.add(this.buttonOver, this);

	if(Common.savedData.hasSeenIntro)
		this.addChild(this._nextButton);

	this._muteButton = new p3.MuteButton(
		this._assetManager.getTexture("but_sound_on_def"),
		this._assetManager.getTexture("but_sound_off_def"),
		this._assetManager.getTexture("but_sound_on_over"),
		this._assetManager.getTexture("but_sound_off_over"),
		this._assetManager.getTexture("but_sound_on_pressed"),
		this._assetManager.getTexture("but_sound_off_pressed")
	);
	this._muteButton.id = "mute";
	this._muteButton.y = this._guiButtonTopMargin;
	this._muteButton.signals.over.add(this.buttonOver, this);
	this._muteButton.init();
	this.addChild(this._muteButton);


	// Black screen
	this._screenTransition = new PIXI.Container();
	this._screenTransition.alpha = 1;
	this._screenTransition.x = 0;
	this.addChild(this._screenTransition)

	var colors = [0x11B066, 0xFFDE75, 0xF17AB0, 0x3991CF, 0x8D58A4];
	for(var i = 0; i < colors.length; i++)
	{
		var band = new PIXI.Sprite(Common.generatedTextures['whiteSquare']);
		band.tint = colors[i];
		band.width = Common.STAGE_WIDTH;
		band.height = Common.STAGE_HEIGHT/5;
		band.y = Common.STAGE_HEIGHT/5 * i;
		this._screenTransition.addChild(band);
	}
};

/**
 */
IntroScreen.prototype.update = function()
{
	// Update particle system
	this._starsPS.update(p3.Timestep.deltaTime);
	this._barsPS.update(p3.Timestep.deltaTime);
	this._sparksPS.update(p3.Timestep.deltaTime);
};

/**
 */
IntroScreen.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call(this);

	this._nextButton.x = this._getFirstButtonPositionRight() - 150;
	this._muteButton.x = this._getFirstButtonPositionRight();
};

/**
 */
IntroScreen.prototype.dispose = function()
{
	// SoundSFX.stop('music_menu_loop_00');

	this._nextButton.signals.clickFinish.remove(this.nextClickFinish, this);
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
IntroScreen.prototype.animateIn = function(callback, scope)
{
	SimpleScreen.prototype.animateIn.call(this);

	// Buttons
	var tl = new TimelineMax();
	tl.to(this._screenTransition, 0.35, {x:Common.STAGE_WIDTH, ease:Sine.easeIn}, 0);
	tl.to(this._nextButton.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, 0.5);

	tl.to(this._characterContainer, 0.4, {y:Common.STAGE_HEIGHT, ease:Quad.easeOut, onComplete:function(){this._starsPS.emit = true; this._barsPS.emit = true;}, onCompleteScope:this}, 0.5);
	tl.to(this._characterContainer, 0.15, {y:Common.STAGE_HEIGHT+ 50, ease:Sine.easeIn, onComplete:function(){this._sparksPS.emit = true; SoundSFX.play('sfx_raven_laugh_00',{volume : 0.66});}, onCompleteScope:this}, 0.9);
	tl.to(this._characterContainer, 0.15, {y:Common.STAGE_HEIGHT, ease:Sine.easeOut}, 1.05);
	tl.to(this._characterContainer, 0.15, {y:Common.STAGE_HEIGHT+ 30, ease:Sine.easeIn}, 1.2);
	tl.to(this._characterContainer, 0.15, {y:Common.STAGE_HEIGHT, ease:Sine.easeOut}, 1.35);

	tl.to(this._character2, 0.35, {alpha:1, ease:Quad.easeOut}, 1.1);

	var scale = 1;
	if(Common.COUNTRY_CODE == "ru") scale = 0.85;
	if(Common.COUNTRY_CODE == "it") scale = 0.90;
	if(Common.COUNTRY_CODE == "es") scale = 0.90;
	
	tl.to(this._letshavefun.scale, 0.6, {x:1*scale, y:1*scale, ease:Sine.easeOut}, 1.3);
	tl.to(this._letshavefun.scale, 0.6, {x:0.95*scale, y:0.95*scale, ease:Sine.easeInOut, repeat:-1, yoyo:true}, 1.9);


	tl.to(this._bandsContainer, 1, {alpha:1, ease:Sine.easeOut}, 0.5);
	tl.to(this._bands1.tilePosition, 15 * 100, {x:this._bands1.width * 100, ease:Linear.easeNone}, 0);
	tl.to(this._bands2.tilePosition, 20 * 100, {x:-this._bands2.width * 100, ease:Linear.easeNone}, 0);
	tl.to(this._bands3.tilePosition, 25 * 100, {x:this._bands3.width * 100, ease:Linear.easeNone}, 0);

	Common.animator.add(tl);

	Common.animator.setTimeout(function()
	{
		Common.savedData.hasSeenIntro = true;
		Common.savedData.save();
		this.animateOut();
	}, 4.5, this);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
IntroScreen.prototype.animateOut = function(callback, scope)
{
	SimpleScreen.prototype.animateOut.call(this);

	this._screenTransition.x = -Common.STAGE_WIDTH;

	var tl = new TimelineMax({onComplete: function()
	{
		this.signals.requestedNextScreen.dispatch();
	}, onCompleteScope: this});

	tl.to(this._screenTransition, 0.6, {x:0, ease:Sine.easeOut}, 0);
	Common.animator.add(tl);
};


//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

/**
 */
IntroScreen.prototype.nextClicked = function()
{
	// this.signals.requestedNextScreen.dispatch();
	this.animateOut();

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
IntroScreen.prototype.buttonOver = function()
{
	SoundSFX.play("sfx_btn_rollover_00");
};

/**
 */
IntroScreen.prototype.nextClickFinish = function()
{
	this.signals.requestedNextScreen.dispatch();
};


//===================================================
// GETTERS/SETTERS
//===================================================

},{"../Common":2,"../general/NextButton":13,"../general/SoundSFX":14,"./SimpleScreen":25}],24:[function(require,module,exports){
/**
 *  Preloader
 */

var SoundSFX     = require("../general/SoundSFX");
var SimpleScreen = require("./SimpleScreen");
var Common       = require("../Common");
// var Brim         = require("../brim");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Preloader()
{
	SimpleScreen.call(this);

	// Data
	this.loadedPercentage = 0.0;

	// Signals
	this.signals.loadingComplete = new signals.Signal();
}
module.exports = Preloader;
Preloader.prototype = Object.create(SimpleScreen.prototype);
Preloader.prototype.constructor = Preloader;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Preloader.prototype.init = function()
{
	console.log("PRELOADER INITIALIZED");
	SimpleScreen.prototype.init.call(this);

	// Generated square texture
	var gr = new PIXI.Graphics();
	gr.beginFill(0x000000);
	gr.drawRect(0, 0, 1, 1);
	Common.generatedTextures['blackSquare'] = gr.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);

	var gr = new PIXI.Graphics();
	gr.beginFill(0xffffff);
	gr.drawRect(0, 0, 1, 1);
	Common.generatedTextures['whiteSquare'] = gr.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);

	// Font preloader
	var hiddenLiveText = new PIXI.Text("Test", {font: "32px FredFredburgerAra-Regular", fill: 0x000000, align: "center", stroke: 0x0, strokeThickness: 1});
	hiddenLiveText.alpha = 0;
	this.addChild(hiddenLiveText);

	var hiddenLiveText = new PIXI.Text("Test", {font: "32px GrilledCheeseBTN-Regular", fill: 0x000000, align: "center", stroke: 0x0, strokeThickness: 1});
	hiddenLiveText.alpha = 0;
	this.addChild(hiddenLiveText);

	var hiddenLiveText = new PIXI.Text("Test", {font: "32px Junegull-Regular", fill: 0x000000, align: "center", stroke: 0x0, strokeThickness: 1});
	hiddenLiveText.alpha = 0;
	this.addChild(hiddenLiveText);

	// Brim
	// if(p3.Device.isMobile && p3.Device.isIOS)
	// {
		// var brim = new Brim();
	// }
	
	// Background
	var bg = new PIXI.Sprite(this._assetManager.getTexture("preloader_bg"));
	this.addChild(bg);

	// Loading bar
	this._barContainer = new PIXI.Container();
	this._barContainer.x = (Common.STAGE_WIDTH / 2);
	this._barContainer.y = (Common.STAGE_HEIGHT / 2) + 200;
	this.addChild(this._barContainer)

		this._barOuter = new PIXI.Sprite(this._assetManager.getTexture("preloader_overlay"));
		this._barOuter.x = -250;
		this._barOuter.anchor.set(.5);

		this._barInner = new PIXI.Sprite(this._assetManager.getTexture("preloader_fill"));
		this._barInner.x = this._barOuter.x - (this._barOuter.width/2) - 170;
		this._barInner.y = this._barOuter.y - (this._barOuter.height/2) + 10;
		this._barInnerStartX = this._barInner.x;

		this._barContainer.addChild(this._barInner);
		this._barContainer.addChild(this._barOuter);

		var black = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
		black.x = this._barInner.x - (this._barInner.width/2);
		black.width = this._barOuter.width/2;
		black.height = Common.STAGE_HEIGHT;
		black.y = -100;
		this._barContainer.addChild(black);

	// Mobile play button
	this._playButton = new p3.Button
	(
		this._assetManager.getTexture("but_play_def"),
		this._assetManager.getTexture("but_play_over"),
		this._assetManager.getTexture("but_play_pressed")
	);
	this._playButton.x = Common.STAGE_WIDTH * 0.5;
	this._playButton.y =  this._barContainer.y;
	this._playButton.visible = false;
	this._playButton.signals.click.add(this.onPlayButtonClick, this);
	this.addChild(this._playButton);
};

/**
 */
Preloader.prototype.dispose = function()
{
	SimpleScreen.prototype.dispose.call(this);
	this.signals.loadingComplete.dispose();
};

/**
 */
Preloader.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call(this);

	this.x = (p3.View.width - Common.STAGE_WIDTH) * 0.5;
	this.y = (p3.View.height - Common.STAGE_HEIGHT) * 0.5;
};

/**
 */
Preloader.prototype.update = function()
{
	// console.log("LOADING: " + this.loadedPercentage);

	this._barInner.x = this._barInnerStartX + (698 * (this.loadedPercentage/100));

	// On mobile show a button before going to the game so the audio is loaded even when the content is on another domain
	if(!this._completed && this.loadedPercentage == 100)
	{
		this._completed = true;

		if (p3.Device.isMobile)
		{
			this._playButton.visible = true;
			this._playButton.scale.set(0);
			TweenMax.fromTo(this._playButton.scale, 0.35, {x:0, y:0}, {x: 1, y: 1, ease: Back.easeOut, delay:0.35});
			TweenMax.to(this._barContainer.scale, 0.35, {x: 0, y: 0, ease: Back.easeIn});
		}
	}
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
Preloader.prototype.animateIn = function(callback, scope)
{
	SimpleScreen.prototype.animateIn.call(callback, scope);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
Preloader.prototype.animateOut = function(callback, scope) {
	SimpleScreen.prototype.animateOut.call(callback, scope);

	var timeline = new TimelineMax({
		onComplete: callback,
		onCompleteScope: scope
	});
	this._tweens.push(timeline);
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

Preloader.prototype.onPlayButtonClick = function(callback, scope)
{
	SoundSFX.play("sfx_btn_press_00");
	this.signals.loadingComplete.dispatch();
}

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================

},{"../Common":2,"../general/SoundSFX":14,"./SimpleScreen":25}],25:[function(require,module,exports){

var Common      = require("../Common");
var Scene       = require("../lib/Scene");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function SimpleScreen() {


    /**
     * @type {signals.Signal}
     */
    this.signals = {};
    this.signals.requestedNextScreen = new signals.Signal();
    this.signals.requestedPreviousScreen = new signals.Signal();
    
    /**
     * @type {p3.AssetManager}
     * @protected
     */
    this._assetManager = p3.AssetManager.instance;

    /**
     * @type {Array.<TweenMax>}
     * @protected
     */
    this._tweens = null;

    /**
     * @type {PIXI.Point}
     */
    this._centre = null;

    /**
     * @type {Number}
     */
    this._leftEdge = 0;

    /**
     * @type {Number}
     */
    this._rightEdge = 0;

    /**
     * @type {Number}
     */
    this._guiButtonTopMargin = 100;


    p3.Screen.call(this);
}
module.exports = SimpleScreen;
SimpleScreen.prototype = Object.create(Scene.prototype);
SimpleScreen.prototype.constructor = SimpleScreen;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
SimpleScreen.prototype.init = function() {
    this._tweens = [];
    this._centre = new PIXI.Point(Common.STAGE_WIDTH/2, Common.STAGE_HEIGHT/2);
};

/**
 */
SimpleScreen.prototype.dispose = function() {
    this.signals.requestedNextScreen.dispose();
    this.signals.requestedPreviousScreen.dispose();

    var tween;
    for (var i = 0; i < this._tweens.length; ++ i) {
        tween = this._tweens[i];
        if (tween) {
            tween.kill();
        }
    }
    this._tweens.length = 0;

    console.log("screen disposed");

    TweenMax.killAll();
    Common.animator.removeAll();
};

/**
 */
SimpleScreen.prototype.resize = function() {
    
    this.x = (p3.View.width - Common.STAGE_WIDTH) * 0.5;

    this._rightEdge = this._centre.x + (p3.View.width/2);
    this._leftEdge = this._centre.x - (p3.View.width/2);
};

/**
 */
SimpleScreen.prototype.activate = function() {
    this.animateIn(function() {
        
    }, this);
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
SimpleScreen.prototype.animateIn = function(callback, scope) {
    scope = scope || window;
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
SimpleScreen.prototype.animateOut = function(callback, scope) {
    scope = scope || window;
};

/**
 */
SimpleScreen.prototype.hideGUI = function() {
   
};

/**
 */
SimpleScreen.prototype.showGUI = function() {
   
};


//===================================================
// PRIVATE METHODS
//===================================================

/**
 * @returns Number
 */
SimpleScreen.prototype._getFirstButtonPositionRight = function()
{
    // return Math.round((Common.STAGE_WIDTH + p3.View.width) * 0.5 - 84.0);
	return Math.min(Math.round((Common.STAGE_WIDTH + p3.View.width) * 0.5), Common.STAGE_WIDTH - 150) - 84;
}

/**
 * @returns Number
 */
SimpleScreen.prototype._getSecondButtonPositionRight = function()
{
    // return Math.round((Common.STAGE_WIDTH + p3.View.width) * 0.5 - 160);
	return Math.min(Math.round((Common.STAGE_WIDTH + p3.View.width) * 0.5), Common.STAGE_WIDTH - 150) - 160;
}

/**
 * @returns Number
 */
SimpleScreen.prototype._getFirstButtonPositionLeft = function()
{
	// return Math.round((Common.STAGE_WIDTH - p3.View.width) * 0.5 + 84.0);
    return Math.max(Math.round((Common.STAGE_WIDTH - p3.View.width) * 0.5), 150) + 84;
}

/**
 * @returns Number
 */
SimpleScreen.prototype._getSecondButtonPositionLeft = function()
{
    // return Math.round((Common.STAGE_WIDTH - p3.View.width) * 0.5 + 234.0);
    return Math.max(Math.round((Common.STAGE_WIDTH - p3.View.width) * 0.5), 150) + 160;
}

//===================================================
// EVENTS
//===================================================

/**
 * @param {!p3.Button} button
 */
SimpleScreen.prototype.onButtonClickedPrevious = function(button) {

};


//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../lib/Scene":16}],26:[function(require,module,exports){
"use strict";

var Common       = require("../Common");
var SimpleScreen = require("./SimpleScreen");
var SoundSFX     = require("../general/SoundSFX");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function SplashScreen()
{
	/**
	 * @type {PIXI.Container}
	 */
	this._container          = null;
	this._particleContainer  = null;
	this._characterContainer = null;
	this._balloonContainer   = null;

	/**
	 * @type {PIXI.Sprite}
	 */
	this._bg            = null;
	this._clouds        = null;
	this._character     = null;
	this._rainbow       = null;
	this._heart1        = null;
	this._heart2        = null;
	this._logo          = null;
	this._text          = null;

	/**
	 * @type {p3.Button}
	 */
	this._playButton = null;

	/**
	 * @type {p3.MuteButton}
	 */
	this._muteButton = null;

	/**
	 * @type {Howl}
	 */
	this._bgMusic = null;

	SimpleScreen.call(this);

	this.signals.moreGames = new signals.Signal();
}

module.exports = SplashScreen;
SplashScreen.prototype = Object.create(SimpleScreen.prototype);
SplashScreen.prototype.constructor = SplashScreen;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
SplashScreen.prototype.init = function()
{
	console.log("SPLASH INITIALIZED");

	SimpleScreen.prototype.init.call(this);

	this._container   = new PIXI.Container();
	this._container.x = Common.STAGE_WIDTH / 2;
	this._container.y = Common.STAGE_HEIGHT / 2;
	this.addChild(this._container);

	// Background
	this._bg        = new PIXI.Sprite(this._assetManager.getTexture("bg_pink", ".jpg"));;
	this._bg.anchor = new PIXI.Point(0.5, 0.5);
	this._container.addChild(this._bg);

	// Stars particle system
	this._particleContainer = new PIXI.Container();
	this._particleContainer.x = Common.STAGE_WIDTH/2;
	this.addChild(this._particleContainer);
	this._starsPS = new cloudkid.Emitter(this._particleContainer, [this._assetManager.getTexture("star_part"), this._assetManager.getTexture("dot_particle")], this._assetManager.getJSON("splashStars_ps"));
	this._starsPS.emit = true;
	this._starsPS.update(4);

	// Objects
	this._characterContainer       = new PIXI.Container();
	this._characterContainer.scale = new PIXI.Point(0,0);
	this._container.addChild(this._characterContainer);

		this._clouds        = new PIXI.Sprite(this._assetManager.getTexture("clouds"));
		this._clouds.anchor = new PIXI.Point(0.5, 0.5);
		this._clouds.x += 123;
		this._clouds.y += 145;
		this._characterContainer.addChild(this._clouds);

		this._character        = new PIXI.Sprite(this._assetManager.getTexture("maincharacter"));
		this._character.anchor = new PIXI.Point(0.5, 0.5);
		this._character.x -= 50;
		this._character.y += 20;
		this._characterContainer.addChild(this._character);

		this._rainbow        = new PIXI.Sprite(this._assetManager.getTexture("rainbow"));
		this._rainbow.anchor = new PIXI.Point(0.5, 0.5);
		this._rainbow.x -= 200;
		this._rainbow.y += 108;
		this._characterContainer.addChild(this._rainbow);

	this._heart1        = new PIXI.Sprite(this._assetManager.getTexture("heart_part"));
	this._heart1.anchor = new PIXI.Point(0.5, 0.5);
	this._heart1.scale = new PIXI.Point(0,0);
	this._heart1.x += 420;
	this._heart1.y -= 120;
	this._container.addChild(this._heart1);

	this._heart2        = new PIXI.Sprite(this._assetManager.getTexture("heart_part"));
	this._heart2.anchor = new PIXI.Point(0.5, 0.5);
	this._heart2.scale = new PIXI.Point(0,0);
	this._heart2.x += 355;
	this._heart2.y -= 50;
	this._container.addChild(this._heart2);

	this._balloonContainer   = new PIXI.Container();
	this._balloonContainer.x -= 430;
	this._balloonContainer.y += 40;
	this._balloonContainer.alpha = 0;
	this._container.addChild(this._balloonContainer);

		var sequence = new p3.MovieClipSequence();
		sequence.addTextures([this._assetManager.getTexture("balloon_splash_thread01"), this._assetManager.getTexture("balloon_splash_thread02"), this._assetManager.getTexture("balloon_splash_thread01"), this._assetManager.getTexture("balloon_splash_thread02")]);

		var string = new p3.MovieClip(sequence);
		string.anchor = new PIXI.Point(0.5, 0);
		// string.scale = new PIXI.Point(2, 4);
		// string.x -= 3;
		string.y -= 18;
		// string.gotoAndPlay(0);
		// string.animationSpeed = string.totalFrames/0.7;
		string.looping = true;
		this._balloonContainer.addChild(string);

		var balloon = new PIXI.Sprite(this._assetManager.getTexture("balloon_splash01"));
		balloon.anchor = new PIXI.Point(0.5, 1);
		this._balloonContainer.addChild(balloon);

		this._bombPS = new cloudkid.Emitter(this._balloonContainer, [this._assetManager.getTexture("dot_particle")], this._assetManager.getJSON("bomb_ps"));
		this._bombPS.emit = true;

	this._logo        = new PIXI.Sprite(this._assetManager.getTexture("ttg_logo"));
	this._logo.anchor = new PIXI.Point(0.5, 0.5);
	this._logo.scale = new PIXI.Point(0,0);
	this._logo.x -= 190;
	this._logo.y -= 210;
	this._container.addChild(this._logo);

	//var copy = this._assetManager.getJSON("config")['copy']["TITLE"][Common.COUNTRY_CODE];
	//this._text = new PIXI.Text(copy.text, {font: "66px GrilledCheeseBTN-Regular", fill: 0xFCEC1B, align: "center", stroke: 0x000000, strokeThickness: 12, padding:20, lineJoin: 'round', lineHeight:70});

	this._text        = new PIXI.Sprite(this._assetManager.getTexture("titlegame"));
	this._text.anchor = new PIXI.Point(0.5, 0.5);
	this._text.alpha = 0;
	this._text.x -= 180;
	this._text.y += 200;
	this._container.addChild(this._text);

	// Buttons
	this._playButton = new p3.Button
	(
		this._assetManager.getTexture("but_play_def"),
		this._assetManager.getTexture("but_play_over"),
		this._assetManager.getTexture("but_play_pressed")
	);
	this._playButton.x = Common.STAGE_WIDTH / 2 + 310;
	this._playButton.y = Common.STAGE_HEIGHT - 165;
	this._playButton.signals.down.addOnce(this.playClicked, this);
	this._playButton.signals.over.add(this.buttonOver, this);
	this._playButton.scale   = new PIXI.Point(0, 0);
	this._playButton.animate = false;
	this.addChild(this._playButton);

	this._muteButton = new p3.MuteButton
	(
		this._assetManager.getTexture("but_sound_on_def"),
		this._assetManager.getTexture("but_sound_off_def"),
		this._assetManager.getTexture("but_sound_on_over"),
		this._assetManager.getTexture("but_sound_off_over"),
		this._assetManager.getTexture("but_sound_on_pressed"),
		this._assetManager.getTexture("but_sound_off_pressed")
	);
	this._muteButton.id    = "mute";
	this._muteButton.y     = this._guiButtonTopMargin;
	this._muteButton.scale = new PIXI.Point(0, 0);
	this._muteButton.signals.over.add(this.buttonOver, this);
	this._muteButton.init();
	this.addChild(this._muteButton);

	// Show more games
	this._moreGamesButton = new p3.Button
	(
		this._assetManager.getTexture("cngw_btn_more_games"),
		this._assetManager.getTexture("cngw_btn_more_games"),
		this._assetManager.getTexture("cngw_btn_more_games")
	);
	this._moreGamesButton.y = this._guiButtonTopMargin;
	this._moreGamesButton.scale.set(0);
	this._moreGamesButton.signals.down.add(this.moreGamesClicked, this);
	this._moreGamesButton.signals.over.add(this.buttonOver, this);
	this._moreGamesButton.animate = false;
    if(this._assetManager.getJSON("config").moreGames)
        this.addChild(this._moreGamesButton);

	// Black screen
	this._screenTransition = new PIXI.Container();
	this._screenTransition.alpha = 1;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)

	var colors = [0x11B066, 0xFFDE75, 0xF17AB0, 0x3991CF, 0x8D58A4];
	for(var i = 0; i < colors.length; i++)
	{
		var band = new PIXI.Sprite(Common.generatedTextures['whiteSquare']);
		band.tint = colors[i];
		band.width = Common.STAGE_WIDTH;
		band.height = Common.STAGE_HEIGHT/5;
		band.y = Common.STAGE_HEIGHT/5 * i;
		this._screenTransition.addChild(band);
	}

	//Sounds
	SoundSFX.stop('music_menu_intro_00');
	SoundSFX.stop('music_menu_loop_00');

	this._bgMusic = SoundSFX.play('music_menu_intro_00',
	{
		volume : 1,
		loop   : false,
		onComplete  : function()
		{
			SoundSFX.play('music_menu_loop_00', {volume:1, loop:true});
		}
	});
};

/**
 */
SplashScreen.prototype.update = function()
{
	// Update particle system
	this._starsPS.update(p3.Timestep.deltaTime);
	this._bombPS.update(p3.Timestep.deltaTime);
};

/**
 */
SplashScreen.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call(this);

	this._muteButton.x = this._getFirstButtonPositionRight();
	this._moreGamesButton.x = this._getFirstButtonPositionLeft();
	// this._exitButton.x = this._getFirstButtonPositionLeft();
};

/**
 */
SplashScreen.prototype.dispose = function()
{

}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
SplashScreen.prototype.animateIn = function(callback, scope)
{
	SimpleScreen.prototype.animateIn.call(this);

	if(this.animatedIn) return;
	this.animatedIn = true;

	var delay = 0.3;

	// Buttons
	var tl = new TimelineMax();

	// tl.to(this._characterContainer, 0, {x:0, ease:Linear.easeNone}, delay);
	// tl.to(this._characterContainer, 1, {x:0, y:0, ease:Elastic.easeOut}, delay);
	tl.to(this._characterContainer.scale, 1, {x:1, y:1, ease:Back.easeOut}, delay);

	tl.to(this._logo.scale, 1.2, {x:1, y:1, ease:Elastic.easeOut}, delay + 0.3);
	tl.to(this._logo.scale, 1.5, {x:0.95, y:0.95, ease:Sine.easeInOut, repeat:-1, yoyo:true}, delay + 1.5);

	tl.to(this._text, 0, {y:this._text.y-100, ease:Linear.easeNone}, delay);
	tl.to(this._text, 1, {y:this._text.y, ease:Bounce.easeOut}, delay + 0.4);
	tl.to(this._text, 1, {alpha:1, ease:Sine.easeOut}, delay + 0.4);
	tl.to(this._text, 1, {rotation:-1.5 * PIXI.DEG_TO_RAD, ease:Sine.easeOut}, delay + 0.4);
	tl.to(this._text, 1.5, {rotation:+2 * PIXI.DEG_TO_RAD, ease:Sine.easeInOut, repeat:-1, yoyo:true}, delay + 1.4);

	tl.to(this._heart1.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, delay + 0.5);
	tl.to(this._heart1.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, delay + 0.5);
	tl.to(this._heart1.scale, 1, {x:0.9, y:0.9, ease:Sine.easeInOut, repeat:-1, yoyo:true}, delay + 1.5);

	tl.to(this._heart2.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, delay + 0.6);
	tl.to(this._heart2.scale, 1, {x:-0.5, y:0.5, ease:Elastic.easeOut}, delay + 0.6);
	tl.to(this._heart2.scale, 1.5, {x:-0.6, y:0.6, ease:Sine.easeInOut, repeat:-1, yoyo:true}, delay + 2.0);

	tl.to(this._balloonContainer, 0, {y:this._balloonContainer.y + 120, ease:Linear.easeNone}, delay);
	tl.to(this._balloonContainer, 1, {y:this._balloonContainer.y, ease:Sine.easeOut}, delay + 0.8);
	tl.to(this._balloonContainer, 1, {alpha:1, ease:Sine.easeOut}, delay + 0.8);
	tl.to(this._balloonContainer, 2, {y:this._balloonContainer.y + 50, ease:Sine.easeInOut, repeat:-1, yoyo:true}, delay + 1.8);

	tl.to(this._playButton.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, delay + 0.9);
	tl.to(this._muteButton.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, delay + 1.1);

	tl.fromTo(this._moreGamesButton.scale, 1, {x:0, y:0}, {x:1, y:1, ease:Elastic.easeOut}, delay + 1.3);

	Common.animator.add(tl);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
SplashScreen.prototype.animateOut = function(callback, scope)
{
	SimpleScreen.prototype.animateOut.call(this);

	var tl = new TimelineMax({onCompleteScope:scope, onComplete:callback});
		tl.to(this._screenTransition, 0.5, {x:0, ease:Sine.easeOut}, 0.3);
	Common.animator.add(tl);
};



//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

/**
 */
SplashScreen.prototype.playClicked = function()
{
	this._playButton.signals.over.remove(this.buttonOver, this);
	this._playButton.signals.down.remove(this.playClicked, this);

	TweenMax.killTweensOf(this._playButton.scale);

	this.animateOut(function()
	{
		this.signals.requestedNextScreen.dispatch();
	}, this);

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
SplashScreen.prototype.buttonOver = function()
{
	SoundSFX.play("sfx_btn_rollover_00");
};

/**
 */
SplashScreen.prototype.exitClicked = function() {

	var link = this._assetManager.getJSON("config").home_link;
	window.open(link);
};

/**
 */
SplashScreen.prototype.moreGamesClicked = function() {

	this.signals.moreGames.dispatch();
};



//===================================================
// GETTERS/SETTERS
//===================================================


},{"../Common":2,"../general/SoundSFX":14,"./SimpleScreen":25}],27:[function(require,module,exports){
"use strict";

var Common          = require("../Common");
var ScrollerObject	= require("./ScrollerObject");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 * @param {PIXI.Point} screenFocusPoint
 * @param {PIXI.Rectangle} viewBoundary
 * @param {PIXI.Rectangle} activeBoundary
 */
function ScrollerEngine(screenFocusPoint, viewBoundary, activeBoundary)
{
	/**
     * @type {signals.Signal}
     */
    this.signals = {};
	this.signals.collisionFired = new signals.Signal();

	/**
     * @type {PIXI.Point} - Point, relative to screen size, that the engine is focused on.
     */
	this._screenFocusPoint = screenFocusPoint;

	/**
     * @type {PIXI.Point} - World Point, signifying position of camera in the world.
     */
	this._view = screenFocusPoint.clone();

	/**
     * @type {PIXI.Rectangle} - The boundary rectangle, relative to the screenFocusPoint, in which the world objects are visible
     */
	this._viewBoundary = viewBoundary;

	/**
     * @type {PIXI.Rectangle} - The boundary rectangle, relative to the screenFocusPoint, in which the world objects are active
     */
	this._activeBoundary = activeBoundary;

	/**
     * @type {p3.Camera}
     */
    this._camera = null;

    /**
     * @type {Object}
     */
    this._layers = null;

    /**
     * @type {Array<ScrollerLoopingRange>}
     */
    this._loopingRanges = null;

    /**
     * @type {Array<Array<String>>}
     */
    this._collisions = null;

    
	PIXI.Container.call(this);
}
module.exports = ScrollerEngine;
ScrollerEngine.prototype = Object.create(PIXI.Container.prototype);
ScrollerEngine.prototype.constructor = ScrollerEngine;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
ScrollerEngine.prototype.init = function()
{
    this._camera = new p3.Camera(this._view, true);
    this._layers = {};
    this._loopingRanges = [];
    this._collisions = [];
};

/**
 */
ScrollerEngine.prototype.update = function()
{
	for(var i in this._layers)
	{
		var cont = this._layers[i].container;

		for(var j = 0; j < this._layers[i].objects.length; j++)
		{
			var obj = this._layers[i].objects[j];

			obj.update();

			if(obj.removeIfOutsideBoundary)
			{
				if(cont.x + obj.x + obj.areaRect.x + obj.areaRect.width < this._screenFocusPoint.x + this._activeBoundary.x ||
				   cont.y + obj.y + obj.areaRect.y + obj.areaRect.width < this._screenFocusPoint.y + this._activeBoundary.y ||
				   cont.x + obj.x > this._screenFocusPoint.x + this._activeBoundary.x + this._activeBoundary.width ||
				   cont.y + obj.y > this._screenFocusPoint.y + this._activeBoundary.y + this._activeBoundary.height)
				{
					this.removeObjectFromLayer(obj, i);
				}
			}
			if(obj.removeMe)
			{
				this.removeObjectFromLayer(obj, i);
			}	
			if(obj.persistentX)
			{
				obj.x = (this._screenFocusPoint.x + obj.persistentX) - cont.x;
			}
			if(obj.persistentRectangle)
			{
				var objX = cont.x + obj.x + obj.areaRect.x;
				var objY = cont.y + obj.y + obj.areaRect.y;
				var objXEdge = cont.x + obj.x + obj.areaRect.x + obj.areaRect.width;
				var objYEdge = cont.y + obj.y + obj.areaRect.y + obj.areaRect.height;
				var leftLimit = this._screenFocusPoint.x + obj.persistentRectangle.x;
				var rightLimit = leftLimit + obj.persistentRectangle.width;
				var upperLimit = this._screenFocusPoint.y + obj.persistentRectangle.y;
				var lowerLimit = upperLimit + obj.persistentRectangle.height;

				if(objX < leftLimit && obj.xSpeed <= 0)
				{
					obj.x = obj.x + ((leftLimit-objX) * obj.persistentRectangleExitEase);
					obj.onExitPersistentRectangle('left');
				}
				
				if(objY < upperLimit && obj.ySpeed <= 0)
				{
					obj.y = obj.y + ((upperLimit-objY) * obj.persistentRectangleExitEase);
					obj.onExitPersistentRectangle('upper');
				}

				if(objXEdge > rightLimit && obj.xSpeed >= 0)
				{
					obj.x = obj.x - ((objXEdge-rightLimit) * obj.persistentRectangleExitEase);
					obj.onExitPersistentRectangle('right');
				}
				
				if(objYEdge > lowerLimit && obj.xSpeed >= 0)
				{
					obj.y = obj.y - ((objYEdge-lowerLimit) * obj.persistentRectangleExitEase);
					obj.onExitPersistentRectangle('lower');
				}
			}
			for(var c = 0; c < this._collisions.length; c++)
			{
				if(this._collisions[c].length == 2)
				{	
					if(this._collisions[c][0] == obj.type)
					{
						this._checkForCollisions(obj, cont, this._collisions[c][1]);
					}	
				}	
			}	
		}	
	}

	for(var i = 0; i < this._loopingRanges.length; i++)
	{
		var newObjects = this._loopingRanges[i].update(this._screenFocusPoint, this._viewBoundary, this._layers[this._loopingRanges[i].layer].container);
		for(var j = 0; j < newObjects.length; j++)
		{
			newObjects[j].obj.areaRect = new PIXI.Rectangle(newObjects[j].areaRect.x, newObjects[j].areaRect.y, newObjects[j].areaRect.width, newObjects[j].areaRect.height);
			this.addObjectToLayer(newObjects[j].obj, this._loopingRanges[i].layer, newObjects[j].offset.x, newObjects[j].offset.y);
		}	
	}	
};

/**
 * @param {!String} name
 * @param {Point=} parallax
 * @returns {String}
 */
ScrollerEngine.prototype.addLayer = function(name, parallax)
{
	parallax = parallax || new PIXI.Point(1, 1);
	var container = new PIXI.Container();
	this.addChild(container);
	this._layers[name] = {container:container, objects:[], parallax:parallax};
	this._camera.addLayer(name, container, parallax);
}

/**
 * @param {!ScrollerObject} scrollerObject
 * @param {!String} layerName
 * @param {Number=} xPosition
 * @param {Number=} yPosition
 */
ScrollerEngine.prototype.addObjectToLayer = function(scrollerObject, layerName, xPosition, yPosition)
{
	this._layers[layerName].container.addChild(scrollerObject);
	if(xPosition)
		scrollerObject.x = xPosition;
	if(yPosition)
		scrollerObject.y = yPosition;
	this._layers[layerName].objects.push(scrollerObject);
}

/**
 * @param {!ScrollerObject} scrollerObject
 * @param {String=} layerName
 */
ScrollerEngine.prototype.removeObjectFromLayer = function(scrollerObject, layerName)
{
	var placeInArray;

	if(layerName == null)
	{
		for(var i in this._layers)
		{
			placeInArray = this._layers[i].objects.indexOf(scrollerObject);
			layerName = i;
			break;
		}
	}

	this._layers[layerName].container.removeChild(scrollerObject);
	
	if(placeInArray == null)
		placeInArray = this._layers[layerName].objects.indexOf(scrollerObject);

	if(placeInArray > -1)
		this._layers[layerName].objects.splice(placeInArray, 1);

	for(var i = 0; i < this._loopingRanges.length; i++)
	{
		if(layerName == this._loopingRanges[i].layer)
		{
			this._loopingRanges[i].objectRemoved(scrollerObject);
			break;
		}	
	}

	scrollerObject.dispose();	
}

/**
 * @param {ScrollerLoopingRange} loop
 * @param {String} layerName
 * @param {Number} originX
 * @param {Number} originY
 */
ScrollerEngine.prototype.addLoopingRangeToLayer = function(loop, layerName, originX, originY)
{
	loop.layer = layerName;
	var arr = loop.generate(this._viewBoundary.width, this._viewBoundary.height, originX, originY);
	this._loopingRanges.push(loop);

	var d = 'x';
	var e = 'width';
	var currentX = this._viewBoundary.x * this._layers[layerName].parallax.x;
	var currentY = originY;
	
	if(loop.scrollY)
	{
		d = 'y';
		e = 'height';
		currentX = originX;
		currentY = this._activeBoundary.y * this._layers[layerName].parallax.y;
	} 

	for(var i = 0; i < arr.length; i++)
	{
		arr[i].obj.areaRect = arr[i].areaRect;
		this.addObjectToLayer(arr[i].obj, layerName, currentX + (loop.scrollY ? arr[i].offset.x : 0), currentY + (loop.scrollX ? arr[i].offset.y : 0));

		if(loop.scrollX)
			currentX += arr[i].areaRect.x + arr[i].areaRect.width + arr[i].offset.x;
		else if(loop.scrollY)
			currentY += arr[i].areaRect.y + arr[i].areaRect.height + arr[i].offset.y;
	}	
}

/**
 * @param {!String} object1Type
 * @param {!String} object2Type
 */
ScrollerEngine.prototype.addCollisionDetector = function(object1Type, object2Type)
{
	this._collisions.push([object1Type, object2Type]);
}

/**
 */
ScrollerEngine.prototype.pause = function()
{
	for(var i in this._layers)
	{
		for(var j = 0; j < this._layers[i].objects.length; j++)
		{
			var obj = this._layers[i].objects[j];

			obj.pause();
		}
	}
}

/**
 */
ScrollerEngine.prototype.resume = function()
{
	for(var i in this._layers)
	{
		for(var j = 0; j < this._layers[i].objects.length; j++)
		{
			var obj = this._layers[i].objects[j];

			obj.resume();
		}
	}
}

/**
 * @param {String} layerName
 */
ScrollerEngine.prototype.getLayerContainer = function(layerName)
{
	return this._layers[layerName].container;
}

/**
 * @param {String} layerName
 */
ScrollerEngine.prototype.getLayerParallax = function(layerName)
{
	return this._layers[layerName].parallax;
}

/**
 * @param {String} layerName
 * @param {Function} orderFunction
 */
ScrollerEngine.prototype.orderLayer = function(layerName, orderFunction)
{
	this._layers[layerName].container.children.sort(orderFunction);
}



//===================================================
// PRIVATE METHODS
//===================================================

/**
 * @param {!ScrollerObject} obj
 * @param {!PIXI.Container} objCont
 * @param {!String} collidingType
 */
ScrollerEngine.prototype._checkForCollisions = function(obj1, obj1Cont, collidingType)
{
	for(var i in this._layers)
	{
		var obj2Cont = this._layers[i].container;

		for(var j = 0; j < this._layers[i].objects.length; j++)
		{
			if(this._layers[i].objects[j].type == collidingType)
			{
				var obj2 = this._layers[i].objects[j];

				var r1Left = obj1Cont.x + obj1.x + obj1.collisionRect.x; 
				var r2Left = obj2Cont.x + obj2.x + obj2.collisionRect.x; 
				
				var r1Right = r1Left + obj1.collisionRect.width; 
				var r2Right = r2Left + obj2.collisionRect.width;
				
				var r1Top = obj1Cont.y + obj1.y + obj1.collisionRect.y; 
				var r2Top = obj2Cont.y + obj2.y + obj2.collisionRect.y;
				
				var r1Bottom = r1Top + obj1.collisionRect.height; 
				var r2Bottom = r2Top + obj2.collisionRect.height;
				
				var collision = true;

				if (r1Bottom < r2Top) collision = false;
		        if (r1Top > r2Bottom) collision = false;
		
		        if (r1Right < r2Left) collision = false;
		        if (r1Left > r2Right) collision = false;

		        if(collision)
		        	this.signals.collisionFired.dispatch(obj1, obj2);
			}	
		}
	}
}


//===================================================
// EVENTS
//===================================================


//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(ScrollerEngine.prototype, "viewX", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return this._view.x;
	},
	/**
	 * @param {!Number} value
	 */
	set: function(value) {
		this._view.x = value;
		this._camera.update();
		return this._view.x;
	}
});

Object.defineProperty(ScrollerEngine.prototype, "viewY", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return this._view.y;
	},
	/**
	 * @param {!Number} value
	 */
	set: function(value) {
		this._view.y = value;
		this._camera.update();
		return this._view.y;
	}
});

Object.defineProperty(ScrollerEngine.prototype, "activeBoundary", {

	get: function() {
		return this._activeBoundary;
	},

	set: function(value) {
		this._activeBoundary = value;
		return this._activeBoundary;
	}
});

Object.defineProperty(ScrollerEngine.prototype, "viewBoundary", {

	get: function() {
		return this._viewBoundary;
	},

	set: function(value) {
		this._viewBoundary = value;
		return this._viewBoundary;
	}
});

Object.defineProperty(ScrollerEngine.prototype, "screenFocusPoint", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return this._screenFocusPoint;
	},
	/**
	 * @param {!Number} value
	 */
	set: function(value) {
		this._screenFocusPoint = value;
		return this._screenFocusPoint;
	}
});


//===================================================


},{"../Common":2,"./ScrollerObject":29}],28:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 * @param {!Array<Object>} objects - {base:<ScrollerObject>, args:<Array>, areaRect:PIXI.Rectangle, offset:PIXI.Point}
 * @param {Boolean} scrollX
 * @param {Boolean} scrollY
 */
function ScrollerLoopingRange(objects, scrollX, scrollY)
{
	/**
     * @type {Array<Object>}
     */
	this._objectsData = objects;

	/**
     * @type {Array<ScrollerObject>}
     */
	this._objects = null;

	/**
     * @type {Array<p3.ObjectPool>}
     */
	this._objectPools = null;

	/**
     * @type {Object}
     */
	this._objectsPlaced = -1;

	/**
     * @type {Boolean}
     */
	this._originX = 0;

	/**
     * @type {Boolean}
     */
	this._originY = 0;

	/**
     * @type {Boolean}
     */
	this._scrollX = scrollX;

	/**
     * @type {Boolean}
     */
	this._scrollY = scrollY;

	/**
     * @type {String}
     */
	this.layer = null;

	this.init();
}
module.exports = ScrollerLoopingRange;
ScrollerLoopingRange.prototype = Object.create(PIXI.Container.prototype);
ScrollerLoopingRange.prototype.constructor = ScrollerLoopingRange;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
ScrollerLoopingRange.prototype.init = function()
{
	this._objectPools = [];
	this._objects = [];
};

/**
 */
ScrollerLoopingRange.prototype.generate = function(viewWidth, viewHeight, originX, originY)
{
	if(this.scrollY)
		this._originX = originX;

	if(this.scrollX)
		this._originY = originY;

	var d = 'x';
	var e = 'width';
	var m = viewWidth;
	if(this._scrollY)
	{
		d = 'y';
		e = 'height';
		m = viewHeight;
	}	

	var total = 0;
	for(var i = 0; i < this._objectsData.length; i++)
	{
		total += this._objectsData[i].areaRect[d] + this._objectsData[i].areaRect[e] + this._objectsData[i].offset[d];
	}

	var objectAmounts = [];
	for(var i = 0; i < Math.ceil(viewWidth / total); i++)
	{	
		for(var j = 0; j < this._objectsData.length; j++)
		{
			if(objectAmounts[j] == undefined)
				objectAmounts[j] = 0;
			objectAmounts[j]++;	
		}
	}

	for(var i = 0; i < this._objectsData.length; i++)
	{
		this._objectPools[i] = new p3.ObjectPool(this._objectsData[i].base, objectAmounts[i], this._objectsData[i].args);
	}

	var returnArray = [];

	for(var i = 0; i < Math.ceil(viewWidth/total); i++)
	{	
		for(var j = 0; j < this._objectsData.length; j++)
		{
			var obj = this._objectPools[j].create();

			if(obj == null)
			{
				this._objectPools[j].expand(2);
				obj = this._objectPools[j].create();
			}
			this._objects.push(obj);

			returnArray.push({obj:obj, areaRect:this._objectsData[j].areaRect, offset:this._objectsData[j].offset});
			this._objectsPlaced++;
			obj.loopingRangeNumber = this._objectsPlaced;
		}
	}
	
	return returnArray;
}

/**
 */
ScrollerLoopingRange.prototype.update = function(focusPoint, viewBoundary, layerContainer)
{
	//var previousObjectNumber = Math.abs((this._objects[0].loopingRangeNumber-1) % this._objectsData.length);
	var nextObjectNumber = (this._objectsPlaced+1) % this._objectsData.length;
	//var previousObjectData = this._objectsData[previousObjectNumber];
	var nextObjectData = this._objectsData[nextObjectNumber];

	//var firstObject = this._objects[0];
	var lastObject = this._objects[this._objects.length-1];

	var d = 'x';
	var e = 'width';
	var o = 'y';

	if(this._scrollY)
	{
		d = 'y';
		e = 'height';
		o = 'x';
	}

	var returnArray = [];

	/*
	if(layerContainer[d] + firstObject[d] + firstObject.areaRect[d] + previousObjectData.offset[d] 
		> focusPoint[d] + viewBoundary[d])
	{
		var obj = this._objectPools[previousObjectNumber].create();

		if(obj == null)
		{
			this._objectPools[j].expand(2);
			obj = this._objectPools[j].create();
		}

		var offset = new PIXI.Point();
		offset[d] = firstObject[d] - (previousObjectData.areaRect[e] + previousObjectData.areaRect[d]) + previousObjectData.offset[d];
		offset[o] = previousObjectData[o];
		
		returnArray.push({obj:obj, areaRect:previousObjectData.areaRect, offset:offset});
		obj.loopingRangeNumber = this._objects[0].loopingRangeNumber-1;

		this._objects.splice(0, 0, obj);
	}*/

	var newPlacement = lastObject[d] + lastObject.areaRect[d] + lastObject.areaRect[e] + nextObjectData.offset[d]; //+ Math.abs(nextObjectData.areaRect[d]) + nextObjectData.offset[d];

	if(layerContainer[d] + newPlacement < focusPoint[d] + viewBoundary[d] + viewBoundary[e])
	{
		var obj = this._objectPools[nextObjectNumber].create();

		if(obj == null)
		{
			this._objectPools[nextObjectNumber].expand(2);
			obj = this._objectPools[nextObjectNumber].create();
		}

		var offset = new PIXI.Point();
		offset[d] = newPlacement;
		offset[o] = nextObjectData.offset[o] + this['_origin' + [o.toUpperCase()]];

		returnArray.push({obj:obj, areaRect:nextObjectData.areaRect, offset:offset});
		this._objectsPlaced++;
		obj.loopingRangeNumber = this._objectsPlaced;

		this._objects.push(obj);
	}

	return returnArray;
				   
};


//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

/**
 */
ScrollerLoopingRange.prototype.objectRemoved = function(obj)
{
	var index = this._objects.indexOf(obj);
	if(index >= 0)
	{
		this._objectPools[obj.loopingRangeNumber % this._objectsData.length].free(obj);	
		this._objects.splice(index, 1);
	}
};

//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(ScrollerLoopingRange.prototype, "scrollX", {

	get: function() {
		return this._scrollX;
	}
});


//===================================================


},{"../Common":2}],29:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 * @param {PIXI.Texture} texture
 * @param {String} type
 * @param {Boolean} removeIfOutsideBoundary
 */
function ScrollerObject(type, removeIfOutsideBoundary)
{
    /**
     * @type {p3.AssetManager}
     */
    this._assetManager = p3.AssetManager.instance;

	/**
     * @type {signals.Signal}
     */
    this.signals = {};
    this.signals.disposed = new signals.Signal();

	/**
     * @type {String}
     */
	this._type = type;

	/**
     * @type {PIXI.Rectangle}
     */
	this.collisionRect = null;

	/**
     * @type {PIXI.Graphic}
     */
	this._collisionRectLines = null;
	
	/**
     * @type {PIXI.Rectangle}
     */
	this.areaRect = null;

	/**
     * @type {Number}
     */
	this.loopingRangeNumber = null;

	/**
     * @type {PIXI.Rectangle}
     */
	this.removeIfOutsideBoundary = removeIfOutsideBoundary == null ? true : removeIfOutsideBoundary;

	/**
     * @type {Number}
     */
    this.xSpeed = 0;

	/**
     * @type {Number}
     */
    this.ySpeed = 0;

	/**
     * @type {Number}
     */
	this.persistentX = null;

	/**
     * @type {Number}
     */
	this.persistentY = null;

	/**
     * @type {Number}
     */
	this.persistentRectangle = null;

	/**
     * @type {Number}
     */
	this.persistentRectangleExitEase = 1;

    /**
     * @type {Bollean}
     */
    this.removeMe = false;

	PIXI.Container.call(this);

	this.init();
}
module.exports = ScrollerObject;
ScrollerObject.prototype = Object.create(PIXI.Container.prototype);
ScrollerObject.prototype.constructor = ScrollerObject;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
ScrollerObject.prototype.init = function()
{

};

/**
 */
ScrollerObject.prototype.update = function()
{
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

/**
 */
ScrollerObject.prototype.reset = function()
{
	this.x = 0;
	this.y = 0;
    this.removeMe = false;
	
	if(this._collisionRectLines != null)
	{
		this.removeChild(this._collisionRectLines);
	}
};

/**
 */
ScrollerObject.prototype.dispose = function()
{
	this.signals.disposed.dispatch(this);
}

/**
 */
ScrollerObject.prototype.pause = function()
{
    
}

/**
 */
ScrollerObject.prototype.resume = function()
{
    
}

/**
 */
ScrollerObject.prototype.drawCollisionRect = function()
{
    this._collisionRectLines = new PIXI.Graphics();
    this.addChild(this._collisionRectLines);
    this._collisionRectLines.lineStyle(1, 0xF7111D);
    this._collisionRectLines.drawRect(this.collisionRect.x, this.collisionRect.y, this.collisionRect.width, this.collisionRect.height);
}


//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

/**
 * @type {!String} side (left, right, upper or left)
 */
ScrollerObject.prototype.onExitPersistentRectangle = function(side)
{
	
};

//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(ScrollerObject.prototype, "type", {

	get: function() {
		return this._type;
	}
});



//===================================================


},{"../Common":2}],30:[function(require,module,exports){
var Common          = require("../Common");
var ScrollerObject	= require("./ScrollerObject");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 * @param {!Array<Object>} base:*, args:Array
 * @param {!Array<*>} args
 */
function ScrollerObjectGenerator(pools)
{
	/**
     * @type {signals.Signal}
     */
    this.signals = {};
	this.signals.generateObjects = new signals.Signal();
	this.signals.objectDisposed = new signals.Signal();

	/**
     * @type {Array<Object>}
     */
	this._poolData = pools;

	/**
     * @type {Object}
     */
	this._pools = null;

	/**
     * @type {Object}
     */
    this._patterns = null;

	/**
     * @type {Number}
     */	
	this._currentDistance = 0;

	/**
     * @type {Number}
     */	
	this._targetDistance = null;

	/**
     * @type {Number}
     */
	this._minFrequency = null;

	/**
     * @type {Number}
     */
	this._maxFrequency = null;

	PIXI.Container.call(this);

	this.init();
}
module.exports = ScrollerObjectGenerator;
ScrollerObjectGenerator.prototype = Object.create(PIXI.Container.prototype);
ScrollerObjectGenerator.prototype.constructor = ScrollerObjectGenerator;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
ScrollerObjectGenerator.prototype.init = function()
{
	this._pools = {};	
	for(var i = 0; i < this._poolData.length; i++)
	{
		this._pools[this._poolData[i].id] = new p3.ObjectPool(this._poolData[i].base, 2, this._poolData[i].args);
	}
	this._patterns = {};
};

/**
 */
ScrollerObjectGenerator.prototype.update = function(distance)
{
	if(this._targetDistance != null)
	{	
		this._currentDistance += distance;

		if(this._currentDistance >= this._targetDistance)
		{
			this.generate();
			this.setRandomFrequency();
		}
	}
};

/**
 * @param {Array<Object>} objs - {x, y, poolId}
 * @param {String} id
 */
ScrollerObjectGenerator.prototype.addPattern = function(objs, patternId)
{
	if(this._patterns[patternId] == undefined)
		this._patterns[patternId] = objs;
};

/**
 * @param {String} id
 */
ScrollerObjectGenerator.prototype.removePattern = function(patternId)
{
	delete this._patterns[patternId];
};


/**
 * @param {!Number} min
 * @param {!Number} max
 * @param {!Boolean} set
 */
ScrollerObjectGenerator.prototype.setFrequencies = function(min, max, set)
{
	this._minFrequency = min;
	this._maxFrequency = max;

	if(set == undefined)
		set = true;

	if(set)
		this.setRandomFrequency();
};

/**
 */
ScrollerObjectGenerator.prototype.setRandomFrequency = function()
{
	this._currentDistance = 0;
	this._targetDistance = this._minFrequency + (Math.random() * (this._maxFrequency - this._minFrequency));
}

/**
 */
ScrollerObjectGenerator.prototype.setSpecificFrequency = function(freq)
{
	this._targetDistance = freq;
};

/**
 */
ScrollerObjectGenerator.prototype.generate = function()
{
	var patterns = [];

	for(var i in this._patterns)
	{
		patterns.push(i);
	}

	var chosenPattern = null;

	if(patterns.length == 0)
	{
		console.log('No pattern set!');
		return;
	}
	else
	{
		chosenPattern = this._patterns[patterns[Math.floor(Math.random() * patterns.length)]];
	}

	var returnArray = [];

	for(var i = 0; i < chosenPattern.length; i++)
	{
		var pool = this._pools[chosenPattern[i].poolId];
		var obj = pool.create();

		if(obj == null)
		{
			pool.expand(2);
			obj = pool.create();
		}
		obj.signals.disposed.add(this.onObjectDisposed, this);
		returnArray.push({obj:obj, offset:{x:chosenPattern[i].x, y:chosenPattern[i].y}});
	}

	this.signals.generateObjects.dispatch(returnArray);
};


//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

ScrollerObjectGenerator.prototype.onObjectDisposed = function(obj)
{
    obj.signals.disposed.remove(this.onObjectDisposed, this);
    this.signals.objectDisposed.dispatch(obj);

    for(var i in this._pools)
    {
    	if(this._pools[i]._used.indexOf(obj) > -1)
    	{	
    		this._pools[i].free(obj);
    	}
	}
};

//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================


},{"../Common":2,"./ScrollerObject":29}],31:[function(require,module,exports){
var Common          = require("../Common");
var ScrollerObject	= require("./ScrollerObject");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 * @param {!String} type
 * @param {!Boolean} removeIfOutsideBoundary
 * @param {!PIXI.Texture} texture
 * @param {PIXI.Point=} anchor
 */
function ScrollerObjectImage(type, removeIfOutsideBoundary, texture, anchor)
{
	this._texture = texture;
	this._anchor = anchor || new PIXI.Point(0, 0);
	this._image = null;

	ScrollerObject.call(this, type, removeIfOutsideBoundary);

	this.create();
	this.init();
}
module.exports = ScrollerObjectImage;
ScrollerObjectImage.prototype = Object.create(ScrollerObject.prototype);
ScrollerObjectImage.prototype.constructor = ScrollerObjectImage;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
ScrollerObjectImage.prototype.create = function()
{
	this._image = new PIXI.Sprite(this._texture);
	this._image.anchor = this._anchor;
	this.addChild(this._image);
};



/**
 */
ScrollerObjectImage.prototype.init = function()
{
	
};

/**
 */
ScrollerObjectImage.prototype.reset = function()
{
	ScrollerObject.prototype.reset.call(this);
};


//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================


//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================


},{"../Common":2,"./ScrollerObject":29}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9kZXZlbG9wbWVudC9BcHBsaWNhdGlvbi5qcyIsIi4uL2RldmVsb3BtZW50L0NvbW1vbi5qcyIsIi4uL2RldmVsb3BtZW50L01haW4uanMiLCIuLi9kZXZlbG9wbWVudC9TYXZlZERhdGEuanMiLCIuLi9kZXZlbG9wbWVudC9nYW1lL0F2YXRhci5qcyIsIi4uL2RldmVsb3BtZW50L2dhbWUvQm9vc3RCYXIuanMiLCIuLi9kZXZlbG9wbWVudC9nYW1lL0Nsb3VkLmpzIiwiLi4vZGV2ZWxvcG1lbnQvZ2FtZS9FbmVteS5qcyIsIi4uL2RldmVsb3BtZW50L2dhbWUvUGlja3VwLmpzIiwiLi4vZGV2ZWxvcG1lbnQvZ2FtZS9QaWNrdXBQYXJ0aWNsZUhvbGRlci5qcyIsIi4uL2RldmVsb3BtZW50L2dhbWUvUmFpbmJvd1RhaWwuanMiLCIuLi9kZXZlbG9wbWVudC9nYW1lL1Njb3JlQ291bnRlci5qcyIsIi4uL2RldmVsb3BtZW50L2dlbmVyYWwvTmV4dEJ1dHRvbi5qcyIsIi4uL2RldmVsb3BtZW50L2dlbmVyYWwvU291bmRTRlguanMiLCIuLi9kZXZlbG9wbWVudC9saWIvTXV0ZUJ1dHRvbi5qcyIsIi4uL2RldmVsb3BtZW50L2xpYi9TY2VuZS5qcyIsIi4uL2RldmVsb3BtZW50L2xpYi9TY2VuZU1hbmFnZXIuanMiLCIuLi9kZXZlbG9wbWVudC9saWIvVHJhbnNpdGlvbi5qcyIsIi4uL2RldmVsb3BtZW50L292ZXJsYXlzL0NOTW9yZUdhbWVzU2NlbmUuanMiLCIuLi9kZXZlbG9wbWVudC9vdmVybGF5cy9HYW1lT3Zlck92ZXJsYXkuanMiLCIuLi9kZXZlbG9wbWVudC9vdmVybGF5cy9QYXVzZU92ZXJsYXkuanMiLCIuLi9kZXZlbG9wbWVudC9zY3JlZW5zL0dhbWVTY3JlZW4uanMiLCIuLi9kZXZlbG9wbWVudC9zY3JlZW5zL0ludHJvU2NyZWVuLmpzIiwiLi4vZGV2ZWxvcG1lbnQvc2NyZWVucy9QcmVsb2FkZXIuanMiLCIuLi9kZXZlbG9wbWVudC9zY3JlZW5zL1NpbXBsZVNjcmVlbi5qcyIsIi4uL2RldmVsb3BtZW50L3NjcmVlbnMvU3BsYXNoU2NyZWVuLmpzIiwiLi4vZGV2ZWxvcG1lbnQvc2Nyb2xsZXIvU2Nyb2xsZXJFbmdpbmUuanMiLCIuLi9kZXZlbG9wbWVudC9zY3JvbGxlci9TY3JvbGxlckxvb3BpbmdSYW5nZS5qcyIsIi4uL2RldmVsb3BtZW50L3Njcm9sbGVyL1Njcm9sbGVyT2JqZWN0LmpzIiwiLi4vZGV2ZWxvcG1lbnQvc2Nyb2xsZXIvU2Nyb2xsZXJPYmplY3RHZW5lcmF0b3IuanMiLCIuLi9kZXZlbG9wbWVudC9zY3JvbGxlci9TY3JvbGxlck9iamVjdEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDelBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBHYW1lU2NyZWVuICAgICAgPSByZXF1aXJlKFwiLi9zY3JlZW5zL0dhbWVTY3JlZW5cIik7XG52YXIgU3BsYXNoU2NyZWVuICAgID0gcmVxdWlyZShcIi4vc2NyZWVucy9TcGxhc2hTY3JlZW5cIik7XG52YXIgSW50cm9TY3JlZW4gICAgID0gcmVxdWlyZShcIi4vc2NyZWVucy9JbnRyb1NjcmVlblwiKTtcbnZhciBQYXVzZU92ZXJsYXkgICAgPSByZXF1aXJlKFwiLi9vdmVybGF5cy9QYXVzZU92ZXJsYXlcIik7XG52YXIgR2FtZU92ZXJPdmVybGF5ID0gcmVxdWlyZShcIi4vb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5XCIpO1xudmFyIENOTW9yZUdhbWVzU2NlbmUgPSByZXF1aXJlKFwiLi9vdmVybGF5cy9DTk1vcmVHYW1lc1NjZW5lXCIpO1xuXG5cbnZhciBUcmFuc2l0aW9uICAgICAgPSByZXF1aXJlKFwiLi9saWIvVHJhbnNpdGlvblwiKTtcbnZhciBTYXZlZERhdGEgICAgICAgPSByZXF1aXJlKFwiLi9TYXZlZERhdGFcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gQXBwbGljYXRpb24oKVxue1xuXHQvKipcblx0ICogQHR5cGUge0Fzc2V0TWFuYWdlcn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtTY3JlZW5NYW5hZ2VyfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5fc2NyZWVuTWFuYWdlciA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtwMy5TY3JlZW59XG5cdCAqL1xuXHR0aGlzLl9jdXJyZW50U2NyZWVuID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge3AzLlRyYW5zaXRpb259XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbn1cbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb247XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKFwiQVBQTElDQVRJT04gSU5JVElBTElaRURcIik7XG5cblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyID0gQ29tbW9uLnNjZW5lTWFuYWdlcjtcblxuXHRUd2Vlbk1heC5kZWZhdWx0T3ZlcndyaXRlID0gXCJub25lXCI7XG5cblx0Ly9UZXh0dXJlIGdlbmVyYXRpb246IGJsYWNrIHNxdWFyZVxuXHRpZihDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10gPT0gdW5kZWZpbmVkKVxuXHR7XG5cdFx0dmFyIGdyID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblx0XHRnci5iZWdpbkZpbGwoMHgwMDAwMDApO1xuXHRcdGdyLmRyYXdSZWN0KDAsIDAsIDEsIDEpO1xuXHRcdENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSA9IGdyLmdlbmVyYXRlVGV4dHVyZShDb21tb24ucmVuZGVyZXIsIDEuMCwgUElYSS5TQ0FMRV9NT0RFUy5MSU5FQVIpO1xuXHR9XG5cblx0Q29tbW9uLnNhdmVkRGF0YSA9IG5ldyBTYXZlZERhdGEoKTtcblx0Q29tbW9uLnNhdmVkRGF0YS5pbml0KCk7XG5cblx0dGhpcy5zaG93U3BsYXNoKCk7XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd1NwbGFzaCA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHNjcmVlbiA9IG5ldyBTcGxhc2hTY3JlZW4oKTtcblx0dGhpcy5fc2NyZWVuTWFuYWdlci5hZGQoc2NyZWVuLCB0aGlzLl9nZXRUcmFuc2l0aW9uKCkpO1xuXG5cdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oKVxuXHR7XG5cblx0fSwgdGhpcyk7XG5cdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uYWRkT25jZShmdW5jdGlvbigpXG5cdHtcblx0XHR0aGlzLnNob3dJbnRybygpO1xuXHR9LCB0aGlzKTtcblx0c2NyZWVuLnNpZ25hbHMubW9yZUdhbWVzLmFkZChmdW5jdGlvbigpXG5cdHtcblx0XHR0aGlzLnNob3dDTk1vcmVHYW1lc1NjZW5lKCk7XG5cdH0sIHRoaXMpO1xuXG5cdHRoaXMuX2N1cnJlbnRTY3JlZW4gPSBzY3JlZW47XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd0ludHJvID0gZnVuY3Rpb24oKVxue1xuXHR2YXIgc2NyZWVuID0gbmV3IEludHJvU2NyZWVuKCk7XG5cdHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHNjcmVlbiwgdGhpcy5fZ2V0VHJhbnNpdGlvbigpKTtcblxuXHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKClcblx0e1xuXG5cdH0sIHRoaXMpO1xuXHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oKVxuXHR7XG5cdFx0dGhpcy5zaG93R2FtZSh0cnVlKTtcblx0fSwgdGhpcyk7XG5cblx0dGhpcy5fY3VycmVudFNjcmVlbiA9IHNjcmVlbjtcblxuXHRyZXR1cm4gc2NyZWVuO1xufTtcblxuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd0dhbWUgPSBmdW5jdGlvbihzaG93UGF1c2UpXG57XG5cdHZhciBzY3JlZW4gPSBuZXcgR2FtZVNjcmVlbigpO1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyLmFkZChzY3JlZW4sIHRoaXMuX2dldFRyYW5zaXRpb24oKSk7XG5cblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uYWRkT25jZShmdW5jdGlvbigpe1xuXG5cdH0sIHRoaXMpO1xuXHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oc2NvcmUsIGhpZ2hzY29yZSl7XG5cdFx0dGhpcy5zaG93R2FtZU92ZXIoc2NvcmUsIGhpZ2hzY29yZSk7XG5cdH0sIHRoaXMpO1xuXHRzY3JlZW4uc2lnbmFscy5wYXVzZVByZXNzZWQuYWRkKGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5zaG93UGF1c2UoZmFsc2UpO1xuXHR9LCB0aGlzKTtcblxuXHR0aGlzLl9jdXJyZW50U2NyZWVuID0gc2NyZWVuO1xuXG5cdGlmKHNob3dQYXVzZSAmJiAhQ29tbW9uLnNhdmVkRGF0YS5oYXNWaWV3ZWRJbnN0cnVjdGlvbnMpXG5cdHtcblx0XHR0aGlzLl9jdXJyZW50U2NyZWVuLl9zaG93UGF1c2UgPSB0cnVlO1xuXHRcdENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLnNob3dQYXVzZSh0cnVlKTtcblx0XHRcdENvbW1vbi5zYXZlZERhdGEuaGFzVmlld2VkSW5zdHJ1Y3Rpb25zID0gdHJ1ZTtcblx0XHRcdENvbW1vbi5zYXZlZERhdGEuc2F2ZSgpO1xuXHRcdH0sIDAsIHRoaXMpO1xuXHR9XG5cblx0cmV0dXJuIHNjcmVlbjtcbn07XG5cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dQYXVzZSA9IGZ1bmN0aW9uKHNob3dIZWxwKVxue1xuXHR2YXIgdCA9IG5ldyBUcmFuc2l0aW9uKCk7XG5cdHQucmVwbGFjZSA9IGZhbHNlO1xuXHR0LnB1c2ggPSB0cnVlO1xuXG5cdHRoaXMuX2N1cnJlbnRTY3JlZW4uaGlkZUdVSShmdW5jdGlvbigpXG5cdHtcblx0XHR2YXIgc2NyZWVuID0gbmV3IFBhdXNlT3ZlcmxheSgpO1xuXHRcdHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHNjcmVlbiwgdCk7XG5cblx0XHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oaWQpXG5cdFx0e1xuXHRcdFx0dGhpcy5fc2NyZWVuTWFuYWdlci5yZW1vdmUoKTtcblx0XHRcdHRoaXMuX2N1cnJlbnRTY3JlZW4uc2hvd0dVSSgpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oaWQpXG5cdFx0e1xuXHRcdFx0dGhpcy5zaG93U3BsYXNoKCk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHRpZihzaG93SGVscClcblx0XHRcdHAzLlRpbWVzdGVwLnF1ZXVlQ2FsbChzY3JlZW4uc2V0SW50cm9IZWxwTW9kZSwgW10sIHNjcmVlbik7XG5cblx0fSwgdGhpcywgdHJ1ZSk7XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd0dhbWVPdmVyID0gZnVuY3Rpb24oc2NvcmUsIGhpZ2hzY29yZSlcbntcblx0dmFyIHQgPSBuZXcgVHJhbnNpdGlvbigpO1xuXHR0LnJlcGxhY2UgPSBmYWxzZTtcblx0dC5wdXNoID0gdHJ1ZTtcblxuXHR0aGlzLl9jdXJyZW50U2NyZWVuLmhpZGVHVUkoZnVuY3Rpb24oKVxuXHR7XG5cdFx0dmFyIHNjcmVlbiA9IG5ldyBHYW1lT3Zlck92ZXJsYXkoc2NvcmUsIGhpZ2hzY29yZSk7XG5cdFx0dGhpcy5fc2NyZWVuTWFuYWdlci5hZGQoc2NyZWVuLCB0KTtcblxuXHRcdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uYWRkT25jZShmdW5jdGlvbihpZClcblx0XHR7XG5cdFx0XHR0aGlzLnNob3dTcGxhc2goKTtcblx0XHR9LCB0aGlzKTtcblx0XHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKGlkKVxuXHRcdHtcblx0XHRcdHNjcmVlbi5hbmltYXRlT3V0KHRoaXMuc2hvd0dhbWUsIHRoaXMpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdHNjcmVlbi5zaWduYWxzLm1vcmVHYW1lcy5hZGQoZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHRoaXMuc2hvd0NOTW9yZUdhbWVzU2NlbmUoKTtcblx0XHR9LCB0aGlzKTtcblx0fSwgdGhpcyk7XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd0NOTW9yZUdhbWVzU2NlbmUgPSBmdW5jdGlvbigpXG57XG4gICAvLyB2YXIgc2NlbmUgPSBuZXcgQ05Nb3JlR2FtZXNTY2VuZSgpO1xuICAgLy8gc2NlbmUuc2lnbmFscy5uZXh0LmFkZChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQ29tbW9uLnNjZW5lLnJlbW92ZSgpO1xuICAgLy8gfSk7XG5cbiAgIC8vIHZhciB0cmFuc2l0aW9uID0gbmV3IHAzLlRyYW5zaXRpb24oKTtcbiAgIC8vIHRyYW5zaXRpb24ucHVzaCA9IHRydWU7XG4gICAvLyB0cmFuc2l0aW9uLnJlcGxhY2UgPSBmYWxzZTtcbiAgIC8vIENvbW1vbi5zY2VuZS5hZGQoc2NlbmUsIHRyYW5zaXRpb24pO1xuICAgLy8gcmV0dXJuIHNjZW5lO1xuXG5cdHZhciB0ID0gbmV3IFRyYW5zaXRpb24oKTtcblx0dC5yZXBsYWNlID0gZmFsc2U7XG5cdHQucHVzaCA9IHRydWU7XG5cblx0dmFyIHNjcmVlbiA9IG5ldyBDTk1vcmVHYW1lc1NjZW5lKCk7XG5cdHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHNjcmVlbiwgdCk7XG5cblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKGlkKVxuXHR7XG5cdFx0dGhpcy5fc2NyZWVuTWFuYWdlci5yZW1vdmUoKTtcblx0fSwgdGhpcyk7XG59O1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuQXBwbGljYXRpb24ucHJvdG90eXBlLl9nZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24oKVxue1xuXHR2YXIgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKCk7XG5cdHRyYW5zaXRpb24ucmVwbGFjZSA9IHRydWU7XG5cdHRyYW5zaXRpb24ucHVzaCA9IGZhbHNlO1xuXHRyZXR1cm4gdHJhbnNpdGlvbjtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogIENvbW1vblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAzMC8wNC8yMDE1LlxuICpcbiAqL1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIENvbW1vbigpIHt9XG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbjtcblxuXG4vKiAtLS0tLS1HRU5FUklDLS0tLS0tICovXG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBjb25zdFxuICovXG5Db21tb24uU1RBR0VfV0lEVEggPSAxOTAwLjA7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBjb25zdFxuICovXG5Db21tb24uU1RBR0VfSEVJR0hUID0gNzY4LjA7XG5cbi8qKlxuICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uc3RhZ2UgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtQSVhJLkNhbnZhc1JlbmRlcmVyfFBJWEkuV2ViR0xSZW5kZXJlcn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnJlbmRlcmVyID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7cDMuVGltZXN0ZXB9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi50aW1lc3RlcCA9IG51bGw7XG5cbi8qKlxuICogQHR5cGUge3AzLkFuaW1hdG9yfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uYW5pbWF0b3IgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtLZXlib2FyZH1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLmtleWJvYXJkID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7UElYSS5Qb2ludH1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnRvdWNoID0gbmV3IFBJWEkuUG9pbnQoMC4wLCAwLjApO1xuXG4vKipcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5wYXVzZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLmlzV2ViR0wgPSBmYWxzZTtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5ERUJVR19QQUlOVF9NT0RFID0gMDtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uZnJhbWVDb3VudCA9IDA7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBjb25zdFxuICovXG5Db21tb24uRlBTID0gNjA7XG5cbi8qKlxuICogQHR5cGUge1NhdmVkRGF0YX1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnNjZW5lTWFuYWdlciA9IG51bGw7XG5cbi8qKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzID0ge307XG5cbi8qKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLkNPVU5UUllfQ09ERSA9ICdlbic7XG5cbi8qKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLmFuaW1hdGlvbkRhdGEgPSB7fTtcblxuLyoqXG4gKiBAdHlwZSB7U2F2ZWREYXRhfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uc2F2ZWREYXRhID0gbnVsbDtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqICBNYWluXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDI3LzA0LzIwMTUuXG4gKlxuICovXG5cbnZhciBBcHBsaWNhdGlvbiAgID0gcmVxdWlyZShcIi4vQXBwbGljYXRpb25cIik7XG52YXIgQ29tbW9uICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBQcmVsb2FkZXIgICAgID0gcmVxdWlyZShcIi4vc2NyZWVucy9QcmVsb2FkZXJcIik7XG52YXIgU2NlbmVNYW5hZ2VyICA9IHJlcXVpcmUoXCIuL2xpYi9TY2VuZU1hbmFnZXJcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAcGFyYW0geyFOdW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0geyFOdW1iZXJ9IGhlaWdodFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1haW4od2lkdGgsIGhlaWdodClcbntcblx0LyoqXG5cdCAqIEB0eXBlIHshTnVtYmVyfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5fd2lkdGggID0gd2lkdGg7XG5cdHRoaXMuX2hlaWdodCA9IGhlaWdodDtcblxuXHQvKipcblx0ICogQHR5cGUge3AzLkFzc2V0TWFuYWdlcn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtwMy5TY3JlZW5NYW5hZ2VyfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5fc2NyZWVuTWFuYWdlciA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQcmVsb2FkZXJ9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLl9wcmVsb2FkZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QXBwbGljYXRpb259XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLl9nYW1lID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuX3Jlc29sdXRpb24gPSAxLjA7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLl9zY2FsZSAgICAgPSBcImhkL1wiO1xuXHR0aGlzLl9yZW5kZXJGUFMgID0gNjAuMDtcblx0dGhpcy5fZnJhbWVDb3VudCA9IDA7XG5cbn1cbndpbmRvdy5NYWluID0gTWFpbjtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuTWFpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcbiAgXHR0aGlzLl9hc3NldE1hbmFnZXIgID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcigpO1xuXG5cdENvbW1vbi5DT1VOVFJZX0NPREUgPSB3aW5kb3cub2cubGFuZ3VhZ2U7XG5cblx0dmFyIGVsZW1lbnRJZCAgID0gXCJvZy1nYW1lLWhvbGRlclwiO1xuXHR2YXIgcGFyYW1zICAgICAgPSBuZXcgcDMuVmlld1BhcmFtcygpO1xuXHRwYXJhbXMud2lkdGggICAgPSB0aGlzLl93aWR0aDtcblx0cGFyYW1zLmhlaWdodCAgID0gdGhpcy5faGVpZ2h0O1xuXHRwYXJhbXMuaG9sZGVySWQgPSBlbGVtZW50SWQ7XG5cdHBhcmFtcy5yb3RhdGVJbWFnZVVybCAgID0gXCJhc3NldHMvaW1hZ2VzL3N5c3RlbS9cIiArIENvbW1vbi5DT1VOVFJZX0NPREUgKyBcIi9yb3RhdGVfZGV2aWNlLmpwZ1wiO1xuXHRwYXJhbXMucm90YXRlSW1hZ2VDb2xvciA9IFwiIzAwMDAwMFwiO1xuXG5cdFBJWEkuUkVUSU5BX1BSRUZJWCA9IC9cXF8oPz1bXl9dKiQpKC4rKXgvO1xuXG5cdHAzLlRyYWNraW5nLkRFQlVHID0gdHJ1ZTtcblx0Q29tbW9uLnRyYWNraW5nID0gbmV3IHAzLlRyYWNraW5nKCk7XG5cdENvbW1vbi50cmFja2luZy5pbml0KG5ldyBwMy5UcmFja2luZ01vZHVsZUVjaG8od2luZG93LnN0YXRzKSk7XG5cblx0cDMuRGV2aWNlLmluaXQod2luZG93W1wiYm93c2VyXCJdKTtcblxuXHRUd2Vlbk1heC5kZWZhdWx0T3ZlcndyaXRlID0gXCJub25lXCI7XG5cdFR3ZWVuTWF4LnRpY2tlci5mcHMoQ29tbW9uLkZQUyk7XG5cblx0dmFyIGNhbnZhcyA9IG5ldyBwMy5WaWV3KHBhcmFtcyk7XG5cdGNhbnZhcy5zaWduYWxzLnJlYWR5LmFkZE9uY2UoZnVuY3Rpb24oY2FudmFzKVxuXHR7XG5cdFx0dmFyIGlzS2luZGxlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvS2luZGxlfFNpbGt8S0ZBLykgIT09IG51bGw7XG5cdFx0dmFyIG9wdGlvbnMgPSB7fTtcblx0XHRvcHRpb25zLnZpZXcgPSBjYW52YXM7XG5cdFx0b3B0aW9ucy50cmFuc3BhcmVudCA9IGlzS2luZGxlO1xuXHRcdG9wdGlvbnMuYW50aWFsaWFzID0gZmFsc2U7XG5cdFx0b3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXIgPSBmYWxzZTtcblx0XHRvcHRpb25zLnJlc29sdXRpb24gPSB0aGlzLl9yZXNvbHV0aW9uO1xuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5zY2FsZUZhY3RvciA9IHRoaXMuX3Jlc29sdXRpb247XG5cblx0XHR2YXIgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0XHRDb21tb24uc3RhZ2UgPSBzdGFnZTtcblxuXHRcdGlmKGlzTGVub3ZvKCkpXG5cdFx0XHR2YXIgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcih0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBvcHRpb25zKTtcblx0XHRlbHNlXG5cdFx0XHR2YXIgcmVuZGVyZXIgPSBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcih0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBvcHRpb25zKTtcblx0XHRDb21tb24ucmVuZGVyZXIgPSByZW5kZXJlcjtcblx0XHQvLyBQSVhJLlNDQUxFX01PREVTLkRFRkFVTFQgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1Q7XG5cblx0XHR0aGlzLl9zY3JlZW5NYW5hZ2VyLmluaXQoc3RhZ2UsIHJlbmRlcmVyKTtcblx0XHRDb21tb24uc2NlbmVNYW5hZ2VyID0gdGhpcy5fc2NyZWVuTWFuYWdlcjtcblxuXHRcdENvbW1vbi5pc1dlYkdMID0gKHJlbmRlcmVyIGluc3RhbmNlb2YgUElYSS5XZWJHTFJlbmRlcmVyKTtcblx0XHRDb21tb24uREVCVUdfUEFJTlRfTU9ERSA9IHAzLlV0aWxzLmdldFVSTFBhcmFtZXRlcihcInBhaW50XCIsIDApO1xuXG5cdFx0dmFyIHRpbWVzdGVwID0gbmV3IHAzLlRpbWVzdGVwKCk7XG5cdFx0dGltZXN0ZXAuaW5pdCh0aGlzLnVwZGF0ZSwgdGhpcy5yZW5kZXIsIHRoaXMpO1xuXHRcdENvbW1vbi50aW1lc3RlcCA9IHRpbWVzdGVwO1xuXG5cdFx0Q29tbW9uLmFuaW1hdG9yID0gbmV3IHAzLkFuaW1hdG9yKCk7XG5cdFx0Q29tbW9uLmFuaW1hdG9yLmluaXQoKTtcblxuXHRcdHRoaXMubG9hZFByZWxvYWRlcigpO1xuXG5cdH0sIHRoaXMpO1xuXHRjYW52YXMuc2lnbmFscy5yZXNpemUuYWRkKHRoaXMub25DYW52YXNSZXNpemUsIHRoaXMpO1xuXG5cdHZhciBoaWRkZW47XG5cdFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50LmhpZGRlbiA/IChoaWRkZW4gPSBcImhpZGRlblwiLFxuXHRcdHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiKSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiA/IChoaWRkZW4gPSBcIm1vekhpZGRlblwiLFxuXHRcdHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwibW96dmlzaWJpbGl0eWNoYW5nZVwiKSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuID8gKGhpZGRlbiA9IFwibXNIaWRkZW5cIixcblx0XHR0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSBcIm1zdmlzaWJpbGl0eWNoYW5nZVwiKSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAmJiAoaGlkZGVuID0gXCJ3ZWJraXRIaWRkZW5cIixcblx0XHR0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSBcIndlYmtpdHZpc2liaWxpdHljaGFuZ2VcIik7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnZpc2liaWxpdHlDaGFuZ2UsIGZ1bmN0aW9uKCl7XG5cdFx0ZG9jdW1lbnRbaGlkZGVuXSA/IEhvd2xlci52b2x1bWUoMCkgOiBIb3dsZXIudm9sdW1lKDEpO1xuXHR9LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqL1xuTWFpbi5wcm90b3R5cGUubG9hZFByZWxvYWRlciA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHNjYWxlICA9IHRoaXMuX3NjYWxlO1xuXHR2YXIgcHJlZml4ID0gKHNjYWxlID09PSBcInNkL1wiID8gXCJfMC41eFwiIDogXCJcIik7XG5cdHZhciBmaWxlcyA9XG5cdFtcblx0XHR7bmFtZTpcInByZWxvYWRlcl8wXCIsIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJwcmVsb2FkZXJcIiArIHByZWZpeCArIFwiLmpzb25cIn0sXG5cdFx0e25hbWU6XCJ1aVwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwidWlcIiArIHByZWZpeCArIFwiLmpzb25cIn0sXG5cdFx0e25hbWU6XCJwcmVsb2FkZXJfYmdcIiwgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcInRpdGxlc19cIiArIENvbW1vbi5DT1VOVFJZX0NPREUgKyBcIi9wcmVsb2FkZXJcIiArIHByZWZpeCArIFwiLmpwZ1wifVxuXHRdO1xuXHR2YXIgc291bmRzID0gW1xuXHRdO1xuXHRpZiAoZmlsZXMubGVuZ3RoKVxuXHR7XG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmFkZEZpbGVzKGZpbGVzLCB3aW5kb3cub2cuZ2FtZURpciArIFwiYXNzZXRzL1wiKTtcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuc2lnbmFsQ29tcGxldGVkLmFkZE9uY2UoZnVuY3Rpb24oKSB7dGhpcy5sb2FkQXNzZXRzKCk7fSwgdGhpcyk7XG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmxvYWQoKTtcblxuXHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5hZGRTb3VuZHMoc291bmRzLCBbXCIubXAzXCIsIFwiLm9nZ1wiXSwgXCJcIik7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0dGhpcy5sb2FkQXNzZXRzKCk7XG5cdH1cbn07XG5cblxuLyoqXG4gKi9cbk1haW4ucHJvdG90eXBlLmxvYWRBc3NldHMgPSBmdW5jdGlvbigpXG57XG5cdHZhciBzY2FsZSAgPSB0aGlzLl9zY2FsZTtcblx0dmFyIHByZWZpeCA9IChzY2FsZSA9PT0gXCJzZC9cIiA/IFwiXzAuNXhcIiA6IFwiXCIpO1xuXG5cdHZhciBmaWxlcyA9XG5cdFtcblx0XHR7bmFtZTpcImNvbmZpZ1wiLCB1cmw6XCJkYXRhL2NvbmZpZy5qc29uXCJ9LFxuXG5cdFx0e25hbWU6XCJnYW1lX2Fzc2V0c1wiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwiZ2FtZV9hc3NldHNcIiArIHByZWZpeCArIFwiLmpzb25cIn0sXG5cdFx0e25hbWU6XCJnYW1lX2Fzc2V0czJcIiwgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcImdhbWVfYXNzZXRzMlwiICsgcHJlZml4ICsgXCIuanNvblwifSxcblx0XHR7bmFtZTpcIm1vcmVnYW1lc18xeFwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibW9yZWdhbWVzXzF4XCIgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxuXHRcdHtuYW1lOlwic3BsYXNoXCIsIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJzcGxhc2hcIiArIHByZWZpeCArIFwiLmpzb25cIn0sXG5cdFx0e25hbWU6XCJsZXRzaGF2ZWZ1blwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwidGl0bGVzX1wiICsgQ29tbW9uLkNPVU5UUllfQ09ERSArIFwiL2xldHNoYXZlZnVuXCIgKyBwcmVmaXggKyBcIi5wbmdcIn0sXG5cdFx0e25hbWU6XCJ0aXRsZWdhbWVcIiwgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcInRpdGxlc19cIiArIENvbW1vbi5DT1VOVFJZX0NPREUgKyBcIi90aXRsZWdhbWVcIiArIHByZWZpeCArIFwiLnBuZ1wifSxcblxuXHRcdHtuYW1lOlwidGV4dFwiLCB1cmw6XCJmb250cy90ZXh0Lmpzb25cIn0sXG5cdFx0e25hbWU6XCJzY29yZVwiLCB1cmw6XCJmb250cy9zY29yZS5qc29uXCJ9LFxuXHRcdHtuYW1lOlwiYXZhdGFyQm9vc3RfcHNcIiwgdXJsOlwicGFydGljbGVzL2F2YXRhckJvb3N0Lmpzb25cIn0sXG5cdFx0e25hbWU6XCJhdmF0YXJEZWF0aF9wc1wiLCB1cmw6XCJwYXJ0aWNsZXMvYXZhdGFyRGVhdGguanNvblwifSxcblx0XHR7bmFtZTpcImF2YXRhckhpdF9wc1wiLCB1cmw6XCJwYXJ0aWNsZXMvYXZhdGFySGl0Lmpzb25cIn0sXG5cdFx0e25hbWU6XCJzcGxhc2hTdGFyc19wc1wiLCB1cmw6XCJwYXJ0aWNsZXMvc3BsYXNoU3RhcnMuanNvblwifSxcblx0XHR7bmFtZTpcImludHJvU3RhcnNfcHNcIiwgdXJsOlwicGFydGljbGVzL2ludHJvU3RhcnMuanNvblwifSxcblx0XHR7bmFtZTpcImludHJvQmFyc19wc1wiLCB1cmw6XCJwYXJ0aWNsZXMvaW50cm9CYXJzLmpzb25cIn0sXG5cdFx0e25hbWU6XCJpbnRyb1NwYXJrc19wc1wiLCB1cmw6XCJwYXJ0aWNsZXMvaW50cm9TcGFya3MuanNvblwifSxcblx0XHR7bmFtZTpcImJvbWJfcHNcIiwgdXJsOlwicGFydGljbGVzL2JvbWIuanNvblwifSxcblx0XHR7bmFtZTpcImJvbWJMaXRlX3BzXCIsIHVybDpcInBhcnRpY2xlcy9ib21iTGl0ZS5qc29uXCJ9XG5cdF07XG5cdHZhciBzb3VuZHMgPVxuXHRbXG5cdFx0XCJzZnhfYnRuX3ByZXNzXzAwXCIsXG5cdFx0XCJzZnhfYnRuX3JvbGxvdmVyXzAwXCIsXG5cdFx0XCJzZnhfdWlfcG9wdXBfY2xvc2VfMDBcIixcblx0XHRcInNmeF9jbG91ZF9ib3VuY2VfMDBcIixcblx0XHRcInNmeF9jbG91ZF9ib3VuY2VfMDFcIixcblx0XHRcInNmeF9jbG91ZF9ib3VuY2VfMDJcIixcblx0XHRcInNmeF9yYWluYm93X3BpY2t1cHNfMDBcIixcblx0XHRcInNmeF9yYXZlbl9yYWluYm93X3Bvd2VyXzAwXCIsXG5cdFx0XCJzZnhfdW5pY29ybl9kaWVfcmFuZG9tXzAwXCIsXG5cdFx0XCJzZnhfdW5pY29ybl9yYWluYm93X3Bvd2VyX3JhbmRvbV8wMFwiLFxuXHRcdFwic2Z4X3VuaWNvcm5fcmFpbmJvd19wb3dlcl9yYW5kb21fMDFcIixcblx0XHRcInNmeF9yYXZlbl9zcGFya2xlXzAwXCIsXG5cdFx0XCJzZnhfcmF2ZW5fbGF1Z2hfMDBcIixcblx0XHRcInNmeF9oaXRfY29uY3JldGVibG9ja18wMFwiLFxuXHRcdFwic2Z4X2JhbGxvb25fZGVhdGhfMDBcIixcblx0XHRcInNmeF9iYWxsb29uX2RlYXRoXzAxXCIsXG5cdFx0XCJtdXNpY19tZW51X2ludHJvXzAwXCIsXG5cdFx0XCJtdXNpY19tZW51X2xvb3BfMDBcIlxuXHRdO1xuXHRpZiAoZmlsZXMubGVuZ3RoKVxuXHR7XG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmFkZEZpbGVzKGZpbGVzLCB3aW5kb3cub2cuZ2FtZURpciArIFwiYXNzZXRzL1wiKTtcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuc2lnbmFsUHJvZ3Jlc3MuYWRkKHRoaXMub25Mb2FkaW5nUHJvZ3Jlc3MsIHRoaXMpO1xuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5zaWduYWxDb21wbGV0ZWQuYWRkT25jZSh0aGlzLm9uTG9hZGluZ0NvbXBsZXRlZCwgdGhpcyk7XG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmxvYWQoKTtcblxuXHRcdHRoaXMuX3ByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKTtcblx0XHR0aGlzLl9wcmVsb2FkZXIuc2lnbmFscy5sb2FkaW5nQ29tcGxldGUuYWRkT25jZSh0aGlzLnN0YXJ0R2FtZSwgdGhpcyk7XG5cdFx0dGhpcy5fc2NyZWVuTWFuYWdlci5hZGQodGhpcy5fcHJlbG9hZGVyKTtcblxuXHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5hZGRTb3VuZHMoc291bmRzLCBbXCIubXAzXCIsIFwiLm9nZ1wiXSwgd2luZG93Lm9nLmdhbWVEaXIgKyBcImFzc2V0cy9hdWRpby9cIik7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0dGhpcy5zdGFydEdhbWUoKTtcblx0fVxufTtcblxuLyoqXG4gKi9cbk1haW4ucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHRoYXQgPSB0aGlzO1xuXHR0aGF0Ll9nYW1lID0gbmV3IEFwcGxpY2F0aW9uKCk7XG5cdHRoYXQuX2dhbWUuaW5pdCgpO1xufTtcblxuLyoqXG4gKi9cbk1haW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5fc2NyZWVuTWFuYWdlci51cGRhdGUoKTtcblx0Q29tbW9uLmFuaW1hdG9yLnVwZGF0ZSgpO1xuXG5cdGlmIChDb21tb24uREVCVUdfUEFJTlRfTU9ERSA+IDApIHtcblx0XHR0aGlzLnBhaW50QmFkSW1hZ2UoQ29tbW9uLnN0YWdlKTtcblx0fVxuXG5cdHRoaXMuX2ZyYW1lQ291bnQrKztcblx0Q29tbW9uLmZyYW1lQ291bnQgPSB0aGlzLl9mcmFtZUNvdW50O1xufTtcblxuLyoqXG4gKi9cbk1haW4ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKClcbntcblx0Q29tbW9uLnJlbmRlcmVyLnJlbmRlcihDb21tb24uc3RhZ2UpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFQSVhJLkRpc3BsYXlPYmplY3R9IGRpc3BsYXlcbiAqIEBwYXJhbSB7TnVtYmVyPX0gY29sb3JcbiAqL1xuTWFpbi5wcm90b3R5cGUucGFpbnRCYWRJbWFnZSA9IGZ1bmN0aW9uKGRpc3BsYXksIGNvbG9yKVxue1xuXHRjb2xvciA9IGNvbG9yIHx8IDB4QUEwMEZGO1xuXG5cdHZhciBjaGlsZDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkaXNwbGF5LmNoaWxkcmVuLmxlbmd0aDsgKysgaSkge1xuXHRcdGNoaWxkID0gZGlzcGxheS5jaGlsZHJlbltpXTtcblx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBQSVhJLlNwcml0ZSkge1xuXHRcdFx0aWYgKENvbW1vbi5ERUJVR19QQUlOVF9NT0RFID09IDEpIHtcblx0XHRcdFx0aWYgKGNoaWxkLnRleHR1cmUud2lkdGggJSAyICE9IDAgfHwgY2hpbGQudGV4dHVyZS5oZWlnaHQgJSAyICE9IDApIHtcblx0XHRcdFx0XHRjaGlsZC50aW50ID0gY29sb3I7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQudGludCA9IDB4RkZGRkZGO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ29tbW9uLkRFQlVHX1BBSU5UX01PREUgPT0gMikge1xuXHRcdFx0XHRpZiAoY2hpbGQucG9zaXRpb24ueCAhPT0gcGFyc2VJbnQoY2hpbGQucG9zaXRpb24ueCkgfHwgY2hpbGQucG9zaXRpb24ueSAhPT0gcGFyc2VJbnQoY2hpbGQucG9zaXRpb24ueSkpIHtcblx0XHRcdFx0XHRjaGlsZC50aW50ID0gY29sb3I7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQudGludCA9IDB4RkZGRkZGO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucGFpbnRCYWRJbWFnZShjaGlsZCwgY29sb3IpO1xuXHR9XG59O1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5NYWluLnByb3RvdHlwZS5vbkxvYWRpbmdQcm9ncmVzcyA9IGZ1bmN0aW9uKGV2ZW50KVxue1xuXHR0aGlzLl9wcmVsb2FkZXIubG9hZGVkUGVyY2VudGFnZSA9IGV2ZW50LnByb2dyZXNzO1xufTtcblxuLyoqXG4gKi9cbk1haW4ucHJvdG90eXBlLm9uTG9hZGluZ0NvbXBsZXRlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5fcHJlbG9hZGVyLmxvYWRlZFBlcmNlbnRhZ2UgPSAxMDAuMDtcblx0dGhpcy5fcHJlbG9hZGVyLmFuaW1hdGVPdXQobnVsbCwgdGhpcyk7XG5cblx0dGhpcy5fcHJlbG9hZGVyID0gbnVsbDtcblxuXHR0aGlzLl9hc3NldE1hbmFnZXIuc2lnbmFsUHJvZ3Jlc3MucmVtb3ZlQWxsKCk7XG5cdHRoaXMuX2Fzc2V0TWFuYWdlci5zaWduYWxDb21wbGV0ZWQucmVtb3ZlQWxsKCk7XG5cblx0aWYoIXAzLkRldmljZS5pc01vYmlsZSlcblx0e1xuXHRcdHRoaXMuc3RhcnRHYW1lKCk7XG5cdH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHshQm9vbGVhbn0gY29ycmVjdFxuICovXG5NYWluLnByb3RvdHlwZS5vbkNhbnZhc1Jlc2l6ZSA9IGZ1bmN0aW9uKGNvcnJlY3QpXG57XG5cdGlmIChjb3JyZWN0KVxuXHR7XG5cdFx0Q29tbW9uLnJlbmRlcmVyLnJlc2l6ZShwMy5WaWV3LndpZHRoLCBwMy5WaWV3LmhlaWdodCk7XG5cblx0XHRpZiAodGhpcy5fc2NyZWVuTWFuYWdlcilcblx0XHR7XG5cdFx0XHR0aGlzLl9zY3JlZW5NYW5hZ2VyLnJlc2l6ZSgpO1xuXHRcdH1cblx0fVxufTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gZ2V0QW5kcm9pZFZlcnNpb24odWEpIFxue1xuXHR1YSA9ICh1YSB8fCBuYXZpZ2F0b3IudXNlckFnZW50KS50b0xvd2VyQ2FzZSgpOyBcblx0dmFyIG1hdGNoID0gdWEubWF0Y2goL2FuZHJvaWRcXHMoWzAtOVxcLl0qKS8pO1xuXHQgXG5cdGlmKCBtYXRjaCApIFxuXHR7XG5cdHZhciBmbG9hdCA9IHBhcnNlRmxvYXQoIG1hdGNoWzFdICkgO1xuXHRjb25zb2xlLmxvZyggXCIgZ2V0QW5kcm9pZFZlcnNpb24gPSBcIiAsIG1hdGNoICwgZmxvYXQgKSA7XG5cdHJldHVybiBmbG9hdCA7XG5cdH1cblx0IFxuXHRyZXR1cm4gLTEgO1xufTtcbiBcbmZ1bmN0aW9uIGlzTGVub3ZvKClcbntcblx0dmFyIGlzQW5kcm9pZCA9ICggZ2V0QW5kcm9pZFZlcnNpb24oKSA+LTEgKSA/IHRydWUgOiBmYWxzZSA7XG5cdHZhciBsZW5vdm9SZXMgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIHdpbmRvdy5zY3JlZW4uaGVpZ2h0ID09IDEwMjQgLyA2MDAgKSA7XG5cdCBcblx0Ly8gVGFiIDJcblx0Ly8gTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuNC4yOyBMZW5vdm8gVEFCIDIgQTctMzBGIEJ1aWxkL0tPVDQ5SCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzQ1LjAuMjQ1NC44NCBTYWZhcmkvNTM3LjM2XG5cdCBcblx0Ly8gVGFiIDMgLSBmcm9tIHdlYlxuXHQvLyBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNi4wLjE7IExlbm92byBUQi04NzAzRiBCdWlsZC9NTUIyOU0pIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81Ni4wLjI5MjQuODcgU2FmYXJpLzUzNy4zNlxuXHQgXG5cdC8vIFRhYiAzIC0gZnJvbSBUZXN0b2xvZ3lcblx0Ly8gTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDUuMC4xOyBMZW5vdm8gVEIzLTcxMEYgQnVpbGQvTFJYMjFNKVxuXHQgXG5cdHJldHVybiBpc0FuZHJvaWQgJiYgbGVub3ZvUmVzICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZiggJ0xlbm92bycpID4gLTEgO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb21tb24gPSByZXF1aXJlKFwiLi9Db21tb25cIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gU2F2ZWREYXRhKClcbntcblx0dmFyIGFzc2V0TWFuYWdlciAgICAgICAgICAgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBjb25zdFxuXHQgKi9cblx0dGhpcy5TQVZFX05BTUUgPSBcInRlZW50aXRhbnNnb19yYWluYm93X2RyZWFtc1wiO1xuXHR0aGlzLlNBVkVfVkVSU0lPTiA9IFwiMC4wLjBcIjtcblx0dGhpcy5TQVZFX1NFRUQgPSBcInk1azBFbzZSMTc3bVVrYlwiO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdHRoaXMuaGFzVmlld2VkSW5zdHJ1Y3Rpb25zID0gZmFsc2U7XG5cdHRoaXMuaGFzU2VlbkludHJvICAgICAgICAgID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqL1xuXHR0aGlzLmhpZ2hzY29yZSA9IDA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNhdmVkRGF0YTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5TYXZlZERhdGEucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGlmICghd2luZG93LmxvY2FsU3RvcmFnZVt0aGlzLlNBVkVfTkFNRSArIFwiX1wiICsgdGhpcy5TQVZFX1ZFUlNJT05dKVxuXHR7XG5cdFx0Y29uc29sZS5sb2coJ3Jlc2V0Jyk7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHRcdHRoaXMuc2F2ZSgpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdGNvbnNvbGUubG9nKCdsb2FkJyk7XG5cdFx0dGhpcy5sb2FkKCk7XG5cdH1cblxufTtcblxuU2F2ZWREYXRhLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcbntcblxufTtcblxuXG5TYXZlZERhdGEucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpXG57XG5cdHZhciBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZVt0aGlzLlNBVkVfTkFNRSArIFwiX1wiICsgdGhpcy5TQVZFX1ZFUlNJT05dO1xuXHRkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblxuXHR0aGlzLmhhc1NlZW5JbnRybyAgICAgICAgICA9IGRhdGEuaGFzU2VlbkludHJvO1xuXHR0aGlzLmhhc1ZpZXdlZEluc3RydWN0aW9ucyA9IGRhdGEuaGFzVmlld2VkSW5zdHJ1Y3Rpb25zO1xuXHR0aGlzLmhpZ2hzY29yZSAgICAgICAgICAgICA9IHBhcnNlSW50KGRhdGEuaGlnaHNjb3JlKTtcblxuXHQvKlxuXHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KFxuXHR7XG5cdFx0aGFzVmlld2VkSW5zdHJ1Y3Rpb25zOiBkYXRhLmhhc1ZpZXdlZEluc3RydWN0aW9ucyxcblx0XHRoYXNTZWVuSW50cm86IGRhdGEuaGFzU2VlbkludHJvXG5cdH0pO1xuXG5cdHZhciBoYXNoID0gbWQ1KGpzb24gKyB0aGlzLlNBVkVfU0VFRCk7XG5cdGlmIChoYXNoICE9IGRhdGEuaGFzaClcblx0e1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLlNBVkVfTkFNRSArIFwiX1wiICsgdGhpcy5TQVZFX1ZFUlNJT04pO1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHRoaXMuaGFzU2VlbkludHJvID0gZGF0YS5oYXNTZWVuSW50cm87XG5cdFx0dGhpcy5oYXNWaWV3ZWRJbnN0cnVjdGlvbnMgPSBkYXRhLmhhc1ZpZXdlZEluc3RydWN0aW9ucztcblx0fSovXG59O1xuXG5TYXZlZERhdGEucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKCdzYXZlJyk7XG5cdHZhciBkYXRhID0ge307XG5cdGRhdGEuaGFzU2VlbkludHJvID0gdGhpcy5oYXNTZWVuSW50cm87XG5cdGRhdGEuaGFzVmlld2VkSW5zdHJ1Y3Rpb25zID0gdGhpcy5oYXNWaWV3ZWRJbnN0cnVjdGlvbnM7XG5cdGRhdGEuaGlnaHNjb3JlID0gdGhpcy5oaWdoc2NvcmU7XG5cblx0dmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0ZGF0YS5oYXNoID0gbWQ1KGpzb24gKyB0aGlzLlNBVkVfU0VFRCk7XG5cblx0d2luZG93LmxvY2FsU3RvcmFnZVt0aGlzLlNBVkVfTkFNRSArIFwiX1wiICsgdGhpcy5TQVZFX1ZFUlNJT05dID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNjcm9sbGVyT2JqZWN0ICA9IHJlcXVpcmUoXCIuLi9zY3JvbGxlci9TY3JvbGxlck9iamVjdFwiKTtcbnZhciBTb3VuZFNGWCAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9Tb3VuZFNGWFwiKTtcbnZhciBSYWluYm93VGFpbCAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9SYWluYm93VGFpbFwiKTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEF2YXRhcigpXG57XG5cdC8qKlxuXHQgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG5cdCAqL1xuXHR0aGlzLl9jaGFyYWN0ZXJIb2xkZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7cDMuTW92aWVDbGlwfVxuXHQgKi9cblx0dGhpcy5fcnVuQW5pbWF0aW9uICAgICAgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmFpbmJvd1RhaWx9XG5cdCAqL1xuXHR0aGlzLl90YWlsICAgICAgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Qm9vbH1cblx0ICovXG5cdHRoaXMuX2lzRGVhZCAgICAgICAgPSBmYWxzZTtcblx0dGhpcy5faXNGYWxsaW5nICAgICA9IGZhbHNlO1xuXHR0aGlzLl9pc0Jvb3N0ICAgICAgID0gZmFsc2U7XG5cdHRoaXMuX2lzT3V0T2ZTY3JlZW4gPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHR5cGUge051bWJlcn1cblx0ICovXG5cdHRoaXMuX2p1bXBUaW1lICAgICAgPSAxO1xuXHR0aGlzLl9qdW1wSGVpZ2h0TWluID0gMTUwO1xuXHR0aGlzLl9qdW1wSGVpZ2h0ICAgID0gNDAwO1xuXG5cdHRoaXMuX2p1bXBTcGVlZCAgICA9IG51bGw7XG5cdHRoaXMuX2dyYXZpdHkgICAgICA9IG51bGw7XG5cdHRoaXMuX2p1bXBUaW1lTWluICA9IG51bGw7XG5cdHRoaXMuX2p1bXBTcGVlZE1pbiA9IG51bGw7XG5cblx0dGhpcy5feEJvb3N0ICAgICAgICAgPSAwO1xuXHR0aGlzLl95U3BlZWQgICAgICAgICA9IDA7XG5cdHRoaXMuX2Rhc2hUaW1lICAgICAgID0gMDtcblxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Y2xvdWRraWQuRW1pdHRlcn1cblx0ICovXG5cdHRoaXMuX2Jvb3N0UFMgICAgICAgPSBudWxsO1xuXHR0aGlzLl9kZWF0aFBTICAgICAgID0gbnVsbDtcblxuXHRTY3JvbGxlck9iamVjdC5jYWxsKHRoaXMsIFwiYXZhdGFyXCIsIGZhbHNlKTtcblxuXHQvKipcblx0ICogQHR5cGUge3NpZ25hbHMuU2lnbmFsfVxuXHQgKi9cblx0dGhpcy5zaWduYWxzLmp1bXAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxufVxubW9kdWxlLmV4cG9ydHMgPSBBdmF0YXI7XG5BdmF0YXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTY3JvbGxlck9iamVjdC5wcm90b3R5cGUpO1xuQXZhdGFyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEF2YXRhcjtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5BdmF0YXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuX2p1bXBTcGVlZCAgICA9ICgyICogdGhpcy5fanVtcEhlaWdodCkgLyB0aGlzLl9qdW1wVGltZTtcblx0dGhpcy5fZ3Jhdml0eSAgICAgID0gdGhpcy5fanVtcFNwZWVkL3RoaXMuX2p1bXBUaW1lO1xuXHR0aGlzLl9qdW1wVGltZU1pbiAgPSBNYXRoLnNxcnQoMiAqIHRoaXMuX2p1bXBIZWlnaHRNaW4vdGhpcy5fZ3Jhdml0eSk7XG5cdHRoaXMuX2p1bXBTcGVlZE1pbiA9IHRoaXMuX2dyYXZpdHkgKiB0aGlzLl9qdW1wVGltZU1pbjtcblxuXG5cdC8vIFBhcnRpY2xlc1xuXHR0aGlzLl9ib29zdFBTICAgICAgPSBuZXcgY2xvdWRraWQuRW1pdHRlcih0aGlzLCBbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzdGFyX3BhcnRcIiksIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZG90X3BhcnRpY2xlXCIpXSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJhdmF0YXJCb29zdF9wc1wiKSk7XG5cdHRoaXMuX2Jvb3N0UFMuZW1pdCA9IGZhbHNlO1xuXHR0aGlzLl9kZWF0aFBTICAgICAgPSBuZXcgY2xvdWRraWQuRW1pdHRlcih0aGlzLCBbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzdGFyMl9wYXJ0XCIpLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInN0YXIyX3BhcnRcIildLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImF2YXRhckRlYXRoX3BzXCIpKTtcblx0dGhpcy5fZGVhdGhQUy5lbWl0ID0gZmFsc2U7XG5cblx0Ly8gQW5pbWF0aW9uc1xuXHR0aGlzLl9jaGFyYWN0ZXJIb2xkZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9jaGFyYWN0ZXJIb2xkZXIpO1xuXG5cdHRoaXMuX3J1bkFuaW1hdGlvbiA9IG5ldyBwMy5Nb3ZpZUNsaXAodGhpcy5fZ2VuZXJhdGVBbmltYXRpb25TZXF1ZW5jZShcInJhdmVuXCIsIDEpKTtcblx0dGhpcy5fcnVuQW5pbWF0aW9uLmFuaW1hdGlvblNwZWVkID0gMTtcblx0dGhpcy5fcnVuQW5pbWF0aW9uLmFuY2hvciAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdHRoaXMuX3J1bkFuaW1hdGlvbi5sb29waW5nID0gZmFsc2U7XG5cdHRoaXMuX3J1bkFuaW1hdGlvbi5wbGF5KCk7XG5cdHRoaXMuX2NoYXJhY3RlckhvbGRlci5hZGRDaGlsZCh0aGlzLl9ydW5BbmltYXRpb24pO1xuXG5cdC8vIENvbGxpc2lvbnNcblx0dGhpcy5jb2xsaXNpb25SZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKC0odGhpcy53aWR0aCkvMiArNDAsIHRoaXMuaGVpZ2h0LzItNDAsIHRoaXMud2lkdGggLSA2MCwgNDApO1xuXG5cdC8vIERlYnVnXG5cdC8vIHRoaXMuZHJhd0NvbGxpc2lvblJlY3QoKTtcblx0XG5cdHRoaXMuX2Jvb3N0VGFyZ2V0ID0gbmV3IFBJWEkuUG9pbnQoKTtcblx0dGhpcy5fYm9vc3RUYXJnZXRTcGVlZCA9IDEwMDA7XG59XG5cbi8qKlxuICovXG5BdmF0YXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblx0aWYoIXRoaXMuX2lzT3V0T2ZTY3JlZW4pXG5cdHtcblx0XHRpZighdGhpcy5faXNEZWFkKSAvLyBOb3QgaGl0IGJ5IGFuIGVuZW15XG5cdFx0e1xuXHRcdFx0aWYodGhpcy5fZGFzaFRpbWUgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9kYXNoVGltZSAtPSAgcDMuVGltZXN0ZXAuZGVsdGFUaW1lO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZighdGhpcy5faXNCb29zdClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5feVNwZWVkICs9IHRoaXMuX2dyYXZpdHkgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKiAodGhpcy5faXNGYWxsaW5nID8gMTUgOiAxKSAqICh0aGlzLl95U3BlZWQgPCAwID8gMSA6IDAuNjUpO1xuXHRcdFx0XHR0aGlzLl95U3BlZWQgPSBNYXRoLm1pbih0aGlzLl95U3BlZWQsIDE3MDApOyAvLyBMaW1pdCB0aGUgbWF4IGZhbGxpbmcgc3BlZWQuIE9uIHNsb3cgZGV2aWNlIGl0IGNhbiBtaXNzIGNvbGxpc2lvbnMgd2hlbiB0b28gZmFzdFxuXHRcdFx0XHR0aGlzLnkgKz0gdGhpcy5feVNwZWVkICogcDMuVGltZXN0ZXAuZGVsdGFUaW1lO1xuXG5cdFx0XHRcdGlmKHRoaXMueSA+PSBDb21tb24uU1RBR0VfSEVJR0hUKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5faXNEZWFkID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLl9pc091dE9mU2NyZWVuID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLl9kZWF0aFBTLmVtaXQgPSB0cnVlO1xuXHRcdFx0XHRcdFNvdW5kU0ZYLnBsYXlSYW5kb21Gcm9tKFtcInNmeF9oaXRfY29uY3JldGVibG9ja18wMFwiXSk7XG5cdFx0XHRcdFNvdW5kU0ZYLnBsYXlSYW5kb21Gcm9tKFtcInNmeF91bmljb3JuX2RpZV9yYW5kb21fMDBcIl0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKHRoaXMuX2lzQm9vc3QpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKHRoaXMuX2Jvb3N0VGFyZ2V0LnggIT0gMCAmJiB0aGlzLl9ib29zdFRhcmdldC55ICE9IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5fYm9vc3RUYXJnZXQueCAtIHRoaXMucG9zaXRpb24ueCwyKSArIE1hdGgucG93KHRoaXMuX2Jvb3N0VGFyZ2V0LnkgLSB0aGlzLnBvc2l0aW9uLnksMikpO1xuXHRcdFxuXHRcdFx0XHRcdGlmKGRpc3RhbmNlIDwgdGhpcy5fYm9vc3RUYXJnZXRTcGVlZCAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvLyB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLl9ib29zdFRhcmdldC54O1xuXHRcdFx0XHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gdGhpcy5fYm9vc3RUYXJnZXQueTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vIHRoaXMucG9zaXRpb24ueCA9IHAzLlV0aWxzLmxlcnBOdW1iZXIoKHRoaXMuX2Jvb3N0VGFyZ2V0U3BlZWQgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWUpL2Rpc3RhbmNlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMuX2Jvb3N0VGFyZ2V0LngpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gcDMuVXRpbHMubGVycE51bWJlcigodGhpcy5fYm9vc3RUYXJnZXRTcGVlZCAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZSkvZGlzdGFuY2UsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5fYm9vc3RUYXJnZXQueSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgLy8gSGl0IGJ5IGFuIGVuZW15XG5cdFx0e1xuXHRcdFx0dGhpcy5feVNwZWVkICs9IHRoaXMuX2dyYXZpdHkgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKiAyO1xuXHRcdFx0dGhpcy5feVNwZWVkID0gTWF0aC5taW4odGhpcy5feVNwZWVkLCB0aGlzLl9qdW1wU3BlZWQpXG5cblx0XHRcdGlmKHRoaXMueSA8IENvbW1vbi5TVEFHRV9IRUlHSFQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMueSArPSB0aGlzLl95U3BlZWQgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2lzT3V0T2ZTY3JlZW4gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9kZWF0aFBTLmVtaXQgPSB0cnVlO1xuXHRcdFx0XHRTb3VuZFNGWC5wbGF5UmFuZG9tRnJvbShbXCJzZnhfaGl0X2NvbmNyZXRlYmxvY2tfMDBcIl0pO1xuXHRcdFx0XHRTb3VuZFNGWC5wbGF5UmFuZG9tRnJvbShbXCJzZnhfdW5pY29ybl9kaWVfcmFuZG9tXzAwXCJdKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHRoaXMucm90YXRpb24gPSAwO1xuXHR9XG5cblx0Ly8gUGFydGljbGVzXG5cdHRoaXMuX2Jvb3N0UFMudXBkYXRlKHAzLlRpbWVzdGVwLmRlbHRhVGltZSk7XG5cdHRoaXMuX2RlYXRoUFMudXBkYXRlKHAzLlRpbWVzdGVwLmRlbHRhVGltZSk7XG59O1xuXG4vKipcbiAqL1xuQXZhdGFyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5fcnVuQW5pbWF0aW9uLnN0b3AoKTtcbn1cblxuLyoqXG4gKi9cbkF2YXRhci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9ydW5BbmltYXRpb24ucGxheSgpO1xufVxuXG4vKipcbiAqL1xuQXZhdGFyLnByb3RvdHlwZS5mYWxsID0gZnVuY3Rpb24oKVxue1xuXHRpZih0aGlzLl9pc0Jvb3N0KSByZXR1cm47XG5cblx0dGhpcy5faXNGYWxsaW5nID0gdHJ1ZTtcblxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0dGwudG8odGhpcy5zY2FsZSwgMC4xNSwge3g6MC43NSwgeToxLjI1LCBlYXNlOlNpbmUuZWFzZUluT3V0fSk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xufVxuXG4vKipcbiAqL1xuQXZhdGFyLnByb3RvdHlwZS5mYWxsRW5kID0gZnVuY3Rpb24oYm91bmNlKVxue1xuXHRpZih0aGlzLl9pc0Jvb3N0KSByZXR1cm47XG5cblx0dGhpcy5faXNGYWxsaW5nID0gZmFsc2U7XG5cblx0aWYoIWJvdW5jZSlcblx0e1xuXHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcdHRsLnRvKHRoaXMuc2NhbGUsIDAuMTUsIHt4OjEsIHk6MSwgZWFzZTpTaW5lLmVhc2VPdXR9KTtcblx0XHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0XHR0bC50byh0aGlzLnNjYWxlLCAwLjIsIHt4OjEuMjUsIHk6MC43NSwgZWFzZTpRdWFydC5lYXNlT3V0fSk7XG5cdFx0dGwudG8odGhpcy5zY2FsZSwgMC4yLCB7eDoxLCB5OjEsIGVhc2U6U2luZS5lYXNlT3V0fSk7XG5cdFx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG5cdH1cbn1cblxuXG4vKipcbiAqL1xuQXZhdGFyLnByb3RvdHlwZS5ib3VuY2UgPSBmdW5jdGlvbigpXG57XG5cdGlmKHRoaXMuX2lzQm9vc3QpIHJldHVybjtcblxuXHR0aGlzLl95U3BlZWQgPSAtTWF0aC5tYXgodGhpcy5fanVtcFNwZWVkTWluLCBNYXRoLm1pbih0aGlzLl95U3BlZWQsIHRoaXMuX2p1bXBTcGVlZCkpO1xuXHR0aGlzLmZhbGxFbmQodHJ1ZSk7XG5cblx0U291bmRTRlgucGxheVJhbmRvbUZyb20oW1wic2Z4X2Nsb3VkX2JvdW5jZV8wMFwiLCBcInNmeF9jbG91ZF9ib3VuY2VfMDFcIiwgXCJzZnhfY2xvdWRfYm91bmNlXzAyXCJdKTtcbn1cblxuQXZhdGFyLnByb3RvdHlwZS5kaWUgPSBmdW5jdGlvbigpXG57XG5cdGlmKHRoaXMuX2lzRGVhZCkgcmV0dXJuIGZhbHNlO1xuXHRpZih0aGlzLl9pc0Jvb3N0KSByZXR1cm4gZmFsc2U7XG5cblx0dGhpcy5faXNEZWFkID0gdHJ1ZTtcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cdHRsLnRvKHRoaXMuc2NhbGUsIDAuMSwge3g6MSwgeToxLCBlYXNlOkxpbmVhci5lYXNlTm9uZX0sIDApO1xuXHR0bC50byh0aGlzLCAyLCB7cm90YXRpb246NCAqIDM2MCAqIFBJWEkuREVHX1RPX1JBRCwgZWFzZTpTaW5lLmVhc2VJbn0sIDApO1xuXHR0bC50byh0aGlzLCAxLjUsIHt4OiB0aGlzLnggKyA2MDAsIGVhc2U6U2luZS5lYXNlT3V0fSwgMCk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xuXG5cdFNvdW5kU0ZYLnBsYXlSYW5kb21Gcm9tKFtcInNmeF9iYWxsb29uX2RlYXRoXzAwXCIsIFwic2Z4X2JhbGxvb25fZGVhdGhfMDFcIl0pO1xuXG5cdGlmKHRoaXMuX3lTcGVlZCA+IDApXG5cdHtcblx0XHR0aGlzLl95U3BlZWQgPSAtdGhpcy5fanVtcFNwZWVkTWluO1xuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59XG5cbkF2YXRhci5wcm90b3R5cGUuYm9vc3QgPSBmdW5jdGlvbigpXG57XG5cdGlmKHRoaXMuX2lzQm9vc3QpIHJldHVybjtcblxuXHR0aGlzLl9pc0Jvb3N0ICAgPSB0cnVlO1xuXHR0aGlzLl9pc0ZhbGxpbmcgPSBmYWxzZTtcblx0dGhpcy5feEJvb3N0ICAgID0gdGhpcy54O1xuXG5cdFxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0XHR0bC50byh0aGlzLCAwLjg1LCB7eDp0aGlzLnggKyA2MDAsIGVhc2U6U2luZS5lYXNlT3V0fSwgMCk7XG5cdFx0dGwudG8odGhpcy5zY2FsZSwgMC44NSwge3g6MS4xLCB5OjAuOSwgZWFzZTpTaW5lLmVhc2VPdXR9LCAwKTtcblx0XG5cdFx0Ly8gdGwudG8odGhpcywgMC44NSwge3g6dGhpcy54ICsgNjAwLCB5Oi0xMDAsIGVhc2U6U2luZS5lYXNlT3V0fSwgMCk7XG5cdFx0Ly8gdGwudG8odGhpcy5zY2FsZSwgMC44NSwge3g6MS4xLCB5OjAuOSwgZWFzZTpTaW5lLmVhc2VPdXR9LCAwKTtcblx0XHQvLyB0bC50byh0aGlzLCAxLjIsIHt4OnRoaXMueCArIDYwMCAtMjUwLCBlYXNlOlNpbmUuZWFzZUluT3V0LCByZXBlYXQ6LTEsIHlveW86dHJ1ZX0sIDAuODUpO1xuXHRcdC8vIHRsLnRvKHRoaXMsIDEuOSwge3k6NTAsIGVhc2U6U2luZS5lYXNlSW5PdXQsIHJlcGVhdDotMSwgeW95bzp0cnVlfSwgMC44NSk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xuXHRcblx0dGhpcy5fdGFpbC5fc2VnbWVudExlbmd0aCAqPSAyO1xuXG5cdHRoaXMuX2Jvb3N0UFMuZW1pdCA9IHRydWU7XG5cdFxuXHRTb3VuZFNGWC5wbGF5KCdzZnhfcmF2ZW5fcmFpbmJvd19wb3dlcl8wMCcse3ZvbHVtZSA6IDF9KTtcbn1cblxuQXZhdGFyLnByb3RvdHlwZS5ib29zdEVuZCA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KFxuXHR7XG5cdFx0b25Db21wbGV0ZTpmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhpcy5faXNCb29zdCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5feVNwZWVkID0gLXRoaXMuX2p1bXBTcGVlZE1pbiAqIDEuMjU7XG5cdFx0fSxcblx0XHRvbkNvbXBsZXRlU2NvcGU6dGhpc1xuXG5cdH0pO1xuXHQvLyB0bC50byh0aGlzLCAgICAgICAxLCB7eDp0aGlzLl94Qm9vc3QsIHk6dGhpcy55LCBlYXNlOlNpbmUuZWFzZUluT3V0fSwgMCk7XG5cdHRsLnRvKHRoaXMsICAgICAgIDEsIHt4OnRoaXMuX3hCb29zdCwgZWFzZTpTaW5lLmVhc2VJbk91dH0sIDApO1xuXHR0bC50byh0aGlzLnNjYWxlLCAxLCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSwgMCk7XG5cdHRsLnRvKHRoaXMuX3RhaWwsIDEsIHtfc2VnbWVudExlbmd0aDp0aGlzLl90YWlsLl9zZWdtZW50TGVuZ3RoLzIsIGVhc2U6U2luZS5lYXNlT3V0fSwgMCk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xuXG5cdHRoaXMuX2Jvb3N0UFMuZW1pdCA9IGZhbHNlO1xufVxuXG5BdmF0YXIucHJvdG90eXBlLnBsYXlMb29wcyA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vKipcbiAqL1xuXG5BdmF0YXIucHJvdG90eXBlLnN0b3BMb29wcyA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBwYXJhbSB7IVN0cmluZ30gY2hhcmFjdGVyXG4gKiBAcGFyYW0geyFOdW1iZXJ9IGZyYW1lTGltaXRcbiAqIEByZXR1cm5zIHshcDMuTW92aWVDbGlwU2VxdWVuY2V9XG4gKi9cbkF2YXRhci5wcm90b3R5cGUuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UgPSBmdW5jdGlvbihjaGFyYWN0ZXIsIGZyYW1lTGltaXQpXG57XG5cdHZhciB0ZXh0dXJlQXJyID0gW107XG5cdGlmKGZyYW1lTGltaXQgPT0gMSlcblx0e1xuXHRcdHRleHR1cmVBcnJbMF0gPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShjaGFyYWN0ZXIpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdGZvcih2YXIgaSA9IGZyYW1lU3RhcnQgKyAxOyBpIDw9IGZyYW1lTGltaXQ7IGkrKylcblx0XHR7XG5cdFx0XHR2YXIgbiA9IFwiXCIgKyBpO1xuXHRcdFx0d2hpbGUobi5sZW5ndGggPCAzKSBuID0gXCIwXCIgKyBuO1xuXHRcdFx0dGV4dHVyZUFyci5wdXNoKGNoYXJhY3RlciArIFwiX1wiICsgbik7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0ZXh0dXJlQXJyLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdHRleHR1cmVBcnJbaV0gPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSh0ZXh0dXJlQXJyW2ldKTtcblx0XHR9XG5cdH1cblx0dmFyIHNlcXVlbmNlID0gbmV3IHAzLk1vdmllQ2xpcFNlcXVlbmNlKCk7XG5cdHNlcXVlbmNlLmFkZFRleHR1cmVzKHRleHR1cmVBcnIpO1xuXG5cdHJldHVybiBzZXF1ZW5jZTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEF2YXRhci5wcm90b3R5cGUsIFwiaXNEZWFkXCIsIHtcblxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc0RlYWQ7XG5cdH1cbn0pO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdmF0YXIucHJvdG90eXBlLCBcInZlcnRpY2FsU3BlZWRcIiwge1xuXG5cdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3lTcGVlZDtcblx0fVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdmF0YXIucHJvdG90eXBlLCBcImlzQm9vc3RcIiwge1xuXG5cdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQm9vc3Q7XG5cdH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdmF0YXIucHJvdG90eXBlLCBcImlzT3V0T2ZTY3JlZW5cIiwge1xuXG5cdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzT3V0T2ZTY3JlZW47XG5cdH1cbn0pIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQm9vc3RCYXIoKVxue1xuXHQvKipcblx0ICogQHR5cGUge3AzLkFzc2V0TWFuYWdlcn1cblx0ICovXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcblxuXG5cdFBJWEkuQ29udGFpbmVyLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEJvb3N0QmFyO1xuQm9vc3RCYXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xuQm9vc3RCYXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQm9vc3RCYXI7XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuQm9vc3RCYXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXG5cdHRoaXMuX2JnID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2NvcmVfcmFpbmJvd19ib3hcIikpO1xuXHQvLyB0aGlzLl9iZy5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDEuMiwgMS4yKTtcblx0dGhpcy5fYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX2JnKTtcblxuXHR0aGlzLl9iZy5fYmFyU3RhcnQgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzY29yZV9yYWluYm93X3RyaWFuZ2xlX2xlZnRcIikpO1xuXHR0aGlzLl9iZy5fYmFyU3RhcnQuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMCwgMC41KTtcblx0dGhpcy5fYmcuX2JhclN0YXJ0LnggPSAtdGhpcy5fYmcud2lkdGgvMiArIDEwO1xuXHR0aGlzLl9iZy5fYmFyU3RhcnQueSA9IC0wO1xuXHR0aGlzLl9iZy5fYmFyU3RhcnQudGludCA9IDB4OTk5OTk5O1xuXHR0aGlzLl9iZy5hZGRDaGlsZCh0aGlzLl9iZy5fYmFyU3RhcnQpO1xuXG5cdHRoaXMuX2JnLl9iYXIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzY29yZV9yYWluYm93X2ZpbGxcIikpO1xuXHR0aGlzLl9iZy5fYmFyLnRleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUO1xuXHR0aGlzLl9iZy5fYmFyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAsIDAuNSk7XG5cdHRoaXMuX2JnLl9iYXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgxLCAxKTtcblx0dGhpcy5fYmcuX2Jhci54ID0gdGhpcy5fYmcuX2JhclN0YXJ0LnggKyB0aGlzLl9iZy5fYmFyU3RhcnQud2lkdGggLSAwLjU7XG5cdHRoaXMuX2JnLl9iYXIueSA9IHRoaXMuX2JnLl9iYXJTdGFydC55O1xuXHR0aGlzLl9iZy5fYmFyLnRpbnQgPSAweDk5OTk5OTtcblx0dGhpcy5fYmcuYWRkQ2hpbGQodGhpcy5fYmcuX2Jhcik7XG5cblx0dGhpcy5fYmcuX2JhckVuZCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInNjb3JlX3JhaW5ib3dfdHJpYW5nbGVfcmlnaHRcIikpO1xuXHR0aGlzLl9iZy5fYmFyRW5kLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAsIDAuNSk7XG5cdHRoaXMuX2JnLl9iYXJFbmQueCA9IHRoaXMuX2JnLl9iYXIueCArIHRoaXMuX2JnLl9iYXIud2lkdGggLTE7XG5cdHRoaXMuX2JnLl9iYXJFbmQueSA9IC0wO1xuXHR0aGlzLl9iZy5fYmFyRW5kLnRpbnQgPSAweDk5OTk5OTtcblx0dGhpcy5fYmcuYWRkQ2hpbGQodGhpcy5fYmcuX2JhckVuZCk7XG5cblx0dGhpcy5fYmFyU3RhcnQgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzY29yZV9yYWluYm93X3RyaWFuZ2xlX2xlZnRcIikpO1xuXHR0aGlzLl9iYXJTdGFydC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLCAwLjUpO1xuXHR0aGlzLl9iYXJTdGFydC54ID0gdGhpcy5fYmcuX2JhclN0YXJ0Lng7XG5cdHRoaXMuX2JhclN0YXJ0LnkgPSB0aGlzLl9iZy5fYmFyU3RhcnQueTtcblx0dGhpcy5fYmFyU3RhcnQuYWxwaGEgPSAwO1xuXHR0aGlzLl9iZy5hZGRDaGlsZCh0aGlzLl9iYXJTdGFydCk7XG5cblx0dGhpcy5fYmFyID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2NvcmVfcmFpbmJvd19maWxsXCIpKTtcblx0dGhpcy5fYmFyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAsIDAuNSk7XG5cdHRoaXMuX2Jhci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDEpO1xuXHR0aGlzLl9iYXIueCA9IHRoaXMuX2JnLl9iYXIueDtcblx0dGhpcy5fYmFyLnkgPSB0aGlzLl9iZy5fYmFyLnk7XG5cdHRoaXMuX2JnLmFkZENoaWxkKHRoaXMuX2Jhcik7XG5cblx0dGhpcy5fYmFyRW5kID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2NvcmVfcmFpbmJvd190cmlhbmdsZV9yaWdodFwiKSk7XG5cdHRoaXMuX2JhckVuZC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLCAwLjUpO1xuXHR0aGlzLl9iYXJFbmQueCA9IHRoaXMuX2JnLl9iYXIueDtcblx0dGhpcy5fYmFyRW5kLnkgPSB0aGlzLl9iZy5fYmFyLnk7XG5cdHRoaXMuX2JhckVuZC5hbHBoYSA9IDA7XG5cdHRoaXMuX2JnLmFkZENoaWxkKHRoaXMuX2JhckVuZCk7XG5cblx0dGhpcy5fc3RhcnMgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzY29yZV9yYWluYm93X3N0YXJzXCIpKTtcblx0dGhpcy5fc3RhcnMuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHR0aGlzLl9zdGFycy54ID0gLXRoaXMuX2JnLndpZHRoLzIgKyAxNjAgKyB0aGlzLl9zdGFycy53aWR0aC8yO1xuXHR0aGlzLl9zdGFycy55ID0gLXRoaXMuX2JnLmhlaWdodC8yICsgLTEyICsgdGhpcy5fc3RhcnMuaGVpZ2h0LzI7XG5cdHRoaXMuX2JnLmFkZENoaWxkKHRoaXMuX3N0YXJzKTtcbn07XG5cbi8qKlxuICovXG5Cb29zdEJhci5wcm90b3R5cGUudXBkYXRlQm9vc3RNZXRlciA9IGZ1bmN0aW9uKHBlcmNlbnRhZ2UpXG57XG5cdHRoaXMuX2JhclN0YXJ0LmFscGhhID0gMTtcblx0dGhpcy5fYmFyRW5kLmFscGhhICAgPSAxO1xuXHR0aGlzLl9iYXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLjkgKiBNYXRoLm1pbigxLCBwZXJjZW50YWdlKSwgMSk7XG5cdHRoaXMuX2JhckVuZC54ID0gdGhpcy5fYmFyLnggKyB0aGlzLl9iYXIud2lkdGgtMTtcblxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0dGwudG8odGhpcy5fc3RhcnMuc2NhbGUsIDAuMSwge3g6IDEuMywgeTogMS4zLCBlYXNlOkV4cG8uZWFzZU91dH0sIDEpO1xuXHR0bC50byh0aGlzLl9zdGFycy5zY2FsZSwgMC4xLCB7eDogMSwgeTogMSwgZWFzZTpTaW5lLmVhc2VPdXR9KTtcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG59O1xuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb21tb24gICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XG52YXIgU2Nyb2xsZXJPYmplY3QgPSByZXF1aXJlKFwiLi4vc2Nyb2xsZXIvU2Nyb2xsZXJPYmplY3RcIik7XG52YXIgU291bmRTRlggICAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9Tb3VuZFNGWFwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDbG91ZCgpXG57XG5cdC8qKlxuXHQgKiBAdHlwZSB7UDMuTW92aWVDbGlwfVxuXHQgKi9cblx0dGhpcy5fc3ByaXRlID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHR0aGlzLl9oYXNCZWVuSGl0ID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqL1xuXHR0aGlzLl9zY2FsZVxuXG5cdFNjcm9sbGVyT2JqZWN0LmNhbGwodGhpcywgXCJjbG91ZFwiLCB0cnVlKTtcblxuXHR0aGlzLmNyZWF0ZSgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBDbG91ZDtcbkNsb3VkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2Nyb2xsZXJPYmplY3QucHJvdG90eXBlKTtcbkNsb3VkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENsb3VkO1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cbkNsb3VkLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbigpXG57XG5cdHZhciB0ZXh0dXJlQXJyID0gW107XG5cdHRleHR1cmVBcnIucHVzaCh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNsb3VkXCIpKTtcblxuXHR2YXIgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcblx0c2VxdWVuY2UuYWRkVGV4dHVyZXModGV4dHVyZUFycik7XG5cblx0dGhpcy5fcmFpbmJvdyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInJhaW5ib3cyX2JnXCIpKTtcblx0dGhpcy5fcmFpbmJvdy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDApO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3JhaW5ib3cpO1xuXHRcblx0dGhpcy5fc3ByaXRlID0gbmV3IHAzLk1vdmllQ2xpcChzZXF1ZW5jZSk7XG5cdHRoaXMuX3Nwcml0ZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDApO1xuXHR0aGlzLl9zcHJpdGUuZ290b0FuZFBsYXkocDMuVXRpbHMucmFuZG9tSW50KDAsIHRoaXMuX3Nwcml0ZS50b3RhbEZyYW1lcykpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XG5cblx0dGhpcy5yZXNldCgpO1xufVxuXG4vKipcbiAqL1xuQ2xvdWQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cbn07XG5cbi8qKlxuICovXG5DbG91ZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xuXHRTY3JvbGxlck9iamVjdC5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqL1xuQ2xvdWQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKVxue1xuXHRTY3JvbGxlck9iamVjdC5wcm90b3R5cGUucmVzZXQuY2FsbCh0aGlzKTtcblxuXHR0aGlzLl9zcHJpdGUueCA9IDA7XG5cdHRoaXMuX3Nwcml0ZS55ID0gMDtcblxuXHR0aGlzLl9oYXNCZWVuSGl0ID0gZmFsc2U7XG5cblx0dmFyIG5ld1Nwcml0ZSA9IHAzLlV0aWxzLnJhbmRvbUludCgwLCB0aGlzLl9zcHJpdGUudG90YWxGcmFtZXMpO1xuXHR0aGlzLl9zcHJpdGUuZ290b0FuZFN0b3AobmV3U3ByaXRlKTtcblxuXHR0aGlzLl9zY2FsZSA9IDAuODUgKyBNYXRoLnJhbmRvbSgpICogMC4zO1xuXHR0aGlzLl9zcHJpdGUuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCh0aGlzLl9zY2FsZSwgdGhpcy5fc2NhbGUpO1xuXG5cdHRoaXMuYXJlYVJlY3QgPSBuZXcgUElYSS5SZWN0YW5nbGUoLSh0aGlzLl9zcHJpdGUud2lkdGgpLzIgKyAxMCwgNDUsIHRoaXMuX3Nwcml0ZS53aWR0aCAtIDMwLCA1MCk7XG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IHRoaXMuYXJlYVJlY3QuY2xvbmUoKTtcblxuXG5cdGlmKCEhdGhpcy5fdGltZWxpbmUpIHRoaXMuX3RpbWVsaW5lLmNsZWFyKCk7XG5cdFxuXHR0aGlzLl90aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHR0aGlzLl90aW1lbGluZS50byh0aGlzLl9zcHJpdGUuc2NhbGUsIDEsIHt4OnRoaXMuX3NjYWxlICsgMC4xLCBlYXNlOlF1YWQuZWFzZUluT3V0LCB5b3lvOnRydWUsIHJlcGVhdDotMX0sIDApO1xuXHR0aGlzLl90aW1lbGluZS50byh0aGlzLl9zcHJpdGUuc2NhbGUsIDEsIHt5OnRoaXMuX3NjYWxlICsgMC4xLCBlYXNlOlF1YWQuZWFzZUluT3V0LCB5b3lvOnRydWUsIHJlcGVhdDotMX0sIE1hdGgucmFuZG9tKCkpO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRoaXMuX3RpbWVsaW5lKTtcblx0XG5cdHRoaXMuX3JhaW5ib3cueCA9IHRoaXMuX3Nwcml0ZS53aWR0aC8yIC0gMzA7XG5cdHRoaXMuX3JhaW5ib3cueSA9IDIwO1xuXHR0aGlzLl9yYWluYm93LnZpc2libGUgPSBmYWxzZTtcblxuXHQvLyBEZWJ1Z1xuXHQvLyB0aGlzLmRyYXdDb2xsaXNpb25SZWN0KCk7XG59O1xuXG4vKipcbiAqL1xuQ2xvdWQucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5faGFzQmVlbkhpdCA9IHRydWU7XG5cblx0dGhpcy5fdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0dGhpcy5fdGltZWxpbmUudG8odGhpcy5fc3ByaXRlLnNjYWxlLCAwLjIsIHt4OnRoaXMuX3NjYWxlICsgMC4yNSwgeTp0aGlzLl9zY2FsZSArIDAuMjUsIGVhc2U6QmFjay5lYXNlT3V0fSk7XG5cdHRoaXMuX3RpbWVsaW5lLnRvKHRoaXMuX3Nwcml0ZS5zY2FsZSwgMC40LCB7eDp0aGlzLl9zY2FsZSwgeTp0aGlzLl9zY2FsZSwgZWFzZTpTaW5lLmVhc2VPdXR9KTtcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0aGlzLl90aW1lbGluZSk7XG59XG5cbi8qKlxuICovXG5DbG91ZC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuLyoqXG4gKi9cbkNsb3VkLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG91ZC5wcm90b3R5cGUsIFwiaGFzQmVlbkhpdFwiLCB7XG5cblx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5faGFzQmVlbkhpdDtcblx0fVxufSk7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQ29tbW9uICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNjcm9sbGVyT2JqZWN0ID0gcmVxdWlyZShcIi4uL3Njcm9sbGVyL1Njcm9sbGVyT2JqZWN0XCIpO1xudmFyIFNvdW5kU0ZYICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU291bmRTRlhcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRW5lbXkoKVxue1xuXHQvKipcblx0ICogQHR5cGUge1AzLk1vdmllQ2xpcH1cblx0ICovXG5cdHRoaXMuX3Nwcml0ZSA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0dGhpcy5faGFzQmVlbkhpdCA9IGZhbHNlO1xuXG5cdFNjcm9sbGVyT2JqZWN0LmNhbGwodGhpcywgXCJlbmVteVwiLCB0cnVlKTtcblxuXHR0aGlzLmNyZWF0ZSgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFbmVteTtcbkVuZW15LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2Nyb2xsZXJPYmplY3QucHJvdG90eXBlKTtcbkVuZW15LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVuZW15O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cbkVuZW15LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuX2NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX2NvbnRhaW5lcik7XG5cblx0Ly8gU3RyaW5nXG5cdHZhciBzZXF1ZW5jZSA9IG5ldyBwMy5Nb3ZpZUNsaXBTZXF1ZW5jZSgpO1xuXHRzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJiYWxsb29uX3RocmVhZDAxXCIpXSk7XG5cblx0dGhpcy5fc3RyaW5nID0gbmV3IHAzLk1vdmllQ2xpcChzZXF1ZW5jZSk7XG5cdHRoaXMuX3N0cmluZy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDApO1xuXHR0aGlzLl9zdHJpbmcuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgxLCAwLjUpO1xuXHR0aGlzLl9zdHJpbmcueSArPSA0Mztcblx0Ly8gdGhpcy5fc3RyaW5nLmdvdG9BbmRQbGF5KDApO1xuXHR0aGlzLl9zdHJpbmcuYW5pbWF0aW9uU3BlZWQgPSB0aGlzLl9zdHJpbmcudG90YWxGcmFtZXMvMTtcblx0dGhpcy5fc3RyaW5nLmxvb3BpbmcgPSB0cnVlO1xuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fc3RyaW5nKTtcblx0XG5cdC8vIEJhbGxvb25cblx0dmFyIHNlcXVlbmNlID0gbmV3IHAzLk1vdmllQ2xpcFNlcXVlbmNlKCk7XG5cdHNlcXVlbmNlLmFkZFRleHR1cmVzKFt0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJhbGxvb24wMVwiKV0pO1xuXG5cdHRoaXMuX3Nwcml0ZSA9IG5ldyBwMy5Nb3ZpZUNsaXAoc2VxdWVuY2UpO1xuXHR0aGlzLl9zcHJpdGUuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHR0aGlzLl9zcHJpdGUuZ290b0FuZFBsYXkocDMuVXRpbHMucmFuZG9tSW50KDAsIHRoaXMuX3Nwcml0ZS50b3RhbEZyYW1lcykpO1xuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fc3ByaXRlKTtcblxuXHQvLyBQYXJ0aWNsZXNcblx0dGhpcy5faGl0UFMgICAgICA9IG5ldyBjbG91ZGtpZC5FbWl0dGVyKHRoaXMsIFt0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInN0YXJfcGFydFwiKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJkb3RfcGFydGljbGVcIildLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImF2YXRhckhpdF9wc1wiKSk7XG5cdHRoaXMuX2hpdFBTLmVtaXQgPSBmYWxzZTtcblx0XG5cdHRoaXMuX2JvbWJQUyA9IG5ldyBjbG91ZGtpZC5FbWl0dGVyKHRoaXMuX2NvbnRhaW5lciwgW3RoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZG90X3BhcnRpY2xlXCIpXSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJib21iTGl0ZV9wc1wiKSk7XG5cdHRoaXMuX2JvbWJQUy5lbWl0ID0gdHJ1ZTtcblx0XG5cdHRoaXMucmVzZXQoKTtcbn1cblxuLyoqXG4gKi9cbkVuZW15LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuXG59O1xuXG4vKipcbiAqL1xuRW5lbXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblx0U2Nyb2xsZXJPYmplY3QucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuXG5cdC8vIFBhcnRpY2xlc1xuXHR0aGlzLl9oaXRQUy51cGRhdGUocDMuVGltZXN0ZXAuZGVsdGFUaW1lKTtcblx0dGhpcy5fYm9tYlBTLnVwZGF0ZShwMy5UaW1lc3RlcC5kZWx0YVRpbWUpO1xufTtcblxuLyoqXG4gKi9cbkVuZW15LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcbntcblx0U2Nyb2xsZXJPYmplY3QucHJvdG90eXBlLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0dGhpcy5fY29udGFpbmVyLnggPSAwO1xuXHR0aGlzLl9jb250YWluZXIueSA9IDA7XG5cdHRoaXMuX2NvbnRhaW5lci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDEsMSk7XG5cdHRoaXMuX2NvbnRhaW5lci5hbHBoYSA9IDE7XG5cdHRoaXMuX2hhc0JlZW5IaXQgPSBmYWxzZTtcblx0dGhpcy5fYm9tYlBTLmVtaXQgPSB0cnVlO1xuXG5cdHZhciBuZXdTcHJpdGUgPSBwMy5VdGlscy5yYW5kb21JbnQoMCwgdGhpcy5fc3ByaXRlLnRvdGFsRnJhbWVzKTtcblx0dGhpcy5fc3ByaXRlLmdvdG9BbmRTdG9wKG5ld1Nwcml0ZSk7XG5cblx0dGhpcy5hcmVhUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSgtKHRoaXMuX3Nwcml0ZS53aWR0aCkvMiArIDE1LCAtKHRoaXMuX3Nwcml0ZS5oZWlnaHQpLzIgKyA0MCwgdGhpcy5fc3ByaXRlLndpZHRoIC0gMzAsIHRoaXMuX3Nwcml0ZS5oZWlnaHQgLSAyNSk7XG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IHRoaXMuYXJlYVJlY3QuY2xvbmUoKTtcblxuXHRpZighIXRoaXMuX3RpbWVsaW5lKSB0aGlzLl90aW1lbGluZS5jbGVhcigpO1xuXG5cdHRoaXMuX3RpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cdHRoaXMuX3RpbWVsaW5lLnRvKHRoaXMuX2NvbnRhaW5lci5zY2FsZSwgMC41LCB7eDouOSwgeTouOSwgZWFzZTpTaW5lLmVhc2VJbk91dCwgeW95bzp0cnVlLCByZXBlYXQ6LTF9LCAwKTtcblx0dGhpcy5fdGltZWxpbmUudG8odGhpcy5fY29udGFpbmVyLCAxLCB7eTogMTAgLCBlYXNlOlNpbmUuZWFzZUluT3V0LCB5b3lvOnRydWUsIHJlcGVhdDotMX0sIE1hdGgucmFuZG9tKCkpO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRoaXMuX3RpbWVsaW5lKTtcblxuXG5cdC8vIERlYnVnXG5cdC8vIHRoaXMuZHJhd0NvbGxpc2lvblJlY3QoKTtcbn07XG5cbi8qKlxuICovXG5FbmVteS5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24oKVxue1xuXHRpZih0aGlzLl9oYXNCZWVuSGl0KSByZXR1cm47XG5cblx0dGhpcy5faGFzQmVlbkhpdCA9IHRydWU7XG5cdHRoaXMuX2JvbWJQUy5lbWl0ID0gZmFsc2U7XG5cblx0dGhpcy5fdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0dGhpcy5fdGltZWxpbmUudG8odGhpcy5fY29udGFpbmVyLCAwLjIsIHthbHBoYTowLCBlYXNlOkxpbmVhci5lYXNlT3V0fSwgMCk7XG5cdHRoaXMuX3RpbWVsaW5lLnRvKHRoaXMuX2NvbnRhaW5lci5zY2FsZSwgMC4yLCB7eDozLCB5OjMsIGVhc2U6TGluZWFyLmVhc2VPdXR9LCAwKTtcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0aGlzLl90aW1lbGluZSk7XG5cblx0dGhpcy5faGl0UFMuZW1pdCA9IHRydWU7XG59XG5cbi8qKlxuICovXG5FbmVteS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuLyoqXG4gKi9cbkVuZW15LnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbmVteS5wcm90b3R5cGUsIFwiaGFzQmVlbkhpdFwiLCB7XG5cblx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5faGFzQmVlbkhpdDtcblx0fVxufSk7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQ29tbW9uICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNjcm9sbGVyT2JqZWN0ID0gcmVxdWlyZShcIi4uL3Njcm9sbGVyL1Njcm9sbGVyT2JqZWN0XCIpO1xudmFyIFNvdW5kU0ZYICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU291bmRTRlhcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGlja3VwKClcbntcblx0LyoqXG5cdCAqIEB0eXBlIHtQMy5Nb3ZpZUNsaXB9XG5cdCAqL1xuXHR0aGlzLl9zcHJpdGUgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdHRoaXMuX2hhc0JlZW5IaXQgPSBmYWxzZTtcblxuXHRTY3JvbGxlck9iamVjdC5jYWxsKHRoaXMsIFwicGlja3VwXCIsIHRydWUpO1xuXG5cdHRoaXMuY3JlYXRlKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFBpY2t1cDtcblBpY2t1cC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZSk7XG5QaWNrdXAucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGlja3VwO1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblBpY2t1cC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oKVxue1xuXHR2YXIgdGV4dHVyZUFyciA9IFtdO1xuXHR0ZXh0dXJlQXJyLnB1c2godGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwaWNrdXBcIikpO1xuXG5cdHZhciBzZXF1ZW5jZSA9IG5ldyBwMy5Nb3ZpZUNsaXBTZXF1ZW5jZSgpO1xuXHRzZXF1ZW5jZS5hZGRUZXh0dXJlcyh0ZXh0dXJlQXJyKTtcblxuXHR0aGlzLl9zcHJpdGUgPSBuZXcgcDMuTW92aWVDbGlwKHNlcXVlbmNlKTtcblx0dGhpcy5fc3ByaXRlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcblx0dGhpcy5fc3ByaXRlLmdvdG9BbmRQbGF5KHAzLlV0aWxzLnJhbmRvbUludCgwLCB0aGlzLl9zcHJpdGUudG90YWxGcmFtZXMpKTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xuXG5cdHRoaXMucmVzZXQoKTtcbn1cblxuLyoqXG4gKi9cblBpY2t1cC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcblxufTtcblxuLyoqXG4gKi9cblBpY2t1cC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xuXHRTY3JvbGxlck9iamVjdC5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqL1xuUGlja3VwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcbntcblx0U2Nyb2xsZXJPYmplY3QucHJvdG90eXBlLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0dGhpcy5fc3ByaXRlLnggPSAwO1xuXHR0aGlzLl9zcHJpdGUueSA9IDA7XG5cdHRoaXMuX3Nwcml0ZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDEsMSk7XG5cdHRoaXMuX3Nwcml0ZS5hbHBoYSA9IDE7XG5cdHRoaXMuX2hhc0JlZW5IaXQgPSBmYWxzZTtcblxuXHR2YXIgbmV3U3ByaXRlID0gcDMuVXRpbHMucmFuZG9tSW50KDAsIHRoaXMuX3Nwcml0ZS50b3RhbEZyYW1lcyk7XG5cdHRoaXMuX3Nwcml0ZS5nb3RvQW5kU3RvcChuZXdTcHJpdGUpO1xuXG5cdHRoaXMuYXJlYVJlY3QgPSBuZXcgUElYSS5SZWN0YW5nbGUoLSh0aGlzLl9zcHJpdGUud2lkdGgpLzIgKyAxNSwgLSh0aGlzLl9zcHJpdGUuaGVpZ2h0KS8yICsgMTUsIHRoaXMuX3Nwcml0ZS53aWR0aCAtIDMwLCB0aGlzLl9zcHJpdGUuaGVpZ2h0IC0gMzAgKyAxMDApO1xuXHR0aGlzLmNvbGxpc2lvblJlY3QgPSB0aGlzLmFyZWFSZWN0LmNsb25lKCk7XG5cblx0aWYoISF0aGlzLl90aW1lbGluZSlcblx0e1xuXHRcdHRoaXMuX3RpbWVsaW5lLmNsZWFyKCk7XG5cdFx0Q29tbW9uLmFuaW1hdG9yLnJlbW92ZSh0aGlzLl90aW1lbGluZSk7XG5cdH1cblxuXHR0aGlzLl90aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHR0aGlzLl90aW1lbGluZS50byh0aGlzLl9zcHJpdGUuc2NhbGUsIDAuNSwge3g6LjksIHk6LjksIGVhc2U6U2luZS5lYXNlSW5PdXQsIHlveW86dHJ1ZSwgcmVwZWF0Oi0xfSwgMCk7XG5cdHRoaXMuX3RpbWVsaW5lLnRvKHRoaXMuX3Nwcml0ZSwgMSwge3k6NTAsIGVhc2U6U2luZS5lYXNlSW5PdXQsIHlveW86dHJ1ZSwgcmVwZWF0Oi0xfSwgTWF0aC5yYW5kb20oKSk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQodGhpcy5fdGltZWxpbmUpO1xuXG5cblx0Ly8gRGVidWdcblx0Ly8gdGhpcy5kcmF3Q29sbGlzaW9uUmVjdCgpO1xufTtcblxuLyoqXG4gKi9cblBpY2t1cC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24oKVxue1xuXHRpZih0aGlzLl9oYXNCZWVuSGl0KSByZXR1cm47XG5cblx0dGhpcy5faGFzQmVlbkhpdCA9IHRydWU7XG5cdFxuXHR0aGlzLl90aW1lbGluZS5jbGVhcigpO1xuXHR0aGlzLl90aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHR0aGlzLl90aW1lbGluZS50byh0aGlzLl9zcHJpdGUsIDAuMSwge2FscGhhOjAsIGVhc2U6TGluZWFyLmVhc2VPdXR9LCAwKTtcblx0dGhpcy5fdGltZWxpbmUudG8odGhpcy5fc3ByaXRlLnNjYWxlLCAwLjEsIHt4OjEuNzUsIHk6MS43NSwgZWFzZTpMaW5lYXIuZWFzZU91dH0sIDApO1xufVxuXG4vKipcbiAqL1xuUGlja3VwLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vKipcbiAqL1xuUGlja3VwLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQaWNrdXAucHJvdG90eXBlLCBcImhhc0JlZW5IaXRcIiwge1xuXG5cdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2hhc0JlZW5IaXQ7XG5cdH1cbn0pO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCJ2YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxudmFyIFNjcm9sbGVyT2JqZWN0ICA9IHJlcXVpcmUoXCIuLi9zY3JvbGxlci9TY3JvbGxlck9iamVjdFwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7IU51bWJlcn0gZW5lbXlUeXBlXHJcbiAqL1xyXG5mdW5jdGlvbiBQaWNrdXBQYXJ0aWNsZUhvbGRlcih4LCB5KVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7cDMuT2JqZWN0UG9vbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fcG9vbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8U2Nyb2xsZXJPYmplY3Q+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9vYmplY3RzID0gbnVsbDtcclxuXHJcblx0dGhpcy5fdGFyZ2V0WCA9IHg7XHJcblx0dGhpcy5fdGFyZ2V0WSA9IHk7XHJcblxyXG5cdFNjcm9sbGVyT2JqZWN0LmNhbGwodGhpcywgXCJQaWNrdXBQYXJ0aWNsZUhvbGRlclwiLCBmYWxzZSk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBQaWNrdXBQYXJ0aWNsZUhvbGRlcjtcclxuUGlja3VwUGFydGljbGVIb2xkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTY3JvbGxlck9iamVjdC5wcm90b3R5cGUpO1xyXG5QaWNrdXBQYXJ0aWNsZUhvbGRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQaWNrdXBQYXJ0aWNsZUhvbGRlcjtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqL1xyXG5QaWNrdXBQYXJ0aWNsZUhvbGRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuX3Bvb2wgPSBuZXcgcDMuT2JqZWN0UG9vbChQSVhJLlNwcml0ZSwgMiwgW3RoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic3RhcjJfcGFydFwiKV0pO1xyXG5cdHRoaXMuX29iamVjdHMgPSBbXTtcclxuXHR0aGlzLmFyZWFSZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIDAsIDApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5QaWNrdXBQYXJ0aWNsZUhvbGRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0U2Nyb2xsZXJPYmplY3QucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG5cclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fb2JqZWN0cy5sZW5ndGg7IGkrKylcclxuXHR7XHJcblxyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1Njcm9sbGVyT2JqZWN0fSBvYmpcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1pblNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhTY2FsZVxyXG4gKi9cclxuUGlja3VwUGFydGljbGVIb2xkZXIucHJvdG90eXBlLmFkZE9iamVjdCA9IGZ1bmN0aW9uKHgsIHksIGRlbGF5KVxyXG57XHJcblx0dmFyIHBhcnRpY2xlID0gdGhpcy5fcG9vbC5jcmVhdGUoKTtcclxuXHJcblx0aWYocGFydGljbGUgPT0gbnVsbClcclxuXHR7XHJcblx0XHR0aGlzLl9wb29sLmV4cGFuZCgyKTtcclxuXHRcdHBhcnRpY2xlID0gdGhpcy5fcG9vbC5jcmVhdGUoKTtcclxuXHR9XHJcblxyXG5cdHZhciBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcblx0dmFyIHJhZGl1cyA9IDM1O1xyXG5cdFxyXG5cdHBhcnRpY2xlLnggPSB4ICsgTWF0aC5jb3MoYW5nbGUgKiBQSVhJLkRFR19UT19SQUQpICogcmFkaXVzO1xyXG5cdHBhcnRpY2xlLnkgPSB5ICsgTWF0aC5zaW4oYW5nbGUgKiBQSVhJLkRFR19UT19SQUQpICogcmFkaXVzO1xyXG5cdHBhcnRpY2xlLmFscGhhID0gMDtcclxuXHRwYXJ0aWNsZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcclxuXHRwYXJ0aWNsZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcblx0cGFydGljbGUucm90YXRpb24gPSAwO1xyXG5cdHRoaXMuYWRkQ2hpbGQocGFydGljbGUpO1xyXG5cdHRoaXMuX29iamVjdHMucHVzaCh7b2JqOnBhcnRpY2xlfSk7XHJcblxyXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heChcclxuXHR7XHJcblx0XHRvbkNvbXBsZXRlOiBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucmVtb3ZlT2JqZWN0KHBhcnRpY2xlKTtcclxuXHJcblx0XHR9LFxyXG5cdFx0b25Db21wbGV0ZVNjb3BlOiB0aGlzXHJcblx0fSk7XHJcblxyXG5cdHZhciBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcblx0dmFyIHJhZGl1cyA9IDIwO1xyXG5cdHRsLnRvKHBhcnRpY2xlLCAxICsgZGVsYXksIHt4OiB0aGlzLl90YXJnZXRYICsgTWF0aC5jb3MoYW5nbGUgKiBQSVhJLkRFR19UT19SQUQpICogcmFkaXVzLCAgeTogdGhpcy5fdGFyZ2V0WSArIE1hdGguc2luKGFuZ2xlICogUElYSS5ERUdfVE9fUkFEKSAqIHJhZGl1cywgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xyXG5cdHRsLnRvKHBhcnRpY2xlLCAwLjI1KyBkZWxheSwge2FscGhhOjEsIGVhc2U6UXVhZC5lYXNlT3V0fSwgMCk7XHJcblx0dGwudG8ocGFydGljbGUsIDAuMjUsIHthbHBoYTowLCBlYXNlOlF1YWQuZWFzZU91dH0sIDEgKyBkZWxheSk7XHJcblx0dGwudG8ocGFydGljbGUuc2NhbGUsIDEgKyBkZWxheSwge3g6MS4yNSwgeToxLjI1LCBlYXNlOlNpbmUuZWFzZU91dH0sIDApO1xyXG5cdHRsLnRvKHBhcnRpY2xlLCAxKyBkZWxheSwge3JvdGF0aW9uOjM2MCAqIFBJWEkuREVHX1RPX1JBRCwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9LCAwKTtcclxuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcclxuXHJcblx0cmV0dXJuIHRoaXMuX29iamVjdHNbdGhpcy5fb2JqZWN0cy5sZW5ndGgtMV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuUGlja3VwUGFydGljbGVIb2xkZXIucHJvdG90eXBlLnJlbW92ZU9iamVjdCA9IGZ1bmN0aW9uKG9iailcclxue1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9vYmplY3RzLmxlbmd0aDsgaSsrKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMuX29iamVjdHNbaV0ub2JqID09IG9iailcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZCh0aGlzLl9vYmplY3RzW2ldLm9iaik7XHJcblx0XHRcdHRoaXMuX3Bvb2wuZnJlZSh0aGlzLl9vYmplY3RzW2ldLm9iaik7XHJcblx0XHRcdHRoaXMuX29iamVjdHMuc3BsaWNlKGksIDEpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQ29tbW9uICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNjcm9sbGVyT2JqZWN0ID0gcmVxdWlyZShcIi4uL3Njcm9sbGVyL1Njcm9sbGVyT2JqZWN0XCIpO1xudmFyIFNvdW5kU0ZYICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU291bmRTRlhcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmFpbmJvd1RhaWwoKVxue1xuXHR0aGlzLl9zZWdtZW50Q291bnQgICAgICAgICAgPSBwMy5EZXZpY2UuaXNNb2JpbGUgPyAyMCA6IDMwO1xuXHR0aGlzLl9zZWdtZW50TGVuZ3RoICAgICAgICAgPSAxMDtcblx0dGhpcy5fcmFpbmJvd0NvbG9ycyAgICAgICAgID0gWzB4NjkyRDg2LCAweDE5QkVEMywgMHhFOTE1NzUsIDB4RjVEMzBELCAweDZBQkQ0Nl07XG5cdHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcyA9IDE1O1xuXHR0aGlzLl9zZWdtZW50cyAgICAgICAgICAgICAgPSBbXTtcblx0dGhpcy5fcG9zaXRpb25zICAgICAgICAgICAgID0gW107XG5cblx0U2Nyb2xsZXJPYmplY3QuY2FsbCh0aGlzLCBcInJhaW5ib3dUYWlsXCIsIHRydWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBSYWluYm93VGFpbDtcblJhaW5ib3dUYWlsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2Nyb2xsZXJPYmplY3QucHJvdG90eXBlKTtcblJhaW5ib3dUYWlsLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJhaW5ib3dUYWlsO1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblJhaW5ib3dUYWlsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXI7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fY29udGFpbmVyKTtcblxuXHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VnbWVudENvdW50ICsgMTsgaSsrKVxuXHR7XG5cdFx0dGhpcy5fcG9zaXRpb25zW2ldID0ge3g6MCwgeTowfTtcblx0fVxuXG5cdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWdtZW50Q291bnQ7IGkrKylcblx0e1xuXHRcdHRoaXMuX3NlZ21lbnRzW2ldID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblx0XHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fc2VnbWVudHNbaV0pO1xuXHR9XG5cblx0dGhpcy5hcmVhUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSgtMSwtMSwyLDIpO1xufTtcblxuXG4vKipcbiAqL1xuUmFpbmJvd1RhaWwucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcbn1cblxuLyoqXG4gKi9cblJhaW5ib3dUYWlsLnByb3RvdHlwZS5mb2xsb3cgPSBmdW5jdGlvbih0YXJnZXQsIHNjcm9sbGluZ1NwZWVkKVxue1xuXHR0aGlzLl9wb3NpdGlvbnNbMF0ueCA9IHRhcmdldC54IDtcblx0dGhpcy5fcG9zaXRpb25zWzBdLnkgPSB0YXJnZXQueSA7XG5cblx0Zm9yKHZhciBpID0gMTsgaSA8IHRoaXMuX3NlZ21lbnRDb3VudCsxOyBpKyspXG5cdHtcblx0XHRpZih0aGlzLl9wb3NpdGlvbnNbaV0ueCA9PSAwICYmIHRoaXMuX3Bvc2l0aW9uc1tpXS55ID09IDApXG5cdFx0e1xuXHRcdFx0dGhpcy5fcG9zaXRpb25zW2ldLnggPSB0YXJnZXQueDtcblx0XHRcdHRoaXMuX3Bvc2l0aW9uc1tpXS55ID0gdGFyZ2V0LnlcdDtcblx0XHR9XG5cblx0XHR0aGlzLl9wb3NpdGlvbnNbaV0ueCAtPSBzY3JvbGxpbmdTcGVlZDtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLl9wb3NpdGlvbnNbaV0ueCAtIHRoaXMuX3Bvc2l0aW9uc1tpLTFdLngsIDIpICsgTWF0aC5wb3codGhpcy5fcG9zaXRpb25zW2ldLnkgLSB0aGlzLl9wb3NpdGlvbnNbaS0xXS55LCAyKSk7XG5cblx0XHRpZihkaXN0YW5jZSA+IHRoaXMuX3NlZ21lbnRMZW5ndGgpXG5cdFx0e1xuXHRcdFx0dmFyIGRYID0gdGhpcy5fcG9zaXRpb25zW2ktMV0ueCAtIHRoaXMuX3Bvc2l0aW9uc1tpXS54O1xuXHRcdFx0dmFyIGRZID0gdGhpcy5fcG9zaXRpb25zW2ktMV0ueSAtIHRoaXMuX3Bvc2l0aW9uc1tpXS55O1xuXG5cdFx0XHR0aGlzLl9wb3NpdGlvbnNbaV0ueCA9IHRoaXMuX3Bvc2l0aW9uc1tpLTFdLnggLSBkWCAqIHRoaXMuX3NlZ21lbnRMZW5ndGgvZGlzdGFuY2U7XG5cdFx0XHR0aGlzLl9wb3NpdGlvbnNbaV0ueSA9IHRoaXMuX3Bvc2l0aW9uc1tpLTFdLnkgLSBkWSAqIHRoaXMuX3NlZ21lbnRMZW5ndGgvZGlzdGFuY2U7XG5cdFx0fVxuXHR9XG5cblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlZ21lbnRDb3VudDsgaSsrKVxuXHR7XG5cdFx0dGhpcy5fc2VnbWVudHNbaV0uY2xlYXIoKTtcblxuXHRcdGZvcih2YXIgYyA9IDA7IGMgPCB0aGlzLl9yYWluYm93Q29sb3JzLmxlbmd0aDsgYysrKVxuXHRcdHtcblx0XHRcdGlmKHRoaXMuX3Bvc2l0aW9uc1tpXS54ID09IHRoaXMuX3Bvc2l0aW9uc1tpKzFdLnggJiYgdGhpcy5fcG9zaXRpb25zW2ldLnkgPT0gdGhpcy5fcG9zaXRpb25zW2krMV0ueSkgY29udGludWU7XG5cblx0XHRcdC8vIEdldCBwcmV2aW91cyBzZWdtZW50IHBlcnBlbmRpY3VsYXIgdmVjdG9yICg5MMKwIGlmIHRoZSBmaXJzdClcblx0XHRcdHZhciBwZXJwMSA9IG5ldyBQSVhJLlBvaW50KDAsIDEpO1xuXHRcdFx0aWYoaSAhPSAwKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgdiA9IG5ldyBQSVhJLlBvaW50KHRoaXMuX3Bvc2l0aW9uc1tpXS54IC0gdGhpcy5fcG9zaXRpb25zW2ktMV0ueCwgdGhpcy5fcG9zaXRpb25zW2ldLnkgLSB0aGlzLl9wb3NpdGlvbnNbaS0xXS55KTtcblxuXHRcdFx0XHRwZXJwMSA9IG5ldyBQSVhJLlBvaW50KHYueSwgLXYueCk7XG5cdFx0XHRcdHZhciBwZXJwMUxlbmd0aCA9IE1hdGguc3FydCh2LnggKiB2LnggKyB2LnkgKiB2LnkpO1xuXHRcdFx0XHRwZXJwMS54IC89IHBlcnAxTGVuZ3RoO1xuXHRcdFx0XHRwZXJwMS55IC89IHBlcnAxTGVuZ3RoO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHZXQgY3VycmVudCBzZWdtZW50J3MgcGVycGVuZGljdWxhciB2ZWN0b3Jcblx0XHRcdHZhciB2ID0gbmV3IFBJWEkuUG9pbnQodGhpcy5fcG9zaXRpb25zW2krMV0ueCAtIHRoaXMuX3Bvc2l0aW9uc1tpXS54LCB0aGlzLl9wb3NpdGlvbnNbaSsxXS55IC0gdGhpcy5fcG9zaXRpb25zW2ldLnkpO1xuXHRcdFx0dmFyIHBlcnAyICAgICAgID0gbmV3IFBJWEkuUG9pbnQodi55LCAtdi54KTtcblx0XHRcdHZhciBwZXJwMkxlbmd0aCA9IE1hdGguc3FydCh2LnggKiB2LnggKyB2LnkgKiB2LnkpO1xuXHRcdFx0cGVycDIueCAvPSBwZXJwMkxlbmd0aDtcblx0XHRcdHBlcnAyLnkgLz0gcGVycDJMZW5ndGg7XG5cblx0XHRcdC8vIERyYXcgc2VnbWVudFxuXHRcdFx0Ly8gdGhpcy5fc2VnbWVudHNbaV0ubGluZVN0eWxlKDEsIHRoaXMuX3JhaW5ib3dDb2xvcnNbY10sIDEpOyAvLyBkZWJ1Z1xuXHRcdFx0dGhpcy5fc2VnbWVudHNbaV0uYmVnaW5GaWxsKHRoaXMuX3JhaW5ib3dDb2xvcnNbY10sIDEgLSBpL3RoaXMuX3NlZ21lbnRDb3VudCk7XG5cdFx0XHR0aGlzLl9zZWdtZW50c1tpXS5tb3ZlVG8odGhpcy5fcG9zaXRpb25zW2ldLnggICArIHBlcnAxLnggKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MvMiArIHBlcnAxLnggKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MgKiAoLSh0aGlzLl9yYWluYm93Q29sb3JzLmxlbmd0aC0xKS8yICsgYyksXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2ldLnkgICArIHBlcnAxLnkgKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MvMiArIHBlcnAxLnkgKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MgKiAoLSh0aGlzLl9yYWluYm93Q29sb3JzLmxlbmd0aC0xKS8yICsgYykpO1xuXHRcdFx0dGhpcy5fc2VnbWVudHNbaV0ubGluZVRvKHRoaXMuX3Bvc2l0aW9uc1tpXS54ICAgLSBwZXJwMS54ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzLzIgKyBwZXJwMS54ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzICogKC0odGhpcy5fcmFpbmJvd0NvbG9ycy5sZW5ndGgtMSkvMiArIGMpLFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uc1tpXS55ICAgLSBwZXJwMS55ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzLzIgKyBwZXJwMS55ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzICogKC0odGhpcy5fcmFpbmJvd0NvbG9ycy5sZW5ndGgtMSkvMiArIGMpKTtcblx0XHRcdHRoaXMuX3NlZ21lbnRzW2ldLmxpbmVUbyh0aGlzLl9wb3NpdGlvbnNbaSsxXS54ICsgcGVycDIueCAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcy8yICsgcGVycDIueCAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcyAqICgtKHRoaXMuX3JhaW5ib3dDb2xvcnMubGVuZ3RoLTEpLzIgKyBjKSxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3NpdGlvbnNbaSsxXS55ICsgcGVycDIueSAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcy8yICsgcGVycDIueSAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcyAqICgtKHRoaXMuX3JhaW5ib3dDb2xvcnMubGVuZ3RoLTEpLzIgKyBjKSk7XG5cblx0XHRcdHRoaXMuX3NlZ21lbnRzW2ldLm1vdmVUbyh0aGlzLl9wb3NpdGlvbnNbaSsxXS54IC0gcGVycDIueCAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcy8yICsgcGVycDIueCAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcyAqICgtKHRoaXMuX3JhaW5ib3dDb2xvcnMubGVuZ3RoLTEpLzIgKyBjKSxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3NpdGlvbnNbaSsxXS55IC0gcGVycDIueSAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcy8yICsgcGVycDIueSAqIHRoaXMuX3JhaW5ib3dDb2xvclRoaWNrbmVzcyAqICgtKHRoaXMuX3JhaW5ib3dDb2xvcnMubGVuZ3RoLTEpLzIgKyBjKSk7XG5cdFx0XHR0aGlzLl9zZWdtZW50c1tpXS5saW5lVG8odGhpcy5fcG9zaXRpb25zW2ldLnggICAtIHBlcnAxLnggKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MvMiArIHBlcnAxLnggKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MgKiAoLSh0aGlzLl9yYWluYm93Q29sb3JzLmxlbmd0aC0xKS8yICsgYyksXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2ldLnkgICAtIHBlcnAxLnkgKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MvMiArIHBlcnAxLnkgKiB0aGlzLl9yYWluYm93Q29sb3JUaGlja25lc3MgKiAoLSh0aGlzLl9yYWluYm93Q29sb3JzLmxlbmd0aC0xKS8yICsgYykpO1xuXHRcdFx0dGhpcy5fc2VnbWVudHNbaV0ubGluZVRvKHRoaXMuX3Bvc2l0aW9uc1tpKzFdLnggKyBwZXJwMi54ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzLzIgKyBwZXJwMi54ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzICogKC0odGhpcy5fcmFpbmJvd0NvbG9ycy5sZW5ndGgtMSkvMiArIGMpLFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uc1tpKzFdLnkgKyBwZXJwMi55ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzLzIgKyBwZXJwMi55ICogdGhpcy5fcmFpbmJvd0NvbG9yVGhpY2tuZXNzICogKC0odGhpcy5fcmFpbmJvd0NvbG9ycy5sZW5ndGgtMSkvMiArIGMpKTtcblx0XHRcdHRoaXMuX3NlZ21lbnRzW2ldLmVuZEZpbGwoKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICovXG5SYWluYm93VGFpbC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuLyoqXG4gKi9cblJhaW5ib3dUYWlsLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2NvcmVDb3VudGVyKClcbntcblx0LyoqXG5cdCAqIEB0eXBlIHtwMy5Bc3NldE1hbmFnZXJ9XG5cdCAqL1xuXHR0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtwMy5CaXRtYXBUZXh0fVxuXHQgKi9cblx0dGhpcy5fdGV4dCA9IG51bGw7XG5cblxuXHRQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBTY29yZUNvdW50ZXI7XG5TY29yZUNvdW50ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xuU2NvcmVDb3VudGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjb3JlQ291bnRlcjtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5TY29yZUNvdW50ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdC8vIHRoaXMuX3RleHQgPSBuZXcgcDMuQml0bWFwVGV4dChcIlwiLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0Rm9udEF0bGFzKFwic2NvcmVcIiksIHAzLkJpdG1hcFRleHQuQUxJR05fTEVGVCwgMHhGRkZGMDApO1xuXHR0aGlzLl90ZXh0ID0gbmV3IFBJWEkuVGV4dChcIlwiLCB7Zm9udDogXCI2NHB4IEdyaWxsZWRDaGVlc2VCVE4tUmVndWxhclwiLCBmaWxsOiAweEVDNDM5OSwgYWxpZ246IFwiY2VudGVyXCIsIHN0cm9rZTogMHhmZmZmZmYsIHN0cm9rZVRoaWNrbmVzczogMTIsIGxpbmVKb2luOiAncm91bmQnfSk7XG5cdHRoaXMuX3RleHQueSA9IC00Mjtcblx0dGhpcy5fdGV4dC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNywgMC43KTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl90ZXh0KTtcbn07XG5cbi8qKlxuICovXG5TY29yZUNvdW50ZXIucHJvdG90eXBlLnVwZGF0ZVNjb3JlID0gZnVuY3Rpb24obmV3U2NvcmUpXG57XG5cdHRoaXMuX3RleHQudGV4dCA9IG5ld1Njb3JlLnRvU3RyaW5nKCk7XG59O1xuXG4vKipcbiAqL1xuU2NvcmVDb3VudGVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vKipcbiAqL1xuU2NvcmVDb3VudGVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxudmFyIFNvdW5kU0ZYICAgICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL1NvdW5kU0ZYXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIE5leHRCdXR0b24oYnV0dG9uU3RyaW5nLCBkZWxheSlcclxue1xyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge3AzLkFzc2V0TWFuYWdlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtzaWduYWxzLlNpZ25hbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zaWduYWxzID0ge307XHJcblx0dGhpcy5zaWduYWxzLmNsaWNrZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHR0aGlzLnNpZ25hbHMuY2xpY2tGaW5pc2ggPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2Jhbm5lciA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7cDMuQml0bWFwVGV4dH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fYnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2J1dHRvblN0cmluZyA9IGJ1dHRvblN0cmluZyB8fCBcIm5leHRcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2RlbGF5ID0gZGVsYXkgfHwgMDtcclxuXHJcblx0UElYSS5Db250YWluZXIuY2FsbCh0aGlzKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IE5leHRCdXR0b247XHJcbk5leHRCdXR0b24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xyXG5OZXh0QnV0dG9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5leHRCdXR0b247XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vKipcclxuICovXHJcbk5leHRCdXR0b24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHJcbntcclxuXHRDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdHRoaXMuX2Jhbm5lciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInVpXCIpKTtcclxuXHRcdHRoaXMuX2Jhbm5lci5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcblx0XHQvLyB0aGlzLl9iYW5uZXIuc2NhbGUueCA9IDA7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2Jhbm5lcik7XHJcblxyXG5cdFx0dGhpcy5fYnV0dG9uID0gbmV3IHAzLkJ1dHRvbihcclxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfXCIgKyB0aGlzLl9idXR0b25TdHJpbmcgKyBcIl9kZWZcIiksIFxyXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9cIiArIHRoaXMuX2J1dHRvblN0cmluZyArIFwiX292ZXJcIiksIFxyXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9cIiArIHRoaXMuX2J1dHRvblN0cmluZyArIFwiX3ByZXNzZWRcIikpO1xyXG5cdFx0XHJcblx0XHQvLyB0aGlzLl9idXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcclxuICAgICAgICB0aGlzLl9idXR0b24uc2lnbmFscy5kb3duLmFkZE9uY2UodGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuXHRcdHRoaXMuX2J1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMub25CdXR0b25PdmVyLCB0aGlzKTtcclxuXHRcdHRoaXMuX2J1dHRvbi5hbmltYXRlID0gZmFsc2U7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2J1dHRvbik7XHJcblxyXG5cdFx0Ly8gdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblx0XHQvLyB0bC50byh0aGlzLl9iYW5uZXIuc2NhbGUsIDEsIHt4OjEsIGVhc2U6QmFjay5lYXNlT3V0fSk7XHJcblx0XHQvLyB0bC50byh0aGlzLl9idXR0b24uc2NhbGUsIDEuMywge3g6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCAwKTtcclxuXHRcdC8vIHRsLnRvKHRoaXMuX2J1dHRvbi5zY2FsZSwgMS4zLCB7eToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dH0sIDAuMSk7XHJcblx0XHQvLyBDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcclxuXHJcblx0fSwgdGhpcy5fZGVsYXksIHRoaXMpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKi9cclxuTmV4dEJ1dHRvbi5wcm90b3R5cGUub25CdXR0b25DbGljayA9IGZ1bmN0aW9uKClcclxue1xyXG4vKiAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX2J1dHRvbi5zY2FsZSk7XHJcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2J1dHRvbi5zY2FsZSwgLjIsIHt4OjAuNiwgeTowLjYsIGVhc2U6U2luZS5lYXNlSW5PdXQsIG9uQ29tcGxldGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2J1dHRvbi5zY2FsZSwgMSwge3g6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dCwgb25Db21wbGV0ZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIFx0dGhpcy5zaWduYWxzLmNsaWNrRmluaXNoLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgfSwgb25Db21wbGV0ZVNjb3BlOnRoaXN9KSk7XHJcbiAgICB9LCBvbkNvbXBsZXRlU2NvcGU6dGhpc30pKTsgKi9cclxuXHJcbiAgICAvLyBTb3VuZFNGWC5wbGF5KFwic2Z4X2J1dHRvbl9wbGF5XCIpO1xyXG5cdHRoaXMuc2lnbmFscy5jbGlja2VkLmRpc3BhdGNoKCk7XHJcbn1cclxuXHJcbk5leHRCdXR0b24ucHJvdG90eXBlLm9uQnV0dG9uT3ZlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gU291bmRTRlgucGxheShcInNmeF9idG5fcm9sbG92ZXJfMDBcIik7XHJcbn1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiAgU291bmRTRlhcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMTEvMDYvMjAxNS5cbiAqXG4gKi9cblxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU291bmRTRlgoKSB7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNvdW5kU0ZYO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQHBhcmFtIHshcDMuQnV0dG9ufSBidXR0b25cbiAqIEBwYXJhbSB7Qm9vbGVhbj19IGVuYWJsZUNsaWNrU291bmRcbiAqIEBwYXJhbSB7Qm9vbGVhbj19IGVuYWJsZU92ZXJTb3VuZFxuICovXG5Tb3VuZFNGWC5idXR0b24gPSBmdW5jdGlvbihidXR0b24sIGVuYWJsZUNsaWNrU291bmQsIGVuYWJsZU92ZXJTb3VuZCkge1xuICAgIGVuYWJsZUNsaWNrU291bmQgPSBlbmFibGVDbGlja1NvdW5kID09IHVuZGVmaW5lZCA/IHRydWUgOiBlbmFibGVDbGlja1NvdW5kO1xuICAgIGVuYWJsZU92ZXJTb3VuZCA9IGVuYWJsZU92ZXJTb3VuZCA9PSB1bmRlZmluZWQgPyB0cnVlIDogZW5hYmxlT3ZlclNvdW5kO1xuXG4gICAgaWYoZW5hYmxlQ2xpY2tTb3VuZClcbiAgICB7ICAgIFxuICAgICAgICBidXR0b24uc2lnbmFscy5jbGljay5hZGQoZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgICAgICBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKFwic2Z4X2J0bl9wcmVzc19yZXZlcmJcIik7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIGlmKGVuYWJsZU92ZXJTb3VuZClcbiAgICB7ICAgIFxuICAgICAgICBidXR0b24uc2lnbmFscy5vdmVyLmFkZChmdW5jdGlvbihidXR0b24pIHtcbiAgICAgICAgICAgIHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoXCJzZnhfYnRuX3JvbGxvdmVyX3JldmVyYlwiKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFTdHJpbmd9IHNvdW5kXG4gKiBAcGFyYW0ge09iamVjdD19IHBhcmFtc1xuICogQHBhcmFtIHtOdW1iZXI9fSBkZWxheVxuICovXG5Tb3VuZFNGWC5wbGF5ID0gZnVuY3Rpb24oc291bmQsIHBhcmFtcywgZGVsYXkpIHtcblxuICAgIGlmKGRlbGF5ID09IG51bGwpXG4gICAgeyAgICBcbiAgICAgICAgcmV0dXJuIHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoc291bmQsIHBhcmFtcyk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7ICAgIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKHNvdW5kLCBwYXJhbXMpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxufTtcblxuU291bmRTRlgucGxheU11c2ljID0gZnVuY3Rpb24oc291bmQsIHBhcmFtcywgZGVsYXkpIHtcblxuICAgIGlmKGRlbGF5ID09IG51bGwpXG4gICAgeyAgICBcbiAgICAgICAgcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlNdXNpYyhzb3VuZCwgcGFyYW1zKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHsgICAgXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5TXVzaWMoc291bmQsIHBhcmFtcyk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IVN0cmluZ30gc291bmRcbiAqL1xuU291bmRTRlguc3RvcCA9IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgdmFyIGN1cnJlbnRTb3VuZHMgPSBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2Uuc291bmRzU0ZYO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjdXJyZW50U291bmRzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaWYoY3VycmVudFNvdW5kc1tpXS5uYW1lID09IHNvdW5kKVxuICAgICAgICB7XG4gICAgICAgICAgIHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5zdG9wU291bmQoc291bmQpO1xuICAgICAgICB9ICAgXG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFBcnJheSA8U3RyaW5nPn0gc291bmRzXG4gKi9cblNvdW5kU0ZYLnBsYXlSYW5kb21Gcm9tID0gZnVuY3Rpb24oc291bmRzKSB7XG5cdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoc291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzb3VuZHMubGVuZ3RoKV0pO1xufTtcblxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwiLyoqXG4gKiAgTXV0ZUJ1dHRvblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAxNi8wOS8yMDE1LlxuICpcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7IVBJWEkuVGV4dHVyZX0gb25Ob3JtYWxUZXh0dXJlXG4gKiBAcGFyYW0geyFQSVhJLlRleHR1cmV9IG9mZk5vcm1hbFRleHR1cmVcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb25PdmVyVGV4dHVyZVxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBvZmZPdmVyVGV4dHVyZVxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBvbkRvd25UZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9mZkRvd25UZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9uRGlzYWJsZWRUZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9mZkRpc2FibGVkVGV4dHVyZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE11dGVCdXR0b24oXG4gICAgb25Ob3JtYWxUZXh0dXJlLFxuICAgIG9mZk5vcm1hbFRleHR1cmUsXG4gICAgb25PdmVyVGV4dHVyZSxcbiAgICBvZmZPdmVyVGV4dHVyZSxcbiAgICBvbkRvd25UZXh0dXJlLFxuICAgIG9mZkRvd25UZXh0dXJlXG4pIHtcbiAgICB2YXIgYXVkaW8gPSBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25Ob3JtYWxUZXh0dXJlID0gb25Ob3JtYWxUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29mZk5vcm1hbFRleHR1cmUgPSBvZmZOb3JtYWxUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uT3ZlclRleHR1cmUgPSBvbk92ZXJUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29mZk92ZXJUZXh0dXJlID0gb2ZmT3ZlclRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25Eb3duVGV4dHVyZSA9IG9uRG93blRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb2ZmRG93blRleHR1cmUgPSBvZmZEb3duVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9ub3JtYWxUZXh0dXJlID0gYXVkaW8uaXNNdXRlID8gb2ZmTm9ybWFsVGV4dHVyZSA6IG9uTm9ybWFsVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vdmVyVGV4dHVyZSA9IGF1ZGlvLmlzTXV0ZSA/IG9mZk92ZXJUZXh0dXJlIDogb25PdmVyVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kb3duVGV4dHVyZSA9IGF1ZGlvLmlzTXV0ZSA/IG9mZk92ZXJUZXh0dXJlIDogb25Eb3duVGV4dHVyZTtcblxuXG4gICAgcDMuQnV0dG9uLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMuX25vcm1hbFRleHR1cmUsXG4gICAgICAgIHRoaXMuX292ZXJUZXh0dXJlLFxuICAgICAgICB0aGlzLl9kb3duVGV4dHVyZVxuICAgICk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IE11dGVCdXR0b247XG5NdXRlQnV0dG9uLnByb3RvdHlwZSAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUocDMuQnV0dG9uLnByb3RvdHlwZSk7XG5NdXRlQnV0dG9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICA9IE11dGVCdXR0b247XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKi9cbk11dGVCdXR0b24ucHJvdG90eXBlLm9uTW91c2VDbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGF1ZGlvID0gcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlO1xuICAgIGF1ZGlvLm11dGUoIWF1ZGlvLmlzTXV0ZSk7XG5cbiAgICB0aGlzLl9ub3JtYWxUZXh0dXJlICAgICA9IGF1ZGlvLmlzTXV0ZSA/IHRoaXMuX29mZk5vcm1hbFRleHR1cmUgICAgOiB0aGlzLl9vbk5vcm1hbFRleHR1cmU7XG4gICAgdGhpcy5fb3ZlclRleHR1cmUgICAgICAgPSBhdWRpby5pc011dGUgPyB0aGlzLl9vZmZPdmVyVGV4dHVyZSAgICAgIDogdGhpcy5fb25PdmVyVGV4dHVyZTtcbiAgICB0aGlzLl9kb3duVGV4dHVyZSAgICAgICA9IGF1ZGlvLmlzTXV0ZSA/IHRoaXMuX29mZkRvd25UZXh0dXJlICAgICAgOiB0aGlzLl9vbkRvd25UZXh0dXJlO1xuICAgIHRoaXMuX2Rpc2FibGVkVGV4dHVyZSAgID0gYXVkaW8uaXNNdXRlID8gdGhpcy5fb2ZmRGlzYWJsZWRUZXh0dXJlICA6IHRoaXMuX29uRGlzYWJsZWRUZXh0dXJlO1xuXG4gICAgcDMuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlQ2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG59O1xuIiwiLyoqXG4gKiAgU2NlbmVcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNC8wOS8yMDE1LlxuICpcbiAqL1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuZSgpIHtcbiAgICB0aGlzLnNpZ25hbHMgICAgICAgICAgICA9IHt9O1xuICAgIHRoaXMuc2lnbmFscy5uZXh0ICAgICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5zaWduYWxzLnByZXZpb3VzICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMuaG9tZSAgICAgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5wYXVzZSAgICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICA9IFNjZW5lO1xuU2NlbmUucHJvdG90eXBlICAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcblNjZW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICAgPSBTY2VuZTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBhIHNjZW5lIGlzIGluaXRpYWxpemVkLlxuICovXG5TY2VuZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG92ZXJyaWRlXG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgc2NlbmUgaXMgZGVzdHJveWVkLlxuICovXG5TY2VuZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5uZXh0LmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMucHJldmlvdXMuZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5ob21lLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMucGF1c2UuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZGV2aWNlIGRpbWVuc2lvbnMgYXJlIGNoYW5nZWQuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgJ3RvcCcgb2YgdGhlIHN0YWNrLlxuICovXG5TY2VuZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIHNob3duIGZvciB0aGUgZmlyc3QgdGltZS5cbiAqL1xuU2NlbmUucHJvdG90eXBlLmFwcGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluKCk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzY2VuZSBpcyBzaG93biAtIHJlZ2FyZGxlc3Mgb2YgYWN0dWFsIHZpc2liaWxpdHkuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oKTtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIGhpZGRlbiAtIHJlZ2FyZGxlc3Mgb2YgYWN0dWFsIHZpc2liaWxpdHkuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TY2VuZS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSB8fCB3aW5kb3c7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TY2VuZS5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgfHwgd2luZG93O1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlKTtcbiAgICB9XG59OyIsIi8qKlxuICogIFNjZW5lTWFuYWdlclxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA0LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBTY2VuZSAgICAgICA9IHJlcXVpcmUoXCIuL1NjZW5lXCIpO1xudmFyIFRyYW5zaXRpb24gID0gcmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2NlbmVNYW5hZ2VyKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkRpc3BsYXlPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGFnZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5DYW52YXNSZW5kZXJlciB8IFBJWEkuV2ViR0xSZW5kZXJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheS48U2NlbmU+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhY2sgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUcmFuc2l0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lTWFuYWdlcjtcblxuLyoqXG4gKiBAcGFyYW0geyFQSVhJLkRpc3BsYXlPYmplY3R9IHN0YWdlXG4gKiBAcGFyYW0geyFQSVhJLkNhbnZhc1JlbmRlcmVyIHwgIVBJWEkuV2ViR0xSZW5kZXJlcn0gcmVuZGVyZXJcbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oc3RhZ2UsIHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fc3RhZ2UgICAgICAgICA9IHN0YWdlO1xuICAgIHRoaXMuX3JlbmRlcmVyICAgICAgPSByZW5kZXJlcjtcbn07XG5cbi8qKlxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9zdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy50b3AudXBkYXRlKCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFTY2VuZX0gc2NlbmVcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbj19IHRyYW5zaXRpb25cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzY2VuZSwgdHJhbnNpdGlvbikge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKSByZXR1cm47XG5cbiAgICB0aGlzLl90cmFuc2l0aW9uID0gdHJhbnNpdGlvbiB8fCBuZXcgVHJhbnNpdGlvbigpO1xuICAgIGlmICh0aGlzLl90cmFuc2l0aW9uLnJlcXVpcmVzV2ViR0wgJiYgISh0aGlzLl9yZW5kZXJlciBpbnN0YW5jZW9mIFBJWEkuV2ViR0xSZW5kZXJlcikpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiAgICAgICAgICAgID0gdHJhbnNpdGlvbi5mYWxsYmFjaygpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnB1c2ggICAgICAgPSB0cmFuc2l0aW9uLnB1c2g7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucmVwbGFjZSAgICA9IHRyYW5zaXRpb24ucmVwbGFjZTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi53YWl0ICAgICAgID0gdHJhbnNpdGlvbi53YWl0O1xuICAgIH1cbiAgICB0aGlzLl90cmFuc2l0aW9uLmluaXQoKTtcbiAgICB0aGlzLl9zdGFnZS5hZGRDaGlsZCh0aGlzLl90cmFuc2l0aW9uKTtcblxuICAgIHRoaXMuX3RyYW5zaXRpb24uc2lnbmFscy5pbi5hZGRPbmNlKGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgICAgcDMuVGltZXN0ZXAucXVldWVDYWxsKHN3YXAsIFtzY2VuZV0sIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3RyYW5zaXRpb24uc2lnbmFscy5vdXQuYWRkT25jZShmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgIHRyYW5zaXRpb24ucGFyZW50LnJlbW92ZUNoaWxkKHRyYW5zaXRpb24pO1xuICAgICAgICB0cmFuc2l0aW9uLmRpc3Bvc2UoKTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbi53YWl0KSB7XG4gICAgICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc2NlbmUuYXBwZWFyLCBudWxsLCBzY2VuZSk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLl90cmFuc2l0aW9uLmluKCk7XG5cbiAgICBmdW5jdGlvbiBzd2FwKHNjZW5lKSB7XG4gICAgICAgIGlmICh0aGlzLnRvcCkge1xuICAgICAgICAgICAgdGhpcy50b3AuaGlkZSgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uLnB1c2gpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3AucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3AuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYW5zaXRpb24ucmVwbGFjZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc3RhY2subGVuZ3RoOyArKyBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSB0aGlzLl9zdGFja1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXAucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnBhcmVudC5yZW1vdmVDaGlsZCh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNjZW5lLmluaXQoKTtcbiAgICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICAgIGlmICghc2NlbmUucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlLmFkZENoaWxkQXQoc2NlbmUsIHRoaXMuX3RyYW5zaXRpb24ucGFyZW50LmdldENoaWxkSW5kZXgodGhpcy5fdHJhbnNpdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YWNrLnB1c2goc2NlbmUpO1xuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbi53YWl0KSB7XG4gICAgICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc2NlbmUuYXBwZWFyLCBudWxsLCBzY2VuZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGFjayk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1RyYW5zaXRpb249fSB0cmFuc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcj19IGNvdW50XG4gKi9cblNjZW5lTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24odHJhbnNpdGlvbiwgY291bnQpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcykgcmV0dXJuO1xuXG4gICAgdGhpcy5fdHJhbnNpdGlvbiAgICA9IHRyYW5zaXRpb24gfHwgbmV3IFRyYW5zaXRpb24oKTtcbiAgICBjb3VudCAgICAgICAgICAgICAgID0gTWF0aC5tYXgoMSwgY291bnQpIHx8IDE7XG4gICAgaWYgKHRoaXMuX3RyYW5zaXRpb24ucmVxdWlyZXNXZWJHTCAmJiAhKHRoaXMuX3JlbmRlcmVyIGluc3RhbmNlb2YgUElYSS5XZWJHTFJlbmRlcmVyKSkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uICAgICAgICAgICAgPSB0cmFuc2l0aW9uLmZhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucHVzaCAgICAgICA9IHRyYW5zaXRpb24ucHVzaDtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5yZXBsYWNlICAgID0gdHJhbnNpdGlvbi5yZXBsYWNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLndhaXQgICAgICAgPSB0cmFuc2l0aW9uLndhaXQ7XG4gICAgfVxuICAgIHRoaXMuX3RyYW5zaXRpb24uaW5pdCgpO1xuICAgIHRoaXMuX3N0YWdlLmFkZENoaWxkKHRoaXMuX3RyYW5zaXRpb24pO1xuXG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLmluLmFkZE9uY2UoZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc3dhcCwgW2NvdW50XSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLm91dC5hZGRPbmNlKGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdHJhbnNpdGlvbi5wYXJlbnQucmVtb3ZlQ2hpbGQodHJhbnNpdGlvbik7XG4gICAgICAgIHRyYW5zaXRpb24uZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHRoaXMudG9wLnNob3coKTtcbiAgICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3RyYW5zaXRpb24uaW4oKTtcblxuICAgIGZ1bmN0aW9uIHN3YXAoY291bnQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgKysgaSkge1xuICAgICAgICAgICAgdGhpcy50b3AuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy50b3AucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMudG9wKTtcbiAgICAgICAgICAgIHRoaXMudG9wLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjZW5lID0gdGhpcy50b3A7XG4gICAgICAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgICAgICBpZiAoIXNjZW5lLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZS5hZGRDaGlsZEF0KHNjZW5lLCB0aGlzLl90cmFuc2l0aW9uLnBhcmVudC5nZXRDaGlsZEluZGV4KHRoaXMuX3RyYW5zaXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbi53YWl0KSB7XG4gICAgICAgICAgICBzY2VuZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGFjayk7XG4gICAgfVxufTtcblxuLyoqXG4gKi9cblNjZW5lTWFuYWdlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbn07XG5cbi8qKlxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2VuZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YWNrLmxlbmd0aDsgKysgaSkge1xuICAgICAgICBzY2VuZSA9IHRoaXMuX3N0YWNrW2ldO1xuICAgICAgICBzY2VuZS5yZXNpemUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5yZXNpemUoKTtcbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmVNYW5hZ2VyLnByb3RvdHlwZSwgXCJzdGFnZVwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1BJWEkuRGlzcGxheU9iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2U7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZU1hbmFnZXIucHJvdG90eXBlLCBcInRvcFwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1NjZW5lfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFjay5sZW5ndGggPyB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXSA6IG51bGw7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZU1hbmFnZXIucHJvdG90eXBlLCBcInRyYW5zaXRpb25JblByb2dyZXNzXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3RyYW5zaXRpb24gIT0gbnVsbCA/IHRydWUgOiBmYWxzZSk7XG4gICAgfVxufSk7XG4iLCIvKipcbiAqICBUcmFuc2l0aW9uXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDQvMDkvMjAxNS5cbiAqXG4gKi9cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVHJhbnNpdGlvbigpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLnNpZ25hbHMgICAgICAgID0ge307XG4gICAgdGhpcy5zaWduYWxzLmluICAgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5vdXQgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHVzaCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMud2FpdCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlcXVpcmVzV2ViR0wgPSBmYWxzZTtcblxuICAgIFBJWEkuQ29udGFpbmVyLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IFRyYW5zaXRpb247XG5UcmFuc2l0aW9uLnByb3RvdHlwZSAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcblRyYW5zaXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgID0gVHJhbnNpdGlvbjtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG92ZXJyaWRlXG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zaWduYWxzLmluLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMub3V0LmRpc3Bvc2UoKTtcblxuICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmluID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zaWduYWxzLmluLmRpc3BhdGNoKHRoaXMpO1xufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUub3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zaWduYWxzLm91dC5kaXNwYXRjaCh0aGlzKTtcbn07XG5cbi8qKlxuICogQHJldHVybnMge1RyYW5zaXRpb259XG4gKi9cblRyYW5zaXRpb24ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG92ZXJyaWRlXG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5mYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG92ZXJyaWRlXG59OyIsIi8qKlxyXG4gKiAgQ05Nb3JlR2FtZXNTY2VuZVxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMTMvMDcvMjAxNy5cclxuICpcclxuICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBDb21tb24gPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgU2ltcGxlU2NyZWVuID0gcmVxdWlyZShcIi4uL3NjcmVlbnMvU2ltcGxlU2NyZWVuXCIpO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gQ05Nb3JlR2FtZXNTY2VuZSgpIHtcclxuICAgIFNpbXBsZVNjcmVlbi5jYWxsKHRoaXMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge0NOR2FtZXNXaWRnZXR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9jbmd3ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLkdyYXBoaWNzfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fb3ZlcmxheSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9wYW5lbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl90aXRsZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7QXJyYXkuPHAzLkJ1dHRvbj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9idXR0b25zID0gW107XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDTk1vcmVHYW1lc1NjZW5lO1xyXG5DTk1vcmVHYW1lc1NjZW5lLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2ltcGxlU2NyZWVuLnByb3RvdHlwZSk7XHJcbkNOTW9yZUdhbWVzU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ05Nb3JlR2FtZXNTY2VuZTtcclxuXHJcbkNOTW9yZUdhbWVzU2NlbmUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX2NuZ3cgPSBuZXcgQ05HYW1lc1dpZGdldCh3aW5kb3cub2cubGFuZ3VhZ2UpO1xyXG5cclxuICAgIHZhciBhc3NldHMgPSBDb21tb24uYXNzZXRzO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgdGhpcy5fb3ZlcmxheS52aXNpYmxlID0gZmFsc2U7XHJcblx0dGhpcy5fb3ZlcmxheS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX292ZXJsYXkpO1xyXG5cclxuICAgIHRoaXMuX3BhbmVsID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY25nd19wYW5lbFwiKSk7XHJcbiAgICB0aGlzLl9wYW5lbC54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xyXG4gICAgdGhpcy5fcGFuZWwueSA9IHAzLlZpZXcuaGVpZ2h0ICogMC41O1xyXG4gICAgdGhpcy5fcGFuZWwuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5fcGFuZWwudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9wYW5lbCk7XHJcblxyXG4gICAgdGhpcy5fdGl0bGVMYWJlbCA9IG5ldyBQSVhJLlRleHQodGhpcy5fY25ndy50aXRsZSwge1xyXG4gICAgICAgIGZvbnQ6IFwiNjBweCBBcmlhbFwiLFxyXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHN0cm9rZTogMHgwMDNBQkYsXHJcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiA0LCBcclxuXHRcdGxpbmVKb2luOiAncm91bmQnLFxyXG4gICAgICAgIGZpbGw6IDB4RkZGRkZGLCAvLyBbMHhGRkZGRkYsIDB4QjhGRkZGXSxcclxuICAgICAgICBmaWxsR3JhZGllbnRUeXBlOiAwIC8vIFBJWEkuVEVYVF9HUkFESUVOVC5MSU5FQVJfVkVSVElDQUxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fdGl0bGVMYWJlbC54ID0gMDtcclxuICAgIHRoaXMuX3RpdGxlTGFiZWwueSA9IC0yMzQ7XHJcbiAgICB0aGlzLl90aXRsZUxhYmVsLnBpdm90LnggPSB0aGlzLl90aXRsZUxhYmVsLndpZHRoICogMC41O1xyXG4gICAgdGhpcy5fdGl0bGVMYWJlbC5waXZvdC55ID0gdGhpcy5fdGl0bGVMYWJlbC5oZWlnaHQgKiAwLjU7XHJcbiAgICB0aGlzLl9wYW5lbC5hZGRDaGlsZCh0aGlzLl90aXRsZUxhYmVsKTtcclxuXHJcbiAgICB0aGlzLl9sb2FkZXIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbmd3X2xvYWRlclwiKSk7XHJcbiAgICB0aGlzLl9sb2FkZXIuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5fcGFuZWwuYWRkQ2hpbGQodGhpcy5fbG9hZGVyKTtcclxuXHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IG5ldyBwMy5CdXR0b24odGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbmd3X2J0bl9jbG9zZVwiKSk7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi54ID0gdGhpcy5fcGFuZWwud2lkdGggKiAwLjU7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi55ID0gLXRoaXMuX3BhbmVsLmhlaWdodCAqIDAuNSArIDE0O1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24uYW5pbWF0ZSA9IHRydWU7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmNsaWNrU291bmROYW1lID0gXCJzZnhfYnRuX3BsYXlfMDBcIjtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLnNpZ25hbHMuY2xpY2suYWRkKHRoaXMuX29uQ2xvc2VCdXR0b25DbGljaywgdGhpcyk7XHJcbiAgICB0aGlzLl9wYW5lbC5hZGRDaGlsZCh0aGlzLl9jbG9zZUJ1dHRvbik7XHJcbn07XHJcblxyXG5DTk1vcmVHYW1lc1NjZW5lLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBUd2Vlbk1heC5raWxsQ2hpbGRUd2VlbnNPZih0aGlzKTtcclxuXHJcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcbkNOTW9yZUdhbWVzU2NlbmUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy54ID0gKHAzLlZpZXcud2lkdGggLSBDb21tb24uU1RBR0VfV0lEVEgpICogMC41O1xyXG5cclxuXHR0aGlzLl9vdmVybGF5LmNsZWFyKCk7XHJcbiAgICB0aGlzLl9vdmVybGF5LmJlZ2luRmlsbCgweDAsIDAuNik7XHJcbiAgICB0aGlzLl9vdmVybGF5LmRyYXdSZWN0KChDb21tb24uU1RBR0VfV0lEVEggLSBwMy5WaWV3LndpZHRoKSAqIDAuNSwgMCwgcDMuVmlldy53aWR0aCwgcDMuVmlldy5oZWlnaHQpO1xyXG4gICAgdGhpcy5fb3ZlcmxheS5lbmRGaWxsKCk7XHJcbn07XHJcblxyXG5DTk1vcmVHYW1lc1NjZW5lLnByb3RvdHlwZS5hcHBlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYXBwZWFyLmNhbGwodGhpcyk7XHJcblxyXG4gICAgdGhpcy5fbG9hZFRleHR1cmVzKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2xvYWRlciwgMC40LCB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAwLjQsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX2xvYWRlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgdGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVxyXG4gKiBAcGFyYW0geyp9IFtzY29wZV1cclxuICovXHJcbkNOTW9yZUdhbWVzU2NlbmUucHJvdG90eXBlLmFuaW1hdGVJbiA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSlcclxue1xyXG4gICAgdGhpcy5fb3ZlcmxheS5hbHBoYSA9IDA7XHJcbiAgICBUd2Vlbk1heC50byh0aGlzLl9vdmVybGF5LCAwLjI0LCB7XHJcbiAgICAgICAgYWxwaGE6IDEsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3RhcnRTY29wZTogdGhpc1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcGFuZWwuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgpO1xyXG4gICAgVHdlZW5NYXgudG8odGhpcy5fcGFuZWwuc2NhbGUsIDAuMzQsIHtcclxuICAgICAgICB4OiAxLFxyXG4gICAgICAgIHk6IDEsXHJcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxyXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyXSxcclxuICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFuZWwudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN0YXJ0U2NvcGU6IHRoaXNcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoKTtcclxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2Nsb3NlQnV0dG9uLnNjYWxlLCAwLjM0LCB7XHJcbiAgICAgICAgZGVsYXk6IDAuNCxcclxuICAgICAgICB4OiAxLFxyXG4gICAgICAgIHk6IDEsXHJcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxyXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyXSxcclxuICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN0YXJ0U2NvcGU6IHRoaXNcclxuICAgIH0pO1xyXG5cclxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2xvYWRlciwgMC41LCB7XHJcbiAgICAgICAgcm90YXRpb246IHRoaXMuX2xvYWRlci5yb3RhdGlvbiAtIE1hdGguUEkgKiAyLFxyXG4gICAgICAgIGVhc2U6IFBvd2VyMC5lYXNlTm9uZSxcclxuICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXHJcbiAqIEBwYXJhbSB7Kn0gW3Njb3BlXVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuQ05Nb3JlR2FtZXNTY2VuZS5wcm90b3R5cGUuX2xvYWRUZXh0dXJlcyA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xyXG4gICAgdmFyIGNvdW50ID0gMCxcclxuICAgICAgICBtYXggPSA0LFxyXG4gICAgICAgIGdhbWUsXHJcbiAgICAgICAgdGV4dHVyZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE1hdGgubWluKG1heCwgdGhpcy5fY25ndy5nYW1lcy5sZW5ndGgpOyArKyBpKSB7XHJcbiAgICAgICAgZ2FtZSA9IHRoaXMuX2NuZ3cuZ2FtZXNbaV07XHJcbiAgICAgICAgaWYgKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW2dhbWUuaW1hZ2VVcmxdKSB7XHJcbiAgICAgICAgICAgICgrKyBjb3VudCA+PSBtYXggJiYgY2FsbGJhY2spICYmIGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKGdhbWUuaW1hZ2VVcmwsIHRydWUpO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLm9uKFwibG9hZGVkXCIsIGZ1bmN0aW9uKGJhc2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAoKysgY291bnQgPj0gbWF4ICYmIGNhbGxiYWNrKSAmJiBjYWxsYmFjay5jYWxsKHNjb3BlKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5DTk1vcmVHYW1lc1NjZW5lLnByb3RvdHlwZS5fY3JlYXRlQnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGFzc2V0cyA9IENvbW1vbi5hc3NldHM7XHJcblxyXG4gICAgdmFyIHNwYWNpbmcgPSBuZXcgUElYSS5Qb2ludCgzNTYsIDIzMCk7XHJcbiAgICB2YXIgdGV4dHVyZXMgPSBbXHJcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbmd3X2dhbWVfMDAxXCIpLFxyXG4gICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY25nd19nYW1lXzAwMlwiKSxcclxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNuZ3dfZ2FtZV8wMDNcIiksXHJcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbmd3X2dhbWVfMDA0XCIpXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBtYXggPSA0LFxyXG4gICAgICAgIGdhbWUsXHJcbiAgICAgICAgc3RhdGVzLFxyXG4gICAgICAgIGJ1dHRvbjtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE1hdGgubWluKG1heCwgdGhpcy5fY25ndy5nYW1lcy5sZW5ndGgpOyArKyBpKSB7XHJcbiAgICAgICAgZ2FtZSA9IHRoaXMuX2NuZ3cuZ2FtZXNbaV07XHJcblxyXG4gICAgICAgIGJ1dHRvbiA9IG5ldyBwMy5CdXR0b24oUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbZ2FtZS5pbWFnZVVybF0pO1xyXG4gICAgICAgIGJ1dHRvbi54ID0gKGkgJSAyICogc3BhY2luZy54KSAtIE1hdGguZmxvb3IoKG1heCAtIDEpIC8gMikgKiBzcGFjaW5nLnggKiAwLjU7XHJcbiAgICAgICAgYnV0dG9uLnkgPSBNYXRoLmZsb29yKGkgLyAyKSAqIHNwYWNpbmcueSAtIDg2O1xyXG4gICAgICAgIGJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcclxuICAgICAgICBidXR0b24udXJsID0gZ2FtZS51cmw7XHJcbiAgICAgICAgYnV0dG9uLnNpZ25hbHMuY2xpY2suYWRkKHRoaXMuX29uR2FtZUJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9wYW5lbC5hZGRDaGlsZChidXR0b24pO1xyXG5cclxuICAgICAgICBidXR0b24uaW1hZ2UgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbaV0pO1xyXG4gICAgICAgIGJ1dHRvbi5pbWFnZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcbiAgICAgICAgYnV0dG9uLmFkZENoaWxkKGJ1dHRvbi5pbWFnZSk7XHJcblxyXG4gICAgICAgIGFuaW1hdGUuY2FsbChidXR0b24sIGkgKiAwLjA0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlKGRlbGF5KSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5zY2FsZSwgMC4zNCwge1xyXG4gICAgICAgICAgICBkZWxheTogZGVsYXksXHJcbiAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcclxuICAgICAgICAgICAgZWFzZVBhcmFtczogWzJdLFxyXG4gICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU3RhcnRTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtwMy5CdXR0b259IGJ1dHRvblxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuQ05Nb3JlR2FtZXNTY2VuZS5wcm90b3R5cGUuX29uR2FtZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oYnV0dG9uKSB7XHJcbiAgICB3aW5kb3cub3BlbihidXR0b24udXJsLCBcIl9CTEFOS1wiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3AzLkJ1dHRvbn0gYnV0dG9uXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5DTk1vcmVHYW1lc1NjZW5lLnByb3RvdHlwZS5fb25DbG9zZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oYnV0dG9uKSB7XHJcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCh0aGlzKTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb21tb24gICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNpbXBsZVNjcmVlbiA9IHJlcXVpcmUoXCIuLi9zY3JlZW5zL1NpbXBsZVNjcmVlblwiKTtcbnZhciBOZXh0QnV0dG9uICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9OZXh0QnV0dG9uXCIpO1xudmFyIFNvdW5kU0ZYICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL1NvdW5kU0ZYXCIpO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEdhbWVPdmVyT3ZlcmxheShzY29yZSwgaGlnaHNjb3JlKVxue1xuXHQvKlxuXHQgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG5cdCAqL1xuXHR0aGlzLl9vdmVybGF5ICAgICAgICAgID0gbnVsbDtcblx0dGhpcy5fZ2FtZW92ZXJQYWdlICAgICA9IG51bGw7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24gPSBudWxsO1xuXG5cdC8qXG5cdCAqIEB0eXBlIHtOZXh0QnV0dG9ufVxuXHQgKi9cblx0dGhpcy5fbmV4dEJ1dHRvbiA9IG51bGw7XG5cblx0Lypcblx0ICogQHR5cGUge3AzLkJ1dHRvbn1cblx0ICovXG5cdHRoaXMuX3Jlc3RhcnRCdXR0b24gPSBudWxsO1xuXG5cdC8qXG5cdCAqIEB0eXBlIHtwMy5NdXRlQnV0dG9ufVxuXHQgKi9cblx0dGhpcy5fbXV0ZUJ1dHRvbiA9IG51bGw7XG5cblx0Lypcblx0ICogQHR5cGUge051bWJlcn1cblx0ICovXG5cdHRoaXMuX3Njb3JlID0gc2NvcmU7XG5cdHRoaXMuX2hpZ2hzY29yZSA9IGhpZ2hzY29yZTtcblxuXHQvKipcbiAgICAgKiBAdHlwZSB7cDMuTW92aWVDbGlwfVxuICAgICAqL1xuXHQvLyB0aGlzLl9ndW1iYWxsID0gbnVsbDtcblx0Ly8gdGhpcy5fZGFyd2luID0gbnVsbDtcblxuXHRTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcblxuXHR0aGlzLnNpZ25hbHMubW9yZUdhbWVzID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVPdmVyT3ZlcmxheTtcbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdhbWVPdmVyT3ZlcmxheTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKFwiR0FNRSBPVkVSIElOSVRJQUxJWkVEXCIpO1xuXG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuX292ZXJsYXkgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJiZ19waW5rXCIsIFwiLmpwZ1wiKSk7XG5cdHRoaXMuX292ZXJsYXkuYWxwaGEgPSAwO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX292ZXJsYXkpO1xuXG5cdHRoaXMuX3N1biA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInN1bl9iZ1wiKSk7XG5cdHRoaXMuX3N1bi5hbHBoYSA9IDA7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc3VuKTtcblxuXHQvLyBQYW5lbFxuXHR0aGlzLl9nYW1lb3ZlclBhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0dGhpcy5fZ2FtZW92ZXJQYWdlLnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xuXHR0aGlzLl9nYW1lb3ZlclBhZ2UueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgLyAyO1xuXHR0aGlzLl9nYW1lb3ZlclBhZ2Uuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9nYW1lb3ZlclBhZ2UpO1xuXG5cdHZhciBiZyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG5cdGJnLmJlZ2luRmlsbCgweGZmZmZmZik7XG5cdGJnLmRyYXdSZWN0KC0yNTAsIC0xMTAsIDUwMCwgMzIwKTtcblx0dGhpcy5fZ2FtZW92ZXJQYWdlLmFkZENoaWxkKGJnKTtcblxuXHR2YXIgcmFpbmJvd19iZyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJnX3JhaW5ib3hfZW5kZ2FtZVwiKSk7XG5cdHJhaW5ib3dfYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxKTtcblx0cmFpbmJvd19iZy54ID0gMDtcblx0cmFpbmJvd19iZy55ID0gMTIwO1xuXHR0aGlzLl9nYW1lb3ZlclBhZ2UuYWRkQ2hpbGQocmFpbmJvd19iZyk7XG5cblx0dmFyIHJhaW5ib3cgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJyYWluYm94X2VuZGdhbWVcIikpO1xuXHRyYWluYm93LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XG5cdHJhaW5ib3cueCA9IDA7XG5cdHJhaW5ib3cueSA9IDA7XG5cdHJhaW5ib3dfYmcuYWRkQ2hpbGQocmFpbmJvdyk7XG5cblxuXHRcdC8vIFBhbmVsIHRpdGxlXG5cdFx0dmFyIGNvcHkgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImNvbmZpZ1wiKVsnY29weSddW1wiWU9VX1NDT1JFRFwiXVtDb21tb24uQ09VTlRSWV9DT0RFXTtcblx0XHRpZighY29weS5saXZlKVxuXHRcdFx0dGhpcy5fdGl0bGVUZXh0ID0gbmV3IFBJWEkuVGV4dChjb3B5LnRleHQsIHtmb250OiBcIjgwcHggR3JpbGxlZENoZWVzZUJUTi1SZWd1bGFyXCIsIGZpbGw6IDB4RkNFQzFCLCBhbGlnbjogXCJjZW50ZXJcIiwgc3Ryb2tlOiAweDAwMDAwMCwgc3Ryb2tlVGhpY2tuZXNzOiAxMCwgcGFkZGluZzo1LCBsaW5lSm9pbjogJ3JvdW5kJ30pO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3RpdGxlVGV4dCA9IG5ldyBQSVhJLlRleHQoY29weS50ZXh0LCAge2ZvbnQ6ICh3aW5kb3cub2cubGFuZ3VhZ2UgPT0gXCJhclwiID8gXCI3MnB4IEZyZWRGcmVkYnVyZ2VyQXJhLVJlZ3VsYXJcIiA6IFwiNzJweCBKdW5lZ3VsbC1SZWd1bGFyXCIpLCBmaWxsOiAweEZGRkYwMCwgYWxpZ246IFwiY2VudGVyXCIsIHN0cm9rZTogMHgwMDAwMDAsIHN0cm9rZVRoaWNrbmVzczogMTAsIHBhZGRpbmc6NSwgbGluZUpvaW46ICdyb3VuZCd9KTtcblx0XHR0aGlzLl90aXRsZVRleHQuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHRcdHRoaXMuX3RpdGxlVGV4dC54ID0gMCArIGNvcHkub2Zmc2V0Lng7XG5cdFx0dGhpcy5fdGl0bGVUZXh0LnkgPSAtMzIwICsgY29weS5vZmZzZXQueSAtIDUwO1xuXHRcdHRoaXMuX3RpdGxlVGV4dC5hbHBoYSA9IDA7XG5cdFx0dGhpcy5fdGl0bGVUZXh0LnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoY29weS5zY2FsZSwgY29weS5zY2FsZSk7XG5cdFx0cmFpbmJvd19iZy5hZGRDaGlsZCh0aGlzLl90aXRsZVRleHQpO1xuXG5cblxuXHRcdC8vIFBhbmVsIHNjb3JlXG5cdFx0dGhpcy5fc2NvcmVUZXh0SG9sZGVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdFx0dGhpcy5fc2NvcmVUZXh0SG9sZGVyLnggPSAwO1xuXHRcdHRoaXMuX3Njb3JlVGV4dEhvbGRlci55ID0gLTE0MDtcblx0XHR0aGlzLl9zY29yZVRleHRIb2xkZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLCAxKTtcblx0XHRyYWluYm93X2JnLmFkZENoaWxkKHRoaXMuX3Njb3JlVGV4dEhvbGRlcik7XG5cblx0XHRcdHRoaXMuX3Njb3JlVGV4dCA9IG5ldyBQSVhJLlRleHQodGhpcy5fc2NvcmUudG9TdHJpbmcoKSwge2ZvbnQ6IFwiOTBweCBHcmlsbGVkQ2hlZXNlQlROLVJlZ3VsYXJcIiwgZmlsbDogMHhGRjUyOEYsIGFsaWduOiBcImNlbnRlclwiLCBzdHJva2U6IDB4MDAwMDAwLCBzdHJva2VUaGlja25lc3M6IDEyLCBwYWRkaW5nOjUsIGxpbmVKb2luOiAncm91bmQnfSk7XG5cdFx0XHQvLyB2YXIgc2NvcmVUZXh0ID0gbmV3IHAzLkJpdG1hcFRleHQodGhpcy5fc2NvcmUudG9TdHJpbmcoKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEZvbnRBdGxhcyhcInNjb3JlXCIpLCBwMy5CaXRtYXBUZXh0LkFMSUdOX0NFTlRFUiwgMHhFQzY4QTUpO1xuXHRcdFx0dGhpcy5fc2NvcmVUZXh0LnggPSAwO1xuXHRcdFx0dGhpcy5fc2NvcmVUZXh0LnkgPSAtNDA7XG5cdFx0XHR0aGlzLl9zY29yZVRleHQuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHRcdFx0dGhpcy5fc2NvcmVUZXh0SG9sZGVyLmFkZENoaWxkKHRoaXMuX3Njb3JlVGV4dCk7XG5cblx0XHQvLyBQYW5lbCBoaWdoc2NvcmUgdGl0bGVcblx0XHR2YXIgY29weSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKFwiY29uZmlnXCIpWydjb3B5J11bXCJCRVNUX1NPX0ZBUlwiXVtDb21tb24uQ09VTlRSWV9DT0RFXTtcblx0XHRpZighY29weS5saXZlKVxuXHRcdFx0dGhpcy5faGlnaHNjb3JlVGl0bGVUZXh0ID0gbmV3IFBJWEkuVGV4dChjb3B5LnRleHQsIHtmb250OiBcIjQ4cHggR3JpbGxlZENoZWVzZUJUTi1SZWd1bGFyXCIsIGZpbGw6IDB4RkNFQzFCLCBhbGlnbjogXCJjZW50ZXJcIiwgc3Ryb2tlOiAweDAwMDAwMCwgc3Ryb2tlVGhpY2tuZXNzOiAxMiwgcGFkZGluZzo4LCBsaW5lSm9pbjogJ3JvdW5kJ30pO1xuXHRcdFx0Ly8gdGhpcy5faGlnaHNjb3JlVGl0bGVUZXh0ID0gbmV3IHAzLkJpdG1hcFRleHQoY29weS50ZXh0LCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0Rm9udEF0bGFzKFwidGV4dFwiKSwgcDMuQml0bWFwVGV4dC5BTElHTl9DRU5URVIsIDB4RkZGRjAwKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLl9oaWdoc2NvcmVUaXRsZVRleHQgPSBuZXcgUElYSS5UZXh0KGNvcHkudGV4dCwge2ZvbnQ6ICh3aW5kb3cub2cubGFuZ3VhZ2UgPT0gXCJhclwiID8gXCIzMnB4IEZyZWRGcmVkYnVyZ2VyQXJhLVJlZ3VsYXJcIiA6IFwiMzJweCBKdW5lZ3VsbC1SZWd1bGFyXCIpLCBmaWxsOiAweEZGRkYwMCwgYWxpZ246IFwiY2VudGVyXCIsIHN0cm9rZTogMHgwMDAwMDAsIHN0cm9rZVRoaWNrbmVzczogMTAsIGxpbmVKb2luOiAncm91bmQnfSk7XG5cdFx0dGhpcy5faGlnaHNjb3JlVGl0bGVUZXh0LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcblx0XHR0aGlzLl9oaWdoc2NvcmVUaXRsZVRleHQueCA9IDA7XG5cdFx0dGhpcy5faGlnaHNjb3JlVGl0bGVUZXh0LnkgPSAtMTMwO1xuXHRcdHRoaXMuX2hpZ2hzY29yZVRpdGxlVGV4dC5hbHBoYSA9IDA7XG5cdFx0dGhpcy5faGlnaHNjb3JlVGl0bGVUZXh0LnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoY29weS5zY2FsZSwgY29weS5zY2FsZSk7XG5cdFx0cmFpbmJvd19iZy5hZGRDaGlsZCh0aGlzLl9oaWdoc2NvcmVUaXRsZVRleHQpO1xuXG5cdFx0aWYoY29weS5saXZlKVxuXHRcdHtcblx0XHRcdHRoaXMuX2hpZ2hzY29yZVRpdGxlVGV4dC54ICs9IGNvcHkub2Zmc2V0Lng7XG5cdFx0XHR0aGlzLl9oaWdoc2NvcmVUaXRsZVRleHQueSArPSBjb3B5Lm9mZnNldC55O1xuXHRcdH1cblxuXHRcdC8vIFBhbmVsIGhpZ2hzY29yZVxuXHRcdHRoaXMuX2hpZ2hzY29yZVRleHRIb2xkZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0XHR0aGlzLl9oaWdoc2NvcmVUZXh0SG9sZGVyLnggPSAwO1xuXHRcdHRoaXMuX2hpZ2hzY29yZVRleHRIb2xkZXIueSA9IC01NTtcblx0XHR0aGlzLl9oaWdoc2NvcmVUZXh0SG9sZGVyLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMC43NSk7XG5cdFx0cmFpbmJvd19iZy5hZGRDaGlsZCh0aGlzLl9oaWdoc2NvcmVUZXh0SG9sZGVyKTtcblxuXHRcdFx0Ly8gdmFyIGhpZ2hzY29yZVRleHQgPSBuZXcgcDMuQml0bWFwVGV4dCh0aGlzLl9oaWdoc2NvcmUudG9TdHJpbmcoKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEZvbnRBdGxhcyhcInNjb3JlXCIpLCBwMy5CaXRtYXBUZXh0LkFMSUdOX0NFTlRFUiwgMHhFQzY4QTUpO1xuXHRcdFx0dGhpcy5faGlnaHNjb3JlVGV4dCA9IG5ldyBQSVhJLlRleHQodGhpcy5faGlnaHNjb3JlLnRvU3RyaW5nKCksIHtmb250OiBcIjY0cHggR3JpbGxlZENoZWVzZUJUTi1SZWd1bGFyXCIsIGZpbGw6IDB4RkY1MjhGLCBhbGlnbjogXCJjZW50ZXJcIiwgc3Ryb2tlOiAweDAwMDAwMCwgc3Ryb2tlVGhpY2tuZXNzOiAxMiwgcGFkZGluZzoxMCwgbGluZUpvaW46ICdyb3VuZCd9KTtcblx0XHRcdHRoaXMuX2hpZ2hzY29yZVRleHQueCA9IDA7XG5cdFx0XHR0aGlzLl9oaWdoc2NvcmVUZXh0LnkgPSAwO1xuXHRcdFx0dGhpcy5faGlnaHNjb3JlVGV4dC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdFx0XHR0aGlzLl9oaWdoc2NvcmVUZXh0LnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMSwgMSk7XG5cdFx0XHR0aGlzLl9oaWdoc2NvcmVUZXh0SG9sZGVyLmFkZENoaWxkKHRoaXMuX2hpZ2hzY29yZVRleHQpO1xuXG5cdFx0Ly8gQ2xvdWRzXG5cdFx0dmFyIGNsb3VkID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2xvdWQxXCIpKTtcblx0XHRjbG91ZC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEpO1xuXHRcdGNsb3VkLnggPSAtMjIwO1xuXHRcdGNsb3VkLnkgPSAxMjA7XG5cdFx0cmFpbmJvd19iZy5hZGRDaGlsZChjbG91ZCk7XG5cblx0XHR2YXIgY2xvdWQgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbG91ZDJcIikpO1xuXHRcdGNsb3VkLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XG5cdFx0Y2xvdWQueCA9IDg7XG5cdFx0Y2xvdWQueSA9IDE1MDtcblx0XHRyYWluYm93X2JnLmFkZENoaWxkKGNsb3VkKTtcblxuXHRcdHZhciBjbG91ZCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNsb3VkMVwiKSk7XG5cdFx0Y2xvdWQuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxKTtcblx0XHRjbG91ZC54ID0gMzAwO1xuXHRcdGNsb3VkLnkgPSAxNzA7XG5cdFx0cmFpbmJvd19iZy5hZGRDaGlsZChjbG91ZCk7XG5cblx0XHR2YXIgY2xvdWQgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbG91ZDJcIikpO1xuXHRcdGNsb3VkLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XG5cdFx0Y2xvdWQuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgtMSwgMSk7XG5cdFx0Y2xvdWQueCA9IDE1MDtcblx0XHRjbG91ZC55ID0gMTEwO1xuXHRcdHJhaW5ib3dfYmcuYWRkQ2hpbGQoY2xvdWQpO1xuXG5cdFx0dmFyIGNsb3VkID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2xvdWQxXCIpKTtcblx0XHRjbG91ZC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEpO1xuXHRcdGNsb3VkLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoLTAuNzUsIDAuNzUpO1xuXHRcdGNsb3VkLnggPSAtMzAwO1xuXHRcdGNsb3VkLnkgPSAxNjA7XG5cdFx0cmFpbmJvd19iZy5hZGRDaGlsZChjbG91ZCk7XG5cblx0XHR0aGlzLl9yYXZlbiA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInJhdmVuX3BpbmtcIikpO1xuXHRcdHRoaXMuX3JhdmVuLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XG5cdFx0dGhpcy5fcmF2ZW4ueCA9IC0zMjA7XG5cdFx0dGhpcy5fcmF2ZW4ueSA9IDEyMDtcblx0XHRyYWluYm93X2JnLmFkZENoaWxkKHRoaXMuX3JhdmVuKTtcblxuXHRcdHRoaXMuX3VuaWNvcm4gPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJ1bmljb3JuXCIpKTtcblx0XHR0aGlzLl91bmljb3JuLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XG5cdFx0dGhpcy5fdW5pY29ybi54ID0gMzUwO1xuXHRcdHRoaXMuX3VuaWNvcm4ueSA9IDE0MDtcblx0XHRyYWluYm93X2JnLmFkZENoaWxkKHRoaXMuX3VuaWNvcm4pO1xuXG5cdC8vIFN0YXJzIHBhcnRpY2xlIHN5c3RlbVxuXHR0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lci5hbHBoYSA9IDA7XG5cdHRoaXMuX3BhcnRpY2xlQ29udGFpbmVyLnggPSBDb21tb24uU1RBR0VfV0lEVEgvMjtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lcik7XG5cdHRoaXMuX3N0YXJzUFMgPSBuZXcgY2xvdWRraWQuRW1pdHRlcih0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lciwgW3RoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic3Rhcl9wYXJ0XCIpLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImRvdF9wYXJ0aWNsZVwiKV0sIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKFwic3BsYXNoU3RhcnNfcHNcIikpO1xuXHR0aGlzLl9zdGFyc1BTLmVtaXQgPSB0cnVlO1xuXHR0aGlzLl9zdGFyc1BTLnVwZGF0ZSg0KTtcblxuXHQvLyBCdXR0b25zXG5cdHRoaXMuX3Jlc3RhcnRCdXR0b24gPSBuZXcgcDMuQnV0dG9uKFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3JlcGxheV9kZWZcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcmVwbGF5X292ZXJcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcmVwbGF5X3ByZXNzZWRcIikpO1xuXHR0aGlzLl9yZXN0YXJ0QnV0dG9uLmluaXQoKTtcblx0dGhpcy5fcmVzdGFydEJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAtIDE2MDtcblx0dGhpcy5fcmVzdGFydEJ1dHRvbi54ID0gKENvbW1vbi5TVEFHRV9XSURUSCAvIDIpO1xuXHR0aGlzLl9yZXN0YXJ0QnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX3Jlc3RhcnRCdXR0b24uc2lnbmFscy5kb3duLmFkZCh0aGlzLnJlc3RhcnRDbGlja2VkLCB0aGlzKTtcblx0dGhpcy5fcmVzdGFydEJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMuYnV0dG9uT3ZlciwgdGhpcyk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fcmVzdGFydEJ1dHRvbik7XG5cblx0dGhpcy5fbmV4dEJ1dHRvbiA9IG5ldyBwMy5CdXR0b25cblx0KFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2hvbWVfZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2hvbWVfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9ob21lX3ByZXNzZWRcIilcblx0KTtcblx0dGhpcy5fbmV4dEJ1dHRvbi5pbml0KCk7XG5cdHRoaXMuX25leHRCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcblx0dGhpcy5fbmV4dEJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLl9uZXh0QnV0dG9uLnNpZ25hbHMuZG93bi5hZGQodGhpcy5uZXh0Q2xpY2tlZCwgdGhpcyk7XG5cdHRoaXMuX25leHRCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLmJ1dHRvbk92ZXIsIHRoaXMpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX25leHRCdXR0b24pO1xuXG5cdHRoaXMuX211dGVCdXR0b24gPSBuZXcgcDMuTXV0ZUJ1dHRvblxuXHQoXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9kZWZcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vbl9wcmVzc2VkXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9wcmVzc2VkXCIpXG5cdCk7XG5cdHRoaXMuX211dGVCdXR0b24uaWQgPSBcIm11dGVcIjtcblx0dGhpcy5fbXV0ZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9tdXRlQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX211dGVCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLmJ1dHRvbk92ZXIsIHRoaXMpO1xuXHR0aGlzLl9tdXRlQnV0dG9uLmluaXQoKTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9tdXRlQnV0dG9uKTtcblxuXG5cdC8vIEJsYWNrIHNjcmVlblxuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAxO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLnggPSAtQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3NjcmVlblRyYW5zaXRpb24pXG5cblx0dmFyIGNvbG9ycyA9IFsweDExQjA2NiwgMHhGRkRFNzUsIDB4RjE3QUIwLCAweDM5OTFDRiwgMHg4RDU4QTRdO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dmFyIGJhbmQgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWyd3aGl0ZVNxdWFyZSddKTtcblx0XHRiYW5kLnRpbnQgPSBjb2xvcnNbaV07XG5cdFx0YmFuZC53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0XHRiYW5kLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQvNTtcblx0XHRiYW5kLnkgPSBDb21tb24uU1RBR0VfSEVJR0hULzUgKiBpO1xuXHRcdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWRkQ2hpbGQoYmFuZCk7XG5cdH1cblxuXHQvLyB0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSk7XG5cdC8vIHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAxO1xuXHQvLyB0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHQvLyB0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdC8vIHRoaXMuX3NjcmVlblRyYW5zaXRpb24ueCA9IC1Db21tb24uU1RBR0VfV0lEVEg7XG5cdC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NyZWVuVHJhbnNpdGlvbilcblxuXHRpZih0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImNvbmZpZ1wiKS5tb3JlR2FtZXMgJiYgIWNoZWNrRG9tYWluKCkpXG5cdHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhhdC5zaWduYWxzLm1vcmVHYW1lcy5kaXNwYXRjaCh0aGlzKTtcblx0XHR9LCAxMDAwKTtcblx0fVxufTtcblxuLyoqXG4gKi9cbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xuXHQvLyBVcGRhdGUgcGFydGljbGUgc3lzdGVtXG5cdHRoaXMuX3N0YXJzUFMudXBkYXRlKHAzLlRpbWVzdGVwLmRlbHRhVGltZSk7XG59O1xuXG4vKipcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cblx0dGhpcy5fbmV4dEJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvbkxlZnQoKTtcblx0dGhpcy5fbXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG59O1xuXG4vKipcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxue1xuXG59XG5cbi8qKlxuICovXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLnNob3dIZWxwID0gZnVuY3Rpb24oKVxue1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG5cblx0aWYodGhpcy5hbmltYXRlZEluKSByZXR1cm47XG5cdHRoaXMuYW5pbWF0ZWRJbiA9IHRydWU7XG5cblxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0XHR0bC50byh0aGlzLl9nYW1lb3ZlclBhZ2Uuc2NhbGUsICAxLjYsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCAwLjEpO1xuXG5cdFx0dGwudG8odGhpcy5fbmV4dEJ1dHRvbi5zY2FsZSwgMSwge3g6MSwgeToxLCBlYXNlOkJhY2suZWFzZU91dH0sIC44KTtcblx0XHR0bC50byh0aGlzLl9tdXRlQnV0dG9uLnNjYWxlLCAxLCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSwgLjgpO1xuXHRcdHRsLnRvKHRoaXMuX3Jlc3RhcnRCdXR0b24uc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCAxLjIpO1xuXG5cdFx0dGwudG8odGhpcy5fb3ZlcmxheSwgMC43NSwge2FscGhhOjEsIGVhc2U6U2luZS5lYXNlT3V0fSwgMC4xKTtcblx0XHR0bC50byh0aGlzLl9zdW4sIDAuNzUsIHthbHBoYToxLCBlYXNlOlNpbmUuZWFzZU91dH0sIDAuMSk7XG5cdFx0dGwudG8odGhpcy5fcGFydGljbGVDb250YWluZXIsIDAuNzUsIHthbHBoYToxLCBlYXNlOlNpbmUuZWFzZU91dH0sIDAuMSk7XG5cblx0XHR0bC50byh0aGlzLl90aXRsZVRleHQsIDAuNCwge2FscGhhOjEsIGVhc2U6U2luZS5lYXNlT3V0fSwgMC40KTtcblx0XHR0bC50byh0aGlzLl90aXRsZVRleHQsIDAuNCwge3k6IHRoaXMuX3RpdGxlVGV4dC55KzUwLCBlYXNlOlF1YWQuZWFzZU91dH0sIDAuNCk7XG5cdFx0dGwudG8odGhpcy5fdGl0bGVUZXh0LnNjYWxlLCAyLCB7eDogMS4xLCB5OjEuMSwgZWFzZTpRdWFkLmVhc2VJbk91dCwgcmVwZWF0Oi0xLCB5b3lvOnRydWV9LCAwLjgpO1xuXG5cdFx0dGwudG8odGhpcy5fc2NvcmVUZXh0SG9sZGVyLnNjYWxlLCAxLCB7eDoxLCB5OjEsIGVhc2U6RWxhc3RpYy5lYXNlT3V0fSwgMC43KTtcblxuXHRcdHRsLnRvKHRoaXMuX2hpZ2hzY29yZVRpdGxlVGV4dCwgMC40LCB7YWxwaGE6MSwgZWFzZTpTaW5lLmVhc2VPdXR9LCAxKTtcblx0XHR0bC50byh0aGlzLl9oaWdoc2NvcmVUaXRsZVRleHQsIDAuNCwge3k6IHRoaXMuX2hpZ2hzY29yZVRpdGxlVGV4dC55KzI1LCBlYXNlOlF1YWQuZWFzZU91dH0sIDEpO1xuXG5cdFx0dGwudG8odGhpcy5faGlnaHNjb3JlVGV4dEhvbGRlci5zY2FsZSwgMSwge3g6MC42LCB5OjAuNiwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCAxLjIpO1xuXG5cdFx0dGwudG8odGhpcy5fcmF2ZW4sIDIsIHtyb3RhdGlvbjo1ICogUElYSS5ERUdfVE9fUkFELCBlYXNlOlF1YWQuZWFzZUluT3V0LCByZXBlYXQ6LTEsIHlveW86dHJ1ZX0sIDAuMSk7XG5cdFx0dGwudG8odGhpcy5fdW5pY29ybi5zY2FsZSwgMC44NSwge3g6MC45NCwgeToxLjA2LCBlYXNlOkJhY2suZWFzZUluT3V0LCByZXBlYXQ6LTEsIHlveW86dHJ1ZX0sIDAuMSk7XG5cblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKVxue1xuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGVTY29wZTpzY29wZSwgb25Db21wbGV0ZTpjYWxsYmFja30pO1xuXHRcdHRsLnRvKHRoaXMuX2dhbWVvdmVyUGFnZS5zY2FsZSwgLjUsIHt4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHRcdHRsLnRvKHRoaXMuX3Jlc3RhcnRCdXR0b24uc2NhbGUsIC41LCB7eDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW59LCAwKTtcblx0XHR0bC50byh0aGlzLl9uZXh0QnV0dG9uLnNjYWxlLCAuNSwge3g6MCwgeTowLCBlYXNlOkJhY2suZWFzZUlufSwgMCk7XG5cdFx0dGwudG8odGhpcy5fbXV0ZUJ1dHRvbi5zY2FsZSwgLjUsIHt4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHRcdHRsLnRvKHRoaXMuX3NjcmVlblRyYW5zaXRpb24sIDAuMzUsIHt4OjAsIGVhc2U6U2luZS5lYXNlT3V0fSwgMC41KTtcblxuXHRcdC8vIFBzXG5cdFx0dGwudG8odGhpcy5fcGFydGljbGVDb250YWluZXIsIC41LCB7YWxwaGE6MCwgZWFzZTpTaW5lLkVhc2VJbn0sIDApO1xuXHRcdHRoaXMuX3N0YXJzUFMuZW1pdCA9IGZhbHNlO1xuXG5cblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG59O1xuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBwYXJhbSB7IVN0cmluZ30gY2hhcmFjdGVyXG4gKiBAcGFyYW0geyFOdW1iZXJ9IGZyYW1lTGltaXRcbiAqIEByZXR1cm5zIHshcDMuTW92aWVDbGlwU2VxdWVuY2V9XG4gKi9cbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UgPSBmdW5jdGlvbihjaGFyYWN0ZXIsIGZyYW1lTGltaXQsIGZyYW1lQmFjaylcbntcblx0dmFyIHRleHR1cmVBcnIgPSBbXTtcblx0Zm9yKHZhciBpID0gMTsgaSA8PSBmcmFtZUxpbWl0OyBpKyspXG5cdHtcblx0XHR2YXIgbiA9IFwiXCIgKyBpO1xuXHRcdHdoaWxlKG4ubGVuZ3RoIDwgMykgbiA9IFwiMFwiICsgbjtcblx0XHR0ZXh0dXJlQXJyLnB1c2goY2hhcmFjdGVyICsgXCJfXCIgKyBuKTtcblx0fVxuXHRpZighIWZyYW1lQmFjaylcblx0e1xuXHRcdGZvcih2YXIgaSA9IGZyYW1lQmFjayAtMTsgaSA+IDE7IGktLSlcblx0XHR7XG5cdFx0XHR2YXIgbiA9IFwiXCIgKyBpO1xuXHRcdFx0d2hpbGUobi5sZW5ndGggPCAzKSBuID0gXCIwXCIgKyBuO1xuXHRcdFx0dGV4dHVyZUFyci5wdXNoKGNoYXJhY3RlciArIFwiX1wiICsgbik7XG5cdFx0fVxuXHR9XG5cblx0Zm9yKHZhciBpID0gMDsgaSA8IHRleHR1cmVBcnIubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR0ZXh0dXJlQXJyW2ldID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUodGV4dHVyZUFycltpXSk7XG5cdH1cblx0dmFyIHNlcXVlbmNlID0gbmV3IHAzLk1vdmllQ2xpcFNlcXVlbmNlKCk7XG5cdHNlcXVlbmNlLmFkZFRleHR1cmVzKHRleHR1cmVBcnIpO1xuXG5cdHJldHVybiBzZXF1ZW5jZTtcbn1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5uZXh0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTtcblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59O1xuXG4vKipcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5yZXN0YXJ0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmRpc3BhdGNoKCk7XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuLyoqXG4gKi9cbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuYnV0dG9uT3ZlciA9IGZ1bmN0aW9uKClcbntcblx0U291bmRTRlgucGxheShcInNmeF9idG5fcm9sbG92ZXJfMDBcIik7XG59O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb21tb24gICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNpbXBsZVNjcmVlbiA9IHJlcXVpcmUoXCIuLi9zY3JlZW5zL1NpbXBsZVNjcmVlblwiKTtcbnZhciBOZXh0QnV0dG9uICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9OZXh0QnV0dG9uXCIpO1xudmFyIFNvdW5kU0ZYICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL1NvdW5kU0ZYXCIpO1xudmFyIE11dGVCdXR0b24gICA9IHJlcXVpcmUoXCIuLi9saWIvTXV0ZUJ1dHRvblwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXVzZU92ZXJsYXkoKVxue1xuXHQvKlxuXHQgKiBAdHlwZSB7SW50ZWdlcn1cblx0ICovXG5cdHRoaXMuU1RBVFVTX0lOU1RSVUNUSU9OUyA9IDA7XG5cdHRoaXMuU1RBVFVTX0FSRVlPVVNVUkUgICA9IDE7XG5cdHRoaXMuU1RBVFVTX1JFU1VNSU5HICAgICA9IC0xO1xuXHR0aGlzLl9zdGF0dXMgPSB0aGlzLlNUQVRVU19JTlNUUlVDVElPTlM7XG5cblx0Lypcblx0ICogQHR5cGUge1BJWEkuU3ByaXRlfVxuXHQgKi9cblx0dGhpcy5fb3ZlcmxheSA9IG51bGw7XG5cblx0Lypcblx0ICogQHR5cGUge05leHRCdXR0b259XG5cdCAqL1xuXHR0aGlzLl9yZXN1bWVCdXR0b24gPSBudWxsO1xuXG5cdC8qXG5cdCAqIEB0eXBlIHtwMy5CdXR0b259XG5cdCAqL1xuXHR0aGlzLl9tdXRlQnV0dG9uID0gbnVsbDtcblx0dGhpcy5fZXhpdEJ1dHRvbiA9IG51bGw7XG5cblx0Lypcblx0ICogQHR5cGUge1BJWEkuU3ByaXRlfVxuXHQgKi9cblx0dGhpcy5fdGl0bGUgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UElYSS5Db250YWluZXJ9XG5cdCAqL1xuXHR0aGlzLl9pbnN0cnVjdGlvbnNQYWdlID0gbnVsbDtcblx0dGhpcy5fYXJlWW91U3VyZVBhZ2UgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1cblx0ICovXG5cdHRoaXMuX2NvbnRlbnRzID0gbnVsbDtcblx0dGhpcy5faW1hZ2VDb250YWluZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7cDMuQnV0dG9ufVxuXHQgKi9cblx0dGhpcy5fbGVmdEJ1dHRvbiA9IG51bGw7XG5cdHRoaXMuX3JpZ2h0QnV0dG9uID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge051bWJlcn1cblx0ICovXG5cdHRoaXMuX2N1cnJlbnRQYWdlID0gMDtcblxuXHQvKipcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHR0aGlzLl9pbnRyb0hlbHBNb2RlID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQSVhJLlRleHR9XG5cdCAqL1xuXHR0aGlzLl90ZXh0ID0gbnVsbDtcblxuXHRTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gUGF1c2VPdmVybGF5O1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2ltcGxlU2NyZWVuLnByb3RvdHlwZSk7XG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGF1c2VPdmVybGF5O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcblx0Y29uc29sZS5sb2coXCJQQVVTRSBJTklUSUFMSVpFRFwiKTtcblxuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblxuXHR0aGlzLl9vdmVybGF5ID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snd2hpdGVTcXVhcmUnXSk7XG5cdHRoaXMuX292ZXJsYXkuYWxwaGEgICAgICAgPSAwO1xuXHR0aGlzLl9vdmVybGF5LndpZHRoICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9vdmVybGF5LmhlaWdodCAgICAgID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fb3ZlcmxheS5oaXRBcmVhICAgICA9IG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCBDb21tb24uU1RBR0VfV0lEVEgsIENvbW1vbi5TVEFHRV9IRUlHSFQpO1xuXHR0aGlzLl9vdmVybGF5LmludGVyYWN0aXZlID0gdHJ1ZTtcblx0dGhpcy5fb3ZlcmxheS50aW50ICAgICAgICA9IDB4MjYwNzIxO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX292ZXJsYXkpO1xuXG5cdC8vIEluc3RydWN0aW9uIHBhZ2Vcblx0dGhpcy5faW5zdHJ1Y3Rpb25zUGFnZSAgICAgICA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9pbnN0cnVjdGlvbnNQYWdlLnggICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcblx0dGhpcy5faW5zdHJ1Y3Rpb25zUGFnZS55ICAgICA9IENvbW1vbi5TVEFHRV9IRUlHSFQgLyAyO1xuXHR0aGlzLl9pbnN0cnVjdGlvbnNQYWdlLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5faW5zdHJ1Y3Rpb25zUGFnZSk7XG5cblx0dmFyIGJnID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblx0YmcuYmVnaW5GaWxsKDB4RUNGOUZGKTtcblx0YmcuZHJhd1JlY3QoLTMxMCwgLTE4MCwgNjIwLCAzMjApO1xuXHRiZy5lbmRGaWxsKCk7XG5cdHRoaXMuX2luc3RydWN0aW9uc1BhZ2UuYWRkQ2hpbGQoYmcpO1xuXG5cdHZhciBwYW5lbCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhbmVsXCIpKTtcblx0cGFuZWwuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHRwYW5lbC54ID0gMDtcblx0cGFuZWwueSA9IDA7XG5cdHRoaXMuX2luc3RydWN0aW9uc1BhZ2UuYWRkQ2hpbGQocGFuZWwpO1xuXG5cdFx0Ly8gSW5zdHJ1Y3Rpb24gdGl0bGVcblx0XHR2YXIgY29weSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKFwiY29uZmlnXCIpWydjb3B5J11bXCJJTlNUUlVDVElPTlNcIl1bQ29tbW9uLkNPVU5UUllfQ09ERV07XG5cblx0XHRpZighY29weS5saXZlKVxuXHRcdFx0dGl0bGVUZXh0ID0gbmV3IFBJWEkuVGV4dChjb3B5LnRleHQsIHtmb250OiBcIjQycHggR3JpbGxlZENoZWVzZUJUTi1SZWd1bGFyXCIsIGZpbGw6IDB4RkNFQzFCLCBhbGlnbjogXCJjZW50ZXJcIiwgc3Ryb2tlOiAweDAwMDAwMCwgc3Ryb2tlVGhpY2tuZXNzOiA4LCBwYWRkaW5nOjUsIGxpbmVKb2luOiAncm91bmQnfSk7XG5cdFx0XHQvLyB2YXIgdGl0bGVUZXh0ID0gbmV3IHAzLkJpdG1hcFRleHQoY29weS50ZXh0LCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0Rm9udEF0bGFzKFwidGV4dFwiKSwgcDMuQml0bWFwVGV4dC5BTElHTl9DRU5URVIsIDB4RkZGRjAwKTtcblx0XHRlbHNlXG5cdFx0XHR2YXIgdGl0bGVUZXh0ID0gbmV3IFBJWEkuVGV4dChjb3B5LnRleHQsIHtmb250OiAod2luZG93Lm9nLmxhbmd1YWdlID09IFwiYXJcIiA/IFwiNDhweCBGcmVkRnJlZGJ1cmdlckFyYS1SZWd1bGFyXCIgOiBcIjQ4cHggSnVuZWd1bGwtUmVndWxhclwiKSwgZmlsbDogMHhGQ0VDMUIsIGFsaWduOiBcImNlbnRlclwiLCBzdHJva2U6IDB4MDAwMDAwLCBzdHJva2VUaGlja25lc3M6IDYsIHBhZGRpbmc6NSwgbGluZUpvaW46ICdyb3VuZCd9KTtcblx0XHR0aXRsZVRleHQueSAgICAgID0gLTE5NTtcblx0XHR0aXRsZVRleHQuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHRcdHRpdGxlVGV4dC5zY2FsZSAgPSBuZXcgUElYSS5Qb2ludChjb3B5LnNjYWxlLCBjb3B5LnNjYWxlKTtcblx0XHRwYW5lbC5hZGRDaGlsZCh0aXRsZVRleHQpO1xuXG5cdFx0aWYoY29weS5saXZlKVxuXHRcdHtcblx0XHRcdHRpdGxlVGV4dC54ICs9IGNvcHkub2Zmc2V0Lng7XG5cdFx0XHR0aXRsZVRleHQueSArPSBjb3B5Lm9mZnNldC55O1xuXHRcdH1cblxuXHRcdC8vIEluc3RydWN0aW9uIGNvbnRlbnRcblx0XHR0aGlzLl9jb250ZW50cyA9IFtdO1xuXG5cdFx0XHR2YXIgbW9iID0gcDMuRGV2aWNlLmlzTW9iaWxlID8gXCJNT0JcIiA6IFwiUENcIjtcblxuXHRcdFx0dmFyIGNvcHkgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImNvbmZpZ1wiKVsnY29weSddW1wiSU5TVFJVQ1RJT05TXzFcIl1bQ29tbW9uLkNPVU5UUllfQ09ERV07XG5cdFx0XHR0aGlzLl9jb250ZW50cy5wdXNoKHtpbWFnZTp0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgndHV0b3JpYWwyJyksIHRleHQ6Y29weS50ZXh0LCBzY2FsZTpjb3B5LnNjYWxlLCBvZmZzZXQ6Y29weS5vZmZzZXQsIGxpdmU6Y29weS5saXZlfSk7XG5cdFx0XHR2YXIgY29weSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKFwiY29uZmlnXCIpWydjb3B5J11bXCJJTlNUUlVDVElPTlNfMlwiXVtDb21tb24uQ09VTlRSWV9DT0RFXTtcblx0XHRcdHRoaXMuX2NvbnRlbnRzLnB1c2goe2ltYWdlOnRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCd0dXRvcmlhbDMnKSwgdGV4dDpjb3B5LnRleHQsIHNjYWxlOmNvcHkuc2NhbGUsIG9mZnNldDpjb3B5Lm9mZnNldCwgbGl2ZTpjb3B5LmxpdmV9KTtcblx0XHRcdHZhciBjb3B5ID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJjb25maWdcIilbJ2NvcHknXVtcIklOU1RSVUNUSU9OU18zXCJdW0NvbW1vbi5DT1VOVFJZX0NPREVdO1xuXHRcdFx0dGhpcy5fY29udGVudHMucHVzaCh7aW1hZ2U6dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ3R1dG9yaWFsNCcpLCB0ZXh0OmNvcHkudGV4dCwgc2NhbGU6Y29weS5zY2FsZSwgb2Zmc2V0OmNvcHkub2Zmc2V0LCBsaXZlOmNvcHkubGl2ZX0pO1xuXG5cdFx0XHR0aGlzLl9pbWFnZUNvbnRhaW5lciA9IG5ldyBQSVhJLlNwcml0ZSgpO1xuXHRcdFx0dGhpcy5faW1hZ2VDb250YWluZXIueCA9IDA7XG5cdFx0XHR0aGlzLl9pbWFnZUNvbnRhaW5lci55ID0gLTIwO1xuXHRcdFx0dGhpcy5faW5zdHJ1Y3Rpb25zUGFnZS5hZGRDaGlsZCh0aGlzLl9pbWFnZUNvbnRhaW5lcik7XG5cblx0XHRcdHRoaXMuX2ltYWdlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2NvbnRlbnRzWzBdLmltYWdlKTtcblx0XHRcdHRoaXMuX2ltYWdlLmFuY2hvci54ID0gdGhpcy5faW1hZ2UuYW5jaG9yLnkgPSAwLjU7XG5cdFx0XHR0aGlzLl9pbWFnZUNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9pbWFnZSk7XG5cblx0XHRcdGlmKCFjb3B5LmxpdmUpXG5cdFx0XHRcdHRoaXMuX3RleHQgPSBuZXcgUElYSS5UZXh0KHRoaXMuX2NvbnRlbnRzWzBdLnRleHQsIHtmb250OiBcIjM4cHggR3JpbGxlZENoZWVzZUJUTi1SZWd1bGFyXCIsIGZpbGw6IDB4MTAzQjQ4LCBhbGlnbjogXCJjZW50ZXJcIn0pO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLl90ZXh0ID0gbmV3IFBJWEkuVGV4dCh0aGlzLl9jb250ZW50c1swXS50ZXh0LCB7Zm9udDogKHdpbmRvdy5vZy5sYW5ndWFnZSA9PSBcImFyXCIgPyBcIjMycHggRnJlZEZyZWRidXJnZXJBcmEtUmVndWxhclwiIDogXCIzMnB4IEp1bmVndWxsLVJlZ3VsYXJcIiksIGZpbGw6IDB4MTAzQjQ4LCBhbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzoxNX0pO1xuXHRcdFx0dGhpcy5fdGV4dC55U3RhcnQgPSAxNjU7XG5cdFx0XHR0aGlzLl90ZXh0LnkgPSB0aGlzLl90ZXh0LnlTdGFydDtcblx0XHRcdHRoaXMuX3RleHQuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHRcdFx0dGhpcy5fdGV4dC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KHRoaXMuX2NvbnRlbnRzWzBdLnNjYWxlLCB0aGlzLl9jb250ZW50c1swXS5zY2FsZSk7XG5cdFx0XHRwYW5lbC5hZGRDaGlsZCh0aGlzLl90ZXh0KTtcblxuXHRcblx0XHRcdC8vIHRoaXMuX3RleHQueCArPSB0aGlzLl9jb250ZW50c1swXS5vZmZzZXQueDtcblx0XHRcdHRoaXMuX3RleHQueSA9IHRoaXMuX3RleHQueVN0YXJ0ICsgdGhpcy5fY29udGVudHNbMF0ub2Zmc2V0Lnk7XG5cdFx0XG5cblx0XHRcdHRoaXMuX3Jlc3VtZUJ1dHRvbiA9IG5ldyBOZXh0QnV0dG9uKFwicGxheVwiLCAwKTtcblx0XHRcdHRoaXMuX3Jlc3VtZUJ1dHRvbi55ID0gMjIwO1xuXHRcdFx0dGhpcy5fcmVzdW1lQnV0dG9uLnggPSAzMzU7XG5cdFx0XHR0aGlzLl9yZXN1bWVCdXR0b24uaW5pdCgpO1xuXHRcdFx0dGhpcy5fcmVzdW1lQnV0dG9uLnNpZ25hbHMuY2xpY2tlZC5hZGQodGhpcy5yZXN1bWVDbGlja2VkLCB0aGlzKTtcblx0XHRcdHBhbmVsLmFkZENoaWxkKHRoaXMuX3Jlc3VtZUJ1dHRvbik7XG5cblx0XHRcdHRoaXMuX2xlZnRCdXR0b24gPSBuZXcgcDMuQnV0dG9uXG5cdFx0XHQoXG5cdFx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2Fycm93X2RlZlwiKSxcblx0XHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfYXJyb3dfb3ZlclwiKSxcblx0XHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfYXJyb3dfcHJlc3NlZFwiKVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuX2xlZnRCdXR0b24uaW5pdCgpO1xuXHRcdFx0dGhpcy5fbGVmdEJ1dHRvbi55ID0gMDtcblx0XHRcdHRoaXMuX2xlZnRCdXR0b24ueCA9IC0zMzU7XG5cdFx0XHR0aGlzLl9sZWZ0QnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoLTEsIDEpO1xuXHRcdFx0dGhpcy5fbGVmdEJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKHRoaXMubGVmdENsaWNrZWQsIHRoaXMpO1xuXHRcdFx0dGhpcy5fbGVmdEJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMuYnV0dG9uT3ZlciwgdGhpcyk7XG5cdFx0XHR0aGlzLl9sZWZ0QnV0dG9uLmFuaW1hdGUgPSBmYWxzZTtcblx0XHRcdHRoaXMuX2xlZnRCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0cGFuZWwuYWRkQ2hpbGQodGhpcy5fbGVmdEJ1dHRvbik7XG5cblx0XHRcdHRoaXMuX3JpZ2h0QnV0dG9uID0gbmV3IHAzLkJ1dHRvblxuXHRcdFx0KFxuXHRcdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9hcnJvd19kZWZcIiksXG5cdFx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2Fycm93X292ZXJcIiksXG5cdFx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2Fycm93X3ByZXNzZWRcIilcblx0XHRcdCk7XG5cdFx0XHR0aGlzLl9yaWdodEJ1dHRvbi5pbml0KCk7XG5cdFx0XHR0aGlzLl9yaWdodEJ1dHRvbi55ID0gMDtcblx0XHRcdHRoaXMuX3JpZ2h0QnV0dG9uLnggPSAzMzU7XG5cdFx0XHR0aGlzLl9yaWdodEJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKHRoaXMucmlnaHRDbGlja2VkLCB0aGlzKTtcblx0XHRcdHRoaXMuX3JpZ2h0QnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5idXR0b25PdmVyLCB0aGlzKTtcblx0XHRcdHRoaXMuX3JpZ2h0QnV0dG9uLmFuaW1hdGUgPSBmYWxzZTtcblx0XHRcdHBhbmVsLmFkZENoaWxkKHRoaXMuX3JpZ2h0QnV0dG9uKTtcblxuXHQvLyBBcmUgeW91IHN1cmUgcGFnZVxuXHR0aGlzLl9hcmVZb3VTdXJlUGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9hcmVZb3VTdXJlUGFnZS54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcblx0dGhpcy5fYXJlWW91U3VyZVBhZ2UueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgLyAyO1xuXHR0aGlzLl9hcmVZb3VTdXJlUGFnZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX2FyZVlvdVN1cmVQYWdlKTtcblxuXHRcdHZhciBwYW5lbCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhbmVsX3NtYWxsXCIpKTtcblx0XHRwYW5lbC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdFx0cGFuZWwueCA9IDA7XG5cdFx0cGFuZWwueSA9IDA7XG5cdFx0dGhpcy5fYXJlWW91U3VyZVBhZ2UuYWRkQ2hpbGQocGFuZWwpO1xuXG5cdFx0Ly8gQXJlIHlvdSBzdXJlIHF1ZXN0aW9uXG5cdFx0dmFyIGNvcHkgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImNvbmZpZ1wiKVsnY29weSddW1wiUVVJVFwiXVtDb21tb24uQ09VTlRSWV9DT0RFXTtcblx0XHRpZighY29weS5saXZlKVxuXHRcdFx0dmFyIGFyZVlvdVN1cmVUZXh0ID0gbmV3IFBJWEkuVGV4dChjb3B5LnRleHQsIHtmb250OiBcIjM4cHggR3JpbGxlZENoZWVzZUJUTi1SZWd1bGFyXCIsIGZpbGw6IDB4MTAzQjQ4LCBhbGlnbjogXCJjZW50ZXJcIiwgc3Ryb2tlOiAweDAwMDAwMH0pO1xuXHRcdGVsc2Vcblx0XHRcdHZhciBhcmVZb3VTdXJlVGV4dCA9IG5ldyBQSVhJLlRleHQoY29weS50ZXh0LCB7Zm9udDogKHdpbmRvdy5vZy5sYW5ndWFnZSA9PSBcImFyXCIgPyBcIjMycHggRnJlZEZyZWRidXJnZXJBcmEtUmVndWxhclwiIDogXCIzMnB4IEp1bmVndWxsLVJlZ3VsYXJcIiksIGZpbGw6IDB4RkZGRjAwLCBhbGlnbjogXCJjZW50ZXJcIiwgc3Ryb2tlOiAweDAwMDAwMCwgc3Ryb2tlVGhpY2tuZXNzOiA2LCBwYWRkaW5nOjV9KTtcblx0XHRhcmVZb3VTdXJlVGV4dC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdFx0YXJlWW91U3VyZVRleHQueCA9IDA7XG5cdFx0YXJlWW91U3VyZVRleHQueSA9IC0zMDtcblx0XHRhcmVZb3VTdXJlVGV4dC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KGNvcHkuc2NhbGUsIGNvcHkuc2NhbGUpO1xuXHRcdHBhbmVsLmFkZENoaWxkKGFyZVlvdVN1cmVUZXh0KTtcblxuXHRcdGlmKGNvcHkubGl2ZSlcblx0XHR7XG5cdFx0XHRhcmVZb3VTdXJlVGV4dC54ICs9IGNvcHkub2Zmc2V0Lng7XG5cdFx0XHRhcmVZb3VTdXJlVGV4dC55ICs9IGNvcHkub2Zmc2V0Lnk7XG5cdFx0fVxuXG5cdFx0Ly8gQXJlIHlvdSBzdXJlIGJ1dHRvbnNcblx0XHR2YXIgeWVzQnV0dG9uID0gbmV3IHAzLkJ1dHRvblxuXHRcdChcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X29rX2RlZlwiKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X29rX292ZXJcIiksXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9va19wcmVzc2VkXCIpXG5cdFx0KTtcblx0XHR5ZXNCdXR0b24uaW5pdCgpO1xuXHRcdHllc0J1dHRvbi54ID0gODA7XG5cdFx0eWVzQnV0dG9uLnkgPSAxMTA7XG5cdFx0eWVzQnV0dG9uLnNpZ25hbHMuZG93bi5hZGQodGhpcy5xdWl0WWVzQ2xpY2tlZCwgdGhpcyk7XG5cdFx0eWVzQnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5idXR0b25PdmVyLCB0aGlzKTtcblx0XHRwYW5lbC5hZGRDaGlsZCh5ZXNCdXR0b24pO1xuXG5cdFx0dmFyIG5vQnV0dG9uID0gbmV3IHAzLkJ1dHRvblxuXHRcdChcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2Nsb3NlX2RlZlwiKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2Nsb3NlX292ZXJcIiksXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9jbG9zZV9wcmVzc2VkXCIpXG5cdFx0KTtcblx0XHRub0J1dHRvbi5pbml0KCk7XG5cdFx0bm9CdXR0b24ueCA9IC04MDtcblx0XHRub0J1dHRvbi55ID0gMTEwO1xuXHRcdG5vQnV0dG9uLnNpZ25hbHMuZG93bi5hZGQodGhpcy5xdWl0Tm9DbGlja2VkLCB0aGlzKTtcblx0XHRub0J1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMuYnV0dG9uT3ZlciwgdGhpcyk7XG5cdFx0cGFuZWwuYWRkQ2hpbGQobm9CdXR0b24pO1xuXG5cdC8vIEJ1dHRvbnNcblx0dGhpcy5fZXhpdEJ1dHRvbiA9IG5ldyBwMy5CdXR0b25cblx0KFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2hvbWVfZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2hvbWVfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9ob21lX3ByZXNzZWRcIilcblx0KTtcblx0dGhpcy5fZXhpdEJ1dHRvbi5pbml0KCk7XG5cdHRoaXMuX2V4aXRCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcblx0dGhpcy5fZXhpdEJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKHRoaXMuZXhpdENsaWNrZWQsIHRoaXMpO1xuXHR0aGlzLl9leGl0QnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5idXR0b25PdmVyLCB0aGlzKTtcblx0dGhpcy5fZXhpdEJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX2V4aXRCdXR0b24pO1xuXG5cdHRoaXMuX211dGVCdXR0b24gPSBuZXcgcDMuTXV0ZUJ1dHRvblxuXHQoXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9kZWZcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vbl9wcmVzc2VkXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9wcmVzc2VkXCIpXG5cdCk7XG5cdHRoaXMuX211dGVCdXR0b24uaWQgICAgPSBcIm11dGVcIjtcblx0dGhpcy5fbXV0ZUJ1dHRvbi55ICAgICA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcblx0dGhpcy5fbXV0ZUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLl9tdXRlQnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5idXR0b25PdmVyLCB0aGlzKTtcblx0dGhpcy5fbXV0ZUJ1dHRvbi5pbml0KCk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fbXV0ZUJ1dHRvbik7XG59O1xuXG4vKipcbiAqL1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuX2V4aXRCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XG5cdHRoaXMuX211dGVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xufTtcblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vKipcbiAqL1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5zZXRJbnRyb0hlbHBNb2RlID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuX3Jlc3VtZUJ1dHRvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5faW50cm9IZWxwTW9kZSA9IHRydWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKVxue1xuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0XHR0bC50byh0aGlzLl9pbnN0cnVjdGlvbnNQYWdlLnNjYWxlLCAuNSwge3g6MSwgeToxLCBlYXNlOkJhY2suZWFzZU91dH0sIDApO1xuXHRcdHRsLnRvKHRoaXMuX2V4aXRCdXR0b24uc2NhbGUsIC41LCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSwgMCk7XG5cdFx0dGwudG8odGhpcy5fbXV0ZUJ1dHRvbi5zY2FsZSwgLjUsIHt4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXR9LCAwKTtcblx0XHR0bC50byh0aGlzLl9vdmVybGF5LCAuNSwge2FscGhhOjAuOCwgZWFzZTpCYWNrLmVhc2VPdXR9LCAwKTtcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKVxue1xuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGVTY29wZTpzY29wZSwgb25Db21wbGV0ZTpjYWxsYmFja30pO1xuXHRcdHRsLnRvKHRoaXMuX2luc3RydWN0aW9uc1BhZ2Uuc2NhbGUsIC41LCB7eDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW59LCAwKTtcblx0XHR0bC50byh0aGlzLl9leGl0QnV0dG9uLnNjYWxlLCAuNSwge3g6MCwgeTowLCBlYXNlOkJhY2suZWFzZUlufSwgMCk7XG5cdFx0dGwudG8odGhpcy5fbXV0ZUJ1dHRvbi5zY2FsZSwgLjUsIHt4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHRcdHRsLnRvKHRoaXMuX292ZXJsYXksIC41LCB7YWxwaGE6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshTnVtYmVyfSBwYWdlXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuc2V0UGFnZSA9IGZ1bmN0aW9uKHBhZ2UpXG57XG5cdHZhciBuZXdJbWFnZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9jb250ZW50c1twYWdlXS5pbWFnZSk7XG5cdG5ld0ltYWdlLnggPSB0aGlzLl9jb250ZW50c1twYWdlXS54IHx8IDA7XG5cdG5ld0ltYWdlLnkgPSB0aGlzLl9jb250ZW50c1twYWdlXS55IHx8IDA7XG5cdG5ld0ltYWdlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcblx0bmV3SW1hZ2UuYWxwaGEgPSAwO1xuXHR0aGlzLl9pbWFnZUNvbnRhaW5lci5hZGRDaGlsZChuZXdJbWFnZSk7XG5cblx0aWYocGFnZSA9PSAxKVxuXHR7XG5cdFx0dmFyIGhhbmQgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0U3ByaXRlKFwiaGFuZF90dXRvcmlhbFwiLCB0cnVlKTtcblx0XHRoYW5kLnggPSAyMjU7XG5cdFx0aGFuZC55ID0gMTAwO1xuXHRcdG5ld0ltYWdlLmFkZENoaWxkKGhhbmQpO1xuXHR9XG5cblx0Q29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9pbWFnZSwgMC41LCB7YWxwaGE6MCwgZWFzZTpTaW5lLmVhc2VPdXR9KSk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8obmV3SW1hZ2UsIDAuNSwge2FscGhhOjEsIGVhc2U6U2luZS5lYXNlT3V0LCBvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbigpXG5cdHtcblx0XHR0aGlzLl9pbWFnZUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLl9pbWFnZSk7XG5cdFx0dGhpcy5faW1hZ2UgPSBuZXdJbWFnZTtcblx0fX0pKTtcblxuXHR0aGlzLl90ZXh0LnRleHQgPSB0aGlzLl9jb250ZW50c1twYWdlXS50ZXh0O1xuXHR0aGlzLl90ZXh0LnNjYWxlID0gbmV3IFBJWEkuUG9pbnQodGhpcy5fY29udGVudHNbcGFnZV0uc2NhbGUsIHRoaXMuX2NvbnRlbnRzW3BhZ2VdLnNjYWxlKTtcblx0dGhpcy5fdGV4dC55ID0gdGhpcy5fdGV4dC55U3RhcnQgKyB0aGlzLl9jb250ZW50c1twYWdlXS5vZmZzZXQueTtcblx0XG5cdGlmKHBhZ2UgPT0gMClcblx0XHR0aGlzLl9sZWZ0QnV0dG9uLnZpc2libGUgPSBmYWxzZTtcblx0ZWxzZVxuXHRcdHRoaXMuX2xlZnRCdXR0b24udmlzaWJsZSA9IHRydWU7XG5cblx0aWYocGFnZSA9PSB0aGlzLl9jb250ZW50cy5sZW5ndGgtMSlcblx0e1xuXHRcdHRoaXMuX3JpZ2h0QnV0dG9uLnZpc2libGUgPSBmYWxzZTtcblx0XHRpZih0aGlzLl9pbnRyb0hlbHBNb2RlKVxuXHRcdFx0dGhpcy5fcmVzdW1lQnV0dG9uLnZpc2libGUgPSB0cnVlO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHRoaXMuX3JpZ2h0QnV0dG9uLnZpc2libGUgPSB0cnVlO1xuXHRcdGlmKHRoaXMuX2ludHJvSGVscE1vZGUpXG5cdFx0XHR0aGlzLl9yZXN1bWVCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuXHR9XG5cblx0dGhpcy5fY3VycmVudFBhZ2UgPSBwYWdlO1xufVxuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLmxlZnRDbGlja2VkID0gZnVuY3Rpb24oKVxue1xuXHQvLyBJZ25vcmUgaWYgaW4gdHJhbnNpdGlvblxuXHRpZih0aGlzLl9pbWFnZS5hbHBoYSAhPSAxKSByZXR1cm47XG5cblx0dGhpcy5zZXRQYWdlKHRoaXMuX2N1cnJlbnRQYWdlLTEpO1xuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLnJpZ2h0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcblx0Ly8gSWdub3JlIGlmIGluIHRyYW5zaXRpb25cblx0aWYodGhpcy5faW1hZ2UuYWxwaGEgIT0gMSkgcmV0dXJuO1xuXG5cdGlmKHRoaXMuX2N1cnJlbnRQYWdlID09IHRoaXMuX2NvbnRlbnRzLmxlbmd0aC0xKVxuXHR7XG5cdFx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTtcblx0XHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHR0aGlzLnNldFBhZ2UodGhpcy5fY3VycmVudFBhZ2UrMSk7XG5cdFx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG5cdH1cblxufTtcblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUucmVzdW1lQ2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcblx0aWYodGhpcy5fc3RhdHVzICE9IHRoaXMuU1RBVFVTX0lOU1RSVUNUSU9OUykgcmV0dXJuO1xuXHR0aGlzLl9zdGF0dXMgPSB0aGlzLlNUQVRVU19SRVNVTUlORztcblxuXHR0aGlzLmFuaW1hdGVPdXQoZnVuY3Rpb24oKVxuXHR7XG5cdFx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTtcblx0fSwgdGhpcyk7XG5cblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59O1xuXG4vKipcbiAqL1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5leGl0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcblx0aWYodGhpcy5fc3RhdHVzICE9IHRoaXMuU1RBVFVTX0lOU1RSVUNUSU9OUykgcmV0dXJuO1xuXHR0aGlzLl9zdGF0dXMgPSB0aGlzLlNUQVRVU19BUkVZT1VTVVJFO1xuXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcdHRsLnRvKHRoaXMuX2luc3RydWN0aW9uc1BhZ2Uuc2NhbGUsIC41LCB7eDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW59LCAwKTtcblx0XHR0bC50byh0aGlzLl9leGl0QnV0dG9uLnNjYWxlLCAuNSwge3g6MCwgeTowLCBlYXNlOkJhY2suZWFzZUlufSwgMCk7XG5cdFx0dGwudG8odGhpcy5fYXJlWW91U3VyZVBhZ2Uuc2NhbGUsIC41LCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSwgLjUpO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcblxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLmhlbHBDbGlja2VkID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLnNob3dIZWxwKCk7XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUucXVpdFllc0NsaWNrZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5kaXNwYXRjaCgpO1xuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLnF1aXROb0NsaWNrZWQgPSBmdW5jdGlvbigpXG57XG5cdGlmKHRoaXMuX3N0YXR1cyAhPSB0aGlzLlNUQVRVU19BUkVZT1VTVVJFKSByZXR1cm47XG5cdHRoaXMuX3N0YXR1cyA9IHRoaXMuU1RBVFVTX0lOU1RSVUNUSU9OUztcblxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0XHR0bC50byh0aGlzLl9hcmVZb3VTdXJlUGFnZS5zY2FsZSwgLjUsIHt4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHRcdHRsLnRvKHRoaXMuX2luc3RydWN0aW9uc1BhZ2Uuc2NhbGUsIC41LCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSwgLjUpO1xuXHRcdHRsLnRvKHRoaXMuX2V4aXRCdXR0b24uc2NhbGUsIC41LCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSwgLjUpO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcblxuXG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuYnV0dG9uT3ZlciA9IGZ1bmN0aW9uKClcbntcblx0U291bmRTRlgucGxheShcInNmeF9idG5fcm9sbG92ZXJfMDBcIik7XG59XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIENvbW1vbiAgICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcbnZhciBTaW1wbGVTY3JlZW4gICAgICAgICAgICA9IHJlcXVpcmUoXCIuL1NpbXBsZVNjcmVlblwiKTtcbnZhciBTY3JvbGxlckVuZ2luZSAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9zY3JvbGxlci9TY3JvbGxlckVuZ2luZVwiKTtcbnZhciBTY3JvbGxlck9iamVjdCAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9zY3JvbGxlci9TY3JvbGxlck9iamVjdFwiKTtcbnZhciBTY3JvbGxlck9iamVjdEltYWdlICAgICA9IHJlcXVpcmUoXCIuLi9zY3JvbGxlci9TY3JvbGxlck9iamVjdEltYWdlXCIpO1xudmFyIFNjcm9sbGVyTG9vcGluZ1JhbmdlICAgID0gcmVxdWlyZShcIi4uL3Njcm9sbGVyL1Njcm9sbGVyTG9vcGluZ1JhbmdlXCIpO1xudmFyIFNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yID0gcmVxdWlyZShcIi4uL3Njcm9sbGVyL1Njcm9sbGVyT2JqZWN0R2VuZXJhdG9yXCIpO1xudmFyIFNvdW5kU0ZYICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU291bmRTRlhcIik7XG52YXIgQXZhdGFyICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9BdmF0YXJcIik7XG52YXIgQ2xvdWQgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9DbG91ZFwiKTtcbnZhciBQaWNrdXAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9nYW1lL1BpY2t1cFwiKTtcbnZhciBFbmVteSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9nYW1lL0VuZW15XCIpO1xudmFyIFJhaW5ib3dUYWlsICAgICAgICAgICAgID0gcmVxdWlyZShcIi4uL2dhbWUvUmFpbmJvd1RhaWxcIik7XG52YXIgU2NvcmVDb3VudGVyICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9TY29yZUNvdW50ZXJcIik7XG52YXIgQm9vc3RCYXIgICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9Cb29zdEJhclwiKTtcbnZhciBQaWNrdXBQYXJ0aWNsZUhvbGRlciAgICA9IHJlcXVpcmUoXCIuLi9nYW1lL1BpY2t1cFBhcnRpY2xlSG9sZGVyXCIpO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEdhbWVTY3JlZW4oKVxue1xuXHQvKipcblx0ICogQHR5cGUge1Njcm9sbGVyRW5naW5lfVxuXHQgKi9cblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKi9cblx0dGhpcy5fYWN0aXZlQm91bmRhcnlQYWRkaW5nID0gMTAwO1xuXHR0aGlzLl9zY3JvbGxTcGVlZCAgICAgICAgICAgPSA1O1xuXHR0aGlzLl9zY3JvbGxTcGVlZFN0YXJ0ICAgICAgPSAxMDtcblx0dGhpcy5fc2Nyb2xsU3BlZWRFbmQgICAgICAgID0gMTY7XG5cdHRoaXMuX3Njcm9sbFNwZWVkVGltZSAgICAgICA9IDMwMDtcblx0dGhpcy5fZW5lbXlQZXJjZW50YWdlU3RhcnQgID0gMC4yNTtcblx0dGhpcy5fZW5lbXlQZXJjZW50YWdlRW5kICAgID0gMTtcblxuXHQvKipcblx0ICogQHR5cGUge0F2YXRhcn1cblx0ICovXG5cdHRoaXMuX2F2YXRhciA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtTY29yZUNvdW50ZXJ9XG5cdCAqL1xuXHR0aGlzLl9zY29yZUNvdW50ZXIgPSBudWxsO1xuXHR0aGlzLl9ib29zdEJhciAgICAgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKi9cblx0dGhpcy5fc2NvcmUgICAgID0gMDtcblx0dGhpcy5faGlnaHNjb3JlID0gMDtcblx0dGhpcy5fYm9vc3RNZXRlciA9IDA7XG5cdHRoaXMuX2Jvb3N0TWV0ZXJNYXggPSAxNTtcblx0dGhpcy5fYm9vc3RNZXRlckluY3JlbWVudCA9IDU7XG5cdHRoaXMuX2Jvb3N0U3BlZWRNdWx0aXBsaWVyID0gNTtcblx0dGhpcy5fYm9vc3REdXJhdGlvbiA9IDQ7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cdHRoaXMuX3NoYWtlID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtTY3JvbGxlck9iamVjdEdlbmVyYXRvcn1cblx0ICovXG5cdHRoaXMuX2Nsb3VkR2VuZXJhdG9yID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0hvd2x9XG5cdCAqL1xuXHR0aGlzLl9iZ011c2ljID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1BJWEkuU3ByaXRlfVxuXHQgKi9cblx0dGhpcy5faGl0QXJlYSA9IG51bGw7XG4gICAgdGhpcy5fc2NyZWVuVHJhbnNpdGlvbiA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtwMy5CdXR0b259XG5cdCAqL1xuXHR0aGlzLl9wYXVzZUJ1dHRvbiA9IG51bGw7XG5cdHRoaXMuX211dGVCdXR0b24gID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1BpY2t1cFBhcnRpY2xlSG9sZGVyfVxuXHQgKi9cblx0dGhpcy5fcGlja3VwUGFydGljbGVIb2xkZXIgPSBudWxsO1xuXG4vLyBJbnRyb1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Qm9vbH1cblx0ICovXG5cdHRoaXMuX2lzSW50cm8gICA9IHRydWU7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqL1xuXHR0aGlzLl9pbnRyb1RpbWUgPSAyO1xuXG4vLyBTcGF3blxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QXJyYXlbT2JqZWN0XX1cblx0ICovXG5cblx0dGhpcy5fc3Bhd25QYXR0ZXJucyA9IFtdO1xuXHR0aGlzLl9zcGF3blF1ZXVlICAgID0gW107XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqL1xuXHR0aGlzLl9zcGF3blRpbWVyICAgICAgICAgID0gMTtcblx0dGhpcy5fZGlmZmljdWx0eSAgICAgICAgICA9IDAuNzsgLy8gMDogZG9lc24ndCBpbmNyZWFzZSwgPiAwOiBpbmNyZWFzZXMgd2l0aCBzY3JvbGxTcGVlZCAobWF4OiAxKVxuXG5cdFNpbXBsZVNjcmVlbi5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuc2lnbmFscy5wYXVzZVByZXNzZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblx0dGhpcy5zaWduYWxzLnBhdXNlSW50cm8gICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBHYW1lU2NyZWVuO1xuR2FtZVNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lU2NyZWVuO1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKFwiR0FNRSBJTklUSUFMSVpFRFwiKTtcblxuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblxuLy8gU2F2ZSBkYXRhXG5cdHRoaXMuX2hpZ2hzY29yZSA9IENvbW1vbi5zYXZlZERhdGEuaGlnaHNjb3JlO1xuXG5cbi8vIEJHXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y2FudmFzLndpZHRoICA9IDEwMDtcblx0Y2FudmFzLmhlaWdodCA9IDE7XG5cdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cdHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsY2FudmFzLndpZHRoLDApO1xuXHRncmFkaWVudC5hZGRDb2xvclN0b3AoMCxcIiNGMUMzQkRcIik7XG5cdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjM1LFwiI0YzRDZDNVwiKTtcblx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsXCIjRUE3QTlFXCIpO1xuXHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG5cdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cdHRoaXMuX2JnID0gbmV3IFBJWEkuU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tQ2FudmFzKGNhbnZhcykpO1xuXHR0aGlzLl9iZy53aWR0aCAgPSBDb21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuX2JnLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fYmcpO1xuXG4vLyBTY3JvbGxlciBFbmdpbmUgU2V0dXBcblx0dmFyIHAgPSB0aGlzLl9hY3RpdmVCb3VuZGFyeVBhZGRpbmc7XG5cblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUgPSBuZXcgU2Nyb2xsZXJFbmdpbmUobmV3IFBJWEkuUG9pbnQoQ29tbW9uLlNUQUdFX1dJRFRILzIsIENvbW1vbi5TVEFHRV9IRUlHSFQvMiksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQSVhJLlJlY3RhbmdsZSgtQ29tbW9uLlNUQUdFX1dJRFRILzIsIC1Db21tb24uU1RBR0VfSEVJR0hULzIsIENvbW1vbi5TVEFHRV9XSURUSCwgQ29tbW9uLlNUQUdFX0hFSUdIVCksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQSVhJLlJlY3RhbmdsZSgtKENvbW1vbi5TVEFHRV9XSURUSC8yKS1wLCAtKENvbW1vbi5TVEFHRV9IRUlHSFQvMiktcCwgKENvbW1vbi5TVEFHRV9XSURUSCoyKSsocCoyKSwgQ29tbW9uLlNUQUdFX0hFSUdIVCsocCoyKSlcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUueCA9IDA7XG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmluaXQoKTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zY3JvbGxlckVuZ2luZSk7XG5cbi8vTGF5ZXJzXG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmFkZExheWVyKFwiYmFja2dyb3VuZFN1blwiLCBuZXcgUElYSS5Qb2ludCgwLCAxKSk7XG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmFkZExheWVyKFwiYmFja2dyb3VuZENsb3Vkc1RvcFwiLCBuZXcgUElYSS5Qb2ludCgwLjIsIDApKTtcblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUuYWRkTGF5ZXIoXCJiYWNrZ3JvdW5kUmFpbmJvd1wiLCBuZXcgUElYSS5Qb2ludCgwLjIsIDApKTtcblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUuYWRkTGF5ZXIoXCJiYWNrZ3JvdW5kQ2xvdWRzTWlkZGxlXCIsIG5ldyBQSVhJLlBvaW50KDAuMywgMCkpO1xuXHR0aGlzLl9zY3JvbGxlckVuZ2luZS5hZGRMYXllcihcImJhY2tncm91bmRDbG91ZHNCb3R0b21cIiwgbmV3IFBJWEkuUG9pbnQoMC40LCAwKSk7XG5cblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUuYWRkTGF5ZXIoXCJwaWNrdXBMYXllclwiLCBuZXcgUElYSS5Qb2ludCgxLCAxKSk7XG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmFkZExheWVyKFwicGFydGljbGVMYXllclwiLCBuZXcgUElYSS5Qb2ludCgwLCAxKSk7XG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmFkZExheWVyKFwicGxheWVyTGF5ZXJcIiwgbmV3IFBJWEkuUG9pbnQoMCwgMSkpO1xuXHR0aGlzLl9zY3JvbGxlckVuZ2luZS5hZGRMYXllcihcImNsb3VkTGF5ZXJcIiwgbmV3IFBJWEkuUG9pbnQoMSwgMSkpO1xuXG4vL0JhY2tncm91bmQgbGF5ZXJzXG5cblx0dGhpcy5fYWRkQmFja2dyb3VuZChbXG5cdCAgICAgICAgICAgICAgICAgICAgICAge3RleHR1cmU6XCJzdW5fYmdcIiwgd2lkdGg6MzgwMCwgaGVpZ2h0OjE1MzYsIG9mZnNldFg6MCwgb2Zmc2V0WTotQ29tbW9uLlNUQUdFX0hFSUdIVC8yfVxuXHQgICAgICAgICAgICAgICAgICAgIF0sIFwiYmFja2dyb3VuZFN1blwiLCAwKTtcblxuXHR0aGlzLl9hZGRCYWNrZ3JvdW5kKFtcblx0ICAgICAgICAgICAgICAgICAgICAgICB7dGV4dHVyZTpcImNsb3VkczFfYmdcIiwgd2lkdGg6MzYyOC8yLCBoZWlnaHQ6MTI2OC8yLCBvZmZzZXRYOjAsIG9mZnNldFk6MH0sXG5cdFx0XHRcdFx0XHQgICB7dGV4dHVyZTpcImNsb3VkczFfYmdcIiwgd2lkdGg6MzYyOC8yLCBoZWlnaHQ6MTI2OC8yLCBvZmZzZXRYOjAsIG9mZnNldFk6MjAwfSxcblx0XHRcdFx0XHRcdCAgIHt0ZXh0dXJlOlwiY2xvdWRzMV9iZ1wiLCB3aWR0aDozNjI4LzIsIGhlaWdodDoxMjY4LzIsIG9mZnNldFg6MCwgb2Zmc2V0WTotMjAwfVxuXHQgICAgICAgICAgICAgICAgICAgIF0sIFwiYmFja2dyb3VuZENsb3Vkc01pZGRsZVwiLCAwKTtcblxuXHR0aGlzLl9hZGRCYWNrZ3JvdW5kKFtcblx0XHRcdFx0XHRcdFx0e3RleHR1cmU6XCJyYWluYm93MV9iZ1wiLCB3aWR0aDozNDg3LzIsIGhlaWdodDoxNTQ0LzIsIG9mZnNldFg6NTAwLCBvZmZzZXRZOjB9XG5cdCAgICAgICAgICAgICAgICAgICAgXSwgXCJiYWNrZ3JvdW5kUmFpbmJvd1wiLCAwKTtcblxuXHR0aGlzLl9hZGRCYWNrZ3JvdW5kKFtcblx0ICAgICAgICAgICAgICAgICAgICAgICB7dGV4dHVyZTpcImZyYW1lX3VwcGVyLWNsb3Vkc1wiLCB3aWR0aDoxOTAwLCBoZWlnaHQ6NzYsIG9mZnNldFg6MCwgb2Zmc2V0WTowfVxuXHQgICAgICAgICAgICAgICAgICAgIF0sIFwiYmFja2dyb3VuZENsb3Vkc1RvcFwiLCAwKTtcblxuXHR0aGlzLl9hZGRCYWNrZ3JvdW5kKFtcblx0ICAgICAgICAgICAgICAgICAgICAgICB7dGV4dHVyZTpcImZyYW1lX2xvd2VyLWNsb3Vkc1wiLCB3aWR0aDoxOTAwLCBoZWlnaHQ6NzYsIG9mZnNldFg6MCwgb2Zmc2V0WTpDb21tb24uU1RBR0VfSEVJR0hUIC0gNzZ9XG5cdCAgICAgICAgICAgICAgICAgICAgXSwgXCJiYWNrZ3JvdW5kQ2xvdWRzQm90dG9tXCIsIDApO1xuXG5cblxuXG4vL0Nsb3VkIEdlbmVyYXRvclxuXHR0aGlzLl9jbG91ZEdlbmVyYXRvciA9IG5ldyBTY3JvbGxlck9iamVjdEdlbmVyYXRvcihcblx0W1xuXHRcdHtpZDpcImNsb3VkXCIsICBiYXNlOkNsb3VkLCAgYXJnczpbXX0sXG5cdFx0e2lkOlwicGlja3VwXCIsIGJhc2U6UGlja3VwLCBhcmdzOltdfSxcblx0XHR7aWQ6XCJlbmVteVwiLCAgYmFzZTpFbmVteSwgIGFyZ3M6W119XG5cdF0pO1xuXHR0aGlzLl9jbG91ZEdlbmVyYXRvci5zaWduYWxzLmdlbmVyYXRlT2JqZWN0cy5hZGQodGhpcy5vbkdlbmVyYXRlQ2xvdWQsIHRoaXMpO1xuXHR0aGlzLl9jbG91ZEdlbmVyYXRvci5zaWduYWxzLm9iamVjdERpc3Bvc2VkLmFkZCh0aGlzLm9uT2JqZWN0RGlzcG9zZWQsIHRoaXMpO1xuXHR0aGlzLl9jbG91ZEdlbmVyYXRvci5zZXRGcmVxdWVuY2llcygxLCAxKTtcblxuICAgIHRoaXMuX2Nsb3VkR2VuZXJhdG9yLmFkZFBhdHRlcm4oXG5cdFtcblx0ICAgIHt4OjAsIHk6MjAwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDoyNDAsIHk6LTI1MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdCAgICB7eDo2MCwgeToxMDAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0ICAgIHt4OjQwMCwgeToxMDAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHQgICAge3g6NDYwLCB5OjAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0ICAgIHt4OjgwMCwgeTowLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0ICAgIHt4Ojg2MCwgeTotMTAwLCBwb29sSWQ6XCJwaWNrdXBcIn1cblx0XSwgXCJzdGFpcnMxXCIpO1xuXG4gICAgdGhpcy5fY2xvdWRHZW5lcmF0b3IuYWRkUGF0dGVybihcblx0W1xuXHQgICAge3g6MCwgeTo1MCwgcG9vbElkOlwiY2xvdWRcIn0sXG5cdCAgICB7eDozMDAsIHk6MTUwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0ICAgIHt4OjM2MCwgeTo1MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHQgICAge3g6NjAwLCB5OjI1MCwgcG9vbElkOlwiY2xvdWRcIn0sXG5cdFx0e3g6NjYwLCB5OjE1MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHQgICAge3g6NjYwLCB5Oi0yMDAsIHBvb2xJZDpcImVuZW15XCJ9LFxuXHQgICAge3g6OTAwLCB5OjE1MCwgcG9vbElkOlwiY2xvdWRcIn0sXG5cdCAgICB7eDo5NjAsIHk6NTAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0ICAgIHt4OjEyMDAsIHk6NTAsIHBvb2xJZDpcImNsb3VkXCJ9XG5cdF0sIFwic3RhaXJzMlwiKTtcblxuXHR0aGlzLl9jbG91ZEdlbmVyYXRvci5hZGRQYXR0ZXJuKFxuXHRbXG5cdFx0e3g6MCwgeToxNTAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjQwMCwgeTotMTUwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDo4MDAsIHk6MTUwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDo2MCwgeTowLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6NDYwLCB5Oi0zMDAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo4NjAsIHk6MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjQ2MCwgeToxNTAsIHBvb2xJZDpcImVuZW15XCJ9XG5cdF0sIFwic3RhaXJzM1wiKTtcblxuXHR0aGlzLl9jbG91ZEdlbmVyYXRvci5hZGRQYXR0ZXJuKFxuXHRbXG5cdFx0e3g6MCwgeToyNTAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjMwMCwgeToxMDAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjYwMCwgeTotNTAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjE0MDAsIHk6MTUwLCBwb29sSWQ6XCJjbG91ZFwifSxcblxuXHRcdHt4OjEwMDAsIHk6LTE1MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6OTUwLCB5OjAsIHBvb2xJZDpcImVuZW15XCJ9LFxuXHRcdHt4OjkwMCwgeToxNTAsIHBvb2xJZDpcImVuZW15XCJ9LFxuXHRcdHt4Ojg1MCwgeTozMDAsIHBvb2xJZDpcImVuZW15XCJ9LFxuXG5cdFx0e3g6NjAsIHk6MTUwLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6MzYwLCB5OjAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo2NjAsIHk6LTE1MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjE0NjAsIHk6MCwgcG9vbElkOlwicGlja3VwXCJ9XG5cdF0sIFwic3RhaXJzNFwiKTtcblxuXG4gICAgdGhpcy5fY2xvdWRHZW5lcmF0b3IuYWRkUGF0dGVybihcblx0W1xuXHQgICAge3g6MCwgeToxNTAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjcwLCB5Oi0zMDAsIHBvb2xJZDpcImVuZW15XCJ9LFxuXHQgICAge3g6NDAwLCB5Oi0xNDAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo1NTAsIHk6LTIyMCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjcwMCwgeTotMjQwLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6NzAwLCB5OjUwLCBwb29sSWQ6XCJlbmVteVwifSxcblx0XHR7eDo2MjAsIHk6MjAwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDo4NTAsIHk6LTIyMCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjEwMDAsIHk6LTE0MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjEzNzAsIHk6LTI1MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdCAgICB7eDoxMzAwLCB5OjE1MCwgcG9vbElkOlwiY2xvdWRcIn1cblxuXHRdLCBcInJhaW5ib3cxXCIpO1xuXG4gICAgdGhpcy5fY2xvdWRHZW5lcmF0b3IuYWRkUGF0dGVybihcblx0W1xuXHQgICAge3g6MCwgeToxMDAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjQwMCwgeToyMjAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4Ojc1MCwgeTowLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDoxMjUwLCB5OjgwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDo1MDAsIHk6LTEwMCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6MjAwLCB5Oi0xMDAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDozNTAsIHk6LTI1MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjUwMCwgeTotMjgwLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6NjUwLCB5Oi0yMDAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo0NzAsIHk6MTAwLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6MTE4MCwgeTotMTgwLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6MTMwMCwgeTotODAsIHBvb2xJZDpcInBpY2t1cFwifVxuXHRdLCBcInJhaW5ib3cyXCIpO1xuXG4gICAgdGhpcy5fY2xvdWRHZW5lcmF0b3IuYWRkUGF0dGVybihcblx0W1xuXHQgICAge3g6MCwgeToxNTAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjYwLCB5Oi01MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjUwMCwgeTowLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDo1NjAsIHk6LTIwMCwgcG9vbElkOlwicGlja3VwXCJ9XG5cdF0sIFwiZG91YmxlQ2xvdWQxXCIpO1xuXG4gICAgdGhpcy5fY2xvdWRHZW5lcmF0b3IuYWRkUGF0dGVybihcblx0W1xuXHQgICAge3g6MCwgeTo1MCwgcG9vbElkOlwiY2xvdWRcIn0sXG5cdFx0e3g6MjUwLCB5Oi0yNTAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo0MjAsIHk6LTI1MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6NTAwLCB5OjIwMCwgcG9vbElkOlwiY2xvdWRcIn0sXG5cdFx0e3g6NTYwLCB5OjAsIHBvb2xJZDpcInBpY2t1cFwifVxuXHRdLCBcImRvdWJsZUNsb3VkMlwiKTtcblxuICAgIHRoaXMuX2Nsb3VkR2VuZXJhdG9yLmFkZFBhdHRlcm4oXG5cdFtcblx0ICAgIHt4OjAsIHk6MTAwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDozMDAsIHk6MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6NDAwLCB5Oi01MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6MzUwLCB5Oi0yMzAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo2MDAsIHk6NTAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjUzMCwgeTotMTkwLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6NjYwLCB5Oi01MCwgcG9vbElkOlwicGlja3VwXCJ9XG5cdF0sIFwib2JzdGFjbGUxXCIpO1xuXG5cdHRoaXMuX2Nsb3VkR2VuZXJhdG9yLmFkZFBhdHRlcm4oXG5cdFtcblx0XHR7eDowLCB5OjE4MCwgcG9vbElkOlwiY2xvdWRcIn0sXG5cdFx0e3g6NDUwLCB5OjgwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDo5MDAsIHk6MTgwLCBwb29sSWQ6XCJjbG91ZFwifSxcblx0XHR7eDo2MCwgeTotMjgwLCBwb29sSWQ6XCJlbmVteVwifSxcblx0XHR7eDozNjAsIHk6LTM1MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6NjYwLCAgeTotMzUwLCBwb29sSWQ6XCJlbmVteVwifSxcblx0XHR7eDo5NjAsIHk6LTI4MCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6MzIwLCB5OjEwMCwgcG9vbElkOlwiZW5lbXlcIn0sXG5cdFx0e3g6NzQwLCAgeToxMDAsIHBvb2xJZDpcImVuZW15XCJ9LFxuXHRcdHt4OjIzNSwgeTotMTAwLCBwb29sSWQ6XCJwaWNrdXBcIn0sXG5cdFx0e3g6NDEwLCB5Oi0yMDAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo2NjAsIHk6LTIwMCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4Ojg4NSwgeTotMTAwLCBwb29sSWQ6XCJwaWNrdXBcIn1cblx0XSwgXCJ0dW5uZWwxXCIpO1xuXG5cdHRoaXMuX2Nsb3VkR2VuZXJhdG9yLmFkZFBhdHRlcm4oXG5cdFtcblx0XHR7eDowLCB5OjE4MCwgcG9vbElkOlwiY2xvdWRcIn1cblx0XSwgXCJzaW1wbGVDbG91ZDFcIik7XG5cblx0dGhpcy5fY2xvdWRHZW5lcmF0b3IuYWRkUGF0dGVybihcblx0W1xuXHRcdHt4OjAsIHk6MTkwLCBwb29sSWQ6XCJlbmVteVwifSxcblx0XHR7eDoxMTAsIHk6OTAsIHBvb2xJZDpcImNsb3VkXCJ9LFxuXHRcdHt4OjE3MCwgeTotNTAsIHBvb2xJZDpcInBpY2t1cFwifSxcblx0XHR7eDo0MDAsIHk6MTkwLCBwb29sSWQ6XCJlbmVteVwifVxuXHRdLCBcInNpbXBsZUNsb3VkMlwiKVxuXG5cdHRoaXMuX2Nsb3VkR2VuZXJhdG9yLmFkZFBhdHRlcm4oXG5cdFtcblx0XHR7eDowLCB5OjE1MCwgcG9vbElkOlwiY2xvdWRcIn0sXG5cdFx0e3g6NjAsIHk6MCwgcG9vbElkOlwicGlja3VwXCJ9LFxuXHRcdHt4OjkwLCB5Oi0yMjAsIHBvb2xJZDpcImVuZW15XCJ9XG5cdF0sIFwic2ltcGxlQ2xvdWQzXCIpO1xuXG5cblxuLy8gQ2hhcmFjdGVyc1xuXHR0aGlzLl90YWlsID0gbmV3IFJhaW5ib3dUYWlsKCk7XG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmFkZE9iamVjdFRvTGF5ZXIodGhpcy5fdGFpbCwgXCJwbGF5ZXJMYXllclwiLCAwLCAwKTtcblxuXHR0aGlzLl9hdmF0YXIgPSBuZXcgQXZhdGFyKCk7XG5cdHRoaXMuX2F2YXRhci5fdGFpbCA9IHRoaXMuX3RhaWw7XG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmFkZE9iamVjdFRvTGF5ZXIodGhpcy5fYXZhdGFyLCBcInBsYXllckxheWVyXCIsIC10aGlzLl9hdmF0YXIud2lkdGgvMiwgKzYwKTtcblxuXG5cbi8vQ29sbGlzaW9uc1xuXHR0aGlzLl9zY3JvbGxlckVuZ2luZS5hZGRDb2xsaXNpb25EZXRlY3RvcihcImF2YXRhclwiLCBcImNsb3VkXCIpO1xuXHR0aGlzLl9zY3JvbGxlckVuZ2luZS5hZGRDb2xsaXNpb25EZXRlY3RvcihcImF2YXRhclwiLCBcInBpY2t1cFwiKTtcblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUuYWRkQ29sbGlzaW9uRGV0ZWN0b3IoXCJhdmF0YXJcIiwgXCJlbmVteVwiKTtcblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUuc2lnbmFscy5jb2xsaXNpb25GaXJlZC5hZGQodGhpcy5vbkNvbGxpc2lvbiwgdGhpcyk7XG5cbi8vIEhpdEFyZWFcblx0dGhpcy5faGl0QXJlYSA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10pO1xuXHR0aGlzLl9oaXRBcmVhLmFscGhhICA9IDA7XG5cdHRoaXMuX2hpdEFyZWEud2lkdGggID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9oaXRBcmVhLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuX2hpdEFyZWEuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX2hpdEFyZWEpO1xuXG4vL1VJXG5cdHRoaXMuX3Njb3JlQ291bnRlciA9IG5ldyBTY29yZUNvdW50ZXIoKTtcblx0dGhpcy5fc2NvcmVDb3VudGVyLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XG5cdHRoaXMuX3Njb3JlQ291bnRlci5pbml0KCk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NvcmVDb3VudGVyKTtcblx0dGhpcy5fc2NvcmVDb3VudGVyLnVwZGF0ZVNjb3JlKDApO1xuXG5cdHRoaXMuX2Jvb3N0QmFyID0gbmV3IEJvb3N0QmFyKCk7XG5cdHRoaXMuX2Jvb3N0QmFyLmluaXQoKTtcblx0dGhpcy5fYm9vc3RCYXIueCA9IENvbW1vbi5TVEFHRV9XSURUSC8yIC0gNDA7XG5cdHRoaXMuX2Jvb3N0QmFyLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW4gLSAxMDtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9ib29zdEJhcik7XG5cblx0dGhpcy5fcGlja3VwUGFydGljbGVIb2xkZXIgPSBuZXcgUGlja3VwUGFydGljbGVIb2xkZXIodGhpcy5fYm9vc3RCYXIueCArIHRoaXMuX2Jvb3N0QmFyLl9zdGFycy54LCB0aGlzLl9ib29zdEJhci55ICsgdGhpcy5fYm9vc3RCYXIuX3N0YXJzLnkpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3BpY2t1cFBhcnRpY2xlSG9sZGVyKTtcblx0Ly8gdGhpcy5fc2Nyb2xsZXJFbmdpbmUuYWRkT2JqZWN0VG9MYXllcih0aGlzLl9waWNrdXBQYXJ0aWNsZUhvbGRlciwgXCJwYXJ0aWNsZUxheWVyXCIsIDAsIC1Db21tb24uU1RBR0VfSEVJR0hULzIpO1xuXG5cdHRoaXMuX3BhdXNlQnV0dG9uID0gbmV3IHAzLkJ1dHRvbih0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9wYXVzZV9kZWZcIiksIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BhdXNlX292ZXJcIiksIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BhdXNlX3ByZXNzZWRcIikpO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKHRoaXMub25QYXVzZVByZXNzZWQsIHRoaXMpO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMuYnV0dG9uT3ZlciwgdGhpcyk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fcGF1c2VCdXR0b24pO1xuXG5cdHRoaXMuX211dGVCdXR0b24gPSBuZXcgcDMuTXV0ZUJ1dHRvblxuXHQoXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9kZWZcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vbl9wcmVzc2VkXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9wcmVzc2VkXCIpXG5cdCk7XG5cdHRoaXMuX211dGVCdXR0b24uaWQgPSBcIm11dGVcIjtcblx0dGhpcy5fbXV0ZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9tdXRlQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX211dGVCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLmJ1dHRvbk92ZXIsIHRoaXMpO1xuXHR0aGlzLl9tdXRlQnV0dG9uLmluaXQoKTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9tdXRlQnV0dG9uKTtcblxuXHQvLyBCbGFjayBzY3JlZW5cblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbiA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmFscGhhID0gMTtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi54ID0gMDtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zY3JlZW5UcmFuc2l0aW9uKVxuXG5cdHZhciBjb2xvcnMgPSBbMHgxMUIwNjYsIDB4RkZERTc1LCAweEYxN0FCMCwgMHgzOTkxQ0YsIDB4OEQ1OEE0XTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBiYW5kID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snd2hpdGVTcXVhcmUnXSk7XG5cdFx0YmFuZC50aW50ID0gY29sb3JzW2ldO1xuXHRcdGJhbmQud2lkdGggPSBDb21tb24uU1RBR0VfV0lEVEg7XG5cdFx0YmFuZC5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hULzU7XG5cdFx0YmFuZC55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVC81ICogaTtcblx0XHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmFkZENoaWxkKGJhbmQpO1xuXHR9XG5cbi8vU291bmRzXG5cdC8vIHRoaXMuX2JnTXVzaWMgPSBTb3VuZFNGWC5wbGF5KCdtdXNpY19pbmdhbWVfbG9vcF8wMCcsIHtsb29wOnRydWV9KTtcblx0Ly8gdGhpcy5fYmdNdXNpYy5mYWRlSW4oMSwgMTAwMCk7XG5cblxuLy8gVG91Y2ggYXJlYXNcblx0dGhpcy5faGl0QXJlYS50b3VjaHN0YXJ0ICA9IHRoaXMuX2hpdEFyZWEubW91c2Vkb3duID0gdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKTtcblx0dGhpcy5faGl0QXJlYS50b3VjaGVuZCAgICA9IHRoaXMuX2hpdEFyZWEubW91c2V1cCAgID0gdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyk7XG5cblx0XG5cdHRoaXMuX2hpdEFyZWEubW91c2Vtb3ZlID0gdGhpcy5faGl0QXJlYS50b3VjaG1vdmUgPSBmdW5jdGlvbihlKVxuXHR7XG5cdFx0dGhpcy5fYXZhdGFyLl9ib29zdFRhcmdldC54ID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcykueDtcblx0XHR0aGlzLl9hdmF0YXIuX2Jvb3N0VGFyZ2V0LnkgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzKS55IC0gNDAwO1xuXHR9LmJpbmQodGhpcyk7XG5cdFxuXHR0aGlzLnN0YXJ0R2FtZSgpO1xufTtcblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5zaG93R1VJKCk7XG5cblx0dGhpcy5faXNJbnRybyA9IHRydWU7XG5cdHRoaXMuX2Nsb3VkR2VuZXJhdG9yLmdlbmVyYXRlKCk7XG5cblx0Ly8gSW50cm9cblx0dGhpcy5faXNJbnRybyA9IHRydWU7XG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heChcblx0e1xuXHRcdG9uQ29tcGxldGU6IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLl9pc0ludHJvID0gZmFsc2U7XG5cdFx0fSxcblx0XHRvbkNvbXBsZXRlU2NvcGU6IHRoaXNcblx0fSk7XG5cdHRsLnRvKHRoaXMuX2F2YXRhciwgdGhpcy5faW50cm9UaW1lLCB7eDo1NzAsIGVhc2U6QmFjay5lYXNlT3V0fSwgMCApO1xuXHR0bC50byh0aGlzLl9hdmF0YXIsIHRoaXMuX2ludHJvVGltZSAqIC41LCB7eDo1NzAsIGVhc2U6U2luZS5lYXNlSW5PdXR9LCB0aGlzLl9pbnRyb1RpbWUgKiAuNSApO1xuXHR0bC50byh0aGlzLl9hdmF0YXIsIHRoaXMuX2ludHJvVGltZSwge3k6dGhpcy5fYXZhdGFyLnktMjAwLCBlYXNlOkVsYXN0aWMuZWFzZU91dH0sIDApO1xuXHQvLyB0bC50byh0aGlzLl9hdmF0YXIsIHRoaXMuX2ludHJvVGltZSAqIC41LCB7eTp0aGlzLl9hdmF0YXIueS0xMDAsIGVhc2U6U2luZS5lYXNlSW5PdXR9LCB0aGlzLl9pbnRyb1RpbWUgKiAuNSApO1xuXHR0bC50byh0aGlzLCB0aGlzLl9pbnRyb1RpbWUsIHtfc2Nyb2xsU3BlZWQ6dGhpcy5fc2Nyb2xsU3BlZWRTdGFydCwgZWFzZTpTaW5lLmVhc2VPdXR9LCAwKTtcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG5cblx0dGhpcy5fYXZhdGFyLl9kYXNoVGltZSA9IHRoaXMuX2ludHJvVGltZTtcblx0Ly8gdGhpcy5lbmRHYW1lKCk7XG59XG5cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmVuZEdhbWUgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cdFR3ZWVuTWF4LmtpbGxBbGwoKTtcblx0Q29tbW9uLmFuaW1hdG9yLnJlbW92ZUFsbCgpO1xuXG5cdHRoaXMuX3Njb3JlID0gTWF0aC5mbG9vcih0aGlzLl9zY29yZSk7XG5cblx0aWYodGhpcy5fc2NvcmUgPiB0aGlzLl9oaWdoc2NvcmUpXG5cdHtcblx0XHR0aGlzLl9oaWdoc2NvcmUgPSB0aGlzLl9zY29yZTtcblx0XHRDb21tb24uc2F2ZWREYXRhLmhpZ2hzY29yZSA9IHRoaXMuX2hpZ2hzY29yZTtcbiAgICAgICAgQ29tbW9uLnNhdmVkRGF0YS5zYXZlKCk7XG5cdH1cblxuXHR0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCh0aGlzLl9zY29yZSwgdGhpcy5faGlnaHNjb3JlKTtcbn07XG5cbi8qKlxuICovXG5HYW1lU2NyZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXG57XG5cdGlmKCF0aGlzLl9wYXVzZWQpXG5cdHtcblx0XHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuXG5cdFx0Ly8gUmFpbmJvdyB0YWlsXG5cdFx0dGhpcy5fdGFpbC5mb2xsb3codGhpcy5fYXZhdGFyLCB0aGlzLl9zY3JvbGxTcGVlZCk7XG5cblx0XHQvLyBTY3JvbGxcblx0XHR2YXIgc2Nyb2xsRGlzdGFuY2UgPSB0aGlzLl9zY3JvbGxTcGVlZCAqICh0aGlzLl9hdmF0YXIuaXNCb29zdCA/IHRoaXMuX2Jvb3N0U3BlZWRNdWx0aXBsaWVyIDogMSk7XG5cdFx0c2Nyb2xsRGlzdGFuY2UgPSAoc2Nyb2xsRGlzdGFuY2UgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWUpKjYwOyAvLyBNYWtlcyB0aGUgc2Nyb2xsaW5nIGRpc3RhbmNlIHRpbWUgZGVwZW5kYW50IGFuZCBub3QgZnJhbWUgZGVwZW5kYW50XG5cblx0XHR0aGlzLl9zY3JvbGxlckVuZ2luZS52aWV3WCAtPSBzY3JvbGxEaXN0YW5jZTtcblx0XHR0aGlzLl9zY3JvbGxlckVuZ2luZS51cGRhdGUoKTtcblxuXHRcdGlmKCF0aGlzLl9hdmF0YXIuaXNEZWFkKVxuXHRcdHtcblx0XHRcdC8vIEluY3JlbWVudCBzY3JvbGxTcGVlZFxuXHRcdFx0aWYodGhpcy5fc2Nyb2xsU3BlZWQgPCB0aGlzLl9zY3JvbGxTcGVlZEVuZClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fc2Nyb2xsU3BlZWQgKz0gKCgodGhpcy5fc2Nyb2xsU3BlZWRFbmQgLSB0aGlzLl9zY3JvbGxTcGVlZFN0YXJ0KS90aGlzLl9zY3JvbGxTcGVlZFRpbWUpICogcDMuVGltZXN0ZXAuZGVsdGFUaW1lKTtcblxuXHRcdFx0XHRpZih0aGlzLl9zY3JvbGxTcGVlZCA+IHRoaXMuX3Njcm9sbFNwZWVkRW5kKSB0aGlzLl9zY3JvbGxTcGVlZCA9IHRoaXMuX3Njcm9sbFNwZWVkRW5kO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBVcGRhdGUgc2NvcmVcblx0XHRcdGlmKCF0aGlzLl9pc0ludHJvKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9zY29yZSArPSB0aGlzLl9zY3JvbGxTcGVlZCAvIDUwO1xuXHRcdFx0XHR0aGlzLl9zY29yZUNvdW50ZXIudXBkYXRlU2NvcmUoTWF0aC5mbG9vcih0aGlzLl9zY29yZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHZW5lcmF0b3JzXG5cdFx0XHR0aGlzLl9jbG91ZEdlbmVyYXRvci51cGRhdGUoc2Nyb2xsRGlzdGFuY2UpO1xuXG5cdFx0XHQvLyBVcGRhdGUgYm9vc3Rcblx0XHRcdGlmKHRoaXMuX2F2YXRhci5pc0Jvb3N0ICYmIHRoaXMuX2Jvb3N0TWV0ZXIgIT0gMClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fYm9vc3RNZXRlciAtPSAodGhpcy5fYm9vc3RNZXRlck1heCAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZSkvdGhpcy5fYm9vc3REdXJhdGlvbjtcblxuXHRcdFx0XHRpZih0aGlzLl9ib29zdE1ldGVyIDw9IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLl9ib29zdE1ldGVyID0gMDtcblx0XHRcdFx0XHR0aGlzLl9hdmF0YXIuYm9vc3RFbmQoKTtcblx0XHRcdFx0XHR0aGlzLl9ib29zdE1ldGVyTWF4ICs9IHRoaXMuX2Jvb3N0TWV0ZXJJbmNyZW1lbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9ib29zdEJhci51cGRhdGVCb29zdE1ldGVyKHRoaXMuX2Jvb3N0TWV0ZXIvdGhpcy5fYm9vc3RNZXRlck1heCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0ZWxzZSBpZih0aGlzLl9hdmF0YXIuaXNPdXRPZlNjcmVlbilcblx0XHR7XG5cdFx0XHRpZighdGhpcy5fc2hha2UpXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFNoYWtlXG5cdFx0XHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcdFx0XHR0bC50byh0aGlzLCAwLjEsIHt4OnRoaXMueCAtODAsIGVhc2U6UXVhcnQuZWFzZU91dH0pO1xuXHRcdFx0XHR0bC50byh0aGlzLCAwLjEsIHt4OnRoaXMueCArNjAsIGVhc2U6UXVhcnQuZWFzZU91dH0pO1xuXHRcdFx0XHR0bC50byh0aGlzLCAwLjEsIHt4OnRoaXMueCAtNDAsIGVhc2U6UXVhZC5lYXNlT3V0fSk7XG5cdFx0XHRcdHRsLnRvKHRoaXMsIDAuMSwge3g6dGhpcy54ICsyMCwgZWFzZTpRdWFkLmVhc2VPdXR9KTtcblx0XHRcdFx0dGwudG8odGhpcywgMC4xLCB7eDp0aGlzLnggLTEsIGVhc2U6U2luZS5lYXNlT3V0fSk7XG5cdFx0XHRcdHRsLnRvKHRoaXMsIDAuMSwge3g6dGhpcy54LCBlYXNlOlNpbmUuZWFzZU91dH0pO1xuXHRcdFx0XHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcblx0XHRcdFx0dGhpcy5fc2hha2UgPSB0cnVlO1xuXHRcdFx0fVxuXG5cblx0XHRcdC8vIFN0b3Agc2Nyb2xsaW5nIHdoZW4gZGVhZFxuXHRcdFx0aWYodGhpcy5fc2Nyb2xsU3BlZWQgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9zY3JvbGxTcGVlZCAtPSBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKiB0aGlzLl9zY3JvbGxTcGVlZEVuZCAqIDAuNDtcblxuXHRcdFx0XHRpZih0aGlzLl9zY3JvbGxTcGVlZCA8IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLl9zY3JvbGxTcGVlZCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5fYXZhdGFyLnkgPj0gQ29tbW9uLlNUQUdFX0hFSUdIVCAmJiB0aGlzLl9zY3JvbGxTcGVlZCA9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmVuZEdhbWUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxufTtcblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKClcbntcblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUuY2FsbCh0aGlzKTtcblxuXHR0aGlzLl9tdXRlQnV0dG9uLnggICA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi54ICA9IHRoaXMuX2dldFNlY29uZEJ1dHRvblBvc2l0aW9uUmlnaHQoKSAtIDQwO1xuXHR0aGlzLl9zY29yZUNvdW50ZXIueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XG59O1xuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcblx0Ly8gU291bmRTRlguc3RvcCgnbXVzaWNfaW5nYW1lX2xvb3BfMDAnKTtcblx0dGhpcy5fYXZhdGFyLnN0b3BMb29wcygpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX1zY29wZVxuICovXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcblxuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVJbi5jYWxsKHRoaXMpO1xuXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7b25Db21wbGV0ZTpmdW5jdGlvbigpXG5cdHtcblx0XHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmFscGhhID0gMDtcblx0fSwgb25Db21wbGV0ZVNjb3BlOnRoaXN9KTtcblx0dGwudG8odGhpcy5fc2NyZWVuVHJhbnNpdGlvbiwgMC4zNSwge3g6Q29tbW9uLlNUQUdFX1dJRFRILCBlYXNlOlNpbmUuZWFzZUlufSwgMC4yKTtcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuXG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKHRoaXMpO1xufTtcblxuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuaGlkZUdVSSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSlcbntcblx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcblx0VHdlZW5NYXgucGF1c2VBbGwoKTtcblx0dGhpcy5fYXZhdGFyLnN0b3BMb29wcygpO1xuXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7b25Db21wbGV0ZVNjb3BlOnNjb3BlLCBvbkNvbXBsZXRlOmNhbGxiYWNrfSk7XG5cdHRsLnRvKHRoaXMuX3BhdXNlQnV0dG9uLnNjYWxlLCAgLjM1LCB7eDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW59LCAwKTtcblx0dGwudG8odGhpcy5fbXV0ZUJ1dHRvbi5zY2FsZSwgICAuMzUsIHt4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHR0bC50byh0aGlzLl9zY29yZUNvdW50ZXIuc2NhbGUsIC4zNSwge3g6MCwgeTowLCBlYXNlOkJhY2suZWFzZUlufSwgMCk7XG5cdHRsLnRvKHRoaXMuX2Jvb3N0QmFyLnNjYWxlLCAuMzUsIHt4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcblxuXHR0aGlzLl9zY3JvbGxlckVuZ2luZS5wYXVzZSgpO1xufVxuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuc2hvd0dVSSA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cdFR3ZWVuTWF4LnJlc3VtZUFsbCgpO1xuXHR0aGlzLl9hdmF0YXIucGxheUxvb3BzKCk7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cdHRsLnRvKHRoaXMuX211dGVCdXR0b24uc2NhbGUsICAgLjUsIHt4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXR9LCAwKTtcblx0dGwudG8odGhpcy5fcGF1c2VCdXR0b24uc2NhbGUsICAuNSwge3g6MSwgeToxLCBlYXNlOkJhY2suZWFzZU91dH0sIDAuMSk7XG5cdHRsLnRvKHRoaXMuX3Njb3JlQ291bnRlci5zY2FsZSwgLjUsIHt4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXR9LCAwLjEpO1xuXHR0bC50byh0aGlzLl9ib29zdEJhci5zY2FsZSwgLjUsIHt4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXR9LCAwLjEpO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcblxuXG5cblx0dGhpcy5fc2Nyb2xsZXJFbmdpbmUucmVzdW1lKCk7XG59XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAcGFyYW0geyFBcnJheX0gaW1hZ2VzXG4gKiBAcGFyYW0geyFTdHJpbmd9IGxheWVyTmFtZVxuICogQHBhcmFtIHshTnVtYmVyfSB5T2Zmc2V0XG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLl9hZGRCYWNrZ3JvdW5kID0gZnVuY3Rpb24oaW1hZ2VzLCBsYXllck5hbWUsIHlPZmZzZXQpXG57XG5cdHZhciBhcnIgPSBbXTtcblxuXHRmb3IodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0YXJyLnB1c2goXG5cdFx0e1xuXHRcdFx0YmFzZTpTY3JvbGxlck9iamVjdEltYWdlLFxuXHRcdFx0YXJnczpbbGF5ZXJOYW1lICsgXCJfXCIgKyAoaSsxKSwgdHJ1ZSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoaW1hZ2VzW2ldLnRleHR1cmUpXSxcblx0XHRcdGFyZWFSZWN0Om5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCBpbWFnZXNbaV0ud2lkdGgsIGltYWdlc1tpXS5oZWlnaHQpLFxuXHRcdFx0b2Zmc2V0Ont4OmltYWdlc1tpXS5vZmZzZXRYLCB5OmltYWdlc1tpXS5vZmZzZXRZfVxuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGxvb3AgPSBuZXcgU2Nyb2xsZXJMb29waW5nUmFuZ2UoYXJyLCB0cnVlLCBmYWxzZSk7XG5cdHRoaXMuX3Njcm9sbGVyRW5naW5lLmFkZExvb3BpbmdSYW5nZVRvTGF5ZXIobG9vcCwgbGF5ZXJOYW1lLCAwLCB5T2Zmc2V0KTtcbn07XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUsIGlkKVxue1xuXHRpZih0aGlzLl9pc0ludHJvKSByZXR1cm47XG5cblx0dGhpcy5fYXZhdGFyLmZhbGwoKTtcblx0XG5cdGlmKHAzLkRldmljZS5pc01vYmlsZSlcblx0e1xuXHRcdHRoaXMuX2F2YXRhci5fYm9vc3RUYXJnZXQueCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMpLng7XG5cdFx0dGhpcy5fYXZhdGFyLl9ib29zdFRhcmdldC55ID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcykueSAtIDQwMDtcblx0fVxufTtcblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLm9uVG91Y2hFbmQgPSBmdW5jdGlvbihldmVudCwgaWQpXG57XG5cdGlmKHRoaXMuX2lzSW50cm8pIHJldHVybjtcblxuXHR0aGlzLl9hdmF0YXIuZmFsbEVuZCgpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFTY3JvbGxpbmdPYmplY3R9IG9iamVjdDFcbiAqIEBwYXJhbSB7IVNjcm9sbGluZ09iamVjdH0gb2JqZWN0MlxuICovXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5vbkNvbGxpc2lvbiA9IGZ1bmN0aW9uKG9iamVjdDEsIG9iamVjdDIpXG57XG5cdGlmKHRoaXMuX2F2YXRhci5pc0RlYWQpIHJldHVybjtcblxuXHQvLyBDaGFyYWN0ZXIgLSBDbG91ZFxuXHRpZihvYmplY3QyLnR5cGUgPT0gJ2Nsb3VkJylcblx0e1xuXHRcdGlmKHRoaXMuX2F2YXRhci52ZXJ0aWNhbFNwZWVkID4gMClcblx0XHR7XG5cdFx0XHR0aGlzLl9hdmF0YXIuYm91bmNlKCk7XG5cdFx0XHRvYmplY3QyLmhpdCgpO1xuXHRcdH1cblx0fVxuXHRlbHNlIGlmKG9iamVjdDIudHlwZSA9PSBcInBpY2t1cFwiKVxuXHR7XG5cdFx0aWYob2JqZWN0Mi5oYXNCZWVuSGl0KSByZXR1cm47XG5cblx0XHRvYmplY3QyLmhpdCgpO1xuXG5cdFx0Ly8gU2NvcmVcblx0XHR0aGlzLl9zY29yZSArPSB0aGlzLl9zY3JvbGxTcGVlZCAqICh0aGlzLl9hdmF0YXIuaXNCb29zdCA/IHRoaXMuX2Jvb3N0U3BlZWRNdWx0aXBsaWVyIDogMSk7O1xuXHRcdHRoaXMuX3Njb3JlQ291bnRlci51cGRhdGVTY29yZShNYXRoLmZsb29yKHRoaXMuX3Njb3JlKSk7XG5cblx0XHQvLyBCb29zdFxuXHRcdHRoaXMuX2Jvb3N0TWV0ZXIgKz0gIXRoaXMuX2F2YXRhci5pc0Jvb3N0ID8gMSA6ICh0aGlzLl9ib29zdE1ldGVyID4gMSA/IDAuMjUgOiAwKTtcblx0XHR0aGlzLl9ib29zdEJhci51cGRhdGVCb29zdE1ldGVyKHRoaXMuX2Jvb3N0TWV0ZXIvdGhpcy5fYm9vc3RNZXRlck1heCk7XG5cblx0XHRpZih0aGlzLl9ib29zdE1ldGVyID49IHRoaXMuX2Jvb3N0TWV0ZXJNYXgpXG5cdFx0e1xuXHRcdFx0dGhpcy5fYXZhdGFyLmJvb3N0KCk7XG5cdFx0XHR0aGlzLl9jbG91ZEdlbmVyYXRvci5fdGFyZ2V0VGltZSAvPSB0aGlzLl9ib29zdFNwZWVkTXVsdGlwbGllcjtcblx0XHR9XG5cblx0XHRpZih0aGlzLl9ib29zdE1ldGVyID09IE1hdGguZmxvb3IodGhpcy5fYm9vc3RNZXRlck1heC8yKSlcblx0XHRcdFNvdW5kU0ZYLnBsYXlSYW5kb21Gcm9tKFtcInNmeF91bmljb3JuX3JhaW5ib3dfcG93ZXJfcmFuZG9tXzAwXCIsIFwic2Z4X3VuaWNvcm5fcmFpbmJvd19wb3dlcl9yYW5kb21fMDFcIl0pO1xuXHRcblx0XHRTb3VuZFNGWC5wbGF5KFwic2Z4X3JhaW5ib3dfcGlja3Vwc18wMFwiLHt2b2x1bWU6MC4zNX0pO1xuXG5cdFx0Ly8gUGFydGljbGVzXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKylcblx0XHR7XG5cdFx0XHR2YXIgeCA9IG9iamVjdDIueCArIG9iamVjdDIucGFyZW50Lng7XG5cdFx0XHR2YXIgeSA9IG9iamVjdDIueSArIG9iamVjdDIucGFyZW50LnkgKyBvYmplY3QyLl9zcHJpdGUueTtcblx0XHRcdHRoaXMuX3BpY2t1cFBhcnRpY2xlSG9sZGVyLmFkZE9iamVjdCh4LCB5LCBpICogMC4wNSk7XG5cdFx0fVxuXHR9XG5cdGVsc2UgaWYob2JqZWN0Mi50eXBlID09IFwiZW5lbXlcIilcblx0e1xuXHRcdG9iamVjdDIuaGl0KCk7XG5cblx0XHRpZih0aGlzLl9hdmF0YXIuZGllKCkpXG5cdFx0e1xuXHRcdFx0Ly8gU2hha2Vcblx0XHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcdFx0dGwudG8odGhpcywgMC4xLCB7eDp0aGlzLnggLTUwLCBlYXNlOlF1YXJ0LmVhc2VPdXR9KTtcblx0XHRcdHRsLnRvKHRoaXMsIDAuMSwge3g6dGhpcy54ICszMCwgZWFzZTpRdWFkLmVhc2VPdXR9KTtcblx0XHRcdHRsLnRvKHRoaXMsIDAuMSwge3g6dGhpcy54IC0xNSwgZWFzZTpTaW5lLmVhc2VPdXR9KTtcblx0XHRcdHRsLnRvKHRoaXMsIDAuMSwge3g6dGhpcy54LCBlYXNlOlNpbmUuZWFzZU91dH0pO1xuXHRcdFx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICovXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5vblBhdXNlUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0aWYodGhpcy5fYXZhdGFyLmlzRGVhZCkgcmV0dXJuO1xuXG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xuXHR0aGlzLl9hdmF0YXIuc3RvcExvb3BzKCk7XG5cblx0dGhpcy5zaWduYWxzLnBhdXNlUHJlc3NlZC5kaXNwYXRjaCgpO1xufVxuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuYnV0dG9uT3ZlciA9IGZ1bmN0aW9uKCkge1xuXG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCIpO1xufTtcblxuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxPYnN0YWNsZT59IG9ianNcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUub25HZW5lcmF0ZUNsb3VkID0gZnVuY3Rpb24ob2Jqcylcbntcblx0dmFyIHhNaW4gPSBudWxsO1xuXHR2YXIgeE1heCA9IG51bGw7XG5cblx0Ly8gQ2hhbmNlIGZvciBlbmVtaWVzIHRvIHNwYXduXG5cdHZhciBlbmVteVBlcmNlbnRhZ2UgPSB0aGlzLl9lbmVteVBlcmNlbnRhZ2VTdGFydCArICh0aGlzLl9lbmVteVBlcmNlbnRhZ2VFbmQgLSB0aGlzLl9lbmVteVBlcmNlbnRhZ2VTdGFydCkgKiAoKHRoaXMuX3Njcm9sbFNwZWVkIC0gdGhpcy5fc2Nyb2xsU3BlZWRTdGFydCkgLyAodGhpcy5fc2Nyb2xsU3BlZWRFbmQgLSB0aGlzLl9zY3JvbGxTcGVlZFN0YXJ0KSlcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKVxuICAgIHtcblx0XHQvLyBEb24ndCBzcGF3biBlbmVteSB3aGVuIHRoZSBwbGF5ZXIgaXMgaW52aW5jaWJpbGUsIHRoaXMgd2F5IHdoZW4gaXQgZXhpdCBmcm9tIHRoYXQgc3RhdGUgdGhlcmUgd2lsbCBiZSBubyBlbmVtaWVzIGluIGZyb250IG9mIGhpbVxuXHRcdGlmKG9ianNbaV0ub2JqLl90eXBlID09IFwiZW5lbXlcIiAmJiB0aGlzLl9hdmF0YXIuaXNCb29zdCkgY29udGludWU7XG5cblx0XHQvLyBMZXNzIGVuZW1pZXMgYXQgdGhlIHN0YXJ0XG5cdFx0aWYob2Jqc1tpXS5vYmouX3R5cGUgPT0gXCJlbmVteVwiICYmIE1hdGgucmFuZG9tKCkgPiBlbmVteVBlcmNlbnRhZ2UpIGNvbnRpbnVlO1xuXG4gICAgICAgIHZhciBsYXllciA9IHRoaXMuX3Njcm9sbGVyRW5naW5lLmdldExheWVyQ29udGFpbmVyKFwiY2xvdWRMYXllclwiKTtcbiAgICAgICAgdmFyIHggPSAobGF5ZXIueCotMSkgKyAodGhpcy5fc2Nyb2xsZXJFbmdpbmUudmlld0JvdW5kYXJ5LndpZHRoKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsZXJFbmdpbmUuYWRkT2JqZWN0VG9MYXllcihvYmpzW2ldLm9iaiwgXCJjbG91ZExheWVyXCIsIHggLSBvYmpzW2ldLm9iai5hcmVhUmVjdC54ICsgb2Jqc1tpXS5vZmZzZXQueCwgb2Jqc1tpXS5vZmZzZXQueSk7XG5cblx0XHQvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGUgY3VycmVudCBwYXR0ZXJuXG5cdFx0dmFyIGJvdW5kcyA9IG9ianNbaV0ub2JqLmdldExvY2FsQm91bmRzKCk7XG5cdFx0eE1pbiA9ICh4TWluID09IG51bGwgfHwgeE1pbiA+IG9ianNbaV0ub2JqLnggKyBib3VuZHMueCkgICAgICAgICAgICAgICAgPyAob2Jqc1tpXS5vYmoueCArIGJvdW5kcy54KSAgICAgICAgICAgICAgICA6IHhNaW47XG5cdFx0eE1heCA9ICh4TWF4ID09IG51bGwgfHwgeE1heCA8IG9ianNbaV0ub2JqLnggKyBib3VuZHMueCArIGJvdW5kcy53aWR0aCkgPyAob2Jqc1tpXS5vYmoueCArIGJvdW5kcy54ICsgYm91bmRzLndpZHRoKSA6IHhNYXg7XG4gICAgfVxuXG5cdHZhciBkaXN0YW5jZSA9ICh4TWF4IC0geE1pbik7XG5cdHRoaXMuX2Nsb3VkR2VuZXJhdG9yLnNldEZyZXF1ZW5jaWVzKGRpc3RhbmNlLCBkaXN0YW5jZSArIDYwMCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTY3JvbGxlck9iamVjdH0gb2JqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLm9uT2JqZWN0RGlzcG9zZWQgPSBmdW5jdGlvbihvYmopXG57XG5cbn1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUy9TRVRURVJTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIENvbW1vbiAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XG52YXIgU2ltcGxlU2NyZWVuID0gcmVxdWlyZShcIi4vU2ltcGxlU2NyZWVuXCIpO1xudmFyIE5leHRCdXR0b24gICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL05leHRCdXR0b25cIik7XG52YXIgU291bmRTRlggICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU291bmRTRlhcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50cm9TY3JlZW4oKVxue1xuXHQvKipcblx0ICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuXHQgKi9cblx0dGhpcy5fYmcgICAgICAgICAgICAgICAgID0gbnVsbDtcblx0dGhpcy5fYmFuZHNDb250YWluZXIgICAgID0gbnVsbDtcblx0dGhpcy5fcGFydGljbGVDb250YWluZXIgID0gbnVsbDtcblx0dGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1BJWEkuVGlsaW5nU3ByaXRlfVxuXHQgKi9cblx0dGhpcy5fYmFuZHMxID0gbnVsbDtcblx0dGhpcy5fYmFuZHMyID0gbnVsbDtcblx0dGhpcy5fYmFuZHMzID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1BJWEkuU3ByaXRlfVxuXHQgKi9cblx0dGhpcy5fbGV0c2hhdmVmdW4gPSBudWxsO1xuXHR0aGlzLl9jaGFyYWN0ZXIxICA9IG51bGw7XG5cdHRoaXMuX2NoYXJhY3RlcjIgID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge2Nsb3Vka2lkLkVtaXR0ZXJ9XG5cdCAqL1xuXHR0aGlzLl9iYXJzUFMgICA9IG51bGw7XG5cdHRoaXMuX3N0YXJzUFMgID0gbnVsbDtcblx0dGhpcy5fc3BhcmtzUFMgPSBudWxsO1xuXG5cdC8qXG5cdCAqIEB0eXBlIHtOZXh0QnV0dG9ufVxuXHQgKi9cblx0dGhpcy5fbmV4dEJ1dHRvbiA9IG51bGw7XG5cblx0Lypcblx0ICogQHR5cGUge3AzLk11dGVCdXR0b259XG5cdCAqL1xuXHR0aGlzLl9tdXRlQnV0dG9uID0gbnVsbDtcblxuXHQvKlxuXHQgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG5cdCAqL1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbnVsbDtcblxuXHRTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gSW50cm9TY3JlZW47XG5JbnRyb1NjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuSW50cm9TY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW50cm9TY3JlZW47XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuSW50cm9TY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKFwiSU5UUk8gSU5JVElBTElaRURcIik7XG5cblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cblxuXHQvLyBCR1xuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNhbnZhcy53aWR0aCAgPSAxO1xuXHRjYW52YXMuaGVpZ2h0ID0gMTAwO1xuXHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHR2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLDAsY2FudmFzLmhlaWdodCk7XG5cdGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLFwiI0ZCRjBDNVwiKTtcblx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsXCIjRjM4REI4XCIpO1xuXHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG5cdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cdHRoaXMuX2JnID0gbmV3IFBJWEkuU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tQ2FudmFzKGNhbnZhcykpO1xuXHR0aGlzLl9iZy53aWR0aCAgPSBDb21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuX2JnLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fYmcpO1xuXG5cdC8vIEJhbmRzXG5cdHRoaXMuX2JhbmRzQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdHRoaXMuX2JhbmRzQ29udGFpbmVyLmFscGhhID0gMDtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9iYW5kc0NvbnRhaW5lcik7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjYW52YXMud2lkdGggID0gNzAwO1xuXHRjYW52YXMuaGVpZ2h0ID0gMTtcblx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0dmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG5cdGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLFwiI0YyOEJCN1wiKTtcblx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsXCIjRjI4QkI3XCIpO1xuXHRjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG5cdGN0eC5maWxsUmVjdCgwLCAwLCAxNDUsIGNhbnZhcy5oZWlnaHQpO1xuXHRjdHguZmlsbFJlY3QoMTYwLCAwLCAyMCwgY2FudmFzLmhlaWdodCk7XG5cdGN0eC5maWxsUmVjdCgxOTAsIDAsIDEwLCBjYW52YXMuaGVpZ2h0KTtcblx0Y3R4LmZpbGxSZWN0KDMxMCwgMCwgMjUsIGNhbnZhcy5oZWlnaHQpO1xuXHRjdHguZmlsbFJlY3QoMzUwLCAwLCAxMjUsIGNhbnZhcy5oZWlnaHQpO1xuXHRjdHguZmlsbFJlY3QoNDkwLCAwLCAzNSwgY2FudmFzLmhlaWdodCk7XG5cblx0dGhpcy5fYmFuZHMxID0gbmV3IFBJWEkuVGlsaW5nU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tQ2FudmFzKGNhbnZhcyksIENvbW1vbi5TVEFHRV9XSURUSCwgQ29tbW9uLlNUQUdFX0hFSUdIVCk7XG5cdHRoaXMuX2JhbmRzMS53aWR0aCAgPSBDb21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuX2JhbmRzMS5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuXHR0aGlzLl9iYW5kczEuYWxwaGEgPSAwLjM7XG5cdHRoaXMuX2JhbmRzQ29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2JhbmRzMSk7XG5cblx0dGhpcy5fYmFuZHMyID0gbmV3IFBJWEkuVGlsaW5nU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tQ2FudmFzKGNhbnZhcyksIENvbW1vbi5TVEFHRV9XSURUSCwgQ29tbW9uLlNUQUdFX0hFSUdIVCk7XG5cdHRoaXMuX2JhbmRzMi53aWR0aCAgPSBDb21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuX2JhbmRzMi5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuXHR0aGlzLl9iYW5kczIuYWxwaGEgPSAwLjM7XG5cdHRoaXMuX2JhbmRzMi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDEuMiwgMSk7XG5cdHRoaXMuX2JhbmRzMi50aWxlUG9zaXRpb24ueCAtPSBjYW52YXMud2lkdGggKiBNYXRoLnJhbmRvbSgpO1xuXHR0aGlzLl9iYW5kc0NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9iYW5kczIpO1xuXG5cdHRoaXMuX2JhbmRzMyA9IG5ldyBQSVhJLlRpbGluZ1Nwcml0ZShQSVhJLlRleHR1cmUuZnJvbUNhbnZhcyhjYW52YXMpLCBDb21tb24uU1RBR0VfV0lEVEgsIENvbW1vbi5TVEFHRV9IRUlHSFQpO1xuXHR0aGlzLl9iYW5kczMud2lkdGggID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9iYW5kczMuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fYmFuZHMzLmFscGhhID0gMC4zO1xuXHR0aGlzLl9iYW5kczMudGlsZVBvc2l0aW9uLnggLT0gY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKTtcblx0dGhpcy5fYmFuZHNDb250YWluZXIuYWRkQ2hpbGQodGhpcy5fYmFuZHMzKTtcblxuXHQvLyBQYXJ0aWNsZSBzeXN0ZW1zXG5cdHRoaXMuX3BhcnRpY2xlQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdHRoaXMuX3BhcnRpY2xlQ29udGFpbmVyLnggPSBDb21tb24uU1RBR0VfV0lEVEgvMjtcblx0dGhpcy5fcGFydGljbGVDb250YWluZXIueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fcGFydGljbGVDb250YWluZXIpO1xuXG5cdHRoaXMuX2JhcnNQUyA9IG5ldyBjbG91ZGtpZC5FbWl0dGVyKHRoaXMuX3BhcnRpY2xlQ29udGFpbmVyLCBbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJiYXIxX3BhcnRcIiksIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYmFyMl9wYXJ0XCIpXSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJpbnRyb0JhcnNfcHNcIikpO1xuXHR0aGlzLl9iYXJzUFMuZW1pdCA9IGZhbHNlO1xuXG5cdHRoaXMuX3N0YXJzUFMgPSBuZXcgY2xvdWRraWQuRW1pdHRlcih0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lciwgW3RoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic3Rhcl9wYXJ0XCIpLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImRvdF9wYXJ0aWNsZVwiKV0sIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKFwiaW50cm9TdGFyc19wc1wiKSk7XG5cdHRoaXMuX3N0YXJzUFMuZW1pdCA9IGZhbHNlO1xuXG5cdC8vIExldHNoYXZlZnVuXG5cdHRoaXMuX2xldHNoYXZlZnVuID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwibGV0c2hhdmVmdW5cIikpO1xuXHR0aGlzLl9sZXRzaGF2ZWZ1bi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdHRoaXMuX2xldHNoYXZlZnVuLnggPSBDb21tb24uU1RBR0VfV0lEVEgvMi0yNDA7XG5cdHRoaXMuX2xldHNoYXZlZnVuLnkgPSBDb21tb24uU1RBR0VfSEVJR0hULzItODA7XG5cdHRoaXMuX2xldHNoYXZlZnVuLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fbGV0c2hhdmVmdW4pO1xuXG5cblx0Ly8gQ2hhcmFjdGVyXG5cdHRoaXMuX2NoYXJhY3RlckNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIueCA9IENvbW1vbi5TVEFHRV9XSURUSC8yICsgMjEwO1xuXHR0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyKTtcblxuXHR0aGlzLl9jaGFyYWN0ZXIxID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicmF2ZW4xXCIpKTtcblx0dGhpcy5fY2hhcmFjdGVyMS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEpO1xuXHR0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIuYWRkQ2hpbGQodGhpcy5fY2hhcmFjdGVyMSk7XG5cdHRoaXMuX2NoYXJhY3RlcjIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJyYXZlbjJcIikpO1xuXHR0aGlzLl9jaGFyYWN0ZXIyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XG5cdHRoaXMuX2NoYXJhY3RlcjIuYWxwaGEgPSAwO1xuXHR0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIuYWRkQ2hpbGQodGhpcy5fY2hhcmFjdGVyMik7XG5cblx0dGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLnkgKz0gdGhpcy5fY2hhcmFjdGVyMS5oZWlnaHRcblxuXG5cdHRoaXMuX3NwYXJrc1BTID0gbmV3IGNsb3Vka2lkLkVtaXR0ZXIodGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLCBbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzdGFyM19wYXJ0XCIpXSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJpbnRyb1NwYXJrc19wc1wiKSk7XG5cdHRoaXMuX3NwYXJrc1BTLmVtaXQgPSBmYWxzZTtcblxuXG5cblx0Ly8gQnV0dG9uc1xuXHR0aGlzLl9uZXh0QnV0dG9uID0gbmV3IE5leHRCdXR0b24oXCJhcnJvd1wiLCAwKTtcblx0dGhpcy5fbmV4dEJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAtIDEzMDtcblx0dGhpcy5fbmV4dEJ1dHRvbi5pbml0KCk7XG5cdHRoaXMuX25leHRCdXR0b24uc2lnbmFscy5jbGlja2VkLmFkZE9uY2UodGhpcy5uZXh0Q2xpY2tlZCwgdGhpcyk7XG5cdHRoaXMuX25leHRCdXR0b24uc2lnbmFscy5jbGlja0ZpbmlzaC5hZGRPbmNlKHRoaXMubmV4dENsaWNrRmluaXNoLCB0aGlzKTtcblx0dGhpcy5fbmV4dEJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsMCk7XG5cdC8vIHRoaXMuX25leHRCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLmJ1dHRvbk92ZXIsIHRoaXMpO1xuXG5cdGlmKENvbW1vbi5zYXZlZERhdGEuaGFzU2VlbkludHJvKVxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fbmV4dEJ1dHRvbik7XG5cblx0dGhpcy5fbXV0ZUJ1dHRvbiA9IG5ldyBwMy5NdXRlQnV0dG9uKFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX2RlZlwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX292ZXJcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb2ZmX292ZXJcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fcHJlc3NlZFwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfcHJlc3NlZFwiKVxuXHQpO1xuXHR0aGlzLl9tdXRlQnV0dG9uLmlkID0gXCJtdXRlXCI7XG5cdHRoaXMuX211dGVCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcblx0dGhpcy5fbXV0ZUJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMuYnV0dG9uT3ZlciwgdGhpcyk7XG5cdHRoaXMuX211dGVCdXR0b24uaW5pdCgpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX211dGVCdXR0b24pO1xuXG5cblx0Ly8gQmxhY2sgc2NyZWVuXG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24gPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi5hbHBoYSA9IDE7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24ueCA9IDA7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NyZWVuVHJhbnNpdGlvbilcblxuXHR2YXIgY29sb3JzID0gWzB4MTFCMDY2LCAweEZGREU3NSwgMHhGMTdBQjAsIDB4Mzk5MUNGLCAweDhENThBNF07XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgYmFuZCA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ3doaXRlU3F1YXJlJ10pO1xuXHRcdGJhbmQudGludCA9IGNvbG9yc1tpXTtcblx0XHRiYW5kLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHRcdGJhbmQuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVC81O1xuXHRcdGJhbmQueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQvNSAqIGk7XG5cdFx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi5hZGRDaGlsZChiYW5kKTtcblx0fVxufTtcblxuLyoqXG4gKi9cbkludHJvU2NyZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXG57XG5cdC8vIFVwZGF0ZSBwYXJ0aWNsZSBzeXN0ZW1cblx0dGhpcy5fc3RhcnNQUy51cGRhdGUocDMuVGltZXN0ZXAuZGVsdGFUaW1lKTtcblx0dGhpcy5fYmFyc1BTLnVwZGF0ZShwMy5UaW1lc3RlcC5kZWx0YVRpbWUpO1xuXHR0aGlzLl9zcGFya3NQUy51cGRhdGUocDMuVGltZXN0ZXAuZGVsdGFUaW1lKTtcbn07XG5cbi8qKlxuICovXG5JbnRyb1NjcmVlbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuX25leHRCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpIC0gMTUwO1xuXHR0aGlzLl9tdXRlQnV0dG9uLnggPSB0aGlzLl9nZXRGaXJzdEJ1dHRvblBvc2l0aW9uUmlnaHQoKTtcbn07XG5cbi8qKlxuICovXG5JbnRyb1NjcmVlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcblx0Ly8gU291bmRTRlguc3RvcCgnbXVzaWNfbWVudV9sb29wXzAwJyk7XG5cblx0dGhpcy5fbmV4dEJ1dHRvbi5zaWduYWxzLmNsaWNrRmluaXNoLnJlbW92ZSh0aGlzLm5leHRDbGlja0ZpbmlzaCwgdGhpcyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cbkludHJvU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwodGhpcyk7XG5cblx0Ly8gQnV0dG9uc1xuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0dGwudG8odGhpcy5fc2NyZWVuVHJhbnNpdGlvbiwgMC4zNSwge3g6Q29tbW9uLlNUQUdFX1dJRFRILCBlYXNlOlNpbmUuZWFzZUlufSwgMCk7XG5cdHRsLnRvKHRoaXMuX25leHRCdXR0b24uc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCAwLjUpO1xuXG5cdHRsLnRvKHRoaXMuX2NoYXJhY3RlckNvbnRhaW5lciwgMC40LCB7eTpDb21tb24uU1RBR0VfSEVJR0hULCBlYXNlOlF1YWQuZWFzZU91dCwgb25Db21wbGV0ZTpmdW5jdGlvbigpe3RoaXMuX3N0YXJzUFMuZW1pdCA9IHRydWU7IHRoaXMuX2JhcnNQUy5lbWl0ID0gdHJ1ZTt9LCBvbkNvbXBsZXRlU2NvcGU6dGhpc30sIDAuNSk7XG5cdHRsLnRvKHRoaXMuX2NoYXJhY3RlckNvbnRhaW5lciwgMC4xNSwge3k6Q29tbW9uLlNUQUdFX0hFSUdIVCsgNTAsIGVhc2U6U2luZS5lYXNlSW4sIG9uQ29tcGxldGU6ZnVuY3Rpb24oKXt0aGlzLl9zcGFya3NQUy5lbWl0ID0gdHJ1ZTsgU291bmRTRlgucGxheSgnc2Z4X3JhdmVuX2xhdWdoXzAwJyx7dm9sdW1lIDogMC42Nn0pO30sIG9uQ29tcGxldGVTY29wZTp0aGlzfSwgMC45KTtcblx0dGwudG8odGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLCAwLjE1LCB7eTpDb21tb24uU1RBR0VfSEVJR0hULCBlYXNlOlNpbmUuZWFzZU91dH0sIDEuMDUpO1xuXHR0bC50byh0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIsIDAuMTUsIHt5OkNvbW1vbi5TVEFHRV9IRUlHSFQrIDMwLCBlYXNlOlNpbmUuZWFzZUlufSwgMS4yKTtcblx0dGwudG8odGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLCAwLjE1LCB7eTpDb21tb24uU1RBR0VfSEVJR0hULCBlYXNlOlNpbmUuZWFzZU91dH0sIDEuMzUpO1xuXG5cdHRsLnRvKHRoaXMuX2NoYXJhY3RlcjIsIDAuMzUsIHthbHBoYToxLCBlYXNlOlF1YWQuZWFzZU91dH0sIDEuMSk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0aWYoQ29tbW9uLkNPVU5UUllfQ09ERSA9PSBcInJ1XCIpIHNjYWxlID0gMC44NTtcblx0aWYoQ29tbW9uLkNPVU5UUllfQ09ERSA9PSBcIml0XCIpIHNjYWxlID0gMC45MDtcblx0aWYoQ29tbW9uLkNPVU5UUllfQ09ERSA9PSBcImVzXCIpIHNjYWxlID0gMC45MDtcblx0XG5cdHRsLnRvKHRoaXMuX2xldHNoYXZlZnVuLnNjYWxlLCAwLjYsIHt4OjEqc2NhbGUsIHk6MSpzY2FsZSwgZWFzZTpTaW5lLmVhc2VPdXR9LCAxLjMpO1xuXHR0bC50byh0aGlzLl9sZXRzaGF2ZWZ1bi5zY2FsZSwgMC42LCB7eDowLjk1KnNjYWxlLCB5OjAuOTUqc2NhbGUsIGVhc2U6U2luZS5lYXNlSW5PdXQsIHJlcGVhdDotMSwgeW95bzp0cnVlfSwgMS45KTtcblxuXG5cdHRsLnRvKHRoaXMuX2JhbmRzQ29udGFpbmVyLCAxLCB7YWxwaGE6MSwgZWFzZTpTaW5lLmVhc2VPdXR9LCAwLjUpO1xuXHR0bC50byh0aGlzLl9iYW5kczEudGlsZVBvc2l0aW9uLCAxNSAqIDEwMCwge3g6dGhpcy5fYmFuZHMxLndpZHRoICogMTAwLCBlYXNlOkxpbmVhci5lYXNlTm9uZX0sIDApO1xuXHR0bC50byh0aGlzLl9iYW5kczIudGlsZVBvc2l0aW9uLCAyMCAqIDEwMCwge3g6LXRoaXMuX2JhbmRzMi53aWR0aCAqIDEwMCwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9LCAwKTtcblx0dGwudG8odGhpcy5fYmFuZHMzLnRpbGVQb3NpdGlvbiwgMjUgKiAxMDAsIHt4OnRoaXMuX2JhbmRzMy53aWR0aCAqIDEwMCwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9LCAwKTtcblxuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcblxuXHRDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpXG5cdHtcblx0XHRDb21tb24uc2F2ZWREYXRhLmhhc1NlZW5JbnRybyA9IHRydWU7XG5cdFx0Q29tbW9uLnNhdmVkRGF0YS5zYXZlKCk7XG5cdFx0dGhpcy5hbmltYXRlT3V0KCk7XG5cdH0sIDQuNSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuSW50cm9TY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24ueCA9IC1Db21tb24uU1RBR0VfV0lEVEg7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtvbkNvbXBsZXRlOiBmdW5jdGlvbigpXG5cdHtcblx0XHR0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpO1xuXHR9LCBvbkNvbXBsZXRlU2NvcGU6IHRoaXN9KTtcblxuXHR0bC50byh0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLCAwLjYsIHt4OjAsIGVhc2U6U2luZS5lYXNlT3V0fSwgMCk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5JbnRyb1NjcmVlbi5wcm90b3R5cGUubmV4dENsaWNrZWQgPSBmdW5jdGlvbigpXG57XG5cdC8vIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmRpc3BhdGNoKCk7XG5cdHRoaXMuYW5pbWF0ZU91dCgpO1xuXG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuLyoqXG4gKi9cbkludHJvU2NyZWVuLnByb3RvdHlwZS5idXR0b25PdmVyID0gZnVuY3Rpb24oKVxue1xuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiKTtcbn07XG5cbi8qKlxuICovXG5JbnRyb1NjcmVlbi5wcm90b3R5cGUubmV4dENsaWNrRmluaXNoID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpO1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUy9TRVRURVJTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIiwiLyoqXG4gKiAgUHJlbG9hZGVyXG4gKi9cblxudmFyIFNvdW5kU0ZYICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL1NvdW5kU0ZYXCIpO1xudmFyIFNpbXBsZVNjcmVlbiA9IHJlcXVpcmUoXCIuL1NpbXBsZVNjcmVlblwiKTtcbnZhciBDb21tb24gICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xuLy8gdmFyIEJyaW0gICAgICAgICA9IHJlcXVpcmUoXCIuLi9icmltXCIpO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFByZWxvYWRlcigpXG57XG5cdFNpbXBsZVNjcmVlbi5jYWxsKHRoaXMpO1xuXG5cdC8vIERhdGFcblx0dGhpcy5sb2FkZWRQZXJjZW50YWdlID0gMC4wO1xuXG5cdC8vIFNpZ25hbHNcblx0dGhpcy5zaWduYWxzLmxvYWRpbmdDb21wbGV0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBQcmVsb2FkZXI7XG5QcmVsb2FkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaW1wbGVTY3JlZW4ucHJvdG90eXBlKTtcblByZWxvYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQcmVsb2FkZXI7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblByZWxvYWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcblx0Y29uc29sZS5sb2coXCJQUkVMT0FERVIgSU5JVElBTElaRURcIik7XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXG5cdC8vIEdlbmVyYXRlZCBzcXVhcmUgdGV4dHVyZVxuXHR2YXIgZ3IgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuXHRnci5iZWdpbkZpbGwoMHgwMDAwMDApO1xuXHRnci5kcmF3UmVjdCgwLCAwLCAxLCAxKTtcblx0Q29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWydibGFja1NxdWFyZSddID0gZ3IuZ2VuZXJhdGVUZXh0dXJlKENvbW1vbi5yZW5kZXJlciwgMS4wLCBQSVhJLlNDQUxFX01PREVTLkxJTkVBUik7XG5cblx0dmFyIGdyID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblx0Z3IuYmVnaW5GaWxsKDB4ZmZmZmZmKTtcblx0Z3IuZHJhd1JlY3QoMCwgMCwgMSwgMSk7XG5cdENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snd2hpdGVTcXVhcmUnXSA9IGdyLmdlbmVyYXRlVGV4dHVyZShDb21tb24ucmVuZGVyZXIsIDEuMCwgUElYSS5TQ0FMRV9NT0RFUy5MSU5FQVIpO1xuXG5cdC8vIEZvbnQgcHJlbG9hZGVyXG5cdHZhciBoaWRkZW5MaXZlVGV4dCA9IG5ldyBQSVhJLlRleHQoXCJUZXN0XCIsIHtmb250OiBcIjMycHggRnJlZEZyZWRidXJnZXJBcmEtUmVndWxhclwiLCBmaWxsOiAweDAwMDAwMCwgYWxpZ246IFwiY2VudGVyXCIsIHN0cm9rZTogMHgwLCBzdHJva2VUaGlja25lc3M6IDF9KTtcblx0aGlkZGVuTGl2ZVRleHQuYWxwaGEgPSAwO1xuXHR0aGlzLmFkZENoaWxkKGhpZGRlbkxpdmVUZXh0KTtcblxuXHR2YXIgaGlkZGVuTGl2ZVRleHQgPSBuZXcgUElYSS5UZXh0KFwiVGVzdFwiLCB7Zm9udDogXCIzMnB4IEdyaWxsZWRDaGVlc2VCVE4tUmVndWxhclwiLCBmaWxsOiAweDAwMDAwMCwgYWxpZ246IFwiY2VudGVyXCIsIHN0cm9rZTogMHgwLCBzdHJva2VUaGlja25lc3M6IDF9KTtcblx0aGlkZGVuTGl2ZVRleHQuYWxwaGEgPSAwO1xuXHR0aGlzLmFkZENoaWxkKGhpZGRlbkxpdmVUZXh0KTtcblxuXHR2YXIgaGlkZGVuTGl2ZVRleHQgPSBuZXcgUElYSS5UZXh0KFwiVGVzdFwiLCB7Zm9udDogXCIzMnB4IEp1bmVndWxsLVJlZ3VsYXJcIiwgZmlsbDogMHgwMDAwMDAsIGFsaWduOiBcImNlbnRlclwiLCBzdHJva2U6IDB4MCwgc3Ryb2tlVGhpY2tuZXNzOiAxfSk7XG5cdGhpZGRlbkxpdmVUZXh0LmFscGhhID0gMDtcblx0dGhpcy5hZGRDaGlsZChoaWRkZW5MaXZlVGV4dCk7XG5cblx0Ly8gQnJpbVxuXHQvLyBpZihwMy5EZXZpY2UuaXNNb2JpbGUgJiYgcDMuRGV2aWNlLmlzSU9TKVxuXHQvLyB7XG5cdFx0Ly8gdmFyIGJyaW0gPSBuZXcgQnJpbSgpO1xuXHQvLyB9XG5cdFxuXHQvLyBCYWNrZ3JvdW5kXG5cdHZhciBiZyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9iZ1wiKSk7XG5cdHRoaXMuYWRkQ2hpbGQoYmcpO1xuXG5cdC8vIExvYWRpbmcgYmFyXG5cdHRoaXMuX2JhckNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9iYXJDb250YWluZXIueCA9IChDb21tb24uU1RBR0VfV0lEVEggLyAyKTtcblx0dGhpcy5fYmFyQ29udGFpbmVyLnkgPSAoQ29tbW9uLlNUQUdFX0hFSUdIVCAvIDIpICsgMjAwO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX2JhckNvbnRhaW5lcilcblxuXHRcdHRoaXMuX2Jhck91dGVyID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicHJlbG9hZGVyX292ZXJsYXlcIikpO1xuXHRcdHRoaXMuX2Jhck91dGVyLnggPSAtMjUwO1xuXHRcdHRoaXMuX2Jhck91dGVyLmFuY2hvci5zZXQoLjUpO1xuXG5cdFx0dGhpcy5fYmFySW5uZXIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwcmVsb2FkZXJfZmlsbFwiKSk7XG5cdFx0dGhpcy5fYmFySW5uZXIueCA9IHRoaXMuX2Jhck91dGVyLnggLSAodGhpcy5fYmFyT3V0ZXIud2lkdGgvMikgLSAxNzA7XG5cdFx0dGhpcy5fYmFySW5uZXIueSA9IHRoaXMuX2Jhck91dGVyLnkgLSAodGhpcy5fYmFyT3V0ZXIuaGVpZ2h0LzIpICsgMTA7XG5cdFx0dGhpcy5fYmFySW5uZXJTdGFydFggPSB0aGlzLl9iYXJJbm5lci54O1xuXG5cdFx0dGhpcy5fYmFyQ29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2JhcklubmVyKTtcblx0XHR0aGlzLl9iYXJDb250YWluZXIuYWRkQ2hpbGQodGhpcy5fYmFyT3V0ZXIpO1xuXG5cdFx0dmFyIGJsYWNrID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSk7XG5cdFx0YmxhY2sueCA9IHRoaXMuX2JhcklubmVyLnggLSAodGhpcy5fYmFySW5uZXIud2lkdGgvMik7XG5cdFx0YmxhY2sud2lkdGggPSB0aGlzLl9iYXJPdXRlci53aWR0aC8yO1xuXHRcdGJsYWNrLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdFx0YmxhY2sueSA9IC0xMDA7XG5cdFx0dGhpcy5fYmFyQ29udGFpbmVyLmFkZENoaWxkKGJsYWNrKTtcblxuXHQvLyBNb2JpbGUgcGxheSBidXR0b25cblx0dGhpcy5fcGxheUJ1dHRvbiA9IG5ldyBwMy5CdXR0b25cblx0KFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BsYXlfZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BsYXlfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9wbGF5X3ByZXNzZWRcIilcblx0KTtcblx0dGhpcy5fcGxheUJ1dHRvbi54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuXHR0aGlzLl9wbGF5QnV0dG9uLnkgPSAgdGhpcy5fYmFyQ29udGFpbmVyLnk7XG5cdHRoaXMuX3BsYXlCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuXHR0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMuY2xpY2suYWRkKHRoaXMub25QbGF5QnV0dG9uQ2xpY2ssIHRoaXMpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3BsYXlCdXR0b24pO1xufTtcblxuLyoqXG4gKi9cblByZWxvYWRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG5cdHRoaXMuc2lnbmFscy5sb2FkaW5nQ29tcGxldGUuZGlzcG9zZSgpO1xufTtcblxuLyoqXG4gKi9cblByZWxvYWRlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG5cdHRoaXMueCA9IChwMy5WaWV3LndpZHRoIC0gQ29tbW9uLlNUQUdFX1dJRFRIKSAqIDAuNTtcblx0dGhpcy55ID0gKHAzLlZpZXcuaGVpZ2h0IC0gQ29tbW9uLlNUQUdFX0hFSUdIVCkgKiAwLjU7XG59O1xuXG4vKipcbiAqL1xuUHJlbG9hZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXG57XG5cdC8vIGNvbnNvbGUubG9nKFwiTE9BRElORzogXCIgKyB0aGlzLmxvYWRlZFBlcmNlbnRhZ2UpO1xuXG5cdHRoaXMuX2JhcklubmVyLnggPSB0aGlzLl9iYXJJbm5lclN0YXJ0WCArICg2OTggKiAodGhpcy5sb2FkZWRQZXJjZW50YWdlLzEwMCkpO1xuXG5cdC8vIE9uIG1vYmlsZSBzaG93IGEgYnV0dG9uIGJlZm9yZSBnb2luZyB0byB0aGUgZ2FtZSBzbyB0aGUgYXVkaW8gaXMgbG9hZGVkIGV2ZW4gd2hlbiB0aGUgY29udGVudCBpcyBvbiBhbm90aGVyIGRvbWFpblxuXHRpZighdGhpcy5fY29tcGxldGVkICYmIHRoaXMubG9hZGVkUGVyY2VudGFnZSA9PSAxMDApXG5cdHtcblx0XHR0aGlzLl9jb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0aWYgKHAzLkRldmljZS5pc01vYmlsZSlcblx0XHR7XG5cdFx0XHR0aGlzLl9wbGF5QnV0dG9uLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5fcGxheUJ1dHRvbi5zY2FsZS5zZXQoMCk7XG5cdFx0XHRUd2Vlbk1heC5mcm9tVG8odGhpcy5fcGxheUJ1dHRvbi5zY2FsZSwgMC4zNSwge3g6MCwgeTowfSwge3g6IDEsIHk6IDEsIGVhc2U6IEJhY2suZWFzZU91dCwgZGVsYXk6MC4zNX0pO1xuXHRcdFx0VHdlZW5NYXgudG8odGhpcy5fYmFyQ29udGFpbmVyLnNjYWxlLCAwLjM1LCB7eDogMCwgeTogMCwgZWFzZTogQmFjay5lYXNlSW59KTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5QcmVsb2FkZXIucHJvdG90eXBlLmFuaW1hdGVJbiA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSlcbntcblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4uY2FsbChjYWxsYmFjaywgc2NvcGUpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblByZWxvYWRlci5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbChjYWxsYmFjaywgc2NvcGUpO1xuXG5cdHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0b25Db21wbGV0ZTogY2FsbGJhY2ssXG5cdFx0b25Db21wbGV0ZVNjb3BlOiBzY29wZVxuXHR9KTtcblx0dGhpcy5fdHdlZW5zLnB1c2godGltZWxpbmUpO1xufTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuUHJlbG9hZGVyLnByb3RvdHlwZS5vblBsYXlCdXR0b25DbGljayA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSlcbntcblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG5cdHRoaXMuc2lnbmFscy5sb2FkaW5nQ29tcGxldGUuZGlzcGF0Y2goKTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiIsIlxudmFyIENvbW1vbiAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcbnZhciBTY2VuZSAgICAgICA9IHJlcXVpcmUoXCIuLi9saWIvU2NlbmVcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2ltcGxlU2NyZWVuKCkge1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c2lnbmFscy5TaWduYWx9XG4gICAgICovXG4gICAgdGhpcy5zaWduYWxzID0ge307XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4gPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4gPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7cDMuQXNzZXRNYW5hZ2VyfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QXJyYXkuPFR3ZWVuTWF4Pn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fdHdlZW5zID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlBvaW50fVxuICAgICAqL1xuICAgIHRoaXMuX2NlbnRyZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2xlZnRFZGdlID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmlnaHRFZGdlID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luID0gMTAwO1xuXG5cbiAgICBwMy5TY3JlZW4uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2ltcGxlU2NyZWVuO1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2NlbmUucHJvdG90eXBlKTtcblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTaW1wbGVTY3JlZW47XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3R3ZWVucyA9IFtdO1xuICAgIHRoaXMuX2NlbnRyZSA9IG5ldyBQSVhJLlBvaW50KENvbW1vbi5TVEFHRV9XSURUSC8yLCBDb21tb24uU1RBR0VfSEVJR0hULzIpO1xufTtcblxuLyoqXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uZGlzcG9zZSgpO1xuXG4gICAgdmFyIHR3ZWVuO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fdHdlZW5zLmxlbmd0aDsgKysgaSkge1xuICAgICAgICB0d2VlbiA9IHRoaXMuX3R3ZWVuc1tpXTtcbiAgICAgICAgaWYgKHR3ZWVuKSB7XG4gICAgICAgICAgICB0d2Vlbi5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdHdlZW5zLmxlbmd0aCA9IDA7XG5cbiAgICBjb25zb2xlLmxvZyhcInNjcmVlbiBkaXNwb3NlZFwiKTtcblxuICAgIFR3ZWVuTWF4LmtpbGxBbGwoKTtcbiAgICBDb21tb24uYW5pbWF0b3IucmVtb3ZlQWxsKCk7XG59O1xuXG4vKipcbiAqL1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICB0aGlzLnggPSAocDMuVmlldy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG5cbiAgICB0aGlzLl9yaWdodEVkZ2UgPSB0aGlzLl9jZW50cmUueCArIChwMy5WaWV3LndpZHRoLzIpO1xuICAgIHRoaXMuX2xlZnRFZGdlID0gdGhpcy5fY2VudHJlLnggLSAocDMuVmlldy53aWR0aC8yKTtcbn07XG5cbi8qKlxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgIH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbn07XG5cbi8qKlxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmhpZGVHVUkgPSBmdW5jdGlvbigpIHtcbiAgIFxufTtcblxuLyoqXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuc2hvd0dVSSA9IGZ1bmN0aW9uKCkge1xuICAgXG59O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIICsgcDMuVmlldy53aWR0aCkgKiAwLjUgLSA4NC4wKTtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgucm91bmQoKENvbW1vbi5TVEFHRV9XSURUSCArIHAzLlZpZXcud2lkdGgpICogMC41KSwgQ29tbW9uLlNUQUdFX1dJRFRIIC0gMTUwKSAtIDg0O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIE51bWJlclxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLl9nZXRTZWNvbmRCdXR0b25Qb3NpdGlvblJpZ2h0ID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIHJldHVybiBNYXRoLnJvdW5kKChDb21tb24uU1RBR0VfV0lEVEggKyBwMy5WaWV3LndpZHRoKSAqIDAuNSAtIDE2MCk7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLnJvdW5kKChDb21tb24uU1RBR0VfV0lEVEggKyBwMy5WaWV3LndpZHRoKSAqIDAuNSksIENvbW1vbi5TVEFHRV9XSURUSCAtIDE1MCkgLSAxNjA7XG59XG5cbi8qKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0ID0gZnVuY3Rpb24oKVxue1xuXHQvLyByZXR1cm4gTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUgKyA4NC4wKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUpLCAxNTApICsgODQ7XG59XG5cbi8qKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuX2dldFNlY29uZEJ1dHRvblBvc2l0aW9uTGVmdCA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUgKyAyMzQuMCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgucm91bmQoKENvbW1vbi5TVEFHRV9XSURUSCAtIHAzLlZpZXcud2lkdGgpICogMC41KSwgMTUwKSArIDE2MDtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAcGFyYW0geyFwMy5CdXR0b259IGJ1dHRvblxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLm9uQnV0dG9uQ2xpY2tlZFByZXZpb3VzID0gZnVuY3Rpb24oYnV0dG9uKSB7XG5cbn07XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb21tb24gICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNpbXBsZVNjcmVlbiA9IHJlcXVpcmUoXCIuL1NpbXBsZVNjcmVlblwiKTtcbnZhciBTb3VuZFNGWCAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9Tb3VuZFNGWFwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTcGxhc2hTY3JlZW4oKVxue1xuXHQvKipcblx0ICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuXHQgKi9cblx0dGhpcy5fY29udGFpbmVyICAgICAgICAgID0gbnVsbDtcblx0dGhpcy5fcGFydGljbGVDb250YWluZXIgID0gbnVsbDtcblx0dGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyID0gbnVsbDtcblx0dGhpcy5fYmFsbG9vbkNvbnRhaW5lciAgID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1BJWEkuU3ByaXRlfVxuXHQgKi9cblx0dGhpcy5fYmcgICAgICAgICAgICA9IG51bGw7XG5cdHRoaXMuX2Nsb3VkcyAgICAgICAgPSBudWxsO1xuXHR0aGlzLl9jaGFyYWN0ZXIgICAgID0gbnVsbDtcblx0dGhpcy5fcmFpbmJvdyAgICAgICA9IG51bGw7XG5cdHRoaXMuX2hlYXJ0MSAgICAgICAgPSBudWxsO1xuXHR0aGlzLl9oZWFydDIgICAgICAgID0gbnVsbDtcblx0dGhpcy5fbG9nbyAgICAgICAgICA9IG51bGw7XG5cdHRoaXMuX3RleHQgICAgICAgICAgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7cDMuQnV0dG9ufVxuXHQgKi9cblx0dGhpcy5fcGxheUJ1dHRvbiA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtwMy5NdXRlQnV0dG9ufVxuXHQgKi9cblx0dGhpcy5fbXV0ZUJ1dHRvbiA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIb3dsfVxuXHQgKi9cblx0dGhpcy5fYmdNdXNpYyA9IG51bGw7XG5cblx0U2ltcGxlU2NyZWVuLmNhbGwodGhpcyk7XG5cblx0dGhpcy5zaWduYWxzLm1vcmVHYW1lcyA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGFzaFNjcmVlbjtcblNwbGFzaFNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwbGFzaFNjcmVlbjtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKFwiU1BMQVNIIElOSVRJQUxJWkVEXCIpO1xuXG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuX2NvbnRhaW5lciAgID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdHRoaXMuX2NvbnRhaW5lci54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcblx0dGhpcy5fY29udGFpbmVyLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUIC8gMjtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9jb250YWluZXIpO1xuXG5cdC8vIEJhY2tncm91bmRcblx0dGhpcy5fYmcgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYmdfcGlua1wiLCBcIi5qcGdcIikpOztcblx0dGhpcy5fYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fYmcpO1xuXG5cdC8vIFN0YXJzIHBhcnRpY2xlIHN5c3RlbVxuXHR0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lci54ID0gQ29tbW9uLlNUQUdFX1dJRFRILzI7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fcGFydGljbGVDb250YWluZXIpO1xuXHR0aGlzLl9zdGFyc1BTID0gbmV3IGNsb3Vka2lkLkVtaXR0ZXIodGhpcy5fcGFydGljbGVDb250YWluZXIsIFt0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInN0YXJfcGFydFwiKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJkb3RfcGFydGljbGVcIildLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcInNwbGFzaFN0YXJzX3BzXCIpKTtcblx0dGhpcy5fc3RhcnNQUy5lbWl0ID0gdHJ1ZTtcblx0dGhpcy5fc3RhcnNQUy51cGRhdGUoNCk7XG5cblx0Ly8gT2JqZWN0c1xuXHR0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIgICAgICAgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0dGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwwKTtcblx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2NoYXJhY3RlckNvbnRhaW5lcik7XG5cblx0XHR0aGlzLl9jbG91ZHMgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2xvdWRzXCIpKTtcblx0XHR0aGlzLl9jbG91ZHMuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHRcdHRoaXMuX2Nsb3Vkcy54ICs9IDEyMztcblx0XHR0aGlzLl9jbG91ZHMueSArPSAxNDU7XG5cdFx0dGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLmFkZENoaWxkKHRoaXMuX2Nsb3Vkcyk7XG5cblx0XHR0aGlzLl9jaGFyYWN0ZXIgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwibWFpbmNoYXJhY3RlclwiKSk7XG5cdFx0dGhpcy5fY2hhcmFjdGVyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcblx0XHR0aGlzLl9jaGFyYWN0ZXIueCAtPSA1MDtcblx0XHR0aGlzLl9jaGFyYWN0ZXIueSArPSAyMDtcblx0XHR0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIuYWRkQ2hpbGQodGhpcy5fY2hhcmFjdGVyKTtcblxuXHRcdHRoaXMuX3JhaW5ib3cgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicmFpbmJvd1wiKSk7XG5cdFx0dGhpcy5fcmFpbmJvdy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdFx0dGhpcy5fcmFpbmJvdy54IC09IDIwMDtcblx0XHR0aGlzLl9yYWluYm93LnkgKz0gMTA4O1xuXHRcdHRoaXMuX2NoYXJhY3RlckNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9yYWluYm93KTtcblxuXHR0aGlzLl9oZWFydDEgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiaGVhcnRfcGFydFwiKSk7XG5cdHRoaXMuX2hlYXJ0MS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdHRoaXMuX2hlYXJ0MS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsMCk7XG5cdHRoaXMuX2hlYXJ0MS54ICs9IDQyMDtcblx0dGhpcy5faGVhcnQxLnkgLT0gMTIwO1xuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5faGVhcnQxKTtcblxuXHR0aGlzLl9oZWFydDIgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiaGVhcnRfcGFydFwiKSk7XG5cdHRoaXMuX2hlYXJ0Mi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdHRoaXMuX2hlYXJ0Mi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsMCk7XG5cdHRoaXMuX2hlYXJ0Mi54ICs9IDM1NTtcblx0dGhpcy5faGVhcnQyLnkgLT0gNTA7XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9oZWFydDIpO1xuXG5cdHRoaXMuX2JhbGxvb25Db250YWluZXIgICA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9iYWxsb29uQ29udGFpbmVyLnggLT0gNDMwO1xuXHR0aGlzLl9iYWxsb29uQ29udGFpbmVyLnkgKz0gNDA7XG5cdHRoaXMuX2JhbGxvb25Db250YWluZXIuYWxwaGEgPSAwO1xuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fYmFsbG9vbkNvbnRhaW5lcik7XG5cblx0XHR2YXIgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcblx0XHRzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJiYWxsb29uX3NwbGFzaF90aHJlYWQwMVwiKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJiYWxsb29uX3NwbGFzaF90aHJlYWQwMlwiKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJiYWxsb29uX3NwbGFzaF90aHJlYWQwMVwiKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJiYWxsb29uX3NwbGFzaF90aHJlYWQwMlwiKV0pO1xuXG5cdFx0dmFyIHN0cmluZyA9IG5ldyBwMy5Nb3ZpZUNsaXAoc2VxdWVuY2UpO1xuXHRcdHN0cmluZy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDApO1xuXHRcdC8vIHN0cmluZy5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDIsIDQpO1xuXHRcdC8vIHN0cmluZy54IC09IDM7XG5cdFx0c3RyaW5nLnkgLT0gMTg7XG5cdFx0Ly8gc3RyaW5nLmdvdG9BbmRQbGF5KDApO1xuXHRcdC8vIHN0cmluZy5hbmltYXRpb25TcGVlZCA9IHN0cmluZy50b3RhbEZyYW1lcy8wLjc7XG5cdFx0c3RyaW5nLmxvb3BpbmcgPSB0cnVlO1xuXHRcdHRoaXMuX2JhbGxvb25Db250YWluZXIuYWRkQ2hpbGQoc3RyaW5nKTtcblxuXHRcdHZhciBiYWxsb29uID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYmFsbG9vbl9zcGxhc2gwMVwiKSk7XG5cdFx0YmFsbG9vbi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEpO1xuXHRcdHRoaXMuX2JhbGxvb25Db250YWluZXIuYWRkQ2hpbGQoYmFsbG9vbik7XG5cblx0XHR0aGlzLl9ib21iUFMgPSBuZXcgY2xvdWRraWQuRW1pdHRlcih0aGlzLl9iYWxsb29uQ29udGFpbmVyLCBbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJkb3RfcGFydGljbGVcIildLCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImJvbWJfcHNcIikpO1xuXHRcdHRoaXMuX2JvbWJQUy5lbWl0ID0gdHJ1ZTtcblxuXHR0aGlzLl9sb2dvICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInR0Z19sb2dvXCIpKTtcblx0dGhpcy5fbG9nby5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG5cdHRoaXMuX2xvZ28uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLDApO1xuXHR0aGlzLl9sb2dvLnggLT0gMTkwO1xuXHR0aGlzLl9sb2dvLnkgLT0gMjEwO1xuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fbG9nbyk7XG5cblx0Ly92YXIgY29weSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKFwiY29uZmlnXCIpWydjb3B5J11bXCJUSVRMRVwiXVtDb21tb24uQ09VTlRSWV9DT0RFXTtcblx0Ly90aGlzLl90ZXh0ID0gbmV3IFBJWEkuVGV4dChjb3B5LnRleHQsIHtmb250OiBcIjY2cHggR3JpbGxlZENoZWVzZUJUTi1SZWd1bGFyXCIsIGZpbGw6IDB4RkNFQzFCLCBhbGlnbjogXCJjZW50ZXJcIiwgc3Ryb2tlOiAweDAwMDAwMCwgc3Ryb2tlVGhpY2tuZXNzOiAxMiwgcGFkZGluZzoyMCwgbGluZUpvaW46ICdyb3VuZCcsIGxpbmVIZWlnaHQ6NzB9KTtcblxuXHR0aGlzLl90ZXh0ICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInRpdGxlZ2FtZVwiKSk7XG5cdHRoaXMuX3RleHQuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuXHR0aGlzLl90ZXh0LmFscGhhID0gMDtcblx0dGhpcy5fdGV4dC54IC09IDE4MDtcblx0dGhpcy5fdGV4dC55ICs9IDIwMDtcblx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHRoaXMuX3RleHQpO1xuXG5cdC8vIEJ1dHRvbnNcblx0dGhpcy5fcGxheUJ1dHRvbiA9IG5ldyBwMy5CdXR0b25cblx0KFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BsYXlfZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BsYXlfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9wbGF5X3ByZXNzZWRcIilcblx0KTtcblx0dGhpcy5fcGxheUJ1dHRvbi54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMiArIDMxMDtcblx0dGhpcy5fcGxheUJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAtIDE2NTtcblx0dGhpcy5fcGxheUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkT25jZSh0aGlzLnBsYXlDbGlja2VkLCB0aGlzKTtcblx0dGhpcy5fcGxheUJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMuYnV0dG9uT3ZlciwgdGhpcyk7XG5cdHRoaXMuX3BsYXlCdXR0b24uc2NhbGUgICA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLl9wbGF5QnV0dG9uLmFuaW1hdGUgPSBmYWxzZTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9wbGF5QnV0dG9uKTtcblxuXHR0aGlzLl9tdXRlQnV0dG9uID0gbmV3IHAzLk11dGVCdXR0b25cblx0KFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX2RlZlwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfZGVmXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX292ZXJcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb2ZmX292ZXJcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fcHJlc3NlZFwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfcHJlc3NlZFwiKVxuXHQpO1xuXHR0aGlzLl9tdXRlQnV0dG9uLmlkICAgID0gXCJtdXRlXCI7XG5cdHRoaXMuX211dGVCdXR0b24ueSAgICAgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XG5cdHRoaXMuX211dGVCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcblx0dGhpcy5fbXV0ZUJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMuYnV0dG9uT3ZlciwgdGhpcyk7XG5cdHRoaXMuX211dGVCdXR0b24uaW5pdCgpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX211dGVCdXR0b24pO1xuXG5cdC8vIFNob3cgbW9yZSBnYW1lc1xuXHR0aGlzLl9tb3JlR2FtZXNCdXR0b24gPSBuZXcgcDMuQnV0dG9uXG5cdChcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNuZ3dfYnRuX21vcmVfZ2FtZXNcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbmd3X2J0bl9tb3JlX2dhbWVzXCIpLFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY25nd19idG5fbW9yZV9nYW1lc1wiKVxuXHQpO1xuXHR0aGlzLl9tb3JlR2FtZXNCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcblx0dGhpcy5fbW9yZUdhbWVzQnV0dG9uLnNjYWxlLnNldCgwKTtcblx0dGhpcy5fbW9yZUdhbWVzQnV0dG9uLnNpZ25hbHMuZG93bi5hZGQodGhpcy5tb3JlR2FtZXNDbGlja2VkLCB0aGlzKTtcblx0dGhpcy5fbW9yZUdhbWVzQnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5idXR0b25PdmVyLCB0aGlzKTtcblx0dGhpcy5fbW9yZUdhbWVzQnV0dG9uLmFuaW1hdGUgPSBmYWxzZTtcbiAgICBpZih0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImNvbmZpZ1wiKS5tb3JlR2FtZXMpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbW9yZUdhbWVzQnV0dG9uKTtcblxuXHQvLyBCbGFjayBzY3JlZW5cblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbiA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmFscGhhID0gMTtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi54ID0gLUNvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zY3JlZW5UcmFuc2l0aW9uKVxuXG5cdHZhciBjb2xvcnMgPSBbMHgxMUIwNjYsIDB4RkZERTc1LCAweEYxN0FCMCwgMHgzOTkxQ0YsIDB4OEQ1OEE0XTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBiYW5kID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snd2hpdGVTcXVhcmUnXSk7XG5cdFx0YmFuZC50aW50ID0gY29sb3JzW2ldO1xuXHRcdGJhbmQud2lkdGggPSBDb21tb24uU1RBR0VfV0lEVEg7XG5cdFx0YmFuZC5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hULzU7XG5cdFx0YmFuZC55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVC81ICogaTtcblx0XHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmFkZENoaWxkKGJhbmQpO1xuXHR9XG5cblx0Ly9Tb3VuZHNcblx0U291bmRTRlguc3RvcCgnbXVzaWNfbWVudV9pbnRyb18wMCcpO1xuXHRTb3VuZFNGWC5zdG9wKCdtdXNpY19tZW51X2xvb3BfMDAnKTtcblxuXHR0aGlzLl9iZ011c2ljID0gU291bmRTRlgucGxheSgnbXVzaWNfbWVudV9pbnRyb18wMCcsXG5cdHtcblx0XHR2b2x1bWUgOiAxLFxuXHRcdGxvb3AgICA6IGZhbHNlLFxuXHRcdG9uQ29tcGxldGUgIDogZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdFNvdW5kU0ZYLnBsYXkoJ211c2ljX21lbnVfbG9vcF8wMCcsIHt2b2x1bWU6MSwgbG9vcDp0cnVlfSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblx0Ly8gVXBkYXRlIHBhcnRpY2xlIHN5c3RlbVxuXHR0aGlzLl9zdGFyc1BTLnVwZGF0ZShwMy5UaW1lc3RlcC5kZWx0YVRpbWUpO1xuXHR0aGlzLl9ib21iUFMudXBkYXRlKHAzLlRpbWVzdGVwLmRlbHRhVGltZSk7XG59O1xuXG4vKipcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cblx0dGhpcy5fbXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG5cdHRoaXMuX21vcmVHYW1lc0J1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvbkxlZnQoKTtcblx0Ly8gdGhpcy5fZXhpdEJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvbkxlZnQoKTtcbn07XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwodGhpcyk7XG5cblx0aWYodGhpcy5hbmltYXRlZEluKSByZXR1cm47XG5cdHRoaXMuYW5pbWF0ZWRJbiA9IHRydWU7XG5cblx0dmFyIGRlbGF5ID0gMC4zO1xuXG5cdC8vIEJ1dHRvbnNcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cblx0Ly8gdGwudG8odGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLCAwLCB7eDowLCBlYXNlOkxpbmVhci5lYXNlTm9uZX0sIGRlbGF5KTtcblx0Ly8gdGwudG8odGhpcy5fY2hhcmFjdGVyQ29udGFpbmVyLCAxLCB7eDowLCB5OjAsIGVhc2U6RWxhc3RpYy5lYXNlT3V0fSwgZGVsYXkpO1xuXHR0bC50byh0aGlzLl9jaGFyYWN0ZXJDb250YWluZXIuc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXR9LCBkZWxheSk7XG5cblx0dGwudG8odGhpcy5fbG9nby5zY2FsZSwgMS4yLCB7eDoxLCB5OjEsIGVhc2U6RWxhc3RpYy5lYXNlT3V0fSwgZGVsYXkgKyAwLjMpO1xuXHR0bC50byh0aGlzLl9sb2dvLnNjYWxlLCAxLjUsIHt4OjAuOTUsIHk6MC45NSwgZWFzZTpTaW5lLmVhc2VJbk91dCwgcmVwZWF0Oi0xLCB5b3lvOnRydWV9LCBkZWxheSArIDEuNSk7XG5cblx0dGwudG8odGhpcy5fdGV4dCwgMCwge3k6dGhpcy5fdGV4dC55LTEwMCwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9LCBkZWxheSk7XG5cdHRsLnRvKHRoaXMuX3RleHQsIDEsIHt5OnRoaXMuX3RleHQueSwgZWFzZTpCb3VuY2UuZWFzZU91dH0sIGRlbGF5ICsgMC40KTtcblx0dGwudG8odGhpcy5fdGV4dCwgMSwge2FscGhhOjEsIGVhc2U6U2luZS5lYXNlT3V0fSwgZGVsYXkgKyAwLjQpO1xuXHR0bC50byh0aGlzLl90ZXh0LCAxLCB7cm90YXRpb246LTEuNSAqIFBJWEkuREVHX1RPX1JBRCwgZWFzZTpTaW5lLmVhc2VPdXR9LCBkZWxheSArIDAuNCk7XG5cdHRsLnRvKHRoaXMuX3RleHQsIDEuNSwge3JvdGF0aW9uOisyICogUElYSS5ERUdfVE9fUkFELCBlYXNlOlNpbmUuZWFzZUluT3V0LCByZXBlYXQ6LTEsIHlveW86dHJ1ZX0sIGRlbGF5ICsgMS40KTtcblxuXHR0bC50byh0aGlzLl9oZWFydDEuc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCBkZWxheSArIDAuNSk7XG5cdHRsLnRvKHRoaXMuX2hlYXJ0MS5zY2FsZSwgMSwge3g6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dH0sIGRlbGF5ICsgMC41KTtcblx0dGwudG8odGhpcy5faGVhcnQxLnNjYWxlLCAxLCB7eDowLjksIHk6MC45LCBlYXNlOlNpbmUuZWFzZUluT3V0LCByZXBlYXQ6LTEsIHlveW86dHJ1ZX0sIGRlbGF5ICsgMS41KTtcblxuXHR0bC50byh0aGlzLl9oZWFydDIuc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCBkZWxheSArIDAuNik7XG5cdHRsLnRvKHRoaXMuX2hlYXJ0Mi5zY2FsZSwgMSwge3g6LTAuNSwgeTowLjUsIGVhc2U6RWxhc3RpYy5lYXNlT3V0fSwgZGVsYXkgKyAwLjYpO1xuXHR0bC50byh0aGlzLl9oZWFydDIuc2NhbGUsIDEuNSwge3g6LTAuNiwgeTowLjYsIGVhc2U6U2luZS5lYXNlSW5PdXQsIHJlcGVhdDotMSwgeW95bzp0cnVlfSwgZGVsYXkgKyAyLjApO1xuXG5cdHRsLnRvKHRoaXMuX2JhbGxvb25Db250YWluZXIsIDAsIHt5OnRoaXMuX2JhbGxvb25Db250YWluZXIueSArIDEyMCwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9LCBkZWxheSk7XG5cdHRsLnRvKHRoaXMuX2JhbGxvb25Db250YWluZXIsIDEsIHt5OnRoaXMuX2JhbGxvb25Db250YWluZXIueSwgZWFzZTpTaW5lLmVhc2VPdXR9LCBkZWxheSArIDAuOCk7XG5cdHRsLnRvKHRoaXMuX2JhbGxvb25Db250YWluZXIsIDEsIHthbHBoYToxLCBlYXNlOlNpbmUuZWFzZU91dH0sIGRlbGF5ICsgMC44KTtcblx0dGwudG8odGhpcy5fYmFsbG9vbkNvbnRhaW5lciwgMiwge3k6dGhpcy5fYmFsbG9vbkNvbnRhaW5lci55ICsgNTAsIGVhc2U6U2luZS5lYXNlSW5PdXQsIHJlcGVhdDotMSwgeW95bzp0cnVlfSwgZGVsYXkgKyAxLjgpO1xuXG5cdHRsLnRvKHRoaXMuX3BsYXlCdXR0b24uc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCBkZWxheSArIDAuOSk7XG5cdHRsLnRvKHRoaXMuX211dGVCdXR0b24uc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCBkZWxheSArIDEuMSk7XG5cblx0dGwuZnJvbVRvKHRoaXMuX21vcmVHYW1lc0J1dHRvbi5zY2FsZSwgMSwge3g6MCwgeTowfSwge3g6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dH0sIGRlbGF5ICsgMS4zKTtcblxuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKHRoaXMpO1xuXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7b25Db21wbGV0ZVNjb3BlOnNjb3BlLCBvbkNvbXBsZXRlOmNhbGxiYWNrfSk7XG5cdFx0dGwudG8odGhpcy5fc2NyZWVuVHJhbnNpdGlvbiwgMC41LCB7eDowLCBlYXNlOlNpbmUuZWFzZU91dH0sIDAuMyk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xufTtcblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblNwbGFzaFNjcmVlbi5wcm90b3R5cGUucGxheUNsaWNrZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuX3BsYXlCdXR0b24uc2lnbmFscy5vdmVyLnJlbW92ZSh0aGlzLmJ1dHRvbk92ZXIsIHRoaXMpO1xuXHR0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMuZG93bi5yZW1vdmUodGhpcy5wbGF5Q2xpY2tlZCwgdGhpcyk7XG5cblx0VHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX3BsYXlCdXR0b24uc2NhbGUpO1xuXG5cdHRoaXMuYW5pbWF0ZU91dChmdW5jdGlvbigpXG5cdHtcblx0XHR0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpO1xuXHR9LCB0aGlzKTtcblxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmJ1dHRvbk92ZXIgPSBmdW5jdGlvbigpXG57XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCIpO1xufTtcblxuLyoqXG4gKi9cblNwbGFzaFNjcmVlbi5wcm90b3R5cGUuZXhpdENsaWNrZWQgPSBmdW5jdGlvbigpIHtcblxuXHR2YXIgbGluayA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKFwiY29uZmlnXCIpLmhvbWVfbGluaztcblx0d2luZG93Lm9wZW4obGluayk7XG59O1xuXG4vKipcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5tb3JlR2FtZXNDbGlja2VkID0gZnVuY3Rpb24oKSB7XG5cblx0dGhpcy5zaWduYWxzLm1vcmVHYW1lcy5kaXNwYXRjaCgpO1xufTtcblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBTY3JvbGxlck9iamVjdFx0PSByZXF1aXJlKFwiLi9TY3JvbGxlck9iamVjdFwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7UElYSS5Qb2ludH0gc2NyZWVuRm9jdXNQb2ludFxyXG4gKiBAcGFyYW0ge1BJWEkuUmVjdGFuZ2xlfSB2aWV3Qm91bmRhcnlcclxuICogQHBhcmFtIHtQSVhJLlJlY3RhbmdsZX0gYWN0aXZlQm91bmRhcnlcclxuICovXHJcbmZ1bmN0aW9uIFNjcm9sbGVyRW5naW5lKHNjcmVlbkZvY3VzUG9pbnQsIHZpZXdCb3VuZGFyeSwgYWN0aXZlQm91bmRhcnkpXHJcbntcclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtzaWduYWxzLlNpZ25hbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zaWduYWxzID0ge307XHJcblx0dGhpcy5zaWduYWxzLmNvbGxpc2lvbkZpcmVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge1BJWEkuUG9pbnR9IC0gUG9pbnQsIHJlbGF0aXZlIHRvIHNjcmVlbiBzaXplLCB0aGF0IHRoZSBlbmdpbmUgaXMgZm9jdXNlZCBvbi5cclxuICAgICAqL1xyXG5cdHRoaXMuX3NjcmVlbkZvY3VzUG9pbnQgPSBzY3JlZW5Gb2N1c1BvaW50O1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlBvaW50fSAtIFdvcmxkIFBvaW50LCBzaWduaWZ5aW5nIHBvc2l0aW9uIG9mIGNhbWVyYSBpbiB0aGUgd29ybGQuXHJcbiAgICAgKi9cclxuXHR0aGlzLl92aWV3ID0gc2NyZWVuRm9jdXNQb2ludC5jbG9uZSgpO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlJlY3RhbmdsZX0gLSBUaGUgYm91bmRhcnkgcmVjdGFuZ2xlLCByZWxhdGl2ZSB0byB0aGUgc2NyZWVuRm9jdXNQb2ludCwgaW4gd2hpY2ggdGhlIHdvcmxkIG9iamVjdHMgYXJlIHZpc2libGVcclxuICAgICAqL1xyXG5cdHRoaXMuX3ZpZXdCb3VuZGFyeSA9IHZpZXdCb3VuZGFyeTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5SZWN0YW5nbGV9IC0gVGhlIGJvdW5kYXJ5IHJlY3RhbmdsZSwgcmVsYXRpdmUgdG8gdGhlIHNjcmVlbkZvY3VzUG9pbnQsIGluIHdoaWNoIHRoZSB3b3JsZCBvYmplY3RzIGFyZSBhY3RpdmVcclxuICAgICAqL1xyXG5cdHRoaXMuX2FjdGl2ZUJvdW5kYXJ5ID0gYWN0aXZlQm91bmRhcnk7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge3AzLkNhbWVyYX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fY2FtZXJhID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2xheWVycyA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8U2Nyb2xsZXJMb29waW5nUmFuZ2U+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9sb29waW5nUmFuZ2VzID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtBcnJheTxBcnJheTxTdHJpbmc+Pn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fY29sbGlzaW9ucyA9IG51bGw7XHJcblxyXG4gICAgXHJcblx0UElYSS5Db250YWluZXIuY2FsbCh0aGlzKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbGVyRW5naW5lO1xyXG5TY3JvbGxlckVuZ2luZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XHJcblNjcm9sbGVyRW5naW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbGVyRW5naW5lO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyRW5naW5lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLl9jYW1lcmEgPSBuZXcgcDMuQ2FtZXJhKHRoaXMuX3ZpZXcsIHRydWUpO1xyXG4gICAgdGhpcy5fbGF5ZXJzID0ge307XHJcbiAgICB0aGlzLl9sb29waW5nUmFuZ2VzID0gW107XHJcbiAgICB0aGlzLl9jb2xsaXNpb25zID0gW107XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyRW5naW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHRmb3IodmFyIGkgaW4gdGhpcy5fbGF5ZXJzKVxyXG5cdHtcclxuXHRcdHZhciBjb250ID0gdGhpcy5fbGF5ZXJzW2ldLmNvbnRhaW5lcjtcclxuXHJcblx0XHRmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5fbGF5ZXJzW2ldLm9iamVjdHMubGVuZ3RoOyBqKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBvYmogPSB0aGlzLl9sYXllcnNbaV0ub2JqZWN0c1tqXTtcclxuXHJcblx0XHRcdG9iai51cGRhdGUoKTtcclxuXHJcblx0XHRcdGlmKG9iai5yZW1vdmVJZk91dHNpZGVCb3VuZGFyeSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKGNvbnQueCArIG9iai54ICsgb2JqLmFyZWFSZWN0LnggKyBvYmouYXJlYVJlY3Qud2lkdGggPCB0aGlzLl9zY3JlZW5Gb2N1c1BvaW50LnggKyB0aGlzLl9hY3RpdmVCb3VuZGFyeS54IHx8XHJcblx0XHRcdFx0ICAgY29udC55ICsgb2JqLnkgKyBvYmouYXJlYVJlY3QueSArIG9iai5hcmVhUmVjdC53aWR0aCA8IHRoaXMuX3NjcmVlbkZvY3VzUG9pbnQueSArIHRoaXMuX2FjdGl2ZUJvdW5kYXJ5LnkgfHxcclxuXHRcdFx0XHQgICBjb250LnggKyBvYmoueCA+IHRoaXMuX3NjcmVlbkZvY3VzUG9pbnQueCArIHRoaXMuX2FjdGl2ZUJvdW5kYXJ5LnggKyB0aGlzLl9hY3RpdmVCb3VuZGFyeS53aWR0aCB8fFxyXG5cdFx0XHRcdCAgIGNvbnQueSArIG9iai55ID4gdGhpcy5fc2NyZWVuRm9jdXNQb2ludC55ICsgdGhpcy5fYWN0aXZlQm91bmRhcnkueSArIHRoaXMuX2FjdGl2ZUJvdW5kYXJ5LmhlaWdodClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZU9iamVjdEZyb21MYXllcihvYmosIGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZihvYmoucmVtb3ZlTWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZU9iamVjdEZyb21MYXllcihvYmosIGkpO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0aWYob2JqLnBlcnNpc3RlbnRYKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b2JqLnggPSAodGhpcy5fc2NyZWVuRm9jdXNQb2ludC54ICsgb2JqLnBlcnNpc3RlbnRYKSAtIGNvbnQueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihvYmoucGVyc2lzdGVudFJlY3RhbmdsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBvYmpYID0gY29udC54ICsgb2JqLnggKyBvYmouYXJlYVJlY3QueDtcclxuXHRcdFx0XHR2YXIgb2JqWSA9IGNvbnQueSArIG9iai55ICsgb2JqLmFyZWFSZWN0Lnk7XHJcblx0XHRcdFx0dmFyIG9ialhFZGdlID0gY29udC54ICsgb2JqLnggKyBvYmouYXJlYVJlY3QueCArIG9iai5hcmVhUmVjdC53aWR0aDtcclxuXHRcdFx0XHR2YXIgb2JqWUVkZ2UgPSBjb250LnkgKyBvYmoueSArIG9iai5hcmVhUmVjdC55ICsgb2JqLmFyZWFSZWN0LmhlaWdodDtcclxuXHRcdFx0XHR2YXIgbGVmdExpbWl0ID0gdGhpcy5fc2NyZWVuRm9jdXNQb2ludC54ICsgb2JqLnBlcnNpc3RlbnRSZWN0YW5nbGUueDtcclxuXHRcdFx0XHR2YXIgcmlnaHRMaW1pdCA9IGxlZnRMaW1pdCArIG9iai5wZXJzaXN0ZW50UmVjdGFuZ2xlLndpZHRoO1xyXG5cdFx0XHRcdHZhciB1cHBlckxpbWl0ID0gdGhpcy5fc2NyZWVuRm9jdXNQb2ludC55ICsgb2JqLnBlcnNpc3RlbnRSZWN0YW5nbGUueTtcclxuXHRcdFx0XHR2YXIgbG93ZXJMaW1pdCA9IHVwcGVyTGltaXQgKyBvYmoucGVyc2lzdGVudFJlY3RhbmdsZS5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdGlmKG9ialggPCBsZWZ0TGltaXQgJiYgb2JqLnhTcGVlZCA8PSAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG9iai54ID0gb2JqLnggKyAoKGxlZnRMaW1pdC1vYmpYKSAqIG9iai5wZXJzaXN0ZW50UmVjdGFuZ2xlRXhpdEVhc2UpO1xyXG5cdFx0XHRcdFx0b2JqLm9uRXhpdFBlcnNpc3RlbnRSZWN0YW5nbGUoJ2xlZnQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYob2JqWSA8IHVwcGVyTGltaXQgJiYgb2JqLnlTcGVlZCA8PSAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG9iai55ID0gb2JqLnkgKyAoKHVwcGVyTGltaXQtb2JqWSkgKiBvYmoucGVyc2lzdGVudFJlY3RhbmdsZUV4aXRFYXNlKTtcclxuXHRcdFx0XHRcdG9iai5vbkV4aXRQZXJzaXN0ZW50UmVjdGFuZ2xlKCd1cHBlcicpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYob2JqWEVkZ2UgPiByaWdodExpbWl0ICYmIG9iai54U3BlZWQgPj0gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRvYmoueCA9IG9iai54IC0gKChvYmpYRWRnZS1yaWdodExpbWl0KSAqIG9iai5wZXJzaXN0ZW50UmVjdGFuZ2xlRXhpdEVhc2UpO1xyXG5cdFx0XHRcdFx0b2JqLm9uRXhpdFBlcnNpc3RlbnRSZWN0YW5nbGUoJ3JpZ2h0Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKG9iallFZGdlID4gbG93ZXJMaW1pdCAmJiBvYmoueFNwZWVkID49IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0b2JqLnkgPSBvYmoueSAtICgob2JqWUVkZ2UtbG93ZXJMaW1pdCkgKiBvYmoucGVyc2lzdGVudFJlY3RhbmdsZUV4aXRFYXNlKTtcclxuXHRcdFx0XHRcdG9iai5vbkV4aXRQZXJzaXN0ZW50UmVjdGFuZ2xlKCdsb3dlcicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy5fY29sbGlzaW9ucy5sZW5ndGg7IGMrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHRoaXMuX2NvbGxpc2lvbnNbY10ubGVuZ3RoID09IDIpXHJcblx0XHRcdFx0e1x0XHJcblx0XHRcdFx0XHRpZih0aGlzLl9jb2xsaXNpb25zW2NdWzBdID09IG9iai50eXBlKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9jaGVja0ZvckNvbGxpc2lvbnMob2JqLCBjb250LCB0aGlzLl9jb2xsaXNpb25zW2NdWzFdKTtcclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHR9XHRcclxuXHRcdH1cdFxyXG5cdH1cclxuXHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX2xvb3BpbmdSYW5nZXMubGVuZ3RoOyBpKyspXHJcblx0e1xyXG5cdFx0dmFyIG5ld09iamVjdHMgPSB0aGlzLl9sb29waW5nUmFuZ2VzW2ldLnVwZGF0ZSh0aGlzLl9zY3JlZW5Gb2N1c1BvaW50LCB0aGlzLl92aWV3Qm91bmRhcnksIHRoaXMuX2xheWVyc1t0aGlzLl9sb29waW5nUmFuZ2VzW2ldLmxheWVyXS5jb250YWluZXIpO1xyXG5cdFx0Zm9yKHZhciBqID0gMDsgaiA8IG5ld09iamVjdHMubGVuZ3RoOyBqKyspXHJcblx0XHR7XHJcblx0XHRcdG5ld09iamVjdHNbal0ub2JqLmFyZWFSZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKG5ld09iamVjdHNbal0uYXJlYVJlY3QueCwgbmV3T2JqZWN0c1tqXS5hcmVhUmVjdC55LCBuZXdPYmplY3RzW2pdLmFyZWFSZWN0LndpZHRoLCBuZXdPYmplY3RzW2pdLmFyZWFSZWN0LmhlaWdodCk7XHJcblx0XHRcdHRoaXMuYWRkT2JqZWN0VG9MYXllcihuZXdPYmplY3RzW2pdLm9iaiwgdGhpcy5fbG9vcGluZ1Jhbmdlc1tpXS5sYXllciwgbmV3T2JqZWN0c1tqXS5vZmZzZXQueCwgbmV3T2JqZWN0c1tqXS5vZmZzZXQueSk7XHJcblx0XHR9XHRcclxuXHR9XHRcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFTdHJpbmd9IG5hbWVcclxuICogQHBhcmFtIHtQb2ludD19IHBhcmFsbGF4XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5TY3JvbGxlckVuZ2luZS5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBwYXJhbGxheClcclxue1xyXG5cdHBhcmFsbGF4ID0gcGFyYWxsYXggfHwgbmV3IFBJWEkuUG9pbnQoMSwgMSk7XHJcblx0dmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdHRoaXMuYWRkQ2hpbGQoY29udGFpbmVyKTtcclxuXHR0aGlzLl9sYXllcnNbbmFtZV0gPSB7Y29udGFpbmVyOmNvbnRhaW5lciwgb2JqZWN0czpbXSwgcGFyYWxsYXg6cGFyYWxsYXh9O1xyXG5cdHRoaXMuX2NhbWVyYS5hZGRMYXllcihuYW1lLCBjb250YWluZXIsIHBhcmFsbGF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IVNjcm9sbGVyT2JqZWN0fSBzY3JvbGxlck9iamVjdFxyXG4gKiBAcGFyYW0geyFTdHJpbmd9IGxheWVyTmFtZVxyXG4gKiBAcGFyYW0ge051bWJlcj19IHhQb3NpdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcj19IHlQb3NpdGlvblxyXG4gKi9cclxuU2Nyb2xsZXJFbmdpbmUucHJvdG90eXBlLmFkZE9iamVjdFRvTGF5ZXIgPSBmdW5jdGlvbihzY3JvbGxlck9iamVjdCwgbGF5ZXJOYW1lLCB4UG9zaXRpb24sIHlQb3NpdGlvbilcclxue1xyXG5cdHRoaXMuX2xheWVyc1tsYXllck5hbWVdLmNvbnRhaW5lci5hZGRDaGlsZChzY3JvbGxlck9iamVjdCk7XHJcblx0aWYoeFBvc2l0aW9uKVxyXG5cdFx0c2Nyb2xsZXJPYmplY3QueCA9IHhQb3NpdGlvbjtcclxuXHRpZih5UG9zaXRpb24pXHJcblx0XHRzY3JvbGxlck9iamVjdC55ID0geVBvc2l0aW9uO1xyXG5cdHRoaXMuX2xheWVyc1tsYXllck5hbWVdLm9iamVjdHMucHVzaChzY3JvbGxlck9iamVjdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFTY3JvbGxlck9iamVjdH0gc2Nyb2xsZXJPYmplY3RcclxuICogQHBhcmFtIHtTdHJpbmc9fSBsYXllck5hbWVcclxuICovXHJcblNjcm9sbGVyRW5naW5lLnByb3RvdHlwZS5yZW1vdmVPYmplY3RGcm9tTGF5ZXIgPSBmdW5jdGlvbihzY3JvbGxlck9iamVjdCwgbGF5ZXJOYW1lKVxyXG57XHJcblx0dmFyIHBsYWNlSW5BcnJheTtcclxuXHJcblx0aWYobGF5ZXJOYW1lID09IG51bGwpXHJcblx0e1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMuX2xheWVycylcclxuXHRcdHtcclxuXHRcdFx0cGxhY2VJbkFycmF5ID0gdGhpcy5fbGF5ZXJzW2ldLm9iamVjdHMuaW5kZXhPZihzY3JvbGxlck9iamVjdCk7XHJcblx0XHRcdGxheWVyTmFtZSA9IGk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5fbGF5ZXJzW2xheWVyTmFtZV0uY29udGFpbmVyLnJlbW92ZUNoaWxkKHNjcm9sbGVyT2JqZWN0KTtcclxuXHRcclxuXHRpZihwbGFjZUluQXJyYXkgPT0gbnVsbClcclxuXHRcdHBsYWNlSW5BcnJheSA9IHRoaXMuX2xheWVyc1tsYXllck5hbWVdLm9iamVjdHMuaW5kZXhPZihzY3JvbGxlck9iamVjdCk7XHJcblxyXG5cdGlmKHBsYWNlSW5BcnJheSA+IC0xKVxyXG5cdFx0dGhpcy5fbGF5ZXJzW2xheWVyTmFtZV0ub2JqZWN0cy5zcGxpY2UocGxhY2VJbkFycmF5LCAxKTtcclxuXHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX2xvb3BpbmdSYW5nZXMubGVuZ3RoOyBpKyspXHJcblx0e1xyXG5cdFx0aWYobGF5ZXJOYW1lID09IHRoaXMuX2xvb3BpbmdSYW5nZXNbaV0ubGF5ZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX2xvb3BpbmdSYW5nZXNbaV0ub2JqZWN0UmVtb3ZlZChzY3JvbGxlck9iamVjdCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxuXHRzY3JvbGxlck9iamVjdC5kaXNwb3NlKCk7XHRcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7U2Nyb2xsZXJMb29waW5nUmFuZ2V9IGxvb3BcclxuICogQHBhcmFtIHtTdHJpbmd9IGxheWVyTmFtZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gb3JpZ2luWFxyXG4gKiBAcGFyYW0ge051bWJlcn0gb3JpZ2luWVxyXG4gKi9cclxuU2Nyb2xsZXJFbmdpbmUucHJvdG90eXBlLmFkZExvb3BpbmdSYW5nZVRvTGF5ZXIgPSBmdW5jdGlvbihsb29wLCBsYXllck5hbWUsIG9yaWdpblgsIG9yaWdpblkpXHJcbntcclxuXHRsb29wLmxheWVyID0gbGF5ZXJOYW1lO1xyXG5cdHZhciBhcnIgPSBsb29wLmdlbmVyYXRlKHRoaXMuX3ZpZXdCb3VuZGFyeS53aWR0aCwgdGhpcy5fdmlld0JvdW5kYXJ5LmhlaWdodCwgb3JpZ2luWCwgb3JpZ2luWSk7XHJcblx0dGhpcy5fbG9vcGluZ1Jhbmdlcy5wdXNoKGxvb3ApO1xyXG5cclxuXHR2YXIgZCA9ICd4JztcclxuXHR2YXIgZSA9ICd3aWR0aCc7XHJcblx0dmFyIGN1cnJlbnRYID0gdGhpcy5fdmlld0JvdW5kYXJ5LnggKiB0aGlzLl9sYXllcnNbbGF5ZXJOYW1lXS5wYXJhbGxheC54O1xyXG5cdHZhciBjdXJyZW50WSA9IG9yaWdpblk7XHJcblx0XHJcblx0aWYobG9vcC5zY3JvbGxZKVxyXG5cdHtcclxuXHRcdGQgPSAneSc7XHJcblx0XHRlID0gJ2hlaWdodCc7XHJcblx0XHRjdXJyZW50WCA9IG9yaWdpblg7XHJcblx0XHRjdXJyZW50WSA9IHRoaXMuX2FjdGl2ZUJvdW5kYXJ5LnkgKiB0aGlzLl9sYXllcnNbbGF5ZXJOYW1lXS5wYXJhbGxheC55O1xyXG5cdH0gXHJcblxyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspXHJcblx0e1xyXG5cdFx0YXJyW2ldLm9iai5hcmVhUmVjdCA9IGFycltpXS5hcmVhUmVjdDtcclxuXHRcdHRoaXMuYWRkT2JqZWN0VG9MYXllcihhcnJbaV0ub2JqLCBsYXllck5hbWUsIGN1cnJlbnRYICsgKGxvb3Auc2Nyb2xsWSA/IGFycltpXS5vZmZzZXQueCA6IDApLCBjdXJyZW50WSArIChsb29wLnNjcm9sbFggPyBhcnJbaV0ub2Zmc2V0LnkgOiAwKSk7XHJcblxyXG5cdFx0aWYobG9vcC5zY3JvbGxYKVxyXG5cdFx0XHRjdXJyZW50WCArPSBhcnJbaV0uYXJlYVJlY3QueCArIGFycltpXS5hcmVhUmVjdC53aWR0aCArIGFycltpXS5vZmZzZXQueDtcclxuXHRcdGVsc2UgaWYobG9vcC5zY3JvbGxZKVxyXG5cdFx0XHRjdXJyZW50WSArPSBhcnJbaV0uYXJlYVJlY3QueSArIGFycltpXS5hcmVhUmVjdC5oZWlnaHQgKyBhcnJbaV0ub2Zmc2V0Lnk7XHJcblx0fVx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFTdHJpbmd9IG9iamVjdDFUeXBlXHJcbiAqIEBwYXJhbSB7IVN0cmluZ30gb2JqZWN0MlR5cGVcclxuICovXHJcblNjcm9sbGVyRW5naW5lLnByb3RvdHlwZS5hZGRDb2xsaXNpb25EZXRlY3RvciA9IGZ1bmN0aW9uKG9iamVjdDFUeXBlLCBvYmplY3QyVHlwZSlcclxue1xyXG5cdHRoaXMuX2NvbGxpc2lvbnMucHVzaChbb2JqZWN0MVR5cGUsIG9iamVjdDJUeXBlXSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuU2Nyb2xsZXJFbmdpbmUucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Zm9yKHZhciBpIGluIHRoaXMuX2xheWVycylcclxuXHR7XHJcblx0XHRmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5fbGF5ZXJzW2ldLm9iamVjdHMubGVuZ3RoOyBqKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBvYmogPSB0aGlzLl9sYXllcnNbaV0ub2JqZWN0c1tqXTtcclxuXHJcblx0XHRcdG9iai5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlckVuZ2luZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Zm9yKHZhciBpIGluIHRoaXMuX2xheWVycylcclxuXHR7XHJcblx0XHRmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5fbGF5ZXJzW2ldLm9iamVjdHMubGVuZ3RoOyBqKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBvYmogPSB0aGlzLl9sYXllcnNbaV0ub2JqZWN0c1tqXTtcclxuXHJcblx0XHRcdG9iai5yZXN1bWUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbGF5ZXJOYW1lXHJcbiAqL1xyXG5TY3JvbGxlckVuZ2luZS5wcm90b3R5cGUuZ2V0TGF5ZXJDb250YWluZXIgPSBmdW5jdGlvbihsYXllck5hbWUpXHJcbntcclxuXHRyZXR1cm4gdGhpcy5fbGF5ZXJzW2xheWVyTmFtZV0uY29udGFpbmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtTdHJpbmd9IGxheWVyTmFtZVxyXG4gKi9cclxuU2Nyb2xsZXJFbmdpbmUucHJvdG90eXBlLmdldExheWVyUGFyYWxsYXggPSBmdW5jdGlvbihsYXllck5hbWUpXHJcbntcclxuXHRyZXR1cm4gdGhpcy5fbGF5ZXJzW2xheWVyTmFtZV0ucGFyYWxsYXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbGF5ZXJOYW1lXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9yZGVyRnVuY3Rpb25cclxuICovXHJcblNjcm9sbGVyRW5naW5lLnByb3RvdHlwZS5vcmRlckxheWVyID0gZnVuY3Rpb24obGF5ZXJOYW1lLCBvcmRlckZ1bmN0aW9uKVxyXG57XHJcblx0dGhpcy5fbGF5ZXJzW2xheWVyTmFtZV0uY29udGFpbmVyLmNoaWxkcmVuLnNvcnQob3JkZXJGdW5jdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFJJVkFURSBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQHBhcmFtIHshU2Nyb2xsZXJPYmplY3R9IG9ialxyXG4gKiBAcGFyYW0geyFQSVhJLkNvbnRhaW5lcn0gb2JqQ29udFxyXG4gKiBAcGFyYW0geyFTdHJpbmd9IGNvbGxpZGluZ1R5cGVcclxuICovXHJcblNjcm9sbGVyRW5naW5lLnByb3RvdHlwZS5fY2hlY2tGb3JDb2xsaXNpb25zID0gZnVuY3Rpb24ob2JqMSwgb2JqMUNvbnQsIGNvbGxpZGluZ1R5cGUpXHJcbntcclxuXHRmb3IodmFyIGkgaW4gdGhpcy5fbGF5ZXJzKVxyXG5cdHtcclxuXHRcdHZhciBvYmoyQ29udCA9IHRoaXMuX2xheWVyc1tpXS5jb250YWluZXI7XHJcblxyXG5cdFx0Zm9yKHZhciBqID0gMDsgaiA8IHRoaXMuX2xheWVyc1tpXS5vYmplY3RzLmxlbmd0aDsgaisrKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLl9sYXllcnNbaV0ub2JqZWN0c1tqXS50eXBlID09IGNvbGxpZGluZ1R5cGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgb2JqMiA9IHRoaXMuX2xheWVyc1tpXS5vYmplY3RzW2pdO1xyXG5cclxuXHRcdFx0XHR2YXIgcjFMZWZ0ID0gb2JqMUNvbnQueCArIG9iajEueCArIG9iajEuY29sbGlzaW9uUmVjdC54OyBcclxuXHRcdFx0XHR2YXIgcjJMZWZ0ID0gb2JqMkNvbnQueCArIG9iajIueCArIG9iajIuY29sbGlzaW9uUmVjdC54OyBcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgcjFSaWdodCA9IHIxTGVmdCArIG9iajEuY29sbGlzaW9uUmVjdC53aWR0aDsgXHJcblx0XHRcdFx0dmFyIHIyUmlnaHQgPSByMkxlZnQgKyBvYmoyLmNvbGxpc2lvblJlY3Qud2lkdGg7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIHIxVG9wID0gb2JqMUNvbnQueSArIG9iajEueSArIG9iajEuY29sbGlzaW9uUmVjdC55OyBcclxuXHRcdFx0XHR2YXIgcjJUb3AgPSBvYmoyQ29udC55ICsgb2JqMi55ICsgb2JqMi5jb2xsaXNpb25SZWN0Lnk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIHIxQm90dG9tID0gcjFUb3AgKyBvYmoxLmNvbGxpc2lvblJlY3QuaGVpZ2h0OyBcclxuXHRcdFx0XHR2YXIgcjJCb3R0b20gPSByMlRvcCArIG9iajIuY29sbGlzaW9uUmVjdC5oZWlnaHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGNvbGxpc2lvbiA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmIChyMUJvdHRvbSA8IHIyVG9wKSBjb2xsaXNpb24gPSBmYWxzZTtcclxuXHRcdCAgICAgICAgaWYgKHIxVG9wID4gcjJCb3R0b20pIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHQgICAgICAgIGlmIChyMVJpZ2h0IDwgcjJMZWZ0KSBjb2xsaXNpb24gPSBmYWxzZTtcclxuXHRcdCAgICAgICAgaWYgKHIxTGVmdCA+IHIyUmlnaHQpIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG5cclxuXHRcdCAgICAgICAgaWYoY29sbGlzaW9uKVxyXG5cdFx0ICAgICAgICBcdHRoaXMuc2lnbmFscy5jb2xsaXNpb25GaXJlZC5kaXNwYXRjaChvYmoxLCBvYmoyKTtcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2Nyb2xsZXJFbmdpbmUucHJvdG90eXBlLCBcInZpZXdYXCIsIHtcclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdmlldy54O1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHshTnVtYmVyfSB2YWx1ZVxyXG5cdCAqL1xyXG5cdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHRoaXMuX3ZpZXcueCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5fY2FtZXJhLnVwZGF0ZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXcueDtcclxuXHR9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjcm9sbGVyRW5naW5lLnByb3RvdHlwZSwgXCJ2aWV3WVwiLCB7XHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge051bWJlcn1cclxuXHQgKi9cclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXcueTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7IU51bWJlcn0gdmFsdWVcclxuXHQgKi9cclxuXHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR0aGlzLl92aWV3LnkgPSB2YWx1ZTtcclxuXHRcdHRoaXMuX2NhbWVyYS51cGRhdGUoKTtcclxuXHRcdHJldHVybiB0aGlzLl92aWV3Lnk7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY3JvbGxlckVuZ2luZS5wcm90b3R5cGUsIFwiYWN0aXZlQm91bmRhcnlcIiwge1xyXG5cclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZUJvdW5kYXJ5O1xyXG5cdH0sXHJcblxyXG5cdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHRoaXMuX2FjdGl2ZUJvdW5kYXJ5ID0gdmFsdWU7XHJcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlQm91bmRhcnk7XHJcblx0fVxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY3JvbGxlckVuZ2luZS5wcm90b3R5cGUsIFwidmlld0JvdW5kYXJ5XCIsIHtcclxuXHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl92aWV3Qm91bmRhcnk7XHJcblx0fSxcclxuXHJcblx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dGhpcy5fdmlld0JvdW5kYXJ5ID0gdmFsdWU7XHJcblx0XHRyZXR1cm4gdGhpcy5fdmlld0JvdW5kYXJ5O1xyXG5cdH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2Nyb2xsZXJFbmdpbmUucHJvdG90eXBlLCBcInNjcmVlbkZvY3VzUG9pbnRcIiwge1xyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XHJcblx0ICovXHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY3JlZW5Gb2N1c1BvaW50O1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHshTnVtYmVyfSB2YWx1ZVxyXG5cdCAqL1xyXG5cdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHRoaXMuX3NjcmVlbkZvY3VzUG9pbnQgPSB2YWx1ZTtcclxuXHRcdHJldHVybiB0aGlzLl9zY3JlZW5Gb2N1c1BvaW50O1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHshQXJyYXk8T2JqZWN0Pn0gb2JqZWN0cyAtIHtiYXNlOjxTY3JvbGxlck9iamVjdD4sIGFyZ3M6PEFycmF5PiwgYXJlYVJlY3Q6UElYSS5SZWN0YW5nbGUsIG9mZnNldDpQSVhJLlBvaW50fVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNjcm9sbFhcclxuICogQHBhcmFtIHtCb29sZWFufSBzY3JvbGxZXHJcbiAqL1xyXG5mdW5jdGlvbiBTY3JvbGxlckxvb3BpbmdSYW5nZShvYmplY3RzLCBzY3JvbGxYLCBzY3JvbGxZKVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1cclxuICAgICAqL1xyXG5cdHRoaXMuX29iamVjdHNEYXRhID0gb2JqZWN0cztcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8U2Nyb2xsZXJPYmplY3Q+fVxyXG4gICAgICovXHJcblx0dGhpcy5fb2JqZWN0cyA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge0FycmF5PHAzLk9iamVjdFBvb2w+fVxyXG4gICAgICovXHJcblx0dGhpcy5fb2JqZWN0UG9vbHMgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuXHR0aGlzLl9vYmplY3RzUGxhY2VkID0gLTE7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuXHR0aGlzLl9vcmlnaW5YID0gMDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG5cdHRoaXMuX29yaWdpblkgPSAwO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICovXHJcblx0dGhpcy5fc2Nyb2xsWCA9IHNjcm9sbFg7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuXHR0aGlzLl9zY3JvbGxZID0gc2Nyb2xsWTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcblx0dGhpcy5sYXllciA9IG51bGw7XHJcblxyXG5cdHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsZXJMb29waW5nUmFuZ2U7XHJcblNjcm9sbGVyTG9vcGluZ1JhbmdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuU2Nyb2xsZXJMb29waW5nUmFuZ2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsZXJMb29waW5nUmFuZ2U7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKi9cclxuU2Nyb2xsZXJMb29waW5nUmFuZ2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl9vYmplY3RQb29scyA9IFtdO1xyXG5cdHRoaXMuX29iamVjdHMgPSBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKi9cclxuU2Nyb2xsZXJMb29waW5nUmFuZ2UucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24odmlld1dpZHRoLCB2aWV3SGVpZ2h0LCBvcmlnaW5YLCBvcmlnaW5ZKVxyXG57XHJcblx0aWYodGhpcy5zY3JvbGxZKVxyXG5cdFx0dGhpcy5fb3JpZ2luWCA9IG9yaWdpblg7XHJcblxyXG5cdGlmKHRoaXMuc2Nyb2xsWClcclxuXHRcdHRoaXMuX29yaWdpblkgPSBvcmlnaW5ZO1xyXG5cclxuXHR2YXIgZCA9ICd4JztcclxuXHR2YXIgZSA9ICd3aWR0aCc7XHJcblx0dmFyIG0gPSB2aWV3V2lkdGg7XHJcblx0aWYodGhpcy5fc2Nyb2xsWSlcclxuXHR7XHJcblx0XHRkID0gJ3knO1xyXG5cdFx0ZSA9ICdoZWlnaHQnO1xyXG5cdFx0bSA9IHZpZXdIZWlnaHQ7XHJcblx0fVx0XHJcblxyXG5cdHZhciB0b3RhbCA9IDA7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX29iamVjdHNEYXRhLmxlbmd0aDsgaSsrKVxyXG5cdHtcclxuXHRcdHRvdGFsICs9IHRoaXMuX29iamVjdHNEYXRhW2ldLmFyZWFSZWN0W2RdICsgdGhpcy5fb2JqZWN0c0RhdGFbaV0uYXJlYVJlY3RbZV0gKyB0aGlzLl9vYmplY3RzRGF0YVtpXS5vZmZzZXRbZF07XHJcblx0fVxyXG5cclxuXHR2YXIgb2JqZWN0QW1vdW50cyA9IFtdO1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBNYXRoLmNlaWwodmlld1dpZHRoIC8gdG90YWwpOyBpKyspXHJcblx0e1x0XHJcblx0XHRmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5fb2JqZWN0c0RhdGEubGVuZ3RoOyBqKyspXHJcblx0XHR7XHJcblx0XHRcdGlmKG9iamVjdEFtb3VudHNbal0gPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG9iamVjdEFtb3VudHNbal0gPSAwO1xyXG5cdFx0XHRvYmplY3RBbW91bnRzW2pdKys7XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9vYmplY3RzRGF0YS5sZW5ndGg7IGkrKylcclxuXHR7XHJcblx0XHR0aGlzLl9vYmplY3RQb29sc1tpXSA9IG5ldyBwMy5PYmplY3RQb29sKHRoaXMuX29iamVjdHNEYXRhW2ldLmJhc2UsIG9iamVjdEFtb3VudHNbaV0sIHRoaXMuX29iamVjdHNEYXRhW2ldLmFyZ3MpO1xyXG5cdH1cclxuXHJcblx0dmFyIHJldHVybkFycmF5ID0gW107XHJcblxyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBNYXRoLmNlaWwodmlld1dpZHRoL3RvdGFsKTsgaSsrKVxyXG5cdHtcdFxyXG5cdFx0Zm9yKHZhciBqID0gMDsgaiA8IHRoaXMuX29iamVjdHNEYXRhLmxlbmd0aDsgaisrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgb2JqID0gdGhpcy5fb2JqZWN0UG9vbHNbal0uY3JlYXRlKCk7XHJcblxyXG5cdFx0XHRpZihvYmogPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX29iamVjdFBvb2xzW2pdLmV4cGFuZCgyKTtcclxuXHRcdFx0XHRvYmogPSB0aGlzLl9vYmplY3RQb29sc1tqXS5jcmVhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9vYmplY3RzLnB1c2gob2JqKTtcclxuXHJcblx0XHRcdHJldHVybkFycmF5LnB1c2goe29iajpvYmosIGFyZWFSZWN0OnRoaXMuX29iamVjdHNEYXRhW2pdLmFyZWFSZWN0LCBvZmZzZXQ6dGhpcy5fb2JqZWN0c0RhdGFbal0ub2Zmc2V0fSk7XHJcblx0XHRcdHRoaXMuX29iamVjdHNQbGFjZWQrKztcclxuXHRcdFx0b2JqLmxvb3BpbmdSYW5nZU51bWJlciA9IHRoaXMuX29iamVjdHNQbGFjZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiByZXR1cm5BcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlckxvb3BpbmdSYW5nZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZm9jdXNQb2ludCwgdmlld0JvdW5kYXJ5LCBsYXllckNvbnRhaW5lcilcclxue1xyXG5cdC8vdmFyIHByZXZpb3VzT2JqZWN0TnVtYmVyID0gTWF0aC5hYnMoKHRoaXMuX29iamVjdHNbMF0ubG9vcGluZ1JhbmdlTnVtYmVyLTEpICUgdGhpcy5fb2JqZWN0c0RhdGEubGVuZ3RoKTtcclxuXHR2YXIgbmV4dE9iamVjdE51bWJlciA9ICh0aGlzLl9vYmplY3RzUGxhY2VkKzEpICUgdGhpcy5fb2JqZWN0c0RhdGEubGVuZ3RoO1xyXG5cdC8vdmFyIHByZXZpb3VzT2JqZWN0RGF0YSA9IHRoaXMuX29iamVjdHNEYXRhW3ByZXZpb3VzT2JqZWN0TnVtYmVyXTtcclxuXHR2YXIgbmV4dE9iamVjdERhdGEgPSB0aGlzLl9vYmplY3RzRGF0YVtuZXh0T2JqZWN0TnVtYmVyXTtcclxuXHJcblx0Ly92YXIgZmlyc3RPYmplY3QgPSB0aGlzLl9vYmplY3RzWzBdO1xyXG5cdHZhciBsYXN0T2JqZWN0ID0gdGhpcy5fb2JqZWN0c1t0aGlzLl9vYmplY3RzLmxlbmd0aC0xXTtcclxuXHJcblx0dmFyIGQgPSAneCc7XHJcblx0dmFyIGUgPSAnd2lkdGgnO1xyXG5cdHZhciBvID0gJ3knO1xyXG5cclxuXHRpZih0aGlzLl9zY3JvbGxZKVxyXG5cdHtcclxuXHRcdGQgPSAneSc7XHJcblx0XHRlID0gJ2hlaWdodCc7XHJcblx0XHRvID0gJ3gnO1xyXG5cdH1cclxuXHJcblx0dmFyIHJldHVybkFycmF5ID0gW107XHJcblxyXG5cdC8qXHJcblx0aWYobGF5ZXJDb250YWluZXJbZF0gKyBmaXJzdE9iamVjdFtkXSArIGZpcnN0T2JqZWN0LmFyZWFSZWN0W2RdICsgcHJldmlvdXNPYmplY3REYXRhLm9mZnNldFtkXSBcclxuXHRcdD4gZm9jdXNQb2ludFtkXSArIHZpZXdCb3VuZGFyeVtkXSlcclxuXHR7XHJcblx0XHR2YXIgb2JqID0gdGhpcy5fb2JqZWN0UG9vbHNbcHJldmlvdXNPYmplY3ROdW1iZXJdLmNyZWF0ZSgpO1xyXG5cclxuXHRcdGlmKG9iaiA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9vYmplY3RQb29sc1tqXS5leHBhbmQoMik7XHJcblx0XHRcdG9iaiA9IHRoaXMuX29iamVjdFBvb2xzW2pdLmNyZWF0ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBvZmZzZXQgPSBuZXcgUElYSS5Qb2ludCgpO1xyXG5cdFx0b2Zmc2V0W2RdID0gZmlyc3RPYmplY3RbZF0gLSAocHJldmlvdXNPYmplY3REYXRhLmFyZWFSZWN0W2VdICsgcHJldmlvdXNPYmplY3REYXRhLmFyZWFSZWN0W2RdKSArIHByZXZpb3VzT2JqZWN0RGF0YS5vZmZzZXRbZF07XHJcblx0XHRvZmZzZXRbb10gPSBwcmV2aW91c09iamVjdERhdGFbb107XHJcblx0XHRcclxuXHRcdHJldHVybkFycmF5LnB1c2goe29iajpvYmosIGFyZWFSZWN0OnByZXZpb3VzT2JqZWN0RGF0YS5hcmVhUmVjdCwgb2Zmc2V0Om9mZnNldH0pO1xyXG5cdFx0b2JqLmxvb3BpbmdSYW5nZU51bWJlciA9IHRoaXMuX29iamVjdHNbMF0ubG9vcGluZ1JhbmdlTnVtYmVyLTE7XHJcblxyXG5cdFx0dGhpcy5fb2JqZWN0cy5zcGxpY2UoMCwgMCwgb2JqKTtcclxuXHR9Ki9cclxuXHJcblx0dmFyIG5ld1BsYWNlbWVudCA9IGxhc3RPYmplY3RbZF0gKyBsYXN0T2JqZWN0LmFyZWFSZWN0W2RdICsgbGFzdE9iamVjdC5hcmVhUmVjdFtlXSArIG5leHRPYmplY3REYXRhLm9mZnNldFtkXTsgLy8rIE1hdGguYWJzKG5leHRPYmplY3REYXRhLmFyZWFSZWN0W2RdKSArIG5leHRPYmplY3REYXRhLm9mZnNldFtkXTtcclxuXHJcblx0aWYobGF5ZXJDb250YWluZXJbZF0gKyBuZXdQbGFjZW1lbnQgPCBmb2N1c1BvaW50W2RdICsgdmlld0JvdW5kYXJ5W2RdICsgdmlld0JvdW5kYXJ5W2VdKVxyXG5cdHtcclxuXHRcdHZhciBvYmogPSB0aGlzLl9vYmplY3RQb29sc1tuZXh0T2JqZWN0TnVtYmVyXS5jcmVhdGUoKTtcclxuXHJcblx0XHRpZihvYmogPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fb2JqZWN0UG9vbHNbbmV4dE9iamVjdE51bWJlcl0uZXhwYW5kKDIpO1xyXG5cdFx0XHRvYmogPSB0aGlzLl9vYmplY3RQb29sc1tuZXh0T2JqZWN0TnVtYmVyXS5jcmVhdGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFBJWEkuUG9pbnQoKTtcclxuXHRcdG9mZnNldFtkXSA9IG5ld1BsYWNlbWVudDtcclxuXHRcdG9mZnNldFtvXSA9IG5leHRPYmplY3REYXRhLm9mZnNldFtvXSArIHRoaXNbJ19vcmlnaW4nICsgW28udG9VcHBlckNhc2UoKV1dO1xyXG5cclxuXHRcdHJldHVybkFycmF5LnB1c2goe29iajpvYmosIGFyZWFSZWN0Om5leHRPYmplY3REYXRhLmFyZWFSZWN0LCBvZmZzZXQ6b2Zmc2V0fSk7XHJcblx0XHR0aGlzLl9vYmplY3RzUGxhY2VkKys7XHJcblx0XHRvYmoubG9vcGluZ1JhbmdlTnVtYmVyID0gdGhpcy5fb2JqZWN0c1BsYWNlZDtcclxuXHJcblx0XHR0aGlzLl9vYmplY3RzLnB1c2gob2JqKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXR1cm5BcnJheTtcclxuXHRcdFx0XHQgICBcclxufTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKi9cclxuU2Nyb2xsZXJMb29waW5nUmFuZ2UucHJvdG90eXBlLm9iamVjdFJlbW92ZWQgPSBmdW5jdGlvbihvYmopXHJcbntcclxuXHR2YXIgaW5kZXggPSB0aGlzLl9vYmplY3RzLmluZGV4T2Yob2JqKTtcclxuXHRpZihpbmRleCA+PSAwKVxyXG5cdHtcclxuXHRcdHRoaXMuX29iamVjdFBvb2xzW29iai5sb29waW5nUmFuZ2VOdW1iZXIgJSB0aGlzLl9vYmplY3RzRGF0YS5sZW5ndGhdLmZyZWUob2JqKTtcdFxyXG5cdFx0dGhpcy5fb2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH1cclxufTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjcm9sbGVyTG9vcGluZ1JhbmdlLnByb3RvdHlwZSwgXCJzY3JvbGxYXCIsIHtcclxuXHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY3JvbGxYO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtQSVhJLlRleHR1cmV9IHRleHR1cmVcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcclxuICogQHBhcmFtIHtCb29sZWFufSByZW1vdmVJZk91dHNpZGVCb3VuZGFyeVxyXG4gKi9cclxuZnVuY3Rpb24gU2Nyb2xsZXJPYmplY3QodHlwZSwgcmVtb3ZlSWZPdXRzaWRlQm91bmRhcnkpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge3AzLkFzc2V0TWFuYWdlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtzaWduYWxzLlNpZ25hbH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zaWduYWxzID0ge307XHJcbiAgICB0aGlzLnNpZ25hbHMuZGlzcG9zZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcblx0dGhpcy5fdHlwZSA9IHR5cGU7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge1BJWEkuUmVjdGFuZ2xlfVxyXG4gICAgICovXHJcblx0dGhpcy5jb2xsaXNpb25SZWN0ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5HcmFwaGljfVxyXG4gICAgICovXHJcblx0dGhpcy5fY29sbGlzaW9uUmVjdExpbmVzID0gbnVsbDtcclxuXHRcclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlJlY3RhbmdsZX1cclxuICAgICAqL1xyXG5cdHRoaXMuYXJlYVJlY3QgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuXHR0aGlzLmxvb3BpbmdSYW5nZU51bWJlciA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge1BJWEkuUmVjdGFuZ2xlfVxyXG4gICAgICovXHJcblx0dGhpcy5yZW1vdmVJZk91dHNpZGVCb3VuZGFyeSA9IHJlbW92ZUlmT3V0c2lkZUJvdW5kYXJ5ID09IG51bGwgPyB0cnVlIDogcmVtb3ZlSWZPdXRzaWRlQm91bmRhcnk7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueVNwZWVkID0gMDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICovXHJcblx0dGhpcy5wZXJzaXN0ZW50WCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqL1xyXG5cdHRoaXMucGVyc2lzdGVudFkgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuXHR0aGlzLnBlcnNpc3RlbnRSZWN0YW5nbGUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuXHR0aGlzLnBlcnNpc3RlbnRSZWN0YW5nbGVFeGl0RWFzZSA9IDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7Qm9sbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVNZSA9IGZhbHNlO1xyXG5cclxuXHRQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG5cclxuXHR0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbGVyT2JqZWN0O1xyXG5TY3JvbGxlck9iamVjdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XHJcblNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbGVyT2JqZWN0O1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlck9iamVjdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLnggKz0gdGhpcy54U3BlZWQ7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy55U3BlZWQ7XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMueCA9IDA7XHJcblx0dGhpcy55ID0gMDtcclxuICAgIHRoaXMucmVtb3ZlTWUgPSBmYWxzZTtcclxuXHRcclxuXHRpZih0aGlzLl9jb2xsaXNpb25SZWN0TGluZXMgIT0gbnVsbClcclxuXHR7XHJcblx0XHR0aGlzLnJlbW92ZUNoaWxkKHRoaXMuX2NvbGxpc2lvblJlY3RMaW5lcyk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlck9iamVjdC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuc2lnbmFscy5kaXNwb3NlZC5kaXNwYXRjaCh0aGlzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlck9iamVjdC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIFxyXG59XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIFxyXG59XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZS5kcmF3Q29sbGlzaW9uUmVjdCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdGhpcy5fY29sbGlzaW9uUmVjdExpbmVzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fY29sbGlzaW9uUmVjdExpbmVzKTtcclxuICAgIHRoaXMuX2NvbGxpc2lvblJlY3RMaW5lcy5saW5lU3R5bGUoMSwgMHhGNzExMUQpO1xyXG4gICAgdGhpcy5fY29sbGlzaW9uUmVjdExpbmVzLmRyYXdSZWN0KHRoaXMuY29sbGlzaW9uUmVjdC54LCB0aGlzLmNvbGxpc2lvblJlY3QueSwgdGhpcy5jb2xsaXNpb25SZWN0LndpZHRoLCB0aGlzLmNvbGxpc2lvblJlY3QuaGVpZ2h0KTtcclxufVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHshU3RyaW5nfSBzaWRlIChsZWZ0LCByaWdodCwgdXBwZXIgb3IgbGVmdClcclxuICovXHJcblNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZS5vbkV4aXRQZXJzaXN0ZW50UmVjdGFuZ2xlID0gZnVuY3Rpb24oc2lkZSlcclxue1xyXG5cdFxyXG59O1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2Nyb2xsZXJPYmplY3QucHJvdG90eXBlLCBcInR5cGVcIiwge1xyXG5cclxuXHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3R5cGU7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgU2Nyb2xsZXJPYmplY3RcdD0gcmVxdWlyZShcIi4vU2Nyb2xsZXJPYmplY3RcIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0geyFBcnJheTxPYmplY3Q+fSBiYXNlOiosIGFyZ3M6QXJyYXlcclxuICogQHBhcmFtIHshQXJyYXk8Kj59IGFyZ3NcclxuICovXHJcbmZ1bmN0aW9uIFNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yKHBvb2xzKVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7c2lnbmFscy5TaWduYWx9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2lnbmFscyA9IHt9O1xyXG5cdHRoaXMuc2lnbmFscy5nZW5lcmF0ZU9iamVjdHMgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHR0aGlzLnNpZ25hbHMub2JqZWN0RGlzcG9zZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1cclxuICAgICAqL1xyXG5cdHRoaXMuX3Bvb2xEYXRhID0gcG9vbHM7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqL1xyXG5cdHRoaXMuX3Bvb2xzID0gbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9wYXR0ZXJucyA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqL1x0XHJcblx0dGhpcy5fY3VycmVudERpc3RhbmNlID0gMDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICovXHRcclxuXHR0aGlzLl90YXJnZXREaXN0YW5jZSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqL1xyXG5cdHRoaXMuX21pbkZyZXF1ZW5jeSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqL1xyXG5cdHRoaXMuX21heEZyZXF1ZW5jeSA9IG51bGw7XHJcblxyXG5cdFBJWEkuQ29udGFpbmVyLmNhbGwodGhpcyk7XHJcblxyXG5cdHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsZXJPYmplY3RHZW5lcmF0b3I7XHJcblNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuU2Nyb2xsZXJPYmplY3RHZW5lcmF0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsZXJPYmplY3RHZW5lcmF0b3I7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKi9cclxuU2Nyb2xsZXJPYmplY3RHZW5lcmF0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl9wb29scyA9IHt9O1x0XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3Bvb2xEYXRhLmxlbmd0aDsgaSsrKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Bvb2xzW3RoaXMuX3Bvb2xEYXRhW2ldLmlkXSA9IG5ldyBwMy5PYmplY3RQb29sKHRoaXMuX3Bvb2xEYXRhW2ldLmJhc2UsIDIsIHRoaXMuX3Bvb2xEYXRhW2ldLmFyZ3MpO1xyXG5cdH1cclxuXHR0aGlzLl9wYXR0ZXJucyA9IHt9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlck9iamVjdEdlbmVyYXRvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGlzdGFuY2UpXHJcbntcclxuXHRpZih0aGlzLl90YXJnZXREaXN0YW5jZSAhPSBudWxsKVxyXG5cdHtcdFxyXG5cdFx0dGhpcy5fY3VycmVudERpc3RhbmNlICs9IGRpc3RhbmNlO1xyXG5cclxuXHRcdGlmKHRoaXMuX2N1cnJlbnREaXN0YW5jZSA+PSB0aGlzLl90YXJnZXREaXN0YW5jZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5nZW5lcmF0ZSgpO1xyXG5cdFx0XHR0aGlzLnNldFJhbmRvbUZyZXF1ZW5jeSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IG9ianMgLSB7eCwgeSwgcG9vbElkfVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcclxuICovXHJcblNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yLnByb3RvdHlwZS5hZGRQYXR0ZXJuID0gZnVuY3Rpb24ob2JqcywgcGF0dGVybklkKVxyXG57XHJcblx0aWYodGhpcy5fcGF0dGVybnNbcGF0dGVybklkXSA9PSB1bmRlZmluZWQpXHJcblx0XHR0aGlzLl9wYXR0ZXJuc1twYXR0ZXJuSWRdID0gb2JqcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcclxuICovXHJcblNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yLnByb3RvdHlwZS5yZW1vdmVQYXR0ZXJuID0gZnVuY3Rpb24ocGF0dGVybklkKVxyXG57XHJcblx0ZGVsZXRlIHRoaXMuX3BhdHRlcm5zW3BhdHRlcm5JZF07XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IU51bWJlcn0gbWluXHJcbiAqIEBwYXJhbSB7IU51bWJlcn0gbWF4XHJcbiAqIEBwYXJhbSB7IUJvb2xlYW59IHNldFxyXG4gKi9cclxuU2Nyb2xsZXJPYmplY3RHZW5lcmF0b3IucHJvdG90eXBlLnNldEZyZXF1ZW5jaWVzID0gZnVuY3Rpb24obWluLCBtYXgsIHNldClcclxue1xyXG5cdHRoaXMuX21pbkZyZXF1ZW5jeSA9IG1pbjtcclxuXHR0aGlzLl9tYXhGcmVxdWVuY3kgPSBtYXg7XHJcblxyXG5cdGlmKHNldCA9PSB1bmRlZmluZWQpXHJcblx0XHRzZXQgPSB0cnVlO1xyXG5cclxuXHRpZihzZXQpXHJcblx0XHR0aGlzLnNldFJhbmRvbUZyZXF1ZW5jeSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlck9iamVjdEdlbmVyYXRvci5wcm90b3R5cGUuc2V0UmFuZG9tRnJlcXVlbmN5ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5fY3VycmVudERpc3RhbmNlID0gMDtcclxuXHR0aGlzLl90YXJnZXREaXN0YW5jZSA9IHRoaXMuX21pbkZyZXF1ZW5jeSArIChNYXRoLnJhbmRvbSgpICogKHRoaXMuX21heEZyZXF1ZW5jeSAtIHRoaXMuX21pbkZyZXF1ZW5jeSkpO1xyXG59XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yLnByb3RvdHlwZS5zZXRTcGVjaWZpY0ZyZXF1ZW5jeSA9IGZ1bmN0aW9uKGZyZXEpXHJcbntcclxuXHR0aGlzLl90YXJnZXREaXN0YW5jZSA9IGZyZXE7XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcblNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciBwYXR0ZXJucyA9IFtdO1xyXG5cclxuXHRmb3IodmFyIGkgaW4gdGhpcy5fcGF0dGVybnMpXHJcblx0e1xyXG5cdFx0cGF0dGVybnMucHVzaChpKTtcclxuXHR9XHJcblxyXG5cdHZhciBjaG9zZW5QYXR0ZXJuID0gbnVsbDtcclxuXHJcblx0aWYocGF0dGVybnMubGVuZ3RoID09IDApXHJcblx0e1xyXG5cdFx0Y29uc29sZS5sb2coJ05vIHBhdHRlcm4gc2V0IScpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Y2hvc2VuUGF0dGVybiA9IHRoaXMuX3BhdHRlcm5zW3BhdHRlcm5zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBhdHRlcm5zLmxlbmd0aCldXTtcclxuXHR9XHJcblxyXG5cdHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG5cclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2hvc2VuUGF0dGVybi5sZW5ndGg7IGkrKylcclxuXHR7XHJcblx0XHR2YXIgcG9vbCA9IHRoaXMuX3Bvb2xzW2Nob3NlblBhdHRlcm5baV0ucG9vbElkXTtcclxuXHRcdHZhciBvYmogPSBwb29sLmNyZWF0ZSgpO1xyXG5cclxuXHRcdGlmKG9iaiA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRwb29sLmV4cGFuZCgyKTtcclxuXHRcdFx0b2JqID0gcG9vbC5jcmVhdGUoKTtcclxuXHRcdH1cclxuXHRcdG9iai5zaWduYWxzLmRpc3Bvc2VkLmFkZCh0aGlzLm9uT2JqZWN0RGlzcG9zZWQsIHRoaXMpO1xyXG5cdFx0cmV0dXJuQXJyYXkucHVzaCh7b2JqOm9iaiwgb2Zmc2V0Ont4OmNob3NlblBhdHRlcm5baV0ueCwgeTpjaG9zZW5QYXR0ZXJuW2ldLnl9fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnNpZ25hbHMuZ2VuZXJhdGVPYmplY3RzLmRpc3BhdGNoKHJldHVybkFycmF5KTtcclxufTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblNjcm9sbGVyT2JqZWN0R2VuZXJhdG9yLnByb3RvdHlwZS5vbk9iamVjdERpc3Bvc2VkID0gZnVuY3Rpb24ob2JqKVxyXG57XHJcbiAgICBvYmouc2lnbmFscy5kaXNwb3NlZC5yZW1vdmUodGhpcy5vbk9iamVjdERpc3Bvc2VkLCB0aGlzKTtcclxuICAgIHRoaXMuc2lnbmFscy5vYmplY3REaXNwb3NlZC5kaXNwYXRjaChvYmopO1xyXG5cclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLl9wb29scylcclxuICAgIHtcclxuICAgIFx0aWYodGhpcy5fcG9vbHNbaV0uX3VzZWQuaW5kZXhPZihvYmopID4gLTEpXHJcbiAgICBcdHtcdFxyXG4gICAgXHRcdHRoaXMuX3Bvb2xzW2ldLmZyZWUob2JqKTtcclxuICAgIFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4iLCJ2YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxudmFyIFNjcm9sbGVyT2JqZWN0XHQ9IHJlcXVpcmUoXCIuL1Njcm9sbGVyT2JqZWN0XCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHshU3RyaW5nfSB0eXBlXHJcbiAqIEBwYXJhbSB7IUJvb2xlYW59IHJlbW92ZUlmT3V0c2lkZUJvdW5kYXJ5XHJcbiAqIEBwYXJhbSB7IVBJWEkuVGV4dHVyZX0gdGV4dHVyZVxyXG4gKiBAcGFyYW0ge1BJWEkuUG9pbnQ9fSBhbmNob3JcclxuICovXHJcbmZ1bmN0aW9uIFNjcm9sbGVyT2JqZWN0SW1hZ2UodHlwZSwgcmVtb3ZlSWZPdXRzaWRlQm91bmRhcnksIHRleHR1cmUsIGFuY2hvcilcclxue1xyXG5cdHRoaXMuX3RleHR1cmUgPSB0ZXh0dXJlO1xyXG5cdHRoaXMuX2FuY2hvciA9IGFuY2hvciB8fCBuZXcgUElYSS5Qb2ludCgwLCAwKTtcclxuXHR0aGlzLl9pbWFnZSA9IG51bGw7XHJcblxyXG5cdFNjcm9sbGVyT2JqZWN0LmNhbGwodGhpcywgdHlwZSwgcmVtb3ZlSWZPdXRzaWRlQm91bmRhcnkpO1xyXG5cclxuXHR0aGlzLmNyZWF0ZSgpO1xyXG5cdHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsZXJPYmplY3RJbWFnZTtcclxuU2Nyb2xsZXJPYmplY3RJbWFnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZSk7XHJcblNjcm9sbGVyT2JqZWN0SW1hZ2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsZXJPYmplY3RJbWFnZTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlck9iamVjdEltYWdlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl9pbWFnZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl90ZXh0dXJlKTtcclxuXHR0aGlzLl9pbWFnZS5hbmNob3IgPSB0aGlzLl9hbmNob3I7XHJcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9pbWFnZSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKi9cclxuU2Nyb2xsZXJPYmplY3RJbWFnZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdFxyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5TY3JvbGxlck9iamVjdEltYWdlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdFNjcm9sbGVyT2JqZWN0LnByb3RvdHlwZS5yZXNldC5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4iXX0=
