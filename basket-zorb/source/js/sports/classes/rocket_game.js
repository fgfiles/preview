/**
 * Created by jonathan.kernick on 23/03/2017.
 */
var RocketGame = function (team) {
    PIXI.Container.call(this);
    this.team = team;
    this.build();
};


RocketGame.prototype = Object.create(PIXI.Container.prototype);
RocketGame.prototype.constructor = RocketGame;


//ball creation
RocketGame.prototype.createParalaxBackground = function () {

    var i, length, background;

    var self = this;
    background = CC.Utility.pixiObject();

    background.paralaxSky = CC.Utility.pixiAtlasSprite("rocket_sky_0.png");
    background.paralaxSky.addChild(CC.Utility.pixiAtlasSprite("rocket_sky_1.png"));
    background.paralaxSky.addChild(CC.Utility.pixiAtlasSprite("rocket_sky_0.png", {x: 2732 * -0.25}));
    background.paralaxSky.addChild(CC.Utility.pixiAtlasSprite("rocket_sky_1.png", {x: 2732 * -0.25}));

    background.paralaxHills = CC.Utility.pixiAtlasSprite("rocket_hills_0.png");
    background.paralaxHills.addChild(CC.Utility.pixiAtlasSprite("rocket_hills_1.png"));
    background.paralaxHills.addChild(CC.Utility.pixiAtlasSprite("rocket_hills_0.png", {x: 2732 * -0.25}));
    background.paralaxHills.addChild(CC.Utility.pixiAtlasSprite("rocket_hills_1.png", {x: 2732 * -0.25}));
    background.graphic = new PIXI.Graphics();

    background.paralaxSky.y = -150;
    background.paralaxHills.y = -140;

    background.stadiumSpread = Math.floor(1093 * 0.25);
    background.paralaxStadium = CC.Utility.pixiAtlasSprite("rocket_stadium.png");
    background.paralaxStadium.addChild(CC.Utility.pixiAtlasSprite("rocket_stadium.png", {x: background.stadiumSpread}));
    background.paralaxStadium.addChild(CC.Utility.pixiAtlasSprite("rocket_stadium.png", {x: background.stadiumSpread * 2}));
    background.paralaxStadium.addChild(CC.Utility.pixiAtlasSprite("rocket_stadium.png", {x: background.stadiumSpread * 3}));

    background.groundSpread = Math.floor(1366 * 0.25);
    background.paralaxGround = CC.Utility.pixiAtlasSprite("rocket_ground.png");
    background.paralaxGround.addChild(CC.Utility.pixiAtlasSprite("rocket_ground.png", {x: background.groundSpread}));
    background.paralaxGround.addChild(CC.Utility.pixiAtlasSprite("rocket_ground.png", {x: background.groundSpread * 2}));
    background.paralaxGround.addChild(CC.Utility.pixiAtlasSprite("rocket_ground.png", {x: background.groundSpread * 3}));

    background.paralaxStadium.y = -50;
    background.paralaxGround.y = 150;
    background.offset = 0;
    background.offsetSky = 0;
    background.offsetHills = 0;
    background.spread = 200;
    background.paralax = 2;
    background.count = 5;
    background.speed = 2;

    background.update = function (delta) {
        this.offset = Math.modo(this.offset - delta * this.speed, 1);
        this.offsetSky = Math.modo(this.offsetSky - delta * this.speed * 0.01, 1);
        this.offsetHills = Math.modo(this.offsetHills - delta * this.speed * 0.04, 1);

        this.paralaxStadium.x = (this.offset * this.stadiumSpread) - 500;
        this.paralaxGround.x = (this.offset * this.groundSpread * 2) - 850;
        this.paralaxSky.x = (this.offsetSky * 2732 * 0.25);
        this.paralaxHills.x = (this.offsetHills * 2732 * 0.25);

        this.graphic.clear();
        // this.graphic.beginFill(0xFF0000);
        this.graphic.lineStyle(2, 0x6ADAEC);
        this.graphic.moveTo(-375, 100);
        this.graphic.lineTo(375, 100);
        this.graphic.moveTo(-375, 550 * 0.25);
        this.graphic.lineTo(375, 550 * 0.25);
        this.graphic.moveTo(-375, 470 * 0.25);
        this.graphic.lineTo(375, 470 * 0.25);
        this.graphic.moveTo(-375, 670 * 0.25);
        this.graphic.lineTo(375, 670 * 0.25);

        var i, length, position = {x: 0, y: 0};
        i = 0;
        length = this.count;
        for (i; i < length; ++i) {
            position.x = (i + this.offset - this.count * 0.5) * this.spread * 2;
            position.y = 100;
            this.graphic.moveTo(position.x, position.y);
            position.x *= this.paralax;
            position.y = 200;
            this.graphic.lineTo(position.x, position.y);
        }

    };

    background.addChild(background.paralaxSky);
    background.addChild(background.paralaxHills);
    background.addChild(background.paralaxGround);
    background.addChild(background.paralaxStadium);
    background.addChild(background.graphic);
    return background;

};
RocketGame.prototype.createTarget = function () {
    var i, length, target;

    var self = this;
    target = CC.Utility.pixiObject();

    target.image = CC.Utility.pixiAtlasSprite("rocket_target.png");


    target.image.x = -1000;

    target.update = function () {
        this.x = Game.webApp.screenWidth * 0.5 - 100;
    };

    Game.webApp.juggler.addObject(target, 1);
    target.show = function () {
        TweenLite.to(this.image, 1.5, {ease: Elastic.easeOut, x: 0});
    }
    target.y = -125;

    target.hit = function (power) {
        TweenLite.delayedCall(0.3, (function () {
            this.image.x = 20;

            Game.sound.play("target_hit");
            TweenLite.to(this.image, 0.5, {ease: Elastic.easeOut, x: 0});
        }).bind(target));
    };


    target.addChild(target.image);
    return target;

};
RocketGame.prototype.createBall = function (type) {

    var i, length, ball;

    var self = this;
    ball = CC.Utility.pixiObject();

    ball.bad = !!type;

    ball.graphic;
    if (ball.bad) {
        ball.graphic = CC.Utility.pixiAtlasSprite("rocket_ball_1.png");
    }
    else {
        ball.graphic = CC.Utility.pixiAtlasSprite("rocket_ball_0.png");
    }

    ball.velocity = new PIXI.Point(0, 0);
    ball.visible = false;
    ball.mode = "bounce";//bounce, target


    ball.launch = function (xPos, yPos, xVel, yVel) {
        this.position.set(xPos, yPos);
        this.velocity.set(xVel, yVel);
        this.visible = true;
        this.alpha = 1;
        this.alive = true;
        this.scale.set(1);
        this.mode = "bounce";
    };
    ball.detonate = function () {
        this.scale.set(1);
        this.alpha = 1;
        // TweenLite.to(this.scale,0.3,{x:3,y:3});
        TweenLite.to(this, 0.6, {x: this.x + 300});
        TweenLite.to(this, 0.6, {y: 300, ease: Back.easeIn});

    };
    ball.target = function (x, y) {
        if (this.alpha === 1) {
            this.mode = "target";
            TweenLite.to(this, 0.3, {x: x, ease: Linear.easeNone});
            TweenLite.to(this, 0.3, {y: y, ease: Power1.easeOut});
            TweenLite.to(this, 1.5, {delay: 0.3, x: -375, alpha: 0, ease: Linear.easeNone});
            TweenLite.to(this, 0.5, {delay: 0.3, alpha: 0});
            TweenLite.to(this, 1.5, {delay: 0.3, y: 150, ease: Bounce.easeOut});
        }
    };
    ball.miss = function (x, y) {
        this.mode = "target";
        TweenLite.to(this, 0.3, {x: x + 125, ease: Linear.easeNone});
        TweenLite.to(this, 0.3, {y: y, ease: Power1.easeOut});
    };
    ball.update = function (delta) {
        ball.rotation += delta * -5;
        if (this.mode === "bounce" && ball.alive) {
            this.velocity.y += self.gravity * delta;
            this.x += this.velocity.x * delta;
            this.y += this.velocity.y * delta;

            //if below a cetain threhold and heading down flip the velocity
            if (this.y > 150 && this.velocity.y > 0) {
                this.velocity.y *= -1;

            }
        }
    };

    ball.addChild(ball.graphic);
    return ball;

};
RocketGame.prototype.createCharacter = function () {

    var i, length, character;

    character = new PIXI.Container();
    //temp character graphic


    character.arcGraphicDistance = 100;
    character.graphic = new PIXI.spine.Spine(Game.animationList["rocket_character_" + this.team]);

    character.arm = new PIXI.Graphics();

    character.arcDistance = 75;
    character.hitFoci = new PIXI.Container();
    if (this.team + "" === "4") {
        character.cloud = new PIXI.spine.Spine(Game.animationList["cloud"]);
        character.cloud.state.setAnimation(0, "idle", true);
        character.cloud.x = 50;
        character.cloud.y = -150;
        character.graphic.addChild(character.cloud);
    }

    character.arc = CC.Utility.pixiAtlasSprite("rocket_field.png", {alpha: 0.5});
    character.arc2 = CC.Utility.pixiAtlasSprite("rocket_field.png", {alpha: 0.5});
    character.arcContainer = CC.Utility.pixiObject();
    character.animTimer = 0;
    character.update = function (delta) {
        character.animTimer += delta;
        character.arc.skew.x = Math.sin(character.animTimer * 10) * 0.05;
        character.arc.rotation = character.animTimer * 10;
        character.arc2.skew.x = Math.sin(character.animTimer * -12) * 0.05;
        character.arc2.rotation = character.animTimer * -12;
    };
    Game.webApp.juggler.addObject(character);

    character.innerRing = 28;
    character.outerRing = character.innerRing * 2;
    character.arm.x = 25;
    character.arm.y = -87.5;
    /*
     character.arc.lineStyle(character.innerRing*2,0x00FF00,0.1);
     character.arc.drawCircle(character.arm.x,character.arm.y,character.arcDistance);
     character.arc.lineStyle(character.innerRing*1,0x00FF00,0.1);
     character.arc.drawCircle(character.arm.x,character.arm.y,character.arcDistance);
     character.arc.lineStyle(character.innerRing*0.5,0x00FF00,0.1);
     character.arc.drawCircle(character.arm.x,character.arm.y,character.arcDistance);
     character.arc.lineStyle(character.innerRing*0.25,0x00FF00,0.1);
     character.arc.drawCircle(character.arm.x,character.arm.y,character.arcDistance);
     character.arc.lineStyle(1,0x00FF00,0.5);
     character.arc.drawCircle(character.arm.x,character.arm.y,character.arcDistance-2.5);*/

    character.arcDistanceSqr = character.arcDistance * character.arcDistance;

    character.hitFoci.x = character.arm.x;
    character.hitFoci.y = character.arm.y;
    character.wobble = 0;

    character.arcContainer.x = character.arm.x;
    character.arcContainer.y = character.arm.y;

    character.arm.rotation = 1;
    character.lastHit = false;
    character.swipeAudo = 0;
    character.hit = function (upSwing, punish) {
            TweenLite.killTweensOf(this.arm);
            //   console.log(upSwing);
            TweenLite.to(this.arcContainer, 0.25, {alpha: 0});
            TweenLite.to(this.arcContainer, 0.25, {delay: 0.25, alpha: 1});
            TweenLite.to(this.arcContainer, 0.25, {delay: 0.25, alpha: 1});

            this.lastHit = !this.lastHit;
            //racquet_swipe_1

            this.swipeAudo = Math.modo(Math.floor(Math.random() * 2) + 1 + this.swipeAudo, 3);
            Game.sound.play("racquet_swipe_" + (this.swipeAudo + 1));
            this.graphic.state.clearTrack(1);
            this.graphic.skeleton.setToSetupPose();
           // this.graphic.state.setAnimation(1, "static");
            if (this.lastHit) {
                this.graphic.state.setAnimation(1, "swipe_down");

            }
            else {
                this.graphic.state.setAnimation(1, "swipe_up");
            }
            if (punish) {
                Game.webApp.juggler.addTimeout(this.punish.bind(this), 0.3);
            }

    };
    character.graphic.state.setAnimation(0, "idle", true);
    character.graphic.update(0.1);
   // console.log(character.graphic);
    character.graphic.state.addListener({
        complete: function (entry) {
           // character.graphic.skeleton.setBonesToSetupPose();

            character.graphic.state.clearTrack(1);
          //  this.graphic.skeleton.setToSetupPose();
        }
    });
    character.active = true;
    character.punish = function () {

        if(!this.active) {
            return;
        }

        this.active = false;
        this.arm.rotation = 2;
        this.wobble = 1;
        this.arcContainer.visible = false;
        this.graphic.state.clearTrack(1);
        this.graphic.skeleton.setToSetupPose();
       // this.graphic.state.setAnimation(1, "static");
        this.graphic.state.setAnimation(1, "hit");
        TweenLite.delayedCall(2, (function () {
            this.active = true;
            this.arm.y = this.hitFoci.y;
            this.arcContainer.visible = true;
            // character.graphic.skeleton.setBonesToSetupPose();
            character.graphic.state.setAnimation(0, "idle", true);
        }).bind(this));

    };
    character.boost = function () {
        this.graphic.state.setAnimation(3, "boost");

    };

    window.gameAnimation = character.graphic;
    character.x = -200;
    character.y = 150;

    character.addChild(character.graphic);
    character.addChild(character.arm);
    character.arcContainer.addChild(character.arc);
    character.arcContainer.addChild(character.arc2);
    character.addChild(character.arcContainer);
    character.addChild(character.hitFoci);
    return character;
};
RocketGame.prototype.createInterface = function () {
    var interactiveLayer = new PIXI.Container();

    interactiveLayer.hitArea = new PIXI.Rectangle(-500, -500, 1000, 1000);

    return interactiveLayer;
};
RocketGame.prototype.gameOver = function () {
    this.interactiveLayer.interactive = false;
};
RocketGame.prototype.gameStart = function () {
    this.gameStarted = true;
};
RocketGame.prototype.build = function () {

    var self = this;

    var i, length, ball;

    //array for tracking balls
    this.ballPool = [];
    this.ballContainer = new PIXI.Container();
    this.ballCount = 5;
    this.ballIndex = 0;
    this.ballReleaseActive = true;
    this.ballReleaseTimer = 0;
    this.ballReleaseTimerMaxStart = 2;
    this.ballReleaseTimerMaxEnd = 0.5;
    this.ballReleaseTimerMax = this.ballReleaseTimerMaxStart;

    this.gameStarted = false;

    this.gameTime = 0;

    this.targetHits = 0;

    this.gameTimeMax = 60;

    this.speed = 1;

    this.target = this.createTarget();

    this.character = this.createCharacter();
    this.paralaxBackground = this.createParalaxBackground();

    this.ballOrder = [0, 0, 0, 0, 1];

    this.gravity = 450;

    i = 0;
    length = this.ballCount;
    for (i; i < length; ++i) {
        ball = this.createBall(this.ballOrder[i % this.ballOrder.length]);
        this.ballPool.push(ball);
        this.ballContainer.addChild(ball);
    }

    this.interactiveLayer = this.createInterface();
    this.interactiveLayer.interactive = true;
    this.targetsHitPanel = new SportsUI.GamePointsPanel("ui_rocket_icon_panels.png");

    if (CC.isMobile) {
        //     this.interactiveLayer.touchstart = this.screenClicked.bind(this);
        this.interactiveLayer.tap = this.screenReleased.bind(this);
    }
    else {
        //   this.interactiveLayer.mousedown = this.screenClicked.bind(this);
        this.interactiveLayer.click = this.screenReleased.bind(this);
    }

    this.addChild(this.paralaxBackground);
    this.addChild(this.target);
    this.addChild(this.character);
    this.addChild(this.ballContainer);
    this.addChild(this.targetsHitPanel);
    this.addChild(this.interactiveLayer);
};
RocketGame.prototype.startGame = function () {
    TweenLite.to(this, 2, {speed: 1});
};
RocketGame.prototype.screenClicked = function (event) {
    this.startY = event.data.getLocalPosition(this).y;
};
RocketGame.prototype.screenReleased = function (event) {


    var i, length, ball, relativePos, ballDistance, diffrence;
    var noHit = true;
    var self = this;
    i = 0;
    length = this.ballCount;
    var badHit = false;
    var upSwing = false;// this.startY > event.data.getLocalPosition(this).y;
    //loop through balls and check for contact with racket arc
    if (this.character.active) {
        for (i; i < length; ++i) {
            ball = this.ballPool[i];
            if (ball.visible) {
                relativePos = this.character.hitFoci.toLocal(ball, this.ballContainer);
                ballDistance = Math.sqrt(relativePos.x * relativePos.x + relativePos.y * relativePos.y);
                diffrence = ballDistance - this.character.arcDistance;
                if (Math.abs(diffrence) < this.character.outerRing && ball.velocity.x < 0 && ball.alive) {
                    ball.alive = false;
                    // console.log(Math.floor(relativePos.y))
                    //upSwing = relativePos.y > 0;
                    if (ball.bad) {
                        ball.detonate();
                        badHit = true;
                        Game.sound.play("perfect_hit");
                        self.scoreCallBack(0, 1, true)
                    }
                    else {
                        if (Math.abs(diffrence) < this.character.innerRing) {
                            ball.target(this.target.x, this.target.y + (diffrence / this.character.innerRing) * -13.75);
                            this.target.hit();
                            Game.sound.play("tennis_ball_hit_" + (Math.round(Math.random()) + 1));
                            self.targetHits++;
                            self.targetsHitPanel.setValue(self.targetHits)
                        }
                        else {
                            ball.miss(this.target.x, this.target.y + (diffrence / this.character.innerRing) * -37.5);
                        }
                        ball.accuracy = Math.abs(diffrence / this.character.innerRing) * 0.5;
                        if (ball.accuracy < 0.2) {
                            // Game.sound.play("rocket_boost");
                            Game.sound.play("ring_boost_0");
                            this.character.boost();
                            TweenLite.to(self, 0.3, {speed: 2});
                            TweenLite.to(self, 1, {delay: 1, speed: 1});
                        }
                        TweenLite.delayedCall(0.3, (function () {
                            if (self.scoreCallBack) {
                                self.scoreCallBack(this.accuracy, 1, this.bad)
                            }
                        }).bind(ball));
                    }
                }
            }

        }
        this.character.hit(upSwing, badHit);
    }

};
RocketGame.prototype.update = function (delta) {

    if (this.gameStarted) {
        var i, length, ball;
        //ball release handler
        this.gameTime += delta;
        var gameValue = this.gameTime / this.gameTimeMax;
        if (this.ballReleaseActive) {
            this.ballReleaseTimer += delta;
            if (this.ballReleaseTimer > this.ballReleaseTimerMax) {
                ball = this.ballPool[this.ballIndex];
                ball.launch(375, -25, -250 + 25 * Math.sin(Math.random() * 25), -50 * Math.sin(Math.random() * 25));

                this.ballReleaseTimerMax = Math.lerp(this.ballReleaseTimerMaxStart, this.ballReleaseTimerMaxEnd, gameValue) * (1 + Math.sin(Math.random()) * 0.1);
                this.ballReleaseTimer = 0;

                this.ballIndex = (this.ballIndex + 1) % this.ballCount;
            }
        }
        i = 0;
        length = this.ballCount;
        for (i; i < length; ++i) {
            ball = this.ballPool[i];
            ball.update(delta);
        }

    }
    this.paralaxBackground.update(delta * this.speed);
};
