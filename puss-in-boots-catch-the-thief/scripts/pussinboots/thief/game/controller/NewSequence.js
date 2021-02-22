/**
 * Created by rufian on 11/17/14.
 */
define(['game/logic/Logic',
		'game/display/CharacterPuss',
		'orion/Application'],
function(Logic,
		 CharacterPuss,
		 Application)
{
	var NewSequence = (function(isNext)
	{
		var app = Application.getInstance();

		// Setting thief's on-screen position based on Puss-in-Boots
		var logic = app.getView(Logic.NAME);
		logic.newSequence();

		var puss = app.getView(CharacterPuss.NAME);
		puss.stumbleWarned = false;
	});

	return NewSequence;
});