/**
 * Created by jonathan.kernick on 10/04/2017.
 */
SportsUI = {
    createDisplayText: function (text, style, type) {
        var textContainer = new PIXI.Container();
        var araSuffix = "_ar";
        if (COPY_DECK.currentLanguage.match("ar") === null) {
            araSuffix = "";
        }

        var fontBottom = (type) ? "fred_burger_shadow" + araSuffix : "zorb_ball_font_outline";
        var fontTop = (type) ? "fred_burger" + araSuffix : "zorb_ball_font";
        if (type) {
            textContainer.bottom = new PIXI.Text(text, {
                fontFamily: fontBottom,
                fontSize: style.size + "px ",
                padding: 10,
                align: style.align
            });
            textContainer.top = new PIXI.Text(text, {
                fontFamily: fontTop,
                fontSize: style.size + "px ",
                padding: 10,
                fill: style.fill || 0xFFFFFF,
                align: style.align
            });
            if (style.maxSize) {
                textContainer.top.width = Math.min(style.maxSize, textContainer.top.width);
                textContainer.top.scale.x = Math.min(1, textContainer.top.scale.x);
                textContainer.top.scale.y = textContainer.top.scale.x;
                textContainer.bottom.scale.x = textContainer.top.scale.x;
                textContainer.bottom.scale.y = textContainer.top.scale.x;
            }
            textContainer.top.y = textContainer.top.height * -0.5;
            textContainer.bottom.y = textContainer.top.y + (textContainer.top.height - textContainer.bottom.height) * 0.5;
        }
        else {
            textContainer.bottom = new PIXI.extras.BitmapText(text, {
                font: style.size + "px " + fontBottom,
                align: style.align
            });
            textContainer.top = new PIXI.extras.BitmapText(text, {
                font: style.size + "px " + fontTop,
                align: style.align
            });
            textContainer.top.tint = style.fill || 0xFFFFFF;
        }

        textContainer.addChild(textContainer.bottom);
        textContainer.addChild(textContainer.top);
        textContainer.style = style;
        textContainer.setText = function (text) {
            this.bottom.text = text;
            this.top.text = text;
            if (type) {
                if (this.style.maxSize) {
                    this.top.scale.x = 1;
                    this.top.width = Math.min(this.style.maxSize, this.top.width);
                    this.top.scale.x = Math.min(1, this.top.scale.x);
                    this.top.scale.y = this.top.scale.x;
                    this.bottom.scale.x = this.top.scale.x;
                    this.bottom.scale.y = this.top.scale.x;
                }
                this.top.y = this.top.height * -0.5;
                this.bottom.y = this.top.y + (this.top.height - this.bottom.height) * 0.5;
            }
        };
        return textContainer;

    },
    createButtonPause: function (panel, isSettings, tutorial) {
        var buttonFunc = function () {
            panel.show();
        };
        var buttonSettings = this.button(isSettings ? "settings" : "pause", buttonFunc);

        buttonSettings.update = function () {
            this.x = (Game.webApp.screenWidth - 50) * 0.5 - 10;
            this.y = (Game.webApp.screenHeight - 50) * -0.5 + 10;
            if (tutorial) {
                this.button.interative = !tutorial.visible;
            }
        };

        Game.webApp.juggler.addObject(buttonSettings, 1);

        return buttonSettings;
    },
    createButtonLeader: function () {
        var buttonFunc = function () {
            Game.webApp.swapScreen(Game.LeaderScreen);
        };
        var buttonLeader = this.button("leader", buttonFunc);

        buttonLeader.update = function () {
            this.x = (Game.webApp.screenWidth - 50) * 0.5 - 10;
            this.y = (Game.webApp.screenHeight - 50) * 0.5 - 10;
        };

        Game.webApp.juggler.addObject(buttonLeader, 1);

        return buttonLeader;
    },
    button: function (name, func) {
        var buttonContainer = new PIXI.Container();
        buttonContainer.shadow = CC.Utility.pixiAtlasSprite("button_" + name + "_shadow.png");
        buttonContainer.button = CC.Utility.pixiAtlasSprite("button_" + name + ".png");
        buttonContainer.addChild(buttonContainer.shadow);
        buttonContainer.addChild(buttonContainer.button);
        buttonContainer.shadow.y = 2;
        buttonContainer.button.y = -2;
        buttonContainer.buttonMode = true;

        buttonContainer.button.interactive = true;
        buttonContainer.button.mousedown = buttonContainer.button.touchstart = function () {

            //  buttonContainer.shadow.rotation = ((Math.random() > 0.5)? -1:1)*0.1;
            //   buttonContainer.button.rotation = buttonContainer.shadow.rotation;
            buttonContainer.shadow.y = 1;
            buttonContainer.button.y = -1;
            TweenLite.killTweensOf(buttonContainer.shadow);
            TweenLite.killTweensOf(buttonContainer.button);
            TweenLite.killTweensOf(buttonContainer.shadow.scale);
            TweenLite.killTweensOf(buttonContainer.button.scale);

        };
        buttonContainer.button.mouseup = buttonContainer.button.touchend = function () {

            // buttonContainer.shadow.rotation = 0.1;
            //buttonContainer.button.rotation = 0.1;
            // buttonContainer.shadow.y = 2;
            // buttonContainer.button.y = -2;
            Game.sound.play("click_0");
            TweenLite.to(buttonContainer.shadow, 0.1, {
                y: 2
            });
            TweenLite.to(buttonContainer.button, 0.1, {
                y: -2
            });
            setTimeout(func, 300);

        };
        if (CC.isMobile) {
            buttonContainer.button.mouseup = function () {
            };
            buttonContainer.button.mousedown = function () {
            };
        } else {
            buttonContainer.button.touchstart = function () {
            };
            buttonContainer.button.touchend = function () {
            };
        }
        return buttonContainer;
    },
    checkBox: function (func) {
        var checkBox = CC.Utility.pixiAtlasMovieClip(["check_box_on.png", "check_box_off.png"])

        checkBox.buttonMode = true;

        checkBox.interactive = true;
        checkBox.tap = checkBox.click = function () {

            this.gotoAndStop(1 - this.currentFrame);
            func(this.currentFrame);

        };
        if (CC.isMobile) {
            checkBox.click = function () {
            };
        } else {
            checkBox.tap = function () {
            };
        }
        return checkBox;
    },
    buttonText: function (name, label, func) {
        var button = this.button(name, func);
        var text = this.createDisplayText(label, {size: 25, maxSize: 130}, true);
        text.x = text.top.width * -0.5;
        button.text = text;
        button.button.addChild(text);
        return button;
    }
};

SportsUI.EndPanel = function (iconType, replayCallBack, nextCallBack, homeCallBack, score, game, record, starCount) {
    PIXI.Container.call(this);

    this.iconType = iconType;
    this.replayCallBack = replayCallBack;
    this.nextCallBack = nextCallBack;
    this.homeCallBack = homeCallBack;
    this.scoreValue = score;
    this.score = Number(score);
    this.gameValue = game;
    this.record = record;
    this.starCount = starCount;

    this.build();
};

SportsUI.EndPanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.EndPanel.prototype.constructor = SportsUI.EndPanel;
SportsUI.EndPanel.prototype.build = function () {

    this.team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];

    this.totalScore = localStorage.getItem("boomerang_all_stars_total_score");
    if (this.totalScore === null) {
        this.totalScore = 0;
    }
    else {
        this.totalScore = Number(this.totalScore);
    }

    this.scorePanel = new SportsUI.ScorePanel();
    this.scorePanel.setValue(this.totalScore);
    this.scorePanelHolder = new PIXI.Container();

    this.scorePanel.x = -200;
    TweenLite.to(this.scorePanel, 0.7, {ease: Back.easeOut, x: 0, delay: 1});
    //TweenLite.to(this.scorePanel, 0.7, {ease: Back.easeIn, x: -200, delay: 4});

    this.blackUnderlay = new PIXI.Graphics();
    this.blackUnderlay.beginFill(0x0, 0.5);
    this.blackUnderlay.drawRect(-500, -500, 1000, 1000);

    var self = this;

    if (COPY_DECK.copy["flip"]){
        this.baseFrame = CC.Utility.pixiAtlasSprite("end_panel_2.png");
    } else {
        this.baseFrame = CC.Utility.pixiAtlasSprite("end_panel.png");
    }

    this.feedBackBar = CC.Utility.pixiAtlasSprite("feed_back_bar.png");
    var lastRating = localStorage.getItem("boomerang_all_stars_last_rating");
    if (lastRating === null) {
        lastRating = Math.floor(Math.random() * 4);
    }
    lastRating = Number(lastRating);
    var ratingsLength = COPY_DECK.copy["end_panel_ratings"].length;
    lastRating = Math.modo(lastRating + Math.floor(Math.random() * (ratingsLength - 1)) + 1, ratingsLength);

    localStorage.setItem("boomerang_all_stars_last_rating", lastRating + "");
    this.feedBackText = SportsUI.createDisplayText(COPY_DECK.copy["end_panel_ratings"][lastRating], {
        size: 30,
        maxSize: 180
    }, true);
    this.feedBackText.x = this.feedBackText.top.width * -0.5;

    this.feedBackBar.y = -159;
    this.feedBackText.y = 0;

    this.gameIcon = CC.Utility.pixiAtlasSprite("ui_" + this.iconType + "_icon.png", {});
    this.recordIcon = CC.Utility.pixiAtlasSprite("icon_record.png", {});
    this.scoreIcon = CC.Utility.pixiAtlasSprite("icon_score.png", {});
    this.shield = CC.Utility.pixiAtlasSprite("team_shield_half_" + this.team + ".png");
    this.shield.x = 200;
    this.shield.y = -120;

    TweenLite.to(this.shield, 0.7, {ease: Back.easeIn, x: 450, delay: 5.5});
    this.oldScore = Math.round(this.score);

    TweenLite.to(this, 2, {
        score: 0, totalScore: this.totalScore + this.score, delay: 2, onUpdate: (function () {
            this.scorePanel.setValue(Math.round(this.totalScore));
       //     this.scoreNumber.setText(Math.round(this.score) + "");
            if (Math.floor(this.oldScore) !== Math.floor(this.score)) {
                Game.sound.play("beep");
            }
            this.oldScore = this.score;
        }).bind(this)
    });

    this.gameText = SportsUI.createDisplayText(COPY_DECK.copy["end_panel_game_" + this.iconType], {
        size: 28,
        maxSize: 120
    }, true);

    this.recordText = SportsUI.createDisplayText(COPY_DECK.copy["end_panel_record"], {size: 22, maxSize: 80}, true);
    this.scoreText = SportsUI.createDisplayText(COPY_DECK.copy["end_panel_score"], {size: 28, maxSize: 120}, true);

    var align = "right"
    if(COPY_DECK.copy["flip"]){
        align = "left";
    }

    this.gameNumber = SportsUI.createDisplayText(this.gameValue + "", {align: align, size: 37.5}, false);
    this.recordNumber = SportsUI.createDisplayText(this.record + "", {align: align, size: 30}, false);
    this.scoreNumber = SportsUI.createDisplayText(this.scoreValue + "", {align: align, size: 37.5}, false);
    this.buttonReplay = SportsUI.button(Game.shuffleMode ? "replay" : "replay_gld", this.replayCallBack);
    this.buttonNext = SportsUI.button(Game.shuffleMode ? "next_gld" : "next", this.nextCallBack);

    this.animTimer = 0;

    this.buttonReplay.x = -35;
    this.buttonNext.x = 35;

    if (COPY_DECK.copy["flip"]) {
        this.buttonNext.x = -70;
    }

    this.buttonReplay.y = this.buttonNext.y = 115;

    if (COPY_DECK.copy["flip"]) {
        this.gameText.x = 100-this.gameText.top.width;
        this.scoreText.x = 100-this.scoreText.top.width;
        this.recordText.x = 100-this.recordText.top.width;
        this.gameIcon.x = this.recordIcon.x = this.scoreIcon.x = 130;
        this.gameNumber.x = -130;
        this.recordNumber.x = -130;
        this.scoreNumber.x = -130;
    } else {

        this.gameText.x = this.recordText.x = this.scoreText.x = -90;
        this.gameIcon.x = this.recordIcon.x = this.scoreIcon.x = -130;
        this.gameNumber.x = 130 - this.gameNumber.top.width;
        this.recordNumber.x = 130 - this.recordNumber.top.width;
        this.scoreNumber.x = 130 - this.scoreNumber.top.width;
    }

    this.gameText.y = -80;
    this.recordText.y = -33;
    this.scoreText.y = 25;

    this.gameIcon.y = this.gameText.y;
    this.recordIcon.y = this.recordText.y;
    this.scoreIcon.y = this.scoreText.y;

    this.gameNumber.y = this.gameText.y - 15;
    this.recordNumber.y = this.recordText.y - 15;
    this.scoreNumber.y = this.scoreText.y - 15;

    this.recordBroken = false;
    this.recordShown = false;

    this.starsHolder = new PIXI.Container();
    this.starsHolder.y = -130;

    var i = 0, length = 5, star;
    for (i; i < length; ++i) {
        star = CC.Utility.pixiAtlasSprite("star_shadow.png");
        star.x = (i - (length - 1) * 0.5) * 50;
        this.starsHolder.addChild(star);
    }

    i = 0;
    for (i; i < length; ++i) {
        if (this.starCount >= i) {
            star = CC.Utility.pixiAtlasSprite("star_results.png");
            star.x = (i - (length - 1) * 0.5) * 50;
            this.starsHolder.addChild(star);
        }
    }

    i = 0;
    for (i; i < length; ++i) {
        if (this.starCount >= i) {
            star = CC.Utility.pixiAtlasSprite("star_results.png");
            star.x = (i - (length - 1) * 0.5) * 50;
            this.starsHolder.addChild(star);

            var time = 4 - i * 0.1;
            TweenLite.to(star, 1, {
                x: 210, delay: time, ease: Back.easeIn, onStart: function () {
                }, onComplete: (function () {
                    // self.shield.anchor.x = 0.45;
                    self.shield.scale.set(0.8, 0.8);
                    Game.sound.play("ball_star_0");
                    this.visible = false;
                }).bind(star)
            });
        }
    }

    this.addChild(this.baseFrame);
    this.addChild(this.feedBackBar);
    this.scorePanelHolder.addChild(this.scorePanel);
    this.addChild(this.scorePanelHolder);
    this.feedBackBar.addChild(this.feedBackText);
    this.baseFrame.addChild(this.gameIcon);
    this.baseFrame.addChild(this.recordIcon);
    this.baseFrame.addChild(this.scoreIcon);

    this.baseFrame.addChild(this.gameText);
    this.baseFrame.addChild(this.recordText);
    this.baseFrame.addChild(this.scoreText);

    this.baseFrame.addChild(this.gameNumber);
    this.baseFrame.addChild(this.recordNumber);
    this.baseFrame.addChild(this.scoreNumber);
    this.baseFrame.addChild(this.buttonReplay);
    this.baseFrame.addChild(this.buttonNext);
    this.baseFrame.addChild(this.shield);
    this.baseFrame.addChild(this.starsHolder);
    this.baseFrame.y = 18;

    //this.visible = false;
    this.hitArea = new PIXI.Rectangle(-250, -250, 500, 500);
    this.interactive = true;
    this.click = this.tap = function (eventData) {
    };


};

SportsUI.EndPanel.prototype.show = function () {
    this.visible = true;
    TweenLite.from(this.baseFrame, 1, {y: 500, ease: Back.easeOut, delay: 0.5});
    TweenLite.from(this.feedBackBar, 1, {y: -250, ease: Back.easeOut, delay: 0.5});
};
SportsUI.EndPanel.prototype.update = function (delta) {
    this.animTimer += delta;
    // var pulseValue = 1 + Math.max(0,Math.sin(this.animTimer*5)-0.8)*0.5;
    var pulseValue = 1.05 + Math.sin(this.animTimer * 5) * 0.05;

    this.scorePanelHolder.x = Game.webApp.screenWidth * -0.5 + 60;

    this.shield.scale.x = Math.lerp(this.shield.scale.x, 1, 0.1);
    this.shield.scale.y = Math.lerp(this.shield.scale.y, 1, 0.1);
    this.shield.anchor.x = this.shield.scale.y*0.5;

    if (Game.shuffleMode) {
        this.buttonNext.scale.set(pulseValue);
    } else {
        this.buttonReplay.scale.set(pulseValue);
    }
};

SportsUI.ScorePanel = function () {
    PIXI.Container.call(this);

    if(COPY_DECK.copy["flip"])
    {
        this.scoreText = COPY_DECK.copy["end_panel_score"];
    } else {
        this.scoreText = COPY_DECK.copy["end_panel_score"] + ":";
    }

    this.base = CC.Utility.pixiAtlasSprite("score_panel_2.png", {anchor: "t"});
    this.text = SportsUI.createDisplayText(this.scoreText, {size: 15, maxSize: 80, maxSize: 50}, true);
    this.text.x = -50;
    this.text.y = 15;
    this.textNumber = SportsUI.createDisplayText("0", {size: 26, fill: 0xf9eb46}, false);
    this.textNumber.x = 10;
    this.textNumber.y = 4;


    if(COPY_DECK.copy["flip"])
    {
        this.text.x = 10;
        this.textNumber.x = -50;
    }
    this.y = -195;

    this.addChild(this.base);
    this.addChild(this.text);
    this.addChild(this.textNumber);

};

SportsUI.ScorePanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.ScorePanel.prototype.constructor = SportsUI.ScorePanel;

SportsUI.ScorePanel.prototype.setValue = function (value) {
    this.textNumber.setText(value + "");
};

SportsUI.ScorePanelBar = function () {
    PIXI.Container.call(this);

    if(COPY_DECK.copy["flip"])
    {
        this.scoreText = COPY_DECK.copy["end_panel_score"];
    } else {
        this.scoreText = COPY_DECK.copy["end_panel_score"] + ":";
    }

    this.base = CC.Utility.pixiAtlasSprite("ui_score_bar_back.png", {anchor: "t"});
    this.bar = CC.Utility.pixiAtlasSprite("ui_score_bar_front.png", {anchor: "t"});
    this.maskGraphic = new PIXI.Graphics();
    this.maskGraphic.beginFill(0xFF0000,0.5);
    this.maskGraphic.drawRect(0,-10,247,20);
    this.maskGraphic.x = -122;
    this.maskGraphic.y = 40;
    this.maskGraphic.scale.x = 0.0;
    this.bar.mask = this.maskGraphic;
    this.text = SportsUI.createDisplayText(this.scoreText, {size: 15, maxSize: 80, maxSize: 50}, true);
    this.text.x = -50;
    this.text.y = 15;
    this.textNumber = SportsUI.createDisplayText("0", {size: 26, fill: 0xf9eb46}, false);
    this.textNumber.x = 10;
    this.textNumber.y = 4;


    if (COPY_DECK.copy["flip"]) {
        this.text.x = 10;
        this.textNumber.x = -50;
    }
    this.y = -195;

    this.addChild(this.base);
    this.addChild(this.bar);
    this.addChild(this.maskGraphic);
    this.addChild(this.text);
    this.addChild(this.textNumber);

};

SportsUI.ScorePanelBar.prototype = Object.create(PIXI.Container.prototype);
SportsUI.ScorePanelBar.prototype.constructor = SportsUI.ScorePanel;

SportsUI.ScorePanelBar.prototype.setValue = function (value) {
    this.textNumber.setText(value + "");
};
SportsUI.ScorePanelBar.prototype.setValueBar = function (value) {
    this.maskGraphic.scale.x = value;
};

SportsUI.TimerPanel = function () {
    PIXI.Container.call(this);

    this.base = CC.Utility.pixiAtlasSprite("time_panel.png", {anchor: "bl"});
    this.text = SportsUI.createDisplayText(this.scoreText + "60", {size: 34}, false);
    this.text.x = 70;
    this.text.y = -36;
    this.y = 195;

    this.update = function () {
        this.x = Game.webApp.screenWidth * -0.5;
    };

    Game.webApp.juggler.addObject(this, 1);
    this.addChild(this.base);
    this.addChild(this.text);
};

SportsUI.TimerPanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.TimerPanel.prototype.constructor = SportsUI.TimerPanel;
SportsUI.TimerPanel.prototype.setValue = function (value) {
    this.text.setText(value + "");
};

SportsUI.GamePointsPanel = function (backPanelName) {
    PIXI.Container.call(this);

    this.base = CC.Utility.pixiAtlasSprite(backPanelName, {anchor: "br"});
    this.text = SportsUI.createDisplayText("0", {size: 34}, false);
    this.text.x = -90;
    this.text.y = -36;
    this.y = 195;

    this.update = function () {
        this.x = Game.webApp.screenWidth * 0.5 + 0.5;
    };

    Game.webApp.juggler.addObject(this, 1);
    this.addChild(this.base);
    this.addChild(this.text);
};

SportsUI.GamePointsPanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.GamePointsPanel.prototype.constructor = SportsUI.GamePointsPanel;
SportsUI.GamePointsPanel.prototype.setValue = function (value) {
    this.text.setText(value + "");
};

SportsUI.PausePanel = function (gameScreen, isSettings, tutorial) {
    PIXI.Container.call(this);

    this.gameScreen = gameScreen;
    this.isSettings = !!isSettings;
    this.tutorial = tutorial;
    this.build();
};

SportsUI.PausePanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.PausePanel.prototype.constructor = SportsUI.PausePanel;
SportsUI.PausePanel.prototype.build = function () {

    this.background = CC.Utility.pixiAtlasSprite("splash_basketzorb.png");

    this.baseFrame = CC.Utility.pixiAtlasSprite("pause_panel.png");

    this.homefunc = function () {
        Game.hardSwapScreen("dat/manifests/manifest_menu.json", Game.StartScreen, Game.LoadScreen);
        Game.webApp.juggler.resume(0);
    };
    this.replayfunc = function () {
        Game.hardSwapScreen("dat/manifests/manifest_ball.json", Game.BallScreen, Game.LoadScreen);
        Game.webApp.juggler.resume(0);
    };
    this.helpfunc = function () {
        this.hide();
        this.tutorial.show();
        this.tutorial.buttonTickContainer.animTimer = 100;
    };
    this.closefunc = function () {
        this.hide();
    };
    this.dataFunc = function () {
        this.dataPanel.show();
    };
    this.langFunc = function () {
        this.langPanel.show();
    };
    this.musicToggle = function () {
        if (this.checkBoxMusic.currentFrame) {
            Game.sound.muteMusic();
            localStorage.setItem("boomerang_all_stars_mute_music", "yes");
        } else {
            Game.sound.unmuteMusic();
            localStorage.setItem("boomerang_all_stars_mute_music", "no");
        }

    };
    this.soundToggle = function () {

        if (this.checkBoxSound.currentFrame) {
            Game.sound.mute(true);
            localStorage.setItem("boomerang_all_stars_mute_sound", "yes");
        } else {
            Game.sound.mute(false);
            localStorage.setItem("boomerang_all_stars_mute_sound", "no");
        }
    };

    var title = (this.isSettings) ? COPY_DECK.copy["settings_panel_title"] : COPY_DECK.copy["pause_panel_title"];
    this.textTitle = SportsUI.createDisplayText(title, {size: 20}, true);
    this.textTitle.x = this.textTitle.top.width * -0.5;

    this.buttonClose = SportsUI.button("close", this.closefunc.bind(this));

    this.textTitle.y = -150;

    this.buttonClose.x = 204;
    this.buttonClose.y = -150;

    this.addChild(this.background);
    this.addChild(this.baseFrame);
    this.textMusic = SportsUI.createDisplayText(COPY_DECK.copy["pause_panel_music"], {
        size: 20,
        fill: 0xF9EB46,
        maxSize: 60
    }, true);

    this.textSound = SportsUI.createDisplayText(COPY_DECK.copy["pause_panel_sound"], {
        size: 20,
        fill: 0xF9EB46,
        maxSize: 60
    }, true);
    this.checkBoxMusic = SportsUI.checkBox(this.musicToggle.bind(this));
    this.checkBoxSound = SportsUI.checkBox(this.soundToggle.bind(this));

    this.checkBoxMusic.gotoAndStop(!!Game.sound.musicMuted);
    this.checkBoxSound.gotoAndStop(!!Game.sound.muted);

    this.textMusic.x = 30;
    this.textSound.x = 30;
    this.checkBoxMusic.x = -100;
    this.checkBoxSound.x = 40;
    this.checkBoxMusic.y = this.checkBoxSound.y = -66;

    if (this.isSettings) {

        this.butttonData = SportsUI.buttonText("text", COPY_DECK.copy["button_data"], this.dataFunc.bind(this));

        this.buttonLang = SportsUI.buttonText("text", COPY_DECK.copy["button_language"], this.langFunc.bind(this));
        this.termsfunc = function () {
            localStorage.setItem("boomerang_all_stars_quickloader", "yes");
            //  window.location = "terms.html";
            window.location = "terms/terms-" + COPY_DECK.currentLanguage + ".html?key=" + COPY_DECK.copy['key'];

        };
        this.privacyFunc = function () {
            localStorage.setItem("boomerang_all_stars_quickloader", "yes");
            //  window.location = "privacy.html";
            window.location = "privacy/privacy-" + COPY_DECK.currentLanguage + ".html?key=" + COPY_DECK.copy['key'];;
        };

        this.buttonTerms = new PIXI.Text(COPY_DECK.copy["terms_of_use"], {
            fontSize: 14,
            fill: 0xFFFFFF
        });
        this.buttonPrivacy = new PIXI.Text(COPY_DECK.copy["privacy_policy"], {
            fontSize: 14,
            fill: 0xFFFFFF
        });

        this.buttonPrivacy.underLine = new PIXI.Graphics();
        this.buttonPrivacy.underLine.lineStyle(2, 0xFFFFFF);
        this.buttonPrivacy.underLine.moveTo(0, 18);
        this.buttonPrivacy.underLine.lineTo(this.buttonPrivacy.width, 18);
        this.buttonPrivacy.addChild(this.buttonPrivacy.underLine);

        this.buttonTerms.underLine = new PIXI.Graphics();
        this.buttonTerms.underLine.lineStyle(2, 0xFFFFFF);
        this.buttonTerms.underLine.moveTo(0, 18);
        this.buttonTerms.underLine.lineTo(this.buttonTerms.width, 18);
        this.buttonTerms.addChild(this.buttonTerms.underLine);

        this.buttonLang.y = 10;
        this.butttonData.y = 65;
        this.buttonPrivacy.y = 135;
        this.buttonTerms.y = 155;

        this.buttonPrivacy.x = this.buttonTerms.x = -225;

        this.buttonPrivacy.interactive = this.buttonPrivacy.buttonMode = true;
        this.buttonTerms.interactive = this.buttonTerms.buttonMode = true;

        this.buttonPrivacy.click = this.buttonPrivacy.tap = this.privacyFunc.bind(this);
        this.buttonTerms.click = this.buttonTerms.tap = this.termsfunc.bind(this);
        this.dataPanel = new SportsUI.DataPanel();
        this.langPanel = new SportsUI.LangPanel();
       // this.baseFrame.addChild(this.butttonData);
        //this.baseFrame.addChild(this.buttonLang);
        //this.baseFrame.addChild(this.buttonPrivacy);
        //this.baseFrame.addChild(this.buttonTerms);
    } else {
        this.buttonReplay = SportsUI.button("replay", this.replayfunc.bind(this));
        this.buttonHelp = SportsUI.button("help", this.helpfunc.bind(this));
        this.buttonReplay.x = -35;
        this.buttonHelp.x = 35;
        this.buttonReplay.y = this.buttonHelp.y = 140;
        this.baseFrame.addChild(this.buttonReplay);
        this.baseFrame.addChild(this.buttonHelp);
    }

    this.baseFrame.addChild(this.buttonClose);
    this.checkBoxMusic.addChild(this.textMusic);
    this.checkBoxSound.addChild(this.textSound);
    this.baseFrame.addChild(this.checkBoxMusic);
    this.baseFrame.addChild(this.checkBoxSound);
    this.baseFrame.addChild(this.textTitle);

    if (this.isSettings) {
        this.addChild(this.dataPanel);
        this.addChild(this.langPanel);
    }

    this.hitArea = new PIXI.Rectangle(-250, -250, 500, 500);
    this.interactive = true;
    this.click = this.tap = function (eventData) {
    };

    this.background.alpha = 0;
    this.baseFrame.y = 500;
    this.visible = false;
};

SportsUI.PausePanel.prototype.show = function () {
    this.visible = true;
    TweenLite.to(this.baseFrame, 0.5, {y: 0, ease: Back.easeOut});
    TweenLite.to(this.background, 0.5, {alpha: 1});
    if (!this.isSettings) {
        Game.webApp.juggler.pause(0);
    }

    Game.sound.pause(true);

    PIXI.spine.Spine.globalAutoUpdate = false;
};

SportsUI.PausePanel.prototype.hide = function () {

    TweenLite.to(this.baseFrame, 0.5, {y: 500, ease: Back.easeIn});
    TweenLite.to(this.background, 0.5, {alpha: 0});
    TweenLite.delayedCall(0.5, (function () {
        this.visible = false;
    }).bind(this));

    if(!Game.webApp.tutorial) {
        Game.webApp.juggler.resume(0);
        Game.sound.pause(false);
    }

    PIXI.spine.Spine.globalAutoUpdate = true;
};


SportsUI.PrivPanel = function () {
    PIXI.Container.call(this);

    this.build();
};

SportsUI.PrivPanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.PrivPanel.prototype.constructor = SportsUI.PrivPanel;
SportsUI.PrivPanel.prototype.build = function () {

    this.background = CC.Utility.pixiAtlasSprite("splash_basketzorb.png");

    var width = 400;
    var height = 350;
    var paddingLeft = 30;
    var paddingRight = 50;
    var fontSize = 10;

    this.baseFrame = new PIXI.Graphics();

    this.termsFunc = function() {
        localStorage.setItem("boomerang_all_stars_quickloader", "yes");
        window.location = "terms/terms-" + COPY_DECK.currentLanguage + ".html?key=" + COPY_DECK.copy['key'];
    };

    this.amtFunc = function() {
        localStorage.setItem("boomerang_all_stars_quickloader", "yes");
        window.location = "amt/" + COPY_DECK.currentLanguage + ".html?key=" + COPY_DECK.copy['key'];
    };

    this.privFunc = function() {
        localStorage.setItem("boomerang_all_stars_quickloader", "yes");
        window.location = "privacy/privacy-" + COPY_DECK.currentLanguage + ".html?key=" + COPY_DECK.copy['key'];
    };

    this.acceptFunc = function() {
        Game.webApp.juggler.resume(0);
        this.hide();
        localStorage.setItem("boomerang_sports_app_accept_policy_gdpr", "yes");

        Game.webApp.juggler.addTimeout(function() {
            if (!Game.hasPlayedIntroVO) {
                Game.sound.play("welcome");
            }
        },1,1);

        if (!Game.hasPlayedIntroVO) {
            Game.webApp.juggler.addTimeout(function() {
                Game.sound.play("welcome_tagline_" + Math.floor(Math.random()*4));
                Game.hasPlayedIntroVO = true;
            }, 4.1);
        }
    };

    this.checkFunc = function() {
        this.checkbox.selected = !this.checkbox.selected;
        this.accept.visible = this.checkbox.selected;

        if(this.checkbox.selected) {
            this.drawCheckboxSelected(width, paddingLeft, height);
        } else {
            this.drawCheckboxUnselected(width, paddingLeft, height);
        }
    }

    this.textTitle = new PIXI.Text(COPY_DECK.copy["policy_title_a"], {
        wordWrapWidth: width-20,
        align: "left",
        fontSize: 18,
        wordWrap: true,
        fill: 0xffed2e,
        'fontFamily': 'fred_burger'
    });

   this.textTitle.height = Math.min(70, this.textTitle.height);
   this.textTitle.scale.y = Math.min(1, this.textTitle.scale.y);
   this.textTitle.scale.x = this.textTitle.scale.y;
   this.textTitle.x = -width / 2 + paddingLeft;
   this.textTitle.y = -160;
   this.baseFrame.addChild(this.textTitle);

   this.textTitle2 = new PIXI.Text(COPY_DECK.copy["policy_title_b"], {
        wordWrapWidth: width-paddingRight,
        align: "left",
        fontSize: fontSize,
        wordWrap: true,
        fill: 0xffffff,
        fontWeight: 800,
        'fontFamily': 'fred_burger'
    });

    this.textTitle2.height = Math.min(70, this.textTitle2.height);
    this.textTitle2.scale.y = Math.min(1, this.textTitle2.scale.y);
    this.textTitle2.scale.x = this.textTitle2.scale.y;
    this.textTitle2.x = -width / 2 + paddingLeft;
    this.textTitle2.y = -125;
    this.baseFrame.addChild(this.textTitle2);

    this.textPolicy = new PIXI.Text(COPY_DECK.copy["policy_text"], {
        wordWrapWidth: width-paddingRight,
        align: "left",
        fontSize: fontSize,
        wordWrap: true,
        fill: 0xffffff,
        'fontFamily': 'fred_burger'
    });

    this.textPolicy.height = Math.min(70, this.textPolicy.height);
    this.textPolicy.scale.y = Math.min(1, this.textPolicy.scale.y);
    this.textPolicy.scale.x = this.textPolicy.scale.y;
    this.textPolicy.x = -width / 2 + paddingLeft;
    this.textPolicy.y = -95;
    this.baseFrame.addChild(this.textPolicy);

    this.textMeasureIntro = new PIXI.Text(COPY_DECK.copy["policy_measurement_intro"], {
        wordWrapWidth: width-paddingRight,
        align: "left",
        fontSize: fontSize,
        wordWrap: true,
        fill: 0xffffff,
        'fontFamily': 'fred_burger'
    });

    this.textMeasureIntro.height = Math.min(70, this.textMeasureIntro.height);
    this.textMeasureIntro.scale.y = Math.min(1, this.textMeasureIntro.scale.y);
    this.textMeasureIntro.scale.x = this.textMeasureIntro.scale.y;
    this.textMeasureIntro.x = -width / 2 + paddingLeft;
    this.textMeasureIntro.y = -45;
    this.baseFrame.addChild(this.textMeasureIntro);

    this.textMeasureLink = new PIXI.Text(COPY_DECK.copy["policy_measurement_link"], {
        align: "left",
        fontSize: fontSize,
        fill: 0xffffff,
        fontWeight: 800,
        'fontFamily': 'fred_burger'
    });

    this.textMeasureLink.height = Math.min(70, this.textMeasureLink.height);
    this.textMeasureLink.scale.y = Math.min(1, this.textMeasureLink.scale.y);
    this.textMeasureLink.scale.x = this.textMeasureLink.scale.y;
    this.textMeasureLink.x = this.textMeasureIntro.x + this.textMeasureIntro.width + 2;
    this.textMeasureLink.y = -45;
    this.baseFrame.addChild(this.textMeasureLink);

    if(COPY_DECK.copy["policy_measurement_outro"] && COPY_DECK.copy["policy_measurement_outro"].length > 0) {
        this.textMeasureOutro = new PIXI.Text(COPY_DECK.copy["policy_measurement_outro"], {
            align: "left",
            fontSize: fontSize,
            fill: 0xffffff,
            fontWeight: 800,
            'fontFamily': 'fred_burger'
        });
    
        this.textMeasureOutro.height = Math.min(70, this.textMeasureOutro.height);
        this.textMeasureOutro.scale.y = Math.min(1, this.textMeasureOutro.scale.y);
        this.textMeasureOutro.scale.x = this.textMeasureOutro.scale.y;
        this.textMeasureOutro.x = -width / 2 + paddingLeft;
        this.textMeasureOutro.y = this.textMeasureLink.y + this.textMeasureLink.height + 3;
        this.baseFrame.addChild(this.textMeasureOutro);
    }

    this.textPrivacyIntro = new PIXI.Text(COPY_DECK.copy["policy_privacy_intro"], {
        wordWrapWidth: width-paddingRight,
        align: "left",
        fontSize: fontSize,
        wordWrap: true,
        fill: 0xffffff,
        'fontFamily': 'fred_burger'
    });

    this.textPrivacyIntro.height = Math.min(70, this.textPrivacyIntro.height);
    this.textPrivacyIntro.scale.y = Math.min(1, this.textPrivacyIntro.scale.y);
    this.textPrivacyIntro.scale.x = this.textPrivacyIntro.scale.y;
    this.textPrivacyIntro.x = -width / 2 + paddingLeft;
    this.textPrivacyIntro.y = -5;
    this.baseFrame.addChild(this.textPrivacyIntro);

    this.textPrivacyLink = new PIXI.Text(COPY_DECK.copy["policy_privacy_link"], {
        align: "left",
        fontSize: fontSize,
        fill: 0xffffff,
        fontWeight: 800,
        'fontFamily': 'fred_burger'
    });

    this.textPrivacyLink.height = Math.min(70, this.textPrivacyLink.height);
    this.textPrivacyLink.scale.y = Math.min(1, this.textPrivacyLink.scale.y);
    this.textPrivacyLink.scale.x = this.textPrivacyLink.scale.y;
    this.textPrivacyLink.x = -width / 2 + paddingLeft;
    this.textPrivacyLink.y = 15;
    this.baseFrame.addChild(this.textPrivacyLink);

    if(COPY_DECK.copy["policy_privacy_outro"] && COPY_DECK.copy["policy_privacy_outro"].length > 0) {
        this.textPrivacyOutro = new PIXI.Text(COPY_DECK.copy["policy_privacy_outro"], {
            align: "left",
            fontSize: fontSize,
            fill: 0xffffff,
            fontWeight: 800,
            'fontFamily': 'fred_burger'
        });
    
        this.textPrivacyOutro.height = Math.min(70, this.textPrivacyOutro.height);
        this.textPrivacyOutro.scale.y = Math.min(1, this.textPrivacyOutro.scale.y);
        this.textPrivacyOutro.scale.x = this.textPrivacyOutro.scale.y;
        this.textPrivacyOutro.x = this.textPrivacyLink.x + this.textPrivacyLink.width + 5;
        this.textPrivacyOutro.y = this.textPrivacyLink.y;
        this.baseFrame.addChild(this.textPrivacyOutro);
    }

    this.textTermsIntro = new PIXI.Text(COPY_DECK.copy["policy_terms_intro"], {
        wordWrapWidth: width-paddingRight,
        align: "left",
        fontSize: fontSize,
        wordWrap: true,
        fill: 0xffffff,
        'fontFamily': 'fred_burger'
    });

    this.checkbox = new PIXI.Graphics();
    this.baseFrame.addChild(this.checkbox);
    this.checkbox.selected = false;

    this.textTermsIntro.height = Math.min(70, this.textTermsIntro.height);
    this.textTermsIntro.scale.y = Math.min(1, this.textTermsIntro.scale.y);
    this.textTermsIntro.scale.x = this.textTermsIntro.scale.y;
    this.textTermsIntro.x = -width / 2 + paddingLeft + 28;
    this.textTermsIntro.y = 38;
    this.baseFrame.addChild(this.textTermsIntro);

    this.textTermsLink = new PIXI.Text(COPY_DECK.copy["policy_terms_link"], {
        align: "left",
        fontSize: fontSize,
        fill: 0xffffff,
        fontWeight: 800,
        'fontFamily': 'fred_burger'
    });

    this.textTermsLink.height = Math.min(70, this.textTermsLink.height);
    this.textTermsLink.scale.y = Math.min(1, this.textTermsLink.scale.y);
    this.textTermsLink.scale.x = this.textTermsLink.scale.y;
    this.textTermsLink.x = this.textTermsIntro.x + this.textTermsIntro.width + 2;
    this.textTermsLink.y = 38;
    this.baseFrame.addChild(this.textTermsLink);

    if(COPY_DECK.copy["policy_terms_outro"] && COPY_DECK.copy["policy_terms_outro"].length > 0) {
        this.textTermsOutro = new PIXI.Text(COPY_DECK.copy["policy_terms_outro"], {
            align: "left",
            fontSize: fontSize,
            fill: 0xffffff,
            fontWeight: 800,
            'fontFamily': 'fred_burger'
        });
    
        this.textTermsOutro.height = Math.min(70, this.textTermsOutro.height);
        this.textTermsOutro.scale.y = Math.min(1, this.textTermsOutro.scale.y);
        this.textTermsOutro.scale.x = this.textTermsOutro.scale.y;
        this.textTermsOutro.x = -width / 2 + paddingLeft + 28;
        this.textTermsOutro.y = this.textTermsLink.y + this.textTermsLink.height + 3;
        this.baseFrame.addChild(this.textTermsOutro);
    }

    this.accept = new PIXI.Text(COPY_DECK.copy["policy_continue"], {
        wordWrapWidth: width-paddingRight,
        align: "center",
        fontSize: 18,
        wordWrap: true,
        fill: 0xffffff,
        'fontFamily': 'fred_burger'
    });

    this.accept.height = Math.min(70, this.accept.height);
    this.accept.scale.y = Math.min(1, this.accept.scale.y);
    this.accept.scale.x = this.accept.scale.y;
    this.accept.x = 0;
    this.accept.y = 120;
    this.baseFrame.addChild(this.accept);
    this.accept.anchor.x = 0.5;
    this.accept.visible = false;

    this.textTermsLink.interactive = this.background.interactive = this.textPrivacyLink.interactive = this.textMeasureLink.interactive = this.accept.interactive = this.checkbox.interactive = true;
    this.textTermsLink.buttonMode = this.textPrivacyLink.buttonMode = this.textMeasureLink.buttonMode = this.accept.buttonMode = this.checkbox.buttonMode = true;

    this.textPrivacyLink.click = this.textPrivacyLink.tap = this.privFunc.bind(this);
    this.textTermsLink.click = this.textTermsLink.tap = this.termsFunc.bind(this);
    this.accept.click = this.accept.tap = this.acceptFunc.bind(this);
    this.checkbox.click = this.checkbox.tap = this.checkFunc.bind(this);

    this.textMeasureLink.click = this.textMeasureLink.tap = this.amtFunc.bind(this);

    this.addChild(this.background);
    this.addChild(this.baseFrame);

    this.background.alpha = 0;
    this.baseFrame.y = 500;
    this.visible = false;

    // if (!localStorage.getItem("boomerang_sports_app_accept_policy_gdpr")) {
    //     Game.webApp.juggler.pause(0);
    //     this.show();
    // }

    this.drawCheckboxUnselected(width, paddingLeft, height);
};

SportsUI.PrivPanel.prototype.drawCheckboxUnselected = function(width, paddingLeft, height) {
    this.checkbox.clear();
    this.checkbox.beginFill(0xffffff, 1);
    this.checkbox.drawRect(-width / 2 + paddingLeft, 35, 20, 20);
    this.checkbox.endFill();

    this.baseFrame.clear();
    this.baseFrame.beginFill(0x0, 0.7);
    this.baseFrame.drawRect(-500, -500 / 2, 1000, 1000);
    this.baseFrame.beginFill(0xffed2e, 1);
    this.baseFrame.drawRect(-width / 2 + 5, -height / 2 + 5, width, height);
    this.baseFrame.beginFill(0x8b2b82, 1);
    this.baseFrame.drawRect(-width / 2, -height / 2, width, height);
    this.baseFrame.endFill();

    this.drawUnderlines(this.textTermsLink);
    this.drawUnderlines(this.textPrivacyLink);
    this.drawUnderlines(this.textMeasureLink);
}

SportsUI.PrivPanel.prototype.drawCheckboxSelected = function(width, paddingLeft, height) {
    this.drawCheckboxUnselected(width, paddingLeft, height);

    this.checkbox.lineStyle(1, 0x000);
    this.checkbox.moveTo(-width / 2 + paddingLeft + 3, 47);
    this.checkbox.lineTo(-width / 2 + paddingLeft + 8, 52);
    this.checkbox.lineTo(-width / 2 + paddingLeft + 17, 38);

    var buttonXPadding = 10;
    this.baseFrame.lineStyle(0, 0x000);
    this.baseFrame.beginFill(0xffef26, 1);
    this.baseFrame.drawRect(this.accept.x - this.accept.width / 2 - buttonXPadding + 2, this.accept.y + 2, this.accept.width + (buttonXPadding * 2), this.accept.height + 4);
    this.baseFrame.beginFill(0x5bb5e9, 1);
    this.baseFrame.drawRect(this.accept.x - this.accept.width / 2 - buttonXPadding, this.accept.y - 2, this.accept.width + (buttonXPadding * 2), this.accept.height + 6);
    this.baseFrame.endFill();
}

SportsUI.PrivPanel.prototype.drawUnderlines = function (field) {
    this.baseFrame.lineStyle(1, 0xffffff);
    this.baseFrame.moveTo(field.x, field.y + field.height);
    this.baseFrame.lineTo(field.x + field.width, field.y + field.height);
}

SportsUI.PrivPanel.prototype.show = function () {
    this.visible = true;
    TweenLite.to(this.baseFrame, 0.5, {y: 0, ease: Back.easeOut});
    TweenLite.to(this.background, 0.5, {alpha: 1});
};

SportsUI.PrivPanel.prototype.hide = function () {
    TweenLite.to(this.baseFrame, 0.5, {y: 500, ease: Back.easeIn});
    TweenLite.to(this.background, 0.5, {alpha: 0});
    TweenLite.delayedCall(0.5, (function () {
        this.visible = false;
    }).bind(this));
};

SportsUI.DataPanel = function () {
    PIXI.Container.call(this);
    this.build();
};

SportsUI.DataPanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.DataPanel.prototype.constructor = SportsUI.DataPanel;
SportsUI.DataPanel.prototype.build = function () {

    this.background = CC.Utility.pixiAtlasSprite("splash_basketzorb.png");

    this.baseFrame = CC.Utility.pixiAtlasSprite("conformation_panel.png");

    this.yesFunc = function () {
        localStorage.clear();
        localStorage.setItem("boomerang_all_stars_language_selection", COPY_DECK.currentLanguage);
        this.hide();
    };
    this.noFunc = function () {

        this.hide();
    };

    this.textTitle = SportsUI.createDisplayText(COPY_DECK.copy["are_you_sure"], {size: 25, maxSize: 170}, true);
    this.textTitle.x = this.textTitle.top.width * -0.5;

    this.buttonYes = SportsUI.button("yes", this.yesFunc.bind(this));
    this.buttonCancel = SportsUI.button("cancel", this.noFunc.bind(this));


    this.textTitle.y = -50;

    this.buttonYes.y = 50;
    this.buttonCancel.y = 50;
    this.buttonYes.x = -40;
    this.buttonCancel.x = 40;


    this.addChild(this.background);
    this.addChild(this.baseFrame);


    this.baseFrame.addChild(this.buttonYes);
    this.baseFrame.addChild(this.buttonCancel);
    this.baseFrame.addChild(this.textTitle);

    //this.visible = false;
    this.hitArea = new PIXI.Rectangle(-250, -250, 500, 500);
    this.interactive = true;
    this.click = this.tap = function (eventData) {
    };

    this.background.alpha = 0;
    this.baseFrame.y = 500;
    this.visible = false;

};
SportsUI.DataPanel.prototype.show = function () {
    this.visible = true;
    Game.sound.play("are_you_sure");
    TweenLite.to(this.baseFrame, 0.5, {y: 0, ease: Back.easeOut});
    TweenLite.to(this.background, 0.5, {alpha: 1});
};
SportsUI.DataPanel.prototype.hide = function () {

    TweenLite.to(this.baseFrame, 0.5, {y: 500, ease: Back.easeIn});
    TweenLite.to(this.background, 0.5, {alpha: 0});
    TweenLite.delayedCall(0.5, (function () {
        this.visible = false;
    }).bind(this));

};


SportsUI.LangPanel = function () {
    PIXI.Container.call(this);

    this.build();
};

SportsUI.LangPanel.prototype = Object.create(PIXI.Container.prototype);
SportsUI.LangPanel.prototype.constructor = SportsUI.LangPanel;
SportsUI.LangPanel.prototype.createSlider = function (optionsList) {
    var sliderHolder = CC.Utility.pixiAtlasSprite("scroller_base.png");
    sliderHolder.glass = CC.Utility.pixiAtlasSprite("scroller_glass.png");

    sliderHolder.optionsHolder = new PIXI.Container();

    var i = 0, length = optionsList.length, option;


    for (i; i < length; ++i) {
        option = new PIXI.Text(optionsList[i], {
            fontSize: 28,
            fill: 0x000000
        });
        option.anchor.set(0.5);
        sliderHolder.optionsHolder.addChild(option);
    }

    sliderHolder.offset = 0;
    sliderHolder.selection = 0;
    sliderHolder.buttonMode = sliderHolder.interactive = true;
    sliderHolder.mousedown = sliderHolder.touchstart = function (event) {
        this.mouseStart = event.data.getLocalPosition(this).y;
        this.offsetStart = this.offset;
        this.grabbed = true;
        TweenLite.killTweensOf(this);
    };
    sliderHolder.mousemove = sliderHolder.touchmove = function (event) {
        if (this.grabbed) {
            this.mouseCurrent = event.data.getLocalPosition(this).y;
            this.offset = this.offsetStart + (this.mouseCurrent - this.mouseStart) * 0.03;
        }
    };
    sliderHolder.mouseupoutside = sliderHolder.touchendoutside = sliderHolder.mouseup = sliderHolder.touchend = function (event) {
        if (this.grabbed) {
            TweenLite.to(this, 0.3, {offset: Math.round(this.offset)});
            this.selection = Math.modo(Math.round(-this.offset), length);
        }
        this.grabbed = false;
    };

    sliderHolder.setValue = function (selection) {
        this.selection = Math.round(selection);
        this.offset = -this.selection;
    };

    sliderHolder.update = function (delta) {

        var i = 0, length = this.optionsHolder.children.length, option;

        //testNum.text = Math.modo(Math.round(-this.offset),length);

        for (i; i < length; ++i) {
            option = this.optionsHolder.children[i];
            var angle = Math.modo(i + this.offset + (length * 0.5), length) - length * 0.5;
            angle = angle * 0.7;

            option.alpha = Math.clamp(0, 1, 1 - Math.abs(angle / 1) + 0.5);
            option.y = Math.sin(angle) * 60;
            option.scale.y = Math.cos(angle);
            option.visible = option.scale.y > 0 && angle < 3 && angle > -3;
        }
    };
    Game.webApp.juggler.addObject(sliderHolder);

    sliderHolder.addChild(sliderHolder.optionsHolder);
    sliderHolder.addChild(sliderHolder.glass);
    return sliderHolder;
};
SportsUI.LangPanel.prototype.build = function () {

    this.background = CC.Utility.pixiAtlasSprite("splash_basketzorb.png");

    this.baseFrame = CC.Utility.pixiAtlasSprite("language_panel.png");

    this.yesFunc = function () {
        COPY_DECK.currentLanguage = optionsId[this.languageSlider.selection];
        SS.setLanguageRegion(COPY_DECK.currentLanguage);
        localStorage.setItem("boomerang_all_stars_language_selection", COPY_DECK.currentLanguage);
        this.end();
        Game.sound.removeSounds();
        window.location.reload();
    };
    this.noFunc = function () {

        this.hide();
    };

    var optionsName = [];
    var optionsId = [];
    var key;
    var index = 0;
    for (key in COPY_DECK.languages) {
        optionsName.push(COPY_DECK.languages[key].display_name);
        optionsId.push(key);
        if (key === COPY_DECK.currentLanguage) {
            index = optionsId.length - 1;
        }
    }

    this.languageSlider = this.createSlider(optionsName);
    this.languageSlider.setValue(index);

    this.textTitle = SportsUI.createDisplayText(COPY_DECK.copy["button_language"], {size: 25}, true);
    this.textTitle.x = this.textTitle.top.width * -0.5;

    this.buttonYes = SportsUI.button("yes", this.yesFunc.bind(this));
    this.buttonCancel = SportsUI.button("cancel", this.noFunc.bind(this));


    this.languageSlider.y = 85;
    this.buttonYes.x = 127;
    this.buttonYes.y = this.languageSlider.y + 2;

    this.textTitle.y = -50;

    this.buttonCancel.x = 127;
    this.buttonCancel.y = -132;


    this.addChild(this.background);
    this.addChild(this.baseFrame);


    this.baseFrame.addChild(this.buttonYes);
    this.baseFrame.addChild(this.buttonCancel);
    this.baseFrame.addChild(this.textTitle);
    this.baseFrame.addChild(this.languageSlider);

    //this.visible = false;
    this.hitArea = new PIXI.Rectangle(-250, -250, 500, 500);
    this.interactive = true;
    this.click = this.tap = function (eventData) {
    };

    this.background.alpha = 0;
    this.baseFrame.y = 500;
    this.visible = false;

};
SportsUI.LangPanel.prototype.show = function () {


    this.visible = true;
    TweenLite.to(this.baseFrame, 0.5, {y: 0, ease: Back.easeOut});
    TweenLite.to(this.background, 0.5, {alpha: 1});
};
SportsUI.LangPanel.prototype.hide = function () {

    TweenLite.to(this.baseFrame, 0.5, {y: 500, ease: Back.easeIn});
    TweenLite.to(this.background, 0.5, {alpha: 0});
    TweenLite.delayedCall(0.5, (function () {
        this.visible = false;
    }).bind(this));

};
SportsUI.LangPanel.prototype.end = function () {

    TweenLite.to(this.baseFrame, 0.5, {y: 500, ease: Back.easeIn});
    TweenLite.delayedCall(0.5, (function () {
        Game.webApp.swapScreen(Game.StartScreen);
    }).bind(this));

};