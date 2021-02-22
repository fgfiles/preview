define(['orion/Application',
		'game/model/PlayerModel'],
function(Application,
		 PlayerModel)
{
	var InitModel = (function()
	{
		Application.getInstance().addModel(PlayerModel.NAME, new PlayerModel(PlayerModel.NAME));
	});

	return InitModel;
});