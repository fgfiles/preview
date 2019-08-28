(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Common                      = require("./Common");
var GameScreen                  = require("./screens/GameScreen");
var SplashScreen                = require("./screens/SplashScreen");
var LevelSelectScreen           = require("./screens/LevelSelectScreen");
var EndScreen                   = require("./screens/EndScreen");
var MessageOverlay              = require("./overlays/MessageOverlay");
var PauseOverlay                = require("./overlays/PauseOverlay");
var LevelCompleteOverlay        = require("./overlays/LevelCompleteOverlay");
var GameOverOverlay             = require("./overlays/GameOverOverlay");
var TutorialOverlay             = require("./overlays/TutorialOverlay");
var Transition                  = require("./lib/Transition");
var ColourWipeTransition        = require("./lib/ColourWipeTransition");
var LevelData                   = require("./data/LevelData");
var SavedData                   = require("./SavedData");
var RailManager                 = require("./managers/RailManager");
var AudioParams                 = require("./managers/AudioParams");


//===================================================
// CONSTRUCTOR
//===================================================

function Application() {
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

    this._currentMusic = null;

}
module.exports = Application;

//===================================================
// PUBLIC METHODS
//===================================================

Application.prototype.init = function() {
    console.log("APPLICATION INITIALIZED");

    this._assetManager = p3.AssetManager.instance;
    this._screenManager = Common.sceneManager;

    TweenMax.defaultOverwrite = "none";

    Common.railManager = new RailManager();
    Common.levelData = new LevelData();
    Common.savedData = new SavedData();

    for(var i in Common.colours)
    {
        var gr = new PIXI.Graphics();
        gr.beginFill(Common.colours[i]);
        gr.drawRect(0, 0, 1, 1);
        Common.generatedTextures[i] = gr.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);
    }

    var circleToken = new PIXI.Graphics();
    circleToken.beginFill(0xF72811);
    circleToken.drawCircle(0, 0, 10);
    Common.generatedTextures.circleToken = circleToken.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);

    var squareToken = new PIXI.Graphics();
    squareToken.beginFill(0xBBBCBD);
    squareToken.drawRect(0, 0, 50, 100);
    Common.generatedTextures.squareToken = squareToken.generateTexture(Common.renderer, 1.0, PIXI.SCALE_MODES.LINEAR);

    this.showSplash();
    //this.showLevelComplete(6, 97);
    //this.showGameOver();
};

Application.prototype.showSplash = function() {

    var screen = new SplashScreen();
    this._screenManager.add(screen, this._getTransition());

    screen.signals.requestedPreviousScreen.addOnce(function(){
        
    }, this);
    screen.signals.requestedNextScreen.addOnce(function(){
        this.showLevelSelect();
    }, this);
    screen.signals.requestedMusicPlay.add(function(track){
        this._playMusic(track);
    }, this);

    return screen;
};

Application.prototype.showLevelSelect = function() {

    var screen = new LevelSelectScreen();
    this._screenManager.add(screen, this._getTransition());

    screen.signals.requestedPreviousScreen.addOnce(function(){
        this.showSplash();
    }, this);
    screen.signals.requestedNextScreen.add(function(play, level){

        if(!play)
            this.showMessage("LEVEL_LOCKED", [Common.levelData.levels[level].stars_required.toString()]);
        else
            this.showGame(level);
    }, this);
    screen.signals.requestedMusicPlay.add(function(track){
        this._playMusic(track);
    }, this);

    return screen;
};

Application.prototype.showGame = function(level)
{
    var screen = new GameScreen(level);
    this._screenManager.add(screen, this._getTransition());

    screen.signals.requestedPreviousScreen.addOnce(function(){
        
    }, this);
    screen.signals.requestedNextScreen.addOnce(function(win, tokens){
        if(!win)
        {
            this.showGameOver(level);
            screen.pause();
        }
        else
        {
            this.showLevelComplete(level, tokens);
            screen.pause();
        }
    }, this);
    screen.signals.pauseClicked.add(function(){
        this.showPause(screen);
        screen.pause();
    }, this);
    screen.signals.tutorialShown.add(function(offset, text){
        this.showTutorial(screen, offset, text);
        screen.pause();
    }, this);
    screen.signals.requestedMusicPlay.add(function(track){
        this._playMusic(track);
    }, this);

    return screen;
};

Application.prototype.showEnd = function()
{
    var screen = new EndScreen();
    this._screenManager.add(screen, this._getTransition());

    screen.signals.requestedPreviousScreen.addOnce(function(){
        
    }, this);
    screen.signals.requestedNextScreen.addOnce(function(){
        this.showSplash();
    }, this);
    screen.signals.requestedMusicPlay.add(function(track){
        this._playMusic(track);
    }, this);

    return screen;
};


Application.prototype.showMessage = function(message, args)
{
    var t = new Transition();
    t.replace = false;
    t.push = true;

    var screen = new MessageOverlay(message, args);
    this._screenManager.add(screen, t);

    screen.signals.requestedNextScreen.addOnce(function(id){
        this._screenManager.remove();
    }, this);
    screen.signals.requestedPreviousScreen.addOnce(function(id){
        
    }, this);
};

Application.prototype.showPause = function(gameScreen)
{
    var t = new Transition();
    t.replace = false;
    t.push = true;

    this._pause();

    var screen = new PauseOverlay();
    this._screenManager.add(screen, t);

    screen.signals.requestedNextScreen.addOnce(function(id){
        this._screenManager.remove();
    }, this);
    screen.signals.requestedPreviousScreen.addOnce(function(id){
        this._resume();
        this.showSplash();
    }, this);
    screen.signals.requestedMusicPlay.add(function(track){
        this._playMusic(track);
    }, this);
    screen.signals.resumed.add(function(){
        this._resume();
        gameScreen.resume();
    }, this);
};

Application.prototype.showLevelComplete = function(level, tokens)
{
    var t = new Transition();
    t.replace = false;
    t.push = true;

    //this._pause();

    var screen = new LevelCompleteOverlay(level, tokens);
    this._screenManager.add(screen, t);

    screen.signals.requestedNextScreen.addOnce(function(id){
        
        //this._resume();
        if(Common.savedData.hasCompletedAllLevels() && screen.isLevelNewlyCompleted())
            this.showEnd();
        else
            this.showLevelSelect();
    }, this);
    screen.signals.requestedPreviousScreen.addOnce(function(id){

        //this._resume();
        this.showGame(level);
    }, this);
    screen.signals.requestedMusicPlay.add(function(track){
        this._playMusic(track);
    }, this);
    screen.signals.requestedMusicStop.add(function(){
        this._stopAllMusic();
    }, this);
};

Application.prototype.showGameOver = function(level)
{
    var t = new Transition();
    t.replace = false;
    t.push = true;

    //this._pause();

    var screen = new GameOverOverlay();
    this._screenManager.add(screen, t);

    screen.signals.requestedNextScreen.addOnce(function(id){
        //this._resume();
        this.showGame(level);
    }, this);
    screen.signals.requestedPreviousScreen.addOnce(function(id){
        //this._resume();
        this.showLevelSelect();
    }, this);
    screen.signals.requestedMusicPlay.add(function(track){
        this._playMusic(track);
    }, this);
};

Application.prototype.showTutorial = function(gameScreen, offset, text)
{
    var t = new Transition();
    t.replace = false;
    t.push = true;

    this._pause();

    var screen = new TutorialOverlay(offset, text);
    this._screenManager.add(screen, t);

    screen.signals.resumed.add(function(){
        this._resume();
        gameScreen.resume();
    }, this);

    screen.signals.requestedNextScreen.addOnce(function(){
        this._resume();
        gameScreen.resume();
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
    var transition = new ColourWipeTransition();
    //transition.replace = true;
    //transition.push = false;
    return transition;
}

Application.prototype._playMusic = function(track)
{
    var params = new AudioParams();
    params.loop = true;
    params.fadeIn = 0.5;
    Common.audioManager.playMusic(track, params);
    this._currentMusic = track;
}

Application.prototype._stopAllMusic = function()
{
    Common.audioManager.stopMusic(this._currentMusic);
}

Application.prototype._pause = function()
{
    Common.animator._paused = true;
    TweenMax.pauseAll();
}

Application.prototype._resume = function()
{
    Common.animator._paused = false;
    TweenMax.resumeAll();
}

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"./Common":2,"./SavedData":4,"./data/LevelData":5,"./lib/ColourWipeTransition":30,"./lib/Transition":33,"./managers/AudioParams":35,"./managers/RailManager":36,"./overlays/GameOverOverlay":37,"./overlays/LevelCompleteOverlay":38,"./overlays/MessageOverlay":39,"./overlays/PauseOverlay":40,"./overlays/TutorialOverlay":41,"./screens/EndScreen":42,"./screens/GameScreen":43,"./screens/LevelSelectScreen":44,"./screens/SplashScreen":47}],2:[function(require,module,exports){
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

Common.audioManager = null;

Common.generatedTextures = {};

Common.colours = {black:0x000000, gameBG:0x3d3f51};

Common.squareTileSize = 32;

Common.railManager = null;

Common.levelData = null;

Common.savedData = null;







//===================================================


},{}],3:[function(require,module,exports){
/**
 *  Main
 *
 *  Created by Legman on 27/04/2015.
 *
 */

var Application     = require("./Application");

var Common          = require("./Common");
var Preloader       = require("./screens/Preloader");
var SceneManager    = require("./lib/SceneManager");
var NewTracking     = require("./tracking/Tracking");
var NewAudioManager = require("./managers/AudioManager");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!Number} width
 * @param {!Number} height
 * @constructor
 */
function Main(width, height) {
    /**
     * @type {!Number}
     * @private
     */
    this._width = width;

    /**
     * @type {!Number}
     * @private
     */
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
    this._scale = "hd/";

    /**
     * @type {String}
     * @private
     */
    this._renderFPS = 30.0;

    /**
     * @type {String}
     * @private
     */
    this._frameCount = 0;

    this._screenIncorrectRotation = false;

}
window.Main = Main;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
Main.prototype.init = function() {

    this._assetManager = p3.AssetManager.instance;
    this._screenManager = new SceneManager();

    Common.COUNTRY_CODE = window.og.language;

    var elementId = "og-game-holder";
    var params = new p3.ViewParams();
    params.width = this._width;
    params.height = this._height;
    params.holderID = elementId;
    //params.rotateImageUrl = "assets/images/system/" + Common.COUNTRY_CODE + "/rotate_device.jpg";
    params.rotateImageColor = "#000000";

    PIXI.RETINA_PREFIX = /\_(?=[^_]*$)(.+)x/;

    p3.Tracking.DEBUG = true;

    Common.tracking = new p3.Tracking();
    Common.tracking.init(new p3.TrackingModulePlaydom("", AIB_CONFIG.locale, "bd", "bd", ""));
    Common.tracking.track(new p3.TrackingDataPlaydomDeviceInfo("device_info", "desktop", null, null, null, null, null, null));

    p3.Device.init(window["bowser"]);

    TweenMax.defaultOverwrite = "none";
    TweenMax.ticker.fps(Common.FPS);

    var canvas = new p3.View(params);
    canvas.signals.ready.addOnce(function(canvas) {

        var options = {};
        options.view = canvas;
        options.transparent = false;
        options.antialias = false;
        options.preserveDrawingBuffer = false;
        options.resolution = this._resolution;
        this._assetManager.scaleFactor = this._resolution;

        var stage = new PIXI.Container();
        Common.stage = stage;

        if(p3.Device.isCocoonJS)
        {
            stage.scale.x = window.innerHeight / this._height;
            stage.scale.y = window.innerHeight / this._height;
            var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, options);
        }
        else
        {
            var renderer = PIXI.autoDetectRenderer(this._width, this._height, options);
        }
        
        Common.renderer = renderer;

        this._screenManager.init(stage, renderer);
        Common.sceneManager = this._screenManager;

        Common.isWebGL = (renderer instanceof PIXI.WebGLRenderer);
        Common.DEBUG_PAINT_MODE = p3.Utils.getURLParameter("paint", 0);

        var timestep = new p3.Timestep(p3.Timestep.FIXED);
        timestep.init(this.update, this.render, this);
        Common.timestep = timestep;

        Common.animator = new p3.Animator();
        Common.animator.init();

        Common.audioManager = new NewAudioManager();
        p3.Button.audio = Common.audioManager;

        this.loadPreloader();

    }, this);
    canvas.signals.resize.add(this.onCanvasResize, this);

    /*
    var font = new Font();
    font.fontFamily = "placard_mtcondensed_bold";
    font.src = "assets/fonts/placardmt/placardmt-condensedbold-webfont.ttf";
    font.onload = function() {
        console.log('font 1 loaded');
    };
    font.onerror = function(error_message) {console.log(error_message)};

    var font = new Font();
    font.fontFamily = "mandaliregular";
    font.src = "assets/fonts/mandali/mandali-regular-webfont.ttf";
    font.onload = function() {
        console.log('font 2 loaded');
    };
    font.onerror = function(error_message) {console.log(error_message)};
    */
};

/**
 */
Main.prototype.loadPreloader = function()
{
    scale = this._scale;
    var prefix = (scale === "sd/" ? "_0.5x" : "");
    var files = [
        {name:"loading_bg", url:"images/" + scale + "loading_bg" + prefix + ".jpg"},
        {name:"loading_0", url:"images/" + scale + "loading_0" + prefix + ".json"},
        //{name:"placardmt", url:"fonts/placardmt/stylesheet.css"},
        //{name:"mandali", url:"fonts/mandali/stylesheet.css"}
        //{name:"preloader", url:"images/" + scale + "preloader" + prefix + ".json"}
    ];
    var sounds = [
    ];
    if (files.length) {
        this._assetManager.addFiles(files, window.og.gameDir + "assets/");
        this._assetManager.signalCompleted.addOnce(function() {
            this.loadAssets();
        }, this);
        this._assetManager.load();

        Common.audioManager.addSounds(sounds, [".mp3", ".ogg"], "");
    } else {
        this.loadAssets();
    }
};

/**
 */
Main.prototype.loadAssets = function() {

    var scale = this._scale;
    var prefix = (scale === "sd/" ? "_0.5x" : "");
    var files = [
        {name:"game_0", url:"images/" + scale + "game_0" + prefix + ".json"},
        {name:"ui_0", url:"images/" + scale + "ui_0" + prefix + ".json"},
        {name:"menu_0", url:"images/" + scale + "menu_0" + prefix + ".json"},
        {name:"levelselect_bg", url:"images/" + scale + "levelselect_bg" + prefix + ".jpg"},
        {name:"endgame_bg", url:"images/" + scale + "endgame_bg" + prefix + ".jpg"},
        {name:"mainmenu_bg", url:"images/" + scale + "mainmenu_bg" + prefix + ".jpg"},
        
        {name:"game_title", url:"images/localized/game_title.png"},
        {name:"game_title_1", url:"images/localized/game_title_1.png"},
        {name:"game_title_2", url:"images/localized/game_title_2.png"},
        {name:"game_title_3", url:"images/localized/game_title_3.png"},
        {name:"laundry_title", url:"images/localized/laundry_title.png"},

        /*{name:"air_particle", url:"particles/air.json"},
        {name:"air_vent_particle", url:"particles/particle_airvent_vertical.json"},
        {name:"bubbles_particle", url:"particles/bubbles.json"},
        {name:"collectable_particle", url:"particles/collectable.json"},
        {name:"coin_loss_particle", url:"particles/coin_loss.json"},
        {name:"magnet_particle", url:"particles/magnet.json"},
        {name:"star_particle", url:"particles/star.json"},
        {name:"steam_particle", url:"particles/particle_steam.json"},
        {name:"steam_particle_opposite", url:"particles/particle_steam_opposite.json"},
        {name:"steam_menu", url:"particles/particle_emitter_menu_steam_00.json"}*/
    ];
    var sounds = [
        "music_gameloop_00",
        "music_gameloop_01",
        "music_gameover_lose_00",
        "music_gameover_win_00",
        "music_level_complete_03",
        "music_levelsloop_00",
        "music_mainmenuloop_00",
        "music_pauseloop_00",
        "sfx_ambience_city_00",
        "sfx_bad_guy_popup_00b",
        "sfx_bad_guy_popup_01b",
        "sfx_bad_guy_popup_02b",
        "sfx_btn_press_bck_00",
        "sfx_btn_press_fwd_00",
        "sfx_btn_press_play_00",
        "sfx_conveyor_alt_loop2",
        "sfx_conveyor_end",
        "sfx_conveyor_loop5",
        "sfx_conveyor_loop6",
        "sfx_conveyor_speedup_warning",
        "sfx_conveyor_start",
        "sfx_drop_off_rail_00",
        "sfx_drop_off_rail_01",
        "sfx_drop_off_rail_02",
        "sfx_falloff_rail_00c",
        "sfx_falloff_rail_01c",
        "sfx_falloff_rail_02c",
        "sfx_got_caught_00",
        "sfx_hit_air_dryer_01",
        "sfx_hit_brushes_01",
        "sfx_hit_steam_wash_00",
        "sfx_junction_press_05",
        "sfx_magnet_loop_00",
        "sfx_magnet_pickup_00",
        "sfx_steam_press_start_00",
        "sfx_shield_loop_02",
        "sfx_shield_pickup",
        "sfx_steam_whistle_end_00",
        "sfx_steam_whistle_start_00",
        "sfx_token_collect_04",
        "sfx_token_countup_end_00",
        "sfx_ui_neon_rollover_03"
    ];
    if (files.length) {
        this._assetManager.addFiles(files, window.og.gameDir + "assets/");
        this._assetManager.signalProgress.add(this.onLoadingProgress, this);
        this._assetManager.signalCompleted.addOnce(this.onLoadingCompleted, this);
        this._assetManager.load();

        this._preloader = new Preloader();
        this._screenManager.add(this._preloader);

        Common.audioManager.addSounds(sounds, [".mp3", ".ogg"], window.og.gameDir + "assets/audio/");
    } else {
        this.startGame();
    }
};

/**
 */
Main.prototype.startGame = function()
{
    this._preloader.loadedPercentage = 100;

    Common.animator.setTimeout(function()
    {
        var that = this;
        that._game = new Application();
        that._game.init();
        Common.tracking.track(new p3.TrackingDataPlaydomGameAction("", "game_load"));
    }, .5, this);
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
    if(this._frameCount % 2 == 0 || this._renderFPS == 60.0)
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
Main.prototype.onLoadingProgress = function(event) {
    this._preloader.loadedPercentage = event.progress;
};

/**
 */
Main.prototype.onLoadingCompleted = function() {
    //this._preloader.loadedPercentage = 100.0;
    //this._preloader.animateOut(null, this);

    //this._preloader = null;

    this._assetManager.signalProgress.removeAll();
    this._assetManager.signalCompleted.removeAll();

    if(this._preloader.fontLoaded)
    {
        this.startGame();
    }
    else
    {
        this._preloader.signals.fontLoaded.addOnce(this.startGame, this);
    }

};

/**
 * @param {!Boolean} correct
 */
Main.prototype.onCanvasResize = function(correct)
{
    if (correct) {
        Common.renderer.resize(p3.View.width, p3.View.height);

        if (this._screenManager) {
            this._screenManager.resize();
        }
        if(this._screenIncorrectRotation)
        {
            //this._game.resume();
            this._screenIncorrectRotation = false;
        }
    }
    else
    {
        if(!this._screenIncorrectRotation)
        {
            //this._game.pause();
            this._screenIncorrectRotation = true;
        }
    }
};

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"./Application":1,"./Common":2,"./lib/SceneManager":32,"./managers/AudioManager":34,"./screens/Preloader":45,"./tracking/Tracking":48}],4:[function(require,module,exports){

var Common          = require("./Common");

//===================================================
// CONSTRUCTOR
//===================================================

function SavedData()
{
    var assetManager = p3.AssetManager.instance;
    this.levelUnlocks = null;
    this.stars = 0;

    this._allUnlocked = false;

    /**
     * @type {String}
     * @const
     */
    this.SAVE_NAME = "adventures_in_babysitting";

    /**
     * @type {String}
     * @const
     */
    this.SAVE_VERSION = "0.0.8";

    /**
     * @type {String}
     * @const
     */
    this.SAVE_SEED = "x5k0Eo6R177mUkb";

    this.init();
}
module.exports = SavedData;

//===================================================
// PUBLIC METHODS
//===================================================

SavedData.prototype.init = function()
{
    if (!window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION] || this._allUnlocked)
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
    this.levelUnlocks = [];
    this.levelUnlocks[1] = {unlocked:true, completed:false, stars:0};
    this.levelUnlocks[2] = {unlocked:false, completed:false, stars:0};
    this.levelUnlocks[3] = {unlocked:false, completed:false, stars:0};
    this.levelUnlocks[4] = {unlocked:false, completed:false, stars:0};
    this.levelUnlocks[5] = {unlocked:false, completed:false, stars:0};
    this.levelUnlocks[6] = {unlocked:false, completed:false, stars:0};
    this.levelUnlocks[7] = {unlocked:false, completed:false, stars:0};
    this.levelUnlocks[8] = {unlocked:false, completed:false, stars:0};
    this.levelUnlocks[9] = {unlocked:false, completed:false, stars:0};

    this.stars = 0;

    if(this._allUnlocked)
    {
        for(var i = 1; i < this.levelUnlocks.length; i++)
        {
            this.levelUnlocks[i].unlocked = true; 
            //this.levelUnlocks[i].completed = true; 
        }
    }
};


SavedData.prototype.load = function()
{
    var data = window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION];
    data = JSON.parse(data);

    this.levelUnlocks = data.levelUnlocks;
    this.stars = data.stars;
};

SavedData.prototype.save = function()
{
    console.log('save');

    this._calculateStarsAndUnlocks();

    var data = {};
    data.levelUnlocks = this.levelUnlocks;
    data.stars = this.stars;

    var json = JSON.stringify(data);
    data.hash = md5(json + this.SAVE_SEED);

    window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION] = JSON.stringify(data);    
};

SavedData.prototype.hasCompletedAllLevels = function()
{   
    var allComplete = true;
    for(var i = 1; i < this.levelUnlocks.length; i++)
    {
        if(this.levelUnlocks[i].completed != true)
        {
            allComplete = false;
        }
    }
    return allComplete;
};




//===================================================
// PRIVATE METHODS
//===================================================

SavedData.prototype._calculateStarsAndUnlocks = function()
{
    this.stars = 0;
    for(var i = 1; i < this.levelUnlocks.length; i++)
    {
        this.stars += this.levelUnlocks[i].stars;
    }
    if(!this._allUnlocked)
    {
        for(var i = 1; i < this.levelUnlocks.length; i++)
        {
            this.levelUnlocks[i].unlocked = false;
            if(Common.levelData.levels[i].stars_required <= this.stars)
            {
                if(i == 1 || this.levelUnlocks[Math.max(1, i-1)].completed == true)
                    this.levelUnlocks[i].unlocked = true;
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

//===================================================
},{"./Common":2}],5:[function(require,module,exports){

var Common        = require("../Common");
var Rail          = require("../game/Rail");


//===================================================
// CONSTRUCTOR
//===================================================

function LevelData()
{
    this.levelsRaw          = null;
    this.tilesRaw           = null;

    this.tiles              = null;
    this.levels             = null;
    this.levelUnlocks       = null;

    this.worlds             = null;
    this.activeObjects      = null;

    this.init();
}
module.exports = LevelData;

//===================================================
// PUBLIC METHODS
//===================================================

LevelData.prototype.init = function()
{
    this.worlds = {'floor':['floor_walls', 'rail_shadows_generated'], 'background':['objects'], 'rails':['rails', 'interactive_objects']};

    this.activeObjects = {
        star_2: {object:'token', args:[], useTile:false},
        obstacle_spray_001: {object:'obstacle', args:['spray'], useTile:false},
        obstacle_brush_001: {object:'obstacle', args:['brush'], useTile:false},
        obstacle_fans_001: {object:'obstacle', args:['fans'], useTile:false},
        collectable_magnet_icon: {object:'powerup', args:['magnet'], useTile:false},
        collectable_sheild_icon: {object:'powerup', args:['shield'], useTile:false},
        character_bad_001_left: {object:'enemy', args:['left'], useTile:true},
        character_bad_001_right: {object:'enemy', args:['right'], useTile:true},
        character_bad_002_left: {object:'enemy', args:['left'], useTile:true},
        character_bad_002_right: {object:'enemy', args:['right'], useTile:true}
    };

    for(var r in Common.railManager.railTypes)
    {
        if(Common.railManager.railTypes[r].length == 2)
            this.activeObjects[r] = {object:'rail', args:Common.railManager.railTypes[r], useTile:true};
        else
            this.activeObjects[r] = {object:'railjunction', args:Common.railManager.railTypes[r], useTile:true};
    }

    this.levelsRaw = {

        "0":{
            "start":{col:3, row:20, direction:"downright"},
            "end":{col:38, row:44},
            "tutorial":[
                {col:4, row:23, text:'TUTORIAL_RAILS', offset:{x:300, y:100}},
                {col:8, row:31, text:'TUTORIAL_ENEMIES', offset:{x:170, y:160}},
                {col:7, row:34, text:'TUTORIAL_ENEMIES', offset:{x:370, y:70}},
                {col:8, row:46, text:'TUTORIAL_COINS', offset:{x:0, y:0}},
                {col:19, row:25, text:'TUTORIAL_MAGNET', offset:{x:300, y:-30}},
                {col:19, row:22, text:'TUTORIAL_MAGNET', offset:{x:360, y:50}},
                {col:25, row:30, text:'TUTORIAL_OBSTACLES', offset:{x:200, y:200}},
                {col:28, row:45, text:'TUTORIAL_SHIELD', offset:{x:140, y:-40}},
                {col:28, row:42, text:'TUTORIAL_SHIELD', offset:{x:200, y:50}},
            ],
            "speed":2.5,
            "stars_required":0,
            "layers": AIB_level0
            },
        "1":{
            "start":{col:7, row:16, direction:"downleft"},
            "end":{col:34, row:62},
            "speed":3,
            "stars_required":1,
            "layers": AIB_level1
            },
        "2":{
            "start":{col:3, row:21, direction:"downright"},
            "end":{col:50, row:58},
            "speed":3.5,
            "stars_required":2,
            "layers": AIB_level2
            },
        "3":{
            "start":{col:7, row:17, direction:"downleft"},
            "end":{col:46, row:18},
            "speed":4,
            "stars_required":4,
            "layers": AIB_level3
            },
        "4":{
            "start":{col:7, row:16, direction:"downleft"},
            "end":{col:24, row:81},
            "speed":4.5,
            "stars_required":6,
            "layers": AIB_level4
            },
        "5":{
            "start":{col:4, row:19, direction:"downright"},
            "end":{col:46, row:59},
            "speed":4,
            "stars_required":8,
            "layers": AIB_level5
            },
        "6":{
            "start":{col:6, row:17, direction:"downleft"},
            "end":{col:67, row:84},
            "speed":5,
            "stars_required":10,
            "layers": AIB_level6
            },
        "7":{
            "start":{col:6, row:17, direction:"downleft"},
            "end":{col:58, row:73},
            "speed":6,
            "stars_required":12,
            "layers": AIB_level7
            },
        "8":{
            "start":{col:6, row:17, direction:"downleft"},
            "end":{col:65, row:77},
            "speed":7,
            "stars_required":16,
            "layers": AIB_level8
            }

    };
    
    this.tilesRaw = {
         "tilesets":[
        {
         "columns":0,
         "firstgid":1,
         "margin":0,
         "name":"objects",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":82,
         "tileheight":350,
         "tiles":
            {
             "1":
                {
                 "image":"..\/textures\/tiles\/tile_cage.png"
                },
             "10":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_005.png"
                },
             "100":
                {
                 "image":"..\/textures\/tiles\/tile_lockers_l.png"
                },
             "101":
                {
                 "image":"..\/textures\/tiles\/tile_lockers_r.png"
                },
             "102":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_001.png"
                },
             "103":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_002.png"
                },
             "104":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_003.png"
                },
             "105":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_004.png"
                },
             "106":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_truck_003.png"
                },
             "107":
                {
                 "image":"..\/textures\/tiles\/tile_pillar_001.png"
                },
             "108":
                {
                 "image":"..\/textures\/tiles\/tile_pillar_002.png"
                },
             "109":
                {
                 "image":"..\/textures\/tiles\/tile_pillar_003.png"
                },
             "11":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_006.png"
                },
             "110":
                {
                 "image":"..\/textures\/tiles\/tile_pillar_004.png"
                },
             "111":
                {
                 "image":"..\/textures\/tiles\/tile_pillar_005.png"
                },
             "112":
                {
                 "image":"..\/textures\/tiles\/tile_rack_001.png"
                },
             "113":
                {
                 "image":"..\/textures\/tiles\/tile_rack_002.png"
                },
             "114":
                {
                 "image":"..\/textures\/tiles\/tile_rack_003.png"
                },
             "115":
                {
                 "image":"..\/textures\/tiles\/tile_rack_004.png"
                },
             "12":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_007.png"
                },
             "127":
                {
                 "image":"..\/textures\/tiles\/walkway_corner_001.png"
                },
             "128":
                {
                 "image":"..\/textures\/tiles\/walkway_corner_002.png"
                },
             "129":
                {
                 "image":"..\/textures\/tiles\/walkway_l_001.png"
                },
             "130":
                {
                 "image":"..\/textures\/tiles\/walkway_l_002.png"
                },
             "131":
                {
                 "image":"..\/textures\/tiles\/walkway_r_001.png"
                },
             "132":
                {
                 "image":"..\/textures\/tiles\/walkway_r_002.png"
                },
             "133":
                {
                 "image":"..\/textures\/tiles\/walkway_r_003.png"
                },
             "134":
                {
                 "image":"..\/textures\/tiles\/walkway_stairs_l_001.png"
                },
             "135":
                {
                 "image":"..\/textures\/tiles\/walkway_stairs_l_002.png"
                },
             "136":
                {
                 "image":"..\/textures\/tiles\/walkway_stairs_l_003.png"
                },
             "137":
                {
                 "image":"..\/textures\/tiles\/walkway_stairs_r_001.png"
                },
             "138":
                {
                 "image":"..\/textures\/tiles\/walkway_stairs_r_002.png"
                },
             "139":
                {
                 "image":"..\/textures\/tiles\/walkway_stairs_r_003.png"
                },
             "14":
                {
                 "image":"..\/textures\/tiles\/tile_machine_001.png"
                },
             "140":
                {
                 "image":"..\/textures\/tiles\/walkway_support_l.png"
                },
             "141":
                {
                 "image":"..\/textures\/tiles\/walkway_support_r.png"
                },
             "142":
                {
                 "image":"..\/textures\/tiles\/walkway_l_003.png"
                },
             "18":
                {
                 "image":"..\/textures\/tiles\/tile_pipes_001.png"
                },
             "19":
                {
                 "image":"..\/textures\/tiles\/tile_pipes_002.png"
                },
             "20":
                {
                 "image":"..\/textures\/tiles\/tile_pipes_003.png"
                },
             "21":
                {
                 "image":"..\/textures\/tiles\/tile_pipes_004.png"
                },
             "22":
                {
                 "image":"..\/textures\/tiles\/tile_pipes_005.png"
                },
             "23":
                {
                 "image":"..\/textures\/tiles\/tile_pipes_006.png"
                },
             "24":
                {
                 "image":"..\/textures\/tiles\/tile_raised_floor.png"
                },
             "25":
                {
                 "image":"..\/textures\/tiles\/tile_raised_rails.png"
                },
             "26":
                {
                 "image":"..\/textures\/tiles\/tile_raised_rails_end.png"
                },
             "27":
                {
                 "image":"..\/textures\/tiles\/tile_raised_rails_start.png"
                },
             "28":
                {
                 "image":"..\/textures\/tiles\/tile_raised_steps_l.png"
                },
             "29":
                {
                 "image":"..\/textures\/tiles\/tile_raised_steps_r.png"
                },
             "30":
                {
                 "image":"..\/textures\/tiles\/tile_rubber_mats_001.png"
                },
             "31":
                {
                 "image":"..\/textures\/tiles\/tile_rubber_mats_002.png"
                },
             "32":
                {
                 "image":"..\/textures\/tiles\/tile_rubber_mats_003.png"
                },
             "33":
                {
                 "image":"..\/textures\/tiles\/tile_rubber_mats_004.png"
                },
             "34":
                {
                 "image":"..\/textures\/tiles\/tile_rubber_mats_005.png"
                },
             "44":
                {
                 "image":"..\/textures\/tiles\/tile_washing.png"
                },
             "51":
                {
                 "image":"..\/textures\/tiles\/tile_washing_big_001.png"
                },
             "52":
                {
                 "image":"..\/textures\/tiles\/tile_washing_big_002.png"
                },
             "57":
                {
                 "image":"..\/textures\/tiles\/tile_barrels.png"
                },
             "58":
                {
                 "image":"..\/textures\/tiles\/tile_boxes.png"
                },
             "59":
                {
                 "image":"..\/textures\/tiles\/tile_clothes_001.png"
                },
             "6":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_001.png"
                },
             "60":
                {
                 "image":"..\/textures\/tiles\/tile_clothes_002.png"
                },
             "62":
                {
                 "image":"..\/textures\/tiles\/tile_desk.png"
                },
             "63":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_000.png"
                },
             "64":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_008.png"
                },
             "65":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_009.png"
                },
             "67":
                {
                 "image":"..\/textures\/tiles\/tile_machine_002.png"
                },
             "7":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_002.png"
                },
             "72":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_jack.png"
                },
             "73":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_truck_001.png"
                },
             "74":
                {
                 "image":"..\/textures\/tiles\/tile_pallet_truck_002.png"
                },
             "79":
                {
                 "image":"..\/textures\/tiles\/tile_shelves_001.png"
                },
             "8":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_003.png"
                },
             "80":
                {
                 "image":"..\/textures\/tiles\/tile_shelves_002.png"
                },
             "81":
                {
                 "image":"..\/textures\/tiles\/tile_shelves_003.png"
                },
             "82":
                {
                 "image":"..\/textures\/tiles\/tile_shelves_004.png"
                },
             "83":
                {
                 "image":"..\/textures\/tiles\/tile_table.png"
                },
             "9":
                {
                 "image":"..\/textures\/tiles\/tile_floor_markings_004.png"
                },
             "96":
                {
                 "image":"..\/textures\/tiles\/tile_clothes_bin_001.png"
                },
             "97":
                {
                 "image":"..\/textures\/tiles\/tile_clothes_bin_002.png"
                },
             "98":
                {
                 "image":"..\/textures\/tiles\/tile_clothes_bin_003.png"
                },
             "99":
                {
                 "image":"..\/textures\/tiles\/tile_clothes_bin_004.png"
                }
            },
         "tilewidth":128
        }, 
        {
         "columns":0,
         "firstgid":144,
         "margin":0,
         "name":"rails",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":116,
         "tileheight":300,
         "tiles":
            {
             "136":
                {
                 "image":"..\/textures\/tiles\/rail_001.png"
                },
             "137":
                {
                 "image":"..\/textures\/tiles\/rail_001_shadow.png"
                },
             "138":
                {
                 "image":"..\/textures\/tiles\/rail_002.png"
                },
             "139":
                {
                 "image":"..\/textures\/tiles\/rail_002_shadow.png"
                },
             "140":
                {
                 "image":"..\/textures\/tiles\/rail_003.png"
                },
             "141":
                {
                 "image":"..\/textures\/tiles\/rail_003_shadow.png"
                },
             "142":
                {
                 "image":"..\/textures\/tiles\/rail_004.png"
                },
             "143":
                {
                 "image":"..\/textures\/tiles\/rail_004_shadow.png"
                },
             "144":
                {
                 "image":"..\/textures\/tiles\/rail_005.png"
                },
             "145":
                {
                 "image":"..\/textures\/tiles\/rail_005_shadow.png"
                },
             "146":
                {
                 "image":"..\/textures\/tiles\/rail_006.png"
                },
             "147":
                {
                 "image":"..\/textures\/tiles\/rail_006_shadow.png"
                },
             "148":
                {
                 "image":"..\/textures\/tiles\/rail_007.png"
                },
             "149":
                {
                 "image":"..\/textures\/tiles\/rail_007_shadow.png"
                },
             "150":
                {
                 "image":"..\/textures\/tiles\/rail_008.png"
                },
             "151":
                {
                 "image":"..\/textures\/tiles\/rail_008_shadow.png"
                },
             "152":
                {
                 "image":"..\/textures\/tiles\/rail_009.png"
                },
             "153":
                {
                 "image":"..\/textures\/tiles\/rail_009_shadow.png"
                },
             "154":
                {
                 "image":"..\/textures\/tiles\/rail_010.png"
                },
             "155":
                {
                 "image":"..\/textures\/tiles\/rail_010_shadow.png"
                },
             "156":
                {
                 "image":"..\/textures\/tiles\/rail_011.png"
                },
             "157":
                {
                 "image":"..\/textures\/tiles\/rail_011_shadow.png"
                },
             "158":
                {
                 "image":"..\/textures\/tiles\/rail_012.png"
                },
             "159":
                {
                 "image":"..\/textures\/tiles\/rail_012_shadow.png"
                },
             "160":
                {
                 "image":"..\/textures\/tiles\/rail_013.png"
                },
             "161":
                {
                 "image":"..\/textures\/tiles\/rail_013_shadow.png"
                },
             "162":
                {
                 "image":"..\/textures\/tiles\/rail_014.png"
                },
             "163":
                {
                 "image":"..\/textures\/tiles\/rail_014_shadow.png"
                },
             "164":
                {
                 "image":"..\/textures\/tiles\/rail_015.png"
                },
             "165":
                {
                 "image":"..\/textures\/tiles\/rail_015_shadow.png"
                },
             "166":
                {
                 "image":"..\/textures\/tiles\/rail_016.png"
                },
             "167":
                {
                 "image":"..\/textures\/tiles\/rail_016_shadow.png"
                },
             "168":
                {
                 "image":"..\/textures\/tiles\/rail_017.png"
                },
             "169":
                {
                 "image":"..\/textures\/tiles\/rail_017_shadow.png"
                },
             "170":
                {
                 "image":"..\/textures\/tiles\/rail_018.png"
                },
             "171":
                {
                 "image":"..\/textures\/tiles\/rail_018_shadow.png"
                },
             "172":
                {
                 "image":"..\/textures\/tiles\/rail_019.png"
                },
             "173":
                {
                 "image":"..\/textures\/tiles\/rail_019_shadow.png"
                },
             "174":
                {
                 "image":"..\/textures\/tiles\/rail_020.png"
                },
             "175":
                {
                 "image":"..\/textures\/tiles\/rail_020_shadow.png"
                },
             "176":
                {
                 "image":"..\/textures\/tiles\/rail_021.png"
                },
             "177":
                {
                 "image":"..\/textures\/tiles\/rail_021_shadow.png"
                },
             "178":
                {
                 "image":"..\/textures\/tiles\/rail_022.png"
                },
             "179":
                {
                 "image":"..\/textures\/tiles\/rail_022_shadow.png"
                },
             "180":
                {
                 "image":"..\/textures\/tiles\/rail_023.png"
                },
             "181":
                {
                 "image":"..\/textures\/tiles\/rail_023_shadow.png"
                },
             "182":
                {
                 "image":"..\/textures\/tiles\/rail_024.png"
                },
             "183":
                {
                 "image":"..\/textures\/tiles\/rail_024_shadow.png"
                },
             "184":
                {
                 "image":"..\/textures\/tiles\/rail_025.png"
                },
             "185":
                {
                 "image":"..\/textures\/tiles\/rail_025_shadow.png"
                },
             "186":
                {
                 "image":"..\/textures\/tiles\/rail_026.png"
                },
             "187":
                {
                 "image":"..\/textures\/tiles\/rail_026_shadow.png"
                },
             "188":
                {
                 "image":"..\/textures\/tiles\/rail_027.png"
                },
             "189":
                {
                 "image":"..\/textures\/tiles\/rail_027_shadow.png"
                },
             "190":
                {
                 "image":"..\/textures\/tiles\/rail_028.png"
                },
             "191":
                {
                 "image":"..\/textures\/tiles\/rail_028_shadow.png"
                },
             "192":
                {
                 "image":"..\/textures\/tiles\/rail_029.png"
                },
             "193":
                {
                 "image":"..\/textures\/tiles\/rail_029_shadow.png"
                },
             "194":
                {
                 "image":"..\/textures\/tiles\/rail_030.png"
                },
             "195":
                {
                 "image":"..\/textures\/tiles\/rail_030_shadow.png"
                },
             "196":
                {
                 "image":"..\/textures\/tiles\/rail_031.png"
                },
             "197":
                {
                 "image":"..\/textures\/tiles\/rail_031_shadow.png"
                },
             "198":
                {
                 "image":"..\/textures\/tiles\/rail_032.png"
                },
             "199":
                {
                 "image":"..\/textures\/tiles\/rail_032_shadow.png"
                },
             "200":
                {
                 "image":"..\/textures\/tiles\/rail_033.png"
                },
             "201":
                {
                 "image":"..\/textures\/tiles\/rail_033_shadow.png"
                },
             "202":
                {
                 "image":"..\/textures\/tiles\/rail_034.png"
                },
             "203":
                {
                 "image":"..\/textures\/tiles\/rail_034_shadow.png"
                },
             "204":
                {
                 "image":"..\/textures\/tiles\/rail_035.png"
                },
             "205":
                {
                 "image":"..\/textures\/tiles\/rail_035_shadow.png"
                },
             "206":
                {
                 "image":"..\/textures\/tiles\/rail_036.png"
                },
             "207":
                {
                 "image":"..\/textures\/tiles\/rail_036_shadow.png"
                },
             "208":
                {
                 "image":"..\/textures\/tiles\/rail_037.png"
                },
             "209":
                {
                 "image":"..\/textures\/tiles\/rail_037_shadow.png"
                },
             "210":
                {
                 "image":"..\/textures\/tiles\/rail_038.png"
                },
             "211":
                {
                 "image":"..\/textures\/tiles\/rail_038_shadow.png"
                },
             "212":
                {
                 "image":"..\/textures\/tiles\/rail_039.png"
                },
             "213":
                {
                 "image":"..\/textures\/tiles\/rail_039_shadow.png"
                },
             "214":
                {
                 "image":"..\/textures\/tiles\/rail_040.png"
                },
             "215":
                {
                 "image":"..\/textures\/tiles\/rail_040_shadow.png"
                },
             "216":
                {
                 "image":"..\/textures\/tiles\/rail_junction_001.png"
                },
             "217":
                {
                 "image":"..\/textures\/tiles\/rail_junction_001_shadow.png"
                },
             "218":
                {
                 "image":"..\/textures\/tiles\/rail_junction_002.png"
                },
             "219":
                {
                 "image":"..\/textures\/tiles\/rail_junction_002_shadow.png"
                },
             "220":
                {
                 "image":"..\/textures\/tiles\/rail_junction_003.png"
                },
             "221":
                {
                 "image":"..\/textures\/tiles\/rail_junction_003_shadow.png"
                },
             "222":
                {
                 "image":"..\/textures\/tiles\/rail_junction_004.png"
                },
             "223":
                {
                 "image":"..\/textures\/tiles\/rail_junction_004_shadow.png"
                },
             "224":
                {
                 "image":"..\/textures\/tiles\/rail_junction_005.png"
                },
             "225":
                {
                 "image":"..\/textures\/tiles\/rail_junction_005_shadow.png"
                },
             "226":
                {
                 "image":"..\/textures\/tiles\/rail_junction_006.png"
                },
             "227":
                {
                 "image":"..\/textures\/tiles\/rail_junction_006_shadow.png"
                },
             "228":
                {
                 "image":"..\/textures\/tiles\/rail_junction_007.png"
                },
             "229":
                {
                 "image":"..\/textures\/tiles\/rail_junction_007_shadow.png"
                },
             "230":
                {
                 "image":"..\/textures\/tiles\/rail_junction_008.png"
                },
             "231":
                {
                 "image":"..\/textures\/tiles\/rail_junction_008_shadow.png"
                },
             "232":
                {
                 "image":"..\/textures\/tiles\/rail_junction_009.png"
                },
             "233":
                {
                 "image":"..\/textures\/tiles\/rail_junction_009_shadow.png"
                },
             "234":
                {
                 "image":"..\/textures\/tiles\/rail_junction_010.png"
                },
             "235":
                {
                 "image":"..\/textures\/tiles\/rail_junction_010_shadow.png"
                },
             "236":
                {
                 "image":"..\/textures\/tiles\/rail_junction_011.png"
                },
             "237":
                {
                 "image":"..\/textures\/tiles\/rail_junction_011_shadow.png"
                },
             "238":
                {
                 "image":"..\/textures\/tiles\/rail_junction_012.png"
                },
             "239":
                {
                 "image":"..\/textures\/tiles\/rail_junction_012_shadow.png"
                },
             "240":
                {
                 "image":"..\/textures\/tiles\/rail_junction_013.png"
                },
             "241":
                {
                 "image":"..\/textures\/tiles\/rail_junction_013_shadow.png"
                },
             "242":
                {
                 "image":"..\/textures\/tiles\/rail_junction_014.png"
                },
             "243":
                {
                 "image":"..\/textures\/tiles\/rail_junction_014_shadow.png"
                },
             "244":
                {
                 "image":"..\/textures\/tiles\/rail_junction_015.png"
                },
             "245":
                {
                 "image":"..\/textures\/tiles\/rail_junction_015_shadow.png"
                },
             "246":
                {
                 "image":"..\/textures\/tiles\/rail_junction_016.png"
                },
             "247":
                {
                 "image":"..\/textures\/tiles\/rail_junction_016_shadow.png"
                },
             "248":
                {
                 "image":"..\/textures\/tiles\/rail_junction_017.png"
                },
             "249":
                {
                 "image":"..\/textures\/tiles\/rail_junction_017_shadow.png"
                },
             "250":
                {
                 "image":"..\/textures\/tiles\/rail_junction_018.png"
                },
             "251":
                {
                 "image":"..\/textures\/tiles\/rail_junction_018_shadow.png"
                }
            },
         "tilewidth":128
        }, 
        {
         "columns":0,
         "firstgid":396,
         "margin":0,
         "name":"floor_walls",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":29,
         "tileheight":350,
         "tiles":
            {
             "0":
                {
                 "image":"..\/textures\/tiles\/tile_floor.png"
                },
             "10":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_gate_1.png"
                },
             "11":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_gate_2.png"
                },
             "12":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_gate_3.png"
                },
             "13":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_pillar.png"
                },
             "14":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_pillar_top.png"
                },
             "15":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_top.png"
                },
             "16":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_window_1.png"
                },
             "17":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_window_1_top.png"
                },
             "18":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_window_2.png"
                },
             "19":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_window_2_top.png"
                },
             "2":
                {
                 "image":"..\/textures\/tiles\/tile_floor_wood.png"
                },
             "20":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r.png"
                },
             "21":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_corner.png"
                },
             "22":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_door.png"
                },
             "23":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_pillar.png"
                },
             "24":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_pillar_top.png"
                },
             "25":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_top.png"
                },
             "26":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_window_1.png"
                },
             "27":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_window_1_top.png"
                },
             "28":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_window_2.png"
                },
             "29":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_window_2_top.png"
                },
             "3":
                {
                 "image":"..\/textures\/tiles\/tile_floor_dirty_000.png"
                },
             "30":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_window_3.png"
                },
             "31":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_corner_pillar.png"
                },
             "32":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_pillarend_top.png"
                },
             "33":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_window_3.png"
                },
             "34":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_window_3_top.png"
                },
             "35":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_corner_pillar.png"
                },
             "36":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_pillar_end_top.png"
                },
             "37":
                {
                 "image":"..\/textures\/tiles\/tile_wall_r_window_3_top.png"
                },
             "4":
                {
                 "image":"..\/textures\/tiles\/tile_floor_dirty_001.png"
                },
             "5":
                {
                 "image":"..\/textures\/tiles\/tile_floor_dirty_002.png"
                },
             "6":
                {
                 "image":"..\/textures\/tiles\/tile_wall_corner.png"
                },
             "7":
                {
                 "image":"..\/textures\/tiles\/tile_wall_corner_top-.png"
                },
             "8":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l.png"
                },
             "9":
                {
                 "image":"..\/textures\/tiles\/tile_wall_l_corner.png"
                }
            },
         "tilewidth":128
        },
        {
         "columns":0,
         "firstgid":434,
         "margin":0,
         "name":"interactive_objects",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":6,
         "tileheight":300,
         "tiles":
            {
            "10":
                {
                 "image":"collectible_images\/character_bad_001_left.png"
                },
             "11":
                {
                 "image":"collectible_images\/character_bad_001_right.png"
                },
             "12":
                {
                 "image":"collectible_images\/character_bad_002_left.png"
                },
             "13":
                {
                 "image":"collectible_images\/character_bad_002_right.png"
                },
             "3":
                {
                 "image":"collectible_images\/collectable_magnet_icon.png"
                },
             "4":
                {
                 "image":"collectible_images\/collectable_sheild_icon.png"
                },
             "6":
                {
                 "image":"..\/textures\/tiles\/obstacle_brush_001.png"
                },
             "7":
                {
                 "image":"..\/textures\/tiles\/obstacle_fans_001.png"
                },
             "8":
                {
                 "image":"..\/textures\/tiles\/obstacle_spray_001.png"
                },
             "9":
                {
                 "image":"collectible_images\/star_2.png"
                }
            },
         "tilewidth":128
        }]
    };

    this.tiles = [];
    var start = 1;
    for(var i = 0; i < this.tilesRaw.tilesets.length; i++)
    {
        var ts = this.tilesRaw.tilesets[i];

        for(var j in ts.tiles)
        {
            this.tiles[Number(j) + start] = ts.tiles[j].image.replace("..\/textures\/tiles\/", "").replace("collectible_images\/", "").replace(".png", "");
        }

        start = this.tiles.length;       
    }

    this.prepareData();
};

LevelData.prototype.prepareData = function()
{   
    this.levels = [];
    var count = 0;
    for(var i in this.levelsRaw)
    {
        var level = {layers:{}, start:this.levelsRaw[i].start, 
                                end:this.levelsRaw[i].end, 
                                speed:this.levelsRaw[i].speed, 
                                stars_required:this.levelsRaw[i].stars_required, 
                                total_tokens:0,
                                tutorial:this.levelsRaw[i].tutorial
                            };

        for(var j = 0; j < this.levelsRaw[i].layers.length; j++)
        {
            var layer = this.levelsRaw[i].layers[j];
            var arr = {0:{}};
            var row = 0;
            var col = 0;
            for(var k = 0; k < layer.data.length; k++)
            {  
                if(layer.data[k] > 0)
                    arr[row][col] = layer.data[k];
                col++;
                if(col > layer.width-1)
                {
                    row++;
                    arr[row] = {};
                    col = 0;
                }
                if(this.tiles[layer.data[k]] == 'star_2')
                {
                    level.total_tokens++;
                }
            }
            level.layers[layer.name] = arr;
        }
        count++;
        this.levels[count] = level;

        //Create Rail shadows

        var railShadowLayer = {};
        var railLayer = level.layers['rails'];

        for(var j in railLayer)
        {
            var obj = {};
            for(var k in railLayer[j])
            {
                var r = this.tiles[railLayer[j][k]];
                for(var l in this.tiles)
                {
                    if(this.tiles[l] == r + '_shadow')
                    {
                        obj[k] = Number(l);
                    }
                }
            }
            railShadowLayer[j] = obj;
        }
        level.layers['rail_shadows_generated'] = railShadowLayer;

        //Create Test tokens
        /*
        var testTokenLayer = {};
        var railLayer = level.layers['rails'];
        var testTokenGraphic = null;
        var testObstacleSprayGraphic = null;
        var testObstacleBrushGraphic = null;
        var testCollectibleMagnetGraphic = null;
        var testCollectibleShieldGraphic = null;
        this.tiles.push('obstacle_spray_001');
        this.tiles.push('obstacle_brush_001');
        this.tiles.push('obstacle_fans_001');
        this.tiles.push('collectable_magnet_icon');
        this.tiles.push('collectable_sheild_icon');

        for(var l in this.tiles)
        {
            if(this.tiles[l] == 'rail_junction_017')
            {
                testTokenGraphic = Number(l);
            }
            else if(this.tiles[l] == 'obstacle_spray_001')
            {
                testObstacleSprayGraphic = Number(l);
            }
            else if(this.tiles[l] == 'obstacle_brush_001')
            {
                testObstacleBrushGraphic = Number(l);
            }
            else if(this.tiles[l] == 'obstacle_fans_001')
            {
                testObstacleFansGraphic = Number(l);
            }
            else if(this.tiles[l] == 'obstacle_fans_001')
            {
                testObstacleFansGraphic = Number(l);
            }
            else if(this.tiles[l] == 'collectable_magnet_icon')
            {
                testCollectibleMagnetGraphic = Number(l);
            }
            else if(this.tiles[l] == 'collectable_sheild_icon')
            {
                testCollectibleShieldGraphic = Number(l);
            }
        }

        for(var j in railLayer)
        {
            var obj = {};
            for(var k in railLayer[j])
            {
                var r = this.tiles[railLayer[j][k]];
                if(r == 'rail_005' && Math.random() > 0.66)
                {
                    var rand = Math.random();
                    if(rand < 0.33)
                        obj[k] = testObstacleSprayGraphic;
                    else if(rand < 0.66)
                        obj[k] = testObstacleFansGraphic;
                    else
                        obj[k] = testObstacleBrushGraphic;
                }
                else if(Math.random() < 0.1)
                {
                    if(Math.random() < 0.5)
                        obj[k] = testCollectibleShieldGraphic;
                    else
                        obj[k] = testCollectibleMagnetGraphic;
                }
                else
                {
                    obj[k] = testTokenGraphic;
                    level.total_tokens++;
                }
            }
            testTokenLayer[j] = obj;
        }
        level.layers['test_tokens'] = testTokenLayer;*/

    }
    //console.log(this.levels);
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


},{"../Common":2,"../game/Rail":17}],6:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function ActiveObject(tile)
{
	this._assetManager		= p3.AssetManager.instance;

	this.type				= null;
	this.tile				= tile;

	this.row			 	= tile.row;
	this.col			 	= tile.col;

	this.x				 	= null;
	this.y				 	= null;

	this.signals		 	= {};
	this.signals.cleared 	= new signals.Signal();
	this.signals.collide	= new signals.Signal();
}
module.exports = ActiveObject;



//===================================================
// PUBLIC METHODS
//===================================================

ActiveObject.prototype.init = function()
{
	this.tile.signals.cleared.addOnce(this.onTileCleared, this);
};

ActiveObject.prototype.update = function()
{
	
}

ActiveObject.prototype.collide = function()
{

};

ActiveObject.prototype.pause = function()
{

};

ActiveObject.prototype.resume = function()
{
	
};



//===================================================
// PRIVATE METHODS
//===================================================

ActiveObject.prototype._generateAnimationSequence = function(animation, frameLimit, startFrame)
{
    var textureArr = [];
    for(var i = startFrame; i <= frameLimit; i++)
    {   
        var precede = i < 10 ? "00" : "0";
        textureArr.push(animation + precede + i);
    }
    for(var i = 0; i < textureArr.length; i++)
    {
        textureArr[i] = this._assetManager.getTexture(textureArr[i]);
    }
    var sequence = new p3.MovieClipSequence();
    sequence.addTextures(textureArr);

    return sequence;
}

ActiveObject.prototype.getLayeringY = function()
{
	return this.y;
};


//===================================================
// EVENTS
//===================================================


ActiveObject.prototype.onTileCleared = function()
{
	this.signals.cleared.dispatch(this);
}

//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2}],7:[function(require,module,exports){
var Common          = require("../Common");
var Tile           	= require("./Tile");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Layer()
{
	this.signals 					= {};

	this.signals.activeObjectFound	= new signals.Signal();

	this.row 						= null;
	this.yPosition					= null;
	this._tiles						= null;
	this._freeTiles					= null;
    
    PIXI.Container.call(this);

    this.init();
}
module.exports = Layer;
Layer.prototype = Object.create(PIXI.Container.prototype);
Layer.prototype.constructor = Layer;


//===================================================
// PUBLIC METHODS
//===================================================

Layer.prototype.init = function()
{
    this._tiles = [];
    this._freeTiles = [];
};

Layer.prototype.clear = function()
{
    while(this._tiles.length > 0)
    {
    	this._tiles[0].clear();
    	this._tiles[0].removeChildren();
    	if(this._tiles[0].parent)
    		this.removeChild(this._tiles[0]);
    	this._freeTiles.push(this._tiles[0]);
    	this._tiles.splice(0, 1);
    }
}

Layer.prototype.fill = function(x, y, tileImages, tileWidth)
{
	var currentX = x;
	this.yPosition = y;

	//for(var i = 0; i < Math.ceil(Common.STAGE_WIDTH / tileWidth); i++)
	for(var i = 0; i < tileImages.length; i++)
	{
		if(tileImages[i] != null)
		{
			for(var t = 0; t < tileImages[i].length; t++)
			{
				var tile = this._getTile(tileImages[i][t].image);
				tile.x = currentX;
				tile.y = y;
				tile.levelDataLayer = tileImages[i][t].layer;
				this._tiles.push(tile);

				tile.row = this.row;
				tile.col = i;

				if(Common.levelData.activeObjects[tileImages[i][t].image] != undefined)
				{
					this.signals.activeObjectFound.dispatch(tile, tileImages[i][t].image);

					if(Common.levelData.activeObjects[tileImages[i][t].image].useTile)
					{
						this.addChild(tile);
					}
				}
				else
				{
					this.addChild(tile);
				}
			}
		}
		currentX += tileWidth;
	}
}

Layer.prototype.getTilesByX = function(x)
{
	var tiles = [];
	for(var i = 0; i < this._tiles.length; i++)
	{
		if(this._tiles[i].x <= x && this._tiles[i].x + (Common.squareTileSize * 4) > x)
		{
			tiles.push(this._tiles[i]);
		}
	}
	return tiles;
}

Layer.prototype.getTilesByCol = function(col)
{
	var tiles = [];
	for(var i = 0; i < this._tiles.length; i++)
	{
		if(this._tiles[i].col == col)
		{
			tiles.push(this._tiles[i]);
		}
	}

	return tiles;
}




//===================================================
// PRIVATE METHODS
//===================================================


Layer.prototype._getTile = function(texture)
{
	if(this._freeTiles.length > 0)
	{
		var tile = this._freeTiles[0];
		tile.changeTexture(texture);
		this._freeTiles.splice(0, 1);
		return tile;
	}
	else
	{
		var tile = new Tile(texture);
		return tile;

	}
}

//===================================================
// EVENTS
//===================================================


//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"./Tile":9}],8:[function(require,module,exports){

var Common        = require("../Common");


//===================================================
// CONSTRUCTOR
//===================================================

function MapReader(level) {
    
    this._level = level;

    this.init();
}
module.exports = MapReader;

//===================================================
// PUBLIC METHODS
//===================================================

MapReader.prototype.init = function()
{

}

MapReader.prototype.getRow = function(row, id)
{
    var arr = [];

    var length = 0;

    //for(var l = 0; l < Common.levelData.levels[this._level].layers.length; l++)
    for(var l in Common.levelData.levels[this._level].layers)
    {
        var layer = Common.levelData.levels[this._level].layers[l];
        if(Common.levelData.worlds[id].indexOf(l) > -1)
        {
            for(var col in layer[row])
            {
                if(Number(col) > Number(length))
                    length = Number(col);
            }
        }
    }

    for(var i = 0; i <= length; i++)
    {
        arr.push(this.getTiles(row, i, id));
    }

    return arr;
}

MapReader.prototype.getTiles = function(row, col, id)
{
    var tiles = [];
    
    for(var l in Common.levelData.levels[this._level].layers)
    {
        var layer = Common.levelData.levels[this._level].layers[l];
        if(Common.levelData.worlds[id].indexOf(l) > -1)
        {
            if(layer[row] != undefined)
            {
                if(layer[row][col] != undefined)
                {
                    tiles.push({image:Common.levelData.tiles[layer[row][col]], layer:l});
                }
            }
        }
    }
    if(tiles.length > 0)
        return tiles;

    return null;
};

MapReader.prototype.removeTileFromLayer = function(layer, row, col)
{
    delete Common.levelData.levels[this._level].layers[layer][row][col];
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


},{"../Common":2}],9:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Tile(texture)
{
	this.textureName = texture;

	this.signals = {};
	this.signals.cleared = new signals.Signal();

	this._assetManager = p3.AssetManager.instance;

	this.row				= null;
	this.col				= null;

	this.levelDataLayer 	= null;

    PIXI.Sprite.call(this, this._assetManager.getTexture(texture));

    this.init();
}
module.exports = Tile;
Tile.prototype = Object.create(PIXI.Sprite.prototype);
Tile.prototype.constructor = Tile;


//===================================================
// PUBLIC METHODS
//===================================================

Tile.prototype.init = function()
{
	this.anchor = new PIXI.Point(0, 1);
};

Tile.prototype.changeTexture = function(texture)
{
	this.texture = this._assetManager.getTexture(texture);
	this.textureName = texture;
};

Tile.prototype.clear = function()
{
	this.signals.cleared.dispatch();
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


},{"../Common":2}],10:[function(require,module,exports){
var Common          = require("../Common");
var Layer           = require("./Layer");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function World(mapReader, width, height, id)
{
    this.signals                   = {};
    this.signals.activeObjectFound = new signals.Signal();

    this._mapReader                = mapReader;
    this.field                     = {width:width, height:height};
    this.id                        = id;

    this._layers                   = null;
    this._layersByY                = null;

    this.row                       = 0;
    this.col                       = 0;
    this.xSpeed                    = 0;
    this.ySpeed                    = 0;

    this.rowStartOffset            = 0;
    this.colStartOffset            = 0;

    PIXI.Container.call(this);

    this.init();
}
module.exports = World;
World.prototype = Object.create(PIXI.Container.prototype);
World.prototype.constructor = World;


//===================================================
// PUBLIC METHODS
//===================================================

World.prototype.init = function()
{
    this._layers = [];
    this._layersByY = {};

    this.rowStartOffset = 2;

    for(var row = 2; row <= this.field.height / Common.squareTileSize; row++)
    {
        var layer = new Layer();
        layer.signals.activeObjectFound.add(this.onActiveObjectFound, this);
        this.addChild(layer);
        this._layers.push(layer);
    }
};

World.prototype.update = function()
{
    
}

World.prototype.fillScene = function()
{
    this.col = this.colStartOffset = 0;
    var currentRow = this.row = this.rowStartOffset + Math.floor(-this.y / Common.squareTileSize);

    for(var i = 0; i < this._layers.length; i++)
    {
        var x = (currentRow % 2 == 0 ? 0 : 2) * Common.squareTileSize;
        var y = currentRow * Common.squareTileSize;
        this._layers[i].row = currentRow;
        this._layers[i].fill(x, y, this._mapReader.getRow(currentRow, this.id), Common.squareTileSize*4);
        this._layersByY[this._layers[i].yPosition] = this._layers[i];
        currentRow++;
    }
}

World.prototype.shiftRowDown = function(row)
{
    var highestRowLayer = this._layers[0];
    var layerToShift = null;

    for(var i = 0; i < this._layers.length; i++)
    {
        if(this._layers[i].row == row)
        {
            layerToShift = this._layers[i];
        }
        if(this._layers[i].row > highestRowLayer.row)
        {
            highestRowLayer = this._layers[i];
        }
    }

    this.shiftRow(highestRowLayer.row + 1, layerToShift);
    this.addChild(layerToShift);
}

World.prototype.shiftRowUp = function(row)
{
    var lowestRowLayer = this._layers[0];
    var layerToShift = null;

    for(var i = 0; i < this._layers.length; i++)
    {
        if(this._layers[i].row == row)
        {
            layerToShift = this._layers[i];
        }
        if(this._layers[i].row < lowestRowLayer.row)
        {
            lowestRowLayer = this._layers[i];
        }
    }

    this.shiftRow(lowestRowLayer.row - 1, layerToShift);
    this.addChildAt(layerToShift, 0);
}

World.prototype.shiftRow = function(nextRow, layerToShift)
{
    var x = (nextRow % 2 == 0 ? 0 : 2) * Common.squareTileSize;
    var y = nextRow * Common.squareTileSize;

    delete this._layersByY[layerToShift.yPosition];
    layerToShift.clear();
    layerToShift.row = nextRow;
    layerToShift.fill(x, y, this._mapReader.getRow(nextRow, this.id), Common.squareTileSize*4);
    this._layersByY[layerToShift.yPosition] = layerToShift;
}

World.prototype.getLayerForYCoordinate = function(y)
{
    var gridPos = Math.ceil(y / Common.squareTileSize);
    return this._layersByY[gridPos * Common.squareTileSize];
}





//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================

World.prototype.onActiveObjectFound = function(tile, imageName)
{
    this.signals.activeObjectFound.dispatch(tile, imageName);
}

//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(World.prototype, "viewX", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this.x;
    },
    /**
     * @param {!Number} value
     */
    set: function(value) {
        
        this.xSpeed = value - this.x;
        this.x = value;
        var col = this.colStartOffset + Math.ceil(this.x / Common.squareTileSize);
        this.col = col;
        return this.x;
    }
});

Object.defineProperty(World.prototype, "viewY", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this.y;
    },
    /**
     * @param {!Number} value
     */
    set: function(value) {

        this.ySpeed = value - this.y;
        this.y = value;

        row = this.rowStartOffset + Math.floor(-this.y / Common.squareTileSize);

        if(row > this.row)
        {
            this.shiftRowDown(this.row);
        }
        else if(row < this.row)
        {
            this.shiftRowUp(this.row + (this._layers.length-1));
        }
        this.row = row;
        return this.y;
    }
});

//===================================================


},{"../Common":2,"./Layer":7}],11:[function(require,module,exports){
var Common          = require("../Common");
var RailRider		= require("./RailRider");
var Shadow 			= require("./Shadow");
var Emitter 		= require("../general/Emitter");
var AudioParams     = require("../managers/AudioParams");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Avatar(characterNumber, maxCharacters)
{
	this._assetManager				= p3.AssetManager.instance;

	this.characterNumber			= characterNumber;
	this._maxCharacters				= maxCharacters;
	this._spriteHolder				= null;
	this._spriteSubHolder			= null;
	this._sprite					= null;
	this._aura						= null;

	this._mood						= "";
	this._currentTexture			= null;

	this._swingSin					= 0;

	this.shield						= false;
	this.magnet						= false;

	this.shadow						= null;

	this.caught						= false;

	this.defaultSpeed				= 0;
	this.speedInc					= 0;
	this.speedUpPercentValue		= 0;

	this.directionOfAvatarInFront	= null;

	this._connectionEmitter			= null;	

	RailRider.call(this);

	this.signals.dead 				= new signals.Signal();
}
module.exports = Avatar;
Avatar.prototype = Object.create(RailRider.prototype);
Avatar.prototype.constructor = Avatar;


//===================================================
// PUBLIC METHODS
//===================================================

Avatar.prototype.init = function()
{	
	this._spriteHolder = new PIXI.Container();
	this._spriteHolder.y = -Common.railManager.distanceFromGround;
	this.addChild(this._spriteHolder);
	//Common.animator.add(TweenMax.to(this._spriteHolder, 1.2, {delay:this.characterNumber*.1, rotation:-5*PIXI.DEG_TO_RAD, ease:Sine.easeInOut, yoyo:true, repeat:-1}));

	this._spriteSubHolder = new PIXI.Container();
	this._spriteHolder.addChild(this._spriteSubHolder);

	this._sprite = new PIXI.Sprite(this._assetManager.getTexture('character_00' + this.characterNumber.toString() + '_downright'));
	this._sprite.anchor = new PIXI.Point(0.5, 0);
	this._spriteSubHolder.addChild(this._sprite);

	this._aura = new PIXI.Sprite(this._assetManager.getTexture('character_sheild'));
	this._aura.visible = false;
	this._aura.anchor = new PIXI.Point(0.55, 0);
	this._sprite.addChild(this._aura);
	Common.animator.add(TweenMax.to(this._aura, 0.9 + (Math.random()*.1), {alpha:0.2, ease:Sine.easeInOut, yoyo:true, repeat:-1}));

	this.shadow = new Shadow(20, 10);

	this._connectionEmitter = Emitter.add(this, 
                            ["particle_sparkle"],
                            PARTICLE_rail_sparks, 0, -(Common.railManager.distanceFromGround*0.9), null, false);

	RailRider.prototype.init.call(this);
};

Avatar.prototype.update = function()
{
	this.speedInc = Math.min(2, this.speedInc + 0.0003);
	this.speed = this.defaultSpeed + this.speedInc;
	this.speed += this.speed * this.speedUpPercentValue;

	if(!this.caught)
		RailRider.prototype.update.call(this);

	this.shadow.x = this.x;
	this.shadow.y = this.y;

	this.setSprite();

	this._swingSin += (this.speed/100)-(this.characterNumber/1000);
	this._spriteHolder.rotation = ((this.speed/2) * Math.sin(this._swingSin)) * PIXI.DEG_TO_RAD;

	if(this.currentRail != null && this.targetRail != null)
	{
		var cr = this.currentRail;
		var tr = this.targetRail;
		var dis = Math.sqrt(Math.pow( Math.abs(cr.x - tr.x), 2) + Math.pow( Math.abs(cr.y - tr.y), 2));
		var avDis = Math.sqrt(Math.pow( Math.abs(cr.x - this.x), 2) + Math.pow( Math.abs(cr.y - this.y), 2));

		var t = avDis;
		var d = dis / 2;
		if(avDis > dis/2)
			t = d - (avDis-d);

		var b = 0;
		var c = 1;
		var y = -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		this._sprite.y = y * 1.5;	
	}
};

Avatar.prototype.dispose = function()
{

};

Avatar.prototype.setSprite = function()
{
	var spr_d = this.direction;
	if(this.direction == 'left' || this.direction == 'right')
		spr_d = "down" + this.direction;

	var texture = 'character_00' + this.characterNumber.toString() + '_' + spr_d + this._mood;

	if(texture != this._currentTexture)
	{
		this._currentTexture = texture;

		this._sprite.texture = this._assetManager.getTexture(this._currentTexture);
		this.shadow.setAngle(spr_d);
	}
}

Avatar.prototype.setSwing = function(prevDirection, newDirection)
{
	var rightAngleLookup = {
		'up':['left', 'right'],
		'down':['left', 'right'],
		'left':['up', 'down'],
		'right':['up', 'down'],
		'downright':['downleft', 'upright'],
		'upleft':['downleft', 'upright'],
		'downleft':['downright', 'upleft'],
		'upright':['downright', 'upleft']
	};

	var obtuseAngleLookup = {
		'up':['upleft', 'upright'],
		'down':['downleft', 'downright'],
		'left':['upleft', 'downleft'],
		'right':['upright', 'downright'],
		'downright':['down', 'right'],
		'upleft':['left', 'up'],
		'downleft':['down', 'left'],
		'upright':['right', 'up']
	};

	var angle = null;

	if(rightAngleLookup[prevDirection][0] == newDirection || rightAngleLookup[prevDirection][1] == newDirection)
		angle = "right";
	else if(obtuseAngleLookup[prevDirection][0] == newDirection || obtuseAngleLookup[prevDirection][1] == newDirection)
		angle = "obtuse";

	if(angle != null)
	{
		var e = (angle == 'right' ? 10 : 5);
		var s = e * (this.speed / 10); //Rotation extent

		var tl = new TimelineMax();
		Common.animator.add(tl);

		var l = Math.floor(e*.5); //Number of swings

		for(var i = 0; i < l; i++)
		{
			var p = (l-i) / l; //percentage through the loop
			var f = (i % 2 == 0 ? -1 : 1) * p; //swing direction
			tl.to(this._spriteSubHolder, .2*p, {rotation:(s*f)*PIXI.DEG_TO_RAD, ease:Sine.easeInOut});
		}
	}
}

Avatar.prototype.die = function()
{
	this._mood = '_sad';
	this.caught = true;

	TweenMax.killTweensOf(this._spriteHolder);

	var angle = Common.railManager.railCoords[this.direction].angle;
	angle += (-45 + (15*this.characterNumber)) * PIXI.DEG_TO_RAD;

	var newX = -1 * (-Math.sin(angle) * 50);
	var newY = -1 * (Math.cos(angle) * 50);

	if(this.characterNumber == 1)
	{
		Common.audioManager.playSound('sfx_falloff_rail_0' + Math.floor(Math.random() * 3) + 'c');
	}

	Common.animator.add(TweenMax.to(this, .5, {x:this.x+newX, y:this.y+newY, ease:Sine.easeOut, onCompleteScope:this, onComplete:function(){
		
	}}));
	Common.animator.add(TweenMax.to(this._spriteHolder, .5, {y:-(Common.railManager.distanceFromGround/2), ease:Sine.easeIn, onCompleteScope:this, onComplete:function(){
		var sounds = ['sfx_drop_off_rail_00', 'sfx_drop_off_rail_01', 'sfx_drop_off_rail_02'];
		Common.audioManager.playSound(sounds[Math.floor(Math.random()*sounds.length)]);

		var emitter = Emitter.add(this, 
                                ["particle_menu_steam", "particle_sparkle"],
                                PARTICLE_gang_hitground_00, this._spriteHolder.x, this._spriteHolder.y + (this._spriteHolder.height - 50), 1, true, 1);
		
		if(this.characterNumber == this._maxCharacters)
		{
			this.signals.dead.dispatch();
		}
	}}));
	this._connectionEmitter.emit = false;
};

Avatar.prototype.setMagnet = function()
{
	this.magnet = true;

	var emitter = Emitter.add(this, 
                                ["particle_magnet", "particle_magnet_002", "particle_magnet_003", "particle_magnet_004"],
                                PARTICLE_magnet, this._spriteHolder.x, this._spriteHolder.y + 60, 2, true, 0.5);

	Common.animator.setTimeout(function(){
		this.magnet = false;
		Common.audioManager.stopSound('sfx_magnet_loop_00');
	}, 2, this);

	if(this.characterNumber == 1)
	{
		var params = new AudioParams();
    	params.loop = true;
		Common.audioManager.playSound('sfx_magnet_loop_00', params);
	}
};

Avatar.prototype.setShield = function()
{
	if(!this.shield)
	{
		this.shield = true;
		this._aura.texture = this._assetManager.getTexture('character_sheild');
		this._aura.visible = true;
		this._aura.alpha = 1;

		if(this.characterNumber == 1)
		{
			var params = new AudioParams();
	    	params.loop = true;
			Common.audioManager.playSound('sfx_shield_loop_02', params);
		}
	}
};

Avatar.prototype.collide = function()
{
	var tl = new TimelineMax();
	Common.animator.add(tl);
	tl.to(this._spriteSubHolder, .2, {delay:(this.characterNumber-1)*.1, rotation:-10*PIXI.DEG_TO_RAD, ease:Sine.easeInOut});
	tl.to(this._spriteSubHolder, .18, {rotation:7*PIXI.DEG_TO_RAD, ease:Sine.easeInOut});
	tl.to(this._spriteSubHolder, .14, {rotation:-5*PIXI.DEG_TO_RAD, ease:Sine.easeInOut});
	tl.to(this._spriteSubHolder, .1, {rotation:3*PIXI.DEG_TO_RAD, ease:Sine.easeInOut});
	tl.to(this._spriteSubHolder, .1, {rotation:-2*PIXI.DEG_TO_RAD, ease:Sine.easeInOut});
	tl.to(this._spriteSubHolder, 1, {rotation:0, ease:Elastic.easeOut});

	this.setMood('sad');

	if(!this.shield)
	{
		var tl = new TimelineMax({repeat:3});
		Common.animator.add(tl);
		tl.to(this._sprite, .2, {startAt:{tint:0xED3D1A}});
		tl.to(this._sprite, .2, {startAt:{tint:0xFFFFFF}});

		if(this.characterNumber == 1)
		{
			var emitter = Emitter.add(this._spriteHolder, 
	                                ["coin_001", "coin_002"],
	                                PARTICLE_coin_loss, 0, 0, 0.3, true, 0.5);
		}
	}
	else
	{
		this.shield = false;

		var tl = new TimelineMax({repeat:3});
		Common.animator.add(tl);
		tl.to(this._aura, .1, {onStartScope:this, onStart:function(){
			this._aura.visible = true;
		}});
		tl.to(this._aura, .1, {onStartScope:this, onStart:function(){
			this._aura.visible = false;
		}});
		Common.audioManager.stopSound('sfx_shield_loop_02');
	}
};

Avatar.prototype.getLayeringY = function()
{
	return this.y;//+ this._sprite.y;
};

Avatar.prototype.setMood = function(mood)
{
	if(mood.indexOf('_') != 0)
		mood = '_' + mood;

	/*
	var tl = new TimelineMax();
	Common.animator.add(tl);
	tl.to(this, (this.characterNumber-1)*.1, {onCompleteScope:this, onComplete:function(){
		this._mood = mood;
	}});
	tl.to(this, .3, {onCompleteScope:this, onComplete:function(){
		this._mood = "";
	}});*/

	Common.animator.setTimeout(function(){
		this._mood = mood;

		Common.animator.setTimeout(function(){
			this._mood = "";
		}, .3, this);

	}, (this.characterNumber-1)*.1, this);
};

Avatar.prototype.buildSpeed = function(speed, time, delay, onComplete, onCompleteScope, onCompleteParams)
{
	if(this.defaultSpeed == 0)
		this._connectionEmitter.emit = true;

	var props = {defaultSpeed:speed, ease:Linear.easeNone};
	if(delay) props.delay = delay;
	if(onComplete) props.onComplete = onComplete;
	if(onCompleteScope) props.onCompleteScope = onCompleteScope;
	if(onCompleteParams) props.onCompleteParams = onCompleteParams;

	Common.animator.add(TweenMax.to(this, time, props));
};


//===================================================
// PRIVATE METHODS
//===================================================

Avatar.prototype._preDirectionChange = function(newDirection)
{
	if(newDirection != this.directionOfAvatarInFront && this.directionOfAvatarInFront != null)
	{
		console.log('>>>>>DIRECTION NEEDED TO CHANGE<<<<<<');
		newDirection = this.directionOfAvatarInFront;
	}

	this.setSwing(this.direction, newDirection);

	return newDirection;
}

Avatar.prototype._postDirectionChange = function()
{	
	RailRider.prototype._postDirectionChange.call(this);
}

Avatar.prototype._nextRailNotConnected = function()
{
	this.die();
	
	RailRider.prototype._nextRailNotConnected.call(this);
}

Avatar.prototype._noNextRail = function()
{
	this.die();
	
	RailRider.prototype._noNextRail.call(this);
}

//===================================================
// EVENTS
//===================================================


//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"../general/Emitter":23,"../managers/AudioParams":35,"./RailRider":19,"./Shadow":20}],12:[function(require,module,exports){

var Common          = require("../Common");
var TextItem        = require("../general/TextItem");


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!String} text,
 * @constructor
 */
function DialogueBox(string, ignoreClick)
{
    this._string = string;
    this.ignoreClick = ignoreClick || false;

    this._assetManager = p3.AssetManager.instance;

    this.signals = {};
    this.signals.activated = new signals.Signal();
    this.signals.deactivated = new signals.Signal();

    this.active = false;
    this._box = null;
    this._counter = 0;

    PIXI.Container.call(this);

    this.init();
}
module.exports = DialogueBox;
DialogueBox.prototype = Object.create(PIXI.Container.prototype);
DialogueBox.prototype.constructor = DialogueBox;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
DialogueBox.prototype.init = function()
{
    this._box = new PIXI.Sprite(this._assetManager.getTexture('dialogue_box'));
    this._box.anchor = new PIXI.Point(0.5, 1);
    this._box.x = Common.STAGE_WIDTH / 2;
    this._box.y = Common.STAGE_HEIGHT + this._box.height;
    this.addChild(this._box);

    var text = new TextItem(this._string);
    text.y = -105;
    this._box.addChild(text);

    Common.animator.add(TweenMax.to(this._box, .5, {delay:.5, y:Common.STAGE_HEIGHT, ease:Sine.easeOut, onCompleteScope:this, onComplete:function(){
        this.active = true;
        this.signals.activated.dispatch();
    }}));
};

DialogueBox.prototype.dispose = function()
{
    this._box.parent.removeChild(this._box);
};

DialogueBox.prototype.update = function()
{
    this._counter++;

    if(this._counter >= 200)
    {
        this.deactivate();
    }
};

DialogueBox.prototype.deactivate = function()
{
    this.active = false;
    this.signals.deactivated.dispatch();
    Common.animator.add(TweenMax.to(this._box, .5, {y:Common.STAGE_HEIGHT + this._box.height, ease:Sine.easeOut, onCompleteScope:this, onComplete:this.dispose}));
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


},{"../Common":2,"../general/TextItem":29}],13:[function(require,module,exports){
var Common          = require("../Common");
var ActiveObject	= require("../engine/ActiveObject");
var Emitter 		= require("../general/Emitter")

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Enemy(tile, direction)
{
	ActiveObject.call(this, tile);

	this.type				 = "enemy";

	this.direction			 = direction;
	this.badGuyNumber		 = 1;
	this.badGuy				 = null;
	this.active 		     = false;

    this.init();
}
module.exports = Enemy;
Enemy.prototype = Object.create(ActiveObject.prototype);
Enemy.prototype.constructor = Enemy;


//===================================================
// PUBLIC METHODS
//===================================================

Enemy.prototype.init = function()
{
	this.x = this.tile.x;
	this.y = this.tile.y;

	this.tile.texture = this._assetManager.getTexture('obstacle_clothes_white_back_002');

	var spr = new PIXI.Sprite(this._assetManager.getTexture('obstacle_clothes_white_back_001'));
	spr.anchor.y = 1;
	spr.x = -64;
	spr.y = -34;
	this.tile.addChild(spr);

	this.badGuy = new PIXI.Sprite(this._assetManager.getTexture('character_bad_001_left'));
	this.badGuy.anchor.y = 1;
	this.badGuy.y = -50;
	this.badGuy.scale.y = 0;
	this.tile.addChild(this.badGuy);

	var spr = new PIXI.Sprite(this._assetManager.getTexture('obstacle_clothes_white_front_001'));
	spr.anchor.y = 1;
	spr.x = -64;
	spr.y = -34;
	this.tile.addChild(spr);

	var spr = new PIXI.Sprite(this._assetManager.getTexture('obstacle_clothes_white_front_002'));
	spr.anchor.y = 1;
	spr.x = 0;
	spr.y = 0;
	this.tile.addChild(spr);

	ActiveObject.prototype.init.call(this);
};

Enemy.prototype.dispose = function()
{
	
};

Enemy.prototype.activate = function(previousBadGuyNumber)
{
	if(!this.active)
	{
		this.badGuyNumber = previousBadGuyNumber+1;
		if(this.badGuyNumber > 2)
			this.badGuyNumber = 1;
		this.badGuy.texture = this._assetManager.getTexture('character_bad_00' + this.badGuyNumber.toString() + '_' + this.direction);
		Common.animator.add(TweenMax.to(this.badGuy.scale, .4, {y:1, ease:Sine.easeInOut}));
		this.active = true;
		Common.audioManager.playSound('sfx_bad_guy_popup_0' + Math.floor(Math.random() * 3) + 'b');

		var emitter = Emitter.add(this.tile, 
                                ["particle_clothes_00", "particle_clothes_01", "particle_clothes_02"],
                                PARTICLE_enemy_clothes_burst, 30, -130, 1, true, 1);
	}
}

Enemy.prototype.deactivate = function()
{
	Common.animator.add(TweenMax.to(this.badGuy.scale, .4, {y:0, ease:Sine.easeInOut}));
	this.active = false;
}




//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================

Enemy.prototype.onTileCleared = function()
{
	ActiveObject.prototype.onTileCleared.call(this);
	this.deactivate();
}

//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"../engine/ActiveObject":6,"../general/Emitter":23}],14:[function(require,module,exports){
var Common          = require("../Common");
var RailRider		= require("./RailRider");
var Emitter			= require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function HighlightArrow()
{
	this._assetManager				= p3.AssetManager.instance;

	this.targeting					= false;

	this._sprite					= null;
	this._emitter 					= null;

	RailRider.call(this);

	this.speed = 8;
}
module.exports = HighlightArrow;
HighlightArrow.prototype = Object.create(RailRider.prototype);
HighlightArrow.prototype.constructor = HighlightArrow;


//===================================================
// PUBLIC METHODS
//===================================================

HighlightArrow.prototype.init = function()
{	
	this._sprite = new PIXI.Sprite(this._assetManager.getTexture('guide_arrow'));
	this._sprite.anchor = new PIXI.Point(0.5, 0.6);
	this._sprite.y = -Common.railManager.distanceFromGround;
	this.addChild(this._sprite);

	this._emitter = Emitter.add(this, 
                            ["particle_sparkle"],
                            PARTICLE_gate_sparks, 0, -Common.railManager.distanceFromGround, null, false);

	RailRider.prototype.init.call(this);
};

HighlightArrow.prototype.update = function()
{
	RailRider.prototype.update.call(this)
};

HighlightArrow.prototype.setTargeting = function()
{
	this._sprite.rotation = 0;
	this.targeting = true;

	this._sprite.y = -Common.railManager.distanceFromGround;
	Common.animator.add(TweenMax.to(this._sprite, .3, {y:-Common.railManager.distanceFromGround*1.2, ease:Sine.easeInOut, yoyo:true, repeat:-1}));
};

HighlightArrow.prototype.unsetTargeting = function()
{
	this._sprite.y = -Common.railManager.distanceFromGround;
	this.targeting = false;
	TweenMax.killTweensOf(this._sprite);
	this._postDirectionChange();
};

HighlightArrow.prototype.setTargetRail = function(rail)
{
	this.currentRail = this.targetRail;
	this.targetRail = rail;
};

HighlightArrow.prototype.burst = function()
{
	this._emitter.emit = true;
};




//===================================================
// PRIVATE METHODS
//===================================================


HighlightArrow.prototype._postDirectionChange = function()
{
	//rotate arrow here

	this._sprite.rotation = Common.railManager.railCoords[this.direction].angle + (180*PIXI.DEG_TO_RAD);

	RailRider.prototype._postDirectionChange.call(this);
}

HighlightArrow.prototype._nextRailNotConnected = function()
{
	this.setTargeting();
	RailRider.prototype._nextRailNotConnected.call(this);
}


//===================================================
// EVENTS
//===================================================


//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"../general/Emitter":23,"./RailRider":19}],15:[function(require,module,exports){
var Common          = require("../Common");
var ActiveObject	= require("../engine/ActiveObject");
var Emitter			= require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Obstacle(tile, obstacleType, parentRail)
{
	this.obstacleType		= obstacleType;
	this.parentRail			= parentRail;

	this.singleGraphic		= null;
	this.leftGraphic 		= null;
	this.rightGraphic 		= null;

	this._emitters			= null;

	ActiveObject.call(this, tile);

	this.type			= "obstacle";

    this.init();
}
module.exports = Obstacle;
Obstacle.prototype = Object.create(ActiveObject.prototype);
Obstacle.prototype.constructor = Obstacle;


//===================================================
// PUBLIC METHODS
//===================================================

Obstacle.prototype.init = function()	
{
	this.x 				= this.tile.x;
	this.y 				= this.tile.y;

	this._emitters		= [];

	/*
	var orientation = 'downright';

	if(this.parentRail.connect1 == 'upright' || this.parentRail.connect2 == 'downleft' ||
	   this.parentRail.connect2 == 'upright' || this.parentRail.connect1 == 'downleft')
	{
		orientation = 'downleft';
	}*/


	if(this.obstacleType == 'spray')
	{
		this.leftGraphic = new PIXI.Sprite(this._assetManager.getTexture("obstacle_spray_001"));
		this.rightGraphic = new PIXI.Sprite(this._assetManager.getTexture("obstacle_spray_002"));

		var emitter = Emitter.add(this.rightGraphic, 
                        ["particle_steam"],
                        PARTICLE_steam, (Common.squareTileSize*2), -Common.railManager.distanceFromGround*1.2, null, true);
		this._emitters.push(emitter);

		var emitter = Emitter.add(this.leftGraphic, 
                        ["particle_steam"],
                        PARTICLE_steam_opposite, (Common.squareTileSize*2), -Common.railManager.distanceFromGround*1.2, null, true);
		this._emitters.push(emitter);
	}
	else if(this.obstacleType == 'fans')
	{
		this.singleGraphic = new p3.MovieClip(this._generateAnimationSequence("obstacle_fans_", 3, 1));
		Common.animator.add(this.singleGraphic);

		this.singleGraphic.animationSpeed = 50;
		this.singleGraphic.looping = true;

		this.singleGraphic.gotoAndPlay(0);

		var emitter = Emitter.add(this.singleGraphic, 
                                ["particle_air"],
                                PARTICLE_airvent_vertical, Common.squareTileSize*2, -(Common.squareTileSize*2), null, true);
		this._emitters.push(emitter);

		var emitter = Emitter.add(this.singleGraphic, 
                                ["particle_dust_001", "particle_dust_002", "particle_dust_003", "particle_dust_004", "particle_dust_005"],
                                PARTICLE_air, 0, 0, null, true);
		this._emitters.push(emitter);

	}
	else if(this.obstacleType == 'brush')
	{
		this.leftGraphic = new p3.MovieClip(this._generateAnimationSequence("obstacle_brush_", 3, 1));
		this.rightGraphic = new p3.MovieClip(this._generateAnimationSequence("obstacle_brush_", 3, 1));
		Common.animator.add(this.leftGraphic);
		Common.animator.add(this.rightGraphic);

		this.leftGraphic.animationSpeed = this.rightGraphic.animationSpeed = 50;
		this.leftGraphic.looping = this.rightGraphic.looping = true;

		this.leftGraphic.gotoAndPlay(0);
		this.rightGraphic.gotoAndPlay(0);

		var emitter = Emitter.add(this.leftGraphic, 
                                ["particle_bubble_001", "particle_bubble_002", "particle_bubble_003"],
                                PARTICLE_bubbles, 64, -150, null, true);
		this._emitters.push(emitter);

		var emitter = Emitter.add(this.rightGraphic, 
                                ["particle_bubble_001", "particle_bubble_002", "particle_bubble_003"],
                                PARTICLE_bubbles, 64, -150, null, true);
		this._emitters.push(emitter);
	}

	if(this.singleGraphic)
	{
		this.singleGraphic.x = this.tile.x;
		this.singleGraphic.y = this.tile.y;
		this.singleGraphic.anchor = new PIXI.Point(0, 1);
	}

	if(this.leftGraphic)
	{
		this.leftGraphic.x = this.tile.x - (Common.squareTileSize * 2);
		this.leftGraphic.y = this.tile.y + (Common.squareTileSize * 1);
		this.leftGraphic.anchor = new PIXI.Point(0, 1);
	}
	if(this.rightGraphic)
	{
		this.rightGraphic.x = this.tile.x + (Common.squareTileSize * 2);
		this.rightGraphic.y = this.tile.y - (Common.squareTileSize * 1);
		this.rightGraphic.anchor = new PIXI.Point(0, 1);
	}

	ActiveObject.prototype.init.call(this);
};

Obstacle.prototype.dispose = function()
{
	while(this._emitters.length > 0)
	{
		Emitter.destroy(this._emitters[0]);
		this._emitters.splice(0, 1);
	}	
};

Obstacle.prototype.collide = function(avatar)
{
	ActiveObject.prototype.collide.call(this);
	this.signals.collide.dispatch(this, avatar);
	
	return true;
};

Obstacle.prototype.pause = function()
{
	if(this.singleGraphic instanceof p3.MovieClip)
		this.singleGraphic.stop();
	if(this.leftGraphic instanceof p3.MovieClip)
		this.leftGraphic.stop();
	if(this.rightGraphic instanceof p3.MovieClip)
		this.rightGraphic.stop();
}

Obstacle.prototype.resume = function()
{
	if(this.singleGraphic instanceof p3.MovieClip)
		this.singleGraphic.play();
	if(this.leftGraphic instanceof p3.MovieClip)
		this.leftGraphic.play();
	if(this.rightGraphic instanceof p3.MovieClip)
		this.rightGraphic.play();
}



//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================

Obstacle.prototype.onTileCleared = function()
{
	ActiveObject.prototype.onTileCleared.call(this);
	this.dispose();
}

//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"../engine/ActiveObject":6,"../general/Emitter":23}],16:[function(require,module,exports){
var Common          = require("../Common");
var ActiveObject	= require("../engine/ActiveObject");
var Emitter			= require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function PowerUp(tile, powerUpType)
{
	this.powerUpType	= powerUpType;
	this.graphic		= null;
	
	this.circle 		= null;
	this.collected		= false;

	this.aura 			= null;
	this.particle		= null;

	ActiveObject.call(this, tile);

	this.type			= "powerup";

    this.init();
}
module.exports = PowerUp;
PowerUp.prototype = Object.create(ActiveObject.prototype);
PowerUp.prototype.constructor = PowerUp;


//===================================================
// PUBLIC METHODS
//===================================================

PowerUp.prototype.init = function()	
{
	this.x 				= this.tile.x;
	this.y 				= this.tile.y;

	this.graphic 		= new PIXI.Container();
	this.graphic.x 		= this.tile.x;
	this.graphic.y 		= this.tile.y;

	this.aura = new PIXI.Sprite(this._assetManager.getTexture('collectable_' + (this.powerUpType == 'shield' ? 'sheild' : this.powerUpType) + '_aura'));
	this.aura.anchor = new PIXI.Point(0.5, 0.5);
	this.graphic.addChild(this.aura);
	Common.animator.add(TweenMax.to(this.aura, 0.9 + (Math.random()*.1), {alpha:0.2, ease:Sine.easeInOut, yoyo:true, repeat:-1}));

	this.circle = new PIXI.Sprite(this._assetManager.getTexture('collectable_' + (this.powerUpType == 'shield' ? 'sheild' : this.powerUpType) + '_icon'));
	this.circle.anchor = new PIXI.Point(0.5, 0.5);
	this.circle.y = -Common.railManager.distanceFromGround + 20;
	this.circle.x = Common.squareTileSize * 2;
	this.graphic.addChild(this.circle);

	this.aura.x = this.circle.x;
	this.aura.y = this.circle.y;

	this.particle = Emitter.add(this.graphic, 
                                ["particle_sparkle"],
                                PARTICLE_collectable, this.circle.x, this.circle.y, null, true);


	ActiveObject.prototype.init.call(this);
};

PowerUp.prototype.dispose = function()
{

};

PowerUp.prototype.collide = function()
{
	ActiveObject.prototype.collide.call(this);

	if(this.collected)
	{
		return false;
	}
	else
	{
		Common.animator.add(TweenMax.to(this.circle.scale, .2, {x:0, y:0, ease:Sine.easeInOut}));
		this.collected = true;
		this.signals.collide.dispatch(this);
		TweenMax.killTweensOf(this.aura);
		this.graphic.removeChild(this.aura);
		Emitter.destroy(this.particle, .4);
		return true;
	}
};



//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================

PowerUp.prototype.onTileCleared = function()
{
	ActiveObject.prototype.onTileCleared.call(this);
	this.dispose();
}

//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"../engine/ActiveObject":6,"../general/Emitter":23}],17:[function(require,module,exports){
var Common          = require("../Common");
var ActiveObject	= require("../engine/ActiveObject");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Rail(connect1, connect2, tile)
{
	this.connect1		 	= connect1;
	this.connect2		 	= connect2;
	this.shadow				= null;
	//this.highlight		= null;

	this.centre			 	 = null;
	this.neighbourCoords 	 = null;

	this.switchStates 		 = null;
	this.currentSwitchState	 = 0;
	this.switchOrigin		 = null;
	this.railJunction		 = false;

	this._activeTint	 	 = 0xF01D20;
	this._switchedTint		 = 0xABABA9;

	ActiveObject.call(this, tile);

	this.type				 = "rail";

    this.init();
}
module.exports = Rail;
Rail.prototype = Object.create(ActiveObject.prototype);
Rail.prototype.constructor = Rail;


//===================================================
// PUBLIC METHODS
//===================================================

Rail.prototype.init = function()
{
	var sq = Common.squareTileSize;
	var even = this.row % 2 == 0;

	this.x = this.tile.x;
	this.y = this.tile.y;

	this.centre = new PIXI.Point(this.x+(sq*2), this.y-sq);

	this.neighbourCoords = {
		"up":{col:0, row:-2},
		"down":{col:0, row:2},
		"left":{col:-1, row:0},
		"right":{col:1, row:0},
		"upleft":{col: even ? -1 : 0, row:-1},
		"upright":{col: even ? 0 : 1, row:-1},
		"downright":{col: even ? 0 : 1, row:1},
		"downleft":{col: even ? -1 : 0, row:1}
	};

	ActiveObject.prototype.init.call(this);
};

Rail.prototype.dispose = function()
{

};

Rail.prototype.hasConnection = function(direction)
{
	if(this.connect1 == direction || this.connect2 == direction)
		return true;

	return false;	
}

Rail.prototype.getOppositeEnd = function(direction)
{
	if(this.connect1 == direction)
		return this.connect2;
	else if(this.connect2 == direction)
		return this.connect1;

	return null;
}


Rail.prototype.applySwitchStates = function(switchOrigin, switchStates)
{
	if(this.switchStates == null)
	{
		this.switchStates = [];
		var orderArray = ['left', 'upleft', 'up', 'upright', 'right', 'downright', 'down', 'downleft'];
		console.log(switchStates);
		for(var i = 0; i < orderArray.length; i++)
		{
			for(var j = 0; j < switchStates.length; j++)
			{
				if(orderArray[i] == switchStates[j])
				{
					this.switchStates.push(switchStates[j]);
				}
			}
			
		}
		/*
		for(var i = 0; i < switchStates.length; i++)
		{
			this.switchStates.push(switchStates[i]);
		}*/

		this.switchOrigin = switchOrigin;

		this.currentSwitchState = 0;

		if((this.connect1 == this.switchOrigin && this.connect2 == this.switchStates[1]) || 
		   (this.connect1 == this.switchStates[1] && this.connect2 == this.switchOrigin))
		{
			this.cycleSwitchStates();
		}
		this.tile.tint = this._activeTint;
	}
}

Rail.prototype.cycleSwitchStates = function()
{
	var c1 = this.connect1;
	var c2 = this.connect2;
	var ss = this.currentSwitchState;

	this.currentSwitchState++;
	if(this.currentSwitchState > this.switchStates.length-1)
		this.currentSwitchState = 0;
	this.setSwitchStates();

	if(ss == this.currentSwitchState)
		this.tile.tint = this._switchedTint;

	if(c1 != this.connect1 || c2 != this.connect2)
	{
		return true;
	}
	else
	{	
		return false;
	}

}

Rail.prototype.setSwitchStates = function()
{
	this.connect1 = this.switchOrigin;
	this.connect2 = this.switchStates[this.currentSwitchState];
	var texture = Common.railManager.getTextureByConnects(this.connect1, this.connect2);
	this.tile.changeTexture(texture);
	if(this.shadow)
		this.shadow.changeTexture(texture + '_shadow');	
}

Rail.prototype.completeSwitch = function()
{
	if(this.switchStates != null)
	{
		this.switchStates = null;
		this.tile.tint = this._switchedTint;
	}
}

Rail.prototype.addShadow = function(shadow)
{
	this.shadow = shadow;
	this.shadow.tint = 0xF0F5F7;
}



//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================

Rail.prototype.onTileCleared = function()
{
	ActiveObject.prototype.onTileCleared.call(this);
	this.tile.tint = 0xFFFFFF;
}

//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"../engine/ActiveObject":6}],18:[function(require,module,exports){
var Common          = require("../Common");
var Rail			= require("./Rail");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function RailJunction(connect1, connect2, connect3, tile)
{
	Rail.call(this, connect1, connect3, tile);

	this.connectOption1		= connect1;
	this.connectOption2		= connect2;
	this.railJunction 		= true;
}
module.exports = RailJunction;
RailJunction.prototype = Object.create(Rail.prototype);
RailJunction.prototype.constructor = RailJunction;


//===================================================
// PUBLIC METHODS
//===================================================

RailJunction.prototype.swapJunction = function()
{
	if(this.connect1 == this.connectOption1)
		this.connect1 = this.connectOption2;
	else if(this.connect1 == this.connectOption2)
		this.connect1 = this.connectOption1;
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


},{"../Common":2,"./Rail":17}],19:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function RailRider()
{
	this._assetManager				= p3.AssetManager.instance;

	this.signals 					= {};
	this.signals.targetRailReached 	= new signals.Signal();

	this.speed						= null;
	this.xSpeed						= null;
	this.ySpeed						= null;
	this.direction					= null;
	this.currentRail				= null;
	this.targetRail					= null;

	PIXI.Container.call(this);

    this.init();
}
module.exports = RailRider;
RailRider.prototype = Object.create(PIXI.Container.prototype);
RailRider.prototype.constructor = RailRider;


//===================================================
// PUBLIC METHODS
//===================================================

RailRider.prototype.init = function()
{	

};

RailRider.prototype.update = function()
{
	var ang = Common.railManager.railCoords[this.direction].angle;
	this.xSpeed = -1 * (-Math.sin(ang) * this.speed);
	this.ySpeed = -1 * (Math.cos(ang) * this.speed);

	var targetPoint = null;

	if(this.targetRail)
	{
		targetPoint = this.targetRail.centre;
	}
	else if(this.currentRail)
	{
		targetPoint = new PIXI.Point(this.currentRail.centre.x + Common.railManager.railCoords[this.direction].x,
									 this.currentRail.centre.y + Common.railManager.railCoords[this.direction].y);
	}

	if(targetPoint)
	{
		var passedX = null;
		var passedY = null;

		if(this.direction.indexOf('right') > -1)
		{
			if(this.x <= targetPoint.x && this.x + this.xSpeed > targetPoint.x)
				passedX = targetPoint.x - this.x;
		}
		else if(this.direction.indexOf('left') > -1)
		{
			if(this.x >= targetPoint.x && this.x + this.xSpeed < targetPoint.x)
				passedX = this.x - targetPoint.x;
		}
		else
		{
			passedX = 0;
		}

		if(passedX != null)
		{
			if(this.direction.indexOf('down') > -1)
			{
				if(this.y <= targetPoint.y && this.y + this.ySpeed > targetPoint.y)
					passedY = targetPoint.y - this.y;
			}
			else if(this.direction.indexOf('up') > -1)
			{
				if(this.y >= targetPoint.y && this.y + this.ySpeed < targetPoint.y)
					passedY = this.y - targetPoint.y;
			}
			else
			{
				passedY = 0;
			}
		}

		if(passedX != null && passedY != null)
		{
			if(this.targetRail)
			{
				var newDirection = this.targetRail.getOppositeEnd(Common.railManager.getOppositeDirection(this.direction));

				if(newDirection != null && newDirection != 'end')
				{
					newDirection = this._preDirectionChange(newDirection);

					this.direction = newDirection;
					this.x = this.targetRail.centre.x;
					this.y = this.targetRail.centre.y;

					this._postDirectionChange();
					
					var percent = 1 - Math.max(passedX / Math.abs(this.xSpeed) || 0, passedY / Math.abs(this.ySpeed) || 0);

					var ang = Common.railManager.railCoords[this.direction].angle;
					this.xSpeed = -1 * (-Math.sin(ang) * this.speed * percent);
					this.ySpeed = -1 * (Math.cos(ang) * this.speed * percent);

					this.signals.targetRailReached.dispatch(this);
				}
				else
				{
					this._nextRailNotConnected();
				}
			}
			else
			{
				this._noNextRail();
			}
		}
	}

	this.x += this.xSpeed;
	this.y += this.ySpeed;
};

RailRider.prototype.setTargetRail = function(rail)
{
	this.currentRail = this.targetRail;
	if(this.currentRail)
		this.currentRail.completeSwitch();
	this.targetRail = rail;
};



//===================================================
// PRIVATE METHODS
//===================================================

RailRider.prototype._preDirectionChange = function(newDirection)
{
	return newDirection;
}

RailRider.prototype._postDirectionChange = function()
{

}

RailRider.prototype._nextRailNotConnected = function()
{

}

RailRider.prototype._noNextRail = function()
{

}

//===================================================
// EVENTS
//===================================================


//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2}],20:[function(require,module,exports){
var Common          = require("../Common");
var ActiveObject	= require("../engine/ActiveObject");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Shadow(width, height)
{
	this._assetManager	= p3.AssetManager.instance;
	this._width			= width;
	this._height		= height;

	this.graphic 		= null;

	PIXI.Container.call(this);

    this.init();
}
module.exports = Shadow;
Shadow.prototype = Object.create(PIXI.Container.prototype);
Shadow.prototype.constructor = Shadow;


//===================================================
// PUBLIC METHODS
//===================================================

Shadow.prototype.init = function()
{
	/*this.graphics = new PIXI.Graphics();
	this.graphics.beginFill(0x000000);
	this.graphics.alpha = 0.1;
	this.graphics.drawEllipse(0, 0, this._width, this._height);
	this.addChild(this.graphics);*/

	this.graphic = new PIXI.Sprite(this._assetManager.getTexture("shadow_down"));
	this.graphic.anchor = new PIXI.Point(0.5, 0.5);
	this.addChild(this.graphic);

};

Shadow.prototype.update = function()
{

};

Shadow.prototype.setAngle = function(direction)
{
	if(direction == "downleft")
		this.graphic.texture = this._assetManager.getTexture("shadow_down_left");
	else if(direction == "downright")
		this.graphic.texture = this._assetManager.getTexture("shadow_down_right");
	else if(direction == "upleft")
		this.graphic.texture = this._assetManager.getTexture("shadow_up_left");
	else if(direction == "upright")
		this.graphic.texture = this._assetManager.getTexture("shadow_up_right");
	else
		this.graphic.texture = this._assetManager.getTexture("shadow_" + direction);

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


},{"../Common":2,"../engine/ActiveObject":6}],21:[function(require,module,exports){
var Common          = require("../Common");
var ActiveObject	= require("../engine/ActiveObject");
var Emitter 		= require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Token(tile)
{
	this.graphic		= null;
	
	this.sprite 		= null;
	this.collected		= false;

	this.magnetTarget	= null;
	this.magnetStart	= null;
	this.magnetValue	= 0;

	ActiveObject.call(this, tile);

	this.type			= "token";

    this.init();
}
module.exports = Token;
Token.prototype = Object.create(ActiveObject.prototype);
Token.prototype.constructor = Token;


//===================================================
// PUBLIC METHODS
//===================================================

Token.prototype.init = function()	
{
	this.x 				= this.tile.x;
	this.y 				= this.tile.y;

	this.graphic 		= new PIXI.Container();
	this.graphic.x 		= this.tile.x;
	this.graphic.y 		= this.tile.y;

	this.sprite = new PIXI.Sprite(this._assetManager.getTexture("coin_001"));
	this.sprite.anchor = new PIXI.Point(0.5, 0.5);
	this.sprite.y = -Common.railManager.distanceFromGround + 20;
	this.sprite.x = Common.squareTileSize * 2;
	this.graphic.addChild(this.sprite);

	ActiveObject.prototype.init.call(this);
};

Token.prototype.update = function()
{
	ActiveObject.prototype.update.call(this);
	this.sprite.texture = this._assetManager.getTexture("coin_00" + (Math.floor((Common.frameCount % 24)/4)+1));
}

Token.prototype.dispose = function()
{

};

Token.prototype.collide = function()
{
	ActiveObject.prototype.collide.call(this);

	if(this.collected)
	{
		return false;
	}
	else
	{
		this.collectAnimation();
		this.collected = true;
		this.signals.collide.dispatch(this);
		var emitter = Emitter.add(this.graphic, 
                                ["particle_star"],
                                PARTICLE_star, this.sprite.x, this.sprite.y, 0.3, true, 0.5);
		return true;
	}
};

Token.prototype.magnetDraw = function(avatar, targetOffset)
{
	if(this.collected)
	{
		return false;
	}
	else
	{
		this.collected = true;
		this.magnetTarget = avatar;
		this.magnetStart = new PIXI.Point(this.sprite.x, this.sprite.y);
		Common.animator.add(TweenMax.to(this, 1, {magnetValue:1, ease:Expo.easeIn, onUpdateScope:this, onUpdate:function(){
			this.sprite.x = this.magnetStart.x + (((this.magnetTarget.x + targetOffset.x) - this.magnetStart.x) * this.magnetValue);
			this.sprite.y = this.magnetStart.y + (((this.magnetTarget.y + targetOffset.y) - this.magnetStart.y) * this.magnetValue);
		}, onCompleteScope:this, onComplete:function(){
			this.collectAnimation();
            this.signals.collide.dispatch(this);
		}}));
		return true;
	}
}

Token.prototype.collectAnimation = function()
{
	Common.animator.add(TweenMax.to(this.sprite.scale, .2, {x:0, y:0, ease:Sine.easeInOut}));
	Common.audioManager.playSound("sfx_token_collect_04");
}



//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================

Token.prototype.onTileCleared = function()
{
	ActiveObject.prototype.onTileCleared.call(this);
	this.dispose();
}

//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================


},{"../Common":2,"../engine/ActiveObject":6,"../general/Emitter":23}],22:[function(require,module,exports){

var Common          = require("../Common");


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!String} text,
 * @constructor
 */
function TokenCounter(totalCoins)
{
    this._assetManager = p3.AssetManager.instance;

    this._totalCoins    = totalCoins;

    this._coin          = null;
    this._numberHolder  = null;
    this._number1       = null;
    this._number2       = null;
    this._number3       = null;

    PIXI.Container.call(this);

    this.init();
}
module.exports = TokenCounter;
TokenCounter.prototype = Object.create(PIXI.Container.prototype);
TokenCounter.prototype.constructor = TokenCounter;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
TokenCounter.prototype.init = function()
{
    var scorebox = new PIXI.Sprite(this._assetManager.getTexture('scorebox'));
    scorebox.x = -60;
    scorebox.y = -50;
    this.addChild(scorebox);

    this._coin = new PIXI.Sprite(this._assetManager.getTexture("coin_001"));
    this._coin.anchor = new PIXI.Point(0.5, 0.5);
    this.addChild(this._coin);

    this._numberHolder = new PIXI.Container();
    this._numberHolder.x = -10;
    this._numberHolder.y = 11;
    this._numberHolder.scale = new PIXI.Point(0.9, 0.9);
    this.addChild(this._numberHolder);

    this._number3 = new PIXI.Sprite(this._assetManager.getTexture("0_off"));
    this._number3.anchor = new PIXI.Point(0, 0.5);
    this._number3.scale = new PIXI.Point(0.5, 0.5);
    this._number3.x = -10;
    this._numberHolder.addChild(this._number3);

    this._number2 = new PIXI.Sprite(this._assetManager.getTexture("0_off"));
    this._number2.anchor = new PIXI.Point(0, 0.5);
    this._number2.scale = new PIXI.Point(0.5, 0.5);
    this._number2.x = this._number3.x + 20;
    this._numberHolder.addChild(this._number2);

    this._number1 = new PIXI.Sprite(this._assetManager.getTexture("0_off"));
    this._number1.anchor = new PIXI.Point(0, 0.5);
    this._number1.scale = new PIXI.Point(0.5, 0.5);
    this._number1.x = this._number2.x + 20;
    this._numberHolder.addChild(this._number1);

    var slash = new PIXI.Sprite(this._assetManager.getTexture("bar_stick_off"));
    slash.anchor = new PIXI.Point(0.5, 0.5);
    slash.scale = new PIXI.Point(0.6, 0.6);
    slash.x = this._number1.x + 75;
    slash.y = -10;
    slash.rotation = 25 * PIXI.DEG_TO_RAD;
    this._numberHolder.addChild(slash);

    var totalX = slash.x - 20;
    var str = this._totalCoins.toString();

    for(var i = 0; i < str.length; i++)
    {
        var number = new PIXI.Sprite(this._assetManager.getTexture(str.charAt(i) + "_off"));
        number.anchor = new PIXI.Point(0, 0.5);
        number.scale = new PIXI.Point(0.5, 0.5);
        number.x = totalX;
        this._numberHolder.addChild(number);
        totalX = number.x + 20;
    }

    if(str.length == 3)
        this._numberHolder.scale = new PIXI.Point(0.75, 0.75);

};

TokenCounter.prototype.dispose = function()
{

};

TokenCounter.prototype.update = function()
{
    if(TweenMax.isTweening(this._coin.scale))
        this._coin.texture = this._assetManager.getTexture("coin_001");
    else
        this._coin.texture = this._assetManager.getTexture("coin_00" + (Math.floor((Common.frameCount % 24)/4)+1));
};

TokenCounter.prototype.setTokens = function(number)
{
    var str = number.toString();

    var firstChar = null;
    var secondChar = null;
    var thirdChar = null;

    firstChar = str.charAt(str.length-1);
    this._number1.texture = this._assetManager.getTexture(firstChar + "_off");
    this._number1.visible = true;

    this._numberHolder.x = -30;

    if(number >= 10)
    {
        secondChar = str.charAt(str.length-2);
        this._number2.texture = this._assetManager.getTexture(secondChar + "_off");
        this._number2.visible = true;
        this._numberHolder.x = -15;
    }
    else
    {
        this._number2.visible = false;
        
    }

    if(number >= 100)
    {
        thirdChar = str.charAt(str.length-3);
        this._number3.texture = this._assetManager.getTexture(thirdChar + "_off");
        this._number3.visible = true;
        this._numberHolder.x = 10;
    }
    else
    {
        this._number3.visible = false;
    }

    var tl = new TimelineMax();
    Common.animator.add(tl);
    tl.to(this._coin.scale, .2, {x:1.8, y:1.8, ease:Sine.easeInOut});
    tl.to(this._coin.scale, .1, {x:1.2, y:1.2, ease:Back.easeOut});

};

TokenCounter.prototype.collided = function()
{
    var tl = new TimelineMax();
    Common.animator.add( TweenMax.to(this._coin, .3, {startAt:{tint:0xED3D1A}, tint:0xFFFFFF}) );
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


},{"../Common":2}],23:[function(require,module,exports){

var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Emitter() {
}
module.exports = Emitter;

//===================================================
// PUBLIC METHODS
//===================================================


/**
 * @param {!PIXI.Container} parent
 * @param {!Array<String>} textures
 * @param {!String} json
 * @param {Number=} x
 * @param {Number=} y
 * @param {Number=} removeTime
 * @param {Boolean=} autoEmit
 * @returns {cloudkid.Emitter} emitter
 */
Emitter.add = function(parent, textures, json, x, y, removeTime, autoEmit, destroyTime)
{
    if(autoEmit == undefined) autoEmit = true;
    if(destroyTime == undefined) destroyTime = 1;

    x = x || 0;
    y = y || 0;

    var assetManager = p3.AssetManager.instance;

    for(var i = 0; i < textures.length; i++)
    {
        textures[i] = assetManager.getTexture(textures[i]);
    }    

    var emitter = new cloudkid.Emitter(
        parent,
        textures,
        //assetManager.getJSON(json)
        json
    );
    if(autoEmit)
        emitter.emit = true;
    else
        emitter.emit = false;

    emitter.updateOwnerPos(x, y);

    Common.animator.add(emitter);

    if(removeTime != null)
    {    
        Common.animator.setTimeout(function(){
            Emitter.destroy(emitter, destroyTime);
        }, removeTime, this);
    }

    return emitter;
};

Emitter.destroy = function(emitter, destroyDelay)
{
    if(emitter != null)
    {    
        destroyDelay = destroyDelay || 0;

        emitter.emit = false;
        Common.animator.setTimeout(function(){
            Common.animator.remove(emitter);
            emitter.destroy();
        }, destroyDelay, this);
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
},{"../Common":2}],24:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function LargeButton(icon, inactiveIcon)
{
	var am = p3.AssetManager.instance;

	p3.Button.call(this, 
				   am.getTexture("big_button_def"),
				   am.getTexture("big_button_over"),
				   am.getTexture("big_button_press"),
				   am.getTexture(icon),
				   am.getTexture("big_button_dis"),
				   am.getTexture("big_button_dis"),
				   am.getTexture("big_button_dis"),
				   inactiveIcon ? am.getTexture(inactiveIcon) : null
				   );
	this.animate = true;
}
module.exports = LargeButton;
LargeButton.prototype = Object.create(p3.Button.prototype);
LargeButton.prototype.constructor = LargeButton;


//===================================================
// PUBLIC METHODS
//===================================================




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








},{"../Common":2}],25:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function LevelSelectButton(number, state, starValue)
{
	this.levelNumber	= number;
	this.starValue		= starValue || 0;
	this.visited		= state == "visited" ? true : false;
	this.disabled 		= state == "disabled" ? true : false;

	this._assetManager = p3.AssetManager.instance;
	var am = this._assetManager;

	var numberTexture = number + "_";
	var buttonTexture;
	var starTexture = "icon_star_";

	if(state == "active")
	{
		starTexture += "off";
		numberTexture += "off";
		buttonTexture = 'disabled';
	}
	else if(state == "visited")
	{
		starTexture += "on";
		numberTexture += "off";
		buttonTexture = 'visited';
	}
	else if(state == "disabled")
	{
		starTexture += "dis";
		numberTexture += "dis";
		buttonTexture = 'disabled';
	}

	p3.Button.call(this, 
				   am.getTexture("level_button_" + buttonTexture),
				   am.getTexture("level_button_" + buttonTexture),
				   am.getTexture("level_button_" + buttonTexture),
				   am.getTexture(numberTexture)
				   );
	this.animate = false;

	this._stars = [];

	for(var i = 0; i < 3; i++)
	{
		//var star = new PIXI.Sprite(am.getTexture(numberTexture.replace(this.levelNumber, "icon_star")));
		var star = new PIXI.Sprite(am.getTexture(starTexture));
		if(!this.disabled)
		{
			if(this.visited && i+1 > this.starValue)
			{
				star.texture = am.getTexture("icon_star_dis");
			}
			else
			{
				this._stars.push(star);
			}
		}	
		star.anchor = new PIXI.Point(0.5, 0.5);
		star.y = 37;
		star.x = -42 + (42*i);
		this.addChild(star);
	}
}
module.exports = LevelSelectButton;
LevelSelectButton.prototype = Object.create(p3.Button.prototype);
LevelSelectButton.prototype.constructor = LevelSelectButton;


//===================================================
// PUBLIC METHODS
//===================================================

LevelSelectButton.prototype.flash = function(subtle)
{
	var components = [this._background, this._icon];
	components = components.concat(this._stars);

	if(subtle)
	{
		components = [components[Math.floor(Math.random() * components.length)]];
	}

	for(var c = 0; c < components.length; c++)
	{
		if(!TweenMax.isTweening(components[c]))
		{
			var tl = new TimelineMax();
			Common.animator.add(tl);

			var disTexture;
			if(components[c] == this._background)
				disTexture = this._assetManager.getTexture("level_button_active");
			else if(components[c] == this._icon)
				disTexture = this._assetManager.getTexture(this.levelNumber + "_dis");
			else
				disTexture = this._assetManager.getTexture("icon_star_dis");

			var normalTexture;
			if(components[c] == this._background)
				normalTexture = this._normalTexture;
			else if(components[c] == this._icon)
				normalTexture = this._iconTexture;
			else
				normalTexture = components[c].texture;

			var limit = 1 + Math.floor(Math.random() * 2);
			if(this.visited) limit = 1;

			for(var i = 0; i < limit; i++)
			{
				tl.to(components[c], 0.07 + (Math.random()*0.1), {onCompleteParams:[components[c], disTexture], onCompleteScope:this, onComplete:function(component, disTexture){
					component.texture = disTexture;
				}});
				tl.to(components[c], 0.07 + (Math.random()*0.1), {onCompleteParams:[components[c], normalTexture], onCompleteScope:this, onComplete:function(component, normalTexture){
					component.texture = normalTexture;
				}});
			}

			if(components[c] == this._background && !subtle)
			{
				tl.to(components[c], 0.07 + (Math.random()*0.1), {onCompleteParams:[components[c], disTexture], onCompleteScope:this, onComplete:function(component, disTexture){
					component.texture = disTexture;
				}});
			}
		}	
	}
}


//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================

LevelSelectButton.prototype.onMouseOver = function(event)
{
	if(!this.disabled)
		this.flash();
	p3.Button.prototype.onMouseOver.call(this, event);
	//console.log(p3.Button.audio + ', ' + this.overSoundName);
}

LevelSelectButton.prototype.onMouseOut = function(event)
{
	p3.Button.prototype.onMouseOver.call(this, event);
	TweenMax.killTweensOf(this._background);
	this._background.texture = this._normalTexture; 
	TweenMax.killTweensOf(this._icon);
	this._icon.texture = this._iconTexture;
}

//===================================================
// GETTERS/SETTERS
//===================================================



//===================================================








},{"../Common":2}],26:[function(require,module,exports){
/**
 *  MuteButton
 *
 *  Created by Legman on 16/09/2015.
 *
 */

/**
 * @param {!PIXI.Texture} normalTexture
 * @param {PIXI.Texture=} overTexture
 * @param {PIXI.Texture=} downTexture
 * @param {PIXI.Texture=} onIconTexture
 * @param {PIXI.Texture=} offIconTexture
 * @param {PIXI.Texture=} normalInactiveTexture
 * @param {PIXI.Texture=} overInactiveTexture
 * @param {PIXI.Texture=} downInactiveTexture
 * @param {PIXI.Texture=} onIconInactiveTexture
 * @param {PIXI.Texture=} offIconInactiveTexture
 * @constructor
 */
function MuteButton(
    normalTexture,
    overTexture,
    downTexture,
    onIconTexture,
    offIconTexture,
    normalInactiveTexture,
    overInactiveTexture,
    downInactiveTexture,
    onIconInactiveTexture,
    offIconInactiveTexture
) {
    /**
     * @type {PIXI.Texture}
     */
    this._onIconTexture = onIconTexture;

    /**
     * @type {PIXI.Texture}
     */
    this._offIconTexture = offIconTexture;

    /**
     * @type {PIXI.Texture}
     */
    this._onIconInactiveTexture = onIconInactiveTexture;

    /**
     * @type {PIXI.Texture}
     */
    this._offIconInactiveTexture = offIconInactiveTexture;

    Button.call(
        this,
        normalTexture,
        overTexture,
        downTexture,
        this.isEnabled() ? this._onIconTexture : this._offIconTexture,
        normalInactiveTexture,
        overInactiveTexture,
        downInactiveTexture,
        this.isEnabled() ? this._onIconInactiveTexture : this._offIconInactiveTexture
    );
}
module.exports                      = MuteButton;
MuteButton.prototype                = Object.create(p3.Button.prototype);
MuteButton.prototype.constructor    = MuteButton;

/**
 * @param {!Event} event
 */
MuteButton.prototype.onMouseDown = function(event) {
	console.log(this.isEnabled());
    this._enabled               = !this._enabled;
    this._currentIconTexture    = this.isEnabled() ? this._offIconTexture : this._onIconTexture;
    this._icon.texture          = this._currentIconTexture;

    if(!!Button.audio){
        Button.audio.mute(!Button.audio.isMute);
    }
    Button.prototype.onMouseDown.call(this, event);
};

/**
 * @returns {boolean}
 */
MuteButton.prototype.isEnabled = function() {
    return !!Button.audio && !Button.audio.isMute;
};








},{}],27:[function(require,module,exports){
var Common          = require("../Common");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function SmallButton(icon, inactiveIcon)
{
	var am = p3.AssetManager.instance;

	p3.Button.call(this, 
				   am.getTexture("small_button_def"),
				   am.getTexture("small_button_over"),
				   am.getTexture("small_button_press"),
				   am.getTexture(icon),
				   am.getTexture("small_button_dis"),
				   am.getTexture("small_button_dis"),
				   am.getTexture("small_button_dis"),
				   inactiveIcon ? am.getTexture(inactiveIcon) : null
				   );
	this.animate = true;
}
module.exports = SmallButton;
SmallButton.prototype = Object.create(p3.Button.prototype);
SmallButton.prototype.constructor = SmallButton;


//===================================================
// PUBLIC METHODS
//===================================================




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








},{"../Common":2}],28:[function(require,module,exports){

var Common          = require("../Common");


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!String} text,
 * @constructor
 */
function StarField(width, height, starRatio)
{
    this._assetManager = p3.AssetManager.instance;

    this._starRatio     = starRatio || 5;
    this._width         = width;
    this._height        = height;

    this._stars         = null;

    PIXI.Container.call(this);

    this.init();
}
module.exports = StarField;
StarField.prototype = Object.create(PIXI.Container.prototype);
StarField.prototype.constructor = StarField;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
StarField.prototype.init = function()
{
    /*
    var test = new PIXI.Graphics();
    test.lineStyle(1, 0xFFFFFF);
    test.drawRect(0, 0, this._width, this._height);
    this.addChild(test);*/

    var numberOfStars = Math.round(this._starRatio * ( (this._width * this._height) / 10000)); 

    this._stars = [];
    for(var i = 0; i < numberOfStars; i++)
    {
        var star = new PIXI.Sprite(this._assetManager.getTexture(Math.random() < 0.25 ? 'star1_bright' : 'star2'));
        star.anchor = new PIXI.Point(0.5, 0.5);
        star.x = Math.random() * this._width;
        star.y = Math.random() * this._height;
        this.addChild(star);
        this._stars.push(star);

        Common.animator.add(TweenMax.to(star, 1+(Math.random()*0.5), {alpha:0.2 + (Math.random() * 0.4), ease:Sine.easeInOut, repeat:-1, yoyo:true}));
    }
};

StarField.prototype.dispose = function()
{
    for(var i = 0; i < this._stars.length; i++)
    {
        TweenMax.killTweensOf(this._stars[i]);
    }
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


},{"../Common":2}],29:[function(require,module,exports){

var Common          = require("../Common");


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!String} text,
 * @constructor
 */
function TextItem(copy, args, formatOverride)
{
    this._assetManager = p3.AssetManager.instance;
    this._copyData = AIB_STRINGS;
    this._configData = AIB_CONFIG;

    this._copy = copy;
    this._args = args;
    this._formatOverride = formatOverride;

    this._text = null;

    PIXI.Container.call(this);

    this.init();
}
module.exports = TextItem;
TextItem.prototype = Object.create(PIXI.Container.prototype);
TextItem.prototype.constructor = TextItem;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
TextItem.prototype.init = function()
{
    var props = {};

    for(var i in this._configData.default_format)
    {
        props[i] = this._configData.default_format[i];
    }

    if(this._formatOverride)
    {
        for(var i in this._formatOverride)
        {
            props[i] = this._formatOverride[i];
        }
    }

    var data = this.readCopy(this._copy);

    if(data != null)
    {
        if(data.format != null)
        {
            for(var i in data.format)
            {
                if(i != "offset" && i != "alignVertical")
                    props[i] = data.format[i];
            }
        }
    }

    props.fill = Number(props.fill);
    
    if(props.stroke)
        props.stroke = Number(props.stroke);

    this._text = new PIXI.Text(this.insertArgs(data != null ? data.copy : this._copy), props);
    this.addChild(this._text);

    if(props.align == "center")
        this._text.anchor.x = 0.5;
    else if(props.align == "right")
        this._text.anchor.x = 1;

    if(data != null)
    {
        if(data.format)
        {
            if(data.format.offset)
            {
                this._text.x = data.format.offset.x || 0;
                this._text.y = data.format.offset.y || 0;
            }

            if(data.format.alignVertical)
            {
                if(data.format.alignVertical == "center")
                    this._text.anchor.y = 0.5;
                else if(data.format.alignVertical == "bottom")
                    this._text.anchor.y = 1;
            }
        }
    }
};

TextItem.prototype.dispose = function()
{

};

TextItem.prototype.readCopy = function(text)
{
    if(this._copyData[text] != undefined)
        return this._copyData[text];

    return null;
};

TextItem.prototype.changeFormat = function(format)
{
    var newFormat = {};
    var data = this.readCopy(this._copy);

    if(data.format)
    {
        for(var i in data.format)
        {
            newFormat[i] = data.format[i];
        }
    }

    for(var i in format)
    {
        newFormat[i] = format[i];
    }

    this._text.style = newFormat;
};

TextItem.prototype.insertArgs = function(copy)
{
    if(this._args)
    {
        for(var i = 0; i < this._args.length; i++)
        {
            copy = copy.replace("**", this._args[i]);
        }
    }
    return copy;
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

/**
 * @param {String}
 * @returns {String}
 */
Object.defineProperty(TextItem.prototype, "copy", {

    set: function(text)
    {
        this._copy = text;
        var data = this.readCopy(text);
        console.log(data);
        this._text.text = data != null ? data.copy : text;
        this._text.text = this.insertArgs(this._text.text);
    }
});


//===================================================


},{"../Common":2}],30:[function(require,module,exports){
/**
 *  ColourWipeTransition
 *
 *  Created by Legman on 15/09/2015.
 *
 */

var Common          = require("../Common");
var Transition      = require("./Transition");

/**
 * @param {!Number} color
 * @param {!Number} duration
 * @constructor
 */
function ColourWipeTransition(color, duration) {
    /**
     * @type {Number}
     * @private
     */
    this._color = color || 'black';

    /**
     * @type {Number}
     * @private
     */
    this._duration = duration || 0.8;

    /**
     * @type {PIXI.Graphics}
     * @private
     */
    this._quad = null;

    Transition.call(this);
}
module.exports                              = ColourWipeTransition;
ColourWipeTransition.prototype                    = Object.create(Transition.prototype);
ColourWipeTransition.prototype.constructor        = ColourWipeTransition;

ColourWipeTransition.prototype.init = function() {

    this._quad = new PIXI.Sprite(Common.generatedTextures[this._color]);
    this._quad.width = p3.View.width;
    this._quad.height = p3.View.height;
    this.addChild(this._quad);
};

ColourWipeTransition.prototype.in = function() {

    this._quad.x    = p3.View.width;
    TweenMax.to(this._quad, this._duration * 0.5, {
        x: 0,
        ease: Expo.easeOut,
        onComplete: function() {
            Transition.prototype.in.call(this, this);
        },
        onCompleteScope: this
    });
};

ColourWipeTransition.prototype.out = function() {
    TweenMax.to(this._quad, this._duration * 0.5, {
        x: -(p3.View.width),
        ease: Expo.easeIn,
        onComplete: function() {
            Transition.prototype.out.call(this, this);
        },
        onCompleteScope: this
    });
};

ColourWipeTransition.prototype.resize = function() {
    this._quad.width = p3.View.width;
    this._quad.height = p3.View.height;
};
},{"../Common":2,"./Transition":33}],31:[function(require,module,exports){
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
},{}],32:[function(require,module,exports){
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

                    this.top.parent && this.top.parent.removeChild(this.top);
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

        //console.log(this._stack);
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
            this.top.parent && this.top.parent.removeChild(this.top);
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

        //console.log(this._stack);
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

},{"./Scene":31,"./Transition":33}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
/**
 *  AudioManager
 *
 *  Created by Legman on 25/02/2016.
 *
 */

var AudioParams     = require("./AudioParams");

function AudioManager() {
    /**
     * @type {object}
     * @private
     */
    this._cache = {};

    /**
     * @type {Howl}
     * @private
     */
    this._music = null;

    /**
     * @type {boolean}
     * @private
     */
    this._isMuted = false;


    var hidden;
    "undefined" != typeof document.hidden ? (hidden = "hidden",
        this.visibilityChange = "visibilitychange")     : "undefined" != typeof document.mozHidden  ? (hidden = "mozHidden",
        this.visibilityChange = "mozvisibilitychange")  : "undefined" != typeof document.msHidden   ? (hidden = "msHidden",
        this.visibilityChange = "msvisibilitychange")   : "undefined" != typeof document.webkitHidden && (hidden = "webkitHidden",
        this.visibilityChange = "webkitvisibilitychange");

    //var that = this;
    document.addEventListener(this.visibilityChange, function(){
        document[hidden] ? Howler.volume(0) : Howler.volume(1);
        //!document[hidden] && !that._isMuted ? Howler.volume(1) : Howler.volume(0);
        //console.log('sound updated' + that._isMuted);
    }, false);

}
module.exports = AudioManager;

/**
 * @param {!Array.<string>} sounds
 * @param {!Array.<string>} extensions
 * @param {string=} basePath
 */
AudioManager.prototype.addSounds = function(sounds, extensions, basePath) {
    basePath = basePath || "";

    var howl, name, url, urls, extension, i, j;
    for (i = 0; i < sounds.length; ++ i) {
        url     = basePath + sounds[i];
        url     = url.split("/");
        name    = url[url.length - 1];

        urls = [];
        for (j = 0; j < extensions.length; ++ j) {
            extension = extensions[j];
            urls.push(url.join("/") + extension);
        }
        howl = new Howl({
            src: urls,
            volume: 1.0,
            loop: false,
            autoplay: false,
            onloaderror: function() {
                console.warn("Error loading sound - " + name);
            }
        });
        howl.name           = name;
        this._cache[name]  = howl;
    }
};

/**
 * @param {!Array.<string>} sounds
 */
AudioManager.prototype.removeSounds = function(sounds) {
    var name, n, howl;
    for (var i = 0; i < sounds.length; ++ i) {
        name = sounds[i];
        for (n in this._cache) {
            if (this._cache.hasOwnProperty(key)) {
                howl = this._cache[key];
                if (howl.name == n) {
                    howl.unload();
                    delete this._cache[name];
                    break;
                }
            }
        }
    }
};

/**
 * @param {!string | Array.<string>} name
 * @param {AudioParams=} params
 */
AudioManager.prototype.playSound = function(name, params) {
    params = params || new AudioParams();

    if (typeof name !== "string") {
        name = name[Math.floor(Math.random() * name.length)];
    }

    var howl = this._cache[name];
    if (!howl) {
        console.warn("Could not find sound - " + name);
        return null;
    }

    howl.volume(params.volume);
    howl.loop(params.loop);

    // todo sound callback

    if (p3.Device && p3.Device.isAndroidStockBrowser) {
        howl.buffer = true;
    }

    if (params.fadeIn > 0.0) {
        this.fadeIn(howl, params.fadeIn);
    } else {
        howl.play();
    }
    return howl;
};

/**
 * @param {!string | Array.<string>} name
 * @param {AudioParams=} params
 */
AudioManager.prototype.playMusic = function(name, params) {
    params = params || new AudioParams();

    if (typeof name !== "string") {
        name = name[Math.floor(Math.random() * (name.length - 1))];
    }

    // skip if no change
    if (this._music && this._music.name == name) {
        return this._music;
    }

    var howl = this._cache[name];
    if (!howl) {
        console.warn("Could not find music - " + name);
        return null;
    }

    howl.volume(params.volume);
    howl.loop(true);

    // callback
    howl.__onend = function() {
        params.callback && params.callback.call(params.scope);
    };
    howl.on("end", howl.__onend);

    if (p3.Device && p3.Device.isAndroidStockBrowser) {
        howl.buffer = true;
    }

    if (params.fadeIn > 0.0) {
        if (this._music && this._music.name != name) {
            this.fadeOut(this._music, params.fadeIn, function(howl) {
                howl.stop();
            }, this);
        }
        this.fadeIn(howl, params.fadeIn);
    } else {
        this._music && this.stopMusic();
        howl.play();
    }
    this._music = howl;
    return howl;
};

/**
 * @param {!string} name
 */
AudioManager.prototype.stopSound = function(name) {
    var howl;
    for (var n in this._cache) {
        if (this._cache.hasOwnProperty(n)) {
            howl = this._cache[n];
            if (howl.name == name) {
                howl.stop();
                break;
            }
        }
    }
};

/**
 * @param {string=} name
 */
AudioManager.prototype.stopMusic = function(name) {
    name = name || this._music.name;
    if (this._music && this._music.name == name) {
        this._music.__onend && this._music.off("end", this._music.__onend);
        this._music.stop();
        this._music = null;
    }
};

/**
 * @param {!number} value
 */
AudioManager.prototype.mute = function(value) {
    this._isMuted = value;
    if (this._isMuted) {
        //Howler.mute(true);
        Howler.volume(0);
    } else {
        //Howler.mute(false);
        Howler.volume(1);
    }
};

/**
 * @param {!Howl} howl
 * @param {number=} duration
 * @param {function=} callback
 * @param {*=} scope
 */
AudioManager.prototype.fadeIn = function(howl, duration, callback, scope) {
    duration = duration || 1.0;
    howl.volume(0.0);
    howl.play();
    howl.__volume = howl._volume;

    TweenMax.killTweensOf(howl);
    TweenMax.to(howl, duration, {
        __volume: 1.0,
        ease: Power1.easeInOut,
        onUpdate: function() {
            howl.volume(howl.__volume);
        },
        onUpdateScope: this,
        onComplete: callback,
        onCompleteParams: [howl],
        onCompleteScope: scope
    });
};

/**
 * @param {!Howl} howl
 * @param {number=} duration
 * @param {function=} callback
 * @param {*=} scope
 */
AudioManager.prototype.fadeOut = function(howl, duration, callback, scope) {
    duration = duration || 1.0;
    howl.__volume = howl._volume;

    TweenMax.killTweensOf(howl);
    TweenMax.to(howl, duration, {
        __volume: 0.0,
        ease: Power1.easeInOut,
        onUpdate: function() {
            howl.volume(howl.__volume);
        },
        onUpdateScope: this,
        onComplete: callback,
        onCompleteParams: [howl],
        onCompleteScope: scope
    });
};

Object.defineProperty(AudioManager.prototype, "isMute", {
    /**
     * @returns {!boolean}
     */
    get: function() {
        return this._isMuted;
    }
});

},{"./AudioParams":35}],35:[function(require,module,exports){
/**
 *  AudioParams
 *
 *  Created by Legman on 25/02/2016.
 *
 */

/**
 * @constructor
 */
function AudioParams() {
    /**
     * @type {number}
     */
    this.volume = 1.0;

    /**
     * @type {boolean}
     */
    this.loop = false;

    /**
     * @type {number}
     */
    this.delay = 0.0;

    /**
     * @type {number}
     */
    this.fadeIn = 0.0;

    /**
     * @type {number}
     */
    this.priority = 0;

    /**
     * @type {function}
     */
    this.callback = null;

    /**
     * @type {*}
     */
    this.scope = window;
}
module.exports = AudioParams;

},{}],36:[function(require,module,exports){

var Common        = require("../Common");


//===================================================
// CONSTRUCTOR
//===================================================

function RailManager() {
    
    this.railTypes              = null;
    this.railCoords             = null;
    this.railDegrees            = null;
    this.distanceFromGround     = 195;

    this.init();
}
module.exports = RailManager;

//===================================================
// PUBLIC METHODS
//===================================================

RailManager.prototype.init = function() {

    this.railTypes = {
        "rail_001":['up', 'left'],
        "rail_002":['up', 'right'],
        "rail_003":['down', 'left'],
        "rail_004":['down', 'right'],
        "rail_005":['upleft', 'downright'],
        "rail_006":['upright', 'downleft'],
        "rail_007":['up', 'down'],
        "rail_008":['left', 'right'],
        "rail_009":['upleft', 'upright'],
        "rail_010":['upleft', 'downleft'],
        "rail_011":['downleft', 'downright'],
        "rail_012":['upright', 'downright'],
        "rail_013":['up', 'downleft'],
        "rail_014":['up', 'downright'],
        "rail_015":['upleft', 'down'],
        "rail_016":['upright', 'down'],
        "rail_017":['left', 'upright'],
        "rail_018":['upleft', 'right'],
        "rail_019":['left', 'downright'],
        "rail_020":['downleft', 'right'],
        "rail_021":['right', 'end'],
        "rail_022":['left', 'end'],
        "rail_023":['upleft', 'end'],
        "rail_024":['downleft', 'end'],
        "rail_025":['upright', 'end'],
        "rail_026":['downright', 'end'],
        "rail_027":['upleft', 'down', 'right'],
        "rail_028":['left', 'upright', 'down'],
        "rail_029":['upleft', 'downleft', 'right'],
        "rail_030":['left', 'downleft', 'up'],
        "rail_031":['downleft', 'upright', 'downright'],
        "rail_032":['upleft', 'downleft', 'downright'],
        "rail_033":['downleft', 'up', 'right'],
        "rail_034":['left', 'up', 'downright'],
        "rail_035":['downleft', 'down', 'up'],
        "rail_036":['down', 'downright', 'up'],
        "rail_037":['downleft', 'up', 'downright'],
        "rail_038":['left', 'upleft', 'downright'],
        "rail_039":['left', 'upleft', 'right'],
        "rail_040":['left', 'up', 'down'],
    };

    var sq = Common.squareTileSize;

    this.railCoords = {
        'up':{x:0, y:-sq},
        'down':{x:0, y:sq},
        'left':{x:-sq*2, y:0},
        'right':{x:sq*2, y:0},
        'upleft':{x:-sq, y:-sq/2},
        'upright':{x:sq, y:-sq/2},
        'downleft':{x:-sq, y:sq/2},
        'downright':{x:sq, y:sq/2}
    };

    this.railDegrees = {'up': 0, 
                        'upright': 45, 
                        'right': 90, 
                        'downright': 135, 
                        'down': 180,
                        'downleft':225,
                        'left':270,
                        'upleft':315,
                    }

    for(var i in this.railCoords)
    {
        var angRads = Math.atan2(-this.railCoords[i].y, -this.railCoords[i].x);
        if(angRads < 0) angRads = (2 * Math.PI) + angRads;
        this.railCoords[i].angle = angRads - (90*PIXI.DEG_TO_RAD);
    }

};

RailManager.prototype.getOppositeDirection = function(direction)
{
    var newDir = direction;

    if(direction.indexOf("left") > -1)
        newDir = direction.replace("left", "right");
    else if(direction.indexOf("right") > -1)
        newDir = direction.replace("right", "left");

    if(direction.indexOf("up") > -1)
        newDir = newDir.replace("up", "down");
    else if(direction.indexOf("down") > -1)
        newDir = newDir.replace("down", "up");

    return newDir;
};

RailManager.prototype.getTextureByConnects = function(connect1, connect2)
{
    var candidates = [];

    for(var i in this.railTypes)
    {
        if(this.railTypes[i][0] == connect1 || this.railTypes[i][1] == connect1)
        {
            candidates.push(i);
        }
    }

    for(var i in candidates)
    {
        if(this.railTypes[candidates[i]][0] == connect2 || this.railTypes[candidates[i]][1] == connect2)
        {
            return candidates[i];
        }
    }

    return null;
}

RailManager.prototype.getConnectingAngle = function(d1, d2)
{
    var result = Math.abs(this.railDegrees[d1] - this.railDegrees[d2]);

    if(result > 180)
        result = 360 - result;

    return result;
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


},{"../Common":2}],37:[function(require,module,exports){

var Common          = require("../Common");
var SimpleScreen    = require("../screens/SimpleScreen");
var TextItem        = require("../general/TextItem");
var LargeButton     = require("../general/LargeButton");
var SmallButton     = require("../general/SmallButton");
var Emitter         = require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function GameOverOverlay()
{
    this._messageBox        = null;
    this._bg                = null;
    this._leftGirl          = null;
    this._rightGirl         = null;
    this._leftEmitter       = null;
    this._rightEmitter      = null;

    SimpleScreen.call(this);
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
    console.log("SPLASH INITIALIZED");
    SimpleScreen.prototype.init.call(this);

    var bg = new PIXI.Sprite(Common.generatedTextures['black']);
    bg.width = Common.STAGE_WIDTH;
    bg.height = Common.STAGE_HEIGHT;
    bg.hitArea = new PIXI.Rectangle(0, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
    bg.interactive = true;
    bg.alpha = 0.75;
    this.addChild(bg);

    var messageBox = new PIXI.Sprite(this._assetManager.getTexture("panel"));
    messageBox.anchor = new PIXI.Point(0.5, 0.5);
    messageBox.x = Common.STAGE_WIDTH / 2;
    messageBox.y = (Common.STAGE_HEIGHT / 2) - 30;
    this.addChild(messageBox);

    this._messageBox = messageBox;
    this._bg = bg;

    var title = new TextItem("CAUGHT");
    title.x = 0;
    title.y = -235;
    this._messageBox.addChild(title);

    this._rightGirl = new PIXI.Sprite(this._assetManager.getTexture("girl-1"));
    this._rightGirl.anchor = new PIXI.Point(0, 1);
    this._rightGirl.x = Common.STAGE_WIDTH;
    this._rightGirl.y = Common.STAGE_HEIGHT + 40;
    this.addChild(this._rightGirl); 

    this._leftGirl = new PIXI.Sprite(this._assetManager.getTexture("girl-2"));
    this._leftGirl.anchor = new PIXI.Point(1, 1);
    this._leftGirl.x = 0;
    this._leftGirl.y = Common.STAGE_HEIGHT;
    this.addChild(this._leftGirl);

    this._leftEmitter = Emitter.add(this, 
                                ["particle_menu_steam"],
                                PARTICLE_emitter_steam_edges, (Common.STAGE_WIDTH / 2) - (p3.View.width / 2), Common.STAGE_HEIGHT / 2, 1, false, 1);

    this._rightEmitter = Emitter.add(this, 
                                ["particle_menu_steam"],
                                PARTICLE_emitter_steam_edges, (Common.STAGE_WIDTH / 2) + (p3.View.width / 2), Common.STAGE_HEIGHT / 2, 1, false, 1);

    var continueButton = new LargeButton("icon_play");
    continueButton.x = 0;
    continueButton.y = 270;
    continueButton.signals.click.addOnce(this.onContinueClicked, this);
    continueButton.downSoundName = "sfx_btn_press_play_00";
    this._messageBox.addChild(continueButton);

    this._backButton = new SmallButton("icon_home");
    this._backButton.y = this._guiButtonTopMargin;
    this._backButton.signals.click.add(this.onBackClicked, this);
    this._backButton.downSoundName = "sfx_btn_press_bck_00";
    this.addChild(this._backButton);

    Common.levelData.prepareData();
    
    this.signals.requestedMusicPlay.dispatch('music_gameover_lose_00');
};

GameOverOverlay.prototype.dispose = function()
{
    SimpleScreen.prototype.dispose.call(this);
}

/**
 */
GameOverOverlay.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);
};

/**
 */
GameOverOverlay.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);

    this._backButton.x = this._getFirstButtonPositionLeft();
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
GameOverOverlay.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);

    this._messageBox.scale = new PIXI.Point(0.6, 0.6);
    this._bg.alpha = 0;

    var tl = new TimelineMax();
    Common.animator.add(tl);

    tl.to(this._messageBox.scale, .5, {x:1, y:1, ease:Back.easeOut});
    tl.to(this._leftGirl, .4, {x:(Common.STAGE_WIDTH/2)+110, ease:Expo.easeOut, onStartScope:this, onStart:function(){
        this._leftEmitter.emit = true;
    }});
    tl.to(this._rightGirl, .4, {x:(Common.STAGE_WIDTH/2)-80, ease:Expo.easeOut, onStartScope:this, onStart:function(){
        this._rightEmitter.emit = true;
    }});
    tl.to(this._bg, .5, {alpha:0.75, ease:Sine.easeOut}, 0);

};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
GameOverOverlay.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);
};





//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================


GameOverOverlay.prototype.onBackClicked = function(button)
{
    this.signals.requestedPreviousScreen.dispatch();
}

GameOverOverlay.prototype.onContinueClicked = function(button)
{
    this.signals.requestedNextScreen.dispatch();
}




//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/Emitter":23,"../general/LargeButton":24,"../general/SmallButton":27,"../general/TextItem":29,"../screens/SimpleScreen":46}],38:[function(require,module,exports){

var Common          = require("../Common");
var SimpleScreen    = require("../screens/SimpleScreen");
var TextItem        = require("../general/TextItem");
var LargeButton     = require("../general/LargeButton");
var Emitter         = require("../general/Emitter");
var AudioParams     = require("../managers/AudioParams");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function LevelCompleteOverlay(level, tokens)
{
    this._level               = level;
    this._tokens              = tokens;

    this._starGraphics        = null;
    this._starGraphicsReached = null;
    this._starBars            = null;
    this._tokenNumbers        = null;
    this._starPercentages     = null;
    this._starDecos           = null;
    this._starDecoTint        = 0x8C2A3A;

    this._levelNewlyCompleted = false;

    this._messageBox          = null;
    this._bg                  = null;

    SimpleScreen.call(this);
}
module.exports = LevelCompleteOverlay;
LevelCompleteOverlay.prototype = Object.create(SimpleScreen.prototype);
LevelCompleteOverlay.prototype.constructor = LevelCompleteOverlay;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
LevelCompleteOverlay.prototype.init = function()
{
    console.log("SPLASH INITIALIZED");
    SimpleScreen.prototype.init.call(this);

    var bg = new PIXI.Sprite(Common.generatedTextures['black']);
    bg.width = Common.STAGE_WIDTH;
    bg.height = Common.STAGE_HEIGHT;
    bg.hitArea = new PIXI.Rectangle(0, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
    bg.interactive = true;
    bg.alpha = 0.5;
    this.addChild(bg);

    var messageBox = new PIXI.Sprite(this._assetManager.getTexture("panel"));
    messageBox.anchor = new PIXI.Point(0.5, 0.5);
    messageBox.x = Common.STAGE_WIDTH / 2;
    messageBox.y = (Common.STAGE_HEIGHT / 2) - 30;
    this.addChild(messageBox);

    this._bg = bg;
    this._messageBox = messageBox;

    var title = new TextItem("LEVEL_COMPLETE");
    title.x = 0;
    title.y = -235;
    messageBox.addChild(title);

    var continueButton = new LargeButton("icon_play");
    continueButton.x = 0;
    continueButton.y = 270;
    continueButton.signals.click.addOnce(this.onContinueClicked, this);
    continueButton.downSoundName = "sfx_btn_press_play_00";
    messageBox.addChild(continueButton);

    var percent = this._tokens / Common.levelData.levels[this._level].total_tokens;
    var starResult = 0;

    if(percent > 0.999)
        starResult = 3;
    else if(percent > 0.6)
        starResult = 2;
    else if(percent > 0.25)
        starResult = 1;

    if(Common.savedData.levelUnlocks[this._level].completed == false)
        this._levelNewlyCompleted = true;

    Common.savedData.levelUnlocks[this._level].completed = true;
    if(starResult > Common.savedData.levelUnlocks[this._level].stars)
    {
        Common.savedData.levelUnlocks[this._level].stars = starResult;
    }
    
    Common.savedData.save();

    this._starGraphics = [];
    this._starGraphicsReached = [false, false, false];

    for(var i = 0; i < 3; i++)
    {
        var star = new PIXI.Sprite(this._assetManager.getTexture('star_big_off'));
        star.anchor = new PIXI.Point(0.5, 0.5);
        star.y = i == 1 ? -90 : -60;
        star.x = -130 + (i*130)
        if(i == 0)
            star.rotation = -20 * PIXI.DEG_TO_RAD;
        else if(i == 2)
            star.rotation = 20 * PIXI.DEG_TO_RAD;

        messageBox.addChild(star);
        this._starGraphics.push(star);
    }

    var ornament = new PIXI.Sprite(this._assetManager.getTexture('star_big_ornament'));
    ornament.anchor = new PIXI.Point(0.5, 0.5);
    ornament.y = 20;
    messageBox.addChild(ornament);

    var starBarHolder = new PIXI.Sprite(this._assetManager.getTexture('starbar_bg'));
    starBarHolder.anchor = new PIXI.Point(0.5, 0.5);
    starBarHolder.y = 120;
    messageBox.addChild(starBarHolder);

    this._starBars = [];
    var barWidth = 16;
    for(var i = 0; i < 25; i++)
    {
        var bar = new PIXI.Sprite(this._assetManager.getTexture('bar_stick_off'));
        bar.anchor = new PIXI.Point(0.5, 0.5);
        bar.x = -((barWidth*25)/2) + (barWidth*i) - (barWidth/4);
        this._starBars.push(bar);
        starBarHolder.addChild(bar);
    }

    for(var i = 0; i < 3; i++)
    {
        var coin = new PIXI.Sprite(this._assetManager.getTexture('coin_001'));
        coin.anchor = new PIXI.Point(0.5, 0.5);
        coin.x = (this._starBars[0].x - 53) + (3*i) + 10;
        coin.y = 3 - (3*i);
        starBarHolder.addChild(coin);
    }

    this._tokenNumbers = [];

    for(var i = 0; i < 3; i++)
    {
        var number = new PIXI.Sprite(this._assetManager.getTexture('9_off'));
        number.scale = new PIXI.Point(0.5, 0.5);
        number.anchor = new PIXI.Point(0.5, 0.5);
        number.x = (this._starBars[this._starBars.length-1].x + 60) - (i*20);
        number.y = 10;
        number.visible = false;
        starBarHolder.addChild(number); 
        this._tokenNumbers.push(number);
    }

    this._starPercentages = [0.25, 0.6, 0.999];
    for(var i = 0; i < 3; i++)
    {
        var marker = new PIXI.Sprite(this._assetManager.getTexture('star_marker'));
        marker.anchor = new PIXI.Point(0.5, 0);
        marker.x = this._starBars[0].x + ((this._starBars[this._starBars.length-1].x - this._starBars[0].x) * this._starPercentages[i]) + (barWidth/2);
        marker.y = starBarHolder.height/2;
        starBarHolder.addChild(marker);
    }

    this.animateSequence(percent, this._tokens, Common.levelData.levels[this._level].total_tokens);

    this._starDecos = [];

    for(var i = 0; i < 2; i++)
    {
        var holder = new PIXI.Container();
        messageBox.addChild(holder);

        var stars = [{scale:0.8, rotation:40, x:0, y:0},
                     {scale:0.4, rotation:2, x:-40, y:-20},
                     {scale:0.7, rotation:5, x:20, y:-60},
                     {scale:1, rotation:20, x:-45, y:-90},
                     {scale:0.4, rotation:-20, x:60, y:-100}
                    ];
        if(this._starDecos.length == 0)
        {
            for(var j = 0; j < stars.length; j++)
            {
                this._starDecos.push([]);
            }
        }

        for(var j = 0; j < stars.length; j++)
        {
            var star = new PIXI.Sprite(this._assetManager.getTexture('star_deco_blue'));
            star.tint = this._starDecoTint;
            star.scale = new PIXI.Point(stars[j].scale, stars[j].scale);
            star.anchor = new PIXI.Point(0.5, 0.5);
            star.rotation = stars[j].rotation*PIXI.DEG_TO_RAD;
            star.x = stars[j].x;
            star.y = stars[j].y;
            holder.addChild(star);
            this._starDecos[j].push(star);
        }

        if(i == 0)
        {
            holder.x = -280;
        }
        else
        {
            holder.x = 280;
            holder.scale.x = -1;
        }
        holder.y = -50;
    }

    Common.audioManager.playSound('music_level_complete_03');
    this.signals.requestedMusicStop.dispatch();
    TweenMax.to(this, 2, {onCompleteScope:this, onComplete:function(){
        this.signals.requestedMusicPlay.dispatch('music_gameover_win_00');
    }});
};

LevelCompleteOverlay.prototype.animateSequence = function(percent, tokens, totalTokens)
{
    var currentPercent = 0;
    var tl = new TimelineMax();
    Common.animator.add(tl);

    for(var i = 0; i < this._starBars.length; i++)
    {
        currentPercent += 1/this._starBars.length;
        if(percent >= currentPercent)
        {
            tl.to(this._starBars[i], .1, {delay:i==0?0.5:0, onStartScope:this, onStartParams:[this._starBars[i], currentPercent], onStart:function(starBar, currentPercent){
                starBar.texture = this._assetManager.getTexture('bar_stick_on');
                this._countTokens(Math.floor(totalTokens * currentPercent));
                for(var i = 0; i < this._starPercentages.length; i++)
                {
                    if(this._starPercentages[i] < currentPercent && this._starGraphicsReached[i] == false)
                    {
                        this._highlightStar(this._starGraphics[i]);
                        this._starGraphicsReached[i] = true;
                    }
                }
            }});
            
        }
        else
        {
            tl.to(this._starBars[i], .1, {delay:i==0?0.5:0, onStartScope:this, onStartParams:[this._starBars[i], currentPercent], onStart:function(starBar, currentPercent){
                
                if(percent == 1 || starBar != this._starBars[this._starBars.length-1])
                {
                    starBar.texture = this._assetManager.getTexture('bar_stick_on');
                    if(percent == 1)
                    {
                        this._highlightStar(this._starGraphics[2]);
                    }
                }

                this._countTokens(tokens);
                for(var i = 0; i < this._starPercentages.length; i++)
                {
                    if(this._starPercentages[i] < percent)
                    {
                        this._flashGraphic(this._starGraphics[i], this._assetManager.getTexture('star_big_off'), this._assetManager.getTexture('star_big_on'));
                    }
                }
                for(var i = tokens.toString().length-1; i >= 0; i--)
                {
                    var number = tokens.toString().charAt(i);
                    this._flashGraphic(this._tokenNumbers[(tokens.toString().length-1)-i], this._assetManager.getTexture(number + '_dis'), this._assetManager.getTexture(number + '_on'));
                }
                this._flashStarDecos();
            }});
            break;
        }
    }
};

LevelCompleteOverlay.prototype.dispose = function()
{
    TweenMax.killTweensOf(this);
}

/**
 */
LevelCompleteOverlay.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);
};

/**
 */
LevelCompleteOverlay.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
LevelCompleteOverlay.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);

    this._messageBox.scale = new PIXI.Point(0.6, 0.6);
    this._bg.alpha = 0;

    Common.animator.add(TweenMax.to(this._messageBox.scale, .5, {x:1, y:1, ease:Back.easeOut}));
    Common.animator.add(TweenMax.to(this._bg, .5, {alpha:0.75, ease:Sine.easeOut}));
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
LevelCompleteOverlay.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);
};

LevelCompleteOverlay.prototype.isLevelNewlyCompleted = function() {

    return this._levelNewlyCompleted;
};





//===================================================
// PRIVATE METHODS
//===================================================

LevelCompleteOverlay.prototype._highlightStar = function(star)
{
    console.log(star);
    star.texture = this._assetManager.getTexture('star_big_on');
    var emitter = Emitter.add(star, 
                                ["particle_star"],
                                PARTICLE_levelend_starburst, 0, 0, 0.1, true, 0.5);
};

LevelCompleteOverlay.prototype._countTokens = function(number) {

    var str = number.toString();

    var firstChar = null;
    var secondChar = null;
    var thirdChar = null;

    firstChar = str.charAt(str.length-1);
    this._tokenNumbers[0].texture = this._assetManager.getTexture(firstChar + "_dis");
    this._tokenNumbers[0].visible = true;

    if(number >= 10)
    {
        secondChar = str.charAt(str.length-2);
        this._tokenNumbers[1].texture = this._assetManager.getTexture(secondChar + "_dis");
        this._tokenNumbers[1].visible = true;
    }
    else
    {
        this._tokenNumbers[1].visible = false;
    }

    if(number >= 100)
    {
        thirdChar = str.charAt(str.length-3);
        this._tokenNumbers[2].texture = this._assetManager.getTexture(thirdChar + "_dis");
        this._tokenNumbers[2].visible = true;
    }
    else
    {
        this._tokenNumbers[2].visible = false;
    }

    Common.audioManager.playSound("sfx_token_countup_end_00");
};

LevelCompleteOverlay.prototype._flashGraphic = function(item, disTexture, normalTexture)
{
    if(!TweenMax.isTweening(item))
    {
        var tl = new TimelineMax();
        Common.animator.add(tl);

        for(var i = 0; i < 2 + Math.floor(Math.random() * 2); i++)
        {
            tl.to(item, 0.07 + (Math.random()*0.1), {onCompleteScope:this, onComplete:function(){
                item.texture = disTexture;
            }});

            tl.to(item, 0.07 + (Math.random()*0.1), {onCompleteScope:this, onComplete:function(){
                item.texture = normalTexture;
            }});
        }
    }
};

LevelCompleteOverlay.prototype._flashStarDecos = function()
{
    var tls = [];
    for(var i = 0; i < 2; i++)
    {
        var tl = new TimelineMax({repeat:-1});
        Common.animator.add(tl);
        tls.push(tl);
    }
    
    for(var i = 0; i < this._starDecos.length; i++)
    {
        for(var j = 0; j < this._starDecos[i].length; j++)
        {
            tls[j].to(this._starDecos[i][j], 0.2, {onCompleteScope:this, onCompleteParams:[this._starDecos[i][j]], onComplete:function(star){
                star.tint = 0xFFFFFF;
            }});
        }
    }


    for(var j = 0; j < 2; j++)
    {
        for(var k = 0; k < 2; k++)
        {
            tls[j].to(this, 0.3, {onCompleteScope:this, onCompleteParams:[j], onComplete:function(j){
                for(var i = 0; i < this._starDecos.length; i++)
                {
                    this._starDecos[i][j].tint = this._starDecoTint;
                }
            }});
            tls[j].to(this, 0.3, {onCompleteScope:this, onCompleteParams:[j], onComplete:function(j){
                for(var i = 0; i < this._starDecos.length; i++)
                {
                    this._starDecos[i][j].tint = 0xFFFFFF;
                }
            }});
        }

        tls[j].to(this, 0.3, {onCompleteScope:this, onCompleteParams:[j], onComplete:function(j){
            for(var i = 0; i < this._starDecos.length; i++)
            {
                this._starDecos[i][j].tint = this._starDecoTint;
            }
        }});
    }

};



//===================================================
// EVENTS
//===================================================


LevelCompleteOverlay.prototype.onRestartClicked = function(button)
{
    this.signals.requestedPreviousScreen.dispatch();
}

LevelCompleteOverlay.prototype.onContinueClicked = function(button)
{
    this.signals.requestedNextScreen.dispatch();
}




//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/Emitter":23,"../general/LargeButton":24,"../general/TextItem":29,"../managers/AudioParams":35,"../screens/SimpleScreen":46}],39:[function(require,module,exports){

var Common          = require("../Common");
var SimpleScreen    = require("../screens/SimpleScreen");
var SmallButton     = require("../general/SmallButton");
var TextItem        = require("../general/TextItem");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function MessageOverlay(message, args)
{
    this._args          = args;
    this._message       = message;

    this._messageBox    = null;
    this._bg            = null;

    SimpleScreen.call(this);
}
module.exports = MessageOverlay;
MessageOverlay.prototype = Object.create(SimpleScreen.prototype);
MessageOverlay.prototype.constructor = MessageOverlay;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
MessageOverlay.prototype.init = function()
{
    console.log("SPLASH INITIALIZED");
    SimpleScreen.prototype.init.call(this);

    var bg = new PIXI.Sprite(Common.generatedTextures['black']);
    bg.width = Common.STAGE_WIDTH;
    bg.height = Common.STAGE_HEIGHT;
    bg.hitArea = new PIXI.Rectangle(0, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
    bg.interactive = true;
    bg.alpha = 0.5;
    this.addChild(bg);

    var messageBox = new PIXI.Sprite(this._assetManager.getTexture("panel"));
    messageBox.anchor = new PIXI.Point(0.5, 0.5);
    messageBox.x = Common.STAGE_WIDTH / 2;
    messageBox.y = (Common.STAGE_HEIGHT / 2);
    this.addChild(messageBox);

    this._messageBox = messageBox;
    this._bg = bg;

    var title = new TextItem(this._message, this._args);
    messageBox.addChild(title);

    var okButton = new SmallButton("icon_close");
    okButton.x = (messageBox.width/2) - 50;
    okButton.y = -(messageBox.height/2) + 60;
    okButton.signals.click.addOnce(this.onOkClicked, this);
    okButton.downSoundName = "sfx_btn_press_bck_00";
    messageBox.addChild(okButton);
};

/**
 */
MessageOverlay.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);
};

/**
 */
MessageOverlay.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
MessageOverlay.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);

    this._messageBox.scale = new PIXI.Point(0.6, 0.6);
    this._bg.alpha = 0;

    Common.animator.add(TweenMax.to(this._messageBox.scale, .5, {x:1, y:1, ease:Back.easeOut}));
    Common.animator.add(TweenMax.to(this._bg, .5, {alpha:0.75, ease:Sine.easeOut}));
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
MessageOverlay.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);

    Common.animator.add(TweenMax.to(this._messageBox, .3, {y:Common.STAGE_HEIGHT*1.5, ease:Sine.easeIn}));
    Common.animator.add(TweenMax.to(this._messageBox.scale, .5, {x:0.6, y:0.6, ease:Sine.easeIn}));
    Common.animator.add(TweenMax.to(this._bg, .5, {alpha:0, ease:Sine.easeOut, onCompleteScope:this, onComplete:function(){
        this.signals.requestedNextScreen.dispatch();
    }}));
};





//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================


MessageOverlay.prototype.onOkClicked = function(button)
{
    if(!button.disabled)
    {
        this.animateOut();
    }
}




//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/SmallButton":27,"../general/TextItem":29,"../screens/SimpleScreen":46}],40:[function(require,module,exports){

var Common          = require("../Common");
var SimpleScreen    = require("../screens/SimpleScreen");
var SmallButton     = require("../general/SmallButton");
var LargeButton     = require("../general/LargeButton");
var TextItem        = require("../general/TextItem");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function PauseOverlay()
{
    this._backButton        = null;

    this._pageContainer     = null;
    this._pausePage         = null;
    this._quitPage          = null;

    this._contents          = null;
    this._imageContainer    = null;
    this._image             = null;
    this._text              = null;
    this._leftButton        = null;
    this._rightButton       = null;
    this._currentPage       = 0;

    this._finger            = null;

    SimpleScreen.call(this);

    this.signals.resumed = new signals.Signal();
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
    console.log("SPLASH INITIALIZED");
    SimpleScreen.prototype.init.call(this);

    var bg = new PIXI.Sprite(Common.generatedTextures['black']);
    bg.width = Common.STAGE_WIDTH;
    bg.height = Common.STAGE_HEIGHT;
    bg.hitArea = new PIXI.Rectangle(0, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
    bg.interactive = true;
    bg.alpha = 0.5;
    this.addChild(bg);

    this._bg = bg;

    this._pageContainer = new PIXI.Container();
    this._pageContainer.x = Common.STAGE_WIDTH / 2;
    this._pageContainer.y = Common.STAGE_HEIGHT / 2;
    this.addChild(this._pageContainer);

    this._pausePage = new PIXI.Container();
    this._pageContainer.addChild(this._pausePage);

        var messageBox = new PIXI.Sprite(this._assetManager.getTexture("panel"));
        messageBox.anchor = new PIXI.Point(0.5, 0.5);
        messageBox.x = 0;
        messageBox.y = -30;
        this._pausePage.addChild(messageBox);

        var title = new TextItem("PAUSED");
        title.x = 0;
        title.y = -265;
        this._pausePage.addChild(title);

        var okButton = new LargeButton("icon_play");
        okButton.x = 0;
        okButton.y = 250;
        okButton.signals.click.addOnce(this.onOkClicked, this);
        okButton.downSoundName = "sfx_btn_press_fwd_00";
        this._pausePage.addChild(okButton);

        this._backButton = new SmallButton("icon_home");
        this._backButton.y = this._guiButtonTopMargin;
        this._backButton.signals.click.add(this.onBackClicked, this);
        this._backButton.downSoundName = "sfx_btn_press_bck_00";
        this.addChild(this._backButton);

        this._constructHelp();

    this._quitPage = new PIXI.Container();
    this._quitPage.visible = false;
    this._pageContainer.addChild(this._quitPage);

        var messageBox = new PIXI.Sprite(this._assetManager.getTexture("panel"));
        messageBox.anchor = new PIXI.Point(0.5, 0.5);
        messageBox.x = 0;
        messageBox.y = -30;
        this._quitPage.addChild(messageBox);

        var title = new TextItem("QUIT");
        title.x = 0;
        title.y = -30;
        title.anchor = new PIXI.Point(0.5, 0.5);
        this._quitPage.addChild(title);

        var yesButton = new SmallButton("icon_tick");
        yesButton.x = -100;
        yesButton.y = 70;
        yesButton.signals.click.addOnce(this.onQuitYesClicked, this);
        yesButton.downSoundName = "sfx_btn_press_bck_00";
        this._quitPage.addChild(yesButton);

        var noButton = new SmallButton("icon_close");
        noButton.x = 100;
        noButton.y = 70;
        noButton.signals.click.add(this.onQuitNoClicked, this);
        noButton.downSoundName = "sfx_btn_press_fwd_00";
        this._quitPage.addChild(noButton);

    this._addMuteButton();
    this.signals.requestedMusicPlay.dispatch('music_pauseloop_00');
};

/**
 */
PauseOverlay.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);
};

/**
 */
PauseOverlay.prototype.dispose = function()
{
    TweenMax.killTweensOf(this._finger);
    TweenMax.killTweensOf(this._finger.scale);
};

/**
 */
PauseOverlay.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);

    this._backButton.x = this._getFirstButtonPositionLeft();
    this._muteButton.x = this._getFirstButtonPositionRight();
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
PauseOverlay.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);

    this._pageContainer.scale = new PIXI.Point(0.6, 0.6);
    this._bg.alpha = 0;

    Common.animator.add(TweenMax.to(this._pageContainer.scale, .5, {x:1, y:1, ease:Back.easeOut}));
    Common.animator.add(TweenMax.to(this._bg, .5, {alpha:0.75, ease:Sine.easeOut}));
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
PauseOverlay.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);

    Common.animator.add(TweenMax.to(this._pageContainer, .3, {y:Common.STAGE_HEIGHT*1.5, ease:Sine.easeIn}));
    Common.animator.add(TweenMax.to(this._pageContainer.scale, .5, {x:0.6, y:0.6, ease:Sine.easeIn}));
    Common.animator.add(TweenMax.to(this._bg, .5, {alpha:0, ease:Sine.easeOut, onCompleteScope:this, onComplete:function(){
        this.signals.requestedNextScreen.dispatch();
    }}));

    this._backButton.visible = false;
};

PauseOverlay.prototype.showQuitPage = function()
{
    this._backButton.visible = false;
    var tl = new TimelineMax();
    tl.to(this._pageContainer.scale, .2, {x:0, y:0, ease:Sine.easeIn, onCompleteScope:this, onComplete:function(){
        this._pausePage.visible = false;
        this._quitPage.visible = true;
    }});
    tl.to(this._pageContainer.scale, .2, {x:1, y:1, ease:Sine.easeOut});
};

PauseOverlay.prototype.showPausePage = function()
{
    var tl = new TimelineMax();
    tl.to(this._pageContainer.scale, .2, {x:0, y:0, ease:Sine.easeIn, onCompleteScope:this, onComplete:function(){
        this._pausePage.visible = true;
        this._quitPage.visible = false;
        this._backButton.visible = true;
    }});
    tl.to(this._pageContainer.scale, .2, {x:1, y:1, ease:Sine.easeOut});
};

PauseOverlay.prototype.setPage = function(page)
{
    var newImage = new PIXI.Sprite(this._contents[page].image);
    newImage.x = this._contents[page].x || 0;
    newImage.y = this._contents[page].y || 0;
    newImage.anchor = new PIXI.Point(0.5, 0.5);
    newImage.alpha = 0;
    this._imageContainer.addChild(newImage);

    Common.animator.add(TweenMax.to(this._image, .5, {alpha:0, ease:Sine.easeOut}));
    Common.animator.add(TweenMax.to(newImage, .5, {alpha:1, ease:Sine.easeOut, onCompleteScope:this, onComplete:function(){
        this._imageContainer.removeChild(this._image);
        this._image = newImage;
    }}));

    if(this._text != null)
    {
        this._pausePage.removeChild(this._text);
    }

    this._text = new TextItem(this._contents[page].text);
    this._text.y = 110;
    this._pausePage.addChild(this._text);
  
    if(page == 0)
        this._leftButton.visible = false;
    else
        this._leftButton.visible = true;

    if(page == this._contents.length-1)
    {
        this._rightButton.visible = false;
    }
    else
    {
        this._rightButton.visible = true;
    }

    this._currentPage = page;

    if(this._currentPage == 0)
    {
        Common.animator.add(TweenMax.to(this._finger, .4, {alpha:1}));
    }
    else
    {
        Common.animator.add(TweenMax.to(this._finger, .4, {alpha:0}));
    }
}



//===================================================
// PRIVATE METHODS
//===================================================

PauseOverlay.prototype._constructHelp = function()
{
    this._contents = [];

    var ext = "";
    if(!p3.Device.isMobile)
        ext = "_PC";

    this._contents.push({image:this._assetManager.getTexture('tutorial_1'), text:"INSTRUCTIONS_1"});
    this._contents.push({image:this._assetManager.getTexture('tutorial_2'), text:"INSTRUCTIONS_2"});
    this._contents.push({image:this._assetManager.getTexture('tutorial_3'), text:"INSTRUCTIONS_3"});
    this._contents.push({image:this._assetManager.getTexture('tutorial_4'), text:"INSTRUCTIONS_4"});

    this._imageContainer = new PIXI.Container();
    this._imageContainer.y = -60;
    this._pausePage.addChild(this._imageContainer);

    this._image = new PIXI.Sprite(this._contents[0].image);
    this._image.anchor.x = this._image.anchor.y = 0.5;
    this._imageContainer.addChild(this._image);

    this._leftButton = new SmallButton("icon_arrow2")
    this._leftButton.x = -390;
    this._leftButton.signals.click.add(this.onLeftClicked, this);
    this._leftButton.downSoundName = "sfx_btn_press_bck_00";
    this._leftButton.visible = false;
    this._leftButton.animate = false;
    this._leftButton.scale.x = -1;
    this._pausePage.addChild(this._leftButton);

    this._rightButton = new SmallButton("icon_arrow2")
    this._rightButton.x = 390;
    this._rightButton.signals.click.add(this.onRightClicked, this);
    this._rightButton.downSoundName = "sfx_btn_press_fwd_00";
    this._rightButton.animate = false;
    this._pausePage.addChild(this._rightButton);

    this._finger = new PIXI.Sprite(this._assetManager.getTexture("tutorial_hand"));
    this._finger.y = 30;
    this._finger.anchor = new PIXI.Point(0.5, 1);
    this._pausePage.addChild(this._finger);

    var tl = new TimelineMax({repeat:-1});
    Common.animator.add(tl);
    tl.to(this._finger.scale, .5, {delay:1, y:.7, ease:Sine.easeInOut});
    tl.to(this._finger.scale, .6, {y:1, ease:Back.easeOut});

    var tl = new TimelineMax({repeat:-1});
    Common.animator.add(tl);
    tl.to(this._finger, .7, {delay:.8, y:70, ease:Sine.easeInOut});
    tl.to(this._finger, .6, {y:30, ease:Sine.easeOut});

    this.setPage(this._currentPage);
};


//===================================================
// EVENTS
//===================================================


PauseOverlay.prototype.onOkClicked = function(button)
{
    if(!button.disabled)
    {
        this.signals.resumed.dispatch();
        this.animateOut();
    }
}

PauseOverlay.prototype.onBackClicked = function(button)
{
    this.showQuitPage();
}

PauseOverlay.prototype.onQuitYesClicked = function()
{
    this.signals.requestedPreviousScreen.dispatch();
}

PauseOverlay.prototype.onQuitNoClicked = function()
{
    this.showPausePage();
}

PauseOverlay.prototype.onLeftClicked = function()
{    
    this.setPage(this._currentPage-1);
};

PauseOverlay.prototype.onRightClicked = function()
{    
    this.setPage(this._currentPage+1);
};




//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/LargeButton":24,"../general/SmallButton":27,"../general/TextItem":29,"../screens/SimpleScreen":46}],41:[function(require,module,exports){

var Common          = require("../Common");
var SimpleScreen    = require("../screens/SimpleScreen");
var SmallButton     = require("../general/SmallButton");
var LargeButton     = require("../general/LargeButton");
var TextItem        = require("../general/TextItem");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function TutorialOverlay(offset, text)
{
    this._bubble        = null;
    this._offset        = offset;
    this._text          = text;

    SimpleScreen.call(this);

    this.signals.resumed = new signals.Signal();
}
module.exports = TutorialOverlay;
TutorialOverlay.prototype = Object.create(SimpleScreen.prototype);
TutorialOverlay.prototype.constructor = TutorialOverlay;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
TutorialOverlay.prototype.init = function()
{
    SimpleScreen.prototype.init.call(this);

    var bg = new PIXI.Sprite(Common.generatedTextures['black']);
    bg.width = Common.STAGE_WIDTH;
    bg.height = Common.STAGE_HEIGHT;
    bg.hitArea = new PIXI.Rectangle(0, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
    bg.interactive = true;
    bg.alpha = 0.5;
    this._bg = bg;
    this.addChild(bg);

    this._bubble = new PIXI.Container();
    this._bubble.x = (Common.STAGE_WIDTH/2) + this._offset.x;
    this._bubble.y = (Common.STAGE_HEIGHT/2) + this._offset.y;
    this.addChild(this._bubble);

    var point = new PIXI.Sprite(this._assetManager.getTexture('speech_bubble_mid_right'));
    point.anchor = new PIXI.Point(1, 0.5);
    this._bubble.addChild(point);

    var pointWidth = 10;

    var text = new TextItem(this._text);
    text.x = -(point.width/2) - pointWidth;

    while(text.height > this._bubble.height || this._bubble.height > Common.STAGE_HEIGHT)
    {
        var upper = new PIXI.Sprite(this._assetManager.getTexture('speech_bubble_mid_flat'));
        upper.anchor = new PIXI.Point(1, 1);
        upper.y = -(this._bubble.height/2)+3;
        this._bubble.addChild(upper);

        var lower = new PIXI.Sprite(this._assetManager.getTexture('speech_bubble_mid_flat'));
        lower.anchor = new PIXI.Point(1, 0);
        lower.y = (this._bubble.height/2)-13;
        this._bubble.addChild(lower);
    }

    var top = new PIXI.Sprite(this._assetManager.getTexture('speech_bubble_top'));
    top.anchor = new PIXI.Point(1, 1);
    top.y = -(this._bubble.height/2)+3;
    this._bubble.addChild(top);

    var bottom = new PIXI.Sprite(this._assetManager.getTexture('speech_bubble_bottom'));
    bottom.anchor = new PIXI.Point(1, 0);
    bottom.y = (this._bubble.height/2)-13;
    this._bubble.addChild(bottom);
    
    this._bubble.addChild(text);

    this._bubble.scale.x = .5;
    Common.animator.add(TweenMax.to(this._bubble.scale, .5, {x:1, ease:Back.easeOut, onCompleteScope:this, onComplete:function(){
        bg.touchend = bg.mouseup = this.onTouchEnd.bind(this);
    }}));
};





//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================

TutorialOverlay.prototype.onTouchEnd = function()
{
    this._bg.touchend = this._bg.mouseup = null;
    this.signals.resumed.dispatch();
    Common.animator.setTimeout(function(){
        this.signals.requestedNextScreen.dispatch();
    }, 0.1, this);
}


//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/LargeButton":24,"../general/SmallButton":27,"../general/TextItem":29,"../screens/SimpleScreen":46}],42:[function(require,module,exports){

var Common              = require("../Common");
var SimpleScreen        = require("./SimpleScreen");
var LargeButton         = require("../general/LargeButton");
var TextItem            = require("../general/TextItem");
var Emitter              = require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function EndScreen()
{
    this._backButton        = null;
    this._gang              = null;

    SimpleScreen.call(this);
}
module.exports = EndScreen;
EndScreen.prototype = Object.create(SimpleScreen.prototype);
EndScreen.prototype.constructor = EndScreen;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
EndScreen.prototype.init = function()
{
    console.log("SPLASH INITIALIZED");
    SimpleScreen.prototype.init.call(this);

    Common.levelData.prepareData();

    var bg = new PIXI.Sprite(this._assetManager.getTexture("endgame_bg"));
    bg.anchor = new PIXI.Point(0.5, 0.5);
    bg.x = Common.STAGE_WIDTH / 2;
    bg.y = Common.STAGE_HEIGHT / 2;
    this.addChild(bg);

    var title = new TextItem("WELL_DONE");
    title.x = Common.STAGE_WIDTH / 2;
    title.y = 100;
    this.addChild(title);

    var subtitle = new TextItem("COMPLETED");
    subtitle.x = Common.STAGE_WIDTH / 2;
    subtitle.y = 160;
    this.addChild(subtitle);

    this._gang = new PIXI.Sprite(this._assetManager.getTexture("gang"));
    this._gang.anchor = new PIXI.Point(0.5, 1);
    this._gang.x = Common.STAGE_WIDTH / 2;
    this._gang.y = Common.STAGE_HEIGHT + this._gang.height;
    this.addChild(this._gang);

    this._playButton = new LargeButton("icon_play")
    this._playButton.x = Common.STAGE_WIDTH / 2;
    this._playButton.y = Common.STAGE_HEIGHT - 120;
    this._playButton.signals.click.addOnce(this.onStartClicked, this);
    this._playButton.downSoundName = "sfx_btn_press_play_00";
    this.addChild(this._playButton);

    this._leftEmitter = Emitter.add(bg, 
                                    ["particle_menu_steam"],
                                    PARTICLE_emitter_menu_steam_00, -420, -200);

    this._rightEmitter = Emitter.add(bg, 
                                    ["particle_menu_steam"],
                                    PARTICLE_emitter_menu_steam_00, 390, -200);

    this._addMuteButton();
    this.signals.requestedMusicPlay.dispatch('music_gameover_win_00');
};

/**
 */
EndScreen.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);
};

EndScreen.prototype.dispose = function()
{
    Emitter.destroy(this._leftEmitter);
    Emitter.destroy(this._rightEmitter);
};

/**
 */
EndScreen.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);

    this._muteButton.x = this._getFirstButtonPositionRight();

    this._playButton.x = Math.min((Common.STAGE_WIDTH / 2) + 410, 
                                   this._rightEdge - 100);
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
EndScreen.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);

    Common.animator.add(TweenMax.to(this._gang, .5, {y:Common.STAGE_HEIGHT, ease:Expo.easeOut}));
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
EndScreen.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);
};





//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================


EndScreen.prototype.onStartClicked = function(button)
{
    this.signals.requestedNextScreen.dispatch();
}



//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/Emitter":23,"../general/LargeButton":24,"../general/TextItem":29,"./SimpleScreen":46}],43:[function(require,module,exports){

var Common          = require("../Common");
var SimpleScreen    = require("./SimpleScreen");
var World    		= require("../engine/World");
var MapReader       = require("../engine/MapReader");
var Rail            = require("../game/Rail");
var RailJunction    = require("../game/RailJunction");
var Avatar          = require("../game/Avatar");
var HighlightArrow  = require("../game/HighlightArrow");
var Token           = require("../game/Token");
var Obstacle        = require("../game/Obstacle");
var Enemy           = require("../game/Enemy");
var PowerUp         = require("../game/PowerUp");
var TokenCounter    = require("../game/TokenCounter");
var DialogueBox     = require("../game/DialogueBox");
var SmallButton     = require("../general/SmallButton");
var AudioParams     = require("../managers/AudioParams");
var TextItem        = require("../general/TextItem");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function GameScreen(level)
{
    this._level              = level;

	this._background 	     = null;
	this._worldHolder	     = null;
    this._objectShadowHolder = null;
    this._objectHolder       = null;
    this._topLayer           = null;

	this._worlds		     = null;
    this._rails              = null;
    this._avatars            = null;
    this._highlightArrow     = null;
    this._objectGraphics     = null;
    this._objects            = null;
    this._activeEnemy        = null;
    this._enemies            = null;
    this._tutorials          = null;

    this._switchRail         = null;

	this._paused		     = false;

    this._viewDebug          = false;
    this._viewDebugXSpeed    = 0;
    this._viewDebugYSpeed    = 0;

    this._tokens             = 0;

    this._tokenCounter       = null;
    this._pauseButton        = null;
    this._dialogueBox        = null;

    this._speedUpCounter     = 0;
    this._speedUpValue       = 0;

    this._conveyorLoopSound  = null;
    
    SimpleScreen.call(this);

    this.signals.pauseClicked = new signals.Signal();
    this.signals.tutorialShown = new signals.Signal();
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

    this._background = new PIXI.Sprite(Common.generatedTextures.gameBG);
    this._background.width = Common.STAGE_WIDTH;
    this._background.height = Common.STAGE_HEIGHT;
    this.addChild(this._background);

//Objects

    this._objectGraphics = [];
    this._objects = [];
    this._enemies = [];

//World and Rails

    this._worldScaler = new PIXI.Container();
    this._worldScaler.x = Common.STAGE_WIDTH / 2;
    this._worldScaler.y = Common.STAGE_HEIGHT / 2;
    this.addChild(this._worldScaler);

    this._worldHolder = new PIXI.Container();
    this._worldHolder.y = -64 - (Common.STAGE_HEIGHT/2);
    this._worldHolder.x = -(Common.STAGE_WIDTH/2);
    this._worldScaler.addChild(this._worldHolder);

    this._worlds = {};
    this._rails = [];

    this._objectShadowHolder = new PIXI.Container();
    this._objectHolder = new PIXI.Container();

    this._mapReader = new MapReader(this._level);

    var levelStart = Common.levelData.levels[this._level].start;
    var levelCoords = this._tilesToCoordinates(levelStart.row, levelStart.col);
    
    for(var i in Common.levelData.worlds)
    {
    	var world = new World(this._mapReader, Common.STAGE_WIDTH, Common.STAGE_HEIGHT + 300 + (this._worldHolder.y*-1), i, Common.squareTileSize);
	    world.signals.activeObjectFound.add(this.onActiveObjectFound, this);
        world.x = -levelCoords.x + (Common.STAGE_WIDTH/2);
	    world.y = -levelCoords.y + (Common.STAGE_HEIGHT/2) + Common.railManager.distanceFromGround;
	   	world.fillScene();
	    this._worldHolder.addChild(world);
	    this._worlds[i] = world;

        if(i == "floor")
        {
            this._worldHolder.addChild(this._objectShadowHolder);
        }
        else if(i == "background")
        {
            this._worldHolder.addChild(this._objectHolder);
        }
    }

    this._topLayer = new PIXI.Container();
    this._worldHolder.addChild(this._topLayer);


//Avatars

    this._avatars = [];
    for(var i = 0; i < 7; i++)
    {
        var avatar = new Avatar(i+1, 7);
        avatar.signals.targetRailReached.add(this.onAvatarTargetRailReached, this);
        avatar.signals.dead.addOnce(this.onAvatarDead, this);

        this._avatars.push(avatar);
        this._objectGraphics.push(avatar);

        var rail = this.getRailAt(levelStart.row, levelStart.col);
        avatar.currentRail = rail;
        avatar.direction = Common.levelData.levels[this._level].start.direction;
        avatar.setTargetRail(this.getTargetRail(rail, avatar.direction));

        if(i == 0)
        {
            avatar.x = rail.centre.x;
            avatar.y = rail.centre.y;
        }
        else
        {
            var coords = Common.railManager.railCoords[Common.railManager.getOppositeDirection(avatar.direction)];
            avatar.x = this._avatars[i-1].x + (coords.x);
            avatar.y = this._avatars[i-1].y + (coords.y);
        }

        avatar.speed = 0;

        this._objectShadowHolder.addChild(this._avatars[i].shadow);
        this._objectHolder.addChild(this._avatars[i]);
    }

//Highlight Arrow

    this._highlightArrow = new HighlightArrow();
    this._highlightArrow.x = this._avatars[0].x;
    this._highlightArrow.y = this._avatars[0].y;
    this._topLayer.addChild(this._highlightArrow);
    this._highlightArrow.signals.targetRailReached.add(this.onHighlightArrowTargetRailReached, this);

//Hit Area

    this._hitArea = new PIXI.Sprite(Common.generatedTextures['black']);
    this._hitArea.alpha = 0;
    this._hitArea.width = Common.STAGE_WIDTH;
    this._hitArea.height = Common.STAGE_HEIGHT;
    this._hitArea.hitArea = new PIXI.Rectangle(0, 0, Common.STAGE_WIDTH, Common.STAGE_HEIGHT);
    this._hitArea.interactive = true;
    this.addChild(this._hitArea);

    if(this._viewDebug)
    {
        this._hitArea.touchmove = this._hitArea.mousemove = this.onTouchMove.bind(this);
    }
    this._hitArea.touchend = this._hitArea.mouseup = this.onTouchEnd.bind(this);


//UI

    this._pauseButton = new SmallButton("icon_pause");
    this._pauseButton.y = this._guiButtonTopMargin;
    this._pauseButton.signals.click.add(this.onPauseClicked, this);
    this._pauseButton.downSoundName = "sfx_btn_press_fwd_00";
    this.addChild(this._pauseButton);

    this._tokenCounter = new TokenCounter(Common.levelData.levels[this._level].total_tokens);
    this._tokenCounter.y = this._guiButtonTopMargin;
    this.addChild(this._tokenCounter);
    this._tokenCounter.setTokens(0);

    var dialogue = ["DIALOGUE_1", "DIALOGUE_2", "DIALOGUE_3", "DIALOGUE_4", "DIALOGUE_5", "DIALOGUE_6"];
    this._dialogueBox = new DialogueBox(dialogue[Math.floor(Math.random()*dialogue.length)]);
    this._dialogueBox.signals.activated.addOnce(function(){
        this._dialogueBox.signals.deactivated.addOnce(this.onDialogueBoxDeactivated, this);
    }, this);
    this.addChild(this._dialogueBox);

//Audio    

    this.signals.requestedMusicPlay.dispatch('music_gameloop_0' + (this._level % 2));

    var params = new AudioParams();
    params.loop = true;
    Common.audioManager.playSound("sfx_ambience_city_00", params);


//Tutorials
    
    this._tutorials = [];
    if(Common.levelData.levels[this._level].tutorial)
    {
        for(var i = 0; i < Common.levelData.levels[this._level].tutorial.length; i++)
        {
            var tutorial = {};
            for(var j in Common.levelData.levels[this._level].tutorial[i])
            {
                tutorial[j] = Common.levelData.levels[this._level].tutorial[i][j];
            }
            tutorial.shown = false;
            this._tutorials.push(tutorial);
        }
    }

    Common.animator.add(TweenMax.to(this._worldScaler.scale, 1, {x:1.2, y:1.2, ease:Sine.easeInOut}));

//FPS

    this._fps = {
        startTime : 0,
        frameNumber : 0,
        getFPS : function(){
            this.frameNumber++;
            var d = new Date().getTime(),
                currentTime = ( d - this.startTime ) / 1000,
                result = Math.floor( ( this.frameNumber / currentTime ) );

            if( currentTime > 1 ){
                this.startTime = new Date().getTime();
                this.frameNumber = 0;
            }
            return result;
        }   
    };

    this._fpsText = new PIXI.Text("", {fill:0x000000});
    this._fpsText.x = this._centre.x + 200;
    this._fpsText.y = this._centre.y;
    //this.addChild(this._fpsText);

};

GameScreen.prototype.dispose = function()
{
    Common.audioManager.stopSound(this._conveyorLoopSound);
    Common.audioManager.stopSound('sfx_shield_loop_02');
    Common.audioManager.stopSound('sfx_ambience_city_00');
    
    for(var i in this._avatars)
    {
        this._avatars[i].dispose();
    }
}

/**
 */
GameScreen.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);

    if(this._paused)
    	return null;

    this._fpsText.text = this._fps.getFPS().toString();

    if(!this._viewDebug)
    {
        var viewPoint = new PIXI.Point(-(this._avatars[0].x)+(Common.STAGE_WIDTH/2), -(this._avatars[0].y)+(Common.STAGE_HEIGHT/2) + Common.railManager.distanceFromGround);
    }

    for(var i in this._worlds)
    {
        if(this._viewDebug)
        {
    	   this._worlds[i].viewX += this._viewDebugXSpeed;
    	   this._worlds[i].viewY += this._viewDebugYSpeed;
        }
        else
        {
            this._worlds[i].viewX = viewPoint.x;
            this._worlds[i].viewY = viewPoint.y;
        }
	}

    if(this._viewDebug)
    {
        this._objectShadowHolder.x += this._viewDebugXSpeed;
        this._objectShadowHolder.y += this._viewDebugYSpeed;
        this._objectHolder.x += this._viewDebugXSpeed;
        this._objectHolder.y += this._viewDebugYSpeed;
        this._topLayer.x += this._viewDebugXSpeed;
        this._topLayer.y += this._viewDebugYSpeed;
    }
    else
    {
        this._objectShadowHolder.x = viewPoint.x;
        this._objectShadowHolder.y = viewPoint.y;
        this._objectHolder.x = viewPoint.x;
        this._objectHolder.y = viewPoint.y;
        this._topLayer.x = viewPoint.x;
        this._topLayer.y = viewPoint.y;
    }

    var holder = this._objectHolder;
    this._objectGraphics.sort(function(a, b)
    {
        if(a.y - b.y == 0)
            return holder.getChildIndex(a) - holder.getChildIndex(b);

        return a.y - b.y;
    });

    for(var i = 0; i < this._objectGraphics.length; i++)
    {
        this._objectHolder.setChildIndex(this._objectGraphics[i], i);
    }

    for(var i in this._avatars)
    {
        this._avatars[i].update();

        if(this._avatars[i].targetRail)
        {
            if(this._avatars[i].targetRail.col == Common.levelData.levels[this._level].end.col && 
                this._avatars[i].targetRail.row == Common.levelData.levels[this._level].end.row)
            {
                this.completeLevel();
            }
        }
    }

    if(!this._highlightArrow.targeting && this.switchRail != null)
    {
        this._highlightArrow.update();
        this._highlightArrow.visible = true;
        this._highlightArrow.speed = Math.max(8, this._avatars[i].speed * 2);
    }
    else if(this.switchRail == null)
    {
        this._highlightArrow.visible = false;
    }

    if(this._avatars[0].magnet)
    {
        var currentAvatar = 0;
        var midAvatar = this._avatars[Math.floor(this._avatars.length/2)].currentRail;
    }

    for(var j = 0; j < this._objects.length; j++)
    {
        if(this._avatars[0].magnet)
        {
            if(this._objects[j].type == "token" && !this._objects[j].collected)
            {
                if(this._objects[j].row > midAvatar.row-5 && this._objects[j].row < midAvatar.row+5 &&
                    this._objects[j].col > midAvatar.col-5 && this._objects[j].col < midAvatar.col+5)
                {
                    currentAvatar++;
                    if(currentAvatar >= this._avatars.length)
                        currentAvatar = 0;
                    var spr = this._objects[j].sprite;
                    spr.x += this._objects[j].x;
                    spr.y += this._objects[j].y;
                    this._objectHolder.addChild(spr);

                    this._objects[j].magnetDraw(this._avatars[currentAvatar], new PIXI.Point(0, -(Common.railManager.distanceFromGround*.75)));
                }
            }
        }

        this._objects[j].update();
    }

    this._tokenCounter.update();

    if(this._speedUpCounter >= 1800 && this._level > 1)
    {
        this._speedUpCounter = 0;
        this._dialogueBox = new DialogueBox("DIALOGUE_SPEED_UP", true);
        this.addChild(this._dialogueBox);

        Common.animator.setTimeout(function()
        {
            Common.audioManager.playSound("sfx_conveyor_speedup_warning");

            this._speedUpValue = 0;

            var tl = new TimelineMax({onUpdateScope:this, onUpdate:function(){
                for(var i = 0; i < this._avatars.length; i++)
                {
                    this._avatars[i].speedUpPercentValue = this._speedUpValue;
                }
            }});
            Common.animator.add(tl);

            tl.to(this, .3, {_speedUpValue:0.25, ease:Sine.easeInOut});
            tl.to(this, .3, {delay:5, _speedUpValue:0, ease:Sine.easeInOut});
            tl.to(this._worldScaler.scale, 0.5, {x:1, y:1, ease:Sine.easeInOut});

            Common.animator.add(TweenMax.to(this._worldScaler.scale, 0.5, {x:1.2, y:1.2, ease:Sine.easeInOut}));

        }, 1, this);
    }
    this._speedUpCounter++;

    if(this._dialogueBox.active)
        this._dialogueBox.update();
};

/**
 */
GameScreen.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);

    this._pauseButton.x = this._getFirstButtonPositionRight();
    this._tokenCounter.x = this._getFirstButtonPositionLeft();
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
GameScreen.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
GameScreen.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);
};

GameScreen.prototype.pause = function()
{
    this._paused = true;
    this._hitArea.interactive = false;
    this._pauseLoops();
    for(var i = 0; i < this._objects.length; i++)
    {
        this._objects[i].pause();
    }
}

GameScreen.prototype.resume = function()
{
    this._paused = false;
    this._hitArea.interactive = true;
    this.signals.requestedMusicPlay.dispatch('music_gameloop_0' + (this._level % 2));
    this._resumeLoops();
    for(var i = 0; i < this._objects.length; i++)
    {
        this._objects[i].resume();
    }
}

GameScreen.prototype.addRailObject = function(tile, connect1, connect2, connect3)
{   
    var rail;
    if(connect3)
    {
        rail = new RailJunction(connect1, connect2, connect3, tile);
    }
    else
    {
        rail = new Rail(connect1, connect2, tile);
    }
    rail.signals.cleared.addOnce(this.onActiveObjectCleared, this);
    this._rails.push(rail);

    var layer = this._worlds['floor'].getLayerForYCoordinate(tile.y);
    if(layer)
    {
        var tiles = layer.getTilesByCol(tile.col);

        for(var i = 0; i < tiles.length; i++)
        {
            if(tiles[i].textureName == tile.textureName + '_shadow')
            {
                rail.addShadow(tiles[i]);
            }
        }
    }
};

GameScreen.prototype.getRailAt = function(row, col)
{
    for(var i in this._rails)
    {
        if(this._rails[i].row == row && this._rails[i].col == col)
        {
            return this._rails[i];
        }
    }

    return null;
};

GameScreen.prototype.getTargetRail = function(rail, direction)
{
    for(var i in this._rails)
    {
        if(this._rails[i].row == rail.row + rail.neighbourCoords[direction].row)
        {
            if(this._rails[i].col == rail.col + rail.neighbourCoords[direction].col)
            {
                return this._rails[i];
            }
        }
    }
    return null;
};

GameScreen.prototype.updateSwitchRail = function(previousRail, direction)
{
    var rail = this.getTargetRail(previousRail, direction);
    var limit = 0;

    while(rail && limit < 10)
    {
        var linkingNeighbours = this.getLinkingRails(rail);
        if(linkingNeighbours.count == 2)
        {
            direction = rail.getOppositeEnd(Common.railManager.getOppositeDirection(direction));
            var neighbour = linkingNeighbours[direction];
            if(neighbour == null)
            {
                rail = null;
                this.switchRail = null;
            }
            else
            {
                if(neighbour.connected)
                {
                    rail = neighbour.rail;
                    this.switchRail = null;
                }
                else
                {
                    //console.log('junction (not connected) at: ' + neighbour.rail.col + ', ' + neighbour.rail.row);
                    console.log('junction: ' + neighbour.rail.railJunction);
                    if(neighbour.rail.railJunction == true)
                    {
                        rail = neighbour.rail;
                        rail.swapJunction();
                        this.switchRail = null;
                    }
                    else
                    {
                        linkingNeighbours = this.getLinkingRails(neighbour.rail);
                        rail = null;
                        this.switchRail = neighbour.rail;
                    }
                }
            }
        }
        else if(linkingNeighbours.count > 2)
        {
            //console.log('junction (already connected) at: ' + rail.col + ', ' + rail.row);
            if(rail.railJunction == true)
            {
                direction = rail.connect2;
                rail = linkingNeighbours[direction].rail;
                this.switchRail = null;
            }
            else
            {
                this.switchRail = rail;
                rail = null;
            }
        }
        else
        {
            //console.log('end of the line at: ' + rail.col + ', ' + rail.row);
            this.switchRail = null;
            rail = null;
        }
        limit++;
    }

    if(this.switchRail && linkingNeighbours.count > 2)
    {
        direction = Common.railManager.getOppositeDirection(direction);
        var switchStates = [];
        for(var i in linkingNeighbours)
        {
            if(i != 'count' && i != direction && Common.railManager.getConnectingAngle(i, direction) > 45)
            {
                switchStates.push(i);
            }
        }
        this.switchRail.applySwitchStates(direction, switchStates);

        var rail = this.getRailAt(this._avatars[0].currentRail.row, this._avatars[0].currentRail.col);
        this._highlightArrow.x = this._avatars[0].x;
        this._highlightArrow.y = this._avatars[0].y;
        this._highlightArrow.currentRail = rail;
        this._highlightArrow.direction = this._avatars[0].direction;
        this._highlightArrow.setTargetRail(this.getTargetRail(rail, this._highlightArrow.direction));
        this._highlightArrow.unsetTargeting();
    }
    else
    {
        this.switchRail = null;
    }
};

GameScreen.prototype.getLinkingRails = function(rail)
{
    var neighbours = {count:0};

    for(var d in Common.railManager.railCoords)
    {
        var od = Common.railManager.getOppositeDirection(d);

        for(var i in this._rails)
        {
            if(this._rails[i].row == rail.row + rail.neighbourCoords[d].row)
            {
                if(this._rails[i].col == rail.col + rail.neighbourCoords[d].col)
                {
                    var railIsConnecting = rail.hasConnection(d);
                    var neighbourIsConnecting = this._rails[i].hasConnection(od);

                    if(railIsConnecting || neighbourIsConnecting)
                    {
                        neighbours[d] = {rail:this._rails[i], connected:(railIsConnecting && neighbourIsConnecting)};
                        neighbours.count++;
                    }
                }
            }
        }
    }

    return neighbours;
}

GameScreen.prototype.addTokenObject = function(tile)
{
    var token = new Token(tile);
    this._objectHolder.addChild(token.graphic);
    this._objectGraphics.push(token.graphic);
    this._objects.push(token);
    token.signals.cleared.addOnce(this.onActiveObjectCleared, this);
    token.signals.collide.addOnce(this.onTokenCollected, this);
}

GameScreen.prototype.addObstacleObject = function(tile, obstacleType)
{
    var rail = this.getRailAt(tile.row, tile.col);
    var obstacle = new Obstacle(tile, obstacleType, rail);
    var graphics = [obstacle.singleGraphic, obstacle.leftGraphic, obstacle.rightGraphic];

    for(var i = 0; i < graphics.length; i++)
    {
        if(graphics[i])
        {
            this._objectHolder.addChild(graphics[i]);
            this._objectGraphics.push(graphics[i]);
        }
    }
    this._objects.push(obstacle);
    obstacle.signals.cleared.addOnce(this.onActiveObjectCleared, this);
    obstacle.signals.collide.add(this.onObstacleCollided, this);
}

GameScreen.prototype.addPowerUpObject = function(tile, powerUpType)
{
    var powerup = new PowerUp(tile, powerUpType);
    this._objectHolder.addChild(powerup.graphic);
    this._objectGraphics.push(powerup.graphic);
    this._objects.push(powerup);
    powerup.signals.cleared.addOnce(this.onActiveObjectCleared, this);
    powerup.signals.collide.addOnce(this.onPowerUpCollected, this);
}

GameScreen.prototype.addEnemyObject = function(tile, direction)
{
    var enemy = new Enemy(tile, direction);
    this._enemies.push(enemy);
    enemy.signals.cleared.addOnce(this.onActiveObjectCleared, this);
}

GameScreen.prototype.completeLevel = function()
{
    this._pauseLoops();
    this.signals.requestedNextScreen.dispatch(true, this._tokens);
}

GameScreen.prototype.updateEnemies = function()
{
    var rail = this._avatars[0].targetRail;
    var direction = this._avatars[0].direction;
    var linkingNeighbours = null;
    var looping = true;
    var endRail = null;
    var count = 0;

    while(looping && count < 3 && rail)
    {
        linkingNeighbours = this.getLinkingRails(rail);
        if(linkingNeighbours.count >= 2)
        {
            direction = rail.getOppositeEnd(Common.railManager.getOppositeDirection(direction));
            
            var neighbour = linkingNeighbours[direction];
            if(neighbour)
            {
                if(neighbour.connected)
                {
                    rail = neighbour.rail;
                    looping = true;
                }
                else
                {
                    looping = false;
                }
            }
            else
            {
                looping = false;
            }
        }
        else
        {
            looping = false;
            endRail = rail;
        }
        count++;
    }

    if(endRail != null)
    {
        var smallestDistancei = null;
        var smallestDistance = null;
        for(var i = 0; i < this._enemies.length; i++)
        {
            var distance = Math.sqrt(Math.pow(Math.abs(endRail.x - this._enemies[i].x), 2) + Math.pow(Math.abs(endRail.y - this._enemies[i].y), 2));
            if(distance < smallestDistance || smallestDistance == null)
            {
                smallestDistancei = i;
                smallestDistance = distance;
            }
        }

        var prevNumber = 1;
        if(this._activeEnemy)
        {
            prevNumber = this._activeEnemy.badGuyNumber;
            if(this._activeEnemy != this._enemies[smallestDistancei])
            {
                this._activeEnemy.deactivate();
            }
        }

        if(this._enemies.length > 0)
        {
            if(this._activeEnemy != this._enemies[smallestDistancei])
            {
                this._activeEnemy = this._enemies[smallestDistancei];
                this._activeEnemy.activate(prevNumber);
            }
        }
    }
}

GameScreen.prototype.showTutorial = function(tutorial)
{
    this.signals.tutorialShown.dispatch(tutorial.offset, tutorial.text);
}



//===================================================
// PRIVATE METHODS
//===================================================

GameScreen.prototype._tilesToCoordinates = function(row, col)
{
    var sq = Common.squareTileSize;
    return new PIXI.Point(col*sq*4 + (row % 2 == 1 ? sq*2 : 0), row*sq);
}

GameScreen.prototype._pauseLoops = function()
{
    Common.audioManager.stopSound(this._conveyorLoopSound);
}

GameScreen.prototype._resumeLoops = function()
{   
    if(this._conveyorLoopSound)
    {
        var params = new AudioParams();
        params.loop = true;
        Common.audioManager.playSound(this._conveyorLoopSound, params);
    }
}

//===================================================
// EVENTS
//===================================================

GameScreen.prototype.onActiveObjectFound = function(tile, imageName)
{
    var data = Common.levelData.activeObjects[imageName];

    if(data.object == 'rail')
    {
        this.addRailObject(tile, data.args[0], data.args[1]);
    }
    else if(data.object == 'railjunction')
    {
        this.addRailObject(tile, data.args[0], data.args[1], data.args[2]);
    }
    else if(data.object == 'token')
    {
        this.addTokenObject(tile);
    }
    else if(data.object == 'obstacle')
    {
        this.addObstacleObject(tile, data.args[0]);
    }
    else if(data.object == 'powerup')
    {
        this.addPowerUpObject(tile, data.args[0]);
    }
    else if(data.object == 'enemy')
    {
        this.addEnemyObject(tile, data.args[0]);
    }
}

GameScreen.prototype.onTokenCollected = function()
{
    this._tokens++;
    this._tokenCounter.setTokens(this._tokens);
}

GameScreen.prototype.onObstacleCollided = function(obstacle, avatar)
{
    if(avatar == this._avatars[0])
    {
        if(!this._avatars[0].shield)
        {
            this._tokens -= Math.min(5, this._tokens);
            this._tokenCounter.setTokens(this._tokens);
            this._tokenCounter.collided();
        }

        for(var i = 0; i < this._avatars.length; i++)
        {
            this._avatars[i].collide();
            this._avatars[i].buildSpeed(
                                        Common.levelData.levels[this._level].speed/2,
                                        .3, 0, 
                                        this._avatars[i].buildSpeed, this._avatars[i],
                                        [Common.levelData.levels[this._level].speed, 1, .3]
                                        )
        }

        if(obstacle.obstacleType == 'spray')
        {
            Common.audioManager.playSound('sfx_steam_press_start_00');
            Common.audioManager.playSound('sfx_hit_steam_wash_00');
        }
        else if(obstacle.obstacleType == 'fans')
        {
            Common.audioManager.playSound('sfx_hit_air_dryer_01');
        }
        else if(obstacle.obstacleType == 'brush')
        {
            Common.audioManager.playSound('sfx_hit_brushes_01');
        }

    }
}

GameScreen.prototype.onPowerUpCollected = function(powerup)
{
    console.log('power up!');
    for(var i = 0; i < this._avatars.length; i++)
    {
        if(powerup.powerUpType == "shield")
        {
            this._avatars[i].setShield();
            Common.audioManager.playSound('sfx_shield_pickup');
        }
        else if(powerup.powerUpType == "magnet")
        {
            this._avatars[i].setMagnet();
            Common.audioManager.playSound('sfx_magnet_pickup_00');
        }
        this._avatars[i].setMood('happy');
    }
}

GameScreen.prototype.onActiveObjectCleared = function(obj)
{
    if(obj.type == 'rail')
    {
        this._rails.splice(this._rails.indexOf(obj), 1);
    }
    else if(obj.type == 'enemy')
    {
        this._enemies.splice(this._enemies.indexOf(obj), 1);
        if(obj == this._activeEnemy)
            this._activeEnemy = null;
    }
    else
    {
        this._objectGraphics.splice(this._objectGraphics.indexOf(obj.graphic), 1);
        this._objects.splice(this._objects.indexOf(obj), 1);
        this._objectHolder.removeChild(obj.graphic);

        if(obj.type == 'token' || obj.type == 'powerup')
        {
            if(obj.collected)
            {
                this._mapReader.removeTileFromLayer(obj.tile.levelDataLayer, obj.row, obj.col);
            }
        }
    }

    obj.dispose();
}

GameScreen.prototype.onAvatarTargetRailReached = function(avatar)
{
    avatar.setTargetRail(this.getTargetRail(avatar.targetRail, avatar.direction));

    if(avatar == this._avatars[0])
    {
        if(this.switchRail == avatar.currentRail)
        {
            this.switchRail = null;
        }
    
        if(this.switchRail == null)
            this.updateSwitchRail(avatar.currentRail, avatar.direction);

        this.updateEnemies();
    }

    for(var i = 0; i < this._avatars.length-1; i++)
    {
        if(avatar == this._avatars[i])
            this._avatars[i+1].directionOfAvatarInFront = avatar.direction;
    }

    for(var i = 0; i < this._objects.length; i++)
    {
        if(this._objects[i].row == avatar.currentRail.row &&
           this._objects[i].col == avatar.currentRail.col)
        {
            this._objects[i].collide(avatar);
        }
    }
    for(var i = 0; i < this._tutorials.length; i++)
    {
        if(!this._tutorials[i].shown)
        {
            if(this._tutorials[i].row == avatar.currentRail.row &&
               this._tutorials[i].col == avatar.currentRail.col)
            {
                this._tutorials[i].shown = true;
                this.showTutorial(this._tutorials[i]);
            }
        }
    }


}

GameScreen.prototype.onAvatarDead = function()
{
    this._pauseLoops();
    Common.audioManager.playSound("sfx_got_caught_00");
    this.signals.requestedNextScreen.dispatch(false);

    if(this._worldScaler.scale.x == 1)
    {
        TweenMax.killTweensOf(this._worldScaler.scale);
        Common.animator.add(TweenMax.to(this._worldScaler.scale, 0.5, {x:1.2, y:1.2, ease:Sine.easeInOut}));
    }
}

GameScreen.prototype.onHighlightArrowTargetRailReached = function()
{
    if(this._highlightArrow.targetRail == this.switchRail)
    {
        this._highlightArrow.setTargeting();
    }
    else
    {
        this._highlightArrow.setTargetRail(this.getTargetRail(this._highlightArrow.targetRail, this._highlightArrow.direction));
    }
}

GameScreen.prototype.onTouchMove = function(event)
{
    var pos = event.data.getLocalPosition(this)

    if(this._viewDebug)
    {
        this._viewDebugXSpeed = -(pos.x - (Common.STAGE_WIDTH/2))/50;
        this._viewDebugYSpeed = -(pos.y - (Common.STAGE_HEIGHT/2))/50;
    }
}

GameScreen.prototype.onTouchEnd = function(event)
{
    if(this._viewDebug)
    {
        this._viewDebugXSpeed = 0;
        this._viewDebugYSpeed = 0;
    }
    else if(this.switchRail)
    {
        if(this.switchRail.cycleSwitchStates())
        {
            Common.audioManager.playSound("sfx_junction_press_05");
            this._highlightArrow.burst();
        }
        this.updateEnemies();
    }

    if(this._dialogueBox.active && !this._dialogueBox.ignoreClick)
    {
        this._dialogueBox.deactivate();
    }
}

GameScreen.prototype.onPauseClicked = function()
{
    this.signals.pauseClicked.dispatch();
}

GameScreen.prototype.onDialogueBoxDeactivated = function()
{
    for(var i = 0; i < this._avatars.length; i++)
    {
        this._avatars[i].buildSpeed(Common.levelData.levels[this._level].speed, .5);
    }

    Common.audioManager.playSound("sfx_steam_whistle_start_00");

    this._conveyorLoopSound = "sfx_conveyor_loop" + (5+Math.round(Math.random()));
    this._resumeLoops();

    TweenMax.killTweensOf(this._worldScaler.scale);
    Common.animator.add(TweenMax.to(this._worldScaler.scale, 1, {x:1, y:1, ease:Sine.easeInOut}));
}

//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../engine/MapReader":8,"../engine/World":10,"../game/Avatar":11,"../game/DialogueBox":12,"../game/Enemy":13,"../game/HighlightArrow":14,"../game/Obstacle":15,"../game/PowerUp":16,"../game/Rail":17,"../game/RailJunction":18,"../game/Token":21,"../game/TokenCounter":22,"../general/SmallButton":27,"../general/TextItem":29,"../managers/AudioParams":35,"./SimpleScreen":46}],44:[function(require,module,exports){

var Common              = require("../Common");
var SimpleScreen        = require("./SimpleScreen");
var SmallButton         = require("../general/SmallButton");
var LevelSelectButton   = require("../general/LevelSelectButton");
var StarField           = require("../general/StarField");
var Emitter             = require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function LevelSelectScreen()
{
    this._backButton        = null;
    this._starFields        = null;
    this._leftEmitter       = null;
    this._rightEmitter      = null;

    SimpleScreen.call(this);
}
module.exports = LevelSelectScreen;
LevelSelectScreen.prototype = Object.create(SimpleScreen.prototype);
LevelSelectScreen.prototype.constructor = LevelSelectScreen;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
LevelSelectScreen.prototype.init = function()
{
    console.log("SPLASH INITIALIZED");
    SimpleScreen.prototype.init.call(this);

    Common.levelData.prepareData();

    var bg = new PIXI.Sprite(this._assetManager.getTexture("levelselect_bg"));
    bg.anchor = new PIXI.Point(0.5, 0.5);
    bg.x = Common.STAGE_WIDTH / 2;
    bg.y = Common.STAGE_HEIGHT / 2;
    this.addChild(bg);

    var startX = (Common.STAGE_WIDTH/2)-(bg.width/2);
    var starFields = [
        {x:startX, y:0, width:460, height:335},
        {x:startX + 460, y:0, width:700, height:60},
        {x:startX + 1160, y:0, width:465, height:340},
        {x:startX + 390, y:335, width:60, height:200},
        {x:startX + 1160, y:340, width:300, height:160},
        {x:startX + 1160, y:500, width:155, height:110},
        {x:startX + 600, y:60, width:165, height:110},
        {x:startX + 850, y:60, width:165, height:110},
        {x:startX + 625, y:210, width:135, height:150},
        {x:startX + 890, y:210, width:135, height:150},
        {x:startX + 655, y:410, width:90, height:150},
        {x:startX + 900, y:410, width:70, height:150},
    ];

    this._starFields = [];
    for(var i = 0; i < starFields.length; i++)
    {
        var starField = new StarField(starFields[i].width, starFields[i].height);
        starField.x = starFields[i].x;
        starField.y = starFields[i].y;
        this.addChild(starField);
        this._starFields.push(starField);
    }

    var emitterHolder = new PIXI.Container();
    emitterHolder.x = (Common.STAGE_WIDTH/2);
    emitterHolder.y = Common.STAGE_HEIGHT - 147;
    this.addChild(emitterHolder);

    this._leftEmitter = Emitter.add(emitterHolder, 
                                    ["particle_menu_steam"],
                                    PARTICLE_emitter_menu_steam_00, -440, 40);

    this._rightEmitter = Emitter.add(emitterHolder, 
                                    ["particle_menu_steam"],
                                    PARTICLE_emitter_menu_steam_00, 410, 40);

    var leftPipe = new PIXI.Sprite(this._assetManager.getTexture('steam-pipe-left'));
    leftPipe.x = (Common.STAGE_WIDTH/2) - 486;
    leftPipe.y = emitterHolder.y - 16;
    this.addChild(leftPipe);

    var rightPipe = new PIXI.Sprite(this._assetManager.getTexture('steam-pipe-right'));
    rightPipe.x = (Common.STAGE_WIDTH/2) + 360;
    rightPipe.y = emitterHolder.y;
    this.addChild(rightPipe);

    for(var row = 0; row < 3; row++)
    {
        for(var col = 0; col < 3; col++)
        {
            var number = (row * 3) + (col+1);
            var state = "disabled";

            if(Common.savedData.levelUnlocks[number].unlocked)
            {
                if(Common.savedData.levelUnlocks[number].completed)
                {
                    state = "visited";
                }
                else
                {
                    state = "active";
                }
            }

            var button = new LevelSelectButton(number.toString(), state, Common.savedData.levelUnlocks[number].stars);
            button.id = number;
            button.x = (Common.STAGE_WIDTH / 2) - 255 + (row * 3) + (col*255);
            button.y = (Common.STAGE_HEIGHT / 2) - 230 + (205 * row);
            button.signals.click.add(this.onStartClicked, this);
            if(state == "disabled")
                button.downSoundName = "sfx_junction_press_00";
            else
                button.downSoundName = "sfx_btn_press_play_00";
            button.overSoundName = "sfx_ui_neon_rollover_03";
            this.addChild(button);

            if(Math.random() < .5)
            {
                button.flash(true);
            }
        }
    }

    this._backButton = new SmallButton("icon_home");
    this._backButton.y = this._guiButtonTopMargin;
    this._backButton.signals.click.add(this.onBackClicked, this);
    this._backButton.downSoundName = "sfx_btn_press_bck_00";
    this.addChild(this._backButton);

    this._addMuteButton();
    this.signals.requestedMusicPlay.dispatch('music_levelsloop_00');
};

LevelSelectScreen.prototype.dispose = function()
{
    for(var i = 0; i < this._starFields.length; i++)
    {
        this._starFields[i].dispose();
    }

    Emitter.destroy(this._leftEmitter);
    Emitter.destroy(this._rightEmitter);
};

/**
 */
LevelSelectScreen.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);
};

/**
 */
LevelSelectScreen.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);

    this._backButton.x = this._getFirstButtonPositionLeft();
    this._muteButton.x = this._getFirstButtonPositionRight();
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
LevelSelectScreen.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
LevelSelectScreen.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);
};





//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================


LevelSelectScreen.prototype.onStartClicked = function(button)
{
    if(!button.disabled)
    {
        this.signals.requestedNextScreen.dispatch(true, button.id);
    }
    else
    {
        this.signals.requestedNextScreen.dispatch(false, button.id);
    }
}

LevelSelectScreen.prototype.onBackClicked = function()
{
    this.signals.requestedPreviousScreen.dispatch();
}




//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/Emitter":23,"../general/LevelSelectButton":25,"../general/SmallButton":27,"../general/StarField":28,"./SimpleScreen":46}],45:[function(require,module,exports){
/**
 *  Preloader
 *
 *  Created by Legman on 5/04/2015.
 *
 */

var SimpleScreen        = require("./SimpleScreen");

var Common              = require("../Common");
var TextItem            = require("../general/TextItem");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function Preloader() {
    
    /**
     * @type {Number}
     */
    this.loadedPercentage   = 0.0;

    this._fonts             = null;
    this._hiddenText        = null;
    this._totalFontWaitTime = 0;
    this.fontLoaded         = false;

    this._starBars          = null;

    SimpleScreen.call(this);

    this.signals.fontLoaded = new signals.Signal();
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

    this.loadedPercentage = 0.0;

    var bg = new PIXI.Sprite(this._assetManager.getTexture('loading_bg'));
    bg.x = Common.STAGE_WIDTH / 2;
    bg.y = Common.STAGE_HEIGHT / 2;
    bg.anchor = new PIXI.Point(0.5, 0.5);
    this.addChild(bg);

    this._fonts = [{font:"30px placard_mtcondensed_bold"}, {font:"30px mandaliregular"}];

    this._hiddenText1 = new TextItem("LOADING", null, this._fonts[0]);
    this._hiddenText2 = new TextItem("LOADING", null, this._fonts[1]);
    this.checkFontLoaded();

    var starBarHolder = new PIXI.Container();
    starBarHolder.anchor = new PIXI.Point(0.5, 0.5);
    starBarHolder.x = Common.STAGE_WIDTH / 2;
    starBarHolder.y = Common.STAGE_HEIGHT / 2;
    this.addChild(starBarHolder);

    this._starBars = [];
    var barWidth = 16;
    for(var i = 0; i < 25; i++)
    {
        var bar = new PIXI.Sprite(this._assetManager.getTexture('bar_stick_off_preloader'));
        bar.anchor = new PIXI.Point(0.5, 0.5);
        bar.x = -((barWidth*25)/2) + (barWidth*i) - (barWidth/4);
        this._starBars.push(bar);
        starBarHolder.addChild(bar);
    }

};

/**
 */
Preloader.prototype.dispose = function()
{
    SimpleScreen.prototype.dispose.call(this);
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
Preloader.prototype.update = function() {
    //console.log("LOADING: " + this.loadedPercentage);

    for(var i = 0; i < this._starBars.length; i++)
    {
        if(this.loadedPercentage >= i*4)
        {
            this._starBars[i].texture = this._assetManager.getTexture('bar_stick_on_preloader');
        }
        else
        {
            this._starBars[i].texture = this._assetManager.getTexture('bar_stick_off_preloader');
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

Preloader.prototype.checkFontLoaded = function()
{
    Common.animator.setTimeout(function()
    {
        var text1 = new TextItem("LOADING", this._fonts[0]);
        var text2 = new TextItem("LOADING", this._fonts[1]);
        if((text1.width != this._hiddenText1.width || text1.height != this._hiddenText1.height) && 
           (text2.width != this._hiddenText2.width || text2.height != this._hiddenText2.height) )
        {
            this.signals.fontLoaded.dispatch();
            this.fontLoaded = true;
        }
        else
        {
            this._totalFontWaitTime += .5;
        
            if(this._totalFontWaitTime >= 4)
            {
                this.signals.fontLoaded.dispatch();
                this.fontLoaded = true;
            }
            else
            {
                this.checkFontLoaded();
            }
        }

    }, .5, this);
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


},{"../Common":2,"../general/TextItem":29,"./SimpleScreen":46}],46:[function(require,module,exports){

var Common      = require("../Common");
var Scene       = require("../lib/Scene");
var MuteButton  = require("../general/MuteButton");

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
    this.signals.requestedMusicPlay = new signals.Signal();
    this.signals.requestedMusicStop = new signals.Signal();

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

    this._guiButtonTopMargin = 100;

    this._muteButton = null;

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


//===================================================
// PRIVATE METHODS
//===================================================

SimpleScreen.prototype._getFirstButtonPositionRight = function()
{
    return (Common.STAGE_WIDTH + p3.View.width) * 0.5 - 100.0;
}

SimpleScreen.prototype._getSecondButtonPositionRight = function()
{
    return (Common.STAGE_WIDTH + p3.View.width) * 0.5 - 210.0;
}

SimpleScreen.prototype._getFirstButtonPositionLeft = function()
{
    return (Common.STAGE_WIDTH - p3.View.width) * 0.5 + 100.0;
}

SimpleScreen.prototype._getSecondButtonPositionLeft = function()
{
    return (Common.STAGE_WIDTH - p3.View.width) * 0.5 + 210.0;
}


SimpleScreen.prototype._addMuteButton = function()
{
    this._muteButton = new p3.MuteButton(this._assetManager.getTexture("small_button_def"), 
                                     this._assetManager.getTexture("small_button_over"), 
                                     this._assetManager.getTexture("small_button_press"), 
                                     this._assetManager.getTexture("icon_sound_on"), 
                                     this._assetManager.getTexture("icon_sound_off")
                                     );
    this._muteButton.id = "mute";
    this._muteButton.y = this._guiButtonTopMargin;
    this._muteButton.animate = true;
    this._muteButton.signals.down.add(this.onMute, this);
    this._muteButton.audio = Common.audioManager;
    this._muteButton.downSoundName = "sfx_btn_press_fwd_00"; 
    this.addChild(this._muteButton);
}


//===================================================
// EVENTS
//===================================================

/**
 * @param {!p3.Button} button
 */
SimpleScreen.prototype.onButtonClickedPrevious = function(button) {

};

SimpleScreen.prototype.onMute = function()
{

};


//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/MuteButton":26,"../lib/Scene":31}],47:[function(require,module,exports){

var Common          = require("../Common");
var SimpleScreen    = require("./SimpleScreen");
var LargeButton     = require("../general/LargeButton");
var TextItem        = require("../general/TextItem");
var StarField       = require("../general/StarField");
var Emitter         = require("../general/Emitter");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
function SplashScreen()
{
    this._gameTitle     = null;
    this._laundryTitle  = null;
    this._playButton    = null;
    this._starFields    = null;
    this._emitter       = null;

    this._characters    = null;

    SimpleScreen.call(this);
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

    var bg = new PIXI.Sprite(this._assetManager.getTexture('mainmenu_bg'));
    bg.anchor = new PIXI.Point(0.5, 0.5);
    bg.x = Common.STAGE_WIDTH / 2;
    bg.y = Common.STAGE_HEIGHT / 2;
    this.addChild(bg);

    var sequence = new p3.MovieClipSequence();
    sequence.addTextures([this._assetManager.getTexture('game_title_1'), 
                          this._assetManager.getTexture('game_title_2'), 
                          this._assetManager.getTexture('game_title_3')]);
    this._gameTitle = new p3.MovieClip(sequence);
    this._gameTitle.anchor = new PIXI.Point(0.5, 0.5);
    this._gameTitle.x = (Common.STAGE_WIDTH / 2) + 50;
    this._gameTitle.y = (Common.STAGE_HEIGHT / 2) - 200;
    this.addChild(this._gameTitle);

    this._gameTitle.animationSpeed = 2;
    this._gameTitle.looping = true;
    this._gameTitle.gotoAndPlay(0);

    this._emitter = Emitter.add(bg, 
                                    ["particle_menu_steam"],
                                    PARTICLE_emitter_menu_steam_00, -260, 40);

    this._characters = new PIXI.Sprite(this._assetManager.getTexture("girls"));
    this._characters.x = (Common.STAGE_WIDTH/2)-140;
    this._characters.y = Common.STAGE_HEIGHT;
    this.addChild(this._characters);

    this._playButton = new LargeButton("icon_play")
    this._playButton.x = Common.STAGE_WIDTH / 2;
    this._playButton.y = Common.STAGE_HEIGHT - 120;
    this._playButton.signals.click.addOnce(this.onStartClicked, this);
    this._playButton.downSoundName = "sfx_btn_press_play_00"; 
    this.addChild(this._playButton);

    /*
    this._laundryTitle = new PIXI.Sprite(this._assetManager.getTexture("laundry_title"));
    this._laundryTitle.anchor = new PIXI.Point(0.5, 0.5);
    this._laundryTitle.x = (Common.STAGE_WIDTH / 2) - 380;
    this._laundryTitle.y = (Common.STAGE_HEIGHT / 2) + 50;
    this.addChild(this._laundryTitle);*/

    var startX = (Common.STAGE_WIDTH/2)-(bg.width/2);
    var starFields = [
        {x:startX, y:0, width:100, height:110},
        {x:startX + 100, y:0, width:400, height:50},
        {x:startX + 500, y:0, width:115, height:90},
        {x:startX + 270, y:50, width:30, height:100},
        {x:startX + 270, y:150, width:68, height:78},
        {x:startX + 615, y:0, width:80, height:40},
    ];

    this._starFields = [];
    for(var i = 0; i < starFields.length; i++)
    {
        var starField = new StarField(starFields[i].width, starFields[i].height);
        starField.x = starFields[i].x;
        starField.y = starFields[i].y;
        this.addChild(starField);
        this._starFields.push(starField);
    }


    this._addMuteButton();
    this.signals.requestedMusicPlay.dispatch('music_mainmenuloop_00');
};

SplashScreen.prototype.dispose = function()
{
    for(var i = 0; i < this._starFields.length; i++)
    {
        this._starFields[i].dispose();
    }
    Emitter.destroy(this._emitter);
}

/**
 */
SplashScreen.prototype.update = function()
{
    SimpleScreen.prototype.update.call(this);
};

/**
 */
SplashScreen.prototype.resize = function()
{
    SimpleScreen.prototype.resize.call(this);

    this._muteButton.x = this._getFirstButtonPositionRight();

    this._playButton.x = Math.min((Common.STAGE_WIDTH / 2) + 410, 
                                   this._rightEdge - 100);
};

/**
 * @param {Function=} callback
 * @param {*=}scope
 */
SplashScreen.prototype.animateIn = function(callback, scope) {
    
    SimpleScreen.prototype.animateIn.call(this);

    Common.animator.add(TweenMax.to(this._characters, .5, {y:(Common.STAGE_HEIGHT/2)-145, ease:Back.easeOut}));
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
SplashScreen.prototype.animateOut = function(callback, scope) {
    
    SimpleScreen.prototype.animateOut.call(this);
};





//===================================================
// PRIVATE METHODS
//===================================================



//===================================================
// EVENTS
//===================================================


SplashScreen.prototype.onStartClicked = function()
{
    this.signals.requestedNextScreen.dispatch();
}




//===================================================
// GETTERS/SETTERS
//===================================================

//===================================================


},{"../Common":2,"../general/Emitter":23,"../general/LargeButton":24,"../general/StarField":28,"../general/TextItem":29,"./SimpleScreen":46}],48:[function(require,module,exports){

p3.TrackingModulePlaydom.prototype.track = function(data)
{
    /*
	var url     = "https://api.disney.com/datatech/serverlog/v1/json";
    var params  = {};
    params.app = this._app;
    params.user_id = this._browserId;
    params.app_locale = this._appLocale;
    params.transaction_id = this._transactionId;
    params.browser_id = this._browserId;
    params.network = this._network;
    params.view_network = this._viewNetwork;
    params.tag = data.tag;
    params.context = data.context;
    params.action = data.action;

    console.log('Tracking: ' + data.tag + ', ' + data.context + ', ' + data.action);

    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", this._authorizationId);
    request.send(JSON.stringify(params));*/

    if(window.trackGameEvent)
        window.trackGameEvent({"action":data.action, "action_detail":data.context});
};
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiLi4vQXBwbGljYXRpb24uanMiLCIuLi9Db21tb24uanMiLCIuLi9NYWluLmpzIiwiLi4vU2F2ZWREYXRhLmpzIiwiLi4vZGF0YS9MZXZlbERhdGEuanMiLCIuLi9lbmdpbmUvQWN0aXZlT2JqZWN0LmpzIiwiLi4vZW5naW5lL0xheWVyLmpzIiwiLi4vZW5naW5lL01hcFJlYWRlci5qcyIsIi4uL2VuZ2luZS9UaWxlLmpzIiwiLi4vZW5naW5lL1dvcmxkLmpzIiwiLi4vZ2FtZS9BdmF0YXIuanMiLCIuLi9nYW1lL0RpYWxvZ3VlQm94LmpzIiwiLi4vZ2FtZS9FbmVteS5qcyIsIi4uL2dhbWUvSGlnaGxpZ2h0QXJyb3cuanMiLCIuLi9nYW1lL09ic3RhY2xlLmpzIiwiLi4vZ2FtZS9Qb3dlclVwLmpzIiwiLi4vZ2FtZS9SYWlsLmpzIiwiLi4vZ2FtZS9SYWlsSnVuY3Rpb24uanMiLCIuLi9nYW1lL1JhaWxSaWRlci5qcyIsIi4uL2dhbWUvU2hhZG93LmpzIiwiLi4vZ2FtZS9Ub2tlbi5qcyIsIi4uL2dhbWUvVG9rZW5Db3VudGVyLmpzIiwiLi4vZ2VuZXJhbC9FbWl0dGVyLmpzIiwiLi4vZ2VuZXJhbC9MYXJnZUJ1dHRvbi5qcyIsIi4uL2dlbmVyYWwvTGV2ZWxTZWxlY3RCdXR0b24uanMiLCIuLi9nZW5lcmFsL011dGVCdXR0b24uanMiLCIuLi9nZW5lcmFsL1NtYWxsQnV0dG9uLmpzIiwiLi4vZ2VuZXJhbC9TdGFyRmllbGQuanMiLCIuLi9nZW5lcmFsL1RleHRJdGVtLmpzIiwiLi4vbGliL0NvbG91cldpcGVUcmFuc2l0aW9uLmpzIiwiLi4vbGliL1NjZW5lLmpzIiwiLi4vbGliL1NjZW5lTWFuYWdlci5qcyIsIi4uL2xpYi9UcmFuc2l0aW9uLmpzIiwiLi4vbWFuYWdlcnMvQXVkaW9NYW5hZ2VyLmpzIiwiLi4vbWFuYWdlcnMvQXVkaW9QYXJhbXMuanMiLCIuLi9tYW5hZ2Vycy9SYWlsTWFuYWdlci5qcyIsIi4uL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheS5qcyIsIi4uL292ZXJsYXlzL0xldmVsQ29tcGxldGVPdmVybGF5LmpzIiwiLi4vb3ZlcmxheXMvTWVzc2FnZU92ZXJsYXkuanMiLCIuLi9vdmVybGF5cy9QYXVzZU92ZXJsYXkuanMiLCIuLi9vdmVybGF5cy9UdXRvcmlhbE92ZXJsYXkuanMiLCIuLi9zY3JlZW5zL0VuZFNjcmVlbi5qcyIsIi4uL3NjcmVlbnMvR2FtZVNjcmVlbi5qcyIsIi4uL3NjcmVlbnMvTGV2ZWxTZWxlY3RTY3JlZW4uanMiLCIuLi9zY3JlZW5zL1ByZWxvYWRlci5qcyIsIi4uL3NjcmVlbnMvU2ltcGxlU2NyZWVuLmpzIiwiLi4vc2NyZWVucy9TcGxhc2hTY3JlZW4uanMiLCIuLi90cmFja2luZy9UcmFja2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3QxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbmVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMza0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgQ29tbW9uICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xudmFyIEdhbWVTY3JlZW4gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3NjcmVlbnMvR2FtZVNjcmVlblwiKTtcbnZhciBTcGxhc2hTY3JlZW4gICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9zY3JlZW5zL1NwbGFzaFNjcmVlblwiKTtcbnZhciBMZXZlbFNlbGVjdFNjcmVlbiAgICAgICAgICAgPSByZXF1aXJlKFwiLi9zY3JlZW5zL0xldmVsU2VsZWN0U2NyZWVuXCIpO1xudmFyIEVuZFNjcmVlbiAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3NjcmVlbnMvRW5kU2NyZWVuXCIpO1xudmFyIE1lc3NhZ2VPdmVybGF5ICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL292ZXJsYXlzL01lc3NhZ2VPdmVybGF5XCIpO1xudmFyIFBhdXNlT3ZlcmxheSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL292ZXJsYXlzL1BhdXNlT3ZlcmxheVwiKTtcbnZhciBMZXZlbENvbXBsZXRlT3ZlcmxheSAgICAgICAgPSByZXF1aXJlKFwiLi9vdmVybGF5cy9MZXZlbENvbXBsZXRlT3ZlcmxheVwiKTtcbnZhciBHYW1lT3Zlck92ZXJsYXkgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9vdmVybGF5cy9HYW1lT3Zlck92ZXJsYXlcIik7XG52YXIgVHV0b3JpYWxPdmVybGF5ICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vb3ZlcmxheXMvVHV0b3JpYWxPdmVybGF5XCIpO1xudmFyIFRyYW5zaXRpb24gICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL2xpYi9UcmFuc2l0aW9uXCIpO1xudmFyIENvbG91cldpcGVUcmFuc2l0aW9uICAgICAgICA9IHJlcXVpcmUoXCIuL2xpYi9Db2xvdXJXaXBlVHJhbnNpdGlvblwiKTtcbnZhciBMZXZlbERhdGEgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9kYXRhL0xldmVsRGF0YVwiKTtcbnZhciBTYXZlZERhdGEgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9TYXZlZERhdGFcIik7XG52YXIgUmFpbE1hbmFnZXIgICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vbWFuYWdlcnMvUmFpbE1hbmFnZXJcIik7XG52YXIgQXVkaW9QYXJhbXMgICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vbWFuYWdlcnMvQXVkaW9QYXJhbXNcIik7XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBBcHBsaWNhdGlvbigpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QXNzZXRNYW5hZ2VyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXNzZXRNYW5hZ2VyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTY3JlZW5NYW5hZ2VyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2NyZWVuTWFuYWdlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jdXJyZW50TXVzaWMgPSBudWxsO1xuXG59XG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJBUFBMSUNBVElPTiBJTklUSUFMSVpFRFwiKTtcblxuICAgIHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcbiAgICB0aGlzLl9zY3JlZW5NYW5hZ2VyID0gQ29tbW9uLnNjZW5lTWFuYWdlcjtcblxuICAgIFR3ZWVuTWF4LmRlZmF1bHRPdmVyd3JpdGUgPSBcIm5vbmVcIjtcblxuICAgIENvbW1vbi5yYWlsTWFuYWdlciA9IG5ldyBSYWlsTWFuYWdlcigpO1xuICAgIENvbW1vbi5sZXZlbERhdGEgPSBuZXcgTGV2ZWxEYXRhKCk7XG4gICAgQ29tbW9uLnNhdmVkRGF0YSA9IG5ldyBTYXZlZERhdGEoKTtcblxuICAgIGZvcih2YXIgaSBpbiBDb21tb24uY29sb3VycylcbiAgICB7XG4gICAgICAgIHZhciBnciA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIGdyLmJlZ2luRmlsbChDb21tb24uY29sb3Vyc1tpXSk7XG4gICAgICAgIGdyLmRyYXdSZWN0KDAsIDAsIDEsIDEpO1xuICAgICAgICBDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbaV0gPSBnci5nZW5lcmF0ZVRleHR1cmUoQ29tbW9uLnJlbmRlcmVyLCAxLjAsIFBJWEkuU0NBTEVfTU9ERVMuTElORUFSKTtcbiAgICB9XG5cbiAgICB2YXIgY2lyY2xlVG9rZW4gPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIGNpcmNsZVRva2VuLmJlZ2luRmlsbCgweEY3MjgxMSk7XG4gICAgY2lyY2xlVG9rZW4uZHJhd0NpcmNsZSgwLCAwLCAxMCk7XG4gICAgQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzLmNpcmNsZVRva2VuID0gY2lyY2xlVG9rZW4uZ2VuZXJhdGVUZXh0dXJlKENvbW1vbi5yZW5kZXJlciwgMS4wLCBQSVhJLlNDQUxFX01PREVTLkxJTkVBUik7XG5cbiAgICB2YXIgc3F1YXJlVG9rZW4gPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIHNxdWFyZVRva2VuLmJlZ2luRmlsbCgweEJCQkNCRCk7XG4gICAgc3F1YXJlVG9rZW4uZHJhd1JlY3QoMCwgMCwgNTAsIDEwMCk7XG4gICAgQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzLnNxdWFyZVRva2VuID0gc3F1YXJlVG9rZW4uZ2VuZXJhdGVUZXh0dXJlKENvbW1vbi5yZW5kZXJlciwgMS4wLCBQSVhJLlNDQUxFX01PREVTLkxJTkVBUik7XG5cbiAgICB0aGlzLnNob3dTcGxhc2goKTtcbiAgICAvL3RoaXMuc2hvd0xldmVsQ29tcGxldGUoNiwgOTcpO1xuICAgIC8vdGhpcy5zaG93R2FtZU92ZXIoKTtcbn07XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zaG93U3BsYXNoID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgc2NyZWVuID0gbmV3IFNwbGFzaFNjcmVlbigpO1xuICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHNjcmVlbiwgdGhpcy5fZ2V0VHJhbnNpdGlvbigpKTtcblxuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc2hvd0xldmVsU2VsZWN0KCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmFkZChmdW5jdGlvbih0cmFjayl7XG4gICAgICAgIHRoaXMuX3BsYXlNdXNpYyh0cmFjayk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gc2NyZWVuO1xufTtcblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dMZXZlbFNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNjcmVlbiA9IG5ldyBMZXZlbFNlbGVjdFNjcmVlbigpO1xuICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHNjcmVlbiwgdGhpcy5fZ2V0VHJhbnNpdGlvbigpKTtcblxuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zaG93U3BsYXNoKCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGQoZnVuY3Rpb24ocGxheSwgbGV2ZWwpe1xuXG4gICAgICAgIGlmKCFwbGF5KVxuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShcIkxFVkVMX0xPQ0tFRFwiLCBbQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbbGV2ZWxdLnN0YXJzX3JlcXVpcmVkLnRvU3RyaW5nKCldKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zaG93R2FtZShsZXZlbCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmFkZChmdW5jdGlvbih0cmFjayl7XG4gICAgICAgIHRoaXMuX3BsYXlNdXNpYyh0cmFjayk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gc2NyZWVuO1xufTtcblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dHYW1lID0gZnVuY3Rpb24obGV2ZWwpXG57XG4gICAgdmFyIHNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKGxldmVsKTtcbiAgICB0aGlzLl9zY3JlZW5NYW5hZ2VyLmFkZChzY3JlZW4sIHRoaXMuX2dldFRyYW5zaXRpb24oKSk7XG5cbiAgICBzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgIH0sIHRoaXMpO1xuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uYWRkT25jZShmdW5jdGlvbih3aW4sIHRva2Vucyl7XG4gICAgICAgIGlmKCF3aW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyKGxldmVsKTtcbiAgICAgICAgICAgIHNjcmVlbi5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zaG93TGV2ZWxDb21wbGV0ZShsZXZlbCwgdG9rZW5zKTtcbiAgICAgICAgICAgIHNjcmVlbi5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucGF1c2VDbGlja2VkLmFkZChmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNob3dQYXVzZShzY3JlZW4pO1xuICAgICAgICBzY3JlZW4ucGF1c2UoKTtcbiAgICB9LCB0aGlzKTtcbiAgICBzY3JlZW4uc2lnbmFscy50dXRvcmlhbFNob3duLmFkZChmdW5jdGlvbihvZmZzZXQsIHRleHQpe1xuICAgICAgICB0aGlzLnNob3dUdXRvcmlhbChzY3JlZW4sIG9mZnNldCwgdGV4dCk7XG4gICAgICAgIHNjcmVlbi5wYXVzZSgpO1xuICAgIH0sIHRoaXMpO1xuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE11c2ljUGxheS5hZGQoZnVuY3Rpb24odHJhY2spe1xuICAgICAgICB0aGlzLl9wbGF5TXVzaWModHJhY2spO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIHNjcmVlbjtcbn07XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zaG93RW5kID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciBzY3JlZW4gPSBuZXcgRW5kU2NyZWVuKCk7XG4gICAgdGhpcy5fc2NyZWVuTWFuYWdlci5hZGQoc2NyZWVuLCB0aGlzLl9nZXRUcmFuc2l0aW9uKCkpO1xuXG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uYWRkT25jZShmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICB9LCB0aGlzKTtcbiAgICBzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zaG93U3BsYXNoKCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmFkZChmdW5jdGlvbih0cmFjayl7XG4gICAgICAgIHRoaXMuX3BsYXlNdXNpYyh0cmFjayk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gc2NyZWVuO1xufTtcblxuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd01lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlLCBhcmdzKVxue1xuICAgIHZhciB0ID0gbmV3IFRyYW5zaXRpb24oKTtcbiAgICB0LnJlcGxhY2UgPSBmYWxzZTtcbiAgICB0LnB1c2ggPSB0cnVlO1xuXG4gICAgdmFyIHNjcmVlbiA9IG5ldyBNZXNzYWdlT3ZlcmxheShtZXNzYWdlLCBhcmdzKTtcbiAgICB0aGlzLl9zY3JlZW5NYW5hZ2VyLmFkZChzY3JlZW4sIHQpO1xuXG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgdGhpcy5fc2NyZWVuTWFuYWdlci5yZW1vdmUoKTtcbiAgICB9LCB0aGlzKTtcbiAgICBzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgXG4gICAgfSwgdGhpcyk7XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd1BhdXNlID0gZnVuY3Rpb24oZ2FtZVNjcmVlbilcbntcbiAgICB2YXIgdCA9IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgdC5yZXBsYWNlID0gZmFsc2U7XG4gICAgdC5wdXNoID0gdHJ1ZTtcblxuICAgIHRoaXMuX3BhdXNlKCk7XG5cbiAgICB2YXIgc2NyZWVuID0gbmV3IFBhdXNlT3ZlcmxheSgpO1xuICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHNjcmVlbiwgdCk7XG5cbiAgICBzY3JlZW4uc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oaWQpe1xuICAgICAgICB0aGlzLl9zY3JlZW5NYW5hZ2VyLnJlbW92ZSgpO1xuICAgIH0sIHRoaXMpO1xuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oaWQpe1xuICAgICAgICB0aGlzLl9yZXN1bWUoKTtcbiAgICAgICAgdGhpcy5zaG93U3BsYXNoKCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmFkZChmdW5jdGlvbih0cmFjayl7XG4gICAgICAgIHRoaXMuX3BsYXlNdXNpYyh0cmFjayk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVzdW1lZC5hZGQoZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5fcmVzdW1lKCk7XG4gICAgICAgIGdhbWVTY3JlZW4ucmVzdW1lKCk7XG4gICAgfSwgdGhpcyk7XG59O1xuXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuc2hvd0xldmVsQ29tcGxldGUgPSBmdW5jdGlvbihsZXZlbCwgdG9rZW5zKVxue1xuICAgIHZhciB0ID0gbmV3IFRyYW5zaXRpb24oKTtcbiAgICB0LnJlcGxhY2UgPSBmYWxzZTtcbiAgICB0LnB1c2ggPSB0cnVlO1xuXG4gICAgLy90aGlzLl9wYXVzZSgpO1xuXG4gICAgdmFyIHNjcmVlbiA9IG5ldyBMZXZlbENvbXBsZXRlT3ZlcmxheShsZXZlbCwgdG9rZW5zKTtcbiAgICB0aGlzLl9zY3JlZW5NYW5hZ2VyLmFkZChzY3JlZW4sIHQpO1xuXG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5hZGRPbmNlKGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgXG4gICAgICAgIC8vdGhpcy5fcmVzdW1lKCk7XG4gICAgICAgIGlmKENvbW1vbi5zYXZlZERhdGEuaGFzQ29tcGxldGVkQWxsTGV2ZWxzKCkgJiYgc2NyZWVuLmlzTGV2ZWxOZXdseUNvbXBsZXRlZCgpKVxuICAgICAgICAgICAgdGhpcy5zaG93RW5kKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2hvd0xldmVsU2VsZWN0KCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uYWRkT25jZShmdW5jdGlvbihpZCl7XG5cbiAgICAgICAgLy90aGlzLl9yZXN1bWUoKTtcbiAgICAgICAgdGhpcy5zaG93R2FtZShsZXZlbCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmFkZChmdW5jdGlvbih0cmFjayl7XG4gICAgICAgIHRoaXMuX3BsYXlNdXNpYyh0cmFjayk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NyZWVuLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNTdG9wLmFkZChmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLl9zdG9wQWxsTXVzaWMoKTtcbiAgICB9LCB0aGlzKTtcbn07XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zaG93R2FtZU92ZXIgPSBmdW5jdGlvbihsZXZlbClcbntcbiAgICB2YXIgdCA9IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgdC5yZXBsYWNlID0gZmFsc2U7XG4gICAgdC5wdXNoID0gdHJ1ZTtcblxuICAgIC8vdGhpcy5fcGF1c2UoKTtcblxuICAgIHZhciBzY3JlZW4gPSBuZXcgR2FtZU92ZXJPdmVybGF5KCk7XG4gICAgdGhpcy5fc2NyZWVuTWFuYWdlci5hZGQoc2NyZWVuLCB0KTtcblxuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uYWRkT25jZShmdW5jdGlvbihpZCl7XG4gICAgICAgIC8vdGhpcy5fcmVzdW1lKCk7XG4gICAgICAgIHRoaXMuc2hvd0dhbWUobGV2ZWwpO1xuICAgIH0sIHRoaXMpO1xuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmFkZE9uY2UoZnVuY3Rpb24oaWQpe1xuICAgICAgICAvL3RoaXMuX3Jlc3VtZSgpO1xuICAgICAgICB0aGlzLnNob3dMZXZlbFNlbGVjdCgpO1xuICAgIH0sIHRoaXMpO1xuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE11c2ljUGxheS5hZGQoZnVuY3Rpb24odHJhY2spe1xuICAgICAgICB0aGlzLl9wbGF5TXVzaWModHJhY2spO1xuICAgIH0sIHRoaXMpO1xufTtcblxuQXBwbGljYXRpb24ucHJvdG90eXBlLnNob3dUdXRvcmlhbCA9IGZ1bmN0aW9uKGdhbWVTY3JlZW4sIG9mZnNldCwgdGV4dClcbntcbiAgICB2YXIgdCA9IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgdC5yZXBsYWNlID0gZmFsc2U7XG4gICAgdC5wdXNoID0gdHJ1ZTtcblxuICAgIHRoaXMuX3BhdXNlKCk7XG5cbiAgICB2YXIgc2NyZWVuID0gbmV3IFR1dG9yaWFsT3ZlcmxheShvZmZzZXQsIHRleHQpO1xuICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHNjcmVlbiwgdCk7XG5cbiAgICBzY3JlZW4uc2lnbmFscy5yZXN1bWVkLmFkZChmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLl9yZXN1bWUoKTtcbiAgICAgICAgZ2FtZVNjcmVlbi5yZXN1bWUoKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHNjcmVlbi5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uYWRkT25jZShmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLl9yZXN1bWUoKTtcbiAgICAgICAgZ2FtZVNjcmVlbi5yZXN1bWUoKTtcbiAgICAgICAgdGhpcy5fc2NyZWVuTWFuYWdlci5yZW1vdmUoKTtcbiAgICB9LCB0aGlzKTtcbn07XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuX2dldFRyYW5zaXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIHRyYW5zaXRpb24gPSBuZXcgQ29sb3VyV2lwZVRyYW5zaXRpb24oKTtcbiAgICAvL3RyYW5zaXRpb24ucmVwbGFjZSA9IHRydWU7XG4gICAgLy90cmFuc2l0aW9uLnB1c2ggPSBmYWxzZTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbjtcbn1cblxuQXBwbGljYXRpb24ucHJvdG90eXBlLl9wbGF5TXVzaWMgPSBmdW5jdGlvbih0cmFjaylcbntcbiAgICB2YXIgcGFyYW1zID0gbmV3IEF1ZGlvUGFyYW1zKCk7XG4gICAgcGFyYW1zLmxvb3AgPSB0cnVlO1xuICAgIHBhcmFtcy5mYWRlSW4gPSAwLjU7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5TXVzaWModHJhY2ssIHBhcmFtcyk7XG4gICAgdGhpcy5fY3VycmVudE11c2ljID0gdHJhY2s7XG59XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5fc3RvcEFsbE11c2ljID0gZnVuY3Rpb24oKVxue1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcE11c2ljKHRoaXMuX2N1cnJlbnRNdXNpYyk7XG59XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5fcGF1c2UgPSBmdW5jdGlvbigpXG57XG4gICAgQ29tbW9uLmFuaW1hdG9yLl9wYXVzZWQgPSB0cnVlO1xuICAgIFR3ZWVuTWF4LnBhdXNlQWxsKCk7XG59XG5cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5fcmVzdW1lID0gZnVuY3Rpb24oKVxue1xuICAgIENvbW1vbi5hbmltYXRvci5fcGF1c2VkID0gZmFsc2U7XG4gICAgVHdlZW5NYXgucmVzdW1lQWxsKCk7XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsIi8qKlxuICogIENvbW1vblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAzMC8wNC8yMDE1LlxuICpcbiAqL1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gQ29tbW9uKCkge31cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uO1xuXG5cbi8qIC0tLS0tLUdFTkVSSUMtLS0tLS0gKi9cblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5TVEFHRV9XSURUSCA9IDE5MDAuMDtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5TVEFHRV9IRUlHSFQgPSA3NjguMDtcblxuLyoqXG4gKiBAdHlwZSB7UElYSS5Db250YWluZXJ9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5zdGFnZSA9IG51bGw7XG5cbi8qKlxuICogQHR5cGUge1BJWEkuQ2FudmFzUmVuZGVyZXJ8UElYSS5XZWJHTFJlbmRlcmVyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24ucmVuZGVyZXIgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtwMy5UaW1lc3RlcH1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnRpbWVzdGVwID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7cDMuQW5pbWF0b3J9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5hbmltYXRvciA9IG51bGw7XG5cbi8qKlxuICogQHR5cGUge1BJWEkuUG9pbnR9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi50b3VjaCA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMC4wKTtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24ucGF1c2VkID0gZmFsc2U7XG5cbi8qKlxuICogQHR5cGUge0Jvb2xlYW59XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5pc1dlYkdMID0gZmFsc2U7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBjb25zdFxuICovXG5Db21tb24uREVCVUdfUEFJTlRfTU9ERSA9IDA7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLmZyYW1lQ291bnQgPSAwO1xuXG4vKipcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAY29uc3RcbiAqL1xuQ29tbW9uLkZQUyA9IDYwO1xuXG4vKipcbiAqIEB0eXBlIHtTYXZlZERhdGF9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5zY2VuZU1hbmFnZXIgPSBudWxsO1xuXG5Db21tb24uYXVkaW9NYW5hZ2VyID0gbnVsbDtcblxuQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzID0ge307XG5cbkNvbW1vbi5jb2xvdXJzID0ge2JsYWNrOjB4MDAwMDAwLCBnYW1lQkc6MHgzZDNmNTF9O1xuXG5Db21tb24uc3F1YXJlVGlsZVNpemUgPSAzMjtcblxuQ29tbW9uLnJhaWxNYW5hZ2VyID0gbnVsbDtcblxuQ29tbW9uLmxldmVsRGF0YSA9IG51bGw7XG5cbkNvbW1vbi5zYXZlZERhdGEgPSBudWxsO1xuXG5cblxuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCIvKipcclxuICogIE1haW5cclxuICpcclxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDI3LzA0LzIwMTUuXHJcbiAqXHJcbiAqL1xyXG5cclxudmFyIEFwcGxpY2F0aW9uICAgICA9IHJlcXVpcmUoXCIuL0FwcGxpY2F0aW9uXCIpO1xyXG5cclxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcclxudmFyIFByZWxvYWRlciAgICAgICA9IHJlcXVpcmUoXCIuL3NjcmVlbnMvUHJlbG9hZGVyXCIpO1xyXG52YXIgU2NlbmVNYW5hZ2VyICAgID0gcmVxdWlyZShcIi4vbGliL1NjZW5lTWFuYWdlclwiKTtcclxudmFyIE5ld1RyYWNraW5nICAgICA9IHJlcXVpcmUoXCIuL3RyYWNraW5nL1RyYWNraW5nXCIpO1xyXG52YXIgTmV3QXVkaW9NYW5hZ2VyID0gcmVxdWlyZShcIi4vbWFuYWdlcnMvQXVkaW9NYW5hZ2VyXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFOdW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7IU51bWJlcn0gaGVpZ2h0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gTWFpbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHshTnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHshTnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge3AzLkFzc2V0TWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2Fzc2V0TWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7cDMuU2NyZWVuTWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1ByZWxvYWRlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3ByZWxvYWRlciA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7QXBwbGljYXRpb259XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9nYW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fcmVzb2x1dGlvbiA9IDEuMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9zY2FsZSA9IFwiaGQvXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fcmVuZGVyRlBTID0gMzAuMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9mcmFtZUNvdW50ID0gMDtcclxuXHJcbiAgICB0aGlzLl9zY3JlZW5JbmNvcnJlY3RSb3RhdGlvbiA9IGZhbHNlO1xyXG5cclxufVxyXG53aW5kb3cuTWFpbiA9IE1haW47XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqL1xyXG5NYWluLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgdGhpcy5fc2NyZWVuTWFuYWdlciA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuXHJcbiAgICBDb21tb24uQ09VTlRSWV9DT0RFID0gd2luZG93Lm9nLmxhbmd1YWdlO1xyXG5cclxuICAgIHZhciBlbGVtZW50SWQgPSBcIm9nLWdhbWUtaG9sZGVyXCI7XHJcbiAgICB2YXIgcGFyYW1zID0gbmV3IHAzLlZpZXdQYXJhbXMoKTtcclxuICAgIHBhcmFtcy53aWR0aCA9IHRoaXMuX3dpZHRoO1xyXG4gICAgcGFyYW1zLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcclxuICAgIHBhcmFtcy5ob2xkZXJJRCA9IGVsZW1lbnRJZDtcclxuICAgIC8vcGFyYW1zLnJvdGF0ZUltYWdlVXJsID0gXCJhc3NldHMvaW1hZ2VzL3N5c3RlbS9cIiArIENvbW1vbi5DT1VOVFJZX0NPREUgKyBcIi9yb3RhdGVfZGV2aWNlLmpwZ1wiO1xyXG4gICAgcGFyYW1zLnJvdGF0ZUltYWdlQ29sb3IgPSBcIiMwMDAwMDBcIjtcclxuXHJcbiAgICBQSVhJLlJFVElOQV9QUkVGSVggPSAvXFxfKD89W15fXSokKSguKyl4LztcclxuXHJcbiAgICBwMy5UcmFja2luZy5ERUJVRyA9IHRydWU7XHJcblxyXG4gICAgQ29tbW9uLnRyYWNraW5nID0gbmV3IHAzLlRyYWNraW5nKCk7XHJcbiAgICBDb21tb24udHJhY2tpbmcuaW5pdChuZXcgcDMuVHJhY2tpbmdNb2R1bGVQbGF5ZG9tKFwiXCIsIEFJQl9DT05GSUcubG9jYWxlLCBcImJkXCIsIFwiYmRcIiwgXCJcIikpO1xyXG4gICAgQ29tbW9uLnRyYWNraW5nLnRyYWNrKG5ldyBwMy5UcmFja2luZ0RhdGFQbGF5ZG9tRGV2aWNlSW5mbyhcImRldmljZV9pbmZvXCIsIFwiZGVza3RvcFwiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSk7XHJcblxyXG4gICAgcDMuRGV2aWNlLmluaXQod2luZG93W1wiYm93c2VyXCJdKTtcclxuXHJcbiAgICBUd2Vlbk1heC5kZWZhdWx0T3ZlcndyaXRlID0gXCJub25lXCI7XHJcbiAgICBUd2Vlbk1heC50aWNrZXIuZnBzKENvbW1vbi5GUFMpO1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBuZXcgcDMuVmlldyhwYXJhbXMpO1xyXG4gICAgY2FudmFzLnNpZ25hbHMucmVhZHkuYWRkT25jZShmdW5jdGlvbihjYW52YXMpIHtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBvcHRpb25zLnZpZXcgPSBjYW52YXM7XHJcbiAgICAgICAgb3B0aW9ucy50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnMuYW50aWFsaWFzID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXIgPSBmYWxzZTtcclxuICAgICAgICBvcHRpb25zLnJlc29sdXRpb24gPSB0aGlzLl9yZXNvbHV0aW9uO1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5zY2FsZUZhY3RvciA9IHRoaXMuX3Jlc29sdXRpb247XHJcblxyXG4gICAgICAgIHZhciBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIENvbW1vbi5zdGFnZSA9IHN0YWdlO1xyXG5cclxuICAgICAgICBpZihwMy5EZXZpY2UuaXNDb2Nvb25KUylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YWdlLnNjYWxlLnggPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyB0aGlzLl9oZWlnaHQ7XHJcbiAgICAgICAgICAgIHN0YWdlLnNjYWxlLnkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyB0aGlzLl9oZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBQSVhJLldlYkdMUmVuZGVyZXIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZW5kZXJlciA9IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb21tb24ucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fc2NyZWVuTWFuYWdlci5pbml0KHN0YWdlLCByZW5kZXJlcik7XHJcbiAgICAgICAgQ29tbW9uLnNjZW5lTWFuYWdlciA9IHRoaXMuX3NjcmVlbk1hbmFnZXI7XHJcblxyXG4gICAgICAgIENvbW1vbi5pc1dlYkdMID0gKHJlbmRlcmVyIGluc3RhbmNlb2YgUElYSS5XZWJHTFJlbmRlcmVyKTtcclxuICAgICAgICBDb21tb24uREVCVUdfUEFJTlRfTU9ERSA9IHAzLlV0aWxzLmdldFVSTFBhcmFtZXRlcihcInBhaW50XCIsIDApO1xyXG5cclxuICAgICAgICB2YXIgdGltZXN0ZXAgPSBuZXcgcDMuVGltZXN0ZXAocDMuVGltZXN0ZXAuRklYRUQpO1xyXG4gICAgICAgIHRpbWVzdGVwLmluaXQodGhpcy51cGRhdGUsIHRoaXMucmVuZGVyLCB0aGlzKTtcclxuICAgICAgICBDb21tb24udGltZXN0ZXAgPSB0aW1lc3RlcDtcclxuXHJcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yID0gbmV3IHAzLkFuaW1hdG9yKCk7XHJcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmluaXQoKTtcclxuXHJcbiAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlciA9IG5ldyBOZXdBdWRpb01hbmFnZXIoKTtcclxuICAgICAgICBwMy5CdXR0b24uYXVkaW8gPSBDb21tb24uYXVkaW9NYW5hZ2VyO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRQcmVsb2FkZXIoKTtcclxuXHJcbiAgICB9LCB0aGlzKTtcclxuICAgIGNhbnZhcy5zaWduYWxzLnJlc2l6ZS5hZGQodGhpcy5vbkNhbnZhc1Jlc2l6ZSwgdGhpcyk7XHJcblxyXG4gICAgLypcclxuICAgIHZhciBmb250ID0gbmV3IEZvbnQoKTtcclxuICAgIGZvbnQuZm9udEZhbWlseSA9IFwicGxhY2FyZF9tdGNvbmRlbnNlZF9ib2xkXCI7XHJcbiAgICBmb250LnNyYyA9IFwiYXNzZXRzL2ZvbnRzL3BsYWNhcmRtdC9wbGFjYXJkbXQtY29uZGVuc2VkYm9sZC13ZWJmb250LnR0ZlwiO1xyXG4gICAgZm9udC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9udCAxIGxvYWRlZCcpO1xyXG4gICAgfTtcclxuICAgIGZvbnQub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yX21lc3NhZ2UpIHtjb25zb2xlLmxvZyhlcnJvcl9tZXNzYWdlKX07XHJcblxyXG4gICAgdmFyIGZvbnQgPSBuZXcgRm9udCgpO1xyXG4gICAgZm9udC5mb250RmFtaWx5ID0gXCJtYW5kYWxpcmVndWxhclwiO1xyXG4gICAgZm9udC5zcmMgPSBcImFzc2V0cy9mb250cy9tYW5kYWxpL21hbmRhbGktcmVndWxhci13ZWJmb250LnR0ZlwiO1xyXG4gICAgZm9udC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9udCAyIGxvYWRlZCcpO1xyXG4gICAgfTtcclxuICAgIGZvbnQub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yX21lc3NhZ2UpIHtjb25zb2xlLmxvZyhlcnJvcl9tZXNzYWdlKX07XHJcbiAgICAqL1xyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5NYWluLnByb3RvdHlwZS5sb2FkUHJlbG9hZGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBzY2FsZSA9IHRoaXMuX3NjYWxlO1xyXG4gICAgdmFyIHByZWZpeCA9IChzY2FsZSA9PT0gXCJzZC9cIiA/IFwiXzAuNXhcIiA6IFwiXCIpO1xyXG4gICAgdmFyIGZpbGVzID0gW1xyXG4gICAgICAgIHtuYW1lOlwibG9hZGluZ19iZ1wiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibG9hZGluZ19iZ1wiICsgcHJlZml4ICsgXCIuanBnXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwibG9hZGluZ18wXCIsIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJsb2FkaW5nXzBcIiArIHByZWZpeCArIFwiLmpzb25cIn0sXHJcbiAgICAgICAgLy97bmFtZTpcInBsYWNhcmRtdFwiLCB1cmw6XCJmb250cy9wbGFjYXJkbXQvc3R5bGVzaGVldC5jc3NcIn0sXHJcbiAgICAgICAgLy97bmFtZTpcIm1hbmRhbGlcIiwgdXJsOlwiZm9udHMvbWFuZGFsaS9zdHlsZXNoZWV0LmNzc1wifVxyXG4gICAgICAgIC8ve25hbWU6XCJwcmVsb2FkZXJcIiwgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcInByZWxvYWRlclwiICsgcHJlZml4ICsgXCIuanNvblwifVxyXG4gICAgXTtcclxuICAgIHZhciBzb3VuZHMgPSBbXHJcbiAgICBdO1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5hZGRGaWxlcyhmaWxlcywgd2luZG93Lm9nLmdhbWVEaXIgKyBcImFzc2V0cy9cIik7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLnNpZ25hbENvbXBsZXRlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIubG9hZCgpO1xyXG5cclxuICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLmFkZFNvdW5kcyhzb3VuZHMsIFtcIi5tcDNcIiwgXCIub2dnXCJdLCBcIlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcbk1haW4ucHJvdG90eXBlLmxvYWRBc3NldHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgc2NhbGUgPSB0aGlzLl9zY2FsZTtcclxuICAgIHZhciBwcmVmaXggPSAoc2NhbGUgPT09IFwic2QvXCIgPyBcIl8wLjV4XCIgOiBcIlwiKTtcclxuICAgIHZhciBmaWxlcyA9IFtcclxuICAgICAgICB7bmFtZTpcImdhbWVfMFwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwiZ2FtZV8wXCIgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwidWlfMFwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwidWlfMFwiICsgcHJlZml4ICsgXCIuanNvblwifSxcclxuICAgICAgICB7bmFtZTpcIm1lbnVfMFwiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibWVudV8wXCIgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwibGV2ZWxzZWxlY3RfYmdcIiwgdXJsOlwiaW1hZ2VzL1wiICsgc2NhbGUgKyBcImxldmVsc2VsZWN0X2JnXCIgKyBwcmVmaXggKyBcIi5qcGdcIn0sXHJcbiAgICAgICAge25hbWU6XCJlbmRnYW1lX2JnXCIsIHVybDpcImltYWdlcy9cIiArIHNjYWxlICsgXCJlbmRnYW1lX2JnXCIgKyBwcmVmaXggKyBcIi5qcGdcIn0sXHJcbiAgICAgICAge25hbWU6XCJtYWlubWVudV9iZ1wiLCB1cmw6XCJpbWFnZXMvXCIgKyBzY2FsZSArIFwibWFpbm1lbnVfYmdcIiArIHByZWZpeCArIFwiLmpwZ1wifSxcclxuICAgICAgICBcclxuICAgICAgICB7bmFtZTpcImdhbWVfdGl0bGVcIiwgdXJsOlwiaW1hZ2VzL2xvY2FsaXplZC9nYW1lX3RpdGxlLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTpcImdhbWVfdGl0bGVfMVwiLCB1cmw6XCJpbWFnZXMvbG9jYWxpemVkL2dhbWVfdGl0bGVfMS5wbmdcIn0sXHJcbiAgICAgICAge25hbWU6XCJnYW1lX3RpdGxlXzJcIiwgdXJsOlwiaW1hZ2VzL2xvY2FsaXplZC9nYW1lX3RpdGxlXzIucG5nXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwiZ2FtZV90aXRsZV8zXCIsIHVybDpcImltYWdlcy9sb2NhbGl6ZWQvZ2FtZV90aXRsZV8zLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTpcImxhdW5kcnlfdGl0bGVcIiwgdXJsOlwiaW1hZ2VzL2xvY2FsaXplZC9sYXVuZHJ5X3RpdGxlLnBuZ1wifSxcclxuXHJcbiAgICAgICAgLyp7bmFtZTpcImFpcl9wYXJ0aWNsZVwiLCB1cmw6XCJwYXJ0aWNsZXMvYWlyLmpzb25cIn0sXHJcbiAgICAgICAge25hbWU6XCJhaXJfdmVudF9wYXJ0aWNsZVwiLCB1cmw6XCJwYXJ0aWNsZXMvcGFydGljbGVfYWlydmVudF92ZXJ0aWNhbC5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwiYnViYmxlc19wYXJ0aWNsZVwiLCB1cmw6XCJwYXJ0aWNsZXMvYnViYmxlcy5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwiY29sbGVjdGFibGVfcGFydGljbGVcIiwgdXJsOlwicGFydGljbGVzL2NvbGxlY3RhYmxlLmpzb25cIn0sXHJcbiAgICAgICAge25hbWU6XCJjb2luX2xvc3NfcGFydGljbGVcIiwgdXJsOlwicGFydGljbGVzL2NvaW5fbG9zcy5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwibWFnbmV0X3BhcnRpY2xlXCIsIHVybDpcInBhcnRpY2xlcy9tYWduZXQuanNvblwifSxcclxuICAgICAgICB7bmFtZTpcInN0YXJfcGFydGljbGVcIiwgdXJsOlwicGFydGljbGVzL3N0YXIuanNvblwifSxcclxuICAgICAgICB7bmFtZTpcInN0ZWFtX3BhcnRpY2xlXCIsIHVybDpcInBhcnRpY2xlcy9wYXJ0aWNsZV9zdGVhbS5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwic3RlYW1fcGFydGljbGVfb3Bwb3NpdGVcIiwgdXJsOlwicGFydGljbGVzL3BhcnRpY2xlX3N0ZWFtX29wcG9zaXRlLmpzb25cIn0sXHJcbiAgICAgICAge25hbWU6XCJzdGVhbV9tZW51XCIsIHVybDpcInBhcnRpY2xlcy9wYXJ0aWNsZV9lbWl0dGVyX21lbnVfc3RlYW1fMDAuanNvblwifSovXHJcbiAgICBdO1xyXG4gICAgdmFyIHNvdW5kcyA9IFtcclxuICAgICAgICBcIm11c2ljX2dhbWVsb29wXzAwXCIsXHJcbiAgICAgICAgXCJtdXNpY19nYW1lbG9vcF8wMVwiLFxyXG4gICAgICAgIFwibXVzaWNfZ2FtZW92ZXJfbG9zZV8wMFwiLFxyXG4gICAgICAgIFwibXVzaWNfZ2FtZW92ZXJfd2luXzAwXCIsXHJcbiAgICAgICAgXCJtdXNpY19sZXZlbF9jb21wbGV0ZV8wM1wiLFxyXG4gICAgICAgIFwibXVzaWNfbGV2ZWxzbG9vcF8wMFwiLFxyXG4gICAgICAgIFwibXVzaWNfbWFpbm1lbnVsb29wXzAwXCIsXHJcbiAgICAgICAgXCJtdXNpY19wYXVzZWxvb3BfMDBcIixcclxuICAgICAgICBcInNmeF9hbWJpZW5jZV9jaXR5XzAwXCIsXHJcbiAgICAgICAgXCJzZnhfYmFkX2d1eV9wb3B1cF8wMGJcIixcclxuICAgICAgICBcInNmeF9iYWRfZ3V5X3BvcHVwXzAxYlwiLFxyXG4gICAgICAgIFwic2Z4X2JhZF9ndXlfcG9wdXBfMDJiXCIsXHJcbiAgICAgICAgXCJzZnhfYnRuX3ByZXNzX2Jja18wMFwiLFxyXG4gICAgICAgIFwic2Z4X2J0bl9wcmVzc19md2RfMDBcIixcclxuICAgICAgICBcInNmeF9idG5fcHJlc3NfcGxheV8wMFwiLFxyXG4gICAgICAgIFwic2Z4X2NvbnZleW9yX2FsdF9sb29wMlwiLFxyXG4gICAgICAgIFwic2Z4X2NvbnZleW9yX2VuZFwiLFxyXG4gICAgICAgIFwic2Z4X2NvbnZleW9yX2xvb3A1XCIsXHJcbiAgICAgICAgXCJzZnhfY29udmV5b3JfbG9vcDZcIixcclxuICAgICAgICBcInNmeF9jb252ZXlvcl9zcGVlZHVwX3dhcm5pbmdcIixcclxuICAgICAgICBcInNmeF9jb252ZXlvcl9zdGFydFwiLFxyXG4gICAgICAgIFwic2Z4X2Ryb3Bfb2ZmX3JhaWxfMDBcIixcclxuICAgICAgICBcInNmeF9kcm9wX29mZl9yYWlsXzAxXCIsXHJcbiAgICAgICAgXCJzZnhfZHJvcF9vZmZfcmFpbF8wMlwiLFxyXG4gICAgICAgIFwic2Z4X2ZhbGxvZmZfcmFpbF8wMGNcIixcclxuICAgICAgICBcInNmeF9mYWxsb2ZmX3JhaWxfMDFjXCIsXHJcbiAgICAgICAgXCJzZnhfZmFsbG9mZl9yYWlsXzAyY1wiLFxyXG4gICAgICAgIFwic2Z4X2dvdF9jYXVnaHRfMDBcIixcclxuICAgICAgICBcInNmeF9oaXRfYWlyX2RyeWVyXzAxXCIsXHJcbiAgICAgICAgXCJzZnhfaGl0X2JydXNoZXNfMDFcIixcclxuICAgICAgICBcInNmeF9oaXRfc3RlYW1fd2FzaF8wMFwiLFxyXG4gICAgICAgIFwic2Z4X2p1bmN0aW9uX3ByZXNzXzA1XCIsXHJcbiAgICAgICAgXCJzZnhfbWFnbmV0X2xvb3BfMDBcIixcclxuICAgICAgICBcInNmeF9tYWduZXRfcGlja3VwXzAwXCIsXHJcbiAgICAgICAgXCJzZnhfc3RlYW1fcHJlc3Nfc3RhcnRfMDBcIixcclxuICAgICAgICBcInNmeF9zaGllbGRfbG9vcF8wMlwiLFxyXG4gICAgICAgIFwic2Z4X3NoaWVsZF9waWNrdXBcIixcclxuICAgICAgICBcInNmeF9zdGVhbV93aGlzdGxlX2VuZF8wMFwiLFxyXG4gICAgICAgIFwic2Z4X3N0ZWFtX3doaXN0bGVfc3RhcnRfMDBcIixcclxuICAgICAgICBcInNmeF90b2tlbl9jb2xsZWN0XzA0XCIsXHJcbiAgICAgICAgXCJzZnhfdG9rZW5fY291bnR1cF9lbmRfMDBcIixcclxuICAgICAgICBcInNmeF91aV9uZW9uX3JvbGxvdmVyXzAzXCJcclxuICAgIF07XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmFkZEZpbGVzKGZpbGVzLCB3aW5kb3cub2cuZ2FtZURpciArIFwiYXNzZXRzL1wiKTtcclxuICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuc2lnbmFsUHJvZ3Jlc3MuYWRkKHRoaXMub25Mb2FkaW5nUHJvZ3Jlc3MsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5zaWduYWxDb21wbGV0ZWQuYWRkT25jZSh0aGlzLm9uTG9hZGluZ0NvbXBsZXRlZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmxvYWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpO1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIuYWRkKHRoaXMuX3ByZWxvYWRlcik7XHJcblxyXG4gICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIuYWRkU291bmRzKHNvdW5kcywgW1wiLm1wM1wiLCBcIi5vZ2dcIl0sIHdpbmRvdy5vZy5nYW1lRGlyICsgXCJhc3NldHMvYXVkaW8vXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5NYWluLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIHRoaXMuX3ByZWxvYWRlci5sb2FkZWRQZXJjZW50YWdlID0gMTAwO1xyXG5cclxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhhdC5fZ2FtZSA9IG5ldyBBcHBsaWNhdGlvbigpO1xyXG4gICAgICAgIHRoYXQuX2dhbWUuaW5pdCgpO1xyXG4gICAgICAgIENvbW1vbi50cmFja2luZy50cmFjayhuZXcgcDMuVHJhY2tpbmdEYXRhUGxheWRvbUdhbWVBY3Rpb24oXCJcIiwgXCJnYW1lX2xvYWRcIikpO1xyXG4gICAgfSwgLjUsIHRoaXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5NYWluLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIHRoaXMuX3NjcmVlbk1hbmFnZXIudXBkYXRlKCk7XHJcbiAgICBDb21tb24uYW5pbWF0b3IudXBkYXRlKCk7XHJcblxyXG4gICAgaWYgKENvbW1vbi5ERUJVR19QQUlOVF9NT0RFID4gMCkge1xyXG4gICAgICAgIHRoaXMucGFpbnRCYWRJbWFnZShDb21tb24uc3RhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ZyYW1lQ291bnQrKztcclxuICAgIENvbW1vbi5mcmFtZUNvdW50ID0gdGhpcy5fZnJhbWVDb3VudDtcclxufTtcclxuXHJcbi8qKlxyXG4gKi9cclxuTWFpbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBpZih0aGlzLl9mcmFtZUNvdW50ICUgMiA9PSAwIHx8IHRoaXMuX3JlbmRlckZQUyA9PSA2MC4wKVxyXG4gICAgICAgIENvbW1vbi5yZW5kZXJlci5yZW5kZXIoQ29tbW9uLnN0YWdlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFQSVhJLkRpc3BsYXlPYmplY3R9IGRpc3BsYXlcclxuICogQHBhcmFtIHtOdW1iZXI9fSBjb2xvclxyXG4gKi9cclxuTWFpbi5wcm90b3R5cGUucGFpbnRCYWRJbWFnZSA9IGZ1bmN0aW9uKGRpc3BsYXksIGNvbG9yKVxyXG57XHJcbiAgICBjb2xvciA9IGNvbG9yIHx8IDB4QUEwMEZGO1xyXG5cclxuICAgIHZhciBjaGlsZDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7ICsrIGkpIHtcclxuICAgICAgICBjaGlsZCA9IGRpc3BsYXkuY2hpbGRyZW5baV07XHJcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUElYSS5TcHJpdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbW1vbi5ERUJVR19QQUlOVF9NT0RFID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50ZXh0dXJlLndpZHRoICUgMiAhPSAwIHx8IGNoaWxkLnRleHR1cmUuaGVpZ2h0ICUgMiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGludCA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC50aW50ID0gMHhGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKENvbW1vbi5ERUJVR19QQUlOVF9NT0RFID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5wb3NpdGlvbi54ICE9PSBwYXJzZUludChjaGlsZC5wb3NpdGlvbi54KSB8fCBjaGlsZC5wb3NpdGlvbi55ICE9PSBwYXJzZUludChjaGlsZC5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRpbnQgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGludCA9IDB4RkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFpbnRCYWRJbWFnZShjaGlsZCwgY29sb3IpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFJJVkFURSBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcbk1haW4ucHJvdG90eXBlLm9uTG9hZGluZ1Byb2dyZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHRoaXMuX3ByZWxvYWRlci5sb2FkZWRQZXJjZW50YWdlID0gZXZlbnQucHJvZ3Jlc3M7XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcbk1haW4ucHJvdG90eXBlLm9uTG9hZGluZ0NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy90aGlzLl9wcmVsb2FkZXIubG9hZGVkUGVyY2VudGFnZSA9IDEwMC4wO1xyXG4gICAgLy90aGlzLl9wcmVsb2FkZXIuYW5pbWF0ZU91dChudWxsLCB0aGlzKTtcclxuXHJcbiAgICAvL3RoaXMuX3ByZWxvYWRlciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5fYXNzZXRNYW5hZ2VyLnNpZ25hbFByb2dyZXNzLnJlbW92ZUFsbCgpO1xyXG4gICAgdGhpcy5fYXNzZXRNYW5hZ2VyLnNpZ25hbENvbXBsZXRlZC5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICBpZih0aGlzLl9wcmVsb2FkZXIuZm9udExvYWRlZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ByZWxvYWRlci5zaWduYWxzLmZvbnRMb2FkZWQuYWRkT25jZSh0aGlzLnN0YXJ0R2FtZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IUJvb2xlYW59IGNvcnJlY3RcclxuICovXHJcbk1haW4ucHJvdG90eXBlLm9uQ2FudmFzUmVzaXplID0gZnVuY3Rpb24oY29ycmVjdClcclxue1xyXG4gICAgaWYgKGNvcnJlY3QpIHtcclxuICAgICAgICBDb21tb24ucmVuZGVyZXIucmVzaXplKHAzLlZpZXcud2lkdGgsIHAzLlZpZXcuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NjcmVlbk1hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuTWFuYWdlci5yZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fc2NyZWVuSW5jb3JyZWN0Um90YXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL3RoaXMuX2dhbWUucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlbkluY29ycmVjdFJvdGF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLl9zY3JlZW5JbmNvcnJlY3RSb3RhdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5fZ2FtZS5wYXVzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JlZW5JbmNvcnJlY3RSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwiXHJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi9Db21tb25cIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gU2F2ZWREYXRhKClcclxue1xyXG4gICAgdmFyIGFzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuICAgIHRoaXMubGV2ZWxVbmxvY2tzID0gbnVsbDtcclxuICAgIHRoaXMuc3RhcnMgPSAwO1xyXG5cclxuICAgIHRoaXMuX2FsbFVubG9ja2VkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQGNvbnN0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuU0FWRV9OQU1FID0gXCJhZHZlbnR1cmVzX2luX2JhYnlzaXR0aW5nXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQGNvbnN0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuU0FWRV9WRVJTSU9OID0gXCIwLjAuOFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBjb25zdFxyXG4gICAgICovXHJcbiAgICB0aGlzLlNBVkVfU0VFRCA9IFwieDVrMEVvNlIxNzdtVWtiXCI7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBTYXZlZERhdGE7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuU2F2ZWREYXRhLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2VbdGhpcy5TQVZFX05BTUUgKyBcIl9cIiArIHRoaXMuU0FWRV9WRVJTSU9OXSB8fCB0aGlzLl9hbGxVbmxvY2tlZClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzZXQnKTtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWQnKTsgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuU2F2ZWREYXRhLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdGhpcy5sZXZlbFVubG9ja3MgPSBbXTtcclxuICAgIHRoaXMubGV2ZWxVbmxvY2tzWzFdID0ge3VubG9ja2VkOnRydWUsIGNvbXBsZXRlZDpmYWxzZSwgc3RhcnM6MH07XHJcbiAgICB0aGlzLmxldmVsVW5sb2Nrc1syXSA9IHt1bmxvY2tlZDpmYWxzZSwgY29tcGxldGVkOmZhbHNlLCBzdGFyczowfTtcclxuICAgIHRoaXMubGV2ZWxVbmxvY2tzWzNdID0ge3VubG9ja2VkOmZhbHNlLCBjb21wbGV0ZWQ6ZmFsc2UsIHN0YXJzOjB9O1xyXG4gICAgdGhpcy5sZXZlbFVubG9ja3NbNF0gPSB7dW5sb2NrZWQ6ZmFsc2UsIGNvbXBsZXRlZDpmYWxzZSwgc3RhcnM6MH07XHJcbiAgICB0aGlzLmxldmVsVW5sb2Nrc1s1XSA9IHt1bmxvY2tlZDpmYWxzZSwgY29tcGxldGVkOmZhbHNlLCBzdGFyczowfTtcclxuICAgIHRoaXMubGV2ZWxVbmxvY2tzWzZdID0ge3VubG9ja2VkOmZhbHNlLCBjb21wbGV0ZWQ6ZmFsc2UsIHN0YXJzOjB9O1xyXG4gICAgdGhpcy5sZXZlbFVubG9ja3NbN10gPSB7dW5sb2NrZWQ6ZmFsc2UsIGNvbXBsZXRlZDpmYWxzZSwgc3RhcnM6MH07XHJcbiAgICB0aGlzLmxldmVsVW5sb2Nrc1s4XSA9IHt1bmxvY2tlZDpmYWxzZSwgY29tcGxldGVkOmZhbHNlLCBzdGFyczowfTtcclxuICAgIHRoaXMubGV2ZWxVbmxvY2tzWzldID0ge3VubG9ja2VkOmZhbHNlLCBjb21wbGV0ZWQ6ZmFsc2UsIHN0YXJzOjB9O1xyXG5cclxuICAgIHRoaXMuc3RhcnMgPSAwO1xyXG5cclxuICAgIGlmKHRoaXMuX2FsbFVubG9ja2VkKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCB0aGlzLmxldmVsVW5sb2Nrcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVbmxvY2tzW2ldLnVubG9ja2VkID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIC8vdGhpcy5sZXZlbFVubG9ja3NbaV0uY29tcGxldGVkID0gdHJ1ZTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblNhdmVkRGF0YS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdmFyIGRhdGEgPSB3aW5kb3cubG9jYWxTdG9yYWdlW3RoaXMuU0FWRV9OQU1FICsgXCJfXCIgKyB0aGlzLlNBVkVfVkVSU0lPTl07XHJcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuXHJcbiAgICB0aGlzLmxldmVsVW5sb2NrcyA9IGRhdGEubGV2ZWxVbmxvY2tzO1xyXG4gICAgdGhpcy5zdGFycyA9IGRhdGEuc3RhcnM7XHJcbn07XHJcblxyXG5TYXZlZERhdGEucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcblxyXG4gICAgdGhpcy5fY2FsY3VsYXRlU3RhcnNBbmRVbmxvY2tzKCk7XHJcblxyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGEubGV2ZWxVbmxvY2tzID0gdGhpcy5sZXZlbFVubG9ja3M7XHJcbiAgICBkYXRhLnN0YXJzID0gdGhpcy5zdGFycztcclxuXHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgZGF0YS5oYXNoID0gbWQ1KGpzb24gKyB0aGlzLlNBVkVfU0VFRCk7XHJcblxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZVt0aGlzLlNBVkVfTkFNRSArIFwiX1wiICsgdGhpcy5TQVZFX1ZFUlNJT05dID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7ICAgIFxyXG59O1xyXG5cclxuU2F2ZWREYXRhLnByb3RvdHlwZS5oYXNDb21wbGV0ZWRBbGxMZXZlbHMgPSBmdW5jdGlvbigpXHJcbnsgICBcclxuICAgIHZhciBhbGxDb21wbGV0ZSA9IHRydWU7XHJcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgdGhpcy5sZXZlbFVubG9ja3MubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5sZXZlbFVubG9ja3NbaV0uY29tcGxldGVkICE9IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGxDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhbGxDb21wbGV0ZTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuU2F2ZWREYXRhLnByb3RvdHlwZS5fY2FsY3VsYXRlU3RhcnNBbmRVbmxvY2tzID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLnN0YXJzID0gMDtcclxuICAgIGZvcih2YXIgaSA9IDE7IGkgPCB0aGlzLmxldmVsVW5sb2Nrcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXJzICs9IHRoaXMubGV2ZWxVbmxvY2tzW2ldLnN0YXJzO1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuX2FsbFVubG9ja2VkKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCB0aGlzLmxldmVsVW5sb2Nrcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVbmxvY2tzW2ldLnVubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKENvbW1vbi5sZXZlbERhdGEubGV2ZWxzW2ldLnN0YXJzX3JlcXVpcmVkIDw9IHRoaXMuc3RhcnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gMSB8fCB0aGlzLmxldmVsVW5sb2Nrc1tNYXRoLm1heCgxLCBpLTEpXS5jb21wbGV0ZWQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVW5sb2Nrc1tpXS51bmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcblxyXG59XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iLCJcclxudmFyIENvbW1vbiAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgUmFpbCAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9nYW1lL1JhaWxcIik7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIExldmVsRGF0YSgpXHJcbntcclxuICAgIHRoaXMubGV2ZWxzUmF3ICAgICAgICAgID0gbnVsbDtcclxuICAgIHRoaXMudGlsZXNSYXcgICAgICAgICAgID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnRpbGVzICAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLmxldmVscyAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLmxldmVsVW5sb2NrcyAgICAgICA9IG51bGw7XHJcblxyXG4gICAgdGhpcy53b3JsZHMgICAgICAgICAgICAgPSBudWxsO1xyXG4gICAgdGhpcy5hY3RpdmVPYmplY3RzICAgICAgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gTGV2ZWxEYXRhO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkxldmVsRGF0YS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdGhpcy53b3JsZHMgPSB7J2Zsb29yJzpbJ2Zsb29yX3dhbGxzJywgJ3JhaWxfc2hhZG93c19nZW5lcmF0ZWQnXSwgJ2JhY2tncm91bmQnOlsnb2JqZWN0cyddLCAncmFpbHMnOlsncmFpbHMnLCAnaW50ZXJhY3RpdmVfb2JqZWN0cyddfTtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZU9iamVjdHMgPSB7XHJcbiAgICAgICAgc3Rhcl8yOiB7b2JqZWN0Oid0b2tlbicsIGFyZ3M6W10sIHVzZVRpbGU6ZmFsc2V9LFxyXG4gICAgICAgIG9ic3RhY2xlX3NwcmF5XzAwMToge29iamVjdDonb2JzdGFjbGUnLCBhcmdzOlsnc3ByYXknXSwgdXNlVGlsZTpmYWxzZX0sXHJcbiAgICAgICAgb2JzdGFjbGVfYnJ1c2hfMDAxOiB7b2JqZWN0OidvYnN0YWNsZScsIGFyZ3M6WydicnVzaCddLCB1c2VUaWxlOmZhbHNlfSxcclxuICAgICAgICBvYnN0YWNsZV9mYW5zXzAwMToge29iamVjdDonb2JzdGFjbGUnLCBhcmdzOlsnZmFucyddLCB1c2VUaWxlOmZhbHNlfSxcclxuICAgICAgICBjb2xsZWN0YWJsZV9tYWduZXRfaWNvbjoge29iamVjdDoncG93ZXJ1cCcsIGFyZ3M6WydtYWduZXQnXSwgdXNlVGlsZTpmYWxzZX0sXHJcbiAgICAgICAgY29sbGVjdGFibGVfc2hlaWxkX2ljb246IHtvYmplY3Q6J3Bvd2VydXAnLCBhcmdzOlsnc2hpZWxkJ10sIHVzZVRpbGU6ZmFsc2V9LFxyXG4gICAgICAgIGNoYXJhY3Rlcl9iYWRfMDAxX2xlZnQ6IHtvYmplY3Q6J2VuZW15JywgYXJnczpbJ2xlZnQnXSwgdXNlVGlsZTp0cnVlfSxcclxuICAgICAgICBjaGFyYWN0ZXJfYmFkXzAwMV9yaWdodDoge29iamVjdDonZW5lbXknLCBhcmdzOlsncmlnaHQnXSwgdXNlVGlsZTp0cnVlfSxcclxuICAgICAgICBjaGFyYWN0ZXJfYmFkXzAwMl9sZWZ0OiB7b2JqZWN0OidlbmVteScsIGFyZ3M6WydsZWZ0J10sIHVzZVRpbGU6dHJ1ZX0sXHJcbiAgICAgICAgY2hhcmFjdGVyX2JhZF8wMDJfcmlnaHQ6IHtvYmplY3Q6J2VuZW15JywgYXJnczpbJ3JpZ2h0J10sIHVzZVRpbGU6dHJ1ZX1cclxuICAgIH07XHJcblxyXG4gICAgZm9yKHZhciByIGluIENvbW1vbi5yYWlsTWFuYWdlci5yYWlsVHlwZXMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoQ29tbW9uLnJhaWxNYW5hZ2VyLnJhaWxUeXBlc1tyXS5sZW5ndGggPT0gMilcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVPYmplY3RzW3JdID0ge29iamVjdDoncmFpbCcsIGFyZ3M6Q29tbW9uLnJhaWxNYW5hZ2VyLnJhaWxUeXBlc1tyXSwgdXNlVGlsZTp0cnVlfTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT2JqZWN0c1tyXSA9IHtvYmplY3Q6J3JhaWxqdW5jdGlvbicsIGFyZ3M6Q29tbW9uLnJhaWxNYW5hZ2VyLnJhaWxUeXBlc1tyXSwgdXNlVGlsZTp0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxldmVsc1JhdyA9IHtcclxuXHJcbiAgICAgICAgXCIwXCI6e1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6e2NvbDozLCByb3c6MjAsIGRpcmVjdGlvbjpcImRvd25yaWdodFwifSxcclxuICAgICAgICAgICAgXCJlbmRcIjp7Y29sOjM4LCByb3c6NDR9LFxyXG4gICAgICAgICAgICBcInR1dG9yaWFsXCI6W1xyXG4gICAgICAgICAgICAgICAge2NvbDo0LCByb3c6MjMsIHRleHQ6J1RVVE9SSUFMX1JBSUxTJywgb2Zmc2V0Ont4OjMwMCwgeToxMDB9fSxcclxuICAgICAgICAgICAgICAgIHtjb2w6OCwgcm93OjMxLCB0ZXh0OidUVVRPUklBTF9FTkVNSUVTJywgb2Zmc2V0Ont4OjE3MCwgeToxNjB9fSxcclxuICAgICAgICAgICAgICAgIHtjb2w6Nywgcm93OjM0LCB0ZXh0OidUVVRPUklBTF9FTkVNSUVTJywgb2Zmc2V0Ont4OjM3MCwgeTo3MH19LFxyXG4gICAgICAgICAgICAgICAge2NvbDo4LCByb3c6NDYsIHRleHQ6J1RVVE9SSUFMX0NPSU5TJywgb2Zmc2V0Ont4OjAsIHk6MH19LFxyXG4gICAgICAgICAgICAgICAge2NvbDoxOSwgcm93OjI1LCB0ZXh0OidUVVRPUklBTF9NQUdORVQnLCBvZmZzZXQ6e3g6MzAwLCB5Oi0zMH19LFxyXG4gICAgICAgICAgICAgICAge2NvbDoxOSwgcm93OjIyLCB0ZXh0OidUVVRPUklBTF9NQUdORVQnLCBvZmZzZXQ6e3g6MzYwLCB5OjUwfX0sXHJcbiAgICAgICAgICAgICAgICB7Y29sOjI1LCByb3c6MzAsIHRleHQ6J1RVVE9SSUFMX09CU1RBQ0xFUycsIG9mZnNldDp7eDoyMDAsIHk6MjAwfX0sXHJcbiAgICAgICAgICAgICAgICB7Y29sOjI4LCByb3c6NDUsIHRleHQ6J1RVVE9SSUFMX1NISUVMRCcsIG9mZnNldDp7eDoxNDAsIHk6LTQwfX0sXHJcbiAgICAgICAgICAgICAgICB7Y29sOjI4LCByb3c6NDIsIHRleHQ6J1RVVE9SSUFMX1NISUVMRCcsIG9mZnNldDp7eDoyMDAsIHk6NTB9fSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJzcGVlZFwiOjIuNSxcclxuICAgICAgICAgICAgXCJzdGFyc19yZXF1aXJlZFwiOjAsXHJcbiAgICAgICAgICAgIFwibGF5ZXJzXCI6IEFJQl9sZXZlbDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBcIjFcIjp7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjp7Y29sOjcsIHJvdzoxNiwgZGlyZWN0aW9uOlwiZG93bmxlZnRcIn0sXHJcbiAgICAgICAgICAgIFwiZW5kXCI6e2NvbDozNCwgcm93OjYyfSxcclxuICAgICAgICAgICAgXCJzcGVlZFwiOjMsXHJcbiAgICAgICAgICAgIFwic3RhcnNfcmVxdWlyZWRcIjoxLFxyXG4gICAgICAgICAgICBcImxheWVyc1wiOiBBSUJfbGV2ZWwxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXCIyXCI6e1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6e2NvbDozLCByb3c6MjEsIGRpcmVjdGlvbjpcImRvd25yaWdodFwifSxcclxuICAgICAgICAgICAgXCJlbmRcIjp7Y29sOjUwLCByb3c6NTh9LFxyXG4gICAgICAgICAgICBcInNwZWVkXCI6My41LFxyXG4gICAgICAgICAgICBcInN0YXJzX3JlcXVpcmVkXCI6MixcclxuICAgICAgICAgICAgXCJsYXllcnNcIjogQUlCX2xldmVsMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIFwiM1wiOntcclxuICAgICAgICAgICAgXCJzdGFydFwiOntjb2w6Nywgcm93OjE3LCBkaXJlY3Rpb246XCJkb3dubGVmdFwifSxcclxuICAgICAgICAgICAgXCJlbmRcIjp7Y29sOjQ2LCByb3c6MTh9LFxyXG4gICAgICAgICAgICBcInNwZWVkXCI6NCxcclxuICAgICAgICAgICAgXCJzdGFyc19yZXF1aXJlZFwiOjQsXHJcbiAgICAgICAgICAgIFwibGF5ZXJzXCI6IEFJQl9sZXZlbDNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBcIjRcIjp7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjp7Y29sOjcsIHJvdzoxNiwgZGlyZWN0aW9uOlwiZG93bmxlZnRcIn0sXHJcbiAgICAgICAgICAgIFwiZW5kXCI6e2NvbDoyNCwgcm93OjgxfSxcclxuICAgICAgICAgICAgXCJzcGVlZFwiOjQuNSxcclxuICAgICAgICAgICAgXCJzdGFyc19yZXF1aXJlZFwiOjYsXHJcbiAgICAgICAgICAgIFwibGF5ZXJzXCI6IEFJQl9sZXZlbDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBcIjVcIjp7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjp7Y29sOjQsIHJvdzoxOSwgZGlyZWN0aW9uOlwiZG93bnJpZ2h0XCJ9LFxyXG4gICAgICAgICAgICBcImVuZFwiOntjb2w6NDYsIHJvdzo1OX0sXHJcbiAgICAgICAgICAgIFwic3BlZWRcIjo0LFxyXG4gICAgICAgICAgICBcInN0YXJzX3JlcXVpcmVkXCI6OCxcclxuICAgICAgICAgICAgXCJsYXllcnNcIjogQUlCX2xldmVsNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIFwiNlwiOntcclxuICAgICAgICAgICAgXCJzdGFydFwiOntjb2w6Niwgcm93OjE3LCBkaXJlY3Rpb246XCJkb3dubGVmdFwifSxcclxuICAgICAgICAgICAgXCJlbmRcIjp7Y29sOjY3LCByb3c6ODR9LFxyXG4gICAgICAgICAgICBcInNwZWVkXCI6NSxcclxuICAgICAgICAgICAgXCJzdGFyc19yZXF1aXJlZFwiOjEwLFxyXG4gICAgICAgICAgICBcImxheWVyc1wiOiBBSUJfbGV2ZWw2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXCI3XCI6e1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6e2NvbDo2LCByb3c6MTcsIGRpcmVjdGlvbjpcImRvd25sZWZ0XCJ9LFxyXG4gICAgICAgICAgICBcImVuZFwiOntjb2w6NTgsIHJvdzo3M30sXHJcbiAgICAgICAgICAgIFwic3BlZWRcIjo2LFxyXG4gICAgICAgICAgICBcInN0YXJzX3JlcXVpcmVkXCI6MTIsXHJcbiAgICAgICAgICAgIFwibGF5ZXJzXCI6IEFJQl9sZXZlbDdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBcIjhcIjp7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjp7Y29sOjYsIHJvdzoxNywgZGlyZWN0aW9uOlwiZG93bmxlZnRcIn0sXHJcbiAgICAgICAgICAgIFwiZW5kXCI6e2NvbDo2NSwgcm93Ojc3fSxcclxuICAgICAgICAgICAgXCJzcGVlZFwiOjcsXHJcbiAgICAgICAgICAgIFwic3RhcnNfcmVxdWlyZWRcIjoxNixcclxuICAgICAgICAgICAgXCJsYXllcnNcIjogQUlCX2xldmVsOFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy50aWxlc1JhdyA9IHtcclxuICAgICAgICAgXCJ0aWxlc2V0c1wiOltcclxuICAgICAgICB7XHJcbiAgICAgICAgIFwiY29sdW1uc1wiOjAsXHJcbiAgICAgICAgIFwiZmlyc3RnaWRcIjoxLFxyXG4gICAgICAgICBcIm1hcmdpblwiOjAsXHJcbiAgICAgICAgIFwibmFtZVwiOlwib2JqZWN0c1wiLFxyXG4gICAgICAgICBcInByb3BlcnRpZXNcIjpcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgXCJzcGFjaW5nXCI6MCxcclxuICAgICAgICAgXCJ0aWxlY291bnRcIjo4MixcclxuICAgICAgICAgXCJ0aWxlaGVpZ2h0XCI6MzUwLFxyXG4gICAgICAgICBcInRpbGVzXCI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfY2FnZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX2Zsb29yX21hcmtpbmdzXzAwNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTAwXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9sb2NrZXJzX2wucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEwMVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfbG9ja2Vyc19yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMDJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BhbGxldF8wMDEucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEwM1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcGFsbGV0XzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTA0XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9wYWxsZXRfMDAzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMDVcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BhbGxldF8wMDQucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEwNlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcGFsbGV0X3RydWNrXzAwMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTA3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9waWxsYXJfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMDhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpbGxhcl8wMDIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEwOVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcGlsbGFyXzAwMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX2Zsb29yX21hcmtpbmdzXzAwNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTEwXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9waWxsYXJfMDA0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMTFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpbGxhcl8wMDUucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjExMlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcmFja18wMDEucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjExM1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcmFja18wMDIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjExNFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcmFja18wMDMucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjExNVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcmFja18wMDQucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEyXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9tYXJraW5nc18wMDcucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEyN1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3dhbGt3YXlfY29ybmVyXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTI4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvd2Fsa3dheV9jb3JuZXJfMDAyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMjlcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X2xfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMzBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X2xfMDAyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMzFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X3JfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMzJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X3JfMDAyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMzNcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X3JfMDAzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMzRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X3N0YWlyc19sXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTM1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvd2Fsa3dheV9zdGFpcnNfbF8wMDIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEzNlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3dhbGt3YXlfc3RhaXJzX2xfMDAzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMzdcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X3N0YWlyc19yXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTM4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvd2Fsa3dheV9zdGFpcnNfcl8wMDIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEzOVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3dhbGt3YXlfc3RhaXJzX3JfMDAzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfbWFjaGluZV8wMDEucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjE0MFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3dhbGt3YXlfc3VwcG9ydF9sLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNDFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC93YWxrd2F5X3N1cHBvcnRfci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTQyXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvd2Fsa3dheV9sXzAwMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMThcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpcGVzXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTlcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpcGVzXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpcGVzXzAwMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpcGVzXzAwNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpcGVzXzAwNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjNcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3BpcGVzXzAwNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3JhaXNlZF9mbG9vci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjVcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3JhaXNlZF9yYWlscy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3JhaXNlZF9yYWlsc19lbmQucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjI3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9yYWlzZWRfcmFpbHNfc3RhcnQucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjI4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9yYWlzZWRfc3RlcHNfbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjlcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3JhaXNlZF9zdGVwc19yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzMFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcnViYmVyX21hdHNfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzMVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcnViYmVyX21hdHNfMDAyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzMlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcnViYmVyX21hdHNfMDAzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzM1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcnViYmVyX21hdHNfMDA0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzNFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcnViYmVyX21hdHNfMDA1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI0NFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FzaGluZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiNTFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhc2hpbmdfYmlnXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiNTJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhc2hpbmdfYmlnXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiNTdcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX2JhcnJlbHMucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjU4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9ib3hlcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiNTlcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX2Nsb3RoZXNfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI2XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9tYXJraW5nc18wMDEucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjYwXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9jbG90aGVzXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiNjJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX2Rlc2sucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjYzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9tYXJraW5nc18wMDAucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjY0XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9tYXJraW5nc18wMDgucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjY1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9tYXJraW5nc18wMDkucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjY3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9tYWNoaW5lXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiN1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfZmxvb3JfbWFya2luZ3NfMDAyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI3MlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcGFsbGV0X2phY2sucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjczXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9wYWxsZXRfdHJ1Y2tfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI3NFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfcGFsbGV0X3RydWNrXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiNzlcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3NoZWx2ZXNfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9tYXJraW5nc18wMDMucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjgwXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9zaGVsdmVzXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiODFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3NoZWx2ZXNfMDAzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI4MlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfc2hlbHZlc18wMDQucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjgzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV90YWJsZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiOVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfZmxvb3JfbWFya2luZ3NfMDA0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI5NlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfY2xvdGhlc19iaW5fMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI5N1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfY2xvdGhlc19iaW5fMDAyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI5OFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfY2xvdGhlc19iaW5fMDAzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI5OVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfY2xvdGhlc19iaW5fMDA0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIFwidGlsZXdpZHRoXCI6MTI4XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICBcImNvbHVtbnNcIjowLFxyXG4gICAgICAgICBcImZpcnN0Z2lkXCI6MTQ0LFxyXG4gICAgICAgICBcIm1hcmdpblwiOjAsXHJcbiAgICAgICAgIFwibmFtZVwiOlwicmFpbHNcIixcclxuICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6XHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIFwic3BhY2luZ1wiOjAsXHJcbiAgICAgICAgIFwidGlsZWNvdW50XCI6MTE2LFxyXG4gICAgICAgICBcInRpbGVoZWlnaHRcIjozMDAsXHJcbiAgICAgICAgIFwidGlsZXNcIjpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgXCIxMzZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTM3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDFfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMzhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTM5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDJfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNDBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTQxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDNfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNDJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTQzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDRfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNDRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTQ1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDVfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNDZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTQ3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDZfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNDhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwNy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTQ5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDdfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNTBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTUxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDhfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNTJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAwOS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTUzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMDlfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNTRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxMC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTU1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTBfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNTZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTU3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTFfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNThcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTU5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTJfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNjBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTYxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTNfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNjJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTYzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTRfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNjRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTY1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTVfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNjZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTY3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTZfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNjhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxNy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTY5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTdfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNzBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTcxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMThfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNzJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAxOS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTczXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMTlfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNzRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyMC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTc1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjBfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNzZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTc3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjFfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNzhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTc5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjJfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxODBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTgxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjNfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxODJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTgzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjRfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxODRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTg1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjVfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxODZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTg3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjZfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxODhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyNy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTg5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjdfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxOTBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTkxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjhfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxOTJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAyOS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTkzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMjlfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxOTRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzMC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTk1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzBfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxOTZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTk3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzFfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxOThcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTk5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzJfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMDBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjAxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzNfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMDJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjAzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzRfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMDRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjA1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzVfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMDZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjA3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzZfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMDhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzNy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjA5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzdfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMTBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjExXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzhfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMTJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzAzOS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjEzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wMzlfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMTRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsXzA0MC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjE1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF8wNDBfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMTZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjE3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDFfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMThcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjE5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDJfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMjBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjIxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDNfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMjJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjIzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDRfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMjRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjI1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDVfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMjZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjI3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDZfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMjhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwNy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjI5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDdfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMzBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjMxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDhfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMzJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAwOS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjMzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMDlfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMzRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxMC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjM1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTBfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMzZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjM3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTFfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMzhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjM5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTJfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyNDBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjQxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTNfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyNDJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjQzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTRfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyNDRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjQ1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTVfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyNDZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjQ3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTZfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyNDhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxNy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjQ5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMTdfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyNTBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9yYWlsX2p1bmN0aW9uXzAxOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjUxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvcmFpbF9qdW5jdGlvbl8wMThfc2hhZG93LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIFwidGlsZXdpZHRoXCI6MTI4XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICBcImNvbHVtbnNcIjowLFxyXG4gICAgICAgICBcImZpcnN0Z2lkXCI6Mzk2LFxyXG4gICAgICAgICBcIm1hcmdpblwiOjAsXHJcbiAgICAgICAgIFwibmFtZVwiOlwiZmxvb3Jfd2FsbHNcIixcclxuICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6XHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIFwic3BhY2luZ1wiOjAsXHJcbiAgICAgICAgIFwidGlsZWNvdW50XCI6MjksXHJcbiAgICAgICAgIFwidGlsZWhlaWdodFwiOjM1MCxcclxuICAgICAgICAgXCJ0aWxlc1wiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICBcIjBcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX2Zsb29yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxMFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9sX2dhdGVfMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTFcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfbF9nYXRlXzIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEyXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX2xfZ2F0ZV8zLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxM1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9sX3BpbGxhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfbF9waWxsYXJfdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIxNVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9sX3RvcC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfbF93aW5kb3dfMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTdcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfbF93aW5kb3dfMV90b3AucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjE4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX2xfd2luZG93XzIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjE5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX2xfd2luZG93XzJfdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl93b29kLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyMVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9yX2Nvcm5lci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfcl9kb29yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyM1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9yX3BpbGxhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjRcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfcl9waWxsYXJfdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIyNVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9yX3RvcC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfcl93aW5kb3dfMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMjdcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfcl93aW5kb3dfMV90b3AucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjI4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX3Jfd2luZG93XzIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjI5XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX3Jfd2luZG93XzJfdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9kaXJ0eV8wMDAucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjMwXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX3Jfd2luZG93XzMucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjMxXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX2xfY29ybmVyX3BpbGxhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMzJcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfbF9waWxsYXJlbmRfdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzM1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9sX3dpbmRvd18zLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzNFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9sX3dpbmRvd18zX3RvcC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMzVcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfcl9jb3JuZXJfcGlsbGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzNlwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9yX3BpbGxhcl9lbmRfdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCIzN1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfd2FsbF9yX3dpbmRvd18zX3RvcC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL3RpbGVfZmxvb3JfZGlydHlfMDAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI1XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV9mbG9vcl9kaXJ0eV8wMDIucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfY29ybmVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI3XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX2Nvcm5lcl90b3AtLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI4XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiLi5cXC90ZXh0dXJlc1xcL3RpbGVzXFwvdGlsZV93YWxsX2wucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjlcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC90aWxlX3dhbGxfbF9jb3JuZXIucG5nXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgXCJ0aWxld2lkdGhcIjoxMjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgXCJjb2x1bW5zXCI6MCxcclxuICAgICAgICAgXCJmaXJzdGdpZFwiOjQzNCxcclxuICAgICAgICAgXCJtYXJnaW5cIjowLFxyXG4gICAgICAgICBcIm5hbWVcIjpcImludGVyYWN0aXZlX29iamVjdHNcIixcclxuICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6XHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIFwic3BhY2luZ1wiOjAsXHJcbiAgICAgICAgIFwidGlsZWNvdW50XCI6NixcclxuICAgICAgICAgXCJ0aWxlaGVpZ2h0XCI6MzAwLFxyXG4gICAgICAgICBcInRpbGVzXCI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCIxMFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcImNvbGxlY3RpYmxlX2ltYWdlc1xcL2NoYXJhY3Rlcl9iYWRfMDAxX2xlZnQucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjExXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiY29sbGVjdGlibGVfaW1hZ2VzXFwvY2hhcmFjdGVyX2JhZF8wMDFfcmlnaHQucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjEyXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiY29sbGVjdGlibGVfaW1hZ2VzXFwvY2hhcmFjdGVyX2JhZF8wMDJfbGVmdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiMTNcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCJjb2xsZWN0aWJsZV9pbWFnZXNcXC9jaGFyYWN0ZXJfYmFkXzAwMl9yaWdodC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcImNvbGxlY3RpYmxlX2ltYWdlc1xcL2NvbGxlY3RhYmxlX21hZ25ldF9pY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOlwiY29sbGVjdGlibGVfaW1hZ2VzXFwvY29sbGVjdGFibGVfc2hlaWxkX2ljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjZcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9vYnN0YWNsZV9icnVzaF8wMDEucG5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICBcIjdcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBcImltYWdlXCI6XCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9vYnN0YWNsZV9mYW5zXzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiOFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcIi4uXFwvdGV4dHVyZXNcXC90aWxlc1xcL29ic3RhY2xlX3NwcmF5XzAwMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIFwiOVwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjpcImNvbGxlY3RpYmxlX2ltYWdlc1xcL3N0YXJfMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICBcInRpbGV3aWR0aFwiOjEyOFxyXG4gICAgICAgIH1dXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGlsZXMgPSBbXTtcclxuICAgIHZhciBzdGFydCA9IDE7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50aWxlc1Jhdy50aWxlc2V0cy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICB2YXIgdHMgPSB0aGlzLnRpbGVzUmF3LnRpbGVzZXRzW2ldO1xyXG5cclxuICAgICAgICBmb3IodmFyIGogaW4gdHMudGlsZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVzW051bWJlcihqKSArIHN0YXJ0XSA9IHRzLnRpbGVzW2pdLmltYWdlLnJlcGxhY2UoXCIuLlxcL3RleHR1cmVzXFwvdGlsZXNcXC9cIiwgXCJcIikucmVwbGFjZShcImNvbGxlY3RpYmxlX2ltYWdlc1xcL1wiLCBcIlwiKS5yZXBsYWNlKFwiLnBuZ1wiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0ID0gdGhpcy50aWxlcy5sZW5ndGg7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJlcGFyZURhdGEoKTtcclxufTtcclxuXHJcbkxldmVsRGF0YS5wcm90b3R5cGUucHJlcGFyZURhdGEgPSBmdW5jdGlvbigpXHJcbnsgICBcclxuICAgIHRoaXMubGV2ZWxzID0gW107XHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMubGV2ZWxzUmF3KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBsZXZlbCA9IHtsYXllcnM6e30sIHN0YXJ0OnRoaXMubGV2ZWxzUmF3W2ldLnN0YXJ0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6dGhpcy5sZXZlbHNSYXdbaV0uZW5kLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDp0aGlzLmxldmVsc1Jhd1tpXS5zcGVlZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnNfcmVxdWlyZWQ6dGhpcy5sZXZlbHNSYXdbaV0uc3RhcnNfcmVxdWlyZWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX3Rva2VuczowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1dG9yaWFsOnRoaXMubGV2ZWxzUmF3W2ldLnR1dG9yaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5sZXZlbHNSYXdbaV0ubGF5ZXJzLmxlbmd0aDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sZXZlbHNSYXdbaV0ubGF5ZXJzW2pdO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gezA6e319O1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gMDtcclxuICAgICAgICAgICAgdmFyIGNvbCA9IDA7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayA9IDA7IGsgPCBsYXllci5kYXRhLmxlbmd0aDsgaysrKVxyXG4gICAgICAgICAgICB7ICBcclxuICAgICAgICAgICAgICAgIGlmKGxheWVyLmRhdGFba10gPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGFycltyb3ddW2NvbF0gPSBsYXllci5kYXRhW2tdO1xyXG4gICAgICAgICAgICAgICAgY29sKys7XHJcbiAgICAgICAgICAgICAgICBpZihjb2wgPiBsYXllci53aWR0aC0xKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGFycltyb3ddID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGlsZXNbbGF5ZXIuZGF0YVtrXV0gPT0gJ3N0YXJfMicpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwudG90YWxfdG9rZW5zKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV2ZWwubGF5ZXJzW2xheWVyLm5hbWVdID0gYXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIHRoaXMubGV2ZWxzW2NvdW50XSA9IGxldmVsO1xyXG5cclxuICAgICAgICAvL0NyZWF0ZSBSYWlsIHNoYWRvd3NcclxuXHJcbiAgICAgICAgdmFyIHJhaWxTaGFkb3dMYXllciA9IHt9O1xyXG4gICAgICAgIHZhciByYWlsTGF5ZXIgPSBsZXZlbC5sYXllcnNbJ3JhaWxzJ107XHJcblxyXG4gICAgICAgIGZvcih2YXIgaiBpbiByYWlsTGF5ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0ge307XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiByYWlsTGF5ZXJbal0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy50aWxlc1tyYWlsTGF5ZXJbal1ba11dO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBsIGluIHRoaXMudGlsZXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50aWxlc1tsXSA9PSByICsgJ19zaGFkb3cnKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gTnVtYmVyKGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByYWlsU2hhZG93TGF5ZXJbal0gPSBvYmo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldmVsLmxheWVyc1sncmFpbF9zaGFkb3dzX2dlbmVyYXRlZCddID0gcmFpbFNoYWRvd0xheWVyO1xyXG5cclxuICAgICAgICAvL0NyZWF0ZSBUZXN0IHRva2Vuc1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIHRlc3RUb2tlbkxheWVyID0ge307XHJcbiAgICAgICAgdmFyIHJhaWxMYXllciA9IGxldmVsLmxheWVyc1sncmFpbHMnXTtcclxuICAgICAgICB2YXIgdGVzdFRva2VuR3JhcGhpYyA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRlc3RPYnN0YWNsZVNwcmF5R3JhcGhpYyA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRlc3RPYnN0YWNsZUJydXNoR3JhcGhpYyA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRlc3RDb2xsZWN0aWJsZU1hZ25ldEdyYXBoaWMgPSBudWxsO1xyXG4gICAgICAgIHZhciB0ZXN0Q29sbGVjdGlibGVTaGllbGRHcmFwaGljID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpbGVzLnB1c2goJ29ic3RhY2xlX3NwcmF5XzAwMScpO1xyXG4gICAgICAgIHRoaXMudGlsZXMucHVzaCgnb2JzdGFjbGVfYnJ1c2hfMDAxJyk7XHJcbiAgICAgICAgdGhpcy50aWxlcy5wdXNoKCdvYnN0YWNsZV9mYW5zXzAwMScpO1xyXG4gICAgICAgIHRoaXMudGlsZXMucHVzaCgnY29sbGVjdGFibGVfbWFnbmV0X2ljb24nKTtcclxuICAgICAgICB0aGlzLnRpbGVzLnB1c2goJ2NvbGxlY3RhYmxlX3NoZWlsZF9pY29uJyk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgbCBpbiB0aGlzLnRpbGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy50aWxlc1tsXSA9PSAncmFpbF9qdW5jdGlvbl8wMTcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VG9rZW5HcmFwaGljID0gTnVtYmVyKGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy50aWxlc1tsXSA9PSAnb2JzdGFjbGVfc3ByYXlfMDAxJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdE9ic3RhY2xlU3ByYXlHcmFwaGljID0gTnVtYmVyKGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy50aWxlc1tsXSA9PSAnb2JzdGFjbGVfYnJ1c2hfMDAxJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdE9ic3RhY2xlQnJ1c2hHcmFwaGljID0gTnVtYmVyKGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy50aWxlc1tsXSA9PSAnb2JzdGFjbGVfZmFuc18wMDEnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0T2JzdGFjbGVGYW5zR3JhcGhpYyA9IE51bWJlcihsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMudGlsZXNbbF0gPT0gJ29ic3RhY2xlX2ZhbnNfMDAxJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdE9ic3RhY2xlRmFuc0dyYXBoaWMgPSBOdW1iZXIobCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnRpbGVzW2xdID09ICdjb2xsZWN0YWJsZV9tYWduZXRfaWNvbicpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RDb2xsZWN0aWJsZU1hZ25ldEdyYXBoaWMgPSBOdW1iZXIobCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnRpbGVzW2xdID09ICdjb2xsZWN0YWJsZV9zaGVpbGRfaWNvbicpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RDb2xsZWN0aWJsZVNoaWVsZEdyYXBoaWMgPSBOdW1iZXIobCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaiBpbiByYWlsTGF5ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0ge307XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiByYWlsTGF5ZXJbal0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy50aWxlc1tyYWlsTGF5ZXJbal1ba11dO1xyXG4gICAgICAgICAgICAgICAgaWYociA9PSAncmFpbF8wMDUnICYmIE1hdGgucmFuZG9tKCkgPiAwLjY2KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyYW5kIDwgMC4zMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gdGVzdE9ic3RhY2xlU3ByYXlHcmFwaGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocmFuZCA8IDAuNjYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHRlc3RPYnN0YWNsZUZhbnNHcmFwaGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gdGVzdE9ic3RhY2xlQnJ1c2hHcmFwaGljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihNYXRoLnJhbmRvbSgpIDwgMC4xKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCAwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHRlc3RDb2xsZWN0aWJsZVNoaWVsZEdyYXBoaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpba10gPSB0ZXN0Q29sbGVjdGlibGVNYWduZXRHcmFwaGljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHRlc3RUb2tlbkdyYXBoaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwudG90YWxfdG9rZW5zKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVzdFRva2VuTGF5ZXJbal0gPSBvYmo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldmVsLmxheWVyc1sndGVzdF90b2tlbnMnXSA9IHRlc3RUb2tlbkxheWVyOyovXHJcblxyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmxldmVscyk7XHJcbn1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEFjdGl2ZU9iamVjdCh0aWxlKVxyXG57XHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyXHRcdD0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuXHR0aGlzLnR5cGVcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLnRpbGVcdFx0XHRcdD0gdGlsZTtcclxuXHJcblx0dGhpcy5yb3dcdFx0XHQgXHQ9IHRpbGUucm93O1xyXG5cdHRoaXMuY29sXHRcdFx0IFx0PSB0aWxlLmNvbDtcclxuXHJcblx0dGhpcy54XHRcdFx0XHQgXHQ9IG51bGw7XHJcblx0dGhpcy55XHRcdFx0XHQgXHQ9IG51bGw7XHJcblxyXG5cdHRoaXMuc2lnbmFsc1x0XHQgXHQ9IHt9O1xyXG5cdHRoaXMuc2lnbmFscy5jbGVhcmVkIFx0PSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHR0aGlzLnNpZ25hbHMuY29sbGlkZVx0PSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGl2ZU9iamVjdDtcclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkFjdGl2ZU9iamVjdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMudGlsZS5zaWduYWxzLmNsZWFyZWQuYWRkT25jZSh0aGlzLm9uVGlsZUNsZWFyZWQsIHRoaXMpO1xyXG59O1xyXG5cclxuQWN0aXZlT2JqZWN0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHRcclxufVxyXG5cclxuQWN0aXZlT2JqZWN0LnByb3RvdHlwZS5jb2xsaWRlID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59O1xyXG5cclxuQWN0aXZlT2JqZWN0LnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cclxufTtcclxuXHJcbkFjdGl2ZU9iamVjdC5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKVxyXG57XHJcblx0XHJcbn07XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQWN0aXZlT2JqZWN0LnByb3RvdHlwZS5fZ2VuZXJhdGVBbmltYXRpb25TZXF1ZW5jZSA9IGZ1bmN0aW9uKGFuaW1hdGlvbiwgZnJhbWVMaW1pdCwgc3RhcnRGcmFtZSlcclxue1xyXG4gICAgdmFyIHRleHR1cmVBcnIgPSBbXTtcclxuICAgIGZvcih2YXIgaSA9IHN0YXJ0RnJhbWU7IGkgPD0gZnJhbWVMaW1pdDsgaSsrKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIHZhciBwcmVjZWRlID0gaSA8IDEwID8gXCIwMFwiIDogXCIwXCI7XHJcbiAgICAgICAgdGV4dHVyZUFyci5wdXNoKGFuaW1hdGlvbiArIHByZWNlZGUgKyBpKTtcclxuICAgIH1cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0ZXh0dXJlQXJyLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHRleHR1cmVBcnJbaV0gPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSh0ZXh0dXJlQXJyW2ldKTtcclxuICAgIH1cclxuICAgIHZhciBzZXF1ZW5jZSA9IG5ldyBwMy5Nb3ZpZUNsaXBTZXF1ZW5jZSgpO1xyXG4gICAgc2VxdWVuY2UuYWRkVGV4dHVyZXModGV4dHVyZUFycik7XHJcblxyXG4gICAgcmV0dXJuIHNlcXVlbmNlO1xyXG59XHJcblxyXG5BY3RpdmVPYmplY3QucHJvdG90eXBlLmdldExheWVyaW5nWSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLnk7XHJcbn07XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuQWN0aXZlT2JqZWN0LnByb3RvdHlwZS5vblRpbGVDbGVhcmVkID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5zaWduYWxzLmNsZWFyZWQuZGlzcGF0Y2godGhpcyk7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBUaWxlICAgICAgICAgICBcdD0gcmVxdWlyZShcIi4vVGlsZVwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBMYXllcigpXHJcbntcclxuXHR0aGlzLnNpZ25hbHMgXHRcdFx0XHRcdD0ge307XHJcblxyXG5cdHRoaXMuc2lnbmFscy5hY3RpdmVPYmplY3RGb3VuZFx0PSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHJcblx0dGhpcy5yb3cgXHRcdFx0XHRcdFx0PSBudWxsO1xyXG5cdHRoaXMueVBvc2l0aW9uXHRcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLl90aWxlc1x0XHRcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLl9mcmVlVGlsZXNcdFx0XHRcdFx0PSBudWxsO1xyXG4gICAgXHJcbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gTGF5ZXI7XHJcbkxheWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuTGF5ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGF5ZXI7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkxheWVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLl90aWxlcyA9IFtdO1xyXG4gICAgdGhpcy5fZnJlZVRpbGVzID0gW107XHJcbn07XHJcblxyXG5MYXllci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIHdoaWxlKHRoaXMuX3RpbGVzLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICBcdHRoaXMuX3RpbGVzWzBdLmNsZWFyKCk7XHJcbiAgICBcdHRoaXMuX3RpbGVzWzBdLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICBcdGlmKHRoaXMuX3RpbGVzWzBdLnBhcmVudClcclxuICAgIFx0XHR0aGlzLnJlbW92ZUNoaWxkKHRoaXMuX3RpbGVzWzBdKTtcclxuICAgIFx0dGhpcy5fZnJlZVRpbGVzLnB1c2godGhpcy5fdGlsZXNbMF0pO1xyXG4gICAgXHR0aGlzLl90aWxlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkxheWVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24oeCwgeSwgdGlsZUltYWdlcywgdGlsZVdpZHRoKVxyXG57XHJcblx0dmFyIGN1cnJlbnRYID0geDtcclxuXHR0aGlzLnlQb3NpdGlvbiA9IHk7XHJcblxyXG5cdC8vZm9yKHZhciBpID0gMDsgaSA8IE1hdGguY2VpbChDb21tb24uU1RBR0VfV0lEVEggLyB0aWxlV2lkdGgpOyBpKyspXHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRpbGVJbWFnZXMubGVuZ3RoOyBpKyspXHJcblx0e1xyXG5cdFx0aWYodGlsZUltYWdlc1tpXSAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IodmFyIHQgPSAwOyB0IDwgdGlsZUltYWdlc1tpXS5sZW5ndGg7IHQrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciB0aWxlID0gdGhpcy5fZ2V0VGlsZSh0aWxlSW1hZ2VzW2ldW3RdLmltYWdlKTtcclxuXHRcdFx0XHR0aWxlLnggPSBjdXJyZW50WDtcclxuXHRcdFx0XHR0aWxlLnkgPSB5O1xyXG5cdFx0XHRcdHRpbGUubGV2ZWxEYXRhTGF5ZXIgPSB0aWxlSW1hZ2VzW2ldW3RdLmxheWVyO1xyXG5cdFx0XHRcdHRoaXMuX3RpbGVzLnB1c2godGlsZSk7XHJcblxyXG5cdFx0XHRcdHRpbGUucm93ID0gdGhpcy5yb3c7XHJcblx0XHRcdFx0dGlsZS5jb2wgPSBpO1xyXG5cclxuXHRcdFx0XHRpZihDb21tb24ubGV2ZWxEYXRhLmFjdGl2ZU9iamVjdHNbdGlsZUltYWdlc1tpXVt0XS5pbWFnZV0gIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuc2lnbmFscy5hY3RpdmVPYmplY3RGb3VuZC5kaXNwYXRjaCh0aWxlLCB0aWxlSW1hZ2VzW2ldW3RdLmltYWdlKTtcclxuXHJcblx0XHRcdFx0XHRpZihDb21tb24ubGV2ZWxEYXRhLmFjdGl2ZU9iamVjdHNbdGlsZUltYWdlc1tpXVt0XS5pbWFnZV0udXNlVGlsZSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRDaGlsZCh0aWxlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkQ2hpbGQodGlsZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjdXJyZW50WCArPSB0aWxlV2lkdGg7XHJcblx0fVxyXG59XHJcblxyXG5MYXllci5wcm90b3R5cGUuZ2V0VGlsZXNCeVggPSBmdW5jdGlvbih4KVxyXG57XHJcblx0dmFyIHRpbGVzID0gW107XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3RpbGVzLmxlbmd0aDsgaSsrKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMuX3RpbGVzW2ldLnggPD0geCAmJiB0aGlzLl90aWxlc1tpXS54ICsgKENvbW1vbi5zcXVhcmVUaWxlU2l6ZSAqIDQpID4geClcclxuXHRcdHtcclxuXHRcdFx0dGlsZXMucHVzaCh0aGlzLl90aWxlc1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0aWxlcztcclxufVxyXG5cclxuTGF5ZXIucHJvdG90eXBlLmdldFRpbGVzQnlDb2wgPSBmdW5jdGlvbihjb2wpXHJcbntcclxuXHR2YXIgdGlsZXMgPSBbXTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fdGlsZXMubGVuZ3RoOyBpKyspXHJcblx0e1xyXG5cdFx0aWYodGhpcy5fdGlsZXNbaV0uY29sID09IGNvbClcclxuXHRcdHtcclxuXHRcdFx0dGlsZXMucHVzaCh0aGlzLl90aWxlc1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGlsZXM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbkxheWVyLnByb3RvdHlwZS5fZ2V0VGlsZSA9IGZ1bmN0aW9uKHRleHR1cmUpXHJcbntcclxuXHRpZih0aGlzLl9mcmVlVGlsZXMubGVuZ3RoID4gMClcclxuXHR7XHJcblx0XHR2YXIgdGlsZSA9IHRoaXMuX2ZyZWVUaWxlc1swXTtcclxuXHRcdHRpbGUuY2hhbmdlVGV4dHVyZSh0ZXh0dXJlKTtcclxuXHRcdHRoaXMuX2ZyZWVUaWxlcy5zcGxpY2UoMCwgMSk7XHJcblx0XHRyZXR1cm4gdGlsZTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHZhciB0aWxlID0gbmV3IFRpbGUodGV4dHVyZSk7XHJcblx0XHRyZXR1cm4gdGlsZTtcclxuXHJcblx0fVxyXG59XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsIlxyXG52YXIgQ29tbW9uICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIE1hcFJlYWRlcihsZXZlbCkge1xyXG4gICAgXHJcbiAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gTWFwUmVhZGVyO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbk1hcFJlYWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cclxufVxyXG5cclxuTWFwUmVhZGVyLnByb3RvdHlwZS5nZXRSb3cgPSBmdW5jdGlvbihyb3csIGlkKVxyXG57XHJcbiAgICB2YXIgYXJyID0gW107XHJcblxyXG4gICAgdmFyIGxlbmd0aCA9IDA7XHJcblxyXG4gICAgLy9mb3IodmFyIGwgPSAwOyBsIDwgQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbdGhpcy5fbGV2ZWxdLmxheWVycy5sZW5ndGg7IGwrKylcclxuICAgIGZvcih2YXIgbCBpbiBDb21tb24ubGV2ZWxEYXRhLmxldmVsc1t0aGlzLl9sZXZlbF0ubGF5ZXJzKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBsYXllciA9IENvbW1vbi5sZXZlbERhdGEubGV2ZWxzW3RoaXMuX2xldmVsXS5sYXllcnNbbF07XHJcbiAgICAgICAgaWYoQ29tbW9uLmxldmVsRGF0YS53b3JsZHNbaWRdLmluZGV4T2YobCkgPiAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgY29sIGluIGxheWVyW3Jvd10pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKE51bWJlcihjb2wpID4gTnVtYmVyKGxlbmd0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gTnVtYmVyKGNvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBhcnIucHVzaCh0aGlzLmdldFRpbGVzKHJvdywgaSwgaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5NYXBSZWFkZXIucHJvdG90eXBlLmdldFRpbGVzID0gZnVuY3Rpb24ocm93LCBjb2wsIGlkKVxyXG57XHJcbiAgICB2YXIgdGlsZXMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9yKHZhciBsIGluIENvbW1vbi5sZXZlbERhdGEubGV2ZWxzW3RoaXMuX2xldmVsXS5sYXllcnMpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGxheWVyID0gQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbdGhpcy5fbGV2ZWxdLmxheWVyc1tsXTtcclxuICAgICAgICBpZihDb21tb24ubGV2ZWxEYXRhLndvcmxkc1tpZF0uaW5kZXhPZihsKSA+IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobGF5ZXJbcm93XSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGxheWVyW3Jvd11bY29sXSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZXMucHVzaCh7aW1hZ2U6Q29tbW9uLmxldmVsRGF0YS50aWxlc1tsYXllcltyb3ddW2NvbF1dLCBsYXllcjpsfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZih0aWxlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHJldHVybiB0aWxlcztcclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbk1hcFJlYWRlci5wcm90b3R5cGUucmVtb3ZlVGlsZUZyb21MYXllciA9IGZ1bmN0aW9uKGxheWVyLCByb3csIGNvbClcclxue1xyXG4gICAgZGVsZXRlIENvbW1vbi5sZXZlbERhdGEubGV2ZWxzW3RoaXMuX2xldmVsXS5sYXllcnNbbGF5ZXJdW3Jvd11bY29sXTtcclxufVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gVGlsZSh0ZXh0dXJlKVxyXG57XHJcblx0dGhpcy50ZXh0dXJlTmFtZSA9IHRleHR1cmU7XHJcblxyXG5cdHRoaXMuc2lnbmFscyA9IHt9O1xyXG5cdHRoaXMuc2lnbmFscy5jbGVhcmVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcblxyXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHJcblx0dGhpcy5yb3dcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLmNvbFx0XHRcdFx0PSBudWxsO1xyXG5cclxuXHR0aGlzLmxldmVsRGF0YUxheWVyIFx0PSBudWxsO1xyXG5cclxuICAgIFBJWEkuU3ByaXRlLmNhbGwodGhpcywgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUodGV4dHVyZSkpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVGlsZTtcclxuVGlsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBJWEkuU3ByaXRlLnByb3RvdHlwZSk7XHJcblRpbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGlsZTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVGlsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMCwgMSk7XHJcbn07XHJcblxyXG5UaWxlLnByb3RvdHlwZS5jaGFuZ2VUZXh0dXJlID0gZnVuY3Rpb24odGV4dHVyZSlcclxue1xyXG5cdHRoaXMudGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKHRleHR1cmUpO1xyXG5cdHRoaXMudGV4dHVyZU5hbWUgPSB0ZXh0dXJlO1xyXG59O1xyXG5cclxuVGlsZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLnNpZ25hbHMuY2xlYXJlZC5kaXNwYXRjaCgpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgTGF5ZXIgICAgICAgICAgID0gcmVxdWlyZShcIi4vTGF5ZXJcIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gV29ybGQobWFwUmVhZGVyLCB3aWR0aCwgaGVpZ2h0LCBpZClcclxue1xyXG4gICAgdGhpcy5zaWduYWxzICAgICAgICAgICAgICAgICAgID0ge307XHJcbiAgICB0aGlzLnNpZ25hbHMuYWN0aXZlT2JqZWN0Rm91bmQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHJcbiAgICB0aGlzLl9tYXBSZWFkZXIgICAgICAgICAgICAgICAgPSBtYXBSZWFkZXI7XHJcbiAgICB0aGlzLmZpZWxkICAgICAgICAgICAgICAgICAgICAgPSB7d2lkdGg6d2lkdGgsIGhlaWdodDpoZWlnaHR9O1xyXG4gICAgdGhpcy5pZCAgICAgICAgICAgICAgICAgICAgICAgID0gaWQ7XHJcblxyXG4gICAgdGhpcy5fbGF5ZXJzICAgICAgICAgICAgICAgICAgID0gbnVsbDtcclxuICAgIHRoaXMuX2xheWVyc0J5WSAgICAgICAgICAgICAgICA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5yb3cgICAgICAgICAgICAgICAgICAgICAgID0gMDtcclxuICAgIHRoaXMuY29sICAgICAgICAgICAgICAgICAgICAgICA9IDA7XHJcbiAgICB0aGlzLnhTcGVlZCAgICAgICAgICAgICAgICAgICAgPSAwO1xyXG4gICAgdGhpcy55U3BlZWQgICAgICAgICAgICAgICAgICAgID0gMDtcclxuXHJcbiAgICB0aGlzLnJvd1N0YXJ0T2Zmc2V0ICAgICAgICAgICAgPSAwO1xyXG4gICAgdGhpcy5jb2xTdGFydE9mZnNldCAgICAgICAgICAgID0gMDtcclxuXHJcbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gV29ybGQ7XHJcbldvcmxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuV29ybGQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV29ybGQ7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbldvcmxkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLl9sYXllcnMgPSBbXTtcclxuICAgIHRoaXMuX2xheWVyc0J5WSA9IHt9O1xyXG5cclxuICAgIHRoaXMucm93U3RhcnRPZmZzZXQgPSAyO1xyXG5cclxuICAgIGZvcih2YXIgcm93ID0gMjsgcm93IDw9IHRoaXMuZmllbGQuaGVpZ2h0IC8gQ29tbW9uLnNxdWFyZVRpbGVTaXplOyByb3crKylcclxuICAgIHtcclxuICAgICAgICB2YXIgbGF5ZXIgPSBuZXcgTGF5ZXIoKTtcclxuICAgICAgICBsYXllci5zaWduYWxzLmFjdGl2ZU9iamVjdEZvdW5kLmFkZCh0aGlzLm9uQWN0aXZlT2JqZWN0Rm91bmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQobGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuX2xheWVycy5wdXNoKGxheWVyKTtcclxuICAgIH1cclxufTtcclxuXHJcbldvcmxkLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIFxyXG59XHJcblxyXG5Xb3JsZC5wcm90b3R5cGUuZmlsbFNjZW5lID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLmNvbCA9IHRoaXMuY29sU3RhcnRPZmZzZXQgPSAwO1xyXG4gICAgdmFyIGN1cnJlbnRSb3cgPSB0aGlzLnJvdyA9IHRoaXMucm93U3RhcnRPZmZzZXQgKyBNYXRoLmZsb29yKC10aGlzLnkgLyBDb21tb24uc3F1YXJlVGlsZVNpemUpO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9sYXllcnMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHggPSAoY3VycmVudFJvdyAlIDIgPT0gMCA/IDAgOiAyKSAqIENvbW1vbi5zcXVhcmVUaWxlU2l6ZTtcclxuICAgICAgICB2YXIgeSA9IGN1cnJlbnRSb3cgKiBDb21tb24uc3F1YXJlVGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXJzW2ldLnJvdyA9IGN1cnJlbnRSb3c7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXJzW2ldLmZpbGwoeCwgeSwgdGhpcy5fbWFwUmVhZGVyLmdldFJvdyhjdXJyZW50Um93LCB0aGlzLmlkKSwgQ29tbW9uLnNxdWFyZVRpbGVTaXplKjQpO1xyXG4gICAgICAgIHRoaXMuX2xheWVyc0J5WVt0aGlzLl9sYXllcnNbaV0ueVBvc2l0aW9uXSA9IHRoaXMuX2xheWVyc1tpXTtcclxuICAgICAgICBjdXJyZW50Um93Kys7XHJcbiAgICB9XHJcbn1cclxuXHJcbldvcmxkLnByb3RvdHlwZS5zaGlmdFJvd0Rvd24gPSBmdW5jdGlvbihyb3cpXHJcbntcclxuICAgIHZhciBoaWdoZXN0Um93TGF5ZXIgPSB0aGlzLl9sYXllcnNbMF07XHJcbiAgICB2YXIgbGF5ZXJUb1NoaWZ0ID0gbnVsbDtcclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fbGF5ZXJzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuX2xheWVyc1tpXS5yb3cgPT0gcm93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGF5ZXJUb1NoaWZ0ID0gdGhpcy5fbGF5ZXJzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9sYXllcnNbaV0ucm93ID4gaGlnaGVzdFJvd0xheWVyLnJvdylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhpZ2hlc3RSb3dMYXllciA9IHRoaXMuX2xheWVyc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaGlmdFJvdyhoaWdoZXN0Um93TGF5ZXIucm93ICsgMSwgbGF5ZXJUb1NoaWZ0KTtcclxuICAgIHRoaXMuYWRkQ2hpbGQobGF5ZXJUb1NoaWZ0KTtcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLnNoaWZ0Um93VXAgPSBmdW5jdGlvbihyb3cpXHJcbntcclxuICAgIHZhciBsb3dlc3RSb3dMYXllciA9IHRoaXMuX2xheWVyc1swXTtcclxuICAgIHZhciBsYXllclRvU2hpZnQgPSBudWxsO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9sYXllcnMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5fbGF5ZXJzW2ldLnJvdyA9PSByb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYXllclRvU2hpZnQgPSB0aGlzLl9sYXllcnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuX2xheWVyc1tpXS5yb3cgPCBsb3dlc3RSb3dMYXllci5yb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsb3dlc3RSb3dMYXllciA9IHRoaXMuX2xheWVyc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaGlmdFJvdyhsb3dlc3RSb3dMYXllci5yb3cgLSAxLCBsYXllclRvU2hpZnQpO1xyXG4gICAgdGhpcy5hZGRDaGlsZEF0KGxheWVyVG9TaGlmdCwgMCk7XHJcbn1cclxuXHJcbldvcmxkLnByb3RvdHlwZS5zaGlmdFJvdyA9IGZ1bmN0aW9uKG5leHRSb3csIGxheWVyVG9TaGlmdClcclxue1xyXG4gICAgdmFyIHggPSAobmV4dFJvdyAlIDIgPT0gMCA/IDAgOiAyKSAqIENvbW1vbi5zcXVhcmVUaWxlU2l6ZTtcclxuICAgIHZhciB5ID0gbmV4dFJvdyAqIENvbW1vbi5zcXVhcmVUaWxlU2l6ZTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5fbGF5ZXJzQnlZW2xheWVyVG9TaGlmdC55UG9zaXRpb25dO1xyXG4gICAgbGF5ZXJUb1NoaWZ0LmNsZWFyKCk7XHJcbiAgICBsYXllclRvU2hpZnQucm93ID0gbmV4dFJvdztcclxuICAgIGxheWVyVG9TaGlmdC5maWxsKHgsIHksIHRoaXMuX21hcFJlYWRlci5nZXRSb3cobmV4dFJvdywgdGhpcy5pZCksIENvbW1vbi5zcXVhcmVUaWxlU2l6ZSo0KTtcclxuICAgIHRoaXMuX2xheWVyc0J5WVtsYXllclRvU2hpZnQueVBvc2l0aW9uXSA9IGxheWVyVG9TaGlmdDtcclxufVxyXG5cclxuV29ybGQucHJvdG90eXBlLmdldExheWVyRm9yWUNvb3JkaW5hdGUgPSBmdW5jdGlvbih5KVxyXG57XHJcbiAgICB2YXIgZ3JpZFBvcyA9IE1hdGguY2VpbCh5IC8gQ29tbW9uLnNxdWFyZVRpbGVTaXplKTtcclxuICAgIHJldHVybiB0aGlzLl9sYXllcnNCeVlbZ3JpZFBvcyAqIENvbW1vbi5zcXVhcmVUaWxlU2l6ZV07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbldvcmxkLnByb3RvdHlwZS5vbkFjdGl2ZU9iamVjdEZvdW5kID0gZnVuY3Rpb24odGlsZSwgaW1hZ2VOYW1lKVxyXG57XHJcbiAgICB0aGlzLnNpZ25hbHMuYWN0aXZlT2JqZWN0Rm91bmQuZGlzcGF0Y2godGlsZSwgaW1hZ2VOYW1lKTtcclxufVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV29ybGQucHJvdG90eXBlLCBcInZpZXdYXCIsIHtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMge051bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHshTnVtYmVyfSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSB2YWx1ZSAtIHRoaXMueDtcclxuICAgICAgICB0aGlzLnggPSB2YWx1ZTtcclxuICAgICAgICB2YXIgY29sID0gdGhpcy5jb2xTdGFydE9mZnNldCArIE1hdGguY2VpbCh0aGlzLnggLyBDb21tb24uc3F1YXJlVGlsZVNpemUpO1xyXG4gICAgICAgIHRoaXMuY29sID0gY29sO1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdvcmxkLnByb3RvdHlwZSwgXCJ2aWV3WVwiLCB7XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7IU51bWJlcn0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cclxuICAgICAgICB0aGlzLnlTcGVlZCA9IHZhbHVlIC0gdGhpcy55O1xyXG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xyXG5cclxuICAgICAgICByb3cgPSB0aGlzLnJvd1N0YXJ0T2Zmc2V0ICsgTWF0aC5mbG9vcigtdGhpcy55IC8gQ29tbW9uLnNxdWFyZVRpbGVTaXplKTtcclxuXHJcbiAgICAgICAgaWYocm93ID4gdGhpcy5yb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0Um93RG93bih0aGlzLnJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYocm93IDwgdGhpcy5yb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0Um93VXAodGhpcy5yb3cgKyAodGhpcy5fbGF5ZXJzLmxlbmd0aC0xKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgUmFpbFJpZGVyXHRcdD0gcmVxdWlyZShcIi4vUmFpbFJpZGVyXCIpO1xyXG52YXIgU2hhZG93IFx0XHRcdD0gcmVxdWlyZShcIi4vU2hhZG93XCIpO1xyXG52YXIgRW1pdHRlciBcdFx0PSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9FbWl0dGVyXCIpO1xyXG52YXIgQXVkaW9QYXJhbXMgICAgID0gcmVxdWlyZShcIi4uL21hbmFnZXJzL0F1ZGlvUGFyYW1zXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEF2YXRhcihjaGFyYWN0ZXJOdW1iZXIsIG1heENoYXJhY3RlcnMpXHJcbntcclxuXHR0aGlzLl9hc3NldE1hbmFnZXJcdFx0XHRcdD0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuXHR0aGlzLmNoYXJhY3Rlck51bWJlclx0XHRcdD0gY2hhcmFjdGVyTnVtYmVyO1xyXG5cdHRoaXMuX21heENoYXJhY3RlcnNcdFx0XHRcdD0gbWF4Q2hhcmFjdGVycztcclxuXHR0aGlzLl9zcHJpdGVIb2xkZXJcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLl9zcHJpdGVTdWJIb2xkZXJcdFx0XHQ9IG51bGw7XHJcblx0dGhpcy5fc3ByaXRlXHRcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLl9hdXJhXHRcdFx0XHRcdFx0PSBudWxsO1xyXG5cclxuXHR0aGlzLl9tb29kXHRcdFx0XHRcdFx0PSBcIlwiO1xyXG5cdHRoaXMuX2N1cnJlbnRUZXh0dXJlXHRcdFx0PSBudWxsO1xyXG5cclxuXHR0aGlzLl9zd2luZ1Npblx0XHRcdFx0XHQ9IDA7XHJcblxyXG5cdHRoaXMuc2hpZWxkXHRcdFx0XHRcdFx0PSBmYWxzZTtcclxuXHR0aGlzLm1hZ25ldFx0XHRcdFx0XHRcdD0gZmFsc2U7XHJcblxyXG5cdHRoaXMuc2hhZG93XHRcdFx0XHRcdFx0PSBudWxsO1xyXG5cclxuXHR0aGlzLmNhdWdodFx0XHRcdFx0XHRcdD0gZmFsc2U7XHJcblxyXG5cdHRoaXMuZGVmYXVsdFNwZWVkXHRcdFx0XHQ9IDA7XHJcblx0dGhpcy5zcGVlZEluY1x0XHRcdFx0XHQ9IDA7XHJcblx0dGhpcy5zcGVlZFVwUGVyY2VudFZhbHVlXHRcdD0gMDtcclxuXHJcblx0dGhpcy5kaXJlY3Rpb25PZkF2YXRhckluRnJvbnRcdD0gbnVsbDtcclxuXHJcblx0dGhpcy5fY29ubmVjdGlvbkVtaXR0ZXJcdFx0XHQ9IG51bGw7XHRcclxuXHJcblx0UmFpbFJpZGVyLmNhbGwodGhpcyk7XHJcblxyXG5cdHRoaXMuc2lnbmFscy5kZWFkIFx0XHRcdFx0PSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEF2YXRhcjtcclxuQXZhdGFyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmFpbFJpZGVyLnByb3RvdHlwZSk7XHJcbkF2YXRhci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBdmF0YXI7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkF2YXRhci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1x0XHJcblx0dGhpcy5fc3ByaXRlSG9sZGVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblx0dGhpcy5fc3ByaXRlSG9sZGVyLnkgPSAtQ29tbW9uLnJhaWxNYW5hZ2VyLmRpc3RhbmNlRnJvbUdyb3VuZDtcclxuXHR0aGlzLmFkZENoaWxkKHRoaXMuX3Nwcml0ZUhvbGRlcik7XHJcblx0Ly9Db21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX3Nwcml0ZUhvbGRlciwgMS4yLCB7ZGVsYXk6dGhpcy5jaGFyYWN0ZXJOdW1iZXIqLjEsIHJvdGF0aW9uOi01KlBJWEkuREVHX1RPX1JBRCwgZWFzZTpTaW5lLmVhc2VJbk91dCwgeW95bzp0cnVlLCByZXBlYXQ6LTF9KSk7XHJcblxyXG5cdHRoaXMuX3Nwcml0ZVN1YkhvbGRlciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdHRoaXMuX3Nwcml0ZUhvbGRlci5hZGRDaGlsZCh0aGlzLl9zcHJpdGVTdWJIb2xkZXIpO1xyXG5cclxuXHR0aGlzLl9zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2NoYXJhY3Rlcl8wMCcgKyB0aGlzLmNoYXJhY3Rlck51bWJlci50b1N0cmluZygpICsgJ19kb3ducmlnaHQnKSk7XHJcblx0dGhpcy5fc3ByaXRlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMCk7XHJcblx0dGhpcy5fc3ByaXRlU3ViSG9sZGVyLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSk7XHJcblxyXG5cdHRoaXMuX2F1cmEgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2NoYXJhY3Rlcl9zaGVpbGQnKSk7XHJcblx0dGhpcy5fYXVyYS52aXNpYmxlID0gZmFsc2U7XHJcblx0dGhpcy5fYXVyYS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjU1LCAwKTtcclxuXHR0aGlzLl9zcHJpdGUuYWRkQ2hpbGQodGhpcy5fYXVyYSk7XHJcblx0Q29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9hdXJhLCAwLjkgKyAoTWF0aC5yYW5kb20oKSouMSksIHthbHBoYTowLjIsIGVhc2U6U2luZS5lYXNlSW5PdXQsIHlveW86dHJ1ZSwgcmVwZWF0Oi0xfSkpO1xyXG5cclxuXHR0aGlzLnNoYWRvdyA9IG5ldyBTaGFkb3coMjAsIDEwKTtcclxuXHJcblx0dGhpcy5fY29ubmVjdGlvbkVtaXR0ZXIgPSBFbWl0dGVyLmFkZCh0aGlzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInBhcnRpY2xlX3NwYXJrbGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVJUSUNMRV9yYWlsX3NwYXJrcywgMCwgLShDb21tb24ucmFpbE1hbmFnZXIuZGlzdGFuY2VGcm9tR3JvdW5kKjAuOSksIG51bGwsIGZhbHNlKTtcclxuXHJcblx0UmFpbFJpZGVyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuc3BlZWRJbmMgPSBNYXRoLm1pbigyLCB0aGlzLnNwZWVkSW5jICsgMC4wMDAzKTtcclxuXHR0aGlzLnNwZWVkID0gdGhpcy5kZWZhdWx0U3BlZWQgKyB0aGlzLnNwZWVkSW5jO1xyXG5cdHRoaXMuc3BlZWQgKz0gdGhpcy5zcGVlZCAqIHRoaXMuc3BlZWRVcFBlcmNlbnRWYWx1ZTtcclxuXHJcblx0aWYoIXRoaXMuY2F1Z2h0KVxyXG5cdFx0UmFpbFJpZGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcclxuXHJcblx0dGhpcy5zaGFkb3cueCA9IHRoaXMueDtcclxuXHR0aGlzLnNoYWRvdy55ID0gdGhpcy55O1xyXG5cclxuXHR0aGlzLnNldFNwcml0ZSgpO1xyXG5cclxuXHR0aGlzLl9zd2luZ1NpbiArPSAodGhpcy5zcGVlZC8xMDApLSh0aGlzLmNoYXJhY3Rlck51bWJlci8xMDAwKTtcclxuXHR0aGlzLl9zcHJpdGVIb2xkZXIucm90YXRpb24gPSAoKHRoaXMuc3BlZWQvMikgKiBNYXRoLnNpbih0aGlzLl9zd2luZ1NpbikpICogUElYSS5ERUdfVE9fUkFEO1xyXG5cclxuXHRpZih0aGlzLmN1cnJlbnRSYWlsICE9IG51bGwgJiYgdGhpcy50YXJnZXRSYWlsICE9IG51bGwpXHJcblx0e1xyXG5cdFx0dmFyIGNyID0gdGhpcy5jdXJyZW50UmFpbDtcclxuXHRcdHZhciB0ciA9IHRoaXMudGFyZ2V0UmFpbDtcclxuXHRcdHZhciBkaXMgPSBNYXRoLnNxcnQoTWF0aC5wb3coIE1hdGguYWJzKGNyLnggLSB0ci54KSwgMikgKyBNYXRoLnBvdyggTWF0aC5hYnMoY3IueSAtIHRyLnkpLCAyKSk7XHJcblx0XHR2YXIgYXZEaXMgPSBNYXRoLnNxcnQoTWF0aC5wb3coIE1hdGguYWJzKGNyLnggLSB0aGlzLngpLCAyKSArIE1hdGgucG93KCBNYXRoLmFicyhjci55IC0gdGhpcy55KSwgMikpO1xyXG5cclxuXHRcdHZhciB0ID0gYXZEaXM7XHJcblx0XHR2YXIgZCA9IGRpcyAvIDI7XHJcblx0XHRpZihhdkRpcyA+IGRpcy8yKVxyXG5cdFx0XHR0ID0gZCAtIChhdkRpcy1kKTtcclxuXHJcblx0XHR2YXIgYiA9IDA7XHJcblx0XHR2YXIgYyA9IDE7XHJcblx0XHR2YXIgeSA9IC1jLzIgKiAoTWF0aC5jb3MoTWF0aC5QSSp0L2QpIC0gMSkgKyBiO1xyXG5cdFx0dGhpcy5fc3ByaXRlLnkgPSB5ICogMS41O1x0XHJcblx0fVxyXG59O1xyXG5cclxuQXZhdGFyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59O1xyXG5cclxuQXZhdGFyLnByb3RvdHlwZS5zZXRTcHJpdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgc3ByX2QgPSB0aGlzLmRpcmVjdGlvbjtcclxuXHRpZih0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcgfHwgdGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0JylcclxuXHRcdHNwcl9kID0gXCJkb3duXCIgKyB0aGlzLmRpcmVjdGlvbjtcclxuXHJcblx0dmFyIHRleHR1cmUgPSAnY2hhcmFjdGVyXzAwJyArIHRoaXMuY2hhcmFjdGVyTnVtYmVyLnRvU3RyaW5nKCkgKyAnXycgKyBzcHJfZCArIHRoaXMuX21vb2Q7XHJcblxyXG5cdGlmKHRleHR1cmUgIT0gdGhpcy5fY3VycmVudFRleHR1cmUpXHJcblx0e1xyXG5cdFx0dGhpcy5fY3VycmVudFRleHR1cmUgPSB0ZXh0dXJlO1xyXG5cclxuXHRcdHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUodGhpcy5fY3VycmVudFRleHR1cmUpO1xyXG5cdFx0dGhpcy5zaGFkb3cuc2V0QW5nbGUoc3ByX2QpO1xyXG5cdH1cclxufVxyXG5cclxuQXZhdGFyLnByb3RvdHlwZS5zZXRTd2luZyA9IGZ1bmN0aW9uKHByZXZEaXJlY3Rpb24sIG5ld0RpcmVjdGlvbilcclxue1xyXG5cdHZhciByaWdodEFuZ2xlTG9va3VwID0ge1xyXG5cdFx0J3VwJzpbJ2xlZnQnLCAncmlnaHQnXSxcclxuXHRcdCdkb3duJzpbJ2xlZnQnLCAncmlnaHQnXSxcclxuXHRcdCdsZWZ0JzpbJ3VwJywgJ2Rvd24nXSxcclxuXHRcdCdyaWdodCc6Wyd1cCcsICdkb3duJ10sXHJcblx0XHQnZG93bnJpZ2h0JzpbJ2Rvd25sZWZ0JywgJ3VwcmlnaHQnXSxcclxuXHRcdCd1cGxlZnQnOlsnZG93bmxlZnQnLCAndXByaWdodCddLFxyXG5cdFx0J2Rvd25sZWZ0JzpbJ2Rvd25yaWdodCcsICd1cGxlZnQnXSxcclxuXHRcdCd1cHJpZ2h0JzpbJ2Rvd25yaWdodCcsICd1cGxlZnQnXVxyXG5cdH07XHJcblxyXG5cdHZhciBvYnR1c2VBbmdsZUxvb2t1cCA9IHtcclxuXHRcdCd1cCc6Wyd1cGxlZnQnLCAndXByaWdodCddLFxyXG5cdFx0J2Rvd24nOlsnZG93bmxlZnQnLCAnZG93bnJpZ2h0J10sXHJcblx0XHQnbGVmdCc6Wyd1cGxlZnQnLCAnZG93bmxlZnQnXSxcclxuXHRcdCdyaWdodCc6Wyd1cHJpZ2h0JywgJ2Rvd25yaWdodCddLFxyXG5cdFx0J2Rvd25yaWdodCc6Wydkb3duJywgJ3JpZ2h0J10sXHJcblx0XHQndXBsZWZ0JzpbJ2xlZnQnLCAndXAnXSxcclxuXHRcdCdkb3dubGVmdCc6Wydkb3duJywgJ2xlZnQnXSxcclxuXHRcdCd1cHJpZ2h0JzpbJ3JpZ2h0JywgJ3VwJ11cclxuXHR9O1xyXG5cclxuXHR2YXIgYW5nbGUgPSBudWxsO1xyXG5cclxuXHRpZihyaWdodEFuZ2xlTG9va3VwW3ByZXZEaXJlY3Rpb25dWzBdID09IG5ld0RpcmVjdGlvbiB8fCByaWdodEFuZ2xlTG9va3VwW3ByZXZEaXJlY3Rpb25dWzFdID09IG5ld0RpcmVjdGlvbilcclxuXHRcdGFuZ2xlID0gXCJyaWdodFwiO1xyXG5cdGVsc2UgaWYob2J0dXNlQW5nbGVMb29rdXBbcHJldkRpcmVjdGlvbl1bMF0gPT0gbmV3RGlyZWN0aW9uIHx8IG9idHVzZUFuZ2xlTG9va3VwW3ByZXZEaXJlY3Rpb25dWzFdID09IG5ld0RpcmVjdGlvbilcclxuXHRcdGFuZ2xlID0gXCJvYnR1c2VcIjtcclxuXHJcblx0aWYoYW5nbGUgIT0gbnVsbClcclxuXHR7XHJcblx0XHR2YXIgZSA9IChhbmdsZSA9PSAncmlnaHQnID8gMTAgOiA1KTtcclxuXHRcdHZhciBzID0gZSAqICh0aGlzLnNwZWVkIC8gMTApOyAvL1JvdGF0aW9uIGV4dGVudFxyXG5cclxuXHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cdFx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XHJcblxyXG5cdFx0dmFyIGwgPSBNYXRoLmZsb29yKGUqLjUpOyAvL051bWJlciBvZiBzd2luZ3NcclxuXHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgcCA9IChsLWkpIC8gbDsgLy9wZXJjZW50YWdlIHRocm91Z2ggdGhlIGxvb3BcclxuXHRcdFx0dmFyIGYgPSAoaSAlIDIgPT0gMCA/IC0xIDogMSkgKiBwOyAvL3N3aW5nIGRpcmVjdGlvblxyXG5cdFx0XHR0bC50byh0aGlzLl9zcHJpdGVTdWJIb2xkZXIsIC4yKnAsIHtyb3RhdGlvbjoocypmKSpQSVhJLkRFR19UT19SQUQsIGVhc2U6U2luZS5lYXNlSW5PdXR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbkF2YXRhci5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5fbW9vZCA9ICdfc2FkJztcclxuXHR0aGlzLmNhdWdodCA9IHRydWU7XHJcblxyXG5cdFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLl9zcHJpdGVIb2xkZXIpO1xyXG5cclxuXHR2YXIgYW5nbGUgPSBDb21tb24ucmFpbE1hbmFnZXIucmFpbENvb3Jkc1t0aGlzLmRpcmVjdGlvbl0uYW5nbGU7XHJcblx0YW5nbGUgKz0gKC00NSArICgxNSp0aGlzLmNoYXJhY3Rlck51bWJlcikpICogUElYSS5ERUdfVE9fUkFEO1xyXG5cclxuXHR2YXIgbmV3WCA9IC0xICogKC1NYXRoLnNpbihhbmdsZSkgKiA1MCk7XHJcblx0dmFyIG5ld1kgPSAtMSAqIChNYXRoLmNvcyhhbmdsZSkgKiA1MCk7XHJcblxyXG5cdGlmKHRoaXMuY2hhcmFjdGVyTnVtYmVyID09IDEpXHJcblx0e1xyXG5cdFx0Q29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ3NmeF9mYWxsb2ZmX3JhaWxfMCcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArICdjJyk7XHJcblx0fVxyXG5cclxuXHRDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMsIC41LCB7eDp0aGlzLngrbmV3WCwgeTp0aGlzLnkrbmV3WSwgZWFzZTpTaW5lLmVhc2VPdXQsIG9uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHR9fSkpO1xyXG5cdENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fc3ByaXRlSG9sZGVyLCAuNSwge3k6LShDb21tb24ucmFpbE1hbmFnZXIuZGlzdGFuY2VGcm9tR3JvdW5kLzIpLCBlYXNlOlNpbmUuZWFzZUluLCBvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHNvdW5kcyA9IFsnc2Z4X2Ryb3Bfb2ZmX3JhaWxfMDAnLCAnc2Z4X2Ryb3Bfb2ZmX3JhaWxfMDEnLCAnc2Z4X2Ryb3Bfb2ZmX3JhaWxfMDInXTtcclxuXHRcdENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKHNvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqc291bmRzLmxlbmd0aCldKTtcclxuXHJcblx0XHR2YXIgZW1pdHRlciA9IEVtaXR0ZXIuYWRkKHRoaXMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInBhcnRpY2xlX21lbnVfc3RlYW1cIiwgXCJwYXJ0aWNsZV9zcGFya2xlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2dhbmdfaGl0Z3JvdW5kXzAwLCB0aGlzLl9zcHJpdGVIb2xkZXIueCwgdGhpcy5fc3ByaXRlSG9sZGVyLnkgKyAodGhpcy5fc3ByaXRlSG9sZGVyLmhlaWdodCAtIDUwKSwgMSwgdHJ1ZSwgMSk7XHJcblx0XHRcclxuXHRcdGlmKHRoaXMuY2hhcmFjdGVyTnVtYmVyID09IHRoaXMuX21heENoYXJhY3RlcnMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2lnbmFscy5kZWFkLmRpc3BhdGNoKCk7XHJcblx0XHR9XHJcblx0fX0pKTtcclxuXHR0aGlzLl9jb25uZWN0aW9uRW1pdHRlci5lbWl0ID0gZmFsc2U7XHJcbn07XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLnNldE1hZ25ldCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMubWFnbmV0ID0gdHJ1ZTtcclxuXHJcblx0dmFyIGVtaXR0ZXIgPSBFbWl0dGVyLmFkZCh0aGlzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9tYWduZXRcIiwgXCJwYXJ0aWNsZV9tYWduZXRfMDAyXCIsIFwicGFydGljbGVfbWFnbmV0XzAwM1wiLCBcInBhcnRpY2xlX21hZ25ldF8wMDRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDTEVfbWFnbmV0LCB0aGlzLl9zcHJpdGVIb2xkZXIueCwgdGhpcy5fc3ByaXRlSG9sZGVyLnkgKyA2MCwgMiwgdHJ1ZSwgMC41KTtcclxuXHJcblx0Q29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubWFnbmV0ID0gZmFsc2U7XHJcblx0XHRDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZCgnc2Z4X21hZ25ldF9sb29wXzAwJyk7XHJcblx0fSwgMiwgdGhpcyk7XHJcblxyXG5cdGlmKHRoaXMuY2hhcmFjdGVyTnVtYmVyID09IDEpXHJcblx0e1xyXG5cdFx0dmFyIHBhcmFtcyA9IG5ldyBBdWRpb1BhcmFtcygpO1xyXG4gICAgXHRwYXJhbXMubG9vcCA9IHRydWU7XHJcblx0XHRDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnc2Z4X21hZ25ldF9sb29wXzAwJywgcGFyYW1zKTtcclxuXHR9XHJcbn07XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLnNldFNoaWVsZCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGlmKCF0aGlzLnNoaWVsZClcclxuXHR7XHJcblx0XHR0aGlzLnNoaWVsZCA9IHRydWU7XHJcblx0XHR0aGlzLl9hdXJhLnRleHR1cmUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnY2hhcmFjdGVyX3NoZWlsZCcpO1xyXG5cdFx0dGhpcy5fYXVyYS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdHRoaXMuX2F1cmEuYWxwaGEgPSAxO1xyXG5cclxuXHRcdGlmKHRoaXMuY2hhcmFjdGVyTnVtYmVyID09IDEpXHJcblx0XHR7XHJcblx0XHRcdHZhciBwYXJhbXMgPSBuZXcgQXVkaW9QYXJhbXMoKTtcclxuXHQgICAgXHRwYXJhbXMubG9vcCA9IHRydWU7XHJcblx0XHRcdENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKCdzZnhfc2hpZWxkX2xvb3BfMDInLCBwYXJhbXMpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbkF2YXRhci5wcm90b3R5cGUuY29sbGlkZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xyXG5cdHRsLnRvKHRoaXMuX3Nwcml0ZVN1YkhvbGRlciwgLjIsIHtkZWxheToodGhpcy5jaGFyYWN0ZXJOdW1iZXItMSkqLjEsIHJvdGF0aW9uOi0xMCpQSVhJLkRFR19UT19SQUQsIGVhc2U6U2luZS5lYXNlSW5PdXR9KTtcclxuXHR0bC50byh0aGlzLl9zcHJpdGVTdWJIb2xkZXIsIC4xOCwge3JvdGF0aW9uOjcqUElYSS5ERUdfVE9fUkFELCBlYXNlOlNpbmUuZWFzZUluT3V0fSk7XHJcblx0dGwudG8odGhpcy5fc3ByaXRlU3ViSG9sZGVyLCAuMTQsIHtyb3RhdGlvbjotNSpQSVhJLkRFR19UT19SQUQsIGVhc2U6U2luZS5lYXNlSW5PdXR9KTtcclxuXHR0bC50byh0aGlzLl9zcHJpdGVTdWJIb2xkZXIsIC4xLCB7cm90YXRpb246MypQSVhJLkRFR19UT19SQUQsIGVhc2U6U2luZS5lYXNlSW5PdXR9KTtcclxuXHR0bC50byh0aGlzLl9zcHJpdGVTdWJIb2xkZXIsIC4xLCB7cm90YXRpb246LTIqUElYSS5ERUdfVE9fUkFELCBlYXNlOlNpbmUuZWFzZUluT3V0fSk7XHJcblx0dGwudG8odGhpcy5fc3ByaXRlU3ViSG9sZGVyLCAxLCB7cm90YXRpb246MCwgZWFzZTpFbGFzdGljLmVhc2VPdXR9KTtcclxuXHJcblx0dGhpcy5zZXRNb29kKCdzYWQnKTtcclxuXHJcblx0aWYoIXRoaXMuc2hpZWxkKVxyXG5cdHtcclxuXHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OjN9KTtcclxuXHRcdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xyXG5cdFx0dGwudG8odGhpcy5fc3ByaXRlLCAuMiwge3N0YXJ0QXQ6e3RpbnQ6MHhFRDNEMUF9fSk7XHJcblx0XHR0bC50byh0aGlzLl9zcHJpdGUsIC4yLCB7c3RhcnRBdDp7dGludDoweEZGRkZGRn19KTtcclxuXHJcblx0XHRpZih0aGlzLmNoYXJhY3Rlck51bWJlciA9PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZW1pdHRlciA9IEVtaXR0ZXIuYWRkKHRoaXMuX3Nwcml0ZUhvbGRlciwgXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJjb2luXzAwMVwiLCBcImNvaW5fMDAyXCJdLFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDTEVfY29pbl9sb3NzLCAwLCAwLCAwLjMsIHRydWUsIDAuNSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHR0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG5cclxuXHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OjN9KTtcclxuXHRcdENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xyXG5cdFx0dGwudG8odGhpcy5fYXVyYSwgLjEsIHtvblN0YXJ0U2NvcGU6dGhpcywgb25TdGFydDpmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl9hdXJhLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0fX0pO1xyXG5cdFx0dGwudG8odGhpcy5fYXVyYSwgLjEsIHtvblN0YXJ0U2NvcGU6dGhpcywgb25TdGFydDpmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl9hdXJhLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdH19KTtcclxuXHRcdENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKCdzZnhfc2hpZWxkX2xvb3BfMDInKTtcclxuXHR9XHJcbn07XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLmdldExheWVyaW5nWSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHJldHVybiB0aGlzLnk7Ly8rIHRoaXMuX3Nwcml0ZS55O1xyXG59O1xyXG5cclxuQXZhdGFyLnByb3RvdHlwZS5zZXRNb29kID0gZnVuY3Rpb24obW9vZClcclxue1xyXG5cdGlmKG1vb2QuaW5kZXhPZignXycpICE9IDApXHJcblx0XHRtb29kID0gJ18nICsgbW9vZDtcclxuXHJcblx0LypcclxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuXHRDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcclxuXHR0bC50byh0aGlzLCAodGhpcy5jaGFyYWN0ZXJOdW1iZXItMSkqLjEsIHtvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5fbW9vZCA9IG1vb2Q7XHJcblx0fX0pO1xyXG5cdHRsLnRvKHRoaXMsIC4zLCB7b25Db21wbGV0ZVNjb3BlOnRoaXMsIG9uQ29tcGxldGU6ZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX21vb2QgPSBcIlwiO1xyXG5cdH19KTsqL1xyXG5cclxuXHRDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5fbW9vZCA9IG1vb2Q7XHJcblxyXG5cdFx0Q29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5fbW9vZCA9IFwiXCI7XHJcblx0XHR9LCAuMywgdGhpcyk7XHJcblxyXG5cdH0sICh0aGlzLmNoYXJhY3Rlck51bWJlci0xKSouMSwgdGhpcyk7XHJcbn07XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLmJ1aWxkU3BlZWQgPSBmdW5jdGlvbihzcGVlZCwgdGltZSwgZGVsYXksIG9uQ29tcGxldGUsIG9uQ29tcGxldGVTY29wZSwgb25Db21wbGV0ZVBhcmFtcylcclxue1xyXG5cdGlmKHRoaXMuZGVmYXVsdFNwZWVkID09IDApXHJcblx0XHR0aGlzLl9jb25uZWN0aW9uRW1pdHRlci5lbWl0ID0gdHJ1ZTtcclxuXHJcblx0dmFyIHByb3BzID0ge2RlZmF1bHRTcGVlZDpzcGVlZCwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9O1xyXG5cdGlmKGRlbGF5KSBwcm9wcy5kZWxheSA9IGRlbGF5O1xyXG5cdGlmKG9uQ29tcGxldGUpIHByb3BzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xyXG5cdGlmKG9uQ29tcGxldGVTY29wZSkgcHJvcHMub25Db21wbGV0ZVNjb3BlID0gb25Db21wbGV0ZVNjb3BlO1xyXG5cdGlmKG9uQ29tcGxldGVQYXJhbXMpIHByb3BzLm9uQ29tcGxldGVQYXJhbXMgPSBvbkNvbXBsZXRlUGFyYW1zO1xyXG5cclxuXHRDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMsIHRpbWUsIHByb3BzKSk7XHJcbn07XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFJJVkFURSBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLl9wcmVEaXJlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbihuZXdEaXJlY3Rpb24pXHJcbntcclxuXHRpZihuZXdEaXJlY3Rpb24gIT0gdGhpcy5kaXJlY3Rpb25PZkF2YXRhckluRnJvbnQgJiYgdGhpcy5kaXJlY3Rpb25PZkF2YXRhckluRnJvbnQgIT0gbnVsbClcclxuXHR7XHJcblx0XHRjb25zb2xlLmxvZygnPj4+Pj5ESVJFQ1RJT04gTkVFREVEIFRPIENIQU5HRTw8PDw8PCcpO1xyXG5cdFx0bmV3RGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25PZkF2YXRhckluRnJvbnQ7XHJcblx0fVxyXG5cclxuXHR0aGlzLnNldFN3aW5nKHRoaXMuZGlyZWN0aW9uLCBuZXdEaXJlY3Rpb24pO1xyXG5cclxuXHRyZXR1cm4gbmV3RGlyZWN0aW9uO1xyXG59XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLl9wb3N0RGlyZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKVxyXG57XHRcclxuXHRSYWlsUmlkZXIucHJvdG90eXBlLl9wb3N0RGlyZWN0aW9uQ2hhbmdlLmNhbGwodGhpcyk7XHJcbn1cclxuXHJcbkF2YXRhci5wcm90b3R5cGUuX25leHRSYWlsTm90Q29ubmVjdGVkID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5kaWUoKTtcclxuXHRcclxuXHRSYWlsUmlkZXIucHJvdG90eXBlLl9uZXh0UmFpbE5vdENvbm5lY3RlZC5jYWxsKHRoaXMpO1xyXG59XHJcblxyXG5BdmF0YXIucHJvdG90eXBlLl9ub05leHRSYWlsID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5kaWUoKTtcclxuXHRcclxuXHRSYWlsUmlkZXIucHJvdG90eXBlLl9ub05leHRSYWlsLmNhbGwodGhpcyk7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwiXHJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgVGV4dEl0ZW0gICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvVGV4dEl0ZW1cIik7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFTdHJpbmd9IHRleHQsXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gRGlhbG9ndWVCb3goc3RyaW5nLCBpZ25vcmVDbGljaylcclxue1xyXG4gICAgdGhpcy5fc3RyaW5nID0gc3RyaW5nO1xyXG4gICAgdGhpcy5pZ25vcmVDbGljayA9IGlnbm9yZUNsaWNrIHx8IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHJcbiAgICB0aGlzLnNpZ25hbHMgPSB7fTtcclxuICAgIHRoaXMuc2lnbmFscy5hY3RpdmF0ZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuICAgIHRoaXMuc2lnbmFscy5kZWFjdGl2YXRlZCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9ib3ggPSBudWxsO1xyXG4gICAgdGhpcy5fY291bnRlciA9IDA7XHJcblxyXG4gICAgUElYSS5Db250YWluZXIuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlQm94O1xyXG5EaWFsb2d1ZUJveC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XHJcbkRpYWxvZ3VlQm94LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERpYWxvZ3VlQm94O1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcbkRpYWxvZ3VlQm94LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLl9ib3ggPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2RpYWxvZ3VlX2JveCcpKTtcclxuICAgIHRoaXMuX2JveC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEpO1xyXG4gICAgdGhpcy5fYm94LnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xyXG4gICAgdGhpcy5fYm94LnkgPSBDb21tb24uU1RBR0VfSEVJR0hUICsgdGhpcy5fYm94LmhlaWdodDtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fYm94KTtcclxuXHJcbiAgICB2YXIgdGV4dCA9IG5ldyBUZXh0SXRlbSh0aGlzLl9zdHJpbmcpO1xyXG4gICAgdGV4dC55ID0gLTEwNTtcclxuICAgIHRoaXMuX2JveC5hZGRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JveCwgLjUsIHtkZWxheTouNSwgeTpDb21tb24uU1RBR0VfSEVJR0hULCBlYXNlOlNpbmUuZWFzZU91dCwgb25Db21wbGV0ZVNjb3BlOnRoaXMsIG9uQ29tcGxldGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaWduYWxzLmFjdGl2YXRlZC5kaXNwYXRjaCgpO1xyXG4gICAgfX0pKTtcclxufTtcclxuXHJcbkRpYWxvZ3VlQm94LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLl9ib3gucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX2JveCk7XHJcbn07XHJcblxyXG5EaWFsb2d1ZUJveC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB0aGlzLl9jb3VudGVyKys7XHJcblxyXG4gICAgaWYodGhpcy5fY291bnRlciA+PSAyMDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaWFsb2d1ZUJveC5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2lnbmFscy5kZWFjdGl2YXRlZC5kaXNwYXRjaCgpO1xyXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9ib3gsIC41LCB7eTpDb21tb24uU1RBR0VfSEVJR0hUICsgdGhpcy5fYm94LmhlaWdodCwgZWFzZTpTaW5lLmVhc2VPdXQsIG9uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlOnRoaXMuZGlzcG9zZX0pKTtcclxufVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFJJVkFURSBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBBY3RpdmVPYmplY3RcdD0gcmVxdWlyZShcIi4uL2VuZ2luZS9BY3RpdmVPYmplY3RcIik7XHJcbnZhciBFbWl0dGVyIFx0XHQ9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL0VtaXR0ZXJcIilcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBFbmVteSh0aWxlLCBkaXJlY3Rpb24pXHJcbntcclxuXHRBY3RpdmVPYmplY3QuY2FsbCh0aGlzLCB0aWxlKTtcclxuXHJcblx0dGhpcy50eXBlXHRcdFx0XHQgPSBcImVuZW15XCI7XHJcblxyXG5cdHRoaXMuZGlyZWN0aW9uXHRcdFx0ID0gZGlyZWN0aW9uO1xyXG5cdHRoaXMuYmFkR3V5TnVtYmVyXHRcdCA9IDE7XHJcblx0dGhpcy5iYWRHdXlcdFx0XHRcdCA9IG51bGw7XHJcblx0dGhpcy5hY3RpdmUgXHRcdCAgICAgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEVuZW15O1xyXG5FbmVteS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGl2ZU9iamVjdC5wcm90b3R5cGUpO1xyXG5FbmVteS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFbmVteTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuRW5lbXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLnggPSB0aGlzLnRpbGUueDtcclxuXHR0aGlzLnkgPSB0aGlzLnRpbGUueTtcclxuXHJcblx0dGhpcy50aWxlLnRleHR1cmUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnb2JzdGFjbGVfY2xvdGhlc193aGl0ZV9iYWNrXzAwMicpO1xyXG5cclxuXHR2YXIgc3ByID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdvYnN0YWNsZV9jbG90aGVzX3doaXRlX2JhY2tfMDAxJykpO1xyXG5cdHNwci5hbmNob3IueSA9IDE7XHJcblx0c3ByLnggPSAtNjQ7XHJcblx0c3ByLnkgPSAtMzQ7XHJcblx0dGhpcy50aWxlLmFkZENoaWxkKHNwcik7XHJcblxyXG5cdHRoaXMuYmFkR3V5ID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdjaGFyYWN0ZXJfYmFkXzAwMV9sZWZ0JykpO1xyXG5cdHRoaXMuYmFkR3V5LmFuY2hvci55ID0gMTtcclxuXHR0aGlzLmJhZEd1eS55ID0gLTUwO1xyXG5cdHRoaXMuYmFkR3V5LnNjYWxlLnkgPSAwO1xyXG5cdHRoaXMudGlsZS5hZGRDaGlsZCh0aGlzLmJhZEd1eSk7XHJcblxyXG5cdHZhciBzcHIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ29ic3RhY2xlX2Nsb3RoZXNfd2hpdGVfZnJvbnRfMDAxJykpO1xyXG5cdHNwci5hbmNob3IueSA9IDE7XHJcblx0c3ByLnggPSAtNjQ7XHJcblx0c3ByLnkgPSAtMzQ7XHJcblx0dGhpcy50aWxlLmFkZENoaWxkKHNwcik7XHJcblxyXG5cdHZhciBzcHIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ29ic3RhY2xlX2Nsb3RoZXNfd2hpdGVfZnJvbnRfMDAyJykpO1xyXG5cdHNwci5hbmNob3IueSA9IDE7XHJcblx0c3ByLnggPSAwO1xyXG5cdHNwci55ID0gMDtcclxuXHR0aGlzLnRpbGUuYWRkQ2hpbGQoc3ByKTtcclxuXHJcblx0QWN0aXZlT2JqZWN0LnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5FbmVteS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdFxyXG59O1xyXG5cclxuRW5lbXkucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24ocHJldmlvdXNCYWRHdXlOdW1iZXIpXHJcbntcclxuXHRpZighdGhpcy5hY3RpdmUpXHJcblx0e1xyXG5cdFx0dGhpcy5iYWRHdXlOdW1iZXIgPSBwcmV2aW91c0JhZEd1eU51bWJlcisxO1xyXG5cdFx0aWYodGhpcy5iYWRHdXlOdW1iZXIgPiAyKVxyXG5cdFx0XHR0aGlzLmJhZEd1eU51bWJlciA9IDE7XHJcblx0XHR0aGlzLmJhZEd1eS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2NoYXJhY3Rlcl9iYWRfMDAnICsgdGhpcy5iYWRHdXlOdW1iZXIudG9TdHJpbmcoKSArICdfJyArIHRoaXMuZGlyZWN0aW9uKTtcclxuXHRcdENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5iYWRHdXkuc2NhbGUsIC40LCB7eToxLCBlYXNlOlNpbmUuZWFzZUluT3V0fSkpO1xyXG5cdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Q29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ3NmeF9iYWRfZ3V5X3BvcHVwXzAnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAnYicpO1xyXG5cclxuXHRcdHZhciBlbWl0dGVyID0gRW1pdHRlci5hZGQodGhpcy50aWxlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9jbG90aGVzXzAwXCIsIFwicGFydGljbGVfY2xvdGhlc18wMVwiLCBcInBhcnRpY2xlX2Nsb3RoZXNfMDJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDTEVfZW5lbXlfY2xvdGhlc19idXJzdCwgMzAsIC0xMzAsIDEsIHRydWUsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuRW5lbXkucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHRDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuYmFkR3V5LnNjYWxlLCAuNCwge3k6MCwgZWFzZTpTaW5lLmVhc2VJbk91dH0pKTtcclxuXHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5FbmVteS5wcm90b3R5cGUub25UaWxlQ2xlYXJlZCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdEFjdGl2ZU9iamVjdC5wcm90b3R5cGUub25UaWxlQ2xlYXJlZC5jYWxsKHRoaXMpO1xyXG5cdHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG59XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgUmFpbFJpZGVyXHRcdD0gcmVxdWlyZShcIi4vUmFpbFJpZGVyXCIpO1xyXG52YXIgRW1pdHRlclx0XHRcdD0gcmVxdWlyZShcIi4uL2dlbmVyYWwvRW1pdHRlclwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBIaWdobGlnaHRBcnJvdygpXHJcbntcclxuXHR0aGlzLl9hc3NldE1hbmFnZXJcdFx0XHRcdD0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuXHR0aGlzLnRhcmdldGluZ1x0XHRcdFx0XHQ9IGZhbHNlO1xyXG5cclxuXHR0aGlzLl9zcHJpdGVcdFx0XHRcdFx0PSBudWxsO1xyXG5cdHRoaXMuX2VtaXR0ZXIgXHRcdFx0XHRcdD0gbnVsbDtcclxuXHJcblx0UmFpbFJpZGVyLmNhbGwodGhpcyk7XHJcblxyXG5cdHRoaXMuc3BlZWQgPSA4O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0QXJyb3c7XHJcbkhpZ2hsaWdodEFycm93LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmFpbFJpZGVyLnByb3RvdHlwZSk7XHJcbkhpZ2hsaWdodEFycm93LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhpZ2hsaWdodEFycm93O1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5IaWdobGlnaHRBcnJvdy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1x0XHJcblx0dGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdndWlkZV9hcnJvdycpKTtcclxuXHR0aGlzLl9zcHJpdGUuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjYpO1xyXG5cdHRoaXMuX3Nwcml0ZS55ID0gLUNvbW1vbi5yYWlsTWFuYWdlci5kaXN0YW5jZUZyb21Hcm91bmQ7XHJcblx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpO1xyXG5cclxuXHR0aGlzLl9lbWl0dGVyID0gRW1pdHRlci5hZGQodGhpcywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9zcGFya2xlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDTEVfZ2F0ZV9zcGFya3MsIDAsIC1Db21tb24ucmFpbE1hbmFnZXIuZGlzdGFuY2VGcm9tR3JvdW5kLCBudWxsLCBmYWxzZSk7XHJcblxyXG5cdFJhaWxSaWRlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuSGlnaGxpZ2h0QXJyb3cucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdFJhaWxSaWRlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcylcclxufTtcclxuXHJcbkhpZ2hsaWdodEFycm93LnByb3RvdHlwZS5zZXRUYXJnZXRpbmcgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl9zcHJpdGUucm90YXRpb24gPSAwO1xyXG5cdHRoaXMudGFyZ2V0aW5nID0gdHJ1ZTtcclxuXHJcblx0dGhpcy5fc3ByaXRlLnkgPSAtQ29tbW9uLnJhaWxNYW5hZ2VyLmRpc3RhbmNlRnJvbUdyb3VuZDtcclxuXHRDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX3Nwcml0ZSwgLjMsIHt5Oi1Db21tb24ucmFpbE1hbmFnZXIuZGlzdGFuY2VGcm9tR3JvdW5kKjEuMiwgZWFzZTpTaW5lLmVhc2VJbk91dCwgeW95bzp0cnVlLCByZXBlYXQ6LTF9KSk7XHJcbn07XHJcblxyXG5IaWdobGlnaHRBcnJvdy5wcm90b3R5cGUudW5zZXRUYXJnZXRpbmcgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLl9zcHJpdGUueSA9IC1Db21tb24ucmFpbE1hbmFnZXIuZGlzdGFuY2VGcm9tR3JvdW5kO1xyXG5cdHRoaXMudGFyZ2V0aW5nID0gZmFsc2U7XHJcblx0VHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX3Nwcml0ZSk7XHJcblx0dGhpcy5fcG9zdERpcmVjdGlvbkNoYW5nZSgpO1xyXG59O1xyXG5cclxuSGlnaGxpZ2h0QXJyb3cucHJvdG90eXBlLnNldFRhcmdldFJhaWwgPSBmdW5jdGlvbihyYWlsKVxyXG57XHJcblx0dGhpcy5jdXJyZW50UmFpbCA9IHRoaXMudGFyZ2V0UmFpbDtcclxuXHR0aGlzLnRhcmdldFJhaWwgPSByYWlsO1xyXG59O1xyXG5cclxuSGlnaGxpZ2h0QXJyb3cucHJvdG90eXBlLmJ1cnN0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dGhpcy5fZW1pdHRlci5lbWl0ID0gdHJ1ZTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbkhpZ2hsaWdodEFycm93LnByb3RvdHlwZS5fcG9zdERpcmVjdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdC8vcm90YXRlIGFycm93IGhlcmVcclxuXHJcblx0dGhpcy5fc3ByaXRlLnJvdGF0aW9uID0gQ29tbW9uLnJhaWxNYW5hZ2VyLnJhaWxDb29yZHNbdGhpcy5kaXJlY3Rpb25dLmFuZ2xlICsgKDE4MCpQSVhJLkRFR19UT19SQUQpO1xyXG5cclxuXHRSYWlsUmlkZXIucHJvdG90eXBlLl9wb3N0RGlyZWN0aW9uQ2hhbmdlLmNhbGwodGhpcyk7XHJcbn1cclxuXHJcbkhpZ2hsaWdodEFycm93LnByb3RvdHlwZS5fbmV4dFJhaWxOb3RDb25uZWN0ZWQgPSBmdW5jdGlvbigpXHJcbntcclxuXHR0aGlzLnNldFRhcmdldGluZygpO1xyXG5cdFJhaWxSaWRlci5wcm90b3R5cGUuX25leHRSYWlsTm90Q29ubmVjdGVkLmNhbGwodGhpcyk7XHJcbn1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgQWN0aXZlT2JqZWN0XHQ9IHJlcXVpcmUoXCIuLi9lbmdpbmUvQWN0aXZlT2JqZWN0XCIpO1xyXG52YXIgRW1pdHRlclx0XHRcdD0gcmVxdWlyZShcIi4uL2dlbmVyYWwvRW1pdHRlclwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBPYnN0YWNsZSh0aWxlLCBvYnN0YWNsZVR5cGUsIHBhcmVudFJhaWwpXHJcbntcclxuXHR0aGlzLm9ic3RhY2xlVHlwZVx0XHQ9IG9ic3RhY2xlVHlwZTtcclxuXHR0aGlzLnBhcmVudFJhaWxcdFx0XHQ9IHBhcmVudFJhaWw7XHJcblxyXG5cdHRoaXMuc2luZ2xlR3JhcGhpY1x0XHQ9IG51bGw7XHJcblx0dGhpcy5sZWZ0R3JhcGhpYyBcdFx0PSBudWxsO1xyXG5cdHRoaXMucmlnaHRHcmFwaGljIFx0XHQ9IG51bGw7XHJcblxyXG5cdHRoaXMuX2VtaXR0ZXJzXHRcdFx0PSBudWxsO1xyXG5cclxuXHRBY3RpdmVPYmplY3QuY2FsbCh0aGlzLCB0aWxlKTtcclxuXHJcblx0dGhpcy50eXBlXHRcdFx0PSBcIm9ic3RhY2xlXCI7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBPYnN0YWNsZTtcclxuT2JzdGFjbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3RpdmVPYmplY3QucHJvdG90eXBlKTtcclxuT2JzdGFjbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT2JzdGFjbGU7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbk9ic3RhY2xlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVx0XHJcbntcclxuXHR0aGlzLnggXHRcdFx0XHQ9IHRoaXMudGlsZS54O1xyXG5cdHRoaXMueSBcdFx0XHRcdD0gdGhpcy50aWxlLnk7XHJcblxyXG5cdHRoaXMuX2VtaXR0ZXJzXHRcdD0gW107XHJcblxyXG5cdC8qXHJcblx0dmFyIG9yaWVudGF0aW9uID0gJ2Rvd25yaWdodCc7XHJcblxyXG5cdGlmKHRoaXMucGFyZW50UmFpbC5jb25uZWN0MSA9PSAndXByaWdodCcgfHwgdGhpcy5wYXJlbnRSYWlsLmNvbm5lY3QyID09ICdkb3dubGVmdCcgfHxcclxuXHQgICB0aGlzLnBhcmVudFJhaWwuY29ubmVjdDIgPT0gJ3VwcmlnaHQnIHx8IHRoaXMucGFyZW50UmFpbC5jb25uZWN0MSA9PSAnZG93bmxlZnQnKVxyXG5cdHtcclxuXHRcdG9yaWVudGF0aW9uID0gJ2Rvd25sZWZ0JztcclxuXHR9Ki9cclxuXHJcblxyXG5cdGlmKHRoaXMub2JzdGFjbGVUeXBlID09ICdzcHJheScpXHJcblx0e1xyXG5cdFx0dGhpcy5sZWZ0R3JhcGhpYyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcIm9ic3RhY2xlX3NwcmF5XzAwMVwiKSk7XHJcblx0XHR0aGlzLnJpZ2h0R3JhcGhpYyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcIm9ic3RhY2xlX3NwcmF5XzAwMlwiKSk7XHJcblxyXG5cdFx0dmFyIGVtaXR0ZXIgPSBFbWl0dGVyLmFkZCh0aGlzLnJpZ2h0R3JhcGhpYywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcInBhcnRpY2xlX3N0ZWFtXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQQVJUSUNMRV9zdGVhbSwgKENvbW1vbi5zcXVhcmVUaWxlU2l6ZSoyKSwgLUNvbW1vbi5yYWlsTWFuYWdlci5kaXN0YW5jZUZyb21Hcm91bmQqMS4yLCBudWxsLCB0cnVlKTtcclxuXHRcdHRoaXMuX2VtaXR0ZXJzLnB1c2goZW1pdHRlcik7XHJcblxyXG5cdFx0dmFyIGVtaXR0ZXIgPSBFbWl0dGVyLmFkZCh0aGlzLmxlZnRHcmFwaGljLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1wicGFydGljbGVfc3RlYW1cIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX3N0ZWFtX29wcG9zaXRlLCAoQ29tbW9uLnNxdWFyZVRpbGVTaXplKjIpLCAtQ29tbW9uLnJhaWxNYW5hZ2VyLmRpc3RhbmNlRnJvbUdyb3VuZCoxLjIsIG51bGwsIHRydWUpO1xyXG5cdFx0dGhpcy5fZW1pdHRlcnMucHVzaChlbWl0dGVyKTtcclxuXHR9XHJcblx0ZWxzZSBpZih0aGlzLm9ic3RhY2xlVHlwZSA9PSAnZmFucycpXHJcblx0e1xyXG5cdFx0dGhpcy5zaW5nbGVHcmFwaGljID0gbmV3IHAzLk1vdmllQ2xpcCh0aGlzLl9nZW5lcmF0ZUFuaW1hdGlvblNlcXVlbmNlKFwib2JzdGFjbGVfZmFuc19cIiwgMywgMSkpO1xyXG5cdFx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0aGlzLnNpbmdsZUdyYXBoaWMpO1xyXG5cclxuXHRcdHRoaXMuc2luZ2xlR3JhcGhpYy5hbmltYXRpb25TcGVlZCA9IDUwO1xyXG5cdFx0dGhpcy5zaW5nbGVHcmFwaGljLmxvb3BpbmcgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuc2luZ2xlR3JhcGhpYy5nb3RvQW5kUGxheSgwKTtcclxuXHJcblx0XHR2YXIgZW1pdHRlciA9IEVtaXR0ZXIuYWRkKHRoaXMuc2luZ2xlR3JhcGhpYywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wicGFydGljbGVfYWlyXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2FpcnZlbnRfdmVydGljYWwsIENvbW1vbi5zcXVhcmVUaWxlU2l6ZSoyLCAtKENvbW1vbi5zcXVhcmVUaWxlU2l6ZSoyKSwgbnVsbCwgdHJ1ZSk7XHJcblx0XHR0aGlzLl9lbWl0dGVycy5wdXNoKGVtaXR0ZXIpO1xyXG5cclxuXHRcdHZhciBlbWl0dGVyID0gRW1pdHRlci5hZGQodGhpcy5zaW5nbGVHcmFwaGljLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9kdXN0XzAwMVwiLCBcInBhcnRpY2xlX2R1c3RfMDAyXCIsIFwicGFydGljbGVfZHVzdF8wMDNcIiwgXCJwYXJ0aWNsZV9kdXN0XzAwNFwiLCBcInBhcnRpY2xlX2R1c3RfMDA1XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2FpciwgMCwgMCwgbnVsbCwgdHJ1ZSk7XHJcblx0XHR0aGlzLl9lbWl0dGVycy5wdXNoKGVtaXR0ZXIpO1xyXG5cclxuXHR9XHJcblx0ZWxzZSBpZih0aGlzLm9ic3RhY2xlVHlwZSA9PSAnYnJ1c2gnKVxyXG5cdHtcclxuXHRcdHRoaXMubGVmdEdyYXBoaWMgPSBuZXcgcDMuTW92aWVDbGlwKHRoaXMuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UoXCJvYnN0YWNsZV9icnVzaF9cIiwgMywgMSkpO1xyXG5cdFx0dGhpcy5yaWdodEdyYXBoaWMgPSBuZXcgcDMuTW92aWVDbGlwKHRoaXMuX2dlbmVyYXRlQW5pbWF0aW9uU2VxdWVuY2UoXCJvYnN0YWNsZV9icnVzaF9cIiwgMywgMSkpO1xyXG5cdFx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0aGlzLmxlZnRHcmFwaGljKTtcclxuXHRcdENvbW1vbi5hbmltYXRvci5hZGQodGhpcy5yaWdodEdyYXBoaWMpO1xyXG5cclxuXHRcdHRoaXMubGVmdEdyYXBoaWMuYW5pbWF0aW9uU3BlZWQgPSB0aGlzLnJpZ2h0R3JhcGhpYy5hbmltYXRpb25TcGVlZCA9IDUwO1xyXG5cdFx0dGhpcy5sZWZ0R3JhcGhpYy5sb29waW5nID0gdGhpcy5yaWdodEdyYXBoaWMubG9vcGluZyA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5sZWZ0R3JhcGhpYy5nb3RvQW5kUGxheSgwKTtcclxuXHRcdHRoaXMucmlnaHRHcmFwaGljLmdvdG9BbmRQbGF5KDApO1xyXG5cclxuXHRcdHZhciBlbWl0dGVyID0gRW1pdHRlci5hZGQodGhpcy5sZWZ0R3JhcGhpYywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wicGFydGljbGVfYnViYmxlXzAwMVwiLCBcInBhcnRpY2xlX2J1YmJsZV8wMDJcIiwgXCJwYXJ0aWNsZV9idWJibGVfMDAzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2J1YmJsZXMsIDY0LCAtMTUwLCBudWxsLCB0cnVlKTtcclxuXHRcdHRoaXMuX2VtaXR0ZXJzLnB1c2goZW1pdHRlcik7XHJcblxyXG5cdFx0dmFyIGVtaXR0ZXIgPSBFbWl0dGVyLmFkZCh0aGlzLnJpZ2h0R3JhcGhpYywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wicGFydGljbGVfYnViYmxlXzAwMVwiLCBcInBhcnRpY2xlX2J1YmJsZV8wMDJcIiwgXCJwYXJ0aWNsZV9idWJibGVfMDAzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2J1YmJsZXMsIDY0LCAtMTUwLCBudWxsLCB0cnVlKTtcclxuXHRcdHRoaXMuX2VtaXR0ZXJzLnB1c2goZW1pdHRlcik7XHJcblx0fVxyXG5cclxuXHRpZih0aGlzLnNpbmdsZUdyYXBoaWMpXHJcblx0e1xyXG5cdFx0dGhpcy5zaW5nbGVHcmFwaGljLnggPSB0aGlzLnRpbGUueDtcclxuXHRcdHRoaXMuc2luZ2xlR3JhcGhpYy55ID0gdGhpcy50aWxlLnk7XHJcblx0XHR0aGlzLnNpbmdsZUdyYXBoaWMuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMCwgMSk7XHJcblx0fVxyXG5cclxuXHRpZih0aGlzLmxlZnRHcmFwaGljKVxyXG5cdHtcclxuXHRcdHRoaXMubGVmdEdyYXBoaWMueCA9IHRoaXMudGlsZS54IC0gKENvbW1vbi5zcXVhcmVUaWxlU2l6ZSAqIDIpO1xyXG5cdFx0dGhpcy5sZWZ0R3JhcGhpYy55ID0gdGhpcy50aWxlLnkgKyAoQ29tbW9uLnNxdWFyZVRpbGVTaXplICogMSk7XHJcblx0XHR0aGlzLmxlZnRHcmFwaGljLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAsIDEpO1xyXG5cdH1cclxuXHRpZih0aGlzLnJpZ2h0R3JhcGhpYylcclxuXHR7XHJcblx0XHR0aGlzLnJpZ2h0R3JhcGhpYy54ID0gdGhpcy50aWxlLnggKyAoQ29tbW9uLnNxdWFyZVRpbGVTaXplICogMik7XHJcblx0XHR0aGlzLnJpZ2h0R3JhcGhpYy55ID0gdGhpcy50aWxlLnkgLSAoQ29tbW9uLnNxdWFyZVRpbGVTaXplICogMSk7XHJcblx0XHR0aGlzLnJpZ2h0R3JhcGhpYy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLCAxKTtcclxuXHR9XHJcblxyXG5cdEFjdGl2ZU9iamVjdC5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuT2JzdGFjbGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXHJcbntcclxuXHR3aGlsZSh0aGlzLl9lbWl0dGVycy5sZW5ndGggPiAwKVxyXG5cdHtcclxuXHRcdEVtaXR0ZXIuZGVzdHJveSh0aGlzLl9lbWl0dGVyc1swXSk7XHJcblx0XHR0aGlzLl9lbWl0dGVycy5zcGxpY2UoMCwgMSk7XHJcblx0fVx0XHJcbn07XHJcblxyXG5PYnN0YWNsZS5wcm90b3R5cGUuY29sbGlkZSA9IGZ1bmN0aW9uKGF2YXRhcilcclxue1xyXG5cdEFjdGl2ZU9iamVjdC5wcm90b3R5cGUuY29sbGlkZS5jYWxsKHRoaXMpO1xyXG5cdHRoaXMuc2lnbmFscy5jb2xsaWRlLmRpc3BhdGNoKHRoaXMsIGF2YXRhcik7XHJcblx0XHJcblx0cmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5PYnN0YWNsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpXHJcbntcclxuXHRpZih0aGlzLnNpbmdsZUdyYXBoaWMgaW5zdGFuY2VvZiBwMy5Nb3ZpZUNsaXApXHJcblx0XHR0aGlzLnNpbmdsZUdyYXBoaWMuc3RvcCgpO1xyXG5cdGlmKHRoaXMubGVmdEdyYXBoaWMgaW5zdGFuY2VvZiBwMy5Nb3ZpZUNsaXApXHJcblx0XHR0aGlzLmxlZnRHcmFwaGljLnN0b3AoKTtcclxuXHRpZih0aGlzLnJpZ2h0R3JhcGhpYyBpbnN0YW5jZW9mIHAzLk1vdmllQ2xpcClcclxuXHRcdHRoaXMucmlnaHRHcmFwaGljLnN0b3AoKTtcclxufVxyXG5cclxuT2JzdGFjbGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGlmKHRoaXMuc2luZ2xlR3JhcGhpYyBpbnN0YW5jZW9mIHAzLk1vdmllQ2xpcClcclxuXHRcdHRoaXMuc2luZ2xlR3JhcGhpYy5wbGF5KCk7XHJcblx0aWYodGhpcy5sZWZ0R3JhcGhpYyBpbnN0YW5jZW9mIHAzLk1vdmllQ2xpcClcclxuXHRcdHRoaXMubGVmdEdyYXBoaWMucGxheSgpO1xyXG5cdGlmKHRoaXMucmlnaHRHcmFwaGljIGluc3RhbmNlb2YgcDMuTW92aWVDbGlwKVxyXG5cdFx0dGhpcy5yaWdodEdyYXBoaWMucGxheSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbk9ic3RhY2xlLnByb3RvdHlwZS5vblRpbGVDbGVhcmVkID0gZnVuY3Rpb24oKVxyXG57XHJcblx0QWN0aXZlT2JqZWN0LnByb3RvdHlwZS5vblRpbGVDbGVhcmVkLmNhbGwodGhpcyk7XHJcblx0dGhpcy5kaXNwb3NlKCk7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBBY3RpdmVPYmplY3RcdD0gcmVxdWlyZShcIi4uL2VuZ2luZS9BY3RpdmVPYmplY3RcIik7XHJcbnZhciBFbWl0dGVyXHRcdFx0PSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9FbWl0dGVyXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFBvd2VyVXAodGlsZSwgcG93ZXJVcFR5cGUpXHJcbntcclxuXHR0aGlzLnBvd2VyVXBUeXBlXHQ9IHBvd2VyVXBUeXBlO1xyXG5cdHRoaXMuZ3JhcGhpY1x0XHQ9IG51bGw7XHJcblx0XHJcblx0dGhpcy5jaXJjbGUgXHRcdD0gbnVsbDtcclxuXHR0aGlzLmNvbGxlY3RlZFx0XHQ9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmF1cmEgXHRcdFx0PSBudWxsO1xyXG5cdHRoaXMucGFydGljbGVcdFx0PSBudWxsO1xyXG5cclxuXHRBY3RpdmVPYmplY3QuY2FsbCh0aGlzLCB0aWxlKTtcclxuXHJcblx0dGhpcy50eXBlXHRcdFx0PSBcInBvd2VydXBcIjtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvd2VyVXA7XHJcblBvd2VyVXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3RpdmVPYmplY3QucHJvdG90eXBlKTtcclxuUG93ZXJVcC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQb3dlclVwO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5Qb3dlclVwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVx0XHJcbntcclxuXHR0aGlzLnggXHRcdFx0XHQ9IHRoaXMudGlsZS54O1xyXG5cdHRoaXMueSBcdFx0XHRcdD0gdGhpcy50aWxlLnk7XHJcblxyXG5cdHRoaXMuZ3JhcGhpYyBcdFx0PSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHR0aGlzLmdyYXBoaWMueCBcdFx0PSB0aGlzLnRpbGUueDtcclxuXHR0aGlzLmdyYXBoaWMueSBcdFx0PSB0aGlzLnRpbGUueTtcclxuXHJcblx0dGhpcy5hdXJhID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdjb2xsZWN0YWJsZV8nICsgKHRoaXMucG93ZXJVcFR5cGUgPT0gJ3NoaWVsZCcgPyAnc2hlaWxkJyA6IHRoaXMucG93ZXJVcFR5cGUpICsgJ19hdXJhJykpO1xyXG5cdHRoaXMuYXVyYS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcblx0dGhpcy5ncmFwaGljLmFkZENoaWxkKHRoaXMuYXVyYSk7XHJcblx0Q29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLmF1cmEsIDAuOSArIChNYXRoLnJhbmRvbSgpKi4xKSwge2FscGhhOjAuMiwgZWFzZTpTaW5lLmVhc2VJbk91dCwgeW95bzp0cnVlLCByZXBlYXQ6LTF9KSk7XHJcblxyXG5cdHRoaXMuY2lyY2xlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdjb2xsZWN0YWJsZV8nICsgKHRoaXMucG93ZXJVcFR5cGUgPT0gJ3NoaWVsZCcgPyAnc2hlaWxkJyA6IHRoaXMucG93ZXJVcFR5cGUpICsgJ19pY29uJykpO1xyXG5cdHRoaXMuY2lyY2xlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcclxuXHR0aGlzLmNpcmNsZS55ID0gLUNvbW1vbi5yYWlsTWFuYWdlci5kaXN0YW5jZUZyb21Hcm91bmQgKyAyMDtcclxuXHR0aGlzLmNpcmNsZS54ID0gQ29tbW9uLnNxdWFyZVRpbGVTaXplICogMjtcclxuXHR0aGlzLmdyYXBoaWMuYWRkQ2hpbGQodGhpcy5jaXJjbGUpO1xyXG5cclxuXHR0aGlzLmF1cmEueCA9IHRoaXMuY2lyY2xlLng7XHJcblx0dGhpcy5hdXJhLnkgPSB0aGlzLmNpcmNsZS55O1xyXG5cclxuXHR0aGlzLnBhcnRpY2xlID0gRW1pdHRlci5hZGQodGhpcy5ncmFwaGljLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9zcGFya2xlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2NvbGxlY3RhYmxlLCB0aGlzLmNpcmNsZS54LCB0aGlzLmNpcmNsZS55LCBudWxsLCB0cnVlKTtcclxuXHJcblxyXG5cdEFjdGl2ZU9iamVjdC5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuUG93ZXJVcC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cclxufTtcclxuXHJcblBvd2VyVXAucHJvdG90eXBlLmNvbGxpZGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHRBY3RpdmVPYmplY3QucHJvdG90eXBlLmNvbGxpZGUuY2FsbCh0aGlzKTtcclxuXHJcblx0aWYodGhpcy5jb2xsZWN0ZWQpXHJcblx0e1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Q29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLmNpcmNsZS5zY2FsZSwgLjIsIHt4OjAsIHk6MCwgZWFzZTpTaW5lLmVhc2VJbk91dH0pKTtcclxuXHRcdHRoaXMuY29sbGVjdGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuc2lnbmFscy5jb2xsaWRlLmRpc3BhdGNoKHRoaXMpO1xyXG5cdFx0VHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuYXVyYSk7XHJcblx0XHR0aGlzLmdyYXBoaWMucmVtb3ZlQ2hpbGQodGhpcy5hdXJhKTtcclxuXHRcdEVtaXR0ZXIuZGVzdHJveSh0aGlzLnBhcnRpY2xlLCAuNCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblBvd2VyVXAucHJvdG90eXBlLm9uVGlsZUNsZWFyZWQgPSBmdW5jdGlvbigpXHJcbntcclxuXHRBY3RpdmVPYmplY3QucHJvdG90eXBlLm9uVGlsZUNsZWFyZWQuY2FsbCh0aGlzKTtcclxuXHR0aGlzLmRpc3Bvc2UoKTtcclxufVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4iLCJ2YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxudmFyIEFjdGl2ZU9iamVjdFx0PSByZXF1aXJlKFwiLi4vZW5naW5lL0FjdGl2ZU9iamVjdFwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBSYWlsKGNvbm5lY3QxLCBjb25uZWN0MiwgdGlsZSlcclxue1xyXG5cdHRoaXMuY29ubmVjdDFcdFx0IFx0PSBjb25uZWN0MTtcclxuXHR0aGlzLmNvbm5lY3QyXHRcdCBcdD0gY29ubmVjdDI7XHJcblx0dGhpcy5zaGFkb3dcdFx0XHRcdD0gbnVsbDtcclxuXHQvL3RoaXMuaGlnaGxpZ2h0XHRcdD0gbnVsbDtcclxuXHJcblx0dGhpcy5jZW50cmVcdFx0XHQgXHQgPSBudWxsO1xyXG5cdHRoaXMubmVpZ2hib3VyQ29vcmRzIFx0ID0gbnVsbDtcclxuXHJcblx0dGhpcy5zd2l0Y2hTdGF0ZXMgXHRcdCA9IG51bGw7XHJcblx0dGhpcy5jdXJyZW50U3dpdGNoU3RhdGVcdCA9IDA7XHJcblx0dGhpcy5zd2l0Y2hPcmlnaW5cdFx0ID0gbnVsbDtcclxuXHR0aGlzLnJhaWxKdW5jdGlvblx0XHQgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5fYWN0aXZlVGludFx0IFx0ID0gMHhGMDFEMjA7XHJcblx0dGhpcy5fc3dpdGNoZWRUaW50XHRcdCA9IDB4QUJBQkE5O1xyXG5cclxuXHRBY3RpdmVPYmplY3QuY2FsbCh0aGlzLCB0aWxlKTtcclxuXHJcblx0dGhpcy50eXBlXHRcdFx0XHQgPSBcInJhaWxcIjtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFJhaWw7XHJcblJhaWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBY3RpdmVPYmplY3QucHJvdG90eXBlKTtcclxuUmFpbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSYWlsO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5SYWlsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0dmFyIHNxID0gQ29tbW9uLnNxdWFyZVRpbGVTaXplO1xyXG5cdHZhciBldmVuID0gdGhpcy5yb3cgJSAyID09IDA7XHJcblxyXG5cdHRoaXMueCA9IHRoaXMudGlsZS54O1xyXG5cdHRoaXMueSA9IHRoaXMudGlsZS55O1xyXG5cclxuXHR0aGlzLmNlbnRyZSA9IG5ldyBQSVhJLlBvaW50KHRoaXMueCsoc3EqMiksIHRoaXMueS1zcSk7XHJcblxyXG5cdHRoaXMubmVpZ2hib3VyQ29vcmRzID0ge1xyXG5cdFx0XCJ1cFwiOntjb2w6MCwgcm93Oi0yfSxcclxuXHRcdFwiZG93blwiOntjb2w6MCwgcm93OjJ9LFxyXG5cdFx0XCJsZWZ0XCI6e2NvbDotMSwgcm93OjB9LFxyXG5cdFx0XCJyaWdodFwiOntjb2w6MSwgcm93OjB9LFxyXG5cdFx0XCJ1cGxlZnRcIjp7Y29sOiBldmVuID8gLTEgOiAwLCByb3c6LTF9LFxyXG5cdFx0XCJ1cHJpZ2h0XCI6e2NvbDogZXZlbiA/IDAgOiAxLCByb3c6LTF9LFxyXG5cdFx0XCJkb3ducmlnaHRcIjp7Y29sOiBldmVuID8gMCA6IDEsIHJvdzoxfSxcclxuXHRcdFwiZG93bmxlZnRcIjp7Y29sOiBldmVuID8gLTEgOiAwLCByb3c6MX1cclxuXHR9O1xyXG5cclxuXHRBY3RpdmVPYmplY3QucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblJhaWwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXHJcbntcclxuXHJcbn07XHJcblxyXG5SYWlsLnByb3RvdHlwZS5oYXNDb25uZWN0aW9uID0gZnVuY3Rpb24oZGlyZWN0aW9uKVxyXG57XHJcblx0aWYodGhpcy5jb25uZWN0MSA9PSBkaXJlY3Rpb24gfHwgdGhpcy5jb25uZWN0MiA9PSBkaXJlY3Rpb24pXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0cmV0dXJuIGZhbHNlO1x0XHJcbn1cclxuXHJcblJhaWwucHJvdG90eXBlLmdldE9wcG9zaXRlRW5kID0gZnVuY3Rpb24oZGlyZWN0aW9uKVxyXG57XHJcblx0aWYodGhpcy5jb25uZWN0MSA9PSBkaXJlY3Rpb24pXHJcblx0XHRyZXR1cm4gdGhpcy5jb25uZWN0MjtcclxuXHRlbHNlIGlmKHRoaXMuY29ubmVjdDIgPT0gZGlyZWN0aW9uKVxyXG5cdFx0cmV0dXJuIHRoaXMuY29ubmVjdDE7XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuUmFpbC5wcm90b3R5cGUuYXBwbHlTd2l0Y2hTdGF0ZXMgPSBmdW5jdGlvbihzd2l0Y2hPcmlnaW4sIHN3aXRjaFN0YXRlcylcclxue1xyXG5cdGlmKHRoaXMuc3dpdGNoU3RhdGVzID09IG51bGwpXHJcblx0e1xyXG5cdFx0dGhpcy5zd2l0Y2hTdGF0ZXMgPSBbXTtcclxuXHRcdHZhciBvcmRlckFycmF5ID0gWydsZWZ0JywgJ3VwbGVmdCcsICd1cCcsICd1cHJpZ2h0JywgJ3JpZ2h0JywgJ2Rvd25yaWdodCcsICdkb3duJywgJ2Rvd25sZWZ0J107XHJcblx0XHRjb25zb2xlLmxvZyhzd2l0Y2hTdGF0ZXMpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG9yZGVyQXJyYXkubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBzd2l0Y2hTdGF0ZXMubGVuZ3RoOyBqKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZihvcmRlckFycmF5W2ldID09IHN3aXRjaFN0YXRlc1tqXSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnN3aXRjaFN0YXRlcy5wdXNoKHN3aXRjaFN0YXRlc1tqXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0LypcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzd2l0Y2hTdGF0ZXMubGVuZ3RoOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc3dpdGNoU3RhdGVzLnB1c2goc3dpdGNoU3RhdGVzW2ldKTtcclxuXHRcdH0qL1xyXG5cclxuXHRcdHRoaXMuc3dpdGNoT3JpZ2luID0gc3dpdGNoT3JpZ2luO1xyXG5cclxuXHRcdHRoaXMuY3VycmVudFN3aXRjaFN0YXRlID0gMDtcclxuXHJcblx0XHRpZigodGhpcy5jb25uZWN0MSA9PSB0aGlzLnN3aXRjaE9yaWdpbiAmJiB0aGlzLmNvbm5lY3QyID09IHRoaXMuc3dpdGNoU3RhdGVzWzFdKSB8fCBcclxuXHRcdCAgICh0aGlzLmNvbm5lY3QxID09IHRoaXMuc3dpdGNoU3RhdGVzWzFdICYmIHRoaXMuY29ubmVjdDIgPT0gdGhpcy5zd2l0Y2hPcmlnaW4pKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmN5Y2xlU3dpdGNoU3RhdGVzKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRpbGUudGludCA9IHRoaXMuX2FjdGl2ZVRpbnQ7XHJcblx0fVxyXG59XHJcblxyXG5SYWlsLnByb3RvdHlwZS5jeWNsZVN3aXRjaFN0YXRlcyA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHZhciBjMSA9IHRoaXMuY29ubmVjdDE7XHJcblx0dmFyIGMyID0gdGhpcy5jb25uZWN0MjtcclxuXHR2YXIgc3MgPSB0aGlzLmN1cnJlbnRTd2l0Y2hTdGF0ZTtcclxuXHJcblx0dGhpcy5jdXJyZW50U3dpdGNoU3RhdGUrKztcclxuXHRpZih0aGlzLmN1cnJlbnRTd2l0Y2hTdGF0ZSA+IHRoaXMuc3dpdGNoU3RhdGVzLmxlbmd0aC0xKVxyXG5cdFx0dGhpcy5jdXJyZW50U3dpdGNoU3RhdGUgPSAwO1xyXG5cdHRoaXMuc2V0U3dpdGNoU3RhdGVzKCk7XHJcblxyXG5cdGlmKHNzID09IHRoaXMuY3VycmVudFN3aXRjaFN0YXRlKVxyXG5cdFx0dGhpcy50aWxlLnRpbnQgPSB0aGlzLl9zd2l0Y2hlZFRpbnQ7XHJcblxyXG5cdGlmKGMxICE9IHRoaXMuY29ubmVjdDEgfHwgYzIgIT0gdGhpcy5jb25uZWN0MilcclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblJhaWwucHJvdG90eXBlLnNldFN3aXRjaFN0YXRlcyA9IGZ1bmN0aW9uKClcclxue1xyXG5cdHRoaXMuY29ubmVjdDEgPSB0aGlzLnN3aXRjaE9yaWdpbjtcclxuXHR0aGlzLmNvbm5lY3QyID0gdGhpcy5zd2l0Y2hTdGF0ZXNbdGhpcy5jdXJyZW50U3dpdGNoU3RhdGVdO1xyXG5cdHZhciB0ZXh0dXJlID0gQ29tbW9uLnJhaWxNYW5hZ2VyLmdldFRleHR1cmVCeUNvbm5lY3RzKHRoaXMuY29ubmVjdDEsIHRoaXMuY29ubmVjdDIpO1xyXG5cdHRoaXMudGlsZS5jaGFuZ2VUZXh0dXJlKHRleHR1cmUpO1xyXG5cdGlmKHRoaXMuc2hhZG93KVxyXG5cdFx0dGhpcy5zaGFkb3cuY2hhbmdlVGV4dHVyZSh0ZXh0dXJlICsgJ19zaGFkb3cnKTtcdFxyXG59XHJcblxyXG5SYWlsLnByb3RvdHlwZS5jb21wbGV0ZVN3aXRjaCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGlmKHRoaXMuc3dpdGNoU3RhdGVzICE9IG51bGwpXHJcblx0e1xyXG5cdFx0dGhpcy5zd2l0Y2hTdGF0ZXMgPSBudWxsO1xyXG5cdFx0dGhpcy50aWxlLnRpbnQgPSB0aGlzLl9zd2l0Y2hlZFRpbnQ7XHJcblx0fVxyXG59XHJcblxyXG5SYWlsLnByb3RvdHlwZS5hZGRTaGFkb3cgPSBmdW5jdGlvbihzaGFkb3cpXHJcbntcclxuXHR0aGlzLnNoYWRvdyA9IHNoYWRvdztcclxuXHR0aGlzLnNoYWRvdy50aW50ID0gMHhGMEY1Rjc7XHJcbn1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFJJVkFURSBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuUmFpbC5wcm90b3R5cGUub25UaWxlQ2xlYXJlZCA9IGZ1bmN0aW9uKClcclxue1xyXG5cdEFjdGl2ZU9iamVjdC5wcm90b3R5cGUub25UaWxlQ2xlYXJlZC5jYWxsKHRoaXMpO1xyXG5cdHRoaXMudGlsZS50aW50ID0gMHhGRkZGRkY7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBSYWlsXHRcdFx0PSByZXF1aXJlKFwiLi9SYWlsXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFJhaWxKdW5jdGlvbihjb25uZWN0MSwgY29ubmVjdDIsIGNvbm5lY3QzLCB0aWxlKVxyXG57XHJcblx0UmFpbC5jYWxsKHRoaXMsIGNvbm5lY3QxLCBjb25uZWN0MywgdGlsZSk7XHJcblxyXG5cdHRoaXMuY29ubmVjdE9wdGlvbjFcdFx0PSBjb25uZWN0MTtcclxuXHR0aGlzLmNvbm5lY3RPcHRpb24yXHRcdD0gY29ubmVjdDI7XHJcblx0dGhpcy5yYWlsSnVuY3Rpb24gXHRcdD0gdHJ1ZTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFJhaWxKdW5jdGlvbjtcclxuUmFpbEp1bmN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmFpbC5wcm90b3R5cGUpO1xyXG5SYWlsSnVuY3Rpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmFpbEp1bmN0aW9uO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5SYWlsSnVuY3Rpb24ucHJvdG90eXBlLnN3YXBKdW5jdGlvbiA9IGZ1bmN0aW9uKClcclxue1xyXG5cdGlmKHRoaXMuY29ubmVjdDEgPT0gdGhpcy5jb25uZWN0T3B0aW9uMSlcclxuXHRcdHRoaXMuY29ubmVjdDEgPSB0aGlzLmNvbm5lY3RPcHRpb24yO1xyXG5cdGVsc2UgaWYodGhpcy5jb25uZWN0MSA9PSB0aGlzLmNvbm5lY3RPcHRpb24yKVxyXG5cdFx0dGhpcy5jb25uZWN0MSA9IHRoaXMuY29ubmVjdE9wdGlvbjE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFJhaWxSaWRlcigpXHJcbntcclxuXHR0aGlzLl9hc3NldE1hbmFnZXJcdFx0XHRcdD0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuXHR0aGlzLnNpZ25hbHMgXHRcdFx0XHRcdD0ge307XHJcblx0dGhpcy5zaWduYWxzLnRhcmdldFJhaWxSZWFjaGVkIFx0PSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuXHJcblx0dGhpcy5zcGVlZFx0XHRcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLnhTcGVlZFx0XHRcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLnlTcGVlZFx0XHRcdFx0XHRcdD0gbnVsbDtcclxuXHR0aGlzLmRpcmVjdGlvblx0XHRcdFx0XHQ9IG51bGw7XHJcblx0dGhpcy5jdXJyZW50UmFpbFx0XHRcdFx0PSBudWxsO1xyXG5cdHRoaXMudGFyZ2V0UmFpbFx0XHRcdFx0XHQ9IG51bGw7XHJcblxyXG5cdFBJWEkuQ29udGFpbmVyLmNhbGwodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBSYWlsUmlkZXI7XHJcblJhaWxSaWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XHJcblJhaWxSaWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSYWlsUmlkZXI7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblJhaWxSaWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1x0XHJcblxyXG59O1xyXG5cclxuUmFpbFJpZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgYW5nID0gQ29tbW9uLnJhaWxNYW5hZ2VyLnJhaWxDb29yZHNbdGhpcy5kaXJlY3Rpb25dLmFuZ2xlO1xyXG5cdHRoaXMueFNwZWVkID0gLTEgKiAoLU1hdGguc2luKGFuZykgKiB0aGlzLnNwZWVkKTtcclxuXHR0aGlzLnlTcGVlZCA9IC0xICogKE1hdGguY29zKGFuZykgKiB0aGlzLnNwZWVkKTtcclxuXHJcblx0dmFyIHRhcmdldFBvaW50ID0gbnVsbDtcclxuXHJcblx0aWYodGhpcy50YXJnZXRSYWlsKVxyXG5cdHtcclxuXHRcdHRhcmdldFBvaW50ID0gdGhpcy50YXJnZXRSYWlsLmNlbnRyZTtcclxuXHR9XHJcblx0ZWxzZSBpZih0aGlzLmN1cnJlbnRSYWlsKVxyXG5cdHtcclxuXHRcdHRhcmdldFBvaW50ID0gbmV3IFBJWEkuUG9pbnQodGhpcy5jdXJyZW50UmFpbC5jZW50cmUueCArIENvbW1vbi5yYWlsTWFuYWdlci5yYWlsQ29vcmRzW3RoaXMuZGlyZWN0aW9uXS54LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgdGhpcy5jdXJyZW50UmFpbC5jZW50cmUueSArIENvbW1vbi5yYWlsTWFuYWdlci5yYWlsQ29vcmRzW3RoaXMuZGlyZWN0aW9uXS55KTtcclxuXHR9XHJcblxyXG5cdGlmKHRhcmdldFBvaW50KVxyXG5cdHtcclxuXHRcdHZhciBwYXNzZWRYID0gbnVsbDtcclxuXHRcdHZhciBwYXNzZWRZID0gbnVsbDtcclxuXHJcblx0XHRpZih0aGlzLmRpcmVjdGlvbi5pbmRleE9mKCdyaWdodCcpID4gLTEpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMueCA8PSB0YXJnZXRQb2ludC54ICYmIHRoaXMueCArIHRoaXMueFNwZWVkID4gdGFyZ2V0UG9pbnQueClcclxuXHRcdFx0XHRwYXNzZWRYID0gdGFyZ2V0UG9pbnQueCAtIHRoaXMueDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodGhpcy5kaXJlY3Rpb24uaW5kZXhPZignbGVmdCcpID4gLTEpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMueCA+PSB0YXJnZXRQb2ludC54ICYmIHRoaXMueCArIHRoaXMueFNwZWVkIDwgdGFyZ2V0UG9pbnQueClcclxuXHRcdFx0XHRwYXNzZWRYID0gdGhpcy54IC0gdGFyZ2V0UG9pbnQueDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cGFzc2VkWCA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYocGFzc2VkWCAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmRpcmVjdGlvbi5pbmRleE9mKCdkb3duJykgPiAtMSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKHRoaXMueSA8PSB0YXJnZXRQb2ludC55ICYmIHRoaXMueSArIHRoaXMueVNwZWVkID4gdGFyZ2V0UG9pbnQueSlcclxuXHRcdFx0XHRcdHBhc3NlZFkgPSB0YXJnZXRQb2ludC55IC0gdGhpcy55O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYodGhpcy5kaXJlY3Rpb24uaW5kZXhPZigndXAnKSA+IC0xKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYodGhpcy55ID49IHRhcmdldFBvaW50LnkgJiYgdGhpcy55ICsgdGhpcy55U3BlZWQgPCB0YXJnZXRQb2ludC55KVxyXG5cdFx0XHRcdFx0cGFzc2VkWSA9IHRoaXMueSAtIHRhcmdldFBvaW50Lnk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFzc2VkWSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihwYXNzZWRYICE9IG51bGwgJiYgcGFzc2VkWSAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLnRhcmdldFJhaWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgbmV3RGlyZWN0aW9uID0gdGhpcy50YXJnZXRSYWlsLmdldE9wcG9zaXRlRW5kKENvbW1vbi5yYWlsTWFuYWdlci5nZXRPcHBvc2l0ZURpcmVjdGlvbih0aGlzLmRpcmVjdGlvbikpO1xyXG5cclxuXHRcdFx0XHRpZihuZXdEaXJlY3Rpb24gIT0gbnVsbCAmJiBuZXdEaXJlY3Rpb24gIT0gJ2VuZCcpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmV3RGlyZWN0aW9uID0gdGhpcy5fcHJlRGlyZWN0aW9uQ2hhbmdlKG5ld0RpcmVjdGlvbik7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XHJcblx0XHRcdFx0XHR0aGlzLnggPSB0aGlzLnRhcmdldFJhaWwuY2VudHJlLng7XHJcblx0XHRcdFx0XHR0aGlzLnkgPSB0aGlzLnRhcmdldFJhaWwuY2VudHJlLnk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5fcG9zdERpcmVjdGlvbkNoYW5nZSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgcGVyY2VudCA9IDEgLSBNYXRoLm1heChwYXNzZWRYIC8gTWF0aC5hYnModGhpcy54U3BlZWQpIHx8IDAsIHBhc3NlZFkgLyBNYXRoLmFicyh0aGlzLnlTcGVlZCkgfHwgMCk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGFuZyA9IENvbW1vbi5yYWlsTWFuYWdlci5yYWlsQ29vcmRzW3RoaXMuZGlyZWN0aW9uXS5hbmdsZTtcclxuXHRcdFx0XHRcdHRoaXMueFNwZWVkID0gLTEgKiAoLU1hdGguc2luKGFuZykgKiB0aGlzLnNwZWVkICogcGVyY2VudCk7XHJcblx0XHRcdFx0XHR0aGlzLnlTcGVlZCA9IC0xICogKE1hdGguY29zKGFuZykgKiB0aGlzLnNwZWVkICogcGVyY2VudCk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zaWduYWxzLnRhcmdldFJhaWxSZWFjaGVkLmRpc3BhdGNoKHRoaXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5fbmV4dFJhaWxOb3RDb25uZWN0ZWQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fbm9OZXh0UmFpbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLnggKz0gdGhpcy54U3BlZWQ7XHJcblx0dGhpcy55ICs9IHRoaXMueVNwZWVkO1xyXG59O1xyXG5cclxuUmFpbFJpZGVyLnByb3RvdHlwZS5zZXRUYXJnZXRSYWlsID0gZnVuY3Rpb24ocmFpbClcclxue1xyXG5cdHRoaXMuY3VycmVudFJhaWwgPSB0aGlzLnRhcmdldFJhaWw7XHJcblx0aWYodGhpcy5jdXJyZW50UmFpbClcclxuXHRcdHRoaXMuY3VycmVudFJhaWwuY29tcGxldGVTd2l0Y2goKTtcclxuXHR0aGlzLnRhcmdldFJhaWwgPSByYWlsO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblJhaWxSaWRlci5wcm90b3R5cGUuX3ByZURpcmVjdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKG5ld0RpcmVjdGlvbilcclxue1xyXG5cdHJldHVybiBuZXdEaXJlY3Rpb247XHJcbn1cclxuXHJcblJhaWxSaWRlci5wcm90b3R5cGUuX3Bvc3REaXJlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbigpXHJcbntcclxuXHJcbn1cclxuXHJcblJhaWxSaWRlci5wcm90b3R5cGUuX25leHRSYWlsTm90Q29ubmVjdGVkID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59XHJcblxyXG5SYWlsUmlkZXIucHJvdG90eXBlLl9ub05leHRSYWlsID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgQWN0aXZlT2JqZWN0XHQ9IHJlcXVpcmUoXCIuLi9lbmdpbmUvQWN0aXZlT2JqZWN0XCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFNoYWRvdyh3aWR0aCwgaGVpZ2h0KVxyXG57XHJcblx0dGhpcy5fYXNzZXRNYW5hZ2VyXHQ9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHR0aGlzLl93aWR0aFx0XHRcdD0gd2lkdGg7XHJcblx0dGhpcy5faGVpZ2h0XHRcdD0gaGVpZ2h0O1xyXG5cclxuXHR0aGlzLmdyYXBoaWMgXHRcdD0gbnVsbDtcclxuXHJcblx0UElYSS5Db250YWluZXIuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRvdztcclxuU2hhZG93LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuU2hhZG93LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNoYWRvdztcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuU2hhZG93LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Lyp0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuXHR0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbCgweDAwMDAwMCk7XHJcblx0dGhpcy5ncmFwaGljcy5hbHBoYSA9IDAuMTtcclxuXHR0aGlzLmdyYXBoaWNzLmRyYXdFbGxpcHNlKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG5cdHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7Ki9cclxuXHJcblx0dGhpcy5ncmFwaGljID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2hhZG93X2Rvd25cIikpO1xyXG5cdHRoaXMuZ3JhcGhpYy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcblx0dGhpcy5hZGRDaGlsZCh0aGlzLmdyYXBoaWMpO1xyXG5cclxufTtcclxuXHJcblNoYWRvdy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcblxyXG59O1xyXG5cclxuU2hhZG93LnByb3RvdHlwZS5zZXRBbmdsZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbilcclxue1xyXG5cdGlmKGRpcmVjdGlvbiA9PSBcImRvd25sZWZ0XCIpXHJcblx0XHR0aGlzLmdyYXBoaWMudGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2hhZG93X2Rvd25fbGVmdFwiKTtcclxuXHRlbHNlIGlmKGRpcmVjdGlvbiA9PSBcImRvd25yaWdodFwiKVxyXG5cdFx0dGhpcy5ncmFwaGljLnRleHR1cmUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInNoYWRvd19kb3duX3JpZ2h0XCIpO1xyXG5cdGVsc2UgaWYoZGlyZWN0aW9uID09IFwidXBsZWZ0XCIpXHJcblx0XHR0aGlzLmdyYXBoaWMudGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2hhZG93X3VwX2xlZnRcIik7XHJcblx0ZWxzZSBpZihkaXJlY3Rpb24gPT0gXCJ1cHJpZ2h0XCIpXHJcblx0XHR0aGlzLmdyYXBoaWMudGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2hhZG93X3VwX3JpZ2h0XCIpO1xyXG5cdGVsc2VcclxuXHRcdHRoaXMuZ3JhcGhpYy50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzaGFkb3dfXCIgKyBkaXJlY3Rpb24pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFJJVkFURSBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBBY3RpdmVPYmplY3RcdD0gcmVxdWlyZShcIi4uL2VuZ2luZS9BY3RpdmVPYmplY3RcIik7XHJcbnZhciBFbWl0dGVyIFx0XHQ9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL0VtaXR0ZXJcIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gVG9rZW4odGlsZSlcclxue1xyXG5cdHRoaXMuZ3JhcGhpY1x0XHQ9IG51bGw7XHJcblx0XHJcblx0dGhpcy5zcHJpdGUgXHRcdD0gbnVsbDtcclxuXHR0aGlzLmNvbGxlY3RlZFx0XHQ9IGZhbHNlO1xyXG5cclxuXHR0aGlzLm1hZ25ldFRhcmdldFx0PSBudWxsO1xyXG5cdHRoaXMubWFnbmV0U3RhcnRcdD0gbnVsbDtcclxuXHR0aGlzLm1hZ25ldFZhbHVlXHQ9IDA7XHJcblxyXG5cdEFjdGl2ZU9iamVjdC5jYWxsKHRoaXMsIHRpbGUpO1xyXG5cclxuXHR0aGlzLnR5cGVcdFx0XHQ9IFwidG9rZW5cIjtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xyXG5Ub2tlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFjdGl2ZU9iamVjdC5wcm90b3R5cGUpO1xyXG5Ub2tlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUb2tlbjtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVG9rZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHRcclxue1xyXG5cdHRoaXMueCBcdFx0XHRcdD0gdGhpcy50aWxlLng7XHJcblx0dGhpcy55IFx0XHRcdFx0PSB0aGlzLnRpbGUueTtcclxuXHJcblx0dGhpcy5ncmFwaGljIFx0XHQ9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cdHRoaXMuZ3JhcGhpYy54IFx0XHQ9IHRoaXMudGlsZS54O1xyXG5cdHRoaXMuZ3JhcGhpYy55IFx0XHQ9IHRoaXMudGlsZS55O1xyXG5cclxuXHR0aGlzLnNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNvaW5fMDAxXCIpKTtcclxuXHR0aGlzLnNwcml0ZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcblx0dGhpcy5zcHJpdGUueSA9IC1Db21tb24ucmFpbE1hbmFnZXIuZGlzdGFuY2VGcm9tR3JvdW5kICsgMjA7XHJcblx0dGhpcy5zcHJpdGUueCA9IENvbW1vbi5zcXVhcmVUaWxlU2l6ZSAqIDI7XHJcblx0dGhpcy5ncmFwaGljLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcclxuXHJcblx0QWN0aXZlT2JqZWN0LnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5Ub2tlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0QWN0aXZlT2JqZWN0LnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcclxuXHR0aGlzLnNwcml0ZS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjb2luXzAwXCIgKyAoTWF0aC5mbG9vcigoQ29tbW9uLmZyYW1lQ291bnQgJSAyNCkvNCkrMSkpO1xyXG59XHJcblxyXG5Ub2tlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cclxufTtcclxuXHJcblRva2VuLnByb3RvdHlwZS5jb2xsaWRlID0gZnVuY3Rpb24oKVxyXG57XHJcblx0QWN0aXZlT2JqZWN0LnByb3RvdHlwZS5jb2xsaWRlLmNhbGwodGhpcyk7XHJcblxyXG5cdGlmKHRoaXMuY29sbGVjdGVkKVxyXG5cdHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHRoaXMuY29sbGVjdEFuaW1hdGlvbigpO1xyXG5cdFx0dGhpcy5jb2xsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5zaWduYWxzLmNvbGxpZGUuZGlzcGF0Y2godGhpcyk7XHJcblx0XHR2YXIgZW1pdHRlciA9IEVtaXR0ZXIuYWRkKHRoaXMuZ3JhcGhpYywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wicGFydGljbGVfc3RhclwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVJUSUNMRV9zdGFyLCB0aGlzLnNwcml0ZS54LCB0aGlzLnNwcml0ZS55LCAwLjMsIHRydWUsIDAuNSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5Ub2tlbi5wcm90b3R5cGUubWFnbmV0RHJhdyA9IGZ1bmN0aW9uKGF2YXRhciwgdGFyZ2V0T2Zmc2V0KVxyXG57XHJcblx0aWYodGhpcy5jb2xsZWN0ZWQpXHJcblx0e1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0dGhpcy5jb2xsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5tYWduZXRUYXJnZXQgPSBhdmF0YXI7XHJcblx0XHR0aGlzLm1hZ25ldFN0YXJ0ID0gbmV3IFBJWEkuUG9pbnQodGhpcy5zcHJpdGUueCwgdGhpcy5zcHJpdGUueSk7XHJcblx0XHRDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMsIDEsIHttYWduZXRWYWx1ZToxLCBlYXNlOkV4cG8uZWFzZUluLCBvblVwZGF0ZVNjb3BlOnRoaXMsIG9uVXBkYXRlOmZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuc3ByaXRlLnggPSB0aGlzLm1hZ25ldFN0YXJ0LnggKyAoKCh0aGlzLm1hZ25ldFRhcmdldC54ICsgdGFyZ2V0T2Zmc2V0LngpIC0gdGhpcy5tYWduZXRTdGFydC54KSAqIHRoaXMubWFnbmV0VmFsdWUpO1xyXG5cdFx0XHR0aGlzLnNwcml0ZS55ID0gdGhpcy5tYWduZXRTdGFydC55ICsgKCgodGhpcy5tYWduZXRUYXJnZXQueSArIHRhcmdldE9mZnNldC55KSAtIHRoaXMubWFnbmV0U3RhcnQueSkgKiB0aGlzLm1hZ25ldFZhbHVlKTtcclxuXHRcdH0sIG9uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuY29sbGVjdEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hbHMuY29sbGlkZS5kaXNwYXRjaCh0aGlzKTtcclxuXHRcdH19KSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblRva2VuLnByb3RvdHlwZS5jb2xsZWN0QW5pbWF0aW9uID0gZnVuY3Rpb24oKVxyXG57XHJcblx0Q29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLnNwcml0ZS5zY2FsZSwgLjIsIHt4OjAsIHk6MCwgZWFzZTpTaW5lLmVhc2VJbk91dH0pKTtcclxuXHRDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcInNmeF90b2tlbl9jb2xsZWN0XzA0XCIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblRva2VuLnByb3RvdHlwZS5vblRpbGVDbGVhcmVkID0gZnVuY3Rpb24oKVxyXG57XHJcblx0QWN0aXZlT2JqZWN0LnByb3RvdHlwZS5vblRpbGVDbGVhcmVkLmNhbGwodGhpcyk7XHJcblx0dGhpcy5kaXNwb3NlKCk7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwiXHJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQHBhcmFtIHshU3RyaW5nfSB0ZXh0LFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFRva2VuQ291bnRlcih0b3RhbENvaW5zKVxyXG57XHJcbiAgICB0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XHJcblxyXG4gICAgdGhpcy5fdG90YWxDb2lucyAgICA9IHRvdGFsQ29pbnM7XHJcblxyXG4gICAgdGhpcy5fY29pbiAgICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9udW1iZXJIb2xkZXIgID0gbnVsbDtcclxuICAgIHRoaXMuX251bWJlcjEgICAgICAgPSBudWxsO1xyXG4gICAgdGhpcy5fbnVtYmVyMiAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9udW1iZXIzICAgICAgID0gbnVsbDtcclxuXHJcbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5Db3VudGVyO1xyXG5Ub2tlbkNvdW50ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xyXG5Ub2tlbkNvdW50ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVG9rZW5Db3VudGVyO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcblRva2VuQ291bnRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdmFyIHNjb3JlYm94ID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdzY29yZWJveCcpKTtcclxuICAgIHNjb3JlYm94LnggPSAtNjA7XHJcbiAgICBzY29yZWJveC55ID0gLTUwO1xyXG4gICAgdGhpcy5hZGRDaGlsZChzY29yZWJveCk7XHJcblxyXG4gICAgdGhpcy5fY29pbiA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNvaW5fMDAxXCIpKTtcclxuICAgIHRoaXMuX2NvaW4uYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9jb2luKTtcclxuXHJcbiAgICB0aGlzLl9udW1iZXJIb2xkZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgIHRoaXMuX251bWJlckhvbGRlci54ID0gLTEwO1xyXG4gICAgdGhpcy5fbnVtYmVySG9sZGVyLnkgPSAxMTtcclxuICAgIHRoaXMuX251bWJlckhvbGRlci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuOSwgMC45KTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbnVtYmVySG9sZGVyKTtcclxuXHJcbiAgICB0aGlzLl9udW1iZXIzID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiMF9vZmZcIikpO1xyXG4gICAgdGhpcy5fbnVtYmVyMy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLCAwLjUpO1xyXG4gICAgdGhpcy5fbnVtYmVyMy5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcclxuICAgIHRoaXMuX251bWJlcjMueCA9IC0xMDtcclxuICAgIHRoaXMuX251bWJlckhvbGRlci5hZGRDaGlsZCh0aGlzLl9udW1iZXIzKTtcclxuXHJcbiAgICB0aGlzLl9udW1iZXIyID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiMF9vZmZcIikpO1xyXG4gICAgdGhpcy5fbnVtYmVyMi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLCAwLjUpO1xyXG4gICAgdGhpcy5fbnVtYmVyMi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcclxuICAgIHRoaXMuX251bWJlcjIueCA9IHRoaXMuX251bWJlcjMueCArIDIwO1xyXG4gICAgdGhpcy5fbnVtYmVySG9sZGVyLmFkZENoaWxkKHRoaXMuX251bWJlcjIpO1xyXG5cclxuICAgIHRoaXMuX251bWJlcjEgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCIwX29mZlwiKSk7XHJcbiAgICB0aGlzLl9udW1iZXIxLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAsIDAuNSk7XHJcbiAgICB0aGlzLl9udW1iZXIxLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgdGhpcy5fbnVtYmVyMS54ID0gdGhpcy5fbnVtYmVyMi54ICsgMjA7XHJcbiAgICB0aGlzLl9udW1iZXJIb2xkZXIuYWRkQ2hpbGQodGhpcy5fbnVtYmVyMSk7XHJcblxyXG4gICAgdmFyIHNsYXNoID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYmFyX3N0aWNrX29mZlwiKSk7XHJcbiAgICBzbGFzaC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcbiAgICBzbGFzaC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNiwgMC42KTtcclxuICAgIHNsYXNoLnggPSB0aGlzLl9udW1iZXIxLnggKyA3NTtcclxuICAgIHNsYXNoLnkgPSAtMTA7XHJcbiAgICBzbGFzaC5yb3RhdGlvbiA9IDI1ICogUElYSS5ERUdfVE9fUkFEO1xyXG4gICAgdGhpcy5fbnVtYmVySG9sZGVyLmFkZENoaWxkKHNsYXNoKTtcclxuXHJcbiAgICB2YXIgdG90YWxYID0gc2xhc2gueCAtIDIwO1xyXG4gICAgdmFyIHN0ciA9IHRoaXMuX3RvdGFsQ29pbnMudG9TdHJpbmcoKTtcclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoc3RyLmNoYXJBdChpKSArIFwiX29mZlwiKSk7XHJcbiAgICAgICAgbnVtYmVyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAsIDAuNSk7XHJcbiAgICAgICAgbnVtYmVyLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgICAgIG51bWJlci54ID0gdG90YWxYO1xyXG4gICAgICAgIHRoaXMuX251bWJlckhvbGRlci5hZGRDaGlsZChudW1iZXIpO1xyXG4gICAgICAgIHRvdGFsWCA9IG51bWJlci54ICsgMjA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc3RyLmxlbmd0aCA9PSAzKVxyXG4gICAgICAgIHRoaXMuX251bWJlckhvbGRlci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNzUsIDAuNzUpO1xyXG5cclxufTtcclxuXHJcblRva2VuQ291bnRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG5cclxufTtcclxuXHJcblRva2VuQ291bnRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBpZihUd2Vlbk1heC5pc1R3ZWVuaW5nKHRoaXMuX2NvaW4uc2NhbGUpKVxyXG4gICAgICAgIHRoaXMuX2NvaW4udGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY29pbl8wMDFcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5fY29pbi50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjb2luXzAwXCIgKyAoTWF0aC5mbG9vcigoQ29tbW9uLmZyYW1lQ291bnQgJSAyNCkvNCkrMSkpO1xyXG59O1xyXG5cclxuVG9rZW5Db3VudGVyLnByb3RvdHlwZS5zZXRUb2tlbnMgPSBmdW5jdGlvbihudW1iZXIpXHJcbntcclxuICAgIHZhciBzdHIgPSBudW1iZXIudG9TdHJpbmcoKTtcclxuXHJcbiAgICB2YXIgZmlyc3RDaGFyID0gbnVsbDtcclxuICAgIHZhciBzZWNvbmRDaGFyID0gbnVsbDtcclxuICAgIHZhciB0aGlyZENoYXIgPSBudWxsO1xyXG5cclxuICAgIGZpcnN0Q2hhciA9IHN0ci5jaGFyQXQoc3RyLmxlbmd0aC0xKTtcclxuICAgIHRoaXMuX251bWJlcjEudGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKGZpcnN0Q2hhciArIFwiX29mZlwiKTtcclxuICAgIHRoaXMuX251bWJlcjEudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fbnVtYmVySG9sZGVyLnggPSAtMzA7XHJcblxyXG4gICAgaWYobnVtYmVyID49IDEwKVxyXG4gICAge1xyXG4gICAgICAgIHNlY29uZENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGgtMik7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyMi50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoc2Vjb25kQ2hhciArIFwiX29mZlwiKTtcclxuICAgICAgICB0aGlzLl9udW1iZXIyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX251bWJlckhvbGRlci54ID0gLTE1O1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX251bWJlcjIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKG51bWJlciA+PSAxMDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcmRDaGFyID0gc3RyLmNoYXJBdChzdHIubGVuZ3RoLTMpO1xyXG4gICAgICAgIHRoaXMuX251bWJlcjMudGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKHRoaXJkQ2hhciArIFwiX29mZlwiKTtcclxuICAgICAgICB0aGlzLl9udW1iZXIzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX251bWJlckhvbGRlci54ID0gMTA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyMy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcclxuICAgIHRsLnRvKHRoaXMuX2NvaW4uc2NhbGUsIC4yLCB7eDoxLjgsIHk6MS44LCBlYXNlOlNpbmUuZWFzZUluT3V0fSk7XHJcbiAgICB0bC50byh0aGlzLl9jb2luLnNjYWxlLCAuMSwge3g6MS4yLCB5OjEuMiwgZWFzZTpCYWNrLmVhc2VPdXR9KTtcclxuXHJcbn07XHJcblxyXG5Ub2tlbkNvdW50ZXIucHJvdG90eXBlLmNvbGxpZGVkID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuICAgIENvbW1vbi5hbmltYXRvci5hZGQoIFR3ZWVuTWF4LnRvKHRoaXMuX2NvaW4sIC4zLCB7c3RhcnRBdDp7dGludDoweEVEM0QxQX0sIHRpbnQ6MHhGRkZGRkZ9KSApO1xyXG59O1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsIlxyXG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBFbWl0dGVyKCkge1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IVBJWEkuQ29udGFpbmVyfSBwYXJlbnRcclxuICogQHBhcmFtIHshQXJyYXk8U3RyaW5nPn0gdGV4dHVyZXNcclxuICogQHBhcmFtIHshU3RyaW5nfSBqc29uXHJcbiAqIEBwYXJhbSB7TnVtYmVyPX0geFxyXG4gKiBAcGFyYW0ge051bWJlcj19IHlcclxuICogQHBhcmFtIHtOdW1iZXI9fSByZW1vdmVUaW1lXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbj19IGF1dG9FbWl0XHJcbiAqIEByZXR1cm5zIHtjbG91ZGtpZC5FbWl0dGVyfSBlbWl0dGVyXHJcbiAqL1xyXG5FbWl0dGVyLmFkZCA9IGZ1bmN0aW9uKHBhcmVudCwgdGV4dHVyZXMsIGpzb24sIHgsIHksIHJlbW92ZVRpbWUsIGF1dG9FbWl0LCBkZXN0cm95VGltZSlcclxue1xyXG4gICAgaWYoYXV0b0VtaXQgPT0gdW5kZWZpbmVkKSBhdXRvRW1pdCA9IHRydWU7XHJcbiAgICBpZihkZXN0cm95VGltZSA9PSB1bmRlZmluZWQpIGRlc3Ryb3lUaW1lID0gMTtcclxuXHJcbiAgICB4ID0geCB8fCAwO1xyXG4gICAgeSA9IHkgfHwgMDtcclxuXHJcbiAgICB2YXIgYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0ZXh0dXJlcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICB0ZXh0dXJlc1tpXSA9IGFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKHRleHR1cmVzW2ldKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgdmFyIGVtaXR0ZXIgPSBuZXcgY2xvdWRraWQuRW1pdHRlcihcclxuICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgdGV4dHVyZXMsXHJcbiAgICAgICAgLy9hc3NldE1hbmFnZXIuZ2V0SlNPTihqc29uKVxyXG4gICAgICAgIGpzb25cclxuICAgICk7XHJcbiAgICBpZihhdXRvRW1pdClcclxuICAgICAgICBlbWl0dGVyLmVtaXQgPSB0cnVlO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVtaXR0ZXIuZW1pdCA9IGZhbHNlO1xyXG5cclxuICAgIGVtaXR0ZXIudXBkYXRlT3duZXJQb3MoeCwgeSk7XHJcblxyXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChlbWl0dGVyKTtcclxuXHJcbiAgICBpZihyZW1vdmVUaW1lICE9IG51bGwpXHJcbiAgICB7ICAgIFxyXG4gICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIEVtaXR0ZXIuZGVzdHJveShlbWl0dGVyLCBkZXN0cm95VGltZSk7XHJcbiAgICAgICAgfSwgcmVtb3ZlVGltZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVtaXR0ZXI7XHJcbn07XHJcblxyXG5FbWl0dGVyLmRlc3Ryb3kgPSBmdW5jdGlvbihlbWl0dGVyLCBkZXN0cm95RGVsYXkpXHJcbntcclxuICAgIGlmKGVtaXR0ZXIgIT0gbnVsbClcclxuICAgIHsgICAgXHJcbiAgICAgICAgZGVzdHJveURlbGF5ID0gZGVzdHJveURlbGF5IHx8IDA7XHJcblxyXG4gICAgICAgIGVtaXR0ZXIuZW1pdCA9IGZhbHNlO1xyXG4gICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5yZW1vdmUoZW1pdHRlcik7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIGRlc3Ryb3lEZWxheSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IiwidmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gTGFyZ2VCdXR0b24oaWNvbiwgaW5hY3RpdmVJY29uKVxyXG57XHJcblx0dmFyIGFtID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuXHRwMy5CdXR0b24uY2FsbCh0aGlzLCBcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKFwiYmlnX2J1dHRvbl9kZWZcIiksXHJcblx0XHRcdFx0ICAgYW0uZ2V0VGV4dHVyZShcImJpZ19idXR0b25fb3ZlclwiKSxcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKFwiYmlnX2J1dHRvbl9wcmVzc1wiKSxcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKGljb24pLFxyXG5cdFx0XHRcdCAgIGFtLmdldFRleHR1cmUoXCJiaWdfYnV0dG9uX2Rpc1wiKSxcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKFwiYmlnX2J1dHRvbl9kaXNcIiksXHJcblx0XHRcdFx0ICAgYW0uZ2V0VGV4dHVyZShcImJpZ19idXR0b25fZGlzXCIpLFxyXG5cdFx0XHRcdCAgIGluYWN0aXZlSWNvbiA/IGFtLmdldFRleHR1cmUoaW5hY3RpdmVJY29uKSA6IG51bGxcclxuXHRcdFx0XHQgICApO1xyXG5cdHRoaXMuYW5pbWF0ZSA9IHRydWU7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBMYXJnZUJ1dHRvbjtcclxuTGFyZ2VCdXR0b24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwMy5CdXR0b24ucHJvdG90eXBlKTtcclxuTGFyZ2VCdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGFyZ2VCdXR0b247XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIExldmVsU2VsZWN0QnV0dG9uKG51bWJlciwgc3RhdGUsIHN0YXJWYWx1ZSlcclxue1xyXG5cdHRoaXMubGV2ZWxOdW1iZXJcdD0gbnVtYmVyO1xyXG5cdHRoaXMuc3RhclZhbHVlXHRcdD0gc3RhclZhbHVlIHx8IDA7XHJcblx0dGhpcy52aXNpdGVkXHRcdD0gc3RhdGUgPT0gXCJ2aXNpdGVkXCIgPyB0cnVlIDogZmFsc2U7XHJcblx0dGhpcy5kaXNhYmxlZCBcdFx0PSBzdGF0ZSA9PSBcImRpc2FibGVkXCIgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHR2YXIgYW0gPSB0aGlzLl9hc3NldE1hbmFnZXI7XHJcblxyXG5cdHZhciBudW1iZXJUZXh0dXJlID0gbnVtYmVyICsgXCJfXCI7XHJcblx0dmFyIGJ1dHRvblRleHR1cmU7XHJcblx0dmFyIHN0YXJUZXh0dXJlID0gXCJpY29uX3N0YXJfXCI7XHJcblxyXG5cdGlmKHN0YXRlID09IFwiYWN0aXZlXCIpXHJcblx0e1xyXG5cdFx0c3RhclRleHR1cmUgKz0gXCJvZmZcIjtcclxuXHRcdG51bWJlclRleHR1cmUgKz0gXCJvZmZcIjtcclxuXHRcdGJ1dHRvblRleHR1cmUgPSAnZGlzYWJsZWQnO1xyXG5cdH1cclxuXHRlbHNlIGlmKHN0YXRlID09IFwidmlzaXRlZFwiKVxyXG5cdHtcclxuXHRcdHN0YXJUZXh0dXJlICs9IFwib25cIjtcclxuXHRcdG51bWJlclRleHR1cmUgKz0gXCJvZmZcIjtcclxuXHRcdGJ1dHRvblRleHR1cmUgPSAndmlzaXRlZCc7XHJcblx0fVxyXG5cdGVsc2UgaWYoc3RhdGUgPT0gXCJkaXNhYmxlZFwiKVxyXG5cdHtcclxuXHRcdHN0YXJUZXh0dXJlICs9IFwiZGlzXCI7XHJcblx0XHRudW1iZXJUZXh0dXJlICs9IFwiZGlzXCI7XHJcblx0XHRidXR0b25UZXh0dXJlID0gJ2Rpc2FibGVkJztcclxuXHR9XHJcblxyXG5cdHAzLkJ1dHRvbi5jYWxsKHRoaXMsIFxyXG5cdFx0XHRcdCAgIGFtLmdldFRleHR1cmUoXCJsZXZlbF9idXR0b25fXCIgKyBidXR0b25UZXh0dXJlKSxcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKFwibGV2ZWxfYnV0dG9uX1wiICsgYnV0dG9uVGV4dHVyZSksXHJcblx0XHRcdFx0ICAgYW0uZ2V0VGV4dHVyZShcImxldmVsX2J1dHRvbl9cIiArIGJ1dHRvblRleHR1cmUpLFxyXG5cdFx0XHRcdCAgIGFtLmdldFRleHR1cmUobnVtYmVyVGV4dHVyZSlcclxuXHRcdFx0XHQgICApO1xyXG5cdHRoaXMuYW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLl9zdGFycyA9IFtdO1xyXG5cclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgMzsgaSsrKVxyXG5cdHtcclxuXHRcdC8vdmFyIHN0YXIgPSBuZXcgUElYSS5TcHJpdGUoYW0uZ2V0VGV4dHVyZShudW1iZXJUZXh0dXJlLnJlcGxhY2UodGhpcy5sZXZlbE51bWJlciwgXCJpY29uX3N0YXJcIikpKTtcclxuXHRcdHZhciBzdGFyID0gbmV3IFBJWEkuU3ByaXRlKGFtLmdldFRleHR1cmUoc3RhclRleHR1cmUpKTtcclxuXHRcdGlmKCF0aGlzLmRpc2FibGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLnZpc2l0ZWQgJiYgaSsxID4gdGhpcy5zdGFyVmFsdWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdGFyLnRleHR1cmUgPSBhbS5nZXRUZXh0dXJlKFwiaWNvbl9zdGFyX2Rpc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9zdGFycy5wdXNoKHN0YXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcclxuXHRcdHN0YXIuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG5cdFx0c3Rhci55ID0gMzc7XHJcblx0XHRzdGFyLnggPSAtNDIgKyAoNDIqaSk7XHJcblx0XHR0aGlzLmFkZENoaWxkKHN0YXIpO1xyXG5cdH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsU2VsZWN0QnV0dG9uO1xyXG5MZXZlbFNlbGVjdEJ1dHRvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHAzLkJ1dHRvbi5wcm90b3R5cGUpO1xyXG5MZXZlbFNlbGVjdEJ1dHRvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMZXZlbFNlbGVjdEJ1dHRvbjtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuTGV2ZWxTZWxlY3RCdXR0b24ucHJvdG90eXBlLmZsYXNoID0gZnVuY3Rpb24oc3VidGxlKVxyXG57XHJcblx0dmFyIGNvbXBvbmVudHMgPSBbdGhpcy5fYmFja2dyb3VuZCwgdGhpcy5faWNvbl07XHJcblx0Y29tcG9uZW50cyA9IGNvbXBvbmVudHMuY29uY2F0KHRoaXMuX3N0YXJzKTtcclxuXHJcblx0aWYoc3VidGxlKVxyXG5cdHtcclxuXHRcdGNvbXBvbmVudHMgPSBbY29tcG9uZW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wb25lbnRzLmxlbmd0aCldXTtcclxuXHR9XHJcblxyXG5cdGZvcih2YXIgYyA9IDA7IGMgPCBjb21wb25lbnRzLmxlbmd0aDsgYysrKVxyXG5cdHtcclxuXHRcdGlmKCFUd2Vlbk1heC5pc1R3ZWVuaW5nKGNvbXBvbmVudHNbY10pKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuXHRcdFx0Q29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XHJcblxyXG5cdFx0XHR2YXIgZGlzVGV4dHVyZTtcclxuXHRcdFx0aWYoY29tcG9uZW50c1tjXSA9PSB0aGlzLl9iYWNrZ3JvdW5kKVxyXG5cdFx0XHRcdGRpc1RleHR1cmUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImxldmVsX2J1dHRvbl9hY3RpdmVcIik7XHJcblx0XHRcdGVsc2UgaWYoY29tcG9uZW50c1tjXSA9PSB0aGlzLl9pY29uKVxyXG5cdFx0XHRcdGRpc1RleHR1cmUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSh0aGlzLmxldmVsTnVtYmVyICsgXCJfZGlzXCIpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGlzVGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiaWNvbl9zdGFyX2Rpc1wiKTtcclxuXHJcblx0XHRcdHZhciBub3JtYWxUZXh0dXJlO1xyXG5cdFx0XHRpZihjb21wb25lbnRzW2NdID09IHRoaXMuX2JhY2tncm91bmQpXHJcblx0XHRcdFx0bm9ybWFsVGV4dHVyZSA9IHRoaXMuX25vcm1hbFRleHR1cmU7XHJcblx0XHRcdGVsc2UgaWYoY29tcG9uZW50c1tjXSA9PSB0aGlzLl9pY29uKVxyXG5cdFx0XHRcdG5vcm1hbFRleHR1cmUgPSB0aGlzLl9pY29uVGV4dHVyZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdG5vcm1hbFRleHR1cmUgPSBjb21wb25lbnRzW2NdLnRleHR1cmU7XHJcblxyXG5cdFx0XHR2YXIgbGltaXQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcblx0XHRcdGlmKHRoaXMudmlzaXRlZCkgbGltaXQgPSAxO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxpbWl0OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0bC50byhjb21wb25lbnRzW2NdLCAwLjA3ICsgKE1hdGgucmFuZG9tKCkqMC4xKSwge29uQ29tcGxldGVQYXJhbXM6W2NvbXBvbmVudHNbY10sIGRpc1RleHR1cmVdLCBvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbihjb21wb25lbnQsIGRpc1RleHR1cmUpe1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50LnRleHR1cmUgPSBkaXNUZXh0dXJlO1xyXG5cdFx0XHRcdH19KTtcclxuXHRcdFx0XHR0bC50byhjb21wb25lbnRzW2NdLCAwLjA3ICsgKE1hdGgucmFuZG9tKCkqMC4xKSwge29uQ29tcGxldGVQYXJhbXM6W2NvbXBvbmVudHNbY10sIG5vcm1hbFRleHR1cmVdLCBvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbihjb21wb25lbnQsIG5vcm1hbFRleHR1cmUpe1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50LnRleHR1cmUgPSBub3JtYWxUZXh0dXJlO1xyXG5cdFx0XHRcdH19KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoY29tcG9uZW50c1tjXSA9PSB0aGlzLl9iYWNrZ3JvdW5kICYmICFzdWJ0bGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0bC50byhjb21wb25lbnRzW2NdLCAwLjA3ICsgKE1hdGgucmFuZG9tKCkqMC4xKSwge29uQ29tcGxldGVQYXJhbXM6W2NvbXBvbmVudHNbY10sIGRpc1RleHR1cmVdLCBvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbihjb21wb25lbnQsIGRpc1RleHR1cmUpe1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50LnRleHR1cmUgPSBkaXNUZXh0dXJlO1xyXG5cdFx0XHRcdH19KTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0fVxyXG59XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFJJVkFURSBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuTGV2ZWxTZWxlY3RCdXR0b24ucHJvdG90eXBlLm9uTW91c2VPdmVyID0gZnVuY3Rpb24oZXZlbnQpXHJcbntcclxuXHRpZighdGhpcy5kaXNhYmxlZClcclxuXHRcdHRoaXMuZmxhc2goKTtcclxuXHRwMy5CdXR0b24ucHJvdG90eXBlLm9uTW91c2VPdmVyLmNhbGwodGhpcywgZXZlbnQpO1xyXG5cdC8vY29uc29sZS5sb2cocDMuQnV0dG9uLmF1ZGlvICsgJywgJyArIHRoaXMub3ZlclNvdW5kTmFtZSk7XHJcbn1cclxuXHJcbkxldmVsU2VsZWN0QnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3V0ID0gZnVuY3Rpb24oZXZlbnQpXHJcbntcclxuXHRwMy5CdXR0b24ucHJvdG90eXBlLm9uTW91c2VPdmVyLmNhbGwodGhpcywgZXZlbnQpO1xyXG5cdFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLl9iYWNrZ3JvdW5kKTtcclxuXHR0aGlzLl9iYWNrZ3JvdW5kLnRleHR1cmUgPSB0aGlzLl9ub3JtYWxUZXh0dXJlOyBcclxuXHRUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy5faWNvbik7XHJcblx0dGhpcy5faWNvbi50ZXh0dXJlID0gdGhpcy5faWNvblRleHR1cmU7XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVFRFUlMvU0VUVEVSU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqICBNdXRlQnV0dG9uXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAxNi8wOS8yMDE1LlxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFQSVhJLlRleHR1cmV9IG5vcm1hbFRleHR1cmVcclxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBvdmVyVGV4dHVyZVxyXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IGRvd25UZXh0dXJlXHJcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb25JY29uVGV4dHVyZVxyXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9mZkljb25UZXh0dXJlXHJcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gbm9ybWFsSW5hY3RpdmVUZXh0dXJlXHJcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb3ZlckluYWN0aXZlVGV4dHVyZVxyXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IGRvd25JbmFjdGl2ZVRleHR1cmVcclxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBvbkljb25JbmFjdGl2ZVRleHR1cmVcclxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBvZmZJY29uSW5hY3RpdmVUZXh0dXJlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gTXV0ZUJ1dHRvbihcclxuICAgIG5vcm1hbFRleHR1cmUsXHJcbiAgICBvdmVyVGV4dHVyZSxcclxuICAgIGRvd25UZXh0dXJlLFxyXG4gICAgb25JY29uVGV4dHVyZSxcclxuICAgIG9mZkljb25UZXh0dXJlLFxyXG4gICAgbm9ybWFsSW5hY3RpdmVUZXh0dXJlLFxyXG4gICAgb3ZlckluYWN0aXZlVGV4dHVyZSxcclxuICAgIGRvd25JbmFjdGl2ZVRleHR1cmUsXHJcbiAgICBvbkljb25JbmFjdGl2ZVRleHR1cmUsXHJcbiAgICBvZmZJY29uSW5hY3RpdmVUZXh0dXJlXHJcbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9vbkljb25UZXh0dXJlID0gb25JY29uVGV4dHVyZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX29mZkljb25UZXh0dXJlID0gb2ZmSWNvblRleHR1cmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9vbkljb25JbmFjdGl2ZVRleHR1cmUgPSBvbkljb25JbmFjdGl2ZVRleHR1cmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9vZmZJY29uSW5hY3RpdmVUZXh0dXJlID0gb2ZmSWNvbkluYWN0aXZlVGV4dHVyZTtcclxuXHJcbiAgICBCdXR0b24uY2FsbChcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIG5vcm1hbFRleHR1cmUsXHJcbiAgICAgICAgb3ZlclRleHR1cmUsXHJcbiAgICAgICAgZG93blRleHR1cmUsXHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQoKSA/IHRoaXMuX29uSWNvblRleHR1cmUgOiB0aGlzLl9vZmZJY29uVGV4dHVyZSxcclxuICAgICAgICBub3JtYWxJbmFjdGl2ZVRleHR1cmUsXHJcbiAgICAgICAgb3ZlckluYWN0aXZlVGV4dHVyZSxcclxuICAgICAgICBkb3duSW5hY3RpdmVUZXh0dXJlLFxyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkKCkgPyB0aGlzLl9vbkljb25JbmFjdGl2ZVRleHR1cmUgOiB0aGlzLl9vZmZJY29uSW5hY3RpdmVUZXh0dXJlXHJcbiAgICApO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gTXV0ZUJ1dHRvbjtcclxuTXV0ZUJ1dHRvbi5wcm90b3R5cGUgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKHAzLkJ1dHRvbi5wcm90b3R5cGUpO1xyXG5NdXRlQnV0dG9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICA9IE11dGVCdXR0b247XHJcblxyXG4vKipcclxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XHJcbiAqL1xyXG5NdXRlQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlRG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0Y29uc29sZS5sb2codGhpcy5pc0VuYWJsZWQoKSk7XHJcbiAgICB0aGlzLl9lbmFibGVkICAgICAgICAgICAgICAgPSAhdGhpcy5fZW5hYmxlZDtcclxuICAgIHRoaXMuX2N1cnJlbnRJY29uVGV4dHVyZSAgICA9IHRoaXMuaXNFbmFibGVkKCkgPyB0aGlzLl9vZmZJY29uVGV4dHVyZSA6IHRoaXMuX29uSWNvblRleHR1cmU7XHJcbiAgICB0aGlzLl9pY29uLnRleHR1cmUgICAgICAgICAgPSB0aGlzLl9jdXJyZW50SWNvblRleHR1cmU7XHJcblxyXG4gICAgaWYoISFCdXR0b24uYXVkaW8pe1xyXG4gICAgICAgIEJ1dHRvbi5hdWRpby5tdXRlKCFCdXR0b24uYXVkaW8uaXNNdXRlKTtcclxuICAgIH1cclxuICAgIEJ1dHRvbi5wcm90b3R5cGUub25Nb3VzZURvd24uY2FsbCh0aGlzLCBldmVudCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5NdXRlQnV0dG9uLnByb3RvdHlwZS5pc0VuYWJsZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAhIUJ1dHRvbi5hdWRpbyAmJiAhQnV0dG9uLmF1ZGlvLmlzTXV0ZTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFNtYWxsQnV0dG9uKGljb24sIGluYWN0aXZlSWNvbilcclxue1xyXG5cdHZhciBhbSA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuXHJcblx0cDMuQnV0dG9uLmNhbGwodGhpcywgXHJcblx0XHRcdFx0ICAgYW0uZ2V0VGV4dHVyZShcInNtYWxsX2J1dHRvbl9kZWZcIiksXHJcblx0XHRcdFx0ICAgYW0uZ2V0VGV4dHVyZShcInNtYWxsX2J1dHRvbl9vdmVyXCIpLFxyXG5cdFx0XHRcdCAgIGFtLmdldFRleHR1cmUoXCJzbWFsbF9idXR0b25fcHJlc3NcIiksXHJcblx0XHRcdFx0ICAgYW0uZ2V0VGV4dHVyZShpY29uKSxcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKFwic21hbGxfYnV0dG9uX2Rpc1wiKSxcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKFwic21hbGxfYnV0dG9uX2Rpc1wiKSxcclxuXHRcdFx0XHQgICBhbS5nZXRUZXh0dXJlKFwic21hbGxfYnV0dG9uX2Rpc1wiKSxcclxuXHRcdFx0XHQgICBpbmFjdGl2ZUljb24gPyBhbS5nZXRUZXh0dXJlKGluYWN0aXZlSWNvbikgOiBudWxsXHJcblx0XHRcdFx0ICAgKTtcclxuXHR0aGlzLmFuaW1hdGUgPSB0cnVlO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gU21hbGxCdXR0b247XHJcblNtYWxsQnV0dG9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocDMuQnV0dG9uLnByb3RvdHlwZSk7XHJcblNtYWxsQnV0dG9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNtYWxsQnV0dG9uO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFTdHJpbmd9IHRleHQsXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gU3RhckZpZWxkKHdpZHRoLCBoZWlnaHQsIHN0YXJSYXRpbylcclxue1xyXG4gICAgdGhpcy5fYXNzZXRNYW5hZ2VyID0gcDMuQXNzZXRNYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuICAgIHRoaXMuX3N0YXJSYXRpbyAgICAgPSBzdGFyUmF0aW8gfHwgNTtcclxuICAgIHRoaXMuX3dpZHRoICAgICAgICAgPSB3aWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCAgICAgICAgPSBoZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5fc3RhcnMgICAgICAgICA9IG51bGw7XHJcblxyXG4gICAgUElYSS5Db250YWluZXIuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXJGaWVsZDtcclxuU3RhckZpZWxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuU3RhckZpZWxkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0YXJGaWVsZDtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqL1xyXG5TdGFyRmllbGQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8qXHJcbiAgICB2YXIgdGVzdCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICB0ZXN0LmxpbmVTdHlsZSgxLCAweEZGRkZGRik7XHJcbiAgICB0ZXN0LmRyYXdSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0ZXN0KTsqL1xyXG5cclxuICAgIHZhciBudW1iZXJPZlN0YXJzID0gTWF0aC5yb3VuZCh0aGlzLl9zdGFyUmF0aW8gKiAoICh0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCkgLyAxMDAwMCkpOyBcclxuXHJcbiAgICB0aGlzLl9zdGFycyA9IFtdO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG51bWJlck9mU3RhcnM7IGkrKylcclxuICAgIHtcclxuICAgICAgICB2YXIgc3RhciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShNYXRoLnJhbmRvbSgpIDwgMC4yNSA/ICdzdGFyMV9icmlnaHQnIDogJ3N0YXIyJykpO1xyXG4gICAgICAgIHN0YXIuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgICAgIHN0YXIueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLl93aWR0aDtcclxuICAgICAgICBzdGFyLnkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5faGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc3Rhcik7XHJcbiAgICAgICAgdGhpcy5fc3RhcnMucHVzaChzdGFyKTtcclxuXHJcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byhzdGFyLCAxKyhNYXRoLnJhbmRvbSgpKjAuNSksIHthbHBoYTowLjIgKyAoTWF0aC5yYW5kb20oKSAqIDAuNCksIGVhc2U6U2luZS5lYXNlSW5PdXQsIHJlcGVhdDotMSwgeW95bzp0cnVlfSkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuU3RhckZpZWxkLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fc3RhcnMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX3N0YXJzW2ldKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4iLCJcclxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFTdHJpbmd9IHRleHQsXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gVGV4dEl0ZW0oY29weSwgYXJncywgZm9ybWF0T3ZlcnJpZGUpXHJcbntcclxuICAgIHRoaXMuX2Fzc2V0TWFuYWdlciA9IHAzLkFzc2V0TWFuYWdlci5pbnN0YW5jZTtcclxuICAgIHRoaXMuX2NvcHlEYXRhID0gQUlCX1NUUklOR1M7XHJcbiAgICB0aGlzLl9jb25maWdEYXRhID0gQUlCX0NPTkZJRztcclxuXHJcbiAgICB0aGlzLl9jb3B5ID0gY29weTtcclxuICAgIHRoaXMuX2FyZ3MgPSBhcmdzO1xyXG4gICAgdGhpcy5fZm9ybWF0T3ZlcnJpZGUgPSBmb3JtYXRPdmVycmlkZTtcclxuXHJcbiAgICB0aGlzLl90ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVGV4dEl0ZW07XHJcblRleHRJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcclxuVGV4dEl0ZW0ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGV4dEl0ZW07XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKi9cclxuVGV4dEl0ZW0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIHZhciBwcm9wcyA9IHt9O1xyXG5cclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLl9jb25maWdEYXRhLmRlZmF1bHRfZm9ybWF0KVxyXG4gICAge1xyXG4gICAgICAgIHByb3BzW2ldID0gdGhpcy5fY29uZmlnRGF0YS5kZWZhdWx0X2Zvcm1hdFtpXTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLl9mb3JtYXRPdmVycmlkZSlcclxuICAgIHtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5fZm9ybWF0T3ZlcnJpZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wc1tpXSA9IHRoaXMuX2Zvcm1hdE92ZXJyaWRlW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVhZENvcHkodGhpcy5fY29weSk7XHJcblxyXG4gICAgaWYoZGF0YSAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGRhdGEuZm9ybWF0ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgaW4gZGF0YS5mb3JtYXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGkgIT0gXCJvZmZzZXRcIiAmJiBpICE9IFwiYWxpZ25WZXJ0aWNhbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzW2ldID0gZGF0YS5mb3JtYXRbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMuZmlsbCA9IE51bWJlcihwcm9wcy5maWxsKTtcclxuICAgIFxyXG4gICAgaWYocHJvcHMuc3Ryb2tlKVxyXG4gICAgICAgIHByb3BzLnN0cm9rZSA9IE51bWJlcihwcm9wcy5zdHJva2UpO1xyXG5cclxuICAgIHRoaXMuX3RleHQgPSBuZXcgUElYSS5UZXh0KHRoaXMuaW5zZXJ0QXJncyhkYXRhICE9IG51bGwgPyBkYXRhLmNvcHkgOiB0aGlzLl9jb3B5KSwgcHJvcHMpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl90ZXh0KTtcclxuXHJcbiAgICBpZihwcm9wcy5hbGlnbiA9PSBcImNlbnRlclwiKVxyXG4gICAgICAgIHRoaXMuX3RleHQuYW5jaG9yLnggPSAwLjU7XHJcbiAgICBlbHNlIGlmKHByb3BzLmFsaWduID09IFwicmlnaHRcIilcclxuICAgICAgICB0aGlzLl90ZXh0LmFuY2hvci54ID0gMTtcclxuXHJcbiAgICBpZihkYXRhICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZGF0YS5mb3JtYXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihkYXRhLmZvcm1hdC5vZmZzZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHQueCA9IGRhdGEuZm9ybWF0Lm9mZnNldC54IHx8IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0LnkgPSBkYXRhLmZvcm1hdC5vZmZzZXQueSB8fCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihkYXRhLmZvcm1hdC5hbGlnblZlcnRpY2FsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmZvcm1hdC5hbGlnblZlcnRpY2FsID09IFwiY2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dC5hbmNob3IueSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGF0YS5mb3JtYXQuYWxpZ25WZXJ0aWNhbCA9PSBcImJvdHRvbVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHQuYW5jaG9yLnkgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuVGV4dEl0ZW0ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXHJcbntcclxuXHJcbn07XHJcblxyXG5UZXh0SXRlbS5wcm90b3R5cGUucmVhZENvcHkgPSBmdW5jdGlvbih0ZXh0KVxyXG57XHJcbiAgICBpZih0aGlzLl9jb3B5RGF0YVt0ZXh0XSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcHlEYXRhW3RleHRdO1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVGV4dEl0ZW0ucHJvdG90eXBlLmNoYW5nZUZvcm1hdCA9IGZ1bmN0aW9uKGZvcm1hdClcclxue1xyXG4gICAgdmFyIG5ld0Zvcm1hdCA9IHt9O1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlYWRDb3B5KHRoaXMuX2NvcHkpO1xyXG5cclxuICAgIGlmKGRhdGEuZm9ybWF0KVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiBkYXRhLmZvcm1hdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld0Zvcm1hdFtpXSA9IGRhdGEuZm9ybWF0W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGkgaW4gZm9ybWF0KVxyXG4gICAge1xyXG4gICAgICAgIG5ld0Zvcm1hdFtpXSA9IGZvcm1hdFtpXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90ZXh0LnN0eWxlID0gbmV3Rm9ybWF0O1xyXG59O1xyXG5cclxuVGV4dEl0ZW0ucHJvdG90eXBlLmluc2VydEFyZ3MgPSBmdW5jdGlvbihjb3B5KVxyXG57XHJcbiAgICBpZih0aGlzLl9hcmdzKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9hcmdzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29weSA9IGNvcHkucmVwbGFjZShcIioqXCIsIHRoaXMuX2FyZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3B5O1xyXG59XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtTdHJpbmd9XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVGV4dEl0ZW0ucHJvdG90eXBlLCBcImNvcHlcIiwge1xyXG5cclxuICAgIHNldDogZnVuY3Rpb24odGV4dClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9jb3B5ID0gdGV4dDtcclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucmVhZENvcHkodGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fdGV4dC50ZXh0ID0gZGF0YSAhPSBudWxsID8gZGF0YS5jb3B5IDogdGV4dDtcclxuICAgICAgICB0aGlzLl90ZXh0LnRleHQgPSB0aGlzLmluc2VydEFyZ3ModGhpcy5fdGV4dC50ZXh0KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiIsIi8qKlxyXG4gKiAgQ29sb3VyV2lwZVRyYW5zaXRpb25cclxuICpcclxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDE1LzA5LzIwMTUuXHJcbiAqXHJcbiAqL1xyXG5cclxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9Db21tb25cIik7XHJcbnZhciBUcmFuc2l0aW9uICAgICAgPSByZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IU51bWJlcn0gY29sb3JcclxuICogQHBhcmFtIHshTnVtYmVyfSBkdXJhdGlvblxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIENvbG91cldpcGVUcmFuc2l0aW9uKGNvbG9yLCBkdXJhdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvciB8fCAnYmxhY2snO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb24gfHwgMC44O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1BJWEkuR3JhcGhpY3N9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9xdWFkID0gbnVsbDtcclxuXHJcbiAgICBUcmFuc2l0aW9uLmNhbGwodGhpcyk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IENvbG91cldpcGVUcmFuc2l0aW9uO1xyXG5Db2xvdXJXaXBlVHJhbnNpdGlvbi5wcm90b3R5cGUgICAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShUcmFuc2l0aW9uLnByb3RvdHlwZSk7XHJcbkNvbG91cldpcGVUcmFuc2l0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICAgICAgPSBDb2xvdXJXaXBlVHJhbnNpdGlvbjtcclxuXHJcbkNvbG91cldpcGVUcmFuc2l0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdGhpcy5fcXVhZCA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbdGhpcy5fY29sb3JdKTtcclxuICAgIHRoaXMuX3F1YWQud2lkdGggPSBwMy5WaWV3LndpZHRoO1xyXG4gICAgdGhpcy5fcXVhZC5oZWlnaHQgPSBwMy5WaWV3LmhlaWdodDtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcXVhZCk7XHJcbn07XHJcblxyXG5Db2xvdXJXaXBlVHJhbnNpdGlvbi5wcm90b3R5cGUuaW4gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0aGlzLl9xdWFkLnggICAgPSBwMy5WaWV3LndpZHRoO1xyXG4gICAgVHdlZW5NYXgudG8odGhpcy5fcXVhZCwgdGhpcy5fZHVyYXRpb24gKiAwLjUsIHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZU91dCxcclxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgVHJhbnNpdGlvbi5wcm90b3R5cGUuaW4uY2FsbCh0aGlzLCB0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Db2xvdXJXaXBlVHJhbnNpdGlvbi5wcm90b3R5cGUub3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBUd2Vlbk1heC50byh0aGlzLl9xdWFkLCB0aGlzLl9kdXJhdGlvbiAqIDAuNSwge1xyXG4gICAgICAgIHg6IC0ocDMuVmlldy53aWR0aCksXHJcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW4sXHJcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLm91dC5jYWxsKHRoaXMsIHRoaXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkNvbG91cldpcGVUcmFuc2l0aW9uLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX3F1YWQud2lkdGggPSBwMy5WaWV3LndpZHRoO1xyXG4gICAgdGhpcy5fcXVhZC5oZWlnaHQgPSBwMy5WaWV3LmhlaWdodDtcclxufTsiLCIvKipcbiAqICBTY2VuZVxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA0LzA5LzIwMTUuXG4gKlxuICovXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNjZW5lKCkge1xuICAgIHRoaXMuc2lnbmFscyAgICAgICAgICAgID0ge307XG4gICAgdGhpcy5zaWduYWxzLm5leHQgICAgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMucHJldmlvdXMgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5ob21lICAgICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5zaWduYWxzLnBhdXNlICAgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxuICAgIFBJWEkuQ29udGFpbmVyLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgID0gU2NlbmU7XG5TY2VuZS5wcm90b3R5cGUgICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUpO1xuU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5lO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgc2NlbmUgaXMgaW5pdGlhbGl6ZWQuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gYSBzY2VuZSBpcyBkZXN0cm95ZWQuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zaWduYWxzLm5leHQuZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5wcmV2aW91cy5kaXNwb3NlKCk7XG4gICAgdGhpcy5zaWduYWxzLmhvbWUuZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5wYXVzZS5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBkZXZpY2UgZGltZW5zaW9ucyBhcmUgY2hhbmdlZC5cbiAqL1xuU2NlbmUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG92ZXJyaWRlXG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzY2VuZSBpcyAndG9wJyBvZiB0aGUgc3RhY2suXG4gKi9cblNjZW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgc2hvd24gZm9yIHRoZSBmaXJzdCB0aW1lLlxuICovXG5TY2VuZS5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oKTtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIHNob3duIC0gcmVnYXJkbGVzcyBvZiBhY3R1YWwgdmlzaWJpbGl0eS5cbiAqL1xuU2NlbmUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGVJbigpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgaGlkZGVuIC0gcmVnYXJkbGVzcyBvZiBhY3R1YWwgdmlzaWJpbGl0eS5cbiAqL1xuU2NlbmUucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblNjZW5lLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblNjZW5lLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSB8fCB3aW5kb3c7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICAgIH1cbn07IiwiLyoqXG4gKiAgU2NlbmVNYW5hZ2VyXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDQvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIFNjZW5lICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG52YXIgVHJhbnNpdGlvbiAgPSByZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuZU1hbmFnZXIoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuRGlzcGxheU9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YWdlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkNhbnZhc1JlbmRlcmVyIHwgUElYSS5XZWJHTFJlbmRlcmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5LjxTY2VuZT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGFjayA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1RyYW5zaXRpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2NlbmVNYW5hZ2VyO1xuXG4vKipcbiAqIEBwYXJhbSB7IVBJWEkuRGlzcGxheU9iamVjdH0gc3RhZ2VcbiAqIEBwYXJhbSB7IVBJWEkuQ2FudmFzUmVuZGVyZXIgfCAhUElYSS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlclxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihzdGFnZSwgcmVuZGVyZXIpIHtcbiAgICB0aGlzLl9zdGFnZSAgICAgICAgID0gc3RhZ2U7XG4gICAgdGhpcy5fcmVuZGVyZXIgICAgICA9IHJlbmRlcmVyO1xufTtcblxuLyoqXG4gKi9cblNjZW5lTWFuYWdlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3N0YWNrLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnRvcC51cGRhdGUoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IVNjZW5lfSBzY2VuZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uPX0gdHJhbnNpdGlvblxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHNjZW5lLCB0cmFuc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpIHJldHVybjtcblxuICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0cmFuc2l0aW9uIHx8IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgaWYgKHRoaXMuX3RyYW5zaXRpb24ucmVxdWlyZXNXZWJHTCAmJiAhKHRoaXMuX3JlbmRlcmVyIGluc3RhbmNlb2YgUElYSS5XZWJHTFJlbmRlcmVyKSkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uICAgICAgICAgICAgPSB0cmFuc2l0aW9uLmZhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucHVzaCAgICAgICA9IHRyYW5zaXRpb24ucHVzaDtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5yZXBsYWNlICAgID0gdHJhbnNpdGlvbi5yZXBsYWNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLndhaXQgICAgICAgPSB0cmFuc2l0aW9uLndhaXQ7XG4gICAgfVxuICAgIHRoaXMuX3RyYW5zaXRpb24uaW5pdCgpO1xuICAgIHRoaXMuX3N0YWdlLmFkZENoaWxkKHRoaXMuX3RyYW5zaXRpb24pO1xuXG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLmluLmFkZE9uY2UoZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc3dhcCwgW3NjZW5lXSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLm91dC5hZGRPbmNlKGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdHJhbnNpdGlvbi5wYXJlbnQucmVtb3ZlQ2hpbGQodHJhbnNpdGlvbik7XG4gICAgICAgIHRyYW5zaXRpb24uZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHAzLlRpbWVzdGVwLnF1ZXVlQ2FsbChzY2VuZS5hcHBlYXIsIG51bGwsIHNjZW5lKTtcbiAgICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3RyYW5zaXRpb24uaW4oKTtcblxuICAgIGZ1bmN0aW9uIHN3YXAoc2NlbmUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9wKSB7XG4gICAgICAgICAgICB0aGlzLnRvcC5oaWRlKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24ucHVzaCkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLnRvcCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wLnBhcmVudCAmJiB0aGlzLnRvcC5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy50b3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHJhbnNpdGlvbi5yZXBsYWNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zdGFjay5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IHRoaXMuX3N0YWNrW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAucGFyZW50LnJlbW92ZUNoaWxkKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2NlbmUuaW5pdCgpO1xuICAgICAgICBzY2VuZS5yZXNpemUoKTtcbiAgICAgICAgaWYgKCFzY2VuZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGRBdChzY2VuZSwgdGhpcy5fdHJhbnNpdGlvbi5wYXJlbnQuZ2V0Q2hpbGRJbmRleCh0aGlzLl90cmFuc2l0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhY2sucHVzaChzY2VuZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHAzLlRpbWVzdGVwLnF1ZXVlQ2FsbChzY2VuZS5hcHBlYXIsIG51bGwsIHNjZW5lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dCgpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fc3RhY2spO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtUcmFuc2l0aW9uPX0gdHJhbnNpdGlvblxuICogQHBhcmFtIHtOdW1iZXI9fSBjb3VudFxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHRyYW5zaXRpb24sIGNvdW50KSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpIHJldHVybjtcblxuICAgIHRoaXMuX3RyYW5zaXRpb24gICAgPSB0cmFuc2l0aW9uIHx8IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgY291bnQgICAgICAgICAgICAgICA9IE1hdGgubWF4KDEsIGNvdW50KSB8fCAxO1xuICAgIGlmICh0aGlzLl90cmFuc2l0aW9uLnJlcXVpcmVzV2ViR0wgJiYgISh0aGlzLl9yZW5kZXJlciBpbnN0YW5jZW9mIFBJWEkuV2ViR0xSZW5kZXJlcikpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiAgICAgICAgICAgID0gdHJhbnNpdGlvbi5mYWxsYmFjaygpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnB1c2ggICAgICAgPSB0cmFuc2l0aW9uLnB1c2g7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucmVwbGFjZSAgICA9IHRyYW5zaXRpb24ucmVwbGFjZTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi53YWl0ICAgICAgID0gdHJhbnNpdGlvbi53YWl0O1xuICAgIH1cbiAgICB0aGlzLl90cmFuc2l0aW9uLmluaXQoKTtcbiAgICB0aGlzLl9zdGFnZS5hZGRDaGlsZCh0aGlzLl90cmFuc2l0aW9uKTtcblxuICAgIHRoaXMuX3RyYW5zaXRpb24uc2lnbmFscy5pbi5hZGRPbmNlKGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgICAgcDMuVGltZXN0ZXAucXVldWVDYWxsKHN3YXAsIFtjb3VudF0sIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3RyYW5zaXRpb24uc2lnbmFscy5vdXQuYWRkT25jZShmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgIHRyYW5zaXRpb24ucGFyZW50LnJlbW92ZUNoaWxkKHRyYW5zaXRpb24pO1xuICAgICAgICB0cmFuc2l0aW9uLmRpc3Bvc2UoKTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbi53YWl0KSB7XG4gICAgICAgICAgICB0aGlzLnRvcC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLl90cmFuc2l0aW9uLmluKCk7XG5cbiAgICBmdW5jdGlvbiBzd2FwKGNvdW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsrIGkpIHtcbiAgICAgICAgICAgIHRoaXMudG9wLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudG9wLnBhcmVudCAmJiB0aGlzLnRvcC5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy50b3ApO1xuICAgICAgICAgICAgdGhpcy50b3AuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhY2sucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2NlbmUgPSB0aGlzLnRvcDtcbiAgICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICAgIGlmICghc2NlbmUucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlLmFkZENoaWxkQXQoc2NlbmUsIHRoaXMuX3RyYW5zaXRpb24ucGFyZW50LmdldENoaWxkSW5kZXgodGhpcy5fdHJhbnNpdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHNjZW5lLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dCgpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fc3RhY2spO1xuICAgIH1cbn07XG5cbi8qKlxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG59O1xuXG4vKipcbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NlbmU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zdGFjay5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgc2NlbmUgPSB0aGlzLl9zdGFja1tpXTtcbiAgICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucmVzaXplKCk7XG4gICAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lTWFuYWdlci5wcm90b3R5cGUsIFwic3RhZ2VcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQSVhJLkRpc3BsYXlPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWdlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmVNYW5hZ2VyLnByb3RvdHlwZSwgXCJ0b3BcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTY2VuZX1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhY2subGVuZ3RoID8gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmVNYW5hZ2VyLnByb3RvdHlwZSwgXCJ0cmFuc2l0aW9uSW5Qcm9ncmVzc1wiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl90cmFuc2l0aW9uICE9IG51bGwgPyB0cnVlIDogZmFsc2UpO1xuICAgIH1cbn0pO1xuIiwiLyoqXG4gKiAgVHJhbnNpdGlvblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA0LzA5LzIwMTUuXG4gKlxuICovXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFRyYW5zaXRpb24oKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgdGhpcy5zaWduYWxzICAgICAgICA9IHt9O1xuICAgIHRoaXMuc2lnbmFscy5pbiAgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMub3V0ICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnB1c2ggPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLndhaXQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZXF1aXJlc1dlYkdMID0gZmFsc2U7XG5cbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgPSBUcmFuc2l0aW9uO1xuVHJhbnNpdGlvbi5wcm90b3R5cGUgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XG5UcmFuc2l0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICA9IFRyYW5zaXRpb247XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5pbi5kaXNwb3NlKCk7XG4gICAgdGhpcy5zaWduYWxzLm91dC5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5pbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5pbi5kaXNwYXRjaCh0aGlzKTtcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLm91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5vdXQuZGlzcGF0Y2godGhpcyk7XG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtUcmFuc2l0aW9ufVxuICovXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuZmFsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTsiLCIvKipcbiAqICBBdWRpb01hbmFnZXJcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMjUvMDIvMjAxNi5cbiAqXG4gKi9cblxudmFyIEF1ZGlvUGFyYW1zICAgICA9IHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1zXCIpO1xuXG5mdW5jdGlvbiBBdWRpb01hbmFnZXIoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NhY2hlID0ge307XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SG93bH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX211c2ljID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNNdXRlZCA9IGZhbHNlO1xuXG5cbiAgICB2YXIgaGlkZGVuO1xuICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50LmhpZGRlbiA/IChoaWRkZW4gPSBcImhpZGRlblwiLFxuICAgICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSBcInZpc2liaWxpdHljaGFuZ2VcIikgICAgIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICA/IChoaWRkZW4gPSBcIm1vekhpZGRlblwiLFxuICAgICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSBcIm1venZpc2liaWxpdHljaGFuZ2VcIikgIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gICA/IChoaWRkZW4gPSBcIm1zSGlkZGVuXCIsXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwibXN2aXNpYmlsaXR5Y2hhbmdlXCIpICAgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gJiYgKGhpZGRlbiA9IFwid2Via2l0SGlkZGVuXCIsXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwid2Via2l0dmlzaWJpbGl0eWNoYW5nZVwiKTtcblxuICAgIC8vdmFyIHRoYXQgPSB0aGlzO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy52aXNpYmlsaXR5Q2hhbmdlLCBmdW5jdGlvbigpe1xuICAgICAgICBkb2N1bWVudFtoaWRkZW5dID8gSG93bGVyLnZvbHVtZSgwKSA6IEhvd2xlci52b2x1bWUoMSk7XG4gICAgICAgIC8vIWRvY3VtZW50W2hpZGRlbl0gJiYgIXRoYXQuX2lzTXV0ZWQgPyBIb3dsZXIudm9sdW1lKDEpIDogSG93bGVyLnZvbHVtZSgwKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc291bmQgdXBkYXRlZCcgKyB0aGF0Ll9pc011dGVkKTtcbiAgICB9LCBmYWxzZSk7XG5cbn1cbm1vZHVsZS5leHBvcnRzID0gQXVkaW9NYW5hZ2VyO1xuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5LjxzdHJpbmc+fSBzb3VuZHNcbiAqIEBwYXJhbSB7IUFycmF5LjxzdHJpbmc+fSBleHRlbnNpb25zXG4gKiBAcGFyYW0ge3N0cmluZz19IGJhc2VQYXRoXG4gKi9cbkF1ZGlvTWFuYWdlci5wcm90b3R5cGUuYWRkU291bmRzID0gZnVuY3Rpb24oc291bmRzLCBleHRlbnNpb25zLCBiYXNlUGF0aCkge1xuICAgIGJhc2VQYXRoID0gYmFzZVBhdGggfHwgXCJcIjtcblxuICAgIHZhciBob3dsLCBuYW1lLCB1cmwsIHVybHMsIGV4dGVuc2lvbiwgaSwgajtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc291bmRzLmxlbmd0aDsgKysgaSkge1xuICAgICAgICB1cmwgICAgID0gYmFzZVBhdGggKyBzb3VuZHNbaV07XG4gICAgICAgIHVybCAgICAgPSB1cmwuc3BsaXQoXCIvXCIpO1xuICAgICAgICBuYW1lICAgID0gdXJsW3VybC5sZW5ndGggLSAxXTtcblxuICAgICAgICB1cmxzID0gW107XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBleHRlbnNpb25zLmxlbmd0aDsgKysgaikge1xuICAgICAgICAgICAgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tqXTtcbiAgICAgICAgICAgIHVybHMucHVzaCh1cmwuam9pbihcIi9cIikgKyBleHRlbnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIGhvd2wgPSBuZXcgSG93bCh7XG4gICAgICAgICAgICBzcmM6IHVybHMsXG4gICAgICAgICAgICB2b2x1bWU6IDEuMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgb25sb2FkZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkVycm9yIGxvYWRpbmcgc291bmQgLSBcIiArIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaG93bC5uYW1lICAgICAgICAgICA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NhY2hlW25hbWVdICA9IGhvd2w7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFBcnJheS48c3RyaW5nPn0gc291bmRzXG4gKi9cbkF1ZGlvTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlU291bmRzID0gZnVuY3Rpb24oc291bmRzKSB7XG4gICAgdmFyIG5hbWUsIG4sIGhvd2w7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VuZHMubGVuZ3RoOyArKyBpKSB7XG4gICAgICAgIG5hbWUgPSBzb3VuZHNbaV07XG4gICAgICAgIGZvciAobiBpbiB0aGlzLl9jYWNoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBob3dsID0gdGhpcy5fY2FjaGVba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoaG93bC5uYW1lID09IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaG93bC51bmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhY2hlW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IXN0cmluZyB8IEFycmF5LjxzdHJpbmc+fSBuYW1lXG4gKiBAcGFyYW0ge0F1ZGlvUGFyYW1zPX0gcGFyYW1zXG4gKi9cbkF1ZGlvTWFuYWdlci5wcm90b3R5cGUucGxheVNvdW5kID0gZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IG5ldyBBdWRpb1BhcmFtcygpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5hbWUubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgdmFyIGhvd2wgPSB0aGlzLl9jYWNoZVtuYW1lXTtcbiAgICBpZiAoIWhvd2wpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGZpbmQgc291bmQgLSBcIiArIG5hbWUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBob3dsLnZvbHVtZShwYXJhbXMudm9sdW1lKTtcbiAgICBob3dsLmxvb3AocGFyYW1zLmxvb3ApO1xuXG4gICAgLy8gdG9kbyBzb3VuZCBjYWxsYmFja1xuXG4gICAgaWYgKHAzLkRldmljZSAmJiBwMy5EZXZpY2UuaXNBbmRyb2lkU3RvY2tCcm93c2VyKSB7XG4gICAgICAgIGhvd2wuYnVmZmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmZhZGVJbiA+IDAuMCkge1xuICAgICAgICB0aGlzLmZhZGVJbihob3dsLCBwYXJhbXMuZmFkZUluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBob3dsLnBsYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIGhvd2w7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IXN0cmluZyB8IEFycmF5LjxzdHJpbmc+fSBuYW1lXG4gKiBAcGFyYW0ge0F1ZGlvUGFyYW1zPX0gcGFyYW1zXG4gKi9cbkF1ZGlvTWFuYWdlci5wcm90b3R5cGUucGxheU11c2ljID0gZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IG5ldyBBdWRpb1BhcmFtcygpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuYW1lLmxlbmd0aCAtIDEpKV07XG4gICAgfVxuXG4gICAgLy8gc2tpcCBpZiBubyBjaGFuZ2VcbiAgICBpZiAodGhpcy5fbXVzaWMgJiYgdGhpcy5fbXVzaWMubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXNpYztcbiAgICB9XG5cbiAgICB2YXIgaG93bCA9IHRoaXMuX2NhY2hlW25hbWVdO1xuICAgIGlmICghaG93bCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZmluZCBtdXNpYyAtIFwiICsgbmFtZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhvd2wudm9sdW1lKHBhcmFtcy52b2x1bWUpO1xuICAgIGhvd2wubG9vcCh0cnVlKTtcblxuICAgIC8vIGNhbGxiYWNrXG4gICAgaG93bC5fX29uZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhcmFtcy5jYWxsYmFjayAmJiBwYXJhbXMuY2FsbGJhY2suY2FsbChwYXJhbXMuc2NvcGUpO1xuICAgIH07XG4gICAgaG93bC5vbihcImVuZFwiLCBob3dsLl9fb25lbmQpO1xuXG4gICAgaWYgKHAzLkRldmljZSAmJiBwMy5EZXZpY2UuaXNBbmRyb2lkU3RvY2tCcm93c2VyKSB7XG4gICAgICAgIGhvd2wuYnVmZmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmZhZGVJbiA+IDAuMCkge1xuICAgICAgICBpZiAodGhpcy5fbXVzaWMgJiYgdGhpcy5fbXVzaWMubmFtZSAhPSBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQodGhpcy5fbXVzaWMsIHBhcmFtcy5mYWRlSW4sIGZ1bmN0aW9uKGhvd2wpIHtcbiAgICAgICAgICAgICAgICBob3dsLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmFkZUluKGhvd2wsIHBhcmFtcy5mYWRlSW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX211c2ljICYmIHRoaXMuc3RvcE11c2ljKCk7XG4gICAgICAgIGhvd2wucGxheSgpO1xuICAgIH1cbiAgICB0aGlzLl9tdXNpYyA9IGhvd2w7XG4gICAgcmV0dXJuIGhvd2w7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVxuICovXG5BdWRpb01hbmFnZXIucHJvdG90eXBlLnN0b3BTb3VuZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaG93bDtcbiAgICBmb3IgKHZhciBuIGluIHRoaXMuX2NhY2hlKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZS5oYXNPd25Qcm9wZXJ0eShuKSkge1xuICAgICAgICAgICAgaG93bCA9IHRoaXMuX2NhY2hlW25dO1xuICAgICAgICAgICAgaWYgKGhvd2wubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaG93bC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbmFtZVxuICovXG5BdWRpb01hbmFnZXIucHJvdG90eXBlLnN0b3BNdXNpYyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbmFtZSB8fCB0aGlzLl9tdXNpYy5uYW1lO1xuICAgIGlmICh0aGlzLl9tdXNpYyAmJiB0aGlzLl9tdXNpYy5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbXVzaWMuX19vbmVuZCAmJiB0aGlzLl9tdXNpYy5vZmYoXCJlbmRcIiwgdGhpcy5fbXVzaWMuX19vbmVuZCk7XG4gICAgICAgIHRoaXMuX211c2ljLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fbXVzaWMgPSBudWxsO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHshbnVtYmVyfSB2YWx1ZVxuICovXG5BdWRpb01hbmFnZXIucHJvdG90eXBlLm11dGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2lzTXV0ZWQgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5faXNNdXRlZCkge1xuICAgICAgICAvL0hvd2xlci5tdXRlKHRydWUpO1xuICAgICAgICBIb3dsZXIudm9sdW1lKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vSG93bGVyLm11dGUoZmFsc2UpO1xuICAgICAgICBIb3dsZXIudm9sdW1lKDEpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHshSG93bH0gaG93bFxuICogQHBhcmFtIHtudW1iZXI9fSBkdXJhdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5BdWRpb01hbmFnZXIucHJvdG90eXBlLmZhZGVJbiA9IGZ1bmN0aW9uKGhvd2wsIGR1cmF0aW9uLCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDEuMDtcbiAgICBob3dsLnZvbHVtZSgwLjApO1xuICAgIGhvd2wucGxheSgpO1xuICAgIGhvd2wuX192b2x1bWUgPSBob3dsLl92b2x1bWU7XG5cbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YoaG93bCk7XG4gICAgVHdlZW5NYXgudG8oaG93bCwgZHVyYXRpb24sIHtcbiAgICAgICAgX192b2x1bWU6IDEuMCxcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcbiAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaG93bC52b2x1bWUoaG93bC5fX3ZvbHVtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBkYXRlU2NvcGU6IHRoaXMsXG4gICAgICAgIG9uQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgICBvbkNvbXBsZXRlUGFyYW1zOiBbaG93bF0sXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogc2NvcGVcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshSG93bH0gaG93bFxuICogQHBhcmFtIHtudW1iZXI9fSBkdXJhdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5BdWRpb01hbmFnZXIucHJvdG90eXBlLmZhZGVPdXQgPSBmdW5jdGlvbihob3dsLCBkdXJhdGlvbiwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxLjA7XG4gICAgaG93bC5fX3ZvbHVtZSA9IGhvd2wuX3ZvbHVtZTtcblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZihob3dsKTtcbiAgICBUd2Vlbk1heC50byhob3dsLCBkdXJhdGlvbiwge1xuICAgICAgICBfX3ZvbHVtZTogMC4wLFxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxuICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBob3dsLnZvbHVtZShob3dsLl9fdm9sdW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25VcGRhdGVTY29wZTogdGhpcyxcbiAgICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICAgIG9uQ29tcGxldGVQYXJhbXM6IFtob3dsXSxcbiAgICAgICAgb25Db21wbGV0ZVNjb3BlOiBzY29wZVxuICAgIH0pO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1ZGlvTWFuYWdlci5wcm90b3R5cGUsIFwiaXNNdXRlXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7IWJvb2xlYW59XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTXV0ZWQ7XG4gICAgfVxufSk7XG4iLCIvKipcbiAqICBBdWRpb1BhcmFtc1xuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAyNS8wMi8yMDE2LlxuICpcbiAqL1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBBdWRpb1BhcmFtcygpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudm9sdW1lID0gMS4wO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5sb29wID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZGVsYXkgPSAwLjA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZmFkZUluID0gMC4wO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnByaW9yaXR5ID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqL1xuICAgIHRoaXMuc2NvcGUgPSB3aW5kb3c7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvUGFyYW1zO1xuIiwiXHJcbnZhciBDb21tb24gICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gUmFpbE1hbmFnZXIoKSB7XHJcbiAgICBcclxuICAgIHRoaXMucmFpbFR5cGVzICAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLnJhaWxDb29yZHMgICAgICAgICAgICAgPSBudWxsO1xyXG4gICAgdGhpcy5yYWlsRGVncmVlcyAgICAgICAgICAgID0gbnVsbDtcclxuICAgIHRoaXMuZGlzdGFuY2VGcm9tR3JvdW5kICAgICA9IDE5NTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFJhaWxNYW5hZ2VyO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVCTElDIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblJhaWxNYW5hZ2VyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdGhpcy5yYWlsVHlwZXMgPSB7XHJcbiAgICAgICAgXCJyYWlsXzAwMVwiOlsndXAnLCAnbGVmdCddLFxyXG4gICAgICAgIFwicmFpbF8wMDJcIjpbJ3VwJywgJ3JpZ2h0J10sXHJcbiAgICAgICAgXCJyYWlsXzAwM1wiOlsnZG93bicsICdsZWZ0J10sXHJcbiAgICAgICAgXCJyYWlsXzAwNFwiOlsnZG93bicsICdyaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wMDVcIjpbJ3VwbGVmdCcsICdkb3ducmlnaHQnXSxcclxuICAgICAgICBcInJhaWxfMDA2XCI6Wyd1cHJpZ2h0JywgJ2Rvd25sZWZ0J10sXHJcbiAgICAgICAgXCJyYWlsXzAwN1wiOlsndXAnLCAnZG93biddLFxyXG4gICAgICAgIFwicmFpbF8wMDhcIjpbJ2xlZnQnLCAncmlnaHQnXSxcclxuICAgICAgICBcInJhaWxfMDA5XCI6Wyd1cGxlZnQnLCAndXByaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wMTBcIjpbJ3VwbGVmdCcsICdkb3dubGVmdCddLFxyXG4gICAgICAgIFwicmFpbF8wMTFcIjpbJ2Rvd25sZWZ0JywgJ2Rvd25yaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wMTJcIjpbJ3VwcmlnaHQnLCAnZG93bnJpZ2h0J10sXHJcbiAgICAgICAgXCJyYWlsXzAxM1wiOlsndXAnLCAnZG93bmxlZnQnXSxcclxuICAgICAgICBcInJhaWxfMDE0XCI6Wyd1cCcsICdkb3ducmlnaHQnXSxcclxuICAgICAgICBcInJhaWxfMDE1XCI6Wyd1cGxlZnQnLCAnZG93biddLFxyXG4gICAgICAgIFwicmFpbF8wMTZcIjpbJ3VwcmlnaHQnLCAnZG93biddLFxyXG4gICAgICAgIFwicmFpbF8wMTdcIjpbJ2xlZnQnLCAndXByaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wMThcIjpbJ3VwbGVmdCcsICdyaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wMTlcIjpbJ2xlZnQnLCAnZG93bnJpZ2h0J10sXHJcbiAgICAgICAgXCJyYWlsXzAyMFwiOlsnZG93bmxlZnQnLCAncmlnaHQnXSxcclxuICAgICAgICBcInJhaWxfMDIxXCI6WydyaWdodCcsICdlbmQnXSxcclxuICAgICAgICBcInJhaWxfMDIyXCI6WydsZWZ0JywgJ2VuZCddLFxyXG4gICAgICAgIFwicmFpbF8wMjNcIjpbJ3VwbGVmdCcsICdlbmQnXSxcclxuICAgICAgICBcInJhaWxfMDI0XCI6Wydkb3dubGVmdCcsICdlbmQnXSxcclxuICAgICAgICBcInJhaWxfMDI1XCI6Wyd1cHJpZ2h0JywgJ2VuZCddLFxyXG4gICAgICAgIFwicmFpbF8wMjZcIjpbJ2Rvd25yaWdodCcsICdlbmQnXSxcclxuICAgICAgICBcInJhaWxfMDI3XCI6Wyd1cGxlZnQnLCAnZG93bicsICdyaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wMjhcIjpbJ2xlZnQnLCAndXByaWdodCcsICdkb3duJ10sXHJcbiAgICAgICAgXCJyYWlsXzAyOVwiOlsndXBsZWZ0JywgJ2Rvd25sZWZ0JywgJ3JpZ2h0J10sXHJcbiAgICAgICAgXCJyYWlsXzAzMFwiOlsnbGVmdCcsICdkb3dubGVmdCcsICd1cCddLFxyXG4gICAgICAgIFwicmFpbF8wMzFcIjpbJ2Rvd25sZWZ0JywgJ3VwcmlnaHQnLCAnZG93bnJpZ2h0J10sXHJcbiAgICAgICAgXCJyYWlsXzAzMlwiOlsndXBsZWZ0JywgJ2Rvd25sZWZ0JywgJ2Rvd25yaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wMzNcIjpbJ2Rvd25sZWZ0JywgJ3VwJywgJ3JpZ2h0J10sXHJcbiAgICAgICAgXCJyYWlsXzAzNFwiOlsnbGVmdCcsICd1cCcsICdkb3ducmlnaHQnXSxcclxuICAgICAgICBcInJhaWxfMDM1XCI6Wydkb3dubGVmdCcsICdkb3duJywgJ3VwJ10sXHJcbiAgICAgICAgXCJyYWlsXzAzNlwiOlsnZG93bicsICdkb3ducmlnaHQnLCAndXAnXSxcclxuICAgICAgICBcInJhaWxfMDM3XCI6Wydkb3dubGVmdCcsICd1cCcsICdkb3ducmlnaHQnXSxcclxuICAgICAgICBcInJhaWxfMDM4XCI6WydsZWZ0JywgJ3VwbGVmdCcsICdkb3ducmlnaHQnXSxcclxuICAgICAgICBcInJhaWxfMDM5XCI6WydsZWZ0JywgJ3VwbGVmdCcsICdyaWdodCddLFxyXG4gICAgICAgIFwicmFpbF8wNDBcIjpbJ2xlZnQnLCAndXAnLCAnZG93biddLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3EgPSBDb21tb24uc3F1YXJlVGlsZVNpemU7XHJcblxyXG4gICAgdGhpcy5yYWlsQ29vcmRzID0ge1xyXG4gICAgICAgICd1cCc6e3g6MCwgeTotc3F9LFxyXG4gICAgICAgICdkb3duJzp7eDowLCB5OnNxfSxcclxuICAgICAgICAnbGVmdCc6e3g6LXNxKjIsIHk6MH0sXHJcbiAgICAgICAgJ3JpZ2h0Jzp7eDpzcSoyLCB5OjB9LFxyXG4gICAgICAgICd1cGxlZnQnOnt4Oi1zcSwgeTotc3EvMn0sXHJcbiAgICAgICAgJ3VwcmlnaHQnOnt4OnNxLCB5Oi1zcS8yfSxcclxuICAgICAgICAnZG93bmxlZnQnOnt4Oi1zcSwgeTpzcS8yfSxcclxuICAgICAgICAnZG93bnJpZ2h0Jzp7eDpzcSwgeTpzcS8yfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJhaWxEZWdyZWVzID0geyd1cCc6IDAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXByaWdodCc6IDQ1LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogOTAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZG93bnJpZ2h0JzogMTM1LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rvd24nOiAxODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkb3dubGVmdCc6MjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGVmdCc6MjcwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXBsZWZ0JzozMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnJhaWxDb29yZHMpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGFuZ1JhZHMgPSBNYXRoLmF0YW4yKC10aGlzLnJhaWxDb29yZHNbaV0ueSwgLXRoaXMucmFpbENvb3Jkc1tpXS54KTtcclxuICAgICAgICBpZihhbmdSYWRzIDwgMCkgYW5nUmFkcyA9ICgyICogTWF0aC5QSSkgKyBhbmdSYWRzO1xyXG4gICAgICAgIHRoaXMucmFpbENvb3Jkc1tpXS5hbmdsZSA9IGFuZ1JhZHMgLSAoOTAqUElYSS5ERUdfVE9fUkFEKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5SYWlsTWFuYWdlci5wcm90b3R5cGUuZ2V0T3Bwb3NpdGVEaXJlY3Rpb24gPSBmdW5jdGlvbihkaXJlY3Rpb24pXHJcbntcclxuICAgIHZhciBuZXdEaXIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYoZGlyZWN0aW9uLmluZGV4T2YoXCJsZWZ0XCIpID4gLTEpXHJcbiAgICAgICAgbmV3RGlyID0gZGlyZWN0aW9uLnJlcGxhY2UoXCJsZWZ0XCIsIFwicmlnaHRcIik7XHJcbiAgICBlbHNlIGlmKGRpcmVjdGlvbi5pbmRleE9mKFwicmlnaHRcIikgPiAtMSlcclxuICAgICAgICBuZXdEaXIgPSBkaXJlY3Rpb24ucmVwbGFjZShcInJpZ2h0XCIsIFwibGVmdFwiKTtcclxuXHJcbiAgICBpZihkaXJlY3Rpb24uaW5kZXhPZihcInVwXCIpID4gLTEpXHJcbiAgICAgICAgbmV3RGlyID0gbmV3RGlyLnJlcGxhY2UoXCJ1cFwiLCBcImRvd25cIik7XHJcbiAgICBlbHNlIGlmKGRpcmVjdGlvbi5pbmRleE9mKFwiZG93blwiKSA+IC0xKVxyXG4gICAgICAgIG5ld0RpciA9IG5ld0Rpci5yZXBsYWNlKFwiZG93blwiLCBcInVwXCIpO1xyXG5cclxuICAgIHJldHVybiBuZXdEaXI7XHJcbn07XHJcblxyXG5SYWlsTWFuYWdlci5wcm90b3R5cGUuZ2V0VGV4dHVyZUJ5Q29ubmVjdHMgPSBmdW5jdGlvbihjb25uZWN0MSwgY29ubmVjdDIpXHJcbntcclxuICAgIHZhciBjYW5kaWRhdGVzID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucmFpbFR5cGVzKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucmFpbFR5cGVzW2ldWzBdID09IGNvbm5lY3QxIHx8IHRoaXMucmFpbFR5cGVzW2ldWzFdID09IGNvbm5lY3QxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGkgaW4gY2FuZGlkYXRlcylcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnJhaWxUeXBlc1tjYW5kaWRhdGVzW2ldXVswXSA9PSBjb25uZWN0MiB8fCB0aGlzLnJhaWxUeXBlc1tjYW5kaWRhdGVzW2ldXVsxXSA9PSBjb25uZWN0MilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuUmFpbE1hbmFnZXIucHJvdG90eXBlLmdldENvbm5lY3RpbmdBbmdsZSA9IGZ1bmN0aW9uKGQxLCBkMilcclxue1xyXG4gICAgdmFyIHJlc3VsdCA9IE1hdGguYWJzKHRoaXMucmFpbERlZ3JlZXNbZDFdIC0gdGhpcy5yYWlsRGVncmVlc1tkMl0pO1xyXG5cclxuICAgIGlmKHJlc3VsdCA+IDE4MClcclxuICAgICAgICByZXN1bHQgPSAzNjAgLSByZXN1bHQ7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVWRU5UU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwiXHJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgU2ltcGxlU2NyZWVuICAgID0gcmVxdWlyZShcIi4uL3NjcmVlbnMvU2ltcGxlU2NyZWVuXCIpO1xyXG52YXIgVGV4dEl0ZW0gICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvVGV4dEl0ZW1cIik7XHJcbnZhciBMYXJnZUJ1dHRvbiAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9MYXJnZUJ1dHRvblwiKTtcclxudmFyIFNtYWxsQnV0dG9uICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL1NtYWxsQnV0dG9uXCIpO1xyXG52YXIgRW1pdHRlciAgICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvRW1pdHRlclwiKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlNUUlVDVE9SXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBHYW1lT3Zlck92ZXJsYXkoKVxyXG57XHJcbiAgICB0aGlzLl9tZXNzYWdlQm94ICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9iZyAgICAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9sZWZ0R2lybCAgICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9yaWdodEdpcmwgICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9sZWZ0RW1pdHRlciAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9yaWdodEVtaXR0ZXIgICAgICA9IG51bGw7XHJcblxyXG4gICAgU2ltcGxlU2NyZWVuLmNhbGwodGhpcyk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lT3Zlck92ZXJsYXk7XHJcbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xyXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2FtZU92ZXJPdmVybGF5O1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgY29uc29sZS5sb2coXCJTUExBU0ggSU5JVElBTElaRURcIik7XHJcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWydibGFjayddKTtcclxuICAgIGJnLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xyXG4gICAgYmcuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcclxuICAgIGJnLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgQ29tbW9uLlNUQUdFX1dJRFRILCBDb21tb24uU1RBR0VfSEVJR0hUKTtcclxuICAgIGJnLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIGJnLmFscGhhID0gMC43NTtcclxuICAgIHRoaXMuYWRkQ2hpbGQoYmcpO1xyXG5cclxuICAgIHZhciBtZXNzYWdlQm94ID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFuZWxcIikpO1xyXG4gICAgbWVzc2FnZUJveC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XHJcbiAgICBtZXNzYWdlQm94LnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xyXG4gICAgbWVzc2FnZUJveC55ID0gKENvbW1vbi5TVEFHRV9IRUlHSFQgLyAyKSAtIDMwO1xyXG4gICAgdGhpcy5hZGRDaGlsZChtZXNzYWdlQm94KTtcclxuXHJcbiAgICB0aGlzLl9tZXNzYWdlQm94ID0gbWVzc2FnZUJveDtcclxuICAgIHRoaXMuX2JnID0gYmc7XHJcblxyXG4gICAgdmFyIHRpdGxlID0gbmV3IFRleHRJdGVtKFwiQ0FVR0hUXCIpO1xyXG4gICAgdGl0bGUueCA9IDA7XHJcbiAgICB0aXRsZS55ID0gLTIzNTtcclxuICAgIHRoaXMuX21lc3NhZ2VCb3guYWRkQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIHRoaXMuX3JpZ2h0R2lybCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImdpcmwtMVwiKSk7XHJcbiAgICB0aGlzLl9yaWdodEdpcmwuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMCwgMSk7XHJcbiAgICB0aGlzLl9yaWdodEdpcmwueCA9IENvbW1vbi5TVEFHRV9XSURUSDtcclxuICAgIHRoaXMuX3JpZ2h0R2lybC55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCArIDQwO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9yaWdodEdpcmwpOyBcclxuXHJcbiAgICB0aGlzLl9sZWZ0R2lybCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImdpcmwtMlwiKSk7XHJcbiAgICB0aGlzLl9sZWZ0R2lybC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgxLCAxKTtcclxuICAgIHRoaXMuX2xlZnRHaXJsLnggPSAwO1xyXG4gICAgdGhpcy5fbGVmdEdpcmwueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xlZnRHaXJsKTtcclxuXHJcbiAgICB0aGlzLl9sZWZ0RW1pdHRlciA9IEVtaXR0ZXIuYWRkKHRoaXMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInBhcnRpY2xlX21lbnVfc3RlYW1cIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDTEVfZW1pdHRlcl9zdGVhbV9lZGdlcywgKENvbW1vbi5TVEFHRV9XSURUSCAvIDIpIC0gKHAzLlZpZXcud2lkdGggLyAyKSwgQ29tbW9uLlNUQUdFX0hFSUdIVCAvIDIsIDEsIGZhbHNlLCAxKTtcclxuXHJcbiAgICB0aGlzLl9yaWdodEVtaXR0ZXIgPSBFbWl0dGVyLmFkZCh0aGlzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9tZW51X3N0ZWFtXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2VtaXR0ZXJfc3RlYW1fZWRnZXMsIChDb21tb24uU1RBR0VfV0lEVEggLyAyKSArIChwMy5WaWV3LndpZHRoIC8gMiksIENvbW1vbi5TVEFHRV9IRUlHSFQgLyAyLCAxLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgdmFyIGNvbnRpbnVlQnV0dG9uID0gbmV3IExhcmdlQnV0dG9uKFwiaWNvbl9wbGF5XCIpO1xyXG4gICAgY29udGludWVCdXR0b24ueCA9IDA7XHJcbiAgICBjb250aW51ZUJ1dHRvbi55ID0gMjcwO1xyXG4gICAgY29udGludWVCdXR0b24uc2lnbmFscy5jbGljay5hZGRPbmNlKHRoaXMub25Db250aW51ZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgY29udGludWVCdXR0b24uZG93blNvdW5kTmFtZSA9IFwic2Z4X2J0bl9wcmVzc19wbGF5XzAwXCI7XHJcbiAgICB0aGlzLl9tZXNzYWdlQm94LmFkZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcclxuXHJcbiAgICB0aGlzLl9iYWNrQnV0dG9uID0gbmV3IFNtYWxsQnV0dG9uKFwiaWNvbl9ob21lXCIpO1xyXG4gICAgdGhpcy5fYmFja0J1dHRvbi55ID0gdGhpcy5fZ3VpQnV0dG9uVG9wTWFyZ2luO1xyXG4gICAgdGhpcy5fYmFja0J1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uQmFja0NsaWNrZWQsIHRoaXMpO1xyXG4gICAgdGhpcy5fYmFja0J1dHRvbi5kb3duU291bmROYW1lID0gXCJzZnhfYnRuX3ByZXNzX2Jja18wMFwiO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9iYWNrQnV0dG9uKTtcclxuXHJcbiAgICBDb21tb24ubGV2ZWxEYXRhLnByZXBhcmVEYXRhKCk7XHJcbiAgICBcclxuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRNdXNpY1BsYXkuZGlzcGF0Y2goJ211c2ljX2dhbWVvdmVyX2xvc2VfMDAnKTtcclxufTtcclxuXHJcbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKi9cclxuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX2JhY2tCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0KCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7Kj19c2NvcGVcclxuICovXHJcbkdhbWVPdmVyT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XHJcbiAgICBcclxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwodGhpcyk7XHJcblxyXG4gICAgdGhpcy5fbWVzc2FnZUJveC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNiwgMC42KTtcclxuICAgIHRoaXMuX2JnLmFscGhhID0gMDtcclxuXHJcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuICAgIENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xyXG5cclxuICAgIHRsLnRvKHRoaXMuX21lc3NhZ2VCb3guc2NhbGUsIC41LCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSk7XHJcbiAgICB0bC50byh0aGlzLl9sZWZ0R2lybCwgLjQsIHt4OihDb21tb24uU1RBR0VfV0lEVEgvMikrMTEwLCBlYXNlOkV4cG8uZWFzZU91dCwgb25TdGFydFNjb3BlOnRoaXMsIG9uU3RhcnQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLl9sZWZ0RW1pdHRlci5lbWl0ID0gdHJ1ZTtcclxuICAgIH19KTtcclxuICAgIHRsLnRvKHRoaXMuX3JpZ2h0R2lybCwgLjQsIHt4OihDb21tb24uU1RBR0VfV0lEVEgvMiktODAsIGVhc2U6RXhwby5lYXNlT3V0LCBvblN0YXJ0U2NvcGU6dGhpcywgb25TdGFydDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0RW1pdHRlci5lbWl0ID0gdHJ1ZTtcclxuICAgIH19KTtcclxuICAgIHRsLnRvKHRoaXMuX2JnLCAuNSwge2FscGhhOjAuNzUsIGVhc2U6U2luZS5lYXNlT3V0fSwgMCk7XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xyXG4gKiBAcGFyYW0geyo9fSBzY29wZVxyXG4gKi9cclxuR2FtZU92ZXJPdmVybGF5LnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XHJcbiAgICBcclxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLm9uQmFja0NsaWNrZWQgPSBmdW5jdGlvbihidXR0b24pXHJcbntcclxuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5kaXNwYXRjaCgpO1xyXG59XHJcblxyXG5HYW1lT3Zlck92ZXJsYXkucHJvdG90eXBlLm9uQ29udGludWVDbGlja2VkID0gZnVuY3Rpb24oYnV0dG9uKVxyXG57XHJcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4iLCJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNpbXBsZVNjcmVlbiAgICA9IHJlcXVpcmUoXCIuLi9zY3JlZW5zL1NpbXBsZVNjcmVlblwiKTtcbnZhciBUZXh0SXRlbSAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9UZXh0SXRlbVwiKTtcbnZhciBMYXJnZUJ1dHRvbiAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9MYXJnZUJ1dHRvblwiKTtcbnZhciBFbWl0dGVyICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9FbWl0dGVyXCIpO1xudmFyIEF1ZGlvUGFyYW1zICAgICA9IHJlcXVpcmUoXCIuLi9tYW5hZ2Vycy9BdWRpb1BhcmFtc1wiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBMZXZlbENvbXBsZXRlT3ZlcmxheShsZXZlbCwgdG9rZW5zKVxue1xuICAgIHRoaXMuX2xldmVsICAgICAgICAgICAgICAgPSBsZXZlbDtcbiAgICB0aGlzLl90b2tlbnMgICAgICAgICAgICAgID0gdG9rZW5zO1xuXG4gICAgdGhpcy5fc3RhckdyYXBoaWNzICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fc3RhckdyYXBoaWNzUmVhY2hlZCA9IG51bGw7XG4gICAgdGhpcy5fc3RhckJhcnMgICAgICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fdG9rZW5OdW1iZXJzICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fc3RhclBlcmNlbnRhZ2VzICAgICA9IG51bGw7XG4gICAgdGhpcy5fc3RhckRlY29zICAgICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fc3RhckRlY29UaW50ICAgICAgICA9IDB4OEMyQTNBO1xuXG4gICAgdGhpcy5fbGV2ZWxOZXdseUNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fbWVzc2FnZUJveCAgICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fYmcgICAgICAgICAgICAgICAgICA9IG51bGw7XG5cbiAgICBTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWxDb21wbGV0ZU92ZXJsYXk7XG5MZXZlbENvbXBsZXRlT3ZlcmxheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuTGV2ZWxDb21wbGV0ZU92ZXJsYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGV2ZWxDb21wbGV0ZU92ZXJsYXk7XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuTGV2ZWxDb21wbGV0ZU92ZXJsYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgY29uc29sZS5sb2coXCJTUExBU0ggSU5JVElBTElaRURcIik7XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWydibGFjayddKTtcbiAgICBiZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcbiAgICBiZy5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuICAgIGJnLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgQ29tbW9uLlNUQUdFX1dJRFRILCBDb21tb24uU1RBR0VfSEVJR0hUKTtcbiAgICBiZy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgYmcuYWxwaGEgPSAwLjU7XG4gICAgdGhpcy5hZGRDaGlsZChiZyk7XG5cbiAgICB2YXIgbWVzc2FnZUJveCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhbmVsXCIpKTtcbiAgICBtZXNzYWdlQm94LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICBtZXNzYWdlQm94LnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xuICAgIG1lc3NhZ2VCb3gueSA9IChDb21tb24uU1RBR0VfSEVJR0hUIC8gMikgLSAzMDtcbiAgICB0aGlzLmFkZENoaWxkKG1lc3NhZ2VCb3gpO1xuXG4gICAgdGhpcy5fYmcgPSBiZztcbiAgICB0aGlzLl9tZXNzYWdlQm94ID0gbWVzc2FnZUJveDtcblxuICAgIHZhciB0aXRsZSA9IG5ldyBUZXh0SXRlbShcIkxFVkVMX0NPTVBMRVRFXCIpO1xuICAgIHRpdGxlLnggPSAwO1xuICAgIHRpdGxlLnkgPSAtMjM1O1xuICAgIG1lc3NhZ2VCb3guYWRkQ2hpbGQodGl0bGUpO1xuXG4gICAgdmFyIGNvbnRpbnVlQnV0dG9uID0gbmV3IExhcmdlQnV0dG9uKFwiaWNvbl9wbGF5XCIpO1xuICAgIGNvbnRpbnVlQnV0dG9uLnggPSAwO1xuICAgIGNvbnRpbnVlQnV0dG9uLnkgPSAyNzA7XG4gICAgY29udGludWVCdXR0b24uc2lnbmFscy5jbGljay5hZGRPbmNlKHRoaXMub25Db250aW51ZUNsaWNrZWQsIHRoaXMpO1xuICAgIGNvbnRpbnVlQnV0dG9uLmRvd25Tb3VuZE5hbWUgPSBcInNmeF9idG5fcHJlc3NfcGxheV8wMFwiO1xuICAgIG1lc3NhZ2VCb3guYWRkQ2hpbGQoY29udGludWVCdXR0b24pO1xuXG4gICAgdmFyIHBlcmNlbnQgPSB0aGlzLl90b2tlbnMgLyBDb21tb24ubGV2ZWxEYXRhLmxldmVsc1t0aGlzLl9sZXZlbF0udG90YWxfdG9rZW5zO1xuICAgIHZhciBzdGFyUmVzdWx0ID0gMDtcblxuICAgIGlmKHBlcmNlbnQgPiAwLjk5OSlcbiAgICAgICAgc3RhclJlc3VsdCA9IDM7XG4gICAgZWxzZSBpZihwZXJjZW50ID4gMC42KVxuICAgICAgICBzdGFyUmVzdWx0ID0gMjtcbiAgICBlbHNlIGlmKHBlcmNlbnQgPiAwLjI1KVxuICAgICAgICBzdGFyUmVzdWx0ID0gMTtcblxuICAgIGlmKENvbW1vbi5zYXZlZERhdGEubGV2ZWxVbmxvY2tzW3RoaXMuX2xldmVsXS5jb21wbGV0ZWQgPT0gZmFsc2UpXG4gICAgICAgIHRoaXMuX2xldmVsTmV3bHlDb21wbGV0ZWQgPSB0cnVlO1xuXG4gICAgQ29tbW9uLnNhdmVkRGF0YS5sZXZlbFVubG9ja3NbdGhpcy5fbGV2ZWxdLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgaWYoc3RhclJlc3VsdCA+IENvbW1vbi5zYXZlZERhdGEubGV2ZWxVbmxvY2tzW3RoaXMuX2xldmVsXS5zdGFycylcbiAgICB7XG4gICAgICAgIENvbW1vbi5zYXZlZERhdGEubGV2ZWxVbmxvY2tzW3RoaXMuX2xldmVsXS5zdGFycyA9IHN0YXJSZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIENvbW1vbi5zYXZlZERhdGEuc2F2ZSgpO1xuXG4gICAgdGhpcy5fc3RhckdyYXBoaWNzID0gW107XG4gICAgdGhpcy5fc3RhckdyYXBoaWNzUmVhY2hlZCA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlXTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCAzOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgc3RhciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnc3Rhcl9iaWdfb2ZmJykpO1xuICAgICAgICBzdGFyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgc3Rhci55ID0gaSA9PSAxID8gLTkwIDogLTYwO1xuICAgICAgICBzdGFyLnggPSAtMTMwICsgKGkqMTMwKVxuICAgICAgICBpZihpID09IDApXG4gICAgICAgICAgICBzdGFyLnJvdGF0aW9uID0gLTIwICogUElYSS5ERUdfVE9fUkFEO1xuICAgICAgICBlbHNlIGlmKGkgPT0gMilcbiAgICAgICAgICAgIHN0YXIucm90YXRpb24gPSAyMCAqIFBJWEkuREVHX1RPX1JBRDtcblxuICAgICAgICBtZXNzYWdlQm94LmFkZENoaWxkKHN0YXIpO1xuICAgICAgICB0aGlzLl9zdGFyR3JhcGhpY3MucHVzaChzdGFyKTtcbiAgICB9XG5cbiAgICB2YXIgb3JuYW1lbnQgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ3N0YXJfYmlnX29ybmFtZW50JykpO1xuICAgIG9ybmFtZW50LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICBvcm5hbWVudC55ID0gMjA7XG4gICAgbWVzc2FnZUJveC5hZGRDaGlsZChvcm5hbWVudCk7XG5cbiAgICB2YXIgc3RhckJhckhvbGRlciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnc3RhcmJhcl9iZycpKTtcbiAgICBzdGFyQmFySG9sZGVyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICBzdGFyQmFySG9sZGVyLnkgPSAxMjA7XG4gICAgbWVzc2FnZUJveC5hZGRDaGlsZChzdGFyQmFySG9sZGVyKTtcblxuICAgIHRoaXMuX3N0YXJCYXJzID0gW107XG4gICAgdmFyIGJhcldpZHRoID0gMTY7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDI1OyBpKyspXG4gICAge1xuICAgICAgICB2YXIgYmFyID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdiYXJfc3RpY2tfb2ZmJykpO1xuICAgICAgICBiYXIuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICBiYXIueCA9IC0oKGJhcldpZHRoKjI1KS8yKSArIChiYXJXaWR0aCppKSAtIChiYXJXaWR0aC80KTtcbiAgICAgICAgdGhpcy5fc3RhckJhcnMucHVzaChiYXIpO1xuICAgICAgICBzdGFyQmFySG9sZGVyLmFkZENoaWxkKGJhcik7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBjb2luID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdjb2luXzAwMScpKTtcbiAgICAgICAgY29pbi5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgICAgIGNvaW4ueCA9ICh0aGlzLl9zdGFyQmFyc1swXS54IC0gNTMpICsgKDMqaSkgKyAxMDtcbiAgICAgICAgY29pbi55ID0gMyAtICgzKmkpO1xuICAgICAgICBzdGFyQmFySG9sZGVyLmFkZENoaWxkKGNvaW4pO1xuICAgIH1cblxuICAgIHRoaXMuX3Rva2VuTnVtYmVycyA9IFtdO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBudW1iZXIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJzlfb2ZmJykpO1xuICAgICAgICBudW1iZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgICAgIG51bWJlci5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgICAgIG51bWJlci54ID0gKHRoaXMuX3N0YXJCYXJzW3RoaXMuX3N0YXJCYXJzLmxlbmd0aC0xXS54ICsgNjApIC0gKGkqMjApO1xuICAgICAgICBudW1iZXIueSA9IDEwO1xuICAgICAgICBudW1iZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBzdGFyQmFySG9sZGVyLmFkZENoaWxkKG51bWJlcik7IFxuICAgICAgICB0aGlzLl90b2tlbk51bWJlcnMucHVzaChudW1iZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJQZXJjZW50YWdlcyA9IFswLjI1LCAwLjYsIDAuOTk5XTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgMzsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnc3Rhcl9tYXJrZXInKSk7XG4gICAgICAgIG1hcmtlci5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDApO1xuICAgICAgICBtYXJrZXIueCA9IHRoaXMuX3N0YXJCYXJzWzBdLnggKyAoKHRoaXMuX3N0YXJCYXJzW3RoaXMuX3N0YXJCYXJzLmxlbmd0aC0xXS54IC0gdGhpcy5fc3RhckJhcnNbMF0ueCkgKiB0aGlzLl9zdGFyUGVyY2VudGFnZXNbaV0pICsgKGJhcldpZHRoLzIpO1xuICAgICAgICBtYXJrZXIueSA9IHN0YXJCYXJIb2xkZXIuaGVpZ2h0LzI7XG4gICAgICAgIHN0YXJCYXJIb2xkZXIuYWRkQ2hpbGQobWFya2VyKTtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGVTZXF1ZW5jZShwZXJjZW50LCB0aGlzLl90b2tlbnMsIENvbW1vbi5sZXZlbERhdGEubGV2ZWxzW3RoaXMuX2xldmVsXS50b3RhbF90b2tlbnMpO1xuXG4gICAgdGhpcy5fc3RhckRlY29zID0gW107XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgMjsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGhvbGRlciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBtZXNzYWdlQm94LmFkZENoaWxkKGhvbGRlcik7XG5cbiAgICAgICAgdmFyIHN0YXJzID0gW3tzY2FsZTowLjgsIHJvdGF0aW9uOjQwLCB4OjAsIHk6MH0sXG4gICAgICAgICAgICAgICAgICAgICB7c2NhbGU6MC40LCByb3RhdGlvbjoyLCB4Oi00MCwgeTotMjB9LFxuICAgICAgICAgICAgICAgICAgICAge3NjYWxlOjAuNywgcm90YXRpb246NSwgeDoyMCwgeTotNjB9LFxuICAgICAgICAgICAgICAgICAgICAge3NjYWxlOjEsIHJvdGF0aW9uOjIwLCB4Oi00NSwgeTotOTB9LFxuICAgICAgICAgICAgICAgICAgICAge3NjYWxlOjAuNCwgcm90YXRpb246LTIwLCB4OjYwLCB5Oi0xMDB9XG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgIGlmKHRoaXMuX3N0YXJEZWNvcy5sZW5ndGggPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHN0YXJzLmxlbmd0aDsgaisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJEZWNvcy5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBzdGFycy5sZW5ndGg7IGorKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHN0YXIgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ3N0YXJfZGVjb19ibHVlJykpO1xuICAgICAgICAgICAgc3Rhci50aW50ID0gdGhpcy5fc3RhckRlY29UaW50O1xuICAgICAgICAgICAgc3Rhci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KHN0YXJzW2pdLnNjYWxlLCBzdGFyc1tqXS5zY2FsZSk7XG4gICAgICAgICAgICBzdGFyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIHN0YXIucm90YXRpb24gPSBzdGFyc1tqXS5yb3RhdGlvbipQSVhJLkRFR19UT19SQUQ7XG4gICAgICAgICAgICBzdGFyLnggPSBzdGFyc1tqXS54O1xuICAgICAgICAgICAgc3Rhci55ID0gc3RhcnNbal0ueTtcbiAgICAgICAgICAgIGhvbGRlci5hZGRDaGlsZChzdGFyKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJEZWNvc1tqXS5wdXNoKHN0YXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaSA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBob2xkZXIueCA9IC0yODA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBob2xkZXIueCA9IDI4MDtcbiAgICAgICAgICAgIGhvbGRlci5zY2FsZS54ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaG9sZGVyLnkgPSAtNTA7XG4gICAgfVxuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoJ211c2ljX2xldmVsX2NvbXBsZXRlXzAzJyk7XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE11c2ljU3RvcC5kaXNwYXRjaCgpO1xuICAgIFR3ZWVuTWF4LnRvKHRoaXMsIDIsIHtvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmRpc3BhdGNoKCdtdXNpY19nYW1lb3Zlcl93aW5fMDAnKTtcbiAgICB9fSk7XG59O1xuXG5MZXZlbENvbXBsZXRlT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZVNlcXVlbmNlID0gZnVuY3Rpb24ocGVyY2VudCwgdG9rZW5zLCB0b3RhbFRva2VucylcbntcbiAgICB2YXIgY3VycmVudFBlcmNlbnQgPSAwO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YXJCYXJzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY3VycmVudFBlcmNlbnQgKz0gMS90aGlzLl9zdGFyQmFycy5sZW5ndGg7XG4gICAgICAgIGlmKHBlcmNlbnQgPj0gY3VycmVudFBlcmNlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRsLnRvKHRoaXMuX3N0YXJCYXJzW2ldLCAuMSwge2RlbGF5Omk9PTA/MC41OjAsIG9uU3RhcnRTY29wZTp0aGlzLCBvblN0YXJ0UGFyYW1zOlt0aGlzLl9zdGFyQmFyc1tpXSwgY3VycmVudFBlcmNlbnRdLCBvblN0YXJ0OmZ1bmN0aW9uKHN0YXJCYXIsIGN1cnJlbnRQZXJjZW50KXtcbiAgICAgICAgICAgICAgICBzdGFyQmFyLnRleHR1cmUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnYmFyX3N0aWNrX29uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY291bnRUb2tlbnMoTWF0aC5mbG9vcih0b3RhbFRva2VucyAqIGN1cnJlbnRQZXJjZW50KSk7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YXJQZXJjZW50YWdlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX3N0YXJQZXJjZW50YWdlc1tpXSA8IGN1cnJlbnRQZXJjZW50ICYmIHRoaXMuX3N0YXJHcmFwaGljc1JlYWNoZWRbaV0gPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodFN0YXIodGhpcy5fc3RhckdyYXBoaWNzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJHcmFwaGljc1JlYWNoZWRbaV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0bC50byh0aGlzLl9zdGFyQmFyc1tpXSwgLjEsIHtkZWxheTppPT0wPzAuNTowLCBvblN0YXJ0U2NvcGU6dGhpcywgb25TdGFydFBhcmFtczpbdGhpcy5fc3RhckJhcnNbaV0sIGN1cnJlbnRQZXJjZW50XSwgb25TdGFydDpmdW5jdGlvbihzdGFyQmFyLCBjdXJyZW50UGVyY2VudCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYocGVyY2VudCA9PSAxIHx8IHN0YXJCYXIgIT0gdGhpcy5fc3RhckJhcnNbdGhpcy5fc3RhckJhcnMubGVuZ3RoLTFdKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhckJhci50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2Jhcl9zdGlja19vbicpO1xuICAgICAgICAgICAgICAgICAgICBpZihwZXJjZW50ID09IDEpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodFN0YXIodGhpcy5fc3RhckdyYXBoaWNzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2NvdW50VG9rZW5zKHRva2Vucyk7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YXJQZXJjZW50YWdlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX3N0YXJQZXJjZW50YWdlc1tpXSA8IHBlcmNlbnQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZsYXNoR3JhcGhpYyh0aGlzLl9zdGFyR3JhcGhpY3NbaV0sIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdzdGFyX2JpZ19vZmYnKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ3N0YXJfYmlnX29uJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IHRva2Vucy50b1N0cmluZygpLmxlbmd0aC0xOyBpID49IDA7IGktLSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXIgPSB0b2tlbnMudG9TdHJpbmcoKS5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZsYXNoR3JhcGhpYyh0aGlzLl90b2tlbk51bWJlcnNbKHRva2Vucy50b1N0cmluZygpLmxlbmd0aC0xKS1pXSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUobnVtYmVyICsgJ19kaXMnKSwgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUobnVtYmVyICsgJ19vbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZmxhc2hTdGFyRGVjb3MoKTtcbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuTGV2ZWxDb21wbGV0ZU92ZXJsYXkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMpO1xufVxuXG4vKipcbiAqL1xuTGV2ZWxDb21wbGV0ZU92ZXJsYXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKi9cbkxldmVsQ29tcGxldGVPdmVybGF5LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXG57XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cbkxldmVsQ29tcGxldGVPdmVybGF5LnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVJbi5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fbWVzc2FnZUJveC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNiwgMC42KTtcbiAgICB0aGlzLl9iZy5hbHBoYSA9IDA7XG5cbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX21lc3NhZ2VCb3guc2NhbGUsIC41LCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSkpO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fYmcsIC41LCB7YWxwaGE6MC43NSwgZWFzZTpTaW5lLmVhc2VPdXR9KSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuTGV2ZWxDb21wbGV0ZU92ZXJsYXkucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbCh0aGlzKTtcbn07XG5cbkxldmVsQ29tcGxldGVPdmVybGF5LnByb3RvdHlwZS5pc0xldmVsTmV3bHlDb21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB0aGlzLl9sZXZlbE5ld2x5Q29tcGxldGVkO1xufTtcblxuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5MZXZlbENvbXBsZXRlT3ZlcmxheS5wcm90b3R5cGUuX2hpZ2hsaWdodFN0YXIgPSBmdW5jdGlvbihzdGFyKVxue1xuICAgIGNvbnNvbGUubG9nKHN0YXIpO1xuICAgIHN0YXIudGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdzdGFyX2JpZ19vbicpO1xuICAgIHZhciBlbWl0dGVyID0gRW1pdHRlci5hZGQoc3RhciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInBhcnRpY2xlX3N0YXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2xldmVsZW5kX3N0YXJidXJzdCwgMCwgMCwgMC4xLCB0cnVlLCAwLjUpO1xufTtcblxuTGV2ZWxDb21wbGV0ZU92ZXJsYXkucHJvdG90eXBlLl9jb3VudFRva2VucyA9IGZ1bmN0aW9uKG51bWJlcikge1xuXG4gICAgdmFyIHN0ciA9IG51bWJlci50b1N0cmluZygpO1xuXG4gICAgdmFyIGZpcnN0Q2hhciA9IG51bGw7XG4gICAgdmFyIHNlY29uZENoYXIgPSBudWxsO1xuICAgIHZhciB0aGlyZENoYXIgPSBudWxsO1xuXG4gICAgZmlyc3RDaGFyID0gc3RyLmNoYXJBdChzdHIubGVuZ3RoLTEpO1xuICAgIHRoaXMuX3Rva2VuTnVtYmVyc1swXS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoZmlyc3RDaGFyICsgXCJfZGlzXCIpO1xuICAgIHRoaXMuX3Rva2VuTnVtYmVyc1swXS52aXNpYmxlID0gdHJ1ZTtcblxuICAgIGlmKG51bWJlciA+PSAxMClcbiAgICB7XG4gICAgICAgIHNlY29uZENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGgtMik7XG4gICAgICAgIHRoaXMuX3Rva2VuTnVtYmVyc1sxXS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoc2Vjb25kQ2hhciArIFwiX2Rpc1wiKTtcbiAgICAgICAgdGhpcy5fdG9rZW5OdW1iZXJzWzFdLnZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLl90b2tlbk51bWJlcnNbMV0udmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKG51bWJlciA+PSAxMDApXG4gICAge1xuICAgICAgICB0aGlyZENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGgtMyk7XG4gICAgICAgIHRoaXMuX3Rva2VuTnVtYmVyc1syXS50ZXh0dXJlID0gdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUodGhpcmRDaGFyICsgXCJfZGlzXCIpO1xuICAgICAgICB0aGlzLl90b2tlbk51bWJlcnNbMl0udmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuX3Rva2VuTnVtYmVyc1syXS52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfdG9rZW5fY291bnR1cF9lbmRfMDBcIik7XG59O1xuXG5MZXZlbENvbXBsZXRlT3ZlcmxheS5wcm90b3R5cGUuX2ZsYXNoR3JhcGhpYyA9IGZ1bmN0aW9uKGl0ZW0sIGRpc1RleHR1cmUsIG5vcm1hbFRleHR1cmUpXG57XG4gICAgaWYoIVR3ZWVuTWF4LmlzVHdlZW5pbmcoaXRlbSkpXG4gICAge1xuICAgICAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0bC50byhpdGVtLCAwLjA3ICsgKE1hdGgucmFuZG9tKCkqMC4xKSwge29uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0dXJlID0gZGlzVGV4dHVyZTtcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAgICAgdGwudG8oaXRlbSwgMC4wNyArIChNYXRoLnJhbmRvbSgpKjAuMSksIHtvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dHVyZSA9IG5vcm1hbFRleHR1cmU7XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5MZXZlbENvbXBsZXRlT3ZlcmxheS5wcm90b3R5cGUuX2ZsYXNoU3RhckRlY29zID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciB0bHMgPSBbXTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgMjsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6LTF9KTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG4gICAgICAgIHRscy5wdXNoKHRsKTtcbiAgICB9XG4gICAgXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YXJEZWNvcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCB0aGlzLl9zdGFyRGVjb3NbaV0ubGVuZ3RoOyBqKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRsc1tqXS50byh0aGlzLl9zdGFyRGVjb3NbaV1bal0sIDAuMiwge29uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlUGFyYW1zOlt0aGlzLl9zdGFyRGVjb3NbaV1bal1dLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKHN0YXIpe1xuICAgICAgICAgICAgICAgIHN0YXIudGludCA9IDB4RkZGRkZGO1xuICAgICAgICAgICAgfX0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmb3IodmFyIGogPSAwOyBqIDwgMjsgaisrKVxuICAgIHtcbiAgICAgICAgZm9yKHZhciBrID0gMDsgayA8IDI7IGsrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGxzW2pdLnRvKHRoaXMsIDAuMywge29uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlUGFyYW1zOltqXSwgb25Db21wbGV0ZTpmdW5jdGlvbihqKXtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fc3RhckRlY29zLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhckRlY29zW2ldW2pdLnRpbnQgPSB0aGlzLl9zdGFyRGVjb1RpbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgdGxzW2pdLnRvKHRoaXMsIDAuMywge29uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlUGFyYW1zOltqXSwgb25Db21wbGV0ZTpmdW5jdGlvbihqKXtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fc3RhckRlY29zLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhckRlY29zW2ldW2pdLnRpbnQgPSAweEZGRkZGRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIH1cblxuICAgICAgICB0bHNbal0udG8odGhpcywgMC4zLCB7b25Db21wbGV0ZVNjb3BlOnRoaXMsIG9uQ29tcGxldGVQYXJhbXM6W2pdLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKGope1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YXJEZWNvcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFyRGVjb3NbaV1bal0udGludCA9IHRoaXMuX3N0YXJEZWNvVGludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfX0pO1xuICAgIH1cblxufTtcblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuTGV2ZWxDb21wbGV0ZU92ZXJsYXkucHJvdG90eXBlLm9uUmVzdGFydENsaWNrZWQgPSBmdW5jdGlvbihidXR0b24pXG57XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmRpc3BhdGNoKCk7XG59XG5cbkxldmVsQ29tcGxldGVPdmVybGF5LnByb3RvdHlwZS5vbkNvbnRpbnVlQ2xpY2tlZCA9IGZ1bmN0aW9uKGJ1dHRvbilcbntcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpO1xufVxuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUy9TRVRURVJTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNpbXBsZVNjcmVlbiAgICA9IHJlcXVpcmUoXCIuLi9zY3JlZW5zL1NpbXBsZVNjcmVlblwiKTtcbnZhciBTbWFsbEJ1dHRvbiAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9TbWFsbEJ1dHRvblwiKTtcbnZhciBUZXh0SXRlbSAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9UZXh0SXRlbVwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNZXNzYWdlT3ZlcmxheShtZXNzYWdlLCBhcmdzKVxue1xuICAgIHRoaXMuX2FyZ3MgICAgICAgICAgPSBhcmdzO1xuICAgIHRoaXMuX21lc3NhZ2UgICAgICAgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5fbWVzc2FnZUJveCAgICA9IG51bGw7XG4gICAgdGhpcy5fYmcgICAgICAgICAgICA9IG51bGw7XG5cbiAgICBTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZU92ZXJsYXk7XG5NZXNzYWdlT3ZlcmxheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuTWVzc2FnZU92ZXJsYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVzc2FnZU92ZXJsYXk7XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuTWVzc2FnZU92ZXJsYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgY29uc29sZS5sb2coXCJTUExBU0ggSU5JVElBTElaRURcIik7XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmdlbmVyYXRlZFRleHR1cmVzWydibGFjayddKTtcbiAgICBiZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcbiAgICBiZy5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuICAgIGJnLmhpdEFyZWEgPSBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgQ29tbW9uLlNUQUdFX1dJRFRILCBDb21tb24uU1RBR0VfSEVJR0hUKTtcbiAgICBiZy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgYmcuYWxwaGEgPSAwLjU7XG4gICAgdGhpcy5hZGRDaGlsZChiZyk7XG5cbiAgICB2YXIgbWVzc2FnZUJveCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInBhbmVsXCIpKTtcbiAgICBtZXNzYWdlQm94LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICBtZXNzYWdlQm94LnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xuICAgIG1lc3NhZ2VCb3gueSA9IChDb21tb24uU1RBR0VfSEVJR0hUIC8gMik7XG4gICAgdGhpcy5hZGRDaGlsZChtZXNzYWdlQm94KTtcblxuICAgIHRoaXMuX21lc3NhZ2VCb3ggPSBtZXNzYWdlQm94O1xuICAgIHRoaXMuX2JnID0gYmc7XG5cbiAgICB2YXIgdGl0bGUgPSBuZXcgVGV4dEl0ZW0odGhpcy5fbWVzc2FnZSwgdGhpcy5fYXJncyk7XG4gICAgbWVzc2FnZUJveC5hZGRDaGlsZCh0aXRsZSk7XG5cbiAgICB2YXIgb2tCdXR0b24gPSBuZXcgU21hbGxCdXR0b24oXCJpY29uX2Nsb3NlXCIpO1xuICAgIG9rQnV0dG9uLnggPSAobWVzc2FnZUJveC53aWR0aC8yKSAtIDUwO1xuICAgIG9rQnV0dG9uLnkgPSAtKG1lc3NhZ2VCb3guaGVpZ2h0LzIpICsgNjA7XG4gICAgb2tCdXR0b24uc2lnbmFscy5jbGljay5hZGRPbmNlKHRoaXMub25Pa0NsaWNrZWQsIHRoaXMpO1xuICAgIG9rQnV0dG9uLmRvd25Tb3VuZE5hbWUgPSBcInNmeF9idG5fcHJlc3NfYmNrXzAwXCI7XG4gICAgbWVzc2FnZUJveC5hZGRDaGlsZChva0J1dHRvbik7XG59O1xuXG4vKipcbiAqL1xuTWVzc2FnZU92ZXJsYXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKi9cbk1lc3NhZ2VPdmVybGF5LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpXG57XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cbk1lc3NhZ2VPdmVybGF5LnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVJbi5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fbWVzc2FnZUJveC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNiwgMC42KTtcbiAgICB0aGlzLl9iZy5hbHBoYSA9IDA7XG5cbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX21lc3NhZ2VCb3guc2NhbGUsIC41LCB7eDoxLCB5OjEsIGVhc2U6QmFjay5lYXNlT3V0fSkpO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fYmcsIC41LCB7YWxwaGE6MC43NSwgZWFzZTpTaW5lLmVhc2VPdXR9KSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuTWVzc2FnZU92ZXJsYXkucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbCh0aGlzKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fbWVzc2FnZUJveCwgLjMsIHt5OkNvbW1vbi5TVEFHRV9IRUlHSFQqMS41LCBlYXNlOlNpbmUuZWFzZUlufSkpO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fbWVzc2FnZUJveC5zY2FsZSwgLjUsIHt4OjAuNiwgeTowLjYsIGVhc2U6U2luZS5lYXNlSW59KSk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9iZywgLjUsIHthbHBoYTowLCBlYXNlOlNpbmUuZWFzZU91dCwgb25Db21wbGV0ZVNjb3BlOnRoaXMsIG9uQ29tcGxldGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTtcbiAgICB9fSkpO1xufTtcblxuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5NZXNzYWdlT3ZlcmxheS5wcm90b3R5cGUub25Pa0NsaWNrZWQgPSBmdW5jdGlvbihidXR0b24pXG57XG4gICAgaWYoIWJ1dHRvbi5kaXNhYmxlZClcbiAgICB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dCgpO1xuICAgIH1cbn1cblxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwiXG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcbnZhciBTaW1wbGVTY3JlZW4gICAgPSByZXF1aXJlKFwiLi4vc2NyZWVucy9TaW1wbGVTY3JlZW5cIik7XG52YXIgU21hbGxCdXR0b24gICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU21hbGxCdXR0b25cIik7XG52YXIgTGFyZ2VCdXR0b24gICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvTGFyZ2VCdXR0b25cIik7XG52YXIgVGV4dEl0ZW0gICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvVGV4dEl0ZW1cIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGF1c2VPdmVybGF5KClcbntcbiAgICB0aGlzLl9iYWNrQnV0dG9uICAgICAgICA9IG51bGw7XG5cbiAgICB0aGlzLl9wYWdlQ29udGFpbmVyICAgICA9IG51bGw7XG4gICAgdGhpcy5fcGF1c2VQYWdlICAgICAgICAgPSBudWxsO1xuICAgIHRoaXMuX3F1aXRQYWdlICAgICAgICAgID0gbnVsbDtcblxuICAgIHRoaXMuX2NvbnRlbnRzICAgICAgICAgID0gbnVsbDtcbiAgICB0aGlzLl9pbWFnZUNvbnRhaW5lciAgICA9IG51bGw7XG4gICAgdGhpcy5faW1hZ2UgICAgICAgICAgICAgPSBudWxsO1xuICAgIHRoaXMuX3RleHQgICAgICAgICAgICAgID0gbnVsbDtcbiAgICB0aGlzLl9sZWZ0QnV0dG9uICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fcmlnaHRCdXR0b24gICAgICAgPSBudWxsO1xuICAgIHRoaXMuX2N1cnJlbnRQYWdlICAgICAgID0gMDtcblxuICAgIHRoaXMuX2ZpbmdlciAgICAgICAgICAgID0gbnVsbDtcblxuICAgIFNpbXBsZVNjcmVlbi5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5zaWduYWxzLnJlc3VtZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gUGF1c2VPdmVybGF5O1xuUGF1c2VPdmVybGF5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2ltcGxlU2NyZWVuLnByb3RvdHlwZSk7XG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGF1c2VPdmVybGF5O1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcbntcbiAgICBjb25zb2xlLmxvZyhcIlNQTEFTSCBJTklUSUFMSVpFRFwiKTtcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblxuICAgIHZhciBiZyA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrJ10pO1xuICAgIGJnLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuICAgIGJnLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XG4gICAgYmcuaGl0QXJlYSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCBDb21tb24uU1RBR0VfV0lEVEgsIENvbW1vbi5TVEFHRV9IRUlHSFQpO1xuICAgIGJnLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICBiZy5hbHBoYSA9IDAuNTtcbiAgICB0aGlzLmFkZENoaWxkKGJnKTtcblxuICAgIHRoaXMuX2JnID0gYmc7XG5cbiAgICB0aGlzLl9wYWdlQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5fcGFnZUNvbnRhaW5lci54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcbiAgICB0aGlzLl9wYWdlQ29udGFpbmVyLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUIC8gMjtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3BhZ2VDb250YWluZXIpO1xuXG4gICAgdGhpcy5fcGF1c2VQYWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5fcGFnZUNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9wYXVzZVBhZ2UpO1xuXG4gICAgICAgIHZhciBtZXNzYWdlQm94ID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFuZWxcIikpO1xuICAgICAgICBtZXNzYWdlQm94LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgbWVzc2FnZUJveC54ID0gMDtcbiAgICAgICAgbWVzc2FnZUJveC55ID0gLTMwO1xuICAgICAgICB0aGlzLl9wYXVzZVBhZ2UuYWRkQ2hpbGQobWVzc2FnZUJveCk7XG5cbiAgICAgICAgdmFyIHRpdGxlID0gbmV3IFRleHRJdGVtKFwiUEFVU0VEXCIpO1xuICAgICAgICB0aXRsZS54ID0gMDtcbiAgICAgICAgdGl0bGUueSA9IC0yNjU7XG4gICAgICAgIHRoaXMuX3BhdXNlUGFnZS5hZGRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgdmFyIG9rQnV0dG9uID0gbmV3IExhcmdlQnV0dG9uKFwiaWNvbl9wbGF5XCIpO1xuICAgICAgICBva0J1dHRvbi54ID0gMDtcbiAgICAgICAgb2tCdXR0b24ueSA9IDI1MDtcbiAgICAgICAgb2tCdXR0b24uc2lnbmFscy5jbGljay5hZGRPbmNlKHRoaXMub25Pa0NsaWNrZWQsIHRoaXMpO1xuICAgICAgICBva0J1dHRvbi5kb3duU291bmROYW1lID0gXCJzZnhfYnRuX3ByZXNzX2Z3ZF8wMFwiO1xuICAgICAgICB0aGlzLl9wYXVzZVBhZ2UuYWRkQ2hpbGQob2tCdXR0b24pO1xuXG4gICAgICAgIHRoaXMuX2JhY2tCdXR0b24gPSBuZXcgU21hbGxCdXR0b24oXCJpY29uX2hvbWVcIik7XG4gICAgICAgIHRoaXMuX2JhY2tCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcbiAgICAgICAgdGhpcy5fYmFja0J1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uQmFja0NsaWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLl9iYWNrQnV0dG9uLmRvd25Tb3VuZE5hbWUgPSBcInNmeF9idG5fcHJlc3NfYmNrXzAwXCI7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fYmFja0J1dHRvbik7XG5cbiAgICAgICAgdGhpcy5fY29uc3RydWN0SGVscCgpO1xuXG4gICAgdGhpcy5fcXVpdFBhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLl9xdWl0UGFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5fcGFnZUNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9xdWl0UGFnZSk7XG5cbiAgICAgICAgdmFyIG1lc3NhZ2VCb3ggPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwYW5lbFwiKSk7XG4gICAgICAgIG1lc3NhZ2VCb3guYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICBtZXNzYWdlQm94LnggPSAwO1xuICAgICAgICBtZXNzYWdlQm94LnkgPSAtMzA7XG4gICAgICAgIHRoaXMuX3F1aXRQYWdlLmFkZENoaWxkKG1lc3NhZ2VCb3gpO1xuXG4gICAgICAgIHZhciB0aXRsZSA9IG5ldyBUZXh0SXRlbShcIlFVSVRcIik7XG4gICAgICAgIHRpdGxlLnggPSAwO1xuICAgICAgICB0aXRsZS55ID0gLTMwO1xuICAgICAgICB0aXRsZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuX3F1aXRQYWdlLmFkZENoaWxkKHRpdGxlKTtcblxuICAgICAgICB2YXIgeWVzQnV0dG9uID0gbmV3IFNtYWxsQnV0dG9uKFwiaWNvbl90aWNrXCIpO1xuICAgICAgICB5ZXNCdXR0b24ueCA9IC0xMDA7XG4gICAgICAgIHllc0J1dHRvbi55ID0gNzA7XG4gICAgICAgIHllc0J1dHRvbi5zaWduYWxzLmNsaWNrLmFkZE9uY2UodGhpcy5vblF1aXRZZXNDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgeWVzQnV0dG9uLmRvd25Tb3VuZE5hbWUgPSBcInNmeF9idG5fcHJlc3NfYmNrXzAwXCI7XG4gICAgICAgIHRoaXMuX3F1aXRQYWdlLmFkZENoaWxkKHllc0J1dHRvbik7XG5cbiAgICAgICAgdmFyIG5vQnV0dG9uID0gbmV3IFNtYWxsQnV0dG9uKFwiaWNvbl9jbG9zZVwiKTtcbiAgICAgICAgbm9CdXR0b24ueCA9IDEwMDtcbiAgICAgICAgbm9CdXR0b24ueSA9IDcwO1xuICAgICAgICBub0J1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uUXVpdE5vQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIG5vQnV0dG9uLmRvd25Tb3VuZE5hbWUgPSBcInNmeF9idG5fcHJlc3NfZndkXzAwXCI7XG4gICAgICAgIHRoaXMuX3F1aXRQYWdlLmFkZENoaWxkKG5vQnV0dG9uKTtcblxuICAgIHRoaXMuX2FkZE11dGVCdXR0b24oKTtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmRpc3BhdGNoKCdtdXNpY19wYXVzZWxvb3BfMDAnKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy5fZmluZ2VyKTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy5fZmluZ2VyLnNjYWxlKTtcbn07XG5cbi8qKlxuICovXG5QYXVzZU92ZXJsYXkucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fYmFja0J1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvbkxlZnQoKTtcbiAgICB0aGlzLl9tdXRlQnV0dG9uLnggPSB0aGlzLl9nZXRGaXJzdEJ1dHRvblBvc2l0aW9uUmlnaHQoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgXG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4uY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuX3BhZ2VDb250YWluZXIuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLjYsIDAuNik7XG4gICAgdGhpcy5fYmcuYWxwaGEgPSAwO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9wYWdlQ29udGFpbmVyLnNjYWxlLCAuNSwge3g6MSwgeToxLCBlYXNlOkJhY2suZWFzZU91dH0pKTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JnLCAuNSwge2FscGhhOjAuNzUsIGVhc2U6U2luZS5lYXNlT3V0fSkpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIFxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKHRoaXMpO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9wYWdlQ29udGFpbmVyLCAuMywge3k6Q29tbW9uLlNUQUdFX0hFSUdIVCoxLjUsIGVhc2U6U2luZS5lYXNlSW59KSk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9wYWdlQ29udGFpbmVyLnNjYWxlLCAuNSwge3g6MC42LCB5OjAuNiwgZWFzZTpTaW5lLmVhc2VJbn0pKTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2JnLCAuNSwge2FscGhhOjAsIGVhc2U6U2luZS5lYXNlT3V0LCBvbkNvbXBsZXRlU2NvcGU6dGhpcywgb25Db21wbGV0ZTpmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpO1xuICAgIH19KSk7XG5cbiAgICB0aGlzLl9iYWNrQnV0dG9uLnZpc2libGUgPSBmYWxzZTtcbn07XG5cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuc2hvd1F1aXRQYWdlID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuX2JhY2tCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRsLnRvKHRoaXMuX3BhZ2VDb250YWluZXIuc2NhbGUsIC4yLCB7eDowLCB5OjAsIGVhc2U6U2luZS5lYXNlSW4sIG9uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuX3BhdXNlUGFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3F1aXRQYWdlLnZpc2libGUgPSB0cnVlO1xuICAgIH19KTtcbiAgICB0bC50byh0aGlzLl9wYWdlQ29udGFpbmVyLnNjYWxlLCAuMiwge3g6MSwgeToxLCBlYXNlOlNpbmUuZWFzZU91dH0pO1xufTtcblxuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5zaG93UGF1c2VQYWdlID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRsLnRvKHRoaXMuX3BhZ2VDb250YWluZXIuc2NhbGUsIC4yLCB7eDowLCB5OjAsIGVhc2U6U2luZS5lYXNlSW4sIG9uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuX3BhdXNlUGFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcXVpdFBhZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iYWNrQnV0dG9uLnZpc2libGUgPSB0cnVlO1xuICAgIH19KTtcbiAgICB0bC50byh0aGlzLl9wYWdlQ29udGFpbmVyLnNjYWxlLCAuMiwge3g6MSwgeToxLCBlYXNlOlNpbmUuZWFzZU91dH0pO1xufTtcblxuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5zZXRQYWdlID0gZnVuY3Rpb24ocGFnZSlcbntcbiAgICB2YXIgbmV3SW1hZ2UgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fY29udGVudHNbcGFnZV0uaW1hZ2UpO1xuICAgIG5ld0ltYWdlLnggPSB0aGlzLl9jb250ZW50c1twYWdlXS54IHx8IDA7XG4gICAgbmV3SW1hZ2UueSA9IHRoaXMuX2NvbnRlbnRzW3BhZ2VdLnkgfHwgMDtcbiAgICBuZXdJbWFnZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgbmV3SW1hZ2UuYWxwaGEgPSAwO1xuICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyLmFkZENoaWxkKG5ld0ltYWdlKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5faW1hZ2UsIC41LCB7YWxwaGE6MCwgZWFzZTpTaW5lLmVhc2VPdXR9KSk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byhuZXdJbWFnZSwgLjUsIHthbHBoYToxLCBlYXNlOlNpbmUuZWFzZU91dCwgb25Db21wbGV0ZVNjb3BlOnRoaXMsIG9uQ29tcGxldGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5faW1hZ2UpO1xuICAgICAgICB0aGlzLl9pbWFnZSA9IG5ld0ltYWdlO1xuICAgIH19KSk7XG5cbiAgICBpZih0aGlzLl90ZXh0ICE9IG51bGwpXG4gICAge1xuICAgICAgICB0aGlzLl9wYXVzZVBhZ2UucmVtb3ZlQ2hpbGQodGhpcy5fdGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGV4dCA9IG5ldyBUZXh0SXRlbSh0aGlzLl9jb250ZW50c1twYWdlXS50ZXh0KTtcbiAgICB0aGlzLl90ZXh0LnkgPSAxMTA7XG4gICAgdGhpcy5fcGF1c2VQYWdlLmFkZENoaWxkKHRoaXMuX3RleHQpO1xuICBcbiAgICBpZihwYWdlID09IDApXG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuICAgIGVsc2VcbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi52aXNpYmxlID0gdHJ1ZTtcblxuICAgIGlmKHBhZ2UgPT0gdGhpcy5fY29udGVudHMubGVuZ3RoLTEpXG4gICAge1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gcGFnZTtcblxuICAgIGlmKHRoaXMuX2N1cnJlbnRQYWdlID09IDApXG4gICAge1xuICAgICAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2ZpbmdlciwgLjQsIHthbHBoYToxfSkpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2ZpbmdlciwgLjQsIHthbHBoYTowfSkpO1xuICAgIH1cbn1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUuX2NvbnN0cnVjdEhlbHAgPSBmdW5jdGlvbigpXG57XG4gICAgdGhpcy5fY29udGVudHMgPSBbXTtcblxuICAgIHZhciBleHQgPSBcIlwiO1xuICAgIGlmKCFwMy5EZXZpY2UuaXNNb2JpbGUpXG4gICAgICAgIGV4dCA9IFwiX1BDXCI7XG5cbiAgICB0aGlzLl9jb250ZW50cy5wdXNoKHtpbWFnZTp0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgndHV0b3JpYWxfMScpLCB0ZXh0OlwiSU5TVFJVQ1RJT05TXzFcIn0pO1xuICAgIHRoaXMuX2NvbnRlbnRzLnB1c2goe2ltYWdlOnRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCd0dXRvcmlhbF8yJyksIHRleHQ6XCJJTlNUUlVDVElPTlNfMlwifSk7XG4gICAgdGhpcy5fY29udGVudHMucHVzaCh7aW1hZ2U6dGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ3R1dG9yaWFsXzMnKSwgdGV4dDpcIklOU1RSVUNUSU9OU18zXCJ9KTtcbiAgICB0aGlzLl9jb250ZW50cy5wdXNoKHtpbWFnZTp0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgndHV0b3JpYWxfNCcpLCB0ZXh0OlwiSU5TVFJVQ1RJT05TXzRcIn0pO1xuXG4gICAgdGhpcy5faW1hZ2VDb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLl9pbWFnZUNvbnRhaW5lci55ID0gLTYwO1xuICAgIHRoaXMuX3BhdXNlUGFnZS5hZGRDaGlsZCh0aGlzLl9pbWFnZUNvbnRhaW5lcik7XG5cbiAgICB0aGlzLl9pbWFnZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9jb250ZW50c1swXS5pbWFnZSk7XG4gICAgdGhpcy5faW1hZ2UuYW5jaG9yLnggPSB0aGlzLl9pbWFnZS5hbmNob3IueSA9IDAuNTtcbiAgICB0aGlzLl9pbWFnZUNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9pbWFnZSk7XG5cbiAgICB0aGlzLl9sZWZ0QnV0dG9uID0gbmV3IFNtYWxsQnV0dG9uKFwiaWNvbl9hcnJvdzJcIilcbiAgICB0aGlzLl9sZWZ0QnV0dG9uLnggPSAtMzkwO1xuICAgIHRoaXMuX2xlZnRCdXR0b24uc2lnbmFscy5jbGljay5hZGQodGhpcy5vbkxlZnRDbGlja2VkLCB0aGlzKTtcbiAgICB0aGlzLl9sZWZ0QnV0dG9uLmRvd25Tb3VuZE5hbWUgPSBcInNmeF9idG5fcHJlc3NfYmNrXzAwXCI7XG4gICAgdGhpcy5fbGVmdEJ1dHRvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5fbGVmdEJ1dHRvbi5hbmltYXRlID0gZmFsc2U7XG4gICAgdGhpcy5fbGVmdEJ1dHRvbi5zY2FsZS54ID0gLTE7XG4gICAgdGhpcy5fcGF1c2VQYWdlLmFkZENoaWxkKHRoaXMuX2xlZnRCdXR0b24pO1xuXG4gICAgdGhpcy5fcmlnaHRCdXR0b24gPSBuZXcgU21hbGxCdXR0b24oXCJpY29uX2Fycm93MlwiKVxuICAgIHRoaXMuX3JpZ2h0QnV0dG9uLnggPSAzOTA7XG4gICAgdGhpcy5fcmlnaHRCdXR0b24uc2lnbmFscy5jbGljay5hZGQodGhpcy5vblJpZ2h0Q2xpY2tlZCwgdGhpcyk7XG4gICAgdGhpcy5fcmlnaHRCdXR0b24uZG93blNvdW5kTmFtZSA9IFwic2Z4X2J0bl9wcmVzc19md2RfMDBcIjtcbiAgICB0aGlzLl9yaWdodEJ1dHRvbi5hbmltYXRlID0gZmFsc2U7XG4gICAgdGhpcy5fcGF1c2VQYWdlLmFkZENoaWxkKHRoaXMuX3JpZ2h0QnV0dG9uKTtcblxuICAgIHRoaXMuX2ZpbmdlciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInR1dG9yaWFsX2hhbmRcIikpO1xuICAgIHRoaXMuX2Zpbmdlci55ID0gMzA7XG4gICAgdGhpcy5fZmluZ2VyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XG4gICAgdGhpcy5fcGF1c2VQYWdlLmFkZENoaWxkKHRoaXMuX2Zpbmdlcik7XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe3JlcGVhdDotMX0pO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xuICAgIHRsLnRvKHRoaXMuX2Zpbmdlci5zY2FsZSwgLjUsIHtkZWxheToxLCB5Oi43LCBlYXNlOlNpbmUuZWFzZUluT3V0fSk7XG4gICAgdGwudG8odGhpcy5fZmluZ2VyLnNjYWxlLCAuNiwge3k6MSwgZWFzZTpCYWNrLmVhc2VPdXR9KTtcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0Oi0xfSk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG4gICAgdGwudG8odGhpcy5fZmluZ2VyLCAuNywge2RlbGF5Oi44LCB5OjcwLCBlYXNlOlNpbmUuZWFzZUluT3V0fSk7XG4gICAgdGwudG8odGhpcy5fZmluZ2VyLCAuNiwge3k6MzAsIGVhc2U6U2luZS5lYXNlT3V0fSk7XG5cbiAgICB0aGlzLnNldFBhZ2UodGhpcy5fY3VycmVudFBhZ2UpO1xufTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUub25Pa0NsaWNrZWQgPSBmdW5jdGlvbihidXR0b24pXG57XG4gICAgaWYoIWJ1dHRvbi5kaXNhYmxlZClcbiAgICB7XG4gICAgICAgIHRoaXMuc2lnbmFscy5yZXN1bWVkLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dCgpO1xuICAgIH1cbn1cblxuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5vbkJhY2tDbGlja2VkID0gZnVuY3Rpb24oYnV0dG9uKVxue1xuICAgIHRoaXMuc2hvd1F1aXRQYWdlKCk7XG59XG5cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUub25RdWl0WWVzQ2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkUHJldmlvdXNTY3JlZW4uZGlzcGF0Y2goKTtcbn1cblxuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5vblF1aXROb0NsaWNrZWQgPSBmdW5jdGlvbigpXG57XG4gICAgdGhpcy5zaG93UGF1c2VQYWdlKCk7XG59XG5cblBhdXNlT3ZlcmxheS5wcm90b3R5cGUub25MZWZ0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbnsgICAgXG4gICAgdGhpcy5zZXRQYWdlKHRoaXMuX2N1cnJlbnRQYWdlLTEpO1xufTtcblxuUGF1c2VPdmVybGF5LnByb3RvdHlwZS5vblJpZ2h0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbnsgICAgXG4gICAgdGhpcy5zZXRQYWdlKHRoaXMuX2N1cnJlbnRQYWdlKzEpO1xufTtcblxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwiXHJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xyXG52YXIgU2ltcGxlU2NyZWVuICAgID0gcmVxdWlyZShcIi4uL3NjcmVlbnMvU2ltcGxlU2NyZWVuXCIpO1xyXG52YXIgU21hbGxCdXR0b24gICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU21hbGxCdXR0b25cIik7XHJcbnZhciBMYXJnZUJ1dHRvbiAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9MYXJnZUJ1dHRvblwiKTtcclxudmFyIFRleHRJdGVtICAgICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL1RleHRJdGVtXCIpO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OU1RSVUNUT1JcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFR1dG9yaWFsT3ZlcmxheShvZmZzZXQsIHRleHQpXHJcbntcclxuICAgIHRoaXMuX2J1YmJsZSAgICAgICAgPSBudWxsO1xyXG4gICAgdGhpcy5fb2Zmc2V0ICAgICAgICA9IG9mZnNldDtcclxuICAgIHRoaXMuX3RleHQgICAgICAgICAgPSB0ZXh0O1xyXG5cclxuICAgIFNpbXBsZVNjcmVlbi5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc2lnbmFscy5yZXN1bWVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBUdXRvcmlhbE92ZXJsYXk7XHJcblR1dG9yaWFsT3ZlcmxheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xyXG5UdXRvcmlhbE92ZXJsYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHV0b3JpYWxPdmVybGF5O1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVQkxJQyBNRVRIT0RTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICovXHJcblR1dG9yaWFsT3ZlcmxheS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XHJcblxyXG4gICAgdmFyIGJnID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5nZW5lcmF0ZWRUZXh0dXJlc1snYmxhY2snXSk7XHJcbiAgICBiZy53aWR0aCA9IENvbW1vbi5TVEFHRV9XSURUSDtcclxuICAgIGJnLmhlaWdodCA9IENvbW1vbi5TVEFHRV9IRUlHSFQ7XHJcbiAgICBiZy5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIENvbW1vbi5TVEFHRV9XSURUSCwgQ29tbW9uLlNUQUdFX0hFSUdIVCk7XHJcbiAgICBiZy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICBiZy5hbHBoYSA9IDAuNTtcclxuICAgIHRoaXMuX2JnID0gYmc7XHJcbiAgICB0aGlzLmFkZENoaWxkKGJnKTtcclxuXHJcbiAgICB0aGlzLl9idWJibGUgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgIHRoaXMuX2J1YmJsZS54ID0gKENvbW1vbi5TVEFHRV9XSURUSC8yKSArIHRoaXMuX29mZnNldC54O1xyXG4gICAgdGhpcy5fYnViYmxlLnkgPSAoQ29tbW9uLlNUQUdFX0hFSUdIVC8yKSArIHRoaXMuX29mZnNldC55O1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9idWJibGUpO1xyXG5cclxuICAgIHZhciBwb2ludCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnc3BlZWNoX2J1YmJsZV9taWRfcmlnaHQnKSk7XHJcbiAgICBwb2ludC5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgxLCAwLjUpO1xyXG4gICAgdGhpcy5fYnViYmxlLmFkZENoaWxkKHBvaW50KTtcclxuXHJcbiAgICB2YXIgcG9pbnRXaWR0aCA9IDEwO1xyXG5cclxuICAgIHZhciB0ZXh0ID0gbmV3IFRleHRJdGVtKHRoaXMuX3RleHQpO1xyXG4gICAgdGV4dC54ID0gLShwb2ludC53aWR0aC8yKSAtIHBvaW50V2lkdGg7XHJcblxyXG4gICAgd2hpbGUodGV4dC5oZWlnaHQgPiB0aGlzLl9idWJibGUuaGVpZ2h0IHx8IHRoaXMuX2J1YmJsZS5oZWlnaHQgPiBDb21tb24uU1RBR0VfSEVJR0hUKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB1cHBlciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnc3BlZWNoX2J1YmJsZV9taWRfZmxhdCcpKTtcclxuICAgICAgICB1cHBlci5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgxLCAxKTtcclxuICAgICAgICB1cHBlci55ID0gLSh0aGlzLl9idWJibGUuaGVpZ2h0LzIpKzM7XHJcbiAgICAgICAgdGhpcy5fYnViYmxlLmFkZENoaWxkKHVwcGVyKTtcclxuXHJcbiAgICAgICAgdmFyIGxvd2VyID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdzcGVlY2hfYnViYmxlX21pZF9mbGF0JykpO1xyXG4gICAgICAgIGxvd2VyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDEsIDApO1xyXG4gICAgICAgIGxvd2VyLnkgPSAodGhpcy5fYnViYmxlLmhlaWdodC8yKS0xMztcclxuICAgICAgICB0aGlzLl9idWJibGUuYWRkQ2hpbGQobG93ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0b3AgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ3NwZWVjaF9idWJibGVfdG9wJykpO1xyXG4gICAgdG9wLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDEsIDEpO1xyXG4gICAgdG9wLnkgPSAtKHRoaXMuX2J1YmJsZS5oZWlnaHQvMikrMztcclxuICAgIHRoaXMuX2J1YmJsZS5hZGRDaGlsZCh0b3ApO1xyXG5cclxuICAgIHZhciBib3R0b20gPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ3NwZWVjaF9idWJibGVfYm90dG9tJykpO1xyXG4gICAgYm90dG9tLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDEsIDApO1xyXG4gICAgYm90dG9tLnkgPSAodGhpcy5fYnViYmxlLmhlaWdodC8yKS0xMztcclxuICAgIHRoaXMuX2J1YmJsZS5hZGRDaGlsZChib3R0b20pO1xyXG4gICAgXHJcbiAgICB0aGlzLl9idWJibGUuYWRkQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgdGhpcy5fYnViYmxlLnNjYWxlLnggPSAuNTtcclxuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fYnViYmxlLnNjYWxlLCAuNSwge3g6MSwgZWFzZTpCYWNrLmVhc2VPdXQsIG9uQ29tcGxldGVTY29wZTp0aGlzLCBvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmcudG91Y2hlbmQgPSBiZy5tb3VzZXVwID0gdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyk7XHJcbiAgICB9fSkpO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBSSVZBVEUgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFVkVOVFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblR1dG9yaWFsT3ZlcmxheS5wcm90b3R5cGUub25Ub3VjaEVuZCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdGhpcy5fYmcudG91Y2hlbmQgPSB0aGlzLl9iZy5tb3VzZXVwID0gbnVsbDtcclxuICAgIHRoaXMuc2lnbmFscy5yZXN1bWVkLmRpc3BhdGNoKCk7XHJcbiAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmRpc3BhdGNoKCk7XHJcbiAgICB9LCAwLjEsIHRoaXMpO1xyXG59XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUVEVSUy9TRVRURVJTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuIiwiXHJcbnZhciBDb21tb24gICAgICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcclxudmFyIFNpbXBsZVNjcmVlbiAgICAgICAgPSByZXF1aXJlKFwiLi9TaW1wbGVTY3JlZW5cIik7XHJcbnZhciBMYXJnZUJ1dHRvbiAgICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvTGFyZ2VCdXR0b25cIik7XHJcbnZhciBUZXh0SXRlbSAgICAgICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvVGV4dEl0ZW1cIik7XHJcbnZhciBFbWl0dGVyICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL0VtaXR0ZXJcIik7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05TVFJVQ1RPUlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gRW5kU2NyZWVuKClcclxue1xyXG4gICAgdGhpcy5fYmFja0J1dHRvbiAgICAgICAgPSBudWxsO1xyXG4gICAgdGhpcy5fZ2FuZyAgICAgICAgICAgICAgPSBudWxsO1xyXG5cclxuICAgIFNpbXBsZVNjcmVlbi5jYWxsKHRoaXMpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gRW5kU2NyZWVuO1xyXG5FbmRTY3JlZW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaW1wbGVTY3JlZW4ucHJvdG90eXBlKTtcclxuRW5kU2NyZWVuLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVuZFNjcmVlbjtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVUJMSUMgTUVUSE9EU1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqL1xyXG5FbmRTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGNvbnNvbGUubG9nKFwiU1BMQVNIIElOSVRJQUxJWkVEXCIpO1xyXG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XHJcblxyXG4gICAgQ29tbW9uLmxldmVsRGF0YS5wcmVwYXJlRGF0YSgpO1xyXG5cclxuICAgIHZhciBiZyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImVuZGdhbWVfYmdcIikpO1xyXG4gICAgYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgYmcueCA9IENvbW1vbi5TVEFHRV9XSURUSCAvIDI7XHJcbiAgICBiZy55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAvIDI7XHJcbiAgICB0aGlzLmFkZENoaWxkKGJnKTtcclxuXHJcbiAgICB2YXIgdGl0bGUgPSBuZXcgVGV4dEl0ZW0oXCJXRUxMX0RPTkVcIik7XHJcbiAgICB0aXRsZS54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcclxuICAgIHRpdGxlLnkgPSAxMDA7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICB2YXIgc3VidGl0bGUgPSBuZXcgVGV4dEl0ZW0oXCJDT01QTEVURURcIik7XHJcbiAgICBzdWJ0aXRsZS54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcclxuICAgIHN1YnRpdGxlLnkgPSAxNjA7XHJcbiAgICB0aGlzLmFkZENoaWxkKHN1YnRpdGxlKTtcclxuXHJcbiAgICB0aGlzLl9nYW5nID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZ2FuZ1wiKSk7XHJcbiAgICB0aGlzLl9nYW5nLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMSk7XHJcbiAgICB0aGlzLl9nYW5nLnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xyXG4gICAgdGhpcy5fZ2FuZy55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCArIHRoaXMuX2dhbmcuaGVpZ2h0O1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9nYW5nKTtcclxuXHJcbiAgICB0aGlzLl9wbGF5QnV0dG9uID0gbmV3IExhcmdlQnV0dG9uKFwiaWNvbl9wbGF5XCIpXHJcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xyXG4gICAgdGhpcy5fcGxheUJ1dHRvbi55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAtIDEyMDtcclxuICAgIHRoaXMuX3BsYXlCdXR0b24uc2lnbmFscy5jbGljay5hZGRPbmNlKHRoaXMub25TdGFydENsaWNrZWQsIHRoaXMpO1xyXG4gICAgdGhpcy5fcGxheUJ1dHRvbi5kb3duU291bmROYW1lID0gXCJzZnhfYnRuX3ByZXNzX3BsYXlfMDBcIjtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcGxheUJ1dHRvbik7XHJcblxyXG4gICAgdGhpcy5fbGVmdEVtaXR0ZXIgPSBFbWl0dGVyLmFkZChiZywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInBhcnRpY2xlX21lbnVfc3RlYW1cIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2VtaXR0ZXJfbWVudV9zdGVhbV8wMCwgLTQyMCwgLTIwMCk7XHJcblxyXG4gICAgdGhpcy5fcmlnaHRFbWl0dGVyID0gRW1pdHRlci5hZGQoYmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9tZW51X3N0ZWFtXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVJUSUNMRV9lbWl0dGVyX21lbnVfc3RlYW1fMDAsIDM5MCwgLTIwMCk7XHJcblxyXG4gICAgdGhpcy5fYWRkTXV0ZUJ1dHRvbigpO1xyXG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE11c2ljUGxheS5kaXNwYXRjaCgnbXVzaWNfZ2FtZW92ZXJfd2luXzAwJyk7XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcbkVuZFNjcmVlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuRW5kU2NyZWVuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBFbWl0dGVyLmRlc3Ryb3kodGhpcy5fbGVmdEVtaXR0ZXIpO1xyXG4gICAgRW1pdHRlci5kZXN0cm95KHRoaXMuX3JpZ2h0RW1pdHRlcik7XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcbkVuZFNjcmVlbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX211dGVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xyXG5cclxuICAgIHRoaXMuX3BsYXlCdXR0b24ueCA9IE1hdGgubWluKChDb21tb24uU1RBR0VfV0lEVEggLyAyKSArIDQxMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmlnaHRFZGdlIC0gMTAwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcclxuICogQHBhcmFtIHsqPX1zY29wZVxyXG4gKi9cclxuRW5kU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcclxuICAgIFxyXG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4uY2FsbCh0aGlzKTtcclxuXHJcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2dhbmcsIC41LCB7eTpDb21tb24uU1RBR0VfSEVJR0hULCBlYXNlOkV4cG8uZWFzZU91dH0pKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcclxuICogQHBhcmFtIHsqPX0gc2NvcGVcclxuICovXHJcbkVuZFNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xyXG4gICAgXHJcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQUklWQVRFIE1FVEhPRFNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVZFTlRTXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuRW5kU2NyZWVuLnByb3RvdHlwZS5vblN0YXJ0Q2xpY2tlZCA9IGZ1bmN0aW9uKGJ1dHRvbilcclxue1xyXG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goKTtcclxufVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVRURVJTL1NFVFRFUlNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4iLCJcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNpbXBsZVNjcmVlbiAgICA9IHJlcXVpcmUoXCIuL1NpbXBsZVNjcmVlblwiKTtcbnZhciBXb3JsZCAgICBcdFx0PSByZXF1aXJlKFwiLi4vZW5naW5lL1dvcmxkXCIpO1xudmFyIE1hcFJlYWRlciAgICAgICA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvTWFwUmVhZGVyXCIpO1xudmFyIFJhaWwgICAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9nYW1lL1JhaWxcIik7XG52YXIgUmFpbEp1bmN0aW9uICAgID0gcmVxdWlyZShcIi4uL2dhbWUvUmFpbEp1bmN0aW9uXCIpO1xudmFyIEF2YXRhciAgICAgICAgICA9IHJlcXVpcmUoXCIuLi9nYW1lL0F2YXRhclwiKTtcbnZhciBIaWdobGlnaHRBcnJvdyAgPSByZXF1aXJlKFwiLi4vZ2FtZS9IaWdobGlnaHRBcnJvd1wiKTtcbnZhciBUb2tlbiAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9Ub2tlblwiKTtcbnZhciBPYnN0YWNsZSAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9PYnN0YWNsZVwiKTtcbnZhciBFbmVteSAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9FbmVteVwiKTtcbnZhciBQb3dlclVwICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9Qb3dlclVwXCIpO1xudmFyIFRva2VuQ291bnRlciAgICA9IHJlcXVpcmUoXCIuLi9nYW1lL1Rva2VuQ291bnRlclwiKTtcbnZhciBEaWFsb2d1ZUJveCAgICAgPSByZXF1aXJlKFwiLi4vZ2FtZS9EaWFsb2d1ZUJveFwiKTtcbnZhciBTbWFsbEJ1dHRvbiAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9TbWFsbEJ1dHRvblwiKTtcbnZhciBBdWRpb1BhcmFtcyAgICAgPSByZXF1aXJlKFwiLi4vbWFuYWdlcnMvQXVkaW9QYXJhbXNcIik7XG52YXIgVGV4dEl0ZW0gICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvVGV4dEl0ZW1cIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gR2FtZVNjcmVlbihsZXZlbClcbntcbiAgICB0aGlzLl9sZXZlbCAgICAgICAgICAgICAgPSBsZXZlbDtcblxuXHR0aGlzLl9iYWNrZ3JvdW5kIFx0ICAgICA9IG51bGw7XG5cdHRoaXMuX3dvcmxkSG9sZGVyXHQgICAgID0gbnVsbDtcbiAgICB0aGlzLl9vYmplY3RTaGFkb3dIb2xkZXIgPSBudWxsO1xuICAgIHRoaXMuX29iamVjdEhvbGRlciAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fdG9wTGF5ZXIgICAgICAgICAgID0gbnVsbDtcblxuXHR0aGlzLl93b3JsZHNcdFx0ICAgICA9IG51bGw7XG4gICAgdGhpcy5fcmFpbHMgICAgICAgICAgICAgID0gbnVsbDtcbiAgICB0aGlzLl9hdmF0YXJzICAgICAgICAgICAgPSBudWxsO1xuICAgIHRoaXMuX2hpZ2hsaWdodEFycm93ICAgICA9IG51bGw7XG4gICAgdGhpcy5fb2JqZWN0R3JhcGhpY3MgICAgID0gbnVsbDtcbiAgICB0aGlzLl9vYmplY3RzICAgICAgICAgICAgPSBudWxsO1xuICAgIHRoaXMuX2FjdGl2ZUVuZW15ICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fZW5lbWllcyAgICAgICAgICAgID0gbnVsbDtcbiAgICB0aGlzLl90dXRvcmlhbHMgICAgICAgICAgPSBudWxsO1xuXG4gICAgdGhpcy5fc3dpdGNoUmFpbCAgICAgICAgID0gbnVsbDtcblxuXHR0aGlzLl9wYXVzZWRcdFx0ICAgICA9IGZhbHNlO1xuXG4gICAgdGhpcy5fdmlld0RlYnVnICAgICAgICAgID0gZmFsc2U7XG4gICAgdGhpcy5fdmlld0RlYnVnWFNwZWVkICAgID0gMDtcbiAgICB0aGlzLl92aWV3RGVidWdZU3BlZWQgICAgPSAwO1xuXG4gICAgdGhpcy5fdG9rZW5zICAgICAgICAgICAgID0gMDtcblxuICAgIHRoaXMuX3Rva2VuQ291bnRlciAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fcGF1c2VCdXR0b24gICAgICAgID0gbnVsbDtcbiAgICB0aGlzLl9kaWFsb2d1ZUJveCAgICAgICAgPSBudWxsO1xuXG4gICAgdGhpcy5fc3BlZWRVcENvdW50ZXIgICAgID0gMDtcbiAgICB0aGlzLl9zcGVlZFVwVmFsdWUgICAgICAgPSAwO1xuXG4gICAgdGhpcy5fY29udmV5b3JMb29wU291bmQgID0gbnVsbDtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuc2lnbmFscy5wYXVzZUNsaWNrZWQgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMudHV0b3JpYWxTaG93biA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBHYW1lU2NyZWVuO1xuR2FtZVNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lU2NyZWVuO1xuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQVUJMSUMgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgY29uc29sZS5sb2coXCJHQU1FIElOSVRJQUxJWkVEXCIpO1xuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fYmFja2dyb3VuZCA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXMuZ2FtZUJHKTtcbiAgICB0aGlzLl9iYWNrZ3JvdW5kLndpZHRoID0gQ29tbW9uLlNUQUdFX1dJRFRIO1xuICAgIHRoaXMuX2JhY2tncm91bmQuaGVpZ2h0ID0gQ29tbW9uLlNUQUdFX0hFSUdIVDtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2JhY2tncm91bmQpO1xuXG4vL09iamVjdHNcblxuICAgIHRoaXMuX29iamVjdEdyYXBoaWNzID0gW107XG4gICAgdGhpcy5fb2JqZWN0cyA9IFtdO1xuICAgIHRoaXMuX2VuZW1pZXMgPSBbXTtcblxuLy9Xb3JsZCBhbmQgUmFpbHNcblxuICAgIHRoaXMuX3dvcmxkU2NhbGVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5fd29ybGRTY2FsZXIueCA9IENvbW1vbi5TVEFHRV9XSURUSCAvIDI7XG4gICAgdGhpcy5fd29ybGRTY2FsZXIueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgLyAyO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fd29ybGRTY2FsZXIpO1xuXG4gICAgdGhpcy5fd29ybGRIb2xkZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLl93b3JsZEhvbGRlci55ID0gLTY0IC0gKENvbW1vbi5TVEFHRV9IRUlHSFQvMik7XG4gICAgdGhpcy5fd29ybGRIb2xkZXIueCA9IC0oQ29tbW9uLlNUQUdFX1dJRFRILzIpO1xuICAgIHRoaXMuX3dvcmxkU2NhbGVyLmFkZENoaWxkKHRoaXMuX3dvcmxkSG9sZGVyKTtcblxuICAgIHRoaXMuX3dvcmxkcyA9IHt9O1xuICAgIHRoaXMuX3JhaWxzID0gW107XG5cbiAgICB0aGlzLl9vYmplY3RTaGFkb3dIb2xkZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLl9vYmplY3RIb2xkZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblxuICAgIHRoaXMuX21hcFJlYWRlciA9IG5ldyBNYXBSZWFkZXIodGhpcy5fbGV2ZWwpO1xuXG4gICAgdmFyIGxldmVsU3RhcnQgPSBDb21tb24ubGV2ZWxEYXRhLmxldmVsc1t0aGlzLl9sZXZlbF0uc3RhcnQ7XG4gICAgdmFyIGxldmVsQ29vcmRzID0gdGhpcy5fdGlsZXNUb0Nvb3JkaW5hdGVzKGxldmVsU3RhcnQucm93LCBsZXZlbFN0YXJ0LmNvbCk7XG4gICAgXG4gICAgZm9yKHZhciBpIGluIENvbW1vbi5sZXZlbERhdGEud29ybGRzKVxuICAgIHtcbiAgICBcdHZhciB3b3JsZCA9IG5ldyBXb3JsZCh0aGlzLl9tYXBSZWFkZXIsIENvbW1vbi5TVEFHRV9XSURUSCwgQ29tbW9uLlNUQUdFX0hFSUdIVCArIDMwMCArICh0aGlzLl93b3JsZEhvbGRlci55Ki0xKSwgaSwgQ29tbW9uLnNxdWFyZVRpbGVTaXplKTtcblx0ICAgIHdvcmxkLnNpZ25hbHMuYWN0aXZlT2JqZWN0Rm91bmQuYWRkKHRoaXMub25BY3RpdmVPYmplY3RGb3VuZCwgdGhpcyk7XG4gICAgICAgIHdvcmxkLnggPSAtbGV2ZWxDb29yZHMueCArIChDb21tb24uU1RBR0VfV0lEVEgvMik7XG5cdCAgICB3b3JsZC55ID0gLWxldmVsQ29vcmRzLnkgKyAoQ29tbW9uLlNUQUdFX0hFSUdIVC8yKSArIENvbW1vbi5yYWlsTWFuYWdlci5kaXN0YW5jZUZyb21Hcm91bmQ7XG5cdCAgIFx0d29ybGQuZmlsbFNjZW5lKCk7XG5cdCAgICB0aGlzLl93b3JsZEhvbGRlci5hZGRDaGlsZCh3b3JsZCk7XG5cdCAgICB0aGlzLl93b3JsZHNbaV0gPSB3b3JsZDtcblxuICAgICAgICBpZihpID09IFwiZmxvb3JcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fd29ybGRIb2xkZXIuYWRkQ2hpbGQodGhpcy5fb2JqZWN0U2hhZG93SG9sZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGkgPT0gXCJiYWNrZ3JvdW5kXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkSG9sZGVyLmFkZENoaWxkKHRoaXMuX29iamVjdEhvbGRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl90b3BMYXllciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgIHRoaXMuX3dvcmxkSG9sZGVyLmFkZENoaWxkKHRoaXMuX3RvcExheWVyKTtcblxuXG4vL0F2YXRhcnNcblxuICAgIHRoaXMuX2F2YXRhcnMgPSBbXTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgNzsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGF2YXRhciA9IG5ldyBBdmF0YXIoaSsxLCA3KTtcbiAgICAgICAgYXZhdGFyLnNpZ25hbHMudGFyZ2V0UmFpbFJlYWNoZWQuYWRkKHRoaXMub25BdmF0YXJUYXJnZXRSYWlsUmVhY2hlZCwgdGhpcyk7XG4gICAgICAgIGF2YXRhci5zaWduYWxzLmRlYWQuYWRkT25jZSh0aGlzLm9uQXZhdGFyRGVhZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5fYXZhdGFycy5wdXNoKGF2YXRhcik7XG4gICAgICAgIHRoaXMuX29iamVjdEdyYXBoaWNzLnB1c2goYXZhdGFyKTtcblxuICAgICAgICB2YXIgcmFpbCA9IHRoaXMuZ2V0UmFpbEF0KGxldmVsU3RhcnQucm93LCBsZXZlbFN0YXJ0LmNvbCk7XG4gICAgICAgIGF2YXRhci5jdXJyZW50UmFpbCA9IHJhaWw7XG4gICAgICAgIGF2YXRhci5kaXJlY3Rpb24gPSBDb21tb24ubGV2ZWxEYXRhLmxldmVsc1t0aGlzLl9sZXZlbF0uc3RhcnQuZGlyZWN0aW9uO1xuICAgICAgICBhdmF0YXIuc2V0VGFyZ2V0UmFpbCh0aGlzLmdldFRhcmdldFJhaWwocmFpbCwgYXZhdGFyLmRpcmVjdGlvbikpO1xuXG4gICAgICAgIGlmKGkgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgYXZhdGFyLnggPSByYWlsLmNlbnRyZS54O1xuICAgICAgICAgICAgYXZhdGFyLnkgPSByYWlsLmNlbnRyZS55O1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb3JkcyA9IENvbW1vbi5yYWlsTWFuYWdlci5yYWlsQ29vcmRzW0NvbW1vbi5yYWlsTWFuYWdlci5nZXRPcHBvc2l0ZURpcmVjdGlvbihhdmF0YXIuZGlyZWN0aW9uKV07XG4gICAgICAgICAgICBhdmF0YXIueCA9IHRoaXMuX2F2YXRhcnNbaS0xXS54ICsgKGNvb3Jkcy54KTtcbiAgICAgICAgICAgIGF2YXRhci55ID0gdGhpcy5fYXZhdGFyc1tpLTFdLnkgKyAoY29vcmRzLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXZhdGFyLnNwZWVkID0gMDtcblxuICAgICAgICB0aGlzLl9vYmplY3RTaGFkb3dIb2xkZXIuYWRkQ2hpbGQodGhpcy5fYXZhdGFyc1tpXS5zaGFkb3cpO1xuICAgICAgICB0aGlzLl9vYmplY3RIb2xkZXIuYWRkQ2hpbGQodGhpcy5fYXZhdGFyc1tpXSk7XG4gICAgfVxuXG4vL0hpZ2hsaWdodCBBcnJvd1xuXG4gICAgdGhpcy5faGlnaGxpZ2h0QXJyb3cgPSBuZXcgSGlnaGxpZ2h0QXJyb3coKTtcbiAgICB0aGlzLl9oaWdobGlnaHRBcnJvdy54ID0gdGhpcy5fYXZhdGFyc1swXS54O1xuICAgIHRoaXMuX2hpZ2hsaWdodEFycm93LnkgPSB0aGlzLl9hdmF0YXJzWzBdLnk7XG4gICAgdGhpcy5fdG9wTGF5ZXIuYWRkQ2hpbGQodGhpcy5faGlnaGxpZ2h0QXJyb3cpO1xuICAgIHRoaXMuX2hpZ2hsaWdodEFycm93LnNpZ25hbHMudGFyZ2V0UmFpbFJlYWNoZWQuYWRkKHRoaXMub25IaWdobGlnaHRBcnJvd1RhcmdldFJhaWxSZWFjaGVkLCB0aGlzKTtcblxuLy9IaXQgQXJlYVxuXG4gICAgdGhpcy5faGl0QXJlYSA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uZ2VuZXJhdGVkVGV4dHVyZXNbJ2JsYWNrJ10pO1xuICAgIHRoaXMuX2hpdEFyZWEuYWxwaGEgPSAwO1xuICAgIHRoaXMuX2hpdEFyZWEud2lkdGggPSBDb21tb24uU1RBR0VfV0lEVEg7XG4gICAgdGhpcy5faGl0QXJlYS5oZWlnaHQgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuICAgIHRoaXMuX2hpdEFyZWEuaGl0QXJlYSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCBDb21tb24uU1RBR0VfV0lEVEgsIENvbW1vbi5TVEFHRV9IRUlHSFQpO1xuICAgIHRoaXMuX2hpdEFyZWEuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5faGl0QXJlYSk7XG5cbiAgICBpZih0aGlzLl92aWV3RGVidWcpXG4gICAge1xuICAgICAgICB0aGlzLl9oaXRBcmVhLnRvdWNobW92ZSA9IHRoaXMuX2hpdEFyZWEubW91c2Vtb3ZlID0gdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl9oaXRBcmVhLnRvdWNoZW5kID0gdGhpcy5faGl0QXJlYS5tb3VzZXVwID0gdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyk7XG5cblxuLy9VSVxuXG4gICAgdGhpcy5fcGF1c2VCdXR0b24gPSBuZXcgU21hbGxCdXR0b24oXCJpY29uX3BhdXNlXCIpO1xuICAgIHRoaXMuX3BhdXNlQnV0dG9uLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XG4gICAgdGhpcy5fcGF1c2VCdXR0b24uc2lnbmFscy5jbGljay5hZGQodGhpcy5vblBhdXNlQ2xpY2tlZCwgdGhpcyk7XG4gICAgdGhpcy5fcGF1c2VCdXR0b24uZG93blNvdW5kTmFtZSA9IFwic2Z4X2J0bl9wcmVzc19md2RfMDBcIjtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3BhdXNlQnV0dG9uKTtcblxuICAgIHRoaXMuX3Rva2VuQ291bnRlciA9IG5ldyBUb2tlbkNvdW50ZXIoQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbdGhpcy5fbGV2ZWxdLnRvdGFsX3Rva2Vucyk7XG4gICAgdGhpcy5fdG9rZW5Db3VudGVyLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl90b2tlbkNvdW50ZXIpO1xuICAgIHRoaXMuX3Rva2VuQ291bnRlci5zZXRUb2tlbnMoMCk7XG5cbiAgICB2YXIgZGlhbG9ndWUgPSBbXCJESUFMT0dVRV8xXCIsIFwiRElBTE9HVUVfMlwiLCBcIkRJQUxPR1VFXzNcIiwgXCJESUFMT0dVRV80XCIsIFwiRElBTE9HVUVfNVwiLCBcIkRJQUxPR1VFXzZcIl07XG4gICAgdGhpcy5fZGlhbG9ndWVCb3ggPSBuZXcgRGlhbG9ndWVCb3goZGlhbG9ndWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmRpYWxvZ3VlLmxlbmd0aCldKTtcbiAgICB0aGlzLl9kaWFsb2d1ZUJveC5zaWduYWxzLmFjdGl2YXRlZC5hZGRPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuX2RpYWxvZ3VlQm94LnNpZ25hbHMuZGVhY3RpdmF0ZWQuYWRkT25jZSh0aGlzLm9uRGlhbG9ndWVCb3hEZWFjdGl2YXRlZCwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9kaWFsb2d1ZUJveCk7XG5cbi8vQXVkaW8gICAgXG5cbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNQbGF5LmRpc3BhdGNoKCdtdXNpY19nYW1lbG9vcF8wJyArICh0aGlzLl9sZXZlbCAlIDIpKTtcblxuICAgIHZhciBwYXJhbXMgPSBuZXcgQXVkaW9QYXJhbXMoKTtcbiAgICBwYXJhbXMubG9vcCA9IHRydWU7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfYW1iaWVuY2VfY2l0eV8wMFwiLCBwYXJhbXMpO1xuXG5cbi8vVHV0b3JpYWxzXG4gICAgXG4gICAgdGhpcy5fdHV0b3JpYWxzID0gW107XG4gICAgaWYoQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbdGhpcy5fbGV2ZWxdLnR1dG9yaWFsKVxuICAgIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IENvbW1vbi5sZXZlbERhdGEubGV2ZWxzW3RoaXMuX2xldmVsXS50dXRvcmlhbC5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHR1dG9yaWFsID0ge307XG4gICAgICAgICAgICBmb3IodmFyIGogaW4gQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbdGhpcy5fbGV2ZWxdLnR1dG9yaWFsW2ldKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR1dG9yaWFsW2pdID0gQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbdGhpcy5fbGV2ZWxdLnR1dG9yaWFsW2ldW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHV0b3JpYWwuc2hvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3R1dG9yaWFscy5wdXNoKHR1dG9yaWFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fd29ybGRTY2FsZXIuc2NhbGUsIDEsIHt4OjEuMiwgeToxLjIsIGVhc2U6U2luZS5lYXNlSW5PdXR9KSk7XG5cbi8vRlBTXG5cbiAgICB0aGlzLl9mcHMgPSB7XG4gICAgICAgIHN0YXJ0VGltZSA6IDAsXG4gICAgICAgIGZyYW1lTnVtYmVyIDogMCxcbiAgICAgICAgZ2V0RlBTIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVOdW1iZXIrKztcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUgPSAoIGQgLSB0aGlzLnN0YXJ0VGltZSApIC8gMTAwMCxcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBNYXRoLmZsb29yKCAoIHRoaXMuZnJhbWVOdW1iZXIgLyBjdXJyZW50VGltZSApICk7XG5cbiAgICAgICAgICAgIGlmKCBjdXJyZW50VGltZSA+IDEgKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVOdW1iZXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSAgIFxuICAgIH07XG5cbiAgICB0aGlzLl9mcHNUZXh0ID0gbmV3IFBJWEkuVGV4dChcIlwiLCB7ZmlsbDoweDAwMDAwMH0pO1xuICAgIHRoaXMuX2Zwc1RleHQueCA9IHRoaXMuX2NlbnRyZS54ICsgMjAwO1xuICAgIHRoaXMuX2Zwc1RleHQueSA9IHRoaXMuX2NlbnRyZS55O1xuICAgIC8vdGhpcy5hZGRDaGlsZCh0aGlzLl9mcHNUZXh0KTtcblxufTtcblxuR2FtZVNjcmVlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZCh0aGlzLl9jb252ZXlvckxvb3BTb3VuZCk7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5zdG9wU291bmQoJ3NmeF9zaGllbGRfbG9vcF8wMicpO1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKCdzZnhfYW1iaWVuY2VfY2l0eV8wMCcpO1xuICAgIFxuICAgIGZvcih2YXIgaSBpbiB0aGlzLl9hdmF0YXJzKVxuICAgIHtcbiAgICAgICAgdGhpcy5fYXZhdGFyc1tpXS5kaXNwb3NlKCk7XG4gICAgfVxufVxuXG4vKipcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG5cbiAgICBpZih0aGlzLl9wYXVzZWQpXG4gICAgXHRyZXR1cm4gbnVsbDtcblxuICAgIHRoaXMuX2Zwc1RleHQudGV4dCA9IHRoaXMuX2Zwcy5nZXRGUFMoKS50b1N0cmluZygpO1xuXG4gICAgaWYoIXRoaXMuX3ZpZXdEZWJ1ZylcbiAgICB7XG4gICAgICAgIHZhciB2aWV3UG9pbnQgPSBuZXcgUElYSS5Qb2ludCgtKHRoaXMuX2F2YXRhcnNbMF0ueCkrKENvbW1vbi5TVEFHRV9XSURUSC8yKSwgLSh0aGlzLl9hdmF0YXJzWzBdLnkpKyhDb21tb24uU1RBR0VfSEVJR0hULzIpICsgQ29tbW9uLnJhaWxNYW5hZ2VyLmRpc3RhbmNlRnJvbUdyb3VuZCk7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpIGluIHRoaXMuX3dvcmxkcylcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuX3ZpZXdEZWJ1ZylcbiAgICAgICAge1xuICAgIFx0ICAgdGhpcy5fd29ybGRzW2ldLnZpZXdYICs9IHRoaXMuX3ZpZXdEZWJ1Z1hTcGVlZDtcbiAgICBcdCAgIHRoaXMuX3dvcmxkc1tpXS52aWV3WSArPSB0aGlzLl92aWV3RGVidWdZU3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl93b3JsZHNbaV0udmlld1ggPSB2aWV3UG9pbnQueDtcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkc1tpXS52aWV3WSA9IHZpZXdQb2ludC55O1xuICAgICAgICB9XG5cdH1cblxuICAgIGlmKHRoaXMuX3ZpZXdEZWJ1ZylcbiAgICB7XG4gICAgICAgIHRoaXMuX29iamVjdFNoYWRvd0hvbGRlci54ICs9IHRoaXMuX3ZpZXdEZWJ1Z1hTcGVlZDtcbiAgICAgICAgdGhpcy5fb2JqZWN0U2hhZG93SG9sZGVyLnkgKz0gdGhpcy5fdmlld0RlYnVnWVNwZWVkO1xuICAgICAgICB0aGlzLl9vYmplY3RIb2xkZXIueCArPSB0aGlzLl92aWV3RGVidWdYU3BlZWQ7XG4gICAgICAgIHRoaXMuX29iamVjdEhvbGRlci55ICs9IHRoaXMuX3ZpZXdEZWJ1Z1lTcGVlZDtcbiAgICAgICAgdGhpcy5fdG9wTGF5ZXIueCArPSB0aGlzLl92aWV3RGVidWdYU3BlZWQ7XG4gICAgICAgIHRoaXMuX3RvcExheWVyLnkgKz0gdGhpcy5fdmlld0RlYnVnWVNwZWVkO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLl9vYmplY3RTaGFkb3dIb2xkZXIueCA9IHZpZXdQb2ludC54O1xuICAgICAgICB0aGlzLl9vYmplY3RTaGFkb3dIb2xkZXIueSA9IHZpZXdQb2ludC55O1xuICAgICAgICB0aGlzLl9vYmplY3RIb2xkZXIueCA9IHZpZXdQb2ludC54O1xuICAgICAgICB0aGlzLl9vYmplY3RIb2xkZXIueSA9IHZpZXdQb2ludC55O1xuICAgICAgICB0aGlzLl90b3BMYXllci54ID0gdmlld1BvaW50Lng7XG4gICAgICAgIHRoaXMuX3RvcExheWVyLnkgPSB2aWV3UG9pbnQueTtcbiAgICB9XG5cbiAgICB2YXIgaG9sZGVyID0gdGhpcy5fb2JqZWN0SG9sZGVyO1xuICAgIHRoaXMuX29iamVjdEdyYXBoaWNzLnNvcnQoZnVuY3Rpb24oYSwgYilcbiAgICB7XG4gICAgICAgIGlmKGEueSAtIGIueSA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGhvbGRlci5nZXRDaGlsZEluZGV4KGEpIC0gaG9sZGVyLmdldENoaWxkSW5kZXgoYik7XG5cbiAgICAgICAgcmV0dXJuIGEueSAtIGIueTtcbiAgICB9KTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9vYmplY3RHcmFwaGljcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMuX29iamVjdEhvbGRlci5zZXRDaGlsZEluZGV4KHRoaXMuX29iamVjdEdyYXBoaWNzW2ldLCBpKTtcbiAgICB9XG5cbiAgICBmb3IodmFyIGkgaW4gdGhpcy5fYXZhdGFycylcbiAgICB7XG4gICAgICAgIHRoaXMuX2F2YXRhcnNbaV0udXBkYXRlKCk7XG5cbiAgICAgICAgaWYodGhpcy5fYXZhdGFyc1tpXS50YXJnZXRSYWlsKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9hdmF0YXJzW2ldLnRhcmdldFJhaWwuY29sID09IENvbW1vbi5sZXZlbERhdGEubGV2ZWxzW3RoaXMuX2xldmVsXS5lbmQuY29sICYmIFxuICAgICAgICAgICAgICAgIHRoaXMuX2F2YXRhcnNbaV0udGFyZ2V0UmFpbC5yb3cgPT0gQ29tbW9uLmxldmVsRGF0YS5sZXZlbHNbdGhpcy5fbGV2ZWxdLmVuZC5yb3cpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUxldmVsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZighdGhpcy5faGlnaGxpZ2h0QXJyb3cudGFyZ2V0aW5nICYmIHRoaXMuc3dpdGNoUmFpbCAhPSBudWxsKVxuICAgIHtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0QXJyb3cudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodEFycm93LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRBcnJvdy5zcGVlZCA9IE1hdGgubWF4KDgsIHRoaXMuX2F2YXRhcnNbaV0uc3BlZWQgKiAyKTtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLnN3aXRjaFJhaWwgPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodEFycm93LnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLl9hdmF0YXJzWzBdLm1hZ25ldClcbiAgICB7XG4gICAgICAgIHZhciBjdXJyZW50QXZhdGFyID0gMDtcbiAgICAgICAgdmFyIG1pZEF2YXRhciA9IHRoaXMuX2F2YXRhcnNbTWF0aC5mbG9vcih0aGlzLl9hdmF0YXJzLmxlbmd0aC8yKV0uY3VycmVudFJhaWw7XG4gICAgfVxuXG4gICAgZm9yKHZhciBqID0gMDsgaiA8IHRoaXMuX29iamVjdHMubGVuZ3RoOyBqKyspXG4gICAge1xuICAgICAgICBpZih0aGlzLl9hdmF0YXJzWzBdLm1hZ25ldClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fb2JqZWN0c1tqXS50eXBlID09IFwidG9rZW5cIiAmJiAhdGhpcy5fb2JqZWN0c1tqXS5jb2xsZWN0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fb2JqZWN0c1tqXS5yb3cgPiBtaWRBdmF0YXIucm93LTUgJiYgdGhpcy5fb2JqZWN0c1tqXS5yb3cgPCBtaWRBdmF0YXIucm93KzUgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0c1tqXS5jb2wgPiBtaWRBdmF0YXIuY29sLTUgJiYgdGhpcy5fb2JqZWN0c1tqXS5jb2wgPCBtaWRBdmF0YXIuY29sKzUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXZhdGFyKys7XG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRBdmF0YXIgPj0gdGhpcy5fYXZhdGFycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXZhdGFyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwciA9IHRoaXMuX29iamVjdHNbal0uc3ByaXRlO1xuICAgICAgICAgICAgICAgICAgICBzcHIueCArPSB0aGlzLl9vYmplY3RzW2pdLng7XG4gICAgICAgICAgICAgICAgICAgIHNwci55ICs9IHRoaXMuX29iamVjdHNbal0ueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0SG9sZGVyLmFkZENoaWxkKHNwcik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0c1tqXS5tYWduZXREcmF3KHRoaXMuX2F2YXRhcnNbY3VycmVudEF2YXRhcl0sIG5ldyBQSVhJLlBvaW50KDAsIC0oQ29tbW9uLnJhaWxNYW5hZ2VyLmRpc3RhbmNlRnJvbUdyb3VuZCouNzUpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb2JqZWN0c1tqXS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b2tlbkNvdW50ZXIudXBkYXRlKCk7XG5cbiAgICBpZih0aGlzLl9zcGVlZFVwQ291bnRlciA+PSAxODAwICYmIHRoaXMuX2xldmVsID4gMSlcbiAgICB7XG4gICAgICAgIHRoaXMuX3NwZWVkVXBDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5fZGlhbG9ndWVCb3ggPSBuZXcgRGlhbG9ndWVCb3goXCJESUFMT0dVRV9TUEVFRF9VUFwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9kaWFsb2d1ZUJveCk7XG5cbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcInNmeF9jb252ZXlvcl9zcGVlZHVwX3dhcm5pbmdcIik7XG5cbiAgICAgICAgICAgIHRoaXMuX3NwZWVkVXBWYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7b25VcGRhdGVTY29wZTp0aGlzLCBvblVwZGF0ZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9hdmF0YXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXZhdGFyc1tpXS5zcGVlZFVwUGVyY2VudFZhbHVlID0gdGhpcy5fc3BlZWRVcFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5hZGQodGwpO1xuXG4gICAgICAgICAgICB0bC50byh0aGlzLCAuMywge19zcGVlZFVwVmFsdWU6MC4yNSwgZWFzZTpTaW5lLmVhc2VJbk91dH0pO1xuICAgICAgICAgICAgdGwudG8odGhpcywgLjMsIHtkZWxheTo1LCBfc3BlZWRVcFZhbHVlOjAsIGVhc2U6U2luZS5lYXNlSW5PdXR9KTtcbiAgICAgICAgICAgIHRsLnRvKHRoaXMuX3dvcmxkU2NhbGVyLnNjYWxlLCAwLjUsIHt4OjEsIHk6MSwgZWFzZTpTaW5lLmVhc2VJbk91dH0pO1xuXG4gICAgICAgICAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX3dvcmxkU2NhbGVyLnNjYWxlLCAwLjUsIHt4OjEuMiwgeToxLjIsIGVhc2U6U2luZS5lYXNlSW5PdXR9KSk7XG5cbiAgICAgICAgfSwgMSwgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX3NwZWVkVXBDb3VudGVyKys7XG5cbiAgICBpZih0aGlzLl9kaWFsb2d1ZUJveC5hY3RpdmUpXG4gICAgICAgIHRoaXMuX2RpYWxvZ3VlQm94LnVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fcGF1c2VCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xuICAgIHRoaXMuX3Rva2VuQ291bnRlci54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvbkxlZnQoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fXNjb3BlXG4gKi9cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVJbiA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIFxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuR2FtZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIFxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZU91dC5jYWxsKHRoaXMpO1xufTtcblxuR2FtZVNjcmVlbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpXG57XG4gICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9oaXRBcmVhLmludGVyYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fcGF1c2VMb29wcygpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9vYmplY3RzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhpcy5fb2JqZWN0c1tpXS5wYXVzZSgpO1xuICAgIH1cbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2hpdEFyZWEuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRNdXNpY1BsYXkuZGlzcGF0Y2goJ211c2ljX2dhbWVsb29wXzAnICsgKHRoaXMuX2xldmVsICUgMikpO1xuICAgIHRoaXMuX3Jlc3VtZUxvb3BzKCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX29iamVjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLl9vYmplY3RzW2ldLnJlc3VtZSgpO1xuICAgIH1cbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUuYWRkUmFpbE9iamVjdCA9IGZ1bmN0aW9uKHRpbGUsIGNvbm5lY3QxLCBjb25uZWN0MiwgY29ubmVjdDMpXG57ICAgXG4gICAgdmFyIHJhaWw7XG4gICAgaWYoY29ubmVjdDMpXG4gICAge1xuICAgICAgICByYWlsID0gbmV3IFJhaWxKdW5jdGlvbihjb25uZWN0MSwgY29ubmVjdDIsIGNvbm5lY3QzLCB0aWxlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgcmFpbCA9IG5ldyBSYWlsKGNvbm5lY3QxLCBjb25uZWN0MiwgdGlsZSk7XG4gICAgfVxuICAgIHJhaWwuc2lnbmFscy5jbGVhcmVkLmFkZE9uY2UodGhpcy5vbkFjdGl2ZU9iamVjdENsZWFyZWQsIHRoaXMpO1xuICAgIHRoaXMuX3JhaWxzLnB1c2gocmFpbCk7XG5cbiAgICB2YXIgbGF5ZXIgPSB0aGlzLl93b3JsZHNbJ2Zsb29yJ10uZ2V0TGF5ZXJGb3JZQ29vcmRpbmF0ZSh0aWxlLnkpO1xuICAgIGlmKGxheWVyKVxuICAgIHtcbiAgICAgICAgdmFyIHRpbGVzID0gbGF5ZXIuZ2V0VGlsZXNCeUNvbCh0aWxlLmNvbCk7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aWxlc1tpXS50ZXh0dXJlTmFtZSA9PSB0aWxlLnRleHR1cmVOYW1lICsgJ19zaGFkb3cnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhaWwuYWRkU2hhZG93KHRpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmdldFJhaWxBdCA9IGZ1bmN0aW9uKHJvdywgY29sKVxue1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLl9yYWlscylcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuX3JhaWxzW2ldLnJvdyA9PSByb3cgJiYgdGhpcy5fcmFpbHNbaV0uY29sID09IGNvbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhaWxzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5nZXRUYXJnZXRSYWlsID0gZnVuY3Rpb24ocmFpbCwgZGlyZWN0aW9uKVxue1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLl9yYWlscylcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuX3JhaWxzW2ldLnJvdyA9PSByYWlsLnJvdyArIHJhaWwubmVpZ2hib3VyQ29vcmRzW2RpcmVjdGlvbl0ucm93KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9yYWlsc1tpXS5jb2wgPT0gcmFpbC5jb2wgKyByYWlsLm5laWdoYm91ckNvb3Jkc1tkaXJlY3Rpb25dLmNvbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmFpbHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS51cGRhdGVTd2l0Y2hSYWlsID0gZnVuY3Rpb24ocHJldmlvdXNSYWlsLCBkaXJlY3Rpb24pXG57XG4gICAgdmFyIHJhaWwgPSB0aGlzLmdldFRhcmdldFJhaWwocHJldmlvdXNSYWlsLCBkaXJlY3Rpb24pO1xuICAgIHZhciBsaW1pdCA9IDA7XG5cbiAgICB3aGlsZShyYWlsICYmIGxpbWl0IDwgMTApXG4gICAge1xuICAgICAgICB2YXIgbGlua2luZ05laWdoYm91cnMgPSB0aGlzLmdldExpbmtpbmdSYWlscyhyYWlsKTtcbiAgICAgICAgaWYobGlua2luZ05laWdoYm91cnMuY291bnQgPT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gcmFpbC5nZXRPcHBvc2l0ZUVuZChDb21tb24ucmFpbE1hbmFnZXIuZ2V0T3Bwb3NpdGVEaXJlY3Rpb24oZGlyZWN0aW9uKSk7XG4gICAgICAgICAgICB2YXIgbmVpZ2hib3VyID0gbGlua2luZ05laWdoYm91cnNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIGlmKG5laWdoYm91ciA9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhaWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUmFpbCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYobmVpZ2hib3VyLmNvbm5lY3RlZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJhaWwgPSBuZWlnaGJvdXIucmFpbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hSYWlsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnanVuY3Rpb24gKG5vdCBjb25uZWN0ZWQpIGF0OiAnICsgbmVpZ2hib3VyLnJhaWwuY29sICsgJywgJyArIG5laWdoYm91ci5yYWlsLnJvdyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqdW5jdGlvbjogJyArIG5laWdoYm91ci5yYWlsLnJhaWxKdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5laWdoYm91ci5yYWlsLnJhaWxKdW5jdGlvbiA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYWlsID0gbmVpZ2hib3VyLnJhaWw7XG4gICAgICAgICAgICAgICAgICAgICAgICByYWlsLnN3YXBKdW5jdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hSYWlsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtpbmdOZWlnaGJvdXJzID0gdGhpcy5nZXRMaW5raW5nUmFpbHMobmVpZ2hib3VyLnJhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFpbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFJhaWwgPSBuZWlnaGJvdXIucmFpbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxpbmtpbmdOZWlnaGJvdXJzLmNvdW50ID4gMilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnanVuY3Rpb24gKGFscmVhZHkgY29ubmVjdGVkKSBhdDogJyArIHJhaWwuY29sICsgJywgJyArIHJhaWwucm93KTtcbiAgICAgICAgICAgIGlmKHJhaWwucmFpbEp1bmN0aW9uID09IHRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gcmFpbC5jb25uZWN0MjtcbiAgICAgICAgICAgICAgICByYWlsID0gbGlua2luZ05laWdoYm91cnNbZGlyZWN0aW9uXS5yYWlsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUmFpbCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hSYWlsID0gcmFpbDtcbiAgICAgICAgICAgICAgICByYWlsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2VuZCBvZiB0aGUgbGluZSBhdDogJyArIHJhaWwuY29sICsgJywgJyArIHJhaWwucm93KTtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoUmFpbCA9IG51bGw7XG4gICAgICAgICAgICByYWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsaW1pdCsrO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc3dpdGNoUmFpbCAmJiBsaW5raW5nTmVpZ2hib3Vycy5jb3VudCA+IDIpXG4gICAge1xuICAgICAgICBkaXJlY3Rpb24gPSBDb21tb24ucmFpbE1hbmFnZXIuZ2V0T3Bwb3NpdGVEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICAgICAgdmFyIHN3aXRjaFN0YXRlcyA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgaW4gbGlua2luZ05laWdoYm91cnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGkgIT0gJ2NvdW50JyAmJiBpICE9IGRpcmVjdGlvbiAmJiBDb21tb24ucmFpbE1hbmFnZXIuZ2V0Q29ubmVjdGluZ0FuZ2xlKGksIGRpcmVjdGlvbikgPiA0NSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2hTdGF0ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN3aXRjaFJhaWwuYXBwbHlTd2l0Y2hTdGF0ZXMoZGlyZWN0aW9uLCBzd2l0Y2hTdGF0ZXMpO1xuXG4gICAgICAgIHZhciByYWlsID0gdGhpcy5nZXRSYWlsQXQodGhpcy5fYXZhdGFyc1swXS5jdXJyZW50UmFpbC5yb3csIHRoaXMuX2F2YXRhcnNbMF0uY3VycmVudFJhaWwuY29sKTtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0QXJyb3cueCA9IHRoaXMuX2F2YXRhcnNbMF0ueDtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0QXJyb3cueSA9IHRoaXMuX2F2YXRhcnNbMF0ueTtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0QXJyb3cuY3VycmVudFJhaWwgPSByYWlsO1xuICAgICAgICB0aGlzLl9oaWdobGlnaHRBcnJvdy5kaXJlY3Rpb24gPSB0aGlzLl9hdmF0YXJzWzBdLmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0QXJyb3cuc2V0VGFyZ2V0UmFpbCh0aGlzLmdldFRhcmdldFJhaWwocmFpbCwgdGhpcy5faGlnaGxpZ2h0QXJyb3cuZGlyZWN0aW9uKSk7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodEFycm93LnVuc2V0VGFyZ2V0aW5nKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuc3dpdGNoUmFpbCA9IG51bGw7XG4gICAgfVxufTtcblxuR2FtZVNjcmVlbi5wcm90b3R5cGUuZ2V0TGlua2luZ1JhaWxzID0gZnVuY3Rpb24ocmFpbClcbntcbiAgICB2YXIgbmVpZ2hib3VycyA9IHtjb3VudDowfTtcblxuICAgIGZvcih2YXIgZCBpbiBDb21tb24ucmFpbE1hbmFnZXIucmFpbENvb3JkcylcbiAgICB7XG4gICAgICAgIHZhciBvZCA9IENvbW1vbi5yYWlsTWFuYWdlci5nZXRPcHBvc2l0ZURpcmVjdGlvbihkKTtcblxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5fcmFpbHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX3JhaWxzW2ldLnJvdyA9PSByYWlsLnJvdyArIHJhaWwubmVpZ2hib3VyQ29vcmRzW2RdLnJvdylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9yYWlsc1tpXS5jb2wgPT0gcmFpbC5jb2wgKyByYWlsLm5laWdoYm91ckNvb3Jkc1tkXS5jb2wpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFpbElzQ29ubmVjdGluZyA9IHJhaWwuaGFzQ29ubmVjdGlvbihkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5laWdoYm91cklzQ29ubmVjdGluZyA9IHRoaXMuX3JhaWxzW2ldLmhhc0Nvbm5lY3Rpb24ob2QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJhaWxJc0Nvbm5lY3RpbmcgfHwgbmVpZ2hib3VySXNDb25uZWN0aW5nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzW2RdID0ge3JhaWw6dGhpcy5fcmFpbHNbaV0sIGNvbm5lY3RlZDoocmFpbElzQ29ubmVjdGluZyAmJiBuZWlnaGJvdXJJc0Nvbm5lY3RpbmcpfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMuY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZWlnaGJvdXJzO1xufVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5hZGRUb2tlbk9iamVjdCA9IGZ1bmN0aW9uKHRpbGUpXG57XG4gICAgdmFyIHRva2VuID0gbmV3IFRva2VuKHRpbGUpO1xuICAgIHRoaXMuX29iamVjdEhvbGRlci5hZGRDaGlsZCh0b2tlbi5ncmFwaGljKTtcbiAgICB0aGlzLl9vYmplY3RHcmFwaGljcy5wdXNoKHRva2VuLmdyYXBoaWMpO1xuICAgIHRoaXMuX29iamVjdHMucHVzaCh0b2tlbik7XG4gICAgdG9rZW4uc2lnbmFscy5jbGVhcmVkLmFkZE9uY2UodGhpcy5vbkFjdGl2ZU9iamVjdENsZWFyZWQsIHRoaXMpO1xuICAgIHRva2VuLnNpZ25hbHMuY29sbGlkZS5hZGRPbmNlKHRoaXMub25Ub2tlbkNvbGxlY3RlZCwgdGhpcyk7XG59XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmFkZE9ic3RhY2xlT2JqZWN0ID0gZnVuY3Rpb24odGlsZSwgb2JzdGFjbGVUeXBlKVxue1xuICAgIHZhciByYWlsID0gdGhpcy5nZXRSYWlsQXQodGlsZS5yb3csIHRpbGUuY29sKTtcbiAgICB2YXIgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUodGlsZSwgb2JzdGFjbGVUeXBlLCByYWlsKTtcbiAgICB2YXIgZ3JhcGhpY3MgPSBbb2JzdGFjbGUuc2luZ2xlR3JhcGhpYywgb2JzdGFjbGUubGVmdEdyYXBoaWMsIG9ic3RhY2xlLnJpZ2h0R3JhcGhpY107XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZ3JhcGhpY3MubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZihncmFwaGljc1tpXSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fb2JqZWN0SG9sZGVyLmFkZENoaWxkKGdyYXBoaWNzW2ldKTtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdEdyYXBoaWNzLnB1c2goZ3JhcGhpY3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX29iamVjdHMucHVzaChvYnN0YWNsZSk7XG4gICAgb2JzdGFjbGUuc2lnbmFscy5jbGVhcmVkLmFkZE9uY2UodGhpcy5vbkFjdGl2ZU9iamVjdENsZWFyZWQsIHRoaXMpO1xuICAgIG9ic3RhY2xlLnNpZ25hbHMuY29sbGlkZS5hZGQodGhpcy5vbk9ic3RhY2xlQ29sbGlkZWQsIHRoaXMpO1xufVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5hZGRQb3dlclVwT2JqZWN0ID0gZnVuY3Rpb24odGlsZSwgcG93ZXJVcFR5cGUpXG57XG4gICAgdmFyIHBvd2VydXAgPSBuZXcgUG93ZXJVcCh0aWxlLCBwb3dlclVwVHlwZSk7XG4gICAgdGhpcy5fb2JqZWN0SG9sZGVyLmFkZENoaWxkKHBvd2VydXAuZ3JhcGhpYyk7XG4gICAgdGhpcy5fb2JqZWN0R3JhcGhpY3MucHVzaChwb3dlcnVwLmdyYXBoaWMpO1xuICAgIHRoaXMuX29iamVjdHMucHVzaChwb3dlcnVwKTtcbiAgICBwb3dlcnVwLnNpZ25hbHMuY2xlYXJlZC5hZGRPbmNlKHRoaXMub25BY3RpdmVPYmplY3RDbGVhcmVkLCB0aGlzKTtcbiAgICBwb3dlcnVwLnNpZ25hbHMuY29sbGlkZS5hZGRPbmNlKHRoaXMub25Qb3dlclVwQ29sbGVjdGVkLCB0aGlzKTtcbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUuYWRkRW5lbXlPYmplY3QgPSBmdW5jdGlvbih0aWxlLCBkaXJlY3Rpb24pXG57XG4gICAgdmFyIGVuZW15ID0gbmV3IEVuZW15KHRpbGUsIGRpcmVjdGlvbik7XG4gICAgdGhpcy5fZW5lbWllcy5wdXNoKGVuZW15KTtcbiAgICBlbmVteS5zaWduYWxzLmNsZWFyZWQuYWRkT25jZSh0aGlzLm9uQWN0aXZlT2JqZWN0Q2xlYXJlZCwgdGhpcyk7XG59XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLmNvbXBsZXRlTGV2ZWwgPSBmdW5jdGlvbigpXG57XG4gICAgdGhpcy5fcGF1c2VMb29wcygpO1xuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWROZXh0U2NyZWVuLmRpc3BhdGNoKHRydWUsIHRoaXMuX3Rva2Vucyk7XG59XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLnVwZGF0ZUVuZW1pZXMgPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIHJhaWwgPSB0aGlzLl9hdmF0YXJzWzBdLnRhcmdldFJhaWw7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMuX2F2YXRhcnNbMF0uZGlyZWN0aW9uO1xuICAgIHZhciBsaW5raW5nTmVpZ2hib3VycyA9IG51bGw7XG4gICAgdmFyIGxvb3BpbmcgPSB0cnVlO1xuICAgIHZhciBlbmRSYWlsID0gbnVsbDtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgd2hpbGUobG9vcGluZyAmJiBjb3VudCA8IDMgJiYgcmFpbClcbiAgICB7XG4gICAgICAgIGxpbmtpbmdOZWlnaGJvdXJzID0gdGhpcy5nZXRMaW5raW5nUmFpbHMocmFpbCk7XG4gICAgICAgIGlmKGxpbmtpbmdOZWlnaGJvdXJzLmNvdW50ID49IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IHJhaWwuZ2V0T3Bwb3NpdGVFbmQoQ29tbW9uLnJhaWxNYW5hZ2VyLmdldE9wcG9zaXRlRGlyZWN0aW9uKGRpcmVjdGlvbikpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbmVpZ2hib3VyID0gbGlua2luZ05laWdoYm91cnNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIGlmKG5laWdoYm91cilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihuZWlnaGJvdXIuY29ubmVjdGVkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmFpbCA9IG5laWdoYm91ci5yYWlsO1xuICAgICAgICAgICAgICAgICAgICBsb29waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbG9vcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb29waW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBsb29waW5nID0gZmFsc2U7XG4gICAgICAgICAgICBlbmRSYWlsID0gcmFpbDtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgIH1cblxuICAgIGlmKGVuZFJhaWwgIT0gbnVsbClcbiAgICB7XG4gICAgICAgIHZhciBzbWFsbGVzdERpc3RhbmNlaSA9IG51bGw7XG4gICAgICAgIHZhciBzbWFsbGVzdERpc3RhbmNlID0gbnVsbDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX2VuZW1pZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyhNYXRoLmFicyhlbmRSYWlsLnggLSB0aGlzLl9lbmVtaWVzW2ldLngpLCAyKSArIE1hdGgucG93KE1hdGguYWJzKGVuZFJhaWwueSAtIHRoaXMuX2VuZW1pZXNbaV0ueSksIDIpKTtcbiAgICAgICAgICAgIGlmKGRpc3RhbmNlIDwgc21hbGxlc3REaXN0YW5jZSB8fCBzbWFsbGVzdERpc3RhbmNlID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc21hbGxlc3REaXN0YW5jZWkgPSBpO1xuICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcmV2TnVtYmVyID0gMTtcbiAgICAgICAgaWYodGhpcy5fYWN0aXZlRW5lbXkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByZXZOdW1iZXIgPSB0aGlzLl9hY3RpdmVFbmVteS5iYWRHdXlOdW1iZXI7XG4gICAgICAgICAgICBpZih0aGlzLl9hY3RpdmVFbmVteSAhPSB0aGlzLl9lbmVtaWVzW3NtYWxsZXN0RGlzdGFuY2VpXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbmVteS5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9lbmVtaWVzLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2FjdGl2ZUVuZW15ICE9IHRoaXMuX2VuZW1pZXNbc21hbGxlc3REaXN0YW5jZWldKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVuZW15ID0gdGhpcy5fZW5lbWllc1tzbWFsbGVzdERpc3RhbmNlaV07XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRW5lbXkuYWN0aXZhdGUocHJldk51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLnNob3dUdXRvcmlhbCA9IGZ1bmN0aW9uKHR1dG9yaWFsKVxue1xuICAgIHRoaXMuc2lnbmFscy50dXRvcmlhbFNob3duLmRpc3BhdGNoKHR1dG9yaWFsLm9mZnNldCwgdHV0b3JpYWwudGV4dCk7XG59XG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJVkFURSBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5fdGlsZXNUb0Nvb3JkaW5hdGVzID0gZnVuY3Rpb24ocm93LCBjb2wpXG57XG4gICAgdmFyIHNxID0gQ29tbW9uLnNxdWFyZVRpbGVTaXplO1xuICAgIHJldHVybiBuZXcgUElYSS5Qb2ludChjb2wqc3EqNCArIChyb3cgJSAyID09IDEgPyBzcSoyIDogMCksIHJvdypzcSk7XG59XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLl9wYXVzZUxvb3BzID0gZnVuY3Rpb24oKVxue1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKHRoaXMuX2NvbnZleW9yTG9vcFNvdW5kKTtcbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUuX3Jlc3VtZUxvb3BzID0gZnVuY3Rpb24oKVxueyAgIFxuICAgIGlmKHRoaXMuX2NvbnZleW9yTG9vcFNvdW5kKVxuICAgIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IG5ldyBBdWRpb1BhcmFtcygpO1xuICAgICAgICBwYXJhbXMubG9vcCA9IHRydWU7XG4gICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKHRoaXMuX2NvbnZleW9yTG9vcFNvdW5kLCBwYXJhbXMpO1xuICAgIH1cbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVWRU5UU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUub25BY3RpdmVPYmplY3RGb3VuZCA9IGZ1bmN0aW9uKHRpbGUsIGltYWdlTmFtZSlcbntcbiAgICB2YXIgZGF0YSA9IENvbW1vbi5sZXZlbERhdGEuYWN0aXZlT2JqZWN0c1tpbWFnZU5hbWVdO1xuXG4gICAgaWYoZGF0YS5vYmplY3QgPT0gJ3JhaWwnKVxuICAgIHtcbiAgICAgICAgdGhpcy5hZGRSYWlsT2JqZWN0KHRpbGUsIGRhdGEuYXJnc1swXSwgZGF0YS5hcmdzWzFdKTtcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhLm9iamVjdCA9PSAncmFpbGp1bmN0aW9uJylcbiAgICB7XG4gICAgICAgIHRoaXMuYWRkUmFpbE9iamVjdCh0aWxlLCBkYXRhLmFyZ3NbMF0sIGRhdGEuYXJnc1sxXSwgZGF0YS5hcmdzWzJdKTtcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhLm9iamVjdCA9PSAndG9rZW4nKVxuICAgIHtcbiAgICAgICAgdGhpcy5hZGRUb2tlbk9iamVjdCh0aWxlKTtcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhLm9iamVjdCA9PSAnb2JzdGFjbGUnKVxuICAgIHtcbiAgICAgICAgdGhpcy5hZGRPYnN0YWNsZU9iamVjdCh0aWxlLCBkYXRhLmFyZ3NbMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmKGRhdGEub2JqZWN0ID09ICdwb3dlcnVwJylcbiAgICB7XG4gICAgICAgIHRoaXMuYWRkUG93ZXJVcE9iamVjdCh0aWxlLCBkYXRhLmFyZ3NbMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmKGRhdGEub2JqZWN0ID09ICdlbmVteScpXG4gICAge1xuICAgICAgICB0aGlzLmFkZEVuZW15T2JqZWN0KHRpbGUsIGRhdGEuYXJnc1swXSk7XG4gICAgfVxufVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5vblRva2VuQ29sbGVjdGVkID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuX3Rva2VucysrO1xuICAgIHRoaXMuX3Rva2VuQ291bnRlci5zZXRUb2tlbnModGhpcy5fdG9rZW5zKTtcbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUub25PYnN0YWNsZUNvbGxpZGVkID0gZnVuY3Rpb24ob2JzdGFjbGUsIGF2YXRhcilcbntcbiAgICBpZihhdmF0YXIgPT0gdGhpcy5fYXZhdGFyc1swXSlcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLl9hdmF0YXJzWzBdLnNoaWVsZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdG9rZW5zIC09IE1hdGgubWluKDUsIHRoaXMuX3Rva2Vucyk7XG4gICAgICAgICAgICB0aGlzLl90b2tlbkNvdW50ZXIuc2V0VG9rZW5zKHRoaXMuX3Rva2Vucyk7XG4gICAgICAgICAgICB0aGlzLl90b2tlbkNvdW50ZXIuY29sbGlkZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9hdmF0YXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9hdmF0YXJzW2ldLmNvbGxpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuX2F2YXRhcnNbaV0uYnVpbGRTcGVlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tb24ubGV2ZWxEYXRhLmxldmVsc1t0aGlzLl9sZXZlbF0uc3BlZWQvMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuMywgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXZhdGFyc1tpXS5idWlsZFNwZWVkLCB0aGlzLl9hdmF0YXJzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtDb21tb24ubGV2ZWxEYXRhLmxldmVsc1t0aGlzLl9sZXZlbF0uc3BlZWQsIDEsIC4zXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG9ic3RhY2xlLm9ic3RhY2xlVHlwZSA9PSAnc3ByYXknKVxuICAgICAgICB7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnc2Z4X3N0ZWFtX3ByZXNzX3N0YXJ0XzAwJyk7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnc2Z4X2hpdF9zdGVhbV93YXNoXzAwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvYnN0YWNsZS5vYnN0YWNsZVR5cGUgPT0gJ2ZhbnMnKVxuICAgICAgICB7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnc2Z4X2hpdF9haXJfZHJ5ZXJfMDEnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9ic3RhY2xlLm9ic3RhY2xlVHlwZSA9PSAnYnJ1c2gnKVxuICAgICAgICB7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnc2Z4X2hpdF9icnVzaGVzXzAxJyk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUub25Qb3dlclVwQ29sbGVjdGVkID0gZnVuY3Rpb24ocG93ZXJ1cClcbntcbiAgICBjb25zb2xlLmxvZygncG93ZXIgdXAhJyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX2F2YXRhcnMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZihwb3dlcnVwLnBvd2VyVXBUeXBlID09IFwic2hpZWxkXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2F2YXRhcnNbaV0uc2V0U2hpZWxkKCk7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZCgnc2Z4X3NoaWVsZF9waWNrdXAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBvd2VydXAucG93ZXJVcFR5cGUgPT0gXCJtYWduZXRcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fYXZhdGFyc1tpXS5zZXRNYWduZXQoKTtcbiAgICAgICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKCdzZnhfbWFnbmV0X3BpY2t1cF8wMCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F2YXRhcnNbaV0uc2V0TW9vZCgnaGFwcHknKTtcbiAgICB9XG59XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLm9uQWN0aXZlT2JqZWN0Q2xlYXJlZCA9IGZ1bmN0aW9uKG9iailcbntcbiAgICBpZihvYmoudHlwZSA9PSAncmFpbCcpXG4gICAge1xuICAgICAgICB0aGlzLl9yYWlscy5zcGxpY2UodGhpcy5fcmFpbHMuaW5kZXhPZihvYmopLCAxKTtcbiAgICB9XG4gICAgZWxzZSBpZihvYmoudHlwZSA9PSAnZW5lbXknKVxuICAgIHtcbiAgICAgICAgdGhpcy5fZW5lbWllcy5zcGxpY2UodGhpcy5fZW5lbWllcy5pbmRleE9mKG9iaiksIDEpO1xuICAgICAgICBpZihvYmogPT0gdGhpcy5fYWN0aXZlRW5lbXkpXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVFbmVteSA9IG51bGw7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuX29iamVjdEdyYXBoaWNzLnNwbGljZSh0aGlzLl9vYmplY3RHcmFwaGljcy5pbmRleE9mKG9iai5ncmFwaGljKSwgMSk7XG4gICAgICAgIHRoaXMuX29iamVjdHMuc3BsaWNlKHRoaXMuX29iamVjdHMuaW5kZXhPZihvYmopLCAxKTtcbiAgICAgICAgdGhpcy5fb2JqZWN0SG9sZGVyLnJlbW92ZUNoaWxkKG9iai5ncmFwaGljKTtcblxuICAgICAgICBpZihvYmoudHlwZSA9PSAndG9rZW4nIHx8IG9iai50eXBlID09ICdwb3dlcnVwJylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYob2JqLmNvbGxlY3RlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBSZWFkZXIucmVtb3ZlVGlsZUZyb21MYXllcihvYmoudGlsZS5sZXZlbERhdGFMYXllciwgb2JqLnJvdywgb2JqLmNvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvYmouZGlzcG9zZSgpO1xufVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5vbkF2YXRhclRhcmdldFJhaWxSZWFjaGVkID0gZnVuY3Rpb24oYXZhdGFyKVxue1xuICAgIGF2YXRhci5zZXRUYXJnZXRSYWlsKHRoaXMuZ2V0VGFyZ2V0UmFpbChhdmF0YXIudGFyZ2V0UmFpbCwgYXZhdGFyLmRpcmVjdGlvbikpO1xuXG4gICAgaWYoYXZhdGFyID09IHRoaXMuX2F2YXRhcnNbMF0pXG4gICAge1xuICAgICAgICBpZih0aGlzLnN3aXRjaFJhaWwgPT0gYXZhdGFyLmN1cnJlbnRSYWlsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaFJhaWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKHRoaXMuc3dpdGNoUmFpbCA9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTd2l0Y2hSYWlsKGF2YXRhci5jdXJyZW50UmFpbCwgYXZhdGFyLmRpcmVjdGlvbik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVFbmVtaWVzKCk7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX2F2YXRhcnMubGVuZ3RoLTE7IGkrKylcbiAgICB7XG4gICAgICAgIGlmKGF2YXRhciA9PSB0aGlzLl9hdmF0YXJzW2ldKVxuICAgICAgICAgICAgdGhpcy5fYXZhdGFyc1tpKzFdLmRpcmVjdGlvbk9mQXZhdGFySW5Gcm9udCA9IGF2YXRhci5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX29iamVjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZih0aGlzLl9vYmplY3RzW2ldLnJvdyA9PSBhdmF0YXIuY3VycmVudFJhaWwucm93ICYmXG4gICAgICAgICAgIHRoaXMuX29iamVjdHNbaV0uY29sID09IGF2YXRhci5jdXJyZW50UmFpbC5jb2wpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdHNbaV0uY29sbGlkZShhdmF0YXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl90dXRvcmlhbHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZighdGhpcy5fdHV0b3JpYWxzW2ldLnNob3duKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl90dXRvcmlhbHNbaV0ucm93ID09IGF2YXRhci5jdXJyZW50UmFpbC5yb3cgJiZcbiAgICAgICAgICAgICAgIHRoaXMuX3R1dG9yaWFsc1tpXS5jb2wgPT0gYXZhdGFyLmN1cnJlbnRSYWlsLmNvbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90dXRvcmlhbHNbaV0uc2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1R1dG9yaWFsKHRoaXMuX3R1dG9yaWFsc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5vbkF2YXRhckRlYWQgPSBmdW5jdGlvbigpXG57XG4gICAgdGhpcy5fcGF1c2VMb29wcygpO1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X2dvdF9jYXVnaHRfMDBcIik7XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE5leHRTY3JlZW4uZGlzcGF0Y2goZmFsc2UpO1xuXG4gICAgaWYodGhpcy5fd29ybGRTY2FsZXIuc2NhbGUueCA9PSAxKVxuICAgIHtcbiAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX3dvcmxkU2NhbGVyLnNjYWxlKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl93b3JsZFNjYWxlci5zY2FsZSwgMC41LCB7eDoxLjIsIHk6MS4yLCBlYXNlOlNpbmUuZWFzZUluT3V0fSkpO1xuICAgIH1cbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUub25IaWdobGlnaHRBcnJvd1RhcmdldFJhaWxSZWFjaGVkID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKHRoaXMuX2hpZ2hsaWdodEFycm93LnRhcmdldFJhaWwgPT0gdGhpcy5zd2l0Y2hSYWlsKVxuICAgIHtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0QXJyb3cuc2V0VGFyZ2V0aW5nKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodEFycm93LnNldFRhcmdldFJhaWwodGhpcy5nZXRUYXJnZXRSYWlsKHRoaXMuX2hpZ2hsaWdodEFycm93LnRhcmdldFJhaWwsIHRoaXMuX2hpZ2hsaWdodEFycm93LmRpcmVjdGlvbikpO1xuICAgIH1cbn1cblxuR2FtZVNjcmVlbi5wcm90b3R5cGUub25Ub3VjaE1vdmUgPSBmdW5jdGlvbihldmVudClcbntcbiAgICB2YXIgcG9zID0gZXZlbnQuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMpXG5cbiAgICBpZih0aGlzLl92aWV3RGVidWcpXG4gICAge1xuICAgICAgICB0aGlzLl92aWV3RGVidWdYU3BlZWQgPSAtKHBvcy54IC0gKENvbW1vbi5TVEFHRV9XSURUSC8yKSkvNTA7XG4gICAgICAgIHRoaXMuX3ZpZXdEZWJ1Z1lTcGVlZCA9IC0ocG9zLnkgLSAoQ29tbW9uLlNUQUdFX0hFSUdIVC8yKSkvNTA7XG4gICAgfVxufVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpXG57XG4gICAgaWYodGhpcy5fdmlld0RlYnVnKVxuICAgIHtcbiAgICAgICAgdGhpcy5fdmlld0RlYnVnWFNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5fdmlld0RlYnVnWVNwZWVkID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLnN3aXRjaFJhaWwpXG4gICAge1xuICAgICAgICBpZih0aGlzLnN3aXRjaFJhaWwuY3ljbGVTd2l0Y2hTdGF0ZXMoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfanVuY3Rpb25fcHJlc3NfMDVcIik7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRBcnJvdy5idXJzdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRW5lbWllcygpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX2RpYWxvZ3VlQm94LmFjdGl2ZSAmJiAhdGhpcy5fZGlhbG9ndWVCb3guaWdub3JlQ2xpY2spXG4gICAge1xuICAgICAgICB0aGlzLl9kaWFsb2d1ZUJveC5kZWFjdGl2YXRlKCk7XG4gICAgfVxufVxuXG5HYW1lU2NyZWVuLnByb3RvdHlwZS5vblBhdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcbiAgICB0aGlzLnNpZ25hbHMucGF1c2VDbGlja2VkLmRpc3BhdGNoKCk7XG59XG5cbkdhbWVTY3JlZW4ucHJvdG90eXBlLm9uRGlhbG9ndWVCb3hEZWFjdGl2YXRlZCA9IGZ1bmN0aW9uKClcbntcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fYXZhdGFycy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMuX2F2YXRhcnNbaV0uYnVpbGRTcGVlZChDb21tb24ubGV2ZWxEYXRhLmxldmVsc1t0aGlzLl9sZXZlbF0uc3BlZWQsIC41KTtcbiAgICB9XG5cbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcInNmeF9zdGVhbV93aGlzdGxlX3N0YXJ0XzAwXCIpO1xuXG4gICAgdGhpcy5fY29udmV5b3JMb29wU291bmQgPSBcInNmeF9jb252ZXlvcl9sb29wXCIgKyAoNStNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKTtcbiAgICB0aGlzLl9yZXN1bWVMb29wcygpO1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX3dvcmxkU2NhbGVyLnNjYWxlKTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX3dvcmxkU2NhbGVyLnNjYWxlLCAxLCB7eDoxLCB5OjEsIGVhc2U6U2luZS5lYXNlSW5PdXR9KSk7XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsIlxudmFyIENvbW1vbiAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFNpbXBsZVNjcmVlbiAgICAgICAgPSByZXF1aXJlKFwiLi9TaW1wbGVTY3JlZW5cIik7XG52YXIgU21hbGxCdXR0b24gICAgICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL1NtYWxsQnV0dG9uXCIpO1xudmFyIExldmVsU2VsZWN0QnV0dG9uICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9MZXZlbFNlbGVjdEJ1dHRvblwiKTtcbnZhciBTdGFyRmllbGQgICAgICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU3RhckZpZWxkXCIpO1xudmFyIEVtaXR0ZXIgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9FbWl0dGVyXCIpO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExldmVsU2VsZWN0U2NyZWVuKClcbntcbiAgICB0aGlzLl9iYWNrQnV0dG9uICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fc3RhckZpZWxkcyAgICAgICAgPSBudWxsO1xuICAgIHRoaXMuX2xlZnRFbWl0dGVyICAgICAgID0gbnVsbDtcbiAgICB0aGlzLl9yaWdodEVtaXR0ZXIgICAgICA9IG51bGw7XG5cbiAgICBTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWxTZWxlY3RTY3JlZW47XG5MZXZlbFNlbGVjdFNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuTGV2ZWxTZWxlY3RTY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGV2ZWxTZWxlY3RTY3JlZW47XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuTGV2ZWxTZWxlY3RTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgY29uc29sZS5sb2coXCJTUExBU0ggSU5JVElBTElaRURcIik7XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cbiAgICBDb21tb24ubGV2ZWxEYXRhLnByZXBhcmVEYXRhKCk7XG5cbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJsZXZlbHNlbGVjdF9iZ1wiKSk7XG4gICAgYmcuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIGJnLnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xuICAgIGJnLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUIC8gMjtcbiAgICB0aGlzLmFkZENoaWxkKGJnKTtcblxuICAgIHZhciBzdGFydFggPSAoQ29tbW9uLlNUQUdFX1dJRFRILzIpLShiZy53aWR0aC8yKTtcbiAgICB2YXIgc3RhckZpZWxkcyA9IFtcbiAgICAgICAge3g6c3RhcnRYLCB5OjAsIHdpZHRoOjQ2MCwgaGVpZ2h0OjMzNX0sXG4gICAgICAgIHt4OnN0YXJ0WCArIDQ2MCwgeTowLCB3aWR0aDo3MDAsIGhlaWdodDo2MH0sXG4gICAgICAgIHt4OnN0YXJ0WCArIDExNjAsIHk6MCwgd2lkdGg6NDY1LCBoZWlnaHQ6MzQwfSxcbiAgICAgICAge3g6c3RhcnRYICsgMzkwLCB5OjMzNSwgd2lkdGg6NjAsIGhlaWdodDoyMDB9LFxuICAgICAgICB7eDpzdGFydFggKyAxMTYwLCB5OjM0MCwgd2lkdGg6MzAwLCBoZWlnaHQ6MTYwfSxcbiAgICAgICAge3g6c3RhcnRYICsgMTE2MCwgeTo1MDAsIHdpZHRoOjE1NSwgaGVpZ2h0OjExMH0sXG4gICAgICAgIHt4OnN0YXJ0WCArIDYwMCwgeTo2MCwgd2lkdGg6MTY1LCBoZWlnaHQ6MTEwfSxcbiAgICAgICAge3g6c3RhcnRYICsgODUwLCB5OjYwLCB3aWR0aDoxNjUsIGhlaWdodDoxMTB9LFxuICAgICAgICB7eDpzdGFydFggKyA2MjUsIHk6MjEwLCB3aWR0aDoxMzUsIGhlaWdodDoxNTB9LFxuICAgICAgICB7eDpzdGFydFggKyA4OTAsIHk6MjEwLCB3aWR0aDoxMzUsIGhlaWdodDoxNTB9LFxuICAgICAgICB7eDpzdGFydFggKyA2NTUsIHk6NDEwLCB3aWR0aDo5MCwgaGVpZ2h0OjE1MH0sXG4gICAgICAgIHt4OnN0YXJ0WCArIDkwMCwgeTo0MTAsIHdpZHRoOjcwLCBoZWlnaHQ6MTUwfSxcbiAgICBdO1xuXG4gICAgdGhpcy5fc3RhckZpZWxkcyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdGFyRmllbGRzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHN0YXJGaWVsZCA9IG5ldyBTdGFyRmllbGQoc3RhckZpZWxkc1tpXS53aWR0aCwgc3RhckZpZWxkc1tpXS5oZWlnaHQpO1xuICAgICAgICBzdGFyRmllbGQueCA9IHN0YXJGaWVsZHNbaV0ueDtcbiAgICAgICAgc3RhckZpZWxkLnkgPSBzdGFyRmllbGRzW2ldLnk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc3RhckZpZWxkKTtcbiAgICAgICAgdGhpcy5fc3RhckZpZWxkcy5wdXNoKHN0YXJGaWVsZCk7XG4gICAgfVxuXG4gICAgdmFyIGVtaXR0ZXJIb2xkZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICBlbWl0dGVySG9sZGVyLnggPSAoQ29tbW9uLlNUQUdFX1dJRFRILzIpO1xuICAgIGVtaXR0ZXJIb2xkZXIueSA9IENvbW1vbi5TVEFHRV9IRUlHSFQgLSAxNDc7XG4gICAgdGhpcy5hZGRDaGlsZChlbWl0dGVySG9sZGVyKTtcblxuICAgIHRoaXMuX2xlZnRFbWl0dGVyID0gRW1pdHRlci5hZGQoZW1pdHRlckhvbGRlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJwYXJ0aWNsZV9tZW51X3N0ZWFtXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDTEVfZW1pdHRlcl9tZW51X3N0ZWFtXzAwLCAtNDQwLCA0MCk7XG5cbiAgICB0aGlzLl9yaWdodEVtaXR0ZXIgPSBFbWl0dGVyLmFkZChlbWl0dGVySG9sZGVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInBhcnRpY2xlX21lbnVfc3RlYW1cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVJUSUNMRV9lbWl0dGVyX21lbnVfc3RlYW1fMDAsIDQxMCwgNDApO1xuXG4gICAgdmFyIGxlZnRQaXBlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdzdGVhbS1waXBlLWxlZnQnKSk7XG4gICAgbGVmdFBpcGUueCA9IChDb21tb24uU1RBR0VfV0lEVEgvMikgLSA0ODY7XG4gICAgbGVmdFBpcGUueSA9IGVtaXR0ZXJIb2xkZXIueSAtIDE2O1xuICAgIHRoaXMuYWRkQ2hpbGQobGVmdFBpcGUpO1xuXG4gICAgdmFyIHJpZ2h0UGlwZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnc3RlYW0tcGlwZS1yaWdodCcpKTtcbiAgICByaWdodFBpcGUueCA9IChDb21tb24uU1RBR0VfV0lEVEgvMikgKyAzNjA7XG4gICAgcmlnaHRQaXBlLnkgPSBlbWl0dGVySG9sZGVyLnk7XG4gICAgdGhpcy5hZGRDaGlsZChyaWdodFBpcGUpO1xuXG4gICAgZm9yKHZhciByb3cgPSAwOyByb3cgPCAzOyByb3crKylcbiAgICB7XG4gICAgICAgIGZvcih2YXIgY29sID0gMDsgY29sIDwgMzsgY29sKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBudW1iZXIgPSAocm93ICogMykgKyAoY29sKzEpO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gXCJkaXNhYmxlZFwiO1xuXG4gICAgICAgICAgICBpZihDb21tb24uc2F2ZWREYXRhLmxldmVsVW5sb2Nrc1tudW1iZXJdLnVubG9ja2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKENvbW1vbi5zYXZlZERhdGEubGV2ZWxVbmxvY2tzW251bWJlcl0uY29tcGxldGVkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBcInZpc2l0ZWRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBcImFjdGl2ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IG5ldyBMZXZlbFNlbGVjdEJ1dHRvbihudW1iZXIudG9TdHJpbmcoKSwgc3RhdGUsIENvbW1vbi5zYXZlZERhdGEubGV2ZWxVbmxvY2tzW251bWJlcl0uc3RhcnMpO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0gbnVtYmVyO1xuICAgICAgICAgICAgYnV0dG9uLnggPSAoQ29tbW9uLlNUQUdFX1dJRFRIIC8gMikgLSAyNTUgKyAocm93ICogMykgKyAoY29sKjI1NSk7XG4gICAgICAgICAgICBidXR0b24ueSA9IChDb21tb24uU1RBR0VfSEVJR0hUIC8gMikgLSAyMzAgKyAoMjA1ICogcm93KTtcbiAgICAgICAgICAgIGJ1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uU3RhcnRDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgICAgIGlmKHN0YXRlID09IFwiZGlzYWJsZWRcIilcbiAgICAgICAgICAgICAgICBidXR0b24uZG93blNvdW5kTmFtZSA9IFwic2Z4X2p1bmN0aW9uX3ByZXNzXzAwXCI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYnV0dG9uLmRvd25Tb3VuZE5hbWUgPSBcInNmeF9idG5fcHJlc3NfcGxheV8wMFwiO1xuICAgICAgICAgICAgYnV0dG9uLm92ZXJTb3VuZE5hbWUgPSBcInNmeF91aV9uZW9uX3JvbGxvdmVyXzAzXCI7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCAuNSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidXR0b24uZmxhc2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9iYWNrQnV0dG9uID0gbmV3IFNtYWxsQnV0dG9uKFwiaWNvbl9ob21lXCIpO1xuICAgIHRoaXMuX2JhY2tCdXR0b24ueSA9IHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbjtcbiAgICB0aGlzLl9iYWNrQnV0dG9uLnNpZ25hbHMuY2xpY2suYWRkKHRoaXMub25CYWNrQ2xpY2tlZCwgdGhpcyk7XG4gICAgdGhpcy5fYmFja0J1dHRvbi5kb3duU291bmROYW1lID0gXCJzZnhfYnRuX3ByZXNzX2Jja18wMFwiO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fYmFja0J1dHRvbik7XG5cbiAgICB0aGlzLl9hZGRNdXRlQnV0dG9uKCk7XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE11c2ljUGxheS5kaXNwYXRjaCgnbXVzaWNfbGV2ZWxzbG9vcF8wMCcpO1xufTtcblxuTGV2ZWxTZWxlY3RTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YXJGaWVsZHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLl9zdGFyRmllbGRzW2ldLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBFbWl0dGVyLmRlc3Ryb3kodGhpcy5fbGVmdEVtaXR0ZXIpO1xuICAgIEVtaXR0ZXIuZGVzdHJveSh0aGlzLl9yaWdodEVtaXR0ZXIpO1xufTtcblxuLyoqXG4gKi9cbkxldmVsU2VsZWN0U2NyZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXG57XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICovXG5MZXZlbFNlbGVjdFNjcmVlbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLl9iYWNrQnV0dG9uLnggPSB0aGlzLl9nZXRGaXJzdEJ1dHRvblBvc2l0aW9uTGVmdCgpO1xuICAgIHRoaXMuX211dGVCdXR0b24ueCA9IHRoaXMuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25SaWdodCgpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuTGV2ZWxTZWxlY3RTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVJbiA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIFxuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuTGV2ZWxTZWxlY3RTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbCh0aGlzKTtcbn07XG5cblxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuTGV2ZWxTZWxlY3RTY3JlZW4ucHJvdG90eXBlLm9uU3RhcnRDbGlja2VkID0gZnVuY3Rpb24oYnV0dG9uKVxue1xuICAgIGlmKCFidXR0b24uZGlzYWJsZWQpXG4gICAge1xuICAgICAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCh0cnVlLCBidXR0b24uaWQpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaChmYWxzZSwgYnV0dG9uLmlkKTtcbiAgICB9XG59XG5cbkxldmVsU2VsZWN0U2NyZWVuLnByb3RvdHlwZS5vbkJhY2tDbGlja2VkID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbi5kaXNwYXRjaCgpO1xufVxuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUy9TRVRURVJTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCIvKipcbiAqICBQcmVsb2FkZXJcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNS8wNC8yMDE1LlxuICpcbiAqL1xuXG52YXIgU2ltcGxlU2NyZWVuICAgICAgICA9IHJlcXVpcmUoXCIuL1NpbXBsZVNjcmVlblwiKTtcblxudmFyIENvbW1vbiAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vQ29tbW9uXCIpO1xudmFyIFRleHRJdGVtICAgICAgICAgICAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9UZXh0SXRlbVwiKTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlNUUlVDVE9SXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQcmVsb2FkZXIoKSB7XG4gICAgXG4gICAgLyoqXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvYWRlZFBlcmNlbnRhZ2UgICA9IDAuMDtcblxuICAgIHRoaXMuX2ZvbnRzICAgICAgICAgICAgID0gbnVsbDtcbiAgICB0aGlzLl9oaWRkZW5UZXh0ICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fdG90YWxGb250V2FpdFRpbWUgPSAwO1xuICAgIHRoaXMuZm9udExvYWRlZCAgICAgICAgID0gZmFsc2U7XG5cbiAgICB0aGlzLl9zdGFyQmFycyAgICAgICAgICA9IG51bGw7XG5cbiAgICBTaW1wbGVTY3JlZW4uY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuc2lnbmFscy5mb250TG9hZGVkID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFByZWxvYWRlcjtcblByZWxvYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuUHJlbG9hZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFByZWxvYWRlcjtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBVQkxJQyBNRVRIT0RTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqL1xuUHJlbG9hZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKVxue1xuICAgIGNvbnNvbGUubG9nKFwiUFJFTE9BREVSIElOSVRJQUxJWkVEXCIpO1xuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5sb2FkZWRQZXJjZW50YWdlID0gMC4wO1xuXG4gICAgdmFyIGJnID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdsb2FkaW5nX2JnJykpO1xuICAgIGJnLnggPSBDb21tb24uU1RBR0VfV0lEVEggLyAyO1xuICAgIGJnLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUIC8gMjtcbiAgICBiZy5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5hZGRDaGlsZChiZyk7XG5cbiAgICB0aGlzLl9mb250cyA9IFt7Zm9udDpcIjMwcHggcGxhY2FyZF9tdGNvbmRlbnNlZF9ib2xkXCJ9LCB7Zm9udDpcIjMwcHggbWFuZGFsaXJlZ3VsYXJcIn1dO1xuXG4gICAgdGhpcy5faGlkZGVuVGV4dDEgPSBuZXcgVGV4dEl0ZW0oXCJMT0FESU5HXCIsIG51bGwsIHRoaXMuX2ZvbnRzWzBdKTtcbiAgICB0aGlzLl9oaWRkZW5UZXh0MiA9IG5ldyBUZXh0SXRlbShcIkxPQURJTkdcIiwgbnVsbCwgdGhpcy5fZm9udHNbMV0pO1xuICAgIHRoaXMuY2hlY2tGb250TG9hZGVkKCk7XG5cbiAgICB2YXIgc3RhckJhckhvbGRlciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgIHN0YXJCYXJIb2xkZXIuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHN0YXJCYXJIb2xkZXIueCA9IENvbW1vbi5TVEFHRV9XSURUSCAvIDI7XG4gICAgc3RhckJhckhvbGRlci55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAvIDI7XG4gICAgdGhpcy5hZGRDaGlsZChzdGFyQmFySG9sZGVyKTtcblxuICAgIHRoaXMuX3N0YXJCYXJzID0gW107XG4gICAgdmFyIGJhcldpZHRoID0gMTY7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDI1OyBpKyspXG4gICAge1xuICAgICAgICB2YXIgYmFyID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdiYXJfc3RpY2tfb2ZmX3ByZWxvYWRlcicpKTtcbiAgICAgICAgYmFyLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgYmFyLnggPSAtKChiYXJXaWR0aCoyNSkvMikgKyAoYmFyV2lkdGgqaSkgLSAoYmFyV2lkdGgvNCk7XG4gICAgICAgIHRoaXMuX3N0YXJCYXJzLnB1c2goYmFyKTtcbiAgICAgICAgc3RhckJhckhvbGRlci5hZGRDaGlsZChiYXIpO1xuICAgIH1cblxufTtcblxuLyoqXG4gKi9cblByZWxvYWRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICovXG5QcmVsb2FkZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy54ID0gKHAzLlZpZXcud2lkdGggLSBDb21tb24uU1RBR0VfV0lEVEgpICogMC41O1xuICAgIHRoaXMueSA9IChwMy5WaWV3LmhlaWdodCAtIENvbW1vbi5TVEFHRV9IRUlHSFQpICogMC41O1xufTtcblxuLyoqXG4gKi9cblByZWxvYWRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkxPQURJTkc6IFwiICsgdGhpcy5sb2FkZWRQZXJjZW50YWdlKTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9zdGFyQmFycy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGlmKHRoaXMubG9hZGVkUGVyY2VudGFnZSA+PSBpKjQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJCYXJzW2ldLnRleHR1cmUgPSB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZSgnYmFyX3N0aWNrX29uX3ByZWxvYWRlcicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RhckJhcnNbaV0udGV4dHVyZSA9IHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKCdiYXJfc3RpY2tfb2ZmX3ByZWxvYWRlcicpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblByZWxvYWRlci5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKVxue1xuICAgIFNpbXBsZVNjcmVlbi5wcm90b3R5cGUuYW5pbWF0ZUluLmNhbGwoY2FsbGJhY2ssIHNjb3BlKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5QcmVsb2FkZXIucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbChjYWxsYmFjaywgc2NvcGUpO1xuXG4gICAgdmFyIHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KHtcbiAgICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogc2NvcGVcbiAgICB9KTtcbiAgICB0aGlzLl90d2VlbnMucHVzaCh0aW1lbGluZSk7XG59O1xuXG5QcmVsb2FkZXIucHJvdG90eXBlLmNoZWNrRm9udExvYWRlZCA9IGZ1bmN0aW9uKClcbntcbiAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB2YXIgdGV4dDEgPSBuZXcgVGV4dEl0ZW0oXCJMT0FESU5HXCIsIHRoaXMuX2ZvbnRzWzBdKTtcbiAgICAgICAgdmFyIHRleHQyID0gbmV3IFRleHRJdGVtKFwiTE9BRElOR1wiLCB0aGlzLl9mb250c1sxXSk7XG4gICAgICAgIGlmKCh0ZXh0MS53aWR0aCAhPSB0aGlzLl9oaWRkZW5UZXh0MS53aWR0aCB8fCB0ZXh0MS5oZWlnaHQgIT0gdGhpcy5faGlkZGVuVGV4dDEuaGVpZ2h0KSAmJiBcbiAgICAgICAgICAgKHRleHQyLndpZHRoICE9IHRoaXMuX2hpZGRlblRleHQyLndpZHRoIHx8IHRleHQyLmhlaWdodCAhPSB0aGlzLl9oaWRkZW5UZXh0Mi5oZWlnaHQpIClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zaWduYWxzLmZvbnRMb2FkZWQuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgIHRoaXMuZm9udExvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl90b3RhbEZvbnRXYWl0VGltZSArPSAuNTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLl90b3RhbEZvbnRXYWl0VGltZSA+PSA0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFscy5mb250TG9hZGVkLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb250TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9udExvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LCAuNSwgdGhpcyk7XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQUklWQVRFIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHRVRURVJTL1NFVFRFUlNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiIsIlxudmFyIENvbW1vbiAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcbnZhciBTY2VuZSAgICAgICA9IHJlcXVpcmUoXCIuLi9saWIvU2NlbmVcIik7XG52YXIgTXV0ZUJ1dHRvbiAgPSByZXF1aXJlKFwiLi4vZ2VuZXJhbC9NdXRlQnV0dG9uXCIpO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OU1RSVUNUT1Jcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNpbXBsZVNjcmVlbigpIHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzaWduYWxzLlNpZ25hbH1cbiAgICAgKi9cbiAgICB0aGlzLnNpZ25hbHMgPSB7fTtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbiA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRQcmV2aW91c1NjcmVlbiA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5yZXF1ZXN0ZWRNdXNpY1BsYXkgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTXVzaWNTdG9wID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7cDMuQXNzZXRNYW5hZ2VyfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QXJyYXkuPFR3ZWVuTWF4Pn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fdHdlZW5zID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlBvaW50fVxuICAgICAqL1xuICAgIHRoaXMuX2NlbnRyZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2xlZnRFZGdlID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmlnaHRFZGdlID0gMDtcblxuICAgIHRoaXMuX2d1aUJ1dHRvblRvcE1hcmdpbiA9IDEwMDtcblxuICAgIHRoaXMuX211dGVCdXR0b24gPSBudWxsO1xuXG4gICAgcDMuU2NyZWVuLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBsZVNjcmVlbjtcblNpbXBsZVNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNjZW5lLnByb3RvdHlwZSk7XG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2ltcGxlU2NyZWVuO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90d2VlbnMgPSBbXTtcbiAgICB0aGlzLl9jZW50cmUgPSBuZXcgUElYSS5Qb2ludChDb21tb24uU1RBR0VfV0lEVEgvMiwgQ29tbW9uLlNUQUdFX0hFSUdIVC8yKTtcbn07XG5cbi8qKlxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwb3NlKCk7XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZFByZXZpb3VzU2NyZWVuLmRpc3Bvc2UoKTtcblxuICAgIHZhciB0d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3R3ZWVucy5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgdHdlZW4gPSB0aGlzLl90d2VlbnNbaV07XG4gICAgICAgIGlmICh0d2Vlbikge1xuICAgICAgICAgICAgdHdlZW4ua2lsbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3R3ZWVucy5sZW5ndGggPSAwO1xuXG4gICAgY29uc29sZS5sb2coXCJzY3JlZW4gZGlzcG9zZWRcIik7XG59O1xuXG4vKipcbiAqL1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICB0aGlzLnggPSAocDMuVmlldy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG5cbiAgICB0aGlzLl9yaWdodEVkZ2UgPSB0aGlzLl9jZW50cmUueCArIChwMy5WaWV3LndpZHRoLzIpO1xuICAgIHRoaXMuX2xlZnRFZGdlID0gdGhpcy5fY2VudHJlLnggLSAocDMuVmlldy53aWR0aC8yKTtcbn07XG5cbi8qKlxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgIH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBzY29wZSA9IHNjb3BlIHx8IHdpbmRvdztcbn07XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0ID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiAoQ29tbW9uLlNUQUdFX1dJRFRIICsgcDMuVmlldy53aWR0aCkgKiAwLjUgLSAxMDAuMDtcbn1cblxuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5fZ2V0U2Vjb25kQnV0dG9uUG9zaXRpb25SaWdodCA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gKENvbW1vbi5TVEFHRV9XSURUSCArIHAzLlZpZXcud2lkdGgpICogMC41IC0gMjEwLjA7XG59XG5cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUuX2dldEZpcnN0QnV0dG9uUG9zaXRpb25MZWZ0ID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiAoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUgKyAxMDAuMDtcbn1cblxuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5fZ2V0U2Vjb25kQnV0dG9uUG9zaXRpb25MZWZ0ID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiAoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuVmlldy53aWR0aCkgKiAwLjUgKyAyMTAuMDtcbn1cblxuXG5TaW1wbGVTY3JlZW4ucHJvdG90eXBlLl9hZGRNdXRlQnV0dG9uID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuX211dGVCdXR0b24gPSBuZXcgcDMuTXV0ZUJ1dHRvbih0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInNtYWxsX2J1dHRvbl9kZWZcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic21hbGxfYnV0dG9uX292ZXJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic21hbGxfYnV0dG9uX3ByZXNzXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImljb25fc291bmRfb25cIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiaWNvbl9zb3VuZF9vZmZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgIHRoaXMuX211dGVCdXR0b24uaWQgPSBcIm11dGVcIjtcbiAgICB0aGlzLl9tdXRlQnV0dG9uLnkgPSB0aGlzLl9ndWlCdXR0b25Ub3BNYXJnaW47XG4gICAgdGhpcy5fbXV0ZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcbiAgICB0aGlzLl9tdXRlQnV0dG9uLnNpZ25hbHMuZG93bi5hZGQodGhpcy5vbk11dGUsIHRoaXMpO1xuICAgIHRoaXMuX211dGVCdXR0b24uYXVkaW8gPSBDb21tb24uYXVkaW9NYW5hZ2VyO1xuICAgIHRoaXMuX211dGVCdXR0b24uZG93blNvdW5kTmFtZSA9IFwic2Z4X2J0bl9wcmVzc19md2RfMDBcIjsgXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9tdXRlQnV0dG9uKTtcbn1cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZFTlRTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEBwYXJhbSB7IXAzLkJ1dHRvbn0gYnV0dG9uXG4gKi9cblNpbXBsZVNjcmVlbi5wcm90b3R5cGUub25CdXR0b25DbGlja2VkUHJldmlvdXMgPSBmdW5jdGlvbihidXR0b24pIHtcblxufTtcblxuU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5vbk11dGUgPSBmdW5jdGlvbigpXG57XG5cbn07XG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdFVFRFUlMvU0VUVEVSU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIiwiXG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4uL0NvbW1vblwiKTtcbnZhciBTaW1wbGVTY3JlZW4gICAgPSByZXF1aXJlKFwiLi9TaW1wbGVTY3JlZW5cIik7XG52YXIgTGFyZ2VCdXR0b24gICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvTGFyZ2VCdXR0b25cIik7XG52YXIgVGV4dEl0ZW0gICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvVGV4dEl0ZW1cIik7XG52YXIgU3RhckZpZWxkICAgICAgID0gcmVxdWlyZShcIi4uL2dlbmVyYWwvU3RhckZpZWxkXCIpO1xudmFyIEVtaXR0ZXIgICAgICAgICA9IHJlcXVpcmUoXCIuLi9nZW5lcmFsL0VtaXR0ZXJcIik7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05TVFJVQ1RPUlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3BsYXNoU2NyZWVuKClcbntcbiAgICB0aGlzLl9nYW1lVGl0bGUgICAgID0gbnVsbDtcbiAgICB0aGlzLl9sYXVuZHJ5VGl0bGUgID0gbnVsbDtcbiAgICB0aGlzLl9wbGF5QnV0dG9uICAgID0gbnVsbDtcbiAgICB0aGlzLl9zdGFyRmllbGRzICAgID0gbnVsbDtcbiAgICB0aGlzLl9lbWl0dGVyICAgICAgID0gbnVsbDtcblxuICAgIHRoaXMuX2NoYXJhY3RlcnMgICAgPSBudWxsO1xuXG4gICAgU2ltcGxlU2NyZWVuLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNwbGFzaFNjcmVlbjtcblNwbGFzaFNjcmVlbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZVNjcmVlbi5wcm90b3R5cGUpO1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwbGFzaFNjcmVlbjtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFVCTElDIE1FVEhPRFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgY29uc29sZS5sb2coXCJTUExBU0ggSU5JVElBTElaRURcIik7XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ21haW5tZW51X2JnJykpO1xuICAgIGJnLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICBiZy54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcbiAgICBiZy55ID0gQ29tbW9uLlNUQUdFX0hFSUdIVCAvIDI7XG4gICAgdGhpcy5hZGRDaGlsZChiZyk7XG5cbiAgICB2YXIgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2dhbWVfdGl0bGVfMScpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2dhbWVfdGl0bGVfMicpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoJ2dhbWVfdGl0bGVfMycpXSk7XG4gICAgdGhpcy5fZ2FtZVRpdGxlID0gbmV3IHAzLk1vdmllQ2xpcChzZXF1ZW5jZSk7XG4gICAgdGhpcy5fZ2FtZVRpdGxlLmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl9nYW1lVGl0bGUueCA9IChDb21tb24uU1RBR0VfV0lEVEggLyAyKSArIDUwO1xuICAgIHRoaXMuX2dhbWVUaXRsZS55ID0gKENvbW1vbi5TVEFHRV9IRUlHSFQgLyAyKSAtIDIwMDtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2dhbWVUaXRsZSk7XG5cbiAgICB0aGlzLl9nYW1lVGl0bGUuYW5pbWF0aW9uU3BlZWQgPSAyO1xuICAgIHRoaXMuX2dhbWVUaXRsZS5sb29waW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9nYW1lVGl0bGUuZ290b0FuZFBsYXkoMCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gRW1pdHRlci5hZGQoYmcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wicGFydGljbGVfbWVudV9zdGVhbVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0xFX2VtaXR0ZXJfbWVudV9zdGVhbV8wMCwgLTI2MCwgNDApO1xuXG4gICAgdGhpcy5fY2hhcmFjdGVycyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImdpcmxzXCIpKTtcbiAgICB0aGlzLl9jaGFyYWN0ZXJzLnggPSAoQ29tbW9uLlNUQUdFX1dJRFRILzIpLTE0MDtcbiAgICB0aGlzLl9jaGFyYWN0ZXJzLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fY2hhcmFjdGVycyk7XG5cbiAgICB0aGlzLl9wbGF5QnV0dG9uID0gbmV3IExhcmdlQnV0dG9uKFwiaWNvbl9wbGF5XCIpXG4gICAgdGhpcy5fcGxheUJ1dHRvbi54ID0gQ29tbW9uLlNUQUdFX1dJRFRIIC8gMjtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnkgPSBDb21tb24uU1RBR0VfSEVJR0hUIC0gMTIwO1xuICAgIHRoaXMuX3BsYXlCdXR0b24uc2lnbmFscy5jbGljay5hZGRPbmNlKHRoaXMub25TdGFydENsaWNrZWQsIHRoaXMpO1xuICAgIHRoaXMuX3BsYXlCdXR0b24uZG93blNvdW5kTmFtZSA9IFwic2Z4X2J0bl9wcmVzc19wbGF5XzAwXCI7IFxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcGxheUJ1dHRvbik7XG5cbiAgICAvKlxuICAgIHRoaXMuX2xhdW5kcnlUaXRsZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImxhdW5kcnlfdGl0bGVcIikpO1xuICAgIHRoaXMuX2xhdW5kcnlUaXRsZS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fbGF1bmRyeVRpdGxlLnggPSAoQ29tbW9uLlNUQUdFX1dJRFRIIC8gMikgLSAzODA7XG4gICAgdGhpcy5fbGF1bmRyeVRpdGxlLnkgPSAoQ29tbW9uLlNUQUdFX0hFSUdIVCAvIDIpICsgNTA7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sYXVuZHJ5VGl0bGUpOyovXG5cbiAgICB2YXIgc3RhcnRYID0gKENvbW1vbi5TVEFHRV9XSURUSC8yKS0oYmcud2lkdGgvMik7XG4gICAgdmFyIHN0YXJGaWVsZHMgPSBbXG4gICAgICAgIHt4OnN0YXJ0WCwgeTowLCB3aWR0aDoxMDAsIGhlaWdodDoxMTB9LFxuICAgICAgICB7eDpzdGFydFggKyAxMDAsIHk6MCwgd2lkdGg6NDAwLCBoZWlnaHQ6NTB9LFxuICAgICAgICB7eDpzdGFydFggKyA1MDAsIHk6MCwgd2lkdGg6MTE1LCBoZWlnaHQ6OTB9LFxuICAgICAgICB7eDpzdGFydFggKyAyNzAsIHk6NTAsIHdpZHRoOjMwLCBoZWlnaHQ6MTAwfSxcbiAgICAgICAge3g6c3RhcnRYICsgMjcwLCB5OjE1MCwgd2lkdGg6NjgsIGhlaWdodDo3OH0sXG4gICAgICAgIHt4OnN0YXJ0WCArIDYxNSwgeTowLCB3aWR0aDo4MCwgaGVpZ2h0OjQwfSxcbiAgICBdO1xuXG4gICAgdGhpcy5fc3RhckZpZWxkcyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdGFyRmllbGRzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHN0YXJGaWVsZCA9IG5ldyBTdGFyRmllbGQoc3RhckZpZWxkc1tpXS53aWR0aCwgc3RhckZpZWxkc1tpXS5oZWlnaHQpO1xuICAgICAgICBzdGFyRmllbGQueCA9IHN0YXJGaWVsZHNbaV0ueDtcbiAgICAgICAgc3RhckZpZWxkLnkgPSBzdGFyRmllbGRzW2ldLnk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc3RhckZpZWxkKTtcbiAgICAgICAgdGhpcy5fc3RhckZpZWxkcy5wdXNoKHN0YXJGaWVsZCk7XG4gICAgfVxuXG5cbiAgICB0aGlzLl9hZGRNdXRlQnV0dG9uKCk7XG4gICAgdGhpcy5zaWduYWxzLnJlcXVlc3RlZE11c2ljUGxheS5kaXNwYXRjaCgnbXVzaWNfbWFpbm1lbnVsb29wXzAwJyk7XG59O1xuXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpXG57XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YXJGaWVsZHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLl9zdGFyRmllbGRzW2ldLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgRW1pdHRlci5kZXN0cm95KHRoaXMuX2VtaXR0ZXIpO1xufVxuXG4vKipcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXG57XG4gICAgU2ltcGxlU2NyZWVuLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fbXV0ZUJ1dHRvbi54ID0gdGhpcy5fZ2V0Rmlyc3RCdXR0b25Qb3NpdGlvblJpZ2h0KCk7XG5cbiAgICB0aGlzLl9wbGF5QnV0dG9uLnggPSBNYXRoLm1pbigoQ29tbW9uLlNUQUdFX1dJRFRIIC8gMikgKyA0MTAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yaWdodEVkZ2UgLSAxMDApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19c2NvcGVcbiAqL1xuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVJbi5jYWxsKHRoaXMpO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9jaGFyYWN0ZXJzLCAuNSwge3k6KENvbW1vbi5TVEFHRV9IRUlHSFQvMiktMTQ1LCBlYXNlOkJhY2suZWFzZU91dH0pKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TcGxhc2hTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBcbiAgICBTaW1wbGVTY3JlZW4ucHJvdG90eXBlLmFuaW1hdGVPdXQuY2FsbCh0aGlzKTtcbn07XG5cblxuXG5cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSSVZBVEUgTUVUSE9EU1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVkVOVFNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuU3BsYXNoU2NyZWVuLnByb3RvdHlwZS5vblN0YXJ0Q2xpY2tlZCA9IGZ1bmN0aW9uKClcbntcbiAgICB0aGlzLnNpZ25hbHMucmVxdWVzdGVkTmV4dFNjcmVlbi5kaXNwYXRjaCgpO1xufVxuXG5cblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR0VUVEVSUy9TRVRURVJTXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4iLCJcclxucDMuVHJhY2tpbmdNb2R1bGVQbGF5ZG9tLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKGRhdGEpXHJcbntcclxuICAgIC8qXHJcblx0dmFyIHVybCAgICAgPSBcImh0dHBzOi8vYXBpLmRpc25leS5jb20vZGF0YXRlY2gvc2VydmVybG9nL3YxL2pzb25cIjtcclxuICAgIHZhciBwYXJhbXMgID0ge307XHJcbiAgICBwYXJhbXMuYXBwID0gdGhpcy5fYXBwO1xyXG4gICAgcGFyYW1zLnVzZXJfaWQgPSB0aGlzLl9icm93c2VySWQ7XHJcbiAgICBwYXJhbXMuYXBwX2xvY2FsZSA9IHRoaXMuX2FwcExvY2FsZTtcclxuICAgIHBhcmFtcy50cmFuc2FjdGlvbl9pZCA9IHRoaXMuX3RyYW5zYWN0aW9uSWQ7XHJcbiAgICBwYXJhbXMuYnJvd3Nlcl9pZCA9IHRoaXMuX2Jyb3dzZXJJZDtcclxuICAgIHBhcmFtcy5uZXR3b3JrID0gdGhpcy5fbmV0d29yaztcclxuICAgIHBhcmFtcy52aWV3X25ldHdvcmsgPSB0aGlzLl92aWV3TmV0d29yaztcclxuICAgIHBhcmFtcy50YWcgPSBkYXRhLnRhZztcclxuICAgIHBhcmFtcy5jb250ZXh0ID0gZGF0YS5jb250ZXh0O1xyXG4gICAgcGFyYW1zLmFjdGlvbiA9IGRhdGEuYWN0aW9uO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdUcmFja2luZzogJyArIGRhdGEudGFnICsgJywgJyArIGRhdGEuY29udGV4dCArICcsICcgKyBkYXRhLmFjdGlvbik7XHJcblxyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIHRoaXMuX2F1dGhvcml6YXRpb25JZCk7XHJcbiAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7Ki9cclxuXHJcbiAgICBpZih3aW5kb3cudHJhY2tHYW1lRXZlbnQpXHJcbiAgICAgICAgd2luZG93LnRyYWNrR2FtZUV2ZW50KHtcImFjdGlvblwiOmRhdGEuYWN0aW9uLCBcImFjdGlvbl9kZXRhaWxcIjpkYXRhLmNvbnRleHR9KTtcclxufTsiXX0=
