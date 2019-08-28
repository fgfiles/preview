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

        this.loader.add("assets/loading.json");
        this.totalFiles = 0;
        this.pixiLoaderFiles = 0;
        this.loader.once("complete", this.loadingAtlasLoaded.bind(this));
        this.loader.load();

        this.updateProgress = true;

        this.targetFrame = 0;
        this.currentFrame = 0;
    };

    Preloader.prototype.loadingAtlasLoaded = function () {
        this.totalFiles = 0;
        this.loadedFiles = 0;
        this.pixiLoaderFiles = 0;

        this.loader.reset();
        this.preloaderView = new WONBATS.MovieClip(loading, "loading");
        this.asset.addChild(this.preloaderView);
        this.loadFile("assets/levels.json");
        this.loadFile("assets/gameplay.json");
        this.loadFile("assets/background.json");
        this.loadFile("assets/screens.json");
        this.loadFile("assets/particles.json");

        this.loader.on("progress", this.onProgress.bind(this)).once("complete", this.viewAssetsLoaded.bind(this));
        this.loader.load();

        if (game.config.SHOW_VERSION) {
            this.versionText = new PIXI.Text(" v." + game.config.VERSION, {
                fontFamily: "Consolas",
                size: 5,
                align: "left",
                fill: '#2C0627'
            });
            this.versionText.x = game.config.GAME_WIDTH - this.versionText.width;
            this.versionText.y = game.config.GAME_HEIGHT - this.versionText.height;
            this.asset.addChild(this.versionText);
        } else {
            console.info("VERSION", game.config.VERSION, 'background: #222; color: #bada55');
        }

        this.totalFiles += game.config.sound.files.length;

        this.preloaderView.getChildByName("loading_txt").gotoAndStop(game.config.LANGUAGE);
        this.preloaderView.stop();
        this.preloaderView.update(0);
    };

    Preloader.prototype.viewAssetsLoaded = function () {
        this.loader.off("complete");
        this.loader.off("progress");
        if (game.config.sound.files.length > 0) {
            soundManager.load(game.config.sound, this.onSoundLoaded.bind(this));
        } else {
            this.onSoundLoaded();
        }
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
        
        var progress = (data.progress / 100) * this.pixiLoaderFiles;
        this.loadedFiles = Math.floor(progress);
        
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

                if (this.preloaderView.getChildByName("bar")) {
                    this.preloaderView.getChildByName("bar").gotoAndStop(Math.floor(this.currentFrame));
                }
            }

            if (this.loadedFiles === this.totalFiles && this.currentFrame === 100) {
                this.updateProgress = false;
                soundManager.mute(JSON.parse(localStorage.getItem("mute")));
                if (game.config.MUTE) {
                    soundManager.mute(game.config.MUTE);
                }
                this.preloaderView.gotoAndPlay("out");

            }
        }
    };

    Preloader.prototype.onGlobalSignal = function (emitter, message) {
        if (message === "exit") {
            this.transitionSignal.emit(this.name, "exit");
            soundManager.play("music_ingame01");
            soundManager.play("music_ingame02");
            soundManager.fadeTo("music_ingame02", 0, 0);
            soundManager.play("ambFire");
            soundManager.fadeTo("ambFire", 0, 0);
        }
    };

    Preloader.prototype.exit = function (name) {
        this.loader.reset();
        this.loader = null;
        globalsignal.clear();
        this.preloaderView.destroy(true);
        this.preloaderView = null;
        WONBATS.Screen.prototype.exit.call(this, name);
    };

    game.screens.Preloader = Preloader;
}());
