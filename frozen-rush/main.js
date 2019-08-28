! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        var d = a("./display/MovieClip"),
            e = a("./display/particles/ParticleSystem"),
            f = a("./utils/Timer"),
            g = function() {
                this._particleSystems = null, this._emitters = null, this._movieClips = null, this._timers = null, this._tweens = null, this._paused = !1, this.init()
            };
        b.exports = g, g.prototype.init = function() {
            this._movieClips = [], this._particleSystems = [], this._emitters = [], this._tweens = [], this._timers = [], this._paused = !1
        }, g.prototype.update = function() {
            this._paused || (this._updateEmitters(), this._updateParticleSystems(), this._updateTimers())
        }, g.prototype.add = function(a) {
            if (a instanceof e) {
                if (-1 != this._particleSystems.indexOf(a)) throw new Error("'ParticleSystem' already added!");
                this._particleSystems.push(a)
            } else if (a instanceof cloudkid.Emitter) {
                if (-1 != this._emitters.indexOf(a)) throw new Error("'Emitter' already added!");
                this._emitters.push(a)
            } else if (a instanceof d) {
                if (-1 != this._movieClips.indexOf(a)) throw new Error("'MovieClip' already added!");
                this._movieClips.push(a)
            } else if (a instanceof TweenMax || a instanceof TimelineMax) {
                if (-1 != this._tweens.indexOf(a)) throw new Error("'Tween' already added!");
                this._tweens.push(a)
            } else if (a instanceof f) {
                if (-1 != this._timers.indexOf(a)) throw new Error("'Timer' already added!");
                this._timers.push(a)
            }
            return a
        }, g.prototype.remove = function(a) {
            var b;
            if (a instanceof e) {
                if (b = this._particleSystems.indexOf(a), -1 == b) throw new Error("'ParticleSystem' is not added!");
                a.__updateTransform && (a.updateTransform = a.__updateTransform, a.__updateTransform = null), this._particleSystems.splice(b, 1)
            } else if (a instanceof cloudkid.Emitter) {
                if (b = this._emitters.indexOf(a), -1 == b) throw new Error("'Emitter' is not added!");
                this._emitters.splice(b, 1)
            } else if (a instanceof d) {
                if (b = this._movieClips.indexOf(a), -1 == b) throw new Error("'MovieClip' is not added!");
                a.__updateTransform && (a.updateTransform = a.__updateTransform, a.__updateTransform = null), this._movieClips.splice(b, 1)
            } else if ((a instanceof TweenMax || a instanceof TimelineMax) && -1 != this._tweens.indexOf(a)) {
                if (b = this._tweens.indexOf(a), -1 == b) throw new Error("'Tween' is not added!");
                this._tweens.splice(b, 1)
            } else if (a instanceof f && -1 != this._timers.indexOf(a)) {
                if (b = this._timers.indexOf(a), -1 == b) throw new Error("'Timer' is not added!");
                this._timers.splice(b, 1)
            }
        }, g.prototype.removeAll = function(a, b, c, d) {
            a = "boolean" == typeof a ? a : !0, b = "boolean" == typeof b ? b : !0, c = "boolean" == typeof c ? c : !0, d = "boolean" == typeof d ? d : !0, a && (this._particleSystems.length = this._emitters.length = 0), b && (this._movieClips.length = 0), c && this.removeAllTweens(!0), d && (this._timers.length = 0)
        }, g.prototype.removeAllTweens = function(a) {
            for (var b, c = 0; c < this._tweens.length; ++c) b = this._tweens[c], a && b.kill();
            this._tweens.length = 0
        }, g.prototype.setTimeout = function(a, b, c) {
            c = c || window;
            var d = new p3.Timer(b, 1);
            return d.signals.timerComplete.addOnce(function() {
                a.call(c), this.remove(d)
            }, this), d.start(), this.add(d), d
        }, g.prototype._playMovieClips = function() {
            for (var a, b = this._movieClips.length, c = 0; b > c; ++c) a = this._movieClips[c], a.__updateTransform && (a.updateTransform = a.__updateTransform, a.__updateTransform = null)
        }, g.prototype._pauseMoveClips = function() {
            for (var a, b = this._movieClips.length, c = 0; b > c; ++c) a = this._movieClips[c], a.__updateTransform || (a.__updateTransform = a.updateTransform, a.updateTransform = function() {
                p3.MovieClip.superClass_.updateTransform.call(this)
            })
        }, g.prototype._playTweens = function() {
            for (var a, b = this._tweens.length, c = 0; b > c; ++c) a = this._tweens[c], a.resume()
        }, g.prototype._pauseTweens = function() {
            for (var a, b = this._tweens.length, c = 0; b > c; ++c) a = this._tweens[c], a.pause()
        }, g.prototype._updateParticleSystems = function() {
            for (var a, b = this._particleSystems.length, c = b - 1; c >= 0; --c) a = this._particleSystems[c], a.update()
        }, g.prototype._updateEmitters = function() {
            for (var a, b = this._emitters.length, c = b - 1; c >= 0; --c) a = this._emitters[c], a.update(p3.Timestep.deltaTime)
        }, g.prototype._updateTimers = function() {
            for (var a, b = this._timers.length, c = b - 1; c >= 0; --c) a = this._timers[c], a.update()
        }, Object.defineProperty(g.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(a) {
                this._paused = a, this._paused ? (this._pauseMoveClips(), this._pauseTweens()) : (this._playMovieClips(), this._playTweens())
            }
        })
    }, {
        "./display/MovieClip": 12,
        "./display/particles/ParticleSystem": 17,
        "./utils/Timer": 57
    }],
    2: [function(a, b, c) {
        var d = a("./text/FontAtlas"),
            f = (a("./utils/Utils"), function() {
                if (!f.__allowInstance) throw new Error("AssetManager is a Singleton, use 'instance'.");
                this.signalCompleted = new signals.Signal, this.signalProgress = new signals.Signal, this.progress = 0, this.resources = {}, this.fontAtlases = {}, this._pixiAssetLoader = null, this._manifest = [], this._scaleFactor = 1, this._completeDelay = 0
            });
        f.prototype.constructor = f, b.exports = f, f.instance = null, Object.defineProperty(f, "instance", {
            get: function() {
                return f.__instance || (f.__allowInstance = !0, f.__instance = new f, f.__allowInstance = !1), f.__instance
            }
        }), f.__instance = null, f.__allowInstance = !1, f.VERSION = "02.00.00", f.DEBUG = !1, f.EVENT_ON_COMPLETE = "onComplete", f.EVENT_ON_PROGRESS = "onProgress", f.FILETYPE_PNG = ".png", f.FILETYPE_JPG = ".jpg", f._IMAGE = "_image", f.prototype.addFiles = function(a, b) {
            if (b = b || "", null != b && b.length > 0)
                for (var c = a.length, d = 0; c > d; d++) {
                    var e = a[d].url;
                    a[d].url = b + e
                }
            return this._manifest = this._manifest.concat(a), this._manifest
        }, f.prototype.load = function(a) {
            if (this._completeDelay = a || 0, !this._manifest || 0 === this._manifest.length) throw Error('[AssetManager.load] - The manifest is either null or it is empty. Make sure you have added files via "addFiles()" before calling "load()".');
            return this.progress = 0, this._pixiAssetLoader || (this._pixiAssetLoader = new PIXI.loaders.Loader, this._pixiAssetLoader.on("progress", this._onProgress, this), this._pixiAssetLoader.on("complete", this._onComplete, this), this._pixiAssetLoader.on("error", this._onError, this)), this._pixiAssetLoader.add(this._manifest), this._pixiAssetLoader.load(), this._manifest
        }, f.prototype.getTexture = function(a, b) {
            b = b || f.FILETYPE_PNG;
            try {
                var c = PIXI.Texture.fromFrame(a + b)
            } catch (d) {
                if (!this.resources[a]) throw Error('[AssetManager.getTexture] - Texture does not exist: "' + a + '". Are you tring to get a texture from an Atlas? If so use "getSprite()".');
                c = this.resources[a].texture
            }
            return c
        }, f.prototype.getSprite = function(a, b, c) {
            var d = this.getTexture(a, c),
                e = new PIXI.Sprite(d);
            return b && (e.anchor.x = .5, e.anchor.y = .5), e
        }, f.prototype.getJSON = function(a, b) {
            var c = b ? p3.Utils.cloneObject(this.resources[a].data) : this.resources[a].data;
            if (!c) throw Error('[AssetManager.getJSON] - Json does not exist: "' + a + '".');
            return c
        }, f.prototype.getFontAtlas = function(a) {
            var b = this.fontAtlases[a];
            if (!b) throw new Error('[AssetManager.getJSON] - FontAtlas does not exist: "' + a + '".');
            return b
        }, f.prototype.getSpineData = function(a) {
            var b = this.resources[a];
            if (!b || b && !b.spineData) throw new Error('[AssetManager.getJSON] - SpineData does not exist: "' + a + '".');
            return b.spineData
        }, f.prototype.reset = function() {
            this.progress = 0, this._manifest = [], null != this._pixiAssetLoader && this._pixiAssetLoader.reset()
        }, f.prototype._checkForFontAtlas = function(a) {
            if (a.data && a.data.font) {
                var b = a.data.font,
                    c = b.pages.page.file,
                    d = c.match(/([^\/]+)(?=\.\w+$)/gim),
                    e = a.url;
                e = e.substring(0, e.lastIndexOf("/"));
                var g = e + "/" + c;
                this._pixiAssetLoader.add({
                    name: d + f._IMAGE,
                    url: g
                })
            }
        }, f.prototype._buildFontAtlases = function() {
            for (var a in this.resources)
                if (this.resources.hasOwnProperty(a)) {
                    var b = this.resources[a];
                    if (b.data.font) {
                        var c = b.url,
                            e = c.match(/([^\/]+)(?=\.\w+$)/gim),
                            g = this.getTexture(e + f._IMAGE);
                        this.fontAtlases[a] = new d(a, b.data, g)
                    }
                }
        }, f.prototype._onProgress = function(a, b) {
            this.progress = a.progress, this._checkForFontAtlas(b), this.signalProgress.dispatch(a, this.progress)
        }, f.prototype._onComplete = function(a, b) {
            for (var c in b) this.resources[c] || (this.resources[c] = b[c]);
            this._buildFontAtlases();
            var d = this;
            setTimeout(function() {
                d.reset(), d.signalCompleted.dispatch()
            }, 1e3 * this._completeDelay)
        }, f.prototype._onError = function(a, b) {
            console.log("[AssetManager] There was an error", a, b)
        }, Object.defineProperty(f.prototype, "scaleFactor", {
            get: function() {
                return this._scaleFactor
            },
            set: function(a) {
                this._scaleFactor = a
            }
        }), Object.defineProperty(f.prototype, "scaleFactorInverse", {
            get: function() {
                return 1 / this._scaleFactor
            }
        }), Object.defineProperty(f.prototype, "pixiLoader", {
            get: function() {
                return this._pixiAssetLoader
            }
        }), Object.defineProperty(f.prototype, "manifest", {
            get: function() {
                return this._manifest
            }
        })
    }, {
        "./text/FontAtlas": 48,
        "./utils/Utils": 58
    }],
    3: [function(a, b, c) {
        var e = (a("./CanvasParams"), a("./utils/Device")),
            f = function(a) {
                this.params = a, this.signalReady = new signals.Signal, this.signalChange = new signals.Signal, this.window = window = window.self, this.imageOverlay = null, this.backgroundImage = null, this.width = 0, this.height = 0, this.orientation = "", this.holderElement = null, this.iosfixElement = null, this.canvasElement = null, this.autoResize = !0, this.isAndroidStockBrowser = e.isAndroidStockBrowser, this._isReadyDone = !1, this._targetOrientation = "", f.params = this.params, f.center = new PIXI.Point(0, 0), this.params.width > this.params.height ? this._targetOrientation = f.LANDSCAPE : this._targetOrientation = f.PORTRAIT, this.params.forceLetterbox || e.isAndroidStockBrowser && f.params.stockAndroidLetterbox, this.window.onload = this.onLoad.bind(this)
            };
        b.exports = f, f.LANDSCAPE = "landscape", f.PORTRAIT = "portrait", f.DEFAULT_HOLDER_ID = "p3gameholder", f.DEFAULT_CANVAS_ID = "p3gamecanvas", f.DEFAULT_IMAGE_OVERLAY_ID = "p3imageoverlay", f.DEFAULT_BACKGROUND_IMAGE_ID = "p3backgroundimage", f.canvasElement = null, f.holderElement = null, f.iosfixElement = null, f.width = 0, f.height = 0, f.center = null, f.stage = null, f.renderer = null, f.params = null, f.prototype.init = function(a) {
            if (this._initHolder(), this._initCanvas(), this._initImageOverlay(), e.isCocoonJS || this._disableUnwantedInteractions(), this.signalReady.dispatch(), e.isCocoonJS) this.width = this.params.width * (window.innerWidth / this.params.width) / (window.innerHeight / this.params.height), this.height = this.params.height, this.updateSize(this.width, this.height), this.signalReady.dispatch();
            else if (a) this.holderElement.style.width = this.params.width + "px", this.holderElement.style.height = this.params.height + "px", f.width = this.width = this.params.width, f.height = this.height = this.params.height, this.signalReady.dispatch(), this.signalChange.dispatch(!0);
            else {
                this.window.addEventListener("resize", this._onResizeEvent.bind(this), !1);
                var b = this._checkOrientation();
                this._toggleRotateImage(!b), b && this._checkOrientationAndThenResize()
            }
        }, f.prototype.updateSize = function(a, b) {
            f.width = this.width = Math.floor(a), f.height = this.height = Math.floor(b), f.center.x = Math.floor(.5 * f.width), f.center.y = Math.floor(.5 * f.height)
        }, f.prototype._initHolder = function() {
            e.isCocoonJS || (this.params.holderID ? this.holderElement = document.getElementById(this.params.holderID) : (document.getElementById(f.DEFAULT_HOLDER_ID) && console.warn("[p3.Canvas] You have not set a 'HolderId' and there is already one on the page with the DEFAULT_ID, attempting to use it. " + f.DEFAULT_HOLDER_ID), this.holderElement = document.createElement("div"), this.holderElement.id = f.DEFAULT_HOLDER_ID, document.body.appendChild(this.holderElement)), this.holderElement.style.left = 0, this.holderElement.style.top = 0, this.holderElement.style.position = "absolute", this.holderElement.style.width = this.window.innerWidth + "px", this.holderElement.style.height = this.window.innerHeight + "px", f.holderElement = this.holderElement, p3.Device.isIOS && (this.iosfixElement = document.createElement("iosfix"), this.iosfixElement.id = "iosfix", this.iosfixElement.style.position = "absolute", this.iosfixElement.style.width = "100%", this.iosfixElement.style.height = this.holderElement.height + 1, this.iosfixElement.style.left = 0, this.iosfixElement.style.right = 0, this.iosfixElement.style.top = 0, this.iosfixElement.style.bottom = 0, this.iosfixElement.style.visibility = "hidden", document.body.appendChild(this.iosfixElement), f.iosfixElement = this.iosfixElement))
        }, f.prototype._initCanvas = function() {
            e.isCocoonJS ? (this.canvasElement = document.createElement("screencanvas"), this.canvasElement.id = f.DEFAULT_CANVAS_ID, this.canvasElement.width = this.params.width, this.canvasElement.height = this.params.height, this.canvasElement.style.cssText = "idtkscale:ScaleAspectFill;", document.body.appendChild(this.canvasElement)) : (this.params.canvasID ? this.canvasElement = document.getElementById(this.params.canvasID) : (document.getElementById(f.DEFAULT_HOLDER_ID) && console.warn("[p3.Canvas] You have not set a 'CanvasID' and there is already a canvas with on the page with the DEFAULT_ID, attempting to use it. " + f.DEFAULT_CANVAS_ID), this.canvasElement = document.createElement("canvas"), this.canvasElement.id = f.DEFAULT_CANVAS_ID), this.canvasElement.style.left = 0, this.canvasElement.style.right = 0, this.canvasElement.style.top = 0, this.canvasElement.style.bottom = 0, this.canvasElement.style.position = "absolute", this.canvasElement.style.width = "100%", this.canvasElement.style.height = "100%", (this.params.forceLetterbox || e.isAndroidStockBrowser && f.params.stockAndroidLetterbox) && (this.canvasElement.style.margin = "auto", this.canvasElement.style.width = "auto"), this.canvasElement.style.overflow = "visible", this.canvasElement.style.display = "block", this.holderElement.appendChild(this.canvasElement), this.window.focus(), this.canvasElement.tabIndex = 1), f.canvasElement = this.canvasElement
        }, f.prototype._initImageOverlay = function() {
            if (!e.isCocoonJS) {
                if (document.getElementById(f.DEFAULT_IMAGE_OVERLAY_ID)) throw Error("[Canvas] There is already a div with that id on the page, are you using it? : " + f.DEFAULT_IMAGE_OVERLAY_ID);
                this.imageOverlay = document.createElement("div"), this.imageOverlay.id = f.DEFAULT_IMAGE_OVERLAY_ID, this.imageOverlay.style.left = "0", this.imageOverlay.style.top = "0", this.imageOverlay.style.width = "auto", this.imageOverlay.style.height = "100%", this.imageOverlay.style.marginLeft = "auto", this.imageOverlay.style.marginRight = "auto", this.imageOverlay.style.overflow = "visible", this.imageOverlay.style.display = "none", this.imageOverlay.style.backgroundColor = this.params.rotateImageBackgroundColor, this.imageOverlay.style.backgroundImage = "url(" + this.params.rotateImageSrc + ")", this.imageOverlay.style.backgroundPosition = "50% 50%", this.imageOverlay.style.backgroundRepeat = "no-repeat", this.imageOverlay.style.backgroundSize = "contain", this.holderElement.appendChild(this.imageOverlay)
            }
        }, f.prototype._initBackgroundImage = function() {
            if (!e.isCocoonJS) {
                if (document.getElementById(f.DEFAULT_BACKGROUND_IMAGE_ID)) throw Error("[Canvas] There is already a div with that id on the page, are you using it? : " + f.DEFAULT_BACKGROUND_IMAGE_ID);
                this.backgroundImage = document.createElement("div"), this.backgroundImage.id = f.DEFAULT_BACKGROUND_IMAGE_ID, this.backgroundImage.style.left = "0", this.backgroundImage.style.top = "0", this.backgroundImage.style.height = "100%", this.backgroundImage.style.width = "auto", this.backgroundImage.style.overflow = "visible", this.backgroundImage.style.display = "block", this.backgroundImage.style.backgroundImage = "url(" + this.params.backgroundImageSrc + ")", this.backgroundImage.style.backgroundPosition = "50% 50%", this.backgroundImage.style.backgroundRepeat = "no-repeat", this.backgroundImage.style.backgroundSize = "auto 100%", this.holderElement.appendChild(this.backgroundImage)
            }
        }, f.prototype._checkOrientation = function() {
            return this.window.innerWidth > this.window.innerHeight ? this.orientation = f.LANDSCAPE : this.orientation = f.PORTRAIT, e.isMobile ? this.orientation === this._targetOrientation : !0
        }, f.prototype._resize = function() {
            if (window.scrollTo(0, 0), this.params.forceLetterbox || e.isAndroidStockBrowser && f.params.stockAndroidLetterbox) f.width = this.width = this.params.width, f.height = this.height = this.params.height;
            else {
                console.log(this.window.innerWidth), console.log(this.window.innerHeight);
                var a = this.window.innerWidth / this.params.width,
                    d = (this.params.width / this.window.innerWidth, this.window.innerHeight / this.params.height, this.params.height / this.window.innerHeight),
                    g = this.params.width,
                    h = this.params.height;
                g = Math.floor(this.params.width * a * d), h = this.params.height, f.width = this.width = this.canvasElement.width = g, f.height = this.height = this.canvasElement.height = h
            }
            this.updateSize(f.width, f.height)
        }, f.prototype._toggleRotateImage = function(a) {
            a ? (this.imageOverlay.style.display = "block", this.canvasElement.style.display = "none") : (this.canvasElement.style.display = "block", this.imageOverlay.style.display = "none")
        }, f.prototype._checkOrientationAndThenResize = function() {
            e.isIframe ? (this.holderElement.style.width = "100%", this.holderElement.style.height = "100%") : (this.holderElement.style.width = this.window.innerWidth + "px", this.holderElement.style.height = this.window.innerHeight + "px"), p3.Device.isIOS && (this.iosfixElement.style.height = parseInt(this.holderElement.style.height) + 1 + "px");
            var a = this._checkOrientation();
            this._toggleRotateImage(!a), a && (this._resize(), this._isReadyDone || (this._isReadyDone = !0, this.signalReady.dispatch())), this._isReadyDone && this.signalChange.dispatch(a)
        }, f.prototype._disableUnwantedInteractions = function() {
            f.canvasElement.addEventListener("touchmove", function(a) {
                return a.preventDefault(), !1
            }), f.canvasElement.addEventListener("touchstart", function(a) {
                return a.preventDefault(), !1
            }), f.canvasElement.addEventListener("touchend", function(a) {
                return a.preventDefault(), !1
            }), e.isAndroidStockBrowser && (f.canvasElement.addEventListener("mousedown", function(a) {
                a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation()
            }, !1), f.canvasElement.addEventListener("mouseup", function(a) {
                a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation()
            }, !1), f.canvasElement.addEventListener("click", function(a) {
                a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation()
            }, !1))
        }, f.prototype.onLoad = function() {
            var a = this;
            setTimeout(function() {
                a.init()
            }, 0)
        }, f.prototype._onResizeEvent = function(a) {
            this._checkOrientationAndThenResize()
        }
    }, {
        "./CanvasParams": 4,
        "./utils/Device": 54
    }],
    4: [function(a, b, c) {
        function d() {
            this.width = 0, this.height = 0, this.holderID = "", this.canvasID = "", this.rotateImageSrc = "", this.rotateImageBackgroundColor = "#FFFFFF", this.backgroundImageSrc = "", this.forceCanvasMode = !1, this.forceLetterbox = !1, this.stockAndroidCanvasMode = !0, this.stockAndroidLetterbox = !1
        }
        b.exports = d
    }, {}],
    5: [function(a, b, c) {
        var d = function(a) {
            this.maxElapsedMS = 100, this._type = a || d.VARIABLE, this._lastTime = d.timeInSeconds, this._accumulator = 0
        };
        b.exports = d, d.VERSION = "2.0.0", d.VARIABLE = "variable", d.SEMI_FIXED = "semi_fixed", d.FIXED = "fixed", d.deltaTime = 1, d.speed = 1, d.queue = [], d.queueCall = function(a, b, c) {
            d.queue.push({
                func: a,
                args: b,
                scope: c
            })
        }, d.executeCalls = function() {
            for (var a, b = 0; b < d.queue.length; ++b) a = d.queue[b], a.func.apply(a.scope, a.args);
            d.queue.length = 0
        }, d.prototype.init = function(a, b, c) {
            function g() {
                var g = window.performance.now(),
                    h = Math.min(f.maxElapsedMS, g - f._lastTime);
                d.deltaTime = .001 * h * d.speed, f._lastTime = g, d.executeCalls(), a.call(c), b.call(c), requestAnimationFrame(e)
            }

            function h() {
                var g = .001 * window.performance.now(),
                    h = g - f._lastTime;
                for (f._lastTime = g, d.executeCalls(), f._accumulator += h; f._accumulator >= d.deltaTime;) a.call(c), f._accumulator -= d.deltaTime;
                b.call(c), requestAnimationFrame(e)
            }

            function i() {
                d.executeCalls(), a.call(c), b.call(c), requestAnimationFrame(e)
            }
            var e, f = this;
            switch (this._type) {
                case d.VARIABLE:
                    e = g, this._lastTime = 0;
                    break;
                case d.SEMI_FIXED:
                    e = h, this._lastTime = 0, this._accumulator = 0, d.deltaTime = 1 / 60;
                    break;
                case d.FIXED:
                    e = i, d.deltaTime = 1 / 60
            }
            requestAnimationFrame(e), window.onfocus = function() {
                f._lastTime = d.timeInSeconds
            }
        }, Object.defineProperty(d, "frameInterval", {
            get: function() {
                return this._frameInterval
            }
        }), Object.defineProperty(d, "time", {
            get: function() {
                return window.performance.now()
            }
        }), Object.defineProperty(d, "timeInSeconds", {
            get: function() {
                return d.time / 1e3
            }
        })
    }, {}],
    6: [function(a, b, c) {
        var d = a("./utils/Device"),
            f = (a("./ViewParams"), function(a) {
                this.params = a, this.signals = {}, this.signals.ready = new signals.Signal, this.signals.resize = new signals.Signal, this._holder = null, this._canvas = null, this._iosfix = null, this._rotateImage = null, this._width = this.params.width, this._height = this.params.height, this._targetOrientation = this.orientation, "complete" !== document.readyState ? window.self.onload = this.onLoad.bind(this) : this.onLoad()
            });
        b.exports = f, f.holder = null, f.canvas = null, f.width = 0, f.height = 0, f.center = new PIXI.Point, f.inverseCanvasScale = function(a, b) {
            return b = "string" == typeof b ? 1 / b : 1, a * (1 / (parseFloat(p3.View.holder.style.height) / parseFloat(p3.View.canvas.height))) * b
        }, f.prototype.onLoad = function() {
            function b() {
                this.createHolder(), this.createCanvas(), this.createRotateImage(), this.disableInteractions(), d.isCocoonJS ? (this.updateDimensions(this.params.width * (window.innerWidth / this.params.width) / (window.innerHeight / this.params.height), this.params.height), this.signals.ready.dispatch(this._canvas)) : (d.isAndroid ? window.self.addEventListener("orientationchange", this.onOrientationChange.bind(this), !1) : window.self.addEventListener("resize", this.onResize.bind(this), !1), this.signals.ready.dispatch(this._canvas), this.resize())
            }
            var a = this;
            setTimeout(function() {
                b.call(a)
            }, 0)
        }, f.prototype.onResize = function() {
            this.resize()
        }, f.prototype.onOrientationChange = function() {
            function b() {
                window.self.removeEventListener("resize", b, !1), a.resize()
            }
            window.self.addEventListener("resize", b, !1);
            var a = this
        }, f.prototype.createHolder = function() {
            d.isCocoonJS || (this._holder = document.getElementById(this.params.holderId), this._holder || (this._holder = document.createElement("div"), this._holder.id = this.params.holderId ? this.params.holderId : "game", document.body.appendChild(this._holder)), this._holder.style.position = "absolute", this._holder.style.left = "0px", this._holder.style.top = "0px", this._holder.style.width = window.self.innerWidth + "px", this._holder.style.height = window.self.innerHeight + "px", f.holder = this._holder, p3.Device.isIOS && (this._iosfix = document.createElement("div"), this._iosfix.id = "iosfix", this._iosfix.style.position = "absolute", this._iosfix.style.left = "0px", this._iosfix.style.right = "0px", this._iosfix.style.top = "0px", this._iosfix.style.bottom = "0px", this._iosfix.style.width = "100%", this._iosfix.style.height = this._holder.height + 1, this._iosfix.style.visibility = "hidden", document.body.appendChild(this._iosfix), f.iosfix = this._iosfix))
        }, f.prototype.createCanvas = function() {
            d.isCocoonJS ? (this._canvas = document.createElement("screencanvas"), this._canvas.id = "canvas", this._canvas.width = this.params.width, this._canvas.height = this.params.height, this._canvas.style.cssText = "idtkscale:ScaleAspectFill;", document.body.appendChild(this._canvas)) : (this._canvas = document.createElement("canvas"), this._canvas.id = "canvas", this._canvas.tabIndex = 1, this._canvas.style.position = "absolute", this._canvas.style.left = "0px", this._canvas.style.right = "0px", this._canvas.style.top = "0px", this._canvas.style.bottom = "0px", this._canvas.style.width = "100%", this._canvas.style.height = "100%", this._canvas.style.overflow = "visible", this._canvas.style.display = "block", this._holder.appendChild(this._canvas)), f.canvas = this._canvas
        }, f.prototype.createRotateImage = function() {
            d.isCocoonJS || (this._rotateImage = document.createElement("div"), this._rotateImage.id = "rotateImage", this._rotateImage.style.position = "absolute", this._rotateImage.style.left = "0px", this._rotateImage.style.top = "0px", this._rotateImage.style.width = "100%", this._rotateImage.style.height = "100%", this._rotateImage.style.marginLeft = "auto", this._rotateImage.style.marginRight = "0auto", this._rotateImage.style.overflow = "visible", this._rotateImage.style.display = "none", this._rotateImage.style.zIndex = 1e3, this._rotateImage.style.backgroundImage = "url(" + this.params.rotateImageUrl + ")", this._rotateImage.style.backgroundColor = this.params.rotateImageColor, this._rotateImage.style.backgroundPosition = "50% 50%", this._rotateImage.style.backgroundRepeat = "no-repeat", this._rotateImage.style.backgroundSize = "contain", this._holder.appendChild(this._rotateImage), this._rotateImage.addEventListener("touchmove", function(a) {
                return a.preventDefault(), !1
            }), this._rotateImage.addEventListener("touchstart", function(a) {
                return a.preventDefault(), !1
            }), this._rotateImage.addEventListener("touchend", function(a) {
                return a.preventDefault(), !1
            }))
        }, f.prototype.updateDimensions = function(a, b) {
            f.width = this._width = Math.round(a), f.height = this._height = Math.round(b), f.center.x = Math.round(.5 * a), f.center.y = Math.round(.5 * b)
        }, f.prototype.resize = function() {
            var a = d.isMobile ? document.documentElement.clientWidth : window.innerWidth,
                b = d.isMobile ? document.documentElement.clientHeight : window.innerHeight;
            d.isIframe ? (this._holder.style.width = "100%", this._holder.style.height = "100%") : (this._holder.style.width = a + "px", this._holder.style.height = b + "px"), p3.Device.isIOS && (this._iosfix.style.height = parseInt(this._holder.style.height) + 1 + "px"), window.scrollTo(0, 0);
            var c, e;
            this.params.aspectRatioFillHeight ? (c = a / this.params.width, e = this.params.height / b, this.updateDimensions(Math.floor(this.params.width * c * e), this.params.height)) : (c = this.params.width / a, e = b / this.params.height, this.updateDimensions(this.params.width, Math.floor(this.params.height * e * c))), this.toggleRotate(!this.isCorrectOrientation()), this.signals.resize.dispatch(this.isCorrectOrientation())
        }, f.prototype.toggleRotate = function(a) {
            this._canvas.style.display = a ? "none" : "block", this._rotateImage.style.display = a ? "block" : "none"
        }, f.prototype.isCorrectOrientation = function() {
            return d.isMobile ? this.orientation === this._targetOrientation : !0
        }, f.prototype.disableInteractions = function() {
            f.canvas.addEventListener("touchmove", function(a) {
                return a.preventDefault(), !1
            }), f.canvas.addEventListener("touchstart", function(a) {
                return a.preventDefault(), !1
            }), f.canvas.addEventListener("touchend", function(a) {
                return a.preventDefault(), !1
            }), d.isAndroidStockBrowser && (f.canvas.addEventListener("mousedown", function(a) {
                a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation()
            }, !1), f.canvas.addEventListener("mouseup", function(a) {
                a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation()
            }, !1), f.canvas.addEventListener("click", function(a) {
                a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation()
            }, !1))
        }, Object.defineProperty(f.prototype, "holder", {
            get: function() {
                return this._holder
            }
        }), Object.defineProperty(f.prototype, "orientation", {
            get: function() {
                return this._width >= this._height ? "landscape" : "portrait"
            }
        })
    }, {
        "./ViewParams": 7,
        "./utils/Device": 54
    }],
    7: [function(a, b, c) {
        function d() {
            this.width = 0, this.height = 0, this.holderId = "", this.rotateImageUrl = "", this.rotateImageColor = "#FFFFFF", this.aspectRatioFillHeight = !0
        }
        b.exports = d
    }, {}],
    8: [function(a, b, c) {
        var e = (a("./../utils/Utils"), a("./../utils/Device")),
            f = function() {
                if (!f.__allowInstance) throw new Error("AudioManager is a Singleton, use 'getInstance()'.");
                this.signalMute = new signals.Signal, this.SOUND_GROUP_SFX = "sound_group_sfx", this.SOUND_GROUP_MUSIC = "sound_group_music", this.SOUND_GROUP_VO = "sound_group_vo", this.LOCAL_STORAGE_ID = "p3Mute", this._sounds = {}, this._soundsSFX = [], this._soundsVO = [], this._soundsMusic = [], this._previouslyPlayedSound = null, this._isMute = !1, this._isMuteSFX = !1, this._isMuteMusic = !1, this._isMuteVO = !1;
                var a;
                "undefined" != typeof document.hidden ? (a = "hidden", this.visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (a = "msHidden", this.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), document.addEventListener(this.visibilityChange, function() {
                    document[a] ? Howler.volume(0) : Howler.volume(1)
                }, !1)
            };
        f.prototype.constructor = f, b.exports = f, f.instance = null, Object.defineProperty(f, "instance", {
            get: function() {
                return f.__instance || (f.__allowInstance = !0, f.__instance = new f, f.__allowInstance = !1), f.__instance
            }
        }), f.__instance = null, f.__allowInstance = !1, f.DEBUG = !1, f.FADE_OUT_DURATION = .5, f.prototype.addSounds = function(a, b, c) {
            c = c || "";
            for (var e = 0; e < a.length; e++) {
                for (var f = c + a[e], g = f.split("/"), h = g[g.length - 1], i = [], j = 0; j < b.length; j++) {
                    var k = b[j],
                        l = f + k;
                    i.push(l)
                }
                var m = new Howl({
                    urls: i,
                    volume: 1,
                    loop: !1,
                    autoplay: !1,
                    onload: function() {},
                    onloaderror: function() {
                        p3.SoundManager.DEBUG && console.warn("[AudioManager] Error loading sound:", h)
                    }
                });
                m.name = h, this._sounds[h] = m
            }
        }, f.prototype.removeSounds = function(a) {
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                for (var d in this._sounds)
                    if (this._sounds.hasOwnProperty(d)) {
                        var e = this._sounds[d];
                        if (e.name === c) {
                            e.unload(), e = null, this._sounds[d] = null, delete this._sounds[d];
                            break
                        }
                    }
            }
        }, f.prototype.playSound = function(a, b) {
            var c = this._checkSoundAlreadyPlaying(a, this._soundsSFX);
            if (c) return c.play(), c;
            var d = this._play(a, b, this.SOUND_GROUP_SFX);
            return d ? (this._soundsSFX.push(d), f.DEBUG && console.log("[AudioManager] Playing Sound:", a), d) : null
        }, f.prototype.playMusic = function(a, b) {
            var c = this._checkSoundAlreadyPlaying(a, this._soundsMusic);
            if (c) return c;
            b = b || {}, b.loop = "undefined" != typeof b.loop ? b.loop : !0, b.fadeIn = b.fadeIn || 1;
            var d = this._play(a, b, this.SOUND_GROUP_MUSIC);
            return d ? (this._soundsMusic.push(d), f.DEBUG && console.log("[AudioManager] Playing Music:", a), d) : null
        }, f.prototype.playVO = function(a, b) {
            var c = this._checkSoundAlreadyPlaying(a, this._soundsVO);
            if (c) return c;
            var d = this._play(a, b, this.SOUND_GROUP_VO);
            return d ? (this._soundsVO.push(d), f.DEBUG && console.log("[AudioManager] Playing VO:", a), d) : null
        }, f.prototype.mute = function(a) {
            this._isMute = a, this.muteSFX(this._isMute), this.muteMusic(this._isMute), this.muteVO(this._isMute), a ? Howler.mute() : Howler.unmute(), this.signalMute.dispatch(this._isMute)
        }, f.prototype.muteSFX = function(a) {
            this._isMuteSFX = a, this._isMute = a, this._updateSoundMuteStatus(this._isMuteSFX, this._soundsSFX), f.DEBUG && console.log("[AudioManager] MuteSFX:", this._isMuteSFX)
        }, f.prototype.muteMusic = function(a) {
            this._isMuteMusic = a, this._isMute = a, this._updateSoundMuteStatus(this._isMuteMusic, this._soundsMusic), f.DEBUG && console.log("[AudioManager] MuteMusic:", this._isMuteMusic)
        }, f.prototype.muteVO = function(a) {
            this._isMuteVO = a, this._sMute = a, this._updateSoundMuteStatus(this._isMuteVO, this._soundsVO), f.DEBUG && console.log("[AudioManager] MuteVO:", this._isMuteVO)
        }, f.prototype.toggleMute = function() {
            this.mute(!this.isMute)
        }, f.prototype.stopSound = function(a) {
            for (var b = [this._soundsSFX, this._soundsVO, this._soundsMusic], c = 0; c < b.length; c++) {
                var d = b[c],
                    e = this._checkSoundAlreadyPlaying(a, d);
                if (e) return void e.stop()
            }
            f.DEBUG && console.log("[SoundManager] StopSound: Could not find sound to stop it:", a)
        }, f.prototype._saveMuteStatus = function() {
            try {
                localStorage.setItem(this.LOCAL_STORAGE_ID, this._isMute)
            } catch (a) {
                "QUOTA_EXCEEDED_ERR" == a ? p3.SoundManager.DEBUG && console.log("Error trying to write to local storage. Quota exceeded. ") : p3.SoundManager.DEBUG && console.log("Error trying to write to local storage.")
            }
        }, f.prototype._play = function(a, b, c) {
            var g, d = this,
                h = a;
            if (b = b || {}, b.volume = b.volume || 1, b.loop = "undefined" != typeof b.loop ? b.loop : !1, b.delay = b.delay || 0, b.fadeIn = "undefined" != typeof b.fadeIn ? 1e3 * b.fadeIn : 0, b.onComplete = b.onComplete || null, b.onCompleteScope = b.onCompleteScope || window, b.dontRepeat = "undefined" != typeof b.dontRepeat ? b.dontRepeat : !0, "string" != typeof a) {
                if (!(a.length >= 0)) throw Error("[AudioManager] Sound is not a string or array: ", a);
                if (a.length > 1) {
                    var i = Math.floor(Math.random() * a.length);
                    if (b.dontRepeat)
                        for (var j = 0; i === this._previouslyPlayedSound;)
                            if (i = Math.floor(Math.random() * a.length), j++, j > 10) {
                                i = 0;
                                break
                            }
                    h = a[i], this._previouslyPlayedSound = h
                } else h = a[0]
            }
            for (var k in this._sounds)
                if (this._sounds.hasOwnProperty(k)) {
                    var l = this._sounds[k];
                    if (l.name === h) {
                        g = l;
                        break
                    }
                }
            if (!g) return void console.warn("[AudioManager] Could not find the sound:", a);
            g.volume(b.volume), g.loop(b.loop), e && e.isAndroidStockBrowser && (g.buffer = !0), g.on("end", function() {
                this.off("end"), b.loop || d._removeSoundFromArray(this, c), b.onComplete && b.onComplete.call(b.onCompleteScope), f.DEBUG && console.log("[AudioManager] Sound ended:", this.name)
            });
            var m;
            switch (c) {
                case this.SOUND_GROUP_SFX:
                    m = this._isMuteSFX;
                    break;
                case this.SOUND_GROUP_MUSIC:
                    m = this._isMuteMusic, this._stopExistingSound(c, b.fadeIn);
                    break;
                case this.SOUND_GROUP_VO:
                    m = this._isMuteVO, this._stopExistingSound(c, b.fadeIn);
                    break;
                default:
                    m = !1
            }
            return m && (g.mute(), b.fadeIn = 0), 0 === b.delay ? 0 === b.fadeIn ? g.play() : g.fadeIn(b.volume, b.fadeIn) : setTimeout(function() {
                0 === b.fadeIn ? g.play() : g.fadeIn(b.volume, b.fadeIn)
            }, 1e3 * b.delay), g
        }, f.prototype._stopExistingSound = function(a, b) {
            var d, c = this;
            if (a === this.SOUND_GROUP_MUSIC) d = this._soundsMusic;
            else {
                if (a !== this.SOUND_GROUP_VO) return;
                d = this._soundsVO, b = 0
            }
            if (d.length > 0)
                for (var e = 0; e < d.length; e += 1) {
                    var f = d[e];
                    c._removeSoundFromArray(f, a), 0 === b ? f.stop() : f.fadeOut(0, b, function() {
                        f.stop()
                    })
                }
        }, f.prototype._removeSoundFromArray = function(a, b) {
            var c;
            switch (b) {
                case this.SOUND_GROUP_SFX:
                    c = this._soundsSFX;
                    break;
                case this.SOUND_GROUP_MUSIC:
                    c = this._soundsMusic;
                    break;
                case this.SOUND_GROUP_VO:
                    c = this._soundsVO
            }
            for (var d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                f && f.name === a.name && c.splice(d, 1)
            }
        }, f.prototype._updateSoundMuteStatus = function(a, b) {
            for (var c = b.length, d = 0; c > d; d += 1) {
                var e = b[d];
                a ? e.mute() : e.unmute()
            }
        }, f.prototype._checkSoundAlreadyPlaying = function(a, b) {
            for (var c = 0, d = b.length; d > c; c += 1) {
                var e = b[c];
                if (e.name === a) return e
            }
            return null
        }, f.prototype._onBlur = function() {
            Howler.mute()
        }, f.prototype._onFocus = function() {
            this._isMute || Howler.unmute()
        }, f.prototype.isMute = !1, f.prototype.isMuteSFX = !1, f.prototype.isMuteMusic = !1, f.prototype.isMuteVO = !1, f.prototype.sounds = !1, f.prototype.soundsSFX, f.prototype.soundsSFX, f.prototype.soundsMusic, f.prototype.soundsVO, Object.defineProperty(f.prototype, "isMute", {
            get: function() {
                return this._isMute
            }
        }), Object.defineProperty(f.prototype, "isMuteSFX", {
            get: function() {
                return this._isMuteSFX
            }
        }), Object.defineProperty(f.prototype, "isMuteMusic", {
            get: function() {
                return this._isMuteMusic
            }
        }), Object.defineProperty(f.prototype, "isMuteVO", {
            get: function() {
                return this._isMuteVO
            }
        }), Object.defineProperty(f.prototype, "sounds", {
            get: function() {
                return this._sounds
            }
        }), Object.defineProperty(f.prototype, "soundsSFX", {
            get: function() {
                return this._soundsSFX
            }
        }), Object.defineProperty(f.prototype, "soundsMusic", {
            get: function() {
                return this._soundsMusic
            }
        }), Object.defineProperty(f.prototype, "soundsVO", {
            get: function() {
                return this._soundsVO
            }
        })
    }, {
        "./../utils/Device": 54,
        "./../utils/Utils": 58
    }],
    9: [function(a, b, c) {
        var d = a("./../Canvas"),
            e = a("./../audio/AudioManager"),
            f = function(a) {
                return this.signalClose = new signals.Signal, this.signalExit = new signals.Signal, this.signalInstructions = new signals.Signal, this.signalHome = new signals.Signal, this.signalMute = new signals.Signal, this.signalPause = new signals.Signal, this.buttonDimensions = {
                    x: 64,
                    y: 64
                }, this.muteBtn = null, this.homeBtn = null, this.exitBtn = null, this.instructionsBtn = null, this.pauseBtn = null, this.closeBtn = null, this._screenHomeBtns = [], this._screenMenuBtns = [], this._screenPauseBtns = [], this._screenInstructionsBtns = [], this._screenGameBtns = [], this._screenGameOverBtns = [], this._screenCurrentBtns = [], this._screenPreviousBtns = [], this._wrapperDiv = document.getElementById(a), this._gelRootDiv = document.getElementById("p3gel"), this._gelRootDiv ? (this._gelRootDiv.style.display = "none", this._gelRootDiv.style.zIndex = f.Z_INDEX, void(window.TweenLite || console.log("[P3Gel] You do not have TweenLite which may be needed."))) : void console.warn("[BBCGel] There is no 'p3gel' div on the page.")
            };
        b.exports = f, f.Z_INDEX = 100, f.FADE_IN_DURATION = .3, f.FADE_OUT_DURATION = .2, f.DISABLE_ANIMATIONS = !1, f.prototype.enable = function(a) {
            a ? this._gelRootDiv.style.display = "block" : this._gelRootDiv.style.display = "none"
        }, f.prototype.initBtnClose = function(a) {
            return a = this._checkParams(a), this.closeBtn = document.getElementById("p3gel_close_button"), this.closeBtn ? (this.closeBtn.style.opacity = 1, void this._addButton(this.closeBtn, this._onCloseClick, a)) : void console.warn("[BBCGel] There is no 'close' button div.")
        }, f.prototype.initBtnExit = function(a) {
            return a = this._checkParams(a), this.exitBtn = document.getElementById("p3gel_exit_button"), this.exitBtn ? (this.exitBtn.style.opacity = 1, void this._addButton(this.exitBtn, this._onExitClick, a)) : void console.warn("[BBCGel] There is no 'exit' button div.")
        }, f.prototype.initBtnInstructions = function(a) {
            return a = this._checkParams(a), this.instructionsBtn = document.getElementById("p3gel_instructions_button"), this.instructionsBtn ? (this.instructionsBtn.style.opacity = 1, void this._addButton(this.instructionsBtn, this._onInstructionsClick, a)) : void console.warn("[BBCGel] There is no 'instructions' button div.")
        }, f.prototype.initBtnHome = function(a) {
            return a = this._checkParams(a), this.homeBtn = document.getElementById("p3gel_home_button"), this.homeBtn ? (this.homeBtn.style.opacity = 1, void this._addButton(this.homeBtn, this._onHomeClick, a)) : void console.warn("[BBCGel] There is no 'home' button div.")
        }, f.prototype.initBtnMute = function(a) {
            return a = this._checkParams(a), this.muteBtn = document.getElementById("p3gel_mute_button"), this.muteBtn ? (this.muteBtn.style.opacity = 1, a.isToggle = !0, this._addButton(this.muteBtn, this._onMuteClick, a), e.instance.isMute ? this.muteBtn.state = 2 : this.muteBtn.state = 0, void this._onMouseOut(this.muteBtn, null)) : void console.warn("[BBCGel] There is no 'mute' button div.")
        }, f.prototype.initBtnPause = function(a) {
            return a = this._checkParams(a), this.pauseBtn = document.getElementById("p3gel_pause_button"), this.pauseBtn ? (this.pauseBtn.style.opacity = 1, void this._addButton(this.pauseBtn, this._onPauseClick, a)) : void console.warn("[BBCGel] There is no 'pause' button div.")
        }, f.prototype.initScreenHome = function(a) {
            Array.isArray(a) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenHomeBtns = a
        }, f.prototype.initScreenMenu = function(a) {
            Array.isArray(a) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenMenuBtns = a
        }, f.prototype.initScreenPause = function(a) {
            Array.isArray(a) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenPauseBtns = a
        }, f.prototype.initScreenInstructions = function(a) {
            Array.isArray(a) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenInstructionsBtns = a
        }, f.prototype.initScreenGame = function(a) {
            Array.isArray(a) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenGameBtns = a
        }, f.prototype.initScreenGameOver = function(a) {
            Array.isArray(a) || console.error(["[BBCGel] buttonsArr is not an array."]), this._screenGameOverBtns = a
        }, f.prototype.showButton = function(a, b, c) {
            a && this._tweenIn(a, b, c)
        }, f.prototype.hideButton = function(a, b, c) {
            a && this._tweenOut(a, b, c)
        }, f.prototype.hideAllButtons = function(a, b) {
            a = a || 0, this.closeBtn && this._tweenOut(this.closeBtn, a, b), this.exitBtn && this._tweenOut(this.exitBtn, a, b), this.muteBtn && this._tweenOut(this.muteBtn, a, b), this.instructionsBtn && this._tweenOut(this.instructionsBtn, a, b), this.homeBtn && this._tweenOut(this.homeBtn, a, b), this.pauseBtn && this._tweenOut(this.pauseBtn, a, b)
        }, f.prototype.toggleVisibility = function(a) {
            this._gelRootDiv || console.warn("[P3Gel] root node has not been set."), a ? this._gelRootDiv.style.display = "block" : this._gelRootDiv.style.display = "none"
        }, f.prototype.showLayoutHome = function(a, b) {
            this._showScreenButtons(this._screenHomeBtns, a, b)
        }, f.prototype.showLayoutMenu = function(a, b) {
            this._showScreenButtons(this._screenMenuBtns, a, b)
        }, f.prototype.showLayoutPause = function(a, b) {
            this._showScreenButtons(this._screenPauseBtns, a, b)
        }, f.prototype.showLayoutInstructions = function(a, b) {
            this._showScreenButtons(this._screenInstructionsBtns, a, b)
        }, f.prototype.showLayoutGame = function(a, b) {
            this._showScreenButtons(this._screenGameBtns, a, b)
        }, f.prototype.showLayoutGameOver = function(a, b) {
            this._showScreenButtons(this._screenGameOverBtns, a, b)
        }, f.prototype.showLayoutPrevious = function(a, b) {
            this._showScreenButtons(this._screenPreviousBtns, a, b)
        }, f.prototype._checkParams = function(a) {
            return a = a || {}, a.soundClickSFX = a.soundClickSFX, a.soundClickVO = a.soundClickVO, a.soundOverSFX = a.soundOverSFX, a.soundOverVO = a.soundOverVO, a.isToggle = a.isToggle, a
        }, f.prototype._addButton = function(a, b, c) {
            a.clickCallback = b, a.scope = this, a.isToggle = c.isToggle, a.state = 0;
            var f = this;
            d.isMobile() ? (a.ontouchstart = function(a) {
                f._onMouseOver(this, a), c.soundOverSFX && e.instance.playSound(c.soundOverSFX), c.soundOverVO && e.instance.playVO(c.soundOverVO)
            }, a.ontouchmove = function(a) {
                f._onTouchMove(this, a)
            }, a.ontouchend = function(a) {
                f._onMouseUp(this, a), c.soundClickSFX && e.instance.playSound(c.soundClickVO), c.soundClickVO && e.instance.playVO(c.soundClickVO)
            }) : (a.onmouseover = function(a) {
                f._onMouseOver(this, a), c.soundOverSFX && e.instance.playSound(c.soundOverSFX), c.soundOverVO && e.instance.playVO(c.soundOverVO)
            }, a.onmouseout = function(a) {
                f._onMouseOut(this, a)
            }, a.onmousedown = function(a) {
                f._onMouseOver(this, a)
            }, a.onmouseup = function(a) {
                f._onMouseUp(this, a), c.soundClickSFX && e.instance.playSound(c.soundClickVO), c.soundClickVO && e.instance.playVO(c.soundClickVO)
            }), this.hideButton(a, 0, 0)
        }, f.prototype._showScreenButtons = function(a, b, c) {
            this.hideAllButtons();
            for (var d = 0; d < a.length; d += 1) {
                var e = a[d];
                this._tweenIn(e, b, c)
            }
            this._screenPreviousBtns = this._screenCurrenBtns, this._screenCurrenBtns = a
        }, f.prototype._tweenIn = function(a, b, c) {
            a && (b = b || 0, f.DISABLE_ANIMATIONS ? (a.style.display = "block", a.style.opacity = 1) : setTimeout(function() {
                a.style.opacity = 0, a.style.display = "block", c ? (TweenLite.killTweensOf(a.style), TweenLite.to(a.style, f.FADE_IN_DURATION, {
                    opacity: 1,
                    ease: Power2.easeOut
                })) : (a.style.display = "block", a.style.opacity = 1)
            }, 1e3 * b))
        }, f.prototype._tweenOut = function(a, b, c) {
            a && (b = b || 0, f.DISABLE_ANIMATIONS ? (a.style.opacity = 0, a.style.display = "none") : setTimeout(function() {
                a.style.opacity = 0, a.style.display = "none", c ? TweenLite.to(a.style, f.FADE_OUT_DURATION, {
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        a.style.display = "none"
                    }
                }) : (a.style.opacity = 0, a.style.display = "none")
            }, 1e3 * b))
        }, f.prototype._onTouchMove = function(a, b) {
            b.preventDefault()
        }, f.prototype._onMouseOver = function(a, b) {
            var c = (a.state + 1) * this.buttonDimensions.y;
            a.style.backgroundPosition = "0px -" + c + "px"
        }, f.prototype._onMouseOut = function(a, b) {
            var c = a.state * this.buttonDimensions.y;
            a.style.backgroundPosition = "0px -" + c + "px"
        }, f.prototype._onMouseUp = function(a, b) {
            var c = e.instance.isMute;
            a.isToggle && (c ? a.state = 0 : a.state = 2), this._onMouseOut(a, null), a.clickCallback.call(a.scope)
        }, f.prototype._onMuteClick = function() {
            e.instance.toggleMute(), this.signalMute.dispatch()
        }, f.prototype._onHomeClick = function() {
            this.signalHome.dispatch()
        }, f.prototype._onExitClick = function() {
            this.signalExit.dispatch()
        }, f.prototype._onInstructionsClick = function() {
            this.signalInstructions.dispatch()
        }, f.prototype._onPauseClick = function() {
            this.signalPause.dispatch()
        }, f.prototype._onCloseClick = function() {
            this.signalClose.dispatch()
        }
    }, {
        "./../Canvas": 3,
        "./../audio/AudioManager": 8
    }],
    10: [function(a, b, c) {
        var d = function(a, b, c, d) {
            this.blendStrength = b || 0, this.blendColor = c || 16777215, this._blendPasses = Math.max(1, d) || 2, PIXI.Sprite.call(this, a)
        };
        b.exports = d, d.prototype = Object.create(PIXI.Sprite.prototype), d.prototype.constructor = d, d.prototype._renderWebGL = function(a) {
            if ("4.0.0" == PIXI.VERSION && (this.transform.updated || this.textureDirty) && (this.textureDirty = !1, this.calculateVertices()), a.setObjectRenderer(a.plugins.sprite), a.plugins.sprite.render(this), this.blendStrength > 0) {
                a.plugins.sprite.flush();
                var b = this.worldAlpha,
                    c = this.tint;
                this.worldAlpha = b * this.blendStrength, this.blendMode = PIXI.BLEND_MODES.ADD, this.tint = this.blendColor;
                for (var d = 0; d < this._blendPasses; ++d) a.plugins.sprite.render(this);
                a.plugins.sprite.flush(), this.worldAlpha = b, this.blendMode = PIXI.BLEND_MODES.NORMAL, this.tint = c
            }
        }, Object.defineProperty(d.prototype, "blendPasses", {
            get: function() {
                return this._blendPasses
            },
            set: function(a) {
                this._blendPasses = Math.max(1, a)
            }
        })
    }, {}],
    11: [function(a, b, c) {
        function e(a, b, c, d, e, f, g, h) {
            this.animate = !1, this.defaultScale = new PIXI.Point(1, 1), this.animateOverScale = new PIXI.Point(1.1, 1.1), this.animateDownScale = new PIXI.Point(.9, .9), this.upSoundName = null, this.overSoundName = null, this.downSoundName = null, this.clickSoundName = null, this.signals = {}, this.signals.down = new signals.Signal, this.signals.up = new signals.Signal, this.signals.over = new signals.Signal, this.signals.out = new signals.Signal, this.signals.click = new signals.Signal, this.signals.animate = new signals.Signal, this._background = new PIXI.Sprite(a), this._icon = new PIXI.Sprite(d || PIXI.Texture.empty), this._normalTexture = a, this._overTexture = b, this._downTexture = c, this._iconTexture = d, this._normalInactiveTexture = e, this._overInactiveTexture = f, this._downInactiveTexture = g, this._iconInactiveTexture = h, this._currentNormalTexture = this._normalTexture, this._currentOverTexture = this._overTexture, this._currentDownTexture = this._downTexture, this._currentIconTexture = this._iconTexture, this._tweenOver = null, this._tweenOut = null, this._tweenDown = null, this._enabled = !0, PIXI.Container.call(this, this._normalTexture), this.interactive = !0, this.buttonMode = !0, this.mousedown = this.touchstart = this.onMouseDown.bind(this), this.mouseup = this.touchend = this.onMouseUp.bind(this), this.mouseupoutside = this.touchendoutside = this.onMouseOut.bind(this), this.click = this.tap = this.onMouseClick.bind(this), this.mouseover = this.onMouseOver.bind(this), this.mouseout = this.onMouseOut.bind(this), this._background.anchor = new PIXI.Point(.5, .5), this.addChild(this._background), this._icon.anchor = new PIXI.Point(.5, .5), this.addChild(this._icon)
        }
        var d = a("./../utils/Device");
        b.exports = e, e.prototype = Object.create(PIXI.Container.prototype), e.prototype.constructor = e, e.audio = null, e.prototype.init = function() {}, e.prototype.dispose = function() {
            TweenMax.killTweensOf(this), TweenMax.killTweensOf(this.scale), this.removeChildren(), this.signals.up.dispose(), this.signals.down.dispose(), this.signals.over.dispose(), this.signals.out.dispose(), this.signals.click.dispose(), this.signals.animate.dispose()
        }, e.prototype.onMouseDown = function(a) {
            if (this.downTexture && (this._background.texture = this._currentDownTexture), this.animate) {
                var b = TweenMax.getTweensOf(this, !0),
                    c = b.indexOf(this._tweenOver) > -1 ? b.length - 1 : b.length;
                c || (this._tweenOver && (this._tweenOver.kill(), this._tweenOver = null), this._tweenDown = this.animateDown())
            }
            e.audio && this.downSoundName && e.audio.playSound(this.downSoundName), this._enabled && this.signals.down.dispatch(this, a)
        }, e.prototype.onMouseUp = function(a) {
            this.overTexture && !p3.Device.isMobile ? this._background.texture = this._currentOverTexture : this._background.texture = this._currentNormalTexture, this.animate && this._tweenDown && (this._tweenDown && (this._tweenDown.kill(), this._tweenDown = null), this._tweenOver = p3.Device.isMobile ? this.animateOut() : this.animateOver()), e.audio && this.upSoundName && e.audio.playSound(this.upSoundName), this._enabled && this.signals.up.dispatch(this, a)
        }, e.prototype.onMouseOver = function(a) {
            if (this.overTexture && (this._background.texture = this._currentOverTexture), this.animate && !d.isMobile) {
                var b = TweenMax.getTweensOf(this, !0); - 1 == b.indexOf(this._tweenOver) && (this._tweenOut && (this._tweenOut.kill(), this._tweenOut = null), this._tweenOver = this.animateOver())
            }
            e.audio && this.overSoundName && e.audio.playSound(this.overSoundName), this._enabled && this.signals.over.dispatch(this, a)
        }, e.prototype.onMouseOut = function(a) {
            if (this._background.texture = this._currentNormalTexture, this._tweenOver || this._tweenDown) {
                var b = TweenMax.getTweensOf(this, !0); - 1 == b.indexOf(this._tweenOut) && (this._tweenOver && (this._tweenOver.kill(), this._tweenOver = null), this._tweenOut = this.animateOut()), -1 == b.indexOf(this._tweenDown) && (this._tweenDown && (this._tweenDown.kill(), this._tweenDown = null), this._tweenOut = this.animateOut())
            }
            e.audio && this.upSoundName && e.audio.playSound(this.upSoundName), this._enabled && this.signals.out.dispatch(this, a)
        }, e.prototype.onMouseClick = function(a) {
            e.audio && this.clickSoundName && e.audio.playSound(this.clickSoundName), this._enabled && this.signals.click.dispatch(this, a)
        }, e.prototype.animateOver = function() {
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
        }, e.prototype.animateOut = function() {
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
        }, e.prototype.animateDown = function() {
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
        }, Object.defineProperty(e.prototype, "normalTexture", {
            get: function() {
                return this._normalTexture
            }
        }), Object.defineProperty(e.prototype, "overTexture", {
            get: function() {
                return this._overTexture
            }
        }), Object.defineProperty(e.prototype, "downTexture", {
            get: function() {
                return this._downTexture
            }
        }), Object.defineProperty(e.prototype, "iconTexture", {
            get: function() {
                return this._iconTexture
            }
        }), Object.defineProperty(e.prototype, "normalInactiveTexture", {
            get: function() {
                return this._normalInactiveTexture
            }
        }), Object.defineProperty(e.prototype, "overInactiveTexture", {
            get: function() {
                return this._overInactiveTexture
            }
        }), Object.defineProperty(e.prototype, "downInactiveTexture", {
            get: function() {
                return this._downInactiveTexture
            }
        }), Object.defineProperty(e.prototype, "iconInactiveTexture", {
            get: function() {
                return this._iconInactiveTexture
            }
        }), Object.defineProperty(e.prototype, "currentNormalTexture", {
            get: function() {
                return this._currentNormalTexture
            }
        }), Object.defineProperty(e.prototype, "currentOverTexture", {
            get: function() {
                return this._currentOverTexture
            }
        }), Object.defineProperty(e.prototype, "currentDownTexture", {
            get: function() {
                return this._currentDownTexture
            }
        }), Object.defineProperty(e.prototype, "currentIconTexture", {
            get: function() {
                return this._currentIconTexture
            }
        }), Object.defineProperty(e.prototype, "enabled", {
            get: function() {
                return this._enabled
            },
            set: function(a) {
                this._enabled = a, this._currentNormalTexture = a || !this._normalInactiveTexture ? this._normalTexture : this._normalInactiveTexture, this._currentOverTexture = a || !this._overInactiveTexture ? this._overTexture : this._overInactiveTexture, this._currentDownTexture = a || !this._downInactiveTexture ? this._downTexture : this._downInactiveTexture, this._currentIconTexture = a || !this._iconInactiveTexture ? this._iconTexture : this._iconInactiveTexture, this._currentNormalTexture && (this._background.texture = this._currentNormalTexture), this._currentIconTexture && (this._icon.texture = this._currentIconTexture)
            }
        }), Object.defineProperty(e.prototype, "tint", {
            get: function() {
                return this._background.tint
            },
            set: function(a) {
                this._background.tint = a, this._icon.tint = a
            }
        })
    }, {
        "./../utils/Device": 54
    }],
    12: [function(a, b, c) {
        function h(a, b) {
            this.defaultAnimation = b || "default", this.animationSpeed = 24, this.playing = !1, this.looping = !1, this.signals = {}, this.signals.animation = new signals.Signal, this.signals.animationComplete = new signals.Signal, this._frames = {}, this._currentFrame = 0, this._lastFrame = 0, this._currentAnimationName = this.defaultAnimation;
            var c = a.textures[this.defaultAnimation] ? a.textures[this.defaultAnimation][0] : PIXI.Texture.EMPTY;
            if (!c) throw new Error("No default texture found!");
            for (var d in a.textures)
                if (a.textures.hasOwnProperty(d)) {
                    this._frames[d] = [];
                    for (var f = 0; f < a.textures[d].length; ++f) this._frames[d].push({
                        texture: a.textures[d][f],
                        callback: null,
                        scope: null
                    })
                }
            e.call(this, c)
        }
        var e = (a("./../AssetManager"), a("./AdditiveSprite"));
        a("./MovieClipSequence"), a("./../utils/Utils");
        b.exports = h, h.prototype = Object.create(e.prototype), h.prototype.constructor = h, h.prototype.dispose = function() {
            this.signals.animation.dispose(), this.signals.animationComplete.dispose()
        }, h.prototype.play = function(a) {
            "boolean" == typeof a && (this.looping = a), this.playing = !0
        }, h.prototype.stop = function(a) {
            "boolean" == typeof a && (this.looping = a), this.playing = !1
        }, h.prototype.gotoAndPlay = function(a, b) {
            "string" != typeof a ? this._currentFrame = this._lastFrame = a : this._frames[a] && (this._currentFrame = this._lastFrame = 0, this._currentAnimationName = a), "boolean" == typeof b && (this.looping = b), this.playing = !0
        }, h.prototype.gotoAndStop = function(a, b) {
            "string" != typeof a ? this._currentFrame = a : this._frames[a] && (this._currentFrame = 0, this._currentAnimationName = a), "boolean" == typeof b && (this.looping = b), this.playing = !1;
            var c = this._frames[this._currentAnimationName],
                d = this._currentFrame + .5 | 0;
            this.texture = c[d % c.length].texture
        }, h.prototype.addFrameScript = function(a, b, c, d) {
            d = d || window, this._frames[a] && (this._frames[a][b].callback = c, this._frames[a][b].scope = c ? d : null)
        }, h.prototype.updateTransform = function() {
            if (PIXI.Sprite.prototype.updateTransform.call(this), this.playing && this.totalFrames) {
                this._currentFrame += this.animationSpeed * p3.Timestep.deltaTime;
                var a = this._frames[this._currentAnimationName],
                    b = this._currentFrame + .5 | 0,
                    c = b % (a.length + 1);
                this._currentFrame = this._currentFrame % a.length, c > 0 && c != this._lastFrame && (this._lastFrame = c, a[c - 1].callback && setTimeout(function() {
                    a[c - 1].callback.call(a[c - 1].scope)
                }, 0)), this.looping || b < a.length ? (this.texture = a[b % a.length].texture, b >= a.length - 1 && p3.Timestep.queueCall(this.signals.animation.dispatch, [this._currentAnimationName])) : b >= a.length - 1 && (this.gotoAndStop(a.length - 1), p3.Timestep.queueCall(this.signals.animationComplete.dispatch, [this._currentAnimationName]))
            }
        }, Object.defineProperty(h.prototype, "currentFrame", {
            get: function() {
                return this._currentFrame
            }
        }), Object.defineProperty(h.prototype, "currentAnimationFrame", {
            get: function() {
                return this._currentAnimationName
            }
        }), Object.defineProperty(h.prototype, "totalFrames", {
            get: function() {
                var a = this._frames[this.defaultAnimation];
                return a ? a.length : 0
            }
        })
    }, {
        "./../AssetManager": 2,
        "./../utils/Utils": 58,
        "./AdditiveSprite": 10,
        "./MovieClipSequence": 13
    }],
    13: [function(a, b, c) {
        function d(a, b) {
            this.textures = {}, a && this.addTextures(a, b)
        }
        b.exports = d, d.prototype.addTextures = function(a, b) {
            b = b || "default", this.textures[b] = a
        }, d.prototype.removeTextures = function(a) {
            a = a || "default", this.textures[a] = null
        }, d.prototype.removeAllTextures = function() {
            this.textures = {}
        }
    }, {}],
    14: [function(a, b, c) {
        function e(a, b, c, e, f, g, h, i, j, k) {
            this._onIconTexture = e, this._offIconTexture = f, this._onIconInactiveTexture = j, this._offIconInactiveTexture = k, d.call(this, a, b, c, this.isEnabled() ? this._onIconTexture : this._offIconTexture, g, h, i, this.isEnabled() ? this._onIconInactiveTexture : this._offIconInactiveTexture)
        }
        var d = a("./Button");
        b.exports = e, e.prototype = Object.create(d.prototype), e.prototype.constructor = e, e.prototype.onMouseDown = function(a) {
            this._enabled = !this._enabled, this._currentIconTexture = this.isEnabled() ? this._offIconTexture : this._onIconTexture, this._icon.texture = this._currentIconTexture, d.audio && d.audio.mute(!d.audio.isMute), d.prototype.onMouseDown.call(this, a)
        }, e.prototype.isEnabled = function() {
            return !!d.audio && !d.audio.isMute
        }
    }, {
        "./Button": 11
    }],
    15: [function(a, b, c) {
        function e(a, b, c, e, f, g) {
            this._enabled = !1, this._onNormalTexture = a, this._offNormalTexture = b, this._onOverTexture = c, this._offOverTexture = e, this._onDownTexture = f, this._offDownTexture = g, this._normalTexture = this.isEnabled() ? a : b, this._overTexture = this.isEnabled() ? c : e, this._downTexture = this.isEnabled() ? f : g, d.call(this, this._normalTexture, this._overTexture, this._downTexture)
        }
        var d = a("./Button");
        b.exports = e, e.prototype = Object.create(d.prototype), e.prototype.constructor = e, e.prototype.onMouseDown = function(a) {
            this._enabled = !this._enabled, this._normalTexture = this.isEnabled() ? this._onNormalTexture : this._offNormalTexture, this._overTexture = this.isEnabled() ? this._onOverTexture : this._offOverTexture, this._downTexture = this.isEnabled() ? this._onDownTexture : this._offDownTexture, d.prototype.onMouseDown.call(this, a)
        }, e.prototype.isEnabled = function() {
            return this._enabled
        }
    }, {
        "./Button": 11
    }],
    16: [function(a, b, c) {
        var d = function(a) {
            PIXI.Sprite.call(this, a), this.currentTime = 0, this.totalTime = 0, this.position = new PIXI.Point, this.scale = new PIXI.Point, this.start = new PIXI.Point, this.velocity = new PIXI.Point, this.alpha = 0, this.rotation = 0, this.radialAcceleration = 0, this.tangentialAcceleration = 0, this.emitRadius = 0, this.emitRadiusDelta = 0, this.emitRotation = 0, this.emitRotationDelta = 0, this.rotationDelta = 0, this.scaleDelta = 0, this.renderDepth = 0, this.alphaDelta = 0, this.active = !1, this.anchor.x = .5, this.anchor.y = .5
        };
        b.exports = d, d.prototype = Object.create(PIXI.Sprite.prototype), d.prototype.constructor = d, d.VERSION = "1.0.0"
    }, {}],
    17: [function(a, b, c) {
        var d = a("./../../AssetManager"),
            e = a("./Particle"),
            f = a("./../../Timestep"),
            g = function(a, b, c, d) {
                if (d = "boolean" == typeof d ? d : !0, PIXI.Container.call(this), this.signalCompleted = new signals.Signal, this.emitterType = g.EMITTER_TYPE_GRAVITY, this.emitter = new PIXI.Point, this.emitterVariance = new PIXI.Point, this.gravity = new PIXI.Point, this.lifespanVariance = 0, this.startSize = 0, this.startSizeVariance = 0, this.endSize = 0, this.endSizeVariance = 0, this.emitAngle = 0, this.emitAngleVariance = 0, this.startRotation = 0, this.startRotationVariance = 0, this.speedMax = 0, this.speedVariance = 0, this.endRotation = 0, this.endRotationVariance = 0, this.radialAcceleration = 0, this.radialAccelerationVariance = 0, this.tangentialAcceleration = 0, this.tangentialAccelerationVariance = 0, this.maxRadius = 0, this.maxRadiusVariance = 0, this.minRadius = 0, this.rotatePerSecond = 0, this.rotatePerSecondVariance = 0, this.startAlpha = 0, this.startAlphaVariance = 0, this.endAlpha = 0, this.endAlphaVariance = 0, this.removeOnComplete = !0, this.onTop = d, this._textures = void 0 == a.length ? [a] : a, this._particles = [], this._frameTime = 0, this._numParticles = 0, this._maxCapacity = 0, this._emissionRate = 0, this._emissionTime = 0, this._maxNumParticles = 0, this._lifespan = 0, this._forceAngle = c, this._running = !1, this._tint = 16777215, "string" == typeof this._textures[0]) throw Error("[ParticleSystem] You are passing in strings for the textures instead of actual textures.");
                this._parseConfig(b), this._updateEmissionRate(), g.enabled && (this.maxCapacity = this._maxNumParticles ? this._maxNumParticles : 8192, this._raiseCapacity(this._maxNumParticles || 32))
            };
        b.exports = g, g.prototype = Object.create(PIXI.Container.prototype), g.prototype.constructor = g, g.VERSION = "3.0.0", g.EMITTER_TYPE_GRAVITY = 0, g.EMITTER_TYPE_RADIAL = 1, g.enabled = !0, g.prototype.start = function(a) {
            g.enabled && (a = a || Number.MAX_VALUE, 0 != this._emissionRate && (this._emissionTime = a), this.running = !0)
        }, g.prototype.stop = function() {
            g.enabled && (this._emissionTime = 0, this._numParticles = 0, this.running = !1)
        }, g.prototype.pause = function() {
            g.enabled && (this._emissionTime = 0, this.running = !1)
        }, g.prototype.reset = function() {
            if (g.enabled) {
                for (var a = 0; a < this._numParticles; ++a) this._disposeParticle(this._particles[a]);
                this._particles.length = 0, this.maxCapacity = 0, this._numParticles = 0, this.stop()
            }
        }, g.prototype.oneShot = function() {
            if (g.enabled) {
                this.stop();
                for (var a = null, b = 0; b < this._numParticles; ++b) this._disposeParticle(this._particles[b]);
                for (b = 0; b < this.maxCapacity; ++b) this._numParticles == this.capacity && this._raiseCapacity(this.capacity), a = this._particles[this._numParticles++], this._initParticle(a)
            }
        }, g.prototype.simulate = function(a) {
            if (g.enabled) {
                a = a || 1e3;
                for (var b = 0; a > b; ++b) this.advance(f.deltaTime)
            }
        }, g.prototype.advance = function(a) {
            if (g.enabled) {
                for (var b = 0, c = null; b < this._numParticles;)
                    if (c = this._particles[b], c.currentTime < c.totalTime) this._advanceParticle(c, a), ++b;
                    else {
                        if (b != this._numParticles - 1) {
                            var d = this._particles[this._numParticles - 1];
                            this._particles[this._numParticles - 1] = c, this._particles[b] = d
                        }--this._numParticles, this._disposeParticle(c), 0 == this._numParticles && (this.signalCompleted.dispatch(this), this.removeOnComplete && (this.parent && this.parent.removeChild(this.parent), this.dispose()))
                    }
                if (this._emissionTime > 0) {
                    var e = 1 / this._emissionRate;
                    for (this._frameTime += a; this._frameTime > 0;) this._numParticles < this.maxCapacity && (this._numParticles == this.capacity && this._raiseCapacity(this.capacity), c = this._particles[this._numParticles++], this._initParticle(c), this._advanceParticle(c, a)), this._frameTime -= e;
                    this._emissionTime != Number.MAX_VALUE && (this._emissionTime = Math.max(0, this._emissionTime - a))
                }
            }
        }, g.prototype.dispose = function() {
            this.signalCompleted.dispose(), this._textures.length = 0, this._particles.length = 0, this.removeChildren()
        }, g.prototype.update = function() {
            this.advance(f.deltaTime)
        }, g.prototype._initParticle = function(a) {
            var b = this._lifespan + this.lifespanVariance * (2 * Math.random() - 1);
            if (!(0 >= b)) {
                var c = Math.floor(Math.random() * this._textures.length),
                    e = this._textures[c];
                a.texture = e, a.currentTime = 0, a.totalTime = b, a.active = !0, a.position.x = this.emitter.x + this.emitterVariance.x * (2 * Math.random() - 1), a.position.y = this.emitter.y + this.emitterVariance.y * (2 * Math.random() - 1), a.start.x = this.emitter.x, a.start.y = this.emitter.y;
                var f = this.emitAngle + this.emitAngleVariance * (2 * Math.random() - 1),
                    g = this.speedMax + this.speedVariance * (2 * Math.random() - 1);
                a.velocity.x = g * Math.cos(f), a.velocity.y = g * Math.sin(f), a.emitRadius = this.maxRadius + this.maxRadiusVariance * (2 * Math.random() - 1), a.emitRadiusDelta = this.maxRadius / b, a.emitRotation = this.emitAngle + this.emitAngleVariance * (2 * Math.random() - 1), a.emitRotationDelta = this.rotatePerSecond + this.rotatePerSecondVariance * (2 * Math.random() - 1), a.radialAcceleration = this.radialAcceleration + this.radialAccelerationVariance * (2 * Math.random() - 1), a.tangentialAcceleration = this.tangentialAcceleration + this.tangentialAccelerationVariance * (2 * Math.random() - 1);
                var h = this.startSize + this.startSizeVariance * (2 * Math.random() - 1),
                    i = this.endSize + this.endSizeVariance * (2 * Math.random() - 1);
                if (h = Math.max(.1, h), i = Math.max(.1, i), a.scale.x = a.scale.y = h / e.width * d.instance.scaleFactor, a.scaleDelta = (i - h) / b / e.width, this._forceAngle) a.rotation = f + 1.57079637, a.rotationDelta = 0;
                else {
                    var j = this.startRotation + this.startRotationVariance * (2 * Math.random() - 1),
                        k = this.endRotation + this.endRotationVariance * (2 * Math.random() - 1);
                    a.rotation = j, a.rotationDelta = (k - j) / b
                }
                var l = this.startAlpha,
                    m = this.endAlpha;
                0 != this.startAlphaVariance && (l += this.startAlphaVariance * (2 * Math.random() - 1)), 0 != this.endAlphaVariance && (m += this.endAlphaVariance * (2 * Math.random() - 1)), a.alpha = l, a.alphaDelta = (m - l) / b, a.tint = this._tint, this.onTop ? this.addChild(a) : this.addChildAt(a, 0)
            }
        }, g.prototype._disposeParticle = function(a) {
            a.active = !1, this.removeChild(a)
        }, g.prototype._advanceParticle = function(a, b) {
            var c = a.totalTime - a.currentTime;
            if (b = c > b ? b : c, a.currentTime += b, this.emitterType == g.EMITTER_TYPE_RADIAL) a.emitRotation += a.emitRotationDelta * b, a.emitRadius -= a.emitRadiusDelta * b, a.position.x = this.emitter.x - Math.cos(a.emitRotation) * a.emitRadius, a.position.y = this.emitter.y - Math.sin(a.emitRotation) * a.emitRadius, a.emitRadius < this.minRadius && (a.currentTime = a.totalTime);
            else if (this.emitterType == g.EMITTER_TYPE_GRAVITY) {
                var d = a.position.x - a.start.x,
                    e = a.position.y - a.start.y,
                    f = Math.sqrt(d * d + e * e);
                f = Math.max(.01, f);
                var h = d / f,
                    i = e / f,
                    j = h,
                    k = i;
                h *= a.radialAcceleration, i *= a.radialAcceleration, j = -k * a.tangentialAcceleration, k = j * a.tangentialAcceleration, a.velocity.x += b * (this.gravity.x + h + j), a.velocity.y += b * (this.gravity.y + i + k), a.position.x += a.velocity.x * b, a.position.y += a.velocity.y * b
            }
            a.scale.x = a.scale.y = a.scale.x + a.scaleDelta * b, a.alpha += a.alphaDelta * b, this._forceAngle || (a.rotation += .017453293 * a.rotationDelta * b)
        }, g.prototype._updateEmissionRate = function() {
            this._emissionRate = this._maxNumParticles / this._lifespan
        }, g.prototype._parseConfig = function(a) {
            if (void 0 == a) throw new Error("Config is invalid!");
            var b = .017453293;
            this.emitterVariance.x = a.sourcePositionVariancex, this.emitterVariance.y = a.sourcePositionVariancey, this.gravity.x = a.gravityx, this.gravity.y = a.gravityy, this.emitterType = a.emitterType, this.maxNumParticles = a.maxParticles, this.lifeSpan = a.particleLifespan, this.lifespanVariance = a.particleLifespanVariance, this.startSize = a.startParticleSize, this.startSizeVariance = a.startParticleSizeVariance, this.endSize = a.finishParticleSize, this.endSizeVariance = a.finishParticleSizeVariance, this.emitAngle = -a.angle * b, this.emitAngleVariance = a.angleVariance * b, this.startRotation = a.rotationStart, this.startRotationVariance = a.rotationStartVariance, this.endRotation = a.rotationEnd, this.endRotationVariance = a.rotationEndVariance, this.speedMax = a.speed, this.speedVariance = a.speedVariance, this.radialAcceleration = a.radialAcceleration, this.radialAccelerationVariance = a.radialAccelVariance, this.tangentialAcceleration = a.tangentialAcceleration, this.tangentialAccelerationVariance = a.tangentialAccelVariance, this.maxRadius = a.maxRadius, this.maxRadiusVariance = a.maxRadiusVariance, this.minRadius = a.minRadius, this.rotatePerSecond = a.rotatePerSecond * b, this.rotatePerSecondVariance = a.rotatePerSecondVariance * b, this.startAlpha = a.startColorAlpha, this.startAlphaVariance = a.startColorVarianceAlpha, this.endAlpha = a.finishColorAlpha, this.endAlphaVariance = a.finishColorVarianceAlpha;
        }, g.prototype._raiseCapacity = function(a) {
            for (var b = this.capacity, c = Math.min(this.maxCapacity, b + a), d = b; c > d; ++d) this._particles[d] = new e(this._textures[0])
        }, Object.defineProperty(g.prototype, "capacity", {
            get: function() {
                return this._particles.length
            }
        }), Object.defineProperty(g.prototype, "maxCapacity", {
            get: function() {
                return this._maxCapacity
            },
            set: function(a) {
                this._maxCapacity = Math.min(8192, a)
            }
        }), Object.defineProperty(g.prototype, "maxNumParticles", {
            get: function() {
                return this._maxNumParticles
            },
            set: function(a) {
                this.maxCapacity = a, this._maxNumParticles = this.maxCapacity, this._updateEmissionRate()
            }
        }), Object.defineProperty(g.prototype, "lifeSpan", {
            get: function() {
                return this._lifespan
            },
            set: function(a) {
                this._lifespan = Math.max(.01, a), this._updateEmissionRate()
            }
        }), Object.defineProperty(g.prototype, "running", {
            get: function() {
                return this._running
            }
        }), Object.defineProperty(g.prototype, "tint", {
            get: function() {
                return this._tint
            },
            set: function(a) {
                this._tint = a;
                for (var b, c = 0; c < this._particles.length; ++c) b = this._particles[c], b.tint = this._tint
            }
        })
    }, {
        "./../../AssetManager": 2,
        "./../../Timestep": 5,
        "./Particle": 16
    }],
    18: [function(a, b, c) {
        var e = (a("./ScreenParams"), function() {
            PIXI.Container.call(this), this.guid = "", this.group = "", this.params = null
        });
        b.exports = e, e.prototype = Object.create(PIXI.Container.prototype), e.prototype.constructor = e, e.VERSION = "03.00.00", e.prototype.added = function() {}, e.prototype.activate = function() {}, e.prototype.resize = function() {}, e.prototype.dispose = function() {
            this.removeChildren(), this.guid = "", this.group = null, this.params = null
        }, e.prototype.update = function(a) {}
    }, {
        "./ScreenParams": 21
    }],
    19: [function(a, b, c) {
        var d = function(a, b) {
            PIXI.Container.call(this), this.name = a, this._depth = b, this.screenArr = []
        };
        b.exports = d, d.prototype = Object.create(PIXI.Container.prototype), d.prototype.constructor = d, d.VERSION = "03.00.00", d.prototype.getDepth = function() {
            var a = this.parent;
            return a && a.children && (this._depth = a.children.indexOf(this)), this._depth
        }, d.prototype.setDepth = function(a) {
            this._depth = a
        }
    }, {}],
    20: [function(a, b, c) {
        var d = a("./ScreenGroup"),
            f = (a("./Screen"), a("./ScreenParams")),
            h = (a("./transitions/Transition"), a("./../../utils/Utils")),
            i = function() {
                if (!i.__allowInstance) throw new Error("ScreenManager is a Singleton, use 'instance'.");
                this.DEFAULT_GROUP = "group_default", this._view = null, this._stage = null, this._renderer = null, this._groups = {}, this._groupsArr = [], this._isTransitioning = !1
            };
        i.prototype.constructor = i, b.exports = i, i.instance = null, Object.defineProperty(i, "instance", {
            get: function() {
                return i.__instance || (i.__allowInstance = !0, i.__instance = new i, i.__allowInstance = !1), i.__instance
            }
        }), i.__instance = null, i.__allowInstance = !1, i.VERSION = "03.00.00", i.prototype.init = function(a, b) {
            this._groups = {}, this._groupsArr = [], this._stage = a, this._renderer = b, this._view = new PIXI.Container, this._stage.addChild(this._view), this.addScreenGroup(this.DEFAULT_GROUP, 0)
        }, i.prototype.addScreenGroup = function(a, b) {
            if (!this._view || !this._stage) throw new Error('[ScreenManager.addScreenGroup] Error - The view/stage has not been set. Do that via "init" before adding screen groups.');
            if (this._groups[a]) throw Error("[ScreenManager.addScreenGroup] The group already exists: " + a);
            b = this._calculateDepth(b);
            var c = new d(a, b);
            return this._view.addChildAt(c, c.getDepth()), this._groups[a] = c, this._groupsArr.push(c), c
        }, i.prototype.changeScreenGroupDepth = function(a, b) {
            var c = this._groups[a];
            if (!c) throw Error("[ScreenManager.changeScreenGroupDepth] Error - The screengroup does not exist: " + a);
            var d = this._calculateDepth(b);
            this._view.addChildAt(c, d)
        }, i.prototype.removeScreenGroup = function(a) {
            var b = this._groups[a];
            if (!b) throw Error("[ScreenManager.removeScreenGroup] Error - The screengroup does not exist: " + a);
            for (var c = 0; c < b.screenArr.length; c += 1) {
                var d = b.screenArr[c];
                this._removeScreenFromGroup(null, d, b)
            }
            b.screenArr = [], b.removeChildren(), delete this._groups[a];
            var e = this._groupsArr.indexOf(b);
            this._groupsArr.splice(e, 1)
        }, i.prototype.addScreen = function(a, b) {
            if (b = b || new f, !this._groups[this.DEFAULT_GROUP]) throw new Error('[ScreenManager.addScreen] Error - There is no default group. Maybe you have not yet called "init" before adding screen the screen.');
            if (!a) throw Error("[ScreenManager.addScreen] Error - The screen you are adding is null.");
            var c = b._group || this.DEFAULT_GROUP;
            if (c && !this._groups[c]) throw Error("[ScreenManager.addScreen] Error - The group does not exist: " + c);
            return a.guid = h.generateGUID(), a.group = c, a.params = b, b._transition ? this._transitionScreens(a, b._transition) : (this._doReplacements(a), this._displayScreen(a)), a
        }, i.prototype.removeScreen = function(a) {
            if (!a) throw Error("[ScreenManager.removeScreen] Error - The screen is null. " + a);
            this._removeScreenFromGroup(null, a, this.getScreenGroup(a.group))
        }, i.prototype.removeCurrentScreenFromGroup = function(a, b) {
            if (!a || !this._groups[a]) throw Error("[ScreenManager.removeCurrentScreen] Error - You must supply a valid group name: " + a);
            var c = this._groups[a],
                d = c.children.length;
            if (d > 0) {
                var e = c.getChildAt(d - 1);
                if (b) {
                    if (e !== b) this._removeScreenFromGroup(null, e, c);
                    else if (e === b) try {
                        e = c.getChildAt(d - 2), e && this._removeScreenFromGroup(null, e, c)
                    } catch (f) {}
                } else this._removeScreenFromGroup(null, e, c)
            }
        }, i.prototype.removeAllScreens = function() {
            for (var a in this._groups)
                if (this._groups.hasOwnProperty(a))
                    for (var b = this._groups[a], c = 0; c < b.screenArr.length; c++) {
                        b[c];
                        this.removeScreen(b.screenArr[c])
                    }
        }, i.prototype.dispose = function() {
            for (var a in this._groups) this._groups.hasOwnProperty(a) && this.removeScreenGroup(a);
            this._groupsArr = null, this._groups = null, this._view = null, this._stage = null, i.__instance = null
        }, i.prototype.update = function() {
            for (var a = 0, b = this._groupsArr.length; b > a; a++)
                for (var c = this._groupsArr[a], d = 0, e = c.screenArr.length; e > d; d++) c.screenArr[d].update()
        }, i.prototype.resize = function() {
            for (var a = 0, b = this._groupsArr.length; b > a; a++)
                for (var c = this._groupsArr[a], d = 0, e = c.screenArr.length; e > d; d++) c.screenArr[d].resize()
        }, i.prototype.contains = function(a) {
            var b = !1;
            for (var c in this._groups)
                if (this._groups.hasOwnProperty(c))
                    for (var d = this._groups[c], e = 0; e < d.screenArr.length; e += 1) {
                        var f = d.screenArr[e];
                        if (a === f) {
                            b = !0;
                            break
                        }
                    }
                return b
        }, i.prototype._calculateDepth = function(a) {
            var b = this.getHighestGroupDepth();
            return "undefined" == typeof a ? a = b : a > b ? a = b : 0 > a && (a = 0), a
        }, i.prototype._doReplacements = function(a) {
            var b, c, d, e, f = a.params._replaceScreens,
                g = a.params._replaceGroups;
            if (f.length > 0)
                for (b = 0; b < f.length; b += 1) {
                    if (d = f[b], a === d) throw Error("[ScreenManager.addScreen] Error - You are trying to remove the screen you are adding: " + d);
                    this.removeScreen(d)
                }
            if (a.params._replaceGroups.length > 0)
                for (b = 0; b < g.length; b += 1)
                    for (e = this._groups[g[b]], c = 0; c < e.screenArr.length; c += 1) d = e.screenArr[c], this._removeScreenFromGroup(a, d, e);
            if (a.params._replaceCurrent && this.removeCurrentScreenFromGroup(a.group, a), a.params._replaceAll)
                for (var h in this._groups)
                    if (this._groups.hasOwnProperty(h))
                        for (e = this._groups[h], b = e.screenArr.length - 1; b >= 0; b -= 1) d = e.screenArr[b], this._removeScreenFromGroup(a, d, e)
        }, i.prototype._removeScreenFromGroup = function(a, b, c) {
            if (!b) throw Error("[ScreenManager._removeScreenFromGroup] Error - The screen does not exist: " + b);
            if (!c) throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not exist: " + c.name);
            if (!c.screenArr) throw Error("[ScreenManager._removeScreenFromGroup] Error - The screengroup does not have a valid scrennArray: " + c.name);
            if (b !== a) {
                var d = c.screenArr.indexOf(b);
                if (-1 === d) throw Error("[ScreenManager._removeScreenFromGroup] Error - The group does not contain the screen. Group=" + c.name);
                b.dispose(), b.removeChildren(), c.screenArr.splice(d, 1), c.removeChild(b)
            }
        }, i.prototype._displayScreen = function(a, b) {
            var c = this._groups[a.group];
            c.addChild(a), c.screenArr.push(a), a.added(), a.resize(), b || a.activate()
        }, i.prototype._transitionScreens = function(a, b) {
            this._isTransitioning = !0, b.signalTransitionInComplete.addOnce(this._onTransitionInComplete, this), b.signalTransitionOutComplete.addOnce(this._onTransitionOutComplete, this), b.oldScreen = this.getCurrentScreen(a.group), b.screen = a, b.onTopofAllScreens && this._view.addChild(b), b.transitionIn()
        }, i.prototype._onTransitionInComplete = function(a) {
            a.doReplacementsAtEnd || this._doReplacements(a.screen), this._displayScreen(a.screen, !0), a.transitionOut()
        }, i.prototype._onTransitionOutComplete = function(a) {
            a.doReplacementsAtEnd && this._doReplacements(a.screen), a.onTopofAllScreens && this._view.removeChild(a), this._isTransitioning = !1, a.screen.activate(), a.dispose()
        }, i.prototype.getStage = function() {
            return this._stage
        }, i.prototype.getRenderer = function() {
            return this._renderer
        }, i.prototype.getView = function() {
            return this._view
        }, i.prototype.getHighestGroupDepth = function() {
            return this._view.children.length
        }, i.prototype.getScreenGroup = function(a) {
            var b = this._groups[a];
            if (b) return b;
            throw Error("[ScreenManager.getScreenGroup] The group does not exist: " + a + ". Maybe the screen is not the correct.")
        }, i.prototype.getCurrentScreen = function(a) {
            if (!a || !this._groups[a]) throw Error("[ScreenManager.getCurrentScreen] Error - The screen group is invalid: " + a);
            var b = this._groups[a];
            return b.children.length > 0 ? b.getChildAt(b.children.length - 1) : null
        }, i.prototype.getAllScreens = function() {
            var a = [];
            for (var b in this._groups)
                if (this._groups.hasOwnProperty(b))
                    for (var c = this._groups[b], d = 0, e = c.screenArr.length; e > d; d++) {
                        var f = c.screenArr[d];
                        a.push(f)
                    }
                return a
        }, i.prototype.getAllGroups = function() {
            return this._groups
        }
    }, {
        "./../../utils/Utils": 58,
        "./Screen": 18,
        "./ScreenGroup": 19,
        "./ScreenParams": 21,
        "./transitions/Transition": 26
    }],
    21: [function(a, b, c) {
        var d = function() {
            this._group = "", this._replaceCurrent = !1, this._replaceAll = !1, this._replaceGroups = [], this._replaceScreens = [], this._transition = null, this.setReset()
        };
        b.exports = d;
        d.prototype;
        d.prototype.setReset = function() {
            this._group = "", this._replaceCurrent = !1, this._replaceAll = !1, this._replaceGroups = [], this._replaceScreens = [], this._transition = null
        }, d.prototype.group = function(a) {
            return this._group = a, this
        }, d.prototype.replaceCurrent = function() {
            return this._replaceCurrent = !0, this
        }, d.prototype.replaceAll = function() {
            return this._replaceAll = !0, this
        }, d.prototype.replaceGroups = function(a) {
            return this._replaceGroups = a, this
        }, d.prototype.replaceScreen = function(a) {
            return this._replaceScreens = a, this
        }, d.prototype.transition = function(a) {
            return this._transition = a, this
        }
    }, {}],
    22: [function(a, b, c) {
        var d = a("./Transition"),
            f = (a("./../ScreenManager"), function(a, b, c) {
                d.call(this), this.onTopofAllScreens = !1, this._duration = a || 1, this._delay = b || 0, this.transitionType = c || d.TRANSITION_IN_ONLY, this.transitionType === d.TRANSITION_IN_ONLY && (this.doReplacementsAtEnd = !0)
            });
        b.exports = f, f.prototype = Object.create(d.prototype), f.prototype.constructor = f, f.VERSION = "01.00.00", f.prototype.transitionIn = function() {
            switch (this.screen.alpha = 0, this.transitionType) {
                case d.TRANSITION_IN_ONLY:
                    this.signalTransitionInComplete.dispatch(this);
                    break;
                case d.TRANSITION_CROSS:
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
        }, f.prototype.transitionOut = function() {
            switch (this.transitionType) {
                case d.TRANSITION_IN_ONLY:
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
                case d.TRANSITION_CROSS:
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
    23: [function(a, b, c) {
        var d = a("./Transition"),
            e = a("./../ScreenManager"),
            f = function(a, b, c, f, g) {
                d.call(this), this.transitionType = g || d.TRANSITION_CROSS, this.onTopofAllScreens = !0, this._duration = a || 1, this._color = "" + b || "#000000", this._pauseTime = c || 0, this._delay = f || 0;
                var h = e.instance.getRenderer(),
                    i = new PIXI.Graphics;
                i.beginFill(this._color, 1), i.drawRect(0, 0, Math.ceil(h.width * (1 / h.resolution)), Math.ceil(h.height * (1 / h.resolution))), this._overlay = new PIXI.Sprite(i.generateTexture(h.resolution)), this._overlay.alpha = 0, this.addChild(this._overlay)
            };
        b.exports = f, f.prototype = Object.create(d.prototype), f.prototype.constructor = f, f.VERSION = "01.00.01", f.prototype.transitionIn = function() {
            switch (this.transitionType) {
                case d.TRANSITION_IN_ONLY:
                    this._overlay.alpha = 1, this.signalTransitionInComplete.dispatch(this);
                    break;
                case d.TRANSITION_CROSS:
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
        }, f.prototype.transitionOut = function() {
            switch (this.transitionType) {
                case d.TRANSITION_IN_ONLY:
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
                case d.TRANSITION_CROSS:
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
        }, f.prototype.dispose = function() {
            this.removeChildren(), this._overlay = null, d.prototype.dispose.call(this)
        }
    }, {
        "./../ScreenManager": 20,
        "./Transition": 26
    }],
    24: [function(a, b, c) {
        var d = a("./Transition"),
            f = (a("./../ScreenManager"), function(a, b, c, e, f, g, h, i, j, k, l) {
                d.call(this), this.transitionType = j || d.TRANSITION_CROSS, this._duration = a, this._offset = new PIXI.Point(b, c), this._destination = new PIXI.Point(e, f), this._oldScreenDestination = new PIXI.Point(g, h), this._delay = i || 0, this._customEaseInOut = Power2.easeInOut, this.onTopofAllScreens = !1, this.doReplacementsAtEnd = !0
            });
        b.exports = f, f.prototype = Object.create(d.prototype), f.prototype.constructor = f, f.VERSION = "01.00.00", f.prototype.transitionIn = function() {
            this.screen.x = this._offset.x, this.screen.y = this._offset.y, this.signalTransitionInComplete.dispatch(this)
        }, f.prototype.transitionOut = function() {
            switch (this.transitionType) {
                case d.TRANSITION_IN_ONLY:
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
                case d.TRANSITION_CROSS:
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
    25: [function(a, b, c) {
        var d = a("./Transition"),
            f = (a("./../ScreenManager"), function(a, b, c, d, e, f, g) {});
        b.exports = f, f.prototype = Object.create(d.prototype), f.prototype.constructor = f
    }, {
        "./../ScreenManager": 20,
        "./Transition": 26
    }],
    26: [function(a, b, c) {
        var e = (a("./../Screen"), function() {
            PIXI.Container.call(this), this.signalTransitionInComplete = new signals.Signal, this.signalTransitionOutComplete = new signals.Signal, this.onTopofAllScreens = !0, this.doReplacementsAtEnd = !1, this.transitionType = e.TRANSITION_CROSS, this.screen = null, this.oldScreen = null
        });
        b.exports = e, e.prototype = Object.create(PIXI.Container.prototype), e.prototype.constructor = e, e.VERSION = "02.00.00", e.TRANSITION_IN_ONLY = "transition_in_only", e.TRANSITION_CROSS = "transition_cross", e.prototype.transitionIn = function() {
            this.signalTransitionInComplete.dispatch(this)
        }, e.prototype.transitionOut = function() {
            this.signalTransitionOutComplete.dispatch(this)
        }, e.prototype.dispose = function() {
            this.signalTransitionInComplete.removeAll(), this.signalTransitionInComplete = null, this.signalTransitionOutComplete.removeAll(), this.signalTransitionOutComplete = null, this.oldScreen = null, this.screen = null, this.removeChildren()
        }
    }, {
        "./../Screen": 18
    }],
    27: [function(a, b, c) {
        var d = window.p3 || {};
        d.AudioManager = a("./audio/AudioManager"), d.BBCGel = a("./bbcgel/BBCGel"), d.Particle = a("./display/particles/Particle"), d.ParticleSystem = a("./display/particles/ParticleSystem"), d.ScreenManager = a("./display/screenmanager/ScreenManager"), d.ScreenGroup = a("./display/screenmanager/ScreenGroup"), d.ScreenParams = a("./display/screenmanager/ScreenParams"), d.Screen = a("./display/screenmanager/Screen"), d.Transition = a("./display/screenmanager/transitions/Transition"), d.AlphaFade = a("./display/screenmanager/transitions/AlphaFade"), d.ColorFade = a("./display/screenmanager/transitions/ColorFade"), d.Slide = a("./display/screenmanager/transitions/Slide"), d.Swipe = a("./display/screenmanager/transitions/Swipe"), d.AdditiveSprite = a("./display/AdditiveSprite"), d.Button = a("./display/Button"), d.MovieClip = a("./display/MovieClip"), d.MovieClipSequence = a("./display/MovieClipSequence"), d.MuteButton = a("./display/MuteButton"), d.ToggleButton = a("./display/ToggleButton"), d.Keyboard = a("./input/Keyboard"), d.RandomSeed = a("./math/RandomSeed"), d.Vector2 = a("./math/Vector2"), d.BitmapText = a("./text/BitmapText"), d.CharacterInfo = a("./text/CharacterInfo"), d.FontAtlas = a("./text/FontAtlas"), d.BaseMain = a("./utils/BaseMain"), d.Camera = a("./utils/Camera"), d.Color = a("./utils/Color"), d.Device = a("./utils/Device"), d.ObjectPool = a("./utils/ObjectPool"), d.Sorting = a("./utils/Sorting"), d.Timer = a("./utils/Timer"), d.Utils = a("./utils/Utils"), d.Animator = a("./Animator"), d.AssetManager = a("./AssetManager"), d.Canvas = a("./Canvas"), d.CanvasParams = a("./CanvasParams"), d.Timestep = a("./Timestep"), d.View = a("./View"), d.ViewParams = a("./ViewParams"), d.Tracking = a("./net/tracking/Tracking"), d.TrackingData = a("./net/tracking/TrackingData"), d.TrackingDataBBCAction = a("./net/tracking/TrackingDataBBCAction"), d.TrackingDataBBCAction = a("./net/tracking/TrackingDataEcho"), d.TrackingDataGoogleEvent = a("./net/tracking/TrackingDataGoogleEvent"), d.TrackingDataGooglePage = a("./net/tracking/TrackingDataGooglePage"), d.TrackingDataPlaydom = a("./net/tracking/TrackingDataPlaydom"), d.TrackingDataPlaydomDeviceInfo = a("./net/tracking/TrackingDataPlaydomDeviceInfo"), d.TrackingDataPlaydomGameAction = a("./net/tracking/TrackingDataPlaydomGameAction"), d.TrackingDataPlaydomNavigationAction = a("./net/tracking/TrackingDataPlaydomNavigationAction"), d.TrackingModule = a("./net/tracking/TrackingModule"), d.TrackingModuleBBC = a("./net/tracking/TrackingModuleBBC"), d.TrackingModuleEcho = a("./net/tracking/TrackingModuleEcho"), d.TrackingModuleGoogle = a("./net/tracking/TrackingModuleGoogle"), d.TrackingModulePlaydom = a("./net/tracking/TrackingModulePlaydom"), window.p3 = d
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
    28: [function(a, b, c) {
        var e = (a("./../Canvas"), function() {
            e.signalKeyDown = new signals.Signal, e.signalKeyUp = new signals.Signal
        });
        b.exports = e, e.prototype.constructor = e, e._keysDown = {}, e._keysDownPerFrame = {}, e.KEY_TAB = 9, e.KEY_ENTER = 13, e.KEY_SHIFT = 16, e.KEY_CTRL = 17, e.KEY_SPACE = 32, e.KEY_LEFT = 37, e.KEY_UP = 38, e.KEY_RIGHT = 39, e.KEY_DOWN = 40, e.KEY_A = 65, e.KEY_B = 66, e.KEY_C = 67, e.KEY_D = 68, e.KEY_E = 69, e.KEY_F = 70, e.KEY_G = 71, e.KEY_H = 72, e.KEY_I = 73, e.KEY_J = 74, e.KEY_K = 75, e.KEY_L = 76, e.KEY_M = 77, e.KEY_N = 78, e.KEY_O = 79, e.KEY_P = 80, e.KEY_Q = 81, e.KEY_R = 82, e.KEY_S = 83, e.KEY_T = 84, e.KEY_U = 85, e.KEY_V = 86, e.KEY_W = 87, e.KEY_X = 88, e.KEY_Y = 89, e.KEY_Z = 90, e.KEY_PLUs = 187, e.KEY_MINUS = 189, e.init = function(a) {
            document.addEventListener("keyup", function(a) {
                e._onKeyup(a)
            }, !1), document.addEventListener("keydown", function(a) {
                e._onKeydown(a)
            }, !1)
        }, e.getKey = function(a) {
            return e._keysDown[a]
        }, e.getKeyDown = function(a) {
            return e._keysDownPerFrame[a]
        }, e.update = function() {
            e._keysDownPerFrame = {}
        }, e._onKeydown = function(a) {
            e._keysDown[a.keyCode] || (e._keysDown[a.keyCode] = !0, e._keysDownPerFrame[a.keyCode] = !0, e.signalKeyDown && e.signalKeyDown.dispatch(a.keyCode))
        }, e._onKeyup = function(a) {
            delete e._keysDown[a.keyCode], delete e._keysDownPerFrame[a.keyCode], e.signalKeyUp && e.signalKeyUp.dispatch(a.keyCode)
        }
    }, {
        "./../Canvas": 3
    }],
    29: [function(a, b, c) {
        var d = function() {
            this.seed = 1
        };
        b.exports = d, d.prototype.nextInt = function() {
            return this._gen()
        }, d.prototype.nextDouble = function() {
            return this._gen() / 2147483647
        }, d.prototype.nextIntRange = function(a, b) {
            return a -= .4999, b += .4999, Math.abs(Math.round(a + (b - a) * this.nextDouble()))
        }, d.prototype.nextDoubleRange = function(a, b) {
            return a + (b - a) * this.nextDouble()
        }, d.prototype._gen = function() {
            return Math.abs(this.seed = 16807 * this.seed % 2147483647)
        }
    }, {}],
    30: [function(a, b, c) {
        var d = function(a, b) {
            this.x = a || 0, this.y = b || 0
        };
        b.exports = d, d.VERSION = "1.0.1", d.prototype.add = function(a) {
            return new p3.Vector2(this.x + a.x, this.y + a.y)
        }, d.prototype.subtract = function(a) {
            return new p3.Vector2(this.x - a.x, this.y - a.y)
        }, d.prototype.scale = function(a) {
            return new p3.Vector2(this.x * a, this.y * a)
        }, d.prototype.incrementBy = function(a) {
            this.x = this.x + a.x, this.y = this.y + a.y
        }, d.prototype.decrementBy = function(a) {
            this.x = this.x - a.x, this.y = this.y - a.y
        }, d.prototype.scaleBy = function(a) {
            this.x = this.x * a, this.y = this.y * a
        }, d.prototype.normalize = function(a) {
            var b = this.length;
            b > 0 && (this.x = this.x / b * a, this.y = this.y / b * a)
        }, d.prototype.truncate = function(a) {
            var b = this.length;
            b > a && (this.x = this.x / b * a, this.y = this.y / b * a)
        }, d.prototype.dotProduct = function(a) {
            return this.x * a.x + this.y * a.y
        }, d.prototype.perpProduct = function(a) {
            return -this.y * a.x + this.x * a.y
        }, d.prototype.clone = function() {
            return new p3.Vector2(this.x, this.y)
        }, Object.defineProperty(d.prototype, "length", {
            get: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
        }), Object.defineProperty(d.prototype, "lengthSq", {
            get: function() {
                return this.x * this.x + this.y * this.y
            }
        }), Object.defineProperty(d.prototype, "unit", {
            get: function() {
                var a = this.length;
                return new p3.Vector2(this.x / a, this.y / a)
            }
        })
    }, {}],
    31: [function(a, b, c) {
        var d = function() {
            this._module = null
        };
        b.exports = d, d.DEBUG = !1, d.prototype.init = function(a) {
            this._module = a
        }, d.prototype.track = function(a) {
            this._module.track(a), d.DEBUG && console.log("Track sent - ", a)
        }
    }, {}],
    32: [function(a, b, c) {
        var d = function() {};
        b.exports = d
    }, {}],
    33: [function(a, b, c) {
        var d = a("./TrackingData"),
            e = function(a, b, c) {
                d.call(this), this._name = a, this._type = b, this._params = c
            };
        b.exports = e, e.prototype = Object.create(d), e.prototype.constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return this._name
            }
        }), Object.defineProperty(e.prototype, "type", {
            get: function() {
                return this._type
            }
        }), Object.defineProperty(e.prototype, "params", {
            get: function() {
                return this._params
            }
        })
    }, {
        "./TrackingData": 32
    }],
    34: [function(a, b, c) {
        var d = a("./TrackingData"),
            e = function(a, b, c) {
                d.call(this), this._name = a, this._type = b, this._params = c
            };
        b.exports = e, e.prototype = Object.create(d.prototype), e.prototype.constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return this._name
            }
        }), Object.defineProperty(e.prototype, "type", {
            get: function() {
                return this._type
            }
        }), Object.defineProperty(e.prototype, "params", {
            get: function() {
                return this._params
            }
        })
    }, {
        "./TrackingData": 32
    }],
    35: [function(a, b, c) {
        var d = a("./TrackingData"),
            f = (a("./TrackingModuleGoogle"), function(a, b, c, d) {
                this.category = a, this.action = b, this.label = c, this.value = d
            });
        b.exports = f, f.prototype = Object.create(d), f.prototype.constructor = f
    }, {
        "./TrackingData": 32,
        "./TrackingModuleGoogle": 44
    }],
    36: [function(a, b, c) {
        var d = a("./TrackingData"),
            f = (a("./TrackingModuleGoogle"), function(a) {
                this.page = a
            });
        b.exports = f, f.prototype = Object.create(d), f.prototype.constructor = f
    }, {
        "./TrackingData": 32,
        "./TrackingModuleGoogle": 44
    }],
    37: [function(a, b, c) {
        TrackingDataPlaydom = function() {
            this.tag = null
        }, b.exports = TrackingDataPlaydom, TrackingDataPlaydom.prototype.getParams = function(a) {
            return {}
        }
    }, {}],
    38: [function(a, b, c) {
        function e(a, b, c, d, e, f, g, h) {
            this.tag = "device_info", this.machine = a || "NULL", this.model = b || "NULL", this.osVersion = c || "NULL", this.mToken = d || "NULL", this.deviceId = e || "NULL", this.iosVendorId = f || "NULL", this.iosAdvertisingId = g || "NULL", this.googAdvertisingId = h || "NULL"
        }
        var d = a("./TrackingDataPlaydom");
        b.exports = e, e.prototype = Object.create(d.prototype), e.prototype.constructor = e, e.prototype.getParams = function(a) {
            return a = a || {}, a.tag = this.tag, a.machine = this.machine, a.model = this.model, a.osVersion = this.osVersion, a.mToken = this.mToken, a.deviceId = this.deviceId, a.iosVendorId = this.iosVendorId, a.iosAdvertisingId = this.iosAdvertisingId, a.googAdvertisingId = this.googAdvertisingId, a
        }
    }, {
        "./TrackingDataPlaydom": 37
    }],
    39: [function(a, b, c) {
        function e(a, b, c) {
            this.tag = "game_action", this.context = a, this.action = b, this.message = c
        }
        var d = a("./TrackingDataPlaydom");
        b.exports = e, e.prototype = Object.create(d.prototype), e.prototype.constructor = e, e.prototype.getParams = function(a) {
            return a = a || {}, a.tag = this.tag, a.context = this.context, a.action = this.action, a.message = this.message, a
        }
    }, {
        "./TrackingDataPlaydom": 37
    }],
    40: [function(a, b, c) {
        function e(a, b) {
            this.tag = "navigation_action", this.context = a, this.action = b
        }
        var d = a("./TrackingDataPlaydom");
        b.exports = e, e.prototype = Object.create(d.prototype), e.prototype.constructor = e, e.prototype.getParams = function(a) {
            return a = a || {}, a.tag = this.tag, a.context = this.context, a.action = this.action, a
        }
    }, {
        "./TrackingDataPlaydom": 37
    }],
    41: [function(a, b, c) {
        var d = function() {};
        b.exports = d, d.track = function(a) {}, d.isScriptFound = function() {
            return !1
        }
    }, {}],
    42: [function(a, b, c) {
        var d = a("./TrackingModule"),
            e = function(a, b, c, d, f) {
                this.window = window.top || window, e.DEV_lib = this.trackingLib = a, this.isScriptFound() && (f ? e.DEV_statsLogger = this.statsLogger = this.trackingLib.create(b, c, d, f) : e.DEV_statsLogger = this.statsLogger = this.trackingLib.create(b, c, d))
            };
        b.exports = e, e.prototype = Object.create(d), e.prototype.constructor = e, e.DEV_lib = null, e.DEV_statsLogger = null, e.TYPE_PAGE = "page", e.TYPE_EVENT = "event", e.prototype.track = function(a) {
            this.isScriptFound() && (!a || !a.action_name || !a.action_type, this.statsLogger.logAction(a.action_name, a.action_type, a.params)), a.action_name = null, a.action_type = null, a.params = null, a = null
        }, e.prototype.isScriptFound = function() {
            return this.trackingLib ? !0 : !1
        }
    }, {
        "./TrackingModule": 41
    }],
    43: [function(a, b, c) {
        var d = a("./TrackingModule"),
            e = function() {
                d.call(this)
            };
        b.exports = e, e.prototype = Object.create(d.prototype), e.prototype.constructor = e, e.prototype.track = function(a) {
            window.stats && window.stats.logUserActionEvent(a.name, a.type, a.params)
        }
    }, {
        "./TrackingModule": 41
    }],
    44: [function(a, b, c) {
        var d = a("./TrackingModule"),
            e = a("./TrackingDataGoogleEvent"),
            f = a("./TrackingDataGooglePage"),
            g = function(a, b) {
                this.window = window.top || window, this.isScriptFound() && this.window.ga("create", a, b)
            };
        b.exports = g, g.prototype = Object.create(d), g.prototype.constructor = g, g.prototype.track = function(a) {
            this.isScriptFound() && (a instanceof f ? this.window.ga("send", {
                hitType: "pageview",
                page: "/" + a.page,
                title: a.page
            }) : a instanceof e && this.window.ga("send", {
                hitType: "event",
                eventCategory: a.category,
                eventAction: a.action,
                eventLabel: a.label,
                eventValue: a.value
            }))
        }, g.prototype.isScriptFound = function() {
            return this.window.ga ? !0 : (console.warn("[p3.Tracking] Google Analytics script is not found on the page."), !1)
        }
    }, {
        "./TrackingDataGoogleEvent": 35,
        "./TrackingDataGooglePage": 36,
        "./TrackingModule": 41
    }],
    45: [function(a, b, c) {
        function d(a, b, c, d, e) {
            this._app = a, this._appLocale = b, this._network = c, this._viewNetwork = d, this._authorizationId = e, this._browserId = window.localStorage.browserId ? window.localStorage.browserId : this.generateKey(), window.localStorage.browserId = this._browserId, this._transactionId = this.generateKey()
        }
        b.exports = d, d.prototype.track = function(a) {
            var b = "https://api.disney.com/datatech/serverlog/v1/json",
                c = {};
            c.app = this._app, c.user_id = this._browserId, c.app_locale = this._appLocale, c.transaction_id = this._transactionId, c.browserId = this._browserId, c.network = this._network, c.view_network = this._viewNetwork;
            var d = JSON.stringify(a.getParams(c));
            console.log(d);
            var e = new XMLHttpRequest;
            e.open("POST", b, !0), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("Authorization", this._authorizationId), e.send(d)
        }, d.prototype.generateKey = function() {
            var a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            return a.replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0,
                    c = "x" == a ? b : 3 & b | 8;
                return c.toString(16)
            })
        }
    }, {}],
    46: [function(a, b, c) {
        var e = (a("./FontAtlas"), function(a, b, c, d) {
            if (this.multiline = !0, this.autoKern = !0, this._text = "", this._textAlign = c || e.ALIGN_LEFT, this._textColor = void 0 != d ? d : 16777215, this._fontAtlas = b, this._letterSpacing = 0, this._lines = null, this._numOfLines = 0, !this._fontAtlas) throw new Error("Font atlas is invalid!");
            PIXI.Container.call(this), this.text = a
        });
        b.exports = e, e.prototype = Object.create(PIXI.Container.prototype), e.prototype.constructor = e, e.VERSION = "1.0.1", e.DEBUG = !1, e.ALIGN_CENTER = "center", e.ALIGN_LEFT = "left", e.ALIGN_RIGHT = "right", e.prototype.calculateLines = function() {
            if (this._text || e.DEBUG && console.warn("[BitmapText] this._text is null."), this._lines = [], this.multiline) {
                var a, b, c, d, g = 0,
                    h = 0,
                    i = 0;
                this._numOfLines = 0;
                var j = 0,
                    k = this._text.length;
                if (k > 1)
                    for (; k - 1 > j;) {
                        if (a = this._text.charCodeAt(j), a != f.LINE_FEED) {
                            try {
                                c = this._fontAtlas.getCharacterInfo(a)
                            } catch (l) {
                                c = this._fontAtlas.getCharacterInfo(32), e.DEBUG && console.warn("[BitmapText] Character '" + String.fromCharCode(a) + "' (" + a + ") not found!")
                            }
                            j < this._text.length && this.autoKern ? (b = this._text.charCodeAt(j + 1), h = this._fontAtlas.getKerning(a, b)) : h = 0, i += c.getXAdvance() + h + this._letterSpacing
                        } else d = this._text.substring(g, j), this._lines.push(d), ++this._numOfLines, i = 0, g = j + 1;
                        ++j
                    }
                k > g && (d = this._text.substring(g, k), this._lines.push(d), ++this._numOfLines)
            } else this._numOfLines = 1
        }, e.prototype.renderGlyph = function(a, b, c) {
            var d;
            try {
                d = this._fontAtlas.getCharacterInfo(a)
            } catch (e) {
                d = this._fontAtlas.getCharacterInfo(32)
            }
            var f = new PIXI.Sprite(d.getTexture());
            f.x = b + d.getXOffset(), f.y = c + d.getYOffset(), f.tint = this._textColor, this.addChild(f)
        }, e.prototype.renderText = function() {
            if (this.getLineHeight() <= 0) throw new Error("[BitmapText] Invalid text field dimensions!");
            var a, b, c, d, g, h, i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            if (this.removeChildren(), this.multiline) {
                var o = null,
                    p = null;
                for (a = 0; a < this._numOfLines; ++a)
                    for (l = 0, o = this._lines[a], m = this.getLineWidth(o), p = o.length, b = 0; p > b; ++b) {
                        d = o.charCodeAt(b);
                        try {
                            h = this._fontAtlas.getCharacterInfo(d)
                        } catch (n) {
                            h = this._fontAtlas.getCharacterInfo(32)
                        }
                        if (d != f.SPACE) {
                            switch (a < this._text.length && this.autoKern ? (g = this._text.charCodeAt(a + 1), k = this._fontAtlas.getKerning(d, g)) : k = 0, this._textAlign) {
                                case e.ALIGN_LEFT:
                                    i = l;
                                    break;
                                case e.ALIGN_RIGHT:
                                    i = l - m;
                                    break;
                                case e.ALIGN_CENTER:
                                    i = l - .5 * m;
                                    break;
                                default:
                                    throw new Error("[BitmapText] Invalid text alignment!")
                            }
                            i = Math.floor(i), j = Math.floor(a * this.getLineHeight()), this.renderGlyph(d, i, j), l += h.getXAdvance() + k + this._letterSpacing;
                        } else l += h.getXAdvance() + this._letterSpacing
                    }
            } else
                for (m = this.getLineWidth(this._text), c = this._text.length, a = 0; c > a; ++a)
                    if (d = this._text.charCodeAt(a), d != f.LINE_FEED) {
                        try {
                            h = this._fontAtlas.getCharacterInfo(d)
                        } catch (n) {
                            h = this._fontAtlas.getCharacterInfo(32)
                        }
                        if (d != f.SPACE) {
                            switch (a < this._text.length && this.autoKern ? (g = this._text.charCodeAt(a + 1), k = this._fontAtlas.getKerning(d, g)) : k = 0, this._textAlign) {
                                case e.ALIGN_LEFT:
                                    i = l;
                                    break;
                                case e.ALIGN_RIGHT:
                                    i = l - m;
                                    break;
                                case e.ALIGN_CENTER:
                                    i = l - .5 * m;
                                    break;
                                default:
                                    throw new Error("[BitmapText] Invalid text alignment!")
                            }
                            i = Math.floor(i), this.renderGlyph(d, i, j), l += h.getXAdvance() + k + this._letterSpacing
                        } else l += h.getXAdvance() + this._letterSpacing
                    }
        }, Object.defineProperty(e.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                a !== this._text && (this._text = a, this.calculateLines(), this.renderText())
            }
        }), Object.defineProperty(e.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(a) {
                a !== this._textColor && (this._textColor = a, this.calculateLines(), this.renderText())
            }
        }), Object.defineProperty(e.prototype, "letterSpacing", {
            get: function() {
                return this._letterSpacing
            },
            set: function(a) {
                a != this._letterSpacing && (this._letterSpacing = a, this.calculateLines(), this.renderText())
            }
        }), e.prototype.getFontAtlas = function() {
            return this._fontAtlas
        }, e.prototype.getFontName = function() {
            return null != this._fontAtlas ? this._fontAtlas.font.info.face : ""
        }, e.prototype.getFontSize = function() {
            return null != this._fontAtlas ? this._fontAtlas.font.info.size : 0
        }, e.prototype.getNumOfLines = function() {
            return this._numOfLines
        }, e.prototype.getLineWidth = function(a) {
            for (var b = 0, c = null, d = null, e = null, g = null, h = a.length, i = 0; h > i; ++i)
                if (c = a.charCodeAt(i), c != f.LINE_FEED) {
                    try {
                        e = this._fontAtlas.getCharacterInfo(c)
                    } catch (j) {
                        e = this._fontAtlas.getCharacterInfo(32)
                    }
                    i < this._text.length && this.autoKern ? (d = this._text.charCodeAt(i + 1), g = this._fontAtlas.getKerning(c, d)) : g = 0, b += e.getXAdvance() + g + this._letterSpacing
                }
            return b
        }, e.prototype.getLineHeight = function() {
            return this.lineHeight > 0 ? this.lineHeight : this._fontAtlas.getFont().common.lineHeight
        };
        var f = function() {};
        f.LINE_FEED = 10, f.SPACE = 32
    }, {
        "./FontAtlas": 48
    }],
    47: [function(a, b, c) {
        var d = function(a, b) {
            this._id = parseInt(a.id), this._xAdvance = parseInt(a.xadvance), this._x = parseInt(a.x), this._y = parseInt(a.y), this._width = parseInt(a.width), this._height = parseInt(a.height), this._xOffset = parseInt(a.xoffset), this._yOffset = parseInt(a.yoffset), this._letter = a.letter, this._spriteName = b
        };
        b.exports = d, d.VERSION = "1.0.0", d.prototype.getId = function() {
            return this._id
        }, d.prototype.getXAdvance = function() {
            return this._xAdvance
        }, d.prototype.getX = function() {
            return this._x
        }, d.prototype.getY = function() {
            return this._y
        }, d.prototype.getWidth = function() {
            return this._width
        }, d.prototype.getHeight = function() {
            return this._height
        }, d.prototype.getXOffset = function() {
            return this._xOffset
        }, d.prototype.getYOffset = function() {
            return this._yOffset
        }, d.prototype.getLetter = function() {
            return this._letter
        }, d.prototype.getTexture = function() {
            return this._spriteName
        }
    }, {}],
    48: [function(a, b, c) {
        var d = a("./CharacterInfo"),
            e = function(a, b, c) {
                this._name = a, this._data = b, this._spriteName = c, this._font = null, this._charInfo = {}, this._kerningMap = {}, this.parseData(b)
            };
        b.exports = e, e.VERSION = "1.0.0", e.prototype.parseData = function(a) {
            if (!a || !a.font) throw Error("[FontAtlas] parseData: There is a problem with the data:", a);
            this._font = a.font;
            for (var b, c, e, f = this._font.chars["char"].length, g = 0; f > g; ++g) b = this._font.chars["char"][g], e = new PIXI.Texture(this._spriteName.baseTexture, new PIXI.Rectangle(parseInt(b.x), parseInt(b.y), parseInt(b.width), parseInt(b.height))), c = new d(b, e), this._charInfo[b.id] = c;
            this.mapKernings()
        }, e.prototype.mapKernings = function() {
            var a = this._font.kernings;
            if (a)
                for (var b = a.length, c = 0; 127 > c; ++c)
                    for (var d = 0; b > d; ++d) {
                        var e = a[d];
                        e.first == c && (void 0 == this._kerningMap[c] && (this._kerningMap[c] = {}), this._kerningMap[c][e.second] = e.amount)
                    }
        }, e.prototype.getName = function() {
            return this._name
        }, e.prototype.getData = function() {
            return this._data
        }, e.prototype.getTexture = function() {
            return this._spriteName
        }, e.prototype.getFont = function() {
            return this._font
        }, e.prototype.getSize = function() {
            return this._font.info.size
        }, e.prototype.getCharacterInfo = function(a) {
            if (null == this._charInfo[a]) throw new Error("CharacterInfo not found!");
            return this._charInfo[a]
        }, e.prototype.getCharacterCount = function() {
            return this._data.font.chars["char"].length
        }, e.prototype.getKerning = function(a, b) {
            var c = 0;
            return void 0 != this._kerningMap[a] && void 0 != this._kerningMap[a][b] && (c = this._kerningMap[a][b]), c
        }
    }, {
        "./CharacterInfo": 47
    }],
    49: [function(a, b, c) {
        var d = a("./Device"),
            e = a("./../Canvas"),
            f = a("./../Timestep"),
            g = a("./../AssetManager"),
            h = a("./../input/Keyboard"),
            i = a("./../display/screenmanager/ScreenManager"),
            j = a("./../Animator"),
            m = function(a, b, c) {
                this.signalPreloaderAssetsComplete = new signals.Signal, this.signalCanvasReady = new signals.Signal, this.signalCanvasResize = new signals.Signal, this.signalLoadProgress = new signals.Signal, this.signalLoadComplete = new signals.Signal, this._canvasParams = a, this._fps = b || 60, this._resolution = c || 1, this._stage = null, this._renderer = null, this._canvas = new e(this._canvasParams), this._canvas.signalChange.add(this._onCanvasResize, this), this._canvas.signalReady.add(this._onCanvasReady, this), this._timestep = new f(2)
            };
        b.exports = m, m.animator = null, m.prototype.init = function() {
            this._assetManager = g.instance, this._canvas.init(), m.animator = new j, m.animator.init()
        }, m.prototype.loadPreloaderAssets = function(a, b) {
            a && a.length > 0 ? (this._assetManager.addFiles(a, b), this._assetManager.signalCompleted.add(function() {
                this.signalPreloaderAssetsComplete.dispatch()
            }, this), this._assetManager.load()) : this.signalPreloaderAssetsComplete.dispatch()
        }, m.prototype.load = function(a, b) {
            b = b || "", this._assetManager.addFiles(a, b), this._assetManager.signalCompleted.add(this._onLoadComplete, this), this._assetManager.signalProgress.add(this._onLoadProgress, this), this._assetManager.load(.5)
        }, m.prototype._update = function() {
            this._screenManager.update(), m.animator.update(), h.update()
        }, m.prototype._render = function() {
            this._renderer.render(this._stage)
        }, m.prototype._onCanvasReady = function() {
            var a = {
                view: e.canvasElement,
                transparent: !1,
                antialias: !1,
                preserveDrawingBuffer: !1,
                autoResize: !1,
                resolution: this._resolution
            };
            e.stage = this._stage = new PIXI.Container, e.params.forceCanvasMode || d.isAndroidStockBrowser && e.params.stockAndroidCanvasMode ? this._renderer = new PIXI.CanvasRenderer(e.width, e.height, a) : this._renderer = new PIXI.autoDetectRenderer(e.width, e.height, a), e.renderer = this._renderer, e.canvasElement || document.body.appendChild(this._renderer.view), this._screenManager = i.instance, this._screenManager.init(this._stage, this._renderer), h.init(e.window), this._timestep.init(this._update, this._render, this), this.signalCanvasReady.dispatch()
        }, m.prototype._onCanvasResize = function(a) {
            a ? (this._renderer.resize(e.width, e.height), this._screenManager.resize(), this._timestep.isRunning = !0) : this._timestep.isRunning = !1, this.signalCanvasResize.dispatch(a)
        }, m.prototype._onLoadProgress = function(a, b) {
            this.signalLoadProgress.dispatch(b, a)
        }, m.prototype._onLoadComplete = function() {
            this._assetManager.signalCompleted.removeAll(), this._assetManager.signalProgress.removeAll(), this.signalLoadComplete.dispatch()
        }, Object.defineProperty(m.prototype, "stage", {
            get: function() {
                return this._stage
            }
        }), Object.defineProperty(m.prototype, "renderer", {
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
    50: [function(a, b, c) {
        var d = a("./CameraLayer"),
            e = a("./CameraParallax"),
            f = function(a, b) {
                this.view = a || new PIXI.Point, this.targetOffset = new PIXI.Point, this.bounds = new PIXI.Rectangle(-(.5 * Number.MAX_VALUE), -(.5 * Number.MAX_VALUE), Number.MAX_VALUE, Number.MAX_VALUE), this.snapToPixelEnabled = b || !0, this.signalTrackingStarted = new signals.Signal, this.signalTrackingFinished = new signals.Signal, this._position = new PIXI.Point(-this.view.x, -this.view.y), this._trackEaseX = .2, this._trackEaseY = .2, this._trackParallax = new PIXI.Point(e.FULL, e.FULL), this._target = null, this._targetPos = new PIXI.Point, this._layers = {}, this._tracking = !1, this._shakeDuration = 0, this._shakeTime = 0, this._shakeStrength = 0
            };
        b.exports = f, f.VERSION = "1.1.0", f.prototype.dispose = function() {
            this._layers = {}, this.signalTrackingStarted.removeAll(), this.signalTrackingStarted = null, this.signalTrackingFinished.removeAll(), this.signalTrackingFinished = null
        }, f.prototype.update = function() {
            void 0 != this._target && (this._targetPos.x = this._target.x + this.targetOffset.x, this._targetPos.y = this._target.y + this.targetOffset.y), this._targetPos.x < this.bounds.x ? this._targetPos.x = this.bounds.x : this._targetPos.x > this.bounds.width && (this._targetPos.x = this.bounds.width), this._targetPos.y < this.bounds.y ? this._targetPos.y = this.bounds.y : this._targetPos.y > this.bounds.height && (this._targetPos.y = this.bounds.height), this._shakeTime > 0 && (this._targetPos.x += this._shakeStrength * p3.Utils.randomInt(-1, 1) * (this._shakeTime / this._shakeDuration), this._targetPos.y += this._shakeStrength * p3.Utils.randomInt(-1, 1) * (this._shakeTime / this._shakeDuration), this._shakeTime = Math.max(0, this._shakeTime - p3.Timestep.deltaTime));
            var a = this._targetPos.x - this.view.x - this._position.x * this._trackParallax.x,
                b = this._targetPos.y - this.view.y - this._position.y * this._trackParallax.y;
            this._position.x += a * (this._trackEaseX * (1 / this._trackParallax.x)), this._position.y += b * (this._trackEaseY * (1 / this._trackParallax.y)), Math.abs(a) < .01 && (this._position.x = this._targetPos.x - this.view.x), Math.abs(b) < .01 && (this._position.y = this._targetPos.y - this.view.y), this.snapToPixelEnabled && (this._position.x = Math.round(this._position.x), this._position.y = Math.round(this._position.y));
            var c = a * a + b * b;.1 > c && !this._tracking ? (this._tracking = !0, this.signalTrackingFinished.dispatch(this)) : c > .1 && this._tracking && (this._tracking = !1, this.signalTrackingStarted.dispatch(this)), this.updateLayers()
        }, f.prototype.trackTarget = function(a, b) {
            if (void 0 != a && (void 0 == a.x || void 0 == a.y)) throw new Error("Camera target is invalid!");
            this._target = a;
            var c = this.findLayerForObject(this._target);
            this._trackParallax.x = c ? c.parallax.x : 1, this._trackParallax.y = c ? c.parallax.y : 1, b && (this._targetPos.x = this._target.x + this.targetOffset.x, this._targetPos.y = this._target.y + this.targetOffset.y, this._targetPos.x < this.bounds.x ? this._targetPos.x = this.bounds.x : this._targetPos.x > this.bounds.width && (this._targetPos.x = this.bounds.width), this._targetPos.y < this.bounds.y ? this._targetPos.y = this.bounds.y : this._targetPos.y > this.bounds.height && (this._targetPos.y = this.bounds.height), this.position = new PIXI.Point(this._targetPos.x - this.view.x, this._targetPos.y - this.view.y))
        }, f.prototype.trackPosition = function(a, b, c) {
            this._target = null, this._targetPos.x = a, this._targetPos.y = b, this._trackParallax.x = 1, this._trackParallax.y = 1, c && (this._targetPos.x < this.bounds.x ? this._targetPos.x = this.bounds.x : this._targetPos.x > this.bounds.width && (this._targetPos.x = this.bounds.width), this._targetPos.y < this.bounds.y ? this._targetPos.y = this.bounds.y : this._targetPos.y > this.bounds.height && (this._targetPos.y = this.bounds.height), this.position = new PIXI.Point(this._targetPos.x - this.view.x, this._targetPos.y - this.view.y))
        }, f.prototype.addLayer = function(a, b, c) {
            if (this.hasLayer(a)) throw new Error("Layer with that name already exists: '" + a + "'.");
            if (this.hasContainer(a)) throw new Error("Container already added to existing layer!");
            c.x = "undefined" != typeof c ? c.x : 1, c.y = "undefined" != typeof c ? c.y : 1;
            var e = new d;
            e.container = b, e.parallax = new PIXI.Point(c.x, c.y), this._layers[a] = e, this.updateLayers()
        }, f.prototype.removeLayer = function(a) {
            if (!this.hasLayer) throw new Error("Layer does not exist!");
            this._layers[a] = null
        }, f.prototype.removeAllLayers = function() {
            this._layers = {}
        }, f.prototype.hasLayer = function(a) {
            return void 0 != this._layers[a]
        }, f.prototype.hasContainer = function(a) {
            for (var b, c = 0; c < this._layers.length; ++c)
                if (b = this._layers[c], b.container == a) return !0;
            return !1
        }, f.prototype.findLayerForObject = function(a) {
            var d, e, f, b = 0,
                c = null;
            for (var g in this._layers)
                if (this._layers.hasOwnProperty(g))
                    for (d = this._layers[g], f = d.container.children.length, b = 0; f > b; ++b) e = d.container.getChildAt(b), a == e && (c = d);
            return c
        }, f.prototype.shake = function(a, b) {
            this._shakeStrength = b, this._shakeTime = this._shakeDuration = a
        }, f.prototype.getLayerByName = function(a) {
            var b = this._layers[a];
            if (b) return b;
            throw new Error("Layer does not exist: '" + a + "'!")
        }, f.prototype.updateLayers = function() {
            for (var a in this._layers)
                if (this._layers.hasOwnProperty(a)) {
                    var b = this._layers[a];
                    b.container.x = -this._position.x * b.parallax.x, b.container.y = -this._position.y * b.parallax.y
                }
        }, Object.defineProperty(f.prototype, "target", {
            get: function() {
                return this._target
            }
        }), Object.defineProperty(f.prototype, "position", {
            get: function() {
                return this._position
            },
            set: function(a) {
                this._position.x = a.x * (this._trackParallax.x > 0 ? 1 / this._trackParallax.x : 1), this._position.y = a.y * (this._trackParallax.y > 0 ? 1 / this._trackParallax.y : 1), this.updateLayers()
            }
        }), Object.defineProperty(f.prototype, "trackEase", {
            get: function() {
                return this._trackEaseX
            },
            set: function(a) {
                this._trackEaseX = Math.max(.001, Math.min(1, a)), this._trackEaseY = this._trackEaseX
            }
        }), Object.defineProperty(f.prototype, "trackEaseX", {
            get: function() {
                return this._trackEaseX
            },
            set: function(a) {
                this._trackEaseX = Math.max(.001, Math.min(1, a))
            }
        }), Object.defineProperty(f.prototype, "trackEaseY", {
            get: function() {
                return this._trackEaseY
            },
            set: function(a) {
                this._trackEaseY = Math.max(.001, Math.min(1, a))
            }
        })
    }, {
        "./CameraLayer": 51,
        "./CameraParallax": 52
    }],
    51: [function(a, b, c) {
        var d = function() {
            this.container = null, this.parallax = null
        };
        b.exports = d
    }, {}],
    52: [function(a, b, c) {
        var d = function() {};
        b.exports = d, d.NONE = 0, d.HALF = .5, d.FULL = 1
    }, {}],
    53: [function(a, b, c) {
        function d() {}
        b.exports = d, d.RED = 16711680, d.GREEN = 65280, d.BLUE = 255, d.WHITE = 16777215, d.BLACK = 0, d.lerp = function(a, b, c) {
            var e = d.hex2rgb(a),
                f = d.hex2rgb(b);
            return f.r = (1 - c) * e.r + c * f.r, f.g = (1 - c) * e.g + c * f.g, f.b = (1 - c) * e.b + c * f.b, d.rgb2hex(f.r, f.g, f.b)
        }, d.hex2rgb = function(a) {
            var b = {};
            return b.r = a >> 16 & 255, b.g = a >> 8 & 255, b.b = a >> 0 & 255, b
        }, d.rgb2hex = function(a, b, c) {
            return a << 16 | b << 8 | c
        }
    }, {}],
    54: [function(a, b, c) {
        var d = function() {};
        b.exports = d, d.init = function(a) {
            a || console.warn("[Device] 'bowser' not found, it much be included in the libs and added to the window.");
            var b = navigator.userAgent;
            d.bowser = a, d._regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/), d._resultAppleWebKitRegEx = d._regExAppleWebKit.exec(navigator.userAgent), d._appleWebKitVersion = null === d._resultAppleWebKitRegEx ? null : parseFloat(d._regExAppleWebKit.exec(navigator.userAgent)[1]), d._webgl = function() {
                try {
                    var a = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
                } catch (b) {
                    return !1
                }
            }(), d.isMobile = a.mobile || a.tablet, d.isLowRes = Math.max(window.innerWidth, window.innerHeight) <= 372, d.isIOS = a.ios, d.isAndroid = a.android, d.isIpad = d.isIOS && "iPad" == a.name, d.isIpadMini = d.isIOS && d.isIpad && 1 === window.devicePixelRatio && Math.max(window.innerWidth, window.innerHeight) <= 1024, d.isIpod = d.isIOS && "iPod" == a.name, d.isIphone = d.isIOS && "iPhone" == a.name, d.isWebGL = d._webgl, d.isCanvas = !d._webgl, d.isAndroidStockBrowser = d.isAndroid && null !== d._appleWebKitVersion && d._appleWebKitVersion < 537, d.isIOS9 = d.isIOS && /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase()), d.isIframe = window.self !== window.top, d.isKindle = /Kindle/i.test(b) || /Silk/i.test(b) || /KFTT/i.test(b) || /KFOT/i.test(b) || /KFJWA/i.test(b) || /KFJWI/i.test(b) || /KFSOWI/i.test(b) || /KFTHWA/i.test(b) || /KFTHWI/i.test(b) || /KFAPWA/i.test(b) || /KFAPWI/i.test(b), d.isTwitterFacebookBrowser = /(twitter|fban|fbav)/.test(navigator.userAgent.toLowerCase()), d.isReady = !0
        }, d.isReady = !1, d.bowser = null, d.isMobile = !1, d.isIOS = !1, d.isAndroid = !1, d.isIpad = !1, d.isIpod = !1, d.isIphone = !1, d.isIphone4 = !1, d.isKindle = !1, d.isLowRes = !1, d.isWebGL = !1, d.isCanvas = !1, d.isAndroidStockBrowser = !1, d.isIOS9 = !1, d.isIframe = !1, d.isTwitterFacebookBrowser = !1, Object.defineProperty(d, "isCocoonJS", {
            get: function() {
                return "undefined" != typeof navigator.isCocoonJS
            }
        })
    }, {}],
    55: [function(a, b, c) {
        function d(a, b, c) {
            this._base = a, this._args = c || null, this._free = [], this._used = [], this.expand(Math.max(1, b))
        }
        b.exports = d, d.prototype.dispose = function() {
            for (var a, b = 0; b < this._free.length; ++b) a = this._free[b], a && a.dispose();
            for (this._free.length = 0, b = 0; b < this._used.length; ++b) a = this._used[b], a && a.dispose();
            this._used.length = 0
        }, d.prototype.expand = function(a) {
            for (var b, c = 0; a > c; ++c) b = Object.create(this._base.prototype), b.constructor = this._base, this._base.apply(b, this._args), this._free.push(b)
        }, d.prototype.create = function() {
            var a = this._free.shift();
            return a ? (a.init && a.init(), this._used.push(a), a) : null
        }, d.prototype.free = function(a) {
            var b = this._used.indexOf(a);
            return -1 != b && (a.reset && a.reset(), this._free.push(a), this._used.splice(b, 1)), -1 != b
        }, Object.defineProperty(d.prototype, "size", {
            get: function() {
                return this._free.length + this._used.length
            }
        }), Object.defineProperty(d.prototype, "available", {
            get: function() {
                return this._free.length
            }
        })
    }, {}],
    56: [function(a, b, c) {
        var d = function() {};
        b.exports = d;
        d.prototype;
        d.quickSort = function(a, b, c) {
            function e(a, b, c) {
                for (var e, d = a[b + c >>> 1]; c >= b;) {
                    for (; a[b] < d;) b++;
                    for (; a[c] > d;) c--;
                    c >= b && (e = a[b], a[b++] = a[c], a[c--] = e)
                }
                return b
            }
            var f = e(a, b, c);
            return f - 1 > b && d.quickSort(a, b, f - 1), c > f && d.quickSort(a, f, c), a
        }, d.quickSortProperty = function(a, b, c, e) {
            function f(a, b, c) {
                for (var f, d = a[b + c >>> 1]; c >= b;) {
                    for (; a[b][e] < d[e];) b++;
                    for (; a[c][e] > d[e];) c--;
                    c >= b && (f = a[b], a[b++] = a[c], a[c--] = f)
                }
                return b
            }
            var g = f(a, b, c);
            return g - 1 > b && d.quickSortProperty(a, b, g - 1, e), c > g && d.quickSortProperty(a, g, c, e), a
        }, d.insertionSort = function(a) {
            var c, d, e, b = a.length;
            for (d = 0; b > d; d++) {
                for (c = a[d], e = d - 1; e > -1 && a[e] > c; e--) a[e + 1] = a[e];
                a[e + 1] = c
            }
            return a
        }, d.insertionSortProperty = function(a, b) {
            var d, e, f, c = a.length;
            for (e = 0; c > e; e++) {
                for (d = a[e], f = e - 1; f > -1 && a[f][b] > d[b]; f--) a[f + 1] = a[f];
                a[f + 1] = d
            }
            return a
        }, d.bubbleSort = function(a) {
            var b, c, d, e;
            for (b = 0, d = a.length; d > b; b++)
                for (c = b + 1; d > c; c++) a[b] > a[c] && (e = a[b], a[b] = a[c], a[c] = e);
            return a
        }, d.bubbleSortProperty = function(a, b) {
            var c, d, e, f;
            for (c = 0, e = a.length; e > c; c++)
                for (d = c + 1; e > d; d++) a[c][b] > a[d][b] && (f = a[c], a[c] = a[d], a[d] = f);
            return a
        }, d.test = function(a, b) {
            var c, e, f, g = [],
                h = [];
            for (a = a || 100, b = b || 1e4, f = 0; a > f; f++) g.push(Math.round(1e3 * Math.random()));
            for (f = 0; a > f; f++) {
                var i = {};
                i.y = Math.round(1e3 * Math.random()), h.push(i)
            }
            for (DEBUG && console.log("//////////////////////"), DEBUG && console.log("/////// SIMPLE ///////"), DEBUG && console.log("////////////////////// "), DEBUG && console.log("\n"), c = new Date, f = 0; b > f; f++) e = d.bubbleSort(g.slice(0));
            for (DEBUG && console.log("Bubble:", new Date - c, ":", e, "\n"), c = new Date, f = 0; b > f; f++) e = d.quickSort(g.slice(0), 0, g.length - 1);
            for (DEBUG && console.log("Quick:", new Date - c, ":", e, "\n"), c = new Date, f = 0; b > f; f++) e = d.insertionSort(g.slice(0));
            for (DEBUG && console.log("Insertion:", new Date - c, ":", e, "\n"), DEBUG && console.log("\n"), DEBUG && console.log("//////////////////////"), DEBUG && console.log("////// PROPERTY //////"), DEBUG && console.log("//////////////////////"), DEBUG && console.log("\n"), c = new Date, f = 0; b > f; f++) e = d.bubbleSortProperty(h.slice(0), "y");
            for (DEBUG && console.log("Bubble:", new Date - c, ":", e, "\n"), c = new Date, f = 0; b > f; f++) e = d.quickSortProperty(h.slice(0), 0, h.length - 1, "y");
            for (DEBUG && console.log("Quick:", new Date - c, ":", e, "\n"), c = new Date, f = 0; b > f; f++) e = d.insertionSortProperty(h.slice(0), "y");
            DEBUG && console.log("Insertion:", new Date - c, ":", e, "\n")
        }
    }, {}],
    57: [function(a, b, c) {
        var d = a("./../Timestep"),
            e = function(a, b) {
                this.currentCount = 0, this.delay = a, this.timeLeft = this.delay, this.repeatCount = Math.max(0, b) || 0, this.removeOnComplete = !0, this.signals = {}, this.signals.timer = new signals.Signal, this.signals.timerComplete = new signals.Signal, this._running = !1, this._invalid = !1
            };
        b.exports = e, e.s2ms = function(a) {
            return 1e3 * a
        }, e.ms2s = function(a) {
            return a / 1e3
        }, e.prototype.start = function() {
            this._running = !0
        }, e.prototype.stop = function() {
            this._running = !1
        }, e.prototype.reset = function() {
            this.currentCount = 0, this.timeLeft = this.delay, this.stop()
        }, e.prototype.update = function() {
            !this._running || this.complete || this._invalid || (this.timeLeft <= 0 ? (this.timeLeft = this.delay + this.timeLeft, ++this.currentCount, this.signals.timer.dispatch(this), this.complete && (this.timeLeft = 0, this.signals.timerComplete.dispatch(this))) : this.timeLeft -= d.deltaTime)
        }, e.prototype.dispose = function() {
            this._invalid = !0, this.stop(), this.signals.timer.dispose(), this.signals.timerComplete.dispose()
        }, Object.defineProperty(e.prototype, "running", {
            get: function() {
                return this._running && !this.complete
            }
        }), Object.defineProperty(e.prototype, "invalid", {
            get: function() {
                return this._invalid
            }
        }), Object.defineProperty(e.prototype, "complete", {
            get: function() {
                return this.repeatCount && this.currentCount >= this.repeatCount
            }
        })
    }, {
        "./../Timestep": 5
    }],
    58: [function(a, b, c) {
        var d = a("./../Canvas"),
            e = function() {};
        b.exports = e, e.VERSION = "01.02.00", e.PI = 3.141592653589793, e.TO_RADIANS = .017453292519943295, e.TO_DEGREES = 57.29577951308232, e.TextFieldStripUnderScores = function(a, b) {
            return a.replace(/[_]/g, b)
        }, e.HexToRGB = function(a) {
            var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return b ? {
                r: parseInt(b[1], 16),
                g: parseInt(b[2], 16),
                b: parseInt(b[3], 16)
            } : null
        }, e.randomInt = function(a, b) {
            a = parseInt(a), b = parseInt(b), b = b || 0;
            var c;
            return a > b ? (c = Math.round(Math.random() * (a - b)), Math.round(b + c)) : b > a ? (c = Math.round(Math.random() * (b - a)), Math.round(b - c)) : a
        }, e.randomBoolean = function() {
            return Math.random() >= .5
        }, e.roundNumber = function(a, b) {
            b = b || 0;
            var c = Math.pow(10, b);
            return Math.round(Math.floor(a * c) / c)
        }, e.padNumber = function(a, b) {
            b = b || 0;
            var c = Math.abs(a),
                d = Math.max(0, b - Math.floor(c).toString().length),
                e = Math.pow(10, d).toString().substr(1);
            return 0 > a && (e = "-" + e), e + c
        }, e.roundToPointFive = function(a) {
            return Math.round(2 * a) / 2
        }, e.stringToFunction = function(a) {
            for (var b = a.split("."), c = window = window.self, d = c || this, e = 0, f = b.length; f > e; e++) d = d[b[e]];
            if ("function" != typeof d) throw new Error("[Utils.stringToFunction] function not found = " + a);
            return d
        }, e.distanceSqrt = function(a, b) {
            var c = 0,
                d = 0;
            return c = a.x - b.x, c *= c, d = a.y - b.y, d *= d, Math.sqrt(c + d)
        }, e.distanceSqrtFast = function(a, b) {
            return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
        }, e.shuffleArray = function(a) {
            for (var b = a.length, c = null, d = null; 0 !== b;) d = Math.floor(Math.random() * b), b -= 1, c = a[b], a[b] = a[d], a[d] = c;
            return a
        }, e.randomItemFromArray = function(a) {
            return a[e.randomInt(a.length - 1)]
        }, e.rectangleIntersects = function(a, b) {
            return a.x <= b.x + b.width && b.x <= a.x + a.width && a.y <= b.y + b.height && b.y <= a.y + a.height
        }, e.validateEmail = function(a) {
            var b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return b.test(a)
        }, e.commaFormatNumber = function(a) {
            return (a + "").replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
        }, e.checkStringForMatch = function(a, b) {
            var c = b.join("|"),
                d = new RegExp(c),
                e = a.search(d);
            return -1 != e ? !0 : !1
        }, e.getURLParameter = function(a, b) {
            var c = decodeURI((RegExp(a + "=(.+?)(&|$)").exec(location.search) || [, null])[1]);
            return "null" === c && b && (c = b), c
        }, e.goBack = function(a) {
            a = a || -1;
            var b = window.top || window;
            b.history.go(a)
        }, e.convertStringToXML = function(a) {
            var b, c = window.top || window;
            return (b = c.DOMParser ? function(a) {
                return (new c.DOMParser).parseFromString(a, "text/xml")
            } : "undefined" != typeof c.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM") ? function(a) {
                var b = new c.ActiveXObject("Microsoft.XMLDOM");
                return b.async = "false", b.loadXML(a), b
            } : function() {
                return null
            })(a)
        }, e.stringToBoolean = function(a) {
            switch (a.toString().toLowerCase()) {
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
                    return Boolean(string)
            }
        }, e.clampNumber = function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        }, e.normaliseNumber = function(a, b, c) {
            return (a - b) / (c - b)
        }, e.lerpNumber = function(a, b, c) {
            return (c - b) * a + b
        }, e.mapNumber = function(a, b, c, d, f) {
            return e.lerpNumber(e.normaliseNumber(a, b, c), d, f)
        }, e.scaleValue = function(a, b) {
            return b / a
        }, e.pointInRect = function(a, b) {
            return e.inRange(a.x, b.x, b.x + b.width) && e.inRange(a.y, b.y, b.y + b.height)
        }, e.inRange = function(a, b, c) {
            return a >= Math.min(b, c) && a <= Math.max(b, c)
        }, e.generateGUID = function() {
            var a = (new Date).getTime(),
                b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            return b.replace(/[xy]/g, function(b) {
                var c = (a + 16 * Math.random()) % 16 | 0;
                return a = Math.floor(a / 16), ("x" == b ? c : 7 & c | 8).toString(16)
            })
        }, e.createHitAreaSprite = function(a) {
            var b = new PIXI.DisplayObjectContainer;
            if (b.interactive = !0, b.hitArea = new PIXI.Rectangle(0, 0, d.width, d.height), a) {
                var c = new PIXI.Graphics;
                c.beginFill("0x00ccff", .7), c.drawRect(0, 0, d.width, d.height), b.addChild(c)
            }
            return b
        }, e.createModalBlock = function(a, b, c, e, f) {
            a = a || "0x000000", b = "undefined" == typeof b ? .7 : b;
            var g = c || d.width,
                h = e || d.height;
            f = f || 1;
            var i = new PIXI.Graphics;
            i.beginFill(a, b), i.drawRect(0, 0, g, h);
            var j = new PIXI.Sprite(i.generateTexture(f));
            return j.interactive = !0, j.buttonMode = !1, j.mousedown = j.mouseup = j.click = j.tap = function() {}, j
        }, e.cloneObject = function(a) {
            if (null == a || "object" != typeof a) return a;
            var b = a.constructor();
            for (var c in a) a.hasOwnProperty(c) && (b[c] = e.cloneObject(a[c]));
            return b
        }, e.calculateParabola = function(a, b, c, d, e, f) {
            c -= a, d = -(d - b);
            var g;
            g = d > 0 ? d + f : f;
            var m, h = d,
                i = -2 * c * g,
                j = g * c * c,
                k = (-i + Math.sqrt(i * i - 4 * h * j)) / (2 * h),
                l = (-i - Math.sqrt(i * i - 4 * h * j)) / (2 * h);
            m = d > 0 && c > 0 || 0 > d && 0 > c ? Math.min(k, l) : Math.max(k, l);
            for (var q, r, n = -g / (m * m), o = [], p = [], s = 0; e + 1 > s; s++) q = s * c / e, r = n * (q * q - 2 * q * m), p.push(q + a), o.push(b - r);
            return {
                x: p,
                y: o
            }
        }, e.logNestedArray = function(a) {
            var b = JSON.stringify(a);
            b = b.replace(/(?:],)/g, "],\n"), console.log(b)
        }
    }, {
        "./../Canvas": 3
    }]
}, {}, [27]);