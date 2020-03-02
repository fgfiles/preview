/**
 * Created by jonathan.kernick on 02/05/2017.
 */
Game.GoalieScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xFF0000;
    Game.sound.stopMusic();
    Game.sound.play("game_intro_sting",0.3);
    this.build();

};
Game.GoalieScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.GoalieScreen.prototype.constructor = Game.GoalieScreen;
Game.GoalieScreen.prototype.build = function () {

    SS.getAccessToken();
    var container = new PIXI.Container();
    var self = this;
    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];

    this.backgroundFade = CC.Utility.pixiAtlasSprite("ui_background_0.png", {alpha: 0});
    this.backgroundFade.show = function () {
        TweenLite.to(this, 1, {alpha: 1});
    };
    this.backgroundFade.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));

    var tutorial = new SportsTutorial.Goalie();
    var show = localStorage.getItem("boomerang_sports_app_tutorial_goalie") === null
    if (show) {
        Game.webApp.juggler.addTimeout(function () {
            tutorial.show();
            localStorage.setItem("boomerang_sports_app_tutorial_goalie", "yes");
        }, 3.9);
    }

    var score = 0;

    var scoreFunc = function (points, perfect) {
        score += points;
        score = Math.max(0, score)
        scoreObject.setValue(score);

        ringCollectedIndicator.setValue((gameObject.score) + "");

        if (perfect) {
            var message = COPY_DECK.copy.rocket_reactions[2];
            var colour = 0xFFFFFF;
            reactionAnimFunc(message, colour);
        }

    };

    var completeFunc = function (bonus) {

        //console.log("bonus: " + bonus);
        SS.updateTeamScores();
        countdownAnim.state.setAnimation(0, "game_end");
        Game.webApp.juggler.addTimeout(function () {
            Game.webApp.swapScreen(Game.EndScreen, {
                icon: "goalie",
                game: gameObject.score,
                gameScreenClass: Game.GoalieScreen,
                score: Math.ceil(score)
            });
        }, 2.5);
        // TweenLite.delayedCall(1,CC.WebApp.current.swapScreen(self.createScoreScreen(score,Math.floor(bonus*1000))));
    };

    var gameObject = new GoalieGame(team);

    gameObject.scoreCallBack = scoreFunc;
    gameObject.completeCallBack = completeFunc;

    var countdownAnim = new PIXI.spine.Spine(Game.animationList["countdown"]);

    countdownAnim.visible = false;
    countdownAnim.preWait = 4;
    countdownAnim.preWaitOver = false;
    var countDown = 3;
    var gameCompleted = false;

    countdownAnim.y = 20;
    countdownAnim.state.onEvent = function (i, event) {
        if (event.stringValue === "sound_beep") {
            Game.sound.play("beep");
        } else {
            if (!gameCompleted) {
                Game.sound.playMusic("ring_music_0", 0.3);
                setTimeout(function(){
                    Game.sound.play("tag_line_goalie");
                }, 500);
            }

            Game.sound.play("ball_start_whistle");

            scoreObject.alpha = 1;
            ringCollectedIndicator.alpha = 1;
            timeObject.alpha = 1;
            gameObject.gameStart();
            setTimeout(function(){
               // countdownAnim.visible = false;
            },1000);
        }
    };

    var ringCollectedIndicator = new SportsUI.GamePointsPanel("tally_panel.png");
    ringCollectedIndicator.setValue('0');

    var scoreObject = new SportsUI.ScorePanel();
    scoreObject.alpha = 0;
    ringCollectedIndicator.alpha = 0;

    var timeObject = new SportsUI.TimerPanel();
    timeObject.alpha = 0;

    var score = 0;

    var reaction = SportsUI.createDisplayText("", {size: 40}, true);
    reaction.alpha = 0;
    var reactionAnimFunc = function (text, color) {
        reaction.alpha = 1;
        reaction.y = -150;
        reaction.setText(text);
        reaction.top.style.fill = color || 0xFFFFFF;
        reaction.x = reaction.top.width * -0.5;
        TweenLite.to(reaction, 1, {y: -100});
        TweenLite.to(reaction, 0.5, {delay: 0.5, alpha: 0});
    };

    // var reactionThresholds = [
    //     {limit: 1, message: COPY_DECK.copy.rocket_reactions[0], color: 0x56bced},//OK
    //     {limit: 10, message: COPY_DECK.copy.rocket_reactions[1], color: 0xf2f246},//GOOD 
    //     {limit: 20, message: COPY_DECK.copy.rocket_reactions[2], color: 0x70CE2C},//PERFECT
    // ];

    container.addChild(gameObject);
    container.addChild(scoreObject);
    container.addChild(ringCollectedIndicator);
    container.addChild(timeObject);
    container.addChild(reaction);
    container.addChild(countdownAnim);
    container.addChild(tutorial);

    this.update = function (delta) {
        if (!countdownAnim.preWaitOver) {
            countdownAnim.preWait -= delta;
            if (countdownAnim.preWait < 0) {
                countdownAnim.preWaitOver = true;
                countdownAnim.visible = true;
                countdownAnim.state.setAnimation(0, "countdown");
            }
        }
        gameObject.update(delta);
        ringCollectedIndicator.x = Game.webApp.screenWidth * 0.5;

        timeObject.setValue(gameObject.timePlayed);
    };

    this.addChild(container);
    this.pausePanel = new SportsUI.PausePanel(Game.GoalieScreen, false, tutorial);
    this.buttonPause = SportsUI.createButtonPause(this.pausePanel, false, tutorial);
    this.addChild(this.buttonPause);
    this.addChild(this.pausePanel);
    this.addChild(this.backgroundFade);
};

