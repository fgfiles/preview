/**
 * @namespace CNComm
 */

(function(w, undefined) {
  'use strict';

  var _isIframe = _checkIframe(),
    _intervals = {};

  /**
   * Initializes the module.
   * @access private
   * @param {Object} options
   * @param {Object} options.target - A reference to the target's "window" object
   * @param {String[]} options.origin - Specifies what the origin must be for the event to be dispatched
   * @param {CNProxy~onMessageHandler} [options.onMessage] - A callback function that handles the "message" event response
   */

  function _CNComm(options) {
    var target = options.target,
      origin = options.origin;

    // Forces a new instance
    if (!(this instanceof _CNComm)) {
      return new _CNComm(options);
    }

    if (typeof target === 'undefined' || !('postMessage' in target)) {
      throw new Error(
        'CNComm - The provided target "window" reference doesn\'t exists or "postMessage" is not supported.'
      );
    }

    if (!_isArray(origin)) {
      throw new Error('CNComm - The provided origin value is not an Array.');
    }

    // Set the values for the instance
    this._callbacks = [];
    this._target = target;
    this._origin = origin;
    this._origin_length = this._origin.length;

    if (typeof options.onMessage === 'function') {
      this._onMessageHandler = options.onMessage;
    }

    _addEventListener(w, 'message', this._onMessage.bind(this));

    // Chain
    return this;
  }

  /**
   * De-initializes the module.
   * @access public
   * @param {Object} fn - A function to execute after the API is ready
   */

  _CNComm.prototype.uninit = !_isIframe
    ? function() {
        _removeEventListener(w, 'message', this._onMessage.bind(this));

        // Chain
        return this;
      }
    : undefined;

  /**
   * Specifies a function to execute when the API is fully loaded.
   * @access public
   * @param {Object} fn - A function to execute after the API is ready
   */

  _CNComm.prototype.ready = _isIframe
    ? function(fn) {
        this._ping(fn);

        // Chain
        return this;
      }
    : undefined;

  /**
   * Sends a "request" type of message.
   * @access public
   * @param {Object} options
   * @param {String} options.namespace - The namespace of the required method
   * @param {String} options.method - The method name
   * @param {Array} [options.args] - The arguments to be passed to the method
   * @param {Object} callback - A function to be called on response
   */

  _CNComm.prototype.request = _isIframe
    ? function(options, callback) {
        options.type = 'request';
        options.callback_id = this._registerCallback(callback);

        if (typeof options.args !== 'undefined' && !_isArray(options.args)) {
          throw new Error('CNComm - Property "args" is not an Array');
        }

        this._post(options);
      }
    : undefined;

  /**
   * Sends a "response" type of message.
   * @access public
   * @param {Object} options
   * @param {String} options.namespace - The namespace of the required method sent by the requester
   * @param {String} options.method - The method name sent by the requester
   * @param {String} options.callback_id - The callback ID sent by the requester
   * @param {String} options.results - The response body
   */

  _CNComm.prototype.response = !_isIframe
    ? function(options) {
        options.type = 'response';

        this._post(options);
      }
    : undefined;

  /**
   * Sends a message through postMessage.
   * @access private
   * @param {Object} message - The message to be sent
   */

  _CNComm.prototype._post = function(message) {
    var i = 0;

    for (; i < this._origin_length; i++) {
      this._target.postMessage(JSON.stringify(message), this._origin[i]);
    }
  };

  /**
   * Sends a "ping" type of message.
   * @access private
   * @param {Object} callback - A function to be called on response
   */

  _CNComm.prototype._ping = function(callback) {
    var options = {
        type: 'ping',
        callback_id: this._registerCallback(callback),
      },
      times = 0,
      timeout = 10;

    // Anonymous function for additional params
    _intervals[options.callback_id] = w.setInterval(
      (function(that) {
        return function() {
          if (times === timeout) {
            w.clearInterval(_intervals[options.callback_id]);

            throw new Error('CNComm - Timed out.');
          } else {
            times++;
            that._post(options);
          }
        };
      })(this),
      1000
    );
  };

  /**
   * Sends a "pong" type of message.
   * @access private
   * @param {Object} data
   * @param {String} data.callback_id - The callback ID sent by the requester
   */

  _CNComm.prototype._pong = function(data) {
    var options = {
      type: 'pong',
      callback_id: data.callback_id,
    };

    this._post(options);
  };

  /**
   * Saves a callback for later use on response.
   * @access private
   * @param {Object} callback
   */

  _CNComm.prototype._registerCallback = function(callback) {
    var UID;

    if (typeof callback !== 'function') {
      throw new Error('CNComm - No callback function provided.');
    }

    UID = _getUID();
    this._callbacks[UID] = callback;

    return UID;
  };

  /**
   * Handles the message event.
   * @access private
   * @param {Object} event
   * @param {Object} event.data - The object passed from the other window
   * @param {Object} event.origin - The origin of the window that sent the message at the time postMessage was called
   * @param {Object} event.source - A reference to the window object that sent the message
   */

  _CNComm.prototype._onMessage = function(event) {
    var origin = event.origin || event.originalEvent.origin, // For Chrome, the origin property is in the event.originalEvent object.
      data;

    if (_inArray(origin, this._origin) === -1) {
      return;
    }

    try {
      data = JSON.parse(event.data);

      switch (data.type) {
        case 'ping':
          this._onPing(data);
          break;
        case 'pong':
          this._onPong(origin, data);
          break;
        case 'request':
          this._onRequest(data);
          break;
        case 'response':
          this._onResponse(data);
          break;
        default:
          break;
      }
    } catch (e) {
      throw new Error('CNComm - Failed parse message data.');
    }
  };

  /**
   * Handles the "request" type of data.
   * @access private
   * @param {Object} data
   * @param {String} data.namespace - The namespace of the required method
   * @param {String} data.method - The method name
   * @param {Array} [data.args] - The arguments to be passed to the method
   */

  _CNComm.prototype._onRequest = function(data) {
    this._onMessageHandler(data);
  };

  /**
   * Handles the "response" type of data.
   * @access private
   * @param {Object} data
   * @param {String} data.namespace - The namespace of the required method
   * @param {String} data.method - The method name
   * @param {String} data.callback_id - The callback ID
   * @param {String} data.results - The response body
   */

  _CNComm.prototype._onResponse = function(data) {
    if (typeof this._callbacks[data.callback_id] === 'function') {
      this._callbacks[data.callback_id](data.results);

      // Remove the callback if not permanent
      if (!data.isPermanent) {
        delete this._callbacks[data.callback_id];
      }
    }
  };

  /**
   * Handles the "ping" type of data.
   * @access private
   * @param {Object} data
   * @param {String} data.callback_id - The callback ID
   */

  _CNComm.prototype._onPing = function(data) {
    this._pong(data);
  };

  /**
   * Handles the "pong" type of data.
   * @access private
   * @param {String} origin - The origin of the window that sent the message at the time postMessage was called
   * @param {Object} data
   * @param {String} data.callback_id - The callback ID
   */

  _CNComm.prototype._onPong = function(origin, data) {
    // Now we know what origin has connected, remove the rest
    this._origin = [origin];
    this._origin_length = this._origin.length;

    w.clearInterval(_intervals[data.callback_id]);
    this._onResponse(data);
  };

  /***********/
  /* Helpers */
  /***********/

  /**
   * Generates a randoms UID.
   * @access private
   */

  function _getUID() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
  }

  /**
   * Checks if module is running in an iframe.
   * @access private
   */

  function _checkIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  /**
   * Cross-browser addEventListener.
   * @access private
   * @param {Object} el - The element where the listener should be attached
   * @param {String} type - The type of event
   * @param {CNProxy~addEventListenerHandler} fn - The callback that will handle the event
   */

  function _addEventListener(el, type, fn) {
    if (el.addEventListener) {
      el.addEventListener(type, fn, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, fn);
    } else {
      el['on' + type] = fn;
    }
  }

  /**
   * Cross-browser removeEventListener.
   * @access private
   * @param {Object} el - The element where the listener should be attached
   * @param {String} type - The type of event
   * @param {CNProxy~removeEventListenerHandler} fn - The callback that will handle the event
   */

  function _removeEventListener(el, type, fn) {
    if (el.removeEventListener) {
      el.removeEventListener(type, fn, false);
    } else if (el.attachEvent) {
      el.detachEvent('on' + type, fn);
    } else {
      el['on' + type] = null;
    }
  }

  /**
   * Checks if is an Array.
   * @access private
   * @param {*} obj - The object to check
   * return {Boolean}
   */
  function _isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  /**
   * Checks if an element exist in an array.
   * @access private
   * @param {String} searchElement - El elemento a buscar en el array
   * @param {Array} array - El array donde se buscará el elemento
   * @return {Number} La índice del elemento dentro el array o -1 en caso de no encontrarlo
   */

  function _inArray(searchElement, array) {
    var i, max;

    if (!Array.prototype.indexOf) {
      i = 0;
      max = array.length;

      for (; i < max; i++) {
        if (searchElement === array[i]) {
          return i;
        }
      }

      return -1;
    } else {
      return array.indexOf(searchElement);
    }
  }

  /**
   * @lends CNComm
   */

  w.CNComm = {
    /**
     * Initializes the module.
     * @access public
     * @method
     * @param {Object} options
     * @param {Object} options.target - A reference to the target's "window" object
     * @param {String[]} options.origin - Specifies what the origin must be for the event to be dispatched
     * @param {CNProxy~onMessageHandler} options.onMessage - A callback function that handles the "message" event response
     */

    init: _CNComm,
  };

  /**
   * A callback function that handles the attached event to an element.
   * @callback CNProxy~addEventListenerHandler
   * @param {Object} event - The "event" object
   */

  /**
   * A callback function that handles the removed event to an element.
   * @callback CNProxy~removeEventListenerHandler
   * @param {Object} event - The "event" object
   */

  /**
   * A callback function that handles the message event response.
   * @callback CNProxy~onMessageHandler
   * @param {Object} data - The object passed from the other window
   */
})(window);
