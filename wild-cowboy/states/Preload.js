
var Sokoban = Sokoban || {};

Sokoban.Preload = function() {};

Sokoban.Preload.prototype = {
  preload: function() {
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar')
    this.preloadBar.anchor.setTo(0.5);
    this.time.advancedTiming = true;

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    //backgrounds
    this.load.image('main_bg', 'assets/images/main_bg.jpg');
    this.load.image('play_bg', 'assets/images/bg.jpg');

    //buttons
    this.load.image('btn_start', 'assets/images/play.png');
    this.load.image('btn_crate', 'assets/images/Crate.png');

    if (Sokoban.isMobile) {
      this.load.spritesheet('btn_sound', 'assets/images/mob/sound_btns_64x64.png', 128, 128);
      this.load.spritesheet('btn_arrows', 'assets/images/mob/arrows_btns.png', 128, 128);
      this.load.spritesheet('btn_navigation', 'assets/images/mob/navigation_btns.png', 128, 128);
      this.load.spritesheet('btn_helper', 'assets/images/mob/helper_btns.png', 128, 128);
    } else {
      this.load.spritesheet('btn_sound', 'assets/images/sound_btns_64x64.png', 64, 64);
      this.load.spritesheet('btn_arrows', 'assets/images/arrows_btns.png', 64, 64);
      this.load.spritesheet('btn_navigation', 'assets/images/navigation_btns.png', 64, 64);
      this.load.spritesheet('btn_helper', 'assets/images/helper_btns.png', 64, 64);
    }

    //joystick
    this.load.spritesheet('btn_up_down', 'assets/images/joy_vertical.png', 70, 87);
    this.load.spritesheet('btn_left_right', 'assets/images/joy_horizontal.png', 87, 70);

    //helper images
    this.load.image('star', 'assets/images/star.png');
    this.load.image('bstar', 'assets/images/star_black.png');
    this.load.image('star_win', 'assets/images/star_win.png');

    //game object images
    this.load.spritesheet('cowboy', 'assets/images/cowboy.png', 32, 32);
    this.load.image('block', 'assets/images/StoneBlock.png');
    this.load.image('box', 'assets/images/Crate.png');

    //sounds
    this.load.audio('start_audio', 'assets/sounds/start.ogg');
    this.load.audio('click_audio', 'assets/sounds/pub_click.ogg');
    this.load.audio('handing_audio', 'assets/sounds/handing.ogg');
    this.load.audio('sound_1', 'assets/sounds/sound_1.ogg');
    this.load.audio('sound_2', 'assets/sounds/sound_2.ogg');
    this.load.audio('sound_3', 'assets/sounds/sound_3.ogg');
    this.load.audio('sound_4', 'assets/sounds/sound_4.ogg');
    this.load.audio('win_audio', 'assets/sounds/win.ogg');
    this.load.audio('about_audio', 'assets/sounds/title.ogg');

    //jsons
    this.load.json('levels', 'js/levels.json');
  },
  create: function() {
    var a1 = this.add.audio('start_audio');
    var a2 = this.add.audio('click_audio');
    // var a3 = this.add.audio('handing_audio');
    // var a4 = this.add.audio('sound_1');
    // var a5 = this.add.audio('sound_2');
    // var a6 = this.add.audio('sound_3');
    // var a7 = this.add.audio('win_audio');
    // var a8 = this.add.audio('about_audio');

    // preload font
    var preload_font = this.game.add.text(0, 0, "1", {
      font: '44px finger_paintregular',
      fill: "#fff",
      align: "center"
    });
    preload_font.visible = false;
    // preload_font.visible = false;
    for (var i = 0; i < 60; i++) {
      preload_font.text = i;
    }

    this.sound.setDecodedCallback([a1, a2], this.start, this);
  },

  start: function() {
    this.state.start('MainMenu');
  }
};
