/**
 * Created by Craig Beswetherick on 29/01/2018.
 */

var ballZZSpeed = 220;
var gravityY = 1200;
var horizonPoint = 110;
var timeAllowed = 60;
var savedBallXSpeed = 2800;

var pat3onTheLeft = [
  {
    "pos": 0,
    "delay": 1
  },
  {
    "pos": 0,
    "delay": 2
  },
  {
    "pos": 0,
    "delay": 3
  }
]

var pat3onTheMiddle = [
  {
    "pos": 1,
    "delay": 1
  },
  {
    "pos": 1,
    "delay": 2
  },
  {
    "pos": 1,
    "delay": 3
  }
]

var pat3onTheRight = [
  {
    "pos": 2,
    "delay": 1
  },
  {
    "pos": 2,
    "delay": 2
  },
  {
    "pos": 2,
    "delay": 3
  }
]

var patLeftToRight = [
  {
    "pos": 0,
    "delay": 2
  },
  {
    "pos": 1,
    "delay": 3
  },
  {
    "pos": 2,
    "delay": 4
  }
]

var patRightToLeft = [
  {
    "pos": 2,
    "delay": 1
  },
  {
    "pos": 1,
    "delay": 2
  },
  {
    "pos": 0,
    "delay": 3
  }
]

var patRainbow = [
  {
    "pos": 0,
    "delay": 1
  },
  {
    "pos": 1,
    "delay": 2
  },
  {
    "pos": 2,
    "delay": 3
  },
  {
    "pos": 2,
    "delay": 5
  },
  {
    "pos": 1,
    "delay": 6
  },
  {
    "pos": 0,
    "delay": 7
  }
]

var patRainbowReverse = [
  {
    "pos": 2,
    "delay": 1
  },
  {
    "pos": 1,
    "delay": 2
  },
  {
    "pos": 0,
    "delay": 3
  },
  {
    "pos": 0,
    "delay": 4
  },
  {
    "pos": 1,
    "delay": 5
  },
  {
    "pos": 2,
    "delay": 6
  }
]

var patDoubleOuter = [
  {
    "pos": 2,
    "delay": 1
  },
  {
    "pos": 0,
    "delay": 1
  }
]

var patDoubleLeft = [
  {
    "pos": 0,
    "delay": 1
  },
  {
    "pos": 1,
    "delay": 1
  }
]

var patDoubleRight = [
  {
    "pos": 1,
    "delay": 1
  },
  {
    "pos": 2,
    "delay": 1
  }
]

var patterns = [
  pat3onTheLeft,
  pat3onTheMiddle,
  pat3onTheRight,
  patLeftToRight,
  patRightToLeft,
  patRainbow,
  patRainbowReverse,
  patDoubleOuter,
  patDoubleLeft,
  patDoubleRight
];

var GoalieGame = function (team) {
  PIXI.Container.call(this);
  this.team = team;
  this.charIDA = team * 2;
  this.charIDB = this.charIDA + 1;

  this.balls = [];
  this.cameraZ = 0;
  
  this.score = 0;
  
  this.timer = 0;
  this.timePlayed = 0;
  this.playbackProgress = 1.9;
  this.currentPlayback = [];
  this.difficultyModifier = 0;

  this.particles = [];

  this.comboIdx = 0;

  this.background = CC.Utility.pixiAtlasSprite("net.png");
  this.addChild(this.background);

  this.ballsHolder = new PIXI.Container();
  this.addChild(this.ballsHolder);

  var self = this;
  this.ballsHolder.updateLayersOrder = function () {
    self.ballsHolder.children.sort(function(a,b) {
        a.pos.z = a.pos.z || 0;
        b.pos.z = b.pos.z || 0;
        return b.pos.z - a.pos.z;
    });
  };

  this.flashAnimation = new PIXI.spine.Spine(Game.animationList["super_goalie_camera_flashes"]);
  this.flashAnimation.state.setAnimation(0, 'idle', false);
  this.flashAnimation.stateData.setMix('idle', 'action', 0.4);
  this.flashAnimation.stateData.setMix('action', 'idle', 0.4);

  this.addChild(this.flashAnimation);

  this.leftPlayerAnim = new PIXI.spine.Spine(Game.animationList["goal_character_" + this.charIDA]);
  this.addChild(this.leftPlayerAnim);

  this.rightPlayerAnim = new PIXI.spine.Spine(Game.animationList["goal_character_" + this.charIDB]);
  this.addChild(this.rightPlayerAnim);

  addAnimationMixes(this.leftPlayerAnim);
  addAnimationMixes(this.rightPlayerAnim);

  this.leftPlayerAnim.state.setAnimation(0, "idle", true);
  this.rightPlayerAnim.state.setAnimation(0, "idle", true);

  this.background.scale.x = this.background.scale.y = 1;
  setTimeout(_.bind(this.createIntro, this), 1200);
};

function addAnimationMixes(animation) {
  animation.stateData.setMix('save_left', 'idle', 0.4);
  animation.stateData.setMix('save_right', 'idle', 0.4);
  animation.stateData.setMix('save_up', 'idle', 0.4);
  animation.stateData.setMix('taunt', 'idle', 0.4);
}

GoalieGame.prototype = Object.create(PIXI.Container.prototype);
GoalieGame.prototype.constructor = GoalieGame;

GoalieGame.prototype.createIntro = function() {

  var delay = 0.1;
  var animLength = 3;

  this.leftPlayerAnim.state.setAnimation(0, "idle", true);
  this.rightPlayerAnim.state.setAnimation(0, "idle", true);

  TweenLite.to(this.background.scale, animLength, {x: 1.2, y: 1.2, delay: delay});
  TweenLite.to(this.leftPlayerAnim, animLength, {x: -100, delay: delay});
  TweenLite.to(this.rightPlayerAnim, animLength, {x:  100, delay: delay});
}

GoalieGame.prototype.buildBall = function (pos) {
  if (!this.gameRunning) {
    return;
  }

  var segmentSize = 1800;
  var startX = -segmentSize;

  startX += pos * segmentSize;

  var id = _.random(0, 4);

  var ball = CC.Utility.pixiAtlasSprite("ball_" + id + ".png");
  ball.pos = { 
    x: startX,
    y: horizonPoint, 
    z: 400
  };

  var xSpd = _.random(-100, 100, true);

  if (startX > 0) {
    xSpd = -_.random(1000, 1400, true);
  } else if (startX < 0) {
    xSpd = _.random(1000, 1400, true);
  }

  ball.xVel = xSpd;
  ball.yVel = -(1000 + _.random(0, 100, true));

  ball.scale.set(0.5);
  ball.x = 0;
  ball.y = horizonPoint;

  var ballSpeed = _.random(-1, 1, true)

  this.set3dPosition(ball, ball.pos);

  var self = this;
  ball.update = function (delta) {

    if (!self.gameRunning) {
      return;
    }

    this.yVel += gravityY * delta; //+ (this.difficultyModifier * 0.06);

    this.pos.x += this.xVel * delta;
    this.pos.y += this.yVel * delta;
    this.rotation += ballSpeed * delta;

    if (!this.saved) {
      this.pos.z -= ballZZSpeed * delta //+ (this.difficultyModifier * 0.8)
    }

    self.set3dPosition(this, this.pos);

    if (ball.pos.z < self.cameraZ + 5) {
      self.destroyBall(this);

      self.difficultyModifier -= 0.05;

      if (self.difficultyModifier < 0 ) {
        self.difficultyModifier = 0;
      }

      self.comboIdx = 0;

    } else if (ball.x < -Game.webApp.scaledWidth / 2 || ball.x > Game.webApp.scaledWidth / 2) {
      self.destroyBall(this);

      if (!ball.saved) {
        self.comboIdx = 0;
      }
    }
  };

  ball.interactive = true;

  ball.hitArea = new PIXI.Rectangle(
    -50,
    -50,
    100,
    100
  );

  ball.on('pointerdown', _.bind(this.handleTap, this));

  this.balls.push(ball);
  this.ballsHolder.addChild(ball);

  this.ballsHolder.updateLayersOrder();

  return ball;
};

GoalieGame.prototype.handleTap = function(e) {

  var ball = e.currentTarget;

  if (!this.gameRunning || ball.saved) {
    return;
  }

  ball.interactive = false;

  this.playCharSaveAnimation(ball);

  this.difficultyModifier += 0.05;

  if (this.difficultyModifier > 1 ) {
    this.difficultyModifier = 1;
  }

  ball.saved = true;

  if (ball.x <= 0) {
    ball.xVel = -savedBallXSpeed;
  } else {
    ball.xVel = savedBallXSpeed;
  }

  ball.yVel = -100;

  Game.sound.play("ball_star_0");
  Game.sound.play("target_hit");

  var num = _.random(1, 4);
  Game.sound.play("Audience_Cheer_0" + num);

  var i = 10;

  while ( i > 0 ) {
    this.makeExplosionParticle(ball.x, ball.y);
    --i;
  }

  this.flashAnimation.state.setAnimation(0, "action", false);
  this.flashAnimation.state.addAnimation(0, "idle", false, 0);

  this.score += 1;
  this.comboIdx += 1;

  this.scoreCallBack(10, this.comboIdx >= 5);

  if (this.comboIdx >= 5) {
    this.comboIdx = 0;
  }

  var pointsText = SportsUI.createDisplayText(
    '+10',
    {size: 32, maxSize: 130, fill: 0xf9eb46},
    false
  );

  pointsText.x = ball.x - pointsText.width / 2;
  pointsText.y = ball.y - (ball.height / 2) - 10;

  var _self = this;

  TweenLite.to(pointsText, 1, {y: pointsText.y - 30, alpha: 0, ease: Circ.easeOut, delay: 0.5, onComplete: function() {
    _self.removeChild(pointsText);
  }});

  this.addChild(pointsText);
}

GoalieGame.prototype.playCharSaveAnimation = function(ball) {

  var width = Game.webApp.scaledWidth / 2;

  if (ball.x < 0) {
    if (ball.x > -width * 0.25) {
      this.leftPlayerAnim.state.setAnimation(0, "save_right", false);
    } else if (ball.x < -width * 0.75) {
      this.leftPlayerAnim.state.setAnimation(0, "save_left", false);
    } else {
      this.leftPlayerAnim.state.setAnimation(0, "save_up", false);
    }

    this.leftPlayerAnim.state.addAnimation(0, "idle", true, 0);
  } else {
    if (ball.x < Game.webApp.scaledWidth * 0.25) {
      this.rightPlayerAnim.state.setAnimation(0, "save_left", false);
    } else if (ball.x > Game.webApp.scaledWidth * 0.75) {
      this.rightPlayerAnim.state.setAnimation(0, "save_right", false);
    } else {
      this.rightPlayerAnim.state.setAnimation(0, "save_up", false);
    }

    this.rightPlayerAnim.state.addAnimation(0, "idle", true, 0);
  }
}

GoalieGame.prototype.destroyBall = function(ball) {
  this.balls.splice(_.indexOf(this.balls, ball), 1);
  this.ballsHolder.removeChild(ball);
}

GoalieGame.prototype.destroyParticle = function(particle) {
  this.particles.splice(_.indexOf(this.particles, particle), 1);
  particle.parent.removeChild(particle);
}

GoalieGame.prototype.get3DScale = function (zDepth) {
  return 50 / zDepth;
};

GoalieGame.prototype.set3dPosition = function (obj, vec3) {
  var zScale = this.get3DScale(vec3.z - this.cameraZ);
  obj.scale.set(zScale);
  obj.x = vec3.x * zScale;
  obj.y = (vec3.y * zScale);
};

GoalieGame.prototype.gameStart = function () {

  if (this.gameRunning === false) {
    return;
  }

  this.score = 0;
  this.timer = 0;
  this.timePlayed = Math.round(timeAllowed - this.timer);
  this.playbackProgress = 2;
  var idx = _.random(0, patterns.length-1);
  this.currentPlayback = _.cloneDeep(patterns[idx]);
  this.difficultyModifier = 0;

  this.particles = [];

  this.gameRunning = true;
};
GoalieGame.prototype.gameOver = function () {
  this.gameRunning = false;
};

GoalieGame.prototype.update = function (delta) {

  if (!this.gameRunning) {
    return;
  }

  this.timer += delta;
  this.timePlayed = Math.round(timeAllowed - this.timer);

  var i = this.balls.length-1;
  for (i; i >= 0; --i) {
    this.balls[i].update(delta);
  }

  i = this.particles.length-1;
  for (i; i >= 0; --i) {
    this.particles[i].update();

    if (this.particles[i].scale.x < 0.001 ) {
      this.destroyParticle(this.particles[i]);
    }
  }

  if (this.currentPlayback.length === 0) {
    this.playbackProgress = 0;
    var idx = _.random(0, patterns.length-1);
    this.currentPlayback = _.cloneDeep(patterns[idx]);
  }

  this.playbackProgress += delta * 0.8;
  this.playbackProgress += this.difficultyModifier * 0.01;

  var data;
  for(var i = this.currentPlayback.length-1; i >= 0; i--) {
    data = this.currentPlayback[i];

    if (this.playbackProgress > data.delay) {
      this.buildBall(data.pos);
      this.currentPlayback.splice(i, 1);
    }
  }

  if (this.timePlayed <= 0) {
    this.timePlayed = 0;

    this.gameOver();
    this.completeCallBack();
  }
};

GoalieGame.prototype.makeExplosionParticle = function(x, y) {

  var angle = Math.random() * Math.PI * 2; 
  var speed = Math.random() * 10 +15;
  var velX = Math.cos(angle) * speed;
  var velY = Math.sin(angle) * speed;

  //image, x, y, xVel, yVel, drag, shrink, gravity, fade, spin
  var p = new Particle('star_burst.png', x, y, velX, velY, 0.85, 0.85, 0, 0.85, 5);

  this.particles.push(p);

  this.addChild(p);
}
