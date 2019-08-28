! function t(e, i, n) {
    function s(r, a) {
        if (!i[r]) {
            if (!e[r]) {
                var h = "function" == typeof require && require;
                if (!a && h) return h(r, !0);
                if (o) return o(r, !0);
                var l = Error("Cannot find module '" + r + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = i[r] = {
                exports: {}
            };
            e[r][0].call(c.exports, function(t) {
                var i = e[r][1][t];
                return s(i ? i : t)
            }, c, c.exports, t, e, i, n)
        }
        return i[r].exports
    }
    for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) s(n[r]);
    return s
}({
    1: [function(t, e) {
        var i = t("./display/MovieClip"),
            n = t("./display/particles/ParticleSystem"),
            s = t("./utils/Timer"),
            o = function() {
                this._particleSystems = null, this._emitters = null, this._movieClips = null, this._timers = null, this._tweens = null, this._paused = !1, this.init()
            };
        e.exports = o, o.prototype.init = function() {
            this._movieClips = [], this._particleSystems = [], this._emitters = [], this._tweens = [], this._timers = [], this._paused = !1
        }, o.prototype.update = function() {
            this._paused || (this._updateEmitters(), this._updateParticleSystems(), this._updateTimers())
        }, o.prototype.add = function(t) {
            if (t instanceof n) {
                if (-1 != this._particleSystems.indexOf(t)) throw Error("'ParticleSystem' already added!");
                this._particleSystems.push(t)
            } else if (t instanceof cloudkid.Emitter) {
                if (-1 != this._emitters.indexOf(t)) throw Error("'Emitter' already added!");
                this._emitters.push(t)
            } else if (t instanceof i) {
                if (-1 != this._movieClips.indexOf(t)) throw Error("'MovieClip' already added!");
                this._movieClips.push(t)
            } else if (t instanceof TweenMax || t instanceof TimelineMax) {
                if (-1 != this._tweens.indexOf(t)) throw Error("'Tween' already added!");
                this._tweens.push(t)
            } else if (t instanceof s) {
                if (-1 != this._timers.indexOf(t)) throw Error("'Timer' already added!");
                this._timers.push(t)
            }
        }, o.prototype.remove = function(t) {
            var e;
            if (t instanceof n) {
                if (e = this._particleSystems.indexOf(t), -1 == e) throw Error("'ParticleSystem' is not added!");
                t.__updateTransform && (t.updateTransform = t.__updateTransform, t.__updateTransform = null), this._particleSystems.splice(e, 1)
            } else if (t instanceof cloudkid.Emitter) {
                if (e = this._emitters.indexOf(t), -1 == e) throw Error("'Emitter' is not added!");
                this._emitters.splice(e, 1)
            } else if (t instanceof i) {
                if (e = this._movieClips.indexOf(t), -1 == e) throw Error("'MovieClip' is not added!");
                t.__updateTransform && (t.updateTransform = t.__updateTransform, t.__updateTransform = null), this._movieClips.splice(e, 1)
            } else if ((t instanceof TweenMax || t instanceof TimelineMax) && -1 != this._tweens.indexOf(t)) {
                if (e = this._tweens.indexOf(t), -1 == e) throw Error("'Tween' is not added!");
                this._tweens.splice(e, 1)
            } else if (t instanceof s && -1 != this._timers.indexOf(t)) {
                if (e = this._timers.indexOf(t), -1 == e) throw Error("'Timer' is not added!");
                this._timers.splice(e, 1)
            }
        }, o.prototype.removeAll = function(t, e, i, n) {
            t = "boolean" == typeof t ? t : !0, e = "boolean" == typeof e ? e : !0, i = "boolean" == typeof i ? i : !0, n = "boolean" == typeof n ? n : !0, t && (this._particleSystems.length = this._emitters.length = 0), e && (this._movieClips.length = 0), i && this.removeAllTweens(!0), n && (this._timers.length = 0)
        }, o.prototype.removeAllTweens = function(t) {
            for (var e, i = 0; i < this._tweens.length; ++i) e = this._tweens[i], t && e.kill();
            this._tweens.length = 0
        }, o.prototype.setTimeout = function(t, e, i) {
            i = i || window;
            var n = new p3.Timer(e, 1);
            return n.signals.timerComplete.addOnce(function() {
                t.call(i), this.remove(n)
            }, this), n.start(), this.add(n), n
        }, o.prototype._playMovieClips = function() {
            for (var t, e = this._movieClips.length, i = 0; e > i; ++i) t = this._movieClips[i], t.__updateTransform && (t.updateTransform = t.__updateTransform, t.__updateTransform = null)
        }, o.prototype._pauseMoveClips = function() {
            for (var t, e = this._movieClips.length, i = 0; e > i; ++i) t = this._movieClips[i], t.__updateTransform || (t.__updateTransform = t.updateTransform, t.updateTransform = function() {
                p3.MovieClip.superClass_.updateTransform.call(this)
            })
        }, o.prototype._playTweens = function() {
            for (var t, e = this._tweens.length, i = 0; e > i; ++i) t = this._tweens[i], t.resume()
        }, o.prototype._pauseTweens = function() {
            for (var t, e = this._tweens.length, i = 0; e > i; ++i) t = this._tweens[i], t.pause()
        }, o.prototype._updateParticleSystems = function() {
            for (var t, e = this._particleSystems.length, i = e - 1; i >= 0; --i) t = this._particleSystems[i], t.update()
        }, o.prototype._updateEmitters = function() {
            for (var t, e = this._emitters.length, i = e - 1; i >= 0; --i) t = this._emitters[i], t.update(p3.Timestep.deltaTime)
        }, o.prototype._updateTimers = function() {
            for (var t, e = this._timers.length, i = e - 1; i >= 0; --i) t = this._timers[i], t.update()
        }, Object.defineProperty(o.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(t) {
                this._paused = t, this._paused ? (this._pauseMoveClips(), this._pauseTweens()) : (this._playMovieClips(), this._playTweens())
            }
        })
    }, {
        "./display/MovieClip": 12,
        "./display/particles/ParticleSystem": 17,
        "./utils/Timer": 57
    }],
    2: [function(t, e) {
        var i = t("./text/FontAtlas"),
            n = (t("./utils/Utils"), function() {
                if (!n.__allowInstance) throw Error("AssetManager is a Singleton, use 'instance'.");
                this.signalCompleted = new signals.Signal, this.signalProgress = new signals.Signal, this.progress = 0, this.resources = {}, this.fontAtlases = {}, this._pixiAssetLoader = null, this._manifest = [], this._scaleFactor = 1, this._completeDelay = 0
            });
        n.prototype.constructor = n, e.exports = n, n.instance = null, Object.defineProperty(n, "instance", {
            get: function() {
                return n.__instance || (n.__allowInstance = !0, n.__instance = new n, n.__allowInstance = !1), n.__instance
            }
        }), n.__instance = null, n.__allowInstance = !1, n.VERSION = "02.00.00", n.DEBUG = !1, n.EVENT_ON_COMPLETE = "onComplete", n.EVENT_ON_PROGRESS = "onProgress", n.FILETYPE_PNG = ".png", n.FILETYPE_JPG = ".jpg", n._IMAGE = "_image", n.prototype.addFiles = function(t, e) {
            if (e = e || "", null != e && e.length > 0)
                for (var i = t.length, n = 0; i > n; n++) {
                    var s = t[n].url;
                    t[n].url = e + s
                }
            return this._manifest = this._manifest.concat(t), this._manifest
        }, n.prototype.load = function(t) {
            if (this._completeDelay = t || 0, !this._manifest || 0 === this._manifest.length) throw Error('[AssetManager.load] - The manifest is either null or it is empty. Make sure you have added files via "addFiles()" before calling "load()".');
            return this.progress = 0, this._pixiAssetLoader || (this._pixiAssetLoader = new PIXI.loaders.Loader, this._pixiAssetLoader.on("progress", this._onProgress, this), this._pixiAssetLoader.on("complete", this._onComplete, this), this._pixiAssetLoader.on("error", this._onError, this)), this._pixiAssetLoader.add(this._manifest), this._pixiAssetLoader.load(), this._manifest
        }, n.prototype.getTexture = function(t, e) {
            e = e || n.FILETYPE_PNG;
            try {
                var i = PIXI.Texture.fromFrame(t + e)
            } catch (s) {
                if (!this.resources[t]) throw Error('[AssetManager.getTexture] - Texture does not exist: "' + t + '". Are you tring to get a texture from an Atlas? If so use "getSprite()".');
                i = this.resources[t].texture
            }
            return i
        }, n.prototype.getSprite = function(t, e, i) {
            var n = this.getTexture(t, i),
                s = new PIXI.Sprite(n);
            return e && (s.anchor.x = .5, s.anchor.y = .5), s
        }, n.prototype.getJSON = function(t, e) {
            var i = e ? p3.Utils.cloneObject(this.resources[t].data) : this.resources[t].data;
            if (!i) throw Error('[AssetManager.getJSON] - Json does not exist: "' + t + '".');
            return i
        }, n.prototype.getFontAtlas = function(t) {
            var e = this.fontAtlases[t];
            if (!e) throw Error('[AssetManager.getJSON] - FontAtlas does not exist: "' + t + '".');
            return e
        }, n.prototype.getSpineData = function(t) {
            var e = this.resources[t];
            if (!e || e && !e.spineData) throw Error('[AssetManager.getJSON] - SpineData does not exist: "' + t + '".');
            return e.spineData
        }, n.prototype.reset = function() {
            this.progress = 0, this._manifest = [], null != this._pixiAssetLoader && this._pixiAssetLoader.reset()
        }, n.prototype._checkForFontAtlas = function(t) {
            if (t.data && t.data.font) {
                var e = t.data.font,
                    i = e.pages.page.file,
                    s = i.match(/([^\/]+)(?=\.\w+$)/gim),
                    o = t.url;
                o = o.substring(0, o.lastIndexOf("/"));
                var r = o + "/" + i;
                this._pixiAssetLoader.add({
                    name: s + n._IMAGE,
                    url: r
                })
            }
        }, n.prototype._buildFontAtlases = function() {
            for (var t in this.resources)
                if (this.resources.hasOwnProperty(t)) {
                    var e = this.resources[t];
                    if (e.data.font) {
                        var s = e.url,
                            o = s.match(/([^\/]+)(?=\.\w+$)/gim),
                            r = this.getTexture(o + n._IMAGE);
                        this.fontAtlases[t] = new i(t, e.data, r)
                    }
                }
        }, n.prototype._onProgress = function(t, e) {
            this.progress = t.progress, this._checkForFontAtlas(e), this.signalProgress.dispatch(t, this.progress)
        }, n.prototype._onComplete = function(t, e) {
            for (var i in e) this.resources[i] || (this.resources[i] = e[i]);
            this._buildFontAtlases();
            var n = this;
            setTimeout(function() {
                n.reset(), n.signalCompleted.dispatch()
            }, 1e3 * this._completeDelay)
        }, n.prototype._onError = function(t, e) {
            console.log("[AssetManager] There was an error", t, e)
        }, Object.defineProperty(n.prototype, "scaleFactor", {
            get: function() {
                return this._scaleFactor
            },
            set: function(t) {
                this._scaleFactor = t
            }
        }), Object.defineProperty(n.prototype, "scaleFactorInverse", {
            get: function() {
                return 1 / this._scaleFactor
            }
        }), Object.defineProperty(n.prototype, "pixiLoader", {
            get: function() {
                return this._pixiAssetLoader
            }
        }), Object.defineProperty(n.prototype, "manifest", {
            get: function() {
                return this._manifest
            }
        })
    }, {
        "./text/FontAtlas": 48,
        "./utils/Utils": 58
    }],
    3: [function(t, e) {
        var i = (t("./CanvasParams"), t("./utils/Device")),
            n = function(t) {
                this.params = t, this.signalReady = new signals.Signal, this.signalChange = new signals.Signal, this.window = window = window.self, this.imageOverlay = null, this.backgroundImage = null, this.width = 0, this.height = 0, this.orientation = "", this.holderElement = null, this.iosfixElement = null, this.canvasElement = null, this.autoResize = !0, this.isAndroidStockBrowser = i.isAndroidStockBrowser, this._isReadyDone = !1, this._targetOrientation = "", n.params = this.params, n.center = new PIXI.Point(0, 0), this._targetOrientation = this.params.width > this.params.height ? n.LANDSCAPE : n.PORTRAIT, this.params.forceLetterbox || i.isAndroidStockBrowser && n.params.stockAndroidLetterbox, this.window.onload = this.onLoad.bind(this)
            };
        e.exports = n, n.LANDSCAPE = "landscape", n.PORTRAIT = "portrait", n.DEFAULT_HOLDER_ID = "p3gameholder", n.DEFAULT_CANVAS_ID = "p3gamecanvas", n.DEFAULT_IMAGE_OVERLAY_ID = "p3imageoverlay", n.DEFAULT_BACKGROUND_IMAGE_ID = "p3backgroundimage", n.canvasElement = null, n.holderElement = null, n.iosfixElement = null, n.width = 0, n.height = 0, n.center = null, n.stage = null, n.renderer = null, n.params = null, n.prototype.init = function(t) {
            if (this._initHolder(), this._initCanvas(), this._initImageOverlay(), i.isCocoonJS || this._disableUnwantedInteractions(), this.signalReady.dispatch(), i.isCocoonJS) this.width = this.params.width * (window.innerWidth / this.params.width) / (window.innerHeight / this.params.height), this.height = this.params.height, this.updateSize(this.width, this.height), this.signalReady.dispatch();
            else if (t) this.holderElement.style.width = this.params.width + "px", this.holderElement.style.height = this.params.height + "px", n.width = this.width = this.params.width, n.height = this.height = this.params.height, this.signalReady.dispatch(), this.signalChange.dispatch(!0);
            else {
                this.window.addEventListener("resize", this._onResizeEvent.bind(this), !1);
                var e = this._checkOrientation();
                this._toggleRotateImage(!e), e && this._checkOrientationAndThenResize()
            }
        }, n.prototype.updateSize = function(t, e) {
            n.width = this.width = Math.floor(t), n.height = this.height = Math.floor(e), n.center.x = Math.floor(.5 * n.width), n.center.y = Math.floor(.5 * n.height)
        }, n.prototype._initHolder = function() {
            i.isCocoonJS || (this.params.holderID ? this.holderElement = document.getElementById(this.params.holderID) : (document.getElementById(n.DEFAULT_HOLDER_ID) && console.warn("[p3.Canvas] You have not set a 'HolderId' and there is already one on the page with the DEFAULT_ID, attempting to use it. " + n.DEFAULT_HOLDER_ID), this.holderElement = document.createElement("div"), this.holderElement.id = n.DEFAULT_HOLDER_ID, document.body.appendChild(this.holderElement)), this.holderElement.style.left = 0, this.holderElement.style.top = 0, this.holderElement.style.position = "absolute", this.holderElement.style.width = this.window.innerWidth + "px", this.holderElement.style.height = this.window.innerHeight + "px", n.holderElement = this.holderElement, p3.Device.isIOS && (this.iosfixElement = document.createElement("iosfix"), this.iosfixElement.id = "iosfix", this.iosfixElement.style.position = "absolute", this.iosfixElement.style.width = "100%", this.iosfixElement.style.height = this.holderElement.height + 1, this.iosfixElement.style.left = 0, this.iosfixElement.style.right = 0, this.iosfixElement.style.top = 0, this.iosfixElement.style.bottom = 0, this.iosfixElement.style.visibility = "hidden", document.body.appendChild(this.iosfixElement), n.iosfixElement = this.iosfixElement))
        }, n.prototype._initCanvas = function() {
            i.isCocoonJS ? (this.canvasElement = document.createElement("screencanvas"), this.canvasElement.id = n.DEFAULT_CANVAS_ID, this.canvasElement.width = this.params.width, this.canvasElement.height = this.params.height, this.canvasElement.style.cssText = "idtkscale:ScaleAspectFill;", document.body.appendChild(this.canvasElement)) : (this.params.canvasID ? this.canvasElement = document.getElementById(this.params.canvasID) : (document.getElementById(n.DEFAULT_HOLDER_ID) && console.warn("[p3.Canvas] You have not set a 'CanvasID' and there is already a canvas with on the page with the DEFAULT_ID, attempting to use it. " + n.DEFAULT_CANVAS_ID), this.canvasElement = document.createElement("canvas"), this.canvasElement.id = n.DEFAULT_CANVAS_ID), this.canvasElement.style.left = 0, this.canvasElement.style.right = 0, this.canvasElement.style.top = 0, this.canvasElement.style.bottom = 0, this.canvasElement.style.position = "absolute", this.canvasElement.style.width = "100%", this.canvasElement.style.height = "100%", (this.params.forceLetterbox || i.isAndroidStockBrowser && n.params.stockAndroidLetterbox) && (this.canvasElement.style.margin = "auto", this.canvasElement.style.width = "auto"), this.canvasElement.style.overflow = "visible", this.canvasElement.style.display = "block", this.holderElement.appendChild(this.canvasElement), this.window.focus(), this.canvasElement.tabIndex = 1), n.canvasElement = this.canvasElement
        }, n.prototype._initImageOverlay = function() {
            if (!i.isCocoonJS) {
                if (document.getElementById(n.DEFAULT_IMAGE_OVERLAY_ID)) throw Error("[Canvas] There is already a div with that id on the page, are you using it? : " + n.DEFAULT_IMAGE_OVERLAY_ID);
                this.imageOverlay = document.createElement("div"), this.imageOverlay.id = n.DEFAULT_IMAGE_OVERLAY_ID, this.imageOverlay.style.left = "0", this.imageOverlay.style.top = "0", this.imageOverlay.style.width = "auto", this.imageOverlay.style.height = "100%", this.imageOverlay.style.marginLeft = "auto", this.imageOverlay.style.marginRight = "auto", this.imageOverlay.style.overflow = "visible", this.imageOverlay.style.display = "none", this.imageOverlay.style.backgroundColor = this.params.rotateImageBackgroundColor, this.imageOverlay.style.backgroundImage = "url(" + this.params.rotateImageSrc + ")", this.imageOverlay.style.backgroundPosition = "50% 50%", this.imageOverlay.style.backgroundRepeat = "no-repeat", this.imageOverlay.style.backgroundSize = "contain", this.holderElement.appendChild(this.imageOverlay)
            }
        }, n.prototype._initBackgroundImage = function() {
            if (!i.isCocoonJS) {
                if (document.getElementById(n.DEFAULT_BACKGROUND_IMAGE_ID)) throw Error("[Canvas] There is already a div with that id on the page, are you using it? : " + n.DEFAULT_BACKGROUND_IMAGE_ID);
                this.backgroundImage = document.createElement("div"), this.backgroundImage.id = n.DEFAULT_BACKGROUND_IMAGE_ID, this.backgroundImage.style.left = "0", this.backgroundImage.style.top = "0", this.backgroundImage.style.height = "100%", this.backgroundImage.style.width = "auto", this.backgroundImage.style.overflow = "visible", this.backgroundImage.style.display = "block", this.backgroundImage.style.backgroundImage = "url(" + this.params.backgroundImageSrc + ")", this.backgroundImage.style.backgroundPosition = "50% 50%", this.backgroundImage.style.backgroundRepeat = "no-repeat", this.backgroundImage.style.backgroundSize = "auto 100%", this.holderElement.appendChild(this.backgroundImage)
            }
        }, n.prototype._checkOrientation = function() {
            return this.orientation = this.window.innerWidth > this.window.innerHeight ? n.LANDSCAPE : n.PORTRAIT, i.isMobile ? this.orientation === this._targetOrientation : !0
        }, n.prototype._resize = function() {
            if (window.scrollTo(0, 0), this.params.forceLetterbox || i.isAndroidStockBrowser && n.params.stockAndroidLetterbox) n.width = this.width = this.params.width, n.height = this.height = this.params.height;
            else {
                console.log(this.window.innerWidth), console.log(this.window.innerHeight);
                var t = this.window.innerWidth / this.params.width,
                    e = (this.params.width / this.window.innerWidth, this.window.innerHeight / this.params.height, this.params.height / this.window.innerHeight),
                    s = this.params.width,
                    o = this.params.height;
                s = Math.floor(this.params.width * t * e), o = this.params.height, n.width = this.width = this.canvasElement.width = s, n.height = this.height = this.canvasElement.height = o
            }
            this.updateSize(n.width, n.height)
        }, n.prototype._toggleRotateImage = function(t) {
            t ? (this.imageOverlay.style.display = "block", this.canvasElement.style.display = "none") : (this.canvasElement.style.display = "block", this.imageOverlay.style.display = "none")
        }, n.prototype._checkOrientationAndThenResize = function() {
            i.isIframe ? (this.holderElement.style.width = "100%", this.holderElement.style.height = "100%") : (this.holderElement.style.width = this.window.innerWidth + "px", this.holderElement.style.height = this.window.innerHeight + "px"), p3.Device.isIOS && (this.iosfixElement.style.height = parseInt(this.holderElement.style.height) + 1 + "px");
            var t = this._checkOrientation();
            this._toggleRotateImage(!t), t && (this._resize(), this._isReadyDone || (this._isReadyDone = !0, this.signalReady.dispatch())), this._isReadyDone && this.signalChange.dispatch(t)
        }, n.prototype._disableUnwantedInteractions = function() {
            n.canvasElement.addEventListener("touchmove", function(t) {
                return t.preventDefault(), !1
            }), n.canvasElement.addEventListener("touchstart", function(t) {
                return t.preventDefault(), !1
            }), n.canvasElement.addEventListener("touchend", function(t) {
                return t.preventDefault(), !1
            }), i.isAndroidStockBrowser && (n.canvasElement.addEventListener("mousedown", function(t) {
                t.stopPropagation(), t.preventDefault(), t.stopImmediatePropagation()
            }, !1), n.canvasElement.addEventListener("mouseup", function(t) {
                t.stopPropagation(), t.preventDefault(), t.stopImmediatePropagation()
            }, !1), n.canvasElement.addEventListener("click", function(t) {
                t.stopPropagation(), t.preventDefault(), t.stopImmediatePropagation()
            }, !1))
        }, n.prototype.onLoad = function() {
            var t = this;
            setTimeout(function() {
                t.init()
            }, 0)
        }, n.prototype._onResizeEvent = function() {
            this._checkOrientationAndThenResize()
        }
    }, {
        "./CanvasParams": 4,
        "./utils/Device": 54
    }],
    4: [function(t, e) {
        function i() {
            this.width = 0, this.height = 0, this.holderID = "", this.canvasID = "", this.rotateImageSrc = "", this.rotateImageBackgroundColor = "#FFFFFF", this.backgroundImageSrc = "", this.forceCanvasMode = !1, this.forceLetterbox = !1, this.stockAndroidCanvasMode = !0, this.stockAndroidLetterbox = !1
        }
        e.exports = i
    }, {}],
    5: [function(t, e) {
        var i = function(t) {
            this.maxElapsedMS = 100, this._type = t || i.VARIABLE, this._lastTime = i.timeInSeconds, this._accumulator = 0
        };
        e.exports = i, i.VERSION = "2.0.0", i.VARIABLE = "variable", i.SEMI_FIXED = "semi_fixed", i.FIXED = "fixed", i.deltaTime = 1, i.speed = 1, i.queue = [], i.queueCall = function(t, e, n) {
            i.queue.push({
                func: t,
                args: e,
                scope: n
            })
        }, i.executeCalls = function() {
            for (var t, e = 0; e < i.queue.length; ++e) t = i.queue[e], t.func.apply(t.scope, t.args);
            i.queue.length = 0
        }, i.prototype.init = function(t, e, n) {
            function s() {
                var s = window.performance.now(),
                    o = Math.min(h.maxElapsedMS, s - h._lastTime);
                i.deltaTime = .001 * o * i.speed, h._lastTime = s, i.executeCalls(), t.call(n), e.call(n), requestAnimationFrame(a)
            }

            function o() {
                var s = .001 * window.performance.now(),
                    o = s - h._lastTime;
                for (h._lastTime = s, i.executeCalls(), h._accumulator += o; h._accumulator >= i.deltaTime;) t.call(n), h._accumulator -= i.deltaTime;
                e.call(n), requestAnimationFrame(a)
            }

            function r() {
                i.executeCalls(), t.call(n), e.call(n), requestAnimationFrame(a)
            }
            var a, h = this;
            switch (this._type) {
                case i.VARIABLE:
                    a = s, this._lastTime = 0;
                    break;
                case i.SEMI_FIXED:
                    a = o, this._lastTime = 0, this._accumulator = 0, i.deltaTime = 1 / 60;
                    break;
                case i.FIXED:
                    a = r, i.deltaTime = 1 / 60
            }
            requestAnimationFrame(a), window.onfocus = function() {
                h._lastTime = i.timeInSeconds
            }
        }, Object.defineProperty(i, "frameInterval", {
            get: function() {
                return this._frameInterval
            }
        }), Object.defineProperty(i, "time", {
            get: function() {
                return window.performance.now()
            }
        }), Object.defineProperty(i, "timeInSeconds", {
            get: function() {
                return i.time / 1e3
            }
        })
    }, {}],
    6: [function(t, e) {
        var i = t("./utils/Device"),
            n = (t("./ViewParams"), function(t) {
                this.params = t, this.signals = {}, this.signals.ready = new signals.Signal, this.signals.resize = new signals.Signal, this._holder = null, this._canvas = null, this._iosfix = null, this._rotateImage = null, this._width = this.params.width, this._height = this.params.height, this._targetOrientation = this.orientation, window.self.onload = this.onLoad.bind(this)
            });
        e.exports = n, n.holder = null, n.canvas = null, n.width = 0, n.height = 0, n.center = new PIXI.Point, n.prototype.onLoad = function() {
            function t() {
                this.createHolder(), this.createCanvas(), this.createRotateImage(), this.disableInteractions(), i.isCocoonJS ? (this.updateDimensions(this.params.width * (window.innerWidth / this.params.width) / (window.innerHeight / this.params.height), this.params.height), this.signals.ready.dispatch(this._canvas)) : (i.isAndroid ? window.self.addEventListener("orientationchange", this.onOrientationChange.bind(this), !1) : window.self.addEventListener("resize", this.onResize.bind(this), !1), this.signals.ready.dispatch(this._canvas), this.resize())
            }
            var e = this;
            setTimeout(function() {
                t.call(e)
            }, 0)
        }, n.prototype.onResize = function() {
            this.resize()
        }, n.prototype.onOrientationChange = function() {
            function t() {
                window.self.removeEventListener("resize", t, !1), e.resize()
            }
            window.self.addEventListener("resize", t, !1);
            var e = this
        }, n.prototype.createHolder = function() {
            i.isCocoonJS || (this._holder = document.getElementById(this.params.holderId), this._holder || (this._holder = document.createElement("div"), this._holder.id = this.params.holderId ? this.params.holderId : "game", document.body.appendChild(this._holder)), this._holder.style.position = "absolute", this._holder.style.left = "0px", this._holder.style.top = "0px", this._holder.style.width = window.self.innerWidth + "px", this._holder.style.height = window.self.innerHeight + "px", n.holder = this._holder, p3.Device.isIOS && (this._iosfix = document.createElement("div"), this._iosfix.id = "iosfix", this._iosfix.style.position = "absolute", this._iosfix.style.left = "0px", this._iosfix.style.right = "0px", this._iosfix.style.top = "0px", this._iosfix.style.bottom = "0px", this._iosfix.style.width = "100%", this._iosfix.style.height = this._holder.height + 1, this._iosfix.style.visibility = "hidden", document.body.appendChild(this._iosfix), n.iosfix = this._iosfix))
        }, n.prototype.createCanvas = function() {
            i.isCocoonJS ? (this._canvas = document.createElement("screencanvas"), this._canvas.id = "canvas", this._canvas.width = this.params.width, this._canvas.height = this.params.height, this._canvas.style.cssText = "idtkscale:ScaleAspectFill;", document.body.appendChild(this._canvas)) : (this._canvas = document.createElement("canvas"), this._canvas.id = "canvas", this._canvas.tabIndex = 1, this._canvas.style.position = "absolute", this._canvas.style.left = "0px", this._canvas.style.right = "0px", this._canvas.style.top = "0px", this._canvas.style.bottom = "0px", this._canvas.style.width = "100%", this._canvas.style.height = "100%", this._canvas.style.overflow = "visible", this._canvas.style.display = "block", this._holder.appendChild(this._canvas)), n.canvas = this._canvas
        }, n.prototype.createRotateImage = function() {
            i.isCocoonJS || (this._rotateImage = document.createElement("div"), this._rotateImage.id = "rotateImage", this._rotateImage.style.position = "absolute", this._rotateImage.style.left = "0px", this._rotateImage.style.top = "0px", this._rotateImage.style.width = "100%", this._rotateImage.style.height = "100%", this._rotateImage.style.marginLeft = "auto", this._rotateImage.style.marginRight = "0auto", this._rotateImage.style.overflow = "visible", this._rotateImage.style.display = "none", this._rotateImage.style.zIndex = 1e3, this._rotateImage.style.backgroundImage = "url(" + this.params.rotateImageUrl + ")", this._rotateImage.style.backgroundColor = this.params.rotateImageColor, this._rotateImage.style.backgroundPosition = "50% 50%", this._rotateImage.style.backgroundRepeat = "no-repeat", this._rotateImage.style.backgroundSize = "contain", this._holder.appendChild(this._rotateImage), this._rotateImage.addEventListener("touchmove", function(t) {
                return t.preventDefault(), !1
            }), this._rotateImage.addEventListener("touchstart", function(t) {
                return t.preventDefault(), !1
            }), this._rotateImage.addEventListener("touchend", function(t) {
                return t.preventDefault(), !1
            }))
        }, n.prototype.updateDimensions = function(t, e) {
            n.width = this._width = Math.round(t), n.height = this._height = Math.round(e), n.center.x = Math.round(.5 * t), n.center.y = Math.round(.5 * e)
        }, n.prototype.resize = function() {
            var t = i.isMobile ? document.documentElement.clientWidth : window.innerWidth,
                e = i.isMobile ? document.documentElement.clientHeight : window.innerHeight; //!Device.isIOS9 ? window.innerHeight : document.documentElement.clientHeight;
            i.isIframe ? (this._holder.style.width = "100%", this._holder.style.height = "100%") : (this._holder.style.width = t + "px", this._holder.style.height = e + "px"), p3.Device.isIOS && (this._iosfix.style.height = parseInt(this._holder.style.height) + 1 + "px"), window.scrollTo(0, 0);
            var n, s;
            this.params.aspectRatioFillHeight ? (n = t / this.params.width, s = this.params.height / e, this.updateDimensions(Math.floor(this.params.width * n * s), this.params.height)) : (n = this.params.width / t, s = e / this.params.height, this.updateDimensions(this.params.width, Math.floor(this.params.height * s * n))), this.toggleRotate(!this.isCorrectOrientation()), this.signals.resize.dispatch(this.isCorrectOrientation())
        }, n.prototype.toggleRotate = function(t) {
            this._canvas.style.display = t ? "none" : "block", this._rotateImage.style.display = t ? "block" : "none"
        }, n.prototype.isCorrectOrientation = function() {
            return i.isMobile ? this.orientation === this._targetOrientation : !0
        }, n.prototype.disableInteractions = function() {
            n.canvas.addEventListener("touchmove", function(t) {
                return t.preventDefault(), !1
            }), n.canvas.addEventListener("touchstart", function(t) {
                return t.preventDefault(), !1
            }), n.canvas.addEventListener("touchend", function(t) {
                return t.preventDefault(), !1
            }), i.isAndroidStockBrowser && (n.canvas.addEventListener("mousedown", function(t) {
                t.stopPropagation(), t.preventDefault(), t.stopImmediatePropagation()
            }, !1), n.canvas.addEventListener("mouseup", function(t) {
                t.stopPropagation(), t.preventDefault(), t.stopImmediatePropagation()
            }, !1), n.canvas.addEventListener("click", function(t) {
                t.stopPropagation(), t.preventDefault(), t.stopImmediatePropagation()
            }, !1))
        }, Object.defineProperty(n.prototype, "holder", {
            get: function() {
                return this._holder
            }
        }), Object.defineProperty(n.prototype, "orientation", {
            get: function() {
                return this._width < this._height ? "portrait" : "landscape"
            }
        })
    }, {
        "./ViewParams": 7,
        "./utils/Device": 54
    }],
    7: [function(t, e) {
        function i() {
            this.width = 0, this.height = 0, this.holderId = "", this.rotateImageUrl = "", this.rotateImageColor = "#FFFFFF", this.aspectRatioFillHeight = !0
        }
        e.exports = i
    }, {}],
    8: [function(t, e) {
        var i = (t("./../utils/Utils"), t("./../utils/Device")),
            n = function() {
                if (!n.__allowInstance) throw Error("AudioManager is a Singleton, use 'getInstance()'.");
                this.signalMute = new signals.Signal, this.SOUND_GROUP_SFX = "sound_group_sfx", this.SOUND_GROUP_MUSIC = "sound_group_music", this.SOUND_GROUP_VO = "sound_group_vo", this.LOCAL_STORAGE_ID = "p3Mute", this._sounds = {}, this._soundsSFX = [], this._soundsVO = [], this._soundsMusic = [], this._previouslyPlayedSound = null, this._isMute = !1, this._isMuteSFX = !1, this._isMuteMusic = !1, this._isMuteVO = !1;
                var t, e = this._onFocus.bind(this);
                void 0 !== document.hidden ? (t = "hidden", this.visibilityChange = "visibilitychange") : void 0 !== document.mozHidden ? (t = "mozHidden", this.visibilityChange = "mozvisibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", this.visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), document.addEventListener(this.visibilityChange, function() {
                    Howler.volume(document[t] ? 0 : 1)
                }, !1), window.addEventListener("focus", e), window.addEventListener("pageshow", e)
            };
        n.prototype.constructor = n, e.exports = n, n.instance = null, Object.defineProperty(n, "instance", {
            get: function() {
                return n.__instance || (n.__allowInstance = !0, n.__instance = new n, n.__allowInstance = !1), n.__instance
            }
        }), n.__instance = null, n.__allowInstance = !1, n.DEBUG = !1, n.FADE_OUT_DURATION = .5, n.prototype.addSounds = function(t, e, i) {
            i = i || "";
            for (var n = 0; n < t.length; n++) {
                for (var s = i + t[n], o = s.split("/"), r = o[o.length - 1], a = [], h = 0; h < e.length; h++) {
                    var l = e[h],
                        c = s + l;
                    a.push(c)
                }
                var u = new Howl({
                    urls: a,
                    volume: 1,
                    loop: !1,
                    autoplay: !1,
                    onload: function() {},
                    onloaderror: function() {
                        p3.SoundManager.DEBUG && console.warn("[AudioManager] Error loading sound:", r)
                    }
                });
                u.name = r, this._sounds[r] = u
            }
        }, n.prototype.removeSounds = function(t) {
            for (var e = 0; e < t.length; e += 1) {
                var i = t[e];
                for (var n in this._sounds)
                    if (this._sounds.hasOwnProperty(n)) {
                        var s = this._sounds[n];
                        if (s.name === i) {
                            s.unload(), s = null, this._sounds[n] = null, delete this._sounds[n];
                            break
                        }
                    }
            }
        }, n.prototype.playSound = function(t, e) {
            var i = this._checkSoundAlreadyPlaying(t, this._soundsSFX);
            if (i) return i.play(), i;
            var s = this._play(t, e, this.SOUND_GROUP_SFX);
            return s ? (this._soundsSFX.push(s), n.DEBUG && console.log("[AudioManager] Playing Sound:", t), s) : null
        }, n.prototype.playMusic = function(t, e) {
            var i = this._checkSoundAlreadyPlaying(t, this._soundsMusic);
            if (i) return i;
            e = e || {}, e.loop = void 0 !== e.loop ? e.loop : !0, e.fadeIn = e.fadeIn || 1;
            var s = this._play(t, e, this.SOUND_GROUP_MUSIC);
            return s ? (this._soundsMusic.push(s), n.DEBUG && console.log("[AudioManager] Playing Music:", t), s) : null
        }, n.prototype.playVO = function(t, e) {
            var i = this._checkSoundAlreadyPlaying(t, this._soundsVO);
            if (i) return i;
            var s = this._play(t, e, this.SOUND_GROUP_VO);
            return s ? (this._soundsVO.push(s), n.DEBUG && console.log("[AudioManager] Playing VO:", t), s) : null
        }, n.prototype.mute = function(t) {
            this._isMute = t, this.muteSFX(this._isMute), this.muteMusic(this._isMute), this.muteVO(this._isMute), t ? Howler.mute() : Howler.unmute(), this.signalMute.dispatch(this._isMute)
        }, n.prototype.muteSFX = function(t) {
            this._isMuteSFX = t, this._isMute = t, this._updateSoundMuteStatus(this._isMuteSFX, this._soundsSFX), n.DEBUG && console.log("[AudioManager] MuteSFX:", this._isMuteSFX)
        }, n.prototype.muteMusic = function(t) {
            this._isMuteMusic = t, this._isMute = t, this._updateSoundMuteStatus(this._isMuteMusic, this._soundsMusic), n.DEBUG && console.log("[AudioManager] MuteMusic:", this._isMuteMusic)
        }, n.prototype.muteVO = function(t) {
            this._isMuteVO = t, this._sMute = t, this._updateSoundMuteStatus(this._isMuteVO, this._soundsVO), n.DEBUG && console.log("[AudioManager] MuteVO:", this._isMuteVO)
        }, n.prototype.toggleMute = function() {
            this.mute(!this.isMute)
        }, n.prototype.stopSound = function(t) {
            for (var e = [this._soundsSFX, this._soundsVO, this._soundsMusic], i = 0; i < e.length; i++) {
                var s = e[i],
                    o = this._checkSoundAlreadyPlaying(t, s);
                if (o) return void o.stop()
            }
            n.DEBUG && console.log("[SoundManager] StopSound: Could not find sound to stop it:", t)
        }, n.prototype._saveMuteStatus = function() {
            try {
                localStorage.setItem(this.LOCAL_STORAGE_ID, this._isMute)
            } catch (t) {
                "QUOTA_EXCEEDED_ERR" == t ? p3.SoundManager.DEBUG && console.log("Error trying to write to local storage. Quota exceeded. ") : p3.SoundManager.DEBUG && console.log("Error trying to write to local storage.")
            }
        }, n.prototype._play = function(t, e, s) {
            var o, r = this,
                a = t;
            if (e = e || {}, e.volume = e.volume || 1, e.loop = void 0 !== e.loop ? e.loop : !1, e.delay = e.delay || 0, e.fadeIn = void 0 !== e.fadeIn ? 1e3 * e.fadeIn : 0, e.onComplete = e.onComplete || null, e.onCompleteScope = e.onCompleteScope || window, e.dontRepeat = void 0 !== e.dontRepeat ? e.dontRepeat : !0, "string" != typeof t) {
                if (t.length < 0) throw Error("[AudioManager] Sound is not a string or array: ", t);
                if (t.length > 1) {
                    var h = Math.floor(Math.random() * t.length);
                    if (e.dontRepeat)
                        for (var l = 0; h === this._previouslyPlayedSound;)
                            if (h = Math.floor(Math.random() * t.length), l++, l > 10) {
                                h = 0;
                                break
                            }
                    a = t[h], this._previouslyPlayedSound = a
                } else a = t[0]
            }
            for (var c in this._sounds)
                if (this._sounds.hasOwnProperty(c)) {
                    var u = this._sounds[c];
                    if (u.name === a) {
                        o = u;
                        break
                    }
                }
            if (!o) return void console.warn("[AudioManager] Could not find the sound:", t);
            o.volume(e.volume), o.loop(e.loop), i && i.isAndroidStockBrowser && (o.buffer = !0), o.on("end", function() {
                this.off("end"), e.loop || r._removeSoundFromArray(this, s), e.onComplete && e.onComplete.call(e.onCompleteScope), n.DEBUG && console.log("[AudioManager] Sound ended:", this.name)
            });
            var p;
            switch (s) {
                case this.SOUND_GROUP_SFX:
                    p = this._isMuteSFX;
                    break;
                case this.SOUND_GROUP_MUSIC:
                    p = this._isMuteMusic, this._stopExistingSound(s, e.fadeIn);
                    break;
                case this.SOUND_GROUP_VO:
                    p = this._isMuteVO, this._stopExistingSound(s, e.fadeIn);
                    break;
                default:
                    p = !1
            }
            return p && (o.mute(), e.fadeIn = 0), 0 === e.delay ? 0 === e.fadeIn ? o.play() : o.fadeIn(e.volume, e.fadeIn) : setTimeout(function() {
                0 === e.fadeIn ? o.play() : o.fadeIn(e.volume, e.fadeIn)
            }, 1e3 * e.delay), o
        }, n.prototype._stopExistingSound = function(t, e) {
            var i, n = this;
            if (t === this.SOUND_GROUP_MUSIC) i = this._soundsMusic;
            else {
                if (t !== this.SOUND_GROUP_VO) return;
                i = this._soundsVO, e = 0
            }
            if (i.length > 0)
                for (var s = 0; s < i.length; s += 1) {
                    var o = i[s];
                    n._removeSoundFromArray(o, t), 0 === e ? o.stop() : o.fadeOut(0, e, function() {
                        o.stop()
                    })
                }
        }, n.prototype._removeSoundFromArray = function(t, e) {
            var i;
            switch (e) {
                case this.SOUND_GROUP_SFX:
                    i = this._soundsSFX;
                    break;
                case this.SOUND_GROUP_MUSIC:
                    i = this._soundsMusic;
                    break;
                case this.SOUND_GROUP_VO:
                    i = this._soundsVO
            }
            for (var n = 0, s = i.length; s > n; n++) {
                var o = i[n];
                o && o.name === t.name && i.splice(n, 1)
            }
        }, n.prototype._updateSoundMuteStatus = function(t, e) {
            for (var i = e.length, n = 0; i > n; n += 1) {
                var s = e[n];
                t ? s.mute() : s.unmute()
            }
        }, n.prototype._checkSoundAlreadyPlaying = function(t, e) {
            for (var i = 0, n = e.length; n > i; i += 1) {
                var s = e[i];
                if (s.name === t) return s
            }
            return null
        }, n.prototype._onBlur = function() {
            Howler.mute()
        }, n.prototype._onFocus = function() {
            this._isMute ? Howler.mute() : Howler.unmute()
        }, n.prototype.isMute = !1, n.prototype.isMuteSFX = !1, n.prototype.isMuteMusic = !1, n.prototype.isMuteVO = !1, n.prototype.sounds = !1, n.prototype.soundsSFX, n.prototype.soundsSFX, n.prototype.soundsMusic, n.prototype.soundsVO, Object.defineProperty(n.prototype, "isMute", {
            get: function() {
                return this._isMute
            }
        }), Object.defineProperty(n.prototype, "isMuteSFX", {
            get: function() {
                return this._isMuteSFX
            }
        }), Object.defineProperty(n.prototype, "isMuteMusic", {
            get: function() {
                return this._isMuteMusic
            }
        }), Object.defineProperty(n.prototype, "isMuteVO", {
            get: function() {
                return this._isMuteVO
            }
        }), Object.defineProperty(n.prototype, "sounds", {
            get: function() {
                return this._sounds
            }
        }), Object.defineProperty(n.prototype, "soundsSFX", {
            get: function() {
                return this._soundsSFX
            }
        }), Object.defineProperty(n.prototype, "soundsMusic", {
            get: function() {
                return this._soundsMusic
            }
        }), Object.defineProperty(n.prototype, "soundsVO", {
            get: function() {
                return this._soundsVO
            }
        })
    }, {
        "./../utils/Device": 54,
        "./../utils/Utils": 58
    }],
    9: [function(t, e) {
        var i = t("./../Canvas"),
            n = t("./../audio/AudioManager"),
            s = function(t) {
                return this.signalClose = new signals.Signal, this.signalExit = new signals.Signal, this.signalInstructions = new signals.Signal, this.signalHome = new signals.Signal, this.signalMute = new signals.Signal, this.signalPause = new signals.Signal, this.buttonDimensions = {
                    x: 64,
                    y: 64
                }, this.muteBtn = null, this.homeBtn = null, this.exitBtn = null, this.instructionsBtn = null, this.pauseBtn = null, this.closeBtn = null, this._screenHomeBtns = [], this._screenMenuBtns = [], this._screenPauseBtns = [], this._screenInstructionsBtns = [], this._screenGameBtns = [], this._screenGameOverBtns = [], this._screenCurrentBtns = [], this._screenPreviousBtns = [], this._wrapperDiv = document.getElementById(t), this._gelRootDiv = document.getElementById("p3gel"), this._gelRootDiv ? (this._gelRootDiv.style.display = "none", this._gelRootDiv.style.zIndex = s.Z_INDEX, void(window.TweenLite || console.log("[P3Gel] You do not have TweenLite which may be needed."))) : void console.warn("[BBCGel] There is no 'p3gel' div on the page.")
            };
        e.exports = s, s.Z_INDEX = 100, s.FADE_IN_DURATION = .3, s.FADE_OUT_DURATION = .2, s.DISABLE_ANIMATIONS = !1, s.prototype.enable = function(t) {
            this._gelRootDiv.style.display = t ? "block" : "none"
        }, s.prototype.initBtnClose = function(t) {
            return t = this._checkParams(t), this.closeBtn = document.getElementById("p3gel_close_button"), this.closeBtn ? (this.closeBtn.style.opacity = 1, void this._addButton(this.closeBtn, this._onCloseClick, t)) : void console.warn("[BBCGel] There is no 'close' button div.")
        }, s.prototype.initBtnExit = function(t) {
            return t = this._checkParams(t), this.exitBtn = document.getElementById("p3gel_exit_button"), this.exitBtn ? (this.exitBtn.style.opacity = 1, void this._addButton(this.exitBtn, this._onExitClick, t)) : void console.warn("[BBCGel] There is no 'exit' button div.")
        }, s.prototype.initBtnInstructions = function(t) {
            return t = this._checkParams(t), this.instructionsBtn = document.getElementById("p3gel_instructions_button"), this.instructionsBtn ? (this.instructionsBtn.style.opacity = 1, void this._addButton(this.instructionsBtn, this._onInstructionsClick, t)) : void console.warn("[BBCGel] There is no 'instructions' button div.")
        }, s.prototype.initBtnHome = function(t) {
            return t = this._checkParams(t), this.homeBtn = document.getElementById("p3gel_home_button"), this.homeBtn ? (this.homeBtn.style.opacity = 1, void this._addButton(this.homeBtn, this._onHomeClick, t)) : void console.warn("[BBCGel] There is no 'home' button div.")
        }, s.prototype.initBtnMute = function(t) {
            return t = this._checkParams(t), this.muteBtn = document.getElementById("p3gel_mute_button"), this.muteBtn ? (this.muteBtn.style.opacity = 1, t.isToggle = !0, this._addButton(this.muteBtn, this._onMuteClick, t), this.muteBtn.state = n.instance.isMute ? 2 : 0, void this._onMouseOut(this.muteBtn, null)) : void console.warn("[BBCGel] There is no 'mute' button div.")
        }, s.prototype.initBtnPause = function(t) {
            return t = this._checkParams(t), this.pauseBtn = document.getElementById("p3gel_pause_button"), this.pauseBtn ? (this.pauseBtn.style.opacity = 1, void this._addButton(this.pauseBtn, this._onPauseClick, t)) : void console.warn("[BBCGel] There is no 'pause' button div.")
        }, s.prototype.initScreenHome = function(t) {
            Array.isArray(t) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenHomeBtns = t
        }, s.prototype.initScreenMenu = function(t) {
            Array.isArray(t) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenMenuBtns = t
        }, s.prototype.initScreenPause = function(t) {
            Array.isArray(t) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenPauseBtns = t
        }, s.prototype.initScreenInstructions = function(t) {
            Array.isArray(t) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenInstructionsBtns = t
        }, s.prototype.initScreenGame = function(t) {
            Array.isArray(t) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenGameBtns = t
        }, s.prototype.initScreenGameOver = function(t) {
            Array.isArray(t) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenGameOverBtns = t
        }, s.prototype.showButton = function(t, e, i) {
            t && this._tweenIn(t, e, i)
        }, s.prototype.hideButton = function(t, e, i) {
            t && this._tweenOut(t, e, i)
        }, s.prototype.hideAllButtons = function(t, e) {
            t = t || 0, this.closeBtn && this._tweenOut(this.closeBtn, t, e), this.exitBtn && this._tweenOut(this.exitBtn, t, e), this.muteBtn && this._tweenOut(this.muteBtn, t, e), this.instructionsBtn && this._tweenOut(this.instructionsBtn, t, e), this.homeBtn && this._tweenOut(this.homeBtn, t, e), this.pauseBtn && this._tweenOut(this.pauseBtn, t, e)
        }, s.prototype.toggleVisibility = function(t) {
            this._gelRootDiv || console.warn("[P3Gel] root node has not been set."), this._gelRootDiv.style.display = t ? "block" : "none"
        }, s.prototype.showLayoutHome = function(t, e) {
            this._showScreenButtons(this._screenHomeBtns, t, e)
        }, s.prototype.showLayoutMenu = function(t, e) {
            this._showScreenButtons(this._screenMenuBtns, t, e)
        }, s.prototype.showLayoutPause = function(t, e) {
            this._showScreenButtons(this._screenPauseBtns, t, e)
        }, s.prototype.showLayoutInstructions = function(t, e) {
            this._showScreenButtons(this._screenInstructionsBtns, t, e)
        }, s.prototype.showLayoutGame = function(t, e) {
            this._showScreenButtons(this._screenGameBtns, t, e)
        }, s.prototype.showLayoutGameOver = function(t, e) {
            this._showScreenButtons(this._screenGameOverBtns, t, e)
        }, s.prototype.showLayoutPrevious = function(t, e) {
            this._showScreenButtons(this._screenPreviousBtns, t, e)
        }, s.prototype._checkParams = function(t) {
            return t = t || {}, t.soundClickSFX = t.soundClickSFX, t.soundClickVO = t.soundClickVO, t.soundOverSFX = t.soundOverSFX, t.soundOverVO = t.soundOverVO, t.isToggle = t.isToggle, t
        }, s.prototype._addButton = function(t, e, s) {
            t.clickCallback = e, t.scope = this, t.isToggle = s.isToggle, t.state = 0;
            var o = this;
            i.isMobile() ? (t.ontouchstart = function(t) {
                o._onMouseOver(this, t), s.soundOverSFX && n.instance.playSound(s.soundOverSFX), s.soundOverVO && n.instance.playVO(s.soundOverVO)
            }, t.ontouchmove = function(t) {
                o._onTouchMove(this, t)
            }, t.ontouchend = function(t) {
                o._onMouseUp(this, t), s.soundClickSFX && n.instance.playSound(s.soundClickVO), s.soundClickVO && n.instance.playVO(s.soundClickVO)
            }) : (t.onmouseover = function(t) {
                o._onMouseOver(this, t), s.soundOverSFX && n.instance.playSound(s.soundOverSFX), s.soundOverVO && n.instance.playVO(s.soundOverVO)
            }, t.onmouseout = function(t) {
                o._onMouseOut(this, t)
            }, t.onmousedown = function(t) {
                o._onMouseOver(this, t)
            }, t.onmouseup = function(t) {
                o._onMouseUp(this, t), s.soundClickSFX && n.instance.playSound(s.soundClickVO), s.soundClickVO && n.instance.playVO(s.soundClickVO)
            }), this.hideButton(t, 0, 0)
        }, s.prototype._showScreenButtons = function(t, e, i) {
            this.hideAllButtons();
            for (var n = 0; n < t.length; n += 1) {
                var s = t[n];
                this._tweenIn(s, e, i)
            }
            this._screenPreviousBtns = this._screenCurrenBtns, this._screenCurrenBtns = t
        }, s.prototype._tweenIn = function(t, e, i) {
            t && (e = e || 0, s.DISABLE_ANIMATIONS ? (t.style.display = "block", t.style.opacity = 1) : setTimeout(function() {
                t.style.opacity = 0, t.style.display = "block", i ? (TweenLite.killTweensOf(t.style), TweenLite.to(t.style, s.FADE_IN_DURATION, {
                    opacity: 1,
                    ease: Power2.easeOut
                })) : (t.style.display = "block", t.style.opacity = 1)
            }, 1e3 * e))
        }, s.prototype._tweenOut = function(t, e, i) {
            t && (e = e || 0, s.DISABLE_ANIMATIONS ? (t.style.opacity = 0, t.style.display = "none") : setTimeout(function() {
                t.style.opacity = 0, t.style.display = "none", i ? TweenLite.to(t.style, s.FADE_OUT_DURATION, {
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        t.style.display = "none"
                    }
                }) : (t.style.opacity = 0, t.style.display = "none")
            }, 1e3 * e))
        }, s.prototype._onTouchMove = function(t, e) {
            e.preventDefault()
        }, s.prototype._onMouseOver = function(t) {
            var e = (t.state + 1) * this.buttonDimensions.y;
            t.style.backgroundPosition = "0px -" + e + "px"
        }, s.prototype._onMouseOut = function(t) {
            var e = t.state * this.buttonDimensions.y;
            t.style.backgroundPosition = "0px -" + e + "px"
        }, s.prototype._onMouseUp = function(t) {
            var e = n.instance.isMute;
            t.isToggle && (t.state = e ? 0 : 2), this._onMouseOut(t, null), t.clickCallback.call(t.scope)
        }, s.prototype._onMuteClick = function() {
            n.instance.toggleMute(), this.signalMute.dispatch()
        }, s.prototype._onHomeClick = function() {
            this.signalHome.dispatch()
        }, s.prototype._onExitClick = function() {
            this.signalExit.dispatch()
        }, s.prototype._onInstructionsClick = function() {
            this.signalInstructions.dispatch()
        }, s.prototype._onPauseClick = function() {
            this.signalPause.dispatch()
        }, s.prototype._onCloseClick = function() {
            this.signalClose.dispatch()
        }
    }, {
        "./../Canvas": 3,
        "./../audio/AudioManager": 8
    }],
    10: [function(t, e) {
        var i = function(t, e, i, n) {
            this.blendStrength = e || 0, this.blendColor = i || 16777215, this._blendPasses = Math.max(1, n) || 2, PIXI.Sprite.call(this, t)
        };
        e.exports = i, i.prototype = Object.create(PIXI.Sprite.prototype), i.prototype.constructor = i, i.prototype._renderWebGL = function(t) {
            if (t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this), this.blendStrength > 0) {
                t.plugins.sprite.flush();
                var e = this.worldAlpha,
                    i = this.tint;
                this.worldAlpha = e * this.blendStrength, this.blendMode = PIXI.BLEND_MODES.ADD, this.tint = this.blendColor;
                for (var n = 0; n < this._blendPasses; ++n) t.plugins.sprite.render(this);
                t.plugins.sprite.flush(), this.worldAlpha = e, this.blendMode = PIXI.BLEND_MODES.NORMAL, this.tint = i
            }
        }, Object.defineProperty(i.prototype, "blendPasses", {
            get: function() {
                return this._blendPasses
            },
            set: function(t) {
                this._blendPasses = Math.max(1, t)
            }
        })
    }, {}],
    11: [function(t, e) {
        function i(t, e, i, n, s, o, r, a) {
            this.animate = !1, this.defaultScale = new PIXI.Point(1, 1), this.animateOverScale = new PIXI.Point(1.1, 1.1), this.animateDownScale = new PIXI.Point(.9, .9), this.upSoundName = null, this.overSoundName = null, this.downSoundName = null, this.clickSoundName = null, this.signals = {}, this.signals.down = new signals.Signal, this.signals.up = new signals.Signal, this.signals.over = new signals.Signal, this.signals.out = new signals.Signal, this.signals.click = new signals.Signal, this.signals.animate = new signals.Signal, this._background = new PIXI.Sprite(t), this._icon = new PIXI.Sprite(n || PIXI.Texture.empty), this._normalTexture = t, this._overTexture = e, this._downTexture = i, this._iconTexture = n, this._normalInactiveTexture = s, this._overInactiveTexture = o, this._downInactiveTexture = r, this._iconInactiveTexture = a, this._currentNormalTexture = this._normalTexture, this._currentOverTexture = this._overTexture, this._currentDownTexture = this._downTexture, this._currentIconTexture = this._iconTexture, this._tweenOver = null, this._tweenOut = null, this._tweenDown = null, this._enabled = !0, PIXI.Container.call(this, this._normalTexture), this.interactive = !0, this.buttonMode = !0, this.mousedown = this.touchstart = this.onMouseDown.bind(this), this.mouseup = this.touchend = this.onMouseUp.bind(this), this.mouseupoutside = this.touchendoutside = this.onMouseOut.bind(this), this.click = this.tap = this.onMouseClick.bind(this), this.mouseover = this.onMouseOver.bind(this), this.mouseout = this.onMouseOut.bind(this), this._background.anchor = new PIXI.Point(.5, .5), this.addChild(this._background), this._icon.anchor = new PIXI.Point(.5, .5), this.addChild(this._icon)
        }
        var n = t("./../utils/Device");
        e.exports = i, i.prototype = Object.create(PIXI.Container.prototype), i.prototype.constructor = i, i.audio = null, i.prototype.init = function() {}, i.prototype.dispose = function() {
            TweenMax.killTweensOf(this), TweenMax.killTweensOf(this.scale), this.removeChildren(), this.signals.up.dispose(), this.signals.down.dispose(), this.signals.over.dispose(), this.signals.out.dispose(), this.signals.click.dispose(), this.signals.animate.dispose()
        }, i.prototype.onMouseDown = function(t) {
            if (this.downTexture && (this._background.texture = this._currentDownTexture), this.animate) {
                var e = TweenMax.getTweensOf(this, !0),
                    n = e.indexOf(this._tweenOver) > -1 ? e.length - 1 : e.length;
                n || (this._tweenOver && (this._tweenOver.kill(), this._tweenOver = null), this._tweenDown = this.animateDown())
            }
            i.audio && this.downSoundName && i.audio.playSound(this.downSoundName), this._enabled && this.signals.down.dispatch(this, t)
        }, i.prototype.onMouseUp = function(t) {
            this._background.texture = this.overTexture && !p3.Device.isMobile ? this._currentOverTexture : this._currentNormalTexture, this.animate && this._tweenDown && (this._tweenDown && (this._tweenDown.kill(), this._tweenDown = null), this._tweenOver = p3.Device.isMobile ? this.animateOut() : this.animateOver()), i.audio && this.upSoundName && i.audio.playSound(this.upSoundName), this._enabled && this.signals.up.dispatch(this, t)
        }, i.prototype.onMouseOver = function(t) {
            if (this.overTexture && (this._background.texture = this._currentOverTexture), this.animate && !n.isMobile) {
                var e = TweenMax.getTweensOf(this, !0); - 1 == e.indexOf(this._tweenOver) && (this._tweenOut && (this._tweenOut.kill(), this._tweenOut = null), this._tweenOver = this.animateOver())
            }
            i.audio && this.overSoundName && i.audio.playSound(this.overSoundName), this._enabled && this.signals.over.dispatch(this, t)
        }, i.prototype.onMouseOut = function(t) {
            if (this._background.texture = this._currentNormalTexture, this._tweenOver || this._tweenDown) {
                var e = TweenMax.getTweensOf(this, !0); - 1 == e.indexOf(this._tweenOut) && (this._tweenOver && (this._tweenOver.kill(), this._tweenOver = null), this._tweenOut = this.animateOut()), -1 == e.indexOf(this._tweenDown) && (this._tweenDown && (this._tweenDown.kill(), this._tweenDown = null), this._tweenOut = this.animateOut())
            }
            i.audio && this.upSoundName && i.audio.playSound(this.upSoundName), this._enabled && this.signals.out.dispatch(this, t)
        }, i.prototype.onMouseClick = function(t) {
            i.audio && this.clickSoundName && i.audio.playSound(this.clickSoundName), this._enabled && this.signals.click.dispatch(this, t)
        }, i.prototype.animateOver = function() {
            return TweenMax.to(this.scale, .6, {
                x: this.defaultScale.x * this.animateOverScale.x,
                y: this.defaultScale.y * this.animateOverScale.y,
                ease: Elastic.easeOut,
                easeParams: [1],
                onComplete: function() {
                    this.signals.animate.dispatch(this, "over")
                },
                onCompleteScope: this
            })
        }, i.prototype.animateOut = function() {
            return TweenMax.to(this.scale, .3, {
                x: this.defaultScale.x,
                y: this.defaultScale.y,
                ease: Back.easeInOut,
                easeParams: [2],
                onComplete: function() {
                    this.signals.animate.dispatch(this, "out")
                },
                onCompleteScope: this
            })
        }, i.prototype.animateDown = function() {
            return TweenMax.to(this.scale, .14, {
                x: this.defaultScale.x * this.animateDownScale.x,
                y: this.defaultScale.y * this.animateDownScale.y,
                ease: Back.easeOut,
                easeParams: [1],
                onComplete: function() {
                    this.signals.animate.dispatch(this, "down")
                },
                onCompleteScope: this
            })
        }, Object.defineProperty(i.prototype, "normalTexture", {
            get: function() {
                return this._normalTexture
            }
        }), Object.defineProperty(i.prototype, "overTexture", {
            get: function() {
                return this._overTexture
            }
        }), Object.defineProperty(i.prototype, "downTexture", {
            get: function() {
                return this._downTexture
            }
        }), Object.defineProperty(i.prototype, "iconTexture", {
            get: function() {
                return this._iconTexture
            }
        }), Object.defineProperty(i.prototype, "normalInactiveTexture", {
            get: function() {
                return this._normalInactiveTexture
            }
        }), Object.defineProperty(i.prototype, "overInactiveTexture", {
            get: function() {
                return this._overInactiveTexture
            }
        }), Object.defineProperty(i.prototype, "downInactiveTexture", {
            get: function() {
                return this._downInactiveTexture
            }
        }), Object.defineProperty(i.prototype, "iconInactiveTexture", {
            get: function() {
                return this._iconInactiveTexture
            }
        }), Object.defineProperty(i.prototype, "currentNormalTexture", {
            get: function() {
                return this._currentNormalTexture
            }
        }), Object.defineProperty(i.prototype, "currentOverTexture", {
            get: function() {
                return this._currentOverTexture
            }
        }), Object.defineProperty(i.prototype, "currentDownTexture", {
            get: function() {
                return this._currentDownTexture
            }
        }), Object.defineProperty(i.prototype, "currentIconTexture", {
            get: function() {
                return this._currentIconTexture
            }
        }), Object.defineProperty(i.prototype, "enabled", {
            get: function() {
                return this._enabled
            },
            set: function(t) {
                this._enabled = t, this._currentNormalTexture = t || !this._normalInactiveTexture ? this._normalTexture : this._normalInactiveTexture, this._currentOverTexture = t || !this._overInactiveTexture ? this._overTexture : this._overInactiveTexture, this._currentDownTexture = t || !this._downInactiveTexture ? this._downTexture : this._downInactiveTexture, this._currentIconTexture = t || !this._iconInactiveTexture ? this._iconTexture : this._iconInactiveTexture, this._currentNormalTexture && (this._background.texture = this._currentNormalTexture), this._currentIconTexture && (this._icon.texture = this._currentIconTexture)
            }
        }), Object.defineProperty(i.prototype, "tint", {
            get: function() {
                return this._background.tint
            },
            set: function(t) {
                this._background.tint = t, this._icon.tint = t
            }
        })
    }, {
        "./../utils/Device": 54
    }],
    12: [function(t, e) {
        function i(t, e) {
            this.defaultAnimation = e || "default", this.animationSpeed = 24, this.playing = !1, this.looping = !1, this.signals = {}, this.signals.animation = new signals.Signal, this.signals.animationComplete = new signals.Signal, this._frames = {}, this._currentFrame = 0, this._lastFrame = 0, this._currentAnimationName = this.defaultAnimation;
            var i = t.textures[this.defaultAnimation] ? t.textures[this.defaultAnimation][0] : PIXI.Texture.EMPTY;
            if (!i) throw Error("No default texture found!");
            for (var s in t.textures)
                if (t.textures.hasOwnProperty(s)) {
                    this._frames[s] = [];
                    for (var o = 0; o < t.textures[s].length; ++o) this._frames[s].push({
                        texture: t.textures[s][o],
                        callback: null,
                        scope: null
                    })
                }
            n.call(this, i)
        } {
            var n = (t("./../AssetManager"), t("./AdditiveSprite"));
            t("./MovieClipSequence"), t("./../utils/Utils")
        }
        e.exports = i, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.prototype.dispose = function() {
            this.signals.animation.dispose(), this.signals.animationComplete.dispose()
        }, i.prototype.play = function(t) {
            "boolean" == typeof t && (this.looping = t), this.playing = !0
        }, i.prototype.stop = function(t) {
            "boolean" == typeof t && (this.looping = t), this.playing = !1
        }, i.prototype.gotoAndPlay = function(t, e) {
            "string" != typeof t ? this._currentFrame = this._lastFrame = t : this._frames[t] && (this._currentFrame = this._lastFrame = 0, this._currentAnimationName = t), "boolean" == typeof e && (this.looping = e), this.playing = !0
        }, i.prototype.gotoAndStop = function(t, e) {
            "string" != typeof t ? this._currentFrame = t : this._frames[t] && (this._currentFrame = 0, this._currentAnimationName = t), "boolean" == typeof e && (this.looping = e), this.playing = !1;
            var i = this._frames[this._currentAnimationName],
                n = this._currentFrame + .5 | 0;
            this.texture = i[n % i.length].texture
        }, i.prototype.addFrameScript = function(t, e, i, n) {
            n = n || window, this._frames[t] && (this._frames[t][e].callback = i, this._frames[t][e].scope = i ? n : null)
        }, i.prototype.updateTransform = function() {
            if (PIXI.Sprite.prototype.updateTransform.call(this), this.playing && this.totalFrames) {
                this._currentFrame += this.animationSpeed * p3.Timestep.deltaTime;
                var t = this._frames[this._currentAnimationName],
                    e = this._currentFrame + .5 | 0,
                    i = e % (t.length + 1);
                this._currentFrame = this._currentFrame % t.length, i > 0 && i != this._lastFrame && (this._lastFrame = i, t[i - 1].callback && setTimeout(function() {
                    t[i - 1].callback.call(t[i - 1].scope)
                }, 0)), this.looping || e < t.length ? (this.texture = t[e % t.length].texture, e < t.length - 1 || p3.Timestep.queueCall(this.signals.animation.dispatch, [this._currentAnimationName])) : e < t.length - 1 || (this.gotoAndStop(t.length - 1), p3.Timestep.queueCall(this.signals.animationComplete.dispatch, [this._currentAnimationName]))
            }
        }, Object.defineProperty(i.prototype, "currentFrame", {
            get: function() {
                return this._currentFrame
            }
        }), Object.defineProperty(i.prototype, "currentAnimationFrame", {
            get: function() {
                return this._currentAnimationName
            }
        }), Object.defineProperty(i.prototype, "totalFrames", {
            get: function() {
                var t = this._frames[this.defaultAnimation];
                return t ? t.length : 0
            }
        })
    }, {
        "./../AssetManager": 2,
        "./../utils/Utils": 58,
        "./AdditiveSprite": 10,
        "./MovieClipSequence": 13
    }],
    13: [function(t, e) {
        function i(t, e) {
            this.textures = {}, t && this.addTextures(t, e)
        }
        e.exports = i, i.prototype.addTextures = function(t, e) {
            e = e || "default", this.textures[e] = t
        }, i.prototype.removeTextures = function(t) {
            t = t || "default", this.textures[t] = null
        }, i.prototype.removeAllTextures = function() {
            this.textures = {}
        }
    }, {}],
    14: [function(t, e) {
        function i(t, e, i, s, o, r, a, h, l, c) {
            this._onIconTexture = s, this._offIconTexture = o, this._onIconInactiveTexture = l, this._offIconInactiveTexture = c, n.call(this, t, e, i, this.isEnabled() ? this._onIconTexture : this._offIconTexture, r, a, h, this.isEnabled() ? this._onIconInactiveTexture : this._offIconInactiveTexture)
        }
        var n = t("./Button");
        e.exports = i, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.prototype.onMouseDown = function(t) {
            this._enabled = !this._enabled, this._currentIconTexture = this.isEnabled() ? this._offIconTexture : this._onIconTexture, this._icon.texture = this._currentIconTexture, n.audio.mute(!n.audio.isMuted), n.prototype.onMouseDown.call(this, t)
        }, i.prototype.isEnabled = function() {
            return !n.audio.isMuted
        }
    }, {
        "./Button": 11
    }],
    15: [function(t, e) {
        function i(t, e, i, s, o, r) {
            this._enabled = !1, this._onNormalTexture = t, this._offNormalTexture = e, this._onOverTexture = i, this._offOverTexture = s, this._onDownTexture = o, this._offDownTexture = r, this._normalTexture = this.isEnabled() ? t : e, this._overTexture = this.isEnabled() ? i : s, this._downTexture = this.isEnabled() ? o : r, n.call(this, this._normalTexture, this._overTexture, this._downTexture)
        }
        var n = t("./Button");
        e.exports = i, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.prototype.onMouseDown = function(t) {
            this._enabled = !this._enabled, this._normalTexture = this.isEnabled() ? this._onNormalTexture : this._offNormalTexture, this._overTexture = this.isEnabled() ? this._onOverTexture : this._offOverTexture, this._downTexture = this.isEnabled() ? this._onDownTexture : this._offDownTexture, n.prototype.onMouseDown.call(this, t)
        }, i.prototype.isEnabled = function() {
            return this._enabled
        }
    }, {
        "./Button": 11
    }],
    16: [function(t, e) {
        var i = function(t) {
            PIXI.Sprite.call(this, t), this.currentTime = 0, this.totalTime = 0, this.position = new PIXI.Point, this.scale = new PIXI.Point, this.start = new PIXI.Point, this.velocity = new PIXI.Point, this.alpha = 0, this.rotation = 0, this.radialAcceleration = 0, this.tangentialAcceleration = 0, this.emitRadius = 0, this.emitRadiusDelta = 0, this.emitRotation = 0, this.emitRotationDelta = 0, this.rotationDelta = 0, this.scaleDelta = 0, this.renderDepth = 0, this.alphaDelta = 0, this.active = !1, this.anchor.x = .5, this.anchor.y = .5
        };
        e.exports = i, i.prototype = Object.create(PIXI.Sprite.prototype), i.prototype.constructor = i, i.VERSION = "1.0.0"
    }, {}],
    17: [function(t, e) {
        var i = t("./../../AssetManager"),
            n = t("./Particle"),
            s = t("./../../Timestep"),
            o = function(t, e, i, n) {
                if (n = "boolean" == typeof n ? n : !0, PIXI.Container.call(this), this.signalCompleted = new signals.Signal, this.emitterType = o.EMITTER_TYPE_GRAVITY, this.emitter = new PIXI.Point, this.emitterVariance = new PIXI.Point, this.gravity = new PIXI.Point, this.lifespanVariance = 0, this.startSize = 0, this.startSizeVariance = 0, this.endSize = 0, this.endSizeVariance = 0, this.emitAngle = 0, this.emitAngleVariance = 0, this.startRotation = 0, this.startRotationVariance = 0, this.speedMax = 0, this.speedVariance = 0, this.endRotation = 0, this.endRotationVariance = 0, this.radialAcceleration = 0, this.radialAccelerationVariance = 0, this.tangentialAcceleration = 0, this.tangentialAccelerationVariance = 0, this.maxRadius = 0, this.maxRadiusVariance = 0, this.minRadius = 0, this.rotatePerSecond = 0, this.rotatePerSecondVariance = 0, this.startAlpha = 0, this.startAlphaVariance = 0, this.endAlpha = 0, this.endAlphaVariance = 0, this.removeOnComplete = !0, this.onTop = n, this._textures = void 0 == t.length ? [t] : t, this._particles = [], this._frameTime = 0, this._numParticles = 0, this._maxCapacity = 0, this._emissionRate = 0, this._emissionTime = 0, this._maxNumParticles = 0, this._lifespan = 0, this._forceAngle = i, this._running = !1, this._tint = 16777215, "string" == typeof this._textures[0]) throw Error("[ParticleSystem] You are passing in strings for the textures instead of actual textures.");
                this._parseConfig(e), this._updateEmissionRate(), o.enabled && (this.maxCapacity = this._maxNumParticles ? this._maxNumParticles : 8192, this._raiseCapacity(this._maxNumParticles || 32))
            };
        e.exports = o, o.prototype = Object.create(PIXI.Container.prototype), o.prototype.constructor = o, o.VERSION = "3.0.0", o.EMITTER_TYPE_GRAVITY = 0, o.EMITTER_TYPE_RADIAL = 1, o.enabled = !0, o.prototype.start = function(t) {
            o.enabled && (t = t || Number.MAX_VALUE, 0 != this._emissionRate && (this._emissionTime = t), this.running = !0)
        }, o.prototype.stop = function() {
            o.enabled && (this._emissionTime = 0, this._numParticles = 0, this.running = !1)
        }, o.prototype.pause = function() {
            o.enabled && (this._emissionTime = 0, this.running = !1)
        }, o.prototype.reset = function() {
            if (o.enabled) {
                for (var t = 0; t < this._numParticles; ++t) this._disposeParticle(this._particles[t]);
                this._particles.length = 0, this.maxCapacity = 0, this._numParticles = 0, this.stop()
            }
        }, o.prototype.oneShot = function() {
            if (o.enabled) {
                this.stop();
                for (var t = null, e = 0; e < this._numParticles; ++e) this._disposeParticle(this._particles[e]);
                for (e = 0; e < this.maxCapacity; ++e) this._numParticles == this.capacity && this._raiseCapacity(this.capacity), t = this._particles[this._numParticles++], this._initParticle(t)
            }
        }, o.prototype.simulate = function(t) {
            if (o.enabled) {
                t = t || 1e3;
                for (var e = 0; t > e; ++e) this.advance(s.deltaTime)
            }
        }, o.prototype.advance = function(t) {
            if (o.enabled) {
                for (var e = 0, i = null; e < this._numParticles;)
                    if (i = this._particles[e], i.currentTime < i.totalTime) this._advanceParticle(i, t), ++e;
                    else {
                        if (e != this._numParticles - 1) {
                            var n = this._particles[this._numParticles - 1];
                            this._particles[this._numParticles - 1] = i, this._particles[e] = n
                        }--this._numParticles, this._disposeParticle(i), 0 == this._numParticles && (this.signalCompleted.dispatch(this), this.removeOnComplete && (this.parent && this.parent.removeChild(this.parent), this.dispose()))
                    }
                if (this._emissionTime > 0) {
                    var s = 1 / this._emissionRate;
                    for (this._frameTime += t; this._frameTime > 0;) this._numParticles < this.maxCapacity && (this._numParticles == this.capacity && this._raiseCapacity(this.capacity), i = this._particles[this._numParticles++], this._initParticle(i), this._advanceParticle(i, t)), this._frameTime -= s;
                    this._emissionTime != Number.MAX_VALUE && (this._emissionTime = Math.max(0, this._emissionTime - t))
                }
            }
        }, o.prototype.dispose = function() {
            this.signalCompleted.dispose(), this._textures.length = 0, this._particles.length = 0, this.removeChildren()
        }, o.prototype.update = function() {
            this.advance(s.deltaTime)
        }, o.prototype._initParticle = function(t) {
            var e = this._lifespan + this.lifespanVariance * (2 * Math.random() - 1);
            if (e > 0) {
                var n = Math.floor(Math.random() * this._textures.length),
                    s = this._textures[n];
                t.texture = s, t.currentTime = 0, t.totalTime = e, t.active = !0, t.position.x = this.emitter.x + this.emitterVariance.x * (2 * Math.random() - 1), t.position.y = this.emitter.y + this.emitterVariance.y * (2 * Math.random() - 1), t.start.x = this.emitter.x, t.start.y = this.emitter.y;
                var o = this.emitAngle + this.emitAngleVariance * (2 * Math.random() - 1),
                    r = this.speedMax + this.speedVariance * (2 * Math.random() - 1);
                t.velocity.x = r * Math.cos(o), t.velocity.y = r * Math.sin(o), t.emitRadius = this.maxRadius + this.maxRadiusVariance * (2 * Math.random() - 1), t.emitRadiusDelta = this.maxRadius / e, t.emitRotation = this.emitAngle + this.emitAngleVariance * (2 * Math.random() - 1), t.emitRotationDelta = this.rotatePerSecond + this.rotatePerSecondVariance * (2 * Math.random() - 1), t.radialAcceleration = this.radialAcceleration + this.radialAccelerationVariance * (2 * Math.random() - 1), t.tangentialAcceleration = this.tangentialAcceleration + this.tangentialAccelerationVariance * (2 * Math.random() - 1);
                var a = this.startSize + this.startSizeVariance * (2 * Math.random() - 1),
                    h = this.endSize + this.endSizeVariance * (2 * Math.random() - 1);
                if (a = Math.max(.1, a), h = Math.max(.1, h), t.scale.x = t.scale.y = a / s.width * i.instance.scaleFactor, t.scaleDelta = (h - a) / e / s.width, this._forceAngle) t.rotation = o + 1.57079637, t.rotationDelta = 0;
                else {
                    var l = this.startRotation + this.startRotationVariance * (2 * Math.random() - 1),
                        c = this.endRotation + this.endRotationVariance * (2 * Math.random() - 1);
                    t.rotation = l, t.rotationDelta = (c - l) / e
                }
                var u = this.startAlpha,
                    p = this.endAlpha;
                0 != this.startAlphaVariance && (u += this.startAlphaVariance * (2 * Math.random() - 1)), 0 != this.endAlphaVariance && (p += this.endAlphaVariance * (2 * Math.random() - 1)), t.alpha = u, t.alphaDelta = (p - u) / e, t.tint = this._tint, this.onTop ? this.addChild(t) : this.addChildAt(t, 0)
            }
        }, o.prototype._disposeParticle = function(t) {
            t.active = !1, this.removeChild(t)
        }, o.prototype._advanceParticle = function(t, e) {
            var i = t.totalTime - t.currentTime;
            if (e = i > e ? e : i, t.currentTime += e, this.emitterType == o.EMITTER_TYPE_RADIAL) t.emitRotation += t.emitRotationDelta * e, t.emitRadius -= t.emitRadiusDelta * e, t.position.x = this.emitter.x - Math.cos(t.emitRotation) * t.emitRadius, t.position.y = this.emitter.y - Math.sin(t.emitRotation) * t.emitRadius, t.emitRadius < this.minRadius && (t.currentTime = t.totalTime);
            else if (this.emitterType == o.EMITTER_TYPE_GRAVITY) {
                var n = t.position.x - t.start.x,
                    s = t.position.y - t.start.y,
                    r = Math.sqrt(n * n + s * s);
                r = Math.max(.01, r);
                var a = n / r,
                    h = s / r,
                    l = a,
                    c = h;
                a *= t.radialAcceleration, h *= t.radialAcceleration, l = -c * t.tangentialAcceleration, c = l * t.tangentialAcceleration, t.velocity.x += e * (this.gravity.x + a + l), t.velocity.y += e * (this.gravity.y + h + c), t.position.x += t.velocity.x * e, t.position.y += t.velocity.y * e
            }
            t.scale.x = t.scale.y = t.scale.x + t.scaleDelta * e, t.alpha += t.alphaDelta * e, this._forceAngle || (t.rotation += .017453293 * t.rotationDelta * e)
        }, o.prototype._updateEmissionRate = function() {
            this._emissionRate = this._maxNumParticles / this._lifespan
        }, o.prototype._parseConfig = function(t) {
            if (void 0 == t) throw Error("Config is invalid!");
            var e = .017453293;
            this.emitterVariance.x = t.sourcePositionVariancex, this.emitterVariance.y = t.sourcePositionVariancey, this.gravity.x = t.gravityx, this.gravity.y = t.gravityy, this.emitterType = t.emitterType, this.maxNumParticles = t.maxParticles, this.lifeSpan = t.particleLifespan, this.lifespanVariance = t.particleLifespanVariance, this.startSize = t.startParticleSize, this.startSizeVariance = t.startParticleSizeVariance, this.endSize = t.finishParticleSize, this.endSizeVariance = t.finishParticleSizeVariance, this.emitAngle = -t.angle * e, this.emitAngleVariance = t.angleVariance * e, this.startRotation = t.rotationStart, this.startRotationVariance = t.rotationStartVariance, this.endRotation = t.rotationEnd, this.endRotationVariance = t.rotationEndVariance, this.speedMax = t.speed, this.speedVariance = t.speedVariance, this.radialAcceleration = t.radialAcceleration, this.radialAccelerationVariance = t.radialAccelVariance, this.tangentialAcceleration = t.tangentialAcceleration, this.tangentialAccelerationVariance = t.tangentialAccelVariance, this.maxRadius = t.maxRadius, this.maxRadiusVariance = t.maxRadiusVariance, this.minRadius = t.minRadius, this.rotatePerSecond = t.rotatePerSecond * e, this.rotatePerSecondVariance = t.rotatePerSecondVariance * e, this.startAlpha = t.startColorAlpha, this.startAlphaVariance = t.startColorVarianceAlpha, this.endAlpha = t.finishColorAlpha, this.endAlphaVariance = t.finishColorVarianceAlpha
        }, o.prototype._raiseCapacity = function(t) {
            for (var e = this.capacity, i = Math.min(this.maxCapacity, e + t), s = e; i > s; ++s) this._particles[s] = new n(this._textures[0])
        }, Object.defineProperty(o.prototype, "capacity", {
            get: function() {
                return this._particles.length
            }
        }), Object.defineProperty(o.prototype, "maxCapacity", {
            get: function() {
                return this._maxCapacity
            },
            set: function(t) {
                this._maxCapacity = Math.min(8192, t)
            }
        }), Object.defineProperty(o.prototype, "maxNumParticles", {
            get: function() {
                return this._maxNumParticles
            },
            set: function(t) {
                this.maxCapacity = t, this._maxNumParticles = this.maxCapacity, this._updateEmissionRate()
            }
        }), Object.defineProperty(o.prototype, "lifeSpan", {
            get: function() {
                return this._lifespan
            },
            set: function(t) {
                this._lifespan = Math.max(.01, t), this._updateEmissionRate()
            }
        }), Object.defineProperty(o.prototype, "running", {
            get: function() {
                return this._running
            }
        }), Object.defineProperty(o.prototype, "tint", {
            get: function() {
                return this._tint
            },
            set: function(t) {
                this._tint = t;
                for (var e, i = 0; i < this._particles.length; ++i) e = this._particles[i], e.tint = this._tint
            }
        })
    }, {
        "./../../AssetManager": 2,
        "./../../Timestep": 5,
        "./Particle": 16
    }],
    18: [function(t, e) {
        var i = (t("./ScreenParams"), function() {
            PIXI.Container.call(this), this.guid = "", this.group = "", this.params = null
        });
        e.exports = i, i.prototype = Object.create(PIXI.Container.prototype), i.prototype.constructor = i, i.VERSION = "03.00.00", i.prototype.added = function() {}, i.prototype.activate = function() {}, i.prototype.resize = function() {}, i.prototype.dispose = function() {
            this.removeChildren(), this.guid = "", this.group = null, this.params = null
        }, i.prototype.update = function() {}
    }, {
        "./ScreenParams": 21
    }],
    19: [function(t, e) {
        var i = function(t, e) {
            PIXI.Container.call(this), this.name = t, this._depth = e, this.screenArr = []
        };
        e.exports = i, i.prototype = Object.create(PIXI.Container.prototype), i.prototype.constructor = i, i.VERSION = "03.00.00", i.prototype.getDepth = function() {
            var t = this.parent;
            return t && t.children && (this._depth = t.children.indexOf(this)), this._depth
        }, i.prototype.setDepth = function(t) {
            this._depth = t
        }
    }, {}],
    20: [function(t, e) {
        var i = t("./ScreenGroup"),
            n = (t("./Screen"), t("./ScreenParams")),
            s = (t("./transitions/Transition"), t("./../../utils/Utils")),
            o = function() {
                if (!o.__allowInstance) throw Error("ScreenManager is a Singleton, use 'instance'.");
                this.DEFAULT_GROUP = "group_default", this._view = null, this._stage = null, this._renderer = null, this._groups = {}, this._groupsArr = [], this._isTransitioning = !1
            };
        o.prototype.constructor = o, e.exports = o, o.instance = null, Object.defineProperty(o, "instance", {
            get: function() {
                return o.__instance || (o.__allowInstance = !0, o.__instance = new o, o.__allowInstance = !1), o.__instance
            }
        }), o.__instance = null, o.__allowInstance = !1, o.VERSION = "03.00.00", o.prototype.init = function(t, e) {
            this._groups = {}, this._groupsArr = [], this._stage = t, this._renderer = e, this._view = new PIXI.Container, this._stage.addChild(this._view), this.addScreenGroup(this.DEFAULT_GROUP, 0)
        }, o.prototype.addScreenGroup = function(t, e) {
            if (!this._view || !this._stage) throw Error('[ScreenManager.addScreenGroup] Error - The view/stage has not been set. Do that via "init" before adding screen groups.');
            if (this._groups[t]) throw Error("[ScreenManager.addScreenGroup] The group already exists: " + t);
            e = this._calculateDepth(e);
            var n = new i(t, e);
            return this._view.addChildAt(n, n.getDepth()), this._groups[t] = n, this._groupsArr.push(n), n
        }, o.prototype.changeScreenGroupDepth = function(t, e) {
            var i = this._groups[t];
            if (!i) throw Error("[ScreenManager.changeScreenGroupDepth] Error - The screengroup does not exist: " + t);
            var n = this._calculateDepth(e);
            this._view.addChildAt(i, n)
        }, o.prototype.removeScreenGroup = function(t) {
            var e = this._groups[t];
            if (!e) throw Error("[ScreenManager.removeScreenGroup] Error - The screengroup does not exist: " + t);
            for (var i = 0; i < e.screenArr.length; i += 1) {
                var n = e.screenArr[i];
                this._removeScreenFromGroup(null, n, e)
            }
            e.screenArr = [], e.removeChildren(), delete this._groups[t];
            var s = this._groupsArr.indexOf(e);
            this._groupsArr.splice(s, 1)
        }, o.prototype.addScreen = function(t, e) {
            if (e = e || new n, !this._groups[this.DEFAULT_GROUP]) throw Error('[ScreenManager.addScreen] Error - There is no default group. Maybe you have not yet called "init" before adding screen the screen.');
            if (!t) throw Error("[ScreenManager.addScreen] Error - The screen you are adding is null.");
            var i = e._group || this.DEFAULT_GROUP;
            if (i && !this._groups[i]) throw Error("[ScreenManager.addScreen] Error - The group does not exist: " + i);
            return t.guid = s.generateGUID(), t.group = i, t.params = e, e._transition ? this._transitionScreens(t, e._transition) : (this._doReplacements(t), this._displayScreen(t)), t
        }, o.prototype.removeScreen = function(t) {
            if (!t) throw Error("[ScreenManager.removeScreen] Error - The screen is null. " + t);
            this._removeScreenFromGroup(null, t, this.getScreenGroup(t.group))
        }, o.prototype.removeCurrentScreenFromGroup = function(t, e) {
            if (!t || !this._groups[t]) throw Error("[ScreenManager.removeCurrentScreen] Error - You must supply a valid group name: " + t);
            var i = this._groups[t],
                n = i.children.length;
            if (n > 0) {
                var s = i.getChildAt(n - 1);
                if (e) {
                    if (s !== e) this._removeScreenFromGroup(null, s, i);
                    else if (s === e) try {
                        s = i.getChildAt(n - 2), s && this._removeScreenFromGroup(null, s, i)
                    } catch (o) {}
                } else this._removeScreenFromGroup(null, s, i)
            }
        }, o.prototype.removeAllScreens = function() {
            for (var t in this._groups)
                if (this._groups.hasOwnProperty(t))
                    for (var e = this._groups[t], i = 0; i < e.screenArr.length; i++) {
                        {
                            e[i]
                        }
                        this.removeScreen(e.screenArr[i])
                    }
        }, o.prototype.dispose = function() {
            for (var t in this._groups) this._groups.hasOwnProperty(t) && this.removeScreenGroup(t);
            this._groupsArr = null, this._groups = null, this._view = null, this._stage = null, o.__instance = null
        }, o.prototype.update = function() {
            for (var t = 0, e = this._groupsArr.length; e > t; t++)
                for (var i = this._groupsArr[t], n = 0, s = i.screenArr.length; s > n; n++) i.screenArr[n].update()
        }, o.prototype.resize = function() {
            for (var t = 0, e = this._groupsArr.length; e > t; t++)
                for (var i = this._groupsArr[t], n = 0, s = i.screenArr.length; s > n; n++) i.screenArr[n].resize()
        }, o.prototype.contains = function(t) {
            var e = !1;
            for (var i in this._groups)
                if (this._groups.hasOwnProperty(i))
                    for (var n = this._groups[i], s = 0; s < n.screenArr.length; s += 1) {
                        var o = n.screenArr[s];
                        if (t === o) {
                            e = !0;
                            break
                        }
                    }
            return e
        }, o.prototype._calculateDepth = function(t) {
            var e = this.getHighestGroupDepth();
            return void 0 === t ? t = e : t > e ? t = e : 0 > t && (t = 0), t
        }, o.prototype._doReplacements = function(t) {
            var e, i, n, s, o = t.params._replaceScreens,
                r = t.params._replaceGroups;
            if (o.length > 0)
                for (e = 0; e < o.length; e += 1) {
                    if (n = o[e], t === n) throw Error("[ScreenManager.addScreen] Error - You are trying to remove the screen you are adding: " + n);
                    this.removeScreen(n)
                }
            if (t.params._replaceGroups.length > 0)
                for (e = 0; e < r.length; e += 1)
                    for (s = this._groups[r[e]], i = 0; i < s.screenArr.length; i += 1) n = s.screenArr[i], this._removeScreenFromGroup(t, n, s);
            if (t.params._replaceCurrent && this.removeCurrentScreenFromGroup(t.group, t), t.params._replaceAll)
                for (var a in this._groups)
                    if (this._groups.hasOwnProperty(a))
                        for (s = this._groups[a], e = s.screenArr.length - 1; e >= 0; e -= 1) n = s.screenArr[e], this._removeScreenFromGroup(t, n, s)
        }, o.prototype._removeScreenFromGroup = function(t, e, i) {
            if (!e) throw Error("[ScreenManager._removeScreenFromGroup] Error - The screen does not exist: " + e);
            if (!i) throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not exist: " + i.name);
            if (!i.screenArr) throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not have a valid scrennArray: " + i.name);
            if (e !== t) {
                var n = i.screenArr.indexOf(e);
                if (-1 === n) throw Error("[ScreenManager._removeScreenFromGroup] Error - The group does not contain the screen. Group=" + i.name);
                e.dispose(), e.removeChildren(), i.screenArr.splice(n, 1), i.removeChild(e)
            }
        }, o.prototype._displayScreen = function(t, e) {
            var i = this._groups[t.group];
            i.addChild(t), i.screenArr.push(t), t.added(), t.resize(), e || t.activate()
        }, o.prototype._transitionScreens = function(t, e) {
            this._isTransitioning = !0, e.signalTransitionInComplete.addOnce(this._onTransitionInComplete, this), e.signalTransitionOutComplete.addOnce(this._onTransitionOutComplete, this), e.oldScreen = this.getCurrentScreen(t.group), e.screen = t, e.onTopofAllScreens && this._view.addChild(e), e.transitionIn()
        }, o.prototype._onTransitionInComplete = function(t) {
            t.doReplacementsAtEnd || this._doReplacements(t.screen), this._displayScreen(t.screen, !0), t.transitionOut()
        }, o.prototype._onTransitionOutComplete = function(t) {
            t.doReplacementsAtEnd && this._doReplacements(t.screen), t.onTopofAllScreens && this._view.removeChild(t), this._isTransitioning = !1, t.screen.activate(), t.dispose()
        }, o.prototype.getStage = function() {
            return this._stage
        }, o.prototype.getRenderer = function() {
            return this._renderer
        }, o.prototype.getView = function() {
            return this._view
        }, o.prototype.getHighestGroupDepth = function() {
            return this._view.children.length
        }, o.prototype.getScreenGroup = function(t) {
            var e = this._groups[t];
            if (e) return e;
            throw Error("[ScreenManager.getScreenGroup] The group does not exist: " + t + ". Maybe the screen is not the correct.")
        }, o.prototype.getCurrentScreen = function(t) {
            if (!t || !this._groups[t]) throw Error("[ScreenManager.getCurrentScreen] Error - The screen group is invalid: " + t);
            var e = this._groups[t];
            return e.children.length > 0 ? e.getChildAt(e.children.length - 1) : null
        }, o.prototype.getAllScreens = function() {
            var t = [];
            for (var e in this._groups)
                if (this._groups.hasOwnProperty(e))
                    for (var i = this._groups[e], n = 0, s = i.screenArr.length; s > n; n++) {
                        var o = i.screenArr[n];
                        t.push(o)
                    }
            return t
        }, o.prototype.getAllGroups = function() {
            return this._groups
        }
    }, {
        "./../../utils/Utils": 58,
        "./Screen": 18,
        "./ScreenGroup": 19,
        "./ScreenParams": 21,
        "./transitions/Transition": 26
    }],
    21: [function(t, e) {
        var i = function() {
            this._group = "", this._replaceCurrent = !1, this._replaceAll = !1, this._replaceGroups = [], this._replaceScreens = [], this._transition = null, this.setReset()
        };
        e.exports = i;
        i.prototype;
        i.prototype.setReset = function() {
            this._group = "", this._replaceCurrent = !1, this._replaceAll = !1, this._replaceGroups = [], this._replaceScreens = [], this._transition = null
        }, i.prototype.group = function(t) {
            return this._group = t, this
        }, i.prototype.replaceCurrent = function() {
            return this._replaceCurrent = !0, this
        }, i.prototype.replaceAll = function() {
            return this._replaceAll = !0, this
        }, i.prototype.replaceGroups = function(t) {
            return this._replaceGroups = t, this
        }, i.prototype.replaceScreen = function(t) {
            return this._replaceScreens = t, this
        }, i.prototype.transition = function(t) {
            return this._transition = t, this
        }
    }, {}],
    22: [function(t, e) {
        var i = t("./Transition"),
            n = (t("./../ScreenManager"), function(t, e, n) {
                i.call(this), this.onTopofAllScreens = !1, this._duration = t || 1, this._delay = e || 0, this.transitionType = n || i.TRANSITION_IN_ONLY, this.transitionType === i.TRANSITION_IN_ONLY && (this.doReplacementsAtEnd = !0)
            });
        e.exports = n, n.prototype = Object.create(i.prototype), n.prototype.constructor = n, n.VERSION = "01.00.00", n.prototype.transitionIn = function() {
            switch (this.screen.alpha = 0, this.transitionType) {
                case i.TRANSITION_IN_ONLY:
                    this.signalTransitionInComplete.dispatch(this);
                    break;
                case i.TRANSITION_CROSS:
                    if (!this.oldScreen) throw Error("[AlphaFade] You are transitioning out but there is no oldScreen. ");
                    TweenMax.to(this.oldScreen, .5 * this._duration, {
                        delay: this._delay,
                        alpha: 0,
                        ease: Power2.easeIn,
                        onComplete: function() {
                            this.signalTransitionInComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    })
            }
        }, n.prototype.transitionOut = function() {
            switch (this.transitionType) {
                case i.TRANSITION_IN_ONLY:
                    TweenMax.to(this.screen, this._duration, {
                        delay: this._delay,
                        alpha: 1,
                        ease: Power2.easeOut,
                        onComplete: function() {
                            this.signalTransitionOutComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    });
                    break;
                case i.TRANSITION_CROSS:
                    this.screen.alpha = 0, TweenMax.to(this.screen, .5 * this._duration, {
                        delay: 0,
                        alpha: 1,
                        ease: Power1.easeOut,
                        onComplete: function() {
                            this.signalTransitionOutComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    })
            }
        }
    }, {
        "./../ScreenManager": 20,
        "./Transition": 26
    }],
    23: [function(t, e) {
        var i = t("./Transition"),
            n = t("./../ScreenManager"),
            s = function(t, e, s, o, r) {
                i.call(this), this.transitionType = r || i.TRANSITION_CROSS, this.onTopofAllScreens = !0, this._duration = t || 1, this._color = "" + e || "#000000", this._pauseTime = s || 0, this._delay = o || 0;
                var a = n.instance.getRenderer(),
                    h = new PIXI.Graphics;
                h.beginFill(this._color, 1), h.drawRect(0, 0, Math.ceil(a.width * (1 / a.resolution)), Math.ceil(a.height * (1 / a.resolution))), this._overlay = new PIXI.Sprite(h.generateTexture(a.resolution)), this._overlay.alpha = 0, this.addChild(this._overlay)
            };
        e.exports = s, s.prototype = Object.create(i.prototype), s.prototype.constructor = s, s.VERSION = "01.00.01", s.prototype.transitionIn = function() {
            switch (this.transitionType) {
                case i.TRANSITION_IN_ONLY:
                    this._overlay.alpha = 1, this.signalTransitionInComplete.dispatch(this);
                    break;
                case i.TRANSITION_CROSS:
                    this._overlay.alpha = 0, TweenMax.to(this._overlay, .5 * this._duration, {
                        delay: this._delay,
                        alpha: 1,
                        ease: Power1.easeOut,
                        onComplete: function() {
                            this.signalTransitionInComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    })
            }
        }, s.prototype.transitionOut = function() {
            switch (this.transitionType) {
                case i.TRANSITION_IN_ONLY:
                    TweenMax.to(this._overlay, this._duration, {
                        delay: this._delay + this._pauseTime,
                        alpha: 0,
                        ease: Power1.easeOut,
                        onComplete: function() {
                            this.signalTransitionOutComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    });
                    break;
                case i.TRANSITION_CROSS:
                    TweenMax.to(this._overlay, .5 * this._duration, {
                        delay: this._pauseTime,
                        alpha: 0,
                        ease: Power1.easeOut,
                        onComplete: function() {
                            this.signalTransitionOutComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    })
            }
        }, s.prototype.dispose = function() {
            this.removeChildren(), this._overlay = null, i.prototype.dispose.call(this)
        }
    }, {
        "./../ScreenManager": 20,
        "./Transition": 26
    }],
    24: [function(t, e) {
        var i = t("./Transition"),
            n = (t("./../ScreenManager"), function(t, e, n, s, o, r, a, h, l) {
                i.call(this), this.transitionType = l || i.TRANSITION_CROSS, this._duration = t, this._offset = new PIXI.Point(e, n), this._destination = new PIXI.Point(s, o), this._oldScreenDestination = new PIXI.Point(r, a), this._delay = h || 0, this._customEaseInOut = Power2.easeInOut, this.onTopofAllScreens = !1, this.doReplacementsAtEnd = !0
            });
        e.exports = n, n.prototype = Object.create(i.prototype), n.prototype.constructor = n, n.VERSION = "01.00.00", n.prototype.transitionIn = function() {
            this.screen.x = this._offset.x, this.screen.y = this._offset.y, this.signalTransitionInComplete.dispatch(this)
        }, n.prototype.transitionOut = function() {
            switch (this.transitionType) {
                case i.TRANSITION_IN_ONLY:
                    TweenMax.to(this.screen, this._duration, {
                        x: this._destination.x,
                        y: this._destination.y,
                        ease: this._customEaseInOut,
                        delay: this._delay,
                        onComplete: function() {
                            this.signalTransitionOutComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    });
                    break;
                case i.TRANSITION_CROSS:
                    this.oldScreen && TweenMax.to(this.oldScreen, this._duration, {
                        x: this._oldScreenDestination.x,
                        y: this._oldScreenDestination.y,
                        ease: this._customEaseInOut,
                        delay: this._delay,
                        onComplete: function() {
                            this.oldScreen.visible = !1
                        },
                        onCompleteScope: this
                    }), this.screen.x = this._offset.x, this.screen.y = this._offset.y, TweenMax.to(this.screen, this._duration, {
                        x: this._destination.x,
                        y: this._destination.y,
                        ease: this._customEaseInOut,
                        delay: this._delay,
                        onComplete: function() {
                            this.signalTransitionOutComplete.dispatch(this)
                        },
                        onCompleteScope: this
                    })
            }
        }
    }, {
        "./../ScreenManager": 20,
        "./Transition": 26
    }],
    25: [function(t, e) {
        var i = t("./Transition"),
            n = (t("./../ScreenManager"), function() {});
        e.exports = n, n.prototype = Object.create(i.prototype), n.prototype.constructor = n
    }, {
        "./../ScreenManager": 20,
        "./Transition": 26
    }],
    26: [function(t, e) {
        var i = (t("./../Screen"), function() {
            PIXI.Container.call(this), this.signalTransitionInComplete = new signals.Signal, this.signalTransitionOutComplete = new signals.Signal, this.onTopofAllScreens = !0, this.doReplacementsAtEnd = !1, this.transitionType = i.TRANSITION_CROSS, this.screen = null, this.oldScreen = null
        });
        e.exports = i, i.prototype = Object.create(PIXI.Container.prototype), i.prototype.constructor = i, i.VERSION = "02.00.00", i.TRANSITION_IN_ONLY = "transition_in_only", i.TRANSITION_CROSS = "transition_cross", i.prototype.transitionIn = function() {
            this.signalTransitionInComplete.dispatch(this)
        }, i.prototype.transitionOut = function() {
            this.signalTransitionOutComplete.dispatch(this)
        }, i.prototype.dispose = function() {
            this.signalTransitionInComplete.removeAll(), this.signalTransitionInComplete = null, this.signalTransitionOutComplete.removeAll(), this.signalTransitionOutComplete = null, this.oldScreen = null, this.screen = null, this.removeChildren()
        }
    }, {
        "./../Screen": 18
    }],
    27: [function(t) {
        var e = window.p3 || {};
        e.AudioManager = t("./audio/AudioManager"), e.BBCGel = t("./bbcgel/BBCGel"), e.Particle = t("./display/particles/Particle"), e.ParticleSystem = t("./display/particles/ParticleSystem"), e.ScreenManager = t("./display/screenmanager/ScreenManager"), e.ScreenGroup = t("./display/screenmanager/ScreenGroup"), e.ScreenParams = t("./display/screenmanager/ScreenParams"), e.Screen = t("./display/screenmanager/Screen"), e.Transition = t("./display/screenmanager/transitions/Transition"), e.AlphaFade = t("./display/screenmanager/transitions/AlphaFade"), e.ColorFade = t("./display/screenmanager/transitions/ColorFade"), e.Slide = t("./display/screenmanager/transitions/Slide"), e.Swipe = t("./display/screenmanager/transitions/Swipe"), e.AdditiveSprite = t("./display/AdditiveSprite"), e.Button = t("./display/Button"), e.MovieClip = t("./display/MovieClip"), e.MovieClipSequence = t("./display/MovieClipSequence"), e.MuteButton = t("./display/MuteButton"), e.ToggleButton = t("./display/ToggleButton"), e.Keyboard = t("./input/Keyboard"), e.RandomSeed = t("./math/RandomSeed"), e.Vector2 = t("./math/Vector2"), e.BitmapText = t("./text/BitmapText"), e.CharacterInfo = t("./text/CharacterInfo"), e.FontAtlas = t("./text/FontAtlas"), e.BaseMain = t("./utils/BaseMain"), e.Camera = t("./utils/Camera"), e.Color = t("./utils/Color"), e.Device = t("./utils/Device"), e.ObjectPool = t("./utils/ObjectPool"), e.Sorting = t("./utils/Sorting"), e.Timer = t("./utils/Timer"), e.Utils = t("./utils/Utils"), e.Animator = t("./Animator"), e.AssetManager = t("./AssetManager"), e.Canvas = t("./Canvas"), e.CanvasParams = t("./CanvasParams"), e.Timestep = t("./Timestep"), e.View = t("./View"), e.ViewParams = t("./ViewParams"), e.Tracking = t("./net/tracking/Tracking"), e.TrackingData = t("./net/tracking/TrackingData"), e.TrackingDataBBCAction = t("./net/tracking/TrackingDataBBCAction"), e.TrackingDataBBCAction = t("./net/tracking/TrackingDataEcho"), e.TrackingDataGoogleEvent = t("./net/tracking/TrackingDataGoogleEvent"), e.TrackingDataGooglePage = t("./net/tracking/TrackingDataGooglePage"), e.TrackingDataPlaydom = t("./net/tracking/TrackingDataPlaydom"), e.TrackingDataPlaydomDeviceInfo = t("./net/tracking/TrackingDataPlaydomDeviceInfo"), e.TrackingDataPlaydomGameAction = t("./net/tracking/TrackingDataPlaydomGameAction"), e.TrackingDataPlaydomNavigationAction = t("./net/tracking/TrackingDataPlaydomNavigationAction"), e.TrackingModule = t("./net/tracking/TrackingModule"), e.TrackingModuleBBC = t("./net/tracking/TrackingModuleBBC"), e.TrackingModuleEcho = t("./net/tracking/TrackingModuleEcho"), e.TrackingModuleGoogle = t("./net/tracking/TrackingModuleGoogle"), e.TrackingModulePlaydom = t("./net/tracking/TrackingModulePlaydom"), window.p3 = e
    }, {
        "./Animator": 1,
        "./AssetManager": 2,
        "./Canvas": 3,
        "./CanvasParams": 4,
        "./Timestep": 5,
        "./View": 6,
        "./ViewParams": 7,
        "./audio/AudioManager": 8,
        "./bbcgel/BBCGel": 9,
        "./display/AdditiveSprite": 10,
        "./display/Button": 11,
        "./display/MovieClip": 12,
        "./display/MovieClipSequence": 13,
        "./display/MuteButton": 14,
        "./display/ToggleButton": 15,
        "./display/particles/Particle": 16,
        "./display/particles/ParticleSystem": 17,
        "./display/screenmanager/Screen": 18,
        "./display/screenmanager/ScreenGroup": 19,
        "./display/screenmanager/ScreenManager": 20,
        "./display/screenmanager/ScreenParams": 21,
        "./display/screenmanager/transitions/AlphaFade": 22,
        "./display/screenmanager/transitions/ColorFade": 23,
        "./display/screenmanager/transitions/Slide": 24,
        "./display/screenmanager/transitions/Swipe": 25,
        "./display/screenmanager/transitions/Transition": 26,
        "./input/Keyboard": 28,
        "./math/RandomSeed": 29,
        "./math/Vector2": 30,
        "./net/tracking/Tracking": 31,
        "./net/tracking/TrackingData": 32,
        "./net/tracking/TrackingDataBBCAction": 33,
        "./net/tracking/TrackingDataEcho": 34,
        "./net/tracking/TrackingDataGoogleEvent": 35,
        "./net/tracking/TrackingDataGooglePage": 36,
        "./net/tracking/TrackingDataPlaydom": 37,
        "./net/tracking/TrackingDataPlaydomDeviceInfo": 38,
        "./net/tracking/TrackingDataPlaydomGameAction": 39,
        "./net/tracking/TrackingDataPlaydomNavigationAction": 40,
        "./net/tracking/TrackingModule": 41,
        "./net/tracking/TrackingModuleBBC": 42,
        "./net/tracking/TrackingModuleEcho": 43,
        "./net/tracking/TrackingModuleGoogle": 44,
        "./net/tracking/TrackingModulePlaydom": 45,
        "./text/BitmapText": 46,
        "./text/CharacterInfo": 47,
        "./text/FontAtlas": 48,
        "./utils/BaseMain": 49,
        "./utils/Camera": 50,
        "./utils/Color": 53,
        "./utils/Device": 54,
        "./utils/ObjectPool": 55,
        "./utils/Sorting": 56,
        "./utils/Timer": 57,
        "./utils/Utils": 58
    }],
    28: [function(t, e) {
        var i = (t("./../Canvas"), function() {
            i.signalKeyDown = new signals.Signal, i.signalKeyUp = new signals.Signal
        });
        e.exports = i, i.prototype.constructor = i, i._keysDown = {}, i._keysDownPerFrame = {}, i.KEY_TAB = 9, i.KEY_ENTER = 13, i.KEY_SHIFT = 16, i.KEY_CTRL = 17, i.KEY_SPACE = 32, i.KEY_LEFT = 37, i.KEY_UP = 38, i.KEY_RIGHT = 39, i.KEY_DOWN = 40, i.KEY_A = 65, i.KEY_B = 66, i.KEY_C = 67, i.KEY_D = 68, i.KEY_E = 69, i.KEY_F = 70, i.KEY_G = 71, i.KEY_H = 72, i.KEY_I = 73, i.KEY_J = 74, i.KEY_K = 75, i.KEY_L = 76, i.KEY_M = 77, i.KEY_N = 78, i.KEY_O = 79, i.KEY_P = 80, i.KEY_Q = 81, i.KEY_R = 82, i.KEY_S = 83, i.KEY_T = 84, i.KEY_U = 85, i.KEY_V = 86, i.KEY_W = 87, i.KEY_X = 88, i.KEY_Y = 89, i.KEY_Z = 90, i.KEY_PLUs = 187, i.KEY_MINUS = 189, i.init = function() {
            document.addEventListener("keyup", function(t) {
                i._onKeyup(t)
            }, !1), document.addEventListener("keydown", function(t) {
                i._onKeydown(t)
            }, !1)
        }, i.getKey = function(t) {
            return i._keysDown[t]
        }, i.getKeyDown = function(t) {
            return i._keysDownPerFrame[t]
        }, i.update = function() {
            i._keysDownPerFrame = {}
        }, i._onKeydown = function(t) {
            i._keysDown[t.keyCode] || (i._keysDown[t.keyCode] = !0, i._keysDownPerFrame[t.keyCode] = !0, i.signalKeyDown && i.signalKeyDown.dispatch(t.keyCode))
        }, i._onKeyup = function(t) {
            delete i._keysDown[t.keyCode], delete i._keysDownPerFrame[t.keyCode], i.signalKeyUp && i.signalKeyUp.dispatch(t.keyCode)
        }
    }, {
        "./../Canvas": 3
    }],
    29: [function(t, e) {
        var i = function() {
            this.seed = 1
        };
        e.exports = i, i.prototype.nextInt = function() {
            return this._gen()
        }, i.prototype.nextDouble = function() {
            return this._gen() / 2147483647
        }, i.prototype.nextIntRange = function(t, e) {
            return t -= .4999, e += .4999, Math.abs(Math.round(t + (e - t) * this.nextDouble()))
        }, i.prototype.nextDoubleRange = function(t, e) {
            return t + (e - t) * this.nextDouble()
        }, i.prototype._gen = function() {
            return Math.abs(this.seed = 16807 * this.seed % 2147483647)
        }
    }, {}],
    30: [function(t, e) {
        var i = function(t, e) {
            this.x = t || 0, this.y = e || 0
        };
        e.exports = i, i.VERSION = "1.0.1", i.prototype.add = function(t) {
            return new p3.Vector2(this.x + t.x, this.y + t.y)
        }, i.prototype.subtract = function(t) {
            return new p3.Vector2(this.x - t.x, this.y - t.y)
        }, i.prototype.scale = function(t) {
            return new p3.Vector2(this.x * t, this.y * t)
        }, i.prototype.incrementBy = function(t) {
            this.x = this.x + t.x, this.y = this.y + t.y
        }, i.prototype.decrementBy = function(t) {
            this.x = this.x - t.x, this.y = this.y - t.y
        }, i.prototype.scaleBy = function(t) {
            this.x = this.x * t, this.y = this.y * t
        }, i.prototype.normalize = function(t) {
            var e = this.length;
            e > 0 && (this.x = this.x / e * t, this.y = this.y / e * t)
        }, i.prototype.truncate = function(t) {
            var e = this.length;
            e > t && (this.x = this.x / e * t, this.y = this.y / e * t)
        }, i.prototype.dotProduct = function(t) {
            return this.x * t.x + this.y * t.y
        }, i.prototype.perpProduct = function(t) {
            return -this.y * t.x + this.x * t.y
        }, i.prototype.clone = function() {
            return new p3.Vector2(this.x, this.y)
        }, Object.defineProperty(i.prototype, "length", {
            get: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
        }), Object.defineProperty(i.prototype, "lengthSq", {
            get: function() {
                return this.x * this.x + this.y * this.y
            }
        }), Object.defineProperty(i.prototype, "unit", {
            get: function() {
                var t = this.length;
                return new p3.Vector2(this.x / t, this.y / t)
            }
        })
    }, {}],
    31: [function(t, e) {
        var i = function() {
            this._module = null
        };
        e.exports = i, i.DEBUG = !1, i.prototype.init = function(t) {
            this._module = t
        }, i.prototype.track = function(t) {
            this._module.track(t), i.DEBUG && console.log("Track sent - ", t)
        }
    }, {}],
    32: [function(t, e) {
        var i = function() {};
        e.exports = i
    }, {}],
    33: [function(t, e) {
        var i = t("./TrackingData"),
            n = function(t, e, n) {
                i.call(this), this._name = t, this._type = e, this._params = n
            };
        e.exports = n, n.prototype = Object.create(i), n.prototype.constructor = n, Object.defineProperty(n.prototype, "name", {
            get: function() {
                return this._name
            }
        }), Object.defineProperty(n.prototype, "type", {
            get: function() {
                return this._type
            }
        }), Object.defineProperty(n.prototype, "params", {
            get: function() {
                return this._params
            }
        })
    }, {
        "./TrackingData": 32
    }],
    34: [function(t, e) {
        var i = t("./TrackingData"),
            n = function(t, e, n) {
                i.call(this), this._name = t, this._type = e, this._params = n
            };
        e.exports = n, n.prototype = Object.create(i.prototype), n.prototype.constructor = n, Object.defineProperty(n.prototype, "name", {
            get: function() {
                return this._name
            }
        }), Object.defineProperty(n.prototype, "type", {
            get: function() {
                return this._type
            }
        }), Object.defineProperty(n.prototype, "params", {
            get: function() {
                return this._params
            }
        })
    }, {
        "./TrackingData": 32
    }],
    35: [function(t, e) {
        var i = t("./TrackingData"),
            n = (t("./TrackingModuleGoogle"), function(t, e, i, n) {
                this.category = t, this.action = e, this.label = i, this.value = n
            });
        e.exports = n, n.prototype = Object.create(i), n.prototype.constructor = n
    }, {
        "./TrackingData": 32,
        "./TrackingModuleGoogle": 44
    }],
    36: [function(t, e) {
        var i = t("./TrackingData"),
            n = (t("./TrackingModuleGoogle"), function(t) {
                this.page = t
            });
        e.exports = n, n.prototype = Object.create(i), n.prototype.constructor = n
    }, {
        "./TrackingData": 32,
        "./TrackingModuleGoogle": 44
    }],
    37: [function(t, e) {
        TrackingDataPlaydom = function() {
            this.tag = null
        }, e.exports = TrackingDataPlaydom, TrackingDataPlaydom.prototype.getUrlString = function() {
            return ""
        }
    }, {}],
    38: [function(t, e) {
        function i(t, e, i, n, s, o, r, a) {
            this.tag = "device_info", this.machine = t || "NULL", this.model = e || "NULL", this.osVersion = i || "NULL", this.mToken = n || "NULL", this.deviceId = s || "NULL", this.iosVendorId = o || "NULL", this.iosAdvertisingId = r || "NULL", this.googAdvertisingId = a || "NULL"
        }
        var n = t("./TrackingDataPlaydom");
        e.exports = i, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.prototype.getUrlString = function() {
            return "tag=" + this.tag + "&machine=" + this.machine + "&model=" + this.model + "&os_version=" + this.osVersion + "&m_token=" + this.mToken + "&device_id=" + this.deviceId + "&ios_vendor_id=" + this.iosVendorId + "&ios_advertising_id=" + this.iosAdvertisingId + "&google_advertising_id=" + this.googAdvertisingId
        }
    }, {
        "./TrackingDataPlaydom": 37
    }],
    39: [function(t, e) {
        function i(t, e) {
            this.tag = "game_action", this.context = t, this.action = e
        }
        var n = t("./TrackingDataPlaydom");
        e.exports = i, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.prototype.getUrlString = function() {
            return "tag=" + this.tag + "&context=" + this.context + "&action=" + this.action
        }
    }, {
        "./TrackingDataPlaydom": 37
    }],
    40: [function(t, e) {
        function i(t, e) {
            this.tag = "navigation_action", this.context = t, this.action = e
        }
        var n = t("./TrackingDataPlaydom");
        e.exports = i, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.prototype.getUrlString = function() {
            return "tag=" + this.tag + "&context=" + this.context + "&action=" + this.action
        }
    }, {
        "./TrackingDataPlaydom": 37
    }],
    41: [function(t, e) {
        var i = function() {};
        e.exports = i, i.track = function() {}, i.isScriptFound = function() {
            return !1
        }
    }, {}],
    42: [function(t, e) {
        var i = t("./TrackingModule"),
            n = function(t, e, i, s, o) {
                this.window = window.top || window, n.DEV_lib = this.trackingLib = t, this.isScriptFound() && (n.DEV_statsLogger = this.statsLogger = o ? this.trackingLib.create(e, i, s, o) : this.trackingLib.create(e, i, s))
            };
        e.exports = n, n.prototype = Object.create(i), n.prototype.constructor = n, n.DEV_lib = null, n.DEV_statsLogger = null, n.TYPE_PAGE = "page", n.TYPE_EVENT = "event", n.prototype.track = function(t) {
            this.isScriptFound() && (!t || !t.action_name || !t.action_type, this.statsLogger.logAction(t.action_name, t.action_type, t.params)), t.action_name = null, t.action_type = null, t.params = null, t = null
        }, n.prototype.isScriptFound = function() {
            return this.trackingLib ? !0 : !1
        }
    }, {
        "./TrackingModule": 41
    }],
    43: [function(t, e) {
        var i = t("./TrackingModule"),
            n = function() {
                i.call(this)
            };
        e.exports = n, n.prototype = Object.create(i.prototype), n.prototype.constructor = n, n.prototype.track = function(t) {
            window.stats && window.stats.logUserActionEvent(t.name, t.type, t.params)
        }
    }, {
        "./TrackingModule": 41
    }],
    44: [function(t, e) {
        var i = t("./TrackingModule"),
            n = t("./TrackingDataGoogleEvent"),
            s = t("./TrackingDataGooglePage"),
            o = function(t, e) {
                this.window = window.top || window, this.isScriptFound() && this.window.ga("create", t, e)
            };
        e.exports = o, o.prototype = Object.create(i), o.prototype.constructor = o, o.prototype.track = function(t) {
            this.isScriptFound() && (t instanceof s ? this.window.ga("send", {
                hitType: "pageview",
                page: "/" + t.page,
                title: t.page
            }) : t instanceof n && this.window.ga("send", {
                hitType: "event",
                eventCategory: t.category,
                eventAction: t.action,
                eventLabel: t.label,
                eventValue: t.value
            }))
        }, o.prototype.isScriptFound = function() {
            return this.window.ga ? !0 : (console.warn("[p3.Tracking] Google Analytics script is not found on the page."), !1)
        }
    }, {
        "./TrackingDataGoogleEvent": 35,
        "./TrackingDataGooglePage": 36,
        "./TrackingModule": 41
    }],
    45: [function(t, e) {
        function i(t, e, i, n, s) {
            this._app = t, this._appLocale = e, this._network = i, this._viewNetwork = n, this._authorizationId = s, this._browserId = window.localStorage.browserId ? window.localStorage.browserId : this.generateKey(), window.localStorage.browserId = this._browserId, this._transactionId = this.generateKey()
        }
        e.exports = i, i.prototype.track = function(t) {
            var e = "https://api.disney.com/datatech/serverlog/v1/json",
                i = "";
            i += "app=" + this._app + "&", i += "user_id=" + this._browserId + "&", i += "app_locale=" + this._appLocale + "&", i += "transaction_id=" + this._transactionId + "&", i += "browser_id=" + this._browserId + "&", i += "network=" + this._network + "&", i += "view_network=" + this._viewNetwork + "&", i += t.getUrlString();
            var n = new XMLHttpRequest;
            n.open("POST", e, !0), n.setRequestHeader("Content-Type", "application/json"), n.setRequestHeader("Authorization", this._authorizationId), n.send(i)
        }, i.prototype.generateKey = function() {
            var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            return t.replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0,
                    i = "x" == t ? e : 3 & e | 8;
                return i.toString(16)
            })
        }
    }, {}],
    46: [function(t, e) {
        var i = (t("./FontAtlas"), function(t, e, n, s) {
            if (this.multiline = !0, this.autoKern = !0, this._text = "", this._textAlign = n || i.ALIGN_LEFT, this._textColor = void 0 != s ? s : 16777215, this._fontAtlas = e, this._letterSpacing = 0, this._lines = null, this._numOfLines = 0, !this._fontAtlas) throw Error("Font atlas is invalid!");
            PIXI.Container.call(this), this.text = t
        });
        e.exports = i, i.prototype = Object.create(PIXI.Container.prototype), i.prototype.constructor = i, i.VERSION = "1.0.1", i.DEBUG = !1, i.ALIGN_CENTER = "center", i.ALIGN_LEFT = "left", i.ALIGN_RIGHT = "right", i.prototype.calculateLines = function() {
            if (this._text || i.DEBUG && console.warn("[BitmapText] this._text is null."), this._lines = [], this.multiline) {
                var t, e, s, o, r = 0,
                    a = 0,
                    h = 0;
                this._numOfLines = 0;
                var l = 0,
                    c = this._text.length;
                if (c > 1)
                    for (; c - 1 > l;) {
                        if (t = this._text.charCodeAt(l), t != n.LINE_FEED) {
                            try {
                                s = this._fontAtlas.getCharacterInfo(t)
                            } catch (u) {
                                s = this._fontAtlas.getCharacterInfo(32), i.DEBUG && console.warn("[BitmapText] Character '" + String.fromCharCode(t) + "' (" + t + ") not found!")
                            }
                            l < this._text.length && this.autoKern ? (e = this._text.charCodeAt(l + 1), a = this._fontAtlas.getKerning(t, e)) : a = 0, h += s.getXAdvance() + a + this._letterSpacing
                        } else o = this._text.substring(r, l), this._lines.push(o), ++this._numOfLines, h = 0, r = l + 1;
                        ++l
                    }
                c > r && (o = this._text.substring(r, c), this._lines.push(o), ++this._numOfLines)
            } else this._numOfLines = 1
        }, i.prototype.renderGlyph = function(t, e, i) {
            var n;
            try {
                n = this._fontAtlas.getCharacterInfo(t)
            } catch (s) {
                n = this._fontAtlas.getCharacterInfo(32)
            }
            var o = new PIXI.Sprite(n.getTexture());
            o.x = e + n.getXOffset(), o.y = i + n.getYOffset(), o.tint = this._textColor, this.addChild(o)
        }, i.prototype.renderText = function() {
            if (this.getLineHeight() <= 0) throw Error("[BitmapText] Invalid text field dimensions!");
            var t, e, s, o, r, a, h = 0,
                l = 0,
                c = 0,
                u = 0,
                p = 0;
            if (this.removeChildren(), this.multiline) {
                var d = null,
                    _ = null;
                for (t = 0; t < this._numOfLines; ++t)
                    for (u = 0, d = this._lines[t], p = this.getLineWidth(d), _ = d.length, e = 0; _ > e; ++e) {
                        o = d.charCodeAt(e);
                        try {
                            a = this._fontAtlas.getCharacterInfo(o)
                        } catch (g) {
                            a = this._fontAtlas.getCharacterInfo(32)
                        }
                        if (o != n.SPACE) {
                            switch (t < this._text.length && this.autoKern ? (r = this._text.charCodeAt(t + 1), c = this._fontAtlas.getKerning(o, r)) : c = 0, this._textAlign) {
                                case i.ALIGN_LEFT:
                                    h = u;
                                    break;
                                case i.ALIGN_RIGHT:
                                    h = u - p;
                                    break;
                                case i.ALIGN_CENTER:
                                    h = u - .5 * p;
                                    break;
                                default:
                                    throw Error("[BitmapText] Invalid text alignment!")
                            }
                            h = Math.floor(h), l = Math.floor(t * this.getLineHeight()), this.renderGlyph(o, h, l), u += a.getXAdvance() + c + this._letterSpacing
                        } else u += a.getXAdvance() + this._letterSpacing
                    }
            } else
                for (p = this.getLineWidth(this._text), s = this._text.length, t = 0; s > t; ++t)
                    if (o = this._text.charCodeAt(t), o != n.LINE_FEED) {
                        try {
                            a = this._fontAtlas.getCharacterInfo(o)
                        } catch (g) {
                            a = this._fontAtlas.getCharacterInfo(32)
                        }
                        if (o != n.SPACE) {
                            switch (t < this._text.length && this.autoKern ? (r = this._text.charCodeAt(t + 1), c = this._fontAtlas.getKerning(o, r)) : c = 0, this._textAlign) {
                                case i.ALIGN_LEFT:
                                    h = u;
                                    break;
                                case i.ALIGN_RIGHT:
                                    h = u - p;
                                    break;
                                case i.ALIGN_CENTER:
                                    h = u - .5 * p;
                                    break;
                                default:
                                    throw Error("[BitmapText] Invalid text alignment!")
                            }
                            h = Math.floor(h), this.renderGlyph(o, h, l), u += a.getXAdvance() + c + this._letterSpacing
                        } else u += a.getXAdvance() + this._letterSpacing
                    }
        }, Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                t !== this._text && (this._text = t, this.calculateLines(), this.renderText())
            }
        }), Object.defineProperty(i.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(t) {
                t !== this._textColor && (this._textColor = t, this.calculateLines(), this.renderText())
            }
        }), Object.defineProperty(i.prototype, "letterSpacing", {
            get: function() {
                return this._letterSpacing
            },
            set: function(t) {
                t != this._letterSpacing && (this._letterSpacing = t, this.calculateLines(), this.renderText())
            }
        }), i.prototype.getFontAtlas = function() {
            return this._fontAtlas
        }, i.prototype.getFontName = function() {
            return null != this._fontAtlas ? this._fontAtlas.font.info.face : ""
        }, i.prototype.getFontSize = function() {
            return null != this._fontAtlas ? this._fontAtlas.font.info.size : 0
        }, i.prototype.getNumOfLines = function() {
            return this._numOfLines
        }, i.prototype.getLineWidth = function(t) {
            for (var e = 0, i = null, s = null, o = null, r = null, a = t.length, h = 0; a > h; ++h)
                if (i = t.charCodeAt(h), i != n.LINE_FEED) {
                    try {
                        o = this._fontAtlas.getCharacterInfo(i)
                    } catch (l) {
                        o = this._fontAtlas.getCharacterInfo(32)
                    }
                    h < this._text.length && this.autoKern ? (s = this._text.charCodeAt(h + 1), r = this._fontAtlas.getKerning(i, s)) : r = 0, e += o.getXAdvance() + r + this._letterSpacing
                }
            return e
        }, i.prototype.getLineHeight = function() {
            return this.lineHeight > 0 ? this.lineHeight : this._fontAtlas.getFont().common.lineHeight
        };
        var n = function() {};
        n.LINE_FEED = 10, n.SPACE = 32
    }, {
        "./FontAtlas": 48
    }],
    47: [function(t, e) {
        var i = function(t, e) {
            this._id = parseInt(t.id), this._xAdvance = parseInt(t.xadvance), this._x = parseInt(t.x), this._y = parseInt(t.y), this._width = parseInt(t.width), this._height = parseInt(t.height), this._xOffset = parseInt(t.xoffset), this._yOffset = parseInt(t.yoffset), this._letter = t.letter, this._spriteName = e
        };
        e.exports = i, i.VERSION = "1.0.0", i.prototype.getId = function() {
            return this._id
        }, i.prototype.getXAdvance = function() {
            return this._xAdvance
        }, i.prototype.getX = function() {
            return this._x
        }, i.prototype.getY = function() {
            return this._y
        }, i.prototype.getWidth = function() {
            return this._width
        }, i.prototype.getHeight = function() {
            return this._height
        }, i.prototype.getXOffset = function() {
            return this._xOffset
        }, i.prototype.getYOffset = function() {
            return this._yOffset
        }, i.prototype.getLetter = function() {
            return this._letter
        }, i.prototype.getTexture = function() {
            return this._spriteName
        }
    }, {}],
    48: [function(t, e) {
        var i = t("./CharacterInfo"),
            n = function(t, e, i) {
                this._name = t, this._data = e, this._spriteName = i, this._font = null, this._charInfo = {}, this._kerningMap = {}, this.parseData(e)
            };
        e.exports = n, n.VERSION = "1.0.0", n.prototype.parseData = function(t) {
            if (!t || !t.font) throw Error("[FontAtlas] parseData: There is a problem with the data:", t);
            this._font = t.font;
            for (var e, n, s, o = this._font.chars["char"].length, r = 0; o > r; ++r) e = this._font.chars["char"][r], s = new PIXI.Texture(this._spriteName.baseTexture, new PIXI.Rectangle(parseInt(e.x), parseInt(e.y), parseInt(e.width), parseInt(e.height))), n = new i(e, s), this._charInfo[e.id] = n;
            this.mapKernings()
        }, n.prototype.mapKernings = function() {
            var t = this._font.kernings;
            if (t)
                for (var e = t.length, i = 0; 127 > i; ++i)
                    for (var n = 0; e > n; ++n) {
                        var s = t[n];
                        s.first == i && (void 0 == this._kerningMap[i] && (this._kerningMap[i] = {}), this._kerningMap[i][s.second] = s.amount)
                    }
        }, n.prototype.getName = function() {
            return this._name
        }, n.prototype.getData = function() {
            return this._data
        }, n.prototype.getTexture = function() {
            return this._spriteName
        }, n.prototype.getFont = function() {
            return this._font
        }, n.prototype.getSize = function() {
            return this._font.info.size
        }, n.prototype.getCharacterInfo = function(t) {
            if (null == this._charInfo[t]) throw Error("CharacterInfo not found!");
            return this._charInfo[t]
        }, n.prototype.getCharacterCount = function() {
            return this._data.font.chars["char"].length
        }, n.prototype.getKerning = function(t, e) {
            var i = 0;
            return void 0 != this._kerningMap[t] && void 0 != this._kerningMap[t][e] && (i = this._kerningMap[t][e]), i
        }
    }, {
        "./CharacterInfo": 47
    }],
    49: [function(t, e) {
        var i = t("./Device"),
            n = t("./../Canvas"),
            s = t("./../Timestep"),
            o = t("./../AssetManager"),
            r = t("./../input/Keyboard"),
            a = t("./../display/screenmanager/ScreenManager"),
            h = t("./../Animator"),
            l = function(t, e, i) {
                this.signalPreloaderAssetsComplete = new signals.Signal, this.signalCanvasReady = new signals.Signal, this.signalCanvasResize = new signals.Signal, this.signalLoadProgress = new signals.Signal, this.signalLoadComplete = new signals.Signal, this._canvasParams = t, this._fps = e || 60, this._resolution = i || 1, this._stage = null, this._renderer = null, this._canvas = new n(this._canvasParams), this._canvas.signalChange.add(this._onCanvasResize, this), this._canvas.signalReady.add(this._onCanvasReady, this), this._timestep = new s(2)
            };
        e.exports = l, l.animator = null, l.prototype.init = function() {
            this._assetManager = o.instance, this._canvas.init(), l.animator = new h, l.animator.init()
        }, l.prototype.loadPreloaderAssets = function(t, e) {
            t && t.length > 0 ? (this._assetManager.addFiles(t, e), this._assetManager.signalCompleted.add(function() {
                this.signalPreloaderAssetsComplete.dispatch()
            }, this), this._assetManager.load()) : this.signalPreloaderAssetsComplete.dispatch()
        }, l.prototype.load = function(t, e) {
            e = e || "", this._assetManager.addFiles(t, e), this._assetManager.signalCompleted.add(this._onLoadComplete, this), this._assetManager.signalProgress.add(this._onLoadProgress, this), this._assetManager.load(.5)
        }, l.prototype._update = function() {
            this._screenManager.update(), l.animator.update(), r.update()
        }, l.prototype._render = function() {
            this._renderer.render(this._stage)
        }, l.prototype._onCanvasReady = function() {
            var t = {
                view: n.canvasElement,
                transparent: !1,
                antialias: !1,
                preserveDrawingBuffer: !1,
                autoResize: !1,
                resolution: this._resolution
            };
            n.stage = this._stage = new PIXI.Container, this._renderer = n.params.forceCanvasMode || i.isAndroidStockBrowser && n.params.stockAndroidCanvasMode ? new PIXI.CanvasRenderer(n.width, n.height, t) : new PIXI.autoDetectRenderer(n.width, n.height, t), n.renderer = this._renderer, n.canvasElement || document.body.appendChild(this._renderer.view), this._screenManager = a.instance, this._screenManager.init(this._stage, this._renderer), r.init(n.window), this._timestep.init(this._update, this._render, this), this.signalCanvasReady.dispatch()
        }, l.prototype._onCanvasResize = function(t) {
            t ? (this._renderer.resize(n.width, n.height), this._screenManager.resize(), this._timestep.isRunning = !0) : this._timestep.isRunning = !1, this.signalCanvasResize.dispatch(t)
        }, l.prototype._onLoadProgress = function(t, e) {
            this.signalLoadProgress.dispatch(e, t)
        }, l.prototype._onLoadComplete = function() {
            this._assetManager.signalCompleted.removeAll(), this._assetManager.signalProgress.removeAll(), this.signalLoadComplete.dispatch()
        }, Object.defineProperty(l.prototype, "stage", {
            get: function() {
                return this._stage
            }
        }), Object.defineProperty(l.prototype, "renderer", {
            get: function() {
                return this._renderer
            }
        })
    }, {
        "./../Animator": 1,
        "./../AssetManager": 2,
        "./../Canvas": 3,
        "./../Timestep": 5,
        "./../display/screenmanager/ScreenManager": 20,
        "./../input/Keyboard": 28,
        "./Device": 54
    }],
    50: [function(t, e) {
        var i = t("./CameraLayer"),
            n = t("./CameraParallax"),
            s = function(t, e) {
                this.view = t || new PIXI.Point, this.targetOffset = new PIXI.Point, this.bounds = new PIXI.Rectangle(-(.5 * Number.MAX_VALUE), -(.5 * Number.MAX_VALUE), Number.MAX_VALUE, Number.MAX_VALUE), this.snapToPixelEnabled = e || !0, this.signalTrackingStarted = new signals.Signal, this.signalTrackingFinished = new signals.Signal, this._position = new PIXI.Point(-this.view.x, -this.view.y), this._trackEase = .2, this._trackParallax = new PIXI.Point(n.FULL, n.FULL), this._target = null, this._targetPos = new PIXI.Point, this._layers = {}, this._tracking = !1, this._shakeOffset = new PIXI.Point
            };
        e.exports = s, s.VERSION = "1.1.0", s.prototype.dispose = function() {
            this._layers = {}, this.signalTrackingStarted.removeAll(), this.signalTrackingStarted = null, this.signalTrackingFinished.removeAll(), this.signalTrackingFinished = null
        }, s.prototype.update = function() {
            void 0 != this._target && (this._targetPos.x = this._target.x + this.targetOffset.x, this._targetPos.y = this._target.y + this.targetOffset.y), this._targetPos.x < this.bounds.x ? this._targetPos.x = this.bounds.x : this._targetPos.x > this.bounds.width && (this._targetPos.x = this.bounds.width), this._targetPos.y < this.bounds.y ? this._targetPos.y = this.bounds.y : this._targetPos.y > this.bounds.height && (this._targetPos.y = this.bounds.height), this._targetPos.x += this._shakeOffset.x, this._targetPos.y += this._shakeOffset.y;
            var t = this._targetPos.x - this.view.x - this._position.x * this._trackParallax.x,
                e = this._targetPos.y - this.view.y - this._position.y * this._trackParallax.y;
            this._position.x += t * this._trackEase * (1 / this._trackParallax.x), this._position.y += e * this._trackEase * (1 / this._trackParallax.y), Math.abs(t) < .01 && (this._position.x = this._targetPos.x - this.view.x), Math.abs(e) < .01 && (this._position.y = this._targetPos.y - this.view.y), this.snapToPixelEnabled && (this._position.x = Math.round(this._position.x), this._position.y = Math.round(this._position.y));
            var i = t * t + e * e;.1 > i && !this._tracking ? (this._tracking = !0, this.signalTrackingFinished.dispatch(this)) : i > .1 && this._tracking && (this._tracking = !1, this.signalTrackingStarted.dispatch(this)), this.updateLayers()
        }, s.prototype.trackTarget = function(t, e) {
            if (void 0 != t && (void 0 == t.x || void 0 == t.y)) throw Error("Camera target is invalid!");
            this._target = t;
            var i = this.findLayerForObject(this._target);
            this._trackParallax.x = i ? i.parallax.x : 1, this._trackParallax.y = i ? i.parallax.y : 1, e && (this._targetPos.x = this._target.x + this.targetOffset.x, this._targetPos.y = this._target.y + this.targetOffset.y, this._targetPos.x < this.bounds.x ? this._targetPos.x = this.bounds.x : this._targetPos.x > this.bounds.width && (this._targetPos.x = this.bounds.width), this._targetPos.y < this.bounds.y ? this._targetPos.y = this.bounds.y : this._targetPos.y > this.bounds.height && (this._targetPos.y = this.bounds.height), this.position = new PIXI.Point(this._targetPos.x - this.view.x, this._targetPos.y - this.view.y))
        }, s.prototype.trackPosition = function(t, e, i) {
            this._target = null, this._targetPos.x = t, this._targetPos.y = e, this._trackParallax.x = 1, this._trackParallax.y = 1, i && (this._targetPos.x < this.bounds.x ? this._targetPos.x = this.bounds.x : this._targetPos.x > this.bounds.width && (this._targetPos.x = this.bounds.width), this._targetPos.y < this.bounds.y ? this._targetPos.y = this.bounds.y : this._targetPos.y > this.bounds.height && (this._targetPos.y = this.bounds.height), this.position = new PIXI.Point(this._targetPos.x - this.view.x, this._targetPos.y - this.view.y))
        }, s.prototype.addLayer = function(t, e, n) {
            if (this.hasLayer(t)) throw Error("Layer with that name already exists: '" + t + "'.");
            if (this.hasContainer(t)) throw Error("Container already added to existing layer!");
            n.x = void 0 !== n ? n.x : 1, n.y = void 0 !== n ? n.y : 1;
            var s = new i;
            s.container = e, s.parallax = new PIXI.Point(n.x, n.y), this._layers[t] = s, this.updateLayers()
        }, s.prototype.removeLayer = function(t) {
            if (!this.hasLayer) throw Error("Layer does not exist!");
            this._layers[t] = null
        }, s.prototype.removeAllLayers = function() {
            this._layers = {}
        }, s.prototype.hasLayer = function(t) {
            return void 0 != this._layers[t]
        }, s.prototype.hasContainer = function(t) {
            for (var e, i = 0; i < this._layers.length; ++i)
                if (e = this._layers[i], e.container == t) return !0;
            return !1
        }, s.prototype.findLayerForObject = function(t) {
            var e, i, n, s = 0,
                o = null;
            for (var r in this._layers)
                if (this._layers.hasOwnProperty(r))
                    for (e = this._layers[r], n = e.container.children.length, s = 0; n > s; ++s) i = e.container.getChildAt(s), t == i && (o = e);
            return o
        }, s.prototype.shake = function(t, e) {
            t = t || new PIXI.Point(5, 5), e = e || 4;
            var i = .1;
            TweenMax.to(this._shakeOffset, i, {
                delay: i,
                x: this._shakeOffset.x + (1 + Math.random() * t.x),
                y: this._shakeOffset.y + (1 + Math.random() * t.y),
                ease: Expo.easeInOut,
                repeat: e - 1
            }), TweenMax.to(this._shakeOffset, i, {
                x: this._shakeOffset.x,
                y: this._shakeOffset.y,
                ease: Expo.easeInOut,
                delay: (e + 1) * i
            })
        }, s.prototype.getLayerByName = function(t) {
            var e = this._layers[t];
            if (e) return e;
            throw Error("Layer does not exist: '" + t + "'!")
        }, s.prototype.updateLayers = function() {
            for (var t in this._layers)
                if (this._layers.hasOwnProperty(t)) {
                    var e = this._layers[t];
                    e.container.x = -this._position.x * e.parallax.x, e.container.y = -this._position.y * e.parallax.y
                }
        }, Object.defineProperty(s.prototype, "target", {
            get: function() {
                return this._target
            }
        }), Object.defineProperty(s.prototype, "position", {
            get: function() {
                return this._position
            },
            set: function(t) {
                this._position.x = t.x * (this._trackParallax.x > 0 ? 1 / this._trackParallax.x : 1), this._position.y = t.y * (this._trackParallax.y > 0 ? 1 / this._trackParallax.y : 1), this.updateLayers()
            }
        }), Object.defineProperty(s.prototype, "trackEase", {
            get: function() {
                return this._trackEase
            },
            set: function(t) {
                this._trackEase = Math.max(.001, Math.min(1, t))
            }
        })
    }, {
        "./CameraLayer": 51,
        "./CameraParallax": 52
    }],
    51: [function(t, e) {
        var i = function() {
            this.container = null, this.parallax = null
        };
        e.exports = i
    }, {}],
    52: [function(t, e) {
        var i = function() {};
        e.exports = i, i.NONE = 0, i.HALF = .5, i.FULL = 1
    }, {}],
    53: [function(t, e) {
        function i() {}
        e.exports = i, i.RED = 16711680, i.GREEN = 65280, i.BLUE = 255, i.WHITE = 16777215, i.BLACK = 0, i.lerp = function(t, e, n) {
            var s = i.hex2rgb(t),
                o = i.hex2rgb(e);
            return o.r = (1 - n) * s.r + n * o.r, o.g = (1 - n) * s.g + n * o.g, o.b = (1 - n) * s.b + n * o.b, i.rgb2hex(o.r, o.g, o.b)
        }, i.hex2rgb = function(t) {
            var e = {};
            return e.r = t >> 16 & 255, e.g = t >> 8 & 255, e.b = t >> 0 & 255, e
        }, i.rgb2hex = function(t, e, i) {
            return t << 16 | e << 8 | i
        }
    }, {}],
    54: [function(t, e) {
        var i = function() {};
        e.exports = i, i.init = function(t) {
            t || console.warn("[Device] 'bowser' not found, it much be included in the libs and added to the window.");
            var e = navigator.userAgent;
            i.bowser = t, i._regExAppleWebKit = RegExp(/AppleWebKit\/([\d.]+)/), i._resultAppleWebKitRegEx = i._regExAppleWebKit.exec(navigator.userAgent), i._appleWebKitVersion = null === i._resultAppleWebKitRegEx ? null : parseFloat(i._regExAppleWebKit.exec(navigator.userAgent)[1]), i._webgl = function() {
                try {
                    var t = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                } catch (e) {
                    return !1
                }
            }(), i.isMobile = t.mobile || t.tablet, i.isLowRes = Math.max(window.innerWidth, window.innerHeight) <= 372, i.isIOS = t.ios, i.isAndroid = t.android, i.isIpad = i.isIOS && "iPad" == t.name, i.isIpadMini = i.isIOS && i.isIpad && 1 === window.devicePixelRatio && Math.max(window.innerWidth, window.innerHeight) <= 1024, i.isIpod = i.isIOS && "iPod" == t.name, i.isIphone = i.isIOS && "iPhone" == t.name, i.isWebGL = i._webgl, i.isCanvas = !i._webgl, i.isAndroidStockBrowser = i.isAndroid && null !== i._appleWebKitVersion && i._appleWebKitVersion < 537, i.isIOS9 = i.isIOS && /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase()), i.isIframe = window.self !== window.top, i.isKindle = /Kindle/i.test(e) || /Silk/i.test(e) || /KFTT/i.test(e) || /KFOT/i.test(e) || /KFJWA/i.test(e) || /KFJWI/i.test(e) || /KFSOWI/i.test(e) || /KFTHWA/i.test(e) || /KFTHWI/i.test(e) || /KFAPWA/i.test(e) || /KFAPWI/i.test(e), i.isTwitterFacebookBrowser = /(twitter|fban|fbav)/.test(navigator.userAgent.toLowerCase()), i.isReady = !0
        }, i.isReady = !1, i.bowser = null, i.isMobile = !1, i.isIOS = !1, i.isAndroid = !1, i.isIpad = !1, i.isIpod = !1, i.isIphone = !1, i.isIphone4 = !1, i.isKindle = !1, i.isLowRes = !1, i.isWebGL = !1, i.isCanvas = !1, i.isAndroidStockBrowser = !1, i.isIOS9 = !1, i.isIframe = !1, i.isTwitterFacebookBrowser = !1, Object.defineProperty(i, "isCocoonJS", {
            get: function() {
                return void 0 !== navigator.isCocoonJS
            }
        })
    }, {}],
    55: [function(t, e) {
        function i(t, e, i) {
            this._base = t, this._size = Math.max(1, e), this._args = i || null, this._free = [], this._used = [], this.expand(e)
        }
        e.exports = i, i.prototype.dispose = function() {
            for (var t, e = 0; e < this._free.length; ++e) t = this._free[e], t && t.dispose();
            for (this._free.length = 0, e = 0; e < this._used.length; ++e) t = this._used[e], t && t.dispose();
            this._used.length = 0
        }, i.prototype.expand = function(t) {
            for (var e, i = 0; t > i; ++i) e = Object.create(this._base.prototype), e.constructor = this._base, this._base.apply(e, this._args), this._free.push(e)
        }, i.prototype.create = function() {
            var t = this._free.shift();
            return t.init && t.init(), this._used.push(t), this._free.length ? t : null
        }, i.prototype.free = function(t) {
            var e = this._used.indexOf(t);
            return -1 != e && (t.reset && t.reset(), this._free.push(t), this._used.splice(e, 1)), -1 != e
        }, Object.defineProperty(i.prototype, "size", {
            get: function() {
                return this._size
            }
        }), Object.defineProperty(i.prototype, "available", {
            get: function() {
                return this._free.length
            }
        })
    }, {}],
    56: [function(t, e) {
        var i = function() {};
        e.exports = i;
        i.prototype;
        i.quickSort = function(t, e, n) {
            function s(t, e, i) {
                for (var n, s = t[e + i >>> 1]; i >= e;) {
                    for (; t[e] < s;) e++;
                    for (; t[i] > s;) i--;
                    e > i || (n = t[e], t[e++] = t[i], t[i--] = n)
                }
                return e
            }
            var o = s(t, e, n);
            return o - 1 > e && i.quickSort(t, e, o - 1), n > o && i.quickSort(t, o, n), t
        }, i.quickSortProperty = function(t, e, n, s) {
            function o(t, e, i) {
                for (var n, o = t[e + i >>> 1]; i >= e;) {
                    for (; t[e][s] < o[s];) e++;
                    for (; t[i][s] > o[s];) i--;
                    e > i || (n = t[e], t[e++] = t[i], t[i--] = n)
                }
                return e
            }
            var r = o(t, e, n);
            return r - 1 > e && i.quickSortProperty(t, e, r - 1, s), n > r && i.quickSortProperty(t, r, n, s), t
        }, i.insertionSort = function(t) {
            var e, i, n, s = t.length;
            for (i = 0; s > i; i++) {
                for (e = t[i], n = i - 1; n > -1 && t[n] > e; n--) t[n + 1] = t[n];
                t[n + 1] = e
            }
            return t
        }, i.insertionSortProperty = function(t, e) {
            var i, n, s, o = t.length;
            for (n = 0; o > n; n++) {
                for (i = t[n], s = n - 1; s > -1 && t[s][e] > i[e]; s--) t[s + 1] = t[s];
                t[s + 1] = i
            }
            return t
        }, i.bubbleSort = function(t) {
            var e, i, n, s;
            for (e = 0, n = t.length; n > e; e++)
                for (i = e + 1; n > i; i++) t[e] > t[i] && (s = t[e], t[e] = t[i], t[i] = s);
            return t
        }, i.bubbleSortProperty = function(t, e) {
            var i, n, s, o;
            for (i = 0, s = t.length; s > i; i++)
                for (n = i + 1; s > n; n++) t[i][e] > t[n][e] && (o = t[i], t[i] = t[n], t[n] = o);
            return t
        }, i.test = function(t, e) {
            var n, s, o, r = [],
                a = [];
            for (t = t || 100, e = e || 1e4, o = 0; t > o; o++) r.push(Math.round(1e3 * Math.random()));
            for (o = 0; t > o; o++) {
                var h = {};
                h.y = Math.round(1e3 * Math.random()), a.push(h)
            }
            for (DEBUG && console.log("//////////////////////"), DEBUG && console.log("/////// SIMPLE ///////"), DEBUG && console.log("////////////////////// "), DEBUG && console.log("\n"), n = new Date, o = 0; e > o; o++) s = i.bubbleSort(r.slice(0));
            for (DEBUG && console.log("Bubble:", new Date - n, ":", s, "\n"), n = new Date, o = 0; e > o; o++) s = i.quickSort(r.slice(0), 0, r.length - 1);
            for (DEBUG && console.log("Quick:", new Date - n, ":", s, "\n"), n = new Date, o = 0; e > o; o++) s = i.insertionSort(r.slice(0));
            for (DEBUG && console.log("Insertion:", new Date - n, ":", s, "\n"), DEBUG && console.log("\n"), DEBUG && console.log("//////////////////////"), DEBUG && console.log("////// PROPERTY //////"), DEBUG && console.log("//////////////////////"), DEBUG && console.log("\n"), n = new Date, o = 0; e > o; o++) s = i.bubbleSortProperty(a.slice(0), "y");
            for (DEBUG && console.log("Bubble:", new Date - n, ":", s, "\n"), n = new Date, o = 0; e > o; o++) s = i.quickSortProperty(a.slice(0), 0, a.length - 1, "y");
            for (DEBUG && console.log("Quick:", new Date - n, ":", s, "\n"), n = new Date, o = 0; e > o; o++) s = i.insertionSortProperty(a.slice(0), "y");
            DEBUG && console.log("Insertion:", new Date - n, ":", s, "\n")
        }
    }, {}],
    57: [function(t, e) {
        var i = t("./../Timestep"),
            n = function(t, e) {
                this.currentCount = 0, this.delay = t, this.timeLeft = this.delay, this.repeatCount = Math.max(0, e) || 0, this.removeOnComplete = !0, this.signals = {}, this.signals.timer = new signals.Signal, this.signals.timerComplete = new signals.Signal, this._running = !1, this._invalid = !1
            };
        e.exports = n, n.s2ms = function(t) {
            return 1e3 * t
        }, n.ms2s = function(t) {
            return t / 1e3
        }, n.prototype.start = function() {
            this._running = !0
        }, n.prototype.stop = function() {
            this._running = !1
        }, n.prototype.reset = function() {
            this.currentCount = 0, this.timeLeft = this.delay, this.stop()
        }, n.prototype.update = function() {
            !this._running || this.complete || this._invalid || (this.timeLeft > 0 ? this.timeLeft -= i.deltaTime : (this.timeLeft = this.delay + this.timeLeft, ++this.currentCount, this.signals.timer.dispatch(this), this.complete && (this.timeLeft = 0, this.signals.timerComplete.dispatch(this))))
        }, n.prototype.dispose = function() {
            this._invalid = !0, this.stop(), this.signals.timer.dispose(), this.signals.timerComplete.dispose()
        }, Object.defineProperty(n.prototype, "running", {
            get: function() {
                return this._running && !this.complete
            }
        }), Object.defineProperty(n.prototype, "invalid", {
            get: function() {
                return this._invalid
            }
        }), Object.defineProperty(n.prototype, "complete", {
            get: function() {
                return this.repeatCount && this.currentCount >= this.repeatCount
            }
        })
    }, {
        "./../Timestep": 5
    }],
    58: [function(t, e) {
        var i = t("./../Canvas"),
            n = function() {};
        e.exports = n, n.VERSION = "01.02.00", n.PI = 3.141592653589793, n.TO_RADIANS = .017453292519943295, n.TO_DEGREES = 57.29577951308232, n.TextFieldStripUnderScores = function(t, e) {
            return t.replace(/[_]/g, e)
        }, n.HexToRGB = function(t) {
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            } : null
        }, n.randomInt = function(t, e) {
            t = parseInt(t), e = parseInt(e), e = e || 0;
            var i;
            return t > e ? (i = Math.round(Math.random() * (t - e)), Math.round(e + i)) : e > t ? (i = Math.round(Math.random() * (e - t)), Math.round(e - i)) : t
        }, n.randomBoolean = function() {
            return Math.random() >= .5
        }, n.roundNumber = function(t, e) {
            e = e || 0;
            var i = Math.pow(10, e);
            return Math.round(Math.floor(t * i) / i)
        }, n.padNumber = function(t, e) {
            e = e || 0;
            var i = Math.abs(t),
                n = Math.max(0, e - ("" + Math.floor(i)).length),
                s = ("" + Math.pow(10, n)).substr(1);
            return 0 > t && (s = "-" + s), s + i
        }, n.roundToPointFive = function(t) {
            return Math.round(2 * t) / 2
        }, n.stringToFunction = function(t) {
            for (var e = t.split("."), i = window = window.self, n = i || this, s = 0, o = e.length; o > s; s++) n = n[e[s]];
            if ("function" != typeof n) throw Error("[Utils.stringToFunction] function not found = " + t);
            return n
        }, n.distanceSqrt = function(t, e) {
            var i = 0,
                n = 0;
            return i = t.x - e.x, i *= i, n = t.y - e.y, n *= n, Math.sqrt(i + n)
        }, n.distanceSqrtFast = function(t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)
        }, n.shuffleArray = function(t) {
            for (var e = t.length, i = null, n = null; 0 !== e;) n = Math.floor(Math.random() * e), e -= 1, i = t[e], t[e] = t[n], t[n] = i;
            return t
        }, n.randomItemFromArray = function(t) {
            return t[n.randomInt(t.length - 1)]
        }, n.rectangleIntersects = function(t, e) {
            return !(t.x > e.x + e.width || e.x > t.x + t.width || t.y > e.y + e.height || e.y > t.y + t.height)
        }, n.validateEmail = function(t) {
            var e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return e.test(t)
        }, n.commaFormatNumber = function(t) {
            return (t + "").replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
        }, n.checkStringForMatch = function(t, e) {
            var i = e.join("|"),
                n = RegExp(i),
                s = t.search(n);
            return -1 != s ? !0 : !1
        }, n.getURLParameter = function(t, e) {
            var i = decodeURI((RegExp(t + "=(.+?)(&|$)").exec(location.search) || [, null])[1]);
            return "null" === i && e && (i = e), i
        }, n.goBack = function(t) {
            t = t || -1;
            var e = window.top || window;
            e.history.go(t)
        }, n.convertStringToXML = function(t) {
            var e, i = window.top || window;
            return (e = i.DOMParser ? function(t) {
                return (new i.DOMParser).parseFromString(t, "text/xml")
            } : void 0 !== i.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM") ? function(t) {
                var e = new i.ActiveXObject("Microsoft.XMLDOM");
                return e.async = "false", e.loadXML(t), e
            } : function() {
                return null
            })(t)
        }, n.stringToBoolean = function(t) {
            switch (("" + t).toLowerCase()) {
                case "true":
                case "yes":
                case "1":
                    return !0;
                case "false":
                case "no":
                case "0":
                case null:
                    return !1;
                default:
                    return !!string
            }
        }, n.clampNumber = function(t, e, i) {
            return Math.min(Math.max(t, e), i)
        }, n.normaliseNumber = function(t, e, i) {
            return (t - e) / (i - e)
        }, n.lerpNumber = function(t, e, i) {
            return (i - e) * t + e
        }, n.mapNumber = function(t, e, i, s, o) {
            return n.lerpNumber(n.normaliseNumber(t, e, i), s, o)
        }, n.scaleValue = function(t, e) {
            return e / t
        }, n.pointInRect = function(t, e) {
            return n.inRange(t.x, e.x, e.x + e.width) && n.inRange(t.y, e.y, e.y + e.height)
        }, n.inRange = function(t, e, i) {
            return t >= Math.min(e, i) && t <= Math.max(e, i)
        }, n.generateGUID = function() {
            var t = (new Date).getTime(),
                e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            return e.replace(/[xy]/g, function(e) {
                var i = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" == e ? i : 7 & i | 8).toString(16)
            })
        }, n.createHitAreaSprite = function(t) {
            var e = new PIXI.DisplayObjectContainer;
            if (e.interactive = !0, e.hitArea = new PIXI.Rectangle(0, 0, i.width, i.height), t) {
                var n = new PIXI.Graphics;
                n.beginFill("0x00ccff", .7), n.drawRect(0, 0, i.width, i.height), e.addChild(n)
            }
            return e
        }, n.createModalBlock = function(t, e, n, s, o) {
            t = t || "0x000000", e = void 0 === e ? .7 : e;
            var r = n || i.width,
                a = s || i.height;
            o = o || 1;
            var h = new PIXI.Graphics;
            h.beginFill(t, e), h.drawRect(0, 0, r, a);
            var l = new PIXI.Sprite(h.generateTexture(o));
            return l.interactive = !0, l.buttonMode = !1, l.mousedown = l.mouseup = l.click = l.tap = function() {}, l
        }, n.cloneObject = function(t) {
            if (null == t || "object" != typeof t) return t;
            var e = t.constructor();
            for (var i in t) t.hasOwnProperty(i) && (e[i] = n.cloneObject(t[i]));
            return e
        }, n.calculateParabola = function(t, e, i, n, s, o) {
            i -= t, n = -(n - e);
            var r;
            r = n > 0 ? n + o : o;
            var a, h = n,
                l = -2 * i * r,
                c = r * i * i,
                u = (-l + Math.sqrt(l * l - 4 * h * c)) / (2 * h),
                p = (-l - Math.sqrt(l * l - 4 * h * c)) / (2 * h);
            a = n > 0 && i > 0 || 0 > n && 0 > i ? Math.min(u, p) : Math.max(u, p);
            for (var d, _, g = -r / (a * a), f = [], m = [], y = 0; s + 1 > y; y++) d = y * i / s, _ = g * (d * d - 2 * d * a), m.push(d + t), f.push(e - _);
            return {
                x: m,
                y: f
            }
        }, n.logNestedArray = function(t) {
            var e = JSON.stringify(t);
            e = e.replace(/(?:],)/g, "],\n"), console.log(e)
        }
    }, {
        "./../Canvas": 3
    }]
}, {}, [27]);