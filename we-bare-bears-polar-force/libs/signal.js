var WONBATS = WONBATS || {};

(function () {
    'use strict';

    function Signal() {
        this.functions = [];
    }

    Signal.prototype.add = function (func) {
        this.functions.push(func);
    };

    Signal.prototype.remove = function (func) {
        this.functions.splice(this.functions.indexOf(func), 1);
    };

    Signal.prototype.clear = function () {
        this.functions.length = 0;
    };

    Signal.prototype.emit = function () {
        var i;

        for (i = 0; i < this.functions.length; i += 1) {
            this.functions[i].apply(this, arguments);
        }
    };

    WONBATS.Signal = Signal;
}());
