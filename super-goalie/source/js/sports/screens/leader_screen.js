/**
 * Created by jonathan.kernick on 04/05/2017.
 */

Game.LeaderScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xFFDDDD;
    Game.sound.playMusic("music_screens", 0.3);
    this.build();

    Game.webApp.renderer.roundPixels = true;
};
Game.LeaderScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.LeaderScreen.prototype.constructor = Game.LeaderScreen;

Game.LeaderScreen.prototype.createEntry = function (pos, name, dir, index) {

    var entry = CC.Utility.pixiAtlasSprite("leaderboard_slot_" + Math.modo(pos, 2) + ".png");

    var dirList = ["down", "stay", "up"];

    var textName = SportsUI.createDisplayText(name, {size: 20,maxSize:220}, true);
    var textNumber = SportsUI.createDisplayText(pos + 1, {size: 20}, true);
    var displacement = CC.Utility.pixiAtlasSprite("leaderboard_" + dirList[dir] + ".png");

    if(COPY_DECK.copy["flip"]){

        textNumber.x = 160;
        textName.x = 130-textName.top.width;
        displacement.x = -145;
    } else {
        textNumber.x = -150;
        textName.x = -100;
        displacement.x = 166;
    }

    entry.addChild(textName);
    entry.addChild(textNumber);
    entry.addChild(displacement);

    return entry;
};
Game.LeaderScreen.prototype.build = function () {

    SS.updateTeamScores();
    Game.shuffleMode = false;

    this.background = CC.Utility.pixiAtlasSprite("ui_background_0.png");
    this.background.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));

    this.feedBackBar = CC.Utility.pixiAtlasSprite("feed_back_bar.png");

    var lookupTable = {
        "Looney Tunes": 0,
        "New Loony Tunes": 1,
        "The Tom and Jerry Show": 2,
        "Be Cool Scooby-Doo": 3,
        "Bunnicula": 4,
        "The Happos Family": 5,
        "Dorothy and the Wizard of Oz": 6,
        "Wacky Races": 7
    };

    var funcBack = function () {
        Game.webApp.renderer.roundPixels = false;
        Game.webApp.swapScreen(Game.StartScreen)
    };
    var funcNext = function () {
        Game.webApp.renderer.roundPixels = false;
        Game.webApp.swapScreen(Game.SelectScreen)
    };

    this.buttonBack = SportsUI.button("left", funcBack);
    this.buttonNext = SportsUI.button("right", funcNext);

    this.feedBackText = SportsUI.createDisplayText(COPY_DECK.copy.leader_board_title, {size: 25, maxSize: 220}, true);
    this.feedBackText.x = this.feedBackText.width * -0.5;

    this.feedBackBar.y = -165;
    this.feedBackText.y = -5;

    this.settingsPanel = new SportsUI.PausePanel(Game.StartScreen, true);
    this.buttonSettings = SportsUI.createButtonPause(this.settingsPanel, true);

    this.entrys = [];

    this.entryHolder = new PIXI.Container();
    this.entryHolder.y = -110;

    var i = 0, length = 8, entry;
    //parse last sample
    var leaderBoardOldState = localStorage.getItem("boomerang_all_stars_leaderboard_flash");

    if (leaderBoardOldState === null) {
        leaderBoardOldState = {pos: [-1, -1, -1, -1, -1, -1, -1, -1]};
    }
    else {
        leaderBoardOldState = JSON.parse(leaderBoardOldState);
    }

    var leaderBoard = SS.leaderboard;

    if (leaderBoard === null || !leaderBoard.length) {
        var cacheLeaderBoard = localStorage.getItem("boomerang_all_stars_leaderboard_cache");
        if (cacheLeaderBoard === null) {
            leaderBoard = [];
            for (i; i < length; ++i) {
                leaderBoard[i] = {team_name: SS.teams[i].name, pos: i};
            }
        }
        else {
            cacheLeaderBoard = JSON.parse(cacheLeaderBoard);
            leaderBoard = cacheLeaderBoard
        }
        i = 0;
    }
    else {
        localStorage.setItem("boomerang_all_stars_leaderboard_cache", JSON.stringify(leaderBoard));
    }

    for (i; i < leaderBoard.length; ++i) {
        var leaderboardTeamName = leaderBoard[i].team_name;
        if (leaderboardTeamName == 'Wabbit') { leaderboardTeamName = 'New Loony Tunes'; }
        var index = lookupTable[leaderboardTeamName];
        var dir = leaderBoardOldState.pos[index];
        if (dir === -1 || !dir) {
            dir = 1;
        } else {
            dir = Math.clamp(-1, 1, dir - i) + 1;
        }

        entry = this.createEntry(i, COPY_DECK.copy.team_names[index], dir, index);
        // console.log(leaderBoard[i]);
        entry.y = (i * 39.2);
        this.entryHolder.addChild(entry);
        leaderBoardOldState.pos[index] = i;

        entry.scale.x = entry.scale.y = 0.8;

        var icon = CC.Utility.pixiAtlasSprite("team_shield_icon_" + index + ".png");
        icon.x = entry.x - entry.width/2;
        icon.y = entry.y;
        this.entryHolder.addChild(icon);

        if (COPY_DECK.copy["flip"]) {
            icon.x = 145;
        } else {
            icon.x = -145;
        }
    }

    localStorage.setItem("boomerang_all_stars_leaderboard_flash", JSON.stringify(leaderBoardOldState));


    this.update = function (delta) {
        this.buttonBack.x = (Game.webApp.screenWidth - 50) * -0.5 + 10;
        this.buttonBack.y = (Game.webApp.screenHeight - 50) * -0.5 + 10;
        this.buttonNext.x = (Game.webApp.screenWidth - 50) * 0.5 - 10;
        this.buttonNext.y = (Game.webApp.screenHeight - 50) * 0.5 - 10;
    };

    this.addChild(this.background);
    this.addChild(this.entryHolder);

    this.addChild(this.feedBackBar);
    this.addChild(this.buttonBack);
    // this.addChild(this.buttonNext);
    this.feedBackBar.addChild(this.feedBackText);
    this.addChild(this.buttonSettings);
    this.addChild(this.settingsPanel);
};