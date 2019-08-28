var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function Credits() {
        WONBATS.Screen.call(this);
    }

    Credits.prototype = Object.create(WONBATS.Screen.prototype);
    Credits.prototype.constructor = Credits;

    Credits.prototype.enter = function (name, ending) {
        WONBATS.Screen.prototype.enter.call(this, name);
        this.ended = false;
        this.view = new WONBATS.MovieClip(credits, "credits");

        this.ending = ending;

        if (!this.ending) {
            this.view.gotoAndPlay("shortcut");
            var logo = this.view.getChildByName("logo");
            logo.gotoAndStop("notfinished");
            if (localStorage.getItem("level10")) {
                
                logo.gotoAndStop("finished");
            }
        }
        this.view.click = this.clickSkip.bind(this);
        this.addWonbyClip(this.view, this.asset);
        this.navigationKeys = {
            "13": {
                pressed: false
            } //enter
        };

        WONBATS.soundManager.play("music_credits");
        WONBATS.soundManager.fade("music_credits", 0, 1.5, 3);

        WONBATS.soundManager.fadeTo("music_foreground", 0, 1);
        WONBATS.soundManager.fadeTo("music_background", 0, 1);

        globalsignal.add(this.onGlobalSignal.bind(this));
    };

    Credits.prototype.update = function (dt) {
        WONBATS.Screen.prototype.update.call(this, dt);
    };

    Credits.prototype.onKeyDown = function (e) {
        WONBATS.Screen.prototype.onKeyDown.call(this, e);
        if (this.navigationKeys[e.keyCode] && !this.navigationKeys[e.keyCode].pressed) {
            this.navigationKeys[e.keyCode].pressed = true;
            this.enableInput(false);
            this.view.gotoAndPlay("out");
            this.view.interactive = false;
            if (!this.ending) {
                var logo = this.view.getChildByName("logo");
                if (localStorage.getItem("level10")) {
                    logo.gotoAndStop("finished");
                }
            }
        }
    };

    Credits.prototype.clickSkip = function () {
        this.enableInput(false);
        this.view.interactive = false;
        this.view.gotoAndPlay("out");
        if (!this.ending) {
            var logo = this.view.getChildByName("logo");
            if (localStorage.getItem("level10")) {
                logo.gotoAndStop("finished");
            }
        }
    };

    Credits.prototype.onGlobalSignal = function (globalEvent, data) {
        switch (globalEvent) {
            case ge.C_OUT:
                this.transitionSignal.emit(this.name, "exit", 1);
                break;
            case ge.C_INPUT_OFF:
                this.view.interactive = false;
                this.enableInput(false);
                break;
            case ge.C_INPUT_ON:
                this.view.interactive = true;
                this.enableInput(true);
                break;
            default:
                break;
        }
    };

    Credits.prototype.exit = function () {
        this.view.click = null;
        this.view.destroy();
        this.view = null;
        this.navigationKeys = null;
        globalsignal.clear();
        WONBATS.Screen.prototype.exit.call(this, name);
    };

    game.screens.Credits = Credits;
}());
