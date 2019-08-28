define(['gmi-platform', 'storage', 'brim', 'game/playcanvas-stable.min'], function(gmi_platform, storage, brim) {
    "use strict";

    var canvas, devices, app;
    var canvasWidth, canvasHeight, canvasInit;

    // create a gmi object using getGMI. If window.getGMI has already been defined i.e we have already got the gmi
    // library from the server, then this will be used over the local one
    var gmi         = gmi_platform.getGMI();
    var container   = document.getElementById(gmi.gameContainerId);
    var brimElement = brim.create(gmi.gameContainerId);

    // configure path prefixes
    var ASSET_PREFIX    = gmi.gameDir + "game/";
    var SCRIPT_PREFIX   = gmi.gameDir + "game/";
    var CONFIG_FILENAME = gmi.gameDir + "game/config.json";
    var CANVAS_ID       = 'dm-game-canvas';
    var SCENE_PATH      = "505078.json";
    var CONTEXT_OPTIONS = {
            'antialias'             : true,
            'alpha'                 : false,
            'preserveDrawingBuffer' : false,
            'preferWebGl2'          : false
        };
    var DOWNSIZE_FACTOR = 0.6;

    pc.script.legacy = false;

    // disable pinch to zoom on iOS Safari

    if(pc.platform.ios) {
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });
    }

    // ------------------------------------------------
    // DISABLE PLAYCANVAS CACHE BUSTING
    // ------------------------------------------------

    pc.Asset.prototype.getFileUrl = function () {    
        var file = this.getPreferredFile();

        if (!file || !file.url) {
            return null;
        }

        var url = file.url;

        if (this.registry && this.registry.prefix) {
            url = this.registry.prefix + url;
        }

        return url;
    };

    // ------------------------------------------------
    // DISABLE PLAYCANVAS LOGGING
    // ------------------------------------------------

    pc.log = {
        write   : function(text) {}, 
        open    : function(text) {}, 
        info    : function(text) {}, 
        debug   : function(text) {}, 
        error   : function(text) {}, 
        warning : function(text) {}, 
        alert   : function(text) {}, 
        assert  : function(condition, text) {}
    };

    // ------------------------------------------------
    // HEARTBEAT
    // ------------------------------------------------

    var startHeartbeat = function() {        
        setInterval(DM2.sendHeartbeat, 15000);
    };

    // ------------------------------------------------
    // Low Memory Mode Check
    // ------------------------------------------------

    var checkLowMemoryMode = function() {
        if(pc.platform.ios && window.devicePixelRatio === 1) {
            return true;
        } else {
            return false;
        }
    };

    // ------------------------------------------------
    // LOADING SCREEN
    // ------------------------------------------------

    var createLoadingScreen = function(app, gmi) {

        pc.script.createLoadingScreen(function (app) {

            var gameHolder = document.getElementById(gmi.gameContainerId);
            var assetDir   = gmi.gameDir || './';

            var showSplash = function () {
                // splash wrapper
                var wrapper = document.createElement('div');
                wrapper.id = 'loadingscreen-wrapper';
                gameHolder.insertBefore(wrapper, gameHolder.firstChild);

                var logo = document.createElement('div');
                logo.id = 'cbbc-logo'; 
                wrapper.appendChild(logo);

                var background = document.createElement('div');
                background.id = 'loading-bar-background';
                wrapper.appendChild(background);

                var container = document.createElement('div');
                container.id = 'loading-bar-container';
                background.appendChild(container);

                var bar = document.createElement('div');
                bar.id = 'loading-bar';
                bar.style.width = '0%';
                container.appendChild(bar);
            };

            var hideSplash = function () {
                var splash = document.getElementById('loadingscreen-wrapper');
                splash.parentElement.removeChild(splash);
            };

            var setProgress = function (value) {
                var bar = document.getElementById('loading-bar');
                if(bar) {
                    value = Math.min(1, Math.max(0, value));
                    bar.style.width = value * 100 + '%';
                }
            };

            var createCss = function () {            
                var css = [

                    '#loading-bar-background {',
                    '    position          : absolute;',
                    '    left              : 50%;',
                    '    height            : 22vh; ' ,
                    '    width             : 110vh;' ,
                    '    bottom            : 20vh; ' ,
                    '    margin-left       : -55vh;',   
                    '    background-image  : url(' + assetDir + 'splash/loadingbar_body.png);',
                    '    background-size   : contain;',   
                    '    background-repeat : no-repeat;', 
                    '}',

                    '#loading-bar-container {',
                    '   height        : 33%;',
                    '   margin-top    : 11vh;',
                    '   margin-left   : 4vh;',
                    '   margin-right  : 4vh;',
                    '}',

                    '#loading-bar {',
                    '    height     : 100%;',         
                    '    background : #f60;',
                    '    background-image  : url(' + assetDir + 'splash/loadingbar_fill.png);',
                    '    background-size   : contain;',   
                    '}',

                    '#cbbc-logo {',
                    '    position          : absolute;',
                    '    height            : 170px;',         
                    '    width             : 150px;',
                    '    right             : 20px;',
                    '    bottom            : 0px;',     
                    '    background        : url(' + assetDir + 'splash/cbbc_logo.png) no-repeat;',
                    '}',

                    '@media (max-width: 770px) {',
                    '    #cbbc-logo {',
                    '       position          : absolute;',
                    '       height            : 85px;',         
                    '       width             : 75px;',
                    '       right             : 20px;',
                    '       bottom            : 0px;',     
                    '       background-image  : url(' + assetDir + 'splash/cbbc_logo.png);',
                    '       background-size   : contain;',   
                    '       background-repeat : no-repeat;', 
                    '    }',
                    '}'
                ];

                if(checkLowMemoryMode()) {
                    css = css.concat([
                            '#loadingscreen-wrapper {',
                            '    position            : absolute;',
                            '    height              : 100vh;',
                            '    width               : 100vw;',     
                            '    background-position : center;',
                            '    background-repeat   : no-repeat;',
                            '    background-image    : url(' + assetDir + 'splash/background_splash_small.png);',
                            '    background-size     : cover;',    
                            '}'
                        ]);
                } else {
                    css = css.concat([
                            '#loadingscreen-wrapper {',
                            '    position            : absolute;',
                            '    height              : 100vh;',
                            '    width               : 100vw;',     
                            '    background-position : center;',
                            '    background-repeat   : no-repeat;',
                            '    background-image    : url(' + assetDir + 'splash/background_splash.png);',
                            '    background-size     : cover;',    
                            '}'
                        ]);
                }

                css = css.join("\n");

                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }

                document.head.appendChild(style);
            };

            createCss();

            showSplash();            

            app.on('preload:end', function () {            
                app.off('preload:progress');
            });
            app.on('preload:progress', setProgress);
            app.on('start', hideSplash);
        });
    };

    // ------------------------------------------------
    // FLIP TO HORIZONTAL PROMPT
    // ------------------------------------------------

    var createFlipToHorizontalPrompt = function(app, gmi) {       
        var assetDir = gmi.gameDir || './';
        var css      = [
            '.flip-overlay {',
            '    position         : absolute;',
            '    height           : 100vh;',
            '    width            : 100vw;',
            '    top              : 0px;',
            '    left             : 0px;',   
            '    right            : 0px;',   
            '    bottom           : 0px;',       
            '    background-color : black;',  
            '}',

            '.flip-image {',
            '    position   : absolute;',
            '    height     : 324px;',         
            '    width      : 424px;',   
            '    left       : 50%;',
            '    top        : 50%;',
            '    margin     : -162px 0 0 -212px;', 
            '    background : url(' + assetDir + 'splash/mobile_turnicon.png) no-repeat;',
            '}',

            '@media (max-width: 770px) {',
            '    .flip-image {',
            '        position        : absolute;',
            '        height          : 162px;',         
            '        width           : 212px;',   
            '        left            : 50%;',
            '        top             : 50%;',
            '        margin          : -81px 0 0 -106px;', 
            '        background      : url(' + assetDir + 'splash/mobile_turnicon.png) no-repeat;',
            '        background-size : 100%;',
            '    }',
            '}',
        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);

        var holderID = gmi.gameContainerId;
        var holder   = document.getElementById(holderID);

        var flipOverlay = document.createElement('div');
        flipOverlay.classList.add('flip-overlay');
        flipOverlay.style.display = 'none';

        var flipImage = document.createElement('div');
        flipImage.classList.add('flip-image');
        flipOverlay.appendChild(flipImage);

        if(holder) {
            holder.appendChild(flipOverlay);
        } else {
            document.body.appendChild(flipOverlay);
        }

        var displayFlipImage = function() {
            if(window.innerHeight < window.innerWidth) {
                flipOverlay.style.display = 'none';
            } else {
                flipOverlay.parentElement.appendChild(flipOverlay);
                flipOverlay.style.display = 'block';
            }
        };

        displayFlipImage();

        window.addEventListener('resize', displayFlipImage, false);
        window.addEventListener('orientationchange', displayFlipImage, false);
    };

    // ------------------------------------------------
    // CREATE CANVAS
    // ------------------------------------------------

    var createCanvas = function () {

        // create the game canvas 

        var assetDir = gmi.gameDir || './';
        var style    = document.createElement('link');
        style.setAttribute('type' , 'text/css');
        style.setAttribute('rel'  , 'stylesheet');
        style.setAttribute('href' ,  assetDir + 'css/styles.css');

        document.head.appendChild(style);

        canvas = document.createElement('canvas');
        canvas.setAttribute('id', CANVAS_ID);
        canvas.setAttribute('tabindex', 0);

        // create the UI layer

        var uiLayer = document.createElement('div');
        uiLayer.setAttribute('id', 'dm-ui-layer');
        uiLayer.setAttribute('tabindex', 0);

        if(pc.platform.ios) {
            uiLayer.style.pointerEvents = "none";
        }

        // disable I-bar cursor on click+drag

        canvas.onselectstart = function () { return false; };

        var gameHolder = document.getElementById('og-game-holder');

        if(brimElement) {
            gameHolder.insertBefore(canvas  , brimElement);
            gameHolder.insertBefore(uiLayer , brimElement);
        } else {
            gameHolder.appendChild(canvas);
            gameHolder.appendChild(uiLayer);
        }        

        return canvas;
    };

    var configureCss = function (fillMode, width, height) {
        // Configure resolution and resize event
        if (canvas.classList) {
            canvas.classList.add('fill-mode-' + fillMode);
        }

        // css media query for aspect ratio changes
        var css  = "@media screen and (min-aspect-ratio: " + width + "/" + height + ") {";
            css += "    #dm-game-canvas.fill-mode-KEEP_ASPECT {";
            css += "        width: auto;";
            css += "        height: 100vh;";
            css += "        margin: 0 auto;";
            css += "    }";
            css += "}";

        // append css to style
        if (document.head.querySelector) {
            document.head.querySelector('style').innerHTML += css;
        }
    };

    var reflow = function () {

        canvasHeight = window.innerHeight;
        canvasWidth  = window.innerWidth;

        if(checkLowMemoryMode()) {   

            canvas.height = canvasHeight * DOWNSIZE_FACTOR;
            canvas.width  = canvasWidth  * DOWNSIZE_FACTOR;

            var size = app.setCanvasResolution(pc.RESOLUTION_FIXED, canvas.width, canvas.height);
            canvas.style.width  = window.innerWidth  + 'px';
            canvas.style.height = window.innerHeight + 'px';

            var fillMode = app._fillMode;

            if (fillMode == pc.FILLMODE_NONE || fillMode == pc.FILLMODE_KEEP_ASPECT) {
                if ((fillMode == pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight) || (canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight)) {
                    canvas.style.marginTop = Math.floor((window.innerHeight - canvas.clientHeight) / 2) + 'px';
                } else {
                    canvas.style.marginTop = '';
                }
            }  
        } else {
            var size = app.resizeCanvas(canvas.width, canvas.height);
            canvas.style.width = '';
            canvas.style.height = '';

            var fillMode = app._fillMode;

            if (fillMode == pc.FILLMODE_NONE || fillMode == pc.FILLMODE_KEEP_ASPECT) {
                if ((fillMode == pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight) || (canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight)) {
                    canvas.style.marginTop = Math.floor((window.innerHeight - canvas.clientHeight) / 2) + 'px';
                } else {
                    canvas.style.marginTop = '';
                }
            }         
        }                
    };


    // ------------------------------------------------
    // CREATE INPUT DEVICES
    // ------------------------------------------------

    var createInputDevices = function (canvas) {
        var devices = {
            keyboard : new pc.Keyboard(window),
            mouse    : new pc.Mouse(canvas),
            gamepads : new pc.GamePads(),
        };
        
        if('ontouchstart' in window) {
            devices.touch = new pc.TouchDevice(canvas);
        }

        return devices;
    };        

    // ------------------------------------------------
    // SETUP PLAYCANVAS
    // ------------------------------------------------

    canvas  = createCanvas();
    devices = createInputDevices(canvas);

    try {
        app = new pc.Application(canvas, {
            keyboard              : devices.keyboard,
            mouse                 : devices.mouse,
            gamepads              : devices.gamepads,
            touch                 : devices.touch,
            graphicsDeviceOptions : window.CONTEXT_OPTIONS,
            assetPrefix           : ASSET_PREFIX  || "",
            scriptPrefix          : SCRIPT_PREFIX || "",
            scriptsOrder          : []
        });   
   
        createLoadingScreen(app, gmi);                        

        if(pc.platform.mobile) {      
            createFlipToHorizontalPrompt(app, gmi, CANVAS_ID);
        }
    } catch (e) {
        gmi.debug('Could not initialize application. Error: ' + e);
        return;
    }

    // ------------------------------------------------
    // CREATE AND RETURN GAME WRAPPER
    // ------------------------------------------------

    var gameWrapper = {
        init : function() {

            // configure the PlayCanvas app instance

            app.configure(CONFIG_FILENAME, function (err) {
                if (err) {
                    console.error(err);
                }                

                configureCss(app._fillMode, app._width, app._height);
                reflow();

                window.addEventListener('resize', reflow, false);
                window.addEventListener('orientationchange', reflow, false);

                app.preload(function (err) {
                    if (err) {
                        gmi.debug(err);
                    }

                    app.loadScene(SCENE_PATH, function (err, scene) {
                        canvas.style["background-color"] = "black";

                        if (err) {
                            gmi.debug(err);
                            gmi.sendStatsEvent('game_loaded', false);
                        } else {
                            gmi.gameLoaded();
                            gmi.sendStatsEvent('game_loaded', true);

                            DM2.gmi    = gmi;
                            DM2.LOWMEM = checkLowMemoryMode();

                            startHeartbeat();
                            app.start();                              
                        }                   
                    });
                });
            });
        }
    }

    return gameWrapper;
});