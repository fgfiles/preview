(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/janlievens/Code/STH/seamly.js/lib/ext/jockey.js":[function(require,module,exports){
//
//  JockeyJS
//
//  Copyright (c) 2013, Tim Coulter
//
//  Permission is hereby granted, free of charge, to any person obtaining
//  a copy of this software and associated documentation files (the
//  "Software"), to deal in the Software without restriction, including
//  without limitation the rights to use, copy, modify, merge, publish,
//  distribute, sublicense, and/or sell copies of the Software, and to
//  permit persons to whom the Software is furnished to do so, subject to
//  the following conditions:
//
//  The above copyright notice and this permission notice shall be
//  included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

;(function () {

    // Non-accessible variable to send to the app, to ensure events only
    // come from the desired host.
    var host = window.location.host;

    var Dispatcher = {
        callbacks: {},

        send: function(envelope, complete) {
            this.dispatchMessage("event", envelope, complete);
        },

        sendCallback: function(messageId) {
            var envelope = Jockey.createEnvelope(messageId);

            this.dispatchMessage("callback", envelope, function() {});
        },

        triggerCallback: function(id) {
            var dispatcher = this;

            // Alerts within JS callbacks will sometimes freeze the iOS app.
            // Let's wrap the callback in a timeout to prevent this.
            setTimeout(function() {
                dispatcher.callbacks[id]();
            }, 0);
        },

        // `type` can either be "event" or "callback"
        dispatchMessage: function(type, envelope, complete) {
            // We send the message by navigating the browser to a special URL.
            // The iOS library will catch the navigation, prevent the UIWebView
            // from continuing, and use the data in the URL to execute code
            // within the iOS app.

            var dispatcher = this;

            this.callbacks[envelope.id] = function() {
                complete();

                delete dispatcher.callbacks[envelope.id];
            };

	    var src = "jockey://" + type + "/" + envelope.id + "?" + encodeURIComponent(JSON.stringify(envelope));
            var iframe = document.createElement("iframe"); 
            iframe.setAttribute("src", src); 
            document.documentElement.appendChild(iframe); 
            iframe.parentNode.removeChild(iframe); 
            iframe = null; 
	  }
	};   

    var Jockey = {
        listeners: {},

        dispatcher: null,

        messageCount: 0,

        on: function(type, fn) {
            if (!this.listeners.hasOwnProperty(type) || !this.listeners[type] instanceof Array) {
                this.listeners[type] = [];
            }

            this.listeners[type].push(fn);
        },

        off: function(type) {
            if (!this.listeners.hasOwnProperty(type) || !this.listeners[type] instanceof Array) {
                this.listeners[type] = [];
            }

            this.listeners[type] = [];
        },

        send: function(type, payload, complete) {
            if (payload instanceof Function) {
                complete = payload;
                payload = null;
            }

            payload = payload || {};
            complete = complete || function() {};

            var envelope = this.createEnvelope(this.messageCount, type, payload);

            this.dispatcher.send(envelope, complete);

            this.messageCount += 1;
        },

        decodeAndTrigger: function(type, messageId, encodedJson) {
            json = window.atob(encodedJson);
            this.trigger(type, messageId, JSON.parse(json));
        },

        // Called by the native application when events are sent to JS from the app.
        // Will execute every function, FIFO order, that was attached to this event type.
        trigger: function(type, messageId, json) {
            var self = this;

            var listenerList = this.listeners[type] || [];

            var executedCount = 0;

            var complete = function() {
                executedCount += 1;

                if (executedCount >= listenerList.length) {
                    self.dispatcher.sendCallback(messageId);
                }
            };

            for (var index = 0; index < listenerList.length; index++) {
                var listener = listenerList[index];

                // If it's a "sync" listener, we'll call the complete() function
                // after it has finished. If it's async, we expect it to call complete().
                if (listener.length <= 1) {
                    listener(json);
                    complete();
                } else {
                    listener(json, complete);
                }
            }

        },

        // Called by the native application in response to an event sent to it.
        // This will trigger the callback passed to the send() function for
        // a given message.
        triggerCallback: function(id) {
            this.dispatcher.triggerCallback(id);
        },

        createEnvelope: function(id, type, payload) {
            return {
                id: id,
                type: type,
                host: host,
                payload: payload
            };
        }
    };

    // i.e., on a Desktop browser.
    var nullDispatcher = {
        send: function(envelope, complete) { complete(); },
        triggerCallback: function() {},
        sendCallback: function() {}
    };

    // Dispatcher detection. Currently only supports iOS.
    // Looking for equivalent Android implementation.
    var i = 0,
        iOS = false,
        iDevice = ['iPad', 'iPhone', 'iPod'];

    for (; i < iDevice.length; i++) {
        if (navigator.platform.indexOf(iDevice[i]) >= 0) {
            iOS = true;
            break;
        }
    }

    // Detect UIWebview. In Mobile Safari proper, jockey urls cause a popup to
    // be shown that says "Safari cannot open page because the URL is invalid."
    // From here: http://stackoverflow.com/questions/4460205/detect-ipad-iphone-webview-via-javascript

    var UIWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
	var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
	
    if ((iOS && UIWebView) || isAndroid) { 
        Jockey.dispatcher = Dispatcher;
    } else {
        Jockey.dispatcher = nullDispatcher;
    }

    window.Jockey = Jockey;
})();
},{}],"/Users/janlievens/Code/STH/seamly.js/lib/ext/le.min.js":[function(require,module,exports){
(function (global){
/*
 Copyright 2013 Logentries.
 Please view license at https://raw.github.com/logentries/le_js/master/LICENSE
*/
'use strict';(function(b,e){"function"===typeof define&&define.amd?define(function(){return e(b)}):"object"===typeof exports?("object"===typeof global&&(b=global),module.exports=e(b)):b.LE=e(b)})(this,function(b){function e(a){var c=(Math.random()+Math.PI).toString(36).substring(2,10),t=a.trace,e=a.page_info,f=a.token,g=a.print,p;p=b.LEENDPOINT?b.LEENDPOINT:"js.logentries.com/v1";var q;q="undefined"===typeof XDomainRequest?a.ssl:"https:"===b.location.protocol?!0:!1;var h=[],k=!1,r=!1;if(a.catchall){var s=
b.onerror;b.onerror=function(a,b,d){l({error:a,line:d,location:b}).level("ERROR").send();return s?s(a,b,d):!1}}var n=function(){var a=b.navigator||{doNotTrack:void 0},c=b.screen||{};return{url:(b.location||{}).pathname,referrer:document.referrer,screen:{width:c.width,height:c.height},window:{width:b.innerWidth,height:b.innerHeight},browser:{name:a.appName,version:a.appVersion,cookie_enabled:a.cookieEnabled,do_not_track:a.doNotTrack},platform:a.platform}},u=function(){var a=null,a=Array.prototype.slice.call(arguments);
if(0===a.length)throw Error("No arguments!");return a=1===a.length?a[0]:a},l=function(a){var b=u.apply(this,arguments),d={event:b};"never"===e||r&&"per-entry"!==e||(r=!0,"undefined"===typeof b.screen&&"undefined"===typeof b.browser&&l(n()).level("PAGE").send());t&&(d.trace=c);return{level:function(a){if(g&&"undefined"!==typeof console&&"PAGE"!==a)try{console[a.toLowerCase()].call(console,d)}catch(b){console.log(d)}d.level=a;return{send:function(){var a=[],b=JSON.stringify(d,function(b,d){if("undefined"===
typeof d)return"undefined";if("object"===typeof d&&null!==d){var c;a:{for(c=0;c<a.length;c++)if(d===a[c])break a;c=-1}if(-1!==c)return"<?>";a.push(d)}return d});k?h.push(b):m(f,b)}}}}};this.log=l;var m=function(a,b){k=!0;var d;d="undefined"!==typeof XDomainRequest?new XDomainRequest:new XMLHttpRequest;d.constructor===XMLHttpRequest?d.onreadystatechange=function(){4===d.readyState&&(400<=d.status?(console.error("Couldn't submit events."),410===d.status&&console.warn("This version of le_js is no longer supported!")):
(301===d.status&&console.warn("This version of le_js is deprecated! Consider upgrading."),0<h.length?m(a,h.shift()):k=!1))}:d.onload=function(){0<h.length?m(a,h.shift()):k=!1};d.open("POST",(q?"https://":"http://")+p+"/logs/"+f,!0);d.constructor===XMLHttpRequest&&(d.setRequestHeader("X-Requested-With","XMLHttpRequest"),d.setRequestHeader("Content-type","text/json"));d.send(b)}}function n(a){var b,c={ssl:!0,catchall:!1,trace:!0,page_info:"never",print:!1,endpoint:null,token:null};if("object"===typeof a)for(var g in a)c[g]=
a[g];else throw Error("Invalid parameters for createLogStream()");if(null===c.token)throw Error("Token not present.");b=new e(c);var f=function(a){if(b)return b.log.apply(this,arguments);throw Error("You must call LE.init(...) first.");};return{log:function(){f.apply(this,arguments).level("LOG").send()},warn:function(){f.apply(this,arguments).level("WARN").send()},error:function(){f.apply(this,arguments).level("ERROR").send()},info:function(){f.apply(this,arguments).level("INFO").send()}}}var c={},
g=function(a){if("string"!==typeof a.name)throw Error("Name not present.");if(c.hasOwnProperty(a.name))throw Error("A logger with that name already exists!");c[a.name]=new n(a);return!0};return{init:function(a){var b={name:"default"};if("object"===typeof a)for(var c in a)b[c]=a[c];else if("string"===typeof a)b.token=a;else throw Error("Invalid parameters for init()");return g(b)},createLogStream:g,to:function(a){if(!c.hasOwnProperty(a))throw Error("Invalid name for logStream");return c[a]},destroy:function(a){"undefined"===
typeof a&&(a="default");delete c[a]},log:function(){for(var a in c)c[a].log.apply(this,arguments)},warn:function(){for(var a in c)c[a].warn.apply(this,arguments)},error:function(){for(var a in c)c[a].error.apply(this,arguments)},info:function(){for(var a in c)c[a].info.apply(this,arguments)}}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/janlievens/Code/STH/seamly.js/lib/seamly.coffee":[function(require,module,exports){
var Debug, Dispatcher, Env, LE, Logger, Params, Seamly, SeamlyBindEvents, SeamlyError, Spinner, State, UI, User, Utils, qs,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

qs = require('query-string');

LE = require('./ext/le.min');

require('./ext/jockey');

SeamlyBindEvents = {
  ready: 'seamly:loaded',
  stateSave: 'seamly:state:save',
  fail: 'seamly:fail',
  stop: 'seamly:stop',
  authChanged: 'seamly:authentication:success',
  login: 'seamly:authentication:required',
  logout: 'seamly:authentication:clear',
  showSpinner: 'seamly:spinner:show',
  hideSpinner: 'seamly:spinner:hide',
  showUI: 'seamly:ui:show',
  hideUI: 'seamly:ui:hide',
  openUrl: 'seamly:open:url',
  resume: 'seamly:app:activate',
  pause: 'seamly:app:deactivate'
};

SeamlyError = (function(superClass) {
  extend(SeamlyError, superClass);

  function SeamlyError(message) {
    this.name = 'SeamlyError';
    this.message = message;
  }

  return SeamlyError;

})(Error);

Dispatcher = (function() {
  function Dispatcher() {}

  Dispatcher.prototype.callbacks = {};

  Dispatcher.prototype.on = function(event, callback) {
    var base, name;
    if (SeamlyBindEvents[event]) {
      (base = this.callbacks)[name = SeamlyBindEvents[event]] || (base[name] = []);
      this.callbacks[SeamlyBindEvents[event]].push(callback);
      return this;
    } else {
      throw new SeamlyError("You cannot bind to " + event + "!");
    }
  };

  Dispatcher.prototype.trigger = function(event, data) {
    this.dispatch(event, data);
    return this;
  };

  Dispatcher.prototype.dispatch = function(event, data) {
    var callback, chain, i, len, results;
    chain = this.callbacks[event];
    if (chain != null) {
      results = [];
      for (i = 0, len = chain.length; i < len; i++) {
        callback = chain[i];
        results.push(callback(data));
      }
      return results;
    }
  };

  return Dispatcher;

})();

Debug = (function(superClass) {
  extend(Debug, superClass);

  function Debug(seamly) {
    this.seamly = seamly;
  }

  Debug.prototype.pause = function() {
    console.log('Triggering pause event to HTML-app!');
    return this.trigger(SeamlyBindEvents.pause);
  };

  Debug.prototype.resume = function() {
    console.log('Triggering resume event to HTML-app!');
    return this.trigger(SeamlyBindEvents.resume);
  };

  Debug.prototype.authChanged = function(payload) {
    console.log('Triggering authChanged event to HTML-app!', payload);
    return this.trigger(SeamlyBindEvents.authChanged, payload);
  };

  return Debug;

})(Dispatcher);

User = (function() {
  function User(seamly, attrs) {
    var key, val;
    this.seamly = seamly;
    for (key in attrs) {
      val = attrs[key];
      this[key] = val;
    }
  }

  User.prototype.login = function(payload, cb) {
    LE.log({
      message: 'Sending user login event!'
    });
    console.log('Sending user login event!');
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.login, payload, cb);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  User.prototype.logout = function(payload, cb) {
    LE.log({
      message: 'Sending user logout event!'
    });
    console.log('Sending user logout event!');
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.logout, payload, cb);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  return User;

})();

Env = (function() {
  function Env(seamly, attrs) {
    var key, val;
    this.seamly = seamly;
    for (key in attrs) {
      val = attrs[key];
      this[key] = val;
    }
  }

  return Env;

})();

UI = (function() {
  function UI(seamly, attrs) {
    var key, val;
    this.seamly = seamly;
    for (key in attrs) {
      val = attrs[key];
      this[key] = val;
    }
  }

  UI.prototype.show = function(cb) {
    LE.log({
      message: 'Sending show UI event!'
    });
    console.log('Sending show UI event!');
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.showUI);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  UI.prototype.hide = function(cb) {
    LE.log({
      message: 'Sending hide UI event!'
    });
    console.log('Sending hide UI event!');
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.hideUI);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  return UI;

})();

Params = (function() {
  function Params(seamly, attrs) {
    var key, val;
    this.seamly = seamly;
    for (key in attrs) {
      val = attrs[key];
      this[key] = val;
    }
  }

  return Params;

})();

State = (function() {
  function State(seamly, attrs) {
    var key, val;
    this.seamly = seamly;
    for (key in attrs) {
      val = attrs[key];
      this[key] = val;
    }
  }

  State.prototype.save = function(state, cb) {
    var key, val;
    LE.log({
      message: 'Sending state save event!',
      state: state
    });
    console.log('Saving state!', state);
    for (key in state) {
      val = state[key];
      this[key] = val;
    }
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.stateSave, state, cb);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  return State;

})();

Utils = (function() {
  function Utils(seamly) {
    this.seamly = seamly;
  }

  Utils.prototype.openUrl = function(url, cb) {
    LE.log({
      message: 'Sending open url event!'
    });
    console.log('Sending open url event!', url);
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.openUrl, {
        url: url
      }, cb);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  Utils.prototype.parseQueryString = function() {
    var parsed;
    return parsed = qs.parse(location.search);
  };

  return Utils;

})();

Spinner = (function() {
  function Spinner(seamly) {
    this.seamly = seamly;
  }

  Spinner.prototype.show = function(cb) {
    LE.log({
      message: 'Sending show spinner event!'
    });
    console.log('Sending show spinner event!');
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.showSpinner);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  Spinner.prototype.hide = function(cb) {
    LE.log({
      message: 'Sending hide spinner event!'
    });
    console.log('Sending hide spinner event!');
    if (this.seamly["native"]) {
      return Jockey.send(SeamlyBindEvents.hideSpinner);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  return Spinner;

})();

Logger = (function() {
  function Logger(seamly, le_token) {
    var error;
    this.seamly = seamly;
    try {
      LE.init(le_token);
    } catch (_error) {
      error = _error;
      console.error(error);
    }
  }

  Logger.prototype.log = function(message, cb) {
    LE.log(message);
    if (cb != null) {
      return cb(null);
    }
  };

  Logger.prototype.info = function(message, cb) {
    LE.info(message);
    if (cb != null) {
      return cb(null);
    }
  };

  Logger.prototype.warn = function(message, cb) {
    LE.warn(message);
    if (cb != null) {
      return cb(null);
    }
  };

  Logger.prototype.error = function(message, cb) {
    LE.error(message);
    if (cb != null) {
      return cb(null);
    }
  };

  return Logger;

})();

Seamly = (function(superClass) {
  extend(Seamly, superClass);

  function Seamly() {
    this.utils = new Utils(this);
    this.spinner = new Spinner(this);
    this.debug = new Debug(this);
    this.user = new User(this, {});
    this.state = new State(this, {});
    this.ui = new UI(this, {});
    this.env = new Env(this, {});
  }

  Seamly.prototype.initializeNative = function(cb) {
    var initPayload;
    this["native"] = true;
    initPayload = this.initializePayload.bind(this);
    Jockey.on(SeamlyBindEvents.ready, initPayload);
    Jockey.on(SeamlyBindEvents.authChanged, (function(_this) {
      return function(payload) {
        console.log('Triggering login success event to HTML-app!', payload);
        _this.user = new User(_this, payload.user);
        return _this.trigger(SeamlyBindEvents.authChanged, payload);
      };
    })(this));
    Jockey.on(SeamlyBindEvents.resume, (function(_this) {
      return function(payload) {
        console.log('Triggering resume event to HTML-app!', payload);
        return _this.trigger(SeamlyBindEvents.resume, payload);
      };
    })(this));
    Jockey.on(SeamlyBindEvents.pause, (function(_this) {
      return function(payload) {
        console.log('Triggering pause event to HTML-app!', payload);
        return _this.trigger(SeamlyBindEvents.pause, payload);
      };
    })(this));
    return Jockey.send(SeamlyBindEvents.ready, null, cb);
  };

  Seamly.prototype.initializePayload = function(payload, cb) {
    var ref;
    this.logger = new Logger(this, (ref = payload.env) != null ? ref.le_token : void 0);
    this.env = new Env(this, payload.env);
    this.ui = new UI(this, payload.ui);
    this.params = new Params(this, payload.params);
    this.user = new User(this, payload.user);
    this.state = new State(this, payload.state);
    console.log('Triggering ready event to HTML-app!', payload);
    return this.trigger(SeamlyBindEvents.ready, payload, cb);
  };

  Seamly.prototype.stop = function(data, cb) {
    LE.log({
      message: "Sending stop event with: " + data + "!"
    });
    console.log("Sending stop event with: " + data + "!");
    if (this["native"]) {
      return Jockey.send(SeamlyBindEvents.stop, data, cb);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  Seamly.prototype.fail = function(failure, cb) {
    LE.error({
      message: 'Sending fail event!',
      error: failure
    });
    console.log('Sending fail event!', failure);
    if (this["native"]) {
      return Jockey.send(SeamlyBindEvents.fail, {
        failure: failure
      }, cb);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  Seamly.prototype.send = function(type, payload, cb) {
    LE.log({
      message: 'Sending generic event!'
    });
    console.log('Sending generic event!', type, payload);
    if (this["native"]) {
      return Jockey.send("seamly:" + type, payload, cb);
    } else {
      if (cb != null) {
        return cb(null);
      }
    }
  };

  return Seamly;

})(Dispatcher);

if (typeof window !== "undefined" && window !== null) {
  window.Seamly = Seamly;
}

if (module.exports != null) {
  module.exports = Seamly;
}


},{"./ext/jockey":"/Users/janlievens/Code/STH/seamly.js/lib/ext/jockey.js","./ext/le.min":"/Users/janlievens/Code/STH/seamly.js/lib/ext/le.min.js","query-string":"/Users/janlievens/Code/STH/seamly.js/node_modules/query-string/index.js"}],"/Users/janlievens/Code/STH/seamly.js/node_modules/query-string/index.js":[function(require,module,exports){
'use strict';

exports.extract = function (maybeUrl) {
	return maybeUrl.split('?')[1] || '';
};

exports.parse = function (str) {
	if (typeof str !== 'string') {
		return {};
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return {};
	}

	return str.split('&').reduce(function (ret, param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		var key = parts[0];
		var val = parts[1];

		key = decodeURIComponent(key);
		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (!ret.hasOwnProperty(key)) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}

		return ret;
	}, {});
};

exports.stringify = function (obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}

		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
};

},{}]},{},["/Users/janlievens/Code/STH/seamly.js/lib/seamly.coffee"]);
