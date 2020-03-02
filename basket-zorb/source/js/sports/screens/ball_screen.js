/**
 * Created by jonathan.kernick on 27/04/2017.
 */
Game.BallScreen = function(){
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xFF0000;
    this.build();
};
Game.BallScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.BallScreen.prototype.constructor = Game.BallScreen;




Game.BallScreen.prototype.build = function(){

    // Get an access token, so we can submit a score at the end.
    SS.getAccessToken();
    Game.sound.stopMusic();
    //Game.sound.play("crowd_start");
    Game.sound.play("game_intro_sting",0.3);
    var container = new PIXI.Container();
    var ballShadowHolder = new PIXI.Container();
    var ballHolder = new PIXI.Container();
    var streakTracker = 0;

    var tutorial = new SportsTutorial.Ball();
    var show = localStorage.getItem("boomerang_sports_app_tutorial_ball") === null
    if(show)
    {
        Game.webApp.juggler.addTimeout(function(){

            tutorial.show();
            localStorage.setItem("boomerang_sports_app_tutorial_ball", "yes");
        },1);
    }
    var ballPowerMul = (CC.isMobile) ? 1.5 : 1;

    this.backgroundFade = CC.Utility.pixiAtlasSprite("ui_background_0.png",{alpha:0});
    this.backgroundFade.show = function(){
        TweenLite.to(this,1,{alpha:1});
    };
    this.backgroundFade.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));

    var background = CC.Utility.pixiAtlasSprite("basketzorb_bg1.png");
    background.addChild(CC.Utility.pixiAtlasSprite("basketzorb_bg2.png"));
    var midground = CC.Utility.pixiAtlasSprite("basketzorb_mg1.png");
    midground.addChild(CC.Utility.pixiAtlasSprite("basketzorb_mg2.png"));

    var timerCountDown = 63;
    var oldCountDown = 63;
    var countdownWhistleSoundPlayed = false;

    var crowdA = new PIXI.spine.Spine(Game.animationList["basketzorb_crowd"]);
    var crowdB = new PIXI.spine.Spine(Game.animationList["basketzorb_crowd"]);
    crowdA.y = crowdB.y = 720*0.25;
    crowdB.scale.x = -1;
    window.crowdA = crowdA;
    crowdA.state.setAnimation(0, "idle1", true);
    crowdB.state.setAnimation(0, "idle2", true);
    crowdA.stateData.setMix("idle1", "react1", 0.3);
    crowdB.stateData.setMix("idle2", "react2", 0.3);
    crowdA.stateData.setMix("react1", "idle1", 0.3);
    crowdB.stateData.setMix("react2", "idle2", 0.3);
    //score and distance time display
    var totalScore = 0;
    var timeSize = Math.round(210 * 0.2);

    var timeText = CC.Utility.pixiAtlasSprite("time_panel.png", {
        anchor: "bl"
    });
    var timeTextOutside = new PIXI.extras.BitmapText("0", {
        font: timeSize + "px zorb_ball_font_outline",
        align: "center"
    });
    var timeTextInside = new PIXI.extras.BitmapText("10:15", {
        font: timeSize + "px zorb_ball_font",
        align: "center"
    });

    //"ui_ball_icon_panels.png"
    var scorePanel = new SportsUI.ScorePanel();
    var basketsPanel = new SportsUI.GamePointsPanel("ui_ball_icon_panels.png");
    timeText.addChild(timeTextOutside);
    timeText.addChild(timeTextInside);
    timeTextOutside.x = timeTextInside.x = 50;
    timeTextOutside.y = timeTextInside.y = -40;
    timeText.x = -160;
    timeText.y = 192;
    var target = CC.Utility.pixiAtlasSprite("tutorial_zorb.png", {
        scale: 2
    });
    var countdownAnim = new PIXI.spine.Spine(Game.animationList["countdown"]);
    target.x = 690*0.25;
    target.y = -130*0.25;
    countdownAnim.y = 5;
    var complete = false;
    countdownAnim.state.onEvent = function (i, event) {
        if (event.stringValue === "sound_beep") {

            Game.sound.play("beep");
        } else {
            if (!complete) {
                Game.sound.playMusic("ball_music_0",0.3);
                setTimeout(function(){
                    Game.sound.play("tag_line_ball");
                }, 500);
            }
            Game.sound.play("ball_start_whistle");
           // Interface.playMusic("ball_music_0");
        }
    };
    countdownAnim.visible = false;
    countdownAnim.preWait = 1.5;
    countdownAnim.preWaitOver = false;
    // countdownAnim.armature.play(1,"countdown");
    //window.skeleton = countdownAnim;
    var powerArrow = CC.Utility.pixiAtlasSprite("tutorial_zorb.png");
    var powerArrowStem = new PIXI.Graphics();
    //powerArrow.scale.x = powerArrow.scale.y = 0.1;
    // powerArrow.anchor.y = 0.7;
    var resetTimer = 0;
    //powerArrowStem.addChild(powerArrow);
    container.hitArea = new PIXI.Rectangle(-500, -500, 1000, 1000);
    container.interactive = true;
    container.mouseup = container.touchend = function () {
        if (resetTimer < 0) {
            //  ballsArray[ballsIndex].enabled = false;
            //  ballsArray[ballsIndex].x = (250 + (Math.sin(Math.random() * Math.PI * 2) * 200));
            //  ballsArray[ballsIndex].y = Math.sin(Math.random() * Math.PI * 2) * 150;
        }
    };

    var backboard = CC.Utility.pixiAtlasSprite("basket_back.png");
    var hoop = new PIXI.spine.Spine(Game.animationList["basket"]);
    var starBurst = new PIXI.spine.Spine(Game.animationList["starburst"]);
    var zorbRef = new PIXI.spine.Spine(Game.animationList["ref_zorb"]);
    var hoopGlow = CC.Utility.pixiAtlasSprite("hoop_glow.png");
    zorbRef.x = -112;
    zorbRef.y = -50;
    zorbRef.scale.x = -1;
    zorbRef.scale.y = 0.2;
    zorbRef.state.setAnimation(0, "idle", true);
    //window.stars = starBurst;
    //starBurst.skeleton.setAnimation(0,"stop");
    backboard.x = 725*0.25;
    backboard.y = -130*0.25;
    hoopGlow.x = target.x;
    hoopGlow.y = target.y;
    hoopGlow.alpha = 0;
    hoop.x = backboard.x - 9;
    hoop.y = backboard.y + 5.5;
    hoop.update(10);
    starBurst.x = backboard.x + 4.5;
    starBurst.y = backboard.y + 2.75;
    starBurst.y += 25;
    starBurst.scale.x = starBurst.scale.y = 0.9;
    starBurst.visible = false;
    //starBurst.scale.x = 0.7;
    //starBurst.scale.y = 0.7;
    powerArrowStem.visible = false;

    var ballCount = 2;
    var ballsArray = [];
    var ballsArrayShadow = [];
    var ballsIndex = 0;
    var physics = new Physics();

    for (var i = 0; i < ballCount; ++i) {
        var ball = new PIXI.Container();

        ball.wave = CC.Utility.pixiAtlasSprite("zorb_back.png", {
            alpha: 0
        });
        //ball.back = CC.Utility.pixiAtlasSprite("zorb_back.png");
        //ball.character = CC.Utility.pixiAtlasSprite("zorb_char_" + i + ".png");
        var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];
        ball.character = new PIXI.spine.Spine(Game.animationList["zorb_character_" + (team * 2 + i)]);

        if((team * 2 + i) === 8)
        {
            ball.cloud = new PIXI.spine.Spine(Game.animationList["cloud"]);
            ball.cloud.state.setAnimation(0, "idle", true);
            ball.cloud.y = -40;
            ball.cloud.scale.set(0.7);
            ball.addChild(ball.cloud);
        }

        ball.character.state.setAnimation(0, "idle", true);
        ball.highlight = CC.Utility.pixiAtlasSprite("zorb_front.png");
        ball.addChild(ball.wave);
        ///ball.character.cacheAsBitmap = true;
        ball.addChild(ball.character);
        //ball.addChild(ball.highlight);
        ball.hitArea = new PIXI.Circle(0, 0, 23.5);
        ball.radius = 23.5;
        ball.index = i;
        ball.x = 75;
        ball.enabled = false;
        ball.visible = false;
        ball.interactive = true;
        ball.buttonMode = true;
        ball.prevY = 0;
        ball.rimHits = 5;
        ball.shadow = new PIXI.Graphics();
        ballShadowHolder.addChild(ball.shadow);
        ball.shadow.beginFill(0x000000);
        //ball.shadow.alpha = 0.5;
        ball.shadow.x = 0;
        ball.shadow.y = 110;
        ball.shadow.visible = false;
        ball.shadow.drawCircle(0, 0, 16);
        ball.shadow.scale.y = 0.3;

        var drawTrajectory = function (velocity) {
            powerArrowStem.clear();
            //powerArrowStem.lineStyle(5,0x888888);
            //powerArrowStem.moveTo(0,0);
            var maxHeight = physics.projectPeak(velocity.y);
            maxHeight += 0.2;
            var lastPos = {
                x: 0,
                y: 0
            };
            var dir = (velocity.x > 0) ? -1 : 1;
            var sections = 3;
            var sectionList = [];
            sectionList[0] = {
                x: 0,
                y: 0
            };
            for (var j = 1; j <= sections; ++j) {
                var step = maxHeight / sections;
                var pos = physics.project(velocity, j * step);
                //powerArrowStem.lineTo(pos.x,pos.y);
                lastPos.angle = (Math.atan2(pos.y - lastPos.y, pos.x - lastPos.x) + (Math.PI * 0.5));
                lastPos.x = pos.x;
                lastPos.y = pos.y;
                sectionList[j] = pos;
            }
            var distanceToPeak = CC.Geometry.vectorLength(sectionList[3]);
            var normal = {
                x: sectionList[3].y / distanceToPeak,
                y: -(sectionList[3].x / distanceToPeak)
            };
            //console.log(distanceToPeak);
            var dotLength1 = CC.Geometry.dotProduct2D(normal, sectionList[1]);
            var dotLength2 = CC.Geometry.dotProduct2D(normal, sectionList[2]);

            sectionList[1].x += dotLength1 * normal.x * 0.5;
            sectionList[1].y += dotLength1 * normal.y * 0.5;
            sectionList[2].x += dotLength2 * normal.x * 0.5;
            sectionList[2].y += dotLength2 * normal.y * 0.5;
            var value = distanceToPeak / 100;
            for (var j = 0; j < 2; ++j) {
                var vertical = j * 1;
                if (j) {
                    //powerArrowStem.lineStyle((3 * value) + 1, 0x888888);
                    powerArrowStem.beginFill(0xFFFFFF);
                    powerArrowStem.lineStyle(0, 0x888888);
                } else {
                    //powerArrowStem.beginFill(0xFFFFFF);
                    powerArrowStem.lineStyle(3, 0x888888);
                }

                /*powerArrowStem.moveTo(0, 0);
                 powerArrowStem.bezierCurveTo(
                 sectionList[1].x, sectionList[1].y + ((8 * value) - vertical),
                 sectionList[2].x, sectionList[2].y + ((8 * value) - vertical),
                 sectionList[3].x, sectionList[3].y + ((16 * value) - vertical)
                 );

                 powerArrowStem.lineTo(sectionList[3].x, sectionList[3].y + ((32 * value) - vertical));
                 powerArrowStem.lineTo(sectionList[3].x - (40 * dir * value), sectionList[3].y - vertical);
                 powerArrowStem.lineTo(sectionList[3].x, sectionList[3].y - ((32 * value) + vertical));


                 powerArrowStem.lineTo(sectionList[3].x, sectionList[3].y - ((16 * value) + vertical));
                 powerArrowStem.bezierCurveTo(
                 sectionList[2].x, sectionList[2].y - ((8 * value) + vertical),
                 sectionList[1].x, sectionList[1].y - ((8 * value) + vertical),
                 sectionList[0].x, sectionList[0].y - ((1) + vertical)
                 );*/
                var angle = -0.4;
                var sinA = Math.sin(angle);
                var cosA = Math.cos(angle);
                var sinB = Math.sin(angle + (Math.PI * 0.5));
                var cosB = Math.cos(angle + (Math.PI * 0.5));
                powerArrowStem.moveTo(0, 0);
                powerArrowStem.bezierCurveTo(
                    sectionList[1].x, sectionList[1].y + (2 * value) - vertical,
                    sectionList[2].x, sectionList[2].y + (2 * value) - vertical,
                    sectionList[3].x + (4 * value * sinA), sectionList[3].y + (4 * value * cosA)
                );
                powerArrowStem.lineTo(sectionList[3].x + (8 * value * sinA), sectionList[3].y + (8 * value * cosA) - vertical);
                powerArrowStem.lineTo(sectionList[3].x + (10 * value * sinB), sectionList[3].y + (10 * value * cosB) - vertical);
                powerArrowStem.lineTo(sectionList[3].x + (8 * value * -sinA), sectionList[3].y + (8 * value * -cosA) - vertical);

                powerArrowStem.lineTo(sectionList[3].x + (4 * value * -sinA), sectionList[3].y + (4 * value * -cosA) - vertical);
                powerArrowStem.bezierCurveTo(
                    sectionList[2].x, sectionList[2].y - (2 * value) - vertical,
                    sectionList[1].x, sectionList[1].y - (2 * value) - vertical,
                    sectionList[0].x, sectionList[0].y - 1 - vertical);


            }


            return lastPos;

        };
        ball.onInput = function (events) {
            if (!this.grabbed && !this.enabled) {
                powerArrowStem.x = this.x;
                powerArrowStem.y = this.y;
                var mousePos = events.data.getLocalPosition(this);
                this.grabbed = true;
                powerArrowStem.visible = true;
                powerArrowStem.clear();
            }
        };
        ball.moveInput = function (events) {
            if (this.grabbed) {
                var mousePos = events.data.getLocalPosition(this);
                if (mousePos.y > 0 && mousePos.x < -5) {
                    var lastPos = drawTrajectory({
                        x: -mousePos.x * 4 * ballPowerMul,
                        y: -mousePos.y * 4 * ballPowerMul
                    });
                } else {
                    powerArrowStem.clear();
                }
                //powerArrowStem.rotation = -Math.atan2(mousePos.x,mousePos.y);
                var power = Math.sqrt((mousePos.x * mousePos.x) + (mousePos.y * mousePos.y)) / 200;

                powerArrowStem.visible = true;
                //powerArrow.x = lastPos.x;
                // powerArrow.y = lastPos.y;
                // powerArrow.rotation = Math.PI * -0.5;
            }
        };
        ball.reset = function () {
            this.floorHits = 0;
            this.alpha = 1;
            this.visible = true;
            this.shadow.visible = true;
            this.enabled = false;
            var randomScale = 1 - ((timerCountDown / 60) * 0.9);
            this.x = (-100 + (Math.sin(Math.random() * Math.PI * 2) * 25 * randomScale));
            this.y = Math.sin(Math.random() * Math.PI * 2) * -75 * randomScale;
            this.scale.x = this.scale.y = 0.5;
            this.velocity.x = this.velocity.y = 0;
            this.rimHits = 5;
            Game.sound.play("ball_spawnned_0");
            var otherBall = ballsArray[1 - this.index];
            //console.log(CC.Geometry.vectorDistance(otherBall.position, this.position));

            if (!otherBall.enabled && CC.Geometry.vectorDistance(otherBall.position, this.position) < 24) {
                var angle = Math.random() * Math.PI * 2;
                this.x = (otherBall.x + (Math.sin(angle) * this.radius * 2.2));
                this.y = (otherBall.y + (Math.cos(angle) * this.radius * 2.2));
            }

            this.character.skeleton.setToSetupPose();
            this.character.state.setAnimation(0, "idle", true);
            this.character.rotation = 0;
            TweenLite.to(this.scale, 0.5, {
                x: 1,
                y: 1,
                ease: Back.easeOut
            });
            this.wave.alpha = 1;
            this.wave.scale.x = 1;
            this.wave.scale.y = 1;
            TweenLite.to(this.wave.scale, 0.7, {
                x: 8,
                y: 8
            });
            TweenLite.to(this.wave, 0.7, {
                alpha: 0
            });

        };
        ball.offInput = function (events) {

            if(!gameEnded)
            {
                var mousePos = events.data.getLocalPosition(this);
                if (this.grabbed) {
                    resetTimer = 1;
                    this.grabbed = false;
                    this.enabled = true;
                    powerArrowStem.visible = false;
                    this.velocity.x = -mousePos.x * 4 * ballPowerMul;
                    this.velocity.y = -mousePos.y * 4 * ballPowerMul;
                    ballsIndex = (ballsIndex + 1) % ballCount;

                    Game.sound.play("ball_launch");
                    this.character.state.setAnimation(0, "release", true);

                    if (!ballsArray[ballsIndex].visible) {
                        ballsArray[ballsIndex].reset();
                    }
                }
            }
            else
            {
                this.justOff(event);
            }
        };
        ball.justOff = function (events) {
                var mousePos = events.data.getLocalPosition(this);
                if (this.grabbed) {
                    this.grabbed = false;
                    powerArrow.visible = false;
                }
        };
        ball.floorHits = 0;
        ball.touchstart = ball.mousedown = ball.onInput;
        ball.touchmove = ball.mousemove = ball.moveInput;
        ball.touchendoutside = ball.mouseupoutside = ball.offInput;
        ball.touchend = ball.mouseup = ball.justOff;
        ballsArray.push(ball);
        ballHolder.addChild(ball);
        physics.addDynamicCircle(ballsArray[i]);
    }
    var floorRect = physics.addRect(new PIXI.Rectangle(-500, 125, 1000, 100));
    floorRect.func = function (circle) {
        //console.log(circle);

        Game.sound.play("ball_bounce");
        circle.floorHits++;
        if (circle.floorHits > 1) {
            circle.reset();
            streakTracker = 0;
        }
    };
    var backBoardPhys = physics.addRect(new PIXI.Rectangle(225, -150, 50, 150));
    var hoopPhys = physics.addCircle({
        x: 125,
        y: -130*0.25,
        radius: 16
    });
    var backboardRapidHits = 0;
    var backboardTimeDown = 0;
    backBoardPhys.func = function (circle) {
        circle.rimHits--;
        circle.rimHits--;
        //console.log(backboardTimeDown);
        if (backboardTimeDown > 0.05) {
            backboardTimeDown = 0;
            backboardRapidHits = 0;
            Game.sound.play("ball_rim_bounce");
        } else {
            backboardRapidHits++;
            if (backboardRapidHits > 2) {
                circle.reset();
            }
        }
    };
    hoopPhys.func = function (circle) {
        circle.rimHits--;
        circle.rimHits--;
        Game.sound.play("ball_rim_bounce");
    };
    target.visible = false;
    container.addChild(background);
    container.addChild(zorbRef);
    container.addChild(midground);
    container.addChild(backboard);
    container.addChild(ballShadowHolder);
    container.addChild(powerArrowStem);
    container.addChild(ballHolder);
    container.addChild(target);
    container.addChild(starBurst);
    container.addChild(hoop);
    container.addChild(hoopGlow);
    container.addChild(crowdA);
    container.addChild(crowdB);
    container.addChild(basketsPanel);
    container.addChild(scorePanel);
    container.addChild(timeText);
    container.addChild(countdownAnim);
    container.addChild(tutorial);
    container.addChild(this.backgroundFade);

    /*
     zorbRef.cacheAsBitmap = true;
     crowdA.cacheAsBitmap = true;
     crowdB.cacheAsBitmap = true;
     hoopGlow.cacheAsBitmap = true;
     hoop.cacheAsBitmap = true;
     starBurst.cacheAsBitmap = true;
     treeLeaves.cacheAsBitmap = true;*/


    //container.addChild(physics.renderObject);
    var animTimer = 0;
    var gameEnded = false;
    var oldSeconds = -1;
    var seconds,  seconds, minute, timerText;
    //console.log(treeLeaves);
    //var showHelpStart = localStorage.getItem("boom_help_shown_already_ball") === null;
    var showHelpStart = window.boom_help_shown_already_ball === undefined;
    var firstBallStart = true;
    this.update = function (delta) {
        var self = this;
        delta = Math.min(delta, 0.06);
        backboardTimeDown += delta;
        //preWait
        if (!countdownAnim.preWaitOver) {
            countdownAnim.preWait -= delta;
            if (countdownAnim.preWait < 0) {
                countdownAnim.preWaitOver = true;
                countdownAnim.visible = true;
                countdownAnim.state.setAnimation(0, "countdown");
            }
        }


        //position objects
        crowdA.x = CC.WebApp.current.screenWidth * -0.5;
        crowdB.x = CC.WebApp.current.screenWidth * 0.5;

        timeText.x = CC.WebApp.current.screenWidth * -0.5;

        animTimer += delta;
        //must be updated-------------------------------------------------------------------MUST BE UPDATED
        if (countdownAnim.preWaitOver) {
            timerCountDown = Math.max(0, timerCountDown - delta);
        }
        if (firstBallStart && timerCountDown < 60) {
            firstBallStart = false;
            TweenLite.to(zorbRef, 0.3, {
                delay: 1,
                ease: Back.easeOut,
                y: -250*0.25
            });
            TweenLite.to(zorbRef.scale, 0.3, {
                delay: 1,
                ease: Back.easeOut,
                y: 1
            });
            ballsArray[0].reset();
        }
        /*if (!countdownWhistleSoundPlayed && timerCountDown < 60.25) {
         countdownWhistleSoundPlayed = true;
         Game.sound.play("ball_start_whistle");
         }*/

        // END OF GAME.
        if (!gameEnded && timerCountDown <= 0) {
            gameEnded = true;
            // Send score to server.
            // SS.sendScore(0);
            // Update local score cache.
            SS.updateTeamScores();

            // Show end screen.
            Game.sound.play("crowd_start");

            TweenLite.to(zorbRef, 0.3, {
                ease: Back.easeIn,
                y: -50
            });
            TweenLite.to(zorbRef.scale, 0.3, {
                ease: Back.easeIn,
                y: 0.2
            });
            Game.webApp.juggler.addTimeout(function(){
                countdownAnim.state.setAnimation(0,"game_end");
            },0.3);
            Game.webApp.juggler.addTimeout(function(){
              //  console.log(totalScore);
                Game.webApp.swapScreen(Game.EndScreen,{icon:"ball",game:totalScore,gameScreenClass:Game.BallScreen,score:totalScore*12});

            },1.3);
        }

        resetTimer -= delta;
        seconds = Math.floor(timerCountDown);
        timerText = CC.Utility.intToString(Math.min(seconds, 60), 2);
        if (timeTextOutside.text !== (timerText)) {
            timeTextOutside.text = (timerText);
            timeTextInside.text = timeTextOutside.text;
        }
        if (timerCountDown < 11 && Math.floor(timerCountDown) !== Math.floor(oldCountDown)) {
            Game.sound.play("beep");
        }

        physics.update(delta);
        for (var i = 0; i < ballCount; ++i) {
            var ball = ballsArray[i];
            ball.shadow.x = ball.x;
            if (ball.enabled) {
                ball.character.rotation += ball.velocity.x * 0.0005*0.5;
            } else {

                ball.character.rotation = 0;
            }
            ball.highlight.rotation = ball.x * 0.001*0.5;
            ball.shadow.scale.x = 1 - Math.abs(ball.y - ball.shadow.y) / 100;
            ball.shadow.scale.y = ball.shadow.scale.x * 0.3;
            ball.shadow.alpha = ball.shadow.scale.y;
            ball.shadow.visible = ball.visible;

            if (Math.abs(target.x - ball.x) < 30 && ball.prevY <= target.y && ball.y > target.y) {
                //ball.enabled = false;
                TweenLite.to(ball, 0.6, {
                    alpha: 0,
                    scope: ball,
                    onComplete: function () {
                        //console.log(this.vars.scope);
                        this.vars.scope.reset();
                    }
                });
                hoop.state.setAnimation(0, "score");
                starBurst.visible = true;
                starBurst.state.setAnimation(0, "burst_" + (1 + streakTracker));
                Game.sound.play("ball_star_0");
                totalScore++;
                basketsPanel.setValue(CC.Utility.intToString(totalScore, 2));
                scorePanel.setValue(totalScore*12);
                streakTracker = Math.min(streakTracker + 1, 4);

                crowdA.state.setAnimation(0, "react1", true);
                crowdB.state.setAnimation(0, "react2", true);

                Game.sound.play("crowd_score" + Math.floor(Math.random() * 3 + 1));
                setTimeout(function () {

                    crowdA.state.setAnimation(0, "idle1", true);
                    crowdB.state.setAnimation(0, "idle2", true);

                }, 2000);
                hoopGlow.alpha = 1;

                zorbRef.state.setAnimation(1, "score");
                hoopGlow.scale.x = hoopGlow.scale.y = 1;
                TweenLite.to(ball.position, 0.3, {
                    x: target.x
                });
                TweenLite.to(ball.velocity, 0.3, {
                    x: 0
                });
                TweenLite.to(hoopGlow, 0.5, {
                    alpha: 0
                });
                TweenLite.to(hoopGlow.scale, 0.5, {
                    x: 2,
                    y: 2
                });
                TweenLite.to(ball.scale, 0.5, {
                    x: 0,
                    y: 0,
                    ease: Back.easeIn
                });
            }
            ball.prevY = ball.y;

            if (Math.abs(ball.x) > 350) {
                ball.reset();
                streakTracker = 0;
            }
        }


        oldCountDown = timerCountDown;
    };
    this.addChild(container);
    this.pausePanel = new SportsUI.PausePanel(Game.BallScreen,false, tutorial);
    this.buttonPause = SportsUI.createButtonPause(this.pausePanel,false, tutorial);
    this.addChild(this.buttonPause);
    this.addChild(this.pausePanel);
};