define(function() {
  var AudioController;
  return AudioController = (function() {
    function AudioController() {}

    AudioController.prototype.audible = false;

    AudioController.prototype.init = function() {
      this.getElements();
      return this.addListeners();
    };

    AudioController.prototype.getElements = function() {
      return this.audioButton = document.getElementsByClassName("audio")[0];
    };

    AudioController.prototype.addListeners = function() {
      return this.audioButton.addEventListener("click", (function(_this) {
        return function() {
          if (_this.audible === true) {
            _this.audible = false;
            _this.audioButton.classList.remove("off");
          } else {
            _this.audible = true;
            _this.audioButton.classList.add("off");
          }
          return window.createjs.Sound.setMute(_this.audible);
        };
      })(this));
    };

    return AudioController;

  })();
});

//# sourceMappingURL=AudioController.js.map
