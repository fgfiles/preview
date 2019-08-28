! function t(e, i, s) {
    function n(a, r) {
        if (!i[a]) {
            if (!e[a]) {
                var h = "function" == typeof require && require;
                if (!r && h) return h(a, !0);
                if (o) return o(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = i[a] = {
                exports: {}
            };
            e[a][0].call(c.exports, function(t) {
                var i = e[a][1][t];
                return n(i ? i : t)
            }, c, c.exports, t, e, i, s)
        }
        return i[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < s.length; a++) n(s[a]);
    return n
}({
    1: [function(t, e, i) {
        (function(i) {
            var s = e.exports = t("./core");
            Object.assign(s, t("./extras")), i.BP = s
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./core": 43,
        "./extras": 77
    }],
    2: [function(t, e, i) {
        "use strict";

        function s(t, e, i) {
            this.fn = t, this.context = e, this.once = i || !1
        }

        function n() {}
        var o = Object.prototype.hasOwnProperty,
            a = "function" != typeof Object.create && "~";
        n.prototype._events = void 0, n.prototype.eventNames = function() {
            var t, e = this._events,
                i = [];
            if (!e) return i;
            for (t in e) o.call(e, t) && i.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
        }, n.prototype.listeners = function(t, e) {
            var i = a ? a + t : t,
                s = this._events && this._events[i];
            if (e) return !!s;
            if (!s) return [];
            if (s.fn) return [s.fn];
            for (var n = 0, o = s.length, r = new Array(o); n < o; n++) r[n] = s[n].fn;
            return r
        }, n.prototype.emit = function(t, e, i, s, n, o) {
            var r = a ? a + t : t;
            if (!this._events || !this._events[r]) return !1;
            var h, l, c = this._events[r],
                p = arguments.length;
            if ("function" == typeof c.fn) {
                switch (c.once && this.removeListener(t, c.fn, void 0, !0), p) {
                    case 1:
                        return c.fn.call(c.context), !0;
                    case 2:
                        return c.fn.call(c.context, e), !0;
                    case 3:
                        return c.fn.call(c.context, e, i), !0;
                    case 4:
                        return c.fn.call(c.context, e, i, s), !0;
                    case 5:
                        return c.fn.call(c.context, e, i, s, n), !0;
                    case 6:
                        return c.fn.call(c.context, e, i, s, n, o), !0
                }
                for (l = 1, h = new Array(p - 1); l < p; l++) h[l - 1] = arguments[l];
                c.fn.apply(c.context, h)
            } else {
                var u, d = c.length;
                for (l = 0; l < d; l++) switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), p) {
                    case 1:
                        c[l].fn.call(c[l].context);
                        break;
                    case 2:
                        c[l].fn.call(c[l].context, e);
                        break;
                    case 3:
                        c[l].fn.call(c[l].context, e, i);
                        break;
                    default:
                        if (!h)
                            for (u = 1, h = new Array(p - 1); u < p; u++) h[u - 1] = arguments[u];
                        c[l].fn.apply(c[l].context, h)
                }
            }
            return !0
        }, n.prototype.on = function(t, e, i) {
            var n = new s(e, i || this),
                o = a ? a + t : t;
            return this._events || (this._events = a ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : this._events[o] = n, this
        }, n.prototype.once = function(t, e, i) {
            var n = new s(e, i || this, (!0)),
                o = a ? a + t : t;
            return this._events || (this._events = a ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : this._events[o] = n, this
        }, n.prototype.removeListener = function(t, e, i, s) {
            var n = a ? a + t : t;
            if (!this._events || !this._events[n]) return this;
            var o = this._events[n],
                r = [];
            if (e)
                if (o.fn)(o.fn !== e || s && !o.once || i && o.context !== i) && r.push(o);
                else
                    for (var h = 0, l = o.length; h < l; h++)(o[h].fn !== e || s && !o[h].once || i && o[h].context !== i) && r.push(o[h]);
            return r.length ? this._events[n] = 1 === r.length ? r[0] : r : delete this._events[n], this
        }, n.prototype.removeAllListeners = function(t) {
            return this._events ? (t ? delete this._events[a ? a + t : t] : this._events = a ? {} : Object.create(null), this) : this
        }, n.prototype.off = n.prototype.removeListener, n.prototype.addListener = n.prototype.on, n.prototype.setMaxListeners = function() {
            return this
        }, n.prefixed = a, "undefined" != typeof e && (e.exports = n)
    }, {}],
    3: [function(t, e, i) {
        function s() {
            this._preloader = null, n.gmi.mode && "editor" === n.gmi.mode && (this.showEditor(), n.keyboard.disableFocus())
        }
        var n = t("./Common"),
            o = t("./lib/Transition"),
            a = t("./lib/CutoutTransition"),
            r = t("./screens/TitleScreen"),
            h = t("./screens/LevelSelectScreen"),
            l = t("./screens/IntroScreen"),
            c = t("./screens/GameScreen"),
            p = t("./overlays/GamePauseOverlay"),
            u = t("./overlays/GameOverOverlay"),
            d = t("./screens/EditorScreen");
        e.exports = s, s.prototype.init = function() {
            this.createTitleScreen()
        }, s.prototype.showEditor = function() {
            var t = new d;
            return n.sceneManager.add(t, this._getTransition()), n.currentScreen = t, t
        }, s.prototype.createTitleScreen = function() {
            var t = new r;
            return n.sceneManager.add(t, this._getTransition()), t.signals.requestedPreviousScreen.addOnce(function() {}, this), t.signals.requestedNextScreen.addOnce(function() {
                this.createLevelSelectScreen()
            }, this), n.currentScreen = t, t
        }, s.prototype.createLevelSelectScreen = function() {
            var t = new h;
            return n.sceneManager.add(t, this._getTransition()), t.signals.requestedPreviousScreen.addOnce(function() {
                this.createTitleScreen()
            }, this), t.signals.requestedNextScreen.addOnce(function() {
                n.savedData.hasSeenIntro[Math.floor(n.savedData.currentLevel / 5)] ? this.createGameScreen() : this.createIntroScreen()
            }, this), n.currentScreen = t, t
        }, s.prototype.createIntroScreen = function() {
            var t = new l;
            return n.sceneManager.add(t, this._getTransition()), t.signals.requestedPreviousScreen.addOnce(function() {}, this), t.signals.requestedNextScreen.addOnce(function() {
                n.savedData.hasSeenIntro[Math.floor(n.savedData.currentLevel / 5)] = !0, n.savedData.save(), n.savedData.hasSeenTutorial ? this.createGameScreen() : this.createGamePauseOverlay(!1)
            }, this), n.currentScreen = t, t
        }, s.prototype.createGameScreen = function(t) {
            var e = new c(t);
            return n.sceneManager.add(e, this._getTransition()), e.signals.requestedPreviousScreen.addOnce(function() {}, this), e.signals.requestedNextScreen.addOnce(function(t, e) {
                this.createGameOverOverlay(t, e)
            }, this), e.signals.requestPauseScreen.add(function(t) {
                this.createGamePauseOverlay(t)
            }, this), n.currentScreen = e, e
        }, s.prototype.createGamePauseOverlay = function(t) {
            var e = new o;
            e.push = !0, e.replace = !1, n.currentScreen.uiManager.hide(function() {
                var i = new p(t);
                n.sceneManager.add(i, n.savedData.hasSeenTutorial ? e : this._getTransition()), i.signals.requestedNextScreen.addOnce(function() {
                    n.savedData.hasSeenTutorial ? (n.sceneManager.remove(), n.currentScreen.uiManager.show()) : (n.savedData.hasSeenTutorial = !0, n.savedData.save(), this.createGameScreen())
                }, this), i.signals.requestedCurrentScreen.addOnce(function(t) {
                    this.createGameScreen(t)
                }, this), i.signals.requestedPreviousScreen.addOnce(function() {}, this), i.signals.requestLevelSelectScreen.addOnce(function() {
                    this.createLevelSelectScreen()
                }, this)
            }, this)
        }, s.prototype.createGameOverOverlay = function(t, e) {
            var i = new o;
            i.push = !0, i.replace = !1, n.currentScreen.uiManager.hide(function() {
                var s = new u(t, e);
                n.sceneManager.add(s, i), s.signals.requestedNextScreen.addOnce(function() {}, this), s.signals.requestedCurrentScreen.addOnce(function(t) {
                    this.createGameScreen(t)
                }, this), s.signals.requestedPreviousScreen.addOnce(function() {
                    this.createTitleScreen()
                }, this), s.signals.requestLevelSelectScreen.addOnce(function() {
                    this.createLevelSelectScreen()
                }, this)
            }, this)
        }, s.prototype._getTransition = function() {
            var t = new a(n.assetManager.getTexture("transition"), n.TRANSITION_COLOR, n.TRANSITION_DURATION_IN, n.TRANSITION_DURATION_OUT);
            return t
        }
    }, {
        "./Common": 4,
        "./lib/CutoutTransition": 46,
        "./lib/Transition": 51,
        "./overlays/GameOverOverlay": 52,
        "./overlays/GamePauseOverlay": 53,
        "./screens/EditorScreen": 56,
        "./screens/GameScreen": 57,
        "./screens/IntroScreen": 58,
        "./screens/LevelSelectScreen": 59,
        "./screens/TitleScreen": 62
    }],
    4: [function(t, e, i) {
        var s = {
            FPS: 60,
            gmi: null,
            language: null,
            languages: {},
            characterAnimationData: [],
            enemiesAnimationData: [],
            savedData: null,
            aliens: ["cannonbolt", "overflow", "heatblast", "stinkfly", "xlr8"],
            chapter: null,
            alien: null,
            stars: [1e3, 3e3, 5e3],
            scoreData: [{
                icon: "obstacles_icon",
                type: "fire",
                scoring: 100
            }, {
                icon: "time_icon",
                type: "time",
                scoring: 100
            }, {
                icon: "enemies_icon",
                type: "enemy",
                scoring: 250
            }, {
                icon: "omnitrix_icon",
                type: "omnitrix",
                scoring: 100
            }, {
                icon: "NONE",
                type: "sumo",
                scoring: 1e3
            }],
            ownedKeys: {
                green: !1,
                blue: !1,
                red: !1
            },
            levelScore: {
                omnitrixTotal: 0,
                fire: 0,
                enemy: 0,
                omnitrix: 0,
                time: 0,
                sumo: 0
            },
            generatedTextures: {},
            particles: {},
            timePickUpAdd: 6,
            assetManager: null,
            audioManager: null,
            sceneManager: null,
            currentScreen: null,
            STAGE_WIDTH: 1900,
            STAGE_HEIGHT: 768,
            stage: null,
            canvas: null,
            renderer: null,
            isWebGL: !1,
            timestep: null,
            animator: null,
            paused: !1,
            walkLoop: "",
            menuMusic: "music_main_quiet_00",
            gameMusic: "music_ben10_herotime",
            currentMusic: "",
            webFontName: "ArialMT-Regular",
            webFont: {
                Ahkio40: {
                    font: "40px #NAME#",
                    fill: 16777215,
                    stroke: 0,
                    strokeThickness: 6,
                    lineJoin: "round",
                    align: "center"
                },
                Ahkio50: {
                    font: "50px #NAME#",
                    fill: 16777215,
                    stroke: 0,
                    strokeThickness: 7,
                    lineJoin: "round",
                    align: "center"
                },
                Ahkio100: {
                    font: "100px #NAME#",
                    fill: 6946560,
                    stroke: 279296,
                    strokeThickness: 10,
                    lineJoin: "round",
                    align: "center"
                }
            },
            GEL_OFFSET: Math.floor(38),
            TRANSITION_COLOR: 0,
            TRANSITION_DURATION_IN: .8,
            TRANSITION_DURATION_OUT: .6,
            PATHS: {
                SCRIPTS: "scripts/",
                DATA: "data/",
                IMAGES: "assets/images/",
                FONTS: "assets/fonts/",
                SOUNDS: "assets/sounds/",
                PARTICLES: "assets/particles/",
                SYSTEM: "assets/images/system/"
            },
            SETTINGS: {
                VOLUME: {
                    MUSIC: 1,
                    SOUNDS: 1
                }
            }
        };
        s.play = function(t, e) {
            if ("" !== t) {
                var i = null;
                i = t instanceof Array ? t[Math.floor(Math.random() * t.length)] : t, s.audioManager.playSound(i, e)
            }
        }, s.stop = function(t) {
            if ("" !== t)
                for (var e = s.audioManager.soundsSFX, i = 0; i < e.length; i++) e[i].name === t && s.audioManager.stopSound(t)
        }, s.stopAll = function() {
            for (var t = s.audioManager.soundsSFX, e = 0; e < t.length; e++) s.audioManager.stopSound(t[e].name)
        }, s.replaceFontName = function() {
            for (var t in s.webFont) s.webFont[t].font = s.webFont[t].font.replace("#NAME#", s.webFontName)
        }, s.getChapter = function() {
            return Math.floor(s.savedData.currentLevel / 5) + 1
        }, s.getAlien = function() {
            return s.savedData.currentLevel % 5 + 1
        }, e.exports = s
    }, {}],
    5: [function(t, e, i) {
        function s() {}
        e.exports = s;
        var s = s.prototype;
        s.signalKeyDown = new signals.Signal, s.signalKeyUp = new signals.Signal, s.focusInterval = null, s._keysDown = null, s._keysPressed = null, s._keysUp = null, s.KEY_TAB = 9, s.KEY_ENTER = 13, s.KEY_SHIFT = 16, s.KEY_CTRL = 17, s.KEY_SPACE = 32, s.KEY_LEFT = 37, s.KEY_UP = 38, s.KEY_RIGHT = 39, s.KEY_DOWN = 40, s.KEY_A = 65, s.KEY_B = 66, s.KEY_C = 67, s.KEY_D = 68, s.KEY_E = 69, s.KEY_F = 70, s.KEY_G = 71, s.KEY_H = 72, s.KEY_I = 73, s.KEY_J = 74, s.KEY_K = 75, s.KEY_L = 76, s.KEY_M = 77, s.KEY_N = 78, s.KEY_O = 79, s.KEY_P = 80, s.KEY_Q = 81, s.KEY_R = 82, s.KEY_S = 83, s.KEY_T = 84, s.KEY_U = 85, s.KEY_V = 86, s.KEY_W = 87, s.KEY_X = 88, s.KEY_Y = 89, s.KEY_Z = 90, s.KEY_PLUs = 187, s.KEY_MINUS = 189, s.editorMode = !1, s.init = function(t) {
            t.onkeydown = this.onKeyDown.bind(this), t.onkeyup = this.onKeyUp.bind(this), this.enableFocus(t), this.reset()
        }, s.enableFocus = function(t) {
            s.focusInterval = setInterval(function() {
                t.focus()
            }, 1e3)
        }, s.disableFocus = function() {
            clearInterval(s.focusInterval), s.editorMode = !0
        }, s.onKeyDown = function(t) {
            s.editorMode || t.preventDefault();
            var e;
            e = window.event ? t.keyCode : t.which, s._keysDown[e] = !s._keysPressed[e], s._keysPressed[e] = !0, s.signalKeyDown.dispatch(e)
        }, s.onKeyUp = function(t) {
            s.editorMode || t.preventDefault();
            var e;
            e = window.event ? t.keyCode : t.which, s._keysDown[e] = !1, s._keysPressed[e] = !1, s._keysUp[e] = !0, s.signalKeyUp.dispatch(e)
        }, s.update = function() {
            s._keysDown = {}, s._keysUp = {}
        }, s.reset = function() {
            s._keysDown = {}, s._keysPressed = {}, s._keysUp = {}
        }, s.getKeyPressed = function(t) {
            return s._keysPressed[t]
        }, s.setKeyJustPressed = function(t) {
            s._keysDown[t] = !s._keysPressed[t], s._keysPressed[t] = !0
        }, s.getKeyJustPressed = function(t) {
            return s._keysDown[t]
        }, s.setKeyJustReleased = function(t) {
            s._keysDown[t] = !1, s._keysPressed[t] = !1, s._keysUp[t] = !0
        }, s.getKeyJustReleased = function(t) {
            return s._keysUp[t]
        }
    }, {}],
    6: [function(t, e, i) {
        function s(t, e, i) {
            console.warn = function() {}, n.gmi = i, n.replaceFontName(), this._width = t, this._height = e, this._game = null, n.resolutionSuffix = n.gmi.resolutionSuffix || "hd";
            for (var s in n.PATHS) switch (n.PATHS[s] = n.gmi.gameDir + n.PATHS[s], s) {
                case "IMAGES":
                case "FONTS":
                    n.PATHS[s] += n.gmi.resolutionSuffix + "/"
            }
            this._resolution = 1, this._preloader = null, this.init()
        }
        var n = t("./Common"),
            o = t("./lib/SceneManager"),
            a = t("./Application"),
            r = t("./Keyboard"),
            h = t("./screens/PreloaderScreen"),
            l = t("./SavedData");
        s.prototype.init = function() {
            var t = new p3.ViewParams;
            t.width = this._width, t.height = this._height, t.holderId = n.gmi.gameContainerId, t.rotateImageUrl = n.PATHS.SYSTEM + n.gmi.language + "/rotate_" + n.gmi.language + ".jpg", t.rotateImageColor = "#000000", PIXI.RETINA_PREFIX = /\_(?=[^_]*$)(.+)x/, p3.Device.init(window.bowser), TweenMax.defaultOverwrite = "none", TweenMax.ticker.fps(n.FPS), p3.AudioManager.DEBUG = !1, n.assetManager = p3.AssetManager.instance, n.audioManager = p3.AudioManager.instance, n.canvas = new p3.View(t), n.canvas.signals.ready.addOnce(function(t) {
                var e = {
                    view: t,
                    transparent: !1,
                    antialias: !1,
                    preserveDrawingBuffer: !1,
                    resolution: this._resolution
                };
                n.assetManager.scaleFactor = this._resolution, n.renderer = PIXI.autoDetectRenderer(this._width, this._height, e), n.stage = new PIXI.Container, n.isWebGL = n.renderer instanceof PIXI.WebGLRenderer, n.sceneManager = new o, n.sceneManager.init(n.stage, n.renderer), n.timestep = new p3.Timestep(p3.Timestep.FIXED), n.timestep.init(this.update, this.render, this), n.animator = new p3.Animator, n.animator.init(), n.keyboard = new r, n.gmi.mode && "editor" === n.gmi.mode ? n.keyboard.init(document.body) : n.keyboard.init(t), n.generatedTextures.black = this.generateFillTexture(0), n.savedData = new l, n.savedData.init(), n.audioManager.mute(n.savedData.isMuted), this.loadPreloader()
            }, this), n.canvas.signals.resize.add(this.onCanvasResize, this)
        }, s.prototype.generateFillTexture = function(t, e) {
            var i = new PIXI.Graphics;
            i.beginFill(t, e || 1), i.drawRect(0, 0, 2, 2);
            var s = i.generateTexture(n.renderer, 1, PIXI.SCALE_MODES.LINEAR);
            return i.destroy(), i = null, s
        }, s.prototype.onLoadingProgress = function(t) {
            this._preloader.loaded = t.progress
        }, s.prototype.memPreload = function() {
            this.bg = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash", ".jpg"),
                alpha: .001
            }).addTo(this._preloader), this.benLogo = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_logo"),
                alpha: .001
            }).addTo(this._preloader), this.title = new BP.Sprite({
                texture: n.assetManager.getTexture("splash_title"),
                alpha: .001
            }).addTo(this._preloader), this.radialeft = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_aliens_l"),
                alpha: .001
            }).addTo(this._preloader), this.aliensRight = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_aliens_r"),
                alpha: .001
            }).addTo(this._preloader), this.ben = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_ben"),
                alpha: .001
            }).addTo(this._preloader), this.benRadial = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_ben_radial"),
                alpha: .001
            }).addTo(this._preloader)
        }, s.prototype.onLoadingCompleted = function() {
            this.memPreload(), this._preloader.loadedPercentage = 100, this._preloader.animateOut(null, this), this._preloader = null, n.animator.setTimeout(function() {
                n.assetManager.signalProgress.removeAll(), n.assetManager.signalCompleted.removeAll(), n.languages = n.assetManager.getJSON("languages"), n.characterAnimationData.char_ben = n.assetManager.resources.char_ben.spineData, n.characterAnimationData.char_cannonbolt = n.assetManager.resources.char_cannonbolt.spineData, n.characterAnimationData.char_overflow = n.assetManager.resources.char_overflow.spineData, n.characterAnimationData.char_stinkfly = n.assetManager.resources.char_stinkfly.spineData, n.characterAnimationData.char_heatblast = n.assetManager.resources.char_heatblast.spineData, n.characterAnimationData.char_xlr8 = n.assetManager.resources.char_xlr8.spineData, n.enemiesAnimationData.maggot = n.assetManager.resources.char_maggot.spineData, n.enemiesAnimationData.mascot = n.assetManager.resources.char_mascot.spineData, n.enemiesAnimationData.bandit = n.assetManager.resources.char_bandit.spineData, this.startGame()
            }, .4, this)
        }, s.prototype.loadPreloader = function() {
            var t = [{
                name: "preloader_bg",
                url: n.PATHS.IMAGES + "preloader/preloader_bg.png"
            }, {
                name: "preloader",
                url: n.PATHS.IMAGES + "preloader/preloader.json"
            }];
            n.assetManager.addFiles(t), n.assetManager.signalCompleted.addOnce(function() {
                this.loadAssets()
            }, this), n.assetManager.load()
        }, s.prototype.loadAssets = function() {
            var t = [{
                    name: "transition",
                    url: n.PATHS.IMAGES + "transition.png"
                }, {
                    name: "languages",
                    url: n.PATHS.DATA + "languages.json"
                }, {
                    name: "config",
                    url: n.PATHS.DATA + "config.json"
                }, {
                    name: "ahkio26",
                    url: n.PATHS.FONTS + "ahkio_26_game.xml"
                }, {
                    name: "ahkio60",
                    url: n.PATHS.FONTS + "ahkio_60_white_endgame.xml"
                }, {
                    name: "ahkio75",
                    url: n.PATHS.FONTS + "ahkio_75_paused.xml"
                }, {
                    name: "ahkio90",
                    url: n.PATHS.FONTS + "ahkio_90_orange_endgame.xml"
                }, {
                    name: "ahkio100",
                    url: n.PATHS.FONTS + "ahkio_100_green_endgame.xml"
                }, {
                    name: "splash_title",
                    url: n.PATHS.IMAGES + "localisation/title_" + n.gmi.language + ".png"
                }, {
                    name: "ui_splash",
                    url: n.PATHS.IMAGES + "ui/ui_splash.jpg"
                }, {
                    name: "ui_0",
                    url: n.PATHS.IMAGES + "ui/ui_0.json"
                }, {
                    name: "ui_1",
                    url: n.PATHS.IMAGES + "ui/ui_1.json"
                }, {
                    name: "ui_2",
                    url: n.PATHS.IMAGES + "ui/ui_2.json"
                }, {
                    name: "ui_buttons",
                    url: n.PATHS.IMAGES + "ui/ui_buttons.json"
                }, {
                    name: "ui_intro_0",
                    url: n.PATHS.IMAGES + "ui/ui_intro_0.json"
                }, {
                    name: "ui_intro_1",
                    url: n.PATHS.IMAGES + "ui/ui_intro_1.json"
                }, {
                    name: "bg_ui",
                    url: n.PATHS.IMAGES + "bgs/bg_ui.jpg"
                }, {
                    name: "paused_bg",
                    url: n.PATHS.IMAGES + "bgs/paused_bg.jpg"
                }, {
                    name: "game_0",
                    url: n.PATHS.IMAGES + "game_0.json"
                }, {
                    name: "transform_0",
                    url: n.PATHS.IMAGES + "transform_0.json"
                }, {
                    name: "particles_0",
                    url: n.PATHS.IMAGES + "particles/particles_0.json"
                }, {
                    name: "editorConfig",
                    url: n.PATHS.IMAGES + "editor/config.json"
                }, {
                    name: "jump_platform",
                    url: n.PATHS.IMAGES + "editor/jump_platform.png"
                }, {
                    name: "camera_zoom",
                    url: n.PATHS.IMAGES + "editor/camera_zoom.png"
                }, {
                    name: "level_end",
                    url: n.PATHS.IMAGES + "editor/level_end.png"
                }, {
                    name: "level_gameover",
                    url: n.PATHS.IMAGES + "editor/level_gameover.png"
                }, {
                    name: "hint",
                    url: n.PATHS.IMAGES + "editor/hint.png"
                }, {
                    name: "maggot_01",
                    url: n.PATHS.IMAGES + "editor/maggot_01.png"
                }, {
                    name: "mascot_02",
                    url: n.PATHS.IMAGES + "editor/mascot_02.png"
                }, {
                    name: "bandit_03",
                    url: n.PATHS.IMAGES + "editor/bandit_03.png"
                }, {
                    name: "theme_01_fill",
                    url: n.PATHS.IMAGES + "editor/theme_01_fill_0.png"
                }, {
                    name: "theme_01_ground",
                    url: n.PATHS.IMAGES + "editor/theme_01_ground_0.png"
                }, {
                    name: "theme_01_ground_edge",
                    url: n.PATHS.IMAGES + "editor/theme_01_ground_edge_0.png"
                }, {
                    name: "theme_01_wall",
                    url: n.PATHS.IMAGES + "editor/theme_01_wall_0.png"
                }, {
                    name: "theme_02_fill",
                    url: n.PATHS.IMAGES + "editor/theme_02_fill_0.png"
                }, {
                    name: "theme_02_ground",
                    url: n.PATHS.IMAGES + "editor/theme_02_ground_0.png"
                }, {
                    name: "theme_02_ground_edge",
                    url: n.PATHS.IMAGES + "editor/theme_02_ground_edge_0.png"
                }, {
                    name: "theme_02_wall",
                    url: n.PATHS.IMAGES + "editor/theme_02_wall_0.png"
                }, {
                    name: "theme_03_fill",
                    url: n.PATHS.IMAGES + "editor/theme_03_fill_0.png"
                }, {
                    name: "theme_03_ground",
                    url: n.PATHS.IMAGES + "editor/theme_03_ground_0.png"
                }, {
                    name: "theme_03_ground_edge",
                    url: n.PATHS.IMAGES + "editor/theme_03_ground_edge_0.png"
                }, {
                    name: "theme_03_wall",
                    url: n.PATHS.IMAGES + "editor/theme_03_wall_0.png"
                }, {
                    name: "level_1_1",
                    url: n.PATHS.DATA + "levels/level_1_1.json"
                }, {
                    name: "level_1_2",
                    url: n.PATHS.DATA + "levels/level_1_2.json"
                }, {
                    name: "level_1_3",
                    url: n.PATHS.DATA + "levels/level_1_3.json"
                }, {
                    name: "level_1_4",
                    url: n.PATHS.DATA + "levels/level_1_4.json"
                }, {
                    name: "level_1_5",
                    url: n.PATHS.DATA + "levels/level_1_5.json"
                }, {
                    name: "level_2_1",
                    url: n.PATHS.DATA + "levels/level_2_1.json"
                }, {
                    name: "level_2_2",
                    url: n.PATHS.DATA + "levels/level_2_2.json"
                }, {
                    name: "level_2_3",
                    url: n.PATHS.DATA + "levels/level_2_3.json"
                }, {
                    name: "level_2_4",
                    url: n.PATHS.DATA + "levels/level_2_4.json"
                }, {
                    name: "level_2_5",
                    url: n.PATHS.DATA + "levels/level_2_5.json"
                }, {
                    name: "level_3_1",
                    url: n.PATHS.DATA + "levels/level_3_1.json"
                }, {
                    name: "level_3_2",
                    url: n.PATHS.DATA + "levels/level_3_2.json"
                }, {
                    name: "level_3_3",
                    url: n.PATHS.DATA + "levels/level_3_3.json"
                }, {
                    name: "level_3_4",
                    url: n.PATHS.DATA + "levels/level_3_4.json"
                }, {
                    name: "level_3_5",
                    url: n.PATHS.DATA + "levels/level_3_5.json"
                }, {
                    name: "theme_01_sky",
                    url: n.PATHS.IMAGES + "themes/theme_01_sky.jpg"
                }, {
                    name: "theme_02_sky",
                    url: n.PATHS.IMAGES + "themes/theme_02_sky.jpg"
                }, {
                    name: "theme_03_sky",
                    url: n.PATHS.IMAGES + "themes/theme_03_sky.jpg"
                }, {
                    name: "theme_01",
                    url: n.PATHS.IMAGES + "themes/theme_01.json"
                }, {
                    name: "theme_01_tiles",
                    url: n.PATHS.IMAGES + "themes/theme_01_tiles.json"
                }, {
                    name: "theme_02",
                    url: n.PATHS.IMAGES + "themes/theme_02.json"
                }, {
                    name: "theme_02_tiles",
                    url: n.PATHS.IMAGES + "themes/theme_02_tiles.json"
                }, {
                    name: "theme_03",
                    url: n.PATHS.IMAGES + "themes/theme_03.json"
                }, {
                    name: "theme_03_tiles",
                    url: n.PATHS.IMAGES + "themes/theme_03_tiles.json"
                }, {
                    name: "particle_emitter_attack",
                    url: n.PATHS.DATA + "particles/particle_emitter_attack.json"
                }, {
                    name: "particle_emitter_wall_destroy",
                    url: n.PATHS.DATA + "particles/particle_emitter_wall_destroy.json"
                }, {
                    name: "particle_firework_fountain",
                    url: n.PATHS.DATA + "particles/particle_firework_fountain.json"
                }, {
                    name: "particle_firework_large_blue",
                    url: n.PATHS.DATA + "particles/particle_firework_large_blue.json"
                }, {
                    name: "particle_firework_large_orange",
                    url: n.PATHS.DATA + "particles/particle_firework_large_orange.json"
                }, {
                    name: "particle_firework_large_purple",
                    url: n.PATHS.DATA + "particles/particle_firework_large_purple.json"
                }, {
                    name: "particle_firework_large_yellow",
                    url: n.PATHS.DATA + "particles/particle_firework_large_yellow.json"
                }, {
                    name: "particle_firework_small_blue",
                    url: n.PATHS.DATA + "particles/particle_firework_small_blue.json"
                }, {
                    name: "particle_firework_small_purple",
                    url: n.PATHS.DATA + "particles/particle_firework_small_purple.json"
                }, {
                    name: "particle_firework_small_yellow",
                    url: n.PATHS.DATA + "particles/particle_firework_small_yellow.json"
                }, {
                    name: "particle_hit_heatblast",
                    url: n.PATHS.DATA + "particles/particle_hit_heatblast.json"
                }, {
                    name: "particle_hit_overflow",
                    url: n.PATHS.DATA + "particles/particle_hit_overflow.json"
                }, {
                    name: "particle_char_dust",
                    url: n.PATHS.DATA + "particles/particle_char_dust.json"
                }, {
                    name: "particle_char_heatblast_shoot",
                    url: n.PATHS.DATA + "particles/particle_char_heatblast_shoot.json"
                }, {
                    name: "particle_char_overflow_shoot",
                    url: n.PATHS.DATA + "particles/particle_char_overflow_shoot.json"
                }, {
                    name: "particle_obstacle_falling_theme_001",
                    url: n.PATHS.DATA + "particles/particle_obstacle_falling_theme_001.json"
                }, {
                    name: "particle_obstacle_falling_theme_002",
                    url: n.PATHS.DATA + "particles/particle_obstacle_falling_theme_002.json"
                }, {
                    name: "particle_obstacle_falling_theme_003",
                    url: n.PATHS.DATA + "particles/particle_obstacle_falling_theme_003.json"
                }, {
                    name: "particle_obstacle_fire",
                    url: n.PATHS.DATA + "particles/particle_obstacle_fire.json"
                }, {
                    name: "particle_obstacle_smash_theme_001",
                    url: n.PATHS.DATA + "particles/particle_obstacle_smash_theme_001.json"
                }, {
                    name: "particle_obstacle_smash_theme_002",
                    url: n.PATHS.DATA + "particles/particle_obstacle_smash_theme_002.json"
                }, {
                    name: "particle_obstacle_smash_theme_003",
                    url: n.PATHS.DATA + "particles/particle_obstacle_smash_theme_003.json"
                }, {
                    name: "particle_obstacle_teleport",
                    url: n.PATHS.DATA + "particles/particle_obstacle_teleport.json"
                }, {
                    name: "particle_pickup_key_blue",
                    url: n.PATHS.DATA + "particles/particle_pickup_key_blue.json"
                }, {
                    name: "particle_pickup_key_green",
                    url: n.PATHS.DATA + "particles/particle_pickup_key_green.json"
                }, {
                    name: "particle_pickup_key_red",
                    url: n.PATHS.DATA + "particles/particle_pickup_key_red.json"
                }, {
                    name: "particle_pickup_key_sumocard",
                    url: n.PATHS.DATA + "particles/particle_pickup_key_sumocard.json"
                }, {
                    name: "particle_pickup_omnitrix",
                    url: n.PATHS.DATA + "particles/particle_pickup_omnitrix.json"
                }, {
                    name: "particle_pickup_time",
                    url: n.PATHS.DATA + "particles/particle_pickup_time.json"
                }, {
                    name: "particle_watch",
                    url: n.PATHS.DATA + "particles/particle_watch.json"
                }, {
                    name: "preloader_radial_spray",
                    url: n.PATHS.DATA + "particles/preloader_radial_spray.json"
                }, {
                    name: "char_ben",
                    url: n.PATHS.IMAGES + "spine/char_ben.json"
                }, {
                    name: "char_cannonbolt",
                    url: n.PATHS.IMAGES + "spine/char_cannonbolt.json"
                }, {
                    name: "char_overflow",
                    url: n.PATHS.IMAGES + "spine/char_overflow.json"
                }, {
                    name: "char_stinkfly",
                    url: n.PATHS.IMAGES + "spine/char_stinkfly.json"
                }, {
                    name: "char_heatblast",
                    url: n.PATHS.IMAGES + "spine/char_heatblast.json"
                }, {
                    name: "char_xlr8",
                    url: n.PATHS.IMAGES + "spine/char_xlr8.json"
                }, {
                    name: "char_maggot",
                    url: n.PATHS.IMAGES + "spine/char_maggot.json"
                }, {
                    name: "char_mascot",
                    url: n.PATHS.IMAGES + "spine/char_mascot.json"
                }, {
                    name: "char_bandit",
                    url: n.PATHS.IMAGES + "spine/char_bandit.json"
                }],
                e = ["music_ben10_herotime", "music_main_quiet_00", "sfx_ben_run_step_l_gravel", "sfx_ben_run_step_r_gravel", "sfx_ben_run_step_l_concrete", "sfx_ben_run_step_r_concrete", "sfx_ben_run_step_l_wood", "sfx_ben_run_step_r_wood", "sfx_boom01", "sfx_boom02", "sfx_boom03", "sfx_btn_back", "sfx_btn_play_00", "sfx_btn_press_00", "sfx_btn_rollover_00", "sfx_cannonbolt_clunk_00", "sfx_cannonbolt_clunk_01", "sfx_cannonbolt_jump_00", "sfx_cannonbolt_land_00", "sfx_cannonbolt_roll_04", "sfx_cannonbolt_roll_jump_00", "sfx_cannonbolt_roll_land_00", "sfx_door_open", "sfx_heatblast_shoot_one_00", "sfx_omnitrix_open_00", "sfx_omnitrix_transform_00", "sfx_omnitrix_transform_back_00", "sfx_overflow_hurt_00", "sfx_overflow_hurt_01", "sfx_overflow_hurt_02", "sfx_overflow_jump_00", "sfx_overflow_landheavy_00", "sfx_overflow_landheavy_01", "sfx_overflow_landsoft_00", "sfx_overflow_shoot_water_short_00", "sfx_overflow_shoot_water_short_01", "sfx_pickup", "sfx_run_concrete", "sfx_run_gravel", "sfx_run_wood", "sfx_star_award_01", "sfx_star_award_02", "sfx_star_award_03", "sfx_timer_warning_00", "sfx_stinkfly_flap_00", "sfx_stinkfly_land_00", "sfx_xlr8_jump_00", "sfx_xlr8_land_00", "sfx_xlr8_runloop_00", "vo_ben_whoa_00", "vo_ben_win_haaa_00", "vo_ben_woohoo_00"];
            t.length ? (this._preloader = new h, n.sceneManager.add(this._preloader), n.currentScreen = this._preloader, n.assetManager.addFiles(t), n.assetManager.signalProgress.add(this.onLoadingProgress, this), n.assetManager.signalCompleted.addOnce(this.onLoadingCompleted, this), n.animator.setTimeout(function() {
                n.assetManager.load()
            }, .5, this), n.audioManager.addSounds(e, [".ogg", ".mp3"], n.PATHS.SOUNDS)) : this.startGame()
        }, s.prototype.startGame = function() {
            this._game = new a, this._game.init()
        }, s.prototype.update = function() {
            n.canvas.isCorrectOrientation() && (p3.Timestep.deltaTime >= 1 / 30 && (p3.Timestep.deltaTime = 1 / 30), n.sceneManager.update(), n.animator.update(), n.keyboard.update())
        }, s.prototype.render = function() {
            n.renderer.render(n.stage)
        }, s.prototype.onCanvasResize = function(t) {
            t ? (n.renderer.resize(p3.View.width, p3.View.height), n.currentScreen && (n.currentScreen.resize(), n.sceneManager.paused = !1, n.audioManager.mute(n.savedData.isMuted), TweenMax.resumeAll(), console.log("Resuming game"))) : n.currentScreen && (n.sceneManager.paused = !0, n.audioManager.mute(!0), TweenMax.pauseAll(), console.log("Pausing game"))
        }, e.exports = s
    }, {
        "./Application": 3,
        "./Common": 4,
        "./Keyboard": 5,
        "./SavedData": 7,
        "./lib/SceneManager": 50,
        "./screens/PreloaderScreen": 60
    }],
    7: [function(t, e, i) {
        function s() {
            this.SAVE_NAME = "Ben10HeroTime", this.SAVE_VERSION = "1.0.0", this.currentLevel = 0, this.character = "cannonbolt", this.levelDebug = "", this.characterDebug = "", this.hasSeenTutorial = !1, this.hasSeenIntro = [!1, !1, !1], this.highscore = [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], this.stars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.isMuted = !1
        }
        t("./Common");
        e.exports = s, s.prototype.init = function() {
            window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION] ? this.load() : this.save()
        }, s.prototype.load = function() {
            var t = window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION];
            t = JSON.parse(t), this.currentLevel = t.currentLevel, this.character = t.character, this.hasSeenTutorial = t.hasSeenTutorial, this.hasSeenIntro = t.hasSeenIntro, this.highscore = t.highscore, this.stars = t.stars, this.isMuted = t.isMuted, this.levelDebug = t.levelDebug, this.characterDebug = t.characterDebug
        }, s.prototype.save = function() {
            var t = {
                currentLevel: this.currentLevel,
                character: this.character,
                hasSeenTutorial: this.hasSeenTutorial,
                hasSeenIntro: this.hasSeenIntro,
                highscore: this.highscore,
                stars: this.stars,
                isMuted: this.isMuted,
                levelDebug: this.levelDebug,
                characterDebug: this.characterDebug
            };
            window.localStorage[this.SAVE_NAME + "_" + this.SAVE_VERSION] = JSON.stringify(t)
        }
    }, {
        "./Common": 4
    }],
    8: [function(t, e, i) {
        function s() {
            this.points = [], this.quadWidth = 96, this.cacheDrawingPoints = !0, this._drawingPoints = null, this._drawingPointsNormals = null
        }
        t("../Common");
        e.exports = s, s.prototype.addPoint = function(t, e, i) {
            i ? this.points.splice(i, 0, {
                x: t,
                y: e
            }) : this.points.push({
                x: t,
                y: e
            })
        }, s.prototype.deletePoint = function(t) {
            this.points.splice(t, 1)
        }, s.prototype.getFirstPoint = function() {
            return this.points[0]
        }, s.prototype.getLastPoint = function() {
            return this.points[this.points.length - 1]
        }, s.prototype.getPenultimatePoint = function() {
            return this.points[this.points.length - 2]
        }, s.prototype.getWidth = function() {
            return this.getLastPoint().x - this.getFirstPoint().x
        }, s.prototype.calculateBezierPoint = function(t, e, i, s, n) {
            var o = 1 - t,
                a = t * t,
                r = o * o,
                h = r * o,
                l = a * t;
            return p = {
                x: h * e.x,
                y: h * e.y
            }, p.x += 3 * r * t * i.x, p.y += 3 * r * t * i.y, p.x += 3 * o * a * s.x, p.y += 3 * o * a * s.y, p.x += l * n.x, p.y += l * n.y, p
        }, s.prototype.getDrawingPoints = function() {
            if (this.cacheDrawingPoints && null != this._drawingPoints) return this._drawingPoints;
            this._drawingPoints = [];
            for (var t = 0; t < this.points.length - 3; t += 3) {
                var e = this.points[t],
                    i = this.points[t + 1],
                    s = this.points[t + 2],
                    n = this.points[t + 3],
                    o = Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)),
                    a = Math.ceil(o / this.quadWidth);
                0 == t && this._drawingPoints.push(this.calculateBezierPoint(0, e, i, s, n));
                for (var r = 1; r <= a; r++) {
                    var h = r / a;
                    this._drawingPoints.push(this.calculateBezierPoint(h, e, i, s, n))
                }
            }
            return this._drawingPoints
        }, s.prototype.getDrawingPointsNormals = function() {
            if (this.cacheDrawingPoints && null != this._drawingPointsNormals) return this._drawingPointsNormals;
            var t = this.getDrawingPoints();
            this._drawingPointsNormals = [];
            for (var e = 1; e < t.length - 1; e++) {
                var i = t[e - 1],
                    s = t[e + 1],
                    n = {
                        x: s.x - i.x,
                        y: s.y - i.y
                    },
                    o = {
                        x: -n.y,
                        y: n.x
                    },
                    a = Math.sqrt(o.x * o.x + o.y * o.y),
                    r = {
                        x: o.x / a,
                        y: o.y / a
                    };
                this._drawingPointsNormals[e] = r
            }
            return this._drawingPointsNormals[0] = {
                x: 0,
                y: 1
            }, this._drawingPointsNormals[t.length - 1] = {
                x: 0,
                y: 1
            }, this._drawingPointsNormals
        }, s.prototype.getGroundSegments = function(t, e) {
            for (var i = [], s = null, n = this.getDrawingPoints(), o = this.getDrawingPointsNormals(), a = 0; a < n.length - 1; a++) {
                var r = Math.abs(Math.atan2(n[a + 1].y - n[a].y, n[a + 1].x - n[a].x) * PIXI.RAD_TO_DEG);
                if (r < t || r > e) {
                    if (null == s) continue;
                    i.push(s), s = null
                } else null == s && (s = {
                    points: [n[a]],
                    normals: [o[a]]
                }), s.points.push(n[a + 1]), s.normals.push(o[a + 1])
            }
            null != s && i.push(s);
            for (var a = 0; a < i.length; a++) i[a].normals.length > 2 && (i[a].normals[0] = i[a].normals[1], i[a].normals[i[a].normals.length - 1] = i[a].normals[i[a].normals.length - 2]);
            return i
        }
    }, {
        "../Common": 4
    }],
    9: [function(t, e, i) {
        function s() {
            PIXI.Container.call(this), this.assetManager = p3.AssetManager.instance, this.levels = [], this.level = null, this.snapGrid = 16, this.grid = null, this.cmb = !1, this.panMousePosition = null, this.config = this.assetManager.getJSON("editorConfig");
            for (var t = 33, e = 0; e < this.config.objects.length; e++) {
                var i = new PIXI.Sprite(this.assetManager.getTexture(this.config.objects[e].texture)),
                    s = Math.min(1 / (i.width / t), 1 / (i.height / t)),
                    o = new PIXI.RenderTexture(n.renderer, t, t),
                    a = new PIXI.Matrix;
                a.translate(i.width < i.height ? (i.height - i.width) / 2 : 1, i.height < i.width ? (i.width - i.height) / 2 : 1), a.scale(s, s), o.render(i, a), this.config.objects[e].textureBase64 = o.getBase64()
            }
            this.history = [], this.historyIndex = 0, this.character = "anna", this.gui = {
                selector: "#controls",
                levelTemplate: _.template($("#template-level").html(), {
                    variable: "editor"
                }),
                layerTemplate: _.template($("#template-layer").html(), {
                    variable: "editor"
                }),
                pathTemplate: _.template($("#template-path").html(), {
                    variable: "editor"
                }),
                objectTemplate: _.template($("#template-object").html(), {
                    variable: "editor"
                })
            }
        }
        var n = t("../Common"),
            o = t("../editor/Level");
        t("../editor/LevelLayer");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.renderGrid(), this.newLevel(), document.addEventListener("mousewheel", function(t) {
                0 != $("#canvas:hover").length && this.zoomDelta(-.05 * Math.sign(t.wheelDelta))
            }.bind(this), !1), $("body").on("click", ".level_new", function(t) {
                this.newLevel()
            }.bind(this)), $("body").on("click", ".level_export", function(t) {
                this["export"]()
            }.bind(this)), $("body").on("click", ".level_import", function(t) {
                this.load($("textarea[name=level_import_text]").val())
            }.bind(this)), $("body").on("click", ".level_image", function(t) {
                var e = this.level.toImage();
                if (e) {
                    var i = window.open(e, "level_image");
                    i.focus()
                }
            }.bind(this)), $("body").on("change", "select[name=level_character]", function(t) {
                this.character = $(t.currentTarget).val()
            }.bind(this)), $("body").on("click", ".level_debug", function(t) {
                n.savedData.characterDebug = this.character, n.savedData.levelDebug = JSON.stringify(this.level["export"]()), n.savedData.save(), console.log(n.savedData.characterDebug);
                var e = window.open("index.html", "level_debug");
                e.focus()
            }.bind(this)), $("body").on("change", "input[name=level_name]", function(t) {
                this.level.setName($(t.currentTarget).val()), $("textarea[name=level_import_text]").val(JSON.stringify(this.level["export"]()))
            }.bind(this)), $("body").on("click", ".new_layer", function(t) {
                this.level.newLayer()
            }.bind(this)), $("body").on("click", ".edit_layer", function(t) {
                var e = parseInt($(t.currentTarget).attr("data-index"));
                this.level.selectLayer(this.level.getLayerAtIndex(e))
            }.bind(this)), $("body").on("click", ".back", function(t) {
                this.back()
            }.bind(this)), $("body").on("change", "input[name=layer_name]", function(t) {
                this.level.layer.setName($(t.currentTarget).val())
            }.bind(this)), $("body").on("click", ".delete_layer", function(t) {
                this.level.deleteLayer(this.level.layer), this.back()
            }.bind(this)), $("body").on("change", "input[name=layer_depth]", function(t) {
                this.level.layer.setDepth(parseInt($(t.currentTarget).val())), this.render()
            }.bind(this)), $("body").on("click", ".objects li:not(.selected)", function(t) {
                $(".objects li.selected").removeClass("selected"), this.level.layer.setIdObject($(t.currentTarget).attr("data-id")), $(t.currentTarget).addClass("selected")
            }.bind(this)), $("body").on("change", "select[name=path_open]", function(t) {
                this.level.layer.selected.setConfig("closed", !parseInt($(t.currentTarget).val()), "change" == t.type), this.render()
            }.bind(this)), $("body").on("click", ".delete_path", function(t) {
                this.level.layer.deletePath(this.level.layer.selected), this.back()
            }.bind(this)), $("body").on("change", "input[name=path_depth], input[name=object_depth]", function(t) {
                this.level.layer.setSelectedDepth(parseInt($(t.currentTarget).val())), this.render()
            }.bind(this)), $("body").on("change", "select[name=path_collisions]", function(t) {
                this.level.layer.selected.setConfig("collisions", parseInt($(t.currentTarget).val()), "change" == t.type)
            }.bind(this)), $("body").on("change input", "input[name=path_texture_walls_angle]", function(t) {
                this.level.layer.selected.setConfig("texWallAngle", parseInt($(t.currentTarget).val()), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change input", "input[name=path_texture_fill_size]", function(t) {
                this.level.layer.selected.setConfig("texFillSize", parseInt($(t.currentTarget).val()), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change input", "input[name=path_texture_fill_padding]", function(t) {
                this.level.layer.selected.setConfig("texFillPadding", parseInt($(t.currentTarget).val()), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change input", "input[name=path_texture_ground_size]", function(t) {
                this.level.layer.selected.setConfig("texGroundSize", parseInt($(t.currentTarget).val()), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change input", "input[name=path_texture_ground_delta]", function(t) {
                this.level.layer.selected.setConfig("texGroundDelta", parseFloat($(t.currentTarget).val()), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change input", "input[name=path_texture_walls_size]", function(t) {
                this.level.layer.selected.setConfig("texWallSize", parseInt($(t.currentTarget).val()), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change input", "input[name=path_texture_walls_delta]", function(t) {
                this.level.layer.selected.setConfig("texWallDelta", parseFloat($(t.currentTarget).val()), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change", "select[name=path_texture_fill]", function(t) {
                this.level.layer.selected.setConfig("texFill", $(t.currentTarget).val(), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change", "select[name=path_texture_ground]", function(t) {
                this.level.layer.selected.setConfig("texGround", $(t.currentTarget).val(), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change", "select[name=path_texture_ground_edge]", function(t) {
                this.level.layer.selected.setConfig("texGroundEdge", $(t.currentTarget).val(), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change", "select[name=path_texture_ground_edge_side]", function(t) {
                this.level.layer.selected.setConfig("texGroundEdgeSide", $(t.currentTarget).val(), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change", "select[name=path_texture_wall]", function(t) {
                this.level.layer.selected.setConfig("texWall", $(t.currentTarget).val(), "change" == t.type), this.level.layer.selected.render()
            }.bind(this)), $("body").on("change", "textarea[name=path_data], textarea[name=object_data]", function(t) {
                this.level.layer.selected.setConfig("data", $(t.currentTarget).val(), "change" == t.type), this.render()
            }.bind(this)), $("body").on("click", ".delete_object", function(t) {
                this.level.layer.deleteObject(this.level.layer.selected), this.back()
            }.bind(this)), $("body").on("change input", "input[name=object_scale]", function(t) {
                this.level.layer.selected.setScale(parseFloat($(t.currentTarget).val()), "change" == t.type)
            }.bind(this)), $("body").on("change input", "input[name=object_rotation]", function(t) {
                this.level.layer.selected.setRotation(parseFloat($(t.currentTarget).val()), "change" == t.type)
            }.bind(this)), $("body").on("change", "input[type=range]", function(t) {
                $(this).blur()
            })
        }, s.prototype.update = function() {
            this.mouse.centerPressed ? this.cmb ? (this.level.x += (this.mouse.position.x - this.panMousePosition.x) * (1 / this.scale.x), this.level.y += (this.mouse.position.y - this.panMousePosition.y) * (1 / this.scale.y), this.panMousePosition = new PIXI.Point(this.mouse.position.x, this.mouse.position.y), this.updateGridPosition()) : (this.cmb = !0, this.panMousePosition = new PIXI.Point(this.mouse.position.x, this.mouse.position.y)) : this.cmb && (this.cmb = !1), null != this.level && (n.keyboard.getKeyJustPressed(n.keyboard.KEY_CTRL) && n.keyboard.getKeyPressed(n.keyboard.KEY_Z) && n.keyboard.getKeyPressed(n.keyboard.KEY_SHIFT) || n.keyboard.getKeyPressed(n.keyboard.KEY_CTRL) && n.keyboard.getKeyJustPressed(n.keyboard.KEY_Z) && n.keyboard.getKeyPressed(n.keyboard.KEY_SHIFT) || n.keyboard.getKeyPressed(n.keyboard.KEY_CTRL) && n.keyboard.getKeyPressed(n.keyboard.KEY_Z) && n.keyboard.getKeyJustPressed(n.keyboard.KEY_SHIFT) ? this.historyRedo() : (n.keyboard.getKeyJustPressed(n.keyboard.KEY_CTRL) && n.keyboard.getKeyPressed(n.keyboard.KEY_Z) || n.keyboard.getKeyPressed(n.keyboard.KEY_CTRL) && n.keyboard.getKeyJustPressed(n.keyboard.KEY_Z)) && this.historyUndo(), this.level.update())
        }, s.prototype.updateGridPosition = function() {
            this.grid.tilePosition = new PIXI.Point(this.level.x % this.snapGrid, this.level.y % this.snapGrid)
        }, s.prototype.render = function() {
            null != this.level && (this.level.render(), this.level.renderGUI())
        }, s.prototype.getMousePosition = function() {
            return new PIXI.Point(n.STAGE_WIDTH / 2 + (this.mouse.position.x - n.STAGE_WIDTH / 2) / this.scale.x - this.level.x, n.STAGE_HEIGHT / 2 + (this.mouse.position.y - n.STAGE_HEIGHT / 2) / this.scale.y - this.level.y)
        }, s.prototype.zoomDelta = function(t) {
            if (!(this.scale.x - t < .01)) {
                var e = n.STAGE_WIDTH * this.scale.x,
                    i = n.STAGE_HEIGHT * this.scale.y;
                this.scale = new PIXI.Point(this.scale.x - t, this.scale.y - t);
                var s = n.STAGE_WIDTH * this.scale.x,
                    o = n.STAGE_HEIGHT * this.scale.y;
                this.x += (e - s) / 2, this.y += (i - o) / 2
            }
        }, s.prototype.renderGUI = function(t) {
            switch (t) {
                case "level":
                    var e = this.gui.levelTemplate(this);
                    break;
                case "layer":
                    var e = this.gui.layerTemplate(this);
                    break;
                case "path":
                    var e = this.gui.pathTemplate(this);
                    break;
                case "object":
                    var e = this.gui.objectTemplate(this);
                    break;
                default:
                    console.error("GUI level not found")
            }
            $(this.gui.selector).html(e)
        }, s.prototype.back = function(t) {
            this.level && (this.level.back(), this.render())
        }, s.prototype.renderGrid = function() {
            var t = document.createElement("canvas");
            t.width = this.snapGrid, t.height = this.snapGrid;
            var e = t.getContext("2d");
            e.beginPath(), e.strokeStyle = "#666666", e.lineWidth = 1, e.moveTo(0, 0), e.lineTo(0, this.snapGrid), e.lineTo(this.snapGrid, this.snapGrid), e.stroke(), this.grid = new PIXI.extras.TilingSprite(PIXI.Texture.fromCanvas(t), this.snapGrid, this.snapGrid), this.grid.x = n.STAGE_WIDTH / 2, this.grid.y = n.STAGE_HEIGHT / 2, this.grid.anchor = new PIXI.Point(.5, .5), this.grid.width = 2 * n.STAGE_WIDTH, this.grid.height = 2 * n.STAGE_HEIGHT, this.addChild(this.grid)
        }, s.prototype.newLevel = function() {
            null != this.level && this.removeChild(this.level);
            var t = new o(this);
            this.level = t, this.level.init(), this.levels.push(t), this.addChild(this.level), this.render(), this.updateGridPosition(), this.historyReset()
        }, s.prototype.getObject = function(t) {
            for (var e = 0; e < this.config.objects.length; e++)
                if (this.config.objects[e].id == t) return this.config.objects[e];
            return null
        }, s.prototype.load = function(t) {
            var e = JSON.parse(t);
            this.newLevel(), this.level["import"](e), this.render()
        }, s.prototype["import"] = function() {
            $("#level_import").replaceWith($("#level_import").val("").clone(!0)), $("#level_import").trigger("click")
        }, s.prototype["export"] = function() {
            var t = JSON.stringify(this.level["export"]()),
                e = this.level.name + "_" + Math.floor(Date.now() / 1e3) + ".json",
                i = document.createElement("a");
            i.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(t)), i.setAttribute("download", e), i.style.display = "none", document.body.appendChild(i), i.click(), document.body.removeChild(i)
        }, s.prototype.historyReset = function() {
            console.info("Resetting history"), this.history = [JSON.stringify(this.level["export"]())], this.historyIndex = 0
        }, s.prototype.historyAddState = function() {
            var t = JSON.stringify(this.level["export"]());
            this.historyIndex < this.history.length - 1 && this.history.splice(this.historyIndex + 1, 1e4), t != this.history[this.history.length - 1] && (this.history.push(t), this.historyIndex++, console.info("Add state %i", this.historyIndex))
        }, s.prototype.historyUndo = function() {
            0 != this.historyIndex && (this.historyIndex--, console.info("Undo state %i", this.historyIndex), this.historyRestore())
        }, s.prototype.historyRedo = function() {
            this.historyIndex != this.history.length - 1 && (this.historyIndex++, console.info("Redo state %i", this.historyIndex), this.historyRestore())
        }, s.prototype.historyRestore = function() {
            this.level.reset(), this.level["import"](JSON.parse(this.history[this.historyIndex])), this.render()
        }
    }, {
        "../Common": 4,
        "../editor/Level": 10,
        "../editor/LevelLayer": 11
    }],
    10: [function(t, e, i) {
        function s(t) {
            this.editor = t, this.name = "New level", this.layers = [], this.layer = null, this.lmb = !1, this.rmb = !1, this.dragMovement = null, PIXI.Container.call(this)
        }
        var n = t("../Common"),
            o = t("../editor/Editor"),
            o = t("../editor/LevelLayer");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.x = n.STAGE_WIDTH / 4, this.y = n.STAGE_HEIGHT / 2, this.startingPoint = new PIXI.Graphics, this.startingPoint.beginFill(65280), this.startingPoint.drawCircle(0, 0, 5), this.startingPoint.endFill(), this.addChild(this.startingPoint)
        }, s.prototype.reset = function() {
            for (var t = this.children.length - 1; t >= 0; t--) this.removeChild(this.children[t]);
            this.addChild(this.startingPoint), this.layers = [], this.layer = null
        }, s.prototype.update = function() {
            if (null != this.layer) this.layer.update();
            else if (this.editor.mouse.rightPressed) {
                this.editor.getMousePosition();
                if (this.rmb) {
                    for (var t = 0; t < this.layers.length; t++) this.layers[t].moveAll(new PIXI.Point((-this.dragMovement.x), (-this.dragMovement.y)));
                    var e = this.editor.mouse.movement;
                    e.multiply(1 / this.editor.scale.x), this.dragMovement.x += e.x, this.dragMovement.y += e.y;
                    for (var t = 0; t < this.layers.length; t++) this.layers[t].moveAll(new PIXI.Point(this.dragMovement.x, this.dragMovement.y)), this.layers[t].render()
                } else this.rmb = !0, this.dragMovement = new PIXI.Point(0, 0)
            } else this.rmb && (this.rmb = !1, this.renderGUI(), this.editor.historyAddState())
        }, s.prototype.render = function() {
            for (var t = 0; t < this.layers.length; t++) this.layers[t].render()
        }, s.prototype.renderGUI = function() {
            this.layer ? this.layer.renderGUI() : this.editor.renderGUI("level")
        }, s.prototype.back = function(t) {
            this.layer && this.layer.back()
        }, s.prototype.newLayer = function(t) {
            this.layer = new o(this, t), this.layers.push(this.layer), this.layer.init(), this.addChild(this.layer), this.selectLayer(this.layer), this.editor.historyAddState()
        }, s.prototype.deleteLayer = function(t) {
            var e = this.layers.indexOf(t);
            e > -1 && (this.removeChild(this.layers[e]), this.layers.splice(e, 1), this.editor.historyAddState())
        }, s.prototype.selectLayer = function(t) {
            this.layer = t, this.render(), this.renderGUI()
        }, s.prototype.getLayerAtIndex = function(t) {
            return this.layers[t] ? this.layers[t] : null
        }, s.prototype["export"] = function() {
            for (var t = {
                    name: this.name,
                    layers: [],
                    length: this.getLength()
                }, e = 0; e < this.layers.length; e++) t.layers.push(this.layers[e]["export"]());
            return t
        }, s.prototype.getLength = function() {
            for (var t = 0; t < this.layers.length; t++)
                for (var e = 0; e < this.layers[t].objects.length; e++)
                    if ("level_end" == this.layers[t].objects[e].config.id) return Math.round(this.layers[t].objects[e].x - this.layers[t].objects[e].width);
            return 0
        }, s.prototype.getBounds = function() {
            for (var t = 0, e = 0, i = 0, s = 0, n = 0; n < this.layers.length; n++)
                for (var o = 0; o < this.layers[n].paths.length; o++)
                    for (var a = 0; a < this.layers[n].paths[o].bezier.points.length; a++) this.layers[n].paths[o].bezier.points[a].x < t ? t = this.layers[n].paths[o].bezier.points[a].x : this.layers[n].paths[o].bezier.points[a].x > e && (e = this.layers[n].paths[o].bezier.points[a].x), this.layers[n].paths[o].bezier.points[a].y < i ? i = this.layers[n].paths[o].bezier.points[a].y : this.layers[n].paths[o].bezier.points[a].y > s && (s = this.layers[n].paths[o].bezier.points[a].y);
            return [t, i, e, s]
        }, o.prototype.setName = function(t) {
            t = $.trim(t), "" != t && (this.name = t, this.editor.historyAddState())
        }, s.prototype["import"] = function(t) {
            this.name = t.name;
            for (var e = 0; e < t.layers.length; e++) {
                var i = new o(this, "");
                i["import"](t.layers[e]), this.layers.push(i), this.addChild(i)
            }
        }, s.prototype.toImage = function() {
            var t = this.getBounds();
            if (t[2] != t[0]) {
                t[0] -= 128, t[1] -= 256, t[2] += 128, t[3] += 256;
                for (var e = t[2] - t[0], i = t[3] - t[1], s = Math.min(.5, 8e3 / e), o = new PIXI.RenderTexture(n.renderer, e * s, i * s), a = 0; a < this.layers.length; a++) this.layers[a].moveAll(new PIXI.Point((-t[0]), (-t[1]))), this.layers[a].scale.set(s), this.layers[a].render();
                o.render(this);
                for (var a = 0; a < this.layers.length; a++) this.layers[a].moveAll(new PIXI.Point(t[0], t[1])), this.layers[a].scale.set(1), this.layers[a].render();
                var r = o.getBase64();
                return r
            }
        }
    }, {
        "../Common": 4,
        "../editor/Editor": 9,
        "../editor/LevelLayer": 11
    }],
    11: [function(t, e, i) {
        function s(t, e) {
            this.editor = t.editor, this.level = t, this.name = e ? e : "New layer #" + (this.level.layers.length + 1), this.paths = [], this.objects = [], this.depth = 0, this.idObject = "", this.selected = null, this.lmb = !1, this.rmb = !1, this.dragMovement = null, PIXI.Container.call(this)
        }
        var n = (t("../Common"), t("../editor/Editor"), t("../editor/Level"), t("../editor/LevelPath")),
            o = t("../editor/LevelObject");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {}, s.prototype.update = function() {
            if (null != this.selected) this.selected.update();
            else {
                if (this.editor.mouse.leftPressed) {
                    var t = this.editor.getMousePosition();
                    if (!this.lmb) {
                        this.lmb = !0;
                        var e = this.getObjectAtPoint(t);
                        if (null != e) this.selectObject(e);
                        else {
                            var i = this.getPathAtPoint(t, 50);
                            null != i ? this.selectObject(i) : "" == this.idObject ? this.newPath(t) : this.newObject(this.idObject, t)
                        }
                    }
                } else this.lmb && (this.lmb = !1);
                if (this.editor.mouse.rightPressed) {
                    var t = this.editor.getMousePosition();
                    if (this.rmb) {
                        this.moveAll(new PIXI.Point((-this.dragMovement.x), (-this.dragMovement.y)));
                        var s = this.editor.mouse.movement;
                        s.multiply(1 / this.editor.scale.x), this.dragMovement.x += s.x, this.dragMovement.y += s.y, this.moveAll(new PIXI.Point(this.dragMovement.x, this.dragMovement.y)), this.render()
                    } else this.rmb = !0, this.dragMovement = new PIXI.Point(0, 0)
                } else this.rmb && (this.rmb = !1, this.editor.historyAddState())
            }
            $("input:focus, textarea:focus").length > 0
        }, s.prototype.render = function() {
            for (var t = 0, e = 0, i = 0; i < this.paths.length; i++) this.removeChild(this.paths[i]), t = Math.min(this.paths[i].config.depth, t), e = Math.max(this.paths[i].config.depth, e);
            for (var i = 0; i < this.objects.length; i++) this.removeChild(this.objects[i]), t = Math.min(this.objects[i].config.depth, t), e = Math.max(this.objects[i].config.depth, e);
            for (var s = t; s <= e; s++) {
                for (var i = 0; i < this.paths.length; i++) this.paths[i].config.depth == s && (this.addChild(this.paths[i]), this.paths[i].render());
                for (var i = 0; i < this.objects.length; i++) this.objects[i].config.depth == s && (this.addChild(this.objects[i]), this.objects[i].render())
            }
            null != this.level.layer && this.level.layer != this ? this.alpha = .5 : this.alpha = 1
        }, s.prototype.renderGUI = function() {
            this.selected ? this.selected.renderGUI() : this.editor.renderGUI("layer")
        }, s.prototype.back = function(t) {
            this.selected ? this.selected.back() : (this.level.layer = null, this.idObject = "", this.editor.historyAddState())
        }, s.prototype.setIdObject = function(t) {
            this.level.layer.idObject != t && (this.level.layer.idObject = t, this.editor.historyAddState())
        }, s.prototype.selectObject = function(t) {
            this.selected = t, this.render(), this.renderGUI(), this.editor.historyAddState()
        }, s.prototype.newObject = function(t, e) {
            var i = this.editor.getObject(t);
            if (null != i) {
                var s = new o(this);
                s.init(i), s.x = e.x, s.y = e.y, this.objects.push(s), this.addChild(s), this.selectObject(s)
            }
        }, s.prototype.newPath = function(t) {
            var e = new n(this);
            e.init(), e.addPoint(t.x, t.y), this.paths.push(e), this.addChild(e), this.selectObject(e), this.editor.historyAddState()
        }, s.prototype.deleteObject = function(t) {
            var e = this.objects.indexOf(t);
            e > -1 && (this.removeChild(this.objects[e]), this.objects.splice(e, 1), this.editor.historyAddState())
        }, s.prototype.deletePath = function(t) {
            var e = this.paths.indexOf(t);
            e > -1 && (this.removeChild(this.paths[e]), this.paths.splice(e, 1), this.editor.historyAddState())
        }, s.prototype.moveAll = function(t) {
            for (var e = 0; e < this.paths.length; e++) this.paths[e].move(Math.round(t.x / this.editor.snapGrid) * this.editor.snapGrid, Math.round(t.y / this.editor.snapGrid) * this.editor.snapGrid);
            for (var e = 0; e < this.objects.length; e++) this.objects[e].x += Math.round(t.x / this.editor.snapGrid) * this.editor.snapGrid, this.objects[e].y += Math.round(t.y / this.editor.snapGrid) * this.editor.snapGrid
        }, s.prototype.getObjectAtPoint = function(t) {
            for (var e = null, i = 0; i < this.objects.length; i++) this.objects[i].isPointInside(t) && (null == e || e.depth < this.objects[i].depth) && (e = this.objects[i]);
            return e
        }, s.prototype.getPathAtPoint = function(t, e) {
            for (var i = null, s = null, n = 0; n < this.paths.length; n++)
                for (var o = this.paths[n].bezier.getDrawingPoints(), a = 0; a < o.length - 1; a++) {
                    var r = new PIXI.Point(o[a + 1].x - o[a].x, o[a + 1].y - o[a].y),
                        h = new PIXI.Point(r.x, r.y);
                    h.normalize();
                    var l = new PIXI.Point(t.x - o[a].x, t.y - o[a].y),
                        c = l.dotProduct(r) / r.getLength(),
                        p = new PIXI.Point(h.x * c, h.y * c);
                    if ((p.x / r.x < 0 || p.x / r.x > 1) && p.x != r.x || p.y / r.y < 0 || p.y / r.y > 1) var u = new PIXI.Point(t.x - o[a].x, t.y - o[a].y),
                        d = new PIXI.Point(t.x - o[a + 1].x, t.y - o[a + 1].y),
                        g = Math.min(u.getLength(), d.getLength());
                    else var m = new PIXI.Point(l.x - p.x, l.y - p.y),
                        g = m.getLength();
                    (null == i || s > g) && g < e && (i = this.paths[n], s = g)
                }
            return i
        }, s.prototype.setName = function(t) {
            t = $.trim(t), "" != t && (this.name = t, this.editor.historyAddState())
        }, s.prototype.setDepth = function(t) {
            this.depth = t, this.level.children.sort(function(t, e) {
                return t.depth < e.depth ? -1 : t.depth > e.depth ? 1 : 0
            }), this.level.layers.sort(function(t, e) {
                return t.depth < e.depth ? -1 : t.depth > e.depth ? 1 : 0
            }), this.editor.historyAddState()
        }, s.prototype.setSelectedDepth = function(t) {
            null != this.selected && (this.selected.config.depth = t, this.children.sort(function(t, e) {
                return t.config.depth < e.config.depth ? -1 : t.config.depth > e.config.depth ? 1 : 0
            }), this.paths.sort(function(t, e) {
                return t.depth < e.depth ? -1 : t.depth > e.depth ? 1 : 0
            }), this.objects.sort(function(t, e) {
                return t.depth < e.depth ? -1 : t.depth > e.depth ? 1 : 0
            }), this.editor.historyAddState())
        }, s.prototype["export"] = function() {
            var t = {
                name: this.name,
                depth: this.depth,
                paths: [],
                objects: []
            };
            this.level.layer == this && (t.selected = !0, t.idObject = this.idObject);
            for (var e = 0; e < this.objects.length; e++) t.objects.push(this.objects[e]["export"]());
            for (var e = 0; e < this.paths.length; e++) t.paths.push(this.paths[e]["export"]());
            return t.objects.sort(function(t, e) {
                return t.x < e.x ? -1 : t.x > e.x ? 1 : 0
            }), t.paths.sort(function(t, e) {
                return t.bounds[0] < e.bounds[0] ? -1 : t.bounds[0] > e.bounds[0] ? 1 : 0
            }), t
        }, s.prototype["import"] = function(t) {
            this.name = t.name, this.depth = t.depth;
            for (var e = 0; e < t.objects.length; e++) {
                var i = new o(this);
                i["import"](t.objects[e]), this.objects.push(i)
            }
            for (var e = 0; e < t.paths.length; e++) {
                var s = new n(this);
                s["import"](t.paths[e]), this.paths.push(s)
            }
            t.selected && (this.level.layer = this, this.idObject = t.idObject)
        }
    }, {
        "../Common": 4,
        "../editor/Editor": 9,
        "../editor/Level": 10,
        "../editor/LevelObject": 12,
        "../editor/LevelPath": 13
    }],
    12: [function(t, e, i) {
        function s(t) {
            this.editor = t.editor, this.layer = t, this.assetManager = p3.AssetManager.instance, this.config = {
                id: "",
                texture: "",
                anchor: {
                    x: .5,
                    y: .5
                },
                scale: {
                    x: 1,
                    y: 1
                },
                rotation: 0,
                depth: 0,
                data: ""
            }, this.sprite = null, this.wireframe = null, this.isDragging = !1, this.lmb = !1, PIXI.Container.call(this)
        }
        var n = t("../Common");
        t("../editor/Editor"), t("../editor/Level"), t("../editor/LevelLayer");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            this.config.id = t.id, this.config.texture = t.texture, this.config.anchor = t.anchor, t.scale && (this.config.scale = {
                x: t.scale,
                y: t.scale
            }), t.data && (this.config.data = t.data), this.lmb = !0, this.isDragging = !0
        }, s.prototype.update = function() {
            if (this.editor.mouse.leftPressed) {
                var t = this.editor.getMousePosition();
                if (this.lmb) {
                    if (this.isDragging) {
                        var e = this.editor.mouse.movement;
                        e.multiply(1 / this.editor.scale.x), this.x += e.x, this.y += e.y
                    }
                } else {
                    var t = this.editor.getMousePosition(),
                        i = this.layer.getObjectAtPoint(t);
                    if (this.isPointInside(t) || i == this) this.isDragging = !0;
                    else {
                        if (null == i) return void this.layer.newObject(this.config.id, t);
                        var i = this.layer.getObjectAtPoint(t);
                        if (null != i) return void this.layer.selectObject(i)
                    }
                    this.lmb = !0
                }
            } else this.lmb && (this.lmb = !1, this.isDragging = !1, this.editor.historyAddState());
            var s = $("input:focus, textarea:focus").length > 0;
            !n.keyboard.getKeyJustPressed(n.keyboard.KEY_C) || n.keyboard.getKeyPressed(n.keyboard.KEY_CTRL) || s || $(".delete_object").trigger("click"), !n.keyboard.getKeyJustPressed(n.keyboard.KEY_B) || n.keyboard.getKeyPressed(n.keyboard.KEY_CTRL) || s || $(".back").trigger("click")
        }, s.prototype.render = function() {
            this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.scale = new PIXI.Point(this.config.scale.x, this.config.scale.y), null != this.sprite && this.removeChild(this.sprite), null != this.wireframe && this.removeChild(this.wireframe), this.sprite = new PIXI.Sprite(this.assetManager.getTexture(this.config.texture)), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.addChild(this.sprite), this.wireframe = new PIXI.Graphics, this.wireframe.lineStyle(1, 16711680, 1), this.wireframe.moveTo(-this.sprite.anchor.x * this.sprite.width, -this.sprite.anchor.y * this.sprite.height), this.wireframe.lineTo(+(1 - this.sprite.anchor.x) * this.sprite.width, -this.sprite.anchor.y * this.sprite.height), this.wireframe.lineTo(+(1 - this.sprite.anchor.x) * this.sprite.width, +(1 - this.sprite.anchor.y) * this.sprite.height), this.wireframe.lineTo(-this.sprite.anchor.x * this.sprite.width, +(1 - this.sprite.anchor.y) * this.sprite.height), this.wireframe.lineTo(-this.sprite.anchor.x * this.sprite.width, -this.sprite.anchor.y * this.sprite.height), this.wireframe.beginFill(16711680), this.wireframe.drawCircle(0, 0, 5), this.wireframe.endFill, this.wireframe.visible = this.layer.selected == this, this.addChild(this.wireframe)
        }, s.prototype.renderGUI = function() {
            this.editor.renderGUI("object")
        }, s.prototype.back = function() {
            this.layer.selected = null, this.editor.historyAddState()
        }, s.prototype.setScale = function(t, e) {
            this.config.scale.x = t, this.config.scale.y = t, this.scale.set(t), e && this.editor.historyAddState()
        }, s.prototype.setRotation = function(t, e) {
            this.config.rotation = t, this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, e && this.editor.historyAddState()
        }, s.prototype.setConfig = function(t, e, i) {
            this.config[t] = e, i && this.editor.historyAddState()
        }, s.prototype.isPointInside = function(t) {
            var e = new PIXI.Point(t.x, t.y);
            return 0 != this.rotation && e.rotateAround(new PIXI.Point(this.x, this.y), -this.rotation), !(e.x < this.x - this.sprite.width * this.scale.x * this.sprite.anchor.x) && (!(e.x > this.x + this.sprite.width * this.scale.x * (1 - this.sprite.anchor.x)) && (!(e.y < this.y - this.sprite.height * this.scale.y * this.sprite.anchor.y) && !(e.y > this.y + this.sprite.height * this.scale.y * (1 - this.sprite.anchor.y))))
        }, s.prototype["export"] = function() {
            var t = jQuery.extend(!0, {}, this.config);
            return t.position = {
                x: Math.round(this.x),
                y: Math.round(this.y)
            }, this.layer.selected == this && (t.selected = !0), t
        }, s.prototype["import"] = function(t) {
            this.x = t.position.x, this.y = t.position.y, this.config.id = t.id, this.config.texture = t.texture, this.config.anchor = {
                x: t.anchor.x,
                y: t.anchor.y
            }, this.config.scale = {
                x: t.scale.x,
                y: t.scale.y
            }, this.config.rotation = t.rotation, this.config.depth = t.depth, this.config.data = t.data, t.selected && (this.layer.selected = this)
        }
    }, {
        "../Common": 4,
        "../editor/Editor": 9,
        "../editor/Level": 10,
        "../editor/LevelLayer": 11
    }],
    13: [function(t, e, i) {
        function s(t) {
            this.editor = t.editor, this.layer = t, this.assetManager = p3.AssetManager.instance, this.config = {
                closed: !1,
                depth: 0,
                collisions: 1,
                texFill: "theme_01_fill",
                texGround: "theme_01_ground",
                texGroundEdge: "theme_01_ground_edge",
                texWall: "theme_01_wall",
                texFillPadding: 512,
                texFillSize: 256,
                texGroundSize: 160,
                texGroundDelta: .1,
                texWallSize: 160,
                texWallDelta: .1,
                texWallAngle: 70,
                texGroundEdgeSide: "",
                data: ""
            }, this.bezier = new o, this.bezier.cacheDrawingPoints = !1, this.pointIndex = -1, this.wireframe = null, this.textures = null, this.lmb = !1, this.rmb = !1, this.dragMovement = null, PIXI.Container.call(this)
        }
        var n = t("../Common"),
            o = (t("../editor/Editor"), t("../editor/Level"), t("../editor/LevelLayer"), t("../editor/BezierPath"));
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {}, s.prototype.update = function() {
            if (this.editor.mouse.leftPressed) {
                var t = this.editor.getMousePosition();
                if (!this.lmb && this.editor.mouse.leftJustPressed) {
                    if (this.lmb = !0, this.pointIndex = this.getPointAt(t.x, t.y), this.pointIndex == -1) {
                        var e = this.bezier.points[this.bezier.points.length - 1],
                            i = t;
                        if (this.config.closed || e.x < i.x) this.addPoint(e.x + (i.x - e.x) / 2, e.y), this.addPoint(i.x - (i.x - e.x) / 2, i.y), this.addPoint(i.x, i.y), this.pointIndex = this.bezier.points.length - 1;
                        else if (this.bezier.points.length > 1 && i.x > this.bezier.getFirstPoint().x)
                            for (var s = 3; s < this.bezier.points.length; s += 3)
                                if (this.bezier.points[s].x > i.x) {
                                    var e = this.bezier.points[s - 3],
                                        o = this.bezier.points[s];
                                    this.addPoint(o.x - (o.x - i.x) / 2, i.y, s - 1), this.addPoint(i.x, i.y, s - 1), this.addPoint(e.x + (i.x - e.x) / 2, i.y, s - 1), this.pointIndex = s;
                                    break
                                }
                        this.render()
                    }
                } else if (this.lmb && this.pointIndex != -1) {
                    var a = this.movePoint(this.pointIndex, t.x, t.y);
                    a && this.render()
                }
            } else this.lmb && (this.lmb = !1, this.render(), this.editor.historyAddState());
            if (this.editor.mouse.rightPressed) {
                var t = this.editor.getMousePosition();
                if (this.rmb) {
                    var r = this.editor.mouse.movement;
                    r.multiply(1 / this.editor.scale.x), this.move(-Math.round(this.dragMovement.x / this.editor.snapGrid) * this.editor.snapGrid, -Math.round(this.dragMovement.y / this.editor.snapGrid) * this.editor.snapGrid), this.dragMovement.x += r.x, this.dragMovement.y += r.y, this.move(Math.round(this.dragMovement.x / this.editor.snapGrid) * this.editor.snapGrid, Math.round(this.dragMovement.y / this.editor.snapGrid) * this.editor.snapGrid), this.render()
                } else this.rmb = !0, this.dragMovement = new PIXI.Point(0, 0)
            } else this.rmb && (this.rmb = !1, this.editor.historyAddState());
            var h = $("input:focus, textarea:focus").length > 0;
            if (n.keyboard.getKeyJustPressed(n.keyboard.KEY_C) && !n.keyboard.getKeyPressed(n.keyboard.KEY_CTRL) && !h && this.pointIndex % 3 == 0 && this.bezier.points.length > 1) {
                var l = this.pointIndex == this.bezier.points.length - 1;
                this.deletePoint(this.pointIndex), l && (this.pointIndex -= 3), this.render()
            }!n.keyboard.getKeyJustPressed(n.keyboard.KEY_B) || n.keyboard.getKeyPressed(n.keyboard.KEY_CTRL) || h || $(".back").trigger("click"), n.keyboard.getKeyJustPressed(n.keyboard.KEY_W) && !h && (this.wireframe.visible = !this.wireframe.visible)
        }, s.prototype.render = function() {
            if (null != this.wireframe && this.removeChild(this.wireframe), null != this.textures && this.removeChild(this.textures), this.wireframe = new PIXI.Graphics, this.textures = new PIXI.Container, this.bezier.points.length > 1) {
                var t = this.bezier.getDrawingPoints();
                this.bezier.getDrawingPointsNormals();
                if ("" != this.config.texFill) {
                    for (var e = null, i = [], s = 0; s < t.length; s++) i.push(new poly2tri.Point(t[s].x, t[s].y)), (null == e || e < t[s].y) && (e = t[s].y);
                    this.config.closed ? i[0].x == i[i.length - 1].x && i[0].y == i[i.length - 1].y && i.splice(i.length - 1, 1) : (i.push({
                        x: t[t.length - 1].x,
                        y: e + this.config.texFillPadding
                    }), i.push({
                        x: t[0].x,
                        y: e + this.config.texFillPadding
                    }));
                    try {
                        var n = new poly2tri.SweepContext(i);
                        n.triangulate();
                        var o = n.getTriangles()
                    } catch (a) {
                        console.log("Triangulation failed")
                    }
                    if (o) {
                        for (var r = this.assetManager.getTexture(this.config.texFill), h = new Float32Array(6 * o.length), l = new Float32Array(6 * o.length), c = new Uint16Array(3 * o.length), p = this.config.texFillSize, s = 0; s < o.length; s++) {
                            var u = o[s].getPoints();
                            h.set([u[0].x, u[0].y, u[1].x, u[1].y, u[2].x, u[2].y], 6 * s), l.set([u[0].x / p, u[0].y / p, u[1].x / p, u[1].y / p, u[2].x / p, u[2].y / p], 6 * s), c.set([0 + 3 * s, 1 + 3 * s, 2 + 3 * s], 3 * s)
                        }
                        var d = new PIXI.mesh.Mesh(r, h, l, c, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                        this.textures.addChild(d)
                    }
                }
                if ("" != this.config.texWall) {
                    for (var g = this.bezier.getGroundSegments(this.config.texWallAngle, 360), m = this.config.texWallSize, f = this.config.texWallDelta, y = 0, _ = 0; _ < g.length; _++) y += g[_].points.length - 1;
                    for (var r = this.assetManager.getTexture(this.config.texWall), h = new Float32Array(8 * y), l = new Float32Array(8 * y), c = new Uint16Array(6 * y), x = 0, _ = 0; _ < g.length; _++)
                        for (var v = 0, T = 0, s = 0; s < g[_].normals.length - 1; s++) {
                            h.set([g[_].points[s].x - g[_].normals[s].x * (m * f), g[_].points[s].y - g[_].normals[s].y * (m * f), g[_].points[s + 1].x - g[_].normals[s + 1].x * (m * f), g[_].points[s + 1].y - g[_].normals[s + 1].y * (m * f), g[_].points[s + 1].x + g[_].normals[s + 1].x * (m * (1 - f)), g[_].points[s + 1].y + g[_].normals[s + 1].y * (m * (1 - f)), g[_].points[s].x + g[_].normals[s].x * (m * (1 - f)), g[_].points[s].y + g[_].normals[s].y * (m * (1 - f))], 8 * x);
                            var b = new PIXI.Point(g[_].points[s].x - g[_].points[s + 1].x, g[_].points[s].y - g[_].points[s + 1].y);
                            T = b.getLength(), l.set([v / m, 0, (v + T) / m, 0, (v + T) / m, 1, v / m, 1], 8 * x), c.set([0 + 4 * x, 1 + 4 * x, 2 + 4 * x, 0 + 4 * x, 2 + 4 * x, 3 + 4 * x], 6 * x), v += T, this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(h[8 * x + 0], h[8 * x + 0 + 1]), this.wireframe.lineTo(h[8 * x + 2], h[8 * x + 2 + 1]), this.wireframe.lineTo(h[8 * x + 4], h[8 * x + 4 + 1]), this.wireframe.lineTo(h[8 * x + 6], h[8 * x + 6 + 1]), this.wireframe.lineTo(h[8 * x + 0], h[8 * x + 0 + 1]), this.wireframe.lineTo(h[8 * x + 4], h[8 * x + 4 + 1]), x++
                        }
                    var d = new PIXI.mesh.Mesh(r, h, l, c, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                    this.textures.addChild(d)
                }
                var g = this.bezier.getGroundSegments(0, this.config.texWallAngle, "" == this.config.texGroundEdge),
                    w = this.config.texGroundSize,
                    f = this.config.texGroundDelta;
                if ("" != this.config.texGround) {
                    for (var y = 0, _ = 0; _ < g.length; _++) y += g[_].points.length - 1;
                    for (var r = this.assetManager.getTexture(this.config.texGround), h = new Float32Array(8 * y), l = new Float32Array(8 * y), c = new Uint16Array(6 * y), x = 0, _ = 0; _ < g.length; _++) {
                        0 != _ || "right" != this.config.texGroundEdgeSide && "none" != this.config.texGroundEdgeSide || (g[_].normals[0] = {
                            x: 0,
                            y: 1
                        }), _ != g.length - 1 || "left" != this.config.texGroundEdgeSide && "none" != this.config.texGroundEdgeSide || (g[_].normals[g[_].normals.length - 1] = {
                            x: 0,
                            y: 1
                        });
                        for (var T = 0, s = 0; s < g[_].normals.length - 1; s++) {
                            var b = new PIXI.Point(g[_].points[s].x - g[_].points[s + 1].x, g[_].points[s].y - g[_].points[s + 1].y);
                            T += b.getLength()
                        }
                        for (var m = T / Math.max(1, Math.round(T / w)), v = 0, T = 0, s = 0; s < g[_].normals.length - 1; s++) {
                            h.set([g[_].points[s].x - g[_].normals[s].x * (m * f), g[_].points[s].y - g[_].normals[s].y * (w * f), g[_].points[s + 1].x - g[_].normals[s + 1].x * (m * f), g[_].points[s + 1].y - g[_].normals[s + 1].y * (w * f), g[_].points[s + 1].x + g[_].normals[s + 1].x * (m * (1 - f)), g[_].points[s + 1].y + g[_].normals[s + 1].y * (w * (1 - f)), g[_].points[s].x + g[_].normals[s].x * (m * (1 - f)), g[_].points[s].y + g[_].normals[s].y * (w * (1 - f))], 8 * x);
                            var b = new PIXI.Point(g[_].points[s].x - g[_].points[s + 1].x, g[_].points[s].y - g[_].points[s + 1].y);
                            T = b.getLength(), l.set([v / m, 0, (v + T) / m, 0, (v + T) / m, 1, v / m, 1], 8 * x), c.set([0 + 4 * x, 1 + 4 * x, 2 + 4 * x, 0 + 4 * x, 2 + 4 * x, 3 + 4 * x], 6 * x), v += T, this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(h[8 * x + 0], h[8 * x + 0 + 1]), this.wireframe.lineTo(h[8 * x + 2], h[8 * x + 2 + 1]), this.wireframe.lineTo(h[8 * x + 4], h[8 * x + 4 + 1]), this.wireframe.lineTo(h[8 * x + 6], h[8 * x + 6 + 1]), this.wireframe.lineTo(h[8 * x + 0], h[8 * x + 0 + 1]), this.wireframe.lineTo(h[8 * x + 4], h[8 * x + 4 + 1]), x++
                        }
                    }
                    var d = new PIXI.mesh.Mesh(r, h, l, c, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                    this.textures.addChild(d)
                }
                if ("" != this.config.texGroundEdge) {
                    for (var r = this.assetManager.getTexture(this.config.texGroundEdge), h = new Float32Array(16 * g.length), l = new Float32Array(16 * g.length), c = new Uint16Array(12 * g.length), _ = 0; _ < g.length; _++) {
                        for (var T = 0, s = 0; s < g[_].normals.length - 1; s++) {
                            var b = new PIXI.Point(g[_].points[s].x - g[_].points[s + 1].x, g[_].points[s].y - g[_].points[s + 1].y);
                            T += b.getLength()
                        }
                        var m = T / Math.round(T / w);
                        if (_ > 0 || "left" == this.config.texGroundEdgeSide || "" == this.config.texGroundEdgeSide) {
                            var S = g[_].points[0],
                                P = g[_].normals[0],
                                b = new PIXI.Point(g[_].points[0].x - g[_].points[1].x, g[_].points[0].y - g[_].points[1].y);
                            b.normalize(), h.set([S.x - P.x * (m * f) + b.x * m, S.y - P.y * (w * f - b.y * w), S.x - P.x * (m * f), S.y - P.y * (w * f), S.x + P.x * (m * (1 - f)), S.y + P.y * (w * (1 - f)), S.x + P.x * (m * (1 - f)) + b.x * m, S.y + P.y * (w * (1 - f) + b.y * w)], 8 * _ * 2), l.set([0, 0, 1, 0, 1, 1, 0, 1], 8 * _ * 2), c.set([0 + 2 * _ * 4, 1 + 2 * _ * 4, 2 + 2 * _ * 4, 0 + 2 * _ * 4, 2 + 2 * _ * 4, 3 + 2 * _ * 4], 6 * _ * 2), this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(h[2 * _ * 8 + 0], h[2 * _ * 8 + 0 + 1]), this.wireframe.lineTo(h[2 * _ * 8 + 2], h[2 * _ * 8 + 2 + 1]), this.wireframe.lineTo(h[2 * _ * 8 + 4], h[2 * _ * 8 + 4 + 1]), this.wireframe.lineTo(h[2 * _ * 8 + 6], h[2 * _ * 8 + 6 + 1]), this.wireframe.lineTo(h[2 * _ * 8 + 0], h[2 * _ * 8 + 0 + 1]), this.wireframe.lineTo(h[2 * _ * 8 + 4], h[2 * _ * 8 + 4 + 1])
                        }
                        if (_ < g.length - 1 || "right" == this.config.texGroundEdgeSide || "" == this.config.texGroundEdgeSide) {
                            var I = g[_].normals.length - 1,
                                S = g[_].points[g[_].normals.length - 1],
                                P = g[_].normals[g[_].normals.length - 1],
                                b = new PIXI.Point(g[_].points[I].x - g[_].points[I - 1].x, g[_].points[I].y - g[_].points[I - 1].y);
                            b.normalize(), h.set([S.x - P.x * (m * f) + b.x * m, S.y - P.y * (w * f - b.y * w), S.x - P.x * (m * f), S.y - P.y * (w * f), S.x + P.x * (m * (1 - f)), S.y + P.y * (w * (1 - f)), S.x + P.x * (m * (1 - f)) + b.x * m, S.y + P.y * (w * (1 - f) + b.y * w)], 8 * (2 * _ + 1)), l.set([0, 0, 1, 0, 1, 1, 0, 1], 8 * (2 * _ + 1)), c.set([0 + 4 * (2 * _ + 1), 1 + 4 * (2 * _ + 1), 2 + 4 * (2 * _ + 1), 0 + 4 * (2 * _ + 1), 2 + 4 * (2 * _ + 1), 3 + 4 * (2 * _ + 1)], 6 * (2 * _ + 1)), this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(h[8 * (2 * _ + 1) + 0], h[8 * (2 * _ + 1) + 0 + 1]), this.wireframe.lineTo(h[8 * (2 * _ + 1) + 2], h[8 * (2 * _ + 1) + 2 + 1]), this.wireframe.lineTo(h[8 * (2 * _ + 1) + 4], h[8 * (2 * _ + 1) + 4 + 1]), this.wireframe.lineTo(h[8 * (2 * _ + 1) + 6], h[8 * (2 * _ + 1) + 6 + 1]), this.wireframe.lineTo(h[8 * (2 * _ + 1) + 0], h[8 * (2 * _ + 1) + 0 + 1]), this.wireframe.lineTo(h[8 * (2 * _ + 1) + 4], h[8 * (2 * _ + 1) + 4 + 1])
                        }
                    }
                    var d = new PIXI.mesh.Mesh(r, h, l, c, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                    this.textures.addChild(d)
                }
            }
            this.wireframe.moveTo(this.bezier.points[0].x, this.bezier.points[0].y), this.wireframe.lineStyle(2, 16711680);
            for (var s = 1; s < this.bezier.points.length; s += 3) this.wireframe.bezierCurveTo(this.bezier.points[s].x, this.bezier.points[s].y, this.bezier.points[s + 1].x, this.bezier.points[s + 1].y, this.bezier.points[s + 2].x, this.bezier.points[s + 2].y);
            this.wireframe.lineStyle(2, 10027008, .5);
            for (var s = 0; s < this.bezier.points.length - 1; s += 3) this.wireframe.moveTo(this.bezier.points[s].x, this.bezier.points[s].y), this.wireframe.lineTo(this.bezier.points[s + 1].x, this.bezier.points[s + 1].y), this.wireframe.moveTo(this.bezier.points[s + 2].x, this.bezier.points[s + 2].y), this.wireframe.lineTo(this.bezier.points[s + 3].x, this.bezier.points[s + 3].y);
            for (var s = 0; s < this.bezier.points.length; s++) s % 3 == 0 && (s == this.pointIndex ? this.wireframe.lineStyle(2, 65280, 1) : this.wireframe.lineStyle(0, 16711680, 0), this.wireframe.beginFill(16711680), this.wireframe.drawCircle(this.bezier.points[s].x, this.bezier.points[s].y, 5), this.wireframe.endFill());
            for (var s = 0; s < this.bezier.points.length; s++) s % 3 != 0 && (s == this.pointIndex ? this.wireframe.lineStyle(2, 65280, 1) : this.wireframe.lineStyle(0, 16711680, 0), this.wireframe.beginFill(10027161), this.wireframe.drawCircle(this.bezier.points[s].x, this.bezier.points[s].y, 3), this.wireframe.endFill());
            this.addChild(this.textures), this.addChild(this.wireframe), this.wireframe.visible = this.layer.selected == this
        }, s.prototype.renderGUI = function() {
            this.editor.renderGUI("path")
        }, s.prototype.back = function() {
            this.layer.selected = null, this.bezier.points.length <= 1 && this.layer.deletePath(this), this.editor.historyAddState()
        }, s.prototype.addPoint = function(t, e, i) {
            t = Math.round(t / this.editor.snapGrid) * this.editor.snapGrid, e = Math.round(e / this.editor.snapGrid) * this.editor.snapGrid, this.bezier.addPoint(t, e, i)
        }, s.prototype.deletePoint = function(t) {
            var e = 0 == t,
                i = t == this.bezier.points.length - 1;
            e && this.bezier.deletePoint(t + 2), i || this.bezier.deletePoint(t + 1), this.bezier.deletePoint(t), e || this.bezier.deletePoint(t - 1), i && this.bezier.deletePoint(t - 2)
        }, s.prototype.movePoint = function(t, e, i) {
            var s = new PIXI.Point(this.bezier.points[t].x, this.bezier.points[t].y);
            return this.bezier.points[t].x = Math.round(e / this.editor.snapGrid) * this.editor.snapGrid, this.bezier.points[t].y = Math.round(i / this.editor.snapGrid) * this.editor.snapGrid, (this.bezier.points[t].x != s.x || this.bezier.points[t].y != s.y) && (t % 3 == 0 && (t > 0 && (this.bezier.points[t - 1].x += this.bezier.points[t].x - s.x, this.bezier.points[t - 1].y += this.bezier.points[t].y - s.y), t < this.bezier.points.length - 1 && (this.bezier.points[t + 1].x += this.bezier.points[t].x - s.x, this.bezier.points[t + 1].y += this.bezier.points[t].y - s.y)), !0)
        }, s.prototype.getPointAt = function(t, e) {
            t = Math.round(t / this.editor.snapGrid) * this.editor.snapGrid, e = Math.round(e / this.editor.snapGrid) * this.editor.snapGrid;
            for (var i = this.bezier.points.length - 1; i >= 0; i--)
                if (i % 3 != 0 && this.bezier.points[i].x == t && this.bezier.points[i].y == e) return i;
            for (var i = this.bezier.points.length - 1; i >= 0; i--)
                if (i % 3 == 0 && this.bezier.points[i].x == t && this.bezier.points[i].y == e) return i;
            return -1
        }, s.prototype.move = function(t, e) {
            for (var i = 0; i < this.bezier.points.length; i++) this.bezier.points[i].x += t, this.bezier.points[i].y += e
        }, s.prototype.setConfig = function(t, e, i) {
            this.config[t] = e, i && this.editor.historyAddState()
        }, s.prototype["export"] = function() {
            var t = jQuery.extend(!0, {}, this.config);
            t.points = this.bezier.points, t.bounds = [null, null];
            for (var e = 0; e < this.bezier.points.length; e++) t.bounds[0] = null === t.bounds[0] ? this.bezier.points[e].x : Math.min(t.bounds[0], this.bezier.points[e].x), t.bounds[1] = null === t.bounds[1] ? this.bezier.points[e].x : Math.max(t.bounds[1], this.bezier.points[e].x);
            return this.layer.selected == this && (t.selected = !0, t.pointIndex = this.pointIndex), t
        }, s.prototype["import"] = function(t) {
            this.config.closed = t.closed, this.config.depth = t.depth, this.config.collisions = t.collisions, this.config.texFill = t.texFill, this.config.texGround = t.texGround, this.config.texGroundEdge = t.texGroundEdge, this.config.texGroundEdgeSide = t.texGroundEdgeSide, this.config.texWall = t.texWall, this.config.texFillPadding = t.texFillPadding, this.config.texFillSize = t.texFillSize, this.config.texGroundSize = t.texGroundSize, this.config.texGroundDelta = t.texGroundDelta, this.config.texWallSize = t.texWallSize, this.config.texWallDelta = t.texWallDelta, this.config.texWallAngle = t.texWallAngle, this.config.data = t.data, t.selected && (this.layer.selected = this, this.pointIndex = t.pointIndex);
            for (var e = 0; e < t.points.length; e++) this.bezier.addPoint(t.points[e].x, t.points[e].y)
        }
    }, {
        "../Common": 4,
        "../editor/BezierPath": 8,
        "../editor/Editor": 9,
        "../editor/Level": 10,
        "../editor/LevelLayer": 11
    }],
    14: [function(t, e, i) {
        function s() {
            o.call(this, "avatar"), this.level = null, this.animationHolder = null, this.xlr8filter = new c, this.allowPathCollisions = !0, this.spine = null, this.spineData = null, this.currentAnimation = "", this.spineSpeed = 1, this._characterData = this._assetManager.getJSON("config").characters[n.savedData.character], this._powerupsData = this._assetManager.getJSON("config").powerups, this.config = {
                depth: 0
            }, this.abilities = {
                invulnerability: !1,
                fire: !1,
                fly: !1,
                runfast: !1
            }, this.walkSounds = [
                ["sfx_ben_run_step_l_gravel", "sfx_ben_run_step_r_gravel"],
                ["sfx_ben_run_step_l_concrete", "sfx_ben_run_step_r_concrete"],
                ["sfx_ben_run_step_l_wood", "sfx_ben_run_step_r_wood"]
            ], this.step = !1, this.areInputActive = !1, this.isTransformed = !1, this.transformationEffect = null, this.isTeleporting = !1, this.thrust = 50, this.isFlying = !1, this.wasGroundedAfterFly = !0, this.turboTween = null, this.isTurbo = !1, this.isDead = !1, this.isGrounded = !1, this.velocity = new p3.Vector2(0, 0), this.jumpTime = .45, this.jumpHeightMin = 125, this.jumpHeight = 300, this.runSpeedMin = 600, this.runSpeedMax = 900, this.slidingSpeedMax = 1200, this.accelerationSliding = 350, this.accelerationSlopeDown = 100, this.accelerationSlopeUp = -500, this.accelerationNormal = -200, this.runSpeed = this.runSpeedMin, this.fallTime = 0, this.fallTimeToLand = .7, this.fallTimeToDie = 2, this.isSliding = !1, this.timeUnsliding = 0, this.timeUnslidingEnd = .4, this.slidingAngleStart = 35, this.slidingAngleEnd = 15, this.slidingSFX = null, this.ignoreArtificialPaths = !1, this.isFiring = !1, this.firingTime = 0, this.fireRate = .5, this.bulletSpeed = 100, this.bulletLife = 1.5, this.bullets = [], this.initBulletsPool(), this.enemyBulletSpeed = 1400, this.enemyBulletLife = 1.5, this.enemyBullets = [], this.initEnemyBulletsPool(), this.runUpAngle = -50, this.runDownAngle = 10, this.rotation = 0, this.angleTarget = 0, this.angleSpeed = .1, this.angleSpeedFast = .3, this.collisionCircleRadius = 85, this.pickupCircle = null, this.pickupCircleRadius = 70, this.focusPointLand = {
                point: new PIXI.Point(.5, .6),
                time: 1.4,
                delay: 0
            }, this.focusPointJump = {
                point: new PIXI.Point(.5, .45),
                time: .4,
                delay: 0
            }, this.focusPointFall = {
                point: new PIXI.Point(.5, .35),
                time: .4,
                delay: .1
            }, this.focusPointSlide = {
                point: new PIXI.Point(.5, .5),
                time: 1,
                delay: 0
            }, this.focusPointDeath = {
                point: new PIXI.Point(.5, .6),
                time: 2,
                delay: 0
            }, this.zoomDeath = {
                zoom: .4,
                time: 2
            }, this.kJumpStart = !1, this.kJumpPressed = !1, this.kJumpEnd = !1, this.kAbilityOn = !1, this.kAbilityOff = !1, this.minSpecialAbilityTime = 0, this.curSpecialAbilityTime = 0, this.isSpecialAbility = !1, this.obstacleHit = !1, this.canPlayObstacleSnd = !0, this.canPlayObstacleTime = 1, this.gateHit = !1, this.smokePS = null, this.smokeBigPS = null, this.bulletTexture = null
        }
        var n = t("../Common"),
            o = t("./RunningEntity"),
            a = t("../game/Pool"),
            r = t("../game/ObjectBullet"),
            h = t("../game/ObjectEnemyBullet"),
            l = t("../ui/TransformationEffect"),
            c = t("../lib/MotionBlurShader");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.transformIn = function() {
            null === this.transformationEffect && (this.transformationEffect = new l, this.transformationEffect.x = 0, this.transformationEffect.y = 0, this.transformationEffect.on("canTransform", this.onCharacterTransform.bind(this)), this.transformationEffect.on("transformDone", this.onCharacterTransformDone.bind(this)), this.animationHolder.addChild(this.transformationEffect), this.transformationEffect.animate(), n.play("sfx_omnitrix_transform_00"))
        }, s.prototype.transformOut = function() {
            null === this.transformationEffect && (this.isFlying = !1, this.transformationEffect = new l, this.transformationEffect.x = 0, this.transformationEffect.y = 0, this.transformationEffect.on("canTransform", this.onCharacterTransform.bind(this)), this.transformationEffect.on("transformDone", this.onCharacterTransformDone.bind(this)), this.animationHolder.addChild(this.transformationEffect), this.transformationEffect.animate(), n.play("sfx_omnitrix_transform_back_00"))
        }, s.prototype.initBulletsPool = function() {
            switch (n.savedData.character) {
                case "heatblast":
                    this.bulletTexture = "projectile_heatblast_001";
                    break;
                case "overflow":
                    this.bulletTexture = "projectile_overflow";
                    break;
                default:
                    return
            }
            var t = {
                maxItems: 10,
                itemParams: {
                    texture: n.assetManager.getTexture(this.bulletTexture),
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
                    y: 0,
                    visible: !1
                }
            };
            this.bulletsPool = new a(t)
        }, s.prototype.initEnemyBulletsPool = function() {
            var t = {
                maxItems: 20,
                itemParams: {
                    texture: n.assetManager.getTexture("projectile_heatblast_001"),
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
                    y: 0,
                    visible: !1
                }
            };
            this.enemyBulletsPool = new a(t)
        }, s.prototype.onCharacterTransform = function() {
            this.isTransformed = !this.isTransformed, this.isTransformed ? (this.currentAnimation = "", this.areInputActive = !0, this.setSpine(n.savedData.character), this.setAnimation("idle", !0)) : (this.currentAnimation = "", this.areInputActive = !1, this.setSpine("ben"), this.setAnimation("idle", !0))
        }, s.prototype.onCharacterTransformDone = function() {
            TweenMax.killTweensOf(this.transformationEffect), this.transformationEffect.visible = !1, this.transformationEffect.parent.removeChild(this.transformationEffect), this.transformationEffect = null, this.level.parent.canStartCountdown || (this.level.parent.onTransformInComplete(), this.enemyFireCheck())
        }, s.prototype.enemyFireCheck = function() {
            for (var t = this.level.objectManager.getObjectsOfType("enemy"), e = 0; e < t.length; e++) t[e].canFire && t[e].fire()
        }, s.prototype.setSpineAnimations = function(t) {
            for (var e = ["die", "fall", "fall_to_land", "idle", "jump", "land_to_run", "run_level"], i = {
                    ben: [],
                    cannonbolt: ["roll", "roll_end", "roll_start"],
                    overflow: ["shoot", "shoot-stand"],
                    heatblast: ["shoot"],
                    stinkfly: ["flying", "die_ground", "die_air"],
                    xlr8: ["run_fast"]
                }, s = e.concat(i[t]), n = 0; n < s.length; n++) {
                for (var o = !1, a = 0; a < this.spine.spineData.animations.length; a++)
                    if (this.spine.spineData.animations[a].name == s[n]) {
                        o = !0;
                        break
                    }
                o || (console.info("Animation %s missing", s[n]), s.splice(n, 1), n--)
            }
            for (var n = 0; n < s.length; n++)
                for (var r = 0; r < s.length; r++) n != r && ("fall_to_land" == s[n] ? this.spine.stateData.setMixByName(s[n], s[r], .25) : "shoot" === s[r] ? this.spine.stateData.setMixByName(s[n], s[r], 0) : this.spine.stateData.setMixByName(s[n], s[r], .2))
        }, s.prototype.setSpine = function(t) {
            this.spineData = n.characterAnimationData["char_" + t], null !== this.spine && this.animationHolder.removeChild(this.spine), this.spine = new PIXI.spine.Spine(this.spineData), this.spine.skeleton.setToSetupPose(), this.spine.skeleton.setSkin(null), this.spine.skeleton.setSkinByName("default"), this.spine.x = 0, this.spine.y = this.collisionCircle.radius, this.spine.autoUpdate = !1, this.spine.scale.set(.75), this.setSpineAnimations(t), this.animationHolder.addChild(this.spine), this.spine.state.onEvent = this.onAvatarEvent.bind(this)
        }, s.prototype.init = function(t) {
            if (this.level = t, this.initCharacter(), this.zoomDeath.zoom += this.level.defaultZoom, this.collisionCircle.radius = this.collisionCircleRadius, this.pickupCircle = new PIXI.Circle(0, (-20), this.pickupCircleRadius), this.setupJumping(), this.animationHolder = new PIXI.Container, this.addChild(this.animationHolder), this.setSpine("ben"), this.setAnimation("idle", !0), this.smokePS = new cloudkid.Emitter(this.level, [this._assetManager.getTexture("particle_dust_001"), this._assetManager.getTexture("particle_dust_002"), this._assetManager.getTexture("particle_dust_003"), this._assetManager.getTexture("particle_dust_004")], this._assetManager.getJSON("particle_char_dust")), this.smokePS.emit = !1, this.smokeBigPS = new cloudkid.Emitter(this.level, [this._assetManager.getTexture("particle_dust_001"), this._assetManager.getTexture("particle_dust_002"), this._assetManager.getTexture("particle_dust_003"), this._assetManager.getTexture("particle_dust_004")], this._assetManager.getJSON("particle_char_dust")), this.smokeBigPS.emit = !1, this.level.debug && (this._particleOrigin = new PIXI.Graphics, this._particleOrigin.beginFill(16711680), this._particleOrigin.drawCircle(0, 0, 4), this._particleOrigin.endFill(), this.addChild(this._particleOrigin)), this.level.debug) {
                this.drawCollision();
                var e = new PIXI.Graphics;
                this.addChild(e), e.lineStyle(1, 16191773), e.drawCircle(0, 0, this.pickupCircle.radius), e.x = this.pickupCircle.x, e.y = this.pickupCircle.y
            }
        }, s.prototype.initCharacter = function() {
            switch (n.savedData.character) {
                case "cannonbolt":
                    this.abilities.invulnerability = !0;
                    break;
                case "heatblast":
                    this.abilities.fire = !0;
                    break;
                case "overflow":
                    this.abilities.fire = !0;
                    break;
                case "stinkfly":
                    this.abilities.fly = !0
            }
            this._characterData.minSpecialAbilityTime && (this.minSpecialAbilityTime = this._characterData.minSpecialAbilityTime), this._characterData.bulletSpeed && (this.bulletSpeed = this._characterData.bulletSpeed), this._characterData.bulletLife && (this.bulletLife = this._characterData.bulletLife), this._characterData.fireRate && (this.fireRate = this._characterData.fireRate), this._characterData.thrust && (this.thrust = this._characterData.thrust), this._characterData.turboSpeed && (this.turboSpeed = this._characterData.turboSpeed), this._characterData.collisionCircleRadius && (this.collisionCircleRadius = this._characterData.collisionCircleRadius), this._characterData.jumpHeight && (this.jumpHeight = this._characterData.jumpHeight), this._characterData.pickupCircleRadius && (this.pickupCircleRadius = this._characterData.pickupCircleRadius)
        }, s.prototype.dispose = function() {
            this.stopLoops()
        }, s.prototype.update = function() {
            if (!this.isTeleporting) {
                this.transformationEffect && this.transformationEffect.update(), "roll" === this.currentAnimation && 0 === this.velocity.x || ("fall" === this.currentAnimation ? this.spine.update(p3.Timestep.deltaTime * this.spineSpeed * .3) : "die_air" === this.currentAnimation ? this.spine.update(p3.Timestep.deltaTime * this.spineSpeed * .2) : this.spine.update(p3.Timestep.deltaTime * this.spineSpeed)), this.isDead || !this.isTransformed ? "stinkfly" === n.savedData.character && !this.isGrounded && this.isTransformed && "die_air" !== this.currentAnimation && this.setAnimation("die_air", !0) : this.isGrounded && !this.isSliding && this.collisionPoint && 0 !== this.velocity.x ? "cannonbolt" === n.savedData.character && this.isSpecialAbility ? this.setAnimation("roll", !0) : this.setAnimation("run_level", !0) : !this.isGrounded && this.velocity.y > 0 && ("fall" !== this.currentAnimation && "" !== this.currentAnimation && this.level.changeFocusPoint(this.focusPointFall.point, this.focusPointFall.time, this.focusPointFall.delay), "cannonbolt" === n.savedData.character && this.isSpecialAbility ? this.setAnimation("roll", !0) : this.isFlying || this.setAnimation("fall", !1)), this.isFiring && (this.firingTime += p3.Timestep.deltaTime, this.firingTime > this.fireRate && (this.isSpecialAbility ? (this.stopFiring(), this.turnOffSpecialAbility()) : this.stopFiring())), this.isTurbo ? (this.spineSpeed = this.turboSpeed, this.xlr8filter.blurX = this.velocity.x, this.xlr8filter.blurY = 1 === Math.sign(this.velocity.y) ? this.velocity.y / 3 : this.velocity.y) : "run_level" === this.currentAnimation && this.runSpeed > this.runSpeedMin ? this.spineSpeed = 1 + .5 * ((this.runSpeed - this.runSpeedMin) / (this.runSpeedMax - this.runSpeedMin)) : this.spineSpeed = 1;
                var t = (new p3.Vector2(this.velocity.x, this.velocity.y), new p3.Vector2(this.x, this.y)),
                    e = (this.isSliding, this.isGrounded);
                if (!this.isDead && this.isTransformed && this.level.parent.canStartCountdown && !this.level.parent._gameOver) {
                    if (this.areInputActive && (this.kJumpStart = this.kJumpStart || n.keyboard.getKeyJustPressed(n.keyboard.KEY_UP), this.kJumpEnd = this.kJumpEnd || n.keyboard.getKeyJustReleased(n.keyboard.KEY_UP), this.kAbilityOn = this.kAbilityOn || n.keyboard.getKeyJustPressed(n.keyboard.KEY_Z), this.kAbilityOff = this.kAbilityOff || n.keyboard.getKeyJustReleased(n.keyboard.KEY_Z), this.kJumpStart ? (this.jump(), this.kJumpPressed = !0) : this.kJumpEnd && (this.kJumpPressed = !1), this.kAbilityOn ? this.turnOnSpecialAbility() : this.kAbilityOff && this.requestTurnOffSpecialAbility(), this.curSpecialAbilityTime += p3.Timestep.deltaTime, this.kJumpStart = !1, this.kJumpEnd = !1, this.kAbilityOn = !1, this.kAbilityOff = !1, this.isSliding ? this.runSpeed += this.accelerationSliding * p3.Timestep.deltaTime : this.isGrounded && this.collisionPoint.angle * PIXI.RAD_TO_DEG > this.runDownAngle ? this.runSpeed += this.accelerationSlopeDown * p3.Timestep.deltaTime : this.isGrounded && this.collisionPoint.angle * PIXI.RAD_TO_DEG < this.runUpAngle ? this.runSpeed += this.accelerationSlopeUp * p3.Timestep.deltaTime : this.runSpeed += this.accelerationNormal * p3.Timestep.deltaTime, this.runSpeed = Math.max(Math.min(this.runSpeed, this.isSliding ? this.slidingSpeedMax : this.runSpeedMax), this.runSpeedMin)), this.isSliding && (!this.collisionPoint || this.collisionPoint.angle * PIXI.RAD_TO_DEG < this.slidingAngleEnd) && (this.timeUnsliding += p3.Timestep.deltaTime, this.timeUnsliding >= this.timeUnslidingEnd && (this.isSliding = !1, this.isTurbo ? this.setAnimation("run_fast", !0) : this.setAnimation("run_level", !0))), !this.areInputActive || this.isDead || this.level.parent._gameOver || (n.keyboard.getKeyPressed(n.keyboard.KEY_LEFT) ? (this.isTurbo ? (this.turboTween && this.turboTween.kill(), this.turboTween = TweenMax.to(this.velocity, .1, {
                            x: -this.runSpeed,
                            ease: Linear.easeNone
                        })) : this.velocity.x = -this.runSpeed, this.scale.x = -1) : n.keyboard.getKeyPressed(n.keyboard.KEY_RIGHT) ? (this.isTurbo ? (this.turboTween && this.turboTween.kill(), this.turboTween = TweenMax.to(this.velocity, .1, {
                            x: +this.runSpeed,
                            ease: Linear.easeNone
                        })) : this.velocity.x = +this.runSpeed, this.scale.x = 1) : (this.isTurbo ? (this.turboTween && this.turboTween.kill(), this.turboTween = TweenMax.to(this.velocity, .1, {
                            x: 0,
                            ease: Cubic.easeOut
                        })) : this.velocity.x = 0, "cannonbolt" === n.savedData.character && this.isSpecialAbility ? this.setAnimation("roll", !0) : this.isGrounded && ("shoot-stand" === this.currentAnimation || this.isDead || this.setAnimation("idle", !0), this.stopLoops()))), this.obstacleHit) {
                        if (this.canPlayObstacleSnd) {
                            switch (n.savedData.character) {
                                case "cannonbolt":
                                    n.play(["sfx_cannonbolt_clunk_01"]);
                                    break;
                                case "overflow":
                                    n.play(["sfx_overflow_hurt_00", "sfx_overflow_hurt_01", "sfx_overflow_hurt_02"])
                            }
                            this.canPlayObstacleSnd = !1, n.animator.setTimeout(function() {
                                this.canPlayObstacleSnd = !0
                            }, this.canPlayObstacleTime, this)
                        }
                        this.obstacleHit = !1, this.velocity.x = this.direction * -this.runSpeed, this.level.shake(.125, new PIXI.Point(4, 6))
                    }
                    n.keyboard.getKeyPressed(n.keyboard.KEY_UP) && !this.isDead && this.jump()
                }
                this.velocity.y += this.gravity * p3.Timestep.deltaTime, this.velocity.y >= this.gravity / 2 && (this.velocity.y = this.gravity / 2), this.isFlying && (this.velocity.y -= this.thrust * p3.Timestep.deltaTime, Math.abs(this.velocity.y) >= this.gravity / 3 && (this.velocity.y = -this.gravity / 3), this.setAnimation("flying", !0));
                var i = Math.atan2(Math.sin(this.angleTarget - this.animationHolder.rotation), Math.cos(this.angleTarget - this.animationHolder.rotation));
                if (Math.abs(i) >= .6 ? this.animationHolder.rotation = this.animationHolder.rotation + i : Math.abs(i > .2) && Math.abs(i) < .6 ? this.animationHolder.rotation = this.animationHolder.rotation + i * this.angleSpeedFast : this.animationHolder.rotation = this.animationHolder.rotation + i * this.angleSpeed, this.move(this.velocity), this.isGrounded && (this.velocity.y = 0, e || this.isDead || this.land()), !this.isGrounded && this.velocity.y > 0 ? (this.fallTime += p3.Timestep.deltaTime, this.fallTime > this.fallTimeToDie && !this.isFlying && this.wasGroundedAfterFly && this.death()) : 0 != this.fallTime && (this.fallTime = 0), this.collisions(), this.gateHit) {
                    switch (n.savedData.character) {
                        case "cannonbolt":
                            n.play("sfx_cannonbolt_clunk_00");
                            break;
                        case "overflow":
                            n.play(["sfx_overflow_hurt_00", "sfx_overflow_hurt_01", "sfx_overflow_hurt_02"])
                    }
                    this.level.shake(.125, new PIXI.Point(4, 6)), this.x = t.x, this.gateHit = !1
                }
                this.isDead || this.isTeleporting ? this.stopLoops() : this.isGrounded && this.isTransformed && this.level.parent.canStartCountdown && !this.level.parent._gameOver ? "cannonbolt" === n.savedData.character && this.isSpecialAbility && (0 !== this.velocity.x ? this.playLoop("sfx_cannonbolt_roll_04") : this.stopLoops()) : this.stopLoops(), this.level.parent._gameOver && !this.level.parent.isVictory && (this.velocity.x = 0, this.spineSpeed = 1, this.areInputActive = !1, this.animationHolder.filters = null, this.isSpecialAbility || this.isDead ? this.turnOffSpecialAbility() : this.setAnimation("idle", !0), n.keyboard.setKeyJustReleased(n.keyboard.KEY_UP), n.keyboard.setKeyJustReleased(n.keyboard.KEY_RIGHT), n.keyboard.setKeyJustReleased(n.keyboard.KEY_DOWN), n.keyboard.setKeyJustReleased(n.keyboard.KEY_LEFT)), this.updateBullets(), this.updateEnemyBullets(), this.smokePS.update(p3.Timestep.deltaTime), this.smokeBigPS.update(p3.Timestep.deltaTime)
            }
        }, s.prototype.turnOnSpecialAbility = function() {
            if (!this.isSpecialAbility && this.isTransformed) switch (this.isSpecialAbility = !0, this.curSpecialAbilityTime = 0, n.savedData.character) {
                case "cannonbolt":
                    this.setAnimation("roll_start", !1);
                    break;
                case "heatblast":
                    this.setAnimation("shoot", !1), this.fire();
                    break;
                case "overflow":
                    0 === this.velocity.x ? this.setAnimation("shoot-stand", !1) : this.setAnimation("shoot", !1), this.fire();
                    break;
                case "stinkfly":
                    this.setAnimation("flying", !0), this.isFlying = !0, this.wasGroundedAfterFly = !1, this.velocity.y -= this.jumpSpeed, n.play("sfx_stinkfly_flap_00", {
                        loop: !0
                    });
                    break;
                case "xlr8":
                    this.isTurbo = !0, this.runSpeedMin *= this.turboSpeed, this.runSpeedMax *= this.turboSpeed, this.slidingSpeedMax *= this.turboSpeed, this.animationHolder.filters = [this.xlr8filter], this.xlr8filter.blurX = 0, this.xlr8filter.blurY = 0
            }
        }, s.prototype.requestTurnOffSpecialAbility = function() {
            if (this.isSpecialAbility) return this.curSpecialAbilityTime < this.minSpecialAbilityTime ? void n.animator.setTimeout(function() {
                this.turnOffSpecialAbility()
            }, this.minSpecialAbilityTime - this.curSpecialAbilityTime, this) : void this.turnOffSpecialAbility()
        }, s.prototype.turnOffSpecialAbility = function() {
            if (this.isSpecialAbility) switch (this.isSpecialAbility = !1, n.savedData.character) {
                case "cannonbolt":
                    this.setAnimation("roll_end", !1), this.stopLoops();
                    break;
                case "heatblast":
                case "overflow":
                    break;
                case "stinkfly":
                    this.fallTime = 0, this.setupJumping(), this.isFlying = !1, n.stop("sfx_stinkfly_flap_00");
                    break;
                case "xlr8":
                    this.isTurbo = !1, this.runSpeedMin /= this.turboSpeed, this.runSpeedMax /= this.turboSpeed, this.slidingSpeedMax /= this.turboSpeed, this.turboTween && this.turboTween.kill(), this.turboTween = TweenMax.to(this.xlr8filter, .2, {
                        blurX: 0,
                        blurY: 0,
                        ease: Linear.easeNone,
                        onComplete: function() {
                            this.animationHolder.filters = null
                        },
                        onCompleteScope: this
                    })
            }
        }, s.prototype.setupJumping = function() {
            this.jumpSpeed = 2 * this.jumpHeight / this.jumpTime, this.gravity = this.jumpSpeed / this.jumpTime, this.maxGravity = this.gravity, this.jumpTimeMin = Math.sqrt(2 * this.jumpHeightMin / this.gravity), this.jumpSpeedMin = this.gravity * this.jumpTimeMin
        }, s.prototype.stopLoops = function() {
            "" != n.walkLoop && (n.stop(n.walkLoop), n.walkLoop = "")
        }, s.prototype.onAvatarEvent = function(t, e) {
            "step" === e.data.name && (n.play(this.walkSounds[n.chapter - 1][+this.step]), this.step != this.step)
        }, s.prototype.playLoop = function(t) {
            n.walkLoop != t && (this.stopLoops(), n.walkLoop = t, n.play(n.walkLoop, {
                loop: !0
            }))
        }, s.prototype.collisions = function() {
            if (!this.isTeleporting) {
                for (var t = new PIXI.Circle(this.x + this.collisionCircle.x, this.y + this.collisionCircle.y, this.collisionCircle.radius), e = new PIXI.Circle(this.x + this.pickupCircle.x, this.y + this.pickupCircle.y, this.pickupCircle.radius), i = this.level.objectManager.getObjectsOfType("level_end"), s = 0; s < i.length; s++) i[s].interactive && this.checkCollision(t, i[s]) && i[s].hit();
                if (!this.isDead) {
                    for (var n = this.level.objectManager.getObjectsOfType("camera_zoom"), s = 0; s < n.length; s++) n[s].interactive && this.checkCollision(t, n[s]) && n[s].hit();
                    for (var o = this.level.objectManager.getObjectsOfType("coin"), s = 0; s < o.length; s++) o[s].interactive && this.checkCollision(e, o[s]) && o[s].pickup(this) && this.level.parent.onOmnitrixPickUp();
                    for (var a = this.level.objectManager.getObjectsOfType("time"), s = 0; s < a.length; s++) a[s].interactive && this.checkCollision(e, a[s]) && a[s].pickup(this) && this.level.parent.onTimePickUp();
                    for (var r = this.level.objectManager.getObjectsOfType("pick_key"), s = 0; s < r.length; s++) r[s].interactive && this.checkCollision(e, r[s]) && r[s].pickup(this) && this.level.parent.onKeyPickUp(r[s].color);
                    for (var h = this.level.objectManager.getObjectsOfType("hint"), s = 0; s < h.length; s++) h[s].interactive && (this.rectToCircleCollision(e, h[s]) ? h[s].hit() : h[s].isIn && h[s].wasHit());
                    for (var l = this.level.objectManager.getObjectsOfType("sumocard"), s = 0; s < l.length; s++) l[s].interactive && this.checkCollision(e, l[s]) && l[s].pickup(this) && this.level.parent.onSumoCardPickUp();
                    for (var c = this.level.objectManager.getObjectsOfType("obstacle"), s = 0; s < c.length; s++) c[s].interactive && this.checkCollision(t, c[s]) && (this.abilities.invulnerability && this.isSpecialAbility && c[s].destroyable ? (this.level.parent.onFireExtinguished(), c[s].destroy()) : c[s].interactive && (this.obstacleHit = !0));
                    for (var p = this.level.objectManager.getObjectsOfType("gate"), s = 0; s < p.length; s++) p[s].isLocked && this.checkCollision(t, p[s]) && p[s].hit();
                    for (var u = this.level.objectManager.getObjectsOfType("fire"), s = 0; s < u.length; s++) u[s].interactive && this.checkCollision(t, u[s]) && u[s].interactive && (u[s].hit(this), this.death());
                    for (var d = this.level.objectManager.getObjectsOfType("enemy"), s = 0; s < d.length; s++) d[s].interactive && this.checkCollision(t, d[s]) && (this.abilities.invulnerability && this.isSpecialAbility && d[s].destroyable ? (this.level.parent.onEnemyKilled(), d[s].destroy()) : d[s].interactive && (d[s].hit(this), this.death()));
                    for (var g = this.level.objectManager.getObjectsOfType("jump_platform"), s = 0; s < g.length; s++) g[s].interactive && this.checkCollision(t, g[s]) && g[s].hit(this);
                    for (var m = this.level.objectManager.getObjectsOfType("teleport"), s = 0; s < m.length; s++)
                        if (m[s].interactive && this.checkCollision(t, m[s])) {
                            m[s].hit(this, s);
                            break
                        }
                    for (var f = this.level.objectManager.getObjectsOfType("crumblingPlatform"), s = 0; s < f.length; s++)
                        if (f[s].interactive && this.checkTopCollision(t, f[s])) {
                            f[s].hit(this, s);
                            break
                        }
                    for (var y = this.level.objectManager.getObjectsOfType("spike"), s = 0; s < y.length; s++) y[s].interactive && this.checkCollision(t, y[s]) && (this.checkTopCollision(t, y[s]) || y[s].isIn(t) ? (y[s].hit(this), this.death()) : this.obstacleHit = !0)
                }
            }
        }, s.prototype.teleportAvatar = function(t, e) {
            var i = new TimelineMax({
                onComplete: function() {
                    t.interactive = !0
                },
                onCompleteScope: this
            });
            i.to(this, .3, {
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: function() {
                    this.isTeleporting = !0, this.stopLoops(), t.turnOff()
                },
                onCompleteScope: this
            }), i.to(this.position, 1, {
                x: e.x,
                y: e.y - this.collisionCircleRadius - 20,
                ease: Sine.easeInOut,
                onUpdate: function() {},
                onUpdateScope: this,
                onComplete: function() {
                    this.rotation = 0, this.isTeleporting = !1, e.data["in"] !== e.data.out && e.turnOff()
                },
                onCompleteScope: this
            }), i.to(this, .3, {
                alpha: 1,
                ease: Linear.easeNone
            }), n.animator.add(i)
        }, s.prototype.onTeleport = function(t, e) {
            var i = this.findTargetTeleport(t.data.out);
            return null === i ? (console.error("Couldn't find target teleport"), void(this.isTeleporting = !1)) : void this.teleportAvatar(t, i)
        }, s.prototype.findTargetTeleport = function(t) {
            for (var e = null, i = this.level.objectManager.getObjectsOfType("teleport"), s = 0; s < i.length; s++)
                if (i[s].data["in"] === t) {
                    e = i[s];
                    break
                }
            return e
        }, s.prototype.jump = function() {
            if (!this.isDead) {
                if (this.isGrounded) {
                    if (this.collisionPoint && this.collisionPoint.angle * PIXI.RAD_TO_DEG < -this.jumpSlopeAngleMax) return;
                    switch (this.isSliding = !1, this.rotation = 0, this.angleTarget = 0, this.isGrounded = !1, this.velocity.y = -this.jumpSpeed, "cannonbolt" === n.savedData.character && this.isSpecialAbility ? this.setAnimation("roll", !0) : this.setAnimation("jump", !1), this.stopLoops(), n.savedData.character) {
                        case "cannonbolt":
                            this.isSpecialAbility ? n.play("sfx_cannonbolt_roll_jump_00") : n.play("sfx_cannonbolt_jump_00");
                            break;
                        case "overflow":
                            n.play("sfx_overflow_jump_00");
                        case "xlr8":
                            n.play("sfx_xlr8_jump_00")
                    }
                }
                this.level.changeFocusPoint(this.focusPointJump.point, this.focusPointJump.time, this.focusPointJump.delay)
            }
        }, s.prototype.land = function() {
            if (this.fallTime >= this.fallTimeToLand) {
                if ("cannonbolt" === n.savedData.character && this.isSpecialAbility) n.play("sfx_cannonbolt_roll_land_00");
                else switch (this.setAnimation("fall_to_land", !1), this.smokeBigPS.updateSpawnPos(this.x, this.y + this.collisionCircle.radius - 10), this.smokeBigPS._posChanged = !1, this.smokeBigPS.emitterLifetime = .6, this.smokeBigPS.emit = !0, n.savedData.character) {
                    case "cannonbolt":
                        n.play("sfx_cannonbolt_land_00");
                        break;
                    case "overflow":
                        n.play(["sfx_overflow_landheavy_00", "sfx_overflow_landheavy_01"]);
                        break;
                    case "stinkfly":
                        n.play("sfx_stinkfly_land_00");
                        break;
                    case "xlr8":
                        n.play("sfx_xlr8_land_00")
                }
                this.level.shake(.25, new PIXI.Point(8, 12)), this.isTranformed && n.play("sfx_generic_land_heavy_00")
            } else {
                if ("cannonbolt" === n.savedData.character && this.isSpecialAbility) n.play("sfx_cannonbolt_roll_land_00");
                else switch (this.velocity.x > 0 && this.setAnimation("land_to_run", !1), this.smokePS.updateSpawnPos(this.x, this.y + this.collisionCircle.radius - 10), this.smokePS._posChanged = !1, this.smokePS.emitterLifetime = .05, this.smokePS.emit = !0, n.savedData.character) {
                    case "cannonbolt":
                        n.play("sfx_cannonbolt_land_00");
                        break;
                    case "overflow":
                        n.play("sfx_overflow_landsoft_00");
                        break;
                    case "stinkfly":
                        n.play("sfx_stinkfly_land_00");
                        break;
                    case "xlr8":
                        n.play("sfx_xlr8_land_00")
                }
                this.isTranformed && n.play("sfx_generic_land_soft_00")
            }
            this.animationHolder.rotation = this.animationHolder.rotation % (2 * Math.PI), this.level.changeFocusPoint(this.focusPointLand.point, this.focusPointLand.time, this.focusPointLand.delay)
        }, s.prototype.death = function() {
            this.isTransformed && (this.isDead || (this.isDead = !0, this.isSliding = !1, this.velocity.x = (this.velocity.x < this.runSpeedMin ? this.runSpeedMin : this.runSpeed) * -this.direction, this.deathTween = new TimelineMax, this.deathTween.to(this.velocity, .5, {
                    x: 0,
                    ease: Bounce.easeOut
                }, 0), n.animator.add(this.deathTween), this.fallTime > this.fallTimeToDie || (this.turnOffSpecialAbility(), "stinkfly" === n.savedData.character ? this.isFlying ? this.setAnimation("die_air", !1) : this.setAnimation("die_ground", !1) : this.setAnimation("die", !1)), this.level.changeFocusPoint(this.focusPointDeath.point, this.focusPointDeath.time, this.focusPointDeath.delay), this.level.changeZoom(this.zoomDeath.zoom, this.zoomDeath.time), this.level.gameOver(),
                this.stopLoops()))
        }, s.prototype.stopFiring = function() {
            this.isFiring = !1
        }, s.prototype.fire = function() {
            this.isFiring = !0, this.firingTime = 0;
            var t = new r(this, this.level, this.bulletsPool.get());
            switch (this.level.addChild(t), this.bullets.push(t), t.position = this.getBulletPosition(), n.savedData.character) {
                case "overflow":
                    n.play(["sfx_overflow_shoot_water_short_00", "sfx_overflow_shoot_water_short_01"]);
                    break;
                case "heatblast":
                    n.play("sfx_heatblast_shoot_one_00")
            }
            n.animator.setTimeout(function() {
                t.start()
            }, .01, this)
        }, s.prototype.getEnemyBulletTexture = function(t) {
            var e = null;
            switch (t) {
                case "maggot":
                    e = n.assetManager.getTexture("projectile_bullet_maggot");
                    break;
                case "mascot":
                    e = n.assetManager.getTexture("projectile_bullet_mascot");
                    break;
                case "bandit":
                    e = n.assetManager.getTexture("projectile_bullet_bandit")
            }
            return e
        }, s.prototype.enemyFire = function(t) {
            var e = this.enemyBulletsPool.get();
            e.texture = this.getEnemyBulletTexture(t.name);
            var i = new h(this, this.level, t, e);
            switch (this.level.addChild(i), this.enemyBullets.push(i), i.position = this.getEnemyBulletPosition(t), t.name) {
                case "maggot":
                    n.play("");
                    break;
                case "mascot":
                    n.play("");
                    break;
                case "bandit":
                    n.play("")
            }
            n.animator.setTimeout(function() {
                i.start()
            }, .01, this)
        }, s.prototype.getBulletPosition = function() {
            var t, e;
            switch (n.savedData.character) {
                case "overflow":
                    t = this.x + 70 * this.direction, e = this.y - 60;
                    break;
                case "heatblast":
                    t = this.x + 60 * this.direction, e = this.y - 60
            }
            return {
                x: t,
                y: e
            }
        }, s.prototype.getEnemyBulletPosition = function(t) {
            var e, i;
            switch (t.name) {
                case "maggot":
                    e = t.x + t.spine.x + 66 * t.direction, i = t.y + 42;
                    break;
                case "mascot":
                    e = t.x + t.spine.x - 10 * t.direction, i = t.y - 132;
                    break;
                case "bandit":
                    e = t.x + t.spine.x + 50 * t.direction, i = t.y - 80
            }
            return {
                x: e,
                y: i
            }
        }, s.prototype.updateBullets = function() {
            if (0 !== this.bullets.length)
                for (var t = 0; t < this.bullets.length; t++) this.bullets[t].update()
        }, s.prototype.updateEnemyBullets = function() {
            if (0 !== this.enemyBullets.length)
                for (var t = 0; t < this.enemyBullets.length; t++) this.enemyBullets[t].update()
        }, s.prototype.setAnimation = function(t, e) {
            e && t == this.currentAnimation || (["roll_start", "land_to_run", "fall_to_land", "shoot", "die", "flying", "die_ground", "die_air"].indexOf(this.currentAnimation) !== -1 ? this.spine.state.addAnimationByName(0, t, e, .2) : ["shoot-stand"].indexOf(this.currentAnimation) !== -1 ? this.spine.state.addAnimationByName(0, t, e, .2) : ["roll_end", "idle", "run_fast"].indexOf(this.currentAnimation) !== -1 ? this.spine.state.addAnimationByName(0, t, e, .05) : this.spine.state.setAnimationByName(0, t, e, 0), this.currentAnimation = t)
        }, Object.defineProperty(s.prototype, "direction", {
            get: function() {
                return Math.sign(this.scale.x)
            }
        }), Object.defineProperty(s.prototype, "distance", {
            get: function() {
                return Math.floor(this.x / n.savedData.unit)
            }
        })
    }, {
        "../Common": 4,
        "../game/ObjectBullet": 20,
        "../game/ObjectEnemyBullet": 25,
        "../game/Pool": 41,
        "../lib/MotionBlurShader": 48,
        "../ui/TransformationEffect": 65,
        "./RunningEntity": 42
    }],
    15: [function(t, e, i) {
        function s(t, e) {
            this._assetManager = p3.AssetManager.instance, this.signals = {}, this.signals.disposed = new signals.Signal, this.id = null, this.type = t, this.collisionRect = null, this.collisionCircle = null, this.areaRect = null, this.interactive = !1, this.removeWhenOutside = !0, this.collisionGraphic = null, PIXI.Container.call(this)
        }
        t("../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {}, s.prototype.update = function() {}, s.prototype.reset = function() {
            this.x = 0, this.y = 0, this.removeMe = !1
        }, s.prototype.dispose = function() {
            this.signals.disposed.dispatch(this), this.removed = !0
        }, s.prototype.pause = function() {}, s.prototype.resume = function() {}, s.prototype.drawCollision = function() {
            this.collisionGraphic && this.removeChild(this.collisionGraphic), this.collisionGraphic = new PIXI.Graphics, this.addChild(this.collisionGraphic), this.collisionGraphic.lineStyle(2, 16191773), null != this.collisionRect ? this.collisionGraphic.drawRect(this.collisionRect.x, this.collisionRect.y, this.collisionRect.width, this.collisionRect.height) : null != this.collisionCircle && this.collisionGraphic.drawCircle(this.collisionCircle.x, this.collisionCircle.y, this.collisionCircle.radius)
        }
    }, {
        "../Common": 4
    }],
    16: [function(t, e, i) {
        function s(t, e, i) {
            this._assetManager = p3.AssetManager.instance, PIXI.Container.call(this), this.debug = !1, this.data = e, this.backgroundPrefix = i, this.layers = [], this.objectManager = null, this.endless = t, this.completed = !1, this.snowflakes = 0, this.score = 0, this.styleScore = 0, this.defaultZoom = .6, "" != e && (this.config = this._assetManager.getJSON(e)), this.avatar = new a, this.focusPoint = new PIXI.Point(this.avatar.focusPointLand.point.x, this.avatar.focusPointLand.point.y), this.focusXActive = !0, this.focusYActive = !0, this.focusPointTween = null, this.zoom = 1, this.zoomTarget = 1, this.zoomTween = null, this._isShake = !1, this._shakeTime = 0, this._shakeTimeEnd = 1, this._shakeStrength = new PIXI.Point(10, 10)
        }
        var n = t("../Common"),
            o = (t("../editor/BezierPath"), t("../game/LevelLayer")),
            a = (t("../game/LevelPath"), t("../game/Avatar")),
            r = t("../game/ObjectManager"),
            h = t("../game/ObjectCoin"),
            l = t("../game/ObjectKey"),
            c = t("../game/ObjectTime"),
            p = t("../game/ObjectSumo"),
            u = t("../game/ObjectObstacle"),
            d = t("../game/ObjectFire"),
            g = t("../game/ObjectTeleport"),
            m = t("../game/ObjectGate"),
            f = t("../game/ObjectDecoration"),
            y = t("../game/ObjectCameraZoom"),
            _ = t("../game/ObjectJumpPlatform"),
            x = t("../game/ObjectMaggot"),
            v = t("../game/ObjectMascot"),
            T = t("../game/ObjectBandit"),
            b = t("../game/ObjectCrumblingPlatform"),
            w = t("../game/ObjectSpike"),
            S = t("../game/ObjectLevelEnd"),
            P = t("../game/ObjectHint"),
            I = t("../game/ObjectFinish");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            var t = [{
                id: "camera_zoom",
                base: y,
                args: []
            }, {
                id: "level_end",
                base: S,
                args: [!0]
            }, {
                id: "level_gameover",
                base: S,
                args: [!1]
            }, {
                id: "jump_platform",
                base: _,
                args: []
            }, {
                id: "hint",
                base: P,
                args: [!0]
            }, {
                id: "coin",
                base: h,
                args: []
            }, {
                id: "time",
                base: c,
                args: []
            }, {
                id: "sumocard",
                base: p,
                args: []
            }, {
                id: "key_blue",
                base: l,
                args: []
            }, {
                id: "key_green",
                base: l,
                args: []
            }, {
                id: "key_red",
                base: l,
                args: []
            }, {
                id: "rock01_01",
                base: u,
                args: [!0]
            }, {
                id: "rock02_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "rock03_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "rock04_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "rock05_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "rock06_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "rock07_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "rock08_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "rock09_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "cactus01_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "cactus02_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "cactus03_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "barrel01_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "barrel02_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "barrel03_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "brick_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "skull_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "factory_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "lorry_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "silo_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "tower_01",
                pool: "default",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "gate_blue01",
                base: m,
                args: [!0]
            }, {
                id: "gate_green01",
                base: m,
                args: [!0]
            }, {
                id: "gate_red01",
                base: m,
                args: [!0]
            }, {
                id: "fire_on_01",
                base: d,
                args: [!0]
            }, {
                id: "fire_off_01",
                pool: "fire",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "teleport_01",
                base: g,
                args: [!0]
            }, {
                id: "platform_01",
                base: b,
                args: [!0]
            }, {
                id: "spike01_01",
                base: w,
                args: [!0]
            }, {
                id: "spike02_01",
                base: w,
                args: [!0]
            }, {
                id: "maggot_01",
                base: x,
                args: [!0]
            }, {
                id: "finish_01",
                base: I,
                args: [!0]
            }, {
                id: "rock01_02",
                base: u,
                args: [!0]
            }, {
                id: "buildings_02",
                base: f,
                args: [!0]
            }, {
                id: "chilli_02",
                base: f,
                args: [!0]
            }, {
                id: "shop_02",
                base: f,
                args: [!0]
            }, {
                id: "stall_02",
                base: f,
                args: [!0]
            }, {
                id: "swings_02",
                base: f,
                args: [!0]
            }, {
                id: "trees_02",
                base: f,
                args: [!0]
            }, {
                id: "bin_02",
                base: f,
                args: [!0]
            }, {
                id: "posts_02",
                base: f,
                args: [!0]
            }, {
                id: "shrubs_02",
                base: f,
                args: [!0]
            }, {
                id: "sign_02",
                base: f,
                args: [!0]
            }, {
                id: "support01_02",
                base: f,
                args: [!0]
            }, {
                id: "support02_02",
                base: f,
                args: [!0]
            }, {
                id: "wall_02",
                base: f,
                args: [!0]
            }, {
                id: "gate_blue02",
                base: m,
                args: [!0]
            }, {
                id: "gate_green02",
                base: m,
                args: [!0]
            }, {
                id: "gate_red02",
                base: m,
                args: [!0]
            }, {
                id: "fire_on_02",
                base: d,
                args: [!0]
            }, {
                id: "fire_off_02",
                pool: "fire",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "teleport_02",
                base: g,
                args: [!0]
            }, {
                id: "platform_02",
                base: b,
                args: [!0]
            }, {
                id: "spike01_02",
                base: w,
                args: [!0]
            }, {
                id: "spike02_02",
                base: w,
                args: [!0]
            }, {
                id: "mascot_02",
                base: v,
                args: [!0]
            }, {
                id: "finish_02",
                base: I,
                args: [!0]
            }, {
                id: "rock01_03",
                base: u,
                args: [!0]
            }, {
                id: "rock02_03",
                base: u,
                args: [!0]
            }, {
                id: "chair01_03",
                base: f,
                args: [!0]
            }, {
                id: "chair02_03",
                base: f,
                args: [!0]
            }, {
                id: "clock_03",
                base: f,
                args: [!0]
            }, {
                id: "desk_03",
                base: f,
                args: [!0]
            }, {
                id: "plant_03",
                base: f,
                args: [!0]
            }, {
                id: "door_03",
                base: f,
                args: [!0]
            }, {
                id: "embosment_03",
                base: f,
                args: [!0]
            }, {
                id: "entrance_03",
                base: f,
                args: [!0]
            }, {
                id: "picture01_03",
                base: f,
                args: [!0]
            }, {
                id: "picture02_03",
                base: f,
                args: [!0]
            }, {
                id: "picture03_03",
                base: f,
                args: [!0]
            }, {
                id: "picture04_03",
                base: f,
                args: [!0]
            }, {
                id: "pillar_03",
                base: f,
                args: [!0]
            }, {
                id: "plant_03",
                base: f,
                args: [!0]
            }, {
                id: "vault_03",
                base: f,
                args: [!0]
            }, {
                id: "window_03",
                base: f,
                args: [!0]
            }, {
                id: "money_03",
                base: f,
                args: [!0]
            }, {
                id: "ropes_03",
                base: f,
                args: [!0]
            }, {
                id: "gate_blue03",
                base: m,
                args: [!0]
            }, {
                id: "gate_green03",
                base: m,
                args: [!0]
            }, {
                id: "gate_red03",
                base: m,
                args: [!0]
            }, {
                id: "fire_on_03",
                base: d,
                args: [!0]
            }, {
                id: "fire_off_03",
                pool: "fire",
                base: f,
                args: [!0],
                quantity: 20
            }, {
                id: "teleport_03",
                base: g,
                args: [!0]
            }, {
                id: "platform_03",
                base: b,
                args: [!0]
            }, {
                id: "spike01_03",
                base: w,
                args: [!0]
            }, {
                id: "spike02_03",
                base: w,
                args: [!0]
            }, {
                id: "bandit_03",
                base: T,
                args: [!0]
            }, {
                id: "finish_03",
                base: I,
                args: [!0]
            }];
            this.objectManager = new r(t), this.objectManager.init(), this.createBackgroundLayers();
            for (var e = 0; e < this.config.layers.length; e++) {
                var i = this.addLayer(this.config.layers[e].name, new PIXI.Point(0, 0), this.config.layers[e]);
                i.init()
            }
            this.addLayer("avatar", new PIXI.Point(0, 0), {
                name: "avatar",
                depth: 9.5
            }), this.getLayer("avatar").addChild(this.avatar), this.avatar.init(this), this.avatar.x = 0, this.avatar.y = 0, this.sortChildren(), this.zoom = this.defaultZoom
        }, s.prototype.countOmnitrixes = function() {
            return this.objectManager.getObjectsOfType("coin").length
        }, s.prototype.countKeys = function() {
            return this.objectManager.getObjectsOfType("pick_key").length
        }, s.prototype.zoomLevelOnStart = function(t, e, i) {
            this.changeZoom(t, e), n.animator.setTimeout(function() {
                this.changeZoom(this.defaultZoom, i)
            }, e, this)
        }, s.prototype.update = function() {
            var t = new PIXI.Point(this.avatar.x, this.avatar.y);
            this.avatar.update(), this._isShake && (this._shakeTime += p3.Timestep.deltaTime, this._shakeTime >= this._shakeTimeEnd && (this._shakeTime = 0, this._isShake = !1)), this.focusXActive && (this.x = n.STAGE_WIDTH * this.focusPoint.x - this.avatar.x * this.zoom), this.focusYActive && (this.y = n.STAGE_HEIGHT * this.focusPoint.y - this.avatar.y * this.zoom), this._isShake && (this.x += p3.Utils.randomInt(-1, 1) * (this._shakeStrength.x * (1 - this._shakeTime / this._shakeTimeEnd)), this.y += p3.Utils.randomInt(-1, 1) * (this._shakeStrength.y * (1 - this._shakeTime / this._shakeTimeEnd))), this.scale.x = this.zoom, this.scale.y = this.zoom;
            for (var e = new PIXI.Point(this.focusXActive ? this.avatar.x - t.x : 0, this.focusYActive ? this.avatar.y - t.y : 0), i = 0; i < this.layers.length; i++) this.layers[i].update(e)
        }, s.prototype.dispose = function() {
            this.avatar.dispose()
        }, s.prototype.addLayer = function(t, e, i) {
            var s = new o(t, e, i ? i : {
                name: t,
                depth: 0
            });
            return s.level = this, this.layers.push(s), this.addChild(s), s
        }, s.prototype.getLayer = function(t) {
            for (var e = 0; e < this.layers.length; e++)
                if (this.layers[e].id == t) return this.layers[e];
            return null
        }, s.prototype.createBackgroundLayers = function() {
            var t = [];
            t.push({
                id: "sky",
                image: this.backgroundPrefix + "sky",
                scale: 1,
                xSpeed: 0,
                y: 0
            }), t.push({
                id: "mountains",
                image: this.backgroundPrefix + "bg_mountains",
                scale: 1,
                xSpeed: .05,
                y: 0
            });
            for (var e = 0; e < t.length; e++) {
                var i = this.addLayer(t[e].id, new PIXI.Point(t[e].xSpeed, 0), {
                    name: t[e].id,
                    depth: -1e3
                });
                i.setBackground(t[e].image, t[e].y, t[e].scale)
            }
            var s = [];
            s.push({
                id: "tile001",
                image: this.backgroundPrefix + "mg_tile_001",
                scale: 1,
                xSpeed: .1,
                y: 1,
                id: 0,
                repeat: 2
            }), s.push({
                id: "tile002",
                image: this.backgroundPrefix + "mg_tile_002",
                scale: 1,
                xSpeed: .1,
                y: 1,
                id: 1,
                repeat: 2
            });
            for (var e = 0; e < s.length; e++) {
                var i = this.addLayer(s[e].id, new PIXI.Point(s[e].xSpeed, 0), {
                    name: s[e].id,
                    depth: -1e3
                });
                i.setMgBackground(s[e].image, s[e].y, s[e].scale, s[e].id, s[e].repeat)
            }
        }, s.prototype.sortChildren = function() {
            this.children.sort(function(t, e) {
                return t.config.depth < e.config.depth ? -1 : t.config.depth > e.config.depth ? 1 : 0
            })
        }, s.prototype.changeZoom = function(t, e, i) {
            null != this.zoomTween && this.zoomTween.kill(), t != this.zoom && (this.zoomTween = new TimelineMax, this.zoomTween.to(this, e, {
                zoom: t,
                ease: Sine.easeInOut
            }, i ? i : 0), n.animator.add(this.zoomTween), this.zoomTarget = t)
        }, s.prototype.changeFocusPoint = function(t, e, i) {
            null != this.focusPointTween && this.focusPointTween.kill(), this.focusPoint.equal(t) || (this.focusPointTween = new TimelineMax, this.focusPointTween.to(this.focusPoint, e, {
                x: t.x,
                y: t.y,
                ease: Sine.easeInOut
            }, i ? i : 0), n.animator.add(this.focusPointTween))
        }, s.prototype.shake = function(t, e) {
            this._isShake = !0, this._shakeTime = 0, this._shakeTimeEnd = t, this._shakeStrength = e
        }, s.prototype.gameOver = function(t, e) {
            n.savedData.save(), this.parent.gameOver(t, e || .5)
        }, s.prototype.stopLoops = function() {
            this.avatar.stopLoops();
            for (var t = this.objectManager.getObjectsOfType("marshmallow"), e = 0; e < t.length; e++) t[e].stopLoops()
        }
    }, {
        "../Common": 4,
        "../editor/BezierPath": 8,
        "../game/Avatar": 14,
        "../game/LevelLayer": 17,
        "../game/LevelPath": 18,
        "../game/ObjectBandit": 19,
        "../game/ObjectCameraZoom": 21,
        "../game/ObjectCoin": 22,
        "../game/ObjectCrumblingPlatform": 23,
        "../game/ObjectDecoration": 24,
        "../game/ObjectFinish": 26,
        "../game/ObjectFire": 27,
        "../game/ObjectGate": 28,
        "../game/ObjectHint": 29,
        "../game/ObjectJumpPlatform": 30,
        "../game/ObjectKey": 31,
        "../game/ObjectLevelEnd": 32,
        "../game/ObjectMaggot": 33,
        "../game/ObjectManager": 34,
        "../game/ObjectMascot": 35,
        "../game/ObjectObstacle": 36,
        "../game/ObjectSpike": 37,
        "../game/ObjectSumo": 38,
        "../game/ObjectTeleport": 39,
        "../game/ObjectTime": 40
    }],
    17: [function(t, e, i) {
        function s(t, e, i) {
            this.level = null, this.id = t, this.parallax = "undefined" != typeof e ? e : new PIXI.Point(1, 1), this.bg = null, this.mgBg = null, this.config = i ? i : null, this.paths = [], this.objects = [], this.childrenPaths = [], this.childrenObjects = [], this.teleports = [], this.assetManager = p3.AssetManager.instance, PIXI.Container.call(this)
        }
        var n = t("../Common"),
            o = t("../game/LevelPath");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            null != this.config && (this.queuePaths(this.config.paths), this.addAllObjects())
        }, s.prototype.addTeleportsImmediately = function() {
            for (var t = 0; t < this.objects.length; t++) "teleport_01" === this.objects[t].id && (this.addObject(this.objects[t].id, this.objects[t]), this.objects.splice(t, 1))
        }, s.prototype.addAllObjects = function(t, e) {
            for (var i = 0; i < this.config.objects.length; i++) this.addObject(this.config.objects[i].id, this.config.objects[i])
        }, s.prototype.update = function(t) {
            if (this.mgBg) this.level.avatar.isTeleporting && (t.x = 1), this.x += t.x - t.x * this.parallax.x, this.y = 1 * -this.level.y / this.level.zoom, this.scale.x = this.scale.y = 1 / this.level.zoom;
            else if (this.bg) this.x = 1 * -this.level.x / this.level.zoom, this.y = 1 * -this.level.y / this.level.zoom, this.bg.tilePosition.x -= t.x * this.parallax.x, this.bg.tilePosition.y -= t.y * this.parallax.y, this.bg.scale = new PIXI.Point(1 / this.level.zoom, 1 / this.level.zoom), this.bg.y = 1 * this.bg.yOr / this.level.zoom;
            else {
                this.x += t.x * this.parallax.x, this.y += t.y * this.parallax.y;
                for (var e = this.children.length, i = 0; i < this.childrenPaths.length; i++) this.childrenPaths[i].update();
                for (; this.paths.length > 0 && this.paths[0].bounds[0] < (n.STAGE_WIDTH - this.level.x) * (1 / this.level.zoom) && this.paths[0].bounds[1] > -this.level.x * (1 / this.level.zoom);) {
                    var s = new o(this, this.paths[0]);
                    s.init(), s.render(), this.addChild(s), this.childrenPaths.push(s), this.paths.splice(0, 1)
                }
                e != this.children.length && this.sortChildren()
            }
            for (var i = 0; i < this.childrenObjects.length; i++) this.childrenObjects[i].update()
        }, s.prototype.queuePaths = function(t, e) {
            for (var i = 0; i < t.length; i++) {
                if ("undefined" != typeof e) {
                    for (var s = 0; s < t[i].points.length; s++) t[i].points[s].x += e.x, t[i].points[s].y += e.y;
                    t[i].bounds[0] += e.x, t[i].bounds[1] += e.x
                }
                this.paths.push(t[i])
            }
            this.paths.sort(function(t, e) {
                return t.bounds[0] < e.bounds[0] ? -1 : t.bounds[0] > e.bounds[0] ? 1 : 0
            })
        }, s.prototype.queueObjects = function(t, e) {
            e || (e = new PIXI.Point(0, 0));
            for (var i = 0; i < t.length; i++) "undefined" != typeof e && (t[i].position.x += e.x, t[i].position.y += e.y), this.objects.push(t[i]);
            this.objects.sort(function(t, e) {
                return t.position.x < e.position.x ? -1 : t.position.x > e.position.x ? 1 : 0
            })
        }, s.prototype.addObject = function(t, e) {
            var i = this.level.objectManager.generate(t);
            i.configure(this.level, e), this.addChild(i), this.childrenObjects.push(i)
        }, s.prototype.setBackground = function(t, e, i) {
            var s = this.assetManager.getTexture(t);
            this.bg = new PIXI.extras.TilingSprite(s, n.STAGE_WIDTH, s.crop.height * i), this.bg.tileScale = new PIXI.Point(i, i), this.bg.y = e, this.addChild(this.bg), this.bg.yOr = e
        }, s.prototype.setMgBackground = function(t, e, i, s, n) {
            this.mgBg = new BP.Sprite({
                texture: this.assetManager.getTexture(t),
                visible: !1
            }).addTo(this);
            for (var o = 0; o < n; o++) {
                new BP.Sprite({
                    texture: this.assetManager.getTexture(t),
                    x: this.mgBg.width * o * 2 + s * this.mgBg.width,
                    anchorY: 0
                }).addTo(this)
            }
            for (var o = 0; o < n; o++) {
                new BP.Sprite({
                    texture: this.assetManager.getTexture(t),
                    x: -this.mgBg.width * o * 2 - s * this.mgBg.width,
                    anchorY: 0
                }).addTo(this)
            }
            this.mgBg.yOr = e
        }, s.prototype.sortChildren = function() {
            this.children.sort(function(t, e) {
                return t.config.depth < e.config.depth ? -1 : t.config.depth > e.config.depth ? 1 : t.config.bounds && !e.config.bounds ? -1 : !t.config.bounds && e.config.bounds ? 1 : t.config.bounds && e.config.bounds ? t.config.bounds[0] < e.config.bounds[0] ? -1 : 1 : 0
            })
        }
    }, {
        "../Common": 4,
        "../game/LevelPath": 18
    }],
    18: [function(t, e, i) {
        function s(t, e) {
            this._assetManager = p3.AssetManager.instance, this.layer = t, this.level = t.level, this.config = e, this.bezier = new o, this.wireframe = null, this.textures = null, this.toDelete = !1, this.cid = this.config.cid ? this.config.cid : -1, this.iceBridgePS = null, this.assetManager = p3.AssetManager.instance, PIXI.Container.call(this)
        }
        var n = t("../Common"),
            o = t("../editor/BezierPath");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            for (var t = 0; t < this.config.points.length; t++) this.bezier.addPoint(this.config.points[t].x, this.config.points[t].y);
            if ("" != this.config.data) try {
                this.config.data = JSON.parse(this.config.data)
            } catch (e) {
                console.error("Couldn't parse path JSON"), console.info(e)
            }
        }, s.prototype.update = function() {
            this.iceBridgePS && (this.iceBridgePS.updateSpawnPos(this.textures.mask.x + this.textures.mask.bounds.width, this.textures.mask.y + 50), this.iceBridgePS.update(p3.Timestep.deltaTime))
        }, s.prototype.render = function() {
            if (null != this.textures && this.removeChild(this.textures), this.textures = new PIXI.Container, this.level.debug && (null != this.wireframe && this.removeChild(this.wireframe), this.wireframe = new PIXI.Graphics), this.bezier.points.length > 1) {
                var t = this.bezier.getDrawingPoints();
                if ("" != this.config.texFill && !this.isHidden()) {
                    for (var e = null, i = [], s = 0; s < t.length; s++) i.push(new poly2tri.Point(t[s].x, t[s].y)), (null == e || e < t[s].y) && (e = t[s].y);
                    this.config.closed ? i[0].x == i[i.length - 1].x && i[0].y == i[i.length - 1].y && i.splice(i.length - 1, 1) : (i.push({
                        x: t[t.length - 1].x,
                        y: e + this.config.texFillPadding
                    }), i.push({
                        x: t[0].x,
                        y: e + this.config.texFillPadding
                    }));
                    try {
                        var o = new poly2tri.SweepContext(i);
                        o.triangulate();
                        var a = o.getTriangles()
                    } catch (r) {
                        console.log("Triangulation failed")
                    }
                    if (a) {
                        for (var h = this.assetManager.getTexture(this.config.texFill), l = new Float32Array(6 * a.length), c = new Float32Array(6 * a.length), p = new Uint16Array(3 * a.length), u = this.config.texFillSize, s = 0; s < a.length; s++) {
                            var d = a[s].getPoints();
                            l.set([d[0].x, d[0].y, d[1].x, d[1].y, d[2].x, d[2].y], 6 * s), c.set([d[0].x / u, d[0].y / u, d[1].x / u, d[1].y / u, d[2].x / u, d[2].y / u], 6 * s), p.set([0 + 3 * s, 1 + 3 * s, 2 + 3 * s], 3 * s), this.level.debug
                        }
                        var g = new PIXI.mesh.Mesh(h, l, c, p, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                        this.textures.addChild(g)
                    }
                }
                if ("" != this.config.texWall && !this.isHidden()) {
                    for (var m = this.bezier.getGroundSegments(this.config.texWallAngle, 360), f = this.config.texWallSize, y = this.config.texWallDelta, _ = 0, x = 0; x < m.length; x++) _ += m[x].points.length - 1;
                    for (var h = this.assetManager.getTexture(this.config.texWall), l = new Float32Array(8 * _), c = new Float32Array(8 * _), p = new Uint16Array(6 * _), v = 0, x = 0; x < m.length; x++)
                        for (var T = 0, b = 0, s = 0; s < m[x].normals.length - 1; s++) {
                            l.set([m[x].points[s].x - m[x].normals[s].x * (f * y), m[x].points[s].y - m[x].normals[s].y * (f * y), m[x].points[s + 1].x - m[x].normals[s + 1].x * (f * y), m[x].points[s + 1].y - m[x].normals[s + 1].y * (f * y), m[x].points[s + 1].x + m[x].normals[s + 1].x * (f * (1 - y)), m[x].points[s + 1].y + m[x].normals[s + 1].y * (f * (1 - y)), m[x].points[s].x + m[x].normals[s].x * (f * (1 - y)), m[x].points[s].y + m[x].normals[s].y * (f * (1 - y))], 8 * v);
                            var w = new PIXI.Point(m[x].points[s].x - m[x].points[s + 1].x, m[x].points[s].y - m[x].points[s + 1].y);
                            b = w.getLength(), c.set([T / f, 0, (T + b) / f, 0, (T + b) / f, 1, T / f, 1], 8 * v), p.set([0 + 4 * v, 1 + 4 * v, 2 + 4 * v, 0 + 4 * v, 2 + 4 * v, 3 + 4 * v], 6 * v), T += b, this.level.debug && (this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(l[8 * v + 0], l[8 * v + 0 + 1]), this.wireframe.lineTo(l[8 * v + 2], l[8 * v + 2 + 1]), this.wireframe.lineTo(l[8 * v + 4], l[8 * v + 4 + 1]), this.wireframe.lineTo(l[8 * v + 6], l[8 * v + 6 + 1]), this.wireframe.lineTo(l[8 * v + 0], l[8 * v + 0 + 1]), this.wireframe.lineTo(l[8 * v + 4], l[8 * v + 4 + 1])), v++
                        }
                    var g = new PIXI.mesh.Mesh(h, l, c, p, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                    this.textures.addChild(g)
                }
                var m = this.bezier.getGroundSegments(0, this.config.texWallAngle, "" == this.config.texGroundEdge),
                    S = this.config.texGroundSize,
                    y = this.config.texGroundDelta;
                if ("" != this.config.texGround && !this.isHidden()) {
                    for (var _ = 0, x = 0; x < m.length; x++) _ += m[x].points.length - 1;
                    for (var h = this.assetManager.getTexture(this.config.texGround), l = new Float32Array(8 * _), c = new Float32Array(8 * _), p = new Uint16Array(6 * _), v = 0, x = 0; x < m.length; x++) {
                        0 != x || "right" != this.config.texGroundEdgeSide && "none" != this.config.texGroundEdgeSide || (m[x].normals[0] = {
                            x: 0,
                            y: 1
                        }), x != m.length - 1 || "left" != this.config.texGroundEdgeSide && "none" != this.config.texGroundEdgeSide || (m[x].normals[m[x].normals.length - 1] = {
                            x: 0,
                            y: 1
                        });
                        for (var b = 0, s = 0; s < m[x].normals.length - 1; s++) {
                            var w = new PIXI.Point(m[x].points[s].x - m[x].points[s + 1].x, m[x].points[s].y - m[x].points[s + 1].y);
                            b += w.getLength()
                        }
                        for (var f = b / Math.max(1, Math.round(b / S)), T = 0, b = 0, s = 0; s < m[x].normals.length - 1; s++) {
                            l.set([m[x].points[s].x - m[x].normals[s].x * (f * y), m[x].points[s].y - m[x].normals[s].y * (S * y), m[x].points[s + 1].x - m[x].normals[s + 1].x * (f * y), m[x].points[s + 1].y - m[x].normals[s + 1].y * (S * y), m[x].points[s + 1].x + m[x].normals[s + 1].x * (f * (1 - y)), m[x].points[s + 1].y + m[x].normals[s + 1].y * (S * (1 - y)), m[x].points[s].x + m[x].normals[s].x * (f * (1 - y)), m[x].points[s].y + m[x].normals[s].y * (S * (1 - y))], 8 * v);
                            var w = new PIXI.Point(m[x].points[s].x - m[x].points[s + 1].x, m[x].points[s].y - m[x].points[s + 1].y);
                            b = w.getLength(), c.set([T / f, 0, (T + b) / f, 0, (T + b) / f, 1, T / f, 1], 8 * v), p.set([0 + 4 * v, 1 + 4 * v, 2 + 4 * v, 0 + 4 * v, 2 + 4 * v, 3 + 4 * v], 6 * v), T += b, this.level.debug && (this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(l[8 * v + 0], l[8 * v + 0 + 1]), this.wireframe.lineTo(l[8 * v + 2], l[8 * v + 2 + 1]), this.wireframe.lineTo(l[8 * v + 4], l[8 * v + 4 + 1]), this.wireframe.lineTo(l[8 * v + 6], l[8 * v + 6 + 1]), this.wireframe.lineTo(l[8 * v + 0], l[8 * v + 0 + 1]), this.wireframe.lineTo(l[8 * v + 4], l[8 * v + 4 + 1])), v++
                        }
                    }
                    var g = new PIXI.mesh.Mesh(h, l, c, p, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                    this.textures.addChild(g)
                }
                if ("" != this.config.texGroundEdge && !this.isHidden()) {
                    for (var h = this.assetManager.getTexture(this.config.texGroundEdge), l = new Float32Array(16 * m.length), c = new Float32Array(16 * m.length), p = new Uint16Array(12 * m.length), x = 0; x < m.length; x++) {
                        for (var b = 0, s = 0; s < m[x].normals.length - 1; s++) {
                            var w = new PIXI.Point(m[x].points[s].x - m[x].points[s + 1].x, m[x].points[s].y - m[x].points[s + 1].y);
                            b += w.getLength()
                        }
                        var f = b / Math.max(1, Math.round(b / S));
                        if (x > 0 || "left" == this.config.texGroundEdgeSide || "" == this.config.texGroundEdgeSide) {
                            var P = m[x].points[0],
                                I = m[x].normals[0],
                                w = new PIXI.Point(m[x].points[0].x - m[x].points[1].x, m[x].points[0].y - m[x].points[1].y);
                            w.normalize(), l.set([P.x - I.x * (f * y) + w.x * f, P.y - I.y * (S * y - w.y * S), P.x - I.x * (f * y), P.y - I.y * (S * y), P.x + I.x * (f * (1 - y)), P.y + I.y * (S * (1 - y)), P.x + I.x * (f * (1 - y)) + w.x * f, P.y + I.y * (S * (1 - y) + w.y * S)], 8 * x * 2), c.set([0, 0, 1, 0, 1, 1, 0, 1], 8 * x * 2), p.set([0 + 2 * x * 4, 1 + 2 * x * 4, 2 + 2 * x * 4, 0 + 2 * x * 4, 2 + 2 * x * 4, 3 + 2 * x * 4], 6 * x * 2), this.level.debug && (this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(l[2 * x * 8 + 0], l[2 * x * 8 + 0 + 1]), this.wireframe.lineTo(l[2 * x * 8 + 2], l[2 * x * 8 + 2 + 1]), this.wireframe.lineTo(l[2 * x * 8 + 4], l[2 * x * 8 + 4 + 1]), this.wireframe.lineTo(l[2 * x * 8 + 6], l[2 * x * 8 + 6 + 1]), this.wireframe.lineTo(l[2 * x * 8 + 0], l[2 * x * 8 + 0 + 1]), this.wireframe.lineTo(l[2 * x * 8 + 4], l[2 * x * 8 + 4 + 1]))
                        }
                        if (x < m.length - 1 || "right" == this.config.texGroundEdgeSide || "" == this.config.texGroundEdgeSide) {
                            var M = m[x].normals.length - 1,
                                P = m[x].points[m[x].normals.length - 1],
                                I = m[x].normals[m[x].normals.length - 1],
                                w = new PIXI.Point(m[x].points[M].x - m[x].points[M - 1].x, m[x].points[M].y - m[x].points[M - 1].y);
                            w.normalize(), l.set([P.x - I.x * (f * y) + w.x * f, P.y - I.y * (S * y - w.y * S), P.x - I.x * (f * y), P.y - I.y * (S * y), P.x + I.x * (f * (1 - y)), P.y + I.y * (S * (1 - y)), P.x + I.x * (f * (1 - y)) + w.x * f, P.y + I.y * (S * (1 - y) + w.y * S)], 8 * (2 * x + 1)), c.set([0, 0, 1, 0, 1, 1, 0, 1], 8 * (2 * x + 1)), p.set([0 + 4 * (2 * x + 1), 1 + 4 * (2 * x + 1), 2 + 4 * (2 * x + 1), 0 + 4 * (2 * x + 1), 2 + 4 * (2 * x + 1), 3 + 4 * (2 * x + 1)], 6 * (2 * x + 1)), this.level.debug && (this.wireframe.lineStyle(1, 65280, .5), this.wireframe.moveTo(l[8 * (2 * x + 1) + 0], l[8 * (2 * x + 1) + 0 + 1]), this.wireframe.lineTo(l[8 * (2 * x + 1) + 2], l[8 * (2 * x + 1) + 2 + 1]), this.wireframe.lineTo(l[8 * (2 * x + 1) + 4], l[8 * (2 * x + 1) + 4 + 1]), this.wireframe.lineTo(l[8 * (2 * x + 1) + 6], l[8 * (2 * x + 1) + 6 + 1]), this.wireframe.lineTo(l[8 * (2 * x + 1) + 0], l[8 * (2 * x + 1) + 0 + 1]), this.wireframe.lineTo(l[8 * (2 * x + 1) + 4], l[8 * (2 * x + 1) + 4 + 1]))
                        }
                    }
                    var g = new PIXI.mesh.Mesh(h, l, c, p, PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES);
                    this.textures.addChild(g)
                }
            }
            if (this.addChild(this.textures), this.level.debug) {
                this.wireframe.moveTo(this.bezier.points[0].x, this.bezier.points[0].y), this.wireframe.lineStyle(2, 16711680);
                for (var s = 1; s < this.bezier.points.length; s += 3) this.wireframe.bezierCurveTo(this.bezier.points[s].x, this.bezier.points[s].y, this.bezier.points[s + 1].x, this.bezier.points[s + 1].y, this.bezier.points[s + 2].x, this.bezier.points[s + 2].y);
                for (var s = 0; s < this.bezier.points.length; s++) s % 3 == 0 && (s == this.pointIndex ? this.wireframe.lineStyle(2, 65280, 1) : this.wireframe.lineStyle(0, 16711680, 0), this.wireframe.beginFill(16711680), this.wireframe.drawCircle(this.bezier.points[s].x, this.bezier.points[s].y, 5), this.wireframe.endFill());
                this.addChild(this.wireframe)
            }
            if (this.config.artificial) {
                var k = this.textures.getBounds();
                this.textures.mask = new PIXI.Graphics, this.textures.mask.beginFill(), this.textures.mask.drawRect(0, 0, k.width, k.height), this.textures.mask.endFill(), this.textures.mask.x = k.x - k.width, this.textures.mask.y = k.y, this.textures.mask.bounds = k, this.addChild(this.textures.mask), this.maskTween = new TimelineMax({
                    onComplete: function() {
                        this.config.collisions = 0
                    },
                    onCompleteScope: this
                }), this.maskTween.to(this.textures.mask, .5, {
                    x: k.x,
                    ease: Sine.easeOut,
                    onComplete: function() {
                        this.iceBridgePS.emit = !1
                    },
                    onCompleteScope: this
                }, 0), this.maskTween.to(this.textures, .5, {
                    alpha: 0,
                    ease: Sine.easeIn
                }, .9), n.animator.add(this.maskTween), this.iceBridgePS = new cloudkid.Emitter(this.level, [this._assetManager.getTexture("particle_dust_001"), this._assetManager.getTexture("particle_dust_002"), this._assetManager.getTexture("particle_dust_003"), this._assetManager.getTexture("particle_dust_004")], this._assetManager.getJSON("particle_ice_bridge")), this.iceBridgePS.emit = !0
            }
        }, s.prototype.dispose = function() {
            this.iceBridgePS && this.iceBridgePS.destroy()
        }, s.prototype.isHidden = function() {
            return "" != this.config.data && !!this.config.data.hidden
        }, s.prototype.isShrinkPath = function() {
            return "" != this.config.data && !!this.config.data.shrinkPath
        }, s.prototype.isArtificialPath = function() {
            return !!this.config.artificial
        }
    }, {
        "../Common": 4,
        "../editor/BezierPath": 8
    }],
    19: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "enemy", !1), this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e, this.spineScale = .75, this.spine = null, this.spineHalfWidth = 110 * this.spineScale * .8, this.spineHeight = 280 * this.spineScale * .8, this.currentAnimation = null, this.orientation = 1, this.direction = 1, this.pathTween = null, this.path = [0, 0], this.data = null, this.isMoving = !1, this.canFire = !1, this.name = "bandit", this.destroyPS = null
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {}, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.initSpine = function() {
            if (this.spineData = n.enemiesAnimationData.bandit, this.spine = new PIXI.spine.Spine(this.spineData), this.spine.skeleton.setToSetupPose(), this.spine.skeleton.setSkin(null), this.spine.skeleton.setSkinByName("bandit_00" + (Math.floor(3 * Math.random()) + 1)), null !== this.data && this.data.orientation) switch (this.data.orientation.toLowerCase()) {
                case "left":
                    this.orientation = -1;
                    break;
                case "right":
                    this.orientation = 1
            }
            this.direction = this.orientation, this.spine.scale.set(this.spineScale), this.spine.scale.x = this.orientation * this.spineScale;
            for (var t = ["idle", "walk", "shoot"], e = 0; e < t.length; e++)
                for (var i = 0; i < t.length; i++) e !== i && this.spine.stateData.setMixByName(t[e], t[i], .15);
            this.spine.autoUpdate = !1, this.addChild(this.spine)
        }, s.prototype.getData = function() {
            var t = null;
            if ("" !== this.config.data) try {
                t = JSON.parse(this.config.data)
            } catch (e) {
                console.error("Error parsing Bandit")
            }
            return t
        }, s.prototype.setAnimation = function(t, e) {
            e && t === this.currentAnimation || (this.spine.state.setAnimationByName(0, t, e), this.currentAnimation = t)
        }, s.prototype.playDefaultAnimation = function() {
            this.isMoving ? this.setAnimation("walk", !0) : this.setAnimation("idle", !0)
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.data = this.getData(), null === this.spine && (this.initSpine(), this.addChild(this.spine)), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.spine.visible = !0;
            var i = 2 * this.spineHalfWidth,
                s = this.spineHeight;
            this.collisionRect = new PIXI.Rectangle(-i / 2, (-s), i, s), this.setupPath(), this.playDefaultAnimation(), this.animateAlongPath(), this.data.fireRate && this.data.fireRate > 0 && (this.canFire = !0), this.destroyable && (this.destroyPS && this.destroyPS.destroy(), this.destroyPS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_smoke_001"), this._assetManager.getTexture("particle_smoke_002"), this._assetManager.getTexture("particle_smoke_003"), this._assetManager.getTexture("particle_smoke_004")], this._assetManager.getJSON("particle_emitter_attack")), this.destroyPS.emit = !1, this.destroyPS.updateSpawnPos(0, -this.spine.height / 2)), this.level.debug && this.drawCollision()
        }, s.prototype.fire = function() {
            this.canFire && (Math.abs(this.level.avatar.x - (this.x + this.spine.x)) < this.level.parent.halfWidth ? (this.setAnimation("shoot", !1), this.spine.state.onEvent = this.onShootingEvent.bind(this), this.spine.state.onComplete = this.onShootingComplete.bind(this), this.pathTween && this.pathTween.pause()) : this.onShootingComplete())
        }, s.prototype.onShootingEvent = function(t, e) {
            "shoot" === e.data.name && this.level.avatar.enemyFire.call(this.level.avatar, this)
        }, s.prototype.onShootingComplete = function() {
            this.spine.state.onComplete = null, this.playDefaultAnimation(), this.pathTween && this.pathTween.resume(), n.animator.setTimeout(function() {
                this.fire()
            }, this.data.fireRate + this.data.fireRate / 100 * (this.data.fireRateVariability ? this.data.fireRateVariability : 0), this)
        }, s.prototype.setupPath = function() {
            null !== this.data && this.data.left && (this.path[0] = this.data.left), null !== this.data && this.data.right && (this.path[1] = this.data.right), 0 === this.path[0] && 0 === this.path[1] ? this.isMoving = !1 : this.isMoving = !0
        }, s.prototype.animateAlongPath = function() {
            if (this.isMoving) {
                var t = 120,
                    e = 1 === this.orientation ? -this.path[0] : this.path[1],
                    i = this.orientation * (this.path[0] + this.path[1]) + e;
                this.spine.scale.x = Math.sign(e) * this.spineScale;
                var s = Math.abs(e / t),
                    n = (this.path[0] + this.path[1]) / t;
                this.pathTween = new TimelineMax, this.pathTween.to(this.spine.position, s, {
                    x: e,
                    ease: Linear.easeNone,
                    onUpdate: function() {
                        this.collisionRect.x = this.spine.x - this.spineHalfWidth
                    },
                    onUpdateScope: this,
                    onComplete: function() {
                        this.orientation *= -1, this.direction = -1 * this.orientation,
                            this.spine.scale.x = -this.orientation * this.spineScale
                    },
                    onCompleteScope: this
                }), this.pathTween.to(this.spine.position, n, {
                    x: i,
                    repeat: -1,
                    yoyo: !0,
                    ease: Linear.easeNone,
                    onUpdate: function() {
                        this.collisionRect.x = this.spine.x - this.spineHalfWidth
                    },
                    onUpdateScope: this,
                    onRepeat: function() {
                        this.orientation *= -1, this.direction = -1 * this.orientation, this.spine.scale.x = -this.orientation * this.spineScale
                    },
                    onRepeatScope: this
                })
            }
        }, s.prototype.dispose = function() {
            this.pathTween && this.pathTween.kill(), this.destroyPS && (this.destroyPS.destroy(), this.destroyPS = null)
        }, s.prototype.update = function() {
            this.spine.visible && this.spine.update(p3.Timestep.deltaTime), this.destroyPS && this.destroyPS.update(p3.Timestep.deltaTime), this.level.debug && this.drawSpineCollision()
        }, s.prototype.drawSpineCollision = function() {
            this.collisionGraphic && this.removeChild(this.collisionGraphic), this.collisionGraphic = new PIXI.Graphics, this.addChild(this.collisionGraphic), this.collisionGraphic.lineStyle(2, 16711935), null !== this.collisionRect ? this.collisionGraphic.drawRect(this.collisionRect.x, this.collisionRect.y, this.collisionRect.width, this.collisionRect.height) : null !== this.collisionCircle && this.collisionGraphic.drawCircle(this.collisionCircle.x, this.collisionCircle.y, this.collisionCircle.radius)
        }, s.prototype.hit = function(t) {
            this.interactive && (this.canFire = !1, this.interactive = !1)
        }, s.prototype.destroy = function() {
            this.interactive && this.destroyable && (this.canFire = !1, this.interactive = !1, this.spine.visible = !1, this.level.shake(.4, new PIXI.Point(20, 10)), this.pathTween && this.pathTween.kill(), this.destroyPS.updateSpawnPos(this.spine.x, -this.spine.height / 2), this.destroyPS.emit = !0)
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    20: [function(t, e, i) {
        function s(t, e, i) {
            o.call(this, "shot", !1), this.visible = !1, this.avatar = t, this.level = e, this.sprite = i, this.addChild(this.sprite), this.velocity = new PIXI.Point(0, 0), this.gravity = 0, this.active = !1, this.timeline = null, this.collisionCircle = new PIXI.Circle(0, 0, 80), this.detectionCircle = new PIXI.Circle(0, 0, this.collisionCircle.radius), this.levelObjects = null, this.direction = 1, this.firingPS = null, this.explodePS = null, this.level.debug && this.drawCollision()
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.update = function() {
            if (this.firingPS && ("overflow" === n.savedData.character ? this.firingPS.updateSpawnPos(this.sprite.x, this.sprite.y) : this.firingPS.updateSpawnPos(this.sprite.x - 40, this.sprite.y), this.firingPS.update(p3.Timestep.deltaTime)), this.explodePS && this.explodePS.update(p3.Timestep.deltaTime), this.active) {
                this.x += this.velocity.x * p3.Timestep.deltaTime * this.direction, this.detectionCircle.x = this.x + this.collisionCircle.x, this.detectionCircle.y = this.y + this.collisionCircle.y, this.levelObjects = this.level.objectManager.getObjectsOfType("obstacle");
                for (var t = 0; t < this.levelObjects.length; t++)
                    if (this.levelObjects[t].interactive && this.levelObjects[t].destroyable && this.avatar.checkCollision(this.detectionCircle, this.levelObjects[t])) return void this.explode();
                if ("overflow" === n.savedData.character)
                    for (this.levelObjects = this.level.objectManager.getObjectsOfType("fire"), t = 0; t < this.levelObjects.length; t++)
                        if (this.levelObjects[t].interactive && this.levelObjects[t].destroyable && this.avatar.checkCollision(this.detectionCircle, this.levelObjects[t])) return this.level.parent.onFireExtinguished(), this.levelObjects[t].destroy(), void this.explode();
                for (this.levelObjects = this.level.objectManager.getObjectsOfType("enemy"), t = 0; t < this.levelObjects.length; t++)
                    if (this.levelObjects[t].interactive && this.levelObjects[t].destroyable && this.avatar.checkCollision(this.detectionCircle, this.levelObjects[t])) return this.level.parent.onEnemyKilled(), this.levelObjects[t].destroy(), void this.explode()
            }
        }, s.prototype.start = function() {
            switch (this.visible = !0, this.direction = this.avatar.direction, this.active = !0, this.sprite.alpha = 1, this.scale.x = this.direction, this.velocity.set(this.avatar.bulletSpeed, 0), n.savedData.character) {
                case "heatblast":
                    this.firingPS = new cloudkid.Emitter(this.sprite, [this._assetManager.getTexture("particle_projectile_heatblast")], this._assetManager.getJSON("particle_char_heatblast_shoot")), this.firingPS.emit = !1, this.explodePS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_projectile_heatblast")], this._assetManager.getJSON("particle_hit_heatblast")), this.explodePS.emit = !1;
                    break;
                case "overflow":
                    this.firingPS = new cloudkid.Emitter(this.sprite, [this._assetManager.getTexture("particle_projectile_overflow_001"), this._assetManager.getTexture("particle_projectile_overflow_002"), this._assetManager.getTexture("particle_projectile_overflow_003")], this._assetManager.getJSON("particle_char_overflow_shoot")), this.firingPS.emit = !1, this.explodePS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_hit_overflow_001"), this._assetManager.getTexture("particle_hit_overflow_002")], this._assetManager.getJSON("particle_hit_overflow")), this.explodePS.emit = !1
            }
            this.firingPS.updateSpawnPos(this.x, this.y), this.firingPS._posChanged = !1, this.firingPS.emitterLifetime = 2, this.firingPS.emit = !0, this.timeline && this.timeline.kill(), this.timeline = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.doSeppuku()
                }
            }), this.timeline.to(this.sprite, this.avatar.bulletLife, {
                alpha: 0,
                ease: Quart.easeIn
            }, 0), n.animator.add(this.timeline)
        }, s.prototype.explode = function() {
            this.timeline && this.timeline.kill(), this.firingPS && (this.firingPS.emit = !1, this.firingPS.cleanup(), this.firingPS = null);
            var t = .4;
            this.explodePS.updateSpawnPos(this.sprite.x, this.sprite.y), this.explodePS._posChanged = !1, this.explodePS.emitterLifetime = t, this.explodePS.emit = !0, n.animator.setTimeout(function() {
                this.explodePS.destroy(), this.explodePS = null
            }, t, this), this.doSeppuku()
        }, s.prototype.doSeppuku = function() {
            this.timeline && this.timeline.kill(), this.firingPS && (this.firingPS.destroy(), this.firingPS = null), this.active = !1, this.sprite.visible = !1
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    21: [function(t, e, i) {
        function s() {
            n.call(this, "camera_zoom", !1), this.level = null, this.config = null, this.cameraZoom = {
                zoom: 1,
                time: .4,
                delay: 0
            }
        }
        var n = (t("../Common"), t("./GameObject"));
        e.exports = s, s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null == this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            if (this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = this._assetManager.getTexture(this.config.texture), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, "" != this.config.data) try {
                var i = JSON.parse(this.config.data);
                this.cameraZoom.zoom = i.zoom ? i.zoom : this.cameraZoom.zoom, this.cameraZoom.time = i.time ? i.time : this.cameraZoom.time, this.cameraZoom.delay = i.delay ? i.delay : this.cameraZoom.delay
            } catch (s) {
                console.error("Camera zoom object data error %s", this.config.data)
            }
            this.interactive = !0, this.sprite.visible = this.level.debug;
            var n = this.sprite.width,
                o = this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-n * this.sprite.anchor.x, -this.sprite.anchor.y * o, n, o)
        }, s.prototype.dispose = function() {}, s.prototype.update = function() {}, s.prototype.hit = function() {
            this.interactive && (this.interactive = !1, this.level.changeZoom(this.cameraZoom.zoom, this.cameraZoom.time, this.cameraZoom.delay))
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    22: [function(t, e, i) {
        function s() {
            o.call(this, "coin", !1), this.level = null, this.config = null, this.sprite = null, this.attracted = !1, this.attractionTimeMax = .3, this.attractionPosition = new PIXI.Point, this.timeline = null, this.pickupPS = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_char_transform_001")], n.assetManager.getJSON("particle_pickup_omnitrix")), this.pickupPS.emit = !1
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null == this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null, this.explosionTween = null, this.explosionTween && this.explosionTween.kill()
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = n.assetManager.getTexture("pick_up"), this.sprite.anchor.set(.5), this.sprite.scale.set(1), this.sprite.visible = !0, this.interactive = !0, this.sprite.visible = !0, this.attracted = !1, this.attractionTarget = 0, this.attractionTime = 0, this.rotation = Math.random(0, 360) * PIXI.DEG_TO_RAD, this.collisionCircle = new PIXI.Circle(0, 0, this.sprite.texture.width / 2 * 1.2), this.timeline ? this.timeline.resume() : (this.sprite.position.set(0, -10), this.timeline = new TimelineMax, this.timeline.to(this.sprite, .75, {
                y: 10,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, Math.random()), this.timeline.to(this.sprite.scale, .5, {
                x: 1.3,
                y: 1.3,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, 0), n.animator.add(this.timeline)), e.explosion && this.explosion(e.explosion.angle, e.explosion.distance, e.explosion.time), this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {
            this.timeline && this.timeline.pause()
        }, s.prototype.update = function() {
            if (this.pickupPS.update(p3.Timestep.deltaTime), this.attracted) {
                if (this.attractionTime += p3.Timestep.deltaTime, this.attractionTime > this.attractionTimeMax) return this.sprite.visible = !1, void(this.attracted = !1);
                this.x = this.attractionPosition.x + (this.attractionTarget.x - 20 - this.attractionPosition.x) * this.attractionTime / this.attractionTimeMax, this.y = this.attractionPosition.y + (this.attractionTarget.y - 20 - this.attractionPosition.y) * this.attractionTime / this.attractionTimeMax, this.sprite.scale.x = 1 - this.attractionTime / this.attractionTimeMax, this.sprite.scale.y = 1 - this.attractionTime / this.attractionTimeMax
            }
        }, s.prototype.pickup = function(t) {
            if (this.interactive) return this.interactive = !1, this.attracted = !0, this.attractionTarget = t, this.attractionPosition.set(this.x, this.y), this.pickupPS.emit = !0, this.explosionTween && this.explosionTween.kill(), n.play("sfx_omnitrix_open_00"), !0
        }, s.prototype.explosion = function(t, e, i) {
            this.explosionTween = new TimelineMax, this.explosionTween.to(this, i, {
                x: this.x + Math.cos(t * PIXI.DEG_TO_RAD) * e,
                ease: Quad.easeOut,
                y: this.y + Math.sin(t * PIXI.DEG_TO_RAD) * e,
                ease: Quad.easeOut
            }, 0), n.animator.add(this.explosionTween)
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    23: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "crumblingPlatform", !1), this.sprite = null, this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.createPath = function() {
            var t = n.assetManager.getTexture(this.config.texture).width,
                e = [{
                    x: this.x - t / 2,
                    y: this.y
                }, {
                    x: this.x,
                    y: this.y
                }, {
                    x: this.x,
                    y: this.y
                }, {
                    x: this.x + t / 2,
                    y: this.y
                }];
            this.path = {
                bounds: [e[0].x, e[e.length - 1].x],
                closed: !1,
                collisions: 2,
                data: "",
                depth: -1,
                points: e,
                texFill: "",
                texFillPadding: 0,
                texFillSize: 256,
                texGround: "",
                texGroundDelta: .3,
                texGroundEdge: "",
                texGroundEdgeSide: "",
                texGroundSize: 64,
                texWall: "",
                texWallAngle: 70,
                texWallDelta: 0,
                texWallSize: 64,
                artificial: !1,
                cid: Math.floor(Date.now() * Math.random())
            }, this.level.getLayer("platforms").queuePaths([this.path])
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = n.assetManager.getTexture(this.config.texture), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.sprite.visible = !0;
            var i = this.sprite.width,
                s = .05 * this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x, -this.sprite.anchor.y * s - s / 2, i, s), this.createPath(), this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {}, s.prototype.update = function() {}, s.prototype.hit = function(t) {
            this.interactive && (this.interactive = !1, TweenMax.to(this, .12, {
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: function() {
                    this.visible = !1;
                    for (var t = this.level.getLayer("platforms"), e = 0; e < t.childrenPaths.length && (!t.childrenPaths[e].cid || t.childrenPaths[e].cid !== this.path.cid); e++);
                    t.childrenPaths[e].dispose(), t.removeChild(t.childrenPaths[e]), t.childrenPaths.splice(e, 1)
                },
                onCompleteScope: this
            }))
        }, s.prototype.destroy = function() {
            this.interactive && this.destroyable && (this.interactive = !1, this.sprite.visible = !1, this.level.shake(.4, new PIXI.Point(20, 10)))
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    24: [function(t, e, i) {
        function s() {
            this.level = null, this.config = null, this.sprite = null, n.call(this, "decoration", !1)
        }
        var n = (t("../Common"), t("./GameObject"));
        e.exports = s, s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null == this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = this._assetManager.getTexture(this.config.texture), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.sprite.rotation = this.config.rotation * PIXI.DEG_TO_RAD
        }, s.prototype.dispose = function() {}, s.prototype.update = function() {}
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    25: [function(t, e, i) {
        function s(t, e, i, s) {
            o.call(this, "enemyShot", !1), this.visible = !1, this.avatar = t, this.level = e, this.owner = i, this.sprite = s, this.addChild(this.sprite), this.velocity = new PIXI.Point(0, 0), this.gravity = 0, this.active = !1, this.timeline = null, this.collisionCircle = new PIXI.Circle(0, 0, 30), this.levelObjects = null, this.direction = 1, this.firingPS = null, this.explodePS = null, this.level.debug && this.drawCollision()
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.update = function() {
            if (this.active) {
                this.x += this.velocity.x * p3.Timestep.deltaTime * this.direction, this.collisionCircle.x = this.x, this.collisionCircle.y = this.y, this.avatar.checkCollision(this.collisionCircle, this.avatar) && (this.explode(), this.level.parent.onAvatarShot()), this.levelObjects = this.level.objectManager.getObjectsOfType("obstacle");
                for (var t = 0; t < this.levelObjects.length; t++)
                    if (this.levelObjects[t].interactive && this.levelObjects[t].destroyable && this.avatar.checkCollision(this.collisionCircle, this.levelObjects[t])) return void this.explode()
            }
        }, s.prototype.start = function() {
            this.visible = !0, this.direction = this.owner.direction, this.active = !0, this.sprite.alpha = 1, this.scale.x = this.direction, this.velocity.set(this.avatar.enemyBulletSpeed, 0), this.timeline && this.timeline.kill(), this.timeline = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.doSeppuku()
                }
            }), this.timeline.to(this.sprite, this.avatar.enemyBulletLife, {
                alpha: 0,
                ease: Quart.easeIn
            }, 0), n.animator.add(this.timeline)
        }, s.prototype.explode = function() {
            this.timeline && this.timeline.kill(), this.doSeppuku()
        }, s.prototype.doSeppuku = function() {
            this.timeline && this.timeline.kill(), this.active = !1, this.sprite.visible = !1
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    26: [function(t, e, i) {
        function s() {
            this.level = null, this.config = null, this.sprite = null, this.fountain = null, o.call(this, "finish", !1)
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = this._assetManager.getTexture(this.config.texture), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.sprite.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.fountain = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_fountain_001"), n.assetManager.getTexture("particle_firework_fountain_002"), n.assetManager.getTexture("particle_firework_fountain_003")], n.assetManager.getJSON("particle_firework_fountain")), this.fountain.emit = !1, this.fountain.updateSpawnPos(this.sprite.x - 20, this.sprite.y)
        }, s.prototype.dispose = function() {
            this.fountain && (this.fountain.destroy(), this.fountain = null)
        }, s.prototype.update = function() {
            this.fountain && this.fountain.emit && this.fountain.update(p3.Timestep.deltaTime)
        }, s.prototype.sparkle = function() {
            this.fountain.emit = !0
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    27: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "fire", !1), this.sprite = null, this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e, this.firePS = null, this.textureOn = null, this.textureOff = null
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.textureOn = this.config.texture, this.textureOff = this.textureOn.split("_on")[0] + "_off", this.sprite.texture = n.assetManager.getTexture(this.textureOn), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.sprite.visible = !0;
            var i = .6 * this.sprite.width,
                s = .95 * this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x, -this.sprite.anchor.y * s, i, s), this.config.id.match(/carriage\_([0-9]{2})\_([0-9]{2})/i) && (i = .3 * this.sprite.width, this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x * 2, -this.sprite.anchor.y * s, i, s));
            this.config.texture.match(/theme\_([0-9]{3})\_([a-z0-9\_]+)/i)[1];
            this.firePS && this.firePS.destroy(), this.firePS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_fire_001"), this._assetManager.getTexture("particle_fire_002")], this._assetManager.getJSON("particle_obstacle_fire")), this.firePS.emit = !0, this.firePS.updateSpawnPos(0, -80), this.destroyable, this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {
            this.firePS && (this.firePS.destroy(), this.firePS = null)
        }, s.prototype.update = function() {
            this.firePS && this.firePS.update(p3.Timestep.deltaTime)
        }, s.prototype.hit = function(t) {
            this.interactive && (this.interactive = !1)
        }, s.prototype.destroy = function() {
            this.interactive && this.destroyable && (this.interactive = !1, this.sprite.texture = n.assetManager.getTexture(this.textureOff), this.level.shake(.4, new PIXI.Point(20, 10)), this.firePS.emit = !1)
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    28: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "gate", !1), this.sprite = null, this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e, this.id = null, this.color = null, this.isLocked = !0
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite), this.secondSprite = new PIXI.Sprite, this.secondSprite.anchorX = .5, this.secondSprite.anchorY = 1, this.sprite.addChild(this.secondSprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y;
            var i = this.config.id.split("_")[1];
            this.id = parseInt(i.slice(-1)), this.color = i.substring(0, i.length - 2), this.textureBack = "theme_00" + this.id + "_obstacle_gate_" + this.color + "_back", this.textureClosed = "theme_00" + this.id + "_obstacle_gate_" + this.color + "_closed", this.textureOpen = "theme_00" + this.id + "_obstacle_gate_" + this.color + "_open", this.sprite.texture = n.assetManager.getTexture(this.textureBack), this.isLocked ? this.turnOn() : this.turnOff(), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.sprite.visible = !0;
            var s = this.sprite.width,
                o = this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-s * this.sprite.anchor.x - 7, -this.sprite.anchor.y * o, s, o), this.level.debug && this.drawCollision()
        }, s.prototype.update = function() {}, s.prototype.turnOn = function() {
            this.secondSprite.texture = n.assetManager.getTexture(this.textureClosed), this.isLocked = !0
        }, s.prototype.turnOff = function() {
            this.secondSprite.texture = n.assetManager.getTexture(this.textureOpen), this.isLocked = !1, n.play("sfx_door_open")
        }, s.prototype.hit = function() {
            if (this.isLocked) return n.ownedKeys[this.color] ? void this.turnOff() : (this.level.parent.onLockedGateHit && this.level.parent.onLockedGateHit(this.color), void(this.level.avatar.gateHit = !0))
        }, s.prototype.dispose = function() {}
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    29: [function(t, e, i) {
        function s() {
            o.call(this, "hint", !1), this.sprite = null, this.data = null, this.level = null, this.config = null, this.isIn = !1
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.getData = function() {
            var t = null;
            if ("" !== this.config.data) try {
                t = JSON.parse(this.config.data)
            } catch (e) {
                console.error("Error parsing Hint object")
            }
            return t
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.data = this.getData(), this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = n.assetManager.getTexture(this.config.texture), this.sprite.anchor.x = this.config.anchor.x, this.sprite.anchor.y = this.config.anchor.y, this.sprite.scale.x = this.config.scale.x, this.sprite.scale.y = this.config.scale.y, this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.sprite.visible = this.level.debug;
            var i = this.sprite.width,
                s = this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x, -this.sprite.anchor.y * s, i, s)
        }, s.prototype.dispose = function() {}, s.prototype.update = function() {}, s.prototype.hit = function() {
            this.interactive && (this.isIn || (this.isIn = !0, this.level.parent.onHintHit(this.data)))
        }, s.prototype.wasHit = function() {
            this.interactive && this.isIn && (this.interactive = !1, this.isIn = !1, this.level.parent.onHintLeft(this.data))
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    30: [function(t, e, i) {
        function s() {
            o.call(this, "jump_platform", !1), this.level = null, this.config = null, this.jumpPlatform = {
                speed: 1800
            }
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null == this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = this._assetManager.getTexture(this.config.texture), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0;
            var i = .6 * this.sprite.width,
                s = this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x, -this.sprite.anchor.y * s, i, s)
        }, s.prototype.dispose = function() {}, s.prototype.update = function() {}, s.prototype.hit = function(t) {
            t.velocity < 0 || (t.velocity.y = -this.jumpPlatform.speed, t.setAnimation("jump", !1), t.y -= 10, t.isGrounded = !1, t.isTumbling = !1, t.canTumble = !0, n.play(["sfx_generic_jump_00", "sfx_generic_jump_01", "sfx_generic_jump_02"]))
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    31: [function(t, e, i) {
        function s() {
            o.call(this, "pick_key", !1), this.level = null, this.config = null, this.sprite = null, this.attracted = !1, this.attractionTimeMax = .3, this.attractionPosition = new PIXI.Point, this.color = null, this.timeline = null
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.color = this.config.texture.match(/([^_]+)/g)[1], this.pickupPS = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_pickup_key_" + this.color)], n.assetManager.getJSON("particle_pickup_key_" + this.color)), this.pickupPS.emit = !1, this.sprite.texture = n.assetManager.getTexture("key_" + this.color + "_radial"), this.sprite.anchor.set(.5), this.sprite.scale.set(1), this.interactive = !0, this.sprite.visible = !0, this.attracted = !1, this.attractionTarget = 0, this.attractionTime = 0, this.rotation = Math.random(0, 360) * PIXI.DEG_TO_RAD, this.collisionCircle = new PIXI.Circle(0, 0, this.sprite.texture.width / 2 * 1.2), this.timeline ? this.timeline.resume() : (this.sprite.position.set(0, -10), this.timeline = new TimelineMax, this.timeline.to(this.sprite, .75, {
                y: 10,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, Math.random()), this.timeline.to(this.sprite.scale, .5, {
                x: 1.3,
                y: 1.3,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, 0), n.animator.add(this.timeline)), e.explosion && this.explosion(e.explosion.angle, e.explosion.distance, e.explosion.time), this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {
            this.timeline && this.timeline.pause()
        }, s.prototype.update = function() {
            if (this.pickupPS.update(p3.Timestep.deltaTime), this.attracted) {
                if (this.attractionTime += p3.Timestep.deltaTime, this.attractionTime > this.attractionTimeMax) return this.sprite.visible = !1, void(this.attracted = !1);
                this.x = this.attractionPosition.x + (this.attractionTarget.x - 20 - this.attractionPosition.x) * this.attractionTime / this.attractionTimeMax, this.y = this.attractionPosition.y + (this.attractionTarget.y - 20 - this.attractionPosition.y) * this.attractionTime / this.attractionTimeMax, this.sprite.scale.x = 1 - this.attractionTime / this.attractionTimeMax, this.sprite.scale.y = 1 - this.attractionTime / this.attractionTimeMax
            }
        }, s.prototype.pickup = function(t) {
            if (this.interactive) return this.interactive = !1, this.attracted = !0, this.attractionTarget = t, this.attractionPosition.set(this.x, this.y), this.pickupPS.emit = !0, n.play("sfx_pickup"), n.animator.setTimeout(function() {
                this.pickupPS.emit = !1
            }, 2, this), !0
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    32: [function(t, e, i) {
        function s(t) {
            n.call(this, "level_end", !1), this.level = null, this.config = null, this.gameOver = !t
        }
        var n = (t("../Common"), t("./GameObject"));
        e.exports = s, s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null == this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = this._assetManager.getTexture(this.config.texture), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.sprite.visible = this.level.debug;
            var i = this.sprite.width,
                s = this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x, -this.sprite.anchor.y * s, i, s)
        }, s.prototype.dispose = function() {}, s.prototype.update = function() {}, s.prototype.hit = function() {
            this.interactive && (this.interactive = !1, this.level.avatar.isDead ? this.level.focusYActive = !1 : (this.gameOver || (this.level.completed = !0, this.level.avatar.isImmortal = !0, this.level.avatar.isDead = !1), this.gameOver ? (this.level.avatar.isDead = !0, this.level.avatar.velocity.x = 0, this.level.focusYActive = !1, this.level.changeFocusPoint(new PIXI.Point(.43, .5), 1.25)) : (this.level.avatar.areInputActive = !1, this.level.focusXActive = !1, this.level.avatar.isShrinking && this.level.avatar.powerUnshrink()), this.level.gameOver(!this.level.avatar.isDead)))
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    33: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "enemy", !1), this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e, this.spineScale = .75, this.spine = null, this.spineHalfWidth = 110 * this.spineScale * .8, this.spineHeight = 100 * this.spineScale * .8, this.currentAnimation = null, this.orientation = 1, this.direction = -1, this.pathTween = null, this.path = [0, 0], this.data = null, this.isMoving = !1, this.canFire = !1, this.name = "maggot", this.destroyPS = null
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {}, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.initSpine = function() {
            if (this.spineData = n.enemiesAnimationData.maggot, this.spine = new PIXI.spine.Spine(this.spineData), this.spine.skeleton.setToSetupPose(), this.spine.skeleton.setSkin(null), this.spine.skeleton.setSkinByName("default"), null !== this.data && this.data.orientation) switch (this.data.orientation.toLowerCase()) {
                case "left":
                    this.orientation = 1;
                    break;
                case "right":
                    this.orientation = -1
            }
            this.direction = -1 * this.orientation, this.spine.scale.set(this.spineScale), this.spine.scale.x = this.orientation * this.spineScale;
            for (var t = ["idle", "move", "shoot"], e = 0; e < t.length; e++)
                for (var i = 0; i < t.length; i++) e !== i && this.spine.stateData.setMixByName(t[e], t[i], .2);
            this.spine.autoUpdate = !1, this.addChild(this.spine)
        }, s.prototype.getData = function() {
            var t = null;
            if ("" !== this.config.data) try {
                t = JSON.parse(this.config.data)
            } catch (e) {
                console.error("Error parsing Maggot")
            }
            return t
        }, s.prototype.setAnimation = function(t, e) {
            e && t === this.currentAnimation || (this.spine.state.setAnimationByName(0, t, e), this.currentAnimation = t)
        }, s.prototype.playDefaultAnimation = function() {
            this.isMoving ? this.setAnimation("move", !0) : this.setAnimation("idle", !0)
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.data = this.getData(), null === this.spine && (this.initSpine(), this.addChild(this.spine)), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.spine.visible = !0;
            var i = 2 * this.spineHalfWidth,
                s = this.spineHeight;
            this.collisionRect = new PIXI.Rectangle(-i / 2, (-s), i, s), this.setupPath(), this.playDefaultAnimation(), this.animateAlongPath(), this.data.fireRate && this.data.fireRate > 0 && (this.canFire = !0), this.destroyable && (this.destroyPS && this.destroyPS.destroy(), this.destroyPS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_smoke_001"), this._assetManager.getTexture("particle_smoke_002"), this._assetManager.getTexture("particle_smoke_003"), this._assetManager.getTexture("particle_smoke_004")], this._assetManager.getJSON("particle_emitter_attack")), this.destroyPS.emit = !1, this.destroyPS.updateSpawnPos(0, -this.spine.height / 2)), this.level.debug && this.drawCollision()
        }, s.prototype.fire = function() {
            this.canFire && (Math.abs(this.level.avatar.x - (this.x + this.spine.x)) < this.level.parent.halfWidth ? (this.setAnimation("shoot", !1), this.spine.state.onEvent = this.onShootingEvent.bind(this), this.spine.state.onComplete = this.onShootingComplete.bind(this), this.pathTween && this.pathTween.pause()) : this.onShootingComplete())
        }, s.prototype.onShootingEvent = function(t, e) {
            "shoot" === e.data.name && this.level.avatar.enemyFire.call(this.level.avatar, this)
        }, s.prototype.onShootingComplete = function() {
            this.spine.state.onComplete = null, this.playDefaultAnimation(), this.pathTween && this.pathTween.resume(), n.animator.setTimeout(function() {
                this.fire()
            }, this.data.fireRate + this.data.fireRate / 100 * (this.data.fireRateVariability ? this.data.fireRateVariability : 0), this)
        }, s.prototype.setupPath = function() {
            null !== this.data && this.data.left && (this.path[0] = this.data.left), null !== this.data && this.data.right && (this.path[1] = this.data.right),
                0 === this.path[0] && 0 === this.path[1] ? this.isMoving = !1 : this.isMoving = !0
        }, s.prototype.animateAlongPath = function() {
            if (this.isMoving) {
                var t = 120,
                    e = 1 === this.orientation ? -this.path[0] : this.path[1],
                    i = this.orientation * (this.path[0] + this.path[1]) + e;
                this.spine.scale.x = -1 * Math.sign(e) * this.spineScale;
                var s = Math.abs(e / t),
                    n = (this.path[0] + this.path[1]) / t;
                this.pathTween = new TimelineMax, this.pathTween.to(this.spine.position, s, {
                    x: e,
                    ease: Linear.easeNone,
                    onUpdate: function() {
                        this.collisionRect.x = this.spine.x - this.spineHalfWidth
                    },
                    onUpdateScope: this,
                    onComplete: function() {
                        this.orientation *= -1, this.direction = -1 * this.orientation, this.spine.scale.x = this.orientation * this.spineScale
                    },
                    onCompleteScope: this
                }), this.pathTween.to(this.spine.position, n, {
                    x: i,
                    repeat: -1,
                    yoyo: !0,
                    ease: Linear.easeNone,
                    onUpdate: function() {
                        this.collisionRect.x = this.spine.x - this.spineHalfWidth
                    },
                    onUpdateScope: this,
                    onRepeat: function() {
                        this.orientation *= -1, this.direction = -1 * this.orientation, this.spine.scale.x = this.orientation * this.spineScale
                    },
                    onRepeatScope: this
                })
            }
        }, s.prototype.dispose = function() {
            this.pathTween && this.pathTween.kill(), this.destroyPS && (this.destroyPS.destroy(), this.destroyPS = null)
        }, s.prototype.update = function() {
            this.spine.visible && this.spine.update(p3.Timestep.deltaTime), this.destroyPS && this.destroyPS.update(p3.Timestep.deltaTime), this.level.debug && this.drawSpineCollision()
        }, s.prototype.drawSpineCollision = function() {
            this.collisionGraphic && this.removeChild(this.collisionGraphic), this.collisionGraphic = new PIXI.Graphics, this.addChild(this.collisionGraphic), this.collisionGraphic.lineStyle(2, 16711935), null !== this.collisionRect ? this.collisionGraphic.drawRect(this.collisionRect.x, this.collisionRect.y, this.collisionRect.width, this.collisionRect.height) : null !== this.collisionCircle && this.collisionGraphic.drawCircle(this.collisionCircle.x, this.collisionCircle.y, this.collisionCircle.radius)
        }, s.prototype.hit = function(t) {
            this.interactive && (this.canFire = !1, this.interactive = !1)
        }, s.prototype.destroy = function() {
            this.interactive && this.destroyable && (this.canFire = !1, this.interactive = !1, this.spine.visible = !1, this.level.shake(.4, new PIXI.Point(20, 10)), this.pathTween && this.pathTween.kill(), this.destroyPS.updateSpawnPos(this.spine.x, -this.spine.height / 2), this.destroyPS.emit = !0)
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    34: [function(t, e, i) {
        function s(t) {
            this.assetManager = p3.AssetManager.instance, this._poolData = t, this._pools = null, this._objects = [], PIXI.Container.call(this)
        }
        t("../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this._pools = {};
            for (var t = 0; t < this._poolData.length; t++) this._pools[this._poolData[t].id] = new p3.ObjectPool(this._poolData[t].base, 2, this._poolData[t].args)
        }, s.prototype.generate = function(t) {
            if (this._pools[t]) var e = this._pools[t];
            else var e = this._pools["default"];
            var i = e.create();
            return null == i && (e.expand(2), i = e.create()), this._objects[i.type] || (this._objects[i.type] = []), this._objects[i.type].push(i), i
        }, s.prototype.dispose = function(t) {
            for (var e in this._pools)
                if (this._pools[e]._used.indexOf(t) > -1) {
                    this._pools[e].free(t);
                    var i = this._objects[t.type].indexOf(t);
                    i != -1 && this._objects[t.type].splice(i, 1)
                }
        }, s.prototype.getObjectsOfType = function(t) {
            return this._objects[t] ? this._objects[t] : []
        }
    }, {
        "../Common": 4
    }],
    35: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "enemy", !1), this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e, this.spineScale = .75, this.spine = null, this.spineHalfWidth = 110 * this.spineScale * .8, this.spineHeight = 280 * this.spineScale * .8, this.currentAnimation = null, this.orientation = 1, this.direction = 1, this.pathTween = null, this.path = [0, 0], this.data = null, this.isMoving = !1, this.canFire = !1, this.name = "mascot", this.destroyPS = null
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {}, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.initSpine = function() {
            if (this.spineData = n.enemiesAnimationData.mascot, this.spine = new PIXI.spine.Spine(this.spineData), this.spine.skeleton.setToSetupPose(), this.spine.skeleton.setSkin(null), this.spine.skeleton.setSkinByName("mascot_00" + (Math.floor(2 * Math.random()) + 1)), null !== this.data && this.data.orientation) switch (this.data.orientation.toLowerCase()) {
                case "left":
                    this.orientation = -1;
                    break;
                case "right":
                    this.orientation = 1
            }
            this.direction = this.orientation, this.spine.scale.set(this.spineScale), this.spine.scale.x = this.orientation * this.spineScale;
            for (var t = ["idle", "walk", "shoot"], e = 0; e < t.length; e++)
                for (var i = 0; i < t.length; i++) e !== i && this.spine.stateData.setMixByName(t[e], t[i], .15);
            this.spine.autoUpdate = !1, this.addChild(this.spine)
        }, s.prototype.getData = function() {
            var t = null;
            if ("" !== this.config.data) try {
                t = JSON.parse(this.config.data)
            } catch (e) {
                console.error("Error parsing Bandit")
            }
            return t
        }, s.prototype.setAnimation = function(t, e) {
            e && t === this.currentAnimation || (this.spine.state.setAnimationByName(0, t, e), this.currentAnimation = t)
        }, s.prototype.playDefaultAnimation = function() {
            this.isMoving ? this.setAnimation("walk", !0) : this.setAnimation("idle", !0)
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.data = this.getData(), null === this.spine && (this.initSpine(), this.addChild(this.spine)), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.spine.visible = !0;
            var i = 2 * this.spineHalfWidth,
                s = this.spineHeight;
            this.collisionRect = new PIXI.Rectangle(-i / 2, (-s), i, s), this.setupPath(), this.playDefaultAnimation(), this.animateAlongPath(), this.data.fireRate && this.data.fireRate > 0 && (this.canFire = !0), this.destroyable && (this.destroyPS && this.destroyPS.destroy(), this.destroyPS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_smoke_001"), this._assetManager.getTexture("particle_smoke_002"), this._assetManager.getTexture("particle_smoke_003"), this._assetManager.getTexture("particle_smoke_004")], this._assetManager.getJSON("particle_emitter_attack")), this.destroyPS.emit = !1, this.destroyPS.updateSpawnPos(0, -this.spine.height / 2)), this.level.debug && this.drawCollision()
        }, s.prototype.fire = function() {
            this.canFire && (Math.abs(this.level.avatar.x - (this.x + this.spine.x)) < this.level.parent.halfWidth ? (this.setAnimation("shoot", !1), this.spine.state.onEvent = this.onShootingEvent.bind(this), this.spine.state.onComplete = this.onShootingComplete.bind(this), this.pathTween && this.pathTween.pause()) : this.onShootingComplete())
        }, s.prototype.onShootingEvent = function(t, e) {
            "shoot" === e.data.name && this.level.avatar.enemyFire.call(this.level.avatar, this)
        }, s.prototype.onShootingComplete = function() {
            this.spine.state.onComplete = null, this.playDefaultAnimation(), this.pathTween && this.pathTween.resume(), n.animator.setTimeout(function() {
                this.fire()
            }, this.data.fireRate + this.data.fireRate / 100 * (this.data.fireRateVariability ? this.data.fireRateVariability : 0), this)
        }, s.prototype.setupPath = function() {
            null !== this.data && this.data.left && (this.path[0] = this.data.left), null !== this.data && this.data.right && (this.path[1] = this.data.right), 0 === this.path[0] && 0 === this.path[1] ? this.isMoving = !1 : this.isMoving = !0
        }, s.prototype.animateAlongPath = function() {
            if (this.isMoving) {
                var t = 120,
                    e = 1 === this.orientation ? -this.path[0] : this.path[1],
                    i = this.orientation * (this.path[0] + this.path[1]) + e;
                this.spine.scale.x = Math.sign(e) * this.spineScale;
                var s = Math.abs(e / t),
                    n = (this.path[0] + this.path[1]) / t;
                this.pathTween = new TimelineMax, this.pathTween.to(this.spine.position, s, {
                    x: e,
                    ease: Linear.easeNone,
                    onUpdate: function() {
                        this.collisionRect.x = this.spine.x - this.spineHalfWidth
                    },
                    onUpdateScope: this,
                    onComplete: function() {
                        this.orientation *= -1, this.direction = -1 * this.orientation, this.spine.scale.x = -this.orientation * this.spineScale
                    },
                    onCompleteScope: this
                }), this.pathTween.to(this.spine.position, n, {
                    x: i,
                    repeat: -1,
                    yoyo: !0,
                    ease: Linear.easeNone,
                    onUpdate: function() {
                        this.collisionRect.x = this.spine.x - this.spineHalfWidth
                    },
                    onUpdateScope: this,
                    onRepeat: function() {
                        this.orientation *= -1, this.direction = -1 * this.orientation, this.spine.scale.x = -this.orientation * this.spineScale
                    },
                    onRepeatScope: this
                })
            }
        }, s.prototype.dispose = function() {
            this.pathTween && this.pathTween.kill(), this.destroyPS && (this.destroyPS.destroy(), this.destroyPS = null)
        }, s.prototype.update = function() {
            this.spine.visible && this.spine.update(p3.Timestep.deltaTime), this.destroyPS && this.destroyPS.update(p3.Timestep.deltaTime), this.level.debug && this.drawSpineCollision()
        }, s.prototype.drawSpineCollision = function() {
            this.collisionGraphic && this.removeChild(this.collisionGraphic), this.collisionGraphic = new PIXI.Graphics, this.addChild(this.collisionGraphic), this.collisionGraphic.lineStyle(2, 16711935), null !== this.collisionRect ? this.collisionGraphic.drawRect(this.collisionRect.x, this.collisionRect.y, this.collisionRect.width, this.collisionRect.height) : null !== this.collisionCircle && this.collisionGraphic.drawCircle(this.collisionCircle.x, this.collisionCircle.y, this.collisionCircle.radius)
        }, s.prototype.hit = function(t) {
            this.interactive && (this.canFire = !1, this.interactive = !1)
        }, s.prototype.destroy = function() {
            this.interactive && this.destroyable && (this.canFire = !1, this.interactive = !1, this.spine.visible = !1, this.level.shake(.4, new PIXI.Point(20, 10)), this.pathTween && this.pathTween.kill(), this.destroyPS.updateSpawnPos(this.spine.x, -this.spine.height / 2), this.destroyPS.emit = !0)
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    36: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "obstacle", !1), this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e, this.theme = 1
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null == this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = this._assetManager.getTexture(this.config.texture), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.sprite.visible = !0;
            var i = .6 * this.sprite.width,
                s = 1 * this.sprite.height;
            if (this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x, -this.sprite.anchor.y * s, i, s), this.config.id.match(/carriage\_([0-9]{2})\_([0-9]{2})/i)) {
                var i = .3 * this.sprite.width;
                this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x * 2, -this.sprite.anchor.y * s, i, s)
            }
            this.explodes, this.destroyable && (this.destroyPS && this.destroyPS.destroy(), this.theme = 5 * (n.chapter - 1), this.destroyPS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_smash_0" + (this.theme + 1 > 9 ? "" : "0") + (this.theme + 1)), this._assetManager.getTexture("particle_smash_0" + (this.theme + 2 > 9 ? "" : "0") + (this.theme + 2)), this._assetManager.getTexture("particle_smash_0" + (this.theme + 3 > 9 ? "" : "0") + (this.theme + 3)), this._assetManager.getTexture("particle_smash_0" + (this.theme + 4 > 9 ? "" : "0") + (this.theme + 4)), this._assetManager.getTexture("particle_smash_0" + (this.theme + 5 > 9 ? "" : "0") + (this.theme + 5))], this._assetManager.getJSON("particle_obstacle_smash_theme_00" + n.chapter)), this.destroyPS.emit = !1, this.destroyPS.updateSpawnPos(0, -this.sprite.height / 2)), this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {
            this.destroyPS && (this.destroyPS.destroy(), this.destroyPS = null)
        }, s.prototype.update = function() {
            this.destroyPS && this.destroyPS.update(p3.Timestep.deltaTime)
        }, s.prototype.hit = function(t) {
            this.interactive && (this.interactive = !1, this.explodes && (this.sprite.visible = !1, this.level.shake(.6, new PIXI.Point(60, 40))))
        }, s.prototype.destroy = function() {
            this.interactive && this.destroyable && (this.interactive = !1, this.sprite.visible = !1, n.play("sfx_boom0" + n.chapter), this.level.shake(.4, new PIXI.Point(20, 10)), this.destroyPS.emit = !0)
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    37: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "spike", !1), this.sprite = null, this.level = null, this.config = null, this.destroyable = !1, this.explodes = !!e, this.textureOn = null, this.textureOff = null, this.spikeTween = null, this.timeOn = 2, this.timeOff = 2
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.textureOff = this.config.texture, this.textureOn = this.textureOff.split("_off")[0] + "_on", this.textureOn = n.assetManager.getTexture(this.textureOn), this.textureOff = n.assetManager.getTexture(this.textureOff), this.sprite.texture = this.textureOff, this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.interactive = !0, this.sprite.visible = !0;
            var i = .8 * this.sprite.width,
                s = .95 * this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x, -this.sprite.anchor.y * s, i, s), this.animateSpike(), this.explodes, this.destroyable, this.level.debug && this.drawCollision()
        }, s.prototype.animateSpike = function() {
            this.spikeTween && this.spikeTween.kill(), this.spikeTween = new TimelineMax, this.spikeTween.to(this, this.timeOff, {
                rotation: 0,
                ease: Linear.easeNone,
                onComplete: function() {
                    this.interactive = !0, this.sprite.texture = this.textureOn
                },
                onCompleteScope: this
            }), this.spikeTween.to(this, this.timeOn, {
                rotation: 0,
                ease: Linear.easeNone,
                onComplete: function() {
                    this.interactive = !1, this.sprite.texture = this.textureOff, this.animateSpike()
                },
                onCompleteScope: this
            })
        }, s.prototype.dispose = function() {
            this.spikeTween && this.spikeTween.kill()
        }, s.prototype.update = function() {}, s.prototype.isOn = function() {
            return this.sprite.texture === this.textureOn
        }, s.prototype.isIn = function(t) {
            return t.x >= this.x + this.collisionRect.x && t.x <= this.x + this.collisionRect.x + this.collisionRect.width
        }, s.prototype.hit = function(t) {
            this.interactive && (this.interactive = !1, this.explodes && (this.sprite.visible = !1, this.level.shake(.2, new PIXI.Point(60, 40))))
        }, s.prototype.destroy = function() {
            this.interactive && this.destroyable && (this.interactive = !1, this.sprite.texture = n.assetManager.getTexture(this.textureOff), this.level.shake(.4, new PIXI.Point(20, 10)))
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    38: [function(t, e, i) {
        function s() {
            o.call(this, "sumocard", !1), this.level = null, this.config = null, this.sprite = null, this.attracted = !1, this.attractionTimeMax = .3, this.attractionPosition = new PIXI.Point, this.timeline = null, this.pickupPS = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_pickup_key_sumocard")], n.assetManager.getJSON("particle_pickup_key_sumocard")), this.pickupPS.emit = !1
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = n.assetManager.getTexture("pick_up_card"), this.sprite.anchor.set(.5), this.sprite.scale.set(1), this.sprite.visible = !0, this.interactive = !0, this.sprite.visible = !0, this.attracted = !1, this.attractionTarget = 0, this.attractionTime = 0, this.rotation = Math.random(0, 360) * PIXI.DEG_TO_RAD, this.collisionCircle = new PIXI.Circle(0, 0, this.sprite.texture.height / 2 * 1.2), this.timeline ? this.timeline.resume() : (this.sprite.position.set(0, -10), this.timeline = new TimelineMax, this.timeline.to(this.sprite, .75, {
                y: 10,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, Math.random()), this.timeline.to(this.sprite.scale, .5, {
                x: 1.3,
                y: 1.3,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, 0), n.animator.add(this.timeline)), this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {
            this.timeline && this.timeline.pause()
        }, s.prototype.update = function() {
            if (this.pickupPS.update(p3.Timestep.deltaTime), this.attracted) {
                if (this.attractionTime += p3.Timestep.deltaTime, this.attractionTime > this.attractionTimeMax) return this.sprite.visible = !1, void(this.attracted = !1);
                this.x = this.attractionPosition.x + (this.attractionTarget.x - 20 - this.attractionPosition.x) * this.attractionTime / this.attractionTimeMax, this.y = this.attractionPosition.y + (this.attractionTarget.y - 20 - this.attractionPosition.y) * this.attractionTime / this.attractionTimeMax, this.sprite.scale.x = 1 - this.attractionTime / this.attractionTimeMax, this.sprite.scale.y = 1 - this.attractionTime / this.attractionTimeMax
            }
        }, s.prototype.pickup = function(t) {
            if (this.interactive) return this.interactive = !1, this.attracted = !0, this.attractionTarget = t, this.attractionPosition.set(this.x, this.y), this.pickupPS.emit = !0, n.play("sfx_pickup"), n.animator.setTimeout(function() {
                this.pickupPS.emit = !1
            }, 2, this), !0
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    39: [function(t, e, i) {
        function s(t, e) {
            o.call(this, "teleport", !1), this.sprite = null, this.level = null, this.config = null, this.destroyable = !!t, this.explodes = !!e, this.textureOn = null, this.textureOff = null, this.appearedHere = !1, this.teleportPS = null, this.enteredTeleport = !1, this.leftTeleport = !1
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.data = this.getData(), this.textureOff = this.config.texture, this.textureOn = this.textureOff.split("_off")[0] + "_on", this.sprite.texture = n.assetManager.getTexture(this.textureOn), this.data["in"] === this.data.out && (this.sprite.texture = n.assetManager.getTexture(this.textureOff)), this.sprite.anchor.set(this.config.anchor.x, this.config.anchor.y), this.sprite.scale.set(this.config.scale.x, this.config.scale.y), this.rotation = this.config.rotation * PIXI.DEG_TO_RAD, this.teleportPS && this.teleportPS.destroy(), this.teleportPS = new cloudkid.Emitter(this, [this._assetManager.getTexture("particle_teleport_001"), this._assetManager.getTexture("particle_teleport_002"), this._assetManager.getTexture("particle_teleport_003")], this._assetManager.getJSON("particle_obstacle_teleport")), this.teleportPS.emit = this.sprite.texture !== n.assetManager.getTexture(this.textureOff), this.teleportPS.updateSpawnPos(-60, -30), this.data["in"] === this.data.out ? this.interactive = !1 : this.interactive = !0, this.sprite.visible = !0;
            var i = .5 * this.sprite.width,
                s = .75 * this.sprite.height;
            this.collisionRect = new PIXI.Rectangle(-i * this.sprite.anchor.x - 7, -this.sprite.anchor.y * s, i, s), this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {
            this.teleportPS && (this.teleportPS.destroy(), this.teleportPS = null)
        }, s.prototype.update = function() {
            this.teleportPS && this.teleportPS.update(p3.Timestep.deltaTime)
        }, s.prototype.getData = function() {
            var t = null;
            if ("" !== this.config.data) try {
                t = JSON.parse(this.config.data), t["in"] || t.out || (console.error("Teleport is not properly initialized"), t = null)
            } catch (e) {
                console.error("Error parsing Teleport")
            } else t = {
                "in": 999,
                out: 999
            };
            return t
        }, s.prototype.turnOn = function() {
            this.teleportPS.emit = !0, this.sprite.texture = n.assetManager.getTexture(this.textureOn)
        }, s.prototype.turnOff = function() {
            this.teleportPS.emit = !1, this.appearedHere = !0, this.sprite.texture = n.assetManager.getTexture(this.textureOff), n.animator.setTimeout(function() {
                this.appearedHere = !1, this.turnOn()
            }, 3, this)
        }, s.prototype.hit = function(t, e) {
            this.appearedHere || (this.interactive = !1, t.onTeleport(this, e))
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    40: [function(t, e, i) {
        function s() {
            o.call(this, "time", !1), this.level = null, this.config = null, this.sprite = null, this.attracted = !1, this.attractionTimeMax = .3, this.attractionPosition = new PIXI.Point, this.timeline = null, this.pickupPS = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_pickup_time")], n.assetManager.getJSON("particle_pickup_time")), this.pickupPS.emit = !1
        }
        var n = t("../Common"),
            o = t("./GameObject");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function(t) {
            null === this.sprite && (this.sprite = new PIXI.Sprite, this.addChild(this.sprite))
        }, s.prototype.reset = function() {
            this.level = null, this.config = null
        }, s.prototype.configure = function(t, e) {
            this.level = t, this.config = e, this.x = this.config.position.x, this.y = this.config.position.y, this.sprite.texture = n.assetManager.getTexture("pick_up_time"), this.sprite.anchor.set(.5), this.sprite.scale.set(1), this.sprite.visible = !0, this.interactive = !0, this.sprite.visible = !0, this.attracted = !1, this.attractionTarget = 0, this.attractionTime = 0, this.rotation = Math.random(0, 360) * PIXI.DEG_TO_RAD, this.collisionCircle = new PIXI.Circle(0, 0, this.sprite.texture.width / 2 * 1.2), this.timeline ? this.timeline.resume() : (this.sprite.position.set(0, -10), this.timeline = new TimelineMax, this.timeline.to(this.sprite, .75, {
                y: 10,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, Math.random()), this.timeline.to(this.sprite.scale, .5, {
                x: 1.3,
                y: 1.3,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, 0), n.animator.add(this.timeline)), this.level.debug && this.drawCollision()
        }, s.prototype.dispose = function() {
            this.timeline && this.timeline.pause()
        }, s.prototype.update = function() {
            if (this.pickupPS.update(p3.Timestep.deltaTime), this.attracted) {
                if (this.attractionTime += p3.Timestep.deltaTime, this.attractionTime > this.attractionTimeMax) return this.sprite.visible = !1, void(this.attracted = !1);
                this.x = this.attractionPosition.x + (this.attractionTarget.x - 20 - this.attractionPosition.x) * this.attractionTime / this.attractionTimeMax, this.y = this.attractionPosition.y + (this.attractionTarget.y - 20 - this.attractionPosition.y) * this.attractionTime / this.attractionTimeMax, this.sprite.scale.x = 1 - this.attractionTime / this.attractionTimeMax, this.sprite.scale.y = 1 - this.attractionTime / this.attractionTimeMax
            }
        }, s.prototype.pickup = function(t) {
            if (this.interactive) return this.interactive = !1, this.attracted = !0, this.attractionTarget = t, this.attractionPosition.set(this.x, this.y), this.pickupPS.emit = !0, n.play("sfx_pickup"), !0
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    41: [function(t, e, i) {
        Pool = function(t) {
            this.maxItems = t.maxItems || 10, this.itemParams = t.itemParams, this.items = [], this.add(this.maxItems)
        }, e.exports = Pool, Pool.prototype.add = function(t) {
            for (var e = 0; e < t; e++) {
                var i = new BP.Sprite(this.itemParams);
                this.items.push(i)
            }
        }, Pool.prototype.get = function() {
            for (var t = 0; t < this.maxItems; t++)
                if (this.items[t].visible === !1) {
                    this.items[t].visible = !0;
                    break
                }
            return t === this.maxItems && this.expand(), this.items[t]
        }, Pool.prototype.expand = function() {
            this.maxItems++, this.add(1)
        }, Pool.prototype.hideAll = function() {
            for (var t = 0; t < this.items.length; t++) this.items[t].visible = !1
        }, Object.defineProperty(Pool.prototype, "length", {
            get: function(t) {
                return this.items.length
            }
        })
    }, {}],
    42: [function(t, e, i) {
        function s(t) {
            n.call(this, t, !1), this.allowPathCollisions = !0, this.isGrounded = !1, this.collisionPoint = null, this.angleTarget = 0, this.velocity = new PIXI.Point, this.ignoreArtificialPaths = !0, this.collisionCircle = new PIXI.Circle(0, 0, 10), this.collisionPoints = [new PIXI.Point(1, 1), new PIXI.Point(1, 1), new PIXI.Point(1, 1), new PIXI.Point(1, 1)], this.collisionPivot = new PIXI.Point(1, 1), this.collisionDetectionCircle = new PIXI.Point(1, 1, 1)
        }
        var n = (t("../Common"), t("./GameObject"));
        e.exports = s, s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.move = function(t) {
            var e = Math.sign(t.y),
                t = new PIXI.Point(t.x * p3.Timestep.deltaTime, t.y * p3.Timestep.deltaTime);
            if (t.y > 0 && t.y >= this.collisionCircle.radius && (t.y = .99 * this.collisionCircle.radius), this.isGrounded && this.collisionPoint && (t.x *= Math.cos(this.collisionPoint.angle)), this.x += t.x, this.y += t.y, this.allowPathCollisions) {
                var i = this.isGrounded;
                this.collisionPoint = null, this.isGrounded = !1, this.level.debug && (this.wireframe && this.level.removeChild(this.wireframe), this.wireframe = new PIXI.Graphics, this.wireframe.config = {
                    depth: 1e3
                }, this.level.addChild(this.wireframe));
                for (var s = 0; s < this.level.layers.length; s++)
                    for (var n = 0; n < this.level.layers[s].childrenPaths.length; n++)
                        if (1 == this.level.layers[s].childrenPaths[n].config.collisions && !(this.level.layers[s].childrenPaths[n].config.bounds[0] > this.x + this.collisionCircle.x + 2 * this.collisionCircle.radius || this.level.layers[s].childrenPaths[n].config.bounds[1] < this.x + this.collisionCircle.x - 2 * this.collisionCircle.radius || this.isShrinking && this.level.layers[s].childrenPaths[n].isShrinkPath() || this.ignoreArtificialPaths && this.level.layers[s].childrenPaths[n].isArtificialPath()))
                            for (var o = this.level.layers[s].childrenPaths[n].bezier.getDrawingPoints(), a = 0; a < o.length - 1; a++) {
                                var r = o[a + 1],
                                    h = o[a];
                                if (!(r.x > h.x && Math.abs(r.x - h.x) > 15)) {
                                    var l = new PIXI.Point(this.x + this.collisionCircle.x, this.y + this.collisionCircle.y);
                                    if (!(r.x > l.x + this.collisionCircle.radius || h.x < l.x - this.collisionCircle.radius || r.y > l.y + this.collisionCircle.radius && h.y > l.y + this.collisionCircle.radius || r.y < l.y - this.collisionCircle.radius && h.y < l.y - this.collisionCircle.radius)) {
                                        var c = new PIXI.Point(o[a + 1].x - o[a].x, o[a + 1].y - o[a].y),
                                            p = new PIXI.Point(c.x, c.y);
                                        p.normalize();
                                        var u = new PIXI.Point(this.x + this.collisionCircle.x - o[a].x, this.y + this.collisionCircle.y - o[a].y),
                                            d = u.dotProduct(c) / c.getLength(),
                                            g = new PIXI.Point(p.x * d, p.y * d);
                                        g.x != c.x ? (g.x / c.x < 0 && (g = new PIXI.Point(0, 0)), g.x / c.x > 1 && (g = new PIXI.Point(c.x, c.y))) : (g.y / c.y < 0 && (g = new PIXI.Point(0, 0)), g.y / c.y > 1 && (g = new PIXI.Point(c.x, c.y)));
                                        var m = new PIXI.Point(g.x - u.x, g.y - u.y),
                                            f = m.getLength();
                                        this.level.debug && (this.wireframe.lineStyle(8, 16777215, 1), this.wireframe.moveTo(r.x, r.y), this.wireframe.lineTo(h.x, h.y), this.wireframe.lineStyle(6, 255, 1), this.wireframe.moveTo(l.x, l.y), this.wireframe.lineTo(l.x - u.x, l.y - u.y)), f < this.collisionCircle.radius && (this.level.debug && (this.wireframe.lineStyle(3, 16711935, 1), this.wireframe.moveTo(o[a].x, o[a].y), this.wireframe.lineTo(o[a].x + g.x, o[a].y + g.y), this.wireframe.lineStyle(5, 65280, 1), this.wireframe.moveTo(o[a].x + g.x, o[a].y + g.y), this.wireframe.lineTo(o[a].x + g.x - m.x, o[a].y + g.y - m.y)), 0 != t.x && (this.x += -Math.sign(t.x) * (this.collisionCircle.radius - f)), this.velocity.y < 0 && (this.y -= t.y, this.velocity.y = 200))
                                    }
                                }
                            }
                        for (var y = 70, s = 0; s < this.level.layers.length; s++)
                            for (var n = 0; n < this.level.layers[s].childrenPaths.length; n++)
                                if (0 != this.level.layers[s].childrenPaths[n].config.collisions && !(2 == this.level.layers[s].childrenPaths[n].config.collisions && e < 0 || this.level.layers[s].childrenPaths[n].config.bounds[0] > this.x + this.collisionCircle.x + 2 * this.collisionCircle.radius || this.level.layers[s].childrenPaths[n].config.bounds[1] < this.x + this.collisionCircle.x - 2 * this.collisionCircle.radius || this.isShrinking && this.level.layers[s].childrenPaths[n].isShrinkPath() || this.ignoreArtificialPaths && this.level.layers[s].childrenPaths[n].isArtificialPath())) {
                                    var o = this.level.layers[s].childrenPaths[n].bezier.getDrawingPoints();
                                    do
                                        for (var _ = !1, a = 0; a < o.length - 1; a++) {
                                            var r = o[a],
                                                h = o[a + 1];
                                            if (!(r.x > h.x)) {
                                                var l = new PIXI.Point(this.x + this.collisionCircle.x, this.y + this.collisionCircle.y);
                                                if (!(r.x > l.x + this.collisionCircle.radius || h.x < l.x - this.collisionCircle.radius || r.y > l.y + this.collisionCircle.radius && h.y > l.y + this.collisionCircle.radius || r.y < l.y - this.collisionCircle.radius && h.y < l.y - this.collisionCircle.radius)) {
                                                    var x = Math.atan2(h.y - r.y, h.x - r.x);
                                                    if (!(Math.abs(x * PIXI.RAD_TO_DEG) >= y)) {
                                                        if (2 == this.level.layers[s].childrenPaths[n].config.collisions) {
                                                            if (!i) {
                                                                var v = (l.x - r.x) / (h.x - r.x);
                                                                v = Math.min(Math.max(v, 0), 1);
                                                                var T = r.y + (h.y - r.y) * v;
                                                                if (l.y > T) continue
                                                            }
                                                            if (Math.abs(x * PIXI.RAD_TO_DEG) >= this.level.layers[s].childrenPaths[n].config.texWallAngle) continue
                                                        }
                                                        var c = new PIXI.Point(o[a + 1].x - o[a].x, o[a + 1].y - o[a].y),
                                                            p = new PIXI.Point(c.x, c.y);
                                                        p.normalize();
                                                        var u = new PIXI.Point(this.x + this.collisionCircle.x - o[a].x, this.y + this.collisionCircle.y - o[a].y),
                                                            d = u.dotProduct(c) / c.getLength(),
                                                            g = new PIXI.Point(p.x * d, p.y * d);
                                                        if (g.x != c.x) {
                                                            if (g.x / c.x < 0 && !i) continue;
                                                            g.x / c.x < 0 && (g = new PIXI.Point(0, 0)), g.x / c.x > 1 && (g = new PIXI.Point(c.x, c.y))
                                                        } else g.y / c.y < 0 && (g = new PIXI.Point(0, 0)), g.y / c.y > 1 && (g = new PIXI.Point(c.x, c.y));
                                                        var m = new PIXI.Point(g.x - u.x, g.y - u.y),
                                                            f = m.getLength();
                                                        if (this.level.debug && (this.wireframe.lineStyle(8, 16777215, 1), this.wireframe.moveTo(r.x, r.y), this.wireframe.lineTo(h.x, h.y), this.wireframe.lineStyle(6, 255, 1), this.wireframe.moveTo(l.x, l.y), this.wireframe.lineTo(l.x - u.x, l.y - u.y)), f < this.collisionCircle.radius) {
                                                            this.level.debug && (this.wireframe.lineStyle(3, 16711935, 1), this.wireframe.moveTo(o[a].x, o[a].y), this.wireframe.lineTo(o[a].x + g.x, o[a].y + g.y), this.wireframe.lineStyle(5, 16711680, 1), this.wireframe.moveTo(o[a].x + g.x, o[a].y + g.y), this.wireframe.lineTo(o[a].x + g.x - m.x, o[a].y + g.y - m.y)), t.y = 0, this.isGrounded = !0, this.isFlying || this.wasGroundedAfterFly || (this.wasGroundedAfterFly = !0), m.normalize();
                                                            var b = m.angle(new PIXI.Point(0, 1)),
                                                                w = Math.sin(Math.acos(Math.sin(b))) * this.collisionCircle.radius - Math.abs(Math.cos(b)) * f;
                                                            this.y -= w, this.collisionPoint = {
                                                                path: this.level.layers[s].childrenPaths[n],
                                                                position: {
                                                                    x: o[a].x + g.x,
                                                                    y: o[a].y + g.y
                                                                },
                                                                angle: this.direction * x
                                                            }, w >= 1 && (_ = !0)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    while (_)
                                }
                if (!this.isGrounded && i && t.y > 0) {
                    for (var y = 80, S = 50, P = S, s = 0; s < this.level.layers.length; s++)
                        for (var n = 0; n < this.level.layers[s].childrenPaths.length; n++)
                            if (0 != this.level.layers[s].childrenPaths[n].config.collisions && !(2 == this.level.layers[s].childrenPaths[n].config.collisions && e < 0 || this.level.layers[s].childrenPaths[n].config.bounds[0] > this.x + this.collisionCircle.x + 2 * this.collisionCircle.radius || this.level.layers[s].childrenPaths[n].config.bounds[1] < this.x + this.collisionCircle.x - 2 * this.collisionCircle.radius || this.isShrinking && this.level.layers[s].childrenPaths[n].isShrinkPath() || this.ignoreArtificialPaths && this.level.layers[s].childrenPaths[n].isArtificialPath()))
                                for (var o = this.level.layers[s].childrenPaths[n].bezier.getDrawingPoints(), a = 0; a < o.length - 1; a++) {
                                    var r = o[a],
                                        h = o[a + 1];
                                    if (!(r.x > h.x)) {
                                        var l = new PIXI.Point(this.x + this.collisionCircle.x, this.y + this.collisionCircle.y);
                                        if (!(r.x > l.x + this.collisionCircle.radius || h.x < l.x - this.collisionCircle.radius || r.y < l.y - this.collisionCircle.radius && h.y < l.y - this.collisionCircle.radius || r.y > l.y + this.collisionCircle.radius + 50 && h.y > l.y + this.collisionCircle.radius + 50)) {
                                            var x = Math.atan2(h.y - r.y, h.x - r.x);
                                            if (!(Math.abs(x * PIXI.RAD_TO_DEG) > y)) {
                                                var c = new PIXI.Point(o[a + 1].x - o[a].x, o[a + 1].y - o[a].y),
                                                    p = new PIXI.Point(c.x, c.y);
                                                p.normalize();
                                                var u = new PIXI.Point(this.x + this.collisionCircle.x - o[a].x, this.y + this.collisionCircle.y - o[a].y),
                                                    d = u.dotProduct(c) / c.getLength(),
                                                    g = new PIXI.Point(p.x * d, p.y * d);
                                                g.x != c.x ? (g.x / c.x < 0 && (g = new PIXI.Point(0, 0)), g.x / c.x > 1 && (g = new PIXI.Point(c.x, c.y))) : (g.y / c.y < 0 && (g = new PIXI.Point(0, 0)), g.y / c.y > 1 && (g = new PIXI.Point(c.x, c.y)));
                                                var m = new PIXI.Point(g.x - u.x, g.y - u.y),
                                                    f = m.getLength();
                                                if (this.level.debug && (this.wireframe.lineStyle(8, 16777215, 1), this.wireframe.moveTo(r.x, r.y), this.wireframe.lineTo(h.x, h.y), this.wireframe.lineStyle(6, 255, 1), this.wireframe.moveTo(l.x, l.y), this.wireframe.lineTo(l.x - u.x, l.y - u.y)), m.y > 0 && f > this.collisionCircle.radius) {
                                                    this.level.debug && (this.wireframe.lineStyle(3, 16711935, 1), this.wireframe.moveTo(o[a].x, o[a].y), this.wireframe.lineTo(o[a].x + g.x, o[a].y + g.y), this.wireframe.lineStyle(5, 16737792, 1), this.wireframe.moveTo(o[a].x + g.x, o[a].y + g.y), this.wireframe.lineTo(o[a].x + g.x - m.x, o[a].y + g.y - m.y)), m.normalize();
                                                    var b = m.angle(new PIXI.Point(0, 1)),
                                                        I = f - this.collisionCircle.radius,
                                                        M = I * Math.sin(b) / Math.cos(b),
                                                        k = Math.sqrt(Math.pow(I, 2) + Math.pow(M, 2));
                                                    k < P && (P = k, this.collisionPoint = {
                                                        path: this.level.layers[s].childrenPaths[n],
                                                        position: {
                                                            x: o[a].x + g.x,
                                                            y: o[a].y + g.y
                                                        },
                                                        angle: this.direction * x
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            P < S && (t.y = 0, this.y += P, this.isGrounded = !0)
                }
                this.isGrounded && (this.angleTarget = this.collisionPoint.angle)
            }
        }, s.prototype.checkTopCollision = function(t, e) {
            return !!(t.x >= e.x + e.collisionRect.x && t.x <= e.x + e.collisionRect.x + e.collisionRect.width && t.y <= e.y + e.collisionRect.y && this.rectToCircleCollision(t, e))
        }, s.prototype.rectToCircleCollision = function(t, e) {
            var i = new PIXI.Rectangle(e.x + e.collisionRect.x, e.y + e.collisionRect.y, e.collisionRect.width, e.collisionRect.height),
                s = Math.abs(t.x - i.x - i.width / 2),
                n = Math.abs(t.y - i.y - i.height / 2);
            if (s > i.width / 2 + t.radius) return !1;
            if (n > i.height / 2 + t.radius) return !1;
            if (s <= i.width / 2) return !0;
            if (n <= i.height / 2) return !0;
            var o = s - i.width / 2,
                a = n - i.height / 2;
            return o * o + a * a <= t.radius * t.radius
        }, s.prototype.checkCollision = function(t, e) {
            var i = 0;
            if (null != e.collisionRect) {
                for (this.collisionPoints[0].x = e.x + e.collisionRect.x, this.collisionPoints[0].y = e.y + e.collisionRect.y, this.collisionPoints[1].x = this.collisionPoints[0].x + e.collisionRect.width, this.collisionPoints[1].y = this.collisionPoints[0].y, this.collisionPoints[2].x = this.collisionPoints[1].x, this.collisionPoints[2].y = this.collisionPoints[0].y + e.collisionRect.height, this.collisionPoints[3].x = this.collisionPoints[0].x, this.collisionPoints[3].y = this.collisionPoints[2].y, this.collisionPivot.x = e.x, this.collisionPivot.y = e.y, i = 0; i < this.collisionPoints.length; i++) this.collisionPoints[i].rotateAround(this.collisionPivot, e.rotation);
                for (i = 0; i < this.collisionPoints.length; i++)
                    if (Math.sqrt(Math.pow(this.collisionPoints[i].x - t.x, 2) + Math.pow(this.collisionPoints[i].y - t.y, 2)) < t.radius) return !0;
                for (i = 0; i < this.collisionPoints.length; i++) {
                    var s = new PIXI.Point(this.collisionPoints[(i + 1) % this.collisionPoints.length].x - this.collisionPoints[i].x, this.collisionPoints[(i + 1) % this.collisionPoints.length].y - this.collisionPoints[i].y),
                        n = new PIXI.Point(s.x, s.y);
                    n.normalize();
                    var o = new PIXI.Point(t.x - this.collisionPoints[i].x, t.y - this.collisionPoints[i].y),
                        a = o.dotProduct(s) / s.getLength(),
                        r = new PIXI.Point(n.x * a, n.y * a);
                    if (r.x != s.x) {
                        if (r.x / s.x < 0) continue;
                        if (r.x / s.x > 1) continue
                    } else {
                        if (r.y / s.y < 0) continue;
                        if (r.y / s.y > 1) continue
                    }
                    var h = new PIXI.Point(r.x - o.x, r.y - o.y),
                        l = h.getLength();
                    if (l < t.radius) return !0
                }
            } else if (null != e.collisionCircle) return this.collisionDetectionCircle.x = e.x, this.collisionDetectionCircle.y = e.y, this.collisionDetectionCircle.radius = e.collisionCircle.radius, this.collisionPoints[0].x = t.x - this.collisionDetectionCircle.x, this.collisionPoints[0].y = t.y - this.collisionDetectionCircle.y, Math.pow(this.collisionPoints[0].x, 2) + Math.pow(this.collisionPoints[0].y, 2) <= Math.pow(t.radius + this.collisionDetectionCircle.radius, 2);
            return !1
        }
    }, {
        "../Common": 4,
        "./GameObject": 15
    }],
    43: [function(t, e, i) {
        e.exports = {
            Main: t("./Main")
        }
    }, {
        "./Main": 6
    }],
    44: [function(t, e, i) {
        function s() {
            PIXI.AbstractFilter.call(this, null, "precision lowp float;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform float brightness;void main(void){    gl_FragColor = texture2D( uSampler, vTextureCoord );    gl_FragColor.rgb += brightness;}", {
                brightness: {
                    type: "1f",
                    value: 0
                }
            })
        }
        s.prototype = Object.create(PIXI.AbstractFilter.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.applyFilter = function(t, e, i, s) {
            var n = this.getShader(t);
            this.uniforms.brightness.value = this.brightness, t.filterManager.applyFilter(n, e, i, s)
        }, Object.defineProperties(s.prototype, {
            amount: {
                get: function() {
                    return this.brightness
                },
                set: function(t) {
                    this.brightness = t
                }
            }
        })
    }, {}],
    45: [function(t, e, i) {
        function s(t, e, i) {
            e = e || .5, i = i || new PIXI.Point(1, 1), PIXI.AbstractFilter.call(this, null, "precision mediump float;varying vec2 vTextureCoord;varying vec4 vColor;uniform sampler2D uCutoutMap;uniform float uScale;uniform vec2 uRatio;void main(void) {vec2 textureCoord  = (((vTextureCoord - vec2(0.5, 0.5)) * uRatio) * uScale) + vec2(0.5, 0.5);vec4 mask          = texture2D(uCutoutMap, textureCoord);float alpha        = smoothstep(uScale, 0.2, 1.0) - mask.a;gl_FragColor       = vec4(vColor.r * alpha, vColor.g * alpha, vColor.b * alpha, vColor.a * alpha);}", {
                uCutoutMap: {
                    type: "sampler2D",
                    value: t
                },
                uScale: {
                    type: "f",
                    value: 1 / Math.max(.001, e)
                },
                uRatio: {
                    type: "v2",
                    value: {
                        x: i.x,
                        y: i.y
                    }
                }
            }), t.baseTexture.isPowerOfTwo = !1
        }
        e.exports = s, s.prototype = Object.create(PIXI.AbstractFilter.prototype), s.prototype.constructor = s, Object.defineProperty(s.prototype, "scale", {
            get: function() {
                return 1 / this.uniforms.uScale.value
            },
            set: function(t) {
                this.uniforms.uScale.value = 1 / Math.max(.001, t)
            }
        }), Object.defineProperty(s.prototype, "ratio", {
            get: function() {
                return new PIXI.Point(this.uniforms.uRatio.value.x, this.uniforms.uRatio.value.y)
            },
            set: function(t) {
                this.uniforms.uRatio.value.x = t.x, this.uniforms.uRatio.value.y = t.y
            }
        })
    }, {}],
    46: [function(t, e, i) {
        function s(t, e, i, s) {
            this.startScale = 2, this.endScale = 0, this._texture = t, this._color = e || 0, this._durationIn = i || 1, this._durationOut = s || 1, this._cutout = null, a.call(this), this.requiresWebGL = !0
        }
        var n = t("./CutoutShader"),
            o = t("./FadeTransition"),
            a = t("./Transition");
        e.exports = s, s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            var t = new PIXI.Graphics;
            t.drawRect(0, 0, 1, 1);
            var e = new PIXI.Point(0, 0),
                i = p3.View.width / p3.View.height,
                s = this._texture.width / this._texture.height;
            i / s > 1 ? (e.x = 1, e.y = 1 / (i / s)) : (e.x = 1 / (i / s), e.y = 1), this._cutout = new PIXI.Sprite(t.generateTexture()), this._cutout.scale = new PIXI.Point(p3.View.width + 2, p3.View.height + 2), this._cutout.tint = this._color, this._cutout.shader = new n(this._texture, 0, e), this._cutout.interactive = !0, this.addChild(this._cutout)
        }, s.prototype["in"] = function() {
            this._cutout.shader.scale = this.startScale, TweenMax.to(this._cutout.shader, this._durationIn, {
                scale: this.endScale,
                ease: Cubic.easeOut,
                onComplete: function() {
                    a.prototype["in"].call(this, this)
                },
                onCompleteScope: this
            })
        }, s.prototype.out = function() {
            this._cutout.shader.scale = this.endScale, TweenMax.to(this._cutout.shader, this._durationOut, {
                scale: this.startScale,
                ease: Cubic.easeIn,
                onComplete: function() {
                    a.prototype.out.call(this, this)
                },
                onCompleteScope: this
            })
        }, s.prototype.resize = function() {
            var t = new PIXI.Point(0, 0),
                e = p3.View.width / p3.View.height,
                i = this._texture.width / this._texture.height;
            e / i > 1 ? (t.x = 1, t.y = 1 / (e / i)) : (t.x = 1 / (e / i), t.y = 1), this._cutout.scale = new PIXI.Point(p3.View.width, p3.View.height), this._cutout.shader.ratio = t
        }, s.prototype.fallback = function() {
            return new o(this._color)
        }
    }, {
        "./CutoutShader": 45,
        "./FadeTransition": 47,
        "./Transition": 51
    }],
    47: [function(t, e, i) {
        function s(t, e) {
            this._color = t || 0, this._duration = e || .8, this._quad = null, n.call(this)
        }
        var n = (t("../Common"), t("./Transition"));
        e.exports = s, s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this._quad = new PIXI.Graphics, this._quad.visible = !1, this._quad.beginFill(this._color), this._quad.drawRect(0, 0, p3.Canvas.width, p3.Canvas.height), this._quad.endFill(), this.addChild(this._quad)
        }, s.prototype["in"] = function() {
            this._quad.alpha = 0, this._quad.visible = !0, TweenMax.to(this._quad, .5 * this._duration, {
                alpha: 1,
                ease: Power2.easeInOut,
                onComplete: function() {
                    n.prototype["in"].call(this, this)
                },
                onCompleteScope: this
            })
        }, s.prototype.out = function() {
            TweenMax.to(this._quad, .5 * this._duration, {
                alpha: 0,
                ease: Power2.easeInOut,
                onComplete: function() {
                    this._quad.visible = !1, n.prototype.out.call(this, this)
                },
                onCompleteScope: this
            })
        }, s.prototype.resize = function() {
            this._quad.clear(), this._quad.beginFill(this._color), this._quad.drawRect(0, 0, p3.Canvas.width, p3.Canvas.height), this._quad.endFill()
        }
    }, {
        "../Common": 4,
        "./Transition": 51
    }],
    48: [function(t, e, i) {
        function s() {
            PIXI.AbstractFilter.call(this, "attribute vec2 aVertexPosition;attribute vec2 aTextureCoord;attribute vec4 aColor;uniform float strengthX;uniform float strengthY;uniform mat3 projectionMatrix;varying vec2 vTextureCoord;varying vec4 vColor;varying vec2 vBlurTexCoords[ 6 ];void main(void){    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);    vTextureCoord = aTextureCoord;    vBlurTexCoords[ 0 ] = aTextureCoord + vec2( 0.000010 * strengthX, 0.000010 * strengthY );    vBlurTexCoords[ 1 ] = aTextureCoord + vec2( 0.000022 * strengthX, 0.000022 * strengthY );    vBlurTexCoords[ 2 ] = aTextureCoord + vec2( 0.000034 * strengthX, 0.000034 * strengthY );    vBlurTexCoords[ 3 ] = aTextureCoord + vec2( 0.000048 * strengthX, 0.000048 * strengthY );    vBlurTexCoords[ 4 ] = aTextureCoord + vec2( 0.000064 * strengthX, 0.000064 * strengthY );    vBlurTexCoords[ 5 ] = aTextureCoord + vec2( 0.000082 * strengthX, 0.000082 * strengthY );    vColor = vec4(aColor.rgb * aColor.a, aColor.a);}", "precision lowp float;varying vec2 vTextureCoord;varying vec2 vBlurTexCoords[ 6 ];uniform sampler2D uSampler;void main(void){    vec4 mask = texture2D( uSampler, vTextureCoord );    gl_FragColor = mask;    gl_FragColor += texture2D( uSampler, vBlurTexCoords[ 0 ] ) * 0.30 * (1.0 - mask.a);    gl_FragColor += texture2D( uSampler, vBlurTexCoords[ 1 ] ) * 0.26 * (1.0 - mask.a);    gl_FragColor += texture2D( uSampler, vBlurTexCoords[ 2 ] ) * 0.22 * (1.0 - mask.a);    gl_FragColor += texture2D( uSampler, vBlurTexCoords[ 3 ] ) * 0.18 * (1.0 - mask.a);    gl_FragColor += texture2D( uSampler, vBlurTexCoords[ 4 ] ) * 0.14 * (1.0 - mask.a);    gl_FragColor += texture2D( uSampler, vBlurTexCoords[ 5 ] ) * 0.10 * (1.0 - mask.a);}", {
                strengthX: {
                    type: "1f",
                    value: 1
                },
                strengthY: {
                    type: "1f",
                    value: 1
                }
            })
        }
        s.prototype = Object.create(PIXI.AbstractFilter.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.applyFilter = function(t, e, i, s) {
            var n = this.getShader(t);
            this.uniforms.strengthX.value = this.strengthX * (e.frame.width / e.size.width), this.uniforms.strengthY.value = this.strengthY * (e.frame.width / e.size.width), t.filterManager.applyFilter(n, e, i, s)
        }, Object.defineProperties(s.prototype, {
            blurX: {
                get: function() {
                    return this.strengthX
                },
                set: function(t) {
                    this.padding = .067 * Math.abs(t), this.strengthX = t
                }
            },
            blurY: {
                get: function() {
                    return this.strengthY
                },
                set: function(t) {
                    this.strengthY = t
                }
            }
        })
    }, {}],
    49: [function(t, e, i) {
        function s() {
            this.signals = {}, this.signals.next = new signals.Signal, this.signals.previous = new signals.Signal, this.signals.home = new signals.Signal, this.signals.pause = new signals.Signal, PIXI.Container.call(this)
        }
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {}, s.prototype.dispose = function() {
            this.signals.next.dispose(), this.signals.previous.dispose(), this.signals.home.dispose(), this.signals.pause.dispose(), this.removeChildren()
        }, s.prototype.resize = function() {}, s.prototype.update = function() {}, s.prototype.appear = function() {
            this.animateIn()
        }, s.prototype.show = function() {
            this.animateIn()
        }, s.prototype.hide = function() {}, s.prototype.animateIn = function(t, e) {
            e = e || window, t && t.call(e)
        }, s.prototype.animateOut = function(t, e) {
            e = e || window, t && t.call(e)
        }
    }, {}],
    50: [function(t, e, i) {
        function s() {
            this._stage = null, this._renderer = null, this._stack = [], this._transition = null, this._paused = !1
        }
        var n = (t("./Scene"), t("./Transition"));
        e.exports = s, s.prototype.init = function(t, e) {
            this._stage = t, this._renderer = e
        }, s.prototype.update = function() {
            this._stack.length && !this._paused && this.top.update()
        }, s.prototype.add = function(t, e) {
            function i(t) {
                if (this.top)
                    if (this.top.hide(), this._transition.push) {
                        if (this._transition.replace)
                            for (var e, i = 0; i < this._stack.length; ++i) e = this._stack[i], e.parent && e.parent.removeChild(e)
                    } else
                        for (; this.top;) this.top.parent.removeChild(this.top), this.top.dispose(), this._stack.pop();
                t.init(), t.resize(), t.parent || this.stage.addChildAt(t, this._transition.parent.getChildIndex(this._transition)), this._stack.push(t), this._transition.wait || p3.Timestep.queueCall(t.appear, null, t), this._transition.out(), console.log(this.getStack())
            }
            this.transitionInProgress || (this._transition = e || new n, !this._transition.requiresWebGL || this._renderer instanceof PIXI.WebGLRenderer || (this._transition = e.fallback(), this._transition.push = e.push, this._transition.replace = e.replace, this._transition.wait = e.wait), this._transition.init(), this._stage.addChild(this._transition), this._transition.signals["in"].addOnce(function(e) {
                p3.Timestep.queueCall(i, [t], this)
            }, this), this._transition.signals.out.addOnce(function(e) {
                this._transition = null, e.parent.removeChild(e), e.dispose(), e.wait && p3.Timestep.queueCall(t.appear, null, t)
            }, this), this._transition["in"]())
        }, s.prototype.getStack = function() {
            var t = [];
            for (var e in this._stack) t.push(this._stack[e].constructor.name);
            return "[ " + t.toString() + " ]"
        }, s.prototype.remove = function(t, e) {
            function i(t) {
                for (var e = 0; e < t; ++e) this.top.hide(), this.top.parent.removeChild(this.top), this.top.dispose(), this._stack.pop();
                var i = this.top;
                i.resize(), i.parent || this.stage.addChildAt(i, this._transition.parent.getChildIndex(this._transition)), this._transition.wait || i.show(), this._transition.out(), console.log(this._stack)
            }
            this.transitionInProgress || (this._transition = t || new n, e = Math.max(1, e) || 1, !this._transition.requiresWebGL || this._renderer instanceof PIXI.WebGLRenderer || (this._transition = t.fallback(), this._transition.push = t.push, this._transition.replace = t.replace, this._transition.wait = t.wait), this._transition.init(), this._stage.addChild(this._transition), this._transition.signals["in"].addOnce(function(t) {
                p3.Timestep.queueCall(i, [e], this)
            }, this), this._transition.signals.out.addOnce(function(t) {
                this._transition = null, t.parent.removeChild(t), t.dispose(), t.wait && this.top.show()
            }, this), this._transition["in"]())
        }, s.prototype.clear = function() {}, s.prototype.resize = function() {
            for (var t, e = 0; e < this._stack.length; ++e) t = this._stack[e], t.resize();
            this._transition && this._transition.resize()
        }, Object.defineProperty(s.prototype, "stage", {
            get: function() {
                return this._stage
            }
        }), Object.defineProperty(s.prototype, "top", {
            get: function() {
                return this._stack.length ? this._stack[this._stack.length - 1] : null
            }
        }), Object.defineProperty(s.prototype, "transitionInProgress", {
            get: function() {
                return null !== this._transition
            }
        }), Object.defineProperty(s.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(t) {
                this._paused = t
            }
        })
    }, {
        "./Scene": 49,
        "./Transition": 51
    }],
    51: [function(t, e, i) {
        function s() {
            this.signals = {}, this.signals["in"] = new signals.Signal, this.signals.out = new signals.Signal, this.push = !1, this.replace = !0, this.wait = !0, this.requiresWebGL = !1, PIXI.Container.call(this)
        }
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {}, s.prototype.dispose = function() {
            this.signals["in"].dispose(), this.signals.out.dispose(), this.removeChildren()
        }, s.prototype["in"] = function() {
            this.signals["in"].dispatch(this)
        }, s.prototype.out = function() {
            this.signals.out.dispatch(this)
        }, s.prototype.resize = function() {}, s.prototype.fallback = function() {}
    }, {}],
    52: [function(t, e, i) {
        function s(t, e) {
            o.call(this), this.level = t, this.isVictory = e, this.textYOffset = 60, this.signals.requestLevelSelectScreen = new signals.Signal, this.signals.requestedCurrentScreen = new signals.Signal, this.ringYOffset = 0, this.uiManager = new a
        }
        var n = t("../Common"),
            o = t("../screens/SimpleScreen"),
            a = t("../ui/UIManager"),
            r = t("../ui/ring/ring"),
            h = t("./Win"),
            l = t("./Lose");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.init = function() {
            o.prototype.init.call(this), this.bgSprite = new BP.Sprite({
                texture: n.assetManager.getTexture("bg_ui", ".jpg"),
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2,
                anchorXY: .5
            }).addTo(this), this.ring = (new r).applyParams({
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2 + this.ringYOffset
            }).addTo(this), this.charOverlay = this.isVictory ? (new h).addTo(this) : (new l).addTo(this);
            var t = this.isVictory ? n.languages.levelCompleted[n.gmi.language] : n.languages.gameOver[n.gmi.language];
            ["ru", "ar"].indexOf(n.gmi.language) !== -1 ? (this.endText = new PIXI.Text(t, n.webFont.Ahkio100), this.addChild(this.endText)) : (this.endText = new PIXI.extras.BitmapText("xxx", {
                font: "100px Ahkio100",
                align: "center"
            }), this.addChild(this.endText), this.endText.addToXAdvance = 2, this.endText.text = t), this.endText.x = Math.floor(n.STAGE_WIDTH / 2 - this.endText.width / 2), this.endText.y = Math.floor(this.textYOffset - this.endText.height / 2), this.drawUI()
        }, s.prototype.drawUI = function() {
            this.homeButton = this.uiManager.addSimpleButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_home_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_home_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_home_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onHomeButtonClick.bind(this)
                },
                align: 0
            }).addTo(this), this.soundButton = this.uiManager.addMuteButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_audio_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    switch_icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    switch_icon_over: n.assetManager.getTexture("btn_primary_medium_icon_mute_over"),
                    switch_icon_down: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onSoundButtonClick.bind(this)
                },
                align: 2
            }).addTo(this), this.levelSelectButton = this.uiManager.addSimpleButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_levels_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_levels_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_levels_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onLevelSelectButtonClick.bind(this)
                },
                align: 7
            }).addTo(this);
            var t = {
                normal: n.assetManager.getTexture("btn_primary_medium_off"),
                over: n.assetManager.getTexture("btn_primary_medium_over"),
                down: n.assetManager.getTexture("btn_primary_medium_off"),
                icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_replay_off"),
                icon_over: n.assetManager.getTexture("btn_primary_medium_icon_replay_over"),
                icon_down: n.assetManager.getTexture("btn_primary_medium_icon_replay_off"),
                ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
            };
            this.isVictory && (t = {
                normal: n.assetManager.getTexture("btn_primary_medium_off"),
                over: n.assetManager.getTexture("btn_primary_medium_over"),
                down: n.assetManager.getTexture("btn_primary_medium_off"),
                icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                icon_over: n.assetManager.getTexture("btn_primary_medium_icon_next_over"),
                icon_down: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
            }), this.replayButton = this.uiManager.addSimpleButton({
                textures: t,
                events: {
                    click: this.onReplayButtonClick.bind(this)
                },
                align: 7
            }).addTo(this)
        }, s.prototype.onHomeButtonClick = function() {
            this.signals.requestedPreviousScreen.dispatch()
        }, s.prototype.onSoundButtonClick = function() {}, s.prototype.onReplayButtonClick = function() {
            var t = !1;
            this.isVictory && (n.savedData.currentLevel + 1 < 15 ? n.savedData.currentLevel++ : t = !0, n.savedData.character = n.aliens[n.savedData.currentLevel % 5], n.chapter = n.getChapter(), n.alien = n.getAlien(), n.savedData.save()), t ? this.signals.requestedPreviousScreen.dispatch() : this.signals.requestedCurrentScreen.dispatch(!this.isVictory)
        }, s.prototype.onLevelSelectButtonClick = function() {
            this.signals.requestLevelSelectScreen.dispatch()
        }, s.prototype.appear = function() {
            n.stopAll(), n.currentMusic !== n.menuMusic && (n.stop(n.currentMusic), n.currentMusic = n.menuMusic, n.play(n.currentMusic, {
                loop: !0
            })), this.ring.animateIn(this.onRingComplete, this)
        }, s.prototype.onRingComplete = function() {
            this.charOverlay.animateIn()
        }, s.prototype.startGame = function() {}, s.prototype.animateIn = function(t, e) {
            this.popup.scaleXY = 0, this.popup.visible = !0;
            var i = new TimelineMax({
                onComplete: t,
                onCompleteScope: e
            });
            i.to(this.popup.scale, .5, {
                x: 1,
                y: 1,
                ease: Back.easeOut
            }, 0)
        }, s.prototype.animateOut = function(t, e) {
            var i = new TimelineMax({
                onComplete: t,
                onCompleteScope: e
            });
            i.to(this.popup.scale, .5, {
                x: 0,
                y: 0,
                ease: Back.easeIn
            }, 0)
        }, s.prototype.dispose = function() {
            this.charOverlay.doSeppuku(), this.uiManager.dispose(), o.prototype.dispose.call(this)
        }, s.prototype.start = function() {}, s.prototype.update = function() {
            this.charOverlay && this.charOverlay.update && this.charOverlay.update()
        }, s.prototype.resize = function() {
            o.prototype.resize.call(this), this.homeButton.x = Math.round((n.STAGE_WIDTH - p3.View.width) / 2) + this.homeButton.width / 2 + n.GEL_OFFSET, this.homeButton.y = this.homeButton.height / 2 + n.GEL_OFFSET, this.soundButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.soundButton.width / 2 - n.GEL_OFFSET, this.soundButton.y = this.soundButton.height / 2 + n.GEL_OFFSET, this.levelSelectButton.x = Math.round(n.STAGE_WIDTH / 2) - this.levelSelectButton.width / 2 - n.GEL_OFFSET / 2, this.levelSelectButton.y = n.STAGE_HEIGHT - this.levelSelectButton.height / 2 - n.GEL_OFFSET, this.replayButton.x = Math.round(n.STAGE_WIDTH / 2) + this.replayButton.width / 2 + n.GEL_OFFSET / 2, this.replayButton.y = n.STAGE_HEIGHT - this.replayButton.height / 2 - n.GEL_OFFSET
        }
    }, {
        "../Common": 4,
        "../screens/SimpleScreen": 61,
        "../ui/UIManager": 66,
        "../ui/ring/ring": 75,
        "./Lose": 54,
        "./Win": 55
    }],
    53: [function(t, e, i) {
        function s(t) {
            o.call(this), this.showRestartButton = void 0 === t || t, this.signals.requestLevelSelectScreen = new signals.Signal, this.signals.requestedCurrentScreen = new signals.Signal, this.uiManager = new a;
            var e = p3.Device.isMobile ? "mobile" : "desktop";
            this.tutorialTextures = [n.assetManager.getTexture("tutorial_" + e + "_001"), n.assetManager.getTexture("tutorial_" + e + "_002"), n.assetManager.getTexture("tutorial_" + e + "_003"), n.assetManager.getTexture("tutorial_" + e + "_004"), n.assetManager.getTexture("tutorial_" + e + "_005"), n.assetManager.getTexture("tutorial_" + e + "_006")], this.pageCounterTextures = [n.assetManager.getTexture("page_counter_001"), n.assetManager.getTexture("page_counter_002"), n.assetManager.getTexture("page_counter_003"), n.assetManager.getTexture("page_counter_004"), n.assetManager.getTexture("page_counter_005"), n.assetManager.getTexture("page_counter_006")], this.currrentPage = 0
        }
        var n = t("../Common"),
            o = t("../screens/SimpleScreen"),
            a = t("../ui/UIManager");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.init = function() {
                o.prototype.init.call(this), this.bg = new BP.Sprite({
                    texture: n.assetManager.getTexture("paused_bg", ".jpg"),
                    x: n.STAGE_WIDTH / 2,
                    y: n.STAGE_HEIGHT / 2,
                    anchorXY: .5
                }).addTo(this);
                var t = this.showRestartButton ? n.languages.paused[n.gmi.language] : n.languages.instructions[n.gmi.language];
                ["ru", "ar"].indexOf(n.gmi.language) !== -1 ? (this.instructionsText = new PIXI.Text(t, n.webFont.Ahkio50), this.addChild(this.instructionsText)) : (this.instructionsText = new PIXI.extras.BitmapText("", {
                    font: "50px Ahkio75",
                    align: "center"
                }), this.addChild(this.instructionsText), this.instructionsText.addToXAdvance = 3, this.instructionsText.text = t), this.instructionsText.x = Math.floor(n.STAGE_WIDTH / 2 - this.instructionsText.width / 2), this.instructionsText.y = 100, this.drawUI(), this.dim = new BP.Sprite({
                    texture: n.generatedTextures.black,
                    x: 0,
                    y: 0,
                    width: n.STAGE_WIDTH,
                    height: n.STAGE_HEIGHT,
                    alpha: 0,
                    anchorXY: 0,
                    visible: !1
                }).addTo(this), this.areYouSurePopup = new BP.Sprite({
                    texture: n.assetManager.getTexture("pop_up_are_you_sure"),
                    x: n.STAGE_WIDTH / 2,
                    y: n.STAGE_HEIGHT / 2,
                    anchorXY: .5,
                    visible: !1
                }).addTo(this), t = n.languages.areYouSure[n.gmi.language], ["ru", "ar"].indexOf(n.gmi.language) !== -1 ? (this.areYouSureText = new PIXI.Text(t, n.webFont.Ahkio50), this.areYouSurePopup.addChild(this.areYouSureText)) : (this.areYouSureText = new PIXI.extras.BitmapText("", {
                    font: "50px Ahkio75",
                    align: "center"
                }), this.areYouSurePopup.addChild(this.areYouSureText), this.areYouSureText.addToXAdvance = 3, this.areYouSureText.setLineHeight(70)), this.areYouSureText.text = t, this.areYouSureText.x = Math.floor(-this.areYouSureText.width / 2), this.areYouSureText.y = Math.floor(-100 - this.areYouSureText.height / 2), this.noButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_close_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_close_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_close_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onNoButtonClick.bind(this)
                    },
                    align: -1,
                    x: -100,
                    y: 70
                }).addTo(this.areYouSurePopup), this.yesButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_tick_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_tick_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_tick_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onYesButtonClick.bind(this)
                    },
                    align: -1,
                    x: 100,
                    y: 70
                }).addTo(this.areYouSurePopup)
            }, s.prototype.drawUI = function() {
                this.playButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_large_off"),
                        over: n.assetManager.getTexture("btn_primary_large_over"),
                        down: n.assetManager.getTexture("btn_primary_large_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_large_play_icon_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_large_play_icon_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_large_play_icon_off"),
                        ring1: n.assetManager.getTexture("btn_primary_large_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_large_off_ring_002")
                    },
                    events: {
                        click: this.onPlayButtonClick.bind(this)
                    },
                    align: 8
                }).addTo(this), this.soundButton = this.uiManager.addMuteButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_audio_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                        switch_icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                        switch_icon_over: n.assetManager.getTexture("btn_primary_medium_icon_mute_over"),
                        switch_icon_down: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onSoundButtonClick.bind(this)
                    },
                    align: 2
                }).addTo(this), this.levelSelectButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_levels_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_levels_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_levels_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onLevelSelectButtonClick.bind(this)
                    },
                    align: 0
                }).addTo(this), this.pageCounter = new BP.Sprite({
                    texture: this.pageCounterTextures[this.currrentPage],
                    x: n.STAGE_WIDTH / 2,
                    y: n.STAGE_HEIGHT / 2 + 132,
                    anchorXY: .5
                }).addTo(this), this.tutorialImages = new BP.Sprite({
                    texture: this.tutorialTextures[this.currrentPage],
                    x: n.STAGE_WIDTH / 2,
                    y: n.STAGE_HEIGHT / 2 - 32,
                    anchorXY: .5
                }).addTo(this), this.prevButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_back_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_back_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_back_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onPrevButtonClick.bind(this)
                    },
                    align: -1,
                    x: n.STAGE_WIDTH / 2 - 434,
                    y: n.STAGE_HEIGHT / 2 - 22
                }).addTo(this), this.nextButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_next_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onNextButtonClick.bind(this)
                    },
                    align: -1,
                    x: n.STAGE_WIDTH / 2 + 434,
                    y: n.STAGE_HEIGHT / 2 - 22
                }).addTo(this), this.showRestartButton && (this.restartButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_replay_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_replay_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_replay_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onRestartButtonClick.bind(this)
                    },
                    align: 6
                }).addTo(this))
            }, s.prototype.onPlayButtonClick = function() {
                this.signals.requestedNextScreen.dispatch()
            }, s.prototype.onSoundButtonClick = function() {}, s.prototype.onLevelSelectButtonClick = function() {
                this.areYouSurePopup.visible || (this.playButton.interactive = !1, this.soundButton.interactive = !1, this.levelSelectButton.interactive = !1, this.showRestartButton && (this.restartButton.interactive = !1), this.animateAreYouSureIn())
            }, s.prototype.onPrevButtonClick = function() {
                this.currrentPage--, this.currrentPage < 0 && (this.currrentPage = this.tutorialTextures.length - 1), this.pageCounter.texture = this.pageCounterTextures[this.currrentPage], this.tutorialImages.texture = this.tutorialTextures[this.currrentPage]
            }, s.prototype.onNextButtonClick = function() {
                this.currrentPage++, this.currrentPage > this.tutorialTextures.length - 1 && (this.currrentPage = 0), this.pageCounter.texture = this.pageCounterTextures[this.currrentPage], this.tutorialImages.texture = this.tutorialTextures[this.currrentPage]
            }, s.prototype.onNoButtonClick = function() {
                this.animateAreYouSureOut(function() {
                    this.playButton.interactive = !0, this.soundButton.interactive = !0, this.levelSelectButton.interactive = !0, this.showRestartButton && (this.restartButton.interactive = !0)
                }, this)
            }, s.prototype.onYesButtonClick = function() {
                this.signals.requestLevelSelectScreen.dispatch()
            }, s.prototype.animateAreYouSureIn = function(t, e) {
                this.areYouSurePopup.scaleXY = 0, this.areYouSurePopup.visible = !0, this.dim.alpha = 0, this.dim.visible = !0;
                var i = new TimelineMax({
                    onComplete: t,
                    onCompleteScope: e
                });
                i.to(this.dim, .5, {
                    alpha: .75,
                    ease: Linear.easeNone
                }, 0), i.to(this.areYouSurePopup.scale, .5, {
                    x: 1,
                    y: 1,
                    ease: Back.easeOut
                }, 0)
            }, s.prototype.animateAreYouSureOut = function(t, e) {
                var i = new TimelineMax({
                    onComplete: t,
                    onCompleteScope: e
                });
                i.to(this.areYouSurePopup.scale, .5, {
                    x: 0,
                    y: 0,
                    ease: Back.easeIn,
                    onComplete: function() {
                        this.areYouSurePopup.visible = !1
                    },
                    onCompleteScope: this
                }, 0), i.to(this.dim, .5, {
                    alpha: 0,
                    ease: Linear.easeNone,
                    onComplete: function() {
                        this.dim.alpha = 0, this.dim.visble = !1
                    },
                    onCompleteScope: this
                }, 0)
            }, s.prototype.onRestartButtonClick = function() {
                this.signals.requestedCurrentScreen.dispatch(!0)
            }, s.prototype.appear = function() {
                n.stop(n.walkLoop)
            }, s.prototype.startGame = function() {}, s.prototype.dispose = function() {
                o.prototype.dispose.call(this)
            }, s.prototype.start = function() {}, s.prototype.update = function() {},
            s.prototype.resize = function() {
                o.prototype.resize.call(this), this.soundButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.soundButton.width / 2 - n.GEL_OFFSET, this.soundButton.y = this.soundButton.height / 2 + n.GEL_OFFSET, this.levelSelectButton.x = Math.round((n.STAGE_WIDTH - p3.View.width) / 2) + this.levelSelectButton.width / 2 + n.GEL_OFFSET, this.levelSelectButton.y = this.levelSelectButton.height / 2 + n.GEL_OFFSET, this.showRestartButton && (this.restartButton.x = Math.round((n.STAGE_WIDTH - p3.View.width) / 2) + this.restartButton.width / 2 + n.GEL_OFFSET, this.restartButton.y = n.STAGE_HEIGHT - this.restartButton.height / 2 - n.GEL_OFFSET), this.playButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.playButton.width / 2 - n.GEL_OFFSET, this.playButton.y = n.STAGE_HEIGHT - this.playButton.height / 2 - n.GEL_OFFSET
            }
    }, {
        "../Common": 4,
        "../screens/SimpleScreen": 61,
        "../ui/UIManager": 66
    }],
    54: [function(t, e, i) {
        function s() {
            return PIXI.Container.call(this), this.tweens = [], this.animTween = null, this.visible = !1, this.init(), this
        }
        var n = t("../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.silhouettes = new BP.Container({
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2,
                scaleXY: 1
            }).addTo(this), this.silhouette1 = new BP.Sprite({
                texture: n.assetManager.getTexture("silhouette_1"),
                x: -180,
                y: -80,
                anchorXY: .5
            }).addTo(this.silhouettes), this.sil1_filter = new PIXI.filters.BlurFilter, this.sil1_filter.blur = 0, this.sil1_filter.passes = 2, this.silhouette1.filters = [this.sil1_filter], this.silhouette2 = new BP.Sprite({
                texture: n.assetManager.getTexture("silhouette_2"),
                x: -180,
                y: 180,
                anchorXY: .5
            }).addTo(this.silhouettes), this.sil2_filter = new PIXI.filters.BlurFilter, this.sil2_filter.blur = 0, this.sil2_filter.passes = 2, this.silhouette2.filters = [this.sil2_filter], this.silhouette3 = new BP.Sprite({
                texture: n.assetManager.getTexture("silhouette_3"),
                x: 180,
                y: -160,
                anchorXY: .5
            }).addTo(this.silhouettes), this.sil3_filter = new PIXI.filters.BlurFilter, this.sil3_filter.blur = 0, this.sil3_filter.passes = 2, this.silhouette3.filters = [this.sil3_filter], this.silhouette4 = new BP.Sprite({
                texture: n.assetManager.getTexture("silhouette_4"),
                x: 230,
                y: 40,
                anchorXY: .5
            }).addTo(this.silhouettes), this.sil4_filter = new PIXI.filters.BlurFilter, this.sil4_filter.blur = 0, this.sil4_filter.passes = 2, this.silhouette4.filters = [this.sil4_filter], this.silhouette5 = new BP.Sprite({
                texture: n.assetManager.getTexture("silhouette_5"),
                x: 160,
                y: 200,
                anchorXY: .5
            }).addTo(this.silhouettes), this.sil5_filter = new PIXI.filters.BlurFilter, this.sil5_filter.blur = 0, this.sil5_filter.passes = 2, this.silhouette5.filters = [this.sil5_filter], this.benSprite = new BP.Sprite({
                texture: n.assetManager.getTexture("ben_gameover"),
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT,
                anchorXY: .5,
                alpha: 0
            }).addTo(this)
        }, s.prototype.animateIn = function() {
            var t = .75,
                e = 6;
            this.animTween = new TimelineMax({
                onComplete: function() {},
                onCompleteScope: this
            }), this.animTween.timeScale(.9), this.animTween.to(this.benSprite.position, .2, {
                y: 460,
                ease: Cubic.easeOut
            }, "start"), this.animTween.to(this.benSprite, .2, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.animTween.from(this.silhouette1.scale, .3, {
                x: 0,
                y: 0,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette1.position, .3, {
                x: 0,
                y: 0,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette1, .3, {
                alpha: 0,
                delay: 0,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.silhouette1, 2.1, {
                delay: .6,
                alpha: t,
                repeat: -1,
                yoyo: !0,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.sil1_filter, 2.1, {
                delay: .6,
                blur: e,
                repeat: -1,
                yoyo: !0,
                ease: Cubic.easeOut
            }, "sil"), this.animTween.from(this.silhouette2.scale, .36, {
                x: 0,
                y: 0,
                delay: .3,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette2.position, .36, {
                x: 0,
                y: 0,
                delay: .3,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette2, .36, {
                alpha: 0,
                delay: .3,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.silhouette2, 1.7, {
                delay: .7,
                alpha: t,
                repeat: -1,
                yoyo: !0,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.sil2_filter, 1.7, {
                delay: .7,
                blur: e,
                repeat: -1,
                yoyo: !0,
                ease: Cubic.easeOut
            }, "sil"), this.animTween.from(this.silhouette3.scale, .29, {
                x: 0,
                y: 0,
                delay: .2,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette3.position, .29, {
                x: 0,
                y: 0,
                delay: .2,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette3, .29, {
                alpha: 0,
                delay: .2,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.silhouette3, 1.9, {
                delay: .5,
                alpha: t,
                repeat: -1,
                yoyo: !0,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.sil3_filter, 1.9, {
                delay: .4,
                blur: e,
                repeat: -1,
                yoyo: !0,
                ease: Cubic.easeOut
            }, "sil"), this.animTween.from(this.silhouette4.scale, .4, {
                x: 0,
                y: 0,
                delay: .38,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette4.position, .4, {
                x: 0,
                y: 0,
                delay: .38,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette4, .4, {
                alpha: 0,
                delay: .38,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.silhouette4, 1.8, {
                delay: .8,
                alpha: t,
                repeat: -1,
                yoyo: !0,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.sil4_filter, 1.8, {
                delay: .8,
                blur: e,
                repeat: -1,
                yoyo: !0,
                ease: Cubic.easeOut
            }, "sil"), this.animTween.from(this.silhouette5.scale, .32, {
                x: 0,
                y: 0,
                delay: .1,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette5.position, .32, {
                x: 0,
                y: 0,
                delay: .1,
                ease: Back.easeOut
            }, "sil"), this.animTween.from(this.silhouette4, .32, {
                alpha: 0,
                delay: .1,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.silhouette5, 2, {
                delay: .2,
                alpha: t,
                repeat: -1,
                yoyo: !0,
                ease: Linear.easeNone
            }, "sil"), this.animTween.to(this.sil5_filter, 2, {
                delay: .2,
                blur: e,
                repeat: -1,
                yoyo: !0,
                ease: Cubic.easeOut
            }, "sil"), this.visible = !0
        }, s.prototype.killAllTweens = function() {
            this.animTween && this.animTween.kill()
        }, s.prototype.doSeppuku = function() {
            this.killAllTweens()
        }
    }, {
        "../Common": 4
    }],
    55: [function(t, e, i) {
        function s() {
            return PIXI.Container.call(this), this.visible = !1, this.animateScoreTween = null, this.animTween = null, this.cardTween = null, this.starsTween = null, this.sumoPS = null, this.gap = 10, this.score = 0, this.init(), this
        }
        var n = t("../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.benSprite = new BP.Sprite({
                texture: n.assetManager.getTexture(n.savedData.character),
                x: -200,
                y: 750,
                anchorX: 1,
                anchorY: 1,
                alpha: 0
            }).addTo(this), this.sumoSprite = new BP.Sprite({
                texture: n.assetManager.getTexture("sumo_card"),
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2,
                anchorX: .5,
                anchorY: .5,
                scaleXY: 0,
                alpha: 0
            }).addTo(this), this.startsContainer = new BP.Container({
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2 + 130,
                visible: !1
            }).addTo(this), this.star1 = new BP.Sprite({
                texture: n.assetManager.getTexture("star_off_big"),
                x: -150,
                y: -50,
                anchorXY: .5,
                scaleXY: 2,
                alpha: 0
            }).addTo(this.startsContainer), this.star2 = new BP.Sprite({
                texture: n.assetManager.getTexture("star_off_big"),
                x: 0,
                y: 0,
                anchorXY: .5,
                scaleXY: 2,
                alpha: 0
            }).addTo(this.startsContainer), this.star3 = new BP.Sprite({
                texture: n.assetManager.getTexture("star_off_big"),
                x: 150,
                y: -50,
                anchorXY: .5,
                scaleXY: 2,
                alpha: 0
            }).addTo(this.startsContainer), this.scoreText = new PIXI.extras.BitmapText("" + this.score, {
                font: "90px Ahkio90",
                align: "center"
            }), this.addChild(this.scoreText), this.scoreText.addToXAdvance = 4, this.scoreText.x = Math.floor(n.STAGE_WIDTH / 2 - this.scoreText.width / 2), this.scoreText.y = Math.floor(n.STAGE_HEIGHT / 2 - this.scoreText.height / 2) - 100, this.whiteContainer = new BP.Container({
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2 + 100,
                alpha: 0
            }).addTo(this), this.icon = new BP.Sprite({
                texture: n.assetManager.getTexture(n.scoreData[0].icon),
                x: 0,
                y: 0,
                anchorX: 0,
                anchorY: .5
            }).addTo(this.whiteContainer), this.whiteText = new PIXI.extras.BitmapText(n.scoreData[0].type, {
                font: "60px Ahkio60",
                align: "left"
            }), this.whiteContainer.addChild(this.whiteText), this.whiteText.addToXAdvance = 4, this.whiteText.y = -this.whiteText.height / 2 - 4
        }, s.prototype.animateIn = function() {
            this.animTween = new TimelineMax({
                onComplete: function() {
                    this.showScoring()
                },
                onCompleteScope: this
            }), this.animTween.timeScale(.85), this.animTween.to(this.benSprite.position, .3, {
                x: 750,
                ease: Cubic.easeOut
            }, "start"), this.animTween.to(this.benSprite, .3, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.visible = !0
        }, s.prototype.animateScore = function(t, e) {
            var i = {
                    v: this.score
                },
                s = {
                    v: this.score + n.levelScore[n.scoreData[t].type] * n.scoreData[t].scoring
                };
            this.animateScoreTween && this.animateScoreTween.kill(), this.animateScoreTween = TweenMax.to(i, e, {
                v: s.v,
                ease: Linear.easeNone,
                onUpdate: function() {
                    this.scoreText.text = this.numberWithCommas(Math.ceil(i.v)), this.scoreText.x = n.STAGE_WIDTH / 2 - this.scoreText.width / 2
                },
                onUpdateScope: this,
                onComplete: function() {
                    this.score += n.levelScore[n.scoreData[t].type] * n.scoreData[t].scoring
                },
                onCompleteScope: this
            })
        }, s.prototype.animateStarsScore = function(t) {
            var e = {
                    v: this.score
                },
                i = {
                    v: this.score + n.stars[n.savedData.stars[n.savedData.currentLevel] - 1]
                };
            this.animateScoreTween && this.animateScoreTween.kill(), this.animateScoreTween = TweenMax.to(e, t, {
                v: i.v,
                ease: Linear.easeNone,
                onUpdate: function() {
                    this.scoreText.text = this.numberWithCommas(Math.ceil(e.v)), this.scoreText.x = n.STAGE_WIDTH / 2 - this.scoreText.width / 2
                },
                onUpdateScope: this,
                onComplete: function() {},
                onCompleteScope: this
            })
        }, s.prototype.showScoring = function() {
            var t = .7,
                e = .2,
                i = 1;
            this.whiteTween = new TimelineMax, 0 !== n.levelScore.fire && (this.whiteTween.to(this.whiteContainer, e, {
                alpha: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.setupWhiteContainer(0, e)
                },
                onStartScope: this,
                onComplete: function() {
                    this.animateScore(0, t)
                },
                onCompleteScope: this
            }), this.whiteTween.to(this.whiteContainer.scale, t, {
                x: i,
                y: i,
                ease: Sine.easeInOut,
                repeat: 1,
                yoyo: !0
            }), this.whiteTween.to(this.whiteContainer, e, {
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: function() {},
                onCompleteScope: this
            })), 0 !== n.levelScore.time && (this.whiteTween.to(this.whiteContainer, e, {
                alpha: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.setupWhiteContainer(1, e)
                },
                onStartScope: this,
                onComplete: function() {
                    this.animateScore(1, t)
                },
                onCompleteScope: this
            }), this.whiteTween.to(this.whiteContainer.scale, t, {
                x: i,
                y: i,
                ease: Sine.easeInOut,
                repeat: 1,
                yoyo: !0
            }), this.whiteTween.to(this.whiteContainer, e, {
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: function() {},
                onCompleteScope: this
            })), 0 !== n.levelScore.enemy && (this.whiteTween.to(this.whiteContainer, e, {
                alpha: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.setupWhiteContainer(2, e)
                },
                onStartScope: this,
                onComplete: function() {
                    this.animateScore(2, t)
                },
                onCompleteScope: this
            }), this.whiteTween.to(this.whiteContainer.scale, t, {
                x: i,
                y: i,
                ease: Sine.easeInOut,
                repeat: 1,
                yoyo: !0
            }), this.whiteTween.to(this.whiteContainer, e, {
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: function() {},
                onCompleteScope: this
            })), 0 !== n.levelScore.omnitrix && (this.whiteTween.to(this.whiteContainer, e, {
                alpha: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.setupWhiteContainer(3, e)
                },
                onStartScope: this,
                onComplete: function() {
                    this.animateScore(3, t)
                },
                onCompleteScope: this
            }), this.whiteTween.to(this.whiteContainer.scale, t, {
                x: i,
                y: i,
                ease: Sine.easeInOut,
                repeat: 1,
                yoyo: !0
            }), this.whiteTween.to(this.whiteContainer, e, {
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: function() {},
                onCompleteScope: this
            })), this.whiteTween.to(this.whiteContainer, e, {
                alpha: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.setupWhiteContainer(4, e)
                },
                onStartScope: this,
                onComplete: function() {
                    this.animateScore(4, t)
                },
                onCompleteScope: this
            }), this.whiteTween.to(this.whiteContainer.scale, t, {
                x: i,
                y: i,
                ease: Sine.easeInOut,
                repeat: 1,
                yoyo: !0,
                onComplete: function() {
                    this.animateCardOut()
                },
                onCompleteScope: this
            }), this.whiteTween.to(this.whiteContainer, e, {
                alpha: 0,
                ease: Linear.easeNone,
                onComplete: function() {
                    this.animateStars()
                },
                onCompleteScope: this
            })
        }, s.prototype.animateStars = function() {
            var t = .1;
            this.starsTween && this.starsTween.kill(), n.savedData.stars[n.savedData.currentLevel] > 0 && (this.star1.texture = n.assetManager.getTexture("star_on_big")), n.savedData.stars[n.savedData.currentLevel] > 1 && (this.star2.texture = n.assetManager.getTexture("star_on_big")), n.savedData.stars[n.savedData.currentLevel] > 2 && (this.star3.texture = n.assetManager.getTexture("star_on_big")), this.starsTween = new TimelineMax, this.startsContainer.visible = !0, this.starsTween.to(this.startsContainer, .4, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.starsTween.to(this.star1.scale, t, {
                x: 1,
                y: 1,
                ease: Cubic.easeIn,
                onStart: function() {
                    n.play("sfx_star_award_01"), this.animateStarsScore(3 * t)
                },
                onStartScope: this
            }, "s1"), this.starsTween.to(this.star1, t, {
                alpha: 1,
                ease: Linear.easeNone
            }, "s1"), this.starsTween.to(this.star2.scale, t, {
                x: 1,
                y: 1,
                ease: Cubic.easeIn,
                onStart: function() {
                    n.play("sfx_star_award_02")
                }
            }, "s2"), this.starsTween.to(this.star2, t, {
                alpha: 1,
                ease: Linear.easeNone
            }, "s2"), this.starsTween.to(this.star3.scale, t, {
                x: 1,
                y: 1,
                ease: Cubic.easeIn,
                onStart: function() {
                    n.play("sfx_star_award_03")
                }
            }, "s3"), this.starsTween.to(this.star3, t, {
                alpha: 1,
                ease: Linear.easeNone
            }, "s3")
        }, s.prototype.setupWhiteContainer = function(t, e) {
            switch (n.scoreData[t].type) {
                case "omnitrix":
                    this.whiteText.text = n.levelScore[n.scoreData[t].type] + "/" + n.levelScore.omnitrixTotal;
                    break;
                case "sumo":
                    this.whiteText.text = "+ " + this.numberWithCommas(n.levelScore[n.scoreData[t].type] * n.scoreData[t].scoring), n.animator.setTimeout(function() {
                        this.animateCardIn()
                    }, e, this);
                    break;
                default:
                    this.whiteText.text = this.numberWithCommas(n.levelScore[n.scoreData[t].type] * n.scoreData[t].scoring)
            }
            "NONE" !== n.scoreData[t].icon ? this.icon.texture = n.assetManager.getTexture(n.scoreData[t].icon) : this.icon.visible = !1, this.whiteText.x = this.icon.visible ? this.icon.width + this.gap : 0, this.whiteContainer.x = n.STAGE_WIDTH / 2 - this.whiteContainer.width / 2
        }, s.prototype.numberWithCommas = function(t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }, s.prototype.animateCardIn = function() {
            n.levelScore.sumo > 0 && (this.sumoPS = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_pickup_key_sumocard")], n.assetManager.getJSON("particle_pickup_key_sumocard")), this.sumoPS.emit = !1), this.cardTween = new TimelineMax({
                onComplete: function() {},
                onCompleteScope: this
            }), this.cardTween.to(this.sumoSprite.scale, .6, {
                x: 1,
                y: 1,
                ease: Back.easeOut
            }, "start"), this.cardTween.to(this.sumoSprite, .6, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), n.levelScore.sumo > 0 && (this.sumoPS.updateSpawnPos(this.sumoSprite.x - 30, this.sumoSprite.y), this.sumoPS._posChanged = !1, this.sumoPS.emitterLifetime = 2, this.sumoPS.emit = !0, this.cardTween.to(this.sumoSprite, .05, {
                rotation: -Math.PI / 6,
                ease: Cubic.easeOut
            }, "shake"), this.cardTween.to(this.sumoSprite, .1, {
                rotation: Math.PI / 6,
                ease: Cubic.easeInOut
            }), this.cardTween.to(this.sumoSprite, .06, {
                rotation: 0,
                ease: Back.easeOut
            }))
        }, s.prototype.animateCardOut = function() {
            this.cardTween && this.cardTween.kill(), this.cardTween = new TimelineMax({
                onComplete: function() {},
                onCompleteScope: this
            }), this.cardTween.to(this.sumoSprite.scale, .6, {
                x: 0,
                y: 0,
                ease: Back.easeIn
            }, "start"), this.cardTween.to(this.sumoSprite, .6, {
                alpha: 0,
                ease: Linear.easeNone
            }, "start")
        }, s.prototype.killAllTweens = function() {
            this.animTween && this.animTween.kill(), this.cardTween && this.cardTween.kill(), this.animateScoreTween && this.animateScoreTween.kill(), this.starsTween && this.starsTween.kill()
        }, s.prototype.update = function() {
            this.sumoPS && this.sumoPS.update(p3.Timestep.deltaTime)
        }, s.prototype.doSeppuku = function() {
            this.killAllTweens()
        }
    }, {
        "../Common": 4
    }],
    56: [function(t, e, i) {
        function s() {
            a.call(this)
        }
        var n = t("../Common"),
            o = t("../editor/Editor"),
            a = t("./SimpleScreen");
        e.exports = s, s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            console.log("EDITOR INITIALIZED"), this.hitArea = new PIXI.Sprite(n.generatedTextures.blackSquare), this.hitArea.alpha = 0, this.hitArea.width = n.STAGE_WIDTH, this.hitArea.height = n.STAGE_HEIGHT, this.hitArea.interactive = !0, this.addChild(this.hitArea), this.mouse = {
                position: new PIXI.Point(0, 0),
                lastPosition: new PIXI.Point(0, 0),
                movement: new PIXI.Point(0, 0),
                leftPressed: !1,
                leftJustPressed: !1,
                centerPressed: !1,
                rightPressed: !1,
                rightJustPressed: !1,
                update: function() {
                    this.leftJustPressed = !1, this.rightJustPressed = !1, this.movement.x = this.position.x - this.lastPosition.x, this.movement.y = this.position.y - this.lastPosition.y, this.lastPosition.x = this.position.x, this.lastPosition.y = this.position.y
                }
            }, document.getElementById("canvas").onmousedown = function(t) {
                switch (t.preventDefault(), t.which) {
                    case 1:
                        this.mouse.leftPressed = !0, this.mouse.leftJustPressed = !0;
                        break;
                    case 2:
                        this.mouse.centerPressed = !0;
                        break;
                    case 3:
                        this.mouse.rightPressed = !0, this.mouse.rightJustPressed = !0
                }
            }.bind(this), document.getElementById("canvas").onmouseup = function(t) {
                switch (t.which) {
                    case 1:
                        this.mouse.leftPressed = !1;
                        break;
                    case 2:
                        this.mouse.centerPressed = !1;
                        break;
                    case 3:
                        this.mouse.rightPressed = !1
                }
            }.bind(this), this.hitArea.mousemove = function(t) {
                this.mouse.position.x = t.data.getLocalPosition(this).x, this.mouse.position.y = t.data.getLocalPosition(this).y
            }.bind(this), this.editor = new o, this.editor.mouse = this.mouse, this.addChild(this.editor), this.editor.init(), a.prototype.init.call(this)
        }, s.prototype.update = function() {
            this.editor.update(), this.mouse.update()
        }, s.prototype.resize = function() {
            a.prototype.resize.call(this)
        }, s.prototype.dispose = function() {}, s.prototype.animateIn = function(t, e) {
            a.prototype.animateIn.call(this)
        }, s.prototype.animateOut = function(t, e) {
            a.prototype.animateOut.call(this)
        }, s.prototype.hideGUI = function(t, e) {
            this._paused = !0, TweenMax.pauseAll()
        }, s.prototype.showGUI = function() {
            this._paused = !1, TweenMax.resumeAll()
        }
    }, {
        "../Common": 4,
        "../editor/Editor": 9,
        "./SimpleScreen": 61
    }],
    57: [function(t, e, i) {
        function s(t) {
            o.call(this), this.wasRestart = t || !1, this._level = null, this._levelTime = 30, this.canStartCountdown = !1, this._gameOver = !1, this.isVictory = !1, this._paused = !1, this.gateTween = null, this.gateLock = null, this.gateLockActive = !1, this.hintTween = !1, this.halfWidth = null, this.chapterText = null, this.signals.requestPauseScreen = new signals.Signal, this.signals.requestOutOfTime = new signals.Signal, this.uiManager = new r, this.uiManager.on("pause", this.uiManagerOnPause.bind(this)), this.uiManager.on("resume", this.uiManagerOnResume.bind(this))
        }
        var n = t("../Common"),
            o = t("./SimpleScreen"),
            a = t("../game/Level"),
            r = t("../ui/UIManager"),
            h = t("../ui/clock/clock"),
            l = t("../ui/counter/counter"),
            c = t("../ui/keys/keys"),
            p = t("../ui/joypad/Joypad"),
            u = t("../ui/ScreenDim"),
            d = t("../ui/Candies");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.init = function() {
            o.prototype.init.call(this), this.clearScoring(), this.clearOwnedKeys();
            var t = "level_" + n.chapter + "_" + n.alien;
            try {
                n.assetManager.getJSON(t)
            } catch (e) {
                t = "level_test"
            }
            this._level = new a((!1), t, "theme_0" + n.chapter + "_"), this._level.init(), this.addChild(this._level), p3.Device.isMobile && (this.joypad = (new p).addTo(this)), this.drawUI();
            var i = n.GEL_OFFSET + 32;
            if (this.clockDim = new u(.5), this.addChild(this.clockDim), this.clock = new h(this._levelTime).addTo(this), this.clock.y = i, this.hintContainer = new BP.Container({
                    visible: !1
                }).addTo(this), this.hintBg = new BP.Sprite({
                    texture: n.assetManager.getTexture("prompt_panel"),
                    anchorXY: .5
                }).addTo(this.hintContainer), this.hintFg = new BP.Sprite({
                    texture: n.assetManager.getTexture("prompt_cannonbolt"),
                    anchorXY: .5
                }).addTo(this.hintContainer), this.gateLock = new BP.Sprite({
                    texture: n.assetManager.getTexture("prompt_key_blue"),
                    x: n.STAGE_WIDTH / 2,
                    y: n.STAGE_HEIGHT / 2,
                    anchorXY: .5,
                    visible: !1
                }).addTo(this), n.levelScore.omnitrixTotal = this._level.countOmnitrixes(), this.counter = new l(n.levelScore.omnitrixTotal).addTo(this), this.counter.y = i, this._level.countKeys() > 0 && (this.keys = (new c).addTo(this), this.keys.y = i), 1 === n.getAlien()) {
                var s = n.languages.chapter.chapter[n.gmi.language] + " " + n.getChapter();
                ["ru", "ar"].indexOf(n.gmi.language) !== -1 ? (this.chapterText = new PIXI.Text(s, n.webFont.Ahkio100), this.addChild(this.chapterText)) : (this.chapterText = new PIXI.extras.BitmapText("xxx", {
                    font: "100px Ahkio100",
                    align: "center"
                }), this.addChild(this.chapterText), this.chapterText.addToXAdvance = 2, this.chapterText.text = s), this.chapterText.x = Math.floor(n.STAGE_WIDTH / 2 - this.chapterText.width / 2), this.chapterText.y = 170, this.chapterText.alpha = 0
            }
            this.candies = new d(900, 360).addTo(this), this.signals.requestOutOfTime.addOnce(this.onOutOftime, this)
        }, s.prototype.clearOwnedKeys = function() {
            n.ownedKeys = {
                green: !1,
                blue: !1,
                red: !1
            }
        }, s.prototype.clearScoring = function() {
            n.levelScore = {
                omnitrixTotal: 0,
                fire: 0,
                enemy: 0,
                omnitrix: 0,
                time: 0,
                sumo: 0
            }
        }, s.prototype.drawUI = function() {
            this.pauseButton = this.uiManager.addSimpleButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_pause_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_pause_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_pause_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onPauseButtonClick.bind(this)
                },
                align: 2
            }).addTo(this), this.soundButton = this.uiManager.addMuteButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_audio_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    switch_icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    switch_icon_over: n.assetManager.getTexture("btn_primary_medium_icon_mute_over"),
                    switch_icon_down: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onSoundButtonClick.bind(this)
                },
                align: 0
            }).addTo(this)
        }, s.prototype.onOmnitrixPickUp = function() {
            n.levelScore.omnitrix++, this.counter.value = n.levelScore.omnitrix
        }, s.prototype.onTimePickUp = function() {
            n.levelScore.time++, this._levelTime += n.timePickUpAdd
        }, s.prototype.onKeyPickUp = function(t) {
            this.keys[t] = !0
        }, s.prototype.alignHintContainer = function() {
            var t = this._level.avatar.direction;
            this.hintContainer.x = Math.round((n.STAGE_WIDTH + t * p3.View.width) / 2) - t * n.assetManager.getTexture("prompt_panel").width / 2 - t * n.GEL_OFFSET, this.hintContainer.y = n.STAGE_HEIGHT / 2
        }, s.prototype.onHintHit = function(t) {
            this.hintTween && this.hintTween.kill(), this.hintBg.alpha = 0, this.hintBg.rotation = 2 * Math.PI, this.hintBg.scaleXY = 0, this.hintFg.alpha = 0, this.hintFg.scaleXY = 0, this.hintFg.texture = n.assetManager.getTexture("prompt_" + (p3.Device.isMobile ? "device_" : "") + t.id);
            var e = .4,
                i = .5;
            this.hintTween = new TimelineMax({
                onStart: function() {
                    this.alignHintContainer(), this.hintContainer.visible = !0
                },
                onStartScope: this
            }), this.hintTween.to(this.hintBg, e, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.hintTween.to(this.hintBg.scale, e, {
                x: 1,
                y: 1,
                ease: Back.easeOut
            }, "start"), this.hintTween.to(this.hintBg, e, {
                rotation: 0,
                ease: Sine.easeOut
            }, "start"), this.hintTween.to(this.hintFg.scale, e, {
                delay: e / 2,
                x: 1,
                y: 1,
                ease: Sine.easeOut
            }, "start"), this.hintTween.to(this.hintFg, e, {
                delay: e / 2,
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.hintTween.to(this.hintFg.scale, i, {
                delay: e / 2,
                x: .95,
                y: .95,
                repeat: -1,
                yoyo: !0,
                ease: Sine.easeInOut
            }, "middle"), this.hintTween.to(this.hintBg, 10, {
                rotation: 2 * Math.PI,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: !0
            }, "middle")
        }, s.prototype.onHintLeft = function(t) {
            this.hintTween && this.hintTween.kill();
            var e = .2,
                i = this.hintBg;
            this.hintTween = new TimelineMax({
                onComplete: function() {
                    this.hintContainer.visible = !1
                },
                onCompleteScope: this
            }), this.hintTween.to(this.hintFg.scale, e, {
                x: 0,
                y: 0,
                ease: Sine.easeIn
            }, "end"), this.hintTween.to(this.hintBg, e, {
                delay: e / 2,
                rotation: i - 2 * Math.PI,
                ease: Back.easeIn
            }, "end"), this.hintTween.to(this.hintBg, e, {
                delay: e / 2,
                alpha: 0,
                ease: Linear.easeNone
            }, "end"), this.hintTween.to(this.hintBg.scale, e, {
                delay: e / 2,
                x: 0,
                y: 0,
                ease: Back.easeOut
            }, "end")
        }, s.prototype.onFireExtinguished = function() {
            n.levelScore.fire++
        }, s.prototype.onEnemyKilled = function() {
            n.levelScore.enemy++
        }, s.prototype.onAvatarShot = function() {
            this._level.avatar.death()
        }, s.prototype.onSumoCardPickUp = function() {
            n.levelScore.sumo++
        }, s.prototype.onLockedGateHit = function(t) {
            this.gateLockActive || (this.gateTween && this.gateTween.kill(), this.gateLockActive = !0, this.gateLock.texture = n.assetManager.getTexture("prompt_key_" + t), this.gateLock.scaleXY = 0, this.gateLock.alpha = 0, this.gateLock.visible = !0, this.gateTween = new TimelineMax({
                onComplete: function() {
                    this.gateLock.visible = !1, this.gateLockActive = !1
                },
                onCompleteScope: this
            }), this.gateTween.to(this.gateLock, .1, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.gateTween.to(this.gateLock.scale, .2, {
                x: 1.3,
                y: 1.3,
                ease: Sine.easeOut
            }, "start"), this.gateTween.to(this.gateLock.scale, .5, {
                x: 1,
                y: 1,
                repeat: 3,
                yoyo: !0,
                ease: Sine.easeInOut
            }), this.gateTween.to(this.gateLock, .1, {
                alpha: 0,
                ease: Linear.easeNone
            }, "end"), this.gateTween.to(this.gateLock.scale, .2, {
                x: 0,
                y: 0,
                ease: Sine.easeIn
            }, "end"))
        }, s.prototype.onOutOftime = function() {
            this._gameOver = !0, this._level.avatar.isDead || (this._level.avatar.transformOut(), this._level.avatar.stopLoops(), n.animator.setTimeout(function() {
                this._level.gameOver(!1, 1)
            }, 1, this))
        }, s.prototype.uiManagerOnPause = function() {
            this._paused = !0
        }, s.prototype.uiManagerOnResume = function() {
            this._paused = !1
        }, s.prototype.onPauseButtonClick = function() {
            this._gameOver || this.signals.requestPauseScreen.dispatch()
        }, s.prototype.onSoundButtonClick = function() {}, s.prototype.onClockAnimComplete = function() {
            this.pauseButton.interactive = !0, n.animator.setTimeout(function() {
                this._level.avatar.transformIn(), this.clockDim.dimAlpha = 0, this.clockDim.start()
            }, 1, this)
        }, s.prototype.onTransformInComplete = function() {
            this.canStartCountdown = !0, this.chapterText && !this.wasRestart && TweenMax.to(this.chapterText, .5, {
                alpha: 1,
                ease: Linear.easeNone,
                repeat: 1,
                repeatDelay: 2,
                yoyo: !0,
                onComplete: function() {
                    this.chapterText.visible = !1
                },
                onCompleteScope: this
            })
        }, s.prototype.startGame = function() {
            this.wasRestart ? n.animator.setTimeout(function() {
                this.pauseButton.interactive = !0, this._level.avatar.transformIn()
            }, 1, this) : (this.clockDim.start(), this.clock.animate()), n.currentMusic === n.menuMusic && (n.stop(n.currentMusic), n.currentMusic = n.gameMusic), n.play(n.currentMusic, {
                loop: !0
            })
        }, s.prototype.appear = function() {
            this._gameOver = !1, this.pauseButton.interactive = !1, this.startGame()
        }, s.prototype.dispose = function() {
            this.signals.requestPauseScreen.dispose(), this.signals.requestOutOfTime.dispose(), this.counter.doSeppuku(), this.clock.doSeppuku(), this.candies.doSeppuku(), o.prototype.dispose.call(this)
        }, s.prototype.start = function() {}, s.prototype.computeScore = function() {
            n.savedData.stars[n.savedData.currentLevel] = 1;
            var t = n.levelScore.omnitrix / n.levelScore.omnitrixTotal * 100;
            t > 49 && (n.savedData.stars[n.savedData.currentLevel] = 2), n.levelScore.omnitrix === n.levelScore.omnitrixTotal && (n.savedData.stars[n.savedData.currentLevel] = 3), n.savedData.save();
            for (var e = 0, i = 0; i < n.scoreData.length; i++) e += n.levelScore[n.scoreData[i].type] * n.scoreData[i].scoring;
            e += n.stars[n.savedData.stars[n.savedData.currentLevel] - 1], n.savedData.highscore[n.savedData.currentLevel] < e && (n.savedData.highscore[n.savedData.currentLevel] = e, n.savedData.save()), n.savedData.currentLevel + 1 < 15 && n.savedData.highscore[n.savedData.currentLevel + 1] === -1 && (n.savedData.highscore[n.savedData.currentLevel + 1] = 0, n.savedData.save())
        }, s.prototype.gameOver = function(t, e) {
            if (n.levelScore.time = this.clock.value, this._gameOver = !0, this.isVictory = t, t) {
                n.play(["vo_ben_win_haaa_00", "vo_ben_woohoo_00"]), this.computeScore();
                for (var i = this._level.objectManager.getObjectsOfType("finish"), s = 0; s < i.length; s++) i[s].sparkle();
                this.candies.x = n.STAGE_WIDTH / 2, this.candies.y = n.STAGE_HEIGHT / 2, this.candies.start()
            } else n.play("vo_ben_whoa_00");
            this.dim = new u(e), this.addChild(this.dim), this.dim.start(), n.animator.setTimeout(function() {
                this.signals.requestedNextScreen.dispatch(n.savedData.currentLevel, t)
            }, 1.2, this)
        }, s.prototype.update = function() {
            n.keyboard.getKeyJustPressed(n.keyboard.KEY_Q) && (this._paused = !this._paused, this._paused ? TweenMax.pauseAll() : TweenMax.resumeAll()), this._paused || (this._level.update(), this._levelTime >= 0 && this.canStartCountdown && !this._gameOver && this.updateClock()), this.candies.isAlive && this.candies.update()
        }, s.prototype.updateClock = function() {
            this._levelTime -= p3.Timestep.deltaTime, this.clock.value = ~~this._levelTime
        }, s.prototype.resize = function() {
            o.prototype.resize.call(this), this.halfWidth = n.STAGE_WIDTH / 2, this.counter.x = Math.round((n.STAGE_WIDTH - p3.View.width) / 2) + n.GEL_OFFSET + this.counter.width / 2, this.keys && (this.keys.x = this.counter.x + this.counter.width / 2 + n.GEL_OFFSET + this.keys.width / 2), this.clock.x = n.STAGE_WIDTH / 2, this.pauseButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.pauseButton.width / 2 - n.GEL_OFFSET, this.pauseButton.y = this.pauseButton.height / 2 + n.GEL_OFFSET, this.soundButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.pauseButton.width / 2 - 2 * n.GEL_OFFSET - this.soundButton.width, this.soundButton.y = this.soundButton.height / 2 + n.GEL_OFFSET, this.alignHintContainer(), this.gateLock.x = n.STAGE_WIDTH / 2, this.gateLock.y = n.STAGE_HEIGHT / 2, this.joypad && this.joypad.resize()
        }
    }, {
        "../Common": 4,
        "../game/Level": 16,
        "../ui/Candies": 63,
        "../ui/ScreenDim": 64,
        "../ui/UIManager": 66,
        "../ui/clock/clock": 70,
        "../ui/counter/counter": 71,
        "../ui/joypad/Joypad": 72,
        "../ui/keys/keys": 73,
        "./SimpleScreen": 61
    }],
    58: [function(t, e, i) {
        function s() {
            o.call(this), this.timeline = null, this.benTo = null, this.enemiesTo = null, this.transformationEffect = null, this.brightnessFilter = new h, this.brightnessFilter.amount = 0, this.uiManager = new a
        }
        var n = t("../Common"),
            o = t("./SimpleScreen"),
            a = t("../ui/UIManager"),
            r = t("../ui/TransformationEffect"),
            h = t("../lib/BrightnessFilter");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.init = function() {
                o.prototype.init.call(this), this.drawUI()
            }, s.prototype.drawUI = function() {
                this.bg = new BP.Sprite({
                    texture: n.assetManager.getTexture("intro_" + n.chapter + "_bg"),
                    x: n.STAGE_WIDTH / 2,
                    y: n.STAGE_HEIGHT / 2,
                    anchorX: .5,
                    anchorY: .5
                }).addTo(this), this.bg.filters = [this.brightnessFilter], this.mg = new BP.Sprite({
                    texture: n.assetManager.getTexture("intro_" + n.chapter + "_mg"),
                    x: 0,
                    y: this.bg.y + this.bg.height / 2,
                    anchorX: 0,
                    anchorY: 1
                }).addTo(this), this.mg.filters = [this.brightnessFilter], this.ben = new BP.Sprite({
                    texture: n.assetManager.getTexture("intro_" + n.chapter + "_ben"),
                    x: 0,
                    y: this.bg.y + this.bg.height / 2,
                    anchorX: 1,
                    anchorY: 1
                }).addTo(this), this.enemies = new BP.Sprite({
                    texture: n.assetManager.getTexture("intro_" + n.chapter + "_enemies"),
                    x: 1900,
                    y: this.bg.y + this.bg.height / 2,
                    anchorX: 0,
                    anchorY: 1
                }).addTo(this), this.transformationEffect = new r, this.transformationEffect.x = 0, this.transformationEffect.y = 0, this.transformationEffect.alpha = .5, this.addChild(this.transformationEffect), this.continueButton = this.uiManager.addSimpleButton({
                    textures: {
                        normal: n.assetManager.getTexture("btn_primary_medium_off"),
                        over: n.assetManager.getTexture("btn_primary_medium_over"),
                        down: n.assetManager.getTexture("btn_primary_medium_off"),
                        icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                        icon_over: n.assetManager.getTexture("btn_primary_medium_icon_next_over"),
                        icon_down: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                        ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                        ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                    },
                    events: {
                        click: this.onContinueButtonClick.bind(this)
                    },
                    align: 8
                }).addTo(this)
            }, s.prototype.onContinueButtonClick = function() {
                this.signals.requestedNextScreen.dispatch()
            }, s.prototype.appear = function() {
                this.startGame()
            }, s.prototype.startGame = function() {
                this.timeline && this.timeline.kill();
                var t = [
                    [-26, -110],
                    [-40, -122],
                    [-144, -112]
                ];
                this.timeline = new TimelineMax({
                    onStart: function() {
                        this.transformationEffect.animate(), n.play("sfx_omnitrix_transform_00")
                    },
                    onStartScope: this
                }), this.timeline.to(this.mg.position, 2, {
                    x: 40,
                    ease: Cubic.easeOut
                }, "start"), this.timeline.to(this.ben.position, 2, {
                    x: this.benTo,
                    ease: Cubic.easeOut,
                    onUpdate: function() {
                        this.transformationEffect.x = this.ben.x + t[n.chapter - 1][0], this.transformationEffect.y = this.ben.y + t[n.chapter - 1][1]
                    },
                    onUpdateScope: this
                }, "start"), this.timeline.to(this.enemies.position, 2, {
                    x: this.enemiesTo,
                    ease: Cubic.easeOut
                }, "start"), this.timeline.to(this.brightnessFilter, .2, {
                    delay: .1,
                    amount: .25,
                    ease: Sine.easeInOut,
                    repeat: 1,
                    yoyo: !0
                }, "start"), this.timeline.to(this.brightnessFilter, .5, {
                    delay: .6,
                    amount: .1,
                    ease: Cubic.easeOut,
                    repeat: 1,
                    yoyo: !0
                }, "start")
            }, s.prototype.dispose = function() {
                this.timeline && this.timeline.kill(), this.bg.filters = null, o.prototype.dispose.call(this)
            }, s.prototype.update = function() {},
            s.prototype.resize = function() {
                o.prototype.resize.call(this), this.benTo = n.STAGE_WIDTH / 2 - 300, this.ben.x = this.benTo - 254, this.enemiesTo = n.STAGE_WIDTH / 2, this.enemies.x = this.enemiesTo + 88, this.continueButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.continueButton.width / 2 - n.GEL_OFFSET, this.continueButton.y = n.STAGE_HEIGHT - this.continueButton.height / 2 - n.GEL_OFFSET
            }
    }, {
        "../Common": 4,
        "../lib/BrightnessFilter": 44,
        "../ui/TransformationEffect": 65,
        "../ui/UIManager": 66,
        "./SimpleScreen": 61
    }],
    59: [function(t, e, i) {
        function s() {
            o.call(this), this.textYOffset = 40, this.textYSpacing = 76, this.ringYOffset = 40, this.ringRadius = 220, this.levelImages = [];
            for (var t = 0; t < n.aliens.length; t++) this.levelImages.push("level_" + n.aliens[t] + "_but");
            this.chapterImages = ["bg-chap1", "bg-chap2", "bg-chap3"], this.currentPage = Math.floor(n.savedData.currentLevel / n.aliens.length), this.angle = Math.PI - Math.PI / 2, this.maxStep = 2 * Math.PI / n.aliens.length, this.step = 0, this.tweens = [], this.uiManager = new a
        }
        var n = t("../Common"),
            o = t("./SimpleScreen"),
            a = t("../ui/UIManager"),
            r = t("../ui/utils"),
            h = t("../ui/ring/ring");
        t("../ui/levelButton/levelButton");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.init = function() {
            o.prototype.init.call(this), this.bgSprite = new BP.Sprite({
                texture: n.assetManager.getTexture("bg_ui", ".jpg"),
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2,
                anchorXY: .5
            }).addTo(this), this.ring = new h(n.assetManager.getTexture(this.chapterImages[this.currentPage])).applyParams({
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2 + this.ringYOffset
            }).addTo(this);
            var t = n.languages.chapter.chapter[n.gmi.language] + " " + (this.currentPage + 1).toString(),
                e = n.languages.chapter.title[n.gmi.language][this.currentPage];
            ["ru", "ar"].indexOf(n.gmi.language) !== -1 ? (this.chapterText = new PIXI.Text(t, n.webFont.Ahkio40), this.addChild(this.chapterText), this.chapterNameText = new PIXI.Text(e, n.webFont.Ahkio50), this.addChild(this.chapterNameText)) : (this.chapterText = new PIXI.extras.BitmapText("xxx", {
                font: "40px Ahkio75",
                align: "center"
            }), this.addChild(this.chapterText), this.chapterText.addToXAdvance = 4, this.chapterText.text = t, this.chapterNameText = new PIXI.extras.BitmapText("xxx", {
                font: "50px Ahkio75",
                align: "center"
            }), this.addChild(this.chapterNameText), this.chapterNameText.addToXAdvance = 4, this.chapterNameText.text = e), this.chapterText.x = Math.floor(n.STAGE_WIDTH / 2 - this.chapterText.width / 2), this.chapterText.y = Math.floor(this.textYOffset - this.chapterText.height / 2), this.chapterNameText.x = Math.floor(n.STAGE_WIDTH / 2 - this.chapterNameText.width / 2), this.chapterNameText.y = Math.floor(this.chapterText.y + this.textYSpacing - this.chapterNameText.height / 2);
            for (var i = this.levelImages.length - 1; i >= 0; i--) this["levelButton" + i] = this.uiManager.addLevelButton({
                textures: {
                    normal: n.assetManager.getTexture(this.levelImages[i]),
                    over: n.assetManager.getTexture(this.levelImages[i]),
                    down: n.assetManager.getTexture(this.levelImages[i]),
                    disabled: n.assetManager.getTexture(this.levelImages[i] + "_dis")
                },
                events: {
                    click: this.onLevelButtonClick.bind(this, i)
                },
                interactive: !1,
                alpha: 0,
                scaleXY: 0,
                align: -1,
                x: n.STAGE_WIDTH / 2 - Math.sin(this.angle) * this.ringRadius,
                y: n.STAGE_HEIGHT / 2 + Math.cos(this.angle) * this.ringRadius + this.ringYOffset
            }).addTo(this), this.angle += this.step;
            this.prepareLevelButtons(), this.drawUI()
        }, s.prototype.drawUI = function() {
            this.homeButton = this.uiManager.addSimpleButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_home_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_home_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_home_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onHomeButtonClick.bind(this)
                },
                align: 0,
                sound: "sfx_btn_back"
            }).addTo(this), this.soundButton = this.uiManager.addMuteButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_audio_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    switch_icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    switch_icon_over: n.assetManager.getTexture("btn_primary_medium_icon_mute_over"),
                    switch_icon_down: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onSoundButtonClick.bind(this)
                },
                align: 2
            }).addTo(this), this.prevButton = this.uiManager.addSimpleButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_back_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_back_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_back_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onPrevButtonClick.bind(this)
                },
                alpha: 0 === this.currentPage ? 0 : 1,
                align: 5
            }).addTo(this), this.nextButton = this.uiManager.addSimpleButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_next_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_next_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onNextButtonClick.bind(this)
                },
                alpha: this.currentPage === this.chapterImages.length - 1 ? 0 : 1,
                align: 5
            }).addTo(this)
        }, s.prototype.animateLevelButtonsIn = function(t) {
            for (var e = 2, i = 0, s = this.levelImages.length - 1; s >= 0; s--) i = .05 * (this.levelImages.length - s - 1), this.rotateLevelButton(s, e - 1.5 * i, t + i, this.angle + this.step, this.angle + this.step + s * this.maxStep + Math.PI / 2, 0, 1);
            n.animator.setTimeout(function() {
                for (var t = this.levelImages.length - 1; t >= 0; t--) this["levelButton" + t].disabled || (this["levelButton" + t].interactive = !0)
            }, e + t - .5, this)
        }, s.prototype.animateLevelButtonsOut = function(t, e) {
            this.nextButton.interactive = !1, this.prevButton.interactive = !1;
            for (var i = .15, s = this.levelImages.length - 1; s >= 0; s--) this["levelButton" + s].interactive = !1;
            for (s = 0; s < this.levelImages.length; s++) this.fadeLevelButton(s, i, t, 1, 0);
            n.animator.setTimeout(function() {
                e && e.call()
            }, i + t, this)
        }, s.prototype.rotateLevelButton = function(t, e, i, s, o, a, h) {
            var l = {
                p: s,
                s: 0,
                a: a
            };
            this.tweens.push(TweenMax.to(l, e, {
                p: o,
                s: 1,
                a: h,
                delay: i,
                ease: Elastic.easeOut,
                easeParams: [.2],
                onUpdate: function() {
                    this["levelButton" + t].x = n.STAGE_WIDTH / 2 - Math.sin(l.p) * this.ringRadius, this["levelButton" + t].y = n.STAGE_HEIGHT / 2 + Math.cos(l.p) * this.ringRadius + this.ringYOffset, this["levelButton" + t].scale.x = this["levelButton" + t].scale.y = l.s, this["levelButton" + t].alpha = r.normalize(l.a)
                },
                onUpdateScope: this
            }))
        }, s.prototype.fadeLevelButton = function(t, e, i, s, n) {
            var o = {
                a: s
            };
            this.tweens.push(TweenMax.to(o, e, {
                a: n,
                delay: i,
                ease: Linear.easeNone,
                onUpdate: function() {
                    this["levelButton" + t].alpha = r.normalize(o.a)
                },
                onUpdateScope: this
            }))
        }, s.prototype.killAllTweens = function(t) {
            for (var e, i = 0; i < this.tweens.length; i++) e = this.tweens[i], e.kill();
            this.tweens = []
        }, s.prototype.onLevelButtonClick = function(t) {
            n.savedData.currentLevel = 5 * this.currentPage + t, n.savedData.character = n.aliens[n.savedData.currentLevel % 5], n.chapter = n.getChapter(), n.alien = n.getAlien(), n.savedData.save(), this.signals.requestedNextScreen.dispatch()
        }, s.prototype.onHomeButtonClick = function() {
            this.signals.requestedPreviousScreen.dispatch()
        }, s.prototype.onSoundButtonClick = function() {}, s.prototype.setupPrevPage = function() {
            if (this.currentPage > 0) {
                this.currentPage--, 0 === this.currentPage ? this.fadeButton(this.prevButton, 1, 0) : (this.fadeButton(this.nextButton, 0, 1), this.fadeButton(this.prevButton, 0, 1)), this.changeChapterText(), this.prepareLevelButtons(), this.animateLevelButtonsIn(0);
                var t = this;
                this.ring.setChapterTexture(n.assetManager.getTexture(this.chapterImages[this.currentPage]), function() {
                    t.nextButton.interactive = !0, t.prevButton.interactive = !0
                })
            }
        }, s.prototype.setupNextPage = function() {
            if (this.currentPage < this.chapterImages.length - 1) {
                this.currentPage++, this.currentPage === this.chapterImages.length - 1 ? this.fadeButton(this.nextButton, 1, 0) : (this.fadeButton(this.nextButton, 0, 1), this.fadeButton(this.prevButton, 0, 1)), this.changeChapterText(), this.prepareLevelButtons(), this.animateLevelButtonsIn(0);
                var t = this;
                this.ring.setChapterTexture(n.assetManager.getTexture(this.chapterImages[this.currentPage]), function() {
                    t.nextButton.interactive = !0, t.prevButton.interactive = !0
                })
            }
        }, s.prototype.changeChapterText = function() {
            this.chapterText.text = n.languages.chapter.chapter[n.gmi.language] + " " + (this.currentPage + 1).toString(), this.chapterText.x = n.STAGE_WIDTH / 2 - this.chapterText.width / 2, this.chapterText.y = this.textYOffset - this.chapterText.height / 2, this.chapterNameText.text = n.languages.chapter.title[n.gmi.language][this.currentPage], this.chapterNameText.x = n.STAGE_WIDTH / 2 - this.chapterNameText.width / 2, this.chapterNameText.y = this.chapterText.y + this.textYSpacing - this.chapterNameText.height / 2
        }, s.prototype.prepareLevelButtons = function() {
            for (var t = 0; t < this.levelImages.length; t++) {
                var e = n.savedData.highscore[this.currentPage * this.levelImages.length + t];
                e > 0 ? this["levelButton" + t].setScore(e) : this["levelButton" + t].clearScore(), n.savedData.stars[this.currentPage * this.levelImages.length + t] > 0 ? this["levelButton" + t].star1Sprite.texture = n.assetManager.getTexture("star_on") : this["levelButton" + t].star1Sprite.texture = n.assetManager.getTexture("star_off"), n.savedData.stars[this.currentPage * this.levelImages.length + t] > 1 ? this["levelButton" + t].star2Sprite.texture = n.assetManager.getTexture("star_on") : this["levelButton" + t].star2Sprite.texture = n.assetManager.getTexture("star_off"), n.savedData.stars[this.currentPage * this.levelImages.length + t] > 2 ? this["levelButton" + t].star3Sprite.texture = n.assetManager.getTexture("star_on") : this["levelButton" + t].star3Sprite.texture = n.assetManager.getTexture("star_off"), e >= 0 ? this["levelButton" + t].enabled = !0 : this["levelButton" + t].enabled = !1
            }
        }, s.prototype.fadeButton = function(t, e, i) {
            if (t.alpha !== i) {
                var s = .5;
                t.alpha = e, t.interactive = !1, TweenMax.to(t, s, {
                    alpha: i,
                    ease: Linear.easeNone,
                    onComplete: function() {
                        1 === i ? t.interactive = !0 : (t.interactive = !1, t._onMouseOut())
                    },
                    onComplateScope: this
                })
            }
        }, s.prototype.onPrevButtonClick = function() {
            this.killAllTweens(), this.animateLevelButtonsOut(0, function() {
                this.setupPrevPage()
            }.bind(this))
        }, s.prototype.onNextButtonClick = function() {
            this.killAllTweens(), this.animateLevelButtonsOut(0, function() {
                this.setupNextPage()
            }.bind(this))
        }, s.prototype.appear = function() {
            this.startGame()
        }, s.prototype.startGame = function() {
            n.currentMusic !== n.menuMusic && (n.stop(n.currentMusic), n.currentMusic = n.menuMusic, n.play(n.currentMusic, {
                loop: !0
            })), this.ring.animateIn(), this.animateLevelButtonsIn(1)
        }, s.prototype.dispose = function() {
            o.prototype.dispose.call(this)
        }, s.prototype.start = function() {}, s.prototype.update = function() {}, s.prototype.resize = function() {
            o.prototype.resize.call(this), this.homeButton.x = Math.round((n.STAGE_WIDTH - p3.View.width) / 2) + this.homeButton.width / 2 + n.GEL_OFFSET, this.homeButton.y = this.homeButton.height / 2 + n.GEL_OFFSET, this.soundButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.soundButton.width / 2 - n.GEL_OFFSET, this.soundButton.y = this.soundButton.height / 2 + n.GEL_OFFSET, this.prevButton.x = Math.round((n.STAGE_WIDTH - p3.View.width) / 2) + this.prevButton.width / 2 + n.GEL_OFFSET, this.prevButton.y = n.STAGE_HEIGHT / 2 + this.ringYOffset, this.nextButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.nextButton.width / 2 - n.GEL_OFFSET, this.nextButton.y = n.STAGE_HEIGHT / 2 + this.ringYOffset
        }
    }, {
        "../Common": 4,
        "../ui/UIManager": 66,
        "../ui/levelButton/levelButton": 74,
        "../ui/ring/ring": 75,
        "../ui/utils": 76,
        "./SimpleScreen": 61
    }],
    60: [function(t, e, i) {
        function s() {
            o.call(this), this.signals.skip = new signals.Signal, this.bar = null, this.barFrame = null, this.barWidth = null, this.barOverlay = null, this._loaded = 0
        }
        var n = t("../Common"),
            o = t("./SimpleScreen");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            o.prototype.init.call(this), this.bg = new BP.Sprite({
                texture: n.assetManager.getTexture("preloader_bg"),
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2,
                anchorXY: .5
            }).addTo(this), this.bar = new BP.Sprite({
                texture: n.assetManager.getTexture("preloader_fill"),
                x: (n.STAGE_WIDTH - n.assetManager.getTexture("preloader_fill").width) / 2,
                xStart: (n.STAGE_WIDTH - n.assetManager.getTexture("preloader_fill").width) / 2,
                y: n.STAGE_HEIGHT / 2 + 210,
                anchorX: 1,
                anchorY: .5
            }).addTo(this), this.barFrame = this.bar.texture.frame, this.barWidth = this.bar.width, this.barOverlay = new BP.Sprite({
                texture: n.assetManager.getTexture("preloader_overlay"),
                x: n.STAGE_WIDTH / 2,
                y: this.bar.y,
                anchorX: .689,
                anchorY: .5
            }).addTo(this)
        }, s.prototype.dispose = function() {
            this.removeChild(this.bg), this.removeChild(this.bar), this.removeChild(this.barOverlay), this.bg.texture.destroy(!0), this.bar.texture.destroy(!0), this.bar.destroy(!0), this.barOverlay.destroy(), this.bg = null, this.barFrame = null, this.barWidth = null, o.prototype.dispose.call(this)
        }, s.prototype.resize = function() {
            this.x = Math.round((p3.View.width - n.STAGE_WIDTH) / 2)
        }, s.prototype.appear = function() {
            this.animateIn(null)
        }, s.prototype.update = function() {
            this.bar.position.x = this.bar.xStart + this._loaded / 100 * this.barWidth, this.barFrame.width = Math.floor(this._loaded * this.barWidth / 100), this.barFrame.x = this.barWidth - this.barFrame.width, this.bar.texture.frame = this.barFrame
        }, Object.defineProperty(s.prototype, "loaded", {
            get: function() {
                return this._loaded
            },
            set: function(t) {
                this._loaded = t
            }
        })
    }, {
        "../Common": 4,
        "./SimpleScreen": 61
    }],
    61: [function(t, e, i) {
        function s() {
            this.signals = {}, this.signals.requestedNextScreen = new signals.Signal, this.signals.requestedPreviousScreen = new signals.Signal, this.signals.GUIButtonClicked = new signals.Signal, this._assetManager = p3.AssetManager.instance, this._tweens = null, this._centre = null, this._guiButtonTopMargin = 100, p3.Screen.call(this)
        }
        var n = t("../Common"),
            o = t("../lib/Scene");
        e.exports = s, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this._tweens = [], this._centre = new PIXI.Point(n.STAGE_WIDTH / 2, n.STAGE_HEIGHT / 2)
        }, s.prototype.dispose = function() {
            this.signals.requestedNextScreen.dispose(), this.signals.requestedPreviousScreen.dispose();
            for (var t, e = 0; e < this._tweens.length; ++e) t = this._tweens[e], t && t.kill();
            this._tweens.length = 0, console.log("[ " + this.constructor.name + " ] disposed"), TweenMax.killAll(), n.animator.removeAll()
        }, s.prototype.resize = function() {
            this.x = .5 * (p3.View.width - n.STAGE_WIDTH)
        }, s.prototype.activate = function() {
            this.animateIn(function() {}, this)
        }, s.prototype.animateIn = function(t, e) {
            e = e || window
        }, s.prototype.animateOut = function(t, e) {
            e = e || window
        }, s.prototype.hideGUI = function() {}, s.prototype.showGUI = function() {}, s.prototype._getFirstButtonPositionRight = function() {
            return this._getBorderButtonPositionRight() - 90
        }, s.prototype._getSecondButtonPositionRight = function() {
            return this._getFirstButtonPositionRight() - 100
        }, s.prototype._getBorderButtonPositionRight = function() {
            return Math.min(Math.round(.5 * (n.STAGE_WIDTH + p3.View.width)), n.STAGE_WIDTH - 150)
        }, s.prototype._getFirstButtonPositionLeft = function() {
            return this._getBorderButtonPositionLeft() + 90
        }, s.prototype._getSecondButtonPositionLeft = function() {
            return this._getFirstButtonPositionLeft() + 100
        }, s.prototype._getBorderButtonPositionLeft = function() {
            return Math.max(Math.round(.5 * (n.STAGE_WIDTH - p3.View.width)), 150)
        }, s.prototype.onGUIButtonClicked = function(t) {
            "back" == t.id ? this.signals.requestedPreviousScreen.dispatch(t.id) : this.signals.GUIButtonClicked.dispatch(t.id)
        }, s.prototype.onButtonClickedPrevious = function(t) {}
    }, {
        "../Common": 4,
        "../lib/Scene": 49
    }],
    62: [function(t, e, i) {
        function s() {
            o.call(this), this.animTween = null, this.brightnessFilter = new r, this.brightnessFilter.amount = 0, this.uiManager = new a
        }
        var n = t("../Common"),
            o = t("./SimpleScreen"),
            a = t("../ui/UIManager"),
            r = t("../lib/BrightnessFilter");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.init = function() {
            o.prototype.init.call(this), this.bg = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash", ".jpg"),
                x: n.STAGE_WIDTH / 2,
                y: n.STAGE_HEIGHT / 2,
                anchorXY: .5
            }).addTo(this), this.bg.filters = [this.brightnessFilter], this.benLogo = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_logo"),
                x: 559,
                y: 113,
                scaleXY: 1,
                alpha: 0,
                anchorXY: .5
            }).addTo(this), this.title = new BP.Sprite({
                texture: n.assetManager.getTexture("splash_title"),
                x: n.STAGE_WIDTH / 2,
                y: 140,
                scaleXY: 1,
                alpha: 0,
                anchorXY: .5
            }).addTo(this), this.benContainer = new BP.Container({
                x: 988,
                y: 513,
                alpha: 0
            }).addTo(this), this.radialeft = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_aliens_l"),
                x: -440,
                y: -68,
                scaleXY: 1,
                alpha: 0,
                anchorXY: .5
            }).addTo(this.benContainer), this.aliensRight = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_aliens_r"),
                x: 236,
                y: -86,
                scaleXY: 1,
                alpha: 0,
                anchorXY: .5
            }).addTo(this.benContainer), this.ben = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_ben"),
                x: 0,
                y: 0,
                scaleXY: 1,
                anchorXY: .5
            }).addTo(this.benContainer), this.benRadial = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_splash_ben_radial"),
                x: 33,
                y: -91,
                anchorX: .348,
                anchorY: .422,
                scaleXY: 1,
                alpha: 0
            }).addTo(this.benContainer), this.watchPS = new cloudkid.Emitter(this, [n.assetManager.getTexture("ui_splash_ben_particle_001"), n.assetManager.getTexture("ui_splash_ben_particle_002"), n.assetManager.getTexture("ui_splash_ben_particle_003"), n.assetManager.getTexture("ui_splash_ben_particle_004")], n.assetManager.getJSON("particle_watch")), this.watchPS.emit = !1, this.watchPS.updateSpawnPos(this.benContainer.x + 30, this.benContainer.y - 100), this.drawUI()
        }, s.prototype.drawUI = function() {
            this.playButton = this.uiManager.addSimpleButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_play_off"),
                    over: n.assetManager.getTexture("btn_play_over"),
                    down: n.assetManager.getTexture("btn_play_off"),
                    icon_normal: n.assetManager.getTexture("btn_play_icon_off"),
                    icon_over: n.assetManager.getTexture("btn_play_icon_over"),
                    icon_down: n.assetManager.getTexture("btn_play_icon_off")
                },
                events: {
                    click: this.onPlayButtonClick.bind(this)
                },
                align: 4,
                sound: "sfx_btn_play_00"
            }).addTo(this), this.soundButton = this.uiManager.addMuteButton({
                textures: {
                    normal: n.assetManager.getTexture("btn_primary_medium_off"),
                    over: n.assetManager.getTexture("btn_primary_medium_over"),
                    down: n.assetManager.getTexture("btn_primary_medium_off"),
                    icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    icon_over: n.assetManager.getTexture("btn_primary_medium_icon_audio_over"),
                    icon_down: n.assetManager.getTexture("btn_primary_medium_icon_audio_off"),
                    switch_icon_normal: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    switch_icon_over: n.assetManager.getTexture("btn_primary_medium_icon_mute_over"),
                    switch_icon_down: n.assetManager.getTexture("btn_primary_medium_icon_mute_off"),
                    ring1: n.assetManager.getTexture("btn_primary_medium_off_ring_001"),
                    ring2: n.assetManager.getTexture("btn_primary_medium_off_ring_002")
                },
                events: {
                    click: this.onSoundButtonClick.bind(this)
                },
                align: 2
            }).addTo(this), this.playButton.visible = !1, this.playButton.interactive = !1, this.soundButton.visible = !1, this.soundButton.interactive = !1
        }, s.prototype.onPlayButtonClick = function() {
            this.signals.requestedNextScreen.dispatch()
        }, s.prototype.onSoundButtonClick = function() {}, s.prototype.appear = function() {
            this.startGame()
        }, s.prototype.startGame = function() {
            n.currentMusic !== n.menuMusic && (n.stop(n.currentMusic), n.currentMusic = n.menuMusic, n.play(n.currentMusic, {
                loop: !0
            })), this.animateTitle()
        }, s.prototype.enableButtons = function() {
            this.playButton.interactive = !0, this.soundButton.interactive = !0
        }, s.prototype.animateTitle = function() {
            this.title.alpha = 0, this.title.scaleXY = 1.3, this.benLogo.alpha = 0, this.benLogo.scaleXY = 1.3;
            var t = .3,
                e = .4,
                i = .3,
                s = .3,
                o = .2;
            this.animTween && this.animTween.kill(), this.animTween = new TimelineMax({}), this.animTween.to(this.title.scale, t, {
                x: 1,
                y: 1,
                ease: Back.easeOut
            }, "start"), this.animTween.to(this.title, t, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.animTween.to(this.benLogo.scale, t, {
                delay: t / 2,
                x: 1,
                y: 1,
                ease: Back.easeOut
            }, "start"), this.animTween.to(this.benLogo, t, {
                delay: t / 2,
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.animTween.from(this.benContainer.position, e, {
                delay: t / 2,
                y: 900,
                ease: Cubic.easeOut
            }, "start"), this.animTween.to(this.benContainer, e, {
                delay: t,
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.animTween.to(this.brightnessFilter, 2.1 * i, {
                amount: .08,
                ease: Sine.easeInOut,
                repeat: 1,
                yoyo: !0
            }, "radial"), this.animTween.from(this.benRadial.scale, i, {
                x: 0,
                y: 0,
                ease: Back.easeOut,
                onStart: function() {
                    n.play("vo_ben_win_haaa_00"), this.watchPS.emit = !0
                },
                onStartScope: this
            }, "radial"), this.animTween.to(this.benRadial, i, {
                alpha: 1,
                ease: Linear.easeNone
            }, "radial"), this.animTween.to(this.benRadial, 5, {
                delay: 2 * i,
                rotation: .1,
                repeat: -1,
                yoyo: !0,
                ease: Ease.easeInOut
            }, "radial"), this.animTween.from(this.radialeft.position, s, {
                delay: i / 2,
                x: 0,
                y: 0,
                ease: Cubic.easeOut
            }, "radial"), this.animTween.from(this.radialeft.scale, s, {
                delay: i / 2,
                x: 0,
                y: 0,
                ease: Cubic.easeOut
            }, "radial"), this.animTween.to(this.radialeft, s, {
                delay: i / 4,
                alpha: 1,
                ease: Linear.easeNone
            }, "radial"), this.animTween.from(this.aliensRight.position, s, {
                delay: i / 8 + .1,
                x: 0,
                y: 0,
                ease: Cubic.easeOut
            }, "radial"), this.animTween.from(this.aliensRight.scale, s, {
                delay: i / 2 + .2,
                x: 0,
                y: 0,
                ease: Cubic.easeOut
            }, "radial"), this.animTween.to(this.aliensRight, s, {
                delay: i / 2 + .2,
                alpha: 1,
                ease: Linear.easeNone
            }, "radial"), this.animTween.fromTo(this.playButton.position, o, {
                x: n.STAGE_WIDTH / 2,
                y: 900
            }, {
                delay: i + s,
                x: n.STAGE_WIDTH / 2,
                y: 592,
                ease: Cubic.easeOut,
                onStart: function() {
                    this.playButton.visible = !0
                },
                onStartScope: this,
                onComplete: function() {
                    this.enableButtons()
                },
                onCompleteScope: this
            }, "radial"), this.animTween.fromTo(this.soundButton.position, o, {
                x: Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.soundButton.width / 2 - n.GEL_OFFSET,
                y: -80
            }, {
                delay: i + s + o / 2,
                x: Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.soundButton.width / 2 - n.GEL_OFFSET,
                y: this.soundButton.height / 2 + n.GEL_OFFSET,
                ease: Cubic.easeOut,
                onStart: function() {
                    this.soundButton.visible = !0
                },
                onStartScope: this
            }, "radial")
        }, s.prototype.dispose = function() {
            this.watchPS && (this.watchPS.destroy(), this.watchPS = null), this.animTween && this.animTween.kill(), o.prototype.dispose.call(this)
        }, s.prototype.start = function() {}, s.prototype.update = function() {
            this.watchPS && this.watchPS.update(p3.Timestep.deltaTime)
        }, s.prototype.resize = function() {
            o.prototype.resize.call(this), this.playButton && (this.playButton.x = n.STAGE_WIDTH / 2, this.playButton.y = 592), this.soundButton && (this.soundButton.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.soundButton.width / 2 - n.GEL_OFFSET, this.soundButton.y = this.soundButton.height / 2 + n.GEL_OFFSET)
        }
    }, {
        "../Common": 4,
        "../lib/BrightnessFilter": 44,
        "../ui/UIManager": 66,
        "./SimpleScreen": 61
    }],
    63: [function(t, e, i) {
        function s(t, e) {
            return PIXI.Container.call(this), this._isAlive = !1, this.large = null, this.largeO = null, this.largeB = null, this.largeP = null, this.blue = null, this.purple = null, this.yellow = null, this.x = t, this.y = e, this.init(), this
        }
        var n = t("../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.randomPos = function(t) {
            var e = 0,
                i = 10,
                s = 10,
                n = t || 13;
            return e = Math.floor(BP.randomIntInterval(-s, s) + (Math.random() < .5 ? -1 : 1) * i) * n
        }, s.prototype.init = function() {
            this.large = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_large_001"), n.assetManager.getTexture("particle_firework_large_002"), n.assetManager.getTexture("particle_firework_large_003"), n.assetManager.getTexture("particle_firework_large_004")], n.assetManager.getJSON("particle_firework_large_yellow")), this.large.emit = !1, this.large.updateSpawnPos(50, 0), this.largeO = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_large_005")], n.assetManager.getJSON("particle_firework_large_orange")), this.largeO.emit = !1, this.largeO.updateSpawnPos(this.randomPos(20), this.randomPos()), this.largeB = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_large_008")], n.assetManager.getJSON("particle_firework_large_blue")), this.largeB.emit = !1, this.largeB.updateSpawnPos(this.randomPos(20), this.randomPos()), this.largeP = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_large_007")], n.assetManager.getJSON("particle_firework_large_blue")), this.largeP.emit = !1, this.largeP.updateSpawnPos(this.randomPos(20), this.randomPos()), this.blue = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_small_003"), n.assetManager.getTexture("particle_firework_small_004")], n.assetManager.getJSON("particle_firework_small_blue")), this.blue.emit = !1, this.blue.updateSpawnPos(this.randomPos(20), this.randomPos()), this.purple = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_small_005"), n.assetManager.getTexture("particle_firework_small_006")], n.assetManager.getJSON("particle_firework_small_purple")), this.purple.emit = !1, this.purple.updateSpawnPos(this.randomPos(20), this.randomPos()), this.yellow = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_firework_small_001"), n.assetManager.getTexture("particle_firework_small_002")], n.assetManager.getJSON("particle_firework_small_yellow")), this.yellow.emit = !1, this.yellow.updateSpawnPos(this.randomPos(20), this.randomPos())
        }, s.prototype.start = function() {
            this._isAlive = !0, this.large.emit = !0, this.largeO.emit = !0, this.largeB.emit = !0, this.largeP.emit = !0, this.blue.emit = !0, this.purple.emit = !0, this.yellow.emit = !0
        }, s.prototype.stop = function() {
            this._isAlive = !1, this.large.emit = !1, this.largeO.emit = !1, this.largeB.emit = !1, this.largeP.emit = !1, this.blue.emit = !1, this.purple.emit = !1, this.yellow.emit = !1
        }, s.prototype.update = function() {
            this._isAlive && (this.large.update(p3.Timestep.deltaTime), this.largeO.update(p3.Timestep.deltaTime), this.largeB.update(p3.Timestep.deltaTime), this.largeP.update(p3.Timestep.deltaTime), this.blue.update(p3.Timestep.deltaTime), this.purple.update(p3.Timestep.deltaTime), this.yellow.update(p3.Timestep.deltaTime))
        }, s.prototype.doSeppuku = function() {
            this.isAlive && this.stop(), this.large && (this.large.destroy(), this.large = null), this.largeO && (this.largeO.destroy(), this.largeO = null), this.largeB && (this.largeB.destroy(), this.largeB = null), this.largeP && (this.largeP.destroy(), this.largeP = null), this.blue && (this.blue.destroy(), this.blue = null), this.purple && (this.purple.destroy(), this.purple = null), this.yellow && (this.yellow.destroy(), this.yellow = null), this.destroy()
        }, Object.defineProperty(s.prototype, "isAlive", {
            get: function() {
                return this._isAlive
            }
        })
    }, {
        "../Common": 4
    }],
    64: [function(t, e, i) {
        function s(t) {
            PIXI.Sprite.call(this, n.generatedTextures.black), this.dimAlpha = t, this.applyParams({
                alpha: 0,
                x: 0,
                y: 0,
                width: n.STAGE_WIDTH,
                height: n.STAGE_HEIGHT
            })
        }
        var n = t("../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Sprite.prototype), s.prototype.constructor = s, s.prototype.start = function() {
            TweenMax.to(this, 1, {
                alpha: this.dimAlpha,
                ease: Linear.easeNone,
                onStart: function() {
                    this.visible = !0
                },
                onStartScope: this,
                onComplete: function() {
                    0 === this.alpha && (this.visible = !1)
                },
                onCompleteScope: this
            })
        }
    }, {
        "../Common": 4
    }],
    65: [function(t, e, i) {
        function s() {
            PIXI.Container.call(this), this._layer1 = new PIXI.Sprite(n.assetManager.getTexture("transform_001")), this._layer1.anchor = new PIXI.Point(.5, .5), this._layer1.visible = !1, this.addChild(this._layer1), this._layer2 = new PIXI.Sprite(n.assetManager.getTexture("transform_002")), this._layer2.rotation = Math.random() * (2 * Math.PI), this._layer2.anchor = new PIXI.Point(.5, .5), this._layer2.visible = !1, this.addChild(this._layer2), this._layer3 = new PIXI.Sprite(n.assetManager.getTexture("transform_003")), this._layer3.rotation = Math.random() * (2 * Math.PI), this._layer3.anchor = new PIXI.Point(.5, .5), this._layer3.visible = !1, this.addChild(this._layer3), this.on("added", this.init, this)
        }
        var n = t("../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            if (!this._emitter) {
                var t = n.assetManager.getJSON("preloader_radial_spray");
                t.scale.start = .2, t.scale.end = 1, t.lifetime.min = .42, t.lifetime.max = .68, t.emitterLifetime = .8, this._emitter = new cloudkid.Emitter(this, [n.assetManager.getTexture("particle_transform_001"), n.assetManager.getTexture("particle_transform_002"), n.assetManager.getTexture("particle_transform_003"), n.assetManager.getTexture("particle_transform_004")], t), this._emitter.emit = !0
            }
        }, s.prototype.animate = function() {
            this._layer1.scale = new PIXI.Point, this._layer1.visible = !0, TweenMax.to(this._layer1.scale, .4, {
                x: 1,
                y: 1,
                ease: Back.easeOut,
                easeParams: [4]
            }), this._layer2.scale = new PIXI.Point, this._layer2.visible = !0, TweenMax.to(this._layer2.scale, .34, {
                delay: .14,
                x: 1,
                y: 1,
                ease: Back.easeOut,
                easeParams: [2]
            }), this._layer3.scale = new PIXI.Point, this._layer3.visible = !0, TweenMax.to(this._layer3.scale, .4, {
                delay: .36,
                x: 1,
                y: 1,
                ease: Back.easeOut,
                easeParams: [3]
            }), TweenMax.to(this._layer1.scale, .4, {
                delay: .8,
                x: 0,
                y: 0,
                ease: Back.easeIn,
                easeParams: [2],
                onComplete: function() {
                    this.emit("transformDone", this)
                },
                onCompleteScope: this
            }), TweenMax.to(this._layer2, .24, {
                delay: .66,
                alpha: 0,
                ease: Power1.easeInOut
            }), TweenMax.to(this._layer2.scale, .4, {
                delay: .6,
                x: 0,
                y: 0,
                ease: Back.easeIn,
                easeParams: [2]
            }), TweenMax.to(this._layer3, .24, {
                delay: .66,
                alpha: 0,
                ease: Power1.easeInOut
            }), TweenMax.to(this._layer3.scale, .4, {
                delay: .6,
                x: 0,
                y: 0,
                ease: Back.easeIn,
                easeParams: [2],
                onComplete: function() {
                    this.emit("canTransform", this)
                },
                onCompleteScope: this
            })
        }, s.prototype.update = function() {
            this._layer2.rotation += .8 * p3.Timestep.deltaTime, this._layer3.rotation -= 2.2 * p3.Timestep.deltaTime, this._emitter && (this._emitter.updateOwnerPos(this.x, this.y), this._emitter.update(p3.Timestep.deltaTime))
        }
    }, {
        "../Common": 4
    }],
    66: [function(t, e, i) {
        function s() {
            this.borderOffsets = {
                top: 100,
                left: 100,
                right: 100,
                bottom: 100
            }, this.spacing = 100, this.delays = {
                "in": .5,
                out: 0
            }, this.buttonAnimation = {
                scale: {
                    original: 1,
                    min: .8,
                    max: 1.2
                },
                ease: {
                    "in": Back.easeOut,
                    out: Back.easeIn
                },
                delay: {
                    "in": 0,
                    out: 0
                },
                time: {
                    "in": .5,
                    out: .25,
                    inOut: .2
                },
                ring: {
                    timeIn: .6,
                    timeOut: .6,
                    rotIn: 0,
                    rotOut: Math.PI,
                    easeIn: Power1.easeInOut,
                    easeOut: Power1.easeInOut
                }
            }, this.uiElements = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ], o.call(this)
        }
        var n = t("../Common"),
            o = t("eventemitter3"),
            a = t("./button/button"),
            r = t("./levelButton/levelButton");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s, s.prototype.addSimpleButton = function(t) {
            var e = new a(t);
            return e.on("button-on-click", function() {
                t.events.click()
            }), e.on("button-on-click", this.animateButtonClick.bind(this), e), e.on("button-on-over", this.animateButtonIn.bind(this), e), e.on("button-on-out", this.animateButtonOut.bind(this), e), t.align !== -1 && this.uiElements[t.align].push(e), e
        }, s.prototype.addMuteButton = function(t) {
            function e() {
                n.savedData.isMuted ? (i.textures.icon_normal = r.normal, i.textures.icon_over = r.over, i.textures.icon_down = r.down) : (i.textures.icon_normal = o.normal, i.textures.icon_over = o.over, i.textures.icon_down = o.down), i.refresh()
            }
            var i = new a(t),
                s = this,
                o = {
                    normal: i.textures.icon_normal,
                    over: i.textures.icon_over,
                    down: i.textures.icon_down
                },
                r = {
                    normal: t.textures.switch_icon_normal,
                    over: t.textures.switch_icon_over,
                    down: t.textures.switch_icon_down
                };
            return e(), i.on("button-on-click", function() {
                n.savedData.isMuted = !n.savedData.isMuted, n.savedData.save(), n.audioManager.mute(n.savedData.isMuted), e(), t.events.click(), s.animateButtonClick(i)
            }), i.on("button-on-over", this.animateButtonIn.bind(this), i), i.on("button-on-out", this.animateButtonOut.bind(this), i), t.align !== -1 && this.uiElements[t.align].push(i), i
        }, s.prototype.addLevelButton = function(t) {
            var e = new r(t);
            return e.on("button-on-click", function() {
                    t.events.click()
                }), e.on("button-on-click", this.animateButtonClick.bind(this), e), e.on("button-on-over", this.animateButtonIn.bind(this), e),
                e.on("button-on-out", this.animateButtonOut.bind(this), e), t.align !== -1 && this.uiElements[t.align].push(e), e
        }, s.prototype.animateButtonIn = function(t) {
            n.play("sfx_btn_rollover_00"), TweenMax.to(t.scale, this.buttonAnimation.time["in"], {
                x: this.buttonAnimation.scale.max,
                y: this.buttonAnimation.scale.max,
                delay: this.buttonAnimation.delay["in"],
                ease: this.buttonAnimation.ease["in"]
            }), void 0 !== t.ring1 && void 0 !== t.ring2 && (TweenMax.killTweensOf(t.ring1), TweenMax.to(t.ring1, this.buttonAnimation.ring.timeIn, {
                rotation: this.buttonAnimation.ring.rotOut,
                delay: this.buttonAnimation.delay["in"],
                ease: this.buttonAnimation.ring.easeIn
            }), TweenMax.killTweensOf(t.ring2), TweenMax.to(t.ring2, this.buttonAnimation.ring.timeIn, {
                rotation: -this.buttonAnimation.ring.rotOut / 2,
                delay: this.buttonAnimation.delay["in"],
                ease: this.buttonAnimation.ring.easeIn
            }))
        }, s.prototype.animateButtonOut = function(t) {
            TweenMax.to(t.scale, this.buttonAnimation.time.out, {
                x: this.buttonAnimation.scale.original,
                y: this.buttonAnimation.scale.original,
                delay: this.buttonAnimation.delay.out,
                ease: this.buttonAnimation.ease.out
            }), void 0 !== t.ring1 && void 0 !== t.ring2 && (TweenMax.killTweensOf(t.ring1), TweenMax.to(t.ring1, this.buttonAnimation.ring.timeOut, {
                rotation: this.buttonAnimation.ring.rotIn,
                delay: this.buttonAnimation.delay.out,
                ease: this.buttonAnimation.ring.easeOut
            }), TweenMax.killTweensOf(t.ring2), TweenMax.to(t.ring2, this.buttonAnimation.ring.timeOut, {
                rotation: -this.buttonAnimation.ring.rotIn,
                delay: this.buttonAnimation.delay.out,
                ease: this.buttonAnimation.ring.easeOut
            }))
        }, s.prototype.animateButtonClick = function(t) {
            t.sound ? n.play(t.sound) : n.play("sfx_btn_press_00");
            var e = new TimelineMax;
            e.to(t.scale, this.buttonAnimation.time.inOut, {
                x: p3.Device.isMobile ? this.buttonAnimation.scale.min : this.buttonAnimation.scale.original,
                y: p3.Device.isMobile ? this.buttonAnimation.scale.min : this.buttonAnimation.scale.original,
                delay: this.buttonAnimation.delay.out,
                ease: this.buttonAnimation.ease.out
            }), e.to(t.scale, this.buttonAnimation.time.inOut, {
                x: p3.Device.isMobile ? this.buttonAnimation.scale.original : this.buttonAnimation.scale.max,
                y: p3.Device.isMobile ? this.buttonAnimation.scale.original : this.buttonAnimation.scale.max,
                delay: this.buttonAnimation.delay["in"],
                ease: this.buttonAnimation.ease["in"]
            })
        }, s.prototype.align = function() {}, s.prototype.addTo = function(t) {
            return t.addChild(this), this
        }, s.prototype.show = function() {
            this.showElements(!0), this.emit("resume", this)
        }, s.prototype.hide = function(t, e, i) {
            this.showElements(!1), this.emit("pause", this), void 0 !== e ? t.call(e) : t.call()
        }, s.prototype.showElements = function(t) {
            for (var e = 0; e < this.uiElements.length; e++)
                for (var i = 0; i < this.uiElements[e].length; i++) this.uiElements[e][i].scale.x = this.buttonAnimation.scale.original, this.uiElements[e][i].scale.y = this.buttonAnimation.scale.original, this.uiElements[e][i].visible = t
        }, s.prototype.dispose = function() {
            for (var t = 0; t < this.uiElements.length; t++)
                for (var e = 0; e < this.uiElements[t].length; e++) this.uiElements[t][e].dispose();
            this.uiElements = []
        }
    }, {
        "../Common": 4,
        "./button/button": 69,
        "./levelButton/levelButton": 74,
        eventemitter3: 2
    }],
    67: [function(t, e, i) {
        var s = {
            textures: {
                normal: null,
                over: null,
                down: null,
                disabled: null,
                icon: null
            },
            events: {
                down: null,
                up: null,
                upOutside: null,
                over: null,
                out: null
            },
            interactive: !0,
            buttonMode: !0,
            disabled: !1,
            x: 0,
            y: 0,
            alpha: 1,
            visible: !0,
            scaleX: 1,
            scaleY: 1,
            anchorX: .5,
            anchorY: .5,
            sound: null
        };
        e.exports = s
    }, {}],
    68: [function(t, e, i) {
        var s = {
            CLICK: "button-on-click",
            DOWN: "button-on-down",
            UP: "button-on-up",
            UPOUTSIDE: "button-on-upOutside",
            OVER: "button-on-over",
            OUT: "button-on-out"
        };
        e.exports = s
    }, {}],
    69: [function(t, e, i) {
        var s = t("../utils"),
            n = t("./button-defaults"),
            o = t("./button-events");
        Button = function(t) {
            t = s.mergeParams(n, t), void 0 !== t.textures.normal && null !== t.textures.normal || console.error(this.constructor.name + ": normal texture is needed !"), this.textures = t.textures, PIXI.Sprite.call(this, this.textures.normal), this.anchor.x = t.anchorX, this.anchor.y = t.anchorY, this.alpha = t.alpha, this.scale.x = t.scaleX, this.scale.y = t.scaleY, this.x = t.x, this.y = t.y, this.sound = t.sound, this.visible = t.visible, this.interactive = t.interactive, this.buttonMode = t.buttonMode, void 0 !== this.textures.ring1 && (this.ring1 = new PIXI.Sprite(this.textures.ring1), this.ring1.anchor.set(.5, .5), this.addChild(this.ring1)), void 0 !== this.textures.ring2 && (this.ring2 = new PIXI.Sprite(this.textures.ring2), this.ring2.anchor.set(.5, .5), this.addChild(this.ring2)), void 0 !== this.textures.icon_normal && (this.icon = new PIXI.Sprite(this.textures.icon_normal), this.icon.anchor.set(.5, .5), this.addChild(this.icon)), t.disabled && void 0 !== this.textures.disabled ? this.disabled = t.disabled : this.disabled = !1, this.disabled && void 0 !== this.textures.disabled && (this.texture = this.textures.disabled, this.textures.icon_disabled && (this.icon.texture = this.textures.icon_disabled)), this.on("mouseover", this._onMouseOver), this.on("mouseout", this._onMouseOut), this.on("mouseupoutside", this._onMouseEndOutside), this.on("touchendoutside", this._onMouseEndOutside), this.on("mousedown", this._onMouseDown), this.on("touchstart", this._onMouseDown), this.on("mouseup", this._onMouseUp), this.on("touchend", this._onMouseUp), this._isDown = !1, this._state = "normal"
        }, Button.prototype = Object.create(PIXI.Sprite.prototype), Button.prototype.constructor = Button, Button.prototype.normal = function() {
            this.texture = this.textures.normal, this.textures.icon_normal && (this.icon.texture = this.textures.icon_normal), this._state = "normal"
        }, Button.prototype.hover = function() {
            void 0 !== this.textures.over && (this.texture = this.textures.over, this.textures.icon_over && (this.icon.texture = this.textures.icon_over), this._state = "hover")
        }, Button.prototype.pressed = function() {
            void 0 !== this.textures.down && (this.texture = this.textures.down, this.textures.icon_down && (this.icon.texture = this.textures.icon_down), this._state = "pressed")
        }, Button.prototype.enable = function() {
            this.disabled = !1, this.normal()
        }, Button.prototype.disable = function() {
            void 0 !== this.textures.disabled && (this.disabled = !0, this.texture = this.textures.disabled, this.textures.icon_disabled && (this.icon.texture = this.textures.icon_disabled))
        }, Button.prototype._onMouseOver = function() {
            this.disabled || (this.hover(), this.emit(o.OVER, this))
        }, Button.prototype._onMouseOut = function() {
            this.disabled || (this.normal(), this.emit(o.OUT, this))
        }, Button.prototype._onMouseDown = function() {
            this.disabled || (this._isDown = !0, this.pressed(), this.emit(o.DOWN, this))
        }, Button.prototype._onMouseUp = function() {
            this.disabled || (this.normal(), this.emit(o.UP, this), this._isDown && this.emit(o.CLICK, this), this._isDown = !1)
        }, Button.prototype._onMouseEndOutside = function() {
            this.disabled || (this._isDown = !1, this.normal(), this.emit(o.UPOUTSIDE, this))
        }, Button.prototype.refresh = function() {
            switch (this._state) {
                case "normal":
                    this.normal();
                    break;
                case "hover":
                    this.hover();
                    break;
                case "pressed":
                    this.pressed()
            }
        }, Button.prototype.dispose = function() {
            this.off("mouseover", this._onMouseOver, this), this.off("mouseout", this._onMouseOut, this), this.off("mouseupoutside", this._onMouseEndOutside, this), this.off("touchendoutside", this._onMouseEndOutside, this), this.off("mousedown", this._onMouseDown, this), this.off("touchstart", this._onMouseDown, this), this.off("mouseup", this._onMouseUp, this), this.off("touchend", this._onMouseUp, this)
        }, e.exports = Button
    }, {
        "../utils": 76,
        "./button-defaults": 67,
        "./button-events": 68
    }],
    70: [function(t, e, i) {
        function s(t) {
            return PIXI.Container.call(this), this.seconds = t, this.targetScale = .25, this.topOffset = 314, this.animTween = null, this.maxP = 10, this.particles = [], this.firstTime = !0, this.textOffset = {
                x: 10,
                y: -5
            }, this.init(), this
        }
        var n = t("../../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.bg = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_time"),
                anchorXY: .5,
                x: 0,
                y: 0
            }).addTo(this), this.clockContainer = new BP.Container({
                x: 0,
                y: this.bg.y + this.topOffset,
                scaleXY: 0,
                alpha: 0
            }).addTo(this);
            for (var t = n.assetManager.getTexture("particle_ui_time").width / 2.5, e = n.assetManager.getTexture("ui_time_clock").width / 2, i = 0, s = 2 * Math.PI / this.maxP, o = 0; o < this.maxP; o++) {
                var a = new BP.Sprite({
                    texture: n.assetManager.getTexture("particle_ui_time"),
                    x: Math.floor(1.7 * e * Math.cos(i) + BP.randomInterval(-t, t)),
                    y: Math.floor(1.7 * e * Math.sin(i) + BP.randomInterval(-t, t)),
                    scaleXY: BP.randomInterval(.5, 1),
                    alpha: 0,
                    anchorXY: .5
                }).addTo(this.clockContainer);
                i += s, this.particles.push(a)
            }
            this.clockFace = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_time_clock"),
                anchorXY: .5
            }).addTo(this.clockContainer), this.clockHand = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_time_hand"),
                anchorXY: .5
            }).addTo(this.clockContainer), this.textSprite = new PIXI.extras.BitmapText(this.convertTime(), {
                font: "26px Ahkio26",
                align: "center"
            }), this.addChild(this.textSprite), this.textSprite.addToXAdvance = 2, this.alignText()
        }, s.prototype.animate = function() {
            this.animTween && this.animTween.kill(), this.animTween = new TimelineMax({
                onComplete: function() {
                    this.popIn()
                },
                onCompleteScope: this
            }), this.animTween.to(this.clockContainer, .1, {
                alpha: 1,
                ease: Linear.easeNone
            }, "start"), this.animTween.to(this.clockContainer.scale, .3, {
                x: 1,
                y: 1,
                ease: Back.easeOut
            }, "start")
        }, s.prototype.popIn = function() {
            this.animTween && this.animTween.kill(), this.animTween = new TimelineMax({
                onComplete: function() {
                    this.scatter()
                },
                onCompleteScope: this
            });
            for (var t = 0; t < this.maxP; t++) {
                var e = BP.randomInterval(.2, 1.2);
                this.animTween.to(this.particles[t], .1, {
                    delay: e,
                    alpha: 1,
                    ease: Linear.easeNone
                }, "start"), this.animTween.from(this.particles[t].scale, .1, {
                    delay: e,
                    x: 0,
                    y: 0,
                    ease: Back.easeOut
                }, "start")
            }
        }, s.prototype.scatter = function() {
            this.animTween && this.animTween.kill(), this.animTween = new TimelineMax({
                onComplete: function() {
                    this.shrink()
                },
                onCompleteScope: this
            });
            var t = 1.5;
            this.animTween.to(this.clockHand, t, {
                rotation: -2 * Math.PI,
                ease: Cubic.easeOut
            }, "start");
            for (var e = 200, i = 0; i < this.maxP; i++) {
                var s = Math.sqrt(this.particles[i].x * this.particles[i].x + this.particles[i].y * this.particles[i].y);
                this.animTween.to(this.particles[i].position, s / e, {
                    x: 3 * this.particles[i].x,
                    y: 3 * this.particles[i].y,
                    ease: Back.easeIn
                }, "start"), this.animTween.to(this.particles[i], s / e / 3, {
                    delay: s / e / 3 * 2.2,
                    alpha: 0,
                    ease: Linear.easeNone
                }, "start")
            }
        }, s.prototype.shrink = function() {
            this.animTween && this.animTween.kill();
            for (var t = 0; t < this.maxP; t++) this.particles[t].visible = !1;
            this.animTween = new TimelineMax({
                onComplete: function() {
                    this.clockContainer.scaleXY = 1, this.clockFace.texture = n.assetManager.getTexture("ui_time_clock_small"), this.clockFace.scaleXY = 1, this.clockHand.visible = !1, this.onAnimComplete()
                },
                onCompleteScope: this
            });
            var e = .3;
            this.animTween.to(this.clockContainer.scale, e, {
                x: this.targetScale,
                y: this.targetScale,
                ease: Cubic.easeOut
            }, "start"), this.animTween.to(this.clockContainer.position, e, {
                x: this.bg.x - this.bg.width / 2,
                y: this.bg.y,
                ease: Cubic.easeIn
            }, "start")
        }, s.prototype.onAnimComplete = function() {
            this.parent.onClockAnimComplete && this.parent.onClockAnimComplete()
        }, s.prototype.alignText = function() {
            this.textSprite.x = Math.floor(-this.textSprite.width / 2 + this.textOffset.x), this.textSprite.y = Math.floor(-this.textSprite.height / 2 + this.textOffset.y)
        }, s.prototype.convertTime = function() {
            var t = "",
                e = Math.floor(this.seconds / 60),
                i = this.seconds % 60;
            return t += e < 10 ? "0" : "", t += e + ":" + (i < 10 ? "0" : "") + i
        }, s.prototype.changeValue = function() {
            this.textSprite.text = this.convertTime(), this.alignText(), 5 === this.seconds && this.firstTime && (n.play("sfx_timer_warning_00"), this.pulse(), this.firstTime = !1)
        }, s.prototype.pulse = function() {
            this.animTween && this.animTween.kill(), this.animTween = new TimelineMax({
                onComplete: function() {
                    this.scaleXY = 1
                },
                onCompleteScope: this
            }), this.animTween.to(this.scale, .5, {
                x: 1.1,
                y: 1.1,
                ease: Sine.easeInOut,
                repeat: 9,
                yoyo: !0
            }, "start")
        }, s.prototype.doSeppuku = function() {
            TweenMax.killTweensOf(this.bg), this.removeChild(this.bg), this.removeChild(this.textSprite), this.bg.destroy(), this.textSprite.destroy(), this.bg = null, this.textSprite = null, this.destroy()
        }, Object.defineProperty(s.prototype, "value", {
            get: function() {
                return this.seconds
            },
            set: function(t) {
                this.seconds !== t && (this.seconds = t, this.changeValue(), this.seconds > 5 && (this.firstTime = !0, n.stop("sfx_timer_warning_00"), this.animTween && this.animTween.kill(), this.animTween = new TimelineMax({
                    onComplete: function() {
                        this.scaleXY = 1
                    },
                    onCompleteScope: this
                }), this.animTween.to(this.scale, .2, {
                    x: 1,
                    y: 1,
                    ease: Sine.easeOut
                }, "start")), 0 === this.seconds && this.parent.signals.requestOutOfTime.dispatch())
            }
        })
    }, {
        "../../Common": 4
    }],
    71: [function(t, e, i) {
        function s(t) {
            return PIXI.Container.call(this), this.collected = 0, this.total = t || 0, this.textOffset = {
                x: 17,
                y: -5
            }, this.init(), this
        }
        var n = t("../../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.bg = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_collectables"),
                anchorXY: .5,
                x: 0,
                y: 0
            }).addTo(this), this.textSprite = new PIXI.extras.BitmapText(this.getCounts(), {
                font: "26px Ahkio26",
                align: "center"
            }), this.addChild(this.textSprite), this.textSprite.addToXAdvance = 2, this.alignText()
        }, s.prototype.alignText = function() {
            this.textSprite.x = Math.floor(-this.textSprite.width / 2 + this.textOffset.x), this.textSprite.y = Math.floor(-this.textSprite.height / 2 + this.textOffset.y)
        }, s.prototype.getCounts = function() {
            return "" + this.collected + "/" + this.total
        }, s.prototype.setTotal = function(t) {
            this.total = t
        }, s.prototype.updateValue = function() {
            this.textSprite.text = this.getCounts(), this.alignText()
        }, s.prototype.doSeppuku = function() {
            TweenMax.killTweensOf(this.bg), this.removeChild(this.bg), this.removeChild(this.textSprite), this.bg.destroy(), this.textSprite.destroy(), this.bg = null, this.textSprite = null, this.destroy()
        }, Object.defineProperty(s.prototype, "value", {
            get: function() {
                return this.collected
            },
            set: function(t) {
                this.collected = t, this.updateValue()
            }
        })
    }, {
        "../../Common": 4
    }],
    72: [function(t, e, i) {
        function s() {
            return PIXI.Container.call(this), this.fadeTween = null, this.padTween = null, this.minLength = 30, this.angle = null, this.direction = null, this.padRadius = 80, this.keyMap = {
                N: [n.keyboard.KEY_UP],
                NE: [n.keyboard.KEY_UP, n.keyboard.KEY_RIGHT],
                E: [n.keyboard.KEY_RIGHT],
                SE: [n.keyboard.KEY_RIGHT, n.keyboard.KEY_DOWN],
                S: [n.keyboard.KEY_DOWN],
                SW: [n.keyboard.KEY_LEFT, n.keyboard.KEY_DOWN],
                W: [n.keyboard.KEY_LEFT],
                NW: [n.keyboard.KEY_LEFT, n.keyboard.KEY_UP]
            }, this.touchDown = new PIXI.Point(0, 0), this.touchMove = new PIXI.Point(0, 0), this.init(), this
        }
        var n = t("../../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.interactive = !0, this.hitArea = new PIXI.Rectangle(0, 0, n.STAGE_WIDTH, n.STAGE_HEIGHT), this.on("touchstart", this.onInputDown.bind(this)), this.on("touchend", this.onInputUp.bind(this)), this.on("touchendoutside", this.onInputUp.bind(this)), this.on("touchmove", this.onInputMove.bind(this)), this.padContainer = new BP.Container({
                alpha: 1
            }).addTo(this), this.bg = new BP.Sprite({
                texture: n.assetManager.getTexture("btn_joystick_pad"),
                anchorXY: .5,
                x: 0,
                y: 0
            }).addTo(this.padContainer), this.stick = new BP.Sprite({
                texture: n.assetManager.getTexture("btn_joystick_stick"),
                anchorXY: .5,
                x: 0,
                y: 0
            }).addTo(this.padContainer), this.button = new BP.Sprite({
                texture: n.assetManager.getTexture("btn_shoot"),
                anchorXY: .5,
                x: 0,
                y: 0,
                interactive: !0
            }).addTo(this), this.button.on("touchstart", this.onButtonDown.bind(this)), this.button.on("touchend", this.onButtonUp.bind(this)), this.button.on("touchendoutside", this.onButtonUp.bind(this))
        }, s.prototype.onButtonDown = function(t) {
            t.stopPropagation(), n.keyboard.setKeyJustPressed(n.keyboard.KEY_Z)
        }, s.prototype.onButtonUp = function(t) {
            t.stopPropagation(), n.keyboard.setKeyJustReleased(n.keyboard.KEY_Z)
        }, s.prototype.fadePad = function(t, e, i) {
            this.fadeTween && this.fadeTween.kill(), this.fadeTween = TweenMax.to(this.padContainer, e, {
                delay: i,
                alpha: t,
                ease: Linear.easeNone
            })
        }, s.prototype.clear = function() {
            n.keyboard.setKeyJustReleased(n.keyboard.KEY_UP), n.keyboard.setKeyJustReleased(n.keyboard.KEY_RIGHT), n.keyboard.setKeyJustReleased(n.keyboard.KEY_DOWN), n.keyboard.setKeyJustReleased(n.keyboard.KEY_LEFT)
        }, s.prototype.onInputDown = function(t) {
            this.touchDown.x = t.data.getLocalPosition(this).x, this.touchDown.y = t.data.getLocalPosition(this).y, this.padContainer.position = this.touchDown, this.fadePad(1, .1, 0)
        }, s.prototype.onInputUp = function() {
            this.stick.x = 0, this.stick.y = 0, this.fadePad(0, .3, .5), this.clear()
        }, s.prototype.getAngle = function(t, e) {
            var i = t.x - e.x,
                s = t.y - e.y,
                n = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2)));
            if (n < this.minLength) return null;
            var o = Math.atan2(s, i);
            return o < 0 && (o = 6.28319 - Math.abs(o)), o
        }, s.prototype.getDirection = function(t) {
            return t <= .3926991 && t >= 0 ? "W" : t <= 6.28319 && t >= 5.8904862 ? "W" : t >= 2.7488936 && t <= 3.5342917 ? "E" : t >= 1.178097 && t <= 1.9634954 ? "N" : t >= 4.3196899 && t <= 5.1050881 ? "S" : t > 5.1050881 && t < 5.8904862 ? "SW" : t > 3.5342917 && t < 4.3196899 ? "SE" : t > .3926991 && t < 1.178097 ? "NW" : t > 1.9634954 && t < 2.7488936 ? "NE" : void 0
        }, s.prototype.onInputMove = function(t) {
            if (this.clear(), this.touchMove.x = t.data.getLocalPosition(this).x, this.touchMove.y = t.data.getLocalPosition(this).y, this.angle = this.getAngle(this.touchDown, this.touchMove), this.stick.x = this.padRadius * Math.cos(this.angle - Math.PI), this.stick.y = this.padRadius * Math.sin(this.angle - Math.PI), null === this.angle) return this.stick.x = 0, void(this.stick.y = 0);
            this.direction = this.getDirection(this.angle);
            for (var e = 0; e < this.keyMap[this.direction].length; e++) n.keyboard.setKeyJustPressed(this.keyMap[this.direction][e])
        }, s.prototype.doSeppuku = function() {
            this.off("touchstart", this.onInputDown.bind(this)), this.off("touchend", this.onInputUp.bind(this)), this.off("touchendoutside", this.onInputUp.bind(this)), this.off("touchmove", this.onInputMove.bind(this)), this.button.off("touchstart", this.onButtonDown.bind(this)), this.button.off("touchend", this.onButtonUp.bind(this)), this.button.off("touchendoutside", this.onButtonUp.bind(this)), this.destroy()
        }, s.prototype.resize = function() {
            this.padContainer.x = Math.round((n.STAGE_WIDTH - p3.View.width) / 2) + this.padContainer.width / 2 + n.GEL_OFFSET, this.padContainer.y = n.STAGE_HEIGHT - this.padContainer.height / 2 - n.GEL_OFFSET, this.button.x = Math.round((n.STAGE_WIDTH + p3.View.width) / 2) - this.button.width / 2 - n.GEL_OFFSET, this.button.y = n.STAGE_HEIGHT - this.button.height / 2 - n.GEL_OFFSET, this.hitArea.width = n.STAGE_WIDTH, this.hitArea.height = n.STAGE_HEIGHT
        }
    }, {
        "../../Common": 4
    }],
    73: [function(t, e, i) {
        function s() {
            return PIXI.Container.call(this), this.spacing = 34, this.init(), this
        }
        var n = t("../../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this.bg = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_keys_pannel"),
                anchorXY: .5,
                x: 0,
                y: 0
            }).addTo(this), this.greenKey = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_keys_green_" + (n.ownedKeys.green ? "on" : "off")),
                anchorXY: .5,
                x: this.bg.x - this.spacing,
                y: this.bg.y
            }).addTo(this), this.blueKey = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_keys_blue_" + (n.ownedKeys.blue ? "on" : "off")),
                anchorXY: .5,
                x: this.bg.x,
                y: this.bg.y
            }).addTo(this), this.redKey = new BP.Sprite({
                texture: n.assetManager.getTexture("ui_keys_red_" + (n.ownedKeys.red ? "on" : "off")),
                anchorXY: .5,
                x: this.bg.x + this.spacing,
                y: this.bg.y
            }).addTo(this)
        }, s.prototype.updateKey = function(t) {
            var e = !1;
            n.ownedKeys[t] ? (this[t + "Key"].texture = n.assetManager.getTexture("ui_keys_" + t + "_on"), e = !0) : this[t + "Key"].texture = n.assetManager.getTexture("ui_keys_" + t + "_off"), e && TweenMax.to(this[t + "Key"].scale, .5, {
                x: 1.2,
                y: 1.2,
                ease: Sine.easeInOut,
                repeat: 3,
                yoyo: !0
            })
        }, Object.defineProperty(s.prototype, "green", {
            get: function() {
                return n.ownedKeys.green
            },
            set: function(t) {
                n.ownedKeys.green = t, this.updateKey("green")
            }
        }), Object.defineProperty(s.prototype, "blue", {
            get: function() {
                return n.ownedKeys.blue
            },
            set: function(t) {
                n.ownedKeys.blue = t, this.updateKey("blue")
            }
        }), Object.defineProperty(s.prototype, "red", {
            get: function() {
                return n.ownedKeys.red
            },
            set: function(t) {
                n.ownedKeys.red = t, this.updateKey("red")
            }
        })
    }, {
        "../../Common": 4
    }],
    74: [function(t, e, i) {
        var s = t("../../Common"),
            n = t("../utils"),
            o = t("../button/button"),
            a = t("../button/button-defaults");
        LevelButton = function(t) {
            t = n.mergeParams(a, t), o.call(this, t), this.lockSprite = new BP.Sprite({
                texture: s.assetManager.getTexture("lock"),
                x: 0,
                y: 20,
                anchorXY: .5
            }).addTo(this), this.star1Sprite = new BP.Sprite({
                texture: s.assetManager.getTexture("star_off"),
                x: -50,
                y: 86,
                anchorXY: .5
            }).addTo(this), this.star2Sprite = new BP.Sprite({
                texture: s.assetManager.getTexture("star_off"),
                x: 0,
                y: 104,
                anchorXY: .5
            }).addTo(this), this.star3Sprite = new BP.Sprite({
                texture: s.assetManager.getTexture("star_off"),
                x: 50,
                y: 86,
                anchorXY: .5
            }).addTo(this), this.alpha = 0, this.levelScore = new PIXI.extras.BitmapText("", {
                font: "50px Ahkio75",
                align: "center"
            }), this.addChild(this.levelScore), this.levelScore.addToXAdvance = 1, this.alignScore()
        }, LevelButton.prototype = Object.create(o.prototype), LevelButton.prototype.constructor = LevelButton, e.exports = LevelButton, LevelButton.prototype.setScore = function(t) {
            this.levelScore.text = this.numberWithCommas(t), this.alignScore()
        }, LevelButton.prototype.clearScore = function() {
            this.levelScore.text = "", this.alignScore()
        }, LevelButton.prototype.alignScore = function() {
            this.levelScore.x = -Math.floor(this.levelScore.width / 2) + Math.floor(this.levelScore.text.length * this.levelScore.addToXAdvance / 2), this.levelScore.y = 10
        }, LevelButton.prototype.dispose = function() {
            this.dispose()
        }, LevelButton.prototype.numberWithCommas = function(t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }, Object.defineProperty(LevelButton.prototype, "enabled", {
            get: function() {
                return !this.disabled
            },
            set: function(t) {
                t ? (this.enable(), this.star1Sprite.visible = !0, this.star2Sprite.visible = !0, this.star3Sprite.visible = !0, this.lockSprite.visible = !1, this.alignScore(), this.levelScore.visible = !0) : (this.disable(), this.star1Sprite.visible = !1, this.star2Sprite.visible = !1, this.star3Sprite.visible = !1, this.lockSprite.visible = !0, this.levelScore.visible = !1)
            }
        })
    }, {
        "../../Common": 4,
        "../button/button": 69,
        "../button/button-defaults": 67,
        "../utils": 76
    }],
    75: [function(t, e, i) {
        function s(t) {
            return PIXI.Container.call(this), this.chapterTexture = t || PIXI.Texture.EMPTY, this.tweens = [], this.init(), this
        }
        var n = t("../../Common");
        e.exports = s, s.prototype = Object.create(PIXI.Container.prototype), s.prototype.constructor = s, s.prototype.init = function() {
            this._spinnerRing = new BP.Sprite({
                texture: n.assetManager.getTexture("game_panel_003"),
                anchorXY: .5,
                scaleXY: 0,
                visible: !1
            }).addTo(this), this._spinnerOuter = new BP.Sprite({
                texture: n.assetManager.getTexture("game_panel_002"),
                anchorXY: .5,
                scaleXY: 0,
                visible: !1
            }).addTo(this), this._spinnerInner = new BP.Sprite({
                texture: n.assetManager.getTexture("game_panel_001"),
                anchorXY: .5,
                scaleXY: 0,
                visible: !1
            }).addTo(this), this.chapterTexture && (this.chapterSprite = new BP.Sprite({
                texture: this.chapterTexture,
                anchorXY: .5,
                alpha: 0,
                visible: !1
            }).addTo(this))
        }, s.prototype.animateIn = function(t, e) {
            this._spinnerRing.visible = !0, this.tweens.push(TweenMax.to(this._spinnerRing.scale, .4, {
                x: 1,
                y: 1,
                ease: Power2.easeOut,
                easeParams: [2]
            })), this._spinnerInner.visible = !0, this.tweens.push(TweenMax.to(this._spinnerInner.scale, .4, {
                delay: .06,
                x: 1,
                y: 1,
                ease: Power2.easeOut,
                easeParams: [2]
            })), this._spinnerOuter.visible = !0, this.tweens.push(TweenMax.to(this._spinnerOuter.scale, .46, {
                delay: .08,
                x: 1,
                y: 1,
                ease: Back.easeOut,
                easeParams: [4],
                onComplete: function() {
                    t && e && t.call(e)
                }
            })), this.chapterSprite && (this.chapterSprite.visible = !0, this.tweens.push(TweenMax.to(this.chapterSprite, .46, {
                delay: .3,
                alpha: 1,
                ease: Linear.easeNone
            }))), this.tweens.push(TweenMax.to(this._spinnerRing, 8, {
                delay: .2,
                rotation: 4 * Math.PI,
                ease: Power1.easeInOut,
                yoyo: !0,
                repeat: -1
            })), this.tweens.push(TweenMax.to(this._spinnerInner, 10, {
                delay: .22,
                rotation: 2 * Math.PI,
                ease: Power1.easeInOut,
                yoyo: !0,
                repeat: -1
            })), this.tweens.push(TweenMax.to(this._spinnerOuter, 6, {
                delay: .24,
                rotation: 4 * -Math.PI,
                ease: Power1.easeInOut,
                yoyo: !0,
                repeat: -1
            }))
        }, s.prototype.setChapterTexture = function(t, e) {
            this.chapterTexture = t, this.chapterSprite || (this.chapterSprite = new BP.Sprite({
                texture: this.chapterTexture,
                anchorXY: .5,
                alpha: 0,
                visible: !1
            }).addTo(this)), this.zoomIn(e)
        }, s.prototype.zoomIn = function(t) {
            this.chapterSprite && (this.chapterSprite.scale.x = this.chapterSprite.scale.y = 1, this.tweens.push(TweenMax.to(this.chapterSprite.scale, .3, {
                x: 1.1,
                y: 1.1,
                ease: Linear.easeNone,
                repeat: 1,
                yoyo: !0
            })), this.chapterSprite.alpha = 1, this.tweens.push(TweenMax.to(this.chapterSprite, .3, {
                alpha: 0,
                ease: Linear.easeNone,
                repeat: 1,
                yoyo: !0,
                onRepeat: function() {
                    this.chapterSprite.texture = this.chapterTexture
                },
                onRepeatScope: this
            }))), this._spinnerOuter.scale.x = this._spinnerOuter.scale.y = 1, this.tweens.push(TweenMax.to(this._spinnerOuter.scale, .2, {
                x: 1.1,
                y: 1.1,
                ease: Cubic.easeOut,
                repeat: 1,
                yoyo: !0
            })), this._spinnerInner.scale.x = this._spinnerInner.scale.y = 1, this.tweens.push(TweenMax.to(this._spinnerInner.scale, .2, {
                delay: .06,
                x: 1.1,
                y: 1.1,
                ease: Cubic.easeOut,
                repeat: 1,
                yoyo: !0
            })), this._spinnerRing.scale.x = this._spinnerRing.scale.y = 1, this.tweens.push(TweenMax.to(this._spinnerRing.scale, .2, {
                delay: .08,
                x: 1.1,
                y: 1.1,
                ease: Cubic.easeOut,
                repeat: 1,
                yoyo: !0,
                onComplete: function() {
                    t && t.call()
                },
                onCompleteScope: this
            }))
        }, s.prototype.killAllTweens = function() {
            for (var t, e = 0; e < this.tweens.length; e++) t = this.tweens[e], t.kill();
            this.tweens = []
        }, s.prototype.doSeppuku = function() {
            this.killAllTweens()
        }
    }, {
        "../../Common": 4
    }],
    76: [function(t, e, i) {
        e.exports = {
            mergeParams: function(t, e) {
                var i = this.clone(t);
                for (var s in i)
                    for (var n in e) s === n && null !== e[n] && (i[s] = e[n]);
                return i
            },
            clone: function(t) {
                if (null === t || "object" != typeof t) return t;
                var e = t.constructor();
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                return e
            },
            normalize: function(t) {
                return t > 1 ? 1 : t < 0 ? 0 : t
            }
        }
    }, {}],
    77: [function(t, e, i) {
        var s = t("./core");
        PIXI.Container.prototype.applyParams = function(t) {
            for (var e in t) this[e] = t[e];
            return this
        }, PIXI.Container.prototype.addTo = function(t) {
            return t.addChild(this), this
        }, Object.defineProperty(PIXI.DisplayObject.prototype, "responsive", {
            set: function(t) {
                this.interactive = t, this.buttonMode = t
            }
        }), Object.defineProperty(PIXI.Sprite.prototype, "anchorX", {
            get: function() {
                return this.anchor.x
            },
            set: function(t) {
                this.anchor.x = t
            }
        }), Object.defineProperty(PIXI.Sprite.prototype, "anchorY", {
            get: function() {
                return this.anchor.y
            },
            set: function(t) {
                this.anchor.y = t
            }
        }), Object.defineProperty(PIXI.Sprite.prototype, "anchorXY", {
            set: function(t) {
                this.anchor.x = t, this.anchor.y = t
            }
        }), Object.defineProperty(PIXI.DisplayObject.prototype, "scaleX", {
            get: function() {
                return this.scale.x
            },
            set: function(t) {
                this.scale.x = t
            }
        }), Object.defineProperty(PIXI.DisplayObject.prototype, "scaleY", {
            get: function() {
                return this.scale.y
            },
            set: function(t) {
                this.scale.y = t
            }
        }), Object.defineProperty(PIXI.DisplayObject.prototype, "scaleXY", {
            set: function(t) {
                this.scale.x = t, this.scale.y = t
            }
        }), s.Sprite = function(t) {
            return PIXI.Sprite.call(this, t.texture), this.applyParams(t), this
        }, s.Sprite.prototype = Object.create(PIXI.Sprite.prototype), s.Sprite.prototype.constructor = s.Sprite, s.Container = function(t) {
            return PIXI.Container.call(this), this.applyParams(t), this
        }, s.Container.prototype = Object.create(PIXI.Container.prototype), s.Container.prototype.constructor = s.Container, s.formattedNumber = function(t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }, s.randomInterval = function(t, e) {
            return Math.random() * (e - t) + t
        }, s.randomIntInterval = function(t, e) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }, PIXI.extras.BitmapText.prototype.setLineHeight = function(t) {
            this.myLineHeight || (this.myLineHeight = PIXI.extras.BitmapText.fonts[this._font.name].lineHeight), this.myLineHeight = t, this.updateText()
        }, PIXI.extras.BitmapText.prototype.updateText = function() {
            var t = PIXI.extras.BitmapText.fonts[this._font.name];
            t.lineHeight = this.myLineHeight ? this.myLineHeight : t.lineHeight;
            for (var e = new PIXI.Point, i = null, s = [], n = 0, o = 0, a = [], r = 0, h = this._font.size / t.size, l = -1, c = 0, p = 0; p < this.text.length; p++) {
                var u = this.text.charCodeAt(p);
                if (l = /(\s)/.test(this.text.charAt(p)) ? p : l, /(?:\r\n|\r|\n)/.test(this.text.charAt(p))) a.push(n), o = Math.max(o, n), r++, e.x = 0, e.y += t.lineHeight, i = null;
                else if (l !== -1 && this.maxWidth > 0 && e.x * h > this.maxWidth) PIXI.utils.removeItems(s, l, p - l), p = l, l = -1, a.push(n), o = Math.max(o, n), r++, e.x = 0, e.y += t.lineHeight, i = null;
                else {
                    var d = t.chars[u];
                    d && (i && d.kerning[i] && (e.x += d.kerning[i]), s.push({
                        texture: d.texture,
                        line: r,
                        charCode: u,
                        position: new PIXI.Point(e.x + d.xOffset, e.y + d.yOffset)
                    }), n = e.x + (d.texture.width + d.xOffset), e.x += d.xAdvance + (this.addToXAdvance ? this.addToXAdvance : 0), c = Math.max(c, d.yOffset + d.texture.height), i = u)
                }
            }
            a.push(n), o = Math.max(o, n);
            var g = [];
            for (p = 0; p <= r; p++) {
                var m = 0;
                "right" === this._font.align ? m = o - a[p] : "center" === this._font.align && (m = (o - a[p]) / 2), g.push(m)
            }
            var f = s.length,
                y = this.tint;
            for (p = 0; p < f; p++) {
                var _ = this._glyphs[p];
                _ ? _.texture = s[p].texture : (_ = new PIXI.Sprite(s[p].texture), this._glyphs.push(_)), _.position.x = (s[p].position.x + g[s[p].line]) * h, _.position.y = s[p].position.y * h, _.scale.x = _.scale.y = h, _.tint = y, _.parent || this.addChild(_)
            }
            for (p = f; p < this._glyphs.length; ++p) this.removeChild(this._glyphs[p]);
            this.textWidth = o * h, this.textHeight = (e.y + t.lineHeight) * h, this.maxLineHeight = c * h
        }
    }, {
        "./core": 43
    }]
}, {}, [1]);