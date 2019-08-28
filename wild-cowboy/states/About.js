
var Sokoban = Sokoban || {};

Sokoban.About = function() {
  this.screen;
  this.level;
  this.fx_click;
  this.fx_background;
  this.aboutText = {
    title: "Wild Cowboy (" + Sokoban.version + ")",
    developer: "DEVELOPER: Forestry Games",
    design: "DESIGN: Forestry Games",
    openart_about: "Thanks Awwkwards.com for sounds"
  };
  this.textStyle;
};

Sokoban.About.prototype = {
  init: function(screen) {
    this.screen = screen.screen;
    this.level = screen.level;
    this.fx_click = this.add.audio('click_audio');
    this.fx_background = this.add.audio('click_audio');
    this.textStyle = {
      font: '44px finger_paintregular',
      fill: "#fff",
      align: "center"
    };

  },
  create: function() {
    var background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'play_bg');
    background.scale.setTo(1, 1);

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

    this.add.button(this.game.world.width - 128, this.game.world.height - 128, 'btn_navigation', this.back, this, 4, 2);

    var title = this.game.add.text(this.game.world.centerX, 64, this.aboutText.title, this.textStyle);
    title.anchor.set(0.5);
    title.alpha = 0.1;
    title.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    this.game.add.tween(title).to({
      alpha: 1
    }, 2000, "Linear", true);

    this.textStyle.font = "22px finger_paintregular";
    this.textStyle.fill = "#09f415";
    var devText = this.game.add.text(this.game.world.centerX, 256, this.aboutText.developer, this.textStyle);
    this.textStyle.fill = "#f40938";
    var desText = this.game.add.text(this.game.world.centerX, 320, this.aboutText.design, this.textStyle);
    this.textStyle.fill = "#f0f409";
    var operGame = this.game.add.text(this.game.world.centerX, 384, this.aboutText.openart_about, this.textStyle);
    devText.anchor.set(0.5);
    desText.anchor.set(0.5);
    operGame.anchor.set(0.5);
    devText.alpha = desText.alpha = operGame.alpha = 0.1;
    devText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    desText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    operGame.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    this.game.add.tween(devText).to({
      alpha: 1
    }, 3000, "Linear", true);
    this.game.add.tween(desText).to({
      alpha: 1
    }, 4000, "Linear", true);
    this.game.add.tween(operGame).to({
      alpha: 1
    }, 5000, "Linear", true);

  },
  back: function() {
    this.fx_background.pause();
    this.fx_click.play();

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
};
