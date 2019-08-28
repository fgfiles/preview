var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function LevelSelection() {
        this.maxLevel = 10;
        WONBATS.Screen.call(this);
    }

    LevelSelection.prototype = Object.create(WONBATS.Screen.prototype);
    LevelSelection.prototype.constructor = LevelSelection;

    LevelSelection.prototype.enter = function (name, levelNum, newUnlock) {
        WONBATS.Screen.prototype.enter.call(this, name);
        globalsignal.add(this.onGlobalSignal.bind(this));

        this.view = new WONBATS.MovieClip(level_selection, "levelselection");
        this.addWonbyClip(this.view, this.asset);

        if (newUnlock) {
            this.view.gotoAndPlay("unlock");
        }

        this.view.getChildByName("lvl").getChildByName("txt").gotoAndStop(game.config.LANGUAGE);

        this.addButton("next", this.view.getChildByName("next"), this.onNext.bind(this), "mouseClick", "mouseOver");
        this.addButton("prev", this.view.getChildByName("prev"), this.onPrev.bind(this), "mouseClick", "mouseOver");
        this.addButton("play_btn", this.view.getChildByName("play_btn"), this.onPlay.bind(this), "mouseClick", "mouseOver");
        this.view.getChildByName("play_btn").attribs.visible = false;
        this.addButton("home_btn", this.view.getChildByName("home_btn"), this.onHome.bind(this), "mouseClick", "mouseOver");

        this.addButton("musicbtnon", this.view.getChildByName("music_btn").getChildByName("music_on"), this.onMusic.bind(this), "mouseClick", "mouseOver");
        this.addButton("musicbtnoff", this.view.getChildByName("music_btn").getChildByName("music_off"), this.onMusic.bind(this), "mouseClick", "mouseOver");

        this.updateSoundButton();

        this.navigationKeys = {
            "39": {
                pressed: false,
                button: this.buttons["next"]
            },
            "68": {
                pressed: false,
                button: this.buttons["next"]
            },
            "37": {
                pressed: false,
                button: this.buttons["prev"]
            },
            "65": {
                pressed: false,
                button: this.buttons["prev"]
            },
            "13": {
                pressed: false,
                button: this.buttons["play_btn"]
            } //enter
        }

        this.enableInput(false);
        this.currentLevel = levelNum || parseInt(localStorage.getItem("lastLevel")) || 1;
        this.updateCurrentLevel(this.currentLevel);

        WONBATS.soundManager.fadeTo("music_foreground", 0, 0.5);
        WONBATS.soundManager.fadeTo("music_background", 1, 0.5);

        this.exitEvent = "";
    };

    LevelSelection.prototype.onMusic = function (e) {
        WONBATS.soundManager.switchMute();
        this.updateSoundButton();
    };

    LevelSelection.prototype.updateSoundButton = function () {
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

    LevelSelection.prototype.onKeyDown = function (e) {
        WONBATS.Screen.prototype.onKeyDown.call(this, e);

        if (this.navigationKeys[e.keyCode] && !this.navigationKeys[e.keyCode].pressed) {
            this.navigationKeys[e.keyCode].pressed = true;
            this.navigationKeys[e.keyCode].button.target.mousedown.call(this.navigationKeys[e.keyCode].button);
            this.navigationKeys[e.keyCode].button.target.mouseup.call(this.navigationKeys[e.keyCode].button);

            this.onKeyUp(e);
        }
    };

    LevelSelection.prototype.onKeyUp = function (e) {
        WONBATS.Screen.prototype.onKeyUp.call(this, e);

        if (this.navigationKeys[e.keyCode] && this.navigationKeys[e.keyCode].pressed) {
            this.navigationKeys[e.keyCode].pressed = false;
        }
    };

    LevelSelection.prototype.showMonitor = function (num) {
        var ls = localStorage.getItem("level" + num);

        if (ls && JSON.parse(ls).unlock) {
            this.view.gotoAndPlay("unlocked");
        } else {
            this.view.gotoAndPlay("locked");
        }
    };

    LevelSelection.prototype.onNext = function () {
        this.enableInput(false);
        this.currentLevel = this.currentLevel + 1;
        if (this.currentLevel > this.maxLevel) {
            this.currentLevel = 1;
        }

        WONBATS.soundManager.play("monitorNoise1", true);
        this.showMonitor(this.currentLevel);
    };

    LevelSelection.prototype.onPrev = function () {
        this.enableInput(false);
        this.currentLevel = this.currentLevel - 1;
        if (this.currentLevel < 1) {
            this.currentLevel = this.maxLevel;
        }

        WONBATS.soundManager.play("monitorNoise1", true);
        this.showMonitor(this.currentLevel);
    };

    LevelSelection.prototype.onPlay = function () {
        if (!this.view.getChildByName("play_btn").attribs.visible) {
            return;
        }

        WONBATS.soundManager.play("monitorNoise2", true);
        this.enableInput(false);
        this.view.gotoAndPlay("out");
        this.exitEvent = "level";
    }

    LevelSelection.prototype.onHome = function () {
        if (!this.view.getChildByName("play_btn").attribs.visible) {
            return;
        }

        this.enableInput(false);
        this.view.gotoAndPlay("out");
        this.exitEvent = "mainmenu";
        WONBATS.soundManager.play("monitorNoise2", true);
    }

    LevelSelection.prototype.updateCurrentLevel = function (num) {
        this.view.getChildByName("lvl").getChildByName("num").gotoAndStop(num);
        var levelSavedData = localStorage.getItem("level" + num);
        var data = {
            stars: 0,
            score: 0,
            unlock: num === 1 ? true : false,
            noMiss: false
        }

        if (levelSavedData) {
            data = JSON.parse(levelSavedData);
        }

        if (num < 10) {
            this.view.getChildByName("lives").gotoAndStop(data.stars);
            this.view.getChildByName("lives").getChildByName("nomiss").gotoAndStop(data.noMiss ? "on" : "off");
        } else {
            this.view.getChildByName("lives").gotoAndStop(4);
            game.updateNumber(this.view.getChildByName("lives").getChildByName("hiscore_num"), data.score.toString().split(""));
        }

        var playEnabled = data.unlock;
        var url = window.location.href;
        var params = url.split('?');

        if (params[1] === "unlock") {
            playEnabled = true;
        }

        this.view.getChildByName("play_btn").attribs.visible = playEnabled;
        this.view.getChildByName("play_txt").gotoAndStop(game.config.LANGUAGE);
        this.view.getChildByName("nosignal_txt").gotoAndStop(game.config.LANGUAGE);
    };

    LevelSelection.prototype.onGlobalSignal = function (globalEvent, data) {
        switch (globalEvent) {
            case ge.LVL_IN_END:
                this.enableInput(true);
                break;
            case ge.LVL_NEXT_END:
                this.updateCurrentLevel(this.currentLevel);
                break;
            case ge.LVL_OUT_END:
                if (this.currentLevel > parseInt(localStorage.getItem("lastLevel"))) {
                    localStorage.setItem("lastLevel", this.currentLevel);
                }
                this.transitionSignal.emit(this.name, this.exitEvent, this.currentLevel);
                break;
            default:
                break;
        }
    };

    LevelSelection.prototype.exit = function () {

        globalsignal.clear();

        WONBATS.Screen.prototype.exit.call(this);
    };

    game.screens.LevelSelection = LevelSelection;
}());
