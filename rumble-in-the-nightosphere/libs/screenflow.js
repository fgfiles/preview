var WONBATS = WONBATS || {};

(function () {
    'use strict';

    function Screen() {
        this.asset = new PIXI.Container();
        this.transitionSignal = new WONBATS.Signal();
        this.buttons = {};
        this.exitKillData = undefined;
        this.wonbyclips = [];
    }

    Screen.prototype.enter = function (name) {
        this.name = name;
    };

    Screen.prototype.addWonbyClip = function (wc, container, index) {
        this.wonbyclips.push(wc);

        if (index !== undefined) {
            container.addChildAt(wc, index);
        } else {
            container.addChild(wc);
        }
    };

    Screen.prototype.removeWonbyClip = function (wc) {
        var index = this.wonbyclips.indexOf(wc);
        this.wonbyclips = WONBATS.splice(this.wonbyclips, index, 1);
        wc.parent.removeChild(wc);
    };

    Screen.prototype.enableKeyboard = function (on) {
        if (on) {
            window.onkeydown = this.onKeyDown.bind(this);
            window.onkeyup = this.onKeyUp.bind(this);
        } else {
            window.onkeydown = undefined;
            window.onkeyup = undefined;
        }
    };

    Screen.prototype.onKeyDown = function (e) {
        e.preventDefault();
        

        if (parseInt(e.keyCode) === 77) {
            this.onMuteKey();
        } else if (parseInt(e.keyCode) === 27) {
            this.onBackKey();
        } else if (parseInt(e.keyCode) === 13) {
            this.onAcceptKey();
        } else if (parseInt(e.keyCode) === 37) {
            this.onLeftKey();
        } else if (parseInt(e.keyCode) === 39) {
            this.onRightKey();
        } else if (parseInt(e.keyCode) === 38) {
            this.onUpKey();
        } else if (parseInt(e.keyCode) === 40) {
            this.onDownKey();
        }
    };

    Screen.prototype.onMuteKey = function () {};
    Screen.prototype.onBackKey = function () {};
    Screen.prototype.onAcceptKey = function () {};
    Screen.prototype.onLeftKey = function () {};
    Screen.prototype.onRightKey = function () {};
    Screen.prototype.onDownKey = function () {};
    Screen.prototype.onUpKey = function () {};

    Screen.prototype.onKeyUp = function (e) {
        e.preventDefault();
    };

    Screen.prototype.addButton = function (name, target, click, clickSound, overSound) {
        if (!this.buttons.hasOwnProperty(name)) {
            this.buttons[name] = new WONBATS.SmartButton(target, click, clickSound, overSound);
        } else {
        }

        return this.buttons[name];
    };

    Screen.prototype.removeButton = function (name) {
        if (name instanceof String) {
            this.buttons[name].dispose();
            this.buttons[name] = null;
            delete this.buttons[name];
        }
    };

    Screen.prototype.enableButtons = function (on) {
        var i = 0;
        for (i in this.buttons) {
            if (this.buttons.hasOwnProperty(i)) {
                this.buttons[i].setEnable(on);
            }
        }
    };

    Screen.prototype.enableInput = function (on) {
        this.enableButtons(on);
        this.enableKeyboard(on);
    };

    Screen.prototype.exit = function () {
        
        var i = 0;
        for (i in this.buttons) {
            if (this.buttons.hasOwnProperty(i)) {
                this.removeButton(i);
            }
        }
        this.wonbyclips = WONBATS.loopAndCallArray(this.wonbyclips, "destroy");
        this.wonbyclips = null;
        window.onkeydown = null;
        window.onkeyup = null;
        this.buttons = null;
        this.asset.parent.removeChild(this.asset);
        this.asset.destroy();
        this.asset = null;
        this.transitionSignal.clear();
        this.transitionSignal = null;
    };

    Screen.prototype.update = function (dt) {
        for (var i = this.wonbyclips.length - 1; i > -1; i -= 1) {
            this.wonbyclips[i].update(dt);
        }
    };

    WONBATS.Screen = Screen;

    function MockScreen(config, container, index, gameWidth, gameHeight) {
        Screen.call(this);

        this.config = config;
        this.container = container;
        this.enterdex = index;
        this.buttons = [];
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    MockScreen.prototype = Object.create(Screen.prototype);
    MockScreen.prototype.constructor = MockScreen;

    MockScreen.prototype.enter = function (name) {
        var title,
            bg,
            buttonY,
            key,
            button,
            buttonTxt,
            buttonBg;

        Screen.prototype.enter.call(this, name);

        this.asset.x = 10 * this.enterdex;
        this.asset.y = 10 * this.enterdex;

        bg = new PIXI.Graphics();
        bg.beginFill(0x454545);
        bg.lineStyle(4, 0xffd900, 1);
        bg.drawRect(0, 0, this.gameWidth - 20 * this.enterdex, this.gameHeight - 20 * this.enterdex);
        bg.endFill();

        this.asset.addChild(bg);

        title = new PIXI.Text(this.name, {
            font: "bold 24px Arial",
            fill: 0xffffff
        });
        title.textAlign = "right";
        title.textBaseline = "top";
        title.x = this.gameWidth - title.width / 0.8;
        title.y = 10;

        this.asset.addChild(title);

        buttonY = 20;

        if (this.config.stack) {
            this.config.events.close = "close";
        }

        for (key in this.config.events) {
            if (this.config.events.hasOwnProperty(key)) {
                button = new PIXI.Container();
                button.name = key;
                button.mouseChildren = false;

                buttonTxt = new PIXI.Text(key, {
                    font: "bold 12px Arial",
                    fill: 0x6666ff
                });
                buttonTxt.textAlign = "center";
                buttonTxt.textBaseline = "middle";

                buttonBg = new PIXI.Graphics();
                buttonBg.beginFill(0xffffff);
                buttonBg.drawRect(-5, -5, buttonTxt.width + 10, buttonTxt.height + 10);
                buttonBg.endFill();

                button.addChild(buttonBg);
                button.addChild(buttonTxt);
                button.x = 20;
                button.y = buttonY;

                buttonY += button.height + 15;

                this.asset.addChild(button);
                button.interactive = true;
                button.on('mousedown', this.onButtonDown.bind(this));
                button.on('touchstart', this.onButtonDown.bind(this));

                this.buttons.push(button);
            }
        }
    };

    MockScreen.prototype.onButtonDown = function (evt) {
        var args = [this.name, evt.target.name];

        if (this.config.args && this.config.args[evt.target.name]) {
            args = args.concat(this.config.args[evt.target.name]);
        }

        this.transitionSignal.emit.apply(this.transitionSignal, args);
    };

    function Screenflow(config, container, gameWidth, gameHeight) {
        this.config = config;
        this.container = container;
        this.screens = [];
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    Screenflow.prototype.start = function (screenName) {
        this.createScreen(screenName);
    };

    Screenflow.prototype.createScreen = function (screenName) {
        var screen = null;

        if (this.getLastScreen()) {
            this.getLastScreen().asset.mouseEnabled = false;
        }

        if (this.config[screenName].screenClass === null) {
            screen = new MockScreen(this.config[screenName], this.container, this.screens.length, this.gameWidth, this.gameHeight);
        } else {
            screen = new this.config[screenName].screenClass();
        }

        this.screens.push(screen);

        this.getLastScreen().transitionSignal.add(this.onEventDispatch.bind(this));
        this.getLastScreen().asset.on("added", this.screenAddedToStage.bind(this, arguments));
        this.container.addChild(this.getLastScreen().asset);
        this.getLastScreen().asset.mouseEnabled = true;
    };

    Screenflow.prototype.screenAddedToStage = function (e) {
        this.getLastScreen().asset.off("added");
        this.getLastScreen().enter.apply(this.getLastScreen(), e);
    };

    Screenflow.prototype.onEventDispatch = function (screenName, eventName) {
        var i,
            j,
            nextScreenStacks,
            args = [];

        this.getLastScreen().transitionSignal.remove(this.onEventDispatch);

        args.push(this.config[screenName].events[eventName]);

        for (j = 2; j < arguments.length; j += 1) {
            args.push(arguments[j]);
        }
        this.getLastScreen().exitKillData = args;
    };

    Screenflow.prototype.getLastScreen = function () {
        if (this.screens.length > 0) {
            return this.screens[this.screens.length - 1];
        }
        return;
    };

    Screenflow.prototype.update = function (dt) {
        var i,
            lastScreen = this.getLastScreen();

        if (lastScreen && lastScreen.exitKillData) {
            this.screens.pop();
            lastScreen.exit();
            this.createScreen.apply(this, lastScreen.exitKillData);
        } else if (lastScreen) {
            this.getLastScreen().update(dt);
        }
    };

    WONBATS.Screenflow = Screenflow;
}());
