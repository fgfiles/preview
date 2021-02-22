/**
 * Created by rufian on 11/17/14.
 */
define(['game/model/PlayerModel',
		'game/logic/Logic',
		'orion/Application',
		'orion/Notifier'],
function(PlayerModel,
		 Logic,
		 Application,
		 Notifier)
{
	var ObstaclesCleared = (function()
	{
		var app = Application.getInstance();

		var logic = app.getView(Logic.NAME);

		// If the thief's ready... time to add to stage
		if (logic.thief.readyToShow)
		{
			Notifier.getInstance().trigger(tcat.GameNotifications.THIEF_IN_RANGE);
		}
		// Start a new sequence of obstacles
		else
		{
			Notifier.getInstance().trigger(tcat.GameNotifications.NEW_SEQUENCE);
		}

	});

	return ObstaclesCleared;
});