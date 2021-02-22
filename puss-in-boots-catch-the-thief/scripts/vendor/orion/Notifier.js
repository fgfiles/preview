/**
 * Created by rufian on 9/9/14.
 */
define(['backbone',
		'underscore'],
function (Backbone, _)
{
	var Notifier = (function()
	{
		"use strict";

		var id;
		var instance;

		function Notifier()
		{
			if (instance)
			{
				return instance;
			}

			instance = this;
			id = "Notifier_" + Math.random().toFixed(1);

			window.Notifier = instance;

			// Properties --------------------------------------------------------------------------------------------------
			//
			this.events = {};
			_.extend(this.events, Backbone.Events);

			this.addNotificationListener = function(key, callback, context)
			{
				this.events.on(key, callback, context);
			};

			this.removeNotificationListener = function(key, callback, context)
			{
				this.events.off(key, callback, context);
			};

			this.trigger = function(key, vo)
			{
				this.events.trigger(key, vo);
			}

			_.bindAll(this, 'trigger');
		}

		Notifier.getInstance = function()
		{
			return instance || new Notifier();
		}

		return Notifier;
	}());

	return Notifier;
});