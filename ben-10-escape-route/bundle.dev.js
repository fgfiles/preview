(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Common          = require( "./Common" );
var GameScreen      = require( "./screens/GameScreen" );
var SplashScreen    = require( "./screens/SplashScreen" );
var InstructionsScreen    = require( "./screens/InstructionsScreen" );
var EndLevelScreen  = require( "./screens/EndLevelScreen" );
var LevelSelectionScreen = require( "./screens/LevelSelectionScreen" );
var AlienInstructionsScreen = require( "./screens/AlienInstructionsScreen" );
var PauseOverlay    = require( "./overlays/PauseOverlay" );
var GameOverOverlay = require( "./overlays/GameOverOverlay" );
var Transition      = require( "./lib/Transition" );
var SavedData       = require( "./SavedData" );
var Global 			= require( "./general/Global" );

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
	
	//Texture generation: white square
	if(Common.generatedTextures['whiteSquare'] == undefined)
	{
		var gr = new PIXI.Graphics();
		gr.beginFill(0xffffff);
		gr.drawRect(0, 0, 1, 1);
		Common.generatedTextures['whiteSquare'] = gr.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);
	}

	Common.savedData = new SavedData();
	// DEBUG: Clear saved data. Uncomment save() and comment init().
	//Common.savedData.save();
	Common.savedData.init();

	p3.Button.audio = p3.AudioManager.instance;
	
	//this.showEndLevelScreen();
	this.showSplashScreen();
	//this.showGameScreen( "level_1_2" );
	//this.showLevelSelectionScreen();
};

//===================================================
// PRIVATE METHODS
//===================================================

Application.prototype.findAlienId = function( chapterIndex, levelIndex )
{
	var alienId = -1;
	for ( var i = 0; i < Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY.length; ++i )
	{
		if ( Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY[ i ].levelId == levelIndex + 1
			&& Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY[ i ].chapterId == chapterIndex + 1 )
			alienId = Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY[ i ].alienId;
	}
	
	return alienId;
}

/**
 * END LEVEL
 */
Application.prototype.showEndLevelScreen = function( levelResultInfo )
{
	// Music.
	var arrMusicId = [ "chapter1_complete01_40pc_vol", "chapter2_complete01_40pc_vol", "chapter3_complete01_40pc_vol" ];
	p3.AudioManager.instance.playMusic( arrMusicId[ levelResultInfo.chapterIndex ], {loop:false} );

	var screen = new EndLevelScreen( levelResultInfo );
	this._screenManager.add( screen, this._getTransition() );

	screen.signals.requestedPreviousScreen.addOnce(
		function() { this.showSplashScreen(); }, 
		this );
	screen.signals.requestedNextScreen.addOnce( 
		function() 
		{ 
			// Increment chapter/level index.
			var levelIndex = levelResultInfo.levelIndex;
			var chapterIndex = levelResultInfo.chapterIndex;
		
			if ( levelIndex == Global.LEVEL_ID_ARRAY[ levelResultInfo.chapterIndex ].length - 1 )
			{
				if ( chapterIndex < Global.LEVEL_ID_ARRAY.length - 1 )
				{
					++chapterIndex;
					levelIndex = 0;
				}
			}
			else
				++levelIndex;
				
			
			// Show alien instructions or game screen.
			var alienId = this.findAlienId( chapterIndex, levelIndex );			
			if ( alienId == -1 )
				this.showGameScreen( chapterIndex, levelIndex );
			else
				this.showAlienInstructionsScreen( alienId, chapterIndex, levelIndex );
		}, 
		this );
	screen.signals.requestedLevelSelectionScreen.addOnce( 
		function() { this.showLevelSelectionScreen(); }, 
		this );
	screen.signals.replayLevel.addOnce( 
		function() { this.showGameScreen( levelResultInfo.chapterIndex, levelResultInfo.levelIndex ); }, 
		this );

	this._currentScreen = screen;
};

/**
 * LEVEL SELECTION
 */
Application.prototype.showLevelSelectionScreen = function()
{
	var screen = new LevelSelectionScreen();
	this._screenManager.add( screen, this._getTransition() );

	screen.signals.requestedPreviousScreen.addOnce(
		function() { this.showSplashScreen(); }, 
		this );

	screen.signals.requestedNextScreen.addOnce(
		function( chapterIndex, levelIndex ) 
		{ 
			if ( !Common.savedData.hasViewedInstructions )
			{
				Common.savedData.hasViewedInstructions = true;
				Common.savedData.save();
				
				this.showInstructionsScreen( chapterIndex, levelIndex );
			}
			else
			{		
				var alienId = -1;
				for ( var i = 0; i < Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY.length; ++i )
				{
					if ( Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY[ i ].levelId == levelIndex + 1
						&& Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY[ i ].chapterId == chapterIndex + 1 )
						alienId = Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY[ i ].alienId;
				}
				
				if ( alienId == -1 )
					this.showGameScreen( chapterIndex, levelIndex );
				else
					this.showAlienInstructionsScreen( alienId, chapterIndex, levelIndex );
			}
		}, 
		this );

	this._currentScreen = screen;
};

/**
 * ALIEN INSTRUCTIONS
 */
Application.prototype.showAlienInstructionsScreen = function( alienId, chapterIndex, levelIndex )
{
	var screen = new AlienInstructionsScreen( alienId, chapterIndex, levelIndex );
	this._screenManager.add( screen, this._getTransition() );

	screen.signals.requestedPreviousScreen.addOnce(
		function() { this.showLevelSelectionScreen(); }, 
		this );

	screen.signals.requestedNextScreen.addOnce(
		function( chapterIndex, levelIndex ) { this.showGameScreen( chapterIndex, levelIndex ); }, 
		this );

	this._currentScreen = screen;
};

/**
 * SPLASH
 */
Application.prototype.showSplashScreen = function()
{
	// Music.
	p3.AudioManager.instance.playMusic( "main_menu_edit4_40pc" );

	var screen = new SplashScreen();
	this._screenManager.add( screen, this._getTransition() );

	screen.signals.requestedPreviousScreen.addOnce( function() {}, this );

	screen.signals.requestedNextScreen.addOnce(
		function() { this.showLevelSelectionScreen(); }, 
		this );

	this._currentScreen = screen;
};

/**
 * INSTRUCTIONS
 */
Application.prototype.showInstructionsScreen = function( chapterIndex, levelIndex )
{
	var screen = new InstructionsScreen();
	this._screenManager.add( screen, this._getTransition() );

	screen.signals.requestedPreviousScreen.addOnce( 
		function() { this.showLevelSelectionScreen(); }, 
		this );

	screen.signals.requestedNextScreen.addOnce(
		function() 
		{ 
			// Show alien instructions or game screen.
			var alienId = this.findAlienId( chapterIndex, levelIndex );			
			if ( alienId == -1 )
				this.showGameScreen( chapterIndex, levelIndex );
			else
				this.showAlienInstructionsScreen( alienId, chapterIndex, levelIndex );
		}, 
		this );

	this._currentScreen = screen;
};


/**
 * GAME
 */
Application.prototype.showGameScreen = function( chapterIndex, levelIndex )
{
	// Music.
	var arrMusicId = [ "chapter1_edit_40pc_vol", "chapter2_edit_40pc_vol", "chapter3_edit_40pc_vol" ];
	p3.AudioManager.instance.playMusic( arrMusicId[ chapterIndex ] );

	var screen = new GameScreen( chapterIndex, levelIndex );
	this._screenManager.add( screen, this._getTransition() );

	screen.signals.requestedPreviousScreen.addOnce(
		function() { /*this.showGameScreen( chapterIndex, levelIndex, screen.level.levelResultInfo.time );*/
			screen.level.restart(); }, 
		this );
	screen.signals.requestedNextScreen.addOnce(
		function() { this.showEndLevelScreen( screen.level.levelResultInfo ); }, 
		this );
	screen.signals.pausePressed.add(
		function() { this.showPauseScreen( false ); }, 
		this );

	this._currentScreen = screen;

	return screen;
};

/**
 * PAUSE
 */
Application.prototype.showPauseScreen = function()
{
	var t     = new Transition();
	t.replace = false;
	t.push    = true;

	this._currentScreen.hideGUI(
		function()
		{
			var screen = new PauseOverlay();
			this._screenManager.add( screen, t );

			screen.signals.requestedNextScreen.addOnce(
				function() 
				{ 
					this._screenManager.remove();
					this._currentScreen.showGUI();
				}, 
				this );
			screen.signals.requestedPreviousScreen.addOnce(
				function() { this.showSplashScreen(); }, 
				this );
			screen.signals.requestedGameScreen.addOnce(
				function() 
				{ 
					this._screenManager.remove();
					this._currentScreen.showGUI();
					if ( this._currentScreen.level.state != this._currentScreen.level.STATE_GAME_OVER )
					{
						if ( this._currentScreen.level.room.avatar.currentAnimation == "run_level" )
							this._currentScreen.level.room.avatar.setAnimation( "idle", false );
						this._currentScreen.level.onGameOver(); 
					}
				}, 
				this );
		}, 
		this, 
		true );
};

/**
 */
Application.prototype._getTransition = function()
{
	var transition = new Transition();
	transition.replace = true;
	transition.push = false;
	return transition;
}


},{"./Common":2,"./SavedData":5,"./general/Global":31,"./lib/Transition":37,"./overlays/GameOverOverlay":38,"./overlays/PauseOverlay":39,"./screens/AlienInstructionsScreen":40,"./screens/EndLevelScreen":43,"./screens/GameScreen":44,"./screens/InstructionsScreen":45,"./screens/LevelSelectionScreen":46,"./screens/SplashScreen":48}],2:[function(require,module,exports){
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

/**
 * @type {Object}
 * @static
 */
Common.characterAnimationData = [];

//===================================================
},{}],3:[function(require,module,exports){
"use strict";

/**
 * Keyboard class
 * ===========================
 * @constructor
 */

function Keyboard()
{
}
module.exports = Keyboard;

var Keyboard = Keyboard.prototype;

/**
 * @type {Signal.Signal}
 */
Keyboard.signalKeyDown = new signals.Signal();
Keyboard.signalKeyUp = new signals.Signal();

/**
 * @type {Object.<boolean>}
 */
Keyboard._keysDown    = null;
Keyboard._keysPressed = null;
Keyboard._keysUp      = null;

/**
 * @const @type {number}
 */
Keyboard.KEY_TAB   = 9;
Keyboard.KEY_ENTER = 13;
Keyboard.KEY_SHIFT = 16;
Keyboard.KEY_CTRL  = 17;
Keyboard.KEY_SPACE = 32;
Keyboard.KEY_LEFT  = 37;
Keyboard.KEY_UP    = 38;
Keyboard.KEY_RIGHT = 39;
Keyboard.KEY_DOWN  = 40;
Keyboard.KEY_A     = 65;
Keyboard.KEY_B     = 66;
Keyboard.KEY_C     = 67;
Keyboard.KEY_D     = 68;
Keyboard.KEY_E     = 69;
Keyboard.KEY_F     = 70;
Keyboard.KEY_G     = 71;
Keyboard.KEY_H     = 72;
Keyboard.KEY_I     = 73;
Keyboard.KEY_J     = 74;
Keyboard.KEY_K     = 75;
Keyboard.KEY_L     = 76;
Keyboard.KEY_M     = 77;
Keyboard.KEY_N     = 78;
Keyboard.KEY_O     = 79;
Keyboard.KEY_P     = 80;
Keyboard.KEY_Q     = 81;
Keyboard.KEY_R     = 82;
Keyboard.KEY_S     = 83;
Keyboard.KEY_T     = 84;
Keyboard.KEY_U     = 85;
Keyboard.KEY_V     = 86;
Keyboard.KEY_W     = 87;
Keyboard.KEY_X     = 88;
Keyboard.KEY_Y     = 89;
Keyboard.KEY_Z     = 90;
Keyboard.KEY_PLUs  = 187;
Keyboard.KEY_MINUS = 189;


/**
 * Initialization
 */
Keyboard.init = function()
{
	this.reset();

	// Key events
	document.body.onkeydown = function(e)
	{
		var code;
		if(window.event) code = e.keyCode;
		else             code = e.which;

		Keyboard._keysDown[code]    = !Keyboard._keysPressed[code];
		Keyboard._keysPressed[code] = true;

		Keyboard.signalKeyDown.dispatch(code);
	}

	document.body.onkeyup = function(e)
	{
		var code;
		if(window.event) code = e.keyCode;
		else             code = e.which;

		Keyboard._keysDown[code]    = false;
		Keyboard._keysPressed[code] = false;
		Keyboard._keysUp[code]      = true;

		Keyboard.signalKeyUp.dispatch(code);
	}
}

/**
 * Update
 */
Keyboard.update = function()
{
	Keyboard._keysDown = {};
	Keyboard._keysUp   = {};
}

/**
 * Reset
 */
Keyboard.reset = function()
{
	Keyboard._keysDown    = {};
	Keyboard._keysPressed = {};
	Keyboard._keysUp      = {};
}

/**
 * Return if the given keyCode is currently pressed
 *
 * @param {Number} keyCode
 * @returns {boolean}
 */
Keyboard.getKeyPressed = function(keyCode)
{
	return Keyboard._keysPressed[keyCode];
}

/**
 * Return if the given keyCode or the given combination of keys has just been pressed
 *
 * @param {Number} keyCode
 * @returns {Boolean}
 */
Keyboard.getKeyJustPressed = function(keyCode)
{
	return Keyboard._keysDown[keyCode];
}

/**
 * Return if the given keyCode or the given combination of keys has just been released
 *
 * @param {Number} keyCode
 * @returns {Boolean}
 */
Keyboard.getKeyJustReleased = function(keyCode)
{
	return Keyboard._keysUp[keyCode];
}
},{}],4:[function(require,module,exports){
/**
 *  Main
 *
 *  Created by Legman on 27/04/2015.
 *
 */

var Application   = require("./Application");
var Common        = require("./Common");
var CoolWaitScreen     = require("./screens/CoolWaitScreen");
var SceneManager  = require("./lib/SceneManager");
var Keyboard      = require("./Keyboard");
var CNPreloaderScreen  = require("./screens/CNPreloaderScreen");

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
	this._scale      = "hd/";
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
	params.rotateImageUrl   = "./assets/images/localisation/rotate_" + Common.COUNTRY_CODE + ".jpg";
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
		var options = {};
		options.view = canvas;
		options.transparent = false;
		options.antialias = false;
		options.preserveDrawingBuffer = false;
		options.resolution = this._resolution;
		this._assetManager.scaleFactor = this._resolution;

		var stage = new PIXI.Container();
		Common.stage = stage;

		var renderer = PIXI.autoDetectRenderer(this._width, this._height, options);
		Common.renderer = renderer;

		this._screenManager.init(stage, renderer);
		Common.sceneManager = this._screenManager;

		Common.isWebGL = (renderer instanceof PIXI.WebGLRenderer);
		Common.DEBUG_PAINT_MODE = p3.Utils.getURLParameter("paint", 0);

		var timestep = new p3.Timestep();
		timestep.init(this.update, this.render, this);
		Common.timestep = timestep;

		Common.animator = new p3.Animator();
		Common.animator.init();

		Common.keyboard = new Keyboard();
		Common.keyboard.init();

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

	window.delay = function(callback, delay, scope) {
		return Common.animator.setTimeout(callback, delay, scope);
	};
};

/**
 */
Main.prototype.loadPreloader = function()
{
	var scale  = this._scale;
	var prefix = (scale === "sd/" ? "_0.5x" : "");
	var files =
	[
		// CN preloader.
		{name:"cn_preloader",         url:"images/" + scale + "cn_preloader.json"},
		{name:"cn_preloader_bg",        url:"images/" + scale + "cn_preloader_bg.jpg"},
	
		// Old preloader.
		{name:"preloader_0",         url:"images/" + scale + "preloader_0.json"},
		{name:"preloader_bg",        url:"images/" + scale + "preloader_bg.jpg"},
		
		// Particles
		{name:"preloader_radial_spray",        url:"particles/preloader_radial_spray.json"},		
	];
	var sounds = [
	];
	if (files.length)
	{
		this._assetManager.addFiles(files, window.og.gameDir + "assets/");
		this._assetManager.signalCompleted.addOnce(function() { this.loadAssets(); }, this);
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
		
		
		// Particles.
		{name:"particle_coin_collect_burst",   url:"particles/particle_coin_collect_burst.json"},
		{name:"particle_emitter_attack",   url:"particles/particle_emitter_attack.json"},
		{name:"particle_emitter_wall_destroy",   url:"particles/particle_emitter_wall_destroy.json"},
		{name:"particle_waterfall",   url:"particles/particle_waterfall.json"},
		{name:"particle_draw",   url:"particles/particle_draw_002.json"},
		
		
		// Tilesets
		{name:"backgrounds",         url:"images/" + scale + "levels/backgrounds.png"},
		{name:"dangers",             url:"images/" + scale + "levels/dangers.png"},
		{name:"information",         url:"images/" + scale + "levels/information.png"},
		{name:"objects",             url:"images/" + scale + "levels/objects.png"},
		{name:"platforms",           url:"images/" + scale + "levels/platforms.png"},
		{name:"Background_tiles_02", url:"images/" + scale + "levels/Background_tiles_02.png"},
		{name:"Background_tiles_03", url:"images/" + scale + "levels/Background_tiles_03.png"},
		{name:"Background_tiles_00", url:"images/" + scale + "levels/Background_tiles_00.png"},
		{name:"Tilesheet_00",        url:"images/" + scale + "levels/Tilesheet_00.png"},
		{name:"Tilesheet_02",        url:"images/" + scale + "levels/Tilesheet_02.png"},
		{name:"Tilesheet_03",        url:"images/" + scale + "levels/Tilesheet_03.png"},
		
		{name:"water_tiles0",         url:"images/" + scale + "water_tiles0.json"},
		
		
		// Level Backgrounds.
		{name:"bg_0_niagara",        	url:"images/" + scale + "levels/bg_0_niagara.jpg"},
		{name:"bg_2_farm",        		url:"images/" + scale + "levels/bg_2_farm.jpg"},
		{name:"bg_3_power_station",     url:"images/" + scale + "levels/bg_3_power_station.jpg"},			
			
		{name:"bg_splash",        url:"images/" + scale + "bg_splash.jpg"},
		{name:"bg_ui",        url:"images/" + scale + "bg_ui.jpg"},
		{name:"doors",           url:"images/" + scale + "Doors" + prefix + ".json"},
		{name:"game_0",          url:"images/" + scale + "game_0" + prefix + ".json"},
		{name:"ui_buttons",          url:"images/" + scale + "ui_buttons" + prefix + ".json"},
		{name:"ui_0",          url:"images/" + scale + "ui_0" + prefix + ".json"},
		{name:"ui_1",          url:"images/" + scale + "ui_1" + prefix + ".json"},
		{name:"ui_2",          url:"images/" + scale + "ui_2" + prefix + ".json"},

		{name:"lineGreen_00",        url:"images/" + scale + "lineGreen_00.png"},
		{name:"lineGreen_01",        url:"images/" + scale + "lineGreen_01.png"},
		
		
		// Pause screen.
		{name:"paused_2_bg",        url:"images/" + scale + "paused_2_bg.jpg"},
		{name:"paused_bg",        url:"images/" + scale + "paused_bg.jpg"},
		
		
		// Splash.
		{name: "splash_title",     url: "images/localisation/" + "title_" + Common.COUNTRY_CODE + ".png"},
		
		
		// Levels.
		{name:"level_1_1", url:"data/level_1_1.json"},
		{name:"level_1_2", url:"data/level_1_2.json"},
		{name:"level_1_3", url:"data/level_1_3.json"},
		{name:"level_1_4", url:"data/level_1_4.json"},
		{name:"level_1_5", url:"data/level_1_5.json"},
		{name:"level_2_1", url:"data/level_2_1.json"},
		{name:"level_2_2", url:"data/level_2_2.json"},
		{name:"level_2_3", url:"data/level_2_3.json"},
		{name:"level_2_4", url:"data/level_2_4.json"},
		{name:"level_2_5", url:"data/level_2_5.json"},
		{name:"level_3_1", url:"data/level_3_1.json"},
		{name:"level_3_2", url:"data/level_3_2.json"},
		{name:"level_3_3", url:"data/level_3_3.json"},
		{name:"level_3_4", url:"data/level_3_4.json"},
		{name:"level_3_5", url:"data/level_3_5.json"},
		
		
		// Fonts.
		{name:"ahkio_75_paused", url:"fonts/ahkio_75_paused.xml"},
		{name:"ahkio_60_white_endgame", url:"fonts/ahkio_60_white_endgame.xml"},
		{name:"ahkio_100_green_endgame", url:"fonts/ahkio_100_green_endgame.xml"},
		{name:"ahkio_90_orange_endgame", url:"fonts/ahkio_90_orange_endgame.xml"}
	];
	var sounds =
	[
		// UI.
		"sfx_btn_press_00",
		"sfx_btn_rollover_00",
		"sfx_number_countup_loop",
		"sfx_btn_back",
		"sfx_btn_level",
		
		// Fourarms.
		"sfx_4arms_punch_00",
		"sfx_4arms_punch_01",
		"sfx_4arms_punch_02",
		"sfx_4arms_punch_03",
		"sfx_4arms_punch_04",
		"sfx_4arms_swoosh_00",
		"sfx_4arms_swoosh_01",
		
		// Cannonbolt.
		"sfx_cannonbolt_roll_jump_00",
		
		// Overflow.
		"sfx_overflow_shoot_water_short_00",
		"sfx_overflow_shoot_water_short_01",
		"sfx_overflow_splash_00",
		
		// Ben.
		"vo_ben_win_haaa_00",
		"vo_ben_woohoo_00",
		"vo_ben_cave_land_heavy_00",
		"vo_ben_land_heavy_00",
		"vo_ben_jump_00",
		"vo_ben_cave_fall_00",
		"vo_ben_hurt_00",
		
		// Land.
		"sfx_landsoft_gravel_01",
		"sfx_landsoft_wood_01",
		"sfx_landsoft_concrete_01",
		"sfx_cannonbolt_land_00",
		
		// Run.
		"sfx_run_gravel",
		"sfx_run_wood",
		"sfx_run_concrete",
		
		// Doors.
		"sfx_door_open",
		"sfx_door_openlevelend",
		
		// Stars.
		"sfx_star_award_01",
		"sfx_star_award_02",
		"sfx_star_award_03",
		
		// Spline.
		"sfx_draw_start",
		"sfx_draw_loop",
		"sfx_draw_stop",
		
		// Walls.
		"sfx_floor_crush",
		"sfx_wall_crush",
		
		// Pickups.
		"sfx_pickup",
		"sfx_omnitrix_transform_00",
		"sfx_omnitrix_transform_back_00",
		
		// Enemy.
		"sfx_stinkfly_gasattack_01"
	];
	var music = [
		// Music.
		"chapter1_complete01_40pc_vol",
		"chapter1_edit_40pc_vol",
		"chapter2_complete01_40pc_vol",
		"chapter2_edit_40pc_vol",
		"chapter3_complete01_40pc_vol",
		"chapter3_edit_40pc_vol",
		"generic_death_sting_01_40pc_vol",
		"main_menu_edit4_40pc" ];
	if (files.length)
	{
		this._assetManager.addFiles(files, window.og.gameDir + "assets/");
		this._assetManager.signalProgress.add(this.onLoadingProgress, this);
		this._assetManager.signalCompleted.addOnce(this.onLoadingCompleted, this);
		this._assetManager.load();

		/*this._preloader = new Preloader();
		this._screenManager.add(this._preloader);*/
		this._preloader = new CNPreloaderScreen();
        this._screenManager.add(this._preloader);

		p3.AudioManager.instance.addSounds(sounds, [".mp3", ".ogg"], window.og.gameDir + "assets/audio/");
		p3.AudioManager.instance.addSounds(music, [".mp3", ".ogg"], window.og.gameDir + "assets/music/");
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
	Common.keyboard.update();

	if (Common.DEBUG_PAINT_MODE > 0)
	{
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
	//this._preloader.loadedPercentage = event.progress;
	this._preloader.loaded = event.progress / 100.0;
};

/**
 */
Main.prototype.onLoadingCompleted = function()
{
    var that = this;
	
	PIXI.loader.add( 'char_overflow', "assets/spine/" + that._scale + "char_overflow.json" );
	PIXI.loader.add( 'char_fourarms', "assets/spine/" + that._scale + "char_fourarms.json" );
	PIXI.loader.add( 'char_upgrade', "assets/spine/" + that._scale + "char_upgrade.json" );
	PIXI.loader.add( 'char_cannonbolt', "assets/spine/" + that._scale + "char_cannonbolt.json" );	
	PIXI.loader.add( 'char_ben', "assets/spine/" + that._scale + "char_ben.json" );
	PIXI.loader.add( 'char_enemy', "assets/spine/" + that._scale + "char_enemy.json" );
	PIXI.loader.add( 'char_boss', "assets/spine/" + that._scale + "char_boss.json" );
	PIXI.loader.load( 
		function( loader, resources )
		{
			Common.characterAnimationData.char_overflow = resources.char_overflow.spineData;
			Common.characterAnimationData.char_fourarms = resources.char_fourarms.spineData;
			Common.characterAnimationData.char_upgrade = resources.char_upgrade.spineData;
			Common.characterAnimationData.char_cannonbolt = resources.char_cannonbolt.spineData;			
			Common.characterAnimationData.char_ben = resources.char_ben.spineData;
			Common.characterAnimationData.char_enemy = resources.char_enemy.spineData;
			Common.characterAnimationData.char_boss = resources.char_boss.spineData;

			//that._preloader.loadedPercentage = 100.0;
			that._preloader.loaded = 1.0;
			//that._preloader.animateOut( function() { this.startGame(); }, that );
			that._preloader.animateOut( 
				function() 
				{ 
					this._coolWaitScreen = new CoolWaitScreen( 2.0 );
					this._coolWaitScreen.signals.onWaitTimeCompleted.add( this.onWaitTimeCompleted, that );
					this._screenManager.add( this._coolWaitScreen );
				}, 
				that );

			that._preloader = null;

			that._assetManager.signalProgress.removeAll();
			that._assetManager.signalCompleted.removeAll();
		} );
};

Main.prototype.onWaitTimeCompleted = function()
{
	this._coolWaitScreen.animateOut( function() { this.startGame(); }, this );
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


},{"./Application":1,"./Common":2,"./Keyboard":3,"./lib/SceneManager":36,"./screens/CNPreloaderScreen":41,"./screens/CoolWaitScreen":42}],5:[function(require,module,exports){
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
	this.SAVE_NAME = "customer_focus";
	this.SAVE_VERSION = "0.0.0";
	this.SAVE_SEED = "y5k0Eo6R177mUkb";

	/**
	 * @type {Boolean}
	 */
	this.hasViewedInstructions = false;
	this.hasSeenIntro          = false;
	this.email                 = "";	
	this.arrLevelResult = [ 
			[ {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0} ], 
			[ {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0} ],  
			[ {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0}, {score:0, stars:0} ]
		];

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
	this.email                 = data.email;
	this.highscore             = parseInt(data.highscore);
	//this.stars				   = data.stars;
	if ( data.arrLevelResult != null )
		this.arrLevelResult  = data.arrLevelResult;

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
	data.email = this.email;
	data.highscore = this.highscore;
	//data.stars = this.stars;
	data.arrLevelResult = this.arrLevelResult;

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
},{"./Common":2}],6:[function(require,module,exports){
var Common = require( "../Common" );
var GameObject = require( "./GameObject" );
var Global = require( "../general/Global" );
var Transformation = require( "./Transformation" );
var OverflowTransformation = require( "./OverflowTransformation" );

/**
 * @constructor
 */
function Avatar( room )
{
	// Parent initialization.
	GameObject.call( this, "avatar" );
	
	
	// Constants.
	this.SHARED_ANIMATION_IDS =
	[
		'run_level',
		'jump',
		'idle',
		'fall',
		'fall_to_land',
		'land_to_run',
		'die'
	];
	this.RUN_SPEED = 105;
	
	
	// Attributes.
	this.room = room;
	
	this._assetManager = p3.AssetManager.instance;
	
	this.stepCount = 0;
	this.runSpeed          = this.RUN_SPEED;  // px/s
	this.jumpTime          = 0.3; // s
	this.jumpHeight        = 40;   // px
	this.jumpSpeed         = (2 * this.jumpHeight) / this.jumpTime; // px/s
	this.gravity           = this.jumpSpeed/this.jumpTime;          // px/s^2
	this.maxVerticalSpeed  = this.gravity;                        // px/s
	this.velocity          = new PIXI.Point(0,0);
	this.transformation    = null;

	this.direction         = 1;
	this.maxClimbableAngle = 65;

	this.isLanding   = false;
	this.landTime    = 0;
	this.landTimeMax = 0.8;
	this.landSpeed   = this.maxVerticalSpeed * 0.65;

	this.spineData = Common.characterAnimationData.char_ben;
	this.currentAnimation = "";
	this.spineSpeed = 1;
	
	this._isPlayingStepsSfx = false;
	this._isFallSfx = false;

	this.spline     = null; // The spline the character is currently standing on
	this.collisions =
	{
		top          : false,
		bottom       : true,
		left         : false,
		right        : false,
		bottomBefore : false
	}
	
	
	// Signals.
	this.signals.onGameOver = new signals.Signal();
}
module.exports = Avatar;
Avatar.prototype = Object.create(GameObject.prototype);
Avatar.prototype.constructor = Avatar;

Avatar.prototype.init = function()
{
	// Spawn position
	var startDoorId = 2 * this.room.level.currentRoomIndex + 1;
	this.x = (this.room.tiles.informations[ startDoorId ][0].x + 0.5) * this.room.tileSize;
	this.y = (this.room.tiles.informations[ startDoorId ][0].y + 1) * this.room.tileSize;
	if(this.x > this.room.roomWidth/2) this.direction = -1;

	// Spine
	this.spine = new PIXI.spine.Spine( this.spineData );
	this.spine.skeleton.setToSetupPose();
	this.spine.skeleton.setSkin( null );
	this.spine.skeleton.setSkinByName( "default" );
	this.spine.autoUpdate = false;
	this._spineContainer = new PIXI.Container();
	this._spineContainer.scale = new PIXI.Point( 0.35, 0.35 );
	this._spineContainer.x = 0;
	this._spineContainer.y = 3;
	this._spineContainer.addChild( this.spine );
	this.addChild( this._spineContainer );
	this.setAnimation( 'idle', true );
	this.spine.update(p3.Timestep.deltaTime * this.spineSpeed);

	this.setSpineDataMix( this.SHARED_ANIMATION_IDS );

	// Collider
	this.collisionRect = new PIXI.Rectangle( -10, -40, 20, 40 );
}

Avatar.prototype.setSpineDataMix = function( arrAnimationId )
{
	for ( var i = 0; i < arrAnimationId.length; i++ )
	{
		for ( var j = 0; j < arrAnimationId.length; j++ )
		{
			if ( i == j ) continue;

			var time = 0.1;

			if ( arrAnimationId[ i ] == 'fall_to_land' || arrAnimationId[ i ] == 'land_to_run' )
				time = 0;

			this.spine.stateData.setMixByName( arrAnimationId[ i ], arrAnimationId[ j ], time );
        }
    }
}

Avatar.prototype.updateMovement = function()
{
	// Spine update
	this.spine.update( p3.Timestep.deltaTime * this.spineSpeed );

	if ( Math.sign( this.velocity.x ) != 0 )
	{
		this._spineContainer.x = Math.abs( this._spineContainer.x ) * Math.sign( this.velocity.x ) * -1;
		this._spineContainer.scale.x = Math.abs( this._spineContainer.scale.x ) * Math.sign( this.velocity.x );
	}

	// Update velocity
	this.velocity.x = this.direction * this.runSpeed;
	this.velocity.y += this.gravity * p3.Timestep.deltaTime;
	this.velocity.y = Math.min(this.velocity.y, this.maxVerticalSpeed);

	// Debug input
	// if(Common.keyboard.getKeyPressed(Common.keyboard.KEY_A))
		// this.velocity.x = -this.runSpeed;
	// else if(Common.keyboard.getKeyPressed(Common.keyboard.KEY_D))
		// this.velocity.x = +this.runSpeed;
	// else
		// this.velocity.x = 0;

	// if(Common.keyboard.getKeyPressed(Common.keyboard.KEY_W) && this.collisions.bottom && !this.isLanding)
		// this.jump();

	// Landing, ignore movement during the animation
	if ( this.isLanding )
	{
		this.landTime += p3.Timestep.deltaTime;

		if ( this.landTime >= this.landTimeMax )
		{
			this.isLanding = false;
			
			this.setAnimation(["land_to_run", "run_level"], true);
		}
		else
			this.velocity.x = 0;
	}

	// Calculate frame movement
	var movement = new PIXI.Point
	(
		this.velocity.x * p3.Timestep.deltaTime,
		this.velocity.y * p3.Timestep.deltaTime
	);

	// Reset collisions
	this.collisions.bottomBefore = this.collisions.bottom;
	this.collisions.top          = false;
	this.collisions.bottom       = false;
	this.collisions.left         = false;
	this.collisions.right        = false;

	var spline = null;

	// Horizontal collsion: splines
	if ( movement.x != 0 ) 
	{
		// Player horizontal movement rays
		if ( movement.x > 0 )
			var rayOrigins = this.getRightRayOrigins();
		else
			var rayOrigins = this.getLeftRayOrigins();

		var ray = new PIXI.Point(movement.x + this.skinWidth * Math.sign(this.velocity.x), 0);

		for(var r = 0; r < rayOrigins.length; r++)
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[r];
			var avatarP2 = new PIXI.Point(avatarP1.x + ray.x, avatarP1.y + ray.y);

			for(var i = 0; i < this.room.splineLayer.splines.length; i++)
			{
				for(var p = 0; p < this.room.splineLayer.splines[i].points.length-1; p++)
				{
					// Segment vertices
					var segmentP1 = this.room.splineLayer.splines[i].points[p];
					var segmentP2 = this.room.splineLayer.splines[i].points[p+1];

					// Line-line collision detection
					var intersection = this.lineLineCollision(avatarP1, avatarP2, segmentP1, segmentP2);

					if(intersection )
					{
						// Calculate the angle of the segment. The vector points right
						//     -90
						//  45    -45
						// 0    x    0
						// -45     45
						//     -90
						if(segmentP2.x > segmentP1.x)
							var segmentAngle = Math.atan2(segmentP2.y - segmentP1.y, segmentP2.x - segmentP1.x) * PIXI.RAD_TO_DEG;
						else
							var segmentAngle = Math.atan2(segmentP1.y - segmentP2.y, segmentP1.x - segmentP2.x) * PIXI.RAD_TO_DEG;

						// Find the distance between the collider and the collision point
						var distance =  intersection.x - avatarP1.x - this.skinWidth * Math.sign(this.velocity.x);

						// Segment too inclined, cannot climb
						if(Math.abs(segmentAngle) > this.maxClimbableAngle)
						{
							this.collisions.right = Math.sign(this.velocity.x) ==  1;
							this.collisions.left  = Math.sign(this.velocity.x) == -1;
							movement.x = distance;

							// Decrease the length of future raycasts
							avatarP2.x -= ray.x;
							ray.x = distance + this.skinWidth * Math.sign(this.velocity.x);
							avatarP2.x += ray.x;
						}
						// Ignore slopes pointing the opposite direction
						else if(Math.sign(segmentAngle) == Math.sign(this.velocity.x))
							continue;
						else if ( this.currentAnimation != "jump"  ) // Added the "jump" condition so the jump caused by isCollisionToleranceJump is not cancelled when Ben is walking along a strong slope.
						{
							// Use only the lowest ray for climbing slopes
							if(r != rayOrigins.length -1) continue;

							// Climb segment
							this.collisions.bottom = true;
							var q = ray.x - this.skinWidth * Math.sign(this.velocity.x);
							movement.x = Math.cos(segmentAngle * PIXI.DEG_TO_RAD) * q;
							movement.y = Math.sin(segmentAngle * PIXI.DEG_TO_RAD) * q;

							// Save a reference of the current spline
							spline = this.room.splineLayer.splines[i];
						}
					}
				}
			}
		}
	}

	// Vertical collisions: splines
	if(movement.y > 0)
	{
		// Player vertical movement rays
		var rayOrigins = this.getBottomRayOrigins();
		var ray = new PIXI.Point(0, movement.y + this.skinWidth * Math.sign(this.velocity.y));

		for(var r = 0; r < rayOrigins.length; r++)
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[r];
			avatarP1.x += movement.x;
			var avatarP2 = new PIXI.Point(avatarP1.x + ray.x, avatarP1.y + ray.y);

			for(var i = 0; i < this.room.splineLayer.splines.length; i++)
			{
				for(var p = 0; p < this.room.splineLayer.splines[i].points.length-1; p++)
				{
					// Segment vertices
					var segmentP1 = this.room.splineLayer.splines[i].points[p];
					var segmentP2 = this.room.splineLayer.splines[i].points[p+1];

					// Line-line collision detection
					var intersection = this.lineLineCollision(avatarP1, avatarP2, segmentP1, segmentP2);

					if(intersection)
					{
						// Calculate the angle of the segment
						if(segmentP2.x > segmentP1.x)
							var segmentAngle = Math.atan2(segmentP2.y - segmentP1.y, segmentP2.x - segmentP1.x) * PIXI.RAD_TO_DEG;
						else
							var segmentAngle = Math.atan2(segmentP1.y - segmentP2.y, segmentP1.x - segmentP2.x) * PIXI.RAD_TO_DEG;

						// Find the distance between the collider and the collision point
						var distance = intersection.y - avatarP1.y - this.skinWidth * Math.sign(this.velocity.y);

						// Collision bottom						
						this.collisions.bottom = true;
						movement.y = distance;

						// Decrease the length of future raycasts
						avatarP2.y -= ray.y;
						ray.y = distance + this.skinWidth * Math.sign(this.velocity.y);
						avatarP2.y += ray.y;

						// Save a reference of the current spline
						spline = this.room.splineLayer.splines[i];
					}
				}
			}
		}
	}

	// Stick to the previous spline when descending slopes and find if there are any other suitables spines closest
	var otherSpline = null;

	if(!!this.spline)
	{
		var distanceCurrentSpline = Number.MAX_VALUE;
		var distanceOtherSplines  = Number.MAX_VALUE;

		// I cast the ray from the top of the collider so I can see segments above the current position
		var rayLength  = 10;
		var ray        = new PIXI.Point(0, this.collisionRect.height - this.skinWidth + rayLength);
		var rayOrigins = this.getTopRayOrigins();

		for(var r = 0; r < rayOrigins.length; r++)
		{
			var avatarP1 = rayOrigins[r];
			avatarP1.x += movement.x;
			var avatarP2 = new PIXI.Point(avatarP1.x + ray.x, avatarP1.y + ray.y);

			for(var i = 0; i < this.room.splineLayer.splines.length; i++)
			{
				// Segment vertices
				for(var p = 0; p < this.room.splineLayer.splines[i].points.length-1; p++)
				{
					var segmentP1 = this.room.splineLayer.splines[i].points[p];
					var segmentP2 = this.room.splineLayer.splines[i].points[p+1];

					// Line-line collision detection
					var intersection = this.lineLineCollision(avatarP1, avatarP2, segmentP1, segmentP2);

					if(intersection)
					{
						// Calculate the angle of the segment
						if(segmentP2.x > segmentP1.x)
							var segmentAngle = Math.atan2(segmentP2.y - segmentP1.y, segmentP2.x - segmentP1.x) * PIXI.RAD_TO_DEG;
						else
							var segmentAngle = Math.atan2(segmentP1.y - segmentP2.y, segmentP1.x - segmentP2.x) * PIXI.RAD_TO_DEG;

						// Find the distance between the collider and the collision point
						var distance = intersection.y - avatarP1.y  - (this.collisionRect.height - this.skinWidth);

						// Skip too much inclined segments
						if(Math.abs(segmentAngle) > this.maxClimbableAngle) continue;

						if(this.spline != this.room.splineLayer.splines[i])
						{
							 // Skip segments inclined in the opposite direction that are above the anchor point
							 if(Math.sign(segmentAngle) != -Math.sign(this.velocity.x) && (Math.abs(segmentAngle) > 45 || distance < 0)) continue;

							 // Snap to segments below or just a bit above the anchor point
							 if(distance < -5)  continue;

							 if(distance < distanceOtherSplines)
							 {
								distanceOtherSplines = distance;
								otherSpline = this.room.splineLayer.splines[i];
							 }
						 }
						 else
						 {
							 if(distance < distanceCurrentSpline && distance > -5)
							 {
								distanceCurrentSpline = distance;
							 }
						 }
					}
				}
			}
		}

		if(distanceOtherSplines > distanceCurrentSpline)
		{
			this.collisions.bottom = true;
			movement.y = distanceCurrentSpline;

			spline = this.spline;
		}
		else if(otherSpline != null)
		{
			this.collisions.bottom = true;
			movement.y = distanceOtherSplines;

			spline = otherSpline;
		}
	}

	
	// Update current transformation.
	if ( this.transformation != null && this.currentAnimation != "die" )	
		this.transformation.update();
	

	// Blocks horizontal collisions
	if ( movement.x != 0 )
	{
		if ( movement.x > 0 )
			var rayOrigins = this.getRightRayOrigins();
		else
			var rayOrigins = this.getLeftRayOrigins();

		var ray = new PIXI.Point(movement.x + this.skinWidth * Math.sign(movement.x), 0);

		var isCollisionToleranceCheck = false;
		var isCollisionToleranceJump = true;
		for ( var r = 0; r < rayOrigins.length && movement.x != 0; r++ )
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[r];
			// avatarP1.y += movement.y;
			var avatarP2 = new PIXI.Point(avatarP1.x + ray.x, avatarP1.y + ray.y);

			for ( var b = 0; b < this.room.blocks.length; b++ )
			{
				if ( this.room.blocks[b].isGarbage ) continue;
				if ( movement.x > 0 && !this.room.blocks[b].config.collisions.left ) continue;
				if ( movement.x < 0 && !this.room.blocks[b].config.collisions.right ) continue;

				// Segment vertices
				var blockP1 = new PIXI.Point( this.room.blocks[b].config.x + (movement.x < 0 ? this.room.blocks[b].config.width : 0), this.room.blocks[b].config.y );
				var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this.room.blocks[b].config.height );

				// Line-line collision detection
				var intersection = this.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
			
				// Platform end collision tolerance.	
				var isCollisionTolerance = false;
				if ( intersection && this.spline != null 
					&& ( movement.x < 0 && !this.collisions.right || movement.x > 0 && !this.collisions.left )
					&& this.currentAnimation != "melt_move" )
				{
					// Side cracked and solid platform blocks.
					if ( this.room.blocks[b].tileId == 19 || this.room.blocks[b].tileId == 16
						|| this.room.blocks[b].tileId == 32 || this.room.blocks[b].tileId == 35 )
					{		
						if ( !isCollisionToleranceCheck ) isCollisionToleranceCheck = true;
					
						if ( this.collisionRect.height - ( avatarP1.y - ( this.y + this.collisionRect.y ) ) <= /*this.collisionRect.height*/ 40 * .34 )	// Using Ben's collision rect height as base. The higher the percentage the higher the tolerance.				
							isCollisionTolerance = true;						
						
						isCollisionToleranceJump = isCollisionToleranceJump && isCollisionTolerance;
					}							
				}								
				
				if ( intersection && !isCollisionTolerance )
				{							
					var distance =  intersection.x - avatarP1.x - this.skinWidth * Math.sign(movement.x);

					if ( movement.x > 0 )
						this.collisions.right = true;
					else
						this.collisions.left = true;

					// Reduce vertical speed if climbing a slope
					if ( this.collisions.bottom )
						movement.y *= distance / movement.x;

					movement.x = distance;

					// Avoid floating point errors
					if ( Math.closeEnough( movement.x, 0 ) )
					{					
						movement.x = 0;
						
						// Exit the loop.
						break;
					}

					// Decrease the length of future raycasts
					avatarP2.x -= ray.x;
					ray.x = distance + this.skinWidth * Math.sign(movement.x);
					avatarP2.x += ray.x;
				}
			}
		}	
			
		// Force a jump so the player can't use this tolerance to move downward through blocks.		
		if ( isCollisionToleranceCheck && isCollisionToleranceJump )
			this.jump();
	}

	// Blocks vertical collisions
	if ( movement.y != 0 )
	{
		if ( movement.y > 0 )
			var rayOrigins = this.getBottomRayOrigins();
		else
			var rayOrigins = this.getTopRayOrigins();

		var ray = new PIXI.Point(0, movement.y + this.skinWidth * Math.sign(movement.y)); // movement and not velocity because when climbing a spline velocity is positive (because gravity) but movement has changed to be negative

		for ( var r = 0; r < rayOrigins.length && movement.y != 0; r++ )
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[r];
			avatarP1.x += movement.x;
			var avatarP2 = new PIXI.Point(avatarP1.x + ray.x, avatarP1.y + ray.y);

			for(var b = 0; b < this.room.blocks.length; b++)
			{
				if ( this.room.blocks[b].isGarbage ) continue;
				if(movement.y > 0 && !this.room.blocks[b].config.collisions.top) continue;
				if(movement.y < 0 && !this.room.blocks[b].config.collisions.bottom) continue;

				// Segment vertices
				var blockP1  = new PIXI.Point(this.room.blocks[b].config.x, this.room.blocks[b].config.y + (movement.y < 0 ? this.room.blocks[b].config.height : 0));
				var blockP2  = new PIXI.Point(blockP1.x + this.room.blocks[b].config.width, blockP1.y);

				// Line-line collision detection
				var intersection = this.lineLineCollision(avatarP1, avatarP2, blockP1, blockP2);

				if(intersection)
				{
					var distance =  intersection.y - avatarP1.y - this.skinWidth * Math.sign(movement.y);

					// Ground
					if(movement.y > 0)
					{
						this.collisions.bottom = true;
						movement.y = distance;
						spline = null;
					}
					// Ceiling
					else
					{
						this.collisions.top = true;
						movement.y = distance;

						// Was climbing a spline, can't move any further
						if(this.collisions.bottom)
						{
							movement.x = 0;
							movement.y = 0;
						}
					}

					// Avoid floating point errors
					if(Math.closeEnough(movement.y, 0))
					{
						movement.y = 0;
						break;
					}

					// Decrease the length of future raycasts
					avatarP2.y -= ray.y;
					ray.y = distance + this.skinWidth * Math.sign(movement.y);
					avatarP2.y += ray.y;
				}
			}
		}
	}

	// Ceiling collisions
	/*if ( this.y + movement.y <= this.collisionRect.height )
	{
		this.collisions.top = true;
		movement.x = 0;
		movement.y = 0;
	}*/

	// If trapped, stop moving
	if ( this.collisions.bottom && this.collisions.top ) 
		movement.y = 0;

	// Move the character
	if ( this.currentAnimation != "melt_down" && this.currentAnimation != "melt_up"
		&& ( this.currentAnimation != "die" || this.currentAnimation == "die" && !this.collisions.bottom )
		&& this.currentAnimation != "idle" )
		this.x += movement.x;
	this.y += movement.y;
	this.spline = spline;
}


Avatar.prototype.update = function()
{
	//this.drawCollision();
	
	var isGameOver = false;
	var isUnderWaterfall = false;
	
	
	// Movement.
	this.updateMovement();
	
	
	// Step count.
	if ( this.spline == null && this.collisions.bottom )
		this.stepCount += Math.abs( p3.Timestep.deltaTime * Global.GAME_STEP_BASE_SPEED );
	
	
	// Collisions.
	// Door
	var startDoorId = 2 * this.room.level.currentRoomIndex + 1;
	for ( var i = 0; i < this.room.objects.doors.length; i++ )
	{
		var door = this.room.objects.doors[ i ];
		if ( door.id != startDoorId && this.collision( door ) )
		{
			door.open();
			this.room.endRoom( door );
			
			// VO.
			//if ( this.transformation == null )
				p3.AudioManager.instance.playVO( [ "vo_ben_win_haaa_00", "vo_ben_woohoo_00" ] );
			
			return;
		}
	}

	// Coins
	for ( var i = 0; i < this.room.objects.coins.length; i++ )
	{
		var coin = this.room.objects.coins[ i ];
		if ( coin.taken ) continue;

		if ( this.collision( coin ) )
		{			
			coin.pickup();
			
			return;
		}
	}
	
	// Powerups
	for ( var i = 0; i < this.room.objects.powerups.length; i++ )
	{
		var powerupAux = this.room.objects.powerups[ i ];
		if ( powerupAux.taken ) continue;

		if ( this.collision( powerupAux ) )
		{			
			// Apply powerup's effect on Ben.
			powerupAux.pickup();
			
			return;
		}
	}
	
	// Enemies
	for ( var i = 0; i < this.room.objects.dangers.length; i++ )
	{
		var dangerAux = this.room.objects.dangers[ i ];
		
		var isGenericCollision = true;
		if ( dangerAux.targetCollisionRect != null && this.rectRectCollision(
			{
				x      : dangerAux.x + dangerAux.targetCollisionRect.x,
				y      : dangerAux.y + dangerAux.targetCollisionRect.y,
				width  : dangerAux.targetCollisionRect.width,
				height : dangerAux.targetCollisionRect.height
			},
			{
				x      : this.x + this.collisionRect.x,
				y      : this.y + this.collisionRect.y,
				width  : this.collisionRect.width,
				height : this.collisionRect.height
			} ) )
		{
			if ( this.transformation != null )
				isGenericCollision = this.transformation.onEnemyCollision( dangerAux );				
		}

		if ( isGenericCollision && this.collision( dangerAux ) )
		{			
			this.setAnimation( "die", false );
			if ( this.spine.state.tracks[ 1 ] != null )
				this.spine.state.clearTrack( 1 );
			p3.AudioManager.instance.playSound( "vo_ben_hurt_00" );
			
			isGameOver = true;
				
			break;
		}
	}
				
	// Waterfall
	for ( var i = 0; i < this.room.objects.waterfalls.length; i++ )
	{
		var waterfall = this.room.objects.waterfalls[ i ];
		if ( this.collision( waterfall ) )
		{			
			isUnderWaterfall = true;
		
			if ( this.transformation == null 
				|| ( this.transformation != null && this.transformation.onWaterfallCollision() ) )
			{
				if ( this.spine.state.tracks[ 1 ] != null )
					this.spine.state.clearTrack( 1 );
				this.setAnimation( "die", false );
				p3.AudioManager.instance.playSound( "vo_ben_hurt_00" );
				
				isGameOver = true;
			
				break;
			}
		}
	}	

		
	// Animations.
	if ( this.currentAnimation != "die" )
	{
		// Jump automatically when the characters has no more ground under it
		if ( !this.collisions.bottom && this.collisions.bottomBefore )
		{
			if ( this.currentAnimation != "melt_down" && this.currentAnimation != "melt_up" && this.currentAnimation != "melt_move" )
				this.jump();
		}
		// Land
		else if ( !this.collisions.bottomBefore && this.collisions.bottom && !this.collisions.top && this.velocity.y >= this.landSpeed )
			this.land();
		// Fall
		else if ( !this.collisions.bottom && !this.collisions.bottomBefore && this.velocity.y > 0 )
		{
			if ( this.currentAnimation != "roll"
				&& ( this.currentAnimation != "punch_up" || this.currentAnimation == "punch_up" && this.spine.state.getCurrent( 0 ) == null )
				&& this.currentAnimation != "melt_down" && this.currentAnimation != "melt_up" && this.currentAnimation != "melt_move" )
				this.setAnimation( "fall", false );
		}
		// Run, Idle
		else if ( this.collisions.bottom && !this.isLanding )
		{
			if ( this.velocity.x != 0 )
			{		
				// Don't override current transformation's animations.
				if ( ( !isUnderWaterfall || this.currentAnimation != "waterfall" )
					&& this.currentAnimation != "melt_move" && this.currentAnimation != "melt_down" && this.currentAnimation != "melt_up"
					&& ( this.currentAnimation != "punch_down" || this.currentAnimation == "punch_down" && this.spine.state.getCurrent( 0 ) == null ) )
					this.setAnimation( "run_level", true );
			}
			else
				this.setAnimation( "idle", true );
		}
	}
	
	// Sfx.
	// Landing.
	/*if ( this.spline == null )
	{*/
		if ( !this.collisions.bottomBefore && this.collisions.bottom && !this.collisions.top )
		{
			if ( this.velocity.y < this.landSpeed )
			{
				// Soft landing.
				/*if ( this.room._data.textures.platforms == "Tilesheet_02" )
					p3.AudioManager.instance.playSound( "sfx_landsoft_wood_01" );
				else if ( this.room._data.textures.platforms == "Tilesheet_03" )
					p3.AudioManager.instance.playSound( "sfx_landsoft_concrete_01" );
				else if ( this.room._data.textures.platforms == "Tilesheet_00" )*/
					p3.AudioManager.instance.playSound( "sfx_landsoft_gravel_01" );
			}
			else
				// Heavy landing.
				p3.AudioManager.instance.playSound( "sfx_cannonbolt_land_00" );
		}
	//}
	
	// Running.
	if ( !this.isLanding && /*this.spline == null &&*/ this.currentAnimation == "run_level" && !this._isPlayingStepsSfx )
	{
		this._isPlayingStepsSfx = true;
		
		/*if ( this.room._data.textures.platforms == "Tilesheet_02" )
			p3.AudioManager.instance.playSound( "sfx_run_wood", { loop:true } );
		else if ( this.room._data.textures.platforms == "Tilesheet_03" )
			p3.AudioManager.instance.playSound( "sfx_run_concrete", { loop:true } );
		else if ( this.room._data.textures.platforms == "Tilesheet_00" )*/
			p3.AudioManager.instance.playSound( "sfx_run_gravel", { loop:true, volume:.35 } );
	}
	else if ( ( this.currentAnimation != "run_level" /*|| this.spline != null*/ ) && this._isPlayingStepsSfx )
		this.stopRunSfx();
	

	// Swap direction if touching something on the sides or on top
	if ( this.collisions.left || this.collisions.right || ( this.collisions.top && this.collisions.bottom ) )
		this.switchDirection();
		
	// Reset gravity when touching ground or a ceiling
	if ( this.collisions.top || this.collisions.bottom )
		this.velocity.y = 0;		
		

	// Game Over.
	// Sfx.
	if ( !this._isFallSfx && this.y > this.room.roomHeight /*&& this.transformation == null*/ )
	{
		this._isFallSfx = true;
		
		p3.AudioManager.instance.playSound( "vo_ben_cave_fall_00" );	
	}
	
	if ( this.y > this.room.roomHeight + 250 )
		isGameOver = true;		
	
	if ( isGameOver )
	{
		// Finish pending tasks.
		p3.AudioManager.instance.stopSound( "sfx_draw_loop" );
		this.stopRunSfx();
	
		//this.room.level.restart();
		this.signals.onGameOver.dispatch();
	}
}

Avatar.prototype.stopRunSfx = function()
{
	this._isPlayingStepsSfx = false;
	
	/*if ( this.room._data.textures.platforms == "Tilesheet_02" )
		p3.AudioManager.instance.stopSound( "sfx_run_wood" );
	else if ( this.room._data.textures.platforms == "Tilesheet_03" )
		p3.AudioManager.instance.stopSound( "sfx_run_concrete" );
	else if ( this.room._data.textures.platforms == "Tilesheet_00" )*/
		p3.AudioManager.instance.stopSound( "sfx_run_gravel" );
}

/**
 */
Avatar.prototype.switchDirection = function()
{
	this.velocity.x = 0;
	this.direction *= -1;
}

/**
 */
Avatar.prototype.jump = function()
{
	this.velocity.y = -this.jumpSpeed;
	this.collisions.bottom = false;
	this.spline = false;

	this.setAnimation("jump", false);
	
	// Sfx.
	if ( this.transformation == null && p3.Utils.randomInt( 0, 2 ) == 0 )
		p3.AudioManager.instance.playSound( "vo_ben_jump_00" );
	p3.AudioManager.instance.playSound( [ "sfx_4arms_swoosh_00", "sfx_4arms_swoosh_01" ] );
}

/**
 */
Avatar.prototype.land = function()
{
	//console.log( "land" );
	this.isLanding = true;
	this.landTime  = 0;

	this.setAnimation(["fall_to_land", /*"land_to_run", "run_level"*/], false);

	this.room.level.shake(0.25, new PIXI.Point(4,6));
	
	// Sfx.
	if ( this.transformation == null && p3.Utils.randomInt( 0, 2 ) == 0 )
		p3.AudioManager.instance.playSound( [ "vo_ben_cave_land_heavy_00", "vo_ben_land_heavy_00" ] );
}

/**
 */
Avatar.prototype.setAnimation = function( id, loop )
{
	if ( id == this.currentAnimation ) 
		return;

	this.spine.skeleton.setToSetupPose(); // TODO: To be able to replace the "roll" animation with the "run_level" one. Problems ??? 
	
	if ( Array.isArray( id ) )
	{
		//this.spine.skeleton.setToSetupPose();
		this.spine.state.setAnimationByName( 0, id[0], false );

		for ( var i = 1; i < id.length; i++ )
			this.spine.state.addAnimationByName( 0, id[i], loop && (i == (id.length-1)), 0 );
		this.currentAnimation = id[id.length-1];
	}
	else
	{
		this.spine.state.setAnimationByName(0, id, loop, 0);
		this.currentAnimation = id;
	}
}

/**
 */
Avatar.prototype.transform = function( transformation )
{
	if ( this.transformation != null && this.transformation.id == transformation.id )
	{
		this.transformation.resetTimer();
		
		return;
	}
		
	this.transformation = transformation;
	
	// Subscribe to event.
	if ( this.transformation != null )
		this.transformation.signals.onTransformationExpired.addOnce( this.onTransformationExpired, this );
		
	// Remove old spine.
	this._spineContainer.removeChild( this.spine );

	//console.log( this.transformation.id );
	
	// Create new spine.
	switch ( this.transformation.id )
	{
		case this.transformation.TRANSFORMATION_ID_OVERFLOW:
		{
			// TODO: Consider if there is a more efficient way of replacing the spine.

			this.spine = new PIXI.spine.Spine( Common.characterAnimationData.char_overflow );
			this._spineContainer.x = 0;
			this._spineContainer.y = -6;
			this._spineContainer.scale = new PIXI.Point( 0.3, 0.3 );
			
			this.setSpineDataMix( [
				'waterfall',
				'shoot',
				'run_level',
				'jump',
				'idle',
				'fall',
				'fall_to_land',
				'land_to_run',
				'die' ] );
			
			// Adjusted from normal Ben's collision rect.
			this.collisionRect = new PIXI.Rectangle( -10, -80, 20, 80 );			
		
			break;
		}
		
		case this.transformation.TRANSFORMATION_ID_CANNONBOLT:
		{
			this.spine = new PIXI.spine.Spine( Common.characterAnimationData.char_cannonbolt );
			this._spineContainer.x = 0;
			this._spineContainer.y = -6;		
			this._spineContainer.scale = new PIXI.Point( 0.3, 0.3 );
			
			this.setSpineDataMix( this.SHARED_ANIMATION_IDS );
			
			// Adjusted from normal Ben's collision rect.
			this.collisionRect = new PIXI.Rectangle( -10, -80, 20, 80 );			
		
			break;
		}
		
		case this.transformation.TRANSFORMATION_ID_UPGRADE:
		{
			this.spine = new PIXI.spine.Spine( Common.characterAnimationData.char_upgrade );
			this._spineContainer.x = 0;
			this._spineContainer.y = 0;		
			this._spineContainer.scale = new PIXI.Point( 0.3, 0.3 );
			
			this.setSpineDataMix( [
				'melt_move',
				'melt_down',
				'melt_up',
				'shoot',
				'run_level',
				'jump',
				'idle',
				'fall',
				'fall_to_land',
				'land_to_run',
				'die' ] );
		
			// Adjusted from normal Ben's collision rect.
			this.collisionRect = this.transformation.BIG_COLLISION_RECT;			
		
			break;
		}
		
		case this.transformation.TRANSFORMATION_ID_FOURARMS:
		{
			this.spine = new PIXI.spine.Spine( Common.characterAnimationData.char_fourarms );			
			this._spineContainer.x = 10 * Math.sign( this.velocity.x ) * -1;
			this._spineContainer.y = -6;		
			this._spineContainer.scale = new PIXI.Point( 0.3, 0.3 );
			
			this.setSpineDataMix( [
					'punch_down',
					'punch_up',
					'run_level',
					'jump',
					'idle',
					'fall',
					'fall_to_land',
					'land_to_run',
					'die' ] );
			
			// Adjusted from normal Ben's collision rect.
			this.collisionRect = new PIXI.Rectangle( -35, -80, 70, 80 );	

			// The new collision rect is bigger so it might go through a wall, ignoring the collision. Switch direction if the new collision rect intersects a wall.
			for ( var b = 0; b < this.room.blocks.length; b++ )
			{
				var blockAux = this.room.blocks[b];
			
				if ( blockAux.isGarbage ) continue;
				if ( this.direction > 0 && !blockAux.config.collisions.left ) continue;
				if ( this.direction < 0 && !blockAux.config.collisions.right ) continue;

				var isIntersection = this.rectRectCollision( 
					{
						x      : blockAux.x + blockAux.config.x,
						y      : blockAux.y + blockAux.config.y,
						width  : blockAux.config.width,
						height : blockAux.config.height
					},
					{
						x      : this.x + this.collisionRect.x,
						y      : this.y + this.collisionRect.y,
						width  : this.collisionRect.width,
						height : this.collisionRect.height
					} );
			
				if ( isIntersection )
				{
					this.switchDirection();
				
					break;						
				}								
			}
		
			break;
		}
	}
	
	this.spine.skeleton.setToSetupPose();
	this.spine.skeleton.setSkin( null );
	this.spine.skeleton.setSkinByName( "default" );
	this.spine.autoUpdate = false;
	
	this._spineContainer.addChild( this.spine );
	
	// Set initial animation.
	var animId = this.currentAnimation;
	this.currentAnimation = null;
	if ( !this.spine.spineData.findAnimation( animId ) )
		animId = "run_level";
	this.setAnimation( animId, true );
	
	// Update the spine before the game is paused, so the first frame of the animation is visible.
	this._spineContainer.scale.x = Math.abs( this._spineContainer.scale.x ) * Math.sign( this.direction );
	this.spine.update( p3.Timestep.deltaTime * this.spineSpeed );
}

/**
 */
Avatar.prototype.onTransformationExpired = function()
{
	// Sfx.
	p3.AudioManager.instance.playSound( "sfx_omnitrix_transform_back_00" );

	this.transformation = null;
	
	// Go back to normal Ben.
	this._spineContainer.removeChild( this.spine );

	// TODO: Consider if there is a more efficient way of replacing the spine.
	this.spine = new PIXI.spine.Spine( Common.characterAnimationData.char_ben );
	this.spine.skeleton.setToSetupPose();
	this.spine.skeleton.setSkin( null );
	this.spine.skeleton.setSkinByName( "default" );
	this._spineContainer.x = 0;
	this._spineContainer.y = 3;
	this.spine.autoUpdate = false;
	this._spineContainer.scale = new PIXI.Point( 0.35, 0.35 );
	
	this.setSpineDataMix( this.SHARED_ANIMATION_IDS );
	
	this._spineContainer.addChild( this.spine );
	var animId = this.currentAnimation;
	// Default animation when the current one is not supported by Ben's spine.
	if ( this.SHARED_ANIMATION_IDS.indexOf( animId ) < 0 )
		animId = "run_level";
	this.currentAnimation = null;
	this.setAnimation( animId, true );
	
	this.collisionRect = new PIXI.Rectangle( -10, -40, 20, 40 );
}


Math.EPSILON = 1e-6;

/**
 * Determines whether the two floating-point values f1 and f2 are close enough together that they can be considered equal.
 *
 * @param {number} f1
 * @param {number} f2
 * @returns {boolean}
 */
Math.closeEnough = function(f1, f2)
{
	return Math.abs((f1 - f2) / ((f2 == 0.0) ? 1.0 : f2)) < Math.EPSILON;
}


//===================================================
// GETTERS / SETTERS
//===================================================

Object.defineProperty(
	Avatar.prototype, 
	"spineContainer", 
	{ get: function() { return this._spineContainer; } } );
	
Object.defineProperty(
	Avatar.prototype, 
	"currentSpineAnimation", 
	{ get: function() { return this.spine.state.tracks[ 0 ].animation; } } );
},{"../Common":2,"../general/Global":31,"./GameObject":17,"./OverflowTransformation":21,"./Transformation":26}],7:[function(require,module,exports){
var Common    = require("../Common");
var GameObject = require("./GameObject");

/**
 * @constructor
 */
function Block( room, tileId, config )
{
	this.room   = room;
	this.tileId = tileId;

	this._assetManager = p3.AssetManager.instance;
	GameObject.call(this, "block");
	
	this.config = config;
}
module.exports = Block;
Block.prototype = Object.create(GameObject.prototype);
Block.prototype.constructor = Block;

Block.prototype.init = function()
{
	this.sprite = new PIXI.Sprite(Common.generatedTextures['whiteSquare']);
	this.sprite.width  = this.config.width;
	this.sprite.height = this.config.height;
	this.sprite.x = this.config.x;
	this.sprite.y = this.config.y;
	
	this.collisionRect = new PIXI.Rectangle(this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height);
	
	if(this.room.debug)
	{
		this.sprite.tint = 0xff0000;
		this.sprite.alpha = 0.25;
		this.addChild(this.sprite);
		
		this.drawCollision();
	}
}
},{"../Common":2,"./GameObject":17}],8:[function(require,module,exports){
var Common    = require( "../Common" );
var Transformation = require( "./Transformation" );
var BossShot = require( "./BossShot" );

var g_bossGun = null;

/**
 * @constructor
 */
function BossGun( boss, room )
{
	// Parent.
	Object.call( this );	
	
	
	// Constants.
	this.STATE_RELOADING = 0;
	this.STATE_SHOOTING = 1;
	this.RELOADING_TIME_RANGE = [ 4, 6 ];	
	
	
	// Attributes.
	this._currentReloadingTime = p3.Utils.randomInt( this.RELOADING_TIME_RANGE[ 0 ], this.RELOADING_TIME_RANGE[ 1 ] );
	this._reloadingTimer = 0;
	this._state = this.STATE_RELOADING;
	this._room = room;
	this._boss = boss;
	
	g_bossGun = this;
}
module.exports = BossGun;
BossGun.prototype = Object.create( Object.prototype );
BossGun.prototype.constructor = BossGun;


BossGun.prototype.update = function()
{	
	if ( this._state == this.STATE_RELOADING )
	{
		this._reloadingTimer += p3.Timestep.deltaTime; 
		if ( this._reloadingTimer > this._currentReloadingTime )
		{
			this._boss.spine.state.setAnimationByName( 1, "shoot", false );
			this._boss.spine.state.onEvent = 
				function( track, event ) 
				{
					if ( event.data.name == "shoot" )
						g_bossGun.shoot();
				};
		
			this._state = this.STATE_SHOOTING;
		}
	}
}

BossGun.prototype.shoot = function()
{
	// Sfx.
	//AudioManager.instance.playSound( [ "sfx_overflow_shoot_water_short_00", "sfx_overflow_shoot_water_short_01" ] );

	// Find shot origin.
	var bossDirection = Math.sign( this._boss.spineContainer.scale.x );							
	var shotOrigin = null;	
	if ( bossDirection > 0 )
	{
		shotOrigin = new PIXI.Point(
			this._boss.x + this._boss.collisionRect.x + this._boss.collisionRect.width,
			this._boss.y + this._boss.collisionRect.y + this._boss.skinWidth + this._boss.collisionRect.height * .5 );
	}
	else
	{
		shotOrigin = new PIXI.Point(
			this._boss.x + this._boss.collisionRect.x,
			this._boss.y + this._boss.collisionRect.y + this._boss.skinWidth + this._boss.collisionRect.height * .5 );
	}	

	// Shoot at enemy.							
	var bossShot = new BossShot( bossDirection, this._room );
	bossShot.init( shotOrigin.x, shotOrigin.y );
	
	this._room.objects.dangers.push( bossShot );
	this._room.addChild( bossShot );
	
	this._currentReloadingTime = p3.Utils.randomInt( this.RELOADING_TIME_RANGE[ 0 ], this.RELOADING_TIME_RANGE[ 1 ] );
	this._reloadingTimer = 0;
	this._state = this.STATE_RELOADING;
}
},{"../Common":2,"./BossShot":9,"./Transformation":26}],9:[function(require,module,exports){
var Common = require( "../Common" );
var GameObject = require( "./GameObject" );

/**
 * @constructor
 */
function BossShot( direction, room )
{
	GameObject.call( this, "BossShot" );
	
	this._assetManager = p3.AssetManager.instance;
	
	this._sprite = null;
	this._room = room;
	this._direction = direction;
	this._hSpeed = 250; // px/s
	this._collisions = {
			left         : false,
			right        : false
		};
}
module.exports = BossShot;
BossShot.prototype = Object.create( GameObject.prototype );
BossShot.prototype.constructor = BossShot;

BossShot.prototype.init = function( x, y )
{
	// Spawn position
	this.x = x;
	this.y = y;	

	// Sprite.
	this._sprite = new PIXI.Sprite( this._assetManager.getTexture( "projectile_stinkfly" ) );
	this._sprite.anchor = new PIXI.Point( 0.5, 0.5 );
	this.addChild( this._sprite );	
	this._sprite.scale.x = Math.abs( this._sprite.scale.x ) * this._direction;

	// Collider
	this.collisionRect = new PIXI.Rectangle( -this._sprite.width * 0.5, -this._sprite.height * 0.5, this._sprite.width, this._sprite.height );
	this.targetCollisionRect = null;
	//this.drawCollision();
}

BossShot.prototype.update = function()
{
	var dx = this._hSpeed * p3.Timestep.deltaTime * this._direction;

	// Reset collisions
	this._collisions.left         = false;
	this._collisions.right        = false;

	// Blocks horizontal collisions
	if ( dx != 0 )
	{
		if ( dx > 0 )
			var rayOrigins = this.getRightRayOrigins();
		else
			var rayOrigins = this.getLeftRayOrigins();

		var ray = new PIXI.Point( dx + this.skinWidth * Math.sign( dx ), 0 );
		for ( var r = 0; r < rayOrigins.length && dx != 0; r++ )
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[ r ];
			// avatarP1.y += movement.y;
			var avatarP2 = new PIXI.Point( avatarP1.x + ray.x, avatarP1.y + ray.y );

			for ( var b = 0; b < this._room.blocks.length; b++ )
			{
				if ( dx > 0 && !this._room.blocks[ b ].config.collisions.left ) continue;
				if ( dx < 0 && !this._room.blocks[ b ].config.collisions.right ) continue;

				// Segment vertices
				var blockP1 = new PIXI.Point( this._room.blocks[ b ].config.x + ( dx < 0 ? this._room.blocks[ b ].config.width : 0 ), this._room.blocks[ b ].config.y );
				var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this._room.blocks[ b ].config.height );

				// Line-line collision detection
				var intersection = this.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
				if ( intersection )
				{
					var distance =  intersection.x - avatarP1.x - this.skinWidth * Math.sign( dx );

					if ( dx > 0 )
						this._collisions.right = true;
					else
						this._collisions.left = true;

					dx = distance;

					// Avoid floating point errors
					if ( Math.closeEnough( dx, 0 ) )
					{
						dx = 0;
						break;
					}

					// Decrease the length of future raycasts
					avatarP2.x -= ray.x;
					ray.x = distance + this.skinWidth * Math.sign( dx );
					avatarP2.x += ray.x;
				}
			}
		}
	}
	
	// Destroy the shot.
	if ( this._collisions.right || this._collisions.left )
		this.isGarbage = true;
	if ( !this.isGarbage )
		this.x += dx;
}

Math.EPSILON = 1e-6;

/**
 * Determines whether the two floating-point values f1 and f2 are close enough together that they can be considered equal.
 *
 * @param {number} f1
 * @param {number} f2
 * @returns {boolean}
 */
Math.closeEnough = function(f1, f2)
{
	return Math.abs((f1 - f2) / ((f2 == 0.0) ? 1.0 : f2)) < Math.EPSILON;
}
},{"../Common":2,"./GameObject":17}],10:[function(require,module,exports){
var Common    = require( "../Common" );
var Powerup = require( "./Powerup" );
var CannonboltTransformation = require( "./CannonboltTransformation" );

//===================================================
// CONSTRUCTOR
//===================================================

function CannonboltPowerup( room )
{
	Powerup.call( this, "cannonbolt_powerup", "icon_cannonbolt", room );
}
module.exports = CannonboltPowerup;
CannonboltPowerup.prototype = Object.create( Powerup.prototype );
CannonboltPowerup.prototype.constructor = CannonboltPowerup;


//===================================================
// PUBLIC METHODS
//===================================================

CannonboltPowerup.prototype.pickup = function()
{
	if ( this.taken ) return;
	
	Powerup.prototype.pickup.call( this );
	
	this._room.level.setTransformation( new CannonboltTransformation( this._room ) );
}
},{"../Common":2,"./CannonboltTransformation":11,"./Powerup":23}],11:[function(require,module,exports){
var Common    = require( "../Common" );
var Transformation = require( "./Transformation" );
var ParticleSystem = require( "./ParticleSystem" );

/**
 * @constructor
 */
function CannonboltTransformation( room )
{
	Transformation.call( this, room );
	this._id = this.TRANSFORMATION_ID_CANNONBOLT;
	
	// Events.
	this.signals.onBlockDestroyed = new signals.Signal();
	this.signals.onBlockDestroyed.add( this._room.onBlockDestroyed, this._room );
}
module.exports = CannonboltTransformation;
CannonboltTransformation.prototype = Object.create( Transformation.prototype );
CannonboltTransformation.prototype.constructor = CannonboltTransformation;


CannonboltTransformation.prototype.update = function()
{	
	Transformation.prototype.update.call( this );
	
	var avatar = this._room.avatar;
	
	// Destroy cracked walls while jumping.
	if ( avatar.currentAnimation == "jump" 
		|| avatar.currentAnimation == "fall"
		|| avatar.currentAnimation == "true" )
	{
		// Increase the size of the collision rect so it is not ignored when raycasting for surface collisions.
		var avatarCollRect = avatar.collisionRect;
		const COLL_RECT_MARGIN = 10;
		avatarCollRect.x -= COLL_RECT_MARGIN * .5;
		avatarCollRect.y -= COLL_RECT_MARGIN * .5;
		avatarCollRect.width += COLL_RECT_MARGIN; 
		avatarCollRect.height += COLL_RECT_MARGIN;
		
		var arrCrackedBlock = [];
		for ( var i = 0; i < this._room.crackedWallBlocks.length; ++i )
		{
			var crackedBlockAux = this._room.crackedWallBlocks[ i ];
			if ( this._room.avatar.collision( crackedBlockAux ) )
			{
				crackedBlockAux.isGarbage = true;
								
				for ( var j = 0; j < 8; ++j )
				{
					this._room.layers[ "platforms" ].vertices[ j + 8 * crackedBlockAux.config.meshQuadIndex ] = 0;
					this._room.layers[ "platforms" ].uvs[ j + 8 * crackedBlockAux.config.meshQuadIndex ] = 0;
				}
				
				// Vfx.
				var ps = new ParticleSystem( 
					[ "particle_rock_001",
					"particle_rock_002",
					"particle_rock_003",
					"particle_rock_004",
					"particle_rock_005" ], 
					"particle_emitter_wall_destroy" );
				ps.init( crackedBlockAux.config.x, crackedBlockAux.config.y );
				ps.scale.x = Math.sign( avatar.velocity.x );
				this._room.addChild( ps );
				this._room.particleSystems.push( ps );
			}
			else
				arrCrackedBlock.push( crackedBlockAux );
		}
		
		// Play roll animation if any block was removed.
		if ( this._room.crackedWallBlocks.length != arrCrackedBlock.length )
		{
			// Sfx.
			p3.AudioManager.instance.playSound( "sfx_cannonbolt_roll_jump_00" );
			p3.AudioManager.instance.playSound( [ "sfx_floor_crush", "sfx_wall_crush" ] );	
		
			avatar.setAnimation( "roll", true );
			
			// Update room result.
			this.signals.onBlockDestroyed.dispatch( this._room.crackedWallBlocks.length - arrCrackedBlock.length );
		}
		
		// Update remaining cracked wall blocks.
		this._room.crackedWallBlocks = arrCrackedBlock;
		
		// Restore collision rect.
		avatarCollRect.x += COLL_RECT_MARGIN * .5;
		avatarCollRect.y += COLL_RECT_MARGIN * .5;
		avatarCollRect.width -= COLL_RECT_MARGIN; 
		avatarCollRect.height -= COLL_RECT_MARGIN;
	}
}

CannonboltTransformation.prototype.onEnemyCollision = function( enemy )
{
	var result = true;
	
	var avatar = this._room.avatar;
	
	// Kill the enemy while jumping.
	if ( avatar.currentAnimation == "jump" 
		|| avatar.currentAnimation == "fall"
		|| avatar.currentAnimation == "roll" )
	{	
		// Sfx.
		p3.AudioManager.instance.playSound( "sfx_cannonbolt_roll_jump_00" );
	
		avatar.setAnimation( "roll", true );		
	
		enemy.kill();	
		result = false;
	}
	
	return result;
}
},{"../Common":2,"./ParticleSystem":22,"./Transformation":26}],12:[function(require,module,exports){
var Common    = require("../Common");
var GameObject = require("./GameObject");

/**
 * @constructor
 */
function Coin( room )
{
	GameObject.call( this, "coin" );
	
	this._room = room;	
	this._assetManager = p3.AssetManager.instance;	
	this.taken = false;
		
	this.pickupPS      = new cloudkid.Emitter(this, [this._assetManager.getTexture("pickup_00")], this._assetManager.getJSON("particle_coin_collect_burst"));
	this.pickupPS.emit = false;
	
	// Events.
	this.signals.onCoinCollected = new signals.Signal();
	this.signals.onCoinCollected.add( this._room.onCoinCollected, this._room );
}
module.exports = Coin;
Coin.prototype = Object.create(GameObject.prototype);
Coin.prototype.constructor = Coin;

Coin.prototype.init = function(x, y, tileColumn)
{
	this.x = x;
	this.y = y-8;
	
	this.sprite        = new PIXI.Sprite(this._assetManager.getTexture("pickup_00"));
	this.sprite.anchor = new PIXI.Point(0.5, 0.5);
	this.sprite.y      = 0;
	this.addChild(this.sprite);

	this.collisionRect = new PIXI.Rectangle(-16, -16, 32, 64);
	// this.drawCollision();
	
	var tl = new TimelineMax();
	tl.to(this, .75, {y:this.y-8, ease:Quad.easeInOut, yoyo:true, repeat:-1}, tileColumn * .2 / 8);
	Common.animator.add(tl);	
}


Coin.prototype.update = function()
{
	this.pickupPS.update(p3.Timestep.deltaTime);
}

Coin.prototype.pickup = function()
{
	if(this.taken) return;
	
	// Sfx.
	p3.AudioManager.instance.playSound( "sfx_pickup" );
	
	this.taken = true;
	this.pickupPS.emit = true;
	
	var tl = new TimelineMax();
	tl.to(this.sprite, 0.25, {alpha:0, ease:Sine.easeIn}, 0);
	tl.to(this.sprite.scale, 0.25, {x:0, y:0, ease:Sine.easeIn}, 0);
	Common.animator.add(tl);

	this.signals.onCoinCollected.dispatch();
}
},{"../Common":2,"./GameObject":17}],13:[function(require,module,exports){
var Common    = require("../Common");
var GameObject = require("./GameObject");

/**
 * @constructor
 */
function Door( id, textureBaseId, room )
{
	this._id = id;
	this.room = room;	

	this._assetManager = p3.AssetManager.instance;
	GameObject.call(this, "door");
}
module.exports = Door;
Door.prototype = Object.create(GameObject.prototype);
Door.prototype.constructor = Door;

Door.prototype.init = function(x, y, textureBaseId)
{
	this.x = x;
	this.y = y;
	
	// Animations
	this._animationHolder = new PIXI.Container();
	this.addChild(this._animationHolder);
	
	
	// this.sprite        = new PIXI.Sprite(this._assetManager.getTexture("star"));
	// this.sprite.anchor = new PIXI.Point(0.5, 1);
	// this.sprite.tint   = 0xff0000;
	// this.sprite.y      = 0;
	// this.addChild(this.sprite);
	
	this._closed = new p3.MovieClip(this._generateAnimationSequence(textureBaseId, 1));
	this._closed.anchor  = new PIXI.Point(0.5, 1);
	this._closed.looping = false;
	this._animationHolder.addChild(this._closed);	
	
	this._open = new p3.MovieClip(this._generateAnimationSequence(textureBaseId, 8));
	this._open.anchor  = new PIXI.Point(0.5, 1);
	this._open.looping = false;
	this._animationHolder.addChild(this._closed);	
	
	this._openAnimation = new p3.MovieClip(this._generateAnimationSequence(textureBaseId, 1, 8));
	this._openAnimation.animationSpeed = this._openAnimation.totalFrames/1;
	this._openAnimation.anchor  = new PIXI.Point(0.5, 1);
	this._openAnimation.looping = false;
	this._openAnimation.visible = false;
	this._animationHolder.addChild(this._openAnimation);
	
	// this._closeAnimation = new p3.MovieClip(this._generateAnimationSequence(textureBaseId, 8, 1));
	// this._closeAnimation.animationSpeed = this._closeAnimation.totalFrames/1;
	// this._closeAnimation.anchor  = new PIXI.Point(0.5, 1);
	// this._closeAnimation.looping = false;
	// this._closeAnimation.visible = false;
	// this._animationHolder.addChild(this._closeAnimation);
	

	this.collisionRect = new PIXI.Rectangle(-20, -40, 40, 40);
	// this.drawCollision();
}


Door.prototype.update = function()
{

}

Door.prototype.open = function()
{
	// Sfx.
	p3.AudioManager.instance.playSound( [ "sfx_door_open", "sfx_door_openlevelend" ] );
	
	this._closed.visible        = false;
	this._open.visible          = false;
	this._openAnimation.visible = true;
	this._openAnimation.play();	
}

/**
 * @param {String} texture
 * @param {Number} frameStart
 * @param {Number} frameEnd
 * @returns {p3.MovieClipSequence}
 */
Door.prototype._generateAnimationSequence = function(texture, frameStart, frameEnd)
{
	if(!frameEnd) frameEnd = frameStart;

	var textureArr = [];
	for(var i = frameStart; i <= frameEnd; frameStart <= frameEnd ? i++ : i--)
	{
		var n = "" + i;
		while(n.length < 3) n = "0" + n;
		textureArr.push(texture + "" + n);
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
// GETTERS / SETTERS
//===================================================

Object.defineProperty(
	Door.prototype, 
	"id", 
	{ get: function() { return this._id; } } );
},{"../Common":2,"./GameObject":17}],14:[function(require,module,exports){
var Common = require( "../Common" );
var GameObject = require( "./GameObject" );
var ParticleSystem = require( "./ParticleSystem" );

/**
 * @constructor
 */
function Enemy( room, spineData, hAxisMult )
{
	GameObject.call( this, "enemy" );
	
	this._gun = null;
	this._room = room;
	this._assetManager = p3.AssetManager.instance;
	this.runSpeed = 30; // px/s
	this.gravity = 500; // px/s^2
	this.velocity = new PIXI.Point( 0, 0 );

	this.direction = 1;

	this.spineData = spineData;
	this.currentAnimation = "";
	this.spineSpeed = 1;

	this.collisions = {
		top          : false,
		bottom       : false,
		left         : false,
		right        : false,
		bottomBefore : false };
		
	this._isFall = false;
	this._hAxisMult = hAxisMult;
	
	// Collider
	this.collisionRect = new PIXI.Rectangle( -30, -10, 60, 20 );
	this._targetCollisionRect = new PIXI.Rectangle( -30, -50, 60, 70 );
		
	// Events.
	this.signals.onEnemyKilled = new signals.Signal();
	this.signals.onEnemyKilled.add( this._room.onEnemyKilled, this._room );
}
module.exports = Enemy;
Enemy.prototype = Object.create( GameObject.prototype );
Enemy.prototype.constructor = Enemy;

Enemy.prototype.init = function( x, y )
{
	// Spawn position
	this.x = x;
	this.y = y;	

	// Spine
	this.spine = new PIXI.spine.Spine( this.spineData );
	this.spine.skeleton.setToSetupPose();
	this.spine.skeleton.setSkin( null );
	this.spine.skeleton.setSkinByName( "default" );
	//this.spine.x = 0;
	//this.spine.y = 60;
	this.spine.autoUpdate = false;
	this._spineContainer = new PIXI.Container();	
	this._spineContainer.addChild( this.spine );
	this._spineContainer.scale = new PIXI.Point( .3, .3 );
	this.addChild( this._spineContainer );
	this.setAnimation( 'move', true );
	this.spine.update(p3.Timestep.deltaTime * this.spineSpeed);
}


Enemy.prototype.update = function()
{
	// DEBUG:
	/*if(!!this.targetCollisionGraphic)
		this.removeChild(this.targetCollisionGraphic);

    this.targetCollisionGraphic = new PIXI.Graphics();
    this.addChild(this.targetCollisionGraphic);
    this.targetCollisionGraphic.lineStyle(2, 0xff00ff);

	this.targetCollisionGraphic.drawRect(this._targetCollisionRect.x, this._targetCollisionRect.y, this._targetCollisionRect.width, this._targetCollisionRect.height);*/
	
	//this.drawCollision();

	// Spine update
	this.spine.update( p3.Timestep.deltaTime * this.spineSpeed );

	if ( Math.sign( this.velocity.x ) != 0 )
	{
		this._spineContainer.x = Math.abs( this._spineContainer.x ) * Math.sign( this.velocity.x ) * -1;
		this._spineContainer.scale.x = Math.abs( this._spineContainer.scale.x ) * Math.sign( this.velocity.x ) * this._hAxisMult;
	}

		
	// Update velocity
	this.velocity.x = this.direction * this.runSpeed;
	this.velocity.y += this.gravity * p3.Timestep.deltaTime;

	// Debug input
	// if(Common.keyboard.getKeyPressed(Common.keyboard.KEY_A))
		// this.velocity.x = -this.runSpeed;
	// else if(Common.keyboard.getKeyPressed(Common.keyboard.KEY_D))
		// this.velocity.x = +this.runSpeed;
	// else
		// this.velocity.x = 0;

	// if(Common.keyboard.getKeyPressed(Common.keyboard.KEY_W) && this.collisions.bottom && !this.isLanding)
		// this.jump();

	// Calculate frame movement
	var movement = new PIXI.Point( this.velocity.x * p3.Timestep.deltaTime, this.velocity.y * p3.Timestep.deltaTime );

	// Reset collisions
	this.collisions.bottomBefore = this.collisions.bottom;
	this.collisions.top          = false;
	this.collisions.bottom       = false;
	this.collisions.left         = false;
	this.collisions.right        = false;

	this.detectBlockCollision( movement );

	// Move the character from left to right when it is on the ground.
	if ( this.collisions.bottom )
	{
		// Decrease gravity after grounded to avoid going through platforms.
		if ( this.gravity != 10 ) 
			this.gravity = 10;
	
		this.x += movement.x;
	}
	this.y += movement.y;

	// Swap direction if arrived at the end of the platform.
	if ( this.collisions.left || this.collisions.right || this._isFall )
		this.switchDirection();

	// Reset gravity when touching ground or a ceiling
	if ( this.collisions.bottom )
		this.velocity.y = 0;
		
	this.detectShotCollision();
	
	if ( this._gun != null )
		this._gun.update();
	
	// This enemy's platform was destroyed.
	if ( this.gravity == 10 && !this.collisions.bottom )
		this.kill();		
}

/**
 */
Enemy.prototype.detectShotCollision = function()
{
	// Collisions: shots
	for ( var i = 0; i < this._room.objects.shots.length; i++ )
	{
		var shotAux = this._room.objects.shots[ i ];
		if ( this.rectRectCollision(
			{
				x      : this.x + this.targetCollisionRect.x,
				y      : this.y + this.targetCollisionRect.y,
				width  : this.targetCollisionRect.width,
				height : this.targetCollisionRect.height
			},
			{
				x      : shotAux.x + shotAux.collisionRect.x,
				y      : shotAux.y + shotAux.collisionRect.y,
				width  : shotAux.collisionRect.width,
				height : shotAux.collisionRect.height
			} ) )
		{						
			shotAux.isGarbage = true;
			
			this.kill();
			
			break;
		}
	}
}

/**
 */
Enemy.prototype.detectBlockCollision = function( movement )
{
	// Blocks horizontal collisions
	if ( movement.x != 0 )
	{
		if ( movement.x > 0 )
			var rayOrigins = this.getRightRayOrigins();
		else
			var rayOrigins = this.getLeftRayOrigins();

		var ray = new PIXI.Point( movement.x + this.skinWidth * Math.sign( movement.x ), 0 );

		for ( var r = 0; r < rayOrigins.length && movement.x != 0; r++ )
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[ r ];
			// avatarP1.y += movement.y;
			var avatarP2 = new PIXI.Point( avatarP1.x + ray.x, avatarP1.y + ray.y );

			for ( var b = 0; b < this._room.blocks.length; b++ )
			{
				if ( this._room.blocks[b].isGarbage ) continue;
				if ( movement.x > 0 && !this._room.blocks[ b ].config.collisions.left ) continue;
				if ( movement.x < 0 && !this._room.blocks[ b ].config.collisions.right ) continue;

				// Segment vertices
				var blockP1 = new PIXI.Point( this._room.blocks[ b ].config.x + ( movement.x < 0 ? this._room.blocks[ b ].config.width : 0 ), this._room.blocks[ b ].config.y );
				var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this._room.blocks[ b ].config.height );

				// Line-line collision detection
				var intersection = this.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
				if ( intersection )
				{
					var distance =  intersection.x - avatarP1.x - this.skinWidth * Math.sign( movement.x );

					if ( movement.x > 0 )
						this.collisions.right = true;
					else
						this.collisions.left = true;

					movement.x = distance;

					// Avoid floating point errors
					if ( Math.closeEnough( movement.x, 0 ) )
					{
						movement.x = 0;
						break;
					}

					// Decrease the length of future raycasts
					avatarP2.x -= ray.x;
					ray.x = distance + this.skinWidth * Math.sign( movement.x );
					avatarP2.x += ray.x;
				}
			}
		}
	}

	// Plarform end detection.
	this._isFall = false;
	if ( movement.y > 0 && movement.x != 0 )
	{
		this._isFall = true;
		if ( movement.x > 0 )
			var rayOrigin = new PIXI.Point( 
				this.x + this.collisionRect.x + this.collisionRect.width,
				this.y + this.collisionRect.y + this.collisionRect.height );
		else
			var rayOrigin = new PIXI.Point( 
				this.x + this.collisionRect.x,
				this.y + this.collisionRect.y + this.collisionRect.height );
		var ray = new PIXI.Point( 0, movement.y + this.skinWidth * Math.sign( movement.y ) ); // movement and not velocity because when climbing a spline velocity is positive (because gravity) but movement has changed to be negative

		// Movement ray vertices
		var avatarP1 = rayOrigin;
		avatarP1.x += movement.x;
		var avatarP2 = new PIXI.Point( avatarP1.x + ray.x, avatarP1.y + ray.y );
		
		for ( var b = 0; b < this._room.blocks.length; b++ )
		{
			if ( this._room.blocks[b].isGarbage ) continue;
			//if ( movement.y < 0 && !this._room.blocks[ b ].config.collisions.bottom ) continue;

			// Segment vertices
			var blockP1  = new PIXI.Point( this._room.blocks[ b ].config.x, this._room.blocks[ b ].config.y + ( movement.y < 0 ? this._room.blocks[ b ].config.height : 0 ) );
			var blockP2  = new PIXI.Point( blockP1.x + this._room.blocks[ b ].config.width, blockP1.y );

			// Line-line collision detection
			var intersection = this.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
			if ( intersection )
			{
				this._isFall = false;
				
				break;
			}
		}
	}
	
	// Blocks vertical collisions
	if ( movement.y > 0 )
	{
		var rayOrigins = this.getBottomRayOrigins();
		var ray = new PIXI.Point( 0, movement.y + this.skinWidth * Math.sign( movement.y ) ); // movement and not velocity because when climbing a spline velocity is positive (because gravity) but movement has changed to be negative

		for ( var r = 0; r < rayOrigins.length && movement.y != 0; r++ )
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[ r ];
			avatarP1.x += movement.x;
			var avatarP2 = new PIXI.Point( avatarP1.x + ray.x, avatarP1.y + ray.y );

			for ( var b = 0; b < this._room.blocks.length; b++ )
			{
				if ( this._room.blocks[b].isGarbage ) continue;
				if ( movement.y > 0 && !this._room.blocks[ b ].config.collisions.top ) continue;
				if ( movement.y < 0 && !this._room.blocks[ b ].config.collisions.bottom ) continue;

				// Segment vertices
				var blockP1  = new PIXI.Point( this._room.blocks[ b ].config.x, this._room.blocks[ b ].config.y + ( movement.y < 0 ? this._room.blocks[ b ].config.height : 0 ) );
				var blockP2  = new PIXI.Point( blockP1.x + this._room.blocks[ b ].config.width, blockP1.y );

				// Line-line collision detection
				var intersection = this.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
				if ( intersection )
				{
					this.collisions.bottom = true;
					var distance =  intersection.y - avatarP1.y - this.skinWidth * Math.sign( movement.y );					
					movement.y = distance;
	
					// Avoid floating point errors
					if ( Math.closeEnough( movement.y, 0 ) )
					{
						movement.y = 0;
						break;
					}

					// Decrease the length of future raycasts
					avatarP2.y -= ray.y;
					ray.y = distance + this.skinWidth * Math.sign( movement.y );
					avatarP2.y += ray.y;
				}
			}
		}
	}
}

/**
 */
Enemy.prototype.switchDirection = function()
{
	this.velocity.x = 0;
	this.direction *= -1;
}

/**
 */
Enemy.prototype.setAnimation = function(id, loop)
{
	if(id == this.currentAnimation) return;

	if(Array.isArray(id))
	{
		this.spine.state.setAnimationByName(0, id[0], false);

		for(var i = 1; i < id.length; i++)
		{
			this.spine.state.addAnimationByName(0, id[i], loop && (i == (id.length-1)), 0);
		}
		this.currentAnimation = id[id.length-1];
	}
	else
	{
		this.spine.state.setAnimationByName(0, id, loop, 0);
		this.currentAnimation = id;
	}
}

/**
 */
Enemy.prototype.kill = function()
{
	this.isGarbage = true;
	
	// Vfx.
	var ps = new ParticleSystem( 
		[ "particle_smoke_001",
		"particle_smoke_002",
		"particle_smoke_003",
		"particle_smoke_004",
		"particle_star_001",
		"particle_star_002",
		"particle_star_003" ],
		"particle_emitter_attack" );
	ps.init( this.x, this.y );
	this._room.addChild( ps );
	this._room.particleSystems.push( ps );
	
	// Sfx.
	p3.AudioManager.instance.playSound( "sfx_stinkfly_gasattack_01" );

	this.signals.onEnemyKilled.dispatch();
}


Math.EPSILON = 1e-6;

/**
 * Determines whether the two floating-point values f1 and f2 are close enough together that they can be considered equal.
 *
 * @param {number} f1
 * @param {number} f2
 * @returns {boolean}
 */
Math.closeEnough = function(f1, f2)
{
	return Math.abs((f1 - f2) / ((f2 == 0.0) ? 1.0 : f2)) < Math.EPSILON;
}


Object.defineProperty(
	Enemy.prototype, 
	"targetCollisionRect", 
	{ get: function() { return this._targetCollisionRect; } } );
	
Object.defineProperty(
	Enemy.prototype, 
	"spineContainer", 
	{ get: function() { return this._spineContainer; } } );
	
Object.defineProperty(
	Enemy.prototype, 
	"gun", 
	{ set: function( value ) { this._gun = value; } } );
},{"../Common":2,"./GameObject":17,"./ParticleSystem":22}],15:[function(require,module,exports){
var Common    = require( "../Common" );
var Powerup = require( "./Powerup" );
var FourarmsTransformation = require( "./FourarmsTransformation" );

//===================================================
// CONSTRUCTOR
//===================================================

function FourarmsPowerup( room )
{
	Powerup.call( this, "fourarms_powerup", "icon_fourarms", room );
}
module.exports = FourarmsPowerup;
FourarmsPowerup.prototype = Object.create( Powerup.prototype );
FourarmsPowerup.prototype.constructor = FourarmsPowerup;


//===================================================
// PUBLIC METHODS
//===================================================

FourarmsPowerup.prototype.pickup = function()
{
	if ( this.taken ) return;
	
	Powerup.prototype.pickup.call( this );
	
	this._room.level.setTransformation( new FourarmsTransformation( this._room ) );
}
},{"../Common":2,"./FourarmsTransformation":16,"./Powerup":23}],16:[function(require,module,exports){
var Common    = require( "../Common" );
var Transformation = require( "./Transformation" );
var ParticleSystem = require( "./ParticleSystem" );

var g_fourarmsTransformation = null;

/**
 * @constructor
 */
function FourarmsTransformation( room )
{
	Transformation.call( this, room );
	this._id = this.TRANSFORMATION_ID_FOURARMS;
	
	// Events.
	this.signals.onBlockDestroyed = new signals.Signal();
	this.signals.onBlockDestroyed.add( this._room.onBlockDestroyed, this._room );
	
	g_fourarmsTransformation = this;
}
module.exports = FourarmsTransformation;
FourarmsTransformation.prototype = Object.create( Transformation.prototype );
FourarmsTransformation.prototype.constructor = FourarmsTransformation;


FourarmsTransformation.prototype.update = function()
{	
	Transformation.prototype.update.call( this );
	
	var avatar = this._room.avatar;
	
	// Destroy cracked walls while jumping.
	if ( avatar.currentAnimation == "jump" 
		|| avatar.currentAnimation == "fall"
		|| avatar.currentAnimation == "punch_up" )
	{
		// Increase the size of the collision rect so it is not ignored when raycasting for surface collisions.
		var avatarCollRect = this._room.avatar.collisionRect;
		const COLL_RECT_MARGIN = 10;
		avatarCollRect.x -= COLL_RECT_MARGIN * .5;
		avatarCollRect.y -= COLL_RECT_MARGIN * .5;
		avatarCollRect.width += COLL_RECT_MARGIN; 
		avatarCollRect.height += COLL_RECT_MARGIN;
		
		var arrCrackedBlock = [];
		for ( var i = 0; i < this._room.crackedPlatformBlocks.length; ++i )
		{
			var crackedBlockAux = this._room.crackedPlatformBlocks[ i ];
			if ( avatar.collision( crackedBlockAux ) )
			{
				crackedBlockAux.isGarbage = true;
								
				for ( var j = 0; j < 8; ++j )
				{
					this._room.layers[ "platforms" ].vertices[ j + 8 * crackedBlockAux.config.meshQuadIndex ] = 0;
					this._room.layers[ "platforms" ].uvs[ j + 8 * crackedBlockAux.config.meshQuadIndex ] = 0;
				}
				
				// Vfx.
				var ps = new ParticleSystem( 
					[ "particle_rock_001",
					"particle_rock_002",
					"particle_rock_003",
					"particle_rock_004",
					"particle_rock_005" ], 
					"particle_emitter_wall_destroy" );
				ps.init( crackedBlockAux.config.x, crackedBlockAux.config.y );
				ps.scale.x = -Math.sign( avatar.velocity.x );
				this._room.addChild( ps );
				this._room.particleSystems.push( ps );
			}
			else
				arrCrackedBlock.push( crackedBlockAux );
		}
		
		// Play punch animation if any block was removed.
		if ( this._room.crackedPlatformBlocks.length != arrCrackedBlock.length )
		{
			// Sfx.
			p3.AudioManager.instance.playSound( [ "sfx_4arms_punch_00", "sfx_4arms_punch_01", "sfx_4arms_punch_02", "sfx_4arms_punch_03", "sfx_4arms_punch_04" ] );
			p3.AudioManager.instance.playSound( [ "sfx_floor_crush", "sfx_wall_crush" ] );	
		
			avatar.setAnimation( "punch_up", false );
			
			// Update room result.
			this.signals.onBlockDestroyed.dispatch( this._room.crackedPlatformBlocks.length - arrCrackedBlock.length );
		}
		
		// Update remaining cracked wall blocks.
		this._room.crackedPlatformBlocks = arrCrackedBlock;
		
		// Restore collision rect.
		avatarCollRect.x += COLL_RECT_MARGIN * .5;
		avatarCollRect.y += COLL_RECT_MARGIN * .5;
		avatarCollRect.width -= COLL_RECT_MARGIN; 
		avatarCollRect.height -= COLL_RECT_MARGIN;
	}
}

FourarmsTransformation.prototype.onEnemyCollision = function( enemy )
{
	var result = true;
	
	var avatar = this._room.avatar;
	
	// Kill the enemy while running.
	if ( avatar.currentAnimation == "run_level" 
		|| avatar.currentAnimation == "punch_down" )
	{	
		if ( this._punchedEnemy == null && !enemy.isGarbage )
		{
			this._punchedEnemy = enemy;			
		
			avatar.setAnimation( "punch_down", false );	
			avatar.spine.state.onEvent = 
				function( track, event ) 
				{
					if ( event.data.name == "destroy" )
					{
						// Sfx.
						p3.AudioManager.instance.playSound( [ "sfx_4arms_punch_00", "sfx_4arms_punch_01", "sfx_4arms_punch_02", "sfx_4arms_punch_03", "sfx_4arms_punch_04" ] );
					
						g_fourarmsTransformation._punchedEnemy.kill();
						
						g_fourarmsTransformation._punchedEnemy = null;
					}
				};		
		}
		
		result = false;
	}
	
	return result;
}
},{"../Common":2,"./ParticleSystem":22,"./Transformation":26}],17:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

function GameObject(type)
{
	PIXI.Container.call( this );
	
    this._assetManager    = p3.AssetManager.instance;

    this.signals          = {};
    this.signals.disposed = new signals.Signal();

    this.id                = null;
	this.type              = type;
	this.collisionRect     = null;
	this.collisionCircle   = null;
	this.areaRect          = null;
	this.interactive       = false;
	this.removeWhenOutside = true;

	this.verticalRaycast   = 16;
	this.horizontalRaycast = 4;
	this.skinWidth         = 0.5;

	this.collisionGraphic = null;
	
	this.isGarbage = false;
}
module.exports = GameObject;
GameObject.prototype = Object.create( PIXI.Container.prototype );
GameObject.prototype.constructor = GameObject;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
GameObject.prototype.init = function() { };

/**
 */
GameObject.prototype.update = function() { };

/**
 */
GameObject.prototype.reset = function()
{
	this.x = 0;
	this.y = 0;
    this.removeMe = false;
};

/**
 */
GameObject.prototype.dispose = function()
{
	this.signals.disposed.dispatch(this);
    this.removed = true;
}

/**
 */
GameObject.prototype.pause = function()
{

}

/**
 */
GameObject.prototype.resume = function()
{

}

/**
 */
GameObject.prototype.drawCollision = function()
{
	if(!!this.collisionGraphic)
		this.removeChild(this.collisionGraphic);

    this.collisionGraphic = new PIXI.Graphics();
    this.addChild(this.collisionGraphic);
    this.collisionGraphic.lineStyle(2, 0x0000ff);

	if(this.collisionRect != null)
		this.collisionGraphic.drawRect(this.collisionRect.x, this.collisionRect.y, this.collisionRect.width, this.collisionRect.height);
	else if(this.collisionCircle != null)
		this.collisionGraphic.drawCircle(this.collisionCircle.x, this.collisionCircle.y, this.collisionCircle.radius);
		
	this.collisionGraphic.drawCircle(0, 0, 5);
}


/**
 */
GameObject.prototype.getBottomRayOriginsWithRect = function( collisionRect )
{
	var origins = [];

    for ( var i = 0; i < this.verticalRaycast; i++ )
	{
		origins.push( new PIXI.Point (
			this.x + collisionRect.x + this.skinWidth + ((collisionRect.width - (2 * this.skinWidth))/(this.verticalRaycast-1) * i),
			this.y + collisionRect.y + collisionRect.height - this.skinWidth ) );
	}
	
	return origins;
}

/**
 */
GameObject.prototype.getBottomRayOrigins = function()
{
	return this.getBottomRayOriginsWithRect( this.collisionRect );
}

/**
 */
GameObject.prototype.getTopRayOriginsWithRect = function( collisionRect )
{
	var origins = [];

    for(var i = 0; i < this.verticalRaycast; i++)
	{
		origins.push(new PIXI.Point
		(
			this.x + collisionRect.x + this.skinWidth + ((collisionRect.width - (2 * this.skinWidth))/(this.verticalRaycast-1) * i),
			this.y + collisionRect.y + this.skinWidth
		));
	}
	
	return origins;
}

/**
 */
GameObject.prototype.getTopRayOrigins = function()
{
	return this.getTopRayOriginsWithRect( this.collisionRect );
}

/**
 */
GameObject.prototype.getLeftRayOriginsWithRect = function( collisionRect )
{
	var origins = [];

    for(var i = 0; i < this.horizontalRaycast; i++)
	{
		origins.push(new PIXI.Point
		(
			this.x + collisionRect.x + this.skinWidth,
			this.y + collisionRect.y + this.skinWidth + ((collisionRect.height - (2 * this.skinWidth))/(this.horizontalRaycast-1) * i)

		));
	}
	
	return origins;
}

/**
 */
GameObject.prototype.getLeftRayOrigins = function()
{
	return this.getLeftRayOriginsWithRect( this.collisionRect );
}

/**
 */
GameObject.prototype.getRightRayOriginsWithRect = function( collisionRect )
{
	var origins = [];

    for(var i = 0; i < this.horizontalRaycast; i++)
	{
		origins.push(new PIXI.Point
		(
			this.x + collisionRect.x + collisionRect.width - this.skinWidth,
			this.y + collisionRect.y + this.skinWidth + ((collisionRect.height - (2 * this.skinWidth))/(this.horizontalRaycast-1) * i)

		));
	}
	return origins;
}

/**
 */
GameObject.prototype.getRightRayOrigins = function()
{
	return this.getRightRayOriginsWithRect( this.collisionRect );
}

GameObject.prototype.collision = function(obj)
{
	// Rect - rect collision
	if(this.collisionRect != null && obj.collisionRect != null)
	{
		return this.rectRectCollision
		(
			{
				x      : this.x + this.collisionRect.x,
				y      : this.y + this.collisionRect.y,
				width  : this.collisionRect.width,
				height : this.collisionRect.height
			},
			{
				x      : obj.x + obj.collisionRect.x,
				y      : obj.y + obj.collisionRect.y,
				width  : obj.collisionRect.width,
				height : obj.collisionRect.height
			}
		);
	}

	// circle - circle collision
	if(this.collisionCircle != null && obj.collisionCircle != null)
	{
		var p1 =
		{
			x: this.x + this.collisionCircle.x,
			y: this.y + this.collisionCircle.y
		};

		var p2 =
		{
			x: obj.x + obj.collisionCircle.x,
			y: obj.y + obj.collisionCircle.y
		};

		var distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
		var maxDistance = this.collisionCircle.radius + obj.collisionCircle.radius;

		return distance < maxDistance;
	}

	// Rect - circle collision
	if((this.collisionRect != null && obj.collisionCircle != null) || (this.collisionCircle != null && obj.collisionRect != null))
	{
		// TODO
		return false;
	}

	console.error("Collision case not defined");
	return false;

}

/**
 */
GameObject.prototype.rectRectCollision = function(rect1, rect2)
{
	if (rect1.x < rect2.x + rect2.width &&
	rect1.x + rect1.width > rect2.x &&
	rect1.y < rect2.y + rect2.height &&
	rect1.height + rect1.y > rect2.y)
	{
		return true;
	}
	return false;
}

/**
 */
GameObject.prototype.lineLineCollision = function(p0, p1, p2, p3)
{
	var s1_x, s1_y, s2_x, s2_y;
    s1_x = p1.x - p0.x;
	s1_y = p1.y - p0.y;
    s2_x = p3.x - p2.x;
	s2_y = p3.y - p2.y;

    var s, t;
    s = (-s1_y * (p0.x - p2.x) + s1_x * (p0.y - p2.y)) / (-s2_x * s1_y + s1_x * s2_y);
    t = ( s2_x * (p0.y - p2.y) - s2_y * (p0.x - p2.x)) / (-s2_x * s1_y + s1_x * s2_y);

	if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
    {
        return new PIXI.Point(p0.x + (t * s1_x), p0.y + (t * s1_y));
    }

    return false;
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


},{"../Common":2}],18:[function(require,module,exports){
var Common = require( "../Common" );
var Room = require( "../game/Room" );
var Global = require( "../general/Global" );
var TransformationEffect = require( "./TransformationEffect" );


//===================================================
// CONSTRUCTOR
//===================================================

/**
 */
function Level( chapterIndex, levelIndex )
{
	// Parent initialization.
	PIXI.Container.call( this );	
	
	
	// Constants.
	this.TRANSFORMATION_VFX_DURATION = 1.5;
	this.TRANSFORMATION_DELAY = 1.0;
	
	this.STATE_IDLE = 0;
	this.STATE_TRANSFORMING_BEN = 1;
	this.STATE_GAME_OVER = 2;	
	this.STATE_START_COUNTDOWN = 3;	
	this.STATE_TUTORIAL = 4;	
	
		
	// Asset manager.
	this._assetManager = p3.AssetManager.instance;
	
	// Parse level.
	this.data = this._assetManager.getJSON( Global.LEVEL_ID_ARRAY[ chapterIndex ][ levelIndex ] );
	//console.log( this._data );
	
	// Get total coins.
	var totalCoins = 0;
	for ( var i = 0; i < this.data.rooms.length; ++i )
	{
		for ( var j = 0; j < this.data.rooms[ i ].objects.length; ++j )
		{
			if ( this.data.rooms[ i ].objects[ j ] == 1 )
				++totalCoins;
		}
	}
	
	// Create a data structure to store the level result.
	this._levelResultInfo = { 
		time:Global.GAME_BASE_TIME, 
		steps:0, 
		collectedCoins:0, 
		collectedPowerups:0, 
		destroyedBlocks:0,
		killedEnemies:0,
		totalCoins:totalCoins, 
		chapterIndex:chapterIndex, 
		levelIndex:levelIndex,
		arrPowerupId:[]};
	
	// Setup first room.
	this._currentRoomIndex = 0;
	this.room = new Room( this, this.data.rooms[ this._currentRoomIndex ] );
	this.addChildAt( this.room, 0 );
	
	// Shake
	this._isShake       = false;
	this._shakeTime     = 0;
	this._shakeTimeEnd  = 1;
	this._shakeStrength = new PIXI.Point( 10,10 );	
	
	this._benTransformation = null;
	this._startCountdown = 0;
	this._startCountdownTimer = 0;
	this._transformationVfxTimer = 0;
	this._state = this.STATE_START_COUNTDOWN;
	
	
	// Signals.
	this.signals = {};
	this.signals.onNextRoom = new signals.Signal();
}

module.exports = Level;
Level.prototype = Object.create( PIXI.Container.prototype );
Level.prototype.constructor = Level;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Level.prototype.init = function() 
{
	// Room.
	this.room.init();
	
	// Start countdown text.
	this._startCountdownTextContainer = new PIXI.Container();
	this._startCountdownText = new PIXI.extras.BitmapText( "3", { font: "200px ahkio_100_green_endgame", align: "center" } );
	this._startCountdownText.visible = false;
	this._startCountdownTextContainer.addChild( this._startCountdownText );
	this.addChild( this._startCountdownTextContainer );
	this._startCountdownTextContainer.position = new PIXI.Point( Common.STAGE_WIDTH * .5, Common.STAGE_HEIGHT * .5 );
	
	// Death screen.
	this._deathScreen = new PIXI.Sprite( Common.generatedTextures[ 'blackSquare' ] );
	this._deathScreen.alpha = 0;
	this._deathScreen.width = Common.STAGE_WIDTH;
	this._deathScreen.height = Common.STAGE_HEIGHT;
	this._deathScreen.position = new PIXI.Point();
	this.addChild( this._deathScreen );
	
	if ( this._levelResultInfo.chapterIndex == 0 && this._levelResultInfo.levelIndex == 0 )
	{	
		// Pointer sprite.
		this.room.avatar.setAnimation( 'idle', true );
		this._tutorialPointer = new PIXI.Sprite( this._assetManager.getTexture( p3.Device.isMobile ? "pointer_hand" : "pointer_cursor" ) );
		this._tutorialPointer.position = new PIXI.Point( 281, 266 );
		this._tutorialPointer.anchor = new PIXI.Point( 1, 0 );
		this.room.addChild( this._tutorialPointer )
		
		// Vfx.
		this.room.startLineDraw( this._tutorialPointer.x, this._tutorialPointer.y );
		
		// Start pointer animation.
		var tl = new TimelineMax();
		tl.to( this._tutorialPointer, 3, { x:753, y:120, ease:Sine.easeInOut, onComplete:function() { this.onTutorialComplete(); }, onCompleteScope:this }, 0 );
		Common.animator.add( tl );
		
		// Disable player input.
		this.room._hitArea.interactive = false;
		
		this._state = this.STATE_TUTORIAL;
	}
	else
		this.startCountdown();
}

/**
 */
Level.prototype.update = function()
{
	switch ( this._state )
	{
		case this.STATE_TUTORIAL:
		{
			this.room.moveLineDraw( this._tutorialPointer.x, this._tutorialPointer.y );
		
			break;
		}
	
		case this.STATE_IDLE:
		{
			// Shake
			if ( this._isShake )
			{
				this._shakeTime += p3.Timestep.deltaTime;
				if ( this._shakeTime >= this._shakeTimeEnd )
				{
					this._shakeTime = 0;
					this._isShake = false;
				}
			}	
			
			this.x = 0;
			this.y = 0;
			
			if ( this._isShake )
			{
				this.x += p3.Utils.randomInt(-1,1) * (this._shakeStrength.x * (1 - this._shakeTime/this._shakeTimeEnd));
				this.y += p3.Utils.randomInt(-1,1) * (this._shakeStrength.y * (1 - this._shakeTime/this._shakeTimeEnd));
			}
			
			// Room
			this.room.update();
			
			break;
		}
		
		case this.STATE_TRANSFORMING_BEN:
		{
			this._transformationVfxTimer += p3.Timestep.deltaTime;
			if ( this._benTransformation != null && this._transformationVfxTimer > this.TRANSFORMATION_DELAY )
			{
				this.room.avatar.transform( this._benTransformation );
				
				this._benTransformation = null;			
			}
			else if ( this._transformationVfxTimer > this.TRANSFORMATION_VFX_DURATION )
				this._state = this.STATE_IDLE;
				
			break;
		}
		
		case this.STATE_GAME_OVER:
		{
			this.room.avatar.updateMovement();
			
			break;
		}
		
		case this.STATE_START_COUNTDOWN:
		{
			for ( var i = 0; i < this.room.objects.dangers.length; i++ )
				this.room.objects.dangers[ i ].update();
			this.room.avatar.spine.update( p3.Timestep.deltaTime * this.room.avatar.spineSpeed );
		
			this._startCountdownTimer += p3.Timestep.deltaTime;
			if ( this._startCountdownTimer >= 1 )
			{					
				this._startCountdownTimer = this._startCountdownTimer - 1;
						
				++this._startCountdown;
				
				p3.AudioManager.instance.playSound( this._startCountdown > 2 ? "sfx_btn_level" : "sfx_btn_back" );
				
				// Update text.
				this._startCountdownText.text = ( 3 - this._startCountdown ).toString();
				//this._startCountdownText.position.x = this.room.avatar.position.x + this.room.position.x + this.room.avatar.collisionRect.width * .5 - this._startCountdownText.width * .5; 
				this._startCountdownText.position.x = -this._startCountdownText.width * .5; 
				
				// Text animation.
				this._startCountdownTextContainer.scale = new PIXI.Point( 1, 1 );
				this._startCountdownText.alpha = 1;
				
				var tl = new TimelineMax();
				tl.to( this._startCountdownText, 0.8, { alpha:0, ease:Sine.easeIn }, 0.1 );
				tl.to( this._startCountdownTextContainer.scale, 0.8, { x:2, y:2, ease:Sine.easeIn }, 0.1 );
				Common.animator.add( tl );
			
				if ( this._startCountdown > 2 )
				{
					this._startCountdownText.visible = false;
				
					this._state = this.STATE_IDLE;
				}
			}
			
			break;
		}
	}
	
	// Static particle systems.
	this.room.updateStaticParticleSystems();
}

/**
 */
Level.prototype.shake = function( time, amount )
{
	this._isShake       = true;
	this._shakeTimeEnd  = time;
	this._shakeStrength = amount;
}

/**
 */
Level.prototype.restart = function()
{
	this.parent.restart();
	
	// Setup first room.
	this.removeChild( this.room );
	this.room = new Room( this, this.data.rooms[ this._currentRoomIndex ] );
	this.room.init();
	this.addChildAt( this.room, 0 );
}

/**
 */
Level.prototype.startCountdown = function()
{
	this._startCountdownText.text = "3";
	/*this._startCountdownText.position = new PIXI.Point( 
		this.room.avatar.position.x + this.room.position.x + this.room.avatar.collisionRect.width * .5 - this._startCountdownText.width * .5, 
		this.room.avatar.position.y + this.room.position.y - this.room.avatar.collisionRect.height * 3.5 );*/
	this._startCountdownText.position = new PIXI.Point( 
		-this._startCountdownText.width * .5, 
		-this._startCountdownText.height * .5 );
	this._startCountdownText.visible = true; 
	this._startCountdown = 0;
	this._startCountdownTimer = 0;
	this.room.avatar.setAnimation( 'idle', true );
	
	p3.AudioManager.instance.playSound( "sfx_btn_back" );
	
	// Text animation.
	this._startCountdownTextContainer.scale = new PIXI.Point( 1, 1 );
	this._startCountdownText.alpha = 1;
				
	var tl = new TimelineMax();
	tl.to( this._startCountdownText, 0.8, { alpha:0, ease:Sine.easeIn }, 0.1 );
	tl.to( this._startCountdownTextContainer.scale, 0.8, { x:2, y:2, ease:Sine.easeIn }, 0.1 );
	Common.animator.add( tl );
	
	this._state = this.STATE_START_COUNTDOWN;
}

/**
 */
Level.prototype.loadNextRoom = function()
{
	++this._currentRoomIndex;
	
	this.signals.onNextRoom.dispatch( this._currentRoomIndex, this.room.isAllCoinsCollected() );

	this.removeChild( this.room );
	this.room = new Room( this, this.data.rooms[ this._currentRoomIndex ] );
	this.room.init();
	this.addChildAt( this.room, 0 );
	
	this.startCountdown();
}

Level.prototype.resize = function()
{
	this.room.resize();
}

Level.prototype.setTransformation = function( transformation )
{
	this._benTransformation = transformation;
	
	// Vfx.
	var transformationEffect = new TransformationEffect();
    transformationEffect.x = this.room.avatar.x;
    transformationEffect.y = this.room.avatar.y - this.room.avatar.collisionRect.height * .5;
    transformationEffect.animate();
    this.room.addChild( transformationEffect );

	// Sfx.
    p3.AudioManager.instance.playSound( "sfx_omnitrix_transform_00" );
	this.room.avatar.stopRunSfx();
	
	this._transformationVfxTimer = 0;
	
	this._state = this.STATE_TRANSFORMING_BEN;	
}

//===================================================
// EVENTS
//===================================================

Level.prototype.onTutorialComplete = function()
{
	this._tutorialPointer.visible = false;
	this.room.endLineDraw(); 
	this.room._hitArea.interactive = true; 
	this.startCountdown();
	
	this.room.splineLayer.clear();
}

Level.prototype.onGameOver = function()
{
	var tl = new TimelineMax();
	tl.to( this._deathScreen, 0.5, { alpha:1, ease:Sine.easeIn, onComplete:function() { this.restart(); }, onCompleteScope:this }, 0 );
	tl.to( this._deathScreen, 0.5, { alpha:0, ease:Sine.easeOut, onComplete:function() { this.startCountdown(); }, onCompleteScope:this }, 0.75 );
	Common.animator.add( tl );
	
	this._state = this.STATE_GAME_OVER;	
}

//===================================================
// GETTERS / SETTERS
//===================================================

/**
 */
Object.defineProperty( 
	Level.prototype, 
	"levelResultInfo", 
	{ get: function() { return this._levelResultInfo; } } );
	
/**
 */
Object.defineProperty( 
	Level.prototype, 
	"currentRoomIndex", 
	{ get: function() { return this._currentRoomIndex; } } );
	
	/**
 */
Object.defineProperty( 
	Level.prototype, 
	"state", 
	{ get: function() { return this._state; } } );
},{"../Common":2,"../game/Room":24,"../general/Global":31,"./TransformationEffect":27}],19:[function(require,module,exports){
var Common    = require( "../Common" );
var Powerup = require( "./Powerup" );
var OverflowTransformation = require( "./OverflowTransformation" );

//===================================================
// CONSTRUCTOR
//===================================================

function OverflowPowerup( room )
{
	Powerup.call( this, "overflow_powerup", "icon_overflow", room );
}
module.exports = OverflowPowerup;
OverflowPowerup.prototype = Object.create( Powerup.prototype );
OverflowPowerup.prototype.constructor = OverflowPowerup;


//===================================================
// PUBLIC METHODS
//===================================================

OverflowPowerup.prototype.pickup = function()
{
	if ( this.taken ) return;
	
	Powerup.prototype.pickup.call( this );
	
	this._room.level.setTransformation( new OverflowTransformation( this._room ) );
}
},{"../Common":2,"./OverflowTransformation":21,"./Powerup":23}],20:[function(require,module,exports){
var Common = require( "../Common" );
var GameObject = require( "./GameObject" );

/**
 * @constructor
 */
function OverflowShot( direction, room )
{
	GameObject.call( this, "OverflowShot" );
	
	this._assetManager = p3.AssetManager.instance;
	
	this._sprite = null;
	this._room = room;
	this._direction = direction;
	this._hSpeed = 600; // px/s
	this._collisions = {
			left         : false,
			right        : false
		};
}
module.exports = OverflowShot;
OverflowShot.prototype = Object.create( GameObject.prototype );
OverflowShot.prototype.constructor = OverflowShot;

OverflowShot.prototype.init = function( x, y )
{
	// Spawn position
	this.x = x;
	this.y = y;	

	// Sprite.
	this._sprite = new PIXI.Sprite( this._assetManager.getTexture( "projectile_overflow" ) );
	this._sprite.anchor = new PIXI.Point( 0.5, 0.5 );
	this.addChild( this._sprite );	
	this._sprite.scale.x = Math.abs( this._sprite.scale.x ) * this._direction;

	// Collider
	this.collisionRect = new PIXI.Rectangle( -this._sprite.width * 0.5, -this._sprite.height * 0.5, this._sprite.width, this._sprite.height );
	this._enemyCollisionRect = new PIXI.Rectangle( -this._sprite.width * 0.5, -this._sprite.height * 0.75, this._sprite.width, this._sprite.height * 1.25 );
	//this.drawCollision();
}

OverflowShot.prototype.update = function()
{
	var dx = this._hSpeed * p3.Timestep.deltaTime * this._direction;

	// Reset collisions
	this._collisions.left         = false;
	this._collisions.right        = false;

	// Blocks horizontal collisions
	if ( dx != 0 )
	{
		if ( dx > 0 )
			var rayOrigins = this.getRightRayOrigins();
		else
			var rayOrigins = this.getLeftRayOrigins();

		var ray = new PIXI.Point( dx + this.skinWidth * Math.sign( dx ), 0 );
		for ( var r = 0; r < rayOrigins.length && dx != 0; r++ )
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[ r ];
			// avatarP1.y += movement.y;
			var avatarP2 = new PIXI.Point( avatarP1.x + ray.x, avatarP1.y + ray.y );

			for ( var b = 0; b < this._room.blocks.length; b++ )
			{
				if ( dx > 0 && !this._room.blocks[ b ].config.collisions.left ) continue;
				if ( dx < 0 && !this._room.blocks[ b ].config.collisions.right ) continue;

				// Segment vertices
				var blockP1 = new PIXI.Point( this._room.blocks[ b ].config.x + ( dx < 0 ? this._room.blocks[ b ].config.width : 0 ), this._room.blocks[ b ].config.y );
				var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this._room.blocks[ b ].config.height );

				// Line-line collision detection
				var intersection = this.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
				if ( intersection )
				{
					var distance =  intersection.x - avatarP1.x - this.skinWidth * Math.sign( dx );

					if ( dx > 0 )
						this._collisions.right = true;
					else
						this._collisions.left = true;

					dx = distance;

					// Avoid floating point errors
					if ( Math.closeEnough( dx, 0 ) )
					{
						dx = 0;
						break;
					}

					// Decrease the length of future raycasts
					avatarP2.x -= ray.x;
					ray.x = distance + this.skinWidth * Math.sign( dx );
					avatarP2.x += ray.x;
				}
			}
		}
	}
	
	// Destroy the shot.
	if ( this._collisions.right || this._collisions.left )
		this.isGarbage = true;
	if ( !this.isGarbage )
		this.x += dx;
}

Math.EPSILON = 1e-6;

/**
 * Determines whether the two floating-point values f1 and f2 are close enough together that they can be considered equal.
 *
 * @param {number} f1
 * @param {number} f2
 * @returns {boolean}
 */
Math.closeEnough = function(f1, f2)
{
	return Math.abs((f1 - f2) / ((f2 == 0.0) ? 1.0 : f2)) < Math.EPSILON;
}


Object.defineProperty(
	OverflowShot.prototype, 
	"enemyCollisionRect", 
	{ get: function() { return this._enemyCollisionRect; } } );
},{"../Common":2,"./GameObject":17}],21:[function(require,module,exports){
var Common    = require( "../Common" );
var Transformation = require( "./Transformation" );
var OverflowShot = require( "./OverflowShot" );

var g_overflowTransformation = null;

/**
 * @constructor
 */
function OverflowTransformation( room )
{
	Transformation.call( this, room );	
	this._id = this.TRANSFORMATION_ID_OVERFLOW;
	
	
	this.STATE_FINDING_TARGET = 0;
	this.STATE_SHOOTING = 1;
	
	this.RELOADING_TIME = .75;
	this.SHOOT_RANGE = 400;
	
	this._reloadingTimer = this.RELOADING_TIME;
	this._state = this.STATE_FINDING_TARGET;
	
	g_overflowTransformation = this;
}
module.exports = OverflowTransformation;
OverflowTransformation.prototype = Object.create( Transformation.prototype );
OverflowTransformation.prototype.constructor = OverflowTransformation;


OverflowTransformation.prototype.update = function()
{	
	Transformation.prototype.update.call( this );
	
	
	if ( this._reloadingTimer < this.RELOADING_TIME )
		this._reloadingTimer += p3.Timestep.deltaTime; 
	
	var avatar = this._room.avatar;
	if ( this._state == this.STATE_FINDING_TARGET && avatar.velocity.y < avatar.landSpeed && !avatar.isLanding && avatar.currentSpineAnimation.name != "land_to_run" )
	{		
		var avatarDirection = Math.sign( avatar.spineContainer.scale.x );
		
		// Look for enemies at range and shoot.
		// Find the ray origin.
		var avatarP1 = null;	
		if ( avatarDirection > 0 )
		{
			avatarP1 = new PIXI.Point (
				avatar.x + avatar.collisionRect.x + avatar.collisionRect.width - avatar.skinWidth,
				avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .4 );
		}
		else
		{
			avatarP1 = new PIXI.Point (
				avatar.x + avatar.collisionRect.x + avatar.collisionRect.width,
				avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .4 );
		}	
		
		// Raycast for blocks that obstruct Ben's sightline.
		var isEnemyDetected = false;
		var avatarP2 = new PIXI.Point( avatarP1.x + avatarDirection * this.SHOOT_RANGE, avatarP1.y );
		// DEBUG:
		//this._room._debugDraw.moveTo( avatarP1.x, avatarP1.y );
		//this._room._debugDraw.lineTo( avatarP2.x, avatarP2.y );
		
		// Raycast enemies.
		var detectedEnemyX = null;
		for ( var i = 0; i < this._room.objects.dangers.length; ++i )
		{
			var dangerAux = this._room.objects.dangers[ i ];
			if ( dangerAux.targetCollisionRect != null )
			{
				// Block segment P1 - P2.
				var dangerP1 = new PIXI.Point( 
					dangerAux.x + dangerAux.targetCollisionRect.x + ( avatarDirection < 0 ? dangerAux.targetCollisionRect.width : 0 ), 
					dangerAux.y + dangerAux.targetCollisionRect.y );
				var dangerP2 = new PIXI.Point( dangerP1.x, dangerP1.y + dangerAux.targetCollisionRect.height );
				
				// DEBUG:
				//this._room._debugDraw.moveTo( dangerP1.x, dangerP1.y );
				//this._room._debugDraw.lineTo( dangerP2.x, dangerP2.y );

				// Line-line collision detection
				if ( avatar.lineLineCollision( avatarP1, avatarP2, dangerP1, dangerP2 ) )
				{				
					detectedEnemyX = dangerP1.x;
				
					break;
				}
			}
		}
		
		if ( detectedEnemyX != null )
		{
			var isSightlineObstructed = false;
			for ( var i = 0; i < this._room.blocks.length; ++i )
			{
				// Block segment P1 - P2.
				var blockP1 = new PIXI.Point( 
					this._room.blocks[ i ].config.x + ( avatarDirection < 0 ? this._room.blocks[ i ].config.width : 0 ), 
					this._room.blocks[ i ].config.y );
				var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this._room.blocks[ i ].config.height );

				// Line-line collision detection
				if ( avatar.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 )
					&& ( avatarDirection < 0 && blockP1.x > detectedEnemyX || avatarDirection > 0 && blockP1.x < detectedEnemyX ) )
				{
					isSightlineObstructed = true;
					
					// DEBUG:
					//this._room._debugDraw.moveTo( blockP1.x, blockP1.y );
					//this._room._debugDraw.lineTo( blockP2.x, blockP2.y );
				
					break;
				}
			}		
							
			if ( !isSightlineObstructed && this._reloadingTimer >= this.RELOADING_TIME ) 
			{			
				avatar.spine.state.setAnimationByName( 1, "shoot", false );
				avatar.spine.state.onEvent = 
					function( track, event ) 
					{
						if ( event.data.name == "shoot" )
							g_overflowTransformation.shoot();
					};
			
				this._state = this.STATE_SHOOTING;
			}
		}
	}
}

OverflowTransformation.prototype.shoot = function()
{
	// Sfx.
	p3.AudioManager.instance.playSound( [ "sfx_overflow_shoot_water_short_00", "sfx_overflow_shoot_water_short_01" ] );

	// Find shot origin.
	var avatar = this._room.avatar;
	var avatarDirection = Math.sign( avatar.spineContainer.scale.x );							
	var shotOrigin = null;	
	if ( avatarDirection < 0 )
	{
		shotOrigin = new PIXI.Point(
			avatar.x + avatar.collisionRect.x - avatar.collisionRect.width * 3.0,
			avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .15 );
	}
	else
	{
		shotOrigin = new PIXI.Point(
			avatar.x + avatar.collisionRect.x + avatar.collisionRect.width * 4.0,
			avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .15 );
	}	

	// Shoot at enemy.							
	var overflowShot = new OverflowShot( avatarDirection, this._room );
	overflowShot.init( shotOrigin.x, shotOrigin.y );
	
	this._room.objects.shots.push( overflowShot );
	this._room.addChild( overflowShot );
	
	this._reloadingTimer = 0;
	this._state = this.STATE_FINDING_TARGET;
}

OverflowTransformation.prototype.onWaterfallCollision = function()
{
	// Under waterfall animation.
	var avatar = this._room.avatar;
	if ( avatar.currentAnimation == "run_level" )
	{
		// Sfx.
		p3.AudioManager.instance.playSound( "sfx_overflow_splash_00" );
	
		avatar.setAnimation( "waterfall", true );
	}
			
	return false;
}
},{"../Common":2,"./OverflowShot":20,"./Transformation":26}],22:[function(require,module,exports){
var Common    = require( "../Common" );
var GameObject = require( "./GameObject" );

/**
 * @constructor
 */
function ParticleSystem( arrParticleImageId, jsonConfigId )
{
	GameObject.call( this, "ps" );
	
	this._assetManager = p3.AssetManager.instance;	
		
	var arrParticleImage = [];
	for ( var i = 0; i < arrParticleImageId.length; ++i )
		arrParticleImage.push( this._assetManager.getTexture( arrParticleImageId[ i ] ) );
	this._ps = new cloudkid.Emitter( this, arrParticleImage, this._assetManager.getJSON( jsonConfigId ) );
	this._ps.emit = true;
}
module.exports = ParticleSystem;
ParticleSystem.prototype = Object.create(GameObject.prototype);
ParticleSystem.prototype.constructor = ParticleSystem;

ParticleSystem.prototype.init = function( x, y )
{
	this.x = x;
	this.y = y;
}

ParticleSystem.prototype.update = function()
{
	this._ps.update( p3.Timestep.deltaTime );
}
},{"../Common":2,"./GameObject":17}],23:[function(require,module,exports){
var Common    = require( "../Common" );
var GameObject = require( "./GameObject" );

//===================================================
// CONSTRUCTOR
//===================================================

function Powerup( id, powerupIconId, room )
{
	GameObject.call( this, id );
	
	this._room = room;
	this._assetManager = p3.AssetManager.instance;
	this.taken = false;
	this.pickupPS = new cloudkid.Emitter( this, [ this._assetManager.getTexture( "pickup_00" ) ], this._assetManager.getJSON( "particle_coin_collect_burst" ) );
	this.pickupPS.emit = false;	
	
	// TODO: Use powerup sprite.
	this.sprite        = new PIXI.Sprite( this._assetManager.getTexture( powerupIconId ) );
	this.sprite.anchor = new PIXI.Point( 0.5, 0.5 );
	this.sprite.y      = 0;
	this.sprite.scale  = new PIXI.Point( 0.5, 0.5 );
	this.addChild( this.sprite );

	this.collisionRect = new PIXI.Rectangle( -16, -16, 32, 64 );
	
	// Events.
	this.signals.onPowerupCollected = new signals.Signal();
	this.signals.onPowerupCollected.add( this._room.onPowerupCollected, this._room );
}
module.exports = Powerup;
Powerup.prototype = Object.create( GameObject.prototype );
Powerup.prototype.constructor = Powerup;


//===================================================
// PUBLIC METHODS
//===================================================

Powerup.prototype.init = function( x, y, tileColumn )
{
	this.x = x;
	this.y = y - 8;
	
	// this.drawCollision();
	
	var tl = new TimelineMax();
	tl.to( this, .75, { y:this.y-8, ease:Quad.easeInOut, yoyo:true, repeat:-1 }, tileColumn * .2 / 8 );
	Common.animator.add( tl );	
}


Powerup.prototype.update = function()
{
	this.pickupPS.update( p3.Timestep.deltaTime );
}

Powerup.prototype.pickup = function()
{
	this.taken = true;
	this.pickupPS.emit = true;
	
	var tl = new TimelineMax();
	tl.to( this.sprite, 0.25, { alpha:0, ease:Sine.easeIn }, 0 );
	tl.to( this.sprite.scale, 0.25, { x:0, y:0, ease:Sine.easeIn }, 0 );
	Common.animator.add( tl );	

	this.signals.onPowerupCollected.dispatch();
}
},{"../Common":2,"./GameObject":17}],24:[function(require,module,exports){
var Common = require( "../Common" );
var Avatar = require( "./Avatar" );
var SplineLayer = require( "../game/SplineLayer" );
var Block = require( "./Block" );
var Door = require( "./Door" );
var Enemy = require( "./Enemy" );
var OverflowPowerup = require( "./OverflowPowerup" );
var CannonboltPowerup = require( "./CannonboltPowerup" );
var UpgradePowerup = require( "./UpgradePowerup" );
var FourarmsPowerup = require( "./FourarmsPowerup" );
var Coin = require( "./Coin" );
var BossGun = require( "./BossGun" );
var Global = require( "../general/Global" );
var ParticleSystem = require( "./ParticleSystem" );


//===================================================
// CONSTRUCTOR
//===================================================

function Room( level, data )
{
	PIXI.Container.call( this );
	
	this._assetManager = p3.AssetManager.instance;
	this._debug    = false;
	this._level    = level;
	this._data     = data;
	this._tileSize = 0;

	this._layers = [];
	this._tiles  = {};
	this._splineLayer = null;
	
	this._wallBlocks = []; // Blocks included in Upgrade's wall detection.
	this._crackedWallBlocks = [];
	this._crackedPlatformBlocks = [];
	this._blocks  = [];
	this._objects =
	{
		doors : [],
		coins : [],
		powerups : [],
		dangers : [],
		shots : [],
		waterfalls : []
	}
	this._enemies = [];
	this._particleSystems = [];
	this._waterfallParticleSystems = [];

	this._pauseEntities = false;
	
	// Create a data structure to store the room result.
	this._roomResultInfo = { 
		steps:0, 
		collectedCoins:0, 
		collectedPowerups:0, 
		destroyedBlocks:0,
		killedEnemies:0 };
}
module.exports = Room;
Room.prototype = Object.create(PIXI.Container.prototype);
Room.prototype.constructor = Room;


//===================================================
// PUBLIC METHODS
//===================================================

Room.prototype.init = function()
{
	// Grid locations for the waterfall particle systems.
	var arrWaterfallPsGridLoc = {};

	this._tileSize = Common.STAGE_HEIGHT / this._data.height;
	this.resize();
	
	// Bg
	// this.bg = new PIXI.Sprite(Common.generatedTextures['whiteSquare']);
	this.bg = new PIXI.Sprite(this._assetManager.getTexture( this._level.data.bg ));	
	this.bg.width  = this._tileSize * this._data.width;
	this.bg.height = this._tileSize * this._data.height;
	this.addChild(this.bg);

	// Backgrounds
	var layers =
	[
		// TODO: DEBUG: Don't show until fixed.
		/*{
			name    : 'backgrounds',
			visible : true,
			skip    : [],
			tileSize : 32
		},*/
		{
			name    : 'dangers',
			visible : false,
			skip    : [],
			tileSize : 32
		},
		{
			name    : 'informations',
			visible : false,
			skip    : [],
			tileSize : 32
		},
		{
			name    : 'objects',
			visible : false,
			skip    : [],
			tileSize : 32
		},
		{
			name     : 'platforms',
			visible  : true,
			skip     : [56,57,58,59],
			tileSize : 64
		}
	];
	

	// Get the waterfall textures.
	var waterfallTextures = [];
	for ( var i = 0; i < 4; i++ ) 
	{
		var texture = this._assetManager.getTexture( "water_tile_" + ( i + 1 ) );
		waterfallTextures.push( texture );
	};
	
	for ( var l = 0; l < layers.length; l++ )
	{
		var layer = layers[ l ].name;
		this._tiles[ layer ] = {};

		// Count number of quads to draw
		var nTiles = 0;
		for ( var i = 0; i < this._data[ layer ].length; i++ )
		{
			if ( this._data[ layer ][ i ] == 0 ) continue;
			if ( layers[ l ].skip.indexOf( this._data[ layer ][ i ] ) != -1 ) continue;
			
			nTiles++;
		}

		// Draw the mesh
		var texture  = this._assetManager.getTexture( this._data.textures[ layer ] );
		var vertices = new Float32Array( 8 * nTiles );
		var uvs      = new Float32Array( 8 * nTiles );
		var indices  = new Uint16Array( 6 * nTiles );
		var textureTileWidth  = layers[ l ].tileSize / texture.width;
		var textureTileHeight = layers[ l ].tileSize / texture.height;
		var quads   = 0;

		// Offset the texture coordinates a bit to avoid getting the color of the adjacent tiles
		var clampX1 = textureTileWidth  * 0.01;
		var clampX2 = textureTileWidth  * 0.01;
		var clampY1 = textureTileHeight * 0.01;
		var clampY2 = textureTileHeight * 0.01;
	
		for ( var i = 0; i < this._data[ layer ].length; i++ )
		{
			var tile = this._data[ layer ][ i ];
			if ( tile == 0 ) continue;
						
			// Get column and row indexes in the room grid.
			var roomGridX = i % this._data.width;
			var roomGridY = Math.floor( i / this._data.width );
			// Store tile data by tile id.
			if ( !this._tiles[ layer ][ tile ] )
				this._tiles[ layer ][ tile ] = [];
			this._tiles[ layer ][ tile ].push( {x:roomGridX, y:roomGridY, meshQuadIndex:quads} );
			
			if ( layers[ l ].skip.indexOf( tile ) != -1 ) 
			{
				// Don't draw the tiles of the waterfall as part of the Mesh with the level geometry.
				if ( tile >= 56 || tile <= 59 )
				{
					var waterfall = new PIXI.extras.MovieClip( waterfallTextures );
					waterfall.animationSpeed = 0.5;
					waterfall.scale = new PIXI.Point( this._tileSize / layers[ l ].tileSize, this._tileSize / layers[ l ].tileSize );
					waterfall.position = new PIXI.Point( roomGridX * this._tileSize, roomGridY * this._tileSize );
					waterfall.play();	

					if ( arrWaterfallPsGridLoc[ roomGridX.toString() ] == null )
						arrWaterfallPsGridLoc[ roomGridX.toString() ] = [];	
					arrWaterfallPsGridLoc[ roomGridX.toString() ].push( roomGridY );	
					
					this.addChild( waterfall );
				}
			
				continue;
			}

			var textureIndex =
			{
				x: ( tile % ( texture.width / layers[ l ].tileSize ) ),
				y: ( Math.floor( tile / ( texture.width / layers[ l ].tileSize ) ) )
			};

			vertices.set(
			[
				roomGridX * this._tileSize,     roomGridY * this._tileSize,
				(roomGridX+1) * this._tileSize, roomGridY * this._tileSize,
				(roomGridX+1) * this._tileSize, (roomGridY+1) * this._tileSize,
				roomGridX * this._tileSize,     (roomGridY+1) * this._tileSize
			], quads * 8 );

			uvs.set(
			[
				textureIndex.x     * textureTileWidth + clampX1, textureIndex.y     * textureTileHeight-1 + clampY1,
				(textureIndex.x+1) * textureTileWidth - clampX2, textureIndex.y     * textureTileHeight-1 + clampY1,
				(textureIndex.x+1) * textureTileWidth - clampX2, (textureIndex.y+1) * textureTileHeight-1 - clampY2,
				textureIndex.x     * textureTileWidth + clampX1, (textureIndex.y+1) * textureTileHeight-1 - clampY2
			], quads * 8 );

			indices.set( [0 + 4*quads, 1 + 4*quads, 2 + 4*quads, 0 + 4*quads, 2 + 4*quads, 3 + 4*quads], quads * 6 );
			quads++;
		}

		if ( layers[ l ].visible )
		{
			this._layers[ layer ] = new PIXI.mesh.Mesh (
				texture,
				vertices,
				uvs,
				indices,
				PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES );
				
			this.addChild( this._layers[ layer ] );
		}
	}
	
	// Waterfall particle systems.
	for ( key in arrWaterfallPsGridLoc )
	{
		for ( var i = 0; i < arrWaterfallPsGridLoc[ key ].length; ++i )
		{
			if ( i == arrWaterfallPsGridLoc[ key ].length - 1 && arrWaterfallPsGridLoc[ key ][ i ] < this._data.height - 1
				|| i < arrWaterfallPsGridLoc[ key ].length - 1 && arrWaterfallPsGridLoc[ key ][ i + 1 ] - arrWaterfallPsGridLoc[ key ][ i ] > 1 )
			{
				var ps = new ParticleSystem( 
							[ "particle_waterfall_001",
							"particle_waterfall_002",
							"particle_waterfall_003",
							"particle_waterfall_004",
							"particle_waterfall_005",
							"particle_waterfall_006" ], 
							"particle_waterfall" );
				ps.init( key * this._tileSize - this._tileSize * .25, arrWaterfallPsGridLoc[ key ][ i ] * this._tileSize + this._tileSize );
				ps.scale = new PIXI.Point( .6, .6 );
				this.addChild( ps );
				this._waterfallParticleSystems.push( ps );
			}
		}
	}
	
	// Blocks
	for ( id in this._tiles.platforms )
	{
		id = parseInt( id );
		for ( var i = 0; i < this._tiles.platforms[ id ].length; i++ )
		{
			var block = null;

			if ( id >= 1 && id <= 15 )
			{
				// Platform but player would be able to walk through it when going up.
				block = new Block
				(
					this,
					id,
					{
						x: this._tiles.platforms[id][i].x * this._tileSize,
						y: this._tiles.platforms[id][i].y * this._tileSize,
						width  : this._tileSize,
						height : this._tileSize/4,
						collisions :
						{
							top    : true,
							bottom : false,
							right  : false,
							left   : false
						}
					}
				);
			}
			else if ( id >= 16 && id <= 21 )
			{
				// Solid platform, player reverses at it.
				block = new Block
				(
					this,
					id,
					{
						x: this._tiles.platforms[id][i].x * this._tileSize,
						y: this._tiles.platforms[id][i].y * this._tileSize,
						width  : this._tileSize,
						height : this._tileSize,
						collisions :
						{
							top    : true,
							bottom : true,
							right  : id == 19,
							left   : id == 16
						}
					}
				);
				
				//if ( id == 19 || id == 16 )
					this._wallBlocks.push( block );
			}
			else if ( id >= 32 && id <= 35 )
			{
				// Cracked platform.
				block = new Block
				(
					this,
					id,
					{
						x : this._tiles.platforms[id][i].x * this._tileSize,
						y : this._tiles.platforms[id][i].y * this._tileSize,
						width  : this._tileSize,
						height : this._tileSize,
						collisions :
						{
							top    : true,
							bottom : true,
							right  : id == 35,
							left   : id == 32
						},
						meshQuadIndex : this._tiles.platforms[id][i].meshQuadIndex
					}
				);
				
				this._crackedPlatformBlocks.push( block );
				//if ( id == 35 || id == 32 )
					this._wallBlocks.push( block );
			}
			else if ( id >= 36 && id <= 39 )
			{
				// Cracked wall.
				block = new Block
				(
					this,
					id,
					{
						x : this._tiles.platforms[id][i].x * this._tileSize,
						y : this._tiles.platforms[id][i].y * this._tileSize,
						width  : this._tileSize,
						height : this._tileSize,
						collisions :
						{
							top    : false,
							bottom : false,
							right  : true,
							left   : true
						},
						meshQuadIndex : this._tiles.platforms[id][i].meshQuadIndex
					}
				);
				
				this._crackedWallBlocks.push( block );
				this._wallBlocks.push( block );
			}
			else if ( id >= 40 && id <= 43 )
			{
				// Left wall.
				block = new Block
				(
					this,
					id,
					{
						x: this._tiles.platforms[id][i].x * this._tileSize,
						y: this._tiles.platforms[id][i].y * this._tileSize,
						width  : this._tileSize/2,
						height : this._tileSize,
						collisions :
						{
							top    : false,
							bottom : false,
							right  : true, // TODO:
							left   : true
						}
					}
				);
				
				this._wallBlocks.push( block );
			}
			else if ( id >= 44 && id <= 51 )
			{
				// Right wall.
				block = new Block
				(
					this,
					id,
					{
						x: this._tiles.platforms[id][i].x * this._tileSize + this._tileSize/2,
						y: this._tiles.platforms[id][i].y * this._tileSize,
						width  : this._tileSize/2,
						height : this._tileSize,
						collisions :
						{
							top    : false,
							bottom : false,
							right  : true, // TODO:
							left   : true
						}
					}
				);
				
				this._wallBlocks.push( block );
			}
			else if ( id >= 56 && id <= 59 )
			{
				// Waterfall.
				block = new Block
				(
					this,
					id,
					{
						x: this._tiles.platforms[id][i].x * this._tileSize,
						y: this._tiles.platforms[id][i].y * this._tileSize,
						width  : this._tileSize,
						height : this._tileSize,
						collisions :
						{
							top    : false,
							bottom : true, // Some levels use waterfalls with empty gaps.
							right  : true,
							left   : true
						}
					}
				);
				
				this._wallBlocks.push( block );
			}

			if ( !!block )
			{
				block.init();
				
				if ( id >= 56 && id <= 59 )
					this._objects.waterfalls.push( block );
				else
					this._blocks.push( block );
				
				this.addChild( block );
			}
		}
	}

	// Add doors
	for ( id in this._tiles.informations )
	{
		id = parseInt(id);
		
		for(var i = 0; i < this._tiles.informations[id].length; i++)
		{
			switch(id)
			{
				case 1:
				case 2:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
					// Door
					var startDoorId = 2 * this._level.currentRoomIndex + 1;
					var door = new Door( id, this );
					door.init((this._tiles.informations[id][i].x) * this._tileSize, (this._tiles.informations[id][i].y+1) * this._tileSize, id == startDoorId ? "door_Entry" : "door_Exit");
					this._objects.doors.push(door)
					
					this.addChild(door);
					break;
					
				case 13:
					// Jump platform?
					break;
			}
		}
	}	
	
	// Add dangers.
	for ( id in this._tiles.dangers )
	{
		id = parseInt( id );
		
		for(var i = 0; i < this._tiles.dangers[ id ].length; i++)
		{
			switch( id )
			{
				case 1:
				{
					// Enemy.
					var enemy = new Enemy( this, Common.characterAnimationData.char_enemy, -1 );					
					enemy.init( 
						( this._tiles.dangers[ id ][ i ].x ) * this._tileSize, 
						( this._tiles.dangers[ id ][ i ].y ) * this._tileSize );
					enemy.spineContainer.y = 15;
					
					this._objects.dangers.push( enemy )					
					this.addChild( enemy );
					
					break;
				}
			
				case 2:
				{
					// Enemy.
					var enemy = new Enemy( this, Common.characterAnimationData.char_boss, 1 );
					enemy.gun = new BossGun( enemy, this );
					enemy.collisionRect = new PIXI.Rectangle( -30, -50, 60, 70 );
					enemy.init( 
						( this._tiles.dangers[ id ][ i ].x ) * this._tileSize, 
						( this._tiles.dangers[ id ][ i ].y ) * this._tileSize );
					enemy.spineContainer.x = 10;
					enemy.spineContainer.y = 27;
					
					this._objects.dangers.push( enemy )					
					this.addChild( enemy );
					
					break;
				}
			}
		}
	}	
	
	// Spline
	this._splineLayer = new SplineLayer(this);
	this._splineLayer.init();
	this.addChild(this._splineLayer);

	// Avatar
	this._avatar = new Avatar( this );
	this._avatar.init();
	this._avatar.signals.onGameOver.add( this._level.onGameOver, this._level );
	this.addChild( this._avatar );	
	
	// Add objects
	for ( id in this._tiles.objects )
	{
		id = parseInt( id );
		
		for ( var i = 0; i < this._tiles.objects[ id ].length; i++ )
		{
			if ( id >= 2 && id <= 5 && this._level.levelResultInfo.arrPowerupId.indexOf( id ) < 0 )
				this._level.levelResultInfo.arrPowerupId.push( id );
		
			switch ( id )
			{
				case 1:
				{
					// Coin
					var coin = new Coin( this );
					coin.init( 
						( this._tiles.objects[ id ][ i ].x + 0.5 ) * this._tileSize, 
						( this._tiles.objects[ id ][ i ].y + 0.5 ) * this._tileSize,
						this._tiles.objects[ id ][ i ].x );
					this._objects.coins.push( coin );
					
					this.addChild(coin);
					
					break;
				}
					
				case 2:
				{
					// Powerup - Cannonbolt
					var cannonboltPowerup = new CannonboltPowerup( this );
					cannonboltPowerup.init( 
						( this._tiles.objects[ id ][ i ].x + 0.5 ) * this._tileSize, 
						( this._tiles.objects[ id ][ i ].y + 0.5 ) * this._tileSize,
						this._tiles.objects[ id ][ i ].x );
					this._objects.powerups.push( cannonboltPowerup );
					
					this.addChild( cannonboltPowerup );
					
					break;
				}
				
				case 3:
				{
					// Powerup - Overflow
					var overflowPowerup = new OverflowPowerup( this );
					overflowPowerup.init( 
						( this._tiles.objects[ id ][ i ].x + 0.5 ) * this._tileSize, 
						( this._tiles.objects[ id ][ i ].y + 0.5 ) * this._tileSize,
						this._tiles.objects[ id ][ i ].x );
					this._objects.powerups.push( overflowPowerup );
					
					this.addChild( overflowPowerup );
					
					break;
				}
				
				case 4:
				{
					// Powerup - Fourarms
					var fourarmsPowerup = new FourarmsPowerup( this );
					fourarmsPowerup.init( 
						( this._tiles.objects[ id ][ i ].x + 0.5 ) * this._tileSize, 
						( this._tiles.objects[ id ][ i ].y + 0.5 ) * this._tileSize,
						this._tiles.objects[ id ][ i ].x );
					this._objects.powerups.push( fourarmsPowerup );
					
					this.addChild( fourarmsPowerup );
					
					break;
				}					
				
				case 5:
				{				
					// Powerup - Upgrade
					var upgradePowerup = new UpgradePowerup( this );
					upgradePowerup.init( 
						( this._tiles.objects[ id ][ i ].x + 0.5 ) * this._tileSize, 
						( this._tiles.objects[ id ][ i ].y + 0.5 ) * this._tileSize,
						this._tiles.objects[ id ][ i ].x );
					this._objects.powerups.push( upgradePowerup );
					
					this.addChild( upgradePowerup );
					
					break;
				}	
			}
		}
	}
	
	// Grid
	if ( this._debug )
	{
		this.wireframe = new PIXI.Graphics();
		this.wireframe.lineStyle( 1, 0xff0000, 0.5 );

		for ( var i = 1; i < this._data.width; i++ )
		{
			var x = i * this._tileSize;
			var y = this._data.height * this._tileSize;
			this.wireframe.moveTo(x, 0);
			this.wireframe.lineTo(x, y);
		}

		for ( var i = 1; i < this._data.height; i++ )
		{
			var y = i * this._tileSize;
			var x = this._data.width * this._tileSize;
			this.wireframe.moveTo(0, y);
			this.wireframe.lineTo(x, y);
		}

		this.addChild ( this.wireframe );
	}

	// HitArea
	this._hitArea = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._hitArea.alpha = 0;
	this._hitArea.width = this._tileSize * this._data.width;
	this._hitArea.height = this._tileSize * this._data.height;
	this._hitArea.interactive = true;
	this.addChild(this._hitArea);

	this._hitArea.touchstart  = this._hitArea.mousedown  = this.onTouchStart.bind(this);
	this._hitArea.touchend    = this._hitArea.mouseup    = this.onTouchEnd.bind(this);
	this._hitArea.touchmove   = this._hitArea.mousemove  = this.onTouchMove.bind(this);
	
	// DEBUG:
	this._debugDraw = new PIXI.Graphics();
	this.addChild( this._debugDraw );
	
	this._pointerPS = new cloudkid.Emitter( this, [ this._assetManager.getTexture("particle_draw") ], this._assetManager.getJSON( "particle_draw" ) );
	this._pointerPS.emit = false;
}

Room.prototype.update = function()
{
	// DEBUG:
	this._debugDraw.clear();
	this._debugDraw.lineStyle( 2, 0x00ff00 );
	
	if ( !this._pauseEntities )
	{
		// Update game objects.		
		for ( var i = 0; i < this._enemies.length; i++ )
			this._enemies[ i ].update();
			
		for ( var i = 0; i < this._particleSystems.length; i++ )
			this._particleSystems[ i ].update();
		
		for ( var i = 0; i < this._objects.coins.length; i++ )
			this._objects.coins[ i ].update();
		
		for ( var i = 0; i < this._objects.powerups.length; i++ )
			this._objects.powerups[ i ].update();
			
		var arrDanger = [];
		for ( var i = 0; i < this._objects.dangers.length; i++ )
		{
			this._objects.dangers[ i ].update();
			if ( !this._objects.dangers[ i ].isGarbage )
				arrDanger.push( this._objects.dangers[ i ] );
			else
				this.removeChild( this._objects.dangers[ i ] );
		}
		this._objects.dangers = arrDanger;
			
		var arrShot = [];
		for ( var i = 0; i < this._objects.shots.length; i++ )
		{
			this._objects.shots[ i ].update();
			if ( !this._objects.shots[ i ].isGarbage )
				arrShot.push( this._objects.shots[ i ] );
			else
				this.removeChild( this._objects.shots[ i ] );
		}
		this._objects.shots = arrShot;
		
		this._avatar.update();
	}	
}

Room.prototype.endRoom = function( door )
{
	this._pauseEntities = true;
	
	p3.AudioManager.instance.stopSound( "sfx_draw_loop" );
	this._avatar.stopRunSfx();
	
	// Update level result.
	this._level.levelResultInfo.steps += this.avatar.stepCount;
	this._level.levelResultInfo.collectedCoins += this._roomResultInfo.collectedCoins;
	this._level.levelResultInfo.collectedPowerups += this._roomResultInfo.collectedPowerups;
	this._level.levelResultInfo.destroyedBlocks += this._roomResultInfo.destroyedBlocks;
	this._level.levelResultInfo.killedEnemies += this._roomResultInfo.killedEnemies;
	
	var tl = new TimelineMax(
	{
		onCompleteScope:this, 
		onComplete:function() 
		{ 
			if ( this._level.data.rooms.length -1 == this._level.currentRoomIndex )
				// Go to end level screen.
				this._level.parent.signals.requestedNextScreen.dispatch();
			else
				// Go to next room.
				this._level.loadNextRoom();
		}
	});
	tl.to( this._avatar, 1, {alpha:0, ease:Linear.easeNone}, 0.5 );
	Common.animator.add( tl );	
}

Room.prototype.resize = function()
{
	// Don't overlap the pause button with the game area.			
	var scaleFactor = 1;
	var pauseButtonHalfWidth = this._assetManager.getTexture( "btn_primary_medium_off" ).width * .5;
	
	if ( this._level.parent._getFirstButtonPositionRight() - pauseButtonHalfWidth < ( Common.STAGE_WIDTH + ( this._tileSize * this._data.width ) ) * .5 )
		scaleFactor = ( this._level.parent._getFirstButtonPositionRight() - pauseButtonHalfWidth - Common.STAGE_WIDTH * .5 ) / ( this._tileSize * this._data.width * .5 );
	this.x = Common.STAGE_WIDTH/2 -(this._tileSize * (this._data.width/2)) * scaleFactor;
	this.y = Common.STAGE_HEIGHT/2 -(this._tileSize * (this._data.height/2)) * scaleFactor;
	if ( scaleFactor < 1 )
		this.scale = new PIXI.Point( scaleFactor, scaleFactor );
}

Room.prototype.startLineDraw = function( x, y )
{
	this._splineLayer.startDraw( x, y );
	
	// Vfx.
	this._pointerPS.resetPositionTracking();
	this._pointerPS.spawnPos = new PIXI.Point( x, y );
	
	this._pointerPS.emit = true;
}

Room.prototype.moveLineDraw = function( x, y )
{
	this._splineLayer.draw( x, y );
	
	// Vfx. 
	this._pointerPS.updateSpawnPos( x, y );
	//this._pointerPS.emit = false;
	//this._pointerPS.emit = true;
}

Room.prototype.endLineDraw = function()
{
	this._splineLayer.endDraw();
	
	// Vfx.
	this._pointerPS.emit = false;
}

Room.prototype.updateStaticParticleSystems = function()
{
	// Pointer vfx.
	if ( this._pointerPS != null )
	{
		/*if ( this._splineLayer.isDrawing )
		{
			this._pointerPS.emit = false;
			this._pointerPS.emit = true;
		}*/
	
		this._pointerPS.update( p3.Timestep.deltaTime );
	}
	
	// Waterfalls.
	for ( var i = 0; i < this._waterfallParticleSystems.length; ++i )
		this._waterfallParticleSystems[ i ].update( p3.Timestep.deltaTime );
}

Room.prototype.isAllCoinsCollected = function()
{
	return this._objects.coins.length == this._roomResultInfo.collectedCoins;
}


//===================================================
// EVENTS
//===================================================

Room.prototype.onTouchStart = function(e)
{	
	var pos = e.data.getLocalPosition(this._hitArea);
	this.startLineDraw( pos.x * this.roomWidth, pos.y * this.roomHeight );	
	//console.log( ( pos.x * this.roomWidth ).toString() + " :: " + ( pos.y * this.roomHeight ).toString() );
}

Room.prototype.onTouchEnd = function(e)
{
	this.endLineDraw();
}

Room.prototype.onTouchMove = function(e)
{
	var pos = e.data.getLocalPosition(this._hitArea);

	if ( pos.x < 0 || pos.y < 0 || pos.x > 1 || pos.y > 1 )
		this._splineLayer.endDraw();
	else
		this._splineLayer.draw(pos.x * this.roomWidth, pos.y * this.roomHeight);
	
	// Vfx. 
	if ( this._splineLayer.isDrawing )
	{
		this._pointerPS.updateSpawnPos( pos.x * this.roomWidth, pos.y * this.roomHeight );
		//this._pointerPS.emit = false;
		//this._pointerPS.emit = true;
	}
}

Room.prototype.onEnemyKilled = function()
{
	this._roomResultInfo.killedEnemies += 1;
}

Room.prototype.onPowerupCollected = function()
{
	this._roomResultInfo.collectedPowerups += 1;
}

Room.prototype.onCoinCollected = function()
{
	this._roomResultInfo.collectedCoins += 1;
}

Room.prototype.onBlockDestroyed = function( blockCount )
{
	this._roomResultInfo.destroyedBlocks += blockCount;
}


//===================================================
// GETTERS / SETTERS
//===================================================

Object.defineProperty(
	Room.prototype, 
	"roomWidth", 
	{ get: function() { return this._tileSize * this._data.width; } } );

Object.defineProperty(
	Room.prototype, 
	"roomHeight", 
	{ get: function() { return this._tileSize * this._data.height; } } );

Object.defineProperty(
	Room.prototype, 
	"tiles", 
	{ get: function() { return this._tiles; } } );
	
Object.defineProperty(
	Room.prototype, 
	"tileSize", 
	{ get: function() { return this._tileSize; } } );

Object.defineProperty(
	Room.prototype, 
	"splineLayer", 
	{ get: function() { return this._splineLayer; } } );
	
Object.defineProperty(
	Room.prototype, 
	"blocks", 
	{ get: function() { return this._blocks; } } );
	
Object.defineProperty(
	Room.prototype, 
	"wallBlocks", 
	{ get: function() { return this._wallBlocks; } } );
	
Object.defineProperty(
	Room.prototype, 
	"crackedWallBlocks", 
	{ 	get: function() { return this._crackedWallBlocks; },
		set: function(value) { this._crackedWallBlocks = value; } }	);
	
Object.defineProperty(
	Room.prototype, 
	"crackedPlatformBlocks", 
	{ 	get: function() { return this._crackedPlatformBlocks; },
		set: function(value) { this._crackedPlatformBlocks = value; } }	);
	
Object.defineProperty(
	Room.prototype, 
	"objects", 
	{ get: function() { return this._objects; } } );
	
Object.defineProperty(
	Room.prototype, 
	"level", 
	{ get: function() { return this._level; } } );
	
Object.defineProperty(
	Room.prototype, 
	"avatar", 
	{ get: function() { return this._avatar; } } );
	
Object.defineProperty(
	Room.prototype, 
	"layers", 
	{ get: function() { return this._layers; } } );
	
Object.defineProperty(
	Room.prototype, 
	"particleSystems", 
	{ get: function() { return this._particleSystems; } } );
},{"../Common":2,"../game/SplineLayer":25,"../general/Global":31,"./Avatar":6,"./Block":7,"./BossGun":8,"./CannonboltPowerup":10,"./Coin":12,"./Door":13,"./Enemy":14,"./FourarmsPowerup":15,"./OverflowPowerup":19,"./ParticleSystem":22,"./UpgradePowerup":28}],25:[function(require,module,exports){
var Common = require("../Common");
var Room = require("../game/Room");

/**
 * @constructor
 */
function SplineLayer(room)
{
	// Parent.
	PIXI.Container.call(this);
	
	
	// Attributes.
	this.room     = room;

	this._assetManager = p3.AssetManager.instance;
	
	this.splines  = [];
	this.currentSpline = null;
	this.isDrawing = false;

	// Wireframe
	if(this.room.debug)
	{
		this.wireframe = new PIXI.Graphics();
		this.wireframe.lineStyle(5, 0xff0000);
		this.addChild(this.wireframe);
	}

	// Textures
	this.textures = new PIXI.Container();
	this.textureSegment = this._assetManager.getTexture("lineGreen_01")
	this.textureCap     = this._assetManager.getTexture("lineGreen_00")
	this.addChild(this.textures);
	
	this.splineSegmentCount = 0;
	
	
	// Constants.
	this.MAX_SPLINE_TEXTURE_COUNT = 1000; // For performance issues.
}

module.exports = SplineLayer;
SplineLayer.prototype = Object.create(PIXI.Container.prototype);
SplineLayer.prototype.constructor = SplineLayer;

SplineLayer.prototype.init = function()
{

}

/**
 */
SplineLayer.prototype.startDraw = function(x, y)
{
	if ( this.splineSegmentCount > this.MAX_SPLINE_TEXTURE_COUNT ) return;

	this.isDrawing = true;
	this.currentSpline = new Spline(this,x,y);
	
	// Sfx.
	p3.AudioManager.instance.playSound( "sfx_draw_start" );	
	p3.AudioManager.instance.playSound( "sfx_draw_loop", { loop:true } );	
}

/**
 */
SplineLayer.prototype.endDraw = function()
{
	if(!this.isDrawing) return;
	
	this.currentSpline.drawCapEnd();
	this.isDrawing = false;
	
	// Sfx.
	p3.AudioManager.instance.stopSound( "sfx_draw_loop" );	
	p3.AudioManager.instance.playSound( "sfx_draw_stop" );	
}

/**
 */
SplineLayer.prototype.draw = function(x, y)
{
	if(!this.isDrawing) return;
	if ( this.splineSegmentCount > this.MAX_SPLINE_TEXTURE_COUNT ) 
	{
		this.endDraw(); 
		return;
	}

	var lengthBefore = this.currentSpline.length;

	this.currentSpline.addPoint(x,y);

	if(lengthBefore == 1 && this.currentSpline.length > 1)
	{
		this.splines.push(this.currentSpline);
	}

}

SplineLayer.prototype.clear = function()
{
	this.splines = [];
	this.textures.removeChildren();
	this.splineSegmentCount = 0;
	this.currentSpline = null;
}

/**
 *
 */
function Spline(layer,x,y)
{
	this.layer         = layer;
	this.points        = [{x:x, y:y}];
	this.segmentLength = 15;
	this.segmentWidth  = 8;
}

/**
 */
Spline.prototype.addPoint = function(x,y)
{
	var lastPoint = this.points[this.points.length-1];

	var distance = Math.sqrt(Math.pow(lastPoint.x - x,2) + Math.pow(lastPoint.y - y,2));
	if(distance < this.segmentLength) return;

	for(var i = 0; i < Math.floor(distance/this.segmentLength); i++)
	{
		var drawnPoint =
		{
			x: lastPoint.x + (x-lastPoint.x) * ((this.segmentLength * (i+1))/distance),
			y: lastPoint.y + (y-lastPoint.y) * ((this.segmentLength * (i+1))/distance)
		}
		this.points.push(drawnPoint);

		if(this.points.length == 2)
		{
			this.layer.splines.push(this);
		}

		// Draw the segment
		this.drawSegment(this.points[this.points.length-2], this.points[this.points.length-1]);
	
		// Draw the cap if necessary
		this.drawCapStart();

		// Draw the segment debug line
		if(this.layer.room.debug)
		{
			this.layer.wireframe.moveTo(lastPoint.x, lastPoint.y);
			this.layer.wireframe.lineTo(drawnPoint.x, drawnPoint.y);
			this.layer.wireframe.drawCircle(drawnPoint.x, drawnPoint.y, 3);
		}
	}
}

/**
 */
Spline.prototype.drawSegment = function(p1, p2)
{
	this.layer.splineSegmentCount += 1;

	var texture  = this.layer.textureSegment;
	var vertices = new Float32Array(8);
	var uvs      = new Float32Array(8);
	var indices  = new Uint16Array(6);

	var p1 = {x:p1.x, y:p1.y}; // Clone objects
	var p2 = {x:p2.x, y:p2.y};
	var vSegmentNorm = new PIXI.Point((p2.x - p1.x) / this.segmentLength, (p2.y - p1.y) / this.segmentLength);
	var vSegmentPerp = new PIXI.Point(vSegmentNorm.y, -vSegmentNorm.x);

	p1.x -= vSegmentNorm.x * 0.5;
	p1.y -= vSegmentNorm.y * 0.5;
	p2.x += vSegmentNorm.x * 0.5;
	p2.y += vSegmentNorm.y * 0.5;

	vertices.set(
		[
			p1.x + vSegmentPerp.x * this.segmentWidth, p1.y + vSegmentPerp.y * this.segmentWidth,
			p2.x + vSegmentPerp.x * this.segmentWidth, p2.y + vSegmentPerp.y * this.segmentWidth,
			p2.x - vSegmentPerp.x * this.segmentWidth, p2.y - vSegmentPerp.y * this.segmentWidth,
			p1.x - vSegmentPerp.x * this.segmentWidth, p1.y - vSegmentPerp.y * this.segmentWidth
		], 0)

	uvs.set([0, 0, 1, 0, 1, 1, 0, 1], 0);
	indices.set([0, 1, 2, 0, 2, 3], 0);

	var mesh = new PIXI.mesh.Mesh
	(
		texture,
		vertices,
		uvs,
		indices,
		PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES
	);
	this.layer.textures.addChild(mesh);
}

/**
 */
Spline.prototype.drawCapStart = function()
{
	if(this.points.length != 2) return;

	var texture  = this.layer.textureCap;
	var vertices = new Float32Array(8);
	var uvs      = new Float32Array(8);
	var indices  = new Uint16Array(6);

	var p2 = {x:this.points[0].x, y:this.points[0].y};
	var p1 = {x:this.points[1].x, y:this.points[1].y};
	var vSegmentNorm = new PIXI.Point((p1.x - p2.x) / this.segmentLength, (p1.y - p2.y) / this.segmentLength);
	p1.x = p2.x - vSegmentNorm.x * this.segmentWidth;
	p1.y = p2.y - vSegmentNorm.y * this.segmentWidth;
	var vSegmentPerp = new PIXI.Point(vSegmentNorm.y, -vSegmentNorm.x);

	vertices.set(
		[
		p1.x + vSegmentPerp.x * this.segmentWidth, p1.y + vSegmentPerp.y * this.segmentWidth,
		p2.x + vSegmentPerp.x * this.segmentWidth, p2.y + vSegmentPerp.y * this.segmentWidth,
		p2.x - vSegmentPerp.x * this.segmentWidth, p2.y - vSegmentPerp.y * this.segmentWidth,
		p1.x - vSegmentPerp.x * this.segmentWidth, p1.y - vSegmentPerp.y * this.segmentWidth
		], 0)

	uvs.set([0, 0, 1, 0, 1, 1, 0, 1], 0);
	indices.set([0, 1, 2, 0, 2, 3], 0);

	var mesh = new PIXI.mesh.Mesh
	(
		texture,
		vertices,
		uvs,
		indices,
		PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES
	);

	this.layer.textures.addChild(mesh);
}

/**
 */
Spline.prototype.drawCapEnd = function(x,y)
{
	if(this.points.length < 2) return;

	// Draw the end cap
	var texture  = this.layer.textureCap;
	var vertices = new Float32Array(8);
	var uvs      = new Float32Array(8);
	var indices  = new Uint16Array(6);

	var p2 = {x:this.points[this.points.length-1].x, y:this.points[this.points.length-1].y};
	var p1 = {x:this.points[this.points.length-2].x, y:this.points[this.points.length-2].y};
	var vSegmentNorm = new PIXI.Point((p1.x - p2.x) / this.segmentLength, (p1.y - p2.y) / this.segmentLength);
	p1.x = p2.x - vSegmentNorm.x * this.segmentWidth;
	p1.y = p2.y - vSegmentNorm.y * this.segmentWidth;
	var vSegmentPerp = new PIXI.Point(vSegmentNorm.y, -vSegmentNorm.x);

	vertices.set(
		[
		p1.x + vSegmentPerp.x * this.segmentWidth, p1.y + vSegmentPerp.y * this.segmentWidth,
		p2.x + vSegmentPerp.x * this.segmentWidth, p2.y + vSegmentPerp.y * this.segmentWidth,
		p2.x - vSegmentPerp.x * this.segmentWidth, p2.y - vSegmentPerp.y * this.segmentWidth,
		p1.x - vSegmentPerp.x * this.segmentWidth, p1.y - vSegmentPerp.y * this.segmentWidth
		], 0)

	uvs.set([0, 0, 1, 0, 1, 1, 0, 1], 0);
	indices.set([0, 1, 2, 0, 2, 3], 0);

	var mesh = new PIXI.mesh.Mesh
	(
		texture,
		vertices,
		uvs,
		indices,
		PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES
	);

	this.layer.textures.addChild(mesh);	
}
},{"../Common":2,"../game/Room":24}],26:[function(require,module,exports){
var Common    = require("../Common");

/**
 * @constructor
 */
function Transformation( room )
{
	// Alien types.
	this.TRANSFORMATION_ID_OVERFLOW = 0;
	this.TRANSFORMATION_ID_CANNONBOLT = 1;
	this.TRANSFORMATION_ID_UPGRADE = 2;
	this.TRANSFORMATION_ID_FOURARMS = 3;
	
	this._id = null;
	this._room = room;
	this._timer = 0;	
	
	this.MAX_DURATION = 12;
	
	// Events.
	this.signals = {};
	this.signals.onTransformationExpired = new signals.Signal();
}
module.exports = Transformation;
Transformation.prototype.constructor = Transformation;

Transformation.prototype.update = function()
{
	// TODO: DEBUG:
	this._timer += p3.Timestep.deltaTime;
	if ( this._timer >= this.MAX_DURATION )
		this.signals.onTransformationExpired.dispatch();
}

Transformation.prototype.resetTimer = function()
{
	this._timer = 0;
}

// Default methods.
Transformation.prototype.onEnemyCollision = function( enemy ) { return true; }
Transformation.prototype.onWaterfallCollision = function() { return true; }


Object.defineProperty(
	Transformation.prototype, 
	"id", 
	{ get: function() { return this._id; } } );
},{"../Common":2}],27:[function(require,module,exports){
/**
 *  TransformationEffect
 *
 *  Created by Legman on 17/08/2016.
 *
 */

"use strict";

var Common          = require("../Common");

/**
 * @constructor
 */
function TransformationEffect() {
    PIXI.Container.call(this);
	
	this._assetManager = p3.AssetManager.instance;

    this._layer1            = new PIXI.Sprite(this._assetManager.getTexture("transform_001"));
    this._layer1.anchor     = new PIXI.Point(0.5, 0.5);
    this._layer1.visible    = false;
    this.addChild(this._layer1);

    this._layer2            = new PIXI.Sprite(this._assetManager.getTexture("transform_002"));
    this._layer2.rotation   = Math.random() * (Math.PI * 2);
    this._layer2.anchor     = new PIXI.Point(0.5, 0.5);
    this._layer2.visible    = false;
    this.addChild(this._layer2);

    this._layer3            = new PIXI.Sprite(this._assetManager.getTexture("transform_003"));
    this._layer3.rotation   = Math.random() * (Math.PI * 2);
    this._layer3.anchor     = new PIXI.Point(0.5, 0.5);
    this._layer3.visible    = false;
    this.addChild(this._layer3);

    this.on("added", this.init, this);
}
module.exports                              = TransformationEffect;
TransformationEffect.prototype              = Object.create(PIXI.Container.prototype);
TransformationEffect.prototype.constructor  = TransformationEffect;

TransformationEffect.prototype.init = function() {
    if (!this._emitter) {
        var config              = this._assetManager.getJSON("preloader_radial_spray");
        config.scale.start      = 0.2;
        config.scale.end        = 1.0;
        config.lifetime.min     = 0.42;
        config.lifetime.max     = 0.68;
        config.emitterLifetime  = 0.8;

        this._emitter = new cloudkid.Emitter(this.parent, [
            this._assetManager.getTexture("particle_transform_001"),
            this._assetManager.getTexture("particle_transform_002"),
            this._assetManager.getTexture("particle_transform_003"),
            this._assetManager.getTexture("particle_transform_004")
        ], config);
        this._emitter.emit = true;
    }
};

TransformationEffect.prototype.animate = function() {
    // in
    this._layer1.scale      = new PIXI.Point();
    this._layer1.visible    = true;
    TweenMax.to(this._layer1.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [4]
    });

    this._layer2.scale      = new PIXI.Point();
    this._layer2.visible    = true;
    TweenMax.to(this._layer2.scale, 0.34, {
        delay: 0.14,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2]
    });

    this._layer3.scale      = new PIXI.Point();
    this._layer3.visible    = true;
    TweenMax.to(this._layer3.scale, 0.4, {
        delay: 0.36,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [3]
    });

    // out
    TweenMax.to(this._layer1.scale, 0.4, {
        delay: 0.8,
        x: 0.0,
        y: 0.0,
        ease: Back.easeIn,
        easeParams: [2]
    });
    TweenMax.to(this._layer2, 0.24, {
        delay: 0.66,
        alpha: 0.0,
        ease: Power1.easeInOut
    });
    TweenMax.to(this._layer2.scale, 0.4, {
        delay: 0.6,
        x: 0.0,
        y: 0.0,
        ease: Back.easeIn,
        easeParams: [2]
    });
    TweenMax.to(this._layer3, 0.24, {
        delay: 0.66,
        alpha: 0.0,
        ease: Power1.easeInOut
    });
    TweenMax.to(this._layer3.scale, 0.4, {
        delay: 0.6,
        x: 0.0,
        y: 0.0,
        ease: Back.easeIn,
        easeParams: [2]
    });
};

TransformationEffect.prototype.update = function() {
    this._layer2.rotation += 0.8 * p3.Timestep.deltaTime;
    this._layer3.rotation -= 2.2 * p3.Timestep.deltaTime;

    if (this._emitter) {
        this._emitter.updateOwnerPos(this.x, this.y);
        this._emitter.update(p3.Timestep.deltaTime);
    }
};

},{"../Common":2}],28:[function(require,module,exports){
var Common    = require( "../Common" );
var Powerup = require( "./Powerup" );
var UpgradeTransformation = require( "./UpgradeTransformation" );

//===================================================
// CONSTRUCTOR
//===================================================

function UpgradePowerup( room )
{
	Powerup.call( this, "upgrade_powerup", "icon_upgrade", room );
}
module.exports = UpgradePowerup;
UpgradePowerup.prototype = Object.create( Powerup.prototype );
UpgradePowerup.prototype.constructor = UpgradePowerup;


//===================================================
// PUBLIC METHODS
//===================================================

UpgradePowerup.prototype.pickup = function()
{
	if ( this.taken ) return;
	
	Powerup.prototype.pickup.call( this );
	
	this._room.level.setTransformation( new UpgradeTransformation( this._room ) );
}
},{"../Common":2,"./Powerup":23,"./UpgradeTransformation":30}],29:[function(require,module,exports){
var Common = require( "../Common" );
var GameObject = require( "./GameObject" );

/**
 * @constructor
 */
function UpgradeShot( direction, room )
{
	GameObject.call( this, "UpgradeShot" );
	
	this._assetManager = p3.AssetManager.instance;
	
	this._sprite = null;
	this._room = room;
	this._direction = direction;
	this._hSpeed = 600; // px/s
	this._collisions = {
			left         : false,
			right        : false
		};
}
module.exports = UpgradeShot;
UpgradeShot.prototype = Object.create( GameObject.prototype );
UpgradeShot.prototype.constructor = UpgradeShot;

UpgradeShot.prototype.init = function( x, y )
{
	// Spawn position
	this.x = x;
	this.y = y;	

	// Sprite.
	this._sprite = new PIXI.Sprite( this._assetManager.getTexture( "projectile_upgrade" ) );
	this._sprite.anchor = new PIXI.Point( 0.5, 0.5 );
	this.addChild( this._sprite );	
	this._sprite.scale.x = Math.abs( this._sprite.scale.x ) * this._direction;

	// Collider
	this.collisionRect = new PIXI.Rectangle( -this._sprite.width * 0.5, -this._sprite.height * 0.5, this._sprite.width, this._sprite.height );
	this._enemyCollisionRect = new PIXI.Rectangle( -this._sprite.width * 0.5, -this._sprite.height * 0.75, this._sprite.width, this._sprite.height * 1.25 );
	//this.drawCollision();
}

UpgradeShot.prototype.update = function()
{
	var dx = this._hSpeed * p3.Timestep.deltaTime * this._direction;

	// Reset collisions
	this._collisions.left         = false;
	this._collisions.right        = false;

	// Blocks horizontal collisions
	if ( dx != 0 )
	{
		if ( dx > 0 )
			var rayOrigins = this.getRightRayOrigins();
		else
			var rayOrigins = this.getLeftRayOrigins();

		var ray = new PIXI.Point( dx + this.skinWidth * Math.sign( dx ), 0 );
		for ( var r = 0; r < rayOrigins.length && dx != 0; r++ )
		{
			// Movement ray vertices
			var avatarP1 = rayOrigins[ r ];
			// avatarP1.y += movement.y;
			var avatarP2 = new PIXI.Point( avatarP1.x + ray.x, avatarP1.y + ray.y );

			for ( var b = 0; b < this._room.blocks.length; b++ )
			{
				if ( dx > 0 && !this._room.blocks[ b ].config.collisions.left ) continue;
				if ( dx < 0 && !this._room.blocks[ b ].config.collisions.right ) continue;

				// Segment vertices
				var blockP1 = new PIXI.Point( this._room.blocks[ b ].config.x + ( dx < 0 ? this._room.blocks[ b ].config.width : 0 ), this._room.blocks[ b ].config.y );
				var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this._room.blocks[ b ].config.height );

				// Line-line collision detection
				var intersection = this.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
				if ( intersection )
				{
					var distance =  intersection.x - avatarP1.x - this.skinWidth * Math.sign( dx );

					if ( dx > 0 )
						this._collisions.right = true;
					else
						this._collisions.left = true;

					dx = distance;

					// Avoid floating point errors
					if ( Math.closeEnough( dx, 0 ) )
					{
						dx = 0;
						break;
					}

					// Decrease the length of future raycasts
					avatarP2.x -= ray.x;
					ray.x = distance + this.skinWidth * Math.sign( dx );
					avatarP2.x += ray.x;
				}
			}
		}
	}
	
	// Destroy the shot.
	if ( this._collisions.right || this._collisions.left )
		this.isGarbage = true;
	if ( !this.isGarbage )
		this.x += dx;
}

Math.EPSILON = 1e-6;

/**
 * Determines whether the two floating-point values f1 and f2 are close enough together that they can be considered equal.
 *
 * @param {number} f1
 * @param {number} f2
 * @returns {boolean}
 */
Math.closeEnough = function(f1, f2)
{
	return Math.abs((f1 - f2) / ((f2 == 0.0) ? 1.0 : f2)) < Math.EPSILON;
}


Object.defineProperty(
	UpgradeShot.prototype, 
	"enemyCollisionRect", 
	{ get: function() { return this._enemyCollisionRect; } } );
},{"../Common":2,"./GameObject":17}],30:[function(require,module,exports){
var Common    = require( "../Common" );
var Transformation = require( "./Transformation" );
var UpgradeShot = require( "./UpgradeShot" );

var g_upgradeTransformation = null;

/**
 * @constructor
 */
function UpgradeTransformation( room )
{
	Transformation.call( this, room );
	this._id = this.TRANSFORMATION_ID_UPGRADE;
	
	
	// Enums.
	this.STATE_DETECTING_WALL_GAP_START = 0;
	this.STATE_DETECTING_WALL_GAP_END = 1;
	this.STATE_MELTING_DOWN = 2;
	this.STATE_MELTING_UP = 3;
	this.STATE_SHOOTING = 4;
	
	// Constants.
	this.SMALL_COLLISION_RECT = new PIXI.Rectangle( -10, -20, 20, 20 );		
	this.BIG_COLLISION_RECT = new PIXI.Rectangle( -10, -75, 20, 75 );	
	this.WALL_GAP_DETECTION_RAY_LENGTH = 10;
	this.RELOADING_TIME = .75;
	this.SHOOT_RANGE = 400;
	
	// Attributes.
	this._state = this.STATE_IDLE;
	this._reloadingTimer = this.RELOADING_TIME;
	
	g_upgradeTransformation = this;
}
module.exports = UpgradeTransformation;
UpgradeTransformation.prototype = Object.create( Transformation.prototype );
UpgradeTransformation.prototype.constructor = UpgradeTransformation;


UpgradeTransformation.prototype.update = function()
{	
	if ( this._reloadingTimer < this.RELOADING_TIME )
		this._reloadingTimer += p3.Timestep.deltaTime; 
	
	switch ( this._state )
	{
		case this.STATE_IDLE:
		{		
			Transformation.prototype.update.call( this );
							
			var avatar = this._room.avatar;
			// Wall gap detection.
			/*if ( avatar.spline == null )
			{*/						
				var rayLength = Math.sign( avatar.spineContainer.scale.x ) > 0 ? this.WALL_GAP_DETECTION_RAY_LENGTH : -this.WALL_GAP_DETECTION_RAY_LENGTH;		
				var isRayHitFromBig = this.raycastHorizontally( this.BIG_COLLISION_RECT, rayLength ) 
					|| ( this.raycastUpward( this.BIG_COLLISION_RECT, this.WALL_GAP_DETECTION_RAY_LENGTH ) && avatar.currentSpineAnimation.name == "run_level"  );
				if ( isRayHitFromBig )
				{
					var isRayHitFromSmall = this.raycastHorizontally( this.SMALL_COLLISION_RECT, rayLength ) || this.raycastUpward( this.SMALL_COLLISION_RECT, this.WALL_GAP_DETECTION_RAY_LENGTH );
					if ( !isRayHitFromSmall )
					{
						avatar.collisionRect = this.SMALL_COLLISION_RECT;
						avatar.setAnimation( "melt_down", false );
					
						this._state = this.STATE_MELTING_DOWN;
					}
				}
			//}
			
			// Enemy detection.
			if ( this._state == this.STATE_IDLE && avatar.velocity.y < avatar.landSpeed && !avatar.isLanding && avatar.currentSpineAnimation.name != "land_to_run" )
				this.findTarget();
				
			break;
		}
		
		case this.STATE_MELTING_DOWN:
		{
			if ( this._room.avatar.spine.state.getCurrent( 0 ) == null )
			{
				this._room.avatar.setAnimation( "melt_move", true );
			
				this._state = this.STATE_DETECTING_WALL_GAP_END;
			}
			
			break;
		}	
				
		case this.STATE_DETECTING_WALL_GAP_END:
		{
			var avatar = this._room.avatar;
			var rayLength = Math.sign( avatar.spineContainer.scale.x ) > 0 ? this.WALL_GAP_DETECTION_RAY_LENGTH : -this.WALL_GAP_DETECTION_RAY_LENGTH;
			
			var isRayHitFromBig = this.raycastHorizontally( this.BIG_COLLISION_RECT, rayLength ) || this.raycastUpward( this.BIG_COLLISION_RECT, this.WALL_GAP_DETECTION_RAY_LENGTH );
			if ( !isRayHitFromBig && !this.checkWallCollision( this.BIG_COLLISION_RECT ) )
			{
				avatar.collisionRect = this.BIG_COLLISION_RECT;
				avatar.setAnimation( "melt_up", false );
			
				this._state = this.STATE_MELTING_UP;
			}	

			break;		
		}
		
		case this.STATE_MELTING_UP:
		{
			if ( this._room.avatar.spine.state.getCurrent( 0 ) == null )
			{
				this._room.avatar.setAnimation( "run_level", true );
			
				this._state = this.STATE_IDLE;
			}
			
			break;
		}
	}
}

UpgradeTransformation.prototype.findTarget = function()
{
	var avatar = this._room.avatar;
	var avatarDirection = Math.sign( avatar.spineContainer.scale.x );
	
	// Look for enemies at range and shoot.
	// Find the ray origin.
	var avatarP1 = null;	
	if ( avatarDirection > 0 )
	{
		avatarP1 = new PIXI.Point (
			avatar.x + avatar.collisionRect.x + avatar.collisionRect.width - avatar.skinWidth,
			avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .2 );
	}
	else
	{
		avatarP1 = new PIXI.Point (
			avatar.x + avatar.collisionRect.x + avatar.collisionRect.width,
			avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .2 );
	}	
	

	// Raycast enemies.
	var isEnemyDetected = false;
	var avatarP2 = new PIXI.Point( avatarP1.x + avatarDirection * this.SHOOT_RANGE, avatarP1.y );
	// DEBUG:
	//this._room._debugDraw.moveTo( avatarP1.x, avatarP1.y );
	//this._room._debugDraw.lineTo( avatarP2.x, avatarP2.y );
	
	var detectedEnemyX = null;
	for ( var i = 0; i < this._room.objects.dangers.length; ++i )
	{
		var dangerAux = this._room.objects.dangers[ i ];
		if ( dangerAux.targetCollisionRect != null )
		{
			// Block segment P1 - P2.
			var dangerP1 = new PIXI.Point( 
				dangerAux.x + dangerAux.targetCollisionRect.x + ( avatarDirection < 0 ? dangerAux.targetCollisionRect.width : 0 ), 
				dangerAux.y + dangerAux.targetCollisionRect.y );
			var dangerP2 = new PIXI.Point( dangerP1.x, dangerP1.y + dangerAux.targetCollisionRect.height );
			
			// DEBUG:
			//this._room._debugDraw.moveTo( dangerP1.x, dangerP1.y );
			//this._room._debugDraw.lineTo( dangerP2.x, dangerP2.y );

			// Line-line collision detection
			if ( avatar.lineLineCollision( avatarP1, avatarP2, dangerP1, dangerP2 ) )
			{
				detectedEnemyX = dangerP1.x;
			
				break;
			}
		}
	}
	
	if ( detectedEnemyX != null )
	{
		// Raycast for blocks that obstruct Ben's sightline.
		var isSightlineObstructed = false;
		for ( var i = 0; i < this._room.blocks.length; ++i )
		{
			// Block segment P1 - P2.
			var blockP1 = new PIXI.Point( 
				this._room.blocks[ i ].config.x + ( avatarDirection < 0 ? this._room.blocks[ i ].config.width : 0 ), 
				this._room.blocks[ i ].config.y );
			var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this._room.blocks[ i ].config.height );

			// Line-line collision detection
			if ( avatar.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 )
				&& ( avatarDirection < 0 && blockP1.x > detectedEnemyX || avatarDirection > 0 && blockP1.x < detectedEnemyX ) )
			{
				isSightlineObstructed = true;
			
				break;
			}
		}
	
		if ( !isSightlineObstructed && this._reloadingTimer >= this.RELOADING_TIME ) 
		{
			avatar.spine.state.setAnimationByName( 1, "shoot", false );
			avatar.spine.state.onEvent = 
				function( track, event ) 
				{
					if ( event.data.name == "shoot" )
						g_upgradeTransformation.shoot();
				};
		
			this._state = this.STATE_SHOOTING;
		}
	}
}

UpgradeTransformation.prototype.checkWallCollision = function( collisionRect )
{
	var result = false;
	var avatar = this._room.avatar;
	
	for ( var i = 0; i < this._room.wallBlocks.length; ++i )
	{
		var wallBlockAux = this._room.wallBlocks[ i ];
		
		result = avatar.rectRectCollision(
			{
				x      : avatar.x + collisionRect.x,
				y      : avatar.y + collisionRect.y,
				width  : collisionRect.width,
				height : collisionRect.height
			},
			{
				x      : wallBlockAux.x + wallBlockAux.collisionRect.x,
				y      : wallBlockAux.y + wallBlockAux.collisionRect.y,
				width  : wallBlockAux.collisionRect.width,
				height : wallBlockAux.collisionRect.height
			} );
		if ( result )
			break;
	}
	
	return result;
}

UpgradeTransformation.prototype.raycastHorizontally = function( fromCollisionRect, rayLength )
{
	var isRayHit = false;

	if ( rayLength!= 0 )
	{
		var avatar = this._room.avatar;
		var ray = new PIXI.Point( rayLength + avatar.skinWidth * Math.sign( rayLength ), 0 );
		var rayOrigins = rayLength > 0 ? avatar.getRightRayOriginsWithRect( fromCollisionRect ) : avatar.getLeftRayOriginsWithRect( fromCollisionRect );		
		
		for ( var r = 0; r < rayOrigins.length; r++ )
		{
			var avatarP1 = rayOrigins[ r ];
			var avatarP2 = new PIXI.Point( avatarP1.x + ray.x, avatarP1.y + ray.y );

			for ( var b = 0; b < this._room.wallBlocks.length; b++ )
			{
				if ( this._room.wallBlocks[ b ].isGarbage 
					|| ( rayLength > 0 && !this._room.wallBlocks[ b ].config.collisions.left )
					|| ( rayLength < 0 && !this._room.wallBlocks[ b ].config.collisions.right ) ) 
					continue;

				// Segment vertices
				var blockP1 = new PIXI.Point( this._room.wallBlocks[ b ].config.x + ( rayLength < 0 ? this._room.wallBlocks[ b ].config.width : 0 ), this._room.wallBlocks[ b ].config.y );
				var blockP2 = new PIXI.Point( blockP1.x, blockP1.y + this._room.wallBlocks[ b ].config.height );

				// Line-line collision detection
				isRayHit = avatar.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
				if ( isRayHit )
					break;
			}
			
			if ( isRayHit )
				break;
		}	
	}
	
	return isRayHit;
}

UpgradeTransformation.prototype.raycastUpward = function( fromCollisionRect, rayLength )
{
	var isRayHit = false;

	if ( rayLength != 0 )
	{
		var avatar = this._room.avatar;
		var avatarP1 = new PIXI.Point( avatar.x + fromCollisionRect.x + ( avatar.direction > 0 ? fromCollisionRect.width : 0 ), avatar.y + fromCollisionRect.y );	
		var avatarP2 = new PIXI.Point( avatarP1.x, avatarP1.y - rayLength );

		for ( var b = 0; b < this._room.wallBlocks.length; b++ )
		{
			if ( this._room.wallBlocks[ b ].isGarbage 
				|| !this._room.wallBlocks[ b ].config.collisions.bottom ) 
				continue;

			// Segment vertices
			var blockP1 = new PIXI.Point( this._room.wallBlocks[ b ].config.x, this._room.wallBlocks[ b ].config.y + this._room.wallBlocks[ b ].config.height );
			var blockP2 = new PIXI.Point( blockP1.x + this._room.wallBlocks[ b ].config.width, blockP1.y );
			
			// DEBUG:
			//this._room._debugDraw.moveTo( avatarP1.x, avatarP1.y );
			//this._room._debugDraw.lineTo( avatarP2.x, avatarP2.y );
			
			// DEBUG:
			//this._room._debugDraw.moveTo( blockP1.x, blockP1.y );
			//this._room._debugDraw.lineTo( blockP2.x, blockP2.y );

			// Line-line collision detection
			isRayHit = avatar.lineLineCollision( avatarP1, avatarP2, blockP1, blockP2 );
			if ( isRayHit )
				break;
		}
	}
	
	//console.log( "raycastUpward.isRayHit = " + isRayHit );
	
	return isRayHit;
}

UpgradeTransformation.prototype.shoot = function()
{
	// Find shot origin.
	var avatar = this._room.avatar;
	var avatarDirection = Math.sign( avatar.spineContainer.scale.x );							
	var shotOrigin = null;	
	if ( avatarDirection < 0 )
	{
		shotOrigin = new PIXI.Point(
			avatar.x + avatar.collisionRect.x - avatar.collisionRect.width * 2.0,
			avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .2 );
	}
	else
	{
		shotOrigin = new PIXI.Point(
			avatar.x + avatar.collisionRect.x + avatar.collisionRect.width * 3.0,
			avatar.y + avatar.collisionRect.y + avatar.skinWidth + avatar.collisionRect.height * .2 );
	}	

	// Shoot at enemy.							
	var upgradeShot = new UpgradeShot( avatarDirection, this._room );
	upgradeShot.init( shotOrigin.x, shotOrigin.y );
	
	this._room.objects.shots.push( upgradeShot );
	this._room.addChild( upgradeShot );
	
	this._reloadingTimer = 0;
	this._state = this.STATE_IDLE;
}
},{"../Common":2,"./Transformation":26,"./UpgradeShot":29}],31:[function(require,module,exports){
var Common = require( "../Common" );


//===================================================
// CONSTRUCTOR
//===================================================

function Global() {}

module.exports = Global;


//===================================================
// CONSTANTS
//===================================================

Global.LEVEL_ID_ARRAY = [ 
			[ "level_1_1", "level_1_2", "level_1_3", "level_1_4", "level_1_5" ],
			[ "level_2_1", "level_2_2", "level_2_3", "level_2_4", "level_2_5" ],
			[ "level_3_1", "level_3_2", "level_3_3", "level_3_4", "level_3_5" ] ];	
			
Global.ALIEN_TUTORIAL_LEVEL_ID_ARRAY = [ 
			{ chapterId:1, levelId:2, alienId:3 },
			{ chapterId:1, levelId:3, alienId:2 },
			{ chapterId:2, levelId:1, alienId:4 },
			{ chapterId:2, levelId:4, alienId:5 } ];	
			
Global.SCORE_COIN_MULTIPLIER = 200;
Global.SCORE_POWERUP_MULTIPLIER = 250;
Global.SCORE_ENEMY_MULTIPLIER = 500;
Global.SCORE_BLOCK_MULTIPLIER = 100;
Global.GAME_STEP_BASE_SPEED = 3;
Global.SCORE_STAR_FACTOR = 0.65;

Global.GAME_BASE_TIME = 2000;



//===================================================
// FUNCTIONS
//===================================================


},{"../Common":2}],32:[function(require,module,exports){
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
			this._assetManager.getTexture("but_big_def"),
			this._assetManager.getTexture("but_big_over"),
			this._assetManager.getTexture("but_big_press"),
			this._assetManager.getTexture(this._buttonString));
		
		// this._button.scale = new PIXI.Point(0, 0);
        this._button.signals.down.addOnce(this.onButtonClick, this);
		this._button.signals.over.add(this.onButtonOver, this);
		this._button.animate = true;
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




},{"../Common":2,"../general/SoundSFX":33}],33:[function(require,module,exports){
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
function SoundSFX() {}

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


},{"../Common":2}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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
},{}],36:[function(require,module,exports){
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

},{"./Scene":35,"./Transition":37}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
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
	/**
	 * @type {Number}
	 */
	this._score = score;
	this._highscore = highscore;

	this._name = "";
	this._namePlaceholder = "";
	this._email = "";
	this._emailPlaceholder = "";
	this._country = null;
	this._countryPlaceholder = "";

	this._activeField = "";
	this._activeTime = 0;
	this._activeBlinkTime = 1;

	this._colorPlaceholder = "#999999";
	this._colorActive = "#111111";
	this._colorCorrect = "#33B120";
	this._colorError = "#B12028";

	this._countries =
	[
		{id: "english",         name: "United Kingdom"},
		{id: "france",          name: "France"},
		{id: "botswuana",       name: "Botswana"},
		{id: "burkinafaso",     name: "Burkina Faso"},
		{id: "capeverde",       name: "Cape Verde"},
		{id: "ghana",           name: "Ghana"},
		{id: "guinea",          name: "Guinea"},
		{id: "ivory",           name: "Ivory Coast"},
		{id: "kenya",           name: "Kenya"},
		{id: "madagascar",      name: "Madagascar"},
		{id: "mali",            name: "Mali"},
		{id: "morocco",         name: "Morocco"},
		{id: "mozambique",      name: "Mozambique"},
		{id: "mauritius",       name: "Mauritius"},
		{id: "namibia",         name: "Namibia"},
		{id: "nederlands",      name: "Netherlands"},
		{id: "tunisia",         name: "Tunisia"},
		{id: "uganda",          name: "Uganda"},
		{id: "senegal",         name: "Senegal"},
		{id: "southafrica",     name: "South Africa"}
	]

	$("#leaderboard_name").val("");
	$("#leaderboard_email").val("");
	$("#leaderboard_country").val("");

	SimpleScreen.call(this);

	/**
	 * @type {Signal}
	 */
	this.signals.requestLeaderBoard = new signals.Signal();
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

	this._bg = new PIXI.Sprite(this._assetManager.getTexture("but_small_def"));
	this._bg.x = Common.STAGE_WIDTH/2;
	this._bg.anchor = new PIXI.Point(0.5, 0);
	this._bg.alpha = 0;
	this._bg.hitArea     = new PIXI.Rectangle(-Common.STAGE_WIDTH/2, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
	this._bg.interactive = true;
	this.addChild(this._bg);

	this._panel = new PIXI.Sprite(this._assetManager.getTexture("but_small_def"));
	this._panel.x = Common.STAGE_WIDTH/2;
	this._panel.y = Common.STAGE_HEIGHT/2;
	this._panel.anchor = new PIXI.Point(0.5, 1);
	this.addChild(this._panel);

	var copy = this._assetManager.getJSON("config")['copy']["YOU_SCORED"][Common.COUNTRY_CODE];
	this._title = new PIXI.Text(copy.text + " " + this._score + "!", {font: "40px GillSansMT-Bold", fill: 0xffffff, align: "center"});
	this._title.anchor = new PIXI.Point(0.5, 0.5);
	this._title.x = 0;
	this._title.y = -this._panel.height;
	this._panel.addChild(this._title);

	// Buttons
	this._restartButton = new p3.Button
	(
		this._assetManager.getTexture("but_big_def"),
		this._assetManager.getTexture("but_big_over"),
		this._assetManager.getTexture("but_big_press"),
		this._assetManager.getTexture("icon_replay")
	);
	this._restartButton.init();
	this._restartButton.y = Common.STAGE_HEIGHT - 190;
	this._restartButton.x = (Common.STAGE_WIDTH / 2) + 350;
	this._restartButton.scale = new PIXI.Point(0, 0);
	this._restartButton.overSoundName = "sfx_btn_rollover_00";
	this._restartButton.signals.down.add(this.restartClicked, this);
	this.addChild(this._restartButton);

	
	this._nextButton = new p3.Button
	(
		this._assetManager.getTexture("but_small_def"),
		this._assetManager.getTexture("but_small_over"),
		this._assetManager.getTexture("but_small_press"),
		this._assetManager.getTexture("icon_home")
	);
	this._nextButton.init();
	this._nextButton.y = this._guiButtonTopMargin;
	this._nextButton.scale = new PIXI.Point(0, 0);
	this._nextButton.overSoundName = "sfx_btn_rollover_00";
	this._nextButton.signals.down.add(this.nextClicked, this);
	this.addChild(this._nextButton);

	this._muteButton = new p3.MuteButton
	(
		this._assetManager.getTexture("but_small_def"),
		this._assetManager.getTexture("but_small_over"),
		this._assetManager.getTexture("but_small_press"),
		this._assetManager.getTexture("icon_soundon"),
		this._assetManager.getTexture("icon_soundoff")
	);
	this._muteButton.id = "mute";
	this._muteButton.y = this._guiButtonTopMargin;
	this._muteButton.scale = new PIXI.Point(0, 0);
	this._muteButton.overSoundName = "sfx_btn_rollover_00";
	this._muteButton.init();
	this.addChild(this._muteButton);

	// Black screen
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)
};

/**
 */
GameOverOverlay.prototype.update = function()
{

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
 * @param {Function=} callback
 * @param {*=}scope
 */
GameOverOverlay.prototype.animateIn = function(callback, scope) {

	var tl = new TimelineMax();

		tl.to(this._nextButton.scale, 1, {x:1, y:1, ease:Back.easeOut}, .8);
		tl.to(this._muteButton.scale, 1, {x:1, y:1, ease:Back.easeOut}, .8);
		tl.to(this._restartButton.scale, 1, {x:1, y:1, ease:Elastic.easeOut}, 1.2);

		// tl.to(this._bg, 0.75, {alpha:1, ease:Sine.easeOut}, 0.1);
		// tl.to(this._panel, 0.75, {y:Common.STAGE_HEIGHT, ease:Quad.easeOut,
		// onComplete:function()
		// {
			// SoundSFX.play("sfx_quiz_end_smallcrowd_applause");
		// },
		// onCompleteScope:this
		// }, 0.1);

	Common.animator.add(tl);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
GameOverOverlay.prototype.animateOut = function(callback, scope)
{
	var tl = new TimelineMax({onCompleteScope:scope, onComplete:callback});

		tl.to(this._restartButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._nextButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._muteButton.scale, .5, {x:0, y:0, ease:Back.easeIn}, 0);
		tl.to(this._screenTransition, 0.35, {x:0, ease:Sine.easeOut}, 0.5);

	Common.animator.add(tl);
};




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


//===================================================
// GETTERS/SETTERS
//===================================================


//===================================================


},{"../Common":2,"../general/NextButton":32,"../general/SoundSFX":33,"../screens/SimpleScreen":47}],39:[function(require,module,exports){
var Common       = require( "../Common" );
var SimpleScreen = require( "../screens/SimpleScreen" );
var NextButton   = require( "../general/NextButton" );
var SoundSFX     = require( "../general/SoundSFX" );
var MuteButton   = require( "../lib/MuteButton" );
var BenMuteButton = require( "../ui/BenMuteButton" );
var BenButton = require( "../ui/BenButton" );
var ButtonSprites = require( "../ui/ButtonSprites" );
var DoubleStateIcon = require( "../ui/DoubleStateIcon" );
var SingleStateIcon = require( "../ui/SingleStateIcon" );
var BgRing = require( "../ui/BgRing" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function PauseOverlay()
{
	// Parent.
	SimpleScreen.call( this );
	
	
	// Constants.
	this.TUTORIAL_INDEX_H_POSITIONS = [ -67, 0, 64 ];
	
	
	// Attributes.
	this._tutorialImageIndex = 0;
	
	this.signals.requestedGameScreen = new signals.Signal();
}

module.exports = PauseOverlay;
PauseOverlay.prototype = Object.create( SimpleScreen.prototype );
PauseOverlay.prototype.constructor = PauseOverlay;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
PauseOverlay.prototype.init = function()
{
	console.log( "PAUSE INITIALIZED" );

	SimpleScreen.prototype.init.call( this );
	
	// Init UI.
	// Button sprites.
	var mediumButtonSprites = new ButtonSprites();
    mediumButtonSprites.normal = this._assetManager.getTexture( "btn_primary_medium_off" );
    mediumButtonSprites.over = this._assetManager.getTexture( "btn_primary_medium_over" );
    mediumButtonSprites.innerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_001" );
    mediumButtonSprites.outerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_002" );
	var largeButtonSprites = new ButtonSprites();
    largeButtonSprites.normal = this._assetManager.getTexture( "btn_primary_large_off" );
    largeButtonSprites.over = this._assetManager.getTexture( "btn_primary_large_over" );
    largeButtonSprites.innerRing = this._assetManager.getTexture( "btn_primary_large_off_ring_001" );
    largeButtonSprites.outerRing = this._assetManager.getTexture( "btn_primary_large_off_ring_002" );
	
	this._container   = new PIXI.Container();
	this._container.x = Common.STAGE_WIDTH * 0.5;
	this._container.y = Common.STAGE_HEIGHT * 0.5;	
	this.addChild( this._container );

	// Background.
	this._bg = new PIXI.Sprite( this._assetManager.getTexture( "paused_bg" ) );
	this._bg.width = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this._bg.anchor = new PIXI.Point( 0.5, 0.5 );	
	this._container.addChild( this._bg );
	
	// Tutorial images.
	this._arrTutorialImage = [];
	var TUTORIAL_IMAGE_IDS = [ 
		p3.Device.isMobile ? "tutorials/tutorial_mobile_ben001" : "tutorials/tutorial_desktop_ben001", 
		"tutorials/tutorial_ben002",
		"tutorials/tutorial_ben003" ];
	for ( var i = 0; i < 3; ++i )
	{
		var tutorialImage = new PIXI.Sprite( this._assetManager.getTexture( TUTORIAL_IMAGE_IDS[ i ] ) );
		tutorialImage.anchor = new PIXI.Point( 0.5, 0.5 );	
		tutorialImage.position.y = -35;
		tutorialImage.visible = i == 0;
		
		this._arrTutorialImage.push( tutorialImage );		
		this._container.addChild( tutorialImage );
	}
	
	// Tutorial index image.
	this._tutorialIndexImage = new PIXI.Sprite( this._assetManager.getTexture("pickup_00") );
	this._tutorialIndexImage.anchor = new PIXI.Point( .5, .5 );
	this._tutorialIndexImage.position.x = this.TUTORIAL_INDEX_H_POSITIONS[ this._tutorialImageIndex ];
	this._tutorialIndexImage.position.y = 135;
	this._container.addChild( this._tutorialIndexImage );
	
	// Title.
	var jsonPausedText = this._assetManager.getJSON( "config" )[ 'copy' ][ "PAUSED" ][ Common.COUNTRY_CODE ];	
	if ( Common.COUNTRY_CODE != "ar" && Common.COUNTRY_CODE != "ru" ) 
        this._titleText = new PIXI.extras.BitmapText( jsonPausedText.text, { font: "ahkio_75_paused", align: "center" } );
	else 
        this._titleText = new PIXI.Text( 
			jsonPausedText.text, 
			{ font: "80px Arial", fill: "#FFFFFF", stroke: "#044300", strokeThickness: 10, align: "center" } );    
	this._titleText.position = new PIXI.Point( 
			Common.STAGE_WIDTH * 0.5 - this._titleText.width * 0.5, 
			Common.STAGE_HEIGHT * 0.5 - 300 );
	this.addChild( this._titleText );
	
	// Replay button.
	// Button.	
	this._replayButton = new BenButton( largeButtonSprites );
	this._replayButton.position = new PIXI.Point( 
		Common.STAGE_WIDTH * .5 - 400, 
		Common.STAGE_HEIGHT * 0.5 + 240 );
	this._replayButton.signals.down.addOnce( this.replayPressed, this );
	this._replayButton.overSoundName = "sfx_btn_rollover_00";
	this._replayButton.scale = new PIXI.Point( 0, 0 );
	this._replayButton.animate = true;
	// Icon.
	this._replayIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_replay_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_replay_over" ),
			this._replayButton );
	
	this.addChild( this._replayButton );
	
	// Resume button.
	// Button.	
	this._resumeButton = new BenButton( largeButtonSprites );
	this._resumeButton.position = new PIXI.Point( 
		Common.STAGE_WIDTH * .5 + 400, 
		Common.STAGE_HEIGHT * 0.5 + 240 );
	this._resumeButton.signals.down.addOnce( this.resumePressed, this );
	this._resumeButton.overSoundName = "sfx_btn_rollover_00";
	this._resumeButton.scale = new PIXI.Point( 0, 0 );
	this._resumeButton.animate = true;
	// Icon.
	this._playIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_large_icon_play_off" ),
			this._assetManager.getTexture( "btn_primary_large_icon_play_over" ),
			this._resumeButton );
	
	this.addChild( this._resumeButton );
	
	// Next image button.
	// Button.
	this._nextTutorialImageButton = new BenButton( mediumButtonSprites );
	this._nextTutorialImageButton.x = Common.STAGE_WIDTH * 0.5 + 440;
	this._nextTutorialImageButton.y = Common.STAGE_HEIGHT * 0.5 - 25;		
	this._nextTutorialImageButton.signals.down.add( this.nextTutorialImagePressed, this );
	this._nextTutorialImageButton.overSoundName = "sfx_btn_rollover_00";
	this._nextTutorialImageButton.scale = new PIXI.Point( 0, 0 );
	this._nextTutorialImageButton.animate = true;
	// Icon.
	this._nextChapterIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_next_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_next_over" ),
			this._nextTutorialImageButton
		);	
	this.addChild( this._nextTutorialImageButton );
	
	// Previous image button.
	// Button.
	this._prevTutorialImageButton = new BenButton( mediumButtonSprites );
	this._prevTutorialImageButton.x = Common.STAGE_WIDTH * 0.5 - 440;
	this._prevTutorialImageButton.y = Common.STAGE_HEIGHT * 0.5 - 25;		
	this._prevTutorialImageButton.signals.down.add( this.prevTutorialImagePressed, this );
	this._prevTutorialImageButton.overSoundName = "sfx_btn_rollover_00";
	this._prevTutorialImageButton.scale = new PIXI.Point( 0, 0 );
	this._prevTutorialImageButton.animate = true;
	// Icon.
	this._prevChapterIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_next_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_next_over" ),
			this._prevTutorialImageButton
		);
	this._prevChapterIcon.scale.x = -1;	
	this.addChild( this._prevTutorialImageButton );
	
	// Mute button.
	// Icon.
	var muteIcon = new DoubleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_audio_off" ),	
			this._assetManager.getTexture( "btn_primary_medium_icon_mute_off" ),	
			this._assetManager.getTexture( "btn_primary_medium_icon_audio_over" ),	
			this._assetManager.getTexture( "btn_primary_medium_icon_mute_over" ) );
	muteIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	// Button.
	this._benMuteButton = new BenMuteButton( mediumButtonSprites, muteIcon );
	this._benMuteButton.animate = true;
	this._benMuteButton.y = this._guiButtonTopMargin;
	//this._benMuteButton.scale = new PIXI.Point( 0, 0 );
	this._benMuteButton.overSoundName = "sfx_btn_rollover_00";
	
	this.addChild( this._benMuteButton );
	
	// Home button.
	// Button
	this._homeButton = new BenButton( mediumButtonSprites );
	this._homeButton.animate = true;
	this._homeButton.y = this._guiButtonTopMargin;		
	this._homeButton.signals.down.addOnce( this.homePressed, this );
	this._homeButton.overSoundName = "sfx_btn_rollover_00";
	//this._homeButton.scale = new PIXI.Point(0, 0);
	this._homeButton.init();
	// Icon.
	this._nextChapteIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_home_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_home_over" ),
			this._homeButton
		);
	
	this.addChild( this._homeButton );
};

/**
 */
PauseOverlay.prototype.update = function()
{
	this._homeButton.x = this._getFirstButtonPositionLeft();
	this._benMuteButton.x = this._getFirstButtonPositionRight();
};

/**
 */
PauseOverlay.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call( this );
};

/**
 */
PauseOverlay.prototype.dispose = function() {}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
PauseOverlay.prototype.animateIn = function( callback, scope )
{
	var tl = new TimelineMax();
	//tl.to( this._homeButton.scale, .4, { x:1, y:1, ease:Back.easeOut }, 0 );
	//tl.to( this._benMuteButton.scale, .4, { x:1, y:1, ease:Back.easeOut }, 0 );
	tl.to( this._resumeButton.scale, 0.6, { x:1, y:1, ease:Back.easeOut }, 0 );
	tl.to( this._replayButton.scale, 0.6, { x:1, y:1, ease:Back.easeOut }, 0 );
	tl.to( this._nextTutorialImageButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.1 );
	tl.to( this._prevTutorialImageButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.1 );
	
	Common.animator.add( tl );
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
PauseOverlay.prototype.animateOut = function(callback, scope)
{
	var tl = new TimelineMax( { onCompleteScope:scope, onComplete:callback } );
	//tl.to( this._homeButton.scale, .5, { x:0, y:0, ease:Back.easeIn }, 0 );
	//tl.to( this._benMuteButton.scale, .5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._resumeButton.scale, .5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._replayButton.scale, .5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._nextTutorialImageButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._prevTutorialImageButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	
	Common.animator.add( tl );
};

/**
 */
PauseOverlay.prototype.updateUI = function()
{
	for ( var i = 0; i < this._arrTutorialImage.length; ++i )
		this._arrTutorialImage[ i ].visible = i == this._tutorialImageIndex;
		
	this._tutorialIndexImage.position.x = this.TUTORIAL_INDEX_H_POSITIONS[ this._tutorialImageIndex ];
}


//===================================================
// EVENTS
//===================================================

/**
 */
PauseOverlay.prototype.resumePressed = function()
{
	this.animateOut(
		function() { this.signals.requestedNextScreen.dispatch(); }, 
		this );

	SoundSFX.play( "sfx_btn_press_00" );
};

/**
 */
PauseOverlay.prototype.replayPressed = function()
{
	this.animateOut(
		function() { this.signals.requestedGameScreen.dispatch(); }, 
		this );

	SoundSFX.play( "sfx_btn_press_00" );
};

/**
 */
PauseOverlay.prototype.homePressed = function()
{
	this.animateOut(
		function() { this.signals.requestedPreviousScreen.dispatch(); }, 
		this );

	SoundSFX.play("sfx_btn_press_00");
};

PauseOverlay.prototype.nextTutorialImagePressed = function()
{
	++this._tutorialImageIndex;
	if ( this._tutorialImageIndex >= this._arrTutorialImage.length )
		this._tutorialImageIndex = 0;

	this.updateUI();
	
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
PauseOverlay.prototype.prevTutorialImagePressed = function()
{
	--this._tutorialImageIndex;
	if ( this._tutorialImageIndex < 0 )
		this._tutorialImageIndex = this._arrTutorialImage.length - 1;

	this.updateUI();
	
	SoundSFX.play("sfx_btn_press_00");
};


},{"../Common":2,"../general/NextButton":32,"../general/SoundSFX":33,"../lib/MuteButton":34,"../screens/SimpleScreen":47,"../ui/BenButton":49,"../ui/BenMuteButton":50,"../ui/BgRing":51,"../ui/ButtonSprites":53,"../ui/DoubleStateIcon":54,"../ui/SingleStateIcon":56}],40:[function(require,module,exports){
var Common = require( "../Common" );
var SimpleScreen = require( "./SimpleScreen" );
var SoundSFX = require( "../general/SoundSFX" );
var DoubleStateIcon = require( "../ui/DoubleStateIcon" );
var SingleStateIcon = require( "../ui/SingleStateIcon" );
var BenMuteButton = require( "../ui/BenMuteButton" );
var BenButton = require( "../ui/BenButton" );
var ButtonSprites = require( "../ui/ButtonSprites" );
var BgRing = require( "../ui/BgRing" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function AlienInstructionsScreen( alienId, chapterIndex, levelIndex )
{
	// Parent.
	SimpleScreen.call( this );
	
	
	// Attributes.
	this._alienId = alienId;
	this._chapterIndex = chapterIndex;
	this._levelIndex = levelIndex;
	
	
	// Constants.
	this.ALIEN_INSTRUCTION_ID_ARRAY = [ 
		"tutorials/tutorial_cannonbolt", 
		"tutorials/tutorial_overflow", 
		"tutorials/tutorial_upgrade", 
		"tutorials/tutorial_fourarms" ];
}

module.exports = AlienInstructionsScreen;
AlienInstructionsScreen.prototype = Object.create( SimpleScreen.prototype );
AlienInstructionsScreen.prototype.constructor = AlienInstructionsScreen;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
AlienInstructionsScreen.prototype.init = function()
{
	console.log( "ALIEN INSTRUCTIONS INITIALIZED" );

	SimpleScreen.prototype.init.call( this );

	// Init UI.
	var mediumButtonSprites = new ButtonSprites();
    mediumButtonSprites.normal = this._assetManager.getTexture( "btn_primary_medium_off" );
    mediumButtonSprites.over = this._assetManager.getTexture( "btn_primary_medium_over" );
    mediumButtonSprites.innerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_001" );
    mediumButtonSprites.outerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_002" );
	var largeButtonSprites = new ButtonSprites();
    largeButtonSprites.normal = this._assetManager.getTexture( "btn_primary_large_off" );
    largeButtonSprites.over = this._assetManager.getTexture( "btn_primary_large_over" );
    largeButtonSprites.innerRing = this._assetManager.getTexture( "btn_primary_large_off_ring_001" );
    largeButtonSprites.outerRing = this._assetManager.getTexture( "btn_primary_large_off_ring_002" );
	
	this._container   = new PIXI.Container();
	this._container.x = Common.STAGE_WIDTH * 0.5;
	this._container.y = Common.STAGE_HEIGHT * 0.5;	
	this.addChild( this._container );

	// Background.
	this._bg = new PIXI.Sprite( this._assetManager.getTexture( "paused_2_bg" ) );
	this._bg.width = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this._bg.anchor = new PIXI.Point( 0.5, 0.5 );	
	this._container.addChild( this._bg );
	
	// Tutorial images.
	var tutorialImage = new PIXI.Sprite( this._assetManager.getTexture( this.ALIEN_INSTRUCTION_ID_ARRAY[ this._alienId - 2 ] ) );
	tutorialImage.anchor = new PIXI.Point( 0.5, 0.5 );	
	tutorialImage.position.y = -35;
	this._container.addChild( tutorialImage );
	
	// Title.
	var jsonInstructionsTitle = this._assetManager.getJSON( "config" )[ 'copy' ][ "INSTRUCTIONS" ][ Common.COUNTRY_CODE ];
	if ( Common.COUNTRY_CODE != "ar" && Common.COUNTRY_CODE != "ru" ) 
        this._titleText = new PIXI.extras.BitmapText( jsonInstructionsTitle.text, { font: "ahkio_75_paused", align: "center" } );
	else 
        this._titleText = new PIXI.Text( 
			jsonInstructionsTitle.text, 
			{ font: "80px Arial", fill: "#FFFFFF", stroke: "#044300", strokeThickness: 10, align: "center" } );    		
	this._titleText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._titleText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.5 - 300 );
	this.addChild( this._titleText );	
	
	// Play button.
	// Button.	
	this._playButton = new BenButton( largeButtonSprites );
	this._playButton.position = new PIXI.Point( 
		Common.STAGE_WIDTH * .5 + 400, 
		Common.STAGE_HEIGHT * 0.5 + 240 );
	this._playButton.signals.down.addOnce( this.playPressed, this );
	this._playButton.overSoundName = "sfx_btn_rollover_00";
	this._playButton.scale = new PIXI.Point( 0, 0 );
	this._playButton.animate = true;
	// Icon.
	this._playIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_large_icon_play_off" ),
			this._assetManager.getTexture( "btn_primary_large_icon_play_over" ),
			this._playButton );
	
	this.addChild( this._playButton );
	
	// Mute button.
	var muteIcon = new DoubleStateIcon( 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_over" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_over" ) );
	muteIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	// Button.
	this._benMuteButton = new BenMuteButton( mediumButtonSprites, muteIcon );
	this._benMuteButton.animate = true;
	this._benMuteButton.y = this._guiButtonTopMargin;
	this._benMuteButton.overSoundName = "sfx_btn_rollover_00";
	this.addChild( this._benMuteButton );
	
	// Home button.
	// Button.
	this._homeButton = new BenButton( mediumButtonSprites );
	this._homeButton.animate = true;
	this._homeButton.y = this._guiButtonTopMargin;		
	this._homeButton.signals.down.addOnce( this.homePressed, this );
	this._homeButton.overSoundName = "sfx_btn_rollover_00";
	//this._homeButton.scale = new PIXI.Point(0, 0);
	this._homeButton.init();
	// Icon.
	this._homeIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_home_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_home_over" ),
			this._homeButton
		);	
	this.addChild( this._homeButton );
	
	// Black screen
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)

	//Sounds
	// this._bgMusic = SoundSFX.play('music_loop_track', {volume:0.66, loop:true});
};

/**
 */
AlienInstructionsScreen.prototype.update = function()
{
};

/**
 */
AlienInstructionsScreen.prototype.resize = function()
{

	SimpleScreen.prototype.resize.call(this);

	this._benMuteButton.x = this._getFirstButtonPositionRight();
	this._homeButton.x = this._getFirstButtonPositionLeft();
};

/**
 */
AlienInstructionsScreen.prototype.dispose = function()
{
	// SoundSFX.stop('music_menu_loop_00');
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
AlienInstructionsScreen.prototype.animateIn = function( callback, scope )
{
	SimpleScreen.prototype.animateIn.call( this );

	// Buttons
	var tl = new TimelineMax();
	
	tl.to( this._playButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.1 );
		
	Common.animator.add( tl );
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
AlienInstructionsScreen.prototype.animateOut = function( callback, scope )
{
	SimpleScreen.prototype.animateOut.call( this );

	var tl = new TimelineMax( { onComplete:callback, onCompleteScope:scope } );

	// Buttons
	tl.to( this._playButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._screenTransition, 0.7, { x:0, ease:Sine.easeOut }, 0.6 );

	Common.animator.add( tl );

	// this._bgMusic.fadeOut(0, 1000);
};


//===================================================
// EVENTS
//===================================================

/**
 */
AlienInstructionsScreen.prototype.playPressed = function()
{
	this._playButton.signals.down.remove( this.playPressed, this );
	TweenMax.killTweensOf( this._playButton.scale );

	this.animateOut(
		function() { this.signals.requestedNextScreen.dispatch( this._chapterIndex, this._levelIndex ); }, 
		this );

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
AlienInstructionsScreen.prototype.homePressed = function()
{
	this.animateOut( 
		function() { this.signals.requestedPreviousScreen.dispatch(); }, 
		this );

	SoundSFX.play("sfx_btn_press_00");
};
},{"../Common":2,"../general/SoundSFX":33,"../ui/BenButton":49,"../ui/BenMuteButton":50,"../ui/BgRing":51,"../ui/ButtonSprites":53,"../ui/DoubleStateIcon":54,"../ui/SingleStateIcon":56,"./SimpleScreen":47}],41:[function(require,module,exports){
/**
 *  CNPreloaderScene
 *
 *  Created by Legman on 7/10/2015.
 *
 */

"use strict";

var SimpleScreen = require( "./SimpleScreen" );
var Common = require( "../Common" );

/**
 * @constructor
 */
function CNPreloaderScreen() 
{
	this._assetManager = p3.AssetManager.instance;

    /**
     * @type {Number}
     */
    this.loaded = .1;

    /**
     * @type {PIXI.Container}
     * @private
     */
    this._bar = null;

    /**
     * @type {Array}
     * @private
     */
    this._tweens = [];

    SimpleScreen.call( this );
}
module.exports                           = CNPreloaderScreen;
CNPreloaderScreen.prototype              = Object.create(SimpleScreen.prototype);
CNPreloaderScreen.prototype.constructor  = CNPreloaderScreen;

CNPreloaderScreen.prototype.init = function() 
{
    var bg = new PIXI.Sprite(this._assetManager.getTexture("cn_preloader_bg"));
    this.addChild(bg);

    this._bar   = new PIXI.Container();
    this._bar.x = Common.STAGE_WIDTH * 0.5 + 4.0;
    this._bar.y = Common.STAGE_HEIGHT * 0.5 + 210.0;
    this.addChild(this._bar);

    this._bar.fill          = new PIXI.Sprite(this._assetManager.getTexture("cn_preloader_fill"));
    this._bar.fill.x        = -this._bar.fill.texture.width * 0.5;
    this._bar.fill.start    = new PIXI.Point(this._bar.fill.x, this._bar.fill.y);
    this._bar.fill.anchor   = new PIXI.Point(1.0, 0.5);
    this._bar.addChild(this._bar.fill);

    this._bar.frame         = new PIXI.Sprite(this._assetManager.getTexture("cn_preloader_overlay"));
    this._bar.frame.anchor  = new PIXI.Point(0.689, 0.5);
    this._bar.addChild(this._bar.frame);
	
	if(Common.generatedTextures['blackSquare'] == undefined)
	{
		var gr = new PIXI.Graphics();
		gr.beginFill(0x000000);
		gr.drawRect(0, 0, 1, 1);
		Common.generatedTextures['blackSquare'] = gr.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);
	}
	
	// Hide the progress bar fill (it is visible while it is at its starting position). 
	this._barFillCover = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._barFillCover.width = Common.STAGE_WIDTH * .15;
	this._barFillCover.height = Common.STAGE_HEIGHT;
	this.addChild(this._barFillCover)
	
	// Black screen
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)
};

CNPreloaderScreen.prototype.dispose = function() {
    var tween;
    for (var i = 0; i < this._tweens.length; ++ i) {
        tween = this._tweens[i];
        tween.kill();
    }
    this._tweens.length = 0;

     SimpleScreen.prototype.dispose.call(this);
};

CNPreloaderScreen.prototype.animateIn = function(callback, scope) {
};

CNPreloaderScreen.prototype.animateOut = function(callback, scope) 
{
	var tween = new TimelineMax({onCompleteScope:scope, onComplete:callback});
	// tween.to(this._screenTransition, 0.5, {alpha: 1, ease:Sine.EaseInOut},  1);
	tween.to(this._screenTransition, 0.5, {alpha: 1, ease:Sine.EaseInOut},  0);
	Common.animator.add(tween);
};

CNPreloaderScreen.prototype.resize = function() {
    this.x = (p3.View.width - Common.STAGE_WIDTH) * 0.5;
};

CNPreloaderScreen.prototype.update = function() {

    this._bar.fill.x = this._bar.fill.start.x + this.loaded * this._bar.fill.texture.width;
};

},{"../Common":2,"./SimpleScreen":47}],42:[function(require,module,exports){
var SimpleScreen        = require("./SimpleScreen");
var Common              = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function CoolWaitScreen( waitTime ) 
{
	this._assetManager = p3.AssetManager.instance;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._spinnerCenter = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._spinnerBlack = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._spinnerWhite = null;

    /**
     * @type {Array.<PIXI.Sprite>}
     * @private
     */
    this._radials = [];

    /**
     * @type {PIXI.Container}
     * @private
     */
    this._emitterHolder = null;

    /**
     * @type {cloudkid.Emitter}
     * @private
     */
    this._emitter = null;
	
	this.WAIT_TIME = waitTime;
	this._waitTimer = 0;

    // p3.Scene.call(this);	
	
    SimpleScreen.call(this);
	
	// Events.
	this.signals.onWaitTimeCompleted = new signals.Signal();
}
module.exports = CoolWaitScreen;
CoolWaitScreen.prototype = Object.create(SimpleScreen.prototype);
CoolWaitScreen.prototype.constructor = CoolWaitScreen;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
CoolWaitScreen.prototype.init = function()
{
    var bg = new PIXI.Sprite(this._assetManager.getTexture("preloader_bg"));
    this.addChild(bg);

    var textures = [
        this._assetManager.getTexture("preloader_radial_001"),
        this._assetManager.getTexture("preloader_radial_002"),
        this._assetManager.getTexture("preloader_radial_003"),
        this._assetManager.getTexture("preloader_radial_004"),
        this._assetManager.getTexture("preloader_radial_005"),
        this._assetManager.getTexture("preloader_radial_006"),
        this._assetManager.getTexture("preloader_radial_007"),
        this._assetManager.getTexture("preloader_radial_008")
    ];

    var radial;
    var offset  = Math.random() * (Math.PI * 2);
    var angle   = (Math.PI * 2) / (textures.length);
    for (var i = 0; i < textures.length; ++ i) {
        radial          = new PIXI.Sprite(textures[i]);
        radial.rotation = offset + i * angle;
        radial.x        = Common.STAGE_WIDTH * 0.5 + Math.sin(radial.rotation) * 140.0;
        radial.y        = Common.STAGE_HEIGHT * 0.5 + -Math.cos(radial.rotation) * 140.0;
        radial.anchor   = new PIXI.Point(0.5, 1.0);
        radial.visible  = false;
        this.addChild(radial);
        this._radials.push(radial);
    }

    this._emitterHolder     = new PIXI.Container();
    this._emitterHolder.x   = Common.STAGE_WIDTH * 0.5;
    this._emitterHolder.y   = Common.STAGE_HEIGHT * 0.5;
    this.addChild(this._emitterHolder);

    var config = this._assetManager.getJSON("preloader_radial_spray");
    this._emitter = new cloudkid.Emitter(this._emitterHolder, [
        this._assetManager.getTexture("particle_001"),
        this._assetManager.getTexture("particle_002"),
        this._assetManager.getTexture("particle_003"),
        this._assetManager.getTexture("particle_004"),
        this._assetManager.getTexture("particle_005"),
        this._assetManager.getTexture("particle_006"),
        this._assetManager.getTexture("particle_007")
    ], config);
    this._emitter.emit = false;

    var holder  = new PIXI.Container();
    holder.x    = Common.STAGE_WIDTH * 0.5;
    holder.y    = Common.STAGE_HEIGHT * 0.5;
    this.addChild(holder);
    // DistortionEffect.shake(holder);

    this._spinnerBlack          = new PIXI.Sprite(this._assetManager.getTexture("preloader_ring_black"));
    this._spinnerBlack.anchor   = new PIXI.Point(0.5, 0.5);
    this._spinnerBlack.visible  = false;
    holder.addChild(this._spinnerBlack);

    this._spinnerCenter         = new PIXI.Sprite(this._assetManager.getTexture("preloader_ring_centre"));
    this._spinnerCenter.anchor  = new PIXI.Point(0.5, 0.5);
    this._spinnerCenter.visible = false;
    holder.addChild(this._spinnerCenter);

    this._spinnerWhite          = new PIXI.Sprite(this._assetManager.getTexture("preloader_ring_white"));
    this._spinnerWhite.anchor   = new PIXI.Point(0.5, 0.5);
    this._spinnerWhite.visible = false;
    holder.addChild(this._spinnerWhite);
	
	// Black screen
	this._screenTransition = new PIXI.Sprite(this._assetManager.getTexture("preloader_bg"));
	this._screenTransition.alpha = 0;
	this._screenTransition.width  = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.tint = 0x000000;
	this.addChild(this._screenTransition)	
};

/**
 */
CoolWaitScreen.prototype.dispose = function()
{
    SimpleScreen.prototype.dispose.call(this);
};

/**
 */
CoolWaitScreen.prototype.resize = function()
{
    this.x = (p3.View.width - Common.STAGE_WIDTH) * 0.5;
};

/**
 */
CoolWaitScreen.prototype.update = function()
{
	 this._emitter.update( p3.Timestep.deltaTime );
    // console.log("LOADING: " + this.loadedPercentage);

    /*
    this.loadedPercentage += 1;

    if(this.loadedPercentage > 100)
        this.loadedPercentage = 0;*/

    // this._barInner.x = this._barInnerStartX + (698 * (this.loadedPercentage/100));
	
	if ( this._waitTimer != null )
	{
		this._waitTimer += p3.Timestep.deltaTime;
		if ( this._waitTimer >= this.WAIT_TIME )
		{
			this._waitTimer = null;
		
			this.signals.onWaitTimeCompleted.dispatch();
		}
	}
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
CoolWaitScreen.prototype.animateIn = function(callback, scope)
{
    this._emitter.emit = true;

    this._spinnerBlack.scale     = new PIXI.Point();
    this._spinnerBlack.visible   = true;
    TweenMax.to(this._spinnerBlack.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Power2.easeOut,
        easeParams: [2]
    });

    this._spinnerCenter.scale     = new PIXI.Point();
    this._spinnerCenter.visible   = true;
    TweenMax.to(this._spinnerCenter.scale, 0.4, {
        delay: 0.06,
        x: 1.0,
        y: 1.0,
        ease: Power2.easeOut,
        easeParams: [2]
    });

    this._spinnerWhite.scale     = new PIXI.Point();
    this._spinnerWhite.visible   = true;
    TweenMax.to(this._spinnerWhite.scale, 0.46, {
        delay: 0.08,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [4]
    });

    TweenMax.to(this._spinnerCenter.scale, 1.4, {
        delay: 0.6,
        x: 0.94,
        y: 0.94,
        ease: Back.easeOut,
        yoyo: true,
        repeat: -1
    });

    TweenMax.to(this._spinnerBlack, 8.0, {
        delay: 0.2,
        rotation: Math.PI * 8,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1
    });

    TweenMax.to(this._spinnerWhite, 6.0, {
        delay: 0.24,
        rotation: -Math.PI * 8,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1
    });

    var radial;
    for (var i = 0; i < this._radials.length; ++ i) {
        radial = this._radials[i];
        radial.visible = true;
        radial.scale.y = 0.0;
        TweenMax.to(radial.scale, 0.8, {
            delay: 0.14 + Math.random() * 0.2,
            y: 1.0,
            ease: Back.easeOut,
            easeParams: [Math.random() * 2],
            onComplete: function(radial) {
                TweenMax.to(radial.scale, 1.6 + Math.random() * 0.4, {
                    delay: Math.random() * 0.94,
                    y: 0.9,
                    ease: Power1.easeInOut,
                    yoyo: true,
                    repeat: -1
                });
            },
            onCompleteParams: [radial],
            onCompleteScope: this
        });
    }
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
CoolWaitScreen.prototype.animateOut = function(callback, scope) 
{
	var tween = new TimelineMax({onCompleteScope:scope, onComplete:callback});
	// tween.to(this._screenTransition, 0.5, {alpha: 1, ease:Sine.EaseInOut},  1);
	tween.to(this._screenTransition, 0.5, {alpha: 1, ease:Sine.EaseInOut},  0);
	Common.animator.add(tween);
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


},{"../Common":2,"./SimpleScreen":47}],43:[function(require,module,exports){
var Common       = require( "../Common" );
var SimpleScreen = require( "./SimpleScreen" );
var SoundSFX     = require( "../general/SoundSFX" );
var Global     = require( "../general/Global" );
var DoubleStateIcon = require( "../ui/DoubleStateIcon" );
var SingleStateIcon = require( "../ui/SingleStateIcon" );
var BenMuteButton = require( "../ui/BenMuteButton" );
var BenButton = require( "../ui/BenButton" );
var ButtonSprites = require( "../ui/ButtonSprites" );
var LevelButton = require( "../ui/LevelButton" );
var BgRing = require( "../ui/BgRing" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function EndLevelScreen( levelResultInfo )
{
	// Parent.
	SimpleScreen.call( this );

	
	// Attributes.
	this._levelResultInfo = levelResultInfo;
	this._currentGlobalScore = 0;	

	/**
	 * @type {Signal}
	 */
	this.signals.requestedLevelSelectionScreen = new signals.Signal();
	this.signals.replayLevel = new signals.Signal();
	
	
	// Constants.
	this.GLOBAL_SCORE_ANIM_SPEED = 10000;
}

module.exports = EndLevelScreen;
EndLevelScreen.prototype = Object.create( SimpleScreen.prototype );
EndLevelScreen.prototype.constructor = EndLevelScreen;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
EndLevelScreen.prototype.init = function()
{
	SimpleScreen.prototype.init.call( this );

	
	// Saved result data.
	var levelResultAux = Common.savedData.arrLevelResult[ this._levelResultInfo.chapterIndex ][ this._levelResultInfo.levelIndex ];
	
	// Create UI elements.
	// Button sprites.
	var mediumButtonSprites    	   = new ButtonSprites();
    mediumButtonSprites.normal       = this._assetManager.getTexture( "btn_primary_medium_off" );
    mediumButtonSprites.over         = this._assetManager.getTexture( "btn_primary_medium_over" );
    mediumButtonSprites.innerRing    = this._assetManager.getTexture( "btn_primary_medium_off_ring_001" );
    mediumButtonSprites.outerRing    = this._assetManager.getTexture( "btn_primary_medium_off_ring_002" );
	var largeButtonSprites    	   = new ButtonSprites();
    largeButtonSprites.normal       = this._assetManager.getTexture( "btn_primary_large_off" );
    largeButtonSprites.over         = this._assetManager.getTexture( "btn_primary_large_over" );
    largeButtonSprites.innerRing    = this._assetManager.getTexture( "btn_primary_large_off_ring_001" );
    largeButtonSprites.outerRing    = this._assetManager.getTexture( "btn_primary_large_off_ring_002" );
	
	// Main container.
	this._container = new PIXI.Container();
	this._container.x = Common.STAGE_WIDTH * 0.5;
	this._container.y = Common.STAGE_HEIGHT * 0.5;
	this.addChild( this._container );
	
	// Background.
	this._bg = new PIXI.Sprite( this._assetManager.getTexture( "bg_ui" ) );
	this._bg.width = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this._bg.anchor = new PIXI.Point( 0.5, 0.5 );
	this._container.addChild( this._bg );
	
	// Background animated ring.
	this._bgRing = new BgRing( "panel/end_game_panel_003", "panel/end_game_panel_002", "panel/end_game_panel_001" );
	this._bgRing.anchor = new PIXI.Point( .5, .5 );
	this._bgRing.play();	
	this._container.addChild( this._bgRing );

	// Title text.
	var jsonLevelCompleteText = this._assetManager.getJSON( "config" )[ 'copy' ][ "LEVEL" ][ Common.COUNTRY_CODE ];
	if ( Common.COUNTRY_CODE != "ar" && Common.COUNTRY_CODE != "ru" ) 
        this._titleText = new PIXI.extras.BitmapText( jsonLevelCompleteText.text.toUpperCase(), { font: "80px ahkio_100_green_endgame", align: "center" } );
	else 
        this._titleText = new PIXI.Text( 
			jsonLevelCompleteText.text.toUpperCase(), 
			{ font: "85px Arial", fill: "#80FF09", stroke: "#044300", strokeThickness: 10, align: "center" } );    	
	this._titleText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._titleText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.12 );
	this.addChild( this._titleText );
	
	// Global score.
	// Text.
	this._globalScoreValue = Math.ceil( this._levelResultInfo.collectedCoins * Global.SCORE_COIN_MULTIPLIER 
		+ this._levelResultInfo.killedEnemies * Global.SCORE_ENEMY_MULTIPLIER 
		+ this._levelResultInfo.collectedPowerups * Global.SCORE_POWERUP_MULTIPLIER 
		+ this._levelResultInfo.destroyedBlocks * Global.SCORE_BLOCK_MULTIPLIER
		- this._levelResultInfo.steps
		+ this._levelResultInfo.time );
	this._globalScoreText = new PIXI.extras.BitmapText( 
		this.formatNumberWithCommas( 0 ), 
		{ font: "125px ahkio_90_orange_endgame", align: "center" } );
	this._globalScoreText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._globalScoreText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.24 );
	this.addChild( this._globalScoreText );	
	
	// Time score.
	// Text.
	/*this._timeScoreText = new PIXI.extras.BitmapText( Math.ceil( this._levelResultInfo.time ).toString(), { font: "ahkio_60_white_endlevel", align: "center" } );
	// Icon.
	this._timeScoreIcon = new PIXI.Sprite( this._assetManager.getTexture( "clock_icon" ) );
	this._timeScoreIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	this._timeScoreIcon.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.44 - this._timeScoreText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.45 );
	this.addChild( this._timeScoreIcon );
	this._timeScoreIcon.addChild( this._timeScoreText );	
	this._timeScoreText.position = new PIXI.Point( 
		this._timeScoreIcon.width * 0.5, 
		-this._timeScoreIcon.height * 0.7 );*/
	
	// Steps score.
	// Text.
	/*this._stepsScoreText = new PIXI.extras.BitmapText( Math.ceil( this._levelResultInfo.steps ).toString(), { font: "ahkio_60_white_endlevel", align: "center" } );
	// Icon.
	this._stepsScoreIcon = new PIXI.Sprite( this._assetManager.getTexture( "steps_icon" ) );
	this._stepsScoreIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	this._stepsScoreIcon.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.56 - this._stepsScoreText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.45 );
	this.addChild( this._stepsScoreIcon );
	this._stepsScoreIcon.addChild( this._stepsScoreText );	
	this._stepsScoreText.position = new PIXI.Point( 
		this._stepsScoreIcon.width * 0.5, 
		-this._stepsScoreIcon.height * 0.7 );*/
	
	// Pickups score.
	// Text.
	this._pickupsScoreText = new PIXI.extras.BitmapText( this._levelResultInfo.collectedCoins + "/" + this._levelResultInfo.totalCoins, { font: "ahkio_60_white_endgame", align: "center" } );
	// Icon.
	this._pickupsScoreIcon = new PIXI.Sprite( this._assetManager.getTexture( "pickup_icon" ) );
	this._pickupsScoreIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	this._pickupsScoreIcon.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._pickupsScoreText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.49 );
	this.addChild( this._pickupsScoreIcon );
	this._pickupsScoreIcon.addChild( this._pickupsScoreText );	
	this._pickupsScoreText.position = new PIXI.Point( 
		this._pickupsScoreIcon.width * 0.5, 
		-this._pickupsScoreIcon.height * 0.55 );
	
	// Star icons.
	// Obtain earned stars from collected pickups.
	var stars = 1;
	if ( this._levelResultInfo.collectedCoins == this._levelResultInfo.totalCoins )
		stars = 3;
	else if ( this._levelResultInfo.collectedCoins >= this._levelResultInfo.totalCoins * Global.SCORE_STAR_FACTOR )
		stars = 2;
	var STAR_ICON_RADIUS = 150;
	var STAR_ICON_ANGLE = Math.PI * 0.15;
	this._arrStarIcon = [];	
	//const STAR_ICON_ROTATION = [ Math.PI * 0.15, 0, -Math.PI * 0.15 ];
	const STAR_ICON_POSITION = [ 
		new PIXI.Point( -STAR_ICON_RADIUS * Math.cos( STAR_ICON_ANGLE ), STAR_ICON_RADIUS * Math.sin( STAR_ICON_ANGLE ) ), 
		new PIXI.Point( 0, STAR_ICON_RADIUS ), 
		new PIXI.Point( STAR_ICON_RADIUS * Math.cos( STAR_ICON_ANGLE ), STAR_ICON_RADIUS * Math.sin( STAR_ICON_ANGLE ) ) ];
	var tl = new TimelineMax();
	for ( var i = 0; i < 3; ++i )
	{
		var starIconAux = new PIXI.Sprite( this._assetManager.getTexture( i < stars ? "endlevel/star_on_big" : "endlevel/star_off_big" ) );		
		starIconAux.anchor = new PIXI.Point( 0.5, 0.5 );
		//starIconAux.rotation = STAR_ICON_ROTATION[ i ];
		starIconAux.position = STAR_ICON_POSITION[ i ];
		
		starIconAux.position.x += Common.STAGE_WIDTH * 0.5;
		starIconAux.position.y += Common.STAGE_HEIGHT * 0.5;
		starIconAux.scale = new PIXI.Point( .0, .0 );
		
		tl.to( starIconAux.scale, .5, { x:1, y:1, ease:Elastic.easeOut }, 0.4 + i * .1 );
		if ( i < stars )
			tl.addCallback( 
				function( p ) { p3.AudioManager.instance.playSound( "sfx_star_award_0" + ( p + 1 ).toString() ); },
				0.4 + i * .1,
				[ i ] );
		
		this.addChild( starIconAux );		
		this._arrStarIcon.push( starIconAux );
	}
	Common.animator.add( tl );
	
	// Next level button.
	// Button
	if ( this._levelResultInfo.chapterIndex < Global.LEVEL_ID_ARRAY.length - 1 
		|| this._levelResultInfo.chapterIndex == Global.LEVEL_ID_ARRAY.length - 1 && this._levelResultInfo.levelIndex < Global.LEVEL_ID_ARRAY[ 0 ].length - 1 )
	{
		const UI_BUTTON_RADIUS = 400;
		this._nextLevelButton = new BenButton( largeButtonSprites );
		this._nextLevelButton.x = Common.STAGE_WIDTH * 0.5 + UI_BUTTON_RADIUS * Math.cos( Math.PI * 0.22 );
		this._nextLevelButton.y = Common.STAGE_HEIGHT * 0.5 + UI_BUTTON_RADIUS * Math.sin( Math.PI * 0.22 );		
		this._nextLevelButton.signals.down.addOnce( this.nextLevelPressed, this );
		this._nextLevelButton.overSoundName = "sfx_btn_rollover_00";
		this._nextLevelButton.scale = new PIXI.Point( 0, 0 );
		this._nextLevelButton.animate = true;
		// Icon.
		this._nextLevelIcon = new SingleStateIcon( 
				this._assetManager.getTexture( "btn_primary_large_icon_play_off" ),
				this._assetManager.getTexture( "btn_primary_large_icon_play_over" ),
				this._nextLevelButton
			);
		
		this.addChild( this._nextLevelButton );
	}
	
	// Replay level button.
	// Button.
	this._replayLevelButton = new BenButton( mediumButtonSprites );
	this._replayLevelButton.x = Common.STAGE_WIDTH * 0.54;
	this._replayLevelButton.y = Common.STAGE_HEIGHT * 0.88;		
	this._replayLevelButton.signals.down.addOnce( this.replayLevelPressed, this );
	this._replayLevelButton.overSoundName = "sfx_btn_rollover_00";
	this._replayLevelButton.scale = new PIXI.Point( 0, 0 );
	this._replayLevelButton.animate = true;
		// Icon.
	this._replayLevelIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_replay_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_replay_over" ),
			this._replayLevelButton
		);
	
	this.addChild( this._replayLevelButton );
	
	// Chapters button.
	// Button.
	this._chaptersButton = new BenButton( mediumButtonSprites );
	this._chaptersButton.x = Common.STAGE_WIDTH * 0.46;
	this._chaptersButton.y = this._replayLevelButton.y;		
	this._chaptersButton.signals.down.add( this.chaptersPressed, this );
	this._chaptersButton.overSoundName = "sfx_btn_rollover_00";
	this._chaptersButton.scale = new PIXI.Point( 0, 0 );
	this._chaptersButton.animate = true;
	// Icon.
	this._chaptersIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_levels_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_levels_over" ),
			this._chaptersButton
		);
	
	this.addChild( this._chaptersButton );
	
	// Mute button.
	// Icon.
	var muteIcon = new DoubleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_audio_off" ),	
			this._assetManager.getTexture( "btn_primary_medium_icon_mute_off" ),	
			this._assetManager.getTexture( "btn_primary_medium_icon_audio_over" ),	
			this._assetManager.getTexture( "btn_primary_medium_icon_mute_over" ) );
	muteIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	// Button.
	this._otherMuteButton = new BenMuteButton ( mediumButtonSprites, muteIcon );
	this._otherMuteButton.id = "mute";
	this._otherMuteButton.y = this._guiButtonTopMargin;
	this._otherMuteButton.scale = new PIXI.Point(0, 0);
	this._otherMuteButton.overSoundName = "sfx_btn_rollover_00";
	this._otherMuteButton.init();
	
	this.addChild(this._otherMuteButton);
	
	// Home button.
	// Button
	this._homeButton = new BenButton ( mediumButtonSprites );
	this._homeButton.animate = true;
	this._homeButton.y = this._guiButtonTopMargin;		
	this._homeButton.signals.down.add( this.homePressed, this );
	this._homeButton.overSoundName = "sfx_btn_rollover_00";
	//this._homeButton.scale = new PIXI.Point(0, 0);
	this._homeButton.init();
	// Icon.
	this._nextChapteIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_home_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_home_over" ),
			this._homeButton
		);
	
	this.addChild( this._homeButton );
	
	// Rnadom powerup sprite.
	if ( this._levelResultInfo.arrPowerupId.length > 0 )
	{
		const POWERUP_ID_TO_SPRITE = { 
			2:"endlevel/cannonbolt",
			3:"endlevel/overflow",
			4:"endlevel/4arms",
			5:"endlevel/upgrade" };				
	
		var powerupId = this._levelResultInfo.arrPowerupId[ Math.floor( Math.random() * this._levelResultInfo.arrPowerupId.length ) ];
		this._powerupSprite = new PIXI.Sprite( this._assetManager.getTexture( POWERUP_ID_TO_SPRITE[ powerupId.toString() ] ) );
		this._powerupSprite.anchor = new PIXI.Point( .5, 1 );
		this._powerupSprite.x = Common.STAGE_WIDTH * .5 - 450;
		this._powerupSprite.y = Common.STAGE_HEIGHT * 0.98;	
		
		this.addChild( this._powerupSprite );
	}

	// Black screen.
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)
	
	//Sounds
	// this._bgMusic = SoundSFX.play('music_loop_track', {volume:0.66, loop:true});
	// Sfx.
	p3.AudioManager.instance.playSound( "sfx_number_countup_loop" );
	
	// Save data.
	var isSaveData = false;
	if ( stars > levelResultAux.stars )
	{
		levelResultAux.stars = stars;
		isSaveData = true;
	}
	if ( this._globalScoreValue > levelResultAux.score )
	{
		levelResultAux.score = this._globalScoreValue;
		isSaveData = true;
	}
	if ( isSaveData )
		Common.savedData.save();
};

/**
 */
EndLevelScreen.prototype.update = function()
{
	// Global score animation.
	if ( this._currentGlobalScore < this._globalScoreValue )
	{
		this._currentGlobalScore += p3.Timestep.deltaTime * this.GLOBAL_SCORE_ANIM_SPEED;
		if ( this._currentGlobalScore >= this._globalScoreValue )
		{
			this._currentGlobalScore = this._globalScoreValue;
			
			// Sfx.
			p3.AudioManager.instance.stopSound( "sfx_number_countup_loop" );
		}
			
		this._globalScoreText.text = this.formatNumberWithCommas( Math.floor( this._currentGlobalScore ) );		
		this._globalScoreText.position.x = Common.STAGE_WIDTH * 0.5 - this._globalScoreText.width * 0.5;
	}
};

/**
 */
EndLevelScreen.prototype.resize = function()
{

	SimpleScreen.prototype.resize.call( this );

	this._otherMuteButton.x = this._getFirstButtonPositionRight();
	this._homeButton.x = this._getFirstButtonPositionLeft();
};

/**
 */
EndLevelScreen.prototype.dispose = function()
{
	// SoundSFX.stop('music_menu_loop_00');
	// Sfx.
	p3.AudioManager.instance.stopSound( "sfx_number_countup_loop" );
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
EndLevelScreen.prototype.animateIn = function( callback, scope )
{
	SimpleScreen.prototype.animateIn.call( this );

	// Buttons
	var tl = new TimelineMax();
	
	//tl.to( this._benMuteButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.4 );
	//tl.to( this._homeButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.4 );
	tl.to( this._chaptersButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.6 );
	if ( this._nextLevelButton != null )
		tl.to( this._nextLevelButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.6 );
	tl.to( this._replayLevelButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.6 );
		
	Common.animator.add( tl );
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
EndLevelScreen.prototype.animateOut = function( callback, scope )
{
	SimpleScreen.prototype.animateOut.call( this );

	var tl = new TimelineMax( {onComplete:callback, onCompleteScope:scope} );

	// Buttons
	//tl.to( this._benMuteButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	//tl.to( this._homeButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	tl.to( this._chaptersButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	if ( this._nextLevelButton != null )
		tl.to( this._nextLevelButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	tl.to( this._replayLevelButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	tl.to( this._screenTransition, 0.7, { x:0, ease:Sine.easeOut }, 0.6 );

	Common.animator.add( tl );

	// this._bgMusic.fadeOut(0, 1000);
};


//===================================================
// PRIVATE METHODS
//===================================================

EndLevelScreen.prototype.formatNumberWithCommas = function( x ) 
{
    var parts = x.toString().split(".");
	
    parts[ 0 ] = parts[ 0 ].replace( /\B(?=(\d{3})+(?!\d))/g, "," );
	
    return parts.join( "." );
}


//===================================================
// EVENTS
//===================================================

/**
 */
EndLevelScreen.prototype.nextLevelPressed = function()
{
	this.animateOut( 
		function() { this.signals.requestedNextScreen.dispatch(); }, 
		this );
	
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
EndLevelScreen.prototype.chaptersPressed = function()
{
	this.animateOut( 
		function() { this.signals.requestedLevelSelectionScreen.dispatch(); }, 
		this );
	
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
EndLevelScreen.prototype.replayLevelPressed = function()
{
	this.animateOut( 
		function() { this.signals.replayLevel.dispatch(); }, 
		this );
	
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
EndLevelScreen.prototype.homePressed = function()
{
	this.animateOut( 
		function() { this.signals.requestedPreviousScreen.dispatch(); }, 
		this );

	SoundSFX.play("sfx_btn_press_00");
};


//===================================================
// GETTERS/SETTERS
//===================================================


},{"../Common":2,"../general/Global":31,"../general/SoundSFX":33,"../ui/BenButton":49,"../ui/BenMuteButton":50,"../ui/BgRing":51,"../ui/ButtonSprites":53,"../ui/DoubleStateIcon":54,"../ui/LevelButton":55,"../ui/SingleStateIcon":56,"./SimpleScreen":47}],44:[function(require,module,exports){
var Common       = require( "../Common" );
var SimpleScreen = require( "./SimpleScreen" );
var SoundSFX     = require( "../general/SoundSFX" );
var Level        = require( "../game/Level" );
var BenMuteButton = require( "../ui/BenMuteButton" );
var BenButton = require( "../ui/BenButton" );
var DoubleStateIcon = require( "../ui/DoubleStateIcon" );
var SingleStateIcon = require( "../ui/SingleStateIcon" );
var ButtonSprites = require( "../ui/ButtonSprites" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function GameScreen( chapterIndex, levelIndex )
{
	this._chapterIndex = chapterIndex;
	this._levelIndex = levelIndex;
	this._roomProgressContainer = new PIXI.Container();

	SimpleScreen.call( this );

	this.signals.pausePressed = new signals.Signal();
}

module.exports = GameScreen;
GameScreen.prototype = Object.create( SimpleScreen.prototype );
GameScreen.prototype.constructor = GameScreen;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
GameScreen.prototype.init = function()
{
	console.log( "GAME INITIALIZED" );

	SimpleScreen.prototype.init.call( this );

	// Level
	this._level = new Level( this._chapterIndex, this._levelIndex );	
	this.addChild( this._level );
	this._level.init();
	this._level.signals.onNextRoom.add( this.onNextRoom, this );
		
	// Init UI.
	// Room progress.	
	var roomCount = this._level.data.rooms.length; // TODO:
	for ( var i = 0; i < roomCount; ++i )
	{
		var roomSprite = new PIXI.Sprite( this._assetManager.getTexture( i == 0 ? "icon_room_on" : "icon_room_off" ) );
		
		this._roomProgressContainer.addChild( roomSprite );
		roomSprite.position = new PIXI.Point( roomSprite.width * i, 0 );
	}
	this.addChild( this._roomProgressContainer );
	this._roomProgressContainer.position = new PIXI.Point( 
		Common.STAGE_WIDTH * .5 - this._roomProgressContainer.children[ 0 ].width * roomCount * .5,
		0 );
	
	// Button sprites.
	var mediumButtonSprites = new ButtonSprites();
    mediumButtonSprites.normal = this._assetManager.getTexture( "btn_primary_medium_off" );
    mediumButtonSprites.over = this._assetManager.getTexture( "btn_primary_medium_over" );
    mediumButtonSprites.innerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_001" );
    mediumButtonSprites.outerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_002" );
	
	// Pause button.
	// Button
	this._pauseButton = new BenButton( mediumButtonSprites );
	this._pauseButton.y = this._guiButtonTopMargin;
	this._pauseButton.signals.down.add( this.pausePressed, this );
	this._pauseButton.overSoundName = "sfx_btn_rollover_00";
	//this._pauseButton.scale = new PIXI.Point( 0, 0 );
	this._pauseButton.animate = true;
	// Icon.
	this._pauseIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_pause_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_pause_over" ),
			this._pauseButton
		);
	
	this.addChild( this._pauseButton );
	
	// Time text.
	this._timeText = new PIXI.extras.BitmapText( this._level.levelResultInfo.time, { font: "ahkio_60_white_endgame", align: "center" } );
	this.addChild( this._timeText );

	// Black screen
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this.addChild(this._screenTransition)

	this._isPaused = false;
	
	//Sounds
	// this._bgMusic = SoundSFX.play('music_ingame_loop_00', {loop:true});
	// this._bgMusic.fadeIn(1, 1000);

	this.startGame();
	// this.endGame();
}

/**
 */
GameScreen.prototype.startGame = function()
{
	this.showGUI();
}

/**
 */
GameScreen.prototype.endGame = function()
{
	this._paused = true;

	Common.animator.setTimeout(
		function()
		{
			TweenMax.killAll();
			Common.animator.removeAll();

			this.signals.requestedNextScreen.dispatch( this._score, this._highscore );
		}, 
		1, 
		this );
}

/**
 */
GameScreen.prototype.update = function()
{
	if ( Common.keyboard.getKeyJustPressed( Common.keyboard.KEY_Q ) )
		this._isPaused = !this._isPaused;
	
	if ( !this._isPaused )
	{
		// Update time.
		if ( this._level.levelResultInfo.time > 0 )
		{
			if ( this._level.state == this._level.STATE_IDLE )
			{
				this._level.levelResultInfo.time -= p3.Timestep.deltaTime;
				if ( this._level.levelResultInfo.time < 0 )
					this._level.levelResultInfo.time = 0;
			}
				
			this._timeText.text = Math.ceil( this._level.levelResultInfo.time ).toString();
		}
	
		// Update world.
		this._level.update();
	}
}

/**
 */
GameScreen.prototype.resize = function()
{
	SimpleScreen.prototype.resize.call(this);

	this._pauseButton.x  = this._getFirstButtonPositionRight();
	
	this._timeText.x = this._getFirstButtonPositionLeft();
	
	this._level.resize();
}

/**
 */
GameScreen.prototype.dispose = function()
{
	SoundSFX.stop('music_ingame_loop_00');
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
GameScreen.prototype.animateIn = function(callback, scope)
{
	SimpleScreen.prototype.animateIn.call(this);

	var tl = new TimelineMax({onCompleteScope:scope, onComplete:callback});
	tl.to(this._screenTransition, 0.5, {alpha:0, ease:Linear.easeNone});
	Common.animator.add(tl);
}

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
GameScreen.prototype.animateOut = function(callback, scope)
{
	SimpleScreen.prototype.animateIn.call(this);

	var tl = new TimelineMax({onCompleteScope:scope, onComplete:callback});
	tl.to(this._screenTransition, 0.5, {alpha:1, ease:Linear.easeNone});
	Common.animator.add(tl);
}


/**
 */
GameScreen.prototype.hideGUI = function(callback, scope)
{
	this._paused = true;
	
	TweenMax.pauseAll();
	
	this._pauseButton.visible = false;
	
	callback.call( scope );

	/*var tl = new TimelineMax( { onCompleteScope:scope, onComplete:callback } );
	tl.to( this._pauseButton.scale, .35, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._benMuteButton.scale, .35, { x:0, y:0, ease:Back.easeIn }, 0 );
	Common.animator.add( tl );*/
}

/**
 */
GameScreen.prototype.showGUI = function()
{
	this._paused = false;
	
	TweenMax.resumeAll();

	this._pauseButton.visible = true;
	
	/*var tl = new TimelineMax();
	tl.to( this._benMuteButton.scale, .5, { x:1, y:1, ease:Back.easeOut }, 0.4 );
	tl.to( this._pauseButton.scale, .5, { x:1, y:1, ease:Back.easeOut }, 0.5 );
	Common.animator.add( tl );*/
}


//===================================================
// PRIVATE METHODS
//===================================================

/**
 */
GameScreen.prototype.restart = function()
{
	//if(this._isPaused) return;
	
	this._isPaused = false;
	
	/*this.hideGUI();
	this.animateOut(
		function() { this.signals.requestedPreviousScreen.dispatch(); }, 
		this );*/
};


//===================================================
// EVENTS
//===================================================

/**
 */
GameScreen.prototype.pausePressed = function()
{
	SoundSFX.play( "sfx_btn_press_00" );
	
	this._level.room.avatar.stopRunSfx();
	p3.AudioManager.instance.stopSound( "sfx_draw_loop" );

	this.signals.pausePressed.dispatch();
}

/**
 */
GameScreen.prototype.onNextRoom = function( currentRoomIndex, isAllCoinsCollected )
{
	this._roomProgressContainer.children[ currentRoomIndex - 1 ].texture = this._assetManager.getTexture( isAllCoinsCollected ? "icon_room_off_filled" : "icon_room_off" );
	this._roomProgressContainer.children[ currentRoomIndex ].texture = this._assetManager.getTexture( "icon_room_on" );
}


//===================================================
// GETTERS / SETTERS
//===================================================

Object.defineProperty( 
	GameScreen.prototype, 
	"level", 
	{ get: function() { return this._level; } } );
	
Object.defineProperty( 
	GameScreen.prototype, 
	"roomProgressContainer", 
	{ get: function() { return this._roomProgressContainer; } } );
},{"../Common":2,"../game/Level":18,"../general/SoundSFX":33,"../ui/BenButton":49,"../ui/BenMuteButton":50,"../ui/ButtonSprites":53,"../ui/DoubleStateIcon":54,"../ui/SingleStateIcon":56,"./SimpleScreen":47}],45:[function(require,module,exports){
var Common = require( "../Common" );
var SimpleScreen = require( "./SimpleScreen" );
var SoundSFX = require( "../general/SoundSFX" );
var DoubleStateIcon = require( "../ui/DoubleStateIcon" );
var SingleStateIcon = require( "../ui/SingleStateIcon" );
var BenMuteButton = require( "../ui/BenMuteButton" );
var BenButton = require( "../ui/BenButton" );
var ButtonSprites = require( "../ui/ButtonSprites" );
var BgRing = require( "../ui/BgRing" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function InstructionsScreen()
{
	// Parent.
	SimpleScreen.call( this );
	
	
	// Constants.
	this.TUTORIAL_INDEX_H_POSITIONS = [ -67, 0, 64 ];
	
	
	// Attributes.
	this._tutorialImageIndex = 0;
}

module.exports = InstructionsScreen;
InstructionsScreen.prototype = Object.create( SimpleScreen.prototype );
InstructionsScreen.prototype.constructor = InstructionsScreen;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
InstructionsScreen.prototype.init = function()
{
	console.log( "INSTRUCTIONS INITIALIZED" );

	SimpleScreen.prototype.init.call( this );

	// Init UI.
	var mediumButtonSprites = new ButtonSprites();
    mediumButtonSprites.normal = this._assetManager.getTexture( "btn_primary_medium_off" );
    mediumButtonSprites.over = this._assetManager.getTexture( "btn_primary_medium_over" );
    mediumButtonSprites.innerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_001" );
    mediumButtonSprites.outerRing = this._assetManager.getTexture( "btn_primary_medium_off_ring_002" );
	var largeButtonSprites = new ButtonSprites();
    largeButtonSprites.normal = this._assetManager.getTexture( "btn_primary_large_off" );
    largeButtonSprites.over = this._assetManager.getTexture( "btn_primary_large_over" );
    largeButtonSprites.innerRing = this._assetManager.getTexture( "btn_primary_large_off_ring_001" );
    largeButtonSprites.outerRing = this._assetManager.getTexture( "btn_primary_large_off_ring_002" );
	
	this._container   = new PIXI.Container();
	this._container.x = Common.STAGE_WIDTH * 0.5;
	this._container.y = Common.STAGE_HEIGHT * 0.5;	
	this.addChild( this._container );

	// Background.
	this._bg = new PIXI.Sprite( this._assetManager.getTexture( "paused_bg" ) );
	this._bg.width = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this._bg.anchor = new PIXI.Point( 0.5, 0.5 );	
	this._container.addChild( this._bg );
	
	// Tutorial images.
	this._arrTutorialImage = [];
	var TUTORIAL_IMAGE_IDS = [ 
		p3.Device.isMobile ? "tutorials/tutorial_mobile_ben001" : "tutorials/tutorial_desktop_ben001", 
		"tutorials/tutorial_ben002",
		"tutorials/tutorial_ben003" ];
	for ( var i = 0; i < 3; ++i )
	{
		var tutorialImage = new PIXI.Sprite( this._assetManager.getTexture( TUTORIAL_IMAGE_IDS[ i ] ) );
		tutorialImage.anchor = new PIXI.Point( 0.5, 0.5 );	
		tutorialImage.position.y = -35;
		tutorialImage.visible = i == 0;
		
		this._arrTutorialImage.push( tutorialImage );		
		this._container.addChild( tutorialImage );
	}
	
	// Tutorial index image.
	this._tutorialIndexImage = new PIXI.Sprite( this._assetManager.getTexture("pickup_00") );
	this._tutorialIndexImage.anchor = new PIXI.Point( .5, .5 );
	this._tutorialIndexImage.position.x = this.TUTORIAL_INDEX_H_POSITIONS[ this._tutorialImageIndex ];
	this._tutorialIndexImage.position.y = 135;
	this._container.addChild( this._tutorialIndexImage );
	
	// Title.
	var jsonInstructionsText = this._assetManager.getJSON( "config" )[ 'copy' ][ "INSTRUCTIONS" ][ Common.COUNTRY_CODE ];
	if ( Common.COUNTRY_CODE != "ar" && Common.COUNTRY_CODE != "ru" ) 
        this._titleText = new PIXI.extras.BitmapText( jsonInstructionsText.text, { font: "ahkio_75_paused", align: "center" } );
	else 
        this._titleText = new PIXI.Text( 
			jsonInstructionsText.text, 
			{ font: "80px Arial", fill: "#FFFFFF", stroke: "#044300", strokeThickness: 10, align: "center" } );    
	this._titleText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._titleText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.5 - 300 );
	this.addChild( this._titleText );	
	
	// Play button.
	// Button.	
	this._playButton = new BenButton( largeButtonSprites );
	this._playButton.position = new PIXI.Point( 
		Common.STAGE_WIDTH * .5 + 400, 
		Common.STAGE_HEIGHT * 0.5 + 240 );
	this._playButton.signals.down.addOnce( this.playPressed, this );
	this._playButton.overSoundName = "sfx_btn_rollover_00";
	this._playButton.scale = new PIXI.Point( 0, 0 );
	this._playButton.animate = true;
	// Icon.
	this._playIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_large_icon_play_off" ),
			this._assetManager.getTexture( "btn_primary_large_icon_play_over" ),
			this._playButton );
	
	this.addChild( this._playButton );
	
	// Mute button.
	var muteIcon = new DoubleStateIcon( 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_over" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_over" ) );
	muteIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	// Button.
	this._benMuteButton = new BenMuteButton( mediumButtonSprites, muteIcon );
	this._benMuteButton.animate = true;
	this._benMuteButton.y = this._guiButtonTopMargin;
	this._benMuteButton.overSoundName = "sfx_btn_rollover_00";
	this.addChild( this._benMuteButton );
	
	// Home button.
	// Button.
	this._homeButton = new BenButton( mediumButtonSprites );
	this._homeButton.animate = true;
	this._homeButton.y = this._guiButtonTopMargin;		
	this._homeButton.signals.down.addOnce( this.homePressed, this );
	this._homeButton.overSoundName = "sfx_btn_rollover_00";
	//this._homeButton.scale = new PIXI.Point(0, 0);
	this._homeButton.init();
	// Icon.
	this._homeIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_home_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_home_over" ),
			this._homeButton
		);	
	this.addChild( this._homeButton );
	
	// Next image button.
	// Button.
	this._nextTutorialImageButton = new BenButton( mediumButtonSprites );
	this._nextTutorialImageButton.x = Common.STAGE_WIDTH * 0.5 + 440;
	this._nextTutorialImageButton.y = Common.STAGE_HEIGHT * 0.5 - 25;		
	this._nextTutorialImageButton.signals.down.add( this.nextTutorialImagePressed, this );
	this._nextTutorialImageButton.overSoundName = "sfx_btn_rollover_00";
	this._nextTutorialImageButton.scale = new PIXI.Point( 0, 0 );
	this._nextTutorialImageButton.animate = true;
	// Icon.
	this._nextChapterIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_next_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_next_over" ),
			this._nextTutorialImageButton
		);	
	this.addChild( this._nextTutorialImageButton );
	
	// Previous image button.
	// Button.
	this._prevTutorialImageButton = new BenButton( mediumButtonSprites );
	this._prevTutorialImageButton.x = Common.STAGE_WIDTH * 0.5 - 440;
	this._prevTutorialImageButton.y = Common.STAGE_HEIGHT * 0.5 - 25;		
	this._prevTutorialImageButton.signals.down.add( this.prevTutorialImagePressed, this );
	this._prevTutorialImageButton.overSoundName = "sfx_btn_rollover_00";
	this._prevTutorialImageButton.scale = new PIXI.Point( 0, 0 );
	this._prevTutorialImageButton.animate = true;
	// Icon.
	this._prevChapterIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_next_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_next_over" ),
			this._prevTutorialImageButton
		);
	this._prevChapterIcon.scale.x = -1;	
	this.addChild( this._prevTutorialImageButton );
	
	// Black screen
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)

	//Sounds
	// this._bgMusic = SoundSFX.play('music_loop_track', {volume:0.66, loop:true});
};

/**
 */
InstructionsScreen.prototype.update = function()
{
};

/**
 */
InstructionsScreen.prototype.resize = function()
{

	SimpleScreen.prototype.resize.call(this);

	this._benMuteButton.x = this._getFirstButtonPositionRight();
	this._homeButton.x = this._getFirstButtonPositionLeft();
};

/**
 */
InstructionsScreen.prototype.dispose = function()
{
	// SoundSFX.stop('music_menu_loop_00');
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
InstructionsScreen.prototype.animateIn = function( callback, scope )
{
	SimpleScreen.prototype.animateIn.call( this );

	// Buttons
	var tl = new TimelineMax();
	
	tl.to( this._playButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.1 );
	tl.to( this._nextTutorialImageButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.1 );
	tl.to( this._prevTutorialImageButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.1 );
		
	Common.animator.add( tl );
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
InstructionsScreen.prototype.animateOut = function( callback, scope )
{
	SimpleScreen.prototype.animateOut.call( this );

	var tl = new TimelineMax( { onComplete:callback, onCompleteScope:scope } );

	// Buttons
	tl.to( this._playButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._nextTutorialImageButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._prevTutorialImageButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	tl.to( this._screenTransition, 0.7, { x:0, ease:Sine.easeOut }, 0.6 );

	Common.animator.add( tl );

	// this._bgMusic.fadeOut(0, 1000);
};

/**
 */
InstructionsScreen.prototype.updateUI = function()
{
	for ( var i = 0; i < this._arrTutorialImage.length; ++i )
		this._arrTutorialImage[ i ].visible = i == this._tutorialImageIndex;
		
	this._tutorialIndexImage.position.x = this.TUTORIAL_INDEX_H_POSITIONS[ this._tutorialImageIndex ];
}


//===================================================
// EVENTS
//===================================================

/**
 */
InstructionsScreen.prototype.playPressed = function()
{
	this._playButton.signals.down.remove( this.playPressed, this );
	TweenMax.killTweensOf( this._playButton.scale );

	this.animateOut(
		function() { this.signals.requestedNextScreen.dispatch(); }, 
		this );

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
InstructionsScreen.prototype.homePressed = function()
{
	this.animateOut( 
		function() { this.signals.requestedPreviousScreen.dispatch(); }, 
		this );

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
InstructionsScreen.prototype.nextTutorialImagePressed = function()
{
	++this._tutorialImageIndex;
	if ( this._tutorialImageIndex >= this._arrTutorialImage.length )
		this._tutorialImageIndex = 0;

	this.updateUI();
	
	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
InstructionsScreen.prototype.prevTutorialImagePressed = function()
{
	--this._tutorialImageIndex;
	if ( this._tutorialImageIndex < 0 )
		this._tutorialImageIndex = this._arrTutorialImage.length - 1;

	this.updateUI();
	
	SoundSFX.play("sfx_btn_press_00");
};
},{"../Common":2,"../general/SoundSFX":33,"../ui/BenButton":49,"../ui/BenMuteButton":50,"../ui/BgRing":51,"../ui/ButtonSprites":53,"../ui/DoubleStateIcon":54,"../ui/SingleStateIcon":56,"./SimpleScreen":47}],46:[function(require,module,exports){
var Common       = require( "../Common" );
var SimpleScreen = require( "./SimpleScreen" );
var SoundSFX     = require( "../general/SoundSFX" );
var Global     = require( "../general/Global" );
var DoubleStateIcon = require( "../ui/DoubleStateIcon" );
var SingleStateIcon = require( "../ui/SingleStateIcon" );
var BenMuteButton = require( "../ui/BenMuteButton" );
var BenButton = require( "../ui/BenButton" );
var LevelButton = require( "../ui/LevelButton" );
var ButtonSprites = require( "../ui/ButtonSprites" );
var BgRing = require( "../ui/BgRing" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function LevelSelectionScreen()
{
	SimpleScreen.call(this);
	
	
	// Selected chapter.
	this._chapterIndex = 0;
	this._arrLevelButton = [];
	this._levelSelectionButtonContainer = new PIXI.Container();
	this._chapterSelectionTimeline = null;

	/**
	 * @type {Signal}
	 */
	this.signals.leaderboardPressed = new signals.Signal();
	this.signals.termsPressed = new signals.Signal();
}

module.exports = LevelSelectionScreen;
LevelSelectionScreen.prototype = Object.create(SimpleScreen.prototype);
LevelSelectionScreen.prototype.constructor = LevelSelectionScreen;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
LevelSelectionScreen.prototype.init = function()
{
	SimpleScreen.prototype.init.call( this );
	
	
	// Find the highest playable chapter.
	var isChapterIndexFound = false;
	for ( var i = 0; i < Common.savedData.arrLevelResult.length; ++i )
	{
		for ( var j = 0; j < Common.savedData.arrLevelResult[ i ].length; ++j )
		{
			if ( Common.savedData.arrLevelResult[ i ][ j ].score == 0 )
			{
				isChapterIndexFound = true;
				// Check if the last scored level is the last one of the chapter.
				if ( j == 0 && this._chapterIndex > 0 )
					this._chapterIndex += 1;
				
				break;
			}
		}
		
		if ( isChapterIndexFound )
			break;
				
		this._chapterIndex = i;
	}
		
	// Create UI elements.
	// Button sprites.
	var mediumButtonSprites    	   = new ButtonSprites();
    mediumButtonSprites.normal       = this._assetManager.getTexture( "btn_primary_medium_off" );
    mediumButtonSprites.over         = this._assetManager.getTexture( "btn_primary_medium_over" );
    mediumButtonSprites.innerRing    = this._assetManager.getTexture( "btn_primary_medium_off_ring_001" );
    mediumButtonSprites.outerRing    = this._assetManager.getTexture( "btn_primary_medium_off_ring_002" );
	
	// Main container.
	this._container = new PIXI.Container();
	this._container.x = Common.STAGE_WIDTH * 0.5;
	this._container.y = Common.STAGE_HEIGHT * 0.5;
	this.addChild( this._container );
	
	// Background.
	this._bg = new PIXI.Sprite( this._assetManager.getTexture( "bg_ui" ) );
	this._bg.width = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this._bg.anchor = new PIXI.Point( 0.5, 0.5 );
	this._container.addChild( this._bg );
	
	// Background animated ring.
	this._bgRing = new BgRing( "panel/end_game_panel_003", "panel/end_game_panel_002", "panel/end_game_panel_001" );
	this._bgRing.anchor = new PIXI.Point( .5, .5 );
	this._bgRing.play();	
	this._container.addChild( this._bgRing );
	
	// Chapter image.
	var myMask = new PIXI.Graphics();
	myMask.beginFill();
	myMask.drawCircle( 0, 0, 200 );
	myMask.endFill();
	this._container.addChild( myMask );
	
	this._chapterImage = new PIXI.Sprite( this._assetManager.getTexture( "image_chaper_" + ( this._chapterIndex + 1 ) ) );
	this._chapterImage.anchor = new PIXI.Point( 0.5, 0.5 );
	this._chapterImage.mask = myMask;
	this._container.addChild( this._chapterImage );
	
	this._animChapterImage = new PIXI.Sprite( this._assetManager.getTexture( "image_chaper_" + ( this._chapterIndex + 1 ) ) );	
	this._animChapterImage.anchor = new PIXI.Point( 0.5, 0.5 );
	this._animChapterImage.mask = myMask;
	this._container.addChild( this._animChapterImage );	

	// Title text.
	var jsonChapterTitle = this._assetManager.getJSON( "config" )[ 'copy' ][ "CHAPTER_" + ( this._chapterIndex + 1 ) + "_TITLE" ][ Common.COUNTRY_CODE ];
	if ( Common.COUNTRY_CODE != "ar" && Common.COUNTRY_CODE != "ru" ) 
	{
        this._topTitleText = new PIXI.extras.BitmapText( jsonChapterTitle[ "top" ], { font: "50px ahkio_75_paused", align: "center" } );
		this._botTitleText = new PIXI.extras.BitmapText( jsonChapterTitle[ "bot" ], { font: "ahkio_75_paused", align: "center" } );
	}
	else
	{	
        this._topTitleText = new PIXI.Text( 
			jsonChapterTitle[ "top" ], 
			{ font: "55px Arial", fill: "#FFFFFF", stroke: "#044300", strokeThickness: 10, align: "center" } );    
		this._botTitleText = new PIXI.Text( 
			jsonChapterTitle[ "bot" ], 
			{ font: "80px Arial", fill: "#FFFFFF", stroke: "#044300", strokeThickness: 10, align: "center" } );    
	}
	this._topTitleText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._topTitleText.width * 0.5, 
		Common.STAGE_HEIGHT * 0.04 );
	this.addChild( this._topTitleText );	
	
	this._botTitleText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._botTitleText.width * 0.5, 
		Common.COUNTRY_CODE != "ar" && Common.COUNTRY_CODE != "ru"  ? Common.STAGE_HEIGHT * 0.1 : Common.STAGE_HEIGHT * 0.13 );
	this.addChild( this._botTitleText );	
	
	// Next chapter button.
	// Button.
	const NEXT_CHAPTER_BUTTON_RADIUS = 475;
	this._nextChapterButton = new BenButton( mediumButtonSprites );
	this._nextChapterButton.x = Common.STAGE_WIDTH * 0.5 + NEXT_CHAPTER_BUTTON_RADIUS;
	this._nextChapterButton.y = Common.STAGE_HEIGHT * 0.5;		
	this._nextChapterButton.signals.down.add( this.nextChapterPressed, this );
	this._nextChapterButton.overSoundName = "sfx_btn_rollover_00";
	this._nextChapterButton.scale = new PIXI.Point( 0, 0 );
	this._nextChapterButton.animate = true;
	// Icon.
	this._nextChapterIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_next_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_next_over" ),
			this._nextChapterButton
		);	
	this.addChild( this._nextChapterButton );
	
	// Previous chapter button.
	// Button.
	this._prevChapterButton = new BenButton( mediumButtonSprites );
	this._prevChapterButton.x = Common.STAGE_WIDTH * 0.5 - NEXT_CHAPTER_BUTTON_RADIUS;
	this._prevChapterButton.y = Common.STAGE_HEIGHT * 0.5;		
	this._prevChapterButton.signals.down.add( this.prevChapterPressed, this );
	this._prevChapterButton.overSoundName = "sfx_btn_rollover_00";
	this._prevChapterButton.scale = new PIXI.Point( 0, 0 );
	this._prevChapterButton.animate = true;
	// Icon.
	this._prevChapterIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_next_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_next_over" ),
			this._prevChapterButton
		);
	this._prevChapterIcon.scale.x = -1;	
	this.addChild( this._prevChapterButton );
		
	// Level selection buttons.
	this.addChild( this._levelSelectionButtonContainer );
	this.createLevelSelectionButtons( true );
	
	// Mute button.
	// Icon.
	var muteIcon = new DoubleStateIcon( 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_over" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_over" ) );
	muteIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	// Button.
	this._benMuteButton = new BenMuteButton( mediumButtonSprites, muteIcon );
	this._benMuteButton.animate = true;
	this._benMuteButton.y = this._guiButtonTopMargin;
	this._benMuteButton.overSoundName = "sfx_btn_rollover_00";
	this.addChild( this._benMuteButton );
	
	// Home button.
	// Button.
	this._homeButton = new BenButton( mediumButtonSprites );
	this._homeButton.animate = true;
	this._homeButton.y = this._guiButtonTopMargin;		
	this._homeButton.signals.down.addOnce( this.homePressed, this );
	this._homeButton.overSoundName = "sfx_btn_rollover_00";
	//this._homeButton.scale = new PIXI.Point(0, 0);
	this._homeButton.init();
	// Icon.
	this._nextChapteIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_primary_medium_icon_home_off" ),
			this._assetManager.getTexture( "btn_primary_medium_icon_home_over" ),
			this._homeButton
		);	
	this.addChild( this._homeButton );

	// Black screen.
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)
	
	//Sounds
	// this._bgMusic = SoundSFX.play('music_loop_track', {volume:0.66, loop:true});
}

/**
 */
LevelSelectionScreen.prototype.update = function()
{
}

/**
 */
LevelSelectionScreen.prototype.resize = function()
{

	SimpleScreen.prototype.resize.call( this );

	this._benMuteButton.x = this._getFirstButtonPositionRight();
	this._homeButton.x = this._getFirstButtonPositionLeft();
}

/**
 */
LevelSelectionScreen.prototype.dispose = function()
{
	// SoundSFX.stop('music_menu_loop_00');
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
LevelSelectionScreen.prototype.animateIn = function( callback, scope )
{
	SimpleScreen.prototype.animateIn.call( this );

	// Buttons
	var tl = new TimelineMax();
	
	for ( var i = 0; i < this._arrLevelButton.length; ++i )
		tl.to( this._arrLevelButton[ i ].scale, 1, { x:1, y:1, ease:Elastic.easeOut}, 0.6 + i * 0.05 );
	tl.to( this._nextChapterButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.6 );
	tl.to( this._prevChapterButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.6 );
	//tl.to( this._benMuteButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.4 );
	//tl.to( this._homeButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.4 );
		
	Common.animator.add( tl );
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
LevelSelectionScreen.prototype.animateOut = function( callback, scope )
{
	SimpleScreen.prototype.animateOut.call( this );

	var tl = new TimelineMax( {onComplete:callback, onCompleteScope:scope} );

	// Buttons
	for ( var i = 0; i < this._arrLevelButton.length; ++i )
		tl.to( this._arrLevelButton[ i ].scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	//tl.to( this._benMuteButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	//tl.to( this._homeButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	tl.to( this._prevChapterButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	tl.to( this._nextChapterButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	tl.to( this._screenTransition, 0.7, { x:0, ease:Sine.easeOut }, 0.6 );

	Common.animator.add( tl );

	// this._bgMusic.fadeOut(0, 1000);
};


//===================================================
// PRIVATE METHODS
//===================================================

LevelSelectionScreen.prototype.createLevelSelectionButtons = function( isZeroScale )
{
	const LEVEL_COUNT = Common.savedData.arrLevelResult[ this._chapterIndex ].length;
	this._arrLevelButton = [];	
	const LEVEL_BUTTON_RADIUS = 275;
	var LEVEL_BUTTON_POSITIONS = [ 
		[ -LEVEL_BUTTON_RADIUS, 0 ], 
		[ -LEVEL_BUTTON_RADIUS * Math.cos( Math.PI * 0.25 ), LEVEL_BUTTON_RADIUS * Math.cos( Math.PI * 0.25 ) ], 
		[ 0, LEVEL_BUTTON_RADIUS ], 
		[ LEVEL_BUTTON_RADIUS * Math.cos( Math.PI * 0.25 ), LEVEL_BUTTON_RADIUS * Math.cos( Math.PI * 0.25 ) ], 
		[ LEVEL_BUTTON_RADIUS, 0 ] ];
		
	// Find last playable level.
	var lastLevelIndex =  0;
	if ( this._chapterIndex > 0 && Common.savedData.arrLevelResult[ this._chapterIndex - 1 ][ Global.LEVEL_ID_ARRAY[ 0 ].length - 1 ].score == 0 )
		lastLevelIndex = -1;
	if ( lastLevelIndex > -1 )
	{
		for ( lastLevelIndex = 0; lastLevelIndex < LEVEL_COUNT; ++lastLevelIndex )
		{
			if ( Common.savedData.arrLevelResult[ this._chapterIndex ][ lastLevelIndex ].score == 0 )
				break;
		}
	}
		
	for ( var i = 0; i < LEVEL_COUNT; ++i )
	{		
		// TODO: DEBUG: Unlock all the levels.
		//if ( true )
		if ( i <= lastLevelIndex )
		{
			// Playable level.
			var buttonAux = new LevelButton(
				i,
				Common.savedData.arrLevelResult[ this._chapterIndex ][ i ].stars, // Get stars from local store.
				this._assetManager.getTexture( "btn_primary_large_off" ),
				this._assetManager.getTexture( "btn_primary_large_over" ),
				this._assetManager.getTexture( "btn_primary_large_off_ring_001" ),
				this._assetManager.getTexture( "btn_primary_large_off_ring_002" ) );
			buttonAux.x = Common.STAGE_WIDTH * 0.5 + LEVEL_BUTTON_POSITIONS[ i ][ 0 ];
			buttonAux.y = Common.STAGE_HEIGHT * 0.5 + LEVEL_BUTTON_POSITIONS[ i ][ 1 ];		
			buttonAux.signals.down.addOnce( this.playPressed, this );
			buttonAux.overSoundName = "sfx_btn_rollover_00";
			if ( isZeroScale)
				buttonAux.scale = new PIXI.Point( 0, 0 );
			buttonAux.animate = true;
			
			this._levelSelectionButtonContainer.addChild( buttonAux );
			
			this._arrLevelButton.push( buttonAux );
		}
		else
		{
			// Lock.
			var lockBgSprite = new PIXI.Sprite( this._assetManager.getTexture( "btn_primary_large_off" ) );
			lockBgSprite.anchor = new PIXI.Point( .5, .5 );
			lockBgSprite.x = Common.STAGE_WIDTH * 0.5 + LEVEL_BUTTON_POSITIONS[ i ][ 0 ];
			lockBgSprite.y = Common.STAGE_HEIGHT * 0.5 + LEVEL_BUTTON_POSITIONS[ i ][ 1 ];
			if ( isZeroScale )			
				lockBgSprite.scale = new PIXI.Point( 0, 0 );
			var arrLockSpriteId = [ "lock", "btn_primary_large_off_ring_001", "btn_primary_large_off_ring_002" ];
			for ( var j = 0; j < arrLockSpriteId.length; ++j )
			{
				var spriteAux = new PIXI.Sprite( this._assetManager.getTexture( arrLockSpriteId[ j ] ) );
				spriteAux.anchor = new PIXI.Point( .5, .5 );
				lockBgSprite.addChild( spriteAux );
			}
			
			this._levelSelectionButtonContainer.addChild( lockBgSprite );
			
			this._arrLevelButton.push( lockBgSprite );
		}
	}
}

/**
 */
LevelSelectionScreen.prototype.updateUI = function()
{
	// Update image.
	//this._chapterImage.texture = this._assetManager.getTexture( "image_chaper_" + ( this._chapterIndex + 1 ) );
	
	// Update titles.
	var jsonChapterTitle = this._assetManager.getJSON( "config" )[ 'copy' ][ "CHAPTER_" + ( this._chapterIndex + 1 ) + "_TITLE" ][ Common.COUNTRY_CODE ];
	
	this._topTitleText.text = jsonChapterTitle[ "top" ];
	this._topTitleText.position.x = Common.STAGE_WIDTH * 0.5 - this._topTitleText.width * 0.5;
	
	this._botTitleText.text = jsonChapterTitle[ "bot" ];
	this._botTitleText.position.x = Common.STAGE_WIDTH * 0.5 - this._botTitleText.width * 0.5;	
		
	// Update level selection buttons.
	this._levelSelectionButtonContainer.removeChildren();
	this.createLevelSelectionButtons( false );
}


//===================================================
// EVENTS
//===================================================

/**
 */
LevelSelectionScreen.prototype.nextChapterPressed = function()
{
	++this._chapterIndex;
	if ( this._chapterIndex > ( Global.LEVEL_ID_ARRAY.length - 1 ) )
		this._chapterIndex = 0;

	this.updateUI();
	
	SoundSFX.play("sfx_btn_press_00");
	
	// Animation.
	this._chapterImage.texture = this._animChapterImage.texture;
	this._animChapterImage.texture = this._assetManager.getTexture( "image_chaper_" + ( this._chapterIndex + 1 ) );
	this._animChapterImage.rotation = Math.PI;
	
	if ( this._chapterSelectionTimeline != null )
		this._chapterSelectionTimeline.clear();
	
	this._chapterSelectionTimeline = new TimelineMax();
	this._animChapterImage.position.x = this._animChapterImage.width;
	this._chapterSelectionTimeline.to( this._animChapterImage, 0.5, { x:0, ease:Sine.easeInOut }, 0 );
	this._chapterSelectionTimeline.to( this._animChapterImage, 0.5, { rotation:Math.PI * 2, ease:Sine.easeInOut }, 0 );
	Common.animator.add( this._chapterSelectionTimeline );
};

/**
 */
LevelSelectionScreen.prototype.prevChapterPressed = function()
{
	--this._chapterIndex;
	if ( this._chapterIndex < 0 )
		this._chapterIndex = Global.LEVEL_ID_ARRAY.length - 1;

	this.updateUI();
	
	SoundSFX.play("sfx_btn_press_00");
	
	// Animation.
	this._chapterImage.texture = this._animChapterImage.texture;
	this._animChapterImage.texture = this._assetManager.getTexture( "image_chaper_" + ( this._chapterIndex + 1 ) );
	this._animChapterImage.rotation = -Math.PI;
	
	if ( this._chapterSelectionTimeline != null )
		this._chapterSelectionTimeline.clear();
	
	this._chapterSelectionTimeline = new TimelineMax();
	this._animChapterImage.position.x = -this._animChapterImage.width;
	this._chapterSelectionTimeline.to( this._animChapterImage, 0.5, { x:0, ease:Sine.easeInOut }, 0 );
	this._chapterSelectionTimeline.to( this._animChapterImage, 0.5, { rotation:-Math.PI * 2, ease:Sine.easeInOut }, 0 );
	Common.animator.add( this._chapterSelectionTimeline );
};

/**
 */
LevelSelectionScreen.prototype.playPressed = function( sender )
{
	this.animateOut( 
		function() { this.signals.requestedNextScreen.dispatch( this._chapterIndex, sender._index ); }, 
		this );

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
LevelSelectionScreen.prototype.homePressed = function()
{
	this.animateOut( function()
	{
		this.signals.requestedPreviousScreen.dispatch();
	}, this );

	SoundSFX.play("sfx_btn_press_00");
};


},{"../Common":2,"../general/Global":31,"../general/SoundSFX":33,"../ui/BenButton":49,"../ui/BenMuteButton":50,"../ui/BgRing":51,"../ui/ButtonSprites":53,"../ui/DoubleStateIcon":54,"../ui/LevelButton":55,"../ui/SingleStateIcon":56,"./SimpleScreen":47}],47:[function(require,module,exports){

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
    this._tweens = [];

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

	for(var i = 0; i < this._tweens.length; ++ i) 
	{
		if (!!this._tweens[i]) 
		{
			this._tweens[i].kill();
		}
	}

	this._tweens.length = [];

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


},{"../Common":2,"../lib/Scene":35}],48:[function(require,module,exports){
var Common = require( "../Common" );
var SimpleScreen = require( "./SimpleScreen" );
var SoundSFX = require( "../general/SoundSFX" );
var DoubleStateIcon = require( "../ui/DoubleStateIcon" );
var SingleStateIcon = require( "../ui/SingleStateIcon" );
var BenMuteButton = require( "../ui/BenMuteButton" );
var ButtonSprites = require( "../ui/ButtonSprites" );
var BgRing = require( "../ui/BgRing" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function SplashScreen()
{
	SimpleScreen.call( this );

	/**
	 * @type {Signal}
	 */
	this.signals.leaderboardPressed = new signals.Signal();
	this.signals.termsPressed = new signals.Signal();
}

module.exports = SplashScreen;
SplashScreen.prototype = Object.create( SimpleScreen.prototype );
SplashScreen.prototype.constructor = SplashScreen;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
SplashScreen.prototype.init = function()
{
	console.log( "SPLASH INITIALIZED" );

	SimpleScreen.prototype.init.call( this );

	// Init UI.
	var baseButtonSprites    	   = new ButtonSprites();
    baseButtonSprites.normal       = this._assetManager.getTexture( "btn_primary_medium_off" );
    baseButtonSprites.over         = this._assetManager.getTexture( "btn_primary_medium_over" );
    baseButtonSprites.innerRing    = this._assetManager.getTexture( "btn_primary_medium_off_ring_001" );
    baseButtonSprites.outerRing    = this._assetManager.getTexture( "btn_primary_medium_off_ring_002" );
	
	this._container   = new PIXI.Container();
	this._container.x = Common.STAGE_WIDTH * 0.5;
	this._container.y = Common.STAGE_HEIGHT * 0.5;	
	this.addChild( this._container );

	// Background.
	this._bg = new PIXI.Sprite( this._assetManager.getTexture( "bg_splash" ) );
	this._bg.width = Common.STAGE_WIDTH;
	this._bg.height = Common.STAGE_HEIGHT;
	this._bg.anchor = new PIXI.Point( 0.5, 0.5 );	
	this._container.addChild( this._bg );
	
	// Animated ring.
	this._bgRing = new BgRing( "splash_outside", "splash_middle", "splash_centre" );
	this._bgRing.innerRing.alpha = .6;
	//this._bgRing.play();
	this._container.addChild( this._bgRing );

	// Logo.
	this._logo = new PIXI.Sprite( this._assetManager.getTexture( "ui_logo" ) );
	this._logo.anchor = new PIXI.Point( 0.5, 0.5 );
	//this._logo.scale = new PIXI.Point( 0.95, 0.95 );
	this._logo.position = new PIXI.Point( Common.STAGE_WIDTH * 0.5, Common.STAGE_HEIGHT * 0.5 - 180 );	
	this.addChild( this._logo );
	
	// Ben.
	this._ben = new PIXI.Sprite( this._assetManager.getTexture( "ben" ) );
	this._ben.anchor = new PIXI.Point( 0.5, 0.5 );
	this._ben.position = new PIXI.Point( Common.STAGE_WIDTH * 0.5 - 370, Common.STAGE_HEIGHT * 0.5 + 35 );	
	this.addChild( this._ben );
	
	// Aliens.
	this._alienContainer = new PIXI.Container();
	this._alienContainer.anchor = new PIXI.Point( 0.5, 0.5 );
	this._alienContainer.position = new PIXI.Point( Common.STAGE_WIDTH * 0.5, Common.STAGE_HEIGHT * 0.5 );	
	this.addChild( this._alienContainer );
	
	this._arrAlien = [];
	const ALIEN_POSITIONS = [ 
		new PIXI.Point( 400, -75 ),
		new PIXI.Point( 400, 225 ),
		new PIXI.Point( 200, -50 ),
		new PIXI.Point( 250, -250 ) ];
	const ALIEN_SPRITE_IDS = [ 
		"cannonbolt",
		"overflow",
		"4arms",
		"upgrade" ];
	for ( var i = 0; i < ALIEN_SPRITE_IDS.length; ++i )
	{
		var alienAux = new PIXI.Sprite( this._assetManager.getTexture( ALIEN_SPRITE_IDS[ i ] ) );
		alienAux.anchor.set( .5 );
		alienAux.position = new PIXI.Point( 
			/*Common.STAGE_WIDTH * 0.5 +*/ ALIEN_POSITIONS[ i ].x, 
			/*Common.STAGE_HEIGHT * .5 +*/ ALIEN_POSITIONS[ i ].y );
	
		this._alienContainer.addChild( alienAux );
		this._arrAlien.push( alienAux );
	}
	
	this._alienContainer.scale = new PIXI.Point( 0.5, 0.5 );
	
	// Title.
	/*var jsonSplashTitle = this._assetManager.getJSON( "config" )[ 'copy' ][ "SPLASH_TITLE" ][ Common.COUNTRY_CODE ];
	
	this._topTitleText = new PIXI.extras.BitmapText( jsonSplashTitle.top, { font: "isbitpro_77_splash", align: "center" } );
	this._topTitleText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._topTitleText.width * 0.5, 
		this._logo.position.y + this._logo.height * 0.5 );
	this.addChild( this._topTitleText );	
	
	this._botTitleText = new PIXI.extras.BitmapText( jsonSplashTitle.bot, { font: "isbitpro_77_splash", align: "center" } );
	this._botTitleText.position = new PIXI.Point( 
		Common.STAGE_WIDTH * 0.5 - this._botTitleText.width * 0.5, 
		this._topTitleText.position.y + this._topTitleText.height );
	this.addChild( this._botTitleText );*/
	
	this._title = new PIXI.Sprite( this._assetManager.getTexture( "splash_title" ) );
	this._title.anchor = new PIXI.Point( 0.5, 0.5 );
	this._title.scale = new PIXI.Point( 0.5, 0.5 );
	this._title.position = new PIXI.Point( Common.STAGE_WIDTH * 0.5, Common.STAGE_HEIGHT * 0.5 + 50 );	
	this.addChild( this._title );

	// Play button.
	// Button.	
	this._playButton = new p3.Button(
		this._assetManager.getTexture( "btn_play_off" ),
		this._assetManager.getTexture( "btn_play_over" ),
		this._assetManager.getTexture( "btn_play_over" ) );
	this._playButton.position = new PIXI.Point( Common.STAGE_WIDTH * 0.5, Common.STAGE_HEIGHT * 0.8 );
	this._playButton.signals.down.addOnce( this.playPressed, this );
	this._playButton.overSoundName = "sfx_btn_rollover_00";
	this._playButton.scale = new PIXI.Point( 0, 0 );
	this._playButton.animate = true;
	// Icon.
	this._playIcon = new SingleStateIcon( 
			this._assetManager.getTexture( "btn_play_icon_off" ),
			this._assetManager.getTexture( "btn_play_icon_over" ),
			this._playButton );
	
	this.addChild( this._playButton );
	
	// Mute button.
	var muteIcon = new DoubleStateIcon( 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_off" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_audio_over" ), 
		this._assetManager.getTexture( "btn_primary_medium_icon_mute_over" ) );
	muteIcon.anchor = new PIXI.Point( 0.5, 0.5 );
	// Button.
	this._benMuteButton = new BenMuteButton( baseButtonSprites, muteIcon );
	this._benMuteButton.animate = true;
	this._benMuteButton.y = this._guiButtonTopMargin;
	this._benMuteButton.overSoundName = "sfx_btn_rollover_00";
	this.addChild( this._benMuteButton );
	
	// Black screen
	this._screenTransition = new PIXI.Sprite(Common.generatedTextures['blackSquare']);
	this._screenTransition.alpha = 1;
	this._screenTransition.width = Common.STAGE_WIDTH;
	this._screenTransition.height = Common.STAGE_HEIGHT;
	this._screenTransition.x = -Common.STAGE_WIDTH;
	this.addChild(this._screenTransition)

	//Sounds
	// this._bgMusic = SoundSFX.play('music_loop_track', {volume:0.66, loop:true});
};

/**
 */
SplashScreen.prototype.update = function()
{
};

/**
 */
SplashScreen.prototype.resize = function()
{

	SimpleScreen.prototype.resize.call(this);

	this._benMuteButton.x = this._getFirstButtonPositionRight();
	//this._soundButton.x = (Common.STAGE_WIDTH + p3.View.width) * 0.5 - 80.0;
};

/**
 */
SplashScreen.prototype.dispose = function()
{
	// SoundSFX.stop('music_menu_loop_00');
}

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
SplashScreen.prototype.animateIn = function( callback, scope )
{
	SimpleScreen.prototype.animateIn.call( this );

	// Sfx.
	p3.AudioManager.instance.playSound( "vo_ben_win_haaa_00" );
	
	// Buttons
	var tl = new TimelineMax();
	
	tl.to( this._playButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.1 );
	tl.to( this._alienContainer.scale, .5, { x:1, y:1, ease:Sine.easeOut }, 0.1 );
	//tl.to( this._ben, 1.5, { x:this._ben.x + 10, ease:Sine.easeInOut, yoyo:true, repeat:-1 }, 0 );
	//tl.to( this._playButton.scale, .5, { x:.9, y:.9, ease:Sine.easeInOut, yoyo:true, repeat:-1 }, 2.0 );
	//tl.to( this._benMuteButton.scale, 1, { x:1, y:1, ease:Elastic.easeOut }, 0.4 );
	// Animate aliens.
	var SCREEN_CENTRE = new PIXI.Point( Common.STAGE_WIDTH * .5, Common.STAGE_HEIGHT * .5 );
	for ( var i = 0; i < this._arrAlien.length; ++i )
	{
		var dirAux = new p3.Vector2( this._arrAlien[ i ].x - SCREEN_CENTRE.x, this._arrAlien[ i ].y - SCREEN_CENTRE.y );
		dirAux = dirAux.unit;
		
		/*var amplitude = Math.floor( ( Math.random() * 3 ) ) + 5;
		if ( i % 2 == 0 )
			tl.to( this._arrAlien[ i ], Math.random() * 1 + 1, { y:this._arrAlien[ i ].y + amplitude, ease:Sine.easeInOut, yoyo:true, repeat:-1 }, Math.random() );
		else
			tl.to( this._arrAlien[ i ], Math.random() * 1 + 1, { y:this._arrAlien[ i ].y - amplitude, ease:Sine.easeInOut, yoyo:true, repeat:-1 }, Math.random() );*/
		
		var amplitude = Math.floor( ( Math.random() * 3 ) ) + 5;
		tl.to( this._arrAlien[ i ], Math.random() * 1 + 1, { x:this._arrAlien[ i ].x + dirAux.x * amplitude, y:this._arrAlien[ i ].y + dirAux.y * amplitude, ease:Sine.easeInOut, yoyo:true, repeat:-1 }, Math.random() );
	}
	
	// title
    this._title.scale    = new PIXI.Point();
    this._title.visible  = true;
    Common.animator.add(TweenMax.to(this._title.scale, 0.34, {
        delay: 0.2 + 0.3,
        x: .5,
        y: .5,
        ease: Back.easeOut,
        params: [6]
    }));
	
	// logo
    this._logo.scale = new PIXI.Point();
    this._logo.visible = true;
    Common.animator.add(TweenMax.to(this._logo.scale, 0.34, {
        delay: 0.2,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2]/*,
        onStart: function() {
            Common.audio.playSound("sfx_enemy_fire_00");
        }*/
    }));

    /*this._omni.title.blendStrength = 1;
    this._animator.add(TweenMax.to(this._omni.title, 0.24, {
        delay: 0.56,
        blendStrength: 0.0,
        ease: Power2.easeOut
    }));*/

    this._bgRing.midRing.scale     = new PIXI.Point();
    this._bgRing.midRing.visible   = true;
    Common.animator.add(TweenMax.to(this._bgRing.midRing.scale, 0.6, {
        delay: 0.32,
        x: 1.0,
        y: 1.0,
        ease: Power2.easeOut,
        easeParams: [2]
    }));

    this._bgRing.innerRing.scale     = new PIXI.Point();
    this._bgRing.innerRing.visible   = true;
    Common.animator.add(TweenMax.to(this._bgRing.innerRing.scale, 0.6, {
        delay: 0.32 + 0.06,
        x: 1.0,
        y: 1.0,
        ease: Power2.easeOut,
        easeParams: [2]
    }));

    this._bgRing.outerRing.scale     = new PIXI.Point();
    this._bgRing.outerRing.visible   = true;
    Common.animator.add(TweenMax.to(this._bgRing.outerRing.scale, 0.66, {
        delay: 0.32 + 0.08,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [4]
    }));
	
	Common.animator.add(TweenMax.to(this._bgRing.innerRing.scale, 1.4, {
        delay: 0.32 + 0.6,
        x: 0.94,
        y: 0.94,
        ease: Back.easeOut,
        yoyo: true,
        repeat: -1
    }));

    Common.animator.add(TweenMax.to(this._bgRing.midRing, 8.0, {
        delay: 0.32 + 0.2,
        rotation: Math.PI * 4,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1
    }));

    Common.animator.add(TweenMax.to(this._bgRing.outerRing, 6.0, {
        delay: 0.32 + 0.24,
        rotation: -Math.PI * 4,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1
    }));
		
	Common.animator.add( tl );
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
SplashScreen.prototype.animateOut = function( callback, scope )
{
	SimpleScreen.prototype.animateOut.call( this );

	var tl = new TimelineMax( { onComplete:callback, onCompleteScope:scope } );

	// Buttons
	tl.to( this._playButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0 );
	//tl.to( this._benMuteButton.scale, 0.5, { x:0, y:0, ease:Back.easeIn }, 0.1 );
	tl.to( this._screenTransition, 0.7, { x:0, ease:Sine.easeOut }, 0.6 );

	Common.animator.add( tl );

	// this._bgMusic.fadeOut(0, 1000);
};


//===================================================
// EVENTS
//===================================================

/**
 */
SplashScreen.prototype.playPressed = function()
{
	this._playButton.signals.down.remove(this.playPressed, this);
	TweenMax.killTweensOf(this._playButton.scale);

	this.animateOut(function()
	{
		this.signals.requestedNextScreen.dispatch();
	}, this);

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
SplashScreen.prototype.leaderboardPressed = function()
{
	this.signals.leaderboardPressed.dispatch();

	SoundSFX.play("sfx_btn_press_00");
};

/**
 */
SplashScreen.prototype.termsPressed = function()
{
	this.signals.termsPressed.dispatch();

	SoundSFX.play("sfx_btn_press_00");
};


},{"../Common":2,"../general/SoundSFX":33,"../ui/BenMuteButton":50,"../ui/BgRing":51,"../ui/ButtonSprites":53,"../ui/DoubleStateIcon":54,"../ui/SingleStateIcon":56,"./SimpleScreen":47}],49:[function(require,module,exports){
var ButtonRing = require( "./ButtonRing" );

"use strict";

/**
 * @param {!p3.ButtonSprites} states
 * @constructor
 */
function BenButton( buttonSprites ) 
{
    p3.Button.call( this, buttonSprites.normal, buttonSprites.over, buttonSprites.over );

	// Button ring.
	this._buttonRing = new ButtonRing( buttonSprites.outerRing, buttonSprites.innerRing );
	this.addChild( this._buttonRing );
}
module.exports                  = BenButton;
BenButton.prototype             = Object.create( p3.Button.prototype );
BenButton.prototype.constructor = BenButton;

BenButton.prototype.onMouseOver = function() 
{
    p3.Button.prototype.onMouseOver.call( this );

	
    // Ring animation.
	this._buttonRing.onMouseOver();
}

BenButton.prototype.onMouseOut = function() 
{
    p3.Button.prototype.onMouseOut.call( this );

	
    // Ring animation.
	this._buttonRing.onMouseOut();
}
},{"./ButtonRing":52}],50:[function(require,module,exports){
var ButtonRing = require( "./ButtonRing" );

/**
 * @constructor
 */
function BenMuteButton( buttonSprites, doubleStateIcon ) 
{
    p3.Button.call( this, buttonSprites.normal, buttonSprites.over, buttonSprites.over );
	
	// Is the mouse pointer over the button?
	this._isOver = false;
	
	var audio = p3.AudioManager.instance;
	
	// Icon.
	this._doubleStateIcon = doubleStateIcon;
	this._doubleStateIcon.setNormalTexture( audio.isMute ? 1 : 0 );
	this.addChild( this._doubleStateIcon );	
	
	// Button ring.
	this._buttonRing = new ButtonRing( buttonSprites.outerRing, buttonSprites.innerRing );
	this.addChild( this._buttonRing );
}

module.exports = BenMuteButton;
BenMuteButton.prototype = Object.create( p3.Button.prototype );
BenMuteButton.prototype.constructor = BenMuteButton;

/**
 * @param {!Event} event
 */
BenMuteButton.prototype.onMouseClick = function( event ) 
{
    p3.Button.prototype.onMouseClick.call( this, event );
	
	
    var audio = p3.AudioManager.instance;
    audio.mute( !audio.isMute );
	
	// Update icon.
	if ( this._isOver )
		this._doubleStateIcon.setOverTexture( audio.isMute ? 1 : 0 );
	else
		this._doubleStateIcon.setNormalTexture( audio.isMute ? 1 : 0 );
};

/**
 * @param {!Event} event
 */
BenMuteButton.prototype.onMouseOver = function( event ) 
{
	p3.Button.prototype.onMouseOver.call( this, event );
	
	
	this._isOver = true;

	// Update icon.
	var audio = p3.AudioManager.instance;
    this._doubleStateIcon.setOverTexture( audio.isMute ? 1 : 0 );
	
	// Ring animation.
	this._buttonRing.onMouseOver();
};

/**
 * @param {!Event} event
 */
BenMuteButton.prototype.onMouseOut = function( event ) 
{
	p3.Button.prototype.onMouseOut.call( this, event );
	
	
	this._isOver = false;

	// Update icon.
	var audio = p3.AudioManager.instance;
    this._doubleStateIcon.setNormalTexture( audio.isMute ? 1 : 0 );
	
	// Ring animation.
	this._buttonRing.onMouseOut();
};

},{"./ButtonRing":52}],51:[function(require,module,exports){
var Common = require( "../Common" );

"use strict";

/**
 * @param {!p3.ButtonSprites} states
 * @constructor
 */
function BgRing( outsideSpriteId, middleSpriteId, centreSpriteId ) 
{
	PIXI.Container.call( this );
	
	
	/**
     * @type {PIXI.Sprite}
     * @private
     */
    this._innerRing = new PIXI.Sprite( p3.AssetManager.instance.getTexture( centreSpriteId ) || PIXI.Texture.EMPTY );
    this._innerRing.anchor = new PIXI.Point( 0.5, 0.5 );
    this.addChild( this._innerRing );

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._midRing = new PIXI.Sprite( p3.AssetManager.instance.getTexture( middleSpriteId ) || PIXI.Texture.EMPTY );
    this._midRing.anchor = new PIXI.Point( 0.5, 0.5 );
    this.addChild( this._midRing );

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._outerRing = new PIXI.Sprite( p3.AssetManager.instance.getTexture( outsideSpriteId ) || PIXI.Texture.EMPTY );
    this._outerRing.anchor = new PIXI.Point( 0.5, 0.5 );
    this.addChild( this._outerRing );
}
module.exports               = BgRing;
BgRing.prototype             = Object.create( PIXI.Container.prototype );
BgRing.prototype.constructor = BgRing;

BgRing.prototype.play = function() 
{
    Common.animator.add(TweenMax.to(this._innerRing.scale, 1.4, {
        delay: 0.32 + 0.6,
        x: 0.94,
        y: 0.94,
        ease: Back.easeOut,
        yoyo: true,
        repeat: -1
    }));

    Common.animator.add(TweenMax.to(this._midRing, 8.0, {
        delay: 0.32 + 0.2,
        rotation: Math.PI * 4,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1
    }));

    Common.animator.add(TweenMax.to(this._outerRing, 6.0, {
        delay: 0.32 + 0.24,
        rotation: -Math.PI * 4,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1
    }));
};


//===================================================
// GETTERS / SETTERS
//===================================================

Object.defineProperty(
	BgRing.prototype, 
	"innerRing", 
	{ get: function() { return this._innerRing; } } );
	
Object.defineProperty(
	BgRing.prototype, 
	"midRing", 
	{ get: function() { return this._midRing; } } );
	
Object.defineProperty(
	BgRing.prototype, 
	"outerRing", 
	{ get: function() { return this._outerRing; } } );
},{"../Common":2}],52:[function(require,module,exports){
"use strict";

/**
 * @param {!p3.ButtonSprites} states
 * @constructor
 */
function ButtonRing( outerRingSprite, innerRingSprite ) 
{
	PIXI.Container.call( this );

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._outerRing = new PIXI.Sprite( outerRingSprite || PIXI.Texture.EMPTY);
    this._outerRing.anchor = new PIXI.Point(0.5, 0.5);
    this.addChild(this._outerRing);

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._innerRing = new PIXI.Sprite( innerRingSprite || PIXI.Texture.EMPTY);
    this._innerRing.anchor = new PIXI.Point(0.5, 0.5);
    this.addChild(this._innerRing);
}
module.exports                   = ButtonRing;
ButtonRing.prototype             = Object.create(PIXI.Container.prototype);
ButtonRing.prototype.constructor = ButtonRing;

ButtonRing.prototype.onMouseOver = function() 
{
    TweenMax.killTweensOf(this._innerRing);

    var speed = 4.0;
    TweenMax.to(this._innerRing, (Math.PI - this._innerRing.rotation) / speed, {
        rotation: Math.PI,
        ease: Power1.easeInOut
    });

    TweenMax.killTweensOf(this._outerRing);

    speed = 2.0;
    TweenMax.to(this._outerRing, Math.abs((-(Math.PI * 0.5) - this._outerRing.rotation) / speed), {
        rotation: -Math.PI * 0.5,
        ease: Power1.easeInOut
    });
};

ButtonRing.prototype.onMouseOut = function() 
{
    TweenMax.killTweensOf(this._innerRing);

    var speed = 4.0;
    TweenMax.to(this._innerRing, this._innerRing.rotation / speed, {
        rotation: 0.0,
        ease: Power1.easeInOut
    });

    TweenMax.killTweensOf(this._outerRing);

    speed = 2.0;
    TweenMax.to(this._outerRing, Math.abs(this._outerRing.rotation / speed), {
        rotation: 0.0,
        ease: Power1.easeInOut
    });
};
},{}],53:[function(require,module,exports){
"use strict";

function ButtonSprites() 
{
    this.normal       = null;
    this.over         = null;
    this.innerRing    = null;
    this.outerRing    = null;
}
module.exports                     = ButtonSprites;
ButtonSprites.prototype.constructor = ButtonSprites;
},{}],54:[function(require,module,exports){
/**
 *  DoubleStateIcon
 *
 */

/**
 * @param {!PIXI.Texture} iconOnNormalTexture
 * @param {!PIXI.Texture} iconOffNormalTexture
 * @param {PIXI.Texture=} iconOnOverTexture
 * @param {PIXI.Texture=} iconOffOverTexture
 * @constructor
 */
function DoubleStateIcon(
	iconOnNormalTexture,
	iconOffNormalTexture,
	iconOnOverTexture,
	iconOffOverTexture ) 
{
	this._iconNormalTexture = [ iconOnNormalTexture, iconOffNormalTexture ];
	this._iconOverTexture = [ iconOnOverTexture, iconOffOverTexture ];
	
	PIXI.Sprite.call( this, this._iconNormalTexture[ 0 ] );
}

module.exports = DoubleStateIcon;
DoubleStateIcon.prototype = Object.create( PIXI.Sprite.prototype );
DoubleStateIcon.prototype.constructor = DoubleStateIcon;

/**
 */
DoubleStateIcon.prototype.setNormalTexture = function( index ) 
{
	this.texture = this._iconNormalTexture[ index ];
};

/**
 */
DoubleStateIcon.prototype.setOverTexture = function( index ) 
{
	this.texture = this._iconOverTexture[ index ];
};
},{}],55:[function(require,module,exports){
var DoubleStateIcon = require( "./DoubleStateIcon" );
var ButtonRing = require( "./ButtonRing" );

/**
 *  LevelButton
 */

/**
 * @constructor
 */
function LevelButton( index, stars, normalTexture, overTexture, innerRingSprite, outerRingSprite ) 
{
	this._index = index;

    p3.Button.call( this, normalTexture, overTexture, overTexture );
	
	// Text.	
	this._titleText = new PIXI.extras.BitmapText( ( this._index + 1 ).toString(), { font: "ahkio_75_paused", align: "center" } );
	this._titleText.position = new PIXI.Point( -this._titleText.width * 0.5, -this._titleText.height * .65 );
	this.addChild( this._titleText );	
	
	// Button ring.
	this._buttonRing = new ButtonRing( innerRingSprite, outerRingSprite );
	this.addChild( this._buttonRing );
			
	// Stars.
	var starIconRadius = this.height * 0.5 * 0.77;
	var starInconAngle = Math.PI * 0.20;
	this._arrStarIcon = [];	
	const STAR_ICON_POSITION = [ 
		new PIXI.Point( -starIconRadius * Math.cos( starInconAngle ), starIconRadius * Math.sin( starInconAngle ) ), 
		new PIXI.Point( 0, starIconRadius ), 
		new PIXI.Point( starIconRadius * Math.cos( starInconAngle ), starIconRadius * Math.sin( starInconAngle ) ) ];
	for ( var i = 0; i < 3; ++i )
	{
		var starIconAux = new DoubleStateIcon(
			p3.AssetManager.instance.getTexture( "panel/star_on" ),	
			p3.AssetManager.instance.getTexture( "panel/star_off" ),
			p3.AssetManager.instance.getTexture( "panel/star_on" ),	
			p3.AssetManager.instance.getTexture( "panel/star_off" ) );
		starIconAux.setNormalTexture( i < stars ? 0 : 1 );
		starIconAux.anchor = new PIXI.Point( 0.5, 0.5 );
		starIconAux.position = STAR_ICON_POSITION[ i ];
		
		this.addChild( starIconAux );		
		this._arrStarIcon.push( starIconAux );
	}
}

module.exports = LevelButton;
LevelButton.prototype = Object.create( p3.Button.prototype );
LevelButton.prototype.constructor = LevelButton;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * 
 */
LevelButton.prototype.setStars = function( stars ) 
{
	for ( var i = 0; i < 3; ++i )
		this._arrStarIcon[ i ].setNormalTexture( i < stars ? 0 : 1 );
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * @param {!Event} event
 */
LevelButton.prototype.onMouseOver = function( event ) 
{
	// TODO: Change text colour.

	p3.Button.prototype.onMouseOver.call( this, event );
	
	
	// Ring animation.
	this._buttonRing.onMouseOver();
};

/**
 * @param {!Event} event
 */
LevelButton.prototype.onMouseOut = function( event ) 
{
	// TODO: Change text colour.

	p3.Button.prototype.onMouseOut.call( this, event );
	
	
	// Ring animation.
	this._buttonRing.onMouseOut();
};

},{"./ButtonRing":52,"./DoubleStateIcon":54}],56:[function(require,module,exports){
/**
 *  SingleStateIcon
 *
 */

/**
 * @constructor
 */
function SingleStateIcon( iconNormalTexture, iconOverTexture, parentButton ) 
{
	this._iconNormalTexture = iconNormalTexture;
	this._iconOverTexture = iconOverTexture;
	
	PIXI.Sprite.call( this, this._iconNormalTexture );
	this.anchor = new PIXI.Point( 0.5, 0.5 );
	
	parentButton.addChild( this );
	
	parentButton.signals.over.add( this.onParentButtonOver, this );
	parentButton.signals.out.add( this.onParentButtonOut, this );
}

module.exports = SingleStateIcon;
SingleStateIcon.prototype = Object.create( PIXI.Sprite.prototype );
SingleStateIcon.prototype.constructor = SingleStateIcon;

/**
 */
SingleStateIcon.prototype.onParentButtonOver = function() 
{
	this.texture = this._iconOverTexture;
};

/**
 */
SingleStateIcon.prototype.onParentButtonOut = function() 
{
	this.texture = this._iconNormalTexture;
};
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiLi4vZ2FtZS9BcHBsaWNhdGlvbi5qcyIsIi4uL2dhbWUvQ29tbW9uLmpzIiwiLi4vZ2FtZS9LZXlib2FyZC5qcyIsIi4uL2dhbWUvTWFpbi5qcyIsIi4uL2dhbWUvU2F2ZWREYXRhLmpzIiwiLi4vZ2FtZS9nYW1lL0F2YXRhci5qcyIsIi4uL2dhbWUvZ2FtZS9CbG9jay5qcyIsIi4uL2dhbWUvZ2FtZS9Cb3NzR3VuLmpzIiwiLi4vZ2FtZS9nYW1lL0Jvc3NTaG90LmpzIiwiLi4vZ2FtZS9nYW1lL0Nhbm5vbmJvbHRQb3dlcnVwLmpzIiwiLi4vZ2FtZS9nYW1lL0Nhbm5vbmJvbHRUcmFuc2Zvcm1hdGlvbi5qcyIsIi4uL2dhbWUvZ2FtZS9Db2luLmpzIiwiLi4vZ2FtZS9nYW1lL0Rvb3IuanMiLCIuLi9nYW1lL2dhbWUvRW5lbXkuanMiLCIuLi9nYW1lL2dhbWUvRm91cmFybXNQb3dlcnVwLmpzIiwiLi4vZ2FtZS9nYW1lL0ZvdXJhcm1zVHJhbnNmb3JtYXRpb24uanMiLCIuLi9nYW1lL2dhbWUvR2FtZU9iamVjdC5qcyIsIi4uL2dhbWUvZ2FtZS9MZXZlbC5qcyIsIi4uL2dhbWUvZ2FtZS9PdmVyZmxvd1Bvd2VydXAuanMiLCIuLi9nYW1lL2dhbWUvT3ZlcmZsb3dTaG90LmpzIiwiLi4vZ2FtZS9nYW1lL092ZXJmbG93VHJhbnNmb3JtYXRpb24uanMiLCIuLi9nYW1lL2dhbWUvUGFydGljbGVTeXN0ZW0uanMiLCIuLi9nYW1lL2dhbWUvUG93ZXJ1cC5qcyIsIi4uL2dhbWUvZ2FtZS9Sb29tLmpzIiwiLi4vZ2FtZS9nYW1lL1NwbGluZUxheWVyLmpzIiwiLi4vZ2FtZS9nYW1lL1RyYW5zZm9ybWF0aW9uLmpzIiwiLi4vZ2FtZS9nYW1lL1RyYW5zZm9ybWF0aW9uRWZmZWN0LmpzIiwiLi4vZ2FtZS9nYW1lL1VwZ3JhZGVQb3dlcnVwLmpzIiwiLi4vZ2FtZS9nYW1lL1VwZ3JhZGVTaG90LmpzIiwiLi4vZ2FtZS9nYW1lL1VwZ3JhZGVUcmFuc2Zvcm1hdGlvbi5qcyIsIi4uL2dhbWUvZ2VuZXJhbC9HbG9iYWwuanMiLCIuLi9nYW1lL2dlbmVyYWwvTmV4dEJ1dHRvbi5qcyIsIi4uL2dhbWUvZ2VuZXJhbC9Tb3VuZFNGWC5qcyIsIi4uL2dhbWUvbGliL011dGVCdXR0b24uanMiLCIuLi9nYW1lL2xpYi9TY2VuZS5qcyIsIi4uL2dhbWUvbGliL1NjZW5lTWFuYWdlci5qcyIsIi4uL2dhbWUvbGliL1RyYW5zaXRpb24uanMiLCIuLi9nYW1lL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheS5qcyIsIi4uL2dhbWUvb3ZlcmxheXMvUGF1c2VPdmVybGF5LmpzIiwiLi4vZ2FtZS9zY3JlZW5zL0FsaWVuSW5zdHJ1Y3Rpb25zU2NyZWVuLmpzIiwiLi4vZ2FtZS9zY3JlZW5zL0NOUHJlbG9hZGVyU2NyZWVuLmpzIiwiLi4vZ2FtZS9zY3JlZW5zL0Nvb2xXYWl0U2NyZWVuLmpzIiwiLi4vZ2FtZS9zY3JlZW5zL0VuZExldmVsU2NyZWVuLmpzIiwiLi4vZ2FtZS9zY3JlZW5zL0dhbWVTY3JlZW4uanMiLCIuLi9nYW1lL3NjcmVlbnMvSW5zdHJ1Y3Rpb25zU2NyZWVuLmpzIiwiLi4vZ2FtZS9zY3JlZW5zL0xldmVsU2VsZWN0aW9uU2NyZWVuLmpzIiwiLi4vZ2FtZS9zY3JlZW5zL1NpbXBsZVNjcmVlbi5qcyIsIi4uL2dhbWUvc2NyZWVucy9TcGxhc2hTY3JlZW4uanMiLCIuLi9nYW1lL3VpL0JlbkJ1dHRvbi5qcyIsIi4uL2dhbWUvdWkvQmVuTXV0ZUJ1dHRvbi5qcyIsIi4uL2dhbWUvdWkvQmdSaW5nLmpzIiwiLi4vZ2FtZS91aS9CdXR0b25SaW5nLmpzIiwiLi4vZ2FtZS91aS9CdXR0b25TcHJpdGVzLmpzIiwiLi4vZ2FtZS91aS9Eb3VibGVTdGF0ZUljb24uanMiLCIuLi9nYW1lL3VpL0xldmVsQnV0dG9uLmpzIiwiLi4vZ2FtZS91aS9TaW5nbGVTdGF0ZUljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdm1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25mQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2plQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoIFwiLi9Db21tb25cIiApO1xudmFyIEdhbWVTY3JlZW4gICAgICA9IHJlcXVpcmUoIFwiLi9zY3JlZW5zL0dhbWVTY3JlZW5cIiApO1xudmFyIFNwbGFzaFNjcmVlbiAgICA9IHJlcXVpcmUoIFwiLi9zY3JlZW5zL1NwbGFzaFNjcmVlblwiICk7XG52YXIgSW5zdHJ1Y3Rpb25zU2NyZWVuICAgID0gcmVxdWlyZSggXCIuL3NjcmVlbnMvSW5zdHJ1Y3Rpb25zU2NyZWVuXCIgKTtcbnZhciBFbmRMZXZlbFNjcmVlbiAgPSByZXF1aXJlKCBcIi4vc2NyZWVucy9FbmRMZXZlbFNjcmVlblwiICk7XG52YXIgTGV2ZWxTZWxlY3Rpb25TY3JlZW4gPSByZXF1aXJlKCBcIi4vc2NyZWVucy9MZXZlbFNlbGVjdGlvblNjcmVlblwiICk7XG52YXIgQWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4gPSByZXF1aXJlKCBcIi4vc2NyZWVucy9BbGllbkluc3RydWN0aW9uc1NjcmVlblwiICk7XG52YXIgUGF1c2VPdmVybGF5ICAgID0gcmVxdWlyZSggXCIuL292ZXJsYXlzL1BhdXNlT3ZlcmxheVwiICk7XG52YXIgR2FtZU92ZXJPdmVybGF5ID0gcmVxdWlyZSggXCIuL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheVwiICk7XG52YXIgVHJhbnNpdGlvbiAgICAgID0gcmVxdWlyZSggXCIuL2xpYi9UcmFuc2l0aW9uXCIgKTtcbnZhciBTYXZlZERhdGEgICAgICAgPSByZXF1aXJlKCBcIi4vU2F2ZWREYXRhXCIgKTtcbnZhciBHbG9iYWwgXHRcdFx0PSByZXF1aXJlKCBcIi4vZ2VuZXJhbC9HbG9iYWxcIiApO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIEFwcGxpY2F0aW9uKClcbntcblx0LyoqXG5cdCAqIEB0eXBlIHtBc3NldE1hbmFnZXJ9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLl9hc3NldE1hbmFnZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7U2NyZWVuTWFuYWdlcn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuX3NjcmVlbk1hbmFnZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7cDMuU2NyZWVufVxuXHQgKi9cblx0dGhpcy5fY3VycmVudFNjcmVlbiA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtwMy5UcmFuc2l0aW9ufVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuXHRjb25zb2xlLmxvZyhcIkFQUExJQ0FUSU9OIElOSVRJQUxJWkVEXCIpO1xuXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcblx0dGhpcy5fc2NyZWVuTWFuYWdlciA9IENvbW1vbi5zY2VuZU1hbmFnZXI7XG5cblx0VHdlZW5NYXguZGVmYXVsdE92ZXJ3cml0ZSA9IFwibm9uZVwiO1xuXG5cdC8vVGV4dHVyZSBnZW5lcmF0aW9uOiBibGFjayBzcXVhcmVcblx0aWYoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWydibGFja1NxdWFyZSddID09IHVuZGVmaW5lZClcblx0e1xuXHRcdHZhciBnciA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG5cdFx0Z3IuYmVnaW5GaWxsKDB4MDAwMDAwKTtcblx0XHRnci5kcmF3UmVjdCgwLCAwLCAxLCAxKTtcblx0XHRDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10gPSBnci5nZW5lcmF0ZVRleHR1cmUoQ29tbW9uLnJlbmRlcmVyLCAxLjAsIFBJWEkuU0NBTEVfTU9ERVMuTElORUFSKTtcblx0fVxuXHRcblx0Ly9UZXh0dXJlIGdlbmVyYXRpb246IHdoaXRlIHNxdWFyZVxuXHRpZihDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ3doaXRlU3F1YXJlJ10gPT0gdW5kZWZpbmVkKVxuXHR7XG5cdFx0dmFyIGdyID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblx0XHRnci5iZWdpbkZpbGwoMHhmZmZmZmYpO1xuXHRcdGdyLmRyYXdSZWN0KDAsIDAsIDEsIDEpO1xuXHRcdENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snd2hpdGVTcXVhcmUnXSA9IGdyLmdlbmVyYXRlVGV4dHVyZShDb21tb24ucmVuZGVyZXIsIDEuMCwgUElYSS5TQ0FMRV9NT0RFUy5MSU5FQVIpO1xuXHR9XG5cblx0Q29tbW9uLnNhdmVkRGF0YSA9IG5ldyBTYXZlZERhdGEoKTtcblx0Ly8gREVCVUc6IENsZWFyIHNhdmVkIGRhdGEuIFVuY29tbWVudCBzYXZlKCkgYW5kIGNvbW1lbnQgaW5pdCgpLlxuXHQvL0NvbW1vbi5zYXZlZERhdGEuc2F2ZSgpO1xuXHRDb21tb24uc2F2ZWREYXRhLmluaXQoKTtcblxuXHRwMy5CdXR0b24uYXVkaW8gPSBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2U7XG5cdFxuXHQvL3RoaXMuc2hvd0VuZExldmVsU2NyZWVuKCk7XG5cdHRoaXMuc2hvd1NwbGFzaFNjcmVlbigpO1xuXHQvL3RoaXMuc2hvd0dhbWVTY3JlZW4oIFwibGV2ZWxfMV8yXCIgKTtcblx0Ly90aGlzLnNob3dMZXZlbFNlbGVjdGlvblNjcmVlbigpO1xufTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLmZpbmRBbGllbklkID0gZnVuY3Rpb24oIGNoYXB0ZXJJbmRleCwgbGV2ZWxJbmRleCApXG57XG5cdHZhciBhbGllbklkID0gLTE7XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IEdsb2JhbC5BTElFTl9UVVRPUklBTF9MRVZFTF9JRF9BUlJBWS5sZW5ndGg7ICsraSApXG5cdHtcblx0XHRpZiAoIEdsb2JhbC5BTElFTl9UVVRPUklBTF9MRVZFTF9JRF9BUlJBWVsgaSBdLmxldmVsSWQgPT0gbGV2ZWxJbmRleCArIDFcblx0XHRcdCYmIEdsb2JhbC5BTElFTl9UVVRPUklBTF9MRVZFTF9JRF9BUlJBWVsgaSBdLmNoYXB0ZXJJZCA9PSBjaGFwdGVySW5kZXggKyAxIClcblx0XHRcdGFsaWVuSWQgPSBHbG9iYWwuQUxJRU5fVFVUT1JJQUxfTEVWRUxfSURfQVJSQVlbIGkgXS5hbGllbklkO1xuXHR9XG5cdFxuXHRyZXR1cm4gYWxpZW5JZDtcbn1cblxuLyoqXG4gKiBFTkQgTEVWRUxcbiAqL1xuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dFbmRMZXZlbFNjcmVlbiA9IGZ1bmN0aW9uKCBsZXZlbFJlc3VsdEluZm8gKVxue1xuXHQvLyBNdXNpYy5cblx0dmFyIGFyck11c2ljSWQgPSBbIFwiY2hhcHRlcjFfY29tcGxldGUwMV80MHBjX3ZvbFwiLCBcImNoYXB0ZXIyX2NvbXBsZXRlMDFfNDBwY192b2xcIiwgXCJjaGFwdGVyM19jb21wbGV0ZTAxXzQwcGNfdm9sXCIgXTtcblx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlNdXNpYyggYXJyTXVzaWNJZFsgbGV2ZWxSZXN1bHRJbmZvLmNoYXB0ZXJJbmRleCBdLCB7bG9vcDpmYWxzZX0gKTtcblxuXHR2YXIgc2NyZWVuID0gbmV3IEVuZExldmVsU2NyZWVuKCBsZXZlbFJlc3VsdEluZm8gKTtcblx0dGhpcy5fc2NyZWVuTWFuYWdlci5hZGQoIHNjcmVlbiwgdGhpcy5fZ2V0VHJhbnNpdGlvbigpICk7XG5cblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uYWRkT25jZShcblx0XHRmdW5jdGlvbigpIHsgdGhpcy5zaG93U3BsYXNoU2NyZWVuKCk7IH0sIFxuXHRcdHRoaXMgKTtcblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGRPbmNlKCBcblx0XHRmdW5jdGlvbigpIFxuXHRcdHsgXG5cdFx0XHQvLyBJbmNyZW1lbnQgY2hhcHRlci9sZXZlbCBpbmRleC5cblx0XHRcdHZhciBsZXZlbEluZGV4ID0gbGV2ZWxSZXN1bHRJbmZvLmxldmVsSW5kZXg7XG5cdFx0XHR2YXIgY2hhcHRlckluZGV4ID0gbGV2ZWxSZXN1bHRJbmZvLmNoYXB0ZXJJbmRleDtcblx0XHRcblx0XHRcdGlmICggbGV2ZWxJbmRleCA9PSBHbG9iYWwuTEVWRUxfSURfQVJSQVlbIGxldmVsUmVzdWx0SW5mby5jaGFwdGVySW5kZXggXS5sZW5ndGggLSAxIClcblx0XHRcdHtcblx0XHRcdFx0aWYgKCBjaGFwdGVySW5kZXggPCBHbG9iYWwuTEVWRUxfSURfQVJSQVkubGVuZ3RoIC0gMSApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQrK2NoYXB0ZXJJbmRleDtcblx0XHRcdFx0XHRsZXZlbEluZGV4ID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHQrK2xldmVsSW5kZXg7XG5cdFx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvLyBTaG93IGFsaWVuIGluc3RydWN0aW9ucyBvciBnYW1lIHNjcmVlbi5cblx0XHRcdHZhciBhbGllbklkID0gdGhpcy5maW5kQWxpZW5JZCggY2hhcHRlckluZGV4LCBsZXZlbEluZGV4ICk7XHRcdFx0XG5cdFx0XHRpZiAoIGFsaWVuSWQgPT0gLTEgKVxuXHRcdFx0XHR0aGlzLnNob3dHYW1lU2NyZWVuKCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXggKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5zaG93QWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4oIGFsaWVuSWQsIGNoYXB0ZXJJbmRleCwgbGV2ZWxJbmRleCApO1xuXHRcdH0sIFxuXHRcdHRoaXMgKTtcblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTGV2ZWxTZWxlY3Rpb25TY3JlZW4uYWRkT25jZSggXG5cdFx0ZnVuY3Rpb24oKSB7IHRoaXMuc2hvd0xldmVsU2VsZWN0aW9uU2NyZWVuKCk7IH0sIFxuXHRcdHRoaXMgKTtcblx0c2NyZWVuLnNpZ25hbHMucmVwbGF5TGV2ZWwuYWRkT25jZSggXG5cdFx0ZnVuY3Rpb24oKSB7IHRoaXMuc2hvd0dhbWVTY3JlZW4oIGxldmVsUmVzdWx0SW5mby5jaGFwdGVySW5kZXgsIGxldmVsUmVzdWx0SW5mby5sZXZlbEluZGV4ICk7IH0sIFxuXHRcdHRoaXMgKTtcblxuXHR0aGlzLl9jdXJyZW50U2NyZWVuID0gc2NyZWVuO1xufTtcblxuLyoqXG4gKiBMRVZFTCBTRUxFQ1RJT05cbiAqL1xuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dMZXZlbFNlbGVjdGlvblNjcmVlbiA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHNjcmVlbiA9IG5ldyBMZXZlbFNlbGVjdGlvblNjcmVlbigpO1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyLmFkZCggc2NyZWVuLCB0aGlzLl9nZXRUcmFuc2l0aW9uKCkgKTtcblxuXHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5hZGRPbmNlKFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNob3dTcGxhc2hTY3JlZW4oKTsgfSwgXG5cdFx0dGhpcyApO1xuXG5cdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uYWRkT25jZShcblx0XHRmdW5jdGlvbiggY2hhcHRlckluZGV4LCBsZXZlbEluZGV4ICkgXG5cdFx0eyBcblx0XHRcdGlmICggIUNvbW1vbi5zYXZlZERhdGEuaGFzVmlld2VkSW5zdHJ1Y3Rpb25zIClcblx0XHRcdHtcblx0XHRcdFx0Q29tbW9uLnNhdmVkRGF0YS5oYXNWaWV3ZWRJbnN0cnVjdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHRDb21tb24uc2F2ZWREYXRhLnNhdmUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuc2hvd0luc3RydWN0aW9uc1NjcmVlbiggY2hhcHRlckluZGV4LCBsZXZlbEluZGV4ICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XHRcdFxuXHRcdFx0XHR2YXIgYWxpZW5JZCA9IC0xO1xuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBHbG9iYWwuQUxJRU5fVFVUT1JJQUxfTEVWRUxfSURfQVJSQVkubGVuZ3RoOyArK2kgKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKCBHbG9iYWwuQUxJRU5fVFVUT1JJQUxfTEVWRUxfSURfQVJSQVlbIGkgXS5sZXZlbElkID09IGxldmVsSW5kZXggKyAxXG5cdFx0XHRcdFx0XHQmJiBHbG9iYWwuQUxJRU5fVFVUT1JJQUxfTEVWRUxfSURfQVJSQVlbIGkgXS5jaGFwdGVySWQgPT0gY2hhcHRlckluZGV4ICsgMSApXG5cdFx0XHRcdFx0XHRhbGllbklkID0gR2xvYmFsLkFMSUVOX1RVVE9SSUFMX0xFVkVMX0lEX0FSUkFZWyBpIF0uYWxpZW5JZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBhbGllbklkID09IC0xIClcblx0XHRcdFx0XHR0aGlzLnNob3dHYW1lU2NyZWVuKCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXggKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuc2hvd0FsaWVuSW5zdHJ1Y3Rpb25zU2NyZWVuKCBhbGllbklkLCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXggKTtcblx0XHRcdH1cblx0XHR9LCBcblx0XHR0aGlzICk7XG5cblx0dGhpcy5fY3VycmVudFNjcmVlbiA9IHNjcmVlbjtcbn07XG5cbi8qKlxuICogQUxJRU4gSU5TVFJVQ1RJT05TXG4gKi9cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zaG93QWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4gPSBmdW5jdGlvbiggYWxpZW5JZCwgY2hhcHRlckluZGV4LCBsZXZlbEluZGV4IClcbntcblx0dmFyIHNjcmVlbiA9IG5ldyBBbGllbkluc3RydWN0aW9uc1NjcmVlbiggYWxpZW5JZCwgY2hhcHRlckluZGV4LCBsZXZlbEluZGV4ICk7XG5cdHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKCBzY3JlZW4sIHRoaXMuX2dldFRyYW5zaXRpb24oKSApO1xuXG5cdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoXG5cdFx0ZnVuY3Rpb24oKSB7IHRoaXMuc2hvd0xldmVsU2VsZWN0aW9uU2NyZWVuKCk7IH0sIFxuXHRcdHRoaXMgKTtcblxuXHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmFkZE9uY2UoXG5cdFx0ZnVuY3Rpb24oIGNoYXB0ZXJJbmRleCwgbGV2ZWxJbmRleCApIHsgdGhpcy5zaG93R2FtZVNjcmVlbiggY2hhcHRlckluZGV4LCBsZXZlbEluZGV4ICk7IH0sIFxuXHRcdHRoaXMgKTtcblxuXHR0aGlzLl9jdXJyZW50U2NyZWVuID0gc2NyZWVuO1xufTtcblxuLyoqXG4gKiBTUExBU0hcbiAqL1xuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dTcGxhc2hTY3JlZW4gPSBmdW5jdGlvbigpXG57XG5cdC8vIE11c2ljLlxuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheU11c2ljKCBcIm1haW5fbWVudV9lZGl0NF80MHBjXCIgKTtcblxuXHR2YXIgc2NyZWVuID0gbmV3IFNwbGFzaFNjcmVlbigpO1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyLmFkZCggc2NyZWVuLCB0aGlzLl9nZXRUcmFuc2l0aW9uKCkgKTtcblxuXHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5hZGRPbmNlKCBmdW5jdGlvbigpIHt9LCB0aGlzICk7XG5cblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGRPbmNlKFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNob3dMZXZlbFNlbGVjdGlvblNjcmVlbigpOyB9LCBcblx0XHR0aGlzICk7XG5cblx0dGhpcy5fY3VycmVudFNjcmVlbiA9IHNjcmVlbjtcbn07XG5cbi8qKlxuICogSU5TVFJVQ1RJT05TXG4gKi9cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zaG93SW5zdHJ1Y3Rpb25zU2NyZWVuID0gZnVuY3Rpb24oIGNoYXB0ZXJJbmRleCwgbGV2ZWxJbmRleCApXG57XG5cdHZhciBzY3JlZW4gPSBuZXcgSW5zdHJ1Y3Rpb25zU2NyZWVuKCk7XG5cdHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKCBzY3JlZW4sIHRoaXMuX2dldFRyYW5zaXRpb24oKSApO1xuXG5cdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoIFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNob3dMZXZlbFNlbGVjdGlvblNjcmVlbigpOyB9LCBcblx0XHR0aGlzICk7XG5cblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGRPbmNlKFxuXHRcdGZ1bmN0aW9uKCkgXG5cdFx0eyBcblx0XHRcdC8vIFNob3cgYWxpZW4gaW5zdHJ1Y3Rpb25zIG9yIGdhbWUgc2NyZWVuLlxuXHRcdFx0dmFyIGFsaWVuSWQgPSB0aGlzLmZpbmRBbGllbklkKCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXggKTtcdFx0XHRcblx0XHRcdGlmICggYWxpZW5JZCA9PSAtMSApXG5cdFx0XHRcdHRoaXMuc2hvd0dhbWVTY3JlZW4oIGNoYXB0ZXJJbmRleCwgbGV2ZWxJbmRleCApO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnNob3dBbGllbkluc3RydWN0aW9uc1NjcmVlbiggYWxpZW5JZCwgY2hhcHRlckluZGV4LCBsZXZlbEluZGV4ICk7XG5cdFx0fSwgXG5cdFx0dGhpcyApO1xuXG5cdHRoaXMuX2N1cnJlbnRTY3JlZW4gPSBzY3JlZW47XG59O1xuXG5cbi8qKlxuICogR0FNRVxuICovXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd0dhbWVTY3JlZW4gPSBmdW5jdGlvbiggY2hhcHRlckluZGV4LCBsZXZlbEluZGV4IClcbntcblx0Ly8gTXVzaWMuXG5cdHZhciBhcnJNdXNpY0lkID0gWyBcImNoYXB0ZXIxX2VkaXRfNDBwY192b2xcIiwgXCJjaGFwdGVyMl9lZGl0XzQwcGNfdm9sXCIsIFwiY2hhcHRlcjNfZWRpdF80MHBjX3ZvbFwiIF07XG5cdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5TXVzaWMoIGFyck11c2ljSWRbIGNoYXB0ZXJJbmRleCBdICk7XG5cblx0dmFyIHNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXggKTtcblx0dGhpcy5fc2NyZWVuTWFuYWdlci5hZGQoIHNjcmVlbiwgdGhpcy5fZ2V0VHJhbnNpdGlvbigpICk7XG5cblx0c2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uYWRkT25jZShcblx0XHRmdW5jdGlvbigpIHsgLyp0aGlzLnNob3dHYW1lU2NyZWVuKCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXgsIHNjcmVlbi5sZXZlbC5sZXZlbFJlc3VsdEluZm8udGltZSApOyovXG5cdFx0XHRzY3JlZW4ubGV2ZWwucmVzdGFydCgpOyB9LCBcblx0XHR0aGlzICk7XG5cdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uYWRkT25jZShcblx0XHRmdW5jdGlvbigpIHsgdGhpcy5zaG93RW5kTGV2ZWxTY3JlZW4oIHNjcmVlbi5sZXZlbC5sZXZlbFJlc3VsdEluZm8gKTsgfSwgXG5cdFx0dGhpcyApO1xuXHRzY3JlZW4uc2lnbmFscy5wYXVzZVByZXNzZWQuYWRkKFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNob3dQYXVzZVNjcmVlbiggZmFsc2UgKTsgfSwgXG5cdFx0dGhpcyApO1xuXG5cdHRoaXMuX2N1cnJlbnRTY3JlZW4gPSBzY3JlZW47XG5cblx0cmV0dXJuIHNjcmVlbjtcbn07XG5cbi8qKlxuICogUEFVU0VcbiAqL1xuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dQYXVzZVNjcmVlbiA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHQgICAgID0gbmV3IFRyYW5zaXRpb24oKTtcblx0dC5yZXBsYWNlID0gZmFsc2U7XG5cdHQucHVzaCAgICA9IHRydWU7XG5cblx0dGhpcy5fY3VycmVudFNjcmVlbi5oaWRlR1VJKFxuXHRcdGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR2YXIgc2NyZWVuID0gbmV3IFBhdXNlT3ZlcmxheSgpO1xuXHRcdFx0dGhpcy5fc2NyZWVuTWFuYWdlci5hZGQoIHNjcmVlbiwgdCApO1xuXG5cdFx0XHRzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmFkZE9uY2UoXG5cdFx0XHRcdGZ1bmN0aW9uKCkgXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGhpcy5fc2NyZWVuTWFuYWdlci5yZW1vdmUoKTtcblx0XHRcdFx0XHR0aGlzLl9jdXJyZW50U2NyZWVuLnNob3dHVUkoKTtcblx0XHRcdFx0fSwgXG5cdFx0XHRcdHRoaXMgKTtcblx0XHRcdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoXG5cdFx0XHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNob3dTcGxhc2hTY3JlZW4oKTsgfSwgXG5cdFx0XHRcdHRoaXMgKTtcblx0XHRcdHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZEdhbWVTY3JlZW4uYWRkT25jZShcblx0XHRcdFx0ZnVuY3Rpb24oKSBcblx0XHRcdFx0eyBcblx0XHRcdFx0XHR0aGlzLl9zY3JlZW5NYW5hZ2VyLnJlbW92ZSgpO1xuXHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRTY3JlZW4uc2hvd0dVSSgpO1xuXHRcdFx0XHRcdGlmICggdGhpcy5fY3VycmVudFNjcmVlbi5sZXZlbC5zdGF0ZSAhPSB0aGlzLl9jdXJyZW50U2NyZWVuLmxldmVsLlNUQVRFX0dBTUVfT1ZFUiApXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLl9jdXJyZW50U2NyZWVuLmxldmVsLnJvb20uYXZhdGFyLmN1cnJlbnRBbmltYXRpb24gPT0gXCJydW5fbGV2ZWxcIiApXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRTY3JlZW4ubGV2ZWwucm9vbS5hdmF0YXIuc2V0QW5pbWF0aW9uKCBcImlkbGVcIiwgZmFsc2UgKTtcblx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRTY3JlZW4ubGV2ZWwub25HYW1lT3ZlcigpOyBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIFxuXHRcdFx0XHR0aGlzICk7XG5cdFx0fSwgXG5cdFx0dGhpcywgXG5cdFx0dHJ1ZSApO1xufTtcblxuLyoqXG4gKi9cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5fZ2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbigpO1xuXHR0cmFuc2l0aW9uLnJlcGxhY2UgPSB0cnVlO1xuXHR0cmFuc2l0aW9uLnB1c2ggPSBmYWxzZTtcblx0cmV0dXJuIHRyYW5zaXRpb247XG59XG5cbiIsIi8qKlxuICogIENvbW1vblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAzMC8wNC8yMDE1LlxuICpcbiAqL1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIENvbW1vbigpIHt9XG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbjtcblxuXG4vKiAtLS0tLS1HRU5FUklDLS0tLS0tICovXG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBjb25zdFxuICovXG5Db21tb24uU1RBR0VfV0lEVEggPSAxOTAwLjA7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBjb25zdFxuICovXG5Db21tb24uU1RBR0VfSEVJR0hUID0gNzY4LjA7XG5cbi8qKlxuICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uc3RhZ2UgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtQSVhJLkNhbnZhc1JlbmRlcmVyfFBJWEkuV2ViR0xSZW5kZXJlcn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnJlbmRlcmVyID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7cDMuVGltZXN0ZXB9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi50aW1lc3RlcCA9IG51bGw7XG5cbi8qKlxuICogQHR5cGUge3AzLkFuaW1hdG9yfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uYW5pbWF0b3IgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtQSVhJLlBvaW50fVxuICogQHN0YXRpY1xuICovXG5Db21tb24udG91Y2ggPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnBhdXNlZCA9IGZhbHNlO1xuXG4vKipcbiAqIEB0eXBlIHtCb29sZWFufVxuICogQHN0YXRpY1xuICovXG5Db21tb24uaXNXZWJHTCA9IGZhbHNlO1xuXG4vKipcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAY29uc3RcbiAqL1xuQ29tbW9uLkRFQlVHX1BBSU5UX01PREUgPSAwO1xuXG4vKipcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5mcmFtZUNvdW50ID0gMDtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5GUFMgPSA2MDtcblxuLyoqXG4gKiBAdHlwZSB7U2F2ZWREYXRhfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uc2NlbmVNYW5hZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uZ2VuZXJhdGVkVGV4dHVyZXMgPSB7fTtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uQ09VTlRSWV9DT0RFID0gJ2VuJztcblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICovXG5Db21tb24uYW5pbWF0aW9uRGF0YSA9IHt9O1xuXG4vKipcbiAqIEB0eXBlIHtTYXZlZERhdGF9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5zYXZlZERhdGEgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5jaGFyYWN0ZXJBbmltYXRpb25EYXRhID0gW107XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogS2V5Ym9hcmQgY2xhc3NcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gS2V5Ym9hcmQoKVxue1xufVxubW9kdWxlLmV4cG9ydHMgPSBLZXlib2FyZDtcblxudmFyIEtleWJvYXJkID0gS2V5Ym9hcmQucHJvdG90eXBlO1xuXG4vKipcbiAqIEB0eXBlIHtTaWduYWwuU2lnbmFsfVxuICovXG5LZXlib2FyZC5zaWduYWxLZXlEb3duID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5LZXlib2FyZC5zaWduYWxLZXlVcCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4vKipcbiAqIEB0eXBlIHtPYmplY3QuPGJvb2xlYW4+fVxuICovXG5LZXlib2FyZC5fa2V5c0Rvd24gICAgPSBudWxsO1xuS2V5Ym9hcmQuX2tleXNQcmVzc2VkID0gbnVsbDtcbktleWJvYXJkLl9rZXlzVXAgICAgICA9IG51bGw7XG5cbi8qKlxuICogQGNvbnN0IEB0eXBlIHtudW1iZXJ9XG4gKi9cbktleWJvYXJkLktFWV9UQUIgICA9IDk7XG5LZXlib2FyZC5LRVlfRU5URVIgPSAxMztcbktleWJvYXJkLktFWV9TSElGVCA9IDE2O1xuS2V5Ym9hcmQuS0VZX0NUUkwgID0gMTc7XG5LZXlib2FyZC5LRVlfU1BBQ0UgPSAzMjtcbktleWJvYXJkLktFWV9MRUZUICA9IDM3O1xuS2V5Ym9hcmQuS0VZX1VQICAgID0gMzg7XG5LZXlib2FyZC5LRVlfUklHSFQgPSAzOTtcbktleWJvYXJkLktFWV9ET1dOICA9IDQwO1xuS2V5Ym9hcmQuS0VZX0EgICAgID0gNjU7XG5LZXlib2FyZC5LRVlfQiAgICAgPSA2NjtcbktleWJvYXJkLktFWV9DICAgICA9IDY3O1xuS2V5Ym9hcmQuS0VZX0QgICAgID0gNjg7XG5LZXlib2FyZC5LRVlfRSAgICAgPSA2OTtcbktleWJvYXJkLktFWV9GICAgICA9IDcwO1xuS2V5Ym9hcmQuS0VZX0cgICAgID0gNzE7XG5LZXlib2FyZC5LRVlfSCAgICAgPSA3MjtcbktleWJvYXJkLktFWV9JICAgICA9IDczO1xuS2V5Ym9hcmQuS0VZX0ogICAgID0gNzQ7XG5LZXlib2FyZC5LRVlfSyAgICAgPSA3NTtcbktleWJvYXJkLktFWV9MICAgICA9IDc2O1xuS2V5Ym9hcmQuS0VZX00gICAgID0gNzc7XG5LZXlib2FyZC5LRVlfTiAgICAgPSA3ODtcbktleWJvYXJkLktFWV9PICAgICA9IDc5O1xuS2V5Ym9hcmQuS0VZX1AgICAgID0gODA7XG5LZXlib2FyZC5LRVlfUSAgICAgPSA4MTtcbktleWJvYXJkLktFWV9SICAgICA9IDgyO1xuS2V5Ym9hcmQuS0VZX1MgICAgID0gODM7XG5LZXlib2FyZC5LRVlfVCAgICAgPSA4NDtcbktleWJvYXJkLktFWV9VICAgICA9IDg1O1xuS2V5Ym9hcmQuS0VZX1YgICAgID0gODY7XG5LZXlib2FyZC5LRVlfVyAgICAgPSA4NztcbktleWJvYXJkLktFWV9YICAgICA9IDg4O1xuS2V5Ym9hcmQuS0VZX1kgICAgID0gODk7XG5LZXlib2FyZC5LRVlfWiAgICAgPSA5MDtcbktleWJvYXJkLktFWV9QTFVzICA9IDE4NztcbktleWJvYXJkLktFWV9NSU5VUyA9IDE4OTtcblxuXG4vKipcbiAqIEluaXRpYWxpemF0aW9uXG4gKi9cbktleWJvYXJkLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMucmVzZXQoKTtcblxuXHQvLyBLZXkgZXZlbnRzXG5cdGRvY3VtZW50LmJvZHkub25rZXlkb3duID0gZnVuY3Rpb24oZSlcblx0e1xuXHRcdHZhciBjb2RlO1xuXHRcdGlmKHdpbmRvdy5ldmVudCkgY29kZSA9IGUua2V5Q29kZTtcblx0XHRlbHNlICAgICAgICAgICAgIGNvZGUgPSBlLndoaWNoO1xuXG5cdFx0S2V5Ym9hcmQuX2tleXNEb3duW2NvZGVdICAgID0gIUtleWJvYXJkLl9rZXlzUHJlc3NlZFtjb2RlXTtcblx0XHRLZXlib2FyZC5fa2V5c1ByZXNzZWRbY29kZV0gPSB0cnVlO1xuXG5cdFx0S2V5Ym9hcmQuc2lnbmFsS2V5RG93bi5kaXNwYXRjaChjb2RlKTtcblx0fVxuXG5cdGRvY3VtZW50LmJvZHkub25rZXl1cCA9IGZ1bmN0aW9uKGUpXG5cdHtcblx0XHR2YXIgY29kZTtcblx0XHRpZih3aW5kb3cuZXZlbnQpIGNvZGUgPSBlLmtleUNvZGU7XG5cdFx0ZWxzZSAgICAgICAgICAgICBjb2RlID0gZS53aGljaDtcblxuXHRcdEtleWJvYXJkLl9rZXlzRG93bltjb2RlXSAgICA9IGZhbHNlO1xuXHRcdEtleWJvYXJkLl9rZXlzUHJlc3NlZFtjb2RlXSA9IGZhbHNlO1xuXHRcdEtleWJvYXJkLl9rZXlzVXBbY29kZV0gICAgICA9IHRydWU7XG5cblx0XHRLZXlib2FyZC5zaWduYWxLZXlVcC5kaXNwYXRjaChjb2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZVxuICovXG5LZXlib2FyZC51cGRhdGUgPSBmdW5jdGlvbigpXG57XG5cdEtleWJvYXJkLl9rZXlzRG93biA9IHt9O1xuXHRLZXlib2FyZC5fa2V5c1VwICAgPSB7fTtcbn1cblxuLyoqXG4gKiBSZXNldFxuICovXG5LZXlib2FyZC5yZXNldCA9IGZ1bmN0aW9uKClcbntcblx0S2V5Ym9hcmQuX2tleXNEb3duICAgID0ge307XG5cdEtleWJvYXJkLl9rZXlzUHJlc3NlZCA9IHt9O1xuXHRLZXlib2FyZC5fa2V5c1VwICAgICAgPSB7fTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gaWYgdGhlIGdpdmVuIGtleUNvZGUgaXMgY3VycmVudGx5IHByZXNzZWRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0ga2V5Q29kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbktleWJvYXJkLmdldEtleVByZXNzZWQgPSBmdW5jdGlvbihrZXlDb2RlKVxue1xuXHRyZXR1cm4gS2V5Ym9hcmQuX2tleXNQcmVzc2VkW2tleUNvZGVdO1xufVxuXG4vKipcbiAqIFJldHVybiBpZiB0aGUgZ2l2ZW4ga2V5Q29kZSBvciB0aGUgZ2l2ZW4gY29tYmluYXRpb24gb2Yga2V5cyBoYXMganVzdCBiZWVuIHByZXNzZWRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0ga2V5Q29kZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbktleWJvYXJkLmdldEtleUp1c3RQcmVzc2VkID0gZnVuY3Rpb24oa2V5Q29kZSlcbntcblx0cmV0dXJuIEtleWJvYXJkLl9rZXlzRG93bltrZXlDb2RlXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gaWYgdGhlIGdpdmVuIGtleUNvZGUgb3IgdGhlIGdpdmVuIGNvbWJpbmF0aW9uIG9mIGtleXMgaGFzIGp1c3QgYmVlbiByZWxlYXNlZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBrZXlDb2RlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuS2V5Ym9hcmQuZ2V0S2V5SnVzdFJlbGVhc2VkID0gZnVuY3Rpb24oa2V5Q29kZSlcbntcblx0cmV0dXJuIEtleWJvYXJkLl9rZXlzVXBba2V5Q29kZV07XG59IiwiLyoqXG4gKiAgTWFpblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAyNy8wNC8yMDE1LlxuICpcbiAqL1xuXG52YXIgQXBwbGljYXRpb24gICA9IHJlcXVpcmUoXCIuL0FwcGxpY2F0aW9uXCIpO1xudmFyIENvbW1vbiAgICAgICAgPSByZXF1aXJlKFwiLi9Db21tb25cIik7XG52YXIgQ29vbFdhaXRTY3JlZW4gICAgID0gcmVxdWlyZShcIi4vc2NyZWVucy9Db29sV2FpdFNjcmVlblwiKTtcbnZhciBTY2VuZU1hbmFnZXIgID0gcmVxdWlyZShcIi4vbGliL1NjZW5lTWFuYWdlclwiKTtcbnZhciBLZXlib2FyZCAgICAgID0gcmVxdWlyZShcIi4vS2V5Ym9hcmRcIik7XG52YXIgQ05QcmVsb2FkZXJTY3JlZW4gID0gcmVxdWlyZShcIi4vc2NyZWVucy9DTlByZWxvYWRlclNjcmVlblwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBwYXJhbSB7IU51bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7IU51bWJlcn0gaGVpZ2h0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWFpbih3aWR0aCwgaGVpZ2h0KVxue1xuXHQvKipcblx0ICogQHR5cGUgeyFOdW1iZXJ9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLl93aWR0aCAgPSB3aWR0aDtcblx0dGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7cDMuQXNzZXRNYW5hZ2VyfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge3AzLlNjcmVlbk1hbmFnZXJ9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1ByZWxvYWRlcn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuX3ByZWxvYWRlciA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtBcHBsaWNhdGlvbn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuX2dhbWUgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5fcmVzb2x1dGlvbiA9IDEuMDtcblxuXHQvKipcblx0ICogQHR5cGUge1N0cmluZ31cblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuX3NjYWxlICAgICAgPSBcImhkL1wiO1xuXHR0aGlzLl9yZW5kZXJGUFMgID0gNjAuMDtcblx0dGhpcy5fZnJhbWVDb3VudCA9IDA7XG5cbn1cbndpbmRvdy5NYWluID0gTWFpbjtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuTWFpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcbiAgXHR0aGlzLl9hc3NldE1hbmFnZXIgID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcigpO1xuXG5cdENvbW1vbi5DT1VOVFJZX0NPREUgPSB3aW5kb3cub2cubGFuZ3VhZ2U7XG5cblx0dmFyIGVsZW1lbnRJZCAgID0gXCJvZy1nYW1lLWhvbGRlclwiO1xuXHR2YXIgcGFyYW1zICAgICAgPSBuZXcgcDMuVmlld1BhcmFtcygpO1xuXHRwYXJhbXMud2lkdGggICAgPSB0aGlzLl93aWR0aDtcblx0cGFyYW1zLmhlaWdodCAgID0gdGhpcy5faGVpZ2h0O1xuXHRwYXJhbXMuaG9sZGVySWQgPSBlbGVtZW50SWQ7XG5cdHBhcmFtcy5yb3RhdGVJbWFnZVVybCAgID0gXCIuL2Fzc2V0cy9pbWFnZXMvbG9jYWxpc2F0aW9uL3JvdGF0ZV9cIiArIENvbW1vbi5DT1VOVFJZX0NPREUgKyBcIi5qcGdcIjtcblx0cGFyYW1zLnJvdGF0ZUltYWdlQ29sb3IgPSBcIiMwMDAwMDBcIjtcblxuXHRQSVhJLlJFVElOQV9QUkVGSVggPSAvXFxfKD89W15fXSokKSguKyl4LztcblxuXHRwMy5UcmFja2luZy5ERUJVRyA9IHRydWU7XG5cdENvbW1vbi50cmFja2luZyA9IG5ldyBwMy5UcmFja2luZygpO1xuXHRDb21tb24udHJhY2tpbmcuaW5pdChuZXcgcDMuVHJhY2tpbmdNb2R1bGVFY2hvKHdpbmRvdy5zdGF0cykpO1xuXG5cdHAzLkRldmljZS5pbml0KHdpbmRvd1tcImJvd3NlclwiXSk7XG5cblx0VHdlZW5NYXguZGVmYXVsdE92ZXJ3cml0ZSA9IFwibm9uZVwiO1xuXHRUd2Vlbk1heC50aWNrZXIuZnBzKENvbW1vbi5GUFMpO1xuXG5cdHZhciBjYW52YXMgPSBuZXcgcDMuVmlldyhwYXJhbXMpO1xuXHRjYW52YXMuc2lnbmFscy5yZWFkeS5hZGRPbmNlKGZ1bmN0aW9uKGNhbnZhcylcblx0e1xuXHRcdHZhciBvcHRpb25zID0ge307XG5cdFx0b3B0aW9ucy52aWV3ID0gY2FudmFzO1xuXHRcdG9wdGlvbnMudHJhbnNwYXJlbnQgPSBmYWxzZTtcblx0XHRvcHRpb25zLmFudGlhbGlhcyA9IGZhbHNlO1xuXHRcdG9wdGlvbnMucHJlc2VydmVEcmF3aW5nQnVmZmVyID0gZmFsc2U7XG5cdFx0b3B0aW9ucy5yZXNvbHV0aW9uID0gdGhpcy5fcmVzb2x1dGlvbjtcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuc2NhbGVGYWN0b3IgPSB0aGlzLl9yZXNvbHV0aW9uO1xuXG5cdFx0dmFyIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdFx0Q29tbW9uLnN0YWdlID0gc3RhZ2U7XG5cblx0XHR2YXIgcmVuZGVyZXIgPSBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcih0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBvcHRpb25zKTtcblx0XHRDb21tb24ucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuXHRcdHRoaXMuX3NjcmVlbk1hbmFnZXIuaW5pdChzdGFnZSwgcmVuZGVyZXIpO1xuXHRcdENvbW1vbi5zY2VuZU1hbmFnZXIgPSB0aGlzLl9zY3JlZW5NYW5hZ2VyO1xuXG5cdFx0Q29tbW9uLmlzV2ViR0wgPSAocmVuZGVyZXIgaW5zdGFuY2VvZiBQSVhJLldlYkdMUmVuZGVyZXIpO1xuXHRcdENvbW1vbi5ERUJVR19QQUlOVF9NT0RFID0gcDMuVXRpbHMuZ2V0VVJMUGFyYW1ldGVyKFwicGFpbnRcIiwgMCk7XG5cblx0XHR2YXIgdGltZXN0ZXAgPSBuZXcgcDMuVGltZXN0ZXAoKTtcblx0XHR0aW1lc3RlcC5pbml0KHRoaXMudXBkYXRlLCB0aGlzLnJlbmRlciwgdGhpcyk7XG5cdFx0Q29tbW9uLnRpbWVzdGVwID0gdGltZXN0ZXA7XG5cblx0XHRDb21tb24uYW5pbWF0b3IgPSBuZXcgcDMuQW5pbWF0b3IoKTtcblx0XHRDb21tb24uYW5pbWF0b3IuaW5pdCgpO1xuXG5cdFx0Q29tbW9uLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XG5cdFx0Q29tbW9uLmtleWJvYXJkLmluaXQoKTtcblxuXHRcdHRoaXMubG9hZFByZWxvYWRlcigpO1xuXG5cdH0sIHRoaXMpO1xuXHRjYW52YXMuc2lnbmFscy5yZXNpemUuYWRkKHRoaXMub25DYW52YXNSZXNpemUsIHRoaXMpO1xuXG5cdHZhciBoaWRkZW47XG5cdFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50LmhpZGRlbiA/IChoaWRkZW4gPSBcImhpZGRlblwiLFxuXHRcdHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiKSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiA/IChoaWRkZW4gPSBcIm1vekhpZGRlblwiLFxuXHRcdHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwibW96dmlzaWJpbGl0eWNoYW5nZVwiKSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50Lm1zSGlkZGVuID8gKGhpZGRlbiA9IFwibXNIaWRkZW5cIixcblx0XHR0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSBcIm1zdmlzaWJpbGl0eWNoYW5nZVwiKSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAmJiAoaGlkZGVuID0gXCJ3ZWJraXRIaWRkZW5cIixcblx0XHR0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSBcIndlYmtpdHZpc2liaWxpdHljaGFuZ2VcIik7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnZpc2liaWxpdHlDaGFuZ2UsIGZ1bmN0aW9uKCl7XG5cdFx0ZG9jdW1lbnRbaGlkZGVuXSA/IEhvd2xlci52b2x1bWUoMCkgOiBIb3dsZXIudm9sdW1lKDEpO1xuXHR9LCBmYWxzZSk7XG5cblx0d2luZG93LmRlbGF5ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCBzY29wZSkge1xuXHRcdHJldHVybiBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXksIHNjb3BlKTtcblx0fTtcbn07XG5cbi8qKlxuICovXG5NYWluLnByb3RvdHlwZS5sb2FkUHJlbG9hZGVyID0gZnVuY3Rpb24oKVxue1xuXHR2YXIgc2NhbGUgID0gdGhpcy5fc2NhbGU7XG5cdHZhciBwcmVmaXggPSAoc2NhbGUgPT09IFwic2QvXCIgPyBcIl8wLjV4XCIgOiBcIlwiKTtcblx0dmFyIGZpbGVzID1cblx0W1xuXHRcdC8vIENOIHByZWxvYWRlci5cblx0XHR7bmFtZTpcImNuX3ByZWxvYWRlclwiLCAgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJjbl9wcmVsb2FkZXIuanNvblwifSxcblx0XHR7bmFtZTpcImNuX3ByZWxvYWRlcl9iZ1wiLCAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcImNuX3ByZWxvYWRlcl9iZy5qcGdcIn0sXG5cdFxuXHRcdC8vIE9sZCBwcmVsb2FkZXIuXG5cdFx0e25hbWU6XCJwcmVsb2FkZXJfMFwiLCAgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJwcmVsb2FkZXJfMC5qc29uXCJ9LFxuXHRcdHtuYW1lOlwicHJlbG9hZGVyX2JnXCIsICAgICAgICB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwicHJlbG9hZGVyX2JnLmpwZ1wifSxcblx0XHRcblx0XHQvLyBQYXJ0aWNsZXNcblx0XHR7bmFtZTpcInByZWxvYWRlcl9yYWRpYWxfc3ByYXlcIiwgICAgICAgIHVybDpcInBhcnRpY2xlcy9wcmVsb2FkZXJfcmFkaWFsX3NwcmF5Lmpzb25cIn0sXHRcdFxuXHRdO1xuXHR2YXIgc291bmRzID0gW1xuXHRdO1xuXHRpZiAoZmlsZXMubGVuZ3RoKVxuXHR7XG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmFkZEZpbGVzKGZpbGVzLCB3aW5kb3cub2cuZ2FtZURpciArIFwiYXNzZXRzL1wiKTtcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuc2lnbmFsQ29tcGxldGVkLmFkZE9uY2UoZnVuY3Rpb24oKSB7IHRoaXMubG9hZEFzc2V0cygpOyB9LCB0aGlzKTtcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIubG9hZCgpO1xuXG5cdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLmFkZFNvdW5kcyhzb3VuZHMsIFtcIi5tcDNcIiwgXCIub2dnXCJdLCBcIlwiKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHR0aGlzLmxvYWRBc3NldHMoKTtcblx0fVxufTtcblxuXG4vKipcbiAqL1xuTWFpbi5wcm90b3R5cGUubG9hZEFzc2V0cyA9IGZ1bmN0aW9uKClcbntcblx0dmFyIHNjYWxlICA9IHRoaXMuX3NjYWxlO1xuXHR2YXIgcHJlZml4ID0gKHNjYWxlID09PSBcInNkL1wiID8gXCJfMC41eFwiIDogXCJcIik7XG5cdHZhciBmaWxlcyA9XG5cdFtcblx0XHR7bmFtZTpcImNvbmZpZ1wiLCB1cmw6XCJkYXRhL2NvbmZpZy5qc29uXCJ9LFxuXHRcdFxuXHRcdFxuXHRcdC8vIFBhcnRpY2xlcy5cblx0XHR7bmFtZTpcInBhcnRpY2xlX2NvaW5fY29sbGVjdF9idXJzdFwiLCAgIHVybDpcInBhcnRpY2xlcy9wYXJ0aWNsZV9jb2luX2NvbGxlY3RfYnVyc3QuanNvblwifSxcblx0XHR7bmFtZTpcInBhcnRpY2xlX2VtaXR0ZXJfYXR0YWNrXCIsICAgdXJsOlwicGFydGljbGVzL3BhcnRpY2xlX2VtaXR0ZXJfYXR0YWNrLmpzb25cIn0sXG5cdFx0e25hbWU6XCJwYXJ0aWNsZV9lbWl0dGVyX3dhbGxfZGVzdHJveVwiLCAgIHVybDpcInBhcnRpY2xlcy9wYXJ0aWNsZV9lbWl0dGVyX3dhbGxfZGVzdHJveS5qc29uXCJ9LFxuXHRcdHtuYW1lOlwicGFydGljbGVfd2F0ZXJmYWxsXCIsICAgdXJsOlwicGFydGljbGVzL3BhcnRpY2xlX3dhdGVyZmFsbC5qc29uXCJ9LFxuXHRcdHtuYW1lOlwicGFydGljbGVfZHJhd1wiLCAgIHVybDpcInBhcnRpY2xlcy9wYXJ0aWNsZV9kcmF3XzAwMi5qc29uXCJ9LFxuXHRcdFxuXHRcdFxuXHRcdC8vIFRpbGVzZXRzXG5cdFx0e25hbWU6XCJiYWNrZ3JvdW5kc1wiLCAgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJsZXZlbHMvYmFja2dyb3VuZHMucG5nXCJ9LFxuXHRcdHtuYW1lOlwiZGFuZ2Vyc1wiLCAgICAgICAgICAgICB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibGV2ZWxzL2RhbmdlcnMucG5nXCJ9LFxuXHRcdHtuYW1lOlwiaW5mb3JtYXRpb25cIiwgICAgICAgICB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibGV2ZWxzL2luZm9ybWF0aW9uLnBuZ1wifSxcblx0XHR7bmFtZTpcIm9iamVjdHNcIiwgICAgICAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcImxldmVscy9vYmplY3RzLnBuZ1wifSxcblx0XHR7bmFtZTpcInBsYXRmb3Jtc1wiLCAgICAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcImxldmVscy9wbGF0Zm9ybXMucG5nXCJ9LFxuXHRcdHtuYW1lOlwiQmFja2dyb3VuZF90aWxlc18wMlwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibGV2ZWxzL0JhY2tncm91bmRfdGlsZXNfMDIucG5nXCJ9LFxuXHRcdHtuYW1lOlwiQmFja2dyb3VuZF90aWxlc18wM1wiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibGV2ZWxzL0JhY2tncm91bmRfdGlsZXNfMDMucG5nXCJ9LFxuXHRcdHtuYW1lOlwiQmFja2dyb3VuZF90aWxlc18wMFwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibGV2ZWxzL0JhY2tncm91bmRfdGlsZXNfMDAucG5nXCJ9LFxuXHRcdHtuYW1lOlwiVGlsZXNoZWV0XzAwXCIsICAgICAgICB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibGV2ZWxzL1RpbGVzaGVldF8wMC5wbmdcIn0sXG5cdFx0e25hbWU6XCJUaWxlc2hlZXRfMDJcIiwgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJsZXZlbHMvVGlsZXNoZWV0XzAyLnBuZ1wifSxcblx0XHR7bmFtZTpcIlRpbGVzaGVldF8wM1wiLCAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcImxldmVscy9UaWxlc2hlZXRfMDMucG5nXCJ9LFxuXHRcdFxuXHRcdHtuYW1lOlwid2F0ZXJfdGlsZXMwXCIsICAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcIndhdGVyX3RpbGVzMC5qc29uXCJ9LFxuXHRcdFxuXHRcdFxuXHRcdC8vIExldmVsIEJhY2tncm91bmRzLlxuXHRcdHtuYW1lOlwiYmdfMF9uaWFnYXJhXCIsICAgICAgICBcdHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJsZXZlbHMvYmdfMF9uaWFnYXJhLmpwZ1wifSxcblx0XHR7bmFtZTpcImJnXzJfZmFybVwiLCAgICAgICAgXHRcdHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJsZXZlbHMvYmdfMl9mYXJtLmpwZ1wifSxcblx0XHR7bmFtZTpcImJnXzNfcG93ZXJfc3RhdGlvblwiLCAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcImxldmVscy9iZ18zX3Bvd2VyX3N0YXRpb24uanBnXCJ9LFx0XHRcdFxuXHRcdFx0XG5cdFx0e25hbWU6XCJiZ19zcGxhc2hcIiwgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJiZ19zcGxhc2guanBnXCJ9LFxuXHRcdHtuYW1lOlwiYmdfdWlcIiwgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJiZ191aS5qcGdcIn0sXG5cdFx0e25hbWU6XCJkb29yc1wiLCAgICAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcIkRvb3JzXCIgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxuXHRcdHtuYW1lOlwiZ2FtZV8wXCIsICAgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJnYW1lXzBcIiArIHByZWZpeCArIFwiLmpzb25cIn0sXG5cdFx0e25hbWU6XCJ1aV9idXR0b25zXCIsICAgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJ1aV9idXR0b25zXCIgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxuXHRcdHtuYW1lOlwidWlfMFwiLCAgICAgICAgICB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwidWlfMFwiICsgcHJlZml4ICsgXCIuanNvblwifSxcblx0XHR7bmFtZTpcInVpXzFcIiwgICAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcInVpXzFcIiArIHByZWZpeCArIFwiLmpzb25cIn0sXG5cdFx0e25hbWU6XCJ1aV8yXCIsICAgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJ1aV8yXCIgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxuXG5cdFx0e25hbWU6XCJsaW5lR3JlZW5fMDBcIiwgICAgICAgIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJsaW5lR3JlZW5fMDAucG5nXCJ9LFxuXHRcdHtuYW1lOlwibGluZUdyZWVuXzAxXCIsICAgICAgICB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibGluZUdyZWVuXzAxLnBuZ1wifSxcblx0XHRcblx0XHRcblx0XHQvLyBQYXVzZSBzY3JlZW4uXG5cdFx0e25hbWU6XCJwYXVzZWRfMl9iZ1wiLCAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcInBhdXNlZF8yX2JnLmpwZ1wifSxcblx0XHR7bmFtZTpcInBhdXNlZF9iZ1wiLCAgICAgICAgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcInBhdXNlZF9iZy5qcGdcIn0sXG5cdFx0XG5cdFx0XG5cdFx0Ly8gU3BsYXNoLlxuXHRcdHtuYW1lOiBcInNwbGFzaF90aXRsZVwiLCAgICAgdXJsOiBcImltYWdlcy9sb2NhbGlzYXRpb24vXCIgKyBcInRpdGxlX1wiICsgQ29tbW9uLkNPVU5UUllfQ09ERSArIFwiLnBuZ1wifSxcblx0XHRcblx0XHRcblx0XHQvLyBMZXZlbHMuXG5cdFx0e25hbWU6XCJsZXZlbF8xXzFcIiwgdXJsOlwiZGF0YS9sZXZlbF8xXzEuanNvblwifSxcblx0XHR7bmFtZTpcImxldmVsXzFfMlwiLCB1cmw6XCJkYXRhL2xldmVsXzFfMi5qc29uXCJ9LFxuXHRcdHtuYW1lOlwibGV2ZWxfMV8zXCIsIHVybDpcImRhdGEvbGV2ZWxfMV8zLmpzb25cIn0sXG5cdFx0e25hbWU6XCJsZXZlbF8xXzRcIiwgdXJsOlwiZGF0YS9sZXZlbF8xXzQuanNvblwifSxcblx0XHR7bmFtZTpcImxldmVsXzFfNVwiLCB1cmw6XCJkYXRhL2xldmVsXzFfNS5qc29uXCJ9LFxuXHRcdHtuYW1lOlwibGV2ZWxfMl8xXCIsIHVybDpcImRhdGEvbGV2ZWxfMl8xLmpzb25cIn0sXG5cdFx0e25hbWU6XCJsZXZlbF8yXzJcIiwgdXJsOlwiZGF0YS9sZXZlbF8yXzIuanNvblwifSxcblx0XHR7bmFtZTpcImxldmVsXzJfM1wiLCB1cmw6XCJkYXRhL2xldmVsXzJfMy5qc29uXCJ9LFxuXHRcdHtuYW1lOlwibGV2ZWxfMl80XCIsIHVybDpcImRhdGEvbGV2ZWxfMl80Lmpzb25cIn0sXG5cdFx0e25hbWU6XCJsZXZlbF8yXzVcIiwgdXJsOlwiZGF0YS9sZXZlbF8yXzUuanNvblwifSxcblx0XHR7bmFtZTpcImxldmVsXzNfMVwiLCB1cmw6XCJkYXRhL2xldmVsXzNfMS5qc29uXCJ9LFxuXHRcdHtuYW1lOlwibGV2ZWxfM18yXCIsIHVybDpcImRhdGEvbGV2ZWxfM18yLmpzb25cIn0sXG5cdFx0e25hbWU6XCJsZXZlbF8zXzNcIiwgdXJsOlwiZGF0YS9sZXZlbF8zXzMuanNvblwifSxcblx0XHR7bmFtZTpcImxldmVsXzNfNFwiLCB1cmw6XCJkYXRhL2xldmVsXzNfNC5qc29uXCJ9LFxuXHRcdHtuYW1lOlwibGV2ZWxfM181XCIsIHVybDpcImRhdGEvbGV2ZWxfM181Lmpzb25cIn0sXG5cdFx0XG5cdFx0XG5cdFx0Ly8gRm9udHMuXG5cdFx0e25hbWU6XCJhaGtpb183NV9wYXVzZWRcIiwgdXJsOlwiZm9udHMvYWhraW9fNzVfcGF1c2VkLnhtbFwifSxcblx0XHR7bmFtZTpcImFoa2lvXzYwX3doaXRlX2VuZGdhbWVcIiwgdXJsOlwiZm9udHMvYWhraW9fNjBfd2hpdGVfZW5kZ2FtZS54bWxcIn0sXG5cdFx0e25hbWU6XCJhaGtpb18xMDBfZ3JlZW5fZW5kZ2FtZVwiLCB1cmw6XCJmb250cy9haGtpb18xMDBfZ3JlZW5fZW5kZ2FtZS54bWxcIn0sXG5cdFx0e25hbWU6XCJhaGtpb185MF9vcmFuZ2VfZW5kZ2FtZVwiLCB1cmw6XCJmb250cy9haGtpb185MF9vcmFuZ2VfZW5kZ2FtZS54bWxcIn1cblx0XTtcblx0dmFyIHNvdW5kcyA9XG5cdFtcblx0XHQvLyBVSS5cblx0XHRcInNmeF9idG5fcHJlc3NfMDBcIixcblx0XHRcInNmeF9idG5fcm9sbG92ZXJfMDBcIixcblx0XHRcInNmeF9udW1iZXJfY291bnR1cF9sb29wXCIsXG5cdFx0XCJzZnhfYnRuX2JhY2tcIixcblx0XHRcInNmeF9idG5fbGV2ZWxcIixcblx0XHRcblx0XHQvLyBGb3VyYXJtcy5cblx0XHRcInNmeF80YXJtc19wdW5jaF8wMFwiLFxuXHRcdFwic2Z4XzRhcm1zX3B1bmNoXzAxXCIsXG5cdFx0XCJzZnhfNGFybXNfcHVuY2hfMDJcIixcblx0XHRcInNmeF80YXJtc19wdW5jaF8wM1wiLFxuXHRcdFwic2Z4XzRhcm1zX3B1bmNoXzA0XCIsXG5cdFx0XCJzZnhfNGFybXNfc3dvb3NoXzAwXCIsXG5cdFx0XCJzZnhfNGFybXNfc3dvb3NoXzAxXCIsXG5cdFx0XG5cdFx0Ly8gQ2Fubm9uYm9sdC5cblx0XHRcInNmeF9jYW5ub25ib2x0X3JvbGxfanVtcF8wMFwiLFxuXHRcdFxuXHRcdC8vIE92ZXJmbG93LlxuXHRcdFwic2Z4X292ZXJmbG93X3Nob290X3dhdGVyX3Nob3J0XzAwXCIsXG5cdFx0XCJzZnhfb3ZlcmZsb3dfc2hvb3Rfd2F0ZXJfc2hvcnRfMDFcIixcblx0XHRcInNmeF9vdmVyZmxvd19zcGxhc2hfMDBcIixcblx0XHRcblx0XHQvLyBCZW4uXG5cdFx0XCJ2b19iZW5fd2luX2hhYWFfMDBcIixcblx0XHRcInZvX2Jlbl93b29ob29fMDBcIixcblx0XHRcInZvX2Jlbl9jYXZlX2xhbmRfaGVhdnlfMDBcIixcblx0XHRcInZvX2Jlbl9sYW5kX2hlYXZ5XzAwXCIsXG5cdFx0XCJ2b19iZW5fanVtcF8wMFwiLFxuXHRcdFwidm9fYmVuX2NhdmVfZmFsbF8wMFwiLFxuXHRcdFwidm9fYmVuX2h1cnRfMDBcIixcblx0XHRcblx0XHQvLyBMYW5kLlxuXHRcdFwic2Z4X2xhbmRzb2Z0X2dyYXZlbF8wMVwiLFxuXHRcdFwic2Z4X2xhbmRzb2Z0X3dvb2RfMDFcIixcblx0XHRcInNmeF9sYW5kc29mdF9jb25jcmV0ZV8wMVwiLFxuXHRcdFwic2Z4X2Nhbm5vbmJvbHRfbGFuZF8wMFwiLFxuXHRcdFxuXHRcdC8vIFJ1bi5cblx0XHRcInNmeF9ydW5fZ3JhdmVsXCIsXG5cdFx0XCJzZnhfcnVuX3dvb2RcIixcblx0XHRcInNmeF9ydW5fY29uY3JldGVcIixcblx0XHRcblx0XHQvLyBEb29ycy5cblx0XHRcInNmeF9kb29yX29wZW5cIixcblx0XHRcInNmeF9kb29yX29wZW5sZXZlbGVuZFwiLFxuXHRcdFxuXHRcdC8vIFN0YXJzLlxuXHRcdFwic2Z4X3N0YXJfYXdhcmRfMDFcIixcblx0XHRcInNmeF9zdGFyX2F3YXJkXzAyXCIsXG5cdFx0XCJzZnhfc3Rhcl9hd2FyZF8wM1wiLFxuXHRcdFxuXHRcdC8vIFNwbGluZS5cblx0XHRcInNmeF9kcmF3X3N0YXJ0XCIsXG5cdFx0XCJzZnhfZHJhd19sb29wXCIsXG5cdFx0XCJzZnhfZHJhd19zdG9wXCIsXG5cdFx0XG5cdFx0Ly8gV2FsbHMuXG5cdFx0XCJzZnhfZmxvb3JfY3J1c2hcIixcblx0XHRcInNmeF93YWxsX2NydXNoXCIsXG5cdFx0XG5cdFx0Ly8gUGlja3Vwcy5cblx0XHRcInNmeF9waWNrdXBcIixcblx0XHRcInNmeF9vbW5pdHJpeF90cmFuc2Zvcm1fMDBcIixcblx0XHRcInNmeF9vbW5pdHJpeF90cmFuc2Zvcm1fYmFja18wMFwiLFxuXHRcdFxuXHRcdC8vIEVuZW15LlxuXHRcdFwic2Z4X3N0aW5rZmx5X2dhc2F0dGFja18wMVwiXG5cdF07XG5cdHZhciBtdXNpYyA9IFtcblx0XHQvLyBNdXNpYy5cblx0XHRcImNoYXB0ZXIxX2NvbXBsZXRlMDFfNDBwY192b2xcIixcblx0XHRcImNoYXB0ZXIxX2VkaXRfNDBwY192b2xcIixcblx0XHRcImNoYXB0ZXIyX2NvbXBsZXRlMDFfNDBwY192b2xcIixcblx0XHRcImNoYXB0ZXIyX2VkaXRfNDBwY192b2xcIixcblx0XHRcImNoYXB0ZXIzX2NvbXBsZXRlMDFfNDBwY192b2xcIixcblx0XHRcImNoYXB0ZXIzX2VkaXRfNDBwY192b2xcIixcblx0XHRcImdlbmVyaWNfZGVhdGhfc3RpbmdfMDFfNDBwY192b2xcIixcblx0XHRcIm1haW5fbWVudV9lZGl0NF80MHBjXCIgXTtcblx0aWYgKGZpbGVzLmxlbmd0aClcblx0e1xuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5hZGRGaWxlcyhmaWxlcywgd2luZG93Lm9nLmdhbWVEaXIgKyBcImFzc2V0cy9cIik7XG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLnNpZ25hbFByb2dyZXNzLmFkZCh0aGlzLm9uTG9hZGluZ1Byb2dyZXNzLCB0aGlzKTtcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuc2lnbmFsQ29tcGxldGVkLmFkZE9uY2UodGhpcy5vbkxvYWRpbmdDb21wbGV0ZWQsIHRoaXMpO1xuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5sb2FkKCk7XG5cblx0XHQvKnRoaXMuX3ByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKTtcblx0XHR0aGlzLl9zY3JlZW5NYW5hZ2VyLmFkZCh0aGlzLl9wcmVsb2FkZXIpOyovXG5cdFx0dGhpcy5fcHJlbG9hZGVyID0gbmV3IENOUHJlbG9hZGVyU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHRoaXMuX3ByZWxvYWRlcik7XG5cblx0XHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UuYWRkU291bmRzKHNvdW5kcywgW1wiLm1wM1wiLCBcIi5vZ2dcIl0sIHdpbmRvdy5vZy5nYW1lRGlyICsgXCJhc3NldHMvYXVkaW8vXCIpO1xuXHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5hZGRTb3VuZHMobXVzaWMsIFtcIi5tcDNcIiwgXCIub2dnXCJdLCB3aW5kb3cub2cuZ2FtZURpciArIFwiYXNzZXRzL211c2ljL1wiKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHR0aGlzLnN0YXJ0R2FtZSgpO1xuXHR9XG59O1xuXG4vKipcbiAqL1xuTWFpbi5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oKVxue1xuXHR2YXIgdGhhdCA9IHRoaXM7XG5cdHRoYXQuX2dhbWUgPSBuZXcgQXBwbGljYXRpb24oKTtcblx0dGhhdC5fZ2FtZS5pbml0KCk7XG59O1xuXG4vKipcbiAqL1xuTWFpbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9zY3JlZW5NYW5hZ2VyLnVwZGF0ZSgpO1xuXHRDb21tb24uYW5pbWF0b3IudXBkYXRlKCk7XG5cdENvbW1vbi5rZXlib2FyZC51cGRhdGUoKTtcblxuXHRpZiAoQ29tbW9uLkRFQlVHX1BBSU5UX01PREUgPiAwKVxuXHR7XG5cdFx0dGhpcy5wYWludEJhZEltYWdlKENvbW1vbi5zdGFnZSk7XG5cdH1cblxuXHR0aGlzLl9mcmFtZUNvdW50Kys7XG5cdENvbW1vbi5mcmFtZUNvdW50ID0gdGhpcy5fZnJhbWVDb3VudDtcbn07XG5cbi8qKlxuICovXG5NYWluLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpXG57XG5cdENvbW1vbi5yZW5kZXJlci5yZW5kZXIoQ29tbW9uLnN0YWdlKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshUElYSS5EaXNwbGF5T2JqZWN0fSBkaXNwbGF5XG4gKiBAcGFyYW0ge051bWJlcj19IGNvbG9yXG4gKi9cbk1haW4ucHJvdG90eXBlLnBhaW50QmFkSW1hZ2UgPSBmdW5jdGlvbihkaXNwbGF5LCBjb2xvcilcbntcblx0Y29sb3IgPSBjb2xvciB8fCAweEFBMDBGRjtcblxuXHR2YXIgY2hpbGQ7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7ICsrIGkpIHtcblx0XHRjaGlsZCA9IGRpc3BsYXkuY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkIGluc3RhbmNlb2YgUElYSS5TcHJpdGUpIHtcblx0XHRcdGlmIChDb21tb24uREVCVUdfUEFJTlRfTU9ERSA9PSAxKSB7XG5cdFx0XHRcdGlmIChjaGlsZC50ZXh0dXJlLndpZHRoICUgMiAhPSAwIHx8IGNoaWxkLnRleHR1cmUuaGVpZ2h0ICUgMiAhPSAwKSB7XG5cdFx0XHRcdFx0Y2hpbGQudGludCA9IGNvbG9yO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnRpbnQgPSAweEZGRkZGRjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKENvbW1vbi5ERUJVR19QQUlOVF9NT0RFID09IDIpIHtcblx0XHRcdFx0aWYgKGNoaWxkLnBvc2l0aW9uLnggIT09IHBhcnNlSW50KGNoaWxkLnBvc2l0aW9uLngpIHx8IGNoaWxkLnBvc2l0aW9uLnkgIT09IHBhcnNlSW50KGNoaWxkLnBvc2l0aW9uLnkpKSB7XG5cdFx0XHRcdFx0Y2hpbGQudGludCA9IGNvbG9yO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnRpbnQgPSAweEZGRkZGRjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnBhaW50QmFkSW1hZ2UoY2hpbGQsIGNvbG9yKTtcblx0fVxufTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuTWFpbi5wcm90b3R5cGUub25Mb2FkaW5nUHJvZ3Jlc3MgPSBmdW5jdGlvbihldmVudClcbntcblx0Ly90aGlzLl9wcmVsb2FkZXIubG9hZGVkUGVyY2VudGFnZSA9IGV2ZW50LnByb2dyZXNzO1xuXHR0aGlzLl9wcmVsb2FkZXIubG9hZGVkID0gZXZlbnQucHJvZ3Jlc3MgLyAxMDAuMDtcbn07XG5cbi8qKlxuICovXG5NYWluLnByb3RvdHlwZS5vbkxvYWRpbmdDb21wbGV0ZWQgPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXHRcblx0UElYSS5sb2FkZXIuYWRkKCAnY2hhcl9vdmVyZmxvdycsIFwiYXNzZXRzL3NwaW5lL1wiICsgdGhhdC5fc2NhbGUgKyBcImNoYXJfb3ZlcmZsb3cuanNvblwiICk7XG5cdFBJWEkubG9hZGVyLmFkZCggJ2NoYXJfZm91cmFybXMnLCBcImFzc2V0cy9zcGluZS9cIiArIHRoYXQuX3NjYWxlICsgXCJjaGFyX2ZvdXJhcm1zLmpzb25cIiApO1xuXHRQSVhJLmxvYWRlci5hZGQoICdjaGFyX3VwZ3JhZGUnLCBcImFzc2V0cy9zcGluZS9cIiArIHRoYXQuX3NjYWxlICsgXCJjaGFyX3VwZ3JhZGUuanNvblwiICk7XG5cdFBJWEkubG9hZGVyLmFkZCggJ2NoYXJfY2Fubm9uYm9sdCcsIFwiYXNzZXRzL3NwaW5lL1wiICsgdGhhdC5fc2NhbGUgKyBcImNoYXJfY2Fubm9uYm9sdC5qc29uXCIgKTtcdFxuXHRQSVhJLmxvYWRlci5hZGQoICdjaGFyX2JlbicsIFwiYXNzZXRzL3NwaW5lL1wiICsgdGhhdC5fc2NhbGUgKyBcImNoYXJfYmVuLmpzb25cIiApO1xuXHRQSVhJLmxvYWRlci5hZGQoICdjaGFyX2VuZW15JywgXCJhc3NldHMvc3BpbmUvXCIgKyB0aGF0Ll9zY2FsZSArIFwiY2hhcl9lbmVteS5qc29uXCIgKTtcblx0UElYSS5sb2FkZXIuYWRkKCAnY2hhcl9ib3NzJywgXCJhc3NldHMvc3BpbmUvXCIgKyB0aGF0Ll9zY2FsZSArIFwiY2hhcl9ib3NzLmpzb25cIiApO1xuXHRQSVhJLmxvYWRlci5sb2FkKCBcblx0XHRmdW5jdGlvbiggbG9hZGVyLCByZXNvdXJjZXMgKVxuXHRcdHtcblx0XHRcdENvbW1vbi5jaGFyYWN0ZXJBbmltYXRpb25EYXRhLmNoYXJfb3ZlcmZsb3cgPSByZXNvdXJjZXMuY2hhcl9vdmVyZmxvdy5zcGluZURhdGE7XG5cdFx0XHRDb21tb24uY2hhcmFjdGVyQW5pbWF0aW9uRGF0YS5jaGFyX2ZvdXJhcm1zID0gcmVzb3VyY2VzLmNoYXJfZm91cmFybXMuc3BpbmVEYXRhO1xuXHRcdFx0Q29tbW9uLmNoYXJhY3RlckFuaW1hdGlvbkRhdGEuY2hhcl91cGdyYWRlID0gcmVzb3VyY2VzLmNoYXJfdXBncmFkZS5zcGluZURhdGE7XG5cdFx0XHRDb21tb24uY2hhcmFjdGVyQW5pbWF0aW9uRGF0YS5jaGFyX2Nhbm5vbmJvbHQgPSByZXNvdXJjZXMuY2hhcl9jYW5ub25ib2x0LnNwaW5lRGF0YTtcdFx0XHRcblx0XHRcdENvbW1vbi5jaGFyYWN0ZXJBbmltYXRpb25EYXRhLmNoYXJfYmVuID0gcmVzb3VyY2VzLmNoYXJfYmVuLnNwaW5lRGF0YTtcblx0XHRcdENvbW1vbi5jaGFyYWN0ZXJBbmltYXRpb25EYXRhLmNoYXJfZW5lbXkgPSByZXNvdXJjZXMuY2hhcl9lbmVteS5zcGluZURhdGE7XG5cdFx0XHRDb21tb24uY2hhcmFjdGVyQW5pbWF0aW9uRGF0YS5jaGFyX2Jvc3MgPSByZXNvdXJjZXMuY2hhcl9ib3NzLnNwaW5lRGF0YTtcblxuXHRcdFx0Ly90aGF0Ll9wcmVsb2FkZXIubG9hZGVkUGVyY2VudGFnZSA9IDEwMC4wO1xuXHRcdFx0dGhhdC5fcHJlbG9hZGVyLmxvYWRlZCA9IDEuMDtcblx0XHRcdC8vdGhhdC5fcHJlbG9hZGVyLmFuaW1hdGVPdXQoIGZ1bmN0aW9uKCkgeyB0aGlzLnN0YXJ0R2FtZSgpOyB9LCB0aGF0ICk7XG5cdFx0XHR0aGF0Ll9wcmVsb2FkZXIuYW5pbWF0ZU91dCggXG5cdFx0XHRcdGZ1bmN0aW9uKCkgXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGhpcy5fY29vbFdhaXRTY3JlZW4gPSBuZXcgQ29vbFdhaXRTY3JlZW4oIDIuMCApO1xuXHRcdFx0XHRcdHRoaXMuX2Nvb2xXYWl0U2NyZWVuLnNpZ25hbHMub25XYWl0VGltZUNvbXBsZXRlZC5hZGQoIHRoaXMub25XYWl0VGltZUNvbXBsZXRlZCwgdGhhdCApO1xuXHRcdFx0XHRcdHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKCB0aGlzLl9jb29sV2FpdFNjcmVlbiApO1xuXHRcdFx0XHR9LCBcblx0XHRcdFx0dGhhdCApO1xuXG5cdFx0XHR0aGF0Ll9wcmVsb2FkZXIgPSBudWxsO1xuXG5cdFx0XHR0aGF0Ll9hc3NldE1hbmFnZXIuc2lnbmFsUHJvZ3Jlc3MucmVtb3ZlQWxsKCk7XG5cdFx0XHR0aGF0Ll9hc3NldE1hbmFnZXIuc2lnbmFsQ29tcGxldGVkLnJlbW92ZUFsbCgpO1xuXHRcdH0gKTtcbn07XG5cbk1haW4ucHJvdG90eXBlLm9uV2FpdFRpbWVDb21wbGV0ZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuX2Nvb2xXYWl0U2NyZWVuLmFuaW1hdGVPdXQoIGZ1bmN0aW9uKCkgeyB0aGlzLnN0YXJ0R2FtZSgpOyB9LCB0aGlzICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUJvb2xlYW59IGNvcnJlY3RcbiAqL1xuTWFpbi5wcm90b3R5cGUub25DYW52YXNSZXNpemUgPSBmdW5jdGlvbihjb3JyZWN0KVxue1xuXHRpZiAoY29ycmVjdClcblx0e1xuXHRcdENvbW1vbi5yZW5kZXJlci5yZXNpemUocDMuVmlldy53aWR0aCwgcDMuVmlldy5oZWlnaHQpO1xuXG5cdFx0aWYgKHRoaXMuX3NjcmVlbk1hbmFnZXIpXG5cdFx0e1xuXHRcdFx0dGhpcy5fc2NyZWVuTWFuYWdlci5yZXNpemUoKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsInZhciBDb21tb24gPSByZXF1aXJlKFwiLi9Db21tb25cIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gU2F2ZWREYXRhKClcbntcblx0dmFyIGFzc2V0TWFuYWdlciAgICAgICAgICAgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBjb25zdFxuXHQgKi9cblx0dGhpcy5TQVZFX05BTUUgPSBcImN1c3RvbWVyX2ZvY3VzXCI7XG5cdHRoaXMuU0FWRV9WRVJTSU9OID0gXCIwLjAuMFwiO1xuXHR0aGlzLlNBVkVfU0VFRCA9IFwieTVrMEVvNlIxNzdtVWtiXCI7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0dGhpcy5oYXNWaWV3ZWRJbnN0cnVjdGlvbnMgPSBmYWxzZTtcblx0dGhpcy5oYXNTZWVuSW50cm8gICAgICAgICAgPSBmYWxzZTtcblx0dGhpcy5lbWFpbCAgICAgICAgICAgICAgICAgPSBcIlwiO1x0XG5cdHRoaXMuYXJyTGV2ZWxSZXN1bHQgPSBbIFxuXHRcdFx0WyB7c2NvcmU6MCwgc3RhcnM6MH0sIHtzY29yZTowLCBzdGFyczowfSwge3Njb3JlOjAsIHN0YXJzOjB9LCB7c2NvcmU6MCwgc3RhcnM6MH0sIHtzY29yZTowLCBzdGFyczowfSBdLCBcblx0XHRcdFsge3Njb3JlOjAsIHN0YXJzOjB9LCB7c2NvcmU6MCwgc3RhcnM6MH0sIHtzY29yZTowLCBzdGFyczowfSwge3Njb3JlOjAsIHN0YXJzOjB9LCB7c2NvcmU6MCwgc3RhcnM6MH0gXSwgIFxuXHRcdFx0WyB7c2NvcmU6MCwgc3RhcnM6MH0sIHtzY29yZTowLCBzdGFyczowfSwge3Njb3JlOjAsIHN0YXJzOjB9LCB7c2NvcmU6MCwgc3RhcnM6MH0sIHtzY29yZTowLCBzdGFyczowfSBdXG5cdFx0XTtcblxuXHQvKipcblx0ICogQHR5cGUge051bWJlcn1cblx0ICovXG5cdHRoaXMuaGlnaHNjb3JlID0gMDtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2F2ZWREYXRhO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblNhdmVkRGF0YS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcblx0aWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlW3RoaXMuU0FWRV9OQU1FICsgXCJfXCIgKyB0aGlzLlNBVkVfVkVSU0lPTl0pXG5cdHtcblx0XHRjb25zb2xlLmxvZygncmVzZXQnKTtcblx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0dGhpcy5zYXZlKCk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0Y29uc29sZS5sb2coJ2xvYWQnKTtcblx0XHR0aGlzLmxvYWQoKTtcblx0fVxufTtcblxuU2F2ZWREYXRhLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcbntcblxufTtcblxuXG5TYXZlZERhdGEucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpXG57XG5cdHZhciBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZVt0aGlzLlNBVkVfTkFNRSArIFwiX1wiICsgdGhpcy5TQVZFX1ZFUlNJT05dO1xuXHRkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblxuXHR0aGlzLmhhc1NlZW5JbnRybyAgICAgICAgICA9IGRhdGEuaGFzU2VlbkludHJvO1xuXHR0aGlzLmhhc1ZpZXdlZEluc3RydWN0aW9ucyA9IGRhdGEuaGFzVmlld2VkSW5zdHJ1Y3Rpb25zO1xuXHR0aGlzLmVtYWlsICAgICAgICAgICAgICAgICA9IGRhdGEuZW1haWw7XG5cdHRoaXMuaGlnaHNjb3JlICAgICAgICAgICAgID0gcGFyc2VJbnQoZGF0YS5oaWdoc2NvcmUpO1xuXHQvL3RoaXMuc3RhcnNcdFx0XHRcdCAgID0gZGF0YS5zdGFycztcblx0aWYgKCBkYXRhLmFyckxldmVsUmVzdWx0ICE9IG51bGwgKVxuXHRcdHRoaXMuYXJyTGV2ZWxSZXN1bHQgID0gZGF0YS5hcnJMZXZlbFJlc3VsdDtcblxuXHQvKlxuXHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KFxuXHR7XG5cdFx0aGFzVmlld2VkSW5zdHJ1Y3Rpb25zOiBkYXRhLmhhc1ZpZXdlZEluc3RydWN0aW9ucyxcblx0XHRoYXNTZWVuSW50cm86IGRhdGEuaGFzU2VlbkludHJvXG5cdH0pO1xuXG5cdHZhciBoYXNoID0gbWQ1KGpzb24gKyB0aGlzLlNBVkVfU0VFRCk7XG5cdGlmIChoYXNoICE9IGRhdGEuaGFzaClcblx0e1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLlNBVkVfTkFNRSArIFwiX1wiICsgdGhpcy5TQVZFX1ZFUlNJT04pO1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHRoaXMuaGFzU2VlbkludHJvID0gZGF0YS5oYXNTZWVuSW50cm87XG5cdFx0dGhpcy5oYXNWaWV3ZWRJbnN0cnVjdGlvbnMgPSBkYXRhLmhhc1ZpZXdlZEluc3RydWN0aW9ucztcblx0fSovXG59O1xuXG5TYXZlZERhdGEucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKCdzYXZlJyk7XG5cdHZhciBkYXRhID0ge307XG5cdGRhdGEuaGFzU2VlbkludHJvID0gdGhpcy5oYXNTZWVuSW50cm87XG5cdGRhdGEuaGFzVmlld2VkSW5zdHJ1Y3Rpb25zID0gdGhpcy5oYXNWaWV3ZWRJbnN0cnVjdGlvbnM7XG5cdGRhdGEuZW1haWwgPSB0aGlzLmVtYWlsO1xuXHRkYXRhLmhpZ2hzY29yZSA9IHRoaXMuaGlnaHNjb3JlO1xuXHQvL2RhdGEuc3RhcnMgPSB0aGlzLnN0YXJzO1xuXHRkYXRhLmFyckxldmVsUmVzdWx0ID0gdGhpcy5hcnJMZXZlbFJlc3VsdDtcblxuXHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRkYXRhLmhhc2ggPSBtZDUoanNvbiArIHRoaXMuU0FWRV9TRUVEKTtcblxuXHR3aW5kb3cubG9jYWxTdG9yYWdlW3RoaXMuU0FWRV9OQU1FICsgXCJfXCIgKyB0aGlzLlNBVkVfVkVSU0lPTl0gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn07XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iLCJ2YXIgQ29tbW9uID0gcmVxdWlyZSggXCIuLi9Db21tb25cIiApO1xyXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoIFwiLi9HYW1lT2JqZWN0XCIgKTtcclxudmFyIEdsb2JhbCA9IHJlcXVpcmUoIFwiLi4vZ2VuZXJhbC9HbG9iYWxcIiApO1xyXG52YXIgVHJhbnNmb3JtYXRpb24gPSByZXF1aXJlKCBcIi4vVHJhbnNmb3JtYXRpb25cIiApO1xyXG52YXIgT3ZlcmZsb3dUcmFuc2Zvcm1hdGlvbiA9IHJlcXVpcmUoIFwiLi9PdmVyZmxvd1RyYW5zZm9ybWF0aW9uXCIgKTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEF2YXRhciggcm9vbSApXHJcbntcclxuXHQvLyBQYXJlbnQgaW5pdGlhbGl6YXRpb24uXHJcblx0R2FtZU9iamVjdC5jYWxsKCB0aGlzLCBcImF2YXRhclwiICk7XHJcblx0XHJcblx0XHJcblx0Ly8gQ29uc3RhbnRzLlxyXG5cdHRoaXMuU0hBUkVEX0FOSU1BVElPTl9JRFMgPVxyXG5cdFtcclxuXHRcdCdydW5fbGV2ZWwnLFxyXG5cdFx0J2p1bXAnLFxyXG5cdFx0J2lkbGUnLFxyXG5cdFx0J2ZhbGwnLFxyXG5cdFx0J2ZhbGxfdG9fbGFuZCcsXHJcblx0XHQnbGFuZF90b19ydW4nLFxyXG5cdFx0J2RpZSdcclxuXHRdO1xyXG5cdHRoaXMuUlVOX1NQRUVEID0gMTA1O1xyXG5cdFxyXG5cdFxyXG5cdC8vIEF0dHJpYnV0ZXMuXHJcblx0dGhpcy5yb29tID0gcm9vbTtcclxuXHRcclxuXHR0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XHJcblx0XHJcblx0dGhpcy5zdGVwQ291bnQgPSAwO1xyXG5cdHRoaXMucnVuU3BlZWQgICAgICAgICAgPSB0aGlzLlJVTl9TUEVFRDsgIC8vIHB4L3NcclxuXHR0aGlzLmp1bXBUaW1lICAgICAgICAgID0gMC4zOyAvLyBzXHJcblx0dGhpcy5qdW1wSGVpZ2h0ICAgICAgICA9IDQwOyAgIC8vIHB4XHJcblx0dGhpcy5qdW1wU3BlZWQgICAgICAgICA9ICgyICogdGhpcy5qdW1wSGVpZ2h0KSAvIHRoaXMuanVtcFRpbWU7IC8vIHB4L3NcclxuXHR0aGlzLmdyYXZpdHkgICAgICAgICAgID0gdGhpcy5qdW1wU3BlZWQvdGhpcy5qdW1wVGltZTsgICAgICAgICAgLy8gcHgvc14yXHJcblx0dGhpcy5tYXhWZXJ0aWNhbFNwZWVkICA9IHRoaXMuZ3Jhdml0eTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBweC9zXHJcblx0dGhpcy52ZWxvY2l0eSAgICAgICAgICA9IG5ldyBQSVhJLlBvaW50KDAsMCk7XHJcblx0dGhpcy50cmFuc2Zvcm1hdGlvbiAgICA9IG51bGw7XHJcblxyXG5cdHRoaXMuZGlyZWN0aW9uICAgICAgICAgPSAxO1xyXG5cdHRoaXMubWF4Q2xpbWJhYmxlQW5nbGUgPSA2NTtcclxuXHJcblx0dGhpcy5pc0xhbmRpbmcgICA9IGZhbHNlO1xyXG5cdHRoaXMubGFuZFRpbWUgICAgPSAwO1xyXG5cdHRoaXMubGFuZFRpbWVNYXggPSAwLjg7XHJcblx0dGhpcy5sYW5kU3BlZWQgICA9IHRoaXMubWF4VmVydGljYWxTcGVlZCAqIDAuNjU7XHJcblxyXG5cdHRoaXMuc3BpbmVEYXRhID0gQ29tbW9uLmNoYXJhY3RlckFuaW1hdGlvbkRhdGEuY2hhcl9iZW47XHJcblx0dGhpcy5jdXJyZW50QW5pbWF0aW9uID0gXCJcIjtcclxuXHR0aGlzLnNwaW5lU3BlZWQgPSAxO1xyXG5cdFxyXG5cdHRoaXMuX2lzUGxheWluZ1N0ZXBzU2Z4ID0gZmFsc2U7XHJcblx0dGhpcy5faXNGYWxsU2Z4ID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuc3BsaW5lICAgICA9IG51bGw7IC8vIFRoZSBzcGxpbmUgdGhlIGNoYXJhY3RlciBpcyBjdXJyZW50bHkgc3RhbmRpbmcgb25cclxuXHR0aGlzLmNvbGxpc2lvbnMgPVxyXG5cdHtcclxuXHRcdHRvcCAgICAgICAgICA6IGZhbHNlLFxyXG5cdFx0Ym90dG9tICAgICAgIDogdHJ1ZSxcclxuXHRcdGxlZnQgICAgICAgICA6IGZhbHNlLFxyXG5cdFx0cmlnaHQgICAgICAgIDogZmFsc2UsXHJcblx0XHRib3R0b21CZWZvcmUgOiBmYWxzZVxyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvLyBTaWduYWxzLlxyXG5cdHRoaXMuc2lnbmFscy5vbkdhbWVPdmVyID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBBdmF0YXI7XHJcbkF2YXRhci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdhbWVPYmplY3QucHJvdG90eXBlKTtcclxuQXZhdGFyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEF2YXRhcjtcclxuXHJcbkF2YXRhci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdC8vIFNwYXduIHBvc2l0aW9uXHJcblx0dmFyIHN0YXJ0RG9vcklkID0gMiAqIHRoaXMucm9vbS5sZXZlbC5jdXJyZW50Um9vbUluZGV4ICsgMTtcclxuXHR0aGlzLnggPSAodGhpcy5yb29tLnRpbGVzLmluZm9ybWF0aW9uc1sgc3RhcnREb29ySWQgXVswXS54ICsgMC41KSAqIHRoaXMucm9vbS50aWxlU2l6ZTtcclxuXHR0aGlzLnkgPSAodGhpcy5yb29tLnRpbGVzLmluZm9ybWF0aW9uc1sgc3RhcnREb29ySWQgXVswXS55ICsgMSkgKiB0aGlzLnJvb20udGlsZVNpemU7XHJcblx0aWYodGhpcy54ID4gdGhpcy5yb29tLnJvb21XaWR0aC8yKSB0aGlzLmRpcmVjdGlvbiA9IC0xO1xyXG5cclxuXHQvLyBTcGluZVxyXG5cdHRoaXMuc3BpbmUgPSBuZXcgUElYSS5zcGluZS5TcGluZSggdGhpcy5zcGluZURhdGEgKTtcclxuXHR0aGlzLnNwaW5lLnNrZWxldG9uLnNldFRvU2V0dXBQb3NlKCk7XHJcblx0dGhpcy5zcGluZS5za2VsZXRvbi5zZXRTa2luKCBudWxsICk7XHJcblx0dGhpcy5zcGluZS5za2VsZXRvbi5zZXRTa2luQnlOYW1lKCBcImRlZmF1bHRcIiApO1xyXG5cdHRoaXMuc3BpbmUuYXV0b1VwZGF0ZSA9IGZhbHNlO1xyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblx0dGhpcy5fc3BpbmVDb250YWluZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMC4zNSwgMC4zNSApO1xyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyLnggPSAwO1xyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyLnkgPSAzO1xyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyLmFkZENoaWxkKCB0aGlzLnNwaW5lICk7XHJcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fc3BpbmVDb250YWluZXIgKTtcclxuXHR0aGlzLnNldEFuaW1hdGlvbiggJ2lkbGUnLCB0cnVlICk7XHJcblx0dGhpcy5zcGluZS51cGRhdGUocDMuVGltZXN0ZXAuZGVsdGFUaW1lICogdGhpcy5zcGluZVNwZWVkKTtcclxuXHJcblx0dGhpcy5zZXRTcGluZURhdGFNaXgoIHRoaXMuU0hBUkVEX0FOSU1BVElPTl9JRFMgKTtcclxuXHJcblx0Ly8gQ29sbGlkZXJcclxuXHR0aGlzLmNvbGxpc2lvblJlY3QgPSBuZXcgUElYSS5SZWN0YW5nbGUoIC0xMCwgLTQwLCAyMCwgNDAgKTtcclxufVxyXG5cclxuQXZhdGFyLnByb3RvdHlwZS5zZXRTcGluZURhdGFNaXggPSBmdW5jdGlvbiggYXJyQW5pbWF0aW9uSWQgKVxyXG57XHJcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgYXJyQW5pbWF0aW9uSWQubGVuZ3RoOyBpKysgKVxyXG5cdHtcclxuXHRcdGZvciAoIHZhciBqID0gMDsgaiA8IGFyckFuaW1hdGlvbklkLmxlbmd0aDsgaisrIClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCBpID09IGogKSBjb250aW51ZTtcclxuXHJcblx0XHRcdHZhciB0aW1lID0gMC4xO1xyXG5cclxuXHRcdFx0aWYgKCBhcnJBbmltYXRpb25JZFsgaSBdID09ICdmYWxsX3RvX2xhbmQnIHx8IGFyckFuaW1hdGlvbklkWyBpIF0gPT0gJ2xhbmRfdG9fcnVuJyApXHJcblx0XHRcdFx0dGltZSA9IDA7XHJcblxyXG5cdFx0XHR0aGlzLnNwaW5lLnN0YXRlRGF0YS5zZXRNaXhCeU5hbWUoIGFyckFuaW1hdGlvbklkWyBpIF0sIGFyckFuaW1hdGlvbklkWyBqIF0sIHRpbWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkF2YXRhci5wcm90b3R5cGUudXBkYXRlTW92ZW1lbnQgPSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyBTcGluZSB1cGRhdGVcclxuXHR0aGlzLnNwaW5lLnVwZGF0ZSggcDMuVGltZXN0ZXAuZGVsdGFUaW1lICogdGhpcy5zcGluZVNwZWVkICk7XHJcblxyXG5cdGlmICggTWF0aC5zaWduKCB0aGlzLnZlbG9jaXR5LnggKSAhPSAwIClcclxuXHR7XHJcblx0XHR0aGlzLl9zcGluZUNvbnRhaW5lci54ID0gTWF0aC5hYnMoIHRoaXMuX3NwaW5lQ29udGFpbmVyLnggKSAqIE1hdGguc2lnbiggdGhpcy52ZWxvY2l0eS54ICkgKiAtMTtcclxuXHRcdHRoaXMuX3NwaW5lQ29udGFpbmVyLnNjYWxlLnggPSBNYXRoLmFicyggdGhpcy5fc3BpbmVDb250YWluZXIuc2NhbGUueCApICogTWF0aC5zaWduKCB0aGlzLnZlbG9jaXR5LnggKTtcclxuXHR9XHJcblxyXG5cdC8vIFVwZGF0ZSB2ZWxvY2l0eVxyXG5cdHRoaXMudmVsb2NpdHkueCA9IHRoaXMuZGlyZWN0aW9uICogdGhpcy5ydW5TcGVlZDtcclxuXHR0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogcDMuVGltZXN0ZXAuZGVsdGFUaW1lO1xyXG5cdHRoaXMudmVsb2NpdHkueSA9IE1hdGgubWluKHRoaXMudmVsb2NpdHkueSwgdGhpcy5tYXhWZXJ0aWNhbFNwZWVkKTtcclxuXHJcblx0Ly8gRGVidWcgaW5wdXRcclxuXHQvLyBpZihDb21tb24ua2V5Ym9hcmQuZ2V0S2V5UHJlc3NlZChDb21tb24ua2V5Ym9hcmQuS0VZX0EpKVxyXG5cdFx0Ly8gdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMucnVuU3BlZWQ7XHJcblx0Ly8gZWxzZSBpZihDb21tb24ua2V5Ym9hcmQuZ2V0S2V5UHJlc3NlZChDb21tb24ua2V5Ym9hcmQuS0VZX0QpKVxyXG5cdFx0Ly8gdGhpcy52ZWxvY2l0eS54ID0gK3RoaXMucnVuU3BlZWQ7XHJcblx0Ly8gZWxzZVxyXG5cdFx0Ly8gdGhpcy52ZWxvY2l0eS54ID0gMDtcclxuXHJcblx0Ly8gaWYoQ29tbW9uLmtleWJvYXJkLmdldEtleVByZXNzZWQoQ29tbW9uLmtleWJvYXJkLktFWV9XKSAmJiB0aGlzLmNvbGxpc2lvbnMuYm90dG9tICYmICF0aGlzLmlzTGFuZGluZylcclxuXHRcdC8vIHRoaXMuanVtcCgpO1xyXG5cclxuXHQvLyBMYW5kaW5nLCBpZ25vcmUgbW92ZW1lbnQgZHVyaW5nIHRoZSBhbmltYXRpb25cclxuXHRpZiAoIHRoaXMuaXNMYW5kaW5nIClcclxuXHR7XHJcblx0XHR0aGlzLmxhbmRUaW1lICs9IHAzLlRpbWVzdGVwLmRlbHRhVGltZTtcclxuXHJcblx0XHRpZiAoIHRoaXMubGFuZFRpbWUgPj0gdGhpcy5sYW5kVGltZU1heCApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaXNMYW5kaW5nID0gZmFsc2U7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnNldEFuaW1hdGlvbihbXCJsYW5kX3RvX3J1blwiLCBcInJ1bl9sZXZlbFwiXSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudmVsb2NpdHkueCA9IDA7XHJcblx0fVxyXG5cclxuXHQvLyBDYWxjdWxhdGUgZnJhbWUgbW92ZW1lbnRcclxuXHR2YXIgbW92ZW1lbnQgPSBuZXcgUElYSS5Qb2ludFxyXG5cdChcclxuXHRcdHRoaXMudmVsb2NpdHkueCAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZSxcclxuXHRcdHRoaXMudmVsb2NpdHkueSAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZVxyXG5cdCk7XHJcblxyXG5cdC8vIFJlc2V0IGNvbGxpc2lvbnNcclxuXHR0aGlzLmNvbGxpc2lvbnMuYm90dG9tQmVmb3JlID0gdGhpcy5jb2xsaXNpb25zLmJvdHRvbTtcclxuXHR0aGlzLmNvbGxpc2lvbnMudG9wICAgICAgICAgID0gZmFsc2U7XHJcblx0dGhpcy5jb2xsaXNpb25zLmJvdHRvbSAgICAgICA9IGZhbHNlO1xyXG5cdHRoaXMuY29sbGlzaW9ucy5sZWZ0ICAgICAgICAgPSBmYWxzZTtcclxuXHR0aGlzLmNvbGxpc2lvbnMucmlnaHQgICAgICAgID0gZmFsc2U7XHJcblxyXG5cdHZhciBzcGxpbmUgPSBudWxsO1xyXG5cclxuXHQvLyBIb3Jpem9udGFsIGNvbGxzaW9uOiBzcGxpbmVzXHJcblx0aWYgKCBtb3ZlbWVudC54ICE9IDAgKSBcclxuXHR7XHJcblx0XHQvLyBQbGF5ZXIgaG9yaXpvbnRhbCBtb3ZlbWVudCByYXlzXHJcblx0XHRpZiAoIG1vdmVtZW50LnggPiAwIClcclxuXHRcdFx0dmFyIHJheU9yaWdpbnMgPSB0aGlzLmdldFJpZ2h0UmF5T3JpZ2lucygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR2YXIgcmF5T3JpZ2lucyA9IHRoaXMuZ2V0TGVmdFJheU9yaWdpbnMoKTtcclxuXHJcblx0XHR2YXIgcmF5ID0gbmV3IFBJWEkuUG9pbnQobW92ZW1lbnQueCArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueCksIDApO1xyXG5cclxuXHRcdGZvcih2YXIgciA9IDA7IHIgPCByYXlPcmlnaW5zLmxlbmd0aDsgcisrKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNb3ZlbWVudCByYXkgdmVydGljZXNcclxuXHRcdFx0dmFyIGF2YXRhclAxID0gcmF5T3JpZ2luc1tyXTtcclxuXHRcdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm9vbS5zcGxpbmVMYXllci5zcGxpbmVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKHZhciBwID0gMDsgcCA8IHRoaXMucm9vbS5zcGxpbmVMYXllci5zcGxpbmVzW2ldLnBvaW50cy5sZW5ndGgtMTsgcCsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFNlZ21lbnQgdmVydGljZXNcclxuXHRcdFx0XHRcdHZhciBzZWdtZW50UDEgPSB0aGlzLnJvb20uc3BsaW5lTGF5ZXIuc3BsaW5lc1tpXS5wb2ludHNbcF07XHJcblx0XHRcdFx0XHR2YXIgc2VnbWVudFAyID0gdGhpcy5yb29tLnNwbGluZUxheWVyLnNwbGluZXNbaV0ucG9pbnRzW3ArMV07XHJcblxyXG5cdFx0XHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0XHRcdHZhciBpbnRlcnNlY3Rpb24gPSB0aGlzLmxpbmVMaW5lQ29sbGlzaW9uKGF2YXRhclAxLCBhdmF0YXJQMiwgc2VnbWVudFAxLCBzZWdtZW50UDIpO1xyXG5cclxuXHRcdFx0XHRcdGlmKGludGVyc2VjdGlvbiApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgYW5nbGUgb2YgdGhlIHNlZ21lbnQuIFRoZSB2ZWN0b3IgcG9pbnRzIHJpZ2h0XHJcblx0XHRcdFx0XHRcdC8vICAgICAtOTBcclxuXHRcdFx0XHRcdFx0Ly8gIDQ1ICAgIC00NVxyXG5cdFx0XHRcdFx0XHQvLyAwICAgIHggICAgMFxyXG5cdFx0XHRcdFx0XHQvLyAtNDUgICAgIDQ1XHJcblx0XHRcdFx0XHRcdC8vICAgICAtOTBcclxuXHRcdFx0XHRcdFx0aWYoc2VnbWVudFAyLnggPiBzZWdtZW50UDEueClcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VnbWVudEFuZ2xlID0gTWF0aC5hdGFuMihzZWdtZW50UDIueSAtIHNlZ21lbnRQMS55LCBzZWdtZW50UDIueCAtIHNlZ21lbnRQMS54KSAqIFBJWEkuUkFEX1RPX0RFRztcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWdtZW50QW5nbGUgPSBNYXRoLmF0YW4yKHNlZ21lbnRQMS55IC0gc2VnbWVudFAyLnksIHNlZ21lbnRQMS54IC0gc2VnbWVudFAyLngpICogUElYSS5SQURfVE9fREVHO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRmluZCB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgY29sbGlkZXIgYW5kIHRoZSBjb2xsaXNpb24gcG9pbnRcclxuXHRcdFx0XHRcdFx0dmFyIGRpc3RhbmNlID0gIGludGVyc2VjdGlvbi54IC0gYXZhdGFyUDEueCAtIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTZWdtZW50IHRvbyBpbmNsaW5lZCwgY2Fubm90IGNsaW1iXHJcblx0XHRcdFx0XHRcdGlmKE1hdGguYWJzKHNlZ21lbnRBbmdsZSkgPiB0aGlzLm1heENsaW1iYWJsZUFuZ2xlKVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb2xsaXNpb25zLnJpZ2h0ID0gTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueCkgPT0gIDE7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb2xsaXNpb25zLmxlZnQgID0gTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueCkgPT0gLTE7XHJcblx0XHRcdFx0XHRcdFx0bW92ZW1lbnQueCA9IGRpc3RhbmNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBEZWNyZWFzZSB0aGUgbGVuZ3RoIG9mIGZ1dHVyZSByYXljYXN0c1xyXG5cdFx0XHRcdFx0XHRcdGF2YXRhclAyLnggLT0gcmF5Lng7XHJcblx0XHRcdFx0XHRcdFx0cmF5LnggPSBkaXN0YW5jZSArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueCk7XHJcblx0XHRcdFx0XHRcdFx0YXZhdGFyUDIueCArPSByYXkueDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgc2xvcGVzIHBvaW50aW5nIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZihNYXRoLnNpZ24oc2VnbWVudEFuZ2xlKSA9PSBNYXRoLnNpZ24odGhpcy52ZWxvY2l0eS54KSlcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoIHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPSBcImp1bXBcIiAgKSAvLyBBZGRlZCB0aGUgXCJqdW1wXCIgY29uZGl0aW9uIHNvIHRoZSBqdW1wIGNhdXNlZCBieSBpc0NvbGxpc2lvblRvbGVyYW5jZUp1bXAgaXMgbm90IGNhbmNlbGxlZCB3aGVuIEJlbiBpcyB3YWxraW5nIGFsb25nIGEgc3Ryb25nIHNsb3BlLlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Ly8gVXNlIG9ubHkgdGhlIGxvd2VzdCByYXkgZm9yIGNsaW1iaW5nIHNsb3Blc1xyXG5cdFx0XHRcdFx0XHRcdGlmKHIgIT0gcmF5T3JpZ2lucy5sZW5ndGggLTEpIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBDbGltYiBzZWdtZW50XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb2xsaXNpb25zLmJvdHRvbSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHEgPSByYXkueCAtIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueCk7XHJcblx0XHRcdFx0XHRcdFx0bW92ZW1lbnQueCA9IE1hdGguY29zKHNlZ21lbnRBbmdsZSAqIFBJWEkuREVHX1RPX1JBRCkgKiBxO1xyXG5cdFx0XHRcdFx0XHRcdG1vdmVtZW50LnkgPSBNYXRoLnNpbihzZWdtZW50QW5nbGUgKiBQSVhJLkRFR19UT19SQUQpICogcTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gU2F2ZSBhIHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudCBzcGxpbmVcclxuXHRcdFx0XHRcdFx0XHRzcGxpbmUgPSB0aGlzLnJvb20uc3BsaW5lTGF5ZXIuc3BsaW5lc1tpXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVmVydGljYWwgY29sbGlzaW9uczogc3BsaW5lc1xyXG5cdGlmKG1vdmVtZW50LnkgPiAwKVxyXG5cdHtcclxuXHRcdC8vIFBsYXllciB2ZXJ0aWNhbCBtb3ZlbWVudCByYXlzXHJcblx0XHR2YXIgcmF5T3JpZ2lucyA9IHRoaXMuZ2V0Qm90dG9tUmF5T3JpZ2lucygpO1xyXG5cdFx0dmFyIHJheSA9IG5ldyBQSVhJLlBvaW50KDAsIG1vdmVtZW50LnkgKyB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbih0aGlzLnZlbG9jaXR5LnkpKTtcclxuXHJcblx0XHRmb3IodmFyIHIgPSAwOyByIDwgcmF5T3JpZ2lucy5sZW5ndGg7IHIrKylcclxuXHRcdHtcclxuXHRcdFx0Ly8gTW92ZW1lbnQgcmF5IHZlcnRpY2VzXHJcblx0XHRcdHZhciBhdmF0YXJQMSA9IHJheU9yaWdpbnNbcl07XHJcblx0XHRcdGF2YXRhclAxLnggKz0gbW92ZW1lbnQueDtcclxuXHRcdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm9vbS5zcGxpbmVMYXllci5zcGxpbmVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKHZhciBwID0gMDsgcCA8IHRoaXMucm9vbS5zcGxpbmVMYXllci5zcGxpbmVzW2ldLnBvaW50cy5sZW5ndGgtMTsgcCsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFNlZ21lbnQgdmVydGljZXNcclxuXHRcdFx0XHRcdHZhciBzZWdtZW50UDEgPSB0aGlzLnJvb20uc3BsaW5lTGF5ZXIuc3BsaW5lc1tpXS5wb2ludHNbcF07XHJcblx0XHRcdFx0XHR2YXIgc2VnbWVudFAyID0gdGhpcy5yb29tLnNwbGluZUxheWVyLnNwbGluZXNbaV0ucG9pbnRzW3ArMV07XHJcblxyXG5cdFx0XHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0XHRcdHZhciBpbnRlcnNlY3Rpb24gPSB0aGlzLmxpbmVMaW5lQ29sbGlzaW9uKGF2YXRhclAxLCBhdmF0YXJQMiwgc2VnbWVudFAxLCBzZWdtZW50UDIpO1xyXG5cclxuXHRcdFx0XHRcdGlmKGludGVyc2VjdGlvbilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZiB0aGUgc2VnbWVudFxyXG5cdFx0XHRcdFx0XHRpZihzZWdtZW50UDIueCA+IHNlZ21lbnRQMS54KVxyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWdtZW50QW5nbGUgPSBNYXRoLmF0YW4yKHNlZ21lbnRQMi55IC0gc2VnbWVudFAxLnksIHNlZ21lbnRQMi54IC0gc2VnbWVudFAxLngpICogUElYSS5SQURfVE9fREVHO1xyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlZ21lbnRBbmdsZSA9IE1hdGguYXRhbjIoc2VnbWVudFAxLnkgLSBzZWdtZW50UDIueSwgc2VnbWVudFAxLnggLSBzZWdtZW50UDIueCkgKiBQSVhJLlJBRF9UT19ERUc7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjb2xsaWRlciBhbmQgdGhlIGNvbGxpc2lvbiBwb2ludFxyXG5cdFx0XHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBpbnRlcnNlY3Rpb24ueSAtIGF2YXRhclAxLnkgLSB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbih0aGlzLnZlbG9jaXR5LnkpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQ29sbGlzaW9uIGJvdHRvbVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbGxpc2lvbnMuYm90dG9tID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0bW92ZW1lbnQueSA9IGRpc3RhbmNlO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRGVjcmVhc2UgdGhlIGxlbmd0aCBvZiBmdXR1cmUgcmF5Y2FzdHNcclxuXHRcdFx0XHRcdFx0YXZhdGFyUDIueSAtPSByYXkueTtcclxuXHRcdFx0XHRcdFx0cmF5LnkgPSBkaXN0YW5jZSArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueSk7XHJcblx0XHRcdFx0XHRcdGF2YXRhclAyLnkgKz0gcmF5Lnk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTYXZlIGEgcmVmZXJlbmNlIG9mIHRoZSBjdXJyZW50IHNwbGluZVxyXG5cdFx0XHRcdFx0XHRzcGxpbmUgPSB0aGlzLnJvb20uc3BsaW5lTGF5ZXIuc3BsaW5lc1tpXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFN0aWNrIHRvIHRoZSBwcmV2aW91cyBzcGxpbmUgd2hlbiBkZXNjZW5kaW5nIHNsb3BlcyBhbmQgZmluZCBpZiB0aGVyZSBhcmUgYW55IG90aGVyIHN1aXRhYmxlcyBzcGluZXMgY2xvc2VzdFxyXG5cdHZhciBvdGhlclNwbGluZSA9IG51bGw7XHJcblxyXG5cdGlmKCEhdGhpcy5zcGxpbmUpXHJcblx0e1xyXG5cdFx0dmFyIGRpc3RhbmNlQ3VycmVudFNwbGluZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcblx0XHR2YXIgZGlzdGFuY2VPdGhlclNwbGluZXMgID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcblx0XHQvLyBJIGNhc3QgdGhlIHJheSBmcm9tIHRoZSB0b3Agb2YgdGhlIGNvbGxpZGVyIHNvIEkgY2FuIHNlZSBzZWdtZW50cyBhYm92ZSB0aGUgY3VycmVudCBwb3NpdGlvblxyXG5cdFx0dmFyIHJheUxlbmd0aCAgPSAxMDtcclxuXHRcdHZhciByYXkgICAgICAgID0gbmV3IFBJWEkuUG9pbnQoMCwgdGhpcy5jb2xsaXNpb25SZWN0LmhlaWdodCAtIHRoaXMuc2tpbldpZHRoICsgcmF5TGVuZ3RoKTtcclxuXHRcdHZhciByYXlPcmlnaW5zID0gdGhpcy5nZXRUb3BSYXlPcmlnaW5zKCk7XHJcblxyXG5cdFx0Zm9yKHZhciByID0gMDsgciA8IHJheU9yaWdpbnMubGVuZ3RoOyByKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBhdmF0YXJQMSA9IHJheU9yaWdpbnNbcl07XHJcblx0XHRcdGF2YXRhclAxLnggKz0gbW92ZW1lbnQueDtcclxuXHRcdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm9vbS5zcGxpbmVMYXllci5zcGxpbmVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gU2VnbWVudCB2ZXJ0aWNlc1xyXG5cdFx0XHRcdGZvcih2YXIgcCA9IDA7IHAgPCB0aGlzLnJvb20uc3BsaW5lTGF5ZXIuc3BsaW5lc1tpXS5wb2ludHMubGVuZ3RoLTE7IHArKylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgc2VnbWVudFAxID0gdGhpcy5yb29tLnNwbGluZUxheWVyLnNwbGluZXNbaV0ucG9pbnRzW3BdO1xyXG5cdFx0XHRcdFx0dmFyIHNlZ21lbnRQMiA9IHRoaXMucm9vbS5zcGxpbmVMYXllci5zcGxpbmVzW2ldLnBvaW50c1twKzFdO1xyXG5cclxuXHRcdFx0XHRcdC8vIExpbmUtbGluZSBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcblx0XHRcdFx0XHR2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5saW5lTGluZUNvbGxpc2lvbihhdmF0YXJQMSwgYXZhdGFyUDIsIHNlZ21lbnRQMSwgc2VnbWVudFAyKTtcclxuXHJcblx0XHRcdFx0XHRpZihpbnRlcnNlY3Rpb24pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgYW5nbGUgb2YgdGhlIHNlZ21lbnRcclxuXHRcdFx0XHRcdFx0aWYoc2VnbWVudFAyLnggPiBzZWdtZW50UDEueClcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VnbWVudEFuZ2xlID0gTWF0aC5hdGFuMihzZWdtZW50UDIueSAtIHNlZ21lbnRQMS55LCBzZWdtZW50UDIueCAtIHNlZ21lbnRQMS54KSAqIFBJWEkuUkFEX1RPX0RFRztcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWdtZW50QW5nbGUgPSBNYXRoLmF0YW4yKHNlZ21lbnRQMS55IC0gc2VnbWVudFAyLnksIHNlZ21lbnRQMS54IC0gc2VnbWVudFAyLngpICogUElYSS5SQURfVE9fREVHO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRmluZCB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgY29sbGlkZXIgYW5kIHRoZSBjb2xsaXNpb24gcG9pbnRcclxuXHRcdFx0XHRcdFx0dmFyIGRpc3RhbmNlID0gaW50ZXJzZWN0aW9uLnkgLSBhdmF0YXJQMS55ICAtICh0aGlzLmNvbGxpc2lvblJlY3QuaGVpZ2h0IC0gdGhpcy5za2luV2lkdGgpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gU2tpcCB0b28gbXVjaCBpbmNsaW5lZCBzZWdtZW50c1xyXG5cdFx0XHRcdFx0XHRpZihNYXRoLmFicyhzZWdtZW50QW5nbGUpID4gdGhpcy5tYXhDbGltYmFibGVBbmdsZSkgY29udGludWU7XHJcblxyXG5cdFx0XHRcdFx0XHRpZih0aGlzLnNwbGluZSAhPSB0aGlzLnJvb20uc3BsaW5lTGF5ZXIuc3BsaW5lc1tpXSlcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAvLyBTa2lwIHNlZ21lbnRzIGluY2xpbmVkIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gdGhhdCBhcmUgYWJvdmUgdGhlIGFuY2hvciBwb2ludFxyXG5cdFx0XHRcdFx0XHRcdCBpZihNYXRoLnNpZ24oc2VnbWVudEFuZ2xlKSAhPSAtTWF0aC5zaWduKHRoaXMudmVsb2NpdHkueCkgJiYgKE1hdGguYWJzKHNlZ21lbnRBbmdsZSkgPiA0NSB8fCBkaXN0YW5jZSA8IDApKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0IC8vIFNuYXAgdG8gc2VnbWVudHMgYmVsb3cgb3IganVzdCBhIGJpdCBhYm92ZSB0aGUgYW5jaG9yIHBvaW50XHJcblx0XHRcdFx0XHRcdFx0IGlmKGRpc3RhbmNlIDwgLTUpICBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0IGlmKGRpc3RhbmNlIDwgZGlzdGFuY2VPdGhlclNwbGluZXMpXHJcblx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3RhbmNlT3RoZXJTcGxpbmVzID0gZGlzdGFuY2U7XHJcblx0XHRcdFx0XHRcdFx0XHRvdGhlclNwbGluZSA9IHRoaXMucm9vbS5zcGxpbmVMYXllci5zcGxpbmVzW2ldO1xyXG5cdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCBlbHNlXHJcblx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0IGlmKGRpc3RhbmNlIDwgZGlzdGFuY2VDdXJyZW50U3BsaW5lICYmIGRpc3RhbmNlID4gLTUpXHJcblx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3RhbmNlQ3VycmVudFNwbGluZSA9IGRpc3RhbmNlO1xyXG5cdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoZGlzdGFuY2VPdGhlclNwbGluZXMgPiBkaXN0YW5jZUN1cnJlbnRTcGxpbmUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29sbGlzaW9ucy5ib3R0b20gPSB0cnVlO1xyXG5cdFx0XHRtb3ZlbWVudC55ID0gZGlzdGFuY2VDdXJyZW50U3BsaW5lO1xyXG5cclxuXHRcdFx0c3BsaW5lID0gdGhpcy5zcGxpbmU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKG90aGVyU3BsaW5lICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29sbGlzaW9ucy5ib3R0b20gPSB0cnVlO1xyXG5cdFx0XHRtb3ZlbWVudC55ID0gZGlzdGFuY2VPdGhlclNwbGluZXM7XHJcblxyXG5cdFx0XHRzcGxpbmUgPSBvdGhlclNwbGluZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFxyXG5cdC8vIFVwZGF0ZSBjdXJyZW50IHRyYW5zZm9ybWF0aW9uLlxyXG5cdGlmICggdGhpcy50cmFuc2Zvcm1hdGlvbiAhPSBudWxsICYmIHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPSBcImRpZVwiIClcdFxyXG5cdFx0dGhpcy50cmFuc2Zvcm1hdGlvbi51cGRhdGUoKTtcclxuXHRcclxuXHJcblx0Ly8gQmxvY2tzIGhvcml6b250YWwgY29sbGlzaW9uc1xyXG5cdGlmICggbW92ZW1lbnQueCAhPSAwIClcclxuXHR7XHJcblx0XHRpZiAoIG1vdmVtZW50LnggPiAwIClcclxuXHRcdFx0dmFyIHJheU9yaWdpbnMgPSB0aGlzLmdldFJpZ2h0UmF5T3JpZ2lucygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR2YXIgcmF5T3JpZ2lucyA9IHRoaXMuZ2V0TGVmdFJheU9yaWdpbnMoKTtcclxuXHJcblx0XHR2YXIgcmF5ID0gbmV3IFBJWEkuUG9pbnQobW92ZW1lbnQueCArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKG1vdmVtZW50LngpLCAwKTtcclxuXHJcblx0XHR2YXIgaXNDb2xsaXNpb25Ub2xlcmFuY2VDaGVjayA9IGZhbHNlO1xyXG5cdFx0dmFyIGlzQ29sbGlzaW9uVG9sZXJhbmNlSnVtcCA9IHRydWU7XHJcblx0XHRmb3IgKCB2YXIgciA9IDA7IHIgPCByYXlPcmlnaW5zLmxlbmd0aCAmJiBtb3ZlbWVudC54ICE9IDA7IHIrKyApXHJcblx0XHR7XHJcblx0XHRcdC8vIE1vdmVtZW50IHJheSB2ZXJ0aWNlc1xyXG5cdFx0XHR2YXIgYXZhdGFyUDEgPSByYXlPcmlnaW5zW3JdO1xyXG5cdFx0XHQvLyBhdmF0YXJQMS55ICs9IG1vdmVtZW50Lnk7XHJcblx0XHRcdHZhciBhdmF0YXJQMiA9IG5ldyBQSVhJLlBvaW50KGF2YXRhclAxLnggKyByYXkueCwgYXZhdGFyUDEueSArIHJheS55KTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBiID0gMDsgYiA8IHRoaXMucm9vbS5ibG9ja3MubGVuZ3RoOyBiKysgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCB0aGlzLnJvb20uYmxvY2tzW2JdLmlzR2FyYmFnZSApIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmICggbW92ZW1lbnQueCA+IDAgJiYgIXRoaXMucm9vbS5ibG9ja3NbYl0uY29uZmlnLmNvbGxpc2lvbnMubGVmdCApIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmICggbW92ZW1lbnQueCA8IDAgJiYgIXRoaXMucm9vbS5ibG9ja3NbYl0uY29uZmlnLmNvbGxpc2lvbnMucmlnaHQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0Ly8gU2VnbWVudCB2ZXJ0aWNlc1xyXG5cdFx0XHRcdHZhciBibG9ja1AxID0gbmV3IFBJWEkuUG9pbnQoIHRoaXMucm9vbS5ibG9ja3NbYl0uY29uZmlnLnggKyAobW92ZW1lbnQueCA8IDAgPyB0aGlzLnJvb20uYmxvY2tzW2JdLmNvbmZpZy53aWR0aCA6IDApLCB0aGlzLnJvb20uYmxvY2tzW2JdLmNvbmZpZy55ICk7XHJcblx0XHRcdFx0dmFyIGJsb2NrUDIgPSBuZXcgUElYSS5Qb2ludCggYmxvY2tQMS54LCBibG9ja1AxLnkgKyB0aGlzLnJvb20uYmxvY2tzW2JdLmNvbmZpZy5oZWlnaHQgKTtcclxuXHJcblx0XHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0XHR2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5saW5lTGluZUNvbGxpc2lvbiggYXZhdGFyUDEsIGF2YXRhclAyLCBibG9ja1AxLCBibG9ja1AyICk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdC8vIFBsYXRmb3JtIGVuZCBjb2xsaXNpb24gdG9sZXJhbmNlLlx0XHJcblx0XHRcdFx0dmFyIGlzQ29sbGlzaW9uVG9sZXJhbmNlID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKCBpbnRlcnNlY3Rpb24gJiYgdGhpcy5zcGxpbmUgIT0gbnVsbCBcclxuXHRcdFx0XHRcdCYmICggbW92ZW1lbnQueCA8IDAgJiYgIXRoaXMuY29sbGlzaW9ucy5yaWdodCB8fCBtb3ZlbWVudC54ID4gMCAmJiAhdGhpcy5jb2xsaXNpb25zLmxlZnQgKVxyXG5cdFx0XHRcdFx0JiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwibWVsdF9tb3ZlXCIgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFNpZGUgY3JhY2tlZCBhbmQgc29saWQgcGxhdGZvcm0gYmxvY2tzLlxyXG5cdFx0XHRcdFx0aWYgKCB0aGlzLnJvb20uYmxvY2tzW2JdLnRpbGVJZCA9PSAxOSB8fCB0aGlzLnJvb20uYmxvY2tzW2JdLnRpbGVJZCA9PSAxNlxyXG5cdFx0XHRcdFx0XHR8fCB0aGlzLnJvb20uYmxvY2tzW2JdLnRpbGVJZCA9PSAzMiB8fCB0aGlzLnJvb20uYmxvY2tzW2JdLnRpbGVJZCA9PSAzNSApXHJcblx0XHRcdFx0XHR7XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoICFpc0NvbGxpc2lvblRvbGVyYW5jZUNoZWNrICkgaXNDb2xsaXNpb25Ub2xlcmFuY2VDaGVjayA9IHRydWU7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLmNvbGxpc2lvblJlY3QuaGVpZ2h0IC0gKCBhdmF0YXJQMS55IC0gKCB0aGlzLnkgKyB0aGlzLmNvbGxpc2lvblJlY3QueSApICkgPD0gLyp0aGlzLmNvbGxpc2lvblJlY3QuaGVpZ2h0Ki8gNDAgKiAuMzQgKVx0Ly8gVXNpbmcgQmVuJ3MgY29sbGlzaW9uIHJlY3QgaGVpZ2h0IGFzIGJhc2UuIFRoZSBoaWdoZXIgdGhlIHBlcmNlbnRhZ2UgdGhlIGhpZ2hlciB0aGUgdG9sZXJhbmNlLlx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aXNDb2xsaXNpb25Ub2xlcmFuY2UgPSB0cnVlO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aXNDb2xsaXNpb25Ub2xlcmFuY2VKdW1wID0gaXNDb2xsaXNpb25Ub2xlcmFuY2VKdW1wICYmIGlzQ29sbGlzaW9uVG9sZXJhbmNlO1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoIGludGVyc2VjdGlvbiAmJiAhaXNDb2xsaXNpb25Ub2xlcmFuY2UgKVxyXG5cdFx0XHRcdHtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIGRpc3RhbmNlID0gIGludGVyc2VjdGlvbi54IC0gYXZhdGFyUDEueCAtIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKG1vdmVtZW50LngpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbW92ZW1lbnQueCA+IDAgKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbGxpc2lvbnMucmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbGxpc2lvbnMubGVmdCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVkdWNlIHZlcnRpY2FsIHNwZWVkIGlmIGNsaW1iaW5nIGEgc2xvcGVcclxuXHRcdFx0XHRcdGlmICggdGhpcy5jb2xsaXNpb25zLmJvdHRvbSApXHJcblx0XHRcdFx0XHRcdG1vdmVtZW50LnkgKj0gZGlzdGFuY2UgLyBtb3ZlbWVudC54O1xyXG5cclxuXHRcdFx0XHRcdG1vdmVtZW50LnggPSBkaXN0YW5jZTtcclxuXHJcblx0XHRcdFx0XHQvLyBBdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcclxuXHRcdFx0XHRcdGlmICggTWF0aC5jbG9zZUVub3VnaCggbW92ZW1lbnQueCwgMCApIClcclxuXHRcdFx0XHRcdHtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG1vdmVtZW50LnggPSAwO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Ly8gRXhpdCB0aGUgbG9vcC5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gRGVjcmVhc2UgdGhlIGxlbmd0aCBvZiBmdXR1cmUgcmF5Y2FzdHNcclxuXHRcdFx0XHRcdGF2YXRhclAyLnggLT0gcmF5Lng7XHJcblx0XHRcdFx0XHRyYXkueCA9IGRpc3RhbmNlICsgdGhpcy5za2luV2lkdGggKiBNYXRoLnNpZ24obW92ZW1lbnQueCk7XHJcblx0XHRcdFx0XHRhdmF0YXJQMi54ICs9IHJheS54O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0XHRcdFxyXG5cdFx0Ly8gRm9yY2UgYSBqdW1wIHNvIHRoZSBwbGF5ZXIgY2FuJ3QgdXNlIHRoaXMgdG9sZXJhbmNlIHRvIG1vdmUgZG93bndhcmQgdGhyb3VnaCBibG9ja3MuXHRcdFxyXG5cdFx0aWYgKCBpc0NvbGxpc2lvblRvbGVyYW5jZUNoZWNrICYmIGlzQ29sbGlzaW9uVG9sZXJhbmNlSnVtcCApXHJcblx0XHRcdHRoaXMuanVtcCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gQmxvY2tzIHZlcnRpY2FsIGNvbGxpc2lvbnNcclxuXHRpZiAoIG1vdmVtZW50LnkgIT0gMCApXHJcblx0e1xyXG5cdFx0aWYgKCBtb3ZlbWVudC55ID4gMCApXHJcblx0XHRcdHZhciByYXlPcmlnaW5zID0gdGhpcy5nZXRCb3R0b21SYXlPcmlnaW5zKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHZhciByYXlPcmlnaW5zID0gdGhpcy5nZXRUb3BSYXlPcmlnaW5zKCk7XHJcblxyXG5cdFx0dmFyIHJheSA9IG5ldyBQSVhJLlBvaW50KDAsIG1vdmVtZW50LnkgKyB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbihtb3ZlbWVudC55KSk7IC8vIG1vdmVtZW50IGFuZCBub3QgdmVsb2NpdHkgYmVjYXVzZSB3aGVuIGNsaW1iaW5nIGEgc3BsaW5lIHZlbG9jaXR5IGlzIHBvc2l0aXZlIChiZWNhdXNlIGdyYXZpdHkpIGJ1dCBtb3ZlbWVudCBoYXMgY2hhbmdlZCB0byBiZSBuZWdhdGl2ZVxyXG5cclxuXHRcdGZvciAoIHZhciByID0gMDsgciA8IHJheU9yaWdpbnMubGVuZ3RoICYmIG1vdmVtZW50LnkgIT0gMDsgcisrIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gTW92ZW1lbnQgcmF5IHZlcnRpY2VzXHJcblx0XHRcdHZhciBhdmF0YXJQMSA9IHJheU9yaWdpbnNbcl07XHJcblx0XHRcdGF2YXRhclAxLnggKz0gbW92ZW1lbnQueDtcclxuXHRcdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkpO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBiID0gMDsgYiA8IHRoaXMucm9vbS5ibG9ja3MubGVuZ3RoOyBiKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIHRoaXMucm9vbS5ibG9ja3NbYl0uaXNHYXJiYWdlICkgY29udGludWU7XHJcblx0XHRcdFx0aWYobW92ZW1lbnQueSA+IDAgJiYgIXRoaXMucm9vbS5ibG9ja3NbYl0uY29uZmlnLmNvbGxpc2lvbnMudG9wKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZihtb3ZlbWVudC55IDwgMCAmJiAhdGhpcy5yb29tLmJsb2Nrc1tiXS5jb25maWcuY29sbGlzaW9ucy5ib3R0b20pIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHQvLyBTZWdtZW50IHZlcnRpY2VzXHJcblx0XHRcdFx0dmFyIGJsb2NrUDEgID0gbmV3IFBJWEkuUG9pbnQodGhpcy5yb29tLmJsb2Nrc1tiXS5jb25maWcueCwgdGhpcy5yb29tLmJsb2Nrc1tiXS5jb25maWcueSArIChtb3ZlbWVudC55IDwgMCA/IHRoaXMucm9vbS5ibG9ja3NbYl0uY29uZmlnLmhlaWdodCA6IDApKTtcclxuXHRcdFx0XHR2YXIgYmxvY2tQMiAgPSBuZXcgUElYSS5Qb2ludChibG9ja1AxLnggKyB0aGlzLnJvb20uYmxvY2tzW2JdLmNvbmZpZy53aWR0aCwgYmxvY2tQMS55KTtcclxuXHJcblx0XHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0XHR2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5saW5lTGluZUNvbGxpc2lvbihhdmF0YXJQMSwgYXZhdGFyUDIsIGJsb2NrUDEsIGJsb2NrUDIpO1xyXG5cclxuXHRcdFx0XHRpZihpbnRlcnNlY3Rpb24pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGRpc3RhbmNlID0gIGludGVyc2VjdGlvbi55IC0gYXZhdGFyUDEueSAtIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKG1vdmVtZW50LnkpO1xyXG5cclxuXHRcdFx0XHRcdC8vIEdyb3VuZFxyXG5cdFx0XHRcdFx0aWYobW92ZW1lbnQueSA+IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5ib3R0b20gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRtb3ZlbWVudC55ID0gZGlzdGFuY2U7XHJcblx0XHRcdFx0XHRcdHNwbGluZSA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBDZWlsaW5nXHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29sbGlzaW9ucy50b3AgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRtb3ZlbWVudC55ID0gZGlzdGFuY2U7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBXYXMgY2xpbWJpbmcgYSBzcGxpbmUsIGNhbid0IG1vdmUgYW55IGZ1cnRoZXJcclxuXHRcdFx0XHRcdFx0aWYodGhpcy5jb2xsaXNpb25zLmJvdHRvbSlcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdG1vdmVtZW50LnggPSAwO1xyXG5cdFx0XHRcdFx0XHRcdG1vdmVtZW50LnkgPSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXHJcblx0XHRcdFx0XHRpZihNYXRoLmNsb3NlRW5vdWdoKG1vdmVtZW50LnksIDApKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtb3ZlbWVudC55ID0gMDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gRGVjcmVhc2UgdGhlIGxlbmd0aCBvZiBmdXR1cmUgcmF5Y2FzdHNcclxuXHRcdFx0XHRcdGF2YXRhclAyLnkgLT0gcmF5Lnk7XHJcblx0XHRcdFx0XHRyYXkueSA9IGRpc3RhbmNlICsgdGhpcy5za2luV2lkdGggKiBNYXRoLnNpZ24obW92ZW1lbnQueSk7XHJcblx0XHRcdFx0XHRhdmF0YXJQMi55ICs9IHJheS55O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQ2VpbGluZyBjb2xsaXNpb25zXHJcblx0LyppZiAoIHRoaXMueSArIG1vdmVtZW50LnkgPD0gdGhpcy5jb2xsaXNpb25SZWN0LmhlaWdodCApXHJcblx0e1xyXG5cdFx0dGhpcy5jb2xsaXNpb25zLnRvcCA9IHRydWU7XHJcblx0XHRtb3ZlbWVudC54ID0gMDtcclxuXHRcdG1vdmVtZW50LnkgPSAwO1xyXG5cdH0qL1xyXG5cclxuXHQvLyBJZiB0cmFwcGVkLCBzdG9wIG1vdmluZ1xyXG5cdGlmICggdGhpcy5jb2xsaXNpb25zLmJvdHRvbSAmJiB0aGlzLmNvbGxpc2lvbnMudG9wICkgXHJcblx0XHRtb3ZlbWVudC55ID0gMDtcclxuXHJcblx0Ly8gTW92ZSB0aGUgY2hhcmFjdGVyXHJcblx0aWYgKCB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJtZWx0X2Rvd25cIiAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJtZWx0X3VwXCJcclxuXHRcdCYmICggdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwiZGllXCIgfHwgdGhpcy5jdXJyZW50QW5pbWF0aW9uID09IFwiZGllXCIgJiYgIXRoaXMuY29sbGlzaW9ucy5ib3R0b20gKVxyXG5cdFx0JiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwiaWRsZVwiIClcclxuXHRcdHRoaXMueCArPSBtb3ZlbWVudC54O1xyXG5cdHRoaXMueSArPSBtb3ZlbWVudC55O1xyXG5cdHRoaXMuc3BsaW5lID0gc3BsaW5lO1xyXG59XHJcblxyXG5cclxuQXZhdGFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHQvL3RoaXMuZHJhd0NvbGxpc2lvbigpO1xyXG5cdFxyXG5cdHZhciBpc0dhbWVPdmVyID0gZmFsc2U7XHJcblx0dmFyIGlzVW5kZXJXYXRlcmZhbGwgPSBmYWxzZTtcclxuXHRcclxuXHRcclxuXHQvLyBNb3ZlbWVudC5cclxuXHR0aGlzLnVwZGF0ZU1vdmVtZW50KCk7XHJcblx0XHJcblx0XHJcblx0Ly8gU3RlcCBjb3VudC5cclxuXHRpZiAoIHRoaXMuc3BsaW5lID09IG51bGwgJiYgdGhpcy5jb2xsaXNpb25zLmJvdHRvbSApXHJcblx0XHR0aGlzLnN0ZXBDb3VudCArPSBNYXRoLmFicyggcDMuVGltZXN0ZXAuZGVsdGFUaW1lICogR2xvYmFsLkdBTUVfU1RFUF9CQVNFX1NQRUVEICk7XHJcblx0XHJcblx0XHJcblx0Ly8gQ29sbGlzaW9ucy5cclxuXHQvLyBEb29yXHJcblx0dmFyIHN0YXJ0RG9vcklkID0gMiAqIHRoaXMucm9vbS5sZXZlbC5jdXJyZW50Um9vbUluZGV4ICsgMTtcclxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnJvb20ub2JqZWN0cy5kb29ycy5sZW5ndGg7IGkrKyApXHJcblx0e1xyXG5cdFx0dmFyIGRvb3IgPSB0aGlzLnJvb20ub2JqZWN0cy5kb29yc1sgaSBdO1xyXG5cdFx0aWYgKCBkb29yLmlkICE9IHN0YXJ0RG9vcklkICYmIHRoaXMuY29sbGlzaW9uKCBkb29yICkgKVxyXG5cdFx0e1xyXG5cdFx0XHRkb29yLm9wZW4oKTtcclxuXHRcdFx0dGhpcy5yb29tLmVuZFJvb20oIGRvb3IgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFZPLlxyXG5cdFx0XHQvL2lmICggdGhpcy50cmFuc2Zvcm1hdGlvbiA9PSBudWxsIClcclxuXHRcdFx0XHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVZPKCBbIFwidm9fYmVuX3dpbl9oYWFhXzAwXCIsIFwidm9fYmVuX3dvb2hvb18wMFwiIF0gKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIENvaW5zXHJcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5yb29tLm9iamVjdHMuY29pbnMubGVuZ3RoOyBpKysgKVxyXG5cdHtcclxuXHRcdHZhciBjb2luID0gdGhpcy5yb29tLm9iamVjdHMuY29pbnNbIGkgXTtcclxuXHRcdGlmICggY29pbi50YWtlbiApIGNvbnRpbnVlO1xyXG5cclxuXHRcdGlmICggdGhpcy5jb2xsaXNpb24oIGNvaW4gKSApXHJcblx0XHR7XHRcdFx0XHJcblx0XHRcdGNvaW4ucGlja3VwKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vIFBvd2VydXBzXHJcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5yb29tLm9iamVjdHMucG93ZXJ1cHMubGVuZ3RoOyBpKysgKVxyXG5cdHtcclxuXHRcdHZhciBwb3dlcnVwQXV4ID0gdGhpcy5yb29tLm9iamVjdHMucG93ZXJ1cHNbIGkgXTtcclxuXHRcdGlmICggcG93ZXJ1cEF1eC50YWtlbiApIGNvbnRpbnVlO1xyXG5cclxuXHRcdGlmICggdGhpcy5jb2xsaXNpb24oIHBvd2VydXBBdXggKSApXHJcblx0XHR7XHRcdFx0XHJcblx0XHRcdC8vIEFwcGx5IHBvd2VydXAncyBlZmZlY3Qgb24gQmVuLlxyXG5cdFx0XHRwb3dlcnVwQXV4LnBpY2t1cCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvLyBFbmVtaWVzXHJcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5yb29tLm9iamVjdHMuZGFuZ2Vycy5sZW5ndGg7IGkrKyApXHJcblx0e1xyXG5cdFx0dmFyIGRhbmdlckF1eCA9IHRoaXMucm9vbS5vYmplY3RzLmRhbmdlcnNbIGkgXTtcclxuXHRcdFxyXG5cdFx0dmFyIGlzR2VuZXJpY0NvbGxpc2lvbiA9IHRydWU7XHJcblx0XHRpZiAoIGRhbmdlckF1eC50YXJnZXRDb2xsaXNpb25SZWN0ICE9IG51bGwgJiYgdGhpcy5yZWN0UmVjdENvbGxpc2lvbihcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHggICAgICA6IGRhbmdlckF1eC54ICsgZGFuZ2VyQXV4LnRhcmdldENvbGxpc2lvblJlY3QueCxcclxuXHRcdFx0XHR5ICAgICAgOiBkYW5nZXJBdXgueSArIGRhbmdlckF1eC50YXJnZXRDb2xsaXNpb25SZWN0LnksXHJcblx0XHRcdFx0d2lkdGggIDogZGFuZ2VyQXV4LnRhcmdldENvbGxpc2lvblJlY3Qud2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0IDogZGFuZ2VyQXV4LnRhcmdldENvbGxpc2lvblJlY3QuaGVpZ2h0XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR4ICAgICAgOiB0aGlzLnggKyB0aGlzLmNvbGxpc2lvblJlY3QueCxcclxuXHRcdFx0XHR5ICAgICAgOiB0aGlzLnkgKyB0aGlzLmNvbGxpc2lvblJlY3QueSxcclxuXHRcdFx0XHR3aWR0aCAgOiB0aGlzLmNvbGxpc2lvblJlY3Qud2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0IDogdGhpcy5jb2xsaXNpb25SZWN0LmhlaWdodFxyXG5cdFx0XHR9ICkgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIHRoaXMudHJhbnNmb3JtYXRpb24gIT0gbnVsbCApXHJcblx0XHRcdFx0aXNHZW5lcmljQ29sbGlzaW9uID0gdGhpcy50cmFuc2Zvcm1hdGlvbi5vbkVuZW15Q29sbGlzaW9uKCBkYW5nZXJBdXggKTtcdFx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggaXNHZW5lcmljQ29sbGlzaW9uICYmIHRoaXMuY29sbGlzaW9uKCBkYW5nZXJBdXggKSApXHJcblx0XHR7XHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0QW5pbWF0aW9uKCBcImRpZVwiLCBmYWxzZSApO1xyXG5cdFx0XHRpZiAoIHRoaXMuc3BpbmUuc3RhdGUudHJhY2tzWyAxIF0gIT0gbnVsbCApXHJcblx0XHRcdFx0dGhpcy5zcGluZS5zdGF0ZS5jbGVhclRyYWNrKCAxICk7XHJcblx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwidm9fYmVuX2h1cnRfMDBcIiApO1xyXG5cdFx0XHRcclxuXHRcdFx0aXNHYW1lT3ZlciA9IHRydWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcdFx0XHRcclxuXHQvLyBXYXRlcmZhbGxcclxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnJvb20ub2JqZWN0cy53YXRlcmZhbGxzLmxlbmd0aDsgaSsrIClcclxuXHR7XHJcblx0XHR2YXIgd2F0ZXJmYWxsID0gdGhpcy5yb29tLm9iamVjdHMud2F0ZXJmYWxsc1sgaSBdO1xyXG5cdFx0aWYgKCB0aGlzLmNvbGxpc2lvbiggd2F0ZXJmYWxsICkgKVxyXG5cdFx0e1x0XHRcdFxyXG5cdFx0XHRpc1VuZGVyV2F0ZXJmYWxsID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0XHRpZiAoIHRoaXMudHJhbnNmb3JtYXRpb24gPT0gbnVsbCBcclxuXHRcdFx0XHR8fCAoIHRoaXMudHJhbnNmb3JtYXRpb24gIT0gbnVsbCAmJiB0aGlzLnRyYW5zZm9ybWF0aW9uLm9uV2F0ZXJmYWxsQ29sbGlzaW9uKCkgKSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIHRoaXMuc3BpbmUuc3RhdGUudHJhY2tzWyAxIF0gIT0gbnVsbCApXHJcblx0XHRcdFx0XHR0aGlzLnNwaW5lLnN0YXRlLmNsZWFyVHJhY2soIDEgKTtcclxuXHRcdFx0XHR0aGlzLnNldEFuaW1hdGlvbiggXCJkaWVcIiwgZmFsc2UgKTtcclxuXHRcdFx0XHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInZvX2Jlbl9odXJ0XzAwXCIgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpc0dhbWVPdmVyID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHRcclxuXHJcblx0XHRcclxuXHQvLyBBbmltYXRpb25zLlxyXG5cdGlmICggdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwiZGllXCIgKVxyXG5cdHtcclxuXHRcdC8vIEp1bXAgYXV0b21hdGljYWxseSB3aGVuIHRoZSBjaGFyYWN0ZXJzIGhhcyBubyBtb3JlIGdyb3VuZCB1bmRlciBpdFxyXG5cdFx0aWYgKCAhdGhpcy5jb2xsaXNpb25zLmJvdHRvbSAmJiB0aGlzLmNvbGxpc2lvbnMuYm90dG9tQmVmb3JlIClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJtZWx0X2Rvd25cIiAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJtZWx0X3VwXCIgJiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwibWVsdF9tb3ZlXCIgKVxyXG5cdFx0XHRcdHRoaXMuanVtcCgpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gTGFuZFxyXG5cdFx0ZWxzZSBpZiAoICF0aGlzLmNvbGxpc2lvbnMuYm90dG9tQmVmb3JlICYmIHRoaXMuY29sbGlzaW9ucy5ib3R0b20gJiYgIXRoaXMuY29sbGlzaW9ucy50b3AgJiYgdGhpcy52ZWxvY2l0eS55ID49IHRoaXMubGFuZFNwZWVkIClcclxuXHRcdFx0dGhpcy5sYW5kKCk7XHJcblx0XHQvLyBGYWxsXHJcblx0XHRlbHNlIGlmICggIXRoaXMuY29sbGlzaW9ucy5ib3R0b20gJiYgIXRoaXMuY29sbGlzaW9ucy5ib3R0b21CZWZvcmUgJiYgdGhpcy52ZWxvY2l0eS55ID4gMCApXHJcblx0XHR7XHJcblx0XHRcdGlmICggdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwicm9sbFwiXHJcblx0XHRcdFx0JiYgKCB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJwdW5jaF91cFwiIHx8IHRoaXMuY3VycmVudEFuaW1hdGlvbiA9PSBcInB1bmNoX3VwXCIgJiYgdGhpcy5zcGluZS5zdGF0ZS5nZXRDdXJyZW50KCAwICkgPT0gbnVsbCApXHJcblx0XHRcdFx0JiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwibWVsdF9kb3duXCIgJiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwibWVsdF91cFwiICYmIHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPSBcIm1lbHRfbW92ZVwiIClcclxuXHRcdFx0XHR0aGlzLnNldEFuaW1hdGlvbiggXCJmYWxsXCIsIGZhbHNlICk7XHJcblx0XHR9XHJcblx0XHQvLyBSdW4sIElkbGVcclxuXHRcdGVsc2UgaWYgKCB0aGlzLmNvbGxpc2lvbnMuYm90dG9tICYmICF0aGlzLmlzTGFuZGluZyApXHJcblx0XHR7XHJcblx0XHRcdGlmICggdGhpcy52ZWxvY2l0eS54ICE9IDAgKVxyXG5cdFx0XHR7XHRcdFxyXG5cdFx0XHRcdC8vIERvbid0IG92ZXJyaWRlIGN1cnJlbnQgdHJhbnNmb3JtYXRpb24ncyBhbmltYXRpb25zLlxyXG5cdFx0XHRcdGlmICggKCAhaXNVbmRlcldhdGVyZmFsbCB8fCB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJ3YXRlcmZhbGxcIiApXHJcblx0XHRcdFx0XHQmJiB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJtZWx0X21vdmVcIiAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJtZWx0X2Rvd25cIiAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT0gXCJtZWx0X3VwXCJcclxuXHRcdFx0XHRcdCYmICggdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwicHVuY2hfZG93blwiIHx8IHRoaXMuY3VycmVudEFuaW1hdGlvbiA9PSBcInB1bmNoX2Rvd25cIiAmJiB0aGlzLnNwaW5lLnN0YXRlLmdldEN1cnJlbnQoIDAgKSA9PSBudWxsICkgKVxyXG5cdFx0XHRcdFx0dGhpcy5zZXRBbmltYXRpb24oIFwicnVuX2xldmVsXCIsIHRydWUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5zZXRBbmltYXRpb24oIFwiaWRsZVwiLCB0cnVlICk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vIFNmeC5cclxuXHQvLyBMYW5kaW5nLlxyXG5cdC8qaWYgKCB0aGlzLnNwbGluZSA9PSBudWxsIClcclxuXHR7Ki9cclxuXHRcdGlmICggIXRoaXMuY29sbGlzaW9ucy5ib3R0b21CZWZvcmUgJiYgdGhpcy5jb2xsaXNpb25zLmJvdHRvbSAmJiAhdGhpcy5jb2xsaXNpb25zLnRvcCApXHJcblx0XHR7XHJcblx0XHRcdGlmICggdGhpcy52ZWxvY2l0eS55IDwgdGhpcy5sYW5kU3BlZWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gU29mdCBsYW5kaW5nLlxyXG5cdFx0XHRcdC8qaWYgKCB0aGlzLnJvb20uX2RhdGEudGV4dHVyZXMucGxhdGZvcm1zID09IFwiVGlsZXNoZWV0XzAyXCIgKVxyXG5cdFx0XHRcdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfbGFuZHNvZnRfd29vZF8wMVwiICk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoIHRoaXMucm9vbS5fZGF0YS50ZXh0dXJlcy5wbGF0Zm9ybXMgPT0gXCJUaWxlc2hlZXRfMDNcIiApXHJcblx0XHRcdFx0XHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInNmeF9sYW5kc29mdF9jb25jcmV0ZV8wMVwiICk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoIHRoaXMucm9vbS5fZGF0YS50ZXh0dXJlcy5wbGF0Zm9ybXMgPT0gXCJUaWxlc2hlZXRfMDBcIiApKi9cclxuXHRcdFx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwic2Z4X2xhbmRzb2Z0X2dyYXZlbF8wMVwiICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdC8vIEhlYXZ5IGxhbmRpbmcuXHJcblx0XHRcdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfY2Fubm9uYm9sdF9sYW5kXzAwXCIgKTtcclxuXHRcdH1cclxuXHQvL31cclxuXHRcclxuXHQvLyBSdW5uaW5nLlxyXG5cdGlmICggIXRoaXMuaXNMYW5kaW5nICYmIC8qdGhpcy5zcGxpbmUgPT0gbnVsbCAmJiovIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9PSBcInJ1bl9sZXZlbFwiICYmICF0aGlzLl9pc1BsYXlpbmdTdGVwc1NmeCApXHJcblx0e1xyXG5cdFx0dGhpcy5faXNQbGF5aW5nU3RlcHNTZnggPSB0cnVlO1xyXG5cdFx0XHJcblx0XHQvKmlmICggdGhpcy5yb29tLl9kYXRhLnRleHR1cmVzLnBsYXRmb3JtcyA9PSBcIlRpbGVzaGVldF8wMlwiIClcclxuXHRcdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfcnVuX3dvb2RcIiwgeyBsb29wOnRydWUgfSApO1xyXG5cdFx0ZWxzZSBpZiAoIHRoaXMucm9vbS5fZGF0YS50ZXh0dXJlcy5wbGF0Zm9ybXMgPT0gXCJUaWxlc2hlZXRfMDNcIiApXHJcblx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwic2Z4X3J1bl9jb25jcmV0ZVwiLCB7IGxvb3A6dHJ1ZSB9ICk7XHJcblx0XHRlbHNlIGlmICggdGhpcy5yb29tLl9kYXRhLnRleHR1cmVzLnBsYXRmb3JtcyA9PSBcIlRpbGVzaGVldF8wMFwiICkqL1xyXG5cdFx0XHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInNmeF9ydW5fZ3JhdmVsXCIsIHsgbG9vcDp0cnVlLCB2b2x1bWU6LjM1IH0gKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoICggdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9IFwicnVuX2xldmVsXCIgLyp8fCB0aGlzLnNwbGluZSAhPSBudWxsKi8gKSAmJiB0aGlzLl9pc1BsYXlpbmdTdGVwc1NmeCApXHJcblx0XHR0aGlzLnN0b3BSdW5TZngoKTtcclxuXHRcclxuXHJcblx0Ly8gU3dhcCBkaXJlY3Rpb24gaWYgdG91Y2hpbmcgc29tZXRoaW5nIG9uIHRoZSBzaWRlcyBvciBvbiB0b3BcclxuXHRpZiAoIHRoaXMuY29sbGlzaW9ucy5sZWZ0IHx8IHRoaXMuY29sbGlzaW9ucy5yaWdodCB8fCAoIHRoaXMuY29sbGlzaW9ucy50b3AgJiYgdGhpcy5jb2xsaXNpb25zLmJvdHRvbSApIClcclxuXHRcdHRoaXMuc3dpdGNoRGlyZWN0aW9uKCk7XHJcblx0XHRcclxuXHQvLyBSZXNldCBncmF2aXR5IHdoZW4gdG91Y2hpbmcgZ3JvdW5kIG9yIGEgY2VpbGluZ1xyXG5cdGlmICggdGhpcy5jb2xsaXNpb25zLnRvcCB8fCB0aGlzLmNvbGxpc2lvbnMuYm90dG9tIClcclxuXHRcdHRoaXMudmVsb2NpdHkueSA9IDA7XHRcdFxyXG5cdFx0XHJcblxyXG5cdC8vIEdhbWUgT3Zlci5cclxuXHQvLyBTZnguXHJcblx0aWYgKCAhdGhpcy5faXNGYWxsU2Z4ICYmIHRoaXMueSA+IHRoaXMucm9vbS5yb29tSGVpZ2h0IC8qJiYgdGhpcy50cmFuc2Zvcm1hdGlvbiA9PSBudWxsKi8gKVxyXG5cdHtcclxuXHRcdHRoaXMuX2lzRmFsbFNmeCA9IHRydWU7XHJcblx0XHRcclxuXHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwidm9fYmVuX2NhdmVfZmFsbF8wMFwiICk7XHRcclxuXHR9XHJcblx0XHJcblx0aWYgKCB0aGlzLnkgPiB0aGlzLnJvb20ucm9vbUhlaWdodCArIDI1MCApXHJcblx0XHRpc0dhbWVPdmVyID0gdHJ1ZTtcdFx0XHJcblx0XHJcblx0aWYgKCBpc0dhbWVPdmVyIClcclxuXHR7XHJcblx0XHQvLyBGaW5pc2ggcGVuZGluZyB0YXNrcy5cclxuXHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5zdG9wU291bmQoIFwic2Z4X2RyYXdfbG9vcFwiICk7XHJcblx0XHR0aGlzLnN0b3BSdW5TZngoKTtcclxuXHRcclxuXHRcdC8vdGhpcy5yb29tLmxldmVsLnJlc3RhcnQoKTtcclxuXHRcdHRoaXMuc2lnbmFscy5vbkdhbWVPdmVyLmRpc3BhdGNoKCk7XHJcblx0fVxyXG59XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLnN0b3BSdW5TZnggPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl9pc1BsYXlpbmdTdGVwc1NmeCA9IGZhbHNlO1xyXG5cdFxyXG5cdC8qaWYgKCB0aGlzLnJvb20uX2RhdGEudGV4dHVyZXMucGxhdGZvcm1zID09IFwiVGlsZXNoZWV0XzAyXCIgKVxyXG5cdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnN0b3BTb3VuZCggXCJzZnhfcnVuX3dvb2RcIiApO1xyXG5cdGVsc2UgaWYgKCB0aGlzLnJvb20uX2RhdGEudGV4dHVyZXMucGxhdGZvcm1zID09IFwiVGlsZXNoZWV0XzAzXCIgKVxyXG5cdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnN0b3BTb3VuZCggXCJzZnhfcnVuX2NvbmNyZXRlXCIgKTtcclxuXHRlbHNlIGlmICggdGhpcy5yb29tLl9kYXRhLnRleHR1cmVzLnBsYXRmb3JtcyA9PSBcIlRpbGVzaGVldF8wMFwiICkqL1xyXG5cdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnN0b3BTb3VuZCggXCJzZnhfcnVuX2dyYXZlbFwiICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuQXZhdGFyLnByb3RvdHlwZS5zd2l0Y2hEaXJlY3Rpb24gPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG5cdHRoaXMuZGlyZWN0aW9uICo9IC0xO1xyXG59XHJcblxyXG4vKipcclxuICovXHJcbkF2YXRhci5wcm90b3R5cGUuanVtcCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMudmVsb2NpdHkueSA9IC10aGlzLmp1bXBTcGVlZDtcclxuXHR0aGlzLmNvbGxpc2lvbnMuYm90dG9tID0gZmFsc2U7XHJcblx0dGhpcy5zcGxpbmUgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5zZXRBbmltYXRpb24oXCJqdW1wXCIsIGZhbHNlKTtcclxuXHRcclxuXHQvLyBTZnguXHJcblx0aWYgKCB0aGlzLnRyYW5zZm9ybWF0aW9uID09IG51bGwgJiYgcDMuVXRpbHMucmFuZG9tSW50KCAwLCAyICkgPT0gMCApXHJcblx0XHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInZvX2Jlbl9qdW1wXzAwXCIgKTtcclxuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBbIFwic2Z4XzRhcm1zX3N3b29zaF8wMFwiLCBcInNmeF80YXJtc19zd29vc2hfMDFcIiBdICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuQXZhdGFyLnByb3RvdHlwZS5sYW5kID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Ly9jb25zb2xlLmxvZyggXCJsYW5kXCIgKTtcclxuXHR0aGlzLmlzTGFuZGluZyA9IHRydWU7XHJcblx0dGhpcy5sYW5kVGltZSAgPSAwO1xyXG5cclxuXHR0aGlzLnNldEFuaW1hdGlvbihbXCJmYWxsX3RvX2xhbmRcIiwgLypcImxhbmRfdG9fcnVuXCIsIFwicnVuX2xldmVsXCIqL10sIGZhbHNlKTtcclxuXHJcblx0dGhpcy5yb29tLmxldmVsLnNoYWtlKDAuMjUsIG5ldyBQSVhJLlBvaW50KDQsNikpO1xyXG5cdFxyXG5cdC8vIFNmeC5cclxuXHRpZiAoIHRoaXMudHJhbnNmb3JtYXRpb24gPT0gbnVsbCAmJiBwMy5VdGlscy5yYW5kb21JbnQoIDAsIDIgKSA9PSAwIClcclxuXHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFsgXCJ2b19iZW5fY2F2ZV9sYW5kX2hlYXZ5XzAwXCIsIFwidm9fYmVuX2xhbmRfaGVhdnlfMDBcIiBdICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuQXZhdGFyLnByb3RvdHlwZS5zZXRBbmltYXRpb24gPSBmdW5jdGlvbiggaWQsIGxvb3AgKVxyXG57XHJcblx0aWYgKCBpZCA9PSB0aGlzLmN1cnJlbnRBbmltYXRpb24gKSBcclxuXHRcdHJldHVybjtcclxuXHJcblx0dGhpcy5zcGluZS5za2VsZXRvbi5zZXRUb1NldHVwUG9zZSgpOyAvLyBUT0RPOiBUbyBiZSBhYmxlIHRvIHJlcGxhY2UgdGhlIFwicm9sbFwiIGFuaW1hdGlvbiB3aXRoIHRoZSBcInJ1bl9sZXZlbFwiIG9uZS4gUHJvYmxlbXMgPz8/IFxyXG5cdFxyXG5cdGlmICggQXJyYXkuaXNBcnJheSggaWQgKSApXHJcblx0e1xyXG5cdFx0Ly90aGlzLnNwaW5lLnNrZWxldG9uLnNldFRvU2V0dXBQb3NlKCk7XHJcblx0XHR0aGlzLnNwaW5lLnN0YXRlLnNldEFuaW1hdGlvbkJ5TmFtZSggMCwgaWRbMF0sIGZhbHNlICk7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAxOyBpIDwgaWQubGVuZ3RoOyBpKysgKVxyXG5cdFx0XHR0aGlzLnNwaW5lLnN0YXRlLmFkZEFuaW1hdGlvbkJ5TmFtZSggMCwgaWRbaV0sIGxvb3AgJiYgKGkgPT0gKGlkLmxlbmd0aC0xKSksIDAgKTtcclxuXHRcdHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGlkW2lkLmxlbmd0aC0xXTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHRoaXMuc3BpbmUuc3RhdGUuc2V0QW5pbWF0aW9uQnlOYW1lKDAsIGlkLCBsb29wLCAwKTtcclxuXHRcdHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGlkO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5BdmF0YXIucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uKCB0cmFuc2Zvcm1hdGlvbiApXHJcbntcclxuXHRpZiAoIHRoaXMudHJhbnNmb3JtYXRpb24gIT0gbnVsbCAmJiB0aGlzLnRyYW5zZm9ybWF0aW9uLmlkID09IHRyYW5zZm9ybWF0aW9uLmlkIClcclxuXHR7XHJcblx0XHR0aGlzLnRyYW5zZm9ybWF0aW9uLnJlc2V0VGltZXIoKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcdFxyXG5cdHRoaXMudHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbjtcclxuXHRcclxuXHQvLyBTdWJzY3JpYmUgdG8gZXZlbnQuXHJcblx0aWYgKCB0aGlzLnRyYW5zZm9ybWF0aW9uICE9IG51bGwgKVxyXG5cdFx0dGhpcy50cmFuc2Zvcm1hdGlvbi5zaWduYWxzLm9uVHJhbnNmb3JtYXRpb25FeHBpcmVkLmFkZE9uY2UoIHRoaXMub25UcmFuc2Zvcm1hdGlvbkV4cGlyZWQsIHRoaXMgKTtcclxuXHRcdFxyXG5cdC8vIFJlbW92ZSBvbGQgc3BpbmUuXHJcblx0dGhpcy5fc3BpbmVDb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuc3BpbmUgKTtcclxuXHJcblx0Ly9jb25zb2xlLmxvZyggdGhpcy50cmFuc2Zvcm1hdGlvbi5pZCApO1xyXG5cdFxyXG5cdC8vIENyZWF0ZSBuZXcgc3BpbmUuXHJcblx0c3dpdGNoICggdGhpcy50cmFuc2Zvcm1hdGlvbi5pZCApXHJcblx0e1xyXG5cdFx0Y2FzZSB0aGlzLnRyYW5zZm9ybWF0aW9uLlRSQU5TRk9STUFUSU9OX0lEX09WRVJGTE9XOlxyXG5cdFx0e1xyXG5cdFx0XHQvLyBUT0RPOiBDb25zaWRlciBpZiB0aGVyZSBpcyBhIG1vcmUgZWZmaWNpZW50IHdheSBvZiByZXBsYWNpbmcgdGhlIHNwaW5lLlxyXG5cclxuXHRcdFx0dGhpcy5zcGluZSA9IG5ldyBQSVhJLnNwaW5lLlNwaW5lKCBDb21tb24uY2hhcmFjdGVyQW5pbWF0aW9uRGF0YS5jaGFyX292ZXJmbG93ICk7XHJcblx0XHRcdHRoaXMuX3NwaW5lQ29udGFpbmVyLnggPSAwO1xyXG5cdFx0XHR0aGlzLl9zcGluZUNvbnRhaW5lci55ID0gLTY7XHJcblx0XHRcdHRoaXMuX3NwaW5lQ29udGFpbmVyLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAuMywgMC4zICk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnNldFNwaW5lRGF0YU1peCggW1xyXG5cdFx0XHRcdCd3YXRlcmZhbGwnLFxyXG5cdFx0XHRcdCdzaG9vdCcsXHJcblx0XHRcdFx0J3J1bl9sZXZlbCcsXHJcblx0XHRcdFx0J2p1bXAnLFxyXG5cdFx0XHRcdCdpZGxlJyxcclxuXHRcdFx0XHQnZmFsbCcsXHJcblx0XHRcdFx0J2ZhbGxfdG9fbGFuZCcsXHJcblx0XHRcdFx0J2xhbmRfdG9fcnVuJyxcclxuXHRcdFx0XHQnZGllJyBdICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBBZGp1c3RlZCBmcm9tIG5vcm1hbCBCZW4ncyBjb2xsaXNpb24gcmVjdC5cclxuXHRcdFx0dGhpcy5jb2xsaXNpb25SZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCAtMTAsIC04MCwgMjAsIDgwICk7XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNhc2UgdGhpcy50cmFuc2Zvcm1hdGlvbi5UUkFOU0ZPUk1BVElPTl9JRF9DQU5OT05CT0xUOlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNwaW5lID0gbmV3IFBJWEkuc3BpbmUuU3BpbmUoIENvbW1vbi5jaGFyYWN0ZXJBbmltYXRpb25EYXRhLmNoYXJfY2Fubm9uYm9sdCApO1xyXG5cdFx0XHR0aGlzLl9zcGluZUNvbnRhaW5lci54ID0gMDtcclxuXHRcdFx0dGhpcy5fc3BpbmVDb250YWluZXIueSA9IC02O1x0XHRcclxuXHRcdFx0dGhpcy5fc3BpbmVDb250YWluZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMC4zLCAwLjMgKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0U3BpbmVEYXRhTWl4KCB0aGlzLlNIQVJFRF9BTklNQVRJT05fSURTICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBBZGp1c3RlZCBmcm9tIG5vcm1hbCBCZW4ncyBjb2xsaXNpb24gcmVjdC5cclxuXHRcdFx0dGhpcy5jb2xsaXNpb25SZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCAtMTAsIC04MCwgMjAsIDgwICk7XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNhc2UgdGhpcy50cmFuc2Zvcm1hdGlvbi5UUkFOU0ZPUk1BVElPTl9JRF9VUEdSQURFOlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNwaW5lID0gbmV3IFBJWEkuc3BpbmUuU3BpbmUoIENvbW1vbi5jaGFyYWN0ZXJBbmltYXRpb25EYXRhLmNoYXJfdXBncmFkZSApO1xyXG5cdFx0XHR0aGlzLl9zcGluZUNvbnRhaW5lci54ID0gMDtcclxuXHRcdFx0dGhpcy5fc3BpbmVDb250YWluZXIueSA9IDA7XHRcdFxyXG5cdFx0XHR0aGlzLl9zcGluZUNvbnRhaW5lci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLjMsIDAuMyApO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zZXRTcGluZURhdGFNaXgoIFtcclxuXHRcdFx0XHQnbWVsdF9tb3ZlJyxcclxuXHRcdFx0XHQnbWVsdF9kb3duJyxcclxuXHRcdFx0XHQnbWVsdF91cCcsXHJcblx0XHRcdFx0J3Nob290JyxcclxuXHRcdFx0XHQncnVuX2xldmVsJyxcclxuXHRcdFx0XHQnanVtcCcsXHJcblx0XHRcdFx0J2lkbGUnLFxyXG5cdFx0XHRcdCdmYWxsJyxcclxuXHRcdFx0XHQnZmFsbF90b19sYW5kJyxcclxuXHRcdFx0XHQnbGFuZF90b19ydW4nLFxyXG5cdFx0XHRcdCdkaWUnIF0gKTtcclxuXHRcdFxyXG5cdFx0XHQvLyBBZGp1c3RlZCBmcm9tIG5vcm1hbCBCZW4ncyBjb2xsaXNpb24gcmVjdC5cclxuXHRcdFx0dGhpcy5jb2xsaXNpb25SZWN0ID0gdGhpcy50cmFuc2Zvcm1hdGlvbi5CSUdfQ09MTElTSU9OX1JFQ1Q7XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNhc2UgdGhpcy50cmFuc2Zvcm1hdGlvbi5UUkFOU0ZPUk1BVElPTl9JRF9GT1VSQVJNUzpcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zcGluZSA9IG5ldyBQSVhJLnNwaW5lLlNwaW5lKCBDb21tb24uY2hhcmFjdGVyQW5pbWF0aW9uRGF0YS5jaGFyX2ZvdXJhcm1zICk7XHRcdFx0XHJcblx0XHRcdHRoaXMuX3NwaW5lQ29udGFpbmVyLnggPSAxMCAqIE1hdGguc2lnbiggdGhpcy52ZWxvY2l0eS54ICkgKiAtMTtcclxuXHRcdFx0dGhpcy5fc3BpbmVDb250YWluZXIueSA9IC02O1x0XHRcclxuXHRcdFx0dGhpcy5fc3BpbmVDb250YWluZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMC4zLCAwLjMgKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0U3BpbmVEYXRhTWl4KCBbXHJcblx0XHRcdFx0XHQncHVuY2hfZG93bicsXHJcblx0XHRcdFx0XHQncHVuY2hfdXAnLFxyXG5cdFx0XHRcdFx0J3J1bl9sZXZlbCcsXHJcblx0XHRcdFx0XHQnanVtcCcsXHJcblx0XHRcdFx0XHQnaWRsZScsXHJcblx0XHRcdFx0XHQnZmFsbCcsXHJcblx0XHRcdFx0XHQnZmFsbF90b19sYW5kJyxcclxuXHRcdFx0XHRcdCdsYW5kX3RvX3J1bicsXHJcblx0XHRcdFx0XHQnZGllJyBdICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBBZGp1c3RlZCBmcm9tIG5vcm1hbCBCZW4ncyBjb2xsaXNpb24gcmVjdC5cclxuXHRcdFx0dGhpcy5jb2xsaXNpb25SZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCAtMzUsIC04MCwgNzAsIDgwICk7XHRcclxuXHJcblx0XHRcdC8vIFRoZSBuZXcgY29sbGlzaW9uIHJlY3QgaXMgYmlnZ2VyIHNvIGl0IG1pZ2h0IGdvIHRocm91Z2ggYSB3YWxsLCBpZ25vcmluZyB0aGUgY29sbGlzaW9uLiBTd2l0Y2ggZGlyZWN0aW9uIGlmIHRoZSBuZXcgY29sbGlzaW9uIHJlY3QgaW50ZXJzZWN0cyBhIHdhbGwuXHJcblx0XHRcdGZvciAoIHZhciBiID0gMDsgYiA8IHRoaXMucm9vbS5ibG9ja3MubGVuZ3RoOyBiKysgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGJsb2NrQXV4ID0gdGhpcy5yb29tLmJsb2Nrc1tiXTtcclxuXHRcdFx0XHJcblx0XHRcdFx0aWYgKCBibG9ja0F1eC5pc0dhcmJhZ2UgKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZiAoIHRoaXMuZGlyZWN0aW9uID4gMCAmJiAhYmxvY2tBdXguY29uZmlnLmNvbGxpc2lvbnMubGVmdCApIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmICggdGhpcy5kaXJlY3Rpb24gPCAwICYmICFibG9ja0F1eC5jb25maWcuY29sbGlzaW9ucy5yaWdodCApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHR2YXIgaXNJbnRlcnNlY3Rpb24gPSB0aGlzLnJlY3RSZWN0Q29sbGlzaW9uKCBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0eCAgICAgIDogYmxvY2tBdXgueCArIGJsb2NrQXV4LmNvbmZpZy54LFxyXG5cdFx0XHRcdFx0XHR5ICAgICAgOiBibG9ja0F1eC55ICsgYmxvY2tBdXguY29uZmlnLnksXHJcblx0XHRcdFx0XHRcdHdpZHRoICA6IGJsb2NrQXV4LmNvbmZpZy53aWR0aCxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0IDogYmxvY2tBdXguY29uZmlnLmhlaWdodFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0eCAgICAgIDogdGhpcy54ICsgdGhpcy5jb2xsaXNpb25SZWN0LngsXHJcblx0XHRcdFx0XHRcdHkgICAgICA6IHRoaXMueSArIHRoaXMuY29sbGlzaW9uUmVjdC55LFxyXG5cdFx0XHRcdFx0XHR3aWR0aCAgOiB0aGlzLmNvbGxpc2lvblJlY3Qud2lkdGgsXHJcblx0XHRcdFx0XHRcdGhlaWdodCA6IHRoaXMuY29sbGlzaW9uUmVjdC5oZWlnaHRcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHJcblx0XHRcdFx0aWYgKCBpc0ludGVyc2VjdGlvbiApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zd2l0Y2hEaXJlY3Rpb24oKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0dGhpcy5zcGluZS5za2VsZXRvbi5zZXRUb1NldHVwUG9zZSgpO1xyXG5cdHRoaXMuc3BpbmUuc2tlbGV0b24uc2V0U2tpbiggbnVsbCApO1xyXG5cdHRoaXMuc3BpbmUuc2tlbGV0b24uc2V0U2tpbkJ5TmFtZSggXCJkZWZhdWx0XCIgKTtcclxuXHR0aGlzLnNwaW5lLmF1dG9VcGRhdGUgPSBmYWxzZTtcclxuXHRcclxuXHR0aGlzLl9zcGluZUNvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5zcGluZSApO1xyXG5cdFxyXG5cdC8vIFNldCBpbml0aWFsIGFuaW1hdGlvbi5cclxuXHR2YXIgYW5pbUlkID0gdGhpcy5jdXJyZW50QW5pbWF0aW9uO1xyXG5cdHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IG51bGw7XHJcblx0aWYgKCAhdGhpcy5zcGluZS5zcGluZURhdGEuZmluZEFuaW1hdGlvbiggYW5pbUlkICkgKVxyXG5cdFx0YW5pbUlkID0gXCJydW5fbGV2ZWxcIjtcclxuXHR0aGlzLnNldEFuaW1hdGlvbiggYW5pbUlkLCB0cnVlICk7XHJcblx0XHJcblx0Ly8gVXBkYXRlIHRoZSBzcGluZSBiZWZvcmUgdGhlIGdhbWUgaXMgcGF1c2VkLCBzbyB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIGFuaW1hdGlvbiBpcyB2aXNpYmxlLlxyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyLnNjYWxlLnggPSBNYXRoLmFicyggdGhpcy5fc3BpbmVDb250YWluZXIuc2NhbGUueCApICogTWF0aC5zaWduKCB0aGlzLmRpcmVjdGlvbiApO1xyXG5cdHRoaXMuc3BpbmUudXBkYXRlKCBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKiB0aGlzLnNwaW5lU3BlZWQgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5BdmF0YXIucHJvdG90eXBlLm9uVHJhbnNmb3JtYXRpb25FeHBpcmVkID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Ly8gU2Z4LlxyXG5cdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwic2Z4X29tbml0cml4X3RyYW5zZm9ybV9iYWNrXzAwXCIgKTtcclxuXHJcblx0dGhpcy50cmFuc2Zvcm1hdGlvbiA9IG51bGw7XHJcblx0XHJcblx0Ly8gR28gYmFjayB0byBub3JtYWwgQmVuLlxyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLnNwaW5lICk7XHJcblxyXG5cdC8vIFRPRE86IENvbnNpZGVyIGlmIHRoZXJlIGlzIGEgbW9yZSBlZmZpY2llbnQgd2F5IG9mIHJlcGxhY2luZyB0aGUgc3BpbmUuXHJcblx0dGhpcy5zcGluZSA9IG5ldyBQSVhJLnNwaW5lLlNwaW5lKCBDb21tb24uY2hhcmFjdGVyQW5pbWF0aW9uRGF0YS5jaGFyX2JlbiApO1xyXG5cdHRoaXMuc3BpbmUuc2tlbGV0b24uc2V0VG9TZXR1cFBvc2UoKTtcclxuXHR0aGlzLnNwaW5lLnNrZWxldG9uLnNldFNraW4oIG51bGwgKTtcclxuXHR0aGlzLnNwaW5lLnNrZWxldG9uLnNldFNraW5CeU5hbWUoIFwiZGVmYXVsdFwiICk7XHJcblx0dGhpcy5fc3BpbmVDb250YWluZXIueCA9IDA7XHJcblx0dGhpcy5fc3BpbmVDb250YWluZXIueSA9IDM7XHJcblx0dGhpcy5zcGluZS5hdXRvVXBkYXRlID0gZmFsc2U7XHJcblx0dGhpcy5fc3BpbmVDb250YWluZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMC4zNSwgMC4zNSApO1xyXG5cdFxyXG5cdHRoaXMuc2V0U3BpbmVEYXRhTWl4KCB0aGlzLlNIQVJFRF9BTklNQVRJT05fSURTICk7XHJcblx0XHJcblx0dGhpcy5fc3BpbmVDb250YWluZXIuYWRkQ2hpbGQoIHRoaXMuc3BpbmUgKTtcclxuXHR2YXIgYW5pbUlkID0gdGhpcy5jdXJyZW50QW5pbWF0aW9uO1xyXG5cdC8vIERlZmF1bHQgYW5pbWF0aW9uIHdoZW4gdGhlIGN1cnJlbnQgb25lIGlzIG5vdCBzdXBwb3J0ZWQgYnkgQmVuJ3Mgc3BpbmUuXHJcblx0aWYgKCB0aGlzLlNIQVJFRF9BTklNQVRJT05fSURTLmluZGV4T2YoIGFuaW1JZCApIDwgMCApXHJcblx0XHRhbmltSWQgPSBcInJ1bl9sZXZlbFwiO1xyXG5cdHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IG51bGw7XHJcblx0dGhpcy5zZXRBbmltYXRpb24oIGFuaW1JZCwgdHJ1ZSApO1xyXG5cdFxyXG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSggLTEwLCAtNDAsIDIwLCA0MCApO1xyXG59XHJcblxyXG5cclxuTWF0aC5FUFNJTE9OID0gMWUtNjtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHR3byBmbG9hdGluZy1wb2ludCB2YWx1ZXMgZjEgYW5kIGYyIGFyZSBjbG9zZSBlbm91Z2ggdG9nZXRoZXIgdGhhdCB0aGV5IGNhbiBiZSBjb25zaWRlcmVkIGVxdWFsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZjFcclxuICogQHBhcmFtIHtudW1iZXJ9IGYyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuTWF0aC5jbG9zZUVub3VnaCA9IGZ1bmN0aW9uKGYxLCBmMilcclxue1xyXG5cdHJldHVybiBNYXRoLmFicygoZjEgLSBmMikgLyAoKGYyID09IDAuMCkgPyAxLjAgOiBmMikpIDwgTWF0aC5FUFNJTE9OO1xyXG59XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUyAvIFNFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRBdmF0YXIucHJvdG90eXBlLCBcclxuXHRcInNwaW5lQ29udGFpbmVyXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3NwaW5lQ29udGFpbmVyOyB9IH0gKTtcclxuXHRcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdEF2YXRhci5wcm90b3R5cGUsIFxyXG5cdFwiY3VycmVudFNwaW5lQW5pbWF0aW9uXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuc3BpbmUuc3RhdGUudHJhY2tzWyAwIF0uYW5pbWF0aW9uOyB9IH0gKTsiLCJ2YXIgQ29tbW9uICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxudmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKFwiLi9HYW1lT2JqZWN0XCIpO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gQmxvY2soIHJvb20sIHRpbGVJZCwgY29uZmlnIClcclxue1xyXG5cdHRoaXMucm9vbSAgID0gcm9vbTtcclxuXHR0aGlzLnRpbGVJZCA9IHRpbGVJZDtcclxuXHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cdEdhbWVPYmplY3QuY2FsbCh0aGlzLCBcImJsb2NrXCIpO1xyXG5cdFxyXG5cdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQmxvY2s7XHJcbkJsb2NrLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR2FtZU9iamVjdC5wcm90b3R5cGUpO1xyXG5CbG9jay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCbG9jaztcclxuXHJcbkJsb2NrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWyd3aGl0ZVNxdWFyZSddKTtcclxuXHR0aGlzLnNwcml0ZS53aWR0aCAgPSB0aGlzLmNvbmZpZy53aWR0aDtcclxuXHR0aGlzLnNwcml0ZS5oZWlnaHQgPSB0aGlzLmNvbmZpZy5oZWlnaHQ7XHJcblx0dGhpcy5zcHJpdGUueCA9IHRoaXMuY29uZmlnLng7XHJcblx0dGhpcy5zcHJpdGUueSA9IHRoaXMuY29uZmlnLnk7XHJcblx0XHJcblx0dGhpcy5jb2xsaXNpb25SZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIHRoaXMuc3ByaXRlLndpZHRoLCB0aGlzLnNwcml0ZS5oZWlnaHQpO1xyXG5cdFxyXG5cdGlmKHRoaXMucm9vbS5kZWJ1ZylcclxuXHR7XHJcblx0XHR0aGlzLnNwcml0ZS50aW50ID0gMHhmZjAwMDA7XHJcblx0XHR0aGlzLnNwcml0ZS5hbHBoYSA9IDAuMjU7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5kcmF3Q29sbGlzaW9uKCk7XHJcblx0fVxyXG59IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIFRyYW5zZm9ybWF0aW9uID0gcmVxdWlyZSggXCIuL1RyYW5zZm9ybWF0aW9uXCIgKTtcclxudmFyIEJvc3NTaG90ID0gcmVxdWlyZSggXCIuL0Jvc3NTaG90XCIgKTtcclxuXHJcbnZhciBnX2Jvc3NHdW4gPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gQm9zc0d1biggYm9zcywgcm9vbSApXHJcbntcclxuXHQvLyBQYXJlbnQuXHJcblx0T2JqZWN0LmNhbGwoIHRoaXMgKTtcdFxyXG5cdFxyXG5cdFxyXG5cdC8vIENvbnN0YW50cy5cclxuXHR0aGlzLlNUQVRFX1JFTE9BRElORyA9IDA7XHJcblx0dGhpcy5TVEFURV9TSE9PVElORyA9IDE7XHJcblx0dGhpcy5SRUxPQURJTkdfVElNRV9SQU5HRSA9IFsgNCwgNiBdO1x0XHJcblx0XHJcblx0XHJcblx0Ly8gQXR0cmlidXRlcy5cclxuXHR0aGlzLl9jdXJyZW50UmVsb2FkaW5nVGltZSA9IHAzLlV0aWxzLnJhbmRvbUludCggdGhpcy5SRUxPQURJTkdfVElNRV9SQU5HRVsgMCBdLCB0aGlzLlJFTE9BRElOR19USU1FX1JBTkdFWyAxIF0gKTtcclxuXHR0aGlzLl9yZWxvYWRpbmdUaW1lciA9IDA7XHJcblx0dGhpcy5fc3RhdGUgPSB0aGlzLlNUQVRFX1JFTE9BRElORztcclxuXHR0aGlzLl9yb29tID0gcm9vbTtcclxuXHR0aGlzLl9ib3NzID0gYm9zcztcclxuXHRcclxuXHRnX2Jvc3NHdW4gPSB0aGlzO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQm9zc0d1bjtcclxuQm9zc0d1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBPYmplY3QucHJvdG90eXBlICk7XHJcbkJvc3NHdW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQm9zc0d1bjtcclxuXHJcblxyXG5Cb3NzR3VuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcdFxyXG5cdGlmICggdGhpcy5fc3RhdGUgPT0gdGhpcy5TVEFURV9SRUxPQURJTkcgKVxyXG5cdHtcclxuXHRcdHRoaXMuX3JlbG9hZGluZ1RpbWVyICs9IHAzLlRpbWVzdGVwLmRlbHRhVGltZTsgXHJcblx0XHRpZiAoIHRoaXMuX3JlbG9hZGluZ1RpbWVyID4gdGhpcy5fY3VycmVudFJlbG9hZGluZ1RpbWUgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9ib3NzLnNwaW5lLnN0YXRlLnNldEFuaW1hdGlvbkJ5TmFtZSggMSwgXCJzaG9vdFwiLCBmYWxzZSApO1xyXG5cdFx0XHR0aGlzLl9ib3NzLnNwaW5lLnN0YXRlLm9uRXZlbnQgPSBcclxuXHRcdFx0XHRmdW5jdGlvbiggdHJhY2ssIGV2ZW50ICkgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCBldmVudC5kYXRhLm5hbWUgPT0gXCJzaG9vdFwiIClcclxuXHRcdFx0XHRcdFx0Z19ib3NzR3VuLnNob290KCk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFxyXG5cdFx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuU1RBVEVfU0hPT1RJTkc7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5Cb3NzR3VuLnByb3RvdHlwZS5zaG9vdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdC8vIFNmeC5cclxuXHQvL0F1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFsgXCJzZnhfb3ZlcmZsb3dfc2hvb3Rfd2F0ZXJfc2hvcnRfMDBcIiwgXCJzZnhfb3ZlcmZsb3dfc2hvb3Rfd2F0ZXJfc2hvcnRfMDFcIiBdICk7XHJcblxyXG5cdC8vIEZpbmQgc2hvdCBvcmlnaW4uXHJcblx0dmFyIGJvc3NEaXJlY3Rpb24gPSBNYXRoLnNpZ24oIHRoaXMuX2Jvc3Muc3BpbmVDb250YWluZXIuc2NhbGUueCApO1x0XHRcdFx0XHRcdFx0XHJcblx0dmFyIHNob3RPcmlnaW4gPSBudWxsO1x0XHJcblx0aWYgKCBib3NzRGlyZWN0aW9uID4gMCApXHJcblx0e1xyXG5cdFx0c2hvdE9yaWdpbiA9IG5ldyBQSVhJLlBvaW50KFxyXG5cdFx0XHR0aGlzLl9ib3NzLnggKyB0aGlzLl9ib3NzLmNvbGxpc2lvblJlY3QueCArIHRoaXMuX2Jvc3MuY29sbGlzaW9uUmVjdC53aWR0aCxcclxuXHRcdFx0dGhpcy5fYm9zcy55ICsgdGhpcy5fYm9zcy5jb2xsaXNpb25SZWN0LnkgKyB0aGlzLl9ib3NzLnNraW5XaWR0aCArIHRoaXMuX2Jvc3MuY29sbGlzaW9uUmVjdC5oZWlnaHQgKiAuNSApO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0c2hvdE9yaWdpbiA9IG5ldyBQSVhJLlBvaW50KFxyXG5cdFx0XHR0aGlzLl9ib3NzLnggKyB0aGlzLl9ib3NzLmNvbGxpc2lvblJlY3QueCxcclxuXHRcdFx0dGhpcy5fYm9zcy55ICsgdGhpcy5fYm9zcy5jb2xsaXNpb25SZWN0LnkgKyB0aGlzLl9ib3NzLnNraW5XaWR0aCArIHRoaXMuX2Jvc3MuY29sbGlzaW9uUmVjdC5oZWlnaHQgKiAuNSApO1xyXG5cdH1cdFxyXG5cclxuXHQvLyBTaG9vdCBhdCBlbmVteS5cdFx0XHRcdFx0XHRcdFxyXG5cdHZhciBib3NzU2hvdCA9IG5ldyBCb3NzU2hvdCggYm9zc0RpcmVjdGlvbiwgdGhpcy5fcm9vbSApO1xyXG5cdGJvc3NTaG90LmluaXQoIHNob3RPcmlnaW4ueCwgc2hvdE9yaWdpbi55ICk7XHJcblx0XHJcblx0dGhpcy5fcm9vbS5vYmplY3RzLmRhbmdlcnMucHVzaCggYm9zc1Nob3QgKTtcclxuXHR0aGlzLl9yb29tLmFkZENoaWxkKCBib3NzU2hvdCApO1xyXG5cdFxyXG5cdHRoaXMuX2N1cnJlbnRSZWxvYWRpbmdUaW1lID0gcDMuVXRpbHMucmFuZG9tSW50KCB0aGlzLlJFTE9BRElOR19USU1FX1JBTkdFWyAwIF0sIHRoaXMuUkVMT0FESU5HX1RJTUVfUkFOR0VbIDEgXSApO1xyXG5cdHRoaXMuX3JlbG9hZGluZ1RpbWVyID0gMDtcclxuXHR0aGlzLl9zdGF0ZSA9IHRoaXMuU1RBVEVfUkVMT0FESU5HO1xyXG59IiwidmFyIENvbW1vbiA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIEdhbWVPYmplY3QgPSByZXF1aXJlKCBcIi4vR2FtZU9iamVjdFwiICk7XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBCb3NzU2hvdCggZGlyZWN0aW9uLCByb29tIClcclxue1xyXG5cdEdhbWVPYmplY3QuY2FsbCggdGhpcywgXCJCb3NzU2hvdFwiICk7XHJcblx0XHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cdFxyXG5cdHRoaXMuX3Nwcml0ZSA9IG51bGw7XHJcblx0dGhpcy5fcm9vbSA9IHJvb207XHJcblx0dGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cdHRoaXMuX2hTcGVlZCA9IDI1MDsgLy8gcHgvc1xyXG5cdHRoaXMuX2NvbGxpc2lvbnMgPSB7XHJcblx0XHRcdGxlZnQgICAgICAgICA6IGZhbHNlLFxyXG5cdFx0XHRyaWdodCAgICAgICAgOiBmYWxzZVxyXG5cdFx0fTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEJvc3NTaG90O1xyXG5Cb3NzU2hvdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBHYW1lT2JqZWN0LnByb3RvdHlwZSApO1xyXG5Cb3NzU2hvdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCb3NzU2hvdDtcclxuXHJcbkJvc3NTaG90LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oIHgsIHkgKVxyXG57XHJcblx0Ly8gU3Bhd24gcG9zaXRpb25cclxuXHR0aGlzLnggPSB4O1xyXG5cdHRoaXMueSA9IHk7XHRcclxuXHJcblx0Ly8gU3ByaXRlLlxyXG5cdHRoaXMuX3Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwicHJvamVjdGlsZV9zdGlua2ZseVwiICkgKTtcclxuXHR0aGlzLl9zcHJpdGUuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XHJcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fc3ByaXRlICk7XHRcclxuXHR0aGlzLl9zcHJpdGUuc2NhbGUueCA9IE1hdGguYWJzKCB0aGlzLl9zcHJpdGUuc2NhbGUueCApICogdGhpcy5fZGlyZWN0aW9uO1xyXG5cclxuXHQvLyBDb2xsaWRlclxyXG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSggLXRoaXMuX3Nwcml0ZS53aWR0aCAqIDAuNSwgLXRoaXMuX3Nwcml0ZS5oZWlnaHQgKiAwLjUsIHRoaXMuX3Nwcml0ZS53aWR0aCwgdGhpcy5fc3ByaXRlLmhlaWdodCApO1xyXG5cdHRoaXMudGFyZ2V0Q29sbGlzaW9uUmVjdCA9IG51bGw7XHJcblx0Ly90aGlzLmRyYXdDb2xsaXNpb24oKTtcclxufVxyXG5cclxuQm9zc1Nob3QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciBkeCA9IHRoaXMuX2hTcGVlZCAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZSAqIHRoaXMuX2RpcmVjdGlvbjtcclxuXHJcblx0Ly8gUmVzZXQgY29sbGlzaW9uc1xyXG5cdHRoaXMuX2NvbGxpc2lvbnMubGVmdCAgICAgICAgID0gZmFsc2U7XHJcblx0dGhpcy5fY29sbGlzaW9ucy5yaWdodCAgICAgICAgPSBmYWxzZTtcclxuXHJcblx0Ly8gQmxvY2tzIGhvcml6b250YWwgY29sbGlzaW9uc1xyXG5cdGlmICggZHggIT0gMCApXHJcblx0e1xyXG5cdFx0aWYgKCBkeCA+IDAgKVxyXG5cdFx0XHR2YXIgcmF5T3JpZ2lucyA9IHRoaXMuZ2V0UmlnaHRSYXlPcmlnaW5zKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHZhciByYXlPcmlnaW5zID0gdGhpcy5nZXRMZWZ0UmF5T3JpZ2lucygpO1xyXG5cclxuXHRcdHZhciByYXkgPSBuZXcgUElYSS5Qb2ludCggZHggKyB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbiggZHggKSwgMCApO1xyXG5cdFx0Zm9yICggdmFyIHIgPSAwOyByIDwgcmF5T3JpZ2lucy5sZW5ndGggJiYgZHggIT0gMDsgcisrIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gTW92ZW1lbnQgcmF5IHZlcnRpY2VzXHJcblx0XHRcdHZhciBhdmF0YXJQMSA9IHJheU9yaWdpbnNbIHIgXTtcclxuXHRcdFx0Ly8gYXZhdGFyUDEueSArPSBtb3ZlbWVudC55O1xyXG5cdFx0XHR2YXIgYXZhdGFyUDIgPSBuZXcgUElYSS5Qb2ludCggYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkgKTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBiID0gMDsgYiA8IHRoaXMuX3Jvb20uYmxvY2tzLmxlbmd0aDsgYisrIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICggZHggPiAwICYmICF0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy5jb2xsaXNpb25zLmxlZnQgKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZiAoIGR4IDwgMCAmJiAhdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcuY29sbGlzaW9ucy5yaWdodCApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHQvLyBTZWdtZW50IHZlcnRpY2VzXHJcblx0XHRcdFx0dmFyIGJsb2NrUDEgPSBuZXcgUElYSS5Qb2ludCggdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcueCArICggZHggPCAwID8gdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcud2lkdGggOiAwICksIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLnkgKTtcclxuXHRcdFx0XHR2YXIgYmxvY2tQMiA9IG5ldyBQSVhJLlBvaW50KCBibG9ja1AxLngsIGJsb2NrUDEueSArIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmhlaWdodCApO1xyXG5cclxuXHRcdFx0XHQvLyBMaW5lLWxpbmUgY29sbGlzaW9uIGRldGVjdGlvblxyXG5cdFx0XHRcdHZhciBpbnRlcnNlY3Rpb24gPSB0aGlzLmxpbmVMaW5lQ29sbGlzaW9uKCBhdmF0YXJQMSwgYXZhdGFyUDIsIGJsb2NrUDEsIGJsb2NrUDIgKTtcclxuXHRcdFx0XHRpZiAoIGludGVyc2VjdGlvbiApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGRpc3RhbmNlID0gIGludGVyc2VjdGlvbi54IC0gYXZhdGFyUDEueCAtIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKCBkeCApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggZHggPiAwIClcclxuXHRcdFx0XHRcdFx0dGhpcy5fY29sbGlzaW9ucy5yaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMuX2NvbGxpc2lvbnMubGVmdCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0ZHggPSBkaXN0YW5jZTtcclxuXHJcblx0XHRcdFx0XHQvLyBBdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcclxuXHRcdFx0XHRcdGlmICggTWF0aC5jbG9zZUVub3VnaCggZHgsIDAgKSApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGR4ID0gMDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gRGVjcmVhc2UgdGhlIGxlbmd0aCBvZiBmdXR1cmUgcmF5Y2FzdHNcclxuXHRcdFx0XHRcdGF2YXRhclAyLnggLT0gcmF5Lng7XHJcblx0XHRcdFx0XHRyYXkueCA9IGRpc3RhbmNlICsgdGhpcy5za2luV2lkdGggKiBNYXRoLnNpZ24oIGR4ICk7XHJcblx0XHRcdFx0XHRhdmF0YXJQMi54ICs9IHJheS54O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvLyBEZXN0cm95IHRoZSBzaG90LlxyXG5cdGlmICggdGhpcy5fY29sbGlzaW9ucy5yaWdodCB8fCB0aGlzLl9jb2xsaXNpb25zLmxlZnQgKVxyXG5cdFx0dGhpcy5pc0dhcmJhZ2UgPSB0cnVlO1xyXG5cdGlmICggIXRoaXMuaXNHYXJiYWdlIClcclxuXHRcdHRoaXMueCArPSBkeDtcclxufVxyXG5cclxuTWF0aC5FUFNJTE9OID0gMWUtNjtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHR3byBmbG9hdGluZy1wb2ludCB2YWx1ZXMgZjEgYW5kIGYyIGFyZSBjbG9zZSBlbm91Z2ggdG9nZXRoZXIgdGhhdCB0aGV5IGNhbiBiZSBjb25zaWRlcmVkIGVxdWFsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZjFcclxuICogQHBhcmFtIHtudW1iZXJ9IGYyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuTWF0aC5jbG9zZUVub3VnaCA9IGZ1bmN0aW9uKGYxLCBmMilcclxue1xyXG5cdHJldHVybiBNYXRoLmFicygoZjEgLSBmMikgLyAoKGYyID09IDAuMCkgPyAxLjAgOiBmMikpIDwgTWF0aC5FUFNJTE9OO1xyXG59IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIFBvd2VydXAgPSByZXF1aXJlKCBcIi4vUG93ZXJ1cFwiICk7XHJcbnZhciBDYW5ub25ib2x0VHJhbnNmb3JtYXRpb24gPSByZXF1aXJlKCBcIi4vQ2Fubm9uYm9sdFRyYW5zZm9ybWF0aW9uXCIgKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBDYW5ub25ib2x0UG93ZXJ1cCggcm9vbSApXHJcbntcclxuXHRQb3dlcnVwLmNhbGwoIHRoaXMsIFwiY2Fubm9uYm9sdF9wb3dlcnVwXCIsIFwiaWNvbl9jYW5ub25ib2x0XCIsIHJvb20gKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbm5vbmJvbHRQb3dlcnVwO1xyXG5DYW5ub25ib2x0UG93ZXJ1cC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBQb3dlcnVwLnByb3RvdHlwZSApO1xyXG5DYW5ub25ib2x0UG93ZXJ1cC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDYW5ub25ib2x0UG93ZXJ1cDtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQ2Fubm9uYm9sdFBvd2VydXAucHJvdG90eXBlLnBpY2t1cCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGlmICggdGhpcy50YWtlbiApIHJldHVybjtcclxuXHRcclxuXHRQb3dlcnVwLnByb3RvdHlwZS5waWNrdXAuY2FsbCggdGhpcyApO1xyXG5cdFxyXG5cdHRoaXMuX3Jvb20ubGV2ZWwuc2V0VHJhbnNmb3JtYXRpb24oIG5ldyBDYW5ub25ib2x0VHJhbnNmb3JtYXRpb24oIHRoaXMuX3Jvb20gKSApO1xyXG59IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIFRyYW5zZm9ybWF0aW9uID0gcmVxdWlyZSggXCIuL1RyYW5zZm9ybWF0aW9uXCIgKTtcclxudmFyIFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSggXCIuL1BhcnRpY2xlU3lzdGVtXCIgKTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIENhbm5vbmJvbHRUcmFuc2Zvcm1hdGlvbiggcm9vbSApXHJcbntcclxuXHRUcmFuc2Zvcm1hdGlvbi5jYWxsKCB0aGlzLCByb29tICk7XHJcblx0dGhpcy5faWQgPSB0aGlzLlRSQU5TRk9STUFUSU9OX0lEX0NBTk5PTkJPTFQ7XHJcblx0XHJcblx0Ly8gRXZlbnRzLlxyXG5cdHRoaXMuc2lnbmFscy5vbkJsb2NrRGVzdHJveWVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcblx0dGhpcy5zaWduYWxzLm9uQmxvY2tEZXN0cm95ZWQuYWRkKCB0aGlzLl9yb29tLm9uQmxvY2tEZXN0cm95ZWQsIHRoaXMuX3Jvb20gKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbm5vbmJvbHRUcmFuc2Zvcm1hdGlvbjtcclxuQ2Fubm9uYm9sdFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSApO1xyXG5DYW5ub25ib2x0VHJhbnNmb3JtYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2Fubm9uYm9sdFRyYW5zZm9ybWF0aW9uO1xyXG5cclxuXHJcbkNhbm5vbmJvbHRUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHRcclxuXHRUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUudXBkYXRlLmNhbGwoIHRoaXMgKTtcclxuXHRcclxuXHR2YXIgYXZhdGFyID0gdGhpcy5fcm9vbS5hdmF0YXI7XHJcblx0XHJcblx0Ly8gRGVzdHJveSBjcmFja2VkIHdhbGxzIHdoaWxlIGp1bXBpbmcuXHJcblx0aWYgKCBhdmF0YXIuY3VycmVudEFuaW1hdGlvbiA9PSBcImp1bXBcIiBcclxuXHRcdHx8IGF2YXRhci5jdXJyZW50QW5pbWF0aW9uID09IFwiZmFsbFwiXHJcblx0XHR8fCBhdmF0YXIuY3VycmVudEFuaW1hdGlvbiA9PSBcInRydWVcIiApXHJcblx0e1xyXG5cdFx0Ly8gSW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIGNvbGxpc2lvbiByZWN0IHNvIGl0IGlzIG5vdCBpZ25vcmVkIHdoZW4gcmF5Y2FzdGluZyBmb3Igc3VyZmFjZSBjb2xsaXNpb25zLlxyXG5cdFx0dmFyIGF2YXRhckNvbGxSZWN0ID0gYXZhdGFyLmNvbGxpc2lvblJlY3Q7XHJcblx0XHRjb25zdCBDT0xMX1JFQ1RfTUFSR0lOID0gMTA7XHJcblx0XHRhdmF0YXJDb2xsUmVjdC54IC09IENPTExfUkVDVF9NQVJHSU4gKiAuNTtcclxuXHRcdGF2YXRhckNvbGxSZWN0LnkgLT0gQ09MTF9SRUNUX01BUkdJTiAqIC41O1xyXG5cdFx0YXZhdGFyQ29sbFJlY3Qud2lkdGggKz0gQ09MTF9SRUNUX01BUkdJTjsgXHJcblx0XHRhdmF0YXJDb2xsUmVjdC5oZWlnaHQgKz0gQ09MTF9SRUNUX01BUkdJTjtcclxuXHRcdFxyXG5cdFx0dmFyIGFyckNyYWNrZWRCbG9jayA9IFtdO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fcm9vbS5jcmFja2VkV2FsbEJsb2Nrcy5sZW5ndGg7ICsraSApXHJcblx0XHR7XHJcblx0XHRcdHZhciBjcmFja2VkQmxvY2tBdXggPSB0aGlzLl9yb29tLmNyYWNrZWRXYWxsQmxvY2tzWyBpIF07XHJcblx0XHRcdGlmICggdGhpcy5fcm9vbS5hdmF0YXIuY29sbGlzaW9uKCBjcmFja2VkQmxvY2tBdXggKSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjcmFja2VkQmxvY2tBdXguaXNHYXJiYWdlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IDg7ICsraiApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5fcm9vbS5sYXllcnNbIFwicGxhdGZvcm1zXCIgXS52ZXJ0aWNlc1sgaiArIDggKiBjcmFja2VkQmxvY2tBdXguY29uZmlnLm1lc2hRdWFkSW5kZXggXSA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLl9yb29tLmxheWVyc1sgXCJwbGF0Zm9ybXNcIiBdLnV2c1sgaiArIDggKiBjcmFja2VkQmxvY2tBdXguY29uZmlnLm1lc2hRdWFkSW5kZXggXSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIFZmeC5cclxuXHRcdFx0XHR2YXIgcHMgPSBuZXcgUGFydGljbGVTeXN0ZW0oIFxyXG5cdFx0XHRcdFx0WyBcInBhcnRpY2xlX3JvY2tfMDAxXCIsXHJcblx0XHRcdFx0XHRcInBhcnRpY2xlX3JvY2tfMDAyXCIsXHJcblx0XHRcdFx0XHRcInBhcnRpY2xlX3JvY2tfMDAzXCIsXHJcblx0XHRcdFx0XHRcInBhcnRpY2xlX3JvY2tfMDA0XCIsXHJcblx0XHRcdFx0XHRcInBhcnRpY2xlX3JvY2tfMDA1XCIgXSwgXHJcblx0XHRcdFx0XHRcInBhcnRpY2xlX2VtaXR0ZXJfd2FsbF9kZXN0cm95XCIgKTtcclxuXHRcdFx0XHRwcy5pbml0KCBjcmFja2VkQmxvY2tBdXguY29uZmlnLngsIGNyYWNrZWRCbG9ja0F1eC5jb25maWcueSApO1xyXG5cdFx0XHRcdHBzLnNjYWxlLnggPSBNYXRoLnNpZ24oIGF2YXRhci52ZWxvY2l0eS54ICk7XHJcblx0XHRcdFx0dGhpcy5fcm9vbS5hZGRDaGlsZCggcHMgKTtcclxuXHRcdFx0XHR0aGlzLl9yb29tLnBhcnRpY2xlU3lzdGVtcy5wdXNoKCBwcyApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhcnJDcmFja2VkQmxvY2sucHVzaCggY3JhY2tlZEJsb2NrQXV4ICk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIFBsYXkgcm9sbCBhbmltYXRpb24gaWYgYW55IGJsb2NrIHdhcyByZW1vdmVkLlxyXG5cdFx0aWYgKCB0aGlzLl9yb29tLmNyYWNrZWRXYWxsQmxvY2tzLmxlbmd0aCAhPSBhcnJDcmFja2VkQmxvY2subGVuZ3RoIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gU2Z4LlxyXG5cdFx0XHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInNmeF9jYW5ub25ib2x0X3JvbGxfanVtcF8wMFwiICk7XHJcblx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFsgXCJzZnhfZmxvb3JfY3J1c2hcIiwgXCJzZnhfd2FsbF9jcnVzaFwiIF0gKTtcdFxyXG5cdFx0XHJcblx0XHRcdGF2YXRhci5zZXRBbmltYXRpb24oIFwicm9sbFwiLCB0cnVlICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBVcGRhdGUgcm9vbSByZXN1bHQuXHJcblx0XHRcdHRoaXMuc2lnbmFscy5vbkJsb2NrRGVzdHJveWVkLmRpc3BhdGNoKCB0aGlzLl9yb29tLmNyYWNrZWRXYWxsQmxvY2tzLmxlbmd0aCAtIGFyckNyYWNrZWRCbG9jay5sZW5ndGggKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gVXBkYXRlIHJlbWFpbmluZyBjcmFja2VkIHdhbGwgYmxvY2tzLlxyXG5cdFx0dGhpcy5fcm9vbS5jcmFja2VkV2FsbEJsb2NrcyA9IGFyckNyYWNrZWRCbG9jaztcclxuXHRcdFxyXG5cdFx0Ly8gUmVzdG9yZSBjb2xsaXNpb24gcmVjdC5cclxuXHRcdGF2YXRhckNvbGxSZWN0LnggKz0gQ09MTF9SRUNUX01BUkdJTiAqIC41O1xyXG5cdFx0YXZhdGFyQ29sbFJlY3QueSArPSBDT0xMX1JFQ1RfTUFSR0lOICogLjU7XHJcblx0XHRhdmF0YXJDb2xsUmVjdC53aWR0aCAtPSBDT0xMX1JFQ1RfTUFSR0lOOyBcclxuXHRcdGF2YXRhckNvbGxSZWN0LmhlaWdodCAtPSBDT0xMX1JFQ1RfTUFSR0lOO1xyXG5cdH1cclxufVxyXG5cclxuQ2Fubm9uYm9sdFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS5vbkVuZW15Q29sbGlzaW9uID0gZnVuY3Rpb24oIGVuZW15IClcclxue1xyXG5cdHZhciByZXN1bHQgPSB0cnVlO1xyXG5cdFxyXG5cdHZhciBhdmF0YXIgPSB0aGlzLl9yb29tLmF2YXRhcjtcclxuXHRcclxuXHQvLyBLaWxsIHRoZSBlbmVteSB3aGlsZSBqdW1waW5nLlxyXG5cdGlmICggYXZhdGFyLmN1cnJlbnRBbmltYXRpb24gPT0gXCJqdW1wXCIgXHJcblx0XHR8fCBhdmF0YXIuY3VycmVudEFuaW1hdGlvbiA9PSBcImZhbGxcIlxyXG5cdFx0fHwgYXZhdGFyLmN1cnJlbnRBbmltYXRpb24gPT0gXCJyb2xsXCIgKVxyXG5cdHtcdFxyXG5cdFx0Ly8gU2Z4LlxyXG5cdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfY2Fubm9uYm9sdF9yb2xsX2p1bXBfMDBcIiApO1xyXG5cdFxyXG5cdFx0YXZhdGFyLnNldEFuaW1hdGlvbiggXCJyb2xsXCIsIHRydWUgKTtcdFx0XHJcblx0XHJcblx0XHRlbmVteS5raWxsKCk7XHRcclxuXHRcdHJlc3VsdCA9IGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZShcIi4vR2FtZU9iamVjdFwiKTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIENvaW4oIHJvb20gKVxyXG57XHJcblx0R2FtZU9iamVjdC5jYWxsKCB0aGlzLCBcImNvaW5cIiApO1xyXG5cdFxyXG5cdHRoaXMuX3Jvb20gPSByb29tO1x0XHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1x0XHJcblx0dGhpcy50YWtlbiA9IGZhbHNlO1xyXG5cdFx0XHJcblx0dGhpcy5waWNrdXBQUyAgICAgID0gbmV3IGNsb3Vka2lkLkVtaXR0ZXIodGhpcywgW3RoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGlja3VwXzAwXCIpXSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJwYXJ0aWNsZV9jb2luX2NvbGxlY3RfYnVyc3RcIikpO1xyXG5cdHRoaXMucGlja3VwUFMuZW1pdCA9IGZhbHNlO1xyXG5cdFxyXG5cdC8vIEV2ZW50cy5cclxuXHR0aGlzLnNpZ25hbHMub25Db2luQ29sbGVjdGVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcblx0dGhpcy5zaWduYWxzLm9uQ29pbkNvbGxlY3RlZC5hZGQoIHRoaXMuX3Jvb20ub25Db2luQ29sbGVjdGVkLCB0aGlzLl9yb29tICk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb2luO1xyXG5Db2luLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR2FtZU9iamVjdC5wcm90b3R5cGUpO1xyXG5Db2luLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvaW47XHJcblxyXG5Db2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oeCwgeSwgdGlsZUNvbHVtbilcclxue1xyXG5cdHRoaXMueCA9IHg7XHJcblx0dGhpcy55ID0geS04O1xyXG5cdFxyXG5cdHRoaXMuc3ByaXRlICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBpY2t1cF8wMFwiKSk7XHJcblx0dGhpcy5zcHJpdGUuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG5cdHRoaXMuc3ByaXRlLnkgICAgICA9IDA7XHJcblx0dGhpcy5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHJcblxyXG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSgtMTYsIC0xNiwgMzIsIDY0KTtcclxuXHQvLyB0aGlzLmRyYXdDb2xsaXNpb24oKTtcclxuXHRcclxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuXHR0bC50byh0aGlzLCAuNzUsIHt5OnRoaXMueS04LCBlYXNlOlF1YWQuZWFzZUluT3V0LCB5b3lvOnRydWUsIHJlcGVhdDotMX0sIHRpbGVDb2x1bW4gKiAuMiAvIDgpO1xyXG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1x0XHJcbn1cclxuXHJcblxyXG5Db2luLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLnBpY2t1cFBTLnVwZGF0ZShwMy5UaW1lc3RlcC5kZWx0YVRpbWUpO1xyXG59XHJcblxyXG5Db2luLnByb3RvdHlwZS5waWNrdXAgPSBmdW5jdGlvbigpXHJcbntcclxuXHRpZih0aGlzLnRha2VuKSByZXR1cm47XHJcblx0XHJcblx0Ly8gU2Z4LlxyXG5cdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwic2Z4X3BpY2t1cFwiICk7XHJcblx0XHJcblx0dGhpcy50YWtlbiA9IHRydWU7XHJcblx0dGhpcy5waWNrdXBQUy5lbWl0ID0gdHJ1ZTtcclxuXHRcclxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuXHR0bC50byh0aGlzLnNwcml0ZSwgMC4yNSwge2FscGhhOjAsIGVhc2U6U2luZS5lYXNlSW59LCAwKTtcclxuXHR0bC50byh0aGlzLnNwcml0ZS5zY2FsZSwgMC4yNSwge3g6MCwgeTowLCBlYXNlOlNpbmUuZWFzZUlufSwgMCk7XHJcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XHJcblxyXG5cdHRoaXMuc2lnbmFscy5vbkNvaW5Db2xsZWN0ZWQuZGlzcGF0Y2goKTtcclxufSIsInZhciBDb21tb24gICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoXCIuL0dhbWVPYmplY3RcIik7XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBEb29yKCBpZCwgdGV4dHVyZUJhc2VJZCwgcm9vbSApXHJcbntcclxuXHR0aGlzLl9pZCA9IGlkO1xyXG5cdHRoaXMucm9vbSA9IHJvb207XHRcclxuXHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cdEdhbWVPYmplY3QuY2FsbCh0aGlzLCBcImRvb3JcIik7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBEb29yO1xyXG5Eb29yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR2FtZU9iamVjdC5wcm90b3R5cGUpO1xyXG5Eb29yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERvb3I7XHJcblxyXG5Eb29yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oeCwgeSwgdGV4dHVyZUJhc2VJZClcclxue1xyXG5cdHRoaXMueCA9IHg7XHJcblx0dGhpcy55ID0geTtcclxuXHRcclxuXHQvLyBBbmltYXRpb25zXHJcblx0dGhpcy5fYW5pbWF0aW9uSG9sZGVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9hbmltYXRpb25Ib2xkZXIpO1xyXG5cdFxyXG5cdFxyXG5cdC8vIHRoaXMuc3ByaXRlICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInN0YXJcIikpO1xyXG5cdC8vIHRoaXMuc3ByaXRlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XHJcblx0Ly8gdGhpcy5zcHJpdGUudGludCAgID0gMHhmZjAwMDA7XHJcblx0Ly8gdGhpcy5zcHJpdGUueSAgICAgID0gMDtcclxuXHQvLyB0aGlzLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcclxuXHRcclxuXHR0aGlzLl9jbG9zZWQgPSBuZXcgcDMuTW92aWVDbGlwKHRoaXMuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UodGV4dHVyZUJhc2VJZCwgMSkpO1xyXG5cdHRoaXMuX2Nsb3NlZC5hbmNob3IgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxKTtcclxuXHR0aGlzLl9jbG9zZWQubG9vcGluZyA9IGZhbHNlO1xyXG5cdHRoaXMuX2FuaW1hdGlvbkhvbGRlci5hZGRDaGlsZCh0aGlzLl9jbG9zZWQpO1x0XHJcblx0XHJcblx0dGhpcy5fb3BlbiA9IG5ldyBwMy5Nb3ZpZUNsaXAodGhpcy5fZ2VuZXJhdGVBbmltYXRpb25TZXF1ZW5jZSh0ZXh0dXJlQmFzZUlkLCA4KSk7XHJcblx0dGhpcy5fb3Blbi5hbmNob3IgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxKTtcclxuXHR0aGlzLl9vcGVuLmxvb3BpbmcgPSBmYWxzZTtcclxuXHR0aGlzLl9hbmltYXRpb25Ib2xkZXIuYWRkQ2hpbGQodGhpcy5fY2xvc2VkKTtcdFxyXG5cdFxyXG5cdHRoaXMuX29wZW5BbmltYXRpb24gPSBuZXcgcDMuTW92aWVDbGlwKHRoaXMuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UodGV4dHVyZUJhc2VJZCwgMSwgOCkpO1xyXG5cdHRoaXMuX29wZW5BbmltYXRpb24uYW5pbWF0aW9uU3BlZWQgPSB0aGlzLl9vcGVuQW5pbWF0aW9uLnRvdGFsRnJhbWVzLzE7XHJcblx0dGhpcy5fb3BlbkFuaW1hdGlvbi5hbmNob3IgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxKTtcclxuXHR0aGlzLl9vcGVuQW5pbWF0aW9uLmxvb3BpbmcgPSBmYWxzZTtcclxuXHR0aGlzLl9vcGVuQW5pbWF0aW9uLnZpc2libGUgPSBmYWxzZTtcclxuXHR0aGlzLl9hbmltYXRpb25Ib2xkZXIuYWRkQ2hpbGQodGhpcy5fb3BlbkFuaW1hdGlvbik7XHJcblx0XHJcblx0Ly8gdGhpcy5fY2xvc2VBbmltYXRpb24gPSBuZXcgcDMuTW92aWVDbGlwKHRoaXMuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UodGV4dHVyZUJhc2VJZCwgOCwgMSkpO1xyXG5cdC8vIHRoaXMuX2Nsb3NlQW5pbWF0aW9uLmFuaW1hdGlvblNwZWVkID0gdGhpcy5fY2xvc2VBbmltYXRpb24udG90YWxGcmFtZXMvMTtcclxuXHQvLyB0aGlzLl9jbG9zZUFuaW1hdGlvbi5hbmNob3IgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxKTtcclxuXHQvLyB0aGlzLl9jbG9zZUFuaW1hdGlvbi5sb29waW5nID0gZmFsc2U7XHJcblx0Ly8gdGhpcy5fY2xvc2VBbmltYXRpb24udmlzaWJsZSA9IGZhbHNlO1xyXG5cdC8vIHRoaXMuX2FuaW1hdGlvbkhvbGRlci5hZGRDaGlsZCh0aGlzLl9jbG9zZUFuaW1hdGlvbik7XHJcblx0XHJcblxyXG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSgtMjAsIC00MCwgNDAsIDQwKTtcclxuXHQvLyB0aGlzLmRyYXdDb2xsaXNpb24oKTtcclxufVxyXG5cclxuXHJcbkRvb3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cclxufVxyXG5cclxuRG9vci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdC8vIFNmeC5cclxuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBbIFwic2Z4X2Rvb3Jfb3BlblwiLCBcInNmeF9kb29yX29wZW5sZXZlbGVuZFwiIF0gKTtcclxuXHRcclxuXHR0aGlzLl9jbG9zZWQudmlzaWJsZSAgICAgICAgPSBmYWxzZTtcclxuXHR0aGlzLl9vcGVuLnZpc2libGUgICAgICAgICAgPSBmYWxzZTtcclxuXHR0aGlzLl9vcGVuQW5pbWF0aW9uLnZpc2libGUgPSB0cnVlO1xyXG5cdHRoaXMuX29wZW5BbmltYXRpb24ucGxheSgpO1x0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dHVyZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZnJhbWVTdGFydFxyXG4gKiBAcGFyYW0ge051bWJlcn0gZnJhbWVFbmRcclxuICogQHJldHVybnMge3AzLk1vdmllQ2xpcFNlcXVlbmNlfVxyXG4gKi9cclxuRG9vci5wcm90b3R5cGUuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UgPSBmdW5jdGlvbih0ZXh0dXJlLCBmcmFtZVN0YXJ0LCBmcmFtZUVuZClcclxue1xyXG5cdGlmKCFmcmFtZUVuZCkgZnJhbWVFbmQgPSBmcmFtZVN0YXJ0O1xyXG5cclxuXHR2YXIgdGV4dHVyZUFyciA9IFtdO1xyXG5cdGZvcih2YXIgaSA9IGZyYW1lU3RhcnQ7IGkgPD0gZnJhbWVFbmQ7IGZyYW1lU3RhcnQgPD0gZnJhbWVFbmQgPyBpKysgOiBpLS0pXHJcblx0e1xyXG5cdFx0dmFyIG4gPSBcIlwiICsgaTtcclxuXHRcdHdoaWxlKG4ubGVuZ3RoIDwgMykgbiA9IFwiMFwiICsgbjtcclxuXHRcdHRleHR1cmVBcnIucHVzaCh0ZXh0dXJlICsgXCJcIiArIG4pO1xyXG5cdH1cclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgdGV4dHVyZUFyci5sZW5ndGg7IGkrKylcclxuXHR7XHJcblx0XHR0ZXh0dXJlQXJyW2ldID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUodGV4dHVyZUFycltpXSk7XHJcblx0fVxyXG5cdHZhciBzZXF1ZW5jZSA9IG5ldyBwMy5Nb3ZpZUNsaXBTZXF1ZW5jZSgpO1xyXG5cdHNlcXVlbmNlLmFkZFRleHR1cmVzKHRleHR1cmVBcnIpO1xyXG5cclxuXHRyZXR1cm4gc2VxdWVuY2U7XHJcbn1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTIC8gU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdERvb3IucHJvdG90eXBlLCBcclxuXHRcImlkXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2lkOyB9IH0gKTsiLCJ2YXIgQ29tbW9uID0gcmVxdWlyZSggXCIuLi9Db21tb25cIiApO1xyXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoIFwiLi9HYW1lT2JqZWN0XCIgKTtcclxudmFyIFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSggXCIuL1BhcnRpY2xlU3lzdGVtXCIgKTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEVuZW15KCByb29tLCBzcGluZURhdGEsIGhBeGlzTXVsdCApXHJcbntcclxuXHRHYW1lT2JqZWN0LmNhbGwoIHRoaXMsIFwiZW5lbXlcIiApO1xyXG5cdFxyXG5cdHRoaXMuX2d1biA9IG51bGw7XHJcblx0dGhpcy5fcm9vbSA9IHJvb207XHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cdHRoaXMucnVuU3BlZWQgPSAzMDsgLy8gcHgvc1xyXG5cdHRoaXMuZ3Jhdml0eSA9IDUwMDsgLy8gcHgvc14yXHJcblx0dGhpcy52ZWxvY2l0eSA9IG5ldyBQSVhJLlBvaW50KCAwLCAwICk7XHJcblxyXG5cdHRoaXMuZGlyZWN0aW9uID0gMTtcclxuXHJcblx0dGhpcy5zcGluZURhdGEgPSBzcGluZURhdGE7XHJcblx0dGhpcy5jdXJyZW50QW5pbWF0aW9uID0gXCJcIjtcclxuXHR0aGlzLnNwaW5lU3BlZWQgPSAxO1xyXG5cclxuXHR0aGlzLmNvbGxpc2lvbnMgPSB7XHJcblx0XHR0b3AgICAgICAgICAgOiBmYWxzZSxcclxuXHRcdGJvdHRvbSAgICAgICA6IGZhbHNlLFxyXG5cdFx0bGVmdCAgICAgICAgIDogZmFsc2UsXHJcblx0XHRyaWdodCAgICAgICAgOiBmYWxzZSxcclxuXHRcdGJvdHRvbUJlZm9yZSA6IGZhbHNlIH07XHJcblx0XHRcclxuXHR0aGlzLl9pc0ZhbGwgPSBmYWxzZTtcclxuXHR0aGlzLl9oQXhpc011bHQgPSBoQXhpc011bHQ7XHJcblx0XHJcblx0Ly8gQ29sbGlkZXJcclxuXHR0aGlzLmNvbGxpc2lvblJlY3QgPSBuZXcgUElYSS5SZWN0YW5nbGUoIC0zMCwgLTEwLCA2MCwgMjAgKTtcclxuXHR0aGlzLl90YXJnZXRDb2xsaXNpb25SZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCAtMzAsIC01MCwgNjAsIDcwICk7XHJcblx0XHRcclxuXHQvLyBFdmVudHMuXHJcblx0dGhpcy5zaWduYWxzLm9uRW5lbXlLaWxsZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHR0aGlzLnNpZ25hbHMub25FbmVteUtpbGxlZC5hZGQoIHRoaXMuX3Jvb20ub25FbmVteUtpbGxlZCwgdGhpcy5fcm9vbSApO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gRW5lbXk7XHJcbkVuZW15LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEdhbWVPYmplY3QucHJvdG90eXBlICk7XHJcbkVuZW15LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVuZW15O1xyXG5cclxuRW5lbXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiggeCwgeSApXHJcbntcclxuXHQvLyBTcGF3biBwb3NpdGlvblxyXG5cdHRoaXMueCA9IHg7XHJcblx0dGhpcy55ID0geTtcdFxyXG5cclxuXHQvLyBTcGluZVxyXG5cdHRoaXMuc3BpbmUgPSBuZXcgUElYSS5zcGluZS5TcGluZSggdGhpcy5zcGluZURhdGEgKTtcclxuXHR0aGlzLnNwaW5lLnNrZWxldG9uLnNldFRvU2V0dXBQb3NlKCk7XHJcblx0dGhpcy5zcGluZS5za2VsZXRvbi5zZXRTa2luKCBudWxsICk7XHJcblx0dGhpcy5zcGluZS5za2VsZXRvbi5zZXRTa2luQnlOYW1lKCBcImRlZmF1bHRcIiApO1xyXG5cdC8vdGhpcy5zcGluZS54ID0gMDtcclxuXHQvL3RoaXMuc3BpbmUueSA9IDYwO1xyXG5cdHRoaXMuc3BpbmUuYXV0b1VwZGF0ZSA9IGZhbHNlO1xyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHRcclxuXHR0aGlzLl9zcGluZUNvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5zcGluZSApO1xyXG5cdHRoaXMuX3NwaW5lQ29udGFpbmVyLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIC4zLCAuMyApO1xyXG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX3NwaW5lQ29udGFpbmVyICk7XHJcblx0dGhpcy5zZXRBbmltYXRpb24oICdtb3ZlJywgdHJ1ZSApO1xyXG5cdHRoaXMuc3BpbmUudXBkYXRlKHAzLlRpbWVzdGVwLmRlbHRhVGltZSAqIHRoaXMuc3BpbmVTcGVlZCk7XHJcbn1cclxuXHJcblxyXG5FbmVteS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Ly8gREVCVUc6XHJcblx0LyppZighIXRoaXMudGFyZ2V0Q29sbGlzaW9uR3JhcGhpYylcclxuXHRcdHRoaXMucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXRDb2xsaXNpb25HcmFwaGljKTtcclxuXHJcbiAgICB0aGlzLnRhcmdldENvbGxpc2lvbkdyYXBoaWMgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRhcmdldENvbGxpc2lvbkdyYXBoaWMpO1xyXG4gICAgdGhpcy50YXJnZXRDb2xsaXNpb25HcmFwaGljLmxpbmVTdHlsZSgyLCAweGZmMDBmZik7XHJcblxyXG5cdHRoaXMudGFyZ2V0Q29sbGlzaW9uR3JhcGhpYy5kcmF3UmVjdCh0aGlzLl90YXJnZXRDb2xsaXNpb25SZWN0LngsIHRoaXMuX3RhcmdldENvbGxpc2lvblJlY3QueSwgdGhpcy5fdGFyZ2V0Q29sbGlzaW9uUmVjdC53aWR0aCwgdGhpcy5fdGFyZ2V0Q29sbGlzaW9uUmVjdC5oZWlnaHQpOyovXHJcblx0XHJcblx0Ly90aGlzLmRyYXdDb2xsaXNpb24oKTtcclxuXHJcblx0Ly8gU3BpbmUgdXBkYXRlXHJcblx0dGhpcy5zcGluZS51cGRhdGUoIHAzLlRpbWVzdGVwLmRlbHRhVGltZSAqIHRoaXMuc3BpbmVTcGVlZCApO1xyXG5cclxuXHRpZiAoIE1hdGguc2lnbiggdGhpcy52ZWxvY2l0eS54ICkgIT0gMCApXHJcblx0e1xyXG5cdFx0dGhpcy5fc3BpbmVDb250YWluZXIueCA9IE1hdGguYWJzKCB0aGlzLl9zcGluZUNvbnRhaW5lci54ICkgKiBNYXRoLnNpZ24oIHRoaXMudmVsb2NpdHkueCApICogLTE7XHJcblx0XHR0aGlzLl9zcGluZUNvbnRhaW5lci5zY2FsZS54ID0gTWF0aC5hYnMoIHRoaXMuX3NwaW5lQ29udGFpbmVyLnNjYWxlLnggKSAqIE1hdGguc2lnbiggdGhpcy52ZWxvY2l0eS54ICkgKiB0aGlzLl9oQXhpc011bHQ7XHJcblx0fVxyXG5cclxuXHRcdFxyXG5cdC8vIFVwZGF0ZSB2ZWxvY2l0eVxyXG5cdHRoaXMudmVsb2NpdHkueCA9IHRoaXMuZGlyZWN0aW9uICogdGhpcy5ydW5TcGVlZDtcclxuXHR0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogcDMuVGltZXN0ZXAuZGVsdGFUaW1lO1xyXG5cclxuXHQvLyBEZWJ1ZyBpbnB1dFxyXG5cdC8vIGlmKENvbW1vbi5rZXlib2FyZC5nZXRLZXlQcmVzc2VkKENvbW1vbi5rZXlib2FyZC5LRVlfQSkpXHJcblx0XHQvLyB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5ydW5TcGVlZDtcclxuXHQvLyBlbHNlIGlmKENvbW1vbi5rZXlib2FyZC5nZXRLZXlQcmVzc2VkKENvbW1vbi5rZXlib2FyZC5LRVlfRCkpXHJcblx0XHQvLyB0aGlzLnZlbG9jaXR5LnggPSArdGhpcy5ydW5TcGVlZDtcclxuXHQvLyBlbHNlXHJcblx0XHQvLyB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG5cclxuXHQvLyBpZihDb21tb24ua2V5Ym9hcmQuZ2V0S2V5UHJlc3NlZChDb21tb24ua2V5Ym9hcmQuS0VZX1cpICYmIHRoaXMuY29sbGlzaW9ucy5ib3R0b20gJiYgIXRoaXMuaXNMYW5kaW5nKVxyXG5cdFx0Ly8gdGhpcy5qdW1wKCk7XHJcblxyXG5cdC8vIENhbGN1bGF0ZSBmcmFtZSBtb3ZlbWVudFxyXG5cdHZhciBtb3ZlbWVudCA9IG5ldyBQSVhJLlBvaW50KCB0aGlzLnZlbG9jaXR5LnggKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWUsIHRoaXMudmVsb2NpdHkueSAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZSApO1xyXG5cclxuXHQvLyBSZXNldCBjb2xsaXNpb25zXHJcblx0dGhpcy5jb2xsaXNpb25zLmJvdHRvbUJlZm9yZSA9IHRoaXMuY29sbGlzaW9ucy5ib3R0b207XHJcblx0dGhpcy5jb2xsaXNpb25zLnRvcCAgICAgICAgICA9IGZhbHNlO1xyXG5cdHRoaXMuY29sbGlzaW9ucy5ib3R0b20gICAgICAgPSBmYWxzZTtcclxuXHR0aGlzLmNvbGxpc2lvbnMubGVmdCAgICAgICAgID0gZmFsc2U7XHJcblx0dGhpcy5jb2xsaXNpb25zLnJpZ2h0ICAgICAgICA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmRldGVjdEJsb2NrQ29sbGlzaW9uKCBtb3ZlbWVudCApO1xyXG5cclxuXHQvLyBNb3ZlIHRoZSBjaGFyYWN0ZXIgZnJvbSBsZWZ0IHRvIHJpZ2h0IHdoZW4gaXQgaXMgb24gdGhlIGdyb3VuZC5cclxuXHRpZiAoIHRoaXMuY29sbGlzaW9ucy5ib3R0b20gKVxyXG5cdHtcclxuXHRcdC8vIERlY3JlYXNlIGdyYXZpdHkgYWZ0ZXIgZ3JvdW5kZWQgdG8gYXZvaWQgZ29pbmcgdGhyb3VnaCBwbGF0Zm9ybXMuXHJcblx0XHRpZiAoIHRoaXMuZ3Jhdml0eSAhPSAxMCApIFxyXG5cdFx0XHR0aGlzLmdyYXZpdHkgPSAxMDtcclxuXHRcclxuXHRcdHRoaXMueCArPSBtb3ZlbWVudC54O1xyXG5cdH1cclxuXHR0aGlzLnkgKz0gbW92ZW1lbnQueTtcclxuXHJcblx0Ly8gU3dhcCBkaXJlY3Rpb24gaWYgYXJyaXZlZCBhdCB0aGUgZW5kIG9mIHRoZSBwbGF0Zm9ybS5cclxuXHRpZiAoIHRoaXMuY29sbGlzaW9ucy5sZWZ0IHx8IHRoaXMuY29sbGlzaW9ucy5yaWdodCB8fCB0aGlzLl9pc0ZhbGwgKVxyXG5cdFx0dGhpcy5zd2l0Y2hEaXJlY3Rpb24oKTtcclxuXHJcblx0Ly8gUmVzZXQgZ3Jhdml0eSB3aGVuIHRvdWNoaW5nIGdyb3VuZCBvciBhIGNlaWxpbmdcclxuXHRpZiAoIHRoaXMuY29sbGlzaW9ucy5ib3R0b20gKVxyXG5cdFx0dGhpcy52ZWxvY2l0eS55ID0gMDtcclxuXHRcdFxyXG5cdHRoaXMuZGV0ZWN0U2hvdENvbGxpc2lvbigpO1xyXG5cdFxyXG5cdGlmICggdGhpcy5fZ3VuICE9IG51bGwgKVxyXG5cdFx0dGhpcy5fZ3VuLnVwZGF0ZSgpO1xyXG5cdFxyXG5cdC8vIFRoaXMgZW5lbXkncyBwbGF0Zm9ybSB3YXMgZGVzdHJveWVkLlxyXG5cdGlmICggdGhpcy5ncmF2aXR5ID09IDEwICYmICF0aGlzLmNvbGxpc2lvbnMuYm90dG9tIClcclxuXHRcdHRoaXMua2lsbCgpO1x0XHRcclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5FbmVteS5wcm90b3R5cGUuZGV0ZWN0U2hvdENvbGxpc2lvbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdC8vIENvbGxpc2lvbnM6IHNob3RzXHJcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fcm9vbS5vYmplY3RzLnNob3RzLmxlbmd0aDsgaSsrIClcclxuXHR7XHJcblx0XHR2YXIgc2hvdEF1eCA9IHRoaXMuX3Jvb20ub2JqZWN0cy5zaG90c1sgaSBdO1xyXG5cdFx0aWYgKCB0aGlzLnJlY3RSZWN0Q29sbGlzaW9uKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0eCAgICAgIDogdGhpcy54ICsgdGhpcy50YXJnZXRDb2xsaXNpb25SZWN0LngsXHJcblx0XHRcdFx0eSAgICAgIDogdGhpcy55ICsgdGhpcy50YXJnZXRDb2xsaXNpb25SZWN0LnksXHJcblx0XHRcdFx0d2lkdGggIDogdGhpcy50YXJnZXRDb2xsaXNpb25SZWN0LndpZHRoLFxyXG5cdFx0XHRcdGhlaWdodCA6IHRoaXMudGFyZ2V0Q29sbGlzaW9uUmVjdC5oZWlnaHRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHggICAgICA6IHNob3RBdXgueCArIHNob3RBdXguY29sbGlzaW9uUmVjdC54LFxyXG5cdFx0XHRcdHkgICAgICA6IHNob3RBdXgueSArIHNob3RBdXguY29sbGlzaW9uUmVjdC55LFxyXG5cdFx0XHRcdHdpZHRoICA6IHNob3RBdXguY29sbGlzaW9uUmVjdC53aWR0aCxcclxuXHRcdFx0XHRoZWlnaHQgOiBzaG90QXV4LmNvbGxpc2lvblJlY3QuaGVpZ2h0XHJcblx0XHRcdH0gKSApXHJcblx0XHR7XHRcdFx0XHRcdFx0XHJcblx0XHRcdHNob3RBdXguaXNHYXJiYWdlID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMua2lsbCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICovXHJcbkVuZW15LnByb3RvdHlwZS5kZXRlY3RCbG9ja0NvbGxpc2lvbiA9IGZ1bmN0aW9uKCBtb3ZlbWVudCApXHJcbntcclxuXHQvLyBCbG9ja3MgaG9yaXpvbnRhbCBjb2xsaXNpb25zXHJcblx0aWYgKCBtb3ZlbWVudC54ICE9IDAgKVxyXG5cdHtcclxuXHRcdGlmICggbW92ZW1lbnQueCA+IDAgKVxyXG5cdFx0XHR2YXIgcmF5T3JpZ2lucyA9IHRoaXMuZ2V0UmlnaHRSYXlPcmlnaW5zKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHZhciByYXlPcmlnaW5zID0gdGhpcy5nZXRMZWZ0UmF5T3JpZ2lucygpO1xyXG5cclxuXHRcdHZhciByYXkgPSBuZXcgUElYSS5Qb2ludCggbW92ZW1lbnQueCArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKCBtb3ZlbWVudC54ICksIDAgKTtcclxuXHJcblx0XHRmb3IgKCB2YXIgciA9IDA7IHIgPCByYXlPcmlnaW5zLmxlbmd0aCAmJiBtb3ZlbWVudC54ICE9IDA7IHIrKyApXHJcblx0XHR7XHJcblx0XHRcdC8vIE1vdmVtZW50IHJheSB2ZXJ0aWNlc1xyXG5cdFx0XHR2YXIgYXZhdGFyUDEgPSByYXlPcmlnaW5zWyByIF07XHJcblx0XHRcdC8vIGF2YXRhclAxLnkgKz0gbW92ZW1lbnQueTtcclxuXHRcdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoIGF2YXRhclAxLnggKyByYXkueCwgYXZhdGFyUDEueSArIHJheS55ICk7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgYiA9IDA7IGIgPCB0aGlzLl9yb29tLmJsb2Nrcy5sZW5ndGg7IGIrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIHRoaXMuX3Jvb20uYmxvY2tzW2JdLmlzR2FyYmFnZSApIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmICggbW92ZW1lbnQueCA+IDAgJiYgIXRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmNvbGxpc2lvbnMubGVmdCApIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmICggbW92ZW1lbnQueCA8IDAgJiYgIXRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmNvbGxpc2lvbnMucmlnaHQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0Ly8gU2VnbWVudCB2ZXJ0aWNlc1xyXG5cdFx0XHRcdHZhciBibG9ja1AxID0gbmV3IFBJWEkuUG9pbnQoIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLnggKyAoIG1vdmVtZW50LnggPCAwID8gdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcud2lkdGggOiAwICksIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLnkgKTtcclxuXHRcdFx0XHR2YXIgYmxvY2tQMiA9IG5ldyBQSVhJLlBvaW50KCBibG9ja1AxLngsIGJsb2NrUDEueSArIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmhlaWdodCApO1xyXG5cclxuXHRcdFx0XHQvLyBMaW5lLWxpbmUgY29sbGlzaW9uIGRldGVjdGlvblxyXG5cdFx0XHRcdHZhciBpbnRlcnNlY3Rpb24gPSB0aGlzLmxpbmVMaW5lQ29sbGlzaW9uKCBhdmF0YXJQMSwgYXZhdGFyUDIsIGJsb2NrUDEsIGJsb2NrUDIgKTtcclxuXHRcdFx0XHRpZiAoIGludGVyc2VjdGlvbiApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGRpc3RhbmNlID0gIGludGVyc2VjdGlvbi54IC0gYXZhdGFyUDEueCAtIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKCBtb3ZlbWVudC54ICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtb3ZlbWVudC54ID4gMCApXHJcblx0XHRcdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5yaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5sZWZ0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRtb3ZlbWVudC54ID0gZGlzdGFuY2U7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXHJcblx0XHRcdFx0XHRpZiAoIE1hdGguY2xvc2VFbm91Z2goIG1vdmVtZW50LngsIDAgKSApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1vdmVtZW50LnggPSAwO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBEZWNyZWFzZSB0aGUgbGVuZ3RoIG9mIGZ1dHVyZSByYXljYXN0c1xyXG5cdFx0XHRcdFx0YXZhdGFyUDIueCAtPSByYXkueDtcclxuXHRcdFx0XHRcdHJheS54ID0gZGlzdGFuY2UgKyB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbiggbW92ZW1lbnQueCApO1xyXG5cdFx0XHRcdFx0YXZhdGFyUDIueCArPSByYXkueDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFBsYXJmb3JtIGVuZCBkZXRlY3Rpb24uXHJcblx0dGhpcy5faXNGYWxsID0gZmFsc2U7XHJcblx0aWYgKCBtb3ZlbWVudC55ID4gMCAmJiBtb3ZlbWVudC54ICE9IDAgKVxyXG5cdHtcclxuXHRcdHRoaXMuX2lzRmFsbCA9IHRydWU7XHJcblx0XHRpZiAoIG1vdmVtZW50LnggPiAwIClcclxuXHRcdFx0dmFyIHJheU9yaWdpbiA9IG5ldyBQSVhJLlBvaW50KCBcclxuXHRcdFx0XHR0aGlzLnggKyB0aGlzLmNvbGxpc2lvblJlY3QueCArIHRoaXMuY29sbGlzaW9uUmVjdC53aWR0aCxcclxuXHRcdFx0XHR0aGlzLnkgKyB0aGlzLmNvbGxpc2lvblJlY3QueSArIHRoaXMuY29sbGlzaW9uUmVjdC5oZWlnaHQgKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dmFyIHJheU9yaWdpbiA9IG5ldyBQSVhJLlBvaW50KCBcclxuXHRcdFx0XHR0aGlzLnggKyB0aGlzLmNvbGxpc2lvblJlY3QueCxcclxuXHRcdFx0XHR0aGlzLnkgKyB0aGlzLmNvbGxpc2lvblJlY3QueSArIHRoaXMuY29sbGlzaW9uUmVjdC5oZWlnaHQgKTtcclxuXHRcdHZhciByYXkgPSBuZXcgUElYSS5Qb2ludCggMCwgbW92ZW1lbnQueSArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKCBtb3ZlbWVudC55ICkgKTsgLy8gbW92ZW1lbnQgYW5kIG5vdCB2ZWxvY2l0eSBiZWNhdXNlIHdoZW4gY2xpbWJpbmcgYSBzcGxpbmUgdmVsb2NpdHkgaXMgcG9zaXRpdmUgKGJlY2F1c2UgZ3Jhdml0eSkgYnV0IG1vdmVtZW50IGhhcyBjaGFuZ2VkIHRvIGJlIG5lZ2F0aXZlXHJcblxyXG5cdFx0Ly8gTW92ZW1lbnQgcmF5IHZlcnRpY2VzXHJcblx0XHR2YXIgYXZhdGFyUDEgPSByYXlPcmlnaW47XHJcblx0XHRhdmF0YXJQMS54ICs9IG1vdmVtZW50Lng7XHJcblx0XHR2YXIgYXZhdGFyUDIgPSBuZXcgUElYSS5Qb2ludCggYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkgKTtcclxuXHRcdFxyXG5cdFx0Zm9yICggdmFyIGIgPSAwOyBiIDwgdGhpcy5fcm9vbS5ibG9ja3MubGVuZ3RoOyBiKysgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIHRoaXMuX3Jvb20uYmxvY2tzW2JdLmlzR2FyYmFnZSApIGNvbnRpbnVlO1xyXG5cdFx0XHQvL2lmICggbW92ZW1lbnQueSA8IDAgJiYgIXRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmNvbGxpc2lvbnMuYm90dG9tICkgY29udGludWU7XHJcblxyXG5cdFx0XHQvLyBTZWdtZW50IHZlcnRpY2VzXHJcblx0XHRcdHZhciBibG9ja1AxICA9IG5ldyBQSVhJLlBvaW50KCB0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy54LCB0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy55ICsgKCBtb3ZlbWVudC55IDwgMCA/IHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmhlaWdodCA6IDAgKSApO1xyXG5cdFx0XHR2YXIgYmxvY2tQMiAgPSBuZXcgUElYSS5Qb2ludCggYmxvY2tQMS54ICsgdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcud2lkdGgsIGJsb2NrUDEueSApO1xyXG5cclxuXHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0dmFyIGludGVyc2VjdGlvbiA9IHRoaXMubGluZUxpbmVDb2xsaXNpb24oIGF2YXRhclAxLCBhdmF0YXJQMiwgYmxvY2tQMSwgYmxvY2tQMiApO1xyXG5cdFx0XHRpZiAoIGludGVyc2VjdGlvbiApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9pc0ZhbGwgPSBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvLyBCbG9ja3MgdmVydGljYWwgY29sbGlzaW9uc1xyXG5cdGlmICggbW92ZW1lbnQueSA+IDAgKVxyXG5cdHtcclxuXHRcdHZhciByYXlPcmlnaW5zID0gdGhpcy5nZXRCb3R0b21SYXlPcmlnaW5zKCk7XHJcblx0XHR2YXIgcmF5ID0gbmV3IFBJWEkuUG9pbnQoIDAsIG1vdmVtZW50LnkgKyB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbiggbW92ZW1lbnQueSApICk7IC8vIG1vdmVtZW50IGFuZCBub3QgdmVsb2NpdHkgYmVjYXVzZSB3aGVuIGNsaW1iaW5nIGEgc3BsaW5lIHZlbG9jaXR5IGlzIHBvc2l0aXZlIChiZWNhdXNlIGdyYXZpdHkpIGJ1dCBtb3ZlbWVudCBoYXMgY2hhbmdlZCB0byBiZSBuZWdhdGl2ZVxyXG5cclxuXHRcdGZvciAoIHZhciByID0gMDsgciA8IHJheU9yaWdpbnMubGVuZ3RoICYmIG1vdmVtZW50LnkgIT0gMDsgcisrIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gTW92ZW1lbnQgcmF5IHZlcnRpY2VzXHJcblx0XHRcdHZhciBhdmF0YXJQMSA9IHJheU9yaWdpbnNbIHIgXTtcclxuXHRcdFx0YXZhdGFyUDEueCArPSBtb3ZlbWVudC54O1xyXG5cdFx0XHR2YXIgYXZhdGFyUDIgPSBuZXcgUElYSS5Qb2ludCggYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkgKTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBiID0gMDsgYiA8IHRoaXMuX3Jvb20uYmxvY2tzLmxlbmd0aDsgYisrIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICggdGhpcy5fcm9vbS5ibG9ja3NbYl0uaXNHYXJiYWdlICkgY29udGludWU7XHJcblx0XHRcdFx0aWYgKCBtb3ZlbWVudC55ID4gMCAmJiAhdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcuY29sbGlzaW9ucy50b3AgKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZiAoIG1vdmVtZW50LnkgPCAwICYmICF0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy5jb2xsaXNpb25zLmJvdHRvbSApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHQvLyBTZWdtZW50IHZlcnRpY2VzXHJcblx0XHRcdFx0dmFyIGJsb2NrUDEgID0gbmV3IFBJWEkuUG9pbnQoIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLngsIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLnkgKyAoIG1vdmVtZW50LnkgPCAwID8gdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcuaGVpZ2h0IDogMCApICk7XHJcblx0XHRcdFx0dmFyIGJsb2NrUDIgID0gbmV3IFBJWEkuUG9pbnQoIGJsb2NrUDEueCArIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLndpZHRoLCBibG9ja1AxLnkgKTtcclxuXHJcblx0XHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0XHR2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5saW5lTGluZUNvbGxpc2lvbiggYXZhdGFyUDEsIGF2YXRhclAyLCBibG9ja1AxLCBibG9ja1AyICk7XHJcblx0XHRcdFx0aWYgKCBpbnRlcnNlY3Rpb24gKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5ib3R0b20gPSB0cnVlO1xyXG5cdFx0XHRcdFx0dmFyIGRpc3RhbmNlID0gIGludGVyc2VjdGlvbi55IC0gYXZhdGFyUDEueSAtIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKCBtb3ZlbWVudC55ICk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bW92ZW1lbnQueSA9IGRpc3RhbmNlO1xyXG5cdFxyXG5cdFx0XHRcdFx0Ly8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXHJcblx0XHRcdFx0XHRpZiAoIE1hdGguY2xvc2VFbm91Z2goIG1vdmVtZW50LnksIDAgKSApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1vdmVtZW50LnkgPSAwO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBEZWNyZWFzZSB0aGUgbGVuZ3RoIG9mIGZ1dHVyZSByYXljYXN0c1xyXG5cdFx0XHRcdFx0YXZhdGFyUDIueSAtPSByYXkueTtcclxuXHRcdFx0XHRcdHJheS55ID0gZGlzdGFuY2UgKyB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbiggbW92ZW1lbnQueSApO1xyXG5cdFx0XHRcdFx0YXZhdGFyUDIueSArPSByYXkueTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuRW5lbXkucHJvdG90eXBlLnN3aXRjaERpcmVjdGlvbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMudmVsb2NpdHkueCA9IDA7XHJcblx0dGhpcy5kaXJlY3Rpb24gKj0gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuRW5lbXkucHJvdG90eXBlLnNldEFuaW1hdGlvbiA9IGZ1bmN0aW9uKGlkLCBsb29wKVxyXG57XHJcblx0aWYoaWQgPT0gdGhpcy5jdXJyZW50QW5pbWF0aW9uKSByZXR1cm47XHJcblxyXG5cdGlmKEFycmF5LmlzQXJyYXkoaWQpKVxyXG5cdHtcclxuXHRcdHRoaXMuc3BpbmUuc3RhdGUuc2V0QW5pbWF0aW9uQnlOYW1lKDAsIGlkWzBdLCBmYWxzZSk7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMTsgaSA8IGlkLmxlbmd0aDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNwaW5lLnN0YXRlLmFkZEFuaW1hdGlvbkJ5TmFtZSgwLCBpZFtpXSwgbG9vcCAmJiAoaSA9PSAoaWQubGVuZ3RoLTEpKSwgMCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBpZFtpZC5sZW5ndGgtMV07XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHR0aGlzLnNwaW5lLnN0YXRlLnNldEFuaW1hdGlvbkJ5TmFtZSgwLCBpZCwgbG9vcCwgMCk7XHJcblx0XHR0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBpZDtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuRW5lbXkucHJvdG90eXBlLmtpbGwgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLmlzR2FyYmFnZSA9IHRydWU7XHJcblx0XHJcblx0Ly8gVmZ4LlxyXG5cdHZhciBwcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbSggXHJcblx0XHRbIFwicGFydGljbGVfc21va2VfMDAxXCIsXHJcblx0XHRcInBhcnRpY2xlX3Ntb2tlXzAwMlwiLFxyXG5cdFx0XCJwYXJ0aWNsZV9zbW9rZV8wMDNcIixcclxuXHRcdFwicGFydGljbGVfc21va2VfMDA0XCIsXHJcblx0XHRcInBhcnRpY2xlX3N0YXJfMDAxXCIsXHJcblx0XHRcInBhcnRpY2xlX3N0YXJfMDAyXCIsXHJcblx0XHRcInBhcnRpY2xlX3N0YXJfMDAzXCIgXSxcclxuXHRcdFwicGFydGljbGVfZW1pdHRlcl9hdHRhY2tcIiApO1xyXG5cdHBzLmluaXQoIHRoaXMueCwgdGhpcy55ICk7XHJcblx0dGhpcy5fcm9vbS5hZGRDaGlsZCggcHMgKTtcclxuXHR0aGlzLl9yb29tLnBhcnRpY2xlU3lzdGVtcy5wdXNoKCBwcyApO1xyXG5cdFxyXG5cdC8vIFNmeC5cclxuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInNmeF9zdGlua2ZseV9nYXNhdHRhY2tfMDFcIiApO1xyXG5cclxuXHR0aGlzLnNpZ25hbHMub25FbmVteUtpbGxlZC5kaXNwYXRjaCgpO1xyXG59XHJcblxyXG5cclxuTWF0aC5FUFNJTE9OID0gMWUtNjtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHR3byBmbG9hdGluZy1wb2ludCB2YWx1ZXMgZjEgYW5kIGYyIGFyZSBjbG9zZSBlbm91Z2ggdG9nZXRoZXIgdGhhdCB0aGV5IGNhbiBiZSBjb25zaWRlcmVkIGVxdWFsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZjFcclxuICogQHBhcmFtIHtudW1iZXJ9IGYyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuTWF0aC5jbG9zZUVub3VnaCA9IGZ1bmN0aW9uKGYxLCBmMilcclxue1xyXG5cdHJldHVybiBNYXRoLmFicygoZjEgLSBmMikgLyAoKGYyID09IDAuMCkgPyAxLjAgOiBmMikpIDwgTWF0aC5FUFNJTE9OO1xyXG59XHJcblxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdEVuZW15LnByb3RvdHlwZSwgXHJcblx0XCJ0YXJnZXRDb2xsaXNpb25SZWN0XCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3RhcmdldENvbGxpc2lvblJlY3Q7IH0gfSApO1xyXG5cdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0RW5lbXkucHJvdG90eXBlLCBcclxuXHRcInNwaW5lQ29udGFpbmVyXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3NwaW5lQ29udGFpbmVyOyB9IH0gKTtcclxuXHRcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdEVuZW15LnByb3RvdHlwZSwgXHJcblx0XCJndW5cIiwgXHJcblx0eyBzZXQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHsgdGhpcy5fZ3VuID0gdmFsdWU7IH0gfSApOyIsInZhciBDb21tb24gICAgPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XHJcbnZhciBQb3dlcnVwID0gcmVxdWlyZSggXCIuL1Bvd2VydXBcIiApO1xyXG52YXIgRm91cmFybXNUcmFuc2Zvcm1hdGlvbiA9IHJlcXVpcmUoIFwiLi9Gb3VyYXJtc1RyYW5zZm9ybWF0aW9uXCIgKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBGb3VyYXJtc1Bvd2VydXAoIHJvb20gKVxyXG57XHJcblx0UG93ZXJ1cC5jYWxsKCB0aGlzLCBcImZvdXJhcm1zX3Bvd2VydXBcIiwgXCJpY29uX2ZvdXJhcm1zXCIsIHJvb20gKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEZvdXJhcm1zUG93ZXJ1cDtcclxuRm91cmFybXNQb3dlcnVwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFBvd2VydXAucHJvdG90eXBlICk7XHJcbkZvdXJhcm1zUG93ZXJ1cC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGb3VyYXJtc1Bvd2VydXA7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkZvdXJhcm1zUG93ZXJ1cC5wcm90b3R5cGUucGlja3VwID0gZnVuY3Rpb24oKVxyXG57XHJcblx0aWYgKCB0aGlzLnRha2VuICkgcmV0dXJuO1xyXG5cdFxyXG5cdFBvd2VydXAucHJvdG90eXBlLnBpY2t1cC5jYWxsKCB0aGlzICk7XHJcblx0XHJcblx0dGhpcy5fcm9vbS5sZXZlbC5zZXRUcmFuc2Zvcm1hdGlvbiggbmV3IEZvdXJhcm1zVHJhbnNmb3JtYXRpb24oIHRoaXMuX3Jvb20gKSApO1xyXG59IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIFRyYW5zZm9ybWF0aW9uID0gcmVxdWlyZSggXCIuL1RyYW5zZm9ybWF0aW9uXCIgKTtcclxudmFyIFBhcnRpY2xlU3lzdGVtID0gcmVxdWlyZSggXCIuL1BhcnRpY2xlU3lzdGVtXCIgKTtcclxuXHJcbnZhciBnX2ZvdXJhcm1zVHJhbnNmb3JtYXRpb24gPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gRm91cmFybXNUcmFuc2Zvcm1hdGlvbiggcm9vbSApXHJcbntcclxuXHRUcmFuc2Zvcm1hdGlvbi5jYWxsKCB0aGlzLCByb29tICk7XHJcblx0dGhpcy5faWQgPSB0aGlzLlRSQU5TRk9STUFUSU9OX0lEX0ZPVVJBUk1TO1xyXG5cdFxyXG5cdC8vIEV2ZW50cy5cclxuXHR0aGlzLnNpZ25hbHMub25CbG9ja0Rlc3Ryb3llZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG5cdHRoaXMuc2lnbmFscy5vbkJsb2NrRGVzdHJveWVkLmFkZCggdGhpcy5fcm9vbS5vbkJsb2NrRGVzdHJveWVkLCB0aGlzLl9yb29tICk7XHJcblx0XHJcblx0Z19mb3VyYXJtc1RyYW5zZm9ybWF0aW9uID0gdGhpcztcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEZvdXJhcm1zVHJhbnNmb3JtYXRpb247XHJcbkZvdXJhcm1zVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlICk7XHJcbkZvdXJhcm1zVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRm91cmFybXNUcmFuc2Zvcm1hdGlvbjtcclxuXHJcblxyXG5Gb3VyYXJtc1RyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcdFxyXG5cdFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS51cGRhdGUuY2FsbCggdGhpcyApO1xyXG5cdFxyXG5cdHZhciBhdmF0YXIgPSB0aGlzLl9yb29tLmF2YXRhcjtcclxuXHRcclxuXHQvLyBEZXN0cm95IGNyYWNrZWQgd2FsbHMgd2hpbGUganVtcGluZy5cclxuXHRpZiAoIGF2YXRhci5jdXJyZW50QW5pbWF0aW9uID09IFwianVtcFwiIFxyXG5cdFx0fHwgYXZhdGFyLmN1cnJlbnRBbmltYXRpb24gPT0gXCJmYWxsXCJcclxuXHRcdHx8IGF2YXRhci5jdXJyZW50QW5pbWF0aW9uID09IFwicHVuY2hfdXBcIiApXHJcblx0e1xyXG5cdFx0Ly8gSW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIGNvbGxpc2lvbiByZWN0IHNvIGl0IGlzIG5vdCBpZ25vcmVkIHdoZW4gcmF5Y2FzdGluZyBmb3Igc3VyZmFjZSBjb2xsaXNpb25zLlxyXG5cdFx0dmFyIGF2YXRhckNvbGxSZWN0ID0gdGhpcy5fcm9vbS5hdmF0YXIuY29sbGlzaW9uUmVjdDtcclxuXHRcdGNvbnN0IENPTExfUkVDVF9NQVJHSU4gPSAxMDtcclxuXHRcdGF2YXRhckNvbGxSZWN0LnggLT0gQ09MTF9SRUNUX01BUkdJTiAqIC41O1xyXG5cdFx0YXZhdGFyQ29sbFJlY3QueSAtPSBDT0xMX1JFQ1RfTUFSR0lOICogLjU7XHJcblx0XHRhdmF0YXJDb2xsUmVjdC53aWR0aCArPSBDT0xMX1JFQ1RfTUFSR0lOOyBcclxuXHRcdGF2YXRhckNvbGxSZWN0LmhlaWdodCArPSBDT0xMX1JFQ1RfTUFSR0lOO1xyXG5cdFx0XHJcblx0XHR2YXIgYXJyQ3JhY2tlZEJsb2NrID0gW107XHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl9yb29tLmNyYWNrZWRQbGF0Zm9ybUJsb2Nrcy5sZW5ndGg7ICsraSApXHJcblx0XHR7XHJcblx0XHRcdHZhciBjcmFja2VkQmxvY2tBdXggPSB0aGlzLl9yb29tLmNyYWNrZWRQbGF0Zm9ybUJsb2Nrc1sgaSBdO1xyXG5cdFx0XHRpZiAoIGF2YXRhci5jb2xsaXNpb24oIGNyYWNrZWRCbG9ja0F1eCApIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNyYWNrZWRCbG9ja0F1eC5pc0dhcmJhZ2UgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgODsgKytqIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLl9yb29tLmxheWVyc1sgXCJwbGF0Zm9ybXNcIiBdLnZlcnRpY2VzWyBqICsgOCAqIGNyYWNrZWRCbG9ja0F1eC5jb25maWcubWVzaFF1YWRJbmRleCBdID0gMDtcclxuXHRcdFx0XHRcdHRoaXMuX3Jvb20ubGF5ZXJzWyBcInBsYXRmb3Jtc1wiIF0udXZzWyBqICsgOCAqIGNyYWNrZWRCbG9ja0F1eC5jb25maWcubWVzaFF1YWRJbmRleCBdID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gVmZ4LlxyXG5cdFx0XHRcdHZhciBwcyA9IG5ldyBQYXJ0aWNsZVN5c3RlbSggXHJcblx0XHRcdFx0XHRbIFwicGFydGljbGVfcm9ja18wMDFcIixcclxuXHRcdFx0XHRcdFwicGFydGljbGVfcm9ja18wMDJcIixcclxuXHRcdFx0XHRcdFwicGFydGljbGVfcm9ja18wMDNcIixcclxuXHRcdFx0XHRcdFwicGFydGljbGVfcm9ja18wMDRcIixcclxuXHRcdFx0XHRcdFwicGFydGljbGVfcm9ja18wMDVcIiBdLCBcclxuXHRcdFx0XHRcdFwicGFydGljbGVfZW1pdHRlcl93YWxsX2Rlc3Ryb3lcIiApO1xyXG5cdFx0XHRcdHBzLmluaXQoIGNyYWNrZWRCbG9ja0F1eC5jb25maWcueCwgY3JhY2tlZEJsb2NrQXV4LmNvbmZpZy55ICk7XHJcblx0XHRcdFx0cHMuc2NhbGUueCA9IC1NYXRoLnNpZ24oIGF2YXRhci52ZWxvY2l0eS54ICk7XHJcblx0XHRcdFx0dGhpcy5fcm9vbS5hZGRDaGlsZCggcHMgKTtcclxuXHRcdFx0XHR0aGlzLl9yb29tLnBhcnRpY2xlU3lzdGVtcy5wdXNoKCBwcyApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhcnJDcmFja2VkQmxvY2sucHVzaCggY3JhY2tlZEJsb2NrQXV4ICk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIFBsYXkgcHVuY2ggYW5pbWF0aW9uIGlmIGFueSBibG9jayB3YXMgcmVtb3ZlZC5cclxuXHRcdGlmICggdGhpcy5fcm9vbS5jcmFja2VkUGxhdGZvcm1CbG9ja3MubGVuZ3RoICE9IGFyckNyYWNrZWRCbG9jay5sZW5ndGggKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBTZnguXHJcblx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFsgXCJzZnhfNGFybXNfcHVuY2hfMDBcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDFcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDJcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDNcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDRcIiBdICk7XHJcblx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFsgXCJzZnhfZmxvb3JfY3J1c2hcIiwgXCJzZnhfd2FsbF9jcnVzaFwiIF0gKTtcdFxyXG5cdFx0XHJcblx0XHRcdGF2YXRhci5zZXRBbmltYXRpb24oIFwicHVuY2hfdXBcIiwgZmFsc2UgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFVwZGF0ZSByb29tIHJlc3VsdC5cclxuXHRcdFx0dGhpcy5zaWduYWxzLm9uQmxvY2tEZXN0cm95ZWQuZGlzcGF0Y2goIHRoaXMuX3Jvb20uY3JhY2tlZFBsYXRmb3JtQmxvY2tzLmxlbmd0aCAtIGFyckNyYWNrZWRCbG9jay5sZW5ndGggKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gVXBkYXRlIHJlbWFpbmluZyBjcmFja2VkIHdhbGwgYmxvY2tzLlxyXG5cdFx0dGhpcy5fcm9vbS5jcmFja2VkUGxhdGZvcm1CbG9ja3MgPSBhcnJDcmFja2VkQmxvY2s7XHJcblx0XHRcclxuXHRcdC8vIFJlc3RvcmUgY29sbGlzaW9uIHJlY3QuXHJcblx0XHRhdmF0YXJDb2xsUmVjdC54ICs9IENPTExfUkVDVF9NQVJHSU4gKiAuNTtcclxuXHRcdGF2YXRhckNvbGxSZWN0LnkgKz0gQ09MTF9SRUNUX01BUkdJTiAqIC41O1xyXG5cdFx0YXZhdGFyQ29sbFJlY3Qud2lkdGggLT0gQ09MTF9SRUNUX01BUkdJTjsgXHJcblx0XHRhdmF0YXJDb2xsUmVjdC5oZWlnaHQgLT0gQ09MTF9SRUNUX01BUkdJTjtcclxuXHR9XHJcbn1cclxuXHJcbkZvdXJhcm1zVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlLm9uRW5lbXlDb2xsaXNpb24gPSBmdW5jdGlvbiggZW5lbXkgKVxyXG57XHJcblx0dmFyIHJlc3VsdCA9IHRydWU7XHJcblx0XHJcblx0dmFyIGF2YXRhciA9IHRoaXMuX3Jvb20uYXZhdGFyO1xyXG5cdFxyXG5cdC8vIEtpbGwgdGhlIGVuZW15IHdoaWxlIHJ1bm5pbmcuXHJcblx0aWYgKCBhdmF0YXIuY3VycmVudEFuaW1hdGlvbiA9PSBcInJ1bl9sZXZlbFwiIFxyXG5cdFx0fHwgYXZhdGFyLmN1cnJlbnRBbmltYXRpb24gPT0gXCJwdW5jaF9kb3duXCIgKVxyXG5cdHtcdFxyXG5cdFx0aWYgKCB0aGlzLl9wdW5jaGVkRW5lbXkgPT0gbnVsbCAmJiAhZW5lbXkuaXNHYXJiYWdlIClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fcHVuY2hlZEVuZW15ID0gZW5lbXk7XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0YXZhdGFyLnNldEFuaW1hdGlvbiggXCJwdW5jaF9kb3duXCIsIGZhbHNlICk7XHRcclxuXHRcdFx0YXZhdGFyLnNwaW5lLnN0YXRlLm9uRXZlbnQgPSBcclxuXHRcdFx0XHRmdW5jdGlvbiggdHJhY2ssIGV2ZW50ICkgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCBldmVudC5kYXRhLm5hbWUgPT0gXCJkZXN0cm95XCIgKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLyBTZnguXHJcblx0XHRcdFx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFsgXCJzZnhfNGFybXNfcHVuY2hfMDBcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDFcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDJcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDNcIiwgXCJzZnhfNGFybXNfcHVuY2hfMDRcIiBdICk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Z19mb3VyYXJtc1RyYW5zZm9ybWF0aW9uLl9wdW5jaGVkRW5lbXkua2lsbCgpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Z19mb3VyYXJtc1RyYW5zZm9ybWF0aW9uLl9wdW5jaGVkRW5lbXkgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXN1bHQgPSBmYWxzZTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIEdhbWVPYmplY3QodHlwZSlcclxue1xyXG5cdFBJWEkuQ29udGFpbmVyLmNhbGwoIHRoaXMgKTtcclxuXHRcclxuICAgIHRoaXMuX2Fzc2V0TWFuYWdlciAgICA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHJcbiAgICB0aGlzLnNpZ25hbHMgICAgICAgICAgPSB7fTtcclxuICAgIHRoaXMuc2lnbmFscy5kaXNwb3NlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG5cclxuICAgIHRoaXMuaWQgICAgICAgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMudHlwZSAgICAgICAgICAgICAgPSB0eXBlO1xyXG5cdHRoaXMuY29sbGlzaW9uUmVjdCAgICAgPSBudWxsO1xyXG5cdHRoaXMuY29sbGlzaW9uQ2lyY2xlICAgPSBudWxsO1xyXG5cdHRoaXMuYXJlYVJlY3QgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMuaW50ZXJhY3RpdmUgICAgICAgPSBmYWxzZTtcclxuXHR0aGlzLnJlbW92ZVdoZW5PdXRzaWRlID0gdHJ1ZTtcclxuXHJcblx0dGhpcy52ZXJ0aWNhbFJheWNhc3QgICA9IDE2O1xyXG5cdHRoaXMuaG9yaXpvbnRhbFJheWNhc3QgPSA0O1xyXG5cdHRoaXMuc2tpbldpZHRoICAgICAgICAgPSAwLjU7XHJcblxyXG5cdHRoaXMuY29sbGlzaW9uR3JhcGhpYyA9IG51bGw7XHJcblx0XHJcblx0dGhpcy5pc0dhcmJhZ2UgPSBmYWxzZTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVPYmplY3Q7XHJcbkdhbWVPYmplY3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUElYSS5Db250YWluZXIucHJvdG90eXBlICk7XHJcbkdhbWVPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2FtZU9iamVjdDtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqL1xyXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7IH07XHJcblxyXG4vKipcclxuICovXHJcbkdhbWVPYmplY3QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkgeyB9O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMueCA9IDA7XHJcblx0dGhpcy55ID0gMDtcclxuICAgIHRoaXMucmVtb3ZlTWUgPSBmYWxzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuc2lnbmFscy5kaXNwb3NlZC5kaXNwYXRjaCh0aGlzKTtcclxuICAgIHRoaXMucmVtb3ZlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpXHJcbntcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59XHJcblxyXG4vKipcclxuICovXHJcbkdhbWVPYmplY3QucHJvdG90eXBlLmRyYXdDb2xsaXNpb24gPSBmdW5jdGlvbigpXHJcbntcclxuXHRpZighIXRoaXMuY29sbGlzaW9uR3JhcGhpYylcclxuXHRcdHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5jb2xsaXNpb25HcmFwaGljKTtcclxuXHJcbiAgICB0aGlzLmNvbGxpc2lvbkdyYXBoaWMgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLmNvbGxpc2lvbkdyYXBoaWMpO1xyXG4gICAgdGhpcy5jb2xsaXNpb25HcmFwaGljLmxpbmVTdHlsZSgyLCAweDAwMDBmZik7XHJcblxyXG5cdGlmKHRoaXMuY29sbGlzaW9uUmVjdCAhPSBudWxsKVxyXG5cdFx0dGhpcy5jb2xsaXNpb25HcmFwaGljLmRyYXdSZWN0KHRoaXMuY29sbGlzaW9uUmVjdC54LCB0aGlzLmNvbGxpc2lvblJlY3QueSwgdGhpcy5jb2xsaXNpb25SZWN0LndpZHRoLCB0aGlzLmNvbGxpc2lvblJlY3QuaGVpZ2h0KTtcclxuXHRlbHNlIGlmKHRoaXMuY29sbGlzaW9uQ2lyY2xlICE9IG51bGwpXHJcblx0XHR0aGlzLmNvbGxpc2lvbkdyYXBoaWMuZHJhd0NpcmNsZSh0aGlzLmNvbGxpc2lvbkNpcmNsZS54LCB0aGlzLmNvbGxpc2lvbkNpcmNsZS55LCB0aGlzLmNvbGxpc2lvbkNpcmNsZS5yYWRpdXMpO1xyXG5cdFx0XHJcblx0dGhpcy5jb2xsaXNpb25HcmFwaGljLmRyYXdDaXJjbGUoMCwgMCwgNSk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICovXHJcbkdhbWVPYmplY3QucHJvdG90eXBlLmdldEJvdHRvbVJheU9yaWdpbnNXaXRoUmVjdCA9IGZ1bmN0aW9uKCBjb2xsaXNpb25SZWN0IClcclxue1xyXG5cdHZhciBvcmlnaW5zID0gW107XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNhbFJheWNhc3Q7IGkrKyApXHJcblx0e1xyXG5cdFx0b3JpZ2lucy5wdXNoKCBuZXcgUElYSS5Qb2ludCAoXHJcblx0XHRcdHRoaXMueCArIGNvbGxpc2lvblJlY3QueCArIHRoaXMuc2tpbldpZHRoICsgKChjb2xsaXNpb25SZWN0LndpZHRoIC0gKDIgKiB0aGlzLnNraW5XaWR0aCkpLyh0aGlzLnZlcnRpY2FsUmF5Y2FzdC0xKSAqIGkpLFxyXG5cdFx0XHR0aGlzLnkgKyBjb2xsaXNpb25SZWN0LnkgKyBjb2xsaXNpb25SZWN0LmhlaWdodCAtIHRoaXMuc2tpbldpZHRoICkgKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIG9yaWdpbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0Qm90dG9tUmF5T3JpZ2lucyA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLmdldEJvdHRvbVJheU9yaWdpbnNXaXRoUmVjdCggdGhpcy5jb2xsaXNpb25SZWN0ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0VG9wUmF5T3JpZ2luc1dpdGhSZWN0ID0gZnVuY3Rpb24oIGNvbGxpc2lvblJlY3QgKVxyXG57XHJcblx0dmFyIG9yaWdpbnMgPSBbXTtcclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNhbFJheWNhc3Q7IGkrKylcclxuXHR7XHJcblx0XHRvcmlnaW5zLnB1c2gobmV3IFBJWEkuUG9pbnRcclxuXHRcdChcclxuXHRcdFx0dGhpcy54ICsgY29sbGlzaW9uUmVjdC54ICsgdGhpcy5za2luV2lkdGggKyAoKGNvbGxpc2lvblJlY3Qud2lkdGggLSAoMiAqIHRoaXMuc2tpbldpZHRoKSkvKHRoaXMudmVydGljYWxSYXljYXN0LTEpICogaSksXHJcblx0XHRcdHRoaXMueSArIGNvbGxpc2lvblJlY3QueSArIHRoaXMuc2tpbldpZHRoXHJcblx0XHQpKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIG9yaWdpbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0VG9wUmF5T3JpZ2lucyA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLmdldFRvcFJheU9yaWdpbnNXaXRoUmVjdCggdGhpcy5jb2xsaXNpb25SZWN0ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0TGVmdFJheU9yaWdpbnNXaXRoUmVjdCA9IGZ1bmN0aW9uKCBjb2xsaXNpb25SZWN0IClcclxue1xyXG5cdHZhciBvcmlnaW5zID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuaG9yaXpvbnRhbFJheWNhc3Q7IGkrKylcclxuXHR7XHJcblx0XHRvcmlnaW5zLnB1c2gobmV3IFBJWEkuUG9pbnRcclxuXHRcdChcclxuXHRcdFx0dGhpcy54ICsgY29sbGlzaW9uUmVjdC54ICsgdGhpcy5za2luV2lkdGgsXHJcblx0XHRcdHRoaXMueSArIGNvbGxpc2lvblJlY3QueSArIHRoaXMuc2tpbldpZHRoICsgKChjb2xsaXNpb25SZWN0LmhlaWdodCAtICgyICogdGhpcy5za2luV2lkdGgpKS8odGhpcy5ob3Jpem9udGFsUmF5Y2FzdC0xKSAqIGkpXHJcblxyXG5cdFx0KSk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBvcmlnaW5zO1xyXG59XHJcblxyXG4vKipcclxuICovXHJcbkdhbWVPYmplY3QucHJvdG90eXBlLmdldExlZnRSYXlPcmlnaW5zID0gZnVuY3Rpb24oKVxyXG57XHJcblx0cmV0dXJuIHRoaXMuZ2V0TGVmdFJheU9yaWdpbnNXaXRoUmVjdCggdGhpcy5jb2xsaXNpb25SZWN0ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0UmlnaHRSYXlPcmlnaW5zV2l0aFJlY3QgPSBmdW5jdGlvbiggY29sbGlzaW9uUmVjdCApXHJcbntcclxuXHR2YXIgb3JpZ2lucyA9IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmhvcml6b250YWxSYXljYXN0OyBpKyspXHJcblx0e1xyXG5cdFx0b3JpZ2lucy5wdXNoKG5ldyBQSVhJLlBvaW50XHJcblx0XHQoXHJcblx0XHRcdHRoaXMueCArIGNvbGxpc2lvblJlY3QueCArIGNvbGxpc2lvblJlY3Qud2lkdGggLSB0aGlzLnNraW5XaWR0aCxcclxuXHRcdFx0dGhpcy55ICsgY29sbGlzaW9uUmVjdC55ICsgdGhpcy5za2luV2lkdGggKyAoKGNvbGxpc2lvblJlY3QuaGVpZ2h0IC0gKDIgKiB0aGlzLnNraW5XaWR0aCkpLyh0aGlzLmhvcml6b250YWxSYXljYXN0LTEpICogaSlcclxuXHJcblx0XHQpKTtcclxuXHR9XHJcblx0cmV0dXJuIG9yaWdpbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0UmlnaHRSYXlPcmlnaW5zID0gZnVuY3Rpb24oKVxyXG57XHJcblx0cmV0dXJuIHRoaXMuZ2V0UmlnaHRSYXlPcmlnaW5zV2l0aFJlY3QoIHRoaXMuY29sbGlzaW9uUmVjdCApO1xyXG59XHJcblxyXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5jb2xsaXNpb24gPSBmdW5jdGlvbihvYmopXHJcbntcclxuXHQvLyBSZWN0IC0gcmVjdCBjb2xsaXNpb25cclxuXHRpZih0aGlzLmNvbGxpc2lvblJlY3QgIT0gbnVsbCAmJiBvYmouY29sbGlzaW9uUmVjdCAhPSBudWxsKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnJlY3RSZWN0Q29sbGlzaW9uXHJcblx0XHQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR4ICAgICAgOiB0aGlzLnggKyB0aGlzLmNvbGxpc2lvblJlY3QueCxcclxuXHRcdFx0XHR5ICAgICAgOiB0aGlzLnkgKyB0aGlzLmNvbGxpc2lvblJlY3QueSxcclxuXHRcdFx0XHR3aWR0aCAgOiB0aGlzLmNvbGxpc2lvblJlY3Qud2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0IDogdGhpcy5jb2xsaXNpb25SZWN0LmhlaWdodFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0eCAgICAgIDogb2JqLnggKyBvYmouY29sbGlzaW9uUmVjdC54LFxyXG5cdFx0XHRcdHkgICAgICA6IG9iai55ICsgb2JqLmNvbGxpc2lvblJlY3QueSxcclxuXHRcdFx0XHR3aWR0aCAgOiBvYmouY29sbGlzaW9uUmVjdC53aWR0aCxcclxuXHRcdFx0XHRoZWlnaHQgOiBvYmouY29sbGlzaW9uUmVjdC5oZWlnaHRcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIGNpcmNsZSAtIGNpcmNsZSBjb2xsaXNpb25cclxuXHRpZih0aGlzLmNvbGxpc2lvbkNpcmNsZSAhPSBudWxsICYmIG9iai5jb2xsaXNpb25DaXJjbGUgIT0gbnVsbClcclxuXHR7XHJcblx0XHR2YXIgcDEgPVxyXG5cdFx0e1xyXG5cdFx0XHR4OiB0aGlzLnggKyB0aGlzLmNvbGxpc2lvbkNpcmNsZS54LFxyXG5cdFx0XHR5OiB0aGlzLnkgKyB0aGlzLmNvbGxpc2lvbkNpcmNsZS55XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBwMiA9XHJcblx0XHR7XHJcblx0XHRcdHg6IG9iai54ICsgb2JqLmNvbGxpc2lvbkNpcmNsZS54LFxyXG5cdFx0XHR5OiBvYmoueSArIG9iai5jb2xsaXNpb25DaXJjbGUueVxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3cocDEueCAtIHAyLngsIDIpICsgTWF0aC5wb3cocDEueSAtIHAyLnksIDIpKTtcclxuXHRcdHZhciBtYXhEaXN0YW5jZSA9IHRoaXMuY29sbGlzaW9uQ2lyY2xlLnJhZGl1cyArIG9iai5jb2xsaXNpb25DaXJjbGUucmFkaXVzO1xyXG5cclxuXHRcdHJldHVybiBkaXN0YW5jZSA8IG1heERpc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0Ly8gUmVjdCAtIGNpcmNsZSBjb2xsaXNpb25cclxuXHRpZigodGhpcy5jb2xsaXNpb25SZWN0ICE9IG51bGwgJiYgb2JqLmNvbGxpc2lvbkNpcmNsZSAhPSBudWxsKSB8fCAodGhpcy5jb2xsaXNpb25DaXJjbGUgIT0gbnVsbCAmJiBvYmouY29sbGlzaW9uUmVjdCAhPSBudWxsKSlcclxuXHR7XHJcblx0XHQvLyBUT0RPXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zb2xlLmVycm9yKFwiQ29sbGlzaW9uIGNhc2Ugbm90IGRlZmluZWRcIik7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5yZWN0UmVjdENvbGxpc2lvbiA9IGZ1bmN0aW9uKHJlY3QxLCByZWN0Milcclxue1xyXG5cdGlmIChyZWN0MS54IDwgcmVjdDIueCArIHJlY3QyLndpZHRoICYmXHJcblx0cmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxyXG5cdHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXHJcblx0cmVjdDEuaGVpZ2h0ICsgcmVjdDEueSA+IHJlY3QyLnkpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5saW5lTGluZUNvbGxpc2lvbiA9IGZ1bmN0aW9uKHAwLCBwMSwgcDIsIHAzKVxyXG57XHJcblx0dmFyIHMxX3gsIHMxX3ksIHMyX3gsIHMyX3k7XHJcbiAgICBzMV94ID0gcDEueCAtIHAwLng7XHJcblx0czFfeSA9IHAxLnkgLSBwMC55O1xyXG4gICAgczJfeCA9IHAzLnggLSBwMi54O1xyXG5cdHMyX3kgPSBwMy55IC0gcDIueTtcclxuXHJcbiAgICB2YXIgcywgdDtcclxuICAgIHMgPSAoLXMxX3kgKiAocDAueCAtIHAyLngpICsgczFfeCAqIChwMC55IC0gcDIueSkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuICAgIHQgPSAoIHMyX3ggKiAocDAueSAtIHAyLnkpIC0gczJfeSAqIChwMC54IC0gcDIueCkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuXHJcblx0aWYgKHMgPj0gMCAmJiBzIDw9IDEgJiYgdCA+PSAwICYmIHQgPD0gMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBJWEkuUG9pbnQocDAueCArICh0ICogczFfeCksIHAwLnkgKyAodCAqIHMxX3kpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4iLCJ2YXIgQ29tbW9uID0gcmVxdWlyZSggXCIuLi9Db21tb25cIiApO1xyXG52YXIgUm9vbSA9IHJlcXVpcmUoIFwiLi4vZ2FtZS9Sb29tXCIgKTtcclxudmFyIEdsb2JhbCA9IHJlcXVpcmUoIFwiLi4vZ2VuZXJhbC9HbG9iYWxcIiApO1xyXG52YXIgVHJhbnNmb3JtYXRpb25FZmZlY3QgPSByZXF1aXJlKCBcIi4vVHJhbnNmb3JtYXRpb25FZmZlY3RcIiApO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcbmZ1bmN0aW9uIExldmVsKCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXggKVxyXG57XHJcblx0Ly8gUGFyZW50IGluaXRpYWxpemF0aW9uLlxyXG5cdFBJWEkuQ29udGFpbmVyLmNhbGwoIHRoaXMgKTtcdFxyXG5cdFxyXG5cdFxyXG5cdC8vIENvbnN0YW50cy5cclxuXHR0aGlzLlRSQU5TRk9STUFUSU9OX1ZGWF9EVVJBVElPTiA9IDEuNTtcclxuXHR0aGlzLlRSQU5TRk9STUFUSU9OX0RFTEFZID0gMS4wO1xyXG5cdFxyXG5cdHRoaXMuU1RBVEVfSURMRSA9IDA7XHJcblx0dGhpcy5TVEFURV9UUkFOU0ZPUk1JTkdfQkVOID0gMTtcclxuXHR0aGlzLlNUQVRFX0dBTUVfT1ZFUiA9IDI7XHRcclxuXHR0aGlzLlNUQVRFX1NUQVJUX0NPVU5URE9XTiA9IDM7XHRcclxuXHR0aGlzLlNUQVRFX1RVVE9SSUFMID0gNDtcdFxyXG5cdFxyXG5cdFx0XHJcblx0Ly8gQXNzZXQgbWFuYWdlci5cclxuXHR0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XHJcblx0XHJcblx0Ly8gUGFyc2UgbGV2ZWwuXHJcblx0dGhpcy5kYXRhID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oIEdsb2JhbC5MRVZFTF9JRF9BUlJBWVsgY2hhcHRlckluZGV4IF1bIGxldmVsSW5kZXggXSApO1xyXG5cdC8vY29uc29sZS5sb2coIHRoaXMuX2RhdGEgKTtcclxuXHRcclxuXHQvLyBHZXQgdG90YWwgY29pbnMuXHJcblx0dmFyIHRvdGFsQ29pbnMgPSAwO1xyXG5cdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yb29tcy5sZW5ndGg7ICsraSApXHJcblx0e1xyXG5cdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgdGhpcy5kYXRhLnJvb21zWyBpIF0ub2JqZWN0cy5sZW5ndGg7ICsraiApXHJcblx0XHR7XHJcblx0XHRcdGlmICggdGhpcy5kYXRhLnJvb21zWyBpIF0ub2JqZWN0c1sgaiBdID09IDEgKVxyXG5cdFx0XHRcdCsrdG90YWxDb2lucztcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0Ly8gQ3JlYXRlIGEgZGF0YSBzdHJ1Y3R1cmUgdG8gc3RvcmUgdGhlIGxldmVsIHJlc3VsdC5cclxuXHR0aGlzLl9sZXZlbFJlc3VsdEluZm8gPSB7IFxyXG5cdFx0dGltZTpHbG9iYWwuR0FNRV9CQVNFX1RJTUUsIFxyXG5cdFx0c3RlcHM6MCwgXHJcblx0XHRjb2xsZWN0ZWRDb2luczowLCBcclxuXHRcdGNvbGxlY3RlZFBvd2VydXBzOjAsIFxyXG5cdFx0ZGVzdHJveWVkQmxvY2tzOjAsXHJcblx0XHRraWxsZWRFbmVtaWVzOjAsXHJcblx0XHR0b3RhbENvaW5zOnRvdGFsQ29pbnMsIFxyXG5cdFx0Y2hhcHRlckluZGV4OmNoYXB0ZXJJbmRleCwgXHJcblx0XHRsZXZlbEluZGV4OmxldmVsSW5kZXgsXHJcblx0XHRhcnJQb3dlcnVwSWQ6W119O1xyXG5cdFxyXG5cdC8vIFNldHVwIGZpcnN0IHJvb20uXHJcblx0dGhpcy5fY3VycmVudFJvb21JbmRleCA9IDA7XHJcblx0dGhpcy5yb29tID0gbmV3IFJvb20oIHRoaXMsIHRoaXMuZGF0YS5yb29tc1sgdGhpcy5fY3VycmVudFJvb21JbmRleCBdICk7XHJcblx0dGhpcy5hZGRDaGlsZEF0KCB0aGlzLnJvb20sIDAgKTtcclxuXHRcclxuXHQvLyBTaGFrZVxyXG5cdHRoaXMuX2lzU2hha2UgICAgICAgPSBmYWxzZTtcclxuXHR0aGlzLl9zaGFrZVRpbWUgICAgID0gMDtcclxuXHR0aGlzLl9zaGFrZVRpbWVFbmQgID0gMTtcclxuXHR0aGlzLl9zaGFrZVN0cmVuZ3RoID0gbmV3IFBJWEkuUG9pbnQoIDEwLDEwICk7XHRcclxuXHRcclxuXHR0aGlzLl9iZW5UcmFuc2Zvcm1hdGlvbiA9IG51bGw7XHJcblx0dGhpcy5fc3RhcnRDb3VudGRvd24gPSAwO1xyXG5cdHRoaXMuX3N0YXJ0Q291bnRkb3duVGltZXIgPSAwO1xyXG5cdHRoaXMuX3RyYW5zZm9ybWF0aW9uVmZ4VGltZXIgPSAwO1xyXG5cdHRoaXMuX3N0YXRlID0gdGhpcy5TVEFURV9TVEFSVF9DT1VOVERPV047XHJcblx0XHJcblx0XHJcblx0Ly8gU2lnbmFscy5cclxuXHR0aGlzLnNpZ25hbHMgPSB7fTtcclxuXHR0aGlzLnNpZ25hbHMub25OZXh0Um9vbSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xyXG5MZXZlbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUgKTtcclxuTGV2ZWwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGV2ZWw7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKi9cclxuTGV2ZWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIFxyXG57XHJcblx0Ly8gUm9vbS5cclxuXHR0aGlzLnJvb20uaW5pdCgpO1xyXG5cdFxyXG5cdC8vIFN0YXJ0IGNvdW50ZG93biB0ZXh0LlxyXG5cdHRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dENvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdHRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCBcIjNcIiwgeyBmb250OiBcIjIwMHB4IGFoa2lvXzEwMF9ncmVlbl9lbmRnYW1lXCIsIGFsaWduOiBcImNlbnRlclwiIH0gKTtcclxuXHR0aGlzLl9zdGFydENvdW50ZG93blRleHQudmlzaWJsZSA9IGZhbHNlO1xyXG5cdHRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dENvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fc3RhcnRDb3VudGRvd25UZXh0ICk7XHJcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fc3RhcnRDb3VudGRvd25UZXh0Q29udGFpbmVyICk7XHJcblx0dGhpcy5fc3RhcnRDb3VudGRvd25UZXh0Q29udGFpbmVyLnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIENvbW1vbi5TVEFHRV9XSURUSCAqIC41LCBDb21tb24uU1RBR0VfSEVJR0hUICogLjUgKTtcclxuXHRcclxuXHQvLyBEZWF0aCBzY3JlZW4uXHJcblx0dGhpcy5fZGVhdGhTY3JlZW4gPSBuZXcgUElYSS5TcHJpdGUoIENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1sgJ2JsYWNrU3F1YXJlJyBdICk7XHJcblx0dGhpcy5fZGVhdGhTY3JlZW4uYWxwaGEgPSAwO1xyXG5cdHRoaXMuX2RlYXRoU2NyZWVuLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xyXG5cdHRoaXMuX2RlYXRoU2NyZWVuLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XHJcblx0dGhpcy5fZGVhdGhTY3JlZW4ucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCgpO1xyXG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2RlYXRoU2NyZWVuICk7XHJcblx0XHJcblx0aWYgKCB0aGlzLl9sZXZlbFJlc3VsdEluZm8uY2hhcHRlckluZGV4ID09IDAgJiYgdGhpcy5fbGV2ZWxSZXN1bHRJbmZvLmxldmVsSW5kZXggPT0gMCApXHJcblx0e1x0XHJcblx0XHQvLyBQb2ludGVyIHNwcml0ZS5cclxuXHRcdHRoaXMucm9vbS5hdmF0YXIuc2V0QW5pbWF0aW9uKCAnaWRsZScsIHRydWUgKTtcclxuXHRcdHRoaXMuX3R1dG9yaWFsUG9pbnRlciA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIHAzLkRldmljZS5pc01vYmlsZSA/IFwicG9pbnRlcl9oYW5kXCIgOiBcInBvaW50ZXJfY3Vyc29yXCIgKSApO1xyXG5cdFx0dGhpcy5fdHV0b3JpYWxQb2ludGVyLnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIDI4MSwgMjY2ICk7XHJcblx0XHR0aGlzLl90dXRvcmlhbFBvaW50ZXIuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDEsIDAgKTtcclxuXHRcdHRoaXMucm9vbS5hZGRDaGlsZCggdGhpcy5fdHV0b3JpYWxQb2ludGVyIClcclxuXHRcdFxyXG5cdFx0Ly8gVmZ4LlxyXG5cdFx0dGhpcy5yb29tLnN0YXJ0TGluZURyYXcoIHRoaXMuX3R1dG9yaWFsUG9pbnRlci54LCB0aGlzLl90dXRvcmlhbFBvaW50ZXIueSApO1xyXG5cdFx0XHJcblx0XHQvLyBTdGFydCBwb2ludGVyIGFuaW1hdGlvbi5cclxuXHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cdFx0dGwudG8oIHRoaXMuX3R1dG9yaWFsUG9pbnRlciwgMywgeyB4Ojc1MywgeToxMjAsIGVhc2U6U2luZS5lYXNlSW5PdXQsIG9uQ29tcGxldGU6ZnVuY3Rpb24oKSB7IHRoaXMub25UdXRvcmlhbENvbXBsZXRlKCk7IH0sIG9uQ29tcGxldGVTY29wZTp0aGlzIH0sIDAgKTtcclxuXHRcdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7XHJcblx0XHRcclxuXHRcdC8vIERpc2FibGUgcGxheWVyIGlucHV0LlxyXG5cdFx0dGhpcy5yb29tLl9oaXRBcmVhLmludGVyYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5TVEFURV9UVVRPUklBTDtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0dGhpcy5zdGFydENvdW50ZG93bigpO1xyXG59XHJcblxyXG4vKipcclxuICovXHJcbkxldmVsLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHRzd2l0Y2ggKCB0aGlzLl9zdGF0ZSApXHJcblx0e1xyXG5cdFx0Y2FzZSB0aGlzLlNUQVRFX1RVVE9SSUFMOlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvb20ubW92ZUxpbmVEcmF3KCB0aGlzLl90dXRvcmlhbFBvaW50ZXIueCwgdGhpcy5fdHV0b3JpYWxQb2ludGVyLnkgKTtcclxuXHRcdFxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcclxuXHRcdGNhc2UgdGhpcy5TVEFURV9JRExFOlxyXG5cdFx0e1xyXG5cdFx0XHQvLyBTaGFrZVxyXG5cdFx0XHRpZiAoIHRoaXMuX2lzU2hha2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fc2hha2VUaW1lICs9IHAzLlRpbWVzdGVwLmRlbHRhVGltZTtcclxuXHRcdFx0XHRpZiAoIHRoaXMuX3NoYWtlVGltZSA+PSB0aGlzLl9zaGFrZVRpbWVFbmQgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuX3NoYWtlVGltZSA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLl9pc1NoYWtlID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMueCA9IDA7XHJcblx0XHRcdHRoaXMueSA9IDA7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoIHRoaXMuX2lzU2hha2UgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy54ICs9IHAzLlV0aWxzLnJhbmRvbUludCgtMSwxKSAqICh0aGlzLl9zaGFrZVN0cmVuZ3RoLnggKiAoMSAtIHRoaXMuX3NoYWtlVGltZS90aGlzLl9zaGFrZVRpbWVFbmQpKTtcclxuXHRcdFx0XHR0aGlzLnkgKz0gcDMuVXRpbHMucmFuZG9tSW50KC0xLDEpICogKHRoaXMuX3NoYWtlU3RyZW5ndGgueSAqICgxIC0gdGhpcy5fc2hha2VUaW1lL3RoaXMuX3NoYWtlVGltZUVuZCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSb29tXHJcblx0XHRcdHRoaXMucm9vbS51cGRhdGUoKTtcclxuXHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjYXNlIHRoaXMuU1RBVEVfVFJBTlNGT1JNSU5HX0JFTjpcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fdHJhbnNmb3JtYXRpb25WZnhUaW1lciArPSBwMy5UaW1lc3RlcC5kZWx0YVRpbWU7XHJcblx0XHRcdGlmICggdGhpcy5fYmVuVHJhbnNmb3JtYXRpb24gIT0gbnVsbCAmJiB0aGlzLl90cmFuc2Zvcm1hdGlvblZmeFRpbWVyID4gdGhpcy5UUkFOU0ZPUk1BVElPTl9ERUxBWSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJvb20uYXZhdGFyLnRyYW5zZm9ybSggdGhpcy5fYmVuVHJhbnNmb3JtYXRpb24gKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLl9iZW5UcmFuc2Zvcm1hdGlvbiA9IG51bGw7XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIHRoaXMuX3RyYW5zZm9ybWF0aW9uVmZ4VGltZXIgPiB0aGlzLlRSQU5TRk9STUFUSU9OX1ZGWF9EVVJBVElPTiApXHJcblx0XHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLlNUQVRFX0lETEU7XHJcblx0XHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjYXNlIHRoaXMuU1RBVEVfR0FNRV9PVkVSOlxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvb20uYXZhdGFyLnVwZGF0ZU1vdmVtZW50KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y2FzZSB0aGlzLlNUQVRFX1NUQVJUX0NPVU5URE9XTjpcclxuXHRcdHtcclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5yb29tLm9iamVjdHMuZGFuZ2Vycy5sZW5ndGg7IGkrKyApXHJcblx0XHRcdFx0dGhpcy5yb29tLm9iamVjdHMuZGFuZ2Vyc1sgaSBdLnVwZGF0ZSgpO1xyXG5cdFx0XHR0aGlzLnJvb20uYXZhdGFyLnNwaW5lLnVwZGF0ZSggcDMuVGltZXN0ZXAuZGVsdGFUaW1lICogdGhpcy5yb29tLmF2YXRhci5zcGluZVNwZWVkICk7XHJcblx0XHRcclxuXHRcdFx0dGhpcy5fc3RhcnRDb3VudGRvd25UaW1lciArPSBwMy5UaW1lc3RlcC5kZWx0YVRpbWU7XHJcblx0XHRcdGlmICggdGhpcy5fc3RhcnRDb3VudGRvd25UaW1lciA+PSAxIClcclxuXHRcdFx0e1x0XHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLl9zdGFydENvdW50ZG93blRpbWVyID0gdGhpcy5fc3RhcnRDb3VudGRvd25UaW1lciAtIDE7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdCsrdGhpcy5fc3RhcnRDb3VudGRvd247XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggdGhpcy5fc3RhcnRDb3VudGRvd24gPiAyID8gXCJzZnhfYnRuX2xldmVsXCIgOiBcInNmeF9idG5fYmFja1wiICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gVXBkYXRlIHRleHQuXHJcblx0XHRcdFx0dGhpcy5fc3RhcnRDb3VudGRvd25UZXh0LnRleHQgPSAoIDMgLSB0aGlzLl9zdGFydENvdW50ZG93biApLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0Ly90aGlzLl9zdGFydENvdW50ZG93blRleHQucG9zaXRpb24ueCA9IHRoaXMucm9vbS5hdmF0YXIucG9zaXRpb24ueCArIHRoaXMucm9vbS5wb3NpdGlvbi54ICsgdGhpcy5yb29tLmF2YXRhci5jb2xsaXNpb25SZWN0LndpZHRoICogLjUgLSB0aGlzLl9zdGFydENvdW50ZG93blRleHQud2lkdGggKiAuNTsgXHJcblx0XHRcdFx0dGhpcy5fc3RhcnRDb3VudGRvd25UZXh0LnBvc2l0aW9uLnggPSAtdGhpcy5fc3RhcnRDb3VudGRvd25UZXh0LndpZHRoICogLjU7IFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIFRleHQgYW5pbWF0aW9uLlxyXG5cdFx0XHRcdHRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dENvbnRhaW5lci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAxLCAxICk7XHJcblx0XHRcdFx0dGhpcy5fc3RhcnRDb3VudGRvd25UZXh0LmFscGhhID0gMTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuXHRcdFx0XHR0bC50byggdGhpcy5fc3RhcnRDb3VudGRvd25UZXh0LCAwLjgsIHsgYWxwaGE6MCwgZWFzZTpTaW5lLmVhc2VJbiB9LCAwLjEgKTtcclxuXHRcdFx0XHR0bC50byggdGhpcy5fc3RhcnRDb3VudGRvd25UZXh0Q29udGFpbmVyLnNjYWxlLCAwLjgsIHsgeDoyLCB5OjIsIGVhc2U6U2luZS5lYXNlSW4gfSwgMC4xICk7XHJcblx0XHRcdFx0Q29tbW9uLmFuaW1hdG9yLmFkZCggdGwgKTtcclxuXHRcdFx0XHJcblx0XHRcdFx0aWYgKCB0aGlzLl9zdGFydENvdW50ZG93biA+IDIgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dC52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuU1RBVEVfSURMRTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvLyBTdGF0aWMgcGFydGljbGUgc3lzdGVtcy5cclxuXHR0aGlzLnJvb20udXBkYXRlU3RhdGljUGFydGljbGVTeXN0ZW1zKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuTGV2ZWwucHJvdG90eXBlLnNoYWtlID0gZnVuY3Rpb24oIHRpbWUsIGFtb3VudCApXHJcbntcclxuXHR0aGlzLl9pc1NoYWtlICAgICAgID0gdHJ1ZTtcclxuXHR0aGlzLl9zaGFrZVRpbWVFbmQgID0gdGltZTtcclxuXHR0aGlzLl9zaGFrZVN0cmVuZ3RoID0gYW1vdW50O1xyXG59XHJcblxyXG4vKipcclxuICovXHJcbkxldmVsLnByb3RvdHlwZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5wYXJlbnQucmVzdGFydCgpO1xyXG5cdFxyXG5cdC8vIFNldHVwIGZpcnN0IHJvb20uXHJcblx0dGhpcy5yZW1vdmVDaGlsZCggdGhpcy5yb29tICk7XHJcblx0dGhpcy5yb29tID0gbmV3IFJvb20oIHRoaXMsIHRoaXMuZGF0YS5yb29tc1sgdGhpcy5fY3VycmVudFJvb21JbmRleCBdICk7XHJcblx0dGhpcy5yb29tLmluaXQoKTtcclxuXHR0aGlzLmFkZENoaWxkQXQoIHRoaXMucm9vbSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICovXHJcbkxldmVsLnByb3RvdHlwZS5zdGFydENvdW50ZG93biA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dC50ZXh0ID0gXCIzXCI7XHJcblx0Lyp0aGlzLl9zdGFydENvdW50ZG93blRleHQucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXHJcblx0XHR0aGlzLnJvb20uYXZhdGFyLnBvc2l0aW9uLnggKyB0aGlzLnJvb20ucG9zaXRpb24ueCArIHRoaXMucm9vbS5hdmF0YXIuY29sbGlzaW9uUmVjdC53aWR0aCAqIC41IC0gdGhpcy5fc3RhcnRDb3VudGRvd25UZXh0LndpZHRoICogLjUsIFxyXG5cdFx0dGhpcy5yb29tLmF2YXRhci5wb3NpdGlvbi55ICsgdGhpcy5yb29tLnBvc2l0aW9uLnkgLSB0aGlzLnJvb20uYXZhdGFyLmNvbGxpc2lvblJlY3QuaGVpZ2h0ICogMy41ICk7Ki9cclxuXHR0aGlzLl9zdGFydENvdW50ZG93blRleHQucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXHJcblx0XHQtdGhpcy5fc3RhcnRDb3VudGRvd25UZXh0LndpZHRoICogLjUsIFxyXG5cdFx0LXRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dC5oZWlnaHQgKiAuNSApO1xyXG5cdHRoaXMuX3N0YXJ0Q291bnRkb3duVGV4dC52aXNpYmxlID0gdHJ1ZTsgXHJcblx0dGhpcy5fc3RhcnRDb3VudGRvd24gPSAwO1xyXG5cdHRoaXMuX3N0YXJ0Q291bnRkb3duVGltZXIgPSAwO1xyXG5cdHRoaXMucm9vbS5hdmF0YXIuc2V0QW5pbWF0aW9uKCAnaWRsZScsIHRydWUgKTtcclxuXHRcclxuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInNmeF9idG5fYmFja1wiICk7XHJcblx0XHJcblx0Ly8gVGV4dCBhbmltYXRpb24uXHJcblx0dGhpcy5fc3RhcnRDb3VudGRvd25UZXh0Q29udGFpbmVyLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDEsIDEgKTtcclxuXHR0aGlzLl9zdGFydENvdW50ZG93blRleHQuYWxwaGEgPSAxO1xyXG5cdFx0XHRcdFxyXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cdHRsLnRvKCB0aGlzLl9zdGFydENvdW50ZG93blRleHQsIDAuOCwgeyBhbHBoYTowLCBlYXNlOlNpbmUuZWFzZUluIH0sIDAuMSApO1xyXG5cdHRsLnRvKCB0aGlzLl9zdGFydENvdW50ZG93blRleHRDb250YWluZXIuc2NhbGUsIDAuOCwgeyB4OjIsIHk6MiwgZWFzZTpTaW5lLmVhc2VJbiB9LCAwLjEgKTtcclxuXHRDb21tb24uYW5pbWF0b3IuYWRkKCB0bCApO1xyXG5cdFxyXG5cdHRoaXMuX3N0YXRlID0gdGhpcy5TVEFURV9TVEFSVF9DT1VOVERPV047XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuTGV2ZWwucHJvdG90eXBlLmxvYWROZXh0Um9vbSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdCsrdGhpcy5fY3VycmVudFJvb21JbmRleDtcclxuXHRcclxuXHR0aGlzLnNpZ25hbHMub25OZXh0Um9vbS5kaXNwYXRjaCggdGhpcy5fY3VycmVudFJvb21JbmRleCwgdGhpcy5yb29tLmlzQWxsQ29pbnNDb2xsZWN0ZWQoKSApO1xyXG5cclxuXHR0aGlzLnJlbW92ZUNoaWxkKCB0aGlzLnJvb20gKTtcclxuXHR0aGlzLnJvb20gPSBuZXcgUm9vbSggdGhpcywgdGhpcy5kYXRhLnJvb21zWyB0aGlzLl9jdXJyZW50Um9vbUluZGV4IF0gKTtcclxuXHR0aGlzLnJvb20uaW5pdCgpO1xyXG5cdHRoaXMuYWRkQ2hpbGRBdCggdGhpcy5yb29tLCAwICk7XHJcblx0XHJcblx0dGhpcy5zdGFydENvdW50ZG93bigpO1xyXG59XHJcblxyXG5MZXZlbC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5yb29tLnJlc2l6ZSgpO1xyXG59XHJcblxyXG5MZXZlbC5wcm90b3R5cGUuc2V0VHJhbnNmb3JtYXRpb24gPSBmdW5jdGlvbiggdHJhbnNmb3JtYXRpb24gKVxyXG57XHJcblx0dGhpcy5fYmVuVHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbjtcclxuXHRcclxuXHQvLyBWZnguXHJcblx0dmFyIHRyYW5zZm9ybWF0aW9uRWZmZWN0ID0gbmV3IFRyYW5zZm9ybWF0aW9uRWZmZWN0KCk7XHJcbiAgICB0cmFuc2Zvcm1hdGlvbkVmZmVjdC54ID0gdGhpcy5yb29tLmF2YXRhci54O1xyXG4gICAgdHJhbnNmb3JtYXRpb25FZmZlY3QueSA9IHRoaXMucm9vbS5hdmF0YXIueSAtIHRoaXMucm9vbS5hdmF0YXIuY29sbGlzaW9uUmVjdC5oZWlnaHQgKiAuNTtcclxuICAgIHRyYW5zZm9ybWF0aW9uRWZmZWN0LmFuaW1hdGUoKTtcclxuICAgIHRoaXMucm9vbS5hZGRDaGlsZCggdHJhbnNmb3JtYXRpb25FZmZlY3QgKTtcclxuXHJcblx0Ly8gU2Z4LlxyXG4gICAgcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfb21uaXRyaXhfdHJhbnNmb3JtXzAwXCIgKTtcclxuXHR0aGlzLnJvb20uYXZhdGFyLnN0b3BSdW5TZngoKTtcclxuXHRcclxuXHR0aGlzLl90cmFuc2Zvcm1hdGlvblZmeFRpbWVyID0gMDtcclxuXHRcclxuXHR0aGlzLl9zdGF0ZSA9IHRoaXMuU1RBVEVfVFJBTlNGT1JNSU5HX0JFTjtcdFxyXG59XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkxldmVsLnByb3RvdHlwZS5vblR1dG9yaWFsQ29tcGxldGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl90dXRvcmlhbFBvaW50ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG5cdHRoaXMucm9vbS5lbmRMaW5lRHJhdygpOyBcclxuXHR0aGlzLnJvb20uX2hpdEFyZWEuaW50ZXJhY3RpdmUgPSB0cnVlOyBcclxuXHR0aGlzLnN0YXJ0Q291bnRkb3duKCk7XHJcblx0XHJcblx0dGhpcy5yb29tLnNwbGluZUxheWVyLmNsZWFyKCk7XHJcbn1cclxuXHJcbkxldmVsLnByb3RvdHlwZS5vbkdhbWVPdmVyID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblx0dGwudG8oIHRoaXMuX2RlYXRoU2NyZWVuLCAwLjUsIHsgYWxwaGE6MSwgZWFzZTpTaW5lLmVhc2VJbiwgb25Db21wbGV0ZTpmdW5jdGlvbigpIHsgdGhpcy5yZXN0YXJ0KCk7IH0sIG9uQ29tcGxldGVTY29wZTp0aGlzIH0sIDAgKTtcclxuXHR0bC50byggdGhpcy5fZGVhdGhTY3JlZW4sIDAuNSwgeyBhbHBoYTowLCBlYXNlOlNpbmUuZWFzZU91dCwgb25Db21wbGV0ZTpmdW5jdGlvbigpIHsgdGhpcy5zdGFydENvdW50ZG93bigpOyB9LCBvbkNvbXBsZXRlU2NvcGU6dGhpcyB9LCAwLjc1ICk7XHJcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCggdGwgKTtcclxuXHRcclxuXHR0aGlzLl9zdGF0ZSA9IHRoaXMuU1RBVEVfR0FNRV9PVkVSO1x0XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMgLyBTRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSggXHJcblx0TGV2ZWwucHJvdG90eXBlLCBcclxuXHRcImxldmVsUmVzdWx0SW5mb1wiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9sZXZlbFJlc3VsdEluZm87IH0gfSApO1xyXG5cdFxyXG4vKipcclxuICovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSggXHJcblx0TGV2ZWwucHJvdG90eXBlLCBcclxuXHRcImN1cnJlbnRSb29tSW5kZXhcIiwgXHJcblx0eyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJvb21JbmRleDsgfSB9ICk7XHJcblx0XHJcblx0LyoqXHJcbiAqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoIFxyXG5cdExldmVsLnByb3RvdHlwZSwgXHJcblx0XCJzdGF0ZVwiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9zdGF0ZTsgfSB9ICk7IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIFBvd2VydXAgPSByZXF1aXJlKCBcIi4vUG93ZXJ1cFwiICk7XHJcbnZhciBPdmVyZmxvd1RyYW5zZm9ybWF0aW9uID0gcmVxdWlyZSggXCIuL092ZXJmbG93VHJhbnNmb3JtYXRpb25cIiApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIE92ZXJmbG93UG93ZXJ1cCggcm9vbSApXHJcbntcclxuXHRQb3dlcnVwLmNhbGwoIHRoaXMsIFwib3ZlcmZsb3dfcG93ZXJ1cFwiLCBcImljb25fb3ZlcmZsb3dcIiwgcm9vbSApO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gT3ZlcmZsb3dQb3dlcnVwO1xyXG5PdmVyZmxvd1Bvd2VydXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUG93ZXJ1cC5wcm90b3R5cGUgKTtcclxuT3ZlcmZsb3dQb3dlcnVwLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE92ZXJmbG93UG93ZXJ1cDtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuT3ZlcmZsb3dQb3dlcnVwLnByb3RvdHlwZS5waWNrdXAgPSBmdW5jdGlvbigpXHJcbntcclxuXHRpZiAoIHRoaXMudGFrZW4gKSByZXR1cm47XHJcblx0XHJcblx0UG93ZXJ1cC5wcm90b3R5cGUucGlja3VwLmNhbGwoIHRoaXMgKTtcclxuXHRcclxuXHR0aGlzLl9yb29tLmxldmVsLnNldFRyYW5zZm9ybWF0aW9uKCBuZXcgT3ZlcmZsb3dUcmFuc2Zvcm1hdGlvbiggdGhpcy5fcm9vbSApICk7XHJcbn0iLCJ2YXIgQ29tbW9uID0gcmVxdWlyZSggXCIuLi9Db21tb25cIiApO1xyXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoIFwiLi9HYW1lT2JqZWN0XCIgKTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIE92ZXJmbG93U2hvdCggZGlyZWN0aW9uLCByb29tIClcclxue1xyXG5cdEdhbWVPYmplY3QuY2FsbCggdGhpcywgXCJPdmVyZmxvd1Nob3RcIiApO1xyXG5cdFxyXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHRcclxuXHR0aGlzLl9zcHJpdGUgPSBudWxsO1xyXG5cdHRoaXMuX3Jvb20gPSByb29tO1xyXG5cdHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHR0aGlzLl9oU3BlZWQgPSA2MDA7IC8vIHB4L3NcclxuXHR0aGlzLl9jb2xsaXNpb25zID0ge1xyXG5cdFx0XHRsZWZ0ICAgICAgICAgOiBmYWxzZSxcclxuXHRcdFx0cmlnaHQgICAgICAgIDogZmFsc2VcclxuXHRcdH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBPdmVyZmxvd1Nob3Q7XHJcbk92ZXJmbG93U2hvdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBHYW1lT2JqZWN0LnByb3RvdHlwZSApO1xyXG5PdmVyZmxvd1Nob3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3ZlcmZsb3dTaG90O1xyXG5cclxuT3ZlcmZsb3dTaG90LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oIHgsIHkgKVxyXG57XHJcblx0Ly8gU3Bhd24gcG9zaXRpb25cclxuXHR0aGlzLnggPSB4O1xyXG5cdHRoaXMueSA9IHk7XHRcclxuXHJcblx0Ly8gU3ByaXRlLlxyXG5cdHRoaXMuX3Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwicHJvamVjdGlsZV9vdmVyZmxvd1wiICkgKTtcclxuXHR0aGlzLl9zcHJpdGUuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XHJcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fc3ByaXRlICk7XHRcclxuXHR0aGlzLl9zcHJpdGUuc2NhbGUueCA9IE1hdGguYWJzKCB0aGlzLl9zcHJpdGUuc2NhbGUueCApICogdGhpcy5fZGlyZWN0aW9uO1xyXG5cclxuXHQvLyBDb2xsaWRlclxyXG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSggLXRoaXMuX3Nwcml0ZS53aWR0aCAqIDAuNSwgLXRoaXMuX3Nwcml0ZS5oZWlnaHQgKiAwLjUsIHRoaXMuX3Nwcml0ZS53aWR0aCwgdGhpcy5fc3ByaXRlLmhlaWdodCApO1xyXG5cdHRoaXMuX2VuZW15Q29sbGlzaW9uUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSggLXRoaXMuX3Nwcml0ZS53aWR0aCAqIDAuNSwgLXRoaXMuX3Nwcml0ZS5oZWlnaHQgKiAwLjc1LCB0aGlzLl9zcHJpdGUud2lkdGgsIHRoaXMuX3Nwcml0ZS5oZWlnaHQgKiAxLjI1ICk7XHJcblx0Ly90aGlzLmRyYXdDb2xsaXNpb24oKTtcclxufVxyXG5cclxuT3ZlcmZsb3dTaG90LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgZHggPSB0aGlzLl9oU3BlZWQgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKiB0aGlzLl9kaXJlY3Rpb247XHJcblxyXG5cdC8vIFJlc2V0IGNvbGxpc2lvbnNcclxuXHR0aGlzLl9jb2xsaXNpb25zLmxlZnQgICAgICAgICA9IGZhbHNlO1xyXG5cdHRoaXMuX2NvbGxpc2lvbnMucmlnaHQgICAgICAgID0gZmFsc2U7XHJcblxyXG5cdC8vIEJsb2NrcyBob3Jpem9udGFsIGNvbGxpc2lvbnNcclxuXHRpZiAoIGR4ICE9IDAgKVxyXG5cdHtcclxuXHRcdGlmICggZHggPiAwIClcclxuXHRcdFx0dmFyIHJheU9yaWdpbnMgPSB0aGlzLmdldFJpZ2h0UmF5T3JpZ2lucygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR2YXIgcmF5T3JpZ2lucyA9IHRoaXMuZ2V0TGVmdFJheU9yaWdpbnMoKTtcclxuXHJcblx0XHR2YXIgcmF5ID0gbmV3IFBJWEkuUG9pbnQoIGR4ICsgdGhpcy5za2luV2lkdGggKiBNYXRoLnNpZ24oIGR4ICksIDAgKTtcclxuXHRcdGZvciAoIHZhciByID0gMDsgciA8IHJheU9yaWdpbnMubGVuZ3RoICYmIGR4ICE9IDA7IHIrKyApXHJcblx0XHR7XHJcblx0XHRcdC8vIE1vdmVtZW50IHJheSB2ZXJ0aWNlc1xyXG5cdFx0XHR2YXIgYXZhdGFyUDEgPSByYXlPcmlnaW5zWyByIF07XHJcblx0XHRcdC8vIGF2YXRhclAxLnkgKz0gbW92ZW1lbnQueTtcclxuXHRcdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoIGF2YXRhclAxLnggKyByYXkueCwgYXZhdGFyUDEueSArIHJheS55ICk7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgYiA9IDA7IGIgPCB0aGlzLl9yb29tLmJsb2Nrcy5sZW5ndGg7IGIrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIGR4ID4gMCAmJiAhdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcuY29sbGlzaW9ucy5sZWZ0ICkgY29udGludWU7XHJcblx0XHRcdFx0aWYgKCBkeCA8IDAgJiYgIXRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmNvbGxpc2lvbnMucmlnaHQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0Ly8gU2VnbWVudCB2ZXJ0aWNlc1xyXG5cdFx0XHRcdHZhciBibG9ja1AxID0gbmV3IFBJWEkuUG9pbnQoIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLnggKyAoIGR4IDwgMCA/IHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLndpZHRoIDogMCApLCB0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy55ICk7XHJcblx0XHRcdFx0dmFyIGJsb2NrUDIgPSBuZXcgUElYSS5Qb2ludCggYmxvY2tQMS54LCBibG9ja1AxLnkgKyB0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy5oZWlnaHQgKTtcclxuXHJcblx0XHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0XHR2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5saW5lTGluZUNvbGxpc2lvbiggYXZhdGFyUDEsIGF2YXRhclAyLCBibG9ja1AxLCBibG9ja1AyICk7XHJcblx0XHRcdFx0aWYgKCBpbnRlcnNlY3Rpb24gKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBkaXN0YW5jZSA9ICBpbnRlcnNlY3Rpb24ueCAtIGF2YXRhclAxLnggLSB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbiggZHggKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGR4ID4gMCApXHJcblx0XHRcdFx0XHRcdHRoaXMuX2NvbGxpc2lvbnMucmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9jb2xsaXNpb25zLmxlZnQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdGR4ID0gZGlzdGFuY2U7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXHJcblx0XHRcdFx0XHRpZiAoIE1hdGguY2xvc2VFbm91Z2goIGR4LCAwICkgKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkeCA9IDA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIERlY3JlYXNlIHRoZSBsZW5ndGggb2YgZnV0dXJlIHJheWNhc3RzXHJcblx0XHRcdFx0XHRhdmF0YXJQMi54IC09IHJheS54O1xyXG5cdFx0XHRcdFx0cmF5LnggPSBkaXN0YW5jZSArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKCBkeCApO1xyXG5cdFx0XHRcdFx0YXZhdGFyUDIueCArPSByYXkueDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0Ly8gRGVzdHJveSB0aGUgc2hvdC5cclxuXHRpZiAoIHRoaXMuX2NvbGxpc2lvbnMucmlnaHQgfHwgdGhpcy5fY29sbGlzaW9ucy5sZWZ0IClcclxuXHRcdHRoaXMuaXNHYXJiYWdlID0gdHJ1ZTtcclxuXHRpZiAoICF0aGlzLmlzR2FyYmFnZSApXHJcblx0XHR0aGlzLnggKz0gZHg7XHJcbn1cclxuXHJcbk1hdGguRVBTSUxPTiA9IDFlLTY7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB0d28gZmxvYXRpbmctcG9pbnQgdmFsdWVzIGYxIGFuZCBmMiBhcmUgY2xvc2UgZW5vdWdoIHRvZ2V0aGVyIHRoYXQgdGhleSBjYW4gYmUgY29uc2lkZXJlZCBlcXVhbC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGYxXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmMlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbk1hdGguY2xvc2VFbm91Z2ggPSBmdW5jdGlvbihmMSwgZjIpXHJcbntcclxuXHRyZXR1cm4gTWF0aC5hYnMoKGYxIC0gZjIpIC8gKChmMiA9PSAwLjApID8gMS4wIDogZjIpKSA8IE1hdGguRVBTSUxPTjtcclxufVxyXG5cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRPdmVyZmxvd1Nob3QucHJvdG90eXBlLCBcclxuXHRcImVuZW15Q29sbGlzaW9uUmVjdFwiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9lbmVteUNvbGxpc2lvblJlY3Q7IH0gfSApOyIsInZhciBDb21tb24gICAgPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XHJcbnZhciBUcmFuc2Zvcm1hdGlvbiA9IHJlcXVpcmUoIFwiLi9UcmFuc2Zvcm1hdGlvblwiICk7XHJcbnZhciBPdmVyZmxvd1Nob3QgPSByZXF1aXJlKCBcIi4vT3ZlcmZsb3dTaG90XCIgKTtcclxuXHJcbnZhciBnX292ZXJmbG93VHJhbnNmb3JtYXRpb24gPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gT3ZlcmZsb3dUcmFuc2Zvcm1hdGlvbiggcm9vbSApXHJcbntcclxuXHRUcmFuc2Zvcm1hdGlvbi5jYWxsKCB0aGlzLCByb29tICk7XHRcclxuXHR0aGlzLl9pZCA9IHRoaXMuVFJBTlNGT1JNQVRJT05fSURfT1ZFUkZMT1c7XHJcblx0XHJcblx0XHJcblx0dGhpcy5TVEFURV9GSU5ESU5HX1RBUkdFVCA9IDA7XHJcblx0dGhpcy5TVEFURV9TSE9PVElORyA9IDE7XHJcblx0XHJcblx0dGhpcy5SRUxPQURJTkdfVElNRSA9IC43NTtcclxuXHR0aGlzLlNIT09UX1JBTkdFID0gNDAwO1xyXG5cdFxyXG5cdHRoaXMuX3JlbG9hZGluZ1RpbWVyID0gdGhpcy5SRUxPQURJTkdfVElNRTtcclxuXHR0aGlzLl9zdGF0ZSA9IHRoaXMuU1RBVEVfRklORElOR19UQVJHRVQ7XHJcblx0XHJcblx0Z19vdmVyZmxvd1RyYW5zZm9ybWF0aW9uID0gdGhpcztcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IE92ZXJmbG93VHJhbnNmb3JtYXRpb247XHJcbk92ZXJmbG93VHJhbnNmb3JtYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlICk7XHJcbk92ZXJmbG93VHJhbnNmb3JtYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3ZlcmZsb3dUcmFuc2Zvcm1hdGlvbjtcclxuXHJcblxyXG5PdmVyZmxvd1RyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcdFxyXG5cdFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS51cGRhdGUuY2FsbCggdGhpcyApO1xyXG5cdFxyXG5cdFxyXG5cdGlmICggdGhpcy5fcmVsb2FkaW5nVGltZXIgPCB0aGlzLlJFTE9BRElOR19USU1FIClcclxuXHRcdHRoaXMuX3JlbG9hZGluZ1RpbWVyICs9IHAzLlRpbWVzdGVwLmRlbHRhVGltZTsgXHJcblx0XHJcblx0dmFyIGF2YXRhciA9IHRoaXMuX3Jvb20uYXZhdGFyO1xyXG5cdGlmICggdGhpcy5fc3RhdGUgPT0gdGhpcy5TVEFURV9GSU5ESU5HX1RBUkdFVCAmJiBhdmF0YXIudmVsb2NpdHkueSA8IGF2YXRhci5sYW5kU3BlZWQgJiYgIWF2YXRhci5pc0xhbmRpbmcgJiYgYXZhdGFyLmN1cnJlbnRTcGluZUFuaW1hdGlvbi5uYW1lICE9IFwibGFuZF90b19ydW5cIiApXHJcblx0e1x0XHRcclxuXHRcdHZhciBhdmF0YXJEaXJlY3Rpb24gPSBNYXRoLnNpZ24oIGF2YXRhci5zcGluZUNvbnRhaW5lci5zY2FsZS54ICk7XHJcblx0XHRcclxuXHRcdC8vIExvb2sgZm9yIGVuZW1pZXMgYXQgcmFuZ2UgYW5kIHNob290LlxyXG5cdFx0Ly8gRmluZCB0aGUgcmF5IG9yaWdpbi5cclxuXHRcdHZhciBhdmF0YXJQMSA9IG51bGw7XHRcclxuXHRcdGlmICggYXZhdGFyRGlyZWN0aW9uID4gMCApXHJcblx0XHR7XHJcblx0XHRcdGF2YXRhclAxID0gbmV3IFBJWEkuUG9pbnQgKFxyXG5cdFx0XHRcdGF2YXRhci54ICsgYXZhdGFyLmNvbGxpc2lvblJlY3QueCArIGF2YXRhci5jb2xsaXNpb25SZWN0LndpZHRoIC0gYXZhdGFyLnNraW5XaWR0aCxcclxuXHRcdFx0XHRhdmF0YXIueSArIGF2YXRhci5jb2xsaXNpb25SZWN0LnkgKyBhdmF0YXIuc2tpbldpZHRoICsgYXZhdGFyLmNvbGxpc2lvblJlY3QuaGVpZ2h0ICogLjQgKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0YXZhdGFyUDEgPSBuZXcgUElYSS5Qb2ludCAoXHJcblx0XHRcdFx0YXZhdGFyLnggKyBhdmF0YXIuY29sbGlzaW9uUmVjdC54ICsgYXZhdGFyLmNvbGxpc2lvblJlY3Qud2lkdGgsXHJcblx0XHRcdFx0YXZhdGFyLnkgKyBhdmF0YXIuY29sbGlzaW9uUmVjdC55ICsgYXZhdGFyLnNraW5XaWR0aCArIGF2YXRhci5jb2xsaXNpb25SZWN0LmhlaWdodCAqIC40ICk7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0Ly8gUmF5Y2FzdCBmb3IgYmxvY2tzIHRoYXQgb2JzdHJ1Y3QgQmVuJ3Mgc2lnaHRsaW5lLlxyXG5cdFx0dmFyIGlzRW5lbXlEZXRlY3RlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoIGF2YXRhclAxLnggKyBhdmF0YXJEaXJlY3Rpb24gKiB0aGlzLlNIT09UX1JBTkdFLCBhdmF0YXJQMS55ICk7XHJcblx0XHQvLyBERUJVRzpcclxuXHRcdC8vdGhpcy5fcm9vbS5fZGVidWdEcmF3Lm1vdmVUbyggYXZhdGFyUDEueCwgYXZhdGFyUDEueSApO1xyXG5cdFx0Ly90aGlzLl9yb29tLl9kZWJ1Z0RyYXcubGluZVRvKCBhdmF0YXJQMi54LCBhdmF0YXJQMi55ICk7XHJcblx0XHRcclxuXHRcdC8vIFJheWNhc3QgZW5lbWllcy5cclxuXHRcdHZhciBkZXRlY3RlZEVuZW15WCA9IG51bGw7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl9yb29tLm9iamVjdHMuZGFuZ2Vycy5sZW5ndGg7ICsraSApXHJcblx0XHR7XHJcblx0XHRcdHZhciBkYW5nZXJBdXggPSB0aGlzLl9yb29tLm9iamVjdHMuZGFuZ2Vyc1sgaSBdO1xyXG5cdFx0XHRpZiAoIGRhbmdlckF1eC50YXJnZXRDb2xsaXNpb25SZWN0ICE9IG51bGwgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gQmxvY2sgc2VnbWVudCBQMSAtIFAyLlxyXG5cdFx0XHRcdHZhciBkYW5nZXJQMSA9IG5ldyBQSVhJLlBvaW50KCBcclxuXHRcdFx0XHRcdGRhbmdlckF1eC54ICsgZGFuZ2VyQXV4LnRhcmdldENvbGxpc2lvblJlY3QueCArICggYXZhdGFyRGlyZWN0aW9uIDwgMCA/IGRhbmdlckF1eC50YXJnZXRDb2xsaXNpb25SZWN0LndpZHRoIDogMCApLCBcclxuXHRcdFx0XHRcdGRhbmdlckF1eC55ICsgZGFuZ2VyQXV4LnRhcmdldENvbGxpc2lvblJlY3QueSApO1xyXG5cdFx0XHRcdHZhciBkYW5nZXJQMiA9IG5ldyBQSVhJLlBvaW50KCBkYW5nZXJQMS54LCBkYW5nZXJQMS55ICsgZGFuZ2VyQXV4LnRhcmdldENvbGxpc2lvblJlY3QuaGVpZ2h0ICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gREVCVUc6XHJcblx0XHRcdFx0Ly90aGlzLl9yb29tLl9kZWJ1Z0RyYXcubW92ZVRvKCBkYW5nZXJQMS54LCBkYW5nZXJQMS55ICk7XHJcblx0XHRcdFx0Ly90aGlzLl9yb29tLl9kZWJ1Z0RyYXcubGluZVRvKCBkYW5nZXJQMi54LCBkYW5nZXJQMi55ICk7XHJcblxyXG5cdFx0XHRcdC8vIExpbmUtbGluZSBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcblx0XHRcdFx0aWYgKCBhdmF0YXIubGluZUxpbmVDb2xsaXNpb24oIGF2YXRhclAxLCBhdmF0YXJQMiwgZGFuZ2VyUDEsIGRhbmdlclAyICkgKVxyXG5cdFx0XHRcdHtcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGV0ZWN0ZWRFbmVteVggPSBkYW5nZXJQMS54O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICggZGV0ZWN0ZWRFbmVteVggIT0gbnVsbCApXHJcblx0XHR7XHJcblx0XHRcdHZhciBpc1NpZ2h0bGluZU9ic3RydWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fcm9vbS5ibG9ja3MubGVuZ3RoOyArK2kgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gQmxvY2sgc2VnbWVudCBQMSAtIFAyLlxyXG5cdFx0XHRcdHZhciBibG9ja1AxID0gbmV3IFBJWEkuUG9pbnQoIFxyXG5cdFx0XHRcdFx0dGhpcy5fcm9vbS5ibG9ja3NbIGkgXS5jb25maWcueCArICggYXZhdGFyRGlyZWN0aW9uIDwgMCA/IHRoaXMuX3Jvb20uYmxvY2tzWyBpIF0uY29uZmlnLndpZHRoIDogMCApLCBcclxuXHRcdFx0XHRcdHRoaXMuX3Jvb20uYmxvY2tzWyBpIF0uY29uZmlnLnkgKTtcclxuXHRcdFx0XHR2YXIgYmxvY2tQMiA9IG5ldyBQSVhJLlBvaW50KCBibG9ja1AxLngsIGJsb2NrUDEueSArIHRoaXMuX3Jvb20uYmxvY2tzWyBpIF0uY29uZmlnLmhlaWdodCApO1xyXG5cclxuXHRcdFx0XHQvLyBMaW5lLWxpbmUgY29sbGlzaW9uIGRldGVjdGlvblxyXG5cdFx0XHRcdGlmICggYXZhdGFyLmxpbmVMaW5lQ29sbGlzaW9uKCBhdmF0YXJQMSwgYXZhdGFyUDIsIGJsb2NrUDEsIGJsb2NrUDIgKVxyXG5cdFx0XHRcdFx0JiYgKCBhdmF0YXJEaXJlY3Rpb24gPCAwICYmIGJsb2NrUDEueCA+IGRldGVjdGVkRW5lbXlYIHx8IGF2YXRhckRpcmVjdGlvbiA+IDAgJiYgYmxvY2tQMS54IDwgZGV0ZWN0ZWRFbmVteVggKSApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aXNTaWdodGxpbmVPYnN0cnVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gREVCVUc6XHJcblx0XHRcdFx0XHQvL3RoaXMuX3Jvb20uX2RlYnVnRHJhdy5tb3ZlVG8oIGJsb2NrUDEueCwgYmxvY2tQMS55ICk7XHJcblx0XHRcdFx0XHQvL3RoaXMuX3Jvb20uX2RlYnVnRHJhdy5saW5lVG8oIGJsb2NrUDIueCwgYmxvY2tQMi55ICk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdGlmICggIWlzU2lnaHRsaW5lT2JzdHJ1Y3RlZCAmJiB0aGlzLl9yZWxvYWRpbmdUaW1lciA+PSB0aGlzLlJFTE9BRElOR19USU1FICkgXHJcblx0XHRcdHtcdFx0XHRcclxuXHRcdFx0XHRhdmF0YXIuc3BpbmUuc3RhdGUuc2V0QW5pbWF0aW9uQnlOYW1lKCAxLCBcInNob290XCIsIGZhbHNlICk7XHJcblx0XHRcdFx0YXZhdGFyLnNwaW5lLnN0YXRlLm9uRXZlbnQgPSBcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKCB0cmFjaywgZXZlbnQgKSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCBldmVudC5kYXRhLm5hbWUgPT0gXCJzaG9vdFwiIClcclxuXHRcdFx0XHRcdFx0XHRnX292ZXJmbG93VHJhbnNmb3JtYXRpb24uc2hvb3QoKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuX3N0YXRlID0gdGhpcy5TVEFURV9TSE9PVElORztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuT3ZlcmZsb3dUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUuc2hvb3QgPSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyBTZnguXHJcblx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggWyBcInNmeF9vdmVyZmxvd19zaG9vdF93YXRlcl9zaG9ydF8wMFwiLCBcInNmeF9vdmVyZmxvd19zaG9vdF93YXRlcl9zaG9ydF8wMVwiIF0gKTtcclxuXHJcblx0Ly8gRmluZCBzaG90IG9yaWdpbi5cclxuXHR2YXIgYXZhdGFyID0gdGhpcy5fcm9vbS5hdmF0YXI7XHJcblx0dmFyIGF2YXRhckRpcmVjdGlvbiA9IE1hdGguc2lnbiggYXZhdGFyLnNwaW5lQ29udGFpbmVyLnNjYWxlLnggKTtcdFx0XHRcdFx0XHRcdFxyXG5cdHZhciBzaG90T3JpZ2luID0gbnVsbDtcdFxyXG5cdGlmICggYXZhdGFyRGlyZWN0aW9uIDwgMCApXHJcblx0e1xyXG5cdFx0c2hvdE9yaWdpbiA9IG5ldyBQSVhJLlBvaW50KFxyXG5cdFx0XHRhdmF0YXIueCArIGF2YXRhci5jb2xsaXNpb25SZWN0LnggLSBhdmF0YXIuY29sbGlzaW9uUmVjdC53aWR0aCAqIDMuMCxcclxuXHRcdFx0YXZhdGFyLnkgKyBhdmF0YXIuY29sbGlzaW9uUmVjdC55ICsgYXZhdGFyLnNraW5XaWR0aCArIGF2YXRhci5jb2xsaXNpb25SZWN0LmhlaWdodCAqIC4xNSApO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0c2hvdE9yaWdpbiA9IG5ldyBQSVhJLlBvaW50KFxyXG5cdFx0XHRhdmF0YXIueCArIGF2YXRhci5jb2xsaXNpb25SZWN0LnggKyBhdmF0YXIuY29sbGlzaW9uUmVjdC53aWR0aCAqIDQuMCxcclxuXHRcdFx0YXZhdGFyLnkgKyBhdmF0YXIuY29sbGlzaW9uUmVjdC55ICsgYXZhdGFyLnNraW5XaWR0aCArIGF2YXRhci5jb2xsaXNpb25SZWN0LmhlaWdodCAqIC4xNSApO1xyXG5cdH1cdFxyXG5cclxuXHQvLyBTaG9vdCBhdCBlbmVteS5cdFx0XHRcdFx0XHRcdFxyXG5cdHZhciBvdmVyZmxvd1Nob3QgPSBuZXcgT3ZlcmZsb3dTaG90KCBhdmF0YXJEaXJlY3Rpb24sIHRoaXMuX3Jvb20gKTtcclxuXHRvdmVyZmxvd1Nob3QuaW5pdCggc2hvdE9yaWdpbi54LCBzaG90T3JpZ2luLnkgKTtcclxuXHRcclxuXHR0aGlzLl9yb29tLm9iamVjdHMuc2hvdHMucHVzaCggb3ZlcmZsb3dTaG90ICk7XHJcblx0dGhpcy5fcm9vbS5hZGRDaGlsZCggb3ZlcmZsb3dTaG90ICk7XHJcblx0XHJcblx0dGhpcy5fcmVsb2FkaW5nVGltZXIgPSAwO1xyXG5cdHRoaXMuX3N0YXRlID0gdGhpcy5TVEFURV9GSU5ESU5HX1RBUkdFVDtcclxufVxyXG5cclxuT3ZlcmZsb3dUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUub25XYXRlcmZhbGxDb2xsaXNpb24gPSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyBVbmRlciB3YXRlcmZhbGwgYW5pbWF0aW9uLlxyXG5cdHZhciBhdmF0YXIgPSB0aGlzLl9yb29tLmF2YXRhcjtcclxuXHRpZiAoIGF2YXRhci5jdXJyZW50QW5pbWF0aW9uID09IFwicnVuX2xldmVsXCIgKVxyXG5cdHtcclxuXHRcdC8vIFNmeC5cclxuXHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwic2Z4X292ZXJmbG93X3NwbGFzaF8wMFwiICk7XHJcblx0XHJcblx0XHRhdmF0YXIuc2V0QW5pbWF0aW9uKCBcIndhdGVyZmFsbFwiLCB0cnVlICk7XHJcblx0fVxyXG5cdFx0XHRcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn0iLCJ2YXIgQ29tbW9uICAgID0gcmVxdWlyZSggXCIuLi9Db21tb25cIiApO1xyXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoIFwiLi9HYW1lT2JqZWN0XCIgKTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFBhcnRpY2xlU3lzdGVtKCBhcnJQYXJ0aWNsZUltYWdlSWQsIGpzb25Db25maWdJZCApXHJcbntcclxuXHRHYW1lT2JqZWN0LmNhbGwoIHRoaXMsIFwicHNcIiApO1xyXG5cdFxyXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcdFxyXG5cdFx0XHJcblx0dmFyIGFyclBhcnRpY2xlSW1hZ2UgPSBbXTtcclxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBhcnJQYXJ0aWNsZUltYWdlSWQubGVuZ3RoOyArK2kgKVxyXG5cdFx0YXJyUGFydGljbGVJbWFnZS5wdXNoKCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggYXJyUGFydGljbGVJbWFnZUlkWyBpIF0gKSApO1xyXG5cdHRoaXMuX3BzID0gbmV3IGNsb3Vka2lkLkVtaXR0ZXIoIHRoaXMsIGFyclBhcnRpY2xlSW1hZ2UsIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKCBqc29uQ29uZmlnSWQgKSApO1xyXG5cdHRoaXMuX3BzLmVtaXQgPSB0cnVlO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVTeXN0ZW07XHJcblBhcnRpY2xlU3lzdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR2FtZU9iamVjdC5wcm90b3R5cGUpO1xyXG5QYXJ0aWNsZVN5c3RlbS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJ0aWNsZVN5c3RlbTtcclxuXHJcblBhcnRpY2xlU3lzdGVtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oIHgsIHkgKVxyXG57XHJcblx0dGhpcy54ID0geDtcclxuXHR0aGlzLnkgPSB5O1xyXG59XHJcblxyXG5QYXJ0aWNsZVN5c3RlbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5fcHMudXBkYXRlKCBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKTtcclxufSIsInZhciBDb21tb24gICAgPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XHJcbnZhciBHYW1lT2JqZWN0ID0gcmVxdWlyZSggXCIuL0dhbWVPYmplY3RcIiApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIFBvd2VydXAoIGlkLCBwb3dlcnVwSWNvbklkLCByb29tIClcclxue1xyXG5cdEdhbWVPYmplY3QuY2FsbCggdGhpcywgaWQgKTtcclxuXHRcclxuXHR0aGlzLl9yb29tID0gcm9vbTtcclxuXHR0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XHJcblx0dGhpcy50YWtlbiA9IGZhbHNlO1xyXG5cdHRoaXMucGlja3VwUFMgPSBuZXcgY2xvdWRraWQuRW1pdHRlciggdGhpcywgWyB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJwaWNrdXBfMDBcIiApIF0sIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKCBcInBhcnRpY2xlX2NvaW5fY29sbGVjdF9idXJzdFwiICkgKTtcclxuXHR0aGlzLnBpY2t1cFBTLmVtaXQgPSBmYWxzZTtcdFxyXG5cdFxyXG5cdC8vIFRPRE86IFVzZSBwb3dlcnVwIHNwcml0ZS5cclxuXHR0aGlzLnNwcml0ZSAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBwb3dlcnVwSWNvbklkICkgKTtcclxuXHR0aGlzLnNwcml0ZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcclxuXHR0aGlzLnNwcml0ZS55ICAgICAgPSAwO1xyXG5cdHRoaXMuc3ByaXRlLnNjYWxlICA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xyXG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuc3ByaXRlICk7XHJcblxyXG5cdHRoaXMuY29sbGlzaW9uUmVjdCA9IG5ldyBQSVhJLlJlY3RhbmdsZSggLTE2LCAtMTYsIDMyLCA2NCApO1xyXG5cdFxyXG5cdC8vIEV2ZW50cy5cclxuXHR0aGlzLnNpZ25hbHMub25Qb3dlcnVwQ29sbGVjdGVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcblx0dGhpcy5zaWduYWxzLm9uUG93ZXJ1cENvbGxlY3RlZC5hZGQoIHRoaXMuX3Jvb20ub25Qb3dlcnVwQ29sbGVjdGVkLCB0aGlzLl9yb29tICk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBQb3dlcnVwO1xyXG5Qb3dlcnVwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEdhbWVPYmplY3QucHJvdG90eXBlICk7XHJcblBvd2VydXAucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUG93ZXJ1cDtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuUG93ZXJ1cC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCB4LCB5LCB0aWxlQ29sdW1uIClcclxue1xyXG5cdHRoaXMueCA9IHg7XHJcblx0dGhpcy55ID0geSAtIDg7XHJcblx0XHJcblx0Ly8gdGhpcy5kcmF3Q29sbGlzaW9uKCk7XHJcblx0XHJcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblx0dGwudG8oIHRoaXMsIC43NSwgeyB5OnRoaXMueS04LCBlYXNlOlF1YWQuZWFzZUluT3V0LCB5b3lvOnRydWUsIHJlcGVhdDotMSB9LCB0aWxlQ29sdW1uICogLjIgLyA4ICk7XHJcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCggdGwgKTtcdFxyXG59XHJcblxyXG5cclxuUG93ZXJ1cC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5waWNrdXBQUy51cGRhdGUoIHAzLlRpbWVzdGVwLmRlbHRhVGltZSApO1xyXG59XHJcblxyXG5Qb3dlcnVwLnByb3RvdHlwZS5waWNrdXAgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLnRha2VuID0gdHJ1ZTtcclxuXHR0aGlzLnBpY2t1cFBTLmVtaXQgPSB0cnVlO1xyXG5cdFxyXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cdHRsLnRvKCB0aGlzLnNwcml0ZSwgMC4yNSwgeyBhbHBoYTowLCBlYXNlOlNpbmUuZWFzZUluIH0sIDAgKTtcclxuXHR0bC50byggdGhpcy5zcHJpdGUuc2NhbGUsIDAuMjUsIHsgeDowLCB5OjAsIGVhc2U6U2luZS5lYXNlSW4gfSwgMCApO1xyXG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7XHRcclxuXHJcblx0dGhpcy5zaWduYWxzLm9uUG93ZXJ1cENvbGxlY3RlZC5kaXNwYXRjaCgpO1xyXG59IiwidmFyIENvbW1vbiA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIEF2YXRhciA9IHJlcXVpcmUoIFwiLi9BdmF0YXJcIiApO1xyXG52YXIgU3BsaW5lTGF5ZXIgPSByZXF1aXJlKCBcIi4uL2dhbWUvU3BsaW5lTGF5ZXJcIiApO1xyXG52YXIgQmxvY2sgPSByZXF1aXJlKCBcIi4vQmxvY2tcIiApO1xyXG52YXIgRG9vciA9IHJlcXVpcmUoIFwiLi9Eb29yXCIgKTtcclxudmFyIEVuZW15ID0gcmVxdWlyZSggXCIuL0VuZW15XCIgKTtcclxudmFyIE92ZXJmbG93UG93ZXJ1cCA9IHJlcXVpcmUoIFwiLi9PdmVyZmxvd1Bvd2VydXBcIiApO1xyXG52YXIgQ2Fubm9uYm9sdFBvd2VydXAgPSByZXF1aXJlKCBcIi4vQ2Fubm9uYm9sdFBvd2VydXBcIiApO1xyXG52YXIgVXBncmFkZVBvd2VydXAgPSByZXF1aXJlKCBcIi4vVXBncmFkZVBvd2VydXBcIiApO1xyXG52YXIgRm91cmFybXNQb3dlcnVwID0gcmVxdWlyZSggXCIuL0ZvdXJhcm1zUG93ZXJ1cFwiICk7XHJcbnZhciBDb2luID0gcmVxdWlyZSggXCIuL0NvaW5cIiApO1xyXG52YXIgQm9zc0d1biA9IHJlcXVpcmUoIFwiLi9Cb3NzR3VuXCIgKTtcclxudmFyIEdsb2JhbCA9IHJlcXVpcmUoIFwiLi4vZ2VuZXJhbC9HbG9iYWxcIiApO1xyXG52YXIgUGFydGljbGVTeXN0ZW0gPSByZXF1aXJlKCBcIi4vUGFydGljbGVTeXN0ZW1cIiApO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBSb29tKCBsZXZlbCwgZGF0YSApXHJcbntcclxuXHRQSVhJLkNvbnRhaW5lci5jYWxsKCB0aGlzICk7XHJcblx0XHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cdHRoaXMuX2RlYnVnICAgID0gZmFsc2U7XHJcblx0dGhpcy5fbGV2ZWwgICAgPSBsZXZlbDtcclxuXHR0aGlzLl9kYXRhICAgICA9IGRhdGE7XHJcblx0dGhpcy5fdGlsZVNpemUgPSAwO1xyXG5cclxuXHR0aGlzLl9sYXllcnMgPSBbXTtcclxuXHR0aGlzLl90aWxlcyAgPSB7fTtcclxuXHR0aGlzLl9zcGxpbmVMYXllciA9IG51bGw7XHJcblx0XHJcblx0dGhpcy5fd2FsbEJsb2NrcyA9IFtdOyAvLyBCbG9ja3MgaW5jbHVkZWQgaW4gVXBncmFkZSdzIHdhbGwgZGV0ZWN0aW9uLlxyXG5cdHRoaXMuX2NyYWNrZWRXYWxsQmxvY2tzID0gW107XHJcblx0dGhpcy5fY3JhY2tlZFBsYXRmb3JtQmxvY2tzID0gW107XHJcblx0dGhpcy5fYmxvY2tzICA9IFtdO1xyXG5cdHRoaXMuX29iamVjdHMgPVxyXG5cdHtcclxuXHRcdGRvb3JzIDogW10sXHJcblx0XHRjb2lucyA6IFtdLFxyXG5cdFx0cG93ZXJ1cHMgOiBbXSxcclxuXHRcdGRhbmdlcnMgOiBbXSxcclxuXHRcdHNob3RzIDogW10sXHJcblx0XHR3YXRlcmZhbGxzIDogW11cclxuXHR9XHJcblx0dGhpcy5fZW5lbWllcyA9IFtdO1xyXG5cdHRoaXMuX3BhcnRpY2xlU3lzdGVtcyA9IFtdO1xyXG5cdHRoaXMuX3dhdGVyZmFsbFBhcnRpY2xlU3lzdGVtcyA9IFtdO1xyXG5cclxuXHR0aGlzLl9wYXVzZUVudGl0aWVzID0gZmFsc2U7XHJcblx0XHJcblx0Ly8gQ3JlYXRlIGEgZGF0YSBzdHJ1Y3R1cmUgdG8gc3RvcmUgdGhlIHJvb20gcmVzdWx0LlxyXG5cdHRoaXMuX3Jvb21SZXN1bHRJbmZvID0geyBcclxuXHRcdHN0ZXBzOjAsIFxyXG5cdFx0Y29sbGVjdGVkQ29pbnM6MCwgXHJcblx0XHRjb2xsZWN0ZWRQb3dlcnVwczowLCBcclxuXHRcdGRlc3Ryb3llZEJsb2NrczowLFxyXG5cdFx0a2lsbGVkRW5lbWllczowIH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBSb29tO1xyXG5Sb29tLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuUm9vbS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSb29tO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5Sb29tLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Ly8gR3JpZCBsb2NhdGlvbnMgZm9yIHRoZSB3YXRlcmZhbGwgcGFydGljbGUgc3lzdGVtcy5cclxuXHR2YXIgYXJyV2F0ZXJmYWxsUHNHcmlkTG9jID0ge307XHJcblxyXG5cdHRoaXMuX3RpbGVTaXplID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAvIHRoaXMuX2RhdGEuaGVpZ2h0O1xyXG5cdHRoaXMucmVzaXplKCk7XHJcblx0XHJcblx0Ly8gQmdcclxuXHQvLyB0aGlzLmJnID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snd2hpdGVTcXVhcmUnXSk7XHJcblx0dGhpcy5iZyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggdGhpcy5fbGV2ZWwuZGF0YS5iZyApKTtcdFxyXG5cdHRoaXMuYmcud2lkdGggID0gdGhpcy5fdGlsZVNpemUgKiB0aGlzLl9kYXRhLndpZHRoO1xyXG5cdHRoaXMuYmcuaGVpZ2h0ID0gdGhpcy5fdGlsZVNpemUgKiB0aGlzLl9kYXRhLmhlaWdodDtcclxuXHR0aGlzLmFkZENoaWxkKHRoaXMuYmcpO1xyXG5cclxuXHQvLyBCYWNrZ3JvdW5kc1xyXG5cdHZhciBsYXllcnMgPVxyXG5cdFtcclxuXHRcdC8vIFRPRE86IERFQlVHOiBEb24ndCBzaG93IHVudGlsIGZpeGVkLlxyXG5cdFx0Lyp7XHJcblx0XHRcdG5hbWUgICAgOiAnYmFja2dyb3VuZHMnLFxyXG5cdFx0XHR2aXNpYmxlIDogdHJ1ZSxcclxuXHRcdFx0c2tpcCAgICA6IFtdLFxyXG5cdFx0XHR0aWxlU2l6ZSA6IDMyXHJcblx0XHR9LCovXHJcblx0XHR7XHJcblx0XHRcdG5hbWUgICAgOiAnZGFuZ2VycycsXHJcblx0XHRcdHZpc2libGUgOiBmYWxzZSxcclxuXHRcdFx0c2tpcCAgICA6IFtdLFxyXG5cdFx0XHR0aWxlU2l6ZSA6IDMyXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lICAgIDogJ2luZm9ybWF0aW9ucycsXHJcblx0XHRcdHZpc2libGUgOiBmYWxzZSxcclxuXHRcdFx0c2tpcCAgICA6IFtdLFxyXG5cdFx0XHR0aWxlU2l6ZSA6IDMyXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lICAgIDogJ29iamVjdHMnLFxyXG5cdFx0XHR2aXNpYmxlIDogZmFsc2UsXHJcblx0XHRcdHNraXAgICAgOiBbXSxcclxuXHRcdFx0dGlsZVNpemUgOiAzMlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZSAgICAgOiAncGxhdGZvcm1zJyxcclxuXHRcdFx0dmlzaWJsZSAgOiB0cnVlLFxyXG5cdFx0XHRza2lwICAgICA6IFs1Niw1Nyw1OCw1OV0sXHJcblx0XHRcdHRpbGVTaXplIDogNjRcclxuXHRcdH1cclxuXHRdO1xyXG5cdFxyXG5cclxuXHQvLyBHZXQgdGhlIHdhdGVyZmFsbCB0ZXh0dXJlcy5cclxuXHR2YXIgd2F0ZXJmYWxsVGV4dHVyZXMgPSBbXTtcclxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCA0OyBpKysgKSBcclxuXHR7XHJcblx0XHR2YXIgdGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcIndhdGVyX3RpbGVfXCIgKyAoIGkgKyAxICkgKTtcclxuXHRcdHdhdGVyZmFsbFRleHR1cmVzLnB1c2goIHRleHR1cmUgKTtcclxuXHR9O1xyXG5cdFxyXG5cdGZvciAoIHZhciBsID0gMDsgbCA8IGxheWVycy5sZW5ndGg7IGwrKyApXHJcblx0e1xyXG5cdFx0dmFyIGxheWVyID0gbGF5ZXJzWyBsIF0ubmFtZTtcclxuXHRcdHRoaXMuX3RpbGVzWyBsYXllciBdID0ge307XHJcblxyXG5cdFx0Ly8gQ291bnQgbnVtYmVyIG9mIHF1YWRzIHRvIGRyYXdcclxuXHRcdHZhciBuVGlsZXMgPSAwO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fZGF0YVsgbGF5ZXIgXS5sZW5ndGg7IGkrKyApXHJcblx0XHR7XHJcblx0XHRcdGlmICggdGhpcy5fZGF0YVsgbGF5ZXIgXVsgaSBdID09IDAgKSBjb250aW51ZTtcclxuXHRcdFx0aWYgKCBsYXllcnNbIGwgXS5za2lwLmluZGV4T2YoIHRoaXMuX2RhdGFbIGxheWVyIF1bIGkgXSApICE9IC0xICkgY29udGludWU7XHJcblx0XHRcdFxyXG5cdFx0XHRuVGlsZXMrKztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBEcmF3IHRoZSBtZXNoXHJcblx0XHR2YXIgdGV4dHVyZSAgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggdGhpcy5fZGF0YS50ZXh0dXJlc1sgbGF5ZXIgXSApO1xyXG5cdFx0dmFyIHZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSggOCAqIG5UaWxlcyApO1xyXG5cdFx0dmFyIHV2cyAgICAgID0gbmV3IEZsb2F0MzJBcnJheSggOCAqIG5UaWxlcyApO1xyXG5cdFx0dmFyIGluZGljZXMgID0gbmV3IFVpbnQxNkFycmF5KCA2ICogblRpbGVzICk7XHJcblx0XHR2YXIgdGV4dHVyZVRpbGVXaWR0aCAgPSBsYXllcnNbIGwgXS50aWxlU2l6ZSAvIHRleHR1cmUud2lkdGg7XHJcblx0XHR2YXIgdGV4dHVyZVRpbGVIZWlnaHQgPSBsYXllcnNbIGwgXS50aWxlU2l6ZSAvIHRleHR1cmUuaGVpZ2h0O1xyXG5cdFx0dmFyIHF1YWRzICAgPSAwO1xyXG5cclxuXHRcdC8vIE9mZnNldCB0aGUgdGV4dHVyZSBjb29yZGluYXRlcyBhIGJpdCB0byBhdm9pZCBnZXR0aW5nIHRoZSBjb2xvciBvZiB0aGUgYWRqYWNlbnQgdGlsZXNcclxuXHRcdHZhciBjbGFtcFgxID0gdGV4dHVyZVRpbGVXaWR0aCAgKiAwLjAxO1xyXG5cdFx0dmFyIGNsYW1wWDIgPSB0ZXh0dXJlVGlsZVdpZHRoICAqIDAuMDE7XHJcblx0XHR2YXIgY2xhbXBZMSA9IHRleHR1cmVUaWxlSGVpZ2h0ICogMC4wMTtcclxuXHRcdHZhciBjbGFtcFkyID0gdGV4dHVyZVRpbGVIZWlnaHQgKiAwLjAxO1xyXG5cdFxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fZGF0YVsgbGF5ZXIgXS5sZW5ndGg7IGkrKyApXHJcblx0XHR7XHJcblx0XHRcdHZhciB0aWxlID0gdGhpcy5fZGF0YVsgbGF5ZXIgXVsgaSBdO1xyXG5cdFx0XHRpZiAoIHRpbGUgPT0gMCApIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0Ly8gR2V0IGNvbHVtbiBhbmQgcm93IGluZGV4ZXMgaW4gdGhlIHJvb20gZ3JpZC5cclxuXHRcdFx0dmFyIHJvb21HcmlkWCA9IGkgJSB0aGlzLl9kYXRhLndpZHRoO1xyXG5cdFx0XHR2YXIgcm9vbUdyaWRZID0gTWF0aC5mbG9vciggaSAvIHRoaXMuX2RhdGEud2lkdGggKTtcclxuXHRcdFx0Ly8gU3RvcmUgdGlsZSBkYXRhIGJ5IHRpbGUgaWQuXHJcblx0XHRcdGlmICggIXRoaXMuX3RpbGVzWyBsYXllciBdWyB0aWxlIF0gKVxyXG5cdFx0XHRcdHRoaXMuX3RpbGVzWyBsYXllciBdWyB0aWxlIF0gPSBbXTtcclxuXHRcdFx0dGhpcy5fdGlsZXNbIGxheWVyIF1bIHRpbGUgXS5wdXNoKCB7eDpyb29tR3JpZFgsIHk6cm9vbUdyaWRZLCBtZXNoUXVhZEluZGV4OnF1YWRzfSApO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCBsYXllcnNbIGwgXS5za2lwLmluZGV4T2YoIHRpbGUgKSAhPSAtMSApIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gRG9uJ3QgZHJhdyB0aGUgdGlsZXMgb2YgdGhlIHdhdGVyZmFsbCBhcyBwYXJ0IG9mIHRoZSBNZXNoIHdpdGggdGhlIGxldmVsIGdlb21ldHJ5LlxyXG5cdFx0XHRcdGlmICggdGlsZSA+PSA1NiB8fCB0aWxlIDw9IDU5IClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2YXIgd2F0ZXJmYWxsID0gbmV3IFBJWEkuZXh0cmFzLk1vdmllQ2xpcCggd2F0ZXJmYWxsVGV4dHVyZXMgKTtcclxuXHRcdFx0XHRcdHdhdGVyZmFsbC5hbmltYXRpb25TcGVlZCA9IDAuNTtcclxuXHRcdFx0XHRcdHdhdGVyZmFsbC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCB0aGlzLl90aWxlU2l6ZSAvIGxheWVyc1sgbCBdLnRpbGVTaXplLCB0aGlzLl90aWxlU2l6ZSAvIGxheWVyc1sgbCBdLnRpbGVTaXplICk7XHJcblx0XHRcdFx0XHR3YXRlcmZhbGwucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggcm9vbUdyaWRYICogdGhpcy5fdGlsZVNpemUsIHJvb21HcmlkWSAqIHRoaXMuX3RpbGVTaXplICk7XHJcblx0XHRcdFx0XHR3YXRlcmZhbGwucGxheSgpO1x0XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBhcnJXYXRlcmZhbGxQc0dyaWRMb2NbIHJvb21HcmlkWC50b1N0cmluZygpIF0gPT0gbnVsbCApXHJcblx0XHRcdFx0XHRcdGFycldhdGVyZmFsbFBzR3JpZExvY1sgcm9vbUdyaWRYLnRvU3RyaW5nKCkgXSA9IFtdO1x0XHJcblx0XHRcdFx0XHRhcnJXYXRlcmZhbGxQc0dyaWRMb2NbIHJvb21HcmlkWC50b1N0cmluZygpIF0ucHVzaCggcm9vbUdyaWRZICk7XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy5hZGRDaGlsZCggd2F0ZXJmYWxsICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHRleHR1cmVJbmRleCA9XHJcblx0XHRcdHtcclxuXHRcdFx0XHR4OiAoIHRpbGUgJSAoIHRleHR1cmUud2lkdGggLyBsYXllcnNbIGwgXS50aWxlU2l6ZSApICksXHJcblx0XHRcdFx0eTogKCBNYXRoLmZsb29yKCB0aWxlIC8gKCB0ZXh0dXJlLndpZHRoIC8gbGF5ZXJzWyBsIF0udGlsZVNpemUgKSApIClcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZlcnRpY2VzLnNldChcclxuXHRcdFx0W1xyXG5cdFx0XHRcdHJvb21HcmlkWCAqIHRoaXMuX3RpbGVTaXplLCAgICAgcm9vbUdyaWRZICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0KHJvb21HcmlkWCsxKSAqIHRoaXMuX3RpbGVTaXplLCByb29tR3JpZFkgKiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHQocm9vbUdyaWRYKzEpICogdGhpcy5fdGlsZVNpemUsIChyb29tR3JpZFkrMSkgKiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRyb29tR3JpZFggKiB0aGlzLl90aWxlU2l6ZSwgICAgIChyb29tR3JpZFkrMSkgKiB0aGlzLl90aWxlU2l6ZVxyXG5cdFx0XHRdLCBxdWFkcyAqIDggKTtcclxuXHJcblx0XHRcdHV2cy5zZXQoXHJcblx0XHRcdFtcclxuXHRcdFx0XHR0ZXh0dXJlSW5kZXgueCAgICAgKiB0ZXh0dXJlVGlsZVdpZHRoICsgY2xhbXBYMSwgdGV4dHVyZUluZGV4LnkgICAgICogdGV4dHVyZVRpbGVIZWlnaHQtMSArIGNsYW1wWTEsXHJcblx0XHRcdFx0KHRleHR1cmVJbmRleC54KzEpICogdGV4dHVyZVRpbGVXaWR0aCAtIGNsYW1wWDIsIHRleHR1cmVJbmRleC55ICAgICAqIHRleHR1cmVUaWxlSGVpZ2h0LTEgKyBjbGFtcFkxLFxyXG5cdFx0XHRcdCh0ZXh0dXJlSW5kZXgueCsxKSAqIHRleHR1cmVUaWxlV2lkdGggLSBjbGFtcFgyLCAodGV4dHVyZUluZGV4LnkrMSkgKiB0ZXh0dXJlVGlsZUhlaWdodC0xIC0gY2xhbXBZMixcclxuXHRcdFx0XHR0ZXh0dXJlSW5kZXgueCAgICAgKiB0ZXh0dXJlVGlsZVdpZHRoICsgY2xhbXBYMSwgKHRleHR1cmVJbmRleC55KzEpICogdGV4dHVyZVRpbGVIZWlnaHQtMSAtIGNsYW1wWTJcclxuXHRcdFx0XSwgcXVhZHMgKiA4ICk7XHJcblxyXG5cdFx0XHRpbmRpY2VzLnNldCggWzAgKyA0KnF1YWRzLCAxICsgNCpxdWFkcywgMiArIDQqcXVhZHMsIDAgKyA0KnF1YWRzLCAyICsgNCpxdWFkcywgMyArIDQqcXVhZHNdLCBxdWFkcyAqIDYgKTtcclxuXHRcdFx0cXVhZHMrKztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGxheWVyc1sgbCBdLnZpc2libGUgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9sYXllcnNbIGxheWVyIF0gPSBuZXcgUElYSS5tZXNoLk1lc2ggKFxyXG5cdFx0XHRcdHRleHR1cmUsXHJcblx0XHRcdFx0dmVydGljZXMsXHJcblx0XHRcdFx0dXZzLFxyXG5cdFx0XHRcdGluZGljZXMsXHJcblx0XHRcdFx0UElYSS5tZXNoLk1lc2guRFJBV19NT0RFUy5UUklBTkdMRVMgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5hZGRDaGlsZCggdGhpcy5fbGF5ZXJzWyBsYXllciBdICk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vIFdhdGVyZmFsbCBwYXJ0aWNsZSBzeXN0ZW1zLlxyXG5cdGZvciAoIGtleSBpbiBhcnJXYXRlcmZhbGxQc0dyaWRMb2MgKVxyXG5cdHtcclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGFycldhdGVyZmFsbFBzR3JpZExvY1sga2V5IF0ubGVuZ3RoOyArK2kgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIGkgPT0gYXJyV2F0ZXJmYWxsUHNHcmlkTG9jWyBrZXkgXS5sZW5ndGggLSAxICYmIGFycldhdGVyZmFsbFBzR3JpZExvY1sga2V5IF1bIGkgXSA8IHRoaXMuX2RhdGEuaGVpZ2h0IC0gMVxyXG5cdFx0XHRcdHx8IGkgPCBhcnJXYXRlcmZhbGxQc0dyaWRMb2NbIGtleSBdLmxlbmd0aCAtIDEgJiYgYXJyV2F0ZXJmYWxsUHNHcmlkTG9jWyBrZXkgXVsgaSArIDEgXSAtIGFycldhdGVyZmFsbFBzR3JpZExvY1sga2V5IF1bIGkgXSA+IDEgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHBzID0gbmV3IFBhcnRpY2xlU3lzdGVtKCBcclxuXHRcdFx0XHRcdFx0XHRbIFwicGFydGljbGVfd2F0ZXJmYWxsXzAwMVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicGFydGljbGVfd2F0ZXJmYWxsXzAwMlwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicGFydGljbGVfd2F0ZXJmYWxsXzAwM1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwicGFydGljbGVfd2F0ZXJmYWxsXzAwNFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicGFydGljbGVfd2F0ZXJmYWxsXzAwNVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicGFydGljbGVfd2F0ZXJmYWxsXzAwNlwiIF0sIFxyXG5cdFx0XHRcdFx0XHRcdFwicGFydGljbGVfd2F0ZXJmYWxsXCIgKTtcclxuXHRcdFx0XHRwcy5pbml0KCBrZXkgKiB0aGlzLl90aWxlU2l6ZSAtIHRoaXMuX3RpbGVTaXplICogLjI1LCBhcnJXYXRlcmZhbGxQc0dyaWRMb2NbIGtleSBdWyBpIF0gKiB0aGlzLl90aWxlU2l6ZSArIHRoaXMuX3RpbGVTaXplICk7XHJcblx0XHRcdFx0cHMuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggLjYsIC42ICk7XHJcblx0XHRcdFx0dGhpcy5hZGRDaGlsZCggcHMgKTtcclxuXHRcdFx0XHR0aGlzLl93YXRlcmZhbGxQYXJ0aWNsZVN5c3RlbXMucHVzaCggcHMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvLyBCbG9ja3NcclxuXHRmb3IgKCBpZCBpbiB0aGlzLl90aWxlcy5wbGF0Zm9ybXMgKVxyXG5cdHtcclxuXHRcdGlkID0gcGFyc2VJbnQoIGlkICk7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl90aWxlcy5wbGF0Zm9ybXNbIGlkIF0ubGVuZ3RoOyBpKysgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgYmxvY2sgPSBudWxsO1xyXG5cclxuXHRcdFx0aWYgKCBpZCA+PSAxICYmIGlkIDw9IDE1IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFBsYXRmb3JtIGJ1dCBwbGF5ZXIgd291bGQgYmUgYWJsZSB0byB3YWxrIHRocm91Z2ggaXQgd2hlbiBnb2luZyB1cC5cclxuXHRcdFx0XHRibG9jayA9IG5ldyBCbG9ja1xyXG5cdFx0XHRcdChcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0XHRpZCxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0eDogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS54ICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHk6IHRoaXMuX3RpbGVzLnBsYXRmb3Jtc1tpZF1baV0ueSAqIHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHR3aWR0aCAgOiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0IDogdGhpcy5fdGlsZVNpemUvNCxcclxuXHRcdFx0XHRcdFx0Y29sbGlzaW9ucyA6XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0b3AgICAgOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbSA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0ICA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGxlZnQgICA6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBpZCA+PSAxNiAmJiBpZCA8PSAyMSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBTb2xpZCBwbGF0Zm9ybSwgcGxheWVyIHJldmVyc2VzIGF0IGl0LlxyXG5cdFx0XHRcdGJsb2NrID0gbmV3IEJsb2NrXHJcblx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR4OiB0aGlzLl90aWxlcy5wbGF0Zm9ybXNbaWRdW2ldLnggKiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0eTogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS55ICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHdpZHRoICA6IHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQgOiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0Y29sbGlzaW9ucyA6XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0b3AgICAgOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbSA6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0cmlnaHQgIDogaWQgPT0gMTksXHJcblx0XHRcdFx0XHRcdFx0bGVmdCAgIDogaWQgPT0gMTZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9pZiAoIGlkID09IDE5IHx8IGlkID09IDE2IClcclxuXHRcdFx0XHRcdHRoaXMuX3dhbGxCbG9ja3MucHVzaCggYmxvY2sgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggaWQgPj0gMzIgJiYgaWQgPD0gMzUgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gQ3JhY2tlZCBwbGF0Zm9ybS5cclxuXHRcdFx0XHRibG9jayA9IG5ldyBCbG9ja1xyXG5cdFx0XHRcdChcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0XHRpZCxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0eCA6IHRoaXMuX3RpbGVzLnBsYXRmb3Jtc1tpZF1baV0ueCAqIHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHR5IDogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS55ICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHdpZHRoICA6IHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQgOiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0Y29sbGlzaW9ucyA6XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0b3AgICAgOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbSA6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0cmlnaHQgIDogaWQgPT0gMzUsXHJcblx0XHRcdFx0XHRcdFx0bGVmdCAgIDogaWQgPT0gMzJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0bWVzaFF1YWRJbmRleCA6IHRoaXMuX3RpbGVzLnBsYXRmb3Jtc1tpZF1baV0ubWVzaFF1YWRJbmRleFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5fY3JhY2tlZFBsYXRmb3JtQmxvY2tzLnB1c2goIGJsb2NrICk7XHJcblx0XHRcdFx0Ly9pZiAoIGlkID09IDM1IHx8IGlkID09IDMyIClcclxuXHRcdFx0XHRcdHRoaXMuX3dhbGxCbG9ja3MucHVzaCggYmxvY2sgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggaWQgPj0gMzYgJiYgaWQgPD0gMzkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gQ3JhY2tlZCB3YWxsLlxyXG5cdFx0XHRcdGJsb2NrID0gbmV3IEJsb2NrXHJcblx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR4IDogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS54ICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHkgOiB0aGlzLl90aWxlcy5wbGF0Zm9ybXNbaWRdW2ldLnkgKiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0d2lkdGggIDogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdGhlaWdodCA6IHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHRjb2xsaXNpb25zIDpcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRvcCAgICA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbSA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0ICA6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0bGVmdCAgIDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRtZXNoUXVhZEluZGV4IDogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS5tZXNoUXVhZEluZGV4XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLl9jcmFja2VkV2FsbEJsb2Nrcy5wdXNoKCBibG9jayApO1xyXG5cdFx0XHRcdHRoaXMuX3dhbGxCbG9ja3MucHVzaCggYmxvY2sgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggaWQgPj0gNDAgJiYgaWQgPD0gNDMgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gTGVmdCB3YWxsLlxyXG5cdFx0XHRcdGJsb2NrID0gbmV3IEJsb2NrXHJcblx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHRcdGlkLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR4OiB0aGlzLl90aWxlcy5wbGF0Zm9ybXNbaWRdW2ldLnggKiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0eTogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS55ICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHdpZHRoICA6IHRoaXMuX3RpbGVTaXplLzIsXHJcblx0XHRcdFx0XHRcdGhlaWdodCA6IHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHRjb2xsaXNpb25zIDpcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRvcCAgICA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbSA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0ICA6IHRydWUsIC8vIFRPRE86XHJcblx0XHRcdFx0XHRcdFx0bGVmdCAgIDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLl93YWxsQmxvY2tzLnB1c2goIGJsb2NrICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIGlkID49IDQ0ICYmIGlkIDw9IDUxIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFJpZ2h0IHdhbGwuXHJcblx0XHRcdFx0YmxvY2sgPSBuZXcgQmxvY2tcclxuXHRcdFx0XHQoXHJcblx0XHRcdFx0XHR0aGlzLFxyXG5cdFx0XHRcdFx0aWQsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHg6IHRoaXMuX3RpbGVzLnBsYXRmb3Jtc1tpZF1baV0ueCAqIHRoaXMuX3RpbGVTaXplICsgdGhpcy5fdGlsZVNpemUvMixcclxuXHRcdFx0XHRcdFx0eTogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS55ICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHdpZHRoICA6IHRoaXMuX3RpbGVTaXplLzIsXHJcblx0XHRcdFx0XHRcdGhlaWdodCA6IHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHRjb2xsaXNpb25zIDpcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRvcCAgICA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbSA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0ICA6IHRydWUsIC8vIFRPRE86XHJcblx0XHRcdFx0XHRcdFx0bGVmdCAgIDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLl93YWxsQmxvY2tzLnB1c2goIGJsb2NrICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIGlkID49IDU2ICYmIGlkIDw9IDU5IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFdhdGVyZmFsbC5cclxuXHRcdFx0XHRibG9jayA9IG5ldyBCbG9ja1xyXG5cdFx0XHRcdChcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0XHRpZCxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0eDogdGhpcy5fdGlsZXMucGxhdGZvcm1zW2lkXVtpXS54ICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHk6IHRoaXMuX3RpbGVzLnBsYXRmb3Jtc1tpZF1baV0ueSAqIHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHR3aWR0aCAgOiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0IDogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdGNvbGxpc2lvbnMgOlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dG9wICAgIDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0Ym90dG9tIDogdHJ1ZSwgLy8gU29tZSBsZXZlbHMgdXNlIHdhdGVyZmFsbHMgd2l0aCBlbXB0eSBnYXBzLlxyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0ICA6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0bGVmdCAgIDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLl93YWxsQmxvY2tzLnB1c2goIGJsb2NrICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggISFibG9jayApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRibG9jay5pbml0KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCBpZCA+PSA1NiAmJiBpZCA8PSA1OSApXHJcblx0XHRcdFx0XHR0aGlzLl9vYmplY3RzLndhdGVyZmFsbHMucHVzaCggYmxvY2sgKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3MucHVzaCggYmxvY2sgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmFkZENoaWxkKCBibG9jayApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBBZGQgZG9vcnNcclxuXHRmb3IgKCBpZCBpbiB0aGlzLl90aWxlcy5pbmZvcm1hdGlvbnMgKVxyXG5cdHtcclxuXHRcdGlkID0gcGFyc2VJbnQoaWQpO1xyXG5cdFx0XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fdGlsZXMuaW5mb3JtYXRpb25zW2lkXS5sZW5ndGg7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0c3dpdGNoKGlkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRjYXNlIDU6XHJcblx0XHRcdFx0Y2FzZSA2OlxyXG5cdFx0XHRcdGNhc2UgNzpcclxuXHRcdFx0XHRjYXNlIDg6XHJcblx0XHRcdFx0Y2FzZSA5OlxyXG5cdFx0XHRcdGNhc2UgMTA6XHJcblx0XHRcdFx0Y2FzZSAxMTpcclxuXHRcdFx0XHRjYXNlIDEyOlxyXG5cdFx0XHRcdFx0Ly8gRG9vclxyXG5cdFx0XHRcdFx0dmFyIHN0YXJ0RG9vcklkID0gMiAqIHRoaXMuX2xldmVsLmN1cnJlbnRSb29tSW5kZXggKyAxO1xyXG5cdFx0XHRcdFx0dmFyIGRvb3IgPSBuZXcgRG9vciggaWQsIHRoaXMgKTtcclxuXHRcdFx0XHRcdGRvb3IuaW5pdCgodGhpcy5fdGlsZXMuaW5mb3JtYXRpb25zW2lkXVtpXS54KSAqIHRoaXMuX3RpbGVTaXplLCAodGhpcy5fdGlsZXMuaW5mb3JtYXRpb25zW2lkXVtpXS55KzEpICogdGhpcy5fdGlsZVNpemUsIGlkID09IHN0YXJ0RG9vcklkID8gXCJkb29yX0VudHJ5XCIgOiBcImRvb3JfRXhpdFwiKTtcclxuXHRcdFx0XHRcdHRoaXMuX29iamVjdHMuZG9vcnMucHVzaChkb29yKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkKGRvb3IpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIDEzOlxyXG5cdFx0XHRcdFx0Ly8gSnVtcCBwbGF0Zm9ybT9cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVx0XHJcblx0XHJcblx0Ly8gQWRkIGRhbmdlcnMuXHJcblx0Zm9yICggaWQgaW4gdGhpcy5fdGlsZXMuZGFuZ2VycyApXHJcblx0e1xyXG5cdFx0aWQgPSBwYXJzZUludCggaWQgKTtcclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3RpbGVzLmRhbmdlcnNbIGlkIF0ubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHN3aXRjaCggaWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIEVuZW15LlxyXG5cdFx0XHRcdFx0dmFyIGVuZW15ID0gbmV3IEVuZW15KCB0aGlzLCBDb21tb24uY2hhcmFjdGVyQW5pbWF0aW9uRGF0YS5jaGFyX2VuZW15LCAtMSApO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVuZW15LmluaXQoIFxyXG5cdFx0XHRcdFx0XHQoIHRoaXMuX3RpbGVzLmRhbmdlcnNbIGlkIF1bIGkgXS54ICkgKiB0aGlzLl90aWxlU2l6ZSwgXHJcblx0XHRcdFx0XHRcdCggdGhpcy5fdGlsZXMuZGFuZ2Vyc1sgaWQgXVsgaSBdLnkgKSAqIHRoaXMuX3RpbGVTaXplICk7XHJcblx0XHRcdFx0XHRlbmVteS5zcGluZUNvbnRhaW5lci55ID0gMTU7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMuX29iamVjdHMuZGFuZ2Vycy5wdXNoKCBlbmVteSApXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy5hZGRDaGlsZCggZW5lbXkgKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gRW5lbXkuXHJcblx0XHRcdFx0XHR2YXIgZW5lbXkgPSBuZXcgRW5lbXkoIHRoaXMsIENvbW1vbi5jaGFyYWN0ZXJBbmltYXRpb25EYXRhLmNoYXJfYm9zcywgMSApO1xyXG5cdFx0XHRcdFx0ZW5lbXkuZ3VuID0gbmV3IEJvc3NHdW4oIGVuZW15LCB0aGlzICk7XHJcblx0XHRcdFx0XHRlbmVteS5jb2xsaXNpb25SZWN0ID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCAtMzAsIC01MCwgNjAsIDcwICk7XHJcblx0XHRcdFx0XHRlbmVteS5pbml0KCBcclxuXHRcdFx0XHRcdFx0KCB0aGlzLl90aWxlcy5kYW5nZXJzWyBpZCBdWyBpIF0ueCApICogdGhpcy5fdGlsZVNpemUsIFxyXG5cdFx0XHRcdFx0XHQoIHRoaXMuX3RpbGVzLmRhbmdlcnNbIGlkIF1bIGkgXS55ICkgKiB0aGlzLl90aWxlU2l6ZSApO1xyXG5cdFx0XHRcdFx0ZW5lbXkuc3BpbmVDb250YWluZXIueCA9IDEwO1xyXG5cdFx0XHRcdFx0ZW5lbXkuc3BpbmVDb250YWluZXIueSA9IDI3O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLl9vYmplY3RzLmRhbmdlcnMucHVzaCggZW5lbXkgKVx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMuYWRkQ2hpbGQoIGVuZW15ICk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cdFxyXG5cdFxyXG5cdC8vIFNwbGluZVxyXG5cdHRoaXMuX3NwbGluZUxheWVyID0gbmV3IFNwbGluZUxheWVyKHRoaXMpO1xyXG5cdHRoaXMuX3NwbGluZUxheWVyLmluaXQoKTtcclxuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3NwbGluZUxheWVyKTtcclxuXHJcblx0Ly8gQXZhdGFyXHJcblx0dGhpcy5fYXZhdGFyID0gbmV3IEF2YXRhciggdGhpcyApO1xyXG5cdHRoaXMuX2F2YXRhci5pbml0KCk7XHJcblx0dGhpcy5fYXZhdGFyLnNpZ25hbHMub25HYW1lT3Zlci5hZGQoIHRoaXMuX2xldmVsLm9uR2FtZU92ZXIsIHRoaXMuX2xldmVsICk7XHJcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fYXZhdGFyICk7XHRcclxuXHRcclxuXHQvLyBBZGQgb2JqZWN0c1xyXG5cdGZvciAoIGlkIGluIHRoaXMuX3RpbGVzLm9iamVjdHMgKVxyXG5cdHtcclxuXHRcdGlkID0gcGFyc2VJbnQoIGlkICk7XHJcblx0XHRcclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX3RpbGVzLm9iamVjdHNbIGlkIF0ubGVuZ3RoOyBpKysgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIGlkID49IDIgJiYgaWQgPD0gNSAmJiB0aGlzLl9sZXZlbC5sZXZlbFJlc3VsdEluZm8uYXJyUG93ZXJ1cElkLmluZGV4T2YoIGlkICkgPCAwIClcclxuXHRcdFx0XHR0aGlzLl9sZXZlbC5sZXZlbFJlc3VsdEluZm8uYXJyUG93ZXJ1cElkLnB1c2goIGlkICk7XHJcblx0XHRcclxuXHRcdFx0c3dpdGNoICggaWQgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIENvaW5cclxuXHRcdFx0XHRcdHZhciBjb2luID0gbmV3IENvaW4oIHRoaXMgKTtcclxuXHRcdFx0XHRcdGNvaW4uaW5pdCggXHJcblx0XHRcdFx0XHRcdCggdGhpcy5fdGlsZXMub2JqZWN0c1sgaWQgXVsgaSBdLnggKyAwLjUgKSAqIHRoaXMuX3RpbGVTaXplLCBcclxuXHRcdFx0XHRcdFx0KCB0aGlzLl90aWxlcy5vYmplY3RzWyBpZCBdWyBpIF0ueSArIDAuNSApICogdGhpcy5fdGlsZVNpemUsXHJcblx0XHRcdFx0XHRcdHRoaXMuX3RpbGVzLm9iamVjdHNbIGlkIF1bIGkgXS54ICk7XHJcblx0XHRcdFx0XHR0aGlzLl9vYmplY3RzLmNvaW5zLnB1c2goIGNvaW4gKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy5hZGRDaGlsZChjb2luKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFBvd2VydXAgLSBDYW5ub25ib2x0XHJcblx0XHRcdFx0XHR2YXIgY2Fubm9uYm9sdFBvd2VydXAgPSBuZXcgQ2Fubm9uYm9sdFBvd2VydXAoIHRoaXMgKTtcclxuXHRcdFx0XHRcdGNhbm5vbmJvbHRQb3dlcnVwLmluaXQoIFxyXG5cdFx0XHRcdFx0XHQoIHRoaXMuX3RpbGVzLm9iamVjdHNbIGlkIF1bIGkgXS54ICsgMC41ICkgKiB0aGlzLl90aWxlU2l6ZSwgXHJcblx0XHRcdFx0XHRcdCggdGhpcy5fdGlsZXMub2JqZWN0c1sgaWQgXVsgaSBdLnkgKyAwLjUgKSAqIHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHR0aGlzLl90aWxlcy5vYmplY3RzWyBpZCBdWyBpIF0ueCApO1xyXG5cdFx0XHRcdFx0dGhpcy5fb2JqZWN0cy5wb3dlcnVwcy5wdXNoKCBjYW5ub25ib2x0UG93ZXJ1cCApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkKCBjYW5ub25ib2x0UG93ZXJ1cCApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFBvd2VydXAgLSBPdmVyZmxvd1xyXG5cdFx0XHRcdFx0dmFyIG92ZXJmbG93UG93ZXJ1cCA9IG5ldyBPdmVyZmxvd1Bvd2VydXAoIHRoaXMgKTtcclxuXHRcdFx0XHRcdG92ZXJmbG93UG93ZXJ1cC5pbml0KCBcclxuXHRcdFx0XHRcdFx0KCB0aGlzLl90aWxlcy5vYmplY3RzWyBpZCBdWyBpIF0ueCArIDAuNSApICogdGhpcy5fdGlsZVNpemUsIFxyXG5cdFx0XHRcdFx0XHQoIHRoaXMuX3RpbGVzLm9iamVjdHNbIGlkIF1bIGkgXS55ICsgMC41ICkgKiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0dGhpcy5fdGlsZXMub2JqZWN0c1sgaWQgXVsgaSBdLnggKTtcclxuXHRcdFx0XHRcdHRoaXMuX29iamVjdHMucG93ZXJ1cHMucHVzaCggb3ZlcmZsb3dQb3dlcnVwICk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMuYWRkQ2hpbGQoIG92ZXJmbG93UG93ZXJ1cCApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFBvd2VydXAgLSBGb3VyYXJtc1xyXG5cdFx0XHRcdFx0dmFyIGZvdXJhcm1zUG93ZXJ1cCA9IG5ldyBGb3VyYXJtc1Bvd2VydXAoIHRoaXMgKTtcclxuXHRcdFx0XHRcdGZvdXJhcm1zUG93ZXJ1cC5pbml0KCBcclxuXHRcdFx0XHRcdFx0KCB0aGlzLl90aWxlcy5vYmplY3RzWyBpZCBdWyBpIF0ueCArIDAuNSApICogdGhpcy5fdGlsZVNpemUsIFxyXG5cdFx0XHRcdFx0XHQoIHRoaXMuX3RpbGVzLm9iamVjdHNbIGlkIF1bIGkgXS55ICsgMC41ICkgKiB0aGlzLl90aWxlU2l6ZSxcclxuXHRcdFx0XHRcdFx0dGhpcy5fdGlsZXMub2JqZWN0c1sgaWQgXVsgaSBdLnggKTtcclxuXHRcdFx0XHRcdHRoaXMuX29iamVjdHMucG93ZXJ1cHMucHVzaCggZm91cmFybXNQb3dlcnVwICk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMuYWRkQ2hpbGQoIGZvdXJhcm1zUG93ZXJ1cCApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgNTpcclxuXHRcdFx0XHR7XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIFBvd2VydXAgLSBVcGdyYWRlXHJcblx0XHRcdFx0XHR2YXIgdXBncmFkZVBvd2VydXAgPSBuZXcgVXBncmFkZVBvd2VydXAoIHRoaXMgKTtcclxuXHRcdFx0XHRcdHVwZ3JhZGVQb3dlcnVwLmluaXQoIFxyXG5cdFx0XHRcdFx0XHQoIHRoaXMuX3RpbGVzLm9iamVjdHNbIGlkIF1bIGkgXS54ICsgMC41ICkgKiB0aGlzLl90aWxlU2l6ZSwgXHJcblx0XHRcdFx0XHRcdCggdGhpcy5fdGlsZXMub2JqZWN0c1sgaWQgXVsgaSBdLnkgKyAwLjUgKSAqIHRoaXMuX3RpbGVTaXplLFxyXG5cdFx0XHRcdFx0XHR0aGlzLl90aWxlcy5vYmplY3RzWyBpZCBdWyBpIF0ueCApO1xyXG5cdFx0XHRcdFx0dGhpcy5fb2JqZWN0cy5wb3dlcnVwcy5wdXNoKCB1cGdyYWRlUG93ZXJ1cCApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkKCB1cGdyYWRlUG93ZXJ1cCApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvLyBHcmlkXHJcblx0aWYgKCB0aGlzLl9kZWJ1ZyApXHJcblx0e1xyXG5cdFx0dGhpcy53aXJlZnJhbWUgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG5cdFx0dGhpcy53aXJlZnJhbWUubGluZVN0eWxlKCAxLCAweGZmMDAwMCwgMC41ICk7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAxOyBpIDwgdGhpcy5fZGF0YS53aWR0aDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHggPSBpICogdGhpcy5fdGlsZVNpemU7XHJcblx0XHRcdHZhciB5ID0gdGhpcy5fZGF0YS5oZWlnaHQgKiB0aGlzLl90aWxlU2l6ZTtcclxuXHRcdFx0dGhpcy53aXJlZnJhbWUubW92ZVRvKHgsIDApO1xyXG5cdFx0XHR0aGlzLndpcmVmcmFtZS5saW5lVG8oeCwgeSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAxOyBpIDwgdGhpcy5fZGF0YS5oZWlnaHQ7IGkrKyApXHJcblx0XHR7XHJcblx0XHRcdHZhciB5ID0gaSAqIHRoaXMuX3RpbGVTaXplO1xyXG5cdFx0XHR2YXIgeCA9IHRoaXMuX2RhdGEud2lkdGggKiB0aGlzLl90aWxlU2l6ZTtcclxuXHRcdFx0dGhpcy53aXJlZnJhbWUubW92ZVRvKDAsIHkpO1xyXG5cdFx0XHR0aGlzLndpcmVmcmFtZS5saW5lVG8oeCwgeSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hZGRDaGlsZCAoIHRoaXMud2lyZWZyYW1lICk7XHJcblx0fVxyXG5cclxuXHQvLyBIaXRBcmVhXHJcblx0dGhpcy5faGl0QXJlYSA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10pO1xyXG5cdHRoaXMuX2hpdEFyZWEuYWxwaGEgPSAwO1xyXG5cdHRoaXMuX2hpdEFyZWEud2lkdGggPSB0aGlzLl90aWxlU2l6ZSAqIHRoaXMuX2RhdGEud2lkdGg7XHJcblx0dGhpcy5faGl0QXJlYS5oZWlnaHQgPSB0aGlzLl90aWxlU2l6ZSAqIHRoaXMuX2RhdGEuaGVpZ2h0O1xyXG5cdHRoaXMuX2hpdEFyZWEuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5faGl0QXJlYSk7XHJcblxyXG5cdHRoaXMuX2hpdEFyZWEudG91Y2hzdGFydCAgPSB0aGlzLl9oaXRBcmVhLm1vdXNlZG93biAgPSB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xyXG5cdHRoaXMuX2hpdEFyZWEudG91Y2hlbmQgICAgPSB0aGlzLl9oaXRBcmVhLm1vdXNldXAgICAgPSB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKTtcclxuXHR0aGlzLl9oaXRBcmVhLnRvdWNobW92ZSAgID0gdGhpcy5faGl0QXJlYS5tb3VzZW1vdmUgID0gdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xyXG5cdFxyXG5cdC8vIERFQlVHOlxyXG5cdHRoaXMuX2RlYnVnRHJhdyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fZGVidWdEcmF3ICk7XHJcblx0XHJcblx0dGhpcy5fcG9pbnRlclBTID0gbmV3IGNsb3Vka2lkLkVtaXR0ZXIoIHRoaXMsIFsgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwYXJ0aWNsZV9kcmF3XCIpIF0sIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKCBcInBhcnRpY2xlX2RyYXdcIiApICk7XHJcblx0dGhpcy5fcG9pbnRlclBTLmVtaXQgPSBmYWxzZTtcclxufVxyXG5cclxuUm9vbS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Ly8gREVCVUc6XHJcblx0dGhpcy5fZGVidWdEcmF3LmNsZWFyKCk7XHJcblx0dGhpcy5fZGVidWdEcmF3LmxpbmVTdHlsZSggMiwgMHgwMGZmMDAgKTtcclxuXHRcclxuXHRpZiAoICF0aGlzLl9wYXVzZUVudGl0aWVzIClcclxuXHR7XHJcblx0XHQvLyBVcGRhdGUgZ2FtZSBvYmplY3RzLlx0XHRcclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX2VuZW1pZXMubGVuZ3RoOyBpKysgKVxyXG5cdFx0XHR0aGlzLl9lbmVtaWVzWyBpIF0udXBkYXRlKCk7XHJcblx0XHRcdFxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fcGFydGljbGVTeXN0ZW1zLmxlbmd0aDsgaSsrIClcclxuXHRcdFx0dGhpcy5fcGFydGljbGVTeXN0ZW1zWyBpIF0udXBkYXRlKCk7XHJcblx0XHRcclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX29iamVjdHMuY29pbnMubGVuZ3RoOyBpKysgKVxyXG5cdFx0XHR0aGlzLl9vYmplY3RzLmNvaW5zWyBpIF0udXBkYXRlKCk7XHJcblx0XHRcclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX29iamVjdHMucG93ZXJ1cHMubGVuZ3RoOyBpKysgKVxyXG5cdFx0XHR0aGlzLl9vYmplY3RzLnBvd2VydXBzWyBpIF0udXBkYXRlKCk7XHJcblx0XHRcdFxyXG5cdFx0dmFyIGFyckRhbmdlciA9IFtdO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fb2JqZWN0cy5kYW5nZXJzLmxlbmd0aDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fb2JqZWN0cy5kYW5nZXJzWyBpIF0udXBkYXRlKCk7XHJcblx0XHRcdGlmICggIXRoaXMuX29iamVjdHMuZGFuZ2Vyc1sgaSBdLmlzR2FyYmFnZSApXHJcblx0XHRcdFx0YXJyRGFuZ2VyLnB1c2goIHRoaXMuX29iamVjdHMuZGFuZ2Vyc1sgaSBdICk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUNoaWxkKCB0aGlzLl9vYmplY3RzLmRhbmdlcnNbIGkgXSApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fb2JqZWN0cy5kYW5nZXJzID0gYXJyRGFuZ2VyO1xyXG5cdFx0XHRcclxuXHRcdHZhciBhcnJTaG90ID0gW107XHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl9vYmplY3RzLnNob3RzLmxlbmd0aDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fb2JqZWN0cy5zaG90c1sgaSBdLnVwZGF0ZSgpO1xyXG5cdFx0XHRpZiAoICF0aGlzLl9vYmplY3RzLnNob3RzWyBpIF0uaXNHYXJiYWdlIClcclxuXHRcdFx0XHRhcnJTaG90LnB1c2goIHRoaXMuX29iamVjdHMuc2hvdHNbIGkgXSApO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZCggdGhpcy5fb2JqZWN0cy5zaG90c1sgaSBdICk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9vYmplY3RzLnNob3RzID0gYXJyU2hvdDtcclxuXHRcdFxyXG5cdFx0dGhpcy5fYXZhdGFyLnVwZGF0ZSgpO1xyXG5cdH1cdFxyXG59XHJcblxyXG5Sb29tLnByb3RvdHlwZS5lbmRSb29tID0gZnVuY3Rpb24oIGRvb3IgKVxyXG57XHJcblx0dGhpcy5fcGF1c2VFbnRpdGllcyA9IHRydWU7XHJcblx0XHJcblx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnN0b3BTb3VuZCggXCJzZnhfZHJhd19sb29wXCIgKTtcclxuXHR0aGlzLl9hdmF0YXIuc3RvcFJ1blNmeCgpO1xyXG5cdFxyXG5cdC8vIFVwZGF0ZSBsZXZlbCByZXN1bHQuXHJcblx0dGhpcy5fbGV2ZWwubGV2ZWxSZXN1bHRJbmZvLnN0ZXBzICs9IHRoaXMuYXZhdGFyLnN0ZXBDb3VudDtcclxuXHR0aGlzLl9sZXZlbC5sZXZlbFJlc3VsdEluZm8uY29sbGVjdGVkQ29pbnMgKz0gdGhpcy5fcm9vbVJlc3VsdEluZm8uY29sbGVjdGVkQ29pbnM7XHJcblx0dGhpcy5fbGV2ZWwubGV2ZWxSZXN1bHRJbmZvLmNvbGxlY3RlZFBvd2VydXBzICs9IHRoaXMuX3Jvb21SZXN1bHRJbmZvLmNvbGxlY3RlZFBvd2VydXBzO1xyXG5cdHRoaXMuX2xldmVsLmxldmVsUmVzdWx0SW5mby5kZXN0cm95ZWRCbG9ja3MgKz0gdGhpcy5fcm9vbVJlc3VsdEluZm8uZGVzdHJveWVkQmxvY2tzO1xyXG5cdHRoaXMuX2xldmVsLmxldmVsUmVzdWx0SW5mby5raWxsZWRFbmVtaWVzICs9IHRoaXMuX3Jvb21SZXN1bHRJbmZvLmtpbGxlZEVuZW1pZXM7XHJcblx0XHJcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KFxyXG5cdHtcclxuXHRcdG9uQ29tcGxldGVTY29wZTp0aGlzLCBcclxuXHRcdG9uQ29tcGxldGU6ZnVuY3Rpb24oKSBcclxuXHRcdHsgXHJcblx0XHRcdGlmICggdGhpcy5fbGV2ZWwuZGF0YS5yb29tcy5sZW5ndGggLTEgPT0gdGhpcy5fbGV2ZWwuY3VycmVudFJvb21JbmRleCApXHJcblx0XHRcdFx0Ly8gR28gdG8gZW5kIGxldmVsIHNjcmVlbi5cclxuXHRcdFx0XHR0aGlzLl9sZXZlbC5wYXJlbnQuc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmRpc3BhdGNoKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQvLyBHbyB0byBuZXh0IHJvb20uXHJcblx0XHRcdFx0dGhpcy5fbGV2ZWwubG9hZE5leHRSb29tKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0dGwudG8oIHRoaXMuX2F2YXRhciwgMSwge2FscGhhOjAsIGVhc2U6TGluZWFyLmVhc2VOb25lfSwgMC41ICk7XHJcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCggdGwgKTtcdFxyXG59XHJcblxyXG5Sb29tLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyBEb24ndCBvdmVybGFwIHRoZSBwYXVzZSBidXR0b24gd2l0aCB0aGUgZ2FtZSBhcmVhLlx0XHRcdFxyXG5cdHZhciBzY2FsZUZhY3RvciA9IDE7XHJcblx0dmFyIHBhdXNlQnV0dG9uSGFsZldpZHRoID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZlwiICkud2lkdGggKiAuNTtcclxuXHRcclxuXHRpZiAoIHRoaXMuX2xldmVsLnBhcmVudC5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCkgLSBwYXVzZUJ1dHRvbkhhbGZXaWR0aCA8ICggQ29tbW9uLlNUQUdFX1dJRFRIICsgKCB0aGlzLl90aWxlU2l6ZSAqIHRoaXMuX2RhdGEud2lkdGggKSApICogLjUgKVxyXG5cdFx0c2NhbGVGYWN0b3IgPSAoIHRoaXMuX2xldmVsLnBhcmVudC5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCkgLSBwYXVzZUJ1dHRvbkhhbGZXaWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCAqIC41ICkgLyAoIHRoaXMuX3RpbGVTaXplICogdGhpcy5fZGF0YS53aWR0aCAqIC41ICk7XHJcblx0dGhpcy54ID0gQ29tbW9uLlNUQUdFX1dJRFRILzIgLSh0aGlzLl90aWxlU2l6ZSAqICh0aGlzLl9kYXRhLndpZHRoLzIpKSAqIHNjYWxlRmFjdG9yO1xyXG5cdHRoaXMueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQvMiAtKHRoaXMuX3RpbGVTaXplICogKHRoaXMuX2RhdGEuaGVpZ2h0LzIpKSAqIHNjYWxlRmFjdG9yO1xyXG5cdGlmICggc2NhbGVGYWN0b3IgPCAxIClcclxuXHRcdHRoaXMuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggc2NhbGVGYWN0b3IsIHNjYWxlRmFjdG9yICk7XHJcbn1cclxuXHJcblJvb20ucHJvdG90eXBlLnN0YXJ0TGluZURyYXcgPSBmdW5jdGlvbiggeCwgeSApXHJcbntcclxuXHR0aGlzLl9zcGxpbmVMYXllci5zdGFydERyYXcoIHgsIHkgKTtcclxuXHRcclxuXHQvLyBWZnguXHJcblx0dGhpcy5fcG9pbnRlclBTLnJlc2V0UG9zaXRpb25UcmFja2luZygpO1xyXG5cdHRoaXMuX3BvaW50ZXJQUy5zcGF3blBvcyA9IG5ldyBQSVhJLlBvaW50KCB4LCB5ICk7XHJcblx0XHJcblx0dGhpcy5fcG9pbnRlclBTLmVtaXQgPSB0cnVlO1xyXG59XHJcblxyXG5Sb29tLnByb3RvdHlwZS5tb3ZlTGluZURyYXcgPSBmdW5jdGlvbiggeCwgeSApXHJcbntcclxuXHR0aGlzLl9zcGxpbmVMYXllci5kcmF3KCB4LCB5ICk7XHJcblx0XHJcblx0Ly8gVmZ4LiBcclxuXHR0aGlzLl9wb2ludGVyUFMudXBkYXRlU3Bhd25Qb3MoIHgsIHkgKTtcclxuXHQvL3RoaXMuX3BvaW50ZXJQUy5lbWl0ID0gZmFsc2U7XHJcblx0Ly90aGlzLl9wb2ludGVyUFMuZW1pdCA9IHRydWU7XHJcbn1cclxuXHJcblJvb20ucHJvdG90eXBlLmVuZExpbmVEcmF3ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5fc3BsaW5lTGF5ZXIuZW5kRHJhdygpO1xyXG5cdFxyXG5cdC8vIFZmeC5cclxuXHR0aGlzLl9wb2ludGVyUFMuZW1pdCA9IGZhbHNlO1xyXG59XHJcblxyXG5Sb29tLnByb3RvdHlwZS51cGRhdGVTdGF0aWNQYXJ0aWNsZVN5c3RlbXMgPSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyBQb2ludGVyIHZmeC5cclxuXHRpZiAoIHRoaXMuX3BvaW50ZXJQUyAhPSBudWxsIClcclxuXHR7XHJcblx0XHQvKmlmICggdGhpcy5fc3BsaW5lTGF5ZXIuaXNEcmF3aW5nIClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fcG9pbnRlclBTLmVtaXQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5fcG9pbnRlclBTLmVtaXQgPSB0cnVlO1xyXG5cdFx0fSovXHJcblx0XHJcblx0XHR0aGlzLl9wb2ludGVyUFMudXBkYXRlKCBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKTtcclxuXHR9XHJcblx0XHJcblx0Ly8gV2F0ZXJmYWxscy5cclxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl93YXRlcmZhbGxQYXJ0aWNsZVN5c3RlbXMubGVuZ3RoOyArK2kgKVxyXG5cdFx0dGhpcy5fd2F0ZXJmYWxsUGFydGljbGVTeXN0ZW1zWyBpIF0udXBkYXRlKCBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKTtcclxufVxyXG5cclxuUm9vbS5wcm90b3R5cGUuaXNBbGxDb2luc0NvbGxlY3RlZCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLl9vYmplY3RzLmNvaW5zLmxlbmd0aCA9PSB0aGlzLl9yb29tUmVzdWx0SW5mby5jb2xsZWN0ZWRDb2lucztcclxufVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuUm9vbS5wcm90b3R5cGUub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSlcclxue1x0XHJcblx0dmFyIHBvcyA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuX2hpdEFyZWEpO1xyXG5cdHRoaXMuc3RhcnRMaW5lRHJhdyggcG9zLnggKiB0aGlzLnJvb21XaWR0aCwgcG9zLnkgKiB0aGlzLnJvb21IZWlnaHQgKTtcdFxyXG5cdC8vY29uc29sZS5sb2coICggcG9zLnggKiB0aGlzLnJvb21XaWR0aCApLnRvU3RyaW5nKCkgKyBcIiA6OiBcIiArICggcG9zLnkgKiB0aGlzLnJvb21IZWlnaHQgKS50b1N0cmluZygpICk7XHJcbn1cclxuXHJcblJvb20ucHJvdG90eXBlLm9uVG91Y2hFbmQgPSBmdW5jdGlvbihlKVxyXG57XHJcblx0dGhpcy5lbmRMaW5lRHJhdygpO1xyXG59XHJcblxyXG5Sb29tLnByb3RvdHlwZS5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpXHJcbntcclxuXHR2YXIgcG9zID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5faGl0QXJlYSk7XHJcblxyXG5cdGlmICggcG9zLnggPCAwIHx8IHBvcy55IDwgMCB8fCBwb3MueCA+IDEgfHwgcG9zLnkgPiAxIClcclxuXHRcdHRoaXMuX3NwbGluZUxheWVyLmVuZERyYXcoKTtcclxuXHRlbHNlXHJcblx0XHR0aGlzLl9zcGxpbmVMYXllci5kcmF3KHBvcy54ICogdGhpcy5yb29tV2lkdGgsIHBvcy55ICogdGhpcy5yb29tSGVpZ2h0KTtcclxuXHRcclxuXHQvLyBWZnguIFxyXG5cdGlmICggdGhpcy5fc3BsaW5lTGF5ZXIuaXNEcmF3aW5nIClcclxuXHR7XHJcblx0XHR0aGlzLl9wb2ludGVyUFMudXBkYXRlU3Bhd25Qb3MoIHBvcy54ICogdGhpcy5yb29tV2lkdGgsIHBvcy55ICogdGhpcy5yb29tSGVpZ2h0ICk7XHJcblx0XHQvL3RoaXMuX3BvaW50ZXJQUy5lbWl0ID0gZmFsc2U7XHJcblx0XHQvL3RoaXMuX3BvaW50ZXJQUy5lbWl0ID0gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblJvb20ucHJvdG90eXBlLm9uRW5lbXlLaWxsZWQgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl9yb29tUmVzdWx0SW5mby5raWxsZWRFbmVtaWVzICs9IDE7XHJcbn1cclxuXHJcblJvb20ucHJvdG90eXBlLm9uUG93ZXJ1cENvbGxlY3RlZCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuX3Jvb21SZXN1bHRJbmZvLmNvbGxlY3RlZFBvd2VydXBzICs9IDE7XHJcbn1cclxuXHJcblJvb20ucHJvdG90eXBlLm9uQ29pbkNvbGxlY3RlZCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuX3Jvb21SZXN1bHRJbmZvLmNvbGxlY3RlZENvaW5zICs9IDE7XHJcbn1cclxuXHJcblJvb20ucHJvdG90eXBlLm9uQmxvY2tEZXN0cm95ZWQgPSBmdW5jdGlvbiggYmxvY2tDb3VudCApXHJcbntcclxuXHR0aGlzLl9yb29tUmVzdWx0SW5mby5kZXN0cm95ZWRCbG9ja3MgKz0gYmxvY2tDb3VudDtcclxufVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMgLyBTRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwicm9vbVdpZHRoXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3RpbGVTaXplICogdGhpcy5fZGF0YS53aWR0aDsgfSB9ICk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwicm9vbUhlaWdodFwiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl90aWxlU2l6ZSAqIHRoaXMuX2RhdGEuaGVpZ2h0OyB9IH0gKTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRSb29tLnByb3RvdHlwZSwgXHJcblx0XCJ0aWxlc1wiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl90aWxlczsgfSB9ICk7XHJcblx0XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRSb29tLnByb3RvdHlwZSwgXHJcblx0XCJ0aWxlU2l6ZVwiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl90aWxlU2l6ZTsgfSB9ICk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwic3BsaW5lTGF5ZXJcIiwgXHJcblx0eyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fc3BsaW5lTGF5ZXI7IH0gfSApO1xyXG5cdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwiYmxvY2tzXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2Jsb2NrczsgfSB9ICk7XHJcblx0XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRSb29tLnByb3RvdHlwZSwgXHJcblx0XCJ3YWxsQmxvY2tzXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3dhbGxCbG9ja3M7IH0gfSApO1xyXG5cdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwiY3JhY2tlZFdhbGxCbG9ja3NcIiwgXHJcblx0eyBcdGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9jcmFja2VkV2FsbEJsb2NrczsgfSxcclxuXHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHsgdGhpcy5fY3JhY2tlZFdhbGxCbG9ja3MgPSB2YWx1ZTsgfSB9XHQpO1xyXG5cdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwiY3JhY2tlZFBsYXRmb3JtQmxvY2tzXCIsIFxyXG5cdHsgXHRnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fY3JhY2tlZFBsYXRmb3JtQmxvY2tzOyB9LFxyXG5cdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkgeyB0aGlzLl9jcmFja2VkUGxhdGZvcm1CbG9ja3MgPSB2YWx1ZTsgfSB9XHQpO1xyXG5cdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwib2JqZWN0c1wiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9vYmplY3RzOyB9IH0gKTtcclxuXHRcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdFJvb20ucHJvdG90eXBlLCBcclxuXHRcImxldmVsXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xldmVsOyB9IH0gKTtcclxuXHRcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdFJvb20ucHJvdG90eXBlLCBcclxuXHRcImF2YXRhclwiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9hdmF0YXI7IH0gfSApO1xyXG5cdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcblx0Um9vbS5wcm90b3R5cGUsIFxyXG5cdFwibGF5ZXJzXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xheWVyczsgfSB9ICk7XHJcblx0XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRSb29tLnByb3RvdHlwZSwgXHJcblx0XCJwYXJ0aWNsZVN5c3RlbXNcIiwgXHJcblx0eyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fcGFydGljbGVTeXN0ZW1zOyB9IH0gKTsiLCJ2YXIgQ29tbW9uID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxudmFyIFJvb20gPSByZXF1aXJlKFwiLi4vZ2FtZS9Sb29tXCIpO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gU3BsaW5lTGF5ZXIocm9vbSlcclxue1xyXG5cdC8vIFBhcmVudC5cclxuXHRQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG5cdFxyXG5cdFxyXG5cdC8vIEF0dHJpYnV0ZXMuXHJcblx0dGhpcy5yb29tICAgICA9IHJvb207XHJcblxyXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHRcclxuXHR0aGlzLnNwbGluZXMgID0gW107XHJcblx0dGhpcy5jdXJyZW50U3BsaW5lID0gbnVsbDtcclxuXHR0aGlzLmlzRHJhd2luZyA9IGZhbHNlO1xyXG5cclxuXHQvLyBXaXJlZnJhbWVcclxuXHRpZih0aGlzLnJvb20uZGVidWcpXHJcblx0e1xyXG5cdFx0dGhpcy53aXJlZnJhbWUgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG5cdFx0dGhpcy53aXJlZnJhbWUubGluZVN0eWxlKDUsIDB4ZmYwMDAwKTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy53aXJlZnJhbWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gVGV4dHVyZXNcclxuXHR0aGlzLnRleHR1cmVzID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblx0dGhpcy50ZXh0dXJlU2VnbWVudCA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwibGluZUdyZWVuXzAxXCIpXHJcblx0dGhpcy50ZXh0dXJlQ2FwICAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwibGluZUdyZWVuXzAwXCIpXHJcblx0dGhpcy5hZGRDaGlsZCh0aGlzLnRleHR1cmVzKTtcclxuXHRcclxuXHR0aGlzLnNwbGluZVNlZ21lbnRDb3VudCA9IDA7XHJcblx0XHJcblx0XHJcblx0Ly8gQ29uc3RhbnRzLlxyXG5cdHRoaXMuTUFYX1NQTElORV9URVhUVVJFX0NPVU5UID0gMTAwMDsgLy8gRm9yIHBlcmZvcm1hbmNlIGlzc3Vlcy5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTcGxpbmVMYXllcjtcclxuU3BsaW5lTGF5ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xyXG5TcGxpbmVMYXllci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcGxpbmVMYXllcjtcclxuXHJcblNwbGluZUxheWVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59XHJcblxyXG4vKipcclxuICovXHJcblNwbGluZUxheWVyLnByb3RvdHlwZS5zdGFydERyYXcgPSBmdW5jdGlvbih4LCB5KVxyXG57XHJcblx0aWYgKCB0aGlzLnNwbGluZVNlZ21lbnRDb3VudCA+IHRoaXMuTUFYX1NQTElORV9URVhUVVJFX0NPVU5UICkgcmV0dXJuO1xyXG5cclxuXHR0aGlzLmlzRHJhd2luZyA9IHRydWU7XHJcblx0dGhpcy5jdXJyZW50U3BsaW5lID0gbmV3IFNwbGluZSh0aGlzLHgseSk7XHJcblx0XHJcblx0Ly8gU2Z4LlxyXG5cdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoIFwic2Z4X2RyYXdfc3RhcnRcIiApO1x0XHJcblx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfZHJhd19sb29wXCIsIHsgbG9vcDp0cnVlIH0gKTtcdFxyXG59XHJcblxyXG4vKipcclxuICovXHJcblNwbGluZUxheWVyLnByb3RvdHlwZS5lbmREcmF3ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0aWYoIXRoaXMuaXNEcmF3aW5nKSByZXR1cm47XHJcblx0XHJcblx0dGhpcy5jdXJyZW50U3BsaW5lLmRyYXdDYXBFbmQoKTtcclxuXHR0aGlzLmlzRHJhd2luZyA9IGZhbHNlO1xyXG5cdFxyXG5cdC8vIFNmeC5cclxuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2Uuc3RvcFNvdW5kKCBcInNmeF9kcmF3X2xvb3BcIiApO1x0XHJcblx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfZHJhd19zdG9wXCIgKTtcdFxyXG59XHJcblxyXG4vKipcclxuICovXHJcblNwbGluZUxheWVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oeCwgeSlcclxue1xyXG5cdGlmKCF0aGlzLmlzRHJhd2luZykgcmV0dXJuO1xyXG5cdGlmICggdGhpcy5zcGxpbmVTZWdtZW50Q291bnQgPiB0aGlzLk1BWF9TUExJTkVfVEVYVFVSRV9DT1VOVCApIFxyXG5cdHtcclxuXHRcdHRoaXMuZW5kRHJhdygpOyBcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHZhciBsZW5ndGhCZWZvcmUgPSB0aGlzLmN1cnJlbnRTcGxpbmUubGVuZ3RoO1xyXG5cclxuXHR0aGlzLmN1cnJlbnRTcGxpbmUuYWRkUG9pbnQoeCx5KTtcclxuXHJcblx0aWYobGVuZ3RoQmVmb3JlID09IDEgJiYgdGhpcy5jdXJyZW50U3BsaW5lLmxlbmd0aCA+IDEpXHJcblx0e1xyXG5cdFx0dGhpcy5zcGxpbmVzLnB1c2godGhpcy5jdXJyZW50U3BsaW5lKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5TcGxpbmVMYXllci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLnNwbGluZXMgPSBbXTtcclxuXHR0aGlzLnRleHR1cmVzLnJlbW92ZUNoaWxkcmVuKCk7XHJcblx0dGhpcy5zcGxpbmVTZWdtZW50Q291bnQgPSAwO1xyXG5cdHRoaXMuY3VycmVudFNwbGluZSA9IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gU3BsaW5lKGxheWVyLHgseSlcclxue1xyXG5cdHRoaXMubGF5ZXIgICAgICAgICA9IGxheWVyO1xyXG5cdHRoaXMucG9pbnRzICAgICAgICA9IFt7eDp4LCB5Onl9XTtcclxuXHR0aGlzLnNlZ21lbnRMZW5ndGggPSAxNTtcclxuXHR0aGlzLnNlZ21lbnRXaWR0aCAgPSA4O1xyXG59XHJcblxyXG4vKipcclxuICovXHJcblNwbGluZS5wcm90b3R5cGUuYWRkUG9pbnQgPSBmdW5jdGlvbih4LHkpXHJcbntcclxuXHR2YXIgbGFzdFBvaW50ID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdO1xyXG5cclxuXHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3cobGFzdFBvaW50LnggLSB4LDIpICsgTWF0aC5wb3cobGFzdFBvaW50LnkgLSB5LDIpKTtcclxuXHRpZihkaXN0YW5jZSA8IHRoaXMuc2VnbWVudExlbmd0aCkgcmV0dXJuO1xyXG5cclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgTWF0aC5mbG9vcihkaXN0YW5jZS90aGlzLnNlZ21lbnRMZW5ndGgpOyBpKyspXHJcblx0e1xyXG5cdFx0dmFyIGRyYXduUG9pbnQgPVxyXG5cdFx0e1xyXG5cdFx0XHR4OiBsYXN0UG9pbnQueCArICh4LWxhc3RQb2ludC54KSAqICgodGhpcy5zZWdtZW50TGVuZ3RoICogKGkrMSkpL2Rpc3RhbmNlKSxcclxuXHRcdFx0eTogbGFzdFBvaW50LnkgKyAoeS1sYXN0UG9pbnQueSkgKiAoKHRoaXMuc2VnbWVudExlbmd0aCAqIChpKzEpKS9kaXN0YW5jZSlcclxuXHRcdH1cclxuXHRcdHRoaXMucG9pbnRzLnB1c2goZHJhd25Qb2ludCk7XHJcblxyXG5cdFx0aWYodGhpcy5wb2ludHMubGVuZ3RoID09IDIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGF5ZXIuc3BsaW5lcy5wdXNoKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIERyYXcgdGhlIHNlZ21lbnRcclxuXHRcdHRoaXMuZHJhd1NlZ21lbnQodGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTJdLCB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0pO1xyXG5cdFxyXG5cdFx0Ly8gRHJhdyB0aGUgY2FwIGlmIG5lY2Vzc2FyeVxyXG5cdFx0dGhpcy5kcmF3Q2FwU3RhcnQoKTtcclxuXHJcblx0XHQvLyBEcmF3IHRoZSBzZWdtZW50IGRlYnVnIGxpbmVcclxuXHRcdGlmKHRoaXMubGF5ZXIucm9vbS5kZWJ1ZylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5sYXllci53aXJlZnJhbWUubW92ZVRvKGxhc3RQb2ludC54LCBsYXN0UG9pbnQueSk7XHJcblx0XHRcdHRoaXMubGF5ZXIud2lyZWZyYW1lLmxpbmVUbyhkcmF3blBvaW50LngsIGRyYXduUG9pbnQueSk7XHJcblx0XHRcdHRoaXMubGF5ZXIud2lyZWZyYW1lLmRyYXdDaXJjbGUoZHJhd25Qb2ludC54LCBkcmF3blBvaW50LnksIDMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5TcGxpbmUucHJvdG90eXBlLmRyYXdTZWdtZW50ID0gZnVuY3Rpb24ocDEsIHAyKVxyXG57XHJcblx0dGhpcy5sYXllci5zcGxpbmVTZWdtZW50Q291bnQgKz0gMTtcclxuXHJcblx0dmFyIHRleHR1cmUgID0gdGhpcy5sYXllci50ZXh0dXJlU2VnbWVudDtcclxuXHR2YXIgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KDgpO1xyXG5cdHZhciB1dnMgICAgICA9IG5ldyBGbG9hdDMyQXJyYXkoOCk7XHJcblx0dmFyIGluZGljZXMgID0gbmV3IFVpbnQxNkFycmF5KDYpO1xyXG5cclxuXHR2YXIgcDEgPSB7eDpwMS54LCB5OnAxLnl9OyAvLyBDbG9uZSBvYmplY3RzXHJcblx0dmFyIHAyID0ge3g6cDIueCwgeTpwMi55fTtcclxuXHR2YXIgdlNlZ21lbnROb3JtID0gbmV3IFBJWEkuUG9pbnQoKHAyLnggLSBwMS54KSAvIHRoaXMuc2VnbWVudExlbmd0aCwgKHAyLnkgLSBwMS55KSAvIHRoaXMuc2VnbWVudExlbmd0aCk7XHJcblx0dmFyIHZTZWdtZW50UGVycCA9IG5ldyBQSVhJLlBvaW50KHZTZWdtZW50Tm9ybS55LCAtdlNlZ21lbnROb3JtLngpO1xyXG5cclxuXHRwMS54IC09IHZTZWdtZW50Tm9ybS54ICogMC41O1xyXG5cdHAxLnkgLT0gdlNlZ21lbnROb3JtLnkgKiAwLjU7XHJcblx0cDIueCArPSB2U2VnbWVudE5vcm0ueCAqIDAuNTtcclxuXHRwMi55ICs9IHZTZWdtZW50Tm9ybS55ICogMC41O1xyXG5cclxuXHR2ZXJ0aWNlcy5zZXQoXHJcblx0XHRbXHJcblx0XHRcdHAxLnggKyB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMS55ICsgdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aCxcclxuXHRcdFx0cDIueCArIHZTZWdtZW50UGVycC54ICogdGhpcy5zZWdtZW50V2lkdGgsIHAyLnkgKyB2U2VnbWVudFBlcnAueSAqIHRoaXMuc2VnbWVudFdpZHRoLFxyXG5cdFx0XHRwMi54IC0gdlNlZ21lbnRQZXJwLnggKiB0aGlzLnNlZ21lbnRXaWR0aCwgcDIueSAtIHZTZWdtZW50UGVycC55ICogdGhpcy5zZWdtZW50V2lkdGgsXHJcblx0XHRcdHAxLnggLSB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMS55IC0gdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aFxyXG5cdFx0XSwgMClcclxuXHJcblx0dXZzLnNldChbMCwgMCwgMSwgMCwgMSwgMSwgMCwgMV0sIDApO1xyXG5cdGluZGljZXMuc2V0KFswLCAxLCAyLCAwLCAyLCAzXSwgMCk7XHJcblxyXG5cdHZhciBtZXNoID0gbmV3IFBJWEkubWVzaC5NZXNoXHJcblx0KFxyXG5cdFx0dGV4dHVyZSxcclxuXHRcdHZlcnRpY2VzLFxyXG5cdFx0dXZzLFxyXG5cdFx0aW5kaWNlcyxcclxuXHRcdFBJWEkubWVzaC5NZXNoLkRSQVdfTU9ERVMuVFJJQU5HTEVTXHJcblx0KTtcclxuXHR0aGlzLmxheWVyLnRleHR1cmVzLmFkZENoaWxkKG1lc2gpO1xyXG59XHJcblxyXG4vKipcclxuICovXHJcblNwbGluZS5wcm90b3R5cGUuZHJhd0NhcFN0YXJ0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0aWYodGhpcy5wb2ludHMubGVuZ3RoICE9IDIpIHJldHVybjtcclxuXHJcblx0dmFyIHRleHR1cmUgID0gdGhpcy5sYXllci50ZXh0dXJlQ2FwO1xyXG5cdHZhciB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoOCk7XHJcblx0dmFyIHV2cyAgICAgID0gbmV3IEZsb2F0MzJBcnJheSg4KTtcclxuXHR2YXIgaW5kaWNlcyAgPSBuZXcgVWludDE2QXJyYXkoNik7XHJcblxyXG5cdHZhciBwMiA9IHt4OnRoaXMucG9pbnRzWzBdLngsIHk6dGhpcy5wb2ludHNbMF0ueX07XHJcblx0dmFyIHAxID0ge3g6dGhpcy5wb2ludHNbMV0ueCwgeTp0aGlzLnBvaW50c1sxXS55fTtcclxuXHR2YXIgdlNlZ21lbnROb3JtID0gbmV3IFBJWEkuUG9pbnQoKHAxLnggLSBwMi54KSAvIHRoaXMuc2VnbWVudExlbmd0aCwgKHAxLnkgLSBwMi55KSAvIHRoaXMuc2VnbWVudExlbmd0aCk7XHJcblx0cDEueCA9IHAyLnggLSB2U2VnbWVudE5vcm0ueCAqIHRoaXMuc2VnbWVudFdpZHRoO1xyXG5cdHAxLnkgPSBwMi55IC0gdlNlZ21lbnROb3JtLnkgKiB0aGlzLnNlZ21lbnRXaWR0aDtcclxuXHR2YXIgdlNlZ21lbnRQZXJwID0gbmV3IFBJWEkuUG9pbnQodlNlZ21lbnROb3JtLnksIC12U2VnbWVudE5vcm0ueCk7XHJcblxyXG5cdHZlcnRpY2VzLnNldChcclxuXHRcdFtcclxuXHRcdHAxLnggKyB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMS55ICsgdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aCxcclxuXHRcdHAyLnggKyB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMi55ICsgdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aCxcclxuXHRcdHAyLnggLSB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMi55IC0gdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aCxcclxuXHRcdHAxLnggLSB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMS55IC0gdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aFxyXG5cdFx0XSwgMClcclxuXHJcblx0dXZzLnNldChbMCwgMCwgMSwgMCwgMSwgMSwgMCwgMV0sIDApO1xyXG5cdGluZGljZXMuc2V0KFswLCAxLCAyLCAwLCAyLCAzXSwgMCk7XHJcblxyXG5cdHZhciBtZXNoID0gbmV3IFBJWEkubWVzaC5NZXNoXHJcblx0KFxyXG5cdFx0dGV4dHVyZSxcclxuXHRcdHZlcnRpY2VzLFxyXG5cdFx0dXZzLFxyXG5cdFx0aW5kaWNlcyxcclxuXHRcdFBJWEkubWVzaC5NZXNoLkRSQVdfTU9ERVMuVFJJQU5HTEVTXHJcblx0KTtcclxuXHJcblx0dGhpcy5sYXllci50ZXh0dXJlcy5hZGRDaGlsZChtZXNoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqL1xyXG5TcGxpbmUucHJvdG90eXBlLmRyYXdDYXBFbmQgPSBmdW5jdGlvbih4LHkpXHJcbntcclxuXHRpZih0aGlzLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG5cdC8vIERyYXcgdGhlIGVuZCBjYXBcclxuXHR2YXIgdGV4dHVyZSAgPSB0aGlzLmxheWVyLnRleHR1cmVDYXA7XHJcblx0dmFyIHZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSg4KTtcclxuXHR2YXIgdXZzICAgICAgPSBuZXcgRmxvYXQzMkFycmF5KDgpO1xyXG5cdHZhciBpbmRpY2VzICA9IG5ldyBVaW50MTZBcnJheSg2KTtcclxuXHJcblx0dmFyIHAyID0ge3g6dGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLngsIHk6dGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLnl9O1xyXG5cdHZhciBwMSA9IHt4OnRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0yXS54LCB5OnRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0yXS55fTtcclxuXHR2YXIgdlNlZ21lbnROb3JtID0gbmV3IFBJWEkuUG9pbnQoKHAxLnggLSBwMi54KSAvIHRoaXMuc2VnbWVudExlbmd0aCwgKHAxLnkgLSBwMi55KSAvIHRoaXMuc2VnbWVudExlbmd0aCk7XHJcblx0cDEueCA9IHAyLnggLSB2U2VnbWVudE5vcm0ueCAqIHRoaXMuc2VnbWVudFdpZHRoO1xyXG5cdHAxLnkgPSBwMi55IC0gdlNlZ21lbnROb3JtLnkgKiB0aGlzLnNlZ21lbnRXaWR0aDtcclxuXHR2YXIgdlNlZ21lbnRQZXJwID0gbmV3IFBJWEkuUG9pbnQodlNlZ21lbnROb3JtLnksIC12U2VnbWVudE5vcm0ueCk7XHJcblxyXG5cdHZlcnRpY2VzLnNldChcclxuXHRcdFtcclxuXHRcdHAxLnggKyB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMS55ICsgdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aCxcclxuXHRcdHAyLnggKyB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMi55ICsgdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aCxcclxuXHRcdHAyLnggLSB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMi55IC0gdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aCxcclxuXHRcdHAxLnggLSB2U2VnbWVudFBlcnAueCAqIHRoaXMuc2VnbWVudFdpZHRoLCBwMS55IC0gdlNlZ21lbnRQZXJwLnkgKiB0aGlzLnNlZ21lbnRXaWR0aFxyXG5cdFx0XSwgMClcclxuXHJcblx0dXZzLnNldChbMCwgMCwgMSwgMCwgMSwgMSwgMCwgMV0sIDApO1xyXG5cdGluZGljZXMuc2V0KFswLCAxLCAyLCAwLCAyLCAzXSwgMCk7XHJcblxyXG5cdHZhciBtZXNoID0gbmV3IFBJWEkubWVzaC5NZXNoXHJcblx0KFxyXG5cdFx0dGV4dHVyZSxcclxuXHRcdHZlcnRpY2VzLFxyXG5cdFx0dXZzLFxyXG5cdFx0aW5kaWNlcyxcclxuXHRcdFBJWEkubWVzaC5NZXNoLkRSQVdfTU9ERVMuVFJJQU5HTEVTXHJcblx0KTtcclxuXHJcblx0dGhpcy5sYXllci50ZXh0dXJlcy5hZGRDaGlsZChtZXNoKTtcdFxyXG59IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBUcmFuc2Zvcm1hdGlvbiggcm9vbSApXHJcbntcclxuXHQvLyBBbGllbiB0eXBlcy5cclxuXHR0aGlzLlRSQU5TRk9STUFUSU9OX0lEX09WRVJGTE9XID0gMDtcclxuXHR0aGlzLlRSQU5TRk9STUFUSU9OX0lEX0NBTk5PTkJPTFQgPSAxO1xyXG5cdHRoaXMuVFJBTlNGT1JNQVRJT05fSURfVVBHUkFERSA9IDI7XHJcblx0dGhpcy5UUkFOU0ZPUk1BVElPTl9JRF9GT1VSQVJNUyA9IDM7XHJcblx0XHJcblx0dGhpcy5faWQgPSBudWxsO1xyXG5cdHRoaXMuX3Jvb20gPSByb29tO1xyXG5cdHRoaXMuX3RpbWVyID0gMDtcdFxyXG5cdFxyXG5cdHRoaXMuTUFYX0RVUkFUSU9OID0gMTI7XHJcblx0XHJcblx0Ly8gRXZlbnRzLlxyXG5cdHRoaXMuc2lnbmFscyA9IHt9O1xyXG5cdHRoaXMuc2lnbmFscy5vblRyYW5zZm9ybWF0aW9uRXhwaXJlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtYXRpb247XHJcblRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRyYW5zZm9ybWF0aW9uO1xyXG5cclxuVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdC8vIFRPRE86IERFQlVHOlxyXG5cdHRoaXMuX3RpbWVyICs9IHAzLlRpbWVzdGVwLmRlbHRhVGltZTtcclxuXHRpZiAoIHRoaXMuX3RpbWVyID49IHRoaXMuTUFYX0RVUkFUSU9OIClcclxuXHRcdHRoaXMuc2lnbmFscy5vblRyYW5zZm9ybWF0aW9uRXhwaXJlZC5kaXNwYXRjaCgpO1xyXG59XHJcblxyXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUucmVzZXRUaW1lciA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuX3RpbWVyID0gMDtcclxufVxyXG5cclxuLy8gRGVmYXVsdCBtZXRob2RzLlxyXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUub25FbmVteUNvbGxpc2lvbiA9IGZ1bmN0aW9uKCBlbmVteSApIHsgcmV0dXJuIHRydWU7IH1cclxuVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlLm9uV2F0ZXJmYWxsQ29sbGlzaW9uID0gZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSwgXHJcblx0XCJpZFwiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9pZDsgfSB9ICk7IiwiLyoqXHJcbiAqICBUcmFuc2Zvcm1hdGlvbkVmZmVjdFxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMTcvMDgvMjAxNi5cclxuICpcclxuICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gVHJhbnNmb3JtYXRpb25FZmZlY3QoKSB7XHJcbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG5cdFxyXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHJcbiAgICB0aGlzLl9sYXllcjEgICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInRyYW5zZm9ybV8wMDFcIikpO1xyXG4gICAgdGhpcy5fbGF5ZXIxLmFuY2hvciAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLl9sYXllcjEudmlzaWJsZSAgICA9IGZhbHNlO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYXllcjEpO1xyXG5cclxuICAgIHRoaXMuX2xheWVyMiAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwidHJhbnNmb3JtXzAwMlwiKSk7XHJcbiAgICB0aGlzLl9sYXllcjIucm90YXRpb24gICA9IE1hdGgucmFuZG9tKCkgKiAoTWF0aC5QSSAqIDIpO1xyXG4gICAgdGhpcy5fbGF5ZXIyLmFuY2hvciAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLl9sYXllcjIudmlzaWJsZSAgICA9IGZhbHNlO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYXllcjIpO1xyXG5cclxuICAgIHRoaXMuX2xheWVyMyAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwidHJhbnNmb3JtXzAwM1wiKSk7XHJcbiAgICB0aGlzLl9sYXllcjMucm90YXRpb24gICA9IE1hdGgucmFuZG9tKCkgKiAoTWF0aC5QSSAqIDIpO1xyXG4gICAgdGhpcy5fbGF5ZXIzLmFuY2hvciAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcbiAgICB0aGlzLl9sYXllcjMudmlzaWJsZSAgICA9IGZhbHNlO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYXllcjMpO1xyXG5cclxuICAgIHRoaXMub24oXCJhZGRlZFwiLCB0aGlzLmluaXQsIHRoaXMpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBUcmFuc2Zvcm1hdGlvbkVmZmVjdDtcclxuVHJhbnNmb3JtYXRpb25FZmZlY3QucHJvdG90eXBlICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuVHJhbnNmb3JtYXRpb25FZmZlY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yICA9IFRyYW5zZm9ybWF0aW9uRWZmZWN0O1xyXG5cclxuVHJhbnNmb3JtYXRpb25FZmZlY3QucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5fZW1pdHRlcikge1xyXG4gICAgICAgIHZhciBjb25maWcgICAgICAgICAgICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJwcmVsb2FkZXJfcmFkaWFsX3NwcmF5XCIpO1xyXG4gICAgICAgIGNvbmZpZy5zY2FsZS5zdGFydCAgICAgID0gMC4yO1xyXG4gICAgICAgIGNvbmZpZy5zY2FsZS5lbmQgICAgICAgID0gMS4wO1xyXG4gICAgICAgIGNvbmZpZy5saWZldGltZS5taW4gICAgID0gMC40MjtcclxuICAgICAgICBjb25maWcubGlmZXRpbWUubWF4ICAgICA9IDAuNjg7XHJcbiAgICAgICAgY29uZmlnLmVtaXR0ZXJMaWZldGltZSAgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgY2xvdWRraWQuRW1pdHRlcih0aGlzLnBhcmVudCwgW1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhcnRpY2xlX3RyYW5zZm9ybV8wMDFcIiksXHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfdHJhbnNmb3JtXzAwMlwiKSxcclxuICAgICAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwYXJ0aWNsZV90cmFuc2Zvcm1fMDAzXCIpLFxyXG4gICAgICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhcnRpY2xlX3RyYW5zZm9ybV8wMDRcIilcclxuICAgICAgICBdLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5UcmFuc2Zvcm1hdGlvbkVmZmVjdC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gaW5cclxuICAgIHRoaXMuX2xheWVyMS5zY2FsZSAgICAgID0gbmV3IFBJWEkuUG9pbnQoKTtcclxuICAgIHRoaXMuX2xheWVyMS52aXNpYmxlICAgID0gdHJ1ZTtcclxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2xheWVyMS5zY2FsZSwgMC40LCB7XHJcbiAgICAgICAgeDogMS4wLFxyXG4gICAgICAgIHk6IDEuMCxcclxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXHJcbiAgICAgICAgZWFzZVBhcmFtczogWzRdXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9sYXllcjIuc2NhbGUgICAgICA9IG5ldyBQSVhJLlBvaW50KCk7XHJcbiAgICB0aGlzLl9sYXllcjIudmlzaWJsZSAgICA9IHRydWU7XHJcbiAgICBUd2Vlbk1heC50byh0aGlzLl9sYXllcjIuc2NhbGUsIDAuMzQsIHtcclxuICAgICAgICBkZWxheTogMC4xNCxcclxuICAgICAgICB4OiAxLjAsXHJcbiAgICAgICAgeTogMS4wLFxyXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcclxuICAgICAgICBlYXNlUGFyYW1zOiBbMl1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2xheWVyMy5zY2FsZSAgICAgID0gbmV3IFBJWEkuUG9pbnQoKTtcclxuICAgIHRoaXMuX2xheWVyMy52aXNpYmxlICAgID0gdHJ1ZTtcclxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2xheWVyMy5zY2FsZSwgMC40LCB7XHJcbiAgICAgICAgZGVsYXk6IDAuMzYsXHJcbiAgICAgICAgeDogMS4wLFxyXG4gICAgICAgIHk6IDEuMCxcclxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXHJcbiAgICAgICAgZWFzZVBhcmFtczogWzNdXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBvdXRcclxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2xheWVyMS5zY2FsZSwgMC40LCB7XHJcbiAgICAgICAgZGVsYXk6IDAuOCxcclxuICAgICAgICB4OiAwLjAsXHJcbiAgICAgICAgeTogMC4wLFxyXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZUluLFxyXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyXVxyXG4gICAgfSk7XHJcbiAgICBUd2Vlbk1heC50byh0aGlzLl9sYXllcjIsIDAuMjQsIHtcclxuICAgICAgICBkZWxheTogMC42NixcclxuICAgICAgICBhbHBoYTogMC4wLFxyXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXRcclxuICAgIH0pO1xyXG4gICAgVHdlZW5NYXgudG8odGhpcy5fbGF5ZXIyLnNjYWxlLCAwLjQsIHtcclxuICAgICAgICBkZWxheTogMC42LFxyXG4gICAgICAgIHg6IDAuMCxcclxuICAgICAgICB5OiAwLjAsXHJcbiAgICAgICAgZWFzZTogQmFjay5lYXNlSW4sXHJcbiAgICAgICAgZWFzZVBhcmFtczogWzJdXHJcbiAgICB9KTtcclxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2xheWVyMywgMC4yNCwge1xyXG4gICAgICAgIGRlbGF5OiAwLjY2LFxyXG4gICAgICAgIGFscGhhOiAwLjAsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxyXG4gICAgfSk7XHJcbiAgICBUd2Vlbk1heC50byh0aGlzLl9sYXllcjMuc2NhbGUsIDAuNCwge1xyXG4gICAgICAgIGRlbGF5OiAwLjYsXHJcbiAgICAgICAgeDogMC4wLFxyXG4gICAgICAgIHk6IDAuMCxcclxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VJbixcclxuICAgICAgICBlYXNlUGFyYW1zOiBbMl1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuVHJhbnNmb3JtYXRpb25FZmZlY3QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5fbGF5ZXIyLnJvdGF0aW9uICs9IDAuOCAqIHAzLlRpbWVzdGVwLmRlbHRhVGltZTtcclxuICAgIHRoaXMuX2xheWVyMy5yb3RhdGlvbiAtPSAyLjIgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2VtaXR0ZXIpIHtcclxuICAgICAgICB0aGlzLl9lbWl0dGVyLnVwZGF0ZU93bmVyUG9zKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICB0aGlzLl9lbWl0dGVyLnVwZGF0ZShwMy5UaW1lc3RlcC5kZWx0YVRpbWUpO1xyXG4gICAgfVxyXG59O1xyXG4iLCJ2YXIgQ29tbW9uICAgID0gcmVxdWlyZSggXCIuLi9Db21tb25cIiApO1xyXG52YXIgUG93ZXJ1cCA9IHJlcXVpcmUoIFwiLi9Qb3dlcnVwXCIgKTtcclxudmFyIFVwZ3JhZGVUcmFuc2Zvcm1hdGlvbiA9IHJlcXVpcmUoIFwiLi9VcGdyYWRlVHJhbnNmb3JtYXRpb25cIiApO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIFVwZ3JhZGVQb3dlcnVwKCByb29tIClcclxue1xyXG5cdFBvd2VydXAuY2FsbCggdGhpcywgXCJ1cGdyYWRlX3Bvd2VydXBcIiwgXCJpY29uX3VwZ3JhZGVcIiwgcm9vbSApO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVXBncmFkZVBvd2VydXA7XHJcblVwZ3JhZGVQb3dlcnVwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFBvd2VydXAucHJvdG90eXBlICk7XHJcblVwZ3JhZGVQb3dlcnVwLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVwZ3JhZGVQb3dlcnVwO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5VcGdyYWRlUG93ZXJ1cC5wcm90b3R5cGUucGlja3VwID0gZnVuY3Rpb24oKVxyXG57XHJcblx0aWYgKCB0aGlzLnRha2VuICkgcmV0dXJuO1xyXG5cdFxyXG5cdFBvd2VydXAucHJvdG90eXBlLnBpY2t1cC5jYWxsKCB0aGlzICk7XHJcblx0XHJcblx0dGhpcy5fcm9vbS5sZXZlbC5zZXRUcmFuc2Zvcm1hdGlvbiggbmV3IFVwZ3JhZGVUcmFuc2Zvcm1hdGlvbiggdGhpcy5fcm9vbSApICk7XHJcbn0iLCJ2YXIgQ29tbW9uID0gcmVxdWlyZSggXCIuLi9Db21tb25cIiApO1xyXG52YXIgR2FtZU9iamVjdCA9IHJlcXVpcmUoIFwiLi9HYW1lT2JqZWN0XCIgKTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFVwZ3JhZGVTaG90KCBkaXJlY3Rpb24sIHJvb20gKVxyXG57XHJcblx0R2FtZU9iamVjdC5jYWxsKCB0aGlzLCBcIlVwZ3JhZGVTaG90XCIgKTtcclxuXHRcclxuXHR0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XHJcblx0XHJcblx0dGhpcy5fc3ByaXRlID0gbnVsbDtcclxuXHR0aGlzLl9yb29tID0gcm9vbTtcclxuXHR0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcblx0dGhpcy5faFNwZWVkID0gNjAwOyAvLyBweC9zXHJcblx0dGhpcy5fY29sbGlzaW9ucyA9IHtcclxuXHRcdFx0bGVmdCAgICAgICAgIDogZmFsc2UsXHJcblx0XHRcdHJpZ2h0ICAgICAgICA6IGZhbHNlXHJcblx0XHR9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVXBncmFkZVNob3Q7XHJcblVwZ3JhZGVTaG90LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEdhbWVPYmplY3QucHJvdG90eXBlICk7XHJcblVwZ3JhZGVTaG90LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVwZ3JhZGVTaG90O1xyXG5cclxuVXBncmFkZVNob3QucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiggeCwgeSApXHJcbntcclxuXHQvLyBTcGF3biBwb3NpdGlvblxyXG5cdHRoaXMueCA9IHg7XHJcblx0dGhpcy55ID0geTtcdFxyXG5cclxuXHQvLyBTcHJpdGUuXHJcblx0dGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJwcm9qZWN0aWxlX3VwZ3JhZGVcIiApICk7XHJcblx0dGhpcy5fc3ByaXRlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xyXG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX3Nwcml0ZSApO1x0XHJcblx0dGhpcy5fc3ByaXRlLnNjYWxlLnggPSBNYXRoLmFicyggdGhpcy5fc3ByaXRlLnNjYWxlLnggKSAqIHRoaXMuX2RpcmVjdGlvbjtcclxuXHJcblx0Ly8gQ29sbGlkZXJcclxuXHR0aGlzLmNvbGxpc2lvblJlY3QgPSBuZXcgUElYSS5SZWN0YW5nbGUoIC10aGlzLl9zcHJpdGUud2lkdGggKiAwLjUsIC10aGlzLl9zcHJpdGUuaGVpZ2h0ICogMC41LCB0aGlzLl9zcHJpdGUud2lkdGgsIHRoaXMuX3Nwcml0ZS5oZWlnaHQgKTtcclxuXHR0aGlzLl9lbmVteUNvbGxpc2lvblJlY3QgPSBuZXcgUElYSS5SZWN0YW5nbGUoIC10aGlzLl9zcHJpdGUud2lkdGggKiAwLjUsIC10aGlzLl9zcHJpdGUuaGVpZ2h0ICogMC43NSwgdGhpcy5fc3ByaXRlLndpZHRoLCB0aGlzLl9zcHJpdGUuaGVpZ2h0ICogMS4yNSApO1xyXG5cdC8vdGhpcy5kcmF3Q29sbGlzaW9uKCk7XHJcbn1cclxuXHJcblVwZ3JhZGVTaG90LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgZHggPSB0aGlzLl9oU3BlZWQgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKiB0aGlzLl9kaXJlY3Rpb247XHJcblxyXG5cdC8vIFJlc2V0IGNvbGxpc2lvbnNcclxuXHR0aGlzLl9jb2xsaXNpb25zLmxlZnQgICAgICAgICA9IGZhbHNlO1xyXG5cdHRoaXMuX2NvbGxpc2lvbnMucmlnaHQgICAgICAgID0gZmFsc2U7XHJcblxyXG5cdC8vIEJsb2NrcyBob3Jpem9udGFsIGNvbGxpc2lvbnNcclxuXHRpZiAoIGR4ICE9IDAgKVxyXG5cdHtcclxuXHRcdGlmICggZHggPiAwIClcclxuXHRcdFx0dmFyIHJheU9yaWdpbnMgPSB0aGlzLmdldFJpZ2h0UmF5T3JpZ2lucygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR2YXIgcmF5T3JpZ2lucyA9IHRoaXMuZ2V0TGVmdFJheU9yaWdpbnMoKTtcclxuXHJcblx0XHR2YXIgcmF5ID0gbmV3IFBJWEkuUG9pbnQoIGR4ICsgdGhpcy5za2luV2lkdGggKiBNYXRoLnNpZ24oIGR4ICksIDAgKTtcclxuXHRcdGZvciAoIHZhciByID0gMDsgciA8IHJheU9yaWdpbnMubGVuZ3RoICYmIGR4ICE9IDA7IHIrKyApXHJcblx0XHR7XHJcblx0XHRcdC8vIE1vdmVtZW50IHJheSB2ZXJ0aWNlc1xyXG5cdFx0XHR2YXIgYXZhdGFyUDEgPSByYXlPcmlnaW5zWyByIF07XHJcblx0XHRcdC8vIGF2YXRhclAxLnkgKz0gbW92ZW1lbnQueTtcclxuXHRcdFx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoIGF2YXRhclAxLnggKyByYXkueCwgYXZhdGFyUDEueSArIHJheS55ICk7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgYiA9IDA7IGIgPCB0aGlzLl9yb29tLmJsb2Nrcy5sZW5ndGg7IGIrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIGR4ID4gMCAmJiAhdGhpcy5fcm9vbS5ibG9ja3NbIGIgXS5jb25maWcuY29sbGlzaW9ucy5sZWZ0ICkgY29udGludWU7XHJcblx0XHRcdFx0aWYgKCBkeCA8IDAgJiYgIXRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLmNvbGxpc2lvbnMucmlnaHQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0Ly8gU2VnbWVudCB2ZXJ0aWNlc1xyXG5cdFx0XHRcdHZhciBibG9ja1AxID0gbmV3IFBJWEkuUG9pbnQoIHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLnggKyAoIGR4IDwgMCA/IHRoaXMuX3Jvb20uYmxvY2tzWyBiIF0uY29uZmlnLndpZHRoIDogMCApLCB0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy55ICk7XHJcblx0XHRcdFx0dmFyIGJsb2NrUDIgPSBuZXcgUElYSS5Qb2ludCggYmxvY2tQMS54LCBibG9ja1AxLnkgKyB0aGlzLl9yb29tLmJsb2Nrc1sgYiBdLmNvbmZpZy5oZWlnaHQgKTtcclxuXHJcblx0XHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0XHR2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5saW5lTGluZUNvbGxpc2lvbiggYXZhdGFyUDEsIGF2YXRhclAyLCBibG9ja1AxLCBibG9ja1AyICk7XHJcblx0XHRcdFx0aWYgKCBpbnRlcnNlY3Rpb24gKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBkaXN0YW5jZSA9ICBpbnRlcnNlY3Rpb24ueCAtIGF2YXRhclAxLnggLSB0aGlzLnNraW5XaWR0aCAqIE1hdGguc2lnbiggZHggKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGR4ID4gMCApXHJcblx0XHRcdFx0XHRcdHRoaXMuX2NvbGxpc2lvbnMucmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9jb2xsaXNpb25zLmxlZnQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdGR4ID0gZGlzdGFuY2U7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXHJcblx0XHRcdFx0XHRpZiAoIE1hdGguY2xvc2VFbm91Z2goIGR4LCAwICkgKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkeCA9IDA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIERlY3JlYXNlIHRoZSBsZW5ndGggb2YgZnV0dXJlIHJheWNhc3RzXHJcblx0XHRcdFx0XHRhdmF0YXJQMi54IC09IHJheS54O1xyXG5cdFx0XHRcdFx0cmF5LnggPSBkaXN0YW5jZSArIHRoaXMuc2tpbldpZHRoICogTWF0aC5zaWduKCBkeCApO1xyXG5cdFx0XHRcdFx0YXZhdGFyUDIueCArPSByYXkueDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0Ly8gRGVzdHJveSB0aGUgc2hvdC5cclxuXHRpZiAoIHRoaXMuX2NvbGxpc2lvbnMucmlnaHQgfHwgdGhpcy5fY29sbGlzaW9ucy5sZWZ0IClcclxuXHRcdHRoaXMuaXNHYXJiYWdlID0gdHJ1ZTtcclxuXHRpZiAoICF0aGlzLmlzR2FyYmFnZSApXHJcblx0XHR0aGlzLnggKz0gZHg7XHJcbn1cclxuXHJcbk1hdGguRVBTSUxPTiA9IDFlLTY7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB0d28gZmxvYXRpbmctcG9pbnQgdmFsdWVzIGYxIGFuZCBmMiBhcmUgY2xvc2UgZW5vdWdoIHRvZ2V0aGVyIHRoYXQgdGhleSBjYW4gYmUgY29uc2lkZXJlZCBlcXVhbC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGYxXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmMlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbk1hdGguY2xvc2VFbm91Z2ggPSBmdW5jdGlvbihmMSwgZjIpXHJcbntcclxuXHRyZXR1cm4gTWF0aC5hYnMoKGYxIC0gZjIpIC8gKChmMiA9PSAwLjApID8gMS4wIDogZjIpKSA8IE1hdGguRVBTSUxPTjtcclxufVxyXG5cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRVcGdyYWRlU2hvdC5wcm90b3R5cGUsIFxyXG5cdFwiZW5lbXlDb2xsaXNpb25SZWN0XCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2VuZW15Q29sbGlzaW9uUmVjdDsgfSB9ICk7IiwidmFyIENvbW1vbiAgICA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxudmFyIFRyYW5zZm9ybWF0aW9uID0gcmVxdWlyZSggXCIuL1RyYW5zZm9ybWF0aW9uXCIgKTtcclxudmFyIFVwZ3JhZGVTaG90ID0gcmVxdWlyZSggXCIuL1VwZ3JhZGVTaG90XCIgKTtcclxuXHJcbnZhciBnX3VwZ3JhZGVUcmFuc2Zvcm1hdGlvbiA9IG51bGw7XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBVcGdyYWRlVHJhbnNmb3JtYXRpb24oIHJvb20gKVxyXG57XHJcblx0VHJhbnNmb3JtYXRpb24uY2FsbCggdGhpcywgcm9vbSApO1xyXG5cdHRoaXMuX2lkID0gdGhpcy5UUkFOU0ZPUk1BVElPTl9JRF9VUEdSQURFO1xyXG5cdFxyXG5cdFxyXG5cdC8vIEVudW1zLlxyXG5cdHRoaXMuU1RBVEVfREVURUNUSU5HX1dBTExfR0FQX1NUQVJUID0gMDtcclxuXHR0aGlzLlNUQVRFX0RFVEVDVElOR19XQUxMX0dBUF9FTkQgPSAxO1xyXG5cdHRoaXMuU1RBVEVfTUVMVElOR19ET1dOID0gMjtcclxuXHR0aGlzLlNUQVRFX01FTFRJTkdfVVAgPSAzO1xyXG5cdHRoaXMuU1RBVEVfU0hPT1RJTkcgPSA0O1xyXG5cdFxyXG5cdC8vIENvbnN0YW50cy5cclxuXHR0aGlzLlNNQUxMX0NPTExJU0lPTl9SRUNUID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCAtMTAsIC0yMCwgMjAsIDIwICk7XHRcdFxyXG5cdHRoaXMuQklHX0NPTExJU0lPTl9SRUNUID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCAtMTAsIC03NSwgMjAsIDc1ICk7XHRcclxuXHR0aGlzLldBTExfR0FQX0RFVEVDVElPTl9SQVlfTEVOR1RIID0gMTA7XHJcblx0dGhpcy5SRUxPQURJTkdfVElNRSA9IC43NTtcclxuXHR0aGlzLlNIT09UX1JBTkdFID0gNDAwO1xyXG5cdFxyXG5cdC8vIEF0dHJpYnV0ZXMuXHJcblx0dGhpcy5fc3RhdGUgPSB0aGlzLlNUQVRFX0lETEU7XHJcblx0dGhpcy5fcmVsb2FkaW5nVGltZXIgPSB0aGlzLlJFTE9BRElOR19USU1FO1xyXG5cdFxyXG5cdGdfdXBncmFkZVRyYW5zZm9ybWF0aW9uID0gdGhpcztcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFVwZ3JhZGVUcmFuc2Zvcm1hdGlvbjtcclxuVXBncmFkZVRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSApO1xyXG5VcGdyYWRlVHJhbnNmb3JtYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVXBncmFkZVRyYW5zZm9ybWF0aW9uO1xyXG5cclxuXHJcblVwZ3JhZGVUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHRcclxuXHRpZiAoIHRoaXMuX3JlbG9hZGluZ1RpbWVyIDwgdGhpcy5SRUxPQURJTkdfVElNRSApXHJcblx0XHR0aGlzLl9yZWxvYWRpbmdUaW1lciArPSBwMy5UaW1lc3RlcC5kZWx0YVRpbWU7IFxyXG5cdFxyXG5cdHN3aXRjaCAoIHRoaXMuX3N0YXRlIClcclxuXHR7XHJcblx0XHRjYXNlIHRoaXMuU1RBVEVfSURMRTpcclxuXHRcdHtcdFx0XHJcblx0XHRcdFRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS51cGRhdGUuY2FsbCggdGhpcyApO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR2YXIgYXZhdGFyID0gdGhpcy5fcm9vbS5hdmF0YXI7XHJcblx0XHRcdC8vIFdhbGwgZ2FwIGRldGVjdGlvbi5cclxuXHRcdFx0LyppZiAoIGF2YXRhci5zcGxpbmUgPT0gbnVsbCApXHJcblx0XHRcdHsqL1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdHZhciByYXlMZW5ndGggPSBNYXRoLnNpZ24oIGF2YXRhci5zcGluZUNvbnRhaW5lci5zY2FsZS54ICkgPiAwID8gdGhpcy5XQUxMX0dBUF9ERVRFQ1RJT05fUkFZX0xFTkdUSCA6IC10aGlzLldBTExfR0FQX0RFVEVDVElPTl9SQVlfTEVOR1RIO1x0XHRcclxuXHRcdFx0XHR2YXIgaXNSYXlIaXRGcm9tQmlnID0gdGhpcy5yYXljYXN0SG9yaXpvbnRhbGx5KCB0aGlzLkJJR19DT0xMSVNJT05fUkVDVCwgcmF5TGVuZ3RoICkgXHJcblx0XHRcdFx0XHR8fCAoIHRoaXMucmF5Y2FzdFVwd2FyZCggdGhpcy5CSUdfQ09MTElTSU9OX1JFQ1QsIHRoaXMuV0FMTF9HQVBfREVURUNUSU9OX1JBWV9MRU5HVEggKSAmJiBhdmF0YXIuY3VycmVudFNwaW5lQW5pbWF0aW9uLm5hbWUgPT0gXCJydW5fbGV2ZWxcIiAgKTtcclxuXHRcdFx0XHRpZiAoIGlzUmF5SGl0RnJvbUJpZyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGlzUmF5SGl0RnJvbVNtYWxsID0gdGhpcy5yYXljYXN0SG9yaXpvbnRhbGx5KCB0aGlzLlNNQUxMX0NPTExJU0lPTl9SRUNULCByYXlMZW5ndGggKSB8fCB0aGlzLnJheWNhc3RVcHdhcmQoIHRoaXMuU01BTExfQ09MTElTSU9OX1JFQ1QsIHRoaXMuV0FMTF9HQVBfREVURUNUSU9OX1JBWV9MRU5HVEggKTtcclxuXHRcdFx0XHRcdGlmICggIWlzUmF5SGl0RnJvbVNtYWxsIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YXZhdGFyLmNvbGxpc2lvblJlY3QgPSB0aGlzLlNNQUxMX0NPTExJU0lPTl9SRUNUO1xyXG5cdFx0XHRcdFx0XHRhdmF0YXIuc2V0QW5pbWF0aW9uKCBcIm1lbHRfZG93blwiLCBmYWxzZSApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlID0gdGhpcy5TVEFURV9NRUxUSU5HX0RPV047XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQvL31cclxuXHRcdFx0XHJcblx0XHRcdC8vIEVuZW15IGRldGVjdGlvbi5cclxuXHRcdFx0aWYgKCB0aGlzLl9zdGF0ZSA9PSB0aGlzLlNUQVRFX0lETEUgJiYgYXZhdGFyLnZlbG9jaXR5LnkgPCBhdmF0YXIubGFuZFNwZWVkICYmICFhdmF0YXIuaXNMYW5kaW5nICYmIGF2YXRhci5jdXJyZW50U3BpbmVBbmltYXRpb24ubmFtZSAhPSBcImxhbmRfdG9fcnVuXCIgKVxyXG5cdFx0XHRcdHRoaXMuZmluZFRhcmdldCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y2FzZSB0aGlzLlNUQVRFX01FTFRJTkdfRE9XTjpcclxuXHRcdHtcclxuXHRcdFx0aWYgKCB0aGlzLl9yb29tLmF2YXRhci5zcGluZS5zdGF0ZS5nZXRDdXJyZW50KCAwICkgPT0gbnVsbCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9yb29tLmF2YXRhci5zZXRBbmltYXRpb24oIFwibWVsdF9tb3ZlXCIsIHRydWUgKTtcclxuXHRcdFx0XHJcblx0XHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLlNUQVRFX0RFVEVDVElOR19XQUxMX0dBUF9FTkQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVx0XHJcblx0XHRcdFx0XHJcblx0XHRjYXNlIHRoaXMuU1RBVEVfREVURUNUSU5HX1dBTExfR0FQX0VORDpcclxuXHRcdHtcclxuXHRcdFx0dmFyIGF2YXRhciA9IHRoaXMuX3Jvb20uYXZhdGFyO1xyXG5cdFx0XHR2YXIgcmF5TGVuZ3RoID0gTWF0aC5zaWduKCBhdmF0YXIuc3BpbmVDb250YWluZXIuc2NhbGUueCApID4gMCA/IHRoaXMuV0FMTF9HQVBfREVURUNUSU9OX1JBWV9MRU5HVEggOiAtdGhpcy5XQUxMX0dBUF9ERVRFQ1RJT05fUkFZX0xFTkdUSDtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBpc1JheUhpdEZyb21CaWcgPSB0aGlzLnJheWNhc3RIb3Jpem9udGFsbHkoIHRoaXMuQklHX0NPTExJU0lPTl9SRUNULCByYXlMZW5ndGggKSB8fCB0aGlzLnJheWNhc3RVcHdhcmQoIHRoaXMuQklHX0NPTExJU0lPTl9SRUNULCB0aGlzLldBTExfR0FQX0RFVEVDVElPTl9SQVlfTEVOR1RIICk7XHJcblx0XHRcdGlmICggIWlzUmF5SGl0RnJvbUJpZyAmJiAhdGhpcy5jaGVja1dhbGxDb2xsaXNpb24oIHRoaXMuQklHX0NPTExJU0lPTl9SRUNUICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXZhdGFyLmNvbGxpc2lvblJlY3QgPSB0aGlzLkJJR19DT0xMSVNJT05fUkVDVDtcclxuXHRcdFx0XHRhdmF0YXIuc2V0QW5pbWF0aW9uKCBcIm1lbHRfdXBcIiwgZmFsc2UgKTtcclxuXHRcdFx0XHJcblx0XHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLlNUQVRFX01FTFRJTkdfVVA7XHJcblx0XHRcdH1cdFxyXG5cclxuXHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjYXNlIHRoaXMuU1RBVEVfTUVMVElOR19VUDpcclxuXHRcdHtcclxuXHRcdFx0aWYgKCB0aGlzLl9yb29tLmF2YXRhci5zcGluZS5zdGF0ZS5nZXRDdXJyZW50KCAwICkgPT0gbnVsbCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9yb29tLmF2YXRhci5zZXRBbmltYXRpb24oIFwicnVuX2xldmVsXCIsIHRydWUgKTtcclxuXHRcdFx0XHJcblx0XHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLlNUQVRFX0lETEU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuVXBncmFkZVRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS5maW5kVGFyZ2V0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dmFyIGF2YXRhciA9IHRoaXMuX3Jvb20uYXZhdGFyO1xyXG5cdHZhciBhdmF0YXJEaXJlY3Rpb24gPSBNYXRoLnNpZ24oIGF2YXRhci5zcGluZUNvbnRhaW5lci5zY2FsZS54ICk7XHJcblx0XHJcblx0Ly8gTG9vayBmb3IgZW5lbWllcyBhdCByYW5nZSBhbmQgc2hvb3QuXHJcblx0Ly8gRmluZCB0aGUgcmF5IG9yaWdpbi5cclxuXHR2YXIgYXZhdGFyUDEgPSBudWxsO1x0XHJcblx0aWYgKCBhdmF0YXJEaXJlY3Rpb24gPiAwIClcclxuXHR7XHJcblx0XHRhdmF0YXJQMSA9IG5ldyBQSVhJLlBvaW50IChcclxuXHRcdFx0YXZhdGFyLnggKyBhdmF0YXIuY29sbGlzaW9uUmVjdC54ICsgYXZhdGFyLmNvbGxpc2lvblJlY3Qud2lkdGggLSBhdmF0YXIuc2tpbldpZHRoLFxyXG5cdFx0XHRhdmF0YXIueSArIGF2YXRhci5jb2xsaXNpb25SZWN0LnkgKyBhdmF0YXIuc2tpbldpZHRoICsgYXZhdGFyLmNvbGxpc2lvblJlY3QuaGVpZ2h0ICogLjIgKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGF2YXRhclAxID0gbmV3IFBJWEkuUG9pbnQgKFxyXG5cdFx0XHRhdmF0YXIueCArIGF2YXRhci5jb2xsaXNpb25SZWN0LnggKyBhdmF0YXIuY29sbGlzaW9uUmVjdC53aWR0aCxcclxuXHRcdFx0YXZhdGFyLnkgKyBhdmF0YXIuY29sbGlzaW9uUmVjdC55ICsgYXZhdGFyLnNraW5XaWR0aCArIGF2YXRhci5jb2xsaXNpb25SZWN0LmhlaWdodCAqIC4yICk7XHJcblx0fVx0XHJcblx0XHJcblxyXG5cdC8vIFJheWNhc3QgZW5lbWllcy5cclxuXHR2YXIgaXNFbmVteURldGVjdGVkID0gZmFsc2U7XHJcblx0dmFyIGF2YXRhclAyID0gbmV3IFBJWEkuUG9pbnQoIGF2YXRhclAxLnggKyBhdmF0YXJEaXJlY3Rpb24gKiB0aGlzLlNIT09UX1JBTkdFLCBhdmF0YXJQMS55ICk7XHJcblx0Ly8gREVCVUc6XHJcblx0Ly90aGlzLl9yb29tLl9kZWJ1Z0RyYXcubW92ZVRvKCBhdmF0YXJQMS54LCBhdmF0YXJQMS55ICk7XHJcblx0Ly90aGlzLl9yb29tLl9kZWJ1Z0RyYXcubGluZVRvKCBhdmF0YXJQMi54LCBhdmF0YXJQMi55ICk7XHJcblx0XHJcblx0dmFyIGRldGVjdGVkRW5lbXlYID0gbnVsbDtcclxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl9yb29tLm9iamVjdHMuZGFuZ2Vycy5sZW5ndGg7ICsraSApXHJcblx0e1xyXG5cdFx0dmFyIGRhbmdlckF1eCA9IHRoaXMuX3Jvb20ub2JqZWN0cy5kYW5nZXJzWyBpIF07XHJcblx0XHRpZiAoIGRhbmdlckF1eC50YXJnZXRDb2xsaXNpb25SZWN0ICE9IG51bGwgKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBCbG9jayBzZWdtZW50IFAxIC0gUDIuXHJcblx0XHRcdHZhciBkYW5nZXJQMSA9IG5ldyBQSVhJLlBvaW50KCBcclxuXHRcdFx0XHRkYW5nZXJBdXgueCArIGRhbmdlckF1eC50YXJnZXRDb2xsaXNpb25SZWN0LnggKyAoIGF2YXRhckRpcmVjdGlvbiA8IDAgPyBkYW5nZXJBdXgudGFyZ2V0Q29sbGlzaW9uUmVjdC53aWR0aCA6IDAgKSwgXHJcblx0XHRcdFx0ZGFuZ2VyQXV4LnkgKyBkYW5nZXJBdXgudGFyZ2V0Q29sbGlzaW9uUmVjdC55ICk7XHJcblx0XHRcdHZhciBkYW5nZXJQMiA9IG5ldyBQSVhJLlBvaW50KCBkYW5nZXJQMS54LCBkYW5nZXJQMS55ICsgZGFuZ2VyQXV4LnRhcmdldENvbGxpc2lvblJlY3QuaGVpZ2h0ICk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBERUJVRzpcclxuXHRcdFx0Ly90aGlzLl9yb29tLl9kZWJ1Z0RyYXcubW92ZVRvKCBkYW5nZXJQMS54LCBkYW5nZXJQMS55ICk7XHJcblx0XHRcdC8vdGhpcy5fcm9vbS5fZGVidWdEcmF3LmxpbmVUbyggZGFuZ2VyUDIueCwgZGFuZ2VyUDIueSApO1xyXG5cclxuXHRcdFx0Ly8gTGluZS1saW5lIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuXHRcdFx0aWYgKCBhdmF0YXIubGluZUxpbmVDb2xsaXNpb24oIGF2YXRhclAxLCBhdmF0YXJQMiwgZGFuZ2VyUDEsIGRhbmdlclAyICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGV0ZWN0ZWRFbmVteVggPSBkYW5nZXJQMS54O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRpZiAoIGRldGVjdGVkRW5lbXlYICE9IG51bGwgKVxyXG5cdHtcclxuXHRcdC8vIFJheWNhc3QgZm9yIGJsb2NrcyB0aGF0IG9ic3RydWN0IEJlbidzIHNpZ2h0bGluZS5cclxuXHRcdHZhciBpc1NpZ2h0bGluZU9ic3RydWN0ZWQgPSBmYWxzZTtcclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX3Jvb20uYmxvY2tzLmxlbmd0aDsgKytpIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gQmxvY2sgc2VnbWVudCBQMSAtIFAyLlxyXG5cdFx0XHR2YXIgYmxvY2tQMSA9IG5ldyBQSVhJLlBvaW50KCBcclxuXHRcdFx0XHR0aGlzLl9yb29tLmJsb2Nrc1sgaSBdLmNvbmZpZy54ICsgKCBhdmF0YXJEaXJlY3Rpb24gPCAwID8gdGhpcy5fcm9vbS5ibG9ja3NbIGkgXS5jb25maWcud2lkdGggOiAwICksIFxyXG5cdFx0XHRcdHRoaXMuX3Jvb20uYmxvY2tzWyBpIF0uY29uZmlnLnkgKTtcclxuXHRcdFx0dmFyIGJsb2NrUDIgPSBuZXcgUElYSS5Qb2ludCggYmxvY2tQMS54LCBibG9ja1AxLnkgKyB0aGlzLl9yb29tLmJsb2Nrc1sgaSBdLmNvbmZpZy5oZWlnaHQgKTtcclxuXHJcblx0XHRcdC8vIExpbmUtbGluZSBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcblx0XHRcdGlmICggYXZhdGFyLmxpbmVMaW5lQ29sbGlzaW9uKCBhdmF0YXJQMSwgYXZhdGFyUDIsIGJsb2NrUDEsIGJsb2NrUDIgKVxyXG5cdFx0XHRcdCYmICggYXZhdGFyRGlyZWN0aW9uIDwgMCAmJiBibG9ja1AxLnggPiBkZXRlY3RlZEVuZW15WCB8fCBhdmF0YXJEaXJlY3Rpb24gPiAwICYmIGJsb2NrUDEueCA8IGRldGVjdGVkRW5lbXlYICkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aXNTaWdodGxpbmVPYnN0cnVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdGlmICggIWlzU2lnaHRsaW5lT2JzdHJ1Y3RlZCAmJiB0aGlzLl9yZWxvYWRpbmdUaW1lciA+PSB0aGlzLlJFTE9BRElOR19USU1FICkgXHJcblx0XHR7XHJcblx0XHRcdGF2YXRhci5zcGluZS5zdGF0ZS5zZXRBbmltYXRpb25CeU5hbWUoIDEsIFwic2hvb3RcIiwgZmFsc2UgKTtcclxuXHRcdFx0YXZhdGFyLnNwaW5lLnN0YXRlLm9uRXZlbnQgPSBcclxuXHRcdFx0XHRmdW5jdGlvbiggdHJhY2ssIGV2ZW50ICkgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCBldmVudC5kYXRhLm5hbWUgPT0gXCJzaG9vdFwiIClcclxuXHRcdFx0XHRcdFx0Z191cGdyYWRlVHJhbnNmb3JtYXRpb24uc2hvb3QoKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHJcblx0XHRcdHRoaXMuX3N0YXRlID0gdGhpcy5TVEFURV9TSE9PVElORztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblVwZ3JhZGVUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUuY2hlY2tXYWxsQ29sbGlzaW9uID0gZnVuY3Rpb24oIGNvbGxpc2lvblJlY3QgKVxyXG57XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBhdmF0YXIgPSB0aGlzLl9yb29tLmF2YXRhcjtcclxuXHRcclxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl9yb29tLndhbGxCbG9ja3MubGVuZ3RoOyArK2kgKVxyXG5cdHtcclxuXHRcdHZhciB3YWxsQmxvY2tBdXggPSB0aGlzLl9yb29tLndhbGxCbG9ja3NbIGkgXTtcclxuXHRcdFxyXG5cdFx0cmVzdWx0ID0gYXZhdGFyLnJlY3RSZWN0Q29sbGlzaW9uKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0eCAgICAgIDogYXZhdGFyLnggKyBjb2xsaXNpb25SZWN0LngsXHJcblx0XHRcdFx0eSAgICAgIDogYXZhdGFyLnkgKyBjb2xsaXNpb25SZWN0LnksXHJcblx0XHRcdFx0d2lkdGggIDogY29sbGlzaW9uUmVjdC53aWR0aCxcclxuXHRcdFx0XHRoZWlnaHQgOiBjb2xsaXNpb25SZWN0LmhlaWdodFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0eCAgICAgIDogd2FsbEJsb2NrQXV4LnggKyB3YWxsQmxvY2tBdXguY29sbGlzaW9uUmVjdC54LFxyXG5cdFx0XHRcdHkgICAgICA6IHdhbGxCbG9ja0F1eC55ICsgd2FsbEJsb2NrQXV4LmNvbGxpc2lvblJlY3QueSxcclxuXHRcdFx0XHR3aWR0aCAgOiB3YWxsQmxvY2tBdXguY29sbGlzaW9uUmVjdC53aWR0aCxcclxuXHRcdFx0XHRoZWlnaHQgOiB3YWxsQmxvY2tBdXguY29sbGlzaW9uUmVjdC5oZWlnaHRcclxuXHRcdFx0fSApO1xyXG5cdFx0aWYgKCByZXN1bHQgKVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuVXBncmFkZVRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS5yYXljYXN0SG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24oIGZyb21Db2xsaXNpb25SZWN0LCByYXlMZW5ndGggKVxyXG57XHJcblx0dmFyIGlzUmF5SGl0ID0gZmFsc2U7XHJcblxyXG5cdGlmICggcmF5TGVuZ3RoIT0gMCApXHJcblx0e1xyXG5cdFx0dmFyIGF2YXRhciA9IHRoaXMuX3Jvb20uYXZhdGFyO1xyXG5cdFx0dmFyIHJheSA9IG5ldyBQSVhJLlBvaW50KCByYXlMZW5ndGggKyBhdmF0YXIuc2tpbldpZHRoICogTWF0aC5zaWduKCByYXlMZW5ndGggKSwgMCApO1xyXG5cdFx0dmFyIHJheU9yaWdpbnMgPSByYXlMZW5ndGggPiAwID8gYXZhdGFyLmdldFJpZ2h0UmF5T3JpZ2luc1dpdGhSZWN0KCBmcm9tQ29sbGlzaW9uUmVjdCApIDogYXZhdGFyLmdldExlZnRSYXlPcmlnaW5zV2l0aFJlY3QoIGZyb21Db2xsaXNpb25SZWN0ICk7XHRcdFxyXG5cdFx0XHJcblx0XHRmb3IgKCB2YXIgciA9IDA7IHIgPCByYXlPcmlnaW5zLmxlbmd0aDsgcisrIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIGF2YXRhclAxID0gcmF5T3JpZ2luc1sgciBdO1xyXG5cdFx0XHR2YXIgYXZhdGFyUDIgPSBuZXcgUElYSS5Qb2ludCggYXZhdGFyUDEueCArIHJheS54LCBhdmF0YXJQMS55ICsgcmF5LnkgKTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBiID0gMDsgYiA8IHRoaXMuX3Jvb20ud2FsbEJsb2Nrcy5sZW5ndGg7IGIrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIHRoaXMuX3Jvb20ud2FsbEJsb2Nrc1sgYiBdLmlzR2FyYmFnZSBcclxuXHRcdFx0XHRcdHx8ICggcmF5TGVuZ3RoID4gMCAmJiAhdGhpcy5fcm9vbS53YWxsQmxvY2tzWyBiIF0uY29uZmlnLmNvbGxpc2lvbnMubGVmdCApXHJcblx0XHRcdFx0XHR8fCAoIHJheUxlbmd0aCA8IDAgJiYgIXRoaXMuX3Jvb20ud2FsbEJsb2Nrc1sgYiBdLmNvbmZpZy5jb2xsaXNpb25zLnJpZ2h0ICkgKSBcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHQvLyBTZWdtZW50IHZlcnRpY2VzXHJcblx0XHRcdFx0dmFyIGJsb2NrUDEgPSBuZXcgUElYSS5Qb2ludCggdGhpcy5fcm9vbS53YWxsQmxvY2tzWyBiIF0uY29uZmlnLnggKyAoIHJheUxlbmd0aCA8IDAgPyB0aGlzLl9yb29tLndhbGxCbG9ja3NbIGIgXS5jb25maWcud2lkdGggOiAwICksIHRoaXMuX3Jvb20ud2FsbEJsb2Nrc1sgYiBdLmNvbmZpZy55ICk7XHJcblx0XHRcdFx0dmFyIGJsb2NrUDIgPSBuZXcgUElYSS5Qb2ludCggYmxvY2tQMS54LCBibG9ja1AxLnkgKyB0aGlzLl9yb29tLndhbGxCbG9ja3NbIGIgXS5jb25maWcuaGVpZ2h0ICk7XHJcblxyXG5cdFx0XHRcdC8vIExpbmUtbGluZSBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcblx0XHRcdFx0aXNSYXlIaXQgPSBhdmF0YXIubGluZUxpbmVDb2xsaXNpb24oIGF2YXRhclAxLCBhdmF0YXJQMiwgYmxvY2tQMSwgYmxvY2tQMiApO1xyXG5cdFx0XHRcdGlmICggaXNSYXlIaXQgKVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmICggaXNSYXlIaXQgKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBpc1JheUhpdDtcclxufVxyXG5cclxuVXBncmFkZVRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZS5yYXljYXN0VXB3YXJkID0gZnVuY3Rpb24oIGZyb21Db2xsaXNpb25SZWN0LCByYXlMZW5ndGggKVxyXG57XHJcblx0dmFyIGlzUmF5SGl0ID0gZmFsc2U7XHJcblxyXG5cdGlmICggcmF5TGVuZ3RoICE9IDAgKVxyXG5cdHtcclxuXHRcdHZhciBhdmF0YXIgPSB0aGlzLl9yb29tLmF2YXRhcjtcclxuXHRcdHZhciBhdmF0YXJQMSA9IG5ldyBQSVhJLlBvaW50KCBhdmF0YXIueCArIGZyb21Db2xsaXNpb25SZWN0LnggKyAoIGF2YXRhci5kaXJlY3Rpb24gPiAwID8gZnJvbUNvbGxpc2lvblJlY3Qud2lkdGggOiAwICksIGF2YXRhci55ICsgZnJvbUNvbGxpc2lvblJlY3QueSApO1x0XHJcblx0XHR2YXIgYXZhdGFyUDIgPSBuZXcgUElYSS5Qb2ludCggYXZhdGFyUDEueCwgYXZhdGFyUDEueSAtIHJheUxlbmd0aCApO1xyXG5cclxuXHRcdGZvciAoIHZhciBiID0gMDsgYiA8IHRoaXMuX3Jvb20ud2FsbEJsb2Nrcy5sZW5ndGg7IGIrKyApXHJcblx0XHR7XHJcblx0XHRcdGlmICggdGhpcy5fcm9vbS53YWxsQmxvY2tzWyBiIF0uaXNHYXJiYWdlIFxyXG5cdFx0XHRcdHx8ICF0aGlzLl9yb29tLndhbGxCbG9ja3NbIGIgXS5jb25maWcuY29sbGlzaW9ucy5ib3R0b20gKSBcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIFNlZ21lbnQgdmVydGljZXNcclxuXHRcdFx0dmFyIGJsb2NrUDEgPSBuZXcgUElYSS5Qb2ludCggdGhpcy5fcm9vbS53YWxsQmxvY2tzWyBiIF0uY29uZmlnLngsIHRoaXMuX3Jvb20ud2FsbEJsb2Nrc1sgYiBdLmNvbmZpZy55ICsgdGhpcy5fcm9vbS53YWxsQmxvY2tzWyBiIF0uY29uZmlnLmhlaWdodCApO1xyXG5cdFx0XHR2YXIgYmxvY2tQMiA9IG5ldyBQSVhJLlBvaW50KCBibG9ja1AxLnggKyB0aGlzLl9yb29tLndhbGxCbG9ja3NbIGIgXS5jb25maWcud2lkdGgsIGJsb2NrUDEueSApO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gREVCVUc6XHJcblx0XHRcdC8vdGhpcy5fcm9vbS5fZGVidWdEcmF3Lm1vdmVUbyggYXZhdGFyUDEueCwgYXZhdGFyUDEueSApO1xyXG5cdFx0XHQvL3RoaXMuX3Jvb20uX2RlYnVnRHJhdy5saW5lVG8oIGF2YXRhclAyLngsIGF2YXRhclAyLnkgKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIERFQlVHOlxyXG5cdFx0XHQvL3RoaXMuX3Jvb20uX2RlYnVnRHJhdy5tb3ZlVG8oIGJsb2NrUDEueCwgYmxvY2tQMS55ICk7XHJcblx0XHRcdC8vdGhpcy5fcm9vbS5fZGVidWdEcmF3LmxpbmVUbyggYmxvY2tQMi54LCBibG9ja1AyLnkgKTtcclxuXHJcblx0XHRcdC8vIExpbmUtbGluZSBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcblx0XHRcdGlzUmF5SGl0ID0gYXZhdGFyLmxpbmVMaW5lQ29sbGlzaW9uKCBhdmF0YXJQMSwgYXZhdGFyUDIsIGJsb2NrUDEsIGJsb2NrUDIgKTtcclxuXHRcdFx0aWYgKCBpc1JheUhpdCApXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coIFwicmF5Y2FzdFVwd2FyZC5pc1JheUhpdCA9IFwiICsgaXNSYXlIaXQgKTtcclxuXHRcclxuXHRyZXR1cm4gaXNSYXlIaXQ7XHJcbn1cclxuXHJcblVwZ3JhZGVUcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUuc2hvb3QgPSBmdW5jdGlvbigpXHJcbntcclxuXHQvLyBGaW5kIHNob3Qgb3JpZ2luLlxyXG5cdHZhciBhdmF0YXIgPSB0aGlzLl9yb29tLmF2YXRhcjtcclxuXHR2YXIgYXZhdGFyRGlyZWN0aW9uID0gTWF0aC5zaWduKCBhdmF0YXIuc3BpbmVDb250YWluZXIuc2NhbGUueCApO1x0XHRcdFx0XHRcdFx0XHJcblx0dmFyIHNob3RPcmlnaW4gPSBudWxsO1x0XHJcblx0aWYgKCBhdmF0YXJEaXJlY3Rpb24gPCAwIClcclxuXHR7XHJcblx0XHRzaG90T3JpZ2luID0gbmV3IFBJWEkuUG9pbnQoXHJcblx0XHRcdGF2YXRhci54ICsgYXZhdGFyLmNvbGxpc2lvblJlY3QueCAtIGF2YXRhci5jb2xsaXNpb25SZWN0LndpZHRoICogMi4wLFxyXG5cdFx0XHRhdmF0YXIueSArIGF2YXRhci5jb2xsaXNpb25SZWN0LnkgKyBhdmF0YXIuc2tpbldpZHRoICsgYXZhdGFyLmNvbGxpc2lvblJlY3QuaGVpZ2h0ICogLjIgKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHNob3RPcmlnaW4gPSBuZXcgUElYSS5Qb2ludChcclxuXHRcdFx0YXZhdGFyLnggKyBhdmF0YXIuY29sbGlzaW9uUmVjdC54ICsgYXZhdGFyLmNvbGxpc2lvblJlY3Qud2lkdGggKiAzLjAsXHJcblx0XHRcdGF2YXRhci55ICsgYXZhdGFyLmNvbGxpc2lvblJlY3QueSArIGF2YXRhci5za2luV2lkdGggKyBhdmF0YXIuY29sbGlzaW9uUmVjdC5oZWlnaHQgKiAuMiApO1xyXG5cdH1cdFxyXG5cclxuXHQvLyBTaG9vdCBhdCBlbmVteS5cdFx0XHRcdFx0XHRcdFxyXG5cdHZhciB1cGdyYWRlU2hvdCA9IG5ldyBVcGdyYWRlU2hvdCggYXZhdGFyRGlyZWN0aW9uLCB0aGlzLl9yb29tICk7XHJcblx0dXBncmFkZVNob3QuaW5pdCggc2hvdE9yaWdpbi54LCBzaG90T3JpZ2luLnkgKTtcclxuXHRcclxuXHR0aGlzLl9yb29tLm9iamVjdHMuc2hvdHMucHVzaCggdXBncmFkZVNob3QgKTtcclxuXHR0aGlzLl9yb29tLmFkZENoaWxkKCB1cGdyYWRlU2hvdCApO1xyXG5cdFxyXG5cdHRoaXMuX3JlbG9hZGluZ1RpbWVyID0gMDtcclxuXHR0aGlzLl9zdGF0ZSA9IHRoaXMuU1RBVEVfSURMRTtcclxufSIsInZhciBDb21tb24gPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBHbG9iYWwoKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdsb2JhbDtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RBTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5HbG9iYWwuTEVWRUxfSURfQVJSQVkgPSBbIFxuXHRcdFx0WyBcImxldmVsXzFfMVwiLCBcImxldmVsXzFfMlwiLCBcImxldmVsXzFfM1wiLCBcImxldmVsXzFfNFwiLCBcImxldmVsXzFfNVwiIF0sXG5cdFx0XHRbIFwibGV2ZWxfMl8xXCIsIFwibGV2ZWxfMl8yXCIsIFwibGV2ZWxfMl8zXCIsIFwibGV2ZWxfMl80XCIsIFwibGV2ZWxfMl81XCIgXSxcblx0XHRcdFsgXCJsZXZlbF8zXzFcIiwgXCJsZXZlbF8zXzJcIiwgXCJsZXZlbF8zXzNcIiwgXCJsZXZlbF8zXzRcIiwgXCJsZXZlbF8zXzVcIiBdIF07XHRcblx0XHRcdFxuR2xvYmFsLkFMSUVOX1RVVE9SSUFMX0xFVkVMX0lEX0FSUkFZID0gWyBcblx0XHRcdHsgY2hhcHRlcklkOjEsIGxldmVsSWQ6MiwgYWxpZW5JZDozIH0sXG5cdFx0XHR7IGNoYXB0ZXJJZDoxLCBsZXZlbElkOjMsIGFsaWVuSWQ6MiB9LFxuXHRcdFx0eyBjaGFwdGVySWQ6MiwgbGV2ZWxJZDoxLCBhbGllbklkOjQgfSxcblx0XHRcdHsgY2hhcHRlcklkOjIsIGxldmVsSWQ6NCwgYWxpZW5JZDo1IH0gXTtcdFxuXHRcdFx0XG5HbG9iYWwuU0NPUkVfQ09JTl9NVUxUSVBMSUVSID0gMjAwO1xuR2xvYmFsLlNDT1JFX1BPV0VSVVBfTVVMVElQTElFUiA9IDI1MDtcbkdsb2JhbC5TQ09SRV9FTkVNWV9NVUxUSVBMSUVSID0gNTAwO1xuR2xvYmFsLlNDT1JFX0JMT0NLX01VTFRJUExJRVIgPSAxMDA7XG5HbG9iYWwuR0FNRV9TVEVQX0JBU0VfU1BFRUQgPSAzO1xuR2xvYmFsLlNDT1JFX1NUQVJfRkFDVE9SID0gMC42NTtcblxuR2xvYmFsLkdBTUVfQkFTRV9USU1FID0gMjAwMDtcblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGVU5DVElPTlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgU291bmRTRlggICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU291bmRTRlhcIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gTmV4dEJ1dHRvbihidXR0b25TdHJpbmcsIGRlbGF5KVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBAdHlwZSB7cDMuQXNzZXRNYW5hZ2VyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHR5cGUge3NpZ25hbHMuU2lnbmFsfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNpZ25hbHMgPSB7fTtcclxuXHR0aGlzLnNpZ25hbHMuY2xpY2tlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG5cdHRoaXMuc2lnbmFscy5jbGlja0ZpbmlzaCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fYmFubmVyID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtwMy5CaXRtYXBUZXh0fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9idXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5fYnV0dG9uU3RyaW5nID0gYnV0dG9uU3RyaW5nIHx8IFwibmV4dFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZGVsYXkgPSBkZWxheSB8fCAwO1xyXG5cclxuXHRQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gTmV4dEJ1dHRvbjtcclxuTmV4dEJ1dHRvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XHJcbk5leHRCdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTmV4dEJ1dHRvbjtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8qKlxyXG4gKi9cclxuTmV4dEJ1dHRvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0dGhpcy5fYmFubmVyID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwidWlcIikpO1xyXG5cdFx0dGhpcy5fYmFubmVyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcclxuXHRcdC8vIHRoaXMuX2Jhbm5lci5zY2FsZS54ID0gMDtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fYmFubmVyKTtcclxuXHJcblx0XHR0aGlzLl9idXR0b24gPSBuZXcgcDMuQnV0dG9uKFxyXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9iaWdfZGVmXCIpLFxyXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9iaWdfb3ZlclwiKSxcclxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfYmlnX3ByZXNzXCIpLFxyXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSh0aGlzLl9idXR0b25TdHJpbmcpKTtcclxuXHRcdFxyXG5cdFx0Ly8gdGhpcy5fYnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uLnNpZ25hbHMuZG93bi5hZGRPbmNlKHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XHJcblx0XHR0aGlzLl9idXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLm9uQnV0dG9uT3ZlciwgdGhpcyk7XHJcblx0XHR0aGlzLl9idXR0b24uYW5pbWF0ZSA9IHRydWU7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2J1dHRvbik7XHJcblxyXG5cdFx0Ly8gdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblx0XHQvLyB0bC50byh0aGlzLl9iYW5uZXIuc2NhbGUsIDEsIHt4OjEsIGVhc2U6QmFjay5lYXNlT3V0fSk7XHJcblx0XHQvLyB0bC50byh0aGlzLl9idXR0b24uc2NhbGUsIDEuMywge3g6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCAwKTtcclxuXHRcdC8vIHRsLnRvKHRoaXMuX2J1dHRvbi5zY2FsZSwgMS4zLCB7eToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dH0sIDAuMSk7XHJcblx0XHQvLyBDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcclxuXHJcblx0fSwgdGhpcy5fZGVsYXksIHRoaXMpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKi9cclxuTmV4dEJ1dHRvbi5wcm90b3R5cGUub25CdXR0b25DbGljayA9IGZ1bmN0aW9uKClcclxue1xyXG4vKiAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX2J1dHRvbi5zY2FsZSk7XHJcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2J1dHRvbi5zY2FsZSwgLjIsIHt4OjAuNiwgeTowLjYsIGVhc2U6U2luZS5lYXNlSW5PdXQsIG9uQ29tcGxldGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2J1dHRvbi5zY2FsZSwgMSwge3g6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dCwgb25Db21wbGV0ZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIFx0dGhpcy5zaWduYWxzLmNsaWNrRmluaXNoLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgfSwgb25Db21wbGV0ZVNjb3BlOnRoaXN9KSk7XHJcbiAgICB9LCBvbkNvbXBsZXRlU2NvcGU6dGhpc30pKTsgKi9cclxuXHJcbiAgICAvLyBTb3VuZFNGWC5wbGF5KFwic2Z4X2J1dHRvbl9wbGF5XCIpO1xyXG5cdHRoaXMuc2lnbmFscy5jbGlja2VkLmRpc3BhdGNoKCk7XHJcbn1cclxuXHJcbk5leHRCdXR0b24ucHJvdG90eXBlLm9uQnV0dG9uT3ZlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gU291bmRTRlgucGxheShcInNmeF9idG5fcm9sbG92ZXJfMDBcIik7XHJcbn1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4iLCIvKipcbiAqICBTb3VuZFNGWFxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAxMS8wNi8yMDE1LlxuICpcbiAqL1xuXG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTb3VuZFNGWCgpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gU291bmRTRlg7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAcGFyYW0geyFwMy5CdXR0b259IGJ1dHRvblxuICogQHBhcmFtIHtCb29sZWFuPX0gZW5hYmxlQ2xpY2tTb3VuZFxuICogQHBhcmFtIHtCb29sZWFuPX0gZW5hYmxlT3ZlclNvdW5kXG4gKi9cblNvdW5kU0ZYLmJ1dHRvbiA9IGZ1bmN0aW9uKGJ1dHRvbiwgZW5hYmxlQ2xpY2tTb3VuZCwgZW5hYmxlT3ZlclNvdW5kKSB7XG4gICAgZW5hYmxlQ2xpY2tTb3VuZCA9IGVuYWJsZUNsaWNrU291bmQgPT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGVuYWJsZUNsaWNrU291bmQ7XG4gICAgZW5hYmxlT3ZlclNvdW5kID0gZW5hYmxlT3ZlclNvdW5kID09IHVuZGVmaW5lZCA/IHRydWUgOiBlbmFibGVPdmVyU291bmQ7XG5cbiAgICBpZihlbmFibGVDbGlja1NvdW5kKVxuICAgIHsgICAgXG4gICAgICAgIGJ1dHRvbi5zaWduYWxzLmNsaWNrLmFkZChmdW5jdGlvbihidXR0b24pIHtcbiAgICAgICAgICAgIHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoXCJzZnhfYnRuX3ByZXNzX3JldmVyYlwiKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgaWYoZW5hYmxlT3ZlclNvdW5kKVxuICAgIHsgICAgXG4gICAgICAgIGJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgICAgICAgICAgcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChcInNmeF9idG5fcm9sbG92ZXJfcmV2ZXJiXCIpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IVN0cmluZ30gc291bmRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gcGFyYW1zXG4gKiBAcGFyYW0ge051bWJlcj19IGRlbGF5XG4gKi9cblNvdW5kU0ZYLnBsYXkgPSBmdW5jdGlvbihzb3VuZCwgcGFyYW1zLCBkZWxheSkge1xuXG4gICAgaWYoZGVsYXkgPT0gbnVsbClcbiAgICB7ICAgIFxuICAgICAgICByZXR1cm4gcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChzb3VuZCwgcGFyYW1zKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHsgICAgXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoc291bmQsIHBhcmFtcyk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59O1xuXG5Tb3VuZFNGWC5wbGF5TXVzaWMgPSBmdW5jdGlvbihzb3VuZCwgcGFyYW1zLCBkZWxheSkge1xuXG4gICAgaWYoZGVsYXkgPT0gbnVsbClcbiAgICB7ICAgIFxuICAgICAgICBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheU11c2ljKHNvdW5kLCBwYXJhbXMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgeyAgICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlNdXNpYyhzb3VuZCwgcGFyYW1zKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHshU3RyaW5nfSBzb3VuZFxuICovXG5Tb3VuZFNGWC5zdG9wID0gZnVuY3Rpb24oc291bmQpIHtcbiAgICB2YXIgY3VycmVudFNvdW5kcyA9IHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5zb3VuZHNTRlg7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGN1cnJlbnRTb3VuZHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZihjdXJyZW50U291bmRzW2ldLm5hbWUgPT0gc291bmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnN0b3BTb3VuZChzb3VuZCk7XG4gICAgICAgIH0gICBcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5IDxTdHJpbmc+fSBzb3VuZHNcbiAqL1xuU291bmRTRlgucGxheVJhbmRvbUZyb20gPSBmdW5jdGlvbihzb3VuZHMpIHtcblx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChzb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnNvdW5kcy5sZW5ndGgpXSk7XG59O1xuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUy9TRVRURVJTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCIvKipcbiAqICBNdXRlQnV0dG9uXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDE2LzA5LzIwMTUuXG4gKlxuICovXG5cbi8qKlxuICogQHBhcmFtIHshUElYSS5UZXh0dXJlfSBvbk5vcm1hbFRleHR1cmVcbiAqIEBwYXJhbSB7IVBJWEkuVGV4dHVyZX0gb2ZmTm9ybWFsVGV4dHVyZVxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBvbk92ZXJUZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9mZk92ZXJUZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9uRG93blRleHR1cmVcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb2ZmRG93blRleHR1cmVcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb25EaXNhYmxlZFRleHR1cmVcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb2ZmRGlzYWJsZWRUZXh0dXJlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTXV0ZUJ1dHRvbihcbiAgICBvbk5vcm1hbFRleHR1cmUsXG4gICAgb2ZmTm9ybWFsVGV4dHVyZSxcbiAgICBvbk92ZXJUZXh0dXJlLFxuICAgIG9mZk92ZXJUZXh0dXJlLFxuICAgIG9uRG93blRleHR1cmUsXG4gICAgb2ZmRG93blRleHR1cmVcbikge1xuICAgIHZhciBhdWRpbyA9IHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbk5vcm1hbFRleHR1cmUgPSBvbk5vcm1hbFRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb2ZmTm9ybWFsVGV4dHVyZSA9IG9mZk5vcm1hbFRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25PdmVyVGV4dHVyZSA9IG9uT3ZlclRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb2ZmT3ZlclRleHR1cmUgPSBvZmZPdmVyVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkRvd25UZXh0dXJlID0gb25Eb3duVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vZmZEb3duVGV4dHVyZSA9IG9mZkRvd25UZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25vcm1hbFRleHR1cmUgPSBhdWRpby5pc011dGUgPyBvZmZOb3JtYWxUZXh0dXJlIDogb25Ob3JtYWxUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX292ZXJUZXh0dXJlID0gYXVkaW8uaXNNdXRlID8gb2ZmT3ZlclRleHR1cmUgOiBvbk92ZXJUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Rvd25UZXh0dXJlID0gYXVkaW8uaXNNdXRlID8gb2ZmT3ZlclRleHR1cmUgOiBvbkRvd25UZXh0dXJlO1xuXG5cbiAgICBwMy5CdXR0b24uY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdGhpcy5fbm9ybWFsVGV4dHVyZSxcbiAgICAgICAgdGhpcy5fb3ZlclRleHR1cmUsXG4gICAgICAgIHRoaXMuX2Rvd25UZXh0dXJlXG4gICAgKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gTXV0ZUJ1dHRvbjtcbk11dGVCdXR0b24ucHJvdG90eXBlICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShwMy5CdXR0b24ucHJvdG90eXBlKTtcbk11dGVCdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgID0gTXV0ZUJ1dHRvbjtcblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqL1xuTXV0ZUJ1dHRvbi5wcm90b3R5cGUub25Nb3VzZUNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgYXVkaW8gPSBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2U7XG4gICAgYXVkaW8ubXV0ZSghYXVkaW8uaXNNdXRlKTtcblxuICAgIHRoaXMuX25vcm1hbFRleHR1cmUgICAgID0gYXVkaW8uaXNNdXRlID8gdGhpcy5fb2ZmTm9ybWFsVGV4dHVyZSAgICA6IHRoaXMuX29uTm9ybWFsVGV4dHVyZTtcbiAgICB0aGlzLl9vdmVyVGV4dHVyZSAgICAgICA9IGF1ZGlvLmlzTXV0ZSA/IHRoaXMuX29mZk92ZXJUZXh0dXJlICAgICAgOiB0aGlzLl9vbk92ZXJUZXh0dXJlO1xuICAgIHRoaXMuX2Rvd25UZXh0dXJlICAgICAgID0gYXVkaW8uaXNNdXRlID8gdGhpcy5fb2ZmRG93blRleHR1cmUgICAgICA6IHRoaXMuX29uRG93blRleHR1cmU7XG4gICAgdGhpcy5fZGlzYWJsZWRUZXh0dXJlICAgPSBhdWRpby5pc011dGUgPyB0aGlzLl9vZmZEaXNhYmxlZFRleHR1cmUgIDogdGhpcy5fb25EaXNhYmxlZFRleHR1cmU7XG5cbiAgICBwMy5CdXR0b24ucHJvdG90eXBlLm9uTW91c2VDbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbn07XG4iLCIvKipcbiAqICBTY2VuZVxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA0LzA5LzIwMTUuXG4gKlxuICovXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNjZW5lKCkge1xuICAgIHRoaXMuc2lnbmFscyAgICAgICAgICAgID0ge307XG4gICAgdGhpcy5zaWduYWxzLm5leHQgICAgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMucHJldmlvdXMgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5ob21lICAgICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5zaWduYWxzLnBhdXNlICAgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxuICAgIFBJWEkuQ29udGFpbmVyLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgID0gU2NlbmU7XG5TY2VuZS5wcm90b3R5cGUgICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xuU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5lO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgc2NlbmUgaXMgaW5pdGlhbGl6ZWQuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gYSBzY2VuZSBpcyBkZXN0cm95ZWQuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zaWduYWxzLm5leHQuZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5wcmV2aW91cy5kaXNwb3NlKCk7XG4gICAgdGhpcy5zaWduYWxzLmhvbWUuZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5wYXVzZS5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBkZXZpY2UgZGltZW5zaW9ucyBhcmUgY2hhbmdlZC5cbiAqL1xuU2NlbmUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG92ZXJyaWRlXG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzY2VuZSBpcyAndG9wJyBvZiB0aGUgc3RhY2suXG4gKi9cblNjZW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgc2hvd24gZm9yIHRoZSBmaXJzdCB0aW1lLlxuICovXG5TY2VuZS5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oKTtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIHNob3duIC0gcmVnYXJkbGVzcyBvZiBhY3R1YWwgdmlzaWJpbGl0eS5cbiAqL1xuU2NlbmUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGVJbigpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgaGlkZGVuIC0gcmVnYXJkbGVzcyBvZiBhY3R1YWwgdmlzaWJpbGl0eS5cbiAqL1xuU2NlbmUucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblNjZW5lLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblNjZW5lLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSB8fCB3aW5kb3c7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICAgIH1cbn07IiwiLyoqXG4gKiAgU2NlbmVNYW5hZ2VyXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDQvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIFNjZW5lICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG52YXIgVHJhbnNpdGlvbiAgPSByZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuZU1hbmFnZXIoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuRGlzcGxheU9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YWdlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkNhbnZhc1JlbmRlcmVyIHwgUElYSS5XZWJHTFJlbmRlcmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5LjxTY2VuZT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGFjayA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1RyYW5zaXRpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2NlbmVNYW5hZ2VyO1xuXG4vKipcbiAqIEBwYXJhbSB7IVBJWEkuRGlzcGxheU9iamVjdH0gc3RhZ2VcbiAqIEBwYXJhbSB7IVBJWEkuQ2FudmFzUmVuZGVyZXIgfCAhUElYSS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlclxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihzdGFnZSwgcmVuZGVyZXIpIHtcbiAgICB0aGlzLl9zdGFnZSAgICAgICAgID0gc3RhZ2U7XG4gICAgdGhpcy5fcmVuZGVyZXIgICAgICA9IHJlbmRlcmVyO1xufTtcblxuLyoqXG4gKi9cblNjZW5lTWFuYWdlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3N0YWNrLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnRvcC51cGRhdGUoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IVNjZW5lfSBzY2VuZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uPX0gdHJhbnNpdGlvblxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHNjZW5lLCB0cmFuc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpIHJldHVybjtcblxuICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0cmFuc2l0aW9uIHx8IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgaWYgKHRoaXMuX3RyYW5zaXRpb24ucmVxdWlyZXNXZWJHTCAmJiAhKHRoaXMuX3JlbmRlcmVyIGluc3RhbmNlb2YgUElYSS5XZWJHTFJlbmRlcmVyKSkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uICAgICAgICAgICAgPSB0cmFuc2l0aW9uLmZhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucHVzaCAgICAgICA9IHRyYW5zaXRpb24ucHVzaDtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5yZXBsYWNlICAgID0gdHJhbnNpdGlvbi5yZXBsYWNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLndhaXQgICAgICAgPSB0cmFuc2l0aW9uLndhaXQ7XG4gICAgfVxuICAgIHRoaXMuX3RyYW5zaXRpb24uaW5pdCgpO1xuICAgIHRoaXMuX3N0YWdlLmFkZENoaWxkKHRoaXMuX3RyYW5zaXRpb24pO1xuXG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLmluLmFkZE9uY2UoZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc3dhcCwgW3NjZW5lXSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLm91dC5hZGRPbmNlKGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdHJhbnNpdGlvbi5wYXJlbnQucmVtb3ZlQ2hpbGQodHJhbnNpdGlvbik7XG4gICAgICAgIHRyYW5zaXRpb24uZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHAzLlRpbWVzdGVwLnF1ZXVlQ2FsbChzY2VuZS5hcHBlYXIsIG51bGwsIHNjZW5lKTtcbiAgICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3RyYW5zaXRpb24uaW4oKTtcblxuICAgIGZ1bmN0aW9uIHN3YXAoc2NlbmUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9wKSB7XG4gICAgICAgICAgICB0aGlzLnRvcC5oaWRlKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24ucHVzaCkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcC5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy50b3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHJhbnNpdGlvbi5yZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zdGFjay5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IHRoaXMuX3N0YWNrW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAucGFyZW50LnJlbW92ZUNoaWxkKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2NlbmUuaW5pdCgpO1xuICAgICAgICBzY2VuZS5yZXNpemUoKTtcbiAgICAgICAgaWYgKCFzY2VuZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGRBdChzY2VuZSwgdGhpcy5fdHJhbnNpdGlvbi5wYXJlbnQuZ2V0Q2hpbGRJbmRleCh0aGlzLl90cmFuc2l0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhY2sucHVzaChzY2VuZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHAzLlRpbWVzdGVwLnF1ZXVlQ2FsbChzY2VuZS5hcHBlYXIsIG51bGwsIHNjZW5lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0YWNrKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbj19IHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyPX0gY291bnRcbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih0cmFuc2l0aW9uLCBjb3VudCkge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKSByZXR1cm47XG5cbiAgICB0aGlzLl90cmFuc2l0aW9uICAgID0gdHJhbnNpdGlvbiB8fCBuZXcgVHJhbnNpdGlvbigpO1xuICAgIGNvdW50ICAgICAgICAgICAgICAgPSBNYXRoLm1heCgxLCBjb3VudCkgfHwgMTtcbiAgICBpZiAodGhpcy5fdHJhbnNpdGlvbi5yZXF1aXJlc1dlYkdMICYmICEodGhpcy5fcmVuZGVyZXIgaW5zdGFuY2VvZiBQSVhJLldlYkdMUmVuZGVyZXIpKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gICAgICAgICAgICA9IHRyYW5zaXRpb24uZmFsbGJhY2soKTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5wdXNoICAgICAgID0gdHJhbnNpdGlvbi5wdXNoO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnJlcGxhY2UgICAgPSB0cmFuc2l0aW9uLnJlcGxhY2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ud2FpdCAgICAgICA9IHRyYW5zaXRpb24ud2FpdDtcbiAgICB9XG4gICAgdGhpcy5fdHJhbnNpdGlvbi5pbml0KCk7XG4gICAgdGhpcy5fc3RhZ2UuYWRkQ2hpbGQodGhpcy5fdHJhbnNpdGlvbik7XG5cbiAgICB0aGlzLl90cmFuc2l0aW9uLnNpZ25hbHMuaW4uYWRkT25jZShmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgICAgIHAzLlRpbWVzdGVwLnF1ZXVlQ2FsbChzd2FwLCBbY291bnRdLCB0aGlzKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLl90cmFuc2l0aW9uLnNpZ25hbHMub3V0LmFkZE9uY2UoZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcblxuICAgICAgICB0cmFuc2l0aW9uLnBhcmVudC5yZW1vdmVDaGlsZCh0cmFuc2l0aW9uKTtcbiAgICAgICAgdHJhbnNpdGlvbi5kaXNwb3NlKCk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24ud2FpdCkge1xuICAgICAgICAgICAgdGhpcy50b3Auc2hvdygpO1xuICAgICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5fdHJhbnNpdGlvbi5pbigpO1xuXG4gICAgZnVuY3Rpb24gc3dhcChjb3VudCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArKyBpKSB7XG4gICAgICAgICAgICB0aGlzLnRvcC5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnRvcC5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy50b3ApO1xuICAgICAgICAgICAgdGhpcy50b3AuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhY2sucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NlbmUgPSB0aGlzLnRvcDtcbiAgICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICAgIGlmICghc2NlbmUucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlLmFkZENoaWxkQXQoc2NlbmUsIHRoaXMuX3RyYW5zaXRpb24ucGFyZW50LmdldENoaWxkSW5kZXgodGhpcy5fdHJhbnNpdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHNjZW5lLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0YWNrKTtcbiAgICB9XG59O1xuXG4vKipcbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xufTtcblxuLyoqXG4gKi9cblNjZW5lTWFuYWdlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjZW5lO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc3RhY2subGVuZ3RoOyArKyBpKSB7XG4gICAgICAgIHNjZW5lID0gdGhpcy5fc3RhY2tbaV07XG4gICAgICAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnJlc2l6ZSgpO1xuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZU1hbmFnZXIucHJvdG90eXBlLCBcInN0YWdlXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UElYSS5EaXNwbGF5T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFnZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lTWFuYWdlci5wcm90b3R5cGUsIFwidG9wXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U2NlbmV9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWNrLmxlbmd0aCA/IHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lTWFuYWdlci5wcm90b3R5cGUsIFwidHJhbnNpdGlvbkluUHJvZ3Jlc3NcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fdHJhbnNpdGlvbiAhPSBudWxsID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9XG59KTtcbiIsIi8qKlxuICogIFRyYW5zaXRpb25cbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNC8wOS8yMDE1LlxuICpcbiAqL1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBUcmFuc2l0aW9uKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqL1xuICAgIHRoaXMuc2lnbmFscyAgICAgICAgPSB7fTtcbiAgICB0aGlzLnNpZ25hbHMuaW4gICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5zaWduYWxzLm91dCAgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wdXNoID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlcGxhY2UgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy53YWl0ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVxdWlyZXNXZWJHTCA9IGZhbHNlO1xuXG4gICAgUElYSS5Db250YWluZXIuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gVHJhbnNpdGlvbjtcblRyYW5zaXRpb24ucHJvdG90eXBlICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xuVHJhbnNpdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgICAgPSBUcmFuc2l0aW9uO1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNpZ25hbHMuaW4uZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5vdXQuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuaW4gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNpZ25hbHMuaW4uZGlzcGF0Y2godGhpcyk7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5vdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNpZ25hbHMub3V0LmRpc3BhdGNoKHRoaXMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJucyB7VHJhbnNpdGlvbn1cbiAqL1xuVHJhbnNpdGlvbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmZhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07IiwidmFyIENvbW1vbiAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XG52YXIgU2ltcGxlU2NyZWVuID0gcmVxdWlyZShcIi4uL3NjcmVlbnMvU2ltcGxlU2NyZWVuXCIpO1xudmFyIE5leHRCdXR0b24gICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL05leHRCdXR0b25cIik7XG52YXIgU291bmRTRlggICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU291bmRTRlhcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gR2FtZU92ZXJPdmVybGF5KHNjb3JlLCBoaWdoc2NvcmUpXG57XG5cdC8qKlxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKi9cblx0dGhpcy5fc2NvcmUgPSBzY29yZTtcblx0dGhpcy5faGlnaHNjb3JlID0gaGlnaHNjb3JlO1xuXG5cdHRoaXMuX25hbWUgPSBcIlwiO1xuXHR0aGlzLl9uYW1lUGxhY2Vob2xkZXIgPSBcIlwiO1xuXHR0aGlzLl9lbWFpbCA9IFwiXCI7XG5cdHRoaXMuX2VtYWlsUGxhY2Vob2xkZXIgPSBcIlwiO1xuXHR0aGlzLl9jb3VudHJ5ID0gbnVsbDtcblx0dGhpcy5fY291bnRyeVBsYWNlaG9sZGVyID0gXCJcIjtcblxuXHR0aGlzLl9hY3RpdmVGaWVsZCA9IFwiXCI7XG5cdHRoaXMuX2FjdGl2ZVRpbWUgPSAwO1xuXHR0aGlzLl9hY3RpdmVCbGlua1RpbWUgPSAxO1xuXG5cdHRoaXMuX2NvbG9yUGxhY2Vob2xkZXIgPSBcIiM5OTk5OTlcIjtcblx0dGhpcy5fY29sb3JBY3RpdmUgPSBcIiMxMTExMTFcIjtcblx0dGhpcy5fY29sb3JDb3JyZWN0ID0gXCIjMzNCMTIwXCI7XG5cdHRoaXMuX2NvbG9yRXJyb3IgPSBcIiNCMTIwMjhcIjtcblxuXHR0aGlzLl9jb3VudHJpZXMgPVxuXHRbXG5cdFx0e2lkOiBcImVuZ2xpc2hcIiwgICAgICAgICBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tXCJ9LFxuXHRcdHtpZDogXCJmcmFuY2VcIiwgICAgICAgICAgbmFtZTogXCJGcmFuY2VcIn0sXG5cdFx0e2lkOiBcImJvdHN3dWFuYVwiLCAgICAgICBuYW1lOiBcIkJvdHN3YW5hXCJ9LFxuXHRcdHtpZDogXCJidXJraW5hZmFzb1wiLCAgICAgbmFtZTogXCJCdXJraW5hIEZhc29cIn0sXG5cdFx0e2lkOiBcImNhcGV2ZXJkZVwiLCAgICAgICBuYW1lOiBcIkNhcGUgVmVyZGVcIn0sXG5cdFx0e2lkOiBcImdoYW5hXCIsICAgICAgICAgICBuYW1lOiBcIkdoYW5hXCJ9LFxuXHRcdHtpZDogXCJndWluZWFcIiwgICAgICAgICAgbmFtZTogXCJHdWluZWFcIn0sXG5cdFx0e2lkOiBcIml2b3J5XCIsICAgICAgICAgICBuYW1lOiBcIkl2b3J5IENvYXN0XCJ9LFxuXHRcdHtpZDogXCJrZW55YVwiLCAgICAgICAgICAgbmFtZTogXCJLZW55YVwifSxcblx0XHR7aWQ6IFwibWFkYWdhc2NhclwiLCAgICAgIG5hbWU6IFwiTWFkYWdhc2NhclwifSxcblx0XHR7aWQ6IFwibWFsaVwiLCAgICAgICAgICAgIG5hbWU6IFwiTWFsaVwifSxcblx0XHR7aWQ6IFwibW9yb2Njb1wiLCAgICAgICAgIG5hbWU6IFwiTW9yb2Njb1wifSxcblx0XHR7aWQ6IFwibW96YW1iaXF1ZVwiLCAgICAgIG5hbWU6IFwiTW96YW1iaXF1ZVwifSxcblx0XHR7aWQ6IFwibWF1cml0aXVzXCIsICAgICAgIG5hbWU6IFwiTWF1cml0aXVzXCJ9LFxuXHRcdHtpZDogXCJuYW1pYmlhXCIsICAgICAgICAgbmFtZTogXCJOYW1pYmlhXCJ9LFxuXHRcdHtpZDogXCJuZWRlcmxhbmRzXCIsICAgICAgbmFtZTogXCJOZXRoZXJsYW5kc1wifSxcblx0XHR7aWQ6IFwidHVuaXNpYVwiLCAgICAgICAgIG5hbWU6IFwiVHVuaXNpYVwifSxcblx0XHR7aWQ6IFwidWdhbmRhXCIsICAgICAgICAgIG5hbWU6IFwiVWdhbmRhXCJ9LFxuXHRcdHtpZDogXCJzZW5lZ2FsXCIsICAgICAgICAgbmFtZTogXCJTZW5lZ2FsXCJ9LFxuXHRcdHtpZDogXCJzb3V0aGFmcmljYVwiLCAgICAgbmFtZTogXCJTb3V0aCBBZnJpY2FcIn1cblx0XVxuXG5cdCQoXCIjbGVhZGVyYm9hcmRfbmFtZVwiKS52YWwoXCJcIik7XG5cdCQoXCIjbGVhZGVyYm9hcmRfZW1haWxcIikudmFsKFwiXCIpO1xuXHQkKFwiI2xlYWRlcmJvYXJkX2NvdW50cnlcIikudmFsKFwiXCIpO1xuXG5cdFNpbXBsZVNjcmVlbi5jYWxsKHRoaXMpO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7U2lnbmFsfVxuXHQgKi9cblx0dGhpcy5zaWduYWxzLnJlcXVlc3RMZWFkZXJCb2FyZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBHYW1lT3Zlck92ZXJsYXk7XG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaW1wbGVTY3JlZW4ucHJvdG90eXBlKTtcbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lT3Zlck92ZXJsYXk7XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuXHRjb25zb2xlLmxvZyhcIkdBTUUgT1ZFUiBJTklUSUFMSVpFRFwiKTtcblxuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblxuXHR0aGlzLl9iZyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zbWFsbF9kZWZcIikpO1xuXHR0aGlzLl9iZy54ID0gQ29tbW9uLlNUQUdFX1dJRFRILzI7XG5cdHRoaXMuX2JnLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMCk7XG5cdHRoaXMuX2JnLmFscGhhID0gMDtcblx0dGhpcy5fYmcuaGl0QXJlYSAgICAgPSBuZXcgUElYSS5SZWN0YW5nbGUoLUNvbW1vbi5TVEFHRV9XSURUSC8yLCAwLCBDb21tb24uU1RBR0VfV0lEVEgsIENvbW1vbi5TVEFHRV9IRUlHSFQpO1xuXHR0aGlzLl9iZy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fYmcpO1xuXG5cdHRoaXMuX3BhbmVsID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NtYWxsX2RlZlwiKSk7XG5cdHRoaXMuX3BhbmVsLnggPSBDb21tb24uU1RBR0VfV0lEVEgvMjtcblx0dGhpcy5fcGFuZWwueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQvMjtcblx0dGhpcy5fcGFuZWwuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxKTtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9wYW5lbCk7XG5cblx0dmFyIGNvcHkgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcImNvbmZpZ1wiKVsnY29weSddW1wiWU9VX1NDT1JFRFwiXVtDb21tb24uQ09VTlRSWV9DT0RFXTtcblx0dGhpcy5fdGl0bGUgPSBuZXcgUElYSS5UZXh0KGNvcHkudGV4dCArIFwiIFwiICsgdGhpcy5fc2NvcmUgKyBcIiFcIiwge2ZvbnQ6IFwiNDBweCBHaWxsU2Fuc01ULUJvbGRcIiwgZmlsbDogMHhmZmZmZmYsIGFsaWduOiBcImNlbnRlclwifSk7XG5cdHRoaXMuX3RpdGxlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcblx0dGhpcy5fdGl0bGUueCA9IDA7XG5cdHRoaXMuX3RpdGxlLnkgPSAtdGhpcy5fcGFuZWwuaGVpZ2h0O1xuXHR0aGlzLl9wYW5lbC5hZGRDaGlsZCh0aGlzLl90aXRsZSk7XG5cblx0Ly8gQnV0dG9uc1xuXHR0aGlzLl9yZXN0YXJ0QnV0dG9uID0gbmV3IHAzLkJ1dHRvblxuXHQoXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfYmlnX2RlZlwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9iaWdfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9iaWdfcHJlc3NcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJpY29uX3JlcGxheVwiKVxuXHQpO1xuXHR0aGlzLl9yZXN0YXJ0QnV0dG9uLmluaXQoKTtcblx0dGhpcy5fcmVzdGFydEJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAtIDE5MDtcblx0dGhpcy5fcmVzdGFydEJ1dHRvbi54ID0gKENvbW1vbi5TVEFHRV9XSURUSCAvIDIpICsgMzUwO1xuXHR0aGlzLl9yZXN0YXJ0QnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX3Jlc3RhcnRCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHR0aGlzLl9yZXN0YXJ0QnV0dG9uLnNpZ25hbHMuZG93bi5hZGQodGhpcy5yZXN0YXJ0Q2xpY2tlZCwgdGhpcyk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fcmVzdGFydEJ1dHRvbik7XG5cblx0XG5cdHRoaXMuX25leHRCdXR0b24gPSBuZXcgcDMuQnV0dG9uXG5cdChcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zbWFsbF9kZWZcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc21hbGxfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zbWFsbF9wcmVzc1wiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImljb25faG9tZVwiKVxuXHQpO1xuXHR0aGlzLl9uZXh0QnV0dG9uLmluaXQoKTtcblx0dGhpcy5fbmV4dEJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9uZXh0QnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX25leHRCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHR0aGlzLl9uZXh0QnV0dG9uLnNpZ25hbHMuZG93bi5hZGQodGhpcy5uZXh0Q2xpY2tlZCwgdGhpcyk7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fbmV4dEJ1dHRvbik7XG5cblx0dGhpcy5fbXV0ZUJ1dHRvbiA9IG5ldyBwMy5NdXRlQnV0dG9uXG5cdChcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zbWFsbF9kZWZcIiksXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc21hbGxfb3ZlclwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zbWFsbF9wcmVzc1wiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImljb25fc291bmRvblwiKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImljb25fc291bmRvZmZcIilcblx0KTtcblx0dGhpcy5fbXV0ZUJ1dHRvbi5pZCA9IFwibXV0ZVwiO1xuXHR0aGlzLl9tdXRlQnV0dG9uLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XG5cdHRoaXMuX211dGVCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcblx0dGhpcy5fbXV0ZUJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdHRoaXMuX211dGVCdXR0b24uaW5pdCgpO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX211dGVCdXR0b24pO1xuXG5cdC8vIEJsYWNrIHNjcmVlblxuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSk7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAxO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24ueCA9IC1Db21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NyZWVuVHJhbnNpdGlvbilcbn07XG5cbi8qKlxuICovXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblxufTtcblxuLyoqXG4gKi9cbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuX25leHRCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XG5cdHRoaXMuX211dGVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xufTtcblxuLyoqXG4gKi9cbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX1zY29wZVxuICovXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLmFuaW1hdGVJbiA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG5cdFx0dGwudG8odGhpcy5fbmV4dEJ1dHRvbi5zY2FsZSwgMSwge3g6MSwgeToxLCBlYXNlOkJhY2suZWFzZU91dH0sIC44KTtcblx0XHR0bC50byh0aGlzLl9tdXRlQnV0dG9uLnNjYWxlLCAxLCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSwgLjgpO1xuXHRcdHRsLnRvKHRoaXMuX3Jlc3RhcnRCdXR0b24uc2NhbGUsIDEsIHt4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXR9LCAxLjIpO1xuXG5cdFx0Ly8gdGwudG8odGhpcy5fYmcsIDAuNzUsIHthbHBoYToxLCBlYXNlOlNpbmUuZWFzZU91dH0sIDAuMSk7XG5cdFx0Ly8gdGwudG8odGhpcy5fcGFuZWwsIDAuNzUsIHt5OkNvbW1vbi5TVEFHRV9IRUlHSFQsIGVhc2U6UXVhZC5lYXNlT3V0LFxuXHRcdC8vIG9uQ29tcGxldGU6ZnVuY3Rpb24oKVxuXHRcdC8vIHtcblx0XHRcdC8vIFNvdW5kU0ZYLnBsYXkoXCJzZnhfcXVpel9lbmRfc21hbGxjcm93ZF9hcHBsYXVzZVwiKTtcblx0XHQvLyB9LFxuXHRcdC8vIG9uQ29tcGxldGVTY29wZTp0aGlzXG5cdFx0Ly8gfSwgMC4xKTtcblxuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpXG57XG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7b25Db21wbGV0ZVNjb3BlOnNjb3BlLCBvbkNvbXBsZXRlOmNhbGxiYWNrfSk7XG5cblx0XHR0bC50byh0aGlzLl9yZXN0YXJ0QnV0dG9uLnNjYWxlLCAuNSwge3g6MCwgeTowLCBlYXNlOkJhY2suZWFzZUlufSwgMCk7XG5cdFx0dGwudG8odGhpcy5fbmV4dEJ1dHRvbi5zY2FsZSwgLjUsIHt4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbn0sIDApO1xuXHRcdHRsLnRvKHRoaXMuX211dGVCdXR0b24uc2NhbGUsIC41LCB7eDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW59LCAwKTtcblx0XHR0bC50byh0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLCAwLjM1LCB7eDowLCBlYXNlOlNpbmUuZWFzZU91dH0sIDAuNSk7XG5cblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG59O1xuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5uZXh0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTtcblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59O1xuXG4vKipcbiAqL1xuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5yZXN0YXJ0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmRpc3BhdGNoKCk7XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUy9TRVRURVJTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsInZhciBDb21tb24gICAgICAgPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XG52YXIgU2ltcGxlU2NyZWVuID0gcmVxdWlyZSggXCIuLi9zY3JlZW5zL1NpbXBsZVNjcmVlblwiICk7XG52YXIgTmV4dEJ1dHRvbiAgID0gcmVxdWlyZSggXCIuLi9nZW5lcmFsL05leHRCdXR0b25cIiApO1xudmFyIFNvdW5kU0ZYICAgICA9IHJlcXVpcmUoIFwiLi4vZ2VuZXJhbC9Tb3VuZFNGWFwiICk7XG52YXIgTXV0ZUJ1dHRvbiAgID0gcmVxdWlyZSggXCIuLi9saWIvTXV0ZUJ1dHRvblwiICk7XG52YXIgQmVuTXV0ZUJ1dHRvbiA9IHJlcXVpcmUoIFwiLi4vdWkvQmVuTXV0ZUJ1dHRvblwiICk7XG52YXIgQmVuQnV0dG9uID0gcmVxdWlyZSggXCIuLi91aS9CZW5CdXR0b25cIiApO1xudmFyIEJ1dHRvblNwcml0ZXMgPSByZXF1aXJlKCBcIi4uL3VpL0J1dHRvblNwcml0ZXNcIiApO1xudmFyIERvdWJsZVN0YXRlSWNvbiA9IHJlcXVpcmUoIFwiLi4vdWkvRG91YmxlU3RhdGVJY29uXCIgKTtcbnZhciBTaW5nbGVTdGF0ZUljb24gPSByZXF1aXJlKCBcIi4uL3VpL1NpbmdsZVN0YXRlSWNvblwiICk7XG52YXIgQmdSaW5nID0gcmVxdWlyZSggXCIuLi91aS9CZ1JpbmdcIiApO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBhdXNlT3ZlcmxheSgpXG57XG5cdC8vIFBhcmVudC5cblx0U2ltcGxlU2NyZWVuLmNhbGwoIHRoaXMgKTtcblx0XG5cdFxuXHQvLyBDb25zdGFudHMuXG5cdHRoaXMuVFVUT1JJQUxfSU5ERVhfSF9QT1NJVElPTlMgPSBbIC02NywgMCwgNjQgXTtcblx0XG5cdFxuXHQvLyBBdHRyaWJ1dGVzLlxuXHR0aGlzLl90dXRvcmlhbEltYWdlSW5kZXggPSAwO1xuXHRcblx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZEdhbWVTY3JlZW4gPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXVzZU92ZXJsYXk7XG5QYXVzZU92ZXJsYXkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU2ltcGxlU2NyZWVuLnByb3RvdHlwZSApO1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhdXNlT3ZlcmxheTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKCBcIlBBVVNFIElOSVRJQUxJWkVEXCIgKTtcblxuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCggdGhpcyApO1xuXHRcblx0Ly8gSW5pdCBVSS5cblx0Ly8gQnV0dG9uIHNwcml0ZXMuXG5cdHZhciBtZWRpdW1CdXR0b25TcHJpdGVzID0gbmV3IEJ1dHRvblNwcml0ZXMoKTtcbiAgICBtZWRpdW1CdXR0b25TcHJpdGVzLm5vcm1hbCA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vZmZcIiApO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMub3ZlciA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vdmVyXCIgKTtcbiAgICBtZWRpdW1CdXR0b25TcHJpdGVzLmlubmVyUmluZyA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vZmZfcmluZ18wMDFcIiApO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMub3V0ZXJSaW5nID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZl9yaW5nXzAwMlwiICk7XG5cdHZhciBsYXJnZUJ1dHRvblNwcml0ZXMgPSBuZXcgQnV0dG9uU3ByaXRlcygpO1xuICAgIGxhcmdlQnV0dG9uU3ByaXRlcy5ub3JtYWwgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZcIiApO1xuICAgIGxhcmdlQnV0dG9uU3ByaXRlcy5vdmVyID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbGFyZ2Vfb3ZlclwiICk7XG4gICAgbGFyZ2VCdXR0b25TcHJpdGVzLmlubmVyUmluZyA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX29mZl9yaW5nXzAwMVwiICk7XG4gICAgbGFyZ2VCdXR0b25TcHJpdGVzLm91dGVyUmluZyA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX29mZl9yaW5nXzAwMlwiICk7XG5cdFxuXHR0aGlzLl9jb250YWluZXIgICA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9jb250YWluZXIueCA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcblx0dGhpcy5fY29udGFpbmVyLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUICogMC41O1x0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2NvbnRhaW5lciApO1xuXG5cdC8vIEJhY2tncm91bmQuXG5cdHRoaXMuX2JnID0gbmV3IFBJWEkuU3ByaXRlKCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJwYXVzZWRfYmdcIiApICk7XG5cdHRoaXMuX2JnLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9iZy5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuXHR0aGlzLl9iZy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcdFxuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQoIHRoaXMuX2JnICk7XG5cdFxuXHQvLyBUdXRvcmlhbCBpbWFnZXMuXG5cdHRoaXMuX2FyclR1dG9yaWFsSW1hZ2UgPSBbXTtcblx0dmFyIFRVVE9SSUFMX0lNQUdFX0lEUyA9IFsgXG5cdFx0cDMuRGV2aWNlLmlzTW9iaWxlID8gXCJ0dXRvcmlhbHMvdHV0b3JpYWxfbW9iaWxlX2JlbjAwMVwiIDogXCJ0dXRvcmlhbHMvdHV0b3JpYWxfZGVza3RvcF9iZW4wMDFcIiwgXG5cdFx0XCJ0dXRvcmlhbHMvdHV0b3JpYWxfYmVuMDAyXCIsXG5cdFx0XCJ0dXRvcmlhbHMvdHV0b3JpYWxfYmVuMDAzXCIgXTtcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgMzsgKytpIClcblx0e1xuXHRcdHZhciB0dXRvcmlhbEltYWdlID0gbmV3IFBJWEkuU3ByaXRlKCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggVFVUT1JJQUxfSU1BR0VfSURTWyBpIF0gKSApO1xuXHRcdHR1dG9yaWFsSW1hZ2UuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XHRcblx0XHR0dXRvcmlhbEltYWdlLnBvc2l0aW9uLnkgPSAtMzU7XG5cdFx0dHV0b3JpYWxJbWFnZS52aXNpYmxlID0gaSA9PSAwO1xuXHRcdFxuXHRcdHRoaXMuX2FyclR1dG9yaWFsSW1hZ2UucHVzaCggdHV0b3JpYWxJbWFnZSApO1x0XHRcblx0XHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQoIHR1dG9yaWFsSW1hZ2UgKTtcblx0fVxuXHRcblx0Ly8gVHV0b3JpYWwgaW5kZXggaW1hZ2UuXG5cdHRoaXMuX3R1dG9yaWFsSW5kZXhJbWFnZSA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwaWNrdXBfMDBcIikgKTtcblx0dGhpcy5fdHV0b3JpYWxJbmRleEltYWdlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAuNSwgLjUgKTtcblx0dGhpcy5fdHV0b3JpYWxJbmRleEltYWdlLnBvc2l0aW9uLnggPSB0aGlzLlRVVE9SSUFMX0lOREVYX0hfUE9TSVRJT05TWyB0aGlzLl90dXRvcmlhbEltYWdlSW5kZXggXTtcblx0dGhpcy5fdHV0b3JpYWxJbmRleEltYWdlLnBvc2l0aW9uLnkgPSAxMzU7XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fdHV0b3JpYWxJbmRleEltYWdlICk7XG5cdFxuXHQvLyBUaXRsZS5cblx0dmFyIGpzb25QYXVzZWRUZXh0ID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oIFwiY29uZmlnXCIgKVsgJ2NvcHknIF1bIFwiUEFVU0VEXCIgXVsgQ29tbW9uLkNPVU5UUllfQ09ERSBdO1x0XG5cdGlmICggQ29tbW9uLkNPVU5UUllfQ09ERSAhPSBcImFyXCIgJiYgQ29tbW9uLkNPVU5UUllfQ09ERSAhPSBcInJ1XCIgKSBcbiAgICAgICAgdGhpcy5fdGl0bGVUZXh0ID0gbmV3IFBJWEkuZXh0cmFzLkJpdG1hcFRleHQoIGpzb25QYXVzZWRUZXh0LnRleHQsIHsgZm9udDogXCJhaGtpb183NV9wYXVzZWRcIiwgYWxpZ246IFwiY2VudGVyXCIgfSApO1xuXHRlbHNlIFxuICAgICAgICB0aGlzLl90aXRsZVRleHQgPSBuZXcgUElYSS5UZXh0KCBcblx0XHRcdGpzb25QYXVzZWRUZXh0LnRleHQsIFxuXHRcdFx0eyBmb250OiBcIjgwcHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIHN0cm9rZTogXCIjMDQ0MzAwXCIsIHN0cm9rZVRoaWNrbmVzczogMTAsIGFsaWduOiBcImNlbnRlclwiIH0gKTsgICAgXG5cdHRoaXMuX3RpdGxlVGV4dC5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCBcblx0XHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX3RpdGxlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0XHRDb21tb24uU1RBR0VfSEVJR0hUICogMC41IC0gMzAwICk7XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX3RpdGxlVGV4dCApO1xuXHRcblx0Ly8gUmVwbGF5IGJ1dHRvbi5cblx0Ly8gQnV0dG9uLlx0XG5cdHRoaXMuX3JlcGxheUJ1dHRvbiA9IG5ldyBCZW5CdXR0b24oIGxhcmdlQnV0dG9uU3ByaXRlcyApO1xuXHR0aGlzLl9yZXBsYXlCdXR0b24ucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXG5cdFx0Q29tbW9uLlNUQUdFX1dJRFRIICogLjUgLSA0MDAsIFxuXHRcdENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgKyAyNDAgKTtcblx0dGhpcy5fcmVwbGF5QnV0dG9uLnNpZ25hbHMuZG93bi5hZGRPbmNlKCB0aGlzLnJlcGxheVByZXNzZWQsIHRoaXMgKTtcblx0dGhpcy5fcmVwbGF5QnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5fcmVwbGF5QnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0dGhpcy5fcmVwbGF5QnV0dG9uLmFuaW1hdGUgPSB0cnVlO1xuXHQvLyBJY29uLlxuXHR0aGlzLl9yZXBsYXlJY29uID0gbmV3IFNpbmdsZVN0YXRlSWNvbiggXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9yZXBsYXlfb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX3JlcGxheV9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX3JlcGxheUJ1dHRvbiApO1xuXHRcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fcmVwbGF5QnV0dG9uICk7XG5cdFxuXHQvLyBSZXN1bWUgYnV0dG9uLlxuXHQvLyBCdXR0b24uXHRcblx0dGhpcy5fcmVzdW1lQnV0dG9uID0gbmV3IEJlbkJ1dHRvbiggbGFyZ2VCdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX3Jlc3VtZUJ1dHRvbi5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCBcblx0XHRDb21tb24uU1RBR0VfV0lEVEggKiAuNSArIDQwMCwgXG5cdFx0Q29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNSArIDI0MCApO1xuXHR0aGlzLl9yZXN1bWVCdXR0b24uc2lnbmFscy5kb3duLmFkZE9uY2UoIHRoaXMucmVzdW1lUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9yZXN1bWVCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHR0aGlzLl9yZXN1bWVCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMCwgMCApO1xuXHR0aGlzLl9yZXN1bWVCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdC8vIEljb24uXG5cdHRoaXMuX3BsYXlJY29uID0gbmV3IFNpbmdsZVN0YXRlSWNvbiggXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9pY29uX3BsYXlfb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX2ljb25fcGxheV9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX3Jlc3VtZUJ1dHRvbiApO1xuXHRcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fcmVzdW1lQnV0dG9uICk7XG5cdFxuXHQvLyBOZXh0IGltYWdlIGJ1dHRvbi5cblx0Ly8gQnV0dG9uLlxuXHR0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvbiA9IG5ldyBCZW5CdXR0b24oIG1lZGl1bUJ1dHRvblNwcml0ZXMgKTtcblx0dGhpcy5fbmV4dFR1dG9yaWFsSW1hZ2VCdXR0b24ueCA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSArIDQ0MDtcblx0dGhpcy5fbmV4dFR1dG9yaWFsSW1hZ2VCdXR0b24ueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgLSAyNTtcdFx0XG5cdHRoaXMuX25leHRUdXRvcmlhbEltYWdlQnV0dG9uLnNpZ25hbHMuZG93bi5hZGQoIHRoaXMubmV4dFR1dG9yaWFsSW1hZ2VQcmVzc2VkLCB0aGlzICk7XG5cdHRoaXMuX25leHRUdXRvcmlhbEltYWdlQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5fbmV4dFR1dG9yaWFsSW1hZ2VCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMCwgMCApO1xuXHR0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0Ly8gSWNvbi5cblx0dGhpcy5fbmV4dENoYXB0ZXJJY29uID0gbmV3IFNpbmdsZVN0YXRlSWNvbiggXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9uZXh0X29mZlwiICksXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9uZXh0X292ZXJcIiApLFxuXHRcdFx0dGhpcy5fbmV4dFR1dG9yaWFsSW1hZ2VCdXR0b25cblx0XHQpO1x0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX25leHRUdXRvcmlhbEltYWdlQnV0dG9uICk7XG5cdFxuXHQvLyBQcmV2aW91cyBpbWFnZSBidXR0b24uXG5cdC8vIEJ1dHRvbi5cblx0dGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b24gPSBuZXcgQmVuQnV0dG9uKCBtZWRpdW1CdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX3ByZXZUdXRvcmlhbEltYWdlQnV0dG9uLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSA0NDA7XG5cdHRoaXMuX3ByZXZUdXRvcmlhbEltYWdlQnV0dG9uLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUICogMC41IC0gMjU7XHRcdFxuXHR0aGlzLl9wcmV2VHV0b3JpYWxJbWFnZUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKCB0aGlzLnByZXZUdXRvcmlhbEltYWdlUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9wcmV2VHV0b3JpYWxJbWFnZUJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdHRoaXMuX3ByZXZUdXRvcmlhbEltYWdlQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0dGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdC8vIEljb24uXG5cdHRoaXMuX3ByZXZDaGFwdGVySWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbmV4dF9vZmZcIiApLFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbmV4dF9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX3ByZXZUdXRvcmlhbEltYWdlQnV0dG9uXG5cdFx0KTtcblx0dGhpcy5fcHJldkNoYXB0ZXJJY29uLnNjYWxlLnggPSAtMTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9wcmV2VHV0b3JpYWxJbWFnZUJ1dHRvbiApO1xuXHRcblx0Ly8gTXV0ZSBidXR0b24uXG5cdC8vIEljb24uXG5cdHZhciBtdXRlSWNvbiA9IG5ldyBEb3VibGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fYXVkaW9fb2ZmXCIgKSxcdFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbXV0ZV9vZmZcIiApLFx0XG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9hdWRpb19vdmVyXCIgKSxcdFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbXV0ZV9vdmVyXCIgKSApO1xuXHRtdXRlSWNvbi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0Ly8gQnV0dG9uLlxuXHR0aGlzLl9iZW5NdXRlQnV0dG9uID0gbmV3IEJlbk11dGVCdXR0b24oIG1lZGl1bUJ1dHRvblNwcml0ZXMsIG11dGVJY29uICk7XG5cdHRoaXMuX2Jlbk11dGVCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdHRoaXMuX2Jlbk11dGVCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcblx0Ly90aGlzLl9iZW5NdXRlQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9iZW5NdXRlQnV0dG9uICk7XG5cdFxuXHQvLyBIb21lIGJ1dHRvbi5cblx0Ly8gQnV0dG9uXG5cdHRoaXMuX2hvbWVCdXR0b24gPSBuZXcgQmVuQnV0dG9uKCBtZWRpdW1CdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX2hvbWVCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdHRoaXMuX2hvbWVCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcdFx0XG5cdHRoaXMuX2hvbWVCdXR0b24uc2lnbmFscy5kb3duLmFkZE9uY2UoIHRoaXMuaG9tZVByZXNzZWQsIHRoaXMgKTtcblx0dGhpcy5faG9tZUJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdC8vdGhpcy5faG9tZUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLl9ob21lQnV0dG9uLmluaXQoKTtcblx0Ly8gSWNvbi5cblx0dGhpcy5fbmV4dENoYXB0ZUljb24gPSBuZXcgU2luZ2xlU3RhdGVJY29uKCBcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX2hvbWVfb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX2hvbWVfb3ZlclwiICksXG5cdFx0XHR0aGlzLl9ob21lQnV0dG9uXG5cdFx0KTtcblx0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2hvbWVCdXR0b24gKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5faG9tZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvbkxlZnQoKTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG59O1xuXG4vKipcbiAqL1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUucmVzaXplLmNhbGwoIHRoaXMgKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSApXG57XG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHQvL3RsLnRvKCB0aGlzLl9ob21lQnV0dG9uLnNjYWxlLCAuNCwgeyB4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXQgfSwgMCApO1xuXHQvL3RsLnRvKCB0aGlzLl9iZW5NdXRlQnV0dG9uLnNjYWxlLCAuNCwgeyB4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXQgfSwgMCApO1xuXHR0bC50byggdGhpcy5fcmVzdW1lQnV0dG9uLnNjYWxlLCAwLjYsIHsgeDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0IH0sIDAgKTtcblx0dGwudG8oIHRoaXMuX3JlcGxheUJ1dHRvbi5zY2FsZSwgMC42LCB7IHg6MSwgeToxLCBlYXNlOkJhY2suZWFzZU91dCB9LCAwICk7XG5cdHRsLnRvKCB0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC4xICk7XG5cdHRsLnRvKCB0aGlzLl9wcmV2VHV0b3JpYWxJbWFnZUJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC4xICk7XG5cdFxuXHRDb21tb24uYW5pbWF0b3IuYWRkKCB0bCApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSlcbntcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCB7IG9uQ29tcGxldGVTY29wZTpzY29wZSwgb25Db21wbGV0ZTpjYWxsYmFjayB9ICk7XG5cdC8vdGwudG8oIHRoaXMuX2hvbWVCdXR0b24uc2NhbGUsIC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAgKTtcblx0Ly90bC50byggdGhpcy5fYmVuTXV0ZUJ1dHRvbi5zY2FsZSwgLjUsIHsgeDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW4gfSwgMCApO1xuXHR0bC50byggdGhpcy5fcmVzdW1lQnV0dG9uLnNjYWxlLCAuNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwICk7XG5cdHRsLnRvKCB0aGlzLl9yZXBsYXlCdXR0b24uc2NhbGUsIC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAgKTtcblx0dGwudG8oIHRoaXMuX25leHRUdXRvcmlhbEltYWdlQnV0dG9uLnNjYWxlLCAwLjUsIHsgeDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW4gfSwgMCApO1xuXHR0bC50byggdGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b24uc2NhbGUsIDAuNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwICk7XG5cdFxuXHRDb21tb24uYW5pbWF0b3IuYWRkKCB0bCApO1xufTtcblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUudXBkYXRlVUkgPSBmdW5jdGlvbigpXG57XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX2FyclR1dG9yaWFsSW1hZ2UubGVuZ3RoOyArK2kgKVxuXHRcdHRoaXMuX2FyclR1dG9yaWFsSW1hZ2VbIGkgXS52aXNpYmxlID0gaSA9PSB0aGlzLl90dXRvcmlhbEltYWdlSW5kZXg7XG5cdFx0XG5cdHRoaXMuX3R1dG9yaWFsSW5kZXhJbWFnZS5wb3NpdGlvbi54ID0gdGhpcy5UVVRPUklBTF9JTkRFWF9IX1BPU0lUSU9OU1sgdGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4IF07XG59XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUucmVzdW1lUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5hbmltYXRlT3V0KFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpOyB9LCBcblx0XHR0aGlzICk7XG5cblx0U291bmRTRlgucGxheSggXCJzZnhfYnRuX3ByZXNzXzAwXCIgKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLnJlcGxheVByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuYW5pbWF0ZU91dChcblx0XHRmdW5jdGlvbigpIHsgdGhpcy5zaWduYWxzLnJlcXVlc3RlZEdhbWVTY3JlZW4uZGlzcGF0Y2goKTsgfSwgXG5cdFx0dGhpcyApO1xuXG5cdFNvdW5kU0ZYLnBsYXkoIFwic2Z4X2J0bl9wcmVzc18wMFwiICk7XG59O1xuXG4vKipcbiAqL1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5ob21lUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5hbmltYXRlT3V0KFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uZGlzcGF0Y2goKTsgfSwgXG5cdFx0dGhpcyApO1xuXG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5uZXh0VHV0b3JpYWxJbWFnZVByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdCsrdGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4O1xuXHRpZiAoIHRoaXMuX3R1dG9yaWFsSW1hZ2VJbmRleCA+PSB0aGlzLl9hcnJUdXRvcmlhbEltYWdlLmxlbmd0aCApXG5cdFx0dGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4ID0gMDtcblxuXHR0aGlzLnVwZGF0ZVVJKCk7XG5cdFxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLnByZXZUdXRvcmlhbEltYWdlUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0LS10aGlzLl90dXRvcmlhbEltYWdlSW5kZXg7XG5cdGlmICggdGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4IDwgMCApXG5cdFx0dGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4ID0gdGhpcy5fYXJyVHV0b3JpYWxJbWFnZS5sZW5ndGggLSAxO1xuXG5cdHRoaXMudXBkYXRlVUkoKTtcblx0XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuIiwidmFyIENvbW1vbiA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcbnZhciBTaW1wbGVTY3JlZW4gPSByZXF1aXJlKCBcIi4vU2ltcGxlU2NyZWVuXCIgKTtcbnZhciBTb3VuZFNGWCA9IHJlcXVpcmUoIFwiLi4vZ2VuZXJhbC9Tb3VuZFNGWFwiICk7XG52YXIgRG91YmxlU3RhdGVJY29uID0gcmVxdWlyZSggXCIuLi91aS9Eb3VibGVTdGF0ZUljb25cIiApO1xudmFyIFNpbmdsZVN0YXRlSWNvbiA9IHJlcXVpcmUoIFwiLi4vdWkvU2luZ2xlU3RhdGVJY29uXCIgKTtcbnZhciBCZW5NdXRlQnV0dG9uID0gcmVxdWlyZSggXCIuLi91aS9CZW5NdXRlQnV0dG9uXCIgKTtcbnZhciBCZW5CdXR0b24gPSByZXF1aXJlKCBcIi4uL3VpL0JlbkJ1dHRvblwiICk7XG52YXIgQnV0dG9uU3ByaXRlcyA9IHJlcXVpcmUoIFwiLi4vdWkvQnV0dG9uU3ByaXRlc1wiICk7XG52YXIgQmdSaW5nID0gcmVxdWlyZSggXCIuLi91aS9CZ1JpbmdcIiApO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEFsaWVuSW5zdHJ1Y3Rpb25zU2NyZWVuKCBhbGllbklkLCBjaGFwdGVySW5kZXgsIGxldmVsSW5kZXggKVxue1xuXHQvLyBQYXJlbnQuXG5cdFNpbXBsZVNjcmVlbi5jYWxsKCB0aGlzICk7XG5cdFxuXHRcblx0Ly8gQXR0cmlidXRlcy5cblx0dGhpcy5fYWxpZW5JZCA9IGFsaWVuSWQ7XG5cdHRoaXMuX2NoYXB0ZXJJbmRleCA9IGNoYXB0ZXJJbmRleDtcblx0dGhpcy5fbGV2ZWxJbmRleCA9IGxldmVsSW5kZXg7XG5cdFxuXHRcblx0Ly8gQ29uc3RhbnRzLlxuXHR0aGlzLkFMSUVOX0lOU1RSVUNUSU9OX0lEX0FSUkFZID0gWyBcblx0XHRcInR1dG9yaWFscy90dXRvcmlhbF9jYW5ub25ib2x0XCIsIFxuXHRcdFwidHV0b3JpYWxzL3R1dG9yaWFsX292ZXJmbG93XCIsIFxuXHRcdFwidHV0b3JpYWxzL3R1dG9yaWFsX3VwZ3JhZGVcIiwgXG5cdFx0XCJ0dXRvcmlhbHMvdHV0b3JpYWxfZm91cmFybXNcIiBdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFsaWVuSW5zdHJ1Y3Rpb25zU2NyZWVuO1xuQWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU2ltcGxlU2NyZWVuLnByb3RvdHlwZSApO1xuQWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWxpZW5JbnN0cnVjdGlvbnNTY3JlZW47XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cbkFsaWVuSW5zdHJ1Y3Rpb25zU2NyZWVuLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuXHRjb25zb2xlLmxvZyggXCJBTElFTiBJTlNUUlVDVElPTlMgSU5JVElBTElaRURcIiApO1xuXG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKCB0aGlzICk7XG5cblx0Ly8gSW5pdCBVSS5cblx0dmFyIG1lZGl1bUJ1dHRvblNwcml0ZXMgPSBuZXcgQnV0dG9uU3ByaXRlcygpO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMubm9ybWFsID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZlwiICk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5vdmVyID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX292ZXJcIiApO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMuaW5uZXJSaW5nID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZl9yaW5nXzAwMVwiICk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5vdXRlclJpbmcgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1fb2ZmX3JpbmdfMDAyXCIgKTtcblx0dmFyIGxhcmdlQnV0dG9uU3ByaXRlcyA9IG5ldyBCdXR0b25TcHJpdGVzKCk7XG4gICAgbGFyZ2VCdXR0b25TcHJpdGVzLm5vcm1hbCA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX29mZlwiICk7XG4gICAgbGFyZ2VCdXR0b25TcHJpdGVzLm92ZXIgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9vdmVyXCIgKTtcbiAgICBsYXJnZUJ1dHRvblNwcml0ZXMuaW5uZXJSaW5nID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbGFyZ2Vfb2ZmX3JpbmdfMDAxXCIgKTtcbiAgICBsYXJnZUJ1dHRvblNwcml0ZXMub3V0ZXJSaW5nID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbGFyZ2Vfb2ZmX3JpbmdfMDAyXCIgKTtcblx0XG5cdHRoaXMuX2NvbnRhaW5lciAgID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdHRoaXMuX2NvbnRhaW5lci54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuXHR0aGlzLl9jb250YWluZXIueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XHRcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fY29udGFpbmVyICk7XG5cblx0Ly8gQmFja2dyb3VuZC5cblx0dGhpcy5fYmcgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcInBhdXNlZF8yX2JnXCIgKSApO1xuXHR0aGlzLl9iZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fYmcuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XHRcblx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKCB0aGlzLl9iZyApO1xuXHRcblx0Ly8gVHV0b3JpYWwgaW1hZ2VzLlxuXHR2YXIgdHV0b3JpYWxJbWFnZSA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIHRoaXMuQUxJRU5fSU5TVFJVQ1RJT05fSURfQVJSQVlbIHRoaXMuX2FsaWVuSWQgLSAyIF0gKSApO1xuXHR0dXRvcmlhbEltYWdlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1x0XG5cdHR1dG9yaWFsSW1hZ2UucG9zaXRpb24ueSA9IC0zNTtcblx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKCB0dXRvcmlhbEltYWdlICk7XG5cdFxuXHQvLyBUaXRsZS5cblx0dmFyIGpzb25JbnN0cnVjdGlvbnNUaXRsZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKCBcImNvbmZpZ1wiIClbICdjb3B5JyBdWyBcIklOU1RSVUNUSU9OU1wiIF1bIENvbW1vbi5DT1VOVFJZX0NPREUgXTtcblx0aWYgKCBDb21tb24uQ09VTlRSWV9DT0RFICE9IFwiYXJcIiAmJiBDb21tb24uQ09VTlRSWV9DT0RFICE9IFwicnVcIiApIFxuICAgICAgICB0aGlzLl90aXRsZVRleHQgPSBuZXcgUElYSS5leHRyYXMuQml0bWFwVGV4dCgganNvbkluc3RydWN0aW9uc1RpdGxlLnRleHQsIHsgZm9udDogXCJhaGtpb183NV9wYXVzZWRcIiwgYWxpZ246IFwiY2VudGVyXCIgfSApO1xuXHRlbHNlIFxuICAgICAgICB0aGlzLl90aXRsZVRleHQgPSBuZXcgUElYSS5UZXh0KCBcblx0XHRcdGpzb25JbnN0cnVjdGlvbnNUaXRsZS50ZXh0LCBcblx0XHRcdHsgZm9udDogXCI4MHB4IEFyaWFsXCIsIGZpbGw6IFwiI0ZGRkZGRlwiLCBzdHJva2U6IFwiIzA0NDMwMFwiLCBzdHJva2VUaGlja25lc3M6IDEwLCBhbGlnbjogXCJjZW50ZXJcIiB9ICk7ICAgIFx0XHRcblx0dGhpcy5fdGl0bGVUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX3RpdGxlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0Q29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNSAtIDMwMCApO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl90aXRsZVRleHQgKTtcdFxuXHRcblx0Ly8gUGxheSBidXR0b24uXG5cdC8vIEJ1dHRvbi5cdFxuXHR0aGlzLl9wbGF5QnV0dG9uID0gbmV3IEJlbkJ1dHRvbiggbGFyZ2VCdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX3BsYXlCdXR0b24ucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXG5cdFx0Q29tbW9uLlNUQUdFX1dJRFRIICogLjUgKyA0MDAsIFxuXHRcdENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgKyAyNDAgKTtcblx0dGhpcy5fcGxheUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkT25jZSggdGhpcy5wbGF5UHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9wbGF5QnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5fcGxheUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLCAwICk7XG5cdHRoaXMuX3BsYXlCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdC8vIEljb24uXG5cdHRoaXMuX3BsYXlJY29uID0gbmV3IFNpbmdsZVN0YXRlSWNvbiggXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9pY29uX3BsYXlfb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX2ljb25fcGxheV9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX3BsYXlCdXR0b24gKTtcblx0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX3BsYXlCdXR0b24gKTtcblx0XG5cdC8vIE11dGUgYnV0dG9uLlxuXHR2YXIgbXV0ZUljb24gPSBuZXcgRG91YmxlU3RhdGVJY29uKCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9hdWRpb19vZmZcIiApLCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9tdXRlX29mZlwiICksIFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX2F1ZGlvX292ZXJcIiApLCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9tdXRlX292ZXJcIiApICk7XG5cdG11dGVJY29uLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHQvLyBCdXR0b24uXG5cdHRoaXMuX2Jlbk11dGVCdXR0b24gPSBuZXcgQmVuTXV0ZUJ1dHRvbiggbWVkaXVtQnV0dG9uU3ByaXRlcywgbXV0ZUljb24gKTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9iZW5NdXRlQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fYmVuTXV0ZUJ1dHRvbiApO1xuXHRcblx0Ly8gSG9tZSBidXR0b24uXG5cdC8vIEJ1dHRvbi5cblx0dGhpcy5faG9tZUJ1dHRvbiA9IG5ldyBCZW5CdXR0b24oIG1lZGl1bUJ1dHRvblNwcml0ZXMgKTtcblx0dGhpcy5faG9tZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0dGhpcy5faG9tZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1x0XHRcblx0dGhpcy5faG9tZUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkT25jZSggdGhpcy5ob21lUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9ob21lQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0Ly90aGlzLl9ob21lQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX2hvbWVCdXR0b24uaW5pdCgpO1xuXHQvLyBJY29uLlxuXHR0aGlzLl9ob21lSWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25faG9tZV9vZmZcIiApLFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25faG9tZV9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX2hvbWVCdXR0b25cblx0XHQpO1x0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2hvbWVCdXR0b24gKTtcblx0XG5cdC8vIEJsYWNrIHNjcmVlblxuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSk7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAxO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24ueCA9IC1Db21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NyZWVuVHJhbnNpdGlvbilcblxuXHQvL1NvdW5kc1xuXHQvLyB0aGlzLl9iZ011c2ljID0gU291bmRTRlgucGxheSgnbXVzaWNfbG9vcF90cmFjaycsIHt2b2x1bWU6MC42NiwgbG9vcDp0cnVlfSk7XG59O1xuXG4vKipcbiAqL1xuQWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcbn07XG5cbi8qKlxuICovXG5BbGllbkluc3RydWN0aW9uc1NjcmVlbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG5cdHRoaXMuX2hvbWVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XG59O1xuXG4vKipcbiAqL1xuQWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG5cdC8vIFNvdW5kU0ZYLnN0b3AoJ211c2ljX21lbnVfbG9vcF8wMCcpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX1zY29wZVxuICovXG5BbGllbkluc3RydWN0aW9uc1NjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSApXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwoIHRoaXMgKTtcblxuXHQvLyBCdXR0b25zXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcblx0dGwudG8oIHRoaXMuX3BsYXlCdXR0b24uc2NhbGUsIDEsIHsgeDoxLCB5OjEsIGVhc2U6RWxhc3RpYy5lYXNlT3V0IH0sIDAuMSApO1xuXHRcdFxuXHRDb21tb24uYW5pbWF0b3IuYWRkKCB0bCApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cbkFsaWVuSW5zdHJ1Y3Rpb25zU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSApXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKCB0aGlzICk7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCB7IG9uQ29tcGxldGU6Y2FsbGJhY2ssIG9uQ29tcGxldGVTY29wZTpzY29wZSB9ICk7XG5cblx0Ly8gQnV0dG9uc1xuXHR0bC50byggdGhpcy5fcGxheUJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAgKTtcblx0dGwudG8oIHRoaXMuX3NjcmVlblRyYW5zaXRpb24sIDAuNywgeyB4OjAsIGVhc2U6U2luZS5lYXNlT3V0IH0sIDAuNiApO1xuXG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7XG5cblx0Ly8gdGhpcy5fYmdNdXNpYy5mYWRlT3V0KDAsIDEwMDApO1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuQWxpZW5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLnBsYXlQcmVzc2VkID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMuZG93bi5yZW1vdmUoIHRoaXMucGxheVByZXNzZWQsIHRoaXMgKTtcblx0VHdlZW5NYXgua2lsbFR3ZWVuc09mKCB0aGlzLl9wbGF5QnV0dG9uLnNjYWxlICk7XG5cblx0dGhpcy5hbmltYXRlT3V0KFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCggdGhpcy5fY2hhcHRlckluZGV4LCB0aGlzLl9sZXZlbEluZGV4ICk7IH0sIFxuXHRcdHRoaXMgKTtcblxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5BbGllbkluc3RydWN0aW9uc1NjcmVlbi5wcm90b3R5cGUuaG9tZVByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuYW5pbWF0ZU91dCggXG5cdFx0ZnVuY3Rpb24oKSB7IHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5kaXNwYXRjaCgpOyB9LCBcblx0XHR0aGlzICk7XG5cblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59OyIsIi8qKlxuICogIENOUHJlbG9hZGVyU2NlbmVcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNy8xMC8yMDE1LlxuICpcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFNpbXBsZVNjcmVlbiA9IHJlcXVpcmUoIFwiLi9TaW1wbGVTY3JlZW5cIiApO1xudmFyIENvbW1vbiA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ05QcmVsb2FkZXJTY3JlZW4oKSBcbntcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvYWRlZCA9IC4xO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3R3ZWVucyA9IFtdO1xuXG4gICAgU2ltcGxlU2NyZWVuLmNhbGwoIHRoaXMgKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBDTlByZWxvYWRlclNjcmVlbjtcbkNOUHJlbG9hZGVyU2NyZWVuLnByb3RvdHlwZSAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuQ05QcmVsb2FkZXJTY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yICA9IENOUHJlbG9hZGVyU2NyZWVuO1xuXG5DTlByZWxvYWRlclNjcmVlbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkgXG57XG4gICAgdmFyIGJnID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY25fcHJlbG9hZGVyX2JnXCIpKTtcbiAgICB0aGlzLmFkZENoaWxkKGJnKTtcblxuICAgIHRoaXMuX2JhciAgID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5fYmFyLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgKyA0LjA7XG4gICAgdGhpcy5fYmFyLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUICogMC41ICsgMjEwLjA7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9iYXIpO1xuXG4gICAgdGhpcy5fYmFyLmZpbGwgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjbl9wcmVsb2FkZXJfZmlsbFwiKSk7XG4gICAgdGhpcy5fYmFyLmZpbGwueCAgICAgICAgPSAtdGhpcy5fYmFyLmZpbGwudGV4dHVyZS53aWR0aCAqIDAuNTtcbiAgICB0aGlzLl9iYXIuZmlsbC5zdGFydCAgICA9IG5ldyBQSVhJLlBvaW50KHRoaXMuX2Jhci5maWxsLngsIHRoaXMuX2Jhci5maWxsLnkpO1xuICAgIHRoaXMuX2Jhci5maWxsLmFuY2hvciAgID0gbmV3IFBJWEkuUG9pbnQoMS4wLCAwLjUpO1xuICAgIHRoaXMuX2Jhci5hZGRDaGlsZCh0aGlzLl9iYXIuZmlsbCk7XG5cbiAgICB0aGlzLl9iYXIuZnJhbWUgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNuX3ByZWxvYWRlcl9vdmVybGF5XCIpKTtcbiAgICB0aGlzLl9iYXIuZnJhbWUuYW5jaG9yICA9IG5ldyBQSVhJLlBvaW50KDAuNjg5LCAwLjUpO1xuICAgIHRoaXMuX2Jhci5hZGRDaGlsZCh0aGlzLl9iYXIuZnJhbWUpO1xuXHRcblx0aWYoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWydibGFja1NxdWFyZSddID09IHVuZGVmaW5lZClcblx0e1xuXHRcdHZhciBnciA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG5cdFx0Z3IuYmVnaW5GaWxsKDB4MDAwMDAwKTtcblx0XHRnci5kcmF3UmVjdCgwLCAwLCAxLCAxKTtcblx0XHRDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10gPSBnci5nZW5lcmF0ZVRleHR1cmUoQ29tbW9uLnJlbmRlcmVyLCAxLjAsIFBJWEkuU0NBTEVfTU9ERVMuTElORUFSKTtcblx0fVxuXHRcblx0Ly8gSGlkZSB0aGUgcHJvZ3Jlc3MgYmFyIGZpbGwgKGl0IGlzIHZpc2libGUgd2hpbGUgaXQgaXMgYXQgaXRzIHN0YXJ0aW5nIHBvc2l0aW9uKS4gXG5cdHRoaXMuX2JhckZpbGxDb3ZlciA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10pO1xuXHR0aGlzLl9iYXJGaWxsQ292ZXIud2lkdGggPSBDb21tb24uU1RBR0VfV0lEVEggKiAuMTU7XG5cdHRoaXMuX2JhckZpbGxDb3Zlci5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX2JhckZpbGxDb3Zlcilcblx0XG5cdC8vIEJsYWNrIHNjcmVlblxuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSk7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAxO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24ueCA9IC1Db21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NyZWVuVHJhbnNpdGlvbilcbn07XG5cbkNOUHJlbG9hZGVyU2NyZWVuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHR3ZWVuO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fdHdlZW5zLmxlbmd0aDsgKysgaSkge1xuICAgICAgICB0d2VlbiA9IHRoaXMuX3R3ZWVuc1tpXTtcbiAgICAgICAgdHdlZW4ua2lsbCgpO1xuICAgIH1cbiAgICB0aGlzLl90d2VlbnMubGVuZ3RoID0gMDtcblxuICAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbn07XG5cbkNOUHJlbG9hZGVyU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbn07XG5cbkNOUHJlbG9hZGVyU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSBcbntcblx0dmFyIHR3ZWVuID0gbmV3IFRpbWVsaW5lTWF4KHtvbkNvbXBsZXRlU2NvcGU6c2NvcGUsIG9uQ29tcGxldGU6Y2FsbGJhY2t9KTtcblx0Ly8gdHdlZW4udG8odGhpcy5fc2NyZWVuVHJhbnNpdGlvbiwgMC41LCB7YWxwaGE6IDEsIGVhc2U6U2luZS5FYXNlSW5PdXR9LCAgMSk7XG5cdHR3ZWVuLnRvKHRoaXMuX3NjcmVlblRyYW5zaXRpb24sIDAuNSwge2FscGhhOiAxLCBlYXNlOlNpbmUuRWFzZUluT3V0fSwgIDApO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHR3ZWVuKTtcbn07XG5cbkNOUHJlbG9hZGVyU2NyZWVuLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnggPSAocDMuVmlldy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG59O1xuXG5DTlByZWxvYWRlclNjcmVlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLl9iYXIuZmlsbC54ID0gdGhpcy5fYmFyLmZpbGwuc3RhcnQueCArIHRoaXMubG9hZGVkICogdGhpcy5fYmFyLmZpbGwudGV4dHVyZS53aWR0aDtcbn07XG4iLCJ2YXIgU2ltcGxlU2NyZWVuICAgICAgICA9IHJlcXVpcmUoXCIuL1NpbXBsZVNjcmVlblwiKTtcbnZhciBDb21tb24gICAgICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb29sV2FpdFNjcmVlbiggd2FpdFRpbWUgKSBcbntcblx0dGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3Bpbm5lckNlbnRlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zcGlubmVyQmxhY2sgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3Bpbm5lcldoaXRlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheS48UElYSS5TcHJpdGU+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmFkaWFscyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZW1pdHRlckhvbGRlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Y2xvdWRraWQuRW1pdHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBudWxsO1xuXHRcblx0dGhpcy5XQUlUX1RJTUUgPSB3YWl0VGltZTtcblx0dGhpcy5fd2FpdFRpbWVyID0gMDtcblxuICAgIC8vIHAzLlNjZW5lLmNhbGwodGhpcyk7XHRcblx0XG4gICAgU2ltcGxlU2NyZWVuLmNhbGwodGhpcyk7XG5cdFxuXHQvLyBFdmVudHMuXG5cdHRoaXMuc2lnbmFscy5vbldhaXRUaW1lQ29tcGxldGVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IENvb2xXYWl0U2NyZWVuO1xuQ29vbFdhaXRTY3JlZW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaW1wbGVTY3JlZW4ucHJvdG90eXBlKTtcbkNvb2xXYWl0U2NyZWVuLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvb2xXYWl0U2NyZWVuO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5Db29sV2FpdFNjcmVlbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwcmVsb2FkZXJfYmdcIikpO1xuICAgIHRoaXMuYWRkQ2hpbGQoYmcpO1xuXG4gICAgdmFyIHRleHR1cmVzID0gW1xuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDAxXCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDAyXCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDAzXCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDA0XCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDA1XCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDA2XCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDA3XCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yYWRpYWxfMDA4XCIpXG4gICAgXTtcblxuICAgIHZhciByYWRpYWw7XG4gICAgdmFyIG9mZnNldCAgPSBNYXRoLnJhbmRvbSgpICogKE1hdGguUEkgKiAyKTtcbiAgICB2YXIgYW5nbGUgICA9IChNYXRoLlBJICogMikgLyAodGV4dHVyZXMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHR1cmVzLmxlbmd0aDsgKysgaSkge1xuICAgICAgICByYWRpYWwgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbaV0pO1xuICAgICAgICByYWRpYWwucm90YXRpb24gPSBvZmZzZXQgKyBpICogYW5nbGU7XG4gICAgICAgIHJhZGlhbC54ICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSArIE1hdGguc2luKHJhZGlhbC5yb3RhdGlvbikgKiAxNDAuMDtcbiAgICAgICAgcmFkaWFsLnkgICAgICAgID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNSArIC1NYXRoLmNvcyhyYWRpYWwucm90YXRpb24pICogMTQwLjA7XG4gICAgICAgIHJhZGlhbC5hbmNob3IgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMS4wKTtcbiAgICAgICAgcmFkaWFsLnZpc2libGUgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQocmFkaWFsKTtcbiAgICAgICAgdGhpcy5fcmFkaWFscy5wdXNoKHJhZGlhbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZW1pdHRlckhvbGRlciAgICAgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLl9lbWl0dGVySG9sZGVyLnggICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcbiAgICB0aGlzLl9lbWl0dGVySG9sZGVyLnkgICA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9lbWl0dGVySG9sZGVyKTtcblxuICAgIHZhciBjb25maWcgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTihcInByZWxvYWRlcl9yYWRpYWxfc3ByYXlcIik7XG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBjbG91ZGtpZC5FbWl0dGVyKHRoaXMuX2VtaXR0ZXJIb2xkZXIsIFtcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwYXJ0aWNsZV8wMDFcIiksXG4gICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDAyXCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhcnRpY2xlXzAwM1wiKSxcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwYXJ0aWNsZV8wMDRcIiksXG4gICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDA1XCIpLFxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhcnRpY2xlXzAwNlwiKSxcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwYXJ0aWNsZV8wMDdcIilcbiAgICBdLCBjb25maWcpO1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCA9IGZhbHNlO1xuXG4gICAgdmFyIGhvbGRlciAgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICBob2xkZXIueCAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcbiAgICBob2xkZXIueSAgICA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XG4gICAgdGhpcy5hZGRDaGlsZChob2xkZXIpO1xuICAgIC8vIERpc3RvcnRpb25FZmZlY3Quc2hha2UoaG9sZGVyKTtcblxuICAgIHRoaXMuX3NwaW5uZXJCbGFjayAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9yaW5nX2JsYWNrXCIpKTtcbiAgICB0aGlzLl9zcGlubmVyQmxhY2suYW5jaG9yICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fc3Bpbm5lckJsYWNrLnZpc2libGUgID0gZmFsc2U7XG4gICAgaG9sZGVyLmFkZENoaWxkKHRoaXMuX3NwaW5uZXJCbGFjayk7XG5cbiAgICB0aGlzLl9zcGlubmVyQ2VudGVyICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwcmVsb2FkZXJfcmluZ19jZW50cmVcIikpO1xuICAgIHRoaXMuX3NwaW5uZXJDZW50ZXIuYW5jaG9yICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl9zcGlubmVyQ2VudGVyLnZpc2libGUgPSBmYWxzZTtcbiAgICBob2xkZXIuYWRkQ2hpbGQodGhpcy5fc3Bpbm5lckNlbnRlcik7XG5cbiAgICB0aGlzLl9zcGlubmVyV2hpdGUgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwcmVsb2FkZXJfcmluZ193aGl0ZVwiKSk7XG4gICAgdGhpcy5fc3Bpbm5lcldoaXRlLmFuY2hvciAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuX3NwaW5uZXJXaGl0ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgaG9sZGVyLmFkZENoaWxkKHRoaXMuX3NwaW5uZXJXaGl0ZSk7XG5cdFxuXHQvLyBCbGFjayBzY3JlZW5cblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbiA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9iZ1wiKSk7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAwO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLndpZHRoICA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLnRpbnQgPSAweDAwMDAwMDtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zY3JlZW5UcmFuc2l0aW9uKVx0XG59O1xuXG4vKipcbiAqL1xuQ29vbFdhaXRTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqL1xuQ29vbFdhaXRTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICB0aGlzLnggPSAocDMuVmlldy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG59O1xuXG4vKipcbiAqL1xuQ29vbFdhaXRTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblx0IHRoaXMuX2VtaXR0ZXIudXBkYXRlKCBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkxPQURJTkc6IFwiICsgdGhpcy5sb2FkZWRQZXJjZW50YWdlKTtcblxuICAgIC8qXG4gICAgdGhpcy5sb2FkZWRQZXJjZW50YWdlICs9IDE7XG5cbiAgICBpZih0aGlzLmxvYWRlZFBlcmNlbnRhZ2UgPiAxMDApXG4gICAgICAgIHRoaXMubG9hZGVkUGVyY2VudGFnZSA9IDA7Ki9cblxuICAgIC8vIHRoaXMuX2JhcklubmVyLnggPSB0aGlzLl9iYXJJbm5lclN0YXJ0WCArICg2OTggKiAodGhpcy5sb2FkZWRQZXJjZW50YWdlLzEwMCkpO1xuXHRcblx0aWYgKCB0aGlzLl93YWl0VGltZXIgIT0gbnVsbCApXG5cdHtcblx0XHR0aGlzLl93YWl0VGltZXIgKz0gcDMuVGltZXN0ZXAuZGVsdGFUaW1lO1xuXHRcdGlmICggdGhpcy5fd2FpdFRpbWVyID49IHRoaXMuV0FJVF9USU1FIClcblx0XHR7XG5cdFx0XHR0aGlzLl93YWl0VGltZXIgPSBudWxsO1xuXHRcdFxuXHRcdFx0dGhpcy5zaWduYWxzLm9uV2FpdFRpbWVDb21wbGV0ZWQuZGlzcGF0Y2goKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5Db29sV2FpdFNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKVxue1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCA9IHRydWU7XG5cbiAgICB0aGlzLl9zcGlubmVyQmxhY2suc2NhbGUgICAgID0gbmV3IFBJWEkuUG9pbnQoKTtcbiAgICB0aGlzLl9zcGlubmVyQmxhY2sudmlzaWJsZSAgID0gdHJ1ZTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9zcGlubmVyQmxhY2suc2NhbGUsIDAuNCwge1xuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyXVxuICAgIH0pO1xuXG4gICAgdGhpcy5fc3Bpbm5lckNlbnRlci5zY2FsZSAgICAgPSBuZXcgUElYSS5Qb2ludCgpO1xuICAgIHRoaXMuX3NwaW5uZXJDZW50ZXIudmlzaWJsZSAgID0gdHJ1ZTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9zcGlubmVyQ2VudGVyLnNjYWxlLCAwLjQsIHtcbiAgICAgICAgZGVsYXk6IDAuMDYsXG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzJdXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zcGlubmVyV2hpdGUuc2NhbGUgICAgID0gbmV3IFBJWEkuUG9pbnQoKTtcbiAgICB0aGlzLl9zcGlubmVyV2hpdGUudmlzaWJsZSAgID0gdHJ1ZTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9zcGlubmVyV2hpdGUuc2NhbGUsIDAuNDYsIHtcbiAgICAgICAgZGVsYXk6IDAuMDgsXG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFs0XVxuICAgIH0pO1xuXG4gICAgVHdlZW5NYXgudG8odGhpcy5fc3Bpbm5lckNlbnRlci5zY2FsZSwgMS40LCB7XG4gICAgICAgIGRlbGF5OiAwLjYsXG4gICAgICAgIHg6IDAuOTQsXG4gICAgICAgIHk6IDAuOTQsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgcmVwZWF0OiAtMVxuICAgIH0pO1xuXG4gICAgVHdlZW5NYXgudG8odGhpcy5fc3Bpbm5lckJsYWNrLCA4LjAsIHtcbiAgICAgICAgZGVsYXk6IDAuMixcbiAgICAgICAgcm90YXRpb246IE1hdGguUEkgKiA4LFxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSk7XG5cbiAgICBUd2Vlbk1heC50byh0aGlzLl9zcGlubmVyV2hpdGUsIDYuMCwge1xuICAgICAgICBkZWxheTogMC4yNCxcbiAgICAgICAgcm90YXRpb246IC1NYXRoLlBJICogOCxcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcbiAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgcmVwZWF0OiAtMVxuICAgIH0pO1xuXG4gICAgdmFyIHJhZGlhbDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3JhZGlhbHMubGVuZ3RoOyArKyBpKSB7XG4gICAgICAgIHJhZGlhbCA9IHRoaXMuX3JhZGlhbHNbaV07XG4gICAgICAgIHJhZGlhbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgcmFkaWFsLnNjYWxlLnkgPSAwLjA7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHJhZGlhbC5zY2FsZSwgMC44LCB7XG4gICAgICAgICAgICBkZWxheTogMC4xNCArIE1hdGgucmFuZG9tKCkgKiAwLjIsXG4gICAgICAgICAgICB5OiAxLjAsXG4gICAgICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgICAgICBlYXNlUGFyYW1zOiBbTWF0aC5yYW5kb20oKSAqIDJdLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24ocmFkaWFsKSB7XG4gICAgICAgICAgICAgICAgVHdlZW5NYXgudG8ocmFkaWFsLnNjYWxlLCAxLjYgKyBNYXRoLnJhbmRvbSgpICogMC40LCB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiBNYXRoLnJhbmRvbSgpICogMC45NCxcbiAgICAgICAgICAgICAgICAgICAgeTogMC45LFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxuICAgICAgICAgICAgICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db21wbGV0ZVBhcmFtczogW3JhZGlhbF0sXG4gICAgICAgICAgICBvbkNvbXBsZXRlU2NvcGU6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cbkNvb2xXYWl0U2NyZWVuLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSBcbntcblx0dmFyIHR3ZWVuID0gbmV3IFRpbWVsaW5lTWF4KHtvbkNvbXBsZXRlU2NvcGU6c2NvcGUsIG9uQ29tcGxldGU6Y2FsbGJhY2t9KTtcblx0Ly8gdHdlZW4udG8odGhpcy5fc2NyZWVuVHJhbnNpdGlvbiwgMC41LCB7YWxwaGE6IDEsIGVhc2U6U2luZS5FYXNlSW5PdXR9LCAgMSk7XG5cdHR3ZWVuLnRvKHRoaXMuX3NjcmVlblRyYW5zaXRpb24sIDAuNSwge2FscGhhOiAxLCBlYXNlOlNpbmUuRWFzZUluT3V0fSwgIDApO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHR3ZWVuKTtcbn07XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsInZhciBDb21tb24gICAgICAgPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XG52YXIgU2ltcGxlU2NyZWVuID0gcmVxdWlyZSggXCIuL1NpbXBsZVNjcmVlblwiICk7XG52YXIgU291bmRTRlggICAgID0gcmVxdWlyZSggXCIuLi9nZW5lcmFsL1NvdW5kU0ZYXCIgKTtcbnZhciBHbG9iYWwgICAgID0gcmVxdWlyZSggXCIuLi9nZW5lcmFsL0dsb2JhbFwiICk7XG52YXIgRG91YmxlU3RhdGVJY29uID0gcmVxdWlyZSggXCIuLi91aS9Eb3VibGVTdGF0ZUljb25cIiApO1xudmFyIFNpbmdsZVN0YXRlSWNvbiA9IHJlcXVpcmUoIFwiLi4vdWkvU2luZ2xlU3RhdGVJY29uXCIgKTtcbnZhciBCZW5NdXRlQnV0dG9uID0gcmVxdWlyZSggXCIuLi91aS9CZW5NdXRlQnV0dG9uXCIgKTtcbnZhciBCZW5CdXR0b24gPSByZXF1aXJlKCBcIi4uL3VpL0JlbkJ1dHRvblwiICk7XG52YXIgQnV0dG9uU3ByaXRlcyA9IHJlcXVpcmUoIFwiLi4vdWkvQnV0dG9uU3ByaXRlc1wiICk7XG52YXIgTGV2ZWxCdXR0b24gPSByZXF1aXJlKCBcIi4uL3VpL0xldmVsQnV0dG9uXCIgKTtcbnZhciBCZ1JpbmcgPSByZXF1aXJlKCBcIi4uL3VpL0JnUmluZ1wiICk7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRW5kTGV2ZWxTY3JlZW4oIGxldmVsUmVzdWx0SW5mbyApXG57XG5cdC8vIFBhcmVudC5cblx0U2ltcGxlU2NyZWVuLmNhbGwoIHRoaXMgKTtcblxuXHRcblx0Ly8gQXR0cmlidXRlcy5cblx0dGhpcy5fbGV2ZWxSZXN1bHRJbmZvID0gbGV2ZWxSZXN1bHRJbmZvO1xuXHR0aGlzLl9jdXJyZW50R2xvYmFsU2NvcmUgPSAwO1x0XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtTaWduYWx9XG5cdCAqL1xuXHR0aGlzLnNpZ25hbHMucmVxdWVzdGVkTGV2ZWxTZWxlY3Rpb25TY3JlZW4gPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblx0dGhpcy5zaWduYWxzLnJlcGxheUxldmVsID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cdFxuXHRcblx0Ly8gQ29uc3RhbnRzLlxuXHR0aGlzLkdMT0JBTF9TQ09SRV9BTklNX1NQRUVEID0gMTAwMDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kTGV2ZWxTY3JlZW47XG5FbmRMZXZlbFNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTaW1wbGVTY3JlZW4ucHJvdG90eXBlICk7XG5FbmRMZXZlbFNjcmVlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFbmRMZXZlbFNjcmVlbjtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuRW5kTGV2ZWxTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKCB0aGlzICk7XG5cblx0XG5cdC8vIFNhdmVkIHJlc3VsdCBkYXRhLlxuXHR2YXIgbGV2ZWxSZXN1bHRBdXggPSBDb21tb24uc2F2ZWREYXRhLmFyckxldmVsUmVzdWx0WyB0aGlzLl9sZXZlbFJlc3VsdEluZm8uY2hhcHRlckluZGV4IF1bIHRoaXMuX2xldmVsUmVzdWx0SW5mby5sZXZlbEluZGV4IF07XG5cdFxuXHQvLyBDcmVhdGUgVUkgZWxlbWVudHMuXG5cdC8vIEJ1dHRvbiBzcHJpdGVzLlxuXHR2YXIgbWVkaXVtQnV0dG9uU3ByaXRlcyAgICBcdCAgID0gbmV3IEJ1dHRvblNwcml0ZXMoKTtcbiAgICBtZWRpdW1CdXR0b25TcHJpdGVzLm5vcm1hbCAgICAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vZmZcIiApO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMub3ZlciAgICAgICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX292ZXJcIiApO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMuaW5uZXJSaW5nICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZl9yaW5nXzAwMVwiICk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5vdXRlclJpbmcgICAgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1fb2ZmX3JpbmdfMDAyXCIgKTtcblx0dmFyIGxhcmdlQnV0dG9uU3ByaXRlcyAgICBcdCAgID0gbmV3IEJ1dHRvblNwcml0ZXMoKTtcbiAgICBsYXJnZUJ1dHRvblNwcml0ZXMubm9ybWFsICAgICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbGFyZ2Vfb2ZmXCIgKTtcbiAgICBsYXJnZUJ1dHRvblNwcml0ZXMub3ZlciAgICAgICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbGFyZ2Vfb3ZlclwiICk7XG4gICAgbGFyZ2VCdXR0b25TcHJpdGVzLmlubmVyUmluZyAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX29mZl9yaW5nXzAwMVwiICk7XG4gICAgbGFyZ2VCdXR0b25TcHJpdGVzLm91dGVyUmluZyAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX29mZl9yaW5nXzAwMlwiICk7XG5cdFxuXHQvLyBNYWluIGNvbnRhaW5lci5cblx0dGhpcy5fY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdHRoaXMuX2NvbnRhaW5lci54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuXHR0aGlzLl9jb250YWluZXIueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2NvbnRhaW5lciApO1xuXHRcblx0Ly8gQmFja2dyb3VuZC5cblx0dGhpcy5fYmcgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJnX3VpXCIgKSApO1xuXHR0aGlzLl9iZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fYmcuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fYmcgKTtcblx0XG5cdC8vIEJhY2tncm91bmQgYW5pbWF0ZWQgcmluZy5cblx0dGhpcy5fYmdSaW5nID0gbmV3IEJnUmluZyggXCJwYW5lbC9lbmRfZ2FtZV9wYW5lbF8wMDNcIiwgXCJwYW5lbC9lbmRfZ2FtZV9wYW5lbF8wMDJcIiwgXCJwYW5lbC9lbmRfZ2FtZV9wYW5lbF8wMDFcIiApO1xuXHR0aGlzLl9iZ1JpbmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIC41LCAuNSApO1xuXHR0aGlzLl9iZ1JpbmcucGxheSgpO1x0XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fYmdSaW5nICk7XG5cblx0Ly8gVGl0bGUgdGV4dC5cblx0dmFyIGpzb25MZXZlbENvbXBsZXRlVGV4dCA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKCBcImNvbmZpZ1wiIClbICdjb3B5JyBdWyBcIkxFVkVMXCIgXVsgQ29tbW9uLkNPVU5UUllfQ09ERSBdO1xuXHRpZiAoIENvbW1vbi5DT1VOVFJZX0NPREUgIT0gXCJhclwiICYmIENvbW1vbi5DT1VOVFJZX0NPREUgIT0gXCJydVwiICkgXG4gICAgICAgIHRoaXMuX3RpdGxlVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCBqc29uTGV2ZWxDb21wbGV0ZVRleHQudGV4dC50b1VwcGVyQ2FzZSgpLCB7IGZvbnQ6IFwiODBweCBhaGtpb18xMDBfZ3JlZW5fZW5kZ2FtZVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9ICk7XG5cdGVsc2UgXG4gICAgICAgIHRoaXMuX3RpdGxlVGV4dCA9IG5ldyBQSVhJLlRleHQoIFxuXHRcdFx0anNvbkxldmVsQ29tcGxldGVUZXh0LnRleHQudG9VcHBlckNhc2UoKSwgXG5cdFx0XHR7IGZvbnQ6IFwiODVweCBBcmlhbFwiLCBmaWxsOiBcIiM4MEZGMDlcIiwgc3Ryb2tlOiBcIiMwNDQzMDBcIiwgc3Ryb2tlVGhpY2tuZXNzOiAxMCwgYWxpZ246IFwiY2VudGVyXCIgfSApOyAgICBcdFxuXHR0aGlzLl90aXRsZVRleHQucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXG5cdFx0Q29tbW9uLlNUQUdFX1dJRFRIICogMC41IC0gdGhpcy5fdGl0bGVUZXh0LndpZHRoICogMC41LCBcblx0XHRDb21tb24uU1RBR0VfSEVJR0hUICogMC4xMiApO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl90aXRsZVRleHQgKTtcblx0XG5cdC8vIEdsb2JhbCBzY29yZS5cblx0Ly8gVGV4dC5cblx0dGhpcy5fZ2xvYmFsU2NvcmVWYWx1ZSA9IE1hdGguY2VpbCggdGhpcy5fbGV2ZWxSZXN1bHRJbmZvLmNvbGxlY3RlZENvaW5zICogR2xvYmFsLlNDT1JFX0NPSU5fTVVMVElQTElFUiBcblx0XHQrIHRoaXMuX2xldmVsUmVzdWx0SW5mby5raWxsZWRFbmVtaWVzICogR2xvYmFsLlNDT1JFX0VORU1ZX01VTFRJUExJRVIgXG5cdFx0KyB0aGlzLl9sZXZlbFJlc3VsdEluZm8uY29sbGVjdGVkUG93ZXJ1cHMgKiBHbG9iYWwuU0NPUkVfUE9XRVJVUF9NVUxUSVBMSUVSIFxuXHRcdCsgdGhpcy5fbGV2ZWxSZXN1bHRJbmZvLmRlc3Ryb3llZEJsb2NrcyAqIEdsb2JhbC5TQ09SRV9CTE9DS19NVUxUSVBMSUVSXG5cdFx0LSB0aGlzLl9sZXZlbFJlc3VsdEluZm8uc3RlcHNcblx0XHQrIHRoaXMuX2xldmVsUmVzdWx0SW5mby50aW1lICk7XG5cdHRoaXMuX2dsb2JhbFNjb3JlVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCBcblx0XHR0aGlzLmZvcm1hdE51bWJlcldpdGhDb21tYXMoIDAgKSwgXG5cdFx0eyBmb250OiBcIjEyNXB4IGFoa2lvXzkwX29yYW5nZV9lbmRnYW1lXCIsIGFsaWduOiBcImNlbnRlclwiIH0gKTtcblx0dGhpcy5fZ2xvYmFsU2NvcmVUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX2dsb2JhbFNjb3JlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0Q29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuMjQgKTtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fZ2xvYmFsU2NvcmVUZXh0ICk7XHRcblx0XG5cdC8vIFRpbWUgc2NvcmUuXG5cdC8vIFRleHQuXG5cdC8qdGhpcy5fdGltZVNjb3JlVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCBNYXRoLmNlaWwoIHRoaXMuX2xldmVsUmVzdWx0SW5mby50aW1lICkudG9TdHJpbmcoKSwgeyBmb250OiBcImFoa2lvXzYwX3doaXRlX2VuZGxldmVsXCIsIGFsaWduOiBcImNlbnRlclwiIH0gKTtcblx0Ly8gSWNvbi5cblx0dGhpcy5fdGltZVNjb3JlSWNvbiA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiY2xvY2tfaWNvblwiICkgKTtcblx0dGhpcy5fdGltZVNjb3JlSWNvbi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0dGhpcy5fdGltZVNjb3JlSWNvbi5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCBcblx0XHRDb21tb24uU1RBR0VfV0lEVEggKiAwLjQ0IC0gdGhpcy5fdGltZVNjb3JlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0Q29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNDUgKTtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fdGltZVNjb3JlSWNvbiApO1xuXHR0aGlzLl90aW1lU2NvcmVJY29uLmFkZENoaWxkKCB0aGlzLl90aW1lU2NvcmVUZXh0ICk7XHRcblx0dGhpcy5fdGltZVNjb3JlVGV4dC5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCBcblx0XHR0aGlzLl90aW1lU2NvcmVJY29uLndpZHRoICogMC41LCBcblx0XHQtdGhpcy5fdGltZVNjb3JlSWNvbi5oZWlnaHQgKiAwLjcgKTsqL1xuXHRcblx0Ly8gU3RlcHMgc2NvcmUuXG5cdC8vIFRleHQuXG5cdC8qdGhpcy5fc3RlcHNTY29yZVRleHQgPSBuZXcgUElYSS5leHRyYXMuQml0bWFwVGV4dCggTWF0aC5jZWlsKCB0aGlzLl9sZXZlbFJlc3VsdEluZm8uc3RlcHMgKS50b1N0cmluZygpLCB7IGZvbnQ6IFwiYWhraW9fNjBfd2hpdGVfZW5kbGV2ZWxcIiwgYWxpZ246IFwiY2VudGVyXCIgfSApO1xuXHQvLyBJY29uLlxuXHR0aGlzLl9zdGVwc1Njb3JlSWNvbiA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwic3RlcHNfaWNvblwiICkgKTtcblx0dGhpcy5fc3RlcHNTY29yZUljb24uYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XG5cdHRoaXMuX3N0ZXBzU2NvcmVJY29uLnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTYgLSB0aGlzLl9zdGVwc1Njb3JlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0Q29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNDUgKTtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fc3RlcHNTY29yZUljb24gKTtcblx0dGhpcy5fc3RlcHNTY29yZUljb24uYWRkQ2hpbGQoIHRoaXMuX3N0ZXBzU2NvcmVUZXh0ICk7XHRcblx0dGhpcy5fc3RlcHNTY29yZVRleHQucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXG5cdFx0dGhpcy5fc3RlcHNTY29yZUljb24ud2lkdGggKiAwLjUsIFxuXHRcdC10aGlzLl9zdGVwc1Njb3JlSWNvbi5oZWlnaHQgKiAwLjcgKTsqL1xuXHRcblx0Ly8gUGlja3VwcyBzY29yZS5cblx0Ly8gVGV4dC5cblx0dGhpcy5fcGlja3Vwc1Njb3JlVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCB0aGlzLl9sZXZlbFJlc3VsdEluZm8uY29sbGVjdGVkQ29pbnMgKyBcIi9cIiArIHRoaXMuX2xldmVsUmVzdWx0SW5mby50b3RhbENvaW5zLCB7IGZvbnQ6IFwiYWhraW9fNjBfd2hpdGVfZW5kZ2FtZVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9ICk7XG5cdC8vIEljb24uXG5cdHRoaXMuX3BpY2t1cHNTY29yZUljb24gPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcInBpY2t1cF9pY29uXCIgKSApO1xuXHR0aGlzLl9waWNrdXBzU2NvcmVJY29uLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHR0aGlzLl9waWNrdXBzU2NvcmVJY29uLnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX3BpY2t1cHNTY29yZVRleHQud2lkdGggKiAwLjUsIFxuXHRcdENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjQ5ICk7XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX3BpY2t1cHNTY29yZUljb24gKTtcblx0dGhpcy5fcGlja3Vwc1Njb3JlSWNvbi5hZGRDaGlsZCggdGhpcy5fcGlja3Vwc1Njb3JlVGV4dCApO1x0XG5cdHRoaXMuX3BpY2t1cHNTY29yZVRleHQucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXG5cdFx0dGhpcy5fcGlja3Vwc1Njb3JlSWNvbi53aWR0aCAqIDAuNSwgXG5cdFx0LXRoaXMuX3BpY2t1cHNTY29yZUljb24uaGVpZ2h0ICogMC41NSApO1xuXHRcblx0Ly8gU3RhciBpY29ucy5cblx0Ly8gT2J0YWluIGVhcm5lZCBzdGFycyBmcm9tIGNvbGxlY3RlZCBwaWNrdXBzLlxuXHR2YXIgc3RhcnMgPSAxO1xuXHRpZiAoIHRoaXMuX2xldmVsUmVzdWx0SW5mby5jb2xsZWN0ZWRDb2lucyA9PSB0aGlzLl9sZXZlbFJlc3VsdEluZm8udG90YWxDb2lucyApXG5cdFx0c3RhcnMgPSAzO1xuXHRlbHNlIGlmICggdGhpcy5fbGV2ZWxSZXN1bHRJbmZvLmNvbGxlY3RlZENvaW5zID49IHRoaXMuX2xldmVsUmVzdWx0SW5mby50b3RhbENvaW5zICogR2xvYmFsLlNDT1JFX1NUQVJfRkFDVE9SIClcblx0XHRzdGFycyA9IDI7XG5cdHZhciBTVEFSX0lDT05fUkFESVVTID0gMTUwO1xuXHR2YXIgU1RBUl9JQ09OX0FOR0xFID0gTWF0aC5QSSAqIDAuMTU7XG5cdHRoaXMuX2FyclN0YXJJY29uID0gW107XHRcblx0Ly9jb25zdCBTVEFSX0lDT05fUk9UQVRJT04gPSBbIE1hdGguUEkgKiAwLjE1LCAwLCAtTWF0aC5QSSAqIDAuMTUgXTtcblx0Y29uc3QgU1RBUl9JQ09OX1BPU0lUSU9OID0gWyBcblx0XHRuZXcgUElYSS5Qb2ludCggLVNUQVJfSUNPTl9SQURJVVMgKiBNYXRoLmNvcyggU1RBUl9JQ09OX0FOR0xFICksIFNUQVJfSUNPTl9SQURJVVMgKiBNYXRoLnNpbiggU1RBUl9JQ09OX0FOR0xFICkgKSwgXG5cdFx0bmV3IFBJWEkuUG9pbnQoIDAsIFNUQVJfSUNPTl9SQURJVVMgKSwgXG5cdFx0bmV3IFBJWEkuUG9pbnQoIFNUQVJfSUNPTl9SQURJVVMgKiBNYXRoLmNvcyggU1RBUl9JQ09OX0FOR0xFICksIFNUQVJfSUNPTl9SQURJVVMgKiBNYXRoLnNpbiggU1RBUl9JQ09OX0FOR0xFICkgKSBdO1xuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgMzsgKytpIClcblx0e1xuXHRcdHZhciBzdGFySWNvbkF1eCA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIGkgPCBzdGFycyA/IFwiZW5kbGV2ZWwvc3Rhcl9vbl9iaWdcIiA6IFwiZW5kbGV2ZWwvc3Rhcl9vZmZfYmlnXCIgKSApO1x0XHRcblx0XHRzdGFySWNvbkF1eC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0XHQvL3N0YXJJY29uQXV4LnJvdGF0aW9uID0gU1RBUl9JQ09OX1JPVEFUSU9OWyBpIF07XG5cdFx0c3Rhckljb25BdXgucG9zaXRpb24gPSBTVEFSX0lDT05fUE9TSVRJT05bIGkgXTtcblx0XHRcblx0XHRzdGFySWNvbkF1eC5wb3NpdGlvbi54ICs9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcblx0XHRzdGFySWNvbkF1eC5wb3NpdGlvbi55ICs9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XG5cdFx0c3Rhckljb25BdXguc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggLjAsIC4wICk7XG5cdFx0XG5cdFx0dGwudG8oIHN0YXJJY29uQXV4LnNjYWxlLCAuNSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC40ICsgaSAqIC4xICk7XG5cdFx0aWYgKCBpIDwgc3RhcnMgKVxuXHRcdFx0dGwuYWRkQ2FsbGJhY2soIFxuXHRcdFx0XHRmdW5jdGlvbiggcCApIHsgcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJzZnhfc3Rhcl9hd2FyZF8wXCIgKyAoIHAgKyAxICkudG9TdHJpbmcoKSApOyB9LFxuXHRcdFx0XHQwLjQgKyBpICogLjEsXG5cdFx0XHRcdFsgaSBdICk7XG5cdFx0XG5cdFx0dGhpcy5hZGRDaGlsZCggc3Rhckljb25BdXggKTtcdFx0XG5cdFx0dGhpcy5fYXJyU3Rhckljb24ucHVzaCggc3Rhckljb25BdXggKTtcblx0fVxuXHRDb21tb24uYW5pbWF0b3IuYWRkKCB0bCApO1xuXHRcblx0Ly8gTmV4dCBsZXZlbCBidXR0b24uXG5cdC8vIEJ1dHRvblxuXHRpZiAoIHRoaXMuX2xldmVsUmVzdWx0SW5mby5jaGFwdGVySW5kZXggPCBHbG9iYWwuTEVWRUxfSURfQVJSQVkubGVuZ3RoIC0gMSBcblx0XHR8fCB0aGlzLl9sZXZlbFJlc3VsdEluZm8uY2hhcHRlckluZGV4ID09IEdsb2JhbC5MRVZFTF9JRF9BUlJBWS5sZW5ndGggLSAxICYmIHRoaXMuX2xldmVsUmVzdWx0SW5mby5sZXZlbEluZGV4IDwgR2xvYmFsLkxFVkVMX0lEX0FSUkFZWyAwIF0ubGVuZ3RoIC0gMSApXG5cdHtcblx0XHRjb25zdCBVSV9CVVRUT05fUkFESVVTID0gNDAwO1xuXHRcdHRoaXMuX25leHRMZXZlbEJ1dHRvbiA9IG5ldyBCZW5CdXR0b24oIGxhcmdlQnV0dG9uU3ByaXRlcyApO1xuXHRcdHRoaXMuX25leHRMZXZlbEJ1dHRvbi54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41ICsgVUlfQlVUVE9OX1JBRElVUyAqIE1hdGguY29zKCBNYXRoLlBJICogMC4yMiApO1xuXHRcdHRoaXMuX25leHRMZXZlbEJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNSArIFVJX0JVVFRPTl9SQURJVVMgKiBNYXRoLnNpbiggTWF0aC5QSSAqIDAuMjIgKTtcdFx0XG5cdFx0dGhpcy5fbmV4dExldmVsQnV0dG9uLnNpZ25hbHMuZG93bi5hZGRPbmNlKCB0aGlzLm5leHRMZXZlbFByZXNzZWQsIHRoaXMgKTtcblx0XHR0aGlzLl9uZXh0TGV2ZWxCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHRcdHRoaXMuX25leHRMZXZlbEJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLCAwICk7XG5cdFx0dGhpcy5fbmV4dExldmVsQnV0dG9uLmFuaW1hdGUgPSB0cnVlO1xuXHRcdC8vIEljb24uXG5cdFx0dGhpcy5fbmV4dExldmVsSWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9pY29uX3BsYXlfb2ZmXCIgKSxcblx0XHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbGFyZ2VfaWNvbl9wbGF5X292ZXJcIiApLFxuXHRcdFx0XHR0aGlzLl9uZXh0TGV2ZWxCdXR0b25cblx0XHRcdCk7XG5cdFx0XG5cdFx0dGhpcy5hZGRDaGlsZCggdGhpcy5fbmV4dExldmVsQnV0dG9uICk7XG5cdH1cblx0XG5cdC8vIFJlcGxheSBsZXZlbCBidXR0b24uXG5cdC8vIEJ1dHRvbi5cblx0dGhpcy5fcmVwbGF5TGV2ZWxCdXR0b24gPSBuZXcgQmVuQnV0dG9uKCBtZWRpdW1CdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX3JlcGxheUxldmVsQnV0dG9uLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjU0O1xuXHR0aGlzLl9yZXBsYXlMZXZlbEJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuODg7XHRcdFxuXHR0aGlzLl9yZXBsYXlMZXZlbEJ1dHRvbi5zaWduYWxzLmRvd24uYWRkT25jZSggdGhpcy5yZXBsYXlMZXZlbFByZXNzZWQsIHRoaXMgKTtcblx0dGhpcy5fcmVwbGF5TGV2ZWxCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHR0aGlzLl9yZXBsYXlMZXZlbEJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLCAwICk7XG5cdHRoaXMuX3JlcGxheUxldmVsQnV0dG9uLmFuaW1hdGUgPSB0cnVlO1xuXHRcdC8vIEljb24uXG5cdHRoaXMuX3JlcGxheUxldmVsSWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fcmVwbGF5X29mZlwiICksXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9yZXBsYXlfb3ZlclwiICksXG5cdFx0XHR0aGlzLl9yZXBsYXlMZXZlbEJ1dHRvblxuXHRcdCk7XG5cdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9yZXBsYXlMZXZlbEJ1dHRvbiApO1xuXHRcblx0Ly8gQ2hhcHRlcnMgYnV0dG9uLlxuXHQvLyBCdXR0b24uXG5cdHRoaXMuX2NoYXB0ZXJzQnV0dG9uID0gbmV3IEJlbkJ1dHRvbiggbWVkaXVtQnV0dG9uU3ByaXRlcyApO1xuXHR0aGlzLl9jaGFwdGVyc0J1dHRvbi54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC40Njtcblx0dGhpcy5fY2hhcHRlcnNCdXR0b24ueSA9IHRoaXMuX3JlcGxheUxldmVsQnV0dG9uLnk7XHRcdFxuXHR0aGlzLl9jaGFwdGVyc0J1dHRvbi5zaWduYWxzLmRvd24uYWRkKCB0aGlzLmNoYXB0ZXJzUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9jaGFwdGVyc0J1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdHRoaXMuX2NoYXB0ZXJzQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0dGhpcy5fY2hhcHRlcnNCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdC8vIEljb24uXG5cdHRoaXMuX2NoYXB0ZXJzSWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbGV2ZWxzX29mZlwiICksXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9sZXZlbHNfb3ZlclwiICksXG5cdFx0XHR0aGlzLl9jaGFwdGVyc0J1dHRvblxuXHRcdCk7XG5cdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9jaGFwdGVyc0J1dHRvbiApO1xuXHRcblx0Ly8gTXV0ZSBidXR0b24uXG5cdC8vIEljb24uXG5cdHZhciBtdXRlSWNvbiA9IG5ldyBEb3VibGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fYXVkaW9fb2ZmXCIgKSxcdFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbXV0ZV9vZmZcIiApLFx0XG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9hdWRpb19vdmVyXCIgKSxcdFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbXV0ZV9vdmVyXCIgKSApO1xuXHRtdXRlSWNvbi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0Ly8gQnV0dG9uLlxuXHR0aGlzLl9vdGhlck11dGVCdXR0b24gPSBuZXcgQmVuTXV0ZUJ1dHRvbiAoIG1lZGl1bUJ1dHRvblNwcml0ZXMsIG11dGVJY29uICk7XG5cdHRoaXMuX290aGVyTXV0ZUJ1dHRvbi5pZCA9IFwibXV0ZVwiO1xuXHR0aGlzLl9vdGhlck11dGVCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcblx0dGhpcy5fb3RoZXJNdXRlQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX290aGVyTXV0ZUJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdHRoaXMuX290aGVyTXV0ZUJ1dHRvbi5pbml0KCk7XG5cdFxuXHR0aGlzLmFkZENoaWxkKHRoaXMuX290aGVyTXV0ZUJ1dHRvbik7XG5cdFxuXHQvLyBIb21lIGJ1dHRvbi5cblx0Ly8gQnV0dG9uXG5cdHRoaXMuX2hvbWVCdXR0b24gPSBuZXcgQmVuQnV0dG9uICggbWVkaXVtQnV0dG9uU3ByaXRlcyApO1xuXHR0aGlzLl9ob21lQnV0dG9uLmFuaW1hdGUgPSB0cnVlO1xuXHR0aGlzLl9ob21lQnV0dG9uLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XHRcdFxuXHR0aGlzLl9ob21lQnV0dG9uLnNpZ25hbHMuZG93bi5hZGQoIHRoaXMuaG9tZVByZXNzZWQsIHRoaXMgKTtcblx0dGhpcy5faG9tZUJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdC8vdGhpcy5faG9tZUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuXHR0aGlzLl9ob21lQnV0dG9uLmluaXQoKTtcblx0Ly8gSWNvbi5cblx0dGhpcy5fbmV4dENoYXB0ZUljb24gPSBuZXcgU2luZ2xlU3RhdGVJY29uKCBcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX2hvbWVfb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX2hvbWVfb3ZlclwiICksXG5cdFx0XHR0aGlzLl9ob21lQnV0dG9uXG5cdFx0KTtcblx0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2hvbWVCdXR0b24gKTtcblx0XG5cdC8vIFJuYWRvbSBwb3dlcnVwIHNwcml0ZS5cblx0aWYgKCB0aGlzLl9sZXZlbFJlc3VsdEluZm8uYXJyUG93ZXJ1cElkLmxlbmd0aCA+IDAgKVxuXHR7XG5cdFx0Y29uc3QgUE9XRVJVUF9JRF9UT19TUFJJVEUgPSB7IFxuXHRcdFx0MjpcImVuZGxldmVsL2Nhbm5vbmJvbHRcIixcblx0XHRcdDM6XCJlbmRsZXZlbC9vdmVyZmxvd1wiLFxuXHRcdFx0NDpcImVuZGxldmVsLzRhcm1zXCIsXG5cdFx0XHQ1OlwiZW5kbGV2ZWwvdXBncmFkZVwiIH07XHRcdFx0XHRcblx0XG5cdFx0dmFyIHBvd2VydXBJZCA9IHRoaXMuX2xldmVsUmVzdWx0SW5mby5hcnJQb3dlcnVwSWRbIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiB0aGlzLl9sZXZlbFJlc3VsdEluZm8uYXJyUG93ZXJ1cElkLmxlbmd0aCApIF07XG5cdFx0dGhpcy5fcG93ZXJ1cFNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFBPV0VSVVBfSURfVE9fU1BSSVRFWyBwb3dlcnVwSWQudG9TdHJpbmcoKSBdICkgKTtcblx0XHR0aGlzLl9wb3dlcnVwU3ByaXRlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAuNSwgMSApO1xuXHRcdHRoaXMuX3Bvd2VydXBTcHJpdGUueCA9IENvbW1vbi5TVEFHRV9XSURUSCAqIC41IC0gNDUwO1xuXHRcdHRoaXMuX3Bvd2VydXBTcHJpdGUueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjk4O1x0XG5cdFx0XG5cdFx0dGhpcy5hZGRDaGlsZCggdGhpcy5fcG93ZXJ1cFNwcml0ZSApO1xuXHR9XG5cblx0Ly8gQmxhY2sgc2NyZWVuLlxuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSk7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAxO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24ueCA9IC1Db21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NyZWVuVHJhbnNpdGlvbilcblx0XG5cdC8vU291bmRzXG5cdC8vIHRoaXMuX2JnTXVzaWMgPSBTb3VuZFNGWC5wbGF5KCdtdXNpY19sb29wX3RyYWNrJywge3ZvbHVtZTowLjY2LCBsb29wOnRydWV9KTtcblx0Ly8gU2Z4LlxuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKCBcInNmeF9udW1iZXJfY291bnR1cF9sb29wXCIgKTtcblx0XG5cdC8vIFNhdmUgZGF0YS5cblx0dmFyIGlzU2F2ZURhdGEgPSBmYWxzZTtcblx0aWYgKCBzdGFycyA+IGxldmVsUmVzdWx0QXV4LnN0YXJzIClcblx0e1xuXHRcdGxldmVsUmVzdWx0QXV4LnN0YXJzID0gc3RhcnM7XG5cdFx0aXNTYXZlRGF0YSA9IHRydWU7XG5cdH1cblx0aWYgKCB0aGlzLl9nbG9iYWxTY29yZVZhbHVlID4gbGV2ZWxSZXN1bHRBdXguc2NvcmUgKVxuXHR7XG5cdFx0bGV2ZWxSZXN1bHRBdXguc2NvcmUgPSB0aGlzLl9nbG9iYWxTY29yZVZhbHVlO1xuXHRcdGlzU2F2ZURhdGEgPSB0cnVlO1xuXHR9XG5cdGlmICggaXNTYXZlRGF0YSApXG5cdFx0Q29tbW9uLnNhdmVkRGF0YS5zYXZlKCk7XG59O1xuXG4vKipcbiAqL1xuRW5kTGV2ZWxTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcblx0Ly8gR2xvYmFsIHNjb3JlIGFuaW1hdGlvbi5cblx0aWYgKCB0aGlzLl9jdXJyZW50R2xvYmFsU2NvcmUgPCB0aGlzLl9nbG9iYWxTY29yZVZhbHVlIClcblx0e1xuXHRcdHRoaXMuX2N1cnJlbnRHbG9iYWxTY29yZSArPSBwMy5UaW1lc3RlcC5kZWx0YVRpbWUgKiB0aGlzLkdMT0JBTF9TQ09SRV9BTklNX1NQRUVEO1xuXHRcdGlmICggdGhpcy5fY3VycmVudEdsb2JhbFNjb3JlID49IHRoaXMuX2dsb2JhbFNjb3JlVmFsdWUgKVxuXHRcdHtcblx0XHRcdHRoaXMuX2N1cnJlbnRHbG9iYWxTY29yZSA9IHRoaXMuX2dsb2JhbFNjb3JlVmFsdWU7XG5cdFx0XHRcblx0XHRcdC8vIFNmeC5cblx0XHRcdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5zdG9wU291bmQoIFwic2Z4X251bWJlcl9jb3VudHVwX2xvb3BcIiApO1xuXHRcdH1cblx0XHRcdFxuXHRcdHRoaXMuX2dsb2JhbFNjb3JlVGV4dC50ZXh0ID0gdGhpcy5mb3JtYXROdW1iZXJXaXRoQ29tbWFzKCBNYXRoLmZsb29yKCB0aGlzLl9jdXJyZW50R2xvYmFsU2NvcmUgKSApO1x0XHRcblx0XHR0aGlzLl9nbG9iYWxTY29yZVRleHQucG9zaXRpb24ueCA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX2dsb2JhbFNjb3JlVGV4dC53aWR0aCAqIDAuNTtcblx0fVxufTtcblxuLyoqXG4gKi9cbkVuZExldmVsU2NyZWVuLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXG57XG5cblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuX290aGVyTXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG5cdHRoaXMuX2hvbWVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XG59O1xuXG4vKipcbiAqL1xuRW5kTGV2ZWxTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG5cdC8vIFNvdW5kU0ZYLnN0b3AoJ211c2ljX21lbnVfbG9vcF8wMCcpO1xuXHQvLyBTZnguXG5cdHAzLkF1ZGlvTWFuYWdlci5pbnN0YW5jZS5zdG9wU291bmQoIFwic2Z4X251bWJlcl9jb3VudHVwX2xvb3BcIiApO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX1zY29wZVxuICovXG5FbmRMZXZlbFNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSApXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwoIHRoaXMgKTtcblxuXHQvLyBCdXR0b25zXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcblx0Ly90bC50byggdGhpcy5fYmVuTXV0ZUJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC40ICk7XG5cdC8vdGwudG8oIHRoaXMuX2hvbWVCdXR0b24uc2NhbGUsIDEsIHsgeDoxLCB5OjEsIGVhc2U6RWxhc3RpYy5lYXNlT3V0IH0sIDAuNCApO1xuXHR0bC50byggdGhpcy5fY2hhcHRlcnNCdXR0b24uc2NhbGUsIDEsIHsgeDoxLCB5OjEsIGVhc2U6RWxhc3RpYy5lYXNlT3V0IH0sIDAuNiApO1xuXHRpZiAoIHRoaXMuX25leHRMZXZlbEJ1dHRvbiAhPSBudWxsIClcblx0XHR0bC50byggdGhpcy5fbmV4dExldmVsQnV0dG9uLnNjYWxlLCAxLCB7IHg6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dCB9LCAwLjYgKTtcblx0dGwudG8oIHRoaXMuX3JlcGxheUxldmVsQnV0dG9uLnNjYWxlLCAxLCB7IHg6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dCB9LCAwLjYgKTtcblx0XHRcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCggdGwgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5FbmRMZXZlbFNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKCBjYWxsYmFjaywgc2NvcGUgKVxue1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbCggdGhpcyApO1xuXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgge29uQ29tcGxldGU6Y2FsbGJhY2ssIG9uQ29tcGxldGVTY29wZTpzY29wZX0gKTtcblxuXHQvLyBCdXR0b25zXG5cdC8vdGwudG8oIHRoaXMuX2Jlbk11dGVCdXR0b24uc2NhbGUsIDAuNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwLjEgKTtcblx0Ly90bC50byggdGhpcy5faG9tZUJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAuMSApO1xuXHR0bC50byggdGhpcy5fY2hhcHRlcnNCdXR0b24uc2NhbGUsIDAuNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwLjEgKTtcblx0aWYgKCB0aGlzLl9uZXh0TGV2ZWxCdXR0b24gIT0gbnVsbCApXG5cdFx0dGwudG8oIHRoaXMuX25leHRMZXZlbEJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAuMSApO1xuXHR0bC50byggdGhpcy5fcmVwbGF5TGV2ZWxCdXR0b24uc2NhbGUsIDAuNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwLjEgKTtcblx0dGwudG8oIHRoaXMuX3NjcmVlblRyYW5zaXRpb24sIDAuNywgeyB4OjAsIGVhc2U6U2luZS5lYXNlT3V0IH0sIDAuNiApO1xuXG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7XG5cblx0Ly8gdGhpcy5fYmdNdXNpYy5mYWRlT3V0KDAsIDEwMDApO1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5FbmRMZXZlbFNjcmVlbi5wcm90b3R5cGUuZm9ybWF0TnVtYmVyV2l0aENvbW1hcyA9IGZ1bmN0aW9uKCB4ICkgXG57XG4gICAgdmFyIHBhcnRzID0geC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcblx0XG4gICAgcGFydHNbIDAgXSA9IHBhcnRzWyAwIF0ucmVwbGFjZSggL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiICk7XG5cdFxuICAgIHJldHVybiBwYXJ0cy5qb2luKCBcIi5cIiApO1xufVxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5FbmRMZXZlbFNjcmVlbi5wcm90b3R5cGUubmV4dExldmVsUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5hbmltYXRlT3V0KCBcblx0XHRmdW5jdGlvbigpIHsgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTsgfSwgXG5cdFx0dGhpcyApO1xuXHRcblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59O1xuXG4vKipcbiAqL1xuRW5kTGV2ZWxTY3JlZW4ucHJvdG90eXBlLmNoYXB0ZXJzUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5hbmltYXRlT3V0KCBcblx0XHRmdW5jdGlvbigpIHsgdGhpcy5zaWduYWxzLnJlcXVlc3RlZExldmVsU2VsZWN0aW9uU2NyZWVuLmRpc3BhdGNoKCk7IH0sIFxuXHRcdHRoaXMgKTtcblx0XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuLyoqXG4gKi9cbkVuZExldmVsU2NyZWVuLnByb3RvdHlwZS5yZXBsYXlMZXZlbFByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuYW5pbWF0ZU91dCggXG5cdFx0ZnVuY3Rpb24oKSB7IHRoaXMuc2lnbmFscy5yZXBsYXlMZXZlbC5kaXNwYXRjaCgpOyB9LCBcblx0XHR0aGlzICk7XG5cdFxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5FbmRMZXZlbFNjcmVlbi5wcm90b3R5cGUuaG9tZVByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuYW5pbWF0ZU91dCggXG5cdFx0ZnVuY3Rpb24oKSB7IHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5kaXNwYXRjaCgpOyB9LCBcblx0XHR0aGlzICk7XG5cblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsInZhciBDb21tb24gICAgICAgPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XG52YXIgU2ltcGxlU2NyZWVuID0gcmVxdWlyZSggXCIuL1NpbXBsZVNjcmVlblwiICk7XG52YXIgU291bmRTRlggICAgID0gcmVxdWlyZSggXCIuLi9nZW5lcmFsL1NvdW5kU0ZYXCIgKTtcbnZhciBMZXZlbCAgICAgICAgPSByZXF1aXJlKCBcIi4uL2dhbWUvTGV2ZWxcIiApO1xudmFyIEJlbk11dGVCdXR0b24gPSByZXF1aXJlKCBcIi4uL3VpL0Jlbk11dGVCdXR0b25cIiApO1xudmFyIEJlbkJ1dHRvbiA9IHJlcXVpcmUoIFwiLi4vdWkvQmVuQnV0dG9uXCIgKTtcbnZhciBEb3VibGVTdGF0ZUljb24gPSByZXF1aXJlKCBcIi4uL3VpL0RvdWJsZVN0YXRlSWNvblwiICk7XG52YXIgU2luZ2xlU3RhdGVJY29uID0gcmVxdWlyZSggXCIuLi91aS9TaW5nbGVTdGF0ZUljb25cIiApO1xudmFyIEJ1dHRvblNwcml0ZXMgPSByZXF1aXJlKCBcIi4uL3VpL0J1dHRvblNwcml0ZXNcIiApO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEdhbWVTY3JlZW4oIGNoYXB0ZXJJbmRleCwgbGV2ZWxJbmRleCApXG57XG5cdHRoaXMuX2NoYXB0ZXJJbmRleCA9IGNoYXB0ZXJJbmRleDtcblx0dGhpcy5fbGV2ZWxJbmRleCA9IGxldmVsSW5kZXg7XG5cdHRoaXMuX3Jvb21Qcm9ncmVzc0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXG5cdFNpbXBsZVNjcmVlbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5zaWduYWxzLnBhdXNlUHJlc3NlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVTY3JlZW47XG5HYW1lU2NyZWVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUgKTtcbkdhbWVTY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2FtZVNjcmVlbjtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuXHRjb25zb2xlLmxvZyggXCJHQU1FIElOSVRJQUxJWkVEXCIgKTtcblxuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCggdGhpcyApO1xuXG5cdC8vIExldmVsXG5cdHRoaXMuX2xldmVsID0gbmV3IExldmVsKCB0aGlzLl9jaGFwdGVySW5kZXgsIHRoaXMuX2xldmVsSW5kZXggKTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9sZXZlbCApO1xuXHR0aGlzLl9sZXZlbC5pbml0KCk7XG5cdHRoaXMuX2xldmVsLnNpZ25hbHMub25OZXh0Um9vbS5hZGQoIHRoaXMub25OZXh0Um9vbSwgdGhpcyApO1xuXHRcdFxuXHQvLyBJbml0IFVJLlxuXHQvLyBSb29tIHByb2dyZXNzLlx0XG5cdHZhciByb29tQ291bnQgPSB0aGlzLl9sZXZlbC5kYXRhLnJvb21zLmxlbmd0aDsgLy8gVE9ETzpcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgcm9vbUNvdW50OyArK2kgKVxuXHR7XG5cdFx0dmFyIHJvb21TcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBpID09IDAgPyBcImljb25fcm9vbV9vblwiIDogXCJpY29uX3Jvb21fb2ZmXCIgKSApO1xuXHRcdFxuXHRcdHRoaXMuX3Jvb21Qcm9ncmVzc0NvbnRhaW5lci5hZGRDaGlsZCggcm9vbVNwcml0ZSApO1xuXHRcdHJvb21TcHJpdGUucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggcm9vbVNwcml0ZS53aWR0aCAqIGksIDAgKTtcblx0fVxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9yb29tUHJvZ3Jlc3NDb250YWluZXIgKTtcblx0dGhpcy5fcm9vbVByb2dyZXNzQ29udGFpbmVyLnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIC41IC0gdGhpcy5fcm9vbVByb2dyZXNzQ29udGFpbmVyLmNoaWxkcmVuWyAwIF0ud2lkdGggKiByb29tQ291bnQgKiAuNSxcblx0XHQwICk7XG5cdFxuXHQvLyBCdXR0b24gc3ByaXRlcy5cblx0dmFyIG1lZGl1bUJ1dHRvblNwcml0ZXMgPSBuZXcgQnV0dG9uU3ByaXRlcygpO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMubm9ybWFsID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZlwiICk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5vdmVyID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX292ZXJcIiApO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMuaW5uZXJSaW5nID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZl9yaW5nXzAwMVwiICk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5vdXRlclJpbmcgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1fb2ZmX3JpbmdfMDAyXCIgKTtcblx0XG5cdC8vIFBhdXNlIGJ1dHRvbi5cblx0Ly8gQnV0dG9uXG5cdHRoaXMuX3BhdXNlQnV0dG9uID0gbmV3IEJlbkJ1dHRvbiggbWVkaXVtQnV0dG9uU3ByaXRlcyApO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKCB0aGlzLnBhdXNlUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdC8vdGhpcy5fcGF1c2VCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMCwgMCApO1xuXHR0aGlzLl9wYXVzZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0Ly8gSWNvbi5cblx0dGhpcy5fcGF1c2VJY29uID0gbmV3IFNpbmdsZVN0YXRlSWNvbiggXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9wYXVzZV9vZmZcIiApLFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fcGF1c2Vfb3ZlclwiICksXG5cdFx0XHR0aGlzLl9wYXVzZUJ1dHRvblxuXHRcdCk7XG5cdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9wYXVzZUJ1dHRvbiApO1xuXHRcblx0Ly8gVGltZSB0ZXh0LlxuXHR0aGlzLl90aW1lVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCB0aGlzLl9sZXZlbC5sZXZlbFJlc3VsdEluZm8udGltZSwgeyBmb250OiBcImFoa2lvXzYwX3doaXRlX2VuZGdhbWVcIiwgYWxpZ246IFwiY2VudGVyXCIgfSApO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl90aW1lVGV4dCApO1xuXG5cdC8vIEJsYWNrIHNjcmVlblxuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2tTcXVhcmUnXSk7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uYWxwaGEgPSAxO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NyZWVuVHJhbnNpdGlvbilcblxuXHR0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuXHRcblx0Ly9Tb3VuZHNcblx0Ly8gdGhpcy5fYmdNdXNpYyA9IFNvdW5kU0ZYLnBsYXkoJ211c2ljX2luZ2FtZV9sb29wXzAwJywge2xvb3A6dHJ1ZX0pO1xuXHQvLyB0aGlzLl9iZ011c2ljLmZhZGVJbigxLCAxMDAwKTtcblxuXHR0aGlzLnN0YXJ0R2FtZSgpO1xuXHQvLyB0aGlzLmVuZEdhbWUoKTtcbn1cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5zaG93R1VJKCk7XG59XG5cbi8qKlxuICovXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5lbmRHYW1lID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KFxuXHRcdGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRUd2Vlbk1heC5raWxsQWxsKCk7XG5cdFx0XHRDb21tb24uYW5pbWF0b3IucmVtb3ZlQWxsKCk7XG5cblx0XHRcdHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmRpc3BhdGNoKCB0aGlzLl9zY29yZSwgdGhpcy5faGlnaHNjb3JlICk7XG5cdFx0fSwgXG5cdFx0MSwgXG5cdFx0dGhpcyApO1xufVxuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xuXHRpZiAoIENvbW1vbi5rZXlib2FyZC5nZXRLZXlKdXN0UHJlc3NlZCggQ29tbW9uLmtleWJvYXJkLktFWV9RICkgKVxuXHRcdHRoaXMuX2lzUGF1c2VkID0gIXRoaXMuX2lzUGF1c2VkO1xuXHRcblx0aWYgKCAhdGhpcy5faXNQYXVzZWQgKVxuXHR7XG5cdFx0Ly8gVXBkYXRlIHRpbWUuXG5cdFx0aWYgKCB0aGlzLl9sZXZlbC5sZXZlbFJlc3VsdEluZm8udGltZSA+IDAgKVxuXHRcdHtcblx0XHRcdGlmICggdGhpcy5fbGV2ZWwuc3RhdGUgPT0gdGhpcy5fbGV2ZWwuU1RBVEVfSURMRSApXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2xldmVsLmxldmVsUmVzdWx0SW5mby50aW1lIC09IHAzLlRpbWVzdGVwLmRlbHRhVGltZTtcblx0XHRcdFx0aWYgKCB0aGlzLl9sZXZlbC5sZXZlbFJlc3VsdEluZm8udGltZSA8IDAgKVxuXHRcdFx0XHRcdHRoaXMuX2xldmVsLmxldmVsUmVzdWx0SW5mby50aW1lID0gMDtcblx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR0aGlzLl90aW1lVGV4dC50ZXh0ID0gTWF0aC5jZWlsKCB0aGlzLl9sZXZlbC5sZXZlbFJlc3VsdEluZm8udGltZSApLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcblx0XHQvLyBVcGRhdGUgd29ybGQuXG5cdFx0dGhpcy5fbGV2ZWwudXBkYXRlKCk7XG5cdH1cbn1cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKClcbntcblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUuY2FsbCh0aGlzKTtcblxuXHR0aGlzLl9wYXVzZUJ1dHRvbi54ICA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xuXHRcblx0dGhpcy5fdGltZVRleHQueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XG5cdFxuXHR0aGlzLl9sZXZlbC5yZXNpemUoKTtcbn1cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG5cdFNvdW5kU0ZYLnN0b3AoJ211c2ljX2luZ2FtZV9sb29wXzAwJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVJbiA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSlcbntcblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4uY2FsbCh0aGlzKTtcblxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe29uQ29tcGxldGVTY29wZTpzY29wZSwgb25Db21wbGV0ZTpjYWxsYmFja30pO1xuXHR0bC50byh0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLCAwLjUsIHthbHBoYTowLCBlYXNlOkxpbmVhci5lYXNlTm9uZX0pO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwodGhpcyk7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtvbkNvbXBsZXRlU2NvcGU6c2NvcGUsIG9uQ29tcGxldGU6Y2FsbGJhY2t9KTtcblx0dGwudG8odGhpcy5fc2NyZWVuVHJhbnNpdGlvbiwgMC41LCB7YWxwaGE6MSwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9KTtcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG59XG5cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmhpZGVHVUkgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpXG57XG5cdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cdFxuXHRUd2Vlbk1heC5wYXVzZUFsbCgpO1xuXHRcblx0dGhpcy5fcGF1c2VCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuXHRcblx0Y2FsbGJhY2suY2FsbCggc2NvcGUgKTtcblxuXHQvKnZhciB0bCA9IG5ldyBUaW1lbGluZU1heCggeyBvbkNvbXBsZXRlU2NvcGU6c2NvcGUsIG9uQ29tcGxldGU6Y2FsbGJhY2sgfSApO1xuXHR0bC50byggdGhpcy5fcGF1c2VCdXR0b24uc2NhbGUsIC4zNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwICk7XG5cdHRsLnRvKCB0aGlzLl9iZW5NdXRlQnV0dG9uLnNjYWxlLCAuMzUsIHsgeDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW4gfSwgMCApO1xuXHRDb21tb24uYW5pbWF0b3IuYWRkKCB0bCApOyovXG59XG5cbi8qKlxuICovXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5zaG93R1VJID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblx0XG5cdFR3ZWVuTWF4LnJlc3VtZUFsbCgpO1xuXG5cdHRoaXMuX3BhdXNlQnV0dG9uLnZpc2libGUgPSB0cnVlO1xuXHRcblx0Lyp2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0dGwudG8oIHRoaXMuX2Jlbk11dGVCdXR0b24uc2NhbGUsIC41LCB7IHg6MSwgeToxLCBlYXNlOkJhY2suZWFzZU91dCB9LCAwLjQgKTtcblx0dGwudG8oIHRoaXMuX3BhdXNlQnV0dG9uLnNjYWxlLCAuNSwgeyB4OjEsIHk6MSwgZWFzZTpCYWNrLmVhc2VPdXQgfSwgMC41ICk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7Ki9cbn1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uKClcbntcblx0Ly9pZih0aGlzLl9pc1BhdXNlZCkgcmV0dXJuO1xuXHRcblx0dGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcblx0XG5cdC8qdGhpcy5oaWRlR1VJKCk7XG5cdHRoaXMuYW5pbWF0ZU91dChcblx0XHRmdW5jdGlvbigpIHsgdGhpcy5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmRpc3BhdGNoKCk7IH0sIFxuXHRcdHRoaXMgKTsqL1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUucGF1c2VQcmVzc2VkID0gZnVuY3Rpb24oKVxue1xuXHRTb3VuZFNGWC5wbGF5KCBcInNmeF9idG5fcHJlc3NfMDBcIiApO1xuXHRcblx0dGhpcy5fbGV2ZWwucm9vbS5hdmF0YXIuc3RvcFJ1blNmeCgpO1xuXHRwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2Uuc3RvcFNvdW5kKCBcInNmeF9kcmF3X2xvb3BcIiApO1xuXG5cdHRoaXMuc2lnbmFscy5wYXVzZVByZXNzZWQuZGlzcGF0Y2goKTtcbn1cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLm9uTmV4dFJvb20gPSBmdW5jdGlvbiggY3VycmVudFJvb21JbmRleCwgaXNBbGxDb2luc0NvbGxlY3RlZCApXG57XG5cdHRoaXMuX3Jvb21Qcm9ncmVzc0NvbnRhaW5lci5jaGlsZHJlblsgY3VycmVudFJvb21JbmRleCAtIDEgXS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIGlzQWxsQ29pbnNDb2xsZWN0ZWQgPyBcImljb25fcm9vbV9vZmZfZmlsbGVkXCIgOiBcImljb25fcm9vbV9vZmZcIiApO1xuXHR0aGlzLl9yb29tUHJvZ3Jlc3NDb250YWluZXIuY2hpbGRyZW5bIGN1cnJlbnRSb29tSW5kZXggXS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiaWNvbl9yb29tX29uXCIgKTtcbn1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUyAvIFNFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSggXG5cdEdhbWVTY3JlZW4ucHJvdG90eXBlLCBcblx0XCJsZXZlbFwiLCBcblx0eyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH0gfSApO1xuXHRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSggXG5cdEdhbWVTY3JlZW4ucHJvdG90eXBlLCBcblx0XCJyb29tUHJvZ3Jlc3NDb250YWluZXJcIiwgXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3Jvb21Qcm9ncmVzc0NvbnRhaW5lcjsgfSB9ICk7IiwidmFyIENvbW1vbiA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcbnZhciBTaW1wbGVTY3JlZW4gPSByZXF1aXJlKCBcIi4vU2ltcGxlU2NyZWVuXCIgKTtcbnZhciBTb3VuZFNGWCA9IHJlcXVpcmUoIFwiLi4vZ2VuZXJhbC9Tb3VuZFNGWFwiICk7XG52YXIgRG91YmxlU3RhdGVJY29uID0gcmVxdWlyZSggXCIuLi91aS9Eb3VibGVTdGF0ZUljb25cIiApO1xudmFyIFNpbmdsZVN0YXRlSWNvbiA9IHJlcXVpcmUoIFwiLi4vdWkvU2luZ2xlU3RhdGVJY29uXCIgKTtcbnZhciBCZW5NdXRlQnV0dG9uID0gcmVxdWlyZSggXCIuLi91aS9CZW5NdXRlQnV0dG9uXCIgKTtcbnZhciBCZW5CdXR0b24gPSByZXF1aXJlKCBcIi4uL3VpL0JlbkJ1dHRvblwiICk7XG52YXIgQnV0dG9uU3ByaXRlcyA9IHJlcXVpcmUoIFwiLi4vdWkvQnV0dG9uU3ByaXRlc1wiICk7XG52YXIgQmdSaW5nID0gcmVxdWlyZSggXCIuLi91aS9CZ1JpbmdcIiApO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEluc3RydWN0aW9uc1NjcmVlbigpXG57XG5cdC8vIFBhcmVudC5cblx0U2ltcGxlU2NyZWVuLmNhbGwoIHRoaXMgKTtcblx0XG5cdFxuXHQvLyBDb25zdGFudHMuXG5cdHRoaXMuVFVUT1JJQUxfSU5ERVhfSF9QT1NJVElPTlMgPSBbIC02NywgMCwgNjQgXTtcblx0XG5cdFxuXHQvLyBBdHRyaWJ1dGVzLlxuXHR0aGlzLl90dXRvcmlhbEltYWdlSW5kZXggPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluc3RydWN0aW9uc1NjcmVlbjtcbkluc3RydWN0aW9uc1NjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTaW1wbGVTY3JlZW4ucHJvdG90eXBlICk7XG5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW5zdHJ1Y3Rpb25zU2NyZWVuO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKCBcIklOU1RSVUNUSU9OUyBJTklUSUFMSVpFRFwiICk7XG5cblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwoIHRoaXMgKTtcblxuXHQvLyBJbml0IFVJLlxuXHR2YXIgbWVkaXVtQnV0dG9uU3ByaXRlcyA9IG5ldyBCdXR0b25TcHJpdGVzKCk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5ub3JtYWwgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1fb2ZmXCIgKTtcbiAgICBtZWRpdW1CdXR0b25TcHJpdGVzLm92ZXIgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1fb3ZlclwiICk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5pbm5lclJpbmcgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1fb2ZmX3JpbmdfMDAxXCIgKTtcbiAgICBtZWRpdW1CdXR0b25TcHJpdGVzLm91dGVyUmluZyA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vZmZfcmluZ18wMDJcIiApO1xuXHR2YXIgbGFyZ2VCdXR0b25TcHJpdGVzID0gbmV3IEJ1dHRvblNwcml0ZXMoKTtcbiAgICBsYXJnZUJ1dHRvblNwcml0ZXMubm9ybWFsID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbGFyZ2Vfb2ZmXCIgKTtcbiAgICBsYXJnZUJ1dHRvblNwcml0ZXMub3ZlciA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX292ZXJcIiApO1xuICAgIGxhcmdlQnV0dG9uU3ByaXRlcy5pbm5lclJpbmcgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZfcmluZ18wMDFcIiApO1xuICAgIGxhcmdlQnV0dG9uU3ByaXRlcy5vdXRlclJpbmcgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZfcmluZ18wMDJcIiApO1xuXHRcblx0dGhpcy5fY29udGFpbmVyICAgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0dGhpcy5fY29udGFpbmVyLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjU7XG5cdHRoaXMuX2NvbnRhaW5lci55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9jb250YWluZXIgKTtcblxuXHQvLyBCYWNrZ3JvdW5kLlxuXHR0aGlzLl9iZyA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwicGF1c2VkX2JnXCIgKSApO1xuXHR0aGlzLl9iZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fYmcuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XHRcblx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKCB0aGlzLl9iZyApO1xuXHRcblx0Ly8gVHV0b3JpYWwgaW1hZ2VzLlxuXHR0aGlzLl9hcnJUdXRvcmlhbEltYWdlID0gW107XG5cdHZhciBUVVRPUklBTF9JTUFHRV9JRFMgPSBbIFxuXHRcdHAzLkRldmljZS5pc01vYmlsZSA/IFwidHV0b3JpYWxzL3R1dG9yaWFsX21vYmlsZV9iZW4wMDFcIiA6IFwidHV0b3JpYWxzL3R1dG9yaWFsX2Rlc2t0b3BfYmVuMDAxXCIsIFxuXHRcdFwidHV0b3JpYWxzL3R1dG9yaWFsX2JlbjAwMlwiLFxuXHRcdFwidHV0b3JpYWxzL3R1dG9yaWFsX2JlbjAwM1wiIF07XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IDM7ICsraSApXG5cdHtcblx0XHR2YXIgdHV0b3JpYWxJbWFnZSA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFRVVE9SSUFMX0lNQUdFX0lEU1sgaSBdICkgKTtcblx0XHR0dXRvcmlhbEltYWdlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1x0XG5cdFx0dHV0b3JpYWxJbWFnZS5wb3NpdGlvbi55ID0gLTM1O1xuXHRcdHR1dG9yaWFsSW1hZ2UudmlzaWJsZSA9IGkgPT0gMDtcblx0XHRcblx0XHR0aGlzLl9hcnJUdXRvcmlhbEltYWdlLnB1c2goIHR1dG9yaWFsSW1hZ2UgKTtcdFx0XG5cdFx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKCB0dXRvcmlhbEltYWdlICk7XG5cdH1cblx0XG5cdC8vIFR1dG9yaWFsIGluZGV4IGltYWdlLlxuXHR0aGlzLl90dXRvcmlhbEluZGV4SW1hZ2UgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGlja3VwXzAwXCIpICk7XG5cdHRoaXMuX3R1dG9yaWFsSW5kZXhJbWFnZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggLjUsIC41ICk7XG5cdHRoaXMuX3R1dG9yaWFsSW5kZXhJbWFnZS5wb3NpdGlvbi54ID0gdGhpcy5UVVRPUklBTF9JTkRFWF9IX1BPU0lUSU9OU1sgdGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4IF07XG5cdHRoaXMuX3R1dG9yaWFsSW5kZXhJbWFnZS5wb3NpdGlvbi55ID0gMTM1O1xuXHR0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQoIHRoaXMuX3R1dG9yaWFsSW5kZXhJbWFnZSApO1xuXHRcblx0Ly8gVGl0bGUuXG5cdHZhciBqc29uSW5zdHJ1Y3Rpb25zVGV4dCA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKCBcImNvbmZpZ1wiIClbICdjb3B5JyBdWyBcIklOU1RSVUNUSU9OU1wiIF1bIENvbW1vbi5DT1VOVFJZX0NPREUgXTtcblx0aWYgKCBDb21tb24uQ09VTlRSWV9DT0RFICE9IFwiYXJcIiAmJiBDb21tb24uQ09VTlRSWV9DT0RFICE9IFwicnVcIiApIFxuICAgICAgICB0aGlzLl90aXRsZVRleHQgPSBuZXcgUElYSS5leHRyYXMuQml0bWFwVGV4dCgganNvbkluc3RydWN0aW9uc1RleHQudGV4dCwgeyBmb250OiBcImFoa2lvXzc1X3BhdXNlZFwiLCBhbGlnbjogXCJjZW50ZXJcIiB9ICk7XG5cdGVsc2UgXG4gICAgICAgIHRoaXMuX3RpdGxlVGV4dCA9IG5ldyBQSVhJLlRleHQoIFxuXHRcdFx0anNvbkluc3RydWN0aW9uc1RleHQudGV4dCwgXG5cdFx0XHR7IGZvbnQ6IFwiODBweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkZGRkZcIiwgc3Ryb2tlOiBcIiMwNDQzMDBcIiwgc3Ryb2tlVGhpY2tuZXNzOiAxMCwgYWxpZ246IFwiY2VudGVyXCIgfSApOyAgICBcblx0dGhpcy5fdGl0bGVUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX3RpdGxlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0Q29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNSAtIDMwMCApO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl90aXRsZVRleHQgKTtcdFxuXHRcblx0Ly8gUGxheSBidXR0b24uXG5cdC8vIEJ1dHRvbi5cdFxuXHR0aGlzLl9wbGF5QnV0dG9uID0gbmV3IEJlbkJ1dHRvbiggbGFyZ2VCdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX3BsYXlCdXR0b24ucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXG5cdFx0Q29tbW9uLlNUQUdFX1dJRFRIICogLjUgKyA0MDAsIFxuXHRcdENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgKyAyNDAgKTtcblx0dGhpcy5fcGxheUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkT25jZSggdGhpcy5wbGF5UHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9wbGF5QnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5fcGxheUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLCAwICk7XG5cdHRoaXMuX3BsYXlCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdC8vIEljb24uXG5cdHRoaXMuX3BsYXlJY29uID0gbmV3IFNpbmdsZVN0YXRlSWNvbiggXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9pY29uX3BsYXlfb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX2ljb25fcGxheV9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX3BsYXlCdXR0b24gKTtcblx0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX3BsYXlCdXR0b24gKTtcblx0XG5cdC8vIE11dGUgYnV0dG9uLlxuXHR2YXIgbXV0ZUljb24gPSBuZXcgRG91YmxlU3RhdGVJY29uKCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9hdWRpb19vZmZcIiApLCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9tdXRlX29mZlwiICksIFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX2F1ZGlvX292ZXJcIiApLCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9tdXRlX292ZXJcIiApICk7XG5cdG11dGVJY29uLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHQvLyBCdXR0b24uXG5cdHRoaXMuX2Jlbk11dGVCdXR0b24gPSBuZXcgQmVuTXV0ZUJ1dHRvbiggbWVkaXVtQnV0dG9uU3ByaXRlcywgbXV0ZUljb24gKTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9iZW5NdXRlQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fYmVuTXV0ZUJ1dHRvbiApO1xuXHRcblx0Ly8gSG9tZSBidXR0b24uXG5cdC8vIEJ1dHRvbi5cblx0dGhpcy5faG9tZUJ1dHRvbiA9IG5ldyBCZW5CdXR0b24oIG1lZGl1bUJ1dHRvblNwcml0ZXMgKTtcblx0dGhpcy5faG9tZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0dGhpcy5faG9tZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1x0XHRcblx0dGhpcy5faG9tZUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkT25jZSggdGhpcy5ob21lUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9ob21lQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0Ly90aGlzLl9ob21lQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX2hvbWVCdXR0b24uaW5pdCgpO1xuXHQvLyBJY29uLlxuXHR0aGlzLl9ob21lSWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25faG9tZV9vZmZcIiApLFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25faG9tZV9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX2hvbWVCdXR0b25cblx0XHQpO1x0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2hvbWVCdXR0b24gKTtcblx0XG5cdC8vIE5leHQgaW1hZ2UgYnV0dG9uLlxuXHQvLyBCdXR0b24uXG5cdHRoaXMuX25leHRUdXRvcmlhbEltYWdlQnV0dG9uID0gbmV3IEJlbkJ1dHRvbiggbWVkaXVtQnV0dG9uU3ByaXRlcyApO1xuXHR0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvbi54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41ICsgNDQwO1xuXHR0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNSAtIDI1O1x0XHRcblx0dGhpcy5fbmV4dFR1dG9yaWFsSW1hZ2VCdXR0b24uc2lnbmFscy5kb3duLmFkZCggdGhpcy5uZXh0VHV0b3JpYWxJbWFnZVByZXNzZWQsIHRoaXMgKTtcblx0dGhpcy5fbmV4dFR1dG9yaWFsSW1hZ2VCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHR0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLCAwICk7XG5cdHRoaXMuX25leHRUdXRvcmlhbEltYWdlQnV0dG9uLmFuaW1hdGUgPSB0cnVlO1xuXHQvLyBJY29uLlxuXHR0aGlzLl9uZXh0Q2hhcHRlckljb24gPSBuZXcgU2luZ2xlU3RhdGVJY29uKCBcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX25leHRfb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX25leHRfb3ZlclwiICksXG5cdFx0XHR0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvblxuXHRcdCk7XHRcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fbmV4dFR1dG9yaWFsSW1hZ2VCdXR0b24gKTtcblx0XG5cdC8vIFByZXZpb3VzIGltYWdlIGJ1dHRvbi5cblx0Ly8gQnV0dG9uLlxuXHR0aGlzLl9wcmV2VHV0b3JpYWxJbWFnZUJ1dHRvbiA9IG5ldyBCZW5CdXR0b24oIG1lZGl1bUJ1dHRvblNwcml0ZXMgKTtcblx0dGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b24ueCA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIDQ0MDtcblx0dGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b24ueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgLSAyNTtcdFx0XG5cdHRoaXMuX3ByZXZUdXRvcmlhbEltYWdlQnV0dG9uLnNpZ25hbHMuZG93bi5hZGQoIHRoaXMucHJldlR1dG9yaWFsSW1hZ2VQcmVzc2VkLCB0aGlzICk7XG5cdHRoaXMuX3ByZXZUdXRvcmlhbEltYWdlQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMCwgMCApO1xuXHR0aGlzLl9wcmV2VHV0b3JpYWxJbWFnZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0Ly8gSWNvbi5cblx0dGhpcy5fcHJldkNoYXB0ZXJJY29uID0gbmV3IFNpbmdsZVN0YXRlSWNvbiggXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9uZXh0X29mZlwiICksXG5cdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9uZXh0X292ZXJcIiApLFxuXHRcdFx0dGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b25cblx0XHQpO1xuXHR0aGlzLl9wcmV2Q2hhcHRlckljb24uc2NhbGUueCA9IC0xO1x0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX3ByZXZUdXRvcmlhbEltYWdlQnV0dG9uICk7XG5cdFxuXHQvLyBCbGFjayBzY3JlZW5cblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbiA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10pO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmFscGhhID0gMTtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLnggPSAtQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3NjcmVlblRyYW5zaXRpb24pXG5cblx0Ly9Tb3VuZHNcblx0Ly8gdGhpcy5fYmdNdXNpYyA9IFNvdW5kU0ZYLnBsYXkoJ211c2ljX2xvb3BfdHJhY2snLCB7dm9sdW1lOjAuNjYsIGxvb3A6dHJ1ZX0pO1xufTtcblxuLyoqXG4gKi9cbkluc3RydWN0aW9uc1NjcmVlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xufTtcblxuLyoqXG4gKi9cbkluc3RydWN0aW9uc1NjcmVlbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG5cdHRoaXMuX2hvbWVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XG59O1xuXG4vKipcbiAqL1xuSW5zdHJ1Y3Rpb25zU2NyZWVuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxue1xuXHQvLyBTb3VuZFNGWC5zdG9wKCdtdXNpY19tZW51X2xvb3BfMDAnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuSW5zdHJ1Y3Rpb25zU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbiggY2FsbGJhY2ssIHNjb3BlIClcbntcblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4uY2FsbCggdGhpcyApO1xuXG5cdC8vIEJ1dHRvbnNcblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cdFxuXHR0bC50byggdGhpcy5fcGxheUJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC4xICk7XG5cdHRsLnRvKCB0aGlzLl9uZXh0VHV0b3JpYWxJbWFnZUJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC4xICk7XG5cdHRsLnRvKCB0aGlzLl9wcmV2VHV0b3JpYWxJbWFnZUJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC4xICk7XG5cdFx0XG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuSW5zdHJ1Y3Rpb25zU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSApXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKCB0aGlzICk7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCB7IG9uQ29tcGxldGU6Y2FsbGJhY2ssIG9uQ29tcGxldGVTY29wZTpzY29wZSB9ICk7XG5cblx0Ly8gQnV0dG9uc1xuXHR0bC50byggdGhpcy5fcGxheUJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAgKTtcblx0dGwudG8oIHRoaXMuX25leHRUdXRvcmlhbEltYWdlQnV0dG9uLnNjYWxlLCAwLjUsIHsgeDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW4gfSwgMCApO1xuXHR0bC50byggdGhpcy5fcHJldlR1dG9yaWFsSW1hZ2VCdXR0b24uc2NhbGUsIDAuNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwICk7XG5cdHRsLnRvKCB0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLCAwLjcsIHsgeDowLCBlYXNlOlNpbmUuZWFzZU91dCB9LCAwLjYgKTtcblxuXHRDb21tb24uYW5pbWF0b3IuYWRkKCB0bCApO1xuXG5cdC8vIHRoaXMuX2JnTXVzaWMuZmFkZU91dCgwLCAxMDAwKTtcbn07XG5cbi8qKlxuICovXG5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZVVJID0gZnVuY3Rpb24oKVxue1xuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLl9hcnJUdXRvcmlhbEltYWdlLmxlbmd0aDsgKytpIClcblx0XHR0aGlzLl9hcnJUdXRvcmlhbEltYWdlWyBpIF0udmlzaWJsZSA9IGkgPT0gdGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4O1xuXHRcdFxuXHR0aGlzLl90dXRvcmlhbEluZGV4SW1hZ2UucG9zaXRpb24ueCA9IHRoaXMuVFVUT1JJQUxfSU5ERVhfSF9QT1NJVElPTlNbIHRoaXMuX3R1dG9yaWFsSW1hZ2VJbmRleCBdO1xufVxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLnBsYXlQcmVzc2VkID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMuZG93bi5yZW1vdmUoIHRoaXMucGxheVByZXNzZWQsIHRoaXMgKTtcblx0VHdlZW5NYXgua2lsbFR3ZWVuc09mKCB0aGlzLl9wbGF5QnV0dG9uLnNjYWxlICk7XG5cblx0dGhpcy5hbmltYXRlT3V0KFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpOyB9LCBcblx0XHR0aGlzICk7XG5cblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59O1xuXG4vKipcbiAqL1xuSW5zdHJ1Y3Rpb25zU2NyZWVuLnByb3RvdHlwZS5ob21lUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5hbmltYXRlT3V0KCBcblx0XHRmdW5jdGlvbigpIHsgdGhpcy5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmRpc3BhdGNoKCk7IH0sIFxuXHRcdHRoaXMgKTtcblxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5JbnN0cnVjdGlvbnNTY3JlZW4ucHJvdG90eXBlLm5leHRUdXRvcmlhbEltYWdlUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0Kyt0aGlzLl90dXRvcmlhbEltYWdlSW5kZXg7XG5cdGlmICggdGhpcy5fdHV0b3JpYWxJbWFnZUluZGV4ID49IHRoaXMuX2FyclR1dG9yaWFsSW1hZ2UubGVuZ3RoIClcblx0XHR0aGlzLl90dXRvcmlhbEltYWdlSW5kZXggPSAwO1xuXG5cdHRoaXMudXBkYXRlVUkoKTtcblx0XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuLyoqXG4gKi9cbkluc3RydWN0aW9uc1NjcmVlbi5wcm90b3R5cGUucHJldlR1dG9yaWFsSW1hZ2VQcmVzc2VkID0gZnVuY3Rpb24oKVxue1xuXHQtLXRoaXMuX3R1dG9yaWFsSW1hZ2VJbmRleDtcblx0aWYgKCB0aGlzLl90dXRvcmlhbEltYWdlSW5kZXggPCAwIClcblx0XHR0aGlzLl90dXRvcmlhbEltYWdlSW5kZXggPSB0aGlzLl9hcnJUdXRvcmlhbEltYWdlLmxlbmd0aCAtIDE7XG5cblx0dGhpcy51cGRhdGVVSSgpO1xuXHRcblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59OyIsInZhciBDb21tb24gICAgICAgPSByZXF1aXJlKCBcIi4uL0NvbW1vblwiICk7XG52YXIgU2ltcGxlU2NyZWVuID0gcmVxdWlyZSggXCIuL1NpbXBsZVNjcmVlblwiICk7XG52YXIgU291bmRTRlggICAgID0gcmVxdWlyZSggXCIuLi9nZW5lcmFsL1NvdW5kU0ZYXCIgKTtcbnZhciBHbG9iYWwgICAgID0gcmVxdWlyZSggXCIuLi9nZW5lcmFsL0dsb2JhbFwiICk7XG52YXIgRG91YmxlU3RhdGVJY29uID0gcmVxdWlyZSggXCIuLi91aS9Eb3VibGVTdGF0ZUljb25cIiApO1xudmFyIFNpbmdsZVN0YXRlSWNvbiA9IHJlcXVpcmUoIFwiLi4vdWkvU2luZ2xlU3RhdGVJY29uXCIgKTtcbnZhciBCZW5NdXRlQnV0dG9uID0gcmVxdWlyZSggXCIuLi91aS9CZW5NdXRlQnV0dG9uXCIgKTtcbnZhciBCZW5CdXR0b24gPSByZXF1aXJlKCBcIi4uL3VpL0JlbkJ1dHRvblwiICk7XG52YXIgTGV2ZWxCdXR0b24gPSByZXF1aXJlKCBcIi4uL3VpL0xldmVsQnV0dG9uXCIgKTtcbnZhciBCdXR0b25TcHJpdGVzID0gcmVxdWlyZSggXCIuLi91aS9CdXR0b25TcHJpdGVzXCIgKTtcbnZhciBCZ1JpbmcgPSByZXF1aXJlKCBcIi4uL3VpL0JnUmluZ1wiICk7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTGV2ZWxTZWxlY3Rpb25TY3JlZW4oKVxue1xuXHRTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcblx0XG5cdFxuXHQvLyBTZWxlY3RlZCBjaGFwdGVyLlxuXHR0aGlzLl9jaGFwdGVySW5kZXggPSAwO1xuXHR0aGlzLl9hcnJMZXZlbEJ1dHRvbiA9IFtdO1xuXHR0aGlzLl9sZXZlbFNlbGVjdGlvbkJ1dHRvbkNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9jaGFwdGVyU2VsZWN0aW9uVGltZWxpbmUgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7U2lnbmFsfVxuXHQgKi9cblx0dGhpcy5zaWduYWxzLmxlYWRlcmJvYXJkUHJlc3NlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXHR0aGlzLnNpZ25hbHMudGVybXNQcmVzc2VkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWxTZWxlY3Rpb25TY3JlZW47XG5MZXZlbFNlbGVjdGlvblNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuTGV2ZWxTZWxlY3Rpb25TY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGV2ZWxTZWxlY3Rpb25TY3JlZW47XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cbkxldmVsU2VsZWN0aW9uU2NyZWVuLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCggdGhpcyApO1xuXHRcblx0XG5cdC8vIEZpbmQgdGhlIGhpZ2hlc3QgcGxheWFibGUgY2hhcHRlci5cblx0dmFyIGlzQ2hhcHRlckluZGV4Rm91bmQgPSBmYWxzZTtcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgQ29tbW9uLnNhdmVkRGF0YS5hcnJMZXZlbFJlc3VsdC5sZW5ndGg7ICsraSApXG5cdHtcblx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCBDb21tb24uc2F2ZWREYXRhLmFyckxldmVsUmVzdWx0WyBpIF0ubGVuZ3RoOyArK2ogKVxuXHRcdHtcblx0XHRcdGlmICggQ29tbW9uLnNhdmVkRGF0YS5hcnJMZXZlbFJlc3VsdFsgaSBdWyBqIF0uc2NvcmUgPT0gMCApXG5cdFx0XHR7XG5cdFx0XHRcdGlzQ2hhcHRlckluZGV4Rm91bmQgPSB0cnVlO1xuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgbGFzdCBzY29yZWQgbGV2ZWwgaXMgdGhlIGxhc3Qgb25lIG9mIHRoZSBjaGFwdGVyLlxuXHRcdFx0XHRpZiAoIGogPT0gMCAmJiB0aGlzLl9jaGFwdGVySW5kZXggPiAwIClcblx0XHRcdFx0XHR0aGlzLl9jaGFwdGVySW5kZXggKz0gMTtcblx0XHRcdFx0XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRpZiAoIGlzQ2hhcHRlckluZGV4Rm91bmQgKVxuXHRcdFx0YnJlYWs7XG5cdFx0XHRcdFxuXHRcdHRoaXMuX2NoYXB0ZXJJbmRleCA9IGk7XG5cdH1cblx0XHRcblx0Ly8gQ3JlYXRlIFVJIGVsZW1lbnRzLlxuXHQvLyBCdXR0b24gc3ByaXRlcy5cblx0dmFyIG1lZGl1bUJ1dHRvblNwcml0ZXMgICAgXHQgICA9IG5ldyBCdXR0b25TcHJpdGVzKCk7XG4gICAgbWVkaXVtQnV0dG9uU3ByaXRlcy5ub3JtYWwgICAgICAgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1fb2ZmXCIgKTtcbiAgICBtZWRpdW1CdXR0b25TcHJpdGVzLm92ZXIgICAgICAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vdmVyXCIgKTtcbiAgICBtZWRpdW1CdXR0b25TcHJpdGVzLmlubmVyUmluZyAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vZmZfcmluZ18wMDFcIiApO1xuICAgIG1lZGl1bUJ1dHRvblNwcml0ZXMub3V0ZXJSaW5nICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZl9yaW5nXzAwMlwiICk7XG5cdFxuXHQvLyBNYWluIGNvbnRhaW5lci5cblx0dGhpcy5fY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG5cdHRoaXMuX2NvbnRhaW5lci54ID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuXHR0aGlzLl9jb250YWluZXIueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2NvbnRhaW5lciApO1xuXHRcblx0Ly8gQmFja2dyb3VuZC5cblx0dGhpcy5fYmcgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJnX3VpXCIgKSApO1xuXHR0aGlzLl9iZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fYmcuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fYmcgKTtcblx0XG5cdC8vIEJhY2tncm91bmQgYW5pbWF0ZWQgcmluZy5cblx0dGhpcy5fYmdSaW5nID0gbmV3IEJnUmluZyggXCJwYW5lbC9lbmRfZ2FtZV9wYW5lbF8wMDNcIiwgXCJwYW5lbC9lbmRfZ2FtZV9wYW5lbF8wMDJcIiwgXCJwYW5lbC9lbmRfZ2FtZV9wYW5lbF8wMDFcIiApO1xuXHR0aGlzLl9iZ1JpbmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIC41LCAuNSApO1xuXHR0aGlzLl9iZ1JpbmcucGxheSgpO1x0XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fYmdSaW5nICk7XG5cdFxuXHQvLyBDaGFwdGVyIGltYWdlLlxuXHR2YXIgbXlNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblx0bXlNYXNrLmJlZ2luRmlsbCgpO1xuXHRteU1hc2suZHJhd0NpcmNsZSggMCwgMCwgMjAwICk7XG5cdG15TWFzay5lbmRGaWxsKCk7XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggbXlNYXNrICk7XG5cdFxuXHR0aGlzLl9jaGFwdGVySW1hZ2UgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImltYWdlX2NoYXBlcl9cIiArICggdGhpcy5fY2hhcHRlckluZGV4ICsgMSApICkgKTtcblx0dGhpcy5fY2hhcHRlckltYWdlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHR0aGlzLl9jaGFwdGVySW1hZ2UubWFzayA9IG15TWFzaztcblx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKCB0aGlzLl9jaGFwdGVySW1hZ2UgKTtcblx0XG5cdHRoaXMuX2FuaW1DaGFwdGVySW1hZ2UgPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImltYWdlX2NoYXBlcl9cIiArICggdGhpcy5fY2hhcHRlckluZGV4ICsgMSApICkgKTtcdFxuXHR0aGlzLl9hbmltQ2hhcHRlckltYWdlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHR0aGlzLl9hbmltQ2hhcHRlckltYWdlLm1hc2sgPSBteU1hc2s7XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fYW5pbUNoYXB0ZXJJbWFnZSApO1x0XG5cblx0Ly8gVGl0bGUgdGV4dC5cblx0dmFyIGpzb25DaGFwdGVyVGl0bGUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0SlNPTiggXCJjb25maWdcIiApWyAnY29weScgXVsgXCJDSEFQVEVSX1wiICsgKCB0aGlzLl9jaGFwdGVySW5kZXggKyAxICkgKyBcIl9USVRMRVwiIF1bIENvbW1vbi5DT1VOVFJZX0NPREUgXTtcblx0aWYgKCBDb21tb24uQ09VTlRSWV9DT0RFICE9IFwiYXJcIiAmJiBDb21tb24uQ09VTlRSWV9DT0RFICE9IFwicnVcIiApIFxuXHR7XG4gICAgICAgIHRoaXMuX3RvcFRpdGxlVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCBqc29uQ2hhcHRlclRpdGxlWyBcInRvcFwiIF0sIHsgZm9udDogXCI1MHB4IGFoa2lvXzc1X3BhdXNlZFwiLCBhbGlnbjogXCJjZW50ZXJcIiB9ICk7XG5cdFx0dGhpcy5fYm90VGl0bGVUZXh0ID0gbmV3IFBJWEkuZXh0cmFzLkJpdG1hcFRleHQoIGpzb25DaGFwdGVyVGl0bGVbIFwiYm90XCIgXSwgeyBmb250OiBcImFoa2lvXzc1X3BhdXNlZFwiLCBhbGlnbjogXCJjZW50ZXJcIiB9ICk7XG5cdH1cblx0ZWxzZVxuXHR7XHRcbiAgICAgICAgdGhpcy5fdG9wVGl0bGVUZXh0ID0gbmV3IFBJWEkuVGV4dCggXG5cdFx0XHRqc29uQ2hhcHRlclRpdGxlWyBcInRvcFwiIF0sIFxuXHRcdFx0eyBmb250OiBcIjU1cHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIHN0cm9rZTogXCIjMDQ0MzAwXCIsIHN0cm9rZVRoaWNrbmVzczogMTAsIGFsaWduOiBcImNlbnRlclwiIH0gKTsgICAgXG5cdFx0dGhpcy5fYm90VGl0bGVUZXh0ID0gbmV3IFBJWEkuVGV4dCggXG5cdFx0XHRqc29uQ2hhcHRlclRpdGxlWyBcImJvdFwiIF0sIFxuXHRcdFx0eyBmb250OiBcIjgwcHggQXJpYWxcIiwgZmlsbDogXCIjRkZGRkZGXCIsIHN0cm9rZTogXCIjMDQ0MzAwXCIsIHN0cm9rZVRoaWNrbmVzczogMTAsIGFsaWduOiBcImNlbnRlclwiIH0gKTsgICAgXG5cdH1cblx0dGhpcy5fdG9wVGl0bGVUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX3RvcFRpdGxlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0Q29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuMDQgKTtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fdG9wVGl0bGVUZXh0ICk7XHRcblx0XG5cdHRoaXMuX2JvdFRpdGxlVGV4dC5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCBcblx0XHRDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSB0aGlzLl9ib3RUaXRsZVRleHQud2lkdGggKiAwLjUsIFxuXHRcdENvbW1vbi5DT1VOVFJZX0NPREUgIT0gXCJhclwiICYmIENvbW1vbi5DT1VOVFJZX0NPREUgIT0gXCJydVwiICA/IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjEgOiBDb21tb24uU1RBR0VfSEVJR0hUICogMC4xMyApO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9ib3RUaXRsZVRleHQgKTtcdFxuXHRcblx0Ly8gTmV4dCBjaGFwdGVyIGJ1dHRvbi5cblx0Ly8gQnV0dG9uLlxuXHRjb25zdCBORVhUX0NIQVBURVJfQlVUVE9OX1JBRElVUyA9IDQ3NTtcblx0dGhpcy5fbmV4dENoYXB0ZXJCdXR0b24gPSBuZXcgQmVuQnV0dG9uKCBtZWRpdW1CdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX25leHRDaGFwdGVyQnV0dG9uLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgKyBORVhUX0NIQVBURVJfQlVUVE9OX1JBRElVUztcblx0dGhpcy5fbmV4dENoYXB0ZXJCdXR0b24ueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XHRcdFxuXHR0aGlzLl9uZXh0Q2hhcHRlckJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKCB0aGlzLm5leHRDaGFwdGVyUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9uZXh0Q2hhcHRlckJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdHRoaXMuX25leHRDaGFwdGVyQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0dGhpcy5fbmV4dENoYXB0ZXJCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdC8vIEljb24uXG5cdHRoaXMuX25leHRDaGFwdGVySWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbmV4dF9vZmZcIiApLFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbmV4dF9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX25leHRDaGFwdGVyQnV0dG9uXG5cdFx0KTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9uZXh0Q2hhcHRlckJ1dHRvbiApO1xuXHRcblx0Ly8gUHJldmlvdXMgY2hhcHRlciBidXR0b24uXG5cdC8vIEJ1dHRvbi5cblx0dGhpcy5fcHJldkNoYXB0ZXJCdXR0b24gPSBuZXcgQmVuQnV0dG9uKCBtZWRpdW1CdXR0b25TcHJpdGVzICk7XG5cdHRoaXMuX3ByZXZDaGFwdGVyQnV0dG9uLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSBORVhUX0NIQVBURVJfQlVUVE9OX1JBRElVUztcblx0dGhpcy5fcHJldkNoYXB0ZXJCdXR0b24ueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XHRcdFxuXHR0aGlzLl9wcmV2Q2hhcHRlckJ1dHRvbi5zaWduYWxzLmRvd24uYWRkKCB0aGlzLnByZXZDaGFwdGVyUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9wcmV2Q2hhcHRlckJ1dHRvbi5vdmVyU291bmROYW1lID0gXCJzZnhfYnRuX3JvbGxvdmVyXzAwXCI7XG5cdHRoaXMuX3ByZXZDaGFwdGVyQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0dGhpcy5fcHJldkNoYXB0ZXJCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG5cdC8vIEljb24uXG5cdHRoaXMuX3ByZXZDaGFwdGVySWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbmV4dF9vZmZcIiApLFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbmV4dF9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX3ByZXZDaGFwdGVyQnV0dG9uXG5cdFx0KTtcblx0dGhpcy5fcHJldkNoYXB0ZXJJY29uLnNjYWxlLnggPSAtMTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9wcmV2Q2hhcHRlckJ1dHRvbiApO1xuXHRcdFxuXHQvLyBMZXZlbCBzZWxlY3Rpb24gYnV0dG9ucy5cblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fbGV2ZWxTZWxlY3Rpb25CdXR0b25Db250YWluZXIgKTtcblx0dGhpcy5jcmVhdGVMZXZlbFNlbGVjdGlvbkJ1dHRvbnMoIHRydWUgKTtcblx0XG5cdC8vIE11dGUgYnV0dG9uLlxuXHQvLyBJY29uLlxuXHR2YXIgbXV0ZUljb24gPSBuZXcgRG91YmxlU3RhdGVJY29uKCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9hdWRpb19vZmZcIiApLCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9tdXRlX29mZlwiICksIFxuXHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9pY29uX2F1ZGlvX292ZXJcIiApLCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9tdXRlX292ZXJcIiApICk7XG5cdG11dGVJY29uLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHQvLyBCdXR0b24uXG5cdHRoaXMuX2Jlbk11dGVCdXR0b24gPSBuZXcgQmVuTXV0ZUJ1dHRvbiggbWVkaXVtQnV0dG9uU3ByaXRlcywgbXV0ZUljb24gKTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xuXHR0aGlzLl9iZW5NdXRlQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fYmVuTXV0ZUJ1dHRvbiApO1xuXHRcblx0Ly8gSG9tZSBidXR0b24uXG5cdC8vIEJ1dHRvbi5cblx0dGhpcy5faG9tZUJ1dHRvbiA9IG5ldyBCZW5CdXR0b24oIG1lZGl1bUJ1dHRvblNwcml0ZXMgKTtcblx0dGhpcy5faG9tZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0dGhpcy5faG9tZUJ1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1x0XHRcblx0dGhpcy5faG9tZUJ1dHRvbi5zaWduYWxzLmRvd24uYWRkT25jZSggdGhpcy5ob21lUHJlc3NlZCwgdGhpcyApO1xuXHR0aGlzLl9ob21lQnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF9idG5fcm9sbG92ZXJfMDBcIjtcblx0Ly90aGlzLl9ob21lQnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG5cdHRoaXMuX2hvbWVCdXR0b24uaW5pdCgpO1xuXHQvLyBJY29uLlxuXHR0aGlzLl9uZXh0Q2hhcHRlSWNvbiA9IG5ldyBTaW5nbGVTdGF0ZUljb24oIFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25faG9tZV9vZmZcIiApLFxuXHRcdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25faG9tZV9vdmVyXCIgKSxcblx0XHRcdHRoaXMuX2hvbWVCdXR0b25cblx0XHQpO1x0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2hvbWVCdXR0b24gKTtcblxuXHQvLyBCbGFjayBzY3JlZW4uXG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24gPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWydibGFja1NxdWFyZSddKTtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi5hbHBoYSA9IDE7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24ud2lkdGggPSBDb21tb24uU1RBR0VfV0lEVEg7XG5cdHRoaXMuX3NjcmVlblRyYW5zaXRpb24uaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi54ID0gLUNvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zY3JlZW5UcmFuc2l0aW9uKVxuXHRcblx0Ly9Tb3VuZHNcblx0Ly8gdGhpcy5fYmdNdXNpYyA9IFNvdW5kU0ZYLnBsYXkoJ211c2ljX2xvb3BfdHJhY2snLCB7dm9sdW1lOjAuNjYsIGxvb3A6dHJ1ZX0pO1xufVxuXG4vKipcbiAqL1xuTGV2ZWxTZWxlY3Rpb25TY3JlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcbn1cblxuLyoqXG4gKi9cbkxldmVsU2VsZWN0aW9uU2NyZWVuLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXG57XG5cblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuX2Jlbk11dGVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xuXHR0aGlzLl9ob21lQnV0dG9uLnggPSB0aGlzLl9nZXRGaXJzdEJ1dHRvblBvc2l0aW9uTGVmdCgpO1xufVxuXG4vKipcbiAqL1xuTGV2ZWxTZWxlY3Rpb25TY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG5cdC8vIFNvdW5kU0ZYLnN0b3AoJ211c2ljX21lbnVfbG9vcF8wMCcpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX1zY29wZVxuICovXG5MZXZlbFNlbGVjdGlvblNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSApXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwoIHRoaXMgKTtcblxuXHQvLyBCdXR0b25zXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fYXJyTGV2ZWxCdXR0b24ubGVuZ3RoOyArK2kgKVxuXHRcdHRsLnRvKCB0aGlzLl9hcnJMZXZlbEJ1dHRvblsgaSBdLnNjYWxlLCAxLCB7IHg6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dH0sIDAuNiArIGkgKiAwLjA1ICk7XG5cdHRsLnRvKCB0aGlzLl9uZXh0Q2hhcHRlckJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC42ICk7XG5cdHRsLnRvKCB0aGlzLl9wcmV2Q2hhcHRlckJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC42ICk7XG5cdC8vdGwudG8oIHRoaXMuX2Jlbk11dGVCdXR0b24uc2NhbGUsIDEsIHsgeDoxLCB5OjEsIGVhc2U6RWxhc3RpYy5lYXNlT3V0IH0sIDAuNCApO1xuXHQvL3RsLnRvKCB0aGlzLl9ob21lQnV0dG9uLnNjYWxlLCAxLCB7IHg6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dCB9LCAwLjQgKTtcblx0XHRcblx0Q29tbW9uLmFuaW1hdG9yLmFkZCggdGwgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5MZXZlbFNlbGVjdGlvblNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKCBjYWxsYmFjaywgc2NvcGUgKVxue1xuXHRTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbCggdGhpcyApO1xuXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgge29uQ29tcGxldGU6Y2FsbGJhY2ssIG9uQ29tcGxldGVTY29wZTpzY29wZX0gKTtcblxuXHQvLyBCdXR0b25zXG5cdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX2FyckxldmVsQnV0dG9uLmxlbmd0aDsgKytpIClcblx0XHR0bC50byggdGhpcy5fYXJyTGV2ZWxCdXR0b25bIGkgXS5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAgKTtcblx0Ly90bC50byggdGhpcy5fYmVuTXV0ZUJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAuMSApO1xuXHQvL3RsLnRvKCB0aGlzLl9ob21lQnV0dG9uLnNjYWxlLCAwLjUsIHsgeDowLCB5OjAsIGVhc2U6QmFjay5lYXNlSW4gfSwgMC4xICk7XG5cdHRsLnRvKCB0aGlzLl9wcmV2Q2hhcHRlckJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAuMSApO1xuXHR0bC50byggdGhpcy5fbmV4dENoYXB0ZXJCdXR0b24uc2NhbGUsIDAuNSwgeyB4OjAsIHk6MCwgZWFzZTpCYWNrLmVhc2VJbiB9LCAwLjEgKTtcblx0dGwudG8oIHRoaXMuX3NjcmVlblRyYW5zaXRpb24sIDAuNywgeyB4OjAsIGVhc2U6U2luZS5lYXNlT3V0IH0sIDAuNiApO1xuXG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7XG5cblx0Ly8gdGhpcy5fYmdNdXNpYy5mYWRlT3V0KDAsIDEwMDApO1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5MZXZlbFNlbGVjdGlvblNjcmVlbi5wcm90b3R5cGUuY3JlYXRlTGV2ZWxTZWxlY3Rpb25CdXR0b25zID0gZnVuY3Rpb24oIGlzWmVyb1NjYWxlIClcbntcblx0Y29uc3QgTEVWRUxfQ09VTlQgPSBDb21tb24uc2F2ZWREYXRhLmFyckxldmVsUmVzdWx0WyB0aGlzLl9jaGFwdGVySW5kZXggXS5sZW5ndGg7XG5cdHRoaXMuX2FyckxldmVsQnV0dG9uID0gW107XHRcblx0Y29uc3QgTEVWRUxfQlVUVE9OX1JBRElVUyA9IDI3NTtcblx0dmFyIExFVkVMX0JVVFRPTl9QT1NJVElPTlMgPSBbIFxuXHRcdFsgLUxFVkVMX0JVVFRPTl9SQURJVVMsIDAgXSwgXG5cdFx0WyAtTEVWRUxfQlVUVE9OX1JBRElVUyAqIE1hdGguY29zKCBNYXRoLlBJICogMC4yNSApLCBMRVZFTF9CVVRUT05fUkFESVVTICogTWF0aC5jb3MoIE1hdGguUEkgKiAwLjI1ICkgXSwgXG5cdFx0WyAwLCBMRVZFTF9CVVRUT05fUkFESVVTIF0sIFxuXHRcdFsgTEVWRUxfQlVUVE9OX1JBRElVUyAqIE1hdGguY29zKCBNYXRoLlBJICogMC4yNSApLCBMRVZFTF9CVVRUT05fUkFESVVTICogTWF0aC5jb3MoIE1hdGguUEkgKiAwLjI1ICkgXSwgXG5cdFx0WyBMRVZFTF9CVVRUT05fUkFESVVTLCAwIF0gXTtcblx0XHRcblx0Ly8gRmluZCBsYXN0IHBsYXlhYmxlIGxldmVsLlxuXHR2YXIgbGFzdExldmVsSW5kZXggPSAgMDtcblx0aWYgKCB0aGlzLl9jaGFwdGVySW5kZXggPiAwICYmIENvbW1vbi5zYXZlZERhdGEuYXJyTGV2ZWxSZXN1bHRbIHRoaXMuX2NoYXB0ZXJJbmRleCAtIDEgXVsgR2xvYmFsLkxFVkVMX0lEX0FSUkFZWyAwIF0ubGVuZ3RoIC0gMSBdLnNjb3JlID09IDAgKVxuXHRcdGxhc3RMZXZlbEluZGV4ID0gLTE7XG5cdGlmICggbGFzdExldmVsSW5kZXggPiAtMSApXG5cdHtcblx0XHRmb3IgKCBsYXN0TGV2ZWxJbmRleCA9IDA7IGxhc3RMZXZlbEluZGV4IDwgTEVWRUxfQ09VTlQ7ICsrbGFzdExldmVsSW5kZXggKVxuXHRcdHtcblx0XHRcdGlmICggQ29tbW9uLnNhdmVkRGF0YS5hcnJMZXZlbFJlc3VsdFsgdGhpcy5fY2hhcHRlckluZGV4IF1bIGxhc3RMZXZlbEluZGV4IF0uc2NvcmUgPT0gMCApXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRcdFxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBMRVZFTF9DT1VOVDsgKytpIClcblx0e1x0XHRcblx0XHQvLyBUT0RPOiBERUJVRzogVW5sb2NrIGFsbCB0aGUgbGV2ZWxzLlxuXHRcdC8vaWYgKCB0cnVlIClcblx0XHRpZiAoIGkgPD0gbGFzdExldmVsSW5kZXggKVxuXHRcdHtcblx0XHRcdC8vIFBsYXlhYmxlIGxldmVsLlxuXHRcdFx0dmFyIGJ1dHRvbkF1eCA9IG5ldyBMZXZlbEJ1dHRvbihcblx0XHRcdFx0aSxcblx0XHRcdFx0Q29tbW9uLnNhdmVkRGF0YS5hcnJMZXZlbFJlc3VsdFsgdGhpcy5fY2hhcHRlckluZGV4IF1bIGkgXS5zdGFycywgLy8gR2V0IHN0YXJzIGZyb20gbG9jYWwgc3RvcmUuXG5cdFx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX29mZlwiICksXG5cdFx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X2xhcmdlX292ZXJcIiApLFxuXHRcdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZfcmluZ18wMDFcIiApLFxuXHRcdFx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZfcmluZ18wMDJcIiApICk7XG5cdFx0XHRidXR0b25BdXgueCA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSArIExFVkVMX0JVVFRPTl9QT1NJVElPTlNbIGkgXVsgMCBdO1xuXHRcdFx0YnV0dG9uQXV4LnkgPSBDb21tb24uU1RBR0VfSEVJR0hUICogMC41ICsgTEVWRUxfQlVUVE9OX1BPU0lUSU9OU1sgaSBdWyAxIF07XHRcdFxuXHRcdFx0YnV0dG9uQXV4LnNpZ25hbHMuZG93bi5hZGRPbmNlKCB0aGlzLnBsYXlQcmVzc2VkLCB0aGlzICk7XG5cdFx0XHRidXR0b25BdXgub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHRcdFx0aWYgKCBpc1plcm9TY2FsZSlcblx0XHRcdFx0YnV0dG9uQXV4LnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0XHRcdGJ1dHRvbkF1eC5hbmltYXRlID0gdHJ1ZTtcblx0XHRcdFxuXHRcdFx0dGhpcy5fbGV2ZWxTZWxlY3Rpb25CdXR0b25Db250YWluZXIuYWRkQ2hpbGQoIGJ1dHRvbkF1eCApO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9hcnJMZXZlbEJ1dHRvbi5wdXNoKCBidXR0b25BdXggKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdC8vIExvY2suXG5cdFx0XHR2YXIgbG9ja0JnU3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKCB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZcIiApICk7XG5cdFx0XHRsb2NrQmdTcHJpdGUuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIC41LCAuNSApO1xuXHRcdFx0bG9ja0JnU3ByaXRlLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgKyBMRVZFTF9CVVRUT05fUE9TSVRJT05TWyBpIF1bIDAgXTtcblx0XHRcdGxvY2tCZ1Nwcml0ZS55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNSArIExFVkVMX0JVVFRPTl9QT1NJVElPTlNbIGkgXVsgMSBdO1xuXHRcdFx0aWYgKCBpc1plcm9TY2FsZSApXHRcdFx0XG5cdFx0XHRcdGxvY2tCZ1Nwcml0ZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLCAwICk7XG5cdFx0XHR2YXIgYXJyTG9ja1Nwcml0ZUlkID0gWyBcImxvY2tcIiwgXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZfcmluZ18wMDFcIiwgXCJidG5fcHJpbWFyeV9sYXJnZV9vZmZfcmluZ18wMDJcIiBdO1xuXHRcdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgYXJyTG9ja1Nwcml0ZUlkLmxlbmd0aDsgKytqIClcblx0XHRcdHtcblx0XHRcdFx0dmFyIHNwcml0ZUF1eCA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIGFyckxvY2tTcHJpdGVJZFsgaiBdICkgKTtcblx0XHRcdFx0c3ByaXRlQXV4LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAuNSwgLjUgKTtcblx0XHRcdFx0bG9ja0JnU3ByaXRlLmFkZENoaWxkKCBzcHJpdGVBdXggKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5fbGV2ZWxTZWxlY3Rpb25CdXR0b25Db250YWluZXIuYWRkQ2hpbGQoIGxvY2tCZ1Nwcml0ZSApO1xuXHRcdFx0XG5cdFx0XHR0aGlzLl9hcnJMZXZlbEJ1dHRvbi5wdXNoKCBsb2NrQmdTcHJpdGUgKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKi9cbkxldmVsU2VsZWN0aW9uU2NyZWVuLnByb3RvdHlwZS51cGRhdGVVSSA9IGZ1bmN0aW9uKClcbntcblx0Ly8gVXBkYXRlIGltYWdlLlxuXHQvL3RoaXMuX2NoYXB0ZXJJbWFnZS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiaW1hZ2VfY2hhcGVyX1wiICsgKCB0aGlzLl9jaGFwdGVySW5kZXggKyAxICkgKTtcblx0XG5cdC8vIFVwZGF0ZSB0aXRsZXMuXG5cdHZhciBqc29uQ2hhcHRlclRpdGxlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldEpTT04oIFwiY29uZmlnXCIgKVsgJ2NvcHknIF1bIFwiQ0hBUFRFUl9cIiArICggdGhpcy5fY2hhcHRlckluZGV4ICsgMSApICsgXCJfVElUTEVcIiBdWyBDb21tb24uQ09VTlRSWV9DT0RFIF07XG5cdFxuXHR0aGlzLl90b3BUaXRsZVRleHQudGV4dCA9IGpzb25DaGFwdGVyVGl0bGVbIFwidG9wXCIgXTtcblx0dGhpcy5fdG9wVGl0bGVUZXh0LnBvc2l0aW9uLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSB0aGlzLl90b3BUaXRsZVRleHQud2lkdGggKiAwLjU7XG5cdFxuXHR0aGlzLl9ib3RUaXRsZVRleHQudGV4dCA9IGpzb25DaGFwdGVyVGl0bGVbIFwiYm90XCIgXTtcblx0dGhpcy5fYm90VGl0bGVUZXh0LnBvc2l0aW9uLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSB0aGlzLl9ib3RUaXRsZVRleHQud2lkdGggKiAwLjU7XHRcblx0XHRcblx0Ly8gVXBkYXRlIGxldmVsIHNlbGVjdGlvbiBidXR0b25zLlxuXHR0aGlzLl9sZXZlbFNlbGVjdGlvbkJ1dHRvbkNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xuXHR0aGlzLmNyZWF0ZUxldmVsU2VsZWN0aW9uQnV0dG9ucyggZmFsc2UgKTtcbn1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuTGV2ZWxTZWxlY3Rpb25TY3JlZW4ucHJvdG90eXBlLm5leHRDaGFwdGVyUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0Kyt0aGlzLl9jaGFwdGVySW5kZXg7XG5cdGlmICggdGhpcy5fY2hhcHRlckluZGV4ID4gKCBHbG9iYWwuTEVWRUxfSURfQVJSQVkubGVuZ3RoIC0gMSApIClcblx0XHR0aGlzLl9jaGFwdGVySW5kZXggPSAwO1xuXG5cdHRoaXMudXBkYXRlVUkoKTtcblx0XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xuXHRcblx0Ly8gQW5pbWF0aW9uLlxuXHR0aGlzLl9jaGFwdGVySW1hZ2UudGV4dHVyZSA9IHRoaXMuX2FuaW1DaGFwdGVySW1hZ2UudGV4dHVyZTtcblx0dGhpcy5fYW5pbUNoYXB0ZXJJbWFnZS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiaW1hZ2VfY2hhcGVyX1wiICsgKCB0aGlzLl9jaGFwdGVySW5kZXggKyAxICkgKTtcblx0dGhpcy5fYW5pbUNoYXB0ZXJJbWFnZS5yb3RhdGlvbiA9IE1hdGguUEk7XG5cdFxuXHRpZiAoIHRoaXMuX2NoYXB0ZXJTZWxlY3Rpb25UaW1lbGluZSAhPSBudWxsIClcblx0XHR0aGlzLl9jaGFwdGVyU2VsZWN0aW9uVGltZWxpbmUuY2xlYXIoKTtcblx0XG5cdHRoaXMuX2NoYXB0ZXJTZWxlY3Rpb25UaW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHR0aGlzLl9hbmltQ2hhcHRlckltYWdlLnBvc2l0aW9uLnggPSB0aGlzLl9hbmltQ2hhcHRlckltYWdlLndpZHRoO1xuXHR0aGlzLl9jaGFwdGVyU2VsZWN0aW9uVGltZWxpbmUudG8oIHRoaXMuX2FuaW1DaGFwdGVySW1hZ2UsIDAuNSwgeyB4OjAsIGVhc2U6U2luZS5lYXNlSW5PdXQgfSwgMCApO1xuXHR0aGlzLl9jaGFwdGVyU2VsZWN0aW9uVGltZWxpbmUudG8oIHRoaXMuX2FuaW1DaGFwdGVySW1hZ2UsIDAuNSwgeyByb3RhdGlvbjpNYXRoLlBJICogMiwgZWFzZTpTaW5lLmVhc2VJbk91dCB9LCAwICk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRoaXMuX2NoYXB0ZXJTZWxlY3Rpb25UaW1lbGluZSApO1xufTtcblxuLyoqXG4gKi9cbkxldmVsU2VsZWN0aW9uU2NyZWVuLnByb3RvdHlwZS5wcmV2Q2hhcHRlclByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdC0tdGhpcy5fY2hhcHRlckluZGV4O1xuXHRpZiAoIHRoaXMuX2NoYXB0ZXJJbmRleCA8IDAgKVxuXHRcdHRoaXMuX2NoYXB0ZXJJbmRleCA9IEdsb2JhbC5MRVZFTF9JRF9BUlJBWS5sZW5ndGggLSAxO1xuXG5cdHRoaXMudXBkYXRlVUkoKTtcblx0XG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xuXHRcblx0Ly8gQW5pbWF0aW9uLlxuXHR0aGlzLl9jaGFwdGVySW1hZ2UudGV4dHVyZSA9IHRoaXMuX2FuaW1DaGFwdGVySW1hZ2UudGV4dHVyZTtcblx0dGhpcy5fYW5pbUNoYXB0ZXJJbWFnZS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiaW1hZ2VfY2hhcGVyX1wiICsgKCB0aGlzLl9jaGFwdGVySW5kZXggKyAxICkgKTtcblx0dGhpcy5fYW5pbUNoYXB0ZXJJbWFnZS5yb3RhdGlvbiA9IC1NYXRoLlBJO1xuXHRcblx0aWYgKCB0aGlzLl9jaGFwdGVyU2VsZWN0aW9uVGltZWxpbmUgIT0gbnVsbCApXG5cdFx0dGhpcy5fY2hhcHRlclNlbGVjdGlvblRpbWVsaW5lLmNsZWFyKCk7XG5cdFxuXHR0aGlzLl9jaGFwdGVyU2VsZWN0aW9uVGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0dGhpcy5fYW5pbUNoYXB0ZXJJbWFnZS5wb3NpdGlvbi54ID0gLXRoaXMuX2FuaW1DaGFwdGVySW1hZ2Uud2lkdGg7XG5cdHRoaXMuX2NoYXB0ZXJTZWxlY3Rpb25UaW1lbGluZS50byggdGhpcy5fYW5pbUNoYXB0ZXJJbWFnZSwgMC41LCB7IHg6MCwgZWFzZTpTaW5lLmVhc2VJbk91dCB9LCAwICk7XG5cdHRoaXMuX2NoYXB0ZXJTZWxlY3Rpb25UaW1lbGluZS50byggdGhpcy5fYW5pbUNoYXB0ZXJJbWFnZSwgMC41LCB7IHJvdGF0aW9uOi1NYXRoLlBJICogMiwgZWFzZTpTaW5lLmVhc2VJbk91dCB9LCAwICk7XG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRoaXMuX2NoYXB0ZXJTZWxlY3Rpb25UaW1lbGluZSApO1xufTtcblxuLyoqXG4gKi9cbkxldmVsU2VsZWN0aW9uU2NyZWVuLnByb3RvdHlwZS5wbGF5UHJlc3NlZCA9IGZ1bmN0aW9uKCBzZW5kZXIgKVxue1xuXHR0aGlzLmFuaW1hdGVPdXQoIFxuXHRcdGZ1bmN0aW9uKCkgeyB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCggdGhpcy5fY2hhcHRlckluZGV4LCBzZW5kZXIuX2luZGV4ICk7IH0sIFxuXHRcdHRoaXMgKTtcblxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5MZXZlbFNlbGVjdGlvblNjcmVlbi5wcm90b3R5cGUuaG9tZVByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuYW5pbWF0ZU91dCggZnVuY3Rpb24oKVxuXHR7XG5cdFx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmRpc3BhdGNoKCk7XG5cdH0sIHRoaXMgKTtcblxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbiIsIlxudmFyIENvbW1vbiAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcbnZhciBTY2VuZSAgICAgICA9IHJlcXVpcmUoXCIuLi9saWIvU2NlbmVcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2ltcGxlU2NyZWVuKCkge1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c2lnbmFscy5TaWduYWx9XG4gICAgICovXG4gICAgdGhpcy5zaWduYWxzID0ge307XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4gPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4gPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtwMy5Bc3NldE1hbmFnZXJ9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheS48VHdlZW5NYXg+fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl90d2VlbnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlBvaW50fVxuICAgICAqL1xuICAgIHRoaXMuX2NlbnRyZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2xlZnRFZGdlID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmlnaHRFZGdlID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luID0gMTAwO1xuXG5cbiAgICBwMy5TY3JlZW4uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2ltcGxlU2NyZWVuO1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2NlbmUucHJvdG90eXBlKTtcblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTaW1wbGVTY3JlZW47XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3R3ZWVucyA9IFtdO1xuICAgIHRoaXMuX2NlbnRyZSA9IG5ldyBQSVhJLlBvaW50KENvbW1vbi5TVEFHRV9XSURUSC8yLCBDb21tb24uU1RBR0VfSEVJR0hULzIpO1xufTtcblxuLyoqXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uZGlzcG9zZSgpO1xuXG5cdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl90d2VlbnMubGVuZ3RoOyArKyBpKSBcblx0e1xuXHRcdGlmICghIXRoaXMuX3R3ZWVuc1tpXSkgXG5cdFx0e1xuXHRcdFx0dGhpcy5fdHdlZW5zW2ldLmtpbGwoKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLl90d2VlbnMubGVuZ3RoID0gW107XG5cbiAgICBjb25zb2xlLmxvZyhcInNjcmVlbiBkaXNwb3NlZFwiKTtcblxuICAgIFR3ZWVuTWF4LmtpbGxBbGwoKTtcbiAgICBDb21tb24uYW5pbWF0b3IucmVtb3ZlQWxsKCk7XG59O1xuXG4vKipcbiAqL1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMueCA9IChwMy5WaWV3LndpZHRoIC0gQ29tbW9uLlNUQUdFX1dJRFRIKSAqIDAuNTtcblxuICAgIHRoaXMuX3JpZ2h0RWRnZSA9IHRoaXMuX2NlbnRyZS54ICsgKHAzLlZpZXcud2lkdGgvMik7XG4gICAgdGhpcy5fbGVmdEVkZ2UgPSB0aGlzLl9jZW50cmUueCAtIChwMy5WaWV3LndpZHRoLzIpO1xufTtcblxuLyoqXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGVJbihmdW5jdGlvbigpIHtcblxuICAgIH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbn07XG5cbi8qKlxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmhpZGVHVUkgPSBmdW5jdGlvbigpIHtcblxufTtcblxuLyoqXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuc2hvd0dVSSA9IGZ1bmN0aW9uKCkge1xuXG59O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIICsgcDMuVmlldy53aWR0aCkgKiAwLjUgLSA4NC4wKTtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgucm91bmQoKENvbW1vbi5TVEFHRV9XSURUSCArIHAzLlZpZXcud2lkdGgpICogMC41KSwgQ29tbW9uLlNUQUdFX1dJRFRIIC0gMTUwKSAtIDg0O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIE51bWJlclxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLl9nZXRTZWNvbmRCdXR0b25Qb3NpdGlvblJpZ2h0ID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIHJldHVybiBNYXRoLnJvdW5kKChDb21tb24uU1RBR0VfV0lEVEggKyBwMy5WaWV3LndpZHRoKSAqIDAuNSAtIDE2MCk7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLnJvdW5kKChDb21tb24uU1RBR0VfV0lEVEggKyBwMy5WaWV3LndpZHRoKSAqIDAuNSksIENvbW1vbi5TVEFHRV9XSURUSCAtIDE1MCkgLSAxNjA7XG59XG5cbi8qKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0ID0gZnVuY3Rpb24oKVxue1xuXHQvLyByZXR1cm4gTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUgKyA4NC4wKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUpLCAxNTApICsgODQ7XG59XG5cbi8qKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuX2dldFNlY29uZEJ1dHRvblBvc2l0aW9uTGVmdCA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZCgoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUgKyAyMzQuMCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgucm91bmQoKENvbW1vbi5TVEFHRV9XSURUSCAtIHAzLlZpZXcud2lkdGgpICogMC41KSwgMTUwKSArIDE2MDtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAcGFyYW0geyFwMy5CdXR0b259IGJ1dHRvblxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLm9uQnV0dG9uQ2xpY2tlZFByZXZpb3VzID0gZnVuY3Rpb24oYnV0dG9uKSB7XG5cbn07XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwidmFyIENvbW1vbiA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcbnZhciBTaW1wbGVTY3JlZW4gPSByZXF1aXJlKCBcIi4vU2ltcGxlU2NyZWVuXCIgKTtcbnZhciBTb3VuZFNGWCA9IHJlcXVpcmUoIFwiLi4vZ2VuZXJhbC9Tb3VuZFNGWFwiICk7XG52YXIgRG91YmxlU3RhdGVJY29uID0gcmVxdWlyZSggXCIuLi91aS9Eb3VibGVTdGF0ZUljb25cIiApO1xudmFyIFNpbmdsZVN0YXRlSWNvbiA9IHJlcXVpcmUoIFwiLi4vdWkvU2luZ2xlU3RhdGVJY29uXCIgKTtcbnZhciBCZW5NdXRlQnV0dG9uID0gcmVxdWlyZSggXCIuLi91aS9CZW5NdXRlQnV0dG9uXCIgKTtcbnZhciBCdXR0b25TcHJpdGVzID0gcmVxdWlyZSggXCIuLi91aS9CdXR0b25TcHJpdGVzXCIgKTtcbnZhciBCZ1JpbmcgPSByZXF1aXJlKCBcIi4uL3VpL0JnUmluZ1wiICk7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3BsYXNoU2NyZWVuKClcbntcblx0U2ltcGxlU2NyZWVuLmNhbGwoIHRoaXMgKTtcblxuXHQvKipcblx0ICogQHR5cGUge1NpZ25hbH1cblx0ICovXG5cdHRoaXMuc2lnbmFscy5sZWFkZXJib2FyZFByZXNzZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblx0dGhpcy5zaWduYWxzLnRlcm1zUHJlc3NlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGFzaFNjcmVlbjtcblNwbGFzaFNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTaW1wbGVTY3JlZW4ucHJvdG90eXBlICk7XG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3BsYXNoU2NyZWVuO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG5cdGNvbnNvbGUubG9nKCBcIlNQTEFTSCBJTklUSUFMSVpFRFwiICk7XG5cblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwoIHRoaXMgKTtcblxuXHQvLyBJbml0IFVJLlxuXHR2YXIgYmFzZUJ1dHRvblNwcml0ZXMgICAgXHQgICA9IG5ldyBCdXR0b25TcHJpdGVzKCk7XG4gICAgYmFzZUJ1dHRvblNwcml0ZXMubm9ybWFsICAgICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX29mZlwiICk7XG4gICAgYmFzZUJ1dHRvblNwcml0ZXMub3ZlciAgICAgICAgID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX292ZXJcIiApO1xuICAgIGJhc2VCdXR0b25TcHJpdGVzLmlubmVyUmluZyAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vZmZfcmluZ18wMDFcIiApO1xuICAgIGJhc2VCdXR0b25TcHJpdGVzLm91dGVyUmluZyAgICA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wcmltYXJ5X21lZGl1bV9vZmZfcmluZ18wMDJcIiApO1xuXHRcblx0dGhpcy5fY29udGFpbmVyICAgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblx0dGhpcy5fY29udGFpbmVyLnggPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjU7XG5cdHRoaXMuX2NvbnRhaW5lci55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuNTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9jb250YWluZXIgKTtcblxuXHQvLyBCYWNrZ3JvdW5kLlxuXHR0aGlzLl9iZyA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYmdfc3BsYXNoXCIgKSApO1xuXHR0aGlzLl9iZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fYmcuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcblx0dGhpcy5fYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XHRcblx0dGhpcy5fY29udGFpbmVyLmFkZENoaWxkKCB0aGlzLl9iZyApO1xuXHRcblx0Ly8gQW5pbWF0ZWQgcmluZy5cblx0dGhpcy5fYmdSaW5nID0gbmV3IEJnUmluZyggXCJzcGxhc2hfb3V0c2lkZVwiLCBcInNwbGFzaF9taWRkbGVcIiwgXCJzcGxhc2hfY2VudHJlXCIgKTtcblx0dGhpcy5fYmdSaW5nLmlubmVyUmluZy5hbHBoYSA9IC42O1xuXHQvL3RoaXMuX2JnUmluZy5wbGF5KCk7XG5cdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCggdGhpcy5fYmdSaW5nICk7XG5cblx0Ly8gTG9nby5cblx0dGhpcy5fbG9nbyA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwidWlfbG9nb1wiICkgKTtcblx0dGhpcy5fbG9nby5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0Ly90aGlzLl9sb2dvLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAuOTUsIDAuOTUgKTtcblx0dGhpcy5fbG9nby5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUsIENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgLSAxODAgKTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9sb2dvICk7XG5cdFxuXHQvLyBCZW4uXG5cdHRoaXMuX2JlbiA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYmVuXCIgKSApO1xuXHR0aGlzLl9iZW4uYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XG5cdHRoaXMuX2Jlbi5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSAzNzAsIENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgKyAzNSApO1x0XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2JlbiApO1xuXHRcblx0Ly8gQWxpZW5zLlxuXHR0aGlzLl9hbGllbkNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXHR0aGlzLl9hbGllbkNvbnRhaW5lci5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0dGhpcy5fYWxpZW5Db250YWluZXIucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggQ29tbW9uLlNUQUdFX1dJRFRIICogMC41LCBDb21tb24uU1RBR0VfSEVJR0hUICogMC41ICk7XHRcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fYWxpZW5Db250YWluZXIgKTtcblx0XG5cdHRoaXMuX2FyckFsaWVuID0gW107XG5cdGNvbnN0IEFMSUVOX1BPU0lUSU9OUyA9IFsgXG5cdFx0bmV3IFBJWEkuUG9pbnQoIDQwMCwgLTc1ICksXG5cdFx0bmV3IFBJWEkuUG9pbnQoIDQwMCwgMjI1ICksXG5cdFx0bmV3IFBJWEkuUG9pbnQoIDIwMCwgLTUwICksXG5cdFx0bmV3IFBJWEkuUG9pbnQoIDI1MCwgLTI1MCApIF07XG5cdGNvbnN0IEFMSUVOX1NQUklURV9JRFMgPSBbIFxuXHRcdFwiY2Fubm9uYm9sdFwiLFxuXHRcdFwib3ZlcmZsb3dcIixcblx0XHRcIjRhcm1zXCIsXG5cdFx0XCJ1cGdyYWRlXCIgXTtcblx0Zm9yICggdmFyIGkgPSAwOyBpIDwgQUxJRU5fU1BSSVRFX0lEUy5sZW5ndGg7ICsraSApXG5cdHtcblx0XHR2YXIgYWxpZW5BdXggPSBuZXcgUElYSS5TcHJpdGUoIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBBTElFTl9TUFJJVEVfSURTWyBpIF0gKSApO1xuXHRcdGFsaWVuQXV4LmFuY2hvci5zZXQoIC41ICk7XG5cdFx0YWxpZW5BdXgucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggXG5cdFx0XHQvKkNvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSArKi8gQUxJRU5fUE9TSVRJT05TWyBpIF0ueCwgXG5cdFx0XHQvKkNvbW1vbi5TVEFHRV9IRUlHSFQgKiAuNSArKi8gQUxJRU5fUE9TSVRJT05TWyBpIF0ueSApO1xuXHRcblx0XHR0aGlzLl9hbGllbkNvbnRhaW5lci5hZGRDaGlsZCggYWxpZW5BdXggKTtcblx0XHR0aGlzLl9hcnJBbGllbi5wdXNoKCBhbGllbkF1eCApO1xuXHR9XG5cdFxuXHR0aGlzLl9hbGllbkNvbnRhaW5lci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHRcblx0Ly8gVGl0bGUuXG5cdC8qdmFyIGpzb25TcGxhc2hUaXRsZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRKU09OKCBcImNvbmZpZ1wiIClbICdjb3B5JyBdWyBcIlNQTEFTSF9USVRMRVwiIF1bIENvbW1vbi5DT1VOVFJZX0NPREUgXTtcblx0XG5cdHRoaXMuX3RvcFRpdGxlVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCBqc29uU3BsYXNoVGl0bGUudG9wLCB7IGZvbnQ6IFwiaXNiaXRwcm9fNzdfc3BsYXNoXCIsIGFsaWduOiBcImNlbnRlclwiIH0gKTtcblx0dGhpcy5fdG9wVGl0bGVUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX3RvcFRpdGxlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0dGhpcy5fbG9nby5wb3NpdGlvbi55ICsgdGhpcy5fbG9nby5oZWlnaHQgKiAwLjUgKTtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fdG9wVGl0bGVUZXh0ICk7XHRcblx0XG5cdHRoaXMuX2JvdFRpdGxlVGV4dCA9IG5ldyBQSVhJLmV4dHJhcy5CaXRtYXBUZXh0KCBqc29uU3BsYXNoVGl0bGUuYm90LCB7IGZvbnQ6IFwiaXNiaXRwcm9fNzdfc3BsYXNoXCIsIGFsaWduOiBcImNlbnRlclwiIH0gKTtcblx0dGhpcy5fYm90VGl0bGVUZXh0LnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIFxuXHRcdENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIHRoaXMuX2JvdFRpdGxlVGV4dC53aWR0aCAqIDAuNSwgXG5cdFx0dGhpcy5fdG9wVGl0bGVUZXh0LnBvc2l0aW9uLnkgKyB0aGlzLl90b3BUaXRsZVRleHQuaGVpZ2h0ICk7XG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2JvdFRpdGxlVGV4dCApOyovXG5cdFxuXHR0aGlzLl90aXRsZSA9IG5ldyBQSVhJLlNwcml0ZSggdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwic3BsYXNoX3RpdGxlXCIgKSApO1xuXHR0aGlzLl90aXRsZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0dGhpcy5fdGl0bGUuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0dGhpcy5fdGl0bGUucG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludCggQ29tbW9uLlNUQUdFX1dJRFRIICogMC41LCBDb21tb24uU1RBR0VfSEVJR0hUICogMC41ICsgNTAgKTtcdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl90aXRsZSApO1xuXG5cdC8vIFBsYXkgYnV0dG9uLlxuXHQvLyBCdXR0b24uXHRcblx0dGhpcy5fcGxheUJ1dHRvbiA9IG5ldyBwMy5CdXR0b24oXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3BsYXlfb2ZmXCIgKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcGxheV9vdmVyXCIgKSxcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcGxheV9vdmVyXCIgKSApO1xuXHR0aGlzLl9wbGF5QnV0dG9uLnBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoIENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSwgQ29tbW9uLlNUQUdFX0hFSUdIVCAqIDAuOCApO1xuXHR0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMuZG93bi5hZGRPbmNlKCB0aGlzLnBsYXlQcmVzc2VkLCB0aGlzICk7XG5cdHRoaXMuX3BsYXlCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHR0aGlzLl9wbGF5QnV0dG9uLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoIDAsIDAgKTtcblx0dGhpcy5fcGxheUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcblx0Ly8gSWNvbi5cblx0dGhpcy5fcGxheUljb24gPSBuZXcgU2luZ2xlU3RhdGVJY29uKCBcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wbGF5X2ljb25fb2ZmXCIgKSxcblx0XHRcdHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCBcImJ0bl9wbGF5X2ljb25fb3ZlclwiICksXG5cdFx0XHR0aGlzLl9wbGF5QnV0dG9uICk7XG5cdFxuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9wbGF5QnV0dG9uICk7XG5cdFxuXHQvLyBNdXRlIGJ1dHRvbi5cblx0dmFyIG11dGVJY29uID0gbmV3IERvdWJsZVN0YXRlSWNvbiggXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fYXVkaW9fb2ZmXCIgKSwgXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbXV0ZV9vZmZcIiApLCBcblx0XHR0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSggXCJidG5fcHJpbWFyeV9tZWRpdW1faWNvbl9hdWRpb19vdmVyXCIgKSwgXG5cdFx0dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoIFwiYnRuX3ByaW1hcnlfbWVkaXVtX2ljb25fbXV0ZV9vdmVyXCIgKSApO1xuXHRtdXRlSWNvbi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcblx0Ly8gQnV0dG9uLlxuXHR0aGlzLl9iZW5NdXRlQnV0dG9uID0gbmV3IEJlbk11dGVCdXR0b24oIGJhc2VCdXR0b25TcHJpdGVzLCBtdXRlSWNvbiApO1xuXHR0aGlzLl9iZW5NdXRlQnV0dG9uLmFuaW1hdGUgPSB0cnVlO1xuXHR0aGlzLl9iZW5NdXRlQnV0dG9uLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XG5cdHRoaXMuX2Jlbk11dGVCdXR0b24ub3ZlclNvdW5kTmFtZSA9IFwic2Z4X2J0bl9yb2xsb3Zlcl8wMFwiO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9iZW5NdXRlQnV0dG9uICk7XG5cdFxuXHQvLyBCbGFjayBzY3JlZW5cblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbiA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrU3F1YXJlJ10pO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLmFscGhhID0gMTtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcblx0dGhpcy5fc2NyZWVuVHJhbnNpdGlvbi5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuXHR0aGlzLl9zY3JlZW5UcmFuc2l0aW9uLnggPSAtQ29tbW9uLlNUQUdFX1dJRFRIO1xuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3NjcmVlblRyYW5zaXRpb24pXG5cblx0Ly9Tb3VuZHNcblx0Ly8gdGhpcy5fYmdNdXNpYyA9IFNvdW5kU0ZYLnBsYXkoJ211c2ljX2xvb3BfdHJhY2snLCB7dm9sdW1lOjAuNjYsIGxvb3A6dHJ1ZX0pO1xufTtcblxuLyoqXG4gKi9cblNwbGFzaFNjcmVlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xufTtcblxuLyoqXG4gKi9cblNwbGFzaFNjcmVlbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cblx0dGhpcy5fYmVuTXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG5cdC8vdGhpcy5fc291bmRCdXR0b24ueCA9IChDb21tb24uU1RBR0VfV0lEVEggKyBwMy5WaWV3LndpZHRoKSAqIDAuNSAtIDgwLjA7XG59O1xuXG4vKipcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxue1xuXHQvLyBTb3VuZFNGWC5zdG9wKCdtdXNpY19tZW51X2xvb3BfMDAnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbiggY2FsbGJhY2ssIHNjb3BlIClcbntcblx0U2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4uY2FsbCggdGhpcyApO1xuXG5cdC8vIFNmeC5cblx0cDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZCggXCJ2b19iZW5fd2luX2hhYWFfMDBcIiApO1xuXHRcblx0Ly8gQnV0dG9uc1xuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0XG5cdHRsLnRvKCB0aGlzLl9wbGF5QnV0dG9uLnNjYWxlLCAxLCB7IHg6MSwgeToxLCBlYXNlOkVsYXN0aWMuZWFzZU91dCB9LCAwLjEgKTtcblx0dGwudG8oIHRoaXMuX2FsaWVuQ29udGFpbmVyLnNjYWxlLCAuNSwgeyB4OjEsIHk6MSwgZWFzZTpTaW5lLmVhc2VPdXQgfSwgMC4xICk7XG5cdC8vdGwudG8oIHRoaXMuX2JlbiwgMS41LCB7IHg6dGhpcy5fYmVuLnggKyAxMCwgZWFzZTpTaW5lLmVhc2VJbk91dCwgeW95bzp0cnVlLCByZXBlYXQ6LTEgfSwgMCApO1xuXHQvL3RsLnRvKCB0aGlzLl9wbGF5QnV0dG9uLnNjYWxlLCAuNSwgeyB4Oi45LCB5Oi45LCBlYXNlOlNpbmUuZWFzZUluT3V0LCB5b3lvOnRydWUsIHJlcGVhdDotMSB9LCAyLjAgKTtcblx0Ly90bC50byggdGhpcy5fYmVuTXV0ZUJ1dHRvbi5zY2FsZSwgMSwgeyB4OjEsIHk6MSwgZWFzZTpFbGFzdGljLmVhc2VPdXQgfSwgMC40ICk7XG5cdC8vIEFuaW1hdGUgYWxpZW5zLlxuXHR2YXIgU0NSRUVOX0NFTlRSRSA9IG5ldyBQSVhJLlBvaW50KCBDb21tb24uU1RBR0VfV0lEVEggKiAuNSwgQ29tbW9uLlNUQUdFX0hFSUdIVCAqIC41ICk7XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuX2FyckFsaWVuLmxlbmd0aDsgKytpIClcblx0e1xuXHRcdHZhciBkaXJBdXggPSBuZXcgcDMuVmVjdG9yMiggdGhpcy5fYXJyQWxpZW5bIGkgXS54IC0gU0NSRUVOX0NFTlRSRS54LCB0aGlzLl9hcnJBbGllblsgaSBdLnkgLSBTQ1JFRU5fQ0VOVFJFLnkgKTtcblx0XHRkaXJBdXggPSBkaXJBdXgudW5pdDtcblx0XHRcblx0XHQvKnZhciBhbXBsaXR1ZGUgPSBNYXRoLmZsb29yKCAoIE1hdGgucmFuZG9tKCkgKiAzICkgKSArIDU7XG5cdFx0aWYgKCBpICUgMiA9PSAwIClcblx0XHRcdHRsLnRvKCB0aGlzLl9hcnJBbGllblsgaSBdLCBNYXRoLnJhbmRvbSgpICogMSArIDEsIHsgeTp0aGlzLl9hcnJBbGllblsgaSBdLnkgKyBhbXBsaXR1ZGUsIGVhc2U6U2luZS5lYXNlSW5PdXQsIHlveW86dHJ1ZSwgcmVwZWF0Oi0xIH0sIE1hdGgucmFuZG9tKCkgKTtcblx0XHRlbHNlXG5cdFx0XHR0bC50byggdGhpcy5fYXJyQWxpZW5bIGkgXSwgTWF0aC5yYW5kb20oKSAqIDEgKyAxLCB7IHk6dGhpcy5fYXJyQWxpZW5bIGkgXS55IC0gYW1wbGl0dWRlLCBlYXNlOlNpbmUuZWFzZUluT3V0LCB5b3lvOnRydWUsIHJlcGVhdDotMSB9LCBNYXRoLnJhbmRvbSgpICk7Ki9cblx0XHRcblx0XHR2YXIgYW1wbGl0dWRlID0gTWF0aC5mbG9vciggKCBNYXRoLnJhbmRvbSgpICogMyApICkgKyA1O1xuXHRcdHRsLnRvKCB0aGlzLl9hcnJBbGllblsgaSBdLCBNYXRoLnJhbmRvbSgpICogMSArIDEsIHsgeDp0aGlzLl9hcnJBbGllblsgaSBdLnggKyBkaXJBdXgueCAqIGFtcGxpdHVkZSwgeTp0aGlzLl9hcnJBbGllblsgaSBdLnkgKyBkaXJBdXgueSAqIGFtcGxpdHVkZSwgZWFzZTpTaW5lLmVhc2VJbk91dCwgeW95bzp0cnVlLCByZXBlYXQ6LTEgfSwgTWF0aC5yYW5kb20oKSApO1xuXHR9XG5cdFxuXHQvLyB0aXRsZVxuICAgIHRoaXMuX3RpdGxlLnNjYWxlICAgID0gbmV3IFBJWEkuUG9pbnQoKTtcbiAgICB0aGlzLl90aXRsZS52aXNpYmxlICA9IHRydWU7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl90aXRsZS5zY2FsZSwgMC4zNCwge1xuICAgICAgICBkZWxheTogMC4yICsgMC4zLFxuICAgICAgICB4OiAuNSxcbiAgICAgICAgeTogLjUsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgcGFyYW1zOiBbNl1cbiAgICB9KSk7XG5cdFxuXHQvLyBsb2dvXG4gICAgdGhpcy5fbG9nby5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KCk7XG4gICAgdGhpcy5fbG9nby52aXNpYmxlID0gdHJ1ZTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2xvZ28uc2NhbGUsIDAuMzQsIHtcbiAgICAgICAgZGVsYXk6IDAuMixcbiAgICAgICAgeDogMS4wLFxuICAgICAgICB5OiAxLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzJdLyosXG4gICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ29tbW9uLmF1ZGlvLnBsYXlTb3VuZChcInNmeF9lbmVteV9maXJlXzAwXCIpO1xuICAgICAgICB9Ki9cbiAgICB9KSk7XG5cbiAgICAvKnRoaXMuX29tbmkudGl0bGUuYmxlbmRTdHJlbmd0aCA9IDE7XG4gICAgdGhpcy5fYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX29tbmkudGl0bGUsIDAuMjQsIHtcbiAgICAgICAgZGVsYXk6IDAuNTYsXG4gICAgICAgIGJsZW5kU3RyZW5ndGg6IDAuMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICB9KSk7Ki9cblxuICAgIHRoaXMuX2JnUmluZy5taWRSaW5nLnNjYWxlICAgICA9IG5ldyBQSVhJLlBvaW50KCk7XG4gICAgdGhpcy5fYmdSaW5nLm1pZFJpbmcudmlzaWJsZSAgID0gdHJ1ZTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JnUmluZy5taWRSaW5nLnNjYWxlLCAwLjYsIHtcbiAgICAgICAgZGVsYXk6IDAuMzIsXG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzJdXG4gICAgfSkpO1xuXG4gICAgdGhpcy5fYmdSaW5nLmlubmVyUmluZy5zY2FsZSAgICAgPSBuZXcgUElYSS5Qb2ludCgpO1xuICAgIHRoaXMuX2JnUmluZy5pbm5lclJpbmcudmlzaWJsZSAgID0gdHJ1ZTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JnUmluZy5pbm5lclJpbmcuc2NhbGUsIDAuNiwge1xuICAgICAgICBkZWxheTogMC4zMiArIDAuMDYsXG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzJdXG4gICAgfSkpO1xuXG4gICAgdGhpcy5fYmdSaW5nLm91dGVyUmluZy5zY2FsZSAgICAgPSBuZXcgUElYSS5Qb2ludCgpO1xuICAgIHRoaXMuX2JnUmluZy5vdXRlclJpbmcudmlzaWJsZSAgID0gdHJ1ZTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JnUmluZy5vdXRlclJpbmcuc2NhbGUsIDAuNjYsIHtcbiAgICAgICAgZGVsYXk6IDAuMzIgKyAwLjA4LFxuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICBlYXNlUGFyYW1zOiBbNF1cbiAgICB9KSk7XG5cdFxuXHRDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JnUmluZy5pbm5lclJpbmcuc2NhbGUsIDEuNCwge1xuICAgICAgICBkZWxheTogMC4zMiArIDAuNixcbiAgICAgICAgeDogMC45NCxcbiAgICAgICAgeTogMC45NCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSkpO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9iZ1JpbmcubWlkUmluZywgOC4wLCB7XG4gICAgICAgIGRlbGF5OiAwLjMyICsgMC4yLFxuICAgICAgICByb3RhdGlvbjogTWF0aC5QSSAqIDQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXG4gICAgICAgIHlveW86IHRydWUsXG4gICAgICAgIHJlcGVhdDogLTFcbiAgICB9KSk7XG5cbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JnUmluZy5vdXRlclJpbmcsIDYuMCwge1xuICAgICAgICBkZWxheTogMC4zMiArIDAuMjQsXG4gICAgICAgIHJvdGF0aW9uOiAtTWF0aC5QSSAqIDQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXG4gICAgICAgIHlveW86IHRydWUsXG4gICAgICAgIHJlcGVhdDogLTFcbiAgICB9KSk7XG5cdFx0XG5cdENvbW1vbi5hbmltYXRvci5hZGQoIHRsICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSApXG57XG5cdFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKCB0aGlzICk7XG5cblx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCB7IG9uQ29tcGxldGU6Y2FsbGJhY2ssIG9uQ29tcGxldGVTY29wZTpzY29wZSB9ICk7XG5cblx0Ly8gQnV0dG9uc1xuXHR0bC50byggdGhpcy5fcGxheUJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAgKTtcblx0Ly90bC50byggdGhpcy5fYmVuTXV0ZUJ1dHRvbi5zY2FsZSwgMC41LCB7IHg6MCwgeTowLCBlYXNlOkJhY2suZWFzZUluIH0sIDAuMSApO1xuXHR0bC50byggdGhpcy5fc2NyZWVuVHJhbnNpdGlvbiwgMC43LCB7IHg6MCwgZWFzZTpTaW5lLmVhc2VPdXQgfSwgMC42ICk7XG5cblx0Q29tbW9uLmFuaW1hdG9yLmFkZCggdGwgKTtcblxuXHQvLyB0aGlzLl9iZ011c2ljLmZhZGVPdXQoMCwgMTAwMCk7XG59O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLnBsYXlQcmVzc2VkID0gZnVuY3Rpb24oKVxue1xuXHR0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMuZG93bi5yZW1vdmUodGhpcy5wbGF5UHJlc3NlZCwgdGhpcyk7XG5cdFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLl9wbGF5QnV0dG9uLnNjYWxlKTtcblxuXHR0aGlzLmFuaW1hdGVPdXQoZnVuY3Rpb24oKVxuXHR7XG5cdFx0dGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTtcblx0fSwgdGhpcyk7XG5cblx0U291bmRTRlgucGxheShcInNmeF9idG5fcHJlc3NfMDBcIik7XG59O1xuXG4vKipcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5sZWFkZXJib2FyZFByZXNzZWQgPSBmdW5jdGlvbigpXG57XG5cdHRoaXMuc2lnbmFscy5sZWFkZXJib2FyZFByZXNzZWQuZGlzcGF0Y2goKTtcblxuXHRTb3VuZFNGWC5wbGF5KFwic2Z4X2J0bl9wcmVzc18wMFwiKTtcbn07XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLnRlcm1zUHJlc3NlZCA9IGZ1bmN0aW9uKClcbntcblx0dGhpcy5zaWduYWxzLnRlcm1zUHJlc3NlZC5kaXNwYXRjaCgpO1xuXG5cdFNvdW5kU0ZYLnBsYXkoXCJzZnhfYnRuX3ByZXNzXzAwXCIpO1xufTtcblxuIiwidmFyIEJ1dHRvblJpbmcgPSByZXF1aXJlKCBcIi4vQnV0dG9uUmluZ1wiICk7XHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFwMy5CdXR0b25TcHJpdGVzfSBzdGF0ZXNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBCZW5CdXR0b24oIGJ1dHRvblNwcml0ZXMgKSBcclxue1xyXG4gICAgcDMuQnV0dG9uLmNhbGwoIHRoaXMsIGJ1dHRvblNwcml0ZXMubm9ybWFsLCBidXR0b25TcHJpdGVzLm92ZXIsIGJ1dHRvblNwcml0ZXMub3ZlciApO1xyXG5cclxuXHQvLyBCdXR0b24gcmluZy5cclxuXHR0aGlzLl9idXR0b25SaW5nID0gbmV3IEJ1dHRvblJpbmcoIGJ1dHRvblNwcml0ZXMub3V0ZXJSaW5nLCBidXR0b25TcHJpdGVzLmlubmVyUmluZyApO1xyXG5cdHRoaXMuYWRkQ2hpbGQoIHRoaXMuX2J1dHRvblJpbmcgKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgID0gQmVuQnV0dG9uO1xyXG5CZW5CdXR0b24ucHJvdG90eXBlICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZSggcDMuQnV0dG9uLnByb3RvdHlwZSApO1xyXG5CZW5CdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmVuQnV0dG9uO1xyXG5cclxuQmVuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3ZlciA9IGZ1bmN0aW9uKCkgXHJcbntcclxuICAgIHAzLkJ1dHRvbi5wcm90b3R5cGUub25Nb3VzZU92ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHRcclxuICAgIC8vIFJpbmcgYW5pbWF0aW9uLlxyXG5cdHRoaXMuX2J1dHRvblJpbmcub25Nb3VzZU92ZXIoKTtcclxufVxyXG5cclxuQmVuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3V0ID0gZnVuY3Rpb24oKSBcclxue1xyXG4gICAgcDMuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3V0LmNhbGwoIHRoaXMgKTtcclxuXHJcblx0XHJcbiAgICAvLyBSaW5nIGFuaW1hdGlvbi5cclxuXHR0aGlzLl9idXR0b25SaW5nLm9uTW91c2VPdXQoKTtcclxufSIsInZhciBCdXR0b25SaW5nID0gcmVxdWlyZSggXCIuL0J1dHRvblJpbmdcIiApO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCZW5NdXRlQnV0dG9uKCBidXR0b25TcHJpdGVzLCBkb3VibGVTdGF0ZUljb24gKSBcbntcbiAgICBwMy5CdXR0b24uY2FsbCggdGhpcywgYnV0dG9uU3ByaXRlcy5ub3JtYWwsIGJ1dHRvblNwcml0ZXMub3ZlciwgYnV0dG9uU3ByaXRlcy5vdmVyICk7XG5cdFxuXHQvLyBJcyB0aGUgbW91c2UgcG9pbnRlciBvdmVyIHRoZSBidXR0b24/XG5cdHRoaXMuX2lzT3ZlciA9IGZhbHNlO1xuXHRcblx0dmFyIGF1ZGlvID0gcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlO1xuXHRcblx0Ly8gSWNvbi5cblx0dGhpcy5fZG91YmxlU3RhdGVJY29uID0gZG91YmxlU3RhdGVJY29uO1xuXHR0aGlzLl9kb3VibGVTdGF0ZUljb24uc2V0Tm9ybWFsVGV4dHVyZSggYXVkaW8uaXNNdXRlID8gMSA6IDAgKTtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fZG91YmxlU3RhdGVJY29uICk7XHRcblx0XG5cdC8vIEJ1dHRvbiByaW5nLlxuXHR0aGlzLl9idXR0b25SaW5nID0gbmV3IEJ1dHRvblJpbmcoIGJ1dHRvblNwcml0ZXMub3V0ZXJSaW5nLCBidXR0b25TcHJpdGVzLmlubmVyUmluZyApO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl9idXR0b25SaW5nICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmVuTXV0ZUJ1dHRvbjtcbkJlbk11dGVCdXR0b24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggcDMuQnV0dG9uLnByb3RvdHlwZSApO1xuQmVuTXV0ZUJ1dHRvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCZW5NdXRlQnV0dG9uO1xuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICovXG5CZW5NdXRlQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQgKSBcbntcbiAgICBwMy5CdXR0b24ucHJvdG90eXBlLm9uTW91c2VDbGljay5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcblx0XG4gICAgdmFyIGF1ZGlvID0gcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlO1xuICAgIGF1ZGlvLm11dGUoICFhdWRpby5pc011dGUgKTtcblx0XG5cdC8vIFVwZGF0ZSBpY29uLlxuXHRpZiAoIHRoaXMuX2lzT3ZlciApXG5cdFx0dGhpcy5fZG91YmxlU3RhdGVJY29uLnNldE92ZXJUZXh0dXJlKCBhdWRpby5pc011dGUgPyAxIDogMCApO1xuXHRlbHNlXG5cdFx0dGhpcy5fZG91YmxlU3RhdGVJY29uLnNldE5vcm1hbFRleHR1cmUoIGF1ZGlvLmlzTXV0ZSA/IDEgOiAwICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICovXG5CZW5NdXRlQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3ZlciA9IGZ1bmN0aW9uKCBldmVudCApIFxue1xuXHRwMy5CdXR0b24ucHJvdG90eXBlLm9uTW91c2VPdmVyLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdFxuXHRcblx0dGhpcy5faXNPdmVyID0gdHJ1ZTtcblxuXHQvLyBVcGRhdGUgaWNvbi5cblx0dmFyIGF1ZGlvID0gcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlO1xuICAgIHRoaXMuX2RvdWJsZVN0YXRlSWNvbi5zZXRPdmVyVGV4dHVyZSggYXVkaW8uaXNNdXRlID8gMSA6IDAgKTtcblx0XG5cdC8vIFJpbmcgYW5pbWF0aW9uLlxuXHR0aGlzLl9idXR0b25SaW5nLm9uTW91c2VPdmVyKCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICovXG5CZW5NdXRlQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3V0ID0gZnVuY3Rpb24oIGV2ZW50ICkgXG57XG5cdHAzLkJ1dHRvbi5wcm90b3R5cGUub25Nb3VzZU91dC5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcblx0XG5cdHRoaXMuX2lzT3ZlciA9IGZhbHNlO1xuXG5cdC8vIFVwZGF0ZSBpY29uLlxuXHR2YXIgYXVkaW8gPSBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2U7XG4gICAgdGhpcy5fZG91YmxlU3RhdGVJY29uLnNldE5vcm1hbFRleHR1cmUoIGF1ZGlvLmlzTXV0ZSA/IDEgOiAwICk7XG5cdFxuXHQvLyBSaW5nIGFuaW1hdGlvbi5cblx0dGhpcy5fYnV0dG9uUmluZy5vbk1vdXNlT3V0KCk7XG59O1xuIiwidmFyIENvbW1vbiA9IHJlcXVpcmUoIFwiLi4vQ29tbW9uXCIgKTtcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IXAzLkJ1dHRvblNwcml0ZXN9IHN0YXRlc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEJnUmluZyggb3V0c2lkZVNwcml0ZUlkLCBtaWRkbGVTcHJpdGVJZCwgY2VudHJlU3ByaXRlSWQgKSBcclxue1xyXG5cdFBJWEkuQ29udGFpbmVyLmNhbGwoIHRoaXMgKTtcclxuXHRcclxuXHRcclxuXHQvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2lubmVyUmluZyA9IG5ldyBQSVhJLlNwcml0ZSggcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlLmdldFRleHR1cmUoIGNlbnRyZVNwcml0ZUlkICkgfHwgUElYSS5UZXh0dXJlLkVNUFRZICk7XHJcbiAgICB0aGlzLl9pbm5lclJpbmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XHJcbiAgICB0aGlzLmFkZENoaWxkKCB0aGlzLl9pbm5lclJpbmcgKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX21pZFJpbmcgPSBuZXcgUElYSS5TcHJpdGUoIHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZS5nZXRUZXh0dXJlKCBtaWRkbGVTcHJpdGVJZCApIHx8IFBJWEkuVGV4dHVyZS5FTVBUWSApO1xyXG4gICAgdGhpcy5fbWlkUmluZy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCggMC41LCAwLjUgKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQoIHRoaXMuX21pZFJpbmcgKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX291dGVyUmluZyA9IG5ldyBQSVhJLlNwcml0ZSggcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlLmdldFRleHR1cmUoIG91dHNpZGVTcHJpdGVJZCApIHx8IFBJWEkuVGV4dHVyZS5FTVBUWSApO1xyXG4gICAgdGhpcy5fb3V0ZXJSaW5nLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xyXG4gICAgdGhpcy5hZGRDaGlsZCggdGhpcy5fb3V0ZXJSaW5nICk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICA9IEJnUmluZztcclxuQmdSaW5nLnByb3RvdHlwZSAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoIFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSApO1xyXG5CZ1JpbmcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmdSaW5nO1xyXG5cclxuQmdSaW5nLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSBcclxue1xyXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9pbm5lclJpbmcuc2NhbGUsIDEuNCwge1xyXG4gICAgICAgIGRlbGF5OiAwLjMyICsgMC42LFxyXG4gICAgICAgIHg6IDAuOTQsXHJcbiAgICAgICAgeTogMC45NCxcclxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXHJcbiAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICB9KSk7XHJcblxyXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9taWRSaW5nLCA4LjAsIHtcclxuICAgICAgICBkZWxheTogMC4zMiArIDAuMixcclxuICAgICAgICByb3RhdGlvbjogTWF0aC5QSSAqIDQsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgICAgICB5b3lvOiB0cnVlLFxyXG4gICAgICAgIHJlcGVhdDogLTFcclxuICAgIH0pKTtcclxuXHJcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX291dGVyUmluZywgNi4wLCB7XHJcbiAgICAgICAgZGVsYXk6IDAuMzIgKyAwLjI0LFxyXG4gICAgICAgIHJvdGF0aW9uOiAtTWF0aC5QSSAqIDQsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcclxuICAgICAgICB5b3lvOiB0cnVlLFxyXG4gICAgICAgIHJlcGVhdDogLTFcclxuICAgIH0pKTtcclxufTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTIC8gU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdEJnUmluZy5wcm90b3R5cGUsIFxyXG5cdFwiaW5uZXJSaW5nXCIsIFxyXG5cdHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2lubmVyUmluZzsgfSB9ICk7XHJcblx0XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRCZ1JpbmcucHJvdG90eXBlLCBcclxuXHRcIm1pZFJpbmdcIiwgXHJcblx0eyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbWlkUmluZzsgfSB9ICk7XHJcblx0XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRCZ1JpbmcucHJvdG90eXBlLCBcclxuXHRcIm91dGVyUmluZ1wiLCBcclxuXHR7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9vdXRlclJpbmc7IH0gfSApOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IXAzLkJ1dHRvblNwcml0ZXN9IHN0YXRlc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEJ1dHRvblJpbmcoIG91dGVyUmluZ1Nwcml0ZSwgaW5uZXJSaW5nU3ByaXRlICkgXHJcbntcclxuXHRQSVhJLkNvbnRhaW5lci5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9vdXRlclJpbmcgPSBuZXcgUElYSS5TcHJpdGUoIG91dGVyUmluZ1Nwcml0ZSB8fCBQSVhJLlRleHR1cmUuRU1QVFkpO1xyXG4gICAgdGhpcy5fb3V0ZXJSaW5nLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fb3V0ZXJSaW5nKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2lubmVyUmluZyA9IG5ldyBQSVhJLlNwcml0ZSggaW5uZXJSaW5nU3ByaXRlIHx8IFBJWEkuVGV4dHVyZS5FTVBUWSk7XHJcbiAgICB0aGlzLl9pbm5lclJpbmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9pbm5lclJpbmcpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgID0gQnV0dG9uUmluZztcclxuQnV0dG9uUmluZy5wcm90b3R5cGUgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XHJcbkJ1dHRvblJpbmcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnV0dG9uUmluZztcclxuXHJcbkJ1dHRvblJpbmcucHJvdG90eXBlLm9uTW91c2VPdmVyID0gZnVuY3Rpb24oKSBcclxue1xyXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX2lubmVyUmluZyk7XHJcblxyXG4gICAgdmFyIHNwZWVkID0gNC4wO1xyXG4gICAgVHdlZW5NYXgudG8odGhpcy5faW5uZXJSaW5nLCAoTWF0aC5QSSAtIHRoaXMuX2lubmVyUmluZy5yb3RhdGlvbikgLyBzcGVlZCwge1xyXG4gICAgICAgIHJvdGF0aW9uOiBNYXRoLlBJLFxyXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXRcclxuICAgIH0pO1xyXG5cclxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLl9vdXRlclJpbmcpO1xyXG5cclxuICAgIHNwZWVkID0gMi4wO1xyXG4gICAgVHdlZW5NYXgudG8odGhpcy5fb3V0ZXJSaW5nLCBNYXRoLmFicygoLShNYXRoLlBJICogMC41KSAtIHRoaXMuX291dGVyUmluZy5yb3RhdGlvbikgLyBzcGVlZCksIHtcclxuICAgICAgICByb3RhdGlvbjogLU1hdGguUEkgKiAwLjUsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5CdXR0b25SaW5nLnByb3RvdHlwZS5vbk1vdXNlT3V0ID0gZnVuY3Rpb24oKSBcclxue1xyXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX2lubmVyUmluZyk7XHJcblxyXG4gICAgdmFyIHNwZWVkID0gNC4wO1xyXG4gICAgVHdlZW5NYXgudG8odGhpcy5faW5uZXJSaW5nLCB0aGlzLl9pbm5lclJpbmcucm90YXRpb24gLyBzcGVlZCwge1xyXG4gICAgICAgIHJvdGF0aW9uOiAwLjAsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxyXG4gICAgfSk7XHJcblxyXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX291dGVyUmluZyk7XHJcblxyXG4gICAgc3BlZWQgPSAyLjA7XHJcbiAgICBUd2Vlbk1heC50byh0aGlzLl9vdXRlclJpbmcsIE1hdGguYWJzKHRoaXMuX291dGVyUmluZy5yb3RhdGlvbiAvIHNwZWVkKSwge1xyXG4gICAgICAgIHJvdGF0aW9uOiAwLjAsXHJcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxyXG4gICAgfSk7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBCdXR0b25TcHJpdGVzKCkgXHJcbntcclxuICAgIHRoaXMubm9ybWFsICAgICAgID0gbnVsbDtcclxuICAgIHRoaXMub3ZlciAgICAgICAgID0gbnVsbDtcclxuICAgIHRoaXMuaW5uZXJSaW5nICAgID0gbnVsbDtcclxuICAgIHRoaXMub3V0ZXJSaW5nICAgID0gbnVsbDtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgID0gQnV0dG9uU3ByaXRlcztcclxuQnV0dG9uU3ByaXRlcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCdXR0b25TcHJpdGVzOyIsIi8qKlxuICogIERvdWJsZVN0YXRlSWNvblxuICpcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7IVBJWEkuVGV4dHVyZX0gaWNvbk9uTm9ybWFsVGV4dHVyZVxuICogQHBhcmFtIHshUElYSS5UZXh0dXJlfSBpY29uT2ZmTm9ybWFsVGV4dHVyZVxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBpY29uT25PdmVyVGV4dHVyZVxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBpY29uT2ZmT3ZlclRleHR1cmVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBEb3VibGVTdGF0ZUljb24oXG5cdGljb25Pbk5vcm1hbFRleHR1cmUsXG5cdGljb25PZmZOb3JtYWxUZXh0dXJlLFxuXHRpY29uT25PdmVyVGV4dHVyZSxcblx0aWNvbk9mZk92ZXJUZXh0dXJlICkgXG57XG5cdHRoaXMuX2ljb25Ob3JtYWxUZXh0dXJlID0gWyBpY29uT25Ob3JtYWxUZXh0dXJlLCBpY29uT2ZmTm9ybWFsVGV4dHVyZSBdO1xuXHR0aGlzLl9pY29uT3ZlclRleHR1cmUgPSBbIGljb25Pbk92ZXJUZXh0dXJlLCBpY29uT2ZmT3ZlclRleHR1cmUgXTtcblx0XG5cdFBJWEkuU3ByaXRlLmNhbGwoIHRoaXMsIHRoaXMuX2ljb25Ob3JtYWxUZXh0dXJlWyAwIF0gKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb3VibGVTdGF0ZUljb247XG5Eb3VibGVTdGF0ZUljb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUElYSS5TcHJpdGUucHJvdG90eXBlICk7XG5Eb3VibGVTdGF0ZUljb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRG91YmxlU3RhdGVJY29uO1xuXG4vKipcbiAqL1xuRG91YmxlU3RhdGVJY29uLnByb3RvdHlwZS5zZXROb3JtYWxUZXh0dXJlID0gZnVuY3Rpb24oIGluZGV4ICkgXG57XG5cdHRoaXMudGV4dHVyZSA9IHRoaXMuX2ljb25Ob3JtYWxUZXh0dXJlWyBpbmRleCBdO1xufTtcblxuLyoqXG4gKi9cbkRvdWJsZVN0YXRlSWNvbi5wcm90b3R5cGUuc2V0T3ZlclRleHR1cmUgPSBmdW5jdGlvbiggaW5kZXggKSBcbntcblx0dGhpcy50ZXh0dXJlID0gdGhpcy5faWNvbk92ZXJUZXh0dXJlWyBpbmRleCBdO1xufTsiLCJ2YXIgRG91YmxlU3RhdGVJY29uID0gcmVxdWlyZSggXCIuL0RvdWJsZVN0YXRlSWNvblwiICk7XG52YXIgQnV0dG9uUmluZyA9IHJlcXVpcmUoIFwiLi9CdXR0b25SaW5nXCIgKTtcblxuLyoqXG4gKiAgTGV2ZWxCdXR0b25cbiAqL1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBMZXZlbEJ1dHRvbiggaW5kZXgsIHN0YXJzLCBub3JtYWxUZXh0dXJlLCBvdmVyVGV4dHVyZSwgaW5uZXJSaW5nU3ByaXRlLCBvdXRlclJpbmdTcHJpdGUgKSBcbntcblx0dGhpcy5faW5kZXggPSBpbmRleDtcblxuICAgIHAzLkJ1dHRvbi5jYWxsKCB0aGlzLCBub3JtYWxUZXh0dXJlLCBvdmVyVGV4dHVyZSwgb3ZlclRleHR1cmUgKTtcblx0XG5cdC8vIFRleHQuXHRcblx0dGhpcy5fdGl0bGVUZXh0ID0gbmV3IFBJWEkuZXh0cmFzLkJpdG1hcFRleHQoICggdGhpcy5faW5kZXggKyAxICkudG9TdHJpbmcoKSwgeyBmb250OiBcImFoa2lvXzc1X3BhdXNlZFwiLCBhbGlnbjogXCJjZW50ZXJcIiB9ICk7XG5cdHRoaXMuX3RpdGxlVGV4dC5wb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KCAtdGhpcy5fdGl0bGVUZXh0LndpZHRoICogMC41LCAtdGhpcy5fdGl0bGVUZXh0LmhlaWdodCAqIC42NSApO1xuXHR0aGlzLmFkZENoaWxkKCB0aGlzLl90aXRsZVRleHQgKTtcdFxuXHRcblx0Ly8gQnV0dG9uIHJpbmcuXG5cdHRoaXMuX2J1dHRvblJpbmcgPSBuZXcgQnV0dG9uUmluZyggaW5uZXJSaW5nU3ByaXRlLCBvdXRlclJpbmdTcHJpdGUgKTtcblx0dGhpcy5hZGRDaGlsZCggdGhpcy5fYnV0dG9uUmluZyApO1xuXHRcdFx0XG5cdC8vIFN0YXJzLlxuXHR2YXIgc3Rhckljb25SYWRpdXMgPSB0aGlzLmhlaWdodCAqIDAuNSAqIDAuNzc7XG5cdHZhciBzdGFySW5jb25BbmdsZSA9IE1hdGguUEkgKiAwLjIwO1xuXHR0aGlzLl9hcnJTdGFySWNvbiA9IFtdO1x0XG5cdGNvbnN0IFNUQVJfSUNPTl9QT1NJVElPTiA9IFsgXG5cdFx0bmV3IFBJWEkuUG9pbnQoIC1zdGFySWNvblJhZGl1cyAqIE1hdGguY29zKCBzdGFySW5jb25BbmdsZSApLCBzdGFySWNvblJhZGl1cyAqIE1hdGguc2luKCBzdGFySW5jb25BbmdsZSApICksIFxuXHRcdG5ldyBQSVhJLlBvaW50KCAwLCBzdGFySWNvblJhZGl1cyApLCBcblx0XHRuZXcgUElYSS5Qb2ludCggc3Rhckljb25SYWRpdXMgKiBNYXRoLmNvcyggc3RhckluY29uQW5nbGUgKSwgc3Rhckljb25SYWRpdXMgKiBNYXRoLnNpbiggc3RhckluY29uQW5nbGUgKSApIF07XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IDM7ICsraSApXG5cdHtcblx0XHR2YXIgc3Rhckljb25BdXggPSBuZXcgRG91YmxlU3RhdGVJY29uKFxuXHRcdFx0cDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlLmdldFRleHR1cmUoIFwicGFuZWwvc3Rhcl9vblwiICksXHRcblx0XHRcdHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZS5nZXRUZXh0dXJlKCBcInBhbmVsL3N0YXJfb2ZmXCIgKSxcblx0XHRcdHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZS5nZXRUZXh0dXJlKCBcInBhbmVsL3N0YXJfb25cIiApLFx0XG5cdFx0XHRwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2UuZ2V0VGV4dHVyZSggXCJwYW5lbC9zdGFyX29mZlwiICkgKTtcblx0XHRzdGFySWNvbkF1eC5zZXROb3JtYWxUZXh0dXJlKCBpIDwgc3RhcnMgPyAwIDogMSApO1xuXHRcdHN0YXJJY29uQXV4LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KCAwLjUsIDAuNSApO1xuXHRcdHN0YXJJY29uQXV4LnBvc2l0aW9uID0gU1RBUl9JQ09OX1BPU0lUSU9OWyBpIF07XG5cdFx0XG5cdFx0dGhpcy5hZGRDaGlsZCggc3Rhckljb25BdXggKTtcdFx0XG5cdFx0dGhpcy5fYXJyU3Rhckljb24ucHVzaCggc3Rhckljb25BdXggKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsQnV0dG9uO1xuTGV2ZWxCdXR0b24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggcDMuQnV0dG9uLnByb3RvdHlwZSApO1xuTGV2ZWxCdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGV2ZWxCdXR0b247XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBcbiAqL1xuTGV2ZWxCdXR0b24ucHJvdG90eXBlLnNldFN0YXJzID0gZnVuY3Rpb24oIHN0YXJzICkgXG57XG5cdGZvciAoIHZhciBpID0gMDsgaSA8IDM7ICsraSApXG5cdFx0dGhpcy5fYXJyU3Rhckljb25bIGkgXS5zZXROb3JtYWxUZXh0dXJlKCBpIDwgc3RhcnMgPyAwIDogMSApO1xufTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqL1xuTGV2ZWxCdXR0b24ucHJvdG90eXBlLm9uTW91c2VPdmVyID0gZnVuY3Rpb24oIGV2ZW50ICkgXG57XG5cdC8vIFRPRE86IENoYW5nZSB0ZXh0IGNvbG91ci5cblxuXHRwMy5CdXR0b24ucHJvdG90eXBlLm9uTW91c2VPdmVyLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdFxuXHRcblx0Ly8gUmluZyBhbmltYXRpb24uXG5cdHRoaXMuX2J1dHRvblJpbmcub25Nb3VzZU92ZXIoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKi9cbkxldmVsQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3V0ID0gZnVuY3Rpb24oIGV2ZW50ICkgXG57XG5cdC8vIFRPRE86IENoYW5nZSB0ZXh0IGNvbG91ci5cblxuXHRwMy5CdXR0b24ucHJvdG90eXBlLm9uTW91c2VPdXQuY2FsbCggdGhpcywgZXZlbnQgKTtcblx0XG5cdFxuXHQvLyBSaW5nIGFuaW1hdGlvbi5cblx0dGhpcy5fYnV0dG9uUmluZy5vbk1vdXNlT3V0KCk7XG59O1xuIiwiLyoqXG4gKiAgU2luZ2xlU3RhdGVJY29uXG4gKlxuICovXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNpbmdsZVN0YXRlSWNvbiggaWNvbk5vcm1hbFRleHR1cmUsIGljb25PdmVyVGV4dHVyZSwgcGFyZW50QnV0dG9uICkgXG57XG5cdHRoaXMuX2ljb25Ob3JtYWxUZXh0dXJlID0gaWNvbk5vcm1hbFRleHR1cmU7XG5cdHRoaXMuX2ljb25PdmVyVGV4dHVyZSA9IGljb25PdmVyVGV4dHVyZTtcblx0XG5cdFBJWEkuU3ByaXRlLmNhbGwoIHRoaXMsIHRoaXMuX2ljb25Ob3JtYWxUZXh0dXJlICk7XG5cdHRoaXMuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoIDAuNSwgMC41ICk7XG5cdFxuXHRwYXJlbnRCdXR0b24uYWRkQ2hpbGQoIHRoaXMgKTtcblx0XG5cdHBhcmVudEJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKCB0aGlzLm9uUGFyZW50QnV0dG9uT3ZlciwgdGhpcyApO1xuXHRwYXJlbnRCdXR0b24uc2lnbmFscy5vdXQuYWRkKCB0aGlzLm9uUGFyZW50QnV0dG9uT3V0LCB0aGlzICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2luZ2xlU3RhdGVJY29uO1xuU2luZ2xlU3RhdGVJY29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFBJWEkuU3ByaXRlLnByb3RvdHlwZSApO1xuU2luZ2xlU3RhdGVJY29uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNpbmdsZVN0YXRlSWNvbjtcblxuLyoqXG4gKi9cblNpbmdsZVN0YXRlSWNvbi5wcm90b3R5cGUub25QYXJlbnRCdXR0b25PdmVyID0gZnVuY3Rpb24oKSBcbntcblx0dGhpcy50ZXh0dXJlID0gdGhpcy5faWNvbk92ZXJUZXh0dXJlO1xufTtcblxuLyoqXG4gKi9cblNpbmdsZVN0YXRlSWNvbi5wcm90b3R5cGUub25QYXJlbnRCdXR0b25PdXQgPSBmdW5jdGlvbigpIFxue1xuXHR0aGlzLnRleHR1cmUgPSB0aGlzLl9pY29uTm9ybWFsVGV4dHVyZTtcbn07Il19
