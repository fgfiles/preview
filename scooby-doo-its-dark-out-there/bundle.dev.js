(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Common      = require("./Common");
var Button      = require("./Button");
var Scene       = require("./Scene");

/**
 * @constructor
 */
function AnimationScene() {
    Scene.call(this);

    /**
     * @type {Button}
     * @private
     */
    this._skipButton = null;

    /**
     * @type {Button}
     * @private
     */
    this._homeButton = null;

    /**
     * @type {Boolean}
     * @private
     */
    this._skipped = false;

    /**
     * @type {signals.Signal}
     */
    this.signals.skip = new signals.Signal();
}
module.exports                          = AnimationScene;
AnimationScene.prototype                = Object.create(Scene.prototype);
AnimationScene.prototype.constructor    = AnimationScene;

AnimationScene.prototype.init = function() {
    this._skipButton = new Button(
        Common.assetManager.getTexture("but_next_def"),
        Common.assetManager.getTexture("but_next_over"),
        Common.assetManager.getTexture("but_next_pressed")
    );
    this._skipButton.y          = p3.Canvas.height - 140.0;
    this._skipButton.animate    = true;
    this._skipButton.visible    = false;
    this._skipButton.init();
    this._skipButton.signals.click.add(this.onSkipButtonClick, this);
    this._skipButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._skipButton);

    this._homeButton = new Button(
        Common.assetManager.getTexture("but_home_def"),
        Common.assetManager.getTexture("but_home_over"),
        Common.assetManager.getTexture("but_home_pressed")
    );
    this._homeButton.y          = 100.0;
    this._homeButton.animate    = true;
    this._homeButton.visible    = false;
    this._homeButton.init();
    this._homeButton.signals.click.addOnce(this.onHomeButtonClick, this);
    this._homeButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._homeButton);
};

AnimationScene.prototype.dispose = function() {
    this._skipButton.dispose();
    this._homeButton.dispose();

    this.signals.skip.dispose();

    Scene.prototype.dispose.call(this);
};

AnimationScene.prototype.resize = function() {
    this._skipButton.x = (Common.STAGE_WIDTH + p3.Canvas.width) * 0.5 - 140.0;
    this._homeButton.x = (Common.STAGE_WIDTH - p3.Canvas.width) * 0.5 + 100.0;
};

AnimationScene.prototype.appear = function() {
    this.animateIn(null);
};

AnimationScene.prototype.next = function() {
    if (!this._skipped) {
        this.signals.next.dispatch();
    }
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
AnimationScene.prototype.animateIn = function(callback, scope) {
    this._skipButton.scale      = new PIXI.Point(0.0, 0.0);
    this._skipButton.visible    = true;
    TweenMax.to(this._skipButton.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    });

    this._homeButton.scale      = new PIXI.Point(0.0, 0.0);
    this._homeButton.visible    = true;
    TweenMax.to(this._homeButton.scale, 0.4, {
        delay: 0.4,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    });
};

/**
 * @param {!Button} button
 */
AnimationScene.prototype.onSkipButtonClick = function(button) {
    this._skipped = true;
    this.signals.skip.dispatch();

    Common.audioManager.playSound("sfx_press");
};

/**
 * @param {!Button} button
 */
AnimationScene.prototype.onHomeButtonClick = function(button) {
    this.signals.home.dispatch();

    Common.audioManager.playSound("sfx_press");
};

/**
 * @param {!Button} button
 */
AnimationScene.prototype.onButtonRollOver = function(button) {
    Common.audioManager.playSound("sfx_rollover");
};

},{"./Button":3,"./Common":6,"./Scene":29}],2:[function(require,module,exports){
/**
 *  AnimationScene
 *
 *  Created by Legman on 4/09/2015.
 *
 */

var Common              = require("./Common");
var CutoutTransition    = require("./CutoutTransition");
var GameScene           = require("./GameScene");
var IntroScene1         = require("./IntroScene1");
var IntroScene2         = require("./IntroScene2");
var IntroScene3         = require("./IntroScene3");
var IntroScene4         = require("./IntroScene4");
var OutroScene          = require("./OutroScene");
var PauseScene          = require("./PauseScene");
var ScoreScene          = require("./ScoreScene");
var SplashScene         = require("./SplashScene");
var Transition          = require("./Transition");

function Application() {
}
module.exports = Application;

/**
 */
Application.prototype.init = function() {
    this.createSplashScene();

    //Common.audioManager.mute(true);
};

/**
 * @returns {Scene}
 */
Application.prototype.createSplashScene = function() {
    var scene = new SplashScene();
    scene.signals.next.add(function() {
        this.createIntroScene();
    }, this);

    var transition      = new CutoutTransition(Common.assetManager.getTexture("transition"), 0x1C122F);
    transition.wait     = false;
    transition.signals.in.addOnce(function() {
        Common.animator.paused = false;
    }, this);
    Common.sceneManager.add(scene, transition);

    Common.animator.paused = false;
    Common.playMenuMusic();

    return scene;
};

/**
 * @param {Number=} index
 * @returns {Scene}
 */
Application.prototype.createIntroScene = function(index) {
    index = index || 0;

    var scenes = [
        IntroScene1,
        IntroScene2,
        IntroScene3,
        IntroScene4
    ];
    var base            = scenes[index];
    var scene           = Object.create(base.prototype);
    scene.constructor   = base;
    base.apply(scene);
    scene.signals.next.add(function() {
        if (index < scenes.length - 1) {
            this.createIntroScene(index + 1);
        } else {
            this.createGameScene();
        }
    }, this);
    scene.signals.skip.add(function() {
        this.createGameScene(true);
    }, this);
    scene.signals.home.add(function() {
        this.createSplashScene();
    }, this);

    var transition      = index == 0 ? new CutoutTransition(Common.assetManager.getTexture("transition"), 0x1C122F) : new Transition();
    transition.wait     = false;
    Common.sceneManager.add(scene, transition);

    Common.stopMusic();

    return scene;
};

/**
 * @returns {Scene}
 */
Application.prototype.createOutroScene = function() {
    var scene = new OutroScene();
    scene.signals.next.add(function() {
        scene.interactive           = false;
        scene.interactiveChildren   = false;

        var score = this.createScoreScene();
        score.signals.next.add(function() {
            Common.animator.paused = false;
            this.createGameScene(true);
        }, this, 1.0);
    }, this);
    Common.sceneManager.add(scene);

    Common.stopMusic();

    return scene;
};

/**
 * @param {Boolean=} animate
 * @returns {Scene}
 */
Application.prototype.createGameScene = function(animate) {
    animate = animate || false;

    var scene = new GameScene();
    scene.signals.next.add(function() {
        this.createOutroScene();
    }, this);
    scene.signals.pause.add(function() {
        scene.interactive           = false;
        scene.interactiveChildren   = false;

        var filter      = new PIXI.filters.BlurFilter();
        filter.blur     = 0.0;
        filter.passes   = 2.0;
        scene.filters   = [filter];

        TweenMax.to(filter, 0.2, {
            blur: 4.0,
            ease: Power2.easeInOut
        });

        var pause = this.createPauseScene();
        pause.signals.next.add(function() {
            scene.interactive           = true;
            scene.interactiveChildren   = true;

            TweenMax.killTweensOf(filter);
            TweenMax.to(filter, 0.2, {
                blur: 0.0,
                ease: Power2.easeInOut,
                onComplete: function() {
                    scene.filters = null;
                },
                onCompleteScope: this
            });
        }, this, 1);
    }, this);

    var transition = animate ? new CutoutTransition(Common.assetManager.getTexture("transition"), 0x1C122F) : new Transition();
    Common.sceneManager.add(scene, transition);

    Common.playGameMusic();

    return scene;
};

/**
 * @returns {Scene}
 */
Application.prototype.createPauseScene = function() {
    Common.loadScore();

    var scene = new PauseScene();
    scene.signals.next.add(function() {
        Common.animator.paused = false;
        Common.sceneManager.remove();
    }, this);
    scene.signals.home.add(function() {
        this.createSplashScene();
    }, this);

    var transition      = new Transition();
    transition.push     = true;
    transition.replace  = false;
    Common.sceneManager.add(scene, transition);

    Common.animator.paused = true;
    return scene;
};

/**
 * @returns {Scene}
 */
Application.prototype.createScoreScene = function() {
    Common.loadScore();

    var scene = new ScoreScene();
    scene.signals.home.add(function() {
        this.createSplashScene();
    }, this);

    var transition      = new Transition();
    transition.push     = true;
    transition.replace  = false;
    Common.sceneManager.add(scene, transition);
    return scene;
};

},{"./Common":6,"./CutoutTransition":8,"./GameScene":10,"./IntroScene1":12,"./IntroScene2":13,"./IntroScene3":14,"./IntroScene4":15,"./OutroScene":18,"./PauseScene":19,"./ScoreScene":31,"./SplashScene":32,"./Transition":33}],3:[function(require,module,exports){
/**
 *  Button
 *
 *  Created by Legman on 4/09/2015.
 *
 */

/**
 * @param {!PIXI.Texture} normalTexture
 * @param {PIXI.Texture=} overTexture
 * @param {PIXI.Texture=} downTexture
 * @param {PIXI.Texture=} disabledTexture
 * @constructor
 */
function Button(normalTexture, overTexture, downTexture, disabledTexture) {
    /**
     * @type {Boolean}
     */
    this.animate = false;

    /**
     * @type {PIXI.Point}
     */
    this.baseScale = new PIXI.Point(1.0, 1.0);

    /**
     * @type {*}
     */
    this.signals = {};

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._normalTexture = normalTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._overTexture = overTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._downTexture = downTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._disabledTexture = disabledTexture;

    /**
     * @type {TweenMax}
     * @private
     */
    this._tweenOver = null;

    /**
     * @type {TweenMax}
     * @private
     */
    this._tweenOut = null;

    PIXI.Sprite.call(this, this._normalTexture);

    this.anchor             = new PIXI.Point(0.5, 0.5);
    this.interactive        = true;
    this.mousedown          = this.touchstart               = this.onMouseDown.bind(this);
    this.mouseup            = this.touchend                 = this.onMouseUp.bind(this);
    this.mouseupoutside     = this.touchendoutside          = this.onMouseOut.bind(this);
    this.click              = this.tap                      = this.onMouseClick.bind(this);
    this.mouseover          = this.onMouseOver.bind(this);
    this.mouseout           = this.onMouseOut.bind(this);
}
module.exports                  = Button;
Button.prototype                = Object.create(PIXI.Sprite.prototype);
Button.prototype.constructor    = Button;

/**
 */
Button.prototype.init = function() {
    this.baseScale      = this.scale.clone();
    this.signals.down   = new signals.Signal();
    this.signals.up     = new signals.Signal();
    this.signals.over   = new signals.Signal();
    this.signals.out    = new signals.Signal();
    this.signals.click  = new signals.Signal();
};

/**
 */
Button.prototype.dispose = function() {
    this.signals.up.dispose();
    this.signals.down.dispose();
    this.signals.over.dispose();
    this.signals.out.dispose();
    this.signals.click.dispose();
};

/**
 * @param {!Event} event
 */
Button.prototype.onMouseDown = function(event) {
    this.texture = this.downTexture;
    this.signals.down.dispatch(this, event);
};

/**
 * @param {!Event} event
 */
Button.prototype.onMouseUp = function(event) {
    this.texture = this.normalTexture;
    this.signals.up.dispatch(this, event);
};

/**
 * @param {!Event} event
 */
Button.prototype.onMouseOver = function(event) {
    this.texture = this.overTexture;

    if (this.animate) {
        var tweens  = TweenMax.getTweensOf(this, true);
        var count   = tweens.indexOf(this._tweenOut) > -1 ? tweens.length - 1 : tweens.length;

        if (!count) {
            if (this._tweenOut) {
                this._tweenOut.kill();
                this._tweenOut = null;
            }
            this._tweenOver = this.animateOver();
        }
    }

    this.signals.over.dispatch(this, event);
};

/**
 * @param {!Event} event
 */
Button.prototype.onMouseOut = function(event) {
    this.texture = this.normalTexture;

    if (this._tweenOver) {
        var tweens  = TweenMax.getTweensOf(this, true);
        var count   = tweens.indexOf(this._tweenOver) > -1 ? tweens.length - 1 : tweens.length;

        if (tweens.length <= count) {
            if (this._tweenOver) {
                this._tweenOver.kill();
                this._tweenOver = null;
            }
            this._tweenOut = this.animateOut();
        }
    }

    this.signals.out.dispatch(this, event);
};

/**
 * @param {!Event} event
 */
Button.prototype.onMouseClick = function(event) {
    this.texture = this.normalTexture;

    if (this._tweenOver) {
        var tweens  = TweenMax.getTweensOf(this, true);
        var count   = tweens.indexOf(this._tweenOver) > -1 ? tweens.length - 1 : tweens.length;

        if (tweens.length <= count) {
            if (this._tweenOver) {
                this._tweenOver.kill();
                this._tweenOver = null;
            }
            this._tweenOut = this.animateOut();
        }
    }

    this.signals.click.dispatch(this, event);
};

/**
 * @returns {TweenMax}
 */
Button.prototype.animateOver = function() {
    return TweenMax.to(this.scale, 0.8, {
        x: this.baseScale.x * 1.3,
        y: this.baseScale.x * 1.3,
        ease: Elastic.easeOut,
        easeParams: [1.0]
    });
};

/**
 * @returns {TweenMax}
 */
Button.prototype.animateOut = function() {
    return TweenMax.to(this.scale, 0.3, {
        x: this.baseScale.x,
        y: this.baseScale.y,
        ease: Back.easeInOut,
        easeParams: [2.0]
    });
};

Object.defineProperty(Button.prototype, "normalTexture", {
    /**
     * @returns {PIXI.Texture}
     */
    get: function() {
        return this._normalTexture;
    }
});

Object.defineProperty(Button.prototype, "overTexture", {
    /**
     * @returns {PIXI.Texture}
     */
    get: function() {
        return this._overTexture;
    }
});

Object.defineProperty(Button.prototype, "downTexture", {
    /**
     * @returns {PIXI.Texture}
     */
    get: function() {
        return this._downTexture;
    }
});

Object.defineProperty(Button.prototype, "disabledTexture", {
    /**
     * @returns {PIXI.Texture}
     */
    get: function() {
        return this._disabledTexture;
    }
});
},{}],4:[function(require,module,exports){
/**
 *  Character
 *
 *  Created by Legman on 8/09/2015.
 *
 */

var Common          = require("./Common");
var CharacterType   = require("./CharacterType");

/**
 * @param {!String} type
 * @constructor
 */
function Character(type) {
    PIXI.Container.call(this);

    /**
     * @type {*}
     */
    this.signals            = {};
    this.signals.moved      = new signals.Signal();

    /**
     * @type {p3.Vector2}
     */
    this.velocity = new p3.Vector2(0.0, 0.0);

    /**
     * @type {Number}
     */
    this.speed = 20.0;

    /**
     * @type {String}
     * @private
     */
    this._type = type;

    /**
     * @type {Character}
     * @private
     */
    this._target = null;

    /**
     * @type {Boolean}
     * @private
     */
    this._monster = false;

    /**
     * @type {Boolean}
     */
    this._chasing = false;

    /**
     * @type {Boolean}
     * @private
     */
    this._hit = false;

    /**
     * @type {Number}
     * @private
     */
    this._eyeHeight = 0.0;

    /**
     * @type {Number}
     * @private
     */
    this._eyeTweenDuration = 1.0;

    /**
     * @type {Number}
     * @private
     */
    this._eyeTweenHeight = 8.0;

    /**
     * @type {TweenMax}
     * @private
     */
    this._eyeTween = null;

    /**
     * @type {Number}
     * @private
     */
    this._eyeTint = 0xFFFFFF;

    /**
     * @type {Number}
     * @private
     */
    this._startPos = 0.0;

    /**
     * @type {Number}
     * @private
     */
    this._moveDistance = 0.0;

    /**
     * @type {Howl}
     * @private
     */
    this._stepSound = null;

    var sequence;
    switch (this._type) {
        case CharacterType.DAPHNE : {
            this._eyeHeight             = 180.0;
            this._eyeTweenDuration      = 0.14;
            this._eyeTweenHeight        = 14.0;
            this._monster               = false;
            this.speed                  = 220.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_daphne_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_daphne_right"),
                Common.assetManager.getTexture("eyes_daphne_blurred"),
                Common.assetManager.getTexture("eyes_daphne_left")
            ], "look_left");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_daphne_left"),
                Common.assetManager.getTexture("eyes_daphne_blurred"),
                Common.assetManager.getTexture("eyes_daphne_right")
            ], "look_right");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_daphne_blurred"),
                Common.assetManager.getTexture("eyes_daphne_left")
            ], "look_left_mid");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_daphne_blurred"),
                Common.assetManager.getTexture("eyes_daphne_right")
            ], "look_right_mid");
            break;
        }
        case CharacterType.FRED : {
            this._eyeHeight             = 190.0;
            this._eyeTweenDuration      = 0.18;
            this._eyeTweenHeight        = 14.0;
            this._monster               = false;
            this.speed                  = 220.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_fred_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_fred_right"),
                Common.assetManager.getTexture("eyes_fred_blurred"),
                Common.assetManager.getTexture("eyes_fred_left")
            ], "look_left");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_fred_left"),
                Common.assetManager.getTexture("eyes_fred_blurred"),
                Common.assetManager.getTexture("eyes_fred_right")
            ], "look_right");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_fred_blurred"),
                Common.assetManager.getTexture("eyes_fred_left")
            ], "look_left_mid");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_fred_blurred"),
                Common.assetManager.getTexture("eyes_fred_right")
            ], "look_right_mid");
            break;
        }
        case CharacterType.SCOOBY_DOO : {
            this._eyeHeight             = 160.0;
            this._eyeTweenDuration      = 0.13;
            this._eyeTweenHeight        = 14.0;
            this._monster               = false;
            this.speed                  = 220.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_scooby_default")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_scooby_right"),
                Common.assetManager.getTexture("eyes_scooby_blurred"),
                Common.assetManager.getTexture("eyes_scooby_left")
            ], "look_left");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_scooby_left"),
                Common.assetManager.getTexture("eyes_scooby_blurred"),
                Common.assetManager.getTexture("eyes_scooby_right")
            ], "look_right");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_scooby_blurred"),
                Common.assetManager.getTexture("eyes_scooby_left")
            ], "look_left_mid");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_scooby_blurred"),
                Common.assetManager.getTexture("eyes_scooby_right")
            ], "look_right_mid");
            break;
        }
        case CharacterType.SHAGGY : {
            this._eyeHeight             = 180.0;
            this._eyeTweenDuration      = 0.16;
            this._eyeTweenHeight        = 12.0;
            this._monster               = false;
            this.speed                  = 220.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_shaggy_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_shaggy_right"),
                Common.assetManager.getTexture("eyes_shaggy_blurred"),
                Common.assetManager.getTexture("eyes_shaggy_left")
            ], "look_left");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_shaggy_left"),
                Common.assetManager.getTexture("eyes_shaggy_blurred"),
                Common.assetManager.getTexture("eyes_shaggy_right")
            ], "look_right");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_shaggy_blurred"),
                Common.assetManager.getTexture("eyes_shaggy_left")
            ], "look_left_mid");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_shaggy_blurred"),
                Common.assetManager.getTexture("eyes_shaggy_right")
            ], "look_right_mid");
            break;
        }
        case CharacterType.VELMA : {
            this._eyeHeight             = 170.0;
            this._eyeTweenDuration      = 0.12;
            this._eyeTweenHeight        = 8.0;
            this._monster               = false;
            this.speed                  = 220.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_velma_default")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_velma_right"),
                Common.assetManager.getTexture("eyes_velma_blurred"),
                Common.assetManager.getTexture("eyes_velma_left")
            ], "look_left");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_velma_left"),
                Common.assetManager.getTexture("eyes_velma_blurred"),
                Common.assetManager.getTexture("eyes_velma_right")
            ], "look_right");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_velma_blurred"),
                Common.assetManager.getTexture("eyes_velma_left")
            ], "look_left_mid");
            sequence.addTextures([
                Common.assetManager.getTexture("eyes_velma_blurred"),
                Common.assetManager.getTexture("eyes_velma_right")
            ], "look_right_mid");
            break;
        }
        case CharacterType.MONSTER_1 : {
            this._eyeHeight             = 300.0;
            this._eyeTweenDuration      = 0.20;
            this._eyeTweenHeight        = 18.0;
            this._eyeTint               = 0xCBE70E;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster1_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster1_hit")
            ], "hit");
            break;
        }
        case CharacterType.MONSTER_2 : {
            this._eyeHeight             = 260.0;
            this._eyeTweenDuration      = 0.30;
            this._eyeTweenHeight        = 24.0;
            this._eyeTint               = 0xCBE70E;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster2_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster2_hit")
            ], "hit");
            break;
        }
        case CharacterType.MONSTER_3 : {
            this._eyeHeight             = 280.0;
            this._eyeTweenDuration      = 0.42;
            this._eyeTweenHeight        = 28.0;
            this._eyeTint               = 0xFC8219;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster3_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster3_hit")
            ], "hit");
            break;
        }
        case CharacterType.MONSTER_4 : {
            this._eyeHeight             = 260.0;
            this._eyeTweenDuration      = 0.20;
            this._eyeTweenHeight        = 18.0;
            this._eyeTint               = 0xCBE70E;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster4_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster4_hit")
            ], "hit");
            break;
        }
        case CharacterType.MONSTER_5 : {
            this._eyeHeight             = 270.0;
            this._eyeTweenDuration      = 0.18;
            this._eyeTweenHeight        = 14.0;
            this._eyeTint               = 0xFC8219;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster5_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster5_hit")
            ], "hit");
            break;
        }
        case CharacterType.MONSTER_6 : {
            this._eyeHeight             = 260.0;
            this._eyeTweenDuration      = 0.24;
            this._eyeTweenHeight        = 24.0;
            this._eyeTint               = 0xCBE70E;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster6_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster6_hit")
            ], "hit");
            break;
        }
        case CharacterType.MONSTER_7 : {
            this._eyeHeight             = 290.0;
            this._eyeTweenDuration      = 0.18;
            this._eyeTweenHeight        = 14.0;
            this._eyeTint               = 0xCBE70E;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster7_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster7_hit")
            ], "hit");
            break;
        }
        case CharacterType.MONSTER_8 : {
            this._eyeHeight             = 300.0;
            this._eyeTweenDuration      = 0.36;
            this._eyeTweenHeight        = 20.0;
            this._eyeTint               = 0xFC8219;
            this._monster               = true;
            this.speed                  = 380.0;

            sequence = new p3.MovieClipSequence();
            sequence.addTextures([
                Common.assetManager.getTexture("monster8_def")
            ], "idle");
            sequence.addTextures([
                Common.assetManager.getTexture("monster8_hit")
            ], "hit");
            break;
        }
    }

    /**
     * @type {p3.MovieClip}
     * @private
     */
    this._eyes                  = new p3.MovieClip(sequence, "idle");
    this._eyes.anchor           = new PIXI.Point(0.5, 0.5);
    this._eyes.animationSpeed   = 0.4;
    this.addChild(this._eyes);
}
module.exports                      = Character;
Character.prototype                 = Object.create(PIXI.Container.prototype);
Character.prototype.constructor     = Character;

/**
 * @static
 */
Character.playMonsterSound = function(x) {
    x = x || 0.0;
    var sounds = [
        "sfx_ghoul1",
        "sfx_ghoul2",
        "sfx_ghoul3",
        "sfx_ghoul4",
        "sfx_ghoul5",
        "sfx_ghoul6",
        "sfx_ghoul7",
        "sfx_ghoul8"
    ];
    var sound = Common.audioManager.playSound(sounds[Math.floor(Math.random() * sounds.length)]);
    sound.pos3d(x);
};

Character.prototype.init = function() {
    this.stopTween();
    this.resetEyes();
};

Character.prototype.dispose = function() {
    this.signals.moved.dispose();

    this.stopFootstepsSFX();
};

Character.prototype.update = function() {
    if (this._chasing) {
        this.velocity.x = (this._target.x - this.x);
        this.velocity.y = (this._target.y - this.y);
        this.velocity.normalize(1.0);

        var speed = this.speed * 1.4;
        this.velocity.x *= speed;
        this.velocity.y *= speed;

        this.scale.x = (this.velocity.x / Math.abs(this.velocity.x));
    }

    this.x += this.velocity.x * p3.Timestep.deltaTime;
    this.y += this.velocity.y * p3.Timestep.deltaTime;

    if (this._chasing) {
        var direction = new p3.Vector2();
        direction.x = this._target.x - this.x;
        direction.y = this._target.y - this.y;
        if (direction.length < this.speed * p3.Timestep.deltaTime) {
            this.x = this._target.x;
            this.y = this._target.y;
        }
    } else {
        if (this._moveDistance && Math.abs(this._startPos.x - this.x) >= this._moveDistance) {
            this._moveDistance = 0.0;
            this.idleTween();
            this.signals.moved.dispatch(this);

            this.stopFootstepsSFX();
        }
        this.updateFootstepsSFX();
    }
};

/**
 * @param {Number=} direction
 * @param {Number=} distance
 */
Character.prototype.move = function(direction, distance) {
    direction = direction / Math.abs(direction) || 1;

    if (this.hit) {
        return;
    }

    this._startPos      = this.position.clone();
    this._moveDistance  = distance || Number.MAX_VALUE;
    this.velocity.x     = this.speed * direction;
    this.scale.x        = direction;

    this._eyes.gotoAndStop("idle");

    this.runTween();
    this.playFootstepsSFX();
};

/**
 * @param {Number=} direction
 * @param {Boolean=} shock
 * @param {Boolean=} sound
 */
Character.prototype.look = function(direction, shock, sound) {
    direction   = (direction / Math.abs(direction) || 1) * this.scale.x;
    shock       = (typeof shock === "boolean" ? shock : false);
    sound       = sound || false;

    var skip = false;
    if (direction == -1) {
        if (this._eyes.currentAnimationFrame != "look_left" &&
            this._eyes.currentAnimationFrame != "look_left_mid") {
            if (this._eyes.currentAnimationFrame != "idle") {
                this._eyes.gotoAndPlay("look_left");
            } else {
                this._eyes.gotoAndPlay("look_left_mid");
            }
        } else if (shock) {
            skip = true;
            animate.call(this);
        }
    } else if (direction == 1) {
        if (this._eyes.currentAnimationFrame != "look_right" &&
            this._eyes.currentAnimationFrame != "look_right_mid") {
            if (this._eyes.currentAnimationFrame != "idle") {
                this._eyes.gotoAndPlay("look_right");
            } else {
                this._eyes.gotoAndPlay("look_right_mid");
            }
        } else if (shock) {
            skip = true;
            animate.call(this);
        }
    }
    if (shock && !skip) {
        this._eyes.signalAnimationFinished.addOnce(function() {
            animate.call(this);
        }, this);
    }

    function animate() {
        var timeline = new TimelineMax();
        timeline.append(TweenMax.to(this._eyes.scale, 0.1, {
            x: 1.3,
            y: 1.3,
            ease: Power0.easeOut
        }));
        timeline.append(TweenMax.to(this._eyes.scale, 0.2, {
            x: 1.0,
            y: 1.0,
            ease: Power1.easeOut
        }));

        if (sound) {
            Common.audioManager.playSound("sfx_scoobhuh_reverb");
        }
    }
};

Character.prototype.slap = function() {
    if (!this._hit) {
        this._hit       = true;
        this._chasing   = false;
        this._eyes.gotoAndStop("hit");

        this.velocity.x = 0.0;
        this.velocity.y = 0.0;
        this.stopTween();

        TweenMax.killTweensOf(this);
        TweenMax.killTweensOf(this._eyes);
        TweenMax.killTweensOf(this._eyes.scale);

        var timeline = new TimelineMax();
        timeline.append(TweenMax.to(this._eyes.scale, 0.1, {
            x: 1.4,
            y: 1.4,
            ease: Power0.easeOut
        }));
        timeline.append(TweenMax.to(this._eyes.scale, 0.2, {
            x: 1.0,
            y: 1.0,
            ease: Power1.easeOut
        }));
        timeline.append(TweenMax.to(this._eyes, 0.6, {
            y: this._eyes.y + 80.0,
            alpha: 0.0,
            ease: Power3.easeIn
        }));

        this.stopFootstepsSFX();
    }
};

/**
 * @param {!Character} target
 */
Character.prototype.pop = function(target) {
    this._target            = target;
    this._chasing           = false;
    this._eyes.scale        = new PIXI.Point(0.0, 0.0);
    this.velocity           = new p3.Vector2();

    Common.animator.add(TweenMax.to(this._eyes.scale, 0.2, {
        x: 0.8,
        y: 0.8,
        ease: Back.easeOut,
        easeParams: [4.0],
        onComplete: function() {
            TweenMax.to(this._eyes.scale, 1.0, {
                x: 1.0,
                y: 1.0,
                ease: Power3.easeInOut,
                onComplete: function() {
                    this._chasing = true;
                },
                onCompleteScope: this
            });
            Character.playMonsterSound();
        },
        onCompleteScope: this
    }));
};

Character.prototype.idleTween = function() {
    this.velocity.x = 0.0;

    this.stopTween();
    this.resetEyes();

    // start recursive blinking
    function blink() {
        this._eyes.visible = true;
        this._eyeTween = TweenMax.delayedCall(0.1 + Math.random() * 4.0, function() {
            this.stopTween();
            this._eyes.visible = false;
            this._eyeTween = TweenMax.delayedCall(0.2, blink, [], this);
            Common.animator.add(this._eyeTween);

            var sounds = [
                "sfx_blink1",
                "sfx_blink2",
                "sfx_blink3"
            ];
            Common.audioManager.playSound(sounds[Math.floor(Math.random() * sounds.length)], {volume: 0.3});
        }, [], this);
        Common.animator.add(this._eyeTween);
    }
    blink.call(this);
};

Character.prototype.runTween = function() {
    var duration    = this._eyeTweenDuration;
    var height      = this._eyeTweenHeight;

    this.stopTween();
    this.resetEyes();

    // bounce eyes
    this._eyeTween = TweenMax.to(this._eyes, duration, {
        y: this._eyes.y - height,
        ease: Power1.easeOut,
        yoyo: true,
        repeat: -1
    });
    Common.animator.add(this._eyeTween);
};

Character.prototype.stopTween = function() {
    if (this._eyeTween) {
        this._eyeTween.kill();
        Common.animator.remove(this._eyeTween);
    }
};

Character.prototype.resetEyes = function() {
    this._eyes.y        = -this._eyeHeight;
    this._eyes.visible  = true;
};

Character.prototype.playFootstepsSFX = function() {
    this.stopFootstepsSFX();

    var sounds = this.monster ? [
        "sfx_footsteps_ghoul1",
        "sfx_footsteps_ghoul2",
        "sfx_footsteps_ghoul3"
    ] : [
        "sfx_footsteps_gang1",
        "sfx_footsteps_gang2",
        "sfx_footsteps_gang3"
    ];
    this._stepSound = Common.audioManager.playSound(sounds[Math.floor(Math.random() * sounds.length)], {loop: true});
    this.updateFootstepsSFX();
};

Character.prototype.stopFootstepsSFX = function() {
    if (this._stepSound) {
        this._stepSound.stop();
        this._stepSound = null;
    }
};

Character.prototype.updateFootstepsSFX = function() {
    if (this._stepSound) {
        var ratio = 1.0 - (this.x / (Common.STAGE_WIDTH * 0.5));
        this._stepSound.pos3d(-ratio);
    }
};

Object.defineProperty(Character.prototype, "type", {
    /**
     * @returns {String}
     */
    get: function() {
        return this._type;
    }
});

Object.defineProperty(Character.prototype, "eyes", {
    /**
     * @returns {p3.MovieClip}
     */
    get: function() {
        return this._eyes;
    }
});

Object.defineProperty(Character.prototype, "eyeHeight", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._eyeHeight;
    },
    /**
     * @param {!Number} value
     */
    set: function(value) {
        this._eyeHeight     = -value;
        this._eyes.y        = this._eyeHeight;
    }
});

Object.defineProperty(Character.prototype, "target", {
    /**
     * @returns {Boolean}
     */
    get: function() {
        return this._target;
    }
});

Object.defineProperty(Character.prototype, "monster", {
    /**
     * @returns {Boolean}
     */
    get: function() {
        return this._monster;
    }
});

Object.defineProperty(Character.prototype, "hit", {
    /**
     * @returns {Boolean}
     */
    get: function() {
        return this._hit;
    }
});

Object.defineProperty(Character.prototype, "chasing", {
    /**
     * @returns {Boolean}
     */
    get: function() {
        return this._chasing;
    }
});

Object.defineProperty(Character.prototype, "eyeTint", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._eyeTint;
    }
});

},{"./CharacterType":5,"./Common":6}],5:[function(require,module,exports){
/**
 *  CharacterType
 *
 *  Created by Legman on 8/09/2015.
 *
 */

var Common      = require("./Common");

/**
 * @constructor
 */
function CharacterType() {
}
module.exports = CharacterType;

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.DAPHNE = "daphne";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.FRED = "fred";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.SCOOBY_DOO = "scooby_doo";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.SHAGGY = "shaggy";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.VELMA = "velma";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_1 = "monster_1";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_2 = "monster_2";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_3 = "monster_3";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_4 = "monster_4";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_5 = "monster_5";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_6 = "monster_6";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_7 = "monster_7";

/**
 * @type {String}
 * @static
 * @const
 */
CharacterType.MONSTER_8 = "monster_8";
},{"./Common":6}],6:[function(require,module,exports){
/**
 *  Common
 *
 *  Created by Legman on 4/09/2015.
 *
 */

function Common() {
}
module.exports = Common;

/**
 * @type {Number}
 * @static
 * @const
 */
Common.STAGE_WIDTH = 1900.0;

/**
 * @type {Number}
 * @static
 * @const
 */
Common.STAGE_HEIGHT = 768.0;

/**
 * @type {Number}
 * @static
 * @const
 */
Common.FLOOR_HEIGHT = 680.0;

/**
 * @type {Number}
 * @static
 * @const
 */
Common.SPOOK_DISTANCE = 40.0;

/**
 * @type {Number}
 * @static
 * @const
 */
Common.CHARACTER_RADIUS = 60.0;

/**
 * @type {PIXI.Container}
 * @static
 */
Common.stage = null;

/**
 * @type {PIXI.CanvasRenderer|PIXI.WebGLRenderer}
 * @static
 */
Common.renderer = null;

/**
 * @type {p3.Timestep}
 * @static
 */
Common.timestep = null;

/**
 * @type {p3.Tracking}
 * @static
 */
Common.tracking = null;

/**
 * @type {p3.Animator}
 * @static
 */
Common.animator = null;

/**
 * @type {SceneManager}
 * @static
 */
Common.sceneManager = null;

/**
 * @type {AssetManager}
 * @static
 */
Common.assetManager = null;

/**
 * @type {Object}
 * @static
 */
Common.copy = null;

/**
 * @type {String}
 * @static
 */
Common.language = "gb";

/**
 * @type {PIXI.Point}
 * @static
 */
Common.touch = new PIXI.Point(0.0, 0.0);

/**
 * @type {Number}
 * @static
 */
Common.paused = false;

/**
 * @type {Boolean}
 * @static
 */
Common.isWebGL = false;

/**
 * @type {Number}
 * @static
 */
Common.monsterCount = 0;

/**
 * @type {Boolean}
 * @static
 */
Common.hasViewedTutorial = false;

/**
 * @type {String}
 * @static
 */
Common.currentTrack = null;

/**
 * @type {Number}
 * @static
 */
Common.bestScore = 0;

/**
 * @static
 */
Common.playMenuMusic = function() {
    if (Common.currentTrack != "menu") {
        Common.currentTrack = "menu";
        Common.audioManager.stopSound("music_cave");
        Common.audioManager.stopSound("music_loop");
        Common.audioManager.playSound("music_menu", {volume: 1.0, loop: true});
    }
};

/**
 * @static
 */
Common.playGameMusic = function() {
    if (Common.currentTrack != "game") {
        Common.currentTrack = "game";
        Common.audioManager.stopSound("music_menu");
        Common.audioManager.playSound("music_cave", {volume: 1.0, loop: true});
        Common.audioManager.playSound("music_loop", {volume: 0.4, loop: true});
    }
};

/**
 * @static
 */
Common.stopMusic = function() {
    Common.audioManager.stopSound("music_cave");
    Common.audioManager.stopSound("music_loop");
    Common.audioManager.stopSound("music_menu");
    Common.currentTrack = null;
};

/**
 * @static
 * @returns {Number}
 */
Common.saveScore = function() {
    var data                            = {};
    data.score                          = Common.bestScore;
    if (Common.monsterCount > data.score) {
        data.score                          = Common.monsterCount;
        Common.bestScore                    = data.score;
        window.localStorage.becoolscooby    = JSON.stringify(data);
    }
    return data.score;
};

/**
 * @static
 */
Common.loadScore = function() {
    var data = window.localStorage.becoolscooby;
    if (data) {
        data                = JSON.parse(data);
        Common.bestScore    = data.score;
    }
};

},{}],7:[function(require,module,exports){
/**
 *  CutoutShader
 *
 *  Created by Legman on 11/09/2015.
 *
 */

/**
 * @param {!PIXI.Texture} texture
 * @param {Number=} scale
 * @param {PIXI.Point=} ratio
 * @constructor
 */
function CutoutShader(texture, scale, ratio) {
    scale   = scale || 0.5;
    ratio   = ratio || new PIXI.Point(1.0, 1.0);

    PIXI.AbstractFilter.call(
        this,
        null,
        "precision highp float;" +

        "varying vec2 vTextureCoord;" +
        "varying vec4 vColor;" +

        "uniform sampler2D uCutoutMap;" +
        "uniform float uScale;" +
        "uniform vec2 uRatio;" +

        "void main(void) {" +
            "vec2 textureCoord  = (((vTextureCoord - vec2(0.5, 0.5)) * uRatio) * uScale) + vec2(0.5, 0.5);" +
            "vec4 mask          = texture2D(uCutoutMap, textureCoord);" +
            "float alpha        = 1.0 - mask.a;" +
            "gl_FragColor       = vec4(vColor.r * alpha, vColor.g * alpha, vColor.b * alpha, vColor.a * alpha);" +
        "}",
        {
            uCutoutMap:     {type: "sampler2D",     value: texture},
            uScale:         {type: "f",             value: 1.0 / Math.max(0.001, scale)},
            uRatio:         {type: "v2",            value: {x: ratio.x, y: ratio.y}}
        }
    );

    texture.baseTexture.isPowerOfTwo = false;
}
module.exports                          = CutoutShader;
CutoutShader.prototype                  = Object.create(PIXI.AbstractFilter.prototype);
CutoutShader.prototype.constructor      = CutoutShader;

Object.defineProperty(CutoutShader.prototype, "scale", {
    /**
     * @returns {Number}
     */
    get: function() {
        return 1.0 / this.uniforms.uScale.value;
    },
    /**
     * @param {!Number} value
     */
    set: function(value) {
        this.uniforms.uScale.value = 1.0 / Math.max(0.001, value);
    }
});

Object.defineProperty(CutoutShader.prototype, "ratio", {
    /**
     * @returns {PIXI.Point}
     */
    get: function() {
        return new PIXI.Point(this.uniforms.uRatio.value.x, this.uniforms.uRatio.value.y);
    },
    /**
     * @param {!PIXI.Point} value
     */
    set: function(value) {
        this.uniforms.uRatio.value.x = value.x;
        this.uniforms.uRatio.value.y = value.y;
    }
});

},{}],8:[function(require,module,exports){
/**
 *  CutoutTransition
 *
 *  Created by Legman on 11/09/2015.
 *
 */

var CutoutShader    = require("./CutoutShader");
var FadeTransition  = require("./FadeTransition");
var Transition      = require("./Transition");

/**
 * @param {!PIXI.Texture} texture
 * @param {!Number} color
 * @param {!Number} duration
 * @constructor
 */
function CutoutTransition(texture, color, duration) {
    /**
     * @type {Number}
     */
    this.startScale = 8.0;

    /**
     * @type {Number}
     */
    this.endScale = 0.0;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._texture = texture;

    /**
     * @type {Number}
     * @private
     */
    this._color = color || 0x0;

    /**
     * @type {Number}
     * @private
     */
    this._duration = duration || 2.0;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._cutout = null;

    Transition.call(this);

    this.requiresWebGL = true;
}
module.exports                              = CutoutTransition;
CutoutTransition.prototype                  = Object.create(Transition.prototype);
CutoutTransition.prototype.constructor      = CutoutTransition;

CutoutTransition.prototype.init = function() {
    var quad = new PIXI.Graphics();
    quad.drawRect(0.0, 0.0, 1.0, 1.0);

    var ratio           = new PIXI.Point(0.0, 0.0);
    var canvasRatio     = p3.Canvas.width / p3.Canvas.height;
    var textureRatio    = this._texture.width / this._texture.height;

    if (canvasRatio / textureRatio > 1.0) {
        ratio.x = 1.0;
        ratio.y = 1.0 / (canvasRatio / textureRatio);
    } else {
        ratio.x = 1.0 / (canvasRatio / textureRatio);
        ratio.y = 1.0;
    }

    this._cutout        = new PIXI.Sprite(quad.generateTexture());
    this._cutout.scale  = new PIXI.Point(p3.Canvas.width, p3.Canvas.height);
    this._cutout.tint   = this._color;
    this._cutout.shader = new CutoutShader(this._texture, 0.0, ratio);
    this.addChild(this._cutout);
};

CutoutTransition.prototype.in = function() {
    this._cutout.shader.scale = this.startScale;
    TweenMax.to(this._cutout.shader, this._duration * 0.5, {
        scale: this.endScale,
        ease: Power2.easeInOut,
        onComplete: function() {
            Transition.prototype.in.call(this, this);
        },
        onCompleteScope: this
    });
};

CutoutTransition.prototype.out = function() {
    this._cutout.shader.scale = this.endScale;
    TweenMax.to(this._cutout.shader, this._duration * 0.5, {
        scale: this.startScale,
        ease: Power2.easeInOut,
        onComplete: function() {
            Transition.prototype.out.call(this, this);
        },
        onCompleteScope: this
    });
};

CutoutTransition.prototype.resize = function() {
    var ratio           = new PIXI.Point(0.0, 0.0);
    var canvasRatio     = p3.Canvas.width / p3.Canvas.height;
    var textureRatio    = this._texture.width / this._texture.height;

    if (canvasRatio / textureRatio > 1.0) {
        ratio.x = 1.0;
        ratio.y = 1.0 / (canvasRatio / textureRatio);
    } else {
        ratio.x = 1.0 / (canvasRatio / textureRatio);
        ratio.y = 1.0;
    }

    this._cutout.scale          = new PIXI.Point(p3.Canvas.width, p3.Canvas.height);
    this._cutout.shader.ratio   = ratio;
};

/**
 * @returns {Transition}
 */
CutoutTransition.prototype.fallback = function() {
    return new FadeTransition(this._color);
};
},{"./CutoutShader":7,"./FadeTransition":9,"./Transition":33}],9:[function(require,module,exports){
/**
 *  FadeTransition
 *
 *  Created by Legman on 15/09/2015.
 *
 */

var Common          = require("./Common");
var Transition      = require("./Transition");

/**
 * @param {!Number} color
 * @param {!Number} duration
 * @constructor
 */
function FadeTransition(color, duration) {
    /**
     * @type {Number}
     * @private
     */
    this._color = color || 0x0;

    /**
     * @type {Number}
     * @private
     */
    this._duration = duration || 0.8;

    /**
     * @type {PIXI.Graphics}
     * @private
     */
    this._quad = null;

    Transition.call(this);
}
module.exports                              = FadeTransition;
FadeTransition.prototype                    = Object.create(Transition.prototype);
FadeTransition.prototype.constructor        = FadeTransition;

FadeTransition.prototype.init = function() {
    this._quad          = new PIXI.Graphics();
    this._quad.visible  = false;
    this._quad.beginFill(this._color);
    this._quad.drawRect(0.0, 0.0, p3.Canvas.width, p3.Canvas.height);
    this._quad.endFill();
    this.addChild(this._quad);
};

FadeTransition.prototype.in = function() {
    this._quad.alpha    = 0.0;
    this._quad.visible  = true;
    TweenMax.to(this._quad, this._duration * 0.5, {
        alpha: 1.0,
        ease: Power2.easeInOut,
        onComplete: function() {
            Transition.prototype.in.call(this, this);
        },
        onCompleteScope: this
    });
};

FadeTransition.prototype.out = function() {
    TweenMax.to(this._quad, this._duration * 0.5, {
        alpha: 0.0,
        ease: Power2.easeInOut,
        onComplete: function() {
            this._quad.visible = false;
            Transition.prototype.out.call(this, this);
        },
        onCompleteScope: this
    });
};

FadeTransition.prototype.resize = function() {
    this._quad.clear();
    this._quad.beginFill(this._color);
    this._quad.drawRect(0.0, 0.0, p3.Canvas.width, p3.Canvas.height);
    this._quad.endFill();
};
},{"./Common":6,"./Transition":33}],10:[function(require,module,exports){
/**
 *  GameScene
 *
 *  Created by Legman on 7/09/2015.
 *
 */

var Application     = require("./Application");
var Button          = require("./Button");
var Character       = require("./Character");
var CharacterType   = require("./CharacterType");
var Common          = require("./Common");
var Hud             = require("./Hud");
var Scene           = require("./Scene");
var Scenario1       = require("./Scenario1");
var Scenario2       = require("./Scenario2");
var Scenario3       = require("./Scenario3");
var Scenario4       = require("./Scenario4");
var Scenario5       = require("./Scenario5");
var Scenario6       = require("./Scenario6");
var Scenario7       = require("./Scenario7");

/**
 * @constructor
 */
function GameScene() {
    /**
     * @type {PIXI.Graphics}
     * @private
     */
    this._bg = null;

    /**
     * @type {Button}
     * @private
     */
    this._pauseButton = null;

    /**
     * @type {PIXI.Container}
     * @private
     */
    this._game = null;

    /**
     * @type {Hud}
     * @private
     */
    this._hud = null;

    /**
     * @type {p3.Timer}
     * @private
     */
    this._scenarioTimer = null;

    /**
     * @type {p3.Timer}
     * @private
     */
    this._popTimer = null;

    /**
     * @type {Array.<Character>}
     * @private
     */
    this._characters = [];

    /**
     * @type {Array.<String>}
     * @private
     */
    this._gangPool = null;

    /**
     * @type {Boolean}
     * @private
     */
    this._spooked = false;

    /**
     * @type {Boolean}
     * @private
     */
    this._waveActive = false;

    Scene.call(this);
}
module.exports                      = GameScene;
GameScene.prototype                 = Object.create(Scene.prototype);
GameScene.prototype.constructor     = GameScene;

GameScene.prototype.init = function() {
    this._game = new PIXI.Container();
    this.addChild(this._game);

    this._bg = new PIXI.Graphics();
    this._game.addChild(this._bg);

    var caveLeft = new PIXI.Sprite(Common.assetManager.getTexture("game_cave_left"));
    caveLeft.hitArea = new PIXI.Rectangle(0.0, 0.0, 0.0, 0.0);
    this._game.addChild(caveLeft);

    var caveRight = new PIXI.Sprite(Common.assetManager.getTexture("game_cave_right"));
    caveRight.x = Common.STAGE_WIDTH;
    caveRight.anchor.x = 1.0;
    caveRight.hitArea = new PIXI.Rectangle(0.0, 0.0, 0.0, 0.0);
    this._game.addChild(caveRight);

    this._pauseButton = new Button(
        Common.assetManager.getTexture("but_pause_def"),
        Common.assetManager.getTexture("but_pause_over"),
        Common.assetManager.getTexture("but_pause_pressed")
    );
    this._pauseButton.y = 100.0;
    this._pauseButton.animate = true;
    this._pauseButton.visible = false;
    this._pauseButton.init();
    this._pauseButton.signals.click.add(this.onPauseButtonClick, this);
    this._pauseButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._pauseButton);

    this._hud = new Hud();
    this._hud.init();
    this.addChild(this._hud);

    this._scenarioTimer = new p3.Timer(1.0, 1);
    this._scenarioTimer.signalTimerCompleted.add(this.runScenario, this);
    this._scenarioTimer.stop();

    this.start();
};

GameScene.prototype.dispose = function() {
    this._game.mousedown = this.touchstart = null;

    var character;
    for (var i = 0; i < this._characters.length; ++ i) {
        character = this._characters[i];
        character.dispose();
    }
    this._characters.length = 0;

    this._pauseButton.dispose();

    Common.animator.removeAll();
    TweenMax.killAll();

    Common.audioManager.stopSound("sfx_ghoul1");
    Common.audioManager.stopSound("sfx_ghoul2");
    Common.audioManager.stopSound("sfx_ghoul3");
    Common.audioManager.stopSound("sfx_ghoul4");
    Common.audioManager.stopSound("sfx_ghoul5");
    Common.audioManager.stopSound("sfx_ghoul6");
    Common.audioManager.stopSound("sfx_ghoul7");
    Common.audioManager.stopSound("sfx_ghoul8");

    Common.audioManager.stopSound("sfx_bats1");
    Common.audioManager.stopSound("sfx_bats2");
    Common.audioManager.stopSound("sfx_bats3");

    Scene.prototype.dispose.call(this);
};

GameScene.prototype.resize = function() {
    this.x                  = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;
    this._pauseButton.x     = (Common.STAGE_WIDTH + p3.Canvas.width) * 0.5 - 100.0;

    this._bg.clear();
    this._bg.beginFill(0x0);
    this._bg.drawRect((Common.STAGE_WIDTH - p3.Canvas.width) * 0.5, 0.0, p3.Canvas.width, p3.Canvas.height);
    this._bg.endFill();

    this._hud.resize();
};

GameScene.prototype.appear = function() {
    Common.animator.add(this._scenarioTimer);
    Common.animator.add(this._popTimer);

    this.animateIn();
    this.playBatAmbience();

    // show pause screen
    if (!Common.hasViewedTutorial) {
        Common.hasViewedTutorial = true;

        var that = this;
        setTimeout(function() {
            that.signals.pause.dispatch();
        }, 0.0);
    }
};

GameScene.prototype.show = function() {

};

GameScene.prototype.start = function() {
    console.log("started");
    this.nextScenario();

    Common.monsterCount = 0;

    this._game.interactive  = true;
    this._game.mousedown    = this._game.touchstart = this.onMouseDown.bind(this);
};

GameScene.prototype.runScenario = function() {
    console.log("started scenario");
    this._waveActive = true;

    var scenarios = [
        Scenario1,
        Scenario2,
        Scenario3,
        Scenario4,
        Scenario5,
        Scenario6,
        Scenario7
    ];
    var base                = scenarios[Math.floor(Math.random() * scenarios.length)];
    var scenario            = Object.create(base.prototype);
    scenario.constructer    = base;
    base.apply(scenario);
    scenario.create(this);
};

GameScene.prototype.nextScenario = function() {
    console.log("next scenario");
    this._waveActive = false;

    var character;
    for (var i = 0; i < this._characters.length; ++ i) {
        character = this._characters[i];
        character.parent.removeChild(character);
        character.dispose();
    }
    this._characters.length = 0;

    this._scenarioTimer.reset();
    this._scenarioTimer.start();

    this._gangPool = [
        CharacterType.DAPHNE,
        CharacterType.FRED,
        CharacterType.SCOOBY_DOO,
        CharacterType.SHAGGY,
        CharacterType.VELMA
    ];
};

/**
 * @param {!Character} target
 * @param {Number=} delay
 */
GameScene.prototype.popMonster = function(target, delay) {
    delay = delay || 0.0;
    Common.animator.setTimeout(function() {
        var position, angle;
        var center = new PIXI.Point(Common.STAGE_WIDTH * 0.5, 180.0);

        var attempts = 200;
        while (!position && attempts > 0) {
            angle       = Math.random() * Math.PI;
            position    = new PIXI.Point();
            position.x  = center.x + Math.cos(angle) * (Math.random() * 260.0);
            position.y  = center.y + Math.sin(angle) * (Math.random() * 140.0);

            var character, direction;
            for (var i = 0; i < this._characters.length; ++ i) {
                character = this._characters[i];
                if (character.monster) {
                    direction = new p3.Vector2(position.x - character.x, (position.y - (character.y - character.eyeHeight)));
                    if (direction.length < 80.0) {
                        position = null;
                        break;
                    }
                    -- attempts;
                }
            }
        }
        if (!position) return;

        var monster         = this.createRandomMonster();
        monster.x           = position.x;
        monster.y           = position.y + monster.eyeHeight;
        monster.scale.x     = Math.random() < 0.5 ? 1.0 : -1.0;
        monster.pop(target);
    }, delay, this);
};

GameScene.prototype.createRandomGang = function() {
    var index   = Math.floor(Math.random() * this._gangPool.length);
    var gang    = new Character(this._gangPool[index]);
    gang.y      = Common.FLOOR_HEIGHT;
    gang.init();
    this._game.addChildAt(gang, 1);
    this._characters.push(gang);
    this._gangPool.splice(index, 1);
    return gang;
};

GameScene.prototype.createRandomMonster = function() {
    var monsters = [
        CharacterType.MONSTER_1,
        CharacterType.MONSTER_2,
        CharacterType.MONSTER_3,
        CharacterType.MONSTER_4,
        CharacterType.MONSTER_5,
        CharacterType.MONSTER_6,
        CharacterType.MONSTER_7,
        CharacterType.MONSTER_8
    ];
    var monster     = new Character(monsters[Math.floor(Math.random() * monsters.length)]);
    monster.y       = Common.FLOOR_HEIGHT;
    monster.init();
    this._game.addChildAt(monster, 1);
    this._characters.push(monster);
    return monster;
};

GameScene.prototype.update = function() {
    if (Common.animator.paused) {
        return;
    }

    var character;
    for (var i = 0; i < this._characters.length; ++ i) {
        character = this._characters[i];
        character.update();
    }

    if (this._waveActive) {
        if (this.checkScenarioFinish()) {
            console.log("finished scenario");
            this.nextScenario();
        } else {
            if (!this._spooked) {
                this._spooked = this.checkGangSpook();
            }
            if (this._spooked) {
                this.signals.next.dispatch();
            }
        }
    }
};

GameScene.prototype.checkScenarioFinish = function() {
    var character;
    var count = 0;
    for (var i = 0; i < this._characters.length; ++ i) {
        character = this._characters[i];
        if (!character.monster && !(character.x > this.leftBound && character.x < this.rightBound)) {
            ++ count;
        } else if (character.hit) {
            ++ count;
        }
    }
    return count >= this._characters.length;
};

GameScene.prototype.checkGangSpook = function() {
    var gang, monster, direction;
    for (var i = 0; i < this._characters.length; ++ i) {
        gang = this._characters[i];
        if (!gang.monster) {
            for (var j = 0; j < this._characters.length; ++ j) {
                monster = this._characters[j];
                if (monster.monster && monster != gang) {
                    if (!monster.hit) {
                        direction = new p3.Vector2(monster.x - gang.x, monster.y - gang.y);
                        if (direction.length < Common.SPOOK_DISTANCE) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
GameScene.prototype.animateIn = function(callback, scope) {
    this._pauseButton.scale     = new PIXI.Point(0.0, 0.0);
    this._pauseButton.visible   = true;
    TweenMax.to(this._pauseButton.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    });
};

GameScene.prototype.playBatAmbience = function() {
    Common.animator.setTimeout(function() {
        var sounds = [
            "sfx_bats1",
            "sfx_bats2",
            "sfx_bats3"
        ];
        var sound = Common.audioManager.playSound(sounds[Math.floor(Math.random() * sounds.length)]);
        sound.pos3d(Math.random() < 0.5 ? 1.0 : -1.0);

        this.playBatAmbience();
    }, 4.0 + Math.random() * 8.0, this);
};

/**
 * @param {!Button} button
 */
GameScene.prototype.onPauseButtonClick = function(button) {
    this.signals.pause.dispatch();
};

/**
 * @param {!Button} button
 */
GameScene.prototype.onButtonRollOver = function(button) {
    Common.audioManager.playSound("sfx_rollover");
};

/**
 * @param {!Event}
 */
GameScene.prototype.onMouseDown = function(event) {
    var point = event.data.getLocalPosition(this);

    var hit = false;
    var character;
    var direction;
    for (var i = 0; i < this._characters.length; ++ i) {
        character = this._characters[i];
        if (!character.hit) {
            direction = new p3.Vector2(character.x - point.x, (character.y - character.eyeHeight) - point.y);
            if (direction.length < Common.CHARACTER_RADIUS * Math.abs(character.scale.x)) {
                hit = true;
                if (character.monster) {
                    this.hitMonster(character);
                } else {
                    this.hitGang(character);
                }
                break;
            }
        }
    }

    // we missed so play miss sound
    if (!hit) {
        var sounds = [
            "sfx_miss1",
            "sfx_miss2",
            "sfx_miss3"
        ];
        Common.audioManager.playSound(sounds[Math.floor(Math.random() * sounds.length)]);
    }
};

GameScene.prototype.hitGang = function(character) {
    if (!character.hit) {
        character.slap();
        Common.animator.setTimeout(function() {
            this._spooked = true;
        }, 1.4, this);

        var config = Common.assetManager.getJSON("burstgang");
        var emitter = new p3.ParticleSystem([
            Common.assetManager.getTexture("particle_001"),
            Common.assetManager.getTexture("particle_002"),
            Common.assetManager.getTexture("particle_003")
        ], config);
        emitter.x = character.x;
        emitter.y = character.y - character.eyeHeight;
        emitter.tint = character.eyeTint;
        emitter.oneShot();
        character.parent.addChild(emitter);
        Common.animator.add(emitter);

        Common.audioManager.playSound("sfx_hit_gang");
    }
};

/**
 * @param {!Character} character
 */
GameScene.prototype.hitMonster = function(character) {
    if (!character.hit) {
        character.slap();
        this._hud.updateMonsterCount(++ Common.monsterCount);

        var config = Common.assetManager.getJSON("burst");
        var emitter = new p3.ParticleSystem([
            Common.assetManager.getTexture("particle_001"),
            Common.assetManager.getTexture("particle_002"),
            Common.assetManager.getTexture("particle_003")
        ], config);
        emitter.x = character.x;
        emitter.y = character.y - character.eyeHeight;
        emitter.tint = character.eyeTint;
        emitter.oneShot();
        character.parent.addChild(emitter);
        Common.animator.add(emitter);

        var sounds = [
            "sfx_hit1",
            "sfx_hit2",
            "sfx_hit3"
        ];
        Common.audioManager.playSound(sounds[Math.floor(Math.random() * sounds.length)]);
    }
};

Object.defineProperty(GameScene.prototype, "gangCount", {
    /**
     * @returns {Number}
     */
    get: function() {
        var gang;
        var count = 0;
        for (var i = 0; i < this._characters.length; ++ i) {
            gang = this._characters[i];
            if (!gang.monster) {
                ++ count;
            }
        }
        return count;
    }
});

Object.defineProperty(GameScene.prototype, "monsterCount", {
    /**
     * @returns {Number}
     */
    get: function() {
        var monster;
        var count = 0;
        for (var i = 0; i < this._characters.length; ++ i) {
            monster = this._characters[i];
            if (monster.monster) {
                ++ count;
            }
        }
        return count;
    }
});

Object.defineProperty(GameScene.prototype, "leftBound", {
    /**
     * @returns {Number}
     */
    get: function() {
        return (Common.STAGE_WIDTH - 1024.0) * 0.5 - 100.0;
    }
});

Object.defineProperty(GameScene.prototype, "rightBound", {
    /**
     * @returns {Number}
     */
    get: function() {
        return (Common.STAGE_WIDTH + 1024.0) * 0.5 + 100.0;
    }
});

},{"./Application":2,"./Button":3,"./Character":4,"./CharacterType":5,"./Common":6,"./Hud":11,"./Scenario1":22,"./Scenario2":23,"./Scenario3":24,"./Scenario4":25,"./Scenario5":26,"./Scenario6":27,"./Scenario7":28,"./Scene":29}],11:[function(require,module,exports){
/**
 *  Hud
 *
 *  Created by Legman on 7/09/2015.
 *
 */

var Common      = require("./Common");

/**
 * @constructor
 */
function Hud() {
    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._panel = null;

    PIXI.Container.call(this);
}
module.exports              = Hud;
Hud.prototype               = Object.create(PIXI.Container.prototype);
Hud.prototype.constructor   = Hud;

Hud.prototype.init = function() {
    this._panel             = new PIXI.Sprite(PIXI.Texture.fromImage("score_box.png"));
    this._panel.y           = 104.0;
    this._panel.anchor      = new PIXI.Point(0.5, 0.5);
    this.addChild(this._panel);

    var atlas = Common.assetManager.getFontAtlas("helvetical_40_condensedbold_green");
    this._panel.text = new p3.BitmapText("0", atlas, p3.BitmapText.ALIGN_CENTER);
    this._panel.text.x = 38.0;
    this._panel.text.y = -26.0;
    this._panel.addChild(this._panel.text);
};

Hud.prototype.dispose = function() {
};

Hud.prototype.resize = function() {
    this._panel.x = (Common.STAGE_WIDTH - p3.Canvas.width) * 0.5 + 152.0;
};

Hud.prototype.updateMonsterCount = function(value) {
    this._panel.text.text = value.toString();

    var timeline = new TimelineMax();
    timeline.append(TweenMax.to(this._panel.scale, 0.1, {
        x: 1.2,
        y: 1.2,
        ease: Power0.easeOut
    }));
    timeline.append(TweenMax.to(this._panel.scale, 0.2, {
        x: 1.0,
        y: 1.0,
        ease: Power1.easeOut
    }));
};
},{"./Common":6}],12:[function(require,module,exports){
/**
 *  IntroScene1
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var AnimationScene  = require("./AnimationScene");
var Common          = require("./Common");

/**
 * @constructor
 */
function IntroScene1() {
    AnimationScene.call(this);

    /**
     * @type {p3.Camera}
     * @private
     */
    this._camera = null;

    /**
     * @type {PIXI.Container}
     * @private
     */
    this._layer1 = null;

    /**
     * @type {PIXI.DisplayObject}
     * @private
     */
    this._van = null;

    /**
     * @type {p3.MovieClip}
     * @private
     */
    this._comet = null;

    /**
     * @type {Array.<p3.MovieClip>}
     * @private
     */
    this._stars = null;

    /**
     * @type {PIXI.Point}
     * @private
     */
    this._focus = new PIXI.Point(0.0, 0.0);
}
module.exports                      = IntroScene1;
IntroScene1.prototype               = Object.create(AnimationScene.prototype);
IntroScene1.prototype.constructor   = IntroScene1;

IntroScene1.prototype.init = function() {
    this._camera            = new p3.Camera();
    this._camera.trackEase  = 1.0;
    this._camera.trackTarget(this._focus, true);

    this._layer1 = new PIXI.Container();
    this.addChild(this._layer1);
    this._camera.addLayer("layer1", this._layer1, new PIXI.Point(1.0, 1.0));

    var bg = new PIXI.Sprite(Common.assetManager.getTexture("desert_road"));
    this._layer1.addChild(bg);

    this._van       = new PIXI.Container();
    this._van.x     = 0.0;
    this._van.y     = 504.0;
    this._layer1.addChild(this._van);

    this._van.chassis           = new PIXI.Sprite(Common.assetManager.getTexture("van_small"));
    this._van.chassis.anchor    = new PIXI.Point(0.5, 0.5);
    this._van.addChild(this._van.chassis);

    this._van.wheels            = new PIXI.Sprite(Common.assetManager.getTexture("van_small_wheels"));
    this._van.wheels.x          = -139.0;
    this._van.wheels.y          = 19.0;
    this._van.wheels.anchor     = new PIXI.Point(0.5, 0.5);
    this._van.addChildAt(this._van.wheels, 0);

    var frames = [];
    for (var i = 0; i < 30; ++ i) {
        frames.push(Common.assetManager.getTexture("comet_" + p3.Utils.padNumber(i + 1, 4)));
    }
    var sequence = new p3.MovieClipSequence();
    sequence.addTextures(frames, "default");
    this._comet                 = new p3.MovieClip(sequence, "default");
    this._comet.x               = 860.0;
    this._comet.y               = 200.0;
    this._comet.rotation        = -6.0 * PIXI.DEG_TO_RAD;
    this._comet.anchor          = new PIXI.Point(0.5, 0.5);
    this._comet.animationSpeed  = 0.9;
    this._layer1.addChild(this._comet);

    frames = [];
    for (i = 0; i < 20; ++ i) {
        frames.push(Common.assetManager.getTexture("star_" + p3.Utils.padNumber(i + 1, 4)));
    }

    var positions = [
        new PIXI.Point(600.0, 120.0),
        new PIXI.Point(1000.0, 40.0),
        new PIXI.Point(1400.0, 220.0)
    ];

    var star;
    this._stars = [];
    for (i = 0; i < positions.length; ++ i) {
        sequence = new p3.MovieClipSequence();
        sequence.addTextures(frames, "default");
        star                    = new p3.MovieClip(sequence, "default");
        star.x                  = positions[i].x;
        star.y                  = positions[i].y;
        star.animationSpeed     = 1.0 / 2.0;
        star.looping            = true;
        star.gotoAndPlay(Math.floor(Math.random() * frames.length));
        this._layer1.addChild(star);
        this._stars.push(star);
    }

    AnimationScene.prototype.init.call(this);
};

IntroScene1.prototype.dispose = function() {
    AnimationScene.prototype.dispose.call(this);

    Common.animator.removeAll();
    TweenMax.killAll();
};

IntroScene1.prototype.resize = function() {
    AnimationScene.prototype.resize.call(this);

    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;
};

IntroScene1.prototype.appear = function() {
    AnimationScene.prototype.appear.call(this);

    // van left to right
    var to          = 1600.0;
    var from        = -240.0;
    var speed       = 400.0;
    var distance    = (to - from);
    var duration    = (distance / speed);
    this._van.x     = from;
    Common.animator.add(TweenMax.to(this._van, duration, {
        x: to,
        ease: Power0.easeNone,
        onComplete: function() {
            this.next();
        },
        onCompleteScope: this
    }));

    // van engine
    Common.animator.add(TweenMax.to(this._van.chassis, 0.06, {
        y: this._van.chassis.y - 1.4,
        ease: Power0.easeNone,
        yoyo: true,
        repeat: -1
    }));

    // camera focus point
    Common.animator.add(TweenMax.to(this._focus, 4.0, {
        delay: 1.4,
        x: 160.0,
        ease: Power2.easeInOut
    }));

    Common.animator.setTimeout(function() {
        this._comet.play();
    }, 3.0, this);

    Common.audioManager.playSound("sfx_scene1");
};

IntroScene1.prototype.hide = function() {
    AnimationScene.prototype.hide.call(this);

    Common.audioManager.stopSound("sfx_scene1");
};

IntroScene1.prototype.update = function() {
    AnimationScene.prototype.update.call(this);

    this._camera.update();
};

},{"./AnimationScene":1,"./Common":6}],13:[function(require,module,exports){
/**
 *  IntroScene2
 *
 *  Created by Legman on 10/09/2015.
 *
 */

var AnimationScene  = require("./AnimationScene");
var Common          = require("./Common");

/**
 * @constructor
 */
function IntroScene2() {
    AnimationScene.call(this);

    /**
     * @type {PIXI.DisplayObject}
     * @private
     */
    this._van = null;
}
module.exports                      = IntroScene2;
IntroScene2.prototype               = Object.create(AnimationScene.prototype);
IntroScene2.prototype.constructor   = IntroScene2;

IntroScene2.prototype.init = function() {
    var bg = new PIXI.Sprite(Common.assetManager.getTexture("cave_entrance"));
    this.addChild(bg);

    this._van       = new PIXI.Container();
    this._van.y     = 520.0;
    this.addChild(this._van);

    this._van.chassis   = new PIXI.Sprite(Common.assetManager.getTexture("van_big_running"));
    this._van.anchor    = new PIXI.Point(0.5, 0.5);
    this._van.addChild(this._van.chassis);

    this._van.lights        = new PIXI.Sprite(Common.assetManager.getTexture("van_big_light"));
    this._van.lights.x      = 600.0;
    this._van.lights.y      = 136.0;
    this._van.lights.anchor = new PIXI.Point(0.5, 0.5);
    this._van.addChildAt(this._van.lights, 0);

    var frames = [];
    for (i = 0; i < 20; ++ i) {
        frames.push(Common.assetManager.getTexture("star_" + p3.Utils.padNumber(i + 1, 4)));
    }

    var positions = [
        new PIXI.Point(800.0, 80.0),
        new PIXI.Point(1200.0, 240.0)
    ];

    var star, sequence;
    this._stars = [];
    for (i = 0; i < positions.length; ++ i) {
        sequence = new p3.MovieClipSequence();
        sequence.addTextures(frames, "default");
        star                    = new p3.MovieClip(sequence, "default");
        star.x                  = positions[i].x;
        star.y                  = positions[i].y;
        star.animationSpeed     = 1.0 / 2.0;
        star.looping            = true;
        star.gotoAndPlay(Math.floor(Math.random() * frames.length));
        this.addChild(star);
        this._stars.push(star);
    }

    var caveLeft = new PIXI.Sprite(Common.assetManager.getTexture("cave_entrance_left"));
    this.addChild(caveLeft);

    var caveRight       = new PIXI.Sprite(Common.assetManager.getTexture("cave_entrance_right"));
    caveRight.x         = Common.STAGE_WIDTH;
    caveRight.anchor.x  = 1.0;
    this.addChild(caveRight);

    AnimationScene.prototype.init.call(this);
};

IntroScene2.prototype.dispose = function() {
    AnimationScene.prototype.dispose.call(this);

    Common.animator.removeAll();
    TweenMax.killAll();
};

IntroScene2.prototype.resize = function() {
    AnimationScene.prototype.resize.call(this);

    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;
};

IntroScene2.prototype.appear = function() {
    this._skipButton.visible = true;
    this._homeButton.visible = true;

    // van left to right
    var to          = 520.0;
    var from        = -240.0;
    var speed       = 340.0;
    var distance    = (to - from);
    var duration    = (distance / speed);
    this._van.x     = from;
    Common.animator.add(TweenMax.to(this._van, duration, {
        x: to,
        ease: Power3.easeOut,
        onComplete: function() {
            this._van.chassis.texture   = Common.assetManager.getTexture("van_big_stopped");
            this._van.lights.visible    = false;

            Common.animator.setTimeout(function() {
                this.next();
            }, 1.2, this);
        },
        onCompleteScope: this
    }));

    Common.audioManager.playSound("sfx_scene2");
};

IntroScene2.prototype.hide = function() {
    AnimationScene.prototype.hide.call(this);

    Common.audioManager.stopSound("sfx_scene2");
};

},{"./AnimationScene":1,"./Common":6}],14:[function(require,module,exports){
/**
 *  IntroScene3
 *
 *  Created by Legman on 10/09/2015.
 *
 */

var AnimationScene  = require("./AnimationScene");
var Common          = require("./Common");

/**
 * @constructor
 */
function IntroScene3() {
    AnimationScene.call(this);

    /**
     * @type {PIXI.Container}
     * @private
     */
    this._characters = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._fred = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._daphne = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._velma = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._shaggy = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._scooby = null;

    /**
     * @type {PIXI.Graphics}
     */
    this._darkness = null;
}
module.exports                      = IntroScene3;
IntroScene3.prototype               = Object.create(AnimationScene.prototype);
IntroScene3.prototype.constructor   = IntroScene3;

IntroScene3.prototype.init = function() {
    var bg = new PIXI.Sprite(Common.assetManager.getTexture("cave_inside_walk"));
    this.addChild(bg);

    this._characters    = new PIXI.Container();
    this._characters.x  = Common.STAGE_WIDTH * 0.5;
    this._characters.y  = p3.Canvas.height + 20.0;
    this.addChild(this._characters);

    this._daphne = new PIXI.Sprite(Common.assetManager.getTexture("dafne_walking"));
    this._daphne.anchor = new PIXI.Point(0.0, 1.0);
    this._characters.addChild(this._daphne);

    this._fred          = new PIXI.Sprite(Common.assetManager.getTexture("fred_walking"));
    this._fred.x        = 80.0;
    this._fred.anchor   = new PIXI.Point(0.0, 1.0);
    this._characters.addChild(this._fred);

    this._velma         = new PIXI.Sprite(Common.assetManager.getTexture("velma_walking"));
    this._velma.x       = -140.0;
    this._velma.anchor  = new PIXI.Point(0.0, 1.0);
    this._characters.addChild(this._velma);

    this._shaggy        = new PIXI.Sprite(Common.assetManager.getTexture("shaggy_walking"));
    this._shaggy.x      = -280.0;
    this._shaggy.anchor = new PIXI.Point(0.0, 1.0);
    this._characters.addChild(this._shaggy);

    this._scooby        = new PIXI.Sprite(Common.assetManager.getTexture("Scooby_walking"));
    this._scooby.x      = -360.0;
    this._scooby.anchor = new PIXI.Point(0.0, 1.0);
    this._characters.addChild(this._scooby);

    this._darkness          = new PIXI.Graphics();
    this._darkness.visible  = false;
    this.addChild(this._darkness);

    AnimationScene.prototype.init.call(this);
};

IntroScene3.prototype.dispose = function() {
    AnimationScene.prototype.dispose.call(this);

    Common.animator.removeAll();
    TweenMax.killAll();
};

IntroScene3.prototype.resize = function() {
    AnimationScene.prototype.resize.call(this);

    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;

    this._darkness.clear();
    this._darkness.beginFill(0x0);
    this._darkness.drawRect((Common.STAGE_WIDTH - p3.Canvas.width) * 0.5, 0.0, p3.Canvas.width, p3.Canvas.height);
    this._darkness.endFill();
};

IntroScene3.prototype.appear = function() {
    this._skipButton.visible = true;
    this._homeButton.visible = true;

    var to              = Common.STAGE_WIDTH * 0.5 + 600.0;
    var from            = Common.STAGE_WIDTH * 0.5 - 400.0;
    var speed           = 260.0;
    var distance        = (to - from);
    var duration        = (distance / speed);
    this._characters.x  = from;
    Common.animator.add(TweenMax.to(this._characters, duration, {
        x: to,
        ease: Power0.easeNone,
        onComplete: function() {
            this.next();
        },
        onCompleteScope: this
    }));

    this._darkness.alpha    = 0.0;
    this._darkness.visible  = true;
    Common.animator.add(TweenMax.to(this._darkness, 0.4, {
        delay: duration - 0.4,
        alpha: 1.0,
        ease: Power1.easeInOut
    }));

    duration    = 0.18;
    var height  = 14.0;
    Common.animator.add(TweenMax.to(this._fred, duration, {
        y: this._fred.y - height,
        ease: Power1.easeOut,
        yoyo: true,
        repeat: -1
    }));

    duration    = 0.14;
    height      = 10.0;
    Common.animator.add(TweenMax.to(this._daphne, duration, {
        y: this._daphne.y - height,
        ease: Power1.easeOut,
        yoyo: true,
        repeat: -1
    }));

    duration    = 0.12;
    height      = 8.0;
    Common.animator.add(TweenMax.to(this._velma, duration, {
        y: this._velma.y - height,
        ease: Power1.easeOut,
        yoyo: true,
        repeat: -1
    }));

    duration    = 0.16;
    height      = 12.0;
    Common.animator.add(TweenMax.to(this._shaggy, duration, {
        y: this._shaggy.y - height,
        ease: Power1.easeOut,
        yoyo: true,
        repeat: -1
    }));

    duration    = 0.13;
    height      = 14.0;
    Common.animator.add(TweenMax.to(this._scooby, duration, {
        y: this._scooby.y - height,
        ease: Power1.easeOut,
        yoyo: true,
        repeat: -1
    }));

    Common.audioManager.playSound("sfx_scene3");
};

IntroScene3.prototype.hide = function() {
    AnimationScene.prototype.hide.call(this);

    Common.audioManager.stopSound("sfx_scene3");
};

IntroScene3.prototype.update = function() {
    AnimationScene.prototype.update.call(this);
};

},{"./AnimationScene":1,"./Common":6}],15:[function(require,module,exports){
/**
 *  IntroScene4
 *
 *  Created by Legman on 10/09/2015.
 *
 */

var AnimationScene  = require("./AnimationScene");
var Common          = require("./Common");

/**
 * @constructor
 */
function IntroScene4() {
    AnimationScene.call(this);

    /**
     * @type {PIXI.DisplayObject}
     * @private
     */
    this._dark = null;

    /**
     * @type {PIXI.DisplayObject}
     * @private
     */
    this._light = null;

    /**
     * @type {PIXI.Graphics}
     * @private
     */
    this._overlay = null;

    /**
     * @type {PIXI.Graphics}
     * @private
     */
    this._cutout = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._fred = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._daphne = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._velma = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._shaggy = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._scooby = null;
}
module.exports                      = IntroScene4;
IntroScene4.prototype               = Object.create(AnimationScene.prototype);
IntroScene4.prototype.constructor   = IntroScene4;

IntroScene4.prototype.init = function() {
    this._dark = new PIXI.Sprite(Common.assetManager.getTexture("cave_inside_dark"));
    this.addChild(this._dark);

    this._light = new PIXI.Sprite(Common.assetManager.getTexture("cave_inside_light"));
    this.addChild(this._light);

    this._cutout      = new PIXI.Graphics();
    this._cutout.x    = Common.STAGE_WIDTH * 0.5 + 94.0;
    this._cutout.y    = Common.STAGE_HEIGHT * 0.5;
    this._cutout.beginFill(0xFF0000);
    this._cutout.drawCircle(0.0, 0.0, 200.0);
    this._cutout.endFill();
    this.addChild(this._cutout);

    this._light.mask = this._cutout;

    this._fred          = new PIXI.Sprite(Common.assetManager.getTexture("eyes_fred_def"));
    this._fred.x        = 1046.0;
    this._fred.y        = 286.0;
    this._fred.scale    = new PIXI.Point(0.3, 0.3);
    this._fred.anchor   = new PIXI.Point(0.5, 0.5);
    this._fred.visible  = false;
    this.addChild(this._fred);

    this._daphne            = new PIXI.Sprite(Common.assetManager.getTexture("eyes_daphne_def"));
    this._daphne.x          = 946.0;
    this._daphne.y          = 326.0;
    this._daphne.scale      = new PIXI.Point(0.3, 0.3);
    this._daphne.anchor     = new PIXI.Point(0.5, 0.5);
    this._daphne.visible    = false;
    this.addChild(this._daphne);

    this._velma             = new PIXI.Sprite(Common.assetManager.getTexture("eyes_velma_default"));
    this._velma.x           = 998.0;
    this._velma.y           = 348.0;
    this._velma.scale       = new PIXI.Point(0.3, 0.3);
    this._velma.anchor      = new PIXI.Point(0.5, 0.5);
    this._velma.visible     = false;
    this.addChild(this._velma);

    this._shaggy            = new PIXI.Sprite(Common.assetManager.getTexture("eyes_shaggy_def"));
    this._shaggy.x          = 1188.0;
    this._shaggy.y          = 348.0;
    this._shaggy.scale      = new PIXI.Point(-0.3, 0.3);
    this._shaggy.anchor     = new PIXI.Point(0.5, 0.5);
    this._shaggy.visible    = false;
    this.addChild(this._shaggy);

    this._scooby            = new PIXI.Sprite(Common.assetManager.getTexture("eyes_scooby_default"));
    this._scooby.x          = 1178.0;
    this._scooby.y          = 310.0;
    this._scooby.scale      = new PIXI.Point(0.3, 0.3);
    this._scooby.anchor     = new PIXI.Point(0.5, 0.5);
    this._scooby.visible    = false;
    this.addChild(this._scooby);

    AnimationScene.prototype.init.call(this);
};

IntroScene4.prototype.dispose = function() {
    AnimationScene.prototype.dispose.call(this);

    Common.animator.removeAll();
    TweenMax.killAll();
};

IntroScene4.prototype.resize = function() {
    AnimationScene.prototype.resize.call(this);

    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;
};

IntroScene4.prototype.appear = function() {
    this._skipButton.visible = true;
    this._homeButton.visible = true;

    this._light.alpha = 0.0;
    TweenMax.to(this._light, 0.2, {
        delay: 0.4,
        alpha: 1.0,
        ease: Power2.easeInOut,
    });
    this._dark.alpha = 0.0;
    TweenMax.to(this._dark, 0.2, {
        delay: 0.4,
        alpha: 1.0,
        ease: Power2.easeInOut
    });

    var timeline = new TimelineMax();
    Common.animator.add(timeline);

    timeline.append(TweenMax.to(this._cutout, 0.5, {
        delay: 1.0,
        x: this._cutout.x - 480.0,
        y: this._cutout.y + 40.0,
        ease: Power3.easeOut,
        onStart: function() {
            Common.audioManager.playSound("sfx_torchwave");
        }
    }));
    timeline.append(TweenMax.to(this._cutout, 0.5, {
        delay: 0.4,
        x: this._cutout.x + 380.0,
        y: this._cutout.y - 80.0,
        ease: Power3.easeOut,
        onStart: function() {
            Common.audioManager.playSound("sfx_torchwave");
        }
    }));
    timeline.append(TweenMax.to(this._cutout, 0.5, {
        delay: 0.4,
        x: this._cutout.x,
        y: this._cutout.y,
        ease: Power3.easeOut,
        onStart: function() {
            Common.audioManager.playSound("sfx_torchwave");
        }
    }));

    timeline.vars.onComplete = function() {
        var timeline = new TimelineMax();
        Common.animator.add(timeline);

        timeline.append(TweenMax.to(this._light, 0.3, {
            alpha: 0.0,
            ease: Power3.easeInOut,
            onComplete: function() {
                this._light.alpha = 0.5;
            },
            onCompleteScope: this
        }));
        timeline.append(TweenMax.to(this._light, 0.2, {
            alpha: 0.0,
            ease: Power3.easeInOut,
            onComplete: function() {
                this._light.alpha = 1.0;
            },
            onCompleteScope: this
        }));

        timeline = new TimelineMax();
        Common.animator.add(timeline);

        timeline.append(TweenMax.to(this._dark, 0.3, {
            alpha: 0.0,
            ease: Power3.easeInOut,
            onComplete: function() {
                this._dark.alpha = 0.5;
                Common.audioManager.playSound("sfx_torchdinkette");
            },
            onCompleteScope: this
        }));
        timeline.append(TweenMax.to(this._dark, 0.2, {
            alpha: 0.0,
            ease: Power3.easeInOut,
            onComplete: function() {
                this._dark.alpha = 1.0;
                Common.audioManager.playSound("sfx_torchdinkette");
            },
            onCompleteScope: this
        }));
        timeline.append(TweenMax.delayedCall(0.3, function() {
            this._light.visible     = false;
            this._dark.visible      = false;

            this._fred.visible      = true;
            this._daphne.visible    = true;
            this._velma.visible     = true;
            this._shaggy.visible    = true;
            this._scooby.visible    = true;

            Common.animator.setTimeout(function() {
                this.next();
            }, 1.0, this);

            Common.audioManager.playSound("sfx_torchdink");
        }, [], this));
    };
    timeline.vars.onCompleteScope = this;

    Common.audioManager.playSound("sfx_scene4");
};

IntroScene4.prototype.hide = function() {
    AnimationScene.prototype.hide.call(this);

    Common.audioManager.stopSound("sfx_scene4");
};

},{"./AnimationScene":1,"./Common":6}],16:[function(require,module,exports){
/**
 *  Main
 *
 *  Created by Legman on 4/9/2015.
 *
 */

var Application         = require("./Application");
var Common              = require("./Common");
var PreloaderScene      = require("./PreloaderScene");
var SceneManager        = require("./SceneManager");

/**
 * @param {!Number} width
 * @param {!Number} height
 * @constructor
 */
function Main(width, height) {
    /**
     * @type {!Number}
     * @private
     */
    this._width = width;

    /**
     * @type {!Number}
     * @private
     */
    this._height = height;

	/**
	 * @type {Application}
	 * @private
	 */
	this._game = null;
}
window.Main = Main;

/**
 */
Main.prototype.init = function() {
    var params = new p3.Canvas.Params();
    params.width = this._width;
    params.height = this._height;
    params.holderID = "game";
    params.rotateImageSrc = "./rotate_device.jpg";
    params.rotateImageBackgroundColor = "#000000";

    PIXI.RETINA_PREFIX = /\_(?=[^_]*$)(.+)x/;

    p3.Device.init(window["bowser"]);

    TweenMax.defaultOverwrite = "none";
    TweenMax.ticker.fps(60);

    Common.language = p3.Utils.getURLParameter("lang", "gb");

    Common.assetManager = p3.AssetManager.instance;
    Common.audioManager = p3.AudioManager.instance;

    var canvas = new p3.Canvas(params);
    canvas.signalReady.addOnce(function() {
        var options                     = {};
        options.view                    = p3.Canvas.canvasElement;
        options.transparent             = false;
        options.antialias               = false;
        options.preserveDrawingBuffer   = false;
        options.resolution              = 1.0;

        var stage       = new PIXI.Container();
        Common.stage    = stage;

        var renderer                = PIXI.autoDetectRenderer(this._width, this._height, options);
        renderer.backgroundColor    = 0x0;
        Common.renderer             = renderer;
        Common.isWebGL              = (renderer instanceof PIXI.WebGLRenderer);

        var sceneManager = new SceneManager();
        sceneManager.init(stage, renderer);
        Common.sceneManager = sceneManager;

        var frameInterval   = 1;
        var timestep        = new p3.Timestep(frameInterval);
        timestep.init(this.update, this.render, this);
        Common.timestep = timestep;

        Common.animator = new p3.Animator();
        Common.animator.init();

        this.loadPreloader();
    }, this);
    canvas.signalChange.add(this.onCanvasResize, this);
    canvas.init();
};

/**
 */
Main.prototype.loadPreloader = function() {
    var scale = (Common.renderer.resolution >= 1.0 ? "hd/" : "sd/");
    var prefix = (scale === "sd/" ? "_0.5x" : "");
    var files = [
        {name: "cn",            url: "images/" + scale + "cn"           + prefix + ".jpg"},
        {name: "preloader",     url: "images/" + scale + "preloader"    + prefix + ".json"}
    ];
    var sounds = [];
    if (files.length) {
        Common.assetManager.addFiles(files, "assets/");
        Common.assetManager.signalCompleted.addOnce(function() {
            this.loadAssets();
        }, this);
        Common.assetManager.load();

        p3.AudioManager.instance.addSounds(sounds, [".mp3", ".ogg"], "");
    } else {
        this.loadAssets();
    }
};

/**
 */
Main.prototype.loadAssets = function() {
    var scale = (Common.renderer.resolution >= 1.0 ? "hd/" : "sd/");
    var prefix = (scale === "sd/" ? "_0.5x" : "");
    var files = [
        {name: "desert_road",           url: "images/"  + scale + "desert_road"         + prefix + ".jpg"},
        {name: "cave_entrance",         url: "images/"  + scale + "cave_entrance"       + prefix + ".jpg"},
        {name: "cave_inside_light",     url: "images/"  + scale + "cave_inside_light"   + prefix + ".jpg"},
        {name: "cave_inside_dark",      url: "images/"  + scale + "cave_inside_dark"    + prefix + ".jpg"},
        {name: "cave_inside_walk",      url: "images/"  + scale + "cave_inside_walk"    + prefix + ".jpg"},
        {name: "ui_splash",             url: "images/"  + scale + "ui_splash"           + prefix + ".jpg"},
        {name: "gameover",              url: "images/"  + scale + "gameover"            + prefix + ".jpg"},
        {name: "transition",            url: "images/"  + scale + "transition"          + prefix + ".png"},
        {name: "game",                  url: "images/"  + scale + "game"                + prefix + ".json"},
        {name: "ui",                    url: "images/"  + scale + "ui"                  + prefix + ".json"},
        {name: "help",                  url: "images/"  + scale + "help"                + prefix + ".json"},
        {name: "intro",                 url: "images/"  + scale + "intro"               + prefix + ".json"},
        {name: "outro",                 url: "images/"  + scale + "outro"               + prefix + ".json"},

        {name: "burst",         url: "particles/burst"      + ".json"},
        {name: "burstgang",     url: "particles/burstgang"  + ".json"},
        {name: "copy",          url: "data/copy"            + ".json"}
    ];
    switch (Common.language) {
        case "gb" :
        case "fr" :
        case "de" :
        case "it" : {
            files = files.concat([
                {name: "helvetical_40_condensedbold_green",     url: "fonts/helvetical_40_condensedbold_green"      + ".json"},
                {name: "youngfrankenstein_46_orange",           url: "fonts/youngfrankenstein_30_orange"            + ".json"},
                {name: "youngfrankenstein_60_title",            url: "fonts/youngfrankenstein_60_title"             + ".json"},
                {name: "youngfrankenstein_74_orange",           url: "fonts/youngfrankenstein_74_orange"            + ".json"}
            ]);
            break;
        }
        case "pl" :
        case "ru" : {
            files = files.concat([
                {name: "helvetical_40_condensedbold_green",     url: "fonts/helvetical_40_condensedbold_green"      + ".json"},
                {name: "youngfrankenstein_46_orange",           url: "fonts/pt_sans_cyrillic_22_orange"             + ".json"},
                {name: "youngfrankenstein_60_title",            url: "fonts/pt_sans_cyrillic_60_title"              + ".json"},
                {name: "youngfrankenstein_74_orange",           url: "fonts/pt_sans_cyrillic_74_orange"             + ".json"}
            ]);
        }
    }

    var sounds = [
        "music_cave",
        "music_menu",
        "music_loop",
        "sfx_bats1",
        "sfx_bats2",
        "sfx_bats3",
        "sfx_blink1",
        "sfx_blink2",
        "sfx_blink3",
        "sfx_footsteps_gang1",
        "sfx_footsteps_gang2",
        "sfx_footsteps_gang3",
        "sfx_footsteps_ghoul1",
        "sfx_footsteps_ghoul2",
        "sfx_footsteps_ghoul3",
        "sfx_ghoul1",
        "sfx_ghoul2",
        "sfx_ghoul3",
        "sfx_ghoul4",
        "sfx_ghoul5",
        "sfx_ghoul6",
        "sfx_ghoul7",
        "sfx_ghoul8",
        "sfx_hit1",
        "sfx_hit2",
        "sfx_hit3",
        "sfx_hit_gang",
        "sfx_miss1",
        "sfx_miss2",
        "sfx_miss3",
        "sfx_press",
        "sfx_rollover",
        "sfx_scene1",
        "sfx_scene2",
        "sfx_scene3",
        "sfx_scene4",
        "sfx_scoobhuh_reverb",
        "sfx_scoobysting",
        "sfx_torchdink",
        "sfx_torchdinkette",
        "sfx_torchwave"
    ];
    if (files.length) {
        Common.assetManager.addFiles(files, "assets/");
        Common.assetManager.signalProgress.add(this.onLoadingProgress, this);
        Common.assetManager.signalCompleted.addOnce(this.onLoadingCompleted, this);
        Common.assetManager.load();

        this._preloader = new PreloaderScene();
        Common.sceneManager.add(this._preloader);

        Common.audioManager.addSounds(sounds, [".mp3", ".ogg"], "assets/audio/");
    } else {
        this.startGame();
    }
};

/**
 */
Main.prototype.startGame = function() {
    this._game = new Application();
    this._game.init();
};

/**
 */
Main.prototype.update = function() {
    Common.sceneManager.update();
    Common.animator.update();
};

/**
 */
Main.prototype.render = function() {
    Common.renderer.render(Common.stage);
};

/**
 */
Main.prototype.onLoadingProgress = function(event) {
    this._preloader.loaded = event.progress / 100.0;
};

/**
 */
Main.prototype.onLoadingCompleted = function() {
    this._preloader.loaded = 1.0;
    this._preloader.animateOut();

    Common.copy = Common.assetManager.getJSON("copy");

    Common.animator.setTimeout(function() {
        Common.assetManager.signalProgress.removeAll();
        Common.assetManager.signalCompleted.removeAll();

        this.startGame();
    }, 0.4, this);
};

/**
 * @param {!Boolean} correct
 */
Main.prototype.onCanvasResize = function(correct) {
    if (correct) {
        Common.renderer.resize(p3.Canvas.width, p3.Canvas.height);
        if (Common.sceneManager) {
            Common.sceneManager.resize();
        }
    }
};

},{"./Application":2,"./Common":6,"./PreloaderScene":20,"./SceneManager":30}],17:[function(require,module,exports){
/**
 *  MuteButton
 *
 *  Created by Legman on 16/09/2015.
 *
 */

var Button  = require("./Button");

/**
 * @param {!PIXI.Texture} onNormalTexture
 * @param {!PIXI.Texture} offNormalTexture
 * @param {PIXI.Texture=} onOverTexture
 * @param {PIXI.Texture=} offOverTexture
 * @param {PIXI.Texture=} onDownTexture
 * @param {PIXI.Texture=} offDownTexture
 * @param {PIXI.Texture=} onDisabledTexture
 * @param {PIXI.Texture=} offDisabledTexture
 * @constructor
 */
function MuteButton(
    onNormalTexture,
    offNormalTexture,
    onOverTexture,
    offOverTexture,
    onDownTexture,
    offDownTexture,
    onDisabledTexture,
    offDisabledTexture
) {
    var audio = p3.AudioManager.instance;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._onNormalTexture = onNormalTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._offNormalTexture = offNormalTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._onOverTexture = onOverTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._offOverTexture = offOverTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._onDownTexture = onDownTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._offDownTexture = offDownTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._onDisabledTexture = onDisabledTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._offDisabledTexture = offDisabledTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._normalTexture = audio.isMute ? offNormalTexture : onNormalTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._overTexture = audio.isMute ? offOverTexture : onOverTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._downTexture = audio.isMute ? offOverTexture : onDownTexture;

    /**
     * @type {PIXI.Texture}
     * @private
     */
    this._disabledTexture = audio.isMute ? offDisabledTexture : onDisabledTexture;

    Button.call(
        this,
        this._normalTexture,
        this._overTexture,
        this._downTexture,
        this._disabledTexture
    );
}
module.exports                      = MuteButton;
MuteButton.prototype                = Object.create(Button.prototype);
MuteButton.prototype.constructor    = MuteButton;

/**
 * @param {!Event} event
 */
MuteButton.prototype.onMouseClick = function(event) {
    var audio = p3.AudioManager.instance;
    audio.mute(!audio.isMute);

    this._normalTexture     = audio.isMute ? this._offNormalTexture    : this._onNormalTexture;
    this._overTexture       = audio.isMute ? this._offOverTexture      : this._onOverTexture;
    this._downTexture       = audio.isMute ? this._offDownTexture      : this._onDownTexture;
    this._disabledTexture   = audio.isMute ? this._offDisabledTexture  : this._onDisabledTexture;

    Button.prototype.onMouseClick.call(this, event);
};

},{"./Button":3}],18:[function(require,module,exports){
/**
 *  OutroScene
 *
 *  Created by Legman on 14/09/2015.
 *
 */

var AnimationScene  = require("./AnimationScene");
var Common          = require("./Common");
var Character       = require("./Character");

/**
 * @constructor
 */
function OutroScene() {
    AnimationScene.call(this);

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._left = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._right = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._middle = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._monster = null;
}
module.exports                      = OutroScene;
OutroScene.prototype                = Object.create(AnimationScene.prototype);
OutroScene.prototype.constructor    = OutroScene;

OutroScene.prototype.init = function() {
    var bg = new PIXI.Sprite(Common.assetManager.getTexture("gameover"));
    this.addChild(bg);

    var monsters = [
        "gameover_monster1",
        "gameover_monster2",
        "gameover_monster3",
        "gameover_monster4",
        "gameover_monster5"
    ];
    this._monster           = new PIXI.Sprite(Common.assetManager.getTexture(monsters[Math.floor(Math.random() * monsters.length)]));
    this._monster.x         = Common.STAGE_WIDTH * 0.5;
    this._monster.y         = 420.0;
    this._monster.anchor    = new PIXI.Point(0.5, 0.5);
    this.addChild(this._monster);

    this._left          = new PIXI.Sprite(Common.assetManager.getTexture("gameover_gang_left"));
    this._left.x        = Common.STAGE_WIDTH * 0.5;
    this._left.y        = 600.0;
    this._left.anchor   = new PIXI.Point(1.0, 0.5);
    this.addChild(this._left);

    this._right         = new PIXI.Sprite(Common.assetManager.getTexture("gameover_gang_right"));
    this._right.x       = Common.STAGE_WIDTH * 0.5;
    this._right.y       = 600.0;
    this._right.anchor  = new PIXI.Point(0.0, 0.5);
    this.addChild(this._right);

    this._middle            = new PIXI.Sprite(Common.assetManager.getTexture("gameover_gang_fred"));
    this._middle.x          = Common.STAGE_WIDTH * 0.5;
    this._middle.y          = 760.0;
    this._middle.anchor     = new PIXI.Point(0.5, 0.9);
    this.addChild(this._middle);

    AnimationScene.prototype.init.call(this);
};

OutroScene.prototype.dispose = function() {
    AnimationScene.prototype.dispose.call(this);

    Common.animator.removeAll();
    TweenMax.killAll();
};

OutroScene.prototype.resize = function() {
    AnimationScene.prototype.resize.call(this);

    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;
};

OutroScene.prototype.appear = function() {
    AnimationScene.prototype.appear.call(this);

    this._skipButton.visible = false;
    this._homeButton.visible = false;

    this._left.scale = new PIXI.Point(0.4, 0.4);
    TweenMax.to(this._left.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Power2.easeOut
    });

    this._right.scale = new PIXI.Point(0.4, 0.4);
    TweenMax.to(this._right.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Power2.easeOut
    });

    this._middle.scale = new PIXI.Point(0.6, 0.6);
    TweenMax.to(this._middle.scale, 0.6, {
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    });

    this._monster.scale = new PIXI.Point(0.5, 0.5);
    TweenMax.to(this._monster.scale, 0.4, {
        delay: 0.4,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        onStart: function() {
            Character.playMonsterSound();
        },
        onComplete: function() {
            Common.animator.setTimeout(function() {
                this.signals.next.dispatch();

                TweenMax.to(this._left, 0.4, {
                    alpha: 0.0,
                    ease: Power1.easeInOut
                });
                TweenMax.to(this._right, 0.4, {
                    alpha: 0.0,
                    ease: Power1.easeInOut
                });
                TweenMax.to(this._middle, 0.4, {
                    alpha: 0.0,
                    ease: Power1.easeInOut
                });
                TweenMax.to(this._monster, 0.4, {
                    alpha: 0.0,
                    ease: Power1.easeInOut
                });
            }, 0.4, this);
        },
        onCompleteScope: this
    });

    this._monster.alpha = 0.0;
    TweenMax.to(this._monster, 0.2, {
        delay: 0.4,
        alpha: 1.0,
        ease: Power2.easeInOut
    });

    Common.audioManager.playSound("sfx_scoobysting");
    Common.animator.setTimeout(function() {
        Common.playMenuMusic();
    }, 8.0, this);
};

},{"./AnimationScene":1,"./Character":4,"./Common":6}],19:[function(require,module,exports){
/**
 *  PauseScene
 *
 *  Created by Legman on 7/09/2015.
 *
 */

var Common      = require("./Common");
var Button      = require("./Button");
var MuteButton  = require("./MuteButton");
var Scene       = require("./Scene");
var Transition  = require("./Transition");

/**
 * @constructor
 */
function PauseScene() {
    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._overlay = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._panel = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._best = null;

    /**
     * @type {Button}
     * @private
     */
    this._playButton = null;

    /**
     * @type {Button}
     * @private
     */
    this._homeButton = null;

    /**
     * @type {MuteButton}
     * @private
     */
    this._soundButton = null;

    Scene.call(this);
}
module.exports = PauseScene;
PauseScene.prototype                 = Object.create(Scene.prototype);
PauseScene.prototype.constructor     = PauseScene;

PauseScene.prototype.init = function() {
    this._overlay = new PIXI.Graphics();
    this.addChild(this._overlay);

    this._panel         = new PIXI.Sprite(Common.assetManager.getTexture("pop_up"));
    this._panel.x       = Common.STAGE_WIDTH * 0.5;
    this._panel.y       = Common.STAGE_HEIGHT * 0.5 + 40.0;
    this._panel.anchor  = new PIXI.Point(0.5, 0.5);
    this.addChild(this._panel);

    var atlas           = Common.assetManager.getFontAtlas("helvetical_40_condensedbold_green");
    this._panel.text    = new p3.BitmapText(Common.copy["instructions"][Common.language], atlas, p3.BitmapText.ALIGN_CENTER);
    this._panel.text.x  = 0.0;
    this._panel.text.y  = -200.0;
    this._panel.addChild(this._panel.text);

    this._panel.image           = new PIXI.Sprite(Common.assetManager.getTexture("ui_tutorial"));
    this._panel.image.y         = 20.0;
    this._panel.image.anchor    = new PIXI.Point(0.5, 0.5);
    this._panel.addChild(this._panel.image);

    this._best          = new PIXI.Sprite(Common.assetManager.getTexture("best_score"));
    this._best.x        = this._panel.x;
    this._best.y        = this._panel.y -294.0;
    this._best.anchor   = new PIXI.Point(0.5, 0.5);
    this._best.visible  = false;
    this.addChildAt(this._best, this._panel.parent.getChildIndex(this._panel));

    atlas                   = Common.assetManager.getFontAtlas("youngfrankenstein_46_orange");
    this._best.text         = new p3.BitmapText(Common.copy["best"][Common.language], atlas, p3.BitmapText.ALIGN_CENTER);
    this._best.text.text    = this._best.text.text.replace("[SCORE]", Common.saveScore());
    this._best.text.x       = 0.0;
    this._best.text.y       = -16.0;
    this._best.addChild(this._best.text);

    this._playButton = new Button(
        Common.assetManager.getTexture("but_play_def"),
        Common.assetManager.getTexture("but_play_over"),
        Common.assetManager.getTexture("but_play_pressed")
    );
    this._playButton.x = 6.0;
    this._playButton.y = 180.0;
    this._playButton.init();
    this._playButton.signals.click.add(this.onPlayButtonClick, this);
    this._playButton.signals.over.add(this.onButtonRollOver, this);
    this._panel.addChild(this._playButton);

    this._homeButton = new Button(
        Common.assetManager.getTexture("but_home_def"),
        Common.assetManager.getTexture("but_home_over"),
        Common.assetManager.getTexture("but_home_pressed")
    );
    this._homeButton.y = 100.0;
    this._homeButton.animate = true;
    this._homeButton.init();
    this._homeButton.signals.click.add(this.onHomeButtonClick, this);
    this._homeButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._homeButton);

    this._soundButton = new MuteButton(
        Common.assetManager.getTexture("but_sound_on_def"),
        Common.assetManager.getTexture("but_sound_off_def"),
        Common.assetManager.getTexture("but_sound_on_over"),
        Common.assetManager.getTexture("but_sound_off_over"),
        Common.assetManager.getTexture("but_sound_on_pressed"),
        Common.assetManager.getTexture("but_sound_off_pressed")
    );
    this._soundButton.y = 100.0;
    this._soundButton.animate = true;
    this._soundButton.init();
    this._soundButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._soundButton);
};

PauseScene.prototype.dispose = function() {
    this._playButton.dispose();
    this._homeButton.dispose();
    this._soundButton.dispose();

    Scene.prototype.dispose.call(this);
};

PauseScene.prototype.resize = function() {
    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;

    this._overlay.clear();
    this._overlay.beginFill(0x0, 0.5);
    this._overlay.drawRect(
        (Common.STAGE_WIDTH - p3.Canvas.width) * 0.5,
        0.0,
        p3.Canvas.width,
        p3.Canvas.height
    );
    this._overlay.endFill();

    this._homeButton.x = (Common.STAGE_WIDTH - p3.Canvas.width) * 0.5 + 100.0;
    this._soundButton.x = (Common.STAGE_WIDTH + p3.Canvas.width) * 0.5 - 100.0;
};

PauseScene.prototype.appear = function() {
    this.animateIn();
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
PauseScene.prototype.animateIn = function(callback, scope) {
    var timeline                    = new TimelineMax();
    timeline.vars.onComplete        = callback;
    timeline.vars.onCompleteScope   = scope;

    var delay = 0.1;

    this._overlay.alpha = 0.0;
    timeline.insert(TweenMax.to(this._overlay, 0.2, {
        alpha: 1.0,
        ease: Power1.easeInOut
    }));

    this._panel.scale = new PIXI.Point(0.0, 0.0);
    timeline.insert(TweenMax.to(this._panel.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [1.0],
        onComplete: function() {
            this._best.y = this._panel.y - 294.0 + this._best.height;
            this._best.visible = true;
            TweenMax.to(this._best, 0.3, {
                y: this._panel.y - 294.0,
                ease: Power2.easeInOut
            });
        },
        onCompleteScope: this
    }));

    this._homeButton.scale = new PIXI.Point(0.0, 0.0);
    timeline.insert(TweenMax.to(this._homeButton.scale, 0.4, {
        delay: delay,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    }));

    this._soundButton.scale = new PIXI.Point(0.0, 0.0);
    timeline.insert(TweenMax.to(this._soundButton.scale, 0.4, {
        delay: delay * 2,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    }));
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
PauseScene.prototype.animateOut = function(callback, scope) {
    var timeline                    = new TimelineMax();
    timeline.vars.onComplete        = callback;
    timeline.vars.onCompleteScope   = scope;

    timeline.insert(TweenMax.to(this._overlay, 0.2, {
        alpha: 0.0,
        ease: Power1.easeInOut
    }));

    timeline.insert(TweenMax.to(this._panel.scale, 0.4, {
        x: 0.0,
        y: 0.0,
        ease: Back.easeIn,
        easeParams: [1.0]
    }));

    timeline.insert(TweenMax.to(this._best, 0.2, {
        alpha: 0.0,
        ease: Power1.easeInOut
    }));

    timeline.insert(TweenMax.to(this._homeButton.scale, 0.4, {
        x: 0.0,
        y: 0.0,
        ease: Back.easeIn,
        easeParams: [2.0]
    }));

    timeline.insert(TweenMax.to(this._soundButton.scale, 0.4, {
        x: 0.0,
        y: 0.0,
        ease: Back.easeIn,
        easeParams: [2.0]
    }));
};

/**
 * @param {!Button} button
 */
PauseScene.prototype.onPlayButtonClick = function(button) {
    this.animateOut(function() {
        this.signals.next.dispatch();
    }, this);

    Common.audioManager.playSound("sfx_press");
};

/**
 * @param {!Button} button
 */
PauseScene.prototype.onHomeButtonClick = function(button) {
    this.signals.home.dispatch();

    Common.audioManager.playSound("sfx_press");
};

/**
 * @param {!Button} button
 */
PauseScene.prototype.onButtonRollOver = function(button) {
    Common.audioManager.playSound("sfx_rollover");
};

},{"./Button":3,"./Common":6,"./MuteButton":17,"./Scene":29,"./Transition":33}],20:[function(require,module,exports){
/**
 *  PreloaderScene
 *
 *  Created by Legman on 14/09/2015.
 *
 */

var Common      = require("./Common");
var Button      = require("./Button");
var Scene       = require("./Scene");

/**
 * @constructor
 */
function PreloaderScene() {
    Scene.call(this);

    /**
     * @type {signals.Signal}
     */
    this.signals.skip = new signals.Signal();

    /**
     * @type {PIXI.Graphics}
     * @private
     */
    this._bg = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._preloader = null;

    /**
     * @type {p3.MovieClip}
     * @private
     */
    this._animation = null;

    /**
     * @type {Number}
     * @private
     */
    this._loaded = 0.0;
}
module.exports                          = PreloaderScene;
PreloaderScene.prototype                = Object.create(Scene.prototype);
PreloaderScene.prototype.constructor    = PreloaderScene;

PreloaderScene.prototype.init = function() {
    this._bg = new PIXI.Graphics();
    this.addChild(this._bg);

    this._preloader             = new PIXI.Sprite(Common.assetManager.getTexture("preloader_bg"));
    this._preloader.x           = Common.STAGE_WIDTH * 0.5;
    this._preloader.y           = 520.0;
    this._preloader.anchor      = new PIXI.Point(0.5, 0.5);
    this.addChild(this._preloader);

    this._preloader.bar             = new PIXI.Sprite(Common.assetManager.getTexture("preloader_bar"));
    this._preloader.bar.x           = -this._preloader.bar.width * 0.5;
    this._preloader.bar.y           = 0.0;
    this._preloader.bar.scale.x     = 0.0;
    this._preloader.bar.anchor      = new PIXI.Point(0.0, 0.5);
    this._preloader.addChild(this._preloader.bar);

    this._preloader.overlay         = new PIXI.Sprite(Common.assetManager.getTexture("preloader_overlay"));
    this._preloader.overlay.x       = 0.0;
    this._preloader.overlay.y       = 0.0;
    this._preloader.overlay.anchor  = new PIXI.Point(0.5, 0.5);
    this._preloader.addChild(this._preloader.overlay);

    var sequence = new p3.MovieClipSequence();
    sequence.addTextures([
        Common.assetManager.getTexture("loader_animation0001"),
        Common.assetManager.getTexture("loader_animation0002"),
        Common.assetManager.getTexture("loader_animation0003"),
        Common.assetManager.getTexture("loader_animation0004"),
        Common.assetManager.getTexture("loader_animation0005"),
        Common.assetManager.getTexture("loader_animation0006"),
        Common.assetManager.getTexture("loader_animation0007"),
        Common.assetManager.getTexture("loader_animation0008"),
        Common.assetManager.getTexture("loader_animation0009"),
        Common.assetManager.getTexture("loader_animation0010")
    ], "default");

    this._animation                 = new p3.MovieClip(sequence, "default");
    this._animation.x               = Common.STAGE_WIDTH * 0.5 + 54.0;
    this._animation.y               = 220.0;
    this._animation.anchor          = new PIXI.Point(0.5, 0.5);
    this._animation.animationSpeed  = 1.0 / 5.0;
    this.addChild(this._animation);
};

PreloaderScene.prototype.dispose = function() {
    Scene.prototype.dispose.call(this);
};

PreloaderScene.prototype.resize = function() {
    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;

    this._bg.clear();
    this._bg.beginFill(0x882F88);
    this._bg.drawRect((Common.STAGE_WIDTH - p3.Canvas.width) * 0.5, 0.0, p3.Canvas.width, p3.Canvas.height);
    this._bg.endFill();
};

PreloaderScene.prototype.appear = function() {
    this.animateIn(null);
};

PreloaderScene.prototype.update = function() {
    this._preloader.bar.scale.x += (this._loaded - this._preloader.bar.scale.x) * 0.2;
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
PreloaderScene.prototype.animateOut = function(callback, scope) {
    this._animation.signalAnimationFinished.addOnce(function() {
        Scene.prototype.animateOut.call(this, callback, scope);
    }, this);
    this._animation.gotoAndPlay("default");
};

Object.defineProperty(PreloaderScene.prototype, "loaded", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._loaded;
    },
    /**
     * @param {!Number} value
     */
    set: function(value) {
        this._loaded = value;
    }
});

},{"./Button":3,"./Common":6,"./Scene":29}],21:[function(require,module,exports){
/**
 *  Scenario
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Common      = require("./Common");

/**
 * @constructor
 */
function Scenario() {
}
module.exports = Scenario;

/**
 * @param {!GameScene} game
 */
Scenario.prototype.create = function(game) {
    // override
};

},{"./Common":6}],22:[function(require,module,exports){
/**
 *  Scenario1
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Character   = require("./Character");
var Common      = require("./Common");
var GameScene   = require("./GameScene");
var Scenario    = require("./Scenario");

/**
 * @constructor
 */
function Scenario1() {
    Scenario.call(this);
}
module.exports                      = Scenario1;
Scenario1.prototype                 = Object.create(Scenario.prototype);
Scenario1.prototype.constructor     = Scenario1;

/**
 * @param {!GameScene} game
 */
Scenario1.prototype.create = function(game) {
    var startx      = 0.0;
    var direction   = Math.random() < 0.5 ? 1 : -1;
    if (direction == 1) {
        startx = game.leftBound;
    } else if (direction == -1) {
        startx = game.rightBound;
    }

    var gang        = game.createRandomGang();
    gang.x          = startx;

    var monster     = game.createRandomMonster();
    monster.x       = startx + Common.SPOOK_DISTANCE * -direction;

    // gang animation
    gang.move(direction);
    Common.animator.setTimeout(function() {
        Common.audioManager.playSound("sfx_scoobhuh_reverb");
    }, 0.0, this);

    // monster animation
    Common.animator.setTimeout(function() {
        monster.move(direction);
        Character.playMonsterSound();
    }, 1.4, this);

    game.popMonster(gang, 0.2);
    game.popMonster(gang, 2.2);
};
},{"./Character":4,"./Common":6,"./GameScene":10,"./Scenario":21}],23:[function(require,module,exports){
/**
 *  Scenario2
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Character   = require("./Character");
var Common      = require("./Common");
var GameScene   = require("./GameScene");
var Scenario    = require("./Scenario");

/**
 * @constructor
 */
function Scenario2() {
    Scenario.call(this);
}
module.exports                      = Scenario2;
Scenario2.prototype                 = Object.create(Scenario.prototype);
Scenario2.prototype.constructor     = Scenario2;

/**
 * @param {!GameScene} game
 */
Scenario2.prototype.create = function(game) {
    var startx      = 0.0;
    var direction   = Math.random() < 0.5 ? 1 : -1;
    if (direction == 1) {
        startx = game.leftBound;
    } else if (direction == -1) {
        startx = game.rightBound;
    }

    var gang        = game.createRandomGang();
    gang.x          = startx;

    var monster     = game.createRandomMonster();
    monster.x       = startx + Common.SPOOK_DISTANCE * -direction;

    // gang animation
    gang.move(direction, 800.0);
    gang.signals.moved.addOnce(function() {
        gang.look(1);
        Common.animator.setTimeout(function() {
            gang.move(direction * -1, 200.0);
            gang.signals.moved.addOnce(function() {
                Common.animator.setTimeout(function() {
                    gang.look(1);
                    Common.animator.setTimeout(function() {
                        gang.look(-1, true, true);
                        Common.animator.setTimeout(function() {
                            gang.move(direction);
                        }, 1.0, this);
                    }, 0.5, this);
                }, 1.0, this);
            }, this);
        }, 2.0, this);
    }, this);

    // monster animation
    Common.animator.setTimeout(function() {
        monster.move(direction);
        Character.playMonsterSound();
    }, 8.0, this);

    game.popMonster(gang, 1.0);
    game.popMonster(gang, 2.4);
    game.popMonster(gang, 6.0);
    game.popMonster(gang, 7.4);
};
},{"./Character":4,"./Common":6,"./GameScene":10,"./Scenario":21}],24:[function(require,module,exports){
/**
 *  Scenario3
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Character   = require("./Character");
var Common      = require("./Common");
var GameScene   = require("./GameScene");
var Scenario    = require("./Scenario");

/**
 * @constructor
 */
function Scenario3() {
    Scenario.call(this);
}
module.exports                      = Scenario3;
Scenario3.prototype                 = Object.create(Scenario.prototype);
Scenario3.prototype.constructor     = Scenario3;

/**
 * @param {!GameScene} game
 */
Scenario3.prototype.create = function(game) {
    var startx      = 0.0;
    var direction   = Math.random() < 0.5 ? 1 : -1;
    if (direction == 1) {
        startx = game.leftBound;
    } else if (direction == -1) {
        startx = game.rightBound;
    }

    var gang        = game.createRandomGang();
    gang.x          = startx;

    var monster         = game.createRandomMonster();
    monster.x           = gang.x + 800.0 * direction;
    monster.scale.x     = -direction;
    monster.visible     = false;

    // gang animation
    gang.move(direction, 600.0);
    gang.signals.moved.addOnce(function() {
        gang.look(direction, true, true);
        Common.animator.setTimeout(function() {
            gang.move(-direction);
        }, 0.5, this);

        // monster animation
        monster.visible = true;
        Common.animator.setTimeout(function() {
            monster.move(-direction);
            Character.playMonsterSound();
        }, 0.7, this);
    }, this);

    game.popMonster(gang, 1.0);
    game.popMonster(gang, 2.2);
    game.popMonster(gang, 3.4);
};
},{"./Character":4,"./Common":6,"./GameScene":10,"./Scenario":21}],25:[function(require,module,exports){
/**
 *  Scenario4
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Character   = require("./Character");
var Common      = require("./Common");
var GameScene   = require("./GameScene");
var Scenario    = require("./Scenario");

/**
 * @constructor
 */
function Scenario4() {
    Scenario.call(this);
}
module.exports                      = Scenario4;
Scenario4.prototype                 = Object.create(Scenario.prototype);
Scenario4.prototype.constructor     = Scenario4;

/**
 * @param {!GameScene} game
 */
Scenario4.prototype.create = function(game) {
    var gang1   = game.createRandomGang();
    gang1.x     = game.leftBound;

    var gang2   = game.createRandomGang();
    gang2.x     = game.rightBound;

    var monster1    = game.createRandomMonster();
    monster1.x      = game.leftBound - Common.SPOOK_DISTANCE - 100.0;

    var monster2    = game.createRandomMonster();
    monster2.x      = game.rightBound + Common.SPOOK_DISTANCE + 100.0;

    gang1.move(1, 540);
    Common.animator.setTimeout(function() {
        gang2.move(-1, 540);
        gang2.signals.moved.addOnce(function() {
            gang1.look(1, true);
            gang2.look(-1, true);

            Common.animator.setTimeout(function() {
                gang1.look(-1, true, true);
                gang2.look(-1, true);
                monster1.move(1);
                Character.playMonsterSound();
            }, 1.0);

            Common.animator.setTimeout(function() {
                gang1.look(1, true, true);
                gang2.look(1, true);
                monster2.move(-1);
                Character.playMonsterSound();
            }, 3.0);

            Common.animator.setTimeout(function() {
                gang1.move(-1);
                gang2.move(1);
            }, 6.0);
        }, this);
    }, 0.2, this);

    game.popMonster(gang1, 0.4);
    game.popMonster(gang2, 1.8);
    game.popMonster(gang1, 3.2);

    game.popMonster(gang2, 5.4);
    game.popMonster(gang1, 5.8);
};

},{"./Character":4,"./Common":6,"./GameScene":10,"./Scenario":21}],26:[function(require,module,exports){
/**
 *  Scenario5
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Character   = require("./Character");
var Common      = require("./Common");
var GameScene   = require("./GameScene");
var Scenario    = require("./Scenario");

/**
 * @constructor
 */
function Scenario5() {
    Scenario.call(this);
}
module.exports                      = Scenario5;
Scenario5.prototype                 = Object.create(Scenario.prototype);
Scenario5.prototype.constructor     = Scenario5;

/**
 * @param {!GameScene} game
 */
Scenario5.prototype.create = function(game) {
    var direction   = Math.random() < 0.5 ? 1 : -1;
    var gang        = game.createRandomGang();
    gang.x          = Common.STAGE_WIDTH * 0.5;

    var monster1        = game.createRandomMonster();
    monster1.x          = gang.x - 280.0;
    monster1.visible    = false;

    var monster2        = game.createRandomMonster();
    monster2.x          = gang.x + 280.0;
    monster2.scale.x    = -1.0;
    monster2.visible    = false;

    Common.animator.setTimeout(function() {
        monster1.visible = true;
        monster2.visible = true;
        gang.look(1, true, true);
        Common.animator.setTimeout(function() {
            gang.look(-1, true);
            Common.animator.setTimeout(function() {
                gang.move(direction);
            }, 4.0, this);
        }, 0.5, this);
    }, 1.0, this);

    Common.animator.setTimeout(function() {
        monster1.move(1);
        Character.playMonsterSound();
    }, 2.0, this);

    Common.animator.setTimeout(function() {
        monster2.move(-1);
        Character.playMonsterSound();
    }, 2.4, this);

    game.popMonster(gang, 2.0);
    game.popMonster(gang, 4.0);
    game.popMonster(gang, 5.0);
};

},{"./Character":4,"./Common":6,"./GameScene":10,"./Scenario":21}],27:[function(require,module,exports){
/**
 *  Scenario6
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Character   = require("./Character");
var Common      = require("./Common");
var GameScene   = require("./GameScene");
var Scenario    = require("./Scenario");

/**
 * @constructor
 */
function Scenario6() {
    Scenario.call(this);
}
module.exports                      = Scenario6;
Scenario6.prototype                 = Object.create(Scenario.prototype);
Scenario6.prototype.constructor     = Scenario6;

/**
 * @param {!GameScene} game
 */
Scenario6.prototype.create = function(game) {
    var direction   = Math.random() < 0.5 ? 1 : -1;
    var gang1       = game.createRandomGang();
    if (direction == 1) {
        gang1.x = game.leftBound;
    } else if (direction == -1) {
        gang1.x = game.rightBound;
    }

    var gang2 = game.createRandomGang();
    gang2.x = gang1.x - 180.0 * direction;

    gang1.signals.moved.addOnce(function() {
        gang1.look(direction, true, true);
        Common.animator.setTimeout(function() {
            gang1.move(direction);
        }, 7.0, this);
    }, this);
    gang1.move(direction, 720.0);

    gang2.signals.moved.addOnce(function() {
        gang2.look(direction * -1, true, false);
        Common.animator.setTimeout(function() {
            gang2.move(direction);
        }, 7.0, this);
    }, this);
    gang2.move(direction, 720.0);

    game.popMonster(gang1, 1.0);
    game.popMonster(gang2, 1.8);
    game.popMonster(gang2, 4.0);
    game.popMonster(gang1, 4.8);

    var monster1        = game.createRandomMonster();
    monster1.x          = game.leftBound - 280.0;
    var monster2        = game.createRandomMonster();
    monster2.x          = game.rightBound + 280.0;
    var monster3        = game.createRandomMonster();
    monster3.x          = game.leftBound - 280.0;
    var monster4        = game.createRandomMonster();
    monster4.x          = game.rightBound + 280.0;

    Common.animator.setTimeout(function() {
        monster1.move(1);
        Character.playMonsterSound();
    }, 5.0, this);
    Common.animator.setTimeout(function() {
        monster2.move(-1);
        Character.playMonsterSound();
    }, 5.6, this);
    Common.animator.setTimeout(function() {
        monster3.move(1);
        Character.playMonsterSound();
    }, 6.2, this);
    Common.animator.setTimeout(function() {
        monster4.move(-1);
        Character.playMonsterSound();
    }, 6.8, this);
};

},{"./Character":4,"./Common":6,"./GameScene":10,"./Scenario":21}],28:[function(require,module,exports){
/**
 *  Scenario7
 *
 *  Created by Legman on 9/09/2015.
 *
 */

var Character   = require("./Character");
var Common      = require("./Common");
var GameScene   = require("./GameScene");
var Scenario    = require("./Scenario");

/**
 * @constructor
 */
function Scenario7() {
    Scenario.call(this);
}
module.exports                      = Scenario7;
Scenario7.prototype                 = Object.create(Scenario.prototype);
Scenario7.prototype.constructor     = Scenario7;

/**
 * @param {!GameScene} game
 */
Scenario7.prototype.create = function(game) {
    var direction   = Math.random() < 0.5 ? 1 : -1;
    var gang1       = game.createRandomGang();
    if (direction == 1) {
        gang1.x = game.leftBound;
    } else if (direction == -1) {
        gang1.x = game.rightBound;
    }

    var gang2   = game.createRandomGang();
    gang2.x     = gang1.x - 180.0 * direction;

    var gang3   = game.createRandomGang();
    gang3.x     = gang2.x - 180.0 * direction;

    gang1.signals.moved.addOnce(function() {
        gang1.look(direction, true, true);
        Common.animator.setTimeout(function() {
            gang1.move(direction);
        }, 4.8, this);
    }, this);
    gang1.move(direction, 770.0);

    gang2.signals.moved.addOnce(function() {
        Common.animator.setTimeout(function() {
            gang2.move(direction);
        }, 4.8, this);
    }, this);
    gang2.move(direction, 770.0);

    gang3.signals.moved.addOnce(function() {
        gang3.look(direction * -1, true, false);
        Common.animator.setTimeout(function() {
            gang3.move(direction);
        }, 4.8, this);
    }, this);
    gang3.move(direction, 770.0);

    var monster1 = game.createRandomMonster();
    if (direction == 1) {
        monster1.x = game.rightBound + 280.0;
    } else if (direction == -1) {
        monster1.x = game.leftBound - 280.0;
    }

    var monster2    = game.createRandomMonster();
    monster2.x      = monster1.x;

    Common.animator.setTimeout(function() {
        monster1.move(-direction);
        Character.playMonsterSound();
    }, 0.4, this);
    Common.animator.setTimeout(function() {
        monster2.move(-direction);
        Character.playMonsterSound();
    }, 1.2, this);


    game.popMonster(gang3, 3.0);
    game.popMonster(gang2, 3.8);
    game.popMonster(gang2, 4.6);

    var monster3    = game.createRandomMonster();
    monster3.x      = monster1.x;

    Common.animator.setTimeout(function() {
        monster3.move(-direction);
        Character.playMonsterSound();
    }, 3.4, this);

    Common.animator.setTimeout(function() {
        var monster4 = game.createRandomMonster();
        if (direction == 1) {
            monster4.x = game.leftBound - 280.0;
        } else if (direction == -1) {
            monster4.x = game.rightBound + 280.0;
        }
        monster4.move(direction);
        Character.playMonsterSound();
    }, 4.0, this);

    game.popMonster(gang1, 5.4);
    game.popMonster(gang3, 6.2);
};

},{"./Character":4,"./Common":6,"./GameScene":10,"./Scenario":21}],29:[function(require,module,exports){
/**
 *  Scene
 *
 *  Created by Legman on 4/09/2015.
 *
 */

/**
 * @constructor
 */
function Scene() {
    this.signals            = {};
    this.signals.next       = new signals.Signal();
    this.signals.previous   = new signals.Signal();
    this.signals.home       = new signals.Signal();
    this.signals.pause      = new signals.Signal();

    PIXI.Container.call(this);
}
module.exports                  = Scene;
Scene.prototype                 = Object.create(PIXI.Container.prototype);
Scene.prototype.constructor     = Scene;

/**
 * This method is called when a scene is initialized.
 */
Scene.prototype.init = function() {
    // override
};

/**
 * This method is called when a scene is destroyed.
 */
Scene.prototype.dispose = function() {
    this.signals.next.dispose();
    this.signals.previous.dispose();
    this.signals.home.dispose();
    this.signals.pause.dispose();

    this.removeChildren();
};

/**
 * This method is called when the device dimensions are changed.
 */
Scene.prototype.resize = function() {
    // override
};

/**
 * This method is called when the scene is 'top' of the stack.
 */
Scene.prototype.update = function() {
    // override
};

/**
 * This method is called when the scene is shown for the first time.
 */
Scene.prototype.appear = function() {
    this.animateIn();
};

/**
 * This method is called when the scene is shown - regardless of actual visibility.
 */
Scene.prototype.show = function() {
    this.animateIn();
};

/**
 * This method is called when the scene is hidden - regardless of actual visibility.
 */
Scene.prototype.hide = function() {
    // override
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
Scene.prototype.animateIn = function(callback, scope) {
    scope = scope || window;
    if (callback) {
        callback.call(scope);
    }
};

/**
 * @param {!Function} callback
 * @param {*=} scope
 */
Scene.prototype.animateOut = function(callback, scope) {
    scope = scope || window;
    if (callback) {
        callback.call(scope);
    }
};
},{}],30:[function(require,module,exports){
/**
 *  SceneManager
 *
 *  Created by Legman on 4/09/2015.
 *
 */

var Scene       = require("./Scene");
var Transition  = require("./Transition");

/**
 * @constructor
 */
function SceneManager() {
    /**
     * @type {PIXI.DisplayObject}
     * @private
     */
    this._stage = null;

    /**
     * @type {PIXI.CanvasRenderer | PIXI.WebGLRenderer}
     * @private
     */
    this._renderer = null;

    /**
     * @type {Array.<Scene>}
     * @private
     */
    this._stack = [];

    /**
     * @type {Transition}
     * @private
     */
    this._transition = null;
}
module.exports = SceneManager;

/**
 * @param {!PIXI.DisplayObject} stage
 * @param {!PIXI.CanvasRenderer | !PIXI.WebGLRenderer} renderer
 */
SceneManager.prototype.init = function(stage, renderer) {
    this._stage         = stage;
    this._renderer      = renderer;
};

/**
 */
SceneManager.prototype.update = function() {
    if (this._stack.length) {
        this.top.update();
    }
};

/**
 * @param {!Scene} scene
 * @param {Transition=} transition
 */
SceneManager.prototype.add = function(scene, transition) {
    if (this.transitionInProgress) return;

    this._transition = transition || new Transition();
    if (this._transition.requiresWebGL && !(this._renderer instanceof PIXI.WebGLRenderer)) {
        this._transition            = transition.fallback();
        this._transition.push       = transition.push;
        this._transition.replace    = transition.replace;
        this._transition.wait       = transition.wait;
    }
    this._transition.init();
    this._stage.addChild(this._transition);

    this._transition.signals.in.addOnce(function(transition) {
        p3.Timestep.queueCall(swap, [scene], this);
    }, this);
    this._transition.signals.out.addOnce(function(transition) {
        this._transition = null;

        transition.parent.removeChild(transition);
        transition.dispose();

        if (transition.wait) {
            p3.Timestep.queueCall(scene.appear, null, scene);
        }
    }, this);
    this._transition.in();

    function swap(scene) {
        if (this.top) {
            this.top.hide();
            if (!this._transition.push) {
                while (this.top) {
                    this.top.parent.removeChild(this.top);
                    this.top.dispose();
                    this._stack.pop();
                }
            } else if (this._transition.replace) {
                var temp;
                for (var i = 0; i < this._stack.length; ++ i) {
                    temp = this._stack[i];
                    if (temp.parent) {
                        temp.parent.removeChild(temp);
                    }
                }
            }
        }

        scene.init();
        scene.resize();
        if (!scene.parent) {
            this.stage.addChildAt(scene, this._transition.parent.getChildIndex(this._transition));
        }
        this._stack.push(scene);

        if (!this._transition.wait) {
            p3.Timestep.queueCall(scene.appear, null, scene);
        }
        this._transition.out();

        console.log(this._stack);
    }
};

/**
 * @param {Transition=} transition
 * @param {Number=} count
 */
SceneManager.prototype.remove = function(transition, count) {
    if (this.transitionInProgress) return;

    this._transition    = transition || new Transition();
    count               = Math.max(1, count) || 1;
    if (this._transition.requiresWebGL && !(this._renderer instanceof PIXI.WebGLRenderer)) {
        this._transition            = transition.fallback();
        this._transition.push       = transition.push;
        this._transition.replace    = transition.replace;
        this._transition.wait       = transition.wait;
    }
    this._transition.init();
    this._stage.addChild(this._transition);

    this._transition.signals.in.addOnce(function(transition) {
        p3.Timestep.queueCall(swap, [count], this);
    }, this);
    this._transition.signals.out.addOnce(function(transition) {
        this._transition = null;

        transition.parent.removeChild(transition);
        transition.dispose();

        if (transition.wait) {
            this.top.show();
        }
    }, this);
    this._transition.in();

    function swap(count) {
        for (var i = 0; i < count; ++ i) {
            this.top.hide();
            this.top.parent.removeChild(this.top);
            this.top.dispose();
            this._stack.pop();
        }

        var scene = this.top;
        scene.resize();
        if (!scene.parent) {
            this.stage.addChildAt(scene, this._transition.parent.getChildIndex(this._transition));
        }

        if (!this._transition.wait) {
            scene.show();
        }
        this._transition.out();

        console.log(this._stack);
    }
};

/**
 */
SceneManager.prototype.clear = function() {
};

/**
 */
SceneManager.prototype.resize = function() {
    var scene;
    for (var i = 0; i < this._stack.length; ++ i) {
        scene = this._stack[i];
        scene.resize();
    }
    if (this._transition) {
        this._transition.resize();
    }
};

Object.defineProperty(SceneManager.prototype, "stage", {
    /**
     * @returns {PIXI.DisplayObject}
     */
    get: function() {
        return this._stage;
    }
});

Object.defineProperty(SceneManager.prototype, "top", {
    /**
     * @returns {Scene}
     */
    get: function() {
        return this._stack.length ? this._stack[this._stack.length - 1] : null;
    }
});

Object.defineProperty(SceneManager.prototype, "transitionInProgress", {
    /**
     * @returns {Boolean}
     */
    get: function() {
        return (this._transition != null ? true : false);
    }
});

},{"./Scene":29,"./Transition":33}],31:[function(require,module,exports){
/**
 *  ScoreScene
 *
 *  Created by Legman on 7/09/2015.
 *
 */

var Common      = require("./Common");
var Button      = require("./Button");
var MuteButton  = require("./MuteButton");
var Scene       = require("./Scene");
var Transition  = require("./Transition");

/**
 * @constructor
 */
function ScoreScene() {
    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._overlay = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._panel = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._best = null;

    /**
     * @type {Button}
     * @private
     */
    this._playButton = null;

    /**
     * @type {Button}
     * @private
     */
    this._homeButton = null;

    /**
     * @type {Button}
     * @private
     */
    this._soundButton = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._fred = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._daphne = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._velma = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._shaggy = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._scooby = null;

    Scene.call(this);
}
module.exports                      = ScoreScene;
ScoreScene.prototype                = Object.create(Scene.prototype);
ScoreScene.prototype.constructor    = ScoreScene;

ScoreScene.prototype.init = function() {
    this._overlay = new PIXI.Graphics();
    this.addChild(this._overlay);

    this._panel         = new PIXI.Sprite(Common.assetManager.getTexture("pop_up"));
    this._panel.x       = Common.STAGE_WIDTH * 0.5;
    this._panel.y       = Common.STAGE_HEIGHT * 0.5 + 40.0;
    this._panel.anchor  = new PIXI.Point(0.5, 0.5);
    this.addChild(this._panel);

    var atlas               = Common.assetManager.getFontAtlas("youngfrankenstein_74_orange");
    this._panel.text1       = new p3.BitmapText(Common.copy["gameover"][Common.language], atlas, p3.BitmapText.ALIGN_CENTER);
    this._panel.text1.x     = 0.0;
    this._panel.text1.y     = -200.0;
    this._panel.addChild(this._panel.text1);
    console.log(this._panel.text1.text);

    atlas                   = Common.assetManager.getFontAtlas("helvetical_40_condensedbold_green");
    this._panel.text2       = new p3.BitmapText(Common.copy["score"][Common.language], atlas, p3.BitmapText.ALIGN_CENTER);
    this._panel.text2.text  = this._panel.text2.text.replace("[SCORE]", Common.monsterCount.toString());
    this._panel.text2.x     = 0.0;
    this._panel.text2.y     = -100.0;
    this._panel.addChild(this._panel.text2);
    console.log(this._panel.text2.text);

    this._best          = new PIXI.Sprite(Common.assetManager.getTexture("best_score"));
    this._best.x        = this._panel.x;
    this._best.y        = this._panel.y -294.0;
    this._best.anchor   = new PIXI.Point(0.5, 0.5);
    this._best.visible  = false;
    this.addChildAt(this._best, this._panel.parent.getChildIndex(this._panel));

    atlas                   = Common.assetManager.getFontAtlas("youngfrankenstein_46_orange");
    this._best.text         = new p3.BitmapText(Common.copy["best"][Common.language], atlas, p3.BitmapText.ALIGN_CENTER);
    this._best.text.text    = this._best.text.text.replace("[SCORE]", Common.saveScore());
    this._best.text.x       = 0.0;
    this._best.text.y       = -16.0;
    this._best.addChild(this._best.text);
    console.log(this._best.text.text);

    this._playButton = new Button(
        Common.assetManager.getTexture("but_play_def"),
        Common.assetManager.getTexture("but_play_over"),
        Common.assetManager.getTexture("but_play_pressed")
    );
    this._playButton.x = 6.0;
    this._playButton.y = 180.0;
    this._playButton.init();
    this._playButton.signals.click.add(this.onPlayButtonClick, this);
    this._playButton.signals.over.add(this.onButtonRollOver, this);
    this._panel.addChild(this._playButton);

    this._homeButton = new Button(
        Common.assetManager.getTexture("but_home_def"),
        Common.assetManager.getTexture("but_home_over"),
        Common.assetManager.getTexture("but_home_pressed")
    );
    this._homeButton.y = 100.0;
    this._homeButton.animate = true;
    this._homeButton.init();
    this._homeButton.signals.click.add(this.onHomeButtonClick, this);
    this._homeButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._homeButton);

    this._soundButton = new MuteButton(
        Common.assetManager.getTexture("but_sound_on_def"),
        Common.assetManager.getTexture("but_sound_off_def"),
        Common.assetManager.getTexture("but_sound_on_over"),
        Common.assetManager.getTexture("but_sound_off_over"),
        Common.assetManager.getTexture("but_sound_on_pressed"),
        Common.assetManager.getTexture("but_sound_off_pressed")
    );
    this._soundButton.y = 100.0;
    this._soundButton.animate = true;
    this._soundButton.init();
    this._soundButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._soundButton);

    this._fred          = new PIXI.Sprite(Common.assetManager.getTexture("finalscore_gang_fred"));
    this._fred.x        = Common.STAGE_WIDTH * 0.5 + 380.0;
    this._fred.y        = p3.Canvas.height + 120.0;
    this._fred.anchor   = new PIXI.Point(0.5, 1.0);
    this._fred.visible  = false;
    this.addChild(this._fred);

    this._daphne            = new PIXI.Sprite(Common.assetManager.getTexture("finalscore_gang_daphne"));
    this._daphne.x          = Common.STAGE_WIDTH * 0.5 + 240.0;
    this._daphne.y          = p3.Canvas.height + 120.0;
    this._daphne.anchor     = new PIXI.Point(0.5, 1.0);
    this._daphne.visible    = false;
    this.addChild(this._daphne);

    this._shaggy            = new PIXI.Sprite(Common.assetManager.getTexture("finalscore_gang_shaggy"));
    this._shaggy.x          = Common.STAGE_WIDTH * 0.5 - 400.0;
    this._shaggy.y          = p3.Canvas.height + 120.0;
    this._shaggy.anchor     = new PIXI.Point(0.5, 1.0);
    this._shaggy.visible    = false;
    this.addChild(this._shaggy);

    this._velma         = new PIXI.Sprite(Common.assetManager.getTexture("finalscore_gang_velma"));
    this._velma.x       = Common.STAGE_WIDTH * 0.5 - 320.0;
    this._velma.y       = p3.Canvas.height + 120.0;
    this._velma.anchor  = new PIXI.Point(0.5, 1.0);
    this._velma.visible = false;
    this.addChild(this._velma);

    this._scooby            = new PIXI.Sprite(Common.assetManager.getTexture("finalscore_gang_scooby"));
    this._scooby.x          = Common.STAGE_WIDTH * 0.5 - 140.0;
    this._scooby.y          = p3.Canvas.height + 120.0;
    this._scooby.anchor     = new PIXI.Point(0.5, 1.0);
    this._scooby.visible    = false;
    this.addChild(this._scooby);
};

ScoreScene.prototype.dispose = function() {
    this._playButton.dispose();
    this._homeButton.dispose();
    this._soundButton.dispose();

    Scene.prototype.dispose.call(this);
};

ScoreScene.prototype.resize = function() {
    this.x = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;

    this._overlay.clear();
    this._overlay.beginFill(0x0, 0.5);
    this._overlay.drawRect(
        (Common.STAGE_WIDTH - p3.Canvas.width) * 0.5,
        0.0,
        p3.Canvas.width,
        p3.Canvas.height
    );
    this._overlay.endFill();

    this._homeButton.x = (Common.STAGE_WIDTH - p3.Canvas.width) * 0.5 + 100.0;
    this._soundButton.x = (Common.STAGE_WIDTH + p3.Canvas.width) * 0.5 - 100.0;
};

ScoreScene.prototype.appear = function() {
    this.animateIn();
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
ScoreScene.prototype.animateIn = function(callback, scope) {
    var timeline    = new TimelineMax();
    var delay       = 0.1;

    this._overlay.alpha = 0.0;
    timeline.insert(TweenMax.to(this._overlay, 0.2, {
        alpha: 1.0,
        ease: Power1.easeInOut
    }));

    this._panel.scale = new PIXI.Point(0.0, 0.0);
    timeline.insert(TweenMax.to(this._panel.scale, 0.4, {
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [1.0],
        onComplete: function() {
            this._best.y = this._panel.y - 294.0 + this._best.height;
            this._best.visible = true;
            TweenMax.to(this._best, 0.3, {
                y: this._panel.y - 294.0,
                ease: Power2.easeInOut
            });
        },
        onCompleteScope: this
    }));

    this._homeButton.scale = new PIXI.Point(0.0, 0.0);
    timeline.insert(TweenMax.to(this._homeButton.scale, 0.4, {
        delay: delay,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    }));

    this._soundButton.scale = new PIXI.Point(0.0, 0.0);
    timeline.insert(TweenMax.to(this._soundButton.scale, 0.4, {
        delay: delay * 2,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    }));

    timeline.vars.onComplete = function() {
        var to              = this._fred.y;
        this._fred.y        = p3.Canvas.height + this._fred.y;
        this._fred.visible  = true;
        TweenMax.to(this._fred, 0.4, {
            y: to,
            ease: Back.easeOut,
            easeParams: [1.0]
        });

        to                      = this._daphne.y;
        this._daphne.y          = p3.Canvas.height + this._daphne.y;
        this._daphne.visible    = true;
        TweenMax.to(this._daphne, 0.4, {
            delay: 0.2,
            y: to,
            ease: Back.easeOut,
            easeParams: [1.0]
        });

        to                      = this._velma.y;
        this._velma.y           = p3.Canvas.height + this._velma.y;
        this._velma.visible     = true;
        TweenMax.to(this._velma, 0.4, {
            delay: 0.1,
            y: to,
            ease: Back.easeOut,
            easeParams: [1.0]
        });

        to                      = this._shaggy.y;
        this._shaggy.y          = p3.Canvas.height + this._shaggy.y;
        this._shaggy.visible    = true;
        TweenMax.to(this._shaggy, 0.4, {
            delay: 0.3,
            y: to,
            ease: Back.easeOut,
            easeParams: [1.0]
        });

        to                      = this._scooby.y;
        this._scooby.y          = p3.Canvas.height + this._scooby.y;
        this._scooby.visible    = true;
        TweenMax.to(this._scooby, 0.4, {
            delay: 0.4,
            y: to,
            ease: Back.easeOut,
            easeParams: [1.0]
        });
    };
    timeline.vars.onCompleteScope = this;
};

/**
 * @param {!Button} button
 */
ScoreScene.prototype.onPlayButtonClick = function(button) {
    this.signals.next.dispatch();

    Common.audioManager.playSound("sfx_press");
};

/**
 * @param {!Button} button
 */
ScoreScene.prototype.onHomeButtonClick = function(button) {
    this.signals.home.dispatch();

    Common.audioManager.playSound("sfx_press");
};

/**
 * @param {!Button} button
 */
ScoreScene.prototype.onButtonRollOver = function(button) {
    Common.audioManager.playSound("sfx_rollover");
};

},{"./Button":3,"./Common":6,"./MuteButton":17,"./Scene":29,"./Transition":33}],32:[function(require,module,exports){
/**
 *  SplashScene
 *
 *  Created by Legman on 4/09/2015.
 *
 */

var Common      = require("./Common");
var Button      = require("./Button");
var MuteButton  = require("./MuteButton");
var Scene       = require("./Scene");
var Transition  = require("./Transition");

/**
 * @constructor
 */
function SplashScene() {
    /**
     * @type {Button}
     * @private
     */
    this._playButton = null;

    /**
     * @type {MuteButton}
     * @private
     */
    this._soundButton = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._logo = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._title = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._van = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._leftMist = null;

    /**
     * @type {PIXI.Sprite}
     * @private
     */
    this._rightMist = null;

    /**
     * @type {Array.<TweenMax>}
     * @private
     */
    this._tweens = [];

    Scene.call(this);
}
module.exports                      = SplashScene;
SplashScene.prototype               = Object.create(Scene.prototype);
SplashScene.prototype.constructor   = SplashScene;

SplashScene.prototype.init = function() {
    var bg = new PIXI.Sprite(Common.assetManager.getTexture("ui_splash"));
    this.addChild(bg);

    this._van           = new PIXI.Sprite(Common.assetManager.getTexture("ui_splash_van"));
    this._van.x         = Common.STAGE_WIDTH * 0.5 - 200.0;
    this._van.y         = 768.0;
    this._van.anchor    = new PIXI.Point(0.5, 1.0);
    this._van.visible   = false;
    this.addChild(this._van);

    this._van.lights            = new PIXI.Sprite(Common.assetManager.getTexture("ui_splash_van_lights"));
    this._van.lights.x          = 416.0;
    this._van.lights.y          = -100.0;
    this._van.lights.anchor     = new PIXI.Point(0.5, 0.5);
    this._van.addChild(this._van.lights);

    this._leftMist              = new PIXI.Sprite(Common.assetManager.getTexture("ui_splash_mist_left"));
    this._leftMist.x            = Common.STAGE_WIDTH * 0.5;
    this._leftMist.y            = p3.Canvas.height;
    this._leftMist.anchor.x     = 1.0;
    this._leftMist.anchor.y     = 1.0;
    this.addChild(this._leftMist);

    this._rightMist             = new PIXI.Sprite(Common.assetManager.getTexture("ui_splash_mist_right"));
    this._rightMist.x           = Common.STAGE_WIDTH * 0.5;
    this._rightMist.y           = p3.Canvas.height;
    this._rightMist.anchor.y    = 1.0;
    this.addChild(this._rightMist);

    this._playButton = new Button(
        Common.assetManager.getTexture("but_play_def"),
        Common.assetManager.getTexture("but_play_over"),
        Common.assetManager.getTexture("but_play_pressed")
    );
    //this._playButton.x          = Common.STAGE_WIDTH * 0.5 + 280.0;
    //this._playButton.y          = 560.0;
    this._playButton.y          = p3.Canvas.height - 140.0;
    this._playButton.animate    = true;
    this._playButton.visible    = false;
    this._playButton.init();
    this._playButton.signals.click.add(this.onPlayButtonClick, this);
    this._playButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._playButton);

    this._soundButton = new MuteButton(
        Common.assetManager.getTexture("but_sound_on_def"),
        Common.assetManager.getTexture("but_sound_off_def"),
        Common.assetManager.getTexture("but_sound_on_over"),
        Common.assetManager.getTexture("but_sound_off_over"),
        Common.assetManager.getTexture("but_sound_on_pressed"),
        Common.assetManager.getTexture("but_sound_off_pressed")
    );
    this._soundButton.y = 100.0;
    this._soundButton.animate = true;
    this._soundButton.init();
    this._soundButton.signals.over.add(this.onButtonRollOver, this);
    this.addChild(this._soundButton);

    this._logo          = new PIXI.Sprite(Common.assetManager.getTexture("ui_splash_logo"));
    this._logo.x        = Common.STAGE_WIDTH * 0.5 - 180.0;
    this._logo.y        = 140.0;
    this._logo.anchor   = new PIXI.Point(0.5, 0.5);
    this._logo.visible  = false;
    this.addChild(this._logo);

    this._title             = new PIXI.Sprite(Common.assetManager.getTexture("ui_splash_wood"));
    this._title.x           = this._logo.x + 300.0;
    this._title.y           = this._logo.y + 160.0;
    this._title.anchor      = new PIXI.Point(0.5, 0.5);
    this._title.visible     = false;
    this.addChild(this._title);

    var atlas = Common.assetManager.getFontAtlas("youngfrankenstein_60_title");
    this._title.text         = new p3.BitmapText(Common.copy["title"][Common.language], atlas, p3.BitmapText.ALIGN_CENTER);
    this._title.text.x       = 4.0;
    this._title.text.y       = -32.0;
    this._title.addChild(this._title.text);
};

SplashScene.prototype.dispose = function() {
    this._playButton.dispose();

    var tween;
    for (var i = 0; i < this._tweens.length; ++ i) {
        tween = this._tweens[i];
        tween.kill();
    }
    this._tweens.length = 0;

    Scene.prototype.dispose.call(this);
};

SplashScene.prototype.resize = function() {
    this.x                  = (p3.Canvas.width - Common.STAGE_WIDTH) * 0.5;
    this._playButton.x      = (Common.STAGE_WIDTH + p3.Canvas.width) * 0.5 - 140.0;
    this._soundButton.x     = (Common.STAGE_WIDTH + p3.Canvas.width) * 0.5 - 100.0;

};

SplashScene.prototype.appear = function() {
    this.animateIn();
};

/**
 * @param {Function=} callback
 * @param {*=} scope
 */
SplashScene.prototype.animateIn = function(callback, scope) {
    var timeline                    = new TimelineMax();
    timeline.vars.onComplete        = callback;
    timeline.vars.onCompleteScope   = scope;
    this._tweens.push(timeline);

    // initial van fade in
    this._van.alpha     = 0.1;
    this._van.visible   = true;
    timeline.insert(TweenMax.to(this._van, 0.4, {
        delay: 0.2,
        alpha: 1.0,
        ease: Ease.easeInOut
    }));

    // van left to right
    var last                = this._van.position.clone();
    this._van.position.x    -= 300.0;
    this._van.position.y    += 40.0;
    this._van.tint          = 0x271B42;
    timeline.insert(TweenMax.to(this._van, 1.4, {
        x: last.x,
        y: last.y,
        ease: Ease.easeIn
    }));

    // van scale in
    this._van.scale = new PIXI.Point(0.6, 0.6);
    timeline.insert(TweenMax.to(this._van.scale, 1.4, {
        x: 1.0,
        y: 1.0,
        ease: Ease.easeIn
    }));

    // van tint effect
    this.vanTintAmount = 0.0;
    timeline.insert(TweenMax.to(this, 0.8, {
        delay: 0.1,
        vanTintAmount: 1.0,
        ease: Strong.easeIn
    }));

    // left mist swoosh
    timeline.insert(TweenMax.to(this._leftMist, 3.6, {
        x: this._leftMist.x - 320.0,
        ease: Strong.easeOut
    }));

    // right mist swoosh
    timeline.insert(TweenMax.to(this._rightMist, 3.6, {
        x: this._rightMist.x + 320.0,
        ease: Strong.easeOut
    }));

    // logo pop
    this._logo.scale    = new PIXI.Point(0.0, 0.0);
    this._logo.visible  = true;
    timeline.insert(TweenMax.to(this._logo.scale, 0.4, {
        delay: 0.8,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [4.0],
        onStart: function() {
            Common.audioManager.playSound("sfx_ghoul6");
        },
        onComplete: function() {
            var float = 14.0;
            TweenMax.to(this._logo, 1.0, {
                y: this._logo.y + float * 0.5,
                ease: Power1.easeOut,
                onComplete: function() {
                    var tl = new TimelineMax({repeat: -1});
                    tl.append(TweenMax.to(this._logo, 2.0, {
                        y: this._logo.y - float,
                        ease: Power1.easeInOut
                    }));
                    tl.append(TweenMax.to(this._logo, 2.0, {
                        y: this._logo.y,
                        ease: Power1.easeInOut
                    }));
                    Common.animator.add(tl);
                    this._tweens.push(tl);
                },
                onCompleteScope: this
            });
        },
        onCompleteScope: this
    }));

    // title pop
    this._title.scale       = new PIXI.Point(0.0, 0.0);
    this._title.visible     = true;
    timeline.insert(TweenMax.to(this._title.scale, 0.5, {
        delay: 0.94,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0],
        onComplete: function() {
            var float = 10.0;
            TweenMax.to(this._title, 1.0, {
                y: this._title.y - float * 0.5,
                ease: Power1.easeOut,
                onComplete: function() {
                    var tl = new TimelineMax({repeat: -1});
                    tl.append(TweenMax.to(this._title, 2.0, {
                        y: this._title.y + float,
                        ease: Power1.easeInOut
                    }));
                    tl.append(TweenMax.to(this._title, 2.0, {
                        y: this._title.y,
                        ease: Power1.easeInOut
                    }));
                    Common.animator.add(tl);
                    this._tweens.push(tl);
                },
                onCompleteScope: this
            });
        },
        onCompleteScope: this
    }));

    // play button pop
    this._playButton.scale      = new PIXI.Point(0.0, 0.0);
    this._playButton.visible    = true;
    timeline.insert(TweenMax.to(this._playButton.scale, 0.4, {
        delay: 1.4,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [4.0]
    }));

    this._soundButton.scale     = new PIXI.Point(0.0, 0.0);
    this._soundButton.visible   = true;
    timeline.insert(TweenMax.to(this._soundButton.scale, 0.4, {
        delay: 1.6,
        x: 1.0,
        y: 1.0,
        ease: Back.easeOut,
        easeParams: [2.0]
    }));
};

/**
 * @param {!Button} button
 */
SplashScene.prototype.onPlayButtonClick = function(button) {
    this.signals.next.dispatch();

    Common.audioManager.playSound("sfx_press");
};

/**
 * @param {!Button} button
 */
SplashScene.prototype.onButtonRollOver = function(button) {
    Common.audioManager.playSound("sfx_rollover");
};

Object.defineProperty(SplashScene.prototype, "vanTintAmount", {
    /**
     * @returns {Number}
     */
    get: function() {
        return 0.0;
    },
    /**
     * @param {Number} value
     */
    set: function(value) {
        var color1 = 0x271B42;
        var color2 = 0xFFFFFF;

        var rgb1 = {};
        rgb1.r = (color1 >> 16) & 0xFF;
        rgb1.g = (color1 >> 8) & 0xFF;
        rgb1.b = (color1 >> 0) & 0xFF;

        var rgb2 = {};
        rgb2.r = (color2 >> 16) & 0xFF;
        rgb2.g = (color2 >> 8) & 0xFF;
        rgb2.b = (color2 >> 0) & 0xFF;

        rgb1.r = (1.0 - value) * rgb1.r + (value * rgb2.r);
        rgb1.g = (1.0 - value) * rgb1.g + (value * rgb2.g);
        rgb1.b = (1.0 - value) * rgb1.b + (value * rgb2.b);

        this._van.tint = (rgb1.r << 16) | (rgb1.g << 8) | rgb1.b;
    }
});
},{"./Button":3,"./Common":6,"./MuteButton":17,"./Scene":29,"./Transition":33}],33:[function(require,module,exports){
/**
 *  Transition
 *
 *  Created by Legman on 4/09/2015.
 *
 */

/**
 * @constructor
 */
function Transition() {
    /**
     * @type {*}
     */
    this.signals        = {};
    this.signals.in     = new signals.Signal();
    this.signals.out    = new signals.Signal();

    /**
     * @type {Boolean}
     */
    this.push = false;

    /**
     * @type {Boolean}
     */
    this.replace = true;

    /**
     * @type {Boolean}
     */
    this.wait = true;

    /**
     * @type {Boolean}
     */
    this.requiresWebGL = false;

    PIXI.Container.call(this);
}
module.exports                      = Transition;
Transition.prototype                = Object.create(PIXI.Container.prototype);
Transition.prototype.constructor    = Transition;

Transition.prototype.init = function() {
    // override
};

Transition.prototype.dispose = function() {
    this.signals.in.dispose();
    this.signals.out.dispose();

    this.removeChildren();
};

Transition.prototype.in = function() {
    this.signals.in.dispatch(this);
};

Transition.prototype.out = function() {
    this.signals.out.dispatch(this);
};

/**
 * @returns {Transition}
 */
Transition.prototype.resize = function() {
    // override
};

Transition.prototype.fallback = function() {
    // override
};
},{}]},{},[16])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9BbmltYXRpb25TY2VuZS5qcyIsIi4uL0FwcGxpY2F0aW9uLmpzIiwiLi4vQnV0dG9uLmpzIiwiLi4vQ2hhcmFjdGVyLmpzIiwiLi4vQ2hhcmFjdGVyVHlwZS5qcyIsIi4uL0NvbW1vbi5qcyIsIi4uL0N1dG91dFNoYWRlci5qcyIsIi4uL0N1dG91dFRyYW5zaXRpb24uanMiLCIuLi9GYWRlVHJhbnNpdGlvbi5qcyIsIi4uL0dhbWVTY2VuZS5qcyIsIi4uL0h1ZC5qcyIsIi4uL0ludHJvU2NlbmUxLmpzIiwiLi4vSW50cm9TY2VuZTIuanMiLCIuLi9JbnRyb1NjZW5lMy5qcyIsIi4uL0ludHJvU2NlbmU0LmpzIiwiLi4vTWFpbi5qcyIsIi4uL011dGVCdXR0b24uanMiLCIuLi9PdXRyb1NjZW5lLmpzIiwiLi4vUGF1c2VTY2VuZS5qcyIsIi4uL1ByZWxvYWRlclNjZW5lLmpzIiwiLi4vU2NlbmFyaW8uanMiLCIuLi9TY2VuYXJpbzEuanMiLCIuLi9TY2VuYXJpbzIuanMiLCIuLi9TY2VuYXJpbzMuanMiLCIuLi9TY2VuYXJpbzQuanMiLCIuLi9TY2VuYXJpbzUuanMiLCIuLi9TY2VuYXJpbzYuanMiLCIuLi9TY2VuYXJpbzcuanMiLCIuLi9TY2VuZS5qcyIsIi4uL1NjZW5lTWFuYWdlci5qcyIsIi4uL1Njb3JlU2NlbmUuanMiLCIuLi9TcGxhc2hTY2VuZS5qcyIsIi4uL1RyYW5zaXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdmpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogIEFuaW1hdGlvblNjZW5lXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDQvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIENvbW1vbiAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xudmFyIEJ1dHRvbiAgICAgID0gcmVxdWlyZShcIi4vQnV0dG9uXCIpO1xudmFyIFNjZW5lICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEFuaW1hdGlvblNjZW5lKCkge1xuICAgIFNjZW5lLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2tpcEJ1dHRvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faG9tZUJ1dHRvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NraXBwZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzaWduYWxzLlNpZ25hbH1cbiAgICAgKi9cbiAgICB0aGlzLnNpZ25hbHMuc2tpcCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgICAgID0gQW5pbWF0aW9uU2NlbmU7XG5BbmltYXRpb25TY2VuZS5wcm90b3R5cGUgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5lLnByb3RvdHlwZSk7XG5BbmltYXRpb25TY2VuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgICAgPSBBbmltYXRpb25TY2VuZTtcblxuQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9za2lwQnV0dG9uID0gbmV3IEJ1dHRvbihcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X25leHRfZGVmXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfbmV4dF9vdmVyXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfbmV4dF9wcmVzc2VkXCIpXG4gICAgKTtcbiAgICB0aGlzLl9za2lwQnV0dG9uLnkgICAgICAgICAgPSBwMy5DYW52YXMuaGVpZ2h0IC0gMTQwLjA7XG4gICAgdGhpcy5fc2tpcEJ1dHRvbi5hbmltYXRlICAgID0gdHJ1ZTtcbiAgICB0aGlzLl9za2lwQnV0dG9uLnZpc2libGUgICAgPSBmYWxzZTtcbiAgICB0aGlzLl9za2lwQnV0dG9uLmluaXQoKTtcbiAgICB0aGlzLl9za2lwQnV0dG9uLnNpZ25hbHMuY2xpY2suYWRkKHRoaXMub25Ta2lwQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIHRoaXMuX3NraXBCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLm9uQnV0dG9uUm9sbE92ZXIsIHRoaXMpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc2tpcEJ1dHRvbik7XG5cbiAgICB0aGlzLl9ob21lQnV0dG9uID0gbmV3IEJ1dHRvbihcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X2hvbWVfZGVmXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfaG9tZV9vdmVyXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfaG9tZV9wcmVzc2VkXCIpXG4gICAgKTtcbiAgICB0aGlzLl9ob21lQnV0dG9uLnkgICAgICAgICAgPSAxMDAuMDtcbiAgICB0aGlzLl9ob21lQnV0dG9uLmFuaW1hdGUgICAgPSB0cnVlO1xuICAgIHRoaXMuX2hvbWVCdXR0b24udmlzaWJsZSAgICA9IGZhbHNlO1xuICAgIHRoaXMuX2hvbWVCdXR0b24uaW5pdCgpO1xuICAgIHRoaXMuX2hvbWVCdXR0b24uc2lnbmFscy5jbGljay5hZGRPbmNlKHRoaXMub25Ib21lQnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIHRoaXMuX2hvbWVCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLm9uQnV0dG9uUm9sbE92ZXIsIHRoaXMpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5faG9tZUJ1dHRvbik7XG59O1xuXG5BbmltYXRpb25TY2VuZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NraXBCdXR0b24uZGlzcG9zZSgpO1xuICAgIHRoaXMuX2hvbWVCdXR0b24uZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5zaWduYWxzLnNraXAuZGlzcG9zZSgpO1xuXG4gICAgU2NlbmUucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbn07XG5cbkFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9za2lwQnV0dG9uLnggPSAoQ29tbW9uLlNUQUdFX1dJRFRIICsgcDMuQ2FudmFzLndpZHRoKSAqIDAuNSAtIDE0MC4wO1xuICAgIHRoaXMuX2hvbWVCdXR0b24ueCA9IChDb21tb24uU1RBR0VfV0lEVEggLSBwMy5DYW52YXMud2lkdGgpICogMC41ICsgMTAwLjA7XG59O1xuXG5BbmltYXRpb25TY2VuZS5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4obnVsbCk7XG59O1xuXG5BbmltYXRpb25TY2VuZS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5fc2tpcHBlZCkge1xuICAgICAgICB0aGlzLnNpZ25hbHMubmV4dC5kaXNwYXRjaCgpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5BbmltYXRpb25TY2VuZS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgdGhpcy5fc2tpcEJ1dHRvbi5zY2FsZSAgICAgID0gbmV3IFBJWEkuUG9pbnQoMC4wLCAwLjApO1xuICAgIHRoaXMuX3NraXBCdXR0b24udmlzaWJsZSAgICA9IHRydWU7XG4gICAgVHdlZW5NYXgudG8odGhpcy5fc2tpcEJ1dHRvbi5zY2FsZSwgMC40LCB7XG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyLjBdXG4gICAgfSk7XG5cbiAgICB0aGlzLl9ob21lQnV0dG9uLnNjYWxlICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdGhpcy5faG9tZUJ1dHRvbi52aXNpYmxlICAgID0gdHJ1ZTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9ob21lQnV0dG9uLnNjYWxlLCAwLjQsIHtcbiAgICAgICAgZGVsYXk6IDAuNCxcbiAgICAgICAgeDogMS4wLFxuICAgICAgICB5OiAxLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzIuMF1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshQnV0dG9ufSBidXR0b25cbiAqL1xuQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLm9uU2tpcEJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgdGhpcy5fc2tpcHBlZCA9IHRydWU7XG4gICAgdGhpcy5zaWduYWxzLnNraXAuZGlzcGF0Y2goKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3ByZXNzXCIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFCdXR0b259IGJ1dHRvblxuICovXG5BbmltYXRpb25TY2VuZS5wcm90b3R5cGUub25Ib21lQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbihidXR0b24pIHtcbiAgICB0aGlzLnNpZ25hbHMuaG9tZS5kaXNwYXRjaCgpO1xuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfcHJlc3NcIik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUJ1dHRvbn0gYnV0dG9uXG4gKi9cbkFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS5vbkJ1dHRvblJvbGxPdmVyID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfcm9sbG92ZXJcIik7XG59O1xuIiwiLyoqXG4gKiAgQW5pbWF0aW9uU2NlbmVcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNC8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQ29tbW9uICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBDdXRvdXRUcmFuc2l0aW9uICAgID0gcmVxdWlyZShcIi4vQ3V0b3V0VHJhbnNpdGlvblwiKTtcbnZhciBHYW1lU2NlbmUgICAgICAgICAgID0gcmVxdWlyZShcIi4vR2FtZVNjZW5lXCIpO1xudmFyIEludHJvU2NlbmUxICAgICAgICAgPSByZXF1aXJlKFwiLi9JbnRyb1NjZW5lMVwiKTtcbnZhciBJbnRyb1NjZW5lMiAgICAgICAgID0gcmVxdWlyZShcIi4vSW50cm9TY2VuZTJcIik7XG52YXIgSW50cm9TY2VuZTMgICAgICAgICA9IHJlcXVpcmUoXCIuL0ludHJvU2NlbmUzXCIpO1xudmFyIEludHJvU2NlbmU0ICAgICAgICAgPSByZXF1aXJlKFwiLi9JbnRyb1NjZW5lNFwiKTtcbnZhciBPdXRyb1NjZW5lICAgICAgICAgID0gcmVxdWlyZShcIi4vT3V0cm9TY2VuZVwiKTtcbnZhciBQYXVzZVNjZW5lICAgICAgICAgID0gcmVxdWlyZShcIi4vUGF1c2VTY2VuZVwiKTtcbnZhciBTY29yZVNjZW5lICAgICAgICAgID0gcmVxdWlyZShcIi4vU2NvcmVTY2VuZVwiKTtcbnZhciBTcGxhc2hTY2VuZSAgICAgICAgID0gcmVxdWlyZShcIi4vU3BsYXNoU2NlbmVcIik7XG52YXIgVHJhbnNpdGlvbiAgICAgICAgICA9IHJlcXVpcmUoXCIuL1RyYW5zaXRpb25cIik7XG5cbmZ1bmN0aW9uIEFwcGxpY2F0aW9uKCkge1xufVxubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvbjtcblxuLyoqXG4gKi9cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jcmVhdGVTcGxhc2hTY2VuZSgpO1xuXG4gICAgLy9Db21tb24uYXVkaW9NYW5hZ2VyLm11dGUodHJ1ZSk7XG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtTY2VuZX1cbiAqL1xuQXBwbGljYXRpb24ucHJvdG90eXBlLmNyZWF0ZVNwbGFzaFNjZW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjZW5lID0gbmV3IFNwbGFzaFNjZW5lKCk7XG4gICAgc2NlbmUuc2lnbmFscy5uZXh0LmFkZChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVJbnRyb1NjZW5lKCk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICB2YXIgdHJhbnNpdGlvbiAgICAgID0gbmV3IEN1dG91dFRyYW5zaXRpb24oQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwidHJhbnNpdGlvblwiKSwgMHgxQzEyMkYpO1xuICAgIHRyYW5zaXRpb24ud2FpdCAgICAgPSBmYWxzZTtcbiAgICB0cmFuc2l0aW9uLnNpZ25hbHMuaW4uYWRkT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnBhdXNlZCA9IGZhbHNlO1xuICAgIH0sIHRoaXMpO1xuICAgIENvbW1vbi5zY2VuZU1hbmFnZXIuYWRkKHNjZW5lLCB0cmFuc2l0aW9uKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5wYXVzZWQgPSBmYWxzZTtcbiAgICBDb21tb24ucGxheU1lbnVNdXNpYygpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcj19IGluZGV4XG4gKiBAcmV0dXJucyB7U2NlbmV9XG4gKi9cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5jcmVhdGVJbnRyb1NjZW5lID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpbmRleCA9IGluZGV4IHx8IDA7XG5cbiAgICB2YXIgc2NlbmVzID0gW1xuICAgICAgICBJbnRyb1NjZW5lMSxcbiAgICAgICAgSW50cm9TY2VuZTIsXG4gICAgICAgIEludHJvU2NlbmUzLFxuICAgICAgICBJbnRyb1NjZW5lNFxuICAgIF07XG4gICAgdmFyIGJhc2UgICAgICAgICAgICA9IHNjZW5lc1tpbmRleF07XG4gICAgdmFyIHNjZW5lICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoYmFzZS5wcm90b3R5cGUpO1xuICAgIHNjZW5lLmNvbnN0cnVjdG9yICAgPSBiYXNlO1xuICAgIGJhc2UuYXBwbHkoc2NlbmUpO1xuICAgIHNjZW5lLnNpZ25hbHMubmV4dC5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpbmRleCA8IHNjZW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludHJvU2NlbmUoaW5kZXggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FtZVNjZW5lKCk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBzY2VuZS5zaWduYWxzLnNraXAuYWRkKGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUdhbWVTY2VuZSh0cnVlKTtcbiAgICB9LCB0aGlzKTtcbiAgICBzY2VuZS5zaWduYWxzLmhvbWUuYWRkKGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVNwbGFzaFNjZW5lKCk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICB2YXIgdHJhbnNpdGlvbiAgICAgID0gaW5kZXggPT0gMCA/IG5ldyBDdXRvdXRUcmFuc2l0aW9uKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInRyYW5zaXRpb25cIiksIDB4MUMxMjJGKSA6IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgdHJhbnNpdGlvbi53YWl0ICAgICA9IGZhbHNlO1xuICAgIENvbW1vbi5zY2VuZU1hbmFnZXIuYWRkKHNjZW5lLCB0cmFuc2l0aW9uKTtcblxuICAgIENvbW1vbi5zdG9wTXVzaWMoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbn07XG5cbi8qKlxuICogQHJldHVybnMge1NjZW5lfVxuICovXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuY3JlYXRlT3V0cm9TY2VuZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2VuZSA9IG5ldyBPdXRyb1NjZW5lKCk7XG4gICAgc2NlbmUuc2lnbmFscy5uZXh0LmFkZChmdW5jdGlvbigpIHtcbiAgICAgICAgc2NlbmUuaW50ZXJhY3RpdmUgICAgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHNjZW5lLmludGVyYWN0aXZlQ2hpbGRyZW4gICA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBzY29yZSA9IHRoaXMuY3JlYXRlU2NvcmVTY2VuZSgpO1xuICAgICAgICBzY29yZS5zaWduYWxzLm5leHQuYWRkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVHYW1lU2NlbmUodHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMsIDEuMCk7XG4gICAgfSwgdGhpcyk7XG4gICAgQ29tbW9uLnNjZW5lTWFuYWdlci5hZGQoc2NlbmUpO1xuXG4gICAgQ29tbW9uLnN0b3BNdXNpYygpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSBhbmltYXRlXG4gKiBAcmV0dXJucyB7U2NlbmV9XG4gKi9cbkFwcGxpY2F0aW9uLnByb3RvdHlwZS5jcmVhdGVHYW1lU2NlbmUgPSBmdW5jdGlvbihhbmltYXRlKSB7XG4gICAgYW5pbWF0ZSA9IGFuaW1hdGUgfHwgZmFsc2U7XG5cbiAgICB2YXIgc2NlbmUgPSBuZXcgR2FtZVNjZW5lKCk7XG4gICAgc2NlbmUuc2lnbmFscy5uZXh0LmFkZChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVPdXRyb1NjZW5lKCk7XG4gICAgfSwgdGhpcyk7XG4gICAgc2NlbmUuc2lnbmFscy5wYXVzZS5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjZW5lLmludGVyYWN0aXZlICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICBzY2VuZS5pbnRlcmFjdGl2ZUNoaWxkcmVuICAgPSBmYWxzZTtcblxuICAgICAgICB2YXIgZmlsdGVyICAgICAgPSBuZXcgUElYSS5maWx0ZXJzLkJsdXJGaWx0ZXIoKTtcbiAgICAgICAgZmlsdGVyLmJsdXIgICAgID0gMC4wO1xuICAgICAgICBmaWx0ZXIucGFzc2VzICAgPSAyLjA7XG4gICAgICAgIHNjZW5lLmZpbHRlcnMgICA9IFtmaWx0ZXJdO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKGZpbHRlciwgMC4yLCB7XG4gICAgICAgICAgICBibHVyOiA0LjAsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBwYXVzZSA9IHRoaXMuY3JlYXRlUGF1c2VTY2VuZSgpO1xuICAgICAgICBwYXVzZS5zaWduYWxzLm5leHQuYWRkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2NlbmUuaW50ZXJhY3RpdmUgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjZW5lLmludGVyYWN0aXZlQ2hpbGRyZW4gICA9IHRydWU7XG5cbiAgICAgICAgICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZihmaWx0ZXIpO1xuICAgICAgICAgICAgVHdlZW5NYXgudG8oZmlsdGVyLCAwLjIsIHtcbiAgICAgICAgICAgICAgICBibHVyOiAwLjAsXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZmlsdGVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlU2NvcGU6IHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLCAxKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHZhciB0cmFuc2l0aW9uID0gYW5pbWF0ZSA/IG5ldyBDdXRvdXRUcmFuc2l0aW9uKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInRyYW5zaXRpb25cIiksIDB4MUMxMjJGKSA6IG5ldyBUcmFuc2l0aW9uKCk7XG4gICAgQ29tbW9uLnNjZW5lTWFuYWdlci5hZGQoc2NlbmUsIHRyYW5zaXRpb24pO1xuXG4gICAgQ29tbW9uLnBsYXlHYW1lTXVzaWMoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbn07XG5cbi8qKlxuICogQHJldHVybnMge1NjZW5lfVxuICovXG5BcHBsaWNhdGlvbi5wcm90b3R5cGUuY3JlYXRlUGF1c2VTY2VuZSA9IGZ1bmN0aW9uKCkge1xuICAgIENvbW1vbi5sb2FkU2NvcmUoKTtcblxuICAgIHZhciBzY2VuZSA9IG5ldyBQYXVzZVNjZW5lKCk7XG4gICAgc2NlbmUuc2lnbmFscy5uZXh0LmFkZChmdW5jdGlvbigpIHtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBDb21tb24uc2NlbmVNYW5hZ2VyLnJlbW92ZSgpO1xuICAgIH0sIHRoaXMpO1xuICAgIHNjZW5lLnNpZ25hbHMuaG9tZS5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlU3BsYXNoU2NlbmUoKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHZhciB0cmFuc2l0aW9uICAgICAgPSBuZXcgVHJhbnNpdGlvbigpO1xuICAgIHRyYW5zaXRpb24ucHVzaCAgICAgPSB0cnVlO1xuICAgIHRyYW5zaXRpb24ucmVwbGFjZSAgPSBmYWxzZTtcbiAgICBDb21tb24uc2NlbmVNYW5hZ2VyLmFkZChzY2VuZSwgdHJhbnNpdGlvbik7XG5cbiAgICBDb21tb24uYW5pbWF0b3IucGF1c2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gc2NlbmU7XG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtTY2VuZX1cbiAqL1xuQXBwbGljYXRpb24ucHJvdG90eXBlLmNyZWF0ZVNjb3JlU2NlbmUgPSBmdW5jdGlvbigpIHtcbiAgICBDb21tb24ubG9hZFNjb3JlKCk7XG5cbiAgICB2YXIgc2NlbmUgPSBuZXcgU2NvcmVTY2VuZSgpO1xuICAgIHNjZW5lLnNpZ25hbHMuaG9tZS5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlU3BsYXNoU2NlbmUoKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHZhciB0cmFuc2l0aW9uICAgICAgPSBuZXcgVHJhbnNpdGlvbigpO1xuICAgIHRyYW5zaXRpb24ucHVzaCAgICAgPSB0cnVlO1xuICAgIHRyYW5zaXRpb24ucmVwbGFjZSAgPSBmYWxzZTtcbiAgICBDb21tb24uc2NlbmVNYW5hZ2VyLmFkZChzY2VuZSwgdHJhbnNpdGlvbik7XG4gICAgcmV0dXJuIHNjZW5lO1xufTtcbiIsIi8qKlxuICogIEJ1dHRvblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA0LzA5LzIwMTUuXG4gKlxuICovXG5cbi8qKlxuICogQHBhcmFtIHshUElYSS5UZXh0dXJlfSBub3JtYWxUZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG92ZXJUZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IGRvd25UZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IGRpc2FibGVkVGV4dHVyZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEJ1dHRvbihub3JtYWxUZXh0dXJlLCBvdmVyVGV4dHVyZSwgZG93blRleHR1cmUsIGRpc2FibGVkVGV4dHVyZSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYW5pbWF0ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuUG9pbnR9XG4gICAgICovXG4gICAgdGhpcy5iYXNlU2NhbGUgPSBuZXcgUElYSS5Qb2ludCgxLjAsIDEuMCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLnNpZ25hbHMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9ub3JtYWxUZXh0dXJlID0gbm9ybWFsVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vdmVyVGV4dHVyZSA9IG92ZXJUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Rvd25UZXh0dXJlID0gZG93blRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGlzYWJsZWRUZXh0dXJlID0gZGlzYWJsZWRUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1R3ZWVuTWF4fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdHdlZW5PdmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUd2Vlbk1heH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3R3ZWVuT3V0ID0gbnVsbDtcblxuICAgIFBJWEkuU3ByaXRlLmNhbGwodGhpcywgdGhpcy5fbm9ybWFsVGV4dHVyZSk7XG5cbiAgICB0aGlzLmFuY2hvciAgICAgICAgICAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLmludGVyYWN0aXZlICAgICAgICA9IHRydWU7XG4gICAgdGhpcy5tb3VzZWRvd24gICAgICAgICAgPSB0aGlzLnRvdWNoc3RhcnQgICAgICAgICAgICAgICA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNldXAgICAgICAgICAgICA9IHRoaXMudG91Y2hlbmQgICAgICAgICAgICAgICAgID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNldXBvdXRzaWRlICAgICA9IHRoaXMudG91Y2hlbmRvdXRzaWRlICAgICAgICAgID0gdGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGljayAgICAgICAgICAgICAgPSB0aGlzLnRhcCAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMub25Nb3VzZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW92ZXIgICAgICAgICAgPSB0aGlzLm9uTW91c2VPdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW91dCAgICAgICAgICAgPSB0aGlzLm9uTW91c2VPdXQuYmluZCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgPSBCdXR0b247XG5CdXR0b24ucHJvdG90eXBlICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShQSVhJLlNwcml0ZS5wcm90b3R5cGUpO1xuQnV0dG9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICA9IEJ1dHRvbjtcblxuLyoqXG4gKi9cbkJ1dHRvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYmFzZVNjYWxlICAgICAgPSB0aGlzLnNjYWxlLmNsb25lKCk7XG4gICAgdGhpcy5zaWduYWxzLmRvd24gICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy51cCAgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMub3ZlciAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5zaWduYWxzLm91dCAgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5jbGljayAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbn07XG5cbi8qKlxuICovXG5CdXR0b24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNpZ25hbHMudXAuZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5kb3duLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMub3Zlci5kaXNwb3NlKCk7XG4gICAgdGhpcy5zaWduYWxzLm91dC5kaXNwb3NlKCk7XG4gICAgdGhpcy5zaWduYWxzLmNsaWNrLmRpc3Bvc2UoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKi9cbkJ1dHRvbi5wcm90b3R5cGUub25Nb3VzZURvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZG93blRleHR1cmU7XG4gICAgdGhpcy5zaWduYWxzLmRvd24uZGlzcGF0Y2godGhpcywgZXZlbnQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqL1xuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlVXAgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMubm9ybWFsVGV4dHVyZTtcbiAgICB0aGlzLnNpZ25hbHMudXAuZGlzcGF0Y2godGhpcywgZXZlbnQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqL1xuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3ZlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5vdmVyVGV4dHVyZTtcblxuICAgIGlmICh0aGlzLmFuaW1hdGUpIHtcbiAgICAgICAgdmFyIHR3ZWVucyAgPSBUd2Vlbk1heC5nZXRUd2VlbnNPZih0aGlzLCB0cnVlKTtcbiAgICAgICAgdmFyIGNvdW50ICAgPSB0d2VlbnMuaW5kZXhPZih0aGlzLl90d2Vlbk91dCkgPiAtMSA/IHR3ZWVucy5sZW5ndGggLSAxIDogdHdlZW5zLmxlbmd0aDtcblxuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdHdlZW5PdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90d2Vlbk91dC5raWxsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHdlZW5PdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdHdlZW5PdmVyID0gdGhpcy5hbmltYXRlT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zaWduYWxzLm92ZXIuZGlzcGF0Y2godGhpcywgZXZlbnQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqL1xuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlT3V0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLm5vcm1hbFRleHR1cmU7XG5cbiAgICBpZiAodGhpcy5fdHdlZW5PdmVyKSB7XG4gICAgICAgIHZhciB0d2VlbnMgID0gVHdlZW5NYXguZ2V0VHdlZW5zT2YodGhpcywgdHJ1ZSk7XG4gICAgICAgIHZhciBjb3VudCAgID0gdHdlZW5zLmluZGV4T2YodGhpcy5fdHdlZW5PdmVyKSA+IC0xID8gdHdlZW5zLmxlbmd0aCAtIDEgOiB0d2VlbnMubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0d2VlbnMubGVuZ3RoIDw9IGNvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdHdlZW5PdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHdlZW5PdmVyLmtpbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90d2Vlbk92ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdHdlZW5PdXQgPSB0aGlzLmFuaW1hdGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2lnbmFscy5vdXQuZGlzcGF0Y2godGhpcywgZXZlbnQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqL1xuQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMubm9ybWFsVGV4dHVyZTtcblxuICAgIGlmICh0aGlzLl90d2Vlbk92ZXIpIHtcbiAgICAgICAgdmFyIHR3ZWVucyAgPSBUd2Vlbk1heC5nZXRUd2VlbnNPZih0aGlzLCB0cnVlKTtcbiAgICAgICAgdmFyIGNvdW50ICAgPSB0d2VlbnMuaW5kZXhPZih0aGlzLl90d2Vlbk92ZXIpID4gLTEgPyB0d2VlbnMubGVuZ3RoIC0gMSA6IHR3ZWVucy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHR3ZWVucy5sZW5ndGggPD0gY291bnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90d2Vlbk92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90d2Vlbk92ZXIua2lsbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3R3ZWVuT3ZlciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90d2Vlbk91dCA9IHRoaXMuYW5pbWF0ZU91dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zaWduYWxzLmNsaWNrLmRpc3BhdGNoKHRoaXMsIGV2ZW50KTtcbn07XG5cbi8qKlxuICogQHJldHVybnMge1R3ZWVuTWF4fVxuICovXG5CdXR0b24ucHJvdG90eXBlLmFuaW1hdGVPdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMuc2NhbGUsIDAuOCwge1xuICAgICAgICB4OiB0aGlzLmJhc2VTY2FsZS54ICogMS4zLFxuICAgICAgICB5OiB0aGlzLmJhc2VTY2FsZS54ICogMS4zLFxuICAgICAgICBlYXNlOiBFbGFzdGljLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFsxLjBdXG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtUd2Vlbk1heH1cbiAqL1xuQnV0dG9uLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFR3ZWVuTWF4LnRvKHRoaXMuc2NhbGUsIDAuMywge1xuICAgICAgICB4OiB0aGlzLmJhc2VTY2FsZS54LFxuICAgICAgICB5OiB0aGlzLmJhc2VTY2FsZS55LFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VJbk91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzIuMF1cbiAgICB9KTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcIm5vcm1hbFRleHR1cmVcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQSVhJLlRleHR1cmV9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vcm1hbFRleHR1cmU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcIm92ZXJUZXh0dXJlXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UElYSS5UZXh0dXJlfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVyVGV4dHVyZTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwiZG93blRleHR1cmVcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQSVhJLlRleHR1cmV9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rvd25UZXh0dXJlO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJkaXNhYmxlZFRleHR1cmVcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQSVhJLlRleHR1cmV9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkVGV4dHVyZTtcbiAgICB9XG59KTsiLCIvKipcbiAqICBDaGFyYWN0ZXJcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gOC8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xudmFyIENoYXJhY3RlclR5cGUgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclR5cGVcIik7XG5cbi8qKlxuICogQHBhcmFtIHshU3RyaW5nfSB0eXBlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ2hhcmFjdGVyKHR5cGUpIHtcbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgdGhpcy5zaWduYWxzICAgICAgICAgICAgPSB7fTtcbiAgICB0aGlzLnNpZ25hbHMubW92ZWQgICAgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3AzLlZlY3RvcjJ9XG4gICAgICovXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBwMy5WZWN0b3IyKDAuMCwgMC4wKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zcGVlZCA9IDIwLjA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Q2hhcmFjdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFyZ2V0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbW9uc3RlciA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5fY2hhc2luZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oaXQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leWVIZWlnaHQgPSAwLjA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiA9IDEuMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leWVUd2VlbkhlaWdodCA9IDguMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUd2Vlbk1heH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2V5ZVR3ZWVuID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leWVUaW50ID0gMHhGRkZGRkY7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhcnRQb3MgPSAwLjA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbW92ZURpc3RhbmNlID0gMC4wO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0hvd2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGVwU291bmQgPSBudWxsO1xuXG4gICAgdmFyIHNlcXVlbmNlO1xuICAgIHN3aXRjaCAodGhpcy5fdHlwZSkge1xuICAgICAgICBjYXNlIENoYXJhY3RlclR5cGUuREFQSE5FIDoge1xuICAgICAgICAgICAgdGhpcy5fZXllSGVpZ2h0ICAgICAgICAgICAgID0gMTgwLjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUd2VlbkR1cmF0aW9uICAgICAgPSAwLjE0O1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5IZWlnaHQgICAgICAgID0gMTQuMDtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcGVlZCAgICAgICAgICAgICAgICAgID0gMjIwLjA7XG5cbiAgICAgICAgICAgIHNlcXVlbmNlID0gbmV3IHAzLk1vdmllQ2xpcFNlcXVlbmNlKCk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19kYXBobmVfZGVmXCIpXG4gICAgICAgICAgICBdLCBcImlkbGVcIik7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19kYXBobmVfcmlnaHRcIiksXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19kYXBobmVfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2RhcGhuZV9sZWZ0XCIpXG4gICAgICAgICAgICBdLCBcImxvb2tfbGVmdFwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2RhcGhuZV9sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZGFwaG5lX2JsdXJyZWRcIiksXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19kYXBobmVfcmlnaHRcIilcbiAgICAgICAgICAgIF0sIFwibG9va19yaWdodFwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2RhcGhuZV9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZGFwaG5lX2xlZnRcIilcbiAgICAgICAgICAgIF0sIFwibG9va19sZWZ0X21pZFwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2RhcGhuZV9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZGFwaG5lX3JpZ2h0XCIpXG4gICAgICAgICAgICBdLCBcImxvb2tfcmlnaHRfbWlkXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLkZSRUQgOiB7XG4gICAgICAgICAgICB0aGlzLl9leWVIZWlnaHQgICAgICAgICAgICAgPSAxOTAuMDtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuRHVyYXRpb24gICAgICA9IDAuMTg7XG4gICAgICAgICAgICB0aGlzLl9leWVUd2VlbkhlaWdodCAgICAgICAgPSAxNC4wO1xuICAgICAgICAgICAgdGhpcy5fbW9uc3RlciAgICAgICAgICAgICAgID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAyMjAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2ZyZWRfZGVmXCIpXG4gICAgICAgICAgICBdLCBcImlkbGVcIik7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19mcmVkX3JpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZnJlZF9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZnJlZF9sZWZ0XCIpXG4gICAgICAgICAgICBdLCBcImxvb2tfbGVmdFwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2ZyZWRfbGVmdFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2ZyZWRfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2ZyZWRfcmlnaHRcIilcbiAgICAgICAgICAgIF0sIFwibG9va19yaWdodFwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2ZyZWRfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX2ZyZWRfbGVmdFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX2xlZnRfbWlkXCIpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZnJlZF9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZnJlZF9yaWdodFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX3JpZ2h0X21pZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhcmFjdGVyVHlwZS5TQ09PQllfRE9PIDoge1xuICAgICAgICAgICAgdGhpcy5fZXllSGVpZ2h0ICAgICAgICAgICAgID0gMTYwLjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUd2VlbkR1cmF0aW9uICAgICAgPSAwLjEzO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5IZWlnaHQgICAgICAgID0gMTQuMDtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcGVlZCAgICAgICAgICAgICAgICAgID0gMjIwLjA7XG5cbiAgICAgICAgICAgIHNlcXVlbmNlID0gbmV3IHAzLk1vdmllQ2xpcFNlcXVlbmNlKCk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zY29vYnlfZGVmYXVsdFwiKVxuICAgICAgICAgICAgXSwgXCJpZGxlXCIpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2Nvb2J5X3JpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2Nvb2J5X2JsdXJyZWRcIiksXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zY29vYnlfbGVmdFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX2xlZnRcIik7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zY29vYnlfbGVmdFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3Njb29ieV9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2Nvb2J5X3JpZ2h0XCIpXG4gICAgICAgICAgICBdLCBcImxvb2tfcmlnaHRcIik7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zY29vYnlfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3Njb29ieV9sZWZ0XCIpXG4gICAgICAgICAgICBdLCBcImxvb2tfbGVmdF9taWRcIik7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zY29vYnlfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3Njb29ieV9yaWdodFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX3JpZ2h0X21pZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhcmFjdGVyVHlwZS5TSEFHR1kgOiB7XG4gICAgICAgICAgICB0aGlzLl9leWVIZWlnaHQgICAgICAgICAgICAgPSAxODAuMDtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuRHVyYXRpb24gICAgICA9IDAuMTY7XG4gICAgICAgICAgICB0aGlzLl9leWVUd2VlbkhlaWdodCAgICAgICAgPSAxMi4wO1xuICAgICAgICAgICAgdGhpcy5fbW9uc3RlciAgICAgICAgICAgICAgID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAyMjAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3NoYWdneV9kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3NoYWdneV9yaWdodFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3NoYWdneV9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2hhZ2d5X2xlZnRcIilcbiAgICAgICAgICAgIF0sIFwibG9va19sZWZ0XCIpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2hhZ2d5X2xlZnRcIiksXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zaGFnZ3lfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3NoYWdneV9yaWdodFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX3JpZ2h0XCIpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2hhZ2d5X2JsdXJyZWRcIiksXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zaGFnZ3lfbGVmdFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX2xlZnRfbWlkXCIpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2hhZ2d5X2JsdXJyZWRcIiksXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc19zaGFnZ3lfcmlnaHRcIilcbiAgICAgICAgICAgIF0sIFwibG9va19yaWdodF9taWRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJhY3RlclR5cGUuVkVMTUEgOiB7XG4gICAgICAgICAgICB0aGlzLl9leWVIZWlnaHQgICAgICAgICAgICAgPSAxNzAuMDtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuRHVyYXRpb24gICAgICA9IDAuMTI7XG4gICAgICAgICAgICB0aGlzLl9leWVUd2VlbkhlaWdodCAgICAgICAgPSA4LjA7XG4gICAgICAgICAgICB0aGlzLl9tb25zdGVyICAgICAgICAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgICAgICAgICAgICAgICAgICA9IDIyMC4wO1xuXG4gICAgICAgICAgICBzZXF1ZW5jZSA9IG5ldyBwMy5Nb3ZpZUNsaXBTZXF1ZW5jZSgpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfdmVsbWFfZGVmYXVsdFwiKVxuICAgICAgICAgICAgXSwgXCJpZGxlXCIpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfdmVsbWFfcmlnaHRcIiksXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc192ZWxtYV9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfdmVsbWFfbGVmdFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX2xlZnRcIik7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc192ZWxtYV9sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfdmVsbWFfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3ZlbG1hX3JpZ2h0XCIpXG4gICAgICAgICAgICBdLCBcImxvb2tfcmlnaHRcIik7XG4gICAgICAgICAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhbXG4gICAgICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc192ZWxtYV9ibHVycmVkXCIpLFxuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfdmVsbWFfbGVmdFwiKVxuICAgICAgICAgICAgXSwgXCJsb29rX2xlZnRfbWlkXCIpO1xuICAgICAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICAgICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfdmVsbWFfYmx1cnJlZFwiKSxcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3ZlbG1hX3JpZ2h0XCIpXG4gICAgICAgICAgICBdLCBcImxvb2tfcmlnaHRfbWlkXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfMSA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDMwMC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC4yMDtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDE4LjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweENCRTcwRTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyMV9kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyMV9oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfMiA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDI2MC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC4zMDtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDI0LjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweENCRTcwRTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyMl9kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyMl9oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfMyA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDI4MC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC40MjtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDI4LjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweEZDODIxOTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyM19kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyM19oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfNCA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDI2MC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC4yMDtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDE4LjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweENCRTcwRTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyNF9kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyNF9oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfNSA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDI3MC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC4xODtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDE0LjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweEZDODIxOTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyNV9kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyNV9oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfNiA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDI2MC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC4yNDtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDI0LjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweENCRTcwRTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyNl9kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyNl9oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfNyA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDI5MC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC4xODtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDE0LjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweENCRTcwRTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyN19kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyN19oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfOCA6IHtcbiAgICAgICAgICAgIHRoaXMuX2V5ZUhlaWdodCAgICAgICAgICAgICA9IDMwMC4wO1xuICAgICAgICAgICAgdGhpcy5fZXllVHdlZW5EdXJhdGlvbiAgICAgID0gMC4zNjtcbiAgICAgICAgICAgIHRoaXMuX2V5ZVR3ZWVuSGVpZ2h0ICAgICAgICA9IDIwLjA7XG4gICAgICAgICAgICB0aGlzLl9leWVUaW50ICAgICAgICAgICAgICAgPSAweEZDODIxOTtcbiAgICAgICAgICAgIHRoaXMuX21vbnN0ZXIgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICAgICAgICAgICAgICAgICAgPSAzODAuMDtcblxuICAgICAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyOF9kZWZcIilcbiAgICAgICAgICAgIF0sIFwiaWRsZVwiKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKFtcbiAgICAgICAgICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJtb25zdGVyOF9oaXRcIilcbiAgICAgICAgICAgIF0sIFwiaGl0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7cDMuTW92aWVDbGlwfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXllcyAgICAgICAgICAgICAgICAgID0gbmV3IHAzLk1vdmllQ2xpcChzZXF1ZW5jZSwgXCJpZGxlXCIpO1xuICAgIHRoaXMuX2V5ZXMuYW5jaG9yICAgICAgICAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl9leWVzLmFuaW1hdGlvblNwZWVkICAgPSAwLjQ7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9leWVzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gQ2hhcmFjdGVyO1xuQ2hhcmFjdGVyLnByb3RvdHlwZSAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IENoYXJhY3RlcjtcblxuLyoqXG4gKiBAc3RhdGljXG4gKi9cbkNoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kID0gZnVuY3Rpb24oeCkge1xuICAgIHggPSB4IHx8IDAuMDtcbiAgICB2YXIgc291bmRzID0gW1xuICAgICAgICBcInNmeF9naG91bDFcIixcbiAgICAgICAgXCJzZnhfZ2hvdWwyXCIsXG4gICAgICAgIFwic2Z4X2dob3VsM1wiLFxuICAgICAgICBcInNmeF9naG91bDRcIixcbiAgICAgICAgXCJzZnhfZ2hvdWw1XCIsXG4gICAgICAgIFwic2Z4X2dob3VsNlwiLFxuICAgICAgICBcInNmeF9naG91bDdcIixcbiAgICAgICAgXCJzZnhfZ2hvdWw4XCJcbiAgICBdO1xuICAgIHZhciBzb3VuZCA9IENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKHNvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb3VuZHMubGVuZ3RoKV0pO1xuICAgIHNvdW5kLnBvczNkKHgpO1xufTtcblxuQ2hhcmFjdGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdG9wVHdlZW4oKTtcbiAgICB0aGlzLnJlc2V0RXllcygpO1xufTtcblxuQ2hhcmFjdGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zaWduYWxzLm1vdmVkLmRpc3Bvc2UoKTtcblxuICAgIHRoaXMuc3RvcEZvb3RzdGVwc1NGWCgpO1xufTtcblxuQ2hhcmFjdGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2hhc2luZykge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAodGhpcy5fdGFyZ2V0LnggLSB0aGlzLngpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAodGhpcy5fdGFyZ2V0LnkgLSB0aGlzLnkpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5Lm5vcm1hbGl6ZSgxLjApO1xuXG4gICAgICAgIHZhciBzcGVlZCA9IHRoaXMuc3BlZWQgKiAxLjQ7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueCAqPSBzcGVlZDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IHNwZWVkO1xuXG4gICAgICAgIHRoaXMuc2NhbGUueCA9ICh0aGlzLnZlbG9jaXR5LnggLyBNYXRoLmFicyh0aGlzLnZlbG9jaXR5LngpKTtcbiAgICB9XG5cbiAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54ICogcDMuVGltZXN0ZXAuZGVsdGFUaW1lO1xuICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5LnkgKiBwMy5UaW1lc3RlcC5kZWx0YVRpbWU7XG5cbiAgICBpZiAodGhpcy5fY2hhc2luZykge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gbmV3IHAzLlZlY3RvcjIoKTtcbiAgICAgICAgZGlyZWN0aW9uLnggPSB0aGlzLl90YXJnZXQueCAtIHRoaXMueDtcbiAgICAgICAgZGlyZWN0aW9uLnkgPSB0aGlzLl90YXJnZXQueSAtIHRoaXMueTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbi5sZW5ndGggPCB0aGlzLnNwZWVkICogcDMuVGltZXN0ZXAuZGVsdGFUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLl90YXJnZXQueDtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuX3RhcmdldC55O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuX21vdmVEaXN0YW5jZSAmJiBNYXRoLmFicyh0aGlzLl9zdGFydFBvcy54IC0gdGhpcy54KSA+PSB0aGlzLl9tb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdmVEaXN0YW5jZSA9IDAuMDtcbiAgICAgICAgICAgIHRoaXMuaWRsZVR3ZWVuKCk7XG4gICAgICAgICAgICB0aGlzLnNpZ25hbHMubW92ZWQuZGlzcGF0Y2godGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcEZvb3RzdGVwc1NGWCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRm9vdHN0ZXBzU0ZYKCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcj19IGRpcmVjdGlvblxuICogQHBhcmFtIHtOdW1iZXI9fSBkaXN0YW5jZVxuICovXG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihkaXJlY3Rpb24sIGRpc3RhbmNlKSB7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uIC8gTWF0aC5hYnMoZGlyZWN0aW9uKSB8fCAxO1xuXG4gICAgaWYgKHRoaXMuaGl0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFBvcyAgICAgID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIHRoaXMuX21vdmVEaXN0YW5jZSAgPSBkaXN0YW5jZSB8fCBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHRoaXMudmVsb2NpdHkueCAgICAgPSB0aGlzLnNwZWVkICogZGlyZWN0aW9uO1xuICAgIHRoaXMuc2NhbGUueCAgICAgICAgPSBkaXJlY3Rpb247XG5cbiAgICB0aGlzLl9leWVzLmdvdG9BbmRTdG9wKFwiaWRsZVwiKTtcblxuICAgIHRoaXMucnVuVHdlZW4oKTtcbiAgICB0aGlzLnBsYXlGb290c3RlcHNTRlgoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXI9fSBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbj19IHNob2NrXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSBzb3VuZFxuICovXG5DaGFyYWN0ZXIucHJvdG90eXBlLmxvb2sgPSBmdW5jdGlvbihkaXJlY3Rpb24sIHNob2NrLCBzb3VuZCkge1xuICAgIGRpcmVjdGlvbiAgID0gKGRpcmVjdGlvbiAvIE1hdGguYWJzKGRpcmVjdGlvbikgfHwgMSkgKiB0aGlzLnNjYWxlLng7XG4gICAgc2hvY2sgICAgICAgPSAodHlwZW9mIHNob2NrID09PSBcImJvb2xlYW5cIiA/IHNob2NrIDogZmFsc2UpO1xuICAgIHNvdW5kICAgICAgID0gc291bmQgfHwgZmFsc2U7XG5cbiAgICB2YXIgc2tpcCA9IGZhbHNlO1xuICAgIGlmIChkaXJlY3Rpb24gPT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V5ZXMuY3VycmVudEFuaW1hdGlvbkZyYW1lICE9IFwibG9va19sZWZ0XCIgJiZcbiAgICAgICAgICAgIHRoaXMuX2V5ZXMuY3VycmVudEFuaW1hdGlvbkZyYW1lICE9IFwibG9va19sZWZ0X21pZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXllcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgIT0gXCJpZGxlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9leWVzLmdvdG9BbmRQbGF5KFwibG9va19sZWZ0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9leWVzLmdvdG9BbmRQbGF5KFwibG9va19sZWZ0X21pZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaG9jaykge1xuICAgICAgICAgICAgc2tpcCA9IHRydWU7XG4gICAgICAgICAgICBhbmltYXRlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9leWVzLmN1cnJlbnRBbmltYXRpb25GcmFtZSAhPSBcImxvb2tfcmlnaHRcIiAmJlxuICAgICAgICAgICAgdGhpcy5fZXllcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgIT0gXCJsb29rX3JpZ2h0X21pZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXllcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgIT0gXCJpZGxlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9leWVzLmdvdG9BbmRQbGF5KFwibG9va19yaWdodFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXllcy5nb3RvQW5kUGxheShcImxvb2tfcmlnaHRfbWlkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNob2NrKSB7XG4gICAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgICAgIGFuaW1hdGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvY2sgJiYgIXNraXApIHtcbiAgICAgICAgdGhpcy5fZXllcy5zaWduYWxBbmltYXRpb25GaW5pc2hlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYW5pbWF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgdGltZWxpbmUuYXBwZW5kKFR3ZWVuTWF4LnRvKHRoaXMuX2V5ZXMuc2NhbGUsIDAuMSwge1xuICAgICAgICAgICAgeDogMS4zLFxuICAgICAgICAgICAgeTogMS4zLFxuICAgICAgICAgICAgZWFzZTogUG93ZXIwLmVhc2VPdXRcbiAgICAgICAgfSkpO1xuICAgICAgICB0aW1lbGluZS5hcHBlbmQoVHdlZW5NYXgudG8odGhpcy5fZXllcy5zY2FsZSwgMC4yLCB7XG4gICAgICAgICAgICB4OiAxLjAsXG4gICAgICAgICAgICB5OiAxLjAsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZU91dFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcInNmeF9zY29vYmh1aF9yZXZlcmJcIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLnNsYXAgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2hpdCkge1xuICAgICAgICB0aGlzLl9oaXQgICAgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jaGFzaW5nICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZXllcy5nb3RvQW5kU3RvcChcImhpdFwiKTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwLjA7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDAuMDtcbiAgICAgICAgdGhpcy5zdG9wVHdlZW4oKTtcblxuICAgICAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcyk7XG4gICAgICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLl9leWVzKTtcbiAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuX2V5ZXMuc2NhbGUpO1xuXG4gICAgICAgIHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0aW1lbGluZS5hcHBlbmQoVHdlZW5NYXgudG8odGhpcy5fZXllcy5zY2FsZSwgMC4xLCB7XG4gICAgICAgICAgICB4OiAxLjQsXG4gICAgICAgICAgICB5OiAxLjQsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjAuZWFzZU91dFxuICAgICAgICB9KSk7XG4gICAgICAgIHRpbWVsaW5lLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl9leWVzLnNjYWxlLCAwLjIsIHtcbiAgICAgICAgICAgIHg6IDEuMCxcbiAgICAgICAgICAgIHk6IDEuMCxcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGltZWxpbmUuYXBwZW5kKFR3ZWVuTWF4LnRvKHRoaXMuX2V5ZXMsIDAuNiwge1xuICAgICAgICAgICAgeTogdGhpcy5fZXllcy55ICsgODAuMCxcbiAgICAgICAgICAgIGFscGhhOiAwLjAsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN0b3BGb290c3RlcHNTRlgoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUNoYXJhY3Rlcn0gdGFyZ2V0XG4gKi9cbkNoYXJhY3Rlci5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGhpcy5fdGFyZ2V0ICAgICAgICAgICAgPSB0YXJnZXQ7XG4gICAgdGhpcy5fY2hhc2luZyAgICAgICAgICAgPSBmYWxzZTtcbiAgICB0aGlzLl9leWVzLnNjYWxlICAgICAgICA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMC4wKTtcbiAgICB0aGlzLnZlbG9jaXR5ICAgICAgICAgICA9IG5ldyBwMy5WZWN0b3IyKCk7XG5cbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2V5ZXMuc2NhbGUsIDAuMiwge1xuICAgICAgICB4OiAwLjgsXG4gICAgICAgIHk6IDAuOCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICBlYXNlUGFyYW1zOiBbNC4wXSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLl9leWVzLnNjYWxlLCAxLjAsIHtcbiAgICAgICAgICAgICAgICB4OiAxLjAsXG4gICAgICAgICAgICAgICAgeTogMS4wLFxuICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYXNpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgIH0pKTtcbn07XG5cbkNoYXJhY3Rlci5wcm90b3R5cGUuaWRsZVR3ZWVuID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0gMC4wO1xuXG4gICAgdGhpcy5zdG9wVHdlZW4oKTtcbiAgICB0aGlzLnJlc2V0RXllcygpO1xuXG4gICAgLy8gc3RhcnQgcmVjdXJzaXZlIGJsaW5raW5nXG4gICAgZnVuY3Rpb24gYmxpbmsoKSB7XG4gICAgICAgIHRoaXMuX2V5ZXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2V5ZVR3ZWVuID0gVHdlZW5NYXguZGVsYXllZENhbGwoMC4xICsgTWF0aC5yYW5kb20oKSAqIDQuMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUd2VlbigpO1xuICAgICAgICAgICAgdGhpcy5fZXllcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9leWVUd2VlbiA9IFR3ZWVuTWF4LmRlbGF5ZWRDYWxsKDAuMiwgYmxpbmssIFtdLCB0aGlzKTtcbiAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5hZGQodGhpcy5fZXllVHdlZW4pO1xuXG4gICAgICAgICAgICB2YXIgc291bmRzID0gW1xuICAgICAgICAgICAgICAgIFwic2Z4X2JsaW5rMVwiLFxuICAgICAgICAgICAgICAgIFwic2Z4X2JsaW5rMlwiLFxuICAgICAgICAgICAgICAgIFwic2Z4X2JsaW5rM1wiXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoc291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvdW5kcy5sZW5ndGgpXSwge3ZvbHVtZTogMC4zfSk7XG4gICAgICAgIH0sIFtdLCB0aGlzKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0aGlzLl9leWVUd2Vlbik7XG4gICAgfVxuICAgIGJsaW5rLmNhbGwodGhpcyk7XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLnJ1blR3ZWVuID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGR1cmF0aW9uICAgID0gdGhpcy5fZXllVHdlZW5EdXJhdGlvbjtcbiAgICB2YXIgaGVpZ2h0ICAgICAgPSB0aGlzLl9leWVUd2VlbkhlaWdodDtcblxuICAgIHRoaXMuc3RvcFR3ZWVuKCk7XG4gICAgdGhpcy5yZXNldEV5ZXMoKTtcblxuICAgIC8vIGJvdW5jZSBleWVzXG4gICAgdGhpcy5fZXllVHdlZW4gPSBUd2Vlbk1heC50byh0aGlzLl9leWVzLCBkdXJhdGlvbiwge1xuICAgICAgICB5OiB0aGlzLl9leWVzLnkgLSBoZWlnaHQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0aGlzLl9leWVUd2Vlbik7XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLnN0b3BUd2VlbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9leWVUd2Vlbikge1xuICAgICAgICB0aGlzLl9leWVUd2Vlbi5raWxsKCk7XG4gICAgICAgIENvbW1vbi5hbmltYXRvci5yZW1vdmUodGhpcy5fZXllVHdlZW4pO1xuICAgIH1cbn07XG5cbkNoYXJhY3Rlci5wcm90b3R5cGUucmVzZXRFeWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZXllcy55ICAgICAgICA9IC10aGlzLl9leWVIZWlnaHQ7XG4gICAgdGhpcy5fZXllcy52aXNpYmxlICA9IHRydWU7XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLnBsYXlGb290c3RlcHNTRlggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0b3BGb290c3RlcHNTRlgoKTtcblxuICAgIHZhciBzb3VuZHMgPSB0aGlzLm1vbnN0ZXIgPyBbXG4gICAgICAgIFwic2Z4X2Zvb3RzdGVwc19naG91bDFcIixcbiAgICAgICAgXCJzZnhfZm9vdHN0ZXBzX2dob3VsMlwiLFxuICAgICAgICBcInNmeF9mb290c3RlcHNfZ2hvdWwzXCJcbiAgICBdIDogW1xuICAgICAgICBcInNmeF9mb290c3RlcHNfZ2FuZzFcIixcbiAgICAgICAgXCJzZnhfZm9vdHN0ZXBzX2dhbmcyXCIsXG4gICAgICAgIFwic2Z4X2Zvb3RzdGVwc19nYW5nM1wiXG4gICAgXTtcbiAgICB0aGlzLl9zdGVwU291bmQgPSBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChzb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc291bmRzLmxlbmd0aCldLCB7bG9vcDogdHJ1ZX0pO1xuICAgIHRoaXMudXBkYXRlRm9vdHN0ZXBzU0ZYKCk7XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLnN0b3BGb290c3RlcHNTRlggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fc3RlcFNvdW5kKSB7XG4gICAgICAgIHRoaXMuX3N0ZXBTb3VuZC5zdG9wKCk7XG4gICAgICAgIHRoaXMuX3N0ZXBTb3VuZCA9IG51bGw7XG4gICAgfVxufTtcblxuQ2hhcmFjdGVyLnByb3RvdHlwZS51cGRhdGVGb290c3RlcHNTRlggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fc3RlcFNvdW5kKSB7XG4gICAgICAgIHZhciByYXRpbyA9IDEuMCAtICh0aGlzLnggLyAoQ29tbW9uLlNUQUdFX1dJRFRIICogMC41KSk7XG4gICAgICAgIHRoaXMuX3N0ZXBTb3VuZC5wb3MzZCgtcmF0aW8pO1xuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFyYWN0ZXIucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFyYWN0ZXIucHJvdG90eXBlLCBcImV5ZXNcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtwMy5Nb3ZpZUNsaXB9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V5ZXM7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFyYWN0ZXIucHJvdG90eXBlLCBcImV5ZUhlaWdodFwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXllSGVpZ2h0O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshTnVtYmVyfSB2YWx1ZVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZXllSGVpZ2h0ICAgICA9IC12YWx1ZTtcbiAgICAgICAgdGhpcy5fZXllcy55ICAgICAgICA9IHRoaXMuX2V5ZUhlaWdodDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXJhY3Rlci5wcm90b3R5cGUsIFwidGFyZ2V0XCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhcmFjdGVyLnByb3RvdHlwZSwgXCJtb25zdGVyXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlcjtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXJhY3Rlci5wcm90b3R5cGUsIFwiaGl0XCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGl0O1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhcmFjdGVyLnByb3RvdHlwZSwgXCJjaGFzaW5nXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhc2luZztcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXJhY3Rlci5wcm90b3R5cGUsIFwiZXllVGludFwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXllVGludDtcbiAgICB9XG59KTtcbiIsIi8qKlxuICogIENoYXJhY3RlclR5cGVcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gOC8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQ29tbW9uICAgICAgPSByZXF1aXJlKFwiLi9Db21tb25cIik7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENoYXJhY3RlclR5cGUoKSB7XG59XG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlclR5cGU7XG5cbi8qKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICovXG5DaGFyYWN0ZXJUeXBlLkRBUEhORSA9IFwiZGFwaG5lXCI7XG5cbi8qKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICovXG5DaGFyYWN0ZXJUeXBlLkZSRUQgPSBcImZyZWRcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuU0NPT0JZX0RPTyA9IFwic2Nvb2J5X2Rvb1wiO1xuXG4vKipcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqL1xuQ2hhcmFjdGVyVHlwZS5TSEFHR1kgPSBcInNoYWdneVwiO1xuXG4vKipcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqL1xuQ2hhcmFjdGVyVHlwZS5WRUxNQSA9IFwidmVsbWFcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl8xID0gXCJtb25zdGVyXzFcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl8yID0gXCJtb25zdGVyXzJcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl8zID0gXCJtb25zdGVyXzNcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl80ID0gXCJtb25zdGVyXzRcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl81ID0gXCJtb25zdGVyXzVcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl82ID0gXCJtb25zdGVyXzZcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl83ID0gXCJtb25zdGVyXzdcIjtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNoYXJhY3RlclR5cGUuTU9OU1RFUl84ID0gXCJtb25zdGVyXzhcIjsiLCIvKipcbiAqICBDb21tb25cbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNC8wOS8yMDE1LlxuICpcbiAqL1xuXG5mdW5jdGlvbiBDb21tb24oKSB7XG59XG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbjtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5TVEFHRV9XSURUSCA9IDE5MDAuMDtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5TVEFHRV9IRUlHSFQgPSA3NjguMDtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5GTE9PUl9IRUlHSFQgPSA2ODAuMDtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKi9cbkNvbW1vbi5TUE9PS19ESVNUQU5DRSA9IDQwLjA7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICovXG5Db21tb24uQ0hBUkFDVEVSX1JBRElVUyA9IDYwLjA7XG5cbi8qKlxuICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uc3RhZ2UgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtQSVhJLkNhbnZhc1JlbmRlcmVyfFBJWEkuV2ViR0xSZW5kZXJlcn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnJlbmRlcmVyID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7cDMuVGltZXN0ZXB9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi50aW1lc3RlcCA9IG51bGw7XG5cbi8qKlxuICogQHR5cGUge3AzLlRyYWNraW5nfVxuICogQHN0YXRpY1xuICovXG5Db21tb24udHJhY2tpbmcgPSBudWxsO1xuXG4vKipcbiAqIEB0eXBlIHtwMy5BbmltYXRvcn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLmFuaW1hdG9yID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7U2NlbmVNYW5hZ2VyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uc2NlbmVNYW5hZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7QXNzZXRNYW5hZ2VyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uYXNzZXRNYW5hZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICovXG5Db21tb24uY29weSA9IG51bGw7XG5cbi8qKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLmxhbmd1YWdlID0gXCJnYlwiO1xuXG4vKipcbiAqIEB0eXBlIHtQSVhJLlBvaW50fVxuICogQHN0YXRpY1xuICovXG5Db21tb24udG91Y2ggPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG5cbi8qKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnBhdXNlZCA9IGZhbHNlO1xuXG4vKipcbiAqIEB0eXBlIHtCb29sZWFufVxuICogQHN0YXRpY1xuICovXG5Db21tb24uaXNXZWJHTCA9IGZhbHNlO1xuXG4vKipcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5tb25zdGVyQ291bnQgPSAwO1xuXG4vKipcbiAqIEB0eXBlIHtCb29sZWFufVxuICogQHN0YXRpY1xuICovXG5Db21tb24uaGFzVmlld2VkVHV0b3JpYWwgPSBmYWxzZTtcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uY3VycmVudFRyYWNrID0gbnVsbDtcblxuLyoqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQHN0YXRpY1xuICovXG5Db21tb24uYmVzdFNjb3JlID0gMDtcblxuLyoqXG4gKiBAc3RhdGljXG4gKi9cbkNvbW1vbi5wbGF5TWVudU11c2ljID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKENvbW1vbi5jdXJyZW50VHJhY2sgIT0gXCJtZW51XCIpIHtcbiAgICAgICAgQ29tbW9uLmN1cnJlbnRUcmFjayA9IFwibWVudVwiO1xuICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcIm11c2ljX2NhdmVcIik7XG4gICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKFwibXVzaWNfbG9vcFwiKTtcbiAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJtdXNpY19tZW51XCIsIHt2b2x1bWU6IDEuMCwgbG9vcDogdHJ1ZX0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHN0YXRpY1xuICovXG5Db21tb24ucGxheUdhbWVNdXNpYyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChDb21tb24uY3VycmVudFRyYWNrICE9IFwiZ2FtZVwiKSB7XG4gICAgICAgIENvbW1vbi5jdXJyZW50VHJhY2sgPSBcImdhbWVcIjtcbiAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5zdG9wU291bmQoXCJtdXNpY19tZW51XCIpO1xuICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcIm11c2ljX2NhdmVcIiwge3ZvbHVtZTogMS4wLCBsb29wOiB0cnVlfSk7XG4gICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwibXVzaWNfbG9vcFwiLCB7dm9sdW1lOiAwLjQsIGxvb3A6IHRydWV9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBzdGF0aWNcbiAqL1xuQ29tbW9uLnN0b3BNdXNpYyA9IGZ1bmN0aW9uKCkge1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKFwibXVzaWNfY2F2ZVwiKTtcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcIm11c2ljX2xvb3BcIik7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5zdG9wU291bmQoXCJtdXNpY19tZW51XCIpO1xuICAgIENvbW1vbi5jdXJyZW50VHJhY2sgPSBudWxsO1xufTtcblxuLyoqXG4gKiBAc3RhdGljXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5Db21tb24uc2F2ZVNjb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fTtcbiAgICBkYXRhLnNjb3JlICAgICAgICAgICAgICAgICAgICAgICAgICA9IENvbW1vbi5iZXN0U2NvcmU7XG4gICAgaWYgKENvbW1vbi5tb25zdGVyQ291bnQgPiBkYXRhLnNjb3JlKSB7XG4gICAgICAgIGRhdGEuc2NvcmUgICAgICAgICAgICAgICAgICAgICAgICAgID0gQ29tbW9uLm1vbnN0ZXJDb3VudDtcbiAgICAgICAgQ29tbW9uLmJlc3RTY29yZSAgICAgICAgICAgICAgICAgICAgPSBkYXRhLnNjb3JlO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmJlY29vbHNjb29ieSAgICA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5zY29yZTtcbn07XG5cbi8qKlxuICogQHN0YXRpY1xuICovXG5Db21tb24ubG9hZFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGEgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmJlY29vbHNjb29ieTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhICAgICAgICAgICAgICAgID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgQ29tbW9uLmJlc3RTY29yZSAgICA9IGRhdGEuc2NvcmU7XG4gICAgfVxufTtcbiIsIi8qKlxuICogIEN1dG91dFNoYWRlclxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAxMS8wOS8yMDE1LlxuICpcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7IVBJWEkuVGV4dHVyZX0gdGV4dHVyZVxuICogQHBhcmFtIHtOdW1iZXI9fSBzY2FsZVxuICogQHBhcmFtIHtQSVhJLlBvaW50PX0gcmF0aW9cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDdXRvdXRTaGFkZXIodGV4dHVyZSwgc2NhbGUsIHJhdGlvKSB7XG4gICAgc2NhbGUgICA9IHNjYWxlIHx8IDAuNTtcbiAgICByYXRpbyAgID0gcmF0aW8gfHwgbmV3IFBJWEkuUG9pbnQoMS4wLCAxLjApO1xuXG4gICAgUElYSS5BYnN0cmFjdEZpbHRlci5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICBudWxsLFxuICAgICAgICBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcIiArXG5cbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDtcIiArXG4gICAgICAgIFwidmFyeWluZyB2ZWM0IHZDb2xvcjtcIiArXG5cbiAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB1Q3V0b3V0TWFwO1wiICtcbiAgICAgICAgXCJ1bmlmb3JtIGZsb2F0IHVTY2FsZTtcIiArXG4gICAgICAgIFwidW5pZm9ybSB2ZWMyIHVSYXRpbztcIiArXG5cbiAgICAgICAgXCJ2b2lkIG1haW4odm9pZCkge1wiICtcbiAgICAgICAgICAgIFwidmVjMiB0ZXh0dXJlQ29vcmQgID0gKCgodlRleHR1cmVDb29yZCAtIHZlYzIoMC41LCAwLjUpKSAqIHVSYXRpbykgKiB1U2NhbGUpICsgdmVjMigwLjUsIDAuNSk7XCIgK1xuICAgICAgICAgICAgXCJ2ZWM0IG1hc2sgICAgICAgICAgPSB0ZXh0dXJlMkQodUN1dG91dE1hcCwgdGV4dHVyZUNvb3JkKTtcIiArXG4gICAgICAgICAgICBcImZsb2F0IGFscGhhICAgICAgICA9IDEuMCAtIG1hc2suYTtcIiArXG4gICAgICAgICAgICBcImdsX0ZyYWdDb2xvciAgICAgICA9IHZlYzQodkNvbG9yLnIgKiBhbHBoYSwgdkNvbG9yLmcgKiBhbHBoYSwgdkNvbG9yLmIgKiBhbHBoYSwgdkNvbG9yLmEgKiBhbHBoYSk7XCIgK1xuICAgICAgICBcIn1cIixcbiAgICAgICAge1xuICAgICAgICAgICAgdUN1dG91dE1hcDogICAgIHt0eXBlOiBcInNhbXBsZXIyRFwiLCAgICAgdmFsdWU6IHRleHR1cmV9LFxuICAgICAgICAgICAgdVNjYWxlOiAgICAgICAgIHt0eXBlOiBcImZcIiwgICAgICAgICAgICAgdmFsdWU6IDEuMCAvIE1hdGgubWF4KDAuMDAxLCBzY2FsZSl9LFxuICAgICAgICAgICAgdVJhdGlvOiAgICAgICAgIHt0eXBlOiBcInYyXCIsICAgICAgICAgICAgdmFsdWU6IHt4OiByYXRpby54LCB5OiByYXRpby55fX1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLmlzUG93ZXJPZlR3byA9IGZhbHNlO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgICAgID0gQ3V0b3V0U2hhZGVyO1xuQ3V0b3V0U2hhZGVyLnByb3RvdHlwZSAgICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShQSVhJLkFic3RyYWN0RmlsdGVyLnByb3RvdHlwZSk7XG5DdXRvdXRTaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICAgPSBDdXRvdXRTaGFkZXI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDdXRvdXRTaGFkZXIucHJvdG90eXBlLCBcInNjYWxlXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAxLjAgLyB0aGlzLnVuaWZvcm1zLnVTY2FsZS52YWx1ZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IU51bWJlcn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXMudVNjYWxlLnZhbHVlID0gMS4wIC8gTWF0aC5tYXgoMC4wMDEsIHZhbHVlKTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEN1dG91dFNoYWRlci5wcm90b3R5cGUsIFwicmF0aW9cIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQSVhJLlBvaW50fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUElYSS5Qb2ludCh0aGlzLnVuaWZvcm1zLnVSYXRpby52YWx1ZS54LCB0aGlzLnVuaWZvcm1zLnVSYXRpby52YWx1ZS55KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IVBJWEkuUG9pbnR9IHZhbHVlXG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zLnVSYXRpby52YWx1ZS54ID0gdmFsdWUueDtcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51UmF0aW8udmFsdWUueSA9IHZhbHVlLnk7XG4gICAgfVxufSk7XG4iLCIvKipcbiAqICBDdXRvdXRUcmFuc2l0aW9uXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDExLzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDdXRvdXRTaGFkZXIgICAgPSByZXF1aXJlKFwiLi9DdXRvdXRTaGFkZXJcIik7XG52YXIgRmFkZVRyYW5zaXRpb24gID0gcmVxdWlyZShcIi4vRmFkZVRyYW5zaXRpb25cIik7XG52YXIgVHJhbnNpdGlvbiAgICAgID0gcmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKTtcblxuLyoqXG4gKiBAcGFyYW0geyFQSVhJLlRleHR1cmV9IHRleHR1cmVcbiAqIEBwYXJhbSB7IU51bWJlcn0gY29sb3JcbiAqIEBwYXJhbSB7IU51bWJlcn0gZHVyYXRpb25cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDdXRvdXRUcmFuc2l0aW9uKHRleHR1cmUsIGNvbG9yLCBkdXJhdGlvbikge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zdGFydFNjYWxlID0gOC4wO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmVuZFNjYWxlID0gMC4wO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RleHR1cmUgPSB0ZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbG9yID0gY29sb3IgfHwgMHgwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb24gfHwgMi4wO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY3V0b3V0ID0gbnVsbDtcblxuICAgIFRyYW5zaXRpb24uY2FsbCh0aGlzKTtcblxuICAgIHRoaXMucmVxdWlyZXNXZWJHTCA9IHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gQ3V0b3V0VHJhbnNpdGlvbjtcbkN1dG91dFRyYW5zaXRpb24ucHJvdG90eXBlICAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFRyYW5zaXRpb24ucHJvdG90eXBlKTtcbkN1dG91dFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICAgPSBDdXRvdXRUcmFuc2l0aW9uO1xuXG5DdXRvdXRUcmFuc2l0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHF1YWQgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIHF1YWQuZHJhd1JlY3QoMC4wLCAwLjAsIDEuMCwgMS4wKTtcblxuICAgIHZhciByYXRpbyAgICAgICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdmFyIGNhbnZhc1JhdGlvICAgICA9IHAzLkNhbnZhcy53aWR0aCAvIHAzLkNhbnZhcy5oZWlnaHQ7XG4gICAgdmFyIHRleHR1cmVSYXRpbyAgICA9IHRoaXMuX3RleHR1cmUud2lkdGggLyB0aGlzLl90ZXh0dXJlLmhlaWdodDtcblxuICAgIGlmIChjYW52YXNSYXRpbyAvIHRleHR1cmVSYXRpbyA+IDEuMCkge1xuICAgICAgICByYXRpby54ID0gMS4wO1xuICAgICAgICByYXRpby55ID0gMS4wIC8gKGNhbnZhc1JhdGlvIC8gdGV4dHVyZVJhdGlvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXRpby54ID0gMS4wIC8gKGNhbnZhc1JhdGlvIC8gdGV4dHVyZVJhdGlvKTtcbiAgICAgICAgcmF0aW8ueSA9IDEuMDtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXRvdXQgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKHF1YWQuZ2VuZXJhdGVUZXh0dXJlKCkpO1xuICAgIHRoaXMuX2N1dG91dC5zY2FsZSAgPSBuZXcgUElYSS5Qb2ludChwMy5DYW52YXMud2lkdGgsIHAzLkNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuX2N1dG91dC50aW50ICAgPSB0aGlzLl9jb2xvcjtcbiAgICB0aGlzLl9jdXRvdXQuc2hhZGVyID0gbmV3IEN1dG91dFNoYWRlcih0aGlzLl90ZXh0dXJlLCAwLjAsIHJhdGlvKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2N1dG91dCk7XG59O1xuXG5DdXRvdXRUcmFuc2l0aW9uLnByb3RvdHlwZS5pbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1dG91dC5zaGFkZXIuc2NhbGUgPSB0aGlzLnN0YXJ0U2NhbGU7XG4gICAgVHdlZW5NYXgudG8odGhpcy5fY3V0b3V0LnNoYWRlciwgdGhpcy5fZHVyYXRpb24gKiAwLjUsIHtcbiAgICAgICAgc2NhbGU6IHRoaXMuZW5kU2NhbGUsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXQsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgVHJhbnNpdGlvbi5wcm90b3R5cGUuaW4uY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgfSk7XG59O1xuXG5DdXRvdXRUcmFuc2l0aW9uLnByb3RvdHlwZS5vdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXRvdXQuc2hhZGVyLnNjYWxlID0gdGhpcy5lbmRTY2FsZTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9jdXRvdXQuc2hhZGVyLCB0aGlzLl9kdXJhdGlvbiAqIDAuNSwge1xuICAgICAgICBzY2FsZTogdGhpcy5zdGFydFNjYWxlLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLm91dC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlU2NvcGU6IHRoaXNcbiAgICB9KTtcbn07XG5cbkN1dG91dFRyYW5zaXRpb24ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYXRpbyAgICAgICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdmFyIGNhbnZhc1JhdGlvICAgICA9IHAzLkNhbnZhcy53aWR0aCAvIHAzLkNhbnZhcy5oZWlnaHQ7XG4gICAgdmFyIHRleHR1cmVSYXRpbyAgICA9IHRoaXMuX3RleHR1cmUud2lkdGggLyB0aGlzLl90ZXh0dXJlLmhlaWdodDtcblxuICAgIGlmIChjYW52YXNSYXRpbyAvIHRleHR1cmVSYXRpbyA+IDEuMCkge1xuICAgICAgICByYXRpby54ID0gMS4wO1xuICAgICAgICByYXRpby55ID0gMS4wIC8gKGNhbnZhc1JhdGlvIC8gdGV4dHVyZVJhdGlvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXRpby54ID0gMS4wIC8gKGNhbnZhc1JhdGlvIC8gdGV4dHVyZVJhdGlvKTtcbiAgICAgICAgcmF0aW8ueSA9IDEuMDtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXRvdXQuc2NhbGUgICAgICAgICAgPSBuZXcgUElYSS5Qb2ludChwMy5DYW52YXMud2lkdGgsIHAzLkNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuX2N1dG91dC5zaGFkZXIucmF0aW8gICA9IHJhdGlvO1xufTtcblxuLyoqXG4gKiBAcmV0dXJucyB7VHJhbnNpdGlvbn1cbiAqL1xuQ3V0b3V0VHJhbnNpdGlvbi5wcm90b3R5cGUuZmFsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEZhZGVUcmFuc2l0aW9uKHRoaXMuX2NvbG9yKTtcbn07IiwiLyoqXG4gKiAgRmFkZVRyYW5zaXRpb25cbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMTUvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBUcmFuc2l0aW9uICAgICAgPSByZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpO1xuXG4vKipcbiAqIEBwYXJhbSB7IU51bWJlcn0gY29sb3JcbiAqIEBwYXJhbSB7IU51bWJlcn0gZHVyYXRpb25cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBGYWRlVHJhbnNpdGlvbihjb2xvciwgZHVyYXRpb24pIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvciB8fCAweDA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwLjg7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5HcmFwaGljc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3F1YWQgPSBudWxsO1xuXG4gICAgVHJhbnNpdGlvbi5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IEZhZGVUcmFuc2l0aW9uO1xuRmFkZVRyYW5zaXRpb24ucHJvdG90eXBlICAgICAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoVHJhbnNpdGlvbi5wcm90b3R5cGUpO1xuRmFkZVRyYW5zaXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICAgICA9IEZhZGVUcmFuc2l0aW9uO1xuXG5GYWRlVHJhbnNpdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3F1YWQgICAgICAgICAgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIHRoaXMuX3F1YWQudmlzaWJsZSAgPSBmYWxzZTtcbiAgICB0aGlzLl9xdWFkLmJlZ2luRmlsbCh0aGlzLl9jb2xvcik7XG4gICAgdGhpcy5fcXVhZC5kcmF3UmVjdCgwLjAsIDAuMCwgcDMuQ2FudmFzLndpZHRoLCBwMy5DYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLl9xdWFkLmVuZEZpbGwoKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3F1YWQpO1xufTtcblxuRmFkZVRyYW5zaXRpb24ucHJvdG90eXBlLmluID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcXVhZC5hbHBoYSAgICA9IDAuMDtcbiAgICB0aGlzLl9xdWFkLnZpc2libGUgID0gdHJ1ZTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9xdWFkLCB0aGlzLl9kdXJhdGlvbiAqIDAuNSwge1xuICAgICAgICBhbHBoYTogMS4wLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLmluLmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgIH0pO1xufTtcblxuRmFkZVRyYW5zaXRpb24ucHJvdG90eXBlLm91dCA9IGZ1bmN0aW9uKCkge1xuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX3F1YWQsIHRoaXMuX2R1cmF0aW9uICogMC41LCB7XG4gICAgICAgIGFscGhhOiAwLjAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXQsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fcXVhZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS5vdXQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgfSk7XG59O1xuXG5GYWRlVHJhbnNpdGlvbi5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcXVhZC5jbGVhcigpO1xuICAgIHRoaXMuX3F1YWQuYmVnaW5GaWxsKHRoaXMuX2NvbG9yKTtcbiAgICB0aGlzLl9xdWFkLmRyYXdSZWN0KDAuMCwgMC4wLCBwMy5DYW52YXMud2lkdGgsIHAzLkNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuX3F1YWQuZW5kRmlsbCgpO1xufTsiLCIvKipcbiAqICBHYW1lU2NlbmVcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNy8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQXBwbGljYXRpb24gICAgID0gcmVxdWlyZShcIi4vQXBwbGljYXRpb25cIik7XG52YXIgQnV0dG9uICAgICAgICAgID0gcmVxdWlyZShcIi4vQnV0dG9uXCIpO1xudmFyIENoYXJhY3RlciAgICAgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcbnZhciBDaGFyYWN0ZXJUeXBlICAgPSByZXF1aXJlKFwiLi9DaGFyYWN0ZXJUeXBlXCIpO1xudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBIdWQgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9IdWRcIik7XG52YXIgU2NlbmUgICAgICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG52YXIgU2NlbmFyaW8xICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmFyaW8xXCIpO1xudmFyIFNjZW5hcmlvMiAgICAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvMlwiKTtcbnZhciBTY2VuYXJpbzMgICAgICAgPSByZXF1aXJlKFwiLi9TY2VuYXJpbzNcIik7XG52YXIgU2NlbmFyaW80ICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmFyaW80XCIpO1xudmFyIFNjZW5hcmlvNSAgICAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvNVwiKTtcbnZhciBTY2VuYXJpbzYgICAgICAgPSByZXF1aXJlKFwiLi9TY2VuYXJpbzZcIik7XG52YXIgU2NlbmFyaW83ICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmFyaW83XCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBHYW1lU2NlbmUoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuR3JhcGhpY3N9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iZyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGF1c2VCdXR0b24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2FtZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SHVkfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faHVkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtwMy5UaW1lcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NjZW5hcmlvVGltZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3AzLlRpbWVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcG9wVGltZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5LjxDaGFyYWN0ZXI+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY2hhcmFjdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2FuZ1Bvb2wgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zcG9va2VkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3dhdmVBY3RpdmUgPSBmYWxzZTtcblxuICAgIFNjZW5lLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IEdhbWVTY2VuZTtcbkdhbWVTY2VuZS5wcm90b3R5cGUgICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShTY2VuZS5wcm90b3R5cGUpO1xuR2FtZVNjZW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICAgPSBHYW1lU2NlbmU7XG5cbkdhbWVTY2VuZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2dhbWUgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2dhbWUpO1xuXG4gICAgdGhpcy5fYmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIHRoaXMuX2dhbWUuYWRkQ2hpbGQodGhpcy5fYmcpO1xuXG4gICAgdmFyIGNhdmVMZWZ0ID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImdhbWVfY2F2ZV9sZWZ0XCIpKTtcbiAgICBjYXZlTGVmdC5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAuMCwgMC4wLCAwLjAsIDAuMCk7XG4gICAgdGhpcy5fZ2FtZS5hZGRDaGlsZChjYXZlTGVmdCk7XG5cbiAgICB2YXIgY2F2ZVJpZ2h0ID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImdhbWVfY2F2ZV9yaWdodFwiKSk7XG4gICAgY2F2ZVJpZ2h0LnggPSBDb21tb24uU1RBR0VfV0lEVEg7XG4gICAgY2F2ZVJpZ2h0LmFuY2hvci54ID0gMS4wO1xuICAgIGNhdmVSaWdodC5oaXRBcmVhID0gbmV3IFBJWEkuUmVjdGFuZ2xlKDAuMCwgMC4wLCAwLjAsIDAuMCk7XG4gICAgdGhpcy5fZ2FtZS5hZGRDaGlsZChjYXZlUmlnaHQpO1xuXG4gICAgdGhpcy5fcGF1c2VCdXR0b24gPSBuZXcgQnV0dG9uKFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcGF1c2VfZGVmXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcGF1c2Vfb3ZlclwiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BhdXNlX3ByZXNzZWRcIilcbiAgICApO1xuICAgIHRoaXMuX3BhdXNlQnV0dG9uLnkgPSAxMDAuMDtcbiAgICB0aGlzLl9wYXVzZUJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcbiAgICB0aGlzLl9wYXVzZUJ1dHRvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5fcGF1c2VCdXR0b24uaW5pdCgpO1xuICAgIHRoaXMuX3BhdXNlQnV0dG9uLnNpZ25hbHMuY2xpY2suYWRkKHRoaXMub25QYXVzZUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB0aGlzLl9wYXVzZUJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMub25CdXR0b25Sb2xsT3ZlciwgdGhpcyk7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9wYXVzZUJ1dHRvbik7XG5cbiAgICB0aGlzLl9odWQgPSBuZXcgSHVkKCk7XG4gICAgdGhpcy5faHVkLmluaXQoKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2h1ZCk7XG5cbiAgICB0aGlzLl9zY2VuYXJpb1RpbWVyID0gbmV3IHAzLlRpbWVyKDEuMCwgMSk7XG4gICAgdGhpcy5fc2NlbmFyaW9UaW1lci5zaWduYWxUaW1lckNvbXBsZXRlZC5hZGQodGhpcy5ydW5TY2VuYXJpbywgdGhpcyk7XG4gICAgdGhpcy5fc2NlbmFyaW9UaW1lci5zdG9wKCk7XG5cbiAgICB0aGlzLnN0YXJ0KCk7XG59O1xuXG5HYW1lU2NlbmUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9nYW1lLm1vdXNlZG93biA9IHRoaXMudG91Y2hzdGFydCA9IG51bGw7XG5cbiAgICB2YXIgY2hhcmFjdGVyO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hhcmFjdGVycy5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5fY2hhcmFjdGVyc1tpXTtcbiAgICAgICAgY2hhcmFjdGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhcmFjdGVycy5sZW5ndGggPSAwO1xuXG4gICAgdGhpcy5fcGF1c2VCdXR0b24uZGlzcG9zZSgpO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLnJlbW92ZUFsbCgpO1xuICAgIFR3ZWVuTWF4LmtpbGxBbGwoKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKFwic2Z4X2dob3VsMVwiKTtcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcInNmeF9naG91bDJcIik7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5zdG9wU291bmQoXCJzZnhfZ2hvdWwzXCIpO1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKFwic2Z4X2dob3VsNFwiKTtcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcInNmeF9naG91bDVcIik7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5zdG9wU291bmQoXCJzZnhfZ2hvdWw2XCIpO1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKFwic2Z4X2dob3VsN1wiKTtcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcInNmeF9naG91bDhcIik7XG5cbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcInNmeF9iYXRzMVwiKTtcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcInNmeF9iYXRzMlwiKTtcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChcInNmeF9iYXRzM1wiKTtcblxuICAgIFNjZW5lLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG59O1xuXG5HYW1lU2NlbmUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMueCAgICAgICAgICAgICAgICAgID0gKHAzLkNhbnZhcy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG4gICAgdGhpcy5fcGF1c2VCdXR0b24ueCAgICAgPSAoQ29tbW9uLlNUQUdFX1dJRFRIICsgcDMuQ2FudmFzLndpZHRoKSAqIDAuNSAtIDEwMC4wO1xuXG4gICAgdGhpcy5fYmcuY2xlYXIoKTtcbiAgICB0aGlzLl9iZy5iZWdpbkZpbGwoMHgwKTtcbiAgICB0aGlzLl9iZy5kcmF3UmVjdCgoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuQ2FudmFzLndpZHRoKSAqIDAuNSwgMC4wLCBwMy5DYW52YXMud2lkdGgsIHAzLkNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuX2JnLmVuZEZpbGwoKTtcblxuICAgIHRoaXMuX2h1ZC5yZXNpemUoKTtcbn07XG5cbkdhbWVTY2VuZS5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0aGlzLl9zY2VuYXJpb1RpbWVyKTtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKHRoaXMuX3BvcFRpbWVyKTtcblxuICAgIHRoaXMuYW5pbWF0ZUluKCk7XG4gICAgdGhpcy5wbGF5QmF0QW1iaWVuY2UoKTtcblxuICAgIC8vIHNob3cgcGF1c2Ugc2NyZWVuXG4gICAgaWYgKCFDb21tb24uaGFzVmlld2VkVHV0b3JpYWwpIHtcbiAgICAgICAgQ29tbW9uLmhhc1ZpZXdlZFR1dG9yaWFsID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGF0LnNpZ25hbHMucGF1c2UuZGlzcGF0Y2goKTtcbiAgICAgICAgfSwgMC4wKTtcbiAgICB9XG59O1xuXG5HYW1lU2NlbmUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcblxufTtcblxuR2FtZVNjZW5lLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZFwiKTtcbiAgICB0aGlzLm5leHRTY2VuYXJpbygpO1xuXG4gICAgQ29tbW9uLm1vbnN0ZXJDb3VudCA9IDA7XG5cbiAgICB0aGlzLl9nYW1lLmludGVyYWN0aXZlICA9IHRydWU7XG4gICAgdGhpcy5fZ2FtZS5tb3VzZWRvd24gICAgPSB0aGlzLl9nYW1lLnRvdWNoc3RhcnQgPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG59O1xuXG5HYW1lU2NlbmUucHJvdG90eXBlLnJ1blNjZW5hcmlvID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGFydGVkIHNjZW5hcmlvXCIpO1xuICAgIHRoaXMuX3dhdmVBY3RpdmUgPSB0cnVlO1xuXG4gICAgdmFyIHNjZW5hcmlvcyA9IFtcbiAgICAgICAgU2NlbmFyaW8xLFxuICAgICAgICBTY2VuYXJpbzIsXG4gICAgICAgIFNjZW5hcmlvMyxcbiAgICAgICAgU2NlbmFyaW80LFxuICAgICAgICBTY2VuYXJpbzUsXG4gICAgICAgIFNjZW5hcmlvNixcbiAgICAgICAgU2NlbmFyaW83XG4gICAgXTtcbiAgICB2YXIgYmFzZSAgICAgICAgICAgICAgICA9IHNjZW5hcmlvc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzY2VuYXJpb3MubGVuZ3RoKV07XG4gICAgdmFyIHNjZW5hcmlvICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKGJhc2UucHJvdG90eXBlKTtcbiAgICBzY2VuYXJpby5jb25zdHJ1Y3RlciAgICA9IGJhc2U7XG4gICAgYmFzZS5hcHBseShzY2VuYXJpbyk7XG4gICAgc2NlbmFyaW8uY3JlYXRlKHRoaXMpO1xufTtcblxuR2FtZVNjZW5lLnByb3RvdHlwZS5uZXh0U2NlbmFyaW8gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5leHQgc2NlbmFyaW9cIik7XG4gICAgdGhpcy5fd2F2ZUFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNoYXJhY3RlcjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NoYXJhY3RlcnMubGVuZ3RoOyArKyBpKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHRoaXMuX2NoYXJhY3RlcnNbaV07XG4gICAgICAgIGNoYXJhY3Rlci5wYXJlbnQucmVtb3ZlQ2hpbGQoY2hhcmFjdGVyKTtcbiAgICAgICAgY2hhcmFjdGVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhcmFjdGVycy5sZW5ndGggPSAwO1xuXG4gICAgdGhpcy5fc2NlbmFyaW9UaW1lci5yZXNldCgpO1xuICAgIHRoaXMuX3NjZW5hcmlvVGltZXIuc3RhcnQoKTtcblxuICAgIHRoaXMuX2dhbmdQb29sID0gW1xuICAgICAgICBDaGFyYWN0ZXJUeXBlLkRBUEhORSxcbiAgICAgICAgQ2hhcmFjdGVyVHlwZS5GUkVELFxuICAgICAgICBDaGFyYWN0ZXJUeXBlLlNDT09CWV9ET08sXG4gICAgICAgIENoYXJhY3RlclR5cGUuU0hBR0dZLFxuICAgICAgICBDaGFyYWN0ZXJUeXBlLlZFTE1BXG4gICAgXTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshQ2hhcmFjdGVyfSB0YXJnZXRcbiAqIEBwYXJhbSB7TnVtYmVyPX0gZGVsYXlcbiAqL1xuR2FtZVNjZW5lLnByb3RvdHlwZS5wb3BNb25zdGVyID0gZnVuY3Rpb24odGFyZ2V0LCBkZWxheSkge1xuICAgIGRlbGF5ID0gZGVsYXkgfHwgMC4wO1xuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcG9zaXRpb24sIGFuZ2xlO1xuICAgICAgICB2YXIgY2VudGVyID0gbmV3IFBJWEkuUG9pbnQoQ29tbW9uLlNUQUdFX1dJRFRIICogMC41LCAxODAuMCk7XG5cbiAgICAgICAgdmFyIGF0dGVtcHRzID0gMjAwO1xuICAgICAgICB3aGlsZSAoIXBvc2l0aW9uICYmIGF0dGVtcHRzID4gMCkge1xuICAgICAgICAgICAgYW5nbGUgICAgICAgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbiAgICAgICAgICAgIHBvc2l0aW9uICAgID0gbmV3IFBJWEkuUG9pbnQoKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggID0gY2VudGVyLnggKyBNYXRoLmNvcyhhbmdsZSkgKiAoTWF0aC5yYW5kb20oKSAqIDI2MC4wKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgID0gY2VudGVyLnkgKyBNYXRoLnNpbihhbmdsZSkgKiAoTWF0aC5yYW5kb20oKSAqIDE0MC4wKTtcblxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciwgZGlyZWN0aW9uO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGFyYWN0ZXJzLmxlbmd0aDsgKysgaSkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IHRoaXMuX2NoYXJhY3RlcnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3Rlci5tb25zdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IG5ldyBwMy5WZWN0b3IyKHBvc2l0aW9uLnggLSBjaGFyYWN0ZXIueCwgKHBvc2l0aW9uLnkgLSAoY2hhcmFjdGVyLnkgLSBjaGFyYWN0ZXIuZXllSGVpZ2h0KSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmxlbmd0aCA8IDgwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC0tIGF0dGVtcHRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBvc2l0aW9uKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG1vbnN0ZXIgICAgICAgICA9IHRoaXMuY3JlYXRlUmFuZG9tTW9uc3RlcigpO1xuICAgICAgICBtb25zdGVyLnggICAgICAgICAgID0gcG9zaXRpb24ueDtcbiAgICAgICAgbW9uc3Rlci55ICAgICAgICAgICA9IHBvc2l0aW9uLnkgKyBtb25zdGVyLmV5ZUhlaWdodDtcbiAgICAgICAgbW9uc3Rlci5zY2FsZS54ICAgICA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxLjAgOiAtMS4wO1xuICAgICAgICBtb25zdGVyLnBvcCh0YXJnZXQpO1xuICAgIH0sIGRlbGF5LCB0aGlzKTtcbn07XG5cbkdhbWVTY2VuZS5wcm90b3R5cGUuY3JlYXRlUmFuZG9tR2FuZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRleCAgID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fZ2FuZ1Bvb2wubGVuZ3RoKTtcbiAgICB2YXIgZ2FuZyAgICA9IG5ldyBDaGFyYWN0ZXIodGhpcy5fZ2FuZ1Bvb2xbaW5kZXhdKTtcbiAgICBnYW5nLnkgICAgICA9IENvbW1vbi5GTE9PUl9IRUlHSFQ7XG4gICAgZ2FuZy5pbml0KCk7XG4gICAgdGhpcy5fZ2FtZS5hZGRDaGlsZEF0KGdhbmcsIDEpO1xuICAgIHRoaXMuX2NoYXJhY3RlcnMucHVzaChnYW5nKTtcbiAgICB0aGlzLl9nYW5nUG9vbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBnYW5nO1xufTtcblxuR2FtZVNjZW5lLnByb3RvdHlwZS5jcmVhdGVSYW5kb21Nb25zdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1vbnN0ZXJzID0gW1xuICAgICAgICBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfMSxcbiAgICAgICAgQ2hhcmFjdGVyVHlwZS5NT05TVEVSXzIsXG4gICAgICAgIENoYXJhY3RlclR5cGUuTU9OU1RFUl8zLFxuICAgICAgICBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfNCxcbiAgICAgICAgQ2hhcmFjdGVyVHlwZS5NT05TVEVSXzUsXG4gICAgICAgIENoYXJhY3RlclR5cGUuTU9OU1RFUl82LFxuICAgICAgICBDaGFyYWN0ZXJUeXBlLk1PTlNURVJfNyxcbiAgICAgICAgQ2hhcmFjdGVyVHlwZS5NT05TVEVSXzhcbiAgICBdO1xuICAgIHZhciBtb25zdGVyICAgICA9IG5ldyBDaGFyYWN0ZXIobW9uc3RlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9uc3RlcnMubGVuZ3RoKV0pO1xuICAgIG1vbnN0ZXIueSAgICAgICA9IENvbW1vbi5GTE9PUl9IRUlHSFQ7XG4gICAgbW9uc3Rlci5pbml0KCk7XG4gICAgdGhpcy5fZ2FtZS5hZGRDaGlsZEF0KG1vbnN0ZXIsIDEpO1xuICAgIHRoaXMuX2NoYXJhY3RlcnMucHVzaChtb25zdGVyKTtcbiAgICByZXR1cm4gbW9uc3Rlcjtcbn07XG5cbkdhbWVTY2VuZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKENvbW1vbi5hbmltYXRvci5wYXVzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGFyYWN0ZXI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGFyYWN0ZXJzLmxlbmd0aDsgKysgaSkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLl9jaGFyYWN0ZXJzW2ldO1xuICAgICAgICBjaGFyYWN0ZXIudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3dhdmVBY3RpdmUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tTY2VuYXJpb0ZpbmlzaCgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIHNjZW5hcmlvXCIpO1xuICAgICAgICAgICAgdGhpcy5uZXh0U2NlbmFyaW8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fc3Bvb2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nwb29rZWQgPSB0aGlzLmNoZWNrR2FuZ1Nwb29rKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fc3Bvb2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFscy5uZXh0LmRpc3BhdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5HYW1lU2NlbmUucHJvdG90eXBlLmNoZWNrU2NlbmFyaW9GaW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hhcmFjdGVyO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGFyYWN0ZXJzLmxlbmd0aDsgKysgaSkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB0aGlzLl9jaGFyYWN0ZXJzW2ldO1xuICAgICAgICBpZiAoIWNoYXJhY3Rlci5tb25zdGVyICYmICEoY2hhcmFjdGVyLnggPiB0aGlzLmxlZnRCb3VuZCAmJiBjaGFyYWN0ZXIueCA8IHRoaXMucmlnaHRCb3VuZCkpIHtcbiAgICAgICAgICAgICsrIGNvdW50O1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci5oaXQpIHtcbiAgICAgICAgICAgICsrIGNvdW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudCA+PSB0aGlzLl9jaGFyYWN0ZXJzLmxlbmd0aDtcbn07XG5cbkdhbWVTY2VuZS5wcm90b3R5cGUuY2hlY2tHYW5nU3Bvb2sgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2FuZywgbW9uc3RlciwgZGlyZWN0aW9uO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hhcmFjdGVycy5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgZ2FuZyA9IHRoaXMuX2NoYXJhY3RlcnNbaV07XG4gICAgICAgIGlmICghZ2FuZy5tb25zdGVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuX2NoYXJhY3RlcnMubGVuZ3RoOyArKyBqKSB7XG4gICAgICAgICAgICAgICAgbW9uc3RlciA9IHRoaXMuX2NoYXJhY3RlcnNbal07XG4gICAgICAgICAgICAgICAgaWYgKG1vbnN0ZXIubW9uc3RlciAmJiBtb25zdGVyICE9IGdhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb25zdGVyLmhpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IHAzLlZlY3RvcjIobW9uc3Rlci54IC0gZ2FuZy54LCBtb25zdGVyLnkgLSBnYW5nLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi5sZW5ndGggPCBDb21tb24uU1BPT0tfRElTVEFOQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuR2FtZVNjZW5lLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICB0aGlzLl9wYXVzZUJ1dHRvbi5zY2FsZSAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdGhpcy5fcGF1c2VCdXR0b24udmlzaWJsZSAgID0gdHJ1ZTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9wYXVzZUJ1dHRvbi5zY2FsZSwgMC40LCB7XG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyLjBdXG4gICAgfSk7XG59O1xuXG5HYW1lU2NlbmUucHJvdG90eXBlLnBsYXlCYXRBbWJpZW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc291bmRzID0gW1xuICAgICAgICAgICAgXCJzZnhfYmF0czFcIixcbiAgICAgICAgICAgIFwic2Z4X2JhdHMyXCIsXG4gICAgICAgICAgICBcInNmeF9iYXRzM1wiXG4gICAgICAgIF07XG4gICAgICAgIHZhciBzb3VuZCA9IENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKHNvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb3VuZHMubGVuZ3RoKV0pO1xuICAgICAgICBzb3VuZC5wb3MzZChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMS4wIDogLTEuMCk7XG5cbiAgICAgICAgdGhpcy5wbGF5QmF0QW1iaWVuY2UoKTtcbiAgICB9LCA0LjAgKyBNYXRoLnJhbmRvbSgpICogOC4wLCB0aGlzKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshQnV0dG9ufSBidXR0b25cbiAqL1xuR2FtZVNjZW5lLnByb3RvdHlwZS5vblBhdXNlQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbihidXR0b24pIHtcbiAgICB0aGlzLnNpZ25hbHMucGF1c2UuZGlzcGF0Y2goKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshQnV0dG9ufSBidXR0b25cbiAqL1xuR2FtZVNjZW5lLnByb3RvdHlwZS5vbkJ1dHRvblJvbGxPdmVyID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfcm9sbG92ZXJcIik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fVxuICovXG5HYW1lU2NlbmUucHJvdG90eXBlLm9uTW91c2VEb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcG9pbnQgPSBldmVudC5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcyk7XG5cbiAgICB2YXIgaGl0ID0gZmFsc2U7XG4gICAgdmFyIGNoYXJhY3RlcjtcbiAgICB2YXIgZGlyZWN0aW9uO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hhcmFjdGVycy5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdGhpcy5fY2hhcmFjdGVyc1tpXTtcbiAgICAgICAgaWYgKCFjaGFyYWN0ZXIuaGl0KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgcDMuVmVjdG9yMihjaGFyYWN0ZXIueCAtIHBvaW50LngsIChjaGFyYWN0ZXIueSAtIGNoYXJhY3Rlci5leWVIZWlnaHQpIC0gcG9pbnQueSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmxlbmd0aCA8IENvbW1vbi5DSEFSQUNURVJfUkFESVVTICogTWF0aC5hYnMoY2hhcmFjdGVyLnNjYWxlLngpKSB7XG4gICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyLm1vbnN0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXRNb25zdGVyKGNoYXJhY3Rlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXRHYW5nKGNoYXJhY3Rlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gd2UgbWlzc2VkIHNvIHBsYXkgbWlzcyBzb3VuZFxuICAgIGlmICghaGl0KSB7XG4gICAgICAgIHZhciBzb3VuZHMgPSBbXG4gICAgICAgICAgICBcInNmeF9taXNzMVwiLFxuICAgICAgICAgICAgXCJzZnhfbWlzczJcIixcbiAgICAgICAgICAgIFwic2Z4X21pc3MzXCJcbiAgICAgICAgXTtcbiAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoc291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvdW5kcy5sZW5ndGgpXSk7XG4gICAgfVxufTtcblxuR2FtZVNjZW5lLnByb3RvdHlwZS5oaXRHYW5nID0gZnVuY3Rpb24oY2hhcmFjdGVyKSB7XG4gICAgaWYgKCFjaGFyYWN0ZXIuaGl0KSB7XG4gICAgICAgIGNoYXJhY3Rlci5zbGFwKCk7XG4gICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fc3Bvb2tlZCA9IHRydWU7XG4gICAgICAgIH0sIDEuNCwgdGhpcyk7XG5cbiAgICAgICAgdmFyIGNvbmZpZyA9IENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0SlNPTihcImJ1cnN0Z2FuZ1wiKTtcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBuZXcgcDMuUGFydGljbGVTeXN0ZW0oW1xuICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDAxXCIpLFxuICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDAyXCIpLFxuICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDAzXCIpXG4gICAgICAgIF0sIGNvbmZpZyk7XG4gICAgICAgIGVtaXR0ZXIueCA9IGNoYXJhY3Rlci54O1xuICAgICAgICBlbWl0dGVyLnkgPSBjaGFyYWN0ZXIueSAtIGNoYXJhY3Rlci5leWVIZWlnaHQ7XG4gICAgICAgIGVtaXR0ZXIudGludCA9IGNoYXJhY3Rlci5leWVUaW50O1xuICAgICAgICBlbWl0dGVyLm9uZVNob3QoKTtcbiAgICAgICAgY2hhcmFjdGVyLnBhcmVudC5hZGRDaGlsZChlbWl0dGVyKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZChlbWl0dGVyKTtcblxuICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcInNmeF9oaXRfZ2FuZ1wiKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUNoYXJhY3Rlcn0gY2hhcmFjdGVyXG4gKi9cbkdhbWVTY2VuZS5wcm90b3R5cGUuaGl0TW9uc3RlciA9IGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xuICAgIGlmICghY2hhcmFjdGVyLmhpdCkge1xuICAgICAgICBjaGFyYWN0ZXIuc2xhcCgpO1xuICAgICAgICB0aGlzLl9odWQudXBkYXRlTW9uc3RlckNvdW50KCsrIENvbW1vbi5tb25zdGVyQ291bnQpO1xuXG4gICAgICAgIHZhciBjb25maWcgPSBDb21tb24uYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJidXJzdFwiKTtcbiAgICAgICAgdmFyIGVtaXR0ZXIgPSBuZXcgcDMuUGFydGljbGVTeXN0ZW0oW1xuICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDAxXCIpLFxuICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDAyXCIpLFxuICAgICAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicGFydGljbGVfMDAzXCIpXG4gICAgICAgIF0sIGNvbmZpZyk7XG4gICAgICAgIGVtaXR0ZXIueCA9IGNoYXJhY3Rlci54O1xuICAgICAgICBlbWl0dGVyLnkgPSBjaGFyYWN0ZXIueSAtIGNoYXJhY3Rlci5leWVIZWlnaHQ7XG4gICAgICAgIGVtaXR0ZXIudGludCA9IGNoYXJhY3Rlci5leWVUaW50O1xuICAgICAgICBlbWl0dGVyLm9uZVNob3QoKTtcbiAgICAgICAgY2hhcmFjdGVyLnBhcmVudC5hZGRDaGlsZChlbWl0dGVyKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZChlbWl0dGVyKTtcblxuICAgICAgICB2YXIgc291bmRzID0gW1xuICAgICAgICAgICAgXCJzZnhfaGl0MVwiLFxuICAgICAgICAgICAgXCJzZnhfaGl0MlwiLFxuICAgICAgICAgICAgXCJzZnhfaGl0M1wiXG4gICAgICAgIF07XG4gICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKHNvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb3VuZHMubGVuZ3RoKV0pO1xuICAgIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lU2NlbmUucHJvdG90eXBlLCBcImdhbmdDb3VudFwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZ2FuZztcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGFyYWN0ZXJzLmxlbmd0aDsgKysgaSkge1xuICAgICAgICAgICAgZ2FuZyA9IHRoaXMuX2NoYXJhY3RlcnNbaV07XG4gICAgICAgICAgICBpZiAoIWdhbmcubW9uc3Rlcikge1xuICAgICAgICAgICAgICAgICsrIGNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVTY2VuZS5wcm90b3R5cGUsIFwibW9uc3RlckNvdW50XCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtb25zdGVyO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NoYXJhY3RlcnMubGVuZ3RoOyArKyBpKSB7XG4gICAgICAgICAgICBtb25zdGVyID0gdGhpcy5fY2hhcmFjdGVyc1tpXTtcbiAgICAgICAgICAgIGlmIChtb25zdGVyLm1vbnN0ZXIpIHtcbiAgICAgICAgICAgICAgICArKyBjb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lU2NlbmUucHJvdG90eXBlLCBcImxlZnRCb3VuZFwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKENvbW1vbi5TVEFHRV9XSURUSCAtIDEwMjQuMCkgKiAwLjUgLSAxMDAuMDtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVTY2VuZS5wcm90b3R5cGUsIFwicmlnaHRCb3VuZFwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKENvbW1vbi5TVEFHRV9XSURUSCArIDEwMjQuMCkgKiAwLjUgKyAxMDAuMDtcbiAgICB9XG59KTtcbiIsIi8qKlxuICogIEh1ZFxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA3LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSHVkKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhbmVsID0gbnVsbDtcblxuICAgIFBJWEkuQ29udGFpbmVyLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgPSBIdWQ7XG5IdWQucHJvdG90eXBlICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XG5IdWQucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgPSBIdWQ7XG5cbkh1ZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BhbmVsICAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoXCJzY29yZV9ib3gucG5nXCIpKTtcbiAgICB0aGlzLl9wYW5lbC55ICAgICAgICAgICA9IDEwNC4wO1xuICAgIHRoaXMuX3BhbmVsLmFuY2hvciAgICAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcGFuZWwpO1xuXG4gICAgdmFyIGF0bGFzID0gQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRGb250QXRsYXMoXCJoZWx2ZXRpY2FsXzQwX2NvbmRlbnNlZGJvbGRfZ3JlZW5cIik7XG4gICAgdGhpcy5fcGFuZWwudGV4dCA9IG5ldyBwMy5CaXRtYXBUZXh0KFwiMFwiLCBhdGxhcywgcDMuQml0bWFwVGV4dC5BTElHTl9DRU5URVIpO1xuICAgIHRoaXMuX3BhbmVsLnRleHQueCA9IDM4LjA7XG4gICAgdGhpcy5fcGFuZWwudGV4dC55ID0gLTI2LjA7XG4gICAgdGhpcy5fcGFuZWwuYWRkQ2hpbGQodGhpcy5fcGFuZWwudGV4dCk7XG59O1xuXG5IdWQucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbn07XG5cbkh1ZC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcGFuZWwueCA9IChDb21tb24uU1RBR0VfV0lEVEggLSBwMy5DYW52YXMud2lkdGgpICogMC41ICsgMTUyLjA7XG59O1xuXG5IdWQucHJvdG90eXBlLnVwZGF0ZU1vbnN0ZXJDb3VudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fcGFuZWwudGV4dC50ZXh0ID0gdmFsdWUudG9TdHJpbmcoKTtcblxuICAgIHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRpbWVsaW5lLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl9wYW5lbC5zY2FsZSwgMC4xLCB7XG4gICAgICAgIHg6IDEuMixcbiAgICAgICAgeTogMS4yLFxuICAgICAgICBlYXNlOiBQb3dlcjAuZWFzZU91dFxuICAgIH0pKTtcbiAgICB0aW1lbGluZS5hcHBlbmQoVHdlZW5NYXgudG8odGhpcy5fcGFuZWwuc2NhbGUsIDAuMiwge1xuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VPdXRcbiAgICB9KSk7XG59OyIsIi8qKlxuICogIEludHJvU2NlbmUxXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDkvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIEFuaW1hdGlvblNjZW5lICA9IHJlcXVpcmUoXCIuL0FuaW1hdGlvblNjZW5lXCIpO1xudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50cm9TY2VuZTEoKSB7XG4gICAgQW5pbWF0aW9uU2NlbmUuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtwMy5DYW1lcmF9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jYW1lcmEgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuQ29udGFpbmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGF5ZXIxID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkRpc3BsYXlPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92YW4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3AzLk1vdmllQ2xpcH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbWV0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheS48cDMuTW92aWVDbGlwPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXJzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlBvaW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZm9jdXMgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IEludHJvU2NlbmUxO1xuSW50cm9TY2VuZTEucHJvdG90eXBlICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKEFuaW1hdGlvblNjZW5lLnByb3RvdHlwZSk7XG5JbnRyb1NjZW5lMS5wcm90b3R5cGUuY29uc3RydWN0b3IgICA9IEludHJvU2NlbmUxO1xuXG5JbnRyb1NjZW5lMS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2NhbWVyYSAgICAgICAgICAgID0gbmV3IHAzLkNhbWVyYSgpO1xuICAgIHRoaXMuX2NhbWVyYS50cmFja0Vhc2UgID0gMS4wO1xuICAgIHRoaXMuX2NhbWVyYS50cmFja1RhcmdldCh0aGlzLl9mb2N1cywgdHJ1ZSk7XG5cbiAgICB0aGlzLl9sYXllcjEgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xheWVyMSk7XG4gICAgdGhpcy5fY2FtZXJhLmFkZExheWVyKFwibGF5ZXIxXCIsIHRoaXMuX2xheWVyMSwgbmV3IFBJWEkuUG9pbnQoMS4wLCAxLjApKTtcblxuICAgIHZhciBiZyA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJkZXNlcnRfcm9hZFwiKSk7XG4gICAgdGhpcy5fbGF5ZXIxLmFkZENoaWxkKGJnKTtcblxuICAgIHRoaXMuX3ZhbiAgICAgICA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgIHRoaXMuX3Zhbi54ICAgICA9IDAuMDtcbiAgICB0aGlzLl92YW4ueSAgICAgPSA1MDQuMDtcbiAgICB0aGlzLl9sYXllcjEuYWRkQ2hpbGQodGhpcy5fdmFuKTtcblxuICAgIHRoaXMuX3Zhbi5jaGFzc2lzICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJ2YW5fc21hbGxcIikpO1xuICAgIHRoaXMuX3Zhbi5jaGFzc2lzLmFuY2hvciAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl92YW4uYWRkQ2hpbGQodGhpcy5fdmFuLmNoYXNzaXMpO1xuXG4gICAgdGhpcy5fdmFuLndoZWVscyAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInZhbl9zbWFsbF93aGVlbHNcIikpO1xuICAgIHRoaXMuX3Zhbi53aGVlbHMueCAgICAgICAgICA9IC0xMzkuMDtcbiAgICB0aGlzLl92YW4ud2hlZWxzLnkgICAgICAgICAgPSAxOS4wO1xuICAgIHRoaXMuX3Zhbi53aGVlbHMuYW5jaG9yICAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl92YW4uYWRkQ2hpbGRBdCh0aGlzLl92YW4ud2hlZWxzLCAwKTtcblxuICAgIHZhciBmcmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDMwOyArKyBpKSB7XG4gICAgICAgIGZyYW1lcy5wdXNoKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImNvbWV0X1wiICsgcDMuVXRpbHMucGFkTnVtYmVyKGkgKyAxLCA0KSkpO1xuICAgIH1cbiAgICB2YXIgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICBzZXF1ZW5jZS5hZGRUZXh0dXJlcyhmcmFtZXMsIFwiZGVmYXVsdFwiKTtcbiAgICB0aGlzLl9jb21ldCAgICAgICAgICAgICAgICAgPSBuZXcgcDMuTW92aWVDbGlwKHNlcXVlbmNlLCBcImRlZmF1bHRcIik7XG4gICAgdGhpcy5fY29tZXQueCAgICAgICAgICAgICAgID0gODYwLjA7XG4gICAgdGhpcy5fY29tZXQueSAgICAgICAgICAgICAgID0gMjAwLjA7XG4gICAgdGhpcy5fY29tZXQucm90YXRpb24gICAgICAgID0gLTYuMCAqIFBJWEkuREVHX1RPX1JBRDtcbiAgICB0aGlzLl9jb21ldC5hbmNob3IgICAgICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fY29tZXQuYW5pbWF0aW9uU3BlZWQgID0gMC45O1xuICAgIHRoaXMuX2xheWVyMS5hZGRDaGlsZCh0aGlzLl9jb21ldCk7XG5cbiAgICBmcmFtZXMgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMjA7ICsrIGkpIHtcbiAgICAgICAgZnJhbWVzLnB1c2goQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic3Rhcl9cIiArIHAzLlV0aWxzLnBhZE51bWJlcihpICsgMSwgNCkpKTtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb25zID0gW1xuICAgICAgICBuZXcgUElYSS5Qb2ludCg2MDAuMCwgMTIwLjApLFxuICAgICAgICBuZXcgUElYSS5Qb2ludCgxMDAwLjAsIDQwLjApLFxuICAgICAgICBuZXcgUElYSS5Qb2ludCgxNDAwLjAsIDIyMC4wKVxuICAgIF07XG5cbiAgICB2YXIgc3RhcjtcbiAgICB0aGlzLl9zdGFycyA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyArKyBpKSB7XG4gICAgICAgIHNlcXVlbmNlID0gbmV3IHAzLk1vdmllQ2xpcFNlcXVlbmNlKCk7XG4gICAgICAgIHNlcXVlbmNlLmFkZFRleHR1cmVzKGZyYW1lcywgXCJkZWZhdWx0XCIpO1xuICAgICAgICBzdGFyICAgICAgICAgICAgICAgICAgICA9IG5ldyBwMy5Nb3ZpZUNsaXAoc2VxdWVuY2UsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgc3Rhci54ICAgICAgICAgICAgICAgICAgPSBwb3NpdGlvbnNbaV0ueDtcbiAgICAgICAgc3Rhci55ICAgICAgICAgICAgICAgICAgPSBwb3NpdGlvbnNbaV0ueTtcbiAgICAgICAgc3Rhci5hbmltYXRpb25TcGVlZCAgICAgPSAxLjAgLyAyLjA7XG4gICAgICAgIHN0YXIubG9vcGluZyAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgc3Rhci5nb3RvQW5kUGxheShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmcmFtZXMubGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuX2xheWVyMS5hZGRDaGlsZChzdGFyKTtcbiAgICAgICAgdGhpcy5fc3RhcnMucHVzaChzdGFyKTtcbiAgICB9XG5cbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xufTtcblxuSW50cm9TY2VuZTEucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLnJlbW92ZUFsbCgpO1xuICAgIFR3ZWVuTWF4LmtpbGxBbGwoKTtcbn07XG5cbkludHJvU2NlbmUxLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnggPSAocDMuQ2FudmFzLndpZHRoIC0gQ29tbW9uLlNUQUdFX1dJRFRIKSAqIDAuNTtcbn07XG5cbkludHJvU2NlbmUxLnByb3RvdHlwZS5hcHBlYXIgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUuYXBwZWFyLmNhbGwodGhpcyk7XG5cbiAgICAvLyB2YW4gbGVmdCB0byByaWdodFxuICAgIHZhciB0byAgICAgICAgICA9IDE2MDAuMDtcbiAgICB2YXIgZnJvbSAgICAgICAgPSAtMjQwLjA7XG4gICAgdmFyIHNwZWVkICAgICAgID0gNDAwLjA7XG4gICAgdmFyIGRpc3RhbmNlICAgID0gKHRvIC0gZnJvbSk7XG4gICAgdmFyIGR1cmF0aW9uICAgID0gKGRpc3RhbmNlIC8gc3BlZWQpO1xuICAgIHRoaXMuX3Zhbi54ICAgICA9IGZyb207XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl92YW4sIGR1cmF0aW9uLCB7XG4gICAgICAgIHg6IHRvLFxuICAgICAgICBlYXNlOiBQb3dlcjAuZWFzZU5vbmUsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgIH0pKTtcblxuICAgIC8vIHZhbiBlbmdpbmVcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX3Zhbi5jaGFzc2lzLCAwLjA2LCB7XG4gICAgICAgIHk6IHRoaXMuX3Zhbi5jaGFzc2lzLnkgLSAxLjQsXG4gICAgICAgIGVhc2U6IFBvd2VyMC5lYXNlTm9uZSxcbiAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgcmVwZWF0OiAtMVxuICAgIH0pKTtcblxuICAgIC8vIGNhbWVyYSBmb2N1cyBwb2ludFxuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fZm9jdXMsIDQuMCwge1xuICAgICAgICBkZWxheTogMS40LFxuICAgICAgICB4OiAxNjAuMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dFxuICAgIH0pKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9jb21ldC5wbGF5KCk7XG4gICAgfSwgMy4wLCB0aGlzKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3NjZW5lMVwiKTtcbn07XG5cbkludHJvU2NlbmUxLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLmhpZGUuY2FsbCh0aGlzKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKFwic2Z4X3NjZW5lMVwiKTtcbn07XG5cbkludHJvU2NlbmUxLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLl9jYW1lcmEudXBkYXRlKCk7XG59O1xuIiwiLyoqXG4gKiAgSW50cm9TY2VuZTJcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMTAvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIEFuaW1hdGlvblNjZW5lICA9IHJlcXVpcmUoXCIuL0FuaW1hdGlvblNjZW5lXCIpO1xudmFyIENvbW1vbiAgICAgICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50cm9TY2VuZTIoKSB7XG4gICAgQW5pbWF0aW9uU2NlbmUuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkRpc3BsYXlPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92YW4gPSBudWxsO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgPSBJbnRyb1NjZW5lMjtcbkludHJvU2NlbmUyLnByb3RvdHlwZSAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShBbmltYXRpb25TY2VuZS5wcm90b3R5cGUpO1xuSW50cm9TY2VuZTIucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgPSBJbnRyb1NjZW5lMjtcblxuSW50cm9TY2VuZTIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2F2ZV9lbnRyYW5jZVwiKSk7XG4gICAgdGhpcy5hZGRDaGlsZChiZyk7XG5cbiAgICB0aGlzLl92YW4gICAgICAgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLl92YW4ueSAgICAgPSA1MjAuMDtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3Zhbik7XG5cbiAgICB0aGlzLl92YW4uY2hhc3NpcyAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInZhbl9iaWdfcnVubmluZ1wiKSk7XG4gICAgdGhpcy5fdmFuLmFuY2hvciAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl92YW4uYWRkQ2hpbGQodGhpcy5fdmFuLmNoYXNzaXMpO1xuXG4gICAgdGhpcy5fdmFuLmxpZ2h0cyAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwidmFuX2JpZ19saWdodFwiKSk7XG4gICAgdGhpcy5fdmFuLmxpZ2h0cy54ICAgICAgPSA2MDAuMDtcbiAgICB0aGlzLl92YW4ubGlnaHRzLnkgICAgICA9IDEzNi4wO1xuICAgIHRoaXMuX3Zhbi5saWdodHMuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuX3Zhbi5hZGRDaGlsZEF0KHRoaXMuX3Zhbi5saWdodHMsIDApO1xuXG4gICAgdmFyIGZyYW1lcyA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAyMDsgKysgaSkge1xuICAgICAgICBmcmFtZXMucHVzaChDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJzdGFyX1wiICsgcDMuVXRpbHMucGFkTnVtYmVyKGkgKyAxLCA0KSkpO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbnMgPSBbXG4gICAgICAgIG5ldyBQSVhJLlBvaW50KDgwMC4wLCA4MC4wKSxcbiAgICAgICAgbmV3IFBJWEkuUG9pbnQoMTIwMC4wLCAyNDAuMClcbiAgICBdO1xuXG4gICAgdmFyIHN0YXIsIHNlcXVlbmNlO1xuICAgIHRoaXMuX3N0YXJzID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgc2VxdWVuY2UgPSBuZXcgcDMuTW92aWVDbGlwU2VxdWVuY2UoKTtcbiAgICAgICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoZnJhbWVzLCBcImRlZmF1bHRcIik7XG4gICAgICAgIHN0YXIgICAgICAgICAgICAgICAgICAgID0gbmV3IHAzLk1vdmllQ2xpcChzZXF1ZW5jZSwgXCJkZWZhdWx0XCIpO1xuICAgICAgICBzdGFyLnggICAgICAgICAgICAgICAgICA9IHBvc2l0aW9uc1tpXS54O1xuICAgICAgICBzdGFyLnkgICAgICAgICAgICAgICAgICA9IHBvc2l0aW9uc1tpXS55O1xuICAgICAgICBzdGFyLmFuaW1hdGlvblNwZWVkICAgICA9IDEuMCAvIDIuMDtcbiAgICAgICAgc3Rhci5sb29waW5nICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICBzdGFyLmdvdG9BbmRQbGF5KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZyYW1lcy5sZW5ndGgpKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChzdGFyKTtcbiAgICAgICAgdGhpcy5fc3RhcnMucHVzaChzdGFyKTtcbiAgICB9XG5cbiAgICB2YXIgY2F2ZUxlZnQgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2F2ZV9lbnRyYW5jZV9sZWZ0XCIpKTtcbiAgICB0aGlzLmFkZENoaWxkKGNhdmVMZWZ0KTtcblxuICAgIHZhciBjYXZlUmlnaHQgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2F2ZV9lbnRyYW5jZV9yaWdodFwiKSk7XG4gICAgY2F2ZVJpZ2h0LnggICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSDtcbiAgICBjYXZlUmlnaHQuYW5jaG9yLnggID0gMS4wO1xuICAgIHRoaXMuYWRkQ2hpbGQoY2F2ZVJpZ2h0KTtcblxuICAgIEFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG59O1xuXG5JbnRyb1NjZW5lMi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIEFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG5cbiAgICBDb21tb24uYW5pbWF0b3IucmVtb3ZlQWxsKCk7XG4gICAgVHdlZW5NYXgua2lsbEFsbCgpO1xufTtcblxuSW50cm9TY2VuZTIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIEFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS5yZXNpemUuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMueCA9IChwMy5DYW52YXMud2lkdGggLSBDb21tb24uU1RBR0VfV0lEVEgpICogMC41O1xufTtcblxuSW50cm9TY2VuZTIucHJvdG90eXBlLmFwcGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NraXBCdXR0b24udmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy5faG9tZUJ1dHRvbi52aXNpYmxlID0gdHJ1ZTtcblxuICAgIC8vIHZhbiBsZWZ0IHRvIHJpZ2h0XG4gICAgdmFyIHRvICAgICAgICAgID0gNTIwLjA7XG4gICAgdmFyIGZyb20gICAgICAgID0gLTI0MC4wO1xuICAgIHZhciBzcGVlZCAgICAgICA9IDM0MC4wO1xuICAgIHZhciBkaXN0YW5jZSAgICA9ICh0byAtIGZyb20pO1xuICAgIHZhciBkdXJhdGlvbiAgICA9IChkaXN0YW5jZSAvIHNwZWVkKTtcbiAgICB0aGlzLl92YW4ueCAgICAgPSBmcm9tO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fdmFuLCBkdXJhdGlvbiwge1xuICAgICAgICB4OiB0byxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fdmFuLmNoYXNzaXMudGV4dHVyZSAgID0gQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwidmFuX2JpZ19zdG9wcGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fdmFuLmxpZ2h0cy52aXNpYmxlICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSwgMS4yLCB0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgfSkpO1xuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfc2NlbmUyXCIpO1xufTtcblxuSW50cm9TY2VuZTIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUuaGlkZS5jYWxsKHRoaXMpO1xuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5zdG9wU291bmQoXCJzZnhfc2NlbmUyXCIpO1xufTtcbiIsIi8qKlxuICogIEludHJvU2NlbmUzXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDEwLzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBBbmltYXRpb25TY2VuZSAgPSByZXF1aXJlKFwiLi9BbmltYXRpb25TY2VuZVwiKTtcbnZhciBDb21tb24gICAgICAgICAgPSByZXF1aXJlKFwiLi9Db21tb25cIik7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludHJvU2NlbmUzKCkge1xuICAgIEFuaW1hdGlvblNjZW5lLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5Db250YWluZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jaGFyYWN0ZXJzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZyZWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGFwaG5lID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlbG1hID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NoYWdneSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zY29vYnkgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuR3JhcGhpY3N9XG4gICAgICovXG4gICAgdGhpcy5fZGFya25lc3MgPSBudWxsO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgPSBJbnRyb1NjZW5lMztcbkludHJvU2NlbmUzLnByb3RvdHlwZSAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShBbmltYXRpb25TY2VuZS5wcm90b3R5cGUpO1xuSW50cm9TY2VuZTMucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgPSBJbnRyb1NjZW5lMztcblxuSW50cm9TY2VuZTMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYmcgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2F2ZV9pbnNpZGVfd2Fsa1wiKSk7XG4gICAgdGhpcy5hZGRDaGlsZChiZyk7XG5cbiAgICB0aGlzLl9jaGFyYWN0ZXJzICAgID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5fY2hhcmFjdGVycy54ICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcbiAgICB0aGlzLl9jaGFyYWN0ZXJzLnkgID0gcDMuQ2FudmFzLmhlaWdodCArIDIwLjA7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9jaGFyYWN0ZXJzKTtcblxuICAgIHRoaXMuX2RhcGhuZSA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJkYWZuZV93YWxraW5nXCIpKTtcbiAgICB0aGlzLl9kYXBobmUuYW5jaG9yID0gbmV3IFBJWEkuUG9pbnQoMC4wLCAxLjApO1xuICAgIHRoaXMuX2NoYXJhY3RlcnMuYWRkQ2hpbGQodGhpcy5fZGFwaG5lKTtcblxuICAgIHRoaXMuX2ZyZWQgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZnJlZF93YWxraW5nXCIpKTtcbiAgICB0aGlzLl9mcmVkLnggICAgICAgID0gODAuMDtcbiAgICB0aGlzLl9mcmVkLmFuY2hvciAgID0gbmV3IFBJWEkuUG9pbnQoMC4wLCAxLjApO1xuICAgIHRoaXMuX2NoYXJhY3RlcnMuYWRkQ2hpbGQodGhpcy5fZnJlZCk7XG5cbiAgICB0aGlzLl92ZWxtYSAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInZlbG1hX3dhbGtpbmdcIikpO1xuICAgIHRoaXMuX3ZlbG1hLnggICAgICAgPSAtMTQwLjA7XG4gICAgdGhpcy5fdmVsbWEuYW5jaG9yICA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMS4wKTtcbiAgICB0aGlzLl9jaGFyYWN0ZXJzLmFkZENoaWxkKHRoaXMuX3ZlbG1hKTtcblxuICAgIHRoaXMuX3NoYWdneSAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwic2hhZ2d5X3dhbGtpbmdcIikpO1xuICAgIHRoaXMuX3NoYWdneS54ICAgICAgPSAtMjgwLjA7XG4gICAgdGhpcy5fc2hhZ2d5LmFuY2hvciA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMS4wKTtcbiAgICB0aGlzLl9jaGFyYWN0ZXJzLmFkZENoaWxkKHRoaXMuX3NoYWdneSk7XG5cbiAgICB0aGlzLl9zY29vYnkgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcIlNjb29ieV93YWxraW5nXCIpKTtcbiAgICB0aGlzLl9zY29vYnkueCAgICAgID0gLTM2MC4wO1xuICAgIHRoaXMuX3Njb29ieS5hbmNob3IgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDEuMCk7XG4gICAgdGhpcy5fY2hhcmFjdGVycy5hZGRDaGlsZCh0aGlzLl9zY29vYnkpO1xuXG4gICAgdGhpcy5fZGFya25lc3MgICAgICAgICAgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIHRoaXMuX2RhcmtuZXNzLnZpc2libGUgID0gZmFsc2U7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9kYXJrbmVzcyk7XG5cbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xufTtcblxuSW50cm9TY2VuZTMucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLnJlbW92ZUFsbCgpO1xuICAgIFR3ZWVuTWF4LmtpbGxBbGwoKTtcbn07XG5cbkludHJvU2NlbmUzLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnggPSAocDMuQ2FudmFzLndpZHRoIC0gQ29tbW9uLlNUQUdFX1dJRFRIKSAqIDAuNTtcblxuICAgIHRoaXMuX2RhcmtuZXNzLmNsZWFyKCk7XG4gICAgdGhpcy5fZGFya25lc3MuYmVnaW5GaWxsKDB4MCk7XG4gICAgdGhpcy5fZGFya25lc3MuZHJhd1JlY3QoKENvbW1vbi5TVEFHRV9XSURUSCAtIHAzLkNhbnZhcy53aWR0aCkgKiAwLjUsIDAuMCwgcDMuQ2FudmFzLndpZHRoLCBwMy5DYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLl9kYXJrbmVzcy5lbmRGaWxsKCk7XG59O1xuXG5JbnRyb1NjZW5lMy5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2tpcEJ1dHRvbi52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl9ob21lQnV0dG9uLnZpc2libGUgPSB0cnVlO1xuXG4gICAgdmFyIHRvICAgICAgICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSArIDYwMC4wO1xuICAgIHZhciBmcm9tICAgICAgICAgICAgPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSA0MDAuMDtcbiAgICB2YXIgc3BlZWQgICAgICAgICAgID0gMjYwLjA7XG4gICAgdmFyIGRpc3RhbmNlICAgICAgICA9ICh0byAtIGZyb20pO1xuICAgIHZhciBkdXJhdGlvbiAgICAgICAgPSAoZGlzdGFuY2UgLyBzcGVlZCk7XG4gICAgdGhpcy5fY2hhcmFjdGVycy54ICA9IGZyb207XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9jaGFyYWN0ZXJzLCBkdXJhdGlvbiwge1xuICAgICAgICB4OiB0byxcbiAgICAgICAgZWFzZTogUG93ZXIwLmVhc2VOb25lLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlU2NvcGU6IHRoaXNcbiAgICB9KSk7XG5cbiAgICB0aGlzLl9kYXJrbmVzcy5hbHBoYSAgICA9IDAuMDtcbiAgICB0aGlzLl9kYXJrbmVzcy52aXNpYmxlICA9IHRydWU7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9kYXJrbmVzcywgMC40LCB7XG4gICAgICAgIGRlbGF5OiBkdXJhdGlvbiAtIDAuNCxcbiAgICAgICAgYWxwaGE6IDEuMCxcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxuICAgIH0pKTtcblxuICAgIGR1cmF0aW9uICAgID0gMC4xODtcbiAgICB2YXIgaGVpZ2h0ICA9IDE0LjA7XG4gICAgQ29tbW9uLmFuaW1hdG9yLmFkZChUd2Vlbk1heC50byh0aGlzLl9mcmVkLCBkdXJhdGlvbiwge1xuICAgICAgICB5OiB0aGlzLl9mcmVkLnkgLSBoZWlnaHQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSkpO1xuXG4gICAgZHVyYXRpb24gICAgPSAwLjE0O1xuICAgIGhlaWdodCAgICAgID0gMTAuMDtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX2RhcGhuZSwgZHVyYXRpb24sIHtcbiAgICAgICAgeTogdGhpcy5fZGFwaG5lLnkgLSBoZWlnaHQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSkpO1xuXG4gICAgZHVyYXRpb24gICAgPSAwLjEyO1xuICAgIGhlaWdodCAgICAgID0gOC4wO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQoVHdlZW5NYXgudG8odGhpcy5fdmVsbWEsIGR1cmF0aW9uLCB7XG4gICAgICAgIHk6IHRoaXMuX3ZlbG1hLnkgLSBoZWlnaHQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSkpO1xuXG4gICAgZHVyYXRpb24gICAgPSAwLjE2O1xuICAgIGhlaWdodCAgICAgID0gMTIuMDtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX3NoYWdneSwgZHVyYXRpb24sIHtcbiAgICAgICAgeTogdGhpcy5fc2hhZ2d5LnkgLSBoZWlnaHQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSkpO1xuXG4gICAgZHVyYXRpb24gICAgPSAwLjEzO1xuICAgIGhlaWdodCAgICAgID0gMTQuMDtcbiAgICBDb21tb24uYW5pbWF0b3IuYWRkKFR3ZWVuTWF4LnRvKHRoaXMuX3Njb29ieSwgZHVyYXRpb24sIHtcbiAgICAgICAgeTogdGhpcy5fc2Nvb2J5LnkgLSBoZWlnaHQsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSkpO1xuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfc2NlbmUzXCIpO1xufTtcblxuSW50cm9TY2VuZTMucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUuaGlkZS5jYWxsKHRoaXMpO1xuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5zdG9wU291bmQoXCJzZnhfc2NlbmUzXCIpO1xufTtcblxuSW50cm9TY2VuZTMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIEFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbn07XG4iLCIvKipcbiAqICBJbnRyb1NjZW5lNFxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAxMC8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQW5pbWF0aW9uU2NlbmUgID0gcmVxdWlyZShcIi4vQW5pbWF0aW9uU2NlbmVcIik7XG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRyb1NjZW5lNCgpIHtcbiAgICBBbmltYXRpb25TY2VuZS5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuRGlzcGxheU9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RhcmsgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuRGlzcGxheU9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpZ2h0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkdyYXBoaWNzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3ZlcmxheSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5HcmFwaGljc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2N1dG91dCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9mcmVkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RhcGhuZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZWxtYSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zaGFnZ3kgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2Nvb2J5ID0gbnVsbDtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gSW50cm9TY2VuZTQ7XG5JbnRyb1NjZW5lNC5wcm90b3R5cGUgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlKTtcbkludHJvU2NlbmU0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgID0gSW50cm9TY2VuZTQ7XG5cbkludHJvU2NlbmU0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZGFyayA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJjYXZlX2luc2lkZV9kYXJrXCIpKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2RhcmspO1xuXG4gICAgdGhpcy5fbGlnaHQgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiY2F2ZV9pbnNpZGVfbGlnaHRcIikpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGlnaHQpO1xuXG4gICAgdGhpcy5fY3V0b3V0ICAgICAgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIHRoaXMuX2N1dG91dC54ICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41ICsgOTQuMDtcbiAgICB0aGlzLl9jdXRvdXQueSAgICA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjU7XG4gICAgdGhpcy5fY3V0b3V0LmJlZ2luRmlsbCgweEZGMDAwMCk7XG4gICAgdGhpcy5fY3V0b3V0LmRyYXdDaXJjbGUoMC4wLCAwLjAsIDIwMC4wKTtcbiAgICB0aGlzLl9jdXRvdXQuZW5kRmlsbCgpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fY3V0b3V0KTtcblxuICAgIHRoaXMuX2xpZ2h0Lm1hc2sgPSB0aGlzLl9jdXRvdXQ7XG5cbiAgICB0aGlzLl9mcmVkICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZnJlZF9kZWZcIikpO1xuICAgIHRoaXMuX2ZyZWQueCAgICAgICAgPSAxMDQ2LjA7XG4gICAgdGhpcy5fZnJlZC55ICAgICAgICA9IDI4Ni4wO1xuICAgIHRoaXMuX2ZyZWQuc2NhbGUgICAgPSBuZXcgUElYSS5Qb2ludCgwLjMsIDAuMyk7XG4gICAgdGhpcy5fZnJlZC5hbmNob3IgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl9mcmVkLnZpc2libGUgID0gZmFsc2U7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9mcmVkKTtcblxuICAgIHRoaXMuX2RhcGhuZSAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfZGFwaG5lX2RlZlwiKSk7XG4gICAgdGhpcy5fZGFwaG5lLnggICAgICAgICAgPSA5NDYuMDtcbiAgICB0aGlzLl9kYXBobmUueSAgICAgICAgICA9IDMyNi4wO1xuICAgIHRoaXMuX2RhcGhuZS5zY2FsZSAgICAgID0gbmV3IFBJWEkuUG9pbnQoMC4zLCAwLjMpO1xuICAgIHRoaXMuX2RhcGhuZS5hbmNob3IgICAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuX2RhcGhuZS52aXNpYmxlICAgID0gZmFsc2U7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9kYXBobmUpO1xuXG4gICAgdGhpcy5fdmVsbWEgICAgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZXllc192ZWxtYV9kZWZhdWx0XCIpKTtcbiAgICB0aGlzLl92ZWxtYS54ICAgICAgICAgICA9IDk5OC4wO1xuICAgIHRoaXMuX3ZlbG1hLnkgICAgICAgICAgID0gMzQ4LjA7XG4gICAgdGhpcy5fdmVsbWEuc2NhbGUgICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjMsIDAuMyk7XG4gICAgdGhpcy5fdmVsbWEuYW5jaG9yICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fdmVsbWEudmlzaWJsZSAgICAgPSBmYWxzZTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3ZlbG1hKTtcblxuICAgIHRoaXMuX3NoYWdneSAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImV5ZXNfc2hhZ2d5X2RlZlwiKSk7XG4gICAgdGhpcy5fc2hhZ2d5LnggICAgICAgICAgPSAxMTg4LjA7XG4gICAgdGhpcy5fc2hhZ2d5LnkgICAgICAgICAgPSAzNDguMDtcbiAgICB0aGlzLl9zaGFnZ3kuc2NhbGUgICAgICA9IG5ldyBQSVhJLlBvaW50KC0wLjMsIDAuMyk7XG4gICAgdGhpcy5fc2hhZ2d5LmFuY2hvciAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fc2hhZ2d5LnZpc2libGUgICAgPSBmYWxzZTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3NoYWdneSk7XG5cbiAgICB0aGlzLl9zY29vYnkgICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJleWVzX3Njb29ieV9kZWZhdWx0XCIpKTtcbiAgICB0aGlzLl9zY29vYnkueCAgICAgICAgICA9IDExNzguMDtcbiAgICB0aGlzLl9zY29vYnkueSAgICAgICAgICA9IDMxMC4wO1xuICAgIHRoaXMuX3Njb29ieS5zY2FsZSAgICAgID0gbmV3IFBJWEkuUG9pbnQoMC4zLCAwLjMpO1xuICAgIHRoaXMuX3Njb29ieS5hbmNob3IgICAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuX3Njb29ieS52aXNpYmxlICAgID0gZmFsc2U7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9zY29vYnkpO1xuXG4gICAgQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcbn07XG5cbkludHJvU2NlbmU0LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5yZW1vdmVBbGwoKTtcbiAgICBUd2Vlbk1heC5raWxsQWxsKCk7XG59O1xuXG5JbnRyb1NjZW5lNC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLnJlc2l6ZS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy54ID0gKHAzLkNhbnZhcy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG59O1xuXG5JbnRyb1NjZW5lNC5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2tpcEJ1dHRvbi52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl9ob21lQnV0dG9uLnZpc2libGUgPSB0cnVlO1xuXG4gICAgdGhpcy5fbGlnaHQuYWxwaGEgPSAwLjA7XG4gICAgVHdlZW5NYXgudG8odGhpcy5fbGlnaHQsIDAuMiwge1xuICAgICAgICBkZWxheTogMC40LFxuICAgICAgICBhbHBoYTogMS4wLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgIH0pO1xuICAgIHRoaXMuX2RhcmsuYWxwaGEgPSAwLjA7XG4gICAgVHdlZW5NYXgudG8odGhpcy5fZGFyaywgMC4yLCB7XG4gICAgICAgIGRlbGF5OiAwLjQsXG4gICAgICAgIGFscGhhOiAxLjAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXRcbiAgICB9KTtcblxuICAgIHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIENvbW1vbi5hbmltYXRvci5hZGQodGltZWxpbmUpO1xuXG4gICAgdGltZWxpbmUuYXBwZW5kKFR3ZWVuTWF4LnRvKHRoaXMuX2N1dG91dCwgMC41LCB7XG4gICAgICAgIGRlbGF5OiAxLjAsXG4gICAgICAgIHg6IHRoaXMuX2N1dG91dC54IC0gNDgwLjAsXG4gICAgICAgIHk6IHRoaXMuX2N1dG91dC55ICsgNDAuMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfdG9yY2h3YXZlXCIpO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIHRpbWVsaW5lLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl9jdXRvdXQsIDAuNSwge1xuICAgICAgICBkZWxheTogMC40LFxuICAgICAgICB4OiB0aGlzLl9jdXRvdXQueCArIDM4MC4wLFxuICAgICAgICB5OiB0aGlzLl9jdXRvdXQueSAtIDgwLjAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3RvcmNod2F2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pKTtcbiAgICB0aW1lbGluZS5hcHBlbmQoVHdlZW5NYXgudG8odGhpcy5fY3V0b3V0LCAwLjUsIHtcbiAgICAgICAgZGVsYXk6IDAuNCxcbiAgICAgICAgeDogdGhpcy5fY3V0b3V0LngsXG4gICAgICAgIHk6IHRoaXMuX2N1dG91dC55LFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgICAgb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcInNmeF90b3JjaHdhdmVcIik7XG4gICAgICAgIH1cbiAgICB9KSk7XG5cbiAgICB0aW1lbGluZS52YXJzLm9uQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIENvbW1vbi5hbmltYXRvci5hZGQodGltZWxpbmUpO1xuXG4gICAgICAgIHRpbWVsaW5lLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl9saWdodCwgMC4zLCB7XG4gICAgICAgICAgICBhbHBoYTogMC4wLFxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpZ2h0LmFscGhhID0gMC41O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgICAgICB9KSk7XG4gICAgICAgIHRpbWVsaW5lLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl9saWdodCwgMC4yLCB7XG4gICAgICAgICAgICBhbHBoYTogMC4wLFxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpZ2h0LmFscGhhID0gMS4wO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0aW1lbGluZSk7XG5cbiAgICAgICAgdGltZWxpbmUuYXBwZW5kKFR3ZWVuTWF4LnRvKHRoaXMuX2RhcmssIDAuMywge1xuICAgICAgICAgICAgYWxwaGE6IDAuMCxcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXJrLmFscGhhID0gMC41O1xuICAgICAgICAgICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3RvcmNoZGlua2V0dGVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGltZWxpbmUuYXBwZW5kKFR3ZWVuTWF4LnRvKHRoaXMuX2RhcmssIDAuMiwge1xuICAgICAgICAgICAgYWxwaGE6IDAuMCxcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXJrLmFscGhhID0gMS4wO1xuICAgICAgICAgICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3RvcmNoZGlua2V0dGVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGltZWxpbmUuYXBwZW5kKFR3ZWVuTWF4LmRlbGF5ZWRDYWxsKDAuMywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl9saWdodC52aXNpYmxlICAgICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZGFyay52aXNpYmxlICAgICAgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5fZnJlZC52aXNpYmxlICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZGFwaG5lLnZpc2libGUgICAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdmVsbWEudmlzaWJsZSAgICAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc2hhZ2d5LnZpc2libGUgICAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc2Nvb2J5LnZpc2libGUgICAgPSB0cnVlO1xuXG4gICAgICAgICAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH0sIDEuMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3RvcmNoZGlua1wiKTtcbiAgICAgICAgfSwgW10sIHRoaXMpKTtcbiAgICB9O1xuICAgIHRpbWVsaW5lLnZhcnMub25Db21wbGV0ZVNjb3BlID0gdGhpcztcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3NjZW5lNFwiKTtcbn07XG5cbkludHJvU2NlbmU0LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLmhpZGUuY2FsbCh0aGlzKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIuc3RvcFNvdW5kKFwic2Z4X3NjZW5lNFwiKTtcbn07XG4iLCIvKipcclxuICogIE1haW5cclxuICpcclxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDQvOS8yMDE1LlxyXG4gKlxyXG4gKi9cclxuXHJcbnZhciBBcHBsaWNhdGlvbiAgICAgICAgID0gcmVxdWlyZShcIi4vQXBwbGljYXRpb25cIik7XHJcbnZhciBDb21tb24gICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xyXG52YXIgUHJlbG9hZGVyU2NlbmUgICAgICA9IHJlcXVpcmUoXCIuL1ByZWxvYWRlclNjZW5lXCIpO1xyXG52YXIgU2NlbmVNYW5hZ2VyICAgICAgICA9IHJlcXVpcmUoXCIuL1NjZW5lTWFuYWdlclwiKTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0geyFOdW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7IU51bWJlcn0gaGVpZ2h0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gTWFpbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHshTnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHshTnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7QXBwbGljYXRpb259XHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR0aGlzLl9nYW1lID0gbnVsbDtcclxufVxyXG53aW5kb3cuTWFpbiA9IE1haW47XHJcblxyXG4vKipcclxuICovXHJcbk1haW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBwYXJhbXMgPSBuZXcgcDMuQ2FudmFzLlBhcmFtcygpO1xyXG4gICAgcGFyYW1zLndpZHRoID0gdGhpcy5fd2lkdGg7XHJcbiAgICBwYXJhbXMuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0O1xyXG4gICAgcGFyYW1zLmhvbGRlcklEID0gXCJnYW1lXCI7XHJcbiAgICBwYXJhbXMucm90YXRlSW1hZ2VTcmMgPSBcIi4vcm90YXRlX2RldmljZS5qcGdcIjtcclxuICAgIHBhcmFtcy5yb3RhdGVJbWFnZUJhY2tncm91bmRDb2xvciA9IFwiIzAwMDAwMFwiO1xyXG5cclxuICAgIFBJWEkuUkVUSU5BX1BSRUZJWCA9IC9cXF8oPz1bXl9dKiQpKC4rKXgvO1xyXG5cclxuICAgIHAzLkRldmljZS5pbml0KHdpbmRvd1tcImJvd3NlclwiXSk7XHJcblxyXG4gICAgVHdlZW5NYXguZGVmYXVsdE92ZXJ3cml0ZSA9IFwibm9uZVwiO1xyXG4gICAgVHdlZW5NYXgudGlja2VyLmZwcyg2MCk7XHJcblxyXG4gICAgQ29tbW9uLmxhbmd1YWdlID0gcDMuVXRpbHMuZ2V0VVJMUGFyYW1ldGVyKFwibGFuZ1wiLCBcImdiXCIpO1xyXG5cclxuICAgIENvbW1vbi5hc3NldE1hbmFnZXIgPSBwMy5Bc3NldE1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyID0gcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlO1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBuZXcgcDMuQ2FudmFzKHBhcmFtcyk7XHJcbiAgICBjYW52YXMuc2lnbmFsUmVhZHkuYWRkT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyAgICAgICAgICAgICAgICAgICAgID0ge307XHJcbiAgICAgICAgb3B0aW9ucy52aWV3ICAgICAgICAgICAgICAgICAgICA9IHAzLkNhbnZhcy5jYW52YXNFbGVtZW50O1xyXG4gICAgICAgIG9wdGlvbnMudHJhbnNwYXJlbnQgICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgICAgICBvcHRpb25zLmFudGlhbGlhcyAgICAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXIgICA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbnMucmVzb2x1dGlvbiAgICAgICAgICAgICAgPSAxLjA7XHJcblxyXG4gICAgICAgIHZhciBzdGFnZSAgICAgICA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAgIENvbW1vbi5zdGFnZSAgICA9IHN0YWdlO1xyXG5cclxuICAgICAgICB2YXIgcmVuZGVyZXIgICAgICAgICAgICAgICAgPSBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcih0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBvcHRpb25zKTtcclxuICAgICAgICByZW5kZXJlci5iYWNrZ3JvdW5kQ29sb3IgICAgPSAweDA7XHJcbiAgICAgICAgQ29tbW9uLnJlbmRlcmVyICAgICAgICAgICAgID0gcmVuZGVyZXI7XHJcbiAgICAgICAgQ29tbW9uLmlzV2ViR0wgICAgICAgICAgICAgID0gKHJlbmRlcmVyIGluc3RhbmNlb2YgUElYSS5XZWJHTFJlbmRlcmVyKTtcclxuXHJcbiAgICAgICAgdmFyIHNjZW5lTWFuYWdlciA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuICAgICAgICBzY2VuZU1hbmFnZXIuaW5pdChzdGFnZSwgcmVuZGVyZXIpO1xyXG4gICAgICAgIENvbW1vbi5zY2VuZU1hbmFnZXIgPSBzY2VuZU1hbmFnZXI7XHJcblxyXG4gICAgICAgIHZhciBmcmFtZUludGVydmFsICAgPSAxO1xyXG4gICAgICAgIHZhciB0aW1lc3RlcCAgICAgICAgPSBuZXcgcDMuVGltZXN0ZXAoZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgdGltZXN0ZXAuaW5pdCh0aGlzLnVwZGF0ZSwgdGhpcy5yZW5kZXIsIHRoaXMpO1xyXG4gICAgICAgIENvbW1vbi50aW1lc3RlcCA9IHRpbWVzdGVwO1xyXG5cclxuICAgICAgICBDb21tb24uYW5pbWF0b3IgPSBuZXcgcDMuQW5pbWF0b3IoKTtcclxuICAgICAgICBDb21tb24uYW5pbWF0b3IuaW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRQcmVsb2FkZXIoKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gICAgY2FudmFzLnNpZ25hbENoYW5nZS5hZGQodGhpcy5vbkNhbnZhc1Jlc2l6ZSwgdGhpcyk7XHJcbiAgICBjYW52YXMuaW5pdCgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5NYWluLnByb3RvdHlwZS5sb2FkUHJlbG9hZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2NhbGUgPSAoQ29tbW9uLnJlbmRlcmVyLnJlc29sdXRpb24gPj0gMS4wID8gXCJoZC9cIiA6IFwic2QvXCIpO1xyXG4gICAgdmFyIHByZWZpeCA9IChzY2FsZSA9PT0gXCJzZC9cIiA/IFwiXzAuNXhcIiA6IFwiXCIpO1xyXG4gICAgdmFyIGZpbGVzID0gW1xyXG4gICAgICAgIHtuYW1lOiBcImNuXCIsICAgICAgICAgICAgdXJsOiBcImltYWdlcy9cIiArIHNjYWxlICsgXCJjblwiICAgICAgICAgICArIHByZWZpeCArIFwiLmpwZ1wifSxcclxuICAgICAgICB7bmFtZTogXCJwcmVsb2FkZXJcIiwgICAgIHVybDogXCJpbWFnZXMvXCIgKyBzY2FsZSArIFwicHJlbG9hZGVyXCIgICAgKyBwcmVmaXggKyBcIi5qc29uXCJ9XHJcbiAgICBdO1xyXG4gICAgdmFyIHNvdW5kcyA9IFtdO1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuYWRkRmlsZXMoZmlsZXMsIFwiYXNzZXRzL1wiKTtcclxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLnNpZ25hbENvbXBsZXRlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmxvYWQoKTtcclxuXHJcbiAgICAgICAgcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlLmFkZFNvdW5kcyhzb3VuZHMsIFtcIi5tcDNcIiwgXCIub2dnXCJdLCBcIlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcbk1haW4ucHJvdG90eXBlLmxvYWRBc3NldHMgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzY2FsZSA9IChDb21tb24ucmVuZGVyZXIucmVzb2x1dGlvbiA+PSAxLjAgPyBcImhkL1wiIDogXCJzZC9cIik7XHJcbiAgICB2YXIgcHJlZml4ID0gKHNjYWxlID09PSBcInNkL1wiID8gXCJfMC41eFwiIDogXCJcIik7XHJcbiAgICB2YXIgZmlsZXMgPSBbXHJcbiAgICAgICAge25hbWU6IFwiZGVzZXJ0X3JvYWRcIiwgICAgICAgICAgIHVybDogXCJpbWFnZXMvXCIgICsgc2NhbGUgKyBcImRlc2VydF9yb2FkXCIgICAgICAgICArIHByZWZpeCArIFwiLmpwZ1wifSxcclxuICAgICAgICB7bmFtZTogXCJjYXZlX2VudHJhbmNlXCIsICAgICAgICAgdXJsOiBcImltYWdlcy9cIiAgKyBzY2FsZSArIFwiY2F2ZV9lbnRyYW5jZVwiICAgICAgICsgcHJlZml4ICsgXCIuanBnXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcImNhdmVfaW5zaWRlX2xpZ2h0XCIsICAgICB1cmw6IFwiaW1hZ2VzL1wiICArIHNjYWxlICsgXCJjYXZlX2luc2lkZV9saWdodFwiICAgKyBwcmVmaXggKyBcIi5qcGdcIn0sXHJcbiAgICAgICAge25hbWU6IFwiY2F2ZV9pbnNpZGVfZGFya1wiLCAgICAgIHVybDogXCJpbWFnZXMvXCIgICsgc2NhbGUgKyBcImNhdmVfaW5zaWRlX2RhcmtcIiAgICArIHByZWZpeCArIFwiLmpwZ1wifSxcclxuICAgICAgICB7bmFtZTogXCJjYXZlX2luc2lkZV93YWxrXCIsICAgICAgdXJsOiBcImltYWdlcy9cIiAgKyBzY2FsZSArIFwiY2F2ZV9pbnNpZGVfd2Fsa1wiICAgICsgcHJlZml4ICsgXCIuanBnXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcInVpX3NwbGFzaFwiLCAgICAgICAgICAgICB1cmw6IFwiaW1hZ2VzL1wiICArIHNjYWxlICsgXCJ1aV9zcGxhc2hcIiAgICAgICAgICAgKyBwcmVmaXggKyBcIi5qcGdcIn0sXHJcbiAgICAgICAge25hbWU6IFwiZ2FtZW92ZXJcIiwgICAgICAgICAgICAgIHVybDogXCJpbWFnZXMvXCIgICsgc2NhbGUgKyBcImdhbWVvdmVyXCIgICAgICAgICAgICArIHByZWZpeCArIFwiLmpwZ1wifSxcclxuICAgICAgICB7bmFtZTogXCJ0cmFuc2l0aW9uXCIsICAgICAgICAgICAgdXJsOiBcImltYWdlcy9cIiAgKyBzY2FsZSArIFwidHJhbnNpdGlvblwiICAgICAgICAgICsgcHJlZml4ICsgXCIucG5nXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcImdhbWVcIiwgICAgICAgICAgICAgICAgICB1cmw6IFwiaW1hZ2VzL1wiICArIHNjYWxlICsgXCJnYW1lXCIgICAgICAgICAgICAgICAgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcInVpXCIsICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaW1hZ2VzL1wiICArIHNjYWxlICsgXCJ1aVwiICAgICAgICAgICAgICAgICAgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcImhlbHBcIiwgICAgICAgICAgICAgICAgICB1cmw6IFwiaW1hZ2VzL1wiICArIHNjYWxlICsgXCJoZWxwXCIgICAgICAgICAgICAgICAgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcImludHJvXCIsICAgICAgICAgICAgICAgICB1cmw6IFwiaW1hZ2VzL1wiICArIHNjYWxlICsgXCJpbnRyb1wiICAgICAgICAgICAgICAgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcIm91dHJvXCIsICAgICAgICAgICAgICAgICB1cmw6IFwiaW1hZ2VzL1wiICArIHNjYWxlICsgXCJvdXRyb1wiICAgICAgICAgICAgICAgKyBwcmVmaXggKyBcIi5qc29uXCJ9LFxyXG5cclxuICAgICAgICB7bmFtZTogXCJidXJzdFwiLCAgICAgICAgIHVybDogXCJwYXJ0aWNsZXMvYnVyc3RcIiAgICAgICsgXCIuanNvblwifSxcclxuICAgICAgICB7bmFtZTogXCJidXJzdGdhbmdcIiwgICAgIHVybDogXCJwYXJ0aWNsZXMvYnVyc3RnYW5nXCIgICsgXCIuanNvblwifSxcclxuICAgICAgICB7bmFtZTogXCJjb3B5XCIsICAgICAgICAgIHVybDogXCJkYXRhL2NvcHlcIiAgICAgICAgICAgICsgXCIuanNvblwifVxyXG4gICAgXTtcclxuICAgIHN3aXRjaCAoQ29tbW9uLmxhbmd1YWdlKSB7XHJcbiAgICAgICAgY2FzZSBcImdiXCIgOlxyXG4gICAgICAgIGNhc2UgXCJmclwiIDpcclxuICAgICAgICBjYXNlIFwiZGVcIiA6XHJcbiAgICAgICAgY2FzZSBcIml0XCIgOiB7XHJcbiAgICAgICAgICAgIGZpbGVzID0gZmlsZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcImhlbHZldGljYWxfNDBfY29uZGVuc2VkYm9sZF9ncmVlblwiLCAgICAgdXJsOiBcImZvbnRzL2hlbHZldGljYWxfNDBfY29uZGVuc2VkYm9sZF9ncmVlblwiICAgICAgKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwieW91bmdmcmFua2Vuc3RlaW5fNDZfb3JhbmdlXCIsICAgICAgICAgICB1cmw6IFwiZm9udHMveW91bmdmcmFua2Vuc3RlaW5fMzBfb3JhbmdlXCIgICAgICAgICAgICArIFwiLmpzb25cIn0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJ5b3VuZ2ZyYW5rZW5zdGVpbl82MF90aXRsZVwiLCAgICAgICAgICAgIHVybDogXCJmb250cy95b3VuZ2ZyYW5rZW5zdGVpbl82MF90aXRsZVwiICAgICAgICAgICAgICsgXCIuanNvblwifSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcInlvdW5nZnJhbmtlbnN0ZWluXzc0X29yYW5nZVwiLCAgICAgICAgICAgdXJsOiBcImZvbnRzL3lvdW5nZnJhbmtlbnN0ZWluXzc0X29yYW5nZVwiICAgICAgICAgICAgKyBcIi5qc29uXCJ9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInBsXCIgOlxyXG4gICAgICAgIGNhc2UgXCJydVwiIDoge1xyXG4gICAgICAgICAgICBmaWxlcyA9IGZpbGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJoZWx2ZXRpY2FsXzQwX2NvbmRlbnNlZGJvbGRfZ3JlZW5cIiwgICAgIHVybDogXCJmb250cy9oZWx2ZXRpY2FsXzQwX2NvbmRlbnNlZGJvbGRfZ3JlZW5cIiAgICAgICsgXCIuanNvblwifSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcInlvdW5nZnJhbmtlbnN0ZWluXzQ2X29yYW5nZVwiLCAgICAgICAgICAgdXJsOiBcImZvbnRzL3B0X3NhbnNfY3lyaWxsaWNfMjJfb3JhbmdlXCIgICAgICAgICAgICAgKyBcIi5qc29uXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwieW91bmdmcmFua2Vuc3RlaW5fNjBfdGl0bGVcIiwgICAgICAgICAgICB1cmw6IFwiZm9udHMvcHRfc2Fuc19jeXJpbGxpY182MF90aXRsZVwiICAgICAgICAgICAgICArIFwiLmpzb25cIn0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJ5b3VuZ2ZyYW5rZW5zdGVpbl83NF9vcmFuZ2VcIiwgICAgICAgICAgIHVybDogXCJmb250cy9wdF9zYW5zX2N5cmlsbGljXzc0X29yYW5nZVwiICAgICAgICAgICAgICsgXCIuanNvblwifVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNvdW5kcyA9IFtcclxuICAgICAgICBcIm11c2ljX2NhdmVcIixcclxuICAgICAgICBcIm11c2ljX21lbnVcIixcclxuICAgICAgICBcIm11c2ljX2xvb3BcIixcclxuICAgICAgICBcInNmeF9iYXRzMVwiLFxyXG4gICAgICAgIFwic2Z4X2JhdHMyXCIsXHJcbiAgICAgICAgXCJzZnhfYmF0czNcIixcclxuICAgICAgICBcInNmeF9ibGluazFcIixcclxuICAgICAgICBcInNmeF9ibGluazJcIixcclxuICAgICAgICBcInNmeF9ibGluazNcIixcclxuICAgICAgICBcInNmeF9mb290c3RlcHNfZ2FuZzFcIixcclxuICAgICAgICBcInNmeF9mb290c3RlcHNfZ2FuZzJcIixcclxuICAgICAgICBcInNmeF9mb290c3RlcHNfZ2FuZzNcIixcclxuICAgICAgICBcInNmeF9mb290c3RlcHNfZ2hvdWwxXCIsXHJcbiAgICAgICAgXCJzZnhfZm9vdHN0ZXBzX2dob3VsMlwiLFxyXG4gICAgICAgIFwic2Z4X2Zvb3RzdGVwc19naG91bDNcIixcclxuICAgICAgICBcInNmeF9naG91bDFcIixcclxuICAgICAgICBcInNmeF9naG91bDJcIixcclxuICAgICAgICBcInNmeF9naG91bDNcIixcclxuICAgICAgICBcInNmeF9naG91bDRcIixcclxuICAgICAgICBcInNmeF9naG91bDVcIixcclxuICAgICAgICBcInNmeF9naG91bDZcIixcclxuICAgICAgICBcInNmeF9naG91bDdcIixcclxuICAgICAgICBcInNmeF9naG91bDhcIixcclxuICAgICAgICBcInNmeF9oaXQxXCIsXHJcbiAgICAgICAgXCJzZnhfaGl0MlwiLFxyXG4gICAgICAgIFwic2Z4X2hpdDNcIixcclxuICAgICAgICBcInNmeF9oaXRfZ2FuZ1wiLFxyXG4gICAgICAgIFwic2Z4X21pc3MxXCIsXHJcbiAgICAgICAgXCJzZnhfbWlzczJcIixcclxuICAgICAgICBcInNmeF9taXNzM1wiLFxyXG4gICAgICAgIFwic2Z4X3ByZXNzXCIsXHJcbiAgICAgICAgXCJzZnhfcm9sbG92ZXJcIixcclxuICAgICAgICBcInNmeF9zY2VuZTFcIixcclxuICAgICAgICBcInNmeF9zY2VuZTJcIixcclxuICAgICAgICBcInNmeF9zY2VuZTNcIixcclxuICAgICAgICBcInNmeF9zY2VuZTRcIixcclxuICAgICAgICBcInNmeF9zY29vYmh1aF9yZXZlcmJcIixcclxuICAgICAgICBcInNmeF9zY29vYnlzdGluZ1wiLFxyXG4gICAgICAgIFwic2Z4X3RvcmNoZGlua1wiLFxyXG4gICAgICAgIFwic2Z4X3RvcmNoZGlua2V0dGVcIixcclxuICAgICAgICBcInNmeF90b3JjaHdhdmVcIlxyXG4gICAgXTtcclxuICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmFkZEZpbGVzKGZpbGVzLCBcImFzc2V0cy9cIik7XHJcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5zaWduYWxQcm9ncmVzcy5hZGQodGhpcy5vbkxvYWRpbmdQcm9ncmVzcywgdGhpcyk7XHJcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5zaWduYWxDb21wbGV0ZWQuYWRkT25jZSh0aGlzLm9uTG9hZGluZ0NvbXBsZXRlZCwgdGhpcyk7XHJcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5sb2FkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXJTY2VuZSgpO1xyXG4gICAgICAgIENvbW1vbi5zY2VuZU1hbmFnZXIuYWRkKHRoaXMuX3ByZWxvYWRlcik7XHJcblxyXG4gICAgICAgIENvbW1vbi5hdWRpb01hbmFnZXIuYWRkU291bmRzKHNvdW5kcywgW1wiLm1wM1wiLCBcIi5vZ2dcIl0sIFwiYXNzZXRzL2F1ZGlvL1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKi9cclxuTWFpbi5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9nYW1lID0gbmV3IEFwcGxpY2F0aW9uKCk7XHJcbiAgICB0aGlzLl9nYW1lLmluaXQoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKi9cclxuTWFpbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDb21tb24uc2NlbmVNYW5hZ2VyLnVwZGF0ZSgpO1xyXG4gICAgQ29tbW9uLmFuaW1hdG9yLnVwZGF0ZSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqL1xyXG5NYWluLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIENvbW1vbi5yZW5kZXJlci5yZW5kZXIoQ29tbW9uLnN0YWdlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKi9cclxuTWFpbi5wcm90b3R5cGUub25Mb2FkaW5nUHJvZ3Jlc3MgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdGhpcy5fcHJlbG9hZGVyLmxvYWRlZCA9IGV2ZW50LnByb2dyZXNzIC8gMTAwLjA7XHJcbn07XHJcblxyXG4vKipcclxuICovXHJcbk1haW4ucHJvdG90eXBlLm9uTG9hZGluZ0NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5fcHJlbG9hZGVyLmxvYWRlZCA9IDEuMDtcclxuICAgIHRoaXMuX3ByZWxvYWRlci5hbmltYXRlT3V0KCk7XHJcblxyXG4gICAgQ29tbW9uLmNvcHkgPSBDb21tb24uYXNzZXRNYW5hZ2VyLmdldEpTT04oXCJjb3B5XCIpO1xyXG5cclxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuc2lnbmFsUHJvZ3Jlc3MucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5zaWduYWxDb21wbGV0ZWQucmVtb3ZlQWxsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICB9LCAwLjQsIHRoaXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7IUJvb2xlYW59IGNvcnJlY3RcclxuICovXHJcbk1haW4ucHJvdG90eXBlLm9uQ2FudmFzUmVzaXplID0gZnVuY3Rpb24oY29ycmVjdCkge1xyXG4gICAgaWYgKGNvcnJlY3QpIHtcclxuICAgICAgICBDb21tb24ucmVuZGVyZXIucmVzaXplKHAzLkNhbnZhcy53aWR0aCwgcDMuQ2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgaWYgKENvbW1vbi5zY2VuZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgQ29tbW9uLnNjZW5lTWFuYWdlci5yZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiIsIi8qKlxuICogIE11dGVCdXR0b25cbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMTYvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIEJ1dHRvbiAgPSByZXF1aXJlKFwiLi9CdXR0b25cIik7XG5cbi8qKlxuICogQHBhcmFtIHshUElYSS5UZXh0dXJlfSBvbk5vcm1hbFRleHR1cmVcbiAqIEBwYXJhbSB7IVBJWEkuVGV4dHVyZX0gb2ZmTm9ybWFsVGV4dHVyZVxuICogQHBhcmFtIHtQSVhJLlRleHR1cmU9fSBvbk92ZXJUZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9mZk92ZXJUZXh0dXJlXG4gKiBAcGFyYW0ge1BJWEkuVGV4dHVyZT19IG9uRG93blRleHR1cmVcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb2ZmRG93blRleHR1cmVcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb25EaXNhYmxlZFRleHR1cmVcbiAqIEBwYXJhbSB7UElYSS5UZXh0dXJlPX0gb2ZmRGlzYWJsZWRUZXh0dXJlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTXV0ZUJ1dHRvbihcbiAgICBvbk5vcm1hbFRleHR1cmUsXG4gICAgb2ZmTm9ybWFsVGV4dHVyZSxcbiAgICBvbk92ZXJUZXh0dXJlLFxuICAgIG9mZk92ZXJUZXh0dXJlLFxuICAgIG9uRG93blRleHR1cmUsXG4gICAgb2ZmRG93blRleHR1cmUsXG4gICAgb25EaXNhYmxlZFRleHR1cmUsXG4gICAgb2ZmRGlzYWJsZWRUZXh0dXJlXG4pIHtcbiAgICB2YXIgYXVkaW8gPSBwMy5BdWRpb01hbmFnZXIuaW5zdGFuY2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25Ob3JtYWxUZXh0dXJlID0gb25Ob3JtYWxUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29mZk5vcm1hbFRleHR1cmUgPSBvZmZOb3JtYWxUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uT3ZlclRleHR1cmUgPSBvbk92ZXJUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29mZk92ZXJUZXh0dXJlID0gb2ZmT3ZlclRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25Eb3duVGV4dHVyZSA9IG9uRG93blRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5UZXh0dXJlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb2ZmRG93blRleHR1cmUgPSBvZmZEb3duVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkRpc2FibGVkVGV4dHVyZSA9IG9uRGlzYWJsZWRUZXh0dXJlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuVGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29mZkRpc2FibGVkVGV4dHVyZSA9IG9mZkRpc2FibGVkVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9ub3JtYWxUZXh0dXJlID0gYXVkaW8uaXNNdXRlID8gb2ZmTm9ybWFsVGV4dHVyZSA6IG9uTm9ybWFsVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vdmVyVGV4dHVyZSA9IGF1ZGlvLmlzTXV0ZSA/IG9mZk92ZXJUZXh0dXJlIDogb25PdmVyVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kb3duVGV4dHVyZSA9IGF1ZGlvLmlzTXV0ZSA/IG9mZk92ZXJUZXh0dXJlIDogb25Eb3duVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlRleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kaXNhYmxlZFRleHR1cmUgPSBhdWRpby5pc011dGUgPyBvZmZEaXNhYmxlZFRleHR1cmUgOiBvbkRpc2FibGVkVGV4dHVyZTtcblxuICAgIEJ1dHRvbi5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLl9ub3JtYWxUZXh0dXJlLFxuICAgICAgICB0aGlzLl9vdmVyVGV4dHVyZSxcbiAgICAgICAgdGhpcy5fZG93blRleHR1cmUsXG4gICAgICAgIHRoaXMuX2Rpc2FibGVkVGV4dHVyZVxuICAgICk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IE11dGVCdXR0b247XG5NdXRlQnV0dG9uLnByb3RvdHlwZSAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoQnV0dG9uLnByb3RvdHlwZSk7XG5NdXRlQnV0dG9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICA9IE11dGVCdXR0b247XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKi9cbk11dGVCdXR0b24ucHJvdG90eXBlLm9uTW91c2VDbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGF1ZGlvID0gcDMuQXVkaW9NYW5hZ2VyLmluc3RhbmNlO1xuICAgIGF1ZGlvLm11dGUoIWF1ZGlvLmlzTXV0ZSk7XG5cbiAgICB0aGlzLl9ub3JtYWxUZXh0dXJlICAgICA9IGF1ZGlvLmlzTXV0ZSA/IHRoaXMuX29mZk5vcm1hbFRleHR1cmUgICAgOiB0aGlzLl9vbk5vcm1hbFRleHR1cmU7XG4gICAgdGhpcy5fb3ZlclRleHR1cmUgICAgICAgPSBhdWRpby5pc011dGUgPyB0aGlzLl9vZmZPdmVyVGV4dHVyZSAgICAgIDogdGhpcy5fb25PdmVyVGV4dHVyZTtcbiAgICB0aGlzLl9kb3duVGV4dHVyZSAgICAgICA9IGF1ZGlvLmlzTXV0ZSA/IHRoaXMuX29mZkRvd25UZXh0dXJlICAgICAgOiB0aGlzLl9vbkRvd25UZXh0dXJlO1xuICAgIHRoaXMuX2Rpc2FibGVkVGV4dHVyZSAgID0gYXVkaW8uaXNNdXRlID8gdGhpcy5fb2ZmRGlzYWJsZWRUZXh0dXJlICA6IHRoaXMuX29uRGlzYWJsZWRUZXh0dXJlO1xuXG4gICAgQnV0dG9uLnByb3RvdHlwZS5vbk1vdXNlQ2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG59O1xuIiwiLyoqXG4gKiAgT3V0cm9TY2VuZVxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiAxNC8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQW5pbWF0aW9uU2NlbmUgID0gcmVxdWlyZShcIi4vQW5pbWF0aW9uU2NlbmVcIik7XG52YXIgQ29tbW9uICAgICAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xudmFyIENoYXJhY3RlciAgICAgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gT3V0cm9TY2VuZSgpIHtcbiAgICBBbmltYXRpb25TY2VuZS5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGVmdCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yaWdodCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taWRkbGUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbW9uc3RlciA9IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IE91dHJvU2NlbmU7XG5PdXRyb1NjZW5lLnByb3RvdHlwZSAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlKTtcbk91dHJvU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgID0gT3V0cm9TY2VuZTtcblxuT3V0cm9TY2VuZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiZyA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJnYW1lb3ZlclwiKSk7XG4gICAgdGhpcy5hZGRDaGlsZChiZyk7XG5cbiAgICB2YXIgbW9uc3RlcnMgPSBbXG4gICAgICAgIFwiZ2FtZW92ZXJfbW9uc3RlcjFcIixcbiAgICAgICAgXCJnYW1lb3Zlcl9tb25zdGVyMlwiLFxuICAgICAgICBcImdhbWVvdmVyX21vbnN0ZXIzXCIsXG4gICAgICAgIFwiZ2FtZW92ZXJfbW9uc3RlcjRcIixcbiAgICAgICAgXCJnYW1lb3Zlcl9tb25zdGVyNVwiXG4gICAgXTtcbiAgICB0aGlzLl9tb25zdGVyICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUobW9uc3RlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9uc3RlcnMubGVuZ3RoKV0pKTtcbiAgICB0aGlzLl9tb25zdGVyLnggICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcbiAgICB0aGlzLl9tb25zdGVyLnkgICAgICAgICA9IDQyMC4wO1xuICAgIHRoaXMuX21vbnN0ZXIuYW5jaG9yICAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbW9uc3Rlcik7XG5cbiAgICB0aGlzLl9sZWZ0ICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImdhbWVvdmVyX2dhbmdfbGVmdFwiKSk7XG4gICAgdGhpcy5fbGVmdC54ICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcbiAgICB0aGlzLl9sZWZ0LnkgICAgICAgID0gNjAwLjA7XG4gICAgdGhpcy5fbGVmdC5hbmNob3IgICA9IG5ldyBQSVhJLlBvaW50KDEuMCwgMC41KTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xlZnQpO1xuXG4gICAgdGhpcy5fcmlnaHQgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJnYW1lb3Zlcl9nYW5nX3JpZ2h0XCIpKTtcbiAgICB0aGlzLl9yaWdodC54ICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuICAgIHRoaXMuX3JpZ2h0LnkgICAgICAgPSA2MDAuMDtcbiAgICB0aGlzLl9yaWdodC5hbmNob3IgID0gbmV3IFBJWEkuUG9pbnQoMC4wLCAwLjUpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcmlnaHQpO1xuXG4gICAgdGhpcy5fbWlkZGxlICAgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZ2FtZW92ZXJfZ2FuZ19mcmVkXCIpKTtcbiAgICB0aGlzLl9taWRkbGUueCAgICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNTtcbiAgICB0aGlzLl9taWRkbGUueSAgICAgICAgICA9IDc2MC4wO1xuICAgIHRoaXMuX21pZGRsZS5hbmNob3IgICAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjkpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbWlkZGxlKTtcblxuICAgIEFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG59O1xuXG5PdXRyb1NjZW5lLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgQW5pbWF0aW9uU2NlbmUucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5yZW1vdmVBbGwoKTtcbiAgICBUd2Vlbk1heC5raWxsQWxsKCk7XG59O1xuXG5PdXRyb1NjZW5lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBBbmltYXRpb25TY2VuZS5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnggPSAocDMuQ2FudmFzLndpZHRoIC0gQ29tbW9uLlNUQUdFX1dJRFRIKSAqIDAuNTtcbn07XG5cbk91dHJvU2NlbmUucHJvdG90eXBlLmFwcGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIEFuaW1hdGlvblNjZW5lLnByb3RvdHlwZS5hcHBlYXIuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuX3NraXBCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuX2hvbWVCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fbGVmdC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNCwgMC40KTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9sZWZ0LnNjYWxlLCAwLjQsIHtcbiAgICAgICAgeDogMS4wLFxuICAgICAgICB5OiAxLjAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yaWdodC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuNCwgMC40KTtcbiAgICBUd2Vlbk1heC50byh0aGlzLl9yaWdodC5zY2FsZSwgMC40LCB7XG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgIH0pO1xuXG4gICAgdGhpcy5fbWlkZGxlLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMC42LCAwLjYpO1xuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX21pZGRsZS5zY2FsZSwgMC42LCB7XG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyLjBdXG4gICAgfSk7XG5cbiAgICB0aGlzLl9tb25zdGVyLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIFR3ZWVuTWF4LnRvKHRoaXMuX21vbnN0ZXIuc2NhbGUsIDAuNCwge1xuICAgICAgICBkZWxheTogMC40LFxuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWduYWxzLm5leHQuZGlzcGF0Y2goKTtcblxuICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2xlZnQsIDAuNCwge1xuICAgICAgICAgICAgICAgICAgICBhbHBoYTogMC4wLFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcy5fcmlnaHQsIDAuNCwge1xuICAgICAgICAgICAgICAgICAgICBhbHBoYTogMC4wLFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcy5fbWlkZGxlLCAwLjQsIHtcbiAgICAgICAgICAgICAgICAgICAgYWxwaGE6IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuX21vbnN0ZXIsIDAuNCwge1xuICAgICAgICAgICAgICAgICAgICBhbHBoYTogMC4wLFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAwLjQsIHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlU2NvcGU6IHRoaXNcbiAgICB9KTtcblxuICAgIHRoaXMuX21vbnN0ZXIuYWxwaGEgPSAwLjA7XG4gICAgVHdlZW5NYXgudG8odGhpcy5fbW9uc3RlciwgMC4yLCB7XG4gICAgICAgIGRlbGF5OiAwLjQsXG4gICAgICAgIGFscGhhOiAxLjAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXRcbiAgICB9KTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3Njb29ieXN0aW5nXCIpO1xuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBDb21tb24ucGxheU1lbnVNdXNpYygpO1xuICAgIH0sIDguMCwgdGhpcyk7XG59O1xuIiwiLyoqXG4gKiAgUGF1c2VTY2VuZVxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA3LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBCdXR0b24gICAgICA9IHJlcXVpcmUoXCIuL0J1dHRvblwiKTtcbnZhciBNdXRlQnV0dG9uICA9IHJlcXVpcmUoXCIuL011dGVCdXR0b25cIik7XG52YXIgU2NlbmUgICAgICAgPSByZXF1aXJlKFwiLi9TY2VuZVwiKTtcbnZhciBUcmFuc2l0aW9uICA9IHJlcXVpcmUoXCIuL1RyYW5zaXRpb25cIik7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBhdXNlU2NlbmUoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3ZlcmxheSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYW5lbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iZXN0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wbGF5QnV0dG9uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9ob21lQnV0dG9uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNdXRlQnV0dG9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc291bmRCdXR0b24gPSBudWxsO1xuXG4gICAgU2NlbmUuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gUGF1c2VTY2VuZTtcblBhdXNlU2NlbmUucHJvdG90eXBlICAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoU2NlbmUucHJvdG90eXBlKTtcblBhdXNlU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFBhdXNlU2NlbmU7XG5cblBhdXNlU2NlbmUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9vdmVybGF5ID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX292ZXJsYXkpO1xuXG4gICAgdGhpcy5fcGFuZWwgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJwb3BfdXBcIikpO1xuICAgIHRoaXMuX3BhbmVsLnggICAgICAgPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjU7XG4gICAgdGhpcy5fcGFuZWwueSAgICAgICA9IENvbW1vbi5TVEFHRV9IRUlHSFQgKiAwLjUgKyA0MC4wO1xuICAgIHRoaXMuX3BhbmVsLmFuY2hvciAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9wYW5lbCk7XG5cbiAgICB2YXIgYXRsYXMgICAgICAgICAgID0gQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRGb250QXRsYXMoXCJoZWx2ZXRpY2FsXzQwX2NvbmRlbnNlZGJvbGRfZ3JlZW5cIik7XG4gICAgdGhpcy5fcGFuZWwudGV4dCAgICA9IG5ldyBwMy5CaXRtYXBUZXh0KENvbW1vbi5jb3B5W1wiaW5zdHJ1Y3Rpb25zXCJdW0NvbW1vbi5sYW5ndWFnZV0sIGF0bGFzLCBwMy5CaXRtYXBUZXh0LkFMSUdOX0NFTlRFUik7XG4gICAgdGhpcy5fcGFuZWwudGV4dC54ICA9IDAuMDtcbiAgICB0aGlzLl9wYW5lbC50ZXh0LnkgID0gLTIwMC4wO1xuICAgIHRoaXMuX3BhbmVsLmFkZENoaWxkKHRoaXMuX3BhbmVsLnRleHQpO1xuXG4gICAgdGhpcy5fcGFuZWwuaW1hZ2UgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInVpX3R1dG9yaWFsXCIpKTtcbiAgICB0aGlzLl9wYW5lbC5pbWFnZS55ICAgICAgICAgPSAyMC4wO1xuICAgIHRoaXMuX3BhbmVsLmltYWdlLmFuY2hvciAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl9wYW5lbC5hZGRDaGlsZCh0aGlzLl9wYW5lbC5pbWFnZSk7XG5cbiAgICB0aGlzLl9iZXN0ICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJlc3Rfc2NvcmVcIikpO1xuICAgIHRoaXMuX2Jlc3QueCAgICAgICAgPSB0aGlzLl9wYW5lbC54O1xuICAgIHRoaXMuX2Jlc3QueSAgICAgICAgPSB0aGlzLl9wYW5lbC55IC0yOTQuMDtcbiAgICB0aGlzLl9iZXN0LmFuY2hvciAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuX2Jlc3QudmlzaWJsZSAgPSBmYWxzZTtcbiAgICB0aGlzLmFkZENoaWxkQXQodGhpcy5fYmVzdCwgdGhpcy5fcGFuZWwucGFyZW50LmdldENoaWxkSW5kZXgodGhpcy5fcGFuZWwpKTtcblxuICAgIGF0bGFzICAgICAgICAgICAgICAgICAgID0gQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRGb250QXRsYXMoXCJ5b3VuZ2ZyYW5rZW5zdGVpbl80Nl9vcmFuZ2VcIik7XG4gICAgdGhpcy5fYmVzdC50ZXh0ICAgICAgICAgPSBuZXcgcDMuQml0bWFwVGV4dChDb21tb24uY29weVtcImJlc3RcIl1bQ29tbW9uLmxhbmd1YWdlXSwgYXRsYXMsIHAzLkJpdG1hcFRleHQuQUxJR05fQ0VOVEVSKTtcbiAgICB0aGlzLl9iZXN0LnRleHQudGV4dCAgICA9IHRoaXMuX2Jlc3QudGV4dC50ZXh0LnJlcGxhY2UoXCJbU0NPUkVdXCIsIENvbW1vbi5zYXZlU2NvcmUoKSk7XG4gICAgdGhpcy5fYmVzdC50ZXh0LnggICAgICAgPSAwLjA7XG4gICAgdGhpcy5fYmVzdC50ZXh0LnkgICAgICAgPSAtMTYuMDtcbiAgICB0aGlzLl9iZXN0LmFkZENoaWxkKHRoaXMuX2Jlc3QudGV4dCk7XG5cbiAgICB0aGlzLl9wbGF5QnV0dG9uID0gbmV3IEJ1dHRvbihcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BsYXlfZGVmXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcGxheV9vdmVyXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcGxheV9wcmVzc2VkXCIpXG4gICAgKTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnggPSA2LjA7XG4gICAgdGhpcy5fcGxheUJ1dHRvbi55ID0gMTgwLjA7XG4gICAgdGhpcy5fcGxheUJ1dHRvbi5pbml0KCk7XG4gICAgdGhpcy5fcGxheUJ1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uUGxheUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5vbkJ1dHRvblJvbGxPdmVyLCB0aGlzKTtcbiAgICB0aGlzLl9wYW5lbC5hZGRDaGlsZCh0aGlzLl9wbGF5QnV0dG9uKTtcblxuICAgIHRoaXMuX2hvbWVCdXR0b24gPSBuZXcgQnV0dG9uKFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfaG9tZV9kZWZcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9ob21lX292ZXJcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9ob21lX3ByZXNzZWRcIilcbiAgICApO1xuICAgIHRoaXMuX2hvbWVCdXR0b24ueSA9IDEwMC4wO1xuICAgIHRoaXMuX2hvbWVCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG4gICAgdGhpcy5faG9tZUJ1dHRvbi5pbml0KCk7XG4gICAgdGhpcy5faG9tZUJ1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uSG9tZUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB0aGlzLl9ob21lQnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5vbkJ1dHRvblJvbGxPdmVyLCB0aGlzKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2hvbWVCdXR0b24pO1xuXG4gICAgdGhpcy5fc291bmRCdXR0b24gPSBuZXcgTXV0ZUJ1dHRvbihcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX2RlZlwiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9kZWZcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vbl9vdmVyXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb2ZmX292ZXJcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vbl9wcmVzc2VkXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb2ZmX3ByZXNzZWRcIilcbiAgICApO1xuICAgIHRoaXMuX3NvdW5kQnV0dG9uLnkgPSAxMDAuMDtcbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5pbml0KCk7XG4gICAgdGhpcy5fc291bmRCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLm9uQnV0dG9uUm9sbE92ZXIsIHRoaXMpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc291bmRCdXR0b24pO1xufTtcblxuUGF1c2VTY2VuZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BsYXlCdXR0b24uZGlzcG9zZSgpO1xuICAgIHRoaXMuX2hvbWVCdXR0b24uZGlzcG9zZSgpO1xuICAgIHRoaXMuX3NvdW5kQnV0dG9uLmRpc3Bvc2UoKTtcblxuICAgIFNjZW5lLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG59O1xuXG5QYXVzZVNjZW5lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnggPSAocDMuQ2FudmFzLndpZHRoIC0gQ29tbW9uLlNUQUdFX1dJRFRIKSAqIDAuNTtcblxuICAgIHRoaXMuX292ZXJsYXkuY2xlYXIoKTtcbiAgICB0aGlzLl9vdmVybGF5LmJlZ2luRmlsbCgweDAsIDAuNSk7XG4gICAgdGhpcy5fb3ZlcmxheS5kcmF3UmVjdChcbiAgICAgICAgKENvbW1vbi5TVEFHRV9XSURUSCAtIHAzLkNhbnZhcy53aWR0aCkgKiAwLjUsXG4gICAgICAgIDAuMCxcbiAgICAgICAgcDMuQ2FudmFzLndpZHRoLFxuICAgICAgICBwMy5DYW52YXMuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLl9vdmVybGF5LmVuZEZpbGwoKTtcblxuICAgIHRoaXMuX2hvbWVCdXR0b24ueCA9IChDb21tb24uU1RBR0VfV0lEVEggLSBwMy5DYW52YXMud2lkdGgpICogMC41ICsgMTAwLjA7XG4gICAgdGhpcy5fc291bmRCdXR0b24ueCA9IChDb21tb24uU1RBR0VfV0lEVEggKyBwMy5DYW52YXMud2lkdGgpICogMC41IC0gMTAwLjA7XG59O1xuXG5QYXVzZVNjZW5lLnByb3RvdHlwZS5hcHBlYXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGVJbigpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblBhdXNlU2NlbmUucHJvdG90eXBlLmFuaW1hdGVJbiA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIHZhciB0aW1lbGluZSAgICAgICAgICAgICAgICAgICAgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB0aW1lbGluZS52YXJzLm9uQ29tcGxldGUgICAgICAgID0gY2FsbGJhY2s7XG4gICAgdGltZWxpbmUudmFycy5vbkNvbXBsZXRlU2NvcGUgICA9IHNjb3BlO1xuXG4gICAgdmFyIGRlbGF5ID0gMC4xO1xuXG4gICAgdGhpcy5fb3ZlcmxheS5hbHBoYSA9IDAuMDtcbiAgICB0aW1lbGluZS5pbnNlcnQoVHdlZW5NYXgudG8odGhpcy5fb3ZlcmxheSwgMC4yLCB7XG4gICAgICAgIGFscGhhOiAxLjAsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXRcbiAgICB9KSk7XG5cbiAgICB0aGlzLl9wYW5lbC5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMC4wKTtcbiAgICB0aW1lbGluZS5pbnNlcnQoVHdlZW5NYXgudG8odGhpcy5fcGFuZWwuc2NhbGUsIDAuNCwge1xuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICBlYXNlUGFyYW1zOiBbMS4wXSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl9iZXN0LnkgPSB0aGlzLl9wYW5lbC55IC0gMjk0LjAgKyB0aGlzLl9iZXN0LmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2Jlc3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLl9iZXN0LCAwLjMsIHtcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9wYW5lbC55IC0gMjk0LjAsXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgIH0pKTtcblxuICAgIHRoaXMuX2hvbWVCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMuX2hvbWVCdXR0b24uc2NhbGUsIDAuNCwge1xuICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFsyLjBdXG4gICAgfSkpO1xuXG4gICAgdGhpcy5fc291bmRCdXR0b24uc2NhbGUgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMuX3NvdW5kQnV0dG9uLnNjYWxlLCAwLjQsIHtcbiAgICAgICAgZGVsYXk6IGRlbGF5ICogMixcbiAgICAgICAgeDogMS4wLFxuICAgICAgICB5OiAxLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzIuMF1cbiAgICB9KSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBjYWxsYmFja1xuICogQHBhcmFtIHsqPX0gc2NvcGVcbiAqL1xuUGF1c2VTY2VuZS5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIHZhciB0aW1lbGluZSAgICAgICAgICAgICAgICAgICAgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB0aW1lbGluZS52YXJzLm9uQ29tcGxldGUgICAgICAgID0gY2FsbGJhY2s7XG4gICAgdGltZWxpbmUudmFycy5vbkNvbXBsZXRlU2NvcGUgICA9IHNjb3BlO1xuXG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMuX292ZXJsYXksIDAuMiwge1xuICAgICAgICBhbHBoYTogMC4wLFxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0XG4gICAgfSkpO1xuXG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMuX3BhbmVsLnNjYWxlLCAwLjQsIHtcbiAgICAgICAgeDogMC4wLFxuICAgICAgICB5OiAwLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZUluLFxuICAgICAgICBlYXNlUGFyYW1zOiBbMS4wXVxuICAgIH0pKTtcblxuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl9iZXN0LCAwLjIsIHtcbiAgICAgICAgYWxwaGE6IDAuMCxcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxuICAgIH0pKTtcblxuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl9ob21lQnV0dG9uLnNjYWxlLCAwLjQsIHtcbiAgICAgICAgeDogMC4wLFxuICAgICAgICB5OiAwLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZUluLFxuICAgICAgICBlYXNlUGFyYW1zOiBbMi4wXVxuICAgIH0pKTtcblxuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl9zb3VuZEJ1dHRvbi5zY2FsZSwgMC40LCB7XG4gICAgICAgIHg6IDAuMCxcbiAgICAgICAgeTogMC4wLFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VJbixcbiAgICAgICAgZWFzZVBhcmFtczogWzIuMF1cbiAgICB9KSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUJ1dHRvbn0gYnV0dG9uXG4gKi9cblBhdXNlU2NlbmUucHJvdG90eXBlLm9uUGxheUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgdGhpcy5hbmltYXRlT3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNpZ25hbHMubmV4dC5kaXNwYXRjaCgpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfcHJlc3NcIik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUJ1dHRvbn0gYnV0dG9uXG4gKi9cblBhdXNlU2NlbmUucHJvdG90eXBlLm9uSG9tZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgdGhpcy5zaWduYWxzLmhvbWUuZGlzcGF0Y2goKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3ByZXNzXCIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFCdXR0b259IGJ1dHRvblxuICovXG5QYXVzZVNjZW5lLnByb3RvdHlwZS5vbkJ1dHRvblJvbGxPdmVyID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfcm9sbG92ZXJcIik7XG59O1xuIiwiLyoqXG4gKiAgUHJlbG9hZGVyU2NlbmVcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gMTQvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIENvbW1vbiAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xudmFyIEJ1dHRvbiAgICAgID0gcmVxdWlyZShcIi4vQnV0dG9uXCIpO1xudmFyIFNjZW5lICAgICAgID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFByZWxvYWRlclNjZW5lKCkge1xuICAgIFNjZW5lLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c2lnbmFscy5TaWduYWx9XG4gICAgICovXG4gICAgdGhpcy5zaWduYWxzLnNraXAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkdyYXBoaWNzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmcgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJlbG9hZGVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtwMy5Nb3ZpZUNsaXB9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvYWRlZCA9IDAuMDtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgICAgICA9IFByZWxvYWRlclNjZW5lO1xuUHJlbG9hZGVyU2NlbmUucHJvdG90eXBlICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShTY2VuZS5wcm90b3R5cGUpO1xuUHJlbG9hZGVyU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgID0gUHJlbG9hZGVyU2NlbmU7XG5cblByZWxvYWRlclNjZW5lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fYmcpO1xuXG4gICAgdGhpcy5fcHJlbG9hZGVyICAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9iZ1wiKSk7XG4gICAgdGhpcy5fcHJlbG9hZGVyLnggICAgICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuICAgIHRoaXMuX3ByZWxvYWRlci55ICAgICAgICAgICA9IDUyMC4wO1xuICAgIHRoaXMuX3ByZWxvYWRlci5hbmNob3IgICAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3ByZWxvYWRlcik7XG5cbiAgICB0aGlzLl9wcmVsb2FkZXIuYmFyICAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9iYXJcIikpO1xuICAgIHRoaXMuX3ByZWxvYWRlci5iYXIueCAgICAgICAgICAgPSAtdGhpcy5fcHJlbG9hZGVyLmJhci53aWR0aCAqIDAuNTtcbiAgICB0aGlzLl9wcmVsb2FkZXIuYmFyLnkgICAgICAgICAgID0gMC4wO1xuICAgIHRoaXMuX3ByZWxvYWRlci5iYXIuc2NhbGUueCAgICAgPSAwLjA7XG4gICAgdGhpcy5fcHJlbG9hZGVyLmJhci5hbmNob3IgICAgICA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMC41KTtcbiAgICB0aGlzLl9wcmVsb2FkZXIuYWRkQ2hpbGQodGhpcy5fcHJlbG9hZGVyLmJhcik7XG5cbiAgICB0aGlzLl9wcmVsb2FkZXIub3ZlcmxheSAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInByZWxvYWRlcl9vdmVybGF5XCIpKTtcbiAgICB0aGlzLl9wcmVsb2FkZXIub3ZlcmxheS54ICAgICAgID0gMC4wO1xuICAgIHRoaXMuX3ByZWxvYWRlci5vdmVybGF5LnkgICAgICAgPSAwLjA7XG4gICAgdGhpcy5fcHJlbG9hZGVyLm92ZXJsYXkuYW5jaG9yICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl9wcmVsb2FkZXIuYWRkQ2hpbGQodGhpcy5fcHJlbG9hZGVyLm92ZXJsYXkpO1xuXG4gICAgdmFyIHNlcXVlbmNlID0gbmV3IHAzLk1vdmllQ2xpcFNlcXVlbmNlKCk7XG4gICAgc2VxdWVuY2UuYWRkVGV4dHVyZXMoW1xuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJsb2FkZXJfYW5pbWF0aW9uMDAwMVwiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwibG9hZGVyX2FuaW1hdGlvbjAwMDJcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImxvYWRlcl9hbmltYXRpb24wMDAzXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJsb2FkZXJfYW5pbWF0aW9uMDAwNFwiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwibG9hZGVyX2FuaW1hdGlvbjAwMDVcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImxvYWRlcl9hbmltYXRpb24wMDA2XCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJsb2FkZXJfYW5pbWF0aW9uMDAwN1wiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwibG9hZGVyX2FuaW1hdGlvbjAwMDhcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImxvYWRlcl9hbmltYXRpb24wMDA5XCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJsb2FkZXJfYW5pbWF0aW9uMDAxMFwiKVxuICAgIF0sIFwiZGVmYXVsdFwiKTtcblxuICAgIHRoaXMuX2FuaW1hdGlvbiAgICAgICAgICAgICAgICAgPSBuZXcgcDMuTW92aWVDbGlwKHNlcXVlbmNlLCBcImRlZmF1bHRcIik7XG4gICAgdGhpcy5fYW5pbWF0aW9uLnggICAgICAgICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSArIDU0LjA7XG4gICAgdGhpcy5fYW5pbWF0aW9uLnkgICAgICAgICAgICAgICA9IDIyMC4wO1xuICAgIHRoaXMuX2FuaW1hdGlvbi5hbmNob3IgICAgICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fYW5pbWF0aW9uLmFuaW1hdGlvblNwZWVkICA9IDEuMCAvIDUuMDtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2FuaW1hdGlvbik7XG59O1xuXG5QcmVsb2FkZXJTY2VuZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIFNjZW5lLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG59O1xuXG5QcmVsb2FkZXJTY2VuZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy54ID0gKHAzLkNhbnZhcy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG5cbiAgICB0aGlzLl9iZy5jbGVhcigpO1xuICAgIHRoaXMuX2JnLmJlZ2luRmlsbCgweDg4MkY4OCk7XG4gICAgdGhpcy5fYmcuZHJhd1JlY3QoKENvbW1vbi5TVEFHRV9XSURUSCAtIHAzLkNhbnZhcy53aWR0aCkgKiAwLjUsIDAuMCwgcDMuQ2FudmFzLndpZHRoLCBwMy5DYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLl9iZy5lbmRGaWxsKCk7XG59O1xuXG5QcmVsb2FkZXJTY2VuZS5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4obnVsbCk7XG59O1xuXG5QcmVsb2FkZXJTY2VuZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcHJlbG9hZGVyLmJhci5zY2FsZS54ICs9ICh0aGlzLl9sb2FkZWQgLSB0aGlzLl9wcmVsb2FkZXIuYmFyLnNjYWxlLngpICogMC4yO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Kj19IHNjb3BlXG4gKi9cblByZWxvYWRlclNjZW5lLnByb3RvdHlwZS5hbmltYXRlT3V0ID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgdGhpcy5fYW5pbWF0aW9uLnNpZ25hbEFuaW1hdGlvbkZpbmlzaGVkLmFkZE9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNjZW5lLnByb3RvdHlwZS5hbmltYXRlT3V0LmNhbGwodGhpcywgY2FsbGJhY2ssIHNjb3BlKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLl9hbmltYXRpb24uZ290b0FuZFBsYXkoXCJkZWZhdWx0XCIpO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByZWxvYWRlclNjZW5lLnByb3RvdHlwZSwgXCJsb2FkZWRcIiwge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IU51bWJlcn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IHZhbHVlO1xuICAgIH1cbn0pO1xuIiwiLyoqXG4gKiAgU2NlbmFyaW9cbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gOS8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQ29tbW9uICAgICAgPSByZXF1aXJlKFwiLi9Db21tb25cIik7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNjZW5hcmlvKCkge1xufVxubW9kdWxlLmV4cG9ydHMgPSBTY2VuYXJpbztcblxuLyoqXG4gKiBAcGFyYW0geyFHYW1lU2NlbmV9IGdhbWVcbiAqL1xuU2NlbmFyaW8ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcbiIsIi8qKlxuICogIFNjZW5hcmlvMVxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA5LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDaGFyYWN0ZXIgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBHYW1lU2NlbmUgICA9IHJlcXVpcmUoXCIuL0dhbWVTY2VuZVwiKTtcbnZhciBTY2VuYXJpbyAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuYXJpbzEoKSB7XG4gICAgU2NlbmFyaW8uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gU2NlbmFyaW8xO1xuU2NlbmFyaW8xLnByb3RvdHlwZSAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5hcmlvLnByb3RvdHlwZSk7XG5TY2VuYXJpbzEucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5hcmlvMTtcblxuLyoqXG4gKiBAcGFyYW0geyFHYW1lU2NlbmV9IGdhbWVcbiAqL1xuU2NlbmFyaW8xLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIHN0YXJ0eCAgICAgID0gMC4wO1xuICAgIHZhciBkaXJlY3Rpb24gICA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTE7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgIHN0YXJ0eCA9IGdhbWUubGVmdEJvdW5kO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgICAgIHN0YXJ0eCA9IGdhbWUucmlnaHRCb3VuZDtcbiAgICB9XG5cbiAgICB2YXIgZ2FuZyAgICAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbUdhbmcoKTtcbiAgICBnYW5nLnggICAgICAgICAgPSBzdGFydHg7XG5cbiAgICB2YXIgbW9uc3RlciAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbU1vbnN0ZXIoKTtcbiAgICBtb25zdGVyLnggICAgICAgPSBzdGFydHggKyBDb21tb24uU1BPT0tfRElTVEFOQ0UgKiAtZGlyZWN0aW9uO1xuXG4gICAgLy8gZ2FuZyBhbmltYXRpb25cbiAgICBnYW5nLm1vdmUoZGlyZWN0aW9uKTtcbiAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfc2Nvb2JodWhfcmV2ZXJiXCIpO1xuICAgIH0sIDAuMCwgdGhpcyk7XG5cbiAgICAvLyBtb25zdGVyIGFuaW1hdGlvblxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb25zdGVyLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgQ2hhcmFjdGVyLnBsYXlNb25zdGVyU291bmQoKTtcbiAgICB9LCAxLjQsIHRoaXMpO1xuXG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDAuMik7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDIuMik7XG59OyIsIi8qKlxuICogIFNjZW5hcmlvMlxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA5LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDaGFyYWN0ZXIgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBHYW1lU2NlbmUgICA9IHJlcXVpcmUoXCIuL0dhbWVTY2VuZVwiKTtcbnZhciBTY2VuYXJpbyAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuYXJpbzIoKSB7XG4gICAgU2NlbmFyaW8uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gU2NlbmFyaW8yO1xuU2NlbmFyaW8yLnByb3RvdHlwZSAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5hcmlvLnByb3RvdHlwZSk7XG5TY2VuYXJpbzIucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5hcmlvMjtcblxuLyoqXG4gKiBAcGFyYW0geyFHYW1lU2NlbmV9IGdhbWVcbiAqL1xuU2NlbmFyaW8yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIHN0YXJ0eCAgICAgID0gMC4wO1xuICAgIHZhciBkaXJlY3Rpb24gICA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTE7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgIHN0YXJ0eCA9IGdhbWUubGVmdEJvdW5kO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgICAgIHN0YXJ0eCA9IGdhbWUucmlnaHRCb3VuZDtcbiAgICB9XG5cbiAgICB2YXIgZ2FuZyAgICAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbUdhbmcoKTtcbiAgICBnYW5nLnggICAgICAgICAgPSBzdGFydHg7XG5cbiAgICB2YXIgbW9uc3RlciAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbU1vbnN0ZXIoKTtcbiAgICBtb25zdGVyLnggICAgICAgPSBzdGFydHggKyBDb21tb24uU1BPT0tfRElTVEFOQ0UgKiAtZGlyZWN0aW9uO1xuXG4gICAgLy8gZ2FuZyBhbmltYXRpb25cbiAgICBnYW5nLm1vdmUoZGlyZWN0aW9uLCA4MDAuMCk7XG4gICAgZ2FuZy5zaWduYWxzLm1vdmVkLmFkZE9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIGdhbmcubG9vaygxKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW5nLm1vdmUoZGlyZWN0aW9uICogLTEsIDIwMC4wKTtcbiAgICAgICAgICAgIGdhbmcuc2lnbmFscy5tb3ZlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBnYW5nLmxvb2soMSk7XG4gICAgICAgICAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FuZy5sb29rKC0xLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbmcubW92ZShkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMS4wLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9LCAxLjAsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIDIuMCwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICAvLyBtb25zdGVyIGFuaW1hdGlvblxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb25zdGVyLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgQ2hhcmFjdGVyLnBsYXlNb25zdGVyU291bmQoKTtcbiAgICB9LCA4LjAsIHRoaXMpO1xuXG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDEuMCk7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDIuNCk7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDYuMCk7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDcuNCk7XG59OyIsIi8qKlxuICogIFNjZW5hcmlvM1xuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA5LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDaGFyYWN0ZXIgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBHYW1lU2NlbmUgICA9IHJlcXVpcmUoXCIuL0dhbWVTY2VuZVwiKTtcbnZhciBTY2VuYXJpbyAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuYXJpbzMoKSB7XG4gICAgU2NlbmFyaW8uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gU2NlbmFyaW8zO1xuU2NlbmFyaW8zLnByb3RvdHlwZSAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5hcmlvLnByb3RvdHlwZSk7XG5TY2VuYXJpbzMucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5hcmlvMztcblxuLyoqXG4gKiBAcGFyYW0geyFHYW1lU2NlbmV9IGdhbWVcbiAqL1xuU2NlbmFyaW8zLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIHN0YXJ0eCAgICAgID0gMC4wO1xuICAgIHZhciBkaXJlY3Rpb24gICA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTE7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgIHN0YXJ0eCA9IGdhbWUubGVmdEJvdW5kO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgICAgIHN0YXJ0eCA9IGdhbWUucmlnaHRCb3VuZDtcbiAgICB9XG5cbiAgICB2YXIgZ2FuZyAgICAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbUdhbmcoKTtcbiAgICBnYW5nLnggICAgICAgICAgPSBzdGFydHg7XG5cbiAgICB2YXIgbW9uc3RlciAgICAgICAgID0gZ2FtZS5jcmVhdGVSYW5kb21Nb25zdGVyKCk7XG4gICAgbW9uc3Rlci54ICAgICAgICAgICA9IGdhbmcueCArIDgwMC4wICogZGlyZWN0aW9uO1xuICAgIG1vbnN0ZXIuc2NhbGUueCAgICAgPSAtZGlyZWN0aW9uO1xuICAgIG1vbnN0ZXIudmlzaWJsZSAgICAgPSBmYWxzZTtcblxuICAgIC8vIGdhbmcgYW5pbWF0aW9uXG4gICAgZ2FuZy5tb3ZlKGRpcmVjdGlvbiwgNjAwLjApO1xuICAgIGdhbmcuc2lnbmFscy5tb3ZlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICBnYW5nLmxvb2soZGlyZWN0aW9uLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW5nLm1vdmUoLWRpcmVjdGlvbik7XG4gICAgICAgIH0sIDAuNSwgdGhpcyk7XG5cbiAgICAgICAgLy8gbW9uc3RlciBhbmltYXRpb25cbiAgICAgICAgbW9uc3Rlci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb25zdGVyLm1vdmUoLWRpcmVjdGlvbik7XG4gICAgICAgICAgICBDaGFyYWN0ZXIucGxheU1vbnN0ZXJTb3VuZCgpO1xuICAgICAgICB9LCAwLjcsIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDEuMCk7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDIuMik7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcsIDMuNCk7XG59OyIsIi8qKlxuICogIFNjZW5hcmlvNFxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA5LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDaGFyYWN0ZXIgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBHYW1lU2NlbmUgICA9IHJlcXVpcmUoXCIuL0dhbWVTY2VuZVwiKTtcbnZhciBTY2VuYXJpbyAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuYXJpbzQoKSB7XG4gICAgU2NlbmFyaW8uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gU2NlbmFyaW80O1xuU2NlbmFyaW80LnByb3RvdHlwZSAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5hcmlvLnByb3RvdHlwZSk7XG5TY2VuYXJpbzQucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5hcmlvNDtcblxuLyoqXG4gKiBAcGFyYW0geyFHYW1lU2NlbmV9IGdhbWVcbiAqL1xuU2NlbmFyaW80LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIGdhbmcxICAgPSBnYW1lLmNyZWF0ZVJhbmRvbUdhbmcoKTtcbiAgICBnYW5nMS54ICAgICA9IGdhbWUubGVmdEJvdW5kO1xuXG4gICAgdmFyIGdhbmcyICAgPSBnYW1lLmNyZWF0ZVJhbmRvbUdhbmcoKTtcbiAgICBnYW5nMi54ICAgICA9IGdhbWUucmlnaHRCb3VuZDtcblxuICAgIHZhciBtb25zdGVyMSAgICA9IGdhbWUuY3JlYXRlUmFuZG9tTW9uc3RlcigpO1xuICAgIG1vbnN0ZXIxLnggICAgICA9IGdhbWUubGVmdEJvdW5kIC0gQ29tbW9uLlNQT09LX0RJU1RBTkNFIC0gMTAwLjA7XG5cbiAgICB2YXIgbW9uc3RlcjIgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbU1vbnN0ZXIoKTtcbiAgICBtb25zdGVyMi54ICAgICAgPSBnYW1lLnJpZ2h0Qm91bmQgKyBDb21tb24uU1BPT0tfRElTVEFOQ0UgKyAxMDAuMDtcblxuICAgIGdhbmcxLm1vdmUoMSwgNTQwKTtcbiAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZ2FuZzIubW92ZSgtMSwgNTQwKTtcbiAgICAgICAgZ2FuZzIuc2lnbmFscy5tb3ZlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FuZzEubG9vaygxLCB0cnVlKTtcbiAgICAgICAgICAgIGdhbmcyLmxvb2soLTEsIHRydWUpO1xuXG4gICAgICAgICAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnYW5nMS5sb29rKC0xLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBnYW5nMi5sb29rKC0xLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBtb25zdGVyMS5tb3ZlKDEpO1xuICAgICAgICAgICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgICAgICAgICB9LCAxLjApO1xuXG4gICAgICAgICAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnYW5nMS5sb29rKDEsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGdhbmcyLmxvb2soMSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbW9uc3RlcjIubW92ZSgtMSk7XG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyLnBsYXlNb25zdGVyU291bmQoKTtcbiAgICAgICAgICAgIH0sIDMuMCk7XG5cbiAgICAgICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdhbmcxLm1vdmUoLTEpO1xuICAgICAgICAgICAgICAgIGdhbmcyLm1vdmUoMSk7XG4gICAgICAgICAgICB9LCA2LjApO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LCAwLjIsIHRoaXMpO1xuXG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcxLCAwLjQpO1xuICAgIGdhbWUucG9wTW9uc3RlcihnYW5nMiwgMS44KTtcbiAgICBnYW1lLnBvcE1vbnN0ZXIoZ2FuZzEsIDMuMik7XG5cbiAgICBnYW1lLnBvcE1vbnN0ZXIoZ2FuZzIsIDUuNCk7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcxLCA1LjgpO1xufTtcbiIsIi8qKlxuICogIFNjZW5hcmlvNVxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA5LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDaGFyYWN0ZXIgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBHYW1lU2NlbmUgICA9IHJlcXVpcmUoXCIuL0dhbWVTY2VuZVwiKTtcbnZhciBTY2VuYXJpbyAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuYXJpbzUoKSB7XG4gICAgU2NlbmFyaW8uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gU2NlbmFyaW81O1xuU2NlbmFyaW81LnByb3RvdHlwZSAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5hcmlvLnByb3RvdHlwZSk7XG5TY2VuYXJpbzUucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5hcmlvNTtcblxuLyoqXG4gKiBAcGFyYW0geyFHYW1lU2NlbmV9IGdhbWVcbiAqL1xuU2NlbmFyaW81LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIGRpcmVjdGlvbiAgID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMTtcbiAgICB2YXIgZ2FuZyAgICAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbUdhbmcoKTtcbiAgICBnYW5nLnggICAgICAgICAgPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjU7XG5cbiAgICB2YXIgbW9uc3RlcjEgICAgICAgID0gZ2FtZS5jcmVhdGVSYW5kb21Nb25zdGVyKCk7XG4gICAgbW9uc3RlcjEueCAgICAgICAgICA9IGdhbmcueCAtIDI4MC4wO1xuICAgIG1vbnN0ZXIxLnZpc2libGUgICAgPSBmYWxzZTtcblxuICAgIHZhciBtb25zdGVyMiAgICAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbU1vbnN0ZXIoKTtcbiAgICBtb25zdGVyMi54ICAgICAgICAgID0gZ2FuZy54ICsgMjgwLjA7XG4gICAgbW9uc3RlcjIuc2NhbGUueCAgICA9IC0xLjA7XG4gICAgbW9uc3RlcjIudmlzaWJsZSAgICA9IGZhbHNlO1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vbnN0ZXIxLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBtb25zdGVyMi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgZ2FuZy5sb29rKDEsIHRydWUsIHRydWUpO1xuICAgICAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdhbmcubG9vaygtMSwgdHJ1ZSk7XG4gICAgICAgICAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnYW5nLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH0sIDQuMCwgdGhpcyk7XG4gICAgICAgIH0sIDAuNSwgdGhpcyk7XG4gICAgfSwgMS4wLCB0aGlzKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb25zdGVyMS5tb3ZlKDEpO1xuICAgICAgICBDaGFyYWN0ZXIucGxheU1vbnN0ZXJTb3VuZCgpO1xuICAgIH0sIDIuMCwgdGhpcyk7XG5cbiAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9uc3RlcjIubW92ZSgtMSk7XG4gICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgfSwgMi40LCB0aGlzKTtcblxuICAgIGdhbWUucG9wTW9uc3RlcihnYW5nLCAyLjApO1xuICAgIGdhbWUucG9wTW9uc3RlcihnYW5nLCA0LjApO1xuICAgIGdhbWUucG9wTW9uc3RlcihnYW5nLCA1LjApO1xufTtcbiIsIi8qKlxuICogIFNjZW5hcmlvNlxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA5LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBDaGFyYWN0ZXIgICA9IHJlcXVpcmUoXCIuL0NoYXJhY3RlclwiKTtcbnZhciBDb21tb24gICAgICA9IHJlcXVpcmUoXCIuL0NvbW1vblwiKTtcbnZhciBHYW1lU2NlbmUgICA9IHJlcXVpcmUoXCIuL0dhbWVTY2VuZVwiKTtcbnZhciBTY2VuYXJpbyAgICA9IHJlcXVpcmUoXCIuL1NjZW5hcmlvXCIpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuYXJpbzYoKSB7XG4gICAgU2NlbmFyaW8uY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gU2NlbmFyaW82O1xuU2NlbmFyaW82LnByb3RvdHlwZSAgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5hcmlvLnByb3RvdHlwZSk7XG5TY2VuYXJpbzYucHJvdG90eXBlLmNvbnN0cnVjdG9yICAgICA9IFNjZW5hcmlvNjtcblxuLyoqXG4gKiBAcGFyYW0geyFHYW1lU2NlbmV9IGdhbWVcbiAqL1xuU2NlbmFyaW82LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIGRpcmVjdGlvbiAgID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMTtcbiAgICB2YXIgZ2FuZzEgICAgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbUdhbmcoKTtcbiAgICBpZiAoZGlyZWN0aW9uID09IDEpIHtcbiAgICAgICAgZ2FuZzEueCA9IGdhbWUubGVmdEJvdW5kO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IC0xKSB7XG4gICAgICAgIGdhbmcxLnggPSBnYW1lLnJpZ2h0Qm91bmQ7XG4gICAgfVxuXG4gICAgdmFyIGdhbmcyID0gZ2FtZS5jcmVhdGVSYW5kb21HYW5nKCk7XG4gICAgZ2FuZzIueCA9IGdhbmcxLnggLSAxODAuMCAqIGRpcmVjdGlvbjtcblxuICAgIGdhbmcxLnNpZ25hbHMubW92ZWQuYWRkT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgZ2FuZzEubG9vayhkaXJlY3Rpb24sIHRydWUsIHRydWUpO1xuICAgICAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdhbmcxLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgfSwgNy4wLCB0aGlzKTtcbiAgICB9LCB0aGlzKTtcbiAgICBnYW5nMS5tb3ZlKGRpcmVjdGlvbiwgNzIwLjApO1xuXG4gICAgZ2FuZzIuc2lnbmFscy5tb3ZlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICBnYW5nMi5sb29rKGRpcmVjdGlvbiAqIC0xLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FuZzIubW92ZShkaXJlY3Rpb24pO1xuICAgICAgICB9LCA3LjAsIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICAgIGdhbmcyLm1vdmUoZGlyZWN0aW9uLCA3MjAuMCk7XG5cbiAgICBnYW1lLnBvcE1vbnN0ZXIoZ2FuZzEsIDEuMCk7XG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmcyLCAxLjgpO1xuICAgIGdhbWUucG9wTW9uc3RlcihnYW5nMiwgNC4wKTtcbiAgICBnYW1lLnBvcE1vbnN0ZXIoZ2FuZzEsIDQuOCk7XG5cbiAgICB2YXIgbW9uc3RlcjEgICAgICAgID0gZ2FtZS5jcmVhdGVSYW5kb21Nb25zdGVyKCk7XG4gICAgbW9uc3RlcjEueCAgICAgICAgICA9IGdhbWUubGVmdEJvdW5kIC0gMjgwLjA7XG4gICAgdmFyIG1vbnN0ZXIyICAgICAgICA9IGdhbWUuY3JlYXRlUmFuZG9tTW9uc3RlcigpO1xuICAgIG1vbnN0ZXIyLnggICAgICAgICAgPSBnYW1lLnJpZ2h0Qm91bmQgKyAyODAuMDtcbiAgICB2YXIgbW9uc3RlcjMgICAgICAgID0gZ2FtZS5jcmVhdGVSYW5kb21Nb25zdGVyKCk7XG4gICAgbW9uc3RlcjMueCAgICAgICAgICA9IGdhbWUubGVmdEJvdW5kIC0gMjgwLjA7XG4gICAgdmFyIG1vbnN0ZXI0ICAgICAgICA9IGdhbWUuY3JlYXRlUmFuZG9tTW9uc3RlcigpO1xuICAgIG1vbnN0ZXI0LnggICAgICAgICAgPSBnYW1lLnJpZ2h0Qm91bmQgKyAyODAuMDtcblxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb25zdGVyMS5tb3ZlKDEpO1xuICAgICAgICBDaGFyYWN0ZXIucGxheU1vbnN0ZXJTb3VuZCgpO1xuICAgIH0sIDUuMCwgdGhpcyk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vbnN0ZXIyLm1vdmUoLTEpO1xuICAgICAgICBDaGFyYWN0ZXIucGxheU1vbnN0ZXJTb3VuZCgpO1xuICAgIH0sIDUuNiwgdGhpcyk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vbnN0ZXIzLm1vdmUoMSk7XG4gICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgfSwgNi4yLCB0aGlzKTtcbiAgICBDb21tb24uYW5pbWF0b3Iuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9uc3RlcjQubW92ZSgtMSk7XG4gICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgfSwgNi44LCB0aGlzKTtcbn07XG4iLCIvKipcbiAqICBTY2VuYXJpbzdcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gOS8wOS8yMDE1LlxuICpcbiAqL1xuXG52YXIgQ2hhcmFjdGVyICAgPSByZXF1aXJlKFwiLi9DaGFyYWN0ZXJcIik7XG52YXIgQ29tbW9uICAgICAgPSByZXF1aXJlKFwiLi9Db21tb25cIik7XG52YXIgR2FtZVNjZW5lICAgPSByZXF1aXJlKFwiLi9HYW1lU2NlbmVcIik7XG52YXIgU2NlbmFyaW8gICAgPSByZXF1aXJlKFwiLi9TY2VuYXJpb1wiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2NlbmFyaW83KCkge1xuICAgIFNjZW5hcmlvLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IFNjZW5hcmlvNztcblNjZW5hcmlvNy5wcm90b3R5cGUgICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShTY2VuYXJpby5wcm90b3R5cGUpO1xuU2NlbmFyaW83LnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICAgPSBTY2VuYXJpbzc7XG5cbi8qKlxuICogQHBhcmFtIHshR2FtZVNjZW5lfSBnYW1lXG4gKi9cblNjZW5hcmlvNy5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIHZhciBkaXJlY3Rpb24gICA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTE7XG4gICAgdmFyIGdhbmcxICAgICAgID0gZ2FtZS5jcmVhdGVSYW5kb21HYW5nKCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgIGdhbmcxLnggPSBnYW1lLmxlZnRCb3VuZDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAtMSkge1xuICAgICAgICBnYW5nMS54ID0gZ2FtZS5yaWdodEJvdW5kO1xuICAgIH1cblxuICAgIHZhciBnYW5nMiAgID0gZ2FtZS5jcmVhdGVSYW5kb21HYW5nKCk7XG4gICAgZ2FuZzIueCAgICAgPSBnYW5nMS54IC0gMTgwLjAgKiBkaXJlY3Rpb247XG5cbiAgICB2YXIgZ2FuZzMgICA9IGdhbWUuY3JlYXRlUmFuZG9tR2FuZygpO1xuICAgIGdhbmczLnggICAgID0gZ2FuZzIueCAtIDE4MC4wICogZGlyZWN0aW9uO1xuXG4gICAgZ2FuZzEuc2lnbmFscy5tb3ZlZC5hZGRPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICBnYW5nMS5sb29rKGRpcmVjdGlvbiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FuZzEubW92ZShkaXJlY3Rpb24pO1xuICAgICAgICB9LCA0LjgsIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICAgIGdhbmcxLm1vdmUoZGlyZWN0aW9uLCA3NzAuMCk7XG5cbiAgICBnYW5nMi5zaWduYWxzLm1vdmVkLmFkZE9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FuZzIubW92ZShkaXJlY3Rpb24pO1xuICAgICAgICB9LCA0LjgsIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICAgIGdhbmcyLm1vdmUoZGlyZWN0aW9uLCA3NzAuMCk7XG5cbiAgICBnYW5nMy5zaWduYWxzLm1vdmVkLmFkZE9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIGdhbmczLmxvb2soZGlyZWN0aW9uICogLTEsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW5nMy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgICAgIH0sIDQuOCwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gICAgZ2FuZzMubW92ZShkaXJlY3Rpb24sIDc3MC4wKTtcblxuICAgIHZhciBtb25zdGVyMSA9IGdhbWUuY3JlYXRlUmFuZG9tTW9uc3RlcigpO1xuICAgIGlmIChkaXJlY3Rpb24gPT0gMSkge1xuICAgICAgICBtb25zdGVyMS54ID0gZ2FtZS5yaWdodEJvdW5kICsgMjgwLjA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gLTEpIHtcbiAgICAgICAgbW9uc3RlcjEueCA9IGdhbWUubGVmdEJvdW5kIC0gMjgwLjA7XG4gICAgfVxuXG4gICAgdmFyIG1vbnN0ZXIyICAgID0gZ2FtZS5jcmVhdGVSYW5kb21Nb25zdGVyKCk7XG4gICAgbW9uc3RlcjIueCAgICAgID0gbW9uc3RlcjEueDtcblxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb25zdGVyMS5tb3ZlKC1kaXJlY3Rpb24pO1xuICAgICAgICBDaGFyYWN0ZXIucGxheU1vbnN0ZXJTb3VuZCgpO1xuICAgIH0sIDAuNCwgdGhpcyk7XG4gICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vbnN0ZXIyLm1vdmUoLWRpcmVjdGlvbik7XG4gICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgfSwgMS4yLCB0aGlzKTtcblxuXG4gICAgZ2FtZS5wb3BNb25zdGVyKGdhbmczLCAzLjApO1xuICAgIGdhbWUucG9wTW9uc3RlcihnYW5nMiwgMy44KTtcbiAgICBnYW1lLnBvcE1vbnN0ZXIoZ2FuZzIsIDQuNik7XG5cbiAgICB2YXIgbW9uc3RlcjMgICAgPSBnYW1lLmNyZWF0ZVJhbmRvbU1vbnN0ZXIoKTtcbiAgICBtb25zdGVyMy54ICAgICAgPSBtb25zdGVyMS54O1xuXG4gICAgQ29tbW9uLmFuaW1hdG9yLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vbnN0ZXIzLm1vdmUoLWRpcmVjdGlvbik7XG4gICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgfSwgMy40LCB0aGlzKTtcblxuICAgIENvbW1vbi5hbmltYXRvci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbW9uc3RlcjQgPSBnYW1lLmNyZWF0ZVJhbmRvbU1vbnN0ZXIoKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgICAgICBtb25zdGVyNC54ID0gZ2FtZS5sZWZ0Qm91bmQgLSAyODAuMDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gLTEpIHtcbiAgICAgICAgICAgIG1vbnN0ZXI0LnggPSBnYW1lLnJpZ2h0Qm91bmQgKyAyODAuMDtcbiAgICAgICAgfVxuICAgICAgICBtb25zdGVyNC5tb3ZlKGRpcmVjdGlvbik7XG4gICAgICAgIENoYXJhY3Rlci5wbGF5TW9uc3RlclNvdW5kKCk7XG4gICAgfSwgNC4wLCB0aGlzKTtcblxuICAgIGdhbWUucG9wTW9uc3RlcihnYW5nMSwgNS40KTtcbiAgICBnYW1lLnBvcE1vbnN0ZXIoZ2FuZzMsIDYuMik7XG59O1xuIiwiLyoqXG4gKiAgU2NlbmVcbiAqXG4gKiAgQ3JlYXRlZCBieSBMZWdtYW4gb24gNC8wOS8yMDE1LlxuICpcbiAqL1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTY2VuZSgpIHtcbiAgICB0aGlzLnNpZ25hbHMgICAgICAgICAgICA9IHt9O1xuICAgIHRoaXMuc2lnbmFscy5uZXh0ICAgICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG4gICAgdGhpcy5zaWduYWxzLnByZXZpb3VzICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMuaG9tZSAgICAgICA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuICAgIHRoaXMuc2lnbmFscy5wYXVzZSAgICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICA9IFNjZW5lO1xuU2NlbmUucHJvdG90eXBlICAgICAgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoUElYSS5Db250YWluZXIucHJvdG90eXBlKTtcblNjZW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICAgPSBTY2VuZTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBhIHNjZW5lIGlzIGluaXRpYWxpemVkLlxuICovXG5TY2VuZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG92ZXJyaWRlXG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgc2NlbmUgaXMgZGVzdHJveWVkLlxuICovXG5TY2VuZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5uZXh0LmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMucHJldmlvdXMuZGlzcG9zZSgpO1xuICAgIHRoaXMuc2lnbmFscy5ob21lLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnNpZ25hbHMucGF1c2UuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZGV2aWNlIGRpbWVuc2lvbnMgYXJlIGNoYW5nZWQuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgJ3RvcCcgb2YgdGhlIHN0YWNrLlxuICovXG5TY2VuZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIHNob3duIGZvciB0aGUgZmlyc3QgdGltZS5cbiAqL1xuU2NlbmUucHJvdG90eXBlLmFwcGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluKCk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzY2VuZSBpcyBzaG93biAtIHJlZ2FyZGxlc3Mgb2YgYWN0dWFsIHZpc2liaWxpdHkuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oKTtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIGhpZGRlbiAtIHJlZ2FyZGxlc3Mgb2YgYWN0dWFsIHZpc2liaWxpdHkuXG4gKi9cblNjZW5lLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gb3ZlcnJpZGVcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TY2VuZS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSB8fCB3aW5kb3c7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TY2VuZS5wcm90b3R5cGUuYW5pbWF0ZU91dCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgfHwgd2luZG93O1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlKTtcbiAgICB9XG59OyIsIi8qKlxuICogIFNjZW5lTWFuYWdlclxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA0LzA5LzIwMTUuXG4gKlxuICovXG5cbnZhciBTY2VuZSAgICAgICA9IHJlcXVpcmUoXCIuL1NjZW5lXCIpO1xudmFyIFRyYW5zaXRpb24gID0gcmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2NlbmVNYW5hZ2VyKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLkRpc3BsYXlPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGFnZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5DYW52YXNSZW5kZXJlciB8IFBJWEkuV2ViR0xSZW5kZXJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtBcnJheS48U2NlbmU+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhY2sgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUcmFuc2l0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lTWFuYWdlcjtcblxuLyoqXG4gKiBAcGFyYW0geyFQSVhJLkRpc3BsYXlPYmplY3R9IHN0YWdlXG4gKiBAcGFyYW0geyFQSVhJLkNhbnZhc1JlbmRlcmVyIHwgIVBJWEkuV2ViR0xSZW5kZXJlcn0gcmVuZGVyZXJcbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oc3RhZ2UsIHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fc3RhZ2UgICAgICAgICA9IHN0YWdlO1xuICAgIHRoaXMuX3JlbmRlcmVyICAgICAgPSByZW5kZXJlcjtcbn07XG5cbi8qKlxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9zdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy50b3AudXBkYXRlKCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFTY2VuZX0gc2NlbmVcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbj19IHRyYW5zaXRpb25cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzY2VuZSwgdHJhbnNpdGlvbikge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25JblByb2dyZXNzKSByZXR1cm47XG5cbiAgICB0aGlzLl90cmFuc2l0aW9uID0gdHJhbnNpdGlvbiB8fCBuZXcgVHJhbnNpdGlvbigpO1xuICAgIGlmICh0aGlzLl90cmFuc2l0aW9uLnJlcXVpcmVzV2ViR0wgJiYgISh0aGlzLl9yZW5kZXJlciBpbnN0YW5jZW9mIFBJWEkuV2ViR0xSZW5kZXJlcikpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiAgICAgICAgICAgID0gdHJhbnNpdGlvbi5mYWxsYmFjaygpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnB1c2ggICAgICAgPSB0cmFuc2l0aW9uLnB1c2g7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucmVwbGFjZSAgICA9IHRyYW5zaXRpb24ucmVwbGFjZTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi53YWl0ICAgICAgID0gdHJhbnNpdGlvbi53YWl0O1xuICAgIH1cbiAgICB0aGlzLl90cmFuc2l0aW9uLmluaXQoKTtcbiAgICB0aGlzLl9zdGFnZS5hZGRDaGlsZCh0aGlzLl90cmFuc2l0aW9uKTtcblxuICAgIHRoaXMuX3RyYW5zaXRpb24uc2lnbmFscy5pbi5hZGRPbmNlKGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgICAgcDMuVGltZXN0ZXAucXVldWVDYWxsKHN3YXAsIFtzY2VuZV0sIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3RyYW5zaXRpb24uc2lnbmFscy5vdXQuYWRkT25jZShmdW5jdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgIHRyYW5zaXRpb24ucGFyZW50LnJlbW92ZUNoaWxkKHRyYW5zaXRpb24pO1xuICAgICAgICB0cmFuc2l0aW9uLmRpc3Bvc2UoKTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbi53YWl0KSB7XG4gICAgICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc2NlbmUuYXBwZWFyLCBudWxsLCBzY2VuZSk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLl90cmFuc2l0aW9uLmluKCk7XG5cbiAgICBmdW5jdGlvbiBzd2FwKHNjZW5lKSB7XG4gICAgICAgIGlmICh0aGlzLnRvcCkge1xuICAgICAgICAgICAgdGhpcy50b3AuaGlkZSgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uLnB1c2gpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3AucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3AuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYW5zaXRpb24ucmVwbGFjZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc3RhY2subGVuZ3RoOyArKyBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSB0aGlzLl9zdGFja1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXAucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnBhcmVudC5yZW1vdmVDaGlsZCh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNjZW5lLmluaXQoKTtcbiAgICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICAgIGlmICghc2NlbmUucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN0YWdlLmFkZENoaWxkQXQoc2NlbmUsIHRoaXMuX3RyYW5zaXRpb24ucGFyZW50LmdldENoaWxkSW5kZXgodGhpcy5fdHJhbnNpdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YWNrLnB1c2goc2NlbmUpO1xuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbi53YWl0KSB7XG4gICAgICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc2NlbmUuYXBwZWFyLCBudWxsLCBzY2VuZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGFjayk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1RyYW5zaXRpb249fSB0cmFuc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcj19IGNvdW50XG4gKi9cblNjZW5lTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24odHJhbnNpdGlvbiwgY291bnQpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcykgcmV0dXJuO1xuXG4gICAgdGhpcy5fdHJhbnNpdGlvbiAgICA9IHRyYW5zaXRpb24gfHwgbmV3IFRyYW5zaXRpb24oKTtcbiAgICBjb3VudCAgICAgICAgICAgICAgID0gTWF0aC5tYXgoMSwgY291bnQpIHx8IDE7XG4gICAgaWYgKHRoaXMuX3RyYW5zaXRpb24ucmVxdWlyZXNXZWJHTCAmJiAhKHRoaXMuX3JlbmRlcmVyIGluc3RhbmNlb2YgUElYSS5XZWJHTFJlbmRlcmVyKSkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uICAgICAgICAgICAgPSB0cmFuc2l0aW9uLmZhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucHVzaCAgICAgICA9IHRyYW5zaXRpb24ucHVzaDtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5yZXBsYWNlICAgID0gdHJhbnNpdGlvbi5yZXBsYWNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLndhaXQgICAgICAgPSB0cmFuc2l0aW9uLndhaXQ7XG4gICAgfVxuICAgIHRoaXMuX3RyYW5zaXRpb24uaW5pdCgpO1xuICAgIHRoaXMuX3N0YWdlLmFkZENoaWxkKHRoaXMuX3RyYW5zaXRpb24pO1xuXG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLmluLmFkZE9uY2UoZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICAgICAgICBwMy5UaW1lc3RlcC5xdWV1ZUNhbGwoc3dhcCwgW2NvdW50XSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5fdHJhbnNpdGlvbi5zaWduYWxzLm91dC5hZGRPbmNlKGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdHJhbnNpdGlvbi5wYXJlbnQucmVtb3ZlQ2hpbGQodHJhbnNpdGlvbik7XG4gICAgICAgIHRyYW5zaXRpb24uZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLndhaXQpIHtcbiAgICAgICAgICAgIHRoaXMudG9wLnNob3coKTtcbiAgICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3RyYW5zaXRpb24uaW4oKTtcblxuICAgIGZ1bmN0aW9uIHN3YXAoY291bnQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgKysgaSkge1xuICAgICAgICAgICAgdGhpcy50b3AuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy50b3AucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMudG9wKTtcbiAgICAgICAgICAgIHRoaXMudG9wLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjZW5lID0gdGhpcy50b3A7XG4gICAgICAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgICAgICBpZiAoIXNjZW5lLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5zdGFnZS5hZGRDaGlsZEF0KHNjZW5lLCB0aGlzLl90cmFuc2l0aW9uLnBhcmVudC5nZXRDaGlsZEluZGV4KHRoaXMuX3RyYW5zaXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbi53YWl0KSB7XG4gICAgICAgICAgICBzY2VuZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGFjayk7XG4gICAgfVxufTtcblxuLyoqXG4gKi9cblNjZW5lTWFuYWdlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbn07XG5cbi8qKlxuICovXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2VuZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3N0YWNrLmxlbmd0aDsgKysgaSkge1xuICAgICAgICBzY2VuZSA9IHRoaXMuX3N0YWNrW2ldO1xuICAgICAgICBzY2VuZS5yZXNpemUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5yZXNpemUoKTtcbiAgICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmVNYW5hZ2VyLnByb3RvdHlwZSwgXCJzdGFnZVwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1BJWEkuRGlzcGxheU9iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2U7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZU1hbmFnZXIucHJvdG90eXBlLCBcInRvcFwiLCB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1NjZW5lfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFjay5sZW5ndGggPyB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXSA6IG51bGw7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZU1hbmFnZXIucHJvdG90eXBlLCBcInRyYW5zaXRpb25JblByb2dyZXNzXCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3RyYW5zaXRpb24gIT0gbnVsbCA/IHRydWUgOiBmYWxzZSk7XG4gICAgfVxufSk7XG4iLCIvKipcbiAqICBTY29yZVNjZW5lXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDcvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIENvbW1vbiAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xudmFyIEJ1dHRvbiAgICAgID0gcmVxdWlyZShcIi4vQnV0dG9uXCIpO1xudmFyIE11dGVCdXR0b24gID0gcmVxdWlyZShcIi4vTXV0ZUJ1dHRvblwiKTtcbnZhciBTY2VuZSAgICAgICA9IHJlcXVpcmUoXCIuL1NjZW5lXCIpO1xudmFyIFRyYW5zaXRpb24gID0gcmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2NvcmVTY2VuZSgpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vdmVybGF5ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhbmVsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jlc3QgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BsYXlCdXR0b24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hvbWVCdXR0b24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NvdW5kQnV0dG9uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZyZWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1BJWEkuU3ByaXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGFwaG5lID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlbG1hID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NoYWdneSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zY29vYnkgPSBudWxsO1xuXG4gICAgU2NlbmUuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgICAgID0gU2NvcmVTY2VuZTtcblNjb3JlU2NlbmUucHJvdG90eXBlICAgICAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShTY2VuZS5wcm90b3R5cGUpO1xuU2NvcmVTY2VuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgICAgPSBTY29yZVNjZW5lO1xuXG5TY29yZVNjZW5lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fb3ZlcmxheSA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9vdmVybGF5KTtcblxuICAgIHRoaXMuX3BhbmVsICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwicG9wX3VwXCIpKTtcbiAgICB0aGlzLl9wYW5lbC54ICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuICAgIHRoaXMuX3BhbmVsLnkgICAgICAgPSBDb21tb24uU1RBR0VfSEVJR0hUICogMC41ICsgNDAuMDtcbiAgICB0aGlzLl9wYW5lbC5hbmNob3IgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcGFuZWwpO1xuXG4gICAgdmFyIGF0bGFzICAgICAgICAgICAgICAgPSBDb21tb24uYXNzZXRNYW5hZ2VyLmdldEZvbnRBdGxhcyhcInlvdW5nZnJhbmtlbnN0ZWluXzc0X29yYW5nZVwiKTtcbiAgICB0aGlzLl9wYW5lbC50ZXh0MSAgICAgICA9IG5ldyBwMy5CaXRtYXBUZXh0KENvbW1vbi5jb3B5W1wiZ2FtZW92ZXJcIl1bQ29tbW9uLmxhbmd1YWdlXSwgYXRsYXMsIHAzLkJpdG1hcFRleHQuQUxJR05fQ0VOVEVSKTtcbiAgICB0aGlzLl9wYW5lbC50ZXh0MS54ICAgICA9IDAuMDtcbiAgICB0aGlzLl9wYW5lbC50ZXh0MS55ICAgICA9IC0yMDAuMDtcbiAgICB0aGlzLl9wYW5lbC5hZGRDaGlsZCh0aGlzLl9wYW5lbC50ZXh0MSk7XG4gICAgY29uc29sZS5sb2codGhpcy5fcGFuZWwudGV4dDEudGV4dCk7XG5cbiAgICBhdGxhcyAgICAgICAgICAgICAgICAgICA9IENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0Rm9udEF0bGFzKFwiaGVsdmV0aWNhbF80MF9jb25kZW5zZWRib2xkX2dyZWVuXCIpO1xuICAgIHRoaXMuX3BhbmVsLnRleHQyICAgICAgID0gbmV3IHAzLkJpdG1hcFRleHQoQ29tbW9uLmNvcHlbXCJzY29yZVwiXVtDb21tb24ubGFuZ3VhZ2VdLCBhdGxhcywgcDMuQml0bWFwVGV4dC5BTElHTl9DRU5URVIpO1xuICAgIHRoaXMuX3BhbmVsLnRleHQyLnRleHQgID0gdGhpcy5fcGFuZWwudGV4dDIudGV4dC5yZXBsYWNlKFwiW1NDT1JFXVwiLCBDb21tb24ubW9uc3RlckNvdW50LnRvU3RyaW5nKCkpO1xuICAgIHRoaXMuX3BhbmVsLnRleHQyLnggICAgID0gMC4wO1xuICAgIHRoaXMuX3BhbmVsLnRleHQyLnkgICAgID0gLTEwMC4wO1xuICAgIHRoaXMuX3BhbmVsLmFkZENoaWxkKHRoaXMuX3BhbmVsLnRleHQyKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9wYW5lbC50ZXh0Mi50ZXh0KTtcblxuICAgIHRoaXMuX2Jlc3QgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYmVzdF9zY29yZVwiKSk7XG4gICAgdGhpcy5fYmVzdC54ICAgICAgICA9IHRoaXMuX3BhbmVsLng7XG4gICAgdGhpcy5fYmVzdC55ICAgICAgICA9IHRoaXMuX3BhbmVsLnkgLTI5NC4wO1xuICAgIHRoaXMuX2Jlc3QuYW5jaG9yICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fYmVzdC52aXNpYmxlICA9IGZhbHNlO1xuICAgIHRoaXMuYWRkQ2hpbGRBdCh0aGlzLl9iZXN0LCB0aGlzLl9wYW5lbC5wYXJlbnQuZ2V0Q2hpbGRJbmRleCh0aGlzLl9wYW5lbCkpO1xuXG4gICAgYXRsYXMgICAgICAgICAgICAgICAgICAgPSBDb21tb24uYXNzZXRNYW5hZ2VyLmdldEZvbnRBdGxhcyhcInlvdW5nZnJhbmtlbnN0ZWluXzQ2X29yYW5nZVwiKTtcbiAgICB0aGlzLl9iZXN0LnRleHQgICAgICAgICA9IG5ldyBwMy5CaXRtYXBUZXh0KENvbW1vbi5jb3B5W1wiYmVzdFwiXVtDb21tb24ubGFuZ3VhZ2VdLCBhdGxhcywgcDMuQml0bWFwVGV4dC5BTElHTl9DRU5URVIpO1xuICAgIHRoaXMuX2Jlc3QudGV4dC50ZXh0ICAgID0gdGhpcy5fYmVzdC50ZXh0LnRleHQucmVwbGFjZShcIltTQ09SRV1cIiwgQ29tbW9uLnNhdmVTY29yZSgpKTtcbiAgICB0aGlzLl9iZXN0LnRleHQueCAgICAgICA9IDAuMDtcbiAgICB0aGlzLl9iZXN0LnRleHQueSAgICAgICA9IC0xNi4wO1xuICAgIHRoaXMuX2Jlc3QuYWRkQ2hpbGQodGhpcy5fYmVzdC50ZXh0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9iZXN0LnRleHQudGV4dCk7XG5cbiAgICB0aGlzLl9wbGF5QnV0dG9uID0gbmV3IEJ1dHRvbihcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3BsYXlfZGVmXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcGxheV9vdmVyXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcGxheV9wcmVzc2VkXCIpXG4gICAgKTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnggPSA2LjA7XG4gICAgdGhpcy5fcGxheUJ1dHRvbi55ID0gMTgwLjA7XG4gICAgdGhpcy5fcGxheUJ1dHRvbi5pbml0KCk7XG4gICAgdGhpcy5fcGxheUJ1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uUGxheUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5vbkJ1dHRvblJvbGxPdmVyLCB0aGlzKTtcbiAgICB0aGlzLl9wYW5lbC5hZGRDaGlsZCh0aGlzLl9wbGF5QnV0dG9uKTtcblxuICAgIHRoaXMuX2hvbWVCdXR0b24gPSBuZXcgQnV0dG9uKFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfaG9tZV9kZWZcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9ob21lX292ZXJcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9ob21lX3ByZXNzZWRcIilcbiAgICApO1xuICAgIHRoaXMuX2hvbWVCdXR0b24ueSA9IDEwMC4wO1xuICAgIHRoaXMuX2hvbWVCdXR0b24uYW5pbWF0ZSA9IHRydWU7XG4gICAgdGhpcy5faG9tZUJ1dHRvbi5pbml0KCk7XG4gICAgdGhpcy5faG9tZUJ1dHRvbi5zaWduYWxzLmNsaWNrLmFkZCh0aGlzLm9uSG9tZUJ1dHRvbkNsaWNrLCB0aGlzKTtcbiAgICB0aGlzLl9ob21lQnV0dG9uLnNpZ25hbHMub3Zlci5hZGQodGhpcy5vbkJ1dHRvblJvbGxPdmVyLCB0aGlzKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2hvbWVCdXR0b24pO1xuXG4gICAgdGhpcy5fc291bmRCdXR0b24gPSBuZXcgTXV0ZUJ1dHRvbihcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX2RlZlwiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29mZl9kZWZcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vbl9vdmVyXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb2ZmX292ZXJcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vbl9wcmVzc2VkXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb2ZmX3ByZXNzZWRcIilcbiAgICApO1xuICAgIHRoaXMuX3NvdW5kQnV0dG9uLnkgPSAxMDAuMDtcbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5hbmltYXRlID0gdHJ1ZTtcbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5pbml0KCk7XG4gICAgdGhpcy5fc291bmRCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLm9uQnV0dG9uUm9sbE92ZXIsIHRoaXMpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc291bmRCdXR0b24pO1xuXG4gICAgdGhpcy5fZnJlZCAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJmaW5hbHNjb3JlX2dhbmdfZnJlZFwiKSk7XG4gICAgdGhpcy5fZnJlZC54ICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSArIDM4MC4wO1xuICAgIHRoaXMuX2ZyZWQueSAgICAgICAgPSBwMy5DYW52YXMuaGVpZ2h0ICsgMTIwLjA7XG4gICAgdGhpcy5fZnJlZC5hbmNob3IgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMS4wKTtcbiAgICB0aGlzLl9mcmVkLnZpc2libGUgID0gZmFsc2U7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9mcmVkKTtcblxuICAgIHRoaXMuX2RhcGhuZSAgICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImZpbmFsc2NvcmVfZ2FuZ19kYXBobmVcIikpO1xuICAgIHRoaXMuX2RhcGhuZS54ICAgICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41ICsgMjQwLjA7XG4gICAgdGhpcy5fZGFwaG5lLnkgICAgICAgICAgPSBwMy5DYW52YXMuaGVpZ2h0ICsgMTIwLjA7XG4gICAgdGhpcy5fZGFwaG5lLmFuY2hvciAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEuMCk7XG4gICAgdGhpcy5fZGFwaG5lLnZpc2libGUgICAgPSBmYWxzZTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2RhcGhuZSk7XG5cbiAgICB0aGlzLl9zaGFnZ3kgICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJmaW5hbHNjb3JlX2dhbmdfc2hhZ2d5XCIpKTtcbiAgICB0aGlzLl9zaGFnZ3kueCAgICAgICAgICA9IENvbW1vbi5TVEFHRV9XSURUSCAqIDAuNSAtIDQwMC4wO1xuICAgIHRoaXMuX3NoYWdneS55ICAgICAgICAgID0gcDMuQ2FudmFzLmhlaWdodCArIDEyMC4wO1xuICAgIHRoaXMuX3NoYWdneS5hbmNob3IgICAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAxLjApO1xuICAgIHRoaXMuX3NoYWdneS52aXNpYmxlICAgID0gZmFsc2U7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9zaGFnZ3kpO1xuXG4gICAgdGhpcy5fdmVsbWEgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJmaW5hbHNjb3JlX2dhbmdfdmVsbWFcIikpO1xuICAgIHRoaXMuX3ZlbG1hLnggICAgICAgPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSAzMjAuMDtcbiAgICB0aGlzLl92ZWxtYS55ICAgICAgID0gcDMuQ2FudmFzLmhlaWdodCArIDEyMC4wO1xuICAgIHRoaXMuX3ZlbG1hLmFuY2hvciAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEuMCk7XG4gICAgdGhpcy5fdmVsbWEudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fdmVsbWEpO1xuXG4gICAgdGhpcy5fc2Nvb2J5ICAgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiZmluYWxzY29yZV9nYW5nX3Njb29ieVwiKSk7XG4gICAgdGhpcy5fc2Nvb2J5LnggICAgICAgICAgPSBDb21tb24uU1RBR0VfV0lEVEggKiAwLjUgLSAxNDAuMDtcbiAgICB0aGlzLl9zY29vYnkueSAgICAgICAgICA9IHAzLkNhbnZhcy5oZWlnaHQgKyAxMjAuMDtcbiAgICB0aGlzLl9zY29vYnkuYW5jaG9yICAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMS4wKTtcbiAgICB0aGlzLl9zY29vYnkudmlzaWJsZSAgICA9IGZhbHNlO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fc2Nvb2J5KTtcbn07XG5cblNjb3JlU2NlbmUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9ob21lQnV0dG9uLmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5kaXNwb3NlKCk7XG5cbiAgICBTY2VuZS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xufTtcblxuU2NvcmVTY2VuZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy54ID0gKHAzLkNhbnZhcy53aWR0aCAtIENvbW1vbi5TVEFHRV9XSURUSCkgKiAwLjU7XG5cbiAgICB0aGlzLl9vdmVybGF5LmNsZWFyKCk7XG4gICAgdGhpcy5fb3ZlcmxheS5iZWdpbkZpbGwoMHgwLCAwLjUpO1xuICAgIHRoaXMuX292ZXJsYXkuZHJhd1JlY3QoXG4gICAgICAgIChDb21tb24uU1RBR0VfV0lEVEggLSBwMy5DYW52YXMud2lkdGgpICogMC41LFxuICAgICAgICAwLjAsXG4gICAgICAgIHAzLkNhbnZhcy53aWR0aCxcbiAgICAgICAgcDMuQ2FudmFzLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5fb3ZlcmxheS5lbmRGaWxsKCk7XG5cbiAgICB0aGlzLl9ob21lQnV0dG9uLnggPSAoQ29tbW9uLlNUQUdFX1dJRFRIIC0gcDMuQ2FudmFzLndpZHRoKSAqIDAuNSArIDEwMC4wO1xuICAgIHRoaXMuX3NvdW5kQnV0dG9uLnggPSAoQ29tbW9uLlNUQUdFX1dJRFRIICsgcDMuQ2FudmFzLndpZHRoKSAqIDAuNSAtIDEwMC4wO1xufTtcblxuU2NvcmVTY2VuZS5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TY29yZVNjZW5lLnByb3RvdHlwZS5hbmltYXRlSW4gPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICB2YXIgdGltZWxpbmUgICAgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB2YXIgZGVsYXkgICAgICAgPSAwLjE7XG5cbiAgICB0aGlzLl9vdmVybGF5LmFscGhhID0gMC4wO1xuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl9vdmVybGF5LCAwLjIsIHtcbiAgICAgICAgYWxwaGE6IDEuMCxcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxuICAgIH0pKTtcblxuICAgIHRoaXMuX3BhbmVsLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMC4wLCAwLjApO1xuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl9wYW5lbC5zY2FsZSwgMC40LCB7XG4gICAgICAgIHg6IDEuMCxcbiAgICAgICAgeTogMS4wLFxuICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgIGVhc2VQYXJhbXM6IFsxLjBdLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jlc3QueSA9IHRoaXMuX3BhbmVsLnkgLSAyOTQuMCArIHRoaXMuX2Jlc3QuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fYmVzdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2Jlc3QsIDAuMywge1xuICAgICAgICAgICAgICAgIHk6IHRoaXMuX3BhbmVsLnkgLSAyOTQuMCxcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgfSkpO1xuXG4gICAgdGhpcy5faG9tZUJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMC4wKTtcbiAgICB0aW1lbGluZS5pbnNlcnQoVHdlZW5NYXgudG8odGhpcy5faG9tZUJ1dHRvbi5zY2FsZSwgMC40LCB7XG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgeDogMS4wLFxuICAgICAgICB5OiAxLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzIuMF1cbiAgICB9KSk7XG5cbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMC4wKTtcbiAgICB0aW1lbGluZS5pbnNlcnQoVHdlZW5NYXgudG8odGhpcy5fc291bmRCdXR0b24uc2NhbGUsIDAuNCwge1xuICAgICAgICBkZWxheTogZGVsYXkgKiAyLFxuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICBlYXNlUGFyYW1zOiBbMi4wXVxuICAgIH0pKTtcblxuICAgIHRpbWVsaW5lLnZhcnMub25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG8gICAgICAgICAgICAgID0gdGhpcy5fZnJlZC55O1xuICAgICAgICB0aGlzLl9mcmVkLnkgICAgICAgID0gcDMuQ2FudmFzLmhlaWdodCArIHRoaXMuX2ZyZWQueTtcbiAgICAgICAgdGhpcy5fZnJlZC52aXNpYmxlICA9IHRydWU7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuX2ZyZWQsIDAuNCwge1xuICAgICAgICAgICAgeTogdG8sXG4gICAgICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgICAgICBlYXNlUGFyYW1zOiBbMS4wXVxuICAgICAgICB9KTtcblxuICAgICAgICB0byAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuX2RhcGhuZS55O1xuICAgICAgICB0aGlzLl9kYXBobmUueSAgICAgICAgICA9IHAzLkNhbnZhcy5oZWlnaHQgKyB0aGlzLl9kYXBobmUueTtcbiAgICAgICAgdGhpcy5fZGFwaG5lLnZpc2libGUgICAgPSB0cnVlO1xuICAgICAgICBUd2Vlbk1heC50byh0aGlzLl9kYXBobmUsIDAuNCwge1xuICAgICAgICAgICAgZGVsYXk6IDAuMixcbiAgICAgICAgICAgIHk6IHRvLFxuICAgICAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICAgICAgZWFzZVBhcmFtczogWzEuMF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG8gICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLl92ZWxtYS55O1xuICAgICAgICB0aGlzLl92ZWxtYS55ICAgICAgICAgICA9IHAzLkNhbnZhcy5oZWlnaHQgKyB0aGlzLl92ZWxtYS55O1xuICAgICAgICB0aGlzLl92ZWxtYS52aXNpYmxlICAgICA9IHRydWU7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuX3ZlbG1hLCAwLjQsIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLjEsXG4gICAgICAgICAgICB5OiB0byxcbiAgICAgICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgICAgIGVhc2VQYXJhbXM6IFsxLjBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5fc2hhZ2d5Lnk7XG4gICAgICAgIHRoaXMuX3NoYWdneS55ICAgICAgICAgID0gcDMuQ2FudmFzLmhlaWdodCArIHRoaXMuX3NoYWdneS55O1xuICAgICAgICB0aGlzLl9zaGFnZ3kudmlzaWJsZSAgICA9IHRydWU7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuX3NoYWdneSwgMC40LCB7XG4gICAgICAgICAgICBkZWxheTogMC4zLFxuICAgICAgICAgICAgeTogdG8sXG4gICAgICAgICAgICBlYXNlOiBCYWNrLmVhc2VPdXQsXG4gICAgICAgICAgICBlYXNlUGFyYW1zOiBbMS4wXVxuICAgICAgICB9KTtcblxuICAgICAgICB0byAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMuX3Njb29ieS55O1xuICAgICAgICB0aGlzLl9zY29vYnkueSAgICAgICAgICA9IHAzLkNhbnZhcy5oZWlnaHQgKyB0aGlzLl9zY29vYnkueTtcbiAgICAgICAgdGhpcy5fc2Nvb2J5LnZpc2libGUgICAgPSB0cnVlO1xuICAgICAgICBUd2Vlbk1heC50byh0aGlzLl9zY29vYnksIDAuNCwge1xuICAgICAgICAgICAgZGVsYXk6IDAuNCxcbiAgICAgICAgICAgIHk6IHRvLFxuICAgICAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICAgICAgZWFzZVBhcmFtczogWzEuMF1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0aW1lbGluZS52YXJzLm9uQ29tcGxldGVTY29wZSA9IHRoaXM7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IUJ1dHRvbn0gYnV0dG9uXG4gKi9cblNjb3JlU2NlbmUucHJvdG90eXBlLm9uUGxheUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgdGhpcy5zaWduYWxzLm5leHQuZGlzcGF0Y2goKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3ByZXNzXCIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFCdXR0b259IGJ1dHRvblxuICovXG5TY29yZVNjZW5lLnByb3RvdHlwZS5vbkhvbWVCdXR0b25DbGljayA9IGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIHRoaXMuc2lnbmFscy5ob21lLmRpc3BhdGNoKCk7XG5cbiAgICBDb21tb24uYXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChcInNmeF9wcmVzc1wiKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshQnV0dG9ufSBidXR0b25cbiAqL1xuU2NvcmVTY2VuZS5wcm90b3R5cGUub25CdXR0b25Sb2xsT3ZlciA9IGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3JvbGxvdmVyXCIpO1xufTtcbiIsIi8qKlxuICogIFNwbGFzaFNjZW5lXG4gKlxuICogIENyZWF0ZWQgYnkgTGVnbWFuIG9uIDQvMDkvMjAxNS5cbiAqXG4gKi9cblxudmFyIENvbW1vbiAgICAgID0gcmVxdWlyZShcIi4vQ29tbW9uXCIpO1xudmFyIEJ1dHRvbiAgICAgID0gcmVxdWlyZShcIi4vQnV0dG9uXCIpO1xudmFyIE11dGVCdXR0b24gID0gcmVxdWlyZShcIi4vTXV0ZUJ1dHRvblwiKTtcbnZhciBTY2VuZSAgICAgICA9IHJlcXVpcmUoXCIuL1NjZW5lXCIpO1xudmFyIFRyYW5zaXRpb24gID0gcmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3BsYXNoU2NlbmUoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BsYXlCdXR0b24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge011dGVCdXR0b259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zb3VuZEJ1dHRvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2dvID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQSVhJLlNwcml0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZhbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sZWZ0TWlzdCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UElYSS5TcHJpdGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yaWdodE1pc3QgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FycmF5LjxUd2Vlbk1heD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90d2VlbnMgPSBbXTtcblxuICAgIFNjZW5lLmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyAgICAgICAgICAgICAgICAgICAgICA9IFNwbGFzaFNjZW5lO1xuU3BsYXNoU2NlbmUucHJvdG90eXBlICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFNjZW5lLnByb3RvdHlwZSk7XG5TcGxhc2hTY2VuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgICA9IFNwbGFzaFNjZW5lO1xuXG5TcGxhc2hTY2VuZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiZyA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJ1aV9zcGxhc2hcIikpO1xuICAgIHRoaXMuYWRkQ2hpbGQoYmcpO1xuXG4gICAgdGhpcy5fdmFuICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJ1aV9zcGxhc2hfdmFuXCIpKTtcbiAgICB0aGlzLl92YW4ueCAgICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41IC0gMjAwLjA7XG4gICAgdGhpcy5fdmFuLnkgICAgICAgICA9IDc2OC4wO1xuICAgIHRoaXMuX3Zhbi5hbmNob3IgICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDEuMCk7XG4gICAgdGhpcy5fdmFuLnZpc2libGUgICA9IGZhbHNlO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fdmFuKTtcblxuICAgIHRoaXMuX3Zhbi5saWdodHMgICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJ1aV9zcGxhc2hfdmFuX2xpZ2h0c1wiKSk7XG4gICAgdGhpcy5fdmFuLmxpZ2h0cy54ICAgICAgICAgID0gNDE2LjA7XG4gICAgdGhpcy5fdmFuLmxpZ2h0cy55ICAgICAgICAgID0gLTEwMC4wO1xuICAgIHRoaXMuX3Zhbi5saWdodHMuYW5jaG9yICAgICA9IG5ldyBQSVhJLlBvaW50KDAuNSwgMC41KTtcbiAgICB0aGlzLl92YW4uYWRkQ2hpbGQodGhpcy5fdmFuLmxpZ2h0cyk7XG5cbiAgICB0aGlzLl9sZWZ0TWlzdCAgICAgICAgICAgICAgPSBuZXcgUElYSS5TcHJpdGUoQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwidWlfc3BsYXNoX21pc3RfbGVmdFwiKSk7XG4gICAgdGhpcy5fbGVmdE1pc3QueCAgICAgICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuICAgIHRoaXMuX2xlZnRNaXN0LnkgICAgICAgICAgICA9IHAzLkNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5fbGVmdE1pc3QuYW5jaG9yLnggICAgID0gMS4wO1xuICAgIHRoaXMuX2xlZnRNaXN0LmFuY2hvci55ICAgICA9IDEuMDtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xlZnRNaXN0KTtcblxuICAgIHRoaXMuX3JpZ2h0TWlzdCAgICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJ1aV9zcGxhc2hfbWlzdF9yaWdodFwiKSk7XG4gICAgdGhpcy5fcmlnaHRNaXN0LnggICAgICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41O1xuICAgIHRoaXMuX3JpZ2h0TWlzdC55ICAgICAgICAgICA9IHAzLkNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5fcmlnaHRNaXN0LmFuY2hvci55ICAgID0gMS4wO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcmlnaHRNaXN0KTtcblxuICAgIHRoaXMuX3BsYXlCdXR0b24gPSBuZXcgQnV0dG9uKFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfcGxheV9kZWZcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9wbGF5X292ZXJcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9wbGF5X3ByZXNzZWRcIilcbiAgICApO1xuICAgIC8vdGhpcy5fcGxheUJ1dHRvbi54ICAgICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41ICsgMjgwLjA7XG4gICAgLy90aGlzLl9wbGF5QnV0dG9uLnkgICAgICAgICAgPSA1NjAuMDtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnkgICAgICAgICAgPSBwMy5DYW52YXMuaGVpZ2h0IC0gMTQwLjA7XG4gICAgdGhpcy5fcGxheUJ1dHRvbi5hbmltYXRlICAgID0gdHJ1ZTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnZpc2libGUgICAgPSBmYWxzZTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLmluaXQoKTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnNpZ25hbHMuY2xpY2suYWRkKHRoaXMub25QbGF5QnV0dG9uQ2xpY2ssIHRoaXMpO1xuICAgIHRoaXMuX3BsYXlCdXR0b24uc2lnbmFscy5vdmVyLmFkZCh0aGlzLm9uQnV0dG9uUm9sbE92ZXIsIHRoaXMpO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fcGxheUJ1dHRvbik7XG5cbiAgICB0aGlzLl9zb3VuZEJ1dHRvbiA9IG5ldyBNdXRlQnV0dG9uKFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb25fZGVmXCIpLFxuICAgICAgICBDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJidXRfc291bmRfb2ZmX2RlZlwiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX292ZXJcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfb3ZlclwiKSxcbiAgICAgICAgQ29tbW9uLmFzc2V0TWFuYWdlci5nZXRUZXh0dXJlKFwiYnV0X3NvdW5kX29uX3ByZXNzZWRcIiksXG4gICAgICAgIENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcImJ1dF9zb3VuZF9vZmZfcHJlc3NlZFwiKVxuICAgICk7XG4gICAgdGhpcy5fc291bmRCdXR0b24ueSA9IDEwMC4wO1xuICAgIHRoaXMuX3NvdW5kQnV0dG9uLmFuaW1hdGUgPSB0cnVlO1xuICAgIHRoaXMuX3NvdW5kQnV0dG9uLmluaXQoKTtcbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5zaWduYWxzLm92ZXIuYWRkKHRoaXMub25CdXR0b25Sb2xsT3ZlciwgdGhpcyk7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9zb3VuZEJ1dHRvbik7XG5cbiAgICB0aGlzLl9sb2dvICAgICAgICAgID0gbmV3IFBJWEkuU3ByaXRlKENvbW1vbi5hc3NldE1hbmFnZXIuZ2V0VGV4dHVyZShcInVpX3NwbGFzaF9sb2dvXCIpKTtcbiAgICB0aGlzLl9sb2dvLnggICAgICAgID0gQ29tbW9uLlNUQUdFX1dJRFRIICogMC41IC0gMTgwLjA7XG4gICAgdGhpcy5fbG9nby55ICAgICAgICA9IDE0MC4wO1xuICAgIHRoaXMuX2xvZ28uYW5jaG9yICAgPSBuZXcgUElYSS5Qb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fbG9nby52aXNpYmxlICA9IGZhbHNlO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbG9nbyk7XG5cbiAgICB0aGlzLl90aXRsZSAgICAgICAgICAgICA9IG5ldyBQSVhJLlNwcml0ZShDb21tb24uYXNzZXRNYW5hZ2VyLmdldFRleHR1cmUoXCJ1aV9zcGxhc2hfd29vZFwiKSk7XG4gICAgdGhpcy5fdGl0bGUueCAgICAgICAgICAgPSB0aGlzLl9sb2dvLnggKyAzMDAuMDtcbiAgICB0aGlzLl90aXRsZS55ICAgICAgICAgICA9IHRoaXMuX2xvZ28ueSArIDE2MC4wO1xuICAgIHRoaXMuX3RpdGxlLmFuY2hvciAgICAgID0gbmV3IFBJWEkuUG9pbnQoMC41LCAwLjUpO1xuICAgIHRoaXMuX3RpdGxlLnZpc2libGUgICAgID0gZmFsc2U7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLl90aXRsZSk7XG5cbiAgICB2YXIgYXRsYXMgPSBDb21tb24uYXNzZXRNYW5hZ2VyLmdldEZvbnRBdGxhcyhcInlvdW5nZnJhbmtlbnN0ZWluXzYwX3RpdGxlXCIpO1xuICAgIHRoaXMuX3RpdGxlLnRleHQgICAgICAgICA9IG5ldyBwMy5CaXRtYXBUZXh0KENvbW1vbi5jb3B5W1widGl0bGVcIl1bQ29tbW9uLmxhbmd1YWdlXSwgYXRsYXMsIHAzLkJpdG1hcFRleHQuQUxJR05fQ0VOVEVSKTtcbiAgICB0aGlzLl90aXRsZS50ZXh0LnggICAgICAgPSA0LjA7XG4gICAgdGhpcy5fdGl0bGUudGV4dC55ICAgICAgID0gLTMyLjA7XG4gICAgdGhpcy5fdGl0bGUuYWRkQ2hpbGQodGhpcy5fdGl0bGUudGV4dCk7XG59O1xuXG5TcGxhc2hTY2VuZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BsYXlCdXR0b24uZGlzcG9zZSgpO1xuXG4gICAgdmFyIHR3ZWVuO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fdHdlZW5zLmxlbmd0aDsgKysgaSkge1xuICAgICAgICB0d2VlbiA9IHRoaXMuX3R3ZWVuc1tpXTtcbiAgICAgICAgdHdlZW4ua2lsbCgpO1xuICAgIH1cbiAgICB0aGlzLl90d2VlbnMubGVuZ3RoID0gMDtcblxuICAgIFNjZW5lLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG59O1xuXG5TcGxhc2hTY2VuZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy54ICAgICAgICAgICAgICAgICAgPSAocDMuQ2FudmFzLndpZHRoIC0gQ29tbW9uLlNUQUdFX1dJRFRIKSAqIDAuNTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnggICAgICA9IChDb21tb24uU1RBR0VfV0lEVEggKyBwMy5DYW52YXMud2lkdGgpICogMC41IC0gMTQwLjA7XG4gICAgdGhpcy5fc291bmRCdXR0b24ueCAgICAgPSAoQ29tbW9uLlNUQUdFX1dJRFRIICsgcDMuQ2FudmFzLndpZHRoKSAqIDAuNSAtIDEwMC4wO1xuXG59O1xuXG5TcGxhc2hTY2VuZS5wcm90b3R5cGUuYXBwZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRlSW4oKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbj19IGNhbGxiYWNrXG4gKiBAcGFyYW0geyo9fSBzY29wZVxuICovXG5TcGxhc2hTY2VuZS5wcm90b3R5cGUuYW5pbWF0ZUluID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgdmFyIHRpbWVsaW5lICAgICAgICAgICAgICAgICAgICA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRpbWVsaW5lLnZhcnMub25Db21wbGV0ZSAgICAgICAgPSBjYWxsYmFjaztcbiAgICB0aW1lbGluZS52YXJzLm9uQ29tcGxldGVTY29wZSAgID0gc2NvcGU7XG4gICAgdGhpcy5fdHdlZW5zLnB1c2godGltZWxpbmUpO1xuXG4gICAgLy8gaW5pdGlhbCB2YW4gZmFkZSBpblxuICAgIHRoaXMuX3Zhbi5hbHBoYSAgICAgPSAwLjE7XG4gICAgdGhpcy5fdmFuLnZpc2libGUgICA9IHRydWU7XG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMuX3ZhbiwgMC40LCB7XG4gICAgICAgIGRlbGF5OiAwLjIsXG4gICAgICAgIGFscGhhOiAxLjAsXG4gICAgICAgIGVhc2U6IEVhc2UuZWFzZUluT3V0XG4gICAgfSkpO1xuXG4gICAgLy8gdmFuIGxlZnQgdG8gcmlnaHRcbiAgICB2YXIgbGFzdCAgICAgICAgICAgICAgICA9IHRoaXMuX3Zhbi5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIHRoaXMuX3Zhbi5wb3NpdGlvbi54ICAgIC09IDMwMC4wO1xuICAgIHRoaXMuX3Zhbi5wb3NpdGlvbi55ICAgICs9IDQwLjA7XG4gICAgdGhpcy5fdmFuLnRpbnQgICAgICAgICAgPSAweDI3MUI0MjtcbiAgICB0aW1lbGluZS5pbnNlcnQoVHdlZW5NYXgudG8odGhpcy5fdmFuLCAxLjQsIHtcbiAgICAgICAgeDogbGFzdC54LFxuICAgICAgICB5OiBsYXN0LnksXG4gICAgICAgIGVhc2U6IEVhc2UuZWFzZUluXG4gICAgfSkpO1xuXG4gICAgLy8gdmFuIHNjYWxlIGluXG4gICAgdGhpcy5fdmFuLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoMC42LCAwLjYpO1xuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl92YW4uc2NhbGUsIDEuNCwge1xuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogRWFzZS5lYXNlSW5cbiAgICB9KSk7XG5cbiAgICAvLyB2YW4gdGludCBlZmZlY3RcbiAgICB0aGlzLnZhblRpbnRBbW91bnQgPSAwLjA7XG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMsIDAuOCwge1xuICAgICAgICBkZWxheTogMC4xLFxuICAgICAgICB2YW5UaW50QW1vdW50OiAxLjAsXG4gICAgICAgIGVhc2U6IFN0cm9uZy5lYXNlSW5cbiAgICB9KSk7XG5cbiAgICAvLyBsZWZ0IG1pc3Qgc3dvb3NoXG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMuX2xlZnRNaXN0LCAzLjYsIHtcbiAgICAgICAgeDogdGhpcy5fbGVmdE1pc3QueCAtIDMyMC4wLFxuICAgICAgICBlYXNlOiBTdHJvbmcuZWFzZU91dFxuICAgIH0pKTtcblxuICAgIC8vIHJpZ2h0IG1pc3Qgc3dvb3NoXG4gICAgdGltZWxpbmUuaW5zZXJ0KFR3ZWVuTWF4LnRvKHRoaXMuX3JpZ2h0TWlzdCwgMy42LCB7XG4gICAgICAgIHg6IHRoaXMuX3JpZ2h0TWlzdC54ICsgMzIwLjAsXG4gICAgICAgIGVhc2U6IFN0cm9uZy5lYXNlT3V0XG4gICAgfSkpO1xuXG4gICAgLy8gbG9nbyBwb3BcbiAgICB0aGlzLl9sb2dvLnNjYWxlICAgID0gbmV3IFBJWEkuUG9pbnQoMC4wLCAwLjApO1xuICAgIHRoaXMuX2xvZ28udmlzaWJsZSAgPSB0cnVlO1xuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl9sb2dvLnNjYWxlLCAwLjQsIHtcbiAgICAgICAgZGVsYXk6IDAuOCxcbiAgICAgICAgeDogMS4wLFxuICAgICAgICB5OiAxLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzQuMF0sXG4gICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ29tbW9uLmF1ZGlvTWFuYWdlci5wbGF5U291bmQoXCJzZnhfZ2hvdWw2XCIpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBmbG9hdCA9IDE0LjA7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLl9sb2dvLCAxLjAsIHtcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9sb2dvLnkgKyBmbG9hdCAqIDAuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZU91dCxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6IC0xfSk7XG4gICAgICAgICAgICAgICAgICAgIHRsLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl9sb2dvLCAyLjAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2xvZ28ueSAtIGZsb2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VJbk91dFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHRsLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl9sb2dvLCAyLjAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2xvZ28ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBDb21tb24uYW5pbWF0b3IuYWRkKHRsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHdlZW5zLnB1c2godGwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZVNjb3BlOiB0aGlzXG4gICAgfSkpO1xuXG4gICAgLy8gdGl0bGUgcG9wXG4gICAgdGhpcy5fdGl0bGUuc2NhbGUgICAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdGhpcy5fdGl0bGUudmlzaWJsZSAgICAgPSB0cnVlO1xuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl90aXRsZS5zY2FsZSwgMC41LCB7XG4gICAgICAgIGRlbGF5OiAwLjk0LFxuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICBlYXNlUGFyYW1zOiBbMi4wXSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZmxvYXQgPSAxMC4wO1xuICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcy5fdGl0bGUsIDEuMCwge1xuICAgICAgICAgICAgICAgIHk6IHRoaXMuX3RpdGxlLnkgLSBmbG9hdCAqIDAuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZU91dCxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6IC0xfSk7XG4gICAgICAgICAgICAgICAgICAgIHRsLmFwcGVuZChUd2Vlbk1heC50byh0aGlzLl90aXRsZSwgMi4wLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90aXRsZS55ICsgZmxvYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGwuYXBwZW5kKFR3ZWVuTWF4LnRvKHRoaXMuX3RpdGxlLCAyLjAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3RpdGxlLnksXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uLmFuaW1hdG9yLmFkZCh0bCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R3ZWVucy5wdXNoKHRsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGVTY29wZTogdGhpc1xuICAgIH0pKTtcblxuICAgIC8vIHBsYXkgYnV0dG9uIHBvcFxuICAgIHRoaXMuX3BsYXlCdXR0b24uc2NhbGUgICAgICA9IG5ldyBQSVhJLlBvaW50KDAuMCwgMC4wKTtcbiAgICB0aGlzLl9wbGF5QnV0dG9uLnZpc2libGUgICAgPSB0cnVlO1xuICAgIHRpbWVsaW5lLmluc2VydChUd2Vlbk1heC50byh0aGlzLl9wbGF5QnV0dG9uLnNjYWxlLCAwLjQsIHtcbiAgICAgICAgZGVsYXk6IDEuNCxcbiAgICAgICAgeDogMS4wLFxuICAgICAgICB5OiAxLjAsXG4gICAgICAgIGVhc2U6IEJhY2suZWFzZU91dCxcbiAgICAgICAgZWFzZVBhcmFtczogWzQuMF1cbiAgICB9KSk7XG5cbiAgICB0aGlzLl9zb3VuZEJ1dHRvbi5zY2FsZSAgICAgPSBuZXcgUElYSS5Qb2ludCgwLjAsIDAuMCk7XG4gICAgdGhpcy5fc291bmRCdXR0b24udmlzaWJsZSAgID0gdHJ1ZTtcbiAgICB0aW1lbGluZS5pbnNlcnQoVHdlZW5NYXgudG8odGhpcy5fc291bmRCdXR0b24uc2NhbGUsIDAuNCwge1xuICAgICAgICBkZWxheTogMS42LFxuICAgICAgICB4OiAxLjAsXG4gICAgICAgIHk6IDEuMCxcbiAgICAgICAgZWFzZTogQmFjay5lYXNlT3V0LFxuICAgICAgICBlYXNlUGFyYW1zOiBbMi4wXVxuICAgIH0pKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshQnV0dG9ufSBidXR0b25cbiAqL1xuU3BsYXNoU2NlbmUucHJvdG90eXBlLm9uUGxheUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgdGhpcy5zaWduYWxzLm5leHQuZGlzcGF0Y2goKTtcblxuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3ByZXNzXCIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFCdXR0b259IGJ1dHRvblxuICovXG5TcGxhc2hTY2VuZS5wcm90b3R5cGUub25CdXR0b25Sb2xsT3ZlciA9IGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIENvbW1vbi5hdWRpb01hbmFnZXIucGxheVNvdW5kKFwic2Z4X3JvbGxvdmVyXCIpO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNwbGFzaFNjZW5lLnByb3RvdHlwZSwgXCJ2YW5UaW50QW1vdW50XCIsIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAwLjA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhciBjb2xvcjEgPSAweDI3MUI0MjtcbiAgICAgICAgdmFyIGNvbG9yMiA9IDB4RkZGRkZGO1xuXG4gICAgICAgIHZhciByZ2IxID0ge307XG4gICAgICAgIHJnYjEuciA9IChjb2xvcjEgPj4gMTYpICYgMHhGRjtcbiAgICAgICAgcmdiMS5nID0gKGNvbG9yMSA+PiA4KSAmIDB4RkY7XG4gICAgICAgIHJnYjEuYiA9IChjb2xvcjEgPj4gMCkgJiAweEZGO1xuXG4gICAgICAgIHZhciByZ2IyID0ge307XG4gICAgICAgIHJnYjIuciA9IChjb2xvcjIgPj4gMTYpICYgMHhGRjtcbiAgICAgICAgcmdiMi5nID0gKGNvbG9yMiA+PiA4KSAmIDB4RkY7XG4gICAgICAgIHJnYjIuYiA9IChjb2xvcjIgPj4gMCkgJiAweEZGO1xuXG4gICAgICAgIHJnYjEuciA9ICgxLjAgLSB2YWx1ZSkgKiByZ2IxLnIgKyAodmFsdWUgKiByZ2IyLnIpO1xuICAgICAgICByZ2IxLmcgPSAoMS4wIC0gdmFsdWUpICogcmdiMS5nICsgKHZhbHVlICogcmdiMi5nKTtcbiAgICAgICAgcmdiMS5iID0gKDEuMCAtIHZhbHVlKSAqIHJnYjEuYiArICh2YWx1ZSAqIHJnYjIuYik7XG5cbiAgICAgICAgdGhpcy5fdmFuLnRpbnQgPSAocmdiMS5yIDw8IDE2KSB8IChyZ2IxLmcgPDwgOCkgfCByZ2IxLmI7XG4gICAgfVxufSk7IiwiLyoqXG4gKiAgVHJhbnNpdGlvblxuICpcbiAqICBDcmVhdGVkIGJ5IExlZ21hbiBvbiA0LzA5LzIwMTUuXG4gKlxuICovXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFRyYW5zaXRpb24oKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgdGhpcy5zaWduYWxzICAgICAgICA9IHt9O1xuICAgIHRoaXMuc2lnbmFscy5pbiAgICAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcbiAgICB0aGlzLnNpZ25hbHMub3V0ICAgID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnB1c2ggPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLndhaXQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZXF1aXJlc1dlYkdMID0gZmFsc2U7XG5cbiAgICBQSVhJLkNvbnRhaW5lci5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICAgICAgICAgICAgPSBUcmFuc2l0aW9uO1xuVHJhbnNpdGlvbi5wcm90b3R5cGUgICAgICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFBJWEkuQ29udGFpbmVyLnByb3RvdHlwZSk7XG5UcmFuc2l0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAgICA9IFRyYW5zaXRpb247XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5pbi5kaXNwb3NlKCk7XG4gICAgdGhpcy5zaWduYWxzLm91dC5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5pbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5pbi5kaXNwYXRjaCh0aGlzKTtcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLm91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2lnbmFscy5vdXQuZGlzcGF0Y2godGhpcyk7XG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtUcmFuc2l0aW9ufVxuICovXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuZmFsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBvdmVycmlkZVxufTsiXX0=
