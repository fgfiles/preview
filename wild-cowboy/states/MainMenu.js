
var Sokoban = Sokoban || {};

Sokoban.MainMenu = function() {
  this.sound_btn;
  this.btnSize;
};

Sokoban.MainMenu.prototype = {
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.fx = this.add.audio('start_audio');
    this.fx_click = this.add.audio('click_audio');
    this.btnSize = Sokoban.isMobile ? 128 : 64;
    //users options music
    if (!store.get('settings')) {
      var settings = {};
      settings.music = true;
      store.set('settings', settings);
    }
  },
  create: function() {
    var background = this.add.sprite(0, 0, 'main_bg');
    background.width = this.game.world.width;
    background.height = this.game.world.height;

    var buttonX = 730;
    var buttonY = 230;
    var buttonWidth = 396;
    var buttonHeight = 412;

    //start game text
    var play_btn = this.add.button(buttonX, buttonY, 'btn_start');
    play_btn.width = buttonWidth;
    play_btn.height = buttonHeight;
    play_btn.onInputUp.add(this.playGame, this);

    this.fx.play();
    this.fx.onStop.add(this.soundStopped, this);

    var settings = store.get('settings');
    if (settings['music']) {
      //sound button - sound true
      this.sound_btn = this.add.button(this.game.world.width - (this.btnSize + 64), 64, 'btn_sound', this.soundUp, this, 1, 0);
    } else {
      this.fx.mute = true;
      this.fx_click.mute = true;
      //sound button - sound false
      this.sound_btn = this.add.button(this.game.world.width - (this.btnSize + 64), 64, 'btn_sound', this.soundUp, this, 3, 2);
    }

    //about screen button
    this.add.button(64, 64, 'btn_helper', this.about, this, 5, 4);
    //global scores button
    this.add.button(64, 200, 'btn_helper', this.globalScores, this, 7, 6);
  },
  soundUp: function() {
    var settings = store.get('settings');
    if (settings['music']) {
      this.fx.mute = true;
      this.fx_click.mute = true;
      this.sound_btn.setFrames(3, 2);
      settings['music'] = false;
    } else {
      this.fx.mute = false;
      this.fx_click.mute = false;
      this.sound_btn.setFrames(1, 0);
      settings['music'] = true;
    }
    store.set('settings', settings);
  },
  soundStopped: function(sound) {
    if (sound == this.fx && !this.fx.paused) {
      this.fx.play();
    } else if (sound == this.fx_click) {
      this.state.start('LevelMenu', true, false, 1);
    }
  },
  playGame: function() {
    this.fx.pause();
    this.fx_click.play();
    this.fx_click.onStop.add(this.soundStopped, this);
  },
  about: function() {
    this.fx.pause();
    this.fx_click.play();
    this.state.start('About', true, false, {
      screen: 0,
      level: 1
    });
  },
  globalScores: function() {
    this.fx.pause();
    this.fx_click.play();
    this.state.start('GlobalScores', true, false, {
      screen: 0,
      level: 1
    })
  },
}
