/**
 * Created by rufian on 9/9/14.
 */
define(['orion/Notifier'], function (Notifier)
{
	var Application = (function()
	{
		"use strict";

		var instance; //prevent modification of "instance" variable

		function Singleton()
		{
			if (instance)
			{
				return instance;
			}

			instance = this;

			// Properties --------------------------------------------------------------------------------------------------
			//
			this.controllers = {};
			this.models = {};
			this.views = {};

			// Functions ---------------------------------------------------------------------------------------------------
			//
			this.addController = function(key, value)
			{
				if (this.controllers[key] == undefined)
				{
					this.controllers[key] = value;

					/**
					 * As this is a controller, we also need to register the key with the Notifier so that the notification
					 * is picked up and the controller called.
					 */
					Notifier.getInstance().addNotificationListener(key, value);
				}
			};

			this.addModel = function(key, value)
			{
				if (this.models[key] == undefined)
				{
					this.models[key] = value;
				}
			};

			this.getModel = function(key)
			{
				return this.models[key];
			};

			this.addView = function(key, value)
			{
				if (this.views[key] == undefined)
				{
					this.views[key] = value;
				}
			};

			this.removeView = function(key, value)
			{
				this.views[key] = null;

				// Rebuilding views (otherwise you end up with keys = null)
				var temp = {};
				for (var i in this.views)
				{
					if (this.views[i] != null)
					{
						temp[i] = this.views[i];
					}
				}

				this.views = temp;
			};

			this.getView = function(key)
			{
				return this.views[key];
			};
		}

		//instance accessor
		Singleton.getInstance = function()
		{
			return instance || new Singleton();
		}

		return Singleton;
	}());

	return Application;
});