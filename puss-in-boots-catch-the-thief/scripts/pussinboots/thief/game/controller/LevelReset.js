/**
 * Created by rufian on 11/17/14.
 */
define(['orion/Application',
		'orion/Notifier',
		'orion/Notifications',
		'game/logic/Logic',
		'game/model/PlayerModel',
		'game/display/CharacterPuss',
		'orion/effect/ColorOverlay'],
function(Application,
		 Notifier,
		 Notifications,
		 Logic,
		 PlayerModel,
		 CharacterPuss,
		 ColorOverlay)
{
	var LevelReset = (function()
	{
		var app = Application.getInstance();

		var logic = app.getView(Logic.NAME);
		var playerModel = app.getModel(PlayerModel.NAME);

		// Reset PlayerModel
		playerModel.score = 0;

		// Reset HUD score
		playerModel.hudScore.reset();

		// Empty out obstacles
		logic.clear();
		logic.recycle();

		var puss = app.getView(CharacterPuss.NAME);
		puss.reset();

		// Start rendering
		Notifier.getInstance().trigger(Notifications.START_RENDER);

		// White out
		var whiteOut = app.getView(ColorOverlay.NAME);
		whiteOut.play();
	});

	return LevelReset;
});