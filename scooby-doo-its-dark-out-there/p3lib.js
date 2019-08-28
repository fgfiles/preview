(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var MovieClip       = require("./display/MovieClip");
var ParticleSystem  = require("./display/particles/ParticleSystem");
var Timer           = require("./utils/Timer");

//===================================================
// CONSTRUCTOR
//===================================================

var Animator = function() {
    /**
     * @type {Array.<ParticleSystem>}
     * @private
     */
    this._particleSystems = null;

    /**
     * @type {Array.<MovieClip>}
     * @private
     */
    this._movieClips = null;

    /**
     * @type {Array.<Timer>}
     * @private
     */
    this._timers = null;

    /**
     * @type {Array.<TweenMax>}
     * @private
     */
    this._tweens = null;

    /**
     * @type {Boolean}
     * @private
     */
    this._paused = false;
};
module.exports = Animator;

//===================================================
// VARS
//===================================================

var p = Animator.prototype;

/**
 * @type {String}
 * @const
 */
Animator.VERSION = "1.0.0";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
p.init = function() {
    this._movieClips = [];
    this._particleSystems = [];
    this._tweens = [];
    this._timers = [];
    this._paused = false;
};

/**
 */
p.update = function() {
    if (this._paused) return;
    this._updateParticleSystems();
    this._updateTimers();
};

/**
 * @param {!ParticleSystem | !MovieClip | !TweenMax | !Timer} a
 */
p.add = function(a) {
    if (a instanceof ParticleSystem) {
        if (this._particleSystems.indexOf(a) == -1) {
            this._particleSystems.push(a);
        } else {
            throw new Error("'ParticleSystem' already added!");
        }
    } else if (a instanceof MovieClip) {
        if (this._movieClips.indexOf(a) == -1) {
            this._movieClips.push(a);
        } else {
            throw new Error("'MovieClip' already added!");
        }
    } else if (a instanceof TweenMax) {
        if (this._tweens.indexOf(a) == -1) {
            this._tweens.push(a);
        } else {
            throw new Error("'Tween' already added!");
        }
    } else if (a instanceof Timer) {
        if (this._timers.indexOf(a) == -1) {
            this._timers.push(a);
        } else {
            throw new Error("'Timer' already added!");
        }
    }
};

/**
 * @param {!ParticleSystem | !MovieClip | !TweenMax | !Timer} a
 */
p.remove = function(a) {
    var index;
    if (a instanceof ParticleSystem) {
        index = this._particleSystems.indexOf(a);
        if (index != -1) {
            if (a.__updateTransform) {
                a.updateTransform = a.__updateTransform;
                a.__updateTransform = null;
            }
            this._particleSystems.splice(index, 1);
        } else {
            throw new Error("'ParticleSystem' is not added!");
        }
    } else if (a instanceof MovieClip) {
        index = this._movieClips.indexOf(a);
        if (index != -1) {
            if (a.__updateTransform) {
                a.updateTransform = a.__updateTransform;
                a.__updateTransform = null;
            }
            this._movieClips.splice(index, 1);
        } else {
            throw new Error("'MovieClip' is not added!");
        }
    } else if (a instanceof TweenMax && this._tweens.indexOf(a) != -1) {
        index = this._tweens.indexOf(a);
        if (index != -1) {
            this._tweens.splice(index, 1);
        } else {
            throw new Error("'Tween' is not added!");
        }
    } else if (a instanceof Timer && this._timers.indexOf(a) != -1) {
        index = this._timers.indexOf(a);
        if (index != -1) {
            this._timers.splice(index, 1);
        } else {
            throw new Error("'Timer' is not added!");
        }
    }
};

/**
 * @param {Boolean=} particleSystems
 * @param {Boolean=} movieClips
 * @param {Boolean=} tweens
 * @param {Boolean=} timers
 */
p.removeAll = function(particleSystems, movieClips, tweens, timers) {
    particleSystems = (typeof particleSystems == "boolean" ? particleSystems : true);
    movieClips = (typeof movieClips == "boolean" ? movieClips : true);
    tweens = (typeof tweens == "boolean" ? tweens : true);
    timers = (typeof timers == "boolean" ? timers : true);

    if (particleSystems) {
        this._particleSystems.length = 0;
    }
    if (movieClips) {
        this._movieClips.length = 0;
    }
    if (tweens) {
        this._tweens.length = 0;
    }
    if (timers) {
        this._timers.length = 0;
    }
};

/**
 * @param {!Function} callback
 * @param {!Number} delay
 * @param {*=} scope
 */
p.setTimeout = function(callback, delay, scope) {
    scope = scope || window;
    var timer = new p3.Timer(delay, 1);
    timer.signalTimerCompleted.addOnce(function() {
        callback.call(scope);
        this.remove(timer);
    }, this);
    this.add(timer);
};

/**
 * @param {!Array.<PIXI.Texture>} textures
 * @param {!Object} config
 * @returns {*}
 */
p.getEmitter = function(textures, config) {
    var emitter = new p3.ParticleSystem(textures, config);
    this.add(emitter);
    return emitter;
};

/**
 * @param {!Number} delay
 * @param {!Number} repeatCount
 * @returns {*}
 */
p.getTimer = function(delay, repeatCount) {
    var timer = new p3.Timer(delay, repeatCount);
    this.add(timer);
    return timer;
};

//===================================================
// PRIVATE METHODS
//===================================================

p._playMovieClips = function() {
    var mc;
    var count = this._movieClips.length;
    for (var i = 0; i < count; ++ i) {
        mc = this._movieClips[i];
        if (mc.__updateTransform) {
            mc.updateTransform = mc.__updateTransform;
            mc.__updateTransform = null;
        }
    }
};

p._pauseMoveClips = function() {
    var mc;
    var count = this._movieClips.length;
    for (var i = 0; i < count; ++ i) {
        mc = this._movieClips[i];
        if (!mc.__updateTransform) {
            mc.__updateTransform = mc.updateTransform;
            mc.updateTransform = function() {
                p3.MovieClip.superClass_.updateTransform.call(this);
            }
        }
    }
};

p._playTweens = function() {
    var tween;
    var count = this._tweens.length;
    for (var i = 0; i < count; ++ i) {
        tween = this._tweens[i];
        tween.resume();
    }
};

p._pauseTweens = function() {
    var tween;
    var count = this._tweens.length;
    for (var i = 0; i < count; ++ i) {
        tween = this._tweens[i];
        tween.pause();
    }
};

p._updateParticleSystems = function() {
    var emitter;
    var count = this._particleSystems.length;
    for (var i = count - 1; i >= 0; -- i) {
        emitter = this._particleSystems[i];
        emitter.update();
    }
};

p._updateTimers = function() {
    var timer;
    var count = this._timers.length;
    for (var i = count - 1; i >= 0; -- i) {
        timer = this._timers[i];
        timer.update();
    }
};

//===================================================
// GETTERS & SETTERS
//===================================================

Object.defineProperty(Animator.prototype, "paused", {
    /**
     * @returns {Boolean}
     */
    get: function() {
        return this._paused;
    },
    /**
     * @param {!Boolean} value
     */
    set: function(value) {
        this._paused = value;
        if (!this._paused) {
            this._playMovieClips();
            this._playTweens();
        } else {
            this._pauseMoveClips();
            this._pauseTweens();
        }
    }
});

//===================================================



},{"./display/MovieClip":9,"./display/particles/ParticleSystem":13,"./utils/Timer":47}],2:[function(require,module,exports){
/**
 * User: Adam
 * Date: 12/09/13
 *
 * Usage:
 * AssetManager.DEBUG = true;
 * AssetManager.instance.addFiles( filesArray, path );
 * AssetManager.instance.addEventListener( AssetManager.EVENT_PROGRESS, this._onLoadProgress.bind( this )  );
 * AssetManager.instance.addEventListener( AssetManager.EVENT_FILELOAD, this._onLoadFileLoaded.bind( this ) );
 * AssetManager.instance.load();
 *
 * ----------------------------------------
 * Change Log:
 * ----------------------------------------
 *
 */

var FontAtlas   = require( "./text/FontAtlas" );
var Utils       = require( "./utils/Utils" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * AssetManager
 * @class
 * @constructor
 */
var AssetManager = function () {
	if ( !AssetManager.__allowInstance ) {
		throw new Error( "AssetManager is a Singleton, use 'instance'." );
	}

	/**
	 * @type {signals.Signal}
	 * */
	this.signalCompleted = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 * */
	this.signalProgress = new signals.Signal();

	/**
	 * @type {number}
	 * */
	this.progress = 0.0;

	/**
	 * @type {{}}
	 */
	this.resources = {};

	/**
	 * @private
	 * @type { Object }
	 * */
	this.fontAtlases = {};

	/**
	 * @private
	 * @type {PIXI.loaders.loader}
	 * */
	this._pixiAssetLoader = null;

	/**
	 * @private
	 * @type {Array}
	 * */
	this._manifest = [];

	/**
	 * @type {number}
	 * @private
	 */
	this._scaleFactor = 1.0;

	/**
	 * @type {number}
	 */
	this._completeDelay = 0.0;
};
AssetManager.prototype.constructor = AssetManager;
module.exports = AssetManager;

/**
 * Returns and instance of the AssetManager.
 * @type {AssetManager}
 * @memberOf! AssetManager
 * @returns {AssetManager}
 */
Object.defineProperty( AssetManager, "instance", {
	/**
	 * @type {AssetManager}
	 * */
	get : function () {
		if ( !AssetManager.__instance ) {
			AssetManager.__allowInstance    = true;
			AssetManager.__instance         = new AssetManager();
			AssetManager.__allowInstance    = false;
		}
		return AssetManager.__instance;
	}
} );

/**
 * This is the instance of the AssetManager.
 * @type {AssetManager}
 * @private
 */
AssetManager.__instance = null;

/**
 * @type {boolean}
 * @private
 */
AssetManager.__allowInstance = false;

//===================================================
// VARS
//===================================================

var p = AssetManager.prototype;

/**
 * @const
 * @type {string}
 * */
AssetManager.VERSION = '02.00.00';

/**
 * @type {boolean}
 * */
AssetManager.DEBUG = false;

/**
 * This is just the string of the event name pixi uses. Saved for easy reference.
 * @const
 * @type {string}
 * */
AssetManager.EVENT_ON_COMPLETE = 'onComplete';

/**
 * This is just the string of the event name pixi uses. Saved for easy reference.
 * @const
 * @type {string}
 * */
AssetManager.EVENT_ON_PROGRESS = 'onProgress';

/**
 * @const
 * @type {string}
 * */
AssetManager.FILETYPE_PNG = '.png';

/**
 * @const
 * @type {string}
 * */
AssetManager.FILETYPE_JPG = '.jpg';

/**
 * @const
 * @type {string}
 * */
AssetManager._IMAGE = "_image";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Loads files.
 * @param {!Array} array - string urls of the files.
 * @param {string=} path - path to the files.
 */
p.addFiles = function ( array, path ) {
	path = path || '';

	// prefix the files with the path
	if ( path != null && path.length > 0 ) {
		var len = array.length;
		for ( var i = 0; i < len; i++ ) {
			var url = array[ i ][ "url" ];
			array[ i ][ "url" ] = path + url;
		}
	}

	this._manifest = this._manifest.concat( array );
	return this._manifest;
};

/**
 * Loads the assets using the PIXI.AssetLoader.
 * @param {number=} completeDelay - an optional delay that is added before the complete signal is fired.
 */
p.load = function ( completeDelay ) {
	this._completeDelay = completeDelay || 0.0;

	if( !this._manifest || this._manifest.length === 0 ) {
		throw Error( '[AssetManager.load] - The manifest is either null or it is empty. Make sure you have added files via "addFiles()" before calling "load()".' );
	}

	this.progress = 0.0;

	if( !this._pixiAssetLoader ) {
		this._pixiAssetLoader = new PIXI.loaders.Loader();
		this._pixiAssetLoader.on( "progress",   this._onProgress, this );
		this._pixiAssetLoader.on( "complete",   this._onComplete, this );
		this._pixiAssetLoader.on( "error",      this._onError, this );
	}

	this._pixiAssetLoader.add( this._manifest );
	this._pixiAssetLoader.load();

	return this._manifest;
};

/**
 * Returns a texure from an atlas or an individual image.
 * @param {!string} fileName
 * @param {string=} opt_extension
 * @returns {PIXI.Texture}
 */
p.getTexture = function ( fileName, opt_extension ) {
	opt_extension = opt_extension || AssetManager.FILETYPE_PNG;

	try {
		// first check if it is part of an atlas. 99% of the time.
		var texture = PIXI.Texture.fromFrame( fileName + opt_extension );
	} catch ( e ) {
		if( this.resources[ fileName ] ) {
			texture = this.resources[ fileName ]["texture"];
		} else {
			throw Error( '[AssetManager.getTexture] - Texture does not exist: "' + fileName + '". Are you tring to get a texture from an Atlas? If so use "getSprite()".' );
		}
	}
	//texture.baseTexture.resolution = this._scaleFactor;
    //texture.baseTexture.update();
	return texture;
};

/**
 * Returns a PIXI sprite.
 * @param {!String} fileName
 * @param {boolean=} centered - if the texture is centered.
 * @param {string=} opt_extension
 * @returns {PIXI.Sprite}
 * NOTE: If you are having trouble loading an image, make sure you are loading it via the AssetManager
 * in the first place. If not then you will have to retrieve the image with its full path name.
 */
p.getSprite = function ( fileName, centered, opt_extension ) {
	var texture = this.getTexture( fileName, opt_extension );
	var sprite = new PIXI.Sprite( texture );
	if ( centered ) {
		sprite.anchor.x = 0.5;
		sprite.anchor.y = 0.5;
	}
	return sprite;
};

/**
 * Returns a JSON ObjectPIXI sprite.
 * @param {!String} fileName
 * @param {Boolean=} clone
 * @returns {JSON}
 */
p.getJSON = function ( fileName, clone ) {
	var jsonData = (clone ? p3.Utils.cloneObject( this.resources[ fileName ][ "data" ] ) : this.resources[ fileName ][ "data" ] );
	if ( !jsonData ) {
		throw Error( '[AssetManager.getJSON] - Json does not exist: "' + fileName + '".' );
	}
	return jsonData;
};

/**
 * @param {!String} fileName
 * @returns {FontAtlas}
 */
p.getFontAtlas = function ( fileName ) {
	var atlas = this.fontAtlases[ fileName ];
	if ( !atlas ) {
		throw new Error( '[AssetManager.getJSON] - FontAtlas does not exist: "' + fileName + '".' );
	}
	return atlas;
};

/**
 * Resets all the variables.
 */
p.reset = function () {
	this.progress = 0;
	this._manifest = [];
	if ( this._pixiAssetLoader != null ) {
		this._pixiAssetLoader.reset();
	}
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * Checks if the resource is a fontatlas and if so loads its image.
 * @param {{}} resource
 * @private
 */
p._checkForFontAtlas = function ( resource ) {
	// if the resource is a font atlas, load in the font atlas image.
	if( resource["data"]["font"] ) {
		// found a font atlas => add its image to the list.
		var fontData = resource["data"]["font"];

		var fileName = fontData[ "pages" ][ "page"]["file"];
		//var fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf("."));
		var fileNameWithoutExtension = fileName.match( /([^\/]+)(?=\.\w+$)/igm );

		var path = resource[ "url" ];
		path= path.substring(0, path.lastIndexOf("/"));

		var url = path + "/" + fileName;
		this._pixiAssetLoader.add( { name: fileNameWithoutExtension + AssetManager._IMAGE, url : url } );
	}
};

/**
 * Builds the font atlas.
 * THIS COULD BE OPTIMIZED IF THE FONTS ARE CACHED LOCALLY THEN THE SEARCH ONLY TAKES PLACE ON THEM.
 * @private
 */
p._buildFontAtlases = function () {
	for (var key in this.resources ) {
		if ( this.resources.hasOwnProperty( key ) ) {
			var resource = this.resources[ key ];
			if( resource[ "data" ][ "font" ] ) {
				// found a font atlas.
				var url = resource[ "url" ];
				var fileNameWithoutExtension = url.match( /([^\/]+)(?=\.\w+$)/igm );

				//var texture = this.getTexture( key + AssetManager._IMAGE );
				var texture = this.getTexture( fileNameWithoutExtension + AssetManager._IMAGE );
				this.fontAtlases[ key ] = new FontAtlas( key, resource[ "data" ], texture );
				/*
				// now loop over all resources looking for the matching image.
				for (var key2 in this.resources ) {
					if ( this.resources.hasOwnProperty( key2 ) ) {
						var resource2 = this.resources[ key2 ];

						if( resource2[ "data" ][ "localName" ] == "img") {
							console.log("found image with same name" );

							var fontAtlas = new FontAtlas( key, resource, resource2 );
							break;
						}

						console.log("-");

					}
				}
				*/
			}
		}
	}
};

//===================================================
// EVENTS
//===================================================

/**
 * Called from the Loader when a File has loaded.
 * @param {*} loader
 * @param {*} resource
 */
p._onProgress = function ( loader, resource ) {
	this.progress = loader[ "progress" ];

	// check for font atlas.
	this._checkForFontAtlas( resource );

	// dispatch the same event.
	this.signalProgress.dispatch( loader, this.progress );
};

/**
 * Called when the loader has completed.
 * @param {*} loader
 * @param {*} resources
 * @private
 */
p._onComplete = function ( loader,resources ) {
    // add the resources.
    for (var key in resources) {
        if (!this.resources[key]) {
            this.resources[key] = resources[key];
        }
    }

	// build any font atlases.
	this._buildFontAtlases();

	// dispatch the complete with a bit of a delay for good luck.
	var that = this;
	setTimeout( function() {
		that.reset();
		that.signalCompleted.dispatch();
	}, this._completeDelay * 1000 );

};

/**
 * Called when the loader has completed.
 * @param {*} loader
 * @param {*} resource
 * @private
 */
p._onError = function ( loader, resource ) {
	console.log( "[AssetManager] There was an error", loader, resource );
};

//===================================================
// GETTERS / SETTERS
//===================================================

Object.defineProperty( AssetManager.prototype, 'scaleFactor', {
	/** @type {number} */
	get : function () {
		return this._scaleFactor;
	},
	/** @returns {number} */
	set : function ( value ) {
		this._scaleFactor = value;
	}
} );

Object.defineProperty( AssetManager.prototype, 'scaleFactorInverse', {
	/** @returns {number} */
	get : function () {
		return 1 / this._scaleFactor;
	}
} );

Object.defineProperty( AssetManager.prototype, 'pixiLoader', {
	/** @type {PIXI.loaders.loader} */
	get : function () {
		return this._pixiAssetLoader;
	}
} );

Object.defineProperty( AssetManager.prototype, 'manifest', {
	/** @type {Array} */
	get : function () {
		return this._manifest;
	}
} );
},{"./text/FontAtlas":40,"./utils/Utils":48}],3:[function(require,module,exports){
 /**
 * User: Adam
 *
 * YOU MUST INCLUDE THE FOLLOWING META DATA IN THE HEAD OF THE HTML PAGE THAT HOLDS THE GAME:
 *
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
 <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
 <meta content="utf-8" http-equiv="encoding">

 <!-- This is to enable fullscreen when you save the page as a bookmark to the phone desktop. -->
 <meta name="apple-mobile-web-app-capable" content="yes">
 <meta name="mobile-web-app-capable" content="yes">

 */
var Device = require( "./utils/Device");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Canvas
 * @class
 * @constructor
 * @param {!CanvasParams} canvasParams
 */
var Canvas = function ( canvasParams ) {

	/**
	 * @type {CanvasParams}
	 */
	this.params = canvasParams;

	/**
	 * @type {signals.Signal}
	 */
	this.signalReady = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalChange = new signals.Signal();

	/**
	 * @type {Document.window}
	 */
	this.window = window = window.self;

	/**
	 * @type {HTMLElement}
	 */
	this.imageOverlay = null;

	/**
	 * @type {HTMLElement}
	 */
	this.backgroundImage = null;

	/**
	 * @type {number}
	 */
	this.width = 0;

	/**
	 * @type {number}
	 */
	this.height = 0;

	/**
	 * The orientation of the device.
	 * @type {string}
	 */
	this.orientation = '';

    /**
     * @type {boolean}
     * @private
     */
    this._isReadyDone = false;

	/**
	 * The desired orientation of the device.
	 * @type {string}
	 * @private
	 */
	this._targetOrientation = '';

	/**
	 * @type {HTMLElement}
	 */
	this.holderElement = null;

	/**
	 * @type {HTMLCanvasElement}
	 */
	this.canvasElement = null;

	/**
	 * @type {boolean}
	 */
	this.autoResize = true;

	if( !Device.isReady ) {
		console.log( "[Canvas] auto initing the Device script.");
		Device.init( window[ "bowser" ] );
	}

	/**
	 * @type {boolean}
	 */
	this.isAndroidStockBrowser = Device.isAndroidStockBrowser;

	Canvas.params = this.params;
	Canvas.center = new PIXI.Point();

	this._initHolder();
	this._initCanvas();
	this._initImageOverlay();

	if ( this.params.width > this.params.height ) {
		this._targetOrientation = Canvas.LANDSCAPE;
	} else {
		this._targetOrientation = Canvas.PORTRAIT;
	}

	// if stock android, add a background image.
	if ( this.params.forceLetterbox || ( Device.isAndroidStockBrowser && Canvas.params.stockAndroidLetterbox) ) {
		this._initBackgroundImage();
	}

    this._disableUnwantedInteractions();
};
module.exports = Canvas;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 */
Canvas.LANDSCAPE = 'landscape';
/**
 * @const
 * @type {string}
 */
Canvas.PORTRAIT = 'portrait';
/**
 * @const
 * @type {string}
 */
Canvas.DEFAULT_HOLDER_ID = 'P3GameHolder';
/**
 * @const
 * @type {string}
 */
Canvas.DEFAULT_CANVAS_ID = 'P3GameCanvas';

/**
 * @const
 * @type {string}
 */
Canvas.DEFAULT_IMAGE_OVERLAY_ID = 'P3ImageOverlay';

/**
 * @const
 * @type {string}
 */
Canvas.DEFAULT_BACKGROUND_IMAGE_ID = 'P3BackgroundImage';

/**
 * @static
 * @type {HTMLCanvasElement}
 */
Canvas.canvasElement = null;

/**
 * @static
 * @type {HTMLElement}
 */
Canvas.holderElement = null;

/**
 * @static
 * @type {number}
 */
Canvas.width = 0;

/**
 * @static
 * @type {number}
 */
Canvas.height = 0;

/**
 * @static
 * @type {PIXI.Point}
 */
Canvas.center = null;

/**
 * @static
 * @type {{left: number, right:number, top:number, bottom:number}}
 */
Canvas.borders = { 'left' : 50, 'right' : 50, 'top' : 50, 'bottom' : 80 };

/**
 * @static
 * @type {PIXI.Container}
 */
Canvas.stage = null;

/**
 * @static
 * @type {{}}
 */
Canvas.renderer = null;

/**
 * @static
 * @type {CanvasParams}
 */
Canvas.params = null;

var p = Canvas.prototype;

//===================================================
// STATIC METHODS
//===================================================


//===================================================
// PUBLIC METHODS
//===================================================

/**
 * This fires resize a few times. Not sure if it needs too but best to be safe.
 * @param {boolean?} disableAutoresize - if enable the game will not be autoresized.
 */
p.init = function ( disableAutoresize ) {
	if ( !disableAutoresize ) {
		this.window.addEventListener( 'resize', this._onResizeEvent.bind( this ), false );
		this.window.addEventListener( 'scroll', this._onScroll.bind( this ), false );

		var isCorrectOrientation = this._checkOrientation();
		this._toggleRotateImage( !isCorrectOrientation );

		if ( isCorrectOrientation ) {
            this._checkOrientationAndThenResize();
		}
	} else {
		this.holderElement.style.width = this.params.width + 'px';
		this.holderElement.style.height = this.params.height + 'px';

		Canvas.width = this.width = this.params.width;
		Canvas.height = this.height = this.params.height;

		this.signalReady.dispatch();
		this.signalChange.dispatch( true );
	}
};

/**
 * Updates the global sizes.
 * @param {number} width
 * @param {number} height
 */
p.updateSize = function ( width, height ) {
	Canvas.width = this.width = Math.floor( width );
	Canvas.height = this.height = Math.floor( height );

	Canvas.center.x = Math.floor( Canvas.width * 0.5 );
	Canvas.center.y = Math.floor( Canvas.height * 0.5 );
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * Sets the size of the holderElement.
 * @private
 */
p._initHolder = function () {
	// create a new canvas element if it does not exist.
	if ( this.params.holderID ) {
		this.holderElement = document.getElementById( this.params.holderID );
	} else {
        if ( document.getElementById( Canvas.DEFAULT_HOLDER_ID ) ) {
            console.warn( "[p3.Canvas] You have not set a 'HolderId' and there is already one on the page with the DEFAULT_ID, attempting to use it. " + Canvas.DEFAULT_HOLDER_ID );
        }

		this.holderElement = document.createElement( 'div' );
		this.holderElement.id = Canvas.DEFAULT_HOLDER_ID;
		document.body.appendChild( this.holderElement );
	}

	this.holderElement.style.left = 0;
	this.holderElement.style.top = 0;
	this.holderElement.style.overflow = 'visible';
	this.holderElement.style.position = 'absolute';
	this.holderElement.style.width = this.window.innerWidth + 'px';
	this.holderElement.style.height = this.window.innerHeight + 'px';

	Canvas.holderElement = this.holderElement;
};

/**
 * Creates the canvas.
 * @private
 */
p._initCanvas = function () {
	// create a new canvas element if it does not exist.
	if ( this.params.canvasID ) {
		this.canvasElement = document.getElementById( this.params.canvasID );
	} else {
	    // check if canvasID is already in use.
        if ( document.getElementById( Canvas.DEFAULT_HOLDER_ID ) ) {
            console.warn( "[p3.Canvas] You have not set a 'CanvasID' and there is already a canvas with on the page with the DEFAULT_ID, attempting to use it. " + Canvas.DEFAULT_CANVAS_ID );
        }

		this.canvasElement = document.createElement( 'canvas' );
		this.canvasElement.id = Canvas.DEFAULT_CANVAS_ID;
	}

	// make the canvas fill the holder div.
	this.canvasElement.style.position = 'absolute';

	this.canvasElement.style.left = '0';
	this.canvasElement.style.top = '0';
	this.canvasElement.style.bottom = '0';
	this.canvasElement.style.right = '0';

	this.canvasElement.style.width = '100%';
	this.canvasElement.style.height = '100%';

	if ( this.params.forceLetterbox || ( Device.isAndroidStockBrowser && Canvas.params.stockAndroidLetterbox ) ) {
		this.canvasElement.style.margin = 'auto'; // need this to center the canvas
		this.canvasElement.style.width = 'auto';
	}

	this.canvasElement.style.overflow = 'visible';
	this.canvasElement.style.display = 'block';

	this.holderElement.appendChild( this.canvasElement );

	this.window.focus();
	this.canvasElement.tabIndex = 1;

	Canvas.canvasElement = this.canvasElement;
};

/**
 * Creates the div and image for the rotate screen.
 * @private
 */
p._initImageOverlay = function () {
	if ( document.getElementById( Canvas.DEFAULT_IMAGE_OVERLAY_ID ) ) {
		throw Error( '[Canvas] There is already a div with that id on the page, are you using it? : ' + Canvas.DEFAULT_IMAGE_OVERLAY_ID );
	}

	this.imageOverlay = document.createElement( 'div' );
	this.imageOverlay.id = Canvas.DEFAULT_IMAGE_OVERLAY_ID;

	this.imageOverlay.style.left = '0';
	this.imageOverlay.style.top = '0';
	this.imageOverlay.style.width = 'auto';//'100%';
	this.imageOverlay.style.height = '100%';
	this.imageOverlay.style.marginLeft = 'auto';
	this.imageOverlay.style.marginRight = 'auto';
	this.imageOverlay.style.overflow = 'visible';
	this.imageOverlay.style.display = 'none';

	// add the image as a background.
	this.imageOverlay.style.backgroundColor = this.params.rotateImageBackgroundColor;
	this.imageOverlay.style.backgroundImage = 'url(' + this.params.rotateImageSrc + ')';
	this.imageOverlay.style.backgroundPosition = '50% 50%';
	this.imageOverlay.style.backgroundRepeat = 'no-repeat';
	this.imageOverlay.style.backgroundSize = 'contain';//auto|length|cover|contain|initial|inherit;

	this.holderElement.appendChild( this.imageOverlay );
};

/**
 * Creates a background image if specified.
 * @private
 */
p._initBackgroundImage = function () {
	if ( document.getElementById( Canvas.DEFAULT_BACKGROUND_IMAGE_ID ) ) {
		throw Error( '[Canvas] There is already a div with that id on the page, are you using it? : ' + Canvas.DEFAULT_BACKGROUND_IMAGE_ID );
	}

	this.backgroundImage = document.createElement( 'div' );
	this.backgroundImage.id = Canvas.DEFAULT_BACKGROUND_IMAGE_ID;

	this.backgroundImage.style.left = '0';
	this.backgroundImage.style.top = '0';
	this.backgroundImage.style.height = '100%';
	this.backgroundImage.style.width = 'auto';
	this.backgroundImage.style.overflow = 'visible';
	this.backgroundImage.style.display = 'block';

	// add the image as a background.
	this.backgroundImage.style.backgroundImage = 'url(' + this.params.backgroundImageSrc + ')';
	this.backgroundImage.style.backgroundPosition = '50% 50%';
	this.backgroundImage.style.backgroundRepeat = 'no-repeat';
	this.backgroundImage.style.backgroundSize = 'auto 100%';
	//this.backgroundImage.style.backgroundSize = 'cover';//auto|length|cover|contain|initial|inherit;

	this.holderElement.appendChild( this.backgroundImage );
};

/**
 * Checks if the screen ratio (width vs height) matches the canvas ratio and therefore if it is correct or not.
 * @returns {boolean} If the screen is in the correct rotation.
 * @private
 */
p._checkOrientation = function () {
	if ( this.window.innerWidth > this.window.innerHeight ) {
		this.orientation = Canvas.LANDSCAPE;
	} else {
		this.orientation = Canvas.PORTRAIT;
	}
	return this.orientation === this._targetOrientation;
};

/**
 * Resizes the canvas and the holding div based upon the screen ratios and sizes.
 * @private
 */
p._resize = function () {
    // this scroll is used in IOS 8.0+ to move the game down when the user clicks to show the scrollbar.
    window.scrollTo( 0, 0 );

	if ( this.params.forceLetterbox || ( Device.isAndroidStockBrowser && Canvas.params.stockAndroidLetterbox ) ) {
		Canvas.width = this.width = this.params.width;
		Canvas.height = this.height = this.params.height;
	} else {

		var ratioW = this.window.innerWidth / this.params.width;
		var ratioWInverse = this.params.width / this.window.innerWidth;

		var ratioH = this.window.innerHeight / this.params.height;
		var ratioHInverse = this.params.height / this.window.innerHeight;

		var newWidth = this.params.width;
		var newHeight = this.params.height;

		if ( this.params.width >= this.params.height ) {
			newWidth = Math.floor( (this.params.width * ratioW) * ratioHInverse );
			newHeight = this.params.height;
		} else {
			newWidth = this.params.width;
			newHeight = Math.floor( (this.params.height * ratioH ) * ratioWInverse );
		}

		Canvas.width = this.width = this.canvasElement.width = newWidth;
		Canvas.height = this.height = this.canvasElement.height = newHeight;
	}

	this.updateSize( Canvas.width, Canvas.height );
};
/**
 * Shows or hides the rotate image by adjusting its z-index and display style.
 * @param {!boolean} show
 * @private
 */
p._toggleRotateImage = function ( show ) {
	if ( show ) {
		this.imageOverlay.style.display = 'block';
		this.canvasElement.style.display = 'none';
	} else {
		this.canvasElement.style.display = 'block';
		this.imageOverlay.style.display = 'none';
	}
};

/**
 * Perform the resize.
 * @private
 */
p._checkOrientationAndThenResize = function () {
	if ( !Device.isIframe ) {
		this.holderElement.style.width = this.window.innerWidth + 'px';
		this.holderElement.style.height = this.window.innerHeight + 'px';
	} else {
		this.holderElement.style.width = "100%";
		this.holderElement.style.height = "100%";
	}

	var isCorrectOrientation = this._checkOrientation();
	this._toggleRotateImage( !isCorrectOrientation );

	if ( isCorrectOrientation ) {
		this._resize();

		if ( !this._isReadyDone ) {
			this._isReadyDone = true;
            this.signalReady.dispatch();
		}
	}

    if( this._isReadyDone ) {
        this.signalChange.dispatch( isCorrectOrientation );
    }
};

/**
 * Disables the double click issue on samsung devices.
 * @private
 */
p._disableUnwantedInteractions = function () {
	// prevent dragging the ui
	window.addEventListener( 'touchmove', function ( e ) {
		e.preventDefault();
		return false;
	} );

	// prevent dragging the ui
	window.addEventListener( 'touchstart', function ( e ) {
		e.preventDefault();
		return false;
	} );

	// prevent dragging the ui
	window.addEventListener( 'touchend', function ( e ) {
		e.preventDefault();
		return false;
	} );

	if ( Device.isAndroidStockBrowser ) {
		Canvas.canvasElement.addEventListener( 'mousedown', function ( e ) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
		}, false );

		Canvas.canvasElement.addEventListener( 'mouseup', function ( e ) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
		}, false );

		Canvas.canvasElement.addEventListener( 'click', function ( e ) {
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
		}, false );
	}
};


//===================================================
// EVENTS
//===================================================

 /**
  * Called when the page is scrolled. TODO: I dont think we need this anymore.
  * @private
  */
 p._onScroll = function () {
     var that = this;

     //console.log("[Canvas ScrollEvent]");
     //
     //setTimeout( function () {
     //that._checkOrientationAndThenResize();
     //}, 10 );
 };

 /**
  * Called when the devices updates it's screen size.
  * @private
  */
 p._onResizeEvent = function () {
     var that = this;

     // If you are looking here because the resizing is not working correctly, make sure you have included
     // the META data mentioned at the top of this class. If you have then maybe the meta data has changed.

     that._checkOrientationAndThenResize();

     // this second call is used because some phones are two slow to update and don't get the correct size in time.
     //setTimeout( function () {
     //    that._checkOrientationAndThenResize();
     //}, 10 );
 };

//===================================================
// GETTERS/SETTERS
//===================================================

//======================================================================================================
//======================================================================================================
//======================================================================================================

/**
 * @class
 * @constructor
 */
Canvas.Params = function () {

	/**
	 * @type {number}
	 */
	this.width = 0;

	/**
	 * @type {number}
	 */
	this.height = 0;

	/**
	 * @type {string}
	 */
	this.holderID = '';

	/**
	 * @type {string}
	 */
	this.canvasID = '';

	/**
	 * @type {string}
	 */
	this.rotateImageSrc = '';

	/**
	 * @type {string} in hash format e.g. #FF00FF
	 */
	this.rotateImageBackgroundColor = '#FFFFFF';

	/**
	 * @type {string}
	 */
	this.backgroundImageSrc = '';

	/**
	 * @type {boolean}
	 */
	this.forceCanvasMode = false;

	/**
	 * @type {boolean}
	 */
	this.forceLetterbox = false;

	/**
	 * @type {boolean}
	 */
	this.stockAndroidCanvasMode = true;

	/**
	 * @type {boolean}
	 */
	this.stockAndroidLetterbox = false;
};





},{"./utils/Device":45}],4:[function(require,module,exports){
/**
 *  Timestep.js
 *
 *  Created by Legman on 24/04/2015.
 *
 */

/**
 * @param {Number=} frameInterval
 * @constructor
 */
var Timestep = function(frameInterval) {
	/**
	 * @type {Number}
	 */
	this.maxElapsedMS = 100.0;

	/**
	 * @type {Number}
	 * @private
	 */
	this._frame = 0;

	/**
	 * @type {Number}
	 * @private
	 */
	this._frameInterval = frameInterval || 1;

	/**
	 * @type {Number}
	 * @private
	 */
	this._lastTime = Timestep.timeInSeconds;
};
module.exports = Timestep;

/**
 * @type {Number}
 * @static
 * @const
 */
Timestep.VERSION = "2.0.0";

/**
 * @type {Number}
 * @static
 */
Timestep.deltaTime = 1.0;

/**
 * @type {Number}
 * @static
 */
Timestep.speed = 1.0;

/**
 * @type {Array}
 * @static
 */
Timestep.queue = [];

/**
 * @param {!Function} func
 * @param {Array=} args
 * @param {*=} scope
 */
Timestep.queueCall = function(func, args, scope) {
	Timestep.queue.push({
		func: func,
		args: args,
		scope: scope
	})
};

/**
 * @param {!Function} update
 * @param {!Function} render
 * @param {!*} scope
 */
Timestep.prototype.init = function(update, render, scope) {
	var that = this;
	function frame() {
		if ((that._frame ++) % that._frameInterval == 0) {
			var time = window.performance.now();
			var elapsedMS = Math.min(that.maxElapsedMS, time - that._lastTime);
			Timestep.deltaTime = elapsedMS * 0.001 * Timestep.speed;
			that._lastTime = time;

			var sync;
			for (var i = 0; i < Timestep.queue.length; ++ i) {
				sync = Timestep.queue[i];
				sync.func.apply(sync.scope, sync.args);
			}
			Timestep.queue.length = 0;

			update.call(scope);
		}
		render.call(scope);
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);

	window.onfocus = function() {
	 	that._lastTime = Timestep.timeInSeconds;
	};
};

Object.defineProperty(Timestep, "frameInterval", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return this._frameInterval;
	}
});

Object.defineProperty(Timestep, "time", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return window.performance.now();
	}
});

Object.defineProperty(Timestep, "timeInSeconds", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return Timestep.time / 1000.0;
	}
});

},{}],5:[function(require,module,exports){
/**
 * User: Adam
 */

var Utils 	= require( "./../utils/Utils" );
var Device 	= require( "./../utils/Device" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * AudioManager
 * @class
 * @constructor
 */
var AudioManager = function () {
	if ( !AudioManager.__allowInstance ) {
		throw new Error( "AudioManager is a Singleton, use 'getInstance()'." );
	}

	/**
	 * @type {Signal.Signal}
	 */
	this.signalMute = new signals.Signal();

	/**
	 * @type {string}
	 * @private
	 * @const
	 */
	this.SOUND_GROUP_SFX = "sound_group_sfx";

	/**
	 * @type {string}
	 * @private
	 * @const
	 */
	this.SOUND_GROUP_MUSIC = "sound_group_music";

	/**
	 * @type {string}
	 * @private
	 * @const
	 */
	this.SOUND_GROUP_VO = "sound_group_vo";

	/**
	 * @type {string}
	 * @private
	 * @const
	 */
	this.LOCAL_STORAGE_ID = 'p3Mute';

	/**
	 * @type {{ string, Howl }}
	 * @private
	 */
	this._sounds = {};

	/**
	 * @type {Array.<Howls>}
	 * @private
	 */
	this._soundsSFX = [];

	/**
	 * @type {Array.<Howls>}
	 * @private
	 */
	this._soundsVO = [];

	/**
	 * @type {Array.<Howls>}
	 * @private
	 */
	this._soundsMusic = [];

	/**
	 * @type {string}
	 * @private
	 */
	this._previouslyPlayedSound = null;

	/**
	 * @type {boolean}
	 * @private
	 */
	this._isMute = false;

	/**
	 * @type {boolean}
	 * @private
	 */
	this._isMuteSFX = false;

	/**
	 * @type {boolean}
	 * @private
	 */
	this._isMuteMusic = false;

	/**
	 * @type {boolean}
	 * @private
	 */
	this._isMuteVO = false;

	var onBlurbinded = this._onBlur.bind( this );
	var onFocusbinded = this._onFocus.bind( this );
	//var visibilitychange = this._onFocus.bind( this );

	//window.addEventListener( "blur", onBlurbinded );
	//window.addEventListener( "focus", onFocusbinded );
	//window.addEventListener( "pagehide", onBlurbinded );
	//window.addEventListener( "pageshow", onFocusbinded );

	// check for localStorage of mute Status.
	//this._checkSavedMuteStatus();
};
module.exports = AudioManager;

AudioManager.prototype.constructor = AudioManager;

//===================================================
// SINGLETON
//===================================================

/**
 * Returns and instance of the AudioManager.
 * @type {AudioManager}
 * @memberOf! AudioManager
 * @returns {AudioManager}
 */
Object.defineProperty( AudioManager, 'instance', {
	/**
	 * @type {AudioManager}
	 * */
	get : function () {
		if ( !AudioManager.__instance ) {
			AudioManager.__allowInstance    = true;
			AudioManager.__instance         = new AudioManager();
			AudioManager.__allowInstance    = false;
		}
		return AudioManager.__instance;
	}
} );

/**
 * This is the instance of the AudioManager.
 * @type {AudioManager}
 * @private
 */
AudioManager.__instance = null;

/**
 * @type {boolean}
 * @private
 */
AudioManager.__allowInstance = false;

//===================================================
// VARS
//===================================================

/**
 * @type {boolean}
 * @private
 */
AudioManager.DEBUG = false;

/**
 * @type {number}
 * @static
 */
AudioManager.FADE_OUT_DURATION = 0.5;

var p = AudioManager.prototype;

//===================================================
//  PUBLIC METHODS
//===================================================

/**
 * Adds the sounds. Creates a Howl that can be played later.
 * @param {!Array<string>} soundArray - array of sound files names excluding their extensions.
 * @param {!Array<string>} soundExtensions - array of types  e.g. ['mp3', 'ogg', 'wav' ]
 * @param {basePath=} A base path for the file.
 */
p.addSounds = function ( soundArray, soundExtensions, basePath ) {
	var that = this;
	basePath = basePath || '';

	for ( var i = 0; i < soundArray.length; i++ ) {		
		var url = basePath + soundArray[ i ];
		var urlSplit = url.split( '/' );
		var name = urlSplit[ urlSplit.length - 1 ];

		// creat array with full paths including the extensions.
		var urlsWithExtensionArr = [];
		for ( var j = 0; j < soundExtensions.length; j++ ) {
			var extension = soundExtensions[ j ];
			var urlWithExtension = url + extension;
			urlsWithExtensionArr.push( urlWithExtension );
		}

		// create HOWL.
		var howl = new Howl( {
			urls     : urlsWithExtensionArr,
			volume   : 1.0,
			loop     : false,
			autoplay : false,

			onload : function () {
				// could call a method here that dispatches a signal to log the loading.
			},
			onloaderror : function () {
				p3.SoundManager.DEBUG && console.warn( '[AudioManager] Error loading sound:', name );
			}
		} );

		howl.name = name;
		this._sounds[ name ] = howl;
	}
};

/**
 * Adds the sounds. Creates a Howl that can be played later.
 * @param {!Array<string>} soundArray - array of sounds to be removed. Identified by their names.
 */
p.removeSounds = function ( soundsArray ) {
	for( var i = 0; i < soundsArray.length; i += 1 ) {
		var removeSoundName = soundsArray[i];

		for( var soundName in this._sounds ) {
			if ( this._sounds.hasOwnProperty(soundName) ) { 

				var temphowl = this._sounds[ soundName ];

				if ( temphowl.name === removeSoundName ) {
					temphowl.unload();
					temphowl = null;

					this._sounds[ soundName ] = null;
					delete this._sounds[ soundName ];
					break;
				}
			}
		}
	}
};

/**
 * Plays a sound.
 * @param {(string|Array)} name - the name of a sound or an array of names.
 * @param {{}=}         params - The params for the sound.
 * @param {number}      params.volume
 * @param {boolean}     params.loop
 * @param {number}      params.delay
 * @param {number}      params.fadeIn
 * @param {function()}  params.onComplete
 * @param {*}           params.onCompleteScope
 * @param {boolean}     params.dontRepeat
 * @returns {Howl}
 */
p.playSound = function ( name, params ) {
	// check for existing sound.
	var existing = this._checkSoundAlreadyPlaying( name, this._soundsSFX );
	if( existing ) {
		existing.play();
		return existing;
	}

	// play the howl
	var howl = this._play( name, params, this.SOUND_GROUP_SFX );
	if( !howl ){
		return null;
	}

	// save it to the SFX array.
	this._soundsSFX.push( howl );

	if ( AudioManager.DEBUG ) {
		console.log( '[AudioManager] Playing Sound:', name );
	}

	return howl;
};

/**
 * Plays a sound.
 * @param {(string|Array)} name - the name of a sound or an array of names.
 * @param {{}=}         params - The params for the sound.
 * @param {number}      params.volume
 * @param {boolean}     params.loop
 * @param {number}      params.delay
 * @param {number}      params.fadeIn
 * @param {function()}  params.onComplete
 * @param {*}           params.onCompleteScope
 * @param {boolean}     params.dontRepeat
 * @returns {Howl}
 */
p.playMusic = function ( name, params ) {
	// check for existing sound.
	var existing = this._checkSoundAlreadyPlaying( name, this._soundsMusic );
	if( existing ) {
		return existing;
	}

	params = params || {};
	params.loop = typeof params.loop !== 'undefined' ? params.loop : true;
	params.fadeIn = params.fadeIn || 1.0;

	// play the howl
	var howl = this._play( name, params, this.SOUND_GROUP_MUSIC );
	if( !howl ){
		return null;
	}

	// save it to the SFX array.
	this._soundsMusic.push( howl );

	if ( AudioManager.DEBUG ) {
		console.log( '[AudioManager] Playing Music:', name );
	}

	return howl;
};

/**
 * Plays a sound.
 * @param {(string|Array)} name - the name of a sound or an array of names.
 * @param {{}=}         params - The params for the sound.
 * @param {number}      params.volume
 * @param {boolean}     params.loop
 * @param {number}      params.delay
 * @param {number}      params.fadeIn
 * @param {function()}  params.onComplete
 * @param {*}           params.onCompleteScope
 * @param {boolean}     params.dontRepeat
 * @returns {Howl}
 */
p.playVO = function ( name, params ) {
	// check for existing sound.
	var existing = this._checkSoundAlreadyPlaying( name, this._soundsVO );
	if( existing ) {
		return existing;
	}

	// play the howl
	var howl = this._play( name, params, this.SOUND_GROUP_VO );
	if( !howl ){
		return null;
	}

	// save it to the SFX array.
	this._soundsVO.push( howl );

	if ( AudioManager.DEBUG ) {
		console.log( '[AudioManager] Playing VO:', name );
	}

	return howl;
};


/**
 * Toggle the Mute of all the sounds.
 * @param {boolean} isMute
 */
p.mute = function ( isMute ) {
	this._isMute = isMute;
	this.muteSFX( this._isMute );
	this.muteMusic( this._isMute );
	this.muteVO( this._isMute );	

	// Hower is not very good and loses track of its sounds if you play the same sound
	// over an over, like when you rollover a button numberous times. So, the only way
	// to mute is to mute everything.
	if ( isMute ) {
		Howler.mute();
	} else {
		Howler.unmute();
	}

	//this._saveMuteStatus();
	this.signalMute.dispatch( this._isMute );
};

/**
 * Toggle the Mute of all SFX sounds.
 * @param {boolean} isMute
 */
p.muteSFX = function ( isMute ) {
	this._isMuteSFX = isMute;
	this._isMute = isMute;
	this._updateSoundMuteStatus( this._isMuteSFX, this._soundsSFX );

	if ( AudioManager.DEBUG ) {
		console.log( '[AudioManager] MuteSFX:', this._isMuteSFX );
	}
};

/**
 * Toggle the Mute of all MUSIC sounds.
 * @param {boolean} isMute
 */
p.muteMusic = function ( isMute ) {
	this._isMuteMusic = isMute;
	this._isMute = isMute;
	this._updateSoundMuteStatus( this._isMuteMusic, this._soundsMusic );

	if ( AudioManager.DEBUG ) {
		console.log( '[AudioManager] MuteMusic:', this._isMuteMusic );
	}
};

/**
 * Toggle the Mute of all VO sounds.
 * @param {boolean} isMute
 */
p.muteVO = function ( isMute ) {
	this._isMuteVO = isMute;
	this._sMute = isMute;
	this._updateSoundMuteStatus( this._isMuteVO, this._soundsVO );

	if ( AudioManager.DEBUG ) {
		console.log( '[AudioManager] MuteVO:', this._isMuteVO );
	}
};

/**
 * Toggle the mute status.
 */
p.toggleMute = function () {
	this.mute( !this.isMute );
};

/**
 * Stops a sound.
 * @param {string} name
 */
p.stopSound = function ( name ) {
	var tempArrs = [
		this._soundsSFX,
		this._soundsVO,
		this._soundsMusic
	];

	for ( var i = 0; i < tempArrs.length; i++ ) {
		var tempArr = tempArrs[ i ];
		var existing = this._checkSoundAlreadyPlaying( name, tempArr );
		if( existing ) {
			existing.stop();
			return;
		}
	}

	if ( AudioManager.DEBUG ) {
		console.log( '[SoundManager] StopSound: Could not find sound to stop it:', name );
	}
};


//===================================================
//  PRIVATE METHODS
//===================================================

/**
 * Sets the mute status based upon shared object.
 * @private
	var savedMuteStatus = false;

	try {
		savedMuteStatus = localStorage.getItem( this.LOCAL_STORAGE_ID ) || false;
	} catch ( e ){
		console.log( "[AudioManager] Cannot read local storage.");
	}

	if ( savedMuteStatus ) {
		savedMuteStatus = Utils.stringToBoolean( savedMuteStatus );
	}
	this.mute( savedMuteStatus );
}

/**
 * Save mute statud.
 * @private
 */
p._saveMuteStatus = function () {
	try {
	localStorage.setItem( this.LOCAL_STORAGE_ID, this._isMute );
	} catch ( e ){
		if (e == 'QUOTA_EXCEEDED_ERR' ) {
			p3.SoundManager.DEBUG && console.log( "Error trying to write to local storage. Quota exceeded. ");
		}else {
			p3.SoundManager.DEBUG && console.log( "Error trying to write to local storage.");
		}
	}
};

/**
 * Plays the howl. Find its, updates its paramaters, plays it.
 * @param {string} name
 * @param {{}=} params
 * @param {string=} soundType
 * @returns {Howl}
 * @private
 */
p._play = function (name, params, soundType) {
	var that = this;
	var howl;
	var soundName = name;

	// parse the params.
	params = params || {};
	params.volume = params.volume || 1.0;
	params.loop = typeof params.loop !== 'undefined' ? params.loop : false;
	params.delay = params.delay || 0.0;
	params.fadeIn = typeof params.fadeIn !== 'undefined' ? params.fadeIn * 1000 : 0.0;
	params.onComplete = params.onComplete || null;
	params.onCompleteScope = params.onCompleteScope || window;
	params.dontRepeat = typeof params.dontRepeat !== 'undefined' ? params.dontRepeat : true;

	// check the name is a string or array.
	if ( typeof name !== 'string' ) {
		if ( name.length >= 0 ) {
			if ( name.length > 1 ) {
				var randomSound = Math.floor( Math.random() * name.length );
				if ( params.dontRepeat ) {
					var dontRepeatCount = 0;
					while ( randomSound === this._previouslyPlayedSound ) {
						randomSound = Math.floor( Math.random() * name.length );
						dontRepeatCount++;
						if ( dontRepeatCount > 10 ) {
							randomSound = 0;
							break;
						}
					}
				}
				soundName = name[ randomSound ];
				this._previouslyPlayedSound = soundName;
			} else {
				soundName = name[ 0 ];
			}
		} else {
			throw Error( "[AudioManager] Sound is not a string or array: ", name );
		}
	}

	// find the howl;
	for( var soundNameKey in this._sounds ) {
		if ( this._sounds.hasOwnProperty(soundNameKey) ) {
			var temphowl = this._sounds[ soundNameKey ];
			if ( temphowl.name === soundName ) {
				howl = temphowl;
				break;
			}
		}
	}

	// check the howl.
	if ( !howl ) {
		console.warn( '[AudioManager] Could not find the sound:', name );
		return;
	}

	// setup the howl.
	howl.volume ( params.volume );
	howl.loop ( params.loop);

	// set it to HTML Audio.
	if(  Device && Device.isAndroidStockBrowser ) {
		howl.buffer = true;
	}

	howl.on( "end", function() {
		this.off( "end" );
		if( !params.loop ) {
			that._removeSoundFromArray( this, soundType );
		}

		if ( params.onComplete ) {
			params.onComplete.call( params.onCompleteScope );
		}

		if ( AudioManager.DEBUG ) {
			console.log( '[AudioManager] Sound ended:', this.name );
		}
	});

	// set mute if already muted.
	var startMuted;
	switch ( soundType ) {
		case this.SOUND_GROUP_SFX:
			startMuted = this._isMuteSFX;
			break;
		case this.SOUND_GROUP_MUSIC:
			startMuted = this._isMuteMusic;
			this._stopExistingSound( soundType, params.fadeIn );
			break;
		case this.SOUND_GROUP_VO:
			startMuted = this._isMuteVO;
			this._stopExistingSound( soundType, params.fadeIn );
			break;
		default :
			startMuted = false;
	}

	if ( startMuted ) {
		howl.mute();
		params.fadeIn = 0.0; // howler issue: it will still fade the sound up if muted.
	}

	//play the howl with a delay or fade in if required.
	if ( params.delay === 0.0 ) {
		if ( params.fadeIn === 0.0 ) {
			howl.play();
		} else {
			howl.fadeIn( params.volume, params.fadeIn );
		}
	} else {
		setTimeout( function () {
			if ( params.fadeIn === 0.0 ) {
				howl.play();
			} else {
				howl.fadeIn( params.volume, params.fadeIn );
			}
		}, params.delay * 1000 );
	}
	return howl;
};

/**
 * Stops existing sounds and stops them.
 * @param {string} soundType
 * @param {number} fadeIn
 * @private
 */
p._stopExistingSound = function ( soundType, fadeIn ) {
	var that = this;

	var soundArr;
	if( soundType === this.SOUND_GROUP_MUSIC ) {
		soundArr =this._soundsMusic;
	} else if(soundType === this.SOUND_GROUP_VO ) {
		soundArr = this._soundsVO;
		fadeIn = 0.0;
	} else {
		return;
	}

	// check to see if there is already a vo playing and if so, stop it.
	if ( soundArr.length > 0 ) {
		for ( var i = 0; i < soundArr.length; i += 1 ) {
			var existingSound = soundArr[ i ];
			that._removeSoundFromArray( existingSound, soundType );

			if ( fadeIn === 0.0 ) {
				existingSound.stop();
			} else {
				existingSound.fadeOut( 0.0, fadeIn, function () {
					existingSound.stop();
				} );
			}
		}
	}
};

/**
* Removes the Howl from the array. This happens when a sound is complete.
* @param {Howl} howl
* @private
*/
p._removeSoundFromArray = function ( howl, soundType ) {
	var arr;
	switch ( soundType ) {
		case this.SOUND_GROUP_SFX:
			arr = this._soundsSFX;
			break;
		case this.SOUND_GROUP_MUSIC:
			arr = this._soundsMusic;
			break;
		case this.SOUND_GROUP_VO:
			arr = this._soundsVO;
			break;
	}

	for ( var i = 0, len = arr.length; i < len; i++ ) {
		var sound = arr[ i ];
		if ( sound && sound.name === howl.name ) {
			arr.splice( i, 1 );
		}
	}
};

/**
* Updates the mute status on all sounds.
* Would be more efficient to only update the ones that have changed.
* @param {boolean} isMute
* @param {Array<Howls>} soundArray
* @private
*/
p._updateSoundMuteStatus = function ( isMute, soundArray ) {
	var len = soundArray.length;
	for ( var i = 0; i < len; i += 1 ) {
		var sound = soundArray[ i ];
		if ( isMute ) {
			sound.mute();
		} else {
			sound.unmute();
		}
	}
};

/**
 * Checks if the sound is already in the array.
 * @param {string} name
 * @param {Array<Howl>} arr
 * @returns {Howl}
 * @private
 */
p._checkSoundAlreadyPlaying = function(name, arr) {
	for ( var i = 0, len = arr.length; i < len; i += 1 ) {
		var sound = arr[ i ];
		if ( sound.name === name ) {
			return sound;
		}
	}
	return null;
};

//===================================================
// EVENTS
//===================================================

/**
 * Called when the browser loses focus.
 * @private
 */
p._onBlur = function () {
	Howler.mute();
};

/**
 * Called when the browser gains focus.
 * @private
 */
p._onFocus = function () {
	if ( !this._isMute ) {
		Howler.unmute();
	}
};

//===================================================
// GETTERS/SETTERS
//===================================================

/**
 * Reference for advanced compilation.
 * @type {boolean}
 */
p.isMute = false;

/**
 * Reference for advanced compilation.
 * @type {boolean}
 */
p.isMuteSFX = false;

/**
 * Reference for advanced compilation.
 * @type {boolean}
 */
p.isMuteMusic = false;

/**
 * Reference for advanced compilation.
 * @type {boolean}
 */
p.isMuteVO = false;

/**
 * Reference for advanced compilation.
 * @type {{}}
 */
p.sounds = false;

/**
 * Reference for advanced compilation.
 * @type {Array<Howl>}
 */
p.soundsSFX

/**
 * Reference for advanced compilation.
 * @type {Array<Howl>}
 */
p.soundsSFX;

/**
 * Reference for advanced compilation.
 * @type {Array<Howl>}
 */
p.soundsMusic;

/**
 * Reference for advanced compilation.
 * @type {Array<Howl>}
 */
p.soundsVO;


Object.defineProperty( AudioManager.prototype, 'isMute', {
	/** @type {boolean} */
	get : function () {
		return this._isMute;
	}
} );

Object.defineProperty( AudioManager.prototype, 'isMuteSFX', {
	/** @type {boolean} */
	get : function () {
		return this._isMuteSFX;
	}
} );

Object.defineProperty( AudioManager.prototype, 'isMuteMusic', {
	/** @type {boolean} */
	get : function () {
		return this._isMuteMusic;
	}
} );

Object.defineProperty( AudioManager.prototype, 'isMuteVO', {
	/** @type {boolean} */
	get : function () {
		return this._isMuteVO;
	}
} );

Object.defineProperty( AudioManager.prototype, 'sounds', {
	/** @type {{}} */
	get : function () {
		return this._sounds;
	}
} );

Object.defineProperty( AudioManager.prototype, 'soundsSFX', {
	/** @type {Array<Howl>} */
	get : function () {
		return this._soundsSFX;
	}
} );

Object.defineProperty( AudioManager.prototype, 'soundsMusic', {
	/** @type {Array<Howl>} */
	get : function () {
		return this._soundsMusic;
	}
} );

Object.defineProperty( AudioManager.prototype, 'soundsVO', {
	/** @type {Array<Howl>} */
	get : function () {
		return this._soundsVO;
	}
} );

},{"./../utils/Device":45,"./../utils/Utils":48}],6:[function(require,module,exports){
/**
 * User: Adam
 */

var Canvas = require("./../Canvas");
var AudioManager = require("./../audio/AudioManager");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * P3Gel
 * @class
 * @constructor
 */
var BBCGel = function ( wrapperID ) {
	/**
	 * @type {signals.Signal}
	 */
	this.signalClose = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalExit = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalInstructions = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalHome = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalMute = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalPause = new signals.Signal();

	/**
	 * @type {{x: number, y: number}}
	 */
	this.buttonDimensions = { 'x': 64, 'y': 64 };

	/**
	 * @type {HTMLElement}
	 */
	this.muteBtn = null;

	/**
	 * @type {HTMLElement}
	 */
	this.homeBtn = null;

	/**
	 * @type {HTMLElement}
	 */
	this.exitBtn = null;

	/**
	 * @type {HTMLElement}
	 */
	this.instructionsBtn = null;

	/**
	 * @type {HTMLElement}
	 */
	this.pauseBtn = null;

	/**
	 * @type {HTMLElement}
	 */
	this.closeBtn = null;

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenHomeBtns = [];

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenMenuBtns = [];

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenPauseBtns = [];

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenInstructionsBtns = [];

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenGameBtns = [];

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenGameOverBtns = [];

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenCurrentBtns = [];

	/**
	 * @type {Array.<HTMLElement>}
	 * @private
	 */
	this._screenPreviousBtns = [];

	/**
	 * @type {HTMLElement}
	 * @private
	 */
	this._wrapperDiv = document.getElementById( wrapperID );

	/**
	 * @type {HTMLElement}
	 * @private
	 */
	this._gelRootDiv = document.getElementById( 'p3gel' );

	if ( !this._gelRootDiv ) {
		console.warn( "[BBCGel] There is no 'p3gel' div on the page." );
		return;
	}

	this._gelRootDiv.style.display = "none";
	this._gelRootDiv.style.zIndex = BBCGel.Z_INDEX;

	if ( !window[ 'TweenLite' ] ) {
		console.log( '[P3Gel] You do not have TweenLite which may be needed.' );
	}
}
module.exports = BBCGel;

var p = BBCGel.prototype;

/**
 * @type {number}
 * @const
 */
BBCGel.Z_INDEX = 100;

/**
 * @type {number}
 * @const
 */
BBCGel.FADE_IN_DURATION = 0.3;

/**
 * @type {number}
 * @const
 */
BBCGel.FADE_OUT_DURATION = 0.2;

/**
 * @type {boolean}
 */
BBCGel.DISABLE_ANIMATIONS = false;

//===================================================
// PUBLIC METHODS
//===================================================

/**
* Call to make the gel visible or not.
*/
p.enable = function( isEnabled ) {
	if( isEnabled ) {
		this._gelRootDiv.style.display = "block";
	} else {
		this._gelRootDiv.style.display = "none";
	}
};

/**
 * Creates a Close btn.
 * @param {{}} params
 * @param {string=} params.soundClickSFX
 * @param {string=} params.soundClickVO
 * @param {string=} params.soundOverSFX
 * @param {string=} params.soundOverVO
 * @param {boolean=} params.isToggle
 */
p.initBtnClose = function ( params ) {
	params = this._checkParams( params );

	this.closeBtn = document.getElementById( 'p3gel_close_button' );
	if ( !this.closeBtn ) {
		console.warn( "[BBCGel] There is no 'close' button div." );
		return;
	}
	this.closeBtn.style.opacity = 1.0;
	this._addButton( this.closeBtn, this._onCloseClick, params );
};

/**
 * Creates an exit button.
 * @param {{}} params
 * @param {string=} params.soundClickSFX
 * @param {string=} params.soundClickVO
 * @param {string=} params.soundOverSFX
 * @param {string=} params.soundOverVO
 * @param {boolean=} params.isToggle
 */
p.initBtnExit = function ( params ) {
	params = this._checkParams( params );

	this.exitBtn = document.getElementById( 'p3gel_exit_button' );
	if ( !this.exitBtn ) {
		console.warn( "[BBCGel] There is no 'exit' button div." );
		return;
	}
	this.exitBtn.style.opacity = 1.0;
	this._addButton( this.exitBtn, this._onExitClick, params );

};

/**
 * Creates a Help btn.
 * @param {{}} params
 * @param {string=} params.soundClickSFX
 * @param {string=} params.soundClickVO
 * @param {string=} params.soundOverSFX
 * @param {string=} params.soundOverVO
 * @param {boolean=} params.isToggle
 */
p.initBtnInstructions = function ( params ) {
	params = this._checkParams( params );

	this.instructionsBtn = document.getElementById( 'p3gel_instructions_button' );
	if ( !this.instructionsBtn ) {
		console.warn( "[BBCGel] There is no 'instructions' button div." );
		return;
	}
	this.instructionsBtn.style.opacity = 1.0;
	this._addButton( this.instructionsBtn, this._onInstructionsClick, params );

};

/**
 * Creates a home button.
 * @param {{}} params
 * @param {string=} params.soundClickSFX
 * @param {string=} params.soundClickVO
 * @param {string=} params.soundOverSFX
 * @param {string=} params.soundOverVO
 * @param {boolean=} params.isToggle
 */
p.initBtnHome = function ( params ) {
	params = this._checkParams( params );

	this.homeBtn = document.getElementById( 'p3gel_home_button' );
	if ( !this.homeBtn ) {
		console.warn( "[BBCGel] There is no 'home' button div." );
		return;
	}
	this.homeBtn.style.opacity = 1.0;
	this._addButton( this.homeBtn, this._onHomeClick, params );
};

/**
 * Creates a mute button.
 * @param {{}} params
 * @param {string=} params.soundClickSFX
 * @param {string=} params.soundClickVO
 * @param {string=} params.soundOverSFX
 * @param {string=} params.soundOverVO
 * @param {boolean=} params.isToggle
 */
p.initBtnMute = function ( params ) {
	params = this._checkParams( params );

	this.muteBtn = document.getElementById( 'p3gel_mute_button' );
	if ( !this.muteBtn ) {
		console.warn( "[BBCGel] There is no 'mute' button div." );
		return;
	}
	this.muteBtn.style.opacity = 1.0;
	params.isToggle = true;
	this._addButton( this.muteBtn, this._onMuteClick, params );

	if ( !AudioManager.instance.isMute ) {
		this.muteBtn.state = 0;
	} else {
		this.muteBtn.state = 2;
	}
	this._onMouseOut( this.muteBtn, null );
};

/**
 * Creates a Pause btn.
 * @param {{}} params
 * @param {string=} params.soundClickSFX
 * @param {string=} params.soundClickVO
 * @param {string=} params.soundOverSFX
 * @param {string=} params.soundOverVO
 * @param {boolean=} params.isToggle
 */
p.initBtnPause = function ( params ) {
	params = this._checkParams( params );

	this.pauseBtn = document.getElementById( 'p3gel_pause_button' );
	if ( !this.pauseBtn ) {
		console.warn( "[BBCGel] There is no 'pause' button div." );
		return;
	}
	this.pauseBtn.style.opacity = 1.0;
	this._addButton( this.pauseBtn, this._onPauseClick, params );
};

/**
 * Saves a reference of buttons to use for the Home screen
 * examle: p3gel.initHomeScreen( p3gel.muteButton );
 * Typical Gel buttons are: 'mute'.
 * @param {!Array.<HTMLELements>} buttonsArr
 */
p.initScreenHome = function ( buttonsArr ) {
	if ( !Array.isArray( buttonsArr ) ) {
		console.error( [ '[BBCGel] buttonsArr is not an array.' ] );
	}
	this._screenHomeBtns = buttonsArr;
};

/**
 * Saves a reference of buttons to use for the Home screen
 * examle: p3gel.initHomeScreen( p3gel.muteButton );
 * Typical Gel buttons are: 'mute'.
 * @param {!Array.<HTMLELements>} buttonsArr
 */
p.initScreenMenu = function ( buttonsArr ) {
	if ( !Array.isArray( buttonsArr ) ) {
		console.error( [ '[BBCGel] buttonsArr is not an array.' ] );
	}
	this._screenMenuBtns = buttonsArr;
};

/**
 * Saves a reference of buttons to use for the Pause screen
 * Typical Gel buttons are: 'home', 'instructions', 'mute'.
 * @param {!Array.<HTMLELements>} buttonsArr
 */
p.initScreenPause = function ( buttonsArr ) {
	if ( !Array.isArray( buttonsArr ) ) {
		console.error( [ '[BBCGel] buttonsArr is not an array.' ] );
	}
	this._screenPauseBtns = buttonsArr;
};

/**
 * Saves a reference of buttons to use for the Instructions screen
 * Typical Gel buttons are: 'close'.
 * @param {!Array.<HTMLELements>} buttonsArr
 */
p.initScreenInstructions = function ( buttonsArr ) {
	if ( !Array.isArray( buttonsArr ) ) {
		console.error( [ '[BBCGel] buttonsArr is not an array.' ] );
	}
	this._screenInstructionsBtns = buttonsArr;
};

/**
 * Saves a reference of buttons to use for the Game screen
 * Typical Gel buttons are: 'pause'.
 * @param {!Array.<HTMLELements>} buttonsArr
 */
p.initScreenGame = function ( buttonsArr ) {
	if ( !Array.isArray( buttonsArr ) ) {
		console.error( [ '[BBCGel] buttonsArr is not an array.' ] );
	}
	this._screenGameBtns = buttonsArr;
};

/**
 * Saves a reference of buttons to use for the GameOver screen.
 * Typical Gel buttons are: 'pause'.
 * @param {!Array.<HTMLELements>} buttonsArr
 */
p.initScreenGameOver = function ( buttonsArr ) {
	if ( !Array.isArray( buttonsArr ) ) {
		console.error( [ '[BBCGel] buttonsArr is not an array.' ] );
	}
	this._screenGameOverBtns = buttonsArr;
};

/**
 * Show a specific button.
 * @param {!HTMLELements} btnElement
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showButton = function ( btnElement, delay, transition ) {
	if ( !btnElement ) {
		return;
	}
	this._tweenIn( btnElement, delay, transition );
}

/**
 * Show a specific button.
 * @param {!HTMLELements} btnElement
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.hideButton = function ( btnElement, delay, transition ) {
	if ( !btnElement ) {
		return;
	}
	this._tweenOut( btnElement, delay, transition );
}

/**
 * Hides all the elements.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.hideAllButtons = function ( delay, transition ) {
	delay = delay || 0.0;

	if ( this.closeBtn ) {
		this._tweenOut( this.closeBtn, delay, transition );
	}
	if ( this.exitBtn ) {
		this._tweenOut( this.exitBtn, delay, transition );
	}
	if ( this.muteBtn ) {
		this._tweenOut( this.muteBtn, delay, transition );
	}
	if ( this.instructionsBtn ) {
		this._tweenOut( this.instructionsBtn, delay, transition );
	}
	if ( this.homeBtn ) {
		this._tweenOut( this.homeBtn, delay, transition );
	}
	if ( this.pauseBtn ) {
		this._tweenOut( this.pauseBtn, delay, transition );
	}
};

/**
 * Turns the visibility of the gel on and off.
 * @param {boolean} isVisible
 */
p.toggleVisibility = function ( isVisible ) {
	if ( !this._gelRootDiv ) {
		console.warn( '[P3Gel] root node has not been set.' );
	}

	if ( isVisible ) {
		this._gelRootDiv.style.display = 'block';
	} else {
		this._gelRootDiv.style.display = 'none';
	}
};

/**
 * Shows the layout/buttons for the HOME screen.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showLayoutHome = function ( delay, fadeTransition ) {
	this._showScreenButtons( this._screenHomeBtns, delay, fadeTransition );
};

/**
 * Shows the layout/buttons for the MENU screen. (this is a special case but may pop up again.)
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showLayoutMenu = function ( delay, fadeTransition ) {
	this._showScreenButtons( this._screenMenuBtns, delay, fadeTransition );
};

/**
 * Shows the layout/buttons for the SETTINGS screen.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showLayoutPause = function ( delay, fadeTransition ) {
	this._showScreenButtons( this._screenPauseBtns, delay, fadeTransition );
};

/**
 * Shows the layout/buttons for the SETTINGS screen.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showLayoutInstructions = function ( delay, fadeTransition ) {
	this._showScreenButtons( this._screenInstructionsBtns, delay, fadeTransition );
};

/**
 * Shows the layout/buttons for the GAME  screen.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showLayoutGame = function ( delay, fadeTransition ) {
	this._showScreenButtons( this._screenGameBtns, delay, fadeTransition );
};

/**
 * Shows the layout/buttons for the GAME  screen.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showLayoutGameOver = function ( delay, fadeTransition ) {
	this._showScreenButtons( this._screenGameOverBtns, delay, fadeTransition );
};

/**
 * Show the previous Buttons.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 */
p.showLayoutPrevious = function ( delay, fadeTransition ) {
	this._showScreenButtons( this._screenPreviousBtns, delay, fadeTransition );
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * Checks and poppulates the params.
 * @param {{}} params
 * @param {string=} params.soundClickSFX
 * @param {string=} params.soundClickVO
 * @param {string=} params.soundOverSFX
 * @param {string=} params.soundOverVO
 * @param {boolean=} params.isToggle
 * @returns {*|{}}
 * @private
 */
p._checkParams = function ( params ) {
	params = params || {};
	params.soundClickSFX = params.soundClickSFX;
	params.soundClickVO = params.soundClickVO;
	params.soundOverSFX = params.soundOverSFX;
	params.soundOverVO = params.soundOverVO;
	params.isToggle = params.isToggle;
	return params;
};


/**
 * Adds buttons functionality.
 * @param {HTMLElement} buttonElement
 * @param {function} clickCallback
 * @param {{}=} params
 * @private
 */
p._addButton = function ( buttonElement, clickCallback, params ) {
	buttonElement.clickCallback = clickCallback;
	buttonElement.scope = this;
	buttonElement.isToggle = params.isToggle;
	buttonElement.state = 0;

	var that = this;

	if ( Canvas.isMobile() ) {
		buttonElement.ontouchstart = function ( evt ) {
			that._onMouseOver( this, evt );

			if ( params.soundOverSFX ) {
				AudioManager.instance.playSound( params.soundOverSFX );
			}
			if ( params.soundOverVO ) {
				AudioManager.instance.playVO( params.soundOverVO );
			}
		}

		buttonElement.ontouchmove = function ( evt ) {
			that._onTouchMove( this, evt );
		}

		buttonElement.ontouchend = function ( evt ) {
			that._onMouseUp( this, evt );

			if ( params.soundClickSFX ) {
				AudioManager.instance.playSound( params.soundClickVO );
			}
			if ( params.soundClickVO ) {
				AudioManager.instance.playVO( params.soundClickVO );
			}
		}

	} else {
		buttonElement.onmouseover = function ( evt ) {
			that._onMouseOver( this, evt );

			if ( params.soundOverSFX ) {
				AudioManager.instance.playSound( params.soundOverSFX );
			}
			if ( params.soundOverVO ) {
				AudioManager.instance.playVO( params.soundOverVO );
			}
		}

		buttonElement.onmouseout = function ( evt ) {
			that._onMouseOut( this, evt );
		}

		buttonElement.onmousedown = function ( evt ) {
			that._onMouseOver( this, evt );
		}

		buttonElement.onmouseup = function ( evt ) {
			that._onMouseUp( this, evt );

			if ( params.soundClickSFX ) {
				AudioManager.instance.playSound( params.soundClickVO );
			}
			if ( params.soundClickVO ) {
				AudioManager.instance.playVO( params.soundClickVO );
			}
		}
	}

	// set Button to mouseOut state.
	//this._onMouseOut( buttonElement, null );
	this.hideButton( buttonElement, 0.0, 0.0 );
};

/**
 * Shows the buttons in the passed array.
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 * @private
 */
p._showScreenButtons = function ( buttonsArr, delay, fadeTransition ) {
	this.hideAllButtons();
	for ( var i = 0; i < buttonsArr.length; i += 1 ) {
		var btn = buttonsArr[ i ];
		this._tweenIn( btn, delay, fadeTransition );
	}

	this._screenPreviousBtns = this._screenCurrenBtns;
	this._screenCurrenBtns = buttonsArr;
}

/**
 * Tweens an element in.
 * @param {!HTMLElement} element
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 * @protected
 */
p._tweenIn = function ( element, delay, fadeTransition ) {
	if ( !element ) {
		return;
	}
	delay = delay || 0.0;

	if( BBCGel.DISABLE_ANIMATIONS ) {
		element.style.display = "block";
		element.style.opacity = 1.0;
	} else {

		setTimeout( function() {
			element.style.opacity = 0.0;
			element.style.display = "block";

			if ( fadeTransition ) {
				TweenLite.killTweensOf( element.style );
				TweenLite.to( element.style, BBCGel.FADE_IN_DURATION, {
					opacity : 1.0,
					ease    : Power2.easeOut
				} );
			} else {
				element.style.display = "block";
				element.style.opacity = 1.0;
			}
		}, delay * 1000 );
	}
};

/**
 * Tweens an element out.
 * @param {!HTMLElement} element
 * @param {number=} delay
 * @param {boolean=} fadeTransition
 * @protected
 */
p._tweenOut = function ( element, delay, fadeTransition ) {
	if ( !element ) {
		return;
	}
	delay = delay || 0.0;

	if( BBCGel.DISABLE_ANIMATIONS ) {
		element.style.opacity = 0.0;
		element.style.display = "none";
	} else {
		setTimeout( function() {
			element.style.opacity = 0.0;
			element.style.display = "none";

			if ( fadeTransition ) {
				TweenLite.to( element.style, BBCGel.FADE_OUT_DURATION, {
					opacity    : 0.0,
					ease       : Power2.easeOut,
					onComplete : function () {
						element.style.display = "none";
					}
				} );
			} else {
				element.style.opacity = 0.0;
				element.style.display = "none";
			}
		}, delay * 1000 );
	}
};

//===================================================
// EVENTS
//===================================================

/**
 * Prevent the touchmove for doing anything.
 * @private
 */
p._onTouchMove = function ( buttonElement, evt ) {
	evt.preventDefault();
};

/**
 * On Mouse over
 * @param evt
 * @private
 */
p._onMouseOver = function ( buttonElement, evt ) {
	var pos = ( ( buttonElement.state + 1 ) * this.buttonDimensions.y );
	buttonElement.style.backgroundPosition = "0px -" + pos + "px";
};

/**
 * On Mouse Out
 * @param evt
 * @private
 */
p._onMouseOut = function ( buttonElement, evt ) {
	var pos = ( ( buttonElement.state ) * this.buttonDimensions.y );
	buttonElement.style.backgroundPosition = "0px -" + pos + "px";
};

/**
 * On Mouse Up.
 * @param evt
 * @private
 */
p._onMouseUp = function ( buttonElement, evt ) {
	var isMute = AudioManager.instance.isMute;
	if ( buttonElement.isToggle ) {
		// if it is muted, it will soon be unmuted.
		if ( isMute ) {
			buttonElement.state = 0;
		} else {
			buttonElement.state = 2;
		}
	}
	this._onMouseOut( buttonElement, null );
	buttonElement.clickCallback.call( buttonElement.scope );
};

/**
 * OnMuteBtn click
 * @private
 */
p._onMuteClick = function () {
	AudioManager.instance.toggleMute();
	this.signalMute.dispatch();
};

/**
 * OnHomeBtn click
 * @private
 */
p._onHomeClick = function () {
	this.signalHome.dispatch();
};

/**
 * OnExitBtn click
 * @private
 */
p._onExitClick = function () {
	this.signalExit.dispatch();
};

/**
 * OnHelpBtn click
 * @private
 */
p._onInstructionsClick = function () {
	this.signalInstructions.dispatch();
};

/**
 * OnPauseBtn click
 * @private
 */
p._onPauseClick = function () {
	this.signalPause.dispatch();
};

/**
 * OnPauseBtn click
 * @private
 */
p._onCloseClick = function () {
	this.signalClose.dispatch();
};


},{"./../Canvas":3,"./../audio/AudioManager":5}],7:[function(require,module,exports){
/**
 *  AdditiveSprite
 *
 *  Created by Legman on 18/12/2014.
 *
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!PIXI.Texture} texture
 * @param {Number=} blendStrength
 * @param {Number=} blendColor
 * @param {Number=} blendPasses
 * @constructor
 */
var AdditiveSprite = function(texture, blendStrength, blendColor, blendPasses) {

    /**
     * @type {number}
     * @private
     */
    this.blendStrength = (blendStrength != undefined ? blendStrength : 0.0);

    /**
     * @type {Number}
     * @private
     */
    this.blendColor = blendColor || 0xFFFFFF;

    /**
     * @type {Number}
     * @private
     */
    this._blendPasses = Math.max(1, blendPasses) || 2;

    PIXI.Sprite.call(this, texture);
};
module.exports = AdditiveSprite;

AdditiveSprite.prototype = Object.create( PIXI.Sprite.prototype );
AdditiveSprite.prototype.constructor = AdditiveSprite;

//===================================================
// VARS
//===================================================

var p = AdditiveSprite.prototype;

//===================================================
// PRIVATE METHODS
//===================================================

p._renderWebGL = function(renderSession) {
    if (!this.visible || this.alpha <= 0.0) {
        return;
    }

    var i, j, spriteBatch;
    if (this._mask || this._filters) {
        spriteBatch = renderSession.spriteBatch;
        if (this._filters) {
            spriteBatch.flush();
            renderSession.filterManager.pushFilter(this._filterBlock);
        }
        if (this._mask) {
            spriteBatch.stop();
            renderSession.maskManager.pushMask(this.mask, renderSession);
            spriteBatch.start();
        }
        spriteBatch.render(this);
        for (i = 0, j = this.children.length; i < j; ++i) {
            this.children[i]._renderWebGL(renderSession);
        }
        spriteBatch.stop();
        if (this._mask) {
            renderSession.maskManager.popMask(this._mask, renderSession);
        }
        if (this._filters) {
            renderSession.filterManager.popFilter();
        }
        spriteBatch.start();
    } else if (this.blendStrength > 0.0) {
        spriteBatch = renderSession.spriteBatch;

        var alpha = this.worldAlpha;
        spriteBatch.render(this);
        spriteBatch.flush();

        var tint = this.tint;
        this.worldAlpha = alpha * this.blendStrength;
        this.blendMode = PIXI.blendModes.ADD;
        this.tint = this.blendColor;
        for (i = 0; i < this._blendPasses; ++ i) {
            spriteBatch.render(this);
        }
        spriteBatch.flush();

        this.worldAlpha = alpha;
        this.blendMode = PIXI.blendModes.NORMAL;
        this.tint = tint;

        for (i = 0, j = this.children.length; i < j; ++ i) {
            this.children[i]._renderWebGL(renderSession);
        }
    } else {
        renderSession.spriteBatch.render(this);
        for (i = 0,j = this.children.length; i < j; ++ i) {
            this.children[i]._renderWebGL(renderSession);
        }
    }
};

//===================================================
// GETTERS & SETTERS
//===================================================

Object.defineProperty(AdditiveSprite.prototype, "blendPasses", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._blendPasses;
    },
    /**
     * @param {Number} value
     */
    set: function(value) {
        this._blendPasses = Math.max(1, value);
    }
});

//===================================================


},{}],8:[function(require,module,exports){
/**
 * User: Adam
 */


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Button
 * @class
 * @constructor
 * @param {!PIXI.Texture} normalTexture
 * @param {PIXI.Texture=} opt_overTexture
 * @param {PIXI.Texture=} opt_downTexture
 * @param {PIXI.Texture=} opt_disabledTexture
 * @extends {PIXI.Container}
 */
var Button = function ( normalTexture, opt_overTexture, opt_downTexture, opt_disabledTexture ) {
	PIXI.Container.call( this );

	/**
	 * @type {!PIXI.Texture}
	 */
	this.normalTexture = normalTexture;

	/**
	 * @type {PIXI.Texture}
	 */
	this.overTexture = opt_overTexture || this.normalTexture;

	/**
	 * @type {PIXI.Texture}
	 */
	this.downTexture = opt_downTexture || this.overTexture || this.normalTexture;

	/**
	 * @type {PIXI.Texture}
	 */
	this.disabledTexture = opt_disabledTexture || this.normalTexture;

	/**
	 * @type {Signal.Signal}
	 */
	this.signalClick = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalOver = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalOut = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalDown = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalUp = new signals.Signal();
	//this.signalTap = new signals.Signal();

	/**
	 * @type {boolean}
	 * @private
	 */
	this._isOver = false;

	/**
	 * @type {boolean}
	 * @private
	 */
	this._enabled = true;

	/**
	 * @type {PIXI.Sprite}
	 * @private
	 */
	this._button = new PIXI.Sprite( this.normalTexture );

	// centered by default.
	this._button.anchor.x = 0.5;
	this._button.anchor.y = 0.5;

	// make the button interactive.. - THIS SEEMS TO HAVE BEEN REMOVED...
	this._button.interactive = true;
	this._button.buttonMode = true;

	this._button.mousedown = this._button.touchstart = this._onMouseDown.bind( this );
	this._button.mouseup = this._button.touchend = this._onMouseUp.bind( this );
	this._button.mouseover = this._onMouseOver.bind( this );
	this._button.mouseout = this._onMouseOut.bind( this );
	this._button.mouseupoutside = this._button.touchendoutside = this._onMouseOut.bind( this );
	this._button.click = this._onMouseClick.bind( this );
	this._button.tap = this._onMouseTap.bind( this );

	this.addChild( this._button );

	this.setEnabled( true );
};
module.exports = Button;

Button.prototype = Object.create( PIXI.Container.prototype );
Button.prototype.constructor = Button;

var p = Button.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Cleanup.
 */
p.dispose = function () {
	this.signalClick.removeAll();
	this.signalDown.removeAll();
	this.signalUp.removeAll();
	this.signalOver.removeAll();
	this.signalOut.removeAll();
	//this.signalTap.removeAll();

	//this.signalClick = null;
	//this.signalDown = null;
	//this.signalUp = null;
	//this.signalOver = null;
	//this.signalOut = null;
	//this.signalTap = null;
	this.removeChildren();

	//this._button.mousedown = this._button.touchstart = this._button.mouseup = this._button.touchend = this._button.mouseover = this._button.mouseout = this._button.mouseupoutside = this._button.click = this._button.tap = null;
	//this._button = null;

	//this.normalTexture = null;
	//this.overTexture = null;
	//this.downTexture = null;
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

p._onMouseDown = function ( data ) {
	if ( this._enabled ) {
		this._button.texture = this.downTexture;
		this.signalDown.dispatch( this, data );
	}
};

p._onMouseUp = function ( data ) {
	if ( this._enabled ) {
		this._button.texture = this.normalTexture;
		this.signalUp.dispatch( this, data );
	}
};

p._onMouseOver = function ( data ) {
	if ( this._enabled ) {
		this._button.texture = this.overTexture;
		this.signalOver.dispatch( this, data );
	}
};

p._onMouseOut = function ( data ) {
	if ( this._enabled ) {
		this._button.texture = this.normalTexture;
		this.signalOut.dispatch( this, data );
	}
};

p._onMouseClick = function ( data ) {
	if ( this._enabled ) {
		this.signalClick.dispatch( this, data );
	}
};

p._onMouseTap = function ( data ) {
	if ( this._enabled ) {
		this.signalClick.dispatch( this, data );
	}
};

//===================================================
// GETTERS/SETTERS
//===================================================

/**
 * Retruns the button sprite.
 * @returns {PIXI.Sprite}
 * @deprecated
 */
p.getButtonSprite = function () {
	return this._button;
};

/**
 * Sets the enabled status of the button.
 * @param {!boolean} value
 * @param {boolean=} showDisabledState
 */
p.setEnabled = function ( value, showDisabledState ) {
	this._enabled = value;
	this._button.interactive = this._enabled;
	this._button.buttonMode = this._enabled;

	showDisabledState = typeof showDisabledState !== 'undefined' ? showDisabledState : true;

	if ( showDisabledState ) {
		if ( this._enabled ) {
			this._button.texture = this.normalTexture;
		} else {
			this._button.texture = this.disabledTexture;
		}
	}
};

/**
 * Gets the enabled status of the button.
 * @deprecated
 */
p.getEnabled = function () {
	return this._enabled;
};

/**
 * Reference for advanced compilation.
 * @type {boolean}
 */
p.interactive = false;

Object.defineProperty( Button.prototype, 'interactive', {
	/** @type {boolean}    */
	get : function () {
		return this._enabled;
	},

	/** @type {boolean} */
	set : function ( value ) {
		this._enabled = value;
		this._button.interactive = this._enabled;
		this._button.buttonMode = this._enabled;

		if ( this._enabled ) {
			this._button.texture = this.normalTexture;
		} else {
			this._button.texture = this.disabledTexture;
		}
	}
} );


/**
 * Reference for advanced compilation.
 * @type {PIXI.Sprite}
 */
p.sprite = false;

Object.defineProperty( Button.prototype, 'sprite', {
	/** @type {PIXI.Sprite} */
	get : function () {
		return this._button;
	}

} );




Object.defineProperty( Button.prototype, "hitArea", {
	/** @type {PIXI.Rectangle} */
	set: function ( value) {
		this._button.hitArea = value;
	}

} );




},{}],9:[function(require,module,exports){
/**
 *  MovieClip
 *
 *  Created by Legman on 10/11/2014.
 *
 */

var AdditiveSprite  	= require( "./../display/AdditiveSprite" );
var AssetManager    	= require( "./../AssetManager" );
var Device          	= require( "./../Canvas" );
var MovieClipSequence	= require( "./MovieClipSequence" );
var Utils           	= require( "./../utils/Utils" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
* @param {!MovieClipSequence} sequence
* @param {!String} defaultAnimation
* @constructor
*/
var MovieClip = function ( sequence, defaultAnimation ) {
	/**
	 * @type {String}
	 */
	this.defaultAnimation = defaultAnimation;

	/**
	 * @type {Number}
	 */
	this.animationSpeed = 1.0;

	/**
	 * @type {Boolean}
	 */
	this.playing = false;

	/**
	 * @type {Boolean}
	 */
	this.looping = false;

	/**
	 * @type {signals.Signal}
	 * @private
	 */
	this.signalAnimationLooped = null;

	/**
	 * @type {signals.Signal}
	 * @private
	 */
	this.signalAnimationFinished = null;

	/**
	 * @type {Object}
	 */
	this._frames = {};

	/**
	 * @type {Number}
	 */
	this._currentFrame = 0;

	/**
	 * @type {Number}
	 */
	this._lastFrame = 0;

	/**
	 * @type {String}
	 */
	this._currentAnimationName = this.defaultAnimation;

	var texture = sequence.textures[this.defaultAnimation][0];
	if (!texture) {
		throw new Error("No default texture found!");
	}

	for (var key in sequence.textures) {
		if (sequence.textures.hasOwnProperty(key)) {
			this._frames[key] = [];
			for (var i = 0; i < sequence.textures[key].length; ++ i) {
				this._frames[key].push({
					texture: sequence.textures[key][i],
					callback: null,
					scope: null
				})
			}
		}
	}

	this.signalAnimationLooped = new signals.Signal();
	this.signalAnimationFinished = new signals.Signal();

	PIXI.Sprite.call(this, texture);
};
module.exports = MovieClip;

MovieClip.prototype = Object.create( PIXI.Sprite.prototype );
MovieClip.prototype.constructor = MovieClip;

//===================================================
// VARS
//===================================================

var p = MovieClip.prototype;

/**
 * @type {String}
 * @const
 */
MovieClip.VERSION = "1.1.0";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param {Boolean=} looping
 */
p.play = function(looping) {
	if (typeof looping == "boolean") {
		this.looping = looping;
	}
	this.playing = true;
};

/**
 * @param {Boolean=} looping
 */
p.stop = function(looping) {
	if (typeof looping == "boolean") {
		this.looping = looping;
	}
	this.playing = false;
};

/**
 * @param {!Number|String} frame
 * @param {Boolean=} looping
 */
p.gotoAndPlay = function(frame, looping) {
	if (typeof frame != "string") {
		this._currentFrame = this._lastFrame = frame;
	} else if (this._frames[frame]) {
		this._currentFrame = this._lastFrame = 0;
		this._currentAnimationName = frame;
	}
	if (typeof looping == "boolean") {
		this.looping = looping;
	}
	this.playing = true;
};

/**
 * @param {!Number|String} frame
 * @param {Boolean=} looping
 */
p.gotoAndStop = function(frame, looping) {
	if (typeof frame != "string") {
		this._currentFrame = frame;
	} else if (this._frames[frame]) {
		this._currentFrame = 0;
		this._currentAnimationName = frame;
	}
	if (typeof looping == "boolean") {
		this.looping = looping;
	}
	this.playing = false;

	var frames = this._frames[this._currentAnimationName];
	var round = (this._currentFrame + 0.5) | 0.0;
	this.texture = frames[round % frames.length].texture;
};

/**
 * @param {!String} name
 * @param {!Number} frame
 * @param {!Function|null} callback
 * @param {*=} scope
 */
p.addFrameScript = function(name, frame, callback, scope) {
	scope = scope || window;
	if (this._frames[name]) {
		this._frames[name][frame].callback = callback;
		this._frames[name][frame].scope = callback ? scope : null;
	}
};

/**
 * Updates the object transform for rendering.
 */
p.updateTransform = function() {
    AdditiveSprite.prototype.updateTransform.call(this);

	if (!this.playing) {
		return;
	}

	this._currentFrame += this.animationSpeed;

	var frames = this._frames[this._currentAnimationName];
	var round = (this._currentFrame + 0.5) | 0.0;
	var index = round % (frames.length + 1);

	this._currentFrame = this._currentFrame % frames.length;
	if (index > 0 && index != this._lastFrame) {
		this._lastFrame = index;

		if (frames[index - 1].callback) {
			setTimeout(function() {
				frames[index - 1].callback.call(frames[index - 1].scope);
			}, 0);
		}
	}

	if (this.looping || round < frames.length) {
		this.texture = frames[round % frames.length].texture;
		if (round >= frames.length - 1) {
			this.signalAnimationLooped.dispatch(this._currentAnimationName);
		}
	} else if (round >= frames.length - 1) {
		this.gotoAndStop(frames.length - 1);
		this.signalAnimationFinished.dispatch(this._currentAnimationName);
	}
};

/**
 * @returns {Number}
 */
p.getTotalFrames = function(name) {
	name = name || this.defaultAnimation;
	var frames = this._frames[name];
	return frames ? frames.length : 0;
};

//===================================================
// GETTERS & SETTERS
//===================================================

Object.defineProperty(MovieClip.prototype, "currentFrame", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return this._currentFrame;
	}
});

Object.defineProperty(MovieClip.prototype, "currentAnimationFrame", {
	/**
	 * @returns {String}
	 */
	get: function() {
		return this._currentAnimationName;
	}
});

//===================================================
},{"./../AssetManager":2,"./../Canvas":3,"./../display/AdditiveSprite":7,"./../utils/Utils":48,"./MovieClipSequence":10}],10:[function(require,module,exports){
/**
 *  MovieClipSequence
 *
 *  Created by Legman on 10/11/2014.
 *
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {Array.<PIXI.Texture>=} textures
 * @param {String=} name
 * @constructor
 */
var MovieClipSequence = function(textures, name) {
    /**
     * @type {Object}
     */
    this.textures = {};

    if (textures) {
        this.addTextures(textures, name);
    }
};
module.exports = MovieClipSequence;

//===================================================
// VARS
//===================================================

var p = MovieClipSequence.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param {!Array.<PIXI.Texture>} textures
 * @param {!String} name
 */
p.addTextures = function(textures, name) {
    this.textures[name] = textures;
};

/**
 * @param {!String} name
 */
p.removeTextures = function(name) {
    this.textures[name] = null;
};

/**
 */
p.removeAllTextures = function() {
    this.textures = {};
};

//===================================================
},{}],11:[function(require,module,exports){
/**
 * User: Adam
 * Date: 28/10/2014
 */

var Button          = require( "./Button" );
var AudioManager    = require( "./../audio/AudioManager" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * MuteButton
 * @param {!PIXI.Texture} offNormalTexture
 * @param {!PIXI.Texture} offOverTexture
 * @param {PIXI.Texture} offDownTexture
 * @param {!PIXI.Texture} onNormalTexture
 * @param {!PIXI.Texture} onOverTexture
 * @param {!PIXI.Texture} onDownTexture
 * @class
 * @constructor
 * @extends {PIXI.Container}
 */
var MuteButton = function ( offNormalTexture, offOverTexture, offDownTexture, onNormalTexture,  onOverTexture, onDownTexture ) {
	PIXI.Container.call( this );

	if( !offNormalTexture || !offOverTexture || !onNormalTexture || !onOverTexture ) {
		throw Error( "[p3.MuteButton] You must supply the relevant textures to the button. " );
	}
	/**
	 * @type {Signal.Signal}
	 */
	this.signalClick = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalOver = new signals.Signal();

	/**
	 * @type {AudioManager}
	 * @private
	 */
	this._soundManager = AudioManager.instance;

	/**
	 * @type {Button}
	 * @private
	 */
	this._mutedBtn = new Button( onNormalTexture, onOverTexture, onDownTexture );
	this._mutedBtn.signalClick.add( this._onMuteClick, this );
	this._mutedBtn.signalOver.add( this._onMuteOver, this );
	this.addChild( this._mutedBtn );

	/**
	 * @type {Button}
	 * @private
	 */
	this._unmutedBtn = new Button( offNormalTexture, offOverTexture, offDownTexture );
	this._unmutedBtn.signalClick.add( this._onMuteClick, this );
	this._unmutedBtn.signalOver.add( this._onMuteOver, this );

	this.addChild( this._unmutedBtn );

	this._checkState();
};
module.exports = MuteButton;

MuteButton.prototype = Object.create( PIXI.Container.prototype );
MuteButton.prototype.constructor = MuteButton;

var p = MuteButton.prototype;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 * CleanUp.
 */
p.dispose = function () {
	this.signalClick.removeAll();
	this.signalOver.removeAll();
	this.signalClick = null;
	this.signalOver = null;

	this._mutedBtn.signalClick.removeAll();
	this._mutedBtn.signalOver.removeAll();

    this._mutedBtn.dispose();
	this._mutedBtn = null;

	this._unmutedBtn.signalClick.removeAll();
	this._unmutedBtn.signalOver.removeAll();

    this._unmutedBtn.dispose();
	this._unmutedBtn = null;

	this._soundManager = null;

	this.removeChildren();
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * Checks the state of the mute and shows the correct button.
 * @private
 */
p._checkState = function () {
	if( this._soundManager.isMute ) {
		this._mutedBtn.visible = false;
		this._unmutedBtn.visible = true;
	} else {
		this._mutedBtn.visible = true;
		this._unmutedBtn.visible = false;
	}
};

//===================================================
// EVENTS
//===================================================

/**
 * Called on the mute button click.
 * @private
 */
p._onMuteClick = function () {
	this.signalClick.dispatch();
	this._soundManager.toggleMute();
	this._checkState();
};

/**
 * Over status.
 * @private
 */
p._onMuteOver = function () {
	this.signalOver.dispatch();
};

//===================================================
// GETTERS/SETTERS
//===================================================









},{"./../audio/AudioManager":5,"./Button":8}],12:[function(require,module,exports){
/**
 *  Particle
 *
 *  Created by Legman on 22/04/2014.
 *
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {PIXI.Texture} texture
 * @extends {PIXI.Sprite}
 * @constructor
 */
var Particle = function (texture) {
	PIXI.Sprite.call(this, texture);

	/**
	 * @type {Number}
	 */
	this.currentTime = 0.0;

	/**
	 * @type {number}
	 */
	this.totalTime = 0.0;

	/**
	 * @type {PIXI.Point}
	 */
	this.position = new PIXI.Point();

	/**
	 * @type {PIXI.Point}
	 */
	this.scale = new PIXI.Point();

	/**
	 * @type {PIXI.Point}
	 */
	this.start = new PIXI.Point();

	/**
	 * @type {PIXI.Point}
	 */
	this.velocity = new PIXI.Point();

	/**
	 * @type {Number}
	 */
	this.alpha = 0.0;

	/**
	 * @type {Number}
	 */
	this.rotation = 0.0;

	/**
	 * @type {Number}
	 */
	this.radialAcceleration = 0.0;

	/**
	 * @type {Number}
	 */
	this.tangentialAcceleration = 0.0;

	/**
	 * @type {Number}
	 */
	this.emitRadius = 0.0;

	/**
	 * @type {Number}
	 */
	this.emitRadiusDelta = 0.0;

	/**
	 * @type {Number}
	 */
	this.emitRotation = 0.0;

	/**
	 * @type {Number}
	 */
	this.emitRotationDelta = 0.0;

	/**
	 * @type {Number}
	 */
	this.rotationDelta = 0.0;

	/**
	 * @type {Number}
	 */
	this.scaleDelta = 0.0;

	/**
	 * @type {Number}
	 */
	this.renderDepth = 0;

	/**
	 * @type {Number}
	 */
	this.alphaDelta = 0.0;

	/**
	 * @type {Boolean}
	 */
	this.active = false;

	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
};
module.exports = Particle;

Particle.prototype = Object.create(PIXI.Sprite.prototype);
Particle.prototype.constructor = Particle;

//===================================================
// VARS
//===================================================

/**
 * @type {String}
 * @const
 */
Particle.VERSION = "1.0.0";
},{}],13:[function(require,module,exports){
/**
 *  ParticleSystem
 *
 *  Created by Legman on 22/04/2014.
 *
 */

var AssetManager    = require("./../../AssetManager");
var Particle        = require("./Particle");
var Timestep        = require("./../../Timestep");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!PIXI.Texture | Array.<PIXI.Texture>} texture
 * @param {!JSON} config
 * @param {=Boolean} forceAngle - forces the particle's rotation to be set the the emiter angle.
 * @param {=Boolean} onTop - forces new particles to spawn on top
 * @constructor
 */
var ParticleSystem = function (texture, config, forceAngle, onTop) {
    onTop = (typeof onTop === "boolean" ? onTop : true);

	PIXI.Container.call(this);

	/**
	 * @type {signals.Signal}
	 */
	this.signalCompleted = new signals.Signal();

    /**
     * @type {Number}
     */
    this.emitterType = ParticleSystem.EMITTER_TYPE_GRAVITY;

	/**
	 * @type {PIXI.Point}
	 */
	this.emitter = new PIXI.Point();

    /**
     * @type {PIXI.Point}
     */
    this.emitterVariance = new PIXI.Point();

    /**
     * @type {PIXI.Point}
     */
    this.gravity = new PIXI.Point();

    /**
     * @type {Number}
     */
    this.lifespanVariance = 0.0;

    /**
     * @type {Number}
     */
    this.startSize = 0.0;

    /**
     * @type {Number}
     */
    this.startSizeVariance = 0.0;

    /**
     * @type {Number}
     */
    this.endSize = 0.0;

    /**
     * @type {Number}
     */
    this.endSizeVariance = 0.0;

    /**
     * @type {Number}
     */
    this.emitAngle = 0.0;

    /**
     * @type {Number}
     */
    this.emitAngleVariance = 0.0;

    /**
     * @type {Number}
     */
    this.startRotation = 0.0;

    /**
     * @type {Number}
     */
    this.startRotationVariance = 0.0;

    /**
     * @type {Number}
     */
    this.speedMax = 0.0;

    /**
     * @type {Number}
     */
    this.speedVariance = 0.0;

    /**
     * @type {Number}
     */
    this.endRotation = 0.0;

    /**
     * @type {Number}
     */
    this.endRotationVariance = 0.0;

    /**
     * @type {Number}
     */
    this.radialAcceleration = 0.0;

    /**
     * @type {Number}
     */
    this.radialAccelerationVariance = 0.0;

    /**
     * @type {Number}
     */
    this.tangentialAcceleration = 0.0;

    /**
     * @type {Number}
     */
    this.tangentialAccelerationVariance = 0.0;

    /**
     * @type {Number}
     */
    this.maxRadius = 0.0;

    /**
     * @type {Number}
     */
    this.maxRadiusVariance = 0.0;

    /**
     * @type {Number}
     */
    this.minRadius = 0.0;

    /**
     * @type {Number}
     */
    this.rotatePerSecond = 0.0;

    /**
     * @type {Number}
     */
    this.rotatePerSecondVariance = 0.0;

    /**
     * @type {Number}
     */
    this.startAlpha = 0.0;

    /**
     * @type {Number}
     */
    this.startAlphaVariance = 0.0;

    /**
     * @type {Number}
     */
    this.endAlpha = 0.0;

    /**
     * @type {Number}
     */
    this.endAlphaVariance = 0.0;

	/**
	 * @type {Boolean}
	 */
	this.removeOnComplete = true;

    /**
     * @type {Boolean}
     */
    this.onTop = onTop;

	/**
     * @type {Array.<PIXI.Texture>}
	 * @private
     */
	this._textures = (texture.length == undefined ? [texture] : texture);

	/**
     * @type {Array.<Particle>}
	 * @private
     */
	this._particles = [];

	/**
     * @type {Number}
	 * @private
     */
	this._frameTime = 0.0;

	/**
     * @type {Number}
	 * @private
     */
	this._numParticles = 0;

	/**
     * @type {Number}
	 * @private
     */
	this._maxCapacity = 0;

	/**
	 * @type {Number}
	 * @private
	 */
	this._emissionRate = 0.0;

	/**
     * @type {Number}
	 * @private
     */
	this._emissionTime = 0.0;

	/**
     * @type {Number}
	 * @private
     */
	this._maxNumParticles = 0;

	/**
     * @type {Number}
	 * @private
     */
	this._lifespan = 0.0;

	/**
	 * @type {boolean}
	 * @private
	 */
	this._forceAngle = forceAngle;

	/**
	 * @type {Boolean}
	 * @private
	 */
	this._running = false;

	/**
	 * @type {Number}
	 * @private
	 */
	this._tint = 0xFFFFFF;

	if (typeof this._textures[0] === "string") {
		throw Error("[ParticleSystem] You are passing in strings for the textures instead of actual textures.");
	}

	this._parseConfig(config);
	this._updateEmissionRate();

	if (!ParticleSystem.enabled) return;

	this.maxCapacity = (this._maxNumParticles ? this._maxNumParticles : 8192);
	this._raiseCapacity(this._maxNumParticles || 32);
};
module.exports = ParticleSystem;

ParticleSystem.prototype = Object.create(PIXI.Container.prototype);
ParticleSystem.prototype.constructor = ParticleSystem;
var p = ParticleSystem.prototype;

//===================================================
// VARS
//===================================================

/**
 * @type {String}
 * @const
 */
ParticleSystem.VERSION = "3.0.0";

/**
 * @type {Number}
 * @const
 */
ParticleSystem.EMITTER_TYPE_GRAVITY = 0;

/**
 * @type {Number}
 * @const
 */
ParticleSystem.EMITTER_TYPE_RADIAL = 1;

/**
 * @type {Boolean}
 * @static
 */
ParticleSystem.enabled = true;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param {Number=} duration
 */
p.start = function(duration) {
	if (!ParticleSystem.enabled) return;

	duration = duration || Number.MAX_VALUE;
	if (this._emissionRate != 0.0) {
		this._emissionTime = duration;
	}
	this.running = true;
};

/**
 */
p.stop = function() {
	if (!ParticleSystem.enabled) return;

	this._emissionTime = 0.0;
	this._numParticles = 0;
	this.running = false;
};

/**
 */
p.pause = function() {
	if (!ParticleSystem.enabled) return;

	this._emissionTime = 0.0;
	this.running = false;
};

/**
 */
p.reset = function() {
	if (!ParticleSystem.enabled) return;

	for (var i = 0; i < this._numParticles; ++ i) {
		this._disposeParticle(this._particles[i]);
	}
    this._particles.length = 0;

	this.maxCapacity = 0;
	this._numParticles = 0;
	this.stop();
};

/**
 * Fires off all particles at once. The number of particles is defined in the config file.
 * This stops the particle system streaming.
 */
p.oneShot = function() {
	if (!ParticleSystem.enabled) return;

	this.stop();

	var particle = null;
	for (var i = 0; i < this._numParticles; ++ i) {
		this._disposeParticle(this._particles[i]);
	}
	for (i = 0; i < this.maxCapacity; ++ i) {
		if (this._numParticles == this.capacity) {
			this._raiseCapacity(this.capacity);
		}
		particle = this._particles[this._numParticles ++];
		this._initParticle(particle);
	}
};

/**
 * Simulates a count of particles.
 * @param {Number=} steps - the number of steps to simulate.
 */
p.simulate = function(steps) {
	if (!ParticleSystem.enabled) return;

	steps = steps || 1000;
	for (var i = 0; i < steps; ++ i) {
		this.advance(Timestep.deltaTime);
	}
};

/**
 * @param {Number} delta
 */
p.advance = function(delta) {
	if (!ParticleSystem.enabled) return;

	var particleIndex = 0;
	var particle = null;

	while (particleIndex < this._numParticles) {
		particle = this._particles[particleIndex];
		if (particle.currentTime < particle.totalTime) {
			this._advanceParticle(particle, delta);
		    ++	particleIndex;
		} else {
			if (particleIndex != (this._numParticles - 1)) {
				var nextParticle = this._particles[this._numParticles - 1];
				this._particles[this._numParticles - 1] = particle;
				this._particles[particleIndex] = nextParticle;
			}
			-- this._numParticles;
			this._disposeParticle(particle);

			if (this._numParticles == 0) {
				this.signalCompleted.dispatch(this);

				if (this.removeOnComplete) {
					if (this.parent) this.parent.removeChild(this.parent);
					this.dispose();
				}
			}
		}
	}

	if (this._emissionTime > 0.0) {
		var timeBetweenParticles = 1.0 / this._emissionRate;
		this._frameTime += delta;
		while (this._frameTime > 0) {
			if (this._numParticles < this.maxCapacity) {
				if (this._numParticles == this.capacity) {
					this._raiseCapacity(this.capacity);
				}

				particle = this._particles[this._numParticles ++];
				this._initParticle(particle);
				this._advanceParticle(particle, delta);
			}
			this._frameTime -= timeBetweenParticles;
		}

		if (this._emissionTime != Number.MAX_VALUE) {
			this._emissionTime = Math.max(0.0, this._emissionTime - delta);
		}
	}
};

/**
 */
p.dispose = function() {
	this.signalCompleted.dispose();

	this._textures.length = 0;
	this._particles.length = 0;

	this.removeChildren();
};

/**
 */
p.update = function() {
	this.advance(Timestep.deltaTime);
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * @param {Particle} particle
 * @private
 */
p._initParticle = function(particle) {
	var lifespan = this._lifespan + this.lifespanVariance * (Math.random() * 2.0 - 1.0);
	if (lifespan <= 0.0) {
		return;
	}

	var index = Math.floor(Math.random() * this._textures.length);
	var texture = this._textures[index];
	particle.texture = texture;

	particle.currentTime = 0.0;
	particle.totalTime = lifespan;
	particle.active = true;

	particle.position.x = this.emitter.x + this.emitterVariance.x * (Math.random() * 2.0 - 1.0);
	particle.position.y = this.emitter.y + this.emitterVariance.y * (Math.random() * 2.0 - 1.0);
	particle.start.x =  this.emitter.x;
	particle.start.y = this.emitter.y;

	var angle = this.emitAngle + this.emitAngleVariance * (Math.random() * 2.0 - 1.0);
	var speed = this.speedMax + this.speedVariance * (Math.random() * 2.0 - 1.0);
	particle.velocity.x = speed * Math.cos(angle);
	particle.velocity.y = speed * Math.sin(angle);

	particle.emitRadius = this.maxRadius + this.maxRadiusVariance * (Math.random() * 2.0 - 1.0);
	particle.emitRadiusDelta = this.maxRadius / lifespan;
	particle.emitRotation = this.emitAngle + this.emitAngleVariance * (Math.random() * 2.0 - 1.0);
	particle.emitRotationDelta = this.rotatePerSecond + this.rotatePerSecondVariance * (Math.random() * 2.0 - 1.0);
	particle.radialAcceleration = this.radialAcceleration + this.radialAccelerationVariance * (Math.random() * 2.0 - 1.0);
	particle.tangentialAcceleration = this.tangentialAcceleration + this.tangentialAccelerationVariance * (Math.random() * 2.0 - 1.0);

	var startSize = this.startSize + this.startSizeVariance * (Math.random() * 2.0 - 1.0);
	var endSize = this.endSize + this.endSizeVariance * (Math.random() * 2.0 - 1.0);
	startSize = Math.max(0.1, startSize);
	endSize = Math.max(0.1, endSize);

	particle.scale.x = particle.scale.y = (startSize / texture.width) * AssetManager.instance.scaleFactor;
	particle.scaleDelta = ((endSize - startSize) / lifespan) / texture.width;

	if (!this._forceAngle) {
		var startRotation = this.startRotation + this.startRotationVariance * (Math.random() * 2.0 - 1.0);
		var endRotation = this.endRotation + this.endRotationVariance * (Math.random() * 2.0 - 1.0);
		particle.rotation = startRotation;
		particle.rotationDelta = (endRotation - startRotation) / lifespan;
	} else {
		particle.rotation = angle + (90.0 * 0.017453293);
		particle.rotationDelta = 0.0;
	}

	var startAlpha = this.startAlpha;
	var endAlpha = this.endAlpha;
	if (this.startAlphaVariance != 0) {
		startAlpha += this.startAlphaVariance * (Math.random() * 2.0 - 1.0);
	}
	if (this.endAlphaVariance != 0) {
		endAlpha += this.endAlphaVariance * (Math.random() * 2.0 - 1.0);
	}
	particle.alpha = startAlpha;
	particle.alphaDelta = (endAlpha - startAlpha) / lifespan;

	particle.tint = this._tint;

    if (this.onTop) {
        this.addChild(particle);
    } else {
        this.addChildAt(particle, 0);
    }
};

/**
 * @param {Particle} particle
 * @private
 */
p._disposeParticle = function(particle) {
	particle.active = false;
	this.removeChild(particle);
};

/**
 * @param {Particle} particle
 * @param {Number} delta
 * @private
 */
p._advanceParticle = function(particle, delta) {
	var restTime = particle.totalTime - particle.currentTime;
	delta = (restTime > delta ? delta : restTime);
	particle.currentTime += delta;

	if (this.emitterType == ParticleSystem.EMITTER_TYPE_RADIAL) {
		particle.emitRotation += particle.emitRotationDelta * delta;
		particle.emitRadius -= particle.emitRadiusDelta * delta;
		particle.position.x = this.emitter.x - Math.cos(particle.emitRotation) * particle.emitRadius;
		particle.position.y = this.emitter.y - Math.sin(particle.emitRotation) * particle.emitRadius;
		if (particle.emitRadius < this.minRadius) {
			particle.currentTime = particle.totalTime;
		}
	} else if (this.emitterType == ParticleSystem.EMITTER_TYPE_GRAVITY) {
		var distanceX = particle.position.x - particle.start.x;
		var distanceY = particle.position.y - particle.start.y;
		var distanceScalar = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
		distanceScalar = Math.max(0.01, distanceScalar);

		var radialX = distanceX / distanceScalar;
		var radialY = distanceY / distanceScalar;
		var tangentialX = radialX;
		var tangentialY = radialY;
		radialX *= particle.radialAcceleration;
		radialY *= particle.radialAcceleration;

		tangentialX = -tangentialY * particle.tangentialAcceleration;
		tangentialY = tangentialX * particle.tangentialAcceleration;

		particle.velocity.x += delta * (this.gravity.x + radialX + tangentialX);
		particle.velocity.y += delta * (this.gravity.y + radialY + tangentialY);
		particle.position.x += particle.velocity.x * delta;
		particle.position.y += particle.velocity.y * delta;
	}

	particle.scale.x = particle.scale.y = particle.scale.x + particle.scaleDelta * delta;
	particle.alpha += particle.alphaDelta * delta;
	if (!this._forceAngle) {
		particle.rotation += (particle.rotationDelta * 0.017453293) * delta;
	}
};

/**
 * @private
 */
p._updateEmissionRate = function() {
	this._emissionRate = this._maxNumParticles / this._lifespan;
};

/**
 * @param {!JSON} config
 * @private
 */
p._parseConfig = function(config) {
	if (config == undefined) {
		throw new Error("Config is invalid!");
	}
	var deg2rad = 0.017453293;
    this.emitterVariance.x = config["sourcePositionVariancex"];
    this.emitterVariance.y = config["sourcePositionVariancey"];
    this.gravity.x = config["gravityx"];
    this.gravity.y = config["gravityy"];
    this.emitterType = config["emitterType"];
    this.maxNumParticles = config["maxParticles"];
    this.lifeSpan = config["particleLifespan"];
    this.lifespanVariance = config["particleLifespanVariance"];
    this.startSize = config["startParticleSize"];
    this.startSizeVariance = config[ "startParticleSizeVariance"];
    this.endSize = config["finishParticleSize"];
    this.endSizeVariance = config["finishParticleSizeVariance"];
    this.emitAngle = -config["angle"] * deg2rad;
    this.emitAngleVariance = config["angleVariance"] * deg2rad;
    this.startRotation = config["rotationStart"];
    this.startRotationVariance = config["rotationStartVariance"];
    this.endRotation = config["rotationEnd"];
    this.endRotationVariance = config["rotationEndVariance"];
    this.speedMax = config["speed"];
    this.speedVariance = config["speedVariance"];
    this.radialAcceleration = config["radialAcceleration"];
    this.radialAccelerationVariance = config["radialAccelVariance"];
    this.tangentialAcceleration = config["tangentialAcceleration"];
    this.tangentialAccelerationVariance = config["tangentialAccelVariance"];
    this.maxRadius = config["maxRadius"];
    this.maxRadiusVariance = config["maxRadiusVariance"];
    this.minRadius = config["minRadius"];
    this.rotatePerSecond = config["rotatePerSecond"] * deg2rad;
    this.rotatePerSecondVariance = config["rotatePerSecondVariance"] * deg2rad;
    this.startAlpha = config["startColorAlpha"];
    this.startAlphaVariance = config["startColorVarianceAlpha"];
    this.endAlpha = config["finishColorAlpha"];
    this.endAlphaVariance = config["finishColorVarianceAlpha"];
};

/**
 * @param {Number} amount
 * @private
 */
p._raiseCapacity = function(amount) {
	var oldCapacity = this.capacity;
	var newCapacity = Math.min(this.maxCapacity, oldCapacity + amount);
	for (var i = oldCapacity; i < newCapacity; ++ i) {
		this._particles[i] = new Particle(this._textures[0]);
	}
};

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS & SETTERS
//===================================================

Object.defineProperty(ParticleSystem.prototype, "capacity", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._particles.length;
    }
});

Object.defineProperty(ParticleSystem.prototype, "maxCapacity", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._maxCapacity;
    },
    /**
     * @param {Number} value
     */
    set: function(value) {
        this._maxCapacity = Math.min(8192, value);
    }
});

Object.defineProperty(ParticleSystem.prototype, "maxNumParticles", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._maxNumParticles;
    },
    /**
     * @param {Number} value
     */
    set: function(value) {
        this.maxCapacity = value;
        this._maxNumParticles = this.maxCapacity;
        this._updateEmissionRate();
    }
});

Object.defineProperty(ParticleSystem.prototype, "lifeSpan", {
    /**
     * @returns {Number}
     */
    get : function() {
        return this._lifespan;
    },
    /**
     * @param {Number} value
     */
    set : function(value) {
        this._lifespan = Math.max(0.01, value);
        this._updateEmissionRate();
    }
});

Object.defineProperty(ParticleSystem.prototype, "running", {
	/**
	 * @returns {Boolean}
	 */
	get: function() {
		return this._running;
	}
});

Object.defineProperty(ParticleSystem.prototype, "tint", {
	/**
	 * @returns {Number}
	 */
	get : function() {
		return this._tint;
	},
	/**
	 * @param {Number} value
	 */
	set : function(value) {
		this._tint = value;

		var particle;
		for (var i = 0; i < this._particles.length; ++ i) {
			particle = this._particles[i];
			particle.tint = this._tint;
		}
	}
});

//===================================================
},{"./../../AssetManager":2,"./../../Timestep":4,"./Particle":12}],14:[function(require,module,exports){
/**
 * User: Adam *
 *
 * ----------------------------------
 * Changelog:
 * ----------------------------------

 */

var ScreenParams = require( './ScreenParams' );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Screen. A container for anything.
 * @class
 * @extends {PIXI.Container}
 * @constructor
 */
var Screen = function ( ) {
	PIXI.Container.call( this );

	/**
	 * @type {string}
	 * */
	this.guid = '';

	/**
	 * @type {string}
	 * */
	this.group = '';

	/**
	 * @type {ScreenParams}
	 */
	this.params = null;

	// blocks the ability to click through the screen.
	//this.on( 'click', function () {} );
};
module.exports = Screen;

Screen.prototype = Object.create( PIXI.Container.prototype );
Screen.prototype.constructor = Screen;
var p = Screen.prototype;

//===================================================
// STATICS
//===================================================

/**
 * @const
 * @type {string}
 * */
Screen.VERSION = '03.00.00';


//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Called when the Screen is added to the Stage. Can be overridden to "initialise" the Screen when it is added.
 */
p.added = function () {
	// Do stuff.
};

/**
 * Called after the screen has been added to the stage and all Transitions have completed.
 */
p.activate = function () {
	// Do stuff.
};

/**
 * Called When the screen is ready to use and should be hooked up the the orientation change event.
 */
p.resize = function () {

};

/**
 * Disposes of the Screen
 */
p.dispose = function () {
	this.removeChildren();
	this.guid = '';
	this.group = null;
	this.params = null;
};

/**
 * Can be used to set up an update loop. Need to be manually set up.
 * @param {number=} delta
 */
p.update = function ( delta ) {
};


//===================================================
// PRIVATE METHODS
//===================================================


//===================================================
// EVENTS
//===================================================  



//===================================================
// GETTERS/SETTERS
//===================================================
},{"./ScreenParams":17}],15:[function(require,module,exports){
/**
 * User: Adam
 *
 * Reintroduced the screenGroup but this time is more of a data object to keep things simple.
 * All login is still done in the ScreenManager.
 *
 * ----------------------------------------------
 * Changelog:
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * ScreenGroup
 * @class
 * @constructor
 * @extends {PIXI.Container}
 */
var ScreenGroup = function ( name, depth ) {
	PIXI.Container.call( this );

	/**
	 * @type {string}
	 * */
	this.name = name;

	/**
	 * @type {number}
	 * */
	this._depth = depth;

	/**
	 * @type {Array.<Screen>}
	 * */
	this.screenArr = [];
};
module.exports = ScreenGroup;

ScreenGroup.prototype = Object.create( PIXI.Container.prototype );
ScreenGroup.prototype.constructor = ScreenGroup;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 * */
ScreenGroup.VERSION = '03.00.00';

var p = ScreenGroup.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================

/**
 * Gets the depth
 * @returns {number}
 */
p.getDepth = function () {
	var parent = this.parent;
	if ( parent && parent.children ) {
		this._depth = parent.children.indexOf( this );
	}
	return this._depth;
};

/**
 * @param {number} value
 */
p.setDepth = function (value ) {
	this._depth = value;

};







},{}],16:[function(require,module,exports){
/**
 * User: Adam
 *
 * How it works:
 * The screenManager has a container that 'groups'. These groups are also containers and their screen are stores in a data array.
 *
 *
 * ----------------------------------------------
 * Changelog:
 * ----------------------------------------------
 *
 */

var ScreenGroup     = require( "./ScreenGroup" );
var Screen          = require( "./Screen" );
var ScreenParams    = require( "./ScreenParams" );
var Transition      = require( "./transitions/Transition" );
var Utils           = require( "./../../utils/Utils" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * ScreenManager
 * @class
 * @constructor
 */
var ScreenManager = function () {
	if ( !ScreenManager.__allowInstance ) {
		throw new Error( "ScreenManager is a Singleton, use 'instance'." );
	}

	/**
	 * @const
	 * @type {string}
	 * */
	this.DEFAULT_GROUP = "group_default";

	/**
	 * @type {PIXI.Container}
	 * */
	this._view = null;

	/**
	 * @type {PIXI.Container}
	 * */
	this._stage = null;

	/**
	 * @type {*}
	 * */
	this._renderer = null;

	/**
	 * @type {Object.<ScreenGroup>} Contains an array of Screens
	 * */
	this._groups = {};

	/**
	 * An array that holds the groups for faster iteration.
	 * @type {Array.<ScreenGroup>}
	 * @private
	 */
	this._groupsArr = [];

	/**
	 * @type {boolean}
	 * @private
	 */
	this._isTransitioning = false;
};

module.exports = ScreenManager;

//ScreenManager.constructor = ScreenManager;

/**
 * Returns and instance of the ScreenManager.
 * @type {ScreenManager}
 * @memberOf! ScreenManager
 * @returns {ScreenManager}
 */
Object.defineProperty( ScreenManager, 'instance', {
	/**
	 * @type {ScreenManager}
	 * */
	get : function () {
		if ( !ScreenManager.__instance ) {
			ScreenManager.__allowInstance    = true;
			ScreenManager.__instance         = new ScreenManager();
			ScreenManager.__allowInstance    = false;
		}
		return ScreenManager.__instance;
	}
} );

/**
 * This is the instance of the ScreenManager.
 * @type {ScreenManager}
 * @private
 */
ScreenManager.__instance = null;

/**
 * @type {boolean}
 * @private
 */
ScreenManager.__allowInstance = false;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 */
ScreenManager.VERSION = '03.00.00';

var p = ScreenManager.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Added the ScreenManager display to the supplied displayObject.
 * @param {PIXI.Stage} stage - Add teh ScreenManager to the stage.
 * @param {*} renderer - The renderer to get the width and height..
 */
p.init = function ( stage, renderer ) {
	this._groups = {};
	this._groupsArr = [];

	this._stage = stage;
	this._renderer = renderer;
	this._view = new PIXI.Container();
	this._stage.addChild( this._view );
	this.addScreenGroup( this.DEFAULT_GROUP, 0 );
};

/**
 * Creates a P3ScreenGroup. This is used to layer and organise screens. e.g. separate UI from game screens.
 * @param {string} groupName
 * @param {int=} depth = 0.
 * @return {ScreenGroup}
 */
p.addScreenGroup = function ( groupName, depth ) {
	if ( !this._view || !this._stage ) {
		throw new Error( '[ScreenManager.addScreenGroup] Error - The view/stage has not been set. Do that via "init" before adding screen groups.' );
	}

	if ( this._groups[ groupName ] ) {
		throw Error( '[ScreenManager.addScreenGroup] The group already exists: ' + groupName ); // this could be a warning but can also cause bad errors so leaving as an error.
	} else {
		depth = this._calculateDepth( depth );

		var screengroup = new ScreenGroup( groupName, depth );
		this._view.addChildAt( screengroup, screengroup.getDepth() );
		this._groups[ groupName ] = screengroup;
		this._groupsArr.push( screengroup );
		return screengroup;
	}
};

/**
 * Changes the ScreenGroups depth.
 * @param {!string} groupName
 * @param {!number} depth
 */
p.changeScreenGroupDepth = function ( groupName, depth ) {
	var group = this._groups[ groupName ];
	if ( !group ) {
		throw Error( '[ScreenManager.changeScreenGroupDepth] Error - The screengroup does not exist: ' + groupName );
	} else {
		var newDepth = this._calculateDepth( depth );
		this._view.addChildAt( group, newDepth );
	}
};

/**
 * Removes a P3ScreenGroup from the ScreenGroup and from the ScreenManager.
 * @param {!string} groupName - name of the group to be removed.
 */
p.removeScreenGroup = function ( groupName ) {
	var screengroup = this._groups[ groupName ];
	if ( !screengroup ) {
		throw Error( '[ScreenManager.removeScreenGroup] Error - The screengroup does not exist: ' + groupName );
	} else {
		for ( var i = 0; i < screengroup.screenArr.length; i += 1 ) {
			var screen = screengroup.screenArr[ i ];
			this._removeScreenFromGroup( null, screen, screengroup );
		}
		screengroup.screenArr = [];
		screengroup.removeChildren();

		delete this._groups[ groupName ];

		var index = this._groupsArr.indexOf( screengroup );
		this._groupsArr.splice( index, 1 );
	}
};

/**
 * Adds a screen the the P3ScreenManager with the following optional parameters.
 * @param {!Screen}  screen - the screen to be added.
 * @param {ScreenParams=}  params - the screen params.
 * @returns {Screen}
 */
p.addScreen = function ( screen, params ) {
	params = params || new ScreenParams();

	if ( !this._groups[ this.DEFAULT_GROUP ] ) {
		throw new Error( '[ScreenManager.addScreen] Error - There is no default group. Maybe you have not yet called "init" before adding screen the screen.' );
	}

	if ( !screen ) {
		throw Error( '[ScreenManager.addScreen] Error - The screen you are adding is null.' );
	}

	// TODO: warn if the user is adding a screen whilst a transition is occurring and the screen will be removed at the end.
	//if( this._isTransitioning ) {
	//	console.warn( '[ScreenManager.addScreen] A Screen is currently transitioning whilst you are adding a new screen. Best to do it before or after.' );
	//}

	var groupName = params._group || this.DEFAULT_GROUP;
	if ( groupName && !this._groups[ groupName ] ) {
		throw Error( '[ScreenManager.addScreen] Error - The group does not exist: ' + groupName );
	}

	screen.guid = Utils.generateGUID();
	screen.group = groupName;
	screen.params = params;

	if ( !params._transition ) {
		this._doReplacements( screen );
		this._displayScreen( screen );
	} else {
		this._transitionScreens( screen, params._transition );
	}
	return screen;
};

/**
 * Removes the screen from the ScreenGroup and from the ScreenManager.
 * @param {!Screen} screen - the screen to be removed.
 */
p.removeScreen = function ( screen ) {
	if ( !screen ) {
		throw Error( '[ScreenManager.removeScreen] Error - The screen is null. ' + screen );
	} else {
		this._removeScreenFromGroup( null, screen, this.getScreenGroup( screen.group ) );
	}
};

/**
 * Removes the current/highest screen from the group.
 * @param {!string} groupName.
 * @param {Screen=} newscreen.
 */
p.removeCurrentScreenFromGroup = function ( groupName, newscreen ) {
	if ( !groupName || !this._groups[ groupName ] ) {
		throw Error( '[ScreenManager.removeCurrentScreen] Error - You must supply a valid group name: ' + groupName );
	}
	var screengroup = this._groups[ groupName ];
	var screenCount = screengroup.children.length;
	if ( screenCount > 0 ) {
		var currentScreen = screengroup.getChildAt( screenCount - 1 );
		// no newscreen supplied, just remove the current.
		if( !newscreen ) {
			this._removeScreenFromGroup( null, currentScreen, screengroup );
		} else {
			// newscreen suplied.
			if( currentScreen !== newscreen ) {
				// it does not match so remove the current.
				this._removeScreenFromGroup( null, currentScreen, screengroup );
			} else if ( currentScreen === newscreen ) {
				// it matches the current so see if there is a previous screen
				try {
					currentScreen = screengroup.getChildAt( screenCount - 2 );
					if( currentScreen ) {
						this._removeScreenFromGroup( null, currentScreen, screengroup );
					}
				} catch( e ){
					// there is no current screen.
				}
			}

		}
	}
};

/**
 * Removes all the screens.
 */
p.removeAllScreens = function () {
	for ( var key in this._groups ) {
		if ( this._groups.hasOwnProperty( key ) ) {
			var group = this._groups[ key ];
			for ( var i = 0; i < group.screenArr.length; i++ ) {
				var obj = group[ i ];
				this.removeScreen( group.screenArr[ i ] );
			}
		}
	}
};

/**
 * Garbage Collection.
 */
p.dispose = function () {
	for ( var key in this._groups ) {
		if ( this._groups.hasOwnProperty( key ) ) {
			this.removeScreenGroup( key );
		}
	}
	this._groupsArr = null;
	this._groups = null;
	this._view = null;
	this._stage = null;

	ScreenManager.__instance = null;
};

/**
 * Updates all the screens with a dela if called.
 */
p.update = function () {
	for ( var i = 0, len = this._groupsArr.length; i < len; i++ ) {
		var group = this._groupsArr[ i ];
		for ( var j = 0, len2 = group.screenArr.length; j < len2; j++ ) {
			group.screenArr[ j ].update();
		}
	}
};

/**
 * Called resize on all screen.
 */
p.resize = function () {
	for ( var i = 0, len = this._groupsArr.length; i < len; i++ ) {
		var group = this._groupsArr[ i ];
		for ( var j = 0, len2 = group.screenArr.length; j < len2; j++ ) {
			group.screenArr[ j ].resize();
		}
	}
};

/**
 * Returns a bool if the ScreenManager contains the screen or not.
 * @param {!Screen} screen.
 * @returns {boolean}
 */
p.contains = function ( screen ) {
	var containsScreen = false;
	for ( var key in this._groups ) {
		if ( this._groups.hasOwnProperty( key ) ) {
			var group = this._groups[ key ];
			for ( var i = 0; i < group.screenArr.length; i += 1 ) {
				var tempScreen = group.screenArr[ i ];
				if ( screen === tempScreen ) {
					containsScreen = true;
					break;
				}
			}
		}
	}
	return containsScreen;
};

//===================================================
// PRIVATE METHODS
//===================================================

/**
 * Returns the depth.
 * @param {!number} depth
 * @returns {number}
 * @private
 */
p._calculateDepth = function ( depth ) {
	var highestGroupDepth = this.getHighestGroupDepth();
	if ( typeof depth === "undefined" ) {
		depth = highestGroupDepth;
	} else if ( depth > highestGroupDepth ) {
		depth = highestGroupDepth;
	} else if ( depth < 0 ) {
		depth = 0;
	}
	return depth;
};

/**
 * Replaces the screens and groups specified in the 'addScreen' method.
 * @param {Screen} screen
 * @private
 */
p._doReplacements = function ( screen ) {
	var i, j, otherScreen, screengroup;

	var replaceScreensArr = screen.params._replaceScreens;
	var replaceGroupsArr = screen.params._replaceGroups;

	// Replace Screen.
	if ( replaceScreensArr.length > 0 ) {
		for ( i = 0; i < replaceScreensArr.length; i += 1 ) {
			otherScreen = replaceScreensArr[ i ];
			if ( screen === otherScreen ) {
				throw Error( '[ScreenManager.addScreen] Error - You are trying to remove the screen you are adding: ' + otherScreen );
			} else {
				this.removeScreen( otherScreen );
			}
		}
	}

	// Replace groups.
	if ( screen.params._replaceGroups.length > 0 ) {
		for ( i = 0; i < replaceGroupsArr.length; i += 1 ) {
			screengroup = this._groups[ replaceGroupsArr[ i ] ];

			// Commented this out because i think the group remains so you can empty it and then your screen is added to it.

			//if ( screen.params._group === screengroup.name ) {
			//	throw Error( '[ScreenManager.addScreen] Error - You are trying to remove the screen but the group specified does not contain the screen: ' + screengroup.name );
			//} else {
				for ( j = 0; j < screengroup.screenArr.length; j += 1 ) {
					otherScreen = screengroup.screenArr[ j ];
					this._removeScreenFromGroup( screen, otherScreen, screengroup );
				}
			//}
		}
	}

	// Replace current screen.
	if ( screen.params._replaceCurrent ) {
		this.removeCurrentScreenFromGroup( screen.group, screen );
	}

	// Replace all.
	if ( screen.params._replaceAll ) {
		for ( var key in this._groups ) {
			if ( this._groups.hasOwnProperty( key ) ) {
				screengroup = this._groups[ key ];


				for ( i = screengroup.screenArr.length - 1; i >= 0; i-=1  ) {
					otherScreen = screengroup.screenArr[ i ];
					this._removeScreenFromGroup( screen, otherScreen, screengroup );
				}
			}
		}
	}
};

/**
 * Removes a screen from a group.
 * @param {!Screen} screen
 * @param {!Screen} otherScreen
 * @param {!ScreenGroup} screengroup
 * @private
 */
p._removeScreenFromGroup = function ( screen, otherScreen, screengroup ) {
	if ( !otherScreen ) {
		throw Error( '[ScreenManager._removeScreenFromGroup] Error - The screen does not exist: ' + otherScreen );
	} else if ( !screengroup ) {
		throw Error( '[ScreenManager._removeScreenFromGroup] Error - The screengroup does not exist: ' + screengroup.name );
	} else {
		if ( !screengroup.screenArr ) {
			throw Error( '[ScreenManager._removeScreenFromGroup] Error - The screengroup does not have a valid scrennArray: ' + screengroup.name );
		} else {
			if ( otherScreen !== screen ) {
				var index = screengroup.screenArr.indexOf( otherScreen );
				if ( index === -1 ) {
					throw Error( '[ScreenManager._removeScreenFromGroup] Error - The group does not contain the screen. Group=' + screengroup.name );
				} else {

					otherScreen.dispose();
					otherScreen.removeChildren();

					screengroup.screenArr.splice( index, 1 );
					screengroup.removeChild( otherScreen );
				}
			}
		}
	}
};

/**
 * Displays the screen.
 * @param {!Screen} screen
 * @param {boolean?} transitioning
 * @private
 */
p._displayScreen = function ( screen, transitioning ) {
	var screenGroup = this._groups[ screen.group ];
	screenGroup.addChild( screen );
	screenGroup.screenArr.push( screen );

	// call 'added' to tell the screen it is now being displayed.
	screen.added();
    screen.resize();

	// if there is no transitions, activ-ate the screen, otherwise it will be activated after the transition is complete.
	if ( !transitioning ) {
		screen.activate();
	}
};

/**
 * Starts the transition between screen if a transition is present.
 * @param {!Screen}     screen
 * @param {!transitions.Transition} transition
 * @private
 */
p._transitionScreens = function ( screen, transition ) {
	this._isTransitioning = true;
	transition.signalTransitionInComplete.addOnce( this._onTransitionInComplete, this );
	transition.signalTransitionOutComplete.addOnce( this._onTransitionOutComplete, this );

	transition.oldScreen = this.getCurrentScreen( screen.group );
	transition.screen = screen;

	if ( transition.onTopofAllScreens ) {
		this._view.addChild( transition );
	}
	transition.transitionIn();
};

//===================================================
// EVENTS
//===================================================

/**
 * Called from the transition when the new screen has been added.
 * @param {transitions.Transition} transition
 * @private
 */
p._onTransitionInComplete = function ( transition ) {
	if ( !transition.doReplacementsAtEnd ) {
		this._doReplacements( transition.screen );
	}
	this._displayScreen( transition.screen, true );

	transition.transitionOut();
};

/**
 * Called from the transition when it has finished its transition out.
 * @param {transitions.Transition} transition
 * @private
 */
p._onTransitionOutComplete = function ( transition ) {
	if ( transition.doReplacementsAtEnd ) {
		this._doReplacements( transition.screen );
	}

	if ( transition.onTopofAllScreens ) {
		this._view.removeChild( transition );
	}

	this._isTransitioning = false;
	transition.screen.activate();
	transition.dispose();
};

//===================================================
// GETTERS/SETTERS
//===================================================

/**
 * Returns the stage.
 * @returns {PIXI.Stage}
 */
p.getStage = function () {
	return this._stage;
};

/**
 * Returns the REnderer.
 * @returns {PIXI.WebGLRenderer}
 */
p.getRenderer = function () {
	return this._renderer;
};

/**
 * Returns the view.
 * @returns {PIXI.Container}
 */
p.getView = function () {
	return this._view;
};

/**
 * Returns the highest depth of the P3ScreenManager.
 * @return {number}
 */
p.getHighestGroupDepth = function () {
	return this._view.children.length;
};

/**
 * Returns an Array of the screen in a group.
 * @param {!string} groupName - name of the group.
 * @return {ScreenGroup}
 */
p.getScreenGroup = function ( groupName ) {
	var group = this._groups[ groupName ];
	if ( !group ) {
		throw Error( '[ScreenManager.getScreenGroup] The group does not exist: ' + groupName + '. Maybe the screen is not the correct.' );
	} else {
		return group;
	}
};

/**
 * Returns the currentScreen.
 * @returns {Screen}
 */
p.getCurrentScreen = function ( groupName ) {
	if ( !groupName || !this._groups[ groupName ] ) {
		throw Error( '[ScreenManager.getCurrentScreen] Error - The screen group is invalid: ' + groupName );
	}

	var group = this._groups[ groupName ];
	if ( group.children.length > 0 ) {
		return group.getChildAt( group.children.length - 1 );
	} else {
		return null;
	}
};

/**
 * Returns an array of all the screens.
 * @returns {Array.<Screen>}
 */
p.getAllScreens = function () {
	var arr = [];
	for ( var key in this._groups ) {
		if ( this._groups.hasOwnProperty( key ) ) {
			var group = this._groups[ key ];
			for ( var i = 0, len = group.screenArr.length; i < len; i++ ) {
				var tempScreen = group.screenArr[ i ];
				arr.push( tempScreen );
			}
		}
	}
	return arr;
};

/**
 * @returns {Object.<ScreenGroup>}
 */
p.getAllGroups = function () {
	return this._groups;
};


},{"./../../utils/Utils":48,"./Screen":14,"./ScreenGroup":15,"./ScreenParams":17,"./transitions/Transition":22}],17:[function(require,module,exports){
/**
 * User: Adam
 */


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * ScreenParams
 * @class
 * @constructor
 */
var ScreenParams = function () {
	/**
	 * @type {string}
	 */
	this._group = '';

	/**
	 * @type {boolean}
	 */
	this._replaceCurrent = false;

	/**
	 * @type {boolean}
	 */
	this._replaceAll = false;

	/**
	 * @type {Array.<string>}
	 */
	this._replaceGroups = [];

	/**
	 * @type {Array.<Screen>}
	 */
	this._replaceScreens = [];

	/**
	 * @type {Transition}
	 */
	this._transition = null;

	this.setReset();
};
module.exports = ScreenParams;

//===================================================
// VARS
//===================================================

var p = ScreenParams.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Resets the params.
 */
ScreenParams.prototype.setReset = function () {
	this._group = '';
	this._replaceCurrent = false;
	this._replaceAll = false;
	this._replaceGroups = [];
	this._replaceScreens = [];
	this._transition = null;
};


ScreenParams.prototype.group = function ( group ) {
	this._group = group;
	return this;
};

/**
 * If set replaces the current screen.
 * @returns {ScreenParams}
 */
ScreenParams.prototype.replaceCurrent = function () {
	this._replaceCurrent = true;
	return this;
};

/**
 * If set replaces all the screen.
 * @returns {ScreenParams}
 */
ScreenParams.prototype.replaceAll = function () {
	this._replaceAll = true;
	return this;
};

/**
 * If set replaces the groups specified.
 * @param {!Array.<string>} groupsArray
 * @returns {ScreenParams}
 */
ScreenParams.prototype.replaceGroups = function ( groupsArray ) {
	this._replaceGroups = groupsArray;
	return this;
};

/**
 * If set replaces the groups specified.
 * @param {!Array.<Screen>} screensArray
 * @returns {ScreenParams}
 */
ScreenParams.prototype.replaceScreen = function ( screensArray ) {
	this._replaceScreens = screensArray;
	return this;
};

/**
 * If set replaces the groups specified.
 * @param {transitions.Transition} transition
 * @returns {ScreenParams}
 */
ScreenParams.prototype.transition = function ( transition ) {
	this._transition = transition;
	return this;
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================









},{}],18:[function(require,module,exports){
/**
 * User: Adam *
 * Date: 26/06/13
 *
 * ----------------------------------------------
 * Changelog:
 *
 * ----------------------------------------------
 * Version 01.00.00 - adam
 * - New
 */

var Transition 		= require( './Transition' );
var ScreenManager 	= require( './../ScreenManager' );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * AlphaFade
 * @param {number=} duration - length of the transition in seconds.
 * @param {number=} delay - Time to delay the color.
 * @param {String=} type - length of the transition in seconds.
 * @class
 * @constructor
 * @extends Transition;
 */
var AlphaFade = function ( duration, delay, type ) {
	Transition.call( this );

	/** @type {Boolean} */
	this.onTopofAllScreens = false;

	/** @type {Number} */
	this._duration = duration || 1;

	/** @type {Number} */
	this._delay = delay || 0;

	/** @type {String} */
	this.transitionType = type || Transition.TRANSITION_IN_ONLY;

	if( this.transitionType === Transition.TRANSITION_IN_ONLY ){
		this.doReplacementsAtEnd = true;
	}
};
module.exports = AlphaFade;

AlphaFade.prototype = Object.create( Transition.prototype );
AlphaFade.prototype.constructor = AlphaFade;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 * */
AlphaFade.VERSION = '01.00.00';

var p = AlphaFade.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Called to start the Tranistion. *MUST dispatch the 'READY' event when done.
 * @override
 */
p.transitionIn = function () {
	this.screen.alpha = 0.0;

	switch ( this.transitionType ) {
		case Transition.TRANSITION_IN_ONLY:
			this.signalTransitionInComplete.dispatch( this );
			break;

		case Transition.TRANSITION_CROSS:
			if ( !this.oldScreen ) {
				throw Error( '[AlphaFade] You are transitioning out but there is no oldScreen. ' );
			}

			// fade out the OLD screen.
			TweenMax.to( this.oldScreen, this._duration * 0.5, {
				delay           : this._delay,
				alpha           : 0.0,
				ease            : Power2.easeIn,
				onComplete      : function () {
					this.signalTransitionInComplete.dispatch( this );
				},
				onCompleteScope : this
			} );

			break;
	}
};

/**
 * Called to end the Transtion. *MUST dispatch the 'COMPLETE' event when done.
 * @override
 */
p.transitionOut = function () {

	switch ( this.transitionType ) {
		case Transition.TRANSITION_IN_ONLY:
			TweenMax.to( this.screen, this._duration, {
				delay           : this._delay,
				alpha           : 1.0,
				ease            : Power2.easeOut,
				onComplete      : function () {
					this.signalTransitionOutComplete.dispatch( this );
				},
				onCompleteScope : this
			} );
			break;

		case Transition.TRANSITION_CROSS:
			this.screen.alpha = 0.0;

			// fade in the newScreen.
			TweenMax.to( this.screen, this._duration * 0.5, {
				delay           : 0,
				alpha           : 1.0,
				ease            : Power1.easeOut,
				onComplete      : function () {
					this.signalTransitionOutComplete.dispatch( this );
				},
				onCompleteScope : this
			} );
			break;
	}

};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================
















},{"./../ScreenManager":16,"./Transition":22}],19:[function(require,module,exports){
/**
 * User: Adam *
 * Date: 26/06/13
 *
 * ----------------------------------------------
 * Changelog:
 *
 * ----------------------------------------------
 * Version 01.00.00 - adam
 * - New
 */

var Transition 		= require( './Transition' );
var ScreenManager 	= require( './../ScreenManager' );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * ColorFade
 * @param {number=} duration - length of the transition in seconds.
 * @param {String=} color - color of the transition.
 * @param {number=} pauseTime - Time to hold the color.
 * @param {number=} delay - Time to delay the color.
 * @param {String=} type - length of the transition in seconds.
 * @class
 * @constructor
 * @extends Transition;
 */
var ColorFade = function ( duration, color, pauseTime, delay, type ) {
	Transition.call( this );

	/**
	 * @type {String}
	 * */
	this.transitionType = type || Transition.TRANSITION_CROSS;

	/**
	 * @type {boolean}
	 */
	this.onTopofAllScreens = true;

	/**
	 * @type {Number}
	 * @private
	 * */
	this._duration = duration || 1;

	/**
	 * @type {String}
	 * @private
	 * */
	this._color = '' + color || '#000000';

	/**
	 * @type {Number}
	 * @private
	 * */
	this._pauseTime = pauseTime || 0.0;

	/**
	 * @type {Number}
	 * @private
	 * */
	this._delay = delay || 0.0;

	var renderer = ScreenManager.instance.getRenderer();

	var graphic = new PIXI.Graphics();
	graphic.beginFill( this._color, 1.0 );
	graphic.drawRect( 0, 0, Math.ceil( renderer.width * (1 / renderer.resolution) ), Math.ceil( renderer.height * (1 / renderer.resolution) ) );

	/**
	 * @type {PIXI.Graphics}
	 * */
	this._overlay = new PIXI.Sprite( graphic.generateTexture( renderer.resolution ) );
	this._overlay.alpha = 0.0;
	this.addChild( this._overlay );
};
module.exports = ColorFade;

ColorFade.prototype = Object.create( Transition.prototype );
ColorFade.prototype.constructor = ColorFade;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 * */
ColorFade.VERSION = '01.00.01';

var p = ColorFade.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Called to start the Tranistion. *MUST dispatch the 'READY' event when done.
 * @override
 */
p.transitionIn = function () {
	switch ( this.transitionType ) {

		// add the overlay and fade it out.
		case Transition.TRANSITION_IN_ONLY:
			this._overlay.alpha = 1.0;
			this.signalTransitionInComplete.dispatch( this );
			break;

		case Transition.TRANSITION_CROSS:
			this._overlay.alpha = 0.0;
			TweenMax.to( this._overlay, this._duration * 0.5, {
				delay           : this._delay,
				alpha           : 1.0,
				ease            : Power1.easeOut,
				onComplete      : function () {
					this.signalTransitionInComplete.dispatch( this );
				},
				onCompleteScope : this
			} );
			break;
	}
};

/**
 * Called to end the Tranistion. *MUST dispatch the 'COMPLETE' event when done.
 * @override
 */
p.transitionOut = function () {
	switch ( this.transitionType ) {
		case Transition.TRANSITION_IN_ONLY:
			TweenMax.to( this._overlay, this._duration, {
				delay           : this._delay + this._pauseTime,
				alpha           : 0.0,
				ease            : Power1.easeOut,
				onComplete      : function () {
					this.signalTransitionOutComplete.dispatch( this );
				},
				onCompleteScope : this
			} );
			break;

		case Transition.TRANSITION_CROSS:
			TweenMax.to( this._overlay, this._duration * 0.5, {
				delay           : this._pauseTime,
				alpha           : 0.0,
				ease            : Power1.easeOut,
				onComplete      : function () {
					this.signalTransitionOutComplete.dispatch( this );
				},
				onCompleteScope : this
			} );

			break;
	}
};

/**
 * Clean up.
 */
p.dispose = function () {
	this.removeChildren();
	this._overlay = null;
	Transition.prototype.dispose.call( this );
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================









},{"./../ScreenManager":16,"./Transition":22}],20:[function(require,module,exports){
/**
 * User: Adam *
 * Date: 26/06/13
 *
 * ----------------------------------------------
 * Changelog:
 *
 * ----------------------------------------------
 * Version 01.00.00 - adam
 */

var Transition 		= require( './Transition' );
var ScreenManager 	= require( './../ScreenManager' );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Slide
 * @param {number=} duration - time in seconds.
 * @param {number=} offsetX - where to put the new screen X
 * @param {number=} offsetY - where to put the new screen Y
 * @param {number=} destX - where to slide the new screen too.
 * @param {number=} destY - where to slide the new screen too.
 * @param {number=} oldScreenDestX - If specified, the old screen will slide to this pos.
 * @param {number=} oldScreenDestY - If specified, the old screen will slide to this pos.
 * @param {number=} delay - time in seconds
 * @param {String=} type - cross transition or transition in only.
 * @param {String=} customEaseIn - specify your own createjs ease in.
 * @param {String=} customEaseOut - specify your own createjs ease in.
 * @constructor
 * @class
 * @extends {Transition}
 */
var Slide = function ( duration, offsetX, offsetY, destX, destY, oldScreenDestX, oldScreenDestY, delay, type, customEaseIn, customEaseOut ) {
	Transition.call( this );

	/**
	 * @type {String}
	 * */
	this.transitionType = type || Transition.TRANSITION_CROSS;

	/**
	 * @type {number}
	 * @private
	 */
	this._duration = duration;

	/**
	 * @type {PIXI.Point}
	 * @private
	 */
	this._offset = new PIXI.Point( offsetX, offsetY );

	/**
	 * @type {PIXI.Point}
	 * @private
	 */
	this._destination = new PIXI.Point( destX, destY );

	/**
	 * @type {PIXI.Point}
	 * @private
	 */
	this._oldScreenDestination = new PIXI.Point( oldScreenDestX, oldScreenDestY );

	/**
	 * @type {number}
	 * @private
	 */
	this._delay = delay || 0;

	/**
	 * @type {String|*}
	 * @private
	 */
	this._customEaseInOut = Power2.easeInOut;

	this.onTopofAllScreens = false;
	this.doReplacementsAtEnd = true;
};
module.exports = Slide;

Slide.prototype = Object.create( Transition.prototype );
Slide.prototype.constructor = Slide;
var p = Slide.prototype;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 * */
Slide.VERSION = '01.00.00';

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Called to start the Tranistion. *MUST dispatch the 'READY' event when done.
 * @override
 */
p.transitionIn = function () {
	this.screen.x = this._offset.x;
	this.screen.y = this._offset.y;
	this.signalTransitionInComplete.dispatch( this );
};

/**
 * Called to end the Tranistion. *MUST dispatch the 'COMPLETE' event when done.
 * @override
 */
p.transitionOut = function () {
	switch( this.transitionType ) {

		case Transition.TRANSITION_IN_ONLY:

			TweenMax.to( this.screen, this._duration, {
				x : this._destination.x,
				y : this._destination.y,
				ease : this._customEaseInOut,
				delay : this._delay,
				onComplete : function() {
					this.signalTransitionOutComplete.dispatch( this );
				},
				onCompleteScope : this
			});
			break;

		case Transition.TRANSITION_CROSS:
			if( this.oldScreen ) {
				TweenMax.to( this.oldScreen, this._duration, {
					x : this._oldScreenDestination.x,
					y : this._oldScreenDestination.y,
					ease : this._customEaseInOut ,
					delay : this._delay,
					onComplete : function() {
						this.oldScreen.visible = false;
					},
					onCompleteScope : this
				});
			}

			this.screen.x = this._offset.x;
			this.screen.y = this._offset.y;

			TweenMax.to( this.screen, this._duration, {
				x : this._destination.x,
				y : this._destination.y,
				ease : this._customEaseInOut ,
				delay : this._delay,
				onComplete : function() {
					this.signalTransitionOutComplete.dispatch( this );
				},
				onCompleteScope : this
			});

			break;
	}
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================









},{"./../ScreenManager":16,"./Transition":22}],21:[function(require,module,exports){
/**
 *  Swipe.h
 *
 *  Created by Legman on 21/1/2014.
 *
 */

var Transition 		= require( './Transition' );
var ScreenManager 	= require( './../ScreenManager' );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
var Swipe = function (display, duration, p0, p1, p2, easeIn, easeOut) {
//    Transition.call(this);
//    this.transitionType = Transition.TRANSITION_CROSS;
//    this.duration = duration || 0.0;
//    this.p0 = p0 || new createjs.Point();
//    this.p1 = p1 || new createjs.Point(); // Point of transition.
//    this.p2 = p2 || new createjs.Point();
//    this.easeIn = easeIn || createjs.Ease.quadIn;
//    this.easeOut = easeOut || createjs.Ease.quadOut;
//    this.replaceWhenScreenAdded = true;
//
//    var canvas = ScreenManager.getInstance().getStage().canvas;
//    this._display = display;
//    if (this._display == undefined) {
//        this._display = new createjs.Shape();
//        this._display.graphics.beginFill("#000000");
//        this._display.graphics.drawRect(0.0, 0.0, canvas.width, canvas.height);
//        this._display.graphics.endFill();
//    }
//    this.addChild(this._display);
};
module.exports = Swipe;

Swipe.prototype = Object.create( Transition.prototype );
Swipe.prototype.constructor = Swipe;
var p = Swipe.prototype;

//===================================================
// VARS
//===================================================

/** @type {String} */
Swipe.VERSION = "1.0.0";

/** @type {Number} */
p.duration = 0.0;

/** @type {PIXI.Point} */
p.p0 = null;

/** @type {PIXI.Point} */
p.p1 = null;

/** @type {PIXI.Point} */
p.p2 = null;

/** @type {*} */
p.easeIn = null;

/** @type {*} */
p.easeOut = null;

/** @type {PIXI.DisplayObject}
 *  @private */
p._display = null;


//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Called to start the Transition.
 * MUST dispatch the 'COMPLETE' event when done.
 * @override
 */
p.transitionIn = function() {
//    this._display.x = this.p0.x;
//    this._display.y = this.p0.y;
//    createjs.Tween.get(this._display, null, null, true).
//        to({
//            x:this.p1.x,
//            y:this.p1.y
//        }, this.duration, this.easeIn).
//        call(function() {
//            this.parent.dispatchEvent(Transition.READY, this);
//        }, this);
};

/**
 * Called to end the Transition.
 * MUST dispatch the 'COMPLETE' event when done.
 * @override
 */
p.transitionOut = function() {
//    this._display.x = this.p1.x;
//    this._display.y = this.p1.y;
//    createjs.Tween.get(this._display, null, null, true).
//        to({
//            x:this.p2.x,
//            y:this.p2.y
//        }, this.duration, this.easeOut).
//        call(function() {
//            this.parent.dispatchEvent(Transition.COMPLETE, this);
//        }, this);
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================


},{"./../ScreenManager":16,"./Transition":22}],22:[function(require,module,exports){
/**
 * User: Adam
 *
 * This is a base Transition class and should be extended to use. The ScreenManager does all the work,
 * you just have to make sure that the transitionIn and transitionsOut events are fired so that the
 * ScreenManager can show the correct screen.
 *
 *
 * ----------------------------------------------
 * Changelog:
 *
 * ----------------------------------------------
 *
 */

var Screen = require( "./../Screen" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Transition. A between screens transition. Should be overwritten and params to be passed into the constructor.
 * @class
 * @constructor
 * @extends {PIXI.Container}
 */
var Transition = function () {
	PIXI.Container.call( this );

	/**
	 * @type {signals.Signal}
	 */
	this.signalTransitionInComplete = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalTransitionOutComplete = new signals.Signal();

	/**
	 * If true, the transition will be added to the displaylist. Used for creating colour overlays.
	 * @type {Boolean}
	 * */
	this.onTopofAllScreens = true;

	/**
	 * If false, the replacements will be after the TransitionIn has complete.
	 * @type {boolean}
	 */
	this.doReplacementsAtEnd = false;

	/**
	 * This is disabled when you want both screen to be visible during the transition.
	 * @type {boolean}
	 * */
	this.transitionType = Transition.TRANSITION_CROSS;

	/**
	 * @type {p3.Screen}
	 * */
	this.screen = null;

	/**
	 * @type {p3.Screen}
	 * */
	this.oldScreen = null;

	//this.replaceWhenScreenAdded = true;

	//this.on( 'click',  function(){} );
	//this.on( 'pressup',  function(){} );
	//this.on( 'mousedown',  function(){} );
};
module.exports = Transition;

Transition.prototype = Object.create( PIXI.Container.prototype );
Transition.prototype.constructor = Transition;
var p = Transition.prototype;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 * */
Transition.VERSION = '02.00.00';

/**
 * @const
 * @type {String}
 */
Transition.TRANSITION_IN_ONLY = 'transition_in_only';

/**
 * @const
 * @type {String}
 */
Transition.TRANSITION_CROSS = 'transition_cross';


//===================================================
// PUBLIC METHODS
//===================================================


/**
 * Called to start the Transition. *MUST dispatch the 'READY' event when done.
 */
p.transitionIn = function () {
	this.signalTransitionInComplete.dispatch( this );
};

/**
 * Called to end the Transition. *MUST dispatch the 'COMPLETE' event when done.
 */
p.transitionOut = function () {
	this.signalTransitionOutComplete.dispatch( this );
};

/**
 * Clean up.
 */
p.dispose = function () {
	this.signalTransitionInComplete.removeAll();
	this.signalTransitionInComplete = null;
	this.signalTransitionOutComplete.removeAll();
	this.signalTransitionOutComplete = null;
	this.oldScreen = null;
	this.screen = null;
	this.removeChildren();
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================  

//===================================================
// GETTERS/SETTERS
//===================================================  


},{"./../Screen":14}],23:[function(require,module,exports){
var p3 = window.p3 || {};

p3.AudioManager                 = require("./audio/AudioManager");
p3.BBCGel 		                = require("./bbcgel/BBCGel");

p3.Particle 	                = require("./display/particles/Particle");
p3.ParticleSystem 	            = require("./display/particles/ParticleSystem");

p3.ScreenManager                = require("./display/screenmanager/ScreenManager");
p3.ScreenGroup 	                = require("./display/screenmanager/ScreenGroup");
p3.ScreenParams                 = require("./display/screenmanager/ScreenParams");
p3.Screen 	                    = require("./display/screenmanager/Screen");

p3.Transition 	                = require("./display/screenmanager/transitions/Transition");
p3.AlphaFade 	                = require("./display/screenmanager/transitions/AlphaFade");
p3.ColorFade 	                = require("./display/screenmanager/transitions/ColorFade");
p3.Slide 	                    = require("./display/screenmanager/transitions/Slide");
p3.Swipe 	                    = require("./display/screenmanager/transitions/Swipe");

p3.AdditiveSprite               = require("./display/AdditiveSprite");
p3.Button                       = require("./display/Button");
p3.MovieClip                    = require("./display/MovieClip");
p3.MovieClipSequence            = require("./display/MovieClipSequence");
p3.MuteButton                   = require("./display/MuteButton");

p3.Keyboard                     = require("./input/Keyboard");

p3.RandomSeed                   = require("./math/RandomSeed");
p3.Vector2                      = require("./math/Vector2");

p3.BitmapText                   = require("./text/BitmapText");
p3.CharacterInfo                = require("./text/CharacterInfo");
p3.FontAtlas                    = require("./text/FontAtlas");

p3.BaseMain                     = require("./utils/BaseMain");
p3.Camera                       = require("./utils/Camera");
p3.Device                       = require("./utils/Device");
p3.Sorting                      = require("./utils/Sorting");
p3.Timer                        = require("./utils/Timer");
p3.Utils                        = require("./utils/Utils");

p3.Animator                     = require("./Animator");
p3.AssetManager                 = require("./AssetManager");
p3.Canvas 		                = require("./Canvas");
p3.Timestep                     = require("./Timestep");

p3.Tracking                     = require("./net/tracking/Tracking");
p3.TrackingData                 = require("./net/tracking/TrackingData");
p3.TrackingDataBBCAction        = require("./net/tracking/TrackingDataBBCAction");
p3.TrackingDataBBCAction        = require("./net/tracking/TrackingDataEcho");
p3.TrackingDataGoogleEvent      = require("./net/tracking/TrackingDataGoogleEvent");
p3.TrackingDataGooglePage       = require("./net/tracking/TrackingDataGooglePage");
p3.TrackingModule               = require("./net/tracking/TrackingModule");
p3.TrackingModuleBBC            = require("./net/tracking/TrackingModuleBBC");
p3.TrackingModuleEcho           = require("./net/tracking/TrackingModuleEcho");
p3.TrackingModuleGoogle         = require("./net/tracking/TrackingModuleGoogle");
p3.TrackingModulePlaydom        = require("./net/tracking/TrackingModulePlaydom");

window.p3 = p3;

},{"./Animator":1,"./AssetManager":2,"./Canvas":3,"./Timestep":4,"./audio/AudioManager":5,"./bbcgel/BBCGel":6,"./display/AdditiveSprite":7,"./display/Button":8,"./display/MovieClip":9,"./display/MovieClipSequence":10,"./display/MuteButton":11,"./display/particles/Particle":12,"./display/particles/ParticleSystem":13,"./display/screenmanager/Screen":14,"./display/screenmanager/ScreenGroup":15,"./display/screenmanager/ScreenManager":16,"./display/screenmanager/ScreenParams":17,"./display/screenmanager/transitions/AlphaFade":18,"./display/screenmanager/transitions/ColorFade":19,"./display/screenmanager/transitions/Slide":20,"./display/screenmanager/transitions/Swipe":21,"./display/screenmanager/transitions/Transition":22,"./input/Keyboard":24,"./math/RandomSeed":25,"./math/Vector2":26,"./net/tracking/Tracking":27,"./net/tracking/TrackingData":28,"./net/tracking/TrackingDataBBCAction":29,"./net/tracking/TrackingDataEcho":30,"./net/tracking/TrackingDataGoogleEvent":31,"./net/tracking/TrackingDataGooglePage":32,"./net/tracking/TrackingModule":33,"./net/tracking/TrackingModuleBBC":34,"./net/tracking/TrackingModuleEcho":35,"./net/tracking/TrackingModuleGoogle":36,"./net/tracking/TrackingModulePlaydom":37,"./text/BitmapText":38,"./text/CharacterInfo":39,"./text/FontAtlas":40,"./utils/BaseMain":41,"./utils/Camera":42,"./utils/Device":45,"./utils/Sorting":46,"./utils/Timer":47,"./utils/Utils":48}],24:[function(require,module,exports){
/**
 * User: Adam
 * Date: 13/10/2014
 *
 * USAGE: You must call KEYBOARD.UPDATE first in the game loop.
 */

var Canvas = require( './../Canvas' );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Keyboard
 * @class
 * @constructor
 */
var Keyboard = function () {
};
module.exports = Keyboard;
Keyboard.prototype.constructor = Keyboard;

//===================================================
// VARS
//===================================================

var p = Keyboard.prototype;

/**
 * @type {Signal.Signal}
 */
Keyboard.signalKeyDown = new signals.Signal();

/**
 * @type {Signal.Signal}
 */
Keyboard.signalKeyUp = new signals.Signal();

/** @type {Object.<boolean>} */
Keyboard._keysDown = {};

/** @type {Object.<String>} */
Keyboard._keysDownPerFrame = {};

/** @const @type {number} */
Keyboard.KEY_TAB = 9;

/** @const @type {number} */
Keyboard.KEY_ENTER = 13;

/** @const @type {number} */
Keyboard.KEY_SHIFT = 16;

/** @const @type {number} */
Keyboard.KEY_CTRL = 17;

/** @const @type {number} */
Keyboard.KEY_SPACE = 32;

/** @const @type {number} */
Keyboard.KEY_LEFT = 37;

/** @const @type {number} */
Keyboard.KEY_UP = 38;

/** @const @type {number} */
Keyboard.KEY_RIGHT = 39;

/** @const @type {number} */
Keyboard.KEY_DOWN = 40;

/** @const @type {number} */
Keyboard.KEY_A = 65;

/** @const @type {number} */
Keyboard.KEY_B = 66;

/** @const @type {number} */
Keyboard.KEY_C = 67;

/** @const @type {number} */
Keyboard.KEY_D = 68;

/** @const @type {number} */
Keyboard.KEY_E = 69;

/** @const @type {number} */
Keyboard.KEY_F = 70;

/** @const @type {number} */
Keyboard.KEY_G = 71;

/** @const @type {number} */
Keyboard.KEY_H = 72;

/** @const @type {number} */
Keyboard.KEY_I = 73;

/** @const @type {number} */
Keyboard.KEY_J = 74;

/** @const @type {number} */
Keyboard.KEY_K = 75;

/** @const @type {number} */
Keyboard.KEY_L = 76;

/** @const @type {number} */
Keyboard.KEY_M = 77;

/** @const @type {number} */
Keyboard.KEY_N = 78;

/** @const @type {number} */
Keyboard.KEY_O = 79;

/** @const @type {number} */
Keyboard.KEY_P = 80;

/** @const @type {number} */
Keyboard.KEY_Q = 81;

/** @const @type {number} */
Keyboard.KEY_R = 82;

/** @const @type {number} */
Keyboard.KEY_S = 83;

/** @const @type {number} */
Keyboard.KEY_T = 84;

/** @const @type {number} */
Keyboard.KEY_U = 85;

/** @const @type {number} */
Keyboard.KEY_V = 86;

/** @const @type {number} */
Keyboard.KEY_W = 87;

/** @const @type {number} */
Keyboard.KEY_X = 88;

/** @const @type {number} */
Keyboard.KEY_Y = 89;

/** @const @type {number} */
Keyboard.KEY_Z = 90;

/** @const @type {number} */
Keyboard.KEY_PLUs = 187;

/** @const @type {number} */
Keyboard.KEY_MINUS = 189;



//===================================================
// INIT
//===================================================

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Initialised the Keyboard Input.
 */
Keyboard.init = function ( window ) {
	document.addEventListener( 'keyup', function ( event ) {
		Keyboard._onKeyup( event );
	}, false );

	document.addEventListener( 'keydown', function ( event ) {
		Keyboard._onKeydown( event );
	}, false );
};

/**
 * Returns true while the user holds down the key identified by name. Think auto fire.
 * @usage: Keyboard.getKey(Keyboard.KEY_UP)
 * @param keyCode
 * @returns {*}
 */
Keyboard.getKey = function ( keyCode ) {
	return Keyboard._keysDown[ keyCode ];
};

/**
 * Returns true during the frame the user starts pressing down the key identified by name.
 * @usage: Keyboard.getKeyDown(Keyboard.KEY_UP)
 * @param keyCode
 * @returns {*}
 */
Keyboard.getKeyDown = function ( keyCode ) {
	return Keyboard._keysDownPerFrame[ keyCode ];
};

/**
 * This clears the keydown state per frame. Needs to be called in the update loop.
 */
Keyboard.update = function () {
	Keyboard._keysDownPerFrame = {};
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

/**
 * Handle keyboard down.
 * @param event
 * @private
 */
Keyboard._onKeydown = function ( event ) {
	//	console.log( 'Keycode: ' + event.keyCode );
	if ( !Keyboard._keysDown[ event.keyCode ] ) {
		Keyboard._keysDown[ event.keyCode ] = true;
		Keyboard._keysDownPerFrame[ event.keyCode ] = true;
		Keyboard.signalKeyDown.dispatch( event.keyCode );
	}
};

/**
 * Handle keyboard up.
 * @param event
 * @private
 */
Keyboard._onKeyup = function ( event ) {
	delete Keyboard._keysDown[ event.keyCode ];
	delete Keyboard._keysDownPerFrame[ event.keyCode ];
	Keyboard.signalKeyUp.dispatch( event.keyCode );
};

//===================================================
// GETTERS/SETTERS
//===================================================









},{"./../Canvas":3}],25:[function(require,module,exports){
/**
 * User: Adam
 * Date: 13/11/13
 */

/**
 *
 * This is a port of the AS3 version.
 * @author Adam
 *
 * Implementation of the Park Miller (1988) "minimal standard" linear
 * congruential pseudo-random number generator.
 *
 * For a full explanation visit: http://www.firstpr.com.au/dsp/rand31/
 *
 * The generator uses a modulus constant (m) of 2^31 - 1 which is a
 * Mersenne Prime number and a full-period-multiplier of 16807.
 * Output is a 31 bit unsigned integer. The range of values output is
 * 1 to 2,147,483,646 (2^31-1) and the seed must be in this range too.
 *
 * David G. Carta's optimisation which needs only 32 bit integer math,
 * and no division is actually *slower* in flash (both AS2 & AS3) so
 * it's better to use the double-precision floating point version.
 *
 * @author Michael Baczynski, www.polygonal.de
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * RandomSeed
 * @class
 * @constructor
 */
var RandomSeed = function () {
	this.seed = 1;
};
module.exports = RandomSeed;

//===================================================
// VARS
//===================================================

var p = RandomSeed.prototype;

/**
 * set seed with a 31 bit unsigned integer between 1 and 0X7FFFFFFE inclusive. don't use 0!
 * @type {number}
 */
p.seed = null;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * provides the next pseudorandom number
 * as an unsigned integer (31 bits)
 * @return {number}
 */
p.nextInt = function () {
	return this._gen();
};

/**
 * provides the next pseudorandom number as a float between nearly 0 and nearly 1.0.
 * @return {number}
 */
p.nextDouble = function () {
	return ( this._gen() / 2147483647 );
};

/**
 * provides the next pseudorandom number as an unsigned integer (31 bits) betweeen a given range.
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
p.nextIntRange = function ( min, max ) {
	min -= .4999;
	max += .4999;
	return Math.abs( Math.round( min + (( max - min ) * this.nextDouble() ) ) );
};

/**
 * provides the next pseudorandom number as a float between a given range.
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
p.nextDoubleRange = function ( min, max ) {
	return min + (( max - min ) * this.nextDouble() );
};
//===================================================
// PRIVATE METHODS
//===================================================

/**
 * generator:
 * new-value = (old-value * 16807) mod (2^31 - 1)
 * @private
 * @return {number}
 */
p._gen = function () {
	//integer version 1, for max int 2^46 - 1 or larger.
	return Math.abs( this.seed = ( this.seed * 16807 ) % 2147483647 );
};

//===================================================
// EVENTS
//===================================================


//===================================================
// GETTERS/SETTERS
//===================================================




},{}],26:[function(require,module,exports){
/**
 *  Vector2
 *
 *  Created by Legman on 27/10/2014.
 *
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {Number=} x
 * @param {Number=} y
 * @constructor
 */
var Vector2 = function(x, y) {
    /**
     * @type {Number}
     */
    this.x = x || 0.0;

    /**
     * @type {Number}
     */
    this.y = y || 0.0;
};
module.exports = Vector2;

//===================================================
// VARS
//===================================================

var p = Vector2.prototype;

/**
 * @type {String}
 * @const
 */
Vector2.VERSION = "1.0.1";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param {!p3.Vector2} vector
 * @returns {p3.Vector2}
 */
p.add = function(vector) {
    return new p3.Vector2(this.x + vector.x, this.y + vector.y);
};

/**
 * @param {!p3.Vector2} vector
 * @returns {p3.Vector2}
 */
p.subtract = function(vector) {
    return new p3.Vector2(this.x - vector.x, this.y - vector.y);
};

/**
 * @param {!Number} scalar
 * @returns {p3.Vector2}
 */
p.scale = function(scalar) {
    return new p3.Vector2(this.x * scalar, this.y * scalar);
};

/**
 * @param {!p3.Vector2} vector
 */
p.incrementBy = function(vector) {
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
};

/**
 * @param {!p3.Vector2} vector
 */
p.decrementBy = function(vector) {
    this.x = this.x - vector.x;
    this.y = this.y - vector.y;
};

/**
 * @param {!Number} scalar
 */
p.scaleBy = function(scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
};

/**
 * @param {!Number} length
 */
p.normalize = function(length) {
    var l = this.length;
    if (l > 0) {
        this.x = (this.x / l) * length;
        this.y = (this.y / l) * length;
    }
};

/**
 * @param {!Number} length
 */
p.truncate = function(length) {
    var l = this.length;
    if (l > length) {
        this.x = (this.x / l) * length;
        this.y = (this.y / l) * length;
    }
};

/**
 * @param {!p3.Vector2} vector
 * @returns {Number}
 */
p.dotProduct = function(vector) {
    return this.x * vector.x + this.y * vector.y;
};

/**
 * @param {!p3.Vector2} vector
 * @returns {Number}
 */
p.perpProduct = function(vector) {
    return -this.y * vector.x + this.x * vector.y;
};

/**
 * @returns {p3.Vector2}
 */
p.clone = function() {
    return new p3.Vector2(this.x, this.y);
};

//===================================================
// GETTERS & SETTERS
//===================================================

Object.defineProperty(Vector2.prototype, "length", {
    /**
     * @returns {Number}
     */
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

Object.defineProperty(Vector2.prototype, "lengthSq", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this.x * this.x + this.y * this.y;
    }
});

Object.defineProperty(Vector2.prototype, "unit", {
    /**
     * @returns {Number}
     */
    get: function() {
        var length = this.length;
        return new p3.Vector2(this.x / length, this.y / length);
    }
});

//===================================================


},{}],27:[function(require,module,exports){
/**
 * @constructor
 */
var Tracking = function() {
    /**
     * @type {Tracking}
     * @private
     */
    this._module = null;
};
module.exports = Tracking;

/**
 * @type {String}
 * @const
 */
Tracking.VERSION = "1.1.0";

/**
 * @type {Boolean}
 * @static
 */
Tracking.DEBUG = false;

/**
 * @param {!TrackingModule} module
 */
Tracking.prototype.init = function(module) {
    this._module = module;
};

/**
 * @param {!TrackingData} data
 */
Tracking.prototype.track = function(data) {
    this._module.track(data);

    if (Tracking.DEBUG) {
        console.log("Track sent - ", data);
    }
};
},{}],28:[function(require,module,exports){
/**
 * @constructor
 */
var TrackingData = function() {
};
module.exports = TrackingData;
    
    
    







},{}],29:[function(require,module,exports){
var TrackingData = require("./TrackingData");

/**
 * @param {!String} name
 * @param {!String} type
 * @param {Object=} params
 * @constructor
 */
var TrackingDataBBCAction = function(name, type, params) {
	TrackingData.call(this);

    /**
     * @type {String}
     * @private
     */
	this._name = name;

    /**
     * @type {String}
     * @private
     */
	this._type = type;

    /**
     * @type {Object}
     * @private
     */
	this._params = params;
};
module.exports = TrackingDataBBCAction;
TrackingDataBBCAction.prototype = Object.create(TrackingData);
TrackingDataBBCAction.prototype.constructor = TrackingDataBBCAction;

Object.defineProperty(TrackingDataBBCAction.prototype, "name", {
    /**
     * @returns {String}
     */
    get : function() {
        return this._name;
    }
});

Object.defineProperty(TrackingDataBBCAction.prototype, "type", {
    /**
     * @returns {String}
     */
    get : function() {
        return this._type;
    }
});

Object.defineProperty(TrackingDataBBCAction.prototype, "params", {
    /**
     * @returns {Object}
     */
    get : function() {
        return this._params;
    }
});

},{"./TrackingData":28}],30:[function(require,module,exports){
var TrackingData = require("./TrackingData");

/**
 * @param {!String} name
 * @param {!String} type
 * @param {Object=} params
 * @constructor
 */
var TrackingDataEcho = function(name, type, params) {
    TrackingData.call(this);

    /**
     * @type {String}
     * @private
     */
    this._name = name;

    /**
     * @type {String}
     * @private
     */
    this._type = type;

    /**
     * @type {Object}
     * @private
     */
    this._params = params;
};
module.exports = TrackingDataEcho;
TrackingDataEcho.prototype = Object.create(TrackingData.prototype);
TrackingDataEcho.prototype.constructor = TrackingDataEcho;

Object.defineProperty(TrackingDataEcho.prototype, "name", {
    /**
     * @returns {String}
     */
    get : function() {
        return this._name;
    }
});

Object.defineProperty(TrackingDataEcho.prototype, "type", {
    /**
     * @returns {String}
     */
    get : function() {
        return this._type;
    }
});

Object.defineProperty(TrackingDataEcho.prototype, "params", {
    /**
     * @returns {Object}
     */
    get : function() {
        return this._params;
    }
});

},{"./TrackingData":28}],31:[function(require,module,exports){
var TrackingData            = require("./TrackingData");
var TrackingModuleGoogle    = require("./TrackingModuleGoogle");

/**
 * @param {!String} category
 * @param {!String} action
 * @param {!String} label
 * @param {!String} value
 * @constructor
 */
var TrackingDataGoogleEvent = function(category, action, label, value) {
    /**
     * @type {String}
     */
	this.category = category;

	/**
	 * @type {String}
	 */
	this.action = action;

	/**
	 * @type {String}
	 */
	this.label = label;

	/**
	 * @type {String}
	 */
	this.value = value;

	/**
	 * @type {String}
	 */
	this.type = TrackingModuleGoogle.TYPE_EVENT;

};
module.exports = TrackingDataGoogleEvent;
TrackingDataGoogleEvent.prototype.constructor = TrackingDataGoogleEvent;
TrackingDataGoogleEvent.prototype = Object.create( TrackingData );

},{"./TrackingData":28,"./TrackingModuleGoogle":36}],32:[function(require,module,exports){
/**
 * User: Adam
 * Date: 07/05/2015
 */

var TrackingData = require("./TrackingData");
var TrackingModuleGoogle = require("./TrackingModuleGoogle");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * TrackingDataGooglePage
 * @class
 * @constructor
 * @param {String} page
 * @extends {TrackingData}
 */
var TrackingDataGooglePage = function ( page ) {
		/**
		 * @type {String}
		 */
		this.page = page;

		/**
		 * @type {String}
		 */
		this.type = TrackingModuleGoogle.TYPE_PAGE;
};
module.exports = TrackingDataGooglePage;
TrackingDataGooglePage.prototype.constructor = TrackingDataGooglePage;
TrackingDataGooglePage.prototype = Object.create( TrackingData );


//===================================================
// STATICS
//===================================================

//===================================================
// PUBLIC METHODS
//===================================================

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================
    
    
    







},{"./TrackingData":28,"./TrackingModuleGoogle":36}],33:[function(require,module,exports){
/**
 * @constructor
 */
var TrackingModule = function() {
};
module.exports = TrackingModule;

/**
 * @param {!TrackingData} data
 */
TrackingModule.track = function(data) {
};

/**
 * @returns Boolean
 */
TrackingModule.isScriptFound = function() {
	return false;
};

},{}],34:[function(require,module,exports){
/**
 *  TrackingModuleBBC
 *
 *  @usage:
 *  var bbcModule = new TrackingModuleBBC();
 *  p3.Tracking.getInstance().init( googleModule );
 *  p3.Tracking.getInstance().track( new p3.BBCPageTrackingData( "pageView" ) );
 *
 */

var TrackingModule = require( "./TrackingModule");
//var TrackingDataBBCAction = require( "./TrackingDataBBCAction");


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Tracking for BBC
 * @constructor
 * @extends {TrackingModule}
 * @param {{}} library - The Stats library, pass in the reference so not to rely on the window.
 * @param {string} gameName
 * @param {string} environment
 * @param {string} counterName
 * @param {string} devTag
 * @constructor
 */
var TrackingModuleBBC = function ( library, gameName, environment, counterName, devTag ) {
	/**
	 * @type {Window}
	 */
	this.window = window.top || window;

	/**
	 * @type {{}}
	 */
	TrackingModuleBBC.DEV_lib = this.trackingLib = library;


	if ( this.isScriptFound() ) {
		/**
		 * @type {{}}
		 */
		if( !devTag ){
			TrackingModuleBBC.DEV_statsLogger = this.statsLogger = this.trackingLib.create( gameName, environment, counterName );
		} else {
			TrackingModuleBBC.DEV_statsLogger = this.statsLogger = this.trackingLib.create( gameName, environment, counterName, devTag );
		}
	}
};
module.exports = TrackingModuleBBC;

TrackingModuleBBC.prototype = Object.create( TrackingModule );
TrackingModuleBBC.prototype.constructor = TrackingModuleBBC;
var p = TrackingModuleBBC.prototype;

//===================================================
// VARS
//===================================================


TrackingModuleBBC.DEV_lib = null;
TrackingModuleBBC.DEV_statsLogger = null;

/**
 * @type {String}
 * @const
 * @static
 */
TrackingModuleBBC.TYPE_PAGE = "page";

/**
 * @type {String}
 * @const
 * @static
 */
TrackingModuleBBC.TYPE_EVENT = "event";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param {*} data
 */
p.track = function ( data ) {
	if ( this.isScriptFound() ) {
		if( !data || !data[ 'action_name' ] || !data[ 'action_type' ] ){
			//if( p3.Tracking.DEBUG ) {
			//	console.warn( "[p3.Tracking] tracking data or data.action_type is invalid." );
			//}
		}
		this.statsLogger.logAction( data[ 'action_name' ], data[ 'action_type' ], data[ 'params' ] );
	}

	data[ 'action_name' ] = null;
	data[ 'action_type' ] = null;
	data[ 'params' ] = null;
	data = null;
};

/**
 * @returns {Boolean}
 */
p.isScriptFound = function () {
	if( this.trackingLib ) {
		return true;
	} else {
		return false;
	}
};

//===================================================

//===================================================
// CONSTRUCTOR
//===================================================









},{"./TrackingModule":33}],35:[function(require,module,exports){
var TrackingModule = require( "./TrackingModule");

/**
 * @constructor
 */
var TrackingModuleEcho = function() {
    TrackingModule.call(this);
};
module.exports = TrackingModuleEcho;
TrackingModuleEcho.prototype = Object.create(TrackingModule.prototype);
TrackingModuleEcho.prototype.constructor = TrackingModuleEcho;

/**
 * @param {!TrackingDataEcho} data
 */
TrackingModuleEcho.prototype.track = function(data) {
    if (window.stats) {
        window.stats.logUserActionEvent(data.name, data.type, data.params);
    }
};









},{"./TrackingModule":33}],36:[function(require,module,exports){
/**
 *  GooglePageTrackingModule
 *
 *  Created by Legman on 12/11/2014.
 *
 *  @usage:
 *  var googleModule = new p3.GooglePageTrackingModule( 'GOOGLE_UA_CODE', 'WEB_PAGE' );
 *  p3.Tracking.getInstance().init( googleModule );
 *  p3.Tracking.getInstance().track( new p3.GooglePageTrackingData( "pageView" ) );
 *
 */

//goog.provide( "TrackingModuleGoogle" );
//goog.provide( "p3.TrackingDataGooglePage" );
//goog.provide( "p3.TrackingDataGoogleEvent" );
//
//goog.require( "p3.Tracking" );

var TrackingModule = require("./TrackingModule");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 * @extends {TrackingModule}
 */
var TrackingModuleGoogle = function ( code, site ) {
	/**
	 * @type {Window}
	 */
	this.window = window.top || window;

	if ( this.isScriptFound() ) {
		this.window[ "ga" ]( "create", code, site );
	}
};
module.exports = TrackingModuleGoogle;
TrackingModuleGoogle.prototype = Object.create( TrackingModule );
TrackingModuleGoogle.prototype.constructor = TrackingModuleGoogle;
var p = TrackingModuleGoogle.prototype;

//===================================================
// VARS
//===================================================

/**
 * @type {String}
 * @const
 * @static
 */
TrackingModuleGoogle.TYPE_PAGE = "page";

/**
 * @type {String}
 * @const
 * @static
 */
TrackingModuleGoogle.TYPE_EVENT = "event";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param {*} data
 */
p.track = function ( data ) {
	if ( this.isScriptFound() ) {

		// page: https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
		// events: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
		// social: https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions

		if( !data || !data[ 'type' ] ){
			console.warn( "[p3.Tracking] racking data or data.type is invalid." );
		}

		switch( data[ 'type' ] ) {

			case TrackingModuleGoogle.TYPE_PAGE:
				this.window[ "ga" ]( "send", {
					"hitType" : "pageview",
					"page"    : "/" + data[ 'page' ],
					"title"   : data[ 'page' ]
				} );
				break;

			case TrackingModuleGoogle.TYPE_EVENT:
				this.window[ "ga" ]( 'send', {
					'hitType'       : 'event',          // Required.
					'eventCategory' : data[ 'category' ],   //'button',      // Required.
					'eventAction'   : data[ 'action' ],       //'click',      // Required.
					'eventLabel'    : data[ 'label' ],       //'nav buttons',
					'eventValue'    : data[ 'value' ]        //4
				} );
				break;
		}
	}
};

/**
 * @returns {Boolean}
 */
p.isScriptFound = function () {
	if ( !this.window[ "ga" ] ) {
		console.warn( "[p3.Tracking] Google Analytics script is not found on the page." );
		return false;
	}
	return true;
};

//===================================================


//===================================================
},{"./TrackingModule":33}],37:[function(require,module,exports){
///**
// *  PlaydomTrackingModule
// *
// *  Created by Legman on 12/11/2014.
// *
// */
//
//goog.provide("p3.TrackingModulePlaydom");
//goog.provide("p3.TrackingDataPlaydom");
//goog.provide("p3.TrackingDataPlaydomNavigationAction");
//goog.provide("p3.TrackingDataPlaydomDeviceInfo");
//goog.provide("p3.TrackingDataPlaydomGameAction");
//
//goog.require("p3.Tracking");
//
////===================================================
//// CONSTRUCTOR
////===================================================
//
///**
// * @param {!String} app
// * @param {!String} appLocale
// * @param {!String} network
// * @param {!String} viewNetwork
// * @constructor
// */
//p3.TrackingModulePlaydom = function(app, appLocale, network, viewNetwork) {
//    this._app = app;
//    this._appLocale = appLocale;
//    this._network = network;
//    this._viewNetwork = viewNetwork;
//
//    this._browserId = (window.localStorage.browserId ? window.localStorage.browserId : this.generateKey());
//    window.localStorage.browserId = this._browserId;
//
//    this._transactionId = this.generateKey();
//
//    console.log("BROWSER ID - " + this._browserId);
//    console.log("TRANSACTION ID - " + this._transactionId);
//};
//
//goog.inherits(p3.TrackingModulePlaydom, p3.TrackingModule);
//
////===================================================
//// VARS
////===================================================
//
//var p = p3.TrackingModulePlaydom.prototype;
//
///**
// * @type {String}
// * @private
// */
//p._app = null;
//
///**
// * @type {String}
// * @private
// */
//p._appLocale = null;
//
///**
// * @type {String}
// * @private
// */
//p._browserId = null;
//
///**
// * @type {String}
// * @private
// */
//p._transactionId = null;
//
////===================================================
//// PUBLIC METHODS
////===================================================
//
///**
// * @param {p3.TrackingDataPlaydom} data
// */
//p.track = function(data) {
//    var url = "http://log.data.disney.com/cp?";
//    url = url + "app=" + this._app + "&";
//    url = url + "user_id=" + this._browserId + "&";
//    url = url + "app_locale=" + this._appLocale + "&";
//    url = url + "transaction_id=" + this._transactionId + "&";
//    url = url + "browser_id=" + this._browserId + "&";
//    url = url + "network=" + this._network + "&";
//    url = url + "view_network=" + this._viewNetwork + "&";
//    url = url + data.getUrlString();
//
//    var request = new XMLHttpRequest();
//    request.open("GET", url, true);
//    request.send();
//};
//
///**
// * @returns {String}
// */
//p.generateKey = function() {
//    var key = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
//    return key.replace(/[xy]/g, function(c) {var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16);});
//};
//
////===================================================
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////===================================================
//// CONSTRUCTOR
////===================================================
//
///**
// * @constructor
// */
//p3.TrackingDataPlaydom = function() {
//};
//
//goog.inherits(p3.TrackingDataPlaydom, p3.TrackingData);
//
////===================================================
//// VARS
////===================================================
//
//var p = p3.TrackingDataPlaydom.prototype;
//
///**
// * @type {String}
// */
//p.tag = null;
//
////===================================================
//// PUBLIC METHODS
////===================================================
//
///**
// * @returns {String}
// */
//p.getUrlString = function() {
//    return "";
//};
//
////===================================================
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////===================================================
//// CONSTRUCTOR
////===================================================
//
///**
// * @param {String=} context
// * @param {String=} action
// * @constructor
// */
//p3.TrackingDataPlaydomNavigationAction = function(context, action) {
//    this.tag = "navigation_action";
//    this.context = context;
//    this.action = action;
//};
//
//goog.inherits(p3.TrackingDataPlaydomNavigationAction, p3.TrackingDataPlaydom);
//
////===================================================
//// VARS
////===================================================
//
//var p = p3.TrackingDataPlaydomNavigationAction.prototype;
//
////===================================================
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////===================================================
//// CONSTRUCTOR
////===================================================
//
///**
// * @param {!String|null} machine
// * @param {!String|null} model
// * @param {!String|null} osVersion
// * @param {!String|null} mToken
// * @param {!String|null} deviceId
// * @param {!String|null} iosVendorId
// * @param {!String|null} iosAdvertisingId
// * @param {!String|null} googAdvertisingId
// * @constructor
// */
//p3.TrackingDataPlaydomDeviceInfo = function(machine, model, osVersion, mToken, deviceId, iosVendorId, iosAdvertisingId, googAdvertisingId) {
//    this.tag = "device_info";
//    this.machine = machine || "NULL";
//    this.model = model || "NULL";
//    this.osVersion = osVersion || "NULL";
//    this.mToken = mToken || "NULL";
//    this.deviceId = deviceId || "NULL";
//    this.iosVendorId = iosVendorId || "NULL";
//    this.iosAdvertisingId = iosAdvertisingId || "NULL";
//    this.googAdvertisingId = googAdvertisingId || "NULL";
//};
//
//goog.inherits(p3.TrackingDataPlaydomDeviceInfo, p3.TrackingDataPlaydom);
//
////===================================================
//// VARS
////===================================================
//
//var p = p3.TrackingDataPlaydomDeviceInfo.prototype;
//
///**
// * @type {String}
// */
//p.machine = null;
//
///**
// * @type {String}
// */
//p.model = null;
//
///**
// * @type {String}
// */
//p.osVersion = null;
//
///**
// * @type {String}
// */
//p.mToken = null;
//
///**
// * @type {String}
// */
//p.deviceId = null;
//
///**
// * @type {String}
// */
//p.iosVendorId = null;
//
///**
// * @type {String}
// */
//p.iosAdvertisingId = null;
//
///**
// * @type {String}
// */
//p.googAdvertisingId = null;
//
////===================================================
//// PUBLIC METHODS
////===================================================
//
///**
// * @returns {String}
// */
//p.getUrlString = function() {
//    return (
//        "tag=" + this.tag +
//        "&machine=" + this.machine +
//        "&model=" + this.model +
//        "&os_version=" + this.osVersion +
//        "&m_token=" + this.mToken +
//        "&device_id=" + this.deviceId +
//        "&ios_vendor_id=" + this.iosVendorId +
//        "&ios_advertising_id=" + this.iosAdvertisingId +
//        "&google_advertising_id=" + this.googAdvertisingId
//    );
//};
//
////===================================================
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////===================================================
//// CONSTRUCTOR
////===================================================
//
///**
// * @param {!String} context
// * @param {!String} action
// * @constructor
// */
//p3.TrackingDataPlaydomGameAction = function(context, action) {
//    this.tag = "game_action";
//    this.context = context;
//    this.action = action;
//};
//
//goog.inherits(p3.TrackingDataPlaydomGameAction, p3.TrackingDataPlaydom);
//
////===================================================
//// VARS
////===================================================
//
//var p = p3.TrackingDataPlaydomGameAction.prototype;
//
///**
// * @type {String}
// */
//p.context = null;
//
///**
// * @type {String}
// */
//p.action = null;
//
////===================================================
//// PUBLIC METHODS
////===================================================
//
///**
// * @returns {String}
// */
//p.getUrlString = function() {
//    return (
//        "tag=" + this.tag +
//        "&context=" + this.context +
//        "&action=" + this.action
//    );
//};
//
////===================================================
},{}],38:[function(require,module,exports){
/**
 *  BitmapText
 *
 *  Created by Legman on 24/11/2014.
 */

var FontAtlas = require( "./FontAtlas");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!String} text
 * @param {!FontAtlas} atlas
 * @param {String=} align
 * @param {Number} color
 * @constructor
 */
var BitmapText = function(text, atlas, align, color) {
    /**
     * @type {Boolean}
     */
    this.multiline = true;

    /**
     * @type {Boolean}
     */
    this.autoKern = true;

    /**
     * @type {String}
     * @private
     */
    this._text = "";

    /**
     * @type {String}
     * @private
     */
    this._textAlign = align || BitmapText.ALIGN_LEFT;

    /**
     * @type {Number}
     * @private
     */
    this._textColor = (color != undefined ? color : 0xFFFFFF);

    /**
     * @type {Object}
     * @private
     */
    this._fontAtlas = atlas;

    /**
     * @type {Number}
     * @private
     */
    this._letterSpacing = 0.0;

    /**
     * @type {Array}
     * @private
     */
    this._lines = null;

    /**
     * @type {Number}
     * @private
     */
    this._numOfLines = 0;

    if (!this._fontAtlas) {
        throw new Error("Font atlas is invalid!");
    }

    PIXI.Container.call(this);

    this.text = text;
};
module.exports = BitmapText;

BitmapText.prototype = Object.create( PIXI.Container.prototype );
BitmapText.prototype.constructor = BitmapText;


//===================================================
// VARS
//===================================================

var p = BitmapText.prototype;

/**
 * @type {String}
 * @const
 */
BitmapText.VERSION = "1.0.1";

/**
 * @type {boolean}
 */
BitmapText.DEBUG = false;

/** @type {String}
 * @const */
BitmapText.ALIGN_CENTER = "center";

/** @type {String}
 * @const */
BitmapText.ALIGN_LEFT = "left";

/** @type {String}
 * @const */
BitmapText.ALIGN_RIGHT = "right";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 */
p.calculateLines = function() {
    if( !this._text ) {
        BitmapText.DEBUG && console.warn("[BitmapText] this._text is null.");
    }
    this._lines = [];
    if (this.multiline) {
        var charCode, nextCharCode, charInfo, currentLine;

        var index = 0;
        var kerning = 0;
        var xPosition = 0;
        this._numOfLines = 0;

        var i = 0;
        var length = this._text.length;
        if (length > 1) {
            while (i < (length - 1)) {
                charCode = this._text.charCodeAt(i);
                if (charCode != BitmapTextASCII.LINE_FEED ) {
                    try {
                        charInfo = this._fontAtlas.getCharacterInfo(charCode);
                    } catch (error) {
                        charInfo = this._fontAtlas.getCharacterInfo(32);
                        BitmapText.DEBUG && console.warn("[BitmapText] Character '" + String.fromCharCode(charCode) + "' (" + charCode + ") not found!");
                    }
                    if (i < this._text.length && this.autoKern) {
                        nextCharCode = this._text.charCodeAt(i + 1);
                        kerning = this._fontAtlas.getKerning(charCode, nextCharCode);
                    } else {
                        kerning = 0.0;
                    }
                    xPosition += charInfo.getXAdvance() + kerning + this._letterSpacing;
                } else {
                    currentLine = this._text.substring(index, i);
                    this._lines.push(currentLine);
                    ++ this._numOfLines;
                    xPosition = 0.0;
                    index = i + 1;
                }
                ++ i;
            }
        }
        if (index < length) {
            currentLine = this._text.substring(index, length);
            this._lines.push(currentLine);
            ++ this._numOfLines;
        }
    } else {
        this._numOfLines = 1;
    }
};

/**
 * @param {!Number} charCode
 */
p.renderGlyph = function(charCode, x, y) {
    var charInfo;
    try {
        charInfo = this._fontAtlas.getCharacterInfo(charCode);
    } catch (error) {
        charInfo = this._fontAtlas.getCharacterInfo(32);
    }
    var glyph = new PIXI.Sprite(charInfo.getTexture());
    glyph.x = x + charInfo.getXOffset();
    glyph.y = y + charInfo.getYOffset();
    glyph.tint = this._textColor;
    this.addChild(glyph);
};

/**
 */
p.renderText = function() {
    if (this.getLineHeight() <= 0.0)
        throw new Error("[BitmapText] Invalid text field dimensions!");

    var i, j, length, charCode, nextCharCode, charInfo;
    var glyphX = 0.0;
    var glyphY = 0.0;
    var kerning = 0.0;
    var xPosition = 0.0;
    var currentLineWidth = 0.0;

    this.removeChildren();

    if (!this.multiline) {
        currentLineWidth = this.getLineWidth(this._text);
        length = this._text.length;
        for (i = 0; i < length; ++ i) {
            charCode = this._text.charCodeAt(i);
            if (charCode != BitmapTextASCII.LINE_FEED) {
                try {
                    charInfo = this._fontAtlas.getCharacterInfo(charCode);
                } catch (error) {
                    charInfo = this._fontAtlas.getCharacterInfo(32);
                }
                if (charCode != BitmapTextASCII.SPACE) {
                    if (i < this._text.length && this.autoKern) {
                        nextCharCode = this._text.charCodeAt(i + 1);
                        kerning = this._fontAtlas.getKerning(charCode, nextCharCode);
                    } else {
                        kerning = 0.0;
                    }
                    switch (this._textAlign) {
                        case BitmapText.ALIGN_LEFT : {
                            glyphX = xPosition;
                            break;
                        }
                        case BitmapText.ALIGN_RIGHT : {
                            glyphX = xPosition - currentLineWidth;
                            break;
                        }
                        case BitmapText.ALIGN_CENTER : {
                            glyphX = xPosition - (currentLineWidth * 0.5);
                            break;
                        }
                        default :
                            throw new Error("[BitmapText] Invalid text alignment!");
                    }
                    glyphX = Math.floor(glyphX);
                    this.renderGlyph(charCode, glyphX, glyphY);
                    xPosition += charInfo.getXAdvance() + kerning + this._letterSpacing;
                } else {
                    xPosition += charInfo.getXAdvance() + this._letterSpacing;
                }
            }
        }
    } else {
        var currentLine = null;
        var currentLineLength = null;

        for (i = 0; i < this._numOfLines; ++ i) {
            xPosition = 0.0;
            currentLine = this._lines[i];
            currentLineWidth = this.getLineWidth(currentLine);
            currentLineLength = currentLine.length;
            for (j = 0; j < currentLineLength; ++ j) {
                charCode = currentLine.charCodeAt(j);
                try {
                    charInfo = this._fontAtlas.getCharacterInfo(charCode);
                } catch (error) {
                    charInfo = this._fontAtlas.getCharacterInfo(32);
                }
                if (charCode != BitmapTextASCII.SPACE) {
                    if (i < this._text.length && this.autoKern) {
                        nextCharCode = this._text.charCodeAt(i + 1);
                        kerning = this._fontAtlas.getKerning(charCode, nextCharCode);
                    } else {
                        kerning = 0.0;
                    }
                    switch (this._textAlign) {
                        case BitmapText.ALIGN_LEFT : {
                            glyphX = xPosition;
                            break;
                        }
                        case BitmapText.ALIGN_RIGHT : {
                            glyphX = xPosition - currentLineWidth;
                            break;
                        }
                        case BitmapText.ALIGN_CENTER : {
                            glyphX = xPosition - (currentLineWidth * 0.5);
                            break;
                        }
                        default :
                            throw new Error("[BitmapText] Invalid text alignment!");
                    }
                    glyphX = Math.floor(glyphX);
                    glyphY = Math.floor(i * this.getLineHeight());
                    this.renderGlyph(charCode, glyphX, glyphY);
                    xPosition += charInfo.getXAdvance() + kerning + this._letterSpacing;
                } else {
                    xPosition += charInfo.getXAdvance() + this._letterSpacing;
                }
            }
        }
    }
};

//===================================================
// GETTERS & SETTERS
//===================================================

Object.defineProperty(BitmapText.prototype, "text", {
    /**
     * @returns {String}
     */
    get: function() {
        return this._text;
    },
    /**
     * @param {!String} value
     */
    set: function(value) {
        if (value !== this._text) {
            this._text = value;

            this.calculateLines();
            this.renderText();
        }
    }
});

Object.defineProperty(BitmapText.prototype, "textColor", {
    /**
     * @returns {String}
     */
    get: function() {
        return this._textColor;
    },
    /**
     * @param {!String} value
     */
    set: function(value) {
        if (value !== this._textColor) {
            this._textColor = value;

            this.calculateLines();
            this.renderText();
        }
    }
});

Object.defineProperty(BitmapText.prototype, "letterSpacing", {
    /**
     * @returns {Number}
     */
    get: function() {
        return this._letterSpacing;
    },
    /**
     * @param {!Number} value
     */
    set: function(value) {
        if (value != this._letterSpacing) {
            this._letterSpacing = value;

            this.calculateLines();
            this.renderText();
        }
    }
});

/**
 * @returns {Object}
 */
p.getFontAtlas = function() {
    return this._fontAtlas;
};

/**
 * TODO
 * @returns {String}
 */
p.getFontName = function() {
    return (this._fontAtlas != null ? this._fontAtlas.font.info.face : "");
};

/**
 * Returns the font size.
 * @returns {Number}
 */
p.getFontSize = function() {
    return (this._fontAtlas != null ? this._fontAtlas.font.info.size : 0);
};

/**
 * Returns the calculated number of lines.
 * @returns {Number}
 */
p.getNumOfLines = function() {
    return this._numOfLines;
};

/**
 * @param {!String} string
 * @returns {Number}
 * @private
 */
p.getLineWidth = function(string) {
    var width = 0.0;
    var charCode = null;
    var nextCharCode = null;
    var charInfo = null;
    var kerning = null;
    var length = string.length;
    for (var i = 0; i < length; ++ i) {
        charCode = string.charCodeAt(i);
        if (charCode != BitmapTextASCII.LINE_FEED) {
            try {
                charInfo = this._fontAtlas.getCharacterInfo(charCode);
            } catch (error) {
                charInfo = this._fontAtlas.getCharacterInfo(32);
            }
            if (i < this._text.length && this.autoKern) {
                nextCharCode = this._text.charCodeAt(i + 1);
                kerning = this._fontAtlas.getKerning(charCode, nextCharCode);
            } else {
                kerning = 0.0;
            }
            width += (charInfo.getXAdvance() + kerning + this._letterSpacing);
        }
    }
    return width;
};

/**
 * @returns {Number}
 * @private
 */
p.getLineHeight = function() {
    return (this.lineHeight > 0.0 ? this.lineHeight : this._fontAtlas.getFont()["common"].lineHeight);
};

//===================================================

//===================================================
// CONSTRUCTOR
//===================================================

///**
// * @constructor
// */
//var BitmapTextAlign = function() {
//};

//===================================================
// VARS
//===================================================

///** @type {String}
// * @const */
//BitmapTextAlign.CENTER = "center";
//
///** @type {String}
// * @const */
//BitmapTextAlign.LEFT = "left";
//
///** @type {String}
// * @const */
//BitmapTextAlign.RIGHT = "right";

//===================================================

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
var BitmapTextASCII = function() {
};

//===================================================
// VARS
//===================================================

/** @type {Number}
 * @const */
BitmapTextASCII.LINE_FEED = 10;

/** @type {Number}
 * @const */
BitmapTextASCII.SPACE = 32;

//===================================================




},{"./FontAtlas":40}],39:[function(require,module,exports){
/**
 *  CharacterInfo.h
 *
 *  Created by Legman on 24/11/2014.
 *
 */


//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
var CharacterInfo = function(data, texture) {
	/**
	 * @type {Number}
	 * @private
	 */
	this._id = parseInt(data["id"]);

	/**
	 * @type {Number}
	 * @private
	 */
	this._xAdvance = parseInt(data["xadvance"]);

	/**
	 * @type {Number}
	 * @private
	 */
	this._x = parseInt(data["x"]);

	/**
	 * @type {Number}
	 * @private
	 */
	this._y = parseInt(data["y"]);

	/**
	 * @type {Number}
	 * @private
	 */
	this._width = parseInt(data["width"]);

	/**
	 * @type {Number}
	 * @private
	 */
	this._height = parseInt(data["height"]);

	/**
	 * @type {Number}
	 * @private
	 */
	this._xOffset = parseInt(data["xoffset"]);

	/**
	 * @type {Number}
	 * @private
	 */
	this._yOffset = parseInt(data["yoffset"]);

	/**
	 * @type {String}
	 * @private
	 */
	this._letter = data["letter"];

	/**
	 * @type {PIXI.Texture}
	 * @private
	 */
	this._spriteName = texture;
};
module.exports = CharacterInfo;

//===================================================
// VARS
//===================================================

var p = CharacterInfo.prototype;

/**
 * @type {String}
 * @const
 */
CharacterInfo.VERSION = "1.0.0";

//===================================================
// GETTERS / SETTERS
//===================================================

/**
 * @returns {Number}
 */
p.getId = function() {
	return this._id;
};

/**
 * @returns {Number}
 */
p.getXAdvance = function() {
	return this._xAdvance;
};

/**
 * @returns {Number}
 */
p.getX = function() {
	return this._x;
};

/**
 * @returns {Number}
 */
p.getY = function() {
	return this._y;
};

/**
 * @returns {Number}
 */
p.getWidth = function() {
	return this._width;
};

/**
 * @returns {Number}
 */
p.getHeight = function() {
	return this._height;
};

/**
 * @returns {Number}
 */
p.getXOffset = function() {
	return this._xOffset;
};

/**
 * @returns {Number}
 */
p.getYOffset = function() {
	return this._yOffset;
};

/**
 * @returns {String}
 */
p.getLetter = function() {
	return this._letter;
};

/**
 * @returns {PIXI.Texture}
 */
p.getTexture = function() {
 	return this._spriteName;
};

//===================================================




},{}],40:[function(require,module,exports){
/**
 *  FontAtlas
 *
 *  Created by Legman on 24/11/2014.
 */
var CharacterInfo = require( "./CharacterInfo" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!String} name
 * @param {!Object} data
 * @param {PIXI.Texture} texture
 * @constructor
 */
var FontAtlas = function ( name, data, texture ) {
	/**
	 * @type {String}
	 * @private
	 */
	this._name = name;

	/**
	 * @type {Object}
	 * @private
	 */
	this._data = data;

	/**
	 * @type {PIXI.Texture}
	 * @private
	 */
	this._spriteName = texture;

	/**
	 * @type {Object}
	 * @private
	 */
	this._font = null;

	/**
	 * @type {Object}
	 * @private
	 */
	this._charInfo = {};

	/**
	 * @type {Object}
	 * @private
	 */
	this._kerningMap = {};

	this.parseData( data );
};
module.exports = FontAtlas;

//===================================================
// VARS
//===================================================

var p = FontAtlas.prototype;

/**
 * @type {String}
 * @const
 */
FontAtlas.VERSION = "1.0.0";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * @param data
 */
p.parseData = function ( data ) {
	if( !data || !data[ "font" ] ) {
		throw Error( '[FontAtlas] parseData: There is a problem with the data:', data );
	}

	this._font = data[ "font" ];

	var character, info, texture;
	var charCount = this._font[ "chars" ][ "char" ].length;
	for ( var i = 0; i < charCount; ++i ) {
		character = this._font[ "chars" ][ "char" ][ i ];
		texture = new PIXI.Texture( this._spriteName.baseTexture, new PIXI.Rectangle(
			parseInt( character.x ),
			parseInt( character.y ),
			parseInt( character.width ),
			parseInt( character.height )
		) );
		info = new CharacterInfo( character, texture );
		this._charInfo[ character.id ] = info;
	}
	this.mapKernings();
};

p.mapKernings = function () {
	var kernings = this._font[ "kernings" ];
	if ( kernings ) {
		var kernCount = kernings.length;
		for ( var i = 0; i < 127; ++i ) {
			for ( var j = 0; j < kernCount; ++j ) {
				var kerning = kernings[ j ];
				if ( kerning[ "first" ] == i ) {
					if ( this._kerningMap[ i ] == undefined ) {
						this._kerningMap[ i ] = {};
					}
					this._kerningMap[ i ][ kerning[ "second" ] ] = kerning[ "amount" ];
				}
			}
		}
	}
};

//===================================================
// GETTERS / SETTERS
//===================================================

/**
 * @returns {String}
 */
p.getName = function () {
	return this._name;
};

/**
 * @returns {Object}
 */
p.getData = function () {
	return this._data;
};

/**
 * @returns {PIXI.Texture}
 */
p.getTexture = function () {
	return this._spriteName;
};

/**
 * @returns {Object}
 */
p.getFont = function () {
	return this._font;
};

/**
 * @returns {Number}
 */
p.getSize = function () {
	return this._font[ "info" ][ "size" ];
};

/**
 * @param {Number} charCode
 */
p.getCharacterInfo = function ( charCode ) {
	if ( this._charInfo[ charCode ] == null ) {
		throw new Error( "CharacterInfo not found!" );
	}
	return this._charInfo[ charCode ];
};

/**
 * @returns {Number}
 */
p.getCharacterCount = function () {
	return this._data[ "font" ][ "chars" ][ "char" ].length;
};

/**
 * @param {Number} first
 * @param {Number} second
 * @returns {Number}
 */
p.getKerning = function ( first, second ) {
	var amount = 0.0;
	if ( this._kerningMap[ first ] != undefined ) {
		if ( this._kerningMap[ first ][ second ] != undefined ) {
			amount = this._kerningMap[ first ][ second ];
		}
	}
	return amount;
};

//===================================================

},{"./CharacterInfo":39}],41:[function(require,module,exports){
/**
 *  Created by Adam
 */

var Device          = require("./Device" );
var Canvas          = require("./../Canvas" );
var Timestep        = require("./../Timestep" );
var AssetManager    = require("./../AssetManager" );
var Keyboard        = require("./../input/Keyboard" );
var ScreenManager   = require("./../display/screenmanager/ScreenManager" );
var Animator        = require("./../Animator" );


/**
 * @define {boolean}
 */
var DEBUG = true;

/**
 * @define {boolean}
 */
var USE_WEBFONTS = false;

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Main
 * @class
 * @constructor
 * @param {!CanvasParams} canvasParams
 * @param {number?} fps
 * @param {number?} resolution
 */
var BaseMain = function ( canvasParams, fps, resolution ) {

	/**
	 * @type {Signal.Signal}
	 */
	this.signalPreloaderAssetsComplete = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalCanvasReady = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalCanvasResize = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalLoadProgress = new signals.Signal();

	/**
	 * @type {Signal.Signal}
	 */
	this.signalLoadComplete = new signals.Signal();

	/**
 	 * @type {!CanvasParams}
	 * @private
	 */
	this._canvasParams = canvasParams;

	/**
	 * @type {number}
	 * @private
	 */
	this._fps = fps || 60;

	/**
	 * @type {number}
	 * @private
	 */
	this._resolution = resolution || 1.0;

	/**
	 * @type {PIXI.Container}
	 * @private
	 */
	this._stage = null;

	/**
	 * @type {*}
	 * @private
	 */
	this._renderer = null;

	/**
	 * @type {Canvas}
	 * @private
	 */
	this._canvas = new Canvas( this._canvasParams );
	this._canvas.signalChange.add( this._onCanvasResize, this );
	this._canvas.signalReady.add( this._onCanvasReady, this );

	/**
	 * @type {Timestep}
	 */
	this._timestep = new Timestep(2);
};
module.exports = BaseMain;

p = BaseMain.prototype;

/**
 * @type {Animator}
 */
BaseMain.animator = null;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Call to init everything.
 */
p.init = function () {
	this._assetManager = AssetManager.instance;
	this._canvas.init();

    BaseMain.animator = new Animator();
    BaseMain.animator.init();
};


/**
 * Load the assets for the preloader.
 * @param {!Array.<string>} filesToLoad
 * @param {string} basePath
 */
p.loadPreloaderAssets = function ( filesToLoad, basePath ) {
	if( filesToLoad && filesToLoad.length > 0 ) {
		this._assetManager.addFiles( filesToLoad, basePath );
		this._assetManager.signalCompleted.add( function() {
			this.signalPreloaderAssetsComplete.dispatch();
		}, this );
		this._assetManager.load();
	} else {
		this.signalPreloaderAssetsComplete.dispatch();
	}
};

/**
 * Call this to start the manifest loading.
 * @param {!Array.<string>} filesToLoad
 * @param {string} basePath
 */
p.load = function ( filesToLoad, basePath ) {
	basePath = basePath || "";

	this._assetManager.addFiles( filesToLoad, basePath );
	this._assetManager.signalCompleted.add( this._onLoadComplete, this );
	this._assetManager.signalProgress.add( this._onLoadProgress, this );
	this._assetManager.load( 0.5 );
};


//===================================================
// PRIVATE METHODS
//===================================================


/**
 * Update.
 * @private
 */
p._update = function () {
	this._screenManager.update();
    BaseMain.animator.update();
	Keyboard.update();
};

/**
 * Render
 * @private
 */
p._render = function () {
	this._renderer.render( this._stage );
};


//===================================================
// EVENTS
//===================================================

/**
 * Called from the Canvas when it is ready.
 * @private
 */
p._onCanvasReady = function () {
	var options = {
		view                  : Canvas.canvasElement,
		transparent           : false,
		antialias             : false,
		preserveDrawingBuffer : false,
        autoResize            : false,
		resolution            : this._resolution
	};

	Canvas.stage = this._stage = new PIXI.Container();

	if( Canvas.params.forceCanvasMode || ( Device.isAndroidStockBrowser && Canvas.params.stockAndroidCanvasMode ) ) {
		this._renderer = new PIXI.CanvasRenderer( Canvas.width, Canvas.height, options );
	}else {
		this._renderer = new PIXI.autoDetectRenderer( Canvas.width, Canvas.height, options );
	}

	Canvas.renderer = this._renderer;

	if ( !Canvas.canvasElement ) {
		document.body.appendChild( this._renderer.view );
	}

	// init screenmanager
	this._screenManager = ScreenManager.instance;
	this._screenManager.init( this._stage, this._renderer );

	// init keyboard
	Keyboard.init( Canvas.window );

	// init timestep
	this._timestep.init( this._update, this._render, this );

	this.signalCanvasReady.dispatch();
};

/**
 * Called from the Canvas if there is a resive event.
 * @param {boolean} correctRotation
 * @private
 */
p._onCanvasResize = function ( correctRotation ) {
	if ( correctRotation ) {
		this._renderer.resize( Canvas.width, Canvas.height );

        // manually adjust the width.
        //this._renderer.width = Canvas.width * this._renderer.resolution;
        //this._renderer.height = Canvas.height * this._renderer.resolution;

		this._screenManager.resize();
		this._timestep.isRunning = true;
	} else {
		this._timestep.isRunning = false;
	}

	this.signalCanvasResize.dispatch( correctRotation );
};

/**
 * Called when each file is loaded.
 * @param {!number} loader
 * @param {!number} progress
 */
p._onLoadProgress = function ( loader, progress ) {
	this.signalLoadProgress.dispatch( progress, loader );
};

/**
 * Called when all the files have been loaded.
 * @protected
 */
p._onLoadComplete = function () {
	this._assetManager.signalCompleted.removeAll();
	this._assetManager.signalProgress.removeAll();
	this.signalLoadComplete.dispatch();
};


//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(BaseMain.prototype, "stage", {
	/**
	 * @returns {*}
	 */
	get: function() {
		return this._stage;
	}
});


Object.defineProperty(BaseMain.prototype, "renderer", {
	/**
	 * @returns {*}
	 */
	get: function() {
		return this._renderer;
	}
});

},{"./../Animator":1,"./../AssetManager":2,"./../Canvas":3,"./../Timestep":4,"./../display/screenmanager/ScreenManager":16,"./../input/Keyboard":24,"./Device":45}],42:[function(require,module,exports){
/**
 *  Camera.js
 *
 *  Created by Legman on 27/04/2015.
 *
 */

var CameraLayer 	= require("./CameraLayer");
var CameraParallax 	= require("./CameraParallax");

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @param {!PIXI.Point} view
 * @param {Boolean=} snapToPixelEnabled
 * @constructor
 */
var Camera = function (view, snapToPixelEnabled) {
	/**
	 * @type {PIXI.Point}
	 */
	this.view = view || new PIXI.Point();

	/**
	 * @type {PIXI.Point}
	 */
	this.targetOffset = new PIXI.Point();

	/**
	 * @type {PIXI.Rectangle}
	 */
	this.bounds = new PIXI.Rectangle(
		-(Number.MAX_VALUE * 0.5),
		-(Number.MAX_VALUE * 0.5),
		Number.MAX_VALUE,
		Number.MAX_VALUE
	);

	/**
	 * @type {Boolean}
	 */
	this.snapToPixelEnabled = snapToPixelEnabled || true;

	/**
	 * @type {signals.Signal}
	 */
	this.signalTrackingStarted = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalTrackingFinished = new signals.Signal();

	/**
	 * @type {PIXI.Point}
	 * @private
	 */
	this._position = new PIXI.Point(-this.view.x, -this.view.y);

	/**
	 * @type {Number}
	 * @private
	 */
	this._trackEase = 0.2;

	/**
	 * @type {PIXI.Point}
	 * @private
	 */
	this._trackParallax = new PIXI.Point(CameraParallax.FULL, CameraParallax.FULL);

	/**
	 * @type {*}
	 * @private
	 */
	this._target = null;

	/**
	 * @type {PIXI.Point}
	 * @private
	 */
	this._targetPos = new PIXI.Point();

	/**
	 * @type {Object.<CameraLayer>}
	 * @private
	 */
	this._layers = {};

	/**
	 * @type {Boolean}
	 * @private
	 */
	this._tracking = false;

	/**
	 * @type {PIXI.Point}
	 * @private
	 */
	this._shakeOffset = new PIXI.Point();
};
module.exports = Camera;

//===================================================
// VARS
//===================================================

var p = Camera.prototype;

/**
 * @type {String}
 * @const
 */
Camera.VERSION = "1.1.0";

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Cleanup
 */
p.dispose = function() {
	this._layers = {};
	this.signalTrackingStarted.removeAll();
	this.signalTrackingStarted = null;
	this.signalTrackingFinished.removeAll();
	this.signalTrackingFinished = null;
};

/**
 */
p.update = function() {
	if (this._target != undefined) {
		this._targetPos.x = this._target.x + this.targetOffset.x;
		this._targetPos.y = this._target.y + this.targetOffset.y;
	}
	if (this._targetPos.x < this.bounds.x) {
		this._targetPos.x = this.bounds.x;
	} else if (this._targetPos.x > this.bounds.width) {
		this._targetPos.x = this.bounds.width;
	}
	if (this._targetPos.y < this.bounds.y) {
		this._targetPos.y = this.bounds.y;
	} else if (this._targetPos.y > this.bounds.height) {
		this._targetPos.y = this.bounds.height;
	}

	this._targetPos.x += this._shakeOffset.x;
	this._targetPos.y += this._shakeOffset.y;

	var dx = ((this._targetPos.x - this.view.x) - (this._position.x * this._trackParallax.x));
	var dy = ((this._targetPos.y - this.view.y) - (this._position.y * this._trackParallax.y));
	this._position.x += dx * (this._trackEase * (1.0 / this._trackParallax.x));
	this._position.y += dy * (this._trackEase * (1.0 / this._trackParallax.y));
	if (Math.abs(dx) < 0.01) {
		this._position.x = (this._targetPos.x - this.view.x);
	}
	if (Math.abs(dy) < 0.01) {
		this._position.y = (this._targetPos.y - this.view.y);
	}

	if (this.snapToPixelEnabled) {
		this._position.x = Math.round(this._position.x);
		this._position.y = Math.round(this._position.y);
	}

	var d = (dx * dx + dy * dy);
	if (d < 0.1 && !this._tracking) {
		this._tracking = true;
		this.signalTrackingFinished.dispatch(this);
	} else if ( d > 0.1 && this._tracking ) {
		this._tracking = false;
		this.signalTrackingStarted.dispatch(this);
	}
	this._updateLayers();
};

/**
 * @param {!*} target
 * @param {Boolean=} reset
 */
p.trackTarget = function(target, reset) {
	if (target != undefined) {
		if (target.x == undefined || target.y == undefined) {
			throw new Error("Camera target is invalid!");
		}
	}
	this._target = target;
	var layer = this.findLayerForObject(this._target);
	this._trackParallax.x = (layer ? layer.parallax.x : 1.0);
	this._trackParallax.y = (layer ? layer.parallax.y : 1.0);

	if (reset) {
		this._targetPos.x = this._target.x + this.targetOffset.x;
		this._targetPos.y = this._target.y + this.targetOffset.y;

		if (this._targetPos.x < this.bounds.x) {
			this._targetPos.x = this.bounds.x;
		} else if (this._targetPos.x > this.bounds.width) {
			this._targetPos.x = this.bounds.width;
		}
		if (this._targetPos.y < this.bounds.y) {
			this._targetPos.y = this.bounds.y;
		} else if (this._targetPos.y > this.bounds.height) {
			this._targetPos.y = this.bounds.height;
		}
		this.position = new PIXI.Point(this._targetPos.x - this.view.x, this._targetPos.y - this.view.y);
	}
};

/**
 * @param {!Number} x
 * @param {!Number} y
 * @param {Boolean=} reset
 */
p.trackPosition = function(x, y, reset) {
	this._target = null;
	this._targetPos.x = x;
	this._targetPos.y = y;
	this._trackParallax.x = 1.0;
	this._trackParallax.y = 1.0;
	if (reset) {
		if (this._targetPos.x < this.bounds.x) {
			this._targetPos.x = this.bounds.x;
		} else if (this._targetPos.x > this.bounds.width) {
			this._targetPos.x = this.bounds.width;
		}
		if (this._targetPos.y < this.bounds.y) {
			this._targetPos.y = this.bounds.y;
		} else if (this._targetPos.y > this.bounds.height) {
			this._targetPos.y = this.bounds.height;
		}
        this.position = new PIXI.Point(this._targetPos.x - this.view.x, this._targetPos.y - this.view.y);
	}
};

/**
 * @param {!String} name
 * @param {!PIXI.Container} container
 * @param {Point=} parallax
 */
p.addLayer = function(name, container, parallax) {
	if (this.hasLayer(name)) {
		throw new Error("Layer with that name already exists: '" + name + "'.");
	}
	if (this.hasContainer(name)) {
		throw new Error("Container already added to existing layer!");
	}

	parallax.x = (typeof parallax !== "undefined") ? parallax.x : 1.0;
	parallax.y = (typeof parallax !== "undefined") ? parallax.y : 1.0;

	var layer = new CameraLayer();
	layer.container = container;
	layer.parallax = new PIXI.Point(parallax.x, parallax.y);
	this._layers[name] = layer;
	this._updateLayers();
};

/**
 * @param {!String} name
 */
p.removeLayer = function(name) {
	if (!this.hasLayer) {
		throw new Error("Layer does not exist!");
	}
	this._layers[name] = null;
};

/**
 */
p.removeAllLayers = function() {
	this._layers = {};
};

/**
 * @param {!String} name
 * @returns {Boolean}
 */
p.hasLayer = function(name) {
	return this._layers[name] != undefined;
};

/**
 * @param {!PIXI.Container} container
 * @returns {Boolean}
 */
p.hasContainer = function(container) {
	var layer;
	for (var i = 0; i < this._layers.length; ++ i) {
		layer = this._layers[i];
		if (layer.container == container) {
			return true;
		}
	}
	return false;
};

/**
 * @param {!*} object
 * @returns {*}
 */
p.findLayerForObject = function(object) {
	var i = 0;
	var result = null;
	var layer, child, count;
	for (var key in this._layers) {
		if (this._layers.hasOwnProperty(key)) {
			layer = this._layers[key];
			count = layer.container.children.length;
			for (i = 0; i < count; ++ i) {
				child = layer.container.getChildAt(i);
				if (object == child) {
					result = layer;
				}
			}
		}
	}
	return result;
};

/**
 * Shake the camera
 * @param {PIXI.Point=} amount
 * @param {Number=} repeatCount
 */
p.shake = function (amount, repeatCount) {
	amount = amount || new PIXI.Point(5.0, 5.0);
	repeatCount = repeatCount || 4;

	var duration = 0.1;
	TweenMax.to(this._shakeOffset, duration, {
		delay: duration,
		x: this._shakeOffset.x + (1.0 + Math.random() * amount.x),
		y: this._shakeOffset.y + (1.0 + Math.random() * amount.y),
		ease: Expo.easeInOut,
		repeat: repeatCount - 1
	});

	TweenMax.to(this._shakeOffset, duration, {
		x: this._shakeOffset.x,
		y: this._shakeOffset.y,
		ease: Expo.easeInOut,
		delay: (repeatCount + 1) * duration
	});
};

/**
 * Returns a layer.
 * @param {!String} name
 * @returns {CameraLayer}
 */
p.getLayerByName = function(name) {
	var layer = this._layers[name];
	if (!layer) {
		throw new Error("Layer does not exist: '" + name + "'!");
	} else {
		return layer;
	}
};

//===================================================
// PRIVATE METHODS
//===================================================

p._updateLayers = function() {
	for (var key in this._layers) {
		if (this._layers.hasOwnProperty(key)) {
			var layer = this._layers[key];
			layer.container.x = -this._position.x * layer.parallax.x;
			layer.container.y = -this._position.y * layer.parallax.y;
		}
	}
};

//===================================================
// GETTERS & SETTERS
//===================================================

Object.defineProperty(Camera.prototype, "target", {
	/**
	 * @returns {*}
	 */
	get: function() {
		return this._target;
	}
});

Object.defineProperty(Camera.prototype, "position", {
	/**
	 * @returns {PIXI.Point}
	 */
	get: function() {
		return this._position;
	},
	/**
	 * @param {!PIXI.Point} value
	 */
	set: function(value) {
		this._position.x = value.x * (this._trackParallax.x > 0.0 ? (1.0 / this._trackParallax.x) : 1.0);
		this._position.y = value.y * (this._trackParallax.y > 0.0 ? (1.0 / this._trackParallax.y) : 1.0);
		this._updateLayers();
	}
});

Object.defineProperty(Camera.prototype, "trackEase", {
	/**
	 * @returns {Number}
	 */
	get: function() {
		return this._trackEase;
	},
	/**
	 * @param {!Number} value
	 */
	set: function(value) {
		this._trackEase = Math.max(0.001, Math.min(1.0, value));
	}
});

//===================================================



},{"./CameraLayer":43,"./CameraParallax":44}],43:[function(require,module,exports){
/**
 *  CameraLayer.js
 *
 *  Created by Legman on 27/04/2015.
 *
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
var CameraLayer = function() {
    /**
     * @type {PIXI.Container}
     */
    this.container = null;

    /**
     * @type {PIXI.Point}
     */
    this.parallax = null;
};
module.exports = CameraLayer;

//===================================================
// VARS
//===================================================

//===================================================
},{}],44:[function(require,module,exports){
/**
 *  CameraLayer.js
 *
 *  Created by Legman on 27/04/2015.
 *
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * @constructor
 */
var CameraParallax = function() {
};
module.exports = CameraParallax;

//===================================================
// VARS
//===================================================

/**
 * @type {Number}
 * @const
 */
CameraParallax.NONE = 0.0;

/**
 * @type {Number}
 * @const
 */
CameraParallax.HALF = 0.5;

/**
 * @type {Number}
 * @const
 */
CameraParallax.FULL = 1.0;

//===================================================
},{}],45:[function(require,module,exports){
/**
 * User: Adam0
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Device
 * @class
 * @constructor
 */
var Device = function() {
};
module.exports = Device;

/**
 * @param {!Bowser} bowser
 */
Device.init = function ( bowser ) {
	if( !bowser ) {
		console.warn("[Device] 'bowser' not found, it much be included in the libs and added to the window." );
	}

	var ua = navigator.userAgent;

	// set bowser
	Device.bowser = bowser;

	// run some tests.
	Device._regExAppleWebKit = new RegExp( /AppleWebKit\/([\d.]+)/ );

	Device._resultAppleWebKitRegEx = Device._regExAppleWebKit.exec( navigator.userAgent );

	Device._appleWebKitVersion = (Device._resultAppleWebKitRegEx === null ? null : parseFloat( Device._regExAppleWebKit.exec( navigator.userAgent )[ 1 ] ));

	Device._webgl = (function () {
		try {
			var canvas = document.createElement( 'canvas' );
			return !!window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) );
		} catch ( e ) {
			return false;
		}
	})();

	Device.isMobile = bowser[ 'mobile' ] || bowser[ 'tablet' ];
    Device.isLowRes = Math.max( window.innerWidth, window.innerHeight ) <= 372; // 372 is 480 - the ios nav bars
	Device.isIOS = bowser[ 'ios' ];
	Device.isAndroid = bowser['android'];
	Device.isIpad = Device.isIOS && bowser[ 'name' ] == "iPad";
	Device.isIpadMini = Device.isIOS && Device.isIpad && window.devicePixelRatio === 1 && Math.max(window.innerWidth, window.innerHeight) <= 1024;
	Device.isIpod = Device.isIOS && bowser[ 'name' ] == "iPod";
	Device.isIphone = Device.isIOS && bowser[ 'name' ] == "iPhone";
	Device.isWebGL = Device._webgl;
	Device.isCanvas = !Device._webgl;
	Device.isAndroidStockBrowser = Device.isAndroid && (Device._appleWebKitVersion !== null && Device._appleWebKitVersion < 537 );
	Device.isIframe = window.self !== window.top;

	Device.isKindle = /Kindle/i.test(ua) || /Silk/i.test(ua) || /KFTT/i.test(ua) || /KFOT/i.test(ua) || /KFJWA/i.test(ua) || /KFJWI/i.test(ua) || /KFSOWI/i.test(ua) || /KFTHWA/i.test(ua) || /KFTHWI/i.test(ua) || /KFAPWA/i.test(ua) || /KFAPWI/i.test(ua);

	Device.isReady = true;
};

//===================================================
// STATICS/CONSTANTS
//===================================================

/**
 * @type {boolean}
 */
Device.isReady = false;

/**
 * @type {Bowser}
 */
Device.bowser = null;

/**
 * @type {boolean}
 */
Device.isMobile = false;

/**
 * @type {boolean}
 */
Device.isIOS = false;

/**
 * @type {boolean}
 */
Device.isAndroid = false;

/**
 * @type {boolean}
 */
Device.isIpad = false;

/**
 * @type {boolean}
 */
Device.isIpod = false;

/**
 * @type {boolean}
 */
Device.isIphone = false;

/**
 * @type {boolean}
 */
Device.isIphone4 = false;

/**
 * @type {boolean}
 */
Device.isKindle = false;

/**
 * @type {boolean}
 */
Device.isLowRes = false;

/**
 * @type {boolean}
 */
Device.isWebGL = false;

/**
 * @type {boolean}
 */
Device.isCanvas = false;

/**
 * @type {boolean}
 */
Device.isAndroidStockBrowser = false;

/**
 * @type {boolean}
 */
Device.isIframe = false;

//===================================================
// PUBLIC METHODS
//===================================================

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================








},{}],46:[function(require,module,exports){
/**
 * User: Adam
 * Date: 04/12/2014
 *
 *
 * http://www.sorting-algorithms.com/insertion-sort
 * http://jsperf.com/sort-algorithms/52
 */

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Sorting
 * @class
 * @constructor
 */
var Sorting = function () {
};
module.exports = Sorting;
var p = Sorting.prototype;

//===================================================
// STATICS/CONSTANTS
//===================================================

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Sorts an array.
 * @param {Array} array
 * @param {number} left /start - e.g. '0'.
 * @param {number} right /end - e.g. 'array.length - 1'
 * @returns {Array}
 */
Sorting.quickSort = function ( array, left, right ) {
	/**
	 * Partitions the array.
	 * @param {Array} array
	 * @param {number} left
	 * @param {number} right
	 * @returns {number}
	 */
	function partition ( array, left, right ) {
		var pivot = array[ (left + right) >>> 1 ];
		var temp;
		while ( left <= right ) {
			while ( array[ left ] < pivot ) {
				left++;
			}
			while ( array[ right ] > pivot ) {
				right--;
			}
			if ( left <= right ) {
				temp = array[ left ];
				array[ left++ ] = array[ right ];
				array[ right-- ] = temp;
			}
		}
		return left;
	}

	var middle = partition( array, left, right );

	if ( left < middle - 1 ) {
		Sorting.quickSort( array, left, middle - 1 );
	}
	if ( right > middle ) {
		Sorting.quickSort( array, middle, right );
	}
	return array;
};

/**
 * Sorts an array with a propery such as 'y' or 'depth'.
 * @param {Array} array
 * @param {number} left /start - e.g. '0'.
 * @param {number} right /end - e.g. 'array.length - 1'
 * @param {*} property
 * @returns {Array}
 */
Sorting.quickSortProperty = function ( array, left, right, property ) {
	/**
	 * Partitions the array.
	 * @param {Array} array
	 * @param {number} left
	 * @param {number} right
	 * @returns {number}
	 */
	function partition ( array, left, right ) {
		var pivot = array[ (left + right) >>> 1 ];
		var temp;
		while ( left <= right ) {
			while ( array[ left ][ property ] < pivot[ property ] ) {
				left++;
			}
			while ( array[ right ][ property ] > pivot[ property ] ) {
				right--;
			}
			if ( left <= right ) {
				temp = array[ left ];
				array[ left++ ] = array[ right ];
				array[ right-- ] = temp;
			}
		}
		return left;
	}

	var middle = partition( array, left, right );

	if ( left < middle - 1 ) {
		Sorting.quickSortProperty( array, left, middle - 1, property );
	}
	if ( right > middle ) {
		Sorting.quickSortProperty( array, middle, right, property );
	}
	return array;
};

/**
 * Sorts an array of integers using the InsertionSort algorithm.
 * @param {Array.<number>} array of items to be sorted.
 */
Sorting.insertionSort = function ( array ) {
	var len = array.length,     // number of items in the array
	    value,                  // the value currently being compared
	    i,                      // index into unsorted section
	    j;                      // index into sorted section

	for ( i = 0; i < len; i++ ) {

		// store the current value because it may shift later
		value = array[ i ];

		/*
		 * Whenever the value in the sorted section is greater than the value
		 * in the unsorted section, shift all items in the sorted section over
		 * by one. This creates space in which to insert the value.
		 */
		for ( j = i - 1; j > -1 && array[ j ] > value; j-- ) {
			array[ j + 1 ] = array[ j ];
		}

		array[ j + 1 ] = value;
	}
	return array
};

/**
 * Sorts an array of integers using the InsertionSort algorithm.
 * @param {Array.<number>} array of items to be sorted.
 * @param {*} property.
 */
Sorting.insertionSortProperty = function ( array, property ) {
	var len = array.length,     // number of items in the array
	    value,                  // the value currently being compared
	    i,                      // index into unsorted section
	    j;                      // index into sorted section

	for ( i = 0; i < len; i++ ) {

		// store the current value because it may shift later
		value = array[ i ];

		/*
		 * Whenever the value in the sorted section is greater than the value
		 * in the unsorted section, shift all items in the sorted section over
		 * by one. This creates space in which to insert the value.
		 */
		for ( j = i - 1; j > -1 && array[ j ][ property ] > value[ property ]; j-- ) {
			array[ j + 1 ] = array[ j ];
		}

		array[ j + 1 ] = value;
	}
	return array;
};

/**
 * Sorts an array of integers using the InsertionSort algorithm.
 * @param {Array.<number>} array of items to be sorted.
 */
Sorting.bubbleSort = function ( array ) {
	var i, j, len, temp;
	for ( i = 0, len = array.length; i < len; i++ ) {
		for ( j = i + 1; j < len; j++ ) {
			if ( array[ i ] > array[ j ] ) {
				//swap(ary, a, b);
				temp = array[ i ];
				array[ i ] = array[ j ];
				array[ j ] = temp;
			}
		}
	}
	return array;
};

/**
 * Sorts an array of integers using the InsertionSort algorithm.
 * @param {Array.<number>} array of items to be sorted.
 * @param {*} property.
 */
Sorting.bubbleSortProperty = function ( array, property ) {
	var i, j, len, temp;
	for ( i = 0, len = array.length; i < len; i++ ) {
		for ( j = i + 1; j < len; j++ ) {
			if ( array[ i ][ property ] > array[ j ][ property ] ) {
				//swap(ary, a, b);
				temp = array[ i ];
				array[ i ] = array[ j ];
				array[ j ] = temp;
			}
		}
	}
	return array;
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================

Sorting.test = function ( numOfObjects, numOfIterations ) {
	var start, returnedArray, i;
	var numbericalArr = [];
	var propertyArr = [];

	numOfObjects = numOfObjects || 100;
	numOfIterations = numOfIterations || 10000;

	for ( i = 0; i < numOfObjects; i++ ) {
		numbericalArr.push( Math.round( Math.random() * 1000 ) );
	}

	for ( i = 0; i < numOfObjects; i++ ) {
		var obj = {};
		obj.y = Math.round( Math.random() * 1000 );
		propertyArr.push( obj );
	}

	DEBUG && console.log( "//////////////////////" );
	DEBUG && console.log( "/////// SIMPLE ///////" );
	DEBUG && console.log( "////////////////////// " );
	DEBUG && console.log( "\n" );

	start = new Date();
	for ( i = 0; i < numOfIterations; i++ ) {
		returnedArray = Sorting.bubbleSort( numbericalArr.slice( 0 ) );
	}
	DEBUG && console.log( "Bubble:", new Date() - start, ":", returnedArray, "\n" );

	start = new Date();
	for ( i = 0; i < numOfIterations; i++ ) {
		returnedArray = Sorting.quickSort( numbericalArr.slice( 0 ), 0, numbericalArr.length - 1 );
	}
	DEBUG && console.log( "Quick:", new Date() - start, ":", returnedArray, "\n" );

	start = new Date();
	for ( i = 0; i < numOfIterations; i++ ) {
		returnedArray = Sorting.insertionSort( numbericalArr.slice( 0 ) );
	}
	DEBUG && console.log( "Insertion:", new Date() - start, ":", returnedArray, "\n" );

	DEBUG && console.log( "\n" );
	DEBUG && console.log( "//////////////////////" );
	DEBUG && console.log( "////// PROPERTY //////" );
	DEBUG && console.log( "//////////////////////" );
	DEBUG && console.log( "\n" );

	start = new Date();
	for ( i = 0; i < numOfIterations; i++ ) {
		returnedArray = Sorting.bubbleSortProperty( propertyArr.slice( 0 ), 'y' );
	}
	DEBUG && console.log( "Bubble:", new Date() - start, ":", returnedArray, "\n" );

	start = new Date();
	for ( i = 0; i < numOfIterations; i++ ) {
		returnedArray = Sorting.quickSortProperty( propertyArr.slice( 0 ), 0, propertyArr.length - 1, 'y' );
	}
	DEBUG && console.log( "Quick:", new Date() - start, ":", returnedArray, "\n" );

	start = new Date();
	for ( i = 0; i < numOfIterations; i++ ) {
		returnedArray = Sorting.insertionSortProperty( propertyArr.slice( 0 ), 'y' );
	}
	DEBUG && console.log( "Insertion:", new Date() - start, ":", returnedArray, "\n" );
}


},{}],47:[function(require,module,exports){
/**
 *  Timer.js
 *
 *  Created by Legman on 24/04/2015.
 *
 */

var Timestep           	= require( "./../Timestep" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Timer
 * @param {!Number} delay
 * @param {Number=} repeatCount
 * @constructor
 */
var Timer = function (delay, repeatCount) {
	/**
	 * @type {Number}
	 */
	this.currentCount = 0;

	/**
	 * @type {Number}
	 */
	this.delay = delay;

	/**
	 * @type {Number}
	 */
	this.timeLeft = this.delay;

	/**
	 * @type {Number}
	 */
	this.repeatCount = Math.max(0, repeatCount) || 0;

	/**
	 * @type {Boolean}
	 */
	this.removeOnComplete = true;

	/**
	 * @type {signals.Signal}
	 */
	this.signalTimer = new signals.Signal();

	/**
	 * @type {signals.Signal}
	 */
	this.signalTimerCompleted = new signals.Signal();

	/**
	 * @type {Boolean}
	 * @private
	 */
	this._running = true;

	/**
	 * @type {Boolean}
	 * @private
	 */
	this._invalid = false;
};
module.exports = Timer;

var p = Timer.prototype;

//===================================================
// PUBLIC METHODS
//===================================================

/**
 * Converts seconds into milliseconds.
 * @param {!Number} s
 * @returns {Number}
 */
Timer.s2ms = function(s) {
	return s * 1000.0;
};

/**
 * Converts milliseconds into seconds.
 * @param {!Number} ms
 * @returns {Number}
 */
Timer.ms2s = function(ms) {
	return ms / 1000.0;
};

/**
 * Starts the timer running.
 */
p.start = function() {
	this._running = true;
};

/**
 * Stops the timer.
 */
p.stop = function() {
	this._running = false;
};

/**
 * Stops and resets the timer.
 */
p.reset = function() {
	this.currentCount = 0;
	this.timeLeft = this.delay;
	this.stop();
};

/**
 * Advances a valid timer. This should be called if you are not using an 'Animator'.
 */
p.update = function() {
	if (this._running && !this.complete && !this._invalid) {
		if (this.timeLeft <= 0.0) {
			this.timeLeft = this.delay;
			++ this.currentCount;
			this.signalTimer.dispatch(this);
			if (this.complete) {
				this.timeLeft = 0.0;
				this.signalTimerCompleted.dispatch(this);
			}
		} else {
			this.timeLeft -= Timestep.deltaTime;
		}
	}
};

/**
 * Invalidates the timer and removes all event listeners.
 * WARNING: Timers should not be used after being invalidated.
 */
p.dispose = function() {
	this._invalid = true;

	this.stop();
	this.signalTimer.dispose();
	this.signalTimerCompleted.dispose();
};

//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================

//===================================================
// GETTERS/SETTERS
//===================================================

Object.defineProperty(Timer.prototype, "running", {
	/**
	 * @returns {Boolean}
	 */
	get: function() {
		return (this._running && !this.complete);
	}
});

Object.defineProperty(Timer.prototype, "invalid", {
	/**
	 * @returns {Boolean}
	 */
	get: function() {
		return (this._invalid);
	}
});

Object.defineProperty(Timer.prototype, "complete", {
	/**
	 * @returns {Boolean}
	 */
	get: function() {
		return (this.repeatCount && (this.currentCount >= this.repeatCount));
	}
});

},{"./../Timestep":4}],48:[function(require,module,exports){
/**
 * User: Adam
 * 
 */

var Canvas = require( "./../Canvas" );

//===================================================
// CONSTRUCTOR
//===================================================

/**
 * Utils
 * @constructor
 */
var Utils = function () {
};
module.exports = Utils;

//===================================================
// VARS
//===================================================

/**
 * @const
 * @type {string}
 * */
Utils.VERSION = '01.02.00';

/**
 * @const
 * @type {number}
 */
Utils.PI = 3.1415926535897932384626433832795;

/**
 * @const
 * @type {number}
 */
Utils.TO_RADIANS = 0.01745329251994329576923690768489;

/**
 * @const
 * @type {number}
 */
Utils.TO_DEGREES = 57.295779513082320876798154814105;

//===================================================
// PUBLIC METHODS
//===================================================


//===================================================
// PUBLIC METHODS
//===================================================

/**
 *
 * @param {!string} text - string that is to be stripped.
 * @param {!string} delim
 * @return {string}
 */
Utils.TextFieldStripUnderScores = function ( text, delim ) {
	return text.replace( /[_]/g, delim );
};

/**
 * Get the hex from reg.
 * @param hex
 * @returns {{r: Number, g: Number, b: Number}}
 * @private
 */
Utils.HexToRGB = function ( hex ) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
	return result ? {
		r : parseInt( result[ 1 ], 16 ),
		g : parseInt( result[ 2 ], 16 ),
		b : parseInt( result[ 3 ], 16 )
	} : null;
};

/**
 * Returns a rounded number. MIN to MAX (not including max)
 * @param {!number} max
 * @param {number?} min
 * @returns {number}
 */
Utils.randomInt = function ( max, min ) {
	max = parseInt( max );
	min = parseInt( min );
	min = min || 0;
	var randomRange;
	if ( min < max ) {
		randomRange = Math.round( Math.random() * ( max - min ) );
		return Math.round( min + randomRange );
	} else if ( min > max ) {
		randomRange = Math.round( Math.random() * ( min - max ) );
		return Math.round( min - randomRange );
	} else {
		return max;
	}
};

/**
 * Returns a random true or false;
 * @returns {boolean}
 */
Utils.randomBoolean = function () {
	return Math.random() >= 0.5;
};

/**
 * Rounds the number of decimals.
 * @param {!number} number
 * @param {number?} numDecimalPlaces
 * @returns {number}
 */
Utils.roundNumber = function ( number, numDecimalPlaces ) {
	numDecimalPlaces = numDecimalPlaces || 0;
	var decimals = Math.pow( 10, numDecimalPlaces );
	return Math.round( Math.floor( number * decimals ) / decimals );
};

/**
 * @param {!Number} number
 * @param {Number=} width
 * @param {boolean?} before
 * @returns {string}
 */
Utils.padNumber = function (number, width) {
    width = width || 0;
    var n = Math.abs(number);
    var zeros = Math.max(0, width - Math.floor(n).toString().length);
    var zeroString = Math.pow(10, zeros).toString().substr(1);
    if (number < 0) {
        zeroString = "-" + zeroString;
    }
    return zeroString + n;
};

/**
 * Rounds a number to the nearest "0.5".
 * @param {!number} number
 * @returns {number}
 */
Utils.roundToPointFive = function ( number ) {
	return Math.round( number * 2 ) / 2;
};

/**
 * Returns a namespaced object.
 * @param {!string} str
 * @returns {*}
 */
Utils.stringToFunction = function ( str ) {
	var arr = str.split( "." );
	var thisWindow = window = window.self;
	var fn = (thisWindow || this);
	for ( var i = 0, len = arr.length; i < len; i++ ) {
		fn = fn[ arr[ i ] ];
	}
	if ( typeof fn !== "function" ) {
		throw new Error( "[Utils.stringToFunction] function not found = " + str );
	}
	return fn;
};

/**
 * Returns a fast squard distance.
 * @param {!Object} pointB
 * @param {Number} pointB.x
 * @param {Number} pointB.y
 * @param {!Object} pointA
 * @param {Number} pointA.x
 * @param {Number} pointA.y
 * @returns {number}
 */
Utils.distanceSqrt = function ( pointB, pointA ) {
	var xs = 0;
	var ys = 0;

	xs = pointB.x - pointA.x;
	xs = xs * xs;

	ys = pointB.y - pointA.y;
	ys = ys * ys;

	return Math.sqrt( xs + ys );
};

/**
 * Returns a fast squard distance.
 * @param {!Object} pointB
 * @param {Number} pointB.x
 * @param {Number} pointB.y
 * @param {!Object} pointA
 * @param {Number} pointA.x
 * @param {Number} pointA.y
 * @returns {number}
 */
Utils.distanceSqrtFast = function ( pointB, pointA ) {
	return ( pointB.x - pointA.x ) * ( pointB.x - pointA.x ) + ( pointB.y - pointA.y ) * ( pointB.y - pointA.y );
};

/**
 * Shuffles an array.
 * @param {!Array} array that is to be shuffled.
 * @returns {Array}
 */
Utils.shuffleArray = function ( array ) {
	var currentIndex = array.length;
	var temporaryValue = null;
	var randomIndex = null;

	// While there remain elements to shuffle...
	while ( 0 !== currentIndex ) {

		// Pick a remaining element...
		randomIndex = Math.floor( Math.random() * currentIndex );
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[ currentIndex ];
		array[ currentIndex ] = array[ randomIndex ];
		array[ randomIndex ] = temporaryValue;
	}
	return array;
};

/**
 * Selects a random item from an array and returns it.
 * @param {!Array} array
 */
Utils.randomItemFromArray = function ( array ) {
	return array[ Utils.randomInt( array.length - 1 ) ];
};

///**
// * Returns the frame number of the CreateJS frame label.
// * @param {MovieClip} movieclip
// * @returns {string}
// */
//Utils.getCurrentFrameLabel = function ( movieclip ) {
//	for ( var key in movieclip.timeline._labels ) {
//		if ( movieclip.timeline._labels.hasOwnProperty( key ) ) {
//			if ( movieclip.timeline._labels[ key ] === movieclip.currentFrame ) {
//				return key;
//			}
//		}
//	}
//	return null;
//};

Utils.rectangleIntersects = function ( rectA, rectB ) {
//	return !(rectB.x > rectA.width ||
//			rectB.width < rectA.x ||
//			rectB.y > rectA.height ||
//			rectB.height < rectA.y );
	return (rectA.x <= rectB.x + rectB.width &&
	rectB.x <= rectA.x + rectA.width &&
	rectA.y <= rectB.y + rectB.height &&
	rectB.y <= rectA.y + rectA.height)
};

/**
 * Check if the email address supplied is valid/
 * @param {!string} email
 * @returns {boolean}
 */
Utils.validateEmail = function ( email ) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test( email );
};

/**
 * Converts a number to a comma formated number
 * @param {!number} num
 * @returns {string}
 */
Utils.commaFormatNumber = function ( num ) {
	return ( num + "" ).replace( /\d{1,3}(?=(\d{3})+(?!\d))/g, "$&," );
};

/**
 * Checks a string against an array of words and return true if it finds a match.
 * @param {!string} str
 * @param {!Array} matchArr
 * @returns {boolean}
 */
Utils.checkStringForMatch = function ( str, matchArr ) {
	var wordlist = matchArr.join( '|' );
	var myRegExp = new RegExp( wordlist );
	var matchPos = str.search( myRegExp );

	if ( matchPos != -1 ) {
		return true;
	} else {
		return false;
	}
};

/**
 * Returns the parameter's from the URL.
 * @param {string} name - of the parameter.
 * @param {string=} opt_default - an optional default for the parameter.
 * @returns {string}
 */
Utils.getURLParameter = function ( name, opt_default ) {
	var value = decodeURI( (RegExp( name + '=' + '(.+?)(&|$)' ).exec( location.search ) || [ , null ])[ 1 ] );
	if ( value === 'null' && opt_default ) {
		value = opt_default;
	}
	return value;
};

/**
 * Simulates teh back button.
 * @param {number?} count
 */
Utils.goBack = function ( count ) {
	count = count || -1;
	var thisWindow = window.top || window;
	thisWindow[ "history" ][ "go" ]( count );
};

/**
 * Converts an xml as a  string to real xml.
 * @param {!xml} str
 */
Utils.convertStringToXML = function ( str ) {
	var parseXml;
	var thisWindow = window.top || window;
	if ( thisWindow.DOMParser ) {
		parseXml = function ( xmlStr ) {
			return ( new thisWindow.DOMParser() ).parseFromString( xmlStr, "text/xml" );
		};
	} else if ( typeof thisWindow.ActiveXObject != "undefined" && new window.ActiveXObject( "Microsoft.XMLDOM" ) ) {
		parseXml = function ( xmlStr ) {
			var xmlDoc = new thisWindow.ActiveXObject( "Microsoft.XMLDOM" );
			xmlDoc.async = "false";
			xmlDoc.loadXML( xmlStr );
			return xmlDoc;
		};
	} else {
		parseXml = function () {
			return null;
		}
	}

	return parseXml( str );
};

/**
 * Converts a string to a boolean
 * @param {!string} str
 */
Utils.stringToBoolean = function ( str ) {
	switch ( str.toString().toLowerCase() ) {
		case "true":
		case "yes":
		case "1":
			return true;
		case "false":
		case "no":
		case "0":
		case null:
			return false;
		default:
			return Boolean( string );
	}
};

/**
 * Clamps a number within a range.
 * @param {!number} value - the value to clamp
 * @param {!number} min - the min value
 * @param {!number} max - the max value
 * @returns {number}
 */
Utils.clampNumber = function ( value, min, max ) {
	return Math.min( Math.max( value, min ), max );
};

/**
 * Normalises a number
 * @param {!number} value
 * @param {!number} min
 * @param {!number} max
 * @returns {number}
 */
Utils.normaliseNumber = function ( value, min, max ) {
	return (value - min) / (max - min);
};

/**
 * Linear Interpolation. (clamps it between two values)
 * Finds the nomalised value within the min and max range.
 * @param {!number} normalisedValue
 * @param {!number} min
 * @param {!number} max
 * @returns {number}
 */
Utils.lerpNumber = function ( normalisedValue, min, max ) {
	return (max - min) * normalisedValue + min;
};

/**
 * Mixes a nomalises value and a lerped value. http://www.youtube.com/watch?v=FxAEXHGZSPA
 * @param value
 * @param sourceMin
 * @param sourceMax
 * @param destMin
 * @param destMax
 * @returns {number}
 */
Utils.mapNumber = function ( value, sourceMin, sourceMax, destMin, destMax ) {
	return Utils.lerpNumber( Utils.normaliseNumber( value, sourceMin, sourceMax ), destMin, destMax );
};

/**
 * Scales a container to match the desired size.
 * @param {number} currentValue
 * @param {number} desiredWidth
 */
Utils.scaleValue = function ( currentValue, desiredWidth ) {
	return desiredWidth / currentValue;
};


/**
 * Checks if a point is in the rectangle
 * @param {object} point
 * @param {number} point.x
 * @param {number} point.y
 * @param {Object} rect
 * @param {number} rect.x
 * @param {number} rect.y
 * @param {number} rect.width
 * @param {number} rect.height
 * @returns {boolean}
 */
Utils.pointInRect = function( point, rect ) {
	return Utils.inRange( point.x, rect.x, rect.x + rect.width ) &&
		Utils.inRange( point.y, rect.y, rect.y + rect.height );
};


/**
 * Checks if the values is int he Range.
 * @param value
 * @param min
 * @param max
 * @returns {boolean}
 */
Utils.inRange = function(value, min, max) {
	return value >= Math.min(min, max) && value <= Math.max(min, max);
};

/**
 * Generates a GUID. (rfc4122 compliant...)
 * Source: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript?page=1&tab=votes#tab-top
 * @returns {string}
 */
Utils.generateGUID = function () {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
	return uuid.replace( /[xy]/g, function ( c ) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor( d / 16 );
		return (c == 'x' ? r : (r & 0x7 | 0x8)).toString( 16 );
	} );
};

/**
 * Creates a sprite that can be used as a hit area.
 * @param {boolean=} opt_debug
 * @returns {PIXI.Container}
 */
Utils.createHitAreaSprite = function ( opt_debug ) {
	var hit = new PIXI.DisplayObjectContainer();
	hit.interactive = true;
	hit.hitArea = new PIXI.Rectangle( 0, 0, Canvas.width, Canvas.height );

	if ( opt_debug ) {
		var g = new PIXI.Graphics();
		g.beginFill( '0x00ccff', 0.7 );
		g.drawRect( 0, 0, Canvas.width, Canvas.height );
		hit.addChild( g );
	}

	return hit;
};

/**
 * Creates a modal block
 * @param {!number} color
 * @param {!number} alpha
 * @param {number=} opt_width
 * @param {number=} opt_height
 * @param {number=} resolution
 * @returns {PIXI.Container}
 */
Utils.createModalBlock = function ( color, alpha, opt_width, opt_height, resolution ) {
	color = color || '0x000000';
	alpha = (typeof alpha === "undefined" ) ? 0.7 : alpha;

	var width = opt_width || Canvas.width;
	var height = opt_height || Canvas.height;

	resolution = resolution || 1;

	var graphic = new PIXI.Graphics();
	graphic.beginFill( color, alpha );
	graphic.drawRect( 0, 0, width, height );

	/**
	 * @type {PIXI.Graphics}
	 * */
	var modalBlock = new PIXI.Sprite( graphic.generateTexture( resolution ) );
	modalBlock.interactive = true;
	modalBlock.buttonMode = false;
	modalBlock.mousedown = modalBlock.mouseup = modalBlock.click = modalBlock.tap = function () {
	};
	return modalBlock;
};

/**
 * Clones an object.
 * @param {*} obj
 * @returns {*}
 */
Utils.cloneObject = function (obj) {
	if(obj == null || typeof(obj) != 'object') {
		return obj;
	}

	var temp = obj.constructor(); // changed

	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			temp[key] = Utils.cloneObject(obj[key]);
		}
	}
	return temp;
};

Utils.calculateParabola = function(sx, sy, tx, ty, no_frames, overshoot){
	//sx, sy are the start co-ordinates
	//tx, ty are the target co-ordintes
	//px, py are the maximum point the ball passes through. Can only specify overshoot (i.e. py+overshoot)
	//function return the parabolic curve satisfying these conditions. assumes inverted y-position

	//var py = 1.3*ty;

	tx = tx - sx;
	ty = -(ty - sy);    //inverted y-axis

	//console.log('ty, sy', ty, sy);
	var py;
	if(ty > 0){
		py = ty + overshoot;
	} else {
		py = overshoot;    //sy always set to 'zero' in these calculations
	}

	//quadratic:
	var a = ty;
	var b = -2*tx*py;
	var c = py*tx*tx;
	var px1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
	var px2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);

	var px;
	if((ty > 0 && tx > 0) || (ty < 0 && tx <0)){
		px = Math.min(px1,px2);
	} else {
		px = Math.max(px1,px2);
	}

	var k = -py/(px*px);

	var ret_y = [];
	var ret_x = [];
	var x;
	var y;

	for(var i = 0; i < no_frames + 1; i++){
		x = i*tx/no_frames;
		y = k*(x*x-2*x*px);
		ret_x.push(x + sx);
		ret_y.push(sy - y);
	}

	return {x:ret_x, y:ret_y};
};

Utils.logNestedArray = function ( array ) {
	var str = JSON.stringify( array );
	str = str.replace( /(?:],)/g, "],\n" );
	console.log( str );
};


//===================================================
// PRIVATE METHODS
//===================================================

//===================================================
// EVENTS
//===================================================  

//===================================================
// GETTERS/SETTERS
//===================================================  









},{"./../Canvas":3}]},{},[23]);
