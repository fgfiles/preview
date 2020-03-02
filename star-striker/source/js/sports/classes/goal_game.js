/**
 * Created by jonathan.kernick on 23/03/2017.
 */
var GoalGame = function (team) {
    PIXI.Container.call(this);
    this.team = team;
    this.build();
};

GoalGame.prototype = Object.create(PIXI.Container.prototype);
GoalGame.prototype.constructor = GoalGame;

GoalGame.prototype.get3DScale = function (zDepth) {
    return 50 / zDepth;
};
GoalGame.prototype.set3dPosition = function (obj, vec3) {
    var zScale = this.get3DScale(vec3.z-this.cameraZ);
    obj.scale.set(zScale);
    obj.x = vec3.x * zScale;
    obj.y = (vec3.y * zScale) + 15;
};
GoalGame.prototype.buildBallRain = function () {
    var ballRainHolder = new PIXI.Container();

    var i = 0;
    var count = 20;
    var countHalf = Math.floor((count-1)/2);
    var spread = 600/count;
    for(i; i < count * 5; ++i) {
        var j = i%count;
        var ball = new PIXI.Container();
        ball.graphic = CC.Utility.pixiAtlasSprite("goal_ball_" + Math.floor(Math.random()*4) + ".png");
        ball.graphic.rotation = Math.random()*Math.PI*2;
        ball.highLight = CC.Utility.pixiAtlasSprite("goal_ball_highlight.png");

        ball.addChild(ball.graphic);
        ball.addChild(ball.highLight);

        ball.y = -400 + -Math.random()*400
        ball.scale.set(0.25*(Math.random()*0.2+0.8));
        ball.vel = Math.random()+1;
        ball.x = spread*(j-countHalf) + (Math.random()-0.5)*spread;
        ballRainHolder.addChild(ball);
    }

    ballRainHolder.children.sort(function(a,b){
        return a.scale.x-b.scale.x;
    });

    ballRainHolder.update = function(delta){
        var i = 0;
        var count = this.children.length;
        for(i; i < count; ++i) {
            ball = this.children[i];
            ball.y += ball.scale.y*ball.scale.y * delta * 1500*ball.vel;
            ball.rotation += delta*0.1;
        }
    };

    return ballRainHolder;
};
GoalGame.prototype.buildPitchLines = function () {
    var pitchLines = new PIXI.Container();

    var pitchHeight = 20;
    pitchLines.lines = [
        CC.Utility.pixiAtlasSprite("goal_pitch_line.png"),
        CC.Utility.pixiAtlasSprite("goal_pitch_line.png"),
        CC.Utility.pixiAtlasSprite("goal_pitch_line.png"),
        CC.Utility.pixiAtlasSprite("goal_pitch_line.png"),
        CC.Utility.pixiAtlasSprite("goal_pitch_line.png")
    ];
    pitchLines.lines[0].pos = {x: 0, y: pitchHeight, z: 0};
    pitchLines.lines[1].pos = {x: 0, y: pitchHeight, z: 0};
    pitchLines.lines[2].pos = {x: 0, y: pitchHeight, z: 0};
    pitchLines.lines[3].pos = {x: 0, y: pitchHeight, z: 0};
    pitchLines.lines[4].pos = {x: 0, y: pitchHeight, z: 0};
    pitchLines.addChild(pitchLines.lines[0]);
    pitchLines.addChild(pitchLines.lines[1]);
    pitchLines.addChild(pitchLines.lines[2]);
    pitchLines.addChild(pitchLines.lines[3]);
    pitchLines.addChild(pitchLines.lines[4]);
    pitchLines.offset = 0;
    var self = this;
    pitchLines.update = function (delta) {
        var i = 0, length = this.lines.length, line;
        //  this.offset =  Math.modo(this.offset-delta*5,1);
        for (i; i < length; ++i) {
            line = this.lines[i];
            line.pos.z = (20 * (i + this.offset))+Math.floor(self.cameraZ/20)*20;
            self.set3dPosition(line, line.pos);
            line.scale.x = 1;
            line.scale.y *= 0.2;
            line.visible = line.scale.y > 0;
        }
    };
    return pitchLines;
};
GoalGame.prototype.kinimaticSolver = function (startVec, endVec, firstLength, secondLength, scale,outPoint) {
    var point = outPoint || {x: 0, y: 0};
    var midPoint = {x: 0, y: 0};
    var firstLengthSquared = firstLength * firstLength;
    var secondLengthSquared = secondLength * secondLength;
    var lengthSquared = CC.Geometry.vectorDistanceSquared(startVec, endVec);
    var length = Math.sqrt(lengthSquared);

    var startVectorLength = (firstLengthSquared - secondLengthSquared + lengthSquared) / (length * 2);
    midPoint.x = ((((endVec.x - startVec.x) / length) * startVectorLength) + startVec.x);
    midPoint.y = ((((endVec.y - startVec.y) / length) * startVectorLength) + startVec.y);
    var innerLength = Math.sqrt(firstLengthSquared - (startVectorLength * startVectorLength));
    point.x = ((((endVec.y - startVec.y) / length) * scale * innerLength) + midPoint.x);
    point.y = ((((endVec.x - startVec.x) / length) * scale * -innerLength) + midPoint.y);
    if (length > (firstLength + secondLength)) {
        point.x = midPoint.x;
        point.y = midPoint.y;
    }
    return point;
};
GoalGame.prototype.buildGoalie = function () {
    var goalieHolder = new PIXI.Container();

    goalieHolder.bodyFront = CC.Utility.pixiAtlasSprite("goal_goalie_front.png",{anchor:"b"});
    goalieHolder.bodyFront.layer = 1;

    goalieHolder.bodyBolts = CC.Utility.pixiAtlasSprite("goal_goalie_front_pivots_white.png",{anchor:"b"});
    goalieHolder.bodyBolts.layer = 0;

    goalieHolder.bodyBack = CC.Utility.pixiAtlasSprite("goal_goalie_back.png",{anchor:"b"});
    goalieHolder.bodyBack.layer = 2;

    goalieHolder.foreArmLeftFront = CC.Utility.pixiAtlasSprite("goal_goalie_arm_0.png");
    goalieHolder.foreArmLeftFront.layer = 2;

    goalieHolder.foreArmLeftBack = CC.Utility.pixiAtlasSprite("goal_goalie_arm_0_dark.png");
    goalieHolder.foreArmLeftBack.layer = 3;

    goalieHolder.foreArmRightFront = CC.Utility.pixiAtlasSprite("goal_goalie_arm_0.png");
    goalieHolder.foreArmRightFront.layer = 2;

    goalieHolder.foreArmRightBack = CC.Utility.pixiAtlasSprite("goal_goalie_arm_0_dark.png");
    goalieHolder.foreArmRightBack.layer = 3;

    goalieHolder.armLeftFront = CC.Utility.pixiAtlasSprite("goal_goalie_arm_1.png");
    goalieHolder.armLeftFront.layer = 1;

    goalieHolder.armLeftBolts = CC.Utility.pixiAtlasSprite("goal_goalie_arm_1_pivot_white.png");
    goalieHolder.armLeftBolts.layer = 0;

    goalieHolder.armLeftBack = CC.Utility.pixiAtlasSprite("goal_goalie_arm_1_dark.png");
    goalieHolder.armLeftBack.layer = 2;

    goalieHolder.armRightFront = CC.Utility.pixiAtlasSprite("goal_goalie_arm_1.png");
    goalieHolder.armRightFront.layer = 1;

    goalieHolder.armRightBolts = CC.Utility.pixiAtlasSprite("goal_goalie_arm_1_pivot_white.png");
    goalieHolder.armRightBolts.layer = 0;

    goalieHolder.armRightBack = CC.Utility.pixiAtlasSprite("goal_goalie_arm_1_dark.png");
    goalieHolder.armRightBack.layer = 2;

    goalieHolder.handLeftBack = CC.Utility.pixiAtlasSprite("goal_goalie_hand_dark.png",{scale:{x:-1,y:1}});
    goalieHolder.handLeftBack.layer = 1;

    goalieHolder.handLeftFront = CC.Utility.pixiAtlasSprite("goal_goalie_hand.png",{scale:{x:-1,y:1}});
    goalieHolder.handLeftFront.layer = 0;

    goalieHolder.handLeftBolts = CC.Utility.pixiAtlasSprite("goal_goalie_hand_pivot_white.png",{scale:{x:-1,y:1}});
    goalieHolder.handLeftBolts.layer = -1;

    goalieHolder.handRightBack = CC.Utility.pixiAtlasSprite("goal_goalie_hand_dark.png");
    goalieHolder.handRightBack.layer = 1;

    goalieHolder.handRightFront = CC.Utility.pixiAtlasSprite("goal_goalie_hand.png");
    goalieHolder.handRightFront.layer = 0;

    goalieHolder.handRightBolts = CC.Utility.pixiAtlasSprite("goal_goalie_hand_pivot_white.png");
    goalieHolder.handRightBolts.layer = -1;

    goalieHolder.sholderPosLeft = {x:14,y:-125};
    goalieHolder.sholderPosRight = {x:-14,y:-125};
    goalieHolder.elbowPosLeft = {x:0,y:0};
    goalieHolder.elbowPosRight = {x:0,y:0};
    goalieHolder.wristPosLeft = {x:0,y:0};
    goalieHolder.wristPosRight = {x:0,y:0};

    goalieHolder.addChild(goalieHolder.foreArmRightBack);
    goalieHolder.addChild(goalieHolder.foreArmLeftBack);
    goalieHolder.addChild(goalieHolder.foreArmRightFront);
    goalieHolder.addChild(goalieHolder.foreArmLeftFront);

    goalieHolder.addChild(goalieHolder.armLeftBack);
    goalieHolder.addChild(goalieHolder.armRightBack);
    goalieHolder.addChild(goalieHolder.bodyBack);

    goalieHolder.addChild(goalieHolder.bodyFront);
    goalieHolder.addChild(goalieHolder.armLeftFront);
    goalieHolder.addChild(goalieHolder.armRightFront);

    goalieHolder.addChild(goalieHolder.bodyBolts);
    goalieHolder.addChild(goalieHolder.armLeftBolts);
    goalieHolder.addChild(goalieHolder.armRightBolts);

    goalieHolder.addChild(goalieHolder.handLeftBack);
    goalieHolder.addChild(goalieHolder.handRightBack);

    goalieHolder.addChild(goalieHolder.handRightFront);
    goalieHolder.addChild(goalieHolder.handLeftFront);

    goalieHolder.addChild(goalieHolder.handRightBolts);
    goalieHolder.addChild(goalieHolder.handLeftBolts);

    var self = this;

    var timer = 0;
    goalieHolder._setPos = function(nameProto,pos,target){
        if(target)
        {
            this[nameProto+"Front"].rotation =  Math.atan2(target.x-pos.x,pos.y-target.y);
            this[nameProto+"Back"].rotation = this[nameProto+"Front"].rotation;
            if(this[nameProto+"Bolts"])
            {
                this[nameProto+"Bolts"].rotation = this[nameProto+"Front"].rotation;
            }
        }
        this[nameProto+"Front"].x = pos.x;
        this[nameProto+"Front"].y = pos.y;
        this[nameProto+"Back"].x = pos.x;
        this[nameProto+"Back"].y = pos.y;
        if(this[nameProto+"Bolts"]) {
            this[nameProto + "Bolts"].x = pos.x;
            this[nameProto + "Bolts"].y = pos.y;
        }
    };

    goalieHolder.update = function(delta){

        timer += delta*5;

        this.wristPosLeft.x = Math.sin(timer+1)*Math.cos(timer+1)*10+50;
        this.wristPosLeft.y = Math.cos(timer+1)*20-120;

        this.wristPosRight.x = Math.sin(-timer)*Math.cos(-timer)*10-50;
        this.wristPosRight.y = Math.cos(-timer)*20-120;
        //44 54
        //GoalGame.prototype.kinimaticSolver = function (startVec, endVec, firstLength, secondLength, scale,outPoint) {
        self.kinimaticSolver(this.sholderPosRight,this.wristPosRight,27,22,1,this.elbowPosRight);
        self.kinimaticSolver(this.sholderPosLeft,this.wristPosLeft,27,22,-1,this.elbowPosLeft);


        this._setPos("foreArmLeft",this.sholderPosLeft,this.elbowPosLeft);
        this._setPos("foreArmRight",this.sholderPosRight,this.elbowPosRight);
        this._setPos("armLeft",this.elbowPosLeft,this.wristPosLeft);
        this._setPos("armRight",this.elbowPosRight,this.wristPosRight);
        this._setPos("handLeft",this.wristPosLeft);
        this._setPos("handRight",this.wristPosRight);

        this.handLeftFront.rotation =
            this.handLeftBack.rotation =
                this.handLeftBolts.rotation =
                    this.armLeftFront.rotation*0.7;
        this.handRightFront.rotation =
            this.handRightBack.rotation =
                this.handRightBolts.rotation =
                    this.armRightFront.rotation*0.7;


        this._setPos("body",{x:0,y:0});

        var offsetRot = -this.rotation;
        var offsetSlide = (this.x > 0)?-1:1;
        var i = 0, length = this.children.length;
        for(i; i < length; ++i)
        {
            var part = this.children[i];
            if(part.layer !== undefined){
                part.x += Math.cos(offsetRot)*offsetSlide*part.layer;
                part.y += Math.sin(offsetRot)*offsetSlide*part.layer;
            }
        }
    };


    return goalieHolder;
};
GoalGame.prototype.buildGoal = function () {
    var goalHolder = new PIXI.Container();
  //  goalHolder.graphic = CC.Utility.pixiAtlasSprite("goal_goal.png");
    goalHolder.posts = CC.Utility.pixiAtlasSprite("goal_posts.png");
    goalHolder.graphic = new PIXI.spine.Spine(Game.animationList["goal_net"]);
    var pitchHeight = 20;
    goalHolder.pos = {x: 0, y: pitchHeight, z: 50};
 //   goalHolder.graphic.anchor.y = 1;
    goalHolder.posts.anchor.y = 1;
    goalHolder.offset = 0;
    goalHolder.goalie = this.buildGoalie();
    goalHolder.goalLine = CC.Utility.pixiAtlasSprite("goal_goal_line.png");
  //  goalHolder.goalie.anchor.y = 1;

    goalHolder.changeGoaliePosition = function (value) {
        var num = _.random(1, 2);
        Game.sound.play("Player_Whoosh_0" + num);
        var rotValue = (this.goalie.x / 100) - value;
        TweenLite.to(this.goalie, 0.3, {rotation: rotValue * 0.1, x: value * 100 + rotValue * -10});
        TweenLite.to(this.goalie, 0.3, {delay: 0.3, rotation: 0, ease: Back.easeOut});
        TweenLite.to(this.goalie, 0.2, {delay: 0.3, x: value * 100});
    };

    goalHolder.targetsHolder = new PIXI.Container();
    goalHolder.targetsArray = [];

    goalHolder.ballTest = CC.Utility.pixiAtlasSprite("goal_ball_0.png", {scale: 0.1});
    goalHolder.addTarget = function (start, end, life, speed) {
        var target = new PIXI.Container();
        target.front = CC.Utility.pixiAtlasSprite("goal_target.png");
        target.back = CC.Utility.pixiAtlasSprite("goal_target_back.png");
        target.addChild(target.back);
        target.addChild(target.front);

        target.x = start.x;
        target.y = start.y;

        target.life = life;
        target.alpha = 0;
        TweenLite.to(target, 0.1, {alpha:1});

        target.start = start;
        target.end = end;
        this.targetsHolder.addChild(target);
        this.targetsArray.push(target);
    };

    goalHolder.goalLine.y = 5;
    goalHolder.goalie.y = 5;
    goalHolder.goalie.visible = false;

    goalHolder.goalMoveable = new PIXI.Container();

    goalHolder.goalMask = new PIXI.Graphics();

    goalHolder.goalMask.beginFill(0xFF0000,0.3);
    goalHolder.goalMask.drawRect(-250,-200,500,206);

    goalHolder.goalMoveable.mask = goalHolder.goalMask;
    goalHolder.addChild(goalHolder.goalLine);
    goalHolder.addChild(goalHolder.goalMoveable);
    goalHolder.addChild(goalHolder.goalMask);
    goalHolder.goalMoveable.addChild(goalHolder.graphic);
    goalHolder.goalMoveable.addChild(goalHolder.posts);
    goalHolder.goalMoveable.addChild(goalHolder.targetsHolder);
    goalHolder.goalMoveable.addChild(goalHolder.goalie);
    //  goalHolder.addChild(goalHolder.ballTest);

    goalHolder.hideGoal = function(){
        TweenLite.to(this.goalMoveable,0.3,{y:200,ease:Power1.easeIn});
    };
    goalHolder.showGoal = function(goalState){
        TweenLite.to(this.goalMoveable,0.5,{y:0,ease:Bounce.easeOut});
        if(goalState > 0)
        {
            this.movingTargets = true;
        }
        if(goalState > 1)
        {
            this.goalie.visible = true;
        }
    };

    var timer = 0;
    var self = this;
    goalHolder.movingTargets = false;
    goalHolder.projectTarget = function (index,time) {
        var target =this.targetsArray[index];
        var returnPos = {x:0,y:0};
        var value = Math.sin((target.life - time)*2)*0.5+0.5;
        if(this.movingTargets)
        {
            returnPos.x = Math.lerp(target.start.x, target.end.x, value);
            returnPos.y = Math.lerp(target.start.y, target.end.y, value);
        }
        else{
            returnPos.x = target.start.x;
            returnPos.y = target.start.y;
        }

        return returnPos;
    };
    goalHolder.animTimer = 0;
    goalHolder.update = function (delta) {
        if(this.goalie.visible)
        {
            this.goalie.update(delta);
        }
        this.offset = Math.modo(this.offset - delta * 5, 10);
        // this.pos.z = 20*(this.offset+1);
        timer += delta;
        this.animTimer += delta;
        if (timer > 2 && self.targetsShow) {
            timer = 0;
            this.changeGoaliePosition(Math.sin(Math.random() * 100));
            // this.addTarget({
            //     x: Math.sin(Math.random() * 100) * 150,
            //     y: Math.random() * -90 - 30
            // }, {x: Math.sin(Math.random() * 100) * 150, y: Math.random() * -90 - 30}, 3, 10);
            // this.addTarget({x:Math.sin(Math.random()*100)*150,y:Math.random()*-90-30},{x:0,y:0},3,10);
            // this.addTarget({x:Math.sin(Math.random()*100)*150,y:Math.random()*-90-30},{x:0,y:0},3,10);
        }
        var i = this.targetsArray.length - 1, target,value;

        for (i; i >= 0; --i) {
            target = this.targetsArray[i];
            target.back.x = target.x * -0.02;
            target.back.y = (target.y - 35) * -0.01;
            //target.scale.x = Math.sin(this.animTimer*5+i)*0.1 + 1;
            //target.scale.y = target.scale.x;
            if(this.movingTargets)
            {
                value = Math.sin(target.life*2)*0.5+0.5;
                target.x = Math.lerp(target.start.x,target.end.x, value);
                target.y = Math.lerp(target.start.y,target.end.y, value);
            }

            target.life -= delta;
        }
        self.set3dPosition(this, this.pos);
    };

    return goalHolder;
};

GoalGame.prototype.addTarget = function() {
    this.goal.addTarget({
        x: Math.sin(Math.random() * 100) * 150,
        y: Math.random() * -90 - 30
    }, {x: Math.sin(Math.random() * 100) * 150, y: Math.random() * -90 - 30}, 3, 10);
}

GoalGame.prototype.buildBall = function (ballType) {
    var ball = new PIXI.Container();
    ball.graphic = CC.Utility.pixiAtlasSprite("goal_ball_" + ballType + ".png");
    ball.highLight = CC.Utility.pixiAtlasSprite("goal_ball_highlight.png");
    ball.pos = {x: 0, y: 50, z: this.goal.pos.z-30};
    ball.graphic.scale.set(0.3);
    ball.highLight.scale.set(0.3);
    ball.offset = 0;
    ball.life = 4;
    ball.launched = false;
    var self = this;
    ball.update = function (delta) {
        //  this.offset = (this.offset+delta*10)%30;
        // this.pos.z = this.offset+20;
        if(this.launched) {
            this.life -= delta;
        }
        this.graphic.rotation = (this.life * Math.sign(this.pos.x)) * -10;
        self.set3dPosition(this, this.pos);
    };
    ball.addChild(ball.graphic);
    ball.addChild(ball.highLight);
    return ball;
};
GoalGame.prototype.addBall = function () {
    var ball = this.buildBall(Math.floor(Math.random() * 5));
    this.ballsHolder.addChild(ball);
    this.ballsArray.push(ball);
};
GoalGame.prototype.buildIntroGoal = function () {
    var introHolder = new PIXI.Container();
    introHolder.background = CC.Utility.pixiAtlasSprite("goal_intro_bg.png");
    introHolder.characterA = new PIXI.spine.Spine(Game.animationList["intro_goal_character_"+ (this.team * 2)]);
    introHolder.characterB = new PIXI.spine.Spine(Game.animationList["intro_goal_character_"+ (this.team * 2 + 1)]);


    if(this.team + "" === "4")
    {
        introHolder.characterA.cloud = new PIXI.spine.Spine(Game.animationList["cloud"]);
        introHolder.characterA.cloud.state.setAnimation(0, "idle", true);
        introHolder.characterA.cloud.y = -270;
        introHolder.characterA.cloud.scale.set(2);
        introHolder.characterA.addChild(introHolder.characterA.cloud);
    }

    introHolder.ballRain = this.buildBallRain();

    introHolder.characterA.state.setAnimation(0,"idle",true);

    introHolder.characterB.state.setAnimation(0,"idle",true);

    introHolder.characterA.scale.set(0.5);
    introHolder.characterB.scale.set(0.5);

    introHolder.characterA.x = 90;
    introHolder.characterB.x = -90;
    introHolder.characterA.y = 95;
    introHolder.characterB.y = 95;

    introHolder.addChild(introHolder.background);
    introHolder.addChild(introHolder.ballRain);
    introHolder.addChild(introHolder.characterA);
    introHolder.addChild(introHolder.characterB);

    introHolder.update = function(delta){
        this.ballRain.update(delta);
    };

    return introHolder;
};
GoalGame.prototype.checkBallImpact = function (ball) {

    //check if in goal zone
    var goalWidth = 200;
    var goalTop = -170;
    var zeroVec = {x: 0, y: 0};

    var ballPos = ball.toLocal(zeroVec, this.goal);
    ballPos.x = -ballPos.x;
    ballPos.y = -ballPos.y;

    if (Math.abs(ballPos.x) < goalWidth && ballPos.y > goalTop && ballPos.y < 0) {

        if (Math.abs(ballPos.x) < goalWidth - 40 && ballPos.y > goalTop + 40 && ballPos.y < 0) {
            if (this.goal.goalie.visible && Math.abs(this.goal.goalie.x - ball.x) < 50) {
                var offset = Math.sign(ball.pos.x) * 100;
                TweenLite.to(ball.pos, 0.5, {x: ball.pos.x * 0.5 + offset, z: this.goal.pos.z-40, ease: Linear.none});
                TweenLite.to(ball.pos, 0.5, {y: 25, ease: Bounce.easeOut});
                TweenLite.to(ball, 0.5, {alpha:0});
                Game.sound.play("perfect_hit");
                Game.sound.play("Target_Board_Impact");
            } else {
                var targetHit = false;
                var i = this.goal.targetsArray.length - 1, target;
                for (i; i >= 0; --i) {
                    target = this.goal.targetsArray[i];

                    var dist = CC.Geometry.vectorDistanceSquared(ballPos, target);
                    //console.log(Math.sqrt(dist));
                    if (dist < 40 * 40) {
                        this.goal.targetsArray.splice(i, 1);
                        TweenLite.to(target.scale,0.2,{x:3,y:3,onCompleteScope:target,onComplete:function(){
                            this.parent.removeChild(this);
                        }});
                        TweenLite.to(target,0.2,{alpha:0});
                        targetHit = true;
                        Game.sound.play("target_hit");
                        this.goals++;

                        var i = 10;

                        while ( i > 0 ) {
                            this.makeExplosionParticle(target.x, target.y);
                            --i;
                        }

                        var num = _.random(1, 3);
                        Game.sound.play("Goal_Net_Impact_0" + num);

                        num = _.random(1, 4);
                        Game.sound.play("Audience_Cheer_0" + num);

                        Game.sound.play('One_Point_Impact_Music');

                        this.flashAnimation.state.setAnimation(0, "action", false);
                        this.flashAnimation.state.addAnimation(0, "idle", false, 0);

                        var index = Math.round(ball.pos.x/50);
                        index = Math.clamp(0,4,index+2);
                        index += (ball.pos.y > -40)*5;

                        this.goal.graphic.state.clearTrack(0);
                        this.goal.graphic.state.setAnimation(0,"hit_" + index);

                        var scoreGiven = 10;

                        if (this.level >= 3) {
                            scoreGiven = 15;
                        }

                        if (this.level >= 5) {
                            scoreGiven = 20;
                        }

                        if (this.level >= 7) {
                            scoreGiven = 25;
                        }

                        if (this.level >= 9) {
                            scoreGiven = 30;
                        }

                        this.scoreCallBack(scoreGiven);

                        TweenLite.to(ball, 0.2, {alpha:0});

                        this.createScoreText(ball, scoreGiven, 0x70CE2C);

                        this.addTarget();
                    }
                }
                if(targetHit) {

                } else {
                    TweenLite.to(ball.pos, 0.5, {x: ball.pos.x * 0.5 + offset, z: this.goal.pos.z-20, ease: Linear.none});
                    TweenLite.to(ball.pos, 0.5, {y: 20, ease: Bounce.easeOut});
                    TweenLite.to(ball, 0.5, {alpha:0});
                    this.goals++;

                    var i = 10;

                    while ( i > 0 ) {
                        this.makeExplosionParticle(ball.pos.x, ball.pos.y);
                        --i;
                    }

                    var num = _.random(1, 3);
                    Game.sound.play("Goal_Net_Impact_0" + num);

                    num = _.random(1, 4);
                    Game.sound.play("Audience_Cheer_0" + num);

                    Game.sound.play('One_Point_Impact_Music');

                    this.flashAnimation.state.setAnimation(0, "action", false);
                    this.flashAnimation.state.addAnimation(0, "idle", false, 0);

                    Game.sound.play("ring_boost_2");
                    this.scoreCallBack(1);
                    var index = Math.round(ball.pos.x/50);
                    index = Math.clamp(0,4,index+2);
                    index += (ball.pos.y > -40)*5;

                    this.goal.graphic.state.clearTrack(0);
                    this.goal.graphic.state.setAnimation(0,"hit_" + index);

                    this.createScoreText(ball, 1, 0xf2f246);
                }
            }
        } else {
            Game.sound.play("ball_bounce");
            ball.alpha = 0;
        }
    } else{
        ball.alpha = 0;
    }
};

GoalGame.prototype.createScoreText = function (target, value, color) {
  var pointsText = SportsUI.createDisplayText(
    '+' + value,
    {size: 32, maxSize: 130, fill: color},
    false
  );

  pointsText.x = target.x - pointsText.width / 2;
  pointsText.y = target.y - (target.height / 2) - 10;

  var _self = this;

  TweenLite.to(pointsText, 1, {y: pointsText.y - 30, alpha: 0, ease: Circ.easeOut, delay: 0.5, onComplete: function() {
    _self.removeChild(pointsText);
  }});

  this.addChild(pointsText);
}

GoalGame.prototype.launchBall = function (vec) {
    var ball = this.ballsArray[this.ballsArray.length - 1];
    var self = this
    var minDist = 100;
    var hitPos = {x:vec.x,y:vec.y}

    var num = _.random(1, 4);
    Game.sound.play("Football_Kick_0" + num);
    
    if (ball && vec.y < 0) {

        var i = 0, length = this.goal.targetsArray.length, targetPos,testDist;
        for(i; i < length; ++i) {
            targetPos = this.goal.projectTarget(i,0.3);
            testDist = Math.abs(targetPos.x-vec.x);
            if(testDist < minDist) {
                hitPos.x = targetPos.x;
                hitPos.y = targetPos.y+15;
                minDist = testDist;
            }
        }

        ball.launched = true;
        TweenLite.to(ball.pos, 0.3, {x: hitPos.x, z: this.goal.pos.z, ease:  Power1.easeIn, onCompleteScope: ball, onComplete: function () {
                //console.log("test");
                self.checkBallImpact(ball);
            }
        });
        TweenLite.to(ball.pos, 0.3, {y: hitPos.y, ease:  Linear.none});
    }
};
GoalGame.prototype.buildCharacter = function (characterNum) {
    var characterHolder = new PIXI.Container();
    characterHolder.graphic = CC.Utility.pixiAtlasSprite("goal_character_" + characterNum + ".png");
    characterHolder.addChild(characterHolder.graphic);
    return characterHolder;
};

GoalGame.prototype.destroyParticle = function(particle) {
    this.particles.splice(_.indexOf(this.particles, particle), 1);
    particle.parent.removeChild(particle);
}

GoalGame.prototype.build = function() {

    this.particles = [];

    this.cameraZ = 0;
    var self = this;
    this.background = CC.Utility.pixiAtlasSprite("goal_background.png");
    this.backgroundHighlight = CC.Utility.pixiAtlasSprite("goal_background_highlight.png");

    this.ballsHolder = new PIXI.Container();
    this.ballsArray = [];
    // this.testBall = this.buildBall(Math.floor(Math.random()*5));

    this.goals = 0;
    this.level = 1;

    this.flipKick = false;
    this.introSequence = this.buildIntroGoal();

    this.whiteFlash = new PIXI.Graphics();

    this.whiteFlash.beginFill(0xFFFFFF);

    this.whiteFlash.drawRect(-500,-500,1000,1000);

    this.whiteFlash.alpha = false;
    this.interactiveArea = new PIXI.Container();
    //this.interactiveArea.interactive = true;
    this.interactiveArea.hitArea = new PIXI.Rectangle(-1000, -1000, 2000, 2000);
    this.interactiveArea.timeVec = 0;
    this.interactiveArea.mousePos = 0;
    this.interactiveArea.mousedown = this.interactiveArea.touchstart = function (event) {
        this.startMousePos = event.data.getLocalPosition(this);
        this.timeVec = (new Date()).getTime();
    };
    this.interactiveArea.mouseup = this.interactiveArea.touchend = function (event) {

        var mousePos = event.data.getLocalPosition(this);
        var rel = {x:0,y:0};
        rel.x = mousePos.x - this.startMousePos.x;
        rel.y = mousePos.y - this.startMousePos.y;
        var diff = Math.sqrt((rel.x*rel.x)+(rel.y*rel.y));
        this.timeVec = diff/((new Date()).getTime()-this.timeVec);
        rel.x = (rel.x/diff)*this.timeVec*250;
        rel.y = (rel.y/diff)*this.timeVec*150;
        if (rel.y < 0){
            Game.sound.play("racquet_swipe_" + Math.floor(Math.random()*3+1));
            if(!this.flipKick)
            {
                self.characters.state.setAnimation(0, "kick_L");

                TweenLite.delayedCall(0.4,function(){
                    self.characters.state.setAnimation(0, "idle_L", true);
                });
            }
            else{
                self.characters.state.setAnimation(1, "kick_R");
                TweenLite.delayedCall(0.4,function(){
                    self.characters.state.setAnimation(1, "idle_R", true);
                });
            }
            this.flipKick = !this.flipKick;
            self.launchBall({x: rel.x, y: rel.y});
            self.addBall();
        }
    };

    this.characters = new PIXI.spine.Spine(Game.animationList["goal_characters_"+this.team]);
    this.characters.state.setAnimation(0, "idle_L", true);
    this.characters.state.setAnimation(1, "idle_R", true);
    this.characters.y = 0;
    this.characters.stateData.setMixByName("kick_L","idle_L",0.3);
    this.characters.stateData.setMixByName("kick_R","idle_R",0.3);

    this.flashAnimation = new PIXI.spine.Spine(Game.animationList["star_striker_camera_flashes"]);
    this.flashAnimation.state.setAnimation(0, 'idle', false);
    this.flashAnimation.stateData.setMix('idle', 'action', 0.4);
    this.flashAnimation.stateData.setMix('action', 'idle', 0.4);

    this.pitchLines = this.buildPitchLines();
    this.goal = this.buildGoal();

    this.addChild(this.background);
    this.addChild(this.flashAnimation);
    this.addChild(this.pitchLines);
    this.addChild(this.backgroundHighlight);
    this.addChild(this.goal);
    this.addChild(this.ballsHolder);
    this.addChild(this.characters);
    this.addChild(this.interactiveArea);
    this.addChild(this.introSequence);
    this.addChild(this.whiteFlash);

    this.addTarget();
    this.addBall();

    this.timer = 0;
};

GoalGame.prototype.gameStart = function () {

    this.gameRunning = true;
    this.interactiveArea.interactive = true;
};
GoalGame.prototype.gameOver = function () {

    this.gameRunning = false;
    this.interactiveArea.interactive = false;
};
GoalGame.prototype.advanceGoal = function (goalState) {

    this.interactiveArea.interactive = false;
    this.gameRunning = false;
    this.goal.hideGoal();

    this.level += 1;

    var self = this;
    TweenLite.to(this,1.5,{delay:1,cameraZ:this.cameraZ+1000});

    Game.sound.play("crowd_start");
    TweenLite.delayedCall(1,function(){
        self.characters.state.setAnimation(0, "run_L", true);
        self.characters.state.setAnimation(1, "run_R", true);
    });
    TweenLite.delayedCall(0.5,function(){
        self.goal.pos.z += 1000;
        self.goal.showGoal(goalState);
        if(self.ballsArray.length)
        {
            var ball = self.ballsArray[self.ballsArray.length-1];
            if(ball.launched)
            {
                self.addBall();
            }
            else{
                ball.pos.z += 1000;
            }
        }
        else{
            self.addBall();
        }

    });

    TweenLite.delayedCall(2.5,function(){
        self.interactiveArea.interactive = true;
        self.characters.state.setAnimation(0, "idle_L", true);
        self.characters.state.setAnimation(1, "idle_R", true);
        self.gameRunning = true;
    });
};
GoalGame.prototype.update = function (delta) {
    this.pitchLines.update(delta);
    this.goal.update(delta);
    this.introSequence.update(delta);
    this.timer += delta;
    if (this.timer > 7) {
        this.timer = 0;
        //this.flipFlop = !this.flipFlop;
       // this.advanceGoal();
       // this.launchBall({x: Math.sin(Math.random() * 100) * 150, y: (Math.random() * -80) - 20});
       // this.addBall();
    }
   // this.characterA.graphic.y = Math.abs(Math.sin(this.cameraZ*0.02))*-20;
  //  this.characterB.graphic.y = Math.abs(Math.cos(this.cameraZ*0.02))*-20;
    var i = this.ballsArray.length - 1, ball;
    for (i; i >= 0; --i) {
        ball = this.ballsArray[i];
        ball.update(delta);
        if (ball.life < 0) {
            this.ballsHolder.removeChild(ball);
            this.ballsArray.splice(i, 1);
        }
    }

    i = this.particles.length-1;
    for (i; i >= 0; --i) {
        this.particles[i].update();

        if (this.particles[i].scale.x < 0.001 ) {
            this.destroyParticle(this.particles[i]);
        }
    }
};


GoalGame.prototype.makeExplosionParticle = function(x, y) {
    var angle = Math.random() * Math.PI * 2; 
    var speed = Math.random() * 10 +15;
    var velX = Math.cos(angle) * speed;
    var velY = Math.sin(angle) * speed;

    //image, x, y, xVel, yVel, drag, shrink, gravity, fade, spin
    var p = new Particle('star_burst.png', x, y, velX, velY, 0.85, 0.85, 0, 0.85, 5);

    this.particles.push(p);

    this.addChild(p);
}
