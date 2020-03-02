/**
 * Created by jonathan.kernick on 26/04/2017.
 */
/**
 * Created by jonathan.kernick on 24/04/2017.
 */
Game.PogoScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0x5ad7ff;
    this.build();
};
Game.PogoScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.PogoScreen.prototype.constructor = Game.PogoScreen;


Game.PogoScreen.prototype.build = function () {

    // Get an access token, so we can submit a score at the end.
    SS.getAccessToken();
    Game.sound.stopMusic();
    //Game.sound.play("crowd_start");
    Game.sound.play("game_intro_sting",0.3);


    this.backgroundFade = CC.Utility.pixiAtlasSprite("ui_background_0.png", {alpha: 0});
    this.backgroundFade.show = function () {
        TweenLite.to(this, 1, {alpha: 1});
    };
    this.backgroundFade.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));

    var self = this;

    var scoreObject = new SportsUI.ScorePanel();
    var container = new PIXI.Container();
    var cameraFloatingLayer = new PIXI.Container();
    var jumpButtonTest = new PIXI.Container();
    jumpButtonTest.hitArea = new PIXI.Rectangle(-500, -500, 1000, 1000);
    jumpButtonTest.interactive = true;
    var pogoStick = self.createPogoStick(true);
    pogoStick.onPlatform = true;
    var playerSunk = false;
    var nextDistraction = 0;
    var distractionTimer = 20;
    var distractionAnimations = [
        new PIXI.spine.Spine(Game.animationList["distraction_0"]),
        new PIXI.spine.Spine(Game.animationList["distraction_1"]),
        new PIXI.spine.Spine(Game.animationList["distraction_2"])
    ];
    window.distractionAnimations = distractionAnimations;
    distractionAnimations[0].x = -500;
    distractionAnimations[1].x = -500;
    distractionAnimations[2].x = -500;
    distractionAnimations[0].y = 125;
    distractionAnimations[1].y = 125;
    distractionAnimations[2].y = 125;
    //dummy charcter for switching between
    var prevCharacterDummy = self.createPogoStick();
    prevCharacterDummy.y = -7.5;
    cameraFloatingLayer.y = 20;
    cameraFloatingLayer.x = -75;


    var pauseButton = SportsUI.button("pause", function () {
        pauseButton.visible = false;
    });
    pauseButton.y = -150;
    var waterSplash = new PIXI.spine.Spine(Game.animationList["pogo_splash"]);
    waterSplash.visible = false;


    var starsPlatform = new PIXI.spine.Spine(Game.animationList["platform_stars"]);
    starsPlatform.primedAnimation
    var starThresholds = [2560 * 0.25, 6400 * 0.25, 12800 * 0.25, 25600 * 0.25];
    var findNextPlatformX = function () {
        var shortestDist = null;

        var testDist;
        var returnX, platform;
        for (var i = 0; i < platformPool.length; ++i) {
            platform = platformPool[i]
            testDist = platform.x - pogoStick.x;
            if ((shortestDist === null || testDist < shortestDist) && testDist > 0) {
                returnX = platform.x;
                shortestDist = testDist;
            }
        }
        return returnX;
    };
    //cloudLayer
    var cloudLayer = new PIXI.Container();
    var cloudSpread = 750;
    var cloudCount = 3;
    var cloudStep = cloudSpread / cloudCount;
    for (var i = 0; i < cloudCount; ++i) {
        var xPos = ((cloudStep * i) + (Math.sin(Math.random() * 2.5) * cloudStep * 0.3));
        var yPos = Math.random() * -50;
        var cloudsA = CC.Utility.pixiAtlasSprite("cloud1.png", {
            x: xPos,
            y: yPos
        });
        var cloudsB = CC.Utility.pixiAtlasSprite("cloud1.png", {
            x: (xPos + cloudSpread),
            y: yPos
        });
        cloudLayer.addChild(cloudsA);
        cloudLayer.addChild(cloudsB);
    }
    cloudLayer.y = -450 * 0.25;
    var currentCharacterIndex = 0;

    //count down animation plays before controls unlocked
    var countdownAnim = new PIXI.spine.Spine(Game.animationList["countdown"]);
    var completed = false;
    countdownAnim.y = 5;
    countdownAnim.visible = false;
    countdownAnim.preWait = 1.5;
    countdownAnim.preWaitOver = false;
    countdownAnim.state.onEvent = function (i, event) {
        if (event.stringValue === "sound_beep") {

            Game.sound.play("beep");
        } else {
            if (!completed) {
                Game.sound.playMusic("pogo_music_0", 0.3);
                setTimeout(function(){
                    Game.sound.play("tag_line_pogo");
                },500);
                completed = true;
            }
            Game.sound.play("ball_start_whistle");
        }
    };
    var gameTimer = -countdownAnim.preWait;
    var countdownWhistleSoundPlayed = false;


    //distance hud

    var totalScore = 0;
    var distancePanel = new SportsUI.GamePointsPanel("ui_pogo_icon_panels.png");

    var tutorial = new SportsTutorial.Pogo();
    var show = localStorage.getItem("boomerang_sports_app_tutorial_pogo") === null
    if (show) {
        Game.webApp.juggler.addTimeout(function () {

            tutorial.show();
            localStorage.setItem("boomerang_sports_app_tutorial_pogo", "yes");
        }, 1);
    }

    var sea = CC.Utility.pixiAtlasSprite("sea.png");
    var seaA = CC.Utility.pixiAtlasSprite("sea.png");
    var sky = CC.Utility.pixiAtlasSprite("pogo_sky_0.png");
    sky.addChild(CC.Utility.pixiAtlasSprite("pogo_sky_1.png"));
    //sky.anchor.y = 1;
    sky.y = -400 * 0.25;
    sea.scale.x = 6;
    sea.scale.y = 7;
    sea.anchor.y = 0
    seaA.scale.x = 6;
    //sky.scale.x = 10;
    var secondCharacterDummy = self.createPogoStick();
    secondCharacterDummy.y = -30;
    secondCharacterDummy.setCharacter(1);
    secondCharacterDummy.currentPlatformIndex = 1;
    var pogoStickMask = new PIXI.Graphics();
    var pogoBackground = self.createBackground();
    cameraFloatingLayer.addChild(sea);
    cameraFloatingLayer.addChild(sky);
    cameraFloatingLayer.addChild(cloudLayer);
    cameraFloatingLayer.addChild(pogoBackground);
    pogoBackground.y = -100;
    var powerArrowStem = new PIXI.Graphics();
    var physics = new Physics();

    var maxHeight, jumpArcTimeDown, heightY, lastPos, maxTime, dir, sections, sectionList, step, checks, checkStep, j, k, startTime, startTime, spread, pos

    powerArrowStem.drawTrajectory = function (velocity) {
        powerArrowStem.clear();
        //powerArrowStem.lineStyle(5,0x888888);
        //powerArrowStem.moveTo(0,0);
        maxHeight = physics.projectPeak(velocity.y);
        heightY = physics.project(velocity, maxHeight).y;
        maxTime = (Math.sqrt((0 - (heightY + pogoStick.y) * 2) / 900) + maxHeight);
        //console.log(heightY);
        lastPos = {
            x: 0,
            y: 0
        };
        dir = (velocity.x > 0) ? -1 : 1;
        sections = 3;
        sectionList = [];
        sectionList[0] = {
            x: 0,
            y: 0
        };
        step = maxTime / sections;
        checks = 256;
        checkStep = (256 / velocity.x) / checks;
        //shortens the step if the spread intersects a ball
        for (var j = 0; j < beachBallPool.length; ++j) {
            var beachBall = beachBallPool[j];
            if (beachBall.x > (pogoStick.x + 64) && beachBall.x < (pogoStick.x + 600)) {
                for (var k = 0; k < checks; ++k) {
                    startTime = ((beachBall.x - pogoStick.x) - 64) / velocity.x;
                    spread = (startTime + (k * checkStep));
                    pos = physics.project(velocity, spread);
                    pos.x += pogoStick.x;
                    pos.y += pogoStick.y;

                    pos.x -= beachBall.x;
                    pos.y -= beachBall.y;
                    if (((pos.x * pos.x) + (pos.y * pos.y)) < 22500 / 2 / 2) {
                        if (spread > 0) {
                            j = beachBallPool.length + 2;
                            k = checks + 2;
                            step = Math.min(spread, maxTime) / sections;
                        }

                    }

                }
            }

        }
        for (var j = 1; j <= sections; ++j) {
            var pos = physics.project(velocity, j * step);
            //powerArrowStem.lineTo(pos.x,pos.y);
            lastPos.angle = (Math.atan2(-(pos.y - lastPos.y), pos.x - lastPos.x));
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
        var value = distanceToPeak / 400;
        for (var j = 0; j < 2; ++j) {
            var vertical = j * 1.5;
            if (j) {
                //powerArrowStem.lineStyle((3 * value) + 1, 0x888888);
                powerArrowStem.beginFill(0xFFFFFF);
                powerArrowStem.lineStyle(0, 0x888888);
            } else {
                //powerArrowStem.beginFill(0xFFFFFF);
                powerArrowStem.lineStyle(3, 0x888888);
            }

            var sinA = Math.sin(lastPos.angle);
            var cosA = Math.cos(lastPos.angle);
            var sinB = Math.sin(lastPos.angle + (Math.PI * 0.5));
            var cosB = Math.cos(lastPos.angle + (Math.PI * 0.5));
            powerArrowStem.moveTo(0, 0);
            powerArrowStem.bezierCurveTo(
                sectionList[1].x, sectionList[1].y + (2 * value) - vertical,
                sectionList[2].x, sectionList[2].y + (2 * value) - vertical,
                sectionList[3].x + (16 * value * sinA), sectionList[3].y + (16 * value * cosA)
            );
            powerArrowStem.lineTo(sectionList[3].x + (32 * value * sinA), sectionList[3].y + (32 * value * cosA) - vertical);
            powerArrowStem.lineTo(sectionList[3].x + (40 * value * sinB), sectionList[3].y + (40 * value * cosB) - vertical);
            powerArrowStem.lineTo(sectionList[3].x + (32 * value * -sinA), sectionList[3].y + (32 * value * -cosA) - vertical);

            powerArrowStem.lineTo(sectionList[3].x + (16 * value * -sinA), sectionList[3].y + (16 * value * -cosA) - vertical);
            powerArrowStem.bezierCurveTo(
                sectionList[2].x, sectionList[2].y - (2 * value) - vertical,
                sectionList[1].x, sectionList[1].y - (2 * value) - vertical,
                sectionList[0].x, sectionList[0].y - 1 - vertical);


        }


        return lastPos;

    };
    pogoStickMask.beginFill(0xFF0000, 0.5);
    pogoStickMask.drawRect(-128, -1000, 256, 1015);
    pogoStick.mask = pogoStickMask;
    var chargeJump = 0;
    var timer = 0;
    var secondPlayerTimer = 0;
    var jumpCharging = false;
    var jumpIndicatorBacking = new PIXI.Graphics();
    var jumpIndicator = new PIXI.Graphics();

    var waterFade = CC.Utility.pixiAtlasSprite("pogo_water_fade.png", {
        anchor: "t"
    });
    waterFade.scale.x = 20;
    waterFade.scale.y = 2;
    waterFade.y = 20;
    var slideOffTimer = 0;
    var slideOffDir = 1;
    sea.y = -75;
    seaA.y = 50;
    jumpIndicator.beginFill(0xFF0000);
    jumpIndicator.drawRect(0, 0, 50, 5);
    jumpIndicatorBacking.beginFill(0xDDDDDD);
    jumpIndicatorBacking.drawRect(-2, -2, 204, 24);
    pogoStick.y = -300;
    pogoStick.velocity = {
        x: 0,
        y: 0
    };
    pogoStick.target = -1;

    var jumpStartFunction = function () {
        if ((pogoStick.target !== -1 || pogoStick.onPlatform || jumpArcTimeDown < 0) && !jumpCharging && gameTimer > 3) {
            jumpCharging = true;
            chargeJump = 0;
        }
    };
    var jumpEndFunction = function () {
        powerArrowStem.clear();
        if (chargeJump && (pogoStick.target !== -1 || pogoStick.onPlatform) && gameTimer > 3) {
            var ball = beachBallPool[pogoStick.target];
            //if(pogoStick.y > (ball.y-(ball.radius*0.5)))
            {
                pogoStick.target = -1;
                pogoStick.onPlatform = false;
                pogoStick.velocity.x = ((125 * chargeJump) + 50);
                pogoStick.velocity.y = -((500 * chargeJump) + 50);
                Game.sound.play("pogo_launch");
                Game.sound.play("ball_launch");
                pogoStick.jumpState();
                chargeJump = 0;
                jumpArcTimeDown = physics.projectPeak(pogoStick.velocity.y);
            }
        }
        chargeJump = 0;
        jumpCharging = false;
    };


    var beachBallPool = [];
    var platformPool = [];
    var beachBallPoolIndex = 0;
    var platformPoolIndex = 0;
    var beachBallMaskPool = [];
    //the current position of the ballGeneration
    var genratorHead = 0;
    // varable for handling difficulty scaling
    var difficultyScale = 0;
    //var to track the current generated ball count
    var totalGeneratedBallCount = 0;
    //  cameraFloatingLayer.addChild(seaA);
    //function to add ball of platformf
    for (var i = 0; i < 20; ++i) {
        //advance the generatorHead to the new position
        //if generating a platform set to true
        var addPlatformInsteadOfBall = !(totalGeneratedBallCount % 10);
        if (addPlatformInsteadOfBall) {
            var platform = self.createPlatform();
            platform.index = platformPool.push(platform) - 1;
            // platform.visible = false; 

            cameraFloatingLayer.addChild(platform);
        } else {
            var beachBall = self.createBeachBall();
            beachBall.maskA = CC.Utility.pixiAtlasSprite("ball_mask_2.png", {
                anchor: "tl",
                x: -64
            });
            beachBall.maskB = CC.Utility.pixiAtlasSprite("ball_mask_2.png", {
                anchor: "tr",
                x: 64
            });
            //beachBall.maskA.tint = 0xFF0000;
            //beachBall.maskB.tint = 0x00FF00;
            // beachBall.mask = new PIXI.Graphics();
            // beachBall.mask.beginFill(0xFF0000, 0.5);
            // beachBall.mask.drawRect(-128, -700, 256, 950);

            var maskHolder = new PIXI.Container();
            var beachBallMask = CC.Utility.pixiAtlasSprite("ball_mask.png", {
                anchor: "t"
            });

            beachBallMask.scale.x = 1.1;
            beachBallMask.scale.y = 1.1;

            maskHolder.beachMask = beachBallMask;
            var maskRipple = new PIXI.spine.Spine(Game.animationList["ripple"]);
            maskRipple.state.setAnimation(0, "ripple", true);
            maskRipple.update(Math.random());
            //window.rippleTest = maskRipple;
            beachBallMask.addChild(maskRipple);
            //beachBallMask.addChild(beachBall.mask);
            maskHolder.addChild(beachBall.maskA);
            maskHolder.addChild(beachBall.maskB);
            maskHolder.addChild(beachBallMask);

            // beachBall.visible = false;
            // beachBallMask.visible = false;

            beachBallPool.push(beachBall);
            beachBallMaskPool.push(maskHolder);

            cameraFloatingLayer.addChild(beachBall);
            cameraFloatingLayer.addChild(maskHolder);
        }
        totalGeneratedBallCount++;

    }
    totalGeneratedBallCount = 0;
    var addBallOrPlatform = function () {

        var addPlatformInsteadOfBall = !(totalGeneratedBallCount % 10);
        if (addPlatformInsteadOfBall) {
            var platform = platformPool[platformPoolIndex];

            platform.x = genratorHead;


            platformPoolIndex = (platformPoolIndex + 1) % platformPool.length;
        } else {
            var beachBall = beachBallPool[beachBallPoolIndex];
            var beachBallMask = beachBallMaskPool[beachBallPoolIndex];
            beachBall.x = genratorHead;
            beachBall.y = (Math.random() - 0.5) * (-25 + (-50 * difficultyScale));
            beachBallMask.x = beachBall.x;

            beachBallPoolIndex = (beachBallPoolIndex + 1) % beachBallPool.length;
        }
        genratorHead += (350 * 0.25 + (Math.random() * 150 * difficultyScale)) * 2;
        totalGeneratedBallCount++;
        difficultyScale += 0.01;
    };

    for (var i = 0; i < 20; ++i) {
        addBallOrPlatform();
    }
    //position the second player character at the second platform
    secondCharacterDummy.x = (platformPool[1].x + 25);
    prevCharacterDummy.x = -500;

    cameraFloatingLayer.addChild(waterFade);
    cameraFloatingLayer.addChild(powerArrowStem);
    cameraFloatingLayer.addChild(pogoStickMask);
    cameraFloatingLayer.addChild(secondCharacterDummy);
    cameraFloatingLayer.addChild(prevCharacterDummy);
    cameraFloatingLayer.addChild(pogoStick);
    cameraFloatingLayer.addChild(waterSplash);
    cameraFloatingLayer.addChild(distractionAnimations[0]);
    cameraFloatingLayer.addChild(distractionAnimations[1]);
    cameraFloatingLayer.addChild(distractionAnimations[2]);
    cameraFloatingLayer.addChild(starsPlatform);
    cameraFloatingLayer.addChild(pogoBackground.frontBuoys);
    cameraFloatingLayer.addChild(pogoBackground.frontBuoys);
    jumpButtonTest.mousedown = jumpButtonTest.touchstart = function () {
        jumpStartFunction();
    };
    jumpButtonTest.mouseup = jumpButtonTest.touchend = function () {
        jumpEndFunction();
    };
    jumpIndicator.x = -50;
    jumpIndicator.y = -50;
    jumpIndicatorBacking.x = -50;
    jumpIndicatorBacking.y = -50;
    container.addChild(cameraFloatingLayer);
    container.addChild(jumpButtonTest);
    container.addChild(distancePanel);
    container.addChild(scoreObject);
    container.addChild(tutorial);
    container.addChild(this.backgroundFade);
    // container.addChild(pauseButton);
    // container.addChild(restartButton);
    //container.addChild(jumpIndicatorBacking);
    //container.addChild(jumpIndicator);
    var cloudParalaxScale = 0.7;
    var cloudParalaxInverseScale = ((1 / cloudParalaxScale) - 1);
    this.update = function (delta) {
        delta = Math.min(delta, 0.06);
        //align distance display
        /* if (forcePause && !pausePopup.visible) {
         pausePopup.show();
         pauseButton.visible = false;
         restartButton.visible = false;
         }*/
        //preWait
        if (!countdownAnim.preWaitOver) {
            countdownAnim.preWait -= delta;
            if (countdownAnim.preWait < 0) {
                countdownAnim.preWaitOver = true;
                countdownAnim.visible = true;
                countdownAnim.state.setAnimation(0, "countdown");
            }
        }

        if (distractionTimer > 0 && !playerSunk) {
            distractionTimer -= delta;
            if (distractionTimer <= 0) {
                distractionTimer = 4 + Math.random() * 6;
                var distractionAnim = distractionAnimations[nextDistraction];
                distractionAnim.x = (pogoStick.x + 75 * Math.random()) + 50;
                distractionAnim.y = (25 * Math.random() + 150 * 0.25);
                distractionAnim.state.clearTrack(0);
                distractionAnim.skeleton.setToSetupPose();
                distractionAnim.state.setAnimation(0, "animation");

                Game.sound.play("pogo_water_hit_1");
                nextDistraction = (nextDistraction + 1) % distractionAnimations.length;
                if (nextDistraction === 0) {
                    for (var i = 0; i < 3; ++i) {
                        distractionAnimations.push(distractionAnimations.splice(distractionAnimations.length - (i + 1), 1)[0]);
                    }
                }
            }
        }
        //  pauseButton.visible = !(endScreenPopup.visible || pausePopup.visible || helpPopup.visible);
        distancePanel.visible = true;// pauseButton.visible;
        // restartButton.visible = pauseButton.visible;
        
        var mValue = (COPY_DECK.currentLanguage === "ru-ru")?"M":"m";

        distancePanel.setValue(Math.floor(pogoStick.x / 64) + mValue);
        scoreObject.setValue(Math.floor(pogoStick.x / 64) * 4);
        gameTimer += delta;
        /*if (!countdownWhistleSoundPlayed && gameTimer > 2.75) {
         countdownWhistleSoundPlayed = true;
         Game.sound.play("ball_start_whistle");
         }*/
        // pogoStick.x += delta*1000;
        //pogoStick.x += delta*200;
        if (jumpArcTimeDown > 0) {
            jumpArcTimeDown -= delta;
        }
        pauseButton.x = (CC.WebApp.current.screenWidth * 0.5) - 50;
        //  restartButton.x = ((CC.WebApp.current.screenWidth * -0.5) + 60);
        //position
        //cloudLayer.x = (Math.floor(-cameraFloatingLayer.x/cloudSpread)*cloudSpread)-(cloudSpread*0.5)*0.2;
        cloudLayer.x = -cameraFloatingLayer.x * 0.7;
        cloudLayer.x += Math.floor((cloudLayer.x * cloudParalaxInverseScale) / cloudSpread) * cloudSpread;
        //used to track to the player and the camera
        pogoStickMask.x = pogoStick.x;
        waterFade.x = -cameraFloatingLayer.x;
        //handling the charging rate of the jump
        if (jumpCharging) {
            chargeJump += delta * 0.45;
            chargeJump = Math.min(chargeJump, 1);
            powerArrowStem.x = pogoStick.x;
            powerArrowStem.y = pogoStick.y;
            powerArrowStem.drawTrajectory({
                x: ((256 * chargeJump) + 100),
                y: -((1000 * chargeJump) + 100)
            });
            if (chargeJump > 0.8) {
                chargeJump = 0;
                jumpCharging = false;
                powerArrowStem.clear();
            }
        }

        //check if you passed a star showing threashold
        for (var i = 0; i < starThresholds.length; ++i) {
            var mark = starThresholds[i];
            if (pogoStick.oldX && mark > pogoStick.oldX && mark <= pogoStick.x) {
                starsPlatform.x = findNextPlatformX();
                starsPlatform.primedAnimation = "stars_" + (i + 2);
                starsPlatform.state.setAnimation(0, "stars_0");
            }
        }
        if (pogoStick.oldX && starsPlatform.x - 400 > pogoStick.oldX && starsPlatform.x - 100 < pogoStick.x) {
            starsPlatform.state.setAnimation(0, starsPlatform.primedAnimation);
            Game.sound.play("ball_star_0");
        }

        pogoStick.oldX = pogoStick.x;

        //handles the bouncing of the pool balls
        for (var i = 0; i < beachBallPool.length; ++i) {
            var ball = beachBallPool[i];
            ball.ballObject.y *= 0.9;
        }
        jumpIndicator.scale.x = chargeJump;
        if (pogoStick.target !== -1) {
            //pogoStick.stick.y = 70 * -(Math.abs(Math.sin(timer * 5)) * 0.5);
            pogoStick.jumpChecker(delta);
            if (pogoStick.x > 7500) {
                slideOffTimer -= delta * 0.5;
            }
            var ball = beachBallPool[pogoStick.target];
            ball.ball.rotation += delta * 0.5;
            ball.ballObject.y = (Math.abs(Math.sin(pogoStick.timer * 5)) * 10);
            var distance = CC.Geometry.vectorDistance(ball, pogoStick);

            pogoStick.x = Math.lerp(pogoStick.x, ball.x - (Math.sin(slideOffTimer) * ball.radius), 0.1);
            pogoStick.y = Math.lerp(pogoStick.y, ball.y - (Math.cos(slideOffTimer) * ball.radius), 0.1);
            pogoStick.x = (ball.x + (((pogoStick.x - ball.x) / distance) * ball.radius));
            pogoStick.y = (ball.y + (((pogoStick.y - ball.y) / distance) * ball.radius));
            pogoStick.velocity.x = 0;
            pogoStick.velocity.y = 0;
            timer += delta;
            if (pogoStick.y > ball.y - (ball.radius * 0.5)) {
                pogoStick.target = -1;
                chargeJump = 0;
                pogoStick.velocity.x = 50 * slideOffDir;
                pogoStick.velocity.y = -50;
            }
        } else if (pogoStick.onPlatform) {
            //pogoStick.stick.y = 70 * -(Math.abs(Math.sin(timer * 5)) * 0.5);
            pogoStick.jumpChecker(delta);
            timer += delta;
            pogoStick.velocity.x = 0;
            pogoStick.velocity.y = 0;
            pogoStick.y = -30;

        } else {

            pogoStick.velocity.y += delta * 225 * 1.5;
            pogoStick.x += pogoStick.velocity.x * delta * 1.5;
            pogoStick.y += pogoStick.velocity.y * delta * 1.5;
            timer = 0;
            pogoStick.stick.y = 0;
            pogoStick.timer = 0;
        }
        secondPlayerTimer += delta;
        //  secondCharacterDummy.stick.y = 70 * -(Math.abs(Math.sin((secondPlayerTimer + 1) * 5)) * 0.5);
        //  prevCharacterDummy.stick.y = 70 * -(Math.abs(Math.sin((secondPlayerTimer + 2) * 5)) * 0.5);
        secondCharacterDummy.jumpChecker(delta);
        prevCharacterDummy.jumpChecker(delta);

        if (pogoStick.onPlatform) {
            cameraFloatingLayer.x = Math.lerp(cameraFloatingLayer.x, -pogoStick.x - 75, 0.01);
            cameraFloatingLayer.y = Math.lerp(cameraFloatingLayer.y, (-pogoStick.y + 50), 0.01);

        } else {

            cameraFloatingLayer.x = Math.lerp(cameraFloatingLayer.x, -pogoStick.x - 75, 0.1);
            cameraFloatingLayer.y = Math.lerp(cameraFloatingLayer.y, (-pogoStick.y + 50), 0.1);

        }
        cameraFloatingLayer.x = Math.round(cameraFloatingLayer.x);
        cameraFloatingLayer.y = Math.round(cameraFloatingLayer.y);
        cameraFloatingLayer.y = Math.max(cameraFloatingLayer.y, 50);
        pogoBackground.update(cameraFloatingLayer);
        sea.x = pogoStick.x + 50;
        seaA.x = sea.x;
        sky.x = -cameraFloatingLayer.x;

        // END OF GAME.
        if (!playerSunk && pogoStick.y > 25) {
            // pogoStick.x = 0;
            // pogoStick.y = -300;
            pogoStick.velocity.x = 0;
            pogoStick.velocity.y = 0;
            pogoStick.target = -1;
            jumpCharging = false;
            playerSunk = true;
            waterSplash.visible = true;
            pogoStick.visible = false;
            waterSplash.x = pogoStick.x;
            waterSplash.y = 12;
            waterSplash.state.setAnimation(0, "splash_0");

            SS.updateTeamScores();
            Game.sound.play("pogo_splash");
            Game.webApp.juggler.addTimeout(function () {
                countdownAnim.state.setAnimation(0, "game_end");
            }, 0.3);
            Game.webApp.juggler.addTimeout(function () {
                // Send score to server.
                // SS.sendScore(0);
                // Update local score cache.

                // Show end screen.
                //endScreenPopup.show(pogoStick.x);

                //
                Game.webApp.swapScreen(Game.EndScreen, {
                    icon: "pogo",
                    game: Math.floor(pogoStick.x / 64),
                    gameScreenClass: Game.PogoScreen,
                    score: Math.floor(pogoStick.x / 64) * 4
                });

            }, 1.5);
        }

        //loop through all the balls check for intersection
        for (var i = 0; i < beachBallPool.length; ++i) {
            var ball = beachBallPool[i];
            var ballMask = beachBallMaskPool[i];
            //very clever mask/ball scaling effect
            ballMask.beachMask.scale.x = -Math.cos(Math.cos((ball.y + ball.ballObject.y) / 256) * Math.PI) * 2;
            ball.maskA.scale.x = ((((ball.y + ball.ballObject.y) > 0) ? 1 - ballMask.beachMask.scale.x / 2 : 0)) * 0.5;
            ballMask.beachMask.scale.y = ballMask.beachMask.scale.x;
            ball.maskB.scale.x = ball.maskA.scale.x;
            //if their is no target selected
            if (pogoStick.target === -1) {
                var distanceSqr = CC.Geometry.vectorDistanceSquared(ball, pogoStick);
                if (distanceSqr < ball.radius * ball.radius) {
                    pogoStick.target = i;
                    Game.sound.play("pogo_bounce_1");
                    pogoStick.jumpChecker(100);
                    if (ball.x > pogoStick.x) {
                        slideOffDir = -1;
                    } else {
                        slideOffDir = 1;
                    }
                    slideOffTimer = 0;
                    if (pogoStick.y > ball.y - (ball.radius * 0.75)) {
                        pogoStick.target = -1;
                        pogoStick.velocity.x = 50 * slideOffDir;
                        pogoStick.velocity.y = -25;
                    }
                }
            }

            if (ball.x < (pogoStick.x - 512)) {
                addBallOrPlatform();
            }
        }
        for (var i = 0; i < platformPool.length; ++i) {
            var platform = platformPool[i];
            //if their is no target selected
            if (!pogoStick.onPlatform) {
                if (Math.abs(platform.x - pogoStick.x) < 90 && pogoStick.y > -7) {
                    pogoStick.onPlatform = true;
                    Game.sound.play("ring_contact");
                    Game.sound.play("crowd_score" + Math.floor(Math.random() * 3 + 1));
                    if (i === secondCharacterDummy.currentPlatformIndex) {
                        prevCharacterDummy.x = pogoStick.x;
                        //sets the dummy character on your platform and the next to your current player
                        prevCharacterDummy.setCharacter(currentCharacterIndex);
                        secondCharacterDummy.setCharacter(currentCharacterIndex);
                        //switch character number
                        currentCharacterIndex = 1 - currentCharacterIndex;
                        //switch main character to new character
                        pogoStick.setCharacter(currentCharacterIndex);
                        //move prevCharacter copy of current character to pogostickPosition
                        prevCharacterDummy.x = pogoStick.x;
                        prevCharacterDummy.y = pogoStick.y;
                        TweenLite.to(prevCharacterDummy.position, 2, {
                            x: secondCharacterDummy.x - 70,
                            y: secondCharacterDummy.y
                        });
                        //move pogostick to dummy character position
                        pogoStick.x = secondCharacterDummy.x;
                        pogoStick.y = secondCharacterDummy.y;

                        prevCharacterDummy.timer = pogoStick.timer;
                        pogoStick.timer = secondCharacterDummy.timer;

                        pogoStick.jumpChecker(0);
                        prevCharacterDummy.jumpChecker(0);

                        //advance position of second dummy character switch
                        secondCharacterDummy.currentPlatformIndex = (secondCharacterDummy.currentPlatformIndex + 1) % platformPool.length;
                        secondCharacterDummy.x = (platformPool[secondCharacterDummy.currentPlatformIndex].x + 25);

                    }
                }
            }

            if (platform.x < (pogoStick.x - 500)) {
                addBallOrPlatform();
            }
        }
        if (pogoStick.x > (platformPool[secondCharacterDummy.currentPlatformIndex].x + 200)) {

            secondCharacterDummy.currentPlatformIndex = (secondCharacterDummy.currentPlatformIndex + 1) % platformPool.length;
            secondCharacterDummy.x = (platformPool[secondCharacterDummy.currentPlatformIndex].x + 25);
        }


        container.addChild(countdownAnim);
        //  container.addChild(endScreenPopup);
        pogoStick.rotation = Math.lerp(pogoStick.rotation, (pogoStick.velocity.x * Math.max(-pogoStick.velocity.y, 0) * 0.000007), 0.03);
        //pogoStick.scale.x = Math.lerp(pogoStick.scale.x,1.0 - (pogoStick.velocity.y*-0.00025),0.1);
        //pogoStick.scale.y = Math.lerp(pogoStick.scale.y,1.0 + (pogoStick.velocity.y*-0.00025),0.1);
        if (showHelpStart) {
            showHelpStart = false;
            //localStorage.setItem("boom_help_shown_already_pogo", true);
            window.boom_help_shown_already_pogo = true;
            distancePanel.visible = false;
            pauseButton.visible = false;
        }
    };

    //var showHelpStart = localStorage.getItem("boom_help_shown_already_pogo") === null;
    var showHelpStart = window.boom_help_shown_already_pogo === undefined;
    var firstBallStart = true;

    this.addChild(container);
    this.pausePanel = new SportsUI.PausePanel(Game.PogoScreen, false, tutorial);
    this.buttonPause = SportsUI.createButtonPause(this.pausePanel, false, tutorial);
    this.addChild(this.buttonPause);
    this.addChild(this.pausePanel);

};

Game.PogoScreen.prototype.createBeachBall = function (func) {
    var container = new PIXI.Container();
    var ballContainer = new PIXI.Container();
    var ballObject = CC.Utility.pixiAtlasSprite("beachball_" + Math.floor(Math.random() * 5) + ".png");
    var ballObjectRing = CC.Utility.pixiAtlasSprite("beach_ball_ring.png");
    container.radius = 64;
    ballObject.rotation = Math.random() * Math.PI * 2;
    container.func = func;
    container.ballObject = ballContainer;
    container.ball = ballObject;
    ballObjectRing.alpha = 0.5;
    ballContainer.addChild(ballObject);
    ballContainer.addChild(ballObjectRing);
    container.addChild(ballContainer);
    return container;
};
Game.PogoScreen.prototype.createPlatform = function (func) {
    var platform = CC.Utility.pixiAtlasSprite("pogo_platform.png");
    //platform.anchor.y = 0.4;
    platform.func = func;
    platform.y = -20;
    return platform;
};
Game.PogoScreen.prototype.createCrowdAnim = function (id, x, y, scaleX, scaleY) {
    var crowd = CC.Utility.pixiAtlasMovieClip([
        "bg_crowd" + id + "0001.png",
        "bg_crowd" + id + "0002.png",
        "bg_crowd" + id + "0003.png",
        "bg_crowd" + id + "0004.png",
        "bg_crowd" + id + "0005.png",
        "bg_crowd" + id + "0006.png",
        "bg_crowd" + id + "0007.png",
        "bg_crowd" + id + "0008.png",
        "bg_crowd" + id + "0009.png"
    ], {
        anchor: "b"
    });
    crowd.animationSpeed = 25 / 60;
    crowd.x = x;
    crowd.y = y;
    crowd.scale.x = scaleX;
    crowd.scale.y = scaleY;
    crowd.gotoAndPlay(Math.floor(Math.random() * 10));
    return crowd;
};
Game.PogoScreen.prototype.createPogoStick = function (makeSound) {
    var container = new PIXI.Container();
    var containerStick = new PIXI.Container();
    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];
    var pogoStick = [
        new PIXI.spine.Spine(Game.animationList["pogo_character_" + (team * 2) + ""]),
        new PIXI.spine.Spine(Game.animationList["pogo_character_" + ((team * 2) + 1) + ""]),
    ];

    if (team + "" === "4") {
        pogoStick[0].cloud = new PIXI.spine.Spine(Game.animationList["cloud"]);
        pogoStick[0].cloud.state.setAnimation(0, "idle", true);
        pogoStick[0].cloud.x = -30;
        pogoStick[0].cloud.y = -150;
        pogoStick[0].addChild(pogoStick[0].cloud);
    }

    pogoStick[0].update(1);
    pogoStick[1].update(1);
    //CC.Utility.pixiAtlasMovieClip(["pogo_character_0.png", "pogo_character_1.png"]);
    //pogoStick.anchor.y = 1;
    //window.pogoTest = pogoStick[0]
    //var character = CC.Utility.pixiAtlasSprite("pogo_stick.png");
    pogoStick[0].state.setAnimation(1, "blink", true);
    pogoStick[1].state.setAnimation(1, "blink", true);

    pogoStick[0].stateData.setMix("land", "idle", 1);
    pogoStick[1].stateData.setMix("land", "idle", 1);
    pogoStick[0].stateData.setMix("idle", "land", 1);
    pogoStick[1].stateData.setMix("idle", "land", 1);
    // character.y = -90;
    //containerStick.addChild(character);
    containerStick.addChild(pogoStick[0]);
    containerStick.addChild(pogoStick[1]);
    pogoStick[1].visible = false;
    container.addChild(containerStick);
    container.stick = containerStick;
    if (makeSound) {

        pogoStick[0].state.onEvent = function (i, event) {
            if (pogoStick[0].visible) {
                Game.sound.play("pogo_bounce_2");
            }
        };
        pogoStick[1].state.onEvent = function (i, event) {
            if (pogoStick[1].visible) {
                Game.sound.play("pogo_bounce_2");
            }
        };
    }
    container.setCharacter = function (charIndex) {
        pogoStick[0].visible = !charIndex;
        pogoStick[1].visible = !!charIndex;
    };
    container.timer = 0;
    container.jumpChecker = function (delta) {
        container.stick.y = 70 * -(Math.abs(Math.sin(container.timer * 5)) * 0.5);
        container.timer += delta;
        if (container.timer > 0.62) {
            container.timer = 0;
            pogoStick[0].state.setAnimation(0, "land");
            pogoStick[1].state.setAnimation(0, "land");
        }
    };
    container.jumpState = function () {
        pogoStick[0].state.clearTrack(0);
        pogoStick[1].state.clearTrack(0);
        pogoStick[0].skeleton.setToSetupPose();
        pogoStick[1].skeleton.setToSetupPose();
    //   container.timer = 0;
     //   container.stick.y = 0;
        pogoStick[0].state.setAnimation(0, "idle", true);
        pogoStick[1].state.setAnimation(0, "idle", true);

    };
    return container;
};
Game.PogoScreen.prototype.createBackground = function () {
    var container = new PIXI.Container();
    var panelList = [];
    var panelListHillA = [];
    var panelListHillB = [];
    var spread = 680 * 0.25;

    var stadium = CC.Utility.pixiAtlasSprite("pogo_paralax_stadium_0.png");
    stadium.addChild(CC.Utility.pixiAtlasSprite("pogo_paralax_stadium_1.png"));

    var buoysSpread = 335;
    var buoys = CC.Utility.pixiAtlasSprite("pogo_floats_0.png");
    buoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png"));
    buoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_0.png", {x: buoysSpread}));
    buoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png", {x: buoysSpread}));
    buoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_0.png", {x: buoysSpread * -2}));
    buoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png", {x: buoysSpread * -2}));
    buoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_0.png", {x: -buoysSpread}));
    buoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png", {x: -buoysSpread}));

    container.frontBuoys = CC.Utility.pixiAtlasSprite("pogo_floats_0.png");
    container.frontBuoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png"));
    container.frontBuoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_0.png", {x: buoysSpread}));
    container.frontBuoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png", {x: buoysSpread}));
    container.frontBuoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_0.png", {x: buoysSpread * -2}));
    container.frontBuoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png", {x: buoysSpread * -2}));
    container.frontBuoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_0.png", {x: -buoysSpread}));
    container.frontBuoys.addChild(CC.Utility.pixiAtlasSprite("pogo_floats_1.png", {x: -buoysSpread}));
    container.addChild(stadium);
    buoys.y = 50;
    container.frontBuoys.y = 60;
    var frontScale = 1.5;
    var frontBuoysSpread = buoysSpread * frontScale;
    container.frontBuoys.scale.set(frontScale);

    for (var i = 0; i < 8; ++i) {

        var numberString = CC.Utility.intToString((i + 1), 2);
        var backgroundSection = CC.Utility.pixiAtlasSprite("pogo_paralax_hill_b_" + numberString + ".png");
        backgroundSection.x = i * spread;
        backgroundSection.index = i;
        panelListHillB.push(backgroundSection);
        container.addChild(backgroundSection);
    }

    for (var i = 0; i < 8; ++i) {
        var numberString = CC.Utility.intToString((i + 1), 2);
        var backgroundSection = CC.Utility.pixiAtlasSprite("pogo_paralax_hill_a_" + numberString + ".png");
        backgroundSection.x = i * spread;
        backgroundSection.index = i;
        panelListHillA.push(backgroundSection);
        container.addChild(backgroundSection);

    }
    for (var i = 0; i < 16; ++i) {
        var numberString = CC.Utility.intToString((i + 1), 2);
        var backgroundSection = CC.Utility.pixiAtlasSprite("pogo_paralax_beach_" + numberString + ".png");
        backgroundSection.x = i * spread;
        backgroundSection.index = i;
        panelList.push(backgroundSection);
        container.addChild(backgroundSection);
    }
    container.addChild(buoys);

    var panelDistance = spread * panelList.length;
    var halfDist = panelDistance * 0.5;
    var quaterDist = panelDistance * 0.25;
    /*panelList[0].addChild(this.createCrowdAnim(1, 101, 60, 1, 1));
     panelList[1].addChild(this.createCrowdAnim(2, 147, 60, 1, 1));
     panelList[3].addChild(this.createCrowdAnim(1, 147, 60, 1, 1));
     panelList[8].addChild(this.createCrowdAnim(2, 54, 60, 1, 1));
     panelList[11].addChild(this.createCrowdAnim(1, 117, 60, 0.6, 0.6));
     panelList[12].addChild(this.createCrowdAnim(2, 20, 60, 1, 1));*/
    container.update = function (cameraPos, delta) {

        stadium.x = -cameraPos.x + Math.sin(cameraPos.x * 0.0001) * 500 * 0.25;
        buoys.x = Math.floor(cameraPos.x / buoysSpread) * -buoysSpread + Math.modo(-cameraPos.x * 0.2, buoysSpread);
        this.frontBuoys.x = Math.floor(cameraPos.x / frontBuoysSpread) * -frontBuoysSpread + Math.modo(-cameraPos.x * -0.2, frontBuoysSpread);
        for (var i = 0; i < panelList.length; ++i) {
            var panel = panelList[i];
            panel.x = (Math.modo((i * spread) + ((cameraPos.x * 0.5) + halfDist), panelDistance) - cameraPos.x) - halfDist;
            panel.x = Math.floor(panel.x);
            for (var j = 0; j < panel.children.length; ++j) {
                if (panel.children[j].update) {
                    panel.children[j].update(delta || 0.016, j);
                }
            }
            if (i < 8) {
                panelListHillA[i].x = (Math.modo((i * spread) + ((cameraPos.x * 0.25) + quaterDist), halfDist) - cameraPos.x) - quaterDist;
                panelListHillB[i].x = (Math.modo((i * spread) + ((cameraPos.x * 0.125) + quaterDist), halfDist) - cameraPos.x) - quaterDist;
                panelListHillA[i].x = Math.floor(panelListHillA[i].x);
                panelListHillB[i].x = Math.floor(panelListHillB[i].x);

            }
        }
    };
    return container;
}