/**
 * Created by rufian on 11/17/14.
 */
define(['game/model/PlayerModel',
		'orion/Application'],
function(PlayerModel,
		 Application)
{
	var ShowWarning = (function()
	{
		var app = Application.getInstance();

		var playerModel = app.getModel(PlayerModel.NAME);
		playerModel.hudMessage.updateLabel(window.gameCopy.showWarning);
	});

	return ShowWarning;
});