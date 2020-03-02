/**
 * Created by jonathan.kernick on 02/05/2017.
 */
Game.SkyScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xFF0000;
    Game.sound.stopMusic();
    Game.sound.play("game_intro_sting",0.3);
    this.build();

};
Game.SkyScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.SkyScreen.prototype.constructor = Game.SkyScreen;
Game.SkyScreen.prototype.build = function () {

    SS.getAccessToken();
    var container = new PIXI.Container();
    var self = this;
    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];

    this.backgroundFade = CC.Utility.pixiAtlasSprite("ui_background_0.png", {alpha: 0});
    this.backgroundFade.show = function () {
        TweenLite.to(this, 1, {alpha: 1});
    };
    this.backgroundFade.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));


    var tutorial = new SportsTutorial.Sky();
    var show = localStorage.getItem("boomerang_sports_app_tutorial_sky") === null
    if (show) {
        Game.webApp.juggler.addTimeout(function () {

            tutorial.show();
            localStorage.setItem("boomerang_sports_app_tutorial_sky", "yes");
        }, 1);
    }

    var scoreFunc = function (points) {
        // score += points;
        score += points;
        score = Math.max(0, score)
        if (points >= 0) {
            reactionAnimFunc("+" + points)
        }
        else {
            reactionAnimFunc("" + points)
        }
        scoreObject.setValue(score);
        ringCollectedIndicator.setValue((gameObject.ringsCollected + 1) + "");

    };

    var completeFunc = function (bonus) {

        //console.log("bonus: " + bonus);
        SS.updateTeamScores();
        countdownAnim.state.setAnimation(0, "game_end");
        Game.webApp.juggler.addTimeout(function () {
            Game.webApp.swapScreen(Game.EndScreen, {
                icon: "sky",
                game: gameObject.ringsCollected,
                gameScreenClass: Game.SkyScreen,
                score: Math.ceil(score + bonus)
            });
        }, 2.5);
        // TweenLite.delayedCall(1,CC.WebApp.current.swapScreen(self.createScoreScreen(score,Math.floor(bonus*1000))));
    };

    var gameObject = new SkydiveGame(scoreFunc, completeFunc, team);

    var countdownAnim = new PIXI.spine.Spine(Game.animationList["countdown"]);

    countdownAnim.visible = false;
    countdownAnim.preWait = 1.5;
    countdownAnim.preWaitOver = false;
    var countDown = 3;

    countdownAnim.y = 20;
    var completed = false;
    countdownAnim.state.onEvent = function (i, event) {
        if (event.stringValue === "sound_beep") {

            Game.sound.play("beep");
        } else {
            if (!completed) {
                Game.sound.playMusic("ring_music_0", 0.3);
                
                setTimeout(function(){
                    Game.sound.play("tag_line_sky");
                },500);
                completed = true;
            }
            Game.sound.play("ball_start_whistle");
            scoreObject.alpha = true;
            ringCollectedIndicator.alpha = true;
            // gameObject.gameStart();
        }
    };

    var ringCollectedIndicator = new SportsUI.GamePointsPanel("ui_sky_icon_panels.png");

    var scoreObject = new SportsUI.ScorePanel();
    scoreObject.alpha = false;
    ringCollectedIndicator.alpha = false;
    var reaction = new PIXI.Text("Time: 60", {font: "50px Arial", fill: 0x0});
    reaction.alpha = 0;
    var score = 0;
    reaction.anchor.set(0.5);
    var reactionAnimFunc = function (text) {
        reaction.alpha = 1;
        reaction.y = -250;
        reaction.text = text;
        TweenLite.to(reaction, 0.5, {y: -450, alpha: 0});
    };


    container.addChild(gameObject);
    container.addChild(scoreObject);
    container.addChild(ringCollectedIndicator);
    //container.addChild(reaction);
    container.addChild(countdownAnim);
    container.addChild(tutorial);
   // container.addChild(this.backgroundFade);
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
    };

    this.addChild(container);
    this.pausePanel = new SportsUI.PausePanel(Game.SkyScreen, false, tutorial);
    this.buttonPause = SportsUI.createButtonPause(this.pausePanel, false, tutorial);
    this.addChild(this.buttonPause);
    this.addChild(this.pausePanel);
    this.addChild(this.backgroundFade);
};