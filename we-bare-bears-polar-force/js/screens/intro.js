var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Intro() {
        WONBATS.Screen.call(this);
    }

    Intro.prototype = Object.create(WONBATS.Screen.prototype);
    Intro.prototype.constructor = Intro;

    Intro.prototype.enter = function (name) {
        WONBATS.Screen.prototype.enter.call(this, name);
        this.video = new PIXI.Sprite(PIXI.Texture.fromVideo("assets/video/intro.mp4"));
        this.video.anchor.x = this.video.anchor.y = 0.5;
        this.video.x = game.config.GAME_WIDTH / 2;
        this.video.y = game.config.GAME_HEIGHT / 2;
        this.video.scale.x = this.video.scale.y = 2.1; //hack to avoid grey line
        this.video.click = this.clickSkip.bind(this);
        this.video.interactive = true;
        this.video.texture.baseTexture.source.muted = JSON.parse(localStorage.getItem("mute"));
        this.asset.addChild(this.video);
        this.ended = false;
        this.navigationKeys = {
            "13": {
                pressed: false
            } //enter
        };
        this.enableInput(true);
    };

    Intro.prototype.update = function (dt) {
        WONBATS.Screen.prototype.update.call(this, dt);
        if (!this.ended && this.video.texture.baseTexture.source.ended) {
            this.ended = true;
        }
        if (this.ended) {
            this.transitionSignal.emit(this.name, "exit");
        }
    };

    Intro.prototype.onKeyDown = function (e) {
        WONBATS.Screen.prototype.onKeyDown.call(this, e);
        if (this.navigationKeys[e.keyCode] && !this.navigationKeys[e.keyCode].pressed) {
            this.navigationKeys[e.keyCode].pressed = true;
            this.ended = true;
            this.enableInput(false);
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
        this.video.texture.destroy();
        this.navigationKeys = null;
        WONBATS.Screen.prototype.exit.call(this);
        this.video = null;
    };

    game.screens.Intro = Intro;
}());
