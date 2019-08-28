function switOnLoad() {
    if (!navigator.isCocoonJS) {
        if (!window.SwitEntryPoint.isSupported) return;
        if (!navigator.cookieEnabled) {
            var a = document.createElement("div");
            a.setAttribute("align", "center");
            document.body.appendChild(a);
            var b = new Image;
            b.onload = function() {
                b.setAttribute("width", "100%");
                b.setAttribute("height", "100%");
                a.appendChild(b)
            };
            b.src = "media/images/ui_images/cookiesrequired.jpg";
            return
        }
    }
    if (navigator.isCocoonJS && window.CocoonJS && window.CocoonJS.App) {
        var c = "IPHONE_4 IPAD_2 IPAD_MINI_1 IPOD_ NABIJR KINDLE KFOT KFTT KFJWA KFJWI KFSOWI KFAPWA KFAPWI KFTHWA KFTHWI KFARWI KFASWI KFSAWA KFSAWI".split(" "),
            d = ["world_"];
        if (window.CocoonJS.App) {
            var e = window.CocoonJS.App.getDeviceInfo();
            if (e) {
                var f = e.model;
                f || (f = "[UNKNOWN]");
                for (var f = f.toUpperCase(), g = !1, h = 0; h < c.length; h++)
                    if (0 === f.indexOf(c[h])) {
                        g = !0;
                        break
                    }
                g ? (Application.warn("Using texture reduction on device: " + f), window.CocoonJS.App.setTextureReduction(128, null, d)) : Application.warn("Model device: " + f);
                "android" === e.os && (c = e.version.split("."), 4 >= parseInt(c[0], 10) && 3 > parseInt(c[1], 10) && (window.config.settings.RENDER_MODE = Application.RENDER_CANVAS))
            }
        }
    } else {
        var k =
            "",
            c = "";
        "undefined" !== typeof document.hidden ? (k = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (k = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (k = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (k = "webkitHidden", c = "webkitvisibilitychange");
        document.addEventListener(c, function() {
            if (Application.instance)
                if (document[k]) Application.instance.onLostFocus();
                else Application.instance.onGotFocus()
        }, !1)
    }
    Application.strings = {};
    Application.strings = window.switStrings;
    Application.strings.STR_EMPTY = "";
    window.switStrings = null;
    window.globalAnimations = {};
    window.switBoot()
}

function switBoot() {
    window.SwitEntryPoint.infoBrowser.isLowDefinition && Application.warn("Detecting low definition device");
    window.SwitEntryPoint.infoBrowser.useAssetsSD && Application.warn("Using SD assets");
    new Application
}
window.onpagehide = function() {
    if (Application.instance) Application.instance.onLostFocus()
};
window.onpageshow = function() {
    if (Application.instance) Application.instance.onGotFocus()
};
window.onblur = function() {
    if (Application.instance) Application.instance.onLostFocus()
};
window.onfocus = function() {
    if (Application.instance) Application.instance.onGotFocus()
};
window.onresize = function(a) {
    Application.instance && (Application.instance.onResize(a.target.innerWidth, a.target.innerHeight), Application.instance.hideAddressBar())
};
window.onorientationchange = function(a) {
    if (Application.instance) Application.instance.onOrientationchange(a)
};
window.onkeydown = function(a) {
    if (Application.instance) Application.instance.onKeyDown(a)
};
window.onkeyup = function(a) {
    if (Application.instance) Application.instance.onKeyUp(a)
};
window.onerror = function(a, b, c, d, e) {
    Application.instance && Application.instance.isMobileDevice && Application.error("Error: " + a + "  File: " + b + "  Line: " + c + "  Column: " + d)
};

function Application() {
    Application.instance = this;
    Application.config = window.config;
    Application.MAX_DELTA_TIME = Application.config.settings.MAX_DELTA_TIME;
    Application.SAFE_AREA_WIDTH = Application.config.settings.SAFE_AREA_WIDTH;
    Application.APP_WIDTH = Application.config.settings.APP_WIDTH;
    Application.APP_HEIGHT = Application.config.settings.APP_HEIGHT;
    Application.APP_FPS = Application.config.settings.APP_FPS;
    Application.SOUND_PERCENT = Application.config.settings.SOUND_PERCENT;
    Application.LOG = Application.config.settings.LOG;
    Application.ASSETS_PATH = Application.config.settings.ASSETS_PATH;
    Application.USE_TILT = Application.config.settings.USE_TILT;
    Application.USE_CHEATS = Application.config.settings.USE_CHEATS;
    Application.CHECK_STRINGS = Application.config.settings.CHECK_STRINGS;
    Application.RENDER_MODE = Application.config.settings.RENDER_MODE;
    Application.CONSOLE_MODE = Application.config.settings.CONSOLE_MODE;
    Application.WIDE_SCREEN = Application.config.settings.WIDE_SCREEN;
    Application.RIGHT_TO_LEFT = Application.config.settings.RIGHT_TO_LEFT;
    Application.SHOW_SOCIAL_BUTTONS = Application.config.settings.SHOW_SOCIAL_BUTTONS;
    Application.USE_ONLY_SOUNDJS = Application.config.settings.USE_ONLY_SOUNDJS;
    Cheats.enabled = Application.USE_CHEATS;
    if (Application.CHECK_STRINGS) {
        var a = [],
            b;
        for (b in Application.config.settings)
            if (-1 !== b.indexOf("SIZE_STRINGS_TYPE_")) {
                var c = Application.config.settings[b].split(","),
                    d = parseInt(c[0], 10),
                    c = parseInt(c[1], 10) / 100;
                a.push([d, c])
            }
        a.sort(Application.orderArray);
        for (var e in Application.strings) {
            b = Application.strings[e];
            var f = b.length,
                d = 0,
                c = "";
            if (!(0 >= f)) {
                for (var g = 0; g < a.length; g++)
                    if (f <= a[g][0]) {
                        d = Math.floor(f * a[g][1]);
                        break
                    }
                0 === d && (d = Math.floor(f * a[a.length - 1][1]));
                for (f = 1; f <= Math.ceil(d / 2); f++) c += "#";
                Application.strings[e] = c + " " + b + " " + c
            }
        }
    }
    this.updateable = !0;
    this.lastHeight = this.lastWidth = 0;
    this.soundManager = null;
    this.effectManager = new SEffectManager;
    this.guiManager = new GuiManager;
    this.tweenManager = new TweenManager;
    for (var h in window.Assets) {
        if (Array.isArray(window.Assets[h])) {
            if (0 < h.indexOf("_rtl"))
                if (Application.RIGHT_TO_LEFT) window.Assets[h.replace("_rtl",
                    "")] = window.Assets[h];
                else continue;
            if (0 < h.indexOf("_ltr"))
                if (Application.RIGHT_TO_LEFT) continue;
                else window.Assets[h.replace("_ltr", "")] = window.Assets[h]
        }
        "string" === typeof h && Application.filesQuality(h)
    }
    this.isMobileDevice = window.SwitEntryPoint.infoBrowser.touchDevice || null !== navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS/i);
    this.isMobileDevice = navigator.isCocoonJS ? !0 : this.isMobileDevice;
    this.isAndroidChrome = "Android" === window.SwitEntryPoint.infoBrowser.platformType && "Chrome" ===
        window.SwitEntryPoint.infoBrowser.browserName;
    this.m_fpsOldTime = this.m_fpsFrameCounter = this.fps = 0;
    this.stage = new window.PIXI.Container;
    a = {
        view: null,
        transparent: !1,
        antialias: !1,
        preserveDrawingBuffer: !0,
        resolution: 1
    };
    window.USE_SANBOX && (Cheats.enabled = !0);
    Application.RENDER_MODE = navigator.isCocoonJS ? Application.RENDER_CANVAS : 0;
    Application.WIDE_SCREEN = !0;
    switch (Application.RENDER_MODE) {
        case 0:
            this.renderer = PIXI.autoDetectRenderer(Application.APP_WIDTH, Application.APP_HEIGHT, a);
            Application.RENDER_MODE =
                this.renderer.type;
            break;
        case Application.RENDER_WEBGL:
            this.renderer = new PIXI.WebGLRenderer(Application.APP_WIDTH, Application.APP_HEIGHT, a);
            break;
        case Application.RENDER_CANVAS:
            this.renderer = new PIXI.CanvasRenderer(Application.APP_WIDTH, Application.APP_HEIGHT, a)
    }
    Application.RENDER_MODE === Application.RENDER_WEBGL ? Application.log("USING WEBGL RENDERER") : Application.log("USING CANVAS RENDERER");
    window.USE_SANBOX ? document.getElementById("contentGame").appendChild(this.renderer.view) : document.body.appendChild(this.renderer.view);
    window.USE_SANBOX_NANO ? (Layout.align = Layout.ALIGN_TOP_LEFT, new window.SandboxNano) : window.USE_SANBOX && (new window.SandboxGui, Application.sandbox = new window.SandboxGame);
    this.renderer.view.setAttribute("id", "MainCanvasDraw");
    this.renderer.view.style.position = "absolute";
    Application.RIGHT_TO_LEFT && this.renderer.view.setAttribute("dir", "rtl");
    this.renderer.plugins.interaction.autoPreventDefault = this.isMobileDevice;
    this.canvas = this.addDisplayContainer();
    this.stage.addChild(this.canvas);
    this.rotateScreen =
        null;
    navigator.isCocoonJS ? (document.body.style.backgroundColor = "black", document.body.style.overflow = "hidden", document.body.style.margin = 0, document.body.style.padding = 0, Application.USE_TILT && (window.DeviceOrientationEvent ? (window.addEventListener("deviceorientation", this.onTilt, !1), Application.log("Device orientation event enabled.")) : Application.warn("Orientation not supported on your device or browser.")), window.CocoonJS && window.CocoonJS.App && (window.CocoonJS.App.onSuspended.addEventListener(Application.onWrapperSuspended),
        window.CocoonJS.App.onSuspending.addEventListener(Application.onWrapperSuspending), window.CocoonJS.App.onActivated.addEventListener(Application.onWrapperActivated)), window.addEventListener("offline", Application.onOffline, !1)) : (this.canvasRotateScreen = this.addDisplayContainer(), this.stage.addChild(this.canvasRotateScreen), this.rotateScreen = new RotateScreen(this.canvasRotateScreen), this.onOrientationchange(null));
    (a = document.getElementById("fontssamples")) && a.parentElement && a.parentElement.removeChild(a);
    Application.WIDE_SCREEN || (this.canvasEvents = document.createElement("canvas"), this.canvasEvents.width = window.innerWidth, this.canvasEvents.height = window.innerHeight, this.canvasEvents.style.top = "0px", this.canvasEvents.style.left = "0px", document.body.appendChild(this.canvasEvents), this.canvasEvents.setAttribute("id", "MainCanvasEvents"), this.renderer.plugins.interaction.supportsPointerEvents && (this.canvasEvents.addEventListener("pointerdown", this.renderer.plugins.interaction.onPointerDown, !0), this.canvasEvents.addEventListener("pointerout",
            this.renderer.plugins.interaction.onPointerOut, !0), this.canvasEvents.addEventListener("pointerover", this.renderer.plugins.interaction.onPointerOver, !0)), this.renderer.plugins.interaction.supportsTouchEvents && (this.canvasEvents.addEventListener("touchstart", this.renderer.plugins.interaction.onTouchStart, !0), this.canvasEvents.addEventListener("touchend", this.renderer.plugins.interaction.onTouchEnd, !0), this.canvasEvents.addEventListener("touchmove", this.renderer.plugins.interaction.onTouchMove, !0)),
        this.canvasEvents.addEventListener("mousedown", this.renderer.plugins.interaction.onMouseDown, !0), this.canvasEvents.addEventListener("mouseout", this.renderer.plugins.interaction.onMouseOut, !0), this.canvasEvents.addEventListener("mouseover", this.renderer.plugins.interaction.onMouseOver, !0));
    this.socialShareObject = null;
    Application.SHOW_SOCIAL_BUTTONS && window.gameObj && (this.socialShareObject = window.gameObj);
    this.activeAgePopUp = !1;
    this.m_timeElapse = this.m_oldTime = 0;
    Application.instance.update();
    this.guiManager.gotoScreen(GuiManager.SC_PRELOAD);
    window.SwitEntryPoint.infoBrowser.isLowDefinition && (Application.isLowDevice = !0);
    Application.RENDER_MODE === Application.RENDER_CANVAS && (Application.isLowDevice = !0);
    navigator.isCocoonJS && Application.RENDER_MODE == Application.RENDER_WEBGL && (a = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI || 1, this.renderer.resolution = a, this.renderer.rootRenderTarget.resolution = a, this.renderer.plugins.interaction.resolution = 1);
    this.registerEmptySprite();
    this.registerErrorSprite();
    PoolClips.initialize()
}
Application.MAX_DELTA_TIME = 0;
Application.SAFE_AREA_WIDTH = 0;
Application.APP_WIDTH = 0;
Application.APP_HEIGHT = 0;
Application.APP_FPS = 0;
Application.SOUND_PERCENT = 0;
Application.LOG = !1;
Application.ASSETS_PATH = "";
Application.USE_TILT = !1;
Application.USE_CHEATS = !1;
Application.CHECK_STRINGS = !1;
Application.RIGHT_TO_LEFT = !1;
Application.RENDER_WEBGL = 1;
Application.RENDER_CANVAS = 2;
Application.RENDER_MODE = Application.RENDER_CANVAS;
Application.DPI = 1;
Application.SHOW_SOCIAL_BUTTONS = !1;
Application.KEY_EMPTY_SPRITE = "__emptySprite";
Application.KEY_ERROR_SPRITE = "__errorSprite";
Application.jsonFiles = {};
Application.instance = null;
Application.strings = null;
Application.config = null;
Application.sandbox = null;
Application.isLowDevice = !1;
Application.subclass = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
Application.orderArray = function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
};
Application.onOffline = function() {};
Application.onWrapperSuspended = function() {
    Application.log("onWrapperSuspended");
    Application.instance.onLostFocus()
};
Application.onWrapperSuspending = function() {
    Application.log("onWrapperSuspending");
    Application.instance.onLostFocus()
};
Application.onWrapperActivated = function() {
    Application.log("onWrapperActivated");
    Application.instance.onGotFocus()
};
Application.prototype.onTilt = function(a) {
    if (Application.instance.guiManager) Application.instance.guiManager.onTilt(a)
};
Application.prototype.onKeyDown = function(a) {
    if (this.guiManager) this.guiManager.onKeyDown(a.keyCode)
};
Application.prototype.onKeyUp = function(a) {
    if (this.guiManager) this.guiManager.onKeyUp(a.keyCode)
};
Application.prototype.onLoadingError = function(a) {
    Application.error("onLoadingError: " + a)
};
Application.prototype.onSoundsLoaded = function() {
    Application.info("onSoundsLoaded");
    SndManager.instance.callbackBug && Application.instance.guiManager.gotoScreen(GuiManager.SC_MAIN_MENU)
};
Application.prototype.onErrorSndManagerIE = function() {
    Application.info("onErrorSndManagerIE");
    Application.instance.soundManager = new SndManagerWeb(Application.config.sounds, Application.instance.onSoundsLoaded)
};
Application.prototype.onLoaderReady = function() {
    Application.info("onLoaderReady");
    window.USE_SANBOX_NANO ? Application.instance.guiManager.gotoScreen(GuiManager.SC_SANBOX_NANO_VIEW) : (Application.instance.onResize(window.innerWidth, window.innerHeight), navigator.isCocoonJS ? (Application.instance.soundManager = new SndManagerSimple, Application.instance.guiManager.gotoScreen(GuiManager.SC_MAIN_MENU)) : (Application.instance.guiManager.gotoScreen(GuiManager.SC_SOUND_LOADER), Application.instance.soundManager = window.SwitEntryPoint.infoBrowser.isIE &&
        !Application.USE_ONLY_SOUNDJS ? new SndManagerIE(Application.config.sounds, Application.instance.onSoundsLoaded) : new SndManagerWeb(Application.config.sounds, Application.instance.onSoundsLoaded)))
};
Application.prototype.onResize = function(a, b) {
    this.lastWidth = a;
    this.lastHeight = b;
    Layout.onResize(a, b);
    if (this.rotateScreen) this.rotateScreen.onResize();
    this.onOrientationchange(null)
};
Application.prototype.onOrientationchange = function(a) {
    if (Application.instance.isMobileDevice && !Application.instance.isAndroidChrome && !navigator.isCocoonJS)
        if (window.innerHeight > window.innerWidth) Application.instance.socialShareObject && (Application.instance.activeAgePopUp = "block" == window.$("#endgameHUD").css("display"), Application.instance.socialShareObject.badRotation()), this.rotateScreen && this.rotateScreen.show(), this.onLostFocus();
        else {
            if (Application.instance.socialShareObject) {
                Application.instance.socialShareObject.goodRotation();
                try {
                    Application.instance.activeAgePopUp ? window.$("#endgameHUD").css("display", "block") : window.$("#endgameHUD").css("display", "none")
                } catch (b) {}
            }
            this.rotateScreen && this.rotateScreen.hide();
            this.onGotFocus()
        }
};
Application.prototype.onLostFocus = function() {
    this.updateable = !1;
    try {
        Application.info("-- ON LOST FOCUS --"), this.soundManager && !this.soundManager.isMuted() && this.soundManager.pauseAll()
    } catch (a) {
        Application.error("onLostFocus: " + a)
    }
};
Application.prototype.onGotFocus = function() {
    this.updateable = !0;
    try {
        Application.info("-- ON GOT FOCUS --"), this.soundManager && !this.soundManager.isMuted() && this.soundManager.resumeAll()
    } catch (a) {
        Application.error("onGotFocus: " + a)
    }
};
Application.prototype.update = function() {
    window.requestAnimationFrame(Application.instance.update);
    var a = Application.instance,
        b = Date.now();
    a.m_timeElapse += b - a.m_oldTime;
    a.m_oldTime = b;
    a.updateable ? ((!GameBonus.instance || null === GameBonus.instance.tutorialPopup && 0 >= GameBonus.instance.m_pauseTimer) && a.effectManager.update(a.m_timeElapse), a.guiManager.update(a.m_timeElapse), a.tweenManager.update()) : a.rotateScreen && a.rotateScreen.animate && a.tweenManager.update();
    a.m_timeElapse = 0;
    a.m_fpsFrameCounter++;
    1E3 <=
        b - a.m_fpsOldTime && (a.fps = (a.m_fpsFrameCounter / (b - a.m_fpsOldTime) * 1E3).toFixed(0), a.m_fpsOldTime = b, a.m_fpsFrameCounter = 0);
    a.renderer.render(a.stage);
    Application.WIDE_SCREEN ? Application.RENDER_MODE === Application.RENDER_CANVAS && a.getContext().setTransform(1, 0, 0, 1, 0, 0) : Application.RENDER_MODE === Application.RENDER_CANVAS && a.getContext().setTransform(Global.baseScale, 0, 0, Global.baseScale, Global.offsetZoomX, Global.offsetZoomY);
    a.guiManager.onDebugDraw(a.getContext());
    if (window.innerWidth !== a.lastWidth ||
        window.innerHeight !== a.lastHeight) a.onResize(window.innerWidth, window.innerHeight), a.hideAddressBar()
};
Application.prototype.hideAddressBar = function() {
    Application.instance.isMobileDevice && !navigator.isCocoonJS && (setTimeout(function() {
        window.scrollTo(0, 1)
    }, 20), setTimeout(function() {
        window.scrollTo(0, 0)
    }, 50))
};
Application.prototype.getCanvas = function() {
    return this.renderer.view
};
Application.prototype.getContext = function() {
    return Application.RENDER_MODE === Application.RENDER_CANVAS ? this.renderer.context : this.renderer.gl
};
Application.prototype.captureScreen = function() {
    return Application.instance.getCanvas().toDataURL()
};
Application.prototype.addDisplayContainer = function() {
    return new SDisplayObjectContainer
};
Application.prototype.getClip = function(a) {
    if (window.PIXI.utils.TextureCache[a]) return new SSprite(a);
    if (window.globalAnimations[a]) return new Animation(a);
    Application.warn("getClip :: clip or sprite with name [" + a + "] no found");
    return new SSprite(Application.KEY_ERROR_SPRITE)
};
Application.prototype.getLocalizedImage = function(a) {
    if (window.SwitEntryPoint.debug) {
        var b = window.LocalizedAssets.images;
        if (b) {
            for (var c = window.LocalizedAssets.images, d = 0; d < b.length; d++)
                if (c[d] === window.LocalizedAssets.PATH + a) return PIXI.Sprite.fromImage(window.LocalizedAssets.PATH + a, !1, window.PIXI.settings.SCALE_MODE);
            return null
        }
        Application.fatal("Unregistered localized image: " + a)
    }
    return PIXI.Sprite.fromImage(window.LocalizedAssets.PATH + a, !1, window.PIXI.settings.SCALE_MODE)
};
Application.filesQuality = function(a) {
    if (window.SwitEntryPoint.infoBrowser.useAssetsSD)
        for (var b = 0; b < window.Assets[a].length; b++) window.Assets.FILES_SD[window.Assets[a][b]] && (Application.DPI = 2, window.Assets[a][b] = window.Assets.FILES_SD[window.Assets[a][b]], Application.log("FILES SD :: " + window.Assets[a][b]))
};
Application.prototype.playSound = function(a) {
    this.soundManager && this.soundManager.play(a)
};
Application.prototype.stopSound = function(a) {
    this.soundManager.stop(a)
};
Application.prototype.stopAllSounds = function() {
    this.isSoundOn() && this.soundManager.stopAllSounds()
};
Application.prototype.stopAllMusics = function() {
    this.soundManager.stopAllMusics()
};
Application.prototype.toggleMute = function() {
    this.soundManager.toggleMute()
};
Application.prototype.isPlayingSound = function(a) {
    return this.soundManager.isPlayingSound(a)
};
Application.prototype.setVolumeById = function(a, b) {
    this.soundManager.setVolumeById(a, b)
};
Application.prototype.isSoundOn = function() {
    return !this.soundManager.isMuted()
};
Application.prototype.resumeSound = function(a) {
    this.soundManager.resumeSound(a)
};
Application.prototype.pauseAllSounds = function() {
    this.soundManager.pauseAll()
};
Application.prototype.resumeAllSounds = function() {
    this.soundManager.resumeAll()
};
Application.log = function(a) {
    Application.LOG && (window.console && window.console.log && window.console.log("[LOG] " + a), window.Debug && window.Debug.writeln("[LOG] " + a))
};
Application.info = function(a) {
    window.console && window.console.info && window.console.info("[INFO] " + a);
    window.Debug && window.Debug.writeln("[INFO] " + a)
};
Application.warn = function(a) {
    window.console && window.console.warn && window.console.warn("[WARN] " + a);
    window.Debug && window.Debug.writeln("[WARN] " + a)
};
Application.error = function(a) {
    window.console && window.console.error && window.console.error("[ERROR] " + a);
    window.Debug && window.Debug.writeln("[ERROR] " + a)
};
Application.errorIf = function(a, b) {
    a || Application.error(b)
};
Application.fatal = function(a) {
    Application.error("[FATAL] " + a);
    throw Error(a);
};
Application.assert = function(a, b) {
    a || Application.fatal(b)
};
Application.prototype.addEmptySprite = function() {
    return this.getClip(Application.KEY_EMPTY_SPRITE)
};
Application.prototype.registerEmptySprite = function() {
    var a = new Image;
    a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==";
    window.PIXI.utils.TextureCache[Application.KEY_EMPTY_SPRITE] = new window.PIXI.Texture(new window.PIXI.BaseTexture(a))
};
Application.prototype.registerErrorSprite = function() {
    var a = new Image;
    a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAmBJREFUeNq8l01rE1EUhp9pahOrC6NN27gR9NephdaiIiLoQhA/QEEXbqQbcaGIWLWtBXGhuNPf4MbfYJuv10XPpGdubqaTZOKFkFnM3Pc57znnfiQCUf4oMmcCMMt0RlL0xUEAKWHaI0l6fUiBBD1B2z1/EjRkXpb0mxfcdjoS6BBAQvDXQbwXnClJvCq4L+g48V4M4GIAsSlYnFC8ZuLdvviBVisGMCtYEew5iA+ChQlsfxBE/sW02jGAFOJy4MQ4EDXB40zk8E3QPAoAwTGD2BuzME8KHgWR7wjOCshLQQixMkZN1ATPgsh3M/AFHPDpCGviY053nBA8deJx50YAQDA3xIlGxPbngfgbwamBOQ+0OkUBUohLAYSPbF6wkfa2/b8T1KPzjeiAr4lVwX6QjvOCF4H4y2jkWYBMEXYLAPh0+Jr4E4i/yhUf4kBRgBRizTnhl9YNqwWmCYC14s8A4LfgQqHvJ0gBZu9bZ7t3YEewVBCgMw5AXfDaiXdteQ3XicY0UlC3yb34E3NkLYDYFjTLBFiIiD8UHHctej1o0eF7x4gAp22yNNcdwT1bdsNDx2pkA1uapAgbgq+B+F2LeFiLXgmc2BUsjwOwKPjsxNuCO872vOPXeqQwm6OkoCn4HkR+Kyfy2JZ8NeJEswjAsrWWj/ymRTbKYjVn37UcxJagkQdwTvDDibcskuoEB9JrAy2aA/AriHxdUCnhSJ51IqcIU/F9E6+WeC+4ETjREyjR4XvJf7ya9S+vyRG34y4wY3AC0jvdjD337H7ZASruvSQTVHa+SoZlStfzwuPfALFp6xuFf+IJAAAAAElFTkSuQmCC";
    window.PIXI.utils.TextureCache[Application.KEY_ERROR_SPRITE] =
        new window.PIXI.Texture(new window.PIXI.BaseTexture(a))
};
Application.externalTrack = function(a, b) {
    var c = {
        action: a
    };
    "undefined" !== typeof b ? (c.message = b, Application.warn("TRACK: [" + a + "] (" + b + ")")) : Application.warn("TRACK: [" + a + "]");
    if (window.DIBIGameTracking) try {
        window.DIBIGameTracking(c)
    } catch (d) {
        Application.error("DIBIGameTracking: " + d)
    }
};

function DebugGame() {
    DebugGame.instance = this
}
DebugGame.instance = null;
DebugGame.prototype.free = function() {
    DebugGame.instance = null
};
DebugGame.prototype.onDebugInit = function() {};
DebugGame.prototype.onDebugCreateObject = function(a, b, c) {};
DebugGame.prototype.onDebugRemoveObject = function(a) {};
DebugGame.prototype.onDebugKeyDown = function(a) {};
DebugGame.prototype.onDebugKeyUp = function(a) {};
DebugGame.prototype.onDebugPointerPress = function(a) {
    if (Application.sandbox.addObjectEnable && Application.sandbox.objectToCreate) {
        var b = "[SANDBOX] [ADD OBJECT] ",
            c;
        for (c in Application.sandbox.objectToCreate) b += c + ":" + Application.sandbox.objectToCreate[c] + ", ";
        Application.log(b.substring(0, b.length - 2));
        this.onDebugCreateObject(a.data.global.x, a.data.global.y, Application.sandbox.objectToCreate)
    }
};
DebugGame.prototype.onDebugUpdate = function(a) {};
DebugGame.prototype.onDebugPointerRelease = function(a) {};
DebugGame.prototype.onDebugPointerPressAndRelease = function(a) {};
DebugGame.prototype.onDebugPointerOver = function(a) {};
DebugGame.prototype.onDebugPointerMove = function(a) {};
DebugGame.prototype.onDebugGetSandboxConfig = function() {
    return []
};
DebugGame.prototype.onDebugSandboxLoadConfig = function() {};

function DebugObject() {
    this.onDebugInit()
}
DebugObject.prototype.free = function() {};
DebugObject.prototype.onDebugInit = function() {};
DebugObject.prototype.onDebugDelete = function() {};
DebugObject.prototype.onDebugUpdate = function(a) {
    (a = Application.sandbox) && a.objectSelected && a.objectViewPropertiesRealTime && a.objectSelected === this && a.setObjectViewProperties(this)
};
DebugObject.prototype.onDebugPointerPress = function(a) {};
DebugObject.prototype.onDebugChangeProperties = function(a) {
    Application.info("SANDBOX OBJECT PROPERTY :: Change [" + a.property + "] by [" + a.value + "]")
};
DebugObject.prototype.onDebugSelectObject = function() {
    Application.sandbox && Application.sandbox.setObjectViewProperties(this)
};
DebugObject.prototype.onDebugGetProperties = function() {
    return []
};

function Circle(a, b, c) {
    this.x = "undefined" === typeof a ? 0 : a;
    this.y = "undefined" === typeof b ? 0 : b;
    this.r = "undefined" === typeof c ? 0 : c
}
Circle.prototype.hitTest = function(a, b) {
    return 0 === this.r ? !1 : (this.x - a) * (this.x - a) + (this.y - b) * (this.y - b) <= this.r * this.r
};
Circle.prototype.isEmpty = function() {
    return 0 === this.r
};
Circle.prototype.toString = function() {
    return "circle x:" + this.x + " y:" + this.y + " r:" + this.r
};

function Path(a) {
    this.m_sections = [];
    this.m_length = 0;
    for (var b = a.point.length(), c = 0; c < b; ++c) {
        for (var d = a.point[c].n, e = [], f = 0; f < d; ++f) e.push(new Vector2D(parseFloat(a.point[c]["x" + f]), parseFloat(a.point[c]["y" + f])));
        e.push(new Vector2D(parseFloat(a.point[(c + 1) % b].x0), parseFloat(a.point[(c + 1) % b].y0)));
        d = new PathSection(e, this.m_length);
        this.m_length += d.length();
        this.m_sections.push(d)
    }
}
Path.prototype.free = function() {
    this.m_sections = null
};
Path.prototype.update = function(a, b) {
    this.m_sections[b.pathPosition.section].update(a, b);
    b.pathPosition.point ? b.setPosition(b.pathPosition.point.x, b.pathPosition.point.y) : (b.pathPosition.section < this.m_sections.length - 1 ? b.pathPosition.section += 1 : (b.pathPosition.section = 0, b.pathPosition.distance = 0), this.m_sections[b.pathPosition.section].update(a, b), b.pathPosition.point ? b.setPosition(b.pathPosition.point.x, b.pathPosition.point.y) : Application.info("ERROR"))
};
Path.prototype.toString = function() {
    for (var a = "Path:", b = this.m_sections.length, c = 0; c < b; ++c) a += "\n" + this.m_sections[c];
    return a
};

function PathSection(a, b) {
    this.m_order = a.length - 1;
    this.m_points = a;
    this.m_initLength = b;
    this.m_length = 0;
    this.m_oldPos = null;
    switch (this.m_order) {
        case PathSection.CONIC:
        case PathSection.CUBIC:
        case PathSection.LINE:
            this.m_dir = new Vector2D(this.m_points[this.m_order].x - this.m_points[0].x, this.m_points[this.m_order].y - this.m_points[0].y);
            this.m_length = this.m_dir.length();
            this.m_angle = this.m_dir.angle();
            this.m_dir.normalize();
            break;
        default:
            Application.error("Invalid path section order: " + this.m_order)
    }
}
PathSection.LINE = 1;
PathSection.CONIC = 2;
PathSection.CUBIC = 3;
PathSection.SECTIONS = 3;
PathSection.prototype.free = function() {
    this.m_points = null
};
PathSection.prototype.length = function() {
    return this.m_length
};
PathSection.prototype.update = function(a, b) {
    var c = b.pathPosition.distance + a,
        d;
    if (c <= this.m_initLength + this.m_length) {
        switch (this.m_order) {
            case PathSection.LINE:
                b.pathPosition.point = this.m_dir.clone();
                b.pathPosition.point.scale(c - this.m_initLength);
                b.pathPosition.point.add(this.m_points[0]);
                b.pathPosition.tangent = this.m_angle;
                break;
            case PathSection.CONIC:
                b.pathPosition.point = new Vector2D;
                d = (c - this.m_initLength) / this.m_length;
                b.pathPosition.point.x = (1 - d) * (1 - d) * this.m_points[0].x + 2 * (1 - d) * d * this.m_points[1].x +
                    d * d * this.m_points[2].x;
                b.pathPosition.point.y = (1 - d) * (1 - d) * this.m_points[0].y + 2 * (1 - d) * d * this.m_points[1].y + d * d * this.m_points[2].y;
                this.m_oldPos && (this.m_oldPos.subtract(b.pathPosition.point), this.m_oldPos.scale(-1), b.pathPosition.tangent = this.m_oldPos.angle());
                this.m_oldPos = b.pathPosition.point;
                break;
            case PathSection.CUBIC:
                b.pathPosition.point = new Vector2D;
                d = (c - this.m_initLength) / this.m_length;
                b.pathPosition.point.x = (1 - d) * (1 - d) * (1 - d) * this.m_points[0].x + 3 * (1 - d) * (1 - d) * d * this.m_points[1].x + 3 * (1 - d) * d *
                    d * this.m_points[2].x + d * d * d * this.m_points[3].x;
                b.pathPosition.point.y = (1 - d) * (1 - d) * (1 - d) * this.m_points[0].y + 3 * (1 - d) * (1 - d) * d * this.m_points[1].y + 3 * (1 - d) * d * d * this.m_points[2].y + d * d * d * this.m_points[3].y;
                this.m_oldPos && (this.m_oldPos.subtract(b.pathPosition.point), this.m_oldPos.scale(-1), b.pathPosition.tangent = this.m_oldPos.angle());
                this.m_oldPos = b.pathPosition.point;
                break;
            default:
                Application.error("Invalid path section order: " + this.m_order)
        }
        b.pathPosition.distance = c
    } else this.m_oldPos = b.pathPosition.point =
        null
};
PathSection.prototype.toString = function() {
    for (var a = "section:", b = 0; b < this.m_points.length; ++b) a += this.m_points[b] + " ";
    return a
};

function SMath() {}
SMath.degrees = function(a, b) {
    return Math.atan2(a, b) * SMath.RAD_TO_DEG
};
SMath.toRadians = function(a) {
    return a * SMath.DEG_TO_RAD
};
SMath.toDegrees = function(a) {
    return a * SMath.RAD_TO_DEG
};
SMath.setRange = function(a, b, c) {
    return a > c ? c : a < b ? b : a
};
SMath.abs = function(a) {
    return 0 > a ? -a : a
};
SMath.sign = function(a) {
    return 0 < a ? 1 : 0 === a ? 0 : -1
};
SMath.fastSin = function(a) {
    a %= 6.28318531; - 3.14159265 > a ? a += 6.28318531 : 3.14159265 < a && (a -= 6.28318531);
    return 0 > a ? 1.27323954 * a + .405284735 * a * a : 1.27323954 * a - .405284735 * a * a
};
SMath.fastCos = function(a) {
    a = a % 6.28318531 + 1.57079632; - 3.14159265 > a ? a += 6.28318531 : 3.14159265 < a && (a -= 6.28318531);
    return 0 > a ? 1.27323954 * a + .405284735 * a * a : 1.27323954 * a - .405284735 * a * a
};
SMath.polygonArea = function(a) {
    var b = 0,
        c = 0;
    if (3 > a.length) return 0;
    for (var d = 0; d < a.length; d++) {
        if (d !== a.length - 1) var e = a[d],
            f = a[d + 1];
        else e = a[d], f = a[0];
        b += e.x * f.y;
        c += e.y * f.x
    }
    return SMath.abs(.5 * (b - c))
};
SMath.polyContainsPoint = function(a, b, c) {
    if (!b || 3 > b.length) return !1;
    for (var d = SMath.polygonArea(b), e = 0, f = 0; f < b.length; f++) e += SMath.polygonArea([b[f], f !== b.length - 1 ? b[f + 1] : b[0], a]);
    if (d === e || 1 >= SMath.abs(d - e)) {
        if (!c)
            for (f = 0; f < b.length; f++)
                if (SMath.lineContainsPoint(a, f !== b.length - 1 ? [b[f], b[f + 1]] : [b[f], b[0]])) return !1;
        return !0
    }
    return !1
};
SMath.lineContainsPoint = function(a, b) {
    if (!b || 2 > b.length) return !1;
    var c = (a.x - b[0].x) / (b[1].x - b[0].x),
        d = (a.y - b[0].y) / (b[1].y - b[0].y);
    return 0 <= c && 1 >= c && 0 <= d && 1 >= d
};
SMath.rectContainsRect = function(a, b) {
    return b[2].x <= a[2].x && b[0].x >= a[0].x && b[2].y <= a[2].y && b[0].y >= a[0].y
};
SMath.lineIntersectLine = function(a, b) {
    var c, d, e, f;
    c = (b[1].y - b[0].y) * (a[1].x - a[0].x) - (b[1].x - b[0].x) * (a[1].y - a[0].y);
    if (0 == c) return !1;
    d = a[0].y - b[0].y;
    e = a[0].x - b[0].x;
    f = (b[1].x - b[0].x) * d - (b[1].y - b[0].y) * e;
    e = (a[1].x - a[0].x) * d - (a[1].y - a[0].y) * e;
    d = f / c;
    e /= c;
    return 0 < d && 1 > d && 0 < e && 1 > e
};
SMath.polyContainsLine = function(a, b) {
    for (var c = 0; c < b.length; c++)
        if (SMath.lineIntersectLine(c !== b.length - 1 ? [b[c], b[c + 1]] : [b[c], b[0]], a)) return !0;
    return !1
};
SMath.lerp = function(a, b, c, d) {
    return d / 1E3 * c * (b - a)
};
SMath.clamp = function(a, b, c) {
    return Math.min(Math.max(a, b), c)
};
SMath.RAD_TO_DEG = 57.2957795;
SMath.DEG_TO_RAD = .0174533;
SMath._180_over_PI = 57.2957795;

function ScrollHandler() {
    this.tweenScroll = null;
    this.maxIndex = this.index = 0;
    this.duration = 2E3;
    this.displaceY = this.displaceX = this.y = this.x = 0;
    this.m_onStartCaller = this.m_onStart = this.m_onCompleteCaller = this.m_onComplete = this.m_onUpdateCaller = this.m_onUpdate = null
}
ScrollHandler.prototype["goto"] = function(a) {
    this.tweenScroll = (new Tween(this)).to({
        x: this.displaceX * a,
        y: this.displaceY * a
    }, this.duration).easing(TweenEasing.BackOut).onUpdate(this.tweenUpdate).onComplete(this.tweenComplete);
    this.tweenScroll.start();
    this.index = a;
    this.m_onStart && this.m_onStart.call(this.m_onStartCaller, this)
};
ScrollHandler.prototype.setIndex = function(a) {
    this.index = a;
    this.x = this.index * this.displaceX;
    this.y = this.index * this.displaceY
};
ScrollHandler.prototype.addStartListener = function(a, b) {
    this.m_onStart = b;
    this.m_onStartCaller = a
};
ScrollHandler.prototype.addUpdateListener = function(a, b) {
    this.m_onUpdate = b;
    this.m_onUpdateCaller = a
};
ScrollHandler.prototype.addCompleteListener = function(a, b) {
    this.m_onComplete = b;
    this.m_onCompleteCaller = a
};
ScrollHandler.prototype.cancel = function() {
    this.tweenScroll && (TweenManager.instance.remove(this.tweenScroll), this.tweenScroll = null)
};
ScrollHandler.prototype.next = function() {
    this.tweenScroll || this.index >= this.maxIndex || this["goto"](this.index + 1)
};
ScrollHandler.prototype.lastNext = function() {
    this.tweenScroll || this["goto"](this.maxIndex)
};
ScrollHandler.prototype.lastBack = function() {
    this.tweenScroll || this["goto"](0)
};
ScrollHandler.prototype.back = function() {
    this.tweenScroll || 0 >= this.index || this["goto"](this.index - 1)
};
ScrollHandler.prototype.tweenUpdate = function(a) {
    this.m_onUpdate && this.m_onUpdate.call(this.m_onUpdateCaller, this)
};
ScrollHandler.prototype.tweenComplete = function(a) {
    this.m_onComplete && this.m_onComplete.call(this.m_onCompleteCaller, this);
    this.tweenScroll = null
};

function SRandom(a) {
    "undefined" !== typeof a && (this.m_seed = a);
    0 >= this.m_seed && this.srand();
    this.m_initSeed = this.m_seed;
    Application.info("SEED: " + this.m_seed);
    this.random()
}
SRandom.prototype.reset = function() {
    this.m_seed = this.m_initSeed;
    this.random()
};
SRandom.prototype.random = function() {
    this.m_seed = 16807 * this.m_seed % 2147483647;
    return this.m_seed / 2147483647
};
SRandom.prototype.srand = function() {
    this.m_seed = 1 + Math.floor(2147483646 * Math.random())
};
SRandom.prototype.randomInt = function(a, b) {
    return a + Math.floor(this.random() * (b - a + 1))
};
SRandom.prototype.getArrayIndex = function(a, b) {
    "undefined" === typeof b && (b = -1);
    if (1 < a) {
        var c = this.randomInt(0, a - 1);
        c == b && (c = (c + 1) % a);
        return c
    }
    return 1 > a ? -1 : 0
};
SRandom.prototype.shuffleArray = function(a) {
    for (var b = a.length - 1; 0 < b;) {
        var c = Math.floor(this.random() * (b + 1)),
            d = a[b];
        a[b] = a[c];
        a[c] = d;
        --b
    }
};

function TweenManager() {
    this._tweens = [];
    TweenManager.instance = this
}
TweenManager.prototype.getAll = function() {
    return this._tweens
};
TweenManager.prototype.removeAll = function() {
    this._tweens = []
};
TweenManager.prototype.add = function(a) {
    this._tweens.push(a)
};
TweenManager.prototype.remove = function(a) {
    a = this._tweens.indexOf(a); - 1 !== a && this._tweens.splice(a, 1)
};
TweenManager.prototype.update = function(a) {
    if (0 === this._tweens.length) return !1;
    var b = 0,
        c = this._tweens.length;
    for (a = void 0 !== a ? a : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); b < c;) this._tweens[b] && this._tweens[b].update(a) ? b++ : (this._tweens[b].free(), this._tweens.splice(b, 1), c--);
    return !0
};

function TweenEasing() {}
TweenEasing.LinearNone = function(a) {
    return a
};
TweenEasing.QuadraticIn = function(a) {
    return a * a
};
TweenEasing.QuadraticOut = function(a) {
    return a * (2 - a)
};
TweenEasing.QuadraticInOut = function(a) {
    return 1 > (a *= 2) ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
};
TweenEasing.CubicIn = function(a) {
    return a * a * a
};
TweenEasing.CubicOut = function(a) {
    return --a * a * a + 1
};
TweenEasing.CubicInOut = function(a) {
    return 1 > (a *= 2) ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
};
TweenEasing.QuarticIn = function(a) {
    return a * a * a * a
};
TweenEasing.QuarticOut = function(a) {
    return 1 - --a * a * a * a
};
TweenEasing.QuarticInOut = function(a) {
    return 1 > (a *= 2) ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
};
TweenEasing.QuinticIn = function(a) {
    return a * a * a * a * a
};
TweenEasing.QuinticOut = function(a) {
    return --a * a * a * a * a + 1
};
TweenEasing.QuinticInOut = function(a) {
    return 1 > (a *= 2) ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
};
TweenEasing.SinusoidalIn = function(a) {
    return 1 - Math.cos(a * Math.PI / 2)
};
TweenEasing.SinusoidalOut = function(a) {
    return Math.sin(a * Math.PI / 2)
};
TweenEasing.SinusoidalInOut = function(a) {
    return .5 * (1 - Math.cos(Math.PI * a))
};
TweenEasing.ExponentialIn = function(a) {
    return 0 === a ? 0 : Math.pow(1024, a - 1)
};
TweenEasing.ExponentialOut = function(a) {
    return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
};
TweenEasing.ExponentialInOut = function(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? .5 * Math.pow(1024, a - 1) : .5 * (-Math.pow(2, -10 * (a - 1)) + 2)
};
TweenEasing.CircularIn = function(a) {
    return 1 - Math.sqrt(1 - a * a)
};
TweenEasing.CircularOut = function(a) {
    return Math.sqrt(1 - --a * a)
};
TweenEasing.CircularInOut = function(a) {
    return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
};
TweenEasing.ElasticIn = function(a) {
    var b, c = .1;
    if (0 === a) return 0;
    if (1 === a) return 1;
    !c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI);
    return -(c * Math.pow(2, 10 * --a) * Math.sin(2 * (a - b) * Math.PI / .4))
};
TweenEasing.ElasticOut = function(a) {
    var b, c = .1;
    if (0 === a) return 0;
    if (1 === a) return 1;
    !c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI);
    return c * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / .4) + 1
};
TweenEasing.ElasticInOut = function(a) {
    var b, c = .1;
    if (0 === a) return 0;
    if (1 === a) return 1;
    !c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI);
    return 1 > (a *= 2) ? -.5 * c * Math.pow(2, 10 * --a) * Math.sin(2 * (a - b) * Math.PI / .4) : c * Math.pow(2, -10 * --a) * Math.sin(2 * (a - b) * Math.PI / .4) * .5 + 1
};
TweenEasing.BackIn = function(a) {
    return a * a * (2.70158 * a - 1.70158)
};
TweenEasing.BackOut = function(a) {
    return --a * a * (2.70158 * a + 1.70158) + 1
};
TweenEasing.BackInOut = function(a) {
    return 1 > (a *= 2) ? .5 * a * a * (3.5949095 * a - 2.5949095) : .5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
};
TweenEasing.BounceIn = function(a) {
    return 1 - TweenEasing.BounceOut(1 - a)
};
TweenEasing.BounceOut = function(a) {
    return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
};
TweenEasing.BounceInOut = function(a) {
    return .5 > a ? .5 * TweenEasing.BounceIn(2 * a) : .5 * TweenEasing.BounceOut(2 * a - 1) + .5
};

function TweenInterpolation() {}
TweenInterpolation.Linear = function(a, b) {
    var c = a.length - 1,
        d = c * b,
        e = Math.floor(d),
        f = TweenInterpolation.UtilsLinear;
    return 0 > b ? f(a[0], a[1], d) : 1 < b ? f(a[c], a[c - 1], c - d) : f(a[e], a[e + 1 > c ? c : e + 1], d - e)
};
TweenInterpolation.Bezier = function(a, b) {
    var c = 0,
        d = a.length - 1,
        e = Math.pow,
        f = TweenInterpolation.UtilsBernstein,
        g;
    for (g = 0; g <= d; g++) c += e(1 - b, d - g) * e(b, g) * a[g] * f(d, g);
    return c
};
TweenInterpolation.CatmullRom = function(a, b) {
    var c = a.length - 1,
        d = c * b,
        e = Math.floor(d),
        f = TweenInterpolation.UtilsCatmullRom;
    return a[0] === a[c] ? (0 > b && (e = Math.floor(d = c * (1 + b))), f(a[(e - 1 + c) % c], a[e], a[(e + 1) % c], a[(e + 2) % c], d - e)) : 0 > b ? a[0] - (f(a[0], a[0], a[1], a[1], -d) - a[0]) : 1 < b ? a[c] - (f(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c]) : f(a[e ? e - 1 : 0], a[e], a[c < e + 1 ? c : e + 1], a[c < e + 2 ? c : e + 2], d - e)
};
TweenInterpolation.UtilsLinear = function(a, b, c) {
    return (b - a) * c + a
};
TweenInterpolation.UtilsBernstein = function(a, b) {
    var c = TweenInterpolation.UtilsFactorial;
    return c(a) / c(b) / c(a - b)
};
TweenInterpolation.UtilsFactorial = function(a) {
    for (var b = 1, c = 1; c <= a; c++) b *= c;
    return b
};
TweenInterpolation.UtilsCatmullRom = function(a, b, c, d, e) {
    a = .5 * (c - a);
    d = .5 * (d - b);
    var f = e * e;
    return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
};

function Tween(a) {
    this._object = this.target = a;
    this._valuesStart = {};
    this._valuesEnd = {};
    this._valuesStartRepeat = {};
    this._duration = 1E3;
    this._repeat = 0;
    this._reversed = this._yoyo = !1;
    this._delayTime = 0;
    this._startTime = null;
    this._easingFunction = TweenEasing.LinearNone;
    this._interpolationFunction = TweenInterpolation.Linear;
    this._chainedTweens = [];
    this._onStartCallback = null;
    this._onStartCallbackFired = !1;
    this._onCompleteCallback = this._onUpdateCallback = null;
    for (var b in a) this._valuesStart[b] = parseFloat(a[b])
}
Tween.prototype.free = function() {
    this._onCompleteCallback = this._onUpdateCallback = this._onStartCallback = this._chainedTweens = this._interpolationFunction = this._easingFunction = this._valuesStartRepeat = this._valuesEnd = this._valuesStart = this._object = this.target = null
};
Tween.prototype.to = function(a, b) {
    void 0 !== b && (this._duration = b);
    this._valuesEnd = a;
    return this
};
Tween.prototype.start = function(a) {
    TweenManager.instance.add(this);
    this._onStartCallbackFired = !1;
    this._startTime = void 0 !== a ? a : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now();
    this._startTime += this._delayTime;
    for (var b in this._valuesEnd) {
        if (this._valuesEnd[b] instanceof Array) {
            if (0 === this._valuesEnd[b].length) continue;
            this._valuesEnd[b] = [this._object[b]].concat(this._valuesEnd[b])
        }
        this._valuesStart[b] = this._object[b];
        !1 ===
            this._valuesStart[b] instanceof Array && (this._valuesStart[b] *= 1);
        this._valuesStartRepeat[b] = this._valuesStart[b] || 0
    }
    return this
};
Tween.prototype.stop = function() {
    TweenManager.instance.remove(this);
    return this
};
Tween.prototype.delay = function(a) {
    this._delayTime = a;
    return this
};
Tween.prototype.repeat = function(a) {
    this._repeat = a;
    return this
};
Tween.prototype.yoyo = function(a) {
    this._yoyo = a;
    return this
};
Tween.prototype.easing = function(a) {
    this._easingFunction = a;
    return this
};
Tween.prototype.interpolation = function(a) {
    this._interpolationFunction = a;
    return this
};
Tween.prototype.chain = function() {
    this._chainedTweens = arguments;
    return this
};
Tween.prototype.onStart = function(a) {
    this._onStartCallback = a;
    return this
};
Tween.prototype.onUpdate = function(a) {
    this._onUpdateCallback = a;
    return this
};
Tween.prototype.onComplete = function(a) {
    this._onCompleteCallback = a;
    return this
};
Tween.prototype.update = function(a) {
    var b;
    if (a < this._startTime) return !0;
    !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback.call(this._object, this), this._onStartCallbackFired = !0);
    var c = (a - this._startTime) / this._duration,
        c = 1 < c ? 1 : c,
        d = this._easingFunction(c);
    for (b in this._valuesEnd) {
        var e = this._valuesStart[b] || 0,
            f = this._valuesEnd[b];
        f instanceof Array ? this._object[b] = this._interpolationFunction(f, d) : ("string" === typeof f && (f = e + parseFloat(f)), "number" === typeof f && (this._object[b] =
            e + (f - e) * d))
    }
    if (1 == c) {
        if (0 < this._repeat) {
            isFinite(this._repeat) && this._repeat--;
            for (b in this._valuesStartRepeat) "string" === typeof this._valuesEnd[b] && (this._valuesStartRepeat[b] += parseFloat(this._valuesEnd[b])), this._yoyo && (c = this._valuesStartRepeat[b], this._valuesStartRepeat[b] = this._valuesEnd[b], this._valuesEnd[b] = c, this._reversed = !this._reversed), this._valuesStart[b] = this._valuesStartRepeat[b];
            this._startTime = a + this._delayTime;
            return !0
        }
        null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object,
            this);
        b = 0;
        for (c = this._chainedTweens.length; b < c; b++) this._chainedTweens[b].start(a);
        return !1
    }
    null !== this._onUpdateCallback && null !== this._object && this._onUpdateCallback.call(this._object, this);
    return !0
};

function Common() {}
Common.saveData = function(a, b) {
    if (navigator.isCocoonJS) window.localStorage.setItem(a, b);
    else {
        0 < b.indexOf(";") && Application.fatal("Saving invalid string with ';' character" + a);
        b.length > Common.COOKIE_MAX_LENGTH && Application.error("Can't save string of size " + b.length);
        var c = new Date;
        c.setDate(c.getDate() + Common.COOKIE_EXPIRATION_DAYS);
        c = "; expires=" + c.toUTCString();
        document.cookie = a + "=" + b + c + "; path=/"
    }
};
Common.COOKIE_EXPIRATION_DAYS = 1E3;
Common.COOKIE_MAX_LENGTH = 4090;
Common.loadData = function(a, b) {
    var c = b;
    if (navigator.isCocoonJS) c = window.localStorage.getItem(a) || c;
    else
        for (var d = a + "=", e = document.cookie.split(";"), f = 0; f < e.length; ++f) {
            for (var g = e[f];
                " " === g.charAt(0);) g = g.substring(1, g.length);
            if (0 === g.indexOf(d)) {
                c = g.substring(d.length, g.length);
                break
            }
        }
    return c
};
Common.storageString = function(a, b) {
    b = "undefined" !== typeof b ? b : "|";
    for (var c = "", d = 0; d < a.length; d++) c += 0 !== d ? b : "", c += a[d];
    return c
};
Common.copyNumericArray = function(a) {
    for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
    return b
};
Common.initArray = function(a, b) {
    for (var c = [], d = 0; d < b; d++) c.push(a);
    return c
};
Common.inArray = function(a, b) {
    return -1 !== b.indexOf(a)
};
Common.random = function(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
};
Common.randomInt = function(a, b) {
    return a + Math.floor(Math.random() * (b - a + 1))
};
Common.mixer = function(a) {
    a = a.slice(0);
    for (var b, c = 0; c < a.length; c++) b = Math.round(Math.random() * (a.length - 1 - c)) + c, a.splice(c, 0, a[b]), a.splice(b + 1, 1);
    return a
};
Common.getRandomArrayIndex = function(a, b) {
    if (1 < a) {
        for (var c = Common.randomInt(0, a - 1); c == b;) c = (c + 1) % a;
        return c
    }
    return 0
};
Common.getRandomFromArray = function(a, b) {
    var c = a.length;
    if (1 < c) {
        if ("undefined" !== typeof b) {
            for (var d = [], e = 0; e < c; ++e) a[e] !== b && d.push(e);
            if (0 < d.length) return a[d[Math.floor(d.length * Math.random())]]
        }
        return a[Math.floor(c * Math.random())]
    }
    return 1 === c ? a[0] : null
};
Common.randomAndSpliceFromArray = function(a) {
    return a.splice(Common.random(0, a.length - 1), 1)
};
Common.shuffleArray = function(a) {
    for (var b, c, d = a.length - 1; 1 <= d; --d) b = Math.floor(Math.random() * (d + 1)), c = a[b], a[b] = a[d], a[d] = c
};
Common.getParams = function(a) {
    var b = {};
    a = a.split(";");
    for (var c = 0; c < a.length; c++)
        for (var d = a[c].split(":"), e = 0; e < d.length; e++) b[String(d[0]).concat()] = d[1];
    return b
};
Common.lengthObject = function(a) {
    var b = 0,
        c;
    for (c in a) a.hasOwnProperty(c) && ++b;
    return b
};
Common.parseRect = function(a) {
    a = a.split(";");
    return 4 !== a.length ? null : new Rectangle(parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10))
};
Common.trim = function(a) {
    return String(a).replace(/^\s*(.*?)\s*$/g, "$1")
};
Common.sumArray = function(a) {
    for (var b = 0, c = 0; c < a.length; c++) b += a[c];
    return b
};
Common.parseNum = function(a) {
    return 10 > a ? "0" + a : "" + a
};
Common.circumferenceAngle = function(a, b) {
    var c = Math.atan2(b, a),
        c = 180 / Math.PI * c;
    return 0 > c ? 360 + c : c
};
Common.tween = function(a, b, c, d, e, f) {
    a = (new Tween(a)).to(b, c).easing("undefined" === typeof f ? TweenEasing.BackOut : f).onUpdate(Common.tweenUpdate).onComplete(Common.tweenComplete).delay("undefined" === typeof e ? 0 : e);
    Common.tweenUpdate(a, !0);
    d && a.start();
    return a
};
Common.tweenUpdate = function(a, b) {
    try {
        var c = a.target.parent,
            d = a.target.clip;
        c && a.target.onUpdate && !b && a.target.onUpdate.call(c, a.target);
        if (d)
            for (var e in a.target) switch (e) {
                case "alpha":
                    var f = 1 < a.target.alpha ? 1 : a.target.alpha,
                        f = 0 > a.target.alpha ? 0 : f;
                    d.alpha = f;
                    break;
                case "sx":
                    d.scale.x = a.target.sx;
                    break;
                case "sy":
                    d.scale.y = a.target.sy;
                    break;
                case "scale":
                    d.scale.x = a.target.scale;
                    d.scale.y = a.target.scale;
                    break;
                case "x":
                    d.position.x = a.target.x;
                    break;
                case "y":
                    d.position.y = a.target.y;
                    break;
                case "rotation":
                    d.rotation =
                        a.target.rotation
            }
    } catch (g) {
        Application.warn(" Tween onUpdate ::" + g)
    }
};
Common.tweenComplete = function(a) {
    try {
        var b = a.target.parent,
            c = a.target.clip;
        b && a.target.onComplete && (a.target.onComplete.call(b, a.target), a.target.parent = null, a.target.onComplete = null);
        if (c)
            for (var d in a._valuesEnd) switch (d) {
                case "alpha":
                    var e = 1 < a._valuesEnd.alpha ? 1 : a._valuesEnd.alpha,
                        e = 0 > a._valuesEnd.alpha ? 0 : e;
                    c.alpha = e;
                    break;
                case "sx":
                    c.scale.x = a._valuesEnd.sx;
                    break;
                case "sy":
                    c.scale.y = a._valuesEnd.sy;
                    break;
                case "scale":
                    c.scale.x = a._valuesEnd.scale;
                    c.scale.y = a._valuesEnd.scale;
                    break;
                case "x":
                    c.position.x =
                        a._valuesEnd.x;
                    break;
                case "y":
                    c.position.y = a._valuesEnd.y;
                    break;
                case "rotation":
                    c.rotation = a._valuesEnd.rotation
            }
    } catch (f) {
        Application.warn(" Tween onComplete ::" + f)
    }
};
Common.distance = function(a, b, c, d) {
    return Math.sqrt((c - a) * (c - a) + (d - b) * (d - b))
};
Common.distanceSquared = function(a, b, c, d) {
    return (c - a) * (c - a) + (d - b) * (d - b)
};
Common.makeClockTime = function(a) {
    var b = {};
    a = Math.ceil(a / 1E3);
    var c = Math.floor(a / 60),
        d = Math.floor(a % 60);
    b.total = a;
    b.minutes = c;
    b.seconds = d;
    return b
};
Common.getDigitsByValue = function(a, b) {
    for (var c = String(a), d = b - c.length, e = 0; e < d; e++) c = "0" + c;
    return c.split("")
};
Common.getData = function(a, b) {
    if (null === a) Application.error("Common:: data is null");
    else if (null === b) Application.error("Common:: data is null: " + b);
    else {
        if ("undefined" !== typeof a[b]) return a[b];
        Application.error("Property not found: " + b)
    }
    return null
};
Common.getOptionalData = function(a, b, c) {
    if ("undefined" === typeof a) Application.error("Common:: data is undefined");
    else if ("undefined" === typeof b) Application.error("Common:: data is undefined: " + b);
    else {
        if ("undefined" !== typeof a[b]) return a[b];
        Application.warn("Optional property not found: " + b + " using: " + c);
        return c
    }
    return null
};
Common.isValidNumber = function(a) {
    return "number" !== typeof a || isNaN(a) || !isFinite(a) ? !1 : !0
};
Common.sparseInt = function(a, b) {
    var c = parseInt(a, 10);
    return isNaN(c) ? b : c
};
Common.sparseFloat = function(a, b) {
    var c = parseFloat(a);
    return isNaN(c) ? b : c
};
Common.ajaxRequest = function() {
    var a = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
    if (window.ActiveXObject)
        for (var b = 0; b < a.length; b++) try {
            return new window.ActiveXObject(a[b])
        } catch (c) {} else if (window.XMLHttpRequest) return new window.XMLHttpRequest;
    return null
};
Common.randomRangeInt = function(a, b) {
    return a - b + Math.floor(Math.random() * (2 * b + 1))
};
Common.randomRangeFloat = function(a, b) {
    return a - b + 2 * Math.random() * b
};
Common.trunc = function(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a)
};
Common.colorDecimalToHex = function(a) {
    return a % 1E3 + (Common.trunc(a / 1E3) % 1E3 << 8) + (Common.trunc(a / 1E6) % 1E3 << 16)
};
Common.getR = function(a) {
    return a >> 16 & 255
};
Common.getG = function(a) {
    return a >> 8 & 255
};
Common.getB = function(a) {
    return a & 255
};
Common.getR_float = function(a) {
    return Common.getR(a) / 255
};
Common.getG_float = function(a) {
    return Common.getG(a) / 255
};
Common.getB_float = function(a) {
    return Common.getB(a) / 255
};
Common.validateRandom = function(a, b) {
    return a < b ? Common.trunc(Common.randomInt(a, b)) : a == b ? a : Common.trunc(Common.randomInt(b, a))
};
Common.gradToRadian = function(a) {
    return .017453292519943295 * a
};
Common.createArraySize = function(a, b) {
    if (Array.prototype.fill) return Array(a).fill(b);
    for (var c = [], d = 0; d < a; d++) c.push(b);
    return c
};
Common.clamp = function(a, b, c) {
    return Math.max(b, Math.min(c, a))
};
Common.zeroPad = function(a, b) {
    var c = Math.abs(a),
        d = Math.pow(10, Math.max(0, b - Math.floor(c).toString().length)).toString().substr(1);
    0 > a && (d = "-" + d);
    return d + c
};
Common.KEY_1 = 49;
Common.KEY_2 = 50;
Common.KEY_3 = 51;
Common.KEY_4 = 52;
Common.KEY_5 = 53;
Common.KEY_6 = 54;
Common.KEY_7 = 55;
Common.KEY_8 = 56;
Common.KEY_9 = 57;
Common.KEY_0 = 48;
Common.KEY_A = 65;
Common.KEY_B = 66;
Common.KEY_C = 67;
Common.KEY_D = 68;
Common.KEY_E = 69;
Common.KEY_F = 70;
Common.KEY_G = 71;
Common.KEY_H = 72;
Common.KEY_I = 73;
Common.KEY_J = 74;
Common.KEY_K = 75;
Common.KEY_L = 76;
Common.KEY_M = 77;
Common.KEY_N = 78;
Common.KEY_O = 79;
Common.KEY_P = 80;
Common.KEY_Q = 81;
Common.KEY_R = 82;
Common.KEY_S = 83;
Common.KEY_T = 84;
Common.KEY_U = 85;
Common.KEY_V = 86;
Common.KEY_W = 87;
Common.KEY_X = 88;
Common.KEY_Z = 90;
Common.KEY_ESC = 27;
Common.KEY_SPACE = 32;
Common.KEY_ENTER = 13;
Common.KEY_LEFT = 37;
Common.KEY_RIGHT = 39;
Common.KEY_DOWN = 40;
Common.KEY_UP = 38;
Common.KEY_SHIFT = 16;
Common.COLOR_NONE = "rgba(0, 0, 0, 0)";
Common.COLOR_RED = "#FF0000";
Common.COLOR_GREEN = "#00FF00";
Common.COLOR_BLUE = "#0000FF";
Common.COLOR_BLACK = "#000000";
Common.COLOR_WHITE = "#FFFFFF";
Common.COLOR_ORANGE = "#FF9900";
Common.COLOR_MAGENTA = "#FF00FF";
Common.COLOR_PURPLE = "#990066";
Common.COLOR_PINK = "#FF66FF";
Common.COLOR_BROWN = "#663300";
Common.COLOR_YELLOW = "#FFFF00";
Common.COLOR_GREY = "#666666";
Common.COLOR_DARK_BLUE = "#000066";

function ContextGraphics() {}
ContextGraphics.drawLine = function(a, b, c, d, e, f, g) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.beginPath(), a.strokeStyle = "undefined" === typeof f ? Common.COLOR_BLACK : f, a.lineWidth = "undefined" === typeof g ? 1 : g, a.moveTo(b, c), a.lineTo(d, e), a.stroke(), a.closePath())
};
ContextGraphics.drawRectangle = function(a, b, c, d, e, f, g, h) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.strokeStyle = "undefined" === typeof g ? Common.COLOR_BLUE : g, a.lineWidth = "undefined" === typeof f ? 1 : f, a.fillStyle = "undefined" === typeof h ? "rgba(0, 0, 0, 0)" : h, a.fillRect(b, c, d, e), a.strokeRect(b, c, d, e))
};
ContextGraphics.drawRect = function(a, b, c, d) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.strokeStyle = "undefined" === typeof c ? Common.COLOR_BLUE : c, a.fillStyle = "undefined" === typeof d ? "rgba(0, 0, 0, 0)" : d, a.lineWidth = 1, a.fillRect(b.x, b.y, b.w, b.h), a.strokeRect(b.x, b.y, b.w, b.h))
};
ContextGraphics.drawCircle = function(a, b, c, d, e, f) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.beginPath(), a.lineWidth = 1, a.strokeStyle = "undefined" === typeof e ? Common.COLOR_BLUE : e, a.arc(b, c, d, 0, 2 * Math.PI, !0), a.stroke(), a.fillStyle = "undefined" === typeof f ? "rgba(0, 0, 0, 0)" : f, a.fill(), a.closePath())
};
ContextGraphics.drawArc = function(a, b, c, d, e, f, g, h) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.beginPath(), a.strokeStyle = "undefined" === typeof g ? Common.COLOR_BLUE : g, a.fillStyle = "undefined" === typeof h ? "rgba(0, 0, 0, 0)" : h, a.lineWidth = 1, a.arc(b, c, d, e, f, !0), a.closePath(), a.stroke(), a.fill())
};
ContextGraphics.drawCross = function(a, b, c, d, e, f) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.beginPath(), a.strokeStyle = "undefined" === typeof e ? Common.COLOR_GREEN : e, a.lineWidth = "undefined" === typeof f ? 1 : f, a.moveTo(b - d, c - d), a.lineTo(b + d, c + d), a.moveTo(b - d, c + d), a.lineTo(b + d, c - d), a.stroke(), a.closePath())
};
ContextGraphics.drawArrow = function(a, b, c, d, e, f, g, h) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.beginPath(), a.strokeStyle = "undefined" === typeof f ? Common.COLOR_YELLOW : f, a.lineWidth = "undefined" === typeof h ? 1 : h, "undefined" === typeof g && (g = 5), a.moveTo(b, c), a.lineTo(d, e), b = new SVector3(d - b, e - c), b.normalize(), a.lineTo(d - g * (b.x + b.y), e - g * (b.y - b.x)), a.moveTo(d, e), a.lineTo(d - g * (b.x - b.y), e - g * (b.y + b.x)), a.stroke(), a.closePath())
};
ContextGraphics.drawPath = function(a, b, c, d) {
    if (Application.RENDER_MODE === Application.RENDER_CANVAS) {
        var e = b.length;
        if (!(3 > e)) {
            a.beginPath();
            a.moveTo(b[0][0], b[0][1]);
            for (var f = 1; f < e - 2; ++f) a.quadraticCurveTo(b[f][0], b[f][1], (b[f][0] + b[f + 1][0]) / 2, (b[f][1] + b[f + 1][1]) / 2);
            a.quadraticCurveTo(b[f][0], b[f][1], b[f + 1][0], b[f + 1][1]);
            a.strokeStyle = "undefined" === typeof c ? Common.COLOR_RED : c;
            a.lineWidth = "undefined" === typeof d ? 1 : d;
            a.stroke();
            a.closePath()
        }
    }
};
ContextGraphics.drawBezier = function(a, b, c, d) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.beginPath(), a.moveTo(b[0].x, b[0].y), a.quadraticCurveTo(b[1].x, b[1].y, b[2].x, b[2].y), a.strokeStyle = "undefined" === typeof c ? Common.COLOR_RED : c, a.lineWidth = "undefined" === typeof d ? 1 : d, a.stroke(), a.closePath())
};
ContextGraphics.drawQuad = function(a, b, c, d, e, f, g) {
    Application.RENDER_MODE === Application.RENDER_CANVAS && (a.strokeStyle = "undefined" === typeof f ? Common.COLOR_BLUE : f, a.lineWidth = "undefined" === typeof g ? 1 : g, a.strokeRect(b, c, d, e))
};

function VirtualStick(a, b, c, d) {
    VirtualStick.NONE = -100;
    this.maxForce = "undefined" === typeof b ? 0 : b;
    this.x = "undefined" === typeof c ? 0 : c;
    this.y = "undefined" === typeof d ? 0 : d;
    this.anchor = 0 === this.x && 0 === this.y ? !1 : !0;
    this.identifier = VirtualStick.NONE;
    this.forceY = this.forceX = this.angle = this.force = 0;
    this.canvas = a;
    this.clipBase = Application.instance.getClip("mcUIStickBase");
    this.clipPointer = Application.instance.getClip("mcUIStickPointer");
    this.canvas.addChild(this.clipBase);
    this.canvas.addChild(this.clipPointer);
    this.clipBase.setPosition(c, d);
    this.clipPointer.setPosition(c, d);
    this.anchor || (this.clipBase.visible = !1, this.clipPointer.visible = !1);
    this.m_callbackChangeFunction = this.m_callbackChangeObject = this.m_callbackReleaseFunction = this.m_callbackReleaseObject = this.m_callbackPressFunction = this.m_callbackPressObject = null
}
VirtualStick.prototype.setClips = function(a, b) {
    this.clipBase && this.canvas.removeChild(this.clipBase);
    this.clipPointer && this.canvas.removeChild(this.clipPointer);
    this.clipBase = Application.instance.getClip(a);
    this.clipPointer = Application.instance.getClip(b);
    this.canvas.addChild(this.clipBase);
    this.canvas.addChild(this.clipPointer);
    this.clipBase.setPosition(this.x, this.y);
    this.clipPointer.setPosition(this.x, this.y);
    this.anchor || (this.clipBase.visible = !1, this.clipPointer.visible = !1)
};
VirtualStick.prototype.free = function() {
    this.m_callbackChangeFunction = this.m_callbackChangeObject = this.m_callbackReleaseFunction = this.m_callbackReleaseObject = this.m_callbackPressFunction = this.m_callbackPressObject = null;
    this.canvas.removeChild(this.clipBase);
    this.canvas.removeChild(this.clipPointer);
    this.clipBase.free();
    this.clipBase = null;
    this.clipPointer.free();
    this.canvas = this.clipPointer = null
};
VirtualStick.prototype.addPressListener = function(a, b) {
    this.m_callbackPressObject = a;
    this.m_callbackPressFunction = b
};
VirtualStick.prototype.addReleaseListener = function(a, b) {
    this.m_callbackReleaseObject = a;
    this.m_callbackReleaseFunction = b
};
VirtualStick.prototype.addChangeListener = function(a, b) {
    this.m_callbackChangeObject = a;
    this.m_callbackChangeFunction = b
};
VirtualStick.prototype.onPointerPress = function(a) {
    this.identifier === VirtualStick.NONE && (this.anchor || (this.x = a.data.global.x, this.y = a.data.global.y, this.clipBase.setPosition(this.x, this.y), this.clipPointer.setPosition(this.x, this.y)), this.clipBase.visible = !0, this.clipPointer.visible = !0, this.identifier = this.getIdentifier(a), null !== this.m_callbackPressObject && null !== this.m_callbackPressFunction && this.m_callbackPressFunction.call(this.m_callbackPressObject, this))
};
VirtualStick.prototype.onPointerRelease = function(a) {
    this.identifier === this.getIdentifier(a) && (this.anchor || (this.clipBase.visible = !1, this.clipPointer.visible = !1), this.angle = this.force = 0, this.clipPointer.setPosition(this.x, this.y), this.identifier = VirtualStick.NONE, null !== this.m_callbackReleaseObject && null !== this.m_callbackReleaseFunction && this.m_callbackReleaseFunction.call(this.m_callbackReleaseObject, this))
};
VirtualStick.prototype.onPointerMove = function(a) {
    this.identifier === this.getIdentifier(a) && (this.force = Math.sqrt((a.data.global.x - this.x) * (a.data.global.x - this.x) + (a.data.global.y - this.y) * (a.data.global.y - this.y)), this.angle = Math.atan2(a.data.global.y - this.y, a.data.global.x - this.x), 0 < this.maxForce && this.force > this.maxForce && (this.force = this.maxForce), this.forceX = this.force * Math.cos(this.angle), this.forceY = this.force * Math.sin(this.angle), this.clipPointer.setPosition(this.x + this.forceX, this.y + this.forceY),
        null !== this.m_callbackChangeObject && null !== this.m_callbackChangeFunction && this.m_callbackChangeFunction.call(this.m_callbackChangeObject, this))
};
VirtualStick.prototype.getIdentifier = function(a) {
    return "undefined" !== typeof a.data.identifier ? a.data.identifier : a.data.originalEvent.which
};
VirtualStick.prototype.setVisible = function(a) {
    this.canvas.visible = a
};
VirtualStick.prototype.pressTest = function(a, b) {
    return 71 >= SMath.abs(a - this.x) && 71 >= SMath.abs(b - this.y)
};

function TouchControl() {
    this.y = this.x = 0;
    this.identifier = TouchControl.NONE;
    this.direction = this.angle = 0;
    this.onHoldListener = this.onSwipeListener = this.onTapListener = this.callerObject = null;
    this.m_minDistance = 70;
    this.m_minTime = 120;
    this.swipeY = this.swipeX = this.m_timeReset = 0;
    this.hold = !1
}
TouchControl.NONE = -100;
TouchControl.DIR_RIGHT = 1;
TouchControl.DIR_DOWN = 2;
TouchControl.DIR_LEFT = 3;
TouchControl.DIR_UP = 4;
TouchControl.prototype.free = function() {
    this.onHoldListener = this.onSwipeListener = this.onTapListener = this.callerObject = null
};
TouchControl.prototype.onPointerPress = function(a) {
    this.identifier === TouchControl.NONE && (this.identifier = this.getIdentifier(a), this.x = a.data.global.x, this.y = a.data.global.y, this.m_timeReset = this.m_minTime)
};
TouchControl.prototype.onPointerRelease = function(a) {
    this.identifier === this.getIdentifier(a) && (this.angle = 0, this.identifier = TouchControl.NONE, this.hold || this.callerObject && this.onTapListener && this.onTapListener.call(this.callerObject, this), this.hold = !1)
};
TouchControl.prototype.forceTapEvent = function() {
    this.angle = 0;
    this.identifier = TouchControl.NONE;
    this.hold = !1;
    this.callerObject && this.onTapListener && this.onTapListener.call(this.callerObject, this)
};
TouchControl.prototype.onPointerMove = function(a) {
    if (this.identifier === this.getIdentifier(a)) {
        var b = Math.sqrt((a.data.global.x - this.x) * (a.data.global.x - this.x) + (a.data.global.y - this.y) * (a.data.global.y - this.y));
        this.angle = Math.atan2(a.data.global.y - this.y, a.data.global.x - this.x);
        this.angle = 180 * this.angle / Math.PI;
        0 < this.m_timeReset && b > this.m_minDistance && (this.swipeX = a.data.global.x, this.swipeY = a.data.global.y, 0 < this.angle && 45 >= this.angle ? this.direction = TouchControl.DIR_RIGHT : 45 < this.angle && 135 >= this.angle ?
            this.direction = TouchControl.DIR_DOWN : 135 < this.angle && 180 >= this.angle ? this.direction = TouchControl.DIR_LEFT : -180 < this.angle && -135 >= this.angle ? this.direction = TouchControl.DIR_LEFT : -135 < this.angle && -45 >= this.angle ? this.direction = TouchControl.DIR_UP : -45 < this.angle && 0 >= this.angle && (this.direction = TouchControl.DIR_RIGHT), this.identifier = TouchControl.NONE, this.callerObject && this.onSwipeListener && this.onSwipeListener.call(this.callerObject, this))
    }
};
TouchControl.prototype.update = function(a) {
    this.identifier !== TouchControl.NONE && (this.m_timeReset -= a, 0 >= this.m_timeReset && (this.callerObject && this.onHoldListener ? (this.hold = !0, this.onHoldListener.call(this.callerObject, this)) : this.forceTapEvent()))
};
TouchControl.prototype.reset = function() {
    this.identifier = TouchControl.NONE
};
TouchControl.prototype.getIdentifier = function(a) {
    return "undefined" !== typeof a.data.identifier ? a.data.identifier : a.data.originalEvent.which
};

function TintInterval(a, b, c, d) {
    this.m_timeFrecuency = 0;
    this.m_timeFrecuencyElapse = c;
    this.m_timeDuration = b;
    this.m_indexColor = this.m_timeElapse = 0;
    this.m_clip = a;
    this.m_colors = "undefined" === typeof d ? null : d;
    this.m_start = !1;
    this.target = null
}
TintInterval.prototype.start = function(a, b) {
    a = "undefined" === typeof a ? 0 : a;
    b = "undefined" === typeof b ? 0 : b;
    0 != a && (this.m_timeDuration = a);
    0 != b && (this.m_timeFrecuency = b);
    this.m_start = !0;
    this.m_timeFrecuencyElapse = this.m_timeElapse = 0;
    this.change()
};
TintInterval.prototype.stop = function() {
    if (this.m_start) {
        if (this.onFinish && this.target) this.target[this.onFinish]();
        this.m_start = !1;
        this.m_indexColor = 0;
        this.change()
    }
};
TintInterval.prototype.setColors = function(a) {
    this.m_colors = a
};
TintInterval.prototype.setClip = function(a) {
    this.m_clip = a
};
TintInterval.prototype.update = function(a) {
    if (this.m_start && (this.m_timeElapse += a, this.m_timeFrecuencyElapse += a, this.m_timeFrecuencyElapse >= this.m_timeFrecuency && (this.change(), this.m_timeFrecuencyElapse = 0), this.m_timeElapse >= this.m_timeDuration && (this.m_start = !1, this.m_indexColor = 0, this.change(), this.onFinish && this.target))) this.target[this.onFinish]()
};
TintInterval.prototype.change = function() {
    this.m_indexColor++;
    this.m_indexColor >= this.m_colors.length && (this.m_indexColor = 0)
};
TintInterval.prototype.free = function() {
    this.target = this.m_colors = this.m_clip = this.onFinish = null
};

function SInterval(a, b, c, d, e, f, g) {
    "undefined" === typeof d && (d = 1);
    "undefined" === typeof f && (f = !1);
    this.m_timeElapsed = 0;
    this.m_timeToTrigger = c;
    this.m_initLoops = this.m_loop = d;
    this.m_stopped = f;
    this.m_isOver = !1;
    this.m_caller = a;
    this.m_params = e;
    this.m_onEndCallback = b;
    this.m_onLoopCallback = g
}
SInterval.prototype.reset = function(a) {
    a = "undefined" === typeof a ? -1 : a;
    0 < a && (this.m_timeToTrigger = a);
    this.m_timeElapsed = 0;
    this.m_loop = this.m_initLoops;
    this.m_stopped = this.m_isOver = !1
};
SInterval.prototype.stop = function() {
    this.m_stopped = !0
};
SInterval.prototype.resume = function() {
    this.m_stopped = !1
};
SInterval.prototype.update = function(a) {
    if (!this.m_stopped && !this.m_isOver && (this.m_timeElapsed += a, this.m_timeElapsed >= this.m_timeToTrigger))
        if (this.m_timeElapsed = 0, --this.m_loop, 0 >= this.m_loop) {
            if (this.m_isOver = !0, this.m_onEndCallback)
                if (this.m_params) this.m_caller[this.m_onEndCallback](this.m_params);
                else this.m_caller[this.m_onEndCallback]()
        } else if (this.m_onLoopCallback)
        if (this.m_params) this.m_caller[this.m_onLoopCallback](this.m_params);
        else this.m_caller[this.m_onLoopCallback]()
};
SInterval.prototype.free = function() {
    this.m_caller = null
};

function SPoint(a, b) {
    this.x = "undefined" === typeof a ? 0 : a;
    this.y = "undefined" === typeof b ? 0 : b
}
SPoint.prototype.distanceTo = function(a, b) {
    return Math.sqrt((a - this.x) * (a - this.x) + (b - this.y) * (b - this.y))
};

function SVector3(a, b, c) {
    this.x = "undefined" === typeof a ? 0 : a;
    this.y = "undefined" === typeof b ? 0 : b;
    this.z = "undefined" === typeof c ? 0 : c
}
SVector3.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
};
SVector3.prototype.normalize = function() {
    var a = this.x * this.x + this.y * this.y + this.z * this.z;
    0 < a && (a = Math.sqrt(a), this.x /= a, this.y /= a, this.z /= a);
    return this
};
SVector3.prototype.product = function(a) {
    return new SVector3(this.y * a.z - this.z * a.y, -(this.x * a.z - this.z * a.x), this.y * a.x - this.x * a.y)
};

function Movement(a, b, c, d, e) {
    this.m_oldState = 0;
    this.m_targetX = a;
    this.m_targetY = b;
    this.m_x = a;
    this.m_y = b;
    this.m_speed = 0;
    this.m_typeMovement = Movement.TYPE_DEFAULT;
    this.m_isLoop = "undefined" === typeof d ? !1 : d;
    this.m_isReversible = "undefined" === typeof e ? !1 : e;
    this.m_isAwaitingDelete = !1;
    this.m_cycleCallback = this.m_endCallback = this.m_callerActor = null;
    this.m_timer = this.m_waitTime = 0;
    this.setSpeed(c);
    this.m_state = Movement.ST_INIT
}
Movement.prototype.free = function() {
    this.m_callerActor = this.m_cycleCallback = this.m_endCallback = null
};
Movement.TYPE_DEFAULT = 0;
Movement.TYPE_CIRCLE = 1;
Movement.TYPE_LINEAR = 2;
Movement.MIN_SPEED = 1E-5;
Movement.DEFAULT_SPEED = 1;
Movement.ST_INDEF = -1;
Movement.ST_INIT = 0;
Movement.ST_MOVEMENT = 1;
Movement.ST_PAUSED = 2;
Movement.ST_END = 3;
Movement.prototype.getX = function() {
    return this.m_x
};
Movement.prototype.getY = function() {
    return this.m_y
};
Movement.prototype.getSpeed = function() {
    return this.m_speed
};
Movement.prototype.setSpeed = function(a) {
    a > Movement.MIN_SPEED ? this.m_speed = a : (Application.error("setSpeed: " + a), this.m_speed = Movement.DEFAULT_SPEED)
};
Movement.prototype.type = function() {
    return this.m_typeMovement
};
Movement.prototype.targetX = function() {
    return this.m_targetX
};
Movement.prototype.targetY = function() {
    return this.m_targetY
};
Movement.prototype.isAwaitingDelete = function() {
    return this.m_isAwaitingDelete
};
Movement.prototype.setAwaitingToDelete = function(a) {
    if (this.m_isAwaitingDelete = a) this.m_state = Movement.ST_INDEF
};
Movement.prototype.isPaused = function() {
    return this.m_state == Movement.ST_PAUSED
};
Movement.prototype.setPause = function(a) {
    a ? this.m_state === Movement.ST_MOVEMENT && (this.m_oldState = this.m_state, this.m_state = Movement.ST_PAUSED) : this.m_state = this.m_oldState
};
Movement.prototype.setCallbacks = function(a, b, c) {
    this.m_callerActor = a;
    this.m_endCallback = b;
    this.m_cycleCallback = c
};
Movement.prototype.resetPosition = function(a, b) {
    return this.m_state !== Movement.ST_MOVEMENT && this.m_state !== Movement.ST_PAUSED ? (this.m_x = a, this.m_y = b, !0) : !1
};
Movement.prototype.cancelMotion = function() {
    this.m_state = Movement.ST_END
};
Movement.prototype.onEndMovement = function() {
    this.m_state = Movement.ST_END;
    this.m_callerActor && this.m_endCallback && this.m_endCallback.call(this.m_callerActor, this)
};
Movement.prototype.onCycleEnd = function() {
    this.m_callerActor && this.m_cycleCallback && this.m_cycleCallback.call(this.m_callerActor, this)
};
Movement.prototype.wait = function(a) {
    this.m_waitTime = this.m_timer = a;
    this.m_state = Movement.ST_MOVEMENT
};
Movement.prototype.update = function(a) {
    if (this.m_state === Movement.ST_MOVEMENT && (this.m_timer -= a, 0 >= this.m_timer))
        if (this.m_isLoop) this.m_timer = this.m_waitTime, this.onCycleEnd();
        else this.onEndMovement()
};

function LinearMovement(a, b, c, d, e) {
    Movement.call(this, a, b, c, d, e);
    this.m_vy = this.m_vx = this.m_angle = 0;
    this.m_toFront = !0;
    this.m_initX = this.m_x;
    this.m_initY = this.m_y;
    this.m_endPointY = this.m_endPointX = 0;
    this.m_motionLimit = new Rectangle;
    this.m_typeMovement = Movement.TYPE_LINEAR
}
Application.subclass(LinearMovement, Movement);
LinearMovement.prototype.free = function() {
    this.m_motionLimit = null;
    Movement.prototype.free.call(this)
};
LinearMovement.prototype.getAngle = function() {
    return this.m_angle
};
LinearMovement.prototype.getLinearVelocityX = function() {
    return this.m_vx
};
LinearMovement.prototype.getLinearVelocityY = function() {
    return this.m_vy
};
LinearMovement.prototype.resetPosition = function(a, b) {
    return Movement.prototype.resetPosition.call(this, a, b) ? (this.m_initX = a, this.m_initY = b, !0) : !1
};
LinearMovement.prototype.settingMotionLimit = function(a, b, c, d) {
    this.m_motionLimit.x = 0 <= c ? a : a + c;
    this.m_motionLimit.y = 0 <= d ? b : b + d;
    this.m_motionLimit.w = 0 <= c ? c : -c;
    this.m_motionLimit.h = 0 <= d ? d : -d
};
LinearMovement.prototype.gotoPosition = function(a, b, c) {
    c = "undefined" !== typeof c ? c : 0;
    this.m_endPointX = this.m_targetX = a;
    this.m_endPointY = this.m_targetY = b;
    a -= this.m_x;
    b -= this.m_y;
    if (0 === a && 0 === b) this.onEndMovement();
    else this.settingMotionLimit(this.m_x, this.m_y, a, b), 0 < c && (this.m_speed = c), c = Math.sqrt(a * a + b * b), this.m_vx = a / c * this.m_speed, this.m_vy = b / c * this.m_speed, this.m_angle = Math.atan2(b, a), this.m_state = Movement.ST_MOVEMENT
};
LinearMovement.prototype.gotoRadialPoint = function(a, b, c) {
    c = "undefined" !== typeof c ? c : 0;
    0 > a && (Application.error("LinearMovement::gotoRadialPoint() - distance: " + a), a *= -1);
    if (0 === a) this.onEndMovement();
    else {
        this.m_angle = b;
        b = a * Math.cos(this.m_angle);
        var d = a * Math.sin(this.m_angle);
        this.settingMotionLimit(this.m_x, this.m_y, b, d);
        0 < c && (this.m_speed = c);
        this.m_vx = b / a * this.m_speed;
        this.m_vy = d / a * this.m_speed;
        this.m_endPointX = this.m_targetX = this.m_x + b;
        this.m_endPointY = this.m_targetY = this.m_y + d;
        this.m_state = Movement.ST_MOVEMENT
    }
};
LinearMovement.prototype.simulateUpdate = function(a) {
    var b = null;
    this.m_state === Movement.ST_MOVEMENT && (b = new Vector2D(this.m_vx * a, this.m_vy * a));
    return b
};
LinearMovement.prototype.update = function(a) {
    if (this.m_state === Movement.ST_MOVEMENT && (this.m_x += this.m_vx * a, this.m_y += this.m_vy * a, this.m_x < this.m_motionLimit.left() || this.m_x > this.m_motionLimit.right() || this.m_y < this.m_motionLimit.top() || this.m_y > this.m_motionLimit.bottom()))
        if (this.m_x = this.m_endPointX, this.m_y = this.m_endPointY, this.m_isLoop) this.m_isReversible ? (this.m_toFront ? (this.m_endPointX = this.m_initX, this.m_endPointY = this.m_initY) : (this.m_endPointX = this.m_targetX, this.m_endPointY = this.m_targetY),
            this.m_toFront = !this.m_toFront, this.m_vx *= -1, this.m_vy *= -1) : (this.m_x = this.m_initX, this.m_y = this.m_initY), this.onCycleEnd();
        else this.onEndMovement()
};

function CircularMovement(a, b, c, d, e) {
    Movement.call(this, a, b, c, "undefined" === typeof d ? !1 : d, "undefined" === typeof e ? !1 : e);
    this.m_currentRadiansDisplaced = this.m_radiansToDisplace = this.m_initRandians = 0;
    this.m_factorDirection = 1;
    this.m_angularSpeed = this.m_radio = this.m_centroidY = this.m_centroidX = 0;
    this.m_typeMovement = Movement.TYPE_CIRCLE;
    this.m_oldX = this.m_x;
    this.m_oldY = this.m_y
}
Application.subclass(CircularMovement, Movement);
CircularMovement.prototype.startMovement = function(a, b, c) {
    this.m_centroidX = a;
    this.m_centroidY = b;
    a = this.m_x - this.m_centroidX;
    b = -this.m_y + this.m_centroidY;
    this.m_radio = Math.sqrt(a * a + b * b);
    if (1 >= this.m_radio) Application.error("CircularMovement::startMovement() - Radio very small: " + this.m_radio), this.onEndMovement();
    else if (this.m_factorDirection = 0 > c ? -1 : 1, 0 == c) this.onEndMovement();
    else 0 > c && (c *= -1), this.m_initRandians = Math.atan2(b, a), this.m_radiansToDisplace = c / 180 * Math.PI, this.m_currentRadiansDisplaced =
        0, this.m_angularSpeed = this.m_radiansToDisplace / (c / 360 * Math.PI * this.m_radio * 2 / this.m_speed), c = this.m_initRandians + this.m_radiansToDisplace * this.m_factorDirection, this.m_targetX = this.m_centroidX + this.m_radio * Math.cos(c), this.m_targetY = this.m_centroidY - this.m_radio * Math.sin(c), this.m_state = Movement.ST_MOVEMENT
};
CircularMovement.prototype.startMovement2 = function(a, b, c) {
    this.m_radio = a;
    if (1 >= this.m_radio) Application.error("CircularMovement::startMovement2() - Radio very small: " + this.m_radio), this.onEndMovement();
    else if (this.m_factorDirection = 0 > c ? -1 : 1, 0 == c) this.onEndMovement();
    else 0 > c && (c *= -1), this.m_radiansToDisplace = c / 180 * Math.PI, this.m_angularSpeed = this.m_radiansToDisplace / (c / 360 * Math.PI * this.m_radio * 2 / this.m_speed), this.m_initRandians = b / 180 * Math.PI, this.m_currentRadiansDisplaced = 0, this.m_centroidX = this.m_x -
        this.m_radio * Math.cos(this.m_initRandians), this.m_centroidY = this.m_y + this.m_radio * Math.sin(this.m_initRandians), a = this.m_initRandians + this.m_radiansToDisplace * this.m_factorDirection, this.m_targetX = this.m_centroidX + this.m_radio * Math.cos(a), this.m_targetY = this.m_centroidY - this.m_radio * Math.sin(a), this.m_state = Movement.ST_MOVEMENT
};
CircularMovement.prototype.update = function(a) {
    if (this.m_state == Movement.ST_MOVEMENT && (this.m_currentRadiansDisplaced += this.m_angularSpeed * a, this.m_currentRadiansDisplaced > this.m_radiansToDisplace && (this.m_currentRadiansDisplaced = this.m_radiansToDisplace), a = this.m_initRandians + this.m_currentRadiansDisplaced * this.m_factorDirection, this.m_x = this.m_centroidX + this.m_radio * Math.cos(a), this.m_y = this.m_centroidY - this.m_radio * Math.sin(a), this.m_currentRadiansDisplaced == this.m_radiansToDisplace))
        if (this.m_isLoop) this.m_currentRadiansDisplaced =
            0, this.m_isReversible && (this.m_factorDirection *= -1, this.m_initRandians = a), this.onCycleEnd();
        else this.onEndMovement()
};

function MotionController(a, b, c) {
    this.m_currentMovement = null;
    this.m_currentIndexMovement = 0;
    this.m_advanceFactor = 1;
    this.m_nextMovementCallback = this.m_endCallback = this.m_caller = null;
    this.m_x = a;
    this.m_y = b;
    this.m_speed = c.speed;
    this.m_motionData = c;
    this.m_isLoop = this.m_motionData.isLoop;
    this.m_isReversible = this.m_motionData.isReverse;
    this.m_isStarted = !1;
    this.m_movements = [];
    this.createMovements()
}
MotionController.prototype.free = function() {
    this.m_motionData.free();
    this.m_nextMovementCallback = this.m_endCallback = this.m_caller = this.m_currentMovement = this.m_motionData = null;
    for (var a = this.m_movements.length - 1; 0 <= a;) this.m_movements[a].free(), this.m_movements[a] = null, --a;
    this.m_movements = null
};
MotionController.prototype.hasMotion = function() {
    return 0 !== this.m_movements.length
};
MotionController.prototype.isStarted = function() {
    return this.m_isStarted
};
MotionController.prototype.startMotion = function(a, b, c) {
    this.m_isStarted || (this.m_caller = a, this.m_endCallback = b, this.m_nextMovementCallback = c, this.m_isStarted = 0 !== this.m_movements.length, this.m_currentIndexMovement = -1, this.gotoNextMovement())
};
MotionController.CIRCLE_POLAR = "cp";
MotionController.CIRCLE_CARTESIAN = "cc";
MotionController.LINEAR_POLAR = "lp";
MotionController.LINEAR_CARTESIAN = "lc";
MotionController.RELATIVE_LINEAR_CARTESIAN = "rlc";
MotionController.PAUSE = "p";
MotionController.prototype.getX = function() {
    return this.m_x
};
MotionController.prototype.getY = function() {
    return this.m_y
};
MotionController.prototype.createMovements = function() {
    var a;
    a = null;
    for (var b = this.m_x, c = this.m_y, d, e = 0; e < this.m_motionData.motionParams.length;) d = this.m_motionData.motionParams[e], d[0] == MotionController.CIRCLE_POLAR ? (a = new CircularMovement(b, c, this.m_speed, this.m_isLoop, this.m_isReversible), a.startMovement2(parseFloat(d[1]), parseFloat(d[2]), parseFloat(d[3]))) : d[0] == MotionController.CIRCLE_CARTESIAN ? (a = new CircularMovement(b, c, this.m_speed, this.m_isLoop, this.m_isReversible), a.startMovement(parseFloat(d[1]),
        parseFloat(d[2]), parseFloat(d[3]))) : d[0] == MotionController.LINEAR_POLAR ? (a = new LinearMovement(b, c, this.m_speed, this.m_isLoop, this.m_isReversible), a.gotoRadialPoint(parseFloat(d[1]), SMath.toRadians(parseFloat(d[2])))) : d[0] == MotionController.LINEAR_CARTESIAN ? (a = new LinearMovement(b, c, this.m_speed, this.m_isLoop, this.m_isReversible), a.gotoPosition(parseFloat(d[1]), parseFloat(d[2]))) : d[0] == MotionController.RELATIVE_LINEAR_CARTESIAN ? (a = new LinearMovement(b, c, this.m_speed, this.m_isLoop, this.m_isReversible),
        a.gotoPosition(parseFloat(d[1]) + b, parseFloat(d[2]) + c)) : d[0] == MotionController.PAUSE && (a = new Movement(b, c, this.m_speed, this.m_isLoop, this.m_isReversible), a.wait(parseInt(d[1], 10))), a && (this.m_movements.push(a), a.setPause(!0), a.setCallbacks(this, this.onEndMovement, this.onCycleMovement), b = a.targetX(), c = a.targetY()), ++e
};
MotionController.prototype.gotoNextMovement = function() {
    0 !== this.m_movements.length && (this.m_currentIndexMovement += this.m_advanceFactor, 0 <= this.m_currentIndexMovement && this.m_currentIndexMovement < this.m_movements.length ? (this.m_currentMovement = this.m_movements[this.m_currentIndexMovement], this.m_currentMovement.type() === Movement.TYPE_DEFAULT && this.m_isReversible && (0 > this.m_advanceFactor && 0 === this.m_currentIndexMovement || 0 < this.m_advanceFactor && this.m_currentIndexMovement === this.m_movements.length -
        1) && (this.m_advanceFactor *= -1), this.m_currentMovement.setPause(!1), this.m_caller && this.m_nextMovementCallback && this.m_nextMovementCallback.call(this.m_caller, this.m_currentMovement)) : this.m_isLoop && (this.m_isReversible ? this.m_advanceFactor *= -1 : this.m_currentIndexMovement = -1, this.gotoNextMovement()))
};
MotionController.prototype.update = function(a) {
    this.m_currentMovement && (this.m_currentMovement.update(a), this.m_x = this.m_currentMovement.getX(), this.m_y = this.m_currentMovement.getY())
};
MotionController.prototype.onEndMovement = function(a) {
    this.m_currentIndexMovement < this.m_movements.length - 1 || this.m_caller && this.m_endCallback && this.m_endCallback.call(this.m_caller)
};
MotionController.prototype.onCycleMovement = function(a) {
    this.m_currentMovement != a ? Application.error("MotionController::onCycleMovement()") : (a.setPause(!0), this.gotoNextMovement())
};

function PendularMovement(a, b, c, d, e, f, g) {
    this.m_angle = 0;
    this.m_alpha = e;
    this.m_x = c;
    this.m_y = d;
    this.m_dy = this.m_dx = this.m_len = 0;
    this.m_gravity = f;
    this.m_time = this.m_w = 0;
    this.m_pivotX = a;
    this.m_pivotY = b;
    this.m_longitudeMax = g;
    this.m_velocity = 0;
    this.init()
}
PendularMovement.prototype.getX = function() {
    return this.m_x
};
PendularMovement.prototype.getY = function() {
    return this.m_y
};
PendularMovement.prototype.getAngle = function() {
    return this.m_angle
};
PendularMovement.prototype.getVelocity = function() {
    return this.m_velocity
};
PendularMovement.prototype.getMaxLongitude = function() {
    return this.m_longitudeMax
};
PendularMovement.prototype.init = function() {
    this.m_dx = this.m_x - this.m_pivotX;
    this.m_dy = this.m_y - this.m_pivotY;
    this.m_len = Math.sqrt(this.m_dx * this.m_dx + this.m_dy * this.m_dy);
    this.m_len < PendularMovement.LONGITUDE_MIN && (this.m_len = PendularMovement.LONGITUDE_MIN);
    this.m_angle = Math.atan2(this.m_dx, this.m_dy);
    this.m_w = 2 * Math.PI / this.period();
    this.m_time = Math.acos(this.m_angle / this.m_alpha) / this.m_w * 180 / Math.PI
};
PendularMovement.prototype.update = function(a) {
    this.m_len += PendularMovement.INCREMENT_LONGITUDE;
    this.m_len > this.m_longitudeMax && (this.m_len = this.m_longitudeMax);
    this.m_w = 2 * Math.PI / this.period();
    this.m_angle = this.m_alpha * Math.cos(this.m_w * this.m_time * Math.PI / 180);
    this.m_velocity = -this.m_w * this.m_alpha * Math.sin(this.m_w * this.m_time * Math.PI / 180);
    this.m_x = this.m_len * Math.sin(this.m_angle) + this.m_pivotX;
    this.m_y = this.m_len * Math.cos(this.m_angle) + this.m_pivotY;
    this.m_time += PendularMovement.DT
};
PendularMovement.prototype.fastPow = function(a, b) {
    if (0 == b) return 1;
    if (0 == b % 2) {
        var c = this.fastPow(a, .5 * b);
        return c * c
    }
    return a * this.fastPow(a, b - 1)
};
PendularMovement.prototype.factorial = function(a) {
    for (var b = 1, c = 1; c <= a;) b *= c, c++;
    return b
};
PendularMovement.prototype.period = function() {
    for (var a = 0, b = 0; b <= PendularMovement.N;) a += this.fastPow(this.factorial(2 * b) / this.fastPow(this.fastPow(2, b) * this.factorial(b), 2), 2) * this.fastPow(Math.sin(this.m_alpha / 2), 2 * b), b++;
    return 2 * Math.PI * Math.sqrt(this.m_len / this.m_gravity) * a
};
PendularMovement.DT = 4;
PendularMovement.N = 30;
PendularMovement.LONGITUDE_MIN = 50;
PendularMovement.INCREMENT_LONGITUDE = .9;

function ParametricParabolicMovement(a, b, c, d, e, f) {
    e = "undefined" === typeof e ? ParametricParabolicMovement.STD_GRAVITY : e;
    f = "undefined" === typeof f ? ParametricParabolicMovement.STD_SPEED : f;
    this.m_initX = a;
    this.m_initY = b;
    this.m_finalX = c;
    this.m_finalY = d;
    this.m_gravity = e;
    this.m_currentTime = 0;
    this.m_finish = !1;
    this.m_endCallback = null;
    this.m_finalTime = ParametricParabolicMovement.STD_FINAL_TIME;
    this.m_dx = this.m_finalX - this.m_initX;
    this.m_dy = this.m_finalY - this.m_initY;
    this.m_speed = f;
    this.m_vx = this.m_dx / this.m_finalTime;
    this.m_vy = (this.m_dy - this.m_gravity * this.m_finalTime * this.m_finalTime / 2) / this.m_finalTime;
    this.m_rx = this.m_initX;
    this.m_ry = this.m_initY;
    this.target = null
}
ParametricParabolicMovement.STD_GRAVITY = .05;
ParametricParabolicMovement.STD_SPEED = .3;
ParametricParabolicMovement.STD_FINAL_TIME = 100;
ParametricParabolicMovement.prototype.free = function() {
    this.target = this.m_endCallback = null
};
ParametricParabolicMovement.prototype.getX = function() {
    return this.m_rx
};
ParametricParabolicMovement.prototype.getY = function() {
    return this.m_ry
};
ParametricParabolicMovement.prototype.setEndCallback = function(a, b) {
    this.target = a;
    this.m_endCallback = b
};
ParametricParabolicMovement.prototype.getEndCallback = function() {
    return this.m_endCallback
};
ParametricParabolicMovement.prototype.update = function(a) {
    this.m_finish || (this.m_rx = Math.floor(this.m_initX + this.m_currentTime * this.m_vx), this.m_ry = Math.floor(this.m_initY + this.m_currentTime * this.m_vy + this.m_gravity * this.m_currentTime * this.m_currentTime / 2));
    this.m_currentTime >= this.m_finalTime ? (this.m_currentTime = this.m_finalTime, this.m_finish = !0, this.m_rx = this.m_finalX, this.m_ry = this.m_finalY, this.m_endCallback && this.m_endCallback.call(this.target, this)) : this.m_currentTime += this.m_speed * a * 2
};

function GeometricUtils() {}
GeometricUtils.intersectLines = function(a, b, c, d) {
    var e = b.minus(a),
        f = b.minus(c),
        g = b.minus(d),
        f = e.product(f),
        e = e.product(g);
    if (0 == f || 0 == e || 0 < f * e) return null;
    g = Math.abs(GeometricUtils.triarea(a, b, c));
    f = Math.abs(GeometricUtils.triarea(a, b, d));
    e = (c.x * f + d.x * g) / (g + f);
    c = (c.y * f + d.y * g) / (g + f);
    return 0 > (a.x - e) * (e - b.x) || 0 > (a.y - c) * (c - b.y) ? null : new Vector2D(e, c)
};
GeometricUtils.intersectLinePolygon = function(a, b, c) {
    for (var d = [], e = 0; e < c.length; e++) {
        var f = GeometricUtils.intersectLines(a, b, c[e], c[(e + 1) % c.length]);
        f && d.push(f)
    }
    return d
};
GeometricUtils.intersectLinePolygon2 = function(a, b, c) {
    for (var d = [], e = [], f = 0; f < c.length; f++) {
        var g = GeometricUtils.intersectLines(a, b, c[f], c[(f + 1) % c.length]);
        g && (d.push(g), e.push(f))
    }
    return {
        points: d,
        index: e
    }
};
GeometricUtils.trap = function(a, b) {
    return .5 * (b.x - a.x) * (b.y + a.y)
};
GeometricUtils.triarea = function(a, b, c) {
    return GeometricUtils.trap(a, b) + GeometricUtils.trap(b, c) + GeometricUtils.trap(c, a)
};

function PathFinding() {
    this.m_listOpen = [];
    this.m_listClose = [];
    this.m_mapOpen = []
}
PathFinding.ALLOW_DIAGONAL = !0;
PathFinding.ALLOW_DIAGONAL_CORNERING = !1;
PathFinding.getPath = function(a, b, c, d, e, f) {
    return (new PathFinding).getPathPrivate(a, b, c, d, e, f)
};
PathFinding.prototype.getPathPrivate = function(a, b, c, d, e, f) {
    b = Math.floor(b);
    c = Math.floor(c);
    var g = this.getSelectOpen(b, c);
    this.addOpenList(g);
    for (var h = a[0].length, k = a.length, l, m, p, n, q, r, t, u; 0 < this.m_listOpen.length && !this.isInCloseListById(d, e);) {
        p = g.i - 1;
        q = g.i + 2;
        r = g.j - 1;
        for (t = g.j + 2; p < q; p++)
            for (n = r; n < t; n++) p < k && -1 < p && n < h && -1 < n && !this.isInCloseListById(p, n) && (PathFinding.ALLOW_DIAGONAL || p === g.i || n === g.j) && (PathFinding.ALLOW_DIAGONAL_CORNERING || p === g.i || n === g.j || a[p][g.j] == f && a[g.i][n] === f) && a[p][n] ===
                f && (m = this.isInOpenList(p, n), l = p == g.i || n == g.j ? 10 : 14, l = g.g + l, null === m ? (u = new clsNode(g, p, n), m = 10 * (Math.abs(p - d) + Math.abs(n - e)), u.g = l, u.h = m, u.f = l + m, this.addOpenList(u)) : l < m.g && (m.g = l, m.f = m.h + m.g, m.parent = g));
        this.removeOpenList(g);
        this.addCloseList(g);
        g = this.getSelectOpen(b, c)
    }
    a = null;
    if (this.isInCloseListById(d, e)) {
        a = [];
        for (d = this.m_listClose[this.m_listClose.length - 1]; null !== d;) a.push(d), d = d.parent;
        a = a.reverse()
    }
    return a
};
PathFinding.prototype.getSelectOpen = function(a, b) {
    var c, d = this.m_listOpen.length;
    if (0 < d) {
        c = this.m_listOpen[d - 1];
        for (var e, f = 0; f < d; f++) e = this.m_listOpen[f], e.f < c.f && (c = e)
    } else c = new clsNode(null, a, b);
    return c
};
PathFinding.prototype.isInCloseListById = function(a, b) {
    return "undefined" !== typeof this.m_mapOpen[a] && null !== this.m_mapOpen[a] && "undefined" !== typeof this.m_mapOpen[a][b] && null !== this.m_mapOpen[a][b] ? this.m_mapOpen[a][b].isClose : !1
};
PathFinding.prototype.isInCloseList = function(a) {
    return a.isClose
};
PathFinding.prototype.addCloseList = function(a) {
    a.isClose = !0;
    this.m_listClose.push(a)
};
PathFinding.prototype.isInOpenList = function(a, b) {
    return "undefined" !== typeof this.m_mapOpen[a] && null !== this.m_mapOpen[a] && "undefined" !== typeof this.m_mapOpen[a][b] && null !== this.m_mapOpen[a][b] ? this.m_mapOpen[a][b] : null
};
PathFinding.prototype.removeOpenList = function(a) {
    var b = this.m_listOpen.indexOf(a); - 1 < b && this.m_listOpen.splice(b, 1);
    a.isOpen = !1
};
PathFinding.prototype.addOpenList = function(a) {
    a.isOpen = !0;
    this.m_listOpen.push(a);
    this.m_mapOpen[a.i] || (this.m_mapOpen[a.i] = []);
    this.m_mapOpen[a.i][a.j] = a
};

function clsNode(a, b, c) {
    this.f = this.h = this.g = 0;
    this.i = b;
    this.j = c;
    this.isClose = this.isOpen = !1;
    this.parent = a
}

function JumpControl(a, b) {
    this.onMaxHeightReachedCallback = this.onCompleteJumpCallback = this.targetCallback = null;
    this.m_gravity = "undefined" !== typeof b ? b : 9.8;
    this.m_factorGravity = 1;
    this.m_vo = "undefined" !== typeof a ? a : -45;
    this.m_time = this.m_nextZ = this.m_z = 0;
    this.m_isPaused = this.m_isJump = !1;
    this.m_checkMaxHeight = !0;
    this.m_initVelocity = this.m_vo;
    this.m_initPosition = 0
}
JumpControl.prototype.setHeightInit = function(a) {
    this.m_initPosition = a;
    this.m_time = this.m_vo = 0;
    this.m_isJump = !0
};
JumpControl.prototype.cancel = function() {
    this.m_isJump = !1;
    this.m_z = this.m_vo = this.m_time = this.m_initPosition = 0
};
JumpControl.prototype.getCurrentHeight = function() {
    return this.m_z
};
JumpControl.prototype.getElapseTime = function() {
    return this.m_time
};
JumpControl.prototype.getGravity = function() {
    return this.m_gravity
};
JumpControl.prototype.setGravity = function(a) {
    this.m_gravity = a
};
JumpControl.prototype.getIsJump = function() {
    return this.m_isJump
};
JumpControl.prototype.getFactorGravity = function() {
    return this.m_factorGravity
};
JumpControl.prototype.setFactorGravity = function(a) {
    this.m_factorGravity = a
};
JumpControl.prototype.getPaused = function() {
    return this.m_isPaused
};
JumpControl.prototype.setPaused = function(a) {
    this.m_isPaused = a
};
JumpControl.prototype.init = function(a) {
    this.m_nextZ = this.m_z = "undefined" !== typeof a ? a : 0;
    this.m_time = 0;
    this.m_checkMaxHeight = this.m_isJump = !0
};
JumpControl.prototype.getInitVelocity = function() {
    return this.m_vo
};
JumpControl.prototype.setInitVelocity = function(a) {
    this.m_initVelocity = this.m_vo = a
};
JumpControl.prototype.applyForceY = function(a) {
    if (!this.m_isJump) return !1;
    this.m_initPosition = this.m_nextZ;
    this.m_vo = a;
    this.m_time = 0;
    return !0
};
JumpControl.prototype.applyImpulse = function(a) {
    this.m_initPosition = this.m_z;
    this.m_vo = a;
    this.m_time = 0;
    this.m_isJump = !0
};
JumpControl.prototype.completeJump = function() {
    this.m_vo = this.m_initVelocity;
    this.m_z = this.m_initPosition = 0;
    this.m_isJump = !1;
    if (this.targetCallback && this.onCompleteJumpCallback) this.targetCallback[this.onCompleteJumpCallback](this)
};
JumpControl.prototype.update = function(a) {
    if (!this.m_isPaused && this.m_isJump)
        if (this.m_time += .011 * a, this.m_nextZ = this.m_vo * this.m_time + this.m_gravity * this.m_factorGravity * this.m_time * this.m_time * .5 + this.m_initPosition, 0 >= this.m_nextZ) {
            if (this.m_checkMaxHeight && this.m_nextZ > this.m_z && (this.m_checkMaxHeight = !1, this.targetCallback && this.onMaxHeightReachedCallback)) this.targetCallback[this.onMaxHeightReachedCallback](this);
            this.m_z = this.m_nextZ
        } else this.completeJump()
};
JumpControl.prototype.free = function() {
    this.onMaxHeightReachedCallback = this.onCompleteJumpCallback = null
};

function Displace(a, b) {
    this.position = new Vector2D(a, b);
    this.positionTarget = new Vector2D(0, 0);
    this.angle = this.speedFactor = this.speedMagnitude = this.accelerationMagnitude = 0;
    this.targetCallback = this.onEndDisplaceCallback = null;
    this.m_timeElapse = 0;
    this.m_positionStart = this.position.clone();
    this.m_acceleration = new Vector2D(0, 0);
    this.m_speedInitial = new Vector2D(0, 0);
    this.m_totalDisplacement = 0;
    this.m_onMove = !1
}
Displace.prototype.currentSpeed = function() {
    var a = new Vector2D(0, 0);
    a.x = this.m_speedInitial.x * this.speedFactor + this.m_acceleration.x * this.m_timeElapse;
    a.y = this.m_speedInitial.y * this.speedFactor + this.m_acceleration.y * this.m_timeElapse;
    return a.length()
};
Displace.prototype.toLeft = function() {
    for (var a = this.angle, a = 180 / Math.PI * a; 0 > a;) a += 360;
    a %= 360;
    return 90 < a && 270 > a
};
Displace.prototype.getX = function() {
    return this.position.x
};
Displace.prototype.getY = function() {
    return this.position.y
};
Displace.prototype.resetPosition = function(a, b) {
    this.position.x = a;
    this.position.y = b
};
Displace.prototype.updateSpeed = function(a) {
    this.speedMagnitude = a;
    this.m_speedInitial.setVector(this.speedMagnitude, this.angle)
};
Displace.prototype.updateAcceleration = function(a) {
    this.m_timeElapse = 0;
    this.m_speedInitial.x = this.m_speedInitial.x * this.speedFactor + this.m_acceleration.x * this.m_timeElapse;
    this.m_speedInitial.y = this.m_speedInitial.y * this.speedFactor + this.m_acceleration.y * this.m_timeElapse;
    this.m_positionStart = this.position.clone();
    this.accelerationMagnitude = a;
    this.m_acceleration.setVector(this.accelerationMagnitude, this.angle)
};
Displace.prototype.cancel = function() {
    this.m_positionStart = this.position.clone();
    this.m_speedInitial.x = 0;
    this.m_speedInitial.y = 0;
    this.m_acceleration.x = 0;
    this.m_timeElapse = this.m_acceleration.y = 0;
    this.speedFactor = 1;
    this.m_onMove = !1;
    if (this.onEndDisplaceCallback && this.targetCallback) this.targetCallback[this.onEndDisplaceCallback]()
};
Displace.prototype.gotoPosition = function(a, b, c, d, e) {
    this.accelerationMagnitude = "undefined" === typeof d ? 0 : d;
    this.speedMagnitude = "undefined" === typeof c ? 0 : c;
    this.speedFactor = "undefined" === typeof e ? 1 : e;
    this.m_timeElapse = 0;
    this.m_positionStart = this.position.clone();
    this.positionTarget.x = a;
    this.positionTarget.y = b;
    this.angle = this.positionTarget.minus(this.m_positionStart).angle();
    this.m_speedInitial.setVector(this.speedMagnitude, this.angle);
    this.m_acceleration.setVector(this.accelerationMagnitude, this.angle);
    this.m_totalDisplacement = this.positionTarget.minus(this.m_positionStart).length();
    this.m_onMove = !0
};
Displace.prototype.gotoDirection = function(a, b, c, d, e) {
    this.accelerationMagnitude = "undefined" === typeof d ? 0 : d;
    this.speedMagnitude = "undefined" === typeof c ? 0 : c;
    this.speedFactor = "undefined" === typeof e ? 1 : e;
    this.angle = b;
    this.m_timeElapse = 0;
    this.m_positionStart = this.position.clone();
    this.m_speedInitial.setVector(this.speedMagnitude, this.angle);
    this.m_acceleration.setVector(this.accelerationMagnitude, this.angle);
    this.m_totalDisplacement = a;
    this.m_onMove = !0;
    this.positionTarget.x = this.m_positionStart.x + a * Math.cos(b);
    this.positionTarget.y = this.m_positionStart.y + a * Math.sin(b)
};
Displace.prototype.estimatePositionAfterTime = function(a) {
    a *= .001;
    var b = new Point(0, 0);
    b.x = this.position.x + this.m_speedInitial.x * a * this.speedFactor + .5 * this.m_acceleration.x * a * a;
    b.y = this.position.y + this.m_speedInitial.y * a * this.speedFactor + .5 * this.m_acceleration.y * a * a;
    return b
};
Displace.prototype.onBounce = function(a) {
    var b = 0;
    a == Displace.DIRECTION_LEFT && (b = 180);
    this.m_timeElapse = 0;
    this.m_positionStart = this.position.clone();
    this.angle = (b + Common.random(-Displace.BOUNCE_ANGLE_VAR, Displace.BOUNCE_ANGLE_VAR)) * (Math.PI / 180);
    this.m_speedInitial.setVector(this.speedMagnitude * Displace.ENERGY_AFTER_BOUNCE, this.angle);
    this.m_acceleration.setVector(this.accelerationMagnitude, this.angle)
};
Displace.prototype.update = function(a) {
    if (0 != this.m_onMove && (this.m_timeElapse += .001 * a, this.position.x = this.m_positionStart.x + this.m_speedInitial.x * this.m_timeElapse * this.speedFactor + .5 * this.m_acceleration.x * this.m_timeElapse * this.m_timeElapse, this.position.y = this.m_positionStart.y + this.m_speedInitial.y * this.m_timeElapse * this.speedFactor + .5 * this.m_acceleration.y * this.m_timeElapse * this.m_timeElapse, a = new Vector2D(0, 0), a.x = this.m_speedInitial.x * this.speedFactor + this.m_acceleration.x * this.m_timeElapse,
            a.y = this.m_speedInitial.y * this.speedFactor + this.m_acceleration.y * this.m_timeElapse, this.m_positionStart.minus(this.position).length() >= this.m_totalDisplacement || Math.abs(a.x) < Displace.NO_SPEED_VALUE && Math.abs(a.y) < Displace.NO_SPEED_VALUE)) {
        if (this.onEndDisplaceCallback && this.targetCallback) this.targetCallback[this.onEndDisplaceCallback]();
        this.m_onMove = !1
    }
};
Displace.prototype.free = function() {
    this.m_speedInitial = this.m_acceleration = this.m_positionOrigin = this.position = null
};
Displace.DIRECTION_RIGHT = 1;
Displace.DIRECTION_LEFT = -1;
Displace.BOUNCE_ANGLE_VAR = 15;
Displace.ENERGY_AFTER_BOUNCE = .6;
Displace.NO_SPEED_VALUE = 5;

function SlidingBackgrounds(a, b) {
    this.m_canvas = a;
    this.m_file = window.slidingbackground.slidingbackground;
    this.m_level = b;
    this.m_objects = [];
    this.m_objectsX = [];
    this.m_objectsY = [];
    this.m_objectsSpeed = [];
    this.m_objectsResetDistance = [];
    this.m_objectsVertical = [];
    this.m_objectsBackground = [];
    this.init()
}
SlidingBackgrounds.prototype.init = function() {
    for (var a = 0; a < this.m_file.length; a++) this.m_file[a].Level === this.m_level && (this.m_objects.push(Application.instance.getClip(this.m_file[a].ClipName)), this.m_objectsX.push(this.m_file[a].StartX), this.m_objectsY.push(this.m_file[a].StartY), this.m_objectsBackground.push(1 === this.m_file[a].Background), this.m_objectsVertical.push(1 === this.m_file[a].Vertical), this.m_objectsSpeed.push(this.m_objectsVertical[this.m_objects.length - 1] ? this.m_file[a].SpeedY : this.m_file[a].SpeedX),
        this.m_objectsResetDistance.push(this.m_objectsVertical[this.m_objects.length - 1] ? this.m_file[a].ResetDistanceY : this.m_file[a].ResetDistanceX), this.m_objects[this.m_objects.length - 1].setPosition(this.m_objectsX[this.m_objects.length - 1], this.m_objectsY[this.m_objects.length - 1]), this.m_canvas.addChild(this.m_objects[this.m_objects.length - 1]))
};
SlidingBackgrounds.prototype.update = function(a) {
    for (var b = 0; b < this.m_objects.length; b++) this.m_objectsVertical[b] ? (this.m_objectsY[b] += a * this.m_objectsSpeed[b], this.m_objectsY[b] += 0 >= this.m_objectsY[b] + (this.m_objectsBackground[b] ? 1 : .5) * Application.APP_HEIGHT ? (Application.APP_HEIGHT - 2) * this.m_objectsResetDistance[b] : 0) : (this.m_objectsX[b] += a * this.m_objectsSpeed[b], this.m_objectsX[b] += 0 >= this.m_objectsX[b] + (this.m_objectsBackground[b] ? 1 : .5) * Application.APP_WIDTH ? (Application.APP_WIDTH - 2) * this.m_objectsResetDistance[b] :
        0), this.m_objects[b].setPosition(this.m_objectsX[b], this.m_objectsY[b])
};
SlidingBackgrounds.prototype.free = function() {
    for (var a = 0; a < this.m_objects.length; a++) this.m_objects[a].free(), this.m_objects[a] = null;
    this.m_file = this.m_canvas = this.m_objectsBackground = this.m_objectsVertical = this.m_objectsResetDistance = this.m_objectsSpeed = this.m_objectsY = this.m_objectsX = this.m_objects = null
};

function ValueInterpolation(a, b, c, d) {
    this.isAwaitingDelete = this.stop = !1;
    this.dataInterpolation = null;
    this.isDisposed = this.isCreatedByPool = !1;
    this.m_timeEnd = this.m_timeInit = this.m_currentTime = 0;
    this.m_startCalculation = !1;
    this.m_finalValue = this.m_initValue = this.m_currentValue = this.m_duration = 0;
    this.m_callback = this.m_caller = null
}
ValueInterpolation.prototype.reset = function(a, b, c, d, e, f, g) {
    d = "undefined" !== typeof d ? d : 0;
    c = "undefined" !== typeof c ? c : this.m_duration;
    this.m_initValue = a;
    this.m_finalValue = b;
    this.m_duration = c;
    this.m_timeInit = d;
    this.m_timeEnd = d + c;
    this.dataInterpolation = null;
    this.isAwaitingDelete = this.stop = !1;
    this.m_currentTime = 0;
    this.m_startCalculation = 0 > d ? !1 : !0;
    this.m_callback = this.m_caller = null;
    return this
};
ValueInterpolation.prototype.onEndInterpolation = function(a, b) {
    this.m_caller = a;
    this.m_callback = b
};
ValueInterpolation.prototype.timeInit = function() {
    return this.m_timeInit
};
ValueInterpolation.prototype.timeEnd = function() {
    return this.m_timeEnd
};
ValueInterpolation.prototype.value = function() {
    return this.m_currentValue
};
ValueInterpolation.prototype.calculateValue = function(a) {
    return 0
};
ValueInterpolation.prototype.update = function(a) {
    this.stop || (this.m_startCalculation ? (this.m_currentTime += a, this.m_currentValue = this.calculateValue(this.m_currentTime), this.m_currentTime >= this.m_duration && (this.m_currentValue = this.m_finalValue, this.stop = !0, this.m_caller && this.m_callback && (this.m_callback.call(this.m_caller, this), this.m_callback = this.m_caller = null))) : (this.m_currentTime += a, this.m_currentTime >= this.m_timeInit && (this.m_startCalculation = !0, this.m_currentTime = 0)))
};
ValueInterpolation.prototype.free = function() {
    this.dataInterpolation = this.m_caller = this.m_callback = null
};

function LinearInterpolation(a, b, c, d) {
    ValueInterpolation.call(this, a, b, c, d);
    this.m_rateOfChange = 0;
    this.reset(a, b, c, d)
}
Application.subclass(LinearInterpolation, ValueInterpolation);
LinearInterpolation.freeObject = [];
LinearInterpolation.lastCreated = null;
LinearInterpolation.create = function(a, b, c, d) {
    0 < LinearInterpolation.freeObject.length ? (LinearInterpolation.lastCreated = LinearInterpolation.freeObject.pop(), LinearInterpolation.lastCreated.reset(a, b, c, d, 0, 0, 0)) : LinearInterpolation.lastCreated = new LinearInterpolation(a, b, c, d);
    LinearInterpolation.lastCreated.isCreatedByPool = !0;
    LinearInterpolation.lastCreated.isDisposed = !1;
    return LinearInterpolation.lastCreated
};
LinearInterpolation.disposeObject = function(a) {
    a.isCreatedByPool && !a.isDisposed && (LinearInterpolation.freeObject.push(a), a.isDisposed = !0)
};
LinearInterpolation.clear = function() {
    LinearInterpolation.freeObject = []
};
LinearInterpolation.prototype.reset = function(a, b, c, d, e, f, g) {
    ValueInterpolation.prototype.reset.call(this, a, b, c, d, e, f, g);
    this.m_rateOfChange = (b - a) / c;
    return this
};
LinearInterpolation.prototype.calculateValue = function(a) {
    return this.m_initValue + a * this.m_rateOfChange
};
LinearInterpolation.prototype.free = function() {
    ValueInterpolation.prototype.free.call(this);
    LinearInterpolation.disposeObject(this)
};

function ExponentialInterpolation(a, b, c, d, e) {
    ValueInterpolation.call(this, a, b, c, e);
    this.m_c2 = this.m_c1 = this.m_alpha = 0;
    this.reset(a, b, c, e, d)
}
Application.subclass(ExponentialInterpolation, ValueInterpolation);
ExponentialInterpolation.freeObject = [];
ExponentialInterpolation.lastCreated = null;
ExponentialInterpolation.create = function(a, b, c, d, e) {
    0 < ExponentialInterpolation.freeObject.length ? (ExponentialInterpolation.lastCreated = ExponentialInterpolation.freeObject.pop(), ExponentialInterpolation.lastCreated.reset(a, b, c, e, d, 0, 0)) : ExponentialInterpolation.lastCreated = new ExponentialInterpolation(a, b, c, d, e);
    ExponentialInterpolation.lastCreated.isCreatedByPool = !0;
    ExponentialInterpolation.lastCreated.isDisposed = !1;
    return ExponentialInterpolation.lastCreated
};
ExponentialInterpolation.disposeObject = function(a) {
    a.isCreatedByPool && !a.isDisposed && (a.isDisposed = !0, ExponentialInterpolation.freeObject.push(a))
};
ExponentialInterpolation.clear = function() {
    ExponentialInterpolation.freeObject = []
};
ExponentialInterpolation.prototype.reset = function(a, b, c, d, e, f, g) {
    ValueInterpolation.prototype.reset.call(this, a, b, c, d, e, f, g);
    this.m_alpha = 1E3 * e / c;
    this.m_c1 = (b - a) / (Math.exp(this.m_alpha * this.m_duration * .001) - 1);
    this.m_c2 = this.m_initValue - this.m_c1;
    return this
};
ExponentialInterpolation.prototype.calculateValue = function(a) {
    return this.m_c1 * Math.exp(this.m_alpha * a * .001) + this.m_c2
};
ExponentialInterpolation.prototype.free = function() {
    ValueInterpolation.prototype.free.call(this);
    ExponentialInterpolation.disposeObject(this)
};

function ElasticInterpolation(a, b, c, d, e, f) {
    ValueInterpolation.call(this, a, b, c, f);
    this.m_waves = this.m_overshoot = this.m_zetaConst = this.m_c4 = this.m_c3 = this.m_c2 = this.m_c1 = 0;
    this.reset(a, b, c, f, 0, d, e)
}
Application.subclass(ElasticInterpolation, ValueInterpolation);
ElasticInterpolation.MAX_OVERSHOOT = .8;
ElasticInterpolation.INVERSE_PI = .3183098862;
ElasticInterpolation.freeObject = [];
ElasticInterpolation.lastCreated = null;
ElasticInterpolation.create = function(a, b, c, d, e, f) {
    0 < ElasticInterpolation.freeObject.length ? (ElasticInterpolation.lastCreated = ElasticInterpolation.freeObject.pop(), ElasticInterpolation.lastCreated.reset(a, b, c, f, 0, d, e)) : ElasticInterpolation.lastCreated = new ElasticInterpolation(a, b, c, d, e, f);
    ElasticInterpolation.lastCreated.isCreatedByPool = !0;
    ElasticInterpolation.lastCreated.isDisposed = !1;
    return ElasticInterpolation.lastCreated
};
ElasticInterpolation.disposeObject = function(a) {
    a.isCreatedByPool && !a.isDisposed && (a.isDisposed = !0, ElasticInterpolation.freeObject.push(a))
};
ElasticInterpolation.clear = function() {
    ElasticInterpolation.freeObject = []
};
ElasticInterpolation.prototype.reset = function(a, b, c, d, e, f, g) {
    ValueInterpolation.prototype.reset.call(this, a, b, c, d, e, f, g);
    f = "undefined" !== typeof f ? f : 0;
    g = "undefined" !== typeof g ? g : 0;
    f > ElasticInterpolation.MAX_OVERSHOOT && (f = ElasticInterpolation.MAX_OVERSHOOT);
    this.m_overshoot = f;
    d = Math.log(f) * ElasticInterpolation.INVERSE_PI;
    this.m_zetaConst = Math.sqrt(1 - 1 / (d * d + 1));
    this.m_waves = g;
    d = -Math.atan(Math.sqrt(1 - this.m_zetaConst * this.m_zetaConst) / this.m_zetaConst);
    c = 2 * Math.PI / (c / (g + d * ElasticInterpolation.INVERSE_PI *
        .5 + (0 > d ? 1 : 0)));
    g = c / Math.sqrt(1 - this.m_zetaConst * this.m_zetaConst);
    this.m_c1 = b - a;
    this.m_c2 = -this.m_zetaConst * g;
    this.m_c3 = c;
    this.m_c4 = -this.m_c2 / c;
    return this
};
ElasticInterpolation.prototype.calculateValue = function(a) {
    return this.m_c1 * (1 - Math.exp(this.m_c2 * a) * (SMath.fastCos(this.m_c3 * a) + this.m_c4 * SMath.fastSin(this.m_c3 * a))) + this.m_initValue
};
ElasticInterpolation.prototype.free = function() {
    ValueInterpolation.prototype.free.call(this);
    ElasticInterpolation.disposeObject(this)
};

function SATCollisionDetector() {}
SATCollisionDetector.calculatePolyPolyIntersection = function(a, b) {
    for (var c = [], d, e, f = 0; f < a.length; f++)
        if (e = 0 === f ? -(a[0][0] - a[a.length - 1][0]) / (a[0][1] - a[a.length - 1][1]) : -(a[f][0] - a[f - 1][0]) / (a[f][1] - a[f - 1][1]), -1 === c.indexOf(e) && (c.push(e), d = SATCollisionDetector.projectPolygonOntoLine(a, e), e = SATCollisionDetector.projectPolygonOntoLine(b, e), d[0] > e[1] || d[1] < e[0])) return !1;
    for (f = 0; f < b.length; f++)
        if (e = 0 === f ? -(b[0][0] - b[b.length - 1][0]) / (b[0][1] - b[b.length - 1][1]) : -(b[f][0] - b[f - 1][0]) / (b[f][1] - b[f - 1][1]), -1 === c.indexOf(e) && (c.push(e), d = SATCollisionDetector.projectPolygonOntoLine(a, e), e = SATCollisionDetector.projectPolygonOntoLine(b, e), d[0] > e[1] || d[1] < e[0])) return !1;
    return !0
};
SATCollisionDetector.calculatePolyCircleIntersection = function(a, b) {};
SATCollisionDetector.projectPolygonOntoLine = function(a, b) {
    for (var c = [], d, e, f = 0; f < a.length; f++) Infinity === b || Infinity === b ? d = a[f][1] : 0 === b ? d = a[f][0] : (d = -1 / b, e = a[f][1] - d * a[f][0], d = e / (b - d)), 0 === c.length ? c.push(d) : 1 === c.length ? d >= c[0] ? c.push(d) : c.unshift(d) : d > c[1] ? c[1] = d : d < c[0] && (c[0] = d);
    return c
};

function PhysicsContacListener(a) {
    this.listener = a;
    this.listener.BeginContact = function(a) {
        var b = a.GetFixtureA().GetBody().GetUserData(),
            d = a.GetFixtureB().GetBody().GetUserData();
        null !== b && b.BeginContact(a.GetFixtureB().GetBody(), a);
        null !== d && d.BeginContact(a.GetFixtureA().GetBody(), a)
    };
    this.listener.EndContact = function(a) {
        var b = a.GetFixtureA().GetBody().GetUserData(),
            d = a.GetFixtureB().GetBody().GetUserData();
        null !== b && b.EndContact(a.GetFixtureB().GetBody(), a);
        null !== d && d.EndContact(a.GetFixtureA().GetBody(),
            a)
    };
    this.listener.PostSolve = function(a, c) {
        var b = a.GetFixtureA().GetBody().GetUserData(),
            e = a.GetFixtureB().GetBody().GetUserData();
        null !== b && b.PostSolve(a.GetFixtureB().GetBody(), a, c);
        null !== e && e.PostSolve(a.GetFixtureA().GetBody(), a, c)
    };
    this.listener.PreSolve = function(a, c) {
        var b = a.GetFixtureA().GetBody().GetUserData(),
            e = a.GetFixtureB().GetBody().GetUserData();
        null !== b && b.PreSolve(a.GetFixtureB().GetBody(), a, c);
        null !== e && e.PreSolve(a.GetFixtureA().GetBody(), a, c)
    }
}

function Shaker(a) {
    this.m_canvas = a;
    this.m_yEnabled = this.m_xEnabled = !0;
    this.m_shaked = !1;
    this.m_amp = 0;
    this.m_duration = this.m_frequency = 1;
    this.m_updateable = !1;
    this.m_timer = 0;
    this.m_timerFrequency = 1;
    this.oy = this.ox = 0
}
Shaker.prototype.free = function() {
    this.m_canvas = null
};
Shaker.prototype.enableDirection = function(a, b) {
    this.m_xEnabled = a;
    this.m_yEnabled = b
};
Shaker.prototype.shake = function(a, b, c) {
    this.m_updateable || (this.ox = this.m_canvas.position.x, this.oy = this.m_canvas.position.y);
    this.stop();
    this.m_duration = c;
    this.m_frequency = b;
    this.m_amp = a;
    0 == this.m_duration && (this.m_duration = -1)
};
Shaker.prototype.setAmplitude = function(a) {
    this.m_amp = a
};
Shaker.prototype.start = function() {
    this.m_updateable = !0
};
Shaker.prototype.stop = function() {
    this.m_canvas.position.x = this.ox;
    this.m_canvas.position.y = this.oy;
    this.m_updateable = !1;
    this.m_duration = -1;
    this.m_timer = this.m_timerFrequency = this.m_frequency = 0
};
Shaker.prototype.isShaking = function() {
    return this.m_updateable
};
Shaker.prototype.updateClipPosition = function() {
    this.m_xEnabled && (this.m_canvas.position.x = this.ox + this.m_amp * Math.random());
    this.m_yEnabled && (this.m_canvas.position.y = this.oy + this.m_amp * Math.random())
};
Shaker.prototype.update = function(a) {
    this.m_updateable && -1 != this.m_duration && (this.m_timer < this.m_duration ? (this.m_timer += a, this.m_timerFrequency += a, this.m_frequency < this.m_timerFrequency && (this.m_timerFrequency = 0, this.updateClipPosition())) : this.stop())
};

function Homing2DPath(a, b, c, d, e) {
    this.targetY = this.targetX = 0;
    this.m_followX = a;
    this.m_followY = b;
    this.m_speed = d;
    this.m_turnFactor = c;
    this.accuracy = 35;
    this.plusFactor = 3;
    this.m_plusTurnFactor = 0;
    this.accuracyForPlusTurnFactor = 80;
    this.m_rotationCorrection = Math.PI / 2;
    this.m_oldRotations = [];
    for (c = 0; c < e; c++) this.m_oldRotations.push(0);
    this.m_directionVector = new Vector2D(this.targetX - a, this.targetY - b);
    this.m_velocityVector = new Vector2D(0, 0);
    this.m_directionVector.normalize2(1);
    this.m_onArriveFunction = this.m_callerActor =
        null
}
Homing2DPath.prototype.setX = function(a) {
    this.m_followX = a
};
Homing2DPath.prototype.getX = function() {
    return this.m_followX
};
Homing2DPath.prototype.setY = function(a) {
    this.m_followY = a
};
Homing2DPath.prototype.getY = function() {
    return this.m_followY
};
Homing2DPath.prototype.getSpeed = function() {
    return this.m_speed
};
Homing2DPath.prototype.getRotation = function() {
    return this.m_oldRotations[0]
};
Homing2DPath.prototype.getVelocityVec = function() {
    return this.m_velocityVector
};
Homing2DPath.prototype.setSpeed = function(a) {
    this.m_speed = a
};
Homing2DPath.prototype.setTurnFactor = function(a) {
    this.m_turnFactor = a
};
Homing2DPath.prototype.onArrivePointFunction = function(a, b) {
    this.m_callerActor = a;
    this.m_onArriveFunction = b
};
Homing2DPath.prototype.addNewRotation = function(a) {
    for (var b = this.m_oldRotations.length, c = 0; c < b; c++) this.m_oldRotations[c] = this.m_oldRotations[c + 1 == b ? c : c + 1];
    this.m_oldRotations[b - 1] = a
};
Homing2DPath.prototype.update = function(a) {
    var b = this.m_directionVector.x = this.targetX - this.m_followX,
        c = this.m_directionVector.y = this.targetY - this.m_followY;
    this.m_directionVector.normalize2(this.m_turnFactor + this.m_plusTurnFactor);
    this.m_velocityVector.add(this.m_directionVector);
    this.m_velocityVector.normalize2(this.m_speed * a);
    this.m_followX += this.m_velocityVector.x;
    this.m_followY += this.m_velocityVector.y;
    this.addNewRotation(Math.atan2(this.m_velocityVector.y, this.m_velocityVector.x));
    a = Math.sqrt(b *
        b + c * c);
    a < this.accuracy ? null !== this.m_callerActor && null !== this.m_onArriveFunction && (this.m_plusTurnFactor = 0, this.m_onArriveFunction.call(this.m_callerActor, this)) : a < this.accuracyForPlusTurnFactor && (this.m_plusTurnFactor = this.plusFactor)
};

function SLoader(a) {
    this.onLoadCallback = this.onLoadCaller = null;
    this.jsonLoader = a;
    if (a = this.jsonLoader.json.animations)
        for (var b = 0; b < a.length; b++) a[b].atlas = this.jsonLoader.json.meta.atlas, "undefined" !== typeof window.globalAnimations[a[b].n] && Application.warn("Clip [" + a[b].n + "] is duplicated in multiple JSON files : " + this.jsonLoader.url + " || " + window.globalAnimations[a[b].n + "_url"]), window.globalAnimations[a[b].n] = a[b], window.globalAnimations[a[b].n + "_url"] = this.jsonLoader.url
}
SLoader.prototype.addLoadListener = function(a, b) {
    this.onLoadCaller = a;
    this.onLoadCallback = b
};
SLoader.prototype.load = function() {
    var a = 0,
        b = this.jsonLoader.json.meta,
        c = [];
    SLoader.JsonTextures[this.jsonLoader.url] = [];
    for (a = 0; a < b.atlas.length; a++) {
        var d = this.jsonLoader.baseUrl + b.atlas[a];
        c[a] = new PIXI.loaders.Loader;
        c[a].add(b.atlas[a], d);
        c[a].parent = this;
        c[a].metaImage = b.atlas[a];
        c[a].metaIndex = a;
        c[a].once("complete", function() {
            if (this.parent) this.parent.onLoaded(this)
        });
        c[a].load()
    }
};
SLoader.prototype.onLoaded = function(a) {
    this.onLoadCaller && this.onLoadCallback && this.onLoadCallback.call(this.onLoadCaller);
    if ("undefined" !== typeof this.jsonLoader.json.atlas) {
        for (var b = a.metaIndex, c = a.resources[a.metaImage].texture.baseTexture, d = this.jsonLoader.json.atlas[b], e = 0; e < d.length; e++) {
            var f = d[e];
            "" === d[e].n && (d[e].n = this.jsonLoader.json.meta.atlas[b] + "_" + e);
            var g = new window.PIXI.Rectangle(f.x, f.y, f.w, f.h);
            g.p = f.p;
            g.q = f.q;
            g.ax = f.p / f.w;
            g.ay = f.q / f.h;
            window.PIXI.utils.TextureCache[d[e].n] = new window.PIXI.Texture(c,
                g)
        }
        SLoader.JsonTextures[a.parent.jsonLoader.url].push(c)
    }
};
SLoader.JsonTextures = {};
SLoader.checkTexturesLoaded = function(a) {
    if (!a) return !1;
    for (var b = 0; b < a.length; b++)
        if ("undefined" === typeof SLoader.JsonTextures[a[b]]) return !1;
    return !0
};
SLoader.showAllTextures = function() {
    for (var a in SLoader.JsonTextures) Application.info("SLoader >> Textures :: id [" + a + "]")
};
SLoader.unloadFromList = function(a) {
    if (a)
        for (var b = 0; b < a.length; b++) SLoader.unloadTextureFromJson(a[b])
};
SLoader.unloadTextureFromJson = function(a) {
    if (SLoader.JsonTextures[a]) {
        Application.warn("SLoader >> unloadTexture from Json[" + a + "]");
        for (var b = 0; b < SLoader.JsonTextures[a].length; b++) {
            Application.warn("SLoader > unload " + SLoader.JsonTextures[a][b].imageUrl);
            for (var c in window.PIXI.utils.TextureCache) window.PIXI.utils.TextureCache[c] && window.PIXI.utils.TextureCache[c].baseTexture === SLoader.JsonTextures[a][b] && (window.PIXI.utils.TextureCache[c] = null);
            for (var d in window.globalAnimations) window.globalAnimations[d +
                "_url"] === a && (window.globalAnimations[d] = null, delete window.globalAnimations[d], delete window.globalAnimations[d + "_url"]);
            navigator.isCocoonJS && SLoader.JsonTextures[a][b].source.dispose();
            SLoader.JsonTextures[a][b].destroy()
        }
        SLoader.JsonTextures[a] = null;
        delete SLoader.JsonTextures[a]
    } else Application.info("SLoader >> unloadTexture, texture [" + a + "] no found")
};

function SDisplayObjectContainer() {
    PIXI.Container.call(this);
    this.m_pointerMoveCallback = this.m_pointerMoveCaller = this.m_pointerOverCallback = this.m_pointerOverCaller = this.m_pressAndReleaseCallback = this.m_pressAndReleaseCaller = this.m_releaseCallback = this.m_releaseCaller = this.m_pressCallback = this.m_pressCaller = null;
    this.collisionsClips = [];
    this.collisions = {}
}
Application.subclass(SDisplayObjectContainer, PIXI.Container);
SDisplayObjectContainer.prototype.free = function() {
    if (this.collisionsClips) {
        for (; 0 < this.collisionsClips.length;) this.removeChild(this.collisionsClips[0]), this.collisionsClips[0].free(), this.collisionsClips[0] = null, this.collisionsClips.splice(0, 1);
        this.collisionsClips = null
    }
    PIXI.Container.prototype.free.call(this);
    this._pressAndReleaseCallback = this._pressAndReleaseCaller = this._releaseCallback = this._releaseCaller = this._pressCallback = this._pressCaller = null
};
SDisplayObjectContainer.prototype.setPosition = function(a, b) {
    this.position.x = a;
    this.position.y = b
};
SDisplayObjectContainer.prototype.setScale = function(a, b) {
    this.scale.x = a;
    this.scale.y = b || a
};
SDisplayObjectContainer.prototype.addChild = function(a) {
    a.collisionView = this.collisionView;
    a.collisionView && a.showCollision && a.showCollision();
    return PIXI.Container.prototype.addChild.call(this, a)
};
SDisplayObjectContainer.prototype.removeChild = function(a) {
    return PIXI.Container.prototype.removeChild.call(this, a)
};
SDisplayObjectContainer.prototype.toggleCollision = function() {
    PIXI.Container.prototype.toggleCollision.call(this);
    this.showCollision()
};
SDisplayObjectContainer.prototype.showCollision = function() {
    for (; 0 < this.collisionsClips.length;) this.removeChild(this.collisionsClips[0]), this.collisionsClips[0].free(), this.collisionsClips[0] = null, this.collisionsClips.splice(0, 1);
    if (this.collisionView)
        for (var a in this.collisions)
            if (this.collisions[a]) {
                var b = this.collisions[a],
                    c = new SGraphics;
                c.drawRectangle(b.x, b.y, b.w, b.h, 1, this.collisionColor, "mcCollision" === a ? this.collisionColor : 255, 1, .1);
                this.collisionsClips.push(c);
                this.addChild(c)
            }
};
SDisplayObjectContainer.prototype.getCollision = function(a) {
    return this.collisions[a] || null
};
SDisplayObjectContainer.prototype.addCollision = function(a, b) {
    this.collisions[a] = b
};
SDisplayObjectContainer.prototype.addPressListener = function(a, b) {
    this.interactive = !0;
    this.self = this;
    this.mousedown = this.touchstart = function(a) {
        this.self._onPointerPress(a)
    };
    this.m_pressCaller = a;
    this.m_pressCallback = b
};
SDisplayObjectContainer.prototype.addReleaseListener = function(a, b) {
    this.interactive = !0;
    this.self = this;
    this.mouseup = this.mouseupoutside = function(a) {
        this.self._onPointerRelease(a)
    };
    this.touchend = this.touchendoutside = function(a) {
        this.self._onPointerRelease(a)
    };
    this.m_releaseCaller = a;
    this.m_releaseCallback = b
};
SDisplayObjectContainer.prototype.addPressAndReleaseListener = function(a, b) {
    this.interactive = !0;
    this.self = this;
    this.click = this.tap = function(a) {
        this.self._onPointerPressAndRelease(a)
    };
    this.m_pressAndReleaseCaller = a;
    this.m_pressAndReleaseCallback = b
};
SDisplayObjectContainer.prototype.addPointerOverListener = function(a, b) {
    this.interactive = !0;
    this.self = this;
    this.mouseover = function(a) {
        this.self._onPointerOver(a)
    };
    this.m_pointerOverCaller = a;
    this.m_pointerOverCallback = b
};
SDisplayObjectContainer.prototype.addPointerMoveListener = function(a, b) {
    this.interactive = !0;
    this.self = this;
    this.mousemove = this.touchmove = function(a) {
        this.self.onPointerMove(a)
    };
    this.m_pointerMoveCaller = a;
    this.m_pointerMoveCallback = b
};
SDisplayObjectContainer.prototype._onPointerPress = function(a) {
    null !== this.m_pressCaller && null !== this.m_pressCallback && this.m_pressCallback.call(this.m_pressCaller, a)
};
SDisplayObjectContainer.prototype._onPointerRelease = function(a) {
    null !== this.m_releaseCaller && null !== this.m_releaseCallback && this.m_releaseCallback.call(this.m_releaseCaller, a)
};
SDisplayObjectContainer.prototype._onPointerPressAndRelease = function(a) {
    null !== this.m_pressAndReleaseCaller && null !== this.m_pressAndReleaseCallback && this.m_pressAndReleaseCallback.call(this.m_pressAndReleaseCaller, a)
};
SDisplayObjectContainer.prototype._onPointerOver = function(a) {
    null !== this.m_pointerOverCaller && null !== this.m_pointerOverCallback && this.m_pointerOverCallback.call(this.m_pointerOverCaller, a)
};
SDisplayObjectContainer.prototype.onPointerMove = function(a) {
    null !== this.m_pointerMoveCaller && null !== this.m_pointerMoveCallback && this.m_pointerMoveCallback.call(this.m_pointerMoveCaller, a)
};
SDisplayObjectContainer.prototype.hitTestPoint = function(a, b) {
    var c = new PIXI.Point(a, b),
        c = this.worldTransform.applyInverse(c);
    return this.getCollision("mcCollision").contains(c.x, c.y)
};
SDisplayObjectContainer.prototype.hitTest = function(a) {
    var b = this.getCollision("mcCollision"),
        c = a.getCollision("mcCollision");
    return b && c ? (1 === this.worldTransform.a && 0 === this.worldTransform.b && this.displayObjectUpdateTransform(), 1 === a.worldTransform.a && 0 === a.worldTransform.b && a.displayObjectUpdateTransform(), SATCollisionDetector.calculatePolyPolyIntersection(SDisplayObjectContainer.getCoordinatesMatrix(this.worldTransform, b.x, b.y, b.w, b.h), SDisplayObjectContainer.getCoordinatesMatrix(a.worldTransform,
        c.x, c.y, c.w, c.h))) : !1
};
SDisplayObjectContainer.hitTestByBounds = function(a, b, c, d) {
    return a && b && c && d ? (1 === a.worldTransform.a && 0 === a.worldTransform.b && a.displayObjectUpdateTransform(), 1 === c.worldTransform.a && 0 === c.worldTransform.b && c.displayObjectUpdateTransform(), SATCollisionDetector.calculatePolyPolyIntersection(SDisplayObjectContainer.getCoordinatesMatrix(a.worldTransform, b.x, b.y, b.w, b.h), SDisplayObjectContainer.getCoordinatesMatrix(c.worldTransform, d.x, d.y, d.w, d.h))) : !1
};
SDisplayObjectContainer.getCoordinatesMatrix = function(a, b, c, d, e) {
    var f = [];
    f.push([b, c]);
    f.push([b + d, c]);
    f.push([b + d, c + e]);
    f.push([b, c + e]);
    for (d = 0; d < f.length; d++) b = f[d][0], c = f[d][1], f[d][0] = a.a * b + a.c * c + a.tx, f[d][1] = a.b * b + a.d * c + a.ty;
    return f
};

function SSprite(a) {
    var b = window.PIXI.Texture.fromImage(a);
    this.name = a;
    PIXI.Sprite.call(this, b)
}
Application.subclass(SSprite, PIXI.Sprite);
SSprite.prototype.setPosition = function(a, b) {
    this.position.x = a;
    this.position.y = b
};
SSprite.prototype.setScale = function(a, b) {
    this.scale.x = a;
    this.scale.y = b || a
};

function SPixiText(a, b) {
    this.collisionsClips = [];
    this.debugRect = null;
    PIXI.Text.call(this, a, b);
    Application.RIGHT_TO_LEFT && (this.rtl = !0, this.canvas.setAttribute("dir", "rtl"), this.canvas.style.top = "-1000px", this.canvas.style.left = "-1000px", this.canvas.style.position = "absolute", this.canvas.style.opacity = 0, document.body.appendChild(this.canvas))
}
Application.subclass(SPixiText, PIXI.Text);
SPixiText.prototype.toggleCollision = function() {
    PIXI.Container.prototype.toggleCollision.call(this);
    this.showCollision()
};
SPixiText.prototype.showCollision = function() {
    for (; 0 < this.collisionsClips.length;) this.removeChild(this.collisionsClips[0]), this.collisionsClips[0].free(), this.collisionsClips[0] = null, this.collisionsClips.splice(0, 1);
    if (this.collisionView && this.debugRect) {
        var a = new SGraphics;
        a.drawRectangle(this.debugRect.x - this.position.x, this.debugRect.y - this.position.y, this.debugRect.w, this.debugRect.h, 1, 16776960, 268431616, 1, .1);
        this.collisionsClips.push(a);
        this.addChild(a)
    }
};
SPixiText.prototype.free = function() {
    Application.RIGHT_TO_LEFT && document.body.removeChild(this.canvas);
    this.context.dispose && this.context.dispose();
    this.canvas.dispose && this.canvas.dispose();
    this.destroy(!0);
    this.debugRect = this.collisionsClips = null
};

function SGraphics() {
    PIXI.Graphics.call(this)
}
Application.subclass(SGraphics, PIXI.Graphics);
SGraphics.prototype.free = function() {
    PIXI.Graphics.prototype.destroy.call(this)
};
SGraphics.prototype.drawLine = function(a, b, c, d, e, f, g) {
    this.lineStyle("undefined" === typeof f ? 1 : f, "undefined" === typeof e ? Common.COLOR_BLACK : e, "undefined" === typeof g ? 1 : g);
    this.moveTo(a, b);
    this.lineTo(c, d)
};
SGraphics.prototype.drawRectangle = function(a, b, c, d, e, f, g, h, k) {
    "undefined" === typeof g ? this.fillColor = void 0 : this.beginFill(g, "undefined" === typeof k ? 1 : k);
    this.lineStyle("undefined" === typeof e ? 1 : e, "undefined" === typeof f ? Common.COLOR_BLACK : f, "undefined" === typeof h ? 1 : h);
    this.drawRect(a, b, c, d);
    this.endFill()
};
SGraphics.prototype.drawCircle = function(a, b, c, d, e, f, g, h) {
    "undefined" === typeof f ? this.fillColor = void 0 : this.beginFill(f, "undefined" === typeof h ? 1 : h);
    this.lineStyle("undefined" === typeof d ? 1 : d, "undefined" === typeof e ? Common.COLOR_BLACK : e, "undefined" === typeof g ? 1 : g);
    PIXI.Graphics.prototype.drawCircle.call(this, a, b, c);
    this.endFill()
};
SGraphics.prototype.drawEllipse = function(a, b, c, d, e, f, g, h, k) {
    "undefined" === typeof g ? this.fillColor = void 0 : this.beginFill(g, "undefined" === typeof k ? 1 : k);
    this.lineStyle("undefined" === typeof e ? 1 : e, "undefined" === typeof f ? Common.COLOR_BLACK : f, "undefined" === typeof h ? 1 : h);
    PIXI.Graphics.prototype.drawEllipse.call(this, a, b, c, d);
    this.endFill()
};
SGraphics.prototype.drawCross = function(a, b, c, d, e, f) {
    this.lineStyle("undefined" === typeof e ? 1 : e, "undefined" === typeof d ? Common.COLOR_BLACK : d, "undefined" === typeof f ? 1 : f);
    this.moveTo(a - c, b - c);
    this.lineTo(a + c, b + c);
    this.moveTo(a - c, b + c);
    this.lineTo(a + c, b - c)
};
SGraphics.prototype.drawArrow = function(a, b, c, d, e, f, g, h, k, l) {
    "undefined" === typeof e && (e = 5);
    "undefined" === typeof h ? this.fillColor = void 0 : this.beginFill(h, "undefined" === typeof l ? 1 : l);
    this.lineStyle("undefined" === typeof f ? 1 : f, "undefined" === typeof g ? Common.COLOR_BLACK : g, "undefined" === typeof k ? 1 : k);
    this.moveTo(a, b);
    this.lineTo(c, d);
    a = new SVector3(c - a, d - b);
    a.normalize();
    this.lineTo(c - e * (a.x + a.y), d - e * (a.y - a.x));
    this.moveTo(c, d);
    this.lineTo(c - e * (a.x - a.y), d - e * (a.y + a.x))
};

function Animation(a) {
    SDisplayObjectContainer.call(this);
    this.m_interpolations = {};
    this.m_endedInterpolations = [];
    this.m_layerNames = {};
    this.screenLinked = null;
    this.screenActionStop = 0;
    this.atlas = [];
    this.dataLayers = [];
    this.params = null;
    this.name = a;
    this.loop = !0;
    (this.data = null === this.name || 0 === this.name.length ? null : window.globalAnimations[this.name]) ? (this.params = this.data.params, this.atlas = this.data.atlas, this.dataLayers = this.data.l) : Application.error("Animation :: clip with name [" + this.name + "] no found, check Asset(Animo Json) is register or loaded");
    this.indexFrames = {};
    this.indexActions = {};
    this.displayLayers = [];
    this.createLayers();
    this.m_changeTimeCounter = 0;
    null != this.data ? (this.m_changeTime = 1 / parseInt(this.data[Animation.FPS], 10) * 1E3, this.totalFrames = parseInt(this.data[Animation.FRAMES], 10)) : this.totalFrames = this.m_changeTime = 0;
    this.currentFrame = -1;
    this.setFrame(0);
    this.m_endAniFunction = this.m_endAniCaller = null;
    this.stoppedChildren = this.m_stopped = !1
}
Application.subclass(Animation, SDisplayObjectContainer);
Animation.POS_X = "x";
Animation.POS_Y = "y";
Animation.ASSET = "a";
Animation.ASSET_LIST = "i";
Animation.ASSET_ID = "k";
Animation.CENTER_X = "u";
Animation.CENTER_Y = "v";
Animation.SCALE_X = "w";
Animation.SCALE_Y = "h";
Animation.ANGLE = "g";
Animation.ALPHA = "t";
Animation.COLLISION = "c";
Animation.INSTANCE_NAME = "o";
Animation.BLEND_MODE = "b";
Animation.NAME = "n";
Animation.FPS = "r";
Animation.LAYER = "l";
Animation.FRAMES = "f";
Animation.FRAMES_ACTIONS = "fa";
Animation.ACTIONS = "a";
Animation.FRAME = "n";
Animation.INTERPOLATE = "p";
Animation.prototype.clearAll = function() {
    for (var a = 0; a < this.displayLayers.length; a++) null !== this.displayLayers[a] && (this.removeChild(this.displayLayers[a]), this.displayLayers[a].free(), this.displayLayers[a] = null);
    this.displayLayers = []
};
Animation.prototype.free = function() {
    this.m_layerNames = null;
    for (var a = 0; a < this.displayLayers.length; a++) null !== this.displayLayers[a] && (this.removeChild(this.displayLayers[a]), this.displayLayers[a].free(), this.displayLayers[a] = null);
    this.data = this.params = this.dataLayers = this.atlas = this.screenLinked = this.m_endAniFunction = this.m_endAniCaller = this.indexActions = this.indexFrames = this.displayLayers = null;
    if (this.m_interpolations)
        for (var b in this.m_interpolations) this.m_interpolations[b] && (this.m_interpolations[b].free(),
            this.m_interpolations[b] = null);
    this.m_endedInterpolations = this.m_interpolations = null;
    for (var c in this.collisions) this.collisions[c] = null;
    this.collisions = null;
    SDisplayObjectContainer.prototype.free.call(this)
};
Animation.prototype.setTint = function(a) {
    this.tint = a;
    for (var b = 0; b < this.displayLayers.length; b++) this.displayLayers[b] && (this.displayLayers[b].tint = a)
};
Animation.prototype.getLayer = function(a) {
    return this.m_layerNames[a] || null
};
Animation.prototype.stop = function() {
    this.m_stopped = !0
};
Animation.prototype.resume = function() {
    this.m_stopped = !1
};
Animation.prototype.gotoAndStop = function(a) {
    0 >= a && (a = 1);
    a > this.totalFrames && (a = this.totalFrames);
    this.setFrame(a - 1);
    this.stop()
};
Animation.prototype.gotoAndPlay = function(a) {
    0 >= a && (a = 1);
    a > this.totalFrames && (a = this.totalFrames);
    this.setFrame(a - 1);
    this.resume()
};
Animation.prototype.onEndAnimation = function(a, b) {
    this.m_endAniCaller = a;
    this.m_endAniFunction = b
};
Animation.prototype.update = function(a) {
    if (!this.stoppedChildren)
        for (var b = 0; b < this.displayLayers.length; b++)
            if (this.displayLayers[b] && this.displayLayers[b].children)
                for (var c = 0; c < this.displayLayers[b].children.length; c++) this.displayLayers[b].children[c].update && this.displayLayers[b].children[c].update(a);
    if (!(this.m_stopped || 1 >= this.totalFrames)) {
        for (var d in this.m_interpolations) this.m_interpolations[d] && this.m_interpolations[d].update(a) && this.m_endedInterpolations.push(d);
        if (this.m_endedInterpolations)
            for (; 0 <
                this.m_endedInterpolations.length;) b = this.m_endedInterpolations.pop(), this.m_interpolations[b].free(), this.m_interpolations[b] = null;
        this.m_changeTimeCounter += a;
        this.m_changeTimeCounter >= this.m_changeTime && (this.setFrame(this.currentFrame), this.m_changeTimeCounter -= this.m_changeTime, this.currentFrame++, this.currentFrame >= this.totalFrames && (this.loop ? this.currentFrame = 0 : this.m_stopped = !0, null !== this.m_endAniCaller && null !== this.m_endAniFunction && this.m_endAniFunction.call(this.m_endAniCaller, this)))
    }
};
Animation.prototype.setFrame = function(a) {
    this.currentFrame = a;
    var b, c;
    for (c = 0; c < this.dataLayers.length; c++)(b = this.indexFrames[c + "_" + a]) && this.setSprite(c, b);
    if (this.indexActions["act_" + a])
        for (c = 0; c < this.indexActions["act_" + a].length; c++) AnimationActions.applyAction(this, this.indexActions["act_" + a][c])
};
Animation.prototype.createLayers = function() {
    for (var a, b = 0; b < this.dataLayers.length; b++)
        if (this.dataLayers[b][Animation.FRAMES]) {
            for (a = 0; a < this.dataLayers[b][Animation.FRAMES].length; a++) this.indexFrames[b + "_" + this.dataLayers[b][Animation.FRAMES][a][Animation.FRAME]] = this.dataLayers[b][Animation.FRAMES][a];
            this.displayLayers.push(null);
            this.m_layerNames[this.dataLayers[b][Animation.NAME]] = null
        } else if (this.dataLayers[b][Animation.FRAMES_ACTIONS])
        for (a = 0; a < this.dataLayers[b][Animation.FRAMES_ACTIONS].length; a++) this.parseActions(this.dataLayers[b][Animation.FRAMES_ACTIONS][a][Animation.FRAME],
            this.dataLayers[b][Animation.FRAMES_ACTIONS][a])
};
Animation.prototype.parseActions = function(a, b) {
    var c = "act_" + a;
    this.indexActions[c] || (this.indexActions[c] = []);
    for (var d = Common.trim(b[Animation.ACTIONS]).split(";"), e = 0; e < d.length; e++) {
        var f = d[e].split(":"),
            g = new AnimationActions;
        g.name = Common.trim(f[0].toLowerCase());
        1 < f.length && (g.params = Common.trim(f[1]));
        g.name === AnimationActions.ACT_STOP_GUI && (this.screenActionStop = a);
        this.indexActions[c].push(g)
    }
};
Animation.prototype.getInstance = function(a) {
    this[a] === Application.UNDEFINED && Application.error("Instance [" + a + "] no found in clip");
    return this[a]
};
Animation.prototype.getInstanceNotException = function(a) {
    return this[a] === Application.UNDEFINED ? null : this[a]
};
Animation.prototype.setSprite = function(a, b) {
    this.m_interpolations[a] && (this.m_interpolations[a].free(), this.m_interpolations[a] = null);
    b[Animation.CENTER_X] = b[Animation.CENTER_X] || 0;
    b[Animation.CENTER_Y] = b[Animation.CENTER_Y] || 0;
    1 === b[Animation.COLLISION] && b[Animation.INSTANCE_NAME] && 1 < b.w && 1 < b.h && (this.collisions[b[Animation.INSTANCE_NAME]] = new Rectangle(b.x, b.y, b.w, b.h), "mcCollision" === b[Animation.INSTANCE_NAME] && (this.hitArea = this.collisions[b[Animation.INSTANCE_NAME]]));
    if (-1 === b[Animation.ASSET_ID]) null !==
        this.displayLayers[a] && (this.displayLayers[a].texture = window.PIXI.Texture.EMPTY);
    else {
        var c = this.atlas[b[Animation.ASSET_LIST]] + "_" + b[Animation.ASSET_ID];
        null === this.displayLayers[a] ? (this.displayLayers[a] = new window.PIXI.Sprite(window.PIXI.Texture.fromImage(c)), Application.RENDER_MODE === Application.RENDER_WEBGL && (this.displayLayers[a].blendMode = this.dataLayers[a][Animation.BLEND_MODE] || 0), this.addChild(this.displayLayers[a]), this.m_layerNames[this.dataLayers[a][Animation.NAME]] = this.displayLayers[a]) :
            this.displayLayers[a].texture = PIXI.Texture.fromImage(c, !1, 0);
        this.displayLayers[a].position.x = b[Animation.POS_X];
        this.displayLayers[a].position.y = b[Animation.POS_Y];
        b[Animation.ANGLE] = b[Animation.ANGLE] || 0;
        this.displayLayers[a].rotation = b[Animation.ANGLE] * Math.PI / 180;
        b[Animation.SCALE_X] === Application.UNDEFINED && (b[Animation.SCALE_X] = 1);
        this.displayLayers[a].scale.x = b[Animation.SCALE_X];
        b[Animation.SCALE_Y] === Application.UNDEFINED && (b[Animation.SCALE_Y] = 1);
        this.displayLayers[a].scale.y = b[Animation.SCALE_Y];
        b[Animation.ALPHA] === Application.UNDEFINED && (b[Animation.ALPHA] = 1);
        this.displayLayers[a].alpha = b[Animation.ALPHA];
        b[Animation.INTERPOLATE] && 0 !== b[Animation.INTERPOLATE] && (c = this.indexFrames[a + "_" + b[Animation.INTERPOLATE]], c[Animation.CENTER_X] = c[Animation.CENTER_X] || 0, c[Animation.CENTER_Y] = c[Animation.CENTER_Y] || 0, c[Animation.ANGLE] = c[Animation.ANGLE] || 0, c[Animation.SCALE_X] === Application.UNDEFINED && (c[Animation.SCALE_X] = 1), c[Animation.SCALE_Y] === Application.UNDEFINED && (c[Animation.SCALE_Y] = 1), c[Animation.ALPHA] ===
            Application.UNDEFINED && (c[Animation.ALPHA] = 1), this.m_interpolations[a] = new Interpolation(this.displayLayers[a], !0, b, c, 1E3 * (c[Animation.FRAME] - b[Animation.FRAME]) / this.data[Animation.FPS]));
        b[Animation.INSTANCE_NAME] && "" !== b[Animation.INSTANCE_NAME] && (this.displayLayers[a].name = b[Animation.INSTANCE_NAME], this[b[Animation.INSTANCE_NAME]] = this.displayLayers[a])
    }
};

function AnimationActions() {
    this.params = this.name = null
}
AnimationActions.ACT_STOP = "s";
AnimationActions.ACT_STOP_GUI = "sg";
AnimationActions.ACT_FINISH_GUI = "fg";
AnimationActions.ACT_PLAY = "p";
AnimationActions.ACT_PLAY_SOUND = "ps";
AnimationActions.ACT_STOP_SOUND = "ss";
AnimationActions.ACT_GO_TO_AND_PLAY = "gp";
AnimationActions.ACT_GO_TO_AND_STOP = "gs";
AnimationActions.ACT_GO_TO_RANDOM_AND_STOP = "rs";
AnimationActions.ACT_GO_TO_RANDOM_AND_PLAY = "rp";
AnimationActions.ACT_CREATE_FX = "fx";
AnimationActions.ACT_CALL_FUNCTION = "f";
AnimationActions.applyAction = function(a, b) {
    switch (b.name) {
        case AnimationActions.ACT_STOP:
            a.stop();
            break;
        case AnimationActions.ACT_PLAY:
            a.resume();
            break;
        case AnimationActions.ACT_GO_TO_AND_PLAY:
            a.gotoAndPlay(parseInt(b.params, 10));
            break;
        case AnimationActions.ACT_GO_TO_AND_STOP:
            a.gotoAndStop(parseInt(b.params, 10));
            break;
        case AnimationActions.ACT_GO_TO_RANDOM_AND_STOP:
            var c = Common.randomInt(1, a.totalFrames);
            a.gotoAndStop(c);
            break;
        case AnimationActions.ACT_GO_TO_RANDOM_AND_PLAY:
            c = Common.randomInt(1, a.totalFrames);
            a.gotoAndPlay(c);
            break;
        case AnimationActions.ACT_PLAY_SOUND:
            Application.instance.playSound(Common.trim(b.params));
            break;
        case AnimationActions.ACT_STOP_SOUND:
            Application.instance.stopSound(Common.trim(b.params));
            break;
        case AnimationActions.ACT_CREATE_FX:
            b.params = b.params.replace(/\s/g, "");
            var d = b.params.split(","),
                c = d[0],
                e = 1 < d.length ? parseInt(d[1], 10) : 0,
                f = 2 < d.length ? parseInt(d[2], 10) : 0,
                d = 3 < d.length ? a.getInstance(d[3]) : a.screenLinked.canvas;
            Application.instance.effectManager.createEffect(c, e, f, d);
            break;
        case AnimationActions.ACT_CALL_FUNCTION:
            break;
        case AnimationActions.ACT_STOP_GUI:
            if (a.screenLinked) a.screenLinked.onStopScreen();
            break;
        case AnimationActions.ACT_FINISH_GUI:
            if (a.screenLinked) a.screenLinked.onFinishScreen();
            break;
        default:
            Application.warn("Please define Action[ " + b.name + " ] in animation")
    }
};

function Interpolation(a, b, c, d, e) {
    this.m_sprite = a;
    this.m_smooth = b;
    this.m_alpha = c[Animation.ALPHA];
    this.m_angle = c[Animation.ANGLE];
    this.m_scaleX = c[Animation.SCALE_X];
    this.m_scaleY = c[Animation.SCALE_Y];
    this.m_start = c;
    this.m_end = d;
    this.m_totalTime = e;
    this.m_time = 0;
    this.m_x = c[Animation.POS_X];
    this.m_y = c[Animation.POS_Y];
    this.m_startCornerY = this.m_startCornerX = 0;
    this.m_interpolateX = c[Animation.POS_X] !== d[Animation.POS_X];
    this.m_interpolateY = c[Animation.POS_Y] !== d[Animation.POS_Y];
    this.m_interpolateScaleX =
        c[Animation.SCALE_X] !== d[Animation.SCALE_X];
    this.m_interpolateScaleY = c[Animation.SCALE_Y] !== d[Animation.SCALE_Y];
    this.m_interpolateAlpha = c[Animation.ALPHA] !== d[Animation.ALPHA];
    if (this.m_interpolateAngle = c[Animation.ANGLE] !== d[Animation.ANGLE]) this.m_c1 = new Vector2D(c[Animation.SCALE_X] * c[Animation.CENTER_X], c[Animation.SCALE_Y] * c[Animation.CENTER_Y]), this.m_c1.rotate(Math.PI * c[Animation.ANGLE] / 180), a = new Vector2D(c[Animation.POS_X], c[Animation.POS_Y]), this.m_c1.add(a), this.m_c2 = new Vector2D(d[Animation.SCALE_X] *
        c[Animation.CENTER_X], d[Animation.SCALE_Y] * c[Animation.CENTER_Y]), this.m_c2.rotate(Math.PI * d[Animation.ANGLE] / 180), a = new Vector2D(d[Animation.POS_X], d[Animation.POS_Y]), this.m_c2.add(a), this.m_c = new Vector2D
}
Interpolation.prototype.update = function(a) {
    var b = !1;
    this.m_time += a;
    this.m_time >= this.m_totalTime && (b = !0, this.m_time = this.m_totalTime);
    this.m_interpolateAlpha && (this.m_alpha = this.interpolate(this.m_start[Animation.ALPHA], this.m_end[Animation.ALPHA], this.m_time));
    this.m_interpolateAngle && (this.m_angle = this.interpolate(this.m_start[Animation.ANGLE], this.m_end[Animation.ANGLE], this.m_time));
    this.m_interpolateScaleX && (this.m_scaleX = this.interpolate(this.m_start[Animation.SCALE_X], this.m_end[Animation.SCALE_X],
        this.m_time));
    this.m_interpolateScaleY && (this.m_scaleY = this.interpolate(this.m_start[Animation.SCALE_Y], this.m_end[Animation.SCALE_Y], this.m_time));
    var c, d, e;
    if (this.m_interpolateAngle) d = .017453292519943295 * this.m_angle, this.m_c.x = this.interpolate(this.m_c1.x, this.m_c2.x, this.m_time), this.m_c.y = this.interpolate(this.m_c1.y, this.m_c2.y, this.m_time), c = new Vector2D(this.m_scaleX * this.m_start[Animation.CENTER_X], this.m_scaleY * this.m_start[Animation.CENTER_Y]), c.rotate(d), e = new Vector2D(this.m_scaleX *
        this.m_startCornerX, this.m_scaleY * this.m_startCornerY), e.rotate(d), a = this.m_c.x - c.x - e.x, c = this.m_c.y - c.y - e.y;
    else {
        this.m_x = this.m_start[Animation.POS_X];
        this.m_interpolateX && (this.m_x = this.interpolate(this.m_start[Animation.POS_X], this.m_end[Animation.POS_X], this.m_time));
        this.m_y = this.m_start[Animation.POS_Y];
        this.m_interpolateY && (this.m_y = this.interpolate(this.m_start[Animation.POS_Y], this.m_end[Animation.POS_Y], this.m_time));
        var f = this.m_startCornerX,
            g = this.m_startCornerY;
        a = this.m_x;
        c = this.m_y;
        0 !== this.m_angle ? (d = .017453292519943295 * this.m_angle, e = Math.cos(d), d = Math.sin(d), 1 !== this.m_scaleX && (f *= this.m_scaleX), 1 !== this.m_scaleY && (g *= this.m_scaleY), a += g * d - f * e, c += -f * d - g * e) : (1 !== this.m_scaleX && (f *= this.m_scaleX), 1 !== this.m_scaleY && (g *= this.m_scaleY), a -= f, c -= g)
    }
    this.m_sprite.position.x = a;
    this.m_sprite.position.y = c;
    this.m_sprite.scale.x = this.m_scaleX;
    this.m_sprite.scale.y = this.m_scaleY;
    this.m_sprite.rotation = .017453292519943295 * this.m_angle;
    this.m_sprite.alpha = this.m_alpha;
    return b
};
Interpolation.prototype.interpolate = function(a, b, c) {
    return c * (b - a) / this.m_totalTime + a
};
Interpolation.prototype.toString = function() {
    return "INTERPOLATION:   " + this.m_start + " to " + this.m_end
};
Interpolation.prototype.free = function() {
    this.m_sprite = this.m_c2 = this.m_c1 = this.m_c = this.m_end = this.m_start = null
};

function NanoEffect(a, b, c, d, e) {
    this.x = b;
    this.y = c;
    this.canvas = d;
    this.name = a;
    this.isAwaitingDelete = !1;
    this.data = window.nano.effects[a];
    this.params = e || {};
    this.emitters = [];
    this.emittersIndex = {};
    this.emitterCanvas = [];
    if (this.canvas)
        for (a = 0; a < this.data.length; a++) b = this.data[a].emitter, window.nano.emitters[b] ? (c = Application.instance.addDisplayContainer(), this.canvas.addChild(c), this.emitterCanvas.push(c), b = new NanoEmitter(this, window.nano.emitters[b], c), b.ox = this.data[a].pos_x, b.oy = this.data[a].pos_y, b.name =
            this.data[a].emitter, this.emittersIndex[this.data[a].emitter] = b, this.emitters.push(b)) : Application.warn("Emiiter [" + b + "] no found");
    else this.isAwaitingDelete = !0
}
NanoEffect.prototype.setPause = function(a) {
    for (var b = 0; b < this.emitters.length; b++) this.emitters[b].pause = a
};
NanoEffect.prototype.setStopAndRemove = function(a) {
    for (var b = 0; b < this.emitters.length; b++) this.emitters[b].stopAndRemove = a
};
NanoEffect.prototype.update = function(a) {
    for (var b = 0; b < this.emitters.length; b++) this.emitters[b] && (this.emitters[b].update(a), this.emitters[b].isAwaitingDelete && (delete this.emittersIndex[this.emitters[b].name], this.emitters[b].free(), this.emitters[b] = null, this.emitters.splice(b, 1), this.canvas.removeChild(this.emitterCanvas[b]), this.emitterCanvas[b].free(), this.emitterCanvas[b] = null, this.emitterCanvas.splice(b, 1), b--));
    0 === this.emitters.length && (this.isAwaitingDelete = !0)
};
NanoEffect.prototype.free = function() {
    for (var a in this.emittersIndex) delete this.emittersIndex[a];
    this.emittersIndex = null;
    for (a = 0; a < this.emitters.length; a++) this.emitters[a].free(), this.emitters[a] = null, this.canvas.removeChild(this.emitterCanvas[a]), this.emitterCanvas[a].free(), this.emitterCanvas[a] = null;
    this.emitters = [];
    this.emitterCanvas = [];
    this.canvas = null
};
NanoEffect.random = function(a, b) {
    return Math.random() * (b - a) + a
};
NanoEffect.randomInt = function(a, b) {
    return a + Math.floor(Math.random() * (b - a + 1))
};

function NanoEmitter(a, b, c) {
    this.effect = a;
    this.data = b;
    this.data[NanoParticle.CLIP_ARRAY] = this.data[NanoParticle.CLIP].split(",");
    this.data[NanoParticle.TINT_ARRAY] = this.data[NanoParticle.TINT].split(",");
    this.canvas = c;
    this.frequency = b[NanoEmitter.FRECUENCY];
    this.delay = b[NanoEmitter.DELAY];
    this.particles = [];
    this.isAwaitingDelete = !1;
    this.oy = this.ox = this.counter = 0;
    this.name = "";
    this.state = NanoEmitter.ST_INTRO;
    this.stopAndRemove = this.pause = !1
}
NanoEmitter.ST_INTRO = 1;
NanoEmitter.ST_EMISSION = 2;
NanoEmitter.FRECUENCY = "em_frequency";
NanoEmitter.QUANTITY_MIN = "em_quantity_min";
NanoEmitter.QUANTITY_MAX = "em_quantity_max";
NanoEmitter.MAX_PARTICLES = "em_max_particles";
NanoEmitter.ANGLE_MIN = "em_angle_min";
NanoEmitter.ANGLE_MAX = "em_angle_max";
NanoEmitter.ROTATION_SPEED = "em_rotation_speed";
NanoEmitter.DISTRIBUTE = "em_distribute";
NanoEmitter.DELAY = "em_delay";
NanoEmitter.POS_X = "pos_x";
NanoEmitter.POS_Y = "pos_y";
NanoEmitter.prototype.createParticles = function() {
    if (!(this.pause || this.stopAndRemove || 0 !== this.data[NanoEmitter.MAX_PARTICLES] && this.counter >= this.data[NanoEmitter.MAX_PARTICLES])) {
        var a = NanoEffect.randomInt(this.data[NanoEmitter.QUANTITY_MIN], this.data[NanoEmitter.QUANTITY_MAX]),
            b, c;
        this.data[NanoEmitter.DISTRIBUTE] && (c = 1 < a ? (this.data[NanoEmitter.ANGLE_MAX] - this.data[NanoEmitter.ANGLE_MIN]) / (a - 1) : this.data[NanoEmitter.ANGLE_MIN]);
        for (var d = 0; d < a; d++) b = this.data[NanoEmitter.DISTRIBUTE] ? new NanoParticle(this,
            this.data[NanoEmitter.ANGLE_MIN] + d * c) : new NanoParticle(this, NanoEffect.random(this.data[NanoEmitter.ANGLE_MIN], this.data[NanoEmitter.ANGLE_MAX])), this.counter++, this.particles.push(b)
    }
};
NanoEmitter.prototype.update = function(a) {
    switch (this.state) {
        case NanoEmitter.ST_INTRO:
            0 >= this.delay && (this.createParticles(), this.state = NanoEmitter.ST_EMISSION);
            this.delay -= a;
            break;
        case NanoEmitter.ST_EMISSION:
            this.frequency -= a;
            0 >= this.frequency && (this.createParticles(), this.frequency = this.data[NanoEmitter.FRECUENCY]);
            for (var b = 0; b < this.particles.length; b++) this.particles[b].update(a), this.particles[b].isAwaitingDelete && (this.particles[b].free(), this.particles[b] = null, this.particles.splice(b, 1), b--);
            0 < this.data[NanoEmitter.MAX_PARTICLES] && this.counter >= this.data[NanoEmitter.MAX_PARTICLES] && 0 === this.particles.length && (this.isAwaitingDelete = !0);
            this.stopAndRemove && 0 === this.particles.length && (this.isAwaitingDelete = !0)
    }
};
NanoEmitter.prototype.free = function() {
    for (var a = 0; a < this.particles.length; a++) this.particles[a].free();
    this.data = this.effect = null
};

function NanoParticle(a, b) {
    this.canvas = a.canvas;
    this.data = a.data;
    this.isAwaitingDelete = !1;
    this.time = 0;
    var c = Common.getRandomFromArray(this.data[NanoParticle.CLIP_ARRAY]);
    this.clip = PoolClips.instance.getClip(c);
    this.canvas && this.canvas.children ? this.canvas.addChild(this.clip) : this.isAwaitingDelete = !0;
    this.clip.position.x = a.effect.x + a.ox + NanoEffect.random(this.data[NanoParticle.X_MIN], this.data[NanoParticle.X_MAX]);
    this.clip.position.y = a.effect.y + a.oy + NanoEffect.random(this.data[NanoParticle.Y_MIN],
        this.data[NanoParticle.Y_MAX]);
    this.clip.scale.x = this.clip.scale.y = NanoEffect.random(this.data[NanoParticle.SCALE_MIN], this.data[NanoParticle.SCALE_MAX]);
    this.clip.rotation = NanoEffect.random(this.data[NanoParticle.ROTATION_MIN], this.data[NanoParticle.ROTATION_MAX]);
    this.clip.alpha = NanoEffect.random(this.data[NanoParticle.ALPHA_MIN], this.data[NanoParticle.ALPHA_MAX]);
    this.timelife = NanoEffect.randomInt(this.data[NanoParticle.TIMELIFE_MIN], this.data[NanoParticle.TIMELIFE_MAX]);
    this.rotationSpeed = NanoEffect.random(this.data[NanoParticle.ROTATION_SPEED_MIN],
        this.data[NanoParticle.ROTATION_SPEED_MAX]);
    this.clip.blendMode = window.PIXI.BLEND_MODES[this.data[NanoParticle.BLEND]];
    c = NanoEffect.random(this.data[NanoParticle.SPEED_MIN], this.data[NanoParticle.SPEED_MAX]);
    this.ox = this.clip.position.x;
    this.oy = this.clip.position.y;
    this.vx = c * Math.cos(b);
    this.vy = c * Math.sin(b);
    0 === this.data[NanoParticle.ROTATION_MIN] && 0 === this.data[NanoParticle.ROTATION_MAX] && (this.clip.rotation = b)
}
NanoParticle.CLIP = "pt_clip";
NanoParticle.TINT = "pt_tint";
NanoParticle.CLIP_ARRAY = "pt_clip_array";
NanoParticle.TINT_ARRAY = "pt_tint_array";
NanoParticle.BLEND = "pt_blend";
NanoParticle.X_MIN = "pt_x_min";
NanoParticle.X_MAX = "pt_x_max";
NanoParticle.Y_MIN = "pt_y_min";
NanoParticle.Y_MAX = "pt_y_max";
NanoParticle.SCALE_MIN = "pt_scale_min";
NanoParticle.SCALE_MAX = "pt_scale_max";
NanoParticle.SCALE_SPEED = "pt_scale_speed";
NanoParticle.SPEED_MIN = "pt_speed_min";
NanoParticle.SPEED_MAX = "pt_speed_max";
NanoParticle.ACCELERATION_X = "pt_acceleration_x";
NanoParticle.ACCELERATION_Y = "pt_acceleration_y";
NanoParticle.TIMELIFE_MIN = "pt_timelife_min";
NanoParticle.TIMELIFE_MAX = "pt_timelife_max";
NanoParticle.ROTATION_MIN = "pt_rotation_min";
NanoParticle.ROTATION_MAX = "pt_rotation_max";
NanoParticle.ROTATION_SPEED_MIN = "pt_rotation_speed_min";
NanoParticle.ROTATION_SPEED_MAX = "pt_rotation_speed_max";
NanoParticle.ALPHA_MIN = "pt_alpha_min";
NanoParticle.ALPHA_MAX = "pt_alpha_max";
NanoParticle.ALPHA_SPEED = "pt_alpha_speed";
NanoParticle.prototype.update = function(a) {
    this.time += a;
    this.clip.update && this.clip.update(a);
    this.clip.position.x = this.ox + this.vx * this.time + 5E-4 * this.data[NanoParticle.ACCELERATION_X] * this.time * this.time;
    this.clip.position.y = this.oy + this.vy * this.time + 5E-4 * this.data[NanoParticle.ACCELERATION_Y] * this.time * this.time;
    0 !== this.rotationSpeed && (this.clip.rotation += .01 * this.rotationSpeed * a);
    this.clip.scale.x += .001 * this.data[NanoParticle.SCALE_SPEED] * a;
    this.clip.scale.y += .001 * this.data[NanoParticle.SCALE_SPEED] *
        a;
    this.clip.alpha += .001 * this.data[NanoParticle.ALPHA_SPEED] * a;
    1 < this.clip.alpha && (this.clip.alpha = 1);
    0 >= this.clip.alpha && (this.isAwaitingDelete = !0);
    this.time >= this.timelife && (this.isAwaitingDelete = !0)
};
NanoParticle.prototype.free = function() {
    PoolClips.instance.releaseClip(this.clip);
    this.data = this.canvas = this.clip = null
};

function SJsonLoader(a) {
    this.json = this.ajaxRequest = null;
    this.url = a;
    this.baseUrl = a.replace(/[^\/]*$/, "");
    this.m_errorFunction = this.m_errorCaller = this.m_loadFunction = this.m_loadCaller = null
}
SJsonLoader.prototype.addLoadedListener = function(a, b) {
    this.m_loadCaller = a;
    this.m_loadFunction = b
};
SJsonLoader.prototype.addErrorListener = function(a, b) {
    this.m_errorCaller = a;
    this.m_errorFunction = b
};
SJsonLoader.prototype.load = function() {
    if (this.ajaxRequest = Common.ajaxRequest()) {
        var a = this;
        this.ajaxRequest.onreadystatechange = function() {
            a.onJSONLoaded()
        };
        this.ajaxRequest.open("GET", this.url, !0);
        this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json");
        this.ajaxRequest.send(null)
    } else Application.error("Not found [ AJAX object ] in Browser")
};
SJsonLoader.prototype.onJSONLoaded = function() {
    4 === this.ajaxRequest.readyState && (200 === this.ajaxRequest.status || -1 === window.location.protocol.indexOf("http") ? (this.json = JSON.parse(this.ajaxRequest.responseText), this.m_loadCaller && this.m_loadFunction ? this.m_loadFunction.call(this.m_loadCaller, this) : this.m_loadFunction && this.m_loadFunction(this)) : this.m_erroCaller && this.m_errorFunction ? this.m_errorFunction.call(this.m_erroCaller, this) : this.m_errorFunction && this.m_errorFunction(this))
};

function SndManager() {
    this.callbackBug = this.m_muted = !1
}
SndManager.instance = null;
SndManager.prototype.isMuted = function() {
    return this.m_muted
};
SndManager.prototype.play = function(a) {};
SndManager.prototype.stop = function(a) {};
SndManager.prototype.pauseSound = function(a) {};
SndManager.prototype.pauseAll = function() {};
SndManager.prototype.resumeAll = function() {};
SndManager.prototype.stopAllSounds = function() {};
SndManager.prototype.toggleMute = function() {
    this.m_muted = !this.m_muted;
    Application.info("toggleMute: " + this.m_muted)
};
SndManager.prototype.stopAllMusics = function() {};
SndManager.prototype.isPlayingSound = function(a) {};
SndManager.prototype.resumeSound = function(a) {};
SndManager.prototype.setVolumeById = function(a, b) {};

function SndManagerSimple() {
    SndManager.call(this);
    SndManager.instance = this;
    var a = window.config.sounds,
        b = Application.ASSETS_PATH + "media/sounds/";
    this.soundList = {};
    this.soundPlaying = [];
    this.masterVolume = 1;
    for (var c = 0; c < a.length; ++c) {
        var d = {};
        d.src = b + a[c].file + ".ogg";
        d.id = a[c].id;
        d.loop = 0 === parseInt(a[c].loops, 10) ? !0 : !1;
        d.volume = a[c].vol;
        this.soundList[a[c].id] = d
    }
}
Application.subclass(SndManagerSimple, SndManager);
SndManagerSimple.MAX_CHANNELS = 6;
SndManagerSimple.prototype.onSoundComplete = function(a) {
    for (var b = a.target, c = 0; c < this.soundPlaying.length; c++)
        if (this.soundPlaying[c] === b) {
            this.soundPlaying.splice(c, 1);
            break
        }
    a.target = null
};
SndManagerSimple.prototype.play = function(a) {
    if (!this.m_muted)
        if ("undefined" === typeof this.soundList[a]) Application.warn("[SndManagerSimple] sound with id [" + a + "] no found");
        else if (this.soundPlaying.length >= SndManagerSimple.MAX_CHANNELS) Application.warn("[SndManagerSimple] max channels adminted [" + a + "]");
    else {
        a = this.soundList[a];
        if (a.loop)
            for (var b = 0; b < this.soundPlaying.length; b++)
                if (this.soundPlaying[b].id === a.id) return;
        var b = document.createElement("audio"),
            c = this;
        b.addEventListener("ended", function(a) {
            c.onSoundComplete(a)
        }, !1);
        b.src = a.src;
        b.id = a.id;
        b.preload = "auto";
        b.load();
        b.volume = a.volume * this.masterVolume;
        b.loop = a.loop;
        b.play();
        this.soundPlaying.push(b)
    }
};
SndManagerSimple.prototype.stop = function(a) {
    for (var b = this.soundPlaying.length - 1; 0 <= b; --b) this.soundPlaying[b].id === a && ("undefined" !== typeof this.soundPlaying[b].dispose ? this.soundPlaying[b].dispose() : this.soundPlaying[b].pause(), this.soundPlaying[b] = null, this.soundPlaying.splice(b, 1))
};
SndManagerSimple.prototype.isPlayingSound = function(a) {
    for (var b = this.soundPlaying.length - 1; 0 <= b; --b)
        if (this.soundPlaying[b].id === a) return !0;
    return !1
};
SndManagerSimple.prototype.pauseSound = function(a) {
    for (var b = this.soundPlaying.length - 1; 0 <= b; --b) this.soundPlaying[b].id === a && this.soundPlaying[b].pause()
};
SndManagerSimple.prototype.resumeSound = function(a) {
    for (var b = this.soundPlaying.length - 1; 0 <= b; --b) this.soundPlaying[b].id === a && this.soundPlaying[b].play()
};
SndManagerSimple.prototype.setMasterVolume = function(a) {
    this.masterVolume = a;
    for (a = this.soundPlaying.length - 1; 0 <= a; --a) {
        var b = this.soundPlaying[a];
        b.volume *= this.masterVolume
    }
};
SndManagerSimple.prototype.pauseAll = function() {
    for (var a = this.soundPlaying.length - 1; 0 <= a; --a) this.soundPlaying[a].pause()
};
SndManagerSimple.prototype.resumeAll = function() {
    if (!this.m_muted)
        for (var a = this.soundPlaying.length - 1; 0 <= a; --a) this.soundPlaying[a].play()
};
SndManagerSimple.prototype.stopAllSounds = function() {
    for (var a = this.soundPlaying.length - 1; 0 <= a; a--) "undefined" !== typeof this.soundPlaying[a].dispose ? this.soundPlaying[a].dispose() : this.soundPlaying[a].pause(), this.soundPlaying[a] = null;
    this.soundPlaying = []
};
SndManagerSimple.prototype.stopAllMusics = function() {
    for (var a = this.soundPlaying.length - 1; 0 <= a; a--) this.soundPlaying[a].loop && ("undefined" !== typeof this.soundPlaying[a].dispose ? this.soundPlaying[a].dispose() : this.soundPlaying[a].pause(), this.soundPlaying[a] = null, this.soundPlaying.splice(a, 1))
};
SndManagerSimple.prototype.toggleMute = function() {
    SndManager.prototype.toggleMute.call(this);
    this.m_muted ? this.pauseAll() : this.resumeAll()
};
SndManagerSimple.prototype.free = function() {
    this.stopAllSounds();
    for (var a in this.soundList) this.soundList[a] = null;
    this.soundPlaying = this.soundList = null
};
SndManagerSimple.prototype.setVolumeById = function(a, b) {
    for (var c = this.soundPlaying.length - 1; 0 <= c; c--) this.soundPlaying[c].id === a && (this.soundPlaying[c].volume = b)
};

function SndManagerIE(a, b) {
    SndManager.call(this);
    SndManager.instance = this;
    window.SwitEntryPoint.infoBrowser.isIE || Application.error("Using SndManagerIE for no IE browsers");
    this.sounds = {};
    this.soundList = a;
    this.callback = b;
    this.soundsLoaded = 0;
    this.soundsTotal = a.length;
    GuiLoader.instance && (GuiLoader.instance.totalFiles = this.soundsTotal);
    window.soundManager.setup({
        url: "media/swf/",
        flashVersion: 9,
        useHTML5Audio: !0,
        preferFlash: !0,
        useHighPerformance: !0,
        flashLoadTimeout: 2E3,
        noSWFCache: !1,
        consoleOnly: !0,
        wmode: null,
        debugMode: !1,
        onready: this.onReady,
        ontimeout: function() {
            Application.instance.onErrorSndManagerIE()
        }
    })
}
Application.subclass(SndManagerIE, SndManager);
SndManagerIE.prototype.onReady = function() {
    for (var a = Application.ASSETS_PATH + "media/sounds/", b = SndManager.instance.soundList, c = window.soundManager, d = 0; d < b.length; d++) c.createSound({
        id: b[d].id,
        url: a + b[d].file + ".mp3",
        autoLoad: !0,
        onload: function() {
            SndManager.instance.onLoad(this.url)
        }
    }), SndManager.instance.sounds[b[d].id] = b[d]
};
SndManagerIE.prototype.onLoad = function(a) {
    this.soundsLoaded++;
    Application.log("SndManagerIE.onLoad: " + a + " " + this.soundsLoaded + "/" + this.soundsTotal);
    GuiLoader.instance && GuiLoader.instance.load();
    this.soundsLoaded === this.soundsTotal && this.callback()
};
SndManagerIE.prototype.play = function(a) {
    if (!this.m_muted && "undefined" !== typeof this.sounds[a]) {
        var b = window.soundManager,
            c = this.sounds[a].loops;
        1 !== c ? (0 === c && (c = 999999), 0 === b.sounds[a].instanceCount && b.play(a, {
            volume: 100 * this.sounds[a].vol,
            loops: c
        })) : b.play(a, {
            volume: 100 * this.sounds[a].vol
        })
    }
};
SndManagerIE.prototype.stop = function(a) {
    window.soundManager.stop(a)
};
SndManagerIE.prototype.pauseAll = function() {
    window.soundManager.pauseAll()
};
SndManagerIE.prototype.resumeAll = function() {
    this.m_muted || window.soundManager.resumeAll()
};
SndManagerIE.prototype.stopAllSounds = function() {
    window.soundManager.stopAll()
};
SndManagerIE.prototype.toggleMute = function() {
    SndManager.prototype.toggleMute.call(this);
    this.m_muted ? window.soundManager.pauseAll() : window.soundManager.resumeAll()
};
SndManagerIE.prototype.stopAllMusics = function() {
    var a = window.soundManager,
        b, c;
    for (b = a.soundIDs.length - 1; 0 <= b; b--) c = a.sounds[a.soundIDs[b]], 1 === c.playState && (c = c.id, 0 === this.sounds[c].loops && window.soundManager.stop(c))
};
SndManagerIE.prototype.isPlayingSound = function(a) {
    return (a = window.soundManager.getSoundById(a)) ? 1 === a.playState : !1
};
SndManagerIE.prototype.resumeSound = function(a) {
    (a = window.soundManager.getSoundById(a)) && a.resume()
};
SndManagerIE.prototype.setVolumeById = function(a, b) {
    var c = window.soundManager.getSoundById(a);
    c && 1 === c.playState && c.setVolume(100 * b)
};

function SndManagerWeb(a, b) {
    SndManager.call(this);
    SndManager.instance = this;
    this.soundjs = window.createjs;
    this.soundList = {};
    this.callback = b;
    var c = window.SwitEntryPoint.infoBrowser.browserVersion;
    window.SwitEntryPoint.infoBrowser.isIE && 10 > c && (Application.warn("Using SndManagerWeb for IE" + c), this.callbackBug = !0);
    window.SwitEntryPoint.infoBrowser.iDevice && 6 > window.SwitEntryPoint.infoBrowser.platformVersion && (Application.warn("IOS < 6"), this.callbackBug = this.soundjs.HTMLAudioPlugin.enableIOS = !0);
    c = Application.ASSETS_PATH +
        "media/sounds/";
    this.soundsLoaded = 0;
    this.soundsTotal = a.length;
    GuiLoader.instance && (GuiLoader.instance.totalFiles = this.soundsTotal);
    this.soundjs.Sound.alternateExtensions = ["mp3"];
    this.soundjs.Sound.addEventListener("fileload", this.soundjs.proxy(this.onFileload, this));
    for (var d = 0; d < a.length; d++) this.soundList[a[d].id] = a[d], this.soundjs.Sound.registerSound({
        id: a[d].id,
        src: c + a[d].file + ".ogg",
        data: a[d].instances
    });
    this.callbackBug && this.callback()
}
Application.subclass(SndManagerWeb, SndManager);
SndManagerWeb.prototype.onFileload = function(a) {
    this.soundsLoaded++;
    Application.info("SndManagerWeb preloading: " + a.id + " " + this.soundsLoaded + "/" + this.soundsTotal);
    this.callbackBug || (GuiLoader.instance && GuiLoader.instance.load(), this.soundsLoaded === this.soundsTotal && this.callback())
};
SndManagerWeb.prototype.onPlayComplete = function(a) {
    this.play(a.target.switId)
};
SndManagerWeb.prototype.play = function(a) {
    if (!this.m_muted)
        if ("undefined" === typeof this.soundList[a]) Application.warn("SndManagerWeb: sound with id [" + a + "] not found");
        else if (!this.soundjs.HTMLAudioPlugin.enableIOS || 0 != this.soundList[a].ios) {
        var b;
        this.soundjs.HTMLAudioPlugin.enableIOS ? (b = this.soundjs.Sound.play(a), b.addEventListener("complete", this.soundjs.proxy(this.onPlayComplete, this))) : b = this.soundjs.Sound.play(a, null, 0, 0, 0 === this.soundList[a].loops ? 999999 : this.soundList[a].loops - 1, this.soundList[a].vol);
        b.switId = a
    }
};
SndManagerWeb.prototype.stop = function(a) {
    for (var b = this.soundjs.Sound._instances, c = 0; c < b.length; ++c) b[c].switId === a && b[c].stop()
};
SndManagerWeb.prototype.pauseSound = function(a) {
    for (var b = this.soundjs.Sound._instances, c = 0; c < b.length; ++c) b[c].switId === a && (b[c].paused = !0)
};
SndManagerWeb.prototype.resumeSound = function(a) {
    for (var b = this.soundjs.Sound._instances, c = 0; c < b.length; ++c) b[c].switId === a && (b[c].paused = !1)
};
SndManagerWeb.prototype.setMasterVolume = function(a) {
    try {
        this.soundjs.Sound.setVolume(a)
    } catch (b) {
        Application.error("SndManagerWeb: " + b)
    }
};
SndManagerWeb.prototype.pauseAll = function() {
    for (var a = this.soundjs.Sound._instances, b = 0; b < a.length; ++b) a[b].paused = !0
};
SndManagerWeb.prototype.resumeAll = function() {
    if (!this.m_muted)
        for (var a = this.soundjs.Sound._instances, b = 0; b < a.length; ++b) a[b].paused = !1
};
SndManagerWeb.prototype.stopAllSounds = function() {
    this.soundjs.Sound.stop()
};
SndManagerWeb.prototype.removeAllSounds = function() {
    this.soundjs.Sound.removeAllSounds();
    this.soundjs.Sound = null
};
SndManagerWeb.prototype.toggleMute = function() {
    SndManager.prototype.toggleMute.call(this);
    this.m_muted ? this.soundjs.Sound.setMute(!0) : this.soundjs.Sound.setMute(!1)
};
SndManagerWeb.prototype.stopAllMusics = function() {
    for (var a, b = this.soundjs.Sound._instances, c = 0; c < b.length; ++c) a = b[c].switId, 0 === this.soundList[a].loops && b[c].stop(a)
};
SndManagerWeb.prototype.isPlayingSound = function(a) {
    for (var b = this.soundjs.Sound._instances, c = 0; c < b.length; ++c)
        if (b[c].switId === a) return b[c].playState === this.soundjs.Sound.PLAY_SUCCEEDED;
    return !1
};
SndManagerWeb.prototype.setVolumeById = function(a, b) {
    for (var c = this.soundjs.Sound._instances, d = 0; d < c.length; ++d) c[d].switId === a && c[d].playState === this.soundjs.Sound.PLAY_SUCCEEDED && c[d].setVolume(b)
};

function Actor(a, b, c) {
    this.m_x = "undefined" !== typeof b ? b : 0;
    this.m_y = "undefined" !== typeof c ? c : 0;
    this.clip = new Animation(a);
    this.setPosition(b, c);
    DebugObject.call(this)
}
Application.subclass(Actor, DebugObject);
Actor.prototype.free = function() {
    this.clip.free();
    this.clip = null
};
Actor.prototype.setX = function(a) {
    this.m_x = this.clip.position.x = a
};
Actor.prototype.setY = function(a) {
    this.m_y = this.clip.position.y = a
};
Actor.prototype.setPosition = function(a, b) {
    this.clip.position.x = a;
    this.clip.position.y = b;
    this.m_x = a;
    this.m_y = b
};
Actor.prototype.getX = function() {
    return this.m_x
};
Actor.prototype.getY = function() {
    return this.m_y
};
Actor.prototype.setScale = function(a) {
    this.clip.scale.x = a;
    this.clip.scale.y = a
};
Actor.prototype.setScaleX = function(a) {
    this.clip.scale.x = a
};
Actor.prototype.setScaleY = function(a) {
    this.clip.scale.y = a
};
Actor.prototype.setRotation = function(a) {
    this.clip.rotation = a
};
Actor.prototype.onEndAnimation = function(a, b) {
    if (null !== this.clip) this.clip.onEndAnimation(a, b)
};
Actor.prototype.onDebugDraw = function(a) {};
Actor.prototype.setClip = function(a) {
    null !== this.clip && this.clip.free();
    this.clip = Application.instance.getClip(a);
    this.clip.position.x = this.m_x;
    this.clip.position.y = this.m_y
};
Actor.prototype.update = function(a) {
    this.clip && (this.clip.position.x = this.m_x, this.clip.position.y = this.m_y, this.clip.update(a))
};

function Character(a, b, c) {
    this.canvas = c;
    this.x = a || 0;
    this.y = b || 0;
    this.clip = null;
    this.states = [];
    this.state = this.animation = "";
    this.m_endAniFunction = this.m_endAniCaller = null;
    this.lastFrame = 0;
    this.functions = [];
    this.actor = null
}
Character.prototype.setX = function(a) {
    this.x = a;
    this.clip && (this.clip.position.x = this.x)
};
Character.prototype.setY = function(a) {
    this.y = a;
    this.clip && (this.clip.position.y = this.y)
};
Character.prototype.free = function() {
    PoolClips.instance.releaseClip(this.clip);
    this.states = this.canvas = this.clip = null
};
Character.prototype.onEndAnimation = function(a, b) {
    this.m_endAniCaller = a;
    this.m_endAniFunction = b
};
Character.prototype._endAnimation = function(a) {
    null !== this.m_endAniCaller && null !== this.m_endAniFunction && this.m_endAniFunction.call(this.m_endAniCaller, this.state)
};
Character.prototype.setPosition = function(a, b) {
    this.x = a;
    this.y = b;
    this.clip && (this.clip.position.x = this.x, this.clip.position.y = this.y)
};
Character.prototype.addState = function(a, b, c) {
    this.states[a] = b;
    c = "undefined" !== typeof c ? c : [];
    for (var d in this.functions) - 1 != d.indexOf(a + "_") && delete this.functions[d];
    for (b = 0; b < c.length; b++) this.functions[a + "_" + c[b].frame] = c[b]
};
Character.prototype.gotoState = function(a, b) {
    b = "undefined" !== typeof b ? b : !0;
    this.states[a] ? (this.state = a, PoolClips.instance.releaseClip(this.clip), this.clip = null, this.clip = PoolClips.instance.getClip(this.states[a]), this.clip.position.x = this.x, this.clip.position.y = this.y, this.clip.onEndAnimation(this, this._endAnimation), this.clip.loop = b, this.animation = this.states[a], this.canvas.addChild(this.clip)) : Application.error("Character::gotoState() - State: [" + a + "] is not registered")
};
Character.prototype.update = function(a) {
    this.clip && (this.clip.update(a), this.lastFrame !== this.clip.currentFrame && (this.lastFrame = this.clip.currentFrame, this.functions[this.state + "_" + this.clip.currentFrame] && (a = this.functions[this.state + "_" + this.clip.currentFrame], a.callback.call(a.caller))))
};
Character.prototype.compareStates = function(a, b) {
    return this.states[a] !== b
};
Character.prototype.setDepth = function(a) {};

function Layout() {}
Layout.ALIGN_TOP_LEFT = 0;
Layout.ALIGN_TOP_CENTER = 1;
Layout.ALIGN_CENTER = 2;
Layout.scale = 1;
Layout.dpi = 1;
Layout.align = Layout.ALIGN_CENTER;
Layout.resizeEnable = !0;
Layout.offsetX = 0;
Layout.offsetY = 0;
Layout.top = 0;
Layout.left = 0;
Layout.width = 0;
Layout.height = 0;
Layout.minAspectRatio = 1024 / 768;
Layout.maxAspectRatio = 16 / 9;
Layout.aspectRatio = Layout.minAspectRatio;
Layout.supports3dTransform = window.WebKitCSSMatrix || window.MSCSSMatrix;
Layout.onResize = function(a, b) {
    Layout.width = Math.floor(a);
    Layout.height = Math.floor(b);
    navigator.isCocoonJS && (Application.WIDE_SCREEN = !0);
    Layout.scale = 1;
    Layout.top = 0;
    Layout.left = 0;
    Layout.offsetX = 0;
    Layout.offsetY = 0;
    var c = a / Application.APP_WIDTH,
        d = b / Application.APP_HEIGHT;
    d < c ? (Layout.scale = d, Layout.left = Math.floor((a - Application.APP_WIDTH * Layout.scale) / 2)) : d > c && (Layout.scale = c, Layout.top = Math.floor((b - Application.APP_HEIGHT * Layout.scale) / 2));
    Layout.aspectRatio = Math.min(Layout.maxAspectRatio, Math.max(Layout.minAspectRatio,
        Layout.width / Layout.height));
    Application.WIDE_SCREEN ? (d < c ? (Layout.offsetX = Layout.left, Application.instance.renderer.resize(Math.ceil(a / Layout.scale), Application.APP_HEIGHT), Application.instance.canvas.position.x = Layout.offsetX / Layout.scale, Application.instance.canvas.position.y = 0) : (Layout.offsetY = Layout.top, Application.instance.renderer.resize(Application.APP_WIDTH, Math.ceil(b / Layout.scale)), Application.instance.canvas.position.x = 0, Application.instance.canvas.position.y = Layout.offsetY / Layout.scale),
        Application.log("posX: " + Application.instance.canvas.position.x), Application.log("posY: " + Application.instance.canvas.position.y), Application.log("window['devicePixelRatio']: " + window.devicePixelRatio), Application.log("Layout.scale: " + Layout.scale), Application.instance.renderer.view.style.top = "0px", Application.instance.renderer.view.style.left = "0px", Application.instance.renderer.view.style["transform-origin"] = "0px 0px", Application.instance.renderer.view.style.transform = "scale(" + Layout.scale + ", " +
        Layout.scale + ")") : (Application.instance.canvas.scale.x = Layout.scale, Application.instance.canvas.scale.y = Layout.scale, Application.instance.canvas.position.x = Layout.left, Application.instance.canvas.position.y = Layout.top, Application.log("Layout.left: " + Layout.left), Application.log("Layout.top: " + Layout.top), 0 !== Layout.left ? Application.instance.renderer.resize(a - Layout.left, Layout.scale * Application.APP_HEIGHT) : Application.instance.renderer.resize(Layout.scale * Application.APP_WIDTH, b - Layout.top))
};
Layout.fixInteractionEvent = function(a) {
    if (Application.WIDE_SCREEN) {
        var b = {
            data: {}
        };
        b.data.identifier = "undefined" !== typeof a.data.identifier ? a.data.identifier : 0;
        b.data.originalEvent = a.data.originalEvent;
        b.data.target = a.data.target;
        b.data.global = {};
        b.data.global.x = Math.floor(a.data.global.x - Application.instance.canvas.position.x);
        b.data.global.y = Math.floor(a.data.global.y - Application.instance.canvas.position.y);
        b.target = a.target;
        return b
    }
    return a
};
Layout.position = function(a, b, c) {
    if (a = document.getElementById(a)) a.style.top = b + "px", a.style.left = c + "px"
};
Layout.transform = function(a) {
    if (a = document.getElementById(a)) a.style.transformOrigin = "0 0", a.style.transform = "scale(" + Layout.scale + ", " + Layout.scale + ")", a.style.webkitTransformOrigin = "0 0", a.style.webkitTransform = "scale(" + Layout.scale + ", " + Layout.scale + ")", a.style.OTransformOrigin = "0 0", a.style.OTransform = "scale(" + Layout.scale + ", " + Layout.scale + ")", window.SwitEntryPoint.infoBrowser.isIE && (a.style.msTransformOrigin = window.config.settings.RIGHT_TO_LEFT ? "100% 0%" : "0 0", a.style.msTransform = "scale(" + Layout.scale +
        ", " + Layout.scale + ")")
};

function Point(a, b) {
    this.x = "undefined" === typeof a ? 0 : a;
    this.y = "undefined" === typeof b ? 0 : b
}
Point.prototype.distanceTo = function(a, b) {
    return Math.sqrt((a - this.x) * (a - this.x) + (b - this.y) * (b - this.y))
};

function Rectangle(a, b, c, d) {
    this.x = "undefined" !== typeof a ? a : 0;
    this.y = "undefined" !== typeof b ? b : 0;
    this.w = "undefined" !== typeof c ? c : 0;
    this.h = "undefined" !== typeof d ? d : 0
}
Rectangle.prototype.left = function() {
    return this.x
};
Rectangle.prototype.setLeft = function(a) {
    this.x = a
};
Rectangle.prototype.right = function() {
    return this.x + this.w
};
Rectangle.prototype.setRight = function(a) {
    a < this.x || (this.w = a - this.x)
};
Rectangle.prototype.top = function() {
    return this.y
};
Rectangle.prototype.setTop = function(a) {
    this.y = a
};
Rectangle.prototype.bottom = function() {
    return this.y + this.h
};
Rectangle.prototype.setBottom = function(a) {
    a < this.y || (this.h = a - this.y)
};
Rectangle.prototype.isEqual = function(a) {
    return this.x === a.x && this.y === a.y && this.w === a.w && this.h === a.h
};
Rectangle.prototype.intersectPoint = function(a, b) {
    return a >= this.x && a <= this.x + this.w && b >= this.y && b <= this.y + this.h
};
Rectangle.prototype.contains = function(a, b) {
    return a >= this.x && a <= this.x + this.w && b >= this.y && b <= this.y + this.h
};
Rectangle.prototype.intersectRect = function(a) {
    return this.right() >= a.x && this.x <= a.right() && this.bottom() >= a.y && this.y <= a.bottom()
};
Rectangle.prototype.intersection = function(a) {
    if (!this.intersectRect(a)) return null;
    var b = new Rectangle;
    b.x = this.x > a.x ? this.x : a.x;
    b.y = this.y > a.y ? this.y : a.y;
    b.setRight(this.right() < a.right() ? this.right() : a.right());
    b.setBottom(this.bottom() < a.bottom() ? this.bottom() : a.bottom());
    return b
};
Rectangle.prototype.containsRect = function(a) {
    return a.x >= this.x && a.y >= this.y && a.right() <= this.right() && a.bottom() <= this.bottom()
};
Rectangle.prototype.clone = function() {
    return new Rectangle(this.x, this.y, this.w, this.h)
};
Rectangle.prototype.copyRectangle = function(a) {
    this.x = a.x;
    this.y = a.y;
    this.w = a.w;
    this.h = a.h
};
Rectangle.prototype.isEmpty = function() {
    return 0 === this.w && 0 === this.h
};
Rectangle.prototype.setEmpty = function() {
    this.h = this.w = 0
};
Rectangle.prototype.toString = function() {
    return "x:" + this.x + " y:" + this.y + " w:" + this.w + " h:" + this.h
};

function SScreen(a, b, c, d) {
    this.screenParent = d || null;
    this.blurBG = null;
    this.canvas = Application.instance.addDisplayContainer();
    Application.instance.canvas.addChild(this.canvas);
    this.canvas.hitArea = new Rectangle(.5 * -Application.APP_WIDTH, -100, 2 * Application.APP_WIDTH, Application.APP_HEIGHT + 200);
    this.canvas.addPressListener(this, this.onPointerPress);
    this.canvas.addReleaseListener(this, this.onPointerRelease);
    this.canvas.addPointerMoveListener(this, this.onPointerMove);
    this.setInteractive(!1);
    this.blurContent =
        Application.instance.addDisplayContainer();
    this.canvas.addChild(this.blurContent);
    this.frameWaitActionStop = 0;
    a && (this.clip = Application.instance.getClip(a), this.clip.screenLinked = this, this.frameWaitActionStop = this.clip.screenActionStop, this.canvas.addChild(this.clip));
    this.skipCode = 32;
    this.canvas.position.x = b || 0;
    this.canvas.position.y = c || 0;
    this.popup = null;
    this.controls = {};
    this.spaceBarEnabled = !1;
    this.lastInteractionControl = "";
    SScreen.parseControls(this, a);
    this.m_transitionFx = null;
    this.m_state = SScreen.ST_INIT;
    this.init()
}
SScreen.ST_INIT = 0;
SScreen.ST_TRANSITION_INIT = 1;
SScreen.ST_MAINFRAME = 2;
SScreen.ST_TRANSITION_END = 3;
SScreen.ST_END = 4;
SScreen.prototype.createTransitionIn = function() {
    this.m_state = SScreen.ST_TRANSITION_INIT
};
SScreen.prototype.createTransitionOut = function() {
    this.m_state = SScreen.ST_TRANSITION_END
};
SScreen.prototype.onEndTransitionIn = function() {
    this.m_state = SScreen.ST_MAINFRAME
};
SScreen.prototype.onEndTransitionOut = function() {
    this.m_state = SScreen.ST_END
};
SScreen.prototype.onActionScreen = function() {};
SScreen.prototype.applyBlur = function(a) {
    if (!Application.instance.isMobileDevice) {
        a = a || 2;
        var b = new Image;
        b.src = Application.instance.captureScreen();
        this.blurBG = new SSprite(b.src);
        this.blurBG.position.x = -Layout.left / Layout.scale;
        this.blurContent.addChild(this.blurBG);
        b = new window.PIXI.filters.BlurFilter;
        b.blur = a;
        this.blurBG.filters = [b]
    }
};
SScreen.prototype.createTransition = function(a, b, c, d, e) {
    d = d || null;
    null !== this.m_transitionFx && this.m_transitionFx.free();
    this.m_transitionFx = new SEffectAnimo(a, b, c, e || this.clip, 1);
    this.m_transitionFx.onComplete(this, this.onEndTransition);
    this.m_transitionFx.params = d
};
SScreen.prototype.createCustomTransition = function(a, b, c) {
    b = b || null;
    null !== this.m_transitionFx && this.m_transitionFx.free();
    this.m_transitionFx = new a(b, c || this.clip);
    this.m_transitionFx.onEndAnimation(this, this.onEndTransition)
};
SScreen.prototype.getControl = function(a) {
    if (this.controls && this.controls[a]) return this.controls[a];
    Application.warn("Control [" + a + "] no found");
    return null
};
SScreen.prototype.init = function() {};
SScreen.prototype.onDebugDraw = function(a) {};
SScreen.prototype.onEndTransition = function(a) {
    a.isAwaitingDelete = !0
};
SScreen.prototype.onUIPress = function(a) {
    if (null !== this.popup) this.popup.onUIPress(a);
    else this.lastInteractionControl = a.name
};
SScreen.prototype.onUIRelease = function(a) {
    if (null !== this.popup) this.popup.onUIRelease(a)
};
SScreen.prototype.onUIPressAndRelease = function(a) {
    if (null !== this.popup) this.popup.onUIPressAndRelease(a)
};
SScreen.prototype.onUIMove = function(a) {
    if (null !== this.popup) this.popup.onUIMove(a)
};
SScreen.prototype.onUIOver = function(a) {
    if (null !== this.popup) this.popup.onUIOver(a)
};
SScreen.prototype.onUIOut = function(a) {
    if (null !== this.popup) this.popup.onUIOut(a)
};
SScreen.prototype.onStopScreen = function() {
    this.clip && (this.clip.stop(), this.m_state = SScreen.ST_MAINFRAME)
};
SScreen.prototype.onResumeScreen = function() {
    this.clip && (this.clip.resume(), this.m_state = SScreen.ST_TRANSITION_END)
};
SScreen.prototype.onFinishScreen = function() {
    this.m_state = this.m_state === SScreen.ST_INIT ? SScreen.ST_MAINFRAME : SScreen.ST_END
};
SScreen.prototype.onPointerPress = function(a) {};
SScreen.prototype.onPointerRelease = function(a) {};
SScreen.prototype.onPointerPressAndRelease = function(a) {};
SScreen.prototype.onPointerOver = function(a) {};
SScreen.prototype.onPointerMove = function(a) {};
SScreen.prototype.activePressBar = function() {
    this.spaceBarEnabled = !0
};
SScreen.prototype.onPressSpaceBar = function() {
    this.spaceBarEnabled = !1
};
SScreen.prototype.update = function(a) {
    null !== this.popup && this.popup.update(a);
    this.clip && this.clip.update(a);
    this.m_transitionFx && (this.m_transitionFx.isAwaitingDelete ? (this.m_transitionFx.free(), this.m_transitionFx = null) : this.m_transitionFx.update(a))
};
SScreen.prototype.onResize = function(a) {
    if (null !== this.popup) this.popup.onResize(a)
};
SScreen.prototype.onKeyDown = function(a) {
    if (null !== this.popup) this.popup.onKeyDown(a);
    if (this.spaceBarEnabled && a === this.skipCode) this.onPressSpaceBar()
};
SScreen.prototype.onKeyUp = function(a) {
    if (null !== this.popup) this.popup.onKeyUp(a)
};
SScreen.prototype.onActivate = function(a) {
    if (null !== this.popup) this.popup.onActivate(a)
};
SScreen.prototype.addPopup = function(a, b, c, d) {
    c = c || 0;
    d = d || 0;
    this.dropPopup();
    return this.popup = new a(b, c, d, this)
};
SScreen.prototype.dropPopup = function() {
    null !== this.popup && (this.popup.free(), this.popup = null)
};
SScreen.prototype.destroyToolTips = function() {};
SScreen.prototype.createTooltips = function(a, b, c, d, e) {};
SScreen.prototype.free = function() {
    this.blurBG && (this.blurContent.removeChild(this.blurBG), this.blurBG.free(), this.blurBG = null);
    null != this.blurContent && (this.blurContent.parent.removeChild(this.blurContent), this.blurContent.free(), this.blurContent = null);
    var a = document.getElementById("MainCanvasDraw");
    a && (a.focus(), a.parentElement.focus());
    this.dropPopup();
    this.destroyToolTips();
    this.screenParent = null;
    for (var b in this.controls) this.controls[b].free(), this.controls[b] = null;
    this.controls = null;
    this.canvas &&
        (Application.instance.canvas.hitArea = null, Application.instance.canvas.removeChild(this.canvas), this.canvas = null);
    Application.instance.canvasEvents && (document.getElementById("MainCanvasEvents").style.cursor = "default")
};
SScreen.prototype.setInteractive = function(a) {
    this.canvas.interactive = a
};
SScreen.parseControls = function(a, b) {
    var c = window.config.ui,
        d = Application.RIGHT_TO_LEFT ? "_rtl" : "_ltr",
        e = null,
        f, g, h;
    for (h in c)
        if (c[h].gui === b && (f = a.clip.getInstance(c[h].control))) {
            switch (Common.trim(c[h].type).toUpperCase()) {
                case GuiControl.TYPE_TEXT:
                    e = new GuiText(f);
                    e.align = parseInt(Common.trim(c[h]["align" + d]), 10);
                    e.valign = parseInt(Common.trim(c[h].valign), 10);
                    e.setClip(c[h].link);
                    f = new window.PIXI.TextStyle;
                    f.fontFamily = c[h]["font" + d];
                    f.fontSize = parseInt(c[h]["size" + d], 10);
                    f.fill = c[h].color;
                    f.align =
                        GuiText.getPixiAlign(e);
                    g = c[h].border ? c[h].border.split(",") : [];
                    2 === g.length && (f.strokeThickness = parseInt(g[0], 10), f.stroke = g[1]);
                    g = c[h].shadow ? c[h].shadow.split(",") : [];
                    4 === g.length && (f.dropShadow = !0, f.dropShadowDistance = parseInt(g[0], 10), f.dropShadowColor = g[1], f.dropShadowAngle = Common.gradToRadian(parseInt(c[h].shadow[2], 10)), f.dropShadowBlur = parseInt(g[3], 10));
                    g = c[h].spacing ? c[h].spacing.split(",") : [];
                    2 === g.length && (f.letterSpacing = parseInt(g[0], 10), 0 !== parseInt(g[1], 10) && (f.lineHeight = f.fontSize +
                        parseInt(g[1], 10)));
                    0 !== (c[h].wordWrap ? parseInt(c[h].wordWrap, 10) : 0) && (f.wordWrap = !0, f.wordWrapWidth = e.baseWidth);
                    f.padding = 20;
                    e.textfield ? e.textfield.style = f : Application.warn("SScreen: control text id [" + c[h].control + "] was not created");
                    "undefined" !== typeof Application.strings[c[h].string] ? e.setTextLocalized(c[h].string) : Application.warn("SScreen: string/style id [" + c[h].string + "] no found");
                    break;
                case GuiControl.TYPE_CLIP:
                    e = new GuiClip(f);
                    e.setClip(c[h].link);
                    break;
                case GuiControl.TYPE_ON_OFF:
                    e =
                        new GuiOnOff(f);
                    e.setOnClip(c[h].onLink);
                    e.setOffClip(c[h].offLink);
                    e.gotoState(GuiOnOff.ST_ON);
                    e.addPressListener(a, a.onUIPress);
                    break;
                case GuiControl.TYPE_BUTTON:
                    e = new GuiButton(f);
                    e.setClip(c[h].link);
                    e.screenContainer = a;
                    e.addPressListener(a, a.onUIPress);
                    e.addReleaseListener(a, a.onUIRelease);
                    break;
                case GuiControl.TYPE_ANI_BUTTON:
                    e = new GuiButtonState(f, c[h].link);
                    e.screenContainer = a;
                    e.addPressListener(a, a.onUIPress);
                    e.addReleaseListener(a, a.onUIRelease);
                    break;
                case GuiControl.TYPE_4STATES:
                    e = new GuiThumbs4State(f,
                        c[h].link, c[h].disableLink, c[h].selectedLink, c[h].soonLink);
                    e.addPressListener(a, a.onUIPress);
                    e.addReleaseListener(a, a.onUIRelease);
                    break;
                case GuiControl.TYPE_CLIP_MOUSE:
                    e = new GuiControlInteractive(f);
                    e.setClip(c[h].link);
                    e.setInteractive(!0);
                    e.addPressListener(a, a.onUIPress);
                    e.addReleaseListener(a, a.onUIRelease);
                    e.addMoveListener(a, a.onUIMove);
                    break;
                case GuiControl.TYPE_CONTENT:
                    e = new GuiContent(f)
            }
            e && (e.name = Common.trim(c[h].control), a.controls[c[h].control] = e)
        }
};

function SLoaderScreen(a, b, c, d, e, f, g) {
    SScreen.call(this, a);
    this.start = "undefined" === typeof d ? 0 : d;
    this.end = "undefined" === typeof e ? 100 : e;
    this.jsonFiles = b;
    this.loadedfiles = this.totalFiles = 0;
    this.gotoScreen = c;
    this.ready = !1;
    this.waitTime = 600;
    this.preload = "undefined" === typeof f ? !1 : f;
    this.extraAssets = g;
    this.btnNext = this.parseText = null;
    this.controls.mcGuiBtnNext && (this.btnNext = this.getControl("mcGuiBtnNext"), this.btnNext.clip.visible = !1);
    this.loadedJsonFiles = 0;
    if (this.jsonFiles)
        for (a = 0; a < this.jsonFiles.length; a++)
            if (Application.jsonFiles[this.jsonFiles[a]]) this.onJsonLoaded(Application.jsonFiles[this.jsonFiles[a]]);
            else b = new SJsonLoader(this.jsonFiles[a]), b.addLoadedListener(this, this.onJsonLoaded), b.addErrorListener(this, this.onJsonError), b.load();
    this.preload && (this.waitTime = 0)
}
Application.subclass(SLoaderScreen, SScreen);
SLoaderScreen.prototype.free = function() {
    this.gotoScreen = this.jsonFiles = this.btnNext = this.txtLoading = null;
    SScreen.prototype.free.call(this)
};
SLoaderScreen.prototype.createTransitionIn = function() {
    this.preload || 0 == this.start && SScreen.prototype.createTransitionIn.call(this)
};
SLoaderScreen.prototype.createTransitionOut = function() {
    this.preload || SScreen.prototype.createTransitionOut.call(this)
};
SLoaderScreen.prototype.onJsonLoaded = function(a) {
    Application.log("[JSON loaded]" + a.url);
    this.loadedJsonFiles++;
    Application.jsonFiles[a.url] = a;
    if (this.loadedJsonFiles >= this.jsonFiles.length) this.onAllJsonLoaded()
};
SLoaderScreen.prototype.onJsonError = function(a) {
    Application.error("JSON no found " + a.url)
};
SLoaderScreen.prototype.onAllJsonLoaded = function() {
    Application.info("[ALL JSON COMPLETE]");
    var a = [],
        b;
    for (b = 0; b < this.jsonFiles.length; b++) {
        this.totalFiles += Application.jsonFiles[this.jsonFiles[b]].json.meta.atlas.length;
        var c = new SLoader(Application.jsonFiles[this.jsonFiles[b]]);
        c.addLoadListener(this, this.load);
        a.push(c)
    }
    this.extraAssets && (this.totalFiles += this.extraAssets.length, c = new SLoader({
        json: {
            meta: {
                atlas: this.extraAssets
            }
        },
        baseUrl: ""
    }), c.addLoadListener(this, this.load), a.push(c));
    for (b = 0; b <
        a.length; b++) a[b].load()
};
SLoaderScreen.prototype.onUIPress = function(a) {
    Application.instance.playSound("SND_UI_CLICK");
    switch (a.name) {
        case "mcGuiBtnNext":
            Application.instance.hideAddressBar(), GuiManager.instance.gotoScreen(this.gotoScreen)
    }
};
SLoaderScreen.prototype.load = function() {
    this.loadedfiles++;
    this.loadedfiles === this.totalFiles && (this.ready = !0)
};
SLoaderScreen.prototype.update = function(a) {
    this.ready && (this.waitTime -= a, 0 > this.waitTime && (this.onLoadComplete(), this.ready = !1))
};
SLoaderScreen.prototype.onLoadComplete = function() {
    if (this.preload) Application.instance.onLoaderReady();
    else Application.instance.isMobileDevice && !navigator.isCocoonJS && null != this.jsonFiles ? GuiMainMenu.doneFirstLoader ? GuiManager.instance.gotoScreen(this.gotoScreen) : this.btnNext && (this.btnNext.clip.visible = !0) : GuiManager.instance.gotoScreen(this.gotoScreen)
};

function DebugScreen(a, b, c, d) {
    SScreen.call(this, a, b, c, d)
}
Application.subclass(DebugScreen, SScreen);
DebugScreen.prototype.onUIPress = function(a) {
    Application.instance.playSound("SND_UI_CLICK");
    this.onResumeScreen()
};

function DebugScreenNano() {
    SScreen.call(this, "", 0, 0);
    DebugScreenNano.instance = this;
    this.fx = null;
    this.effectName = "";
    this.followCursor = !1;
    this.bgImage = null;
    this.canvasBg = Application.instance.addDisplayContainer();
    this.bgClip = null;
    this.canvasClip = Application.instance.addDisplayContainer();
    this.canvasEffect = Application.instance.addDisplayContainer();
    this.canvasGuides = Application.instance.addDisplayContainer();
    this.canvas.addChild(this.canvasBg);
    this.canvas.addChild(this.canvasClip);
    this.canvas.addChild(this.canvasEffect);
    this.canvas.addChild(this.canvasGuides);
    this.max = 0;
    this.centerX = .5 * Application.APP_WIDTH;
    this.centerY = .5 * Application.APP_HEIGHT;
    this.setInteractive(!0);
    var a = new SGraphics;
    a.drawLine(this.centerX - 100, this.centerY, this.centerX + 100, this.centerY, 65280);
    a.drawLine(this.centerX, this.centerY - 100, this.centerX, this.centerY + 100, 65280);
    a.drawRectangle(10, 10, Application.APP_WIDTH - 20, Application.APP_HEIGHT - 20, 1, 65280);
    this.canvasGuides.addChild(a);
    this.m_debugText = new SPixiText("", {
        size: 15,
        font: "15px Arial",
        fill: "#00FF00"
    });
    this.m_debugText.position.x = 14;
    this.m_debugText.position.y = 12;
    this.canvas.addChild(this.m_debugText)
}
Application.subclass(DebugScreenNano, SScreen);
DebugScreenNano.prototype.onKeyDown = function(a) {
    switch (a) {
        case Common.KEY_F:
            this.followCursor = !this.followCursor, this.followCursor || (this.fx.x = this.centerX, this.fx.y = this.centerY)
    }
};
DebugScreenNano.prototype.onPointerPress = function(a) {
    a = Layout.fixInteractionEvent(a);
    "" !== this.effectName && this.createEffect(this.effectName, a.data.global.x, a.data.global.y)
};
DebugScreenNano.prototype.onPointerMove = function(a) {
    a = Layout.fixInteractionEvent(a);
    this.fx && this.followCursor && (this.fx.x = a.data.global.x, this.fx.y = a.data.global.y)
};
DebugScreenNano.prototype.setBackground = function(a) {
    this.bgImage && (this.canvasBg.removeChild(this.bgImage), this.bgImage = null);
    this.bgImage = window.PIXI.Sprite.fromImage(a, !1, PIXI.SCALE_MODES.DEFAULT);
    this.canvasBg.addChild(this.bgImage)
};
DebugScreenNano.prototype.setClip = function(a) {
    this.bgClip && (this.canvasClip.removeChild(this.bgClip), this.bgClip = null);
    this.bgClip = Application.instance.getClip(a);
    "__errorSprite" !== this.bgClip.name ? (this.bgClip.setPosition(this.centerX, this.centerY), this.canvasClip.addChild(this.bgClip)) : this.bgClip = null
};
DebugScreenNano.prototype.setClipInFront = function(a) {
    this.canvas.removeChild(this.canvasClip);
    this.canvas.addChildAt(this.canvasClip, a ? 3 : 1)
};
DebugScreenNano.prototype.createEffect = function(a, b, c) {
    this.fx && (this.fx.free(), this.fx = null);
    this.max = 0;
    this.effectName = a;
    this.fx = new NanoEffect(a, b || this.centerX, c || this.centerY, this.canvasEffect)
};
DebugScreenNano.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    this.bgClip && this.bgClip.update(a);
    if (this.fx) {
        this.fx.update(a);
        a = window.nano.effects[this.effectName];
        for (var b = 0; b < a.length; b++) this.fx.emittersIndex[a[b].emitter] && (this.fx.emittersIndex[a[b].emitter].ox = a[b].pos_x, this.fx.emittersIndex[a[b].emitter].oy = a[b].pos_y)
    }
    this.max < this.canvasEffect.countChildren() && (this.max = this.canvasEffect.countChildren());
    this.m_debugText.text = "Particles : " + this.canvasEffect.countChildren() +
        " fps : " + Application.instance.fps + (Application.RENDER_MODE === Application.RENDER_CANVAS ? " (canvas)" : " (webgl)") + " Max : " + this.max
};
DebugScreenNano.prototype.addDebugText = function(a, b, c, d) {
    "undefined" === typeof d && (d = "#FF0000");
    "undefined" === typeof c && (c = 18);
    this.m_debugText = new SPixiText("", {
        fontSize: c,
        fontFamily: "Arial",
        fill: d
    });
    this.canvas.addChild(this.m_debugText);
    this.m_debugText.position.x = a;
    this.m_debugText.position.y = b
};
DebugScreenNano.prototype.setDebugText = function(a) {
    this.m_debugText && (this.m_debugText.text = a)
};

function ScreenManager() {
    this.currentScreen = null;
    this.currentScreenName = "";
    this.debugDrawModeOn = !0
}
ScreenManager.prototype.free = function() {
    this.currentScreen && this.currentScreen.free();
    this.currentScreen = null
};
ScreenManager.prototype.gotoScreen = function(a) {
    this.currentScreen && this.currentScreen.free();
    this.currentScreen = null;
    this.currentScreenName = a;
    Application.log("GO TO SCREEN :: " + a)
};
ScreenManager.prototype.update = function(a) {
    a > Application.MAX_DELTA_TIME && (a = Application.MAX_DELTA_TIME);
    this.currentScreen && this.currentScreen.update(a)
};
ScreenManager.prototype.onResize = function(a) {
    if (this.currentScreen) this.currentScreen.onResize(a)
};
ScreenManager.prototype.onKeyDown = function(a) {
    if (this.currentScreen) this.currentScreen.onKeyDown(a)
};
ScreenManager.prototype.onKeyUp = function(a) {
    if (this.currentScreen) this.currentScreen.onKeyUp(a)
};
ScreenManager.prototype.onActivate = function(a) {
    if (this.currentScreen) this.currentScreen.onActivate(a)
};
ScreenManager.prototype.onTilt = function(a) {};
ScreenManager.prototype.onDebugDraw = function(a) {
    if (this.debugDrawModeOn && null !== this.currentScreen) this.currentScreen.onDebugDraw(a)
};
ScreenManager.prototype.toggleDebugDraw = function() {
    this.debugDrawModeOn = !this.debugDrawModeOn
};

function RotateScreen(a) {
    this.canvas = a;
    this.file = window.SwitEntryPoint.infoBrowser.isPhone ? "media/images/ui_images/gui_rotatescreen_phone.jpg" : "media/images/ui_images/gui_rotatescreen.jpg";
    this.bg = new PIXI.Graphics;
    this.bg.beginFill(0, 1);
    this.bg.drawRect(0, 0, 100, 100);
    this.image = window.PIXI.Sprite.fromImage(this.file, !1, window.PIXI.settings.SCALE_MODE);
    this.image.pivot.x = 150;
    this.image.pivot.y = 150;
    this.canvas.interactive = !0;
    this.animate = this.visible = !1
}
RotateScreen.prototype.show = function() {
    this.canvas.addChild(this.bg);
    this.canvas.addChild(this.image);
    Common.tween({
        parent: this,
        clip: this.image,
        scale: .2,
        onComplete: this.onCompleteAnimation
    }, {
        scale: 1
    }, 1500, !0, 150, TweenEasing.ElasticOut);
    this.animate = this.visible = !0
};
RotateScreen.prototype.onCompleteAnimation = function(a) {
    this.animate = !0
};
RotateScreen.prototype.hide = function() {
    this.canvas.removeChild(this.bg);
    this.canvas.removeChild(this.image);
    this.visible = !1
};
RotateScreen.prototype.onResize = function() {
    Application.WIDE_SCREEN ? (this.image.position.x = .5 * window.innerWidth / Layout.scale, this.image.position.y = .5 * window.innerHeight / Layout.scale, this.bg.width = window.innerWidth, this.bg.height = window.innerHeight, this.bg.scale.x /= Layout.scale, this.bg.scale.y /= Layout.scale) : (this.image.position.x = .5 * Application.APP_WIDTH, this.image.position.y = .5 * Application.APP_HEIGHT, this.bg.width = Application.APP_WIDTH, this.bg.height = Application.APP_HEIGHT)
};

function Vector2D(a, b) {
    this.x = "undefined" === typeof a ? 0 : a;
    this.y = "undefined" === typeof b ? 0 : b
}
Vector2D.prototype.set = function(a, b) {
    this.x = a;
    this.y = b
};
Vector2D.prototype.setVector = function(a, b) {
    this.x = a * Math.cos(b);
    this.y = a * Math.sin(b)
};
Vector2D.prototype.distanceTo = function(a, b) {
    return Math.sqrt((a - this.x) * (a - this.x) + (b - this.y) * (b - this.y))
};
Vector2D.prototype.distance = function(a) {
    return Math.sqrt((a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y))
};
Vector2D.prototype.clone = function() {
    return new Vector2D(this.x, this.y)
};
Vector2D.prototype.plus = function(a) {
    return new Vector2D(this.x + a.x, this.y + a.y)
};
Vector2D.prototype.minus = function(a) {
    return new Vector2D(this.x - a.x, this.y - a.y)
};
Vector2D.prototype.middle = function(a) {
    return new Vector2D(.5 * (this.x + a.x), .5 * (this.y + a.y))
};
Vector2D.prototype.orthogonal = function() {
    return new Vector2D(-this.y, this.x)
};
Vector2D.prototype.rotate = function(a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    var c = this.x * b - this.y * a;
    this.y = this.y * b + this.x * a;
    this.x = c
};
Vector2D.prototype.udir = function() {
    var a = this.clone();
    a.normalize();
    return a
};
Vector2D.prototype.projectionOn = function(a) {
    var b = a.dot(a);
    if (0 === b) return this.clone();
    var c = a.clone();
    c.scale(this.dot(a) / b);
    return c
};
Vector2D.prototype.dot = function(a) {
    return this.x * a.x + this.y * a.y
};
Vector2D.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};
Vector2D.prototype.squaredLength = function() {
    return this.x * this.x + this.y * this.y
};
Vector2D.prototype.copy = function(a) {
    this.x = a.x;
    this.y = a.y
};
Vector2D.prototype.scale = function(a) {
    this.x *= a;
    this.y *= a
};
Vector2D.prototype.normalize = function() {
    var a = this.length();
    0 < a ? (this.x /= a, this.y /= a) : Application.warn("[WARN]: Vector2D.normalize: called on a zero-length vector.")
};
Vector2D.prototype.normalize2 = function(a) {
    var b = this.length();
    0 < b ? (this.x /= b, this.y /= b, 1 != a && this.scale(a)) : Application.warn("[WARN]: Vector2D.normalize: called on a zero-length vector.")
};
Vector2D.prototype.stretch = function(a) {
    var b = this.length();
    0 < b && (this.x *= a / b, this.y *= a / b)
};
Vector2D.prototype.truncate = function(a) {
    var b = this.length();
    a = b > a ? a : b;
    0 < b && (this.x *= a / b, this.y *= a / b)
};
Vector2D.prototype.silentNormalize = function() {
    var a = this.length();
    0 < a && (this.x /= a, this.y /= a)
};
Vector2D.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y
};
Vector2D.prototype.subtract = function(a) {
    this.x -= a.x;
    this.y -= a.y
};
Vector2D.prototype.product = function(a) {
    return this.y * a.x - this.x * a.y
};
Vector2D.prototype.angle = function() {
    return Math.atan2(this.y, this.x)
};
Vector2D.prototype.isZero = function() {
    return 0 === this.y && 0 === this.x
};
Vector2D.prototype.toString = function() {
    return "V2D x:" + this.x + " y:" + this.y
};

function SGame(a) {
    SGame.instance = this;
    this.canvas = a;
    this.world = this.hud = null;
    this.score = this.lives = 0;
    this.showDebugCollision = this.isAwaitingDelete = this.isAwaitReset = !1;
    this.init()
}
SGame.instance = null;
SGame.prototype.free = function() {
    this.hud && this.hud.free();
    this.hud = null;
    SGame.instance = null
};
SGame.prototype.init = function() {};
SGame.prototype.update = function(a) {
    this.hud && this.hud.update(a)
};
SGame.prototype.onDebugDraw = function(a) {};
SGame.prototype.toggleDebugCollision = function() {
    this.showDebugCollision = !this.showDebugCollision
};
SGame.prototype.onActivate = function(a) {};
SGame.prototype.onKeyDown = function(a) {};
SGame.prototype.onKeyUp = function(a) {};
SGame.prototype.onPointerPress = function(a, b) {};
SGame.prototype.onPointerRelease = function(a, b) {};
SGame.prototype.onPointerPressAndRelease = function(a) {};
SGame.prototype.onPointerOver = function(a) {};
SGame.prototype.onPointerMove = function(a, b) {};

function SEffect(a, b, c, d, e, f) {
    this.name = a;
    this.canvas = d;
    this.clip = null;
    this.params = f || {};
    this.isAwaitingDelete = !1;
    this.type = 0;
    this.loops = "undefined" !== typeof e ? e : 1;
    this.m_repeat = 0;
    this.deleteAtTheEnd = !0;
    this.m_endCompleteCaller = this.m_endCompleteCallback = null
}
SEffect.prototype.create = function() {};
SEffect.TYPE_ANIMO = 1;
SEffect.TYPE_NANO = 2;
SEffect.TYPE_GUI = 3;
SEffect.prototype.fix = function(a) {
    this.clip.position.x = a.x;
    this.clip.position.y = a.y
};
SEffect.prototype.free = function() {
    this.clip && this.canvas && this.canvas.removeChild(this.clip);
    this.params = this.m_endCompleteCaller = this.m_endCompleteCallback = this.canvas = this.clip = null
};
SEffect.prototype.onComplete = function(a, b) {
    this.m_endCompleteCaller = a || null;
    this.m_endCompleteCallback = b || null
};
SEffect.prototype.onEndLoop = function() {
    this.m_repeat++;
    0 !== this.loops && this.m_repeat >= this.loops && (null !== this.m_endCompleteCallback && null !== this.m_endCompleteCaller && this.m_endCompleteCallback.call(this.m_endCompleteCaller, this), this.deleteAtTheEnd ? this.isAwaitingDelete = !0 : this.clip.gotoAndStop(this.clip.totalFrames - 1))
};
SEffect.prototype.update = function(a) {};

function SEffectAnimo(a, b, c, d, e, f) {
    SEffect.call(this, a, b, c, d, e, f);
    this.clip = PoolClips.instance.getClip(a);
    this.clip.position.x = b;
    this.clip.position.y = c;
    this.canvas.addChild(this.clip);
    this.clip.onEndAnimation(this, this.onEndLoop);
    this.type = SEffect.TYPE_ANIMO
}
Application.subclass(SEffectAnimo, SEffect);
SEffectAnimo.prototype.update = function(a) {
    this.clip.update(a)
};
SEffectAnimo.prototype.free = function() {
    PoolClips.instance.releaseClip(this.clip);
    this.params = this.m_endCompleteCaller = this.m_endCompleteCallback = this.canvas = this.clip = null
};

function SEffectNano(a, b, c, d, e) {
    NanoEffect.call(this, a, b, c, d, e);
    this.type = SEffect.TYPE_NANO;
    this.m_endCompleteCaller = this.m_endCompleteCallback = null
}
Application.subclass(SEffectNano, NanoEffect);
SEffectNano.prototype.fix = function(a) {
    this.x = a.x;
    this.y = a.y;
    for (var b = 0; b < this.emitters.length; b++)
        for (var c = 0; c < this.emitters[b].particles.length; c++) this.emitters[b].particles[c].ox = a.x + this.emitters[b].ox, this.emitters[b].particles[c].oy = a.y + this.emitters[b].oy
};
SEffectNano.prototype.onComplete = function(a, b) {
    this.m_endCompleteCaller = a || null;
    this.m_endCompleteCallback = b || null
};
SEffectNano.prototype.update = function(a) {
    NanoEffect.prototype.update.call(this, a);
    this.isAwaitingDelete && null !== this.m_endCompleteCallback && null !== this.m_endCompleteCaller && this.m_endCompleteCallback.call(this.m_endCompleteCaller, this)
};
SEffectNano.prototype.free = function() {
    NanoEffect.prototype.free.call(this);
    this.m_endCompleteCaller = this.m_endCompleteCallback = null
};

function SEffectGui(a, b, c, d, e, f) {
    SEffect.call(this, a, b, c, d, e, f);
    this.clip = Application.instance.getClip(a);
    this.canvas.addChild(this.clip);
    this.clip.position.x = b;
    this.clip.position.y = c;
    this.clip.onEndAnimation(this, this.onEndLoop);
    this.type = SEffect.TYPE_GUI;
    this.controls = {};
    this.lastInteractionControl = "";
    SScreen.parseControls(this, a)
}
Application.subclass(SEffectGui, SEffect);
SEffectGui.prototype.update = function(a) {
    this.clip && this.clip.update(a)
};
SEffectGui.prototype.getControl = function(a) {
    "undefined" === typeof this.controls[a] && Application.error("Control [" + a + "] no found");
    return this.controls[a]
};
SEffectGui.prototype.onUIPress = function(a) {
    this.onResumeScreen();
    this.lastInteractionControl = a.name
};
SEffectGui.prototype.onStopScreen = function() {
    this.clip && this.clip.stop()
};
SEffectGui.prototype.onResumeScreen = function() {
    this.clip && this.clip.resume()
};
SEffectGui.prototype.onFinishScreen = function() {};
SEffectGui.prototype.onKeyDown = function(a) {
    this.onResumeScreen()
};
SEffectGui.prototype.free = function() {
    for (var a in this.controls) this.controls[a].free(), this.controls[a] = null;
    this.controls = null;
    this.clip.hitArea && (this.clip.hitArea = null);
    this.clip = null
};

function SEffectManager() {
    this.effects = [];
    this.m_k = this.m_len = 0
}
SEffectManager.prototype.clear = function() {
    for (var a = 0; a < this.effects.length; a++) this.effects[a].isAwaitingDelete = !0
};
SEffectManager.prototype.removeEffect = function(a) {
    for (var b = 0; b < this.effects.length; b++) this.effects[b].name === a && (this.effects[b].isAwaitingDelete = !0)
};
SEffectManager.prototype.add = function(a) {
    this.effects.push(a)
};
SEffectManager.prototype.createEffect = function(a, b, c, d, e, f) {
    if (window.nano.effects[a]) return this.createEffectNano(a, b, c, d, f);
    for (var g = window.config.ui, h = 0; h < g.length; h++)
        if (g[h].gui === a) return this.createEffectGui(a, b, c, d, e, f);
    return this.createEffectAnimo(a, b, c, d, e, f)
};
SEffectManager.prototype.createEffectAnimo = function(a, b, c, d, e, f) {
    a = new SEffectAnimo(a, b, c, d, e, f);
    this.add(a);
    return a
};
SEffectManager.prototype.createEffectNano = function(a, b, c, d, e) {
    a = new SEffectNano(a, b, c, d, e);
    this.add(a);
    return a
};
SEffectManager.prototype.createEffectGui = function(a, b, c, d, e, f) {
    a = new SEffectGui(a, b, c, d, e, f);
    this.add(a);
    return a
};
SEffectManager.prototype.update = function(a) {
    a > Application.MAX_DELTA_TIME && (a = Application.MAX_DELTA_TIME);
    this.m_len = this.effects.length;
    for (this.m_k = 0; this.m_k < this.m_len; this.m_k++) this.effects[this.m_k].update(a), this.effects[this.m_k].isAwaitingDelete && (this.effects[this.m_k].free(), this.effects[this.m_k] = null, this.effects.splice(this.m_k, 1), this.m_k--, this.m_len--)
};

function PoolClips() {
    this.clips = {}
}
PoolClips.instance = null;
PoolClips.initialize = function() {
    PoolClips.instance = new PoolClips
};
PoolClips.prototype.getClip = function(a) {
    return this.clips[a] && 0 < this.clips[a].length ? (a = this.clips[a].splice(0, 1)[0], a.setFrame && a.setFrame(0), a) : Application.instance.getClip(a)
};
PoolClips.prototype.releaseClip = function(a) {
    if (a) {
        this.clips[a.name] || (this.clips[a.name] = []);
        a.parent && a.parent.removeChild(a);
        if (a.onEndAnimation) a.onEndAnimation(null, null);
        a.m_stopped = !1;
        a.setTint && 16777215 != a.tint && a.setTint(16777215);
        a.visible = !0;
        a.alpha = 1;
        a.scale.x = 1;
        a.scale.y = 1;
        a.rotation = 0;
        a.blendMode = 0;
        this.clips[a.name].push(a)
    }
};
PoolClips.prototype.stats = function() {
    Application.log("----- CLIPS POOL STATS ------");
    for (var a in this.clips) Application.log("PoolClips [" + a + "] instances " + this.clips[a].length);
    Application.log("----------------------------")
};
PoolClips.prototype.clear = function() {
    for (var a in this.clips) {
        for (var b = 0; b < this.clips[a].length; b++) this.clips[a][b].free();
        this.clips[a] = null
    }
    this.clips = {}
};

function ControlGroup() {
    this.controls = [];
    this.controlSelected = null
}
ControlGroup.prototype.addControl = function(a) {
    this.controls.push(a)
};
ControlGroup.prototype.onSelectControl = function(a) {
    for (var b = 0; b < this.controls.length; b++) this.controls[b].name === a ? (this.controls[b].gotoState(GuiControl.ST_SELECTED), this.controlSelected = this.controls[b]) : this.controls[b].gotoState(GuiControl.ST_ENABLE)
};
ControlGroup.prototype.free = function() {
    this.controlSelected = this.controls = null
};

function GuiControl(a) {
    a && 0 === a.children.length && (a.texture._frame.width = 0, a.texture._frame.height = 0);
    this.canvas = a;
    this.clip = null;
    this.clipName = this.name = "";
    this.state = 1;
    this.enabled = !0;
    this.screenContainer = null;
    this.isVisible = !0
}
GuiControl.prototype.setVisible = function(a) {
    this.canvas.visible = this.isVisible = a
};
GuiControl.prototype.free = function() {
    for (; 0 < this.canvas.children.length;) this.canvas.removeChild(this.canvas.getChildAt(0));
    this.canvas = this.clip = this.screenContainer = null
};
GuiControl.prototype.setEnabled = function(a) {
    this.enabled = a
};
GuiControl.prototype.setClip = function(a) {
    this.clip = null;
    for (this.clipName = a; 0 < this.canvas.children.length;) this.canvas.removeChild(this.canvas.getChildAt(0));
    this.clip = Application.instance.getClip(this.clipName);
    this.canvas.addChild(this.clip)
};
GuiControl.prototype.onResetState = function() {};
GuiControl.prototype.gotoState = function(a) {
    this.state = a
};
GuiControl.prototype.update = function(a) {};
GuiControl.TYPE_TEXT = "TEXT";
GuiControl.TYPE_CLIP = "CLIP";
GuiControl.TYPE_ON_OFF = "ON_OFF";
GuiControl.TYPE_BUTTON = "BUTTON";
GuiControl.TYPE_4STATES = "4STATES";
GuiControl.TYPE_CLIP_MOUSE = "CLIPMOUSE";
GuiControl.TYPE_CONTENT = "CONTENT";
GuiControl.TYPE_ANI_BUTTON = "ANI_BUTTON";
GuiControl.ST_ENABLE = 1;
GuiControl.ST_DISABLE = 2;
GuiControl.ST_SELECTED = 3;
GuiControl.ST_COMMING_SOON = 4;
GuiControl.ST_RELEASE = 5;
GuiControl.ST_OVER = 6;
GuiControl.ST_OUT = 7;
GuiControl.I_OX = 1;
GuiControl.I_OY = 2;
GuiControl.I_SCALE_X = 3;
GuiControl.I_SCALE_Y = 4;
GuiControl.I_SCALE = 5;
GuiControl.I_ROTATION = 6;
GuiControl.I_ALPHA = 7;

function GuiControlInteractive(a) {
    GuiControl.call(this, a);
    this.m_interactive = !1;
    this._moveCallback = this._moveCaller = this._pressAndReleaseCallback = this._pressAndReleaseCaller = this._releaseCallback = this._releaseCaller = this._pressCallback = this._pressCaller = null;
    this.commingSoonLink = this.outLink = this.overLink = this.releaseLink = this.selectedLink = this.disableLink = this.enableLink = "";
    this.onPressButton = !1;
    this._outCallback = this._outCaller = this._overCallback = this._overCaller = null;
    this.buttonMode = !1
}
Application.subclass(GuiControlInteractive, GuiControl);
GuiControlInteractive.prototype.free = function() {
    this.setInteractive(!1);
    this.screenContainer = this._moveCallback = this._moveCaller = this._pressAndReleaseCallback = this._pressAndReleaseCaller = this._releaseCallback = this._releaseCaller = this._pressCallback = this._pressCaller = this._outCaller = this._outCallback = this._overCallback = this._overCaller = null;
    GuiControl.prototype.free.call(this)
};
GuiControlInteractive.prototype.setInteractive = function(a) {
    this.m_interactive = a;
    this.clip && (this.clip.interactive = this.m_interactive, a ? (this.clip.self = this, this.clip.mousedown = function(a) {
            this.self.onPress(a)
        }, this.clip.touchstart = function(a) {
            this.self.onPress(a)
        }, this.clip.mouseup = function(a) {
            this.self.onRelease(a)
        }, this.clip.mouseupoutside = function(a) {
            this.self.onRelease(a)
        }, this.clip.touchend = function(a) {
            this.self.onRelease(a)
        }, this.clip.touchendoutside = function(a) {
            this.self.onRelease(a)
        }, this.clip.mousemove =
        function(a) {
            this.self.onMove(a)
        }, this.clip.touchmove = function(a) {
            this.self.onMove(a)
        }, this.clip.mouseover = function(a) {
            this.self.onOver(a)
        }, this.clip.mouseout = function(a) {
            this.self.onOut(a)
        }) : (this.clip.self = null, this.clip.mousedown = null, this.clip.touchstart = null, this.clip.mouseup = null, this.clip.mouseupoutside = null, this.clip.touchend = null, this.clip.touchendoutside = null, this.clip.mousemove = null, this.clip.touchmove = null, this.clip.mouseover = null, this.clip.mouseout = null), this.clip.buttonMode = a)
};
GuiControlInteractive.prototype.setClip = function(a) {
    GuiControl.prototype.setClip.call(this, a);
    this.setInteractive(this.m_interactive)
};
GuiControlInteractive.prototype.addPressListener = function(a, b) {
    this._pressCaller = a;
    this._pressCallback = b
};
GuiControlInteractive.prototype.addReleaseListener = function(a, b) {
    this._releaseCaller = a;
    this._releaseCallback = b
};
GuiControlInteractive.prototype.addPressAndReleaseListener = function(a, b) {
    this._pressAndReleaseCaller = a;
    this._pressAndReleaseCallback = b
};
GuiControlInteractive.prototype.addMoveListener = function(a, b) {
    this._moveCallback = b;
    this._moveCaller = a
};
GuiControlInteractive.prototype.addOverListener = function(a, b, c, d) {
    this._overCallback = b;
    this._overCaller = a;
    this._outCallback = d;
    this._outCaller = c
};
GuiControlInteractive.prototype.onPress = function(a) {
    null !== this._pressCaller && null !== this._pressCallback && this._pressCallback.call(this._pressCaller, this)
};
GuiControlInteractive.prototype.onRelease = function(a) {
    null !== this._releaseCaller && null !== this._releaseCallback && this._releaseCallback.call(this._releaseCaller, this)
};
GuiControlInteractive.prototype.onPressAndRelease = function(a) {
    null !== this._pressAndReleaseCaller && null !== this._pressAndReleaseCallback && this._pressAndReleaseCallback.call(this._pressAndReleaseCaller, this)
};
GuiControlInteractive.prototype.onMove = function(a) {
    null !== this._moveCaller && null !== this._moveCallback && this._moveCallback.call(this._moveCaller, this, a)
};
GuiControlInteractive.prototype.onOver = function(a) {
    null !== this._overCaller && null !== this._overCallback && this._overCallback.call(this._overCaller, this, a);
    this.buttonMode && Application.instance.canvasEvents && (document.getElementById("MainCanvasEvents").style.cursor = "pointer")
};
GuiControlInteractive.prototype.onOut = function(a) {
    null !== this._outCaller && null !== this._outCallback && this._outCallback.call(this._outCaller, this, a);
    Application.instance.canvasEvents && (document.getElementById("MainCanvasEvents").style.cursor = "default")
};

function GuiThumbs4State(a, b, c, d, e) {
    GuiControlInteractive.call(this, a);
    this.enableLink = b || "";
    this.disableLink = c || "";
    this.selectedLink = d || "";
    this.commingSoonLink = e || "";
    this.gotoState(GuiControl.ST_ENABLE)
}
Application.subclass(GuiThumbs4State, GuiControlInteractive);
GuiThumbs4State.prototype.setEnabled = function(a) {
    (this.enabled = a) || this.gotoState(GuiControl.ST_DISABLE)
};
GuiThumbs4State.prototype.gotoState = function(a) {
    if (this.enabled) switch (a) {
        case GuiControl.ST_ENABLE:
            "" !== this.enableLink && (this.setClip(this.enableLink), this.setInteractive(!0), this.state = a);
            break;
        case GuiControl.ST_DISABLE:
            "" !== this.disableLink && (this.setClip(this.disableLink), this.setInteractive(!1), this.enabled = !1, this.state = a);
            break;
        case GuiControl.ST_SELECTED:
            "" !== this.selectedLink && (this.setClip(this.selectedLink), this.setInteractive(!1), this.state = a);
            break;
        case GuiControl.ST_COMMING_SOON:
            "" !==
            this.commingSoonLink && (this.setClip(this.commingSoonLink), this.setInteractive(!1), this.state = a, this.enabled = !1)
    }
};

function GuiClip(a) {
    GuiControl.call(this, a)
}
Application.subclass(GuiClip, GuiControl);

function GuiOnOff(a) {
    GuiControlInteractive.call(this, a);
    this.setInteractive(!0);
    this.m_callbackOff = this.m_callbackOn = this.m_callerSwitch = this.m_offLink = this.m_onLink = null;
    this.buttonMode = !0
}
Application.subclass(GuiOnOff, GuiControlInteractive);
GuiOnOff.prototype.free = function() {
    this.m_callbackOff = this.m_callbackOn = this.m_callerSwitch = this.m_offLink = this.m_onLink = null;
    GuiControlInteractive.prototype.free.call(this)
};
GuiOnOff.prototype.onTurnOn = function(a, b) {
    this.m_callerSwitch = a;
    this.m_callbackOn = b
};
GuiOnOff.prototype.onTurnOff = function(a, b) {
    this.m_callerSwitch = a;
    this.m_callbackOff = b
};
GuiOnOff.prototype.setClip = function(a) {
    GuiControlInteractive.prototype.setClip.call(this, a);
    null !== this.clip && this.clip.stop()
};
GuiOnOff.prototype.setOnClip = function(a) {
    this.m_onLink = a
};
GuiOnOff.prototype.setOffClip = function(a) {
    this.m_offLink = a
};
GuiOnOff.prototype.setEnabled = function(a) {
    GuiControlInteractive.prototype.setEnabled.call(this, a);
    null !== this.clip && this.clip.gotoAndStop(this.enabled ? 1 : 4)
};
GuiOnOff.prototype.gotoState = function(a) {
    this.state = a;
    this.setClip(a === GuiOnOff.ST_ON ? this.m_onLink : this.m_offLink)
};
GuiOnOff.prototype.onPress = function(a) {
    this.enabled && (GuiControlInteractive.prototype.onPress.call(this, a), this.state === GuiOnOff.ST_OFF ? (this.gotoState(GuiOnOff.ST_ON), null != this.m_callerSwitch && null != this.m_callbackOn && this.m_callbackOn.call(this.m_callerSwitch)) : this.state === GuiOnOff.ST_ON && (this.gotoState(GuiOnOff.ST_OFF), null != this.m_callerSwitch && null != this.m_callbackOff && this.m_callbackOff.call(this.m_callerSwitch)))
};
GuiOnOff.prototype.onRelease = function(a) {
    this.enabled && GuiControlInteractive.prototype.onRelease.call(this, a)
};
GuiOnOff.ST_ON = 1;
GuiOnOff.ST_OFF = 2;

function GuiButton(a) {
    GuiControlInteractive.call(this, a);
    this.addOverListener(this, this.onOverCallback, this, this.onOutCallback);
    this.setInteractive(!0);
    this.buttonMode = !0
}
Application.subclass(GuiButton, GuiControlInteractive);
GuiButton.prototype.setClip = function(a) {
    GuiControlInteractive.prototype.setClip.call(this, a);
    null !== this.clip && this.clip.gotoAndStop(1)
};
GuiButton.prototype.setEnabled = function(a) {
    GuiControlInteractive.prototype.setEnabled.call(this, a);
    this.clip.buttonMode = this.buttonMode = a;
    null !== this.clip && this.clip.gotoAndStop(this.enabled ? 1 : 4)
};
GuiButton.prototype.onPress = function(a) {
    this.enabled && (GuiControlInteractive.prototype.onPress.call(this, a), null !== this.clip && this.clip.gotoAndStop(2))
};
GuiButton.prototype.onRelease = function(a) {
    GuiControlInteractive.prototype.onRelease.call(this, a);
    null !== this.clip && this.clip.gotoAndStop(this.enabled ? 1 : 4)
};
GuiButton.prototype.onOverCallback = function(a) {
    null !== this.clip && this.clip.gotoAndStop(this.enabled ? 3 : 4);
    if (this.screenContainer && !Application.instance.isMobileDevice) this.screenContainer.onUIOver(this)
};
GuiButton.prototype.onOutCallback = function(a) {
    null !== this.clip && this.clip.gotoAndStop(this.enabled ? 1 : 4);
    if (this.screenContainer && !Application.instance.isMobileDevice) this.screenContainer.onUIOut(this)
};

function GuiButtonState(a, b) {
    GuiControlInteractive.call(this, a);
    this.outLink = b + "_out";
    this.overLink = b + "_over";
    this.enableLink = b + "_on";
    this.disableLink = b + "_off";
    this.releaseLink = b + "_out";
    this.selectedLink = b + "_press";
    this.onPressButton = !1;
    this.addOverListener(this, this.onOverCallback, this, this.onOutCallback);
    this.gotoState(GuiControl.ST_ENABLE);
    this.buttonMode = !0
}
Application.subclass(GuiButtonState, GuiControlInteractive);
GuiButtonState.prototype.setEnabled = function(a) {
    GuiControlInteractive.prototype.setEnabled.call(this, a);
    this.gotoState(this.enabled ? GuiControl.ST_ENABLE : GuiControl.ST_DISABLE)
};
GuiButtonState.prototype.onPress = function(a) {
    this.enabled && this.m_interactive && (GuiControlInteractive.prototype.onPress.call(this, a), this.gotoState(GuiControl.ST_SELECTED))
};
GuiButtonState.prototype.onRelease = function(a) {
    this.enabled && this.m_interactive && (GuiControlInteractive.prototype.onRelease.call(this, a), this.state === GuiControl.ST_SELECTED && this.gotoState(GuiControl.ST_RELEASE))
};
GuiButtonState.prototype.onOverCallback = function(a) {
    if (this.state !== GuiControl.ST_OVER && !this.onPressButton && this.m_interactive && (this.gotoState(GuiControl.ST_OVER), this.screenContainer && !Application.instance.isMobileDevice)) this.screenContainer.onUIOver(this)
};
GuiButtonState.prototype.onOutCallback = function(a) {
    if (this.state === GuiControl.ST_OUT || this.state === GuiControl.ST_RELEASE || this.onPressButton || !this.m_interactive) this.onPressButton && (this.onPressButton = !1, this.state === GuiControl.ST_SELECTED && this.gotoState(GuiControl.ST_OUT));
    else if (this.gotoState(GuiControl.ST_OUT), this.screenContainer && !Application.instance.isMobileDevice) this.screenContainer.onUIOut(this)
};
GuiButtonState.prototype.onResetState = function() {
    this.enabled && (this.onPressButton = !1, this.gotoState(GuiControl.ST_ENABLE))
};
GuiButtonState.prototype.setClip = function(a) {
    this.isVisible && GuiControlInteractive.prototype.setClip.call(this, a)
};
GuiButtonState.prototype.onFade = function(a, b) {
    b = b || 500;
    var c, d;
    this.clip.visible = !0;
    if (this.isVisible = a) {
        if (1 === this.clip.alpha) return;
        this.gotoState(GuiControl.ST_ENABLE);
        c = 0;
        d = 1
    } else {
        if (0 === this.clip.alpha) return;
        c = 1;
        d = 0
    }
    Common.tween({
        parent: this,
        clip: this.clip,
        alpha: c
    }, {
        alpha: d
    }, b, !0, 0, TweenEasing.LinearNone);
    this.setInteractive(this.isVisible)
};
GuiButtonState.prototype.setVisible = function(a) {
    this.isVisible = a;
    GuiControlInteractive.prototype.setVisible.call(this, a)
};
GuiButtonState.prototype.update = function(a) {
    GuiControlInteractive.prototype.update.call(this, a)
};
GuiButtonState.prototype.gotoState = function(a) {
    switch (a) {
        case GuiControl.ST_ENABLE:
            this.m_interactive = !0;
            this.setClip(this.enableLink);
            this.state = a;
            break;
        case GuiControl.ST_DISABLE:
            this.m_interactive = !1;
            this.setClip(this.disableLink);
            this.enabled = !1;
            this.state = a;
            break;
        case GuiControl.ST_SELECTED:
            this.m_interactive = this.onPressButton = !0;
            this.setClip(this.selectedLink);
            this.state = a;
            break;
        case GuiControl.ST_RELEASE:
            this.m_interactive = !0;
            this.setClip(this.outLink);
            this.state = a;
            break;
        case GuiControl.ST_OVER:
            this.m_interactive = !0;
            this.setClip(this.overLink);
            this.state = a;
            break;
        case GuiControl.ST_OUT:
            this.m_interactive = !0, this.setClip(this.outLink), this.state = a
    }
};

function GuiText(a) {
    GuiControl.call(this, a);
    this.offsetY = this.offsetX = this.baseHeight = this.baseWidth = 0;
    this.textfield = null;
    this.align = GuiText.ALIGN_CENTER;
    this.valign = GuiText.ALIGN_V_MIDDLE
}
Application.subclass(GuiText, GuiControl);
GuiText.prototype.free = function() {
    this.textfield && (this.textfield.free(), this.canvas.removeChild(this.textfield), this.textfield = null);
    GuiControl.prototype.free.call(this)
};
GuiText.prototype.setText = function(a) {
    this.textfield && (this.textfield.text = a, GuiText.updateAlign(this))
};
GuiText.prototype.setClip = function(a) {
    a = Application.instance.getClip(a);
    var b = a.getChildAt(0);
    this.baseWidth = b.width;
    this.baseHeight = b.height;
    this.offsetX = b.position.x - .5 * this.baseWidth;
    this.offsetY = b.position.y - .5 * this.baseHeight;
    this.textfield = new SPixiText("", {});
    this.canvas.addChild(this.textfield);
    this.textfield.debugRect = new Rectangle(this.offsetX, this.offsetY, this.baseWidth, this.baseHeight);
    a.free()
};
GuiText.prototype.setTextEmpty = function() {
    this.setTextLocalized("STR_EMPTY")
};
GuiText.prototype.setTextJoined = function(a, b, c, d) {
    d || -1 !== b.indexOf(c) ? this.setTextLocalized(a + ((10 <= c ? "" : "0") + c)) : Application.warn("GuiText::setTextJoined: value " + c + " not in range " + b + ".")
};
GuiText.prototype.setTextLocalized = function(a) {
    this.setText(Application.strings[a])
};
GuiText.prototype.setTextNumeric = function(a) {
    "number" === typeof a ? this.setText(a.toString()) : Application.warn("GuiText::setTextNumeric: text not numeric.")
};
GuiText.prototype.setTextRaw = function(a) {
    Application.warn("setTextRaw: " + a);
    this.setText(a)
};
GuiText.prototype.setTextReplace = function(a, b, c) {
    if (b.length !== c.length) Application.warn("GuiText::setTextReplace: array inputs do not have the same length.");
    else if (Application.strings[a]) {
        a = Application.strings[a];
        for (var d = 0; d < b.length; d++) a = a.replace(b[d], c[d]);
        this.setText(a)
    } else Application.warn("GuiText::setTextReplace: id " + a + " not found.")
};
GuiText.prototype.setVisible = function(a) {
    this.canvas.visible = this.isVisible = a
};
GuiText.updateAlign = function(a) {
    var b = 0;
    Application.RENDER_MODE === Application.RENDER_CANVAS && (b = a.textfield.style.padding);
    if (a.textfield) {
        switch (a.align) {
            case GuiText.ALIGN_LEFT:
                a.textfield.position.x = a.offsetX - b;
                break;
            case GuiText.ALIGN_CENTER:
                a.textfield.position.x = .5 * -a.textfield.width - b;
                break;
            case GuiText.ALIGN_RIGHT:
                a.textfield.position.x = .5 * a.baseWidth - a.textfield.width - b
        }
        switch (a.valign) {
            case GuiText.ALIGN_V_TOP:
                a.textfield.position.y = a.offsetY - b;
                break;
            case GuiText.ALIGN_V_MIDDLE:
                a.textfield.position.y =
                    .5 * -a.textfield.height - b;
                break;
            case GuiText.ALIGN_V_BOTTOM:
                a.textfield.position.y = .5 * a.baseHeight - a.textfield.height - b
        }
    }
};
GuiText.getPixiAlign = function(a) {
    return a.align === GuiText.ALIGN_LEFT ? "left" : a.align === GuiText.ALIGN_CENTER ? "center" : "right"
};
GuiText.ALIGN_LEFT = 0;
GuiText.ALIGN_CENTER = 1;
GuiText.ALIGN_RIGHT = 2;
GuiText.ALIGN_V_TOP = 0;
GuiText.ALIGN_V_MIDDLE = 1;
GuiText.ALIGN_V_BOTTOM = 2;

function GuiSlider(a, b, c, d) {
    this.x = c;
    this.y = d;
    this.m_pressed = !1;
    this.canvas = a;
    this.m_collision = this.m_pointer = this.m_animation = null;
    this.m_nameClip = b;
    this.m_caller = this.m_callback = null;
    this.m_collisionPositionX = 0;
    this.createGuiSlider();
    this.m_currentIdTouch = -1;
    this.m_lastX = this.m_virtualPointerPositionX = 0
}
GuiSlider.HALF_TOTAL_DISTANCE = 50;
GuiSlider.POINTER_RADIO = 15;
GuiSlider.POINTER_RADIO_POW2 = 225;
GuiSlider.POINTER_NAME_INSTANCE = "pointer";
GuiSlider.COLLISION_NAME_INSTANCE = "mcCollision";
GuiSlider.prototype.linkFunction = function(a, b) {
    this.m_callback = b;
    this.m_caller = a
};
GuiSlider.prototype.createGuiSlider = function() {
    this.m_animation = Application.instance.getClip(this.m_nameClip);
    this.canvas.addChild(this.m_animation);
    this.m_animation.position.x = this.x;
    this.m_animation.position.y = this.y;
    this.m_pointer = this.m_animation.getInstance(GuiSlider.POINTER_NAME_INSTANCE);
    this.m_collision = this.m_animation.collisions[GuiSlider.COLLISION_NAME_INSTANCE];
    this.m_collisionPositionX = this.m_collision.x - this.m_pointer.position.x;
    this.m_animation.interactive = !0;
    this.m_animation.self =
        this;
    this.m_animation.mousedown = function(a) {
        this.self.onPointerPress(a)
    };
    this.m_animation.touchstart = function(a) {
        this.self.onPointerPress(a)
    };
    this.m_animation.mouseup = function(a) {
        this.self.onPointerRelease(a)
    };
    this.m_animation.mouseupoutside = function(a) {
        this.self.onPointerRelease(a)
    };
    this.m_animation.touchend = function(a) {
        this.self.onPointerRelease(a)
    };
    this.m_animation.touchendoutside = function(a) {
        this.self.onPointerRelease(a)
    };
    this.m_animation.mousemove = function(a) {
        this.self.onPointerMove(a)
    };
    this.m_animation.touchmove =
        function(a) {
            this.self.onPointerMove(a)
        }
};
GuiSlider.prototype.onPointerPress = function(a) {
    if (!Application.instance.isMobileDevice || -1 === this.m_currentIdTouch) {
        var b = this.x + this.m_virtualPointerPositionX - a.data.global.x - GuiSlider.HALF_TOTAL_DISTANCE,
            c = this.y - a.data.global.y;
        b * b + c * c < GuiSlider.POINTER_RADIO_POW2 && (Application.instance.isMobileDevice && (this.m_currentIdTouch = a.currentTouchEvent.identifier), this.m_lastX = a.data.global.x, this.m_pressed = !0)
    }
};
GuiSlider.prototype.onPointerRelease = function(a) {
    Application.instance.isMobileDevice && this.m_currentIdTouch !== a.currentTouchEvent.identifier || (this.m_pressed = !1, this.m_currentIdTouch = -1, this.m_virtualPointerPositionX > 2 * GuiSlider.HALF_TOTAL_DISTANCE ? this.m_virtualPointerPositionX = 2 * GuiSlider.HALF_TOTAL_DISTANCE : 0 > this.m_virtualPointerPositionX && (this.m_virtualPointerPositionX = 0))
};
GuiSlider.prototype.onPointerMove = function(a) {
    if ((!Application.instance.isMobileDevice || this.m_currentIdTouch === a.currentTouchEvent.identifier) && this.m_pressed) {
        var b = a.data.global.x - this.m_lastX;
        this.m_lastX = a.data.global.x;
        this.setPointerPosition((this.m_virtualPointerPositionX + b) / (2 * GuiSlider.HALF_TOTAL_DISTANCE))
    }
};
GuiSlider.prototype.setPointerPosition = function(a) {
    this.m_virtualPointerPositionX = a *= 2 * GuiSlider.HALF_TOTAL_DISTANCE;
    this.updatePointerPosition(a)
};
GuiSlider.prototype.updatePointerPosition = function(a) {
    var b = this.m_pointerPositionX;
    this.m_pointerPositionX = a > 2 * GuiSlider.HALF_TOTAL_DISTANCE ? 2 * GuiSlider.HALF_TOTAL_DISTANCE : 0 > a ? 0 : a;
    this.m_pointerPositionX !== b && (this.m_pointer.position.x = this.m_pointerPositionX - GuiSlider.HALF_TOTAL_DISTANCE, this.m_collision.x = this.m_pointer.position.x + this.m_collisionPositionX, null !== this.m_callback && this.m_callback.call(this.m_caller, this, this.m_pointerPositionX / (2 * GuiSlider.HALF_TOTAL_DISTANCE)))
};
GuiSlider.prototype.free = function() {
    this.m_pointer = null;
    this.canvas.removeChild(this.m_animation);
    this.m_animation = null
};

function GuiContent(a) {
    GuiControl.call(this, a);
    this.clip = Application.instance.addDisplayContainer();
    this.canvas.addChild(this.clip)
}
Application.subclass(GuiContent, GuiControl);

function DataMovement(a, b) {
    this.motionParams = null;
    var c = Common.getParams(a);
    this.isLoop = 1 == parseInt(c.loop, 10);
    this.isReverse = 1 == parseInt(c.reverse, 10);
    this.speed = parseFloat(c.speed);
    this.setMotionParams(b)
}
DataMovement.prototype.setMotionParams = function(a) {
    this.motionParams = [];
    a = a.split(";");
    for (var b = 0; b < a.length;) {
        var c = [],
            d = a[b].split(":");
        if (2 > d.length) Application.warn("DataMovement::setMotionParams(): " + a[b]);
        else {
            c.push(d[0]);
            for (var d = d[1].split(","), e = 0; e < d.length;) c.push(d[e]), ++e;
            this.motionParams.push(c)
        }++b
    }
};
DataMovement.prototype.free = function() {
    this.motionParams = null
};

function SCamera(a, b, c) {
    this.m_y = this.m_x = 0;
    this.m_width = b;
    this.m_height = c;
    this.m_world = a
}
SCamera.prototype.free = function() {
    this.m_world = null
};
SCamera.prototype.update = function(a) {};
SCamera.prototype.width = function() {
    return this.m_width
};
SCamera.prototype.height = function() {
    return this.m_height
};
SCamera.prototype.setWidth = function(a) {
    this.m_width = a
};
SCamera.prototype.setHeight = function(a) {
    this.m_height = a
};
SCamera.prototype.getX = function() {
    return this.m_x
};
SCamera.prototype.getY = function() {
    return this.m_y
};
SCamera.prototype.getRight = function() {
    return this.m_x + this.m_width
};
SCamera.prototype.getBottom = function() {
    return this.m_y + this.m_height
};
SCamera.prototype.addX = function(a) {
    this.m_x += a
};
SCamera.prototype.addY = function(a) {
    this.m_y += a
};
SCamera.prototype.setX = function(a) {
    this.m_x = a
};
SCamera.prototype.setY = function(a) {
    this.m_y = a
};
SCamera.prototype.setScale = function(a) {
    this.m_world.canvas().scaleX = a;
    this.m_world.canvas().scaleY = a
};
SCamera.prototype.onDebugDraw = function(a) {
    ContextGraphics.drawRectangle(a, 0, 0, this.m_width, this.m_height, 4, Common.COLOR_RED, Common.COLOR_NONE)
};

function SConditionalType() {}
SConditionalType.AND = 0;
SConditionalType.OR = 1;

function SConditional(a, b, c) {
    this.m_id = a;
    this.m_callbackEval = b;
    this.m_idCaller = c
}
SConditional.prototype.id = function() {
    return this.m_id
};
SConditional.prototype.evalue = function() {
    return this.m_callbackEval.call(this.m_idCaller, this)
};

function SConditionalChecker(a, b) {
    "undefined" === typeof b && (b = -1);
    SConditional.call(this, b, null, null);
    this.m_isAnd = a === SConditionalType.AND;
    this.m_conditions = []
}
Application.subclass(SConditionalChecker, SConditional);
SConditionalChecker.prototype.addCondition = function(a) {
    this.m_conditions.push(a)
};
SConditionalChecker.prototype.evalue = function() {
    for (var a = this.m_isAnd, b = 0; b < this.m_conditions.length; b++)
        if (this.m_isAnd) {
            if (a = a && this.m_conditions[b].evalue(), !a) return !1
        } else if (a = a || this.m_conditions[b].evalue()) return !0;
    return a
};

function SNpc(a, b, c, d) {
    this.id = a;
    this.x = b;
    this.y = c;
    this.params = d
}

function SNpcManager(a) {
    this.m_world = a;
    this.m_showCollisions = !1;
    this.m_buffer = [];
    this.m_actors = []
}
SNpcManager.prototype.free = function() {
    this.m_buffer = null;
    for (var a = 0; a < this.m_actors.length; a++) this.m_actors[a].free(), this.m_actors[a] = null;
    this.m_world = this.m_actors = null
};
SNpcManager.prototype.collisionsOn = function() {
    return this.m_showCollisions
};
SNpcManager.prototype.actors = function() {
    return this.m_actors
};
SNpcManager.prototype.onNewNpcs = function(a, b, c) {};
SNpcManager.prototype.init = function(a) {};
SNpcManager.prototype.showCollisions = function(a) {
    this.m_showCollisions = a;
    for (var b = this.m_actors.length - 1; 0 <= b; --b) this.m_actors[b].showCollision(a)
};
SNpcManager.prototype.onDebugDraw = function(a) {
    for (var b = this.m_actors.length - 1; 0 <= b; --b) this.m_actors[b].onDebugDraw(a)
};
SNpcManager.prototype.addNpc = function(a) {
    this.m_buffer.push(a)
};
SNpcManager.prototype.add = function(a) {
    a.setManager(this);
    this.m_actors.push(a);
    return a
};
SNpcManager.prototype.update = function(a) {
    for (var b = this.m_actors.length - 1; 0 <= b;) this.m_actors[b].isAwaitingDelete() ? (this.m_actors[b].free(), this.m_actors[b] = null, this.m_actors.splice(b, 1)) : this.m_actors[b].update(a), b--
};
SNpcManager.prototype.reset = function() {
    for (var a = 0; a < this.m_actors.length; a++) this.m_actors[a].free(), this.m_actors[a] = null;
    this.m_actors = []
};

function SWorld(a, b) {
    this.m_canvas = a;
    this.m_game = b;
    this.m_height = this.m_width = 0;
    this.m_actorManager = this.m_camera = this.m_player = null
}
SWorld.prototype.free = function() {
    this.m_player = this.m_game = this.m_canvas = null;
    null !== this.m_actorManager && (this.m_actorManager.free(), this.m_actorManager = null);
    null !== this.m_camera && (this.m_camera.free(), this.m_camera = null)
};
SWorld.prototype.width = function() {
    return this.m_width
};
SWorld.prototype.height = function() {
    return this.m_height
};
SWorld.prototype.game = function() {
    return this.m_game
};
SWorld.prototype.canvas = function() {
    return this.m_canvas
};
SWorld.prototype.player = function() {
    return this.m_player
};
SWorld.prototype.camera = function() {
    return this.m_camera
};
SWorld.prototype.actorManager = function() {
    return this.m_actorManager
};
SWorld.prototype.objectsCanvas = function() {
    return null
};
SWorld.prototype.checkCollision = function(a) {
    return null
};
SWorld.prototype.createCamera = function() {};
SWorld.prototype.createNpcManager = function() {};
SWorld.prototype.update = function(a) {};

function SWorldActor(a, b, c, d, e) {
    this.m_canvas = a;
    this.m_world = b;
    this.m_isIdle = !1;
    this.m_character = this.m_clip = null;
    this.m_tempPosY = this.m_tempPosX = this.m_oldY = this.m_oldX = this.m_y = this.m_x = 0;
    this.m_collisionVisible = !1;
    this.m_collisionDisplay = null;
    this.m_flipX = !1;
    this.m_scaleY = this.m_scaleX = 1;
    this.m_isAwaitingDelete = !1;
    this.m_isRangeControlled = this.m_isRangeDeleted = !0;
    this.m_manager = null;
    this.m_speed = new Vector2D;
    this.m_health = 0;
    this.m_state = -1;
    this.m_bounds = null;
    this.setActorClip(e);
    this.setPosition(c,
        d);
    this.m_className = ""
}
SWorldActor.prototype.className = function() {
    return this.m_className
};
SWorldActor.prototype.setClassName = function(a) {
    this.m_className = a
};
SWorldActor.prototype.isAwaitingDelete = function() {
    return this.m_isAwaitingDelete
};
SWorldActor.prototype.setAwaitingDelete = function(a) {
    this.m_isAwaitingDelete = a
};
SWorldActor.prototype.isRangeDeleted = function() {
    return this.m_isRangeDeleted
};
SWorldActor.prototype.setRangeDeleted = function(a) {
    this.m_isRangeDeleted = a
};
SWorldActor.prototype.isRangeControlled = function() {
    return this.m_isRangeControlled
};
SWorldActor.prototype.setRangeControlled = function(a) {
    this.m_isRangeControlled = a
};
SWorldActor.prototype.getHealth = function() {
    return this.m_health
};
SWorldActor.prototype.setHealth = function(a) {
    this.m_health = a
};
SWorldActor.prototype.setManager = function(a) {
    this.m_manager = a
};
SWorldActor.prototype.clip = function() {
    return this.m_clip
};
SWorldActor.prototype.bounds = function() {
    return this.m_bounds
};
SWorldActor.prototype.speedX = function() {
    return this.m_speed.x
};
SWorldActor.prototype.speedY = function() {
    return this.m_speed.y
};
SWorldActor.prototype.world = function() {
    return this.m_world
};
SWorldActor.prototype.isIdle = function() {
    return this.m_isIdle
};
SWorldActor.prototype.getX = function() {
    return this.m_x
};
SWorldActor.prototype.getY = function() {
    return this.m_y
};
SWorldActor.prototype.flipX = function() {
    return this.m_flipX
};
SWorldActor.prototype.setActorClip = function(a) {
    a = "undefined" === typeof a ? "" : a;
    0 < a.length && (this.m_clip = Application.instance.getClip(a), this.m_canvas.addChild(this.m_clip), this.m_clip.parent = this.m_canvas)
};
SWorldActor.prototype.setPositionPoint = function(a) {
    this.m_oldX = this.m_x = a.x;
    this.m_oldY = this.m_y = a.y
};
SWorldActor.prototype.setPosition = function(a, b) {
    this.m_oldX = this.m_x = a;
    this.m_oldY = this.m_y = b
};
SWorldActor.prototype.setX = function(a) {
    this.m_oldX = this.m_x = a
};
SWorldActor.prototype.setY = function(a) {
    this.m_oldY = this.m_y = a
};
SWorldActor.prototype.setFlipX = function(a) {
    this.m_flipX = a;
    null !== this.m_clip && (this.m_flipX && 0 < this.m_clip.scale.x || !this.m_flipX && 0 > this.m_clip.scale.x) && (this.m_clip.scale.x = -this.m_clip.scale.x)
};
SWorldActor.prototype.setScaleX = function(a) {
    this.m_scaleX != a && (null !== this.m_clip && (this.m_clip.scale.x = this.m_flipX ? -a : a), this.m_scaleX = a)
};
SWorldActor.prototype.setScaleY = function(a) {
    this.m_scaleY != a && (null !== this.m_clip && (this.m_clip.scale.y = a), this.m_scaleY = a)
};
SWorldActor.prototype.setScale = function(a, b) {
    this.setScaleX(a);
    this.setScaleY(b)
};
SWorldActor.prototype.resize = function(a, b) {
    null !== this.m_clip && this.setScale(a / this.m_clip.width, b / this.m_clip.height)
};
SWorldActor.prototype.getBounds = function() {
    return null !== this.m_bounds ? new Rectangle(this.m_x + this.m_bounds.x, parseFloat(this.m_y + this.m_bounds.y), this.m_bounds.w, this.m_bounds.h) : null
};
SWorldActor.prototype.updateBounds = function() {
    var a = null;
    "undefined" !== typeof this.m_clip.bounds ? a = this.m_clip.bounds : "undefined" != typeof this.m_clip.collision && (a = this.m_clip.collision);
    if (null !== a) {
        var b = this.m_scaleX,
            c = this.m_scaleY;
        this.m_scaleX == this.m_scaleY && (this.m_scale = this.m_scaleX);
        this.m_bounds = new Rectangle(b * (this.m_flipX ? -a.x - a.w : a.x), c * a.y, b * a.w, c * a.h)
    } else this.m_bounds = null
};
SWorldActor.prototype.gotoState = function(a, b) {
    a !== this.m_state && (this.characterGotoState(a, "undefined" !== typeof b ? b : !0), this.m_state = a)
};
SWorldActor.prototype.characterGotoState = function(a, b) {
    a !== this.m_state && (null !== this.m_clip && (this.m_tempPosX = this.m_clip.x, this.m_tempPosY = this.m_clip.y), this.m_character.gotoState(a, b), this.m_clip = this.m_character.clip, this.m_clip.scale.x = this.m_flipX ? -this.m_scaleX : this.m_scaleX, this.m_clip.scale.y = this.m_scaleY, this.m_clip.position.x = this.m_tempPosX, this.m_clip.position.y = this.m_tempPosY, null !== this.m_manager && (this.m_collisionVisible = this.m_manager.collisionsOn()), this.showCollision(this.m_collisionVisible))
};
SWorldActor.prototype.update = function(a) {};
SWorldActor.prototype.showInCamera = function(a) {};
SWorldActor.prototype.hitTest = function(a) {
    if (null !== this.m_bounds) {
        var b = new Rectangle(this.m_bounds.x, this.m_bounds.y, this.m_bounds.w, this.m_bounds.h);
        b.x += this.m_x;
        b.y += this.m_y;
        if (null !== a.getBounds()) return b.intersectRect(a.getBounds())
    }
    return !1
};
SWorldActor.prototype.hitIntersection = function(a) {
    if (null !== this.m_bounds) {
        var b = new Rectangle(this.m_bounds.x, this.m_bounds.y, this.m_bounds.w, this.m_bounds.h);
        b.x += this.m_x;
        b.y += this.m_y;
        a = a.getBounds();
        if (null !== a) return b.intersection(a)
    }
    return null
};
SWorldActor.prototype.showCollision = function(a) {
    this.m_collisionVisible = a
};
SWorldActor.prototype.onDebugDraw = function(a) {
    null !== this.m_bounds && "undefined" !== typeof this.m_bounds && ContextGraphics.drawRectangle(a, this.m_bounds.x, this.m_bounds.y, this.m_bounds.w, this.m_bounds.h, 2, Common.COLOR_RED, Common.COLOR_NONE)
};
SWorldActor.prototype.setIdle = function(a) {
    this.m_isIdle = a;
    null !== this.m_clip && (this.m_clip.visible = !a)
};
SWorldActor.prototype.onKeyUp = function(a) {};
SWorldActor.prototype.onKeyDown = function(a) {};
SWorldActor.prototype.onEndAnimation = function(a) {};
SWorldActor.prototype.destroy = function() {
    this.m_isAwaitingDelete = !0
};
SWorldActor.prototype.free = function() {
    null !== this.m_character && (this.m_character.free(), this.m_clip = this.m_character = null);
    null !== this.m_clip && (this.m_clip.parent.removeChild(this.m_clip), this.m_clip.free(), this.m_clip = null);
    this.m_manager = this.m_speed = this.m_world = this.m_canvas = this.m_bounds = null
};

function Global() {}
Global.baseScale = 1;
Global.minScale = 1;
Global.maxScale = 1;
Global.offsetZoomX = 0;
Global.offsetZoomY = 0;
Global.game = null;
Global.playerSelected = -1;
Global.level = 1;
Global.map = 0;
Global.showDialogue = !1;
Global.itemsCollected = 0;
Global.totalItems = 0;
Global.adrenalineTime = 0;
Global.bossRoom = !1;
Global.MAP_TUTORIAL = 0;
Global.MAP_BONUS = 9;
Global.LEVEL_BONUS = 9;
Global.LEVEL_BOSS = 8;
Global.PLAYER_MAL = 1;
Global.PLAYER_UMA = 2;
Global.TOTAL_ACHIEVEMENTS = 6;
Global.TOTAL_STARS = 3;
Global.TOTAL_LEVELS = 9;

function Cheats() {}
Cheats.enabled = Application.USE_CHEATS;
Cheats.EVENT_ON_WIN = "onWin";
Cheats.EVENT_ON_LOSE = "onLose";
Cheats.EVENT_ON_ADDLIFE = "addLife";
Cheats.EVENT_ON_TOGGLE_COLLISION = "toggleCollision";
Cheats.events = [Cheats.EVENT_ON_TOGGLE_COLLISION, Cheats.EVENT_ON_WIN, Cheats.EVENT_ON_LOSE, Cheats.EVENT_ON_ADDLIFE];
Cheats.onEvent = function(a) {
    if (Cheats.enabled) {
        switch (a) {
            case Cheats.EVENT_ON_TOGGLE_COLLISION:
                Application.instance.stage.toggleCollision(), Global.game && Global.game.toggleDebugCollision && Global.game.toggleDebugCollision()
        }
        Application.info("[CHEAT] " + a)
    }
};
Cheats.onKeyDown = function(a) {
    if (Cheats.enabled) switch (a) {
        case Common.KEY_W:
            Cheats.onEvent(Cheats.EVENT_ON_WIN);
            break;
        case Common.KEY_L:
            Cheats.onEvent(Cheats.EVENT_ON_LOSE);
            break;
        case Common.KEY_1:
            Cheats.onEvent(Cheats.EVENT_ON_TOGGLE_COLLISION);
            break;
        case Common.KEY_2:
            PlatformGameRunner.instance && PlatformGameRunner.instance.world.player() && PlatformGameRunner.instance.world.player().setHealth(20);
            break;
        case Common.KEY_3:
            PlatformGameRunner.instance && PlatformGameRunner.instance.world.player() && PlatformGameRunner.instance.world.player().setEnergy(6);
            break;
        case Common.KEY_4:
            if (PlatformGameRunner.instance && PlatformGameRunner.instance.world.player()) {
                if (PlatformGameRunner.instance.world.player().markToWin = !0, BossLvl8.instance) BossLvl8.instance.onHit(PlatformGameRunner.instance.world.player(), 1E3)
            } else if (GameBonus.instance && GameBonusBoss.instance) GameBonusBoss.instance.onHit(1E3);
            break;
        case Common.KEY_5:
            if (PlatformGameRunner.instance && PlatformGameRunner.instance.world.player()) PlatformGameRunner.instance.world.player().onHit(null, 1E3);
            break;
        case Common.KEY_0:
            PlatformGameRunner.instance &&
                PlatformGameRunner.instance.world.player() && PlatformGameRunner.instance.world.player().toggleFreeMovement();
            break;
        case Common.KEY_S:
            PoolClips.instance.stats();
            break;
        case Common.KEY_D:
            GuiGame.instance && GuiGame.instance.addPopup(GuiDialogue, "mcGuiScreenCutscene").initDialogue("D_INTRO_MAL_01");
            break;
        case Common.KEY_R:
            PlatformGameRunner.instance && PlatformGameRunner.instance.world.player() && PlatformGameRunner.instance.world.player().activeRushMode();
            break;
        case Common.KEY_T:
            PlatformGameRunner.instance &&
                PlatformGameRunner.instance.world.player() && PlatformGameRunner.instance.world.player().removeRushMode()
    }
};

function DataManager() {
    this.m_levelMalRegisters = [];
    this.m_levelUmaRegisters = [];
    this.m_globalRegisters = [];
    for (var a = 0; a < Global.TOTAL_LEVELS; ++a) {
        this.m_levelMalRegisters.push([]);
        this.m_levelUmaRegisters.push([]);
        for (var b = 0; b < DataManager.TOTAL_LEVEL_REGISTERS; ++b) this.m_levelMalRegisters[a].push(0), this.m_levelUmaRegisters[a].push(0)
    }
    for (a = 0; a < DataManager.TOTAL_REGISTERS; ++a) this.m_globalRegisters.push(0);
    this.loadData();
    DataManager.instance = this
}
DataManager.instance = null;
DataManager.DATA_VERSION = 9;
DataManager.KEY_VERSION = "switDataDesc2V";
DataManager.KEY_REGISTERS = "switDataDesc2R";
DataManager.REG_MAX_LEVEL_REACHED_MAL = 0;
DataManager.REG_MAX_LEVEL_REACHED_UMA = 1;
DataManager.REG_ACHIEVEMENT_1 = 2;
DataManager.REG_ACHIEVEMENT_2 = 3;
DataManager.REG_ACHIEVEMENT_3 = 4;
DataManager.REG_ACHIEVEMENT_4 = 5;
DataManager.REG_ACHIEVEMENT_5 = 6;
DataManager.REG_ACHIEVEMENT_6 = 7;
DataManager.REG_LEVEL_UNLOCKED_MAL = 8;
DataManager.REG_LEVEL_UNLOCKED_UMA = 9;
DataManager.REG_TUTORIAL_DONE = 10;
DataManager.REG_LEVEL_8_BEATEN = 11;
DataManager.REG_ALL_STARS = 12;
DataManager.REG_BONUS_TUTORIAL_DONE = 13;
DataManager.REG_MAL_CUTSCENE_SEEN = 14;
DataManager.REG_UMA_CUTSCENE_SEEN = 15;
DataManager.TOTAL_REGISTERS = 16;
DataManager.REGLEVEL_STARS = 0;
DataManager.REGLEVEL_ADRENALINE_TIME = 1;
DataManager.TOTAL_LEVEL_REGISTERS = 2;
DataManager.prototype.free = function() {
    this.m_globalRegisters = this.m_levelUmaRegisters = this.m_levelMalRegisters = null;
    DataManager.instance = null
};
DataManager.prototype.setGlobalRegister = function(a, b) {
    if (this.validateGlobalRegister(a)) return this.m_globalRegisters[a] = b, !0;
    Application.error("DataManager::setGlobalRegister() - Invalid register: " + a);
    return !1
};
DataManager.prototype.getGlobalRegister = function(a) {
    if (this.validateGlobalRegister(a)) return this.m_globalRegisters[a];
    Application.error("DataManager::getGlobalRegister() - Invalid register: " + a);
    return 0
};
DataManager.prototype.setLevelRegister = function(a, b, c, d) {
    if (this.validateLevelRegister(c, b)) return (a === Global.PLAYER_MAL ? this.m_levelMalRegisters : this.m_levelUmaRegisters)[c][b] = d, !0;
    Application.error("DataManager::setLevelRegister() - Invalid register: " + b);
    return !1
};
DataManager.prototype.getLevelRegister = function(a, b, c) {
    if (this.validateLevelRegister(c, b)) return (a === Global.PLAYER_MAL ? this.m_levelMalRegisters : this.m_levelUmaRegisters)[c][b];
    Application.error("DataManager::getLevelRegister() - Invalid register: " + b);
    return 0
};
DataManager.prototype.validateLevelRegister = function(a, b) {
    return 0 <= a && a < Global.TOTAL_LEVELS && 0 <= b && b < DataManager.TOTAL_LEVEL_REGISTERS
};
DataManager.prototype.validateGlobalRegister = function(a) {
    return 0 <= a && a < DataManager.TOTAL_REGISTERS
};
DataManager.prototype.resetData = function() {
    this.clearRegisters();
    this.saveData()
};
DataManager.prototype.saveData = function() {
    var a = "",
        b, c;
    for (b = 0; b < DataManager.TOTAL_REGISTERS; ++b) a += this.m_globalRegisters[b], b < DataManager.TOTAL_REGISTERS - 1 && (a += "|");
    a += "^";
    for (b = 0; b < Global.TOTAL_LEVELS; ++b) {
        for (c = 0; c < DataManager.TOTAL_LEVEL_REGISTERS; ++c) a += this.m_levelMalRegisters[b][c], c < DataManager.TOTAL_LEVEL_REGISTERS - 1 && (a += ",");
        b < Global.TOTAL_LEVELS - 1 && (a += "|")
    }
    a += "^";
    for (b = 0; b < Global.TOTAL_LEVELS; ++b) {
        for (c = 0; c < DataManager.TOTAL_LEVEL_REGISTERS; ++c) a += this.m_levelUmaRegisters[b][c], c < DataManager.TOTAL_LEVEL_REGISTERS -
            1 && (a += ",");
        b < Global.TOTAL_LEVELS - 1 && (a += "|")
    }
    Common.saveData(DataManager.KEY_REGISTERS, a);
    Application.log("DataManager::saveData() - data: " + a)
};
DataManager.prototype.loadData = function() {
    var a = ~~Common.loadData(DataManager.KEY_VERSION, "0");
    if (a !== DataManager.DATA_VERSION) Application.warn("DataManager::loadData() - incomplatible version: " + a), Common.saveData(DataManager.KEY_VERSION, "" + DataManager.DATA_VERSION), this.resetData();
    else if (a = Common.loadData(DataManager.KEY_REGISTERS, ""), Application.log("DataManager::loadData() - data: " + a), a = a.split("^"), !(3 > a.length)) {
        var b, c, d;
        b = a[0].split("|");
        for (c = 0; c < b.length; ++c) this.m_globalRegisters[c] = ~~b[c];
        b = a[1].split("|");
        var e;
        for (c = 0; c < b.length; ++c)
            for (e = b[c].split(","), d = 0; d < e.length; ++d) this.m_levelMalRegisters[c][d] = ~~e[d];
        b = a[2].split("|");
        for (c = 0; c < b.length; ++c)
            for (e = b[c].split(","), d = 0; d < e.length; ++d) this.m_levelUmaRegisters[c][d] = ~~e[d]
    }
};
DataManager.prototype.clearRegisters = function() {
    for (var a = 0; a < Global.TOTAL_LEVELS; ++a)
        for (var b = 0; b < DataManager.TOTAL_LEVEL_REGISTERS; ++b) this.m_levelMalRegisters[a][b] = 0, this.m_levelUmaRegisters[a][b] = 0;
    for (a = DataManager.TOTAL_REGISTERS - 1; 0 <= a; --a) this.m_globalRegisters[a] = 0;
    this.setGlobalRegister(DataManager.REG_MAX_LEVEL_REACHED_MAL, 1);
    this.setGlobalRegister(DataManager.REG_MAX_LEVEL_REACHED_UMA, 1);
    this.setGlobalRegister(DataManager.REG_LEVEL_UNLOCKED_MAL, 1);
    this.setGlobalRegister(DataManager.REG_LEVEL_UNLOCKED_UMA,
        1)
};

function ZoomManager(a, b) {
    this.m_canvas = a;
    this.m_mode = ZoomManager.MODE_NONE;
    this.m_game = b;
    this.m_zoomDisplaceYSpeed = this.m_zoomDisplaceXSpeed = this.m_zoomDisplaceYGoal = this.m_zoomDisplaceXGoal = this.m_zoomDisplaceTime = this.m_timeOut = this.m_timeIn = this.m_zoomOutSpeed = this.m_zoomInSpeed = this.m_factorY = this.m_factorX = 0;
    this.isAwaitingLayerUpdate = this.m_returEnabled = !1;
    this.goalCamHeight = this.goalCamWidth = this.m_stayTime = 0;
    this.m_zoomInInterpolator = this.m_zoomOutInterpolator = null;
    var c = this.m_game.world.camera().width() / 2,
        d = this.m_game.world.camera().height() / 2;
    this.m_x = c * Global.baseScale;
    this.m_y = d * Global.baseScale;
    this.m_rotation = this.m_initAngle = Math.atan2(this.m_y, this.m_x);
    this.m_turningRadius = Math.sqrt(this.m_x * this.m_x + this.m_y * this.m_y);
    this.m_rotationSpeed = .002 * Math.random();
    Application.config.settings.rotationInZoomEnabled && (ZoomManager.ROTATION_ENABLED = Application.config.settings.rotationInZoomEnabled);
    this.m_mode = ZoomManager.MODE_ZOOM_FOLLOW;
    this.m_endInterpolatorCallback = this.m_endInterpolatorCaller = this.m_actorToFollow =
        this.m_valFollowInterpolatorLinear = this.m_valFollowInterpolator = null;
    this.m_lastInterpolatorValue = -1;
    this.blendZoomSpeed = this.blendZoom = 1
}
ZoomManager.DEFAULT_TIME = 500;
ZoomManager.ROTATION_ENABLED = !1;
ZoomManager.prototype.setEndInterpolatorCallback = function(a, b) {
    this.m_endInterpolatorCaller = a;
    this.m_endInterpolatorCallback = b
};
ZoomManager.prototype.free = function() {
    this.m_canvas = null;
    this.m_mode = ZoomManager.MODE_NONE
};
ZoomManager.prototype.setParams = function(a, b, c, d, e) {
    e = "undefined" !== typeof e ? e : 0;
    a = "undefined" !== typeof a ? a : ZoomManager.DEFAULT_TIME;
    b = "undefined" !== typeof b ? b : ZoomManager.DEFAULT_TIME;
    c = "undefined" !== typeof c ? c : ZoomManager.DEFAULT_TIME;
    this.m_mode === ZoomManager.MODE_NONE && (this.m_factorX = this.limitFactors("undefined" !== typeof d ? d : 0, !0), this.m_factorY = this.limitFactors(e, !1), this.m_timeIn = a, this.m_timeOut = b, this.m_zoomInSpeed = (Global.maxScale - Global.minScale) / a, this.m_zoomOutSpeed = (-Global.maxScale +
        Global.minScale) / b, this.m_stayTime = c)
};
ZoomManager.prototype.onDisplaceXY = function(a, b, c) {
    this.m_mode === ZoomManager.MODE_NONE && (this.m_zoomDisplaceTime = a, this.m_zoomDisplaceXGoal = this.limitFactors(b, !0), this.m_zoomDisplaceYGoal = this.limitFactors(c, !1), this.m_zoomDisplaceXSpeed = (this.m_zoomDisplaceXGoal - this.m_factorX) / a, this.m_zoomDisplaceYSpeed = (this.m_zoomDisplaceYGoal - this.m_factorY) / a, this.m_mode = ZoomManager.MODE_ZOOM_DISPLACE)
};
ZoomManager.prototype.onZoomIn = function(a) {
    this.m_mode === ZoomManager.MODE_NONE && (this.m_mode = ZoomManager.MODE_ZOOM_IN);
    this.m_returEnabled = "undefined" !== typeof a ? a : !1;
    ZoomManager.ROTATION_ENABLED && (this.m_rotationSpeed = 2 * Math.PI / this.m_timeIn);
    this.m_zoomInInterpolator = ZoomManager.ROTATION_ENABLED ? ExponentialInterpolation.create(Global.baseScale, Global.maxScale, this.m_timeIn, 10, 0) : ElasticInterpolation.create(Global.baseScale, Global.maxScale, this.m_timeIn, .2, 2, 0);
    this.m_zoomInInterpolator.onEndInterpolation(this,
        this.onEndZoomIn)
};
ZoomManager.prototype.onZoomOut = function() {
    this.m_mode === ZoomManager.MODE_NONE && (this.m_mode = ZoomManager.MODE_ZOOM_OUT);
    ZoomManager.ROTATION_ENABLED && (this.m_rotationSpeed = -2 * Math.PI / this.m_timeOut);
    this.m_zoomOutInterpolator = ExponentialInterpolation.create(Global.maxScale, Global.minScale, this.m_timeOut, 10, 0);
    this.m_zoomOutInterpolator.onEndInterpolation(this, this.onEndZoomOut)
};
ZoomManager.prototype.onEndZoomIn = function() {
    ZoomManager.ROTATION_ENABLED && (this.m_rotation = this.m_initAngle);
    Global.baseScale = Global.maxScale;
    this.m_mode = ZoomManager.MODE_NONE;
    0 < this.m_stayTime ? this.m_mode = ZoomManager.MODE_ZOOM_STAND_IN_ZOOM : this.m_returEnabled && (this.onZoomOut(), this.m_returEnabled = !1)
};
ZoomManager.prototype.onEndZoomOut = function() {
    ZoomManager.ROTATION_ENABLED && (this.m_rotation = this.m_initAngle);
    Global.baseScale = Global.minScale;
    this.m_mode = ZoomManager.MODE_NONE
};
ZoomManager.prototype.update = function(a) {
    switch (this.m_mode) {
        case ZoomManager.MODE_ZOOM_STAND_IN_ZOOM:
            this.m_stayTime -= a;
            0 > this.m_stayTime && (this.m_stayTime = 0, this.m_mode = ZoomManager.MODE_ZOOM_OUT, this.m_zoomOutInterpolator = ExponentialInterpolation.create(Global.maxScale, Global.minScale, this.m_timeOut, 10, 0), this.m_zoomOutInterpolator.onEndInterpolation(this, this.onEndZoomOut), ZoomManager.ROTATION_ENABLED && (this.m_rotationSpeed = -2 * Math.PI / this.m_timeOut));
            break;
        case ZoomManager.MODE_ZOOM_IN:
            ZoomManager.ROTATION_ENABLED &&
                (this.m_rotation += this.m_rotationSpeed * a);
            this.m_zoomInInterpolator.update(a);
            Global.baseScale = this.m_zoomInInterpolator.value();
            this.updateScale();
            break;
        case ZoomManager.MODE_ZOOM_DISPLACE:
            this.m_zoomDisplaceTime -= a;
            0 >= this.m_zoomDisplaceTime ? (this.m_factorX = this.m_zoomDisplaceXGoal, this.m_factorY = this.m_zoomDisplaceYGoal, this.m_mode = ZoomManager.MODE_NONE) : (this.m_factorX += a * this.m_zoomDisplaceXSpeed, this.m_factorY += a * this.m_zoomDisplaceYSpeed);
            this.updateScale();
            break;
        case ZoomManager.MODE_ZOOM_OUT:
            ZoomManager.ROTATION_ENABLED &&
                (this.m_rotation += this.m_rotationSpeed * a);
            this.m_zoomOutInterpolator.update(a);
            Global.baseScale = this.m_zoomOutInterpolator.value();
            this.updateScale();
            break;
        case ZoomManager.MODE_ZOOM_FOLLOW:
            this.getFollowInterpolator() && (Global.baseScale = this.getFollowInterpolator().value() * (Global.minScale - Global.maxScale) + Global.maxScale, this.getFollowInterpolator().update(a));
            this.m_actorToFollow ? this.updatePosition(this.m_actorToFollow.getX(), this.m_actorToFollow.getY()) : this.updatePosition(0, 0);
            break;
        case ZoomManager.MODE_ZOOM_TO_SCALE:
            this.doZoomBlending(a)
    }
};
ZoomManager.prototype.doZoomBlending = function(a) {
    var b = Global.baseScale;
    a = SMath.lerp(Global.baseScale, this.blendZoom, this.blendZoomSpeed, a);
    1.5E-4 >= SMath.abs(Global.baseScale + a - this.blendZoom) ? (Global.baseScale = this.blendZoom, this.m_mode = ZoomManager.MODE_NONE, this.m_endInterpolatorCaller && this.m_endInterpolatorCallback.call(this.m_endInterpolatorCaller), this.isAwaitingLayerUpdate && this.updateLayerParams()) : Global.baseScale += a;
    this.setZoom(b, Global.baseScale)
};
ZoomManager.prototype.breakBlendingZoom = function() {
    this.m_mode = ZoomManager.MODE_NONE
};
ZoomManager.prototype.setZoom = function(a, b) {
    this.m_game.world.camera().setWidthHeight(a, b);
    this.m_canvas.scale.x = b;
    this.m_canvas.scale.y = b
};
ZoomManager.prototype.resetZoom = function() {
    this.setZoom(Global.baseScale, 1);
    Global.baseScale = 1;
    this.breakBlendingZoom()
};
ZoomManager.prototype.setBlendingZoom = function(a, b, c, d) {
    Global.baseScale !== a ? (this.blendZoom = a, this.m_mode = ZoomManager.MODE_ZOOM_TO_SCALE, this.blendZoomSpeed = b, this.m_endInterpolatorCaller = c, this.m_endInterpolatorCallback = d, b = this.m_game.world.camera(), this.goalCamWidth = b.width() * Global.baseScale / a, this.goalCamHeight = b.height() * Global.baseScale / a, Global.baseScale > a ? (this.isAwaitingLayerUpdate = !1, this.updateLayerParams()) : this.isAwaitingLayerUpdate = !0) : c && d.call(c)
};
ZoomManager.prototype.updateLayerParams = function() {
    for (var a = 0; a < this.m_game.world.getLayers().length; a++) "undefined" !== typeof this.m_game.world.getLayers()[a].initWithParams && this.m_game.world.getLayers()[a].initWithParams(this.goalCamWidth, this.goalCamHeight)
};
ZoomManager.prototype.limitFactors = function(a, b) {
    var c = (1 - Global.minScale / Global.maxScale) / 2,
        d;
    b ? (c = this.m_game.world.camera().getX() + this.m_game.world.camera().width() * c, d = c + Global.minScale / Global.maxScale * this.m_game.world.camera().width()) : (c = this.m_game.world.camera().getY() + this.m_game.world.camera().height() * c, d = c + Global.minScale / Global.maxScale * this.m_game.world.camera().height());
    return 0 === a ? .5 : a <= c ? 0 : a >= d ? 1 : (a - c) / (d - c)
};
ZoomManager.prototype.updateScale = function() {
    this.m_game && (this.m_canvas.scale.x = Global.baseScale, this.m_canvas.scale.y = Global.baseScale, Global.offsetZoomX = -this.m_factorX * (Global.baseScale - Global.minScale) * this.m_game.world.camera().width(), Global.offsetZoomY = -this.m_factorY * (Global.baseScale - Global.minScale) * this.m_game.world.camera().height(), ZoomManager.ROTATION_ENABLED ? (this.m_canvas.rotation = this.m_rotation - this.m_initAngle, this.m_canvas.position.x = Global.offsetZoomX - Layout.left / Layout.scale +
        this.m_x - this.m_turningRadius * Math.cos(this.m_rotation), this.m_canvas.position.y = Global.offsetZoomY - Layout.top / Layout.scale + this.m_y - this.m_turningRadius * Math.sin(this.m_rotation)) : Application.WIDE_SCREEN ? (this.m_canvas.position.x = Global.offsetZoomX - Layout.left / Layout.scale, this.m_canvas.position.y = Global.offsetZoomY - Layout.top / Layout.scale) : (this.m_canvas.position.x = Global.offsetZoomX, this.m_canvas.position.y = Global.offsetZoomY))
};
ZoomManager.prototype.setValueToFollowElastic = function(a, b) {
    1 < a && (a = 1);
    0 > a && (a = 0);
    this.m_valFollowInterpolator = ElasticInterpolation.create(this.m_valFollowInterpolator ? this.m_valFollowInterpolator.value() : this.m_valFollowInterpolatorLinear ? this.m_valFollowInterpolator.value() : -1 !== this.m_lastInterpolatorValue ? this.m_lastInterpolatorValue : 0, a, b, .001, 0, 0);
    this.m_valFollowInterpolatorLinear && (LinearInterpolation.disposeObject(this.m_valFollowInterpolatorLinear), this.m_valFollowInterpolatorLinear = null);
    this.m_valFollowInterpolator.onEndInterpolation(this, this.onEndInterpolation);
    this.m_valFollowInterpolator.update(0)
};
ZoomManager.prototype.setValueToFollowLinear = function(a, b, c, d) {
    1 < a && (a = 1);
    0 > a && (a = 0);
    this.m_valFollowInterpolatorLinear && LinearInterpolation.disposeObject(this.m_valFollowInterpolatorLinear);
    this.m_valFollowInterpolatorLinear = LinearInterpolation.create(-1 !== this.m_lastInterpolatorValue ? this.m_lastInterpolatorValue : this.m_valFollowInterpolatorLinear ? this.m_valFollowInterpolatorLinear.value() : 0, a, b, 0); - 1 !== this.m_lastInterpolatorValue && (this.m_lastInterpolatorValue = -1);
    this.m_valFollowInterpolatorLinear.onEndInterpolation(c,
        d);
    this.m_valFollowInterpolatorLinear.update(0)
};
ZoomManager.prototype.getFollowInterpolator = function() {
    return this.m_valFollowInterpolator ? this.m_valFollowInterpolator : this.m_valFollowInterpolatorLinear
};
ZoomManager.prototype.setActorToFollow = function(a) {
    this.m_actorToFollow = a
};
ZoomManager.prototype.onEndInterpolation = function(a) {
    this.m_endInterpolatorCallback && this.m_endInterpolatorCaller && this.m_endInterpolatorCallback.call(this.m_endInterpolatorCaller);
    this.m_lastInterpolatorValue = a.value();
    ElasticInterpolation.disposeObject(a);
    this.m_valFollowInterpolator = null
};
ZoomManager.prototype.updatePosition = function(a, b) {
    this.m_factorX = this.limitFactors(a, !0);
    this.m_factorY = this.limitFactors(b, !1);
    this.updateScale()
};
ZoomManager.prototype.setDynamicScale = function(a, b, c, d) {
    1 < c && (c = 1);
    0 > c && (c = 0);
    d /= 10;
    d < -Math.PI / 18 && (d = -Math.PI / 18);
    d > Math.PI / 18 && (d = Math.PI / 18);
    this.m_rotation = this.m_initAngle + d;
    c *= 1 - Math.abs(18 * d / Math.PI);
    Global.baseScale = c * (Global.minScale - Global.maxScale) + Global.maxScale;
    this.updatePosition(a, b)
};
ZoomManager.MODE_NONE = 0;
ZoomManager.MODE_ZOOM_IN = 1;
ZoomManager.MODE_ZOOM_DISPLACE = 2;
ZoomManager.MODE_ZOOM_OUT = 3;
ZoomManager.MODE_ZOOM_STAND_IN_ZOOM = 4;
ZoomManager.MODE_ZOOM_FOLLOW = 5;
ZoomManager.MODE_ZOOM_TO_SCALE = 6;

function PathCapturer() {
    this.m_lines = [];
    this.m_lastY = this.m_lastX = this.m_points = null;
    this.m_minTimer = 0;
    this.startLine();
    this.m_finished = !1
}
PathCapturer.MIN_TIMER = 100;
PathCapturer.MIN_DIST = 30;
PathCapturer.prototype.startLine = function() {
    if (!this.m_finished) {
        var a = [];
        this.m_lines.push(a);
        this.m_points = a;
        this.m_lastY = this.m_lastX = null;
        this.m_minTimer = 0
    }
};
PathCapturer.prototype.update = function(a, b, c) {
    if (!this.m_finished && (this.m_minTimer -= a, 0 >= this.m_minTimer)) {
        a = b - this.m_lastX;
        var d = c - this.m_lastY;
        a = Math.sqrt(a * a + d * d);
        if (null === this.m_lastX || a >= PathCapturer.MIN_DIST) this.m_points.push(Math.round(b)), this.m_points.push(Math.round(c)), this.m_lastX = b, this.m_lastY = c, this.m_minTimer = PathCapturer.MIN_TIMER
    }
};
PathCapturer.prototype["export"] = function() {
    var a = "path-" + Global.map + ".xml",
        b = this.createString(),
        c = document.createElement("a");
    c.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(b));
    c.setAttribute("download", a);
    document.createEvent ? (a = document.createEvent("MouseEvents"), a.initEvent("click", !0, !0), c.dispatchEvent(a)) : c.click()
};
PathCapturer.prototype.createString = function() {
    var a;
    a = '<Layer name="path" group="0" type="9" width="1" height="1" >\n<Properties>\n<Property name=\'widthTile\' value=\'96\' />\n<Property name=\'heightTile\' value=\'96\' />\n<Property name=\'layerNameReference\' value=\'NULL\' />\n<Property name=\'spacingBezi\' value=\'30\' />\n</Properties>\n<Offset x="0" y="0" />\n<Parallax width="0" height="0" />\n<Data>\n';
    for (var b = this.m_lines.length, c = 0; c < b; c++) a += this.createLine(this.m_lines[c], 0, 0), a += this.createLine(this.m_lines[c],
        0, -110);
    return a + "\n</Data>\n</Layer>\n"
};
PathCapturer.prototype.createLine = function(a, b, c) {
    var d;
    d = '<Primitive type="7" >\n<Property name="rotate" value="0.000000" />\n<Property name="scaleX" value="1.000000" />\n<Property name="scaleY" value="1.000000" />\n';
    for (var e = a.length / 2, f = 0; f < e; f++) d += '<Point x="' + (a[2 * f] + b) + '" y="' + (a[2 * f + 1] + c) + '" spline="1" />\n';
    return d + '<Property name="x" value="0.000000" />\n<Property name="y" value="0.000000" />\n<PropertyList type="2" name="name" value="610" />\n<PropertyList type="0" name="OffsetX" value="0" />\n<PropertyList type="0" name="OffsetY" value="0" />\n<PropertyList type="2" name="params" value="" />\n<PropertyList type="2" name="type" value="" />\n<PropertyList type="2" name="filter" value="" />\n<PropertyList type="2" name="data" value="" />\n</Primitive>\n'
};
PathCapturer.prototype.free = function() {
    this.m_points = null
};

function GuiLoader(a, b, c, d, e, f, g) {
    SLoaderScreen.call(this, a, b, c, d, e, f, g);
    GuiLoader.instance = this;
    (this.txtLoading = this.controls.mcInfoLoading) && this.txtLoading.setTextReplace("STR_LOADING_PERCENT", ["N"], this.start);
    this.mcGuiLoaderFill = null;
    this.controls.mcGuiBar && (this.mcGuiLoaderFill = this.getControl("mcGuiBar"), this.mcGuiLoaderFill.clip.gotoAndStop(1), this.m_logo = Application.instance.getLocalizedImage("gui_localized_logo01.png"), this.m_logo.pivot.x = 334, this.m_logo.pivot.y = 115, this.getControl("mcGuiLogo").setClip("gui_screens_loader_loop"),
        this.getControl("mcGuiLogo").clip.mcContent.addChild(this.m_logo))
}
Application.subclass(GuiLoader, SLoaderScreen);
GuiLoader.instance = null;
GuiLoader.prototype.free = function() {
    this.mcGuiLoaderFill = this.txtLoading = null;
    SLoaderScreen.prototype.free.call(this)
};
GuiLoader.prototype.load = function() {
    SLoaderScreen.prototype.load.call(this);
    var a = this.start,
        a = a + this.loadedfiles / this.totalFiles * (this.end - this.start);
    this.mcGuiLoaderFill && this.mcGuiLoaderFill.clip.gotoAndStop(Math.floor(a / 100 * this.mcGuiLoaderFill.clip.totalFrames - 1) + 1);
    Application.info("onLoadProgress > " + this.loadedfiles + " of " + this.totalFiles + " percent : " + a + "%");
    this.txtLoading && this.txtLoading.setTextReplace("STR_LOADING_PERCENT", ["N"], a)
};
GuiLoader.prototype.update = function(a) {
    this.mcGuiLoaderFill && this.getControl("mcGuiLogo").clip.update(a);
    SLoaderScreen.prototype.update.call(this, a)
};

function GuiHelp(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0);
    a = 1;
    if (Global.playerSelected === Global.PLAYER_MAL) switch (Global.map) {
        case 0:
        case 1:
        case 2:
            a = 1;
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            a = 2;
            break;
        case 7:
        case 8:
            a = 3
    } else switch (Global.map) {
        case 6:
        case 5:
        case 0:
            a = 1;
            break;
        case 4:
        case 3:
        case 2:
        case 1:
            a = 2;
            break;
        case 8:
        case 7:
            a = 3
    }
    this.getControl("mcGuiImage01").clip.gotoAndStop(a);
    this.getControl("mcGuiImage02").clip.gotoAndStop(a);
    this.getControl("mcGuiImage03").clip.gotoAndStop(a);
    this.getControl("mcGuiImage04").clip.gotoAndStop(a);
    this.getControl("mcGuiImage05").clip.gotoAndStop(a)
}
Application.subclass(GuiHelp, SScreen);
GuiHelp.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) switch (SScreen.prototype.onUIPress.call(this, a), Application.instance.playSound("SND_UI_CLICK"), a.name) {
        case "mcGuiBtnBack":
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxBack").clip), this.onResumeScreen()
    }
};
GuiHelp.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnBack":
            this.screenParent.dropPopup()
    }
};

function GuiHelpBonus(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0)
}
Application.subclass(GuiHelpBonus, SScreen);
GuiHelpBonus.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) switch (SScreen.prototype.onUIPress.call(this, a), Application.instance.playSound("SND_UI_CLICK"), a.name) {
        case "mcGuiBtnBack":
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxBack").clip), this.onResumeScreen()
    }
};
GuiHelpBonus.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnBack":
            this.screenParent.dropPopup()
    }
};

function GuiConfirm(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0);
    Global.playerSelected === Global.PLAYER_UMA && this.getControl("mcGuiCharacter").clip.gotoAndStop(2)
}
Application.subclass(GuiConfirm, SScreen);
GuiConfirm.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) {
        SScreen.prototype.onUIPress.call(this, a);
        Application.instance.playSound("SND_UI_CLICK");
        switch (a.name) {
            case "mcGuiBtnYes":
                Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxYes").clip);
                break;
            case "mcGuiBtnNo":
                Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxNo").clip)
        }
        this.onResumeScreen()
    }
};
GuiConfirm.prototype.onFinishScreen = function() {
    switch (this.lastInteractionControl) {
        case "mcGuiBtnYes":
            GuiManager.instance.gotoScreen(GuiManager.SC_METAMAP);
            break;
        case "mcGuiBtnNo":
            this.screenParent.dropPopup()
    }
    SScreen.prototype.onFinishScreen.call(this)
};

function GuiResetData(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0)
}
Application.subclass(GuiResetData, SScreen);
GuiResetData.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) {
        SScreen.prototype.onUIPress.call(this, a);
        Application.instance.playSound("SND_UI_CLICK");
        switch (a.name) {
            case "mcGuiBtnYes":
                Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxYes").clip);
                break;
            case "mcGuiBtnNo":
                Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxNo").clip)
        }
        this.onResumeScreen()
    }
};
GuiResetData.prototype.onFinishScreen = function() {
    switch (this.lastInteractionControl) {
        case "mcGuiBtnYes":
            DataManager.instance.resetData();
            GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU);
            break;
        case "mcGuiBtnNo":
            this.screenParent.dropPopup()
    }
    SScreen.prototype.onFinishScreen.call(this)
};

function GuiEndGame(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0);
    b = "1" === a[19] ? "MUS_BG_END_GAME" : "MUS_BG_END_GAME_2";
    Application.instance.isPlayingSound(b) || Application.instance.playSound(b);
    "mcGuiScreenEndgame01Mal" !== a && "mcGuiScreenEndgame01Uma" !== a || !this.isOtherCampaignComplete() || this.getControl("mcGuiAlert").setVisible(!1)
}
Application.subclass(GuiEndGame, SScreen);
GuiEndGame.prototype.onUIPress = function(a) {
    switch (a.name) {
        case "mcGuiBtnBack":
        case "mcGuiBtnMainmenu":
            GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU);
            break;
        case "mcGuiBtnSymbol":
        case "mcGuiBtnSymbolText":
            Global.playerSelected = Global.playerSelected === Global.PLAYER_MAL ? Global.PLAYER_UMA : Global.PLAYER_MAL, 1 === DataManager.instance.getGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_MAL_CUTSCENE_SEEN : DataManager.REG_UMA_CUTSCENE_SEEN) ? GuiManager.instance.gotoScreen(GuiManager.SC_METAMAP) :
                GuiManager.instance.gotoScreen(GuiManager.SC_CUTSCENE_INTRO)
    }
};
GuiEndGame.prototype.isOtherCampaignComplete = function() {
    var a = Global.playerSelected === Global.PLAYER_MAL ? 2 : 1;
    return 0 !== (DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_4) & a)
};
GuiEndGame.prototype.free = function() {
    Application.instance.stopAllSounds();
    SScreen.prototype.free.call(this)
};

function GuiTryAgain(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    Application.instance.playSound("SND_LOSE");
    Global.playerSelected === Global.PLAYER_UMA && this.getControl("mcGuiCharacter").clip.gotoAndStop(2)
}
Application.subclass(GuiTryAgain, SScreen);
GuiTryAgain.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) {
        SScreen.prototype.onUIPress.call(this, a);
        switch (a.name) {
            case "mcGuiBtnMainmenu":
                Application.instance.playSound("SND_UI_CLICK_BACK");
                Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxMainmenu").clip);
                break;
            case "mcGuiBtnReplay":
                Application.instance.playSound("SND_UI_CLICK"), Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxReplay").clip)
        }
        this.onResumeScreen()
    }
};
GuiTryAgain.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnMainmenu":
            GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU);
            break;
        case "mcGuiBtnReplay":
            GuiManager.instance.gotoScreen(GuiManager.SC_GAME)
    }
};

function GuiGame(a, b, c) {
    SScreen.call(this, "", a, b);
    Application.instance.effectManager.clear();
    GuiGame.instance = this;
    this.zoomManager = this.game = null;
    this.setInteractive(!0);
    this.canvasGame = Application.instance.addDisplayContainer();
    this.canvasControl = Application.instance.addDisplayContainer();
    this.canvasEffects = Application.instance.addDisplayContainer();
    this.canvas.addChild(this.canvasGame);
    this.canvas.addChild(this.canvasControl);
    this.gotoRemoveScreen = "";
    Application.instance.stopAllSounds();
    switch (Global.map) {
        case 0:
        case 1:
        case 2:
            Application.instance.playSound("MUS_BG_GAME_AURADON");
            break;
        case 3:
        case 4:
            Application.instance.playSound("MUS_BG_GAME_ISLE_LOST");
            break;
        case 5:
        case 6:
            Application.instance.playSound("MUS_BG_GAME_UMA_SHIP");
            break;
        case 7:
        case 8:
            Application.instance.playSound("MUS_BG_GAME_LOVE_BOAT");
            break;
        case 9:
            Application.instance.playSound("MUS_BG_GAME_ISLE_LOST"), Application.instance.playSound("MUS_BG_BONUS_AMBIENT")
    }
    CheckPoint.reset();
    this.createGame();
    this.canvasGame.addChild(this.canvasEffects)
}
Application.subclass(GuiGame, SScreen);
GuiGame.instance = null;
GuiGame.TX_INIT_GAME = 0;
GuiGame.TX_REMOVE_GAME = 1;
GuiGame.sandboxPlayerSkin = null;
GuiGame.prototype.fadeIn = function(a, b) {
    var c = Application.instance.effectManager.createEffect("mcFadeIn", 512, 384, this.canvas);
    c.clip.width = window.innerWidth / Layout.scale;
    c.clip.height = window.innerHeight / Layout.scale;
    c.onComplete(a, b)
};
GuiGame.prototype.fadeOut = function(a, b) {
    var c = Application.instance.effectManager.createEffect("mcFadeOut", 512, 384, this.canvas);
    c.clip.width = window.innerWidth / Layout.scale;
    c.clip.height = window.innerHeight / Layout.scale;
    c.onComplete(a, b)
};
GuiGame.prototype.fadeOutFast = function(a, b) {
    var c = Application.instance.effectManager.createEffect("mcFadeOutFast", 512, 384, this.canvas);
    c.clip.width = window.innerWidth / Layout.scale;
    c.clip.height = window.innerHeight / Layout.scale;
    c.onComplete(a, b)
};
GuiGame.prototype.fadeInWhite = function(a, b) {
    var c = Application.instance.effectManager.createEffect("mcFadeInWhite", 512, 384, this.canvas);
    c.clip.width = window.innerWidth / Layout.scale;
    c.clip.height = window.innerHeight / Layout.scale;
    c.onComplete(a, b)
};
GuiGame.prototype.fadeInWhiteSlow = function(a, b) {
    var c = Application.instance.effectManager.createEffect("mcFadeInWhiteSlow", 512, 384, this.canvas);
    c.clip.width = window.innerWidth / Layout.scale;
    c.clip.height = window.innerHeight / Layout.scale;
    c.onComplete(a, b)
};
GuiGame.prototype.fadeOutWhite = function(a, b) {
    var c = Application.instance.effectManager.createEffect("mcFadeOutWhite", 512, 384, this.canvas);
    c.clip.width = window.innerWidth / Layout.scale;
    c.clip.height = window.innerHeight / Layout.scale;
    c.onComplete(a, b)
};
GuiGame.prototype.fadeOutWhiteSlow = function(a, b) {
    var c = Application.instance.effectManager.createEffect("mcFadeOutWhiteSlow", 512, 384, this.canvas);
    c.clip.width = window.innerWidth / Layout.scale;
    c.clip.height = window.innerHeight / Layout.scale;
    c.onComplete(a, b)
};
GuiGame.prototype.zoomIn = function(a, b, c) {
    this.zoomManager.setValueToFollowLinear(0, a || 1E3, b || null, c || null)
};
GuiGame.prototype.instantZoomIn = function(a, b) {
    this.zoomManager.setValueToFollowLinear(0, 0, a || null, b || null)
};
GuiGame.prototype.zoomOut = function(a, b, c) {
    this.zoomManager.setValueToFollowLinear(1, a || 1E3, b || null, c || null)
};
GuiGame.prototype.zoomOutScale = function(a, b, c, d) {
    this.zoomManager.setValueToFollowLinear(b || 1, a || 1E3, c || null, d || null)
};
GuiGame.prototype.createZoomManager = function(a) {
    this.zoomManager = new ZoomManager(this.canvasGame, a)
};
GuiGame.prototype.createGame = function() {
    var a = "level_0" + Global.map;
    GuiGame.sandboxPlayerSkin = null;
    Global.map == Global.MAP_TUTORIAL && (a = "tuto_" + (Global.playerSelected === Global.PLAYER_UMA ? "uma" : "mal"));
    var b = Global.level === Global.LEVEL_BONUS;
    Global.bossRoom && (a = "boss_room");
    if (Application.sandbox) {
        Application.log("-----------------------------------");
        Application.log("SANDBOX START SETTINGS");
        for (var c in Application.sandbox.startSettings) Application.log("SANDBOX " + c + " : " + Application.sandbox.startSettings[c]);
        Application.log("-----------------------------------");
        a = Application.sandbox.startSettings.player.substring(0, 3);
        Global.playerSelected = Global.PLAYER_MAL;
        "uma" == a && (Global.playerSelected = Global.PLAYER_UMA);
        GuiGame.sandboxPlayerSkin = "ani_" + Application.sandbox.startSettings.player;
        a = Application.sandbox.startSettings.level;
        if (0 <= a.indexOf("level"))
            if (Global.map = parseInt(a.substr(7), 10), Global.playerSelected === Global.PLAYER_MAL) Global.level = Global.map;
            else switch (Global.map) {
                case 6:
                    Global.level = 1;
                    break;
                case 5:
                    Global.level = 2;
                    break;
                case 4:
                    Global.level = 3;
                    break;
                case 3:
                    Global.level = 4;
                    break;
                case 2:
                    Global.level = 5;
                    break;
                case 1:
                    Global.level = 6;
                    break;
                case 8:
                    Global.level = 8;
                    break;
                case 7:
                    Global.level = 7
            } else "bonus" === a && (Global.level = Global.LEVEL_BONUS, Global.map = Global.MAP_BONUS);
        Global.bossRoom = !1;
        "boss_room" === a && (Global.bossRoom = !0);
        b = "bonus" == Application.sandbox.startSettings.level ? !0 : !1;
        Global.showDialogue = Application.sandbox.startSettings.useDialogues
    }
    this.game = b ? new GameBonus(this.canvasGame) : new PlatformGameRunner(this.canvasGame,
        this.canvasControl, a, "PlatformGeneralRNR");
    Global.game = this.game
};
GuiGame.prototype.onEndTransition = function(a) {
    SScreen.prototype.onEndTransition.call(this, a);
    if (a.params) switch (a.params.action) {
        case GuiGame.TX_REMOVE_GAME:
            this.game.free(), this.game = null, Application.instance.guiManager.gotoScreen(GuiManager.SC_MAIN_MENU)
    }
};
GuiGame.prototype.dropPopup = function() {
    this.canvasGame && (this.canvasGame.visible = !0);
    SScreen.prototype.dropPopup.call(this)
};
GuiGame.prototype.onDebugDraw = function(a) {
    if (null !== this.game) this.game.onDebugDraw(a)
};
GuiGame.prototype.onPointerPress = function(a) {
    a = Layout.fixInteractionEvent(a);
    if (this.game) this.game.onPointerPress(a)
};
GuiGame.prototype.onPointerRelease = function(a) {
    a = Layout.fixInteractionEvent(a);
    if (this.game) this.game.onPointerRelease(a)
};
GuiGame.prototype.onPointerMove = function(a) {
    a = Layout.fixInteractionEvent(a);
    if (this.game) this.game.onPointerMove(a)
};
GuiGame.prototype.onKeyUp = function(a) {
    SScreen.prototype.onKeyUp.call(this, a);
    if (null !== this.game && null === this.popup) this.game.onKeyUp(a)
};
GuiGame.prototype.onKeyDown = function(a) {
    SScreen.prototype.onKeyDown.call(this, a);
    if (null !== this.game && null === this.popup) this.game.onKeyDown(a)
};
GuiGame.prototype.update = function(a) {
    this.zoomManager && this.zoomManager.update(a);
    SScreen.prototype.update.call(this, a);
    null !== this.game && null === this.popup && this.game.update(a);
    0 != this.gotoRemoveScreen.length && (Application.sandbox || Global.level != Global.LEVEL_BOSS || this.gotoRemoveScreen !== GuiManager.SC_END_LEVEL || Global.bossRoom || (Global.bossRoom = !0, this.gotoRemoveScreen = GuiManager.SC_GAME, SLoader.unloadFromList(GuiManager.lastGameAssets), GuiManager.gameAssets = window.Assets[Application.RIGHT_TO_LEFT ?
        "gamePlatform_rtl" : "gamePlatform_ltr"].concat(["media/images/animo/world_boss_room.json", "media/images/animo/ani_mal_3.json", "media/images/animo/ani_uma_3.json", "media/images/animo/ani_enemy_" + (Global.playerSelected === Global.PLAYER_UMA ? "uma" : "mal") + ".json"])), GuiManager.instance.gotoScreen(this.gotoRemoveScreen))
};
GuiGame.prototype.free = function() {
    Application.instance.stopAllSounds();
    Application.instance.tweenManager.removeAll();
    Application.instance.effectManager.clear();
    this.zoomManager && (this.zoomManager.free(), this.zoomManager = null);
    null !== this.game && this.game.free();
    this.game = null;
    Global.game = null;
    this.canvas.removeChild(this.canvasGame);
    this.canvasGame = null;
    this.canvas.removeChild(this.canvasControl);
    this.canvasControl = null;
    this.canvas.removeChild(this.canvasEffects);
    this.canvasEffects = null;
    GuiGame.instance =
        null;
    PoolClips.instance.clear();
    SScreen.prototype.free.call(this)
};

function GuiGameSandbox(a, b, c) {
    SScreen.call(this, "", a, b);
    GuiGameSandbox.instance = this;
    this.game = null;
    this.canvasGame = Application.instance.addDisplayContainer();
    this.canvasControl = Application.instance.addDisplayContainer();
    this.canvas.addChild(this.canvasGame);
    this.canvas.addChild(this.canvasControl);
    this.createGame();
    this.canvasGame.addCollision("mcCollision", new Rectangle(.5 * -Application.APP_WIDTH, 0, 2 * Application.APP_WIDTH, Application.APP_HEIGHT));
    this.canvasGame.addPressListener(this, this.onPointerPress);
    this.canvasGame.addReleaseListener(this, this.onPointerRelease);
    this.canvasGame.addPointerMoveListener(this, this.onPointerMove)
}
Application.subclass(GuiGameSandbox, SScreen);
GuiGameSandbox.prototype.createGame = function() {};
GuiGameSandbox.prototype.removeGame = function() {
    this.deleteGame || (this.deleteGame = !0, this.game.free(), this.game = null, Application.instance.guiManager.gotoScreen(GuiManager.SC_MAIN_MENU))
};
GuiGameSandbox.prototype.onDebugDraw = function(a) {
    if (null !== this.game) this.game.onDebugDraw(a)
};
GuiGameSandbox.prototype.onPointerPress = function(a) {
    SScreen.prototype.onPointerPress.call(this, a);
    if (null !== this.game && null === this.popup) this.game.onPointerPress(a)
};
GuiGameSandbox.prototype.onPointerRelease = function(a) {
    SScreen.prototype.onPointerRelease.call(this, a);
    if (null !== this.game && null === this.popup) this.game.onPointerRelease(a)
};
GuiGameSandbox.prototype.onPointerMove = function(a) {
    SScreen.prototype.onPointerMove.call(this, a);
    if (null !== this.game && null === this.popup) this.game.onPointerMove(a)
};
GuiGameSandbox.prototype.onKeyUp = function(a) {
    SScreen.prototype.onKeyUp.call(this, a);
    if (null !== this.game && null === this.popup) this.game.onKeyUp(a)
};
GuiGameSandbox.prototype.onKeyDown = function(a) {
    SScreen.prototype.onKeyDown.call(this, a);
    if (null !== this.game && null === this.popup) this.game.onKeyDown(a)
};
GuiGameSandbox.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    null !== this.game && null === this.popup && this.game.update(a)
};
GuiGameSandbox.prototype.free = function() {
    Application.instance.stopAllSounds();
    this.game && (this.game.free(), this.game = null, Global.game = null);
    this.canvas.removeChild(this.canvasGame);
    this.canvasGame = null;
    this.canvas.removeChild(this.canvasControl);
    this.canvasControl = null;
    GuiGame.instance = null;
    SScreen.prototype.free.call(this)
};

function GuiPopupPause(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0);
    Global.playerSelected === Global.PLAYER_UMA && this.getControl("mcGuiCharacter").clip.gotoAndStop(2);
    this.getControl("mcGuiBtnSound").gotoState(GuiOnOff.ST_ON);
    Application.instance.isSoundOn() || this.getControl("mcGuiBtnSound").gotoState(GuiOnOff.ST_OFF);
    Application.instance.pauseAllSounds();
    Global.map === Global.MAP_TUTORIAL && (this.getControl("mcGuiBtnMetamap").setVisible(!1), this.getControl("mcGuiFxMetamap").setVisible(!1))
}
Application.subclass(GuiPopupPause, SScreen);
GuiPopupPause.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) switch (SScreen.prototype.onUIPress.call(this, a), a.name) {
        case "mcGuiBtnResume":
            Application.instance.playSound("SND_UI_CLICK_ENTER");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxResume").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnRetry":
            Application.instance.playSound("SND_UI_CLICK");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxRetry").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnHelp":
            Application.instance.playSound("SND_UI_CLICK");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiBFxHelp").clip);
            a = Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma";
            var b = Application.instance.isMobileDevice ? "" : "PC";
            Global.map === Global.MAP_BONUS ? this.addPopup(GuiHelpBonus, "mcGuiScreenHelp" + a + b + "Bonus") : this.addPopup(GuiHelp, "mcGuiScreenHelp" + a + b);
            break;
        case "mcGuiBtnSound":
            Application.instance.playSound("SND_UI_CLICK");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiBFxSound").clip);
            Application.instance.toggleMute();
            break;
        case "mcGuiBtnMetamap":
            Application.instance.playSound("SND_UI_CLICK");
            this.m_state = SScreen.ST_TRANSITION_END;
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxMetamap").clip).onComplete(this, function() {
                this.m_state = SScreen.ST_MAINFRAME;
                this.addPopup(GuiConfirm, "mcGuiPopupQuit")
            });
            break;
        case "mcGuiBtnTrophies":
            Application.instance.playSound("SND_UI_CLICK"),
                this.m_state = SScreen.ST_TRANSITION_END, Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxTrophies").clip).onComplete(this, function() {
                    this.m_state = SScreen.ST_MAINFRAME;
                    this.addPopup(GuiTrophies, "mcGuiScreenTrophy")
                })
    }
};
GuiPopupPause.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnResume":
            GuiGame.instance.dropPopup();
            break;
        case "mcGuiBtnRetry":
            GuiManager.instance.gotoScreen(GuiManager.SC_GAME)
    }
};
GuiPopupPause.prototype.free = function() {
    Application.instance.resumeAllSounds();
    SScreen.prototype.free.call(this)
};

function GuiPopupTutorial(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.type = -1;
    this.m_controlPos = {}
}
Application.subclass(GuiPopupTutorial, SScreen);
GuiPopupTutorial.prototype.initialize = function(a) {
    this.type = a;
    switch (this.type) {
        case PlatformGameRunner.TUTORIAL_ADRENALINE:
            this.m_controlPos.mcGuiGraph01 = this.getControl("mcGuiGraph01").canvas.position.x;
            this.m_controlPos.mcGuiText = this.getControl("mcGuiText").canvas.position.x;
            this.m_controlPos.mcGuiBase = this.getControl("mcGuiBase").canvas.position.x;
            a = Global.game.world.actorManager().findSwingPoleTutorial();
            this.m_controlPos.mcGuiGraph02 = new Point(a.clip().position.x - 35, a.clip().position.y - 50);
            break;
        case PlatformGameRunner.TUTORIAL_RUSH_MODE:
            this.m_controlPos.mcGuiGraph01 = this.getControl("mcGuiGraph01").canvas.position.x, this.m_controlPos.mcGuiText = this.getControl("mcGuiText").canvas.position.x, this.m_controlPos.mcGuiBase = this.getControl("mcGuiBase").canvas.position.x
    }
};
GuiPopupTutorial.prototype.onFinishScreen = function() {
    this.screenParent.dropPopup();
    switch (this.type) {
        case GameBonus.TUTORIAL_TAP:
            GameBonus.instance.onKeyDown(GameBonus.KEY_JUMP);
            break;
        case GameBonus.TUTORIAL_SWIPE:
            GameBonus.instance.onKeyDown(GameBonus.KEY_ATTACK)
    }
    PlatformGameRunner.instance && (PlatformGameRunner.instance.tutorialPopup = null);
    GameBonus.instance && (GameBonus.instance.tutorialPopup = null);
    SScreen.prototype.onFinishScreen.call(this)
};
GuiPopupTutorial.prototype.onPress = function() {
    var a;
    switch (this.type) {
        case GameBonus.TUTORIAL_TAP:
            a = !0;
            break;
        case GameBonus.TUTORIAL_SWIPE:
            a = !1;
            break;
        default:
            a = !0
    }
    if (a) this.onResumeScreen()
};
GuiPopupTutorial.prototype.onSwipe = function() {
    var a;
    switch (this.type) {
        case GameBonus.TUTORIAL_TAP:
            a = !1;
            break;
        case GameBonus.TUTORIAL_SWIPE:
            a = !0;
            break;
        default:
            a = !0
    }
    if (a) this.onResumeScreen()
};
GuiPopupTutorial.prototype.onKeyDown = function(a) {
    switch (this.type) {
        case GameBonus.TUTORIAL_TAP:
            a = a === GameBonus.KEY_JUMP;
            break;
        case GameBonus.TUTORIAL_SWIPE:
            a = a === GameBonus.KEY_ATTACK;
            break;
        default:
            a = a === PlayerPlatformRunner.KEY_ATTACK || a === PlayerPlatformRunner.KEY_JUMP
    }
    if (a) this.onResumeScreen()
};
GuiPopupTutorial.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    if (null !== this.controls) switch (a = Layout.left / Layout.scale, this.type) {
        case PlatformGameRunner.TUTORIAL_ADRENALINE:
            this.getControl("mcGuiGraph02").canvas.position.x = this.m_controlPos.mcGuiGraph02.x - a;
            this.getControl("mcGuiGraph02").canvas.position.y = this.m_controlPos.mcGuiGraph02.y;
            this.getControl("mcGuiGraph01").canvas.position.x = this.m_controlPos.mcGuiGraph01 - a;
            this.getControl("mcGuiText").canvas.position.x = this.m_controlPos.mcGuiText -
                a;
            this.getControl("mcGuiBase").canvas.position.x = this.m_controlPos.mcGuiBase - a;
            break;
        case PlatformGameRunner.TUTORIAL_RUSH_MODE:
            this.getControl("mcGuiGraph01").canvas.position.x = this.m_controlPos.mcGuiGraph01 - a, this.getControl("mcGuiText").canvas.position.x = this.m_controlPos.mcGuiText - a, this.getControl("mcGuiBase").canvas.position.x = this.m_controlPos.mcGuiBase - a
    }
};

function GuiMainMenu(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.m_logo02 = this.m_logo = null;
    a = 1 === DataManager.instance.getGlobalRegister(DataManager.REG_TUTORIAL_DONE);
    this.getControl("mcGuiBtnReset").setVisible(a);
    this.getControl("mcGuiBtnTrophies").setVisible(a);
    this.getControl("mcGuiBtnTrophies02").setVisible(!a);
    Application.instance.isPlayingSound("MUS_BG_MAINMENU") || Application.instance.playSound("MUS_BG_MAINMENU");
    GuiMainMenu.doneFirstLoader = !0;
    this.initLocalizedSprites()
}
Application.subclass(GuiMainMenu, SScreen);
GuiMainMenu.doneFirstLoader = !1;
GuiMainMenu.prototype.init = function() {
    SScreen.prototype.init.call(this);
    Application.instance.onOrientationchange(null)
};
GuiMainMenu.prototype.free = function() {
    Application.instance.socialShareObject && Application.instance.socialShareObject.closeSharing();
    SScreen.prototype.free.call(this)
};
GuiMainMenu.prototype.initLocalizedSprites = function() {
    this.m_logo = Application.instance.getLocalizedImage("gui_localized_logo02.png");
    this.m_logo.pivot.x = 354;
    this.m_logo.pivot.y = 132;
    this.getControl("mcGuiLogo").clip.addChild(this.m_logo);
    this.m_logo02 = Application.instance.getLocalizedImage("gui_localized_logo01.png");
    this.m_logo02.pivot.x = 334;
    this.m_logo02.pivot.y = 115;
    this.getControl("mcGuiLogo02").clip.addChild(this.m_logo02)
};
GuiMainMenu.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) switch (SScreen.prototype.onUIPress.call(this, a), a.name) {
        case "mcGuiBtnPlay":
            Application.instance.playSound("SND_UI_CLICK_ENTER");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxPlay").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnTrophies":
            Application.instance.playSound("SND_UI_CLICK_ENTER");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxTrophies").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnTrophies02":
            Application.instance.playSound("SND_UI_CLICK_ENTER");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxTrophies02").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnReset":
            Application.instance.playSound("SND_UI_CLICK_ENTER"), this.m_state = SScreen.ST_TRANSITION_END, Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxReset").clip).onComplete(this, function() {
                this.m_state =
                    SScreen.ST_MAINFRAME;
                this.addPopup(GuiResetData, "mcGuiPopupReset")
            })
    }
};
GuiMainMenu.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnPlay":
            GuiManager.instance.gotoScreen(GuiManager.SC_SELECT_PLAYER);
            break;
        case "mcGuiBtnTrophies":
        case "mcGuiBtnTrophies02":
            GuiManager.instance.gotoScreen(GuiManager.SC_TROPHIES)
    }
};

function GuiMetamap(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0);
    this.m_canvasFx = Application.instance.addDisplayContainer();
    this.m_canvasFx.scale.set(1.3, 1.3);
    this.clip.addChild(this.m_canvasFx);
    this.m_timeline = new GuiMetamapItems(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiScreenMetamapMal" : "mcGuiScreenMetamapUma", this);
    this.getControl("mcGuiContentMal").canvas.addChild(this.m_timeline.canvas);
    this.m_levelUnlocked = DataManager.instance.getGlobalRegister(Global.playerSelected ===
        Global.PLAYER_MAL ? DataManager.REG_LEVEL_UNLOCKED_MAL : DataManager.REG_LEVEL_UNLOCKED_UMA);
    this.m_maxLevel = DataManager.instance.getGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_MAX_LEVEL_REACHED_MAL : DataManager.REG_MAX_LEVEL_REACHED_UMA);
    this.m_timeline.enableLevels(this.m_maxLevel);
    this.m_maxLevel < Global.TOTAL_LEVELS && (this.getControl("mcGuiBaseTitleBonuslevel").setVisible(!1), this.getControl("mcGuiTextLevel05").setVisible(!1), this.getControl("mcGuiTextLevel05S").setVisible(!1));
    Application.instance.stopSound("MUS_BG_MAINMENU");
    Application.instance.playSound("MUS_BG_METAMAP");
    SLoader.unloadFromList(GuiManager.lastGameAssets);
    GuiManager.lastGameAssets = null;
    Application.instance.effectManager.createEffect("guiFxMetamapBirds", 0, 384, this.canvas)
}
Application.subclass(GuiMetamap, SScreen);
GuiMetamap.prototype.free = function() {
    this.m_canvasFx.parent && this.m_canvasFx.parent.removeChild(this.m_canvasFx);
    this.m_canvasFx.free();
    SScreen.prototype.free.call(this)
};
GuiMetamap.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) {
        SScreen.prototype.onUIPress.call(this, a);
        switch (a.name) {
            case "mcGuiBtnMainmenu":
                Application.instance.playSound("SND_UI_CLICK_BACK");
                Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxMainmenu").clip);
                break;
            case "mcGuiBtnLevel01":
            case "mcGuiBtnLevel02":
            case "mcGuiBtnLevel03":
            case "mcGuiBtnLevel04":
            case "mcGuiBtnLevel05":
            case "mcGuiBtnLevel06":
            case "mcGuiBtnLevel07":
            case "mcGuiBtnLevel08":
            case "mcGuiBtnLevel09":
                Application.instance.playSound("SND_UI_LEVEL_CLICK"),
                    Application.instance.effectManager.createEffect("guiFxMetamapButtonPress", a.canvas.position.x / 1.3, a.canvas.position.y / 1.3, this.m_canvasFx)
        }
        this.onResumeScreen()
    }
};
GuiMetamap.prototype.onStopScreen = function() {
    SScreen.prototype.onStopScreen.call(this);
    if (1 === this.m_levelUnlocked)
        if (this.m_maxLevel < Global.TOTAL_LEVELS) this.m_timeline.unlockNewLevel(this.m_maxLevel);
        else Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiMessageBonuslevelMal" : "mcGuiMessageBonuslevelUma", 0, 0, this.canvas).onComplete(this, function() {
            this.m_timeline.unlockNewLevel(this.m_maxLevel)
        });
    else this.m_timeline.showIndicator(this.m_maxLevel)
};
GuiMetamap.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnMainmenu":
            GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU);
            break;
        case "mcGuiBtnLevel01":
        case "mcGuiBtnLevel02":
        case "mcGuiBtnLevel03":
        case "mcGuiBtnLevel04":
        case "mcGuiBtnLevel05":
        case "mcGuiBtnLevel06":
        case "mcGuiBtnLevel07":
        case "mcGuiBtnLevel08":
        case "mcGuiBtnLevel09":
            Global.level = parseInt(this.lastInteractionControl.substr(-1), 10);
            0 !== this.m_levelUnlocked &&
                Global.level === this.m_maxLevel && DataManager.instance.setGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_LEVEL_UNLOCKED_MAL : DataManager.REG_LEVEL_UNLOCKED_UMA, 0);
            DataManager.instance.saveData();
            Global.map = Global.level;
            if (Global.playerSelected === Global.PLAYER_UMA) switch (Global.level) {
                case 0:
                    Global.map = 0;
                    break;
                case 1:
                    Global.map = 6;
                    break;
                case 2:
                    Global.map = 5;
                    break;
                case 3:
                    Global.map = 4;
                    break;
                case 4:
                    Global.map = 3;
                    break;
                case 5:
                    Global.map = 2;
                    break;
                case 6:
                    Global.map = 1;
                    break;
                case 7:
                    Global.map =
                        7;
                    break;
                case 8:
                    Global.map = 8;
                    break;
                case 9:
                    Global.map = 9;
                    break;
                default:
                    Global.map = 0
            }
            Global.showDialogue = !0;
            Global.bossRoom = !1;
            var a = Application.RIGHT_TO_LEFT ? "gamePlatform_rtl" : "gamePlatform_ltr";
            9 != Global.level ? (GuiManager.gameAssets = window.Assets[a].concat(["media/images/animo/world_level_0" + Global.map + ".json", "media/images/animo/" + PlayerPlatformRunner.selectSkin() + ".json", "media/images/animo/ani_enemy_" + (Global.playerSelected === Global.PLAYER_UMA ? "uma" : "mal") + ".json", "media/images/animo/ani_" + (Global.playerSelected ===
                Global.PLAYER_UMA ? "mal" : "uma") + "_npc.json"]), GuiManager.instance.gotoScreen(GuiManager.SC_GAME)) : (GuiManager.gameAssets = window.Assets[a].concat(["media/images/animo/bonus.json"]), GuiManager.instance.gotoScreen(GuiManager.SC_CUTSCENE_TRANSFORMATION))
    }
};
GuiMetamap.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    this.m_timeline.update(a)
};

function GuiMetamapItems(a, b) {
    SScreen.call(this, a, 0, 0, b);
    for (var c = 1; c <= Global.TOTAL_LEVELS; c++) {
        var d = this.getControl("mcGuiBtnLevel0" + c);
        d.addOverListener(null, null, null, null);
        d.addPressListener(b, b.onUIPress);
        d.addReleaseListener(b, b.onUIRelease)
    }
}
Application.subclass(GuiMetamapItems, SScreen);
GuiMetamapItems.prototype.enableLevels = function(a) {
    for (var b = DataManager.instance.getGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_LEVEL_UNLOCKED_MAL : DataManager.REG_LEVEL_UNLOCKED_UMA), c = a + (1 !== b ? 1 : 0), d = 1; d <= Global.TOTAL_LEVELS; d++) {
        d >= c ? (this.getControl("mcGuiBtnLevel0" + d).setClip("mcGuiButtonLevel_locked"), this.getControl("mcGuiBtnLevel0" + d).setEnabled(!1), this.getControl("mcGuiStar" + d).setVisible(!1)) : 1 === DataManager.instance.getLevelRegister(Global.playerSelected, DataManager.REGLEVEL_ADRENALINE_TIME,
            d - 1) && this.getControl("mcGuiBtnLevel0" + d).setClip(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiButtonLevelMal_completed" : "mcGuiButtonLevelUma_completed");
        this.getControl("mcGuiIndicator" + d).setVisible(!1);
        var e = DataManager.instance.getLevelRegister(Global.playerSelected, DataManager.REGLEVEL_STARS, d - 1);
        this.getControl("mcGuiStar" + d).clip.gotoAndStop(e + 1)
    }
    for (d = 2; d <= Global.TOTAL_LEVELS; d++) this.getControl("mcGuiPathLvl" + d).clip.gotoAndStop(d < c ? this.getControl("mcGuiPathLvl" + d).clip.totalFrames : 1);
    a < Global.TOTAL_LEVELS && (this.getControl("mcGuiBtnLevel0" + Global.TOTAL_LEVELS).setVisible(!1), this.getControl("mcGuiPathLvl" + Global.TOTAL_LEVELS).setVisible(!1));
    2 === b && (a = this.getControl("mcGuiBtnLevel0" + a), a.setClip(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiButtonLevelMal_new" : "mcGuiButtonLevelUma_new"), Application.instance.effectManager.createEffect("guiFxMetamapLevelPressLoop", a.canvas.position.x, a.canvas.position.y - 6, this.screenParent.canvas));
    this.getControl("mcGuiStar9").setVisible(!1)
};
GuiMetamapItems.prototype.showIndicator = function(a) {
    this.getControl("mcGuiIndicator" + a).clip.gotoAndPlay(1);
    this.getControl("mcGuiIndicator" + a).setVisible(!0)
};
GuiMetamapItems.prototype.showUnlockNewLevel = function(a) {
    9 != a && this.getControl("mcGuiStar" + a).setVisible(!0);
    var b = this.getControl("mcGuiBtnLevel0" + a);
    b.setEnabled(!0);
    b.setClip(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiButtonLevelMal_new" : "mcGuiButtonLevelUma_new");
    Application.instance.effectManager.createEffect("guiFxMetamapLevelUnlocked", b.canvas.position.x, b.canvas.position.y, this.screenParent.canvas).onComplete(this, function() {
        Application.instance.effectManager.createEffect("guiFxMetamapLevelPressLoop",
            b.canvas.position.x, b.canvas.position.y - 6, this.screenParent.canvas)
    });
    Application.instance.playSound("SND_UI_LEVEL_UNLOCKED")
};
GuiMetamapItems.prototype.unlockNewLevel = function(a) {
    1 < a ? (this.getControl("mcGuiPathLvl" + a).clip.gotoAndPlay(1), this.getControl("mcGuiPathLvl" + a).clip.onEndAnimation(this, function() {
        this.showUnlockNewLevel(a);
        this.showIndicator(a)
    })) : (this.showUnlockNewLevel(a), this.showIndicator(a));
    DataManager.instance.setGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_LEVEL_UNLOCKED_MAL : DataManager.REG_LEVEL_UNLOCKED_UMA, 2)
};

function GuiSelectPlayer(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    Global.playerSelected = -1;
    this.getControl("mcGuiBtnNext").setVisible(!1);
    this.getControl("mcGuiNameMal02").setVisible(!1);
    this.getControl("mcGuiNameUma02").setVisible(!1);
    this.getControl("mcGuiBtnMal02").setVisible(!1);
    this.getControl("mcGuiBtnUma02").setVisible(!1);
    this.getControl("mcGuiBtnMal03").setVisible(!1);
    this.getControl("mcGuiBtnUma03").setVisible(!1);
    this.m_playFx = !1;
    this.m_canvasFx = Application.instance.addDisplayContainer()
}
Application.subclass(GuiSelectPlayer, SScreen);
GuiSelectPlayer.FRAME_FX = 7;
GuiSelectPlayer.prototype.free = function() {
    this.m_canvasFx.parent && this.m_canvasFx.parent.removeChild(this.m_canvasFx);
    this.m_canvasFx.free();
    SScreen.prototype.free.call(this)
};
GuiSelectPlayer.prototype.onEndCharacterAnimation = function() {
    this.getControl("mcGuiNameMal02").setVisible(Global.playerSelected === Global.PLAYER_MAL);
    this.getControl("mcGuiBtnMal02").setVisible(Global.playerSelected === Global.PLAYER_UMA);
    this.getControl("mcGuiNameUma02").setVisible(Global.playerSelected === Global.PLAYER_UMA);
    this.getControl("mcGuiBtnUma02").setVisible(Global.playerSelected === Global.PLAYER_MAL);
    this.getControl("mcGuiBtnMal03").setVisible(Global.playerSelected === Global.PLAYER_MAL);
    this.getControl("mcGuiBtnUma03").setVisible(Global.playerSelected ===
        Global.PLAYER_UMA);
    this.getControl("mcGuiBtnNext").setVisible(!0)
};
GuiSelectPlayer.prototype.selectPlayer = function(a) {
    this.m_canvasFx.parent && this.m_canvasFx.parent.removeChild(this.m_canvasFx); - 1 === Global.playerSelected ? (this.getControl("mcGuiNameMal01").setVisible(!1), this.getControl("mcGuiNameUma01").setVisible(!1), this.getControl("mcGuiBtnMal01").setVisible(!1), this.getControl("mcGuiBtnUma01").setVisible(!1), this.getControl("mcGuiCharacter").setClip(a === Global.PLAYER_MAL ? "gui_screens_selectcharacter_change01" : "gui_screens_selectcharacter_change02")) : (this.getControl("mcGuiNameMal02").setVisible(!1),
        this.getControl("mcGuiNameUma02").setVisible(!1), this.getControl("mcGuiBtnMal02").setVisible(!1), this.getControl("mcGuiBtnUma02").setVisible(!1), this.getControl("mcGuiBtnMal03").setVisible(!1), this.getControl("mcGuiBtnUma03").setVisible(!1), this.getControl("mcGuiCharacter").setClip(a === Global.PLAYER_MAL ? "gui_screens_selectcharacter_change04" : "gui_screens_selectcharacter_change03"));
    this.getControl("mcGuiCharacter").clip.onEndAnimation(this, this.onEndCharacterAnimation);
    this.getControl("mcGuiBtnNext").setVisible(!1);
    Global.playerSelected = a;
    this.m_playFx = !0;
    this.getControl("mcGuiCharacter").clip.mcGuiFxSymbol.addChild(this.m_canvasFx)
};
GuiSelectPlayer.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) switch (SScreen.prototype.onUIPress.call(this, a), a.name) {
        case "mcGuiBtnMal01":
        case "mcGuiBtnMal02":
            Application.instance.playSound("SND_UI_CLICK");
            this.selectPlayer(Global.PLAYER_MAL);
            break;
        case "mcGuiBtnUma01":
        case "mcGuiBtnUma02":
            Application.instance.playSound("SND_UI_CLICK");
            this.selectPlayer(Global.PLAYER_UMA);
            break;
        case "mcGuiBtnBack":
            Application.instance.playSound("SND_UI_CLICK_BACK");
            Application.instance.effectManager.createEffect("guiFxButtonPress",
                0, 0, this.getControl("mcGuiFxBack").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnNext":
            Application.instance.playSound("SND_UI_CLICK_ENTER");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxNext").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnMal03":
        case "mcGuiBtnUma03":
            Application.instance.playSound("SND_UI_CLICK_ENTER"), this.onResumeScreen()
    }
};
GuiSelectPlayer.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnBack":
            GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU);
            break;
        case "mcGuiBtnNext":
        case "mcGuiBtnMal03":
        case "mcGuiBtnUma03":
            1 === DataManager.instance.getGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_MAL_CUTSCENE_SEEN : DataManager.REG_UMA_CUTSCENE_SEEN) ? 1 === DataManager.instance.getGlobalRegister(DataManager.REG_TUTORIAL_DONE) ?
                GuiManager.instance.gotoScreen(GuiManager.SC_METAMAP) : (Global.level = Global.MAP_TUTORIAL, Global.map = Global.MAP_TUTORIAL, GuiManager.gameAssets = window.Assets["gameTuto" + (Global.playerSelected === Global.PLAYER_UMA ? "Uma" : "Mal")].concat(), GuiManager.instance.gotoScreen(GuiManager.SC_GAME)) : GuiManager.instance.gotoScreen(GuiManager.SC_CUTSCENE_INTRO)
    }
};
GuiSelectPlayer.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    this.m_playFx && this.getControl("mcGuiCharacter").clip.currentFrame >= GuiSelectPlayer.FRAME_FX && (this.m_playFx = !1, Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "guiFxSelectcharacterSprayMal" : "guiFxSelectcharacterSprayUma", 0, 0, this.m_canvasFx), Application.instance.playSound("SND_UI_SPRAY"))
};

function GuiTrophies(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(null !== d);
    for (a = 0; a < Global.TOTAL_ACHIEVEMENTS; a++) AchievementManager.instance.isAchvEarned(DataManager.REG_ACHIEVEMENT_1 + a) || this.getControl("mcGuiBtnTrophy0" + (a + 1)).setClip("mcGuiButtonTrophy0" + (a + 1) + "off");
    this.m_trophyIdx = -1;
    this.selectTrophy(1)
}
Application.subclass(GuiTrophies, SScreen);
GuiTrophies.prototype.selectTrophy = function(a) {
    if (this.m_trophyIdx !== a) {
        if (0 < this.m_trophyIdx) {
            var b = AchievementManager.instance.isAchvEarned(DataManager.REG_ACHIEVEMENT_1 + (this.m_trophyIdx - 1));
            this.getControl("mcGuiBtnTrophy0" + this.m_trophyIdx).setClip("mcGuiButtonTrophy0" + this.m_trophyIdx + (b ? "" : "off"))
        }
        this.m_trophyIdx = a;
        b = AchievementManager.instance.isAchvEarned(DataManager.REG_ACHIEVEMENT_1 + (this.m_trophyIdx - 1));
        this.getControl("mcGuiBtnTrophy0" + this.m_trophyIdx).setClip("mcGuiButtonTrophy0" +
            this.m_trophyIdx + (b ? "" : "off") + "s");
        this.getControl("mcGuiTrophy").setClip("mcGuiTrophy0" + this.m_trophyIdx + (b ? "" : "off"));
        this.getControl("mcGuiName").setTextLocalized("STR_TROPHY_NAME0" + this.m_trophyIdx);
        switch (this.m_trophyIdx) {
            case 1:
                this.getControl("mcGuiInfo").setTextReplace("STR_TROPHY_INFO0" + this.m_trophyIdx, ["#"], [AchievementManager.TOTAL_MAL_SPRAY]);
                break;
            case 2:
                this.getControl("mcGuiInfo").setTextReplace("STR_TROPHY_INFO0" + this.m_trophyIdx, ["#"], [AchievementManager.TOTAL_UMA_SHELL]);
                break;
            case 3:
                this.getControl("mcGuiInfo").setTextReplace("STR_TROPHY_INFO0" + this.m_trophyIdx, ["#"], [AchievementManager.TOTAL_ENEMIES]);
                break;
            default:
                this.getControl("mcGuiInfo").setTextLocalized("STR_TROPHY_INFO0" + this.m_trophyIdx)
        }
    }
};
GuiTrophies.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME) switch (SScreen.prototype.onUIPress.call(this, a), a.name) {
        case "mcGuiBtnBack":
            Application.instance.playSound("SND_UI_CLICK_BACK");
            Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxBack").clip);
            this.onResumeScreen();
            break;
        case "mcGuiBtnTrophy01":
        case "mcGuiBtnTrophy02":
        case "mcGuiBtnTrophy03":
        case "mcGuiBtnTrophy04":
        case "mcGuiBtnTrophy05":
        case "mcGuiBtnTrophy06":
            Application.instance.playSound("SND_UI_CLICK"),
                this.selectTrophy(parseInt(a.name.substr(15), 10))
    }
};
GuiTrophies.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnBack":
            null !== this.screenParent ? this.screenParent.dropPopup() : GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU)
    }
};

function GuiCutscene(a, b, c, d, e) {
    SScreen.call(this, a, c, d, e);
    this.type = b;
    this.cantScenes = this.type === GuiCutscene.INTRO && Global.playerSelected === Global.PLAYER_MAL ? 4 : this.type === GuiCutscene.INTRO || this.type === GuiCutscene.OUTRO && Global.playerSelected === Global.PLAYER_MAL ? 2 : 1;
    this.m_currentScene = 1;
    a = this.type === GuiCutscene.INTRO ? Global.playerSelected === Global.PLAYER_MAL ? "STR_CUTSCENE01_01" : "STR_CUTSCENE02_01" : this.type === GuiCutscene.OUTRO ? Global.playerSelected === Global.PLAYER_MAL ? "STR_CUTSCENE03_01" : "STR_CUTSCENE04_01" :
        "STR_CUTSCENE05_01";
    this.getControl("mcGuiTextInfo").setTextLocalized(a)
}
Application.subclass(GuiCutscene, SScreen);
GuiCutscene.INTRO = 0;
GuiCutscene.TRANSFORMATION = 1;
GuiCutscene.OUTRO = 2;
GuiCutscene.prototype.onUIPress = function(a) {
    switch (a.name) {
        case "mcGuiButtonNext":
            this.next();
            break;
        case "mcGuiButtonMainmenu":
            GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU)
    }
};
GuiCutscene.prototype.onPressSpaceBar = function() {
    this.next();
    SScreen.prototype.onPressSpaceBar.call(this)
};
GuiCutscene.prototype.next = function() {
    if (this.m_currentScene == this.cantScenes) this.end();
    else {
        this.m_currentScene += 1;
        var a;
        a = Global.playerSelected === Global.PLAYER_MAL ? this.type === GuiCutscene.INTRO ? "STR_CUTSCENE01_0" + this.m_currentScene : "STR_CUTSCENE03_02" : "STR_CUTSCENE02_02";
        this.getControl("mcGuiTextInfo").setTextLocalized(a)
    }
};
GuiCutscene.prototype.end = function() {
    if (this.type === GuiCutscene.INTRO) {
        if (1 === DataManager.instance.getGlobalRegister(DataManager.REG_TUTORIAL_DONE)) GuiManager.instance.gotoScreen(GuiManager.SC_METAMAP);
        else {
            Global.level = Global.MAP_TUTORIAL;
            Global.map = Global.MAP_TUTORIAL;
            var a = Application.RIGHT_TO_LEFT ? "Mal_rtl" : "Mal_ltr",
                b = Application.RIGHT_TO_LEFT ? "Uma_rtl" : "Uma_ltr";
            GuiManager.gameAssets = window.Assets["gameTuto" + (Global.playerSelected === Global.PLAYER_UMA ? b : a)].concat();
            GuiManager.instance.gotoScreen(GuiManager.SC_GAME)
        }
        DataManager.instance.setGlobalRegister(Global.playerSelected ===
            Global.PLAYER_MAL ? DataManager.REG_MAL_CUTSCENE_SEEN : DataManager.REG_UMA_CUTSCENE_SEEN, 1);
        DataManager.instance.saveData()
    } else this.type === GuiCutscene.OUTRO ? this.level8FirstTime() ? (DataManager.instance.setGlobalRegister(DataManager.REG_LEVEL_8_BEATEN, 1), DataManager.instance.saveData(), GuiManager.instance.gotoScreen(GuiManager.SC_END_GAME)) : GuiManager.instance.gotoScreen(GuiManager.SC_METAMAP) : (Global.level = Global.LEVEL_BONUS, Global.map = Global.MAP_BONUS, GuiManager.instance.gotoScreen(GuiManager.SC_GAME))
};
GuiCutscene.prototype.level8FirstTime = function() {
    return 0 === DataManager.instance.getGlobalRegister(DataManager.REG_LEVEL_8_BEATEN) ? 8 === Global.level : !1
};

function GuiManager() {
    new DataManager;
    new AchievementManager;
    ScreenManager.call(this);
    GuiManager.instance = this
}
Application.subclass(GuiManager, ScreenManager);
GuiManager.instance = null;
GuiManager.sandboxGuiView = "";
GuiManager.SC_SANDBOX = "gui_sandbox";
GuiManager.SC_SANBOX_GUI_VIEW = "gui_sandbox_gui_view";
GuiManager.SC_SANBOX_NANO_VIEW = "gui_sandbox_nano_view";
GuiManager.SC_SOUND_LOADER = "gui_soundloader";
GuiManager.SC_PRELOAD = "gui_preload";
GuiManager.SC_LOADER = "gui_loader";
GuiManager.SC_MAIN_MENU = "gui_main_menu";
GuiManager.SC_GAME = "gui_game";
GuiManager.SC_CUTSCENE_INTRO = "gui_cutscene_intro";
GuiManager.SC_CUTSCENE_OUTRO = "gui_cutscene_outro";
GuiManager.SC_CUTSCENE_TRANSFORMATION = "gui_cutscene_transform";
GuiManager.SC_METAMAP = "gui_metamap";
GuiManager.SC_SELECT_PLAYER = "gui_select_player";
GuiManager.SC_TROPHIES = "gui_trophies";
GuiManager.SC_END_LEVEL = "gui_end_level";
GuiManager.SC_END_GAME = "gui_end_game";
GuiManager.SC_END_GAME_2 = "gui_end_game_2";
GuiManager.SC_TRY_AGAIN = "gui_try_again";
GuiManager.SC_SOUND_TEST = "gui_sound_test";
GuiManager.SC_ANIMATION_TEST = "gui_animation_test";
GuiManager.gameAssets = null;
GuiManager.lastGameAssets = null;
GuiManager.prototype.gotoScreen = function(a) {
    Application.instance.effectManager.clear();
    ScreenManager.prototype.gotoScreen.call(this, a);
    switch (a) {
        case GuiManager.SC_SANBOX_GUI_VIEW:
            a = Application.RIGHT_TO_LEFT ? "sandbox_gui_test_rtl" : "sandbox_gui_test";
            window.Assets[a] ? (this.currentScreen = new GuiLoader("mcGuiScreenLoader", window.Assets[a], GuiManager.SC_SANBOX_GUI_VIEW), window.Assets[a] = null) : this.currentScreen = new DebugScreen(GuiManager.sandboxGuiView);
            break;
        case GuiManager.SC_SANBOX_NANO_VIEW:
            a = "sandbox_nano";
            window.Assets[a] ? (this.currentScreen = new GuiLoader("mcGuiScreenLoader", window.Assets[a], GuiManager.SC_SANBOX_NANO_VIEW), window.Assets[a] = null) : this.currentScreen = new DebugScreenNano;
            break;
        case GuiManager.SC_PRELOAD:
            window.Assets.preload && (this.currentScreen = window.Assets.localizedImages ? new GuiLoader("", window.Assets.preload, "", 0, 100, !0, window.Assets.localizedImages) : new GuiLoader("", window.Assets.preload, "", 0, 100, !0), window.Assets.preload = null);
            break;
        case GuiManager.SC_SOUND_LOADER:
            this.currentScreen =
                new GuiLoader("mcGuiScreenLoader", null, GuiManager.SC_MAIN_MENU, 0, Application.SOUND_PERCENT);
            break;
        case GuiManager.SC_MAIN_MENU:
            a = Application.RIGHT_TO_LEFT ? "media1_rtl" : "media1_ltr";
            SLoader.checkTexturesLoaded(window.Assets[a]) ? this.currentScreen = new GuiMainMenu("mcGuiScreenMainMenu") : this.currentScreen = new GuiLoader("mcGuiScreenLoader", window.Assets[a], GuiManager.SC_MAIN_MENU, Application.SOUND_PERCENT, 100);
            break;
        case GuiManager.SC_GAME:
            GuiManager.gameAssets ? (this.currentScreen = new GuiLoader("mcGuiScreenLoader",
                GuiManager.gameAssets, GuiManager.SC_GAME), GuiManager.lastGameAssets = GuiManager.gameAssets, GuiManager.gameAssets = null) : this.currentScreen = new GuiGame;
            break;
        case GuiManager.SC_CUTSCENE_INTRO:
            this.currentScreen = new GuiCutscene("mcGuiScreenCutscene" + (Global.playerSelected === Global.PLAYER_MAL ? "01" : "02") + "Intro", GuiCutscene.INTRO);
            break;
        case GuiManager.SC_CUTSCENE_OUTRO:
            this.currentScreen = new GuiCutscene("mcGuiScreenCutscene" + (Global.playerSelected === Global.PLAYER_MAL ? "01" : "02") + "Outro", GuiCutscene.OUTRO);
            break;
        case GuiManager.SC_CUTSCENE_TRANSFORMATION:
            this.currentScreen = new GuiCutscene("mcGuiScreenCutscene" + (Global.playerSelected === Global.PLAYER_MAL ? "01" : "02") + "Transformation", GuiCutscene.TRANSFORMATION);
            break;
        case GuiManager.SC_ANIMATION_TEST:
            window.Assets.animationForTestToREMOVE ? (this.currentScreen = new GuiLoader("mcGuiScreenLoader", window.Assets.animationForTestToREMOVE, GuiManager.SC_ANIMATION_TEST), window.Assets.animationForTestToREMOVE = null) : this.currentScreen = new GuiAnimationTest;
            break;
        case GuiManager.SC_METAMAP:
            a =
                Application.RIGHT_TO_LEFT ? "media1_rtl" : "media1_ltr";
            SLoader.checkTexturesLoaded(window.Assets[a]) ? this.currentScreen = new GuiMetamap("mcGuiScreenMetamapHud") : this.currentScreen = new GuiLoader("mcGuiScreenLoader", window.Assets[a], GuiManager.SC_METAMAP);
            break;
        case GuiManager.SC_SELECT_PLAYER:
            a = Application.RIGHT_TO_LEFT ? "media2_rtl" : "media2_ltr";
            SLoader.checkTexturesLoaded(window.Assets[a]) ? this.currentScreen = new GuiSelectPlayer("mcGuiScreenSelectCharacter") : this.currentScreen = new GuiLoader("mcGuiScreenLoader",
                window.Assets[a], GuiManager.SC_SELECT_PLAYER);
            break;
        case GuiManager.SC_END_LEVEL:
            this.currentScreen = new GuiPopupEndLevel("mcGuiPopupEndlevel");
            break;
        case GuiManager.SC_TROPHIES:
            this.currentScreen = new GuiTrophies("mcGuiScreenTrophy");
            break;
        case GuiManager.SC_END_GAME:
            a = Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma";
            this.currentScreen = new GuiEndGame("mcGuiScreenEndgame01" + a);
            break;
        case GuiManager.SC_END_GAME_2:
            a = Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma";
            this.currentScreen = new GuiEndGame("mcGuiScreenEndgame02" +
                a);
            break;
        case GuiManager.SC_TRY_AGAIN:
            this.currentScreen = new GuiTryAgain("mcGuiPopupTryagain");
            break;
        case GuiManager.SC_SANDBOX:
            window.Assets.sandbox ? (this.currentScreen = new GuiLoader("mcGuiScreenLoader", window.Assets.sandbox, GuiManager.SC_SANDBOX), window.Assets.sandbox = null) : this.currentScreen = new GuiGame
    }
};
GuiManager.prototype.onKeyDown = function(a) {
    ScreenManager.prototype.onKeyDown.call(this, a);
    Cheats.onKeyDown(a)
};
GuiManager.prototype.free = function() {
    GuiManager.instance = null;
    ScreenManager.prototype.free.call(this)
};

function GuiPopupEndLevel(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    Application.instance.playSound("SND_WIN");
    Global.totalItems = Math.floor(Math.max(Global.totalItems * Application.config.misc.starsThreshold[2], 1));
    this.getControl("mcGuiBar").clip.loop = !1;
    this.getControl("mcGuiBar").clip.stop();
    this.m_barMaxFrame = 1;
    this.m_starAppearIdx = 0;
    this.m_starAppearFrames = [30, 63, 100];
    b = Math.min(Global.itemsCollected / Global.totalItems, 1);
    c = [29, 33, 37];
    for (var e = a = d = 0; e < Global.TOTAL_STARS; e++) {
        var f = Application.config.misc.starsThreshold[e];
        if (b >= f) a++, d = f, this.m_barMaxFrame = this.m_starAppearFrames[e];
        else {
            this.m_barMaxFrame += c[e] * Math.floor((b - d) / (f - d));
            break
        }
    }
    this.getControl("mcGuiTitle").setTextLocalized("STR_ENDLEVEL_TITLE0" + Math.max(a, 1));
    this.getControl("mcGuiTitleS").setTextLocalized("STR_ENDLEVEL_TITLE0" + Math.max(a, 1));
    this.getControl("mcGuiCharacter").setClip("gui_popups_endlevel_character0" + Math.max(a, 1));
    for (e = 1; e <= Global.TOTAL_STARS; e++) this.getControl("mcGuiStarOn" + e).setVisible(!1);
    this.getControl("mcGuiTreasuresTextMal").setVisible(Global.playerSelected ===
        Global.PLAYER_MAL);
    this.getControl("mcGuiTreasuresTextUma").setVisible(Global.playerSelected === Global.PLAYER_UMA);
    this.getControl("mcGuiAdrenalineTextMal").setVisible(Global.playerSelected === Global.PLAYER_MAL);
    this.getControl("mcGuiAdrenalineTextUma").setVisible(Global.playerSelected === Global.PLAYER_UMA);
    this.getControl("mcGuiAdrenalineGoalTextMal").setVisible(Global.playerSelected === Global.PLAYER_MAL);
    this.getControl("mcGuiAdrenalineGoalTextUma").setVisible(Global.playerSelected === Global.PLAYER_UMA);
    this.getControl("mcGuiAdrenalineGoalNumbMal").setVisible(Global.playerSelected === Global.PLAYER_MAL);
    this.getControl("mcGuiAdrenalineGoalNumbUma").setVisible(Global.playerSelected === Global.PLAYER_UMA);
    Global.playerSelected === Global.PLAYER_UMA && (this.getControl("mcGuiCharacter").clip.gotoAndStop(2), this.getControl("mcGuiMedals").setClip("gui_popups_endlevel_medal_uma"), this.getControl("mcGuiSupport01").clip.gotoAndStop(2), this.getControl("mcGuiSupport02").clip.gotoAndStop(2), this.getControl("mcGuiStarOff1").clip.gotoAndStop(2),
        this.getControl("mcGuiStarOff2").clip.gotoAndStop(2), this.getControl("mcGuiStarOff3").clip.gotoAndStop(2));
    this.getControl("mcGuiMedals").clip.loop = !1;
    this.getControl("mcGuiMedals").clip.gotoAndStop(1);
    this.getControl("mcGuiTreasuresNumb").setText("0");
    this.m_textTween = null;
    this.m_textTweenFinished = !1;
    b = Common.makeClockTime(Application.config.levelConfig[Global.level - 1].adrenalineGoalTime);
    b = Common.zeroPad(b.minutes, 2) + ":" + Common.zeroPad(b.seconds, 2);
    this.getControl("mcGuiAdrenalineGoalNumbMal").setText(b);
    this.getControl("mcGuiAdrenalineGoalNumbUma").setText(b);
    b = Common.makeClockTime(Global.adrenalineTime);
    b = Common.zeroPad(b.minutes, 2) + ":" + Common.zeroPad(b.seconds, 2);
    this.getControl("mcGuiAdrenalineYourtimeNumb").setText(b);
    b = DataManager.instance.getGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_MAX_LEVEL_REACHED_MAL : DataManager.REG_MAX_LEVEL_REACHED_UMA);
    Global.level === b && 8 === Global.level && AchievementManager.instance.isAchvEarned(DataManager.REG_ACHIEVEMENT_5) ? (DataManager.instance.setGlobalRegister(DataManager.REG_MAX_LEVEL_REACHED_MAL,
        Global.level + 1), DataManager.instance.setGlobalRegister(DataManager.REG_MAX_LEVEL_REACHED_UMA, Global.level + 1), DataManager.instance.setGlobalRegister(DataManager.REG_LEVEL_UNLOCKED_MAL, 1), DataManager.instance.setGlobalRegister(DataManager.REG_LEVEL_UNLOCKED_UMA, 1)) : Global.level === b && 8 > Global.level && (DataManager.instance.setGlobalRegister(Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_MAX_LEVEL_REACHED_MAL : DataManager.REG_MAX_LEVEL_REACHED_UMA, Global.level + 1), DataManager.instance.setGlobalRegister(Global.playerSelected ===
        Global.PLAYER_MAL ? DataManager.REG_LEVEL_UNLOCKED_MAL : DataManager.REG_LEVEL_UNLOCKED_UMA, 1));
    b = DataManager.instance.getLevelRegister(Global.playerSelected, DataManager.REGLEVEL_STARS, Global.level - 1);
    a > b && DataManager.instance.setLevelRegister(Global.playerSelected, DataManager.REGLEVEL_STARS, Global.level - 1, a);
    (this.m_adrenalineTimeBeaten = Global.adrenalineTime >= Application.config.levelConfig[Global.level - 1].adrenalineGoalTime) && DataManager.instance.setLevelRegister(Global.playerSelected, DataManager.REGLEVEL_ADRENALINE_TIME,
        Global.level - 1, 1);
    DataManager.instance.saveData();
    0 >= Global.itemsCollected && (this.m_textTweenFinished = !0);
    this.m_playFx = !1;
    this.m_canvasFx = Application.instance.addDisplayContainer()
}
Application.subclass(GuiPopupEndLevel, SScreen);
GuiPopupEndLevel.BAR_ANIM_FRAME = 23;
GuiPopupEndLevel.FRAME_FX = 16;
GuiPopupEndLevel.prototype.free = function() {
    this.m_textTween && (this.m_textTween.stop(), this.m_textTween.free(), this.m_textTween = null);
    Application.instance.stopSound("SND_END_LEVEL_COUNTING");
    SScreen.prototype.free.call(this)
};
GuiPopupEndLevel.prototype.onUIPress = function(a) {
    if (this.m_state === SScreen.ST_MAINFRAME && this.m_textTweenFinished && !AchievementManager.instance.isThereNewAchvToShow()) {
        SScreen.prototype.onUIPress.call(this, a);
        switch (a.name) {
            case "mcGuiBtnReplay":
                Application.instance.playSound("SND_UI_CLICK");
                Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxReplay").clip);
                break;
            case "mcGuiBtnNext":
                Application.instance.playSound("SND_UI_CLICK_ENTER");
                Application.instance.effectManager.createEffect("guiFxButtonPress",
                    0, 0, this.getControl("mcGuiFxNext").clip);
                break;
            case "mcGuiBtnMetamap":
                Application.instance.playSound("SND_UI_CLICK_BACK"), Application.instance.effectManager.createEffect("guiFxButtonPress", 0, 0, this.getControl("mcGuiFxMetamap").clip)
        }
        this.onResumeScreen()
    }
};
GuiPopupEndLevel.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    switch (this.lastInteractionControl) {
        case "mcGuiBtnReplay":
            GuiManager.instance.gotoScreen(GuiManager.SC_GAME);
            break;
        case "mcGuiBtnNext":
            this.allStarsFirstTime() ? (DataManager.instance.setGlobalRegister(DataManager.REG_ALL_STARS, 1), DataManager.instance.saveData(), GuiManager.instance.gotoScreen(GuiManager.SC_END_GAME_2)) : 8 === Global.level ? GuiManager.instance.gotoScreen(GuiManager.SC_CUTSCENE_OUTRO) : GuiManager.instance.gotoScreen(GuiManager.SC_METAMAP);
            break;
        case "mcGuiBtnMetamap":
            GuiManager.instance.gotoScreen(GuiManager.SC_MAIN_MENU)
    }
};
GuiPopupEndLevel.prototype.allStarsFirstTime = function() {
    if (0 === DataManager.instance.getGlobalRegister(DataManager.REG_ALL_STARS)) {
        for (var a = 0; a < Global.TOTAL_LEVELS - 1; a++)
            if (3 !== DataManager.instance.getLevelRegister(Global.PLAYER_MAL, DataManager.REGLEVEL_STARS, a) || 3 !== DataManager.instance.getLevelRegister(Global.PLAYER_UMA, DataManager.REGLEVEL_STARS, a)) return !1;
        return !0
    }
    return !1
};
GuiPopupEndLevel.prototype.onUpdateItemText = function(a) {
    this.getControl("mcGuiTreasuresNumb").setText("" + Math.floor(a.items))
};
GuiPopupEndLevel.prototype.onCompleteItemText = function(a) {
    this.onUpdateItemText(a);
    Application.instance.stopSound("SND_END_LEVEL_COUNTING");
    this.m_textTweenFinished = !0
};
GuiPopupEndLevel.prototype.update = function(a) {
    this.getControl("mcGuiBar").clip.m_stopped && this.getControl("mcGuiBar").clip.currentFrame !== this.getControl("mcGuiBar").clip.totalFrames ? this.getControl("mcGuiBar").clip.m_stopped && this.clip.currentFrame >= GuiPopupEndLevel.BAR_ANIM_FRAME && (this.getControl("mcGuiBar").clip.currentFrame !== this.m_barMaxFrame - 1 && this.getControl("mcGuiBar").clip.currentFrame !== this.getControl("mcGuiBar").clip.totalFrames ? (this.getControl("mcGuiBar").clip.gotoAndPlay(1), this.m_textTween =
        Common.tween({
            parent: this,
            items: 0,
            onUpdate: this.onUpdateItemText,
            onComplete: this.onCompleteItemText
        }, {
            items: Global.itemsCollected
        }, this.m_barMaxFrame * this.getControl("mcGuiBar").clip.m_changeTime, !0, 0, TweenEasing.LinearNone), Application.instance.playSound("SND_END_LEVEL_COUNTING")) : 1 !== this.m_barMaxFrame || this.m_textTweenFinished || (this.getControl("mcGuiTreasuresNumb").setText("" + Global.itemsCollected), this.m_textTweenFinished = !0)) : (this.getControl("mcGuiBar").clip.currentFrame >= this.m_starAppearFrames[this.m_starAppearIdx] &&
        (this.m_starAppearIdx++, this.getControl("mcGuiStarOn" + this.m_starAppearIdx).setVisible(!0), this.getControl("mcGuiStarOn" + this.m_starAppearIdx).clip.gotoAndPlay(1), Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "guiFxEndlevelStarMal" : "guiFxEndlevelStarUma", 0, 0, this.getControl("mcGuiStarFx" + this.m_starAppearIdx).clip), Application.instance.playSound("SND_END_LEVEL_STAR")), this.getControl("mcGuiBar").clip.currentFrame >= this.m_barMaxFrame && this.getControl("mcGuiBar").clip.gotoAndStop(this.m_barMaxFrame));
    this.clip.currentFrame >= GuiPopupEndLevel.BAR_ANIM_FRAME && this.m_adrenalineTimeBeaten && this.getControl("mcGuiMedals").clip.m_stopped && 0 === this.getControl("mcGuiMedals").clip.currentFrame && (this.getControl("mcGuiMedals").clip.gotoAndPlay(1), this.m_playFx = !0, this.getControl("mcGuiMedals").clip.mcGuiFxSymbol.addChild(this.m_canvasFx));
    this.clip.currentFrame >= GuiPopupEndLevel.BAR_ANIM_FRAME && this.m_textTweenFinished && AchievementManager.instance.isThereNewAchvToShow() && this.addPopup(GuiPopupNewTrophy, "mcGuiPopupNewtrophyBackground");
    this.m_playFx && this.getControl("mcGuiMedals").clip.currentFrame >= GuiPopupEndLevel.FRAME_FX && (this.m_playFx = !1, Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "guiFxSpraySmokeMal" : "guiFxSpraySmokeUma", 0, 0, this.m_canvasFx), Application.instance.playSound("SND_UI_SPRAY"));
    SScreen.prototype.update.call(this, a)
};

function GuiAnimationTest() {
    SScreen.call(this, "", 0, 0, null);
    this.clips = [];
    this.addClip("ani_player01_bounce_back", 50, 155);
    this.addClip("ani_player01_bounce", 180, 155);
    this.addClip("ani_player01_bounce_hit", 300, 155);
    this.addClip("ani_player01_climb_tile_1", 450, 155);
    this.addClip("ani_player01_climb_tile_2", 600, 155);
    this.addClip("ani_player01_climb_tile_3", 750, 155);
    this.addClip("ani_player01_climb_tile_4", 900, 155);
    this.addClip("ani_player01_defeat", 50, 355);
    this.addClip("ani_player01_evade_1", 180, 355);
    this.addClip("ani_player01_evade_2", 380, 355);
    this.addClip("ani_player01_idle", 600, 355);
    this.addClip("ani_player01_jump_back_restore", 750, 355);
    this.addClip("ani_player01_jump_down_1", 900, 355);
    this.addClip("ani_player01_jump_down_2", 50, 550);
    this.addClip("ani_player01_jump_down_3", 180, 550);
    this.addClip("ani_player01_jump_up_1", 300, 550);
    this.addClip("ani_player01_jump_up_2", 420, 550);
    this.addClip("ani_player01_jump_up_3", 560, 550);
    this.addClip("ani_player01_land_1", 700, 550);
    this.addClip("ani_player01_land_spin",
        850, 550);
    this.addClip("ani_player01_run", 50, 740);
    this.addClip("ani_player01_attack", 180, 740);
    this.addClip("ani_player01_stand", 300, 740);
    this.addClip("ani_player01_win", 440, 740);
    this.addClip("ani_player01_swing", 700, 740)
}
Application.subclass(GuiAnimationTest, SScreen);
GuiAnimationTest.instance = null;
GuiAnimationTest.prototype.addClip = function(a, b, c) {
    var d = Application.instance.getClip(a);
    d.position.x = b;
    d.position.y = c;
    this.canvas.addChild(d);
    a = new PIXI.Text(a.substring(13, a.length), {
        fill: "#FFFFFF",
        fontSize: 15
    });
    a.position.x = b - .5 * a.width;
    a.position.y = c + 10;
    this.canvas.addChild(a);
    this.clips.push(d)
};
GuiAnimationTest.prototype.update = function(a) {
    for (var b = 0; b < this.clips.length; b++) this.clips[b].update(a)
};

function GuiPopupNewTrophy(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0);
    this.m_achvQueue = AchievementManager.instance.getNewAchvEarnedAndFlush();
    this.m_content = new GuiPopupNewTrophyItems(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiPopupNewtrophyMal" : "mcGuiPopupNewtrophyUma", this);
    this.getControl("mcGuiContent").canvas.addChild(this.m_content.canvas);
    this.m_content.setUp(this.m_achvQueue.shift())
}
Application.subclass(GuiPopupNewTrophy, SScreen);
GuiPopupNewTrophy.CONTENT_DISAPPEAR_FRAME = 73;
GuiPopupNewTrophy.prototype.onFinishContent = function() {
    0 < this.m_achvQueue.length && (this.m_content.clip.gotoAndPlay(1), this.m_content.setUp(this.m_achvQueue.shift()))
};
GuiPopupNewTrophy.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    this.screenParent.dropPopup()
};
GuiPopupNewTrophy.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    this.m_content.update(a);
    if (0 === this.m_achvQueue.length && this.m_state === SScreen.ST_MAINFRAME && this.m_content.clip.currentFrame >= GuiPopupNewTrophy.CONTENT_DISAPPEAR_FRAME) this.onResumeScreen()
};

function GuiPopupNewTrophyItems(a, b) {
    SScreen.call(this, a, 0, 0, b)
}
Application.subclass(GuiPopupNewTrophyItems, SScreen);
GuiPopupNewTrophyItems.prototype.setUp = function(a) {
    a = a - DataManager.REG_ACHIEVEMENT_1 + 1;
    this.getControl("mcGuiTrophy").setClip("mcGuiTrophy0" + a);
    this.getControl("mcGuiTextTitle").setTextLocalized("STR_TROPHY_NAME0" + a);
    this.getControl("mcGuiTextTitleS").setTextLocalized("STR_TROPHY_NAME0" + a);
    switch (a) {
        case 1:
            this.getControl("mcGuiTextInfo").setTextReplace("STR_TROPHY_INFO0" + a, ["#"], [AchievementManager.TOTAL_MAL_SPRAY]);
            break;
        case 2:
            this.getControl("mcGuiTextInfo").setTextReplace("STR_TROPHY_INFO0" +
                a, ["#"], [AchievementManager.TOTAL_UMA_SHELL]);
            break;
        case 3:
            this.getControl("mcGuiTextInfo").setTextReplace("STR_TROPHY_INFO0" + a, ["#"], [AchievementManager.TOTAL_ENEMIES]);
            break;
        default:
            this.getControl("mcGuiTextInfo").setTextLocalized("STR_TROPHY_INFO0" + a)
    }
    Application.instance.playSound("SND_NEW_THROPHY")
};
GuiPopupNewTrophyItems.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    this.screenParent.onFinishContent()
};

function DialogueNode() {
    this.clip = this.strTitle = this.str = "";
    this.side = 0
}
DialogueNode.ALIGN_LEFT = 1;
DialogueNode.ALIGN_RIGTH = 2;
DialogueNode.getDialogueNodes = function(a) {
    var b = [],
        c = window.dialogues.content,
        d;
    for (d in c)
        if (c[d].id.toUpperCase() == a.toUpperCase()) {
            var e = new DialogueNode;
            e.str = c[d].string.toUpperCase();
            e.strTitle = c[d].title.toUpperCase();
            e.clip = c[d].clip.toLowerCase();
            e.side = parseInt(c[d].side, 10);
            b.push(e)
        }
    return b
};
DialogueNode.exists = function(a) {
    var b = window.dialogues.content,
        c;
    for (c in b)
        if (b[c].id.toUpperCase() == a.toUpperCase()) return !0;
    return !1
};

function DialogueContent(a) {
    this.clip = Application.instance.addDisplayContainer();
    this.guiParent = a;
    this.m_currentNode = null;
    this.m_lastSide = 0;
    this.m_dialogueNodes = this.guiParent.dialogueNodes;
    this.m_characterLeft = new DialogueCharacter(DialogueContent.SIDE_LEFT);
    this.m_characterRight = new DialogueCharacter(DialogueContent.SIDE_RIGHT);
    this.clip.addChild(this.m_characterLeft.clip);
    this.clip.addChild(this.m_characterRight.clip)
}
DialogueContent.SIDE_LEFT = 1;
DialogueContent.SIDE_RIGHT = 2;
DialogueContent.prototype.update = function(a) {
    this.m_characterLeft.update(a);
    this.m_characterRight.update(a)
};
DialogueContent.prototype.next = function() {
    0 == this.m_dialogueNodes.length ? (this.m_characterLeft.outro(), this.guiParent.showNameLeft(""), this.m_characterRight.outro(), this.guiParent.showNameRight(""), this.guiParent.clearInfo(), this.guiParent.onResumeScreen()) : (this.m_currentNode = this.m_dialogueNodes.splice(0, 1)[0], this.m_currentNode.side == DialogueContent.SIDE_LEFT ? (this.m_characterLeft.setClip(this.m_currentNode.clip, this.m_currentNode.strTitle), this.m_characterLeft.show(), "gui_cs_mal_ben_uma" === this.m_currentNode.clip &&
        this.m_characterRight.setClip("gui_cs_nobody", ""), this.m_characterRight.hide(), this.guiParent.showNameLeft(this.m_currentNode.strTitle, this.m_lastSide != this.m_currentNode.side, this.m_currentNode.clip + "_namebase"), this.guiParent.showNameRight("")) : (this.m_characterRight.setClip(this.m_currentNode.clip, this.m_currentNode.strTitle), this.m_characterRight.show(), this.m_characterLeft.hide(), this.guiParent.showNameLeft(""), this.guiParent.showNameRight(this.m_currentNode.strTitle, this.m_lastSide != this.m_currentNode.side,
        this.m_currentNode.clip + "_namebase")), this.m_lastSide = this.m_currentNode.side, this.guiParent.setInfo(this.m_currentNode.str))
};
DialogueContent.prototype.free = function() {
    this.m_characterLeft.free();
    this.m_characterLeft = null;
    this.m_characterRight.free();
    this.m_dialogueNodes = this.m_characterRight = null
};

function DialogueCharacter(a) {
    this.side = a;
    this.state = DialogueCharacter.ST_NONE;
    this.m_move = null;
    this.m_nameClipToChange = this.m_nameClip = "";
    this.m_posXIn = this.m_posXOut = this.m_posY = 0;
    this.m_inScreen = !1;
    this.m_animation = null;
    this.fixScaleX = this.side == DialogueContent.SIDE_LEFT ? 1 : -1;
    this.m_nameCharacterToChange = this.m_nameCharacter = this.m_nameClipToChange = this.m_nameClip = "";
    this.m_posY = 660;
    this.m_posXOut = this.side == DialogueContent.SIDE_LEFT ? 0 - DialogueCharacter.OFFSET_OUT : DialogueCharacter.SCREEN_WIDTH +
        DialogueCharacter.OFFSET_OUT;
    this.m_posXIn = this.side == DialogueContent.SIDE_LEFT ? 0 + DialogueCharacter.OFFSET_IN : DialogueCharacter.SCREEN_WIDTH - DialogueCharacter.OFFSET_IN;
    this.m_move = new LinearMovement(0, 0, DialogueCharacter.SPEED);
    this.m_move.setCallbacks(this, this.onEndMovement, null);
    this.clip = Application.instance.addDisplayContainer();
    this.clip.x = this.m_posXOut;
    this.clip.y = this.m_posY
}
DialogueCharacter.ST_NONE = 0;
DialogueCharacter.ST_INTRO = 1;
DialogueCharacter.ST_WAIT = 2;
DialogueCharacter.ST_OUTRO = 3;
DialogueCharacter.ST_HIDE = 4;
DialogueCharacter.ST_SHOW = 5;
DialogueCharacter.OFFSET_OUT = 300;
DialogueCharacter.OFFSET_IN = 150;
DialogueCharacter.SPEED = .65;
DialogueCharacter.SCALE_SPEED = 2E-4;
DialogueCharacter.SCALE_MIN = .95;
DialogueCharacter.SCALE_MAX = 1.03;
DialogueCharacter.SCREEN_WIDTH = 1024;
DialogueCharacter.prototype.onEndMovement = function(a) {
    switch (this.state) {
        case DialogueCharacter.ST_INTRO:
            this.state = DialogueCharacter.ST_WAIT;
            break;
        case DialogueCharacter.ST_OUTRO:
            "" != this.m_nameClipToChange ? (this.m_nameClip = this.m_nameClipToChange, this.m_nameClipToChange = "", this.m_nameCharacter = this.m_nameCharacterToChange, this.m_nameCharacterToChange = "", this.changeClip(this.m_nameClip), this.intro()) : (this.state = DialogueCharacter.ST_WAIT, this.m_inScreen = !1)
    }
};
DialogueCharacter.prototype.setClip = function(a, b) {
    this.m_nameClip != a && (this.m_nameCharacter === b ? (this.m_nameClip = a, this.m_nameCharacter = b, this.changeClip(this.m_nameClip)) : "" == this.m_nameClip ? (this.m_nameClip = a, this.m_nameCharacter = b, this.changeClip(this.m_nameClip), this.intro()) : this.m_nameClip != a && (this.m_nameClipToChange = a, this.m_nameCharacterToChange = b, this.outro()))
};
DialogueCharacter.prototype.changeClip = function(a) {
    this.m_animation && (this.clip.removeChild(this.m_animation), this.m_animation.free(), this.m_animation = null);
    this.m_animation = Application.instance.getClip(a);
    this.clip.addChild(this.m_animation)
};
DialogueCharacter.prototype.intro = function() {
    this.m_move.m_initX = this.m_move.m_x = this.m_posXOut;
    this.m_move.m_initY = this.m_move.m_y = this.m_posY;
    this.m_move.gotoPosition(this.m_posXIn, this.m_posY);
    this.clip.scale.x = DialogueCharacter.SCALE_MAX * this.fixScaleX;
    this.clip.scale.y = DialogueCharacter.SCALE_MAX;
    this.state = DialogueCharacter.ST_INTRO;
    this.m_inScreen = !0
};
DialogueCharacter.prototype.outro = function() {
    this.m_move.gotoPosition(this.m_posXOut, this.m_posY);
    this.state = DialogueCharacter.ST_OUTRO
};
DialogueCharacter.prototype.update = function(a) {
    null != this.m_move && this.m_move.update(a);
    switch (this.state) {
        case DialogueCharacter.ST_INTRO:
        case DialogueCharacter.ST_OUTRO:
            this.m_move.update(a);
            this.clip.x = this.m_move.getX();
            this.clip.y = this.m_move.getY();
            break;
        case DialogueCharacter.ST_HIDE:
            this.clip.scale.y -= DialogueCharacter.SCALE_SPEED * a;
            this.clip.scale.x = this.clip.scale.y * this.fixScaleX;
            this.clip.scale.y <= DialogueCharacter.SCALE_MIN && (this.clip.scale.x = DialogueCharacter.SCALE_MIN * this.fixScaleX,
                this.clip.scale.y = DialogueCharacter.SCALE_MIN, this.state = DialogueCharacter.ST_WAIT);
            break;
        case DialogueCharacter.ST_SHOW:
            this.clip.scale.y += DialogueCharacter.SCALE_SPEED * a, this.clip.scale.x = this.clip.scale.y * this.fixScaleX, this.clip.scale.y >= DialogueCharacter.SCALE_MAX && (this.clip.scale.x = DialogueCharacter.SCALE_MAX * this.fixScaleX, this.clip.scale.y = DialogueCharacter.SCALE_MAX, this.state = DialogueCharacter.ST_WAIT)
    }
};
DialogueCharacter.prototype.hide = function() {
    this.state == DialogueCharacter.ST_WAIT && "" != this.m_nameClip && (this.m_animation.setTint(10066329), this.state = DialogueCharacter.ST_HIDE)
};
DialogueCharacter.prototype.show = function() {
    this.state == DialogueCharacter.ST_WAIT && "" != this.m_nameClip && (this.m_animation.setTint(16777215), this.state = DialogueCharacter.ST_SHOW)
};
DialogueCharacter.prototype.free = function() {
    null != this.m_animation && (this.clip.removeChild(this.m_animation), this.m_animation.free(), this.m_animation = null);
    this.clip = null;
    this.m_move.free();
    this.m_move = null
};

function GuiDialogue(a, b, c, d) {
    SScreen.call(this, a, b, c, d);
    this.setInteractive(!0);
    this.callbackClose = this.dialogue = null;
    this.getControl("mcGuiTextTaptocontinue").setVisible(!1);
    this.getControl("mcGuiTextTaptocontinue").setTextLocalized("STR_TAPTOCONTINUE" + (Application.instance.isMobileDevice ? "" : "PC"));
    this.m_callback = this.m_caller = null;
    this.delayNext = 99999;
    this.dialogueNodes = null;
    this.activePressBar()
}
Application.subclass(GuiDialogue, SScreen);
GuiDialogue.FRAME_STOP_TITLE = 15;
GuiDialogue.DELAY_TIME_NEXT = 1500;
GuiDialogue.SPEED_APPEAR_INFO = .0015;
GuiDialogue.prototype.onUIPress = function(a) {
    switch (a.name) {
        case "mcGuiButtonSkip":
            this.onFinishScreen()
    }
};
GuiDialogue.prototype.initDialogue = function(a) {
    this.dialogueNodes = DialogueNode.getDialogueNodes(a);
    this.clearInfo()
};
GuiDialogue.prototype.onComplete = function(a, b) {
    this.m_caller = a;
    this.m_callback = b
};
GuiDialogue.prototype.onStopScreen = function() {
    SScreen.prototype.onStopScreen.call(this);
    this.delayNext = GuiDialogue.DELAY_TIME_NEXT;
    this.dialogue = new DialogueContent(this);
    this.getControl("mcGuiDialogue").canvas.addChild(this.dialogue.clip);
    this.dialogue.next()
};
GuiDialogue.prototype.onFinishScreen = function() {
    SScreen.prototype.onFinishScreen.call(this);
    this.m_caller && this.m_callback && this.m_callback.call(this.m_caller);
    this.screenParent && (this.delayNext = 99999, this.screenParent.dropPopup());
    Global.showDialogue = !1
};
GuiDialogue.prototype.onPointerPress = function(a) {
    0 > this.delayNext && (this.delayNext = GuiDialogue.DELAY_TIME_NEXT, this.getControl("mcGuiTextTaptocontinue") && this.getControl("mcGuiTextTaptocontinue").setVisible(!1), this.dialogue.next())
};
GuiDialogue.prototype.setInfo = function(a) {
    this.clearInfo();
    this.getControl("mcGuiTextDialogue").setTextLocalized(a);
    this.getControl("mcGuiTextDialogue").textfield.alpha = 0
};
GuiDialogue.prototype.clearInfo = function() {
    this.getControl("mcGuiTextDialogue").setTextEmpty()
};
GuiDialogue.prototype.showNameLeft = function(a, b, c) {
    "" == a ? 1 < this.getControl("mcGuiNameBase_LT").clip.currentFrame && (this.getControl("mcGuiNameBase_LT").clip.gotoAndPlay(GuiDialogue.FRAME_STOP_TITLE + 1, !1), this.getControl("mcGuiTextName_LT").setTextEmpty()) : (this.getControl("mcGuiNameBase_LT").setClip(c), this.getControl("mcGuiTextName_LT").setTextLocalized(a), b ? this.getControl("mcGuiNameBase_LT").clip.gotoAndPlay(2) : this.getControl("mcGuiNameBase_LT").clip.gotoAndStop(GuiDialogue.FRAME_STOP_TITLE))
};
GuiDialogue.prototype.showNameRight = function(a, b, c) {
    "" == a ? 1 < this.getControl("mcGuiNameBase_RT").clip.currentFrame && (this.getControl("mcGuiNameBase_RT").clip.gotoAndPlay(GuiDialogue.FRAME_STOP_TITLE + 1, !1), this.getControl("mcGuiTextName_RT").setTextEmpty()) : (this.getControl("mcGuiNameBase_RT").setClip(c), this.getControl("mcGuiTextName_RT").setTextLocalized(a), b ? this.getControl("mcGuiNameBase_RT").clip.gotoAndPlay(2) : this.getControl("mcGuiNameBase_RT").clip.gotoAndStop(GuiDialogue.FRAME_STOP_TITLE))
};
GuiDialogue.prototype.update = function(a) {
    this.dialogue && this.dialogue.update(a);
    this.delayNext -= a;
    0 > this.delayNext && this.getControl("mcGuiTextTaptocontinue").setVisible(!0);
    this.getControl("mcGuiTextDialogue").textfield.alpha += GuiDialogue.SPEED_APPEAR_INFO * a;
    SScreen.prototype.update.call(this, a)
};
GuiDialogue.prototype.onPressSpaceBar = function() {
    SScreen.prototype.onPressSpaceBar.call(this);
    this.onPointerPress(null);
    this.activePressBar()
};

function WorldActor(a, b, c, d, e, f) {
    this.m_state = "";
    this.m_health = this.m_depth = this.m_oldY = this.m_oldX = this.m_y = this.m_x = 0;
    this.m_scaleY = this.m_scaleX = this.m_scale = 1;
    this.m_control = this.m_manager = this.m_vehicle = this.m_character = this.m_corners = this.m_cornersArray = this.m_clip = this.m_boundsAttack = this.m_bounds = this.m_speed = null;
    this.m_canvas = a;
    this.m_world = b;
    this.m_isAwaitingDelete = this.m_flipX = this.m_limitRight = this.m_limitLeft = this.m_limitUp = this.m_limitBottom = this.m_isVehicle = this.m_isIdle = !1;
    this.m_alwaysVisible =
        this.m_isRangeControlled = !0;
    this.m_isFallingOverWall = !1;
    this.m_id = WorldActor.ID_UNUSED;
    this.m_indexCornersArray = 0;
    this.setActorClip(f);
    this.setPosition(c, d);
    this.m_className = ""
}
WorldActor.ID_UNUSED = -1;
WorldActor.prototype.getClassName = function() {
    return this.m_className
};
WorldActor.prototype.getHealth = function() {
    return this.m_health
};
WorldActor.prototype.setHealth = function(a) {
    this.m_health = a
};
WorldActor.prototype.isAwaitingDelete = function() {
    return this.m_isAwaitingDelete
};
WorldActor.prototype.isRangeControlled = function() {
    return this.m_isRangeControlled
};
WorldActor.prototype.isAlwaysVisible = function() {
    return this.m_alwaysVisible
};
WorldActor.prototype.isFallingOverWall = function() {
    return this.m_isFallingOverWall
};
WorldActor.prototype.vehicle = function() {
    return this.m_vehicle
};
WorldActor.prototype.isVehicle = function() {
    return this.m_isVehicle
};
WorldActor.prototype.setAwaitingDelete = function(a) {
    this.m_isAwaitingDelete = a
};
WorldActor.prototype.setRangeControlled = function(a) {
    this.m_isRangeControlled = a
};
WorldActor.prototype.setAlwaysVisible = function(a) {
    this.m_alwaysVisible = a
};
WorldActor.prototype.setFallingOverWall = function(a) {
    this.m_isFallingOverWall = a
};
WorldActor.prototype.setVehicle = function(a) {
    this.m_vehicle = a
};
WorldActor.prototype.setManager = function(a) {
    this.m_manager = a
};
WorldActor.prototype.clip = function() {
    return this.m_clip
};
WorldActor.prototype.bounds = function() {
    return this.m_bounds
};
WorldActor.prototype.speed = function() {
    return this.m_speed
};
WorldActor.prototype.world = function() {
    return this.m_world
};
WorldActor.prototype.control = function() {
    return this.m_control
};
WorldActor.prototype.limitBottom = function() {
    return this.m_limitBottom
};
WorldActor.prototype.limitUp = function() {
    return this.m_limitUp
};
WorldActor.prototype.limitLeft = function() {
    return this.m_limitLeft
};
WorldActor.prototype.limitRight = function() {
    return this.m_limitRight
};
WorldActor.prototype.isIdle = function() {
    return this.m_isIdle
};
WorldActor.prototype.depth = function() {
    return this.m_depth
};
WorldActor.prototype.scale = function() {
    return this.m_scale
};
WorldActor.prototype.getX = function() {
    return this.m_x
};
WorldActor.prototype.getY = function() {
    return this.m_y
};
WorldActor.prototype.flipX = function() {
    return this.m_flipX
};
WorldActor.prototype.id = function() {
    return this.m_id
};
WorldActor.prototype.canvas = function() {
    return this.m_canvas
};
WorldActor.prototype.onEnterZone = function(a) {};
WorldActor.prototype.onLeaveZone = function(a) {};
WorldActor.prototype.setActorClip = function(a) {
    a = "undefined" === typeof a ? null : a;
    null !== a && (this.m_clip = PoolClips.instance.getClip(a), this.m_canvas.addChild(this.m_clip), this.createCorners(), this.m_clip.setPosition(this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY()))
};
WorldActor.prototype.setPositionPoint = function(a) {
    this.m_oldX = this.m_x = a.x;
    this.m_oldY = this.m_y = a.y
};
WorldActor.prototype.setPosition = function(a, b) {
    this.m_oldX = this.m_x = a;
    this.m_oldY = this.m_y = b
};
WorldActor.prototype.setX = function(a) {
    this.m_oldX = this.m_x = a
};
WorldActor.prototype.setY = function(a) {
    this.m_oldY = this.m_y = a
};
WorldActor.prototype.setFlipX = function(a) {
    this.m_flipX = a;
    if (null !== this.m_clip) {
        if (this.m_flipX && 0 < this.m_clip.scale.x || !this.m_flipX && 0 > this.m_clip.scale.x) this.m_clip.scale.x = -this.m_clip.scale.x;
        this.createCorners()
    }
};
WorldActor.prototype.setScale = function(a) {
    this.m_scale != a && (null !== this.m_clip && this.m_clip.setScale(this.m_flipX ? -a : a, a), this.m_scaleY = this.m_scaleX = this.m_scale = a, this.createCorners())
};
WorldActor.prototype.setScaleX = function(a) {
    this.m_scaleX != a && (null !== this.m_clip && (this.m_clip.scale.x = this.m_flipX ? -a : a), this.m_scaleX = a, this.createCorners())
};
WorldActor.prototype.setScaleY = function(a) {
    this.m_scaleY != a && (null !== this.m_clip && (this.m_clip.scale.y = a), this.m_scaleY = a, this.createCorners())
};
WorldActor.prototype.setScaleXY = function(a, b) {
    this.setScaleX(a);
    this.setScaleY(b)
};
WorldActor.prototype.resize = function(a, b) {
    null !== this.m_clip && this.setScaleXY(a / this.m_clip.width, b / this.m_clip.height)
};
WorldActor.prototype.getBounds = function() {
    return null !== this.m_bounds ? new Rectangle(this.m_x + this.m_bounds.x, this.m_y + this.m_bounds.y, this.m_bounds.w, this.m_bounds.h) : null
};
WorldActor.prototype.boundsAttack = function() {
    return this.m_boundsAttack
};
WorldActor.prototype.getBoundsAttack = function() {
    return null !== this.m_boundsAttack ? new Rectangle(this.m_x + (this.m_flipX ? -(this.m_boundsAttack.x + this.m_boundsAttack.w) : this.m_boundsAttack.x), this.m_y + this.m_boundsAttack.y, this.m_boundsAttack.w, this.m_boundsAttack.h) : null
};
WorldActor.prototype.createCorners = function() {
    this.updateBounds();
    this.m_cornersArray = null;
    var a;
    if (null !== this.m_bounds) {
        a = new Rectangle;
        a.x = this.m_bounds.x;
        a.y = this.m_bounds.y;
        a.w = this.m_bounds.w;
        a.h = this.m_bounds.h;
        this.m_corners = [];
        var b = this.m_scaleX,
            c = this.m_scaleY;
        this.m_scaleX == this.m_scaleY && (this.m_scale = this.m_scaleX);
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + a.h), 1, 1));
        Math.abs(b * a.w) > this.m_world.tileWidth() ? this.m_corners.push(new CollisionPoint(b * (a.x + .5 * a.w), c * (a.y +
            a.h), 0, 1)) : this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + a.h), -1, 1));
        c * a.h > 3 * this.m_world.tileHeight() ? (this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .75 * a.h), 1, 0)), this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + .75 * a.h), -1, 0)), this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .5 * a.h), 1, 0)), this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + .5 * a.h), -1, 0)), this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .25 * a.h), 1, 0)), this.m_corners.push(new CollisionPoint(b *
            a.x, c * (a.y + .25 * a.h), -1, 0))) : c * a.h > 2 * this.m_world.tileHeight() ? (this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .67 * a.h), this.m_flipX ? -1 : 1, 0)), this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + .67 * a.h), -1, 0)), this.m_corners.push(null), this.m_corners.push(null), this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .33 * a.h), this.m_flipX ? -1 : 1, 0)), this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + .33 * a.h), -1, 0))) : (c * a.h > this.m_world.tileHeight() ? (this.m_corners.push(null), this.m_corners.push(null),
            this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .5 * a.h), 1, 0)), this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + .5 * a.h), -1, 0))) : (this.m_corners.push(null), this.m_corners.push(null), this.m_corners.push(null), this.m_corners.push(null)), this.m_corners.push(null), this.m_corners.push(null));
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * a.y, 1, -1));
        Math.abs(b * a.w) > this.m_world.tileWidth() ? this.m_corners.push(new CollisionPoint(b * (a.x + .5 * a.w), c * a.y, 0, -1)) : this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b *
            a.x, c * a.y, -1, -1));
        this.m_cornersArray = [];
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        a = [];
        a.push([0, 1, 3, 2, 5, 7, 9]);
        a.push([2, 1, 4, 0, 6, 8, 11]);
        a.push([9, 10, 7, 11, 5, 3, 0]);
        a.push([11, 10, 8, 9, 6, 4, 2]);
        for (b = 0; b < this.m_cornersArray.length; b++)
            for (c = 0; c < a[b].length; c++) null != this.m_corners[a[b][c]] && this.m_cornersArray[b].push(this.m_corners[a[b][c]])
    }
};
WorldActor.prototype.updateBounds = function() {
    this.m_bounds = null;
    null !== this.m_clip && (this.m_bounds = this.m_clip.getCollision("mcCollision")) && (this.m_bounds.x *= this.m_scaleX, this.m_bounds.y *= this.m_scaleY, this.m_bounds.w *= this.m_scaleX, this.m_bounds.h *= this.m_scaleY)
};
WorldActor.prototype.updateBoundsAttack = function() {
    this.m_boundsAttack = null;
    null !== this.m_clip && (this.m_boundsAttack = this.m_clip.getCollision("mcCollisionAttack")) && (this.m_boundsAttack.x *= this.m_scaleX, this.m_boundsAttack.y *= this.m_scaleY, this.m_boundsAttack.w *= this.m_scaleX, this.m_boundsAttack.h *= this.m_scaleY)
};
WorldActor.prototype.isOverPlatform = function() {
    var a;
    a = this.m_bounds;
    if (this.m_vehicle) return !0;
    if (null !== a) {
        var b = this.m_x + a.x,
            c = this.m_y + 3;
        if (this.m_world.getCellInPosition(b + a.w, c) == WorldCollisionLayer.CELL_PLATFORM || this.m_world.getCellInPosition(this.m_x, c) == WorldCollisionLayer.CELL_PLATFORM || this.m_world.getCellInPosition(b, c) == WorldCollisionLayer.CELL_PLATFORM) return !0
    }
    return !1
};
WorldActor.prototype.gotoState = function(a, b) {
    a !== this.m_state && (this.characterGotoState(a, b), this.m_state = a, this.createCorners())
};
WorldActor.prototype.characterGotoState = function(a, b) {
    null !== this.m_character && (this.m_character.gotoState(a, b), this.m_clip = this.m_character.clip, this.m_clip.scale.x = this.m_flipX ? -this.m_scaleX : this.m_scaleX, this.m_clip.scale.y = this.m_scaleY, this.m_clip.setPosition(this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY()))
};
WorldActor.prototype.corners = function(a) {
    if (null === this.m_cornersArray) return null;
    this.m_indexCornersArray = 0 > this.m_speed.y ? 0 <= this.m_speed.x ? 2 : 3 : 0 > this.m_speed.x ? 1 : 0;
    a && (this.m_indexCornersArray = 0 == this.m_indexCornersArray ? 1 : 0);
    return this.m_cornersArray[this.m_indexCornersArray]
};
WorldActor.prototype.onHit = function(a, b) {
    return !1
};
WorldActor.prototype.update = function(a) {
    null !== this.m_character ? this.m_character.setPosition(this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY()) : null !== this.m_clip && this.m_clip.setPosition(this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY())
};
WorldActor.prototype.isInCamera = function(a) {
    return this.m_x + this.m_bounds.w > a.getX() && this.m_x + this.m_bounds.x < a.getX() + a.width() && this.m_y + this.m_bounds.h > a.getY() && this.m_y + this.m_bounds.y < a.getY() + a.height()
};
WorldActor.prototype.showInCamera = function(a) {
    this.m_character.setPosition(this.m_x - a.getX(), this.m_y - a.getY())
};
WorldActor.prototype.checkCollision = function() {
    return this.m_world.checkCollision(this)
};
WorldActor.prototype.applyImpulse = function(a, b) {
    this.m_oldX = this.m_x - a;
    this.m_oldY = this.m_y - b
};
WorldActor.prototype.hitTest = function(a) {
    var b = this.getBounds();
    if (null === b) return !1;
    a = a.getBounds();
    return null === a ? !1 : b.intersectRect(a)
};
WorldActor.prototype.hitTestAttack = function(a) {
    var b = this.getBoundsAttack();
    if (null === b) return !1;
    a = a.getBounds();
    return null === a ? !1 : b.intersectRect(a)
};
WorldActor.prototype.hitIntersection = function(a) {
    if (null !== this.m_bounds) {
        var b = new Rectangle(this.m_bounds.x, this.m_bounds.y, this.m_bounds.w, this.m_bounds.h);
        b.x += this.m_x;
        b.y += this.m_y;
        a = a.getBounds();
        if (null !== a) return b.intersectRect(a)
    }
    return null
};
WorldActor.prototype.integrateVerlet = function(a) {
    var b = this.m_oldX,
        c = this.m_oldY;
    this.m_oldX = this.m_x;
    this.m_oldY = this.m_y;
    b = this.m_x - b;
    b < -this.m_control.maxVerletHorizontalDisplace ? b = -this.m_control.maxVerletHorizontalDisplace : b > this.m_control.maxVerletHorizontalDisplace && (b = this.m_control.maxVerletHorizontalDisplace);
    this.m_x += b;
    a = this.m_y - c + this.m_control.gravity * a * a;
    a < -this.m_control.maxVerletUpDisplace ? a = -this.m_control.maxVerletUpDisplace : a > this.m_control.maxVerletDownDisplace && (a = this.m_control.maxVerletDownDisplace);
    this.m_y += a
};
WorldActor.prototype.onDebugDraw = function(a) {
    null !== this.m_boundsAttack && ContextGraphics.drawRectangle(a, this.m_x - this.m_world.camera().getX() + this.m_boundsAttack.x, this.m_y - this.m_world.camera().getY() + this.m_boundsAttack.y, this.m_boundsAttack.w, this.m_boundsAttack.h, 1, Common.COLOR_BLUE, Common.COLOR_NONE);
    if (this.m_corners)
        for (var b = 0; b < this.m_cornersArray[this.m_indexCornersArray].length; b++) this.m_cornersArray[this.m_indexCornersArray][b] && ContextGraphics.drawCircle(a, this.m_x - this.m_world.camera().getX() + this.m_cornersArray[this.m_indexCornersArray][b].position.x,
            this.m_y - this.m_world.camera().getY() + this.m_cornersArray[this.m_indexCornersArray][b].position.y, 3, Common.COLOR_MAGENTA, Common.COLOR_MAGENTA)
};
WorldActor.prototype.onIdle = function(a) {
    this.m_isIdle = a;
    null !== this.m_clip && (this.m_clip.visible = !a)
};
WorldActor.prototype.free = function() {
    null !== this.m_character && (this.m_character.free(), this.m_clip = this.m_character = null);
    null !== this.m_clip && (PoolClips.instance.releaseClip(this.m_clip), this.m_clip = null);
    this.m_speed = this.m_world = this.m_canvas = this.m_bounds = null;
    if (null !== this.m_cornersArray)
        for (var a = 0; a < this.m_cornersArray.length; a++) this.m_cornersArray[a] = null;
    this.m_control = this.m_manager = this.m_vehicle = this.m_cornersArray = null
};

function SimpleWorldActor(a, b, c, d, e, f) {
    "undefined" === typeof e && (e = -1);
    this.m_y = this.m_x = this.m_state = 0;
    this.m_scale = 1;
    this.m_character = this.m_clip = this.m_bounds = null;
    this.m_canvas = a;
    this.m_world = b;
    this.m_isAwaitingDelete = this.m_isIdle = !1;
    this.m_id = e || WorldActor.ID_UNUSED;
    this.setActorClip(f);
    this.setPosition(c, d);
    this.m_className = "";
    this.m_manager = null;
    this.m_alwaysVisible = this.m_isRangeControlled = !0
}
SimpleWorldActor.prototype.getClassName = function() {
    return this.m_className
};
SimpleWorldActor.prototype.isAwaitingDelete = function() {
    return this.m_isAwaitingDelete
};
SimpleWorldActor.prototype.isRangeControlled = function() {
    return this.m_isRangeControlled
};
SimpleWorldActor.prototype.isAlwaysVisible = function() {
    return this.m_alwaysVisible
};
SimpleWorldActor.prototype.setAwaitingDelete = function(a) {
    this.m_isAwaitingDelete = a
};
SimpleWorldActor.prototype.setRangeControlled = function(a) {
    this.m_isRangeControlled = a
};
SimpleWorldActor.prototype.setAlwaysVisible = function(a) {
    this.m_alwaysVisible = a
};
SimpleWorldActor.prototype.clip = function() {
    return this.m_clip
};
SimpleWorldActor.prototype.bounds = function() {
    return this.m_bounds
};
SimpleWorldActor.prototype.world = function() {
    return this.m_world
};
SimpleWorldActor.prototype.isIdle = function() {
    return this.m_isIdle
};
SimpleWorldActor.prototype.scale = function() {
    return this.m_scale
};
SimpleWorldActor.prototype.getX = function() {
    return this.m_x
};
SimpleWorldActor.prototype.getY = function() {
    return this.m_y
};
SimpleWorldActor.prototype.id = function() {
    return this.m_id
};
SimpleWorldActor.prototype.canvas = function() {
    return this.m_canvas
};
SimpleWorldActor.prototype.setActorClip = function(a) {
    a = "undefined" === typeof a ? null : a;
    null !== a && (this.m_clip = PoolClips.instance.getClip(a), this.m_clip.setPosition(this.m_x - this.m_world.m_camera.m_x, this.m_y - this.m_world.m_camera.m_y), this.m_canvas.addChild(this.m_clip), this.updateBounds())
};
SimpleWorldActor.prototype.setPositionPoint = function(a) {
    this.m_x = a.x;
    this.m_y = a.y
};
SimpleWorldActor.prototype.setPosition = function(a, b) {
    this.m_x = a;
    this.m_y = b
};
SimpleWorldActor.prototype.setX = function(a) {
    this.m_x = a
};
SimpleWorldActor.prototype.setY = function(a) {
    this.m_y = a
};
SimpleWorldActor.prototype.setScale = function(a) {
    this.m_scale != a && (null !== this.m_clip && (this.m_clip.scale.x = this.m_scale, this.m_clip.scale.y = this.m_scale), this.m_scale = a)
};
SimpleWorldActor.prototype.getBounds = function() {
    return null !== this.m_bounds ? new Rectangle(this.m_x + this.m_bounds.x, this.m_y + this.m_bounds.y, this.m_bounds.w, this.m_bounds.h) : null
};
SimpleWorldActor.prototype.updateBounds = function() {
    this.m_bounds = null;
    null !== this.m_clip && (this.m_bounds = this.m_clip.getCollision("mcCollision")) && (this.m_bounds.x *= this.m_scale, this.m_bounds.y *= this.m_scale, this.m_bounds.w *= this.m_scale, this.m_bounds.h *= this.m_scale)
};
SimpleWorldActor.prototype.gotoState = function(a, b) {
    a != this.m_state && (this.characterGotoState(a, b), this.m_state = a, this.updateBounds())
};
SimpleWorldActor.prototype.characterGotoState = function(a, b) {
    null !== this.m_character && (this.m_character.gotoState(a, b), this.m_clip = this.m_character.clip, this.m_clip.scale.x = this.m_scale, this.m_clip.scale.y = this.m_scale, this.m_clip.setPosition(this.m_x - this.m_world.m_camera.m_x, this.m_y - this.m_world.m_camera.m_y))
};
SimpleWorldActor.prototype.onHit = function(a, b) {
    return !1
};
SimpleWorldActor.prototype.update = function(a) {
    null !== this.m_character ? this.m_character.setPosition(this.m_x - this.m_world.m_camera.m_x, this.m_y - this.m_world.m_camera.m_y) : null !== this.m_clip && (this.m_clip.position.x = this.m_x - this.m_world.m_camera.m_x, this.m_clip.position.y = this.m_y - this.m_world.m_camera.m_y)
};
SimpleWorldActor.prototype.hitTest = function(a) {
    var b = this.getBounds();
    if (null === b) return !1;
    a = a.getBounds();
    return null === a ? !1 : b.intersectRect(a)
};
SimpleWorldActor.prototype.onIdle = function(a) {
    this.m_isIdle = a;
    null !== this.m_clip && (this.m_clip.visible = !a)
};
SimpleWorldActor.prototype.free = function() {
    null !== this.m_character && (this.m_character.free(), this.m_clip = this.m_character = null);
    null !== this.m_clip && (PoolClips.instance.releaseClip(this.m_clip), this.m_clip = null);
    this.m_manager = this.m_world = this.m_canvas = this.m_bounds = null
};

function ActorControl(a) {
    this.maxSpeedAir = this.maxSpeedFloor = this.canClimb = this.canRun = this.runFactor = this.walkSpeed = this.airSpeed = this.maxVerletHorizontalDisplace = this.maxVerletDownDisplace = this.maxVerletUpDisplace = this.slopeFriction = this.friction = this.elasticity = this.gravity = 0;
    this.m_actor = a;
    this.m_forceY = this.m_forceX = 0;
    this.m_isInDashAttack = this.m_isInAction = this.m_isJumpingDown = this.m_isJumpingUp = this.m_isJumping = this.m_isRunning = !1;
    this.reset()
}
ActorControl.prototype.forceX = function() {
    return this.m_forceX
};
ActorControl.prototype.forceY = function() {
    return this.m_forceY
};
ActorControl.prototype.isRunning = function() {
    return this.m_isRunning
};
ActorControl.prototype.isJumping = function() {
    return this.m_isJumping
};
ActorControl.prototype.isJumpingUp = function() {
    return this.m_isJumpingUp
};
ActorControl.prototype.isJumpingDown = function() {
    return this.m_isJumpingDown
};
ActorControl.prototype.isInAction = function() {
    return this.m_isInAction
};
ActorControl.prototype.isInDashAttack = function() {
    return this.m_isInDashAttack
};
ActorControl.prototype.reset = function() {
    this.m_forceY = this.m_forceX = 0;
    this.m_isInAction = this.m_isRunning = this.m_isJumpingDown = this.m_isJumpingUp = this.m_isJumping = !1
};
ActorControl.prototype.loadData = function(a) {
    this.setDefaultData(a)
};
ActorControl.prototype.setDefaultData = function(a) {
    this.setData(a)
};
ActorControl.prototype.setData = function(a) {
    this.gravity = this.getData(a, "gravity");
    this.elasticity = this.getData(a, "elasticity");
    this.friction = this.getData(a, "friction");
    this.slopeFriction = this.getData(a, "slopeFriction");
    this.maxVerletUpDisplace = this.getData(a, "maxVerletUpDisplace");
    this.maxVerletDownDisplace = this.getData(a, "maxVerletDownDisplace");
    this.maxVerletHorizontalDisplace = this.getData(a, "maxVerletHorizontalDisplace")
};
ActorControl.prototype.getData = function(a, b) {
    if (null === a) Application.error("World:: data is null");
    else if (null === b) Application.error("World:: data is null: " + b);
    else {
        if (null !== a[b]) return a[b];
        Application.error("Property not found: " + b)
    }
};
ActorControl.prototype.getOptionalData = function(a, b, c) {
    if ("undefined" === a) Application.error("World:: data is null");
    else if ("undefined" === b) Application.error("World:: data is null: " + b);
    else {
        if (null != a[b]) return a[b];
        Application.error("Optional property not found: " + b + " using: " + c);
        return c
    }
};
ActorControl.prototype.update = function(a) {};
ActorControl.prototype.onCollison = function(a, b) {};
ActorControl.prototype.free = function() {
    this.m_actor = null
};

function Camera(a, b, c, d, e, f, g) {
    d = "undefined" !== typeof d ? d : 0;
    e = "undefined" !== typeof e ? e : 0;
    this.m_x = "undefined" !== typeof f ? f : 0;
    this.m_y = "undefined" !== typeof g ? g : 0;
    this.m_world = a;
    this.m_fixedX = this.m_world.cameraXMin == this.m_world.cameraXMax;
    this.m_fixedY = this.m_world.cameraYMax == this.m_world.cameraYMin;
    this.m_scale = 1;
    this.m_speed = Camera.DEFAULT_SPEED;
    this.m_velocity = new Vector2D(0, 0);
    this.m_steering = new Vector2D(0, 0);
    this.m_width = b;
    this.m_height = c;
    this.screenX = d;
    this.screenY = e;
    this.leftLimit = Math.round(this.m_world.cameraXMin *
        this.m_width);
    this.rightLimit = Math.round(this.m_world.cameraXMax * this.m_width);
    this.upLimit = Math.round(this.m_world.cameraYMin * this.m_height);
    this.downLimit = Math.round(this.m_world.cameraYMax * this.m_height);
    this.parallaxX = this.m_world.width() > this.m_width;
    this.parallaxY = this.m_world.height() > this.m_height;
    this.m_force = Camera.DEFAULT_FORCE
}
Camera.FREE_MOVEMENT_SPEED = 2;
Camera.DEFAULT_SPEED = .7;
Camera.ARRIVING_RADIUS = 170;
Camera.DEFAULT_FORCE = .02;
Camera.prototype.getX = function() {
    return this.m_x
};
Camera.prototype.getY = function() {
    return this.m_y
};
Camera.prototype.setX = function(a) {
    this.m_x = a
};
Camera.prototype.setY = function(a) {
    this.m_y = a
};
Camera.prototype.scale = function() {
    return this.m_scale
};
Camera.prototype.width = function() {
    return this.m_width
};
Camera.prototype.height = function() {
    return this.m_height
};
Camera.prototype.setWidth = function(a) {
    this.m_width = a
};
Camera.prototype.setHeight = function(a) {
    this.m_height = a
};
Camera.prototype.setSpeed = function(a) {
    this.m_speed = a;
    this.m_force = this.m_speed > Camera.DEFAULT_SPEED ? .5 : Camera.DEFAULT_FORCE
};
Camera.prototype.setDefaultSpeed = function() {
    this.setSpeed(Camera.DEFAULT_SPEED)
};
Camera.prototype.setFreeMovementSpeed = function(a) {
    this.m_speed = a ? 2 : Camera.DEFAULT_SPEED;
    this.m_force = this.m_speed > Camera.DEFAULT_SPEED ? .5 : Camera.DEFAULT_FORCE
};
Camera.prototype.setCallback = function(a, b) {
    this.callerCallback = a;
    this.functionCallback = b
};
Camera.prototype.lookAtPlayer = function() {
    this.m_x = this.m_world.player().getX() - this.leftLimit;
    this.m_y = this.m_world.player().getY() - this.downLimit;
    this.m_velocity.set(0, 0);
    this.m_steering.set(0, 0)
};
Camera.prototype.update = function(a) {
    this.m_steering.set(0, 0);
    if (this.m_fixedX) this.m_x = this.m_world.player().getX() - this.leftLimit;
    else {
        var b = 0;
        this.m_x + this.leftLimit > this.m_world.player().getX() ? (b = this.m_x + this.leftLimit - this.m_world.player().getX(), this.m_steering.x = this.m_world.player().getX() - (this.m_x + this.leftLimit)) : this.m_x + this.rightLimit < this.m_world.player().getX() && (b = this.m_world.player().getX() - this.m_x - this.rightLimit, this.m_steering.x = this.m_world.player().getX() - (this.m_x + this.rightLimit));
        b = b > Camera.ARRIVING_RADIUS ? Camera.ARRIVING_RADIUS : b
    }
    if (this.m_fixedY) this.m_y = this.m_world.player().getY() - this.upLimit;
    else {
        var c = 0;
        this.m_world.player().isJumping() ? this.m_y + this.upLimit > this.m_world.player().getY() ? (c = this.m_y + this.upLimit - this.m_world.player().getY(), this.m_steering.y = this.m_world.player().getY() - (this.m_y + this.upLimit)) : this.m_y + this.downLimit < this.m_world.player().getY() && (c = this.m_world.player().getY() - this.m_y - this.downLimit, this.m_steering.y = this.m_world.player().getY() -
            (this.m_y + this.downLimit)) : (c = this.m_world.player().getY() - this.m_y - this.downLimit, this.m_steering.y = this.m_world.player().getY() - (this.m_y + this.downLimit));
        c = c > Camera.ARRIVING_RADIUS ? Camera.ARRIVING_RADIUS : c
    }
    var d = this.m_steering.length();
    this.m_steering.stretch(Math.max(this.m_world.player().speed().length(), this.m_speed));
    d < Camera.ARRIVING_RADIUS && this.m_steering.scale(d / Camera.ARRIVING_RADIUS);
    this.m_steering.subtract(this.m_velocity);
    d = this.m_world.player().isJumping() ? 1 : this.m_force;
    this.m_steering.truncate(d);
    this.m_velocity.add(this.m_steering);
    this.m_velocity.truncate(Math.max(this.m_world.player().speed().length(), this.m_speed));
    this.m_x += this.m_velocity.x * a;
    this.m_y += this.m_velocity.y * a;
    0 > this.m_x ? this.m_x = 0 : this.m_x > this.m_world.width() - this.width() && (this.m_x = Math.max(this.m_world.width() - this.width(), 0));
    0 > this.m_y ? this.m_y = 0 : this.m_y > this.m_world.height() - this.height() && (this.m_y = this.m_world.height() - this.height());
    (5 > b || 0 == this.m_x) && (5 > c || 0 == this.m_y) && this.callerCallback && this.functionCallback &&
        this.functionCallback.call(this.callerCallback)
};
Camera.prototype.setScale = function(a) {
    this.m_scale = a;
    this.m_world.setScale(a)
};
Camera.prototype.onDebugDraw = function(a) {
    ContextGraphics.drawRectangle(a, 0, 0, this.m_width, this.m_height, 2, Common.COLOR_RED, Common.COLOR_NONE);
    ContextGraphics.drawRectangle(a, this.leftLimit, this.upLimit, this.rightLimit - this.leftLimit, this.downLimit - this.upLimit, 2, Common.COLOR_WHITE, Common.COLOR_NONE)
};
Camera.prototype.free = function() {
    this.m_world = null
};

function CollisionPoint(a, b, c, d) {
    this.position = new Vector2D(a, b);
    this.normal = new Vector2D(c, d)
}
CollisionPoint.prototype.toString = function() {
    return "\n[COLL] " + this.position + " " + this.normal
};

function MobileObject(a, b, c, d, e) {
    WorldActor.call(this, a, b, c, d);
    this.m_data = e;
    this.m_speed = new Vector2D;
    this.m_prevX = this.m_x;
    this.m_prevY = this.m_y;
    this.m_motionController = null;
    this.init()
}
Application.subclass(MobileObject, WorldActor);
MobileObject.prototype.init = function() {
    this.m_motionController = new MotionController(this.m_x, this.m_y, new DataMovement(this.m_data.params, this.m_data.movement));
    this.m_motionController.startMotion()
};
MobileObject.prototype.update = function(a) {
    this.m_motionController.update(a);
    this.m_prevX = this.m_x;
    this.m_prevY = this.m_y;
    this.m_x = this.m_motionController.getX();
    this.m_y = this.m_motionController.getY();
    this.m_speed.x = (this.m_x - this.m_prevX) / a;
    this.m_speed.y = (this.m_y - this.m_prevY) / a;
    WorldActor.prototype.update.call(this, a)
};
MobileObject.prototype.free = function() {
    this.m_motionController.free();
    this.m_speed = this.m_motionController = null;
    WorldActor.prototype.free.call(this)
};

function MobilePlatform(a, b, c, d, e) {
    this.m_boundsProximity = null;
    this.m_skin = "";
    MobileObject.call(this, a, b, c, d, e);
    this.m_isPlayerOver = !1;
    this.m_isVehicle = !0;
    this.setRangeControlled(!0)
}
Application.subclass(MobilePlatform, MobileObject);
MobilePlatform.ST_APPEAR = "st100";
MobilePlatform.ST_DISAPPEAR = "st101";
MobilePlatform.ST_VISIBLE = "st102";
MobilePlatform.ST_INVISIBLE = "st103";
MobilePlatform.STOP_OFFSET = 95;
MobilePlatform.prototype.createCorners = function() {
    this.updateBounds()
};
MobilePlatform.prototype.init = function() {
    this.m_motionController = new MotionController(this.m_x, this.m_y, new DataMovement(this.m_data.params, this.m_data.movement));
    this.m_skin = "";
    switch (Global.map) {
        case 1:
        case 2:
            this.m_skin = this.m_motionController.hasMotion() ? "mcPlatformMobile_4_pause" : "mcPlatformStatic_4";
            break;
        case 3:
        case 4:
            this.m_skin = this.m_motionController.hasMotion() ? "mcPlatformMobile_2_pause" : "mcPlatformStatic_2";
            break;
        case 5:
        case 6:
            this.m_skin = this.m_motionController.hasMotion() ? "mcPlatformMobile_1_pause" :
                "mcPlatformStatic_1";
            break;
        case 7:
        case 8:
            this.m_skin = this.m_motionController.hasMotion() ? "mcPlatformMobile_3_pause" : "mcPlatformStatic_3"
    }
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.addState(MobilePlatform.ST_APPEAR, "mcPlatforminvisible_appear");
    this.m_character.addState(MobilePlatform.ST_DISAPPEAR, "mcPlatforminvisible_disappear");
    this.m_character.addState(MobilePlatform.ST_VISIBLE, this.m_skin);
    this.m_character.addState(MobilePlatform.ST_INVISIBLE, "mcPlatforminvisible_off_stand");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    switch (this.m_data.appearType) {
        case 0:
            this.gotoState(MobilePlatform.ST_VISIBLE);
            this.m_world.addMobilePlatform(this);
            break;
        case 1:
            this.m_character.addState(MobilePlatform.ST_VISIBLE, "mcPlatforminvisible_on_stand"), this.gotoState(MobilePlatform.ST_INVISIBLE), Global.playerSelected !== Global.PLAYER_MAL && (this.m_isAwaitingDelete = !0)
    }
    switch (this.m_data.moveStartType) {
        case 0:
            this.m_motionController.startMotion(this, this.onEndMovement, null)
    }
};
MobilePlatform.prototype.checkProximity = function() {
    if (this.m_state === MobilePlatform.ST_INVISIBLE && Global.playerSelected === Global.PLAYER_MAL && null !== this.m_boundsProximity) {
        var a = new Rectangle(this.m_x + this.m_boundsProximity.x, this.m_y + this.m_boundsProximity.y, this.m_boundsProximity.w, this.m_boundsProximity.h),
            b = this.m_world.player().getBounds();
        null !== b && a.intersectRect(b) && (this.gotoState(MobilePlatform.ST_APPEAR), this.m_world.createEffect("aniFxPlayerMalSkill", this.m_x, this.m_y))
    }
};
MobilePlatform.prototype.gotoState = function(a, b) {
    MobileObject.prototype.gotoState.call(this, a, b);
    switch (a) {
        case MobilePlatform.ST_APPEAR:
            this.m_world.addMobilePlatform(this);
            break;
        case MobilePlatform.ST_DISAPPEAR:
            this.m_world.removeMobilePlatform(this);
            break;
        case MobilePlatform.ST_INVISIBLE:
            this.m_boundsProximity = this.m_clip.getCollision("mcProximity")
    }
};
MobilePlatform.prototype.free = function() {
    this.m_world.removeMobilePlatform(this);
    MobileObject.prototype.free.call(this)
};
MobilePlatform.prototype.onEndAnimation = function(a) {
    switch (a) {
        case MobilePlatform.ST_APPEAR:
            this.gotoState(MobilePlatform.ST_VISIBLE, !1);
            break;
        case MobilePlatform.ST_DISAPPEAR:
            this.m_isAwaitingDelete = !0
    }
};
MobilePlatform.prototype.onEndMovement = function() {
    switch (this.m_data.disappearType) {
        case 1:
            this.gotoState(MobilePlatform.ST_DISAPPEAR, !1)
    }
};
MobilePlatform.prototype.onSteppedOff = function() {
    this.m_isPlayerOver = !1
};
MobilePlatform.prototype.onSteppedOn = function() {
    switch (this.m_data.moveStartType) {
        case 1:
            this.m_motionController.startMotion(this, this.onEndMovement, null)
    }
    this.m_motionController.isStarted() && !this.m_world.player().flipX() && this.m_world.player().getX() < this.m_x + MobilePlatform.STOP_OFFSET - 15 && (Application.log("MobilePlatform.onSteppedOn >> enabledControls:false "), this.m_world.game().enabledControls = !1);
    this.m_isPlayerOver = !0
};
MobilePlatform.prototype.update = function(a) {
    MobileObject.prototype.update.call(this, a);
    this.m_character.update(a);
    this.checkProximity();
    this.m_isPlayerOver && this.m_motionController.isStarted() && !this.m_world.game().enabledControls && this.m_world.player().getX() >= this.m_x + MobilePlatform.STOP_OFFSET && (this.m_world.player().stop(), Application.log("MobilePlatform.update >> enabledControls:false "), this.m_world.game().enabledControls = !0)
};

function Npc() {
    this.y = this.x = this.id = 0;
    this.canvas = null;
    this.params = ""
}
Npc.prototype.free = function() {
    this.canvas = null
};

function NpcManager(a) {
    this.m_world = a;
    this.m_height = this.m_width = 0;
    this.m_showCollisions = !1;
    this.m_buffer = [];
    this.m_actors = [];
    this.m_player = null;
    this.visibleWidth = 1650;
    this.visibleHeight = 1E3;
    this.m_updateableObject = this.allNpc = null
}
NpcManager.prototype.free = function() {
    var a;
    for (a = 0; a < this.m_buffer.length; a++) this.m_buffer[a].free();
    this.m_buffer = null;
    for (a = 0; a < this.m_actors.length; a++) this.m_actors[a].free(), this.m_actors[a] = null;
    this.m_world = this.m_actors = null
};
NpcManager.prototype.collisionsOn = function() {
    return this.m_showCollisions
};
NpcManager.prototype.actors = function() {
    return this.m_actors
};
NpcManager.prototype.init = function(a) {};
NpcManager.prototype.showCollision = function(a) {
    this.m_showCollisions = a
};
NpcManager.prototype.addNpc = function(a) {
    this.m_buffer.push(a)
};
NpcManager.prototype.add = function(a) {
    a.m_manager = this;
    this.m_actors.push(a)
};
NpcManager.prototype.setUpdateableObject = function(a) {
    this.m_updateableObject = a
};
NpcManager.prototype.getUpdateableObject = function() {
    return this.m_updateableObject
};
NpcManager.prototype.onDebugDraw = function(a) {
    for (var b = 0; b < this.m_actors.length; b++)
        if (this.m_actors[b].onDebugDraw) this.m_actors[b].onDebugDraw(a)
};
NpcManager.prototype.saveData = function(a) {
    null !== this.m_player && this.m_player.saveData();
    for (a = this.m_actors.length - 1; 0 <= a; a--) this.m_actors[a] && this.m_actors[a].saveData()
};
NpcManager.prototype.update = function(a) {
    for (var b, c = 0; c < this.m_actors.length; c++)
        if (this.m_actors[c].isAwaitingDelete() || this.m_actors[c].m_x < CheckPoint.lastPointSafe.x - 600) this.m_actors[c].free(), this.m_actors[c] = null, this.m_actors.splice(c--, 1);
        else if (b = this.m_actors[c].getX() - this.m_world.camera().getX(), this.m_actors[c].isRangeControlled() && (b > this.visibleWidth || -256 > b)) {
        if (!this.m_actors[c].isIdle()) this.m_actors[c].onIdle(!0)
    } else {
        if (this.m_actors[c].isIdle()) this.m_actors[c].onIdle(!1);
        this.m_actors[c].update(a)
    }
};
NpcManager.prototype.getActorByUniqueID = function(a) {
    for (var b = 0; b < this.m_actors.length; ++b)
        if (this.m_actors[b].uniqueId == a) return this.m_actors[b];
    return null
};
NpcManager.prototype.reset = function() {
    for (var a = 0; a < this.m_actors.length; a++) this.m_actors[a].free(), this.m_actors[a] = null;
    this.m_actors = []
};

function Player(a, b, c, d) {
    WorldActor.call(this, a, b, c, d);
    this.m_collision = null;
    this.m_freeMovement = !1;
    this.m_factorSpeedY = this.m_factorSpeedX = 1;
    this.m_debugCollisionOn = this.m_isDead = this.m_isInvulnerable = !1;
    this.m_climbCorners = null;
    this.m_speed = new Vector2D(0, 0);
    this.m_state = "";
    this.timeSpeedElapse = 0;
    this.speedInit = Global.SPEED_INIT;
    this.maxSpeed = this.baseSpeed = Application.config.player.walkSpeed;
    this.rushSpeed = Application.config.player.rushSpeed;
    this.enableRushMode = !1
}
Application.subclass(Player, WorldActor);
Player.MAX_DT = 35;
Player.dtFix = 0;
Player.FACTOR_WALL_ALONE = 1;
Player.MAX_LIMIT_SPEED_IMPULSE = 20;
Player.ST_PLAYER_STAND = "st100";
Player.ST_PLAYER_STAND_2 = "st101";
Player.ST_PLAYER_WALK = "st102";
Player.ST_PLAYER_RUN = "st103";
Player.ST_PLAYER_JUMP_UP = "st104";
Player.ST_PLAYER_JUMP_DOWN = "st105";
Player.ST_PLAYER_HIT = "st106";
Player.ST_PLAYER_LOSE = "st107";
Player.ST_PLAYER_WIN = "st108";
Player.ST_PLAYER_LAND = "st109";
Player.ST_PLAYER_WALL = "st111";
Player.prototype.onResetSpeed = function(a) {
    this.enableRushMode || (this.timeSpeedElapse = 0, this.m_speed.x = 0, this.speedInit = a || Global.SPEED_INIT)
};
Player.prototype.collision = function() {
    return this.m_collision
};
Player.prototype.isInvulnerable = function() {
    return this.m_isInvulnerable
};
Player.prototype.isDead = function() {
    return this.m_isDead
};
Player.prototype.setIsDead = function(a) {
    this.m_isDead = a
};
Player.prototype.state = function() {
    return this.m_state
};
Player.prototype.character = function() {
    return this.m_character
};
Player.prototype.factorSpeedX = function() {
    return this.m_factorSpeedX
};
Player.prototype.setFactorSpeedX = function(a) {
    this.m_factorSpeedX = a
};
Player.prototype.factorSpeedY = function() {
    return this.m_factorSpeedY
};
Player.prototype.setFactorSpeedY = function(a) {
    this.m_factorSpeedY = a
};
Player.prototype.setVehicle = function(a) {
    if (this.m_vehicle !== a) {
        if (null !== this.m_vehicle) this.m_vehicle.onSteppedOff();
        if (null !== a) a.onSteppedOn();
        this.m_vehicle = a
    }
};
Player.prototype.gotoState = function(a, b) {
    if (a !== this.m_state && !this.m_isDead) {
        this.characterGotoState(a, b);
        switch (a) {
            case Player.ST_PLAYER_LAND:
                this.onFloor();
                break;
            case Player.ST_PLAYER_LOSE:
                this.m_isDead = !0
        }
        if (this.m_control.isInAction()) this.m_control.onAction(!1);
        this.m_clip = this.m_character.clip;
        this.m_scaleX == this.m_scaleY ? (this.m_clip.scale.x = this.m_flipX ? -this.m_scale : this.m_scale, this.m_clip.scale.y = this.m_scale) : (this.m_clip.scale.x = this.m_flipX ? -this.m_scaleX : this.m_scaleX, this.m_clip.scale.y =
            this.m_scaleY);
        this.m_state = a
    }
};
Player.prototype.onEndAnimation = function(a) {
    switch (a) {
        case Player.ST_PLAYER_JUMP_UP:
            this.gotoState(Player.ST_PLAYER_JUMP_DOWN);
            break;
        case Player.ST_PLAYER_LAND:
            this.gotoState(Player.ST_PLAYER_STAND);
            break;
        case Player.ST_PLAYER_STAND:
            .3 > Math.random() && this.gotoState(Player.ST_PLAYER_STAND_2);
            break;
        case Player.ST_PLAYER_STAND_2:
            this.gotoState(Player.ST_PLAYER_STAND)
    }
};
Player.prototype.onKeyDown = function(a) {
    if (!this.m_isDead && this.m_state != Player.ST_PLAYER_HIT && this.m_state != Player.ST_PLAYER_WIN) switch (a) {
        case PlayerControl.CMD_UP_A:
        case PlayerControl.CMD_UP_B:
            this.m_control.onUp(!0);
            break;
        case PlayerControl.CMD_DOWN_A:
        case PlayerControl.CMD_DOWN_B:
            this.m_control.onDown(!0)
    }
};
Player.prototype.onKeyUp = function(a) {
    switch (a) {
        case PlayerControl.CMD_LEFT_A:
        case PlayerControl.CMD_LEFT_B:
            if (this.m_freeMovement) this.m_control.onLeft(!1);
            break;
        case PlayerControl.CMD_RIGHT_A:
        case PlayerControl.CMD_RIGHT_B:
            if (this.m_freeMovement) this.m_control.onRight(!1);
            break;
        case PlayerControl.CMD_UP_A:
        case PlayerControl.CMD_UP_B:
            this.m_control.onUp(!1);
            break;
        case PlayerControl.CMD_DOWN_A:
        case PlayerControl.CMD_DOWN_B:
            this.m_control.onDown(!1)
    }
};
Player.prototype.moveFree = function(a) {
    this.m_speed.x = this.m_speed.y = 0;
    var b = this.m_control.isRunning() ? 3 : 1,
        c = this.m_control.forceX();
    0 != c && (this.m_speed.x = b * this.m_control.debugSpeed * c, this.m_x += this.m_speed.x * a);
    c = this.m_control.forceY();
    0 != c && (this.m_speed.y = b * this.m_control.debugSpeed * c, this.m_y += this.m_speed.y * a);
    this.m_oldX = this.m_x;
    this.m_oldY = this.m_y;
    this.m_debugCollisionOn && (a = this.checkCollision()) && (this.m_x += a.x, this.m_y += a.y)
};
Player.prototype.update = function(a) {
    Player.dtFix = a > Player.MAX_DT ? Player.MAX_DT : a;
    this.m_control.update(a);
    if (this.m_freeMovement) this.moveFree(a);
    else {
        this.m_character.update(a);
        this.m_speed.x = 0 === this.m_control.forceX() || this.m_control.isInAction() && !this.m_control.isJumping() ? 0 : this.m_speed.x;
        null !== this.m_vehicle && (this.m_x += a * this.m_vehicle.speed().x, this.m_y += a * this.m_vehicle.speed().y);
        if (0 != this.m_control.forceX() || this.m_control.isJumping()) this.m_x += a * this.m_speed.x, this.timeSpeedElapse +=
            a * Global.FACTOR_TIME_SPEED, this.m_speed.x = this.m_control.forceX() * (this.speedInit + Global.ACCELERATION * this.timeSpeedElapse * this.timeSpeedElapse);
        this.m_control.isJumpingUp() || (this.m_y += a * (this.m_speed.y + a * this.m_control.gravity / 2), this.m_speed.y += a * this.m_control.gravity);
        var b = this.maxSpeed,
            c = this.m_control.airSpeed;
        this.m_speed.x = SMath.clamp(this.m_speed.x, -b, b);
        this.m_speed.y = SMath.clamp(this.m_speed.y, -c, c);
        0 != this.m_control.forceX() ? (this.m_state == Player.ST_PLAYER_WIN || this.m_state == Player.ST_PLAYER_LOSE ||
            this.m_control.isJumping() || this.m_control.isInAction() || this.m_state == Player.ST_PLAYER_LAND || (this.m_control.isRunning() && this.m_state != Player.ST_PLAYER_RUN ? this.gotoState(Player.ST_PLAYER_RUN) : this.m_state != Player.ST_PLAYER_WALK && this.gotoState(Player.ST_PLAYER_WALK)), 0 > this.m_control.forceX() * (this.m_flipX ? -1 : 1) && this.setFlipX(!this.m_flipX)) : .01 > Math.abs(this.m_speed.x) && (this.m_state == Player.ST_PLAYER_WALK || this.m_state == Player.ST_PLAYER_RUN) && !this.m_control.isJumping() && this.gotoState(Player.ST_PLAYER_STAND);
        this.m_world.checkZones(this);
        this.m_collision = this.m_world.checkCollision(this);
        this.m_control.onCollision(this.m_collision, a);
        this.m_collision && (this.m_x += this.m_collision.x, this.m_y += this.m_collision.y, 0 != this.m_collision.y && (this.m_speed.y = 0));
        this.m_world.checkWorldBoundaries(this);
        if (this.m_y - this.m_clip.height > this.m_world.height()) this.onPlayerFellOutOfWorld()
    }
};
Player.prototype.onFloor = function() {};
Player.prototype.applyImpulse = function(a, b) {
    this.m_isDead || WorldActor.prototype.applyImpulse.call(this, a, b)
};
Player.prototype.resetControl = function() {
    null !== this.m_control && this.m_control.reset()
};
Player.prototype.resetMovement = function() {
    null !== this.m_control && (this.m_control.onLeft(!1), this.m_control.onRight(!1))
};
Player.prototype.toggleFreeMovement = function() {
    this.m_isInvulnerable = this.m_freeMovement = !this.m_freeMovement;
    this.resetControl();
    this.m_world.camera().setFreeMovementSpeed(this.m_freeMovement);
    Application.log("FreeMove: " + this.m_freeMovement)
};
Player.prototype.toogleDebugCollision = function() {
    this.m_debugCollisionOn = !this.m_debugCollisionOn;
    Application.log("Player collision: " + this.m_debugCollisionOn)
};
Player.prototype.onPlayerFellOutOfWorld = function() {};
Player.prototype.onDebugDraw = function(a) {
    WorldActor.prototype.onDebugDraw.call(this, a);
    if (this.m_climbCorners)
        for (var b = 0; b < this.m_climbCorners.length; b++) ContextGraphics.drawCircle(a, this.m_x - this.m_world.camera().getX() + this.m_climbCorners[b].position.x, this.m_y - this.m_world.camera().getY() + this.m_climbCorners[b].position.y, 1.5, Common.COLOR_PINK, Common.COLOR_PINK)
};
Player.prototype.free = function() {
    null !== this.m_control && (this.m_control.free(), this.m_control = null);
    this.m_corners = null;
    WorldActor.prototype.free.call(this)
};

function PlayerControl(a, b) {
    this.debugSpeed = this.climbJumpUp = this.climbFactor = this.climbCornerSpeed = this.climbSpeed = 0;
    this.TIME_FALL = 200;
    this.TIME_LAND = 150;
    this.m_smallJumpTimer = 0;
    this.m_jumpAllowed = !1;
    this.m_floatingTimer = 0;
    this.m_horizontalBuffer = [0, 0];
    this.m_verticalBuffer = [0, 0];
    this.m_timeJumping = this.m_deltaHeight = 0;
    this.m_canDoubleJump = this.m_doubleJumpEnabled = !1;
    this.m_jumpDownTimer = this.m_doubleJumpSpeed = this.m_doubleJumpEnd = this.m_doubleJumpStart = this.m_smallJumpSpeed = this.m_smallJumpTime =
        this.m_jumpRunSpeed = this.m_jumpInitSpeed = this.m_jumpSpeed = 0;
    this.m_jumpDownAllowed = !1;
    this.m_jumpDownInterval = 0;
    this.m_isCatchEnemy = this.m_canJumpDown = !1;
    this.m_impulseY = this.m_impulseX = 0;
    this.m_wasImpulsed = !1;
    ActorControl.call(this, a);
    this.m_canDoubleJump = this.m_doubleJumpEnabled = !0;
    this.loadData(b);
    this.m_impulseX = 0
}
Application.subclass(PlayerControl, ActorControl);
PlayerControl.CMD_LEFT_A = Common.KEY_LEFT;
PlayerControl.CMD_LEFT_B = Common.KEY_A;
PlayerControl.CMD_RIGHT_A = Common.KEY_RIGHT;
PlayerControl.CMD_RIGHT_B = Common.KEY_D;
PlayerControl.CMD_UP_A = Common.KEY_UP;
PlayerControl.CMD_UP_B = Common.KEY_W;
PlayerControl.CMD_DOWN_A = Common.KEY_DOWN;
PlayerControl.CMD_DOWN_B = Common.KEY_S;
PlayerControl.CMD_CROSS = Common.KEY_X;
PlayerControl.CMD_CIRCLE = Common.KEY_Z;
PlayerControl.CMD_SQUARE = Common.KEY_C;
PlayerControl.CDM_TRIANGLE = Common.KEY_X;
PlayerControl.CMD_R1 = Common.KEY_V;
PlayerControl.CMD_R2 = Common.KEY_8;
PlayerControl.prototype.deltaHeight = function() {
    return this.m_deltaHeight
};
PlayerControl.prototype.isCatchEnemy = function() {
    return this.m_isCatchEnemy
};
PlayerControl.prototype.getWasImpulsed = function() {
    return this.m_wasImpulsed
};
PlayerControl.prototype.setWasImpulsed = function(a) {
    this.m_wasImpulsed = a
};
PlayerControl.prototype.horizontalBuffer = function() {
    return this.m_horizontalBuffer[0]
};
PlayerControl.prototype.verticalBuffer = function() {
    return this.m_verticalBuffer[0]
};
PlayerControl.prototype.forceX = function() {
    return this.m_isRunning ? this.runFactor * this.m_forceX : this.m_forceX
};
PlayerControl.prototype.onCompleteJump = function() {
    this.m_isJumping = !1;
    this.m_actor.gotoState(Player.ST_PLAYER_STAND)
};
PlayerControl.prototype.onActiveDash = function(a) {
    this.m_isRunning = !0
};
PlayerControl.prototype.loadData = function(a) {
    ActorControl.prototype.loadData.call(this, a);
    this.debugSpeed = this.getData(a, "debugSpeed");
    this.walkSpeed = this.getData(a, "walkSpeed");
    this.airSpeed = this.getData(a, "airSpeed");
    this.runFactor = this.getData(a, "runFactor");
    this.canClimb = 1 == this.getData(a, "canClimb");
    this.canRun = 1 == this.getData(a, "canRun");
    this.maxSpeedFloor = this.getData(a, "maxSpeedFloor");
    this.maxSpeedAir = this.getData(a, "maxSpeedAir");
    this.m_jumpSpeed = -this.getData(a, "jumpInitSpeed");
    this.m_jumpRunSpeed = -this.getData(a, "jumpRunInitSpeed");
    this.m_smallJumpTime = this.getData(a, "smallJumpTime");
    this.m_smallJumpSpeed = -this.getData(a, "smallJumpSpeed");
    this.m_doubleJumpStart = this.getData(a, "doubleJumpStart");
    this.m_doubleJumpEnd = this.getData(a, "doubleJumpEnd");
    this.m_doubleJumpSpeed = -this.getData(a, "doubleJumpSpeed");
    this.m_jumpDownInterval = this.getOptionalData(a, "jumpDownTime", -1);
    this.m_canJumpDown = 0 < this.m_jumpDownInterval;
    this.canClimb && (this.climbFactor = 1 - this.getOptionalData(a, "climbFactor", .75),
        this.climbSpeed = -this.getOptionalData(a, "climbSpeed", .33), this.climbCornerSpeed = -this.getOptionalData(a, "climbCornerSpeed", .5), this.climbJumpUp = -this.getOptionalData(a, "climbJumpUp", 1.1))
};
PlayerControl.prototype.reset = function() {
    ActorControl.prototype.reset.call(this);
    this.m_horizontalBuffer[0] = 0;
    this.m_horizontalBuffer[1] = 0;
    this.m_verticalBuffer[0] = 0;
    this.m_timeJumping = this.m_deltaHeight = this.m_verticalBuffer[1] = 0;
    this.m_smallJumpTimer = -1;
    this.m_floatingTimer = this.TIME_FALL;
    this.m_jumpAllowed = !0;
    this.m_jumpDownTimer = -1;
    this.m_jumpDownAllowed = !0
};
PlayerControl.prototype.onCollision = function(a, b) {
    if (a) 0 > a.y && this.m_isJumping && (this.m_isJumping = this.m_isInAction = !1, this.m_actor.gotoState(Player.ST_PLAYER_LAND), this.m_floatingTimer = this.TIME_LAND), this.m_floatingTimer < this.TIME_FALL && (this.m_floatingTimer = this.TIME_FALL), null != this.m_actor.vehicle() && this.m_floatingTimer < this.TIME_LAND && (this.m_floatingTimer = this.TIME_LAND), 0 != a.y && (this.m_isJumpingUp = !1), this.m_wasImpulsed = !1;
    else {
        var c = this.m_actor.world().getTileBelow(this.m_actor.getX(),
            this.m_actor.getY());
        if (0 < this.m_floatingTimer && c !== WorldCollisionLayer.CELL_DIAG_UP_LEFT && c !== WorldCollisionLayer.CELL_DIAG_UP_RIGHT && c !== WorldCollisionLayer.CELL_MD_UP_LEFT && c !== WorldCollisionLayer.CELL_MD_UP_RIGHT && c !== WorldCollisionLayer.CELL_HMD_UP_LEFT && c !== WorldCollisionLayer.CELL_HMD_UP_RIGHT && (this.m_floatingTimer -= b, 0 >= this.m_floatingTimer && !this.m_isJumping)) {
            this.m_actor.gotoState(Player.ST_PLAYER_JUMP_DOWN);
            if (this.m_actor.dummyJumper && this.m_actor.dummyJumper.state == Jumper.ST_STAND_BY) this.m_actor.dummyJumper.onJumpFall();
            this.m_isJumping = !0
        }
    }
};
PlayerControl.prototype.onLeft = function(a) {
    a ? (1 == this.m_horizontalBuffer[0] && (this.m_horizontalBuffer[1] = 1), this.m_horizontalBuffer[0] = -1) : (-1 == this.m_horizontalBuffer[0] && (this.m_horizontalBuffer[0] = this.m_horizontalBuffer[1]), this.m_horizontalBuffer[1] = 0)
};
PlayerControl.prototype.onRight = function(a) {
    a ? (-1 == this.m_horizontalBuffer[0] && (this.m_horizontalBuffer[1] = -1), this.m_horizontalBuffer[0] = 1) : (1 == this.m_horizontalBuffer[0] && (this.m_horizontalBuffer[0] = this.m_horizontalBuffer[1]), this.m_horizontalBuffer[1] = 0)
};
PlayerControl.prototype.onUp = function(a) {
    a ? (1 == this.m_verticalBuffer[0] && (this.m_verticalBuffer[1] = 1), this.m_verticalBuffer[0] = -1) : (-1 == this.m_verticalBuffer[0] && (this.m_verticalBuffer[0] = this.m_verticalBuffer[1]), this.m_verticalBuffer[1] = 0)
};
PlayerControl.prototype.onDown = function(a) {
    a ? (-1 == this.m_verticalBuffer[0] && (this.m_verticalBuffer[1] = -1), this.m_verticalBuffer[0] = 1) : (1 == this.m_verticalBuffer[0] && (this.m_verticalBuffer[0] = this.m_verticalBuffer[1]), this.m_verticalBuffer[1] = 0)
};
PlayerControl.prototype.onRun = function(a) {
    this.canRun && (this.m_isRunning = a)
};
PlayerControl.prototype.onCustomJump = function(a) {
    this.m_actor.gotoState(Player.ST_PLAYER_JUMP_UP);
    this.m_isJumpingUp = this.m_isJumping = !0;
    this.m_timeJumping = 0;
    this.m_smallJumpTimer = -1;
    this.m_jumpInitSpeed = a;
    this.m_canDoubleJump = !1
};
PlayerControl.prototype.onCustomJumpDirected = function(a, b) {
    this.m_actor.gotoState(Player.ST_PLAYER_JUMP_UP);
    this.m_isJumpingUp = this.m_isJumping = !0;
    this.m_timeJumping = 0;
    this.m_smallJumpTimer = -1;
    this.m_jumpInitSpeed = b;
    this.m_impulseX = a;
    this.m_wasImpulsed = this.m_canDoubleJump = !0
};
PlayerControl.prototype.onJumpDown = function(a) {
    this.m_canJumpDown && (a ? (this.m_jumpDownAllowed && !this.m_isJumping && this.m_actor.isOverPlatform() && (this.m_jumpDownAllowed = !1, this.m_isJumpingDown = !0, this.m_jumpDownTimer = this.m_jumpDownInterval, this.m_actor.gotoState(Player.ST_PLAYER_JUMP_DOWN)), this.m_jumpDownAllowed = !1) : this.m_jumpDownAllowed = !0)
};
PlayerControl.prototype.onJump = function(a) {
    a ? this.m_jumpAllowed && (this.m_isJumping ? this.m_canDoubleJump && this.m_timeJumping >= this.m_doubleJumpStart && this.m_timeJumping <= this.m_doubleJumpEnd && (this.m_actor.gotoState(Player.ST_PLAYER_JUMP_UP), this.m_smallJumpTimer = this.m_smallJumpTime, this.m_isJumpingUp = !0, this.m_canDoubleJump = this.m_jumpAllowed = !1, this.m_timeJumping = 0, this.m_jumpInitSpeed = this.m_doubleJumpSpeed) : (this.m_actor.gotoState(Player.ST_PLAYER_JUMP_UP), this.m_smallJumpTimer = this.m_smallJumpTime,
        this.m_isJumpingUp = this.m_isJumping = !0, this.m_jumpAllowed = !1, this.m_timeJumping = 0, this.m_canDoubleJump = this.m_doubleJumpEnabled, this.m_jumpInitSpeed = this.m_isRunning ? this.m_actor.factorSpeedY() * this.m_jumpRunSpeed : this.m_actor.factorSpeedY() * this.m_jumpSpeed)) : (this.m_isJumpingUp && 0 < this.m_smallJumpTimer && (this.m_jumpInitSpeed = this.m_smallJumpSpeed), this.m_jumpAllowed = !0)
};
PlayerControl.prototype.onAction = function(a) {
    this.m_isInAction = a
};
PlayerControl.prototype.onCatchEnemy = function(a) {
    this.m_isCatchEnemy = a
};
PlayerControl.prototype.onDashAttack = function(a) {
    this.m_isInDashAttack = a
};
PlayerControl.prototype.update = function(a) {
    0 < this.m_jumpDownTimer && (this.m_jumpDownTimer -= a, 0 >= this.m_jumpDownTimer && (this.m_isJumpingDown = !1));
    this.m_isJumping && (this.m_timeJumping += a, 0 < this.m_smallJumpTimer && (this.m_smallJumpTimer -= a));
    this.m_forceX = 0 != this.m_horizontalBuffer[0] ? this.m_horizontalBuffer[0] : 0 != this.m_horizontalBuffer[1] ? this.m_horizontalBuffer[1] : 0;
    this.m_forceY = 0 != this.m_verticalBuffer[0] ? this.m_verticalBuffer[0] : 0 != this.m_verticalBuffer[1] ? this.m_verticalBuffer[1] : 0;
    0 != this.m_impulseX &&
        (this.m_forceX += this.m_impulseX, this.m_impulseX = 0)
};

function World(a, b) {
    this.playerInitY = this.playerInitX = 0;
    this.showCollisions = !1;
    this.cameraHeight = this.cameraWidth = 0;
    this.cameraY0 = [];
    this.cameraY0Pos = [];
    this.cameraFactor = 0;
    this.cameraFixedX = void 0;
    this.cameraInitHeight = this.cameraInitWidth = this.cameraInitY = this.cameraInitX = this.cameraXMin = this.cameraXMax = this.cameraYMin = this.cameraYMax = this.cameraScreenY = this.cameraScreenX = 0;
    this.useEmbeddedAssets = !1;
    this.m_rangeTilesBelow = 0;
    this.m_game = b;
    this.m_layers = [];
    this.m_playerCanvas = null;
    this.m_objectsCanvas = [];
    this.m_spritesCanvas = [];
    this.m_player = null;
    this.m_layerNames = [];
    this.m_markers = this.m_collisions = null;
    this.m_pointY = this.m_pointX = this.m_height = this.m_width = 0;
    this.m_effectManager = this.m_worldData = this.m_actorManager = this.m_camera = null;
    this.canvas = a
}
World.prototype.game = function() {
    return this.m_game
};
World.prototype.setScale = function(a) {
    this.setScaleX(a);
    this.setScaleY(a)
};
World.prototype.setScaleX = function(a) {
    for (var b = 0; b < this.m_layers.length; b++) this.m_layers[b].setScaleX(a)
};
World.prototype.setScaleY = function(a) {
    for (var b = 0; b < this.m_layers.length; b++) this.m_layers[b].setScaleY(a)
};
World.prototype.setX = function(a) {
    for (var b = 0; b < this.m_layers.length; b++) this.m_layers[b].setX(a)
};
World.prototype.setY = function(a) {
    for (var b = 0; b < this.m_layers.length; b++) this.m_layers[b].setY(a)
};
World.prototype.objectCanvas = function() {
    return this.m_objectsCanvas[0]
};
World.prototype.player = function() {
    return this.m_player
};
World.prototype.camera = function() {
    return this.m_camera
};
World.prototype.width = function() {
    return this.m_width
};
World.prototype.height = function() {
    return this.m_height
};
World.prototype.tileWidth = function() {
    return this.m_collisions.tileWidth()
};
World.prototype.tileHeight = function() {
    return this.m_collisions.tileHeight()
};
World.prototype.actorManager = function() {
    return this.m_actorManager
};
World.prototype.getLayer = function(a) {
    return this.m_layerNames[a]
};
World.prototype.getPoint = function(a) {
    return this.m_markers.getPoint(a)
};
World.prototype.getZone = function(a) {
    return this.m_markers.getZone(a)
};
World.prototype.getCircle = function(a) {
    return this.m_markers.getCircle(a)
};
World.prototype.getSpawnPosition = function(a) {
    return this.m_markers.getSpawnPosition(a)
};
World.prototype.spawnPoints = function() {
    return this.m_markers.spawnPoints()
};
World.prototype.loadData = function(a, b) {
    this.m_worldData = window[a];
    var c = this.m_worldData.properties;
    this.m_width = this.getData(c, "width");
    this.m_height = this.getData(c, "height");
    this.showCollisions = 1 === this.getData(c, "showCollisions");
    Application.instance.isMobileDevice && (this.showCollisions = !1);
    this.playerInitX = this.getData(c, "playerX");
    this.playerInitY = this.getData(c, "playerY");
    this.cameraInitWidth = this.cameraWidth = this.getData(c, "cameraWidth");
    this.cameraInitHeight = this.cameraHeight = this.getData(c,
        "cameraHeight");
    0 >= this.cameraWidth && (this.cameraWidth = Application.APP_WIDTH);
    0 >= this.cameraHeight && (this.cameraHeight = Application.APP_HEIGHT);
    this.cameraY0 = void 0 !== this.getData(c, "cameraY0") ? this.getData(c, "cameraY0") : 30;
    this.cameraY0Pos = this.getData(c, "cameraY0Pos");
    this.cameraFactor = void 0 !== this.getData(c, "cameraFactor") ? this.getData(c, "cameraFactor") : .5;
    this.cameraFixedX = this.getData(c, "cameraFixedX");
    this.cameraScreenX = this.getData(c, "cameraScreenX");
    this.cameraScreenY = this.getData(c, "cameraScreenY");
    this.cameraYMax = this.getData(c, "cameraYMax");
    this.cameraYMin = this.getData(c, "cameraYMin");
    this.cameraXMax = this.getData(c, "cameraXMax");
    this.cameraXMin = this.getData(c, "cameraXMin");
    this.useEmbeddedAssets = this.getData(c, "useEmbeddedAssets");
    this.createCamera();
    this.createNpcManagers();
    this.createLayers();
    if (Application.sandbox) {
        c = Application.instance.addDisplayContainer();
        this.canvas.addChild(c);
        this.m_spritesCanvas.push(c);
        var d = parseInt(Application.sandbox.startSettings.testSprites, 10);
        if (0 < d)
            for (var e = [37, 159, 23, 193, 55, 36, 138, 120, 200, 170], f = [56, 113, 72, 163, 55, 84, 193, 120, 200, 170], g = 0; g < d; g++) {
                var h = Math.floor(10 * Math.random()),
                    k = e[h],
                    l = f[h],
                    m = Math.floor(Math.random() * (this.m_width - k / 2 + 1) + k / 2),
                    p = Math.floor(Math.random() * (this.m_height - l / 2 + 1) + l / 2),
                    h = "npc_pic_level_test_quadtree_0" + h,
                    n = new NpcPlatformRunner;
                n.id = ActorManagerPlatformRunner.ITEM_CLIP;
                n.canvas = c;
                n.x = m;
                n.y = p;
                n.w = k;
                n.h = l;
                n.params = "fixed:0;name:" + h + ";blend:0";
                this.m_actorManager.addNpc(n)
            }
    }
};
World.prototype.createCamera = function() {};
World.prototype.createNpcManagers = function() {};
World.prototype.addNpc = function(a, b) {
    var c = new Npc;
    c.id = a.id;
    c.x = a.x;
    c.y = a.y;
    c.canvas = b;
    c.params = a.params;
    this.m_actorManager.addNpc(c)
};
World.prototype.createLayers = function() {
    this.m_layerNames = [];
    for (var a = this.m_worldData.layerTypes, b = 0; b < a.length; b++) this.addLayer(a[b].type, a[b]);
    null === this.m_playerCanvas && (this.m_playerCanvas = this.m_objectsCanvas[0]);
    this.m_worldData = null
};
World.prototype.addLayer = function(a, b) {
    if (a === WorldBaseLayer.ID_OBJECTS) {
        var c = Application.instance.addDisplayContainer();
        this.canvas.addChild(c);
        "objects" == b.name && this.m_objectsCanvas.push(c);
        for (var d = 0; d < b.object.length; d++) this.addNpc(b.object[d], c)
    } else a === WorldBaseLayer.ID_SPRITES ? Application.isLowDevice && "scn_env" == b.name || (c = new WorldSpriteLayer(this, b), this.m_layerNames[c.name()] = c, this.m_layers.push(c)) : a === WorldBaseLayer.ID_MARKERS ? null === this.m_markers ? (this.m_markers = new WorldMarkerLayer(this,
        b), this.m_layers.push(this.m_markers)) : this.m_markers.loadData(b) : a === WorldBaseLayer.ID_PLAYER ? (this.m_playerCanvas = Application.instance.addDisplayContainer(), this.canvas.addChild(this.m_playerCanvas)) : a === WorldBaseLayer.ID_COLLISIONS ? (this.m_collisions = new WorldCollisionLayer(this, b), this.m_layerNames[this.m_collisions.name()] = this.m_collisions, this.m_layers.push(this.m_collisions), this.m_rangeTilesBelow = 2 * this.m_collisions.tileHeight()) : (c = new WorldTileLayer(this, b, !1), this.m_layerNames[c.name()] =
        c, this.m_layers.push(c))
};
World.prototype.createEffect = function(a, b, c, d) {
    a = Application.instance.effectManager.createEffect(a, b, c, GuiGame.instance.canvasEffects, d);
    a.params = {
        world: this,
        x: b,
        y: c
    };
    return a
};
World.prototype.init = function() {
    this.setX(this.m_camera.getX());
    this.setY(this.m_camera.getY());
    for (var a = 0; a < this.m_layers.length; a++) this.m_layers[a].init()
};
World.prototype.getTileBelow = function(a, b) {
    if (null !== this.m_collisions) return this.m_collisions.getTileBelow(a, b, this.m_rangeTilesBelow);
    Application.error("getTileBelow: no collisions");
    return WorldCollisionLayer.CELL_EMPTY
};
World.prototype.getFloorCollision = function(a, b) {
    if (null !== this.m_collisions) return this.m_collisions.getFloorCollision(a, b);
    Application.error("getFloorCollision: no collisions");
    return new Vector2D(a, b)
};
World.prototype.getMaxFloorRange = function(a, b, c) {
    if (null !== this.m_collisions) return "undefined" === typeof c && (c = World.MAX_SCAN_FLOOR), this.m_collisions.getMaxFloorRange(a, b, c);
    Application.error("getMaxFloorRange: no collisions");
    return new Rectangle(a, b)
};
World.prototype.getMaxFloorRangeElevations = function(a, b, c) {
    if (null !== this.m_collisions) return "undefined" === typeof c && (c = World.MAX_SCAN_FLOOR), this.m_collisions.getMaxFloorRangeElevations(a, b, c);
    Application.error("getMaxFloorRangeElevations: no collisions");
    return new Rectangle(a, b)
};
World.prototype.getMaxHeight = function(a, b) {
    if (null !== this.m_collisions) return this.m_collisions.getMaxHeight(a, b);
    Application.error("getMaxHeight: no collisions");
    return -1
};
World.prototype.getRayCollision = function(a, b, c, d) {
    if (null !== this.m_collisions) return this.m_collisions.getRayCollision(a, b, c, d);
    Application.error("getRayCollision: no collisions");
    return null
};
World.prototype.onDebugDraw = function(a) {
    this.m_player.onDebugDraw(a);
    this.m_actorManager.onDebugDraw(a);
    this.m_camera.onDebugDraw(a);
    if (null !== this.m_markers) this.m_markers.onDebugDraw(a);
    for (var b = 0; b < this.m_layers.length; b++) this.m_layers[b].onDebugDraw(a)
};
World.prototype.showCollision = function(a) {
    this.m_collisions.setVisible(a)
};
World.prototype.refreshCollision = function() {};
World.prototype.setCollisionCell = function(a, b, c) {
    this.m_collisions.setCell(a, b, c)
};
World.prototype.getTilePosition = function(a, b) {
    return this.m_collisions.getTilePosition(a, b)
};
World.prototype.getCellPosition = function(a, b) {
    return this.m_collisions.getCellPosition(a, b)
};
World.prototype.getCellCollision = function(a, b) {
    return this.m_collisions.getCell(a, b)
};
World.prototype.fixedPositionY = function(a, b) {
    var c = ~~(b / this.m_collisions.tileHeight()),
        d = this.getCellPosition(a, b);
    return 1 == d || 6 == d ? c * this.m_collisions.tileHeight() : (c + 1) * this.m_collisions.tileHeight()
};
World.prototype.setRangeCollisionCell = function(a, b, c, d, e, f) {
    for (; a <= c; a++)
        for (var g = b; g <= d; g++) this.setCollisionCell(a, g, e);
    f && this.refreshCollision()
};
World.prototype.getCellInPosition = function(a, b) {
    return this.m_collisions.getCellInPosition(a, b)
};
World.prototype.checkZones = function(a) {
    if (null !== this.m_markers)
        for (var b = this.m_markers.actionZones.length, c = 0; c < b; c++) {
            var d = this.m_markers.actionZones[c];
            d.intersectRect(a.getBounds()) ? d.active || (d.active = !0, a.onEnterZone(d)) : d.active && (d.active = !1, a.onLeaveZone(d))
        }
};
World.prototype.checkWorldBoundaries = function(a) {
    var b;
    b = a.bounds();
    null !== b && (a.limitLeft() && a.getX() + b.left < this.m_collisions.tileWidth() && a.setX(this.m_collisions.tileWidth() - b.left), a.limitRight() && a.getX() + b.right > this.m_width - this.m_collisions.tileWidth() && a.setX(this.m_width - this.m_collisions.tileWidth() - b.right), a.limitUp() && 0 >= a.getY() + b.top && a.setY(-b.top), a.limitBottom() && a.getY() + b.bottom >= this.m_height && a.setY(this.m_height - b.bottom))
};
World.prototype.checkCollision = function(a, b) {
    var c = new Vector2D(0, 0),
        d = b || a.corners();
    if (null !== d) {
        for (var e = null, f = 0; f < d.length; f++)
            if (d[f]) {
                var g = d[f];
                this.m_pointX = a.getX() + g.position.x;
                this.m_pointY = a.getY() + g.position.y;
                var h = this.m_collisions.checkCollision(this.m_pointX, this.m_pointY, g.normal, a);
                h && (Math.abs(h.x) > Math.abs(c.x) && (c.x = h.x), Math.abs(h.y) > Math.abs(c.y) && (c.y = h.y));
                null === e && a instanceof Player && (g = this.m_collisions.checkPlatforms(this.m_pointX, this.m_pointY, g.normal, a)) && (e = g.platform,
                    Math.abs(g.coll.x) > Math.abs(c.x) && (c.x = g.coll.x), Math.abs(g.coll.y) > Math.abs(c.y) && (c.y = g.coll.y))
            }
        a.setVehicle(e);
        return 0 !== c.y || 0 !== c.x ? c : null
    }
};
World.prototype.update = function(a) {
    this.m_camera.update(a);
    this.m_actorManager.update(a);
    this.m_player.update(a);
    this.m_player.showInCamera(this.m_camera);
    var b;
    for (b = 0; b < this.m_layers.length; b++) this.m_layers[b].visible() && this.m_layers[b].render(a)
};
World.prototype.addMobilePlatform = function(a) {
    this.m_collisions.addMobilePlatform(a)
};
World.prototype.removeMobilePlatform = function(a) {
    this.m_collisions.removeMobilePlatform(a)
};
World.prototype.getData = function(a, b) {
    if (null === a) Application.error("World:: data is null");
    else if (null === b) Application.error("World:: data is null: " + b);
    else {
        if ("undefined" !== typeof a[b]) return a[b];
        Application.warn("Property not found: " + b)
    }
};
World.prototype.getOptionalData = function(a, b, c) {
    if ("undefined" === typeof a) Application.error("World:: data is undefined");
    else if ("undefined" === typeof b) Application.error("World:: data is undefined: " + b);
    else {
        if ("undefined" !== typeof a[b]) return a[b];
        Application.warn("Optional property not found: " + b + " using: " + c);
        return c
    }
};
World.prototype.showPhysicZone = function(a, b, c, d, e) {};
World.prototype.free = function() {
    null !== this.m_player && (this.m_player.free(), this.m_player = null);
    this.m_actorManager.free();
    this.m_actorManager = null;
    this.m_playerCanvas !== this.m_objectsCanvas[0] && (this.canvas.removeChild(this.m_playerCanvas), this.m_playerCanvas = null);
    for (var a = this.m_objectsCanvas.length - 1; 0 <= a; a--) this.canvas.removeChild(this.m_objectsCanvas[a]);
    this.m_collisions = this.m_objectsCanvas = null;
    null !== this.m_markers && (this.m_markers.free(), this.m_markers = null);
    null !== this.m_camera && (this.m_camera.free(),
        this.m_camera = null);
    for (a = 0; a < this.m_layers.length; a++) this.m_layers[a].free(), this.m_layers[a] = null;
    this.m_layers = this.m_layerNames = null;
    this.canvas.removeChildren(0, this.canvas.children.length);
    this.canvas = null
};
World.MAX_SCAN_FLOOR = 750;

function WorldBaseLayer(a, b, c) {
    this.m_type = this.m_parallaxXFactor = this.m_y = this.m_x = 0;
    this.m_world = a;
    this.m_canvas = null;
    this.m_useEmbeddedAssets = !1;
    this.m_name = b.name;
    this.m_width = b.width;
    this.m_height = b.height;
    this.m_offsetX = 0;
    b.offsetX && (this.m_offsetX = b.offsetX);
    this.m_offsetY = 0;
    b.offsetY && (this.m_offsetY = b.offsetY);
    Application.log(" Layer: " + this.m_name + " w:" + this.m_width + " h:" + this.m_height + " ox:" + this.m_offsetX + " oy:" + this.m_offsetY);
    this.m_useEmbeddedAssets = this.m_world.useEmbeddedAssets;
    this.m_canvas =
        c ? new window.PIXI.ParticleContainer(2E3, [!0, !0, !1, !1, !0], 2E3) : Application.instance.addDisplayContainer();
    a.canvas.addChild(this.m_canvas);
    this.m_type = 0
}
WorldBaseLayer.prototype.getX = function() {
    return this.m_x
};
WorldBaseLayer.prototype.getY = function() {
    return this.m_y
};
WorldBaseLayer.prototype.width = function() {
    return this.m_width
};
WorldBaseLayer.prototype.height = function() {
    return this.m_height
};
WorldBaseLayer.prototype.visible = function() {
    return !0
};
WorldBaseLayer.prototype.name = function() {
    return this.m_name
};
WorldBaseLayer.prototype.setX = function(a) {
    this.m_x = a
};
WorldBaseLayer.prototype.setY = function(a) {
    this.m_y = a
};
WorldBaseLayer.prototype.refresh = function() {};
WorldBaseLayer.prototype.init = function() {
    this.m_world.camera().parallaxX && (this.m_parallaxXFactor = (this.m_width - this.m_world.camera().width()) / (this.m_world.width() - this.m_world.camera().width()));
    this.m_world.camera().parallaxY && (this.m_parallaxYFactor = (this.m_height - this.m_world.camera().height()) / (this.m_world.height() - this.m_world.camera().height()))
};
WorldBaseLayer.prototype.render = function(a) {
    this.m_world.camera().parallaxX && (this.m_canvas.x = -this.parallaxX());
    this.m_world.camera().parallaxY && (this.m_canvas.y = -this.parallaxY())
};
WorldBaseLayer.prototype.parallaxX = function() {
    return ~~((this.m_world.camera().getX() - this.m_offsetX) * this.m_parallaxXFactor)
};
WorldBaseLayer.prototype.parallaxY = function() {
    return ~~((this.m_world.camera().getY() - this.m_offsetY) * this.m_parallaxYFactor)
};
WorldBaseLayer.prototype.free = function() {
    this.m_world && (this.m_world = this.m_canvas = null)
};
WorldBaseLayer.prototype.onDebugDraw = function(a) {};
WorldBaseLayer.TYPE_COLLISIONS = 1;
WorldBaseLayer.TYPE_TILES = 2;
WorldBaseLayer.TYPE_SPRITES = 3;
WorldBaseLayer.TYPE_OBJECTS = 4;
WorldBaseLayer.TYPE_MARKERS = 5;
WorldBaseLayer.TYPE_BOX2D = 6;
WorldBaseLayer.ID_PLAYER = "player";
WorldBaseLayer.ID_COLLISIONS = "collision";
WorldBaseLayer.ID_TILES = "cell";
WorldBaseLayer.ID_SPRITES = "sprites";
WorldBaseLayer.ID_OBJECTS = "objects";
WorldBaseLayer.ID_MARKERS = "markers";
WorldBaseLayer.ID_BOX2D = "b2d";

function WorldTileLayer(a, b, c) {
    WorldBaseLayer.call(this, a, b, c);
    this.m_maxY = this.m_maxX = this.m_minY = this.m_minX = 0;
    this.m_buffer = [];
    this.m_bufferY = this.m_bufferX = this.m_bufferHeight = this.m_bufferWidth = 0;
    this.m_type = WorldBaseLayer.ID_TILES;
    this.m_columns = b.cols;
    this.m_rows = b.rows;
    this.m_tileWidth = b.tileW;
    this.m_tileHeight = b.tileH;
    this.m_tiles = b.image;
    this.m_bitmapData = b.matrix;
    this.m_tempRow = this.m_tempCol = 0
}
Application.subclass(WorldTileLayer, WorldBaseLayer);
WorldTileLayer.prototype.tileWidth = function() {
    return this.m_tileWidth
};
WorldTileLayer.prototype.tileHeight = function() {
    return this.m_tileHeight
};
WorldTileLayer.prototype.getTileName = function(a) {
    return 0 <= a && a < this.m_tiles.length ? this.m_tiles[a] : null
};
WorldTileLayer.prototype.getBufferCell = function(a, b) {
    return this.m_buffer[(a + this.m_bufferX) % this.m_bufferWidth + (b + this.m_bufferY) % this.m_bufferHeight * this.m_bufferWidth]
};
WorldTileLayer.prototype.setBufferCell = function(a, b, c) {
    this.m_buffer[(a + this.m_bufferX) % this.m_bufferWidth + (b + this.m_bufferY) % this.m_bufferHeight * this.m_bufferWidth] = c
};
WorldTileLayer.prototype.initCell = function(a, b) {
    var c = this.getCell(a + this.m_minX, b + this.m_minY);
    0 < c && (c = PoolClips.instance.getClip(this.getTileName(c - 1)), this.m_canvas.addChild(c), c.parent = this.m_canvas, c.setPosition((a + this.m_minX) * this.m_tileWidth, (b + this.m_minY) * this.m_tileHeight), c.setScale(1.02), this.setBufferCell(a, b, c))
};
WorldTileLayer.prototype.refresh = function() {
    WorldBaseLayer.prototype.refresh.call(this);
    for (var a = this.m_bufferY = this.m_bufferX = 0; a < this.m_bufferWidth;) {
        for (var b = 0; b < this.m_bufferHeight;) {
            var c = this.m_buffer[a + b * this.m_bufferWidth];
            c && (this.m_canvas.removeChild(c), this.m_buffer[a + b * this.m_bufferWidth] = null);
            this.initCell(a, b);
            ++b
        }++a
    }
};
WorldTileLayer.prototype.cleanBuffer = function() {
    if (0 != this.m_buffer.length) {
        for (var a, b = 0; b < this.m_buffer.length; ++b)
            if (a = this.m_buffer[b]) a.parent && a.parent.removeChild(a), a.free(), this.m_buffer[b] = null;
        this.m_buffer = []
    }
};
WorldTileLayer.prototype.init = function() {
    WorldBaseLayer.prototype.init.call(this);
    this.m_bufferWidth = Math.ceil(this.m_world.camera().width() / this.m_tileWidth + 1);
    this.m_bufferHeight = Math.ceil(this.m_world.camera().height() / this.m_tileHeight + 1);
    this.m_bufferY = this.m_bufferX = 0;
    this.m_buffer = [];
    this.m_minX = ~~(this.m_world.camera().getX() / this.m_tileWidth);
    0 > this.m_minX && (this.m_minX = 0);
    this.m_maxX = this.m_minX + this.m_bufferWidth;
    this.m_minY = ~~(this.m_world.camera().getY() / this.m_tileHeight);
    0 > this.m_minY &&
        (this.m_minY = 0);
    this.m_maxY = this.m_minY + this.m_bufferHeight;
    for (var a = 0; a < this.m_bufferWidth;) {
        for (var b = 0; b < this.m_bufferHeight;) this.initCell(a, b), ++b;
        ++a
    }
};
WorldTileLayer.prototype.initWithParams = function(a, b) {
    WorldBaseLayer.prototype.init.call(this);
    this.m_bufferWidth = Math.ceil(a / this.m_tileWidth + 1);
    this.m_bufferHeight = Math.ceil(b / this.m_tileHeight + 1);
    this.m_bufferY = this.m_bufferX = 0;
    this.cleanBuffer();
    this.m_minX = ~~(this.m_world.camera().getX() / this.m_tileWidth);
    0 > this.m_minX && (this.m_minX = 0);
    this.m_maxX = this.m_minX + this.m_bufferWidth;
    this.m_minY = ~~(this.m_world.camera().getY() / this.m_tileHeight);
    0 > this.m_minY && (this.m_minY = 0);
    this.m_maxY = this.m_minY +
        this.m_bufferHeight;
    for (var c = 0; c < this.m_bufferWidth;) {
        for (var d = 0; d < this.m_bufferHeight;) this.addTileCell(c + this.m_minX, d + this.m_minY, c, d), ++d;
        ++c
    }
};
WorldTileLayer.prototype.getCellInPosition = function(a, b) {
    this.m_tempCol = ~~(a / this.m_tileWidth);
    this.m_tempRow = ~~(b / this.m_tileHeight);
    return 0 <= this.m_tempCol && 0 <= this.m_tempRow && this.m_tempCol < this.m_columns && this.m_tempRow < this.m_rows && this.m_bitmapData[this.m_tempCol] ? this.m_bitmapData[this.m_tempCol][this.m_tempRow] : 0
};
WorldTileLayer.prototype.getCell = function(a, b) {
    return 0 <= a && 0 <= b && a < this.m_columns && b < this.m_rows && this.m_bitmapData[a] ? this.m_bitmapData[a][b] : 0
};
WorldTileLayer.prototype.setCell = function(a, b, c) {
    0 <= a && 0 <= b && a < this.m_columns && b < this.m_rows && (this.m_bitmapData[a] || (this.m_bitmapData[a] = Common.createArraySize(this.m_rows, 0)), this.m_bitmapData[a][b] = c);
    return 0
};
WorldTileLayer.prototype.addTileCell = function(a, b, c, d) {
    var e = this.getCell(a, b);
    0 < e && (e = PoolClips.instance.getClip(this.getTileName(e - 1)), this.m_canvas.addChild(e), e.parent = this.m_canvas, e.position.x = a * this.m_tileWidth, e.position.y = b * this.m_tileHeight, e.setScale(1.02), this.setBufferCell(c, d, e))
};
WorldTileLayer.prototype.render = function(a) {
    a = !1;
    var b, c, d;
    if (this.m_world.camera().parallaxX) {
        d = this.parallaxX();
        b = ~~(d / this.m_tileWidth);
        c = b - this.m_minX;
        if (c <= -this.m_bufferWidth || c >= this.m_bufferWidth) a = !0;
        else if (b > this.m_minX) {
            for (var e = 0; e < c;) {
                for (var f = 0; f < this.m_bufferHeight;) {
                    var g = this.getBufferCell(e, f);
                    g && (g && PoolClips.instance.releaseClip(g), this.setBufferCell(e, f, null));
                    this.addTileCell(e + this.m_maxX, f + this.m_minY, e, f);
                    ++f
                }++e
            }
            this.m_bufferX = (this.m_bufferX + c) % this.m_bufferWidth
        } else if (b <
            this.m_minX) {
            for (e = 1; e <= -c;) {
                for (f = 0; f < this.m_bufferHeight;) {
                    if (g = this.getBufferCell(this.m_bufferWidth - e, f)) g && PoolClips.instance.releaseClip(g), this.setBufferCell(this.m_bufferWidth - e, f, null);
                    this.addTileCell(this.m_minX - e, f + this.m_minY, this.m_bufferWidth - e, f);
                    ++f
                }++e
            }
            this.m_bufferX = (this.m_bufferWidth + this.m_bufferX + c) % this.m_bufferWidth
        }
        0 != c && (this.m_minX = b, this.m_maxX = this.m_minX + this.m_bufferWidth);
        this.m_canvas.position.x = -Math.floor(d)
    }
    if (this.m_world.camera().parallaxY) {
        d = this.parallaxY();
        b = ~~(d / this.m_tileHeight);
        c = b - this.m_minY;
        if (c <= -this.m_bufferHeight || c >= this.m_bufferHeight) a = !0;
        else if (b > this.m_minY) {
            for (f = 0; f < c;) {
                for (e = 0; e < this.m_bufferWidth;) {
                    if (g = this.getBufferCell(e, f)) PoolClips.instance.releaseClip(g), this.setBufferCell(e, f, null);
                    this.addTileCell(e + this.m_minX, f + this.m_maxY, e, f);
                    ++e
                }++f
            }
            this.m_bufferY = (this.m_bufferY + c) % this.m_bufferHeight
        } else if (b < this.m_minY) {
            for (f = 1; f <= -c;) {
                for (e = 0; e < this.m_bufferWidth;) {
                    if (g = this.getBufferCell(e, this.m_bufferHeight - f)) PoolClips.instance.releaseClip(g),
                        this.setBufferCell(e, this.m_bufferHeight - f, null);
                    this.addTileCell(e + this.m_minX, this.m_minY - f, e, this.m_bufferHeight - f);
                    ++e
                }++f
            }
            this.m_bufferY = (this.m_bufferHeight + this.m_bufferY + c) % this.m_bufferHeight
        }
        0 != c && (this.m_minY = b, this.m_maxY = this.m_minY + this.m_bufferHeight);
        this.m_canvas.position.y = -Math.floor(d)
    }
    a && this.refresh()
};
WorldTileLayer.prototype.free = function() {
    for (var a = 0; a < this.m_bufferWidth;) {
        for (var b = 0; b < this.m_bufferHeight;) PoolClips.instance.releaseClip(this.m_buffer[a + b * this.m_bufferWidth]), ++b;
        ++a
    }
    WorldBaseLayer.prototype.free.call(this)
};

function WorldCollisionLayer(a, b) {
    this.m_tileY = this.m_tileX = 0;
    this.m_frames = null;
    this.m_sw0 = this.m_dy = this.m_dx = this.m_number = 0;
    WorldTileLayer.call(this, a, b);
    this.m_type = WorldBaseLayer.TYPE_COLLISIONS;
    this.m_frames = [];
    for (var c = WorldCollisionLayer.CELL_EMPTY; c <= WorldCollisionLayer.CELL_HALF_HORIZONTAL;) this.m_frames.push(WorldCollisionLayer.COLLISION_SET + c), ++c;
    this.m_platforms = [];
    this.setVisible(!1)
}
Application.subclass(WorldCollisionLayer, WorldTileLayer);
WorldCollisionLayer.prototype.setX = function(a) {
    this.m_x = a
};
WorldCollisionLayer.prototype.setY = function(a) {
    this.m_y = a
};
WorldCollisionLayer.prototype.name = function() {
    return this.m_name
};
WorldCollisionLayer.prototype.tileHeight = function() {
    return this.m_tileHeight
};
WorldCollisionLayer.prototype.addMobilePlatform = function(a) {
    this.m_platforms.push(a)
};
WorldCollisionLayer.prototype.removeMobilePlatform = function(a) {
    a = this.m_platforms.indexOf(a);
    0 <= a && this.m_platforms.splice(a, 1)
};
WorldCollisionLayer.prototype.checkPlatforms = function(a, b, c, d) {
    if (0 < c.y && 0 < d.speed().y && !d.control().isJumpingDown())
        for (c = 0; c < this.m_platforms.length;) {
            d = this.m_platforms[c].getX();
            var e = this.m_platforms[c].bounds().x,
                f = this.m_platforms[c].getY(),
                g = this.m_platforms[c].bounds().y;
            if (a <= d + e + this.m_platforms[c].bounds().w && a >= d + e && b >= f + g && b <= f + g + this.m_platforms[c].bounds().h) return {
                coll: new Vector2D(0, f + g - b),
                platform: this.m_platforms[c]
            };
            ++c
        }
    return null
};
WorldCollisionLayer.prototype.setVisible = function(a) {
    a ? this.m_world.canvas.addChild(this.m_canvas) : this.m_world.canvas.removeChild(this.m_canvas)
};
WorldCollisionLayer.prototype.getCellPosition = function(a, b) {
    return this.getCell(~~(a / this.m_tileWidth), ~~(b / this.m_tileHeight))
};
WorldCollisionLayer.prototype.checkCollision = function(a, b, c, d) {
    this.m_tileX = ~~(a / this.m_tileWidth);
    this.m_tileY = ~~(b / this.m_tileHeight);
    this.m_dy = this.m_dx = 0;
    this.m_sw0 = this.getCell(this.m_tileX, this.m_tileY);
    switch (this.m_sw0) {
        case WorldCollisionLayer.CELL_PLATFORM:
            if (0 < c.y && !d.control().isJumpingUp() && !d.control().isJumpingDown()) {
                if (0 < c.x && this.getCell(this.m_tileX, this.m_tileY - 1) === WorldCollisionLayer.CELL_DIAG_UP_LEFT) return this.m_dy = a - this.m_tileX * this.m_tileWidth, new Vector2D(0, this.m_tileY *
                    this.m_tileHeight - b - this.m_dy);
                if (0 > c.x && this.getCell(this.m_tileX, this.m_tileY - 1) === WorldCollisionLayer.CELL_DIAG_UP_RIGHT) return this.m_dy = (this.m_tileX + 1) * this.m_tileWidth - a, new Vector2D(0, this.m_tileY * this.m_tileHeight - b - this.m_dy);
                if (0 < d.speed().y && this.getCell(this.m_tileX, this.m_tileY - 1) === WorldCollisionLayer.CELL_EMPTY && (d.speed().y >= WorldCollisionLayer.MAX_VY_SPEED_PLATFORM || b - this.m_tileY * this.m_tileHeight <= .5 * this.m_tileHeight)) return new Vector2D(0, this.m_tileY * this.m_tileHeight - b)
            }
            break;
        case WorldCollisionLayer.CELL_HALF_HORIZONTAL:
            this.m_dy = b - (this.m_tileY + .5) * this.m_tileWidth;
            if (0 < this.m_dy) {
                if (0 < c.y && 0 === c.x) return new Vector2D(0, -this.m_dy);
                if (0 === c.y && 0 !== c.x) return d.speed().y >= WorldCollisionLayer.MIN_VY_FRICTION && d.setFallingOverWall(!0), this.m_dx = 0 < c.x ? this.m_tileX * this.m_tileWidth - a : (this.m_tileX + 1) * this.m_tileWidth - a, new Vector2D(this.m_dx, 0)
            }
            break;
        case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
            if (0 < c.y && !d.control().isJumpingUp() && (this.m_dx = a - this.m_tileX * this.m_tileWidth,
                    this.m_dy = b - this.m_tileY * this.m_tileWidth, this.m_dx < this.m_dy && 0 >= c.x)) {
                if (0 === d.control().forceX()) return new Vector2D(0, this.m_dx - this.m_dy);
                this.m_dx = .5 * (this.m_dy - this.m_dx);
                this.m_number = d.control().slopeFriction * this.m_dx;
                return new Vector2D(this.m_dx + this.m_number, -this.m_dx + this.m_number)
            }
            break;
        case WorldCollisionLayer.CELL_HMD_UP_RIGHT:
            if (0 < c.y && !d.control().isJumpingUp() && (this.m_dx = a - this.m_tileX * this.m_tileWidth, this.m_dy = b - this.m_tileY * this.m_tileWidth, this.m_dx < 2 * this.m_dy)) return new Vector2D(0, -b + (.5 * this.m_dx + this.m_tileY * this.m_tileWidth));
            break;
        case WorldCollisionLayer.CELL_MD_UP_RIGHT:
            if (0 < c.y && !d.control().isJumpingUp() && (this.m_dx = a - this.m_tileX * this.m_tileWidth, this.m_dy = b - (this.m_tileY + .5) * this.m_tileWidth, this.m_dx < 2 * this.m_dy)) return new Vector2D(0, -b + (.5 * this.m_dx + (this.m_tileY + .5) * this.m_tileWidth));
            break;
        case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
            if (0 < c.y && !d.control().isJumpingUp() && (this.m_dx = (this.m_tileX + 1) * this.m_tileWidth - a, this.m_dy = b - this.m_tileY * this.m_tileWidth, this.m_dx <
                    this.m_dy && 0 <= c.x)) {
                if (0 === d.control().forceX()) return new Vector2D(0, this.m_dx - this.m_dy);
                this.m_dx = .5 * (this.m_dy - this.m_dx);
                this.m_number = d.control().slopeFriction * this.m_dx;
                return new Vector2D(-this.m_dx - this.m_number, -this.m_dx + this.m_number)
            }
            break;
        case WorldCollisionLayer.CELL_HMD_UP_LEFT:
            if (0 < c.y && !d.control().isJumpingUp() && (this.m_dx = -a + this.m_tileWidth * (this.m_tileX + 1), this.m_dy = b - this.m_tileY * this.m_tileWidth, this.m_dx < 2 * this.m_dy)) return new Vector2D(0, -b + (.5 * this.m_dx + this.m_tileY * this.m_tileWidth));
            break;
        case WorldCollisionLayer.CELL_MD_UP_LEFT:
            if (0 < c.y && !d.control().isJumpingUp() && (this.m_dx = -a + this.m_tileWidth * (this.m_tileX + 1), this.m_dy = b - (this.m_tileY + .5) * this.m_tileWidth, this.m_dx < 2 * this.m_dy)) return new Vector2D(0, -b + (.5 * this.m_dx + (this.m_tileY + .5) * this.m_tileWidth));
            break;
        case WorldCollisionLayer.CELL_FULL:
            if (0 === c.x) return 0 < c.y ? new Vector2D(0, this.m_tileY * this.m_tileHeight - b) : new Vector2D(0, (this.m_tileY + 1) * this.m_tileHeight - b);
            if (0 === c.y)
                if (d.speed().y >= WorldCollisionLayer.MIN_VY_FRICTION &&
                    d.setFallingOverWall(!0), 0 < c.x) {
                    if (this.getCell(this.m_tileX - 1, this.m_tileY) === WorldCollisionLayer.CELL_EMPTY) return new Vector2D(this.m_tileX * this.m_tileWidth - a, 0)
                } else {
                    if (this.getCell(this.m_tileX + 1, this.m_tileY) === WorldCollisionLayer.CELL_EMPTY) return new Vector2D((this.m_tileX + 1) * this.m_tileWidth - a, 0)
                } else if (0 < c.y) switch (this.getCell(this.m_tileX, this.m_tileY - 1)) {
                case WorldCollisionLayer.CELL_MD_UP_LEFT:
                    return this.m_dx = a - this.m_tileX * this.m_tileWidth, this.m_dy = b - (-.5 * this.m_dx + this.m_tileY *
                        this.m_tileHeight), new Vector2D(0, -this.m_dy);
                case WorldCollisionLayer.CELL_MD_UP_RIGHT:
                    return this.m_dx = a - this.m_tileX * this.m_tileWidth, this.m_dy = b - (.5 * this.m_dx + (this.m_tileY - .5) * this.m_tileHeight), new Vector2D(0, -this.m_dy);
                case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
                    return this.m_dx = a - this.m_tileX * this.m_tileWidth, this.m_dy = b - (-1 * this.m_dx + this.m_tileY * this.m_tileHeight), new Vector2D(0, -this.m_dy);
                case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
                    return this.m_dx = a - this.m_tileX * this.m_tileWidth, this.m_dy =
                        b - (1 * this.m_dx + (this.m_tileY - 1) * this.m_tileHeight), new Vector2D(0, -this.m_dy);
                case WorldCollisionLayer.CELL_EMPTY:
                    return this.m_dx = 1E3, 0 < c.x && this.getCell(this.m_tileX - 1, this.m_tileY) === WorldCollisionLayer.CELL_EMPTY ? this.m_dx = this.m_tileX * this.m_tileWidth - a : 0 > c.x && this.getCell(this.m_tileX + 1, this.m_tileY) === WorldCollisionLayer.CELL_EMPTY && (this.m_dx = (this.m_tileX + 1) * this.m_tileWidth - a), this.m_dy = this.m_tileY * this.m_tileHeight - b, Math.abs(this.m_dx) < Math.abs(this.m_dy) ? new Vector2D(this.m_dx, 0) : new Vector2D(0,
                        this.m_dy);
                case WorldCollisionLayer.CELL_FULL:
                    return d.speed().y >= WorldCollisionLayer.MIN_VY_FRICTION && d.setFallingOverWall(!0), 0 < c.x ? new Vector2D(this.m_tileX * this.m_tileWidth - a, 0) : new Vector2D((this.m_tileX + 1) * this.m_tileWidth - a, 0)
            } else switch (this.getCell(this.m_tileX, this.m_tileY + 1)) {
                case WorldCollisionLayer.CELL_EMPTY:
                    return this.m_dx = 1E3, 0 < c.x && this.getCell(this.m_tileX - 1, this.m_tileY) === WorldCollisionLayer.CELL_EMPTY ? this.m_dx = this.m_tileX * this.m_tileWidth - a : 0 > c.x && this.getCell(this.m_tileX +
                        1, this.m_tileY) === WorldCollisionLayer.CELL_EMPTY && (this.m_dx = (this.m_tileX + 1) * this.m_tileWidth - a), this.m_dy = (this.m_tileY + 1) * this.m_tileHeight - b, Math.abs(this.m_dx) < Math.abs(this.m_dy) ? new Vector2D(this.m_dx, 0) : new Vector2D(0, this.m_dy);
                case WorldCollisionLayer.CELL_FULL:
                    return d.speed().y >= WorldCollisionLayer.MIN_VY_FRICTION && d.setFallingOverWall(!0), 0 < c.x ? new Vector2D(this.m_tileX * this.m_tileWidth - a, 0) : new Vector2D((this.m_tileX + 1) * this.m_tileWidth - a, 0)
            }
    }
    return null
};
WorldCollisionLayer.prototype.getMaxFloorRange = function(a, b, c) {
    for (var d = ~~(b / this.m_tileHeight), e = ~~(a / this.m_tileWidth); d < this.m_height;) {
        if (this.getCell(e, d) != WorldCollisionLayer.CELL_EMPTY) {
            for (b = e - 1; this.getCell(b, d) != WorldCollisionLayer.CELL_EMPTY && this.getCell(b, d - 1) === WorldCollisionLayer.CELL_EMPTY && !(a - --b * this.m_tileWidth >= c););
            var f = (b + 1) * this.m_tileWidth;
            for (b = e + 1; this.getCell(b, d) != WorldCollisionLayer.CELL_EMPTY && this.getCell(b, d - 1) === WorldCollisionLayer.CELL_EMPTY && !(++b * this.m_tileWidth -
                    a >= c););
            return new Rectangle(f, d * this.m_tileHeight, b * this.m_tileWidth - f)
        }++d
    }
    Application.warn("getMaxFloorRange: no floor found at x:" + a + " y:" + b);
    return new Rectangle(a, b, 0)
};
WorldCollisionLayer.prototype.getMaxFloorRangeElevations = function(a, b, c) {
    for (var d = ~~(b / this.m_tileHeight), e = ~~(a / this.m_tileWidth); d < this.m_height;) {
        var f = this.getCell(e, d);
        if (f != WorldCollisionLayer.CELL_EMPTY) {
            b = ~~((a - c) / this.m_tileWidth);
            var g = !0,
                h = e,
                k = d;
            do {
                switch (f) {
                    case WorldCollisionLayer.CELL_FULL:
                    case WorldCollisionLayer.CELL_PLATFORM:
                        switch (this.getCell(h - 1, k)) {
                            case WorldCollisionLayer.CELL_EMPTY:
                                g = !1;
                                break;
                            default:
                                switch (this.getCell(h - 1, k - 1)) {
                                    case WorldCollisionLayer.CELL_FULL:
                                        g = !1;
                                        break;
                                    case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
                                        --k
                                }
                        }
                        break;
                    case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
                        switch (this.getCell(h - 1, k + 1)) {
                            case WorldCollisionLayer.CELL_EMPTY:
                                g = !1;
                                break;
                            default:
                                ++k
                        }
                        break;
                    case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
                        switch (this.getCell(h - 1, k - 1)) {
                            case WorldCollisionLayer.CELL_EMPTY:
                                this.getCell(h - 1, k) === WorldCollisionLayer.CELL_EMPTY && (g = !1);
                                break;
                            case WorldCollisionLayer.CELL_FULL:
                                g = !1;
                                break;
                            case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
                                --k
                        }
                        break;
                    case WorldCollisionLayer.CELL_EMPTY:
                        g = !1
                }
                f = this.getCell(--h, k)
            } while (g && h >= b);
            var l = (h + 1) * this.m_tileWidth,
                m = k * this.m_tileHeight,
                g = !0;
            b = ~~((a + c) / this.m_tileWidth);
            ++b;
            h = e;
            k = d;
            f = this.getCell(e, d);
            do {
                switch (f) {
                    case WorldCollisionLayer.CELL_FULL:
                    case WorldCollisionLayer.CELL_PLATFORM:
                        switch (this.getCell(h + 1, k)) {
                            case WorldCollisionLayer.CELL_EMPTY:
                                g = !1;
                                break;
                            default:
                                switch (this.getCell(h + 1, k - 1)) {
                                    case WorldCollisionLayer.CELL_FULL:
                                        g = !1;
                                        break;
                                    case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
                                        --k
                                }
                        }
                        break;
                    case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
                        switch (this.getCell(h +
                            1, k - 1)) {
                            case WorldCollisionLayer.CELL_EMPTY:
                                this.getCell(h + 1, k) === WorldCollisionLayer.CELL_EMPTY && (g = !1);
                                break;
                            case WorldCollisionLayer.CELL_FULL:
                                g = !1;
                                break;
                            case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
                                --k
                        }
                        break;
                    case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
                        switch (this.getCell(h + 1, k + 1)) {
                            case WorldCollisionLayer.CELL_EMPTY:
                                g = !1;
                                break;
                            default:
                                ++k
                        }
                        break;
                    case WorldCollisionLayer.CELL_EMPTY:
                        g = !1
                }
                f = this.getCell(++h, k)
            } while (g && h <= b);
            return new Rectangle(l, m, h * this.m_tileWidth - l, k * this.m_tileHeight - m)
        }++d
    }
    Application.warn("getMaxFloorRange: no floor found at x:" +
        a + " y:" + b);
    return new Rectangle(a, b, 0)
};
WorldCollisionLayer.prototype.getFloorCollision = function(a, b) {
    for (var c = ~~(b / this.m_tileHeight), d = ~~(a / this.m_tileWidth); c < this.m_height;) {
        var e = this.getCell(d, c);
        if (e != WorldCollisionLayer.CELL_EMPTY) {
            switch (e) {
                case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
                case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
                    switch (e) {
                        case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
                            return new Vector2D(a, c * this.m_tileHeight + (d + 1) * this.m_tileWidth - a)
                    }
                    return new Vector2D(a, c * this.m_tileHeight + a - d * this.m_tileWidth)
            }
            return new Vector2D(a,
                c * this.m_tileHeight)
        }++c
    }
    Application.warn("getFloorCollision: no floor found");
    return new Vector2D(a, b)
};
WorldCollisionLayer.prototype.getMaxHeight = function(a, b) {
    var c = ~~(b / this.m_tileHeight),
        d = ~~(a / this.m_tileWidth),
        e = this.getCell(d, c);
    if (e === WorldCollisionLayer.CELL_EMPTY)
        for (; e === WorldCollisionLayer.CELL_EMPTY;) {
            c += 1;
            if (c >= this.m_rows) return -1;
            e = this.getCell(d, c)
        } else {
            for (; 0 <= c - 1 && this.getCell(d, c - 1) !== WorldCollisionLayer.CELL_EMPTY;) --c;
            e = this.getCell(d, c)
        }
    var f = -1;
    switch (e) {
        case WorldCollisionLayer.CELL_HALF_HORIZONTAL:
            f = (c + .5) * this.m_tileHeight;
            break;
        case WorldCollisionLayer.CELL_FULL:
        case WorldCollisionLayer.CELL_PLATFORM:
            f =
                c * this.m_tileHeight;
            break;
        case WorldCollisionLayer.CELL_DIAG_UP_RIGHT:
            this.m_dx = a - d * this.m_tileWidth;
            f = 1 * this.m_dx + c * this.m_tileHeight;
            break;
        case WorldCollisionLayer.CELL_DIAG_UP_LEFT:
            this.m_dx = a - d * this.m_tileWidth;
            f = -1 * this.m_dx + (c + 1) * this.m_tileHeight;
            break;
        case WorldCollisionLayer.CELL_HMD_UP_RIGHT:
            this.m_dx = a - d * this.m_tileWidth;
            f = .5 * this.m_dx + c * this.m_tileHeight;
            break;
        case WorldCollisionLayer.CELL_MD_UP_RIGHT:
            this.m_dx = a - d * this.m_tileWidth;
            f = .5 * this.m_dx + (c + .5) * this.m_tileHeight;
            break;
        case WorldCollisionLayer.CELL_HMD_UP_LEFT:
            this.m_dx =
                a - d * this.m_tileWidth;
            f = -.5 * this.m_dx + (c + .5) * this.m_tileHeight;
            break;
        case WorldCollisionLayer.CELL_MD_UP_LEFT:
            this.m_dx = a - d * this.m_tileWidth, f = -.5 * this.m_dx + (c + 1) * this.m_tileHeight
    }
    return f
};
WorldCollisionLayer.prototype.getTilePosition = function(a, b) {
    return new Point(~~(a / this.m_tileWidth), ~~(b / this.m_tileHeight))
};
WorldCollisionLayer.prototype.getTileBelow = function(a, b, c) {
    var d = 0;
    for (a = ~~(a / this.m_tileWidth); d <= c;) {
        var e = this.getCell(a, ~~(b / this.m_tileHeight));
        if (e != WorldCollisionLayer.CELL_EMPTY) return e;
        b += this.m_tileHeight;
        d += this.m_tileHeight
    }
    return WorldCollisionLayer.CELL_EMPTY
};
WorldCollisionLayer.prototype.getRayCollision = function(a, b, c, d) {
    b = ~~(b / this.m_tileHeight);
    for (c = ~~(a / this.m_tileWidth); b < this.m_height;) {
        if (this.getCell(c, b) != WorldCollisionLayer.CELL_EMPTY) return new Vector2D(a, b * this.m_tileHeight);
        ++b
    }
    return null
};
WorldCollisionLayer.prototype.addTileCell = function(a, b, c, d) {};
WorldCollisionLayer.prototype.initCell = function(a, b) {};
WorldCollisionLayer.prototype.parallaxX = function() {
    return this.m_world.camera().getX()
};
WorldCollisionLayer.prototype.parallaxY = function() {
    return this.m_world.camera().getY()
};
WorldCollisionLayer.prototype.render = function(a) {
    this.m_world.showCollisions && WorldTileLayer.prototype.render.call(this, a);
    GuiGame.instance.canvasEffects.position.x = -this.parallaxX();
    GuiGame.instance.canvasEffects.position.y = -this.parallaxY()
};
WorldCollisionLayer.CELL_EMPTY = 0;
WorldCollisionLayer.CELL_FULL = 1;
WorldCollisionLayer.CELL_DIAG_UP_LEFT = 2;
WorldCollisionLayer.CELL_DIAG_UP_RIGHT = 3;
WorldCollisionLayer.CELL_DIAG_DOWN_RIGHT = 4;
WorldCollisionLayer.CELL_DIAG_DOWN_LEFT = 5;
WorldCollisionLayer.CELL_PLATFORM = 6;
WorldCollisionLayer.CELL_FULL_ICE = 7;
WorldCollisionLayer.CELL_FULL_WATER = 8;
WorldCollisionLayer.CELL_FULL_SAND = 9;
WorldCollisionLayer.CELL_MD_UP_LEFT = 10;
WorldCollisionLayer.CELL_MD_UP_RIGHT = 11;
WorldCollisionLayer.CELL_HMD_UP_LEFT = 12;
WorldCollisionLayer.CELL_HMD_UP_RIGHT = 13;
WorldCollisionLayer.CELL_HALF_HORIZONTAL = 14;
WorldCollisionLayer.COLLISION_SET = "coll_";
WorldCollisionLayer.MIN_VY_FRICTION = -2;
WorldCollisionLayer.MAX_VY_SPEED_PLATFORM = -2;

function PhysicZone(a, b, c, d, e, f) {
    Rectangle.call(this, b - d / 2, c - e / 2, d, e);
    this.type = 0;
    this.active = !1;
    this.params = Common.getParams(f);
    switch (a) {
        case PhysicZone.ID_CLIMB:
            this.type = PhysicZone.CLIMB;
            break;
        case PhysicZone.ID_CAMERA:
            this.type = PhysicZone.CAMERA;
            break;
        case PhysicZone.ID_FLUID:
            this.type = PhysicZone.FLUID;
            break;
        case PhysicZone.ID_FORCE:
            this.type = PhysicZone.FORCE;
            break;
        case PhysicZone.ID_FRICTION:
            this.type = PhysicZone.FRICTION;
            break;
        default:
            Application.error("Invalid physic zone")
    }
}
Application.subclass(PhysicZone, Rectangle);
PhysicZone.CLIMB = 1;
PhysicZone.FLUID = 2;
PhysicZone.FORCE = 3;
PhysicZone.FRICTION = 4;
PhysicZone.CAMERA = 5;
PhysicZone.ID_CLIMB = "climb";
PhysicZone.ID_FLUID = "fluid";
PhysicZone.ID_FORCE = "force";
PhysicZone.ID_CAMERA = "camera";
PhysicZone.ID_FRICTION = "friction";

function WorldMarkerLayer(a, b) {
    WorldBaseLayer.call(this, a, b);
    this.m_width = a.width();
    this.m_height = a.height();
    this.m_type = WorldBaseLayer.TYPE_MARKERS;
    this.actionZones = [];
    this.loadData(b)
}
Application.subclass(WorldMarkerLayer, WorldBaseLayer);
WorldMarkerLayer.ID_PHYSICS = "physics";
WorldMarkerLayer.prototype.loadData = function(a) {
    var b;
    b = a.rectangle.length;
    if (this.m_name == WorldMarkerLayer.ID_PHYSICS)
        for (var c = 0; c < b;) {
            var d = new PhysicZone(a.rectangle[c].type, a.rectangle[c].x, a.rectangle[c].y, a.rectangle[c].w, a.rectangle[c].h, null == a.rectangle[c].params ? "" : a.rectangle[c].params);
            this.actionZones.push(d);
            ++c
        }
};
WorldMarkerLayer.prototype.onDebugDraw = function(a) {
    for (var b = 0; b < this.actionZones.length; b++) ContextGraphics.drawRectangle(a, this.actionZones[b].x - this.m_world.camera().getX(), this.actionZones[b].y - this.m_world.camera().getY(), this.actionZones[b].w, this.actionZones[b].h, 2, Common.COLOR_YELLOW, Common.COLOR_NONE)
};
WorldMarkerLayer.prototype.render = function(a) {
    this.m_world.showCollisions && WorldBaseLayer.prototype.render.call(this, a)
};
WorldMarkerLayer.prototype.free = function() {
    var a = 0;
    if (this.actionZones) {
        for (; a < this.actionZones.length;) this.actionZones[a] = null, ++a;
        this.actionZones = null
    }
    WorldBaseLayer.prototype.free.call(this)
};

function WorldSpriteLayer(a, b) {
    WorldBaseLayer.call(this, a, b);
    this.m_type = WorldBaseLayer.TYPE_SPRITES;
    this.m_actors = [];
    this.m_cameraRect = new Rectangle(0, 0, a.camera().width(), a.camera().height());
    var c = b.width,
        c = this.m_world.width() <= this.m_world.camera().width() ? 1 : (c - this.m_world.camera().width()) / (this.m_world.width() - this.m_world.camera().width()),
        d = b.height,
        d = this.m_world.height() <= this.m_world.camera().height() ? 1 : (d - this.m_world.camera().height()) / (this.m_world.height() - this.m_world.camera().height()),
        e = b.offsetX,
        f = b.offsetY,
        g = new Rectangle(b.left - 2, b.top - 2, b.right - b.left + 4, b.bottom - b.top + 4);
    Application.log("Quadtree bounds " + b.name + ": (" + g.x + ", " + g.y + ", " + g.w + ", " + g.h + ")");
    this.m_quadtree = new QuadTree(g, 0, c, d, e, f);
    for (var g = b.image, h = g.length, k = 0; k < h;) this.readSprite(a, g[k], c, d, e, f, b.name), ++k
}
Application.subclass(WorldSpriteLayer, WorldBaseLayer);
WorldSpriteLayer.prototype.readSprite = function(a, b, c, d, e, f, g) {
    var h = b.x,
        k = b.y;
    a = new SpriteActor(this.m_canvas, a, h, k, c, d, e, f);
    a.m_clip = PoolClips.instance.getClip(b.image);
    a.m_clip.setPosition(this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY());
    d = "undefined" !== typeof b.sx ? b.sx : 1;
    c = "undefined" !== typeof b.sy ? b.sy : 1;
    a.m_clip.setScale(d, c);
    e = "undefined" !== typeof b.rot ? b.rot : 0;
    a.m_clip.rotation = e;
    a.setRangeControlled(!1);
    a.setAlwaysVisible(!1);
    this.m_actors.push(a);
    this.m_canvas.addChild(a.m_clip);
    d = Math.abs(b.w * d);
    var l = Math.abs(b.h * c);
    if (0 === e) k = new NamedRectangle(a, h - d / 2, k - l / 2, d, l);
    else {
        c = Math.cos(e);
        e = Math.sin(e);
        var m = d / 2,
            p = -l / 2,
            n = d / 2,
            q = l / 2,
            r = -d / 2,
            t = l / 2;
        f = -d / 2;
        l = -l / 2;
        d = h + m * c - p * e;
        m = k + m * e + p * c;
        p = h + n * c - q * e;
        n = k + n * e + q * c;
        q = h + r * c - t * e;
        r = k + r * e + t * c;
        h = h + f * c - l * e;
        k = k + f * e + l * c;
        c = Math.min(d, p, q, h);
        e = Math.min(m, n, r, k);
        k = new NamedRectangle(a, c, e, Math.max(d, p, q, h) - c, Math.max(m, n, r, k) - e)
    }
    this.m_quadtree.insert(k) ? a.setQuadtreeRect(k) : Application.log("Sprite " + b.image + " not inserted in layer " + g + "(" + k.x + ", " +
        k.y + ", " + k.w + ", " + k.h + ")")
};
WorldSpriteLayer.prototype.render = function(a) {
    this.m_cameraRect.setLeft(this.m_world.camera().getX());
    this.m_cameraRect.setTop(this.m_world.camera().getY());
    for (var b = [], b = b.concat(this.m_quadtree.query(this.m_cameraRect)), c = this.m_actors.length, d = 0; d < c; d++) {
        var e = this.m_actors[d];
        if (e.isAwaitingDelete()) this.m_quadtree.remove(e.getQuadtreeRect()), e.free(), this.m_actors[d] = null, this.m_actors.splice(d--, 1);
        else if (this.isVisible(b, e)) {
            if (e.isIdle()) e.onIdle(!1);
            e.update(a)
        } else if (!e.isIdle()) e.onIdle(!0)
    }
};
WorldSpriteLayer.prototype.isVisible = function(a, b) {
    if (b.isAlwaysVisible()) return !0;
    for (var c = a.length, d = 0; d < c; d++)
        if (a[d].getObject() === b) return a.splice(d, 1), !0;
    return !1
};
WorldSpriteLayer.prototype.free = function() {
    this.m_quadtree.free();
    this.m_cameraRect = this.m_quadtree = null;
    for (var a = this.m_actors.length, b = 0; b < a; b++) this.m_actors[b].free(), this.m_actors[b] = null;
    this.m_actors = null;
    WorldBaseLayer.prototype.free.call(this)
};
WorldSpriteLayer.prototype.onDebugDraw = function(a) {
    this.m_quadtree.onDebugDraw(a)
};

function Bullet(a) {
    WorldActor.call(this, a.objectCanvas(), a, 0, 0);
    this.m_explosionFx = this.m_skin = "";
    this.m_damage = 0;
    this.m_type = Bullet.TYPE_PLAYER;
    this.m_speed = new Vector2D;
    this.m_gravity = 0;
    this.speedFactor = 1;
    this.m_y0 = this.m_x0 = 0;
    this.m_character = this.fxTrail = null
}
Application.subclass(Bullet, WorldActor);
Bullet.TYPE_PLAYER = 1;
Bullet.TYPE_ENEMY = 2;
Bullet.ST_STAND = "st100";
Bullet.ST_EXPLOSION = "st101";
Bullet.DEFAULT_X_DIFF = 1500;
Bullet.DEFAULT_Y_DIFF = 300;
Bullet.GRAVITY = .0022;
Bullet.prototype.init = function(a, b, c, d, e, f) {
    this.m_skin = a;
    this.m_damage = e;
    this.m_type = f;
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.addState(Bullet.ST_STAND, this.m_skin);
    this.m_character.addState(Bullet.ST_EXPLOSION, b);
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(Bullet.ST_STAND);
    "" !== c && (this.fxTrail = this.m_world.createEffect(c, this.m_x, this.m_y));
    this.m_explosionFx = d
};
Bullet.prototype.createCorners = function() {
    this.updateBounds()
};
Bullet.prototype.gotoState = function(a, b) {
    if (a != this.m_state) switch (WorldActor.prototype.gotoState.call(this, a, b), a) {
        case Bullet.ST_EXPLOSION:
            Application.instance.playSound("SND_MAL_ATTACK")
    }
};
Bullet.prototype.onEndAnimation = function(a) {
    this.m_state === Bullet.ST_EXPLOSION && (this.m_isAwaitingDelete = !0)
};
Bullet.prototype.gotoParabolic = function(a, b, c, d) {
    this.m_x = this.m_x0 = a;
    this.m_y = this.m_y0 = b;
    a = c - a;
    b = d - b;
    d = Math.abs(a) + .4 * b;
    this.m_speed.x = a / d;
    this.m_speed.y = b / d - .5 * Bullet.GRAVITY * d;
    this.m_gravity = Bullet.GRAVITY
};
Bullet.prototype.gotoLinear = function(a, b, c, d) {
    this.m_x = this.m_x0 = a;
    this.m_y = this.m_y0 = b;
    this.m_speed.x = c;
    this.m_speed.y = d;
    this.m_gravity = 0
};
Bullet.prototype.checkCollisions = function() {
    var a = !1;
    switch (this.m_type) {
        case Bullet.TYPE_PLAYER:
            for (var b = this.m_world.actorManager().actors(), c = 0; c < b.length; c++) {
                var d = b[c];
                (d instanceof BaseEnemy || d instanceof BreakableObject) && !d.isIdle() && !d.isAwaitingDelete() && this.hitTest(d) && (d.onHit(this, this.m_damage), a = !0)
            }
            break;
        case Bullet.TYPE_ENEMY:
            this.hitTest(this.m_world.player()) && (this.m_world.player().onHit(this, this.m_damage), a = !0)
    }
    if (this.m_state === Bullet.ST_STAND) {
        if (Math.abs(this.m_x - this.m_x0) >
            Bullet.DEFAULT_X_DIFF || Math.abs(this.m_y - this.m_y0) > Bullet.DEFAULT_Y_DIFF) a = !0;
        if (a = a || this.m_world.getCellPosition(this.m_x, this.m_y) !== WorldCollisionLayer.CELL_EMPTY) this.m_explosionFx && "" !== this.m_explosionFx && this.m_world.createEffect(this.m_explosionFx, this.m_x, this.m_y), this.fxTrail && (this.fxTrail.setStopAndRemove(!0), this.fxTrail = null), this.gotoState(Bullet.ST_EXPLOSION, !1)
    }
};
Bullet.prototype.update = function(a) {
    this.m_character.update(a);
    this.m_state === Bullet.ST_STAND && (this.m_x += a * this.speedFactor * this.m_speed.x, this.m_y += a * this.speedFactor * (this.m_speed.y + a * this.m_gravity / 2), this.m_speed.y += a * this.m_gravity);
    this.fxTrail && (this.fxTrail.x = this.m_x, this.fxTrail.y = this.m_y);
    this.checkCollisions();
    WorldActor.prototype.update.call(this, a)
};
Bullet.prototype.free = function() {
    this.fxTrail && (this.fxTrail.setStopAndRemove(!0), this.fxTrail = null);
    WorldActor.prototype.free.call(this)
};
Bullet.createUmaBullet = function(a, b, c, d) {
    for (var e, f = 900, g = null, h = a.actorManager().actors(), k = 0; k < h.length; k++)
        if (e = h[k], (e instanceof BaseEnemy || e instanceof BreakableObject) && !e.isIdle() && !e.isAwaitingDelete()) {
            var l = Math.abs(b - e.getX()),
                m = Math.abs(c - e.getY());
            (d && e.getX() < b || !d && e.getX() > b) && l < f && m < Bullet.DEFAULT_Y_DIFF && (f = l, g = e)
        }
    g instanceof BossLvl8 && g.m_teleported && (g = null);
    g ? (e = g.getX() + 400 * g.speed().x, e = d ? Math.min(e, b - 100) : Math.max(e, b + 100), d = g.getY() - 60) : (e = b + 400 * (d ? -1 : 1), d = c);
    Math.abs(d -
        c) > Bullet.DEFAULT_Y_DIFF && (d = c + Bullet.DEFAULT_Y_DIFF * (d >= c ? 1 : -1));
    g = new Bullet(a);
    g.init("aniFxMalBullet", "aniFxMalBulletExplotion", "aniFxMalBulletTrail", "aniFxMalBulletHit", 1, Bullet.TYPE_PLAYER);
    g.gotoParabolic(b, c, e, d);
    a.actorManager().add(g)
};
Bullet.createEnemyBullet = function(a, b, c, d, e, f) {
    var g = a.player();
    g.getX();
    g.speed();
    g.getY();
    g = new Bullet(a);
    g.init(d, "aniFxMalBulletExplotion", "", e, 1, Bullet.TYPE_ENEMY);
    g.gotoLinear(b, c, Application.config.misc.enemyBulletSpeed * (f ? -1 : 1), 0);
    g.speedFactor = Application.config.misc.enemyBulletSpeedFactor;
    a.actorManager().add(g)
};

function FlagWin(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_character = new Character(c, d, a);
    this.m_character.addState(FlagWin.ST_STAND, "mcFinishFlag");
    this.gotoState(FlagWin.ST_STAND)
}
Application.subclass(FlagWin, SimpleWorldActor);
FlagWin.ST_STAND = "st01";
FlagWin.ST_RELEASE = "st02";
FlagWin.prototype.update = function(a) {
    this.m_character.update(a);
    SimpleWorldActor.prototype.update.call(this, a);
    this.m_world.player().hitTest(this) && (this.m_world.game().enabledControls = !1, this.m_world.player().m_x >= this.m_x && (!this.m_world.player().markToWin && HudPlatformRunner.instance && Common.tween({
        clip: HudPlatformRunner.instance.canvas,
        alpha: 1
    }, {
        alpha: 0
    }, 3E3, !0), this.m_world.player().markToWin = !0))
};

function Book(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_character = new Character(c, d, a);
    this.m_character.addState(Book.ST_STAND, "mcBookOff");
    this.m_character.addState(Book.ST_RELEASE, "mcBookDrop");
    this.m_character.addState(Book.ST_STAND_RELEASE, "mcBookStand");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(Book.ST_STAND);
    Global.playerSelected == Global.PLAYER_UMA && (this.m_isAwaitingDelete = !0)
}
Application.subclass(Book, SimpleWorldActor);
Book.ST_STAND = "st01";
Book.ST_RELEASE = "st02";
Book.ST_STAND_RELEASE = "st03";
Book.prototype.onEndAnimation = function(a) {
    switch (a) {
        case Book.ST_RELEASE:
            this.gotoState(Book.ST_STAND_RELEASE)
    }
};
Book.prototype.update = function(a) {
    this.m_character.update(a);
    SimpleWorldActor.prototype.update.call(this, a);
    this.m_state == Book.ST_STAND && this.m_world.player().hitTest(this) && this.gotoState(Book.ST_RELEASE)
};

function FlagClipEnd(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_character = new Character(c, d, a);
    this.m_character.addState(FlagClipEnd.ST_STAND, "mcEndlevel" + (Global.playerSelected == Global.PLAYER_UMA ? "Uma" : "Mal"));
    this.gotoState(FlagClipEnd.ST_STAND)
}
Application.subclass(FlagClipEnd, SimpleWorldActor);
FlagClipEnd.ST_STAND = "st01";
FlagClipEnd.prototype.update = function(a) {
    this.m_character.update(a);
    SimpleWorldActor.prototype.update.call(this, a)
};

function CheckPoint(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d);
    switch (Global.map) {
        case 1:
        case 2:
        case 7:
        case 8:
            b = Global.playerSelected === Global.PLAYER_MAL ? "2" : "4";
            break;
        default:
            b = Global.playerSelected === Global.PLAYER_MAL ? "1" : "3"
    }
    this.m_character = new Character(c, d, a);
    this.m_character.addState(CheckPoint.ST_STAND, "mcItemCheckpoint" + b);
    this.m_character.addState(CheckPoint.ST_RELEASE, "mcItemCheckpointActive" + b);
    this.m_character.addState(CheckPoint.ST_RELEASE_STAND, "mcItemCheckpointStand" +
        b);
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(CheckPoint.ST_STAND)
}
Application.subclass(CheckPoint, SimpleWorldActor);
CheckPoint.lastPointSafe = {
    x: 0,
    y: 0
};
CheckPoint.ST_STAND = "st01";
CheckPoint.ST_RELEASE = "st02";
CheckPoint.ST_RELEASE_STAND = "st03";
CheckPoint.reset = function() {
    CheckPoint.lastPointSafe = {
        x: 0,
        y: 0
    }
};
CheckPoint.prototype.onEndAnimation = function(a) {
    a == CheckPoint.ST_RELEASE && this.gotoState(CheckPoint.ST_RELEASE_STAND)
};
CheckPoint.prototype.update = function(a) {
    this.m_character.update(a);
    SimpleWorldActor.prototype.update.call(this, a);
    this.m_state == CheckPoint.ST_STAND && this.m_world.player().hitTest(this) && (this.gotoState(CheckPoint.ST_RELEASE), CheckPoint.lastPointSafe.x = this.m_x, CheckPoint.lastPointSafe.y = this.m_y, this.m_world.m_game.showMessage(PlatformGameRunner.MESSAGE_CHECKPOINT), this.m_world.createEffect(Global.playerSelected == Global.PLAYER_MAL ? "aniFxEndLevelCelebrateMal" : "aniFxEndLevelCelebrateUma", this.m_x + 40,
        this.m_y - 200), Application.instance.playSound("SND_CHECKPOINT"))
};

function Pole(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_appearType = e.appearType;
    this.m_skin = "mcPole4";
    switch (Global.map) {
        case 1:
        case 2:
            this.m_skin = "mcPole4";
            break;
        case 3:
        case 4:
            this.m_skin = "mcPole2";
            break;
        case 5:
        case 6:
            this.m_skin = "mcPole1";
            break;
        case 7:
        case 8:
            this.m_skin = "mcPole3";
            break;
        case 0:
            this.m_skin = Global.playerSelected === Global.PLAYER_MAL ? "mcPole4" : "mcPole1"
    }
    this.m_character = new Character(c, d, a);
    this.m_character.addState(Pole.ST_STAND, this.m_skin);
    this.m_character.addState(Pole.ST_OFF,
        "mcGuiItemMalOff");
    switch (this.m_appearType) {
        case 0:
        case 2:
            this.gotoState(Pole.ST_STAND);
            break;
        case 1:
            this.gotoState(Pole.ST_OFF)
    }
}
Application.subclass(Pole, SimpleWorldActor);
Pole.ST_STAND = "st01";
Pole.ST_OFF = "st02";
Pole.FIX_HEIGTH = -110;
Pole.prototype.onAdrenalinaActivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(Pole.ST_OFF);
            break;
        case 1:
            this.gotoState(Pole.ST_STAND)
    }
};
Pole.prototype.onAdrenalinaDeactivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(Pole.ST_STAND);
            break;
        case 1:
            this.gotoState(Pole.ST_OFF)
    }
};
Pole.prototype.update = function(a) {
    this.m_character.update(a);
    switch (this.m_state) {
        case Pole.ST_STAND:
            !this.m_world.player().control().isJumpingUp() && this.m_world.player().hitTest(this) && 65 < this.m_y - this.m_world.player().getY() && (this.m_world.player().m_y = this.m_y + Pole.FIX_HEIGTH, this.m_world.player().m_x = this.m_x, this.m_world.player().onPoleCollision())
    }
    SimpleWorldActor.prototype.update.call(this, a)
};
Pole.prototype.isInCamera = function(a) {
    return this.m_x + this.m_bounds.x > a.m_x && this.m_x + this.m_bounds.w < a.m_x + a.m_width && this.m_y + this.m_bounds.y > a.m_y && this.m_y + this.m_bounds.h < a.m_y + a.m_height
};

function SwingPole(a, b, c, d, e) {
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_appearType = e.appearType;
    this.m_skin = "mcSwingPole4";
    switch (Global.map) {
        case 1:
        case 2:
            this.m_skin = "mcSwingPole4";
            break;
        case 3:
        case 4:
            this.m_skin = "mcSwingPole2";
            break;
        case 5:
        case 6:
            this.m_skin = "mcSwingPole1";
            break;
        case 7:
        case 8:
            this.m_skin = "mcSwingPole3";
            break;
        case 0:
            this.m_skin = Global.playerSelected === Global.PLAYER_MAL ? "mcSwingPole4" : "mcSwingPole1"
    }
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.addState(SwingPole.ST_ON,
        this.m_skin);
    this.m_character.addState(SwingPole.ST_OFF, "mcGuiItemMalOff");
    switch (this.m_appearType) {
        case 0:
        case 2:
            this.gotoState(SwingPole.ST_ON);
            break;
        case 1:
            this.gotoState(SwingPole.ST_OFF)
    }
}
Application.subclass(SwingPole, SimpleWorldActor);
SwingPole.ST_ON = "st100";
SwingPole.ST_OFF = "st101";
SwingPole.prototype.onAdrenalinaActivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(SwingPole.ST_OFF);
            break;
        case 1:
            this.gotoState(SwingPole.ST_ON)
    }
};
SwingPole.prototype.onAdrenalinaDeactivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(SwingPole.ST_ON);
            break;
        case 1:
            this.gotoState(SwingPole.ST_OFF)
    }
};
SwingPole.prototype.update = function(a) {
    this.m_character.update(a);
    switch (this.m_state) {
        case SwingPole.ST_ON:
            if (this.m_world.player().hitTest(this) && 65 < this.m_world.player().getY() - this.m_y) this.m_world.player().onSwingPoleCollision(this.m_x, this.m_y, 60 * Math.PI / 180, 150, 100)
    }
    SimpleWorldActor.prototype.update.call(this, a)
};
SwingPole.prototype.isInCamera = function(a) {
    return this.m_x + this.m_bounds.x > a.m_x && this.m_x + this.m_bounds.w < a.m_x + a.m_width && this.m_y + this.m_bounds.y > a.m_y && this.m_y + this.m_bounds.h < a.m_y + a.m_height
};

function Spring(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_data = e;
    this.m_appearType = e.appearType;
    b = Math.atan2(Math.abs(this.m_data.speedY), this.m_data.speedX);
    this.m_skin = "mcItemSpring" + e.skin + (b < 85 * Math.PI / 180 ? "2" : b < 95 * Math.PI / 180 ? "1" : "3");
    this.m_character = new Character(c, d, a);
    this.m_character.addState(Spring.ST_STAND, this.m_skin + "Off");
    this.m_character.addState(Spring.ST_STAND_ACTIVE, this.m_skin + "Stand");
    this.m_character.addState(Spring.ST_RELEASE, this.m_skin +
        "Active");
    this.m_character.addState(Spring.ST_OFF, "mcGuiItemMalOff");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    switch (this.m_appearType) {
        case 0:
        case 2:
            this.gotoState(Spring.ST_STAND);
            break;
        case 1:
            this.gotoState(Spring.ST_OFF)
    }
}
Application.subclass(Spring, SimpleWorldActor);
Spring.ST_STAND = "st01";
Spring.ST_STAND_ACTIVE = "st02";
Spring.ST_RELEASE = "st03";
Spring.ST_OFF = "st04";
Spring.prototype.onEndAnimation = function(a) {
    switch (a) {
        case Spring.ST_RELEASE:
            this.gotoState(Spring.ST_STAND)
    }
};
Spring.prototype.onAdrenalinaActivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(Spring.ST_OFF);
            break;
        case 1:
            this.gotoState(Spring.ST_STAND)
    }
};
Spring.prototype.onAdrenalinaDeactivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(Spring.ST_STAND);
            break;
        case 1:
            this.gotoState(Spring.ST_OFF)
    }
};
Spring.prototype.update = function(a) {
    this.m_character.update(a);
    switch (this.m_state) {
        case Spring.ST_STAND:
            this.m_world.player().hitTest(this) && this.gotoState(Spring.ST_STAND_ACTIVE);
            break;
        case Spring.ST_STAND_ACTIVE:
            this.m_world.player().hitTest(this) ? this.m_world.player().isJumping() && this.m_world.player().control().isJumpingUp() && (this.m_world.player().onSpringCollision(this.m_data.speedX, this.m_data.speedY), this.gotoState(Spring.ST_RELEASE, !1)) : this.gotoState(Spring.ST_STAND)
    }
    SimpleWorldActor.prototype.update.call(this,
        a)
};

function Teleporter(a, b, c, d, e, f) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d, f);
    this.gotoDoor = null;
    this.params = Common.getParams(e.params);
    this.doorId = parseInt(this.params.door, 10);
    this.gotoId = parseInt(this.params["goto"], 10);
    this.playerId = parseInt(this.params.player, 10);
    this.action = parseInt(this.params.action, 10);
    this.nameFxDisppear = this.nameFxAppear = "";
    this.m_character = new Character(c, d, a);
    this.playerId === Global.PLAYER_MAL ? (this.nameFxAppear = "mcItemMalTeleportAppear", this.nameFxDisppear = "mcItemMalTeleportDisappear",
        this.m_character.addState(Teleporter.ST_OFF_STAND, "mcItemMalTeleportOff"), this.m_character.addState(Teleporter.ST_OPEN_STAND, "mcItemMalTeleportStand"), this.m_character.addState(Teleporter.ST_CLOSE_STAND, "mcItemMalTeleportStand"), this.m_character.addState(Teleporter.ST_OPEN, "mcItemMalTeleportOpen"), this.m_character.addState(Teleporter.ST_CLOSE, "mcItemMalTeleportClose")) : this.playerId === Global.PLAYER_UMA && (this.nameFxAppear = "mcItemUmaTeleportAppear", this.nameFxDisppear = "mcItemUmaTeleportDisappear",
        this.m_character.addState(Teleporter.ST_OFF_STAND, "mcItemUmaTeleportOff"), this.m_character.addState(Teleporter.ST_OPEN_STAND, "mcItemUmaTeleportStand"), this.m_character.addState(Teleporter.ST_CLOSE_STAND, "mcItemUmaTeleportStand"), this.m_character.addState(Teleporter.ST_OPEN, "mcItemUmaTeleportOpen"), this.m_character.addState(Teleporter.ST_CLOSE, "mcItemUmaTeleportClose"));
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.action == Teleporter.ACTION_BOTH && this.gotoState(Teleporter.ST_OPEN_STAND);
    this.action == Teleporter.ACTION_IN ? this.gotoState(Teleporter.ST_OPEN_STAND) : this.action == Teleporter.ACTION_OUT && this.gotoState(Teleporter.ST_CLOSE_STAND);
    this.updateBounds();
    this.playerId !== Global.playerSelected && (this.m_isAwaitingDelete = !0)
}
Application.subclass(Teleporter, SimpleWorldActor);
Teleporter.ACTION_BOTH = 0;
Teleporter.ACTION_IN = 1;
Teleporter.ACTION_OUT = 2;
Teleporter.ST_OFF_STAND = "st00";
Teleporter.ST_OPEN_STAND = "st01";
Teleporter.ST_CLOSE_STAND = "st02";
Teleporter.ST_OPEN = "st03";
Teleporter.ST_CLOSE = "st04";
Teleporter.ST_NONE = "st05";
Teleporter.prototype.onEndAnimation = function(a) {};
Teleporter.prototype.onEndZoomIn = function() {
    GuiGame.instance.fadeOut(this, this.onFadeOut)
};
Teleporter.prototype.onFadeOut = function() {
    this.gotoDoor && (this.m_world.player().goTeleportPosition(this.gotoDoor.getX(), this.gotoDoor.getY()), this.m_world.camera().lookAtPlayer(), this.m_world.update(0), this.action == Teleporter.ACTION_BOTH && this.gotoState(Teleporter.ST_CLOSE_STAND))
};
Teleporter.prototype.onFadeIn = function() {
    GuiGame.instance.zoomOutScale(500, .5, this, this.onEndZoomOut);
    if (this.action == Teleporter.ACTION_BOTH && this.m_world.player().enableRushMode) this.m_world.onAdrenalinaActivatedFix()
};
Teleporter.prototype.onEndZoomOut = function() {
    this.m_world.game().onStart();
    this.m_world.player().pausedAdrenalineTimer = !1;
    GuiGame.instance.zoomOutScale(500)
};
Teleporter.prototype.endFxAppear = function() {
    this.gotoState(Teleporter.ST_OPEN_STAND)
};
Teleporter.prototype.update = function(a) {
    this.m_character.update(a);
    SimpleWorldActor.prototype.update.call(this, a);
    switch (this.m_state) {
        case Teleporter.ST_OFF_STAND:
            Global.playerSelected == this.playerId && this.m_world.player().enableRushMode && 300 > Math.abs(this.m_world.player().m_x - this.m_x) && (this.m_state = Teleporter.ST_NONE, this.m_world.createEffect(this.nameFxAppear, this.m_x, this.m_y).onComplete(this, this.endFxAppear), this.m_world.player().pausedAdrenalineTimer = !0);
            break;
        case Teleporter.ST_OPEN_STAND:
            Global.playerSelected ==
                this.playerId && !this.m_world.player().m_control.m_isJumping && 40 > Math.abs(this.m_world.player().m_x - this.m_x) && 20 > Math.abs(this.m_world.player().m_y - this.m_y) && (this.gotoState(Teleporter.ST_OPEN), this.m_world.player().stop(), GuiGame.instance.zoomIn(500, this, this.onEndZoomIn), this.m_world.player().pausedAdrenalineTimer = !0);
            break;
        case Teleporter.ST_CLOSE_STAND:
            Global.playerSelected == this.playerId && this.m_world.player().hitTest(this) && (this.gotoState(Teleporter.ST_CLOSE), GuiGame.instance.fadeIn(this,
                this.onFadeIn))
    }
};
Teleporter.prototype.free = function() {
    this.gotoDoor = this.params = null;
    SimpleWorldActor.prototype.free.call(this)
};

function ItemRunner(a, b, c, d, e) {
    SimpleWorldActor.call(this, a, b, c, d);
    this.setScale(.7);
    this.m_type = e.id;
    this.m_appearType = e.appearType;
    this.m_onAdrenalineMode = !1;
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.followPlayer = !1;
    this.speedFollow = .2;
    this.a = this.ady = this.adx = this.dy = this.dx = 0;
    switch (this.m_type) {
        case ActorManagerPlatformRunner.ITEM_HEALTH:
            this.m_character.addState(ItemRunner.ST_ITEM_STAND, "mcGuiItemHealth");
            this.gotoState(ItemRunner.ST_ITEM_STAND);
            break;
        case ActorManagerPlatformRunner.ITEM_HEALTH_SMALL:
            this.m_character.addState(ItemRunner.ST_ITEM_STAND, "mcGuiItemHealthSmall");
            this.gotoState(ItemRunner.ST_ITEM_STAND);
            break;
        case ActorManagerPlatformRunner.ITEM_MAL:
        case ActorManagerPlatformRunner.ITEM_UMA:
            switch (a = Global.playerSelected === Global.PLAYER_MAL ? "mcGuiItemMal" : "mcGuiItemUma", this.m_appearType) {
                case 0:
                case 2:
                    this.m_character.addState(ItemRunner.ST_ITEM_STAND, a);
                    this.m_character.addState(ItemRunner.ST_ITEM_OFF, a + "Off");
                    this.m_character.addState(ItemRunner.ST_ITEM_APPEAR,
                        a + "Appear");
                    this.gotoState(ItemRunner.ST_ITEM_STAND);
                    Global.totalItems++;
                    break;
                case 1:
                    this.m_character.addState(ItemRunner.ST_ITEM_STAND, a + "Special" + (Application.isLowDevice ? "SD" : "")), this.m_character.addState(ItemRunner.ST_ITEM_OFF, a + "SpecialOff"), this.m_character.addState(ItemRunner.ST_ITEM_APPEAR, a + "SpecialAppear"), this.gotoState(ItemRunner.ST_ITEM_OFF), 8 == Global.map ? Global.totalItems++ : this.m_type === ActorManagerPlatformRunner.ITEM_MAL && Global.playerSelected === Global.PLAYER_UMA || this.m_type ===
                        ActorManagerPlatformRunner.ITEM_UMA && Global.playerSelected === Global.PLAYER_MAL ? this.m_isAwaitingDelete = !0 : Global.totalItems++
            }
    }
}
Application.subclass(ItemRunner, SimpleWorldActor);
ItemRunner.ST_ITEM_STAND = "st100";
ItemRunner.ST_ITEM_OFF = "st101";
ItemRunner.ST_ITEM_APPEAR = "st102";
ItemRunner.prototype.createCorners = function() {
    this.updateBounds()
};
ItemRunner.prototype.onAdrenalinaActivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(ItemRunner.ST_ITEM_OFF);
            break;
        case 1:
            this.m_state === ItemRunner.ST_ITEM_OFF && this.gotoState(ItemRunner.ST_ITEM_APPEAR);
            break;
        case 2:
            this.m_character.addState(ItemRunner.ST_ITEM_STAND, (Global.playerSelected === Global.PLAYER_MAL ? "mcGuiItemMal" : "mcGuiItemUma") + "Special" + (Application.isLowDevice ? "SD" : "")), this.characterGotoState(ItemRunner.ST_ITEM_STAND)
    }
    this.m_onAdrenalineMode = !0
};
ItemRunner.prototype.onAdrenalinaDeactivated = function() {
    switch (this.m_appearType) {
        case 0:
            this.gotoState(ItemRunner.ST_ITEM_STAND);
            break;
        case 1:
            this.m_state !== ItemRunner.ST_ITEM_STAND && this.m_state !== ItemRunner.ST_ITEM_APPEAR || this.gotoState(ItemRunner.ST_ITEM_OFF);
            break;
        case 2:
            this.m_character.addState(ItemRunner.ST_ITEM_STAND, Global.playerSelected === Global.PLAYER_MAL ? "mcGuiItemMal" : "mcGuiItemUma"), this.characterGotoState(ItemRunner.ST_ITEM_STAND)
    }
    this.m_onAdrenalineMode = !1
};
ItemRunner.prototype.onEndAnimation = function(a) {
    switch (a) {
        case ItemRunner.ST_ITEM_APPEAR:
            this.gotoState(ItemRunner.ST_ITEM_STAND)
    }
};
ItemRunner.prototype.collect = function(a) {
    var b = "";
    switch (this.m_type) {
        case ActorManagerPlatformRunner.ITEM_HEALTH:
            Application.instance.playSound("SND_HEALTH");
            this.m_world.player().addHealth(Application.config.misc.healthRecover);
            this.m_world.createEffect("aniFxPickHealthFull", this.m_x, this.m_y);
            b = "guiFxPickHealthTrail";
            BossItemAppear.instance && BossItemAppear.instance.playerCollected();
            break;
        case ActorManagerPlatformRunner.ITEM_HEALTH_SMALL:
            Application.instance.playSound("SND_HEALTH_SMALL");
            this.m_world.player().addHealth(Application.config.misc.smallHealthRecover);
            this.m_world.createEffect("aniFxPickHealthMid", this.m_x, this.m_y);
            b = "guiFxPickHealthTrail";
            break;
        case ActorManagerPlatformRunner.ITEM_MAL:
        case ActorManagerPlatformRunner.ITEM_UMA:
            Application.instance.playSound(this.m_onAdrenalineMode ? "SND_ITEM_MAL_SPECIAL" : "SND_ITEM_MAL"), Global.itemsCollected += this.m_onAdrenalineMode ? Application.config.misc.itemRushValue : 1, HudPlatformRunner.instance.setItemsCollected(Global.itemsCollected), AchievementManager.instance.onItemCollected(this.m_onAdrenalineMode ? Application.config.misc.itemRushValue :
                1), Global.playerSelected === Global.PLAYER_UMA ? (this.m_world.createEffect(Application.isLowDevice ? "aniFxCountCollectibleSD" : "aniFxCountCollectibleUma", this.m_x, this.m_y), b = "aniFxPickCollectibleUma") : (this.m_world.createEffect(Application.isLowDevice ? "aniFxCountCollectibleSD" : "aniFxCountCollectibleMal", this.m_x, this.m_y), b = "aniFxPickCollectibleMal")
    }
    var c = PoolClips.instance.getClip(this.m_character.states[ItemRunner.ST_ITEM_STAND]);
    c.scale.x = c.scale.y = this.m_scale;
    HudPlatformRunner.instance.onItemCollected(this.m_type,
        c, this.m_clip.position.x, this.m_clip.position.y, b, a);
    this.m_isAwaitingDelete = !0
};
ItemRunner.prototype.update = function(a) {
    SimpleWorldActor.prototype.update.call(this, a);
    if (this.isInCamera(this.m_world.m_camera)) switch (this.m_character.update(a), this.m_state) {
        case ItemRunner.ST_ITEM_STAND:
            var b = this.m_world.m_player.m_y - 75;
            this.dx = this.m_world.m_player.m_x - this.m_x;
            this.dy = b - this.m_y;
            this.adx = 0 > this.dx ? -this.dx : this.dx;
            this.ady = 0 > this.dy ? -this.dy : this.dy;
            80 > this.adx && 80 > this.ady && (this.followPlayer = !0);
            this.followPlayer && (this.speedFollow += .005 * a, this.a = Math.atan2(this.dy, this.dx),
                this.m_x += this.speedFollow * a * Math.cos(this.a), this.m_y += this.speedFollow * a * Math.sin(this.a));
            (this.m_world.player().hitTest(this) || 30 > this.adx && 30 > this.ady) && this.collect(0)
    }
};
ItemRunner.prototype.isInCamera = function(a) {
    return this.m_x + this.m_bounds.x > a.m_x && this.m_x + this.m_bounds.w < a.m_x + a.m_width && this.m_y + this.m_bounds.y > a.m_y && this.m_y + this.m_bounds.h < a.m_y + a.m_height
};

function StoppingPlace(a, b, c, d) {
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.addState(StoppingPlace.ST_STAND, "mcPlatformPause");
    this.gotoState(StoppingPlace.ST_STAND);
    this.m_stoppingState = StoppingPlace.ST_WAIT_COLLISION
}
Application.subclass(StoppingPlace, SimpleWorldActor);
StoppingPlace.ST_STAND = "st100";
StoppingPlace.ST_WAIT_COLLISION = 0;
StoppingPlace.ST_COLLISION = 1;
StoppingPlace.ST_STOPPED = 2;
StoppingPlace.STOP_OFFSET = 30;
StoppingPlace.prototype.update = function(a) {
    this.m_character.update(a);
    switch (this.m_stoppingState) {
        case StoppingPlace.ST_WAIT_COLLISION:
            this.m_world.player().isJumping() || !this.hitTest(this.m_world.player()) || this.m_world.player().flipX() || (Application.log("StoppingPlace.update >> enabledControls:false "), this.m_world.game().enabledControls = !1, this.m_stoppingState = StoppingPlace.ST_COLLISION);
            break;
        case StoppingPlace.ST_COLLISION:
            this.m_world.player().getX() >= this.m_x + StoppingPlace.STOP_OFFSET && (Application.instance.playSound("SND_STOP"),
                this.m_world.player().stop(), this.m_world.game().enabledControls = !0, this.m_stoppingState = StoppingPlace.ST_STOPPED);
            break;
        case StoppingPlace.ST_STOPPED:
            this.hitTest(this.m_world.player()) || (this.m_stoppingState = StoppingPlace.ST_WAIT_COLLISION)
    }
    SimpleWorldActor.prototype.update.call(this, a)
};

function Spike(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_character = new Character(c, d, a);
    this.m_character.addState(Spike.ST_STAND, "mcHazard_spikes");
    this.gotoState(Spike.ST_STAND)
}
Application.subclass(Spike, SimpleWorldActor);
Spike.ST_STAND = "st01";
Spike.prototype.update = function(a) {
    this.m_character.update(a);
    switch (this.m_state) {
        case Spike.ST_STAND:
            this.m_world.player().state() !== Player.ST_PLAYER_HIT && this.m_world.player().hitTest(this) && this.m_world.player().onHit(this, Application.config.misc.spikeDamage) && Application.instance.playSound("SND_SPIKE")
    }
    SimpleWorldActor.prototype.update.call(this, a)
};

function ItemClip(a, b, c, d, e, f, g, h) {
    this.m_isAwaitingDelete = !1;
    h = Common.getParams(h);
    1 === parseInt(h.fixed, 10) && (d = b.fixedPositionY(c, d));
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_clip = PoolClips.instance.getClip(h.name);
    this.m_clip.setPosition(this.m_x - this.m_world.m_camera.m_x, this.m_y - this.m_world.m_camera.m_y);
    this.m_clip.setScale(e, f);
    this.m_clip.rotation = g;
    this.m_canvas.addChild(this.m_clip);
    this.m_clip.blendMode = parseInt(h.blend, 10);
    this.enableHit = this.m_clip.getCollision && this.m_clip.getCollision("mcCollision") ?
        !0 : !1
}
Application.subclass(ItemClip, SimpleWorldActor);
ItemClip.prototype.update = function(a) {
    this.m_clip && (this.m_clip.position.x = this.m_x - this.m_world.m_camera.m_x, this.m_clip.position.y = this.m_y - this.m_world.m_camera.m_y, this.m_clip.update && this.m_clip.update(a), this.enableHit && !this.m_world.m_player.m_control.m_isJumping && 1 == this.m_clip.currentFrame && this.m_clip.hitTest(this.m_world.m_player.m_clip) && this.m_clip.gotoAndPlay(2))
};

function Geyser(a, b, c, d, e) {
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_delay = e.delay;
    this.m_character = new Character(c, d, a);
    this.m_character.addState(Geyser.ST_STAND, "mcHazard_geiser");
    this.m_character.addState(Geyser.ST_HIT, "mcHazard_geiser_hit");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(Geyser.ST_STAND);
    this.m_motionController = new MotionController(this.m_x, this.m_y, new DataMovement(e.moveParams, e.movement));
    this.m_motionController.startMotion(this, null, this.onNextMovement);
    this.m_isRangeControlled = !1
}
Application.subclass(Geyser, SimpleWorldActor);
Geyser.ST_STAND = "st01";
Geyser.ST_HIT = "st02";
Geyser.prototype.onEndAnimation = function(a) {
    switch (a) {
        case Geyser.ST_HIT:
            this.m_isAwaitingDelete = !0
    }
};
Geyser.prototype.onNextMovement = function(a) {
    a.type() !== Movement.TYPE_DEFAULT && this.isInCamera(this.m_world.m_camera) && Application.instance.playSound("SND_GEYSER")
};
Geyser.prototype.update = function(a) {
    if (0 < this.m_delay) this.m_delay -= a;
    else {
        this.m_character.update(a);
        switch (this.m_state) {
            case Geyser.ST_STAND:
                if (this.m_motionController && (this.m_motionController.update(a), this.m_x = this.m_motionController.getX(), this.m_y = this.m_motionController.getY()), this.isInCamera(this.m_world.m_camera) && this.m_world.player().state() !== Player.ST_PLAYER_HIT && this.m_world.player().hitTest(this)) {
                    if (12 < this.m_y - this.m_world.player().getY()) this.m_world.player().m_y = this.m_y - 27,
                        this.m_world.player().onEnemyStompCollision(!0);
                    else this.m_world.player().onHit(this, Application.config.misc.geiserDamage);
                    this.gotoState(Geyser.ST_HIT);
                    Application.instance.playSound("SND_BARREL_EXP");
                    this.m_world.createEffect("aniFxBarrelExplode", this.m_x, this.m_y)
                }
        }
        SimpleWorldActor.prototype.update.call(this, a)
    }
};
Geyser.prototype.free = function() {
    this.m_motionController.free();
    this.m_motionController = null;
    SimpleWorldActor.prototype.free.call(this)
};
Geyser.prototype.isInCamera = function(a) {
    return this.m_x + this.m_bounds.w > a.getX() && this.m_x + this.m_bounds.x < a.getX() + a.width() && this.m_y + this.m_bounds.h > a.getY() && this.m_y + this.m_bounds.y < a.getY() + a.height() + 250
};

function MovingHazard(a, b, c, d, e) {
    WorldActor.call(this, a, b, c, d);
    this.m_data = e;
    this.m_character = new Character(c, d, a);
    this.m_character.addState(MovingHazard.ST_STAND, "mcHazard_moving");
    this.m_character.addState(MovingHazard.ST_HIT, "mcHazard_moving_hit");
    this.m_character.addState(MovingHazard.ST_APPEAR, "mcHazard_moving_appear");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(MovingHazard.ST_STAND);
    this.setFlipX(e.flipX);
    this.m_motionController = new MotionController(this.m_x, this.m_y,
        new DataMovement(this.m_data.moveParams, this.m_data.movement))
}
Application.subclass(MovingHazard, WorldActor);
MovingHazard.ST_STAND = "st01";
MovingHazard.ST_HIT = "st02";
MovingHazard.ST_APPEAR = "st03";
MovingHazard.prototype.createCorners = function() {
    this.updateBounds()
};
MovingHazard.prototype.gotoState = function(a, b) {
    WorldActor.prototype.gotoState.call(this, a, b);
    if (a === MovingHazard.ST_APPEAR) {
        var c = this.m_world.getMaxHeight(this.m_x, this.m_y);
        this.m_world.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "aniFxTeleportUma" : "aniFxTeleportMal", this.m_x, c)
    }
};
MovingHazard.prototype.onEndAnimation = function(a) {
    switch (a) {
        case MovingHazard.ST_APPEAR:
            this.gotoState(MovingHazard.ST_STAND);
            break;
        case MovingHazard.ST_HIT:
            this.m_isAwaitingDelete = !0
    }
};
MovingHazard.prototype.onEndMovement = function() {
    this.isInCamera(this.m_world.m_camera) ? (this.gotoState(MovingHazard.ST_HIT), Application.instance.playSound("SND_BARREL_EXP"), this.m_world.createEffect("aniFxBarrelExplode", this.m_x, this.m_y)) : this.m_isAwaitingDelete = !0
};
MovingHazard.prototype.update = function(a) {
    this.m_character.update(a);
    switch (this.m_state) {
        case MovingHazard.ST_STAND:
            if (this.m_motionController && (this.m_motionController.isStarted() ? (this.m_motionController.update(a), this.m_x = this.m_motionController.getX(), this.m_y = this.m_motionController.getY()) : this.isInCamera(this.m_world.m_camera) && (this.m_motionController.startMotion(this, this.onEndMovement, null), Application.instance.playSound("SND_BARREL_PROJECTILE"))), this.m_world.player().state() !== Player.ST_PLAYER_HIT &&
                this.m_world.player().hitTest(this)) {
                if (12 < this.m_y - this.m_world.player().getY()) this.m_world.player().m_y = this.m_y - 25, this.m_world.player().onEnemyStompCollision();
                else this.m_world.player().onHit(this, Application.config.misc.movingHazardDamage);
                this.gotoState(MovingHazard.ST_HIT);
                Application.instance.playSound("SND_BARREL_EXP");
                this.m_world.createEffect("aniFxBarrelExplode", this.m_x, this.m_y);
                this.m_motionController.free();
                this.m_motionController = null
            }
    }
    WorldActor.prototype.update.call(this, a)
};
MovingHazard.prototype.free = function() {
    this.m_motionController && (this.m_motionController.free(), this.m_motionController = null);
    WorldActor.prototype.free.call(this)
};

function BreakableObject(a, b, c, d, e) {
    WorldActor.call(this, a, b, c, d);
    this.m_speed = new Vector2D;
    this.m_itemsToDrop = [];
    e.params.split(";").forEach(function(a) {
        var b = a.split(":");
        a = {
            health: ActorManagerPlatformRunner.ITEM_HEALTH,
            smallHealth: ActorManagerPlatformRunner.ITEM_HEALTH_SMALL,
            collectible: ActorManagerPlatformRunner.ITEM_MAL
        }[b[0]];
        for (var b = parseInt(b[1], 10), c = 0; c < b; c++) {
            var d = new NpcPlatformRunner;
            d.id = a;
            d.x = this.m_x;
            d.y = this.m_y;
            d.appearType = 0;
            this.m_itemsToDrop.push(new ItemRunner(this.m_world.objectCanvas(),
                this.m_world, d.x, d.y, d))
        }
    }, this);
    this.m_character = new Character(c, d, a);
    this.m_character.addState(BreakableObject.ST_STAND, "mcItemBreakable_01_stand");
    this.m_character.addState(BreakableObject.ST_BREAK, "mcItemBreakable_01_break");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(BreakableObject.ST_STAND)
}
Application.subclass(BreakableObject, WorldActor);
BreakableObject.ST_STAND = "st01";
BreakableObject.ST_BREAK = "st02";
BreakableObject.prototype.createCorners = function() {
    this.updateBounds()
};
BreakableObject.prototype.onEndAnimation = function(a) {
    a === BreakableObject.ST_BREAK && (this.m_isAwaitingDelete = !0)
};
BreakableObject.prototype.onHit = function(a, b) {
    if (this.m_state === BreakableObject.ST_BREAK) return !1;
    this.gotoState(BreakableObject.ST_BREAK, !1);
    for (var c = 0; c < this.m_itemsToDrop.length; c++) {
        var d = this.m_itemsToDrop[c];
        d.m_character.setPosition(this.m_clip.position.x, this.m_clip.position.y);
        d.collect(150 * c);
        d.free()
    }
    return !0
};
BreakableObject.prototype.update = function(a) {
    this.m_character.update(a);
    switch (this.m_state) {
        case BreakableObject.ST_STAND:
            !this.m_world.player().control().isJumpingUp() && this.m_world.player().hitTest(this) && 20 < this.m_y - this.m_world.player().getY() && (this.m_world.player().onBreakableStompCollision(), this.onHit(this.m_world.player(), 1))
    }
    WorldActor.prototype.update.call(this, a)
};

function MobilePlatformUma(a, b, c, d, e) {
    MobilePlatform.call(this, a, b, c, d, e)
}
Application.subclass(MobilePlatformUma, MobilePlatform);
MobilePlatformUma.OFF_STAND = "st1";
MobilePlatformUma.ON = "st2";
MobilePlatformUma.UP = "st3";
MobilePlatformUma.ON_STAND = "st4";
MobilePlatformUma.STOP_OFFSET = 20;
MobilePlatformUma.prototype.createCorners = function() {
    this.updateBounds()
};
MobilePlatformUma.prototype.init = function() {
    this.m_skin = "mcItemUmaElevator";
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.addState(MobilePlatformUma.OFF_STAND, this.m_skin + "_off_stand");
    this.m_character.addState(MobilePlatformUma.ON, this.m_skin + "_on");
    this.m_character.addState(MobilePlatformUma.UP, this.m_skin + "_up");
    this.m_character.addState(MobilePlatformUma.ON_STAND, this.m_skin + "_on_stand");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.m_motionController = new MotionController(this.m_x,
        this.m_y, new DataMovement(this.m_data.params, this.m_data.movement));
    this.gotoState(MobilePlatformUma.OFF_STAND);
    this.m_world.addMobilePlatform(this);
    Global.playerSelected !== Global.PLAYER_UMA && (this.m_isAwaitingDelete = !0)
};
MobilePlatformUma.prototype.gotoState = function(a, b) {
    MobileObject.prototype.gotoState.call(this, a, b)
};
MobilePlatformUma.prototype.onEndAnimation = function(a) {
    switch (a) {
        case MobilePlatformUma.ON:
            this.gotoState(MobilePlatformUma.UP)
    }
};
MobilePlatformUma.prototype.onEndMovement = function() {
    this.gotoState(MobilePlatformUma.ON_STAND);
    this.m_world.game().enabledControls = !0;
    this.m_world.player().control().onRight(!0);
    Application.instance.stopSound("SND_ELEVATOR_UP")
};
MobilePlatformUma.prototype.onSteppedOn = function() {
    Global.playerSelected === Global.PLAYER_UMA && !this.m_world.player().flipX() && this.m_world.player().getX() < this.m_x - MobilePlatformUma.STOP_OFFSET && (Application.log("MobilePlatformUma.onSteppedOn >> enabledControls:false "), this.m_world.game().enabledControls = !1);
    this.m_isPlayerOver = !0
};
MobilePlatformUma.prototype.onActivate = function() {
    this.m_motionController.startMotion(this, this.onEndMovement, null);
    Application.instance.playSound("SND_ELEVATOR_UP")
};
MobilePlatformUma.prototype.update = function(a) {
    MobileObject.prototype.update.call(this, a);
    this.m_character.update(a);
    this.checkProximity();
    switch (this.m_state) {
        case MobilePlatformUma.OFF_STAND:
            Global.playerSelected === Global.PLAYER_UMA && this.m_isPlayerOver && !this.m_world.game().enabledControls && !this.m_world.player().control().isJumping() && this.m_world.player().getX() >= this.m_x && (this.m_world.player().onSwitchPlatform(this), this.gotoState(MobilePlatformUma.ON, !1), Application.instance.playSound("SND_ELEVATOR_ON"))
    }
};

function ItemGuest(a, b, c, d, e) {
    this.m_isAwaitingDelete = !1;
    e = Common.getParams(e.params);
    0 != parseInt(e.fixed, 10) && (d = b.fixedPositionY(c, d));
    SimpleWorldActor.call(this, a, b, c, d, ActorManagerPlatformRunner.ITEM_GUEST);
    this.m_intro = parseInt(e.intro, 10);
    a = parseInt(e.player, 10);
    !Global.showDialogue && 0 < this.m_intro || Global.playerSelected != a && 0 != a ? this.m_isAwaitingDelete = !0 : (this.fixScaleX = 0 == parseInt(e.flip, 10) ? 1 : -1, this.setScale(.91), this.m_skin = "ani_npc_" + e.skin, this.m_character = new Character(0, 0, this.m_canvas),
        this.m_character.addState(ItemGuest.ST_STAND, this.m_skin + "_stand"), this.m_character.addState(ItemGuest.ST_IDLE, this.m_skin + "_idle"), this.m_character.onEndAnimation(this, this.onEndAnimation), this.gotoState(ItemGuest.ST_STAND))
}
Application.subclass(ItemGuest, SimpleWorldActor);
ItemGuest.ST_STAND = "st1";
ItemGuest.ST_IDLE = "st2";
ItemGuest.prototype.characterGotoState = function(a, b) {
    SimpleWorldActor.prototype.characterGotoState.call(this, a, b);
    this.m_clip && (this.m_clip.scale.x = this.m_scale * this.fixScaleX)
};
ItemGuest.prototype.onEndAnimation = function(a) {
    switch (a) {
        case ItemGuest.ST_STAND:
            .5 < Math.random() && this.gotoState(ItemGuest.ST_IDLE);
            break;
        case ItemGuest.ST_IDLE:
            this.gotoState(ItemGuest.ST_STAND)
    }
};
ItemGuest.prototype.update = function(a) {
    SimpleWorldActor.prototype.update.call(this, a);
    this.m_character && this.m_character.update(a)
};

function SpriteActor(a, b, c, d, e, f, g, h) {
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_parallaxXFactor = e;
    this.m_parallaxYFactor = f;
    this.m_xOffset = g;
    this.m_yOffset = h;
    this.m_quadtreeRect = null
}
Application.subclass(SpriteActor, SimpleWorldActor);
SpriteActor.prototype.getQuadtreeRect = function() {
    return this.m_quadtreeRect
};
SpriteActor.prototype.setQuadtreeRect = function(a) {
    this.m_quadtreeRect = a
};
SpriteActor.prototype.update = function(a) {
    this.m_clip && (this.m_clip.position.x = this.m_x - (~~(this.m_world.camera().getX() * this.m_parallaxXFactor) - this.m_xOffset), this.m_clip.position.y = this.m_y - (~~(this.m_world.camera().getY() * this.m_parallaxYFactor) - this.m_yOffset), this.m_clip.update && this.m_clip.update(a))
};

function TutorialTrigger(a, b, c, d, e) {
    SimpleWorldActor.call(this, a, b, c, d);
    this.m_isRangeControlled = !1;
    a = Common.getParams(e.params);
    this.m_tutorialType = Common.sparseFloat(a.type, 0);
    this.m_state = TutorialTrigger.TUTORIAL_OFF;
    this.setActorClip("mcTutorialObject")
}
Application.subclass(TutorialTrigger, SimpleWorldActor);
TutorialTrigger.TUTORIAL_OFF = "off";
TutorialTrigger.TUTORIAL_ON = "on";
TutorialTrigger.prototype.free = function() {
    this.m_world.game().enabledControls = !0;
    SimpleWorldActor.prototype.free.call(this)
};
TutorialTrigger.prototype.update = function(a) {
    SimpleWorldActor.prototype.update.call(this, a);
    this.m_state !== TutorialTrigger.TUTORIAL_ON && this.m_world.player().getX() > this.m_x && (PlatformGameRunner.instance.showTutorial(this.m_tutorialType), this.m_isAwaitingDelete = !0, this.m_state = TutorialTrigger.TUTORIAL_ON)
};

function WorldPlatformRunner(a, b) {
    Global.baseScale = Global.minScale;
    Global.offsetZoomX = 0;
    Global.offsetZoomY = 0;
    World.call(this, a, b);
    this.m_tempNpc = null;
    this.m_pauseTimer = 0;
    this.m_paused = !1;
    this.m_worldLocations = {}
}
Application.subclass(WorldPlatformRunner, World);
WorldPlatformRunner.prototype.loadData = function(a, b) {
    World.prototype.loadData.call(this, a, b);
    this.m_player = new PlayerPlatformRunner(this.m_playerCanvas, this, this.playerInitX, this.playerInitY);
    this.m_actorManager.init(this.m_player);
    this.m_actorManager.setUpdateableObject(this.m_player);
    this.init();
    this.m_camera.lookAtPlayer();
    Application.externalTrack("Level Start", a)
};
WorldPlatformRunner.prototype.free = function() {
    Application.externalTrack("Level End");
    this.m_tempNpc = null;
    World.prototype.free.call(this)
};
WorldPlatformRunner.prototype.addWorldLocation = function(a, b, c) {
    this.m_worldLocations[a] = new Point(b, c)
};
WorldPlatformRunner.prototype.getWorldLocation = function(a) {
    return this.m_worldLocations[a]
};
WorldPlatformRunner.prototype.onAdrenalinaActivated = function() {
    this.m_player.activeRushMode();
    for (var a = this.actorManager().actors(), b = 0; b < a.length; b++) {
        var c = a[b];
        if ((c instanceof ItemRunner || c instanceof Pole || c instanceof SwingPole || c instanceof Spring) && !c.isAwaitingDelete())
            if (8 == Global.map || 7 == Global.map) c.onAdrenalinaActivated();
            else if (c.getX() > this.m_player.getX() + 115) c.onAdrenalinaActivated()
    }
    AchievementManager.instance.onEnterRushMode()
};
WorldPlatformRunner.prototype.onAdrenalinaActivatedFix = function() {
    for (var a = this.actorManager().actors(), b = 0; b < a.length; b++) {
        var c = a[b];
        if ((c instanceof ItemRunner || c instanceof Pole || c instanceof SwingPole || c instanceof Spring) && !c.isAwaitingDelete() && c.getX() > this.m_player.getX() + 115) c.onAdrenalinaActivated()
    }
};
WorldPlatformRunner.prototype.onAdrenalinaDeactivated = function() {
    this.m_player.removeRushMode();
    for (var a = this.actorManager().actors(), b = 0; b < a.length; b++) {
        var c = a[b];
        if ((c instanceof ItemRunner || c instanceof Pole || c instanceof SwingPole || c instanceof Spring) && !c.isAwaitingDelete()) c.onAdrenalinaDeactivated()
    }
};
WorldPlatformRunner.prototype.scaleWorld = function() {
    Application.WIDE_SCREEN ? 0 !== Layout.left ? (this.m_camera.setWidth(Math.floor((this.cameraInitWidth + 2 * Layout.left / Layout.scale) / Global.baseScale)), this.m_camera.setHeight(Math.floor(this.cameraInitHeight / Global.baseScale))) : 0 !== Layout.top ? (this.m_camera.setWidth(Math.floor(this.cameraInitWidth / Global.baseScale)), this.m_camera.setHeight(Math.floor((this.cameraInitHeight + 2 * Layout.top / Layout.scale) / Global.baseScale))) : (this.m_camera.setHeight(Math.floor(this.cameraInitHeight /
        Global.baseScale)), this.m_camera.setWidth(Math.floor(this.cameraInitWidth / Global.baseScale))) : (this.m_camera.setHeight(Math.floor(this.cameraInitHeight / Global.baseScale)), this.m_camera.setWidth(Math.floor(this.cameraInitWidth / Global.baseScale)));
    this.m_camera.leftLimit = this.cameraXMin * this.m_camera.width();
    this.m_camera.rightLimit = this.cameraXMax * this.m_camera.width();
    this.m_camera.upLimit = this.cameraYMin * this.m_camera.height();
    this.m_camera.downLimit = this.cameraYMax * this.m_camera.height()
};
WorldPlatformRunner.prototype.addLayer = function(a, b) {
    if (a === WorldBaseLayer.ID_COLLISIONS && "min_max_camera" === b.name) {
        for (var c = null, d = null, e = b.matrix, f = e.length, g = 0; g < f; g++)
            if (e[g])
                for (var h = [], k = [], l = e[g].length, m = 0; m < l; m++) 6 === e[g][m] ? (null === d && (d = {}), k.push(m), 1 === k.length && (d[String(g)] = k)) : 7 === e[g][m] && (null === c && (c = {}), h.push(m), 1 === h.length && (c[String(g)] = h));
        this.m_camera.setLocalMins(c);
        this.m_camera.setLocalMaxs(d)
    } else World.prototype.addLayer.call(this, a, b)
};
WorldPlatformRunner.prototype.getLayers = function() {
    return this.m_layers
};
WorldPlatformRunner.prototype.createCamera = function() {
    this.m_camera = new NewCamera(this, this.cameraWidth, this.cameraHeight, this.cameraFactor, this.cameraY0, this.cameraY0Pos, this.cameraFixedX, this.cameraScreenX, this.cameraScreenY);
    this.scaleWorld();
    QuadTree.minWidth = this.m_camera.width() / 2;
    QuadTree.minHeight = this.m_camera.height() / 2
};
WorldPlatformRunner.prototype.createNpcManagers = function() {
    this.m_actorManager = new ActorManagerPlatformRunner(this)
};
WorldPlatformRunner.prototype.addNpc = function(a, b) {
    this.m_tempNpc = new NpcPlatformRunner;
    this.m_tempNpc.id = a.id;
    this.m_tempNpc.x = a.x;
    this.m_tempNpc.y = a.y;
    this.m_tempNpc.rotation = void 0 !== a.rot ? a.rot : 0;
    this.m_tempNpc.params = a.params;
    this.m_tempNpc.canvas = b;
    this.m_tempNpc.movement = a.movement;
    this.m_tempNpc.moveParams = a.moveParams;
    this.m_tempNpc.alwaysAwake = 1 === a.alwaysAwake;
    this.m_tempNpc.appearType = a.appearType;
    this.m_tempNpc.disappearType = a.disappearType;
    this.m_tempNpc.moveStartType = a.moveStartType;
    this.m_tempNpc.speedX = a.speedX;
    this.m_tempNpc.speedY = a.speedY;
    this.m_tempNpc.skin = a.skin;
    this.m_tempNpc.flipX = 1 === a.flipX;
    this.m_tempNpc.delay = a.delay;
    this.m_actorManager.addNpc(this.m_tempNpc)
};
WorldPlatformRunner.prototype.shakeCamera = function(a) {
    this.m_camera.shake && this.m_camera.shake(a)
};
WorldPlatformRunner.prototype.update = function(a) {
    this.m_paused || (0 < this.m_pauseTimer ? (this.m_pauseTimer -= a, this.m_camera.update(a), World.prototype.update.call(this, 0)) : World.prototype.update.call(this, a))
};
WorldPlatformRunner.prototype.eraseIntroNpcs = function() {
    this.m_actorManager.eraseIntroNpcs()
};

function PlatformGameRunner(a, b, c, d) {
    Global.baseScale = Global.bossRoom ? .9 : 1.1;
    Global.minScale = Global.bossRoom ? .9 : 1.1;
    Global.maxScale = 1.4;
    Global.ACCELERATION = Application.config.player.ACCELERATION;
    Global.FACTOR_LAND_SPEED = Application.config.player.FACTOR_LAND_SPEED;
    Global.SPEED_INIT = Application.config.player.SPEED_INIT;
    Global.SPEED_INIT_JUMP_RESTORE = Application.config.player.SPEED_INIT_JUMP_RESTORE;
    Global.SPEED_INIT_JUMP_ANIMATION = Application.config.player.SPEED_INIT_JUMP_ANIMATION;
    Global.SPEED_INIT_DOOR =
        Application.config.player.SPEED_INIT_DOOR;
    Global.FACTOR_TIME_SPEED = .009;
    SGame.call(this, a);
    this.canvasControl = b;
    PlatformGameRunner.instance = this;
    this.scene = null;
    this.reset = this.inTransition = this.playerWin = this.isPaused = !1;
    this.world = null;
    this.m_collisionVisible = this.finish = !1;
    this.m_dataWorld = c;
    this.m_dataGeneral = d;
    this.lives = 5;
    this.onReset();
    this.enabledControls = !1;
    this.touchControl = new TouchControl;
    this.touchControl.callerObject = this;
    this.touchControl.onTapListener = this.onPress;
    this.touchControl.onSwipeListener =
        this.onSwipe;
    GuiGame.instance.createZoomManager(this);
    GuiGame.instance.zoomManager.setActorToFollow(this.world.player());
    GuiGame.instance.zoomManager.setDynamicScale(this.world.player().getX(), this.world.player().getY(), 0, 0);
    GuiGame.instance.zoomManager.setValueToFollowLinear(1, 10, null, null);
    this.scene.init && this.scene.init();
    this.spriteDisplace = this.tutorialPopup = null;
    Application.RENDER_MODE !== Application.RENDER_WEBGL || Application.isLowDevice || (this.spriteDisplace = Application.instance.getLocalizedImage("shader.jpg"),
        this.spriteDisplace.pivot.x = 65, this.spriteDisplace.pivot.y = 65, this.spriteDisplaceMaxScale = 1, this.displacementFilter = new window.PIXI.filters.DisplacementFilter(this.spriteDisplace));
    this.spriteDisplaceRush = null;
    Application.RENDER_MODE !== Application.RENDER_WEBGL || Application.isLowDevice || (this.spriteDisplaceRush = Application.instance.getLocalizedImage("shader_rush.jpg"), this.spriteDisplaceRush.pivot.x = 75, this.spriteDisplaceRush.pivot.y = 75, this.displacementFilterRush = new window.PIXI.filters.DisplacementFilter(this.spriteDisplaceRush));
    this.tempFxMessageComplete = null
}
Application.subclass(PlatformGameRunner, SGame);
PlatformGameRunner.MAX_DELTA = 50;
PlatformGameRunner.instance = null;
PlatformGameRunner.MESSAGE_COUNTER = 100;
PlatformGameRunner.MESSAGE_START = 101;
PlatformGameRunner.MESSAGE_LEVEL_NAME = 102;
PlatformGameRunner.MESSAGE_LEVEL_COMPLETE = 103;
PlatformGameRunner.MESSAGE_LEVEL_BOSS = 104;
PlatformGameRunner.MESSAGE_LEVEL_COMPLETE_BOSS = 105;
PlatformGameRunner.MESSAGE_LEVEL_BONUS = 106;
PlatformGameRunner.MESSAGE_CHECKPOINT = 107;
PlatformGameRunner.TUTORIAL_OBSTACLE = 200;
PlatformGameRunner.TUTORIAL_CLIMB_BOOST = 201;
PlatformGameRunner.TUTORIAL_JUMP = 202;
PlatformGameRunner.TUTORIAL_BOUNCE_BACK = 203;
PlatformGameRunner.TUTORIAL_ADRENALINE = 204;
PlatformGameRunner.TUTORIAL_RUSH_MODE = 205;
PlatformGameRunner.TUTORIAL_ATTACK = 206;
PlatformGameRunner.TUTORIAL_STOMP = 207;
PlatformGameRunner.prototype.init = function() {
    Application.log("PlatformGameRunner");
    this.hud = new HudPlatformRunner("mcGuiHUD");
    this.hud.canvas.visible = !1
};
PlatformGameRunner.prototype.createRushShader = function() {
    this.spriteDisplaceRush && (this.removeRushShader(), this.spriteDisplaceRush.scale.x = 1.7, this.spriteDisplaceRush.scale.y = 1.7, this.canvas.addChild(this.spriteDisplaceRush), this.canvas.filters = [this.displacementFilterRush])
};
PlatformGameRunner.prototype.removeRushShader = function() {
    this.spriteDisplaceRush && this.spriteDisplaceRush.parent && this.canvas.removeChild(this.spriteDisplaceRush);
    this.canvas.filters = null
};
PlatformGameRunner.prototype.createExplotionShader = function(a, b, c, d) {
    !this.canvas.filters && this.spriteDisplace && (this.removeExplotionShader(), this.spriteDisplaceMaxScale = c, this.spriteDisplace.scale.x = d || 1, this.spriteDisplace.scale.y = d || 1, this.spriteDisplace.position.x = a, this.spriteDisplace.position.y = b, this.canvas.addChild(this.spriteDisplace), this.canvas.filters = [this.displacementFilter])
};
PlatformGameRunner.prototype.removeExplotionShader = function() {
    this.spriteDisplace && this.spriteDisplace.parent && this.canvas.removeChild(this.spriteDisplace);
    this.canvas.filters = null
};
PlatformGameRunner.prototype.showMessage = function(a) {
    var b = null;
    switch (a) {
        case PlatformGameRunner.MESSAGE_COUNTER:
            b = Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiMessageCounterMal" : "mcGuiMessageCounterUma", 0, 0, this.canvasControl);
            b.onComplete(this, this.onStart);
            this.world.player().onResetSpeed(Global.SPEED_INIT);
            break;
        case PlatformGameRunner.MESSAGE_START:
            b = Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiMessageCounterMal" :
                "mcGuiMessageCounterUma", 0, 0, this.canvasControl);
            this.world.player().onResetSpeed(Global.SPEED_INIT);
            break;
        case PlatformGameRunner.MESSAGE_LEVEL_NAME:
            b = Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiMessageLevelNameMal" : "mcGuiMessageLevelNameUma", 0, 0, this.canvasControl);
            switch (Global.map) {
                case 1:
                case 2:
                    b.getControl("mcGuiTitle").setTextLocalized("STR_METAMAP_LEVEL01");
                    b.getControl("mcGuiTitleS").setTextLocalized("STR_METAMAP_LEVEL01");
                    break;
                case 3:
                case 4:
                    b.getControl("mcGuiTitle").setTextLocalized("STR_METAMAP_LEVEL02");
                    b.getControl("mcGuiTitleS").setTextLocalized("STR_METAMAP_LEVEL02");
                    break;
                case 5:
                case 6:
                    b.getControl("mcGuiTitle").setTextLocalized("STR_METAMAP_LEVEL03");
                    b.getControl("mcGuiTitleS").setTextLocalized("STR_METAMAP_LEVEL03");
                    break;
                case 7:
                case 8:
                    b.getControl("mcGuiTitle").setTextLocalized("STR_METAMAP_LEVEL04"), b.getControl("mcGuiTitleS").setTextLocalized("STR_METAMAP_LEVEL04")
            }
            break;
        case PlatformGameRunner.MESSAGE_LEVEL_COMPLETE:
            b = Application.instance.effectManager.createEffect(Global.playerSelected ===
                Global.PLAYER_MAL ? "mcGuiMessageLevelcompleteMal" : "mcGuiMessageLevelcompleteUma", 0, 0, this.canvasControl);
            Application.instance.playSound("SND_LEVEL_COMPLETED");
            this.tempFxMessageComplete = b;
            break;
        case PlatformGameRunner.MESSAGE_LEVEL_BOSS:
            b = Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiMessageMalvsUma" : "mcGuiMessageUmavsMal", 0, 0, this.canvasControl);
            break;
        case PlatformGameRunner.MESSAGE_LEVEL_COMPLETE_BOSS:
            b = Application.instance.effectManager.createEffect(Global.playerSelected ===
                Global.PLAYER_MAL ? "mcGuiMessageLevelcompleteMal" : "mcGuiMessageLevelcompleteUma", 0, 0, this.canvasControl);
            a = Global.playerSelected === Global.PLAYER_MAL ? "STR_MESSAGES_BOSSCOMPLETE_MAL" : "STR_MESSAGES_BOSSCOMPLETE_UMA";
            b.getControl("mcGuiTitle").setTextLocalized(a);
            b.getControl("mcGuiTitleS").setTextLocalized(a);
            this.tempFxMessageComplete = b;
            break;
        case PlatformGameRunner.MESSAGE_CHECKPOINT:
            switch (b = Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiMessageCheckpointMal" :
                "mcGuiMessageCheckpointUma", 0, 0, this.canvasControl), Global.map) {
                case 1:
                case 2:
                case 7:
                case 8:
                    b.getControl("mcGuiCharacter").setClip("gui_cs_dude_2")
            }
    }
    return b
};
PlatformGameRunner.prototype.showTutorial = function(a) {
    var b = Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma",
        c = Application.instance.isMobileDevice ? "Mobile" : "PC";
    switch (a) {
        case PlatformGameRunner.TUTORIAL_OBSTACLE:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial01" + b + c);
            break;
        case PlatformGameRunner.TUTORIAL_CLIMB_BOOST:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial02" + b + c);
            break;
        case PlatformGameRunner.TUTORIAL_JUMP:
            this.tutorialPopup =
                GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial08" + b + c);
            break;
        case PlatformGameRunner.TUTORIAL_BOUNCE_BACK:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial03" + b + c);
            break;
        case PlatformGameRunner.TUTORIAL_ADRENALINE:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial04" + b + c);
            break;
        case PlatformGameRunner.TUTORIAL_RUSH_MODE:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial05" + b + c);
            break;
        case PlatformGameRunner.TUTORIAL_ATTACK:
            this.tutorialPopup =
                GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial06" + b + c);
            break;
        case PlatformGameRunner.TUTORIAL_STOMP:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial07" + b + c)
    }
    null !== this.tutorialPopup && this.tutorialPopup.initialize(a)
};
PlatformGameRunner.prototype.onStart = function() {
    this.enabledControls = !0;
    this.world.player().control().onRight(!0);
    this.world.camera().setDefaultSpeed()
};
PlatformGameRunner.prototype.onRushModeScene = function(a) {
    null === this.scene && (this.scene = a ? new IntroRushMode(this) : new OutroRushMode(this))
};
PlatformGameRunner.prototype.restoreGameMusic = function() {
    Application.instance.stopAllSounds();
    switch (Global.map) {
        case 0:
        case 1:
        case 2:
            Application.instance.playSound("MUS_BG_GAME_AURADON");
            break;
        case 3:
        case 4:
            Application.instance.playSound("MUS_BG_GAME_ISLE_LOST");
            break;
        case 5:
        case 6:
            Application.instance.playSound("MUS_BG_GAME_UMA_SHIP");
            break;
        case 7:
        case 8:
            Application.instance.playSound(Global.bossRoom ? "MUS_BG_MAINMENU" : "MUS_BG_GAME_LOVE_BOAT")
    }
};
PlatformGameRunner.prototype.outro = function() {
    if (null === this.scene)
        if (AchievementManager.instance.onLvlCompleted(), Application.sandbox && !Application.sandbox.startSettings.useDialogues) this.scene = new OutroSimple(this, !0);
        else if (BossLvl8.instance) this.scene = new OutroBoss(this);
    else if (Global.map == Global.MAP_TUTORIAL) this.scene = new OutroSimple(this, !0);
    else if (Global.playerSelected === Global.PLAYER_MAL) switch (Global.map) {
        case 2:
        case 6:
            this.scene = new OutroTransform(this);
            break;
        case 1:
        case 3:
        case 4:
        case 7:
            this.scene =
                new OutroNpc(this);
            break;
        case 8:
            this.scene = new OutroSimple(this, !1);
            break;
        default:
            this.scene = new OutroSimple(this, !0)
    } else if (Global.playerSelected === Global.PLAYER_UMA) switch (Global.map) {
        case 1:
        case 5:
            this.scene = new OutroTransform(this);
            break;
        case 3:
        case 4:
        case 6:
        case 7:
            this.scene = new OutroNpc(this);
            break;
        case 8:
            this.scene = new OutroSimple(this, !1);
            break;
        default:
            this.scene = new OutroSimple(this, !0)
    }
};
PlatformGameRunner.prototype.free = function() {
    Application.externalTrack("Game End");
    this.displacementFilterRush = this.spriteDisplaceRush = this.displacementFilter = this.spriteDisplace = this.m_dataGeneral = this.m_dataWorld = null;
    this.canvas.filters = null;
    this.touchControl && (this.touchControl.free(), this.touchControl = null);
    this.world && (this.world.free(), this.world = null);
    Global.baseScale = 1;
    Global.minScale = 1;
    Global.maxScale = 1;
    Global.offsetZoomX = 0;
    Global.offsetZoomY = 0;
    PlatformGameRunner.instance = null;
    SGame.prototype.free.call(this)
};
PlatformGameRunner.prototype.onPress = function(a) {
    if (null !== this.tutorialPopup) this.tutorialPopup.onResumeScreen();
    else if (this.enabledControls && this.world && this.world.player()) this.world.player().onKeyDown(PlayerPlatformRunner.KEY_JUMP)
};
PlatformGameRunner.prototype.onSwipe = function(a) {
    if (null !== this.tutorialPopup) this.tutorialPopup.onResumeScreen();
    else if (this.enabledControls && this.world && this.world.player() && a.direction == TouchControl.DIR_RIGHT) this.world.player().onKeyDown(PlayerPlatformRunner.KEY_ATTACK)
};
PlatformGameRunner.prototype.onPointerPress = function(a) {
    SGame.prototype.onPointerPress.call(this, a);
    if (this.touchControl) this.touchControl.onPointerPress(a)
};
PlatformGameRunner.prototype.onPointerRelease = function(a) {
    SGame.prototype.onPointerRelease.call(this, a);
    if (this.touchControl) this.touchControl.onPointerRelease(a)
};
PlatformGameRunner.prototype.onPointerMove = function(a) {
    SGame.prototype.onPointerMove.call(this, a);
    if (this.touchControl) this.touchControl.onPointerMove(a)
};
PlatformGameRunner.prototype.onGameEnd = function(a) {
    this.finish = !0
};
PlatformGameRunner.prototype.onReset = function() {
    this.scene && (this.scene.free(), this.scene = null);
    this.world && (this.world.free(), this.world = null);
    Global.level === Global.LEVEL_BOSS && Global.bossRoom ? this.hud.setItemsCollected(Global.itemsCollected) : (Global.itemsCollected = 0, Global.totalItems = 0, Global.adrenalineTime = 0);
    DataManager.instance.loadData();
    AchievementManager.instance.resetData();
    this.world = new WorldPlatformRunner(this.canvas, this);
    this.world.loadData(this.m_dataWorld, this.m_dataGeneral);
    this.world.camera().lookAtPlayer();
    CheckPoint.lastPointSafe.x = this.world.player().getX();
    CheckPoint.lastPointSafe.y = this.world.player().getY();
    this.reset = !1;
    if (BossLvl8.instance) this.scene = new IntroBoss(this);
    else if (Application.sandbox && !Application.sandbox.startSettings.useDialogues) this.scene = new IntroSimple(this);
    else if (Global.map == Global.MAP_TUTORIAL) this.scene = new IntroSimple(this);
    else if (Global.showDialogue)
        if (Global.playerSelected === Global.PLAYER_MAL) switch (Global.map) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 7:
                this.scene =
                    new IntroNpc(this, !0);
                break;
            case 8:
                this.scene = new IntroNpc(this, !1);
                break;
            default:
                this.scene = new IntroSimple(this)
        } else {
            if (Global.playerSelected === Global.PLAYER_UMA) switch (Global.map) {
                case 4:
                case 5:
                case 6:
                    this.scene = new IntroNpc(this, !0);
                    break;
                case 2:
                case 3:
                    this.scene = new IntroNpc(this, !1);
                    break;
                default:
                    this.scene = new IntroSimple(this)
            }
        } else this.scene = new IntroSimple(this)
};
PlatformGameRunner.prototype.update = function(a) {
    if (this.reset) this.onReset();
    else a > PlatformGameRunner.MAX_DELTA && (a = PlatformGameRunner.MAX_DELTA), this.spriteDisplace && this.spriteDisplace.parent && (this.spriteDisplace.rotation += .1, this.spriteDisplace.scale.x += .03 * a, this.spriteDisplace.scale.y += .03 * a, this.spriteDisplace.scale.x > this.spriteDisplaceMaxScale && this.removeExplotionShader()), this.spriteDisplaceRush && this.spriteDisplaceRush.parent && (this.spriteDisplaceRush.rotation += .15, this.spriteDisplaceRush.position.x =
        this.world.m_player.m_x - 5 - this.world.m_camera.m_x, this.spriteDisplaceRush.position.y = this.world.m_player.m_y - 70 - this.world.m_camera.m_y), this.scene && (this.scene.update(a), this.scene.toDelete && (this.scene.free(), this.scene = null)), this.tempFxMessageComplete && (this.tempFxMessageComplete.clip.currentFrame < this.tempFxMessageComplete.clip.totalFrames - 5 ? 0 == this.tempFxMessageComplete.clip.currentFrame % 8 && Application.instance.effectManager.createEffect(Global.playerSelected == Global.PLAYER_MAL ? "aniFxEndLevelCelebrateMal" :
        "aniFxEndLevelCelebrateUma", 512 + 420 * Math.random() * (.5 < Math.random() ? 1 : -1), 250 + 80 * Math.random() * (.5 < Math.random() ? 1 : -1), this.canvasControl) : this.tempFxMessageComplete = null), this.touchControl.update(a), SGame.prototype.update.call(this, a), this.world.update(a)
};
PlatformGameRunner.prototype.onKeyDown = function(a) {
    SGame.prototype.onKeyDown.call(this, a);
    if (this.enabledControls && this.world) this.world.player().onKeyDown(a)
};
PlatformGameRunner.prototype.onKeyUp = function(a) {
    this.enabledControls && this.world && (SGame.prototype.onKeyUp.call(this, a), this.world.player().onKeyUp(a))
};
PlatformGameRunner.prototype.toggleDebugCollision = function() {
    SGame.prototype.toggleDebugCollision.call(this);
    this.m_collisionVisible = !this.m_collisionVisible;
    this.world.showCollision(this.m_collisionVisible)
};
PlatformGameRunner.prototype.onDebugDraw = function(a) {
    SGame.prototype.onDebugDraw.call(this, a);
    if (this.showDebugCollision) this.world.onDebugDraw(a)
};
PlatformGameRunner.DEBUG_ID_PLAYER_GRAVITY = "player_gravity";
PlatformGameRunner.DEBUG_ID_PLAYER_SPEED = "player_speed";
PlatformGameRunner.prototype.onDebugGetSandboxConfig = function() {
    var a = [];
    a.push({
        property: PlatformGameRunner.DEBUG_ID_PLAYER_GRAVITY,
        value: this.world.player().control().gravity
    });
    a.push({
        property: PlatformGameRunner.DEBUG_ID_PLAYER_SPEED,
        value: this.world.player().control().walkSpeed
    });
    return a
};
PlatformGameRunner.prototype.onDebugChangeSandboxConfig = function(a) {
    SGame.prototype.onDebugChangeSandboxConfig.call(this, a);
    switch (a.property) {
        case PlatformGameRunner.DEBUG_ID_PLAYER_GRAVITY:
            this.world.player().control().gravity = parseFloat(a.value);
            break;
        case PlatformGameRunner.DEBUG_ID_PLAYER_SPEED:
            this.world.player().control().walkSpeed = parseFloat(a.value);
            break;
        default:
            Application.warn("SANDBOX property [" + a.property + "] no set, maybe restart config")
    }
};
PlatformGameRunner.prototype.onDebugCreateSandboxObject = function(a, b, c) {
    SGame.prototype.onDebugCreateSandboxObject.call(this, a, b, c)
};

function NpcPlatformRunner() {
    Npc.call(this);
    this.rotation = this.h = this.w = 0;
    this.sy = this.sx = 1;
    this.moveParams = this.movement = "";
    this.alwaysAwake = !1;
    this.speedY = this.speedX = this.moveStartType = this.disappearType = this.appearType = 0;
    this.skin = "";
    this.flipX = !1;
    this.delay = 0
}
Application.subclass(NpcPlatformRunner, Npc);

function ActorManagerPlatformRunner(a) {
    NpcManager.call(this, a)
}
Application.subclass(ActorManagerPlatformRunner, NpcManager);
ActorManagerPlatformRunner.ITEM_MOBILE_PLATFORM = 1;
ActorManagerPlatformRunner.ITEM_STOPPING_PLACE = 2;
ActorManagerPlatformRunner.ITEM_SPRING = 5;
ActorManagerPlatformRunner.ITEM_POLE = 6;
ActorManagerPlatformRunner.ITEM_SWING_POLE = 7;
ActorManagerPlatformRunner.ITEM_HEALTH = 10;
ActorManagerPlatformRunner.ITEM_HEALTH_SMALL = 11;
ActorManagerPlatformRunner.ITEM_MAL = 12;
ActorManagerPlatformRunner.ITEM_UMA = 13;
ActorManagerPlatformRunner.ITEM_MELEE_ENEMY = 20;
ActorManagerPlatformRunner.ITEM_RANGE_ENEMY = 21;
ActorManagerPlatformRunner.ITEM_FLAG_WIN = 30;
ActorManagerPlatformRunner.ITEM_CHECKPOINT = 31;
ActorManagerPlatformRunner.ITEM_TELEPORT = 32;
ActorManagerPlatformRunner.ITEM_CLIP = 33;
ActorManagerPlatformRunner.ITEM_GUEST = 34;
ActorManagerPlatformRunner.ITEM_UMA_PLATFORM = 35;
ActorManagerPlatformRunner.ITEM_TUTORIAL_TRIGGER = 36;
ActorManagerPlatformRunner.ITEM_WORLD_LOCATION = 37;
ActorManagerPlatformRunner.ITEM_BOOK = 38;
ActorManagerPlatformRunner.ITEM_FLAG_CLIP_END = 39;
ActorManagerPlatformRunner.ITEM_SPIKE = 40;
ActorManagerPlatformRunner.ITEM_GEYSER = 41;
ActorManagerPlatformRunner.ITEM_MOVING_HAZARD = 42;
ActorManagerPlatformRunner.ITEM_BREAKABLE_OBJECT = 43;
ActorManagerPlatformRunner.ITEM_BOSS_LVL8 = 50;
ActorManagerPlatformRunner.prototype.init = function(a) {
    this.m_player = a;
    for (a = 0; a < this.m_buffer.length;) {
        switch (this.m_buffer[a].id) {
            case ActorManagerPlatformRunner.ITEM_MOBILE_PLATFORM:
                this.add(new MobilePlatform(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_UMA_PLATFORM:
                this.add(new MobilePlatformUma(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_CLIP:
                this.add(new ItemClip(this.m_buffer[a].canvas, this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a].sx, this.m_buffer[a].sy, this.m_buffer[a].rotation, this.m_buffer[a].params));
                break;
            case ActorManagerPlatformRunner.ITEM_GUEST:
                this.add(new ItemGuest(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_STOPPING_PLACE:
                this.add(new StoppingPlace(this.m_world.objectCanvas(),
                    this.m_world, this.m_buffer[a].x, this.m_buffer[a].y));
                break;
            case ActorManagerPlatformRunner.ITEM_SPRING:
                this.add(new Spring(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_FLAG_WIN:
                this.add(new FlagWin(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_BOOK:
                this.add(new Book(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x,
                    this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_FLAG_CLIP_END:
                this.add(new FlagClipEnd(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_TELEPORT:
                this.add(new Teleporter(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a], ActorManagerPlatformRunner.ITEM_TELEPORT));
                break;
            case ActorManagerPlatformRunner.ITEM_CHECKPOINT:
                this.add(new CheckPoint(this.m_world.objectCanvas(),
                    this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_POLE:
                this.add(new Pole(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_SWING_POLE:
                this.add(new SwingPole(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_HEALTH:
            case ActorManagerPlatformRunner.ITEM_HEALTH_SMALL:
            case ActorManagerPlatformRunner.ITEM_MAL:
            case ActorManagerPlatformRunner.ITEM_UMA:
                this.add(new ItemRunner(this.m_world.objectCanvas(),
                    this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_MELEE_ENEMY:
                this.add(new MeleeEnemy(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_RANGE_ENEMY:
                this.add(new RangeEnemy(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_SPIKE:
                this.add(new Spike(this.m_world.objectCanvas(),
                    this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_GEYSER:
                this.add(new Geyser(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_MOVING_HAZARD:
                this.add(new MovingHazard(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_BREAKABLE_OBJECT:
                this.add(new BreakableObject(this.m_world.objectCanvas(),
                    this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_BOSS_LVL8:
                this.add(new BossLvl8(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_TUTORIAL_TRIGGER:
                this.add(new TutorialTrigger(this.m_world.objectCanvas(), this.m_world, this.m_buffer[a].x, this.m_buffer[a].y, this.m_buffer[a]));
                break;
            case ActorManagerPlatformRunner.ITEM_WORLD_LOCATION:
                this.m_world.addWorldLocation(this.m_buffer[a].params,
                    this.m_buffer[a].x, this.m_buffer[a].y)
        }
        a++
    }
    for (a = 0; a < this.m_actors.length; a++) this.m_actors[a].id() == ActorManagerPlatformRunner.ITEM_TELEPORT && (this.m_actors[a].gotoDoor = this.findTeleport(this.m_actors[a].gotoId))
};
ActorManagerPlatformRunner.prototype.addItemHealth = function(a, b) {
    var c = new ItemRunner(this.m_world.objectCanvas(), this.m_world, a, b, {
        id: ActorManagerPlatformRunner.ITEM_HEALTH
    });
    this.add(c);
    return c
};
ActorManagerPlatformRunner.prototype.findTeleport = function(a) {
    for (var b = 0; b < this.m_actors.length; b++)
        if (this.m_actors[b].doorId == a) return this.m_actors[b]
};
ActorManagerPlatformRunner.prototype.findSwingPoleTutorial = function() {
    for (var a = 0; a < this.m_actors.length; a++)
        if (this.m_actors[a] instanceof SwingPole && this.m_actors[a].isInCamera(this.m_world.camera())) return this.m_actors[a]
};
ActorManagerPlatformRunner.prototype.spawnEnemy = function(a) {
    switch (a.id) {
        case ActorManagerPlatformRunner.ITEM_MELEE_ENEMY:
            a = new MeleeEnemy(this.m_world.objectCanvas(), this.m_world, a.x, a.y, a);
            a.gotoState(BaseEnemy.ST_TELEPORT);
            this.add(a);
            break;
        case ActorManagerPlatformRunner.ITEM_RANGE_ENEMY:
            a = new RangeEnemy(this.m_world.objectCanvas(), this.m_world, a.x, a.y, a);
            a.gotoState(BaseEnemy.ST_TELEPORT);
            this.add(a);
            break;
        case ActorManagerPlatformRunner.ITEM_MOVING_HAZARD:
            a = new MovingHazard(this.m_world.objectCanvas(),
                this.m_world, a.x, a.y, a), a.gotoState(MovingHazard.ST_APPEAR), this.add(a)
    }
};
ActorManagerPlatformRunner.prototype.update = function(a) {
    for (var b = 0; b < this.m_actors.length; b++) {
        var c = this.m_actors[b];
        if (c.isAwaitingDelete() || c.m_x < CheckPoint.lastPointSafe.x - 600) c.free(), this.m_actors[b] = null, this.m_actors.splice(b--, 1);
        else {
            var d = c.getX() - this.m_world.camera().getX();
            if (!c.isRangeControlled() || d <= this.visibleWidth && -256 <= d) {
                if (c.isIdle()) c.onIdle(!1);
                c.update(a)
            } else if (!c.isIdle()) c.onIdle(!0)
        }
    }
};
ActorManagerPlatformRunner.prototype.eraseIntroNpcs = function() {
    for (var a = 0; a < this.m_actors.length; a++) {
        var b = this.m_actors[a];
        b.id() === ActorManagerPlatformRunner.ITEM_GUEST && 0 < b.m_intro && (b.free(), this.m_actors[a] = null, this.m_actors.splice(a--, 1))
    }
};

function NewCamera(a, b, c, d, e, f, g, h, k) {
    this.m_x = "undefined" !== typeof h ? h : 0;
    this.m_y = "undefined" !== typeof k ? k : 0;
    this.m_world = a;
    this.m_speed = NewCamera.DEFAULT_SPEED;
    this.m_velocity = new Vector2D(0, 0);
    this.m_steering = new Vector2D(0, 0);
    this.m_width = b;
    this.m_height = c;
    this.leftLimit = Math.round(this.m_world.cameraXMin * this.m_width);
    this.rightLimit = Math.round(this.m_world.cameraXMax * this.m_width);
    this.upLimit = Math.round(this.m_world.cameraYMin * this.m_height);
    this.downLimit = Math.round(this.m_world.cameraYMax *
        this.m_height);
    this.parallaxX = this.m_world.width() > this.m_width;
    this.parallaxY = this.m_world.height() > this.m_height;
    this.m_force = NewCamera.DEFAULT_FORCE;
    this.m_fixedX = g;
    this.m_idealY = 0;
    this.m_cameraFactor = d;
    if ("number" === typeof e) this.m_y0 = [], this.m_y0.push(e * NewCamera.TILE_HEIGHT), this.m_y0Pos = [], this.m_y0Pos.push(0);
    else {
        a = e.length;
        if (a !== f.length) throw Error("y0 and y0Pos have different lengths!");
        this.m_y0 = [];
        for (b = 0; b < a; b++) this.m_y0.push(e[b] * NewCamera.TILE_HEIGHT);
        this.m_y0Pos = f
    }
    this.m_currentY0Index =
        0;
    this.functionCallback = this.callerCallback = this.m_localMaxs = this.m_localMins = null;
    this.m_shakeTimer = 0;
    this.m_timeRestore = -1;
    this.shakeMaxAmplitude = 20
}
NewCamera.DEFAULT_SPEED = .7;
NewCamera.SPEED_CHANGE_DIR = .75;
NewCamera.ARRIVING_RADIUS = 250;
NewCamera.DEFAULT_FORCE = .02;
NewCamera.TILE_WIDTH = 48;
NewCamera.TILE_HEIGHT = 48;
NewCamera.Y0_OFFSET = -13 * NewCamera.TILE_HEIGHT;
NewCamera.SHAKE_TIME = 1200;
NewCamera.SHAKE_DEFAULT_MAX_AMPLITUDE = 20;
NewCamera.SHAKE_FREQUENCY = NewCamera.SHAKE_TIME / 12;
NewCamera.prototype.getX = function() {
    return this.m_x
};
NewCamera.prototype.getY = function() {
    return this.m_y
};
NewCamera.prototype.width = function() {
    return this.m_width
};
NewCamera.prototype.height = function() {
    return this.m_height
};
NewCamera.prototype.setWidth = function(a) {
    this.m_width = a
};
NewCamera.prototype.setHeight = function(a) {
    this.m_height = a
};
NewCamera.prototype.setSpeed = function(a) {
    this.m_speed = a;
    this.m_force = this.m_speed > NewCamera.DEFAULT_SPEED ? .5 : NewCamera.DEFAULT_FORCE
};
NewCamera.prototype.setDefaultSpeed = function() {
    this.setSpeed(NewCamera.DEFAULT_SPEED)
};
NewCamera.prototype.setFreeMovementSpeed = function(a) {
    this.setSpeed(a ? 2 : NewCamera.DEFAULT_SPEED)
};
NewCamera.prototype.setCallback = function(a, b) {
    this.callerCallback = a;
    this.functionCallback = b
};
NewCamera.prototype.setLocalMins = function(a) {
    this.m_localMins = a
};
NewCamera.prototype.setLocalMaxs = function(a) {
    this.m_localMaxs = a
};
NewCamera.prototype.toLeft = function() {
    this.m_world.cameraXMin = .75;
    this.m_world.cameraXMax = .65;
    this.leftLimit = Math.round(this.m_world.cameraXMin * this.m_width);
    this.rightLimit = Math.round(this.m_world.cameraXMax * this.m_width);
    this.setSpeed(NewCamera.SPEED_CHANGE_DIR);
    this.m_timeRestore = 1E3
};
NewCamera.prototype.toRight = function() {
    this.m_world.cameraXMin = .15;
    this.m_world.cameraXMax = .25;
    this.leftLimit = Math.round(this.m_world.cameraXMin * this.m_width);
    this.rightLimit = Math.round(this.m_world.cameraXMax * this.m_width);
    this.setSpeed(NewCamera.SPEED_CHANGE_DIR);
    this.m_timeRestore = 1E3
};
NewCamera.prototype.setWidthHeight = function(a, b) {
    this.m_width = this.m_width * a / b;
    var c = this.m_height;
    this.m_height = this.m_height * a / b;
    this.m_y += (c - this.m_height) / 2;
    this.leftLimit = Math.round(this.m_world.cameraXMin * this.m_width);
    this.rightLimit = Math.round(this.m_world.cameraXMax * this.m_width);
    this.upLimit = Math.round(this.m_world.cameraYMin * this.m_height);
    this.downLimit = Math.round(this.m_world.cameraYMax * this.m_height);
    this.parallaxX = this.m_world.width() > this.m_width;
    this.parallaxY = this.m_world.height() >
        this.m_height
};
NewCamera.prototype.lookAtPlayer = function() {
    this.m_x = this.m_world.player().getX() - this.leftLimit;
    var a = Math.floor(this.m_world.player().getX() / NewCamera.TILE_WIDTH),
        b = this.getY0(a);
    this.m_y = this.getTargetY(b, this.m_world.player().getY(), !1, a);
    this.m_velocity.set(0, 0);
    this.m_steering.set(0, 0)
};
NewCamera.prototype.update = function(a) {
    this.m_steering.set(0, 0);
    var b = 0;
    "undefined" !== typeof this.m_fixedX ? this.m_x = this.m_fixedX - this.m_width / 2 : this.m_x + this.leftLimit > this.m_world.player().getX() ? (b = this.m_x + this.leftLimit - this.m_world.player().getX(), this.m_steering.x = this.m_world.player().getX() - (this.m_x + this.leftLimit)) : this.m_x + this.rightLimit < this.m_world.player().getX() && (b = this.m_world.player().getX() - this.m_x - this.rightLimit, this.m_steering.x = this.m_world.player().getX() - (this.m_x + this.rightLimit));
    var b = b > NewCamera.ARRIVING_RADIUS ? NewCamera.ARRIVING_RADIUS : b,
        c = Math.floor(this.m_world.player().getX() / NewCamera.TILE_WIDTH),
        d = this.getY0(c),
        c = this.getTargetY(d, this.m_world.player().getY(), this.m_world.player().isJumping(), c);
    this.m_steering.y = c - this.m_y;
    c = Math.abs(this.m_steering.y);
    c = c > NewCamera.ARRIVING_RADIUS ? NewCamera.ARRIVING_RADIUS : c;
    d = 0;
    0 < this.m_shakeTimer && (d = this.getShakeXOffset(), this.m_shakeTimer -= a);
    var e = this.m_steering.length();
    this.m_steering.stretch(Math.max(this.m_world.player().speed().length(),
        this.m_speed));
    e < NewCamera.ARRIVING_RADIUS && this.m_steering.scale(e / NewCamera.ARRIVING_RADIUS);
    this.m_steering.subtract(this.m_velocity);
    e = this.m_world.player().isJumping() ? 1 : this.m_force;
    this.m_steering.truncate(e);
    this.m_velocity.add(this.m_steering);
    this.m_velocity.truncate(Math.max(this.m_world.player().speed().length(), this.m_speed));
    this.m_x += this.m_velocity.x * a + d;
    this.m_y += this.m_velocity.y * a;
    this.callerCallback && this.functionCallback || (this.m_world.player().getX() > this.m_x + this.m_width - 30 ?
        this.m_x = this.m_world.player().getX() - this.m_width + 30 : this.m_world.player().getX() < this.m_x + 30 && (this.m_x = this.m_world.player().getX() - 30));
    0 > this.m_x ? this.m_x = 0 : this.m_x > this.m_world.width() - this.width() && (this.m_x = Math.max(this.m_world.width() - this.width(), 0));
    0 > this.m_y ? this.m_y = 0 : this.m_y > this.m_world.height() - this.height() && (this.m_y = this.m_world.height() - this.height());
    (5 > b || 0 == this.m_x) && (5 > c || 0 == this.m_y) && this.callerCallback && this.functionCallback && this.functionCallback.call(this.callerCallback);
    0 < this.m_timeRestore && (this.m_timeRestore -= a, 0 >= this.m_timeRestore && this.setDefaultSpeed())
};
NewCamera.prototype.getY0 = function(a) {
    for (; this.m_y0Pos.length > this.m_currentY0Index + 1 && a > this.m_y0Pos[this.m_currentY0Index + 1];) this.m_currentY0Index++;
    for (; 0 < this.m_currentY0Index && a < this.m_y0Pos[this.m_currentY0Index];) this.m_currentY0Index--;
    return this.m_y0[this.m_currentY0Index]
};
NewCamera.prototype.getTargetY = function(a, b, c, d) {
    var e = Math.floor(b / NewCamera.TILE_HEIGHT),
        f = this.m_localMins && this.m_localMins[d],
        g = this.m_localMaxs && this.m_localMaxs[d];
    a = a + NewCamera.Y0_OFFSET + (b - a) * this.m_cameraFactor;
    c = c && a < this.m_idealY ? (this.m_idealY + a) / 2 : this.m_idealY = a;
    c + this.downLimit < b && (c = b - this.downLimit);
    if (g) {
        g = this.m_localMaxs[d];
        for (a = 0; a < g.length - 1 && e >= g[a + 1];) a++;
        g = g[a] * NewCamera.TILE_HEIGHT;
        c > g && (c = g)
    }
    if (f) {
        d = this.m_localMins[d];
        for (f = 0; f < d.length - 1 && e > d[f];) f++;
        e = (d[f] + 1) * NewCamera.TILE_HEIGHT -
            this.m_height;
        c < e && (c = e)
    }
    c + this.upLimit > b && (c = b - this.upLimit);
    return c
};
NewCamera.prototype.getShakeXOffset = function() {
    return this.m_shakeTimer <= NewCamera.SHAKE_TIME ? this.shakeMaxAmplitude * this.m_shakeTimer / NewCamera.SHAKE_TIME * Math.sin(2 * Math.PI * this.m_shakeTimer / NewCamera.SHAKE_FREQUENCY) : 0
};
NewCamera.prototype.shake = function(a, b) {
    "undefined" === typeof a && (a = 0);
    this.shakeMaxAmplitude = b || NewCamera.SHAKE_DEFAULT_MAX_AMPLITUDE;
    this.m_shakeTimer = NewCamera.SHAKE_TIME + a
};
NewCamera.prototype.onDebugDraw = function(a) {
    ContextGraphics.drawRectangle(a, 0, 0, this.m_width, this.m_height, 2, Common.COLOR_BLUE, Common.COLOR_NONE)
};
NewCamera.prototype.free = function() {
    this.m_world = null
};

function WaveShaker(a) {
    this.m_canvas = a;
    this.m_maxAmpY = this.m_maxAmpX = this.oy = this.ox = 0;
    this.m_duration = this.m_freqY = this.m_freqX = 1;
    this.m_delay = this.m_timer = 0
}
WaveShaker.prototype.shake = function(a, b, c, d, e, f) {
    0 < e && (void 0 === f && (f = 0), 0 === c && (a = 0, c = 1), 0 === d && (b = 0, d = 1), this.ox = this.m_canvas.position.x, this.oy = this.m_canvas.position.y, this.m_maxAmpX = a, this.m_maxAmpY = b, this.m_freqX = c, this.m_freqY = d, this.m_timer = this.m_duration = e, this.m_delay = f)
};
WaveShaker.prototype.update = function(a) {
    0 < this.m_timer && (0 < this.m_delay ? this.m_delay -= a : (this.m_timer -= a, 0 >= this.m_timer ? (this.m_canvas.position.x = this.ox, this.m_canvas.position.y = this.oy) : (a = this.m_maxAmpY * this.m_timer / this.m_duration * Math.sin(2 * Math.PI * this.m_timer / this.m_freqY), this.m_canvas.position.x = this.ox + this.m_maxAmpX * this.m_timer / this.m_duration * Math.sin(2 * Math.PI * this.m_timer / this.m_freqX), this.m_canvas.position.y = this.oy + a)))
};
WaveShaker.prototype.isShaking = function() {
    return 0 < this.m_timer
};
WaveShaker.prototype.free = function() {
    this.m_canvas = null
};

function QuadTree(a, b, c, d, e, f) {
    this.bounds = a;
    this.level = b;
    this.parallaxXFactor = c;
    this.parallaxYFactor = d;
    this.xOffset = e;
    this.yOffset = f;
    this.children = null;
    this.objects = [];
    this.m_count = 0;
    this.lastCamera = null
}
QuadTree.minWidth = 100;
QuadTree.minHeight = 100;
QuadTree.MAX_OBJECTS_PER_NODE = 4;
QuadTree.MAX_WIDTH = 1E3;
QuadTree.MAX_HEIGHT = 768;
QuadTree.prototype.count = function() {
    return this.m_count
};
QuadTree.prototype.split = function(a, b) {
    var c = this.bounds.left(),
        d = this.bounds.top(),
        e = this.bounds.w / 2,
        f = this.bounds.h / 2;
    if (a && b) {
        var g = new QuadTree(new Rectangle(c, d, e, f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset),
            h = new QuadTree(new Rectangle(c + e, d, e, f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset),
            k = new QuadTree(new Rectangle(c, d + f, e, f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset),
            c = new QuadTree(new Rectangle(c +
                e, d + f, e, f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset);
        this.children = [g, h, k, c]
    } else if (a) g = new QuadTree(new Rectangle(c, d, e, 2 * f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset), c = new QuadTree(new Rectangle(c + e, d, e, 2 * f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset), this.children = [g, c];
    else if (b) g = new QuadTree(new Rectangle(c, d, 2 * e, f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset,
        this.yOffset), c = new QuadTree(new Rectangle(c, d + f, 2 * e, f), this.level + 1, this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset), this.children = [g, c];
    else return;
    c = [];
    d = this.objects.length;
    e = this.children.length;
    for (f = 0; f < d; f++) {
        g = this.objects[f];
        h = !1;
        for (k = 0; k < e; k++)
            if (this.children[k].insert(g)) {
                h = !0;
                break
            }
        h || c.push(g)
    }
    this.objects = c
};
QuadTree.prototype.tryToInsertIntoChildren = function(a) {
    for (var b = this.children.length, c = 0; c < b; c++)
        if (this.children[c].insert(a)) return !0;
    return !1
};
QuadTree.prototype.insert = function(a) {
    return this.bounds.containsRect(a) ? (null === this.children ? (this.objects.push(a), this.objects.length > QuadTree.MAX_OBJECTS_PER_NODE && this.split(this.bounds.w > 2 * QuadTree.minWidth, this.bounds.h > 2 * QuadTree.minHeight)) : this.tryToInsertIntoChildren(a) || this.objects.push(a), this.m_count++, !0) : !1
};
QuadTree.prototype.queryObjectsAdjusted = function(a) {
    for (var b = [], c = this.objects.length, d = 0; d < c; d++) {
        var e = this.objects[d];
        e.intersectRect(a) && b.push(e)
    }
    return b
};
QuadTree.prototype.queryAdjusted = function(a) {
    this.lastCamera = a;
    var b = [];
    if (this.bounds.intersectRect(a)) {
        if (null !== this.children)
            for (var c = this.children.length, d = 0; d < c; d++) b = b.concat(this.children[d].queryAdjusted(a));
        b = b.concat(this.queryObjectsAdjusted(a))
    }
    return b
};
QuadTree.prototype.query = function(a) {
    return 1 === this.parallaxXFactor && 1 === this.parallaxYFactor && 0 === this.xOffset && 0 === this.yOffset ? this.queryAdjusted(a) : this.queryAdjusted(new Rectangle(a.left() * this.parallaxXFactor - this.xOffset, a.top() * this.parallaxYFactor - this.yOffset, a.w, a.h))
};
QuadTree.prototype.remove = function(a) {
    if (a && this.bounds.containsRect(a)) {
        if (null !== this.children)
            for (var b = this.children.length, c = 0; c < b; c++) {
                var d = this.children[c];
                if (d.remove(a)) return null === d.children && 0 === d.objects.length && (this.children.splice(c, 1), 0 === this.children.length && (this.children = null)), !0
            }
        b = this.objects.length;
        for (c = 0; c < b; c++)
            if (this.objects[c] === a) return this.objects.splice(c, 1), !0
    }
    return !1
};
QuadTree.prototype.free = function() {
    if (null !== this.children) {
        for (var a = this.children.length, b = 0; b < a; b++) this.children[b].free();
        this.children = null
    }
    this.lastCamera = this.bounds = this.objects = null
};
QuadTree.prototype.onDebugDraw = function(a) {
    if (null !== this.lastCamera && this.bounds.intersectRect(this.lastCamera)) {
        ContextGraphics.drawRectangle(a, this.bounds.left() - this.lastCamera.left(), this.bounds.top() - this.lastCamera.top(), this.bounds.w, this.bounds.h, 2, Common.COLOR_RED, Common.COLOR_NONE);
        for (var b = this.objects.length, c = 0; c < b; c++) {
            var d = this.objects[c];
            ContextGraphics.drawRectangle(a, d.left() - this.lastCamera.left(), d.top() - this.lastCamera.top(), d.w, d.h, 2, Common.COLOR_GREEN, Common.COLOR_NONE)
        }
        if (null !==
            this.children)
            for (b = this.children.length, c = 0; c < b; c++) this.children[c].onDebugDraw(a)
    }
};

function NamedRectangle(a, b, c, d, e) {
    this.m_object = a;
    Rectangle.call(this, b, c, d, e)
}
Application.subclass(NamedRectangle, Rectangle);
NamedRectangle.prototype.getObject = function() {
    return this.m_object
};
NamedRectangle.prototype.toString = function() {
    return this.m_object + " (" + this.x + ", " + this.y + ", " + this.w + ", " + this.h + ")"
};

function BaseEnemy(a, b, c, d, e) {
    d = b.fixedPositionY(c, d);
    WorldActor.call(this, a, b, c, d);
    this.m_skin = "";
    this.m_data = e;
    this.m_speed = new Vector2D;
    this.m_prevX = this.m_x;
    this.m_prevY = this.m_y;
    this.setFlipX(e.flipX)
}
Application.subclass(BaseEnemy, WorldActor);
BaseEnemy.ST_STAND = "st100";
BaseEnemy.ST_WALK = "st101";
BaseEnemy.ST_ATTACK = "st102";
BaseEnemy.ST_DEFEAT = "st103";
BaseEnemy.ST_TELEPORT = "st104";
BaseEnemy.prototype.init = function() {};
BaseEnemy.prototype.createCorners = function() {
    this.updateBounds()
};
BaseEnemy.prototype.onCheckCollisionPlayer = function() {
    if (this.m_state !== BaseEnemy.ST_DEFEAT && this.m_state !== BaseEnemy.ST_TELEPORT)
        if (70 < this.m_y - this.m_world.player().getY() && this.m_world.player().hitTest(this)) this.m_world.player().m_y = this.m_y - 125, this.m_world.player().onEnemyStompCollision(), this.onHit(this.m_world.player(), 100);
        else if (this.m_world.player().hitTestAttack(this)) this.onHit(this.m_world.player(), 100);
    else if (this.hitTest(this.m_world.player()) || this.hitTestAttack(this.m_world.player()))
        if (this.m_world.player().enableRushMode) this.onHit(this.m_world.player(),
            100);
        else this.m_world.player().onHit(this, Application.config.misc.enemyDamage)
};
BaseEnemy.prototype.onEndAnimation = function(a) {
    switch (a) {
        case BaseEnemy.ST_ATTACK:
        case BaseEnemy.ST_TELEPORT:
            this.gotoState(BaseEnemy.ST_STAND);
            break;
        case BaseEnemy.ST_DEFEAT:
            this.m_isAwaitingDelete = !0
    }
};
BaseEnemy.prototype.onHit = function(a, b) {
    if (this.m_state === BaseEnemy.ST_DEFEAT) return !1;
    this.m_health = 0;
    this.gotoState(BaseEnemy.ST_DEFEAT, !1);
    AchievementManager.instance.onEnemyKilled();
    return !0
};
BaseEnemy.prototype.update = function(a) {
    this.m_character && this.m_character.update(a);
    this.onCheckCollisionPlayer();
    WorldActor.prototype.update.call(this, a)
};
BaseEnemy.prototype.free = function() {
    WorldActor.prototype.free.call(this)
};

function MeleeEnemy(a, b, c, d, e) {
    BaseEnemy.call(this, a, b, c, d, e);
    this.m_motionController = null;
    this.m_attackDelay = 0;
    this.init()
}
Application.subclass(MeleeEnemy, BaseEnemy);
MeleeEnemy.ATTACK_RANGE = 150;
MeleeEnemy.prototype.init = function() {
    this.m_skin = "";
    this.m_skin = Global.playerSelected === Global.PLAYER_MAL ? "ani_enemy_pirate0" + Common.randomInt(1, 2) : "ani_enemy_atlethe0" + Common.randomInt(1, 2);
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.addState(BaseEnemy.ST_STAND, this.m_skin + "_stand");
    this.m_character.addState(BaseEnemy.ST_WALK, this.m_skin + "_walk");
    this.m_character.addState(BaseEnemy.ST_ATTACK, this.m_skin + "_attack");
    this.m_character.addState(BaseEnemy.ST_DEFEAT, this.m_skin + "_defeat");
    this.m_character.addState(BaseEnemy.ST_TELEPORT, this.m_skin + "_teleport");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(BaseEnemy.ST_STAND);
    this.m_motionController = new MotionController(this.m_x, this.m_y, new DataMovement(this.m_data.moveParams, this.m_data.movement));
    this.m_motionController.startMotion()
};
MeleeEnemy.prototype.gotoState = function(a, b) {
    BaseEnemy.prototype.gotoState.call(this, a, b);
    a === BaseEnemy.ST_TELEPORT ? this.m_world.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "aniFxTeleportUmaEnemy" : "aniFxTeleportMalEnemy", this.m_x, this.m_y) : a === BaseEnemy.ST_DEFEAT && Application.instance.playSound("VO_ENEMY_HIT_" + Common.randomInt(1, 3))
};
MeleeEnemy.prototype.onEndAnimation = function(a) {
    BaseEnemy.prototype.onEndAnimation.call(this, a);
    switch (a) {
        case BaseEnemy.ST_TELEPORT:
            this.m_attackDelay = 500
    }
};
MeleeEnemy.prototype.updateAnimation = function() {
    if (this.m_state !== BaseEnemy.ST_DEFEAT && this.m_state !== BaseEnemy.ST_TELEPORT) {
        if (this.m_state !== BaseEnemy.ST_ATTACK && this.m_world.player().state() !== Player.ST_PLAYER_LOSE) {
            var a = (this.m_world.player().getX() - this.m_x) * (this.flipX() ? -1 : 1);
            0 < a && a < MeleeEnemy.ATTACK_RANGE && this.gotoState(BaseEnemy.ST_ATTACK)
        }
        switch (this.m_state) {
            case BaseEnemy.ST_STAND:
                0 !== this.m_speed.x && (this.gotoState(BaseEnemy.ST_WALK), this.setFlipX(0 > this.m_speed.x));
                break;
            case BaseEnemy.ST_WALK:
                0 ===
                    this.m_speed.x ? this.gotoState(BaseEnemy.ST_STAND) : this.setFlipX(0 > this.m_speed.x)
        }
    }
};
MeleeEnemy.prototype.update = function(a) {
    0 < this.m_attackDelay ? this.m_attackDelay -= a : (!this.m_motionController || this.m_state !== BaseEnemy.ST_STAND && this.m_state !== BaseEnemy.ST_WALK || (this.m_motionController.update(a), this.m_prevX = this.m_x, this.m_prevY = this.m_y, this.m_x = this.m_motionController.getX(), this.m_y = this.m_motionController.getY(), this.m_speed.x = (this.m_x - this.m_prevX) / a, this.m_speed.y = (this.m_y - this.m_prevY) / a), this.updateAnimation(), this.updateBoundsAttack());
    BaseEnemy.prototype.update.call(this,
        a)
};
MeleeEnemy.prototype.free = function() {
    this.m_motionController && (this.m_motionController.free(), this.m_motionController = null);
    BaseEnemy.prototype.free.call(this)
};

function RangeEnemy(a, b, c, d, e) {
    BaseEnemy.call(this, a, b, c, d, e);
    this.m_bulletOffsetY = this.m_bulletOffsetX = this.m_attackDelay = 0;
    this.m_explosionFx = this.m_skinBullet = "";
    this.init()
}
Application.subclass(RangeEnemy, BaseEnemy);
RangeEnemy.ATTACK_RANGE_MAX_X = 1E3;
RangeEnemy.ATTACK_RANGE_MIN_X = 250;
RangeEnemy.ATTACK_RANGE_Y = 400;
RangeEnemy.prototype.init = function() {
    var a;
    this.m_skin = "";
    Global.playerSelected === Global.PLAYER_MAL ? (this.m_skin = "ani_enemy_pirate0" + Common.randomInt(3, 4), a = 10, this.m_bulletOffsetX = 85, this.m_bulletOffsetY = -105, this.m_skinBullet = "aniFxTomatoBullet", this.m_explosionFx = "aniFxEnemy02Attack01") : (this.m_skin = "ani_enemy_atlethe0" + Common.randomInt(3, 4), a = 12, this.m_bulletOffsetX = 60, this.m_bulletOffsetY = -105, this.m_skinBullet = "aniFxBallBullet", this.m_explosionFx = "aniFxEnemy01Attack01");
    this.m_character = new Character(0,
        0, this.m_canvas);
    this.m_character.addState(BaseEnemy.ST_STAND, this.m_skin + "_stand");
    this.m_character.addState(BaseEnemy.ST_ATTACK, this.m_skin + "_attack", [{
        caller: this,
        callback: this.createBullet,
        frame: a
    }]);
    this.m_character.addState(BaseEnemy.ST_DEFEAT, this.m_skin + "_defeat");
    this.m_character.addState(BaseEnemy.ST_TELEPORT, this.m_skin + "_teleport");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(BaseEnemy.ST_STAND)
};
RangeEnemy.prototype.gotoState = function(a, b) {
    BaseEnemy.prototype.gotoState.call(this, a, b);
    a === BaseEnemy.ST_TELEPORT ? this.m_world.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "aniFxTeleportUmaEnemy" : "aniFxTeleportMalEnemy", this.m_x, this.m_y) : a === BaseEnemy.ST_DEFEAT && Application.instance.playSound("VO_ENEMY_HIT_" + Common.randomInt(1, 3))
};
RangeEnemy.prototype.onEndAnimation = function(a) {
    BaseEnemy.prototype.onEndAnimation.call(this, a);
    switch (a) {
        case BaseEnemy.ST_ATTACK:
            this.m_attackDelay = 2E3;
            break;
        case BaseEnemy.ST_TELEPORT:
            this.m_attackDelay = 500
    }
};
RangeEnemy.prototype.createBullet = function() {
    Bullet.createEnemyBullet(this.m_world, this.m_x + this.m_bulletOffsetX * (this.m_flipX ? -1 : 1), this.m_y + this.m_bulletOffsetY, this.m_skinBullet, this.m_explosionFx, this.m_flipX)
};
RangeEnemy.prototype.update = function(a) {
    BaseEnemy.prototype.update.call(this, a);
    switch (this.m_state) {
        case BaseEnemy.ST_STAND:
            0 < this.m_attackDelay ? this.m_attackDelay -= a : Math.abs(this.m_x - this.m_world.player().getX()) < Application.config.misc.enemyShootMaxRange && Math.abs(this.m_x - this.m_world.player().getX()) > RangeEnemy.ATTACK_RANGE_MIN_X && Math.abs(this.m_y - this.m_world.player().getY()) < RangeEnemy.ATTACK_RANGE_Y && (this.m_flipX && this.m_x > this.m_world.player().getX() || !this.m_flipX && this.m_x < this.m_world.player().getX()) &&
                this.gotoState(BaseEnemy.ST_ATTACK)
    }
};

function BossLvl8(a, b, c, d, e) {
    var f = Application.instance.addDisplayContainer();
    a.addChild(f);
    BaseEnemy.call(this, f, b, c, d, e);
    BossLvl8.instance = this;
    HudPlatformRunner.instance.showBossHud(!0);
    this.m_clipUpBody = null;
    this.m_shadowClip = Application.instance.getClip("mcShadow");
    this.m_canvas.addChild(this.m_shadowClip);
    this.m_invulnerableFx = null;
    this.m_baseHealth = Application.config.bossLvl8.health;
    this.m_health = -1;
    this.setHealth(this.m_baseHealth);
    this.m_collision = null;
    this.m_control = new ActorControl(this);
    this.setFlipX(!0);
    this.m_attackDelay = 0;
    this.m_paused = !0;
    this.m_behavior = BossLvl8.BEHAVIOR_01;
    this.m_bossState = BossLvl8.STATE_STAND;
    this.m_timeHit = this.m_timer = 0;
    BossLvl8.GRAVITY = Application.config.player.jumpGravity;
    this.m_teleported = !1;
    this.m_hpThresholds = Application.config.bossLvl8.waveHpThreshold.slice();
    this.m_waveManager = new BossLvl8WaveManager(this.m_world, this);
    this.init();
    this.itemAppear = new BossItemAppear(this)
}
Application.subclass(BossLvl8, BaseEnemy);
BossLvl8.DAMAGE_RUSH = 2;
BossLvl8.GRAVITY = 0;
BossLvl8.ATTACK_RANGE_MIN_X = 200;
BossLvl8.ATTACK_RANGE_Y = 500;
BossLvl8.BEHAVIOR_01 = 1E3;
BossLvl8.BEHAVIOR_02 = 1001;
BossLvl8.STATE_STAND = 100;
BossLvl8.STATE_MOVE = 101;
BossLvl8.ST_HIT = "st110";
BossLvl8.ST_INTRO = "st111";
BossLvl8.ST_TELEPORT_IN = "st112";
BossLvl8.ST_TELEPORT_OUT = "st113";
BossLvl8.ST_ANGRY_OUT = "st114";
BossLvl8.ST_ANGRY_IN = "st115";
BossLvl8.ST_SUMMON = "st116";
BossLvl8.prototype.createCorners = function() {
    null === this.m_bounds && this.updateBounds();
    this.m_cornersArray = null;
    var a;
    if (null !== this.m_bounds) {
        a = new Rectangle;
        a.x = this.m_bounds.x;
        a.y = this.m_bounds.y;
        a.w = this.m_bounds.w;
        a.h = this.m_bounds.h;
        this.m_corners = [];
        var b = this.m_flipX ? -this.m_scaleX : this.m_scaleX,
            c = this.m_scaleY,
            d = this.m_flipX ? -1 : 1;
        this.m_scaleX == this.m_scaleY && (this.m_scale = this.m_scaleX);
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + a.h), d, 1));
        this.m_corners.push(new CollisionPoint(b *
            (a.x + .5 * a.w), c * (a.y + a.h), 0, 1));
        this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + a.h), -d, 1));
        this.m_corners.push(null);
        this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .75 * a.h), d, 0));
        this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + .75 * a.h), -d, 0));
        this.m_corners.push(null);
        this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * a.y, d, -1));
        this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b * a.x, c * a.y, -d, -1));
        this.m_cornersArray = [];
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        a = [];
        this.m_flipX ? (a.push([2, 1, 4, 0, 6, 8, 11]), a.push([0, 1, 3, 2, 5, 7, 9]), a.push([11, 10, 8, 9, 6, 4, 2]), a.push([9, 10, 7, 11, 5, 3, 0])) : (a.push([0, 1, 3, 2, 5, 7, 9]), a.push([2, 1, 4, 0, 6, 8, 11]), a.push([9, 10, 7, 11, 5, 3, 0]), a.push([11, 10, 8, 9, 6, 4, 2]));
        for (b = 0; b < this.m_cornersArray.length; b++)
            for (c = 0; c < a[b].length; c++) this.m_corners[a[b][c]] && this.m_cornersArray[b].push(this.m_corners[a[b][c]])
    }
};
BossLvl8.prototype.init = function() {
    this.m_skin = Global.playerSelected === Global.PLAYER_MAL ? "ani_uma_3" : "ani_mal_3";
    this.m_character = new Character(0, 0, this.m_canvas);
    this.m_character.addState(BaseEnemy.ST_STAND, this.m_skin + "_stand");
    this.m_character.addState(BaseEnemy.ST_WALK, this.m_skin + "_run");
    this.m_character.addState(BaseEnemy.ST_ATTACK, this.m_skin + "_attack");
    this.m_character.addState(BaseEnemy.ST_DEFEAT, this.m_skin + "_defeat");
    this.m_character.addState(BossLvl8.ST_HIT, this.m_skin + "_hit");
    this.m_character.addState(BossLvl8.ST_INTRO,
        this.m_skin + "_alert");
    this.m_character.addState(BossLvl8.ST_TELEPORT_IN, this.m_skin + "_teleport_in");
    this.m_character.addState(BossLvl8.ST_TELEPORT_OUT, this.m_skin + "_teleport_out");
    this.m_character.addState(BossLvl8.ST_ANGRY_OUT, this.m_skin + "_angry");
    this.m_character.addState(BossLvl8.ST_ANGRY_IN, this.m_skin + "_angry");
    this.m_character.addState(BossLvl8.ST_SUMMON, this.m_skin + "_call");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(BaseEnemy.ST_STAND);
    this.createCorners()
};
BossLvl8.prototype.gotoState = function(a, b) {
    a != this.m_state && (this.characterGotoState(a, b), this.m_state = a);
    PoolClips.instance.releaseClip(this.m_clipUpBody);
    this.m_clipUpBody = null;
    a === BaseEnemy.ST_WALK && this.m_clip.bodyContainer && (this.m_clipUpBody = PoolClips.instance.getClip(this.m_skin + "_runup"), this.m_clip.bodyContainer.addChild(this.m_clipUpBody));
    switch (a) {
        case BaseEnemy.ST_DEFEAT:
        case BaseEnemy.ST_STAND:
            this.m_speed.x = 0;
            break;
        case BossLvl8.ST_HIT:
            this.m_timeHit = 2500;
            this.m_speed.x = 0;
            this.m_behavior ===
                BossLvl8.BEHAVIOR_02 && (this.m_timer = 100);
            break;
        case BossLvl8.ST_TELEPORT_IN:
        case BossLvl8.ST_TELEPORT_OUT:
            this.m_world.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "aniFxTeleportUma" : "aniFxTeleportMal", this.m_x, this.m_y), Application.instance.playSound("SND_BOSS_SPAWN")
    }
};
BossLvl8.prototype.onEndAnimation = function(a) {
    switch (a) {
        case BossLvl8.ST_HIT:
            this.gotoState(BaseEnemy.ST_STAND);
            this.m_behavior === BossLvl8.BEHAVIOR_01 && (this.m_timer = 1E3);
            break;
        case BaseEnemy.ST_DEFEAT:
            this.m_world.player().markToWin = !0;
            break;
        case BossLvl8.ST_INTRO:
            this.gotoState(BaseEnemy.ST_STAND);
            break;
        case BossLvl8.ST_TELEPORT_IN:
            this.m_teleported ? (this.gotoState(BossLvl8.ST_SUMMON), this.m_waveManager.startNextWave()) : this.gotoState(BossLvl8.ST_ANGRY_IN);
            break;
        case BossLvl8.ST_TELEPORT_OUT:
            this.teleport(this.m_teleported);
            break;
        case BossLvl8.ST_ANGRY_OUT:
            this.gotoState(BossLvl8.ST_TELEPORT_OUT);
            break;
        case BossLvl8.ST_ANGRY_IN:
        case BossLvl8.ST_SUMMON:
            this.gotoState(BaseEnemy.ST_STAND)
    }
};
BossLvl8.prototype.addHealth = function(a) {
    a = SMath.setRange(this.m_health + a, 0, this.m_baseHealth);
    this.setHealth(a)
};
BossLvl8.prototype.setHealth = function(a) {
    this.m_health !== a && 0 <= a && a <= this.m_baseHealth && (BaseEnemy.prototype.setHealth.call(this, a), HudPlatformRunner.instance.setBossHealthBar(this.m_health / this.m_baseHealth))
};
BossLvl8.prototype.onHit = function(a, b) {
    if (null !== this.m_invulnerableFx || this.m_state == BaseEnemy.ST_DEFEAT || this.m_state == BossLvl8.ST_HIT || this.m_teleported || 0 < this.m_timeHit) return !1;
    this.addHealth(-b);
    0 >= this.m_health ? (Application.instance.stopAllSounds(), Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "SND_BOSS_DEFEAT_UMA" : "SND_BOSS_DEFEAT_MAL"), this.gotoState(BaseEnemy.ST_DEFEAT, !1), this.m_world.game().outro()) : (this.gotoState(BossLvl8.ST_HIT), this.setStateBoss(BossLvl8.STATE_STAND));
    return !0
};
BossLvl8.prototype.onCheckCollisionPlayer = function() {
    if (!(this.m_state === BaseEnemy.ST_DEFEAT || this.m_state === BossLvl8.ST_HIT || this.m_world.player().state() === Player.ST_PLAYER_HIT || this.m_world.player().state() === Player.ST_PLAYER_LOSE || 0 < this.m_timeHit) && this.hitTest(this.m_world.player()))
        if (null !== this.m_invulnerableFx) this.m_world.player().onHit(this, Application.config.bossLvl8.damage);
        else if (60 < this.m_y - this.m_world.player().getY() && !this.m_world.player().control().isJumpingUp()) this.m_world.player().m_y = this.m_y -
        100, this.onHit(this.m_world.player(), 10), this.m_world.player().onEnemyStompCollision();
    else if (this.m_world.player().hitTestAttack(this)) this.onHit(this.m_world.player(), 10);
    else if (this.m_world.player().enableRushMode && !this.m_teleported) this.onHit(this.m_world.player(), BossLvl8.DAMAGE_RUSH);
    else this.m_world.player().onHit(this, Application.config.bossLvl8.damage)
};
BossLvl8.prototype.setStateBoss = function(a) {
    this.m_bossState = a;
    switch (a) {
        case BossLvl8.STATE_MOVE:
            this.m_speed.x = Application.config.bossLvl8.speed * (this.m_world.player().getX() > this.m_x ? 1 : -1), this.setFlipX(0 > this.m_speed.x), this.gotoState(BaseEnemy.ST_WALK)
    }
};
BossLvl8.prototype.onWaveFinished = function() {
    this.gotoState(BossLvl8.ST_TELEPORT_OUT);
    this.m_timer = 500
};
BossLvl8.prototype.teleport = function(a) {
    var b;
    b = a ? this.m_world.getWorldLocation("bossSpot") : this.m_world.getWorldLocation("bossTeleportSpot");
    this.setPosition(b.x, b.y);
    this.gotoState(BossLvl8.ST_TELEPORT_IN);
    this.m_teleported = !a
};
BossLvl8.prototype.behavior01 = function(a) {
    switch (this.m_bossState) {
        case BossLvl8.STATE_STAND:
            if (this.m_teleported || this.m_state !== BaseEnemy.ST_STAND) break;
            this.m_timer -= a;
            0 >= this.m_timer && this.setStateBoss(BossLvl8.STATE_MOVE);
            break;
        case BossLvl8.STATE_MOVE:
            this.m_collision && 0 !== this.m_collision.x && (this.m_timer = 500, this.setFlipX(this.m_world.player().getX() < this.m_x), this.setStateBoss(BossLvl8.STATE_STAND), this.gotoState(BaseEnemy.ST_STAND))
    }
};
BossLvl8.prototype.update = function(a) {
    if (!this.m_paused && 0 < this.m_health) {
        this.m_behavior === BossLvl8.BEHAVIOR_01 && this.m_state === BaseEnemy.ST_STAND && 0 < this.m_hpThresholds.length && this.m_health / this.m_baseHealth <= this.m_hpThresholds[0] && (this.m_hpThresholds.shift(), this.gotoState(BossLvl8.ST_ANGRY_OUT));
        switch (this.m_behavior) {
            case BossLvl8.BEHAVIOR_01:
                this.behavior01(a)
        }
        this.m_waveManager.update(a)
    }
    this.updatePhysics(a);
    this.m_clip && 0 < this.m_timeHit && (this.m_timeHit -= a, this.m_clip.alpha = 0 >= this.m_timeHit ?
        1 : .5);
    this.m_shadowClip && this.m_clip && (this.m_shadowClip.position.x = this.m_clip.position.x, this.m_shadowClip.position.y = this.m_clip.position.y);
    this.itemAppear && this.itemAppear.update(a);
    BaseEnemy.prototype.update.call(this, a)
};
BossLvl8.prototype.updatePhysics = function(a) {
    this.m_x += a * this.m_speed.x;
    if (this.m_collision = this.m_world.checkCollision(this)) this.m_x += this.m_collision.x, this.m_y += this.m_collision.y, 0 !== this.m_collision.x && (this.m_speed.x = 0), 0 !== this.m_collision.y && (this.m_speed.y = 0)
};
BossLvl8.prototype.free = function() {
    BossLvl8.instance = null;
    this.m_clipUpBody && (PoolClips.instance.releaseClip(this.m_clipUpBody), this.m_clipUpBody = null);
    this.m_shadowClip && (this.m_shadowClip.parent.removeChild(this.m_shadowClip), this.m_shadowClip.free(), this.m_shadowClip = null);
    this.itemAppear.free();
    this.itemAppear = null;
    this.m_waveManager.free();
    this.m_waveManager = null;
    this.m_control.free();
    this.m_control = null;
    this.m_canvas.parent.removeChild(this.m_canvas);
    BaseEnemy.prototype.free.call(this)
};

function BossItemAppear(a) {
    BossItemAppear.instance = this;
    this.world = a.m_world;
    this.item = null;
    this.timer = 2E3;
    this.state = 0;
    this.side = 1
}
BossItemAppear.instance = null;
BossItemAppear.TIMER_WAIT = 4E3;
BossItemAppear.TIMER_STAND = 1E4;
BossItemAppear.TIMER_COLLECTED = 6E3;
BossItemAppear.ST_WAIT = 1;
BossItemAppear.ST_STAND = 2;
BossItemAppear.ST_COLLECTED = 3;
BossItemAppear.prototype.playerCollected = function() {
    this.state = BossItemAppear.ST_COLLECTED;
    this.timer = BossItemAppear.TIMER_COLLECTED
};
BossItemAppear.prototype.update = function(a) {
    switch (this.state) {
        case BossItemAppear.ST_WAIT:
            this.timer -= a;
            0 > this.timer && (this.item && (this.item.m_isAwaitingDelete = !0, this.item = null), 1 == this.side ? (this.item = this.world.actorManager().addItemHealth(592, 300), this.world.createEffect("aniFxHealthAppear", 592, 300)) : (this.item = this.world.actorManager().addItemHealth(1416, 300), this.world.createEffect("aniFxHealthAppear", 1416, 300)), this.side = 1 == this.side ? 2 : 1, this.timer = BossItemAppear.TIMER_STAND, this.state = BossItemAppear.ST_STAND);
            break;
        case BossItemAppear.ST_STAND:
            this.timer -= a;
            0 > this.timer && (this.item && (this.world.createEffect("aniFxHealthAppear", this.item.getX(), this.item.getY()), this.item.m_isAwaitingDelete = !0, this.item = null), this.state = BossItemAppear.ST_WAIT, this.timer = BossItemAppear.TIMER_WAIT);
            break;
        case BossItemAppear.ST_COLLECTED:
            this.timer -= a, 0 > this.timer && (this.state = BossItemAppear.ST_WAIT, this.timer = BossItemAppear.TIMER_WAIT)
    }
};
BossItemAppear.prototype.free = function() {
    this.item = this.actorManager = BossItemAppear.instance = null
};

function BossLvl8WaveManager(a, b) {
    this.m_world = a;
    this.m_boss = b;
    this.m_waveData = Application.config.bossLvl8Waves;
    this.m_state = BossLvl8WaveManager.ST_STOP;
    this.m_waveTimer = this.m_waveDataIdx = 0;
    this.m_wave = -1;
    this.m_subWave = 0
}
BossLvl8WaveManager.ST_STOP = 0;
BossLvl8WaveManager.ST_SPAWNING = 1;
BossLvl8WaveManager.ST_END_SUBWAVE = 2;
BossLvl8WaveManager.ST_END_WAVE = 3;
BossLvl8WaveManager.prototype.startNextWave = function() {
    this.m_subWave = this.m_waveTimer = 0;
    this.m_wave++;
    this.m_state = BossLvl8WaveManager.ST_SPAWNING
};
BossLvl8WaveManager.prototype.getEnemyNpcData = function(a) {
    var b = new NpcPlatformRunner;
    b.id = a.enemyId;
    var c = this.m_world.getWorldLocation("leftSpot"),
        d = this.m_world.getWorldLocation("rightSpot"),
        e;
    0 === a.position ? (e = c, c = d, b.flipX = !1) : (e = d, b.flipX = !0);
    b.x = e.x;
    b.y = e.y + a.yOffset;
    switch (b.id) {
        case ActorManagerPlatformRunner.ITEM_MELEE_ENEMY:
            b.moveParams = "speed:" + a.speed + ";loop:1;reverse:1";
            b.movement = "lc:" + c.x + "," + (c.y + a.yOffset);
            break;
        case ActorManagerPlatformRunner.ITEM_MOVING_HAZARD:
            b.flipX = !b.flipX,
                b.moveParams = "speed:" + a.speed + ";loop:0;reverse:0", b.movement = "lc:" + (c.x + (b.flipX ? 200 : -200)) + "," + (c.y + a.yOffset)
    }
    return b
};
BossLvl8WaveManager.prototype.spawn = function() {
    for (;;) {
        if (this.m_waveDataIdx >= this.m_waveData.length || this.m_waveData[this.m_waveDataIdx].wave !== this.m_wave) {
            this.m_state = BossLvl8WaveManager.ST_END_WAVE;
            break
        }
        if (this.m_waveData[this.m_waveDataIdx].subwave !== this.m_subWave) {
            this.m_state = BossLvl8WaveManager.ST_END_SUBWAVE;
            break
        }
        if (this.m_waveData[this.m_waveDataIdx].time > this.m_waveTimer) break;
        this.m_world.actorManager().spawnEnemy(this.getEnemyNpcData(this.m_waveData[this.m_waveDataIdx]));
        this.m_waveDataIdx++
    }
    Application.instance.playSound("SND_BOSS_SPAWN")
};
BossLvl8WaveManager.prototype.allEnemiesDead = function() {
    for (var a = this.m_world.actorManager().actors(), b = 0; b < a.length; b++) {
        var c = a[b];
        if (c instanceof BaseEnemy && c !== this.m_boss || c instanceof MovingHazard) return !1
    }
    return !0
};
BossLvl8WaveManager.prototype.onAllEnemiesDead = function() {
    this.m_state === BossLvl8WaveManager.ST_END_SUBWAVE ? (this.m_waveTimer = 0, this.m_subWave++, this.m_state = BossLvl8WaveManager.ST_SPAWNING) : (this.m_boss.onWaveFinished(), this.m_state = BossLvl8WaveManager.ST_STOP)
};
BossLvl8WaveManager.prototype.update = function(a) {
    switch (this.m_state) {
        case BossLvl8WaveManager.ST_SPAWNING:
            this.m_waveTimer += a;
            this.m_waveData[this.m_waveDataIdx].time <= this.m_waveTimer && this.spawn();
            break;
        case BossLvl8WaveManager.ST_END_SUBWAVE:
        case BossLvl8WaveManager.ST_END_WAVE:
            if (this.allEnemiesDead()) this.onAllEnemiesDead()
    }
};
BossLvl8WaveManager.prototype.free = function() {
    this.m_waveData = null
};

function HudPlatformRunner(a, b, c) {
    SScreen.call(this, a, b, c);
    HudPlatformRunner.instance = this;
    this.canvas.hitArea = null;
    this.m_itemsArray = [];
    if (Global.playerSelected === Global.PLAYER_UMA) switch (this.getControl("mcGuiPlayer").setClip("gui_hud_player_uma"), this.getControl("mcGuiMpbar").setClip("gui_hud_mpbar_uma"), this.getControl("mcGuiMpbarFullFx").setClip("gui_hud_mpbar_uma02"), this.getControl("mcGuiEnemy").setClip("gui_hud_bonuslevel_mal"), Global.level) {
        case 0:
        case 1:
        case 2:
            this.getControl("mcGuiPlayer").clip.gotoAndStop(1);
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            this.getControl("mcGuiPlayer").clip.gotoAndStop(2);
            break;
        default:
            this.getControl("mcGuiPlayer").clip.gotoAndStop(3)
    } else switch (Global.level) {
        case 6:
        case 5:
        case 4:
        case 3:
            this.getControl("mcGuiPlayer").clip.gotoAndStop(2);
            break;
        case 0:
        case 2:
        case 1:
            this.getControl("mcGuiPlayer").clip.gotoAndStop(1);
            break;
        default:
            this.getControl("mcGuiPlayer").clip.gotoAndStop(3)
    }
    this.getControl("mcGuiTxtLife").setVisible(!1);
    this.getControl("mcGuiTxtLifeShadow").setVisible(!1);
    this.showLowHealthBarFx(!1);
    this.showEnergyBarFx(!1);
    this.setItemsCollected(0);
    this.showBossHud(!1);
    this.m_controlPos = {};
    this.initialize();
    this.fixGameScale()
}
Application.subclass(HudPlatformRunner, SScreen);
HudPlatformRunner.ENERGY_BAR_SLOTS = [1, 16, 34, 51, 69, 86, 100];
HudPlatformRunner.LOW_HEALTH_BAR_FRAME = 21;
HudPlatformRunner.prototype.free = function() {
    HudPlatformRunner.instance = null;
    SScreen.prototype.free.call(this)
};
HudPlatformRunner.prototype.initialize = function() {
    this.m_controlPos.mcGuiTxtLife = this.getControl("mcGuiTxtLife").canvas.position.x;
    this.m_controlPos.mcGuiTxtLifeShadow = this.getControl("mcGuiTxtLifeShadow").canvas.position.x;
    this.m_controlPos.mcGuiBtnPause = this.getControl("mcGuiBtnPause").canvas.position.x;
    this.m_controlPos.mcGuiPlayer = this.getControl("mcGuiPlayer").canvas.position.x;
    this.m_controlPos.mcGuiTxtCounter = this.getControl("mcGuiTxtCounter").canvas.position.x;
    this.m_controlPos.mcGuiTxtCounterShadow =
        this.getControl("mcGuiTxtCounterShadow").canvas.position.x;
    this.m_controlPos.mcGuiMpbar = this.getControl("mcGuiMpbar").canvas.position.x;
    this.m_controlPos.mcGuiMpbarFullFx = this.getControl("mcGuiMpbarFullFx").canvas.position.x;
    this.m_controlPos.mcGuiHpbar = this.getControl("mcGuiHpbar").canvas.position.x;
    this.m_controlPos.mcGuiHpbarAlertFx = this.getControl("mcGuiHpbarAlertFx").canvas.position.x;
    this.m_controlPos.mcGuiEnemy = this.getControl("mcGuiEnemy").canvas.position.x;
    this.m_controlPos.mcGuiHpbarEnemy =
        this.getControl("mcGuiHpbarEnemy").canvas.position.x;
    this.m_controlPos.mcGuiHpbarEnemyAlertFx = this.getControl("mcGuiHpbarEnemyAlertFx").canvas.position.x
};
HudPlatformRunner.prototype.fixGameScale = function() {
    var a = Layout.left / Layout.scale,
        b;
    for (b in this.m_controlPos) {
        var c = this.m_controlPos[b] < Application.APP_WIDTH / 2 ? -1 : 1;
        this.getControl(b).canvas.position.x = this.m_controlPos[b] + c * a
    }
};
HudPlatformRunner.prototype.showTeleportButton = function(a) {};
HudPlatformRunner.prototype.onUIPress = function(a) {
    if (GuiGame.instance) switch (a.name) {
        case "mcGuiBtnPause":
            GuiGame.instance.addPopup(GuiPopupPause, "mcGuiPopupPause", 0, 0), GuiGame.instance.canvasGame.visible = !1
    }
};
HudPlatformRunner.prototype.onUIRelease = function(a) {
    switch (a.name) {
        case "mcGuiBtnAttack":
            PlatformGameRunner.instance.world.player().onKeyUp(PlayerControl.CMD_CROSS)
    }
};
HudPlatformRunner.prototype.onItemCollected = function(a, b, c, d, e, f) {
    var g = this.getControl("mcGuiPlayer").canvas.position.x,
        h = this.getControl("mcGuiPlayer").canvas.position.y;
    a === ActorManagerPlatformRunner.ITEM_HEALTH || a === ActorManagerPlatformRunner.ITEM_HEALTH_SMALL ? (g += 125, h += 0) : (g += 65, h += 50);
    a = this.canvas.toLocal(new window.PIXI.Point(c, d), Global.game.world.objectCanvas());
    g = new ParametricParabolicMovement(a.x, a.y, g, h, .1, .06);
    h = null;
    Application.isLowDevice || (h = Application.instance.effectManager.createEffect(e,
        g.getX(), g.getY(), this.canvas));
    b.setPosition(g.getX(), g.getY());
    this.canvas.addChild(b);
    this.m_itemsArray.push({
        clip: b,
        movement: g,
        delay: f,
        fx: h
    })
};
HudPlatformRunner.prototype.setEnergyBar = function(a) {
    a = Math.floor(a);
    this.getControl("mcGuiMpbar").clip.gotoAndStop(HudPlatformRunner.ENERGY_BAR_SLOTS[a]);
    this.getControl("mcGuiMpbarFullFx").clip.gotoAndStop(HudPlatformRunner.ENERGY_BAR_SLOTS[a])
};
HudPlatformRunner.prototype.showEnergyBarFx = function(a) {
    a !== this.getControl("mcGuiMpbarFullFx").isVisible && this.getControl("mcGuiMpbarFullFx").setVisible(a)
};
HudPlatformRunner.prototype.setItemsCollected = function(a) {
    this.getControl("mcGuiTxtCounter").setText("" + a);
    this.getControl("mcGuiTxtCounterShadow").setText("" + a)
};
HudPlatformRunner.prototype.setHealthBar = function(a) {
    a = Math.floor(a * (this.getControl("mcGuiHpbar").clip.totalFrames - 1)) + 1;
    this.getControl("mcGuiHpbar").clip.gotoAndStop(a);
    this.showLowHealthBarFx(a <= HudPlatformRunner.LOW_HEALTH_BAR_FRAME)
};
HudPlatformRunner.prototype.showLowHealthBarFx = function(a) {
    a !== this.getControl("mcGuiHpbarAlertFx").isVisible && (this.getControl("mcGuiHpbarAlertFx").setVisible(a), a && (this.getControl("mcGuiHpbarAlertFx").clip.gotoAndPlay(1), Application.instance.playSound("SND_LOW_HEALTH")))
};
HudPlatformRunner.prototype.showBossHud = function(a) {
    this.getControl("mcGuiEnemy").setVisible(a);
    this.getControl("mcGuiHpbarEnemy").setVisible(a);
    var b = this.getControl("mcGuiHpbarEnemy").clip.currentFrame + 1;
    this.showBossLowHealthBarFx(a && b <= HudPlatformRunner.LOW_HEALTH_BAR_FRAME)
};
HudPlatformRunner.prototype.setBossHealthBar = function(a) {
    a = Math.floor(a * (this.getControl("mcGuiHpbarEnemy").clip.totalFrames - 1)) + 1;
    this.getControl("mcGuiHpbarEnemy").clip.gotoAndStop(a);
    this.showBossLowHealthBarFx(a <= HudPlatformRunner.LOW_HEALTH_BAR_FRAME)
};
HudPlatformRunner.prototype.showBossLowHealthBarFx = function(a) {
    a !== this.getControl("mcGuiHpbarEnemyAlertFx").isVisible && (this.getControl("mcGuiHpbarEnemyAlertFx").setVisible(a), a && this.getControl("mcGuiHpbarEnemyAlertFx").clip.gotoAndPlay(1))
};
HudPlatformRunner.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    for (var b = this.m_itemsArray.length - 1; 0 <= b; b--) {
        var c = this.m_itemsArray[b];
        c.movement.m_finish ? (Application.isLowDevice || Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_UMA ? "aniFxCountCollectibleUma" : "aniFxCountCollectibleMal", c.movement.getX(), c.movement.getY(), this.canvas), PoolClips.instance.releaseClip(c.clip), c.fx && (c.fx.setStopAndRemove(!0), c.fx = null), c.movement.free(), c.movement =
            null, this.m_itemsArray.splice(b, 1)) : 0 < c.delay ? c.delay -= a : (c.movement.update(a), c.clip.setPosition(c.movement.getX(), c.movement.getY()), c.fx && (c.fx.x = c.movement.getX(), c.fx.y = c.movement.getY()))
    }
};

function PlayerPlatformRunner(a, b, c, d) {
    d = b.getMaxHeight(c, d);
    this.dummyJumper = new Jumper(this, b);
    this.dummyJumperAnimation = new JumperAnimation(this, b);
    this.doTeleport = this.isReadyToTeleport = !1;
    this.m_timerDie = 0;
    this.m_lastStateOfJumping = this.markToLose = this.markToWin = this.m_disablePlayer = !1;
    this.m_lastPosOfJumping = 0;
    Player.call(this, a, b, c, d);
    this.setScale(.91);
    this.canvasShadow = Application.instance.addDisplayContainer();
    this.m_canvas.addChild(this.canvasShadow);
    this.canvasFx = Application.instance.addDisplayContainer();
    this.m_clipUpBody = null;
    this.m_pendingShoot = !1;
    this.m_control = new PlayerControl(this, window.config.player);
    this.skin = GuiGame.sandboxPlayerSkin || PlayerPlatformRunner.selectSkin();
    this.m_character = new Character(c, d, this.m_canvas);
    this.m_character.addState(Player.ST_PLAYER_STAND, this.skin + "_stand");
    this.m_character.addState(Player.ST_PLAYER_STAND_2, this.skin + "_idle");
    this.m_character.addState(Player.ST_PLAYER_WALK, this.skin + "_run");
    this.m_character.addState(Player.ST_PLAYER_JUMP_UP, this.skin + "_jump_up_1");
    this.m_character.addState(Player.ST_PLAYER_JUMP_DOWN, this.skin + "_jump_down_1");
    this.m_character.addState(Player.ST_PLAYER_HIT, this.skin + "_hit");
    this.m_character.addState(Player.ST_PLAYER_LOSE, this.skin + "_defeat");
    this.m_character.addState(Player.ST_PLAYER_WIN, this.skin + "_win");
    this.m_character.addState(Player.ST_PLAYER_LAND, this.skin + "_land_1");
    this.m_character.addState(PlayerPlatformRunner.ST_PLAYER_UMA_SWITCH, this.skin + "_switch");
    this.m_character.addState(PlayerPlatformRunner.ST_PLAYER_PENDULUM,
        this.skin + "_swing");
    this.m_character.onEndAnimation(this, this.onEndAnimation);
    this.gotoState(Player.ST_PLAYER_STAND);
    this.canvasShadow.addChild(Application.instance.getClip("mcShadow"));
    this.createCorners();
    this.m_limitRight = this.m_limitLeft = this.m_limitUp = !0;
    this.m_disablePlayer = !1;
    this.m_timerDie = -1;
    this.m_baseHealth = Application.config.misc.playerHealth;
    this.m_health = -1;
    this.setHealth(this.m_baseHealth);
    this.m_energy = -1;
    this.m_adrenalineDepletingTimer = this.m_adrenalineTimer = 0;
    this.pausedAdrenalineTimer = !0;
    this.setEnergy(0);
    this.allowRushMode = !0;
    HudPlatformRunner.instance.showEnergyBarFx(!1);
    this.m_lastPosOfJumping = this.m_y;
    this.m_lastStateOfJumping = !1;
    this.m_className = "PlayerRunner";
    this.m_tempUmaPlatform = null;
    this.timeHit = 0;
    this.m_fxRushScreen = this.fxRushBody = this.fxRush = null;
    this.fxSufix = Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma";
    this.stopAgainstWall = this.changeDireccionAfterJumpBack = !1;
    this.m_path = Application.sandbox && Application.sandbox.startSettings.savePlayerPath ? new PathCapturer :
        null;
    PlayerPlatformRunner.KEY_JUMP = window.config.settings.keyJump;
    PlayerPlatformRunner.KEY_ATTACK = window.config.settings.keyAttack
}
Application.subclass(PlayerPlatformRunner, Player);
PlayerPlatformRunner.HIT_TIME = 3E3;
PlayerPlatformRunner.DIE_TIME = 500;
PlayerPlatformRunner.LOOK_AHEAD_DISTANCE = 55;
PlayerPlatformRunner.ST_PLAYER_UMA_SWITCH = "st202";
PlayerPlatformRunner.ST_PLAYER_PENDULUM = "st203";
PlayerPlatformRunner.KEY_JUMP = 0;
PlayerPlatformRunner.KEY_ATTACK = 0;
PlayerPlatformRunner.MAX_ENERGY = 6;
PlayerPlatformRunner.OFFSET_FX = 70;
PlayerPlatformRunner.prototype.setActorClip = function(a) {};
PlayerPlatformRunner.selectSkin = function() {
    if (Global.playerSelected === Global.PLAYER_MAL) switch (Global.level) {
        case 0:
        case 1:
        case 2:
            return "ani_mal_1";
        case 3:
        case 4:
        case 5:
        case 6:
            return "ani_mal_2";
        default:
            return "ani_mal_3"
    }
    if (Global.playerSelected === Global.PLAYER_UMA) switch (Global.level) {
        case 6:
        case 5:
        case 4:
        case 3:
            return "ani_uma_2";
        case 0:
        case 2:
        case 1:
            return "ani_uma_1";
        default:
            return "ani_uma_3"
    }
};
PlayerPlatformRunner.prototype.free = function() {
    this.m_clipUpBody && (PoolClips.instance.releaseClip(this.m_clipUpBody), this.m_clipUpBody = null);
    this.m_tempUmaPlatform = null;
    this.fxRush && (this.fxRush.isAwaitingDelete = !0, this.fxRush = null);
    this.fxRushBody && (this.fxRushBody.isAwaitingDelete = !0, this.fxRushBody = null);
    this.m_fxRushScreen && (this.m_fxRushScreen.isAwaitingDelete = !0, this.m_fxRushScreen = null);
    this.canvasFx.parent && (this.m_canvas.removeChild(this.canvasFx), this.canvasFx = null);
    this.canvasShadow && (this.m_canvas.removeChild(this.canvasShadow),
        this.canvasShadow = null);
    this.m_path && this.m_path.free();
    Player.prototype.free.call(this)
};
PlayerPlatformRunner.prototype.activeRushMode = function() {
    this.allowRushMode && (this.timeSpeedElapse = 0, this.enableRushMode = !0, this.pausedAdrenalineTimer = !1, this.speedInit = Math.abs(this.m_speed.x), this.maxSpeed = this.rushSpeed, this.fxRush && (this.fxRush.isAwaitingDelete = !0), this.fxRushBody && (this.fxRushBody.isAwaitingDelete = !0), this.m_fxRushScreen && (this.m_fxRushScreen.isAwaitingDelete = !0, this.m_fxRushScreen = null), Application.isLowDevice || (this.fxRush = this.m_world.createEffect("aniFxAdrenalineTrail" + this.fxSufix,
        this.m_x, this.m_y)), Application.instance.effectManager.createEffect("aniFxAdrenalineStart" + this.fxSufix, 0, -PlayerPlatformRunner.OFFSET_FX, this.canvasFx), this.fxRushBody = Application.instance.effectManager.createEffect("aniFxAdrenaline" + this.fxSufix, 0, -PlayerPlatformRunner.OFFSET_FX, this.canvasFx), this.m_fxRushScreen = Application.instance.effectManager.createEffect("aniFxRushModeStand" + this.fxSufix, 512, 384, GuiGame.instance.canvasControl), Global.game.createRushShader(), HudPlatformRunner.instance.showEnergyBarFx(!0))
};
PlayerPlatformRunner.prototype.removeRushMode = function() {
    this.fxRush && this.fxRush.setStopAndRemove(!0);
    this.fxRushBody && (this.fxRushBody.isAwaitingDelete = !0, this.fxRushBody = null);
    this.m_fxRushScreen && (this.m_fxRushScreen.isAwaitingDelete = !0, this.m_fxRushScreen = null);
    this.enableRushMode && (this.fxRushBody = Application.instance.effectManager.createEffect("aniFxAdrenalineEnd" + this.fxSufix, 0, -PlayerPlatformRunner.OFFSET_FX, this.canvasFx));
    this.timeSpeedElapse = 0;
    this.speedInit = Math.abs(this.m_speed.x);
    this.maxSpeed =
        this.baseSpeed;
    this.enableRushMode = !1;
    this.pausedAdrenalineTimer = !0;
    Global.game.removeRushShader();
    HudPlatformRunner.instance.showEnergyBarFx(!1)
};
PlayerPlatformRunner.prototype.cancelRushMode = function() {
    this.allowRushMode = !1
};
PlayerPlatformRunner.prototype.onSwitchPlatform = function(a) {
    this.stop();
    this.gotoState(PlayerPlatformRunner.ST_PLAYER_UMA_SWITCH);
    this.m_tempUmaPlatform = a
};
PlayerPlatformRunner.prototype.createCorners = function() {
    this.updateBounds();
    this.m_cornersArray = null;
    var a;
    if (null !== this.m_bounds) {
        a = new Rectangle;
        a.x = this.m_bounds.x;
        a.y = this.m_bounds.y;
        a.w = this.m_bounds.w;
        a.h = this.m_bounds.h;
        this.m_corners = [];
        var b = this.m_flipX ? -this.m_scaleX : this.m_scaleX,
            c = this.m_scaleY,
            d = this.m_flipX ? -1 : 1;
        this.m_scaleX == this.m_scaleY && (this.m_scale = this.m_scaleX);
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + a.h), d, 1));
        this.m_corners.push(new CollisionPoint(b * (a.x +
            .5 * a.w), c * (a.y + a.h), 0, 1));
        this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + a.h), -d, 1));
        this.m_corners.push(null);
        this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + .75 * a.h), d, 0));
        this.m_corners.push(new CollisionPoint(b * a.x, c * (a.y + .75 * a.h), -d, 0));
        this.m_corners.push(null);
        this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b * (a.x + a.w), c * a.y, d, -1));
        this.m_corners.push(null);
        this.m_corners.push(new CollisionPoint(b * a.x, c * a.y, -d, -1));
        this.m_cornersArray = [];
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        this.m_cornersArray.push([]);
        d = [];
        this.m_flipX ? (d.push([2, 1, 4, 0, 6, 8, 11]), d.push([0, 1, 3, 2, 5, 7, 9]), d.push([11, 10, 8, 9, 6, 4, 2]), d.push([9, 10, 7, 11, 5, 3, 0])) : (d.push([0, 1, 3, 2, 5, 7, 9]), d.push([2, 1, 4, 0, 6, 8, 11]), d.push([9, 10, 7, 11, 5, 3, 0]), d.push([11, 10, 8, 9, 6, 4, 2]));
        for (var e = 0; e < this.m_cornersArray.length; e++)
            for (var f = 0; f < d[e].length; f++) this.m_corners[d[e][f]] && this.m_cornersArray[e].push(this.m_corners[d[e][f]]);
        this.m_climbCorners = [];
        this.m_flipX ? (this.m_climbCorners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + a.h), -1, 1)), this.m_climbCorners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + this.m_control.climbFactor * a.h), -1, -1))) : (this.m_climbCorners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + a.h), 1, 1)), this.m_climbCorners.push(new CollisionPoint(b * (a.x + a.w), c * (a.y + this.m_control.climbFactor * a.h), 1, -1)));
        this.m_climbCorners.push(new CollisionPoint(b * (a.x + a.w + PlayerPlatformRunner.LOOK_AHEAD_DISTANCE), c * (a.y + this.m_control.climbFactor *
            a.h), 1, -1))
    }
};
PlayerPlatformRunner.prototype.onKeyDown = function(a) {
    if (!this.m_disablePlayer && (Player.prototype.onKeyDown.call(this, a), !this.m_freeMovement)) switch (a) {
        case PlayerPlatformRunner.KEY_ATTACK:
            this.onAttack();
            break;
        case PlayerPlatformRunner.KEY_JUMP:
            if (this.m_state !== PlayerPlatformRunner.ST_PLAYER_PENDULUM) {
                if (this.dummyJumperAnimation.state == JumperAnimation.ST_JUMP && this.dummyJumperAnimation.enableClimbBoost) this.dummyJumper.onJumpClimbBoost();
                else if (this.canChangeState()) this.dummyJumper.onJumpFront();
                if (this.canChangeState())
                    if (this.m_flipX) this.m_control.onLeft(!0);
                    else this.m_control.onRight(!0)
            }
    }
};
PlayerPlatformRunner.prototype.onKeyUp = function(a) {
    if (!this.m_disablePlayer) switch (Player.prototype.onKeyUp.call(this, a), a) {
        case Common.KEY_SPACE:
            this.isReadyToTeleport && (this.doTeleport = !0)
    }
};
PlayerPlatformRunner.prototype.setPosition = function(a, b) {
    this.m_oldX = this.m_x = a;
    this.m_oldY = this.m_y = b
};
PlayerPlatformRunner.prototype.goTeleportPosition = function(a, b) {
    this.m_path && this.m_path.startLine();
    this.stop();
    this.setPosition(a, b)
};
PlayerPlatformRunner.prototype.stop = function() {
    this.dummyJumper.cancel();
    this.dummyJumperAnimation.cancel();
    Application.log("PlayerPlatformRunner.stop >> enabledControls:false ");
    this.m_world.game().enabledControls = !1;
    this.m_control.reset();
    this.onResetSpeed(Global.SPEED_INIT_DOOR)
};
PlayerPlatformRunner.prototype.getDisable = function() {
    return this.m_disablePlayer
};
PlayerPlatformRunner.prototype.setDisable = function(a) {
    this.m_disablePlayer = a
};
PlayerPlatformRunner.prototype.setInvulnerability = function(a) {
    this.m_isInvulnerable = a
};
PlayerPlatformRunner.prototype.isJumping = function() {
    return this.m_control.isJumping()
};
PlayerPlatformRunner.prototype.onFloor = function() {};
PlayerPlatformRunner.prototype.gotoState = function(a, b) {
    this.m_state != Player.ST_PLAYER_WIN && this.m_state != Player.ST_PLAYER_LOSE && (Player.prototype.gotoState.call(this, a, b), this.m_canvas.addChild(this.canvasFx), this.updateBounds())
};
PlayerPlatformRunner.prototype.characterGotoState = function(a, b) {
    Player.prototype.characterGotoState.call(this, a, b);
    PoolClips.instance.releaseClip(this.m_clipUpBody);
    this.m_clipUpBody = null;
    this.m_pendingShoot = !1;
    a === Player.ST_PLAYER_WALK && this.m_clip.bodyContainer && (this.m_clipUpBody = PoolClips.instance.getClip(this.skin + "_runup"), this.m_clip.bodyContainer.addChild(this.m_clipUpBody))
};
PlayerPlatformRunner.prototype.onEndAnimation = function(a) {
    Player.prototype.onEndAnimation.call(this, a);
    switch (a) {
        case Player.ST_PLAYER_WALK:
            this.m_character.animation == this.skin + "_land_spin" && (this.m_character.addState(Player.ST_PLAYER_WALK, this.skin + "_run"), this.characterGotoState(Player.ST_PLAYER_WALK));
            break;
        case Player.ST_PLAYER_LOSE:
            GuiGame.instance.gotoRemoveScreen = GuiManager.SC_TRY_AGAIN;
            break;
        case PlayerPlatformRunner.ST_PLAYER_UMA_SWITCH:
            this.gotoState(Player.ST_PLAYER_STAND);
            this.m_tempUmaPlatform &&
                (this.m_tempUmaPlatform.onActivate(), this.m_tempUmaPlatform = null);
            break;
        case PlayerPlatformRunner.ST_PLAYER_PENDULUM:
            this.m_x += 120 * (this.m_flipX ? -1 : 1), this.m_y -= PlayerPlatformRunner.OFFSET_FX, this.gotoState(Player.ST_PLAYER_WALK), this.dummyJumper.onJumpSwing()
    }
};
PlayerPlatformRunner.prototype.addEnergy = function(a) {
    var b = SMath.setRange(this.m_energy + a, 0, PlayerPlatformRunner.MAX_ENERGY);
    this.setEnergy(b);
    0 < a && this.m_energy < PlayerPlatformRunner.MAX_ENERGY && this.m_world.createEffect("aniFxAdrenalineUp" + this.fxSufix, this.m_x, this.m_y)
};
PlayerPlatformRunner.prototype.setEnergy = function(a) {
    this.m_energy !== a && 0 <= a && a <= PlayerPlatformRunner.MAX_ENERGY && (this.m_energy = a, HudPlatformRunner.instance.setEnergyBar(this.m_energy));
    this.m_energy === PlayerPlatformRunner.MAX_ENERGY ? (0 >= this.m_adrenalineTimer && (Application.instance.playSound("SND_ADRENALINE_BAR"), this.m_world.game().onRushModeScene(!0)), this.m_adrenalineTimer = Application.config.misc.adrenalineDuration) : 0 < this.m_energy && (this.m_adrenalineDepletingTimer = Application.config.misc.adrenalineDepletingTime)
};
PlayerPlatformRunner.prototype.addHealth = function(a) {
    a = SMath.setRange(this.m_health + a, 0, this.m_baseHealth);
    this.setHealth(a)
};
PlayerPlatformRunner.prototype.setHealth = function(a) {
    this.m_health !== a && 0 <= a && a <= this.m_baseHealth && (Player.prototype.setHealth.call(this, a), HudPlatformRunner.instance.setHealthBar(this.m_health / this.m_baseHealth))
};
PlayerPlatformRunner.prototype.onHit = function(a, b) {
    if (this.m_state == Player.ST_PLAYER_HIT || this.m_state == Player.ST_PLAYER_LOSE || 0 >= this.m_health || 0 < this.timeHit || this.enableRushMode) return !1;
    Application.log("PlayerPlatformRunner.onHit >> ab: " + a + " dm: " + b);
    this.m_isInvulnerable || (this.addHealth(-b), 0 >= this.m_health ? (this.m_world.game().enabledControls = !1, this.markToLose = !0) : this.timeHit = PlayerPlatformRunner.HIT_TIME, this.dummyJumper.onJumpHit(), .3 > Math.random() && Application.instance.playSound(Global.playerSelected ===
        Global.PLAYER_MAL ? "VO_MAL_HIT" : "VO_UMA_HIT"), this.m_world.m_camera.shake(0, 5));
    return !0
};
PlayerPlatformRunner.prototype.onEnterZone = function(a) {
    Player.prototype.onEnterZone.call(this, a);
    switch (a.type) {
        case PhysicZone.CLIMB:
            this.changeDireccionAfterJumpBack = !0;
            break;
        case PhysicZone.FORCE:
            this.stopAgainstWall = !0
    }
};
PlayerPlatformRunner.prototype.onLeaveZone = function(a) {};
PlayerPlatformRunner.prototype.onPlayerFellOutOfWorld = function() {
    this.addHealth(-Application.config.player.damageOutWorld);
    0 >= this.m_health ? this.m_isDead || (this.stop(), this.m_timerDie = PlayerPlatformRunner.DIE_TIME, this.m_isDead = !0) : (this.dummyJumper.cancel(), this.dummyJumperAnimation.cancel(), this.m_control.reset(), this.m_world.game().scene = new FallingTransition(this.m_world.game()))
};
PlayerPlatformRunner.prototype.onAppearSafePoint = function() {
    this.m_world.game().showMessage(PlatformGameRunner.MESSAGE_COUNTER);
    Application.instance.playSound("SND_CHECKPOINT_RESPAWN")
};
PlayerPlatformRunner.prototype.createBullet = function() {
    Bullet.createUmaBullet(this.m_world, this.m_x + 60 * (this.m_flipX ? -1 : 1), this.m_y - 100, this.m_flipX)
};
PlayerPlatformRunner.prototype.onAttack = function() {
    this.canChangeState() && this.m_state === Player.ST_PLAYER_WALK && this.m_clip.bodyContainer && this.m_clipUpBody.name !== this.skin + "_runattack" && (PoolClips.instance.releaseClip(this.m_clipUpBody), this.m_clipUpBody = null, this.m_clipUpBody = PoolClips.instance.getClip(this.skin + "_runattack"), this.m_clipUpBody.onEndAnimation(this, function() {
            this.characterGotoState(Player.ST_PLAYER_WALK)
        }), this.m_clip.bodyContainer.addChild(this.m_clipUpBody), Global.playerSelected ===
        Global.PLAYER_MAL ? this.m_pendingShoot = !0 : Application.instance.playSound("SND_UMA_ATTACK"))
};
PlayerPlatformRunner.prototype.onSwingPoleCollision = function(a, b, c, d, e) {
    this.canChangeState() && (Application.instance.playSound("SND_SWING_POLE"), this.dummyJumper.cancel(), this.m_x = a, this.m_y = b, this.m_control.m_isJumping = !0, this.gotoState(PlayerPlatformRunner.ST_PLAYER_PENDULUM, !1), BossLvl8.instance && this.enableRushMode || this.addEnergy(Application.config.misc.swingPoleAdrenaline))
};
PlayerPlatformRunner.prototype.onPoleCollision = function() {
    this.canChangeState() && (Application.instance.playSound("SND_POLE"), .3 > Math.random() && Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "VO_MAL_BOUNCE" : "VO_UMA_BOUNCE"), this.dummyJumper.onJumpStompEnemy(), this.addEnergy(Application.config.misc.poleAdrenaline))
};
PlayerPlatformRunner.prototype.onSpringCollision = function(a, b) {
    this.canChangeState() && (Application.instance.playSound("SND_SPRING"), this.dummyJumper.onJumpSpring(a, b), this.addEnergy(Application.config.misc.springAdrenaline))
};
PlayerPlatformRunner.prototype.onEnemyStompCollision = function(a) {
    this.canChangeState() && (Application.instance.playSound("SND_STOMP"), this.dummyJumper.onJumpStompEnemy(a), this.addEnergy(Application.config.misc.enemyStompAdrenaline))
};
PlayerPlatformRunner.prototype.onBreakableStompCollision = function() {
    if (this.canChangeState()) this.dummyJumper.onJumpStompEnemy()
};
PlayerPlatformRunner.prototype.canChangeState = function() {
    return this.m_state == Player.ST_PLAYER_HIT || this.m_state == Player.ST_PLAYER_LOSE || this.m_state == Player.ST_PLAYER_WIN || this.m_state == PlayerPlatformRunner.ST_PLAYER_PENDULUM || this.m_control.isInAction() ? !1 : !0
};
PlayerPlatformRunner.prototype.getBoundsAttack = function() {
    return null !== this.m_boundsAttack ? new Rectangle(this.m_x + (this.m_flipX ? -(this.m_boundsAttack.x + this.m_boundsAttack.w) : this.m_boundsAttack.x) * this.m_scaleX, this.m_y + this.m_boundsAttack.y * this.m_scaleY, this.m_boundsAttack.w * this.m_scaleX, this.m_boundsAttack.h * this.m_scaleY) : null
};
PlayerPlatformRunner.prototype.updateBoundsAttack = function() {
    this.m_boundsAttack = null;
    null !== this.m_clip && null !== this.m_clipUpBody && (this.m_boundsAttack = this.m_clipUpBody.getCollision("mcCollisionAttack"))
};
PlayerPlatformRunner.prototype.update = function(a) {
    this.m_path && this.m_path.update(a, this.m_x, this.m_y);
    0 < this.m_timerDie && (this.m_timerDie -= a, 0 >= this.m_timerDie && (GuiGame.instance.gotoRemoveScreen = GuiManager.SC_TRY_AGAIN));
    0 < this.m_adrenalineTimer ? this.pausedAdrenalineTimer || (this.m_adrenalineTimer -= a, Global.adrenalineTime += a, 0 >= this.m_adrenalineTimer ? (this.setEnergy(0), this.m_world.game().onRushModeScene(!1)) : HudPlatformRunner.instance.setEnergyBar(Math.ceil(this.m_adrenalineTimer / Application.config.misc.adrenalineDuration *
        PlayerPlatformRunner.MAX_ENERGY))) : 0 < this.m_adrenalineDepletingTimer && (this.m_adrenalineDepletingTimer -= a, 0 >= this.m_adrenalineDepletingTimer && 8 != Global.map && !BossLvl8.instance && this.addEnergy(-1));
    this.fxRush && (this.fxRush.x = this.m_x, this.fxRush.y = this.m_y - PlayerPlatformRunner.OFFSET_FX, this.fxRush.isAwaitingDelete && (this.fxRush = null));
    this.canvasFx && this.m_clip && (this.canvasFx.position.x = this.m_clip.position.x, this.canvasFx.position.y = this.m_clip.position.y);
    if (this.m_state === PlayerPlatformRunner.ST_PLAYER_PENDULUM) {
        this.m_clip &&
            this.m_clip.mcContentFx && (this.fxRush && (this.fxRush.x += this.m_clip.mcContentFx.position.x * this.m_control.m_horizontalBuffer[0], this.fxRush.y += this.m_clip.mcContentFx.position.y + PlayerPlatformRunner.OFFSET_FX), this.canvasFx && (this.canvasFx.position.x += this.m_clip.mcContentFx.position.x * this.m_control.m_horizontalBuffer[0], this.canvasFx.position.y += this.m_clip.mcContentFx.position.y + PlayerPlatformRunner.OFFSET_FX));
        if (this.canvasShadow && this.canvasFx) {
            var b = this.m_world.getMaxHeight(this.canvasFx.x +
                this.m_world.camera().getX(), this.canvasFx.y + this.m_world.camera().getY());
            this.canvasShadow.x = this.canvasFx.x;
            this.canvasShadow.y = b - this.m_world.camera().getY();
            var c = .91;
            0 < b && (c -= .001 * (b - (this.canvasFx.y + this.m_world.camera().getY())));
            this.canvasShadow.setScale(c)
        }
        this.m_character.update(a)
    } else Global.playerSelected === Global.PLAYER_MAL && this.m_pendingShoot && this.m_clip.visible && this.m_clipUpBody && 9 <= this.m_clipUpBody.currentFrame && (this.createBullet(), this.m_pendingShoot = !1), Player.prototype.update.call(this,
        a), this.updateBoundsAttack(), this.m_freeMovement ? this.moveFree(a) : (this.timeHit -= a, this.m_clip && (this.m_clip.alpha = 0 < this.timeHit ? .5 : 1), this.dummyJumper && this.dummyJumper.state != Jumper.ST_STAND_BY ? this.dummyJumper.update(a) : this.dummyJumperAnimation && this.dummyJumper.state == Jumper.ST_STAND_BY && this.dummyJumperAnimation.update(a), this.dummyJumperAnimation.clip && this.dummyJumperAnimation.clip.mcContentFx && (this.fxRush && (this.fxRush.x = this.dummyJumperAnimation.clip.position.x + this.dummyJumperAnimation.clip.mcContentFx.position.x *
            this.m_control.m_horizontalBuffer[0], this.fxRush.y = this.dummyJumperAnimation.clip.position.y + this.dummyJumperAnimation.clip.mcContentFx.position.y + PlayerPlatformRunner.OFFSET_FX), this.canvasFx && (this.canvasFx.position.x = this.dummyJumperAnimation.clip.position.x + this.dummyJumperAnimation.clip.mcContentFx.position.x * this.m_control.m_horizontalBuffer[0], this.canvasFx.position.y = this.dummyJumperAnimation.clip.position.y + this.dummyJumperAnimation.clip.mcContentFx.position.y + PlayerPlatformRunner.OFFSET_FX)),
        this.canvasShadow && this.canvasFx && (b = this.m_world.getMaxHeight(this.canvasFx.x + this.m_world.camera().getX(), this.canvasFx.y + this.m_world.camera().getY()), this.canvasShadow.x = this.canvasFx.x, this.canvasShadow.y = b - this.m_world.camera().getY(), c = .91, 0 < b && (c -= .001 * (b - (this.canvasFx.y + this.m_world.camera().getY()))), this.canvasShadow.setScale(c)), this.m_clip.visible && this.m_state === Player.ST_PLAYER_WALK && this.stopAgainstWall && this.m_collision && 0 !== this.m_collision.x && (this.m_control.m_horizontalBuffer[0] *=
            -1, 1 == this.m_control.m_horizontalBuffer[0] ? this.m_world.m_camera.toRight() : -1 == this.m_control.m_horizontalBuffer[0] && this.m_world.m_camera.toLeft(), this.onResetSpeed(this.m_speed.x * this.m_control.m_horizontalBuffer[0] * -1), this.stopAgainstWall = !1), this.markToWin && this.m_state != Player.ST_PLAYER_LOSE && this.m_state != Player.ST_PLAYER_WIN && this.m_state != Player.ST_PLAYER_LAND && this.dummyJumper.state == Jumper.ST_STAND_BY && this.dummyJumperAnimation.state == Jumper.ST_STAND_BY && (this.dummyJumperAnimation.cancel(),
            this.dummyJumper.cancel(), this.gotoState(Player.ST_PLAYER_STAND, !1), this.m_state = Player.ST_PLAYER_WIN, this.m_control.reset(), this.markToWin = !1, this.enableRushMode && (this.removeRushMode(), this.m_world.game().restoreGameMusic()), this.m_world.game().outro(), Global.map === Global.MAP_TUTORIAL && (DataManager.instance.setGlobalRegister(DataManager.REG_TUTORIAL_DONE, 1), DataManager.instance.saveData()), this.m_path && this.m_path["export"]()), this.markToLose && this.m_state != Player.ST_PLAYER_LOSE && this.m_state !=
        Player.ST_PLAYER_WIN && this.m_state != Player.ST_PLAYER_LAND && this.dummyJumper.state == Jumper.ST_STAND_BY && this.dummyJumperAnimation.state == Jumper.ST_STAND_BY && (this.markToLose = !1, this.dummyJumperAnimation.cancel(), this.dummyJumper.cancel(), this.m_control.reset(), this.enableRushMode && (this.removeRushMode(), this.m_world.game().restoreGameMusic()), this.gotoState(Player.ST_PLAYER_LOSE)))
};

function Jumper(a, b) {
    Jumper.instance = this;
    this.player = a;
    this.world = b;
    this.canvas = this.world.objectCanvas();
    this.vyo = this.vxo = this.yo = this.xo = this.y = this.x = this.time = this.type = this.state = 0;
    this.clip = null;
    this.tile = 48;
    this.config = Application.config.player;
    this.g = this.config.jumpGravity;
    this.fxBoost = null;
    this.m_oldX = this.m_oldY = 0;
    this.catchMaxHeight = !1;
    this.m_timeX = 0;
    this.clipJumpDownName = "";
    this.checkCollision = !0;
    this.delay = 0;
    this.isSpring = this.isFall = !1
}
Jumper.instance = null;
Jumper.TIME_MAX_SPIN_1 = 300;
Jumper.TIME_MAX_SPIN_2 = 900;
Jumper.ST_STAND_BY = 0;
Jumper.ST_JUMP = 1;
Jumper.TYPE_FRONT = 10;
Jumper.TYPE_BACK = 11;
Jumper.TYPE_BACK_REVERSE = 12;
Jumper.prototype.setClip = function(a) {
    a && "" != a && (PoolClips.instance.releaseClip(this.clip), this.clip = PoolClips.instance.getClip(a), this.canvas.addChild(this.clip), this.clip.onEndAnimation(this, this.onEndAnimation), this.clip.position.x = this.xo - this.world.camera().getX(), this.clip.position.y = this.yo - this.world.camera().getY(), this.clip.scale.x = this.player.m_clip.scale.x, this.clip.scale.y = this.player.m_clip.scale.y, this.clip.gotoAndPlay(1))
};
Jumper.prototype.onEndAnimation = function(a) {
    "" != this.clipJumpDownName && (this.setClip(this.clipJumpDownName), this.clipJumpDownName = "")
};
Jumper.prototype.update = function(a) {
    a = a > Player.MAX_DT ? Player.MAX_DT : a;
    this.delay -= a;
    0 < this.delay ? (this.player.m_x = this.x, this.player.m_y = this.y) : (this.time += a, this.m_timeX += a, this.onUpdatePosition(a));
    this.state != Jumper.ST_STAND_BY ? this.player.m_clip.visible = !1 : this.catchMaxHeight = !1;
    this.clip && (this.clip.update(a), this.clip.position.x = this.x - this.world.camera().getX(), this.clip.position.y = this.y - this.world.camera().getY(), this.clip.alpha = this.player.m_clip.alpha)
};
Jumper.prototype.onUpdatePosition = function(a) {
    if (this.state == Jumper.ST_JUMP) {
        this.x = this.xo + this.vxo * this.m_timeX;
        this.y = this.yo + (this.vyo * this.time + .5 * this.g * this.time * this.time);
        0 > this.m_oldY - this.y && !this.catchMaxHeight && (this.checkCollision = this.catchMaxHeight = !0, this.player.m_control.m_isJumpingUp = !1);
        this.player.m_clip.visible = !1;
        this.player.m_x = this.x;
        this.player.m_y = this.y;
        this.player.m_speed.y = (this.player.m_y - this.m_oldY) / a;
        this.player.m_clip.position.x = this.clip.position.x;
        this.player.m_clip.position.y =
            this.clip.position.y;
        var b;
        if ((b = this.type == Jumper.TYPE_BACK ? this.world.checkCollision(this.player, this.player.corners(!0)) : this.world.checkCollision(this.player)) && this.checkCollision && (0 != b.x && (this.m_timeX -= a, this.player.m_x = this.m_oldX), 0 > b.y))
            if (this.player.m_oldX = this.player.m_x, this.player.m_oldY = this.player.m_y = this.m_oldY, this.player.m_speed.y = 0, this.player.m_clip.visible = !0, this.type == Jumper.TYPE_BACK_REVERSE || this.type == Jumper.TYPE_BACK)
                if (this.world.getCellPosition(this.player.m_x, this.player.m_y) ==
                    WorldCollisionLayer.CELL_PLATFORM ? this.player.m_y += b.y : this.player.m_y = 48 * (this.world.getTilePosition(this.player.m_x, this.player.m_y).y + 1), this.player.m_oldY = this.player.m_y, this.type == Jumper.TYPE_BACK) this.player.dummyJumperAnimation.onJumpBackRestore();
                else this.type == Jumper.TYPE_BACK_REVERSE && (this.player.m_control.m_horizontalBuffer[0] *= -1, this.onFinish());
        else this.onFinish();
        if (this.catchMaxHeight) switch (this.type) {
            case Jumper.TYPE_FRONT:
                a = this.player.m_x + this.tile * this.getDir();
                var c = this.player.m_y -
                    this.tile * JumperAnimation.TILE_Y_PERCENT;
                if (1 == this.world.getCellPosition(a, c) && this.player.dummyJumperAnimation.state == JumperAnimation.ST_STAND_BY)
                    if (a = c - this.world.getMaxHeight(a, c), 80 < a) this.onJumpBack();
                    else 0 < a && this.player.dummyJumperAnimation.checkCollisions()
        } else this.checkCollision && !this.isSpring && this.player.dummyJumperAnimation.checkCollisions();
        this.fxBoost && (this.fxBoost.x = this.player.m_x, this.fxBoost.y = this.player.m_y, this.fxBoost.isAwaitingDelete && (this.fxBoost = null));
        this.m_oldY =
            b && 0 != b.y ? this.m_oldY : this.y;
        this.m_oldX = b && 0 != b.x ? this.m_oldX : this.x
    }
};
Jumper.prototype.onFinish = function() {
    this.state = Jumper.ST_STAND_BY;
    PoolClips.instance.releaseClip(this.clip);
    this.clip = null;
    this.player.m_control.m_isJumpingUp = !1;
    this.player.m_character.addState(Player.ST_PLAYER_WALK, this.player.skin + "_run");
    this.isFall && this.time > Jumper.TIME_MAX_SPIN_1 ? (this.player.m_character.addState(Player.ST_PLAYER_WALK, this.player.skin + "_land_spin"), this.player.gotoState(Player.ST_PLAYER_WALK), this.player.onResetSpeed(Global.SPEED_INIT_JUMP_ANIMATION)) : this.time > Jumper.TIME_MAX_SPIN_2 ?
        (this.player.m_character.addState(Player.ST_PLAYER_WALK, this.player.skin + "_land_spin"), this.player.gotoState(Player.ST_PLAYER_WALK), this.player.onResetSpeed(Global.SPEED_INIT_JUMP_ANIMATION)) : this.player.gotoState(Player.ST_PLAYER_LAND)
};
Jumper.prototype.onJump = function(a, b, c, d) {
    this.x = this.xo = this.m_oldX = a;
    this.y = this.yo = this.m_oldY = b;
    this.vxo = c;
    this.vyo = d;
    this.m_timeX = this.time = 0;
    this.state = Jumper.ST_JUMP;
    this.catchMaxHeight = !1;
    this.player.m_control.m_isJumping = !0;
    this.player.m_control.m_isJumpingUp = !0;
    this.player.m_control.m_isJumpingDown = !1;
    this.player.dummyJumperAnimation.cancel();
    this.player.m_clip.visible = !1;
    this.player.m_clip.stop();
    this.checkCollision = !0;
    this.player.gotoState(Player.ST_PLAYER_WALK);
    this.delay = 0;
    this.isSpring =
        this.isFall = !1
};
Jumper.prototype.canJump = function() {
    return this.state != Jumper.ST_STAND_BY || this.player.m_control.m_isJumping ? !1 : !0
};
Jumper.prototype.cancel = function() {
    this.state = Jumper.ST_STAND_BY;
    this.player.m_clip.visible = !0;
    this.player.m_control.m_isJumping = !1;
    this.player.m_control.m_isJumpingUp = !1;
    this.player.m_control.m_isJumpingDown = !1;
    PoolClips.instance.releaseClip(this.clip);
    this.player.m_character.addState(Player.ST_PLAYER_WALK, this.player.skin + "_run");
    this.player.gotoState(Player.ST_PLAYER_WALK);
    this.catchMaxHeight = !1;
    this.clip = null
};
Jumper.prototype.getDir = function() {
    return 0 < this.player.m_clip.scale.x ? 1 : -1
};
Jumper.prototype.onJumpHit = function() {
    this.onJump(this.player.m_x, this.player.m_y, this.config.jumpBounceHitVx * -this.getDir(), -this.config.jumpBounceHitVy);
    this.type = Jumper.TYPE_FRONT;
    this.setClip(this.player.skin + "_bounce_hit");
    this.clipJumpDownName = "";
    this.player.gotoState(Player.ST_PLAYER_HIT, !1)
};
Jumper.prototype.onJumpClimbBoost = function() {
    this.player.dummyJumperAnimation.cancel();
    this.onJump(this.player.m_x, this.player.m_y, this.player.m_speed.x * this.config.jumpClimbBoostVx, -this.config.jumpClimbBoostVy);
    this.type = Jumper.TYPE_FRONT;
    this.setClip(this.player.skin + "_jump_up_3");
    this.clipJumpDownName = this.player.skin + "_jump_down_2";
    this.checkCollision = !1;
    this.fxBoost = this.world.createEffect("aniFXImpulsePlayer", this.player.m_x, this.player.m_y)
};
Jumper.prototype.onJumpStompEnemy = function(a) {
    a = a ? this.config.walkSpeed * this.getDir() : this.player.m_speed.x;
    this.onJump(this.player.m_x, this.player.m_y, a * this.config.jumpStompVx, -this.config.jumpStompVy);
    this.type = Jumper.TYPE_FRONT;
    this.setClip(this.player.skin + "_bounce");
    this.clipJumpDownName = "";
    this.delay = 250
};
Jumper.prototype.onJumpFront = function() {
    var a = 0 == this.player.m_speed.x ? this.config.walkSpeed * this.getDir() : this.player.m_speed.x;
    BossLvl8.instance && this.player.enableRushMode && (a *= .85);
    this.canJump() && (this.onJump(this.player.m_x, this.player.m_y, a * this.config.jumpNormalVx, -this.config.jumpNormalVy), this.type = Jumper.TYPE_FRONT, this.setClip(this.player.skin + "_jump_up_1"), this.clipJumpDownName = this.player.skin + "_jump_down_1")
};
Jumper.prototype.onJumpFall = function() {
    var a = 0 == this.player.m_speed.x ? this.config.walkSpeed * this.getDir() : this.player.m_speed.x;
    this.onJump(this.player.m_x, this.player.m_y, a * this.config.jumpNormalVx, .57);
    this.type = Jumper.TYPE_FRONT;
    this.setClip(this.player.skin + "_jump_down_1");
    this.clipJumpDownName = this.player.skin + "_jump_down_1";
    this.isFall = !0
};
Jumper.prototype.onJumpSwing = function() {
    var a = this.getDir() * this.player.maxSpeed * this.config.jumpSwingVx,
        b = -this.config.jumpSwingVy;
    BossLvl8.instance && !this.player.enableRushMode && (a *= .7, b *= .1);
    this.onJump(this.player.m_x, this.player.m_y, a, b);
    this.type = Jumper.TYPE_FRONT;
    this.setClip(this.player.skin + "_jump_down_2");
    this.clipJumpDownName = this.player.skin + "_jump_down_3"
};
Jumper.prototype.onJumpSpring = function(a, b) {
    this.onJump(this.player.m_x, this.player.m_y, a * this.getDir(), b);
    this.type = Jumper.TYPE_FRONT;
    this.setClip(this.player.skin + "_jump_up_2");
    this.clipJumpDownName = this.player.skin + "_jump_down_2";
    this.isSpring = !0
};
Jumper.prototype.onJumpBack = function() {
    var a = this.config.jumpBounceWallVx * -this.getDir(),
        b = -this.config.jumpBounceWallVy;
    this.type = Jumper.TYPE_BACK;
    this.player.changeDireccionAfterJumpBack && (BossLvl8.instance ? (a = this.config.jumpBounceWallBossVx * -this.getDir(), b = -this.config.jumpBounceWallBossVy) : (a = this.config.jumpBounceWallReverseVx * -this.getDir(), b = -this.config.jumpBounceWallReverseVy), this.type = Jumper.TYPE_BACK_REVERSE);
    this.onJump(this.m_oldX, this.player.m_y, a, b);
    this.setClip(this.player.skin +
        "_bounce_back");
    this.clipJumpDownName = "";.3 > Math.random() && Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "VO_MAL_BOUNCE" : "VO_UMA_BOUNCE")
};
Jumper.prototype.free = function() {
    Jumper.instance = null;
    PoolClips.instance.releaseClip(this.clip);
    this.fxBoost = this.canvas = this.world = this.player = this.clip = null
};

function JumperAnimation(a, b) {
    JumperAnimation.instance = this;
    this.player = a;
    this.world = b;
    this.state = 0;
    this.canvas = this.world.objectCanvas();
    this.tile = 48;
    this.yo = this.xo = 0;
    this.followPlayer = this.enableClimbBoost = !1;
    this.move = new LinearMovement(0, 0, .2);
    this.move.setCallbacks(this, this.onEndMovement, null)
}
JumperAnimation.ST_STAND_BY = 0;
JumperAnimation.ST_JUMP = 1;
JumperAnimation.TILE_Y_PERCENT = .1;
JumperAnimation.prototype.setClip = function(a) {
    a && "" != a && (PoolClips.instance.releaseClip(this.clip), this.clip = PoolClips.instance.getClip(a), this.canvas.addChild(this.clip), this.clip.onEndAnimation(this, this.onEndAnimation), this.clip.scale.x = this.player.m_clip.scale.x, this.clip.scale.y = this.player.m_clip.scale.y, this.clip.gotoAndPlay(1))
};
JumperAnimation.prototype.onEndMovement = function(a) {};
JumperAnimation.prototype.onEndAnimation = function(a) {
    this.cancel()
};
JumperAnimation.prototype.onJumpBackRestore = function() {
    var a = 0 < this.player.m_clip.scale.x ? 1 : -1;
    this.xo = this.player.m_x;
    this.yo = this.player.m_y;
    this.player.m_clip.visible = !1;
    this.player.m_clip.stop();
    this.move.m_initX = this.move.m_x = this.player.m_x;
    this.move.m_initY = this.move.m_y = this.player.m_y;
    this.move.gotoPosition(this.player.m_x - this.tile * a, this.player.m_y, .15);
    this.state = JumperAnimation.ST_JUMP;
    this.setClip(this.player.skin + "_jump_back_restore");
    this.clip && (this.clip.position.x = this.xo - this.world.camera().getX(),
        this.clip.position.y = this.yo - this.world.camera().getY(), this.clip.onEndAnimation(this, this.onEndAnimation));
    this.player.dummyJumper.cancel();
    this.followPlayer = !0
};
JumperAnimation.prototype.onJump = function(a, b, c, d) {
    var e = this.world.getTilePosition(this.player.m_x, this.player.m_y - this.tile * JumperAnimation.TILE_Y_PERCENT);
    this.xo = this.player.m_x;
    this.yo = (e.y + 1) * this.tile;
    this.player.dummyJumper.cancel();
    this.player.m_clip.visible = !1;
    this.player.m_clip.stop();
    this.move.m_initX = this.move.m_x = this.player.m_x;
    this.move.m_initY = this.move.m_y = this.player.m_y;
    b = 0 == b ? this.yo - this.tile : b;
    this.move.gotoPosition(a, b, c);
    this.state = JumperAnimation.ST_JUMP;
    this.setClip(Common.getRandomFromArray(d));
    this.clip && (this.clip.position.x = this.xo - this.world.camera().getX(), this.clip.position.y = this.yo - this.world.camera().getY(), this.clip.onEndAnimation(this, this.onEndAnimation));
    this.followPlayer = !1;
    this.player.m_character.addState(Player.ST_PLAYER_WALK, this.player.skin + "_run");.3 > Math.random() && Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "VO_MAL_CLIMB" : "VO_UMA_CLIMB")
};
JumperAnimation.prototype.cancel = function() {
    this.state = JumperAnimation.ST_STAND_BY;
    this.player.m_clip.visible = !0;
    this.player.m_clip.gotoAndPlay(1);
    PoolClips.instance.releaseClip(this.clip);
    this.clip = null;
    this.followPlayer = this.enableClimbBoost = !1
};
JumperAnimation.prototype.checkCollisions = function() {
    this.shortAni = !1;
    var a = 0 < this.player.m_clip.scale.x ? 1 : -1,
        b = this.player.m_x + .5 * this.tile * a,
        c = this.player.m_y - this.tile * JumperAnimation.TILE_Y_PERCENT;
    return this.world.getCellPosition(b, c) != WorldCollisionLayer.CELL_FULL || 0 == this.world.getCellPosition(b, c - this.tile) && 0 == this.world.getCellPosition(b + this.tile * a, c) || 0 != this.world.getCellPosition(b, c - this.tile) || 0 != this.world.getCellPosition(b + this.tile * a, c - this.tile) || 1 != this.world.getCellPosition(b +
        this.tile * a, c) ? !1 : (c = .5 > Math.random() ? 1 : 2, this.onJump(b + c * this.tile * a, 0, .3, [1 == c ? this.player.skin + "_climb_tile_3" : this.player.skin + "_climb_tile_4"]), !0)
};
JumperAnimation.prototype.update = function(a) {
    a = a > Player.MAX_DT ? Player.MAX_DT : a;
    switch (this.state) {
        case JumperAnimation.ST_STAND_BY:
            if (this.player.dummyJumper.catchMaxHeight) break;
            this.player.m_control.m_isJumping || this.checkCollisions();
            break;
        case JumperAnimation.ST_JUMP:
            if (this.player.m_clip.visible = !1, this.move.update(a), this.player.m_x = this.player.m_oldX = this.move.m_x, this.player.m_y = this.player.m_oldY = this.move.m_y, this.clip) {
                if (this.followPlayer) {
                    if (this.clip.position.x = this.player.m_x - this.world.camera().getX(),
                        this.clip.position.y = this.player.m_y - this.world.camera().getY(), this.world.checkCollision(this.player)) {
                        this.player.onResetSpeed(Global.SPEED_INIT_JUMP_RESTORE);
                        this.cancel();
                        break
                    }
                } else this.clip.position.x = this.xo - this.world.camera().getX(), this.clip.position.y = this.yo - this.world.camera().getY();
                this.enableClimbBoost = !1;
                this.shortAni ? 0 < this.clip.currentFrame && 5 >= this.clip.currentFrame && (this.enableClimbBoost = !0) : 0 < this.clip.currentFrame && 9 >= this.clip.currentFrame && (this.enableClimbBoost = !0);
                this.clip.alpha =
                    this.player.m_clip.alpha;
                this.clip.update(a)
            }
    }
};
JumperAnimation.prototype.free = function() {
    JumperAnimation.instance = null;
    PoolClips.instance.releaseClip(this.clip);
    this.canvas = this.world = this.player = this.clip = null
};

function AchievementManager() {
    AchievementManager.instance = this;
    AchievementManager.TOTAL_MAL_SPRAY = Application.config.misc.achievementTotalMalSpray;
    AchievementManager.TOTAL_UMA_SHELL = Application.config.misc.achievementTotalUmaShell;
    AchievementManager.TOTAL_ENEMIES = Application.config.misc.achievementTotalEnemies;
    this.m_achvCompleted = {};
    this.m_newAchvEarned = [];
    this.resetData()
}
AchievementManager.TOTAL_MAL_SPRAY = 50;
AchievementManager.TOTAL_UMA_SHELL = 50;
AchievementManager.TOTAL_ENEMIES = 30;
AchievementManager.TOTAL_BONUS_LEVEL = 3;
AchievementManager.TOTAL_CAMPAIGNS = 3;
AchievementManager.TOTAL_RUSH_MODE = 255;
AchievementManager.prototype.free = function() {
    AchievementManager.instance = null
};
AchievementManager.prototype.resetData = function() {
    this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_1] = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_1) === AchievementManager.TOTAL_MAL_SPRAY;
    this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_2] = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_2) === AchievementManager.TOTAL_UMA_SHELL;
    this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_3] = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_3) === AchievementManager.TOTAL_ENEMIES;
    this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_4] = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_4) === AchievementManager.TOTAL_BONUS_LEVEL;
    this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_5] = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_5) === AchievementManager.TOTAL_CAMPAIGNS;
    this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_6] = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_6) === AchievementManager.TOTAL_RUSH_MODE;
    this.m_newAchvEarned = []
};
AchievementManager.prototype.isAchvEarned = function(a) {
    return this.m_achvCompleted[a]
};
AchievementManager.prototype.isThereNewAchvToShow = function() {
    return 0 < this.m_newAchvEarned.length
};
AchievementManager.prototype.getNewAchvEarnedAndFlush = function() {
    var a = this.m_newAchvEarned;
    this.m_newAchvEarned = [];
    return a
};
AchievementManager.prototype.onItemCollected = function(a) {
    var b = Global.playerSelected === Global.PLAYER_MAL ? DataManager.REG_ACHIEVEMENT_1 : DataManager.REG_ACHIEVEMENT_2;
    if (!this.m_achvCompleted[b]) {
        var c = Global.playerSelected === Global.PLAYER_MAL ? AchievementManager.TOTAL_MAL_SPRAY : AchievementManager.TOTAL_UMA_SHELL,
            d = DataManager.instance.getGlobalRegister(b),
            d = Math.min(d + a, c);
        DataManager.instance.setGlobalRegister(b, d);
        d >= c && (this.m_achvCompleted[b] = !0, this.m_newAchvEarned.push(b))
    }
};
AchievementManager.prototype.onEnemyKilled = function() {
    if (!this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_3]) {
        var a = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_3);
        ++a;
        DataManager.instance.setGlobalRegister(DataManager.REG_ACHIEVEMENT_3, a);
        a >= AchievementManager.TOTAL_ENEMIES && (this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_3] = !0, this.m_newAchvEarned.push(DataManager.REG_ACHIEVEMENT_3))
    }
};
AchievementManager.prototype.onLvlCompleted = function() {
    var a;
    if (8 === Global.level) a = DataManager.REG_ACHIEVEMENT_5;
    else if (9 === Global.level) a = DataManager.REG_ACHIEVEMENT_4;
    else return;
    if (!this.m_achvCompleted[a]) {
        var b = 8 === Global.level ? AchievementManager.TOTAL_CAMPAIGNS : AchievementManager.TOTAL_BONUS_LEVEL,
            c = DataManager.instance.getGlobalRegister(a),
            c = c | (Global.playerSelected === Global.PLAYER_MAL ? 1 : 2);
        DataManager.instance.setGlobalRegister(a, c);
        c >= b && (this.m_achvCompleted[a] = !0, this.m_newAchvEarned.push(a))
    }
};
AchievementManager.prototype.onEnterRushMode = function() {
    if (!(1 > Global.map || 8 < Global.map || this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_6])) {
        var a = DataManager.instance.getGlobalRegister(DataManager.REG_ACHIEVEMENT_6),
            a = a | 1 << Global.map - 1;
        DataManager.instance.setGlobalRegister(DataManager.REG_ACHIEVEMENT_6, a);
        a >= AchievementManager.TOTAL_RUSH_MODE && (this.m_achvCompleted[DataManager.REG_ACHIEVEMENT_6] = !0, this.m_newAchvEarned.push(DataManager.REG_ACHIEVEMENT_6))
    }
};

function IntroSimple(a) {
    this.game = a;
    this.state = 0;
    this.toDelete = !1;
    GuiGame.instance.fadeIn(this, this.onEndFade);
    this.isZoomReseted = !1
}
IntroSimple.prototype.onEndFade = function() {
    this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_NAME).onComplete(this, this.onEndMessageName)
};
IntroSimple.prototype.onEndMessageName = function() {
    this.game.showMessage(PlatformGameRunner.MESSAGE_START).onComplete(this, this.onEndMessageStart)
};
IntroSimple.prototype.onEndMessageStart = function() {
    this.game.onStart();
    GuiGame.instance.zoomOut(3E3);
    this.toDelete = !0;
    this.game.hud.canvas.visible = !0;
    Common.tween({
        clip: this.game.hud.canvas,
        alpha: 0
    }, {
        alpha: 1
    }, 3E3, !0)
};
IntroSimple.prototype.update = function(a) {
    this.isZoomReseted || (this.isZoomReseted = !0, GuiGame.instance.zoomIn(10))
};
IntroSimple.prototype.free = function() {
    this.game = null;
    BossLvl8.instance && (BossLvl8.instance.m_paused = !1)
};

function IntroNpc(a, b) {
    void 0 === b && (b = !0);
    this.game = a;
    this.npcFade = b;
    this.state = 0;
    this.toDelete = !1;
    this.limit = this.time = 0;
    GuiGame.instance.fadeIn(this, this.onEndFade);
    this.isZoomReseted = !1
}
IntroNpc.ST_WAIT = 0;
IntroNpc.ST_RUN_NPC = 1;
IntroNpc.ST_WAIT_DIALOGUE = 2;
IntroNpc.DISTANCE = 672;
IntroNpc.prototype.onEndFade = function() {
    this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_NAME).onComplete(this, this.onEndMessageName)
};
IntroNpc.prototype.onEndMessageName = function() {
    this.game.onStart();
    Application.log("IntroNpc.onEndMessageName >> enabledControls:false ");
    this.game.enabledControls = !1;
    this.state = IntroNpc.ST_RUN_NPC;
    this.limit = this.game.world.player().m_x + IntroNpc.DISTANCE
};
IntroNpc.prototype.onCompleteDialogue = function() {
    if (this.npcFade) GuiGame.instance.fadeOutFast(this, this.onFadeOut);
    else this.onFadeIn()
};
IntroNpc.prototype.onFadeOut = function() {
    this.game.world.eraseIntroNpcs();
    GuiGame.instance.fadeIn(this, this.onFadeIn)
};
IntroNpc.prototype.onFadeIn = function() {
    this.game.showMessage(PlatformGameRunner.MESSAGE_START).onComplete(this, this.onEndMessageStart)
};
IntroNpc.prototype.onEndMessageStart = function() {
    this.game.onStart();
    GuiGame.instance.zoomOut(3E3);
    this.toDelete = !0;
    this.game.hud.canvas.visible = !0;
    Common.tween({
        clip: this.game.hud.canvas,
        alpha: 0
    }, {
        alpha: 1
    }, 3E3, !0)
};
IntroNpc.prototype.update = function(a) {
    this.isZoomReseted || (this.isZoomReseted = !0, GuiGame.instance.zoomIn(10));
    switch (this.state) {
        case IntroNpc.ST_RUN_NPC:
            this.game.world.player().m_speed.x = .21;
            this.game.world.player().m_x >= this.limit && (this.game.world.player().stop(), this.state = IntroNpc.ST_WAIT_DIALOGUE, this.time = 1500);
            break;
        case IntroNpc.ST_WAIT_DIALOGUE:
            if (this.time -= a, 0 >= this.time)
                if (this.state = IntroNpc.ST_WAIT, a = "D_INTRO_" + (Global.playerSelected === Global.PLAYER_MAL ? "MAL" : "UMA") + "_0" + Global.map,
                    DialogueNode.exists(a)) {
                    Application.log("SHOW DIALOGUE : " + a);
                    var b = GuiGame.instance.addPopup(GuiDialogue, "mcGuiScreenCutscene");
                    b.initDialogue(a);
                    b.onComplete(this, this.onCompleteDialogue)
                } else Application.log("DIALOGUE INTRO [" + a + "] NO FOUND"), this.onCompleteDialogue()
    }
};
IntroNpc.prototype.free = function() {
    this.game = null
};

function IntroBoss(a) {
    this.game = a;
    this.state = IntroBoss.ST_WAIT;
    this.limit = 0;
    this.timer = -1;
    this.playerClip = null;
    this.toDelete = !1;
    Application.instance.stopAllSounds();
    Application.instance.playSound("MUS_BG_METAMAP")
}
IntroBoss.ST_WAIT = 0;
IntroBoss.ST_RUN = 1;
IntroBoss.ST_STAND = 2;
IntroBoss.ST_FADE = 3;
IntroBoss.ST_ANIMATIONS = 4;
IntroBoss.ST_AFTER_ANIMATIONS = 5;
IntroBoss.DISTANCE = 200;
IntroBoss.TIMER_BEFORE_RUN = 800;
IntroBoss.TIMER_BEFORE_ANIMATIONS = 500;
IntroBoss.prototype.init = function() {
    GuiGame.instance.instantZoomIn(this, this.onEndZoomIn)
};
IntroBoss.prototype.onEndZoomIn = function() {
    GuiGame.instance.fadeIn(this, this.onEndFade)
};
IntroBoss.prototype.setPlayerClip = function(a, b, c) {
    this.playerClip && (this.playerClip.free(), this.playerClip = null);
    a = Application.instance.getClip(a);
    this.game.world.m_playerCanvas.addChild(a);
    a.position.x = b - this.game.world.camera().getX();
    a.position.y = c - this.game.world.camera().getY();
    a.scale.x = a.scale.y = this.game.world.player().scale();
    a.onEndAnimation(this, this.onEndAnimation);
    this.playerClip = a
};
IntroBoss.prototype.onEndFade = function() {
    this.timer = IntroBoss.TIMER_BEFORE_RUN
};
IntroBoss.prototype.update = function(a) {
    switch (this.state) {
        case IntroBoss.ST_WAIT:
            0 <= this.timer && (this.timer -= a, 0 >= this.timer && (this.game.onStart(), Application.log("IntroNpc.onEndMessageName >> enabledControls:false "), this.game.enabledControls = !1, this.limit = this.game.world.player().m_x + IntroBoss.DISTANCE, this.state = IntroBoss.ST_RUN));
            break;
        case IntroBoss.ST_RUN:
            this.game.world.player().m_speed.x = .15;
            this.game.world.player().m_x >= this.limit && (this.game.world.player().stop(), this.state = IntroBoss.ST_STAND,
                this.timer = IntroBoss.TIMER_BEFORE_ANIMATIONS);
            break;
        case IntroBoss.ST_STAND:
            this.timer -= a;
            if (0 >= this.timer)
                if (Global.showDialogue)
                    if (a = "D_INTRO_" + (Global.playerSelected === Global.PLAYER_MAL ? "MAL" : "UMA") + "_BOSS", DialogueNode.exists(a)) {
                        Application.log("SHOW DIALOGUE : " + a);
                        var b = GuiGame.instance.addPopup(GuiDialogue, "mcGuiScreenCutscene");
                        b.initDialogue(a);
                        b.onComplete(this, this.onCompleteDialogue)
                    } else Application.log("DIALOGUE OUTRO [" + a + "] NO FOUND"), this.onCompleteDialogue();
            else this.alertAnimations();
            break;
        case IntroBoss.ST_ANIMATIONS:
            this.game.world.player().clip().visible = !1, this.playerClip && this.playerClip.update(a)
    }
};
IntroBoss.prototype.alertAnimations = function() {
    this.state = IntroBoss.ST_ANIMATIONS;
    this.setPlayerClip(this.game.world.player().skin + "_alert", this.game.world.player().m_x, this.game.world.player().m_y);
    BossLvl8.instance.gotoState(BossLvl8.ST_INTRO);
    Application.instance.playSound("SND_INTRO_BOSS_MAL");
    Application.instance.playSound("SND_INTRO_BOSS_UMA")
};
IntroBoss.prototype.onCompleteDialogue = function() {
    BossLvl8.instance && (this.state = IntroBoss.ST_FADE, GuiGame.instance.fadeOutFast(this, this.onFadeOut))
};
IntroBoss.prototype.onFadeOut = function() {
    this.game.world.eraseIntroNpcs();
    GuiGame.instance.fadeIn(this, this.onFadeIn)
};
IntroBoss.prototype.onFadeIn = function() {
    this.alertAnimations()
};
IntroBoss.prototype.onEndAnimation = function(a) {
    GuiGame.instance.zoomOut(2E3, this, this.onEndZoomOut);
    this.state = IntroBoss.ST_AFTER_ANIMATIONS;
    this.playerClip.free();
    this.playerClip = null;
    this.game.world.player().clip().visible = !0;
    Application.instance.stopSound("MUS_BG_METAMAP");
    Application.instance.playSound("MUS_BG_MAINMENU")
};
IntroBoss.prototype.onEndZoomOut = function() {
    this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_BOSS).onComplete(this, this.onEndMessageName);
    this.game.world.shakeCamera(300)
};
IntroBoss.prototype.onEndMessageName = function() {
    this.game.onStart();
    this.toDelete = !0;
    BossLvl8.instance.m_paused = !1;
    BossLvl8.instance.itemAppear.state = BossItemAppear.ST_WAIT;
    this.game.hud.canvas.visible = !0;
    Common.tween({
        clip: this.game.hud.canvas,
        alpha: 0
    }, {
        alpha: 1
    }, 3E3, !0)
};
IntroBoss.prototype.free = function() {
    this.game = null
};

function IntroBonus(a, b, c) {
    this.game = a;
    this.canvas = b;
    this.state = IntroBonus.ST_FADING_IN;
    this.timeOut = -1;
    this.toDelete = !1;
    this.clip = null;
    this.game.canvasBackgorund.scale.x = IntroBonus.BACKGROUND_BASE_ZOOM;
    this.game.canvasBackgorund.scale.y = IntroBonus.BACKGROUND_BASE_ZOOM;
    this.game.canvasBackgorund.position.x = -Application.APP_WIDTH / 2 * (IntroBonus.BACKGROUND_BASE_ZOOM - 1);
    this.game.canvasBackgorund.position.y = -Application.APP_HEIGHT / 2 * (IntroBonus.BACKGROUND_BASE_ZOOM - 1);
    this.updateGame = !1;
    if (this.skip =
        c) this.onFadeOut();
    else GuiGame.instance.fadeIn(this, this.onFadeIn)
}
IntroBonus.MAL_POS_X = 452;
IntroBonus.MAL_POS_Y = 534;
IntroBonus.UMA_POS_X = 512;
IntroBonus.UMA_POS_Y = 684;
IntroBonus.BASE_ZOOM = 2;
IntroBonus.BACKGROUND_BASE_ZOOM = 1.5;
IntroBonus.TIME_BEFORE_ZOOM = 1500;
IntroBonus.TIME_BEFORE_SHAKE = 700;
IntroBonus.TIME_BEFORE_DISAPPEAR = 1500;
IntroBonus.MAL_DISAPPEAR_SPEED = 20;
IntroBonus.UMA_DISAPPEAR_SPEED = 12;
IntroBonus.DISTANCE_TO_DISAPPEAR = 1400;
IntroBonus.TIME_BEFORE_FADE = 500;
IntroBonus.TIME_TO_APPEAR_DUEL = 500;
IntroBonus.APPEAR_SPEED = 10;
IntroBonus.TIME_BEFORE_DIALOGUE = 1500;
IntroBonus.TIME_BEFORE_MESSAGE = 1E3;
IntroBonus.ST_FADING_IN = 0;
IntroBonus.ST_WAIT_TO_APPEAR = 1;
IntroBonus.ST_APPEARING = 2;
IntroBonus.ST_WAIT_FOR_SHAKE = 3;
IntroBonus.ST_SHAKING = 4;
IntroBonus.ST_DISAPPEARING = 6;
IntroBonus.ST_WAIT_FOR_FADE = 7;
IntroBonus.ST_FADING_OUT = 8;
IntroBonus.ST_DUEL_BEFORE_APPEAR = 9;
IntroBonus.ST_APPEARING_DUEL = 10;
IntroBonus.ST_WAIT_FOR_DIALOGUE = 11;
IntroBonus.ST_WAIT_FOR_MESSAGE = 12;
IntroBonus.ST_SKIP_TO_FADE = 13;
IntroBonus.prototype.setClip = function(a) {
    this.clip && (this.clip.free(), this.clip = null);
    this.clip = Application.instance.getClip(a);
    this.clip.position.x = Global.playerSelected === Global.PLAYER_MAL ? IntroBonus.MAL_POS_X : IntroBonus.UMA_POS_X;
    this.clip.position.y = Global.playerSelected === Global.PLAYER_MAL ? IntroBonus.MAL_POS_Y : IntroBonus.UMA_POS_Y;
    this.clip.scale.x = IntroBonus.BASE_ZOOM;
    this.clip.scale.y = IntroBonus.BASE_ZOOM;
    this.canvas.addChild(this.clip);
    this.clip.onEndAnimation(this, this.onEndAnimation)
};
IntroBonus.prototype.update = function(a) {
    this.clip && this.clip.update(a);
    if (0 < this.timeOut) {
        if (this.timeOut -= a, 0 >= this.timeOut) switch (this.state) {
            case IntroBonus.ST_WAIT_TO_APPEAR:
                this.state = IntroBonus.ST_APPEARING;
                this.setClip(Global.playerSelected === Global.PLAYER_MAL ? "mal_appear" : "uma_appear");
                Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "SND_BONUS_MAL_APPEAR" : "SND_BONUS_UMA_APPEAR");
                break;
            case IntroBonus.ST_WAIT_FOR_SHAKE:
                this.shake();
                break;
            case IntroBonus.ST_WAIT_FOR_FADE:
                this.state =
                    IntroBonus.ST_FADING_OUT;
                GuiGame.instance.fadeOutFast(this, this.onFadeOut);
                break;
            case IntroBonus.ST_DUEL_BEFORE_APPEAR:
                this.game.player.gotoState(GameBonusPlayer.ST_WALK);
                this.game.boss.gotoState(GameBonusPlayer.ST_WALK);
                this.state = IntroBonus.ST_APPEARING_DUEL;
                break;
            case IntroBonus.ST_WAIT_FOR_DIALOGUE:
                a = "D_INTRO_" + (Global.playerSelected === Global.PLAYER_MAL ? "MAL" : "UMA") + "_BONUS";
                if (DialogueNode.exists(a)) {
                    Application.log("SHOW DIALOGUE : " + a);
                    var b = GuiGame.instance.addPopup(GuiDialogue, "mcGuiScreenCutscene");
                    b.initDialogue(a);
                    b.onComplete(this, this.onCompleteDialogue)
                } else Application.log("DIALOGUE OUTRO [" + a + "] NO FOUND"), this.onCompleteDialogue();
                break;
            case IntroBonus.ST_WAIT_FOR_MESSAGE:
                this.game.hud.canvas.visible = !0;
                Common.tween({
                    clip: this.game.hud.canvas,
                    alpha: 0
                }, {
                    alpha: 1
                }, 3E3, !0);
                this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_BONUS).onComplete(this, this.onEndMessage);
                this.game.waveShaker.shake(20, 0, 100, 1, 1200, 300);
                this.game.player.gotoState(GameBonusPlayer.ST_WALK);
                this.game.boss.gotoState(GameBonusPlayer.ST_STAND);
                this.game.initializeWaves();
                break;
            case IntroBonus.ST_SKIP_TO_FADE:
                this.onFadeOut()
        }
    } else this.state === IntroBonus.ST_DISAPPEARING ? (this.clip.position.x += Global.playerSelected === Global.PLAYER_MAL ? IntroBonus.MAL_DISAPPEAR_SPEED : IntroBonus.UMA_DISAPPEAR_SPEED, this.clip.position.x >= IntroBonus.DISTANCE_TO_DISAPPEAR + (Global.playerSelected === Global.PLAYER_MAL ? IntroBonus.MAL_POS_X : IntroBonus.UMA_POS_X) && (this.state = IntroBonus.ST_WAIT_FOR_FADE, this.timeOut = IntroBonus.TIME_BEFORE_FADE)) : this.state === IntroBonus.ST_APPEARING_DUEL &&
        (this.game.player.x += IntroBonus.APPEAR_SPEED, this.game.boss.x -= IntroBonus.APPEAR_SPEED, this.game.player.x >= GameBonus.PLAYER_FIGHT_X && (this.game.player.gotoState(GameBonusPlayer.ST_STAND), this.game.boss.gotoState(GameBonusBoss.ST_STAND_DIALOGUE), this.game.player.x = GameBonus.PLAYER_FIGHT_X, this.game.boss.x = GameBonus.BOSS_FIGHT_X, this.skip ? (this.state = IntroBonus.ST_WAIT_FOR_MESSAGE, this.timeOut = IntroBonus.TIME_BEFORE_MESSAGE) : (this.state = IntroBonus.ST_WAIT_FOR_DIALOGUE, this.timeOut = IntroBonus.TIME_BEFORE_DIALOGUE)))
};
IntroBonus.prototype.shake = function() {
    this.setClip(Global.playerSelected === Global.PLAYER_MAL ? "mal_roar" : "uma_roar");
    Application.instance.effectManager.createEffect("aniFxBonusEnergyLiberation" + (Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma"), 512, 384, this.canvas);
    this.game.waveShaker.shake(40, 0, 100, 1, 1200, Global.playerSelected === Global.PLAYER_MAL ? 400 : 0);
    this.state = IntroBonus.ST_SHAKING
};
IntroBonus.prototype.onEndAnimation = function(a) {
    a.name === (Global.playerSelected === Global.PLAYER_MAL ? "mal_appear" : "uma_appear") ? Global.playerSelected === Global.PLAYER_MAL ? (this.state = IntroBonus.ST_WAIT_FOR_SHAKE, this.timeOut = IntroBonus.TIME_BEFORE_SHAKE, this.setClip(Global.playerSelected === Global.PLAYER_MAL ? "mal_stand" : "uma_stand")) : this.shake() : a.name === (Global.playerSelected === Global.PLAYER_MAL ? "mal_roar" : "uma_roar") && (this.setClip(Global.playerSelected === Global.PLAYER_MAL ? "mal_walk" : "uma_walk"),
        this.state = IntroBonus.ST_DISAPPEARING)
};
IntroBonus.prototype.onFadeIn = function() {
    this.state === IntroBonus.ST_FADING_IN ? (this.state = IntroBonus.ST_WAIT_TO_APPEAR, this.timeOut = IntroBonus.TIME_BEFORE_ZOOM) : this.state === IntroBonus.ST_DUEL_BEFORE_APPEAR && (this.updateGame = !0, this.game.player.clip.visible = !0, this.game.boss.clip.visible = !0, this.timeOut = IntroBonus.TIME_TO_APPEAR_DUEL)
};
IntroBonus.prototype.onFadeOut = function() {
    this.state = IntroBonus.ST_DUEL_BEFORE_APPEAR;
    this.clip && (this.clip.parent.removeChild(this.clip), this.clip.free(), this.clip = null);
    this.game.canvasForeGround.addChild(this.game.layer4);
    this.game.canvasForeGround.addChild(this.game.layer5);
    this.game.hud = new GameBonusHud("mcGuiHUDBonuslevel");
    this.game.hud.setHealthBar(100);
    this.game.hud.setBossHealthBar(100);
    this.game.hud.canvas.visible = !1;
    this.game.canvasBackgorund.position.x = 0;
    this.game.canvasBackgorund.position.y =
        0;
    this.game.canvasBackgorund.scale.x = 1;
    this.game.canvasBackgorund.scale.y = 1;
    GuiGame.instance.fadeIn(this, this.onFadeIn)
};
IntroBonus.prototype.onCompleteDialogue = function() {
    this.state = IntroBonus.ST_WAIT_FOR_MESSAGE;
    this.timeOut = IntroBonus.TIME_BEFORE_MESSAGE
};
IntroBonus.prototype.onEndMessage = function() {
    this.game.paused = !1;
    this.game.bulletManager.updatePattern()
};
IntroBonus.prototype.free = function() {};

function IntroRushMode(a) {
    this.game = a;
    this.toDelete = !1;
    this.state = IntroRushMode.ST_START;
    a = this.game.world.player();
    var b = PlayerPlatformRunner.OFFSET_FX * (a.state() !== PlayerPlatformRunner.ST_PLAYER_PENDULUM ? -1 : 1);
    this.game.world.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "aniFxRushModeStartMal" : "aniFxRushModeStartUma", a.getX(), a.getY() + b);
    this.game.world.m_paused = !0;
    this.game.enabledControls = !1;
    this.timer = 440
}
IntroRushMode.ST_START = 0;
IntroRushMode.ST_FADE_OUT = 1;
IntroRushMode.ST_FADE_IN = 2;
IntroRushMode.prototype.onEndFadeIn = function() {
    this.game.world.m_paused = !1;
    this.toDelete = this.game.enabledControls = !0
};
IntroRushMode.prototype.onEndFadeOut = function() {
    GuiGame.instance.fadeInWhite(this, this.onEndFadeIn);
    this.game.world.onAdrenalinaActivated();
    this.state = IntroRushMode.ST_FADE_IN;
    Application.instance.stopAllSounds();
    Application.instance.playSound("MUS_RUSH_MODE")
};
IntroRushMode.prototype.update = function(a) {
    switch (this.state) {
        case IntroRushMode.ST_START:
            this.timer -= a, 0 >= this.timer && (GuiGame.instance.fadeOutWhite(this, this.onEndFadeOut), this.state = IntroRushMode.ST_FADE_OUT)
    }
};
IntroRushMode.prototype.free = function() {
    this.game = null
};

function OutroSimple(a, b) {
    void 0 === b && (b = !0);
    this.game = a;
    this.message = b;
    this.skin = this.game.world.player().skin;
    this.state = 0;
    this.timeOut = 999999;
    this.toDelete = !1;
    this.charX = this.game.world.player().m_x;
    this.charY = this.game.world.player().m_y;
    this.clip = null;
    this.setClip(this.skin + "_stand");
    GuiGame.instance.zoomIn(2E3, this, this.onEndZoomIn)
}
OutroSimple.ST_PLAYER_STAND = "st1";
OutroSimple.ST_PLAYER_WIN = "st2";
OutroSimple.ST_PLAYER_OUT = "st3";
OutroSimple.prototype.setClip = function(a) {
    this.clip && (this.clip.free(), this.clip = null);
    this.clip = Application.instance.getClip(a);
    this.game.world.m_playerCanvas.addChild(this.clip);
    this.clip.position.x = this.charX - this.game.world.camera().getX();
    this.clip.position.y = this.charY - this.game.world.camera().getY();
    this.clip.scale.x = this.clip.scale.y = this.game.world.player().scale();
    this.clip.onEndAnimation(this, this.onEndAnimation)
};
OutroSimple.prototype.onEndAnimation = function(a) {
    a.name == this.skin + "_win" && (this.setClip(this.skin + "_stand"), this.timeOut = 1E3)
};
OutroSimple.prototype.onEndZoomIn = function() {
    this.message ? (this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_COMPLETE), this.setClip(this.skin + "_win")) : (this.timeOut = 1E3, Global.showDialogue = !0)
};
OutroSimple.prototype.onFadeOut = function() {
    GuiGame.instance.gotoRemoveScreen = Global.map == Global.MAP_TUTORIAL ? GuiManager.SC_METAMAP : GuiManager.SC_END_LEVEL
};
OutroSimple.prototype.update = function(a) {
    this.game.world.player().clip().visible = !1;
    this.clip && (this.clip.position.x = this.charX - this.game.world.camera().getX(), this.clip.position.y = this.charY - this.game.world.camera().getY(), this.clip.update(a));
    0 < this.timeOut && (this.timeOut -= a, 0 >= this.timeOut && GuiGame.instance.fadeOut(this, this.onFadeOut))
};
OutroSimple.prototype.free = function() {
    this.game = null
};

function OutroNpc(a) {
    this.game = a;
    this.skin = this.game.world.player().skin;
    this.state = 0;
    this.timeOut = 9999999;
    this.toDelete = !1;
    this.charX = this.game.world.player().m_x;
    this.charY = this.game.world.player().m_y;
    this.clip = null;
    this.setClip(this.skin + "_stand");
    GuiGame.instance.zoomIn(2E3, this, this.onEndZoomIn)
}
OutroNpc.ST_NONE = 0;
OutroNpc.ST_WAIT_DIALOGUE = 1;
OutroNpc.ST_WAIT_OUT = 2;
OutroNpc.prototype.setClip = function(a) {
    this.clip && (this.clip.free(), this.clip = null);
    this.clip = Application.instance.getClip(a);
    this.game.world.m_playerCanvas.addChild(this.clip);
    this.clip.position.x = this.charX - this.game.world.camera().getX();
    this.clip.position.y = this.charY - this.game.world.camera().getY();
    this.clip.scale.x = this.clip.scale.y = this.game.world.player().scale();
    this.clip.onEndAnimation(this, this.onEndAnimation)
};
OutroNpc.prototype.onEndAnimation = function(a) {
    a.name == this.skin + "_win" && (this.setClip(this.skin + "_stand"), this.state = OutroNpc.ST_WAIT_DIALOGUE, this.timeOut = 1E3)
};
OutroNpc.prototype.onCompleteDialogue = function() {
    this.state = OutroNpc.ST_WAIT_OUT;
    this.timeOut = 1E3
};
OutroNpc.prototype.onEndZoomIn = function() {
    this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_COMPLETE);
    this.setClip(this.skin + "_win")
};
OutroNpc.prototype.onFadeOut = function() {
    GuiGame.instance.gotoRemoveScreen = GuiManager.SC_END_LEVEL
};
OutroNpc.prototype.update = function(a) {
    this.game.world.player().clip().visible = !1;
    this.clip && (this.clip.position.x = this.charX - this.game.world.camera().getX(), this.clip.position.y = this.charY - this.game.world.camera().getY(), this.clip.update(a));
    switch (this.state) {
        case OutroNpc.ST_WAIT_DIALOGUE:
            this.timeOut -= a;
            if (0 >= this.timeOut)
                if (a = "D_OUTRO_" + (Global.playerSelected === Global.PLAYER_MAL ? "MAL" : "UMA") + "_0" + Global.map, DialogueNode.exists(a)) {
                    Application.log("SHOW DIALOGUE : " + a);
                    var b = GuiGame.instance.addPopup(GuiDialogue,
                        "mcGuiScreenCutscene");
                    b.initDialogue(a);
                    b.onComplete(this, this.onCompleteDialogue);
                    this.state = OutroNpc.ST_NONE
                } else Application.log("DIALOGUE OUTRO [" + a + "] NO FOUND"), this.onCompleteDialogue();
            break;
        case OutroNpc.ST_WAIT_OUT:
            this.timeOut -= a, 0 >= this.timeOut && (GuiGame.instance.fadeOut(this, this.onFadeOut), this.state = OutroNpc.ST_NONE)
    }
};
OutroNpc.prototype.free = function() {
    this.game = null
};

function OutroBoss(a) {
    this.game = a;
    this.skin = this.game.world.player().skin;
    this.charX = 0;
    this.charY = 672;
    this.state = OutroBoss.ST_FREEZE;
    this.timeOut = -1;
    this.toDelete = !1;
    this.clip = null;
    Common.tween({
        clip: HudPlatformRunner.instance.canvas,
        alpha: 1
    }, {
        alpha: 0
    }, 3E3, !0);
    a.world.player().cancelRushMode();
    a.world.m_pauseTimer = 5833;
    a.world.shakeCamera(0)
}
OutroBoss.ST_FREEZE = 0;
OutroBoss.ST_FIRST_FADE = 1;
OutroBoss.ST_AFTER_FREEZE = 2;
OutroBoss.ST_LAST_FADE = 3;
OutroBoss.prototype.setClip = function(a) {
    this.clip && (this.clip.free(), this.clip = null);
    this.clip = Application.instance.getClip(a);
    this.game.world.m_playerCanvas.addChild(this.clip);
    this.clip.position.x = this.charX - this.game.world.camera().getX();
    this.clip.position.y = this.charY - this.game.world.camera().getY();
    this.clip.scale.x = this.clip.scale.y = this.game.world.player().scale();
    this.clip.onEndAnimation(this, this.onEndAnimation)
};
OutroBoss.prototype.onEndAnimation = function(a) {
    a.name == this.skin + "_win" && (this.setClip(this.skin + "_stand"), this.timeOut = 1E3)
};
OutroBoss.prototype.onFadeOut = function() {
    if (this.state === OutroBoss.ST_FIRST_FADE) {
        GuiGame.instance.fadeInWhiteSlow(this, this.onFadeIn);
        var a = BossLvl8.instance;
        this.game.world.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "aniFxBossDefeatUma" : "aniFxBossDefeatMal", a.getX(), a.getY() - 48);
        this.game.world.onAdrenalinaDeactivated()
    } else GuiGame.instance.gotoRemoveScreen = GuiManager.SC_END_LEVEL
};
OutroBoss.prototype.onFadeIn = function() {
    this.state = OutroBoss.ST_AFTER_FREEZE;
    this.timeOut = 2E3
};
OutroBoss.prototype.onEndZoomIn = function() {
    this.setClip(this.skin + "_win");
    this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_COMPLETE_BOSS).onComplete(this, this.onEndMessage)
};
OutroBoss.prototype.onEndMessage = function() {
    var a = "D_OUTRO_" + (Global.playerSelected === Global.PLAYER_MAL ? "MAL" : "UMA") + "_BOSS";
    if (DialogueNode.exists(a)) {
        Application.log("SHOW DIALOGUE : " + a);
        var b = GuiGame.instance.addPopup(GuiDialogue, "mcGuiScreenCutscene");
        b.initDialogue(a);
        b.onComplete(this, this.onCompleteDialogue)
    } else Application.log("DIALOGUE OUTRO [" + a + "] NO FOUND"), this.onCompleteDialogue()
};
OutroBoss.prototype.onCompleteDialogue = function() {
    this.state = OutroBoss.ST_LAST_FADE;
    this.timeOut = 1E3
};
OutroBoss.prototype.update = function(a) {
    this.clip && (this.game.world.player().clip().visible = !1, this.clip.position.x = this.charX - this.game.world.camera().getX(), this.clip.position.y = this.charY - this.game.world.camera().getY(), this.clip.update(a));
    this.state === OutroBoss.ST_FREEZE && 3833 >= this.game.world.m_pauseTimer ? (this.state = OutroBoss.ST_FIRST_FADE, Application.instance.playSound("MUS_BG_METAMAP"), GuiGame.instance.fadeOutWhiteSlow(this, this.onFadeOut)) : 0 < this.timeOut && (this.timeOut -= a, 0 >= this.timeOut &&
        (this.timeOut = -1, this.state === OutroBoss.ST_AFTER_FREEZE ? (this.charX = this.game.world.player().getX(), this.charY = this.game.world.player().getY(), 672 > this.charY && (this.charY = 672, Application.log("Player wasn't on the floor. Clip adjusted")), this.setClip(this.skin + "_stand"), GuiGame.instance.zoomIn(2E3, this, this.onEndZoomIn)) : this.state === OutroBoss.ST_LAST_FADE && GuiGame.instance.fadeOutWhite(this, this.onFadeOut)))
};
OutroBoss.prototype.free = function() {
    this.game = null;
    this.clip && (this.clip.free(), this.clip = null)
};

function OutroBonus(a) {
    this.game = a;
    this.state = OutroBonus.ST_DEFEAT_ANIMATION;
    this.timeOut = -1;
    this.toDelete = !1;
    this.updateGame = !0;
    this.game.boss.gotoState(GameBonusBoss.ST_DEFEAT);
    this.game.m_pauseTimer = 2200;
    this.game.waveShaker.shake(20, 0, 100, 1, 1200, 0);
    this.game.stopScroll();
    Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "SND_BOSS_DEFEAT_UMA" : "SND_BOSS_DEFEAT_MAL")
}
OutroBonus.TIME_BEFORE_FADE = 1E3;
OutroBonus.TIME_BEFORE_DIALOGUE = 1E3;
OutroBonus.TIME_BEFORE_EFFECT_DOME = 1650;
OutroBonus.TIME_BEFORE_BREAKING_DOME = 350;
OutroBonus.TIME_BEFORE_DOME_FADE = 1250;
OutroBonus.TIME_BEFORE_BRIDGE = 2E3;
OutroBonus.TIME_TO_WAIT_OUT = 5E3;
OutroBonus.ST_DEFEAT_ANIMATION = 1;
OutroBonus.ST_WIN_ANIMATION = 2;
OutroBonus.ST_WAIT_FOR_FADE = 3;
OutroBonus.ST_FADING_WHITE = 4;
OutroBonus.ST_WAIT_FOR_DIALOGUE = 5;
OutroBonus.ST_WAIT_TO_EFFECT_DOME = 6;
OutroBonus.ST_WAIT_TO_BREAK_DOME = 7;
OutroBonus.ST_WAIT_FOR_DOME_FADE = 8;
OutroBonus.ST_FADING_DOME = 9;
OutroBonus.ST_WAIT_FOR_BRIDGE = 10;
OutroBonus.ST_BRIDGE_APPEARING = 11;
OutroBonus.ST_WAIT_OUT = 12;
OutroBonus.prototype.onEndMessage = function() {
    Common.tween({
        clip: this.game.hud.canvas,
        alpha: 1
    }, {
        alpha: 0
    }, 3E3, !0);
    this.state = OutroBonus.ST_WAIT_FOR_FADE;
    this.timeOut = OutroBonus.TIME_BEFORE_FADE;
    AchievementManager.instance.isThereNewAchvToShow() && GuiGame.instance.addPopup(GuiPopupNewTrophy, "mcGuiPopupNewtrophyBackground")
};
OutroBonus.prototype.onFadeOutWhite = function() {
    this.game.hud.free();
    this.game.hud = null;
    this.game.player.free();
    this.game.player = null;
    this.game.boss.free();
    this.game.boss = null;
    this.game.paused = !0;
    this.game.canvasBackgorund.removeChild(this.game.layer2);
    this.game.canvasBackgorund.addChildAt(this.game.cutsceneIsleCanvas, 1);
    GuiGame.instance.fadeInWhiteSlow(this, this.onFadeIn)
};
OutroBonus.prototype.onFadeIn = function() {
    this.state = OutroBonus.ST_WAIT_FOR_DIALOGUE;
    this.timeOut = OutroBonus.TIME_BEFORE_DIALOGUE
};
OutroBonus.prototype.onCompleteDialogue = function() {
    this.state = OutroBonus.ST_WAIT_TO_EFFECT_DOME;
    this.timeOut = OutroBonus.TIME_BEFORE_EFFECT_DOME
};
OutroBonus.prototype.onDomeFadeOut = function() {
    this.game.imagesScroll.splice(0, 1)[0].free();
    var a;
    a = new ImagesScroll(this.game.cutsceneSkyCanvas, 512, 4, .01);
    a.setInstancesNames(["mc_bg_sky_3", "mc_bg_sky_4"]);
    a.init();
    this.game.imagesScroll.splice(0, 0, a);
    this.game.canvasBackgorund.removeChild(this.game.layer1);
    this.game.canvasBackgorund.addChildAt(this.game.cutsceneSkyCanvas);
    this.game.onSlowWaves();
    Application.instance.stopAllSounds();
    Application.instance.playSound("MUS_BG_METAMAP");
    GuiGame.instance.fadeInWhiteSlow(this,
        this.onDomeFadeIn)
};
OutroBonus.prototype.onDomeFadeIn = function() {
    this.state = OutroBonus.ST_WAIT_FOR_BRIDGE;
    this.timeOut = OutroBonus.TIME_BEFORE_BRIDGE
};
OutroBonus.prototype.onFadeOut = function() {
    GuiGame.instance.gotoRemoveScreen = DataManager.instance.getGlobalRegister(DataManager.REG_ALL_STARS) ? GuiManager.SC_END_GAME_2 : GuiManager.SC_END_GAME
};
OutroBonus.prototype.update = function(a) {
    if (0 < this.timeOut) {
        if (this.timeOut -= a, 0 >= this.timeOut) switch (this.state) {
            case OutroBonus.ST_WAIT_FOR_FADE:
                GuiGame.instance.fadeOutWhiteSlow(this, this.onFadeOutWhite);
                this.state = OutroBonus.ST_FADING_WHITE;
                break;
            case OutroBonus.ST_WAIT_FOR_DIALOGUE:
                a = "D_OUTRO_" + (Global.playerSelected === Global.PLAYER_MAL ? "MAL" : "UMA") + "_BONUS";
                if (DialogueNode.exists(a)) {
                    Application.log("SHOW DIALOGUE : " + a);
                    var b = GuiGame.instance.addPopup(GuiDialogue, "mcGuiScreenCutscene");
                    b.initDialogue(a);
                    b.onComplete(this, this.onCompleteDialogue);
                    this.state = OutroBonus.ST_WAIT_TO_BREAK_DOME;
                    this.timeOut = OutroBonus.TIME_BEFORE_BREAKING_DOME
                } else Application.log("DIALOGUE OUTRO [" + a + "] NO FOUND"), this.onCompleteDialogue();
                break;
            case OutroBonus.ST_WAIT_TO_EFFECT_DOME:
                Application.instance.effectManager.createEffect("aniFxBrokeDome", Application.APP_WIDTH / 2 - 32, 453, this.game.canvas);
                this.state = OutroBonus.ST_WAIT_TO_BREAK_DOME;
                this.timeOut = OutroBonus.TIME_BEFORE_BREAKING_DOME;
                break;
            case OutroBonus.ST_WAIT_TO_BREAK_DOME:
                this.game.cutsceneIsleCanvas.removeChild(this.game.dome);
                this.game.dome.free();
                this.game.dome = Application.instance.getClip("mc_bg_dome_break");
                this.game.dome.setPosition(Application.APP_WIDTH / 2, 0);
                this.game.cutsceneIsleCanvas.addChild(this.game.dome);
                Application.instance.playSound("SND_CUTSCENE_BONUS_SHIELD");
                this.state = OutroBonus.ST_WAIT_FOR_DOME_FADE;
                this.timeOut = OutroBonus.TIME_BEFORE_DOME_FADE;
                break;
            case OutroBonus.ST_WAIT_FOR_DOME_FADE:
                GuiGame.instance.fadeOutWhite(this, this.onDomeFadeOut);
                break;
            case OutroBonus.ST_WAIT_FOR_BRIDGE:
                this.state = OutroBonus.ST_BRIDGE_APPEARING;
                this.game.bridge = Application.instance.getClip("mc_bg_bridge");
                this.game.bridge.setPosition(Application.APP_WIDTH / 2, 0);
                this.game.cutsceneBridgeCanvas.addChild(this.game.bridge);
                this.game.canvasTop.addChild(this.game.cutsceneBridgeCanvas);
                Application.instance.playSound("SND_CUTSCENE_BONUS_BRIDGE");
                this.state = OutroBonus.ST_WAIT_OUT;
                this.timeOut = OutroBonus.TIME_TO_WAIT_OUT;
                break;
            case OutroBonus.ST_WAIT_OUT:
                GuiGame.instance.fadeOut(this, this.onFadeOut)
        }
    } else this.state === OutroBonus.ST_DEFEAT_ANIMATION &&
        this.game.boss.state === GameBonusBoss.ST_AFTER_DEFEAT && (this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_COMPLETE_BOSS).onComplete(this, this.onEndMessage), this.game.player.gotoState(GameBonusPlayer.ST_WIN), this.state = OutroBonus.ST_WIN_ANIMATION)
};
OutroBonus.prototype.free = function() {
    this.game = null
};

function OutroRushMode(a) {
    this.game = a;
    this.toDelete = !1;
    this.state = OutroRushMode.ST_FADE_OUT;
    GuiGame.instance.fadeOutWhite(this, this.onEndFadeOut);
    this.game.world.m_paused = !0;
    this.game.enabledControls = !1;
    this.timer = 300
}
OutroRushMode.ST_FADE_OUT = 0;
OutroRushMode.ST_FADE_IN = 1;
OutroRushMode.ST_END = 2;
OutroRushMode.prototype.onEndFadeIn = function() {
    this.game.world.m_paused = !1;
    this.toDelete = this.game.enabledControls = !0
};
OutroRushMode.prototype.onEndFadeOut = function() {
    GuiGame.instance.fadeInWhite(null, null);
    this.game.world.onAdrenalinaDeactivated();
    this.state = OutroRushMode.ST_FADE_IN;
    this.game.restoreGameMusic()
};
OutroRushMode.prototype.update = function(a) {
    switch (this.state) {
        case OutroRushMode.ST_FADE_IN:
            if (this.timer -= a, 0 >= this.timer) {
                a = this.game.world.player();
                var b = PlayerPlatformRunner.OFFSET_FX * (a.state() !== PlayerPlatformRunner.ST_PLAYER_PENDULUM ? -1 : 1);
                this.game.world.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "aniFxRushModeEndMal" : "aniFxRushModeEndUma", a.getX(), a.getY() + b).onComplete(this, this.onEndFadeIn);
                this.state = OutroRushMode.ST_END
            }
    }
};
OutroRushMode.prototype.free = function() {
    this.game = null
};

function OutroTransform(a) {
    this.game = a;
    this.skin = this.game.world.player().skin;
    this.state = 0;
    this.timeOut = 9999999;
    this.toDelete = !1;
    this.charX = this.game.world.player().m_x;
    this.charY = this.game.world.player().m_y;
    this.clip = null;
    this.setClip(this.skin + "_stand");
    GuiGame.instance.zoomIn(2E3, this, this.onEndZoomIn)
}
OutroTransform.ST_NONE = 0;
OutroTransform.ST_WAIT_DIALOGUE = 1;
OutroTransform.ST_WAIT_TRANSFORM = 2;
OutroTransform.ST_WAIT_OUT = 3;
OutroTransform.prototype.setClip = function(a) {
    this.clip && (this.clip.free(), this.clip = null);
    this.clip = Application.instance.getClip(a);
    this.game.world.m_playerCanvas.addChild(this.clip);
    this.clip.position.x = this.charX - this.game.world.camera().getX();
    this.clip.position.y = this.charY - this.game.world.camera().getY();
    this.clip.scale.x = this.clip.scale.y = this.game.world.player().scale();
    this.clip.onEndAnimation(this, this.onEndAnimation)
};
OutroTransform.prototype.onEndAnimation = function(a) {
    a.name == this.skin + "_win" ? (this.setClip(this.skin + "_stand"), this.state = OutroTransform.ST_WAIT_DIALOGUE, this.timeOut = 1E3) : a.name == this.skin + "_transformation" && (a.stop(), a = Application.instance.effectManager.createEffect("mcGuiMessageTransformation" + (Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma"), 0, 0, this.game.canvasControl), a.onComplete(this, this.onEndEffectGuiTransform), Global.playerSelected == Global.PLAYER_MAL ? "ani_mal_1" == this.game.world.player().skin ?
        (a.getControl("mcGuiNew").setClip("gui_cs_mal_2"), a.getControl("mcGuiTitle02").setTextLocalized("STR_TRANSFORMATION_MAL_NAME02"), a.getControl("mcGuiTitle02S").setTextLocalized("STR_TRANSFORMATION_MAL_NAME02")) : "ani_mal_2" == this.game.world.player().skin && (a.getControl("mcGuiNew").setClip("gui_cs_mal_3"), a.getControl("mcGuiTitle02").setTextLocalized("STR_TRANSFORMATION_MAL_NAME03"), a.getControl("mcGuiTitle02S").setTextLocalized("STR_TRANSFORMATION_MAL_NAME03")) : "ani_uma_1" == this.game.world.player().skin ?
        (a.getControl("mcGuiNew").setClip("gui_cs_uma_2"), a.getControl("mcGuiTitle02").setTextLocalized("STR_TRANSFORMATION_UMA_NAME02"), a.getControl("mcGuiTitle02S").setTextLocalized("STR_TRANSFORMATION_UMA_NAME02")) : "ani_uma_2" == this.game.world.player().skin && (a.getControl("mcGuiNew").setClip("gui_cs_uma_3"), a.getControl("mcGuiTitle02").setTextLocalized("STR_TRANSFORMATION_UMA_NAME03"), a.getControl("mcGuiTitle02S").setTextLocalized("STR_TRANSFORMATION_UMA_NAME03")))
};
OutroTransform.prototype.onEndEffectGuiTransform = function() {
    this.state = OutroTransform.ST_WAIT_OUT;
    this.timeOut = 1E3
};
OutroTransform.prototype.onCompleteDialogue = function() {
    this.state = OutroTransform.ST_WAIT_TRANSFORM;
    this.timeOut = 500;
    Application.instance.stopAllSounds();
    switch (Global.map) {
        case 2:
        case 1:
            Application.instance.playSound("MUS_BG_AMBIENT");
            break;
        case 6:
        case 5:
            Application.instance.playSound("MUS_BG_METAMAP")
    }
};
OutroTransform.prototype.onEndZoomIn = function() {
    this.game.showMessage(PlatformGameRunner.MESSAGE_LEVEL_COMPLETE);
    this.setClip(this.skin + "_win")
};
OutroTransform.prototype.onFadeOut = function() {
    GuiGame.instance.gotoRemoveScreen = GuiManager.SC_END_LEVEL
};
OutroTransform.prototype.update = function(a) {
    this.game.world.player().clip().visible = !1;
    this.clip && (this.clip.position.x = this.charX - this.game.world.camera().getX(), this.clip.position.y = this.charY - this.game.world.camera().getY(), this.clip.update(a));
    switch (this.state) {
        case OutroTransform.ST_WAIT_DIALOGUE:
            this.timeOut -= a;
            if (0 >= this.timeOut)
                if (a = "D_OUTRO_" + (Global.playerSelected === Global.PLAYER_MAL ? "MAL" : "UMA") + "_0" + Global.map, DialogueNode.exists(a)) {
                    Application.log("SHOW DIALOGUE : " + a);
                    var b = GuiGame.instance.addPopup(GuiDialogue,
                        "mcGuiScreenCutscene");
                    b.initDialogue(a);
                    b.onComplete(this, this.onCompleteDialogue);
                    this.state = OutroTransform.ST_NONE
                } else Application.log("DIALOGUE OUTRO [" + a + "] NO FOUND"), this.onCompleteDialogue();
            break;
        case OutroTransform.ST_WAIT_TRANSFORM:
            this.timeOut -= a;
            0 >= this.timeOut && (this.setClip(this.skin + "_transformation"), Application.instance.playSound("SND_TRANSFORM"), this.state = OutroTransform.ST_NONE);
            break;
        case OutroTransform.ST_WAIT_OUT:
            this.timeOut -= a, 0 >= this.timeOut && (GuiGame.instance.fadeOut(this,
                this.onFadeOut), this.state = OutroTransform.ST_NONE)
    }
};
OutroTransform.prototype.free = function() {
    this.game = null
};

function FallingTransition(a) {
    this.game = a;
    this.toDelete = !1;
    this.init()
}
FallingTransition.prototype.init = function() {
    Application.log("PlayerPlatformRunner.onPlayerFellOutOfWorld >> enabledControls:false ");
    this.game.enabledControls = !1;
    this.game.world.m_paused = !0;
    GuiGame.instance.fadeOut(this, this.onFadeOut)
};
FallingTransition.prototype.update = function(a) {};
FallingTransition.prototype.onFadeOut = function() {
    if (this.game.world.player().enableRushMode) switch (Application.instance.stopAllSounds(), Global.map) {
        case 0:
        case 1:
        case 2:
            Application.instance.playSound("MUS_BG_GAME_AURADON");
            break;
        case 3:
        case 4:
            Application.instance.playSound("MUS_BG_GAME_ISLE_LOST");
            break;
        case 5:
        case 6:
            Application.instance.playSound("MUS_BG_GAME_UMA_SHIP");
            break;
        case 7:
        case 8:
            Application.instance.playSound(Global.bossRoom ? "MUS_BG_MAINMENU" : "MUS_BG_GAME_LOVE_BOAT")
    }
    this.game.world.player().setPosition(CheckPoint.lastPointSafe.x,
        CheckPoint.lastPointSafe.y);
    this.game.world.camera().lookAtPlayer();
    this.game.world.player().gotoState(Player.ST_PLAYER_STAND);
    this.game.world.player().m_adrenalineTimer = 0;
    this.game.world.player().m_adrenalineDepletingTimer = 0;
    this.game.world.player().setEnergy(0);
    this.game.world.onAdrenalinaDeactivated();
    GuiGame.instance.fadeIn(this, this.onFadeIn);
    this.game.world.m_paused = !1;
    for (var a = this.game.world.m_actorManager.m_actors, b = 0; b < a.length; b++)
        if (a[b].followPlayer || a[b] instanceof Bullet) a[b].m_isAwaitingDelete = !0
};
FallingTransition.prototype.onFadeIn = function() {
    this.game.world.player().onAppearSafePoint();
    this.toDelete = !0
};
FallingTransition.prototype.free = function() {
    this.game = null
};

function DragonJumpControl(a, b, c, d) {
    this.m_isJump = !1;
    this.m_time = this.m_z = 0;
    this.m_durationWait = b;
    this.m_durationUp = a;
    this.m_topZ = c;
    this.m_topSpeed = d;
    this.m_accel = d * d / (d * a - c);
    this.m_timeToAccel = a - c / d;
    this.m_timeAtTopSpeed = 2 * c / d - a
}
DragonJumpControl.prototype.update = function(a) {
    if (this.m_isJump)
        if (a = this.m_time += a, this.m_z = 0, a > 2 * this.m_durationUp + this.m_durationWait) this.end();
        else if (a >= this.m_durationUp && a <= this.m_durationUp + this.m_durationWait) this.m_z = -this.m_topZ;
    else {
        var b = !1;
        a > this.m_durationUp + this.m_durationWait && (a -= this.m_durationUp + this.m_durationWait, b = !0);
        a < this.m_timeToAccel ? this.m_z -= this.m_accel * a * a / 2 : (this.m_z -= this.m_accel * this.m_timeToAccel * this.m_timeToAccel / 2, a -= this.m_timeToAccel, a < this.m_timeAtTopSpeed ?
            this.m_z -= this.m_topSpeed * a : (this.m_z -= this.m_topSpeed * this.m_timeAtTopSpeed, a -= this.m_timeAtTopSpeed, this.m_z -= this.m_topSpeed * a - this.m_accel * a * a / 2));
        b && (this.m_z = -this.m_topZ - this.m_z)
    }
};
DragonJumpControl.prototype.init = function() {
    this.m_isJump = !0;
    this.m_time = this.m_z = 0
};
DragonJumpControl.prototype.end = function() {
    this.m_isJump = !1;
    this.m_time = this.m_z = 0
};
DragonJumpControl.prototype.getIsJump = function() {
    return this.m_isJump
};
DragonJumpControl.prototype.getCurrentHeight = function() {
    return this.m_z
};
DragonJumpControl.prototype.free = function() {};

function ImagesScroll(a, b, c, d) {
    this.canvas = a;
    this.offset = b;
    this.speed = d;
    this.intancesNames = [];
    this.clips = [];
    this.displayNumber = c;
    this.counter = 0;
    ImagesScroll.scaleFix = 1.01
}
ImagesScroll.prototype.init = function() {
    for (var a, b = this.counter = 0; b < this.displayNumber; b++) a = this.getNextClip(), a.position.x = b * this.offset, a.scale.x = ImagesScroll.scaleFix, this.clips.push(a), this.canvas.addChild(a)
};
ImagesScroll.prototype.getNextClip = function() {
    var a = Application.instance.getClip(this.intancesNames[this.counter]);
    a.index = this.counter;
    this.counter++;
    this.counter >= this.intancesNames.length && (this.counter = 0);
    return a
};
ImagesScroll.prototype.onRefresh = function() {
    for (var a = [], b = 0; b < this.clips.length; b++) {
        var c = {};
        c.x = this.clips[b].position.x;
        c.index = this.clips[b].index;
        a.push(c);
        this.clips[b].free();
        this.canvas.removeChild(this.clips[b])
    }
    this.clips = [];
    for (b = 0; b < a.length; b++) c = Application.instance.getClip(this.intancesNames[a[b].index]), c.position.x = a[b].x, c.scale.x = ImagesScroll.scaleFix, c.index = a[b].index, this.clips.push(c), this.canvas.addChild(c)
};
ImagesScroll.prototype.setInstancesNames = function(a) {
    this.intancesNames = a
};
ImagesScroll.prototype.update = function(a) {
    for (var b = 0; b < this.clips.length; b++) this.clips[b].update(a), this.clips[b].position.x -= this.speed * a, this.clips[b].position.x <= -this.offset && (this.clips[b].free(), this.canvas.removeChild(this.clips[b]), this.clips[b] = null, this.clips.splice(b, 1), b--);
    this.clips.length < this.displayNumber && (a = this.getNextClip(), a.position.x = this.clips[this.clips.length - 1].position.x + this.offset, a.scale.x = ImagesScroll.scaleFix, this.clips.push(a), this.canvas.addChild(a));
    this.refresh &&
        (this.refresh = !1, this.onRefresh())
};
ImagesScroll.prototype.free = function() {
    for (var a = 0; a < this.clips.length; a++) this.clips[a].free(), this.clips[a] = null;
    this.intancesNames = this.clips = null
};

function GameBonus(a) {
    SGame.call(this, a);
    GameBonus.instance = this;
    this.bridge = null;
    this.canvasBackgorund = Application.instance.addDisplayContainer();
    this.canvasCharacters = Application.instance.addDisplayContainer();
    this.canvasFogUma = Application.instance.addDisplayContainer();
    this.canvasBullets = Application.instance.addDisplayContainer();
    this.canvasForeGround = Application.instance.addDisplayContainer();
    this.canvasTop = Application.instance.addDisplayContainer();
    this.canvas.addChild(this.canvasBackgorund);
    this.canvas.addChild(this.canvasCharacters);
    this.canvas.addChild(this.canvasFogUma);
    this.canvas.addChild(this.canvasBullets);
    this.canvas.addChild(this.canvasForeGround);
    this.canvas.addChild(this.canvasTop);
    a = Global.playerSelected == Global.PLAYER_MAL ? 570 : 630;
    this.player = new GameBonusPlayer(this, GameBonus.PLAYER_FIGHT_X - GameBonus.DISTANCE_TO_WALK, a, this.canvasCharacters, Global.playerSelected == Global.PLAYER_MAL ? "mal" : "uma");
    this.player.clip.visible = !1;
    a = Global.playerSelected == Global.PLAYER_MAL ? 630 : 570;
    this.boss = new GameBonusBoss(this, GameBonus.BOSS_FIGHT_X + GameBonus.DISTANCE_TO_WALK, a, this.canvasCharacters, Global.playerSelected == Global.PLAYER_MAL ? "uma" : "mal");
    this.boss.clip.visible = !1;
    this.actors = [];
    this.touchControl = new TouchControl;
    this.touchControl.callerObject = this;
    this.touchControl.onTapListener = this.onPress;
    this.touchControl.onSwipeListener = this.onSwipe;
    this.reset = !1;
    this.m_pauseTimer = 0;
    this.tutorialPopup = null;
    this.tutorialType = this.tutorialTimer = 0;
    0 === DataManager.instance.getGlobalRegister(DataManager.REG_BONUS_TUTORIAL_DONE) ?
        (this.tutorialEnabled = !0, this.tutorialCount = [0, 0]) : (this.tutorialEnabled = !1, this.tutorialCount = null);
    this.shaker = new Shaker(this.canvas);
    this.waveShaker = new WaveShaker(this.canvas);
    this.bulletManager = new GameBonusBulletManager(this);
    GameBonus.KEY_JUMP = window.config.settings.keyJump;
    GameBonus.KEY_ATTACK = window.config.settings.keyAttack;
    this.imagesScroll = [];
    this.layer1 = Application.instance.addDisplayContainer();
    this.layer2 = Application.instance.addDisplayContainer();
    this.layer3 = Application.instance.addDisplayContainer();
    this.layer4 = Application.instance.addDisplayContainer();
    this.layer5 = Application.instance.addDisplayContainer();
    this.cutsceneIsleCanvas = Application.instance.addDisplayContainer();
    a = Application.instance.getClip("mc_bg_isle2");
    a.setPosition(Application.APP_WIDTH / 2, 0);
    this.cutsceneIsleCanvas.addChild(a);
    this.dome = Application.instance.getClip("mc_bg_dome");
    this.dome.setPosition(Application.APP_WIDTH / 2, 0);
    this.cutsceneIsleCanvas.addChild(this.dome);
    this.cutsceneBridgeCanvas = Application.instance.addDisplayContainer();
    this.cutsceneSkyCanvas = Application.instance.addDisplayContainer();
    this.cutsceneSkyCanvas.position.x = -300;
    this.othersFx = [];
    this.angleWater2 = this.angleWater1 = 0;
    this.amplitudeSpeedWater1 = 2.5E-4;
    this.amplitudeSpeedWater2 = 8E-4;
    this.layer1.position.x = -400;
    this.layer2.position.x = -400;
    this.layer3.position.x = -400;
    this.layer4.position.x = -400;
    this.layer5.position.x = -400;
    this.canvasBackgorund.addChild(this.layer1);
    this.canvasBackgorund.addChild(this.layer2);
    this.canvasBackgorund.addChild(this.layer3);
    a = new ImagesScroll(this.layer1,
        512, 5, 0);
    a.setInstancesNames(["mc_bg_sky_1", "mc_bg_sky_2"]);
    a.init();
    this.imagesScroll.push(a);
    a = new ImagesScroll(this.layer2, 512, 5, 0);
    a.setInstancesNames(["mc_bg_empty", "mc_bg_empty", "mc_bg_isle", "mc_bg_empty", "mc_bg_empty"]);
    a.init();
    this.imagesScroll.push(a);
    a = new ImagesScroll(this.layer3, 512, 5, .03);
    a.setInstancesNames(["mc_bg_water_1_1", "mc_bg_water_1_2"]);
    a.init();
    this.imagesScroll.push(a);
    a = new ImagesScroll(this.layer4, 512, 5, .1);
    a.setInstancesNames(["mc_bg_water_2_1", "mc_bg_water_2_2"]);
    a.init();
    this.imagesScroll.push(a);
    a = new ImagesScroll(this.layer5, 512, 5, .15);
    a.setInstancesNames(["mc_bg_water_3_1", "mc_bg_water_3_2"]);
    a.init();
    this.imagesScroll.push(a);
    this.scene = new IntroBonus(this, this.canvasCharacters, !Global.showDialogue);
    this.paused = !0;
    this.timeThunder = this.baseTimeThunder = 5E3;
    this.spriteDisplace1 = null;
    this.speedDisplace1 = 1E-4;
    Application.RENDER_MODE !== Application.RENDER_WEBGL || Application.isLowDevice || (this.spriteDisplace1 = Application.instance.getLocalizedImage("displacement_water.png"),
        this.spriteDisplace1.pivot.x = 256, this.spriteDisplace1.pivot.y = 128, this.spriteDisplace1.position.x = 1024, this.spriteDisplace1.position.y = 500, this.spriteDisplace1.scale.x = 2, this.spriteDisplace1.scale.y = 1.2, this.layer3.addChild(this.spriteDisplace1), this.displacementFilter1 = new window.PIXI.filters.DisplacementFilter(this.spriteDisplace1), this.layer3.filters = [this.displacementFilter1]);
    this.spriteDisplace = null;
    this.speedDisplace = 5E-4;
    Application.RENDER_MODE !== Application.RENDER_WEBGL || Application.isLowDevice ||
        (this.spriteDisplace = Application.instance.getLocalizedImage("displacement_water.png"), this.spriteDisplace.pivot.x = 256, this.spriteDisplace.pivot.y = 128, this.spriteDisplace.position.x = 512, this.spriteDisplace.position.y = 800, this.spriteDisplace.scale.x = 2, this.spriteDisplace.scale.y = 1.2, this.canvasForeGround.addChild(this.spriteDisplace), this.displacementFilter = new window.PIXI.filters.DisplacementFilter(this.spriteDisplace), this.canvasForeGround.filters = [this.displacementFilter])
}
Application.subclass(GameBonus, SGame);
GameBonus.MAX_DELTA = 50;
GameBonus.instance = null;
GameBonus.PLAYER_FIGHT_X = 150;
GameBonus.BOSS_FIGHT_X = 900;
GameBonus.DISTANCE_TO_WALK = 900;
GameBonus.TUTORIAL_TAP = 300;
GameBonus.TUTORIAL_SWIPE = 301;
GameBonus.TIMES_TO_HELP = [1, 1];
GameBonus.prototype.free = function() {
    Application.externalTrack("Game End");
    GameBonus.instance = null;
    this.canvas.filters = null;
    this.shaker && this.shaker.free();
    this.waveShaker && this.waveShaker.free();
    for (var a = 0; a < this.imagesScroll.length; a++) this.imagesScroll[a].free(), this.imagesScroll[a] = null;
    this.imagesScroll = null;
    this.canvasForeGround.filters = null;
    this.layer3.filters = null;
    this.spriteDisplace1 && this.spriteDisplace1.parent.removeChild(this.spriteDisplace1);
    this.spriteDisplace && this.spriteDisplace.parent.removeChild(this.spriteDisplace);
    this.spriteDisplace1 = this.spriteDisplace = null;
    this.canvas.removeChild(this.canvasBackgorund);
    this.canvas.removeChild(this.canvasCharacters);
    this.canvas.removeChild(this.canvasFogUma);
    this.canvas.removeChild(this.canvasBullets);
    this.canvas.removeChild(this.canvasForeGround);
    this.canvasForeGround = this.canvasBullets = this.canvasFogUma = this.canvasCharacters = this.canvasBackgorund = null;
    SGame.prototype.free.call(this)
};
GameBonus.prototype.init = function() {
    Application.log("GameBonus")
};
GameBonus.prototype.initializeWaves = function() {
    this.imagesScroll[0].speed = .02;
    this.imagesScroll[1].speed = .03;
    this.imagesScroll[2].speed = .04;
    this.imagesScroll[3].speed = .15;
    this.imagesScroll[4].speed = .2
};
GameBonus.prototype.goMoreFast = function() {
    this.imagesScroll[0].speed += .009;
    this.imagesScroll[1].speed += .009;
    this.imagesScroll[2].speed += .015;
    this.imagesScroll[3].speed += .05;
    this.imagesScroll[4].speed += .1;
    this.amplitudeSpeedWater1 += 1.5E-4;
    this.amplitudeSpeedWater2 += 3E-4;
    this.baseTimeThunder -= 1E3;
    1E3 > this.baseTimeThunder && (this.baseTimeThunder = 1E3)
};
GameBonus.prototype.stopScroll = function() {
    this.imagesScroll[0].speed = 0;
    this.imagesScroll[1].speed = 0;
    this.imagesScroll[2].speed = .085;
    this.imagesScroll[3].speed = .3;
    this.imagesScroll[4].speed = .5;
    this.amplitudeSpeedWater1 = 7E-4;
    this.amplitudeSpeedWater2 = .0017;
    this.baseTimeThunder = 999999999999;
    for (var a = 0; a < this.othersFx.length; a++) this.othersFx[a].isAwaitingDelete = !0, this.othersFx[a] = null
};
GameBonus.prototype.onSlowWaves = function() {
    this.imagesScroll[2].speed = .03;
    this.imagesScroll[3].speed = .1;
    this.imagesScroll[4].speed = .15;
    this.amplitudeSpeedWater1 = 2.5E-4;
    this.amplitudeSpeedWater2 = 8E-4
};
GameBonus.prototype.showMessage = function(a) {
    var b = null;
    switch (a) {
        case PlatformGameRunner.MESSAGE_LEVEL_BONUS:
            b = Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_MAL ? "mcGuiMessageFinalbattleMal" : "mcGuiMessageFinalbattleUma", 0, 0, this.hud.canvas);
            a = "STR_MESSAGES_FINALBATTLE";
            b.getControl("mcGuiTitle").setTextLocalized(a);
            b.getControl("mcGuiTitleS").setTextLocalized(a);
            break;
        case PlatformGameRunner.MESSAGE_LEVEL_COMPLETE_BOSS:
            b = Application.instance.effectManager.createEffect(Global.playerSelected ===
                Global.PLAYER_MAL ? "mcGuiMessageLevelcompleteMal" : "mcGuiMessageLevelcompleteUma", 0, 0, this.hud.canvas), a = Global.playerSelected === Global.PLAYER_MAL ? "STR_MESSAGES_BOSSCOMPLETE_MAL" : "STR_MESSAGES_BOSSCOMPLETE_UMA", b.getControl("mcGuiTitle").setTextLocalized(a), b.getControl("mcGuiTitleS").setTextLocalized(a)
    }
    return b
};
GameBonus.prototype.onPress = function(a) {
    if (null !== this.tutorialPopup) this.tutorialPopup.onPress();
    else if (!this.paused && this.player) this.player.onJump()
};
GameBonus.prototype.onSwipe = function(a) {
    if (null !== this.tutorialPopup) this.tutorialPopup.onSwipe();
    else if (!this.paused && this.player && a.direction == TouchControl.DIR_RIGHT) this.player.onRepel()
};
GameBonus.prototype.onPointerPress = function(a) {
    SGame.prototype.onPointerPress.call(this, a);
    if (this.touchControl) this.touchControl.onPointerPress(a)
};
GameBonus.prototype.onPointerRelease = function(a) {
    SGame.prototype.onPointerRelease.call(this, a);
    if (this.touchControl) this.touchControl.onPointerRelease(a)
};
GameBonus.prototype.onPointerMove = function(a) {
    SGame.prototype.onPointerMove.call(this, a);
    if (this.touchControl) this.touchControl.onPointerMove(a)
};
GameBonus.prototype.onShake = function() {
    this.shaker.shake(8, 50, 500);
    this.shaker.start()
};
GameBonus.prototype.createBullet = function(a, b, c, d, e) {
    a = new GameBonusBullet(this, a, b, this.canvasBullets, c, d, e);
    this.actors.push(a);
    this.onBulletClose(c);
    return a
};
GameBonus.prototype.onGameEnd = function(a) {
    a ? (this.scene = new OutroBonus(this), AchievementManager.instance.onLvlCompleted()) : GuiGame.instance.gotoRemoveScreen = GuiManager.SC_TRY_AGAIN
};
GameBonus.prototype.onReset = function() {
    this.reset = !1
};
GameBonus.prototype.update = function(a) {
    if (this.reset) this.onReset();
    else {
        a > GameBonus.MAX_DELTA && (a = GameBonus.MAX_DELTA);
        this.scene && (this.scene.update(a), this.scene.toDelete && (this.scene.free(), this.scene = null));
        if (0 < this.m_pauseTimer) this.m_pauseTimer -= a;
        else {
            if (!this.scene || this.scene.updateGame) {
                this.touchControl && this.touchControl.update(a);
                if (this.spriteDisplace) {
                    if (1 >= this.spriteDisplace.scale.x || 3 <= this.spriteDisplace.scale.x) this.speedDisplace = -this.speedDisplace;
                    this.spriteDisplace.rotation +=
                        .01;
                    this.spriteDisplace.scale.x += this.speedDisplace * a
                }
                if (this.spriteDisplace1) {
                    if (1 >= this.spriteDisplace1.scale.x || 3 <= this.spriteDisplace1.scale.x) this.speedDisplace1 = -this.speedDisplace1;
                    this.spriteDisplace1.scale.x += this.speedDisplace1 * a
                }
                for (var b = 0; b < this.actors.length; b++) this.actors[b].toDelete ? (this.actors[b].free(), this.actors[b] = null, this.actors.splice(b, 1), b--) : this.actors[b].update(a);
                this.player && this.player.update(a);
                this.boss && this.boss.update(a);
                this.bulletManager && this.bulletManager.update(a)
            }
            for (b =
                0; b < this.imagesScroll.length; b++) this.imagesScroll[b].update(a);
            this.layer4 && (this.angleWater1 += this.amplitudeSpeedWater1 * a, this.layer4.position.y = 3 * Math.sin(this.angleWater1));
            this.layer5 && (this.angleWater2 += this.amplitudeSpeedWater2 * a, this.layer5.position.y = 12 * Math.cos(this.angleWater2));
            this.dome && this.dome.update(a);
            this.bridge && this.bridge.update(a);
            0 < this.tutorialTimer && (this.tutorialTimer -= a, 0 >= this.tutorialTimer && this.showTutorial(this.tutorialType))
        }
        this.shaker && this.shaker.update(a);
        this.waveShaker &&
            this.waveShaker.update(a);
        this.timeThunder -= a;
        if (0 > this.timeThunder) {
            b = 1024 * Math.random();
            if (.6 >= Math.random()) {
                var c = Application.instance.effectManager.createEffect("thunder_0" + (.5 > Math.random() ? "1" : "2"), b, -100 * Math.random(), this.canvas),
                    d = 1.5 + Math.random();
                c.clip.scale.x = d;
                c.clip.scale.y = d;
                c.clip.alpha = .3;
                c.clip.rotation = .1 * Math.random()
            }
            Application.instance.effectManager.createEffect("fxRayThunder", b, 10, this.canvas);
            this.timeThunder = this.baseTimeThunder
        }
        SGame.prototype.update.call(this, a)
    }
};
GameBonus.prototype.onKeyDown = function(a) {
    if (!this.paused) switch (a) {
        case GameBonus.KEY_JUMP:
            this.player.onJump();
            break;
        case GameBonus.KEY_ATTACK:
            this.player.onRepel()
    }
};
GameBonus.prototype.onKeyUp = function(a) {};
GameBonus.prototype.onBulletClose = function(a) {
    this.tutorialEnabled && this.tutorialCount[GameBonus.TUTORIAL_TAP - 300] < GameBonus.TIMES_TO_HELP[GameBonus.TUTORIAL_TAP - 300] && (this.tutorialTimer = 800, this.tutorialType = GameBonus.TUTORIAL_TAP)
};
GameBonus.prototype.onBulletDisappear = function(a) {
    this.tutorialEnabled && (this.tutorialCount[GameBonus.TUTORIAL_TAP - 300] ++, this.checkIfTutorialComplete())
};
GameBonus.prototype.onBossStop = function() {
    this.tutorialEnabled && (this.tutorialTimer = 200, this.tutorialType = GameBonus.TUTORIAL_SWIPE)
};
GameBonus.prototype.onPlayerAttack = function() {
    this.tutorialEnabled && (this.tutorialCount[GameBonus.TUTORIAL_SWIPE - 300] ++, this.checkIfTutorialComplete())
};
GameBonus.prototype.showTutorial = function(a) {
    var b = Global.playerSelected === Global.PLAYER_MAL ? "Mal" : "Uma",
        c = Application.instance.isMobileDevice ? "" : "PC";
    switch (a) {
        case GameBonus.TUTORIAL_TAP:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial01" + b + "MobileBonus" + c);
            break;
        case GameBonus.TUTORIAL_SWIPE:
            this.tutorialPopup = GuiGame.instance.addPopup(GuiPopupTutorial, "mcGuiTutorial02" + b + "MobileBonus" + c)
    }
    null !== this.tutorialPopup && this.tutorialPopup.initialize(a)
};
GameBonus.prototype.checkIfTutorialComplete = function() {
    for (var a = this.tutorialCount.length, b = !0, c = 0; c < a; c++)
        if (this.tutorialCount[c] < GameBonus.TIMES_TO_HELP[c]) {
            b = !1;
            break
        }
    b && (DataManager.instance.setGlobalRegister(DataManager.REG_BONUS_TUTORIAL_DONE, 1), DataManager.instance.saveData(), this.tutorialEnabled = !1, this.tutorialCount = null)
};

function GameBonusActor(a, b, c, d, e) {
    this.canvas = d;
    this.game = a;
    this.clip = null;
    this.state = "";
    this.x = b;
    this.y = c;
    this.scale = 1;
    this.basehealth = this.health = 100;
    this.direction = 1;
    this.toDelete = !1;
    this.skin = e
}
GameBonusActor.DIR_LEFT = 1;
GameBonusActor.DIR_RIGHT = -1;
GameBonusActor.prototype.free = function() {
    this.character && (this.character.free(), this.character = null);
    this.game = null
};
GameBonusActor.prototype.gotoState = function(a) {
    this.character && (this.character.gotoState(a), this.clip = this.character.clip, this.clip.position.x = this.x, this.clip.position.y = this.y, this.clip.scale.x = this.scale * this.direction, this.clip.scale.y = this.scale);
    this.state = a
};
GameBonusActor.prototype.hitTest = function(a) {
    return this.clip.hitTest(a.clip)
};
GameBonusActor.prototype.addHealth = function(a) {
    this.health += a;
    this.health = this.health >= this.basehealth ? this.basehealth : this.health
};
GameBonusActor.prototype.onHit = function(a) {
    this.health -= a;
    this.health = 0 > this.health ? 0 : this.health
};
GameBonusActor.prototype.onEndAnimation = function(a) {};
GameBonusActor.prototype.update = function(a) {
    this.character && this.character.update(a);
    this.clip && (this.clip.position.x = this.x, this.clip.position.y = this.y)
};

function GameBonusBoss(a, b, c, d, e) {
    GameBonusActor.call(this, a, b, c, d, e);
    GameBonusBoss.instance = this;
    this.direction = GameBonusActor.DIR_RIGHT;
    this.character = new Character(b, c, this.canvas);
    this.character.addState(GameBonusBoss.ST_STAND_DIALOGUE, this.skin + "_stand");
    this.character.addState(GameBonusBoss.ST_STAND, this.skin + "_walkbacking");
    this.character.addState(GameBonusBoss.ST_RECOVERY, this.skin + "_walkbacking");
    this.character.addState(GameBonusBoss.ST_WALK, this.skin + "_walk");
    this.character.addState(GameBonusBoss.ST_ATTACK,
        this.skin + "_attack", [{
            frame: Global.playerSelected === Global.PLAYER_MAL ? 17 : 15,
            caller: this,
            callback: this.createBullet
        }]);
    this.character.addState(GameBonusBoss.ST_HIT, this.skin + "_hit");
    this.character.addState(GameBonusBoss.ST_DEFEAT, this.skin + "_defeat");
    this.character.addState(GameBonusBoss.ST_WIN, this.skin + "_win");
    this.character.addState(GameBonusBoss.ST_AFTER_DEFEAT, this.skin + (Global.playerSelected === Global.PLAYER_MAL ? "_defeat2" : "_stand"));
    this.gotoState(GameBonusBoss.ST_WALK);
    this.character.onEndAnimation(this,
        this.onEndAnimation);
    this.shieldCounter = this.timeEnding = this.timeRecovery = this.bulletSpeed = this.bulletType = 0;
    this.fxShield = this.clipShield = null;
    this.canvasFxShield = Application.instance.addDisplayContainer();
    this.canvasFxShield.scale.x = 3;
    this.canvasFxShield.scale.y = 3;
    this.game.canvasBullets.addChild(this.canvasFxShield);
    Global.playerSelected === Global.PLAYER_MAL && (this.fxFog = Application.instance.effectManager.createEffect("aniFxFoamUma", this.x, this.y - 55, this.game.canvasFogUma))
}
Application.subclass(GameBonusBoss, GameBonusActor);
GameBonusBoss.TIME_RECOVERY = 0;
GameBonusBoss.ST_APPEAR = "st1";
GameBonusBoss.ST_STAND = "st2";
GameBonusBoss.ST_WALK = "st3";
GameBonusBoss.ST_ATTACK = "st4";
GameBonusBoss.ST_HIT = "st5";
GameBonusBoss.ST_DEFEAT = "st6";
GameBonusBoss.ST_WIN = "st7";
GameBonusBoss.ST_RECOVERY = "st8";
GameBonusBoss.ST_STAND_DIALOGUE = "st9";
GameBonusBoss.ST_AFTER_DEFEAT = "st10";
GameBonusBoss.prototype.free = function() {
    GameBonusActor.prototype.free.call(this);
    GameBonusBoss.instance = null;
    this.fxFog && (this.fxFog.isAwaitingDelete = !0, this.fxFog = null)
};
GameBonusBoss.prototype.createShield = function(a) {
    this.fxShield && (this.fxShield.isAwaitingDelete = !0, this.fxShield = null);
    this.canvasFxShield.position.x = this.x;
    this.canvasFxShield.position.y = this.y - 100;
    this.clipShield = Application.instance.getClip("mc_bonus_shield");
    this.clipShield.position.x = this.x;
    this.clipShield.position.y = this.y - 50;
    this.game.canvasBullets.addChild(this.clipShield);
    this.shieldCounter = a || 1;
    a = Global.playerSelected == Global.PLAYER_MAL ? "Uma" : "Mal";
    Application.instance.effectManager.createEffect("aniFxAdrenalineStart" +
        a, 0, 0, this.canvasFxShield);
    this.fxShield = Application.instance.effectManager.createEffect("aniFxAdrenaline" + a, 0, 0, this.canvasFxShield);
    Application.instance.playSound("SND_BONUS_BOSS_SHIELD_ON")
};
GameBonusBoss.prototype.destroyShield = function() {
    this.shieldCounter--;
    0 < this.shieldCounter || (this.clipShield && (this.game.canvasBullets.removeChild(this.clipShield), this.clipShield = null), this.fxShield && (this.fxShield.isAwaitingDelete = !0), Application.instance.effectManager.createEffect("aniFxAdrenalineEnd" + (Global.playerSelected == Global.PLAYER_MAL ? "Uma" : "Mal"), 0, 0, this.canvasFxShield), Application.instance.playSound("SND_BONUS_BOSS_SHIELD_OFF"))
};
GameBonusBoss.prototype.gotoState = function(a) {
    if (this.state != a && (GameBonusActor.prototype.gotoState.call(this, a), Global.playerSelected == Global.PLAYER_MAL)) switch (this.state == GameBonusBoss.ST_ATTACK && this.clip.getInstance("mcContent") && (this.clip.getInstance("mcContent").removeChildren(0, this.clip.getInstance("mcContent").children.length), this.clip.getInstance("mcContent").addChild(Application.instance.getClip("bullet_uma_" + this.bulletType + "_content"))), this.state) {
        case GameBonusBoss.ST_STAND_DIALOGUE:
        case GameBonusBoss.ST_WIN:
        case GameBonusBoss.ST_DEFEAT:
        case GameBonusBoss.ST_AFTER_DEFEAT:
            this.game.canvasFogUma.visible = !1;
            break;
        default:
            this.game.canvasFogUma.visible = !0
    }
};
GameBonusBoss.prototype.onHit = function(a) {
    if (!this.game.player.finish)
        if (GameBonusActor.prototype.onHit.call(this, a), this.game.hud.setBossHealthBar(this.health / this.basehealth), 0 < this.health) this.gotoState(GameBonusBoss.ST_HIT), Application.instance.playSound("SND_BONUS_HIT");
        else this.game.onGameEnd(!0)
};
GameBonusBoss.prototype.onEndAnimation = function(a) {
    switch (a) {
        case GameBonusBoss.ST_HIT:
            this.timeRecovery = GameBonusBoss.TIME_RECOVERY;
            this.gotoState(GameBonusBoss.ST_RECOVERY);
            break;
        case GameBonusBoss.ST_ATTACK:
        case GameBonusBoss.ST_APPEAR:
            this.gotoState(GameBonusBoss.ST_STAND);
            break;
        case GameBonusBoss.ST_WIN:
            this.gotoState(GameBonusBoss.ST_STAND);
            this.timeEnding = 1E3;
            break;
        case GameBonusBoss.ST_DEFEAT:
            this.gotoState(GameBonusBoss.ST_AFTER_DEFEAT)
    }
};
GameBonusBoss.prototype.onAttack = function(a, b) {
    this.game.player.finish || (this.bulletType = a, this.bulletSpeed = b, this.state != GameBonusBoss.ST_DEFEAT && this.state != GameBonusBoss.ST_ATTACK && this.state != GameBonusBoss.ST_HIT && this.state != GameBonusBoss.ST_STAND_DIALOGUE && this.state == GameBonusBoss.ST_STAND && (this.gotoState(GameBonusBoss.ST_ATTACK), Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "SND_BONUS_UMA_SHOOT" : "SND_BONUS_MAL_SHOOT")))
};
GameBonusBoss.prototype.onWin = function() {
    this.gotoState(GameBonusBoss.ST_WIN)
};
GameBonusBoss.prototype.createBullet = function() {
    this.game.createBullet(this.x - 130 + (Global.playerSelected == Global.PLAYER_MAL ? 0 : -60), this.y - 100, this.bulletType, GameBonusBullet.CHAR_BOSS, this.bulletSpeed)
};
GameBonusBoss.prototype.update = function(a) {
    GameBonusActor.prototype.update.call(this, a);
    switch (this.state) {
        case GameBonusBoss.ST_RECOVERY:
            this.timeRecovery -= a, 0 >= this.timeRecovery && (this.gotoState(GameBonusBoss.ST_STAND), this.game.bulletManager.updatePattern())
    }
    if (0 < this.timeEnding && (this.timeEnding -= a, 0 >= this.timeEnding)) this.game.onGameEnd(!1);
    this.fxFog && (this.fxFog.x = this.x)
};

function GameBonusBullet(a, b, c, d, e, f, g) {
    this.type = e;
    this.playerId = f;
    this.speed = g;
    this.damage = window.config.bonus_boss_config["damageBullet" + this.type];
    GameBonusActor.call(this, a, b, c, d, "");
    this.skin = Global.playerSelected == Global.PLAYER_MAL ? f == GameBonusBullet.CHAR_PLAYER ? "bullet_mal_" + this.type : "bullet_uma_" + this.type : f == GameBonusBullet.CHAR_PLAYER ? "bullet_uma_" + this.type : "bullet_mal_" + this.type;
    this.playerId == GameBonusBullet.CHAR_BOSS && (this.direction = GameBonusActor.DIR_RIGHT);
    this.character = new Character(b,
        c, this.canvas);
    this.character.addState(GameBonusBullet.ST_WALK, this.skin);
    this.gotoState(GameBonusBullet.ST_WALK);
    this.character.onEndAnimation(this, this.onEndAnimation);
    this.fxTrailName = "aniFxAdrenalineTrailMal";
    Global.playerSelected == Global.PLAYER_MAL ? this.type == GameBonusBullet.TYPE_RETURNABLE ? this.fxTrailName = f == GameBonusBullet.CHAR_PLAYER ? "aniFxFireGreenMal" : "aniFxBulletGreenTrailUma" : this.type == GameBonusBullet.TYPE_BREAKABLE ? this.fxTrailName = f == GameBonusBullet.CHAR_PLAYER ? "aniFxFireYellowMal" :
        "aniFxBulletYellowTrailUma" : this.type == GameBonusBullet.TYPE_EXPLOSIVE && (this.fxTrailName = f == GameBonusBullet.CHAR_PLAYER ? "aniFxFireRedMal" : "aniFxBulletRedTrailUma") : this.type == GameBonusBullet.TYPE_RETURNABLE ? this.fxTrailName = f == GameBonusBullet.CHAR_PLAYER ? "aniFxBulletGreenTrailUma" : "aniFxFireGreenMal" : this.type == GameBonusBullet.TYPE_BREAKABLE ? this.fxTrailName = f == GameBonusBullet.CHAR_PLAYER ? "aniFxBulletYellowTrailUma" : "aniFxFireYellowMal" : this.type == GameBonusBullet.TYPE_EXPLOSIVE && (this.fxTrailName =
            f == GameBonusBullet.CHAR_PLAYER ? "aniFxBulletRedTrailUma" : "aniFxFireRedMal");
    this.fxTrail = Application.instance.effectManager.createEffect(this.fxTrailName, this.x, this.y, this.game.canvasCharacters)
}
Application.subclass(GameBonusBullet, GameBonusActor);
GameBonusBullet.CHAR_PLAYER = 1;
GameBonusBullet.CHAR_BOSS = 2;
GameBonusBullet.TYPE_RETURNABLE = 1;
GameBonusBullet.TYPE_BREAKABLE = 2;
GameBonusBullet.TYPE_EXPLOSIVE = 3;
GameBonusBullet.ST_WALK = "st1";
GameBonusBullet.prototype.free = function() {
    this.fxTrail.setStopAndRemove(!0);
    this.fxTrail = null;
    GameBonusActor.prototype.free.call(this)
};
GameBonusBullet.prototype.gotoState = function(a) {
    GameBonusActor.prototype.gotoState.call(this, a)
};
GameBonusBullet.prototype.onEndAnimation = function(a) {};
GameBonusBullet.prototype.update = function(a) {
    GameBonusActor.prototype.update.call(this, a);
    this.x += this.speed * a * this.direction;
    if (this.playerId == GameBonusBullet.CHAR_BOSS) {
        if (this.game.player && this.game.player.hitTest(this)) {
            this.toDelete = !0;
            this.game.player.onHit(this.damage);
            a = "";
            if (Global.playerSelected == Global.PLAYER_UMA) switch (this.type) {
                case GameBonusBullet.TYPE_RETURNABLE:
                    a = "aniFxExplodeGreenMal";
                    break;
                case GameBonusBullet.TYPE_BREAKABLE:
                    a = "aniFxExplodeYellowMal";
                    break;
                case GameBonusBullet.TYPE_EXPLOSIVE:
                    a =
                        "aniFxExplodeRedMal"
            } else switch (this.type) {
                case GameBonusBullet.TYPE_RETURNABLE:
                    a = "aniFxExplodeGreenUma";
                    break;
                case GameBonusBullet.TYPE_BREAKABLE:
                    a = "aniFxExplodeYellowUma";
                    break;
                case GameBonusBullet.TYPE_EXPLOSIVE:
                    a = "aniFxExplodeRedUma"
            }
            Application.instance.effectManager.createEffect(a, this.x, this.y, this.game.canvas);
            this.game.onShake()
        }
    } else this.playerId == GameBonusBullet.CHAR_PLAYER && this.game.boss.clipShield && this.game.boss.clipShield.hitTest(this.clip) ? (this.toDelete = !0, this.game.onShake(),
        a = Global.playerSelected == Global.PLAYER_UMA ? "aniFxExplodeGreenMal" : "aniFxExplodeGreenUma", Application.instance.effectManager.createEffect(a, this.x, this.y, this.game.canvas), this.game.boss.destroyShield()) : this.playerId == GameBonusBullet.CHAR_PLAYER && this.game.boss.hitTest(this) && (this.game.boss.onHit(this.damage), a = Global.playerSelected == Global.PLAYER_UMA ? "aniFxExplodeGreenMal" : "aniFxExplodeGreenUma", Application.instance.effectManager.createEffect(a, this.x, this.y, this.game.canvas), this.toDelete = !0, this.game.onShake(),
        this.game.player.addHealth(window.config.bonus_boss_config.healthRecovery), Application.instance.effectManager.createEffect("aniFxPickHealthFull", this.game.player.x, this.game.player.y - 100, this.game.canvas), a = PoolClips.instance.getClip("mcGuiItemHealth"), a.scale.x = a.scale.y = 1, this.game.hud.onItemCollected(ActorManagerPlatformRunner.ITEM_HEALTH, a, this.x, this.y, "guiFxPickHealthTrail", 0));
    this.fxTrail && (this.fxTrail.x = this.x + (20 * Math.random() - 10), this.fxTrail.y = this.y + (20 * Math.random() - 10));
    if (-300 > this.x ||
        1124 < this.x) this.toDelete = !0, this.game.onBulletDisappear(this.type)
};

function GameBonusPlayer(a, b, c, d, e) {
    GameBonusActor.call(this, a, b, c, d, e);
    this.oy = c;
    this.character = new Character(b, c, this.canvas);
    this.character.addState(GameBonusPlayer.ST_STAND, this.skin + "_stand");
    this.character.addState(GameBonusPlayer.ST_WALK, this.skin + "_walk");
    this.character.addState(GameBonusPlayer.ST_JUMP, this.skin + "_jump", [{
        frame: 13,
        caller: this,
        callback: this.createSplashIn
    }, {
        frame: 29,
        caller: this,
        callback: this.createSplashOut
    }]);
    this.character.addState(GameBonusPlayer.ST_ATTACK, this.skin + "_attack", [{
        frame: Global.playerSelected === Global.PLAYER_MAL ? 15 : 17,
        caller: this,
        callback: this.createBullet
    }]);
    this.character.addState(GameBonusPlayer.ST_HIT, this.skin + "_hit");
    this.character.addState(GameBonusPlayer.ST_DEFEAT, this.skin + "_defeat");
    this.character.addState(GameBonusPlayer.ST_AFTER_DEFEAT, this.skin + (Global.playerSelected === Global.PLAYER_MAL ? "_stand" : "_defeat2"));
    this.character.addState(GameBonusPlayer.ST_WIN, this.skin + "_win");
    this.character.addState(GameBonusPlayer.ST_REPEL, this.skin + "_repel");
    this.gotoState(GameBonusPlayer.ST_WALK);
    this.character.onEndAnimation(this, this.onEndAnimation);
    Global.playerSelected == Global.PLAYER_MAL && (this.jumpControl = new DragonJumpControl(280, 300, 220, 1.25));
    Global.playerSelected === Global.PLAYER_UMA && (this.fxFog = Application.instance.effectManager.createEffect("aniFxFoamUma", this.x, this.y - 55, this.game.canvasFogUma));
    this.finish = !1
}
Application.subclass(GameBonusPlayer, GameBonusActor);
GameBonusPlayer.ST_APPEAR = "st1";
GameBonusPlayer.ST_STAND = "st2";
GameBonusPlayer.ST_WALK = "st3";
GameBonusPlayer.ST_JUMP = "st4";
GameBonusPlayer.ST_ATTACK = "st5";
GameBonusPlayer.ST_HIT = "st6";
GameBonusPlayer.ST_DEFEAT = "st7";
GameBonusPlayer.ST_WIN = "st8";
GameBonusPlayer.ST_REPEL = "st9";
GameBonusPlayer.ST_AFTER_DEFEAT = "st10";
GameBonusPlayer.prototype.free = function() {
    GameBonusActor.prototype.free.call(this);
    this.fxFog && (this.fxFog.isAwaitingDelete = !0, this.fxFog = null);
    this.jumpControl && (this.jumpControl.free(), this.jumpControl = null)
};
GameBonusPlayer.prototype.createBullet = function() {
    var a = this.game.createBullet(this.x + 130 + (Global.playerSelected == Global.PLAYER_MAL ? 60 : 0), this.y - 100, GameBonusBullet.TYPE_RETURNABLE, GameBonusBullet.CHAR_PLAYER, 0);
    a.speed = window.config.bonus_boss_config.bulletSpeedReturn;
    a.damage = window.config.bonus_boss_config.damageBulletReturn
};
GameBonusPlayer.prototype.canChangeState = function() {
    return this.state == GameBonusPlayer.ST_HIT || this.state == GameBonusPlayer.ST_DEFEAT || this.state == GameBonusPlayer.ST_APPEAR || this.state == GameBonusPlayer.ST_WIN ? !1 : !0
};
GameBonusPlayer.prototype.onJump = function() {
    this.canChangeState() && this.state === GameBonusPlayer.ST_WALK && (Global.playerSelected === Global.PLAYER_MAL ? this.jumpControl && !this.jumpControl.getIsJump() && (this.gotoState(GameBonusPlayer.ST_JUMP), this.jumpControl.init(), Application.instance.effectManager.createEffect("aniFxSplashInUma", this.x, this.y, this.game.canvas), Application.instance.playSound("SND_BONUS_MAL_JUMP")) : this.gotoState(GameBonusPlayer.ST_JUMP))
};
GameBonusPlayer.prototype.createSplashIn = function() {
    Global.playerSelected === Global.PLAYER_UMA && (Application.instance.effectManager.createEffect("aniFxSplashInUma", this.x + 300, this.y + 10, this.game.canvas), Application.instance.effectManager.createEffect("aniFxSplashUma02", this.x + 300, this.y + 10, this.game.canvas), Application.instance.effectManager.createEffect("aniFxSplashUmaBack01", this.x + 300, this.y + 10, this.game.canvas), Application.instance.playSound("SND_BONUS_UMA_JUMP"))
};
GameBonusPlayer.prototype.createSplashOut = function() {
    Global.playerSelected === Global.PLAYER_UMA && (Application.instance.effectManager.createEffect("aniFxSplashInUma", this.x, this.y, this.game.canvas), Application.instance.effectManager.createEffect("aniFxSplashUma01", this.x, this.y, this.game.canvas))
};
GameBonusPlayer.prototype.addHealth = function(a) {
    GameBonusActor.prototype.addHealth.call(this, a);
    this.game.hud.setHealthBar(this.health / this.basehealth)
};
GameBonusPlayer.prototype.onHit = function(a) {
    !this.finish && this.canChangeState() && (GameBonusActor.prototype.onHit.call(this, a), this.game.hud.setHealthBar(this.health / this.basehealth), 0 < this.health ? (this.gotoState(GameBonusPlayer.ST_HIT), Application.instance.playSound("SND_BONUS_HIT")) : (this.gotoState(GameBonusPlayer.ST_DEFEAT), this.game.m_pauseTimer = 2200, this.game.waveShaker.shake(20, 0, 100, 1, 1200, 0), Application.instance.playSound(Global.playerSelected === Global.PLAYER_MAL ? "SND_BOSS_DEFEAT_MAL" : "SND_BOSS_DEFEAT_UMA")),
        this.jumpControl && this.jumpControl.end())
};
GameBonusPlayer.prototype.onRepel = function() {
    !this.finish && this.canChangeState() && this.state === GameBonusPlayer.ST_WALK && (this.gotoState(GameBonusPlayer.ST_ATTACK), this.game.onPlayerAttack())
};
GameBonusPlayer.prototype.gotoState = function(a) {
    GameBonusActor.prototype.gotoState.call(this, a);
    if (Global.playerSelected === Global.PLAYER_UMA) switch (this.state) {
        case GameBonusPlayer.ST_ATTACK:
            this.clip.getInstance("mcContent") && (this.clip.getInstance("mcContent").removeChildren(0, this.clip.getInstance("mcContent").children.length), this.clip.getInstance("mcContent").addChild(Application.instance.getClip("bullet_uma_1_content")));
            break;
        case GameBonusPlayer.ST_JUMP:
        case GameBonusPlayer.ST_STAND:
        case GameBonusPlayer.ST_WIN:
        case GameBonusPlayer.ST_DEFEAT:
            this.game.canvasFogUma.visible = !1;
            break;
        default:
            this.game.canvasFogUma.visible = !0
    }
    if (this.state == GameBonusPlayer.ST_WIN || this.state == GameBonusPlayer.ST_DEFEAT) this.finish = !0
};
GameBonusPlayer.prototype.onEndAnimation = function(a) {
    switch (a) {
        case GameBonusPlayer.ST_APPEAR:
        case GameBonusPlayer.ST_REPEL:
        case GameBonusPlayer.ST_HIT:
        case GameBonusPlayer.ST_JUMP:
        case GameBonusPlayer.ST_ATTACK:
            this.gotoState(GameBonusPlayer.ST_WALK);
            break;
        case GameBonusPlayer.ST_WIN:
            this.gotoState(GameBonusPlayer.ST_STAND);
            break;
        case GameBonusPlayer.ST_DEFEAT:
            this.gotoState(GameBonusPlayer.ST_AFTER_DEFEAT), this.game.boss.onWin()
    }
};
GameBonusPlayer.prototype.update = function(a) {
    this.jumpControl && (this.jumpControl.update(a), this.y = this.oy + this.jumpControl.getCurrentHeight());
    this.fxFog && (this.fxFog.x = this.x);
    GameBonusActor.prototype.update.call(this, a)
};

function GameBonusHud(a, b, c) {
    SScreen.call(this, a, b, c);
    GameBonusHud.instance = this;
    this.canvas.hitArea = null;
    Global.playerSelected === Global.PLAYER_UMA && (this.getControl("mcGuiPlayer").setClip("gui_hud_bonuslevel_uma"), this.getControl("mcGuiEnemy").setClip("gui_hud_bonuslevel_mal"));
    this.getControl("mcGuiPlayer").clip.gotoAndStop(3);
    this.m_itemsArray = [];
    this.m_controlPos = {};
    this.initialize();
    this.fixGameScale()
}
Application.subclass(GameBonusHud, SScreen);
GameBonusHud.prototype.free = function() {
    GameBonusHud.instance = null;
    SScreen.prototype.free.call(this)
};
GameBonusHud.prototype.initialize = function() {
    this.m_controlPos.mcGuiBtnPause = this.getControl("mcGuiBtnPause").canvas.position.x;
    this.m_controlPos.mcGuiPlayer = this.getControl("mcGuiPlayer").canvas.position.x;
    this.m_controlPos.mcGuiHpbar = this.getControl("mcGuiHpbar").canvas.position.x;
    this.m_controlPos.mcGuiHpbarAlertFx = this.getControl("mcGuiHpbarAlertFx").canvas.position.x;
    this.m_controlPos.mcGuiEnemy = this.getControl("mcGuiEnemy").canvas.position.x;
    this.m_controlPos.mcGuiHpbarEnemy = this.getControl("mcGuiHpbarEnemy").canvas.position.x;
    this.m_controlPos.mcGuiHpbarEnemyAlertFx = this.getControl("mcGuiHpbarEnemyAlertFx").canvas.position.x
};
GameBonusHud.prototype.fixGameScale = function() {
    var a = Layout.left / Layout.scale,
        b;
    for (b in this.m_controlPos) {
        var c = this.m_controlPos[b] < Application.APP_WIDTH / 2 ? -1 : 1;
        this.getControl(b).canvas.position.x = this.m_controlPos[b] + c * a
    }
};
GameBonusHud.prototype.onUIPress = function(a) {
    if (GuiGame.instance) switch (a.name) {
        case "mcGuiBtnPause":
            GuiGame.instance.addPopup(GuiPopupPause, "mcGuiPopupPause", 0, 0)
    }
};
GameBonusHud.prototype.setHealthBar = function(a) {
    a = Math.floor(a * (this.getControl("mcGuiHpbar").clip.totalFrames - 1)) + 1;
    this.getControl("mcGuiHpbar").clip.gotoAndStop(a);
    this.showLowHealthBarFx(a <= HudPlatformRunner.LOW_HEALTH_BAR_FRAME)
};
GameBonusHud.prototype.showLowHealthBarFx = function(a) {
    a !== this.getControl("mcGuiHpbarAlertFx").isVisible && (this.getControl("mcGuiHpbarAlertFx").setVisible(a), a && this.getControl("mcGuiHpbarAlertFx").clip.gotoAndPlay(1))
};
GameBonusHud.prototype.setBossHealthBar = function(a) {
    a = Math.floor(a * (this.getControl("mcGuiHpbarEnemy").clip.totalFrames - 1)) + 1;
    this.getControl("mcGuiHpbarEnemy").clip.gotoAndStop(a);
    this.showBossLowHealthBarFx(a <= HudPlatformRunner.LOW_HEALTH_BAR_FRAME)
};
GameBonusHud.prototype.showBossLowHealthBarFx = function(a) {
    a !== this.getControl("mcGuiHpbarEnemyAlertFx").isVisible && (this.getControl("mcGuiHpbarEnemyAlertFx").setVisible(a), a && this.getControl("mcGuiHpbarEnemyAlertFx").clip.gotoAndPlay(1))
};
GameBonusHud.prototype.update = function(a) {
    SScreen.prototype.update.call(this, a);
    for (var b = this.m_itemsArray.length - 1; 0 <= b; b--) {
        var c = this.m_itemsArray[b];
        c.movement.m_finish ? (Application.isLowDevice || Application.instance.effectManager.createEffect(Global.playerSelected === Global.PLAYER_UMA ? "aniFxCountCollectibleUma" : "aniFxCountCollectibleMal", c.movement.getX(), c.movement.getY(), this.canvas), PoolClips.instance.releaseClip(c.clip), c.fx.setStopAndRemove(!0), c.fx = null, c.movement.free(), c.movement = null,
            this.m_itemsArray.splice(b, 1)) : 0 < c.delay ? c.delay -= a : (c.movement.update(a), c.clip.setPosition(c.movement.getX(), c.movement.getY()), c.fx.x = c.movement.getX(), c.fx.y = c.movement.getY())
    }
};
GameBonusHud.prototype.onItemCollected = function(a, b, c, d, e, f) {
    var g = this.getControl("mcGuiPlayer").canvas.position.x,
        h = this.getControl("mcGuiPlayer").canvas.position.y;
    a === ActorManagerPlatformRunner.ITEM_HEALTH || a === ActorManagerPlatformRunner.ITEM_HEALTH_SMALL ? (g += 125, h += 0) : (g += 65, h += 50);
    a = this.canvas.toLocal(new window.PIXI.Point(c, d), GameBonus.instance.canvasBullets);
    g = new ParametricParabolicMovement(a.x, a.y, g, h, .1, .06);
    e = Application.instance.effectManager.createEffect(e, g.getX(), g.getY(), this.canvas);
    b.setPosition(g.getX(), g.getY());
    this.canvas.addChild(b);
    this.m_itemsArray.push({
        clip: b,
        movement: g,
        delay: f,
        fx: e
    })
};

function GameBonusBulletManager(a) {
    this.game = a;
    this.sequence = null;
    this.time = this.index = 0;
    this.indexPool = -1;
    this.delay = 0
}
GameBonusBulletManager.DELAY_INIT = 100;
GameBonusBulletManager.prototype.updatePattern = function() {
    for (var a = null, b = 0; b < window.config.bonus_boss_bullets.length; b++)
        if (this.game.boss.health >= window.config.bonus_boss_bullets[b].bossLife) {
            a = window.config.bonus_boss_bullets[b];
            break
        }
    this.indexPool != b && (this.indexPool = b, this.sequence = new GameBonusAttackSequence, this.sequence.pattern = a.pattern.concat(), this.sequence.delayBullets = a.delayBullets, this.sequence.speedBullet = a.speedBullet, this.sequence.bossUseShield = a.bossUseShield, this.sequence.bossShieldLife =
        a.bossShieldLife, this.index = 0, this.game.goMoreFast(), 3 == this.indexPool ? (this.game.othersFx.push(Application.instance.effectManager.createEffect("aniFxSplashParticulesS", this.game.boss.x - 120, this.game.boss.y + 10, this.game.canvas)), this.game.othersFx.push(Application.instance.effectManager.createEffect("aniFxSplashParticulesS", this.game.player.x - 120, this.game.player.y + 10, this.game.canvas))) : 4 == this.indexPool ? (this.game.othersFx.push(Application.instance.effectManager.createEffect("aniFxSplashParticuleM",
            this.game.boss.x - 50, this.game.boss.y + 10, this.game.canvas)), this.game.othersFx.push(Application.instance.effectManager.createEffect("aniFxSplashParticuleM", this.game.player.x - 50, this.game.player.y + 10, this.game.canvas))) : 5 == this.indexPool && this.game.othersFx.push(Application.instance.effectManager.createEffect("aniFxSplashParticulesL", this.game.boss.x, this.game.boss.y + 10, this.game.canvas)));
    this.time = 0;
    this.sequence.bossUseShield && this.game.boss.createShield(this.sequence.bossShieldLife);
    this.index =
        0;
    this.delay = GameBonusBulletManager.DELAY_INIT
};
GameBonusBulletManager.prototype.update = function(a) {
    this.delay -= a;
    if (!(0 < this.delay) && this.sequence && !this.game.paused && (this.time -= a, 0 >= this.time)) {
        this.time = this.sequence.delayBullets;
        if (0 != this.sequence.pattern[this.index]) this.game.boss.onAttack(this.sequence.pattern[this.index], this.sequence.speedBullet);
        else this.game.onBossStop();
        this.index++;
        this.index >= this.sequence.pattern.length && (this.index = 0)
    }
};

function GameBonusAttackSequence() {
    this.pattern = [];
    this.speedBullet = this.delayBullets = 0;
    this.bossUseShield = !1;
    this.bossShieldLife = 0
}
PIXI.Container.prototype.countChildren = function() {
    if (!this.children) return 1;
    for (var a = this.children.length, b = 0, c = this.children.length; b < c; b++) this.children[b].countChildren && (a += this.children[b].countChildren());
    return a
};
Application.warn("Forestry Games");