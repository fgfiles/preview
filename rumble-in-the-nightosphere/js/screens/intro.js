var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Intro() {
        WONBATS.Screen.call(this);
    }

    Intro.prototype = Object.create(WONBATS.Screen.prototype);
    Intro.prototype.constructor = Intro;

    Intro.prototype.enter = function (name, videoid) {
        WONBATS.Screen.prototype.enter.call(this, name);
        
        this.video = new PIXI.Sprite(PIXI.Texture.fromVideo("assets/video/" + videoid + ".mp4"));
        this.video.anchor.x = this.video.anchor.y = 0.5;
        this.video.x = game.config.GAME_WIDTH / 2;
        this.video.y = game.config.GAME_HEIGHT / 2;

        this.video.texture.baseTexture.source.muted = soundManager.isMuted(); //JSON.parse(localStorage.getItem("mute"));
        this.asset.addChild(this.video);
        this.ended = false;
        this.navigationKeys = {
            "13": {
                pressed: false
            } //enter
        };
        this.enableInput(false);
        this.video.texture.baseTexture.once("loaded", this.videoLoaded.bind(this));
        this.bg = new WONBATS.MovieClip(intro, "intro_bg");
        this.asset.addChild(this.bg);
    };

    Intro.prototype.videoLoaded = function () {
        this.enableInput(true);
        this.video.click = this.clickSkip.bind(this);
        this.video.interactive = true;

        this.video.width = game.config.GAME_WIDTH;
        this.video.scale.y = this.video.scale.x;
    };

    Intro.prototype.update = function (dt) {
        WONBATS.Screen.prototype.update.call(this, dt);
        this.bg.update(dt);
        if (!this.ended && this.video.texture.baseTexture.source.ended) {
            this.ended = true;
        }
        if (this.ended && game.screens.Level.playerQty === 1) {
            this.transitionSignal.emit(this.name, "exit", 1);
        } else if (this.ended && game.screens.Level.playerQty === 2 && this.name === "intro1P") {
            this.transitionSignal.emit(this.name, "exit", 1); // TODO Cuando tengamos la intro final las encadenamos.
        } else if (this.ended) {
            this.transitionSignal.emit(this.name, "exit", 1);
        }
    };

    Intro.prototype.onKeyDown = function (e) {
        WONBATS.Screen.prototype.onKeyDown.call(this, e);
        if (this.navigationKeys[e.keyCode] && !this.navigationKeys[e.keyCode].pressed) {
            this.navigationKeys[e.keyCode].pressed = true;
            this.clickSkip();
        }
    };

    Intro.prototype.clickSkip = function () {
        this.ended = true;
        this.enableInput(false);
    };

    Intro.prototype.exit = function () {
        this.video.texture.baseTexture.source.pause();
        this.video.interactive = false;
        this.video.click = null;
        this.video.destroy(true);
        this.bg.destroy();
        this.bg = null;
        this.navigationKeys = null;
        WONBATS.Screen.prototype.exit.call(this);
        this.video = null;
    };

    game.screens.Intro = Intro;
}());
