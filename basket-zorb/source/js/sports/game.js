var URLQuery = [];

if (typeof console === "undefined") {
    //  console = {log:function(){}};
}

var Game = {};


PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO;
var startApp = function () {
    var containerDom = document.getElementById('interactive-area');
    Game.webApp = new CC.WebApp(containerDom, 683, 384);
    Game.webApp.screenWidthMax = 683;
    Game.webApp.screenWidthMin = 512;

    Game.audioLoaded = false;
    Game.introFinished = false;
    Game.loadLoaded = false;

    Game.hasPlayedIntroVO = false;

    PIXI.AUTO_PREVENT_DEFAULT = false;
    Game.webApp.backgroundColor = 0xFFFFFF;

    //createjs.Touch.enable(Game.webApp.stage, false, true);

    var interactiveArea = document.getElementById("interactive-area");
    if (CC.isMobile) {
        //  interactiveArea.style.backgroundImage = "url(img/rotate_device.png)";
    }

    Game.shuffleMode = false;
    Game.shuffleOrder = [0, 1, 2, 3, 4, 5, 6];
    Game.shuffleManifests = [
        "dat/manifests/manifest_pogo.json",
        "dat/manifests/manifest_ring.json",
        "dat/manifests/manifest_ball.json",
        "dat/manifests/manifest_rocket.json",
        "dat/manifests/manifest_goal.json",
        "dat/manifests/manifest_goalie.json",
        "dat/manifests/manifest_sky.json"
    ];

    Game.shuffleOrderStadium = [0, 1];
    Game.shuffleManifestsStadium = [
        "dat/manifests/manifest_goal.json",
        "dat/manifests/manifest_goalie.json"
    ];

    Game.shuffleCurrent = 0;
    Game.shuffleCurrentStadium = 0;

    Game.scrambleShuffle = function () {

        Game.shuffleCurrent = 0;
        Game.shuffleCurrentStadium = 0;

        if (SS.isStadium) {
            var i = 0, length = 2;
            for (i; i < length; ++i) {
                //Game.shuffleOrderStadium.push(Game.shuffleOrderStadium.splice(Math.floor((length - i) * Math.random()), 1)[0]);
            }
        } else {
            var i = 0, length = 7;
            for (i; i < length; ++i) {
                Game.shuffleOrder.push(Game.shuffleOrder.splice(Math.floor((length - i) * Math.random()), 1)[0]);
            }
        }
    };
    var useQuickLoder = localStorage.getItem("boomerang_all_stars_quickloader");

    if (useQuickLoder === null || useQuickLoder === "no") {
        Game.webApp.firstStart(Game.IntroScreen);
    }
    else {
        localStorage.setItem("boomerang_all_stars_quickloader", "no");
        Game.webApp.firstStart(Game.LoadScreen);
    }
    Game.webApp.cssEnabled = true;
    Game.webApp.resizeMethod = CC.WebApp.Resizer.FLEX_WIDTH;

    var storedLanguage = localStorage.getItem("boomerang_all_stars_language_selection");
    if (storedLanguage !== null) {
        COPY_DECK.currentLanguage = storedLanguage;
        SS.setLanguageRegion(COPY_DECK.currentLanguage);
    } else {

        SS.setLanguageRegion('en-gb');

        if (navigator.language) {
            var testLanguage = navigator.language.toLowerCase();
            Game.cordovaLang = testLanguage;
        } else if (navigator.globalization) {
            navigator.globalization.getPreferredLanguage(
                function (language) {
                    if (language)
                        var testLanguage = language.value.toLowerCase();
                        Game.cordovaLang = testLanguage;
                },
                function () {
                }
            );
        }
    }
};

var playApp = function () {

    if (Game.cordovaLang && COPY_DECK.languages[Game.cordovaLang]) {
        COPY_DECK.currentLanguage = Game.cordovaLang;
        SS.setLanguageRegion(COPY_DECK.currentLanguage);
    }
    URLQuery = window.location.href.split("?");
    if (URLQuery.length < 1) {
        URLQuery = [0, "ball", 0];
    }
    if (URLQuery.length < 2) {
        URLQuery = [0, URLQuery[1], 0];
    }
    SS.setCurrentTeam(URLQuery[2] || 0);

    switch (URLQuery[1]) {
        case "pogo":
            //Game.webApp.swapScreen(Game.PogoScreen);
            Game.hardSwapScreen("dat/manifests/manifest_pogo.json", Game.PogoScreen, Game.LoadScreen);
            SS.setCurrentGame(0);
            break;
        case "ring":
            Game.hardSwapScreen("dat/manifests/manifest_ring.json", Game.RingScreen, Game.LoadScreen);
            SS.setCurrentGame(1);
            break;
        case "ball":
            Game.hardSwapScreen("dat/manifests/manifest_ball.json", Game.BallScreen, Game.LoadScreen);
            SS.setCurrentGame(2);
            break;
        case "rocket":
        case "racket":
            Game.hardSwapScreen("dat/manifests/manifest_rocket.json", Game.RocketScreen, Game.LoadScreen);
            SS.setCurrentGame(3);
            break;
        case "sky":
            Game.hardSwapScreen("dat/manifests/manifest_sky.json", Game.SkyScreen, Game.LoadScreen);
            SS.setCurrentGame(4);
            break;
        case "goal":
            Game.hardSwapScreen("dat/manifests/manifest_goalie.json", Game.GoalieScreen, Game.LoadScreen);
            SS.setCurrentGame(5);
            break;
        case "keepy":
        case "uppy":
            Game.hardSwapScreen("dat/manifests/manifest_uppy.json", Game.UppyScreen, Game.LoadScreen);
            SS.setCurrentGame(6);
            break;
        case "lead":
            Game.webApp.swapScreen(Game.LeaderScreen);
            break;
        case "select":
            Game.webApp.swapScreen(Game.SelectScreen);
            break;
        default:
            Game.webApp.swapScreen(Game.StartScreen);
            break;
    }
};
var initApp = function () {

    var contextClass = (window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext);

    if (!contextClass) {
        createjs.Sound.registerPlugins([createjs.CordovaAudioPlugin, createjs.WebAudioPlugin]);
    }

    webAudioTouchUnlock(contextClass).then(function (unlocked)
    {
        if(unlocked)
        {
            // AudioContext was unlocked from an explicit user action,
            // sound should start playing now
            //console.log('sound unlocked');
        }
        else
        {
            // There was no need for unlocking, devices other than iOS
        }
    },
    function(reason)
    {
        console.error(reason);
    });

    CC.ScaleFactor = exstractScaleFactor();
    PIXI.settings.RESOLUTION = CC.ScaleFactor;
    SS.updateTeamScores();


    function onDeviceReady() {
        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);
        document.addEventListener("backbutton", function(e){
                e.preventDefault();
        }, false);
        // Add similar listeners for other events
    }

    function onPause() {
        // Handle the pause event
        Game.sound.pause(true);
    }

    function onResume() {
        // Handle the resume event
        Game.sound.pause(false);
    }

    document.addEventListener("deviceready", onDeviceReady, false);
    Game.hardSwapScreen = function (manifestURL, newScreen, loadScreen, config) {

        Game.singleHardLoad = true;
        loadScreen = loadScreen || Game.LoadScreen;
        Game.loader.onManifestLoaded = function () {
            //Game.sound.stopAllHard();
            //stop everything
            Game.webApp.deconstructDisplayObjects(Game.webApp.screenObject);
            Game.webApp.juggler.removeAll();
            Game.animationList = {};
            Game.webApp.pause();
            Game.webApp.pauseUpdate();
            Game.sound.purge();
            Game.loader.unload();
        };
        Game.loader.onPreloadComplete = function () {
            Game.webApp.resumeUpdate();
            Game.webApp.start(loadScreen);
        };
        Game.loader.onAssetsComplete = function () {
            if(Game.singleHardLoad)
            {
                Game.singleHardLoad = false;
                Game.webApp.swapScreen(newScreen, config);
            }

        };
        Game.loader.load(manifestURL);
    };

    Game.animationList = {};

    Game.loader = new CC.Loader("source/");

    Game.loader.addScaleFactor(CC.ScaleFactor, "@" + CC.ScaleFactor + "x");
    //  Game.loader.addScaleFactor(2,"@2x");
    // Game.loader.addScaleFactor(4,"@4x");
    //Game.loader.addScaleFactor(1,"@2x");

    Game.sound = new CC.SoundJs();
    if (localStorage.getItem("boomerang_all_stars_mute_music") === "yes") {
        Game.sound.muteMusic();
    }
    if (localStorage.getItem("boomerang_all_stars_mute_sound") === "yes") {
        Game.sound.mute(true);
    }

    ifvisible.on("blur", function () {
      //  Game.sound.pause(true);
    });

    ifvisible.on("focus", function () {
      //  Game.sound.pause(false);
    });

    window.onblur = function () {
        // isActive = false;
        Game.sound.pause(true);
    };
    window.onfocus = function () {
        // isActive = true;
        Game.sound.pause(false);
    };

    Game.loader.onPreloadProgress = function (event, res) {

        if (!Game.audioLoadedOnce && res.data && res.data.data && res.data.data.audioSprite) {
            Game.audioLoadedOnce = true;
            if (res.data.oldSrc) {
                res.data.src = res.data.oldSrc;
            }
            res.data.oldSrc = res.data.src;
            res.data.src = Game.loader.assetURL + res.data.src;
            if (!!window.cordova && navigator.userAgent.match(/Android/i) !== null) {
                var p = window.location.pathname;
                var root = p.substring(0, p.lastIndexOf('/') + 1);
                res.data.src = root + res.data.src;
                res.data.src = res.data.src.replace("\\", "/");
                res.data.src = res.data.src.replace("m4a", "ogg");
            }

            Game.sound.addSoundJSON(res.data, function() {
                Game.audioLoaded = true;
                if (Game.introFinished && Game.loadLoaded) {
                    playApp();
                }
            });
        }

        if (res && res.data && res.data.skeleton) {
            var dataSpine = res.name.split("/");
            var dataName = dataSpine[dataSpine.length - 1].replace(".json", "");
            Game.animationList[dataName] = res.spineData;
        }
    };
    Game.loader.onPreloadComplete = function () {
        var timeDiff = new Date().getTime();
        timeDiff -= Game.firstLoadStartTimestamp;
        timeDiff = 8000 - timeDiff;
        timeDiff = Math.max(0, timeDiff);
        setTimeout(startApp, timeDiff);
    };
    Game.loader.onAssetsProgress = function (event, res) {        
        if (!Game.audioLoadedOnce && res.data && res.data.data && res.data.data.audioSprite) {
            Game.audioLoadedOnce = true;
            if (res.data.oldSrc) {
                res.data.src = res.data.oldSrc;
            }
            res.data.oldSrc = res.data.src;
            res.data.src = Game.loader.assetURL + res.data.src;
            if (!!window.cordova && navigator.userAgent.match(/Android/i) !== null) {
                var p = window.location.pathname;
                var root = p.substring(0, p.lastIndexOf('/') + 1);
                res.data.src = root + res.data.src;
                res.data.src = res.data.src.replace("\\", "/");
                res.data.src = res.data.src.replace("m4a", "ogg");
            }

            Game.sound.addSoundJSON(res.data, function() {
                Game.audioLoaded = true;
                if (Game.introFinished && Game.loadLoaded) {
                    playApp();
                }
            });
        }

        if (res && res.data && res.data.skeleton) {
            var dataSpine = res.name.split("/");
            var dataName = dataSpine[dataSpine.length - 1].replace(".json", "");
            Game.animationList[dataName] = res.spineData;
        }
        if (res && res.name.match("boomerang_all_stars_") !== null) {
            for (var key in res.data) {
                COPY_DECK.languages[res.data[key].language] = res.data[key].copy;
                COPY_DECK.languages[res.data[key].language].display_name = res.data[key].display_name;
            }
        }
    };

    Game.loader.onAssetsComplete = function () {

        var audioCode = 'en-gb'
        if(Game.cordovaLang && COPY_DECK.languages[Game.cordovaLang]) {
            audioCode = Game.cordovaLang;
        }
        
        if(audioCode === 'no') {
            audioCode = 'no-no';
        }

        Game.loader.addArray([
            {
                "url": "snd/" + audioCode + "/game.json",
                "id": "game_audio"
            }
        ], Game.loader.pixiLoader);
        
        Game.loader.pixiLoader.load();

        Game.loader.onAssetsComplete = function () {
            Game.loadLoaded = true;
            if (Game.introFinished && Game.audioLoaded) {
                playApp();
            }
        }
    };

    addEventListener("click", function() {
        Game.sound.pause(false);
    });

    Game.loader.load("dat/manifests/manifest_menu.json", [{
            url: "anim/loader_anim_[n].json",
            id: "loader_anim_[n]",
            count: 3
        }, {

            url: "img/preload_atlas_[n]_[v].json",
            id: "preload_atlas_[n]",
            count: 1
        }, {

            url: "anim/cc_logo.json",
            id: "cc_logo",
            count: 1
        }
    ]);
};

function webAudioTouchUnlock (context)
{
    return new Promise(function (resolve, reject)
    {
        if (context.state === 'suspended' && 'ontouchstart' in window)
        {
            var unlock = function()
            {
                context.resume().then(function()
                {
                    document.body.removeEventListener('touchstart', unlock);
                    document.body.removeEventListener('touchend', unlock);

                    resolve(true);
                }, 
                function (reason)
                {
                    reject(reason);
                });
            };

            document.body.addEventListener('touchstart', unlock, false);
            document.body.addEventListener('touchend', unlock, false);
        }
        else
        {
            resolve(false);
        }
    });
}

var exstractScaleFactor = function () {
    var screenHeight = screen.height * (window.devicePixelRatio || 1);
    var roughFactor = 2;
    var user = navigator.userAgent;
    //ipad 1 and 2
    if (user.match(/iPad/i) !== null && screenHeight < 1050) {
        roughFactor = 1;
    }

    if (isOldDevice()) {
        roughFactor = 1;
    }
    //all kindles
    if (user.match(/kindle|Silk/i) !== null) {
        roughFactor = 1;
    }

    if (user.match(/Android/i) !== null && screenHeight < 900) {
        roughFactor = 1;
    }

    if (user.match(/Android/i) !== null && window.devicePixelRatio < 4) {
        roughFactor = 1;
    }

    if (!PIXI.utils.isWebGLSupported()) {
        roughFactor = 1;
    }

    return roughFactor;
};

WebFont.load({
    custom: {
        families: ['fred_burger', 'fred_burger_shadow', 'fred_burger_ar', 'fred_burger_shadow_ar']
    }
});


function initWebGL(canvas) {
    gl = null;

    try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {}

    if (!gl) {
        gl = null;
    }

    return gl;
}

function checkMaxAnisotropy() {
    var max = 0;

    var canvas = document.getElementById('webGLCanvasTest');
    gl = initWebGL(canvas);

    try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {}

        if (gl) {
            var ext = (
                gl.getExtension('EXT_texture_filter_anisotropic') ||
                gl.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
                gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
            );

            if (ext){
                max = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            }
        }
        return max;
    }

    function isiPad( $window ) {
    var ua = $window.navigator.userAgent || $window.navigator.vendor || $window.opera;
    return (/iPad/).test(ua);
}


function getiPadVersion( $window ) {
    var iPadVersion = null;
    if(isiPad(window) && window.devicePixelRatio === 2) {
        if(checkMaxAnisotropy() < 4) {
            iPadVersion = 3;
        } else {
            iPadVersion = 4;
        }
    }
    return iPadVersion;
}

function isSmartDevice( $window ) {
    var ua = $window.navigator.userAgent || $window.navigator.vendor || $window.opera;
    return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
}

function isOldDevice() {
    if(isSmartDevice(window) && window.devicePixelRatio === 1 && checkMaxAnisotropy() < 4 || isiPad( window ) && checkMaxAnisotropy() < 4) {
        return true;
    } else {
        return false;
    }
}
