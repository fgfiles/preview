(function(win) 
{
	// native extensions
	Math.rand = function(min, max)
	{
		if ( min.isInt() && max.isInt() )
			return ~~(Math.random() * (max - min + 1)) + min;
		else 
			return (Math.random() * (max - min)) + min;
	}

	Math.distance = function(x1, y1, x2, y2)
	{
		var x = x2 - x1, y = y2 - y1;
		return Math.sqrt(x * x + y * y)
	}

	Math.lerp = function(current, target, time) { return current + time * (target - current) }

	Number.prototype.lerp = function(target, time) { return Math.lerp(this, target, time) }

	Number.prototype.map = function(istart, istop, ostart, ostop) { return ostart + (ostop - ostart) * ((this - istart) / (istop - istart)) }

	Number.prototype.commaFormat = function() { return (this + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') }

	Number.prototype.limit = function(min, max) { return Math.min(max, Math.max(min, this)) }

	Number.prototype.round = function(precision) 
	{
		precision = Math.pow(10, precision || 0);
		return Math.round(this * precision) / precision
	}

	Number.prototype.isInt = function() { return this % 1 == 0 }

	Number.prototype.toInt = function() { return (this | 0) }

	Number.prototype.toRad = function() { return (this / 180) * Math.PI }

	Number.prototype.toDeg = function() { return (this * 180) / Math.PI }

	String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, '') }

	String.prototype.camelCase = function()
	{
		return this.replace(/-\D/g, function(match)
		{
			return match.charAt(1).toUpperCase()
		})
	}

	String.prototype.ucwords = function()
	{
		return (this + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) 
		{
			return $1.toUpperCase()
		})
	}

	String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1) }

	Object.defineProperty(Array.prototype, 'erase', 
	{ 
		value : function(item)
		{
			var index = this.indexOf(item);
			if ( index > -1 ) 
				this.splice(index, 1);
			return this
		}
	})

	Object.defineProperty(Array.prototype, 'random',
	{
		value : function()
		{
			return this[Math.rand(0, this.length - 1)]
		}
	})

	Object.defineProperty(Array.prototype, 'shuffle',
	{
		value : function()
		{
			for ( var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x );
			return this
		}
	})

	Function.prototype.bind = function(object)
	{
		var t = this;
		return function() { return t.apply(object, arguments) }
	}

	//

	// make our soon to be global object
	var ig = 
	{
		baked : false,
		lib : 'js/',
		prefix : win.ImpactPrefix || '',
		device : {},
		modules : {},
		Book: {},

		// for our own requirejs
		_current : null,
		_loadQueue : [],
		_waitForOnload : 0,

		// we don't like cache
		nocache : document.location.href.match(/\?nocache/) ? '?' + Date.now() : '',

		// alias of getElementById OR getElementsByTagName
		$ : function(selector) { return selector.charAt(0) == '#' ? document.getElementById(selector.substr(1)) : document.getElementsByTagName(selector) },

		// creates an element
		$new : function(name) { return document.createElement(name)	},

		log : function() { console.log.apply(console, arguments) },
		
		// copies an object
		copy : function(object) 
		{
			if ( !object || 
				typeof object != 'object' ||
				object instanceof HTMLElement ||
				object instanceof ig.Class )
				return object;

			else if ( object instanceof Array ) 
			{
				var i = 0, l = object.length, c = [];
				for ( ; i < l; i++ )
					c[i] = ig.copy(object[i]);

				return c
			}

			else 
			{
				var i, c = {};
				for ( i in object )
					c[i] = ig.copy(object[i]);

				return c
			}
		},
		
		// merges two objects
		merge : function(original, extended) 
		{
			for ( var key in extended ) 
			{
				var ext = extended[key];

				if ( typeof ext != 'object' ||
					ext instanceof HTMLElement ||
					ext instanceof ig.Class ||
					ext === null )
					original[key] = ext;

				else 
				{
					if ( !original[key] || typeof original[key] != 'object' )
						original[key] = (ext instanceof Array) ? [] : {};

					ig.merge(original[key], ext)
				}
			}

			return original
		},
		
		// sorts an object
		ksort : function(obj) 
		{
			if ( !obj || typeof obj != 'object' )
				return [];
			
			var keys = [], values = [], i;
			for ( i in obj )
				keys.push(i);
			
			keys.sort();
			for ( i = 0; i < keys.length; i++ )
				values.push(obj[keys[i]]);
			
			return values
		},

		// the booter
		boot : function()
		{
			var dev = {};
			var ua = navigator.userAgent;

			dev.pixelRatio = win.devicePixelRatio || 1;
			dev.screen = { width : win.screen.availWidth * dev.pixelRatio, height : win.screen.availHeight * dev.pixelRatio };
			
			// ios
			dev.iPod = /ipod/i.test(ua);
			dev.iPhone = /iphone/i.test(ua);
			dev.iPad = /ipad/i.test(ua);
			dev.iOS = dev.iPhone || dev.iPad || dev.iPod;
			dev.iOSVersion = dev.iOS ? parseFloat(((ua.match(/os (\d+_\d+)?/i) || ['', ''])[1] + '').replace('_', '.')) : -1;

			// android/silk
			dev.kindle = /silk/i.test(ua);
			dev.android = /android/i.test(ua);
			dev.androidPhone = /(?=.*\bandroid\b)(?=.*\bmobile\b)/i.test(ua);
			dev.androidTablet = (!dev.androidPhone && /Android/i.test(ua)) || dev.kindle;
			dev.android = dev.androidPhone || dev.androidTablet;
			dev.androidVersion = parseFloat(ua.slice(ua.indexOf('Android') + 8));
			if ( isNaN(dev.androidVersion) )
				dev.androidVersion = 99;

			// win
			dev.winPhone = /(iemobile|windows phone)/i.test(ua);
			dev.winTablet = /(?=.*\bwindows\b)(?=.*\\btouch\b)/i.test(ua);

			// browser
			dev.chrome = ua.toLowerCase().indexOf('chrome') > -1;
			dev.safari = ua.toLowerCase().indexOf('safari') > -1;

			// misc
			dev.mobile = dev.iOS || dev.android || dev.winPhone || /mobile/i.test(ua);
			dev.tablet = dev.iPad || dev.androidTablet || dev.winTablet;
			dev.touchDevice = (('ontouchstart' in win) || (win.navigator.msMaxTouchPoints));
			dev.crosswalk = /crosswalk/i.test(ua);
			dev.cocoonJS = !!navigator.isCocoonJS;
			dev.ejecta = /ejecta/i.test(ua);

			// add the meta viewport tag if not available
			var metaTags = ig.$('meta');

			for ( var i = 0, viewportFound = false, metaTag; metaTag = metaTags[i++]; )
				if ( metaTag.name == 'viewport' )
					viewportFound = true;

			if ( !viewportFound )
			{
				var viewport = ig.$new('meta');
				viewport.name = 'viewport';
				viewport.content = 'initial-scale=1, maximum-scale=1, user-scalable=no';

				if ( dev.iOSVersion == 7.1 ) 
					viewport.content += ', minimal-ui';

				ig.$('head')[0].appendChild(viewport);
			}

			// set it to ig.device, finally
			ig.device = dev;
		},

		module : function(name) 
		{
			if ( ig._current )
				throw('Module "' + ig._current.name + '" defines nothing');

			if ( ig.modules[name] && ig.modules[name].body )
				throw('Module "' + name + '" is already defined');

			ig._current = { name : name, requires : [], loaded : false, body : null };

			ig.modules[name] = ig._current;
			ig._loadQueue.push(ig._current);

			return ig
		},
		
		requires : function() 
		{
			ig._current.requires = Array.prototype.slice.call(arguments);
			return ig
		},		
		
		defines : function(body) 
		{
			ig._current.body = body || function() {};
			ig._current = null;
			ig._initDOMReady();
		},

		_initDOMReady : function() 
		{
			if ( ig.modules['dom.ready'] ) 
			{
				ig._execModules();
				return;
			}

			// start it up
			ig.boot();
			
			ig.modules['dom.ready'] = { requires : [], loaded : false, body : null };
			ig._waitForOnload++;

			if ( document.readyState === 'complete' )
				ig._DOMReady();

			else 
			{
				document.addEventListener('DOMContentLoaded', ig._DOMReady, false);
				window.addEventListener('load', ig._DOMReady, false);
			}
		},

		_DOMReady : function() 
		{
			if ( !ig.modules['dom.ready'].loaded ) 
			{
				if ( !document.body )
					return setTimeout(ig._DOMReady, 10);

				ig.modules['dom.ready'].loaded = true;
				ig._waitForOnload--;
				ig._execModules();
			}

			return 0
		},

		_loadScript : function(name, requiredFrom) 
		{
			ig.modules[name] = { name : name, requires : [], loaded : false, body : null };
			ig._waitForOnload++;
			
			var path = ig.prefix + ig.lib + name.replace(/\./g, '/') + '.js' + ig.nocache;

			var script = ig.$new('script');
			script.type = 'text/javascript';
			script.src = path;
			script.onload = function() 
			{
				ig._waitForOnload--;
				ig._execModules();
			};
			script.onerror = function() 
			{
				throw('Failed to load module ' + name + ' at ' + path + ' ' + 'required from ' + requiredFrom)
			};

			ig.$('head')[0].appendChild(script);
		},
		
		_execModules : function() 
		{
			var modulesLoaded = false;

			for ( var i = 0; i < ig._loadQueue.length; i++ ) 
			{
				var m = ig._loadQueue[i];
				var dependenciesLoaded = true;
				
				for ( var j = 0; j < m.requires.length; j++ ) 
				{
					var name = m.requires[j];
					if ( !ig.modules[name] ) 
					{
						dependenciesLoaded = false;
						ig._loadScript(name, m.name);
					}
					else if ( !ig.modules[name].loaded )
						dependenciesLoaded = false;
				}
				
				if ( dependenciesLoaded && m.body ) 
				{
					ig._loadQueue.splice(i, 1);
					m.loaded = true;
					m.body();
					modulesLoaded = true;
					i--;
				}
			}
			
			if ( modulesLoaded )
				ig._execModules();
			
			// no modules executed, no more files to load but loadQueue not empty?
			// must be some unresolved dependencies!
			else if( !ig.baked && ig._waitForOnload == 0 && ig._loadQueue.length != 0 ) 
			{
				var unresolved = [];
				for ( var i = 0; i < ig._loadQueue.length; i++ ) 
				{
					// Which dependencies aren't loaded?
					var unloaded = [];
					var requires = ig._loadQueue[i].requires;
					for ( var j = 0; j < requires.length; j++ ) 
					{
						var m = ig.modules[ requires[j] ];
						if ( !m || !m.loaded )
							unloaded.push(requires[j]);
					}

					unresolved.push(ig._loadQueue[i].name + ' (requires: ' + unloaded.join(', ') + ')');
				}
				
				throw( 
					'Unresolved (or circular?) dependencies. ' +
					'Most likely there\'s a name/path mismatch for one of the listed modules ' +
					'or a previous syntax error prevents a module from loading: ' + '\n' +
					unresolved.join("\n")
				);
			}
		}
	};

	// prep Class
	var initializing = false,
		fnTest = /xyz/.test(function() { xyz }) ? /\bparent\b/ : /.*/,
		inject = function(prop) 
		{
			var proto = this.prototype,
				parent = {},
				name;

			for ( name in prop ) 
			{		
				if ( typeof prop[name] == 'function' &&
					typeof proto[name] == 'function' && 
					fnTest.test(prop[name]) ) 
				{
					parent[name] = proto[name]; // save original function
					proto[name] = (function(name, fn)
					{
						return function() 
						{
							var tmp = this.parent;
							this.parent = parent[name];
							var ret = fn.apply(this, arguments);			 
							this.parent = tmp;
							return ret
						}
					})(name, prop[name]);
				}
				else
					proto[name] = prop[name];
			}
		};

	// The base Class implementation (does nothing)
	ig.Class = function() {};

	// Create a new Class that inherits from this class
	ig.Class.extend = function(prop)
	{
		var parent = this.prototype;

		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var prototype = new this;
		initializing = false;

		// Copy the properties over onto the new prototype
		for ( var name in prop )
		{
			// Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == 'function' && typeof parent[name] == 'function' && fnTest.test(prop[name]) ?
				(function(name, fn)
				{
					return function()
					{
						var tmp = this.parent;

						// Add a new .parent() method that is the same method
						// but on the super-class
						this.parent = parent[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						var ret = fn.apply(this, arguments);
						this.parent = tmp;

						return ret;
					};
				})(name, prop[name]) : prop[name];
		}

		// The dummy class constructor
		function Class()
		{
			// All construction is actually done in the init method
			if ( !initializing )
			{
				// If this class has a staticInstantiate method, invoke it
				// and check if we got something back. If not, the normal
				// constructor (init) is called.
				if ( this.staticInstantiate ) 
				{
					var obj = this.staticInstantiate.apply(this, arguments);
					if ( obj )
						return obj;
				}

				for ( var p in this ) 
					if ( typeof(this[p]) == 'object' )
						this[p] = ig.copy(this[p]); // deep copy!

				if ( this.init )
					this.init.apply(this, arguments);
			}

			return this
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable
		Class.extend = ig.Class.extend;
		
		// allow injections
		Class.inject = inject;

		return Class
	};


	// last chance to mixin
	if ( win.impactMixin )
		ig.merge(ig, win.impactMixin);


	// make it global
	win.ig = ig;
})(window);


ig.module('lib.impact.impact').requires('dom.ready').defines();