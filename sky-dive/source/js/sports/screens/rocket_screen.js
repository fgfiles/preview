/**
 * Created by jonathan.kernick on 03/05/2017.
 */
Game.RocketScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xEEEEFF;
    Game.sound.stopMusic();
    Game.sound.play("game_intro_sting",0.3);
    this.build();

};
Game.RocketScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.RocketScreen.prototype.constructor = Game.RocketScreen;


Game.RocketScreen.prototype.build = function () {
    window.focus();
    // Get an access token, so we can submit a score at the end.
    SS.getAccessToken();
    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];

    var container = new PIXI.Container();

    var gameObject = new RocketGame(team);

    var tutorial = new SportsTutorial.Rocket();
    var show = localStorage.getItem("boomerang_sports_app_tutorial_rocket") === null;
    if(show)
    {
        Game.webApp.juggler.addTimeout(function(){

            tutorial.show();
            localStorage.setItem("boomerang_sports_app_tutorial_rocket", "yes");
        },1);
    }

    var gameOverCallBack = function () {

        SS.updateTeamScores();
        Game.webApp.juggler.addTimeout(function(){
            countdownAnim.state.setAnimation(0,"game_end");
        },0.3);
        Game.webApp.juggler.addTimeout(function(){
        Game.webApp.swapScreen(Game.EndScreen, {
            icon: "rocket",
            game: gameObject.targetHits,
            gameScreenClass: Game.RocketScreen,
            score: score
        });
        },1.5);
    };


    this.backgroundFade = CC.Utility.pixiAtlasSprite("ui_background_0.png",{alpha:0});
    this.backgroundFade.show = function(){
        TweenLite.to(this,1,{alpha:1});
    };
    this.backgroundFade.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));


    var scoreObject = new SportsUI.ScorePanel();
    var timeObject = new SportsUI.TimerPanel();
    var reaction = SportsUI.createDisplayText(this.gameValue + "", {size: 40}, true);
    
    

    var gameOn = false;
    var startTimer = 3;
    scoreObject.visible = false;
    timeObject.visible = false;


    //reaction.anchor.set(0.5);
    reaction.alpha = 0;
    var reactionAnimFunc = function (text,color) {
        reaction.alpha = 1;
        reaction.y = -150;
        reaction.setText(text);
        reaction.top.style.fill = color || 0xFFFFFF;
        reaction.x = reaction.top.width * -0.5;
        TweenLite.to(reaction, 1, {y: -100});
        TweenLite.to(reaction, 0.5, {delay: 0.5, alpha: 0});
    };

    var reactionThresholds = [
        {limit: 1, message: COPY_DECK.copy.rocket_reactions[0], points: 3, color: 0x56bced},//OK
        {limit: 0.6, message: COPY_DECK.copy.rocket_reactions[1], points: 6, color: 0xf2f246},//GOOD 
        {limit: 0.2, message: COPY_DECK.copy.rocket_reactions[2], points: 12, color: 0x70CE2C},//PERFECT
    ];


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
                Game.sound.playMusic("pogo_music_0",0.3);
                setTimeout(function(){
                    Game.sound.play("tag_line_rocket");
                },500);
                completed = true;
            }
            Game.sound.play("ball_start_whistle");
            //  Interface.playMusic("ring_music_0");
            
            scoreObject.visible = true;
            timeObject.visible = true;
            gameObject.gameStart();

        }
    };

    var score = 0;
    var timer = 60;
    var oldTimer = 60;

    gameObject.scoreCallBack = function (accuracy, multiplier, bad) {
        var message = COPY_DECK.copy.rocket_reactions[3];
        var colour = 0xFFFFFF;
        var points = 0, threshold;
        if (timer && accuracy < 1) {
            if (!bad) {
                var i = 0, length = reactionThresholds.length;
                for (i; i < length; ++i) {
                    threshold = reactionThresholds[i];
                    if (threshold.limit > accuracy) {
                        message = threshold.message;
                        points = threshold.points;
                        colour = threshold.color;
                    }
                }
                score += points;
            }
            else {
                message = COPY_DECK.copy.rocket_reactions[4];
                points = -2;
                colour = 0xf51444;
            }
        }
        score = Math.max(0, score + points);
        scoreObject.setValue(score);
        reactionAnimFunc(message,colour);
    };

    var self = this;

    gameObject.update(0);

    container.addChild(gameObject);
    container.addChild(reaction);
    container.addChild(scoreObject);
    container.addChild(timeObject);
    container.addChild(countdownAnim);
    container.addChild(tutorial);


    this.update = function (delta) {
        oldTimer = Math.floor(timer);
        if (!countdownAnim.preWaitOver) {
            countdownAnim.preWait -= delta;
            if (countdownAnim.preWait < 0) {
                countdownAnim.preWaitOver = true;
                countdownAnim.visible = true;
                countdownAnim.state.setAnimation(0, "countdown");
                gameObject.target.show();
            }
        }
        if (timer !== 0 && Math.max(0, timer - delta) === 0) {
            gameObject.gameOver();
            TweenLite.delayedCall(1, gameOverCallBack);
        }
        timer = Math.max(0, timer - delta);
        gameObject.update(delta);
        if (oldTimer !== Math.floor(timer)) {
            timeObject.setValue(Math.floor(timer))

            if (timer < 11) {
                Game.sound.play("beep");
            }
        }
    };
    this.addChild(container);
    this.pausePanel = new SportsUI.PausePanel(Game.RocketScreen,false,tutorial);
    this.buttonPause = SportsUI.createButtonPause(this.pausePanel,false,tutorial);
    this.addChild(this.buttonPause);
    this.addChild(this.pausePanel);
    this.addChild(this.backgroundFade);
};