/**
 * Created by rufian on 12/18/14.
 */
define(['game/display/Marker',
		'PIXI'],
function(Marker,
		 PIXI)
{
	var MarkerCactus = function(name)
	{
		Marker.call(this, name, new PIXI.Sprite.fromFrame('MarkerCactus.png'));
		this.asset.y = 200;
	};

	MarkerCactus.NAME = 'MarkerCactus';
	MarkerCactus.prototype = Object.create(Marker.prototype);
	MarkerCactus.prototype.constructor = MarkerCactus;

	return MarkerCactus;
});