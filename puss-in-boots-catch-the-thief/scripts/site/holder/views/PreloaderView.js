var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(function() {
  var PreloaderView;
  return PreloaderView = (function() {
    function PreloaderView() {
      this.update = __bind(this.update, this);
      this.siteProgress = __bind(this.siteProgress, this);
      this.gameProgress = __bind(this.gameProgress, this);
    }

    PreloaderView.prototype.gamePercent = 0;

    PreloaderView.prototype.sitePercent = 0;

    PreloaderView.prototype.init = function() {
      return this.getElements();
    };

    PreloaderView.prototype.getElements = function() {
      this.page = document.getElementsByClassName("preloader")[0];
      return this.bar = this.page.getElementsByClassName("bar")[0];
    };

    PreloaderView.prototype.gameProgress = function(percent) {
      this.gamePercent = percent;
      return this.update();
    };

    PreloaderView.prototype.siteProgress = function(percent) {
      this.sitePercent = percent;
      return this.update();
    };

    PreloaderView.prototype.update = function() {
      var p;
      p = -100 + Math.round((this.gamePercent + this.sitePercent) / 2);
      this.bar.style.marginLeft = "" + p + "%";
      if (this.gamePercent + this.sitePercent === 200) {
        return setTimeout((function(_this) {
          return function() {
            return puss.page.render("intro-page");
          };
        })(this), 750);
      }
    };

    return PreloaderView;

  })();
});

//# sourceMappingURL=PreloaderView.js.map
