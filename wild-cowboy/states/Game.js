
var Sokoban = Sokoban || {};

Sokoban.Game = function() {
  // group walls
  this.walls;
  // group boxes
  this.boxes;
  // group finish box place
  this.box_places;
  // game map array
  this.map;
  // game finish box places array
  this.position_places = [];
  // current level
  this.level;
  // start ceil by X
  this.start_field_x = 1;
  // start ceil by Y
  this.start_field_y = 1;
  // player object
  this.player;
  // steps counter
  this.steps_count = 0;
  // steps to show
  this.steps_player = 0;
  // text to level
  this.text_level;
  // text to count steps
  this.text_steps;
  // player frame postions array
  this.playerMove = [];
  // save undo moves to array, boxes positions and player positions
  this.undoMoves = [];
  // default ceil size
  this.ceilSize = 32;
  this.constCeilSize = 32;
  // this level finished
  this.is_finished = false;
  // show score tween
  this.score_show = false;
  // score level
  this.score_count = 0;
  // score text element - score screen
  this.score_text_screen;
  this.score_global = 0;
  this.score_global_steep = 1;

  // sound
  this.fx_handing;
  this.fx_background;
  this.fx_win;

  //its mobile device
  this.joystick;

  /**
   * Setter ceil size
   *
   * @method setCeilSize
   * @param  {[type]}    ceilSize [description]
   */
  this.setCeilSize = function(ceilSize) {
    this.ceilSize = ceilSize;
  };

  /**
   * Setter current level
   *
   * @method setLevel
   * @param  {[type]} level [description]
   */
  this.setLevel = function(level) {
    this.level = level || 1;
  };

  /**
   * Setter undo move
   *
   * @method setUndoMoves
   * @param  {[type]}     steep [description]
   * @param  {[type]}     move  [description]
   */
  this.setUndoMoves = function(steep, move) {
    if (move != undefined) {
      this.undoMoves[steep] = move;
    } else {
      this.undoMoves.splice(steep);
    }

    if (this.undoMoves.length > 0) {
      this.undoBtn.visible = true;
      if (!Sokoban.isMobile) {
        this.undoText.visible = true;
      }
    } else {
      this.undoBtn.visible = false;
      if (!Sokoban.isMobile) {
        this.undoText.visible = false;
      }
    }
  }
};

Sokoban.Game.prototype = {
  /**
   * Main function to init all object
   *
   * @method init
   * @param  {[type]} level [description]
   * @return {[type]}       [description]
   */
  init: function(level) {
    this.setLevel(level);

    var levels = this.cache.getJSON('levels');
    this.map = JSON.parse(JSON.stringify(levels))[this.level];

    //math ceil size
    var width = Math.floor((this.game.world.width / (this.map.x + 4)) / 2);
    var height = Math.floor((this.game.world.height / (this.map.y + 4)) / 2);
    var ceil = 2 * Math.min(width, height);
    this.setCeilSize(ceil);

    this.is_finished = false;
    this.fx_background = undefined;
    this.score_show = false;
    this.score_count = 0;
    this.score_global = 0;
    this.score_global_steep = 1;
  },
  /**
   * Init player object
   *
   * @method initPlayer
   * @param  {[type]}   x [description]
   * @param  {[type]}   y [description]
   * @return {[type]}     [description]
   */
  initPlayer: function(x, y) {
    this.player = this.add.sprite(x, y, 'cowboy');
    this.player.width = this.ceilSize;
    this.player.height = this.ceilSize;
    this.game.physics.arcade.enable(this.player);
    this.player.animations.add('up', [9, 10, 11], 10, true);
    this.player.animations.add('down', [0, 1, 2], 1, true);
    this.player.animations.add('left', [3, 4, 5], 4, true);
    this.player.animations.add('right', [6, 7, 8], 6, true);
    this.player.enableBody = true;

    this.playerMove['up'] = [9, 10, 11];
    this.playerMove['down'] = [0, 1, 2];
    this.playerMove['left'] = [3, 4, 5];
    this.playerMove['right'] = [6, 7, 8];

    this.player.frame = 1;
  },
  /**
   * Create or draw all object to screen
   *
   * @method create
   * @return {[type]} [description]
   */
  create: function() {
    var background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'play_bg');
    background.scale.setTo(1, 1);

    var style = {
      font: "16px finger_paintregular",
      fill: "#000",
      align: "center",
      fontWeight: "bold"
    };
    var style_won = {
      font: "34px finger_paintregular",
      fill: "#000",
      align: "center",
      fontWeight: "bold"
    };
    this.text_level = this.add.text(this.ceilSize, this.ceilSize, "Level: " + this.level, style);
    this.text_steps = this.add.text(this.world.width - (4 * this.ceilSize), this.ceilSize, "Steps: " + this.steps_player, style);

    this.walls = this.add.group();
    this.box_places = this.add.group();
    this.boxes = this.add.group();

    this.labyrinth();
    this.menuButtons();

    this.input.keyboard.addCallbacks(this, this.keyboardListener, null, null);

    var customSound = this.customSound();

    if (!this.fx_background) {
      this.fx_background = this.add.audio(customSound);
    }

    this.fx_background.onStop.add(this.soundStopped, this);
    this.fx_background.play();

    this.fx_win = this.add.audio('win_audio');

    //Init sound;
    this.fx_handing = this.add.audio('handing_audio');
    var settings = store.get('settings');
    if (settings['music']) {
      this.fx_handing.mute = false;
      this.fx_background.mute = false;
    } else {
      this.fx_handing.mute = true;
      this.fx_background.mute = true;
    }
  },
  update: function() {
    if (this.score_show) {
      this.score_global += this.score_global_steep;
      this.score_count -= this.score_global_steep;

      this.score_text_screen.text = "Score: " + this.score_global;

      if (this.score_count <= 0) {
        this.score_show = false;
      }
    }
  },
  /**
   * Draw map to screen
   *
   * @method labyrinth
   * @return {[type]}  [description]
   */
  labyrinth: function() {
    this.start_field_x = Math.ceil((this.game.world.width - this.map.x * this.ceilSize) / 2);
    this.start_field_y = Math.ceil((this.game.world.height - 2 * this.ceilSize - this.map.y * this.ceilSize) / 2);

    for (var i = 0; i < this.map.map.length; i++) {
      for (var j = 0; j < this.map.map[i].length; j++) {
        if (this.map.map[i][j] == 3) {
          var place = this.box_places.create(j * this.ceilSize + this.start_field_x, i * this.ceilSize + this.start_field_y, 'box');
          place.alpha = 0.4;
          place.width = this.ceilSize;
          place.height = this.ceilSize;
          this.position_places.push([{
            x: i,
            y: j,
            value: 0
          }]);
        }

        if (this.map.map[i][j] == 1) {
          var wall = this.walls.create(j * this.ceilSize + this.start_field_x, i * this.ceilSize + this.start_field_y, 'block');
          wall.width = this.ceilSize;
          wall.height = this.ceilSize;
        }

        if (this.map.map[i][j] == 4) {
          this.initPlayer(j * this.ceilSize + this.start_field_x, i * this.ceilSize + this.start_field_y);
        }

        if (this.map.map[i][j] == 2) {
          var box = this.boxes.create(j * this.ceilSize + this.start_field_x, i * this.ceilSize + this.start_field_y, 'box');
          box.width = this.ceilSize;
          box.height = this.ceilSize;
        }
      }
    }
  },
  /**
   * Draw menu buttons
   *
   * @method menuButtons
   * @return {[type]}    [description]
   */
  menuButtons: function() {
    var sizeBlock = Math.floor(this.game.world.width / 4),
      spacing = 10,
      buttonY = this.game.world.height - 64 - spacing,
      textButtonY = this.game.world.height - 54;

    if (Sokoban.isMobile) {
      sizeBlock = 128;
      spacing = 10;
      buttonY = buttonY - 64;
      this.screenNavigation();

      //Button: Undo steeps
      this.undoBtn = this.add.button(0 * sizeBlock + spacing, buttonY, 'btn_navigation', this.undo, this, 4, 2);
      //Button: Restart current level
      this.restartBtn = this.add.button(1 * sizeBlock + spacing, buttonY, 'btn_navigation', this.resetLevel, this, 6, 5);
      //Button: Back level menu
      this.backBtn = this.add.button(2 * sizeBlock + spacing, buttonY, 'btn_navigation', this.backToLevelMenu, this, 1, 0);
    } else {
      //Button: Undo steeps
      this.undoBtn = this.add.button(sizeBlock + spacing, buttonY, 'btn_navigation', this.undo, this, 4, 2);
      this.undoBtn.width = this.constCeilSize * 2;
      this.undoBtn.height = this.constCeilSize * 2;
      //Button: Restart current level
      this.restartBtn = this.add.button(2 * sizeBlock + spacing, buttonY, 'btn_navigation', this.resetLevel, this, 6, 5);
      this.restartBtn.width = this.constCeilSize * 2;
      this.restartBtn.height = this.constCeilSize * 2;
      //Button: Back level menu
      this.backBtn = this.add.button(3 * sizeBlock + spacing, buttonY, 'btn_navigation', this.backToLevelMenu, this, 1, 0);
      this.backBtn.width = this.constCeilSize * 2;
      this.backBtn.height = this.constCeilSize * 2;
    }

    this.undoBtn.visible = false;

    //If this not mobile version show buttons text
    if (!Sokoban.isMobile) {
      var style = {
        font: "16px finger_paintregular",
        fill: "#000",
        align: "center",
        fontWeight: "bold"
      };
      this.undoText = this.add.text(sizeBlock + spacing + 64 + spacing, textButtonY, "Undo move", style);
      if (this.undoMoves.length == 0) {
        this.undoText.visible = false;
      }
      this.restartText = this.add.text(2 * sizeBlock + spacing + 64 + spacing, textButtonY, "Restart Level", style);
      this.backMenuText = this.add.text(3 * sizeBlock + spacing + 64 + spacing, textButtonY, "Back to menu", style);
    }
  },
  /**
   * Add screen navigation
   */
  screenNavigation: function() {
    var joystickSquare = 332,
      joystickSquareHalf = 166;
    var scale = 1.5;
    var joystickSquareCenterX = this.game.world.width - joystickSquareHalf;
    var joystickSquareCenterY = this.game.world.height - joystickSquareHalf;

    var joyLeft = this.add.button(joystickSquareCenterX, joystickSquareCenterY, 'btn_left_right', this.keyboardListener, this, 1, 1);
    joyLeft.anchor.set(1, 0.5);
    joyLeft.scale.set(scale);
    joyLeft.onInputUp.add(this.touchAlphaUp, this);
    joyLeft.onInputDown.add(this.touchAlphaDown, this);
    joyLeft.code = "ArrowLeft";

    var joyRight = this.add.button(joystickSquareCenterX, joystickSquareCenterY, 'btn_left_right', this.keyboardListener, this, 3, 3);
    joyRight.anchor.set(0, 0.5);
    joyRight.scale.set(scale);
    joyRight.onInputUp.add(this.touchAlphaUp, this);
    joyRight.onInputDown.add(this.touchAlphaDown, this);
    joyRight.code = "ArrowRight";

    var joyUp = this.add.button(joystickSquareCenterX, joystickSquareCenterY, 'btn_up_down', this.keyboardListener, this, 1, 1);
    joyUp.anchor.set(0.5, 1);
    joyUp.scale.set(scale);
    joyUp.onInputUp.add(this.touchAlphaUp, this);
    joyUp.onInputDown.add(this.touchAlphaDown, this);
    joyUp.code = "ArrowUp";

    var joyDown = this.add.button(joystickSquareCenterX, joystickSquareCenterY, 'btn_up_down', this.keyboardListener, this, 3, 3);
    joyDown.anchor.set(0.5, 0);
    joyDown.scale.set(scale);
    joyDown.onInputUp.add(this.touchAlphaUp, this);
    joyDown.onInputDown.add(this.touchAlphaDown, this);
    joyDown.code = "ArrowDown";
  },
  /**
   * Listener to keywords
   *
   * @method keyboardListener
   * @param  {[type]}         char [description]
   * @return {[type]}              [description]
   */
  keyboardListener: function(char) {
    if (this.is_finished) {
      return false;
    }

    this.moveToUndo(); // save current position

    switch (char.code) {
      case 'ArrowLeft':
        if (this.playerMoveLeft()) {
          this.playerStep('left');
        }
        break;
      case 'ArrowRight':
        if (this.playerMoveRight()) {
          this.playerStep('right');
        }
        break;
      case 'ArrowUp':
        if (this.playerMoveUp()) {
          this.playerStep('up');
        }
        break;
      case 'ArrowDown':
        if (this.playerMoveDown()) {
          this.playerStep('down');
        }
        break;
      case 'KeyR':
        this.resetLevel();
        return;
      case 'Escape':
        this.backToLevelMenu();
        return;
      case 'Backspace':
        this.undo();
        break;
    }
    this.text_steps.text = "Steps: " + this.steps_player;

    if (!this.is_finished) {
      if (this.isFinished()) {
        this.gameScorePanel();
      }
    }
  },
  touchAlphaDown: function(button) {
    button.alpha = 0.3;
  },
  touchAlphaUp: function(button) {
    button.alpha = 1;
  },
  /**
   * Save previous positon to undo moves
   *
   * @method moveToUndo
   * @return {[type]}   [description]
   */
  moveToUndo: function() {
    var positions = [];
    //boxes position
    for (var i = 0; i < this.boxes.children.length; i++) {
      positions.push({
        x: this.boxes.children[i].position.x,
        y: this.boxes.children[i].position.y,
        item: 2
      });
    }

    //player position
    positions.push({
      x: this.player.x,
      y: this.player.y,
      item: 4
    });

    this.setUndoMoves(this.steps_count, positions);
  },
  /**
   * Undo last move
   *
   * @method undo
   */
  undo: function() {
    if (this.steps_count > 0 && this.undoMoves.length > 0) {
      this.steps_count--;

      for (var i = 0; i < this.undoMoves[this.steps_count].length; i++) {
        // boxes undo
        if (this.undoMoves[this.steps_count][i].item == 2) {
          var oldY = Math.floor((this.boxes.children[i].position.x - this.start_field_x) / this.ceilSize);
          var oldX = Math.floor((this.boxes.children[i].position.y - this.start_field_y) / this.ceilSize);
          var newY = Math.floor((this.undoMoves[this.steps_count][i].x - this.start_field_x) / this.ceilSize);
          var newX = Math.floor((this.undoMoves[this.steps_count][i].y - this.start_field_y) / this.ceilSize);
          this.map.map[oldX][oldY] = 0;
          this.map.map[newX][newY] = 2;
          this.boxes.children[i].position.x = this.undoMoves[this.steps_count][i].x;
          this.boxes.children[i].position.y = this.undoMoves[this.steps_count][i].y;
        }

        // player undo
        if (this.undoMoves[this.steps_count][i].item == 4) {
          this.player.x = this.undoMoves[this.steps_count][i].x;
          this.player.y = this.undoMoves[this.steps_count][i].y;
        }
      }

      // remove from undoMoves array this step
      this.setUndoMoves(this.steps_count);
    }
  },
  /**
   * Check new frame to show player
   *
   * @method playerFrameMove
   * @param  {[string]}        directory [left, right, up, down]
   */
  playerStep: function(directory) {
    var frame = this.player.frame + 1;
    if (this.playerMove[directory].indexOf(frame) === -1) {
      frame = this.playerMove[directory][0];
    }
    this.player.frame = frame;

    var playerCurrentX = Math.floor((this.player.x - this.start_field_x) / this.ceilSize);
    var playerCurrentY = Math.floor((this.player.y - this.start_field_y) / this.ceilSize);
    this.map.map[playerCurrentY][playerCurrentX] = 0;

    switch (directory) {
      case 'left':
        this.player.x -= this.ceilSize;
        break;
      case 'right':
        this.player.x += this.ceilSize;
        break;
      case 'up':
        this.player.y -= this.ceilSize;
        break;
      case 'down':
        this.player.y += this.ceilSize;
        break;
    }

    this.steps_count++;
    this.steps_player++;
  },
  /**
   * Is possible move left
   *
   * @returns {boolean}
   */
  playerMoveLeft: function() {
    var possible = true;

    var x = Math.floor((this.player.x - this.start_field_x) / this.ceilSize);
    var y = Math.floor((this.player.y - this.start_field_y) / this.ceilSize);

    if (this.map.map[y][x - 1] == 1) {
      possible = false;
    }

    if (this.map.map[y][x - 1] == 2) {
      if (this.map.map[y][x - 2] == 0 || this.map.map[y][x - 2] == 3) {
        this.fx_handing.play(); //play sound handing box
        this.map.map[y][x - 1] = 0; //this cell null
        this.map.map[y][x - 2] = 2; //move box to next cell

        for (var i = 0; i < this.boxes.children.length; i++) {
          if (this.boxes.children[i].position.x == this.ceilSize * (x - 1) + this.start_field_x &&
            this.boxes.children[i].position.y == this.ceilSize * y + this.start_field_y) {
            this.boxes.children[i].position.x = this.ceilSize * (x - 2) + this.start_field_x;
          }
        }
      } else {
        possible = false;
      }
    }

    return possible;
  },
  /**
   * Is possible move right
   *
   * @returns {boolean}
   */
  playerMoveRight: function() {
    var possible = true;

    var x = Math.floor((this.player.x - this.start_field_x) / this.ceilSize);
    var y = Math.floor((this.player.y - this.start_field_y) / this.ceilSize);

    if (this.map.map[y][x + 1] == 1) {
      possible = false;
    }

    if (this.map.map[y][x + 1] == 2) {
      if (this.map.map[y][x + 2] == 0 || this.map.map[y][x + 2] == 3) {
        this.fx_handing.play(); //play sound handing box
        this.map.map[y][x + 1] = 0; //this cell null
        this.map.map[y][x + 2] = 2; //move box to next cell

        for (var i = 0; i < this.boxes.children.length; i++) {
          if (this.boxes.children[i].position.x == this.ceilSize * (x + 1) + this.start_field_x &&
            this.boxes.children[i].position.y == this.ceilSize * y + this.start_field_y) {
            this.boxes.children[i].position.x = this.ceilSize * (x + 2) + this.start_field_x;
          }
        }
      } else {
        possible = false;
      }
    }

    return possible;
  },
  /**
   * Is possible move up
   *
   * @returns {boolean}
   */
  playerMoveUp: function() {
    var possible = true;

    var x = Math.floor((this.player.x - this.start_field_x) / this.ceilSize);
    var y = Math.floor((this.player.y - this.start_field_y) / this.ceilSize);

    if (this.map.map[y - 1][x] == 1) {
      possible = false;
    }

    if (this.map.map[y - 1][x] == 2) {
      if (this.map.map[y - 2][x] == 0 || this.map.map[y - 2][x] == 3) {
        this.fx_handing.play(); //play sound handing box
        this.map.map[y - 1][x] = 0; //this cell null
        this.map.map[y - 2][x] = 2; //move box to next cell

        for (var i = 0; i < this.boxes.children.length; i++) {
          if (this.boxes.children[i].position.x == this.ceilSize * x + this.start_field_x &&
            this.boxes.children[i].position.y == this.ceilSize * (y - 1) + this.start_field_y) {
            this.boxes.children[i].position.y = this.ceilSize * (y - 2) + this.start_field_y;
          }
        }
      } else {
        possible = false;
      }
    }

    return possible;
  },
  /**
   * Is possible move down
   *
   * @returns {boolean}
   */
  playerMoveDown: function() {
    var possible = true;

    var x = Math.floor((this.player.x - this.start_field_x) / this.ceilSize);
    var y = Math.floor((this.player.y - this.start_field_y) / this.ceilSize);

    if (this.map.map[y + 1][x] == 1) {
      possible = false;
    }

    if (this.map.map[y + 1][x] == 2) {
      if (this.map.map[y + 2][x] == 0 || this.map.map[y + 2][x] == 3) {
        this.fx_handing.play(); //play sound handing box
        this.map.map[y + 1][x] = 0; //this cell null
        this.map.map[y + 2][x] = 2; //move box to next cell

        for (var i = 0; i < this.boxes.children.length; i++) {
          if (this.boxes.children[i].position.x == this.ceilSize * x + this.start_field_x &&
            this.boxes.children[i].position.y == this.ceilSize * (y + 1) + this.start_field_y) {
            this.boxes.children[i].position.y = this.ceilSize * (y + 2) + this.start_field_y;
          }
        }
      } else {
        possible = false;
      }
    }

    return possible;
  },
  /**
   * If all boxes in true places
   *
   * @returns {boolean}
   */
  isFinished: function() {
    this.is_finished = true;
    var count = this.position_places.length;

    while (this.is_finished && count > 0) {
      if (this.map.map[this.position_places[count - 1][0].x][this.position_places[count - 1][0].y] != 2) {
        this.is_finished = false;
      }

      count--;
    }

    return this.is_finished;
  },
  /**
   * Show Score winner screen
   */
  gameScorePanel: function() {
    this.fx_background.pause();
    this.fx_win.play();

    // this.fx_win.play();
    //unvisitable all buttons
    this.unvisibleNavigationButtons();

    //add black transparent screen
    this.showWinnerText();

    //show buttons
    this.showWinnerButtons();

    // show stars effect
    this.showWinnerStars();
  },
  /**
   * Hide navigation buttons
   */
  unvisibleNavigationButtons: function() {
    this.undoBtn.visible = false;
    this.restartBtn.visible = false;
    this.backBtn.visible = false;
    if (!Sokoban.isMobile) {
      this.undoText.visible = false;
      this.restartText.visible = false;
      this.backMenuText.visible = false;
    }
  },
  /**
   * Show congratulations text, level, steeps
   */
  showWinnerText: function() {
    var gameScorePanel = new Phaser.Rectangle(0, 0, this.game.world.width, this.game.world.height);
    var gameScoreBitmap = this.game.add.bitmapData(this.game.world.width, this.game.world.height);
    gameScoreBitmap.rect(gameScorePanel.x, gameScorePanel.y, gameScorePanel.width, gameScorePanel.height, 'rgba(0, 0, 0, 0.6)');
    gameScoreBitmap.addToWorld();

    //add win text
    var successStyle = {
      font: '65px finger_paintregular',
      fill: '#fff',
      align: 'center'
    };
    var successText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Congratulations, You WIN!", successStyle);
    successText.anchor.set(0.5);

    //add score text
    successStyle.font = '20px finger_paintregular';
    var stepsTextScore = "Steps: " + this.steps_player;
    var stepsScore = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 84, stepsTextScore, successStyle);
    stepsScore.anchor.set(0.5);

    //add level text
    var levelTextScore = "Level: " + this.level;
    var levelScore = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 44, levelTextScore, successStyle);
    levelScore.anchor.set(0.5);

    //add game global score text
    var globalScore = "Score: 0";
    this.score_text_screen = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 160, stepsTextScore, {
      font: '65px finger_paintregular',
      fill: '#f5e7ab',
      align: 'center'
    });
    this.score_text_screen.anchor.set(0.5);
    this.add.tween(this.score_text_screen.scale).to({
      x: 1.5,
      y: 1.5
    }, 300, Phaser.Easing.Exponential.In, true);
    this.countGlobalScore();
  },
  countGlobalScore: function() {
    var count = (10000 - this.steps_player) / 100;
    this.score_count = Math.round(count) * this.level;
    this.storeScore();
    this.score_show = true;
  },
  /**
   * Show home button and next level button
   */
  showWinnerButtons: function() {
    var bottomButtonY = this.game.world.height - 2 * 64;
    //add menu level button
    var endLevelBackMenuButton = this.add.button(this.game.world.centerX - 100, bottomButtonY, 'btn_navigation', this.mainMenu, this, 1, 0);

    //add next level button
    var endLevelNextButton = this.add.button(this.game.world.centerX + 100, bottomButtonY, 'btn_navigation', this.nextLevel, this, 3, 7);
  },
  /**
   * Adds 3 empty stars
   * Adds stars animation
   */
  showWinnerStars: function() {
    var starY = this.game.world.centerY - 150;
    var starCenterX = this.game.world.centerX

    // empty stars
    var emptyStars = this.add.group();
    var emptyStarOne = emptyStars.create(starCenterX - 160, starY, 'star_win');
    var emptyStarTwo = emptyStars.create(starCenterX, starY, 'star_win');
    var emptyStarThree = emptyStars.create(starCenterX + 160, starY, 'star_win');

    emptyStarOne.anchor.set(0.5);
    emptyStarTwo.anchor.set(0.5);
    emptyStarThree.anchor.set(0.5);

    emptyStarOne.width = emptyStarTwo.width = emptyStarThree.width = (emptyStarOne.width / 2);
    emptyStarOne.height = emptyStarTwo.height = emptyStarThree.height = (emptyStarOne.height / 2);

    emptyStarOne.alpha = 0.2;
    emptyStarTwo.alpha = 0.2;
    emptyStarThree.alpha = 0.2;

    //effect
    var effectStarBitmap = this.game.make.bitmapData();
    effectStarBitmap.load('star_win');

    //logic show stars
    var stars = this.logicStars();

    var imageStarOne = this.game.add.image(starCenterX - 160, starY, effectStarBitmap);
    var imageStarTwo = this.game.add.image(starCenterX, starY, effectStarBitmap);
    var imageStarThree = this.game.add.image(starCenterX + 160, starY, effectStarBitmap);

    imageStarOne.anchor.set(0.5);
    imageStarTwo.anchor.set(0.5);
    imageStarThree.anchor.set(0.5);

    imageStarOne.smoothed = imageStarTwo.smoothed = imageStarThree.smoothed = false;

    imageStarOne.width = imageStarTwo.width = imageStarThree.width = 1;
    imageStarOne.height = imageStarTwo.height = imageStarThree.height = 1;

    //  Tween the image
    if (stars >= 1) {
      this.game.add.tween(imageStarOne.scale).to({
        x: 0.5,
        y: 0.5
      }, 1000, Phaser.Easing.Sinusoidal.Out, true, 0);
      if (stars >= 2) {
        this.game.add.tween(imageStarTwo.scale).to({
          x: 0.5,
          y: 0.5
        }, 1000, Phaser.Easing.Sinusoidal.Out, true, 320);
        if (stars == 3) {
          this.game.add.tween(imageStarThree.scale).to({
            x: 0.5,
            y: 0.5
          }, 1000, Phaser.Easing.Sinusoidal.Out, true, 630);
        }
      }
    }
  },
  /**
   * Calculate score stars
   *
   * @returns {number}
   */
  logicStars: function() {
    var stars = 0;
    var gameSteeps = this.map.steps;
    var diff = this.steps_player - gameSteeps;

    if (diff < 150) {
      if (diff < 100) {
        if (diff < 50) {
          stars = 3;
        } else {
          stars = 2
        }
      } else {
        stars = 1;
      }
    }

    return stars;
  },
  /**
   * Store score
   */
  storeScore: function() {
    var store_levels = store.get('score') || {};
    if (this.steps_player == 0) {
      return false;
    }

    var countLocal = Math.round((10000 - this.map.steps) / 100) * this.level;
    var stars = this.logicStars();

    if (store_levels[this.level]) {
      if (store_levels[this.level].user < this.score_count) {
        store_levels[this.level] = {
          'user': this.score_count,
          'min': countLocal,
          'stars': stars
        };
      }
    } else {
      store_levels[this.level] = {
        'user': this.score_count,
        'min': countLocal,
        'stars': stars
      }
    }

    store.set('score', store_levels);
  },
  /**
   * Next level
   */
  nextLevel: function() {
    this.resetLevelParams();
    this.game.state.start('Game', true, false, this.level + 1);
  },
  /**
   * Go to main menu
   */
  mainMenu: function() {
    this.resetLevelParams();
    this.game.state.start('LevelMenu', true, false, this.level);
  },
  /**
   * Reset this level
   */
  resetLevel: function() {
    this.resetLevelParams();
    this.game.state.start('Game', true, false, this.level);
  },
  /**
   * Back to menu levels
   */
  backToLevelMenu: function() {
    this.resetLevelParams();
    this.game.state.start('LevelMenu', true, false, this.level);
  },
  /**
   * Reset Level params
   *
   * @method resetLevelParams
   */
  resetLevelParams: function() {
    this.fx_background.pause();
    this.fx_win.pause();
    this.walls.removeAll();
    this.boxes.removeAll();
    this.box_places.removeAll();
    this.position_places = [];
    this.steps_count = 0;
    this.steps_player = 0;
    this.undoMoves = [];
    this.is_finished = false;
  },
  customSound: function() {
    var min = 1;
    var max = 4;
    var custom = Math.floor(Math.random() * (max - min + 1)) + min;
    return 'sound_' + custom;
  },
  soundStopped: function(sound) {
    if (sound == this.fx_background && !this.fx_background.paused) {
      this.fx_background.play();
    }
  }
}
