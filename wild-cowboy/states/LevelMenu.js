
var Sokoban = Sokoban || {};

Sokoban.LevelMenu = function() {
  this.level;
  this.totalLevels;
  this.thumbRows = 3;
  this.thumbCols = 4;
  this.thumbWidth = 128;
  this.thumbSpacing = 30;
  this.totalPages;
  this.currentPage = 1;
  this.levelsBoxGroup;
  this.textLevelsStyle;
  this.textLevels;
  this.textBoxLevelStyle;
  this.textBoxLevel;
  this.startDrawX;
  this.startDrawY;
  this.leftButtonPage;
  this.rightButtonPage;
  this.openLevels = [];
  this.score;
  this.btnSize;

  //sound
  this.fx_click;
  this.fx;

  this.setLevel = function(level) {
    this.level = level;
  };
  this.setTotalLevels = function(total) {
    this.totalLevels = total;
  };
  this.setTotalPages = function(pages) {
    this.totalPages = pages;
  };
  this.setCurrentPage = function(currentPage) {
    this.currentPage = currentPage;
  };
  this.setOpenLevels = function(openLevels) {
    this.openLevels = openLevels;
  };
  this.setScore = function(score) {
    this.score = score;
  }
};

Sokoban.LevelMenu.prototype = {
  init: function(level) {
    //current level - default 1
    this.setLevel(level);
    //total levels
    if (this.totalLevels == undefined) {
      var levels = this.cache.getJSON('levels');
      var size = 0,
        key;
      for (key in levels) {
        size++;
      }
      this.setTotalLevels(size);
    }

    //total pages
    this.setTotalPages(this.totalLevels / (this.thumbCols * this.thumbRows));
    //current page by current level
    this.setCurrentPage(Math.floor(this.level / (this.thumbCols * this.thumbRows)) + 1);

    //init text style
    this.textLevelsStyle = {
      font: '44px finger_paintregular',
      fill: "#fff",
      align: "center"
    };
    this.textBoxLevelStyle = {
      font: '22px finger_paintregular',
      fill: "#000",
      align: "center",
      fontWeight: "bold"
    };

    this.setScore(store.get('score'));

    if (this.score) {
      var sLevels = [];
      for (var i in this.score) {
        sLevels.push(parseInt(i));
      }

      this.setOpenLevels(sLevels);
    };

    this.fx_click = this.add.audio('click_audio');
    this.fx = this.add.audio('start_audio');

    this.btnSize = Sokoban.isMobile ? 128 : 64;
  },
  create: function() {
    var background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'play_bg');
    background.scale.setTo(1, 1);

    this.levelsBoxGroup = this.add.group();
    this.stars = this.add.group();

    var x = (this.game.world.width - this.thumbCols * this.thumbWidth - this.thumbRows * this.thumbSpacing) / 2;
    var y = (this.game.world.height - this.thumbRows * this.thumbWidth - 2 * this.thumbSpacing) / 2;
    this.startDrawX = x;
    this.startDrawY = y;

    var level_count = 1;

    //show page number
    this.textLevels = this.add.text(
      this.world.centerX,
      this.world.height - this.thumbRows * this.thumbSpacing,
      this.currentPage + '/' + this.totalPages,
      this.textLevelsStyle
    );
    this.textLevels.anchor.set(0.5);

    //page buttons
    this.leftButtonPage = this.add.button(
      x,
      this.world.height - this.thumbWidth,
      'btn_arrows', this.left, this, 1, 0
    );

    this.leftButtonPage.currentPage = this.currentPage;

    this.rightButtonPage = this.add.button(
      x + (this.thumbCols * this.thumbWidth) + ((this.thumbCols - 1) * this.thumbSpacing) - this.btnSize,
      this.world.height - this.thumbWidth,
      'btn_arrows', this.right, this, 3, 2
    );

    this.rightButtonPage.currentPage = this.currentPage;

    for (var p = 0; p < this.totalPages; p++) {
      x = (this.world.width * p) + this.startDrawX;
      y = this.startDrawY;

      for (var i = 0; i < this.thumbRows; i++) {
        for (var j = 0; j < this.thumbCols; j++) {
          if (level_count <= this.totalLevels) {
            var cur_x = x + j * this.thumbWidth + j * this.thumbSpacing;
            var cur_y = y + i * this.thumbWidth + i * this.thumbSpacing;
            var lbox = this.add.button(cur_x, cur_y, 'btn_crate');
            lbox.level_count = level_count;
            lbox.height = this.thumbWidth;
            lbox.width = this.thumbWidth;

            this.levelsBoxGroup.add(lbox);

            if (this.openLevels.indexOf(level_count) !== -1) {
              lbox.onInputUp.add(this.start, this);

              var userScore = this.score[level_count].user;
              var levelScore = this.score[level_count].min;

              var userStar = this.score[level_count]['stars'];
              for (var s = 0; s < 3; s++) {
                var star_x = (this.thumbWidth - 3 * 32 - 6 * 2) / 2 + s * 32 + s * 6;
                var star;

                if (s + 1 <= userStar) {
                  star = this.stars.create(cur_x + star_x, cur_y + 86, 'star');
                } else {
                  star = this.stars.create(cur_x + star_x, cur_y + 86, 'bstar');
                }

                star.height = 32;
                star.width = 32;

                this.levelsBoxGroup.add(star);
              }
            } else if (level_count == this.openLevels.length + 1) {
              lbox.onInputUp.add(this.start, this);
            } else {
              lbox.alpha = 0.4;
            }

            this.textBoxLevel = this.game.add.text(cur_x + this.thumbWidth / 2, cur_y + 120 / 2, level_count, this.textBoxLevelStyle);
            this.textBoxLevel.anchor.set(0.5);
            this.levelsBoxGroup.add(this.textBoxLevel);
            level_count++;
          } else {
            break;
          }
        }
      }
    }

    //show navigation buttons
    this.showPageButtons();

    //show current page
    this.showCurrentPage(this.currentPage);

    this.fx.play();
    this.fx.onStop.add(this.soundStopped, this);

    var settings = store.get('settings');
    if (settings['music']) {
      this.fx_click.mute = false;
      this.fx.mute = false;

      this.sound_btn = this.add.button(this.game.world.width - (this.btnSize + 64), 64, 'btn_sound', this.soundUp, this, 1, 0);
    } else {
      this.fx_click.mute = true;
      this.fx.mute = true;

      this.sound_btn = this.add.button(this.game.world.width - (this.btnSize + 64), 64, 'btn_sound', this.soundUp, this, 3, 2);
    }

    //about screen button
    this.add.button(64, 64, 'btn_helper', this.about, this, 5, 4);
    //global scores button
    this.add.button(64, 200, 'btn_helper', this.globalScores, this, 7, 6);
  },
  start: function(button) {
    this.fx_click.play();
    this.fx.pause();
    this.game.state.start('Game', true, false, button.level_count);
  },
  left: function(button) {
    if (button.currentPage > 1) {
      this.fx_click.play();
      button.currentPage = button.currentPage - 1;
      this.rightButtonPage.currentPage = button.currentPage;
      this.showCurrentPage(button.currentPage);
    }

    this.showPageButtons();
  },
  right: function(button) {
    if (button.currentPage < 5) {
      this.fx_click.play();
      button.currentPage = button.currentPage + 1;
      this.leftButtonPage.currentPage = button.currentPage;
      this.showCurrentPage(button.currentPage);
    }

    this.showPageButtons();
  },
  showCurrentPage: function(currentPage) {
    this.setCurrentPage(currentPage);
    var buttonsTween = this.add.tween(this.levelsBoxGroup);
    buttonsTween.to({
      x: (this.currentPage - 1) * this.world.width * -1
    }, 600, Phaser.Easing.Cubic.None);
    buttonsTween.start();
  },
  showPageText: function() {
    this.textLevels.text = this.currentPage + ' / ' + this.totalPages;
  },
  showPageButtons: function() {
    if (this.currentPage == 1) {
      this.leftButtonPage.visible = false;
    } else {
      this.leftButtonPage.visible = true;
    }

    if (this.currentPage == 5) {
      this.rightButtonPage.visible = false;
    } else {
      this.rightButtonPage.visible = true;
    }

    this.showPageText();
  },
  soundUp: function() {
    var settings = store.get('settings');
    if (settings['music']) {
      this.fx_click.mute = true;
      this.fx.mute = true;
      this.sound_btn.setFrames(3, 2);
      settings['music'] = false;
    } else {
      this.fx_click.mute = false;
      this.fx.mute = false;
      this.sound_btn.setFrames(1, 0);
      settings['music'] = true;
    }
    store.set('settings', settings);
  },
  about: function() {
    this.fx.pause();
    this.fx_click.play();
    this.state.start('About', true, false, {
      screen: 1,
      level: this.level
    });
  },
  globalScores: function() {
    this.fx.pause();
    this.fx_click.play();
    this.state.start('GlobalScores', true, false, {
      screen: 1,
      level: this.level
    })
  },
  soundStopped: function(sound) {
    if (sound == this.fx && !this.fx.paused) {
      this.fx.play();
    }
  }
}
