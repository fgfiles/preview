define(function() {
  var GameOverView;
  return GameOverView = (function() {
    function GameOverView() {}

    GameOverView.prototype.init = function() {
      this.getElements();
      return this.addListeners();
    };

    GameOverView.prototype.getElements = function() {
      this.page = document.getElementsByClassName("game-over-page")[0];
      return this.playAgainButton = this.page.getElementsByClassName("play-again")[0];
    };

    GameOverView.prototype.addListeners = function() {
      return this.playAgainButton.addEventListener("click", function() {
        puss.page.render("game");
        puss.messages.post("restart");
        return window.analyticsPlayAgainClick();
      });
    };

    return GameOverView;

  })();
});

//# sourceMappingURL=GameOverView.js.map
