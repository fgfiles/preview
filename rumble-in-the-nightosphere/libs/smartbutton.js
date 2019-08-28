var WONBATS = WONBATS || {};
var game = game || {};

(function () {
    'use strict';

    function SmartButton(target, click, clickSound, overSound) {
        this.clickSound = "btn_click";
        this.overSound = "btn_rollover";
        if (clickSound) {
            this.clickSound = clickSound;
        }
        if (overSound) {
            this.overSound = overSound;
        }
        this.clickCallback = click;
        this.target = target;
        this.target.gotoAndStop(0);
        this.target.interactive = true;
        this.target.buttonMode = true;
        this.target.mouseover = this.mouseover.bind(this);
        this.target.mouseout = this.mouseout.bind(this);
        this.target.mousedown = this.mousedown.bind(this);
        this.target.touchstart = this.touchstart.bind(this);
    }

    SmartButton.prototype.mouseover = function (mouseData) {
        this.target.gotoAndPlay("over");
        soundManager.play(this.overSound, true);
    };

    SmartButton.prototype.mouseout = function (mouseData) {
        this.target.gotoAndPlay("out");
    };

    SmartButton.prototype.mousedown = function (mouseData) {
        this.target.gotoAndPlay("down");
        soundManager.play(this.clickSound, true);

        if (this.clickCallback) {
            
            this.clickCallback.call(this);
        }
    };

    SmartButton.prototype.mouseup = function (mouseData) {
        this.target.gotoAndPlay("out");
    };

    SmartButton.prototype.click = function (mouseData) {};

    SmartButton.prototype.touchstart = function (touchData) {
        this.mousedown();
        this.target.gotoAndPlay("out");
    };

    SmartButton.prototype.touchend = function (touchData) {
        this.mouseout();
    };

    SmartButton.prototype.on = function (event, callback) {
        this.target.on(event, callback);
    };

    SmartButton.prototype.setEnable = function (value) {
        this.target.interactive = value;
    };

    SmartButton.prototype.setVisible = function (value) {
        this.target.visible = value;
    };

    SmartButton.prototype.dispose = function () {
        this.clickCallback = null;
        this.target.setInteractive(false);
        this.target.mouseover = null;
        this.target.mouseout = null;
        this.target.mousedown = null;
        this.target.mouseup = null;
        this.target.touchstart = null;
        this.clickSound = null;
        this.overSound = null;
    };

    WONBATS.SmartButton = SmartButton;
}());
