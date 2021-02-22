define(function() {
  var IntroView;
  return IntroView = (function() {
    function IntroView() {}

    IntroView.prototype.init = function() {
      this.getElements();
      return this.addListeners();
    };

    IntroView.prototype.getElements = function() {
      this.page = document.getElementsByClassName("intro-page")[0];
      this.playButton = this.page.getElementsByClassName("play")[0];
      return this.howToButton = this.page.getElementsByClassName("how-to")[0];
    };

    IntroView.prototype.addListeners = function() {
      this.playButton.addEventListener("click", function() {
        puss.page.render("game");
        puss.messages.post("restart");
        return window.analyticsPlayClick();
      });
      return this.howToButton.addEventListener("click", function() {
        puss.page.render("how-to");
        return window.analyticsHowToPlayClick();
      });
    };

    return IntroView;

  })();
});

//# sourceMappingURL=IntroView.js.map
