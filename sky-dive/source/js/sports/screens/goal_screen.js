/**
 * Created by jonathan.kernick on 03/05/2017.
 */
Game.GoalScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xEEEEFF;
    Game.sound.stopMusic();
    Game.sound.play("game_intro_sting",0.3);
    this.build();

};
Game.GoalScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.GoalScreen.prototype.constructor = Game.GoalScreen;

Game.GoalScreen.prototype.build = function () {
    window.focus();
    // Get an access token, so we can submit a score at the end.
    SS.getAccessToken();
    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];

    var container = new PIXI.Container();

    var gameObject = new GoalGame(team);

    var tutorial = new SportsTutorial.Striker();
    var show = localStorage.getItem("boomerang_sports_app_tutorial_striker") === null;
    if(show) {
        Game.webApp.juggler.addTimeout(function(){
            tutorial.show();
            localStorage.setItem("boomerang_sports_app_tutorial_striker", "yes");
        }, 4.3);
    }

   var gameOverCallBack = function () {

        SS.updateTeamScores();
        Game.webApp.juggler.addTimeout(function(){
            countdownAnim.state.setAnimation(0, "game_end");
        },0.3);
        Game.webApp.juggler.addTimeout(function(){
        Game.webApp.swapScreen(Game.EndScreen, {
            icon: "goal",
            game: gameObject.goals,
            gameScreenClass: Game.GoalScreen,
            score: score
        });
        },1.5);
    };
    var advanceThreshold = 1;
    var advanceScale = 100;
    var advanceValue = 0;
    var totalAdvances = 0;

    gameObject.scoreCallBack = function (points) {
        //  var message = COPY_DECK.copy.rocket_reactions[3];
        //  var colour = 0xFFFFFF;
        advanceValue += points/advanceScale;
        if(advanceValue >= 1)
        {
            advanceValue = 0;
            totalAdvances++;
            gameObject.advanceGoal(totalAdvances);
        }

        score += points;
        scoreObject.setValue(score);
        //scoreObject.setValueBar(advanceValue);
    };

    this.backgroundFade = CC.Utility.pixiAtlasSprite("ui_background_0.png",{alpha:0});
    this.backgroundFade.show = function(){
        TweenLite.to(this,1,{alpha:1});
    };
    this.backgroundFade.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));

    var scoreObject = new SportsUI.ScorePanel();
    var timeObject = new SportsUI.TimerPanel();

    var goalsIndicator = new SportsUI.GamePointsPanel("ui_goal_panel.png");

    var gameOn = false;
    var startTimer = 3;
    scoreObject.visible = false;
    timeObject.visible = false;
    goalsIndicator.visible = false;

    var countdownAnim = new PIXI.spine.Spine(Game.animationList["countdown"]);

    countdownAnim.visible = false;
    countdownAnim.preWait = 4.5;
    CC.WebApp.current.juggler.addTimeout(function(){
        gameObject.introSequence.visible = false;
        gameObject.introSequence.parent.removeChild(gameObject.introSequence);
        gameObject.whiteFlash.alpha = 1;
        TweenLite.to(gameObject.whiteFlash,0.3,{alpha:0});
    }, 3);
    countdownAnim.preWaitOver = false;
    var countDown = 3;

    countdownAnim.y = 20;

    var completedLevel = false;

    countdownAnim.state.onEvent = function (i, event) {
        if (event.stringValue === "sound_beep") {

            Game.sound.play("beep");
        } else {

            if (!completedLevel) {
                setTimeout(function(){
                    Game.sound.play("tag_line_goal");
                },500);
                Game.sound.playMusic("pogo_music_0",0.3);
                completedLevel = true;
            }
            //  Interface.playMusic("ring_music_0");
            
            Game.sound.play("ball_start_whistle");
            
            scoreObject.visible = true;
            timeObject.visible = true;
            goalsIndicator.visible = true;
            gameObject.targetsShow = true;
            gameObject.gameStart();

        }
    };

    var score = 0;
    var timer = 60;
    var oldTimer = 60;

    var self = this;

    gameObject.update(0);

    var gameEndCalled = false;

    container.addChild(gameObject);
    container.addChild(scoreObject);
    container.addChild(timeObject);
    container.addChild(goalsIndicator);
    container.addChild(countdownAnim);
    container.addChild(tutorial);

    var oldGoals = 0;
    goalsIndicator.setValue(0);
    this.update = function (delta) {

        if(oldGoals !== gameObject.goals)
        {
            oldGoals = gameObject.goals;
            goalsIndicator.setValue(oldGoals);

        }
        oldTimer = Math.floor(timer);
        if (!countdownAnim.preWaitOver) {
            countdownAnim.preWait -= delta;
            if (countdownAnim.preWait < 0) {
                countdownAnim.preWaitOver = true;
                countdownAnim.visible = true;
                countdownAnim.state.setAnimation(0, "countdown");
            }
        }
        if (gameObject.gameRunning && Math.max(0, timer - delta) === 0 && !gameEndCalled) {
            gameEndCalled = true;
            gameObject.gameOver();
            TweenLite.delayedCall(1, gameOverCallBack);
        }
        else if(gameObject.gameRunning)
            {
                timer = Math.max(0, timer - delta);

        }
        gameObject.update(delta);
        if (oldTimer !== Math.floor(timer)) {
            timeObject.setValue(Math.floor(timer))

            if (timer < 11) {
                Game.sound.play("beep");
            }
        }
    };
    this.addChild(container);
    this.pausePanel = new SportsUI.PausePanel(Game.GoalScreen,false,tutorial);
    this.buttonPause = SportsUI.createButtonPause(this.pausePanel,false,tutorial);
    this.addChild(this.buttonPause);
    this.addChild(this.pausePanel);
    this.addChild(this.backgroundFade);
};