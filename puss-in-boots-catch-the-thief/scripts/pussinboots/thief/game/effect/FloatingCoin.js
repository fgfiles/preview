/**
 * Created by rufian on 12/17/14.
 */
define(['game/effect/Coin',
		'PIXI'],
function(Coin,
		 PIXI)
{
	var FloatingCoin = function(textures)
	{
		Coin.call(this, textures);

		this.loop = true;
		this.animationSpeed = 0.5;
		this.active = true;

		var hitFrames = [];
		for (var i = 0; i < 11; i++)
		{
			hitFrames.push(PIXI.Texture.fromFrame('skeleton-animation_' + i + '.png'));
		}

		this.hitClip = new PIXI.MovieClip(hitFrames);
		this.hitClip.loop = false;
		this.hitClip.pivot.x = 96;
		this.hitClip.pivot.y = 85;
		this.hitClip.visible = false;
		this.addChild(this.hitClip);
	};

	FloatingCoin.prototype = Object.create(Coin.prototype);
	FloatingCoin.prototype.constructor = FloatingCoin;
	FloatingCoin.prototype.active = null;
	FloatingCoin.prototype.hitClip = null;

	FloatingCoin.prototype.hit = function()
	{
		this.hitClip.visible = true;
		this.hitClip.play();
		this.clip.visible = false;
		this.active = false;
	};

	FloatingCoin.prototype.reset = function()
	{
		this.hitClip.currentFrame = 0;
		this.hitClip.visible = false;
		this.clip.visible = true;
		this.active = true;
	};

	return FloatingCoin;
});