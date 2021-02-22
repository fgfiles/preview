define(["../../site/holder/views/GameOverView", "../../site/holder/views/HowToView", "../../site/holder/views/IntroView", "../../site/holder/views/OrientationView", "../../site/holder/views/PreloaderView", "../../site/holder/controllers/AudioController", "../../site/holder/controllers/EventController", "../../site/holder/controllers/IEFixerController", "../../site/holder/controllers/ImageLoadController", "../../site/holder/controllers/PageController", "../../site/holder/utils/TextScalerUtil"], function(GameOverView, HowToView, IntroView, OrientationView, PreloaderView, AudioController, EventController, IEFixerController, ImageLoadController, PageController, TextScalerUtil) {
  var Site;
  return Site = function() {
    var App;
    App = (function() {
      function App() {}

      App.prototype.gameover = new GameOverView;

      App.prototype.howto = new HowToView;

      App.prototype.intro = new IntroView;

      App.prototype.orinetation = new OrientationView;

      App.prototype.preloader = new PreloaderView;

      App.prototype.audio = new AudioController;

      App.prototype.ie = new IEFixerController;

      App.prototype.images = new ImageLoadController;

      App.prototype.messages = new EventController;

      App.prototype.page = new PageController;

      App.prototype.textscale = new TextScalerUtil;

      App.prototype.start = function() {
        var classes, i, run, _i, _len, _results;
        i = 0;
        run = ["preloader", "images", "messages", "page", "orinetation", "audio", "intro", "howto", "textscale", "gameover", "ie"];
        _results = [];
        for (_i = 0, _len = run.length; _i < _len; _i++) {
          classes = run[_i];
          _results.push(puss[classes].init());
        }
        return _results;
      };

      return App;

    })();
    window.puss = new App;
    return puss.start();
  };
});

//# sourceMappingURL=main.js.map
