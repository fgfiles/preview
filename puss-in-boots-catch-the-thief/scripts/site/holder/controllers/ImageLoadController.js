var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(function() {
  var ImageLoadController;
  return ImageLoadController = (function() {
    function ImageLoadController() {
      this.loaded = __bind(this.loaded, this);
    }

    ImageLoadController.prototype.count = -1;

    ImageLoadController.prototype.init = function() {
      this.getElements();
      return this.loadImages();
    };

    ImageLoadController.prototype.getElements = function() {
      return this.images = document.getElementsByClassName("image-el");
    };

    ImageLoadController.prototype.loadImages = function() {
      var image, img, self, src, _i, _len, _ref;
      self = this;
      _ref = this.images;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        image = _ref[_i];
        img = document.createElement("img");
        src = image.getAttribute("data-src");
        image.style.backgroundImage = "url(" + src + ")";
        img.setAttribute("class", "preload-image");
        img.addEventListener("load", function() {
          self.loaded();
          this.parentNode.classList.add("loaded");
          return this.parentNode.removeChild(this);
        });
        img.setAttribute("src", src);
        image.appendChild(img);
      }
      return this.loaded();
    };

    ImageLoadController.prototype.loaded = function() {
      var p;
      this.count++;
      p = (this.count / this.images.length) * 100;
      if (isNaN(p)) {
        p = 100;
      }
      return puss.preloader.siteProgress(p);
    };

    return ImageLoadController;

  })();
});

//# sourceMappingURL=ImageLoadController.js.map
