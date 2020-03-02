var ballZSpeed = 2.2;
var ballXSpeed = 14;
var ballMinXSpeed = -ballXSpeed;
var ballMaxXSpeed = ballXSpeed;
var gravity = 0.18;
var horizonPoint = 110;

/**
 * Created by jonathan.kernick on 17/05/2017.
 */
var SportsTutorial = {};

SportsTutorial.BaseGame = function(){
    PIXI.Container.call(this);

    this.buttonTickFunc = function () {
        this.hide();
    };
    this.buttionTick = SportsUI.button("tick", this.buttonTickFunc.bind(this));
    this.buttonTickContainer = new PIXI.Container();
    this.buttonTickContainer.y = 100;

    this.buttonTickContainer.animTimer = 0;
    this.buttonTickContainer.update = function(delta){
        this.animTimer += delta;
        this.visible = this.animTimer > 2;
        this.scale.set(1 + Math.sin(this.animTimer)*0.1)
    };

    this.hitArea = new PIXI.Rectangle(-1000, -1000, 2000, 2000);
    this.interactive = true;
    this.click = this.tap = function (eventData) {
    };
    this.graphic = new PIXI.Graphics();

    this.graphic.beginFill(0xFFFFFF,0.2);
    this.graphic.alpha = 0;
    this.graphic.drawRect(-500,-500,1000,1000);

    Game.webApp.juggler.addObject(this.buttonTickContainer,1);
    this.buttonTickContainer.addChild(this.buttionTick);
    this.addChild(this.graphic);
    this.addChild(this.buttonTickContainer);
    this.visible = false;
};
SportsTutorial.BaseGame.prototype = Object.create(PIXI.Container.prototype);
SportsTutorial.BaseGame.prototype.constructor = SportsTutorial.BaseGame;
SportsTutorial.BaseGame.prototype.show = function(){
    this.visible = true;
    this.graphic.alpha = 0;
    TweenLite.to(this.graphic,1,{alpha:1});
    this.buttonTickContainer.visible = false;
    this.buttonTickContainer.animTimer = 0;
    Game.webApp.juggler.pause(0);
    PIXI.spine.Spine.globalAutoUpdate = false;
    Game.webApp.tutorial = true;
};
SportsTutorial.BaseGame.prototype.hide = function(){
    Game.webApp.tutorial = false;
    this.visible = false;
    Game.webApp.juggler.resume(0);
    PIXI.spine.Spine.globalAutoUpdate = true;
};

SportsTutorial.Ring = function(){

    SportsTutorial.BaseGame.call(this);
    this.handTapLeft = CC.Utility.pixiAtlasMovieClip(["hand_icon.png","hand_icon_tap.png"]);
    this.handTapRight = CC.Utility.pixiAtlasMovieClip(["hand_icon.png","hand_icon_tap.png"]);
    this.character = CC.Utility.pixiAtlasSprite("tutorial_rubber_man.png");
    this.character.y = 80;
    this.buttonTickContainer.y = -50;
    this.handTapLeft.scale.x = -1;
    this.handTapLeft.rotation = -1
    this.handTapRight.rotation = 1;
    this.animTimer = 0;
    this.update = function(delta){
        this.animTimer += delta*4;
        this.handTapLeft.x = Game.webApp.screenWidth*-0.5 + 50;
        this.handTapRight.x = Game.webApp.screenWidth*0.5 - 50;
        this.handTapLeft.y = 30;
        this.handTapRight.y = 30;
        var swingMotionLeft = Math.max(0,Math.sin(this.animTimer)-0.8)
        var swingMotionRight = Math.max(0,Math.sin(this.animTimer+Math.PI)-0.8)
        this.handTapLeft.scale.y = 1.2-swingMotionLeft;
        this.handTapRight.scale.y = 1.2-swingMotionRight;
        this.handTapLeft.scale.x = -this.handTapLeft.scale.y;
        this.handTapRight.scale.x =this.handTapRight.scale.y;
        this.character.x = Math.clamp(-0.6,0.6,Math.cos(this.animTimer))*150
       // this.handTapLeft.gotoAndStop(this.handTapLeft.scale.y < 1.01);
        //this.handTapRight.gotoAndStop(this.handTapRight.scale.y < 1.01);
    };
    Game.webApp.juggler.addObject(this,1);
    this.addChild(this.handTapLeft);
    this.addChild(this.handTapRight);
    this.addChild(this.character);

};
SportsTutorial.Ring.prototype = Object.create(SportsTutorial.BaseGame.prototype);
SportsTutorial.Ring.prototype.constructor = SportsTutorial.Ring;


SportsTutorial.Sky = function(){
    if (!CC.isMobile) {
        SportsTutorial.BaseGame.call(this);
        this.leftUp = CC.Utility.pixiAtlasSprite("left_up.png");
        this.leftDown = CC.Utility.pixiAtlasSprite("left_down.png");
    
        this.rightUp = CC.Utility.pixiAtlasSprite("right_up.png");
        this.rightDown = CC.Utility.pixiAtlasSprite("right_down.png");
    
        this.leftUp.x = this.leftDown.x = Game.webApp.screenWidth*-0.5 + 50;
        this.rightDown.x = this.rightUp.x = Game.webApp.screenWidth*0.5 - 50;
    
        this.leftUp.y = this.leftDown.y = 30;
        this.rightUp.y = this.rightDown.y = 30;
    
        this.leftDown.visible = false;
        this.rightUp.visible = false;
    
        this.character = CC.Utility.pixiAtlasSprite("tutorial_skydive_man.png");
        this.animTimer = 0;
        var previousAngle = 0;
        this.update = function(delta){
            this.animTimer += delta*0.3*5;
            var angle = Math.sin(this.animTimer)*Math.TAU*0.25*1.7 + Math.PI;
            console.log( angle > previousAngle);
    
            if( angle > previousAngle ) {
                this.leftDown.visible = true;
                this.leftUp.visible = false;
                this.rightUp.visible = true;
                this.rightDown.visible = false;
            } else {
                this.leftUp.visible = true;
                this.leftDown.visible = false;
                this.rightDown.visible = true;
                this.rightUp.visible = false;
            }
    
            previousAngle = angle;
            
            this.character.rotation = Math.lerp(-angle,this.character.rotation,0.9);
            this.character.x = Math.sin(-this.character.rotation)*150;
            this.character.y = Math.cos(-this.character.rotation)*150;
        };
        Game.webApp.juggler.addObject(this,1);
        this.addChild(this.character);
        this.addChild(this.leftUp);
        this.addChild(this.leftDown);
        this.addChild(this.rightUp);
        this.addChild(this.rightDown);
        this.buttonTickContainer.y = 0;
        this.addChild(this.buttonTickContainer);
    } else {
        SportsTutorial.BaseGame.call(this);
        this.hand = CC.Utility.pixiAtlasSprite("hand_icon.png");
        this.character = CC.Utility.pixiAtlasSprite("tutorial_skydive_man.png");
        this.animTimer = 0;
        this.update = function(delta){
            this.animTimer += delta*0.3*5;
            var angle = Math.sin(this.animTimer)*Math.TAU*0.25*1.7 + Math.PI;
            this.hand.x = Math.sin(angle)*150;
            this.hand.y = Math.cos(angle)*150;
            this.character.rotation = Math.lerp(-angle,this.character.rotation,0.9);
            this.character.x = Math.sin(-this.character.rotation)*150;
            this.character.y = Math.cos(-this.character.rotation)*150;
        };
        Game.webApp.juggler.addObject(this,1);
        this.addChild(this.character);
        this.addChild(this.hand);
        this.buttonTickContainer.y = 0;
        this.addChild(this.buttonTickContainer);
    }
};
SportsTutorial.Sky.prototype = Object.create(SportsTutorial.BaseGame.prototype);
SportsTutorial.Sky.prototype.constructor = SportsTutorial.Sky;

SportsTutorial.Striker = function(){

    SportsTutorial.BaseGame.call(this);
    this.hand = CC.Utility.pixiAtlasSprite("hand_icon.png");
    this.target = CC.Utility.pixiAtlasSprite("tutorial_star_striker_target.png");
    this.ball = CC.Utility.pixiAtlasSprite("tutorial_football.png");
    this.animTimer = 0;

    this.update = function(delta){
        this.animTimer += delta*0.3*5;
    };

    Game.webApp.juggler.addObject(this, 1);

    this.addChild(this.buttonTickContainer);
    this.addChild(this.target);
    this.addChild(this.ball);
    this.addChild(this.hand);

    this.target.x = -150;
    this.target.y = -50;

    this.buttonTickContainer.x = 40;
    this.buttonTickContainer.y = -30;

    this.playAnim();
};

SportsTutorial.Striker.prototype = Object.create(SportsTutorial.BaseGame.prototype);
SportsTutorial.Striker.prototype.constructor = SportsTutorial.Striker;

SportsTutorial.Striker.prototype.playAnim = function() {

    this.ball.x = 0;
    this.ball.y = 140;

    this.hand.x = 30;
    this.hand.y = 180;

    this.ball.scale.x = this.ball.scale.y = 0.75;

    var myTween = TweenLite.to(this.hand, 0.3, {x: 0, y: 100, onComplete: _.bind(function() {
        TweenLite.to(this.hand, 0.1, {x: -30, y: 80})
        TweenLite.to(this.ball.scale, 1, {x: 0.4, y: 0.4});
        TweenLite.to(this.ball, 1, {x: 0.4, y: this.target.y, ease: Back.easeOut});
        TweenLite.to(this.ball, 1, {x: this.target.x, onComplete: _.bind(this.playAnim, this)});
    }, this)});
}

SportsTutorial.Goalie = function(){

    SportsTutorial.BaseGame.call(this);
    this.hand = CC.Utility.pixiAtlasSprite("hand_icon.png");
    this.hand.x = 50;
    this.hand.y = 30;
    this.animTimer = 0;

    this.update = function(delta){
        if (this.visible ) {
            this.animTimer += delta*0.3*5;
            if (this.animTimer > 2) {

                if (!this.ball) {
                    this.ball = this.buildBall(1);
                }

                this.ball.update(delta);
            }
        }
    };

    this.cameraZ = 0;
    Game.webApp.juggler.addObject(this, 1);

    this.balls = [];
    this.ballsHolder = new PIXI.Container();
    this.addChild(this.ballsHolder);

    this.addChild(this.hand);
    this.buttonTickContainer.y = 100;
    this.addChild(this.buttonTickContainer);

    this.visible = false;
};

SportsTutorial.Goalie.prototype = Object.create(SportsTutorial.BaseGame.prototype);
SportsTutorial.Goalie.prototype.constructor = SportsTutorial.Goalie;

SportsTutorial.Goalie.prototype.set3dPosition = function (obj, vec3) {
    var zScale = this.get3DScale(vec3.z - this.cameraZ);
    obj.scale.set(zScale);
    obj.x = vec3.x * zScale;
    obj.y = (vec3.y * zScale);
};

SportsTutorial.Goalie.prototype.buildBall = function (pos) {
    var segmentSize = 1800;
    var startX = -segmentSize;

    startX += pos * segmentSize;

    var ball = CC.Utility.pixiAtlasSprite("tutorial_football.png");
    ball.pos = { 
        x: startX,
        y: horizonPoint, 
        z: 400
    };

    ball.xVel = 0;
    ball.yVel = -(13);

    ball.scale.set(0.5);
    ball.x = 0;
    ball.y = horizonPoint;

    var ballSpeed = _.random(-1, 1, true)

    this.set3dPosition(ball, ball.pos);

    var self = this;
    ball.update = function (delta) {

        this.yVel += gravity //+ (this.difficultyModifier * 0.06);

        this.pos.x += this.xVel;
        this.pos.y += this.yVel;

        this.rotation += ballSpeed * delta;

        if (!this.saved) {
            this.pos.z -= ballZSpeed //+ (this.difficultyModifier * 0.8)

            if( this.pos.z < 140) {
                self.handleTap();
            }
        }

        self.set3dPosition(this, this.pos);

        if (ball.pos.z < self.cameraZ + 5) {
            self.destroyBall(this);
        } else if (ball.x < -Game.webApp.scaledWidth / 2 || ball.x > Game.webApp.scaledWidth / 2) {
            self.destroyBall(this);
        }
    };

    this.balls.push(ball);
    this.ballsHolder.addChild(ball);

    this.myTween = TweenLite.to(this.hand, 0.6, {x: 5, y: -50, onComplete: _.bind(reverseTween, this), delay: 1.2 });
    function reverseTween() {
        this.myTween.reverse();
    }

    return ball;
};

SportsTutorial.Goalie.prototype.handleTap = function() {

    var ball = this.ball;
  
    if (ball.x <= 0) {
      ball.xVel = -savedBallXSpeed;
    } else {
      ball.xVel = savedBallXSpeed;
    }
  
    ball.yVel = -10;
}

SportsTutorial.Goalie.prototype.close = function() {
    clearTimeout(this.timeout);
    this.myTween.stop();
    this.myTween = null;
}

SportsTutorial.Goalie.prototype.destroyBall = function(ball) {
    this.balls.splice(_.indexOf(this.balls, ball), 1);
    this.ballsHolder.removeChild(ball);
    this.ball = this.buildBall(1);
}

SportsTutorial.Goalie.prototype.get3DScale = function (zDepth) {
    return 50 / zDepth;
};

SportsTutorial.Rocket = function(){
    SportsTutorial.BaseGame.call(this);
    this.racket = CC.Utility.pixiAtlasSprite("tutorial_racket.png",{anchor:"b"});
    this.ball = CC.Utility.pixiAtlasSprite("tutorial_ball.png");
    this.target = CC.Utility.pixiAtlasSprite("tutorial_target.png");
    this.circle = CC.Utility.pixiAtlasSprite("tutorial_racket_circle.png");
    this.target.y = -125;
    this.hand = CC.Utility.pixiAtlasMovieClip(["hand_icon.png","hand_icon_tap.png"]);
    this.animTimer = 0;
    this.racket.x = -170;
    this.racket.y = 80;
    this.circle.x = -175;
    this.circle.y = 60;
    this.update = function(delta) {
        this.animTimer += delta;
        
        this.target.x = Game.webApp.screenWidth*0.5 - 100;
        var value = Math.modo(this.animTimer,1);
        var value2 = Math.modo(this.animTimer-0.1,1);
        var swingMotion = Math.max(0,Math.sin(value2*Math.PI)-0.8);
        this.target.x += Math.max(0,-Math.cos(value*Math.PI)-0.8)*40;
        this.racket.rotation = swingMotion*12 - 1;
        this.ball.y = (value*-200)+100;
        this.ball.x = Math.abs(Math.cos(value*Math.PI))*200;
        if(this.ball.y < 0)
        {
            this.ball.x *= 2.2;
            this.ball.y *= 2.2;
        }
        this.ball.x += -110;
        this.ball.y += 20;
        this.ball.visible = this.ball.x < this.target.x;
       // this.hand.gotoAndStop(Math.abs(Math.cos(value*Math.PI)) < 0.2);
        this.hand.scale.set(1.2-swingMotion);
        this.circle.tint = (value > 0.5 && Math.abs(value-0.5) < 0.1)? 0x00FF00: 0xFFFFFF;
    };
    Game.webApp.juggler.addObject(this,1);
    this.hand.x = -50;
    this.hand.y = 130;
    this.buttonTickContainer.x = 140;
    this.buttonTickContainer.y = 50;

    this.addChild(this.circle);
    this.addChild(this.target);
    this.addChild(this.racket);
    this.addChild(this.ball);
    this.addChild(this.hand);
    this.addChild(this.buttonTickContainer);
};
SportsTutorial.Rocket.prototype = Object.create(SportsTutorial.BaseGame.prototype);
SportsTutorial.Rocket.prototype.constructor = SportsTutorial.Rocket;


SportsTutorial.Ball = function() {
    SportsTutorial.BaseGame.call(this);
    this.hand = CC.Utility.pixiAtlasMovieClip(["hand_icon.png","hand_icon_tap.png"]);
    this.character = CC.Utility.pixiAtlasSprite("tutorial_zorb.png");
    this.character.x = -80;
    this.arrow = new PIXI.Graphics();
    this.animTimer = 0;
    this.hand.anchor.set(0.25,0.25);
    this.update = function(delta){
        this.animTimer += delta;
        var value = Math.abs(Math.sin(this.animTimer));
        this.hand.x = value*-50;
        this.hand.y = value*50;
        this.arrow.scale.set(value*2);


        this.hand.x += this.arrow.x;
    };
    this.drawArrow();
    Game.webApp.juggler.addObject(this,1);
    this.arrow.x = -80;
    this.hand.scale.x = -1;

    this.addChild(this.arrow);
    this.addChild(this.character);
    this.addChild(this.hand);
    this.addChild(this.buttonTickContainer);

};
SportsTutorial.Ball.prototype = Object.create(SportsTutorial.BaseGame.prototype);
SportsTutorial.Ball.prototype.constructor = SportsTutorial.Ball;
SportsTutorial.Ball.prototype.drawArrow = function(){
    this.arrow.clear();
    this.arrow.beginFill(0xFFFFFF);
    this.arrow.lineStyle(1,0x0);

    this.arrow.quadraticCurveTo(
        20,-100,
        100,-50
    );
    this.arrow.lineTo(100 + 5,-50 - 5);
    this.arrow.lineTo(95 + 10,-45 + 10);
    this.arrow.lineTo(90 - 5,-40 + 5);
    this.arrow.lineTo(90,-40);
    this.arrow.quadraticCurveTo(
        25,-90,
        0,0
    );
};


SportsTutorial.Pogo = function(){
    SportsTutorial.BaseGame.call(this);
    this.hand = CC.Utility.pixiAtlasMovieClip(["hand_icon.png","hand_icon_tap.png"])
    this.arrow = new PIXI.Graphics();
    this.animTimer = 0;
    this.hand.anchor.set(0.25,0.25);
    this.update = function(delta){
        this.animTimer += delta;
        var value = Math.modo(this.animTimer,1);

        var handMotion = 1-Math.clamp(0.2,0.5,Math.sin(value*Math.PI));

        this.arrow.scale.set(value*2);
        this.arrow.visible = value < 0.9;
        this.hand.scale.set(-handMotion,handMotion);

    };
    this.drawArrow();
    Game.webApp.juggler.addObject(this,1);
    this.arrow.x = -80;
    this.hand.x = -80;
    this.hand.scale.x = -1;

    this.addChild(this.arrow);
    this.addChild(this.hand);
    this.addChild(this.buttonTickContainer);

};
SportsTutorial.Pogo.prototype = Object.create(SportsTutorial.BaseGame.prototype);
SportsTutorial.Pogo.prototype.constructor = SportsTutorial.Pogo;
SportsTutorial.Pogo.prototype.drawArrow = function(){
    this.arrow.clear();
    this.arrow.beginFill(0xFFFFFF);
    this.arrow.lineStyle(1,0x0);

    this.arrow.bezierCurveTo(
        0,-100,
        100,-100,
        100,-10
    );
    this.arrow.lineTo(100 + 5,-10);
    this.arrow.lineTo(95,0);
    this.arrow.lineTo(90 - 5,-10);
    this.arrow.lineTo(90,-10);
    this.arrow.bezierCurveTo(
        90,-90,
        10,-95,
        0,0
    );
};