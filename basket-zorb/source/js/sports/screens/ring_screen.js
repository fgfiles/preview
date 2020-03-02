/**
 * Created by jonathan.kernick on 27/04/2017.
 */
Game.RingScreen = function () {
    Game.BaseScreen.call(this);
    this.backgroundColor = 0xEEEEFF;
    this.build();
};
Game.RingScreen.prototype = Object.create(Game.BaseScreen.prototype);
Game.RingScreen.prototype.constructor = Game.RingScreen;


Game.RingScreen.prototype.createRaceProgressIndicator = function () {
    var container = new PIXI.Container();
    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];
    var startMarker = CC.Utility.pixiAtlasSprite("ring_marker.png");
    startMarker.y = 3;
    //startMarker.scale.set(2);

    var backingMarker = CC.Utility.pixiAtlasSprite("ring_distance_tracker.png");
    container.addChild(backingMarker);
    container.addChild(startMarker);
    container.setDistance = function (value) {
        startMarker.x = Math.lerp(-467 * 0.25, 747 * 0.25, value);
    };
    container.setDistance(0);
    return container;
};

Game.RingScreen.prototype.build = function () {
    // Get an access token, so we can submit a score at the end.
    SS.getAccessToken();
    Game.sound.stopMusic();
    Game.sound.play("game_intro_sting",0.3);
    Game.sound.play("crowd_start");
    var dragSoundReady = 0;
    var playDragWaterSound = function () {
        if (!playerRubberRing.playerFlying && dragSoundReady < 0 && !theRaceIsOver) {
            Game.sound.play("ring_drag");
            dragSoundReady = 1;
        }
    };

    var tutorial = new SportsTutorial.Ring();
    var show = localStorage.getItem("boomerang_sports_app_tutorial_ring") === null
    if (show) {
        Game.webApp.juggler.addTimeout(function () {

            tutorial.show();
            localStorage.setItem("boomerang_sports_app_tutorial_ring", "yes");
        }, 1);
    }

    var speedBar = new PIXI.Graphics();
    speedBar.beginFill(0xFF0000);
    speedBar.drawRect(0, 0, 100, 20);
    speedBar.beginFill(0x0000FF);
    speedBar.drawRect(100, 0, 100, 20);
    speedBar.beginFill(0x00FF00);
    speedBar.drawRect(200, 0, 100, 20);
    var speedBarMarker = new PIXI.Graphics();
    speedBarMarker.beginFill(0xFFFF00);
    speedBarMarker.drawRect(0, 0, 1, 20);
    speedBar.addChild(speedBarMarker);
    speedBar.x = -400;
    speedBar.y = -250;
    var speedBoatSoundTime = 0;
    var speedBoatSoundTimeTotal = 100; //Game.sound._sprites["ring_boat"][1];
    //Game.sound.play("ring_boat");

    var paraShootTimeout = 0;


    var leftButton = CC.Utility.pixiAtlasSprite("button_left.png", {
        x: -65
    });
    var rightButton = CC.Utility.pixiAtlasSprite("button_right.png", {
        x: 65
    });

    Game.webApp.juggler.addObject(leftButton, 1);
    leftButton.update = function () {
        rightButton.x = ((CC.WebApp.current.screenWidth * 0.5) - 37.5);
        leftButton.x = ((CC.WebApp.current.screenWidth * -0.5) + 37.5);
    }
    //rightButton.scale.x = -1;
    //rightButton.visible = leftButton.visible = CC.isMobile;
    var container = new PIXI.Container();
    var cameraPosition = {
        x: 0,
        y: -2.5,
        z: 0
    };
    var cameraPositionPlayer = {
        x: 0,
        y: 20,
        z: 0
    };
    var cameraVelocity = {
        x: 0,
        y: 0,
        z: 0
    };

    var trackSections = [
        [],
        [
            [1, 10, "obst"]
        ],
        [
            [0, 10, "ramp"],
            [2, 10, "coll"]
        ],
        [
            [0, 10, "ramp"],
            [1, 10, "ramp"],
            [2, 10, "ramp"]
        ],
        [
            [0, 10, "obst"],
            [2, 10, "ramp"]
        ],
        [
            [0, 10, "ramp"],
            [2, 10, "ramp"],
            [0, 15, "coll"],
            [2, 15, "obst"]
        ],
        [
            [0, 10, "ramp"],
            [1, 18, "obst"],
            [2, 10, "ramp"]
        ],
        [
            [0, 10, "obst"],
            [1, 12, "ramp"],
            [1, 19, "coll"],
            [2, 10, "obst"]
        ],
        [
            [0, 2, "ramp"],
            [2, 7, "obst"],
            [2, 12, "coll"],
            [0, 15, "obst"]
        ],
        [
            [1, 3, "ramp"],
            [0, 10, "obst"],
            [1, 10, "coll"],
            [2, 10, "obst"],
            [1, 15, "ramp"]
        ],
        [
            [1, 19, "win"],
        ],
        [
            [1, 3, "ramp"],
            [0, 10, "obst"],
            [0, 15, "para"],
            [2, 10, "obst"],
            [2, 15, "ramp"]
        ]
    ];
    /* var trackChoice = [
     [0],
     [3, 2, 1],
     [3, 2, 1],
     [3, 2, 1],
     [3, 2, 1],
     [3, 4, 5],
     [3, 2, 1],
     [11],
     [3, 2, 1],
     [3, 4, 5, 6],
     [3, 4, 5, 6],
     [3, 4, 5, 6],
     [3, 4, 5, 6],
     [3, 4, 5, 6],
     [3, 4, 5, 6],
     [3, 6, 7, 8],
     [3, 6, 7, 8],
     [11],
     [3, 6, 7, 8],
     [3, 6, 7, 8],
     [3, 6, 7, 8],
     [7, 8, 9],
     [7, 8, 9],
     [10],
     [0],
     [0],
     [0],
     [0],
     [0]
     ];*/
    var trackChoice = [
        [0],
        [3],
        [2],
        [1],
        [3],
        [4],
        [11],
        [2],
        [3],
        [5],
        [6],
        [4],
        [3],
        [7],
        [5],
        [4],
        [11],
        [8],
        [7],
        [6],
        [3],
        [5],
        [9],
        [10],
        [0],
        [0],
        [0],
        [0],
        [0]
    ];

    var trackChoiceIndex = 0;
    var cameraRoll = 0;
    var cameraYaw = 0;
    var cameraPitch = 0;
    var psudo3dHolder = new PIXI.Container();
    var cameraSwayHolder = new PIXI.Container();
    var waveEffectHolder = new PIXI.Container();
    var psudo3dObjectsArray = [];
    var buoyPool = [];
    var oldLeftArrowDown = false;
    var oldRightArrowDown = false;
    var leftArrowDown = false;
    var rightArrowDown = false;
    var upArrowDown = false;
    var downArrowDown = false;
    var touchingScreen = false;
    var rope = new PIXI.Graphics();
    var sea = new PIXI.Graphics();
    var skyLine = new PIXI.Container();
    var skyPartCount = 5;
    var countdownWhistleSoundPlayed = false;
    for (var i = 0; i < skyPartCount; ++i) {
        var cloudName = "cloud" + Math.round(Math.random()) + "_big.png";
        var cloudX = Math.sin(Math.random() * 10) * 100;
        var cloudY = Math.sin(Math.random() * 10) * 25;
        skyLine.addChild(CC.Utility.pixiAtlasSprite(cloudName, {
            x: ((-skyPartCount + i) * 500) + cloudX,
            y: cloudY - 100
        }));
        skyLine.addChild(CC.Utility.pixiAtlasSprite(cloudName, {
            x: (i * 2000) + cloudX,
            y: cloudY - 100
        }));
        skyLine.addChild(CC.Utility.pixiAtlasSprite(cloudName, {
            x: ((skyPartCount + i) * 500) + cloudX,
            y: cloudY - 100
        }));
        skyLine.addChild(CC.Utility.pixiAtlasSprite("ring_island_" + i + ".png", {
            x: (-skyPartCount + i) * 500,
            anchor: "b"
        }));
        skyLine.addChild(CC.Utility.pixiAtlasSprite("ring_island_" + i + ".png", {
            x: (i) * 500,
            anchor: "b"
        }));
        skyLine.addChild(CC.Utility.pixiAtlasSprite("ring_island_" + i + ".png", {
            x: (skyPartCount + i) * 500,
            anchor: "b"
        }));
    }
    var waveEffectPool = [];
    var waveCount = 10;
    var lens = {
        focus: 1000,
        focusTarget: 1000
    };

    for (var i = 0; i < waveCount; ++i) {
        var wave = CC.Utility.pixiTilingSprite("ring_waves.png", 700, 95 * 0.25);
        wave.anchor.y = 0;
        wave.tilePosition.x = 350;
        wave.offsetYaw = Math.random() * Math.PI * 500;
        waveEffectHolder.addChild(wave);
        waveEffectPool.push(wave);
    }

   // console.log(wave);

    var backgroundGrad = CC.Utility.pixiAtlasSprite("ring_background.png", {
        scale: {
            x: 100,
            y: 2.4
        }
    });
    //sky.anchor.y = 1;

    var trackAngleCurrent = 0;

    var raceTimerTracker = 0;

    var theRaceIsOver = false;
    var stopAllTogether = false;
    var trackAngleMul = 1;
    var trackAngleNext = 0;
    var trackMaxSteps = 20;
    var trackDist = 50;
    var trackDistanceTraveled = 0;
    var cameraMovementForward = 0;
    var trackTotalDistance = 500;
    var trackCurrentStep = 0;
    var trackPath = [{
        x: 0,
        y: 0,
        z: 0
    }];
    var buoyIndex = 0;
    var rampFlipper = 1;
    var nodeSkipper = 0;
    var lastTrackAngle = 0;
    var collectableAlotment = 4;
    var trackPartsGenerated = 0;
    var addTrackPath = function () {

        if (countDown < 3) {
            trackPartsGenerated++;
        }
        trackAngleNext = trackAngleCurrent + ((Math.random() - 0.5) * trackAngleMul);
        if (countDown < 0 && trackAngleMul < 2) {
            trackAngleMul += 0.3;
        }
        for (var i = 0; i < trackMaxSteps; ++i) {
            var currentAngle = Math.lerp(trackAngleCurrent, trackAngleNext, i / trackMaxSteps);
            var nextNode = {
                x: trackPath[trackPath.length - 1].x,
                z: trackPath[trackPath.length - 1].z
            };
            nodeSkipper++;
            if (nodeSkipper > 1) {
                addBuoy((nextNode.x + (Math.sin(currentAngle + (Math.PI * 0.5)) * trackDist * 0.5)), (nextNode.z + (Math.cos(currentAngle + (Math.PI * 0.5)) * trackDist * 0.5)));
                addBuoy((nextNode.x + -(Math.sin(currentAngle + (Math.PI * 0.5)) * trackDist * 0.5)), (nextNode.z + -(Math.cos(currentAngle + (Math.PI * 0.5)) * trackDist * 0.5)));
                nodeSkipper = 0;

            }
            nextNode.x += Math.sin(currentAngle) * trackDist;
            nextNode.z += Math.cos(currentAngle) * trackDist;
            nextNode.theta = currentAngle;
            nextNode.angle = currentAngle - lastTrackAngle;
            trackPath.push(nextNode);
            lastTrackAngle = currentAngle;
        }

        //trackAngleNext;
        trackAngleCurrent = trackAngleNext;
        var lastTrack = currentTrack;
        var tracksForPlacement = trackChoice[trackChoiceIndex];
        var trackIndexForPlacement = Math.floor(tracksForPlacement.length * Math.random());
        var currentTrack = trackSections[tracksForPlacement[trackIndexForPlacement]];
        if (lastTrack === currentTrack) {
            currentTrack = trackSections[tracksForPlacement[(trackIndexForPlacement + 1) % tracksForPlacement.length]];
        }
        trackChoiceIndex = (trackChoiceIndex + 1) % trackChoice.length;
        var nextNode = trackPath[trackPath.length - 2];
        var perpAngle = (nextNode.theta + (Math.PI * 0.5));
        var xPos = (nextNode.x + (Math.sin(perpAngle) * trackDist * -0.9));
        var zPos = (nextNode.z + (Math.cos(perpAngle) * trackDist * -0.9));
        switch (trackChoiceIndex) {
            case 4:
                // addDistanceMarker(xPos, zPos, 0);
                break;
            case 9:
                //  addDistanceMarker(xPos, zPos, 1);
                break;
            case 14:
                //  addDistanceMarker(xPos, zPos, 2);
                break;
            case 19:
                //  addDistanceMarker(xPos, zPos, 3);
                break;
        }
        for (var i = 0; i < currentTrack.length; ++i) {
            var trackObject = currentTrack[i];

            nextNode = trackPath[((trackPath.length - 21) + trackObject[1])];
            perpAngle = (nextNode.theta + (Math.PI * 0.5));
            lane = trackObject[0] - 1;
            xPos = (nextNode.x + (Math.sin(perpAngle) * trackDist * lane * 0.3));
            zPos = (nextNode.z + (Math.cos(perpAngle) * trackDist * lane * 0.3));
            switch (trackObject[2]) {
                case "ramp":
                    addRamp(xPos, zPos, -nextNode.theta);
                    break;
                case "obst":
                    addObstacle(xPos, zPos);
                    break;
                case "coll":
                    addCollectable(xPos, zPos, 1);
                    break;
                case "para":
                    addCollectable(xPos, zPos, 0);
                    break;
                case "win":
                    addWinPosts(xPos, zPos, perpAngle);
                    break;
            }
        }
    };

    var addRamp = function (x, z, rot) {
        var ramp = rampArray[rampIndex];
        ramp.unJumped = true;
        ramp.pos.x = x;
        ramp.pos.z = z;
        ramp.rot = rot;
        rampIndex = (rampIndex + 1) % rampArray.length;
    };
    var addCollectable = function (x, z, type) {
        collectablePool[collectableIndex].pos.x = x;
        collectablePool[collectableIndex].pos.y = 25;
        collectablePool[collectableIndex].pos.z = z;
        collectablePool[collectableIndex].type = type;
        collectablePool[collectableIndex].collected = false;
        collectablePool[collectableIndex].scalar = 1;
        collectablePool[collectableIndex].gotoAndStop(!!type);
        collectableIndex = (collectableIndex + 1) % collectablePool.length;
    };
    var addObstacle = function (x, z) {
        obstaclePool[obstacleIndex].pos.x = x;
        obstaclePool[obstacleIndex].pos.y = 27;
        obstaclePool[obstacleIndex].pos.z = z;
        obstaclePool[obstacleIndex].hit = false;
        obstaclePool[obstacleIndex].alpha = 1;
        obstacleIndex = (obstacleIndex + 1) % obstaclePool.length;
    };
    var addBuoy = function (x, z) {
        buoyPool[buoyIndex].pos.x = x;
        buoyPool[buoyIndex].pos.z = z;
        buoyIndex = (buoyIndex + 1) % buoyPool.length;
    };
    var addDistanceMarker = function (x, z, index) {
        distanceMarkers[index].pos.x = x;
        distanceMarkers[index].pos.z = z;
    };


    var distanceSize = Math.round(180 * 0.2);
    var distanceText = new PIXI.Container();
    var distanceTextOutside = new PIXI.extras.BitmapText("0", {
        font: distanceSize + "px zorb_ball_font_outline",
        align: "center"
    });
    var distanceTextInside = new PIXI.extras.BitmapText("10:15", {
        font: distanceSize + "px zorb_ball_font",
        align: "center"
    });

    var raceIndicator = this.createRaceProgressIndicator();
    raceIndicator.y = 175;
    distanceText.addChild(distanceTextOutside);
    distanceText.addChild(distanceTextInside);
    distanceTextOutside.x = distanceTextInside.x = 83 * 0.25;
    distanceTextOutside.y = distanceTextInside.y = -90 * 0.25;
    distanceText.x = -830 * 0.25;
    distanceText.y = 730 * 0.25;


    this.backgroundFade = CC.Utility.pixiAtlasSprite("ui_background_0.png", {alpha: 0});
    this.backgroundFade.show = function () {
        TweenLite.to(this, 1, {alpha: 1});
    };
    this.backgroundFade.addChild(CC.Utility.pixiAtlasSprite("ui_background_1.png"));


    var countdownAnim = new PIXI.spine.Spine(Game.animationList["countdown"]);
    countdownAnim.visible = false;
    countdownAnim.preWait = 1.5;
    countdownAnim.preWaitOver = false;
    var countDown = 3;
    var completed = false;
    countdownAnim.y = 20;
    countdownAnim.state.onEvent = function (i, event) {
        if (event.stringValue === "sound_beep") {
            Game.sound.play("beep");
        } else {
            if (!completed) {
                Game.sound.playMusic("ring_music_0", 0.3);
                setTimeout(function(){
                    Game.sound.play("tag_line_race");
                }, 500);
                completed = true;
            }

            Game.sound.play("ball_start_whistle");
        }
    };

    sea.beginFill(0x3e3e3e);
    sea.drawRect(-500, 0, 1000, 1000);
    cameraSwayHolder.addChild(sea);
    container.interactive = true;
    container.hitArea = new PIXI.Rectangle(-500, -500, 1000, 1000);
    container.touchstart = container.mousedown = function (eventFeedback) {
        var mousePos = eventFeedback.data.getLocalPosition(container);
        touchingScreen = true;
        this.touchmove(eventFeedback);
    };
    container.touchmove = container.mousemove = function (eventFeedback) {
        var mousePos = eventFeedback.data.getLocalPosition(container);
        if (touchingScreen) {
            if (mousePos.x > 0) {
                rightArrowDown = true;
                leftArrowDown = false;
                leftButton.scale.x = 1;
                leftButton.scale.y = 1;
                rightButton.scale.x = 1.2;
                rightButton.scale.y = 1.2;
                leftButton.alpha = 1;
                rightButton.alpha = 0.5;
                playDragWaterSound();
            } else {
                leftArrowDown = true;
                rightArrowDown = false;
                leftButton.scale.x = 1.2;
                leftButton.scale.y = 1.2;
                rightButton.scale.x = 1;
                rightButton.scale.y = 1;
                leftButton.alpha = 0.5;
                rightButton.alpha = 1;
                playDragWaterSound();
            }
        }
    };

    container.touchend = container.mouseup = function () {
        leftArrowDown = false;
        rightArrowDown = false;
        upArrowDown = false;
        downArrowDown = false;
        touchingScreen = false;
        leftButton.scale.x = 1;
        leftButton.scale.y = 1;
        rightButton.scale.x = 1;
        rightButton.scale.y = 1;
        leftButton.alpha = 1;
        rightButton.alpha = 1;
    };


    // var slices = 20;
    var collectablePool = [];
    var distanceMarkers = [];
    var obstaclePool = [];
    var collectableIndex = 0;
    var obstacleIndex = 0;
    var rampArray = [];
    var rampIndex = 0;
    for (var i = 0; i < 20; ++i) {
        var graphicsRamp = new Graphics3D();
        psudo3dHolder.addChild(graphicsRamp);

        graphicsRamp.addVertex(10, -10, 20);
        graphicsRamp.addVertex(10, 0, -0);
        graphicsRamp.addVertex(-10, 0, 0);
        graphicsRamp.addVertex(-10, -10, 20);

        graphicsRamp.addVertex(-10, 0, 20);
        graphicsRamp.addVertex(10, 0, 20);

        graphicsRamp.addVertex(0, -8.75, 17.5);
        graphicsRamp.addVertex(7, -6.25, 12.5);
        graphicsRamp.addVertex(-7, -6.25, 12.5);

        graphicsRamp.addVertex(0, -3.75, 7.5);
        graphicsRamp.addVertex(7, -1.25, 2.5);
        graphicsRamp.addVertex(-7, -1.25, 2.5);

        graphicsRamp.addTri(0, 1, 3, 0xFF56C0);
        graphicsRamp.addTri(1, 2, 3, 0xFF56C0);
        graphicsRamp.addTri(3, 2, 4, 0xCC4499);
        graphicsRamp.addTri(0, 5, 1, 0xCC4499);

        graphicsRamp.addTri(6, 7, 8, 0xFFCCEB);
        graphicsRamp.addTri(9, 10, 11, 0xFFCCEB);

        graphicsRamp.pos.y = 30;
        graphicsRamp.scalar = 0.5;
        graphicsRamp.unJumped = true;
        rampArray.push(graphicsRamp);
        psudo3dObjectsArray.push(graphicsRamp);
    }
    var ropeNode = new PIXI.Container();
    ropeNode.pos = {
        x: 0,
        y: 10,
        z: 0
    };
    ropeNode.transPos = {};
    ropeNode.scalar = 1;
    psudo3dHolder.addChild(ropeNode);
    psudo3dObjectsArray.push(ropeNode);

    var boatConnector = new PIXI.Container();
    boatConnector.pos = {
        x: 0,
        y: 40,
        z: 0
    };
    boatConnector.transPos = {};
    boatConnector.scalar = 1;
    psudo3dHolder.addChild(boatConnector);
    psudo3dObjectsArray.push(boatConnector);

    var winPostA = new PIXI.spine.Spine(Game.animationList["race_ref"]);
    winPostA.state.setAnimation(0, "animation", true)
    var winPostB = CC.Utility.pixiAtlasSprite("end_post_right.png");
    winPostA.pos = {
        x: 0,
        y: 20,
        z: 0
    };
    winPostB.pos = {
        x: 0,
        y: 0,
        z: 0
    };
    winPostA.scalar = 1;
    winPostB.scalar = 1;
    var addWinPosts = function (posX, posZ, angle) {
        winPostA.pos.x = (posX + (Math.sin(angle) * -25));
        winPostA.pos.z = (posZ + (Math.cos(angle) * -25));
        winPostB.pos.x = (posX + (Math.sin(angle) * -25));
        winPostB.pos.z = (posZ + (Math.cos(angle) * -25));
    };
    winPostA.transPos = {};
    winPostB.transPos = {};
    psudo3dHolder.addChild(winPostA);
    psudo3dObjectsArray.push(winPostA);
    //psudo3dHolder.addChild(winPostB);
    //psudo3dObjectsArray.push(winPostB);

    var team = SS.selectedTeam ? SS.selectedTeam.id : URLQuery[2];
    var speedBoat = CC.Utility.pixiAtlasMovieClip([
        "boat_anim_" + ((team * 2) + 1) + "_0001.png",
        "boat_anim_" + ((team * 2) + 1) + "_0002.png",
        "boat_anim_" + ((team * 2) + 1) + "_0003.png",
        "boat_anim_" + ((team * 2) + 1) + "_0004.png",
        "boat_anim_" + ((team * 2) + 1) + "_0005.png",
        "boat_anim_" + ((team * 2) + 1) + "_0006.png",
        "boat_anim_" + ((team * 2) + 1) + "_0007.png",
        "boat_anim_" + ((team * 2) + 1) + "_0008.png",
        "boat_anim_" + ((team * 2) + 1) + "_0009.png",
        "boat_anim_" + ((team * 2) + 1) + "_0010.png",
        "boat_anim_" + ((team * 2) + 1) + "_0011.png",
        "boat_anim_" + ((team * 2) + 1) + "_0012.png",
        "boat_anim_" + ((team * 2) + 1) + "_0013.png",
        "boat_anim_" + ((team * 2) + 1) + "_0014.png"
    ]);
    speedBoat.targetRot = 0;
    //  speedBoat.addChild(speedBoat.side);
    // speedBoat.addChild(speedBoat.rear);
    // speedBoat.addChild(speedBoat.motor);
    speedBoat.boat = true;
    speedBoat.loop = false;
    //speedBoat.side.anchor.y = 0;
    speedBoat.pos = {
        x: 0,
        y: 14,
        z: 0
    };
    speedBoat.transPos = {};
    speedBoat.scalar = 5;
    speedBoat.splash = new PIXI.Container();
    speedBoat.splashL = new PIXI.spine.Spine(Game.animationList["ring_splashes"]);
    speedBoat.splashM = new PIXI.spine.Spine(Game.animationList["ring_wave"]);
    speedBoat.splashR = new PIXI.spine.Spine(Game.animationList["ring_splashes"]);
    speedBoat.splashR.scale.x = -1;
    speedBoat.splash.scale.x = 0.3;
    speedBoat.splash.scale.y = speedBoat.splash.scale.x;
    speedBoat.splashL.x = -25;
    speedBoat.splashR.x = 25;
    speedBoat.splashR.y = 75;
    speedBoat.splashL.y = 75;
    speedBoat.splashM.y = 75;
    speedBoat.gotoAndStop(5);
    speedBoat.splash.addChild(speedBoat.splashL);
    speedBoat.splash.addChild(speedBoat.splashR);
    speedBoat.splash.addChild(speedBoat.splashM);


    speedBoat.splashR.update(Math.random());
    speedBoat.splashL.update(Math.random());
    speedBoat.splashR.state.setAnimation(0, "animation", true);
    speedBoat.splashL.state.setAnimation(0, "animation", true);
    speedBoat.splashM.state.setAnimation(0, "animation", true);

    speedBoat.addChild(speedBoat.splash);
    psudo3dHolder.addChild(speedBoat);
    psudo3dObjectsArray.push(speedBoat);


    var playerRubberRing = new PIXI.Container(); // CC.Utility.pixiAtlasSprite("rubber_ring.png");
    var playerRubberRingOver = new PIXI.spine.Spine(Game.animationList["ring_character_" + (team * 2) + ""],true);

    if (team + "" === "4") {
        playerRubberRingOver.cloud = new PIXI.spine.Spine(Game.animationList["cloud"]);
        playerRubberRingOver.cloud.state.setAnimation(0, "idle", true);
        playerRubberRingOver.cloud.y = -120;
        playerRubberRingOver.cloud.scale.set(1.5);
        playerRubberRingOver.addChild(playerRubberRingOver.cloud);
    }
    var playerSplashesLeft = new PIXI.spine.Spine(Game.animationList["ring_splashes"]);
    var playerSplashesRight = new PIXI.spine.Spine(Game.animationList["ring_splashes"]);
    var playerSplashesMiddle = new PIXI.spine.Spine(Game.animationList["ring_wave"]);
    var playerBoostA = new PIXI.spine.Spine(Game.animationList["boost"]);
    var playerBoostB = new PIXI.spine.Spine(Game.animationList["boost"]);
    var playerObstacleSmash = new PIXI.spine.Spine(Game.animationList["obstacle_smash"]);
    var paraglider = new PIXI.spine.Spine(Game.animationList["paraglider"]);
    paraglider.y = 2.5;
    paraglider.alpha = 0;
    playerRubberRingOver.addChild(paraglider);
    playerObstacleSmash.visible = false;
    playerSplashesRight.scale.x = -1;
    playerRubberRingOver.splashScale = 1;
    playerSplashesLeft.y = 40;
    playerSplashesRight.y = 40;
    playerSplashesLeft.x = -25;
    playerSplashesRight.x = 25;
    playerSplashesMiddle.y = 40;
    playerRubberRingOver.addChild(playerSplashesRight);
    playerRubberRingOver.addChild(playerSplashesLeft);
    playerRubberRingOver.addChild(playerSplashesMiddle);
    playerSplashesRight.update(Math.random());
    playerSplashesLeft.update(Math.random());
    playerSplashesRight.state.setAnimation(0, "animation", true);
    playerSplashesLeft.state.setAnimation(0, "animation", true);
    playerSplashesMiddle.state.setAnimation(0, "animation", true);
    playerBoostA.state.setAnimation(0, "boost_0");
    playerBoostA.state.setAnimation(0, "boost_0");
    playerBoostB.state.setAnimation(0, "boost_0");
    playerBoostB.rotation = 2;

    playerRubberRingOver.lean = "center";
    playerRubberRing.speed = 1;
    playerRubberRing.positionSlide = 0;
    playerRubberRing.velocitySlide = 0;
    playerRubberRing.slideSpeed = 100;
    playerRubberRing.playerFlying = 0;
    playerRubberRing.pos = {
        x: 0,
        y: 6.5,
        z: 0
    };
    cameraPitch = -150;
    playerRubberRing.transPos = {};
    playerRubberRing.scalar = 1;
    playerRubberRing.playerJumping = 30;
    psudo3dHolder.addChild(playerRubberRing);
    psudo3dObjectsArray.push(playerRubberRing);

    for (var i = 0; i < 80; ++i) {
        var threeDObject = new PIXI.Container(); //CC.Utility.pixiAtlasSprite("marker_buoy_bottom.png");
        threeDObject.top = CC.Utility.pixiAtlasSprite("marker_buoy_top.png");
        threeDObject.bottom = CC.Utility.pixiAtlasSprite("marker_buoy_bottom.png");
        threeDObject.addChild(threeDObject.top);
        threeDObject.addChild(threeDObject.bottom);
        //threeDObject.visible = false;
        //threeDObject.tint = tint;
        //threeDObject.top.tint = tint;
        threeDObject.pos = {
            x: 0,
            y: 30,
            z: 0
        };
        threeDObject.transPos = {
            x: 0,
            y: 0,
            z: 0
        };
        threeDObject.scalar = 1;
        threeDObject.buoy = true;
        buoyPool.push(threeDObject);
        psudo3dHolder.addChild(threeDObject);
        psudo3dObjectsArray.push(threeDObject);
    }

    for (var i = 0; i < 4; ++i) {
        var threeDObject = CC.Utility.pixiAtlasSprite("distance_markers000" + (i + 1) + ".png");
        threeDObject.pos = {
            x: 0,
            y: 15,
            z: 0
        };
        threeDObject.transPos = {};
        threeDObject.scalar = 2;
        distanceMarkers.push(threeDObject);
        psudo3dHolder.addChild(threeDObject);
        psudo3dObjectsArray.push(threeDObject);
    }
    for (var i = 0; i < 10; ++i) {
        var tint = CC.Color.HexLerp(0x888888, 0xFFFFFF, Math.random());
        var threeDObject = CC.Utility.pixiAtlasMovieClip(["power_up.png", "collectible.png"]);
        threeDObject.alpha = 1;
        threeDObject.pos = {};
        threeDObject.transPos = {};
        threeDObject.pos.x = 0;
        threeDObject.pos.y = 0;
        threeDObject.pos.z = 0;
        threeDObject.scalar = 0.25;
        collectablePool.push(threeDObject);
        psudo3dHolder.addChild(threeDObject);
        psudo3dObjectsArray.push(threeDObject);
    }
    for (var i = 0; i < 10; ++i) {
        var tint = CC.Color.HexLerp(0x888888, 0xFFFFFF, Math.random());
        var threeDObject = CC.Utility.pixiAtlasSprite("obstacle.png");
        threeDObject.alpha = 1;
        threeDObject.pos = {};
        threeDObject.transPos = {};
        threeDObject.pos.x = 0;
        threeDObject.pos.y = 0;
        threeDObject.pos.z = 0;
        threeDObject.scalar = 2;
        obstaclePool.push(threeDObject);
        psudo3dHolder.addChild(threeDObject);
        psudo3dObjectsArray.push(threeDObject);
    }
    var timer = 0;
    var threeDObject, threeDObjectTest, closest;
    var zScale;
    var closestIndex;
    var relaxToCenterTimedown = 0;
    addTrackPath();
    addTrackPath();
    var trackMovement = 0;

    var stopBoatAtcentre = false;

    var perpX = 0;
    var perpY = 0;
    var i;
    var self = this;
    var updateFunc = function (delta) {
        delta = Math.min(delta, 0.06);
        speedBoatSoundTime += delta;
        dragSoundReady -= delta;
        if (speedBoatSoundTime > speedBoatSoundTimeTotal) {
            speedBoatSoundTime = 0;
            //  Game.sound.play("ring_boat");
        }
        //preWait
        if (!countdownAnim.preWaitOver) {
            countdownAnim.preWait -= delta;
            if (countdownAnim.preWait < 0) {
                countdownAnim.preWaitOver = true;
                countdownAnim.visible = true;
                countdownAnim.state.setAnimation(0, "countdown");
            }
        }


        if (paraShootTimeout > 0) {
            paraShootTimeout -= delta;
            if (paraShootTimeout <= 0) {
                TweenLite.to(paraglider, 0.5, {
                    y: -125,
                    alpha: 0,
                });
                TweenLite.to(playerRubberRing, 1, {
                    playerFlying: 0,
                    ease: Bounce.easeOut
                });

                Game.sound.playMusic("ring_music_0", 0.3);
                setTimeout(function () {
                    Game.sound.play("ring_land");
                }, 300);
                TweenLite.to(lens, 1, {
                    focus: 1000
                });

            }
        }
        /* if(stopBoatAtcentre && Math.round(speedBoat.currentFrame) === 5)
         {
         speedBoat.gotoAndStop(5);
         }
         else
         {
         speedBoat.play();
         }*/
        timer += delta * 2;
        countDown -= delta;
        /* if (!countdownWhistleSoundPlayed && countDown < 0.25) {
         countdownWhistleSoundPlayed = true;
         Game.sound.play("ball_start_whistle");
         }*/


        playerRubberRing.pos.y = (Math.sin(timer * 3) * 5 + 10) * playerRubberRing.playerFlying;
        playerRubberRing.pos.y += playerRubberRing.playerJumping * (1 - playerRubberRing.playerFlying);
        cameraPitch = -50 * playerRubberRing.playerFlying;
        var trackDelta = delta * 10 * playerRubberRing.speed * 0.666;
        // lens.focus = Math.lerp(lens.focus,lens.focusTarget,0.1);
        relaxToCenterTimedown -= delta;
        playerRubberRing.speed = Math.min(playerRubberRing.speed, 3);
        playerRubberRing.speed = Math.max(playerRubberRing.speed, 0.3);
        //playerRubberRing.speed = Math.lerp(playerRubberRing.speed, 1, 0.01);
        if (playerRubberRing.speed > 1 && !playerRubberRing.playerFlying) {
            playerRubberRing.speed -= delta * 0.5;
        }
        if (playerRubberRing.speed < 1 && !playerRubberRing.playerFlying) {
            playerRubberRing.speed += delta * 0.5;
        }
        if (playerRubberRing.speed !== 1 && Math.abs(playerRubberRing.speed) < 0.5 && !playerRubberRing.playerFlying) {
            playerRubberRing.speed = 1;
        }
        //the rubber ring is flying now ignore all speed settings and let it rip
        if (playerRubberRing.playerFlying) {
            playerRubberRing.speed = (1.5 + playerRubberRing.playerFlying)
        }
        speedBarMarker.x = playerRubberRing.speed * 100;
        trackMovement += trackDelta;
        var raceMinute = Math.floor(raceTimerTracker / 60) % 60;
        var raceSeconds = Math.floor(raceTimerTracker % 60);
        var raceMilSeconds = Math.floor((raceTimerTracker % 60) * 100) % 100;
        //distanceText.x = CC.WebApp.current.screenWidth * -0.5;
        distanceTextOutside.text = raceMinute + ":" + CC.Utility.intToString(raceSeconds, 2) // + ":" + CC.Utility.intToString(raceMilSeconds, 2);
        distanceTextInside.text = distanceTextOutside.text;
        // sky.tilePosition.x = (-cameraYaw / Math.PI) * 2000;
        skyLine.x = Math.modo((-cameraYaw / Math.PI) * skyPartCount * 500, skyPartCount * 500) - 250;

        for (i = 0; i < waveCount; ++i) {
            var wave = waveEffectPool[i];
            wave.z = i * 100;
            wave.z = Math.modo(wave.z - (cameraMovementForward * 12.5), waveCount * 100) - 25;
            wave.scale.y = (lens.focus * 0.1) / wave.z;
            wave.tileScale.x = wave.scale.y;
            wave.tileTransform.pivot.x = cameraYaw * 1000;
            //  wave.tileTransform.position.x = -cameraYaw + 350;
            //  wave.x = cameraYaw*-1000;
            if (Game.webApp.renderer.gl) {
            } else {
                // wave.tilePosition.x = ((cameraYaw + wave.offsetYaw) * wave.tileScale.x);
            }
            //wave.tilePosition.x = -((cameraYaw + wave.offsetYaw) * wave.tileScale.x);
            wave.y = wave.scale.y * 25;
            wave.visible = wave.y > 0 && wave.tileScale.x > 0.125;
            // wave.scale.y = Math.abs(Math.sin(wave.y / 720))*2;
            wave.alpha = Math.min(wave.tileScale.x, 1);
            //wave.scale.x = ((i%2)-0.5)*2
        }

        /*cameraVelocity.x *= 0.99;
         cameraVelocity.y *= 0.99;
         cameraVelocity.z *= 0.99;
         cameraPosition.x += cameraVelocity.x*delta;
         cameraPosition.y += cameraVelocity.y*delta;
         cameraPosition.z += cameraVelocity.z*delta;*/
        if (!theRaceIsOver) {
            cameraMovementForward += trackDelta;
        }
        if (countDown < -countdownAnim.preWait && !theRaceIsOver) {
            trackDistanceTraveled += trackDelta;
            raceTimerTracker += delta;
        }

        //if you are close enough to marvin the track is over
        var posX = playerRubberRing.pos.x - winPostA.pos.x;
        var posZ = playerRubberRing.pos.z - winPostA.pos.z;
        var marvinDistanceSqr = ((posX * posX) + (posZ * posZ));

        // END OF GAME.
        if (countDown < 0 && !theRaceIsOver && marvinDistanceSqr < 40000) {
            theRaceIsOver = true;

            // Send score to server.
            // SS.sendScore(0);
            // Update local score cache.
            SS.updateTeamScores();

            Game.webApp.juggler.addTimeout(function () {
                countdownAnim.state.setAnimation(0, "game_end");
            }, 0.3);
            Game.webApp.juggler.addTimeout(function () {
                var raceScore = Math.max(0, (Math.value(55, 33, raceTimerTracker) * 200));
                Game.webApp.swapScreen(Game.EndScreen, {
                    icon: "ring", game: raceTimerTracker, gameScreenClass: Game.RingScreen, score: Math.ceil(raceScore)
                })
                stopAllTogether = true;
            }, 1.5);
        }
        raceIndicator.setDistance(Math.min(1, trackDistanceTraveled / trackTotalDistance));


        if (!stopAllTogether) {
            cameraPositionPlayer.x = Math.lerp(trackPath[0].x, trackPath[1].x, trackMovement);
            cameraPositionPlayer.z = Math.lerp(trackPath[0].z, trackPath[1].z, trackMovement);

            if (!theRaceIsOver) {
                cameraPosition.x = cameraPositionPlayer.x;
                cameraPosition.y = cameraPositionPlayer.y;
                cameraPosition.z = cameraPositionPlayer.z;
            }
            cameraYaw = Math.atan2(
                Math.lerp(trackPath[1].x, trackPath[2].x, trackMovement) - cameraPosition.x,
                Math.lerp(trackPath[1].z, trackPath[2].z, trackMovement) - cameraPosition.z);
            var perpX = -(trackPath[7].z - trackPath[8].z);
            var perpZ = trackPath[7].x - trackPath[8].x;
            speedBoat.pos.x = Math.lerp(trackPath[10].x, trackPath[11].x, trackMovement) + (perpX * 2);
            speedBoat.pos.z = Math.lerp(trackPath[10].z, trackPath[11].z, trackMovement) + (perpZ * 2);
        }
        boatConnector.pos.x = speedBoat.pos.x + Math.sin(cameraYaw) * -50;
        boatConnector.pos.z = speedBoat.pos.z + Math.cos(cameraYaw) * -50;
        ropeNode.pos.x = Math.lerp(ropeNode.pos.x, ((playerRubberRing.pos.x + speedBoat.pos.x) * 0.5), 1);
        ropeNode.pos.z = Math.lerp(ropeNode.pos.z, ((playerRubberRing.pos.z + speedBoat.pos.z) * 0.5), 1);
        //cameraPosition.z = Math.lerp(trackPath[0].z,trackPath[1].z,trackMovement);
        if (trackMovement >= 1) {
            trackMovement = 0;
            trackPath.splice(0, 1);
            if (trackPath.length <= 40) {
                addTrackPath();
            }
        }
        if (rightArrowDown && !stopAllTogether) {
            if (!oldRightArrowDown) {
                playerRubberRing.velocitySlide = 0;
            }
            playerRubberRing.velocitySlide += delta * playerRubberRing.slideSpeed;
            cameraRoll += -delta;
             relaxToCenterTimedown = 0.1;
            if (playerRubberRingOver.lean !== "right") {

                playerRubberRingOver.state.clearTrack(1);
                if (playerRubberRingOver.lean === "left") {
                    playerRubberRingOver.state.setAnimation(0, "full_r");
                } else {
                    playerRubberRingOver.state.setAnimation(0, "lean_r");
                }
                playerRubberRingOver.lean = "right";

            }
        }
        if (!leftArrowDown && !rightArrowDown && relaxToCenterTimedown < 0) {

            //  speedBoat.stop();
            if (playerRubberRingOver.lean !== "center") {
                playerRubberRingOver.state.clearTrack(1);
                if (playerRubberRingOver.lean === "right") {
                    playerRubberRingOver.state.setAnimation(0, "return_r");
                } else {
                    playerRubberRingOver.state.setAnimation(0, "return_l");
                }
                playerRubberRingOver.lean = "center";

            }
        }

        if (leftArrowDown && !stopAllTogether) {
            cameraRoll += delta;
            // speedBoat.animationSpeed = -0.417;
            //  speedBoat.play();
            relaxToCenterTimedown = 0.1;
            if (!oldLeftArrowDown) {
                playerRubberRing.velocitySlide = 0;
            }
            playerRubberRing.velocitySlide += -delta * playerRubberRing.slideSpeed;
            if (playerRubberRingOver.lean !== "left") {
                playerRubberRingOver.state.clearTrack(1);
                if (playerRubberRingOver.lean === "right") {
                    playerRubberRingOver.state.setAnimation(0, "full_l");
                } else {
                    playerRubberRingOver.state.setAnimation(0, "lean_l");
                }
                playerRubberRingOver.lean = "left";

            }
        }
        playerRubberRing.velocitySlide *= 0.95;
        playerRubberRing.positionSlide += playerRubberRing.velocitySlide * delta * 2;
        //  playerRubberRing.velocitySlide += (trackPath[0].angle * -5000 * delta) || 0;

        playerRubberRing.rotation = playerRubberRing.velocitySlide * 0.005;
        playerSplashesLeft.scale.x = 1 + (-playerRubberRing.rotation * 1.5);
        playerSplashesRight.scale.x = -1 - (playerRubberRing.rotation * 1.5);
        playerSplashesLeft.scale.x *= playerRubberRingOver.splashScale * Math.min(playerRubberRing.speed, 1.5) * (1 - playerRubberRing.playerFlying);
        playerSplashesRight.scale.x *= playerRubberRingOver.splashScale * Math.min(playerRubberRing.speed, 1.5) * (1 - playerRubberRing.playerFlying);
        playerSplashesLeft.scale.y = playerSplashesLeft.scale.x;
        playerSplashesRight.scale.y = -playerSplashesRight.scale.x;
        playerSplashesMiddle.scale.y = playerSplashesMiddle.scale.x = playerRubberRingOver.splashScale * Math.min(playerRubberRing.speed, 1.5) * (1 - playerRubberRing.playerFlying);
        playerSplashesLeft.rotation = -playerRubberRing.rotation;
        playerSplashesRight.rotation = -playerRubberRing.rotation;
        var dist = Math.abs(playerRubberRing.positionSlide);
        if (dist > 25) {
            if (playerRubberRing.velocitySlide * playerRubberRing.positionSlide > 0) {
                playerRubberRing.velocitySlide *= -1;
                playerRubberRing.speed -= 0.1;
            }
            playerRubberRing.positionSlide = (playerRubberRing.positionSlide / dist) * 25;
        }
        playerRubberRing.pos.x = cameraPositionPlayer.x;
        playerRubberRing.pos.z = cameraPositionPlayer.z;
        playerRubberRing.pos.x += Math.sin(cameraYaw) * 100;
        playerRubberRing.pos.z += Math.cos(cameraYaw) * 100;
        playerRubberRing.pos.x += Math.sin(cameraYaw + Math.hPI) * playerRubberRing.positionSlide;
        playerRubberRing.pos.z += Math.cos(cameraYaw + Math.hPI) * playerRubberRing.positionSlide;
        cameraRoll = Math.min(1, Math.max(-1, cameraRoll));
        cameraRoll *= 0.9;
       // if (CC.ScaleFactor > 1) {
            cameraSwayHolder.rotation = -cameraRoll;
       // }
        cameraSwayHolder.y = -cameraPitch;
        // cameraSwayHolder.x = -cameraRoll*100;
        if (upArrowDown) {
            cameraVelocity.z += -Math.cos(cameraYaw) * 2.5;
            cameraVelocity.x += -Math.sin(cameraYaw) * 2.5;
        }
        if (downArrowDown) {
            cameraVelocity.z += Math.cos(cameraYaw) * 2.5;
            cameraVelocity.x += Math.sin(cameraYaw) * 2.5;
        }
        for (i = 0; i < psudo3dObjectsArray.length; ++i) {

            threeDObject = psudo3dObjectsArray[i];
            //precalculate grapphics for 3dGraphics
            if (threeDObject.graf) {
                for (var j = 0; j < threeDObject.vertexArray.length; ++j) {
                    var vertex = threeDObject.vertexArray[j];
                    var vertexTrans = threeDObject.vertexTransArray[j];
                    vertexTrans.x = vertex.x * threeDObject.scalar;
                    vertexTrans.y = vertex.y * threeDObject.scalar;
                    vertexTrans.z = vertex.z * threeDObject.scalar;
                    CC.Geometry.rotate3DRef(vertexTrans, threeDObject.rot);
                    vertexTrans.x = (vertexTrans.x + threeDObject.pos.x) - cameraPosition.x;
                    vertexTrans.y = (vertexTrans.y + threeDObject.pos.y) - cameraPosition.y;
                    vertexTrans.z = (vertexTrans.z + threeDObject.pos.z) - cameraPosition.z;

                    CC.Geometry.rotate3DRef(vertexTrans, cameraYaw);
                    vertexTrans.x *= (lens.focus / vertexTrans.z);
                    vertexTrans.y *= (lens.focus / vertexTrans.z);
                }
                threeDObject.build();

            }
            // threeDObject.pos.y = -60+(Math.sin(i+timer)*10)
            threeDObject.transPos.x = threeDObject.pos.x - cameraPosition.x;
            threeDObject.transPos.y = threeDObject.pos.y - cameraPosition.y;
            threeDObject.transPos.z = threeDObject.pos.z - cameraPosition.z;
            CC.Geometry.rotate3DRef(threeDObject.transPos, cameraYaw);


            if (!threeDObject.graf) {
                zScale = lens.focus / threeDObject.transPos.z;
                threeDObject.x = threeDObject.transPos.x * zScale;
                threeDObject.y = threeDObject.transPos.y * zScale;
                threeDObject.scale.x = zScale * 0.1 * threeDObject.scalar;
                threeDObject.scale.y = zScale * 0.1 * threeDObject.scalar;
            }

            threeDObject.visible = threeDObject.transPos.z > 0 && !threeDObject.collected;

            if (threeDObject.buoy) {
                //threeDObject.scale.y *= Math.abs(Math.sin(threeDObject.y / 720));
                //threeDObject.top.scale.y = 1 / Math.abs(Math.sin(threeDObject.y / 720)));
                threeDObject.bottom.scale.y = Math.abs(Math.sin(threeDObject.y / 720 * 0.25)) * 2;
                threeDObject.visible = 0.5 < Math.max(0, Math.min(zScale, 1));
            }
            if (threeDObject.boat) {
                //threeDObject.side.scale.x = Math.sin(threeDObject.x / 200);
                //  console.log(Math.sin(threeDObject.x / 200)*5);
                var turnValue = Math.min(Math.max((threeDObject.x - 75) / 2, -10), 3);
                threeDObject.splash.x = -turnValue * 2;
                threeDObject.targetRot = Math.lerp(threeDObject.targetRot, Math.floor(turnValue + 10), 0.1);
                threeDObject.gotoAndStop(threeDObject.targetRot);
            }
            threeDObject.sorted = false;

        }
        for (var i = 0; i < psudo3dObjectsArray.length; ++i) {
            closestIndex = -1;
            for (var j = 0; j < psudo3dObjectsArray.length; ++j) {
                threeDObject = psudo3dObjectsArray[j];
                if (threeDObject.visible && !threeDObject.sorted && (closestIndex === -1 || -threeDObject.transPos.z < closest)) {
                    closestIndex = j;
                    closest = -threeDObject.transPos.z;
                }
            }
            if (closestIndex !== -1) {
                threeDObject = psudo3dObjectsArray[closestIndex];
                threeDObject.sorted = true;
                psudo3dHolder.addChild(threeDObject);
            }
        }
        // psudo3dHolder.children.sort(this.sortFunc)

        rope.clear();
        rope.lineStyle(1, 0xFFFFFF);
        rope.moveTo(speedBoat.x + (-5 - (18 * (speedBoat.currentFrame / 14))) * speedBoat.scale.x, (speedBoat.y + (7 * speedBoat.scale.x)));
        //rope.lineTo(playerRubberRing.x, playerRubberRing.y);
        rope.quadraticCurveTo(Math.lerp(playerRubberRing.x, speedBoat.x, 0.75), playerRubberRing.y, playerRubberRing.x, playerRubberRing.y);
        playerRubberRingOver.x = playerRubberRing.x;
        playerRubberRingOver.y = playerRubberRing.y;
        playerRubberRingOver.scale.x = playerRubberRing.scale.x;
        playerRubberRingOver.scale.y = playerRubberRing.scale.y;
        playerRubberRingOver.rotation = playerRubberRing.rotation;


        if (!playerRubberRing.playerFlying) {
            for (i = 0; i < rampArray.length; ++i) {
                var ramp = rampArray[i];
                var vec = {
                    x: 0,
                    z: 0
                };
                var dist;
                if (ramp && ramp.unJumped && ramp.visible) {
                    vec.x = ramp.pos.x - playerRubberRing.pos.x;
                    vec.z = ramp.pos.z - playerRubberRing.pos.z;
                    dist = ((vec.x * vec.x) + (vec.z * vec.z));
                    if (dist < 10 * 10) {
                        ramp.unJumped = false;
                        TweenLite.to(playerRubberRing, 0.3, {
                            playerJumping: 10
                        });
                        playerRubberRing.speed += 1;
                        /*TweenLite.to(playerRubberRing, 2, {
                         speed: 1
                         });*/
                        TweenLite.to(lens, 0.5, {
                            focus: 750
                        });
                        TweenLite.to(lens, 1, {
                            delay: 1,
                            focus: 1000
                        });
                        //playerBoostA.state.setAnimation(0, "boost_0");
                        TweenLite.to(playerRubberRingOver, 0.2, {
                            splashScale: 0
                        });
                        TweenLite.to(playerRubberRingOver, 0.3, {
                            delay: 0.5,
                            splashScale: 1
                        });

                        Game.sound.play("ring_boost_2");
                        setTimeout(function () {
                            Game.sound.play("ring_land");
                        }, 500);
                        playerRubberRingOver.state.setAnimation(1, "jump");
                        TweenLite.to(playerRubberRing, 1, {
                            playerJumping: 30,
                            delay: 0.3,
                            ease: Bounce.easeOut
                        });
                    }
                }
            }
            for (i = 0; i < collectablePool.length; ++i) {
                var collectable = collectablePool[i];
                var vec = {
                    x: 0,
                    z: 0
                };
                var dist;
                if (collectable && !collectable.collected && collectable.visible) {
                    vec.x = collectable.pos.x - playerRubberRing.pos.x; // + Math.sin(cameraYaw)*-10;
                    vec.z = collectable.pos.z - playerRubberRing.pos.z; // + Math.cos(cameraYaw)*-10;
                    dist = ((vec.x * vec.x) + (vec.z * vec.z));
                    if (dist < 10 * 10) {
                        // console.log("collected");
                        collectable.collected = true;
                        playerRubberRing.speed += 0.1;
                        if (collectable.type) {
                            playerRubberRing.speed = 3;

                            TweenLite.to(lens, 0.5, {
                                focus: 500
                            });
                            TweenLite.to(lens, 1, {
                                delay: 1,
                                focus: 1000
                            });
                            Game.sound.play("ring_boost_1");
                            //Game.sound.play("ball_star_2");
                            Game.sound.play("crowd_score" + Math.floor(Math.random() * 3 + 1));
                            playerBoostA.state.setAnimation(0, "boost_0");
                            setTimeout(function () {
                                playerBoostB.state.setAnimation(0, "boost_0");

                            }, 100);

                        } else {
                            paraglider.alpha = 1;
                            paraglider.y = 10;
                            Game.sound.playMusic("ring_music_1", 0.3);
                            Game.sound.play("crowd_score" + Math.floor(Math.random() * 3 + 1));
                            Game.sound.play("ring_boost_0");
                            Game.sound.play("ring_boost_4");
                            paraglider.state.setAnimation(0, "animation");
                            TweenLite.to(playerRubberRing, 0.5, {
                                playerFlying: 1
                            });
                            TweenLite.to(lens, 0.5, {
                                focus: 750
                            });
                            paraShootTimeout = 5;
                        }
                        TweenLite.to(collectable.pos, 0.3, {
                            y: -50
                        });
                    }
                }
            }
            for (i = 0; i < obstaclePool.length; ++i) {
                var obstacle = obstaclePool[i];
                var vec = {
                    x: 0,
                    z: 0
                };
                var dist;
                if (obstacle && !obstacle.hit && obstacle.visible) {
                    vec.x = obstacle.pos.x - playerRubberRing.pos.x; // + Math.sin(cameraYaw)*-10;
                    vec.z = obstacle.pos.z - playerRubberRing.pos.z; // + Math.cos(cameraYaw)*-10;
                    dist = ((vec.x * vec.x) + (vec.z * vec.z));
                    if (dist < 7.5 * 7.5) {
                        //console.log("collected");
                        obstacle.hit = true;
                        Game.sound.play("ring_hit");

                        TweenLite.to(lens, 0.01, {
                            focus: 1200
                        });
                        TweenLite.to(lens, 0.5, {
                            delay: 0.2,
                            focus: 1000
                        });
                        playerObstacleSmash.scale.x = 1;
                        playerObstacleSmash.scale.y = 1;
                        TweenLite.to(playerObstacleSmash.scale, 0.6, {
                            x: 1.2,
                            y: 1.2
                        });
                        playerObstacleSmash.x = obstacle.x;
                        playerObstacleSmash.y = obstacle.y;
                        playerObstacleSmash.visible = true;
                        playerRubberRingOver.state.setAnimation(1, "crash");
                        playerObstacleSmash.state.setAnimation(0, "animation");
                        obstacle.alpha = 0;
                        playerRubberRing.speed *= 0.66;

                    }
                }
            }

        }
        oldLeftArrowDown = leftArrowDown;
        oldRightArrowDown = rightArrowDown;
    };

    updateFunc.sortFunc = function (a, b) {
        return b.transPos.z - a.transPos.z;
    };
    this.update = updateFunc;
    //var showHelpStart = localStorage.getItem("boom_help_shown_already_ring") === null;
    var showHelpStart = window.boom_help_shown_already_ring === undefined;
    var firstBallStart = true;
    container.addChild(cameraSwayHolder);
    cameraSwayHolder.addChild(backgroundGrad);
    cameraSwayHolder.addChild(skyLine);
    cameraSwayHolder.addChild(waveEffectHolder);
    cameraSwayHolder.addChild(psudo3dHolder);
    cameraSwayHolder.addChild(rope);
    cameraSwayHolder.addChild(playerRubberRingOver);
    cameraSwayHolder.addChild(playerObstacleSmash);
    cameraSwayHolder.addChild(playerBoostA);
    cameraSwayHolder.addChild(playerBoostB);
    raceIndicator.visible = true;
    container.addChild(leftButton);
    container.addChild(rightButton);
    container.addChild(raceIndicator);
    container.addChild(distanceText);
    container.addChild(countdownAnim);
    container.addChild(tutorial);
    container.addChild(this.backgroundFade);
    // container.addChild(endPopup);
    this.addChild(container);
    this.pausePanel = new SportsUI.PausePanel(Game.RingScreen, false, tutorial);
    this.buttonPause = SportsUI.createButtonPause(this.pausePanel, false, tutorial);
    this.addChild(this.buttonPause);
    this.addChild(this.pausePanel);
};