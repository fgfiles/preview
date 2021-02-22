var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(function() {
  var OrientationView;
  return OrientationView = (function() {
    function OrientationView() {
      this.checkScale = __bind(this.checkScale, this);
    }

    OrientationView.prototype.init = function() {
      this.getElements();
      this.addListeners();
      return this.checkScale();
    };

    OrientationView.prototype.getElements = function() {
      this.page = document.getElementsByClassName("rotate-device")[0];
      this.desktopMessage = this.page.getElementsByClassName("desktop")[0];
      return this.mobileMessage = this.page.getElementsByClassName("mobile")[0];
    };

    OrientationView.prototype.addListeners = function() {
      window.addEventListener("resize", (function(_this) {
        return function() {
          return _this.checkScale();
        };
      })(this));
      if (window.orientation === void 0) {
        return this.mobileMessage.classList.add("hidden");
      } else {
        return this.desktopMessage.classList.add("hidden");
      }
    };

    OrientationView.prototype.checkScale = function() {
      clearTimeout(this.timer);
      return this.timer = setTimeout((function(_this) {
        return function() {
          if (window.innerWidth < window.innerHeight) {
            return _this.page.classList.add("active");
          } else {
            return _this.page.classList.remove("active");
          }
        };
      })(this), 150);
    };

    return OrientationView;

  })();
});

//# sourceMappingURL=OrientationView.js.map
