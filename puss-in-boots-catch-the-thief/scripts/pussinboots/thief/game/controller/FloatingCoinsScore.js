/**
 * Created by rufian on 11/17/14.
 */
define(['game/model/PlayerModel',
		'orion/Application'],
function(PlayerModel,
		 Application)
{
	var FloatingCoinsScore = (function()
	{
		var app = Application.getInstance();

		var playerModel = app.getModel(PlayerModel.NAME);
		playerModel.floatingCoinScore();
	});

	return FloatingCoinsScore;
});