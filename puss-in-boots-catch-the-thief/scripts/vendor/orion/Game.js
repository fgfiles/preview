/**
 * Created by rufian on 9/9/14.
 */
define(['underscore',
		'orion/Notifier',
		'orion/Notifications',
		'box2D'],
function(_,
		 Notifier,
		 OrionNotifications,
		 Box2D)
{
	var Game = (function()
	{
		"use strict";

		var instance;

		function Game()
		{
			if (instance)
			{
				return instance;
			}

			instance = this;

			// Properties --------------------------------------------------------------------------------------------------
			//
			this.cancelAnimation = false;
			this.canvas = null;
			this.physics = null;
			this.renderer = null;
			this.renderID = null;
			this.stage = null;
			this.delta = 0;
			this.gameObjects = [];
			this.lastTime = 0;

			// Functions ---------------------------------------------------------------------------------------------------
			//
			this.setCanvas = function(value)
			{
				this.canvas = value;
			};

			this.setPhysics = function(value)
			{
				this.physics = value;
			};

			this.setRenderer = function(value)
			{
				this.renderer = value;
			};

			this.setStage = function(value)
			{
				this.stage = value;
			};

			// Game objects ------------------------------------------------------------------------------------------------
			//
			this.addGameObject = function(value)
			{
				var i = this.gameObjects.length;
				while (--i > -1)
				{
					if (this.gameObjects[i] == value) return;
				}

				this.gameObjects.push(value);
			};

			this.removeGameObject = function(value)
			{
				var i = this.gameObjects.length;
				while (--i > -1)
				{
					if (this.gameObjects[i] == value)
					{
						this.gameObjects.splice(i, 1);
						return;
					}
				}
			};

			this.clearAll = function()
			{
				// Forcing a null and then resetting array, just to be safe
				var i = this.gameObjects.length;
				while (--i > -1)
				{
					this.gameObjects[i] = null;
				}
				this.gameObjects = [];
			};

			// Resizing ---------------------------------------------------------------------------------------------------
			//
			this.onResize = function(vo)
			{
				this.renderer.resize(vo.width, vo.height);
			};

			// Rendering ---------------------------------------------------------------------------------------------------
			//
			this.onPause = function()
			{
				this.onStopRender();
			};

			this.onResume = function()
			{
				this.onStartRender();
			};

			this.onStartRender = function()
			{
				// Use PhysicsJS ticker for rendering if it exists
/*				if (this.physics != null)
				{
					Physics.util.ticker.on(function(time, dt)
					{
						this.physics.step(time);
						this.render(time);
					});

					Physics.util.ticker.start();
				}
				else*/
				{
					this.lastTime = 0;
					this.cancelAnimation = false;
					this.render(0);
				}
			};

			this.onStopRender = function()
			{
				cancelAnimationFrame(this.renderID);
				this.cancelAnimation = true;
			};

			this.render = function(value)
			{
				this.delta = value - this.lastTime;

				// Render physics
				if (this.physics != null)
				{
					this.physics.Step(this.delta * 0.001, 1, 1);
					this.physics.DrawDebugData();
				}

				// Loop through game objects and update
				if (this.lastTime > 0)
				{
					var i = this.gameObjects.length;
					while (--i > -1)
					{
						if (this.gameObjects[i] != undefined) this.gameObjects[i].update(this.delta);
					}
				}

				this.lastTime = value;

				// Render stage
				this.renderer.render(this.stage);

				// Clear now that everything is done
				if (this.physics != null) this.physics.ClearForces();

				// Request next render
				if (!this.cancelAnimation) this.renderID = requestAnimFrame(this.render);
			};

			_.bindAll(this, 'onPause');
			_.bindAll(this, 'onStartRender');
			_.bindAll(this, 'onStopRender');
			_.bindAll(this, 'onResume');
			_.bindAll(this, 'render');
			_.bindAll(this, 'onResize');

			// Registering notification interests with global Notifier
			Notifier.getInstance().addNotificationListener(OrionNotifications.PAUSE, this.onPause, this);
			Notifier.getInstance().addNotificationListener(OrionNotifications.RESIZE, this.onResize, this);
			Notifier.getInstance().addNotificationListener(OrionNotifications.RESUME, this.onResume, this);
			Notifier.getInstance().addNotificationListener(OrionNotifications.START_RENDER, this.onStartRender, this);
			Notifier.getInstance().addNotificationListener(OrionNotifications.STOP_RENDER, this.onStopRender, this);
		}

		Game.getInstance = function()
		{
			return instance || new Game();
		};

		return Game;
	}());

	return Game;
});