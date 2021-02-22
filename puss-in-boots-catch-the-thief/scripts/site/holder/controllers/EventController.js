var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(function() {
  var EventController;
  return EventController = (function() {
    function EventController() {
      this.onGameOver = __bind(this.onGameOver, this);
      this.onComplete = __bind(this.onComplete, this);
      this.onProgress = __bind(this.onProgress, this);
      this.post = __bind(this.post, this);
      this.addListeners = __bind(this.addListeners, this);
    }

    EventController.prototype.init = function() {
      return this.addListeners();
    };

    EventController.prototype.addListeners = function() {
      var trigger, triggers, _i, _len, _results;
      triggers = ["onProgress", "onGameOver"];
      _results = [];
      for (_i = 0, _len = triggers.length; _i < _len; _i++) {
        trigger = triggers[_i];
        _results.push(Backbone.on(trigger, this[trigger]));
      }
      return _results;
    };

    EventController.prototype.post = function(message) {
      var send;
      send = message.charAt(0).toUpperCase() + message.slice(1);
      return jQuery(window).trigger("Game:" + send);
    };

    EventController.prototype.onProgress = function(percent) {
      return setTimeout((function(_this) {
        return function() {
          return puss.preloader.gameProgress(percent * 100);
        };
      })(this), 500);
    };

    EventController.prototype.onComplete = function() {
      return setTimeout((function(_this) {
        return function() {
          return _this.post("pause");
        };
      })(this), 2000);
    };

    EventController.prototype.onGameOver = function(score) {
      var scoreHolder;
      this.post("pause");
      scoreHolder = document.getElementsByClassName("score-holder")[0];
      scoreHolder.innerHTML = score;
      puss.page.render("game-over");
      return window.analyticsSummaryScreen(score);
    };

    return EventController;

  })();
});

//# sourceMappingURL=EventController.js.map
