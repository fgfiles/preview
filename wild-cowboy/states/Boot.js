
var Sokoban = Sokoban || {};

Sokoban.soundEffect = true;
Sokoban.isMobile = false;
Sokoban.version = '2.0.0';
Sokoban.uuid = undefined;

Sokoban.Boot = function() {};

Sokoban.Boot.prototype = {
  init: function() {
    this.isMobile();

    if (store.get('uuid')) {
      Sokoban.uuid = store.get('uuid');
    } else {
      this.generateUUID();
      store.set('uuid', Sokoban.uuid);
    }

    this.fixedScore();
  },
  preload: function() {
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#2d2d2d';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    //have the game centred horizontally
    this.scale.pageAlignHorizontally = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  },
  /**
   * Check if device is mobile
   */
  isMobile: function() {
    if (this.game.device.desktop) {
      Sokoban.isMobile = false;
    } else if (this.game.device.android || this.game.device.iOS || this.game.device.touch) {
      Sokoban.isMobile = true;
    }
  },
  generateUUID: function() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    Sokoban.uuid = uuid;
  },
  fixedScore: function() {
    var globalScore = store.get('score') || {};

    if (1 in globalScore) {
      if ('stars' in globalScore[1]) {

      } else {
        Object.keys(globalScore).map(function(keyLevel, index) {
          var userScore = globalScore[keyLevel]['user'];
          var localScore = globalScore[keyLevel]['min'];
          var countUser = (10000 - userScore) / 100;
          var countLocal = (10000 - localScore) / 100;
          var stars = 0;

          for (var s = 1; s <= 3; s++) {
            if (userScore - localScore < 150 && s == 1) {
              stars = s;
            }

            if (userScore - localScore < 100 && s == 2) {
              stars = s;
            }

            if (userScore - localScore < 50 && s == 3) {
              stars = s;
            }
          }

          globalScore[keyLevel] = {
            'user': Math.round(countUser) * keyLevel,
            'min': Math.round(countLocal) * keyLevel,
            'stars': stars
          }
        });

        store.set('score', globalScore);
      }
    }
  }
}
