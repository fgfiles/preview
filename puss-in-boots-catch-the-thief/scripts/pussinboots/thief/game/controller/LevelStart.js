/**
 * Created by rufian on 11/17/14.
 */
define(['game/logic/Logic',
		'game/model/PlayerModel',
		'orion/effect/ColorOverlay',
		'orion/Application'],
function(Logic,
		 PlayerModel,
		 ColorOverlay,
		 Application)
{
	var LevelStart = (function(isNext)
	{
		var app = Application.getInstance();
		var logic = app.getView(Logic.NAME);
		var playerModel = app.getModel(PlayerModel.NAME);

		// Recycle lemurs
/*		var next = (isNext != undefined) ? isNext : false;
		var round = (next) ? playerModel.nextRound() : 1;
		var diff = (20 - (round - 1)) / 20;
		var difficultyOffset = (diff > 0.6) ? diff : 0.6;

		logic.recycle();
console.log('starting level')
		var recycledLemurs = logic.usedLemurs;
*/
		// Empty out used lemur list
//		logic.clear();

		// Start off the queue
		logic.start(1000);

		// HUD message
//		if (next) playerModel.hudMessage.updateLabel(playerModel.hudMessage.roundText + ' ' + (round + 1));
//		else playerModel.hudMessage.updateLabel(playerModel.hudMessage.roundText + ' ' + round);

		// Start / reset music
//		var audio = app.getView(Audio.NAME);
//		audio.startMusic();
//		audio.playLevelStart();
		createjs.Sound.play('success');

		// Play white flash effect
		var whiteOut = app.getView(ColorOverlay.NAME);
		whiteOut.play();
	});

	return LevelStart;
});