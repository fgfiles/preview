/**
 * Created by rufian on 11/17/14.
 */
define(['orion/Notifications',
		'orion/Notifier',
		'orion/Application',
		'game/logic/Audio',
		'game/model/PlayerModel',
		'jquery'],
function(Notifications,
		 Notifier,
		 Application,
		 Audio,
		 PlayerModel,
		 $)
{
	var LevelQuit = (function()
	{
		Notifier.getInstance().trigger(Notifications.STOP_RENDER);

		// Play scratch
		var app = Application.getInstance();
		var audio = app.getView(Audio.NAME);
		audio.forceStop(audio.musicInstance);
		audio.playScratch();

		// Gather info to send the level results screen
		var playerModel = app.getModel(PlayerModel.NAME);
		var score = playerModel.score;

		var event = $.Event("Game:Quit");
		event.data = { score: score };
		$(window).trigger(event);
	});

	return LevelQuit;
});