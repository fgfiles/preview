var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function MainMenu() {
        WONBATS.Screen.call(this);
    }

    MainMenu.prototype = Object.create(WONBATS.Screen.prototype);
    MainMenu.prototype.constructor = MainMenu;

    MainMenu.prototype.enter = function (name, levelNum) {
        WONBATS.Screen.prototype.enter.call(this, name);
        globalsignal.add(this.onGlobalSignal.bind(this));

        this.view = new WONBATS.MovieClip(mainmenu, "mainmenu");
        this.addWonbyClip(this.view, this.asset);

        this.view.getChildByName("title").gotoAndStop(game.config.LANGUAGE);

        this.addButton("playbtn", this.view.getChildByName("play_btn"), this.onPlay.bind(this), "mouseClick", "mouseOver");
        this.addButton("musicbtnon", this.view.getChildByName("music_btn").getChildByName("music_on"), this.onMusic.bind(this), "mouseClick", "mouseOver");
        this.addButton("musicbtnoff", this.view.getChildByName("music_btn").getChildByName("music_off"), this.onMusic.bind(this), "mouseClick", "mouseOver");
        this.addButton("creditsbtn", this.view.getChildByName("credits_btn"), this.onCredits.bind(this), "mouseClick", "mouseOver");

        var levelX = localStorage.getItem("level10");
        if (levelX && JSON.parse(levelX).unlock) {
            this.view.getChildByName("play_btn").getChildByName("plus").attribs.visible = true;
        } else {
            this.view.getChildByName("play_btn").getChildByName("plus").attribs.visible = false;
        }

        this.updateSoundButton();

        this.navigationKeys = {
            "13": {
                pressed: false,
                button: this.buttons["playbtn"]
            } //enter
        }

        this.enableInput(false);

        this.toCredits = false;

        WONBATS.soundManager.play("music_foreground");
        WONBATS.soundManager.play("music_background");
        WONBATS.soundManager.fadeTo("music_foreground", 0, 0.5);
        WONBATS.soundManager.fadeTo("music_background", 1, 0.5);



        if (levelNum) {
            this.view.gotoAndPlay("shortcut");
            
            WONBATS.soundManager.play("music_credits");
            WONBATS.soundManager.fadeTo("music_credits", 0, 1);
        }
    };

    MainMenu.prototype.onMusic = function (e) {
        WONBATS.soundManager.switchMute();
        this.updateSoundButton();
    };

    MainMenu.prototype.updateSoundButton = function () {
        var soundOn = this.view.getChildByName("music_btn").getChildByName("music_on");
        var soundOff = this.view.getChildByName("music_btn").getChildByName("music_off");
        if (WONBATS.soundManager.isMuted()) {
            soundOff.attribs.visible = true;
            soundOff.interactive = true;
            soundOn.interactive = false;
            soundOn.attribs.visible = false;
        } else {
            soundOff.interactive = false;
            soundOff.attribs.visible = false;
            soundOn.attribs.visible = true;
            soundOn.interactive = true;
        }
        localStorage.setItem("mute", JSON.stringify(WONBATS.soundManager.isMuted()));
    };

    MainMenu.prototype.onKeyDown = function (e) {
        WONBATS.Screen.prototype.onKeyDown.call(this, e);
        if (this.navigationKeys[e.keyCode] && !this.navigationKeys[e.keyCode].pressed) {
            this.navigationKeys[e.keyCode].pressed = true;
            this.navigationKeys[e.keyCode].button.target.mousedown.call(this.navigationKeys[e.keyCode].button);
            this.navigationKeys[e.keyCode].button.target.mouseup.call(this.navigationKeys[e.keyCode].button);
        }
    };

    MainMenu.prototype.onKeyUp = function (e) {
        WONBATS.Screen.prototype.onKeyUp.call(this, e);
        if (this.navigationKeys[e.keyCode] && this.navigationKeys[e.keyCode].pressed) {
            this.navigationKeys[e.keyCode].pressed = false;
        }
    };

    MainMenu.prototype.onPlay = function () {
        this.enableInput(false);
        this.view.gotoAndPlay("out");
    }

    MainMenu.prototype.onGlobalSignal = function (globalEvent, data) {
        switch (globalEvent) {
            case ge.MM_ENABLE:
                this.enableInput(true);
                break;
            case ge.MM_OUT:
                if (this.toCredits) {
                    this.transitionSignal.emit(this.name, "credits");
                } else {
                    var levelX = localStorage.getItem("level10");
                    if (levelX && JSON.parse(levelX).unlock) {
                        this.transitionSignal.emit(this.name, "exit", 10);
                    } else {
                        this.transitionSignal.emit(this.name, "exit", parseInt(localStorage.getItem("lastLevel")));
                    }
                }
                break;
            default:
                break;
        }
    };

    MainMenu.prototype.onCredits = function () {
        this.enableInput(false);
        this.view.gotoAndPlay("out");
        this.toCredits = true;
    };

    MainMenu.prototype.exit = function () {
        globalsignal.clear();

        WONBATS.Screen.prototype.exit.call(this, name);
    };

    game.screens.MainMenu = MainMenu;
}());
