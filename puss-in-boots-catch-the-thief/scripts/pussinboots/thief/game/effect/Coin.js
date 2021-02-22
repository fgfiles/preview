/**
 * Created by rufian on 12/16/14.
 */
define(['PIXI'],
function(PIXI)
{
	var Coin = function(textures)
	{
		PIXI.DisplayObjectContainer.call(this);
//		PIXI.MovieClip.call(this, textures);
//		this.loop = true;
		this.clip = new PIXI.MovieClip(textures);
		this.clip.anchor = new PIXI.Point(0.5, 0.5);
		this.addChild(this.clip);
	};

//	Coin.prototype = Object.create(PIXI.MovieClip.prototype);
	Coin.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
	Coin.prototype.constructor = Coin;

	Object.defineProperty(Coin.prototype, 'scaleX',	{
		get: function () { return this.scale.x },
		set: function(value) { this.scale.x = value; }
	});

	Object.defineProperty(Coin.prototype, 'scaleY',	{
		get: function () { return this.scale.y },
		set: function(value) { this.scale.y = value; }
	});

	Object.defineProperty(Coin.prototype, 'animationSpeed',	{
		get: function () { return this.clip.animationSpeed },
		set: function(value) { this.clip.animationSpeed = value; }
	});

	Coin.prototype.play = function()
	{
		this.clip.play();
	};

	Coin.prototype.stop = function()
	{
		this.clip.stop();
	};

	return Coin;
});