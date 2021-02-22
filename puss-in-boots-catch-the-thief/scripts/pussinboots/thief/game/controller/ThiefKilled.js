/**
 * Created by rufian on 11/17/14.
 */
define(['game/logic/Logic',
		'orion/Application',
		'game/effect/Coins',
		'underscore'],
function(Logic,
		 Application,
		 Coins,
		 _)
{
	var ThiefKilled = (function(position)
	{
		var app = Application.getInstance();
		var physicsContainer = app.getView('physicsContainer');
		var containerX = -physicsContainer.asset.position.x;
		var thiefX = position.x;
		var thiefY = position.y;
		var x = thiefX - containerX;

		var coins = app.getView(Coins.NAME);
		TweenMax.delayedCall(0.73, _.bind(coins.playEffect, coins), [30, 30, x, thiefY]);
	});

	return ThiefKilled;
});