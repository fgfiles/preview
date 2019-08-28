var Sokoban = Sokoban || {};

Sokoban.GlobalScores = function() {
  this.screen;
  this.level;
  this.fx_click;
  this.fx_background;
  this.scoreTextTitle = 'WildCowboy - Your score';
  this.textStyle;
  this.inputPressed = false;
  this.cursors;
  this.gameWidth;
  this.gameHeight;
  this.startScroleY;
  this.globalScore;
  this.globalScoreLevels = 0;
};

Sokoban.GlobalScores.prototype = {
  init: function(screen) {
    this.screen = screen.screen;
    this.level = screen.level;
    this.fx_click = this.add.audio('click_audio');
    this.fx_background = this.add.audio('click_audio');
    this.font_size = 44;
    this.textStyle = {
      font: '44px finger_paintregular',
      fill: "#fff",
      align: "center"
    };
    this.startScroleY = undefined;
    this.globalScore = store.get('score') || {};
    var _this = this;
    Object.keys(this.globalScore).map(function(objectKey, objectIndex) {
      _this.globalScoreLevels = objectIndex + 1;
    });
  },
  create: function() {
    /** Create sound */
    this.fx_background = this.add.audio('about_audio');
    this.fx_background.play();
    this.fx_background.onStop.add(this.soundStopped, this);

    var settings = store.get('settings');
    if (settings['music']) {
      this.fx_background.mute = false;
      this.fx_click.mute = false;
    } else {
      this.fx_background.mute = true;
      this.fx_click.mute = true;
    }

    // add background image - fixed to camera
    var background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'play_bg');
    background.scale.setTo(1, 1);
    background.fixedToCamera = true;

    // add return button - fixed to camera
    var returnButton = this.add.button(this.game.world.width - 128, this.game.world.height - 128, 'btn_navigation', this.back, this, 4, 2);
    returnButton.fixedToCamera = true;

    // add title - not fixed
    var title = this.game.add.text(this.game.world.centerX, 64, this.scoreTextTitle, this.textStyle);
    title.anchor.set(0.5);
    title.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    // save game world width and height
    this.gameWidth = this.game.world.width;
    this.gameHeight = this.game.world.height;

    // resize this game world
    if (this.font_size * this.globalScoreLevels + 128 > this.game.world.height) {
      this.game.world.resize(this.game.world.width, 128 + this.font_size * this.globalScoreLevels + 64);
    }

    // add bitmap rectangle to top list
    var rectangle = new Phaser.Rectangle(128, title.height * 2, this.game.width - (128 * 2), this.font_size * this.globalScoreLevels);
    var bmd = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
    bmd.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height, 'rgba(45,45,45,0.8)');
    bmd.addToWorld();

    var _this = this;
    var starsGroup = this.add.group();
    var level_text_x = rectangle.x + this.font_size;
    var score_text_x = rectangle.x + (rectangle.width / 2);
    var star_x = rectangle.x + (rectangle.width - this.font_size * 4);

    Object.keys(this.globalScore).map(function(objectKey, objectIndex) {
      var userScore = _this.globalScore[objectKey]['user'];
      var levelScore = _this.globalScore[objectKey]['min'];
      var lineLeft = 'Level: ' + objectKey;
      var lineCenter = 'Score: ' + userScore;
      var star_y = rectangle.y + (objectIndex * _this.font_size);

      var levelText = _this.game.add.text(level_text_x, rectangle.y + (objectIndex * _this.font_size), lineLeft, _this.textStyle);
      levelText.anchor.set(0, 0);
      var scoreText = _this.game.add.text(score_text_x, rectangle.y + (objectIndex * _this.font_size), lineCenter, _this.textStyle)
      scoreText.anchor.set(0.5, 0);

      for (var s = 1; s <= _this.globalScore[objectKey]['stars']; s++) {
        var star = starsGroup.create(star_x + _this.font_size * (s - 1), star_y, 'star');
        star.height = _this.font_size;
        star.width = _this.font_size;
      }
    });

    // add keyboard listeners
    this.cursors = this.game.input.keyboard.createCursorKeys();
    // add touch or mouse listeners
    this.game.input.addMoveCallback(this.scrollTouch, this);
    this.game.input.mouse.mouseWheelCallback = this.scrollWheel;
  },
  update: function() {
    if (this.cursors.down.isDown) {
      this.game.camera.y -= 4;
    } else if (this.cursors.up.isDown) {
      this.game.camera.y += 4;
    }
  },
  scrollWheel: function(event) {
    if (event.wheelDelta > 0) {
      Sokoban.game.camera.y -= 28;
    } else if (event.wheelDelta < 0) {
      Sokoban.game.camera.y += 28;
    }
  },
  scrollTouch: function(pointer) {
    if (pointer.isDown) {
      if (this.startScroleY) {
        if (this.startScroleY < pointer.clientY) {
          this.game.camera.y -= 4;
        } else if (this.startScroleY > pointer.clientY) {
          this.game.camera.y += 4;
        }

        this.startScroleY = pointer.clientY;
      } else {
        this.startScroleY = pointer.clientY;
      }
    } else if (pointer.isUp) {
      this.startScroleY = undefined;
    }
  },
  back: function() {
    this.fx_background.pause();
    this.fx_click.play();
    this.game.world.resize(this.gameWidth, this.gameHeight);

    if (this.screen == 0) {
      this.state.start('MainMenu');
    } else if (this.screen == 1) {
      this.state.start('LevelMenu', true, false, this.level);
    }
  },
  soundStopped: function(sound) {
    if (sound == this.fx_background && !this.fx_background.paused) {
      this.fx_background.play();
    }
  }
}
