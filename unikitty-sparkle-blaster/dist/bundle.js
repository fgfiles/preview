/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _Boot = __webpack_require__(87);

	var _Boot2 = _interopRequireDefault(_Boot);

	var _Load = __webpack_require__(89);

	var _Load2 = _interopRequireDefault(_Load);

	var _Game = __webpack_require__(115);

	var _Game2 = _interopRequireDefault(_Game);

	var _Welcome = __webpack_require__(129);

	var _Welcome2 = _interopRequireDefault(_Welcome);

	var _GameEnd = __webpack_require__(131);

	var _GameEnd2 = _interopRequireDefault(_GameEnd);

	var _screenfullMin = __webpack_require__(133);

	var _screenfullMin2 = _interopRequireDefault(_screenfullMin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Game = function (_Phaser$Game) {
	    (0, _inherits3.default)(Game, _Phaser$Game);

	    function Game() {
	        (0, _classCallCheck3.default)(this, Game);

	        // if not dev then attach listeners to prevent default, we want keyboards actions in dev

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Game.__proto__ || (0, _getPrototypeOf2.default)(Game)).call(this, 1920, 1080, Phaser.CANVAS, "game_container", {
	            preload: function preload() {
	                // set base url defined in index
	                this.game.load.baseURL = window.game_config.base_assets_url;
	            },
	            create: function create() {
	                // add all required states
	                this.game.state.add('Boot', _Boot2.default, false);
	                this.game.state.add('Load', _Load2.default, false);
	                this.game.state.add('Game', _Game2.default, false);
	                this.game.state.add('Welcome', _Welcome2.default, false);
	                this.game.state.add('GameEnd', _GameEnd2.default, false);
	                this.game.gameContainer = document.getElementById("game_container");

	                // define rotate screen and attach image
	                var rotateScreen = document.getElementsByClassName("rotate")[0];
	                rotateScreen.style["background-image"] = "url(" + this.game.load.baseURL + "assets/ui/bg_rotate.jpg)";
	                rotateScreen.getElementsByClassName("icon")[0].style["background-image"] = "url(" + this.game.load.baseURL + "assets/ui/rotate_icon.png)";

	                // start boot
	                this.game.state.start('Boot');
	            }
	        }));

	        window.addEventListener("wheel", function (e) {
	            e.preventDefault();
	        }, false);
	        window.addEventListener("mousewheel", function (e) {
	            e.preventDefault();
	        }, false);
	        window.addEventListener("DOMMouseScroll", function (e) {
	            e.preventDefault();
	        }, false);
	        window.addEventListener("keydown", function (e) {
	            e.preventDefault();
	        }, false);

	        // handle pause game
	        var t = _this;
	        Object.defineProperty(_this, "paused", {
	            get: function get() {
	                return this._paused;
	            },
	            set: function set(value) {

	                if (value === true) {
	                    if (this._paused === false) {
	                        this._paused = true;
	                        //this.sound.setMute();
	                        this.time.gamePaused();
	                        this.onPause.dispatch(this);
	                    }
	                    this._codePaused = true;
	                } else {
	                    if (this._paused) {
	                        this._paused = false;
	                        this.input.reset();
	                        this.sound.unsetMute();
	                        this.time.gameResumed();
	                        this.onResume.dispatch(this);
	                    }
	                    this._codePaused = false;
	                }
	            }
	        });

	        // attach focus listeners
	        window.addEventListener("resize", _this.handleResize.bind(_this));
	        window.addEventListener("blur", _this.handleWindowBlur.bind(_this));
	        window.addEventListener("focus", _this.handleWindowFocus.bind(_this));
	        window.addEventListener("webkitfullscreenchange", _this.handleResize.bind(_this));
	        return _this;
	    }

	    (0, _createClass3.default)(Game, [{
	        key: 'requestFullscreen',
	        value: function requestFullscreen(element) {
	            if (!this.device.desktop && _screenfullMin2.default.enabled) {
	                _screenfullMin2.default.request();
	            }
	        }

	        // track(evt)
	        // {
	        //     if(window.WiseTrack) window.WiseTrack.track(this.data.wisetrack_prefix + evt);
	        // }

	    }, {
	        key: 'handleWindowBlur',
	        value: function handleWindowBlur() {
	            if (!this.sound.mute) {
	                this.sound.setMute();
	                this.blurMuted = true;
	            } else {
	                this.blurMuted = false;
	            }
	        }
	    }, {
	        key: 'handleWindowFocus',
	        value: function handleWindowFocus() {
	            if (this.blurMuted) {
	                this.sound.unsetMute();
	            }
	        }
	    }, {
	        key: 'handleResize',
	        value: function handleResize() {
	            var scale = 1;

	            // handle landscape game
	            if (this.width > this.height) {
	                var aspect = window.innerHeight / window.innerWidth;
	                if (window.innerWidth > window.innerHeight) {
	                    //console.log("landscape");
	                    if (aspect > 0.56 && aspect < 0.75) {
	                        scale = window.innerHeight / this.height;
	                    } else if (aspect > 0.75) {
	                        scale = window.innerWidth / this.width;
	                    } else {
	                        scale = window.innerHeight / this.height;
	                    }

	                    if (this.paused) this.paused = false;
	                    document.getElementById("rotate").style.display = "none";
	                } else {
	                    scale = window.innerWidth / this.width;
	                    if (!this.device.desktop) {
	                        //show rotate
	                        this.paused = true;
	                        document.getElementById("rotate").style.display = "block";
	                    }
	                }
	            }
	            // handle portrait game
	            else {

	                    var _aspect = window.innerWidth / window.innerHeight;
	                    if (window.innerHeight > window.innerWidth) {
	                        if (_aspect > 0.56 && _aspect < 0.75) {
	                            scale = window.innerWidth / this.width;
	                        } else if (_aspect > 0.75) {
	                            scale = window.innerHeight / this.height;
	                        } else {
	                            scale = window.innerWidth / this.width;
	                        }
	                        if (this.paused) this.paused = false;
	                        document.getElementById("rotate").style.display = "none";
	                    } else {
	                        scale = window.innerHeight / this.height;
	                        if (!this.device.desktop) {
	                            //show rotate
	                            this.paused = true;
	                            document.getElementById("rotate").style.display = "block";
	                        }
	                    }
	                }

	            var targetWidth = this.width * scale;

	            var targetHeight = this.height * scale;
	            var targetTop = window.innerHeight / 2 - targetHeight / 2;
	            var targetLeft = window.innerWidth / 2 - targetWidth / 2;
	            this.gameContainer.style.width = targetWidth + "px";
	            this.gameContainer.style.height = targetHeight + "px";
	            this.gameContainer.style.top = targetTop + "px";
	            this.gameContainer.style.left = targetLeft + "px";

	            // calculate viewport
	            var vy = targetTop > 0 ? 0 : this.height * (Math.abs(targetTop) / targetHeight);
	            var vx = targetLeft > 0 ? 0 : this.width * (Math.abs(targetLeft) / targetWidth);
	            var vw = targetWidth < window.innerWidth ? this.width : this.width * (window.innerWidth / targetWidth);
	            var vh = targetHeight < window.innerHeight ? this.height : this.height * (window.innerHeight / targetHeight);

	            this.viewport = {
	                left: vx,
	                top: vy,
	                width: vw,
	                height: vh,
	                right: vx + vw,
	                bottom: vy + vh,
	                centerX: vx + vw / 2,
	                centerY: vy + vh / 2
	            };

	            this.scale.setUserScale(scale, scale);
	            this.scale.refresh();
	        }
	    }]);
	    return Game;
	}(Phaser.Game);

	window.game = new Game();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(15).Object.getPrototypeOf;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(5);
	var $getPrototypeOf = __webpack_require__(7);

	__webpack_require__(13)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(8);
	var toObject = __webpack_require__(5);
	var IE_PROTO = __webpack_require__(9)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(10)('keys');
	var uid = __webpack_require__(12);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14);
	var core = __webpack_require__(15);
	var fails = __webpack_require__(24);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var core = __webpack_require__(15);
	var ctx = __webpack_require__(16);
	var hide = __webpack_require__(18);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(19);
	var createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(20);
	var IE8_DOM_DEFINE = __webpack_require__(22);
	var toPrimitive = __webpack_require__(26);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function () {
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	var document = __webpack_require__(11).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(30);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', { defineProperty: __webpack_require__(19).f });


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(35);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(64);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	__webpack_require__(59);
	module.exports = __webpack_require__(63).f('iterator');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(38)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(40)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39);
	var defined = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(41);
	var $export = __webpack_require__(14);
	var redefine = __webpack_require__(42);
	var hide = __webpack_require__(18);
	var has = __webpack_require__(8);
	var Iterators = __webpack_require__(43);
	var $iterCreate = __webpack_require__(44);
	var setToStringTag = __webpack_require__(57);
	var getPrototypeOf = __webpack_require__(7);
	var ITERATOR = __webpack_require__(58)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(45);
	var descriptor = __webpack_require__(27);
	var setToStringTag = __webpack_require__(57);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(58)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(20);
	var dPs = __webpack_require__(46);
	var enumBugKeys = __webpack_require__(55);
	var IE_PROTO = __webpack_require__(9)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(56).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(19);
	var anObject = __webpack_require__(20);
	var getKeys = __webpack_require__(47);

	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(48);
	var enumBugKeys = __webpack_require__(55);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(8);
	var toIObject = __webpack_require__(49);
	var arrayIndexOf = __webpack_require__(52)(false);
	var IE_PROTO = __webpack_require__(9)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(50);
	var defined = __webpack_require__(6);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(51);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(49);
	var toLength = __webpack_require__(53);
	var toAbsoluteIndex = __webpack_require__(54);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(11).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f;
	var has = __webpack_require__(8);
	var TAG = __webpack_require__(58)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(10)('wks');
	var uid = __webpack_require__(12);
	var Symbol = __webpack_require__(11).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	var global = __webpack_require__(11);
	var hide = __webpack_require__(18);
	var Iterators = __webpack_require__(43);
	var TO_STRING_TAG = __webpack_require__(58)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(61);
	var step = __webpack_require__(62);
	var Iterators = __webpack_require__(43);
	var toIObject = __webpack_require__(49);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(40)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(58);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	module.exports = __webpack_require__(15).Symbol;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(11);
	var has = __webpack_require__(8);
	var DESCRIPTORS = __webpack_require__(23);
	var $export = __webpack_require__(14);
	var redefine = __webpack_require__(42);
	var META = __webpack_require__(67).KEY;
	var $fails = __webpack_require__(24);
	var shared = __webpack_require__(10);
	var setToStringTag = __webpack_require__(57);
	var uid = __webpack_require__(12);
	var wks = __webpack_require__(58);
	var wksExt = __webpack_require__(63);
	var wksDefine = __webpack_require__(68);
	var enumKeys = __webpack_require__(69);
	var isArray = __webpack_require__(72);
	var anObject = __webpack_require__(20);
	var isObject = __webpack_require__(21);
	var toIObject = __webpack_require__(49);
	var toPrimitive = __webpack_require__(26);
	var createDesc = __webpack_require__(27);
	var _create = __webpack_require__(45);
	var gOPNExt = __webpack_require__(73);
	var $GOPD = __webpack_require__(75);
	var $DP = __webpack_require__(19);
	var $keys = __webpack_require__(47);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(71).f = $propertyIsEnumerable;
	  __webpack_require__(70).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(41)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(12)('meta');
	var isObject = __webpack_require__(21);
	var has = __webpack_require__(8);
	var setDesc = __webpack_require__(19).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var core = __webpack_require__(15);
	var LIBRARY = __webpack_require__(41);
	var wksExt = __webpack_require__(63);
	var defineProperty = __webpack_require__(19).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(47);
	var gOPS = __webpack_require__(70);
	var pIE = __webpack_require__(71);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(51);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(49);
	var gOPN = __webpack_require__(74).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(48);
	var hiddenKeys = __webpack_require__(55).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(71);
	var createDesc = __webpack_require__(27);
	var toIObject = __webpack_require__(49);
	var toPrimitive = __webpack_require__(26);
	var has = __webpack_require__(8);
	var IE8_DOM_DEFINE = __webpack_require__(22);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(68)('asyncIterator');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(68)('observable');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(80);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(84);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(83).set });


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(21);
	var anObject = __webpack_require__(20);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(16)(Function.call, __webpack_require__(75).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	var $Object = __webpack_require__(15).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(45) });


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _utils = __webpack_require__(88);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);

	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(_class, [{
	        key: "preload",
	        value: function preload() {
	            // grab urls set in index page
	            this.game.languageCode = _utils2.default.GetUrlParamenterByName("language") || window.game_config.default_language;
	            this.game.copyurl = window.game_config.base_locale_url + this.game.languageCode + "/copy.xml";
	            this.game.stylesurl = window.game_config.base_locale_url + this.game.languageCode + "/styles.json";
	            this.game.logourl = window.game_config.base_locale_url + this.game.languageCode + "/logo_unikitty.png";

	            // locate copy xml
	            this.game.load.crossOrigin = true;
	            this.game.load.pack('load', 'assets/assetpack.json', null, this);
	        }
	    }, {
	        key: "create",
	        value: function create() {
	            // apply game settings
	            this.stage.backgroundColor = '#000000';
	            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
	            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	            this.game.scale.pageAlignHorizontally = true;
	            this.game.scale.pageAlignVertically = true;

	            // is this a touch screen?
	            this.game.isTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

	            // resize game to fit and attach listener
	            this.game.handleResize();
	            this.game.scale.onSizeChange.add(this.game.handleResize, this.game);

	            // start loading
	            this.state.start('Load');
	        }
	    }]);
	    return _class;
	}(Phaser.State);

	exports.default = _class;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    GetUrlParamenterByName: function GetUrlParamenterByName(name, url) {
	        if (!url) url = window.location.href;
	        name = name.replace(/[\[\]]/g, "\\$&");
	        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	        var results = regex.exec(url);

	        if (!results) return null;
	        if (!results[2]) return '';
	        return decodeURIComponent(results[2].replace(/\+/g, " "));
	    }
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _webfontloader = __webpack_require__(90);

	var _webfontloader2 = _interopRequireDefault(_webfontloader);

	var _CopyManager = __webpack_require__(112);

	var _CopyManager2 = _interopRequireDefault(_CopyManager);

	var _SoundManager = __webpack_require__(113);

	var _SoundManager2 = _interopRequireDefault(_SoundManager);

	var _LoadingSpinner = __webpack_require__(114);

	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);

	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(_class, [{
	        key: 'preload',
	        value: function preload() {
	            this.fontsReady = false;
	            this.assetsReady = false;

	            // add load bar
	            this.loadBar = new _LoadingSpinner2.default(this.game, this.game.width / 2, 0);
	            this.game.add.existing(this.loadBar);

	            // load content
	            this.game.load.pack('ui', 'assets/assetpack.json', null, this);
	            this.game.load.pack('game', 'assets/assetpack.json', null, this);
	            this.game.load.xml("copy_data", this.game.copyurl);
	            this.game.load.json("font_styles", this.game.stylesurl);
	            this.game.load.image("logo_unikitty", this.game.logourl);
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            // get and set copy data
	            this.game.data = this.game.cache.getJSON("game_data");
	            this.game.copy = new _CopyManager2.default(this.game.cache.getXML("copy_data"));

	            // set font based on settings
	            this.game.font = this.game.cache.getJSON("font_styles").font;
	            this.game.data.styles = this.game.cache.getJSON("font_styles")[this.game.data.copy_ref.styles];

	            // set sound manager
	            this.game.sounds = new _SoundManager2.default(this.game);

	            // set page title
	            document.title = this.game.copy.getCopy(this.game.data.copy_ref.character_id) + " : " + this.game.copy.getCopy(this.game.data.copy_ref.game_id);

	            // load the required fonts
	            _webfontloader2.default.load({
	                custom: { families: [this.game.font.family], urls: [window.game_config.base_locale_url + this.game.font.css] },
	                active: this.fontsLoaded.bind(this),
	                inactive: this.fontsLoaded.bind(this)
	            });

	            // scan through required audio and add them to sound manager
	            for (var i in this.game.data.audio) {
	                this.game.sounds.addSound(i, this.game.data.audio[i]);
	            }

	            //  if(this.game.data.wisetrack_ID && this.game.data.wisetrack_ID.length > 1)
	            // {
	            //     let cc = this.game.languageCode;
	            //     let wt = this.game.data.wisetrack_ID;
	            //     if(cc === "it_BN")
	            //     { 
	            //         cc = "it_IT";
	            //         wt = 'WISETRACK_2698_9d63f59cde'
	            //     }
	            //     // add wise tracking script
	            //     var script = document.createElement('script');
	            //     script.src = "//www.wisetrack.net/js2_detect.php?tracking_id=" + wt + "&country="+cc;
	            //     document.body.appendChild(script);
	            // }

	            // assets are currently ready
	            this.assetsReady = true;

	            // have we finished loading everything?
	            this.checkLoading();
	        }
	    }, {
	        key: 'checkLoading',
	        value: function checkLoading() {
	            // if both assets and fonts are flagged, we're done
	            if (this.assetsReady && this.fontsReady) {
	                // define fonts
	                for (var i in this.game.data.styles) {
	                    var font = this.game.data.styles[i].font;
	                    font += " " + this.game.font.family;
	                    this.game.data.styles[i].font = font;
	                }

	                // start game
	                this.game.state.start("Welcome");
	            }
	        }
	    }, {
	        key: 'fontsLoaded',
	        value: function fontsLoaded() {
	            this.fontsReady = true;
	            this.checkLoading();
	        }
	    }]);
	    return _class;
	}(Phaser.State);

	exports.default = _class;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _promise = __webpack_require__(91);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function () {
	  function aa(a, b, c) {
	    return a.call.apply(a.bind, arguments);
	  }function ba(a, b, c) {
	    if (!a) throw Error();if (2 < arguments.length) {
	      var d = Array.prototype.slice.call(arguments, 2);return function () {
	        var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
	      };
	    }return function () {
	      return a.apply(b, arguments);
	    };
	  }function p(a, b, c) {
	    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;return p.apply(null, arguments);
	  }var q = Date.now || function () {
	    return +new Date();
	  };function ca(a, b) {
	    this.a = a;this.m = b || a;this.c = this.m.document;
	  }var da = !!window.FontFace;function t(a, b, c, d) {
	    b = a.c.createElement(b);if (c) for (var e in c) {
	      c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
	    }d && b.appendChild(a.c.createTextNode(d));return b;
	  }function u(a, b, c) {
	    a = a.c.getElementsByTagName(b)[0];a || (a = document.documentElement);a.insertBefore(c, a.lastChild);
	  }function v(a) {
	    a.parentNode && a.parentNode.removeChild(a);
	  }
	  function w(a, b, c) {
	    b = b || [];c = c || [];for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
	      for (var f = !1, g = 0; g < d.length; g += 1) {
	        if (b[e] === d[g]) {
	          f = !0;break;
	        }
	      }f || d.push(b[e]);
	    }b = [];for (e = 0; e < d.length; e += 1) {
	      f = !1;for (g = 0; g < c.length; g += 1) {
	        if (d[e] === c[g]) {
	          f = !0;break;
	        }
	      }f || b.push(d[e]);
	    }a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
	  }function y(a, b) {
	    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
	      if (c[d] == b) return !0;
	    }return !1;
	  }
	  function z(a) {
	    if ("string" === typeof a.f) return a.f;var b = a.m.location.protocol;"about:" == b && (b = a.a.location.protocol);return "https:" == b ? "https:" : "http:";
	  }function ea(a) {
	    return a.m.location.hostname || a.a.location.hostname;
	  }
	  function A(a, b, c) {
	    function d() {
	      k && e && f && (k(g), k = null);
	    }b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });var e = !1,
	        f = !0,
	        g = null,
	        k = c || null;da ? (b.onload = function () {
	      e = !0;d();
	    }, b.onerror = function () {
	      e = !0;g = Error("Stylesheet failed to load");d();
	    }) : setTimeout(function () {
	      e = !0;d();
	    }, 0);u(a, "head", b);
	  }
	  function B(a, b, c, d) {
	    var e = a.c.getElementsByTagName("head")[0];if (e) {
	      var f = t(a, "script", { src: b }),
	          g = !1;f.onload = f.onreadystatechange = function () {
	        g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
	      };e.appendChild(f);setTimeout(function () {
	        g || (g = !0, c && c(Error("Script load timeout")));
	      }, d || 5E3);return f;
	    }return null;
	  };function C() {
	    this.a = 0;this.c = null;
	  }function D(a) {
	    a.a++;return function () {
	      a.a--;E(a);
	    };
	  }function F(a, b) {
	    a.c = b;E(a);
	  }function E(a) {
	    0 == a.a && a.c && (a.c(), a.c = null);
	  };function G(a) {
	    this.a = a || "-";
	  }G.prototype.c = function (a) {
	    for (var b = [], c = 0; c < arguments.length; c++) {
	      b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
	    }return b.join(this.a);
	  };function H(a, b) {
	    this.c = a;this.f = 4;this.a = "n";var c = (b || "n4").match(/^([nio])([1-9])$/i);c && (this.a = c[1], this.f = parseInt(c[2], 10));
	  }function fa(a) {
	    return I(a) + " " + (a.f + "00") + " 300px " + J(a.c);
	  }function J(a) {
	    var b = [];a = a.split(/,\s*/);for (var c = 0; c < a.length; c++) {
	      var d = a[c].replace(/['"]/g, "");-1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
	    }return b.join(",");
	  }function K(a) {
	    return a.a + a.f;
	  }function I(a) {
	    var b = "normal";"o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");return b;
	  }
	  function ga(a) {
	    var b = 4,
	        c = "n",
	        d = null;a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));return c + b;
	  };function ha(a, b) {
	    this.c = a;this.f = a.m.document.documentElement;this.h = b;this.a = new G("-");this.j = !1 !== b.events;this.g = !1 !== b.classes;
	  }function ia(a) {
	    a.g && w(a.f, [a.a.c("wf", "loading")]);L(a, "loading");
	  }function M(a) {
	    if (a.g) {
	      var b = y(a.f, a.a.c("wf", "active")),
	          c = [],
	          d = [a.a.c("wf", "loading")];b || c.push(a.a.c("wf", "inactive"));w(a.f, c, d);
	    }L(a, "inactive");
	  }function L(a, b, c) {
	    if (a.j && a.h[b]) if (c) a.h[b](c.c, K(c));else a.h[b]();
	  };function ja() {
	    this.c = {};
	  }function ka(a, b, c) {
	    var d = [],
	        e;for (e in b) {
	      if (b.hasOwnProperty(e)) {
	        var f = a.c[e];f && d.push(f(b[e], c));
	      }
	    }return d;
	  };function N(a, b) {
	    this.c = a;this.f = b;this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
	  }function O(a) {
	    u(a.c, "body", a.a);
	  }function P(a) {
	    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";" + ("font-style:" + I(a) + ";font-weight:" + (a.f + "00") + ";");
	  };function Q(a, b, c, d, e, f) {
	    this.g = a;this.j = b;this.a = d;this.c = c;this.f = e || 3E3;this.h = f || void 0;
	  }Q.prototype.start = function () {
	    var a = this.c.m.document,
	        b = this,
	        c = q(),
	        d = new _promise2.default(function (d, e) {
	      function k() {
	        q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
	          1 <= a.length ? d() : setTimeout(k, 25);
	        }, function () {
	          e();
	        });
	      }k();
	    }),
	        e = new _promise2.default(function (a, d) {
	      setTimeout(d, b.f);
	    });_promise2.default.race([e, d]).then(function () {
	      b.g(b.a);
	    }, function () {
	      b.j(b.a);
	    });
	  };function R(a, b, c, d, e, f, g) {
	    this.v = a;this.B = b;this.c = c;this.a = d;this.s = g || "BESbswy";this.f = {};this.w = e || 3E3;this.u = f || null;this.o = this.j = this.h = this.g = null;this.g = new N(this.c, this.s);this.h = new N(this.c, this.s);this.j = new N(this.c, this.s);this.o = new N(this.c, this.s);a = new H(this.a.c + ",serif", K(this.a));a = P(a);this.g.a.style.cssText = a;a = new H(this.a.c + ",sans-serif", K(this.a));a = P(a);this.h.a.style.cssText = a;a = new H("serif", K(this.a));a = P(a);this.j.a.style.cssText = a;a = new H("sans-serif", K(this.a));a = P(a);this.o.a.style.cssText = a;O(this.g);O(this.h);O(this.j);O(this.o);
	  }var S = { D: "serif", C: "sans-serif" },
	      T = null;function U() {
	    if (null === T) {
	      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
	    }return T;
	  }R.prototype.start = function () {
	    this.f.serif = this.j.a.offsetWidth;this.f["sans-serif"] = this.o.a.offsetWidth;this.A = q();la(this);
	  };
	  function ma(a, b, c) {
	    for (var d in S) {
	      if (S.hasOwnProperty(d) && b === a.f[S[d]] && c === a.f[S[d]]) return !0;
	    }return !1;
	  }function la(a) {
	    var b = a.g.a.offsetWidth,
	        c = a.h.a.offsetWidth,
	        d;(d = b === a.f.serif && c === a.f["sans-serif"]) || (d = U() && ma(a, b, c));d ? q() - a.A >= a.w ? U() && ma(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v);
	  }function na(a) {
	    setTimeout(p(function () {
	      la(this);
	    }, a), 50);
	  }function V(a, b) {
	    setTimeout(p(function () {
	      v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a);
	    }, a), 0);
	  };function W(a, b, c) {
	    this.c = a;this.a = b;this.f = 0;this.o = this.j = !1;this.s = c;
	  }var X = null;W.prototype.g = function (a) {
	    var b = this.a;b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]);L(b, "fontactive", a);this.o = !0;oa(this);
	  };
	  W.prototype.h = function (a) {
	    var b = this.a;if (b.g) {
	      var c = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active")),
	          d = [],
	          e = [b.a.c("wf", a.c, K(a).toString(), "loading")];c || d.push(b.a.c("wf", a.c, K(a).toString(), "inactive"));w(b.f, d, e);
	    }L(b, "fontinactive", a);oa(this);
	  };function oa(a) {
	    0 == --a.f && a.j && (a.o ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), L(a, "active")) : M(a.a));
	  };function pa(a) {
	    this.j = a;this.a = new ja();this.h = 0;this.f = this.g = !0;
	  }pa.prototype.load = function (a) {
	    this.c = new ca(this.j, a.context || this.j);this.g = !1 !== a.events;this.f = !1 !== a.classes;qa(this, new ha(this.c, a), a);
	  };
	  function ra(a, b, c, d, e) {
	    var f = 0 == --a.h;(a.f || a.g) && setTimeout(function () {
	      var a = e || null,
	          k = d || null || {};if (0 === c.length && f) M(b.a);else {
	        b.f += c.length;f && (b.j = f);var h,
	            m = [];for (h = 0; h < c.length; h++) {
	          var l = c[h],
	              n = k[l.c],
	              r = b.a,
	              x = l;r.g && w(r.f, [r.a.c("wf", x.c, K(x).toString(), "loading")]);L(r, "fontloading", x);r = null;null === X && (X = window.FontFace ? (x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(x[1], 10) : !0 : !1);X ? r = new Q(p(b.g, b), p(b.h, b), b.c, l, b.s, n) : r = new R(p(b.g, b), p(b.h, b), b.c, l, b.s, a, n);m.push(r);
	        }for (h = 0; h < m.length; h++) {
	          m[h].start();
	        }
	      }
	    }, 0);
	  }function qa(a, b, c) {
	    var d = [],
	        e = c.timeout;ia(b);var d = ka(a.a, c, a.c),
	        f = new W(a.c, b, e);a.h = d.length;b = 0;for (c = d.length; b < c; b++) {
	      d[b].load(function (b, d, c) {
	        ra(a, f, b, d, c);
	      });
	    }
	  };function sa(a, b) {
	    this.c = a;this.a = b;
	  }function ta(a, b, c) {
	    var d = z(a.c);a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");return d + "//" + a + "/" + b + ".js" + (c ? "?v=" + c : "");
	  }
	  sa.prototype.load = function (a) {
	    function b() {
	      if (f["__mti_fntLst" + d]) {
	        var c = f["__mti_fntLst" + d](),
	            e = [],
	            h;if (c) for (var m = 0; m < c.length; m++) {
	          var l = c[m].fontfamily;void 0 != c[m].fontStyle && void 0 != c[m].fontWeight ? (h = c[m].fontStyle + c[m].fontWeight, e.push(new H(l, h))) : e.push(new H(l));
	        }a(e);
	      } else setTimeout(function () {
	        b();
	      }, 50);
	    }var c = this,
	        d = c.a.projectId,
	        e = c.a.version;if (d) {
	      var f = c.c.m;B(this.c, ta(c, d, e), function (e) {
	        e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
	          return c.a;
	        }, b());
	      }).id = "__MonotypeAPIScript__" + d;
	    } else a([]);
	  };function ua(a, b) {
	    this.c = a;this.a = b;
	  }ua.prototype.load = function (a) {
	    var b,
	        c,
	        d = this.a.urls || [],
	        e = this.a.families || [],
	        f = this.a.testStrings || {},
	        g = new C();b = 0;for (c = d.length; b < c; b++) {
	      A(this.c, d[b], D(g));
	    }var k = [];b = 0;for (c = e.length; b < c; b++) {
	      if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), m = 0; m < h.length; m += 1) {
	        k.push(new H(d[0], h[m]));
	      } else k.push(new H(d[0]));
	    }F(g, function () {
	      a(k, f);
	    });
	  };function va(a, b, c) {
	    a ? this.c = a : this.c = b + wa;this.a = [];this.f = [];this.g = c || "";
	  }var wa = "//fonts.googleapis.com/css";function xa(a, b) {
	    for (var c = b.length, d = 0; d < c; d++) {
	      var e = b[d].split(":");3 == e.length && a.f.push(e.pop());var f = "";2 == e.length && "" != e[1] && (f = ":");a.a.push(e.join(f));
	    }
	  }
	  function ya(a) {
	    if (0 == a.a.length) throw Error("No fonts to load!");if (-1 != a.c.indexOf("kit=")) return a.c;for (var b = a.a.length, c = [], d = 0; d < b; d++) {
	      c.push(a.a[d].replace(/ /g, "+"));
	    }b = a.c + "?family=" + c.join("%7C");0 < a.f.length && (b += "&subset=" + a.f.join(","));0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));return b;
	  };function za(a) {
	    this.f = a;this.a = [];this.c = {};
	  }
	  var Aa = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" },
	      Ba = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" },
	      Ca = { i: "i", italic: "i", n: "n", normal: "n" },
	      Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
	  function Ea(a) {
	    for (var b = a.f.length, c = 0; c < b; c++) {
	      var d = a.f[c].split(":"),
	          e = d[0].replace(/\+/g, " "),
	          f = ["n4"];if (2 <= d.length) {
	        var g;var k = d[1];g = [];if (k) for (var k = k.split(","), h = k.length, m = 0; m < h; m++) {
	          var l;l = k[m];if (l.match(/^[\w-]+$/)) {
	            var n = Da.exec(l.toLowerCase());if (null == n) l = "";else {
	              l = n[2];l = null == l || "" == l ? "n" : Ca[l];n = n[1];if (null == n || "" == n) n = "4";else var r = Ba[n],
	                  n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);l = [l, n].join("");
	            }
	          } else l = "";l && g.push(l);
	        }0 < g.length && (f = g);3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = Aa[d[0]]) && (a.c[e] = d));
	      }a.c[e] || (d = Aa[e]) && (a.c[e] = d);for (d = 0; d < f.length; d += 1) {
	        a.a.push(new H(e, f[d]));
	      }
	    }
	  };function Fa(a, b) {
	    this.c = a;this.a = b;
	  }var Ga = { Arimo: !0, Cousine: !0, Tinos: !0 };Fa.prototype.load = function (a) {
	    var b = new C(),
	        c = this.c,
	        d = new va(this.a.api, z(c), this.a.text),
	        e = this.a.families;xa(d, e);var f = new za(e);Ea(f);A(c, ya(d), D(b));F(b, function () {
	      a(f.a, f.c, Ga);
	    });
	  };function Ha(a, b) {
	    this.c = a;this.a = b;
	  }Ha.prototype.load = function (a) {
	    var b = this.a.id,
	        c = this.c.m;b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
	      if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
	        b = c.Typekit.config.fn;for (var e = [], f = 0; f < b.length; f += 2) {
	          for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++) {
	            e.push(new H(g, k[h]));
	          }
	        }try {
	          c.Typekit.load({ events: !1, classes: !1, async: !0 });
	        } catch (m) {}a(e);
	      }
	    }, 2E3) : a([]);
	  };function Ia(a, b) {
	    this.c = a;this.f = b;this.a = [];
	  }Ia.prototype.load = function (a) {
	    var b = this.f.id,
	        c = this.c.m,
	        d = this;b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
	      for (var g = 0, k = c.fonts.length; g < k; ++g) {
	        var h = c.fonts[g];d.a.push(new H(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
	      }a(d.a);
	    }, B(this.c, z(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
	      b && a([]);
	    })) : a([]);
	  };var Y = new pa(window);Y.a.c.custom = function (a, b) {
	    return new ua(b, a);
	  };Y.a.c.fontdeck = function (a, b) {
	    return new Ia(b, a);
	  };Y.a.c.monotype = function (a, b) {
	    return new sa(b, a);
	  };Y.a.c.typekit = function (a, b) {
	    return new Ha(b, a);
	  };Y.a.c.google = function (a, b) {
	    return new Fa(b, a);
	  };var Z = { load: p(Y.load, Y) }; true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return Z;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
	})();

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	__webpack_require__(37);
	__webpack_require__(59);
	__webpack_require__(93);
	__webpack_require__(110);
	__webpack_require__(111);
	module.exports = __webpack_require__(15).Promise;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(41);
	var global = __webpack_require__(11);
	var ctx = __webpack_require__(16);
	var classof = __webpack_require__(94);
	var $export = __webpack_require__(14);
	var isObject = __webpack_require__(21);
	var aFunction = __webpack_require__(17);
	var anInstance = __webpack_require__(95);
	var forOf = __webpack_require__(96);
	var speciesConstructor = __webpack_require__(100);
	var task = __webpack_require__(101).set;
	var microtask = __webpack_require__(103)();
	var newPromiseCapabilityModule = __webpack_require__(104);
	var perform = __webpack_require__(105);
	var promiseResolve = __webpack_require__(106);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(58)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(107)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(57)($Promise, PROMISE);
	__webpack_require__(108)(PROMISE);
	Wrapper = __webpack_require__(15)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(109)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(51);
	var TAG = __webpack_require__(58)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(16);
	var call = __webpack_require__(97);
	var isArrayIter = __webpack_require__(98);
	var anObject = __webpack_require__(20);
	var toLength = __webpack_require__(53);
	var getIterFn = __webpack_require__(99);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(20);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(43);
	var ITERATOR = __webpack_require__(58)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(94);
	var ITERATOR = __webpack_require__(58)('iterator');
	var Iterators = __webpack_require__(43);
	module.exports = __webpack_require__(15).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(20);
	var aFunction = __webpack_require__(17);
	var SPECIES = __webpack_require__(58)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(16);
	var invoke = __webpack_require__(102);
	var html = __webpack_require__(56);
	var cel = __webpack_require__(25);
	var global = __webpack_require__(11);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(51)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var macrotask = __webpack_require__(101).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(51)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(17);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(20);
	var isObject = __webpack_require__(21);
	var newPromiseCapability = __webpack_require__(104);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(18);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(11);
	var core = __webpack_require__(15);
	var dP = __webpack_require__(19);
	var DESCRIPTORS = __webpack_require__(23);
	var SPECIES = __webpack_require__(58)('species');

	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(58)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(14);
	var core = __webpack_require__(15);
	var global = __webpack_require__(11);
	var speciesConstructor = __webpack_require__(100);
	var promiseResolve = __webpack_require__(106);

	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(14);
	var newPromiseCapability = __webpack_require__(104);
	var perform = __webpack_require__(105);

	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function () {
	  function _class(copyXML) {
	    (0, _classCallCheck3.default)(this, _class);

	    this.xmldata = copyXML;
	    this.copydata = {};
	    var nodes = this.xmldata.getElementsByTagName('item');
	    for (var i = 0; i < nodes.length; i++) {
	      this.copydata[nodes[i].getAttribute('id')] = nodes[i].childNodes[0].nodeValue;
	    }
	  }

	  (0, _createClass3.default)(_class, [{
	    key: 'getCopy',
	    value: function getCopy(id) {
	      if (!this.copydata) {
	        return '';
	      }
	      return this.copydata[id] || "copy not found";
	    }
	  }]);
	  return _class;
	}();

	exports.default = _class;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function () {
	  function _class(game) {
	    (0, _classCallCheck3.default)(this, _class);

	    this.game = game;
	    this.sounds = {};
	    this._allowMusic = false;
	    this._allowEffects = false;
	    this.backgroundMusic = { id: "", volume: 1 };

	    Object.defineProperty(this, "allowMusic", {
	      get: function get() {
	        return this._allowMusic;
	      },
	      set: function set(value) {
	        this._allowMusic = value;
	        if (this._allowMusic && this.backgroundMusic.id) {
	          this.playBackgroundMusic(this.backgroundMusic.id, this.backgroundMusic.volume);
	        } else if (!this._allowMusic && this.backgroundMusic.id) {
	          this.stopSound(this.backgroundMusic.id);
	        }
	      }
	    });

	    Object.defineProperty(this, "allowEffects", {
	      get: function get() {
	        return this._allowEffects;
	      },
	      set: function set(value) {
	        this._allowEffects = value;
	        if (!this._allowEffects) {
	          for (var i in this.sounds) {
	            if (i != this.backgroundMusic.id) this.sounds[i].stop();
	          }
	        }
	      }
	    });
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "addSound",
	    value: function addSound(id, assetKey) {
	      this.sounds[id] = this.game.add.audio(assetKey);
	    }
	  }, {
	    key: "playBackgroundMusic",
	    value: function playBackgroundMusic(id, volume) {
	      if (this.sounds[id]) {
	        if (this.backgroundMusic.id != id) {
	          this.stopSound(this.backgroundMusic.id);
	        }

	        this.backgroundMusic.id = id;
	        this.backgroundMusic.volume = volume;

	        if (this._allowMusic) {
	          this.sounds[id].play(null, 0, volume || 1, true);
	        }
	      } else {
	        console.log("cannot find background music : " + id + ", has it been added?");
	      }
	    }
	  }, {
	    key: "playSoundEffect",
	    value: function playSoundEffect(id, loop, volume) {
	      if (this._allowEffects) {
	        if (this.sounds[id]) this.playSound(id, loop, volume);else console.log("cannot find sound effect : " + id + ", has it been added?");
	      }
	    }
	  }, {
	    key: "playSound",
	    value: function playSound(id, loop, volume) {
	      if (this.sounds[id]) this.sounds[id].play(null, 0, volume || 1, loop);else console.log("cannot find sound : " + id + ", has it been added?");
	    }
	  }, {
	    key: "stopSound",
	    value: function stopSound(id) {
	      if (this.sounds[id]) this.sounds[id].stop();
	    }
	  }, {
	    key: "isSoundPlaying",
	    value: function isSoundPlaying(id) {
	      if (this.sounds[id]) return this.sounds[id].isPlaying;
	      return false;
	    }
	  }, {
	    key: "stopAllSounds",
	    value: function stopAllSounds() {
	      for (var i in this.sounds) {
	        this.sounds[i].stop();
	      }
	    }
	  }]);
	  return _class;
	}();

	exports.default = _class;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);

	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);

	        // add graphics
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));

	        _this.logo = _this.game.add.image(0, _this.game.height * 0.25, "cn_preloader_bg");
	        _this.logo.anchor.set(0.5);

	        _this.loadPattern = _this.game.add.image(0, _this.game.height * 0.75, "cn_preloader_pattern");
	        _this.loadPattern.anchor.set(0.5);

	        _this.loadBar = _this.game.add.image(0, _this.loadPattern.y - 2, "cn_preloader_bar");
	        _this.loadBar.anchor.set(0.5);

	        _this.loadPosition = -64;
	        _this.loadOffset = 0;

	        _this.addChild(_this.logo);
	        _this.addChild(_this.loadPattern);
	        _this.addChild(_this.loadBar);
	        return _this;
	    }

	    (0, _createClass3.default)(_class, [{
	        key: "update",
	        value: function update() {
	            this.loadOffset += 5;
	            this.loadPattern.x = this.loadOffset + this.loadPosition;

	            if (this.loadOffset >= 128) {
	                this.loadOffset = 0;
	            }
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _Hero = __webpack_require__(116);

	var _Hero2 = _interopRequireDefault(_Hero);

	var _TimeStamp = __webpack_require__(117);

	var _TimeStamp2 = _interopRequireDefault(_TimeStamp);

	var _Hazard = __webpack_require__(118);

	var _Hazard2 = _interopRequireDefault(_Hazard);

	var _NegativeMatter = __webpack_require__(119);

	var _NegativeMatter2 = _interopRequireDefault(_NegativeMatter);

	var _HeroMissile = __webpack_require__(120);

	var _HeroMissile2 = _interopRequireDefault(_HeroMissile);

	var _HazardExplosion = __webpack_require__(121);

	var _HazardExplosion2 = _interopRequireDefault(_HazardExplosion);

	var _GameHUD = __webpack_require__(122);

	var _GameHUD2 = _interopRequireDefault(_GameHUD);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);

	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(_class, [{
	        key: 'init',
	        value: function init(data) {
	            this.gameMode = "timed";
	        }
	    }, {
	        key: 'preload',
	        value: function preload() {}
	    }, {
	        key: 'create',
	        value: function create() {
	            this.game.sounds.playBackgroundMusic("game_background", 1);

	            this.gameContainer = this.game.add.group();
	            this.background = this.game.add.sprite(0, 0, "background");

	            // hero
	            this.hero = new _Hero2.default(this.game, this.game.width / 2, this.game.height * 0.83);

	            this.heroMouthTimerStart = null;
	            this.heroMouthInterval = this.game.rnd.integerInRange(2000, 3000);
	            this.heroNextBodyDirection = null; //values: 0 for left, 1 for right
	            this.heroCurrentBodyDirection = 1; //values: 0 for left, 1 for right

	            this.heroBlinkTimerStart = null;
	            this.heroBlinkDuration = 100;
	            this.heroBlinkInterval = this.game.rnd.integerInRange(1000, 2000);

	            // hero missiles
	            this.heroMissiles = [];
	            this.heroMissilePool = [];
	            this.heroMissileSpeed = this.game.data.hero.missileSpeed / 1000;
	            this.heroMissileDelay = this.game.data.hero.missileDelay;
	            this.heroMissileLastFired = 0;
	            this.heroMissileContainer = this.game.make.group();

	            // hazard stuff
	            this.hazards = [];
	            this.hazardPool = [];
	            this.hazardSpeed = this.gameMode == "survival" ? this.game.data.survival.hazardSpeed / 1000 : this.game.data.timed.hazardSpeed / 1000;
	            this.hazardSpawnDelay = this.gameMode == "survival" ? this.game.data.survival.hazardDelay : this.game.data.timed.hazardDelay;
	            this.hazardLastSpawned = this.game.time.now;
	            this.hazardContainer = this.game.make.group();

	            // time
	            this.timeStamp = new _TimeStamp2.default(this.game.time.now);
	            this.timeDuration = this.game.data.timed.duration;
	            this.timeend = 0;
	            this.gameover = false;

	            // score
	            this.playerScore = 0;
	            this.playerScoreCap = this.gameMode == "survival" ? this.game.data.survival.pointsCap : this.game.data.timed.pointsCap;

	            this.hud = new _GameHUD2.default(this.game, { clock: true, score: true });
	            this.hud.setTimeDisplay(this.timeDuration);

	            // add display objects
	            this.gameContainer.addChild(this.background);
	            this.gameContainer.addChild(this.hazardContainer);
	            this.gameContainer.addChild(this.heroMissileContainer);
	            this.gameContainer.addChild(this.hero);
	            this.game.add.existing(this.gameContainer);
	            this.game.add.existing(this.hud);

	            this.game.onPause.add(this.handlePause, this);
	            this.game.onResume.add(this.handleResume, this);

	            this.state = 0;
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.updateHeroMissiles();
	            this.timeStamp.updateTime(this.game.time.now);

	            switch (this.state) {
	                case 0:
	                    this.blinkHero();
	                    if (this.game.time.now - this.timeStamp.timeStart > 2500) {
	                        this.heroMouthTimerStart = this.game.time.now;
	                        this.heroBlinkTimerStart = this.game.time.now;
	                        this.state = 1;
	                    }
	                    break;
	                case 1:
	                    this.checkHazardSpawn();
	                    this.updateHazards();
	                    this.swapMouths();
	                    this.blinkHero();

	                    if (this.game.input.activePointer.isDown) this.fire(this.game.input);
	                    if (this.gameMode != "survival") this.updateTimedGame();
	                    this.hud.setTimeDisplay(this.timeDuration);

	                    var clockSoundPlaying = this.game.sounds.isSoundPlaying("timesup");
	                    if (this.timeDuration < 5000 && !clockSoundPlaying) {
	                        this.game.sounds.playSound("timesup", 1, true);
	                    } else if (this.timeDuration > 5000 && clockSoundPlaying) {
	                        this.game.sounds.stopSound("timesup");
	                    }
	                    break;
	                case 2:
	                    if (this.game.time.now - this.timeend > 1500) {
	                        this.game.sounds.stopSound("timesup");
	                        this.game.state.start("GameEnd", true, false, this.playerScore);
	                    }
	                    break;
	            }
	        }
	    }, {
	        key: 'selfPlay',
	        value: function selfPlay() {
	            var dist = 100000;
	            var hazard;
	            for (var i in this.hazards) {
	                // get the distance between hazard and bullet
	                var dx = Phaser.Math.distance(this.hero.x, this.hero.y, this.hazards[i].x, this.hazards[i].y);
	                if (dx < dist) {
	                    hazard = this.hazards[i];
	                    dist = dx;
	                }
	            }
	            if (hazard) {
	                this.fire(hazard);
	            }
	        }

	        //===========================================================================================================================================
	        //  UPDATE TIMED GAME
	        //===========================================================================================================================================

	    }, {
	        key: 'updateTimedGame',
	        value: function updateTimedGame() {
	            // reduce time
	            this.timeDuration = Math.max(0, this.timeDuration - this.timeStamp.timeStep);
	            // update display
	            //  this.clock.setTime(this.timeDuration);
	            // is it gameover yet?
	            if (this.timeDuration <= 0) this.endTimedGame();
	        }

	        //===========================================================================================================================================
	        //  FIRE MISSILES
	        //===========================================================================================================================================

	    }, {
	        key: 'fire',
	        value: function fire(point) {

	            var radians = Phaser.Math.angleBetweenPoints(this.hero, point);
	            var checkAngle = radians * (180 / Math.PI);

	            var heroAngle = checkAngle;

	            if (checkAngle < -105 || checkAngle > 90) {
	                heroAngle = -105;
	                //checkAngle = -100;
	            }
	            if (checkAngle > -75 && checkAngle < 90) {
	                heroAngle = -75;
	                //checkAngle = -80;
	            }

	            if (checkAngle < -180 || checkAngle > 90) checkAngle = -180;
	            if (checkAngle > 0) checkAngle = 0;

	            // calculate angle to shoot at
	            var angle = checkAngle * (Math.PI / 180);

	            // adjust the heros head aim
	            heroAngle = heroAngle * (Math.PI / 180);
	            this.hero.aim(heroAngle + Math.PI / 2, angle);

	            //body animation
	            if (point.position.x > this.game.width * 0.6) {
	                this.heroNextBodyDirection = 0;
	            }
	            if (point.position.x < this.game.width * 0.4) {
	                this.heroNextBodyDirection = 1;
	            }
	            if (this.heroCurrentBodyDirection != this.heroNextBodyDirection) {
	                switch (this.heroNextBodyDirection) {
	                    case 0:
	                        this.hero.turnBodyLeft();
	                        this.heroCurrentBodyDirection = this.heroNextBodyDirection;
	                        break;
	                    case 1:
	                        this.hero.turnBodyRight();
	                        this.heroCurrentBodyDirection = this.heroNextBodyDirection;
	                        break;
	                }
	            }

	            // if missile delay has passed, allow the fire
	            if (this.game.time.now - this.heroMissileLastFired > this.heroMissileDelay) {
	                this.game.sounds.playSoundEffect("shoot", false, 1);
	                // spawn missile object freom pool or create new if needed
	                var missile = this.heroMissilePool.shift() || new _HeroMissile2.default(this.game);
	                missile.resetMissile();

	                // set position and rotation
	                missile.rotation = angle;
	                var startPosition = this.hero.getLaunchPosition();
	                missile.position.set(startPosition.x, startPosition.y);

	                // add to game display and active missiles
	                this.heroMissiles.push(missile);
	                this.heroMissileContainer.addChild(missile);

	                // reset last fired clock for missile delay
	                this.heroMissileLastFired = this.game.time.now;

	                //particle burst
	                this.hero.particleBlast();

	                this.game.sounds.playSoundEffect("shoot", false, 1);
	            }
	        }

	        //===========================================================================================================================================
	        //  UPDATE MISSILES
	        //===========================================================================================================================================

	    }, {
	        key: 'updateHeroMissiles',
	        value: function updateHeroMissiles() {
	            // calculate how far missile should travel this frame
	            var speed = this.timeStamp.timeStep * this.heroMissileSpeed;

	            // set loop vars
	            var g = []; // create garbage array for safe clear
	            var missile = 0; // missile for reference
	            var i = 0; // i for loop

	            // loop
	            for (i = 0; i < this.heroMissiles.length; i++) {
	                missile = this.heroMissiles[i];

	                // move missile in direction facing
	                missile.x += speed * Math.cos(missile.rotation);
	                missile.y += speed * Math.sin(missile.rotation);

	                // if the missile is not in game view - shove it in the garbage
	                if (missile.x < -100 || missile.x > this.game.width + 100 || missile.y < -100) g.push(missile);
	            }

	            // loop the garbage. remove active missile and put in pool
	            for (i = 0; i < g.length; i++) {
	                this.heroMissiles.splice(this.heroMissiles.indexOf(g[i]), 1);
	                this.heroMissilePool.push(g[i]);
	            }
	        }

	        //===========================================================================================================================================
	        //  SPAWN HAZARDS
	        //===========================================================================================================================================

	    }, {
	        key: 'checkHazardSpawn',
	        value: function checkHazardSpawn() {
	            // if enough time has passed sinse last hazard, drop a new one
	            if (this.game.time.now - this.hazardLastSpawned > this.hazardSpawnDelay) {

	                var negativeMatter = this.hazardPool.shift() || new _NegativeMatter2.default(this.game);
	                negativeMatter.resetNegativeMatter();

	                // choose a random x position with a slight overcast
	                var tx = Math.random() * (0, this.game.width + 200) - 100;
	                var ty = -100;

	                // if x position is overcast, allow y to drop lower for side entry
	                if (tx < 0 || tx > this.game.width) ty = Math.random() * (this.game.height * 0.2);

	                // set hazard position
	                negativeMatter.position.set(tx, ty);

	                // rotate hazard towards hero - we wanna go that way!
	                negativeMatter.setDirection(Phaser.Math.angleBetweenPoints(negativeMatter, this.hero));
	                //hazard.reset();

	                // add hazard to active array and display
	                this.hazards.push(negativeMatter);
	                this.hazardContainer.addChild(negativeMatter);

	                // reset timer
	                this.hazardLastSpawned = this.game.time.now;
	            }
	        }

	        //===========================================================================================================================================
	        //  UPDATE HAZARDS
	        //===========================================================================================================================================

	    }, {
	        key: 'updateHazards',
	        value: function updateHazards() {
	            // calculate how far missile should travel this frame
	            var speed = this.timeStamp.timeStep * this.hazardSpeed;

	            // set loop vars
	            var g = [];
	            var hazard = 0;
	            var i = 0;

	            // loop all existing hazards
	            for (i = 0; i < this.hazards.length; i++) {
	                hazard = this.hazards[i];

	                // move hazard based on hazard rotation
	                hazard.x += speed * Math.cos(hazard.direction);
	                hazard.y += speed * Math.sin(hazard.direction);

	                // check if hazard collides with a bullet or hero
	                this.checkHazardHeroCollision(hazard);
	                this.checkHazardMissileCollision(hazard);

	                // if the hazard is below the game screen, it's obsolete - garbage!
	                if (hazard.y > this.game.height + 100) g.push(hazard);
	            }

	            // filter garabeg to pool dead active hazards
	            for (i = 0; i < g.length; i++) {
	                this.hazards.splice(this.hazards.indexOf(g[i]), 1);
	                this.hazardPool.push(g[i]);
	            }
	        }

	        //===========================================================================================================================================
	        //  COLLISION : HAZARD vs MISSILE
	        //===========================================================================================================================================

	    }, {
	        key: 'checkHazardMissileCollision',
	        value: function checkHazardMissileCollision(hazard) {
	            var missile = 0;
	            for (var i in this.heroMissiles) {
	                missile = this.heroMissiles[i];

	                // get the distance between hazard and bullet
	                var dx = Phaser.Math.distance(missile.x, missile.y, hazard.x, hazard.y);

	                // if the distance is less than hazard radius - bullet has hit hazard
	                if (dx < 100) {
	                    // calculate score based on hazard distance (further away = more points, with a points cap)
	                    //let score = Math.round(Math.max(0, Math.min(Phaser.Math.distance(this.hero.x, this.hero.y, hazard.x, hazard.y), this.playerScoreCap)));
	                    var score = this.game.data.points_per_hit;
	                    // increment score and update display
	                    this.addToScore(score);

	                    // move position way off screen, this will marke it for garbage pooling
	                    missile.position.y = -1000;

	                    // destroy the hazard
	                    this.destroyHazard(hazard);

	                    // no need to carry on
	                    break;
	                }
	            }
	        }

	        //===========================================================================================================================================
	        //  COLLISION : HAZARD vs HERO
	        //===========================================================================================================================================

	    }, {
	        key: 'checkHazardHeroCollision',
	        value: function checkHazardHeroCollision(hazard) {
	            // get the distance between hazard and hero
	            var dx = Phaser.Math.distance(this.hero.x, this.hero.y, hazard.x, hazard.y);

	            // if the distance is less than hazard radius - hazard has hit our hero
	            if (dx < 150) {
	                // if this is survival - then game over!
	                if (this.gameMode == "survival") {
	                    this.destroyHero();
	                } else {
	                    // otherwise destroy the hazard
	                    this.destroyHazard(hazard);
	                    // and drop teh maximum points because I'm harsh like that
	                    this.addToScore(-this.game.data.timed.pointsLost);
	                }
	            }
	        }

	        //===========================================================================================================================================
	        //  DESTROY HAZARD EFFECT
	        //===========================================================================================================================================

	    }, {
	        key: 'destroyHazard',
	        value: function destroyHazard(hazard) {
	            // create a particle explosion for prettiness
	            var explosion = new _HazardExplosion2.default(this.game, hazard.x, hazard.y);
	            this.gameContainer.addChild(explosion);

	            this.game.sounds.playSoundEffect("enemy", false, 1);

	            //throw the hazard offscreen for garbage pooling
	            hazard.y = this.game.height + 500;

	            if (this.gameMode == "survival") {
	                this.hazardSpawnDelay *= this.game.data.survival.hazardDelayDampening;
	            }
	        }

	        //===========================================================================================================================================
	        //  SWAP HERO MOUTHS
	        //===========================================================================================================================================

	    }, {
	        key: 'swapMouths',
	        value: function swapMouths() {
	            var heroMouthTimerNow = this.game.time.now;
	            if (heroMouthTimerNow - this.heroMouthTimerStart > this.heroMouthInterval) {
	                this.hero.resetMouth();
	                this.heroMouthInterval = this.game.rnd.integerInRange(2000, 3000);
	                this.heroMouthTimerStart = heroMouthTimerNow;
	            }
	        }

	        //===========================================================================================================================================
	        //  MAKE HERO BLINK
	        //===========================================================================================================================================

	    }, {
	        key: 'blinkHero',
	        value: function blinkHero() {
	            var heroBlinkTimerNow = this.game.time.now;
	            if (!this.hero.isBlinking) {
	                if (heroBlinkTimerNow - this.heroBlinkTimerStart > this.heroBlinkInterval) {
	                    this.hero.blinkEyes();
	                    this.heroBlinkTimerStart = heroBlinkTimerNow;
	                }
	            } else {
	                if (heroBlinkTimerNow - this.heroBlinkTimerStart > this.heroBlinkDuration) {
	                    this.hero.openEyes();
	                    this.heroBlinkInterval = this.game.rnd.integerInRange(1000, 2000);
	                    this.heroBlinkTimerStart = heroBlinkTimerNow;
	                }
	            }
	        }

	        //===========================================================================================================================================
	        //  DESTROY HERO
	        //===========================================================================================================================================

	    }, {
	        key: 'destroyHero',
	        value: function destroyHero() {
	            // it would be game over yup
	            this.endGame();

	            // hide the hero, and create particle explosiong for funsies
	            this.hero.visible = false;
	        }

	        //===========================================================================================================================================
	        //  END TIMED GAME
	        //===========================================================================================================================================

	    }, {
	        key: 'endTimedGame',
	        value: function endTimedGame() {
	            // mark gameover
	            this.endGame();

	            // destroy all the hazards on screen for pretty reasons
	            var i = 0;
	            for (i; i < this.hazards.length; i++) {
	                this.destroyHazard(this.hazards[i]);
	            }
	        }
	    }, {
	        key: 'endGame',
	        value: function endGame() {
	            this.game.sounds.stopSound("timesup");
	            this.state = 2;
	            this.timeend = this.game.time.now;
	        }

	        //===========================================================================================================================================
	        //  UPDATE SCORE
	        //===========================================================================================================================================

	    }, {
	        key: 'addToScore',
	        value: function addToScore(value) {
	            this.playerScore = Math.max(0, this.playerScore += value);
	            this.hud.setScoreDisplay(this.playerScore);
	        }

	        //===========================================================================================================================================
	        //  PARTICLE EXPLOSION
	        //===========================================================================================================================================

	    }, {
	        key: 'explodeParticles',
	        value: function explodeParticles(x, y) {
	            //while(count--)  this.game.add.existing(new DeathParticle(this.game, x, y, fill, stroke));

	            var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
	            var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x505050;
	            var stroke = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0x505050;
	        }
	    }, {
	        key: 'handlePause',
	        value: function handlePause() {
	            this.timePaused = this.game.time.now;
	        }
	    }, {
	        key: 'handleResume',
	        value: function handleResume(e) {
	            this.timeStamp.timeUpdated += this.game.time.now - this.timePaused;
	        }
	    }, {
	        key: 'shutdown',
	        value: function shutdown() {
	            this.game.sounds.stopSound("game_background");
	            this.game.onPause.remove(this.handlePause, this);
	            this.game.onResume.remove(this.handleResume, this);
	        }
	    }]);
	    return _class;
	}(Phaser.State);

	exports.default = _class;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));

	    _this.launchAngle = null;
	    _this.game = game;
	    _this.costume = _this.game.add.sprite(8, 13, "unikitty_body_sp");
	    _this.costume.animations.add("turnBodyLeft", ["kitty_body1.png", "kitty_body2.png", "kitty_body3.png", "kitty_body4.png", "kitty_body5.png", "kitty_body6.png", "kitty_body7.png", "kitty_body8.png"]);

	    _this.costume.animations.add("turnBodyRight", ["kitty_body8.png", "kitty_body9.png", "kitty_body10.png", "kitty_body11.png", "kitty_body12.png", "kitty_body13.png", "kitty_body14.png", "kitty_body1.png"]);

	    _this.costume.anchor.set(0.5, 0.42);
	    _this.pointer = _this.game.make.sprite(0, 13);

	    _this.head = _this.game.make.sprite(0, 0, "unikitty_head");
	    _this.head.anchor.set(0.5, 1);

	    //eyeballs
	    _this.eyeContainer = _this.game.make.sprite(0, 0);
	    _this.eyeballLeft = _this.game.make.sprite(50, -90, "unikitty_eye");
	    _this.eyeballLeft.anchor.set(0.5);
	    _this.eyeballRight = _this.game.make.sprite(-55, -90, "unikitty_eye");
	    _this.eyeballRight.anchor.set(0.5);
	    _this.eyeContainer.addChild(_this.eyeballLeft);
	    _this.eyeContainer.addChild(_this.eyeballRight);

	    _this.mouthShape = _this.game.make.sprite();
	    _this.eyeballLeft.anchor.set(0.5);
	    _this.resetMouth();

	    // is this ok? eyes white
	    _this.eyeWhite1 = _this.game.make.graphics();
	    _this.eyeWhite1.beginFill(0xFFFFFF, 1);
	    _this.eyeWhite1.drawCircle(50, -90, 90);
	    _this.eyeWhite1.drawCircle(-55, -90, 90);
	    _this.eyeWhite1.endFill();

	    _this.particleEmitter = _this.game.add.emitter(0, -125, 50);
	    _this.particleEmitter.makeParticles(['icon_missile_1', 'icon_missile_2', 'icon_missile_3', 'icon_missile_4', 'icon_missile_5', 'icon_missile_6', 'icon_missile_7', 'icon_missile_8', 'icon_missile_9', 'icon_missile_10']);

	    _this.particleEmitter.setSize(300, 300);
	    _this.particleEmitter.setAlpha(1, 0, 4000, Phaser.Easing.Quintic.Out);
	    _this.particleEmitter.minParticleScale = 0.35;
	    _this.particleEmitter.maxParticleScale = 0.35;
	    _this.particleEmitter.gravity = 300;

	    _this.isBlinking = false;

	    _this.addChild(_this.particleEmitter);
	    _this.addChild(_this.costume);
	    _this.addChild(_this.pointer);

	    _this.pointer.addChild(_this.eyeWhite1);
	    _this.pointer.addChild(_this.eyeContainer);
	    _this.pointer.addChild(_this.head);
	    _this.pointer.addChild(_this.mouthShape);

	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "aim",
	    value: function aim(headAngle, launchAngle) {
	      this.pointer.rotation = headAngle;
	      this.launchAngle = launchAngle;

	      this.eyeContainer.x = 15 * Math.cos(this.launchAngle);
	      this.eyeContainer.y = 15 * Math.sin(this.launchAngle);
	    }
	  }, {
	    key: "blinkEyes",
	    value: function blinkEyes() {
	      this.isBlinking = true;
	      this.head.loadTexture("unikitty_blink");
	    }
	  }, {
	    key: "openEyes",
	    value: function openEyes() {
	      this.isBlinking = false;
	      this.head.loadTexture("unikitty_head");
	    }
	  }, {
	    key: "turnBodyLeft",
	    value: function turnBodyLeft() {
	      this.costume.animations.play("turnBodyLeft", 24);
	    }
	  }, {
	    key: "turnBodyRight",
	    value: function turnBodyRight() {
	      this.costume.animations.play("turnBodyRight", 24);
	    }
	  }, {
	    key: "resetMouth",
	    value: function resetMouth() {
	      var randomInt = this.game.rnd.integerInRange(1, 4);
	      this.mouthShape.loadTexture("unikitty_mouth_" + randomInt);
	      switch (randomInt) {
	        case 1:
	          this.mouthShape.x = -15;
	          this.mouthShape.y = -45;
	          break;
	        case 2:
	          this.mouthShape.x = -45;
	          this.mouthShape.y = -60;
	          break;
	        case 3:
	          this.mouthShape.x = -50;
	          this.mouthShape.y = -57;
	          break;
	        case 4:
	          this.mouthShape.x = -45;
	          this.mouthShape.y = -58;
	          break;
	        default:
	          this.mouthShape.x = -15;
	          this.mouthShape.y = -45;
	      }
	    }
	  }, {
	    key: "getLaunchPosition",
	    value: function getLaunchPosition() {
	      var x = this.x + this.pointer.x;
	      var y = this.y + this.pointer.y;

	      x += this.head.height * Math.cos(this.launchAngle);
	      y += this.head.height * Math.sin(this.launchAngle);

	      return { x: x, y: y };
	    }
	  }, {
	    key: "particleBlast",
	    value: function particleBlast() {
	      this.particleEmitter.start(true, 2000, null, 5);
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function () {
	  function _class(time) {
	    (0, _classCallCheck3.default)(this, _class);

	    this.timeStart = time;
	    this.timeUpdated = this.timeStart;
	    this.timeStep = 0;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "updateTime",
	    value: function updateTime(time) {
	      this.timeStep = time - this.timeUpdated;
	      this.timeUpdated = time;
	    }
	  }, {
	    key: "setTime",
	    value: function setTime(time) {}
	  }]);
	  return _class;
	}();

	exports.default = _class;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));

	    _this.costume = _this.game.make.sprite(0, 0, "hazard");
	    _this.costume.animations.add("play");
	    _this.costume.animations.play("play", 24, true);
	    _this.costume.anchor.set(0.5);
	    //  this.costume.angle = -90;
	    _this.addChild(_this.costume);

	    // this.test = this.game.make.graphics();
	    // this.test.beginFill(0xFFFF00, 0.5);
	    // this.test.drawCircle(0,0,128);

	    _this.reset();

	    _this.targetAngle = 15;
	    _this.offsetAngle = 0;
	    _this.tweenSpeed = 750;
	    _this.direction = 0;

	    //this.addChild(this.test);

	    _this.target = 1;
	    _this.tween = _this.game.add.tween(_this.costume);
	    _this.tween.onComplete.add(_this.handleTweenComplete, _this);
	    _this.tween.to({ angle: -10 }, _this.tweenSpeed).start();
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "setDirection",
	    value: function setDirection(value) {
	      this.direction = value;
	    }
	  }, {
	    key: "handleTweenComplete",
	    value: function handleTweenComplete() {
	      if (this.target == 1) {
	        this.target = 0;
	        this.tween.to({ angle: 10 }, this.tweenSpeed).start();
	      } else {
	        this.target = 1;
	        this.tween.to({ angle: -10 }, this.tweenSpeed).start();
	      }
	    }
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "explode",
	    value: function explode() {
	      this.alive = false;
	      //this.loadTexture("hazard_"+this.type+"_explode");
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.scale.set(this.x > this.game.width / 2 ? -1 : 1, 1);
	      this.alive = true;
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));

	    var negativeMatterItem = _this.game.rnd.integerInRange(1, 8);
	    _this.costume = _this.game.make.sprite(0, 0, "icon_negative_" + negativeMatterItem);

	    _this.costume.anchor.set(0.5);
	    //  this.costume.angle = -90;
	    _this.addChild(_this.costume);

	    // this.test = this.game.make.graphics();
	    // this.test.beginFill(0xFFFF00, 0.5);
	    // this.test.drawCircle(0,0,128);

	    _this.reset();

	    _this.targetAngle = 15;
	    _this.offsetAngle = 0;
	    _this.tweenSpeed = 750;
	    _this.direction = 0;

	    //this.addChild(this.test);

	    _this.target = 1;
	    _this.tween = _this.game.add.tween(_this.costume);
	    _this.tween.onComplete.add(_this.handleTweenComplete, _this);
	    _this.tween.to({ angle: -10 }, _this.tweenSpeed).start();
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "setDirection",
	    value: function setDirection(value) {
	      this.direction = value;
	    }
	  }, {
	    key: "handleTweenComplete",
	    value: function handleTweenComplete() {
	      if (this.target == 1) {
	        this.target = 0;
	        this.tween.to({ angle: 10 }, this.tweenSpeed).start();
	      } else {
	        this.target = 1;
	        this.tween.to({ angle: -10 }, this.tweenSpeed).start();
	      }
	    }
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "explode",
	    value: function explode() {
	      this.alive = false;
	      //this.loadTexture("hazard_"+this.type+"_explode");
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.scale.set(this.x > this.game.width / 2 ? -1 : 1, 1);
	      this.alive = true;
	    }
	  }, {
	    key: "resetNegativeMatter",
	    value: function resetNegativeMatter() {
	      this.costume.loadTexture("icon_negative_" + this.game.rnd.integerInRange(1, 8));
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));

	    _this.costume = _this.game.make.sprite();
	    _this.costume.anchor.set(0.5);
	    //this.costume.rotate = Math.PI/2;
	    _this.addChild(_this.costume);
	    _this.resetMissile();
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "resetMissile",
	    value: function resetMissile() {
	      //let negativeMatterItem = this.game.rnd.integerInRange(1,8);
	      //console.log
	      this.costume.loadTexture("icon_missile_" + this.game.rnd.integerInRange(1, 10));

	      // console.log(negativeMatterItem);
	      //this.costume = this.game.make.sprite(0,0,"icon_missile_" + negativeMatterItem);
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "hazard_explosion"));

	    _this.animations.add("play");
	    _this.animations.play("play", 23);
	    _this.animations.currentAnim.onComplete.add(_this.handleAnimationEnd, _this);
	    _this.anchor.set(0.5);
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "handleAnimationEnd",
	    value: function handleAnimationEnd() {
	      this.destroy();
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _ClockDisplay = __webpack_require__(123);

	var _ClockDisplay2 = _interopRequireDefault(_ClockDisplay);

	var _ScoreDisplay = __webpack_require__(124);

	var _ScoreDisplay2 = _interopRequireDefault(_ScoreDisplay);

	var _BtnPause = __webpack_require__(125);

	var _BtnPause2 = _interopRequireDefault(_BtnPause);

	var _IntructionMouseClick = __webpack_require__(126);

	var _IntructionMouseClick2 = _interopRequireDefault(_IntructionMouseClick);

	var _IntructionTapScreen = __webpack_require__(127);

	var _IntructionTapScreen2 = _interopRequireDefault(_IntructionTapScreen);

	var _BtnSoundToggle = __webpack_require__(128);

	var _BtnSoundToggle2 = _interopRequireDefault(_BtnSoundToggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);

	    function _class(game, args) {
	        (0, _classCallCheck3.default)(this, _class);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game));

	        args = args || {};

	        // add game UI
	        if (args.clock) {
	            _this.clockDisplay = new _ClockDisplay2.default(_this.game);
	            _this.clockDisplay.setTime(_this.game.data.game_time);
	            _this.addChild(_this.clockDisplay);
	        }

	        if (args.score) {
	            _this.scoreDisplay = new _ScoreDisplay2.default(_this.game);
	            _this.addChild(_this.scoreDisplay);
	        }

	        // is this ok?
	        _this.semiOpaquePauseLayer = _this.game.make.graphics();
	        _this.semiOpaquePauseLayer.beginFill(0x000000, 0.3);
	        _this.semiOpaquePauseLayer.drawRect(_this.game.top, _this.game.left, _this.game.width, _this.game.height);
	        _this.semiOpaquePauseLayer.endFill();
	        _this.semiOpaquePauseLayer.visible = false;
	        //

	        _this.btnPause = new _BtnPause2.default(_this.game);
	        _this.pauseOverlay = _this.game.make.sprite(0, 0, "gameoverlay_pause");
	        _this.pauseOverlay.position.set(_this.game.width / 2 - _this.pauseOverlay.width / 2, _this.game.height * 0.4 - _this.pauseOverlay.height / 2);
	        _this.pauseOverlay.visible = false;
	        _this.pauseOverlay.inputEnabled = true;
	        _this.pauseOverlay.input.useHandCursor = true;
	        _this.pauseOverlay.events.onInputUp.add(_this.btnPause.resumeGame, _this.btnPause);

	        _this.btnSound = new _BtnSoundToggle2.default(_this.game);
	        _this.btnSound.position.set(_this.game.width / 2 - _this.btnSound.width / 2, _this.game.height * 0.6);
	        _this.btnSound.visible = false;

	        _this.instruction = _this.game.isTouch ? new _IntructionTapScreen2.default(_this.game) : new _IntructionMouseClick2.default(_this.game);
	        _this.addChild(_this.instruction);
	        // is this ok?
	        _this.addChild(_this.btnPause);
	        _this.addChild(_this.semiOpaquePauseLayer);
	        //
	        _this.addChild(_this.pauseOverlay);
	        _this.addChild(_this.btnSound);

	        _this.game.onPause.add(_this.handlePause, _this);
	        _this.game.onResume.add(_this.handleResume, _this);
	        _this.game.scale.onSizeChange.add(_this.handleGameSizeChange, _this);
	        _this.pauseOverlay.y = _this.game.height / 2 - _this.pauseOverlay.height * 0.75;

	        _this.pauseInterval;
	        _this.pausedUpdate = _this.handleMouseUpdates.bind(_this);
	        _this.lastScreenSize = { width: 0, height: 0 };
	        _this.handleGameSizeChange();
	        return _this;
	    }

	    (0, _createClass3.default)(_class, [{
	        key: 'handleGameSizeChange',
	        value: function handleGameSizeChange() {
	            this.btnPause.position.set(this.scoreDisplay ? this.game.viewport.right - this.btnPause.width : this.game.viewport.right - this.btnPause.width, this.game.viewport.top);

	            if (this.scoreDisplay) this.scoreDisplay.position.set(this.game.viewport.right - this.scoreDisplay.width + 20, this.game.viewport.top - 20);

	            if (this.clockDisplay) this.clockDisplay.position.set(this.game.viewport.left - 20, this.game.viewport.top - 20);

	            this.pauseOverlay.position.set(this.game.viewport.centerX - this.pauseOverlay.width / 2, this.game.viewport.centerY - this.pauseOverlay.height * 0.60);
	            this.btnSound.position.set(this.game.viewport.centerX - this.btnSound.width / 2 + 10, this.pauseOverlay.y + this.pauseOverlay.height + 30);
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            if (window.innerWidth != this.lastScreenSize.width || window.innerHeight != this.game.viewport.height) this.handleGameSizeChange();
	        }
	    }, {
	        key: 'handleResume',
	        value: function handleResume() {
	            window.removeEventListener("mousemove", this.pausedUpdate);
	            this.pauseOverlay.visible = false;
	            // is this ok?
	            this.semiOpaquePauseLayer.visible = false;
	            //
	            this.btnSound.visible = false;
	            this.game.input.onDown.remove(this.handlePausedInput, this);
	            this.game.input.onUp.remove(this.handlePausedUpInput, this);
	        }
	    }, {
	        key: 'handlePause',
	        value: function handlePause(e) {
	            this.pauseOverlay.visible = true;
	            // is this ok?
	            this.semiOpaquePauseLayer.visible = true;
	            //
	            this.btnSound.visible = true;
	            this.game.input.onDown.add(this.handlePausedInput, this);
	            this.game.input.onUp.add(this.handlePausedUpInput, this);
	            window.addEventListener("mousemove", this.pausedUpdate);
	        }
	    }, {
	        key: 'setScoreDisplay',
	        value: function setScoreDisplay(value) {
	            if (this.scoreDisplay) this.scoreDisplay.setScore(value);
	        }
	    }, {
	        key: 'setTimeDisplay',
	        value: function setTimeDisplay(value) {
	            if (this.clockDisplay) this.clockDisplay.setTime(value);
	        }
	    }, {
	        key: 'handleMouseUpdates',
	        value: function handleMouseUpdates() {
	            var e = this.game.input;

	            if (this.isOverSound(e)) {
	                this.btnSound.handleOver();
	                this.game.updateRender();
	            } else {
	                this.btnSound.handleUp();
	                this.game.updateRender();
	            }
	        }
	    }, {
	        key: 'handlePausedUpInput',
	        value: function handlePausedUpInput() {
	            this.btnSound.handleUp();
	        }
	    }, {
	        key: 'isOverSound',
	        value: function isOverSound(e) {
	            return e.x > this.btnSound.x && e.x < this.btnSound.x + this.btnSound.width && e.y > this.btnSound.y && e.y < this.btnSound.y + this.btnSound.height;
	        }
	    }, {
	        key: 'handlePausedInput',
	        value: function handlePausedInput(e) {
	            if (this.isOverSound(e)) {
	                this.btnSound.handleInput();
	                this.btnSound.handleOver();
	            } else if (e.x > this.pauseOverlay.x && e.x < this.pauseOverlay.x + this.pauseOverlay.width && e.y > this.pauseOverlay.y && e.y < this.pauseOverlay.y + this.pauseOverlay.height) {
	                this.btnPause.resumeGame();
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            window.removeEventListener("mousemove", this.pausedUpdate);
	            this.btnPause.destroy(true);
	            this.btnSound.destroy(true);
	            this.game.input.onDown.remove(this.handlePausedInput, this);
	            this.game.onPause.remove(this.handlePause, this);
	            this.game.onResume.remove(this.handleResume, this);
	            this.game.scale.onSizeChange.remove(this.handleGameSizeChange, this);
	            Phaser.Sprite.prototype.destroy.call(this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "gamehud_time"));

	    _this.game = game;
	    _this.copy = _this.game.make.text(_this.width * 0.65, _this.height * 0.5, '0.00', _this.game.data.styles.in_game_clock);
	    _this.copy.anchor.set(0.5);
	    _this.addChild(_this.copy);
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "setTime",
	    value: function setTime(milliseconds) {
	      var time = this.msToTime(milliseconds);
	      this.copy.text = time.minutes + ":" + time.seconds;
	      this.copy.fill = "#0e2230";
	    }
	  }, {
	    key: "msToTime",
	    value: function msToTime(duration) {
	      var milliseconds = parseInt(duration % 1000 / 100),
	          seconds = parseInt(duration / 1000 % 60),
	          minutes = parseInt(duration / (1000 * 60) % 60),
	          hours = parseInt(duration / (1000 * 60 * 60) % 24);

	      hours = hours < 10 ? "0" + hours : hours;
	      seconds = seconds < 10 ? "0" + seconds : seconds;
	      milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
	      return { minutes: minutes, seconds: seconds };
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y, asset) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "gamehud_score"));

	    _this.game = game;

	    _this.copy = _this.game.make.text(_this.width * 0.35, _this.height * 0.5, '0', _this.game.data.styles.in_game_score);
	    _this.copy.anchor.set(0.5);
	    _this.addChild(_this.copy);
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "pulseTween",
	    value: function pulseTween() {
	      this.copy.scale.set(1);
	      this.tweenUp = this.game.add.tween(this.copy.scale).to({ x: 1.25, y: 1.25 }, 250, "Quart.easeOut", false, 0);
	      this.tweenDown = this.game.add.tween(this.copy.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut", false, 0);
	      this.tweenUp.chain(this.tweenDown);
	      this.tweenUp.start();
	    }
	  }, {
	    key: "setScore",
	    value: function setScore(score) {
	      if (this.copy.text != score.toString()) this.pulseTween();

	      this.copy.text = score.toString();
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);

	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "gamehud_pause"));

	        _this.game = game;
	        _this.inputEnabled = true;
	        _this.input.useHandCursor = true;

	        _this.game.onPause.add(_this.pauseGame, _this);
	        _this.game.onResume.add(_this.resumeGame, _this);

	        _this.events.onInputDown.add(_this.handleOver, _this);
	        _this.events.onInputOver.add(_this.handleOver, _this);
	        _this.events.onInputOut.add(_this.handleUp, _this);
	        _this.events.onInputUp.add(_this.pauseGame, _this);

	        _this.pauseActive = false;
	        return _this;
	    }

	    (0, _createClass3.default)(_class, [{
	        key: "handleInput",
	        value: function handleInput() {
	            if (this.pauseActive) {
	                this.resumeGame();
	            } else {
	                this.pauseGame();
	            }
	        }
	    }, {
	        key: "pauseGame",
	        value: function pauseGame() {
	            this.pauseActive = true;
	            this.game.paused = true;
	            this.game.input.onUp.add(this.resumeHandlePausedInput, this);
	            //if(this.game.isTouch) 
	            this.handleOver();
	        }
	    }, {
	        key: "resumeHandlePausedInput",
	        value: function resumeHandlePausedInput(e) {
	            if (e.x > this.x && e.x < this.x + this.width && e.y > this.y && e.y < this.y + this.height) {
	                this.resumeGame();
	            }
	        }
	    }, {
	        key: "resumeGame",
	        value: function resumeGame() {
	            this.pauseActive = false;
	            this.game.paused = false;
	            this.game.input.onUp.remove(this.resumeGame, this);
	            //if(this.game.isTouch) 
	            this.handleUp();
	        }
	    }, {
	        key: "handleOver",
	        value: function handleOver() {
	            this.loadTexture("gamehud_pause_wht");
	        }
	    }, {
	        key: "handleUp",
	        value: function handleUp() {
	            this.loadTexture("gamehud_pause");
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.events.onInputUp.remove(this.pauseGame, this);
	            this.game.onPause.remove(this.pauseGame, this);
	            this.game.onResume.remove(this.resumeGame, this);
	            Phaser.Sprite.prototype.destroy.call(this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));

	    if (!_this.game.alreadyPlayed) {
	      _this.icon = _this.game.make.sprite(0, 0, "instruction_mouseclick");

	      _this.icon.anchor.set(0.5);

	      _this.game.alreadyPlayed = true;

	      _this.position.set(_this.game.width / 2, _this.game.height / 2);
	      _this.addChild(_this.icon);
	      _this.startTween();
	    } else {
	      _this.visible = false;
	    }

	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "startTween",
	    value: function startTween() {
	      var tweenA = this.game.add.tween(this.icon.scale).to({ x: 0.85, y: 0.85 }, 250, "Quart.easeOut");
	      var tweenB = this.game.add.tween(this.icon.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      var tweenC = this.game.add.tween(this.icon.scale).to({ x: 0.85, y: 0.85 }, 250, "Quart.easeOut");
	      var tweenD = this.game.add.tween(this.icon.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      var tweenE = this.game.add.tween(this.icon.scale).to({ x: 0.85, y: 0.85 }, 250, "Quart.easeOut");
	      var tweenF = this.game.add.tween(this.icon.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      var tweenG = this.game.add.tween(this.icon.scale).to({ x: 0, y: 0 }, 250, "Quart.easeOut");

	      tweenA.chain(tweenB);
	      tweenB.chain(tweenC);
	      tweenC.chain(tweenD);
	      tweenD.chain(tweenE);
	      tweenE.chain(tweenF);
	      tweenF.chain(tweenG);

	      tweenA.start();
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y));

	    if (!_this.game.alreadyPlayed) {
	      _this.icon = _this.game.make.sprite(0, 0, "instruction_tap");

	      _this.icon.anchor.set(0.5);

	      _this.game.alreadyPlayed = true;

	      _this.position.set(_this.game.width / 2, _this.game.height / 2);
	      _this.addChild(_this.icon);
	      _this.startTween();
	    } else {
	      _this.visible = false;
	    }

	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "startTween",
	    value: function startTween() {
	      var tweenA = this.game.add.tween(this.icon.scale).to({ x: 0.85, y: 0.85 }, 250, "Quart.easeOut");
	      var tweenB = this.game.add.tween(this.icon.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      var tweenC = this.game.add.tween(this.icon.scale).to({ x: 0.85, y: 0.85 }, 250, "Quart.easeOut");
	      var tweenD = this.game.add.tween(this.icon.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      var tweenE = this.game.add.tween(this.icon.scale).to({ x: 0.85, y: 0.85 }, 250, "Quart.easeOut");
	      var tweenF = this.game.add.tween(this.icon.scale).to({ x: 1, y: 1 }, 250, "Quart.easeOut");
	      var tweenG = this.game.add.tween(this.icon.scale).to({ x: 0, y: 0 }, 250, "Quart.easeOut");

	      tweenA.chain(tweenB);
	      tweenB.chain(tweenC);
	      tweenC.chain(tweenD);
	      tweenD.chain(tweenE);
	      tweenE.chain(tweenF);
	      tweenF.chain(tweenG);

	      tweenA.start();
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);

	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "btn_sound_on"));

	        _this.inputEnabled = true;
	        _this.input.useHandCursor = true;
	        _this.state = _this.game.sounds.allowMusic;

	        _this.updateDisplayStatus(_this.game.sounds.allowMusic);
	        _this.events.onInputUp.add(_this.handleInput, _this);
	        _this.events.onInputOut.add(_this.handleUp, _this);
	        _this.events.onInputDown.add(_this.handleOver, _this);
	        _this.events.onInputOver.add(_this.handleOver, _this);

	        _this.over = false;
	        return _this;
	    }

	    (0, _createClass3.default)(_class, [{
	        key: "handleInput",
	        value: function handleInput() {
	            var state = this.game.sounds.allowMusic === false;
	            this.game.sounds.allowMusic = state;
	            this.game.sounds.allowEffects = state;
	            this.updateDisplayStatus(state);
	            if (this.game.isTouch) this.handleUp();
	        }
	    }, {
	        key: "updateDisplayStatus",
	        value: function updateDisplayStatus(status) {
	            if (this.over) {
	                this.loadTexture(status ? "btn_sound_on_wht" : "btn_sound_off_wht");
	            } else {
	                this.loadTexture(status ? "btn_sound_on" : "btn_sound_off");
	            }
	        }
	    }, {
	        key: "handleOver",
	        value: function handleOver() {
	            this.over = true;
	            this.loadTexture(this.game.sounds.allowMusic ? "btn_sound_on_wht" : "btn_sound_off_wht");
	        }
	    }, {
	        key: "handleUp",
	        value: function handleUp() {
	            this.over = false;
	            this.loadTexture(this.game.sounds.allowMusic ? "btn_sound_on" : "btn_sound_off");
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.events.onInputOver.remove(this.handleOver, this);
	            this.events.onInputOut.remove(this.handleUp, this);
	            this.events.onInputDown.remove(this.handleOver, this);
	            this.events.onInputUp.remove(this.handleInput, this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _BtnPlay = __webpack_require__(130);

	var _BtnPlay2 = _interopRequireDefault(_BtnPlay);

	var _BtnSoundToggle = __webpack_require__(128);

	var _BtnSoundToggle2 = _interopRequireDefault(_BtnSoundToggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);

	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(_class, [{
	        key: 'init',
	        value: function init() {}
	    }, {
	        key: 'preload',
	        value: function preload() {}
	    }, {
	        key: 'create',
	        value: function create() {
	            // add background image and character
	            this.background = this.game.add.sprite(0, 0, "bg_welcome");

	            // add logo
	            this.logo = this.game.add.sprite(this.game.width * 0.405, this.game.height * 0.06, "logo_unikitty");

	            // add game name
	            this.gameName = this.game.add.text(this.game.width * 0.465, this.game.height * 0.235, this.game.copy.getCopy(this.game.data.copy_ref.game_id), this.game.data.styles.welcome_game_name);
	            this.gameName.setTextBounds(0, 0, this.game.width * 0.33, this.game.height * 0.14);

	            // add play button
	            this.btnPlay = new _BtnPlay2.default(this.game, 0, 0);
	            this.btnPlay.position.set(this.game.width * 0.405, this.game.height * 0.715);

	            this.btnPlay.events.onInputUp.add(this.handlePlayButton, this);

	            // add sound button, position relative to play button
	            this.btnSound = new _BtnSoundToggle2.default(this.game);
	            this.btnSound.position.set(this.btnPlay.x + this.btnPlay.width * 1.05, this.btnPlay.y);

	            // add display objects
	            this.game.add.existing(this.btnSound);
	            this.game.add.existing(this.btnPlay);

	            // start background music
	            this.game.sounds.playBackgroundMusic("intro_background", 1);
	        }
	    }, {
	        key: 'handlePlayButton',
	        value: function handlePlayButton() {
	            // attempt fullscreen
	            this.game.requestFullscreen(document.body);
	            // remove listener
	            this.btnPlay.events.onInputUp.remove(this.handlePlayButton, this);
	            // track event
	            //this.game.track("PLAY");
	            // button sound
	            this.game.sounds.playSoundEffect("button", false, 1);
	            // start game
	            this.game.state.start("Game", true, false);
	        }
	    }, {
	        key: 'shutdown',
	        value: function shutdown() {
	            // clean up
	            this.game.sounds.stopSound("intro_background");
	            this.logo.destroy();
	            this.background.destroy();
	            this.gameName.destroy();
	            this.btnPlay.destroy();
	        }
	    }]);
	    return _class;
	}(Phaser.State);

	exports.default = _class;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	    (0, _inherits3.default)(_class, _Phaser$Sprite);

	    function _class(game, x, y) {
	        (0, _classCallCheck3.default)(this, _class);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "btn_play"));

	        _this.game = game;
	        _this.label = _this.game.make.text(225, 60, _this.game.copy.getCopy("game_play"), _this.game.data.styles.btn_play);
	        _this.label.setTextBounds(0, 0, 300, 104);
	        _this.label.padding.set(10);
	        _this.addChild(_this.label);

	        _this.inputEnabled = true;
	        _this.input.useHandCursor = true;

	        _this.events.onInputOver.add(_this.handleOver, _this);
	        _this.events.onInputOut.add(_this.handleUp, _this);
	        _this.events.onInputDown.add(_this.handleOver, _this);
	        return _this;
	    }

	    (0, _createClass3.default)(_class, [{
	        key: "handleOver",
	        value: function handleOver() {
	            this.loadTexture("btn_play_wht");
	        }
	    }, {
	        key: "handleUp",
	        value: function handleUp() {
	            this.loadTexture("btn_play");
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.events.onInputOver.remove(this.handleOver, this);
	            this.events.onInputOut.remove(this.handleUp, this);
	            this.events.onInputDown.remove(this.handleOver, this);
	        }
	    }]);
	    return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _BtnReplay = __webpack_require__(132);

	var _BtnReplay2 = _interopRequireDefault(_BtnReplay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$State) {
	    (0, _inherits3.default)(_class, _Phaser$State);

	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(_class, [{
	        key: "init",
	        value: function init(score) {
	            this.score = Math.round(score);
	        }
	    }, {
	        key: "create",
	        value: function create() {
	            // track game ended
	            //this.game.track("END");

	            this.game.sounds.playSoundEffect("end_background", false, 1);

	            this.scoreCounter = 0;
	            this.background = this.game.add.sprite(0, 0, "bg_gameend");

	            this.renderDefault();
	            this.highscoreIcon.visible = false;
	            this.bestValue.visible = false;
	            this.checkHighscore();
	            this.incrementScore();
	            this.btnReplay.events.onInputUp.add(this.handlePlayButton, this);
	        }
	    }, {
	        key: "checkHighscore",
	        value: function checkHighscore() {
	            var best = this.getCookie(this.game.data.save_ref);
	            if (best && best > this.score) {
	                this.bestValue.text = best;
	            } else {
	                document.cookie = this.game.data.save_ref + "=" + this.score;
	            }
	        }
	    }, {
	        key: "renderDefault",
	        value: function renderDefault() {

	            // create score panel
	            this.scorePanel = this.game.add.sprite(this.game.width * 0.48, this.game.height * 0.080, "gameend_panel_score");
	            this.scoreValue = this.game.make.text(this.scorePanel.width / 2, this.scorePanel.height * 0.32, 0, this.game.data.styles.end_game_score);
	            this.scoreValue.anchor.set(0.5);
	            this.scoreValue.padding.set(10);
	            this.scorePanel.addChild(this.scoreValue);

	            // create highscore
	            this.bestValue = this.game.add.text(0, 0, this.score, this.game.data.styles.end_game_best);
	            this.bestValue.padding.set(10);

	            // attach highscore icon
	            this.highscoreIcon = this.game.add.sprite(0, 0, "icon_highscore");

	            var offset = (this.highscoreIcon.width + this.bestValue.width + 40) / 2;

	            this.highscoreIcon.position.set(this.scorePanel.x + this.scorePanel.width / 2 - offset, this.game.height * 0.50);
	            this.bestValue.position.set(this.highscoreIcon.x + this.highscoreIcon.width + 20, this.game.height * 0.47);

	            // attach replay button
	            this.btnReplay = new _BtnReplay2.default(this.game);
	            this.btnReplay.anchor.set(0.5);
	            this.btnReplay.position.set(this.scorePanel.x + this.scorePanel.width / 2 + 10, this.game.height * 0.83);
	            this.game.add.existing(this.btnReplay);
	        }
	    }, {
	        key: "getCookie",
	        value: function getCookie(cname) {
	            var name = cname + "=";
	            var ca = document.cookie.split(';');
	            for (var i = 0; i < ca.length; i++) {
	                var c = ca[i];
	                while (c.charAt(0) == ' ') {
	                    c = c.substring(1);
	                }
	                if (c.indexOf(name) == 0) {
	                    return c.substring(name.length, c.length);
	                }
	            }
	            return "";
	        }
	    }, {
	        key: "incrementScore",
	        value: function incrementScore() {
	            if (this.scoreCounter < this.score) {
	                this.game.sounds.playSoundEffect("end_score", false, 0.3);
	                this.scoreCounter += this.game.data.end_score_increment_value;
	                this.scoreValue.text = this.scoreCounter;
	                this.game.time.events.add(this.game.data.end_score_increment_delay, this.incrementScore, this).autoDestroy = true;
	            } else {
	                this.scoreValue.text = this.score;
	                this.highscoreIcon.visible = true;
	                this.bestValue.visible = true;
	            }
	        }
	    }, {
	        key: "handlePlayButton",
	        value: function handlePlayButton() {
	            //this.game.track("REPLAY");
	            this.btnReplay.events.onInputUp.remove(this.handlePlayButton, this);
	            this.game.sounds.playSoundEffect("button", false, 1);
	            this.game.state.start("Game", true, false);
	        }
	    }, {
	        key: "shutdown",
	        value: function shutdown() {
	            this.scorePanel.destroy(true);
	            this.scoreValue.destroy(true);
	            this.bestValue.destroy(true);
	            this.highscoreIcon.destroy(true);
	            this.btnReplay.destroy(true);

	            if (this.promoPanel) {
	                this.promoPanel.destroy(true);
	                this.promoCopy.destroy(true);
	                this.promoA.destroy(true);
	                this.promoB.destroy(true);
	            }

	            this.scorePanel = null;
	            this.scoreValue = null;
	            this.bestValue = null;
	            this.highscoreIcon = null;
	            this.btnReplay = null;
	            this.promoPanel = null;
	            this.promoCopy = null;
	            this.promoA = null;
	            this.promoB = null;
	        }
	    }]);
	    return _class;
	}(Phaser.State);

	exports.default = _class;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Phaser$Sprite) {
	  (0, _inherits3.default)(_class, _Phaser$Sprite);

	  function _class(game, x, y) {
	    (0, _classCallCheck3.default)(this, _class);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, game, x, y, "btn_replay"));

	    _this.game = game;
	    _this.inputEnabled = true;
	    _this.input.useHandCursor = true;
	    _this.events.onInputOver.add(_this.handleOver, _this);
	    _this.events.onInputOut.add(_this.handleUp, _this);
	    _this.events.onInputDown.add(_this.handleOver, _this);
	    return _this;
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "handleOver",
	    value: function handleOver() {
	      this.loadTexture("btn_replay_wht");
	    }
	  }, {
	    key: "handleUp",
	    value: function handleUp() {
	      this.loadTexture("btn_replay");
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.events.onInputOver.remove(this.handleOver, this);
	      this.events.onInputOut.remove(this.handleUp, this);
	      this.events.onInputDown.remove(this.handleOver, this);
	    }
	  }]);
	  return _class;
	}(Phaser.Sprite);

	exports.default = _class;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _defineProperties = __webpack_require__(134);

	var _defineProperties2 = _interopRequireDefault(_defineProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	* screenfull
	* v3.0.0 - 2015-11-24
	* (c) Sindre Sorhus; MIT License
	*/
	!function () {
	  "use strict";
	  var a = "undefined" != typeof module && module.exports,
	      b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
	      c = function () {
	    for (var a, b, c = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], d = 0, e = c.length, f = {}; e > d; d++) {
	      if (a = c[d], a && a[1] in document) {
	        for (d = 0, b = a.length; b > d; d++) {
	          f[c[0][d]] = a[d];
	        }return f;
	      }
	    }return !1;
	  }(),
	      d = { request: function request(a) {
	      var d = c.requestFullscreen;a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT);
	    }, exit: function exit() {
	      document[c.exitFullscreen]();
	    }, toggle: function toggle(a) {
	      this.isFullscreen ? this.exit() : this.request(a);
	    }, raw: c };return c ? ((0, _defineProperties2.default)(d, { isFullscreen: { get: function get() {
	        return Boolean(document[c.fullscreenElement]);
	      } }, element: { enumerable: !0, get: function get() {
	        return document[c.fullscreenElement];
	      } }, enabled: { enumerable: !0, get: function get() {
	        return Boolean(document[c.fullscreenEnabled]);
	      } } }), void (a ? module.exports = d : window.screenfull = d)) : void (a ? module.exports = !1 : window.screenfull = !1);
	}();

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(136);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperties(T, D) {
	  return $Object.defineProperties(T, D);
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', { defineProperties: __webpack_require__(46) });


/***/ })
/******/ ]);