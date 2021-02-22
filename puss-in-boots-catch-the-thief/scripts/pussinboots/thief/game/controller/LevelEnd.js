/**
 * Created by rufian on 11/17/14.
 */
define(['orion/Notifications',
		'orion/Notifier',
		'orion/Application',
		'game/logic/Logic',
		'game/logic/Audio',
		'game/model/PlayerModel',
		'jquery',
		'TweenMax',
		'underscore'],
function(Notifications,
		 Notifier,
		 Application,
		 Logic,
		 Audio,
		 PlayerModel,
		 $,
		 TweenMax,
		 _)
{
	var LevelEnd = (function()
	{
		var app = Application.getInstance();

		var logic = app.getView(Logic.NAME);

		// Stopping the thief from updating and displaying warning messages
		logic.thief.active = false;

		var playerModel = app.getModel(PlayerModel.NAME);
		TweenMax.delayedCall(2, _.bind(playerModel.hudMessage.updateLabel, playerModel.hudMessage), [window.gameCopy.levelEnd]);

		var end = function()
		{
			// Gather info to send the level results screen
			var score = playerModel.score;

			var event = jQuery.Event("Game:GameOver");
			event.score = score;
			$(window).trigger(event);

			Backbone.trigger('onGameOver', score );

			Notifier.getInstance().trigger(Notifications.STOP_RENDER);
		};

		// Wait for a few seconds, then show end screen
		TweenMax.delayedCall(4, _.bind(end, this));
	});

	return LevelEnd;
});