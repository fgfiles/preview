define([
	'game/controller/InitController',
	'game/controller/InitModel',
	'game/controller/InitView',
	'orion/controller/CreatePIXI',
	'orion/Notifier',
	'orion/Notifications',
	'backbone',
	'box2D',
//	"../project/helpers/BrowserHelper",
	'loader/LoadAssets',
//	"../project/ViewsController",
	'jquery',
	'underscore'
], function (
	InitController,
	InitModel,
	InitView,
	CreatePIXI,
	Notifier,
	OrionNotifications,
	Backbone,
	Box2D,
//	BrowserHelper,
	LoadAssets,
//	ViewsController,
	$,
	_
){
	var Main = Backbone.View.extend({

		initialize: function(){

			// Binding functions and adding listeners
			_.bindAll(this, 'onComplete', 'onGameStart', 'onGameRestart', 'onGamePause');
			this.addListeners();

			/* devMode = true will directly go to the Game */
			window.devMode = false;	
//			window.App = new ViewsController();
//			window.App.start();

//			new BrowserHelper();
			new LoadAssets();
     },

		addListeners: function(){

			Backbone.on('onComplete', this.onComplete);
			$(window).on("Game:Pause", this.onGamePause); // Pause the Game.
			$(window).on("Game:Restart", this.onGameRestart); // Restart the Game.
			$(window).on("Game:Start", this.onGameStart); // Start the Game.
		},

		onComplete: function(){

			// ** Game Code Initialization ** //

			/* Game Events
				$(window).on("Game:Start", _.bind(this.onStart, this)); // Start the Game. 
				$(window).on("Game:Restart", _.bind(this.onRestart, this)); // ReStart the Game. 
				$(window).on("Game:Pause", _.bind(this.onPause, this)); // Pause/unPause the Game (boolean parameter)
			*/

			InitController();
			InitModel();
			InitView();

			var canvas = document.getElementById('view');
			CreatePIXI(canvas, 1136, 640, 0xd83c8, true);

			Notifier.getInstance().trigger(OrionNotifications.START_RENDER);

			/** TODO: Remove the onGameStart call. It's just for dev purposes */
			this.onGameStart();
		},

		onGamePause: function(value)
		{
			Notifier.getInstance().trigger(OrionNotifications.PAUSE, value);
		},

		onGameRestart: function()
		{
			Notifier.getInstance().trigger(tcat.GameNotifications.LEVEL_RESET);
		},

		onGameStart: function()
		{
			Notifier.getInstance().trigger(tcat.GameNotifications.BUILD_SCENE);
			Notifier.getInstance().trigger(tcat.GameNotifications.LEVEL_START);
		}
	});

	window.box2d =
	{
		b2Vec2: Box2D.Common.Math.b2Vec2,
		b2BodyDef: Box2D.Dynamics.b2BodyDef,
		b2Body: Box2D.Dynamics.b2Body,
		b2FilterData: Box2D.Dynamics.b2FilterData,
		b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
		b2Fixture: Box2D.Dynamics.b2Fixture,
		b2World: Box2D.Dynamics.b2World,
		b2MassData: Box2D.Collision.Shapes.b2MassData,
		b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
		b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
		b2DebugDraw: Box2D.Dynamics.b2DebugDraw,
		b2ContactListener: Box2D.Dynamics.b2ContactListener,
		b2WorldManifold: Box2D.Collision.b2WorldManifold
	};

	return Main;
});
