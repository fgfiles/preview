define(function() {
  var TextScalerUtil;
  return TextScalerUtil = (function() {
    function TextScalerUtil() {}

    TextScalerUtil.prototype.init = function() {
      this.getElements();
      this.scale();
      return setInterval((function(_this) {
        return function() {
          return _this.scale();
        };
      })(this), 1000);
    };

    TextScalerUtil.prototype.getElements = function() {
      return this.text = document.getElementsByClassName("text-scale-el");
    };

    TextScalerUtil.prototype.scale = function() {
      var current, fontSize, goal, setTo, text, _i, _len, _ref, _results;
      _ref = this.text;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        text = _ref[_i];
        fontSize = parseInt(getComputedStyle(text, null).fontSize);
        current = text.offsetWidth;
        goal = text.getAttribute("data-width");
        setTo = Math.round((fontSize / current) * goal);
        _results.push(text.style.fontSize = "" + setTo + "px");
      }
      return _results;
    };

    return TextScalerUtil;

  })();
});

//# sourceMappingURL=TextScalerUtil.js.map
