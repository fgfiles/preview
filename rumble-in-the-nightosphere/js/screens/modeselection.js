var game = game || {};
game.screens = game.screens || {};

(function () {
    'use strict';

    function ModeSelection() {
        WONBATS.Screen.call(this);
    }

    ModeSelection.prototype = Object.create(WONBATS.Screen.prototype);
    ModeSelection.prototype.constructor = ModeSelection;

    ModeSelection.prototype.enter = function (name, lastLevel, backfromGame) {
        var i,
            view,
            levelName,
            levelButton,
            savedData;

        this.buttonsIndex = -1;
        this.currentButton = null;

        WONBATS.Screen.prototype.enter.call(this, name);
        this.view = new WONBATS.MovieClip(mainmenu, "mainmenu");
        this.addWonbyClip(this.view, this.asset);
        this.addButton("oneplayer", this.view.getChildByName("oneplayer"), this.onClickOnePlayer.bind(this), "btn_click", "btn_rollover");
        this.addButton("twoplayers", this.view.getChildByName("twoplayers"), this.onClickTwoPlayers.bind(this), "btn_click", "btn_rollover");
        this.addButton("credits", this.view.getChildByName("credits_btn"), this.onClickCredits.bind(this), "btn_click", "btn_rollover");
        this.mmButtons = ["oneplayer", "twoplayers"];

        this.addButton("back_btn", this.view.getChildByName("back_btn"), this.onBack.bind(this), "btn_click", "btn_rollover");
        this.addButton("musicbtnon", this.view.getChildByName("music_btn").getChildByName("music_on"), this.onMusic.bind(this), "btn_click", "btn_rollover");
        this.addButton("musicbtnoff", this.view.getChildByName("music_btn").getChildByName("music_off"), this.onMusic.bind(this), "btn_click", "btn_rollover");

        this.levelButtons = this.view.getChildByName("container_levels");
        this.lsButtons = [];

        for (i = 1; i < 16; i++) {
            levelName = "level_" + ("00" + i).slice(-2);
            levelButton = this.levelButtons.getChildByName(levelName);
            savedData = loadLevelData(i);

            if ((savedData && savedData.unlock) || isHackEnabled("unlock")) {
                this.addButton(levelName, levelButton, this.onClickLevelButton.bind(this, i), "btn_click", "btn_rollover");
                this.lsButtons.push(levelName);
            } else {
                levelButton.gotoAndStop("locked");
            }

            levelButton.getChildByName("number_txt").gotoAndStop(i - 1);
        }

        this.updateSoundButton();

        if (backfromGame) {
            this.view.gotoAndPlay("in_from_game");
            this.view.update(0);
        }

        globalsignal.add(this.onGlobalSignal.bind(this));

        this.isOnLevelSelection = false;
        this.view.getChildByName("title").getChildByName("title").gotoAndStop(game.config.LANGUAGE);
    };

    ModeSelection.prototype.onClickCredits = function () {
        this.enableInput(false);
        this.view.gotoAndPlay("gotocredits");
    };

    ModeSelection.prototype.onBack = function () {
        this.view.gotoAndPlay("down");
        this.enableInput(false);
        this.isOnLevelSelection = false;
    };

    ModeSelection.prototype.onMusic = function (e) {
        soundManager.switchMute();
        this.updateSoundButton();
    };

    ModeSelection.prototype.onBackKey = function () {
        if (this.isOnLevelSelection) {
            this.resetKeyButtons();
            this.onBack();
        }
    };

    ModeSelection.prototype.onMuteKey = function () {
        this.onMusic();
    };

    ModeSelection.prototype.onUpKey = function () {
        if (this.isOnLevelSelection) {
            this.onLeftKey(5);
        } else {
            this.onLeftKey();
        }
    };

    ModeSelection.prototype.onLeftKey = function (n) {
        var buttonsList = [];
        if (this.isOnLevelSelection) {
            buttonsList = this.lsButtons;
        } else {
            buttonsList = this.mmButtons;
        }

        if (this.buttonsIndex === -1) {
            this.buttonsIndex = 0;
        } else {
            this.currentButton.mouseout();
            this.buttonsIndex -= n || 1;
            if (this.buttonsIndex < 0) {
                this.buttonsIndex += buttonsList.length;
                this.buttonsIndex = this.buttonsIndex % buttonsList.length;
            }
        }

        this.currentButton = this.buttons[buttonsList[this.buttonsIndex]];
        this.currentButton.mouseover();
    };

    ModeSelection.prototype.onDownKey = function () {
        if (this.isOnLevelSelection) {
            this.onRightKey(5);
        } else {
            this.onRightKey();
        }
    };

    ModeSelection.prototype.onRightKey = function (n) {
        var buttonsList = [];
        if (this.isOnLevelSelection) {
            buttonsList = this.lsButtons;
        } else {
            buttonsList = this.mmButtons;
        }

        if (this.buttonsIndex === -1) {
            this.buttonsIndex = 0;
        } else {
            this.currentButton.mouseout();
            this.buttonsIndex += n || 1;
            if (this.buttonsIndex > buttonsList.length - 1) {
                this.buttonsIndex -= buttonsList.length;
                this.buttonsIndex = this.buttonsIndex % buttonsList.length;
            }
        }

        this.currentButton = this.buttons[buttonsList[this.buttonsIndex]];
        this.currentButton.mouseover();
    };

    ModeSelection.prototype.onAcceptKey = function () {
        if (this.currentButton) {
            this.currentButton.mousedown();
            this.resetKeyButtons();
        }
    };

    ModeSelection.prototype.resetKeyButtons = function () {
        if (this.currentButton) {
            this.currentButton.mouseout();
        }

        this.currentButton = null;
        this.buttonsIndex = -1;
    };

    ModeSelection.prototype.updateSoundButton = function () {
        var soundOn = this.view.getChildByName("music_btn").getChildByName("music_on");
        var soundOff = this.view.getChildByName("music_btn").getChildByName("music_off");
        if (soundManager.isMuted()) {
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
        localStorage.setItem("mute", JSON.stringify(soundManager.isMuted()));
    };

    ModeSelection.prototype.onClickLevelButton = function (levelNum) {
        this.view.gotoAndPlay("gotolevel");
        this.enableInput(false);
        this.levelSelected = levelNum;
        this.isOnLevelSelection = false;
    };

    ModeSelection.prototype.onClickOnePlayer = function (data) {
        this.enableInput(false);
        
        game.screens.Level.playerQty = 1;
        this.showLevels();
    };

    ModeSelection.prototype.onClickTwoPlayers = function (data) {
        this.enableInput(false);
        game.screens.Level.playerQty = 2;
        this.showLevels();
    };

    ModeSelection.prototype.onGlobalSignal = function (globalEvent, data) {
        switch (globalEvent) {
            case ge.LEVEL_SELECTED:
                
                if (this.levelSelected === 1 && game.BrowserDetect.browser !== "Explorer") {
                    soundManager.fadeTo("music_ingame01", 0, 1);
                    this.transitionSignal.emit(this.name, "intro", "1P_intro");
                } else {
                    this.transitionSignal.emit(this.name, "exit", this.levelSelected);
                }
                break;
            case ge.MM_READY:
                this.isOnLevelSelection = false;
                this.enableInput(true);
                break;
            case ge.LEVEL_SELECTION_IN:
                this.isOnLevelSelection = true;
                this.enableInput(true);
                break;
            case ge.LEVEL_SELECTION_OUT:
                this.enableInput(true);
                break;
            case ge.CREDITS:
                this.transitionSignal.emit(this.name, "credits");
            default:
                break;
        }
    };

    ModeSelection.prototype.showLevels = function () {
        this.view.gotoAndPlay("up");
    };

    ModeSelection.prototype.exit = function () {
        WONBATS.Screen.prototype.exit.call(this);
        globalsignal.clear();

        this.currentButton = null;
    };

    game.screens.ModeSelection = ModeSelection;
}());
