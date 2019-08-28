

var Sokoban = Sokoban || {};

Sokoban.displayX = 1280;
Sokoban.displayY = 720;

Sokoban.game = new Phaser.Game(Sokoban.displayX, Sokoban.displayY, Phaser.AUTO, '');

Sokoban.game.prototype = {
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
}

Sokoban.game.state.add('Boot', Sokoban.Boot);
Sokoban.game.state.add('Preload', Sokoban.Preload);
Sokoban.game.state.add('MainMenu', Sokoban.MainMenu);
Sokoban.game.state.add('LevelMenu', Sokoban.LevelMenu);
Sokoban.game.state.add('About', Sokoban.About);
Sokoban.game.state.add('GlobalScores', Sokoban.GlobalScores);
Sokoban.game.state.add('Game', Sokoban.Game);

Sokoban.game.state.start('Boot');
