/**
 * Created by jonathan.kernick on 24/04/2017.
 */
Game.EndScreen = function (config) {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xFF0000;

    var lookUp = {};
    for (var i = 0; i < SS.games.length; ++i) {
        lookUp[SS.games[i].name] = i;
    }
    var gameNum = lookUp[SS.currentSelectedGame];

    var nextScreen = function () {
        Game.hardSwapScreen("dat/manifests/manifest_menu.json", Game.StartScreen, Game.LoadScreen);
    };

    var homeScreen = function () {
        Game.hardSwapScreen("dat/manifests/manifest_menu.json", Game.StartScreen, Game.LoadScreen);
    };

    var replayScreen = function () {
        Game.webApp.swapScreen(config.gameScreenClass);
    };

    if (SS.isStadium) {
        this.background = CC.Utility.pixiAtlasSprite("stadium_night_bg.png");
    } else {
        this.background = CC.Utility.pixiAtlasSprite("ui_background_0.png");
        this.background.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));
    }

    var recordString = "-";
    var gameString = "-";
    var recordBroken = false;

    this.prevRecord = localStorage.getItem("boomerang_all_stars_records_game_" + gameNum);
    if (this.prevRecord === null) {
        this.prevRecord = -1;
    }

    if (SS.currentSelectedGame === "Rubber Ring Race") {
        var raceMinute = Math.floor(config.game / 60) % 60;
        var raceSeconds = Math.floor(config.game % 60);
        gameString = raceMinute + ":" + CC.Utility.intToString(raceSeconds, 2);
        if (Number(config.game) < Number(this.prevRecord) || this.prevRecord === -1) {
            localStorage.setItem("boomerang_all_stars_records_game_" + gameNum, config.game);
        }
        raceMinute = Math.floor(this.prevRecord / 60) % 60;
        raceSeconds = Math.floor(this.prevRecord % 60);
        recordString = raceMinute + ":" + CC.Utility.intToString(raceSeconds, 2);
    }
    else {
        var mValue = (COPY_DECK.currentLanguage === "ru-ru") ? "M" : "m";
        gameString = config.game + "";
        if (SS.currentSelectedGame === "Beach Pogo") {
            gameString = gameString + mValue
        }
        if (Number(config.game) > Number(this.prevRecord)) {
            localStorage.setItem("boomerang_all_stars_records_game_" + gameNum, config.game);
            recordBroken = true;
        }

        recordString = this.prevRecord + "";
        if (SS.currentSelectedGame === "Beach Pogo") {
            recordString = recordString + mValue
        }
    }

    if (this.prevRecord === -1 || recordBroken) {
        recordString = gameString;
    }

    var starLookUpTable = [
        [30,120],//pogo
        [90,50],//ring
        [10,20],//ball
        [5,20],//rocket
        [5,25],//sky
        [5,25],//goal
        [5,25]//uppy
    ];

    starLookUpTable = starLookUpTable[gameNum];

    var starCount = Math.floor(Math.clamp(0, 1, Math.value(starLookUpTable[0], starLookUpTable[1], Number(config.game))) * 5);

    this.panel = new SportsUI.EndPanel(
        config.icon,
        replayScreen,
        nextScreen,
        homeScreen,
        config.score,
        gameString,
        recordString,
        starCount
    );

    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];
    var savedStarCount = localStorage.getItem("boomerang_all_stars_team_"+ Number(team) + "_game_" + gameNum + "_star_count");
    if(savedStarCount === null || Number(savedStarCount) < starCount) {
       localStorage.setItem("boomerang_all_stars_team_"+ Number(team) + "_game_" + gameNum + "_star_count",starCount+"");
    }

    var totalScore = localStorage.getItem("boomerang_all_stars_total_score");
    if(totalScore === null) {
        totalScore = 0;
    } else {
        totalScore = Number(totalScore);
    }
    totalScore += Number(config.score);
    localStorage.setItem("boomerang_all_stars_total_score", totalScore);

    SS.sendScore(config.score);

    this.graphic = new PIXI.Graphics();
    var self = this;
    this.graphic.beginFill(0xFFFFFF);
    TweenLite.to(this.graphic, 0.3, {delay: 0.1, alpha: 0, onComplete: function() {
        self.panel.alpha = 1;
        self.panel.show();
    }});
    this.graphic.drawRect(-500, -500, 1000, 1000);

    this.characterA = new PIXI.spine.Spine(Game.animationList["end_character_" + (team * 2)]);
    this.characterB = new PIXI.spine.Spine(Game.animationList["end_character_" + ((team * 2) + 1)]);

    if(team+"" === "4") {
        this.characterA.cloud = new PIXI.spine.Spine(Game.animationList["cloud"]);
        this.characterA.cloud.state.setAnimation(0, "idle", true);
        //this.characterA.cloud.x = -20;
        this.characterA.cloud.y = -250;
        this.characterA.cloud.scale.set(1.5);
        this.characterA.addChild(this.characterA.cloud);
    }

    this.characterA.state.setAnimation(0, "animation", true);
    this.characterB.state.setAnimation(0, "animation", true);

    TweenLite.to(this.characterA,0.2,{delay:0.8,y:200});
    TweenLite.to(this.characterB,0.2,{delay:0.9,y:200});

    this.characterA.y = this.characterB.y = 600;
    this.characterA.x = 220;
    this.characterB.x = -220;
    this.addChild(this.background);
    this.addChild(this.panel);
    this.addChild(this.characterA);
    this.addChild(this.characterB);
    this.addChild(this.graphic);
    this.panel.alpha = 0;
};

Game.EndScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.EndScreen.prototype.constructor = Game.EndScreen;
Game.EndScreen.prototype.update = function(delta){
    this.panel.update(delta);
};