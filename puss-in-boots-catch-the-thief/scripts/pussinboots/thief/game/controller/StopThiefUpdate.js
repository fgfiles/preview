/**
 * Created by rufian on 11/17/14.
 */
define(['game/logic/Logic',
		'orion/Application'],
function(Logic,
		 Application)
{
	var StartCountdown = (function()
	{
		var app = Application.getInstance();
		var logic = app.getView(Logic.NAME);
		logic.thief.active = false;
	});

	return StartCountdown;
});