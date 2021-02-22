var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(function() {
  var HowToView;
  return HowToView = (function() {
    function HowToView() {
      this.activate = __bind(this.activate, this);
    }

    HowToView.prototype.init = function() {
      this.getElements();
      this.addListeners();
      return this.activate(0);
    };

    HowToView.prototype.getElements = function() {
      this.page = document.getElementsByClassName("how-to-page")[0];
      this.pages = this.page.getElementsByClassName("page");
      this.closeButton = this.page.getElementsByClassName("close-button")[0];
      return this.pagination = this.page.getElementsByClassName("buttons")[0];
    };

    HowToView.prototype.addListeners = function() {
      this.closeButton.addEventListener("click", function() {
        return puss.page.render("intro-page");
      });
      return this.pagination.addEventListener("click", (function(_this) {
        return function(e) {
          var button, n, setActive, _i, _len, _ref;
          n = 0;
          setActive = 0;
          _ref = _this.pagination.children;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            button = _ref[_i];
            if (button === e.target) {
              setActive = n;
            }
            n++;
          }
          return _this.activate(setActive);
        };
      })(this));
    };

    HowToView.prototype.activate = function(n) {
      var button, page, _i, _j, _len, _len1, _ref, _ref1;
      _ref = this.pages;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        page = _ref[_i];
        page.classList.remove("active");
      }
      _ref1 = this.pagination.children;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        button = _ref1[_j];
        button.classList.remove("active");
      }
      this.pagination.children[n].classList.add("active");
      return this.pages[n].classList.add("active");
    };

    return HowToView;

  })();
});

//# sourceMappingURL=HowToView.js.map
