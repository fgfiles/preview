define(function() {
  var PageController;
  return PageController = (function() {
    function PageController() {}

    PageController.prototype.init = function() {
      this.getElements();
      return this.render("preloader");
    };

    PageController.prototype.getElements = function() {
      return this.pages = document.getElementsByClassName("page-el");
    };

    PageController.prototype.render = function(slug) {
      var page, urls, v, _i, _len, _ref, _results;
      v = 0;
      if (slug === "game") {
        v = 1;
      } else {
        puss.messages.post("pause");
      }
      window.createjs.Sound.setVolume(v);
      _ref = this.pages;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        page = _ref[_i];
        page.classList.remove("active");
        urls = page.getAttribute("data-url");
        urls = urls.replace(/\s/g, "");
        urls = urls.split(",");
        if (urls.indexOf(slug) !== -1) {
          _results.push(page.classList.add("active"));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return PageController;

  })();
});

//# sourceMappingURL=PageController.js.map
