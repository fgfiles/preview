var game = game || {};
var images = images || {};
var ss = ss || {};
var jsons = jsons || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Preloader() {
        WONBATS.Screen.call(this);
    }

    Preloader.prototype = Object.create(WONBATS.Screen.prototype);
    Preloader.prototype.constructor = Preloader;

    Preloader.prototype.enter = function (name) {
        WONBATS.Screen.prototype.enter.call(this, name);

        globalsignal.add(this.onGlobalSignal.bind(this));

        this.totalFiles = 0;
        this.loadedFiles = 0;
        this.loader = PIXI.loader;

        this.loader.add("assets/loading-1.json");
        this.totalFiles = 0;
        this.pixiLoaderFiles = 0;
        this.loader.once("complete", this.loadingAtlasLoaded.bind(this));
        this.loader.load();

        this.updateProgress = true;

        this.targetFrame = 0;
        this.currentFrame = 0;
    };

    Preloader.prototype.loadingAtlasLoaded = function () {
        this.preloaderView = new WONBATS.MovieClip(loading, "loading");
        this.preloaderView.getChildByName("clock").getChildByName("txt").gotoAndStop(game.config.LANGUAGE);
        this.preloaderView.getChildByName("clock").gotoAndStop(0);
        this.asset.addChild(this.preloaderView);
        this.loadFile("assets/all-1.json");
        this.loadFile("assets/bg-1.json");
        this.loadFile("assets/ui.json");
        this.loadFile("assets/credits.json");
        this.loadFile("assets/level_selection.json");
        this.loadFile("assets/mainmenu.json");
        this.loadFile("assets/video/intro.mp4");

        this.totalFiles += game.config.sound.files.length;
        this.loader.on("progress", this.onProgress.bind(this)).once("complete", this.gameAtlasLoaded.bind(this));
        this.loader.load();

        this.versionText = new PIXI.Text(" v." + game.config.VERSION, {
            fontFamily: "Consolas",
            size: 30,
            align: "left",
            fill: '#5eeaeb'
        });
        this.versionText.x = game.config.GAME_WIDTH - this.versionText.width;
        this.versionText.y = game.config.GAME_HEIGHT - this.versionText.height;
        this.asset.addChild(this.versionText);
    };

    Preloader.prototype.gameAtlasLoaded = function () {
        this.loader.off("complete");
        this.loader.off("progress");
        this.loader.reset();
        WONBATS.soundManager.load(game.config.sound, this.onSoundLoaded.bind(this));
    };

    Preloader.prototype.onSoundLoaded = function () {
        this.loadedFiles += 1;
        
    };

    Preloader.prototype.loadFile = function (url) {
        this.loader.add(url);
        this.totalFiles += 1;
        this.pixiLoaderFiles += 1;
    };

    Preloader.prototype.onProgress = function (data) {
        var progress = data.progress % 100;
        progress = Math.round(this.pixiLoaderFiles * progress) / 100;
        this.loadedFiles = progress;
    };

    Preloader.prototype.update = function (dt) {
        WONBATS.Screen.prototype.update.call(this, dt);

        if (this.preloaderView) {
            this.preloaderView.update(dt);
        }

        if (this.updateProgress) {
            
            if (this.preloaderView) {
                this.targetFrame = Math.floor((this.loadedFiles / this.totalFiles) * 100);
                this.currentFrame = Math.min(this.currentFrame + dt * 30, this.targetFrame);

                this.preloaderView.getChildByName("clock").gotoAndStop(Math.floor(this.currentFrame));
            }

            if (this.loadedFiles === this.totalFiles && this.currentFrame === 100) {
                this.updateProgress = false;
                WONBATS.soundManager.mute(JSON.parse(localStorage.getItem("mute")));
                if (game.config.MUTE) {
                    WONBATS.soundManager.mute(game.config.MUTE);
                }
                this.preloaderView.gotoAndPlay("out");
            }
        }
    };

    Preloader.prototype.onGlobalSignal = function (emitter, message) {
        if (message === "exit") {
            if (game.BrowserDetect.browser === "Explorer") {
                this.transitionSignal.emit(this.name, "IEexit");
            } else {
                this.transitionSignal.emit(this.name, "exit");
            }
        }
    };

    Preloader.prototype.exit = function (name) {
        this.loader.reset();
        this.loader = null;
        globalsignal.clear();
        WONBATS.Screen.prototype.exit.call(this, name);
    };

    game.screens.Preloader = Preloader;
}());
