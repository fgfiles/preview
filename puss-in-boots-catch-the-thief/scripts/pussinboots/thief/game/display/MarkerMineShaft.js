/**
 * Created by rufian on 12/18/14.
 */
define(['game/display/Marker',
		'PIXI'],
function(Marker,
		 PIXI)
{
	var MarkerMineShaft = function(name)
	{
		Marker.call(this, name, new PIXI.Sprite.fromFrame('MarkerMineShaft.png'));
		this.asset.y = 300;
	};

	MarkerMineShaft.NAME = 'MarkerMineShaft';
	MarkerMineShaft.prototype = Object.create(Marker.prototype);
	MarkerMineShaft.prototype.constructor = MarkerMineShaft;

	return MarkerMineShaft;
});