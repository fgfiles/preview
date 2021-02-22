define(function() {
  var IEFixerController;
  return IEFixerController = (function() {
    function IEFixerController() {}

    IEFixerController.prototype.init = function() {
      if (window.navigator.userAgent.indexOf("MSIE") > -1) {
        return this.run();
      }
    };

    IEFixerController.prototype.run = function() {
      var canvas;
      canvas = document.getElementById("view").style;
      return setInterval((function(_this) {
        return function() {
          var h, w;
          w = Math.min(1136, Math.max(1136, window.innerWidth * 0.8));
          h = Math.round(w * (640 / 1136));
          canvas.height = "" + h + "px";
          return canvas.width = "" + w + "px";
        };
      })(this), 100);
    };

    return IEFixerController;

  })();
});

//# sourceMappingURL=IEFixerController.js.map
