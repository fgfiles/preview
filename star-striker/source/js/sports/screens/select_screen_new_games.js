/**
 * Created by jonathan.kernick on 04/05/2017.
 */

Game.SelectScreenNewGames = function (config) {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xFFDDDD;
    Game.sound.stopAll();
    Game.sound.playMusic("music_screens", 0.3);

    var num = _.random(1, 4);
    Game.sound.play("Audience_Cheer_0" + num);

    this.build(config);

    SS.isStadium = true;
};
Game.SelectScreenNewGames.prototype = Object.create(Game.BaseScreen.prototype);
Game.SelectScreenNewGames.prototype.constructor = Game.SelectScreenNewGames;
Game.SelectScreenNewGames.prototype.createIcon = function (shieldIconName, textContent, starCount) {

    var iconHolder = new PIXI.Container();
    iconHolder.shield = CC.Utility.pixiAtlasSprite(shieldIconName);

    iconHolder.ribbonTop = new PIXI.Container();
    iconHolder.ribbonBottom = new PIXI.Container();
    iconHolder.ribbonLeft = CC.Utility.pixiAtlasSprite("ribbon_left.png", {anchor: "r"});
    iconHolder.ribbonMiddle = CC.Utility.pixiAtlasSprite("ribbon_middle.png");
    iconHolder.ribbonRight = CC.Utility.pixiAtlasSprite("ribbon_right.png", {anchor: "l"});
    iconHolder.ribbonLeftShadow = CC.Utility.pixiAtlasSprite("ribbon_left_shadow.png", {anchor: "r"});
    iconHolder.ribbonMiddleShadow = CC.Utility.pixiAtlasSprite("ribbon_middle_shadow.png");
    iconHolder.ribbonRightShadow = CC.Utility.pixiAtlasSprite("ribbon_right_shadow.png", {anchor: "l"});
    iconHolder.ribbonText = SportsUI.createDisplayText(textContent, {size: 20, maxSize: 220}, true);

    iconHolder.ribbonText.x = iconHolder.ribbonText.top.width * -0.5;
    iconHolder.ribbonText.y = -15;
    iconHolder.ribbonLeft.x = iconHolder.ribbonLeftShadow.x = iconHolder.ribbonText.x;
    iconHolder.ribbonRight.x = iconHolder.ribbonRightShadow.x = -iconHolder.ribbonText.x;
    iconHolder.ribbonMiddle.width = iconHolder.ribbonText.width + 4;
    iconHolder.ribbonMiddleShadow.width = iconHolder.ribbonText.width + 4;

    iconHolder.ribbonBottom.y = iconHolder.ribbonTop.y = 100;

    iconHolder.ribbonBottom.addChild(iconHolder.ribbonLeftShadow);
    iconHolder.ribbonBottom.addChild(iconHolder.ribbonMiddleShadow);
    iconHolder.ribbonBottom.addChild(iconHolder.ribbonRightShadow);
    iconHolder.ribbonTop.addChild(iconHolder.ribbonLeft);
    iconHolder.ribbonTop.addChild(iconHolder.ribbonMiddle);
    iconHolder.ribbonTop.addChild(iconHolder.ribbonRight);
    iconHolder.ribbonTop.addChild(iconHolder.ribbonText);

    if (starCount !== undefined) {
        iconHolder.starBar = CC.Utility.pixiAtlasSprite("shield_star_base.png");
        iconHolder.starBar.update = function () {
            this.y = Math.abs(this.parent.x) * 0.1 + 53;
        };
        Game.webApp.juggler.addObject(iconHolder.starBar);

        var i = 0, length = 5, star;
        for (i; i < length; ++i) {
            star = CC.Utility.pixiAtlasMovieClip(["shield_star_empty.png", "shield_star_full.png"]);
            star.x = (i - (length - 1) * 0.5) * 20;
            iconHolder.starBar.addChild(star);
        }
        iconHolder.setStars = function (starAmount) {
            var i = 0, length = 5;
            for (i; i < length; ++i) {
                this.starBar.children[i].gotoAndStop(i < starAmount);
            }
        }
    }

    iconHolder.addChild(iconHolder.ribbonBottom);
    iconHolder.addChild(iconHolder.shield);

    if (starCount !== undefined) {
        iconHolder.addChild(iconHolder.starBar);
    }
    iconHolder.addChild(iconHolder.ribbonTop);

    return iconHolder;
};
Game.SelectScreenNewGames.prototype.createCarousel = function (items, selectCallBack, selectChangeCallBack) {

    var carouselHolder = new PIXI.Container();
    carouselHolder.items = [];
    var hideHeight = 500;
    var i = 0, length = items.length, item;
    for (i; i < length; ++i) {
        item = items[i];
        item.y = hideHeight;
        carouselHolder.addChild(item);
        carouselHolder.items.push(item);
    }

    carouselHolder.spread = 350;

    carouselHolder.buttonLeftFunc = function () {

        if (TweenLite.getTweensOf(this).length > 0 ) {
            return;
        }

        if (area.grabbed) {
            this.targetOffset--;
            TweenLite.to(this, 0.9, {ease: Back.easeOut, offset: this.targetOffset})
        } else {
            this.targetOffset++;
            TweenLite.to(this, 0.9, {ease: Back.easeOut, offset: this.targetOffset})
        }
        if (selectChangeCallBack) {

            TweenLite.delayedCall(0.9, function () {
                var selectionIndex = Math.modo(-carouselHolder.targetOffset, length);
                selectChangeCallBack(selectionIndex);
            });
        }
        area.grabbed = false;
    };
    carouselHolder.buttonRightFunc = function () {

        if (TweenLite.getTweensOf(this).length > 0 ) {
            return;
        }

        if (!area.grabbed) {
            this.targetOffset--;
            TweenLite.to(this, 0.9, {ease: Back.easeOut, offset: this.targetOffset});
        } else {
            this.targetOffset++;
            TweenLite.to(this, 0.9, {ease: Back.easeOut, offset: this.targetOffset});
        }
        if (selectChangeCallBack) {
            TweenLite.delayedCall(0.8, function () {
                var selectionIndex = Math.modo(-carouselHolder.targetOffset, length);
                selectChangeCallBack(selectionIndex);
            });
        }
        area.grabbed = false;
    };
    
    carouselHolder.buttonTickFunc = function () {
        var selectionIndex = Math.modo(-this.targetOffset, length);
        selectCallBack(selectionIndex);
    };

    carouselHolder.setPos = function (pos) {
        this.targetOffset = Math.round(-pos);
        this.offset = this.targetOffset;
    };

    carouselHolder.interactiveArea = new PIXI.Container();
    var area = carouselHolder.interactiveArea;
    carouselHolder.interactiveArea.interactive = true;

    carouselHolder.interactiveArea.hitArea = new PIXI.Rectangle(-300, -100, 600, 200);

    area.mousedown = area.touchstart = function (event) {
        this.startMousePos = event.data.getLocalPosition(this).x;
        this.grabbed = true;
    };
    area.mousemove = area.touchmove = function (event) {
    };
    area.mouseup = area.touchend = function (event) {
      if (this.grabbed) {
        this.grabbed = false;
        var mousePos = event.data.getLocalPosition(this);
        var diff = this.startMousePos - mousePos.x;
        if (Math.abs(diff) > 5) {
            if (diff > 0) {
                this.parent.buttonRightFunc();
            } else {
                this.parent.buttonLeftFunc();
            }
        } else {
            if (CC.Geometry.vectorLengthSquared(mousePos) < 100 * 100) {
                carouselHolder.buttonTickFunc.call(carouselHolder)
            }
        }
      }
    };

    carouselHolder.buttonTick = SportsUI.button("tick", carouselHolder.buttonTickFunc.bind(carouselHolder));
    carouselHolder.buttonLeft = SportsUI.button("carousel_left", carouselHolder.buttonLeftFunc.bind(carouselHolder));
    carouselHolder.buttonRight = SportsUI.button("carousel_right", carouselHolder.buttonRightFunc.bind(carouselHolder));

    carouselHolder.buttonLeft.x = -150;
    carouselHolder.buttonRight.x = 150;
    carouselHolder.buttonLeft.y = hideHeight;
    carouselHolder.buttonRight.y = hideHeight;
    carouselHolder.buttonTick.y = hideHeight;

    carouselHolder.hide = function () {
        this.update();
        var i = 0, item, delay, length = this.children.length;
        for (i; i < length; ++i) {
            item = this.children[i];
            delay = Math.abs(item.x / this.spread) * 0.3;
            TweenLite.to(item, 0.5, {delay: delay, y: hideHeight, ease: Back.easeIn});
        }
    };
    carouselHolder.show = function () {
        this.update();
        var i = 0, item, delay, length = this.children.length;
        for (i; i < length; ++i) {
            item = this.children[i];
            delay = Math.abs(item.x / this.spread) * 0.3 + 0.6;
            if (item === this.buttonTick) {
                TweenLite.to(item, 0.5, {delay: delay, y: 150, ease: Back.easeOut});
            } else {
                TweenLite.to(item, 0.5, {delay: delay, y: 0, ease: Back.easeOut});
            }
        }
    };

    carouselHolder.offset = Math.floor(Math.random() * length);
    carouselHolder.targetOffset = carouselHolder.offset;
    carouselHolder.update = function (delta) {
        var i = 0, length = this.items.length, item;
        var halfLength = Math.floor(length * 0.5);
        for (i; i < length; ++i) {
            item = this.items[i];
            item.x = (Math.modo(i + halfLength + this.offset, length) - halfLength) * this.spread;
        }
    };
    carouselHolder.addChild(carouselHolder.interactiveArea);
    carouselHolder.addChild(carouselHolder.buttonLeft);
    carouselHolder.addChild(carouselHolder.buttonRight);
    carouselHolder.addChild(carouselHolder.buttonTick);

    return carouselHolder;
};
Game.SelectScreenNewGames.prototype.build = function (config) {
    Game.shuffleMode = false;

    this.background = CC.Utility.pixiAtlasSprite("stadium_night_bg.png");

    this.gameCarouselItems = [
        {name: "game_shield_play_all_2.png", text: "Play All"},
        {name: "game_shield_star_striker.png", text: "Star Striker"},
        {name: "game_shield_super_goalie.png", text: "Super Goalie"},
        {name: "game_shield_play_all_2.png", text: "Play All"},
        {name: "game_shield_star_striker.png", text: "Star Striker"},
        {name: "game_shield_super_goalie.png", text: "Super Goalie"}
    ];
    this.characterCarouselItems = [
        {name: "team_shield_0.png", text: "Looney Tunes"},
        {name: "team_shield_1.png", text: "New Loony Tunes"},
        {name: "team_shield_2.png", text: "The Tom and Jerry Show"},
        {name: "team_shield_3.png", text: "Be Cool Scooby-Doo"},
        {name: "team_shield_4.png", text: "Bunnicula"},
        {name: "team_shield_5.png", text: "The Happos Family"},
        {name: "team_shield_6.png", text: "Dorothy and the Wizard of Oz"},
        {name: "team_shield_7.png", text: "Wacky Races"}
    ];

    this.chosenCharacter = 0;

    var i = 0, length = this.characterCarouselItems.length, item;
    for (i; i < length; ++i) {
        item = this.characterCarouselItems[i];
        this.characterCarouselItems[i] = this.createIcon(item.name, COPY_DECK.copy.team_names[i]);
    }
    i = 0;
    length = this.gameCarouselItems.length;
    for (i; i < length; ++i) {
        item = this.gameCarouselItems[i];

        var savedStarCount = 0;
        var gameText = "";
        if (i === 0 || i === 3) {
            savedStarCount = undefined;
            gameText = COPY_DECK.copy.play_all;
        } else {
            if (i === 1) {
                gameText = COPY_DECK.copy.game_names[5];
            } else if (i === 2) {
                gameText = COPY_DECK.copy.game_names[6];
            } else if (i === 4) {
                gameText = COPY_DECK.copy.game_names[5];
            } else if (i === 5) {
                gameText = COPY_DECK.copy.game_names[6];
            }
        }

        this.gameCarouselItems[i] = this.createIcon(item.name, gameText, savedStarCount);
    }

    var self = this;
    var gameSelect = false;
    var positionIndex;
    var positionTeamIndex;
    if (config) {
        gameSelect = !!config.selectGame;
        positionIndex = config.selectedIndex;
        positionTeamIndex = config.positionTeamIndex;
    }
    var characterCallBack = function (value) {
        self.chosenCharacter = value;
        gameSelect = true;

        var starStrikerStars = localStorage.getItem("boomerang_all_stars_team_" + value + "_game_5_star_count") || 0;
        var superGoalieStars = localStorage.getItem("boomerang_all_stars_team_" + value + "_game_6_star_count") || 0;

        var icon = self.gameCarouselItems[1];
        icon.setStars(Number(starStrikerStars));
        icon = self.gameCarouselItems[4];
        icon.setStars(Number(starStrikerStars));

        icon = self.gameCarouselItems[2];
        icon.setStars(Number(superGoalieStars));
        icon = self.gameCarouselItems[5];
        icon.setStars(Number(superGoalieStars));

        setTimeout(function() {
            Game.sound.stopAll(true, true);
            Game.sound.play("choose_game");
        }, 1000)

        SS.setCurrentTeam(self.chosenCharacter);
        self.characterCarousel.hide();
        self.gameCarousel.show();

        TweenLite.to(self.feedBackBar, 0.7, {delay: 0.7, y: -159});
        TweenLite.to(self.feedBackBar, 0.7, {
            y: -250, onComplete: function () {
                self.feedBackText.setText(COPY_DECK.copy.select_game);
                self.feedBackText.x = self.feedBackText.top.width * -0.5;
            }
        });
    };
    Game.lockSelection = false;

    var gamePrefixList = ["goal", "goalie", ""];
    var gameCallBack = function (value) {

        // {name: "game_shield_play_all_2.png", text: "Play All"},
        // {name: "game_shield_star_striker.png", text: "Star Striker"},
        // {name: "game_shield_super_goalie.png", text: "Super Goalie"},
        // {name: "game_shield_play_all_2.png", text: "Play All"},
        // {name: "game_shield_star_striker.png", text: "Star Striker"},
        // {name: "game_shield_super_goalie.png", text: "Super Goalie"}

        if (value === 0) {
            value = 3;
        } else if (value === 1) {
            value = 0;
        } else if (value === 2) {
            value = 1;
        } else if (value === 3) {
            value = 3;
        } else if (value === 4) {
            value = 0;
        } else if (value === 5) {
            value = 1;
        }
        console.log('selected game', value)
        if (!Game.lockSelection) {
            Game.lockSelection = true;
            SS.setCurrentGame(value + 5);
            switch (value) {
                case 0:
                  Game.hardSwapScreen("dat/manifests/manifest_goal.json", Game.GoalScreen, Game.LoadScreen);
                  break;

                case 1:
                  Game.hardSwapScreen("dat/manifests/manifest_goalie.json", Game.GoalieScreen, Game.LoadScreen);
                  break;

                case 3:
                    Game.shuffleMode = true;
                    Game.scrambleShuffle();
                    var gameValue = Game.shuffleOrderStadium[Game.shuffleCurrent];
                    Game.lockSelection = false;

                    SS.setCurrentGame(gameValue + 5);

                    if (gameValue === 0) {
                        Game.hardSwapScreen("dat/manifests/manifest_goal.json", Game.GoalScreen, Game.LoadScreen);
                    } else {
                        Game.hardSwapScreen("dat/manifests/manifest_goalie.json", Game.GoalieScreen, Game.LoadScreen);
                    }

                    //gameCallBack(gameValue);
                    break;
            }
        }

    };
    var funcBack = function () {
        if (!gameSelect) {
            Game.webApp.swapScreen(Game.StartScreen)
        } else {

            Game.sound.play("choose_team");
            gameSelect = false;
            self.characterCarousel.show();
            self.gameCarousel.hide();
            TweenLite.to(self.feedBackBar, 0.5, {delay: 0.7, y: -159});
            TweenLite.to(self.feedBackBar, 0.5, {
                y: -250, onComplete: function () {
                    self.feedBackText.setText(COPY_DECK.copy.select_team);
                    self.feedBackText.x = self.feedBackText.top.width * -0.5;
                }
            });
        }
    };

    this.buttonBack = SportsUI.button("left", funcBack);

    this.characterCarousel = this.createCarousel(this.characterCarouselItems, characterCallBack, function (selectionIndex) {
        Game.sound.play("team_name_" + selectionIndex);
    });

    this.gameCarousel = this.createCarousel(this.gameCarouselItems, gameCallBack, function (selectionIndex) {

        if (selectionIndex === 0) {
            selectionIndex = 3;
            Game.sound.play("all_games");
        } else if (selectionIndex === 1) {
            selectionIndex = 0;
        } else if (selectionIndex === 2) {
            selectionIndex = 1;
        } else if (selectionIndex === 3) {
            selectionIndex = 3;
            Game.sound.play("all_games");
        } else if (selectionIndex === 4) {
            selectionIndex = 0;
        } else if (selectionIndex === 5) {
            selectionIndex = 1;
        }

        var name = gamePrefixList[selectionIndex];
        if(name !== "") {
            Game.sound.play("title_" + name);
        }
    });


    if (gameSelect) {
        this.gameCarousel.show();
        this.gameCarousel.offset = 0;
        this.characterCarousel.hide();
        this.feedBackText = SportsUI.createDisplayText(COPY_DECK.copy.select_game, {size: 25, maxSize: 220}, true);
        Game.sound.play("choose_game");
        
    } else {
        this.characterCarousel.show();
        this.gameCarousel.hide();
        this.feedBackText = SportsUI.createDisplayText(COPY_DECK.copy.select_team, {size: 25, maxSize: 220}, true);
        Game.sound.play("choose_team");
        // this.feedBackText = SportsUI.createDisplayText("أحب اللغة العربية", {size: 25}, true);
    }

    if (positionIndex !== undefined) {
        
    }

    this.gameCarousel.setPos(0);

    // if (positionTeamIndex !== undefined) {
    //     this.characterCarousel.setPos(positionTeamIndex);
    //     var i = 0, length = 2, icon;
    //     for (i; i < length; ++i) {
    //         var savedStarCount = localStorage.getItem("boomerang_all_stars_team_" + positionTeamIndex + "_game_" + (i + 5) + "_star_count");
    //         icon = self.gameCarouselItems[i];
    //         if (savedStarCount === null) {
    //             savedStarCount = 0;
    //         }
    //         icon.setStars(Number(savedStarCount));
    //     }
    // }

    var starStrikerStars = localStorage.getItem("boomerang_all_stars_team_" + self.chosenCharacter + "_game_5_star_count") || 0;
    var superGoalieStars = localStorage.getItem("boomerang_all_stars_team_" + self.chosenCharacter + "_game_6_star_count") || 0;

    var icon = self.gameCarouselItems[1];
    icon.setStars(Number(starStrikerStars));
    icon = self.gameCarouselItems[4];
    icon.setStars(Number(starStrikerStars));

    icon = self.gameCarouselItems[2];
    icon.setStars(Number(superGoalieStars));
    icon = self.gameCarouselItems[5];
    icon.setStars(Number(superGoalieStars));

    this.feedBackBar = CC.Utility.pixiAtlasSprite("feed_back_bar.png");

    this.feedBackText.x = this.feedBackText.top.width * -0.5;

    this.feedBackBar.y = -159;
    this.feedBackText.y = -2;


    this.settingsPanel = new SportsUI.PausePanel(Game.StartScreen, true);
    this.buttonSettings = SportsUI.createButtonPause(this.settingsPanel, true);

    this.update = function (delta) {
        this.characterCarousel.update(delta);
        this.gameCarousel.update(delta);

        this.buttonBack.x = (Game.webApp.screenWidth - 50) * -0.5 + 10;
        this.buttonBack.y = (Game.webApp.screenHeight - 50) * -0.5 + 10;
    };

    this.addChild(this.background);
    this.addChild(this.characterCarousel);
    this.addChild(this.gameCarousel);
    this.addChild(this.feedBackBar);
    this.addChild(this.buttonBack);
    this.addChild(this.buttonSettings);
    this.addChild(this.settingsPanel);
    this.feedBackBar.addChild(this.feedBackText);
};
