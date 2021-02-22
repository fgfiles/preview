/**
 * Created by rufian on 12/16/14.
 */
define(['orion/GameObject',
		'game/effect/Coin',
		'TweenMax',
		'PIXI'],
function(GameObject,
		 Coin,
		 TweenMax,
		 PIXI)
{
	var Coins = function(container)
	{
		GameObject.call(this, Coins.NAME);

		this.setUp(container);
	};

	Coins.NAME = 'Coins';
	Coins.prototype = Object.create(GameObject.prototype);
	Coins.prototype.constructor = Coins;
	Coins.prototype.coins = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	Coins.prototype.setUp = function(container)
	{
		this.coins = [];

		var textureA = PIXI.Texture.fromFrame('Coin1.png');
		var textureB = PIXI.Texture.fromFrame('Coin2.png');
		var textureC = PIXI.Texture.fromFrame('Coin3.png');
		var textureD = PIXI.Texture.fromFrame('Coin4.png');
		var textureE = PIXI.Texture.fromFrame('Coin5.png');
		var textureF = PIXI.Texture.fromFrame('Coin6.png');
		var textureG = PIXI.Texture.fromFrame('Coin7.png');
		var textures = [textureA, textureB, textureC, textureD, textureE, textureF, textureG];
		var c;
		for (var i = 0; i < 10; i++)
		{
			c = new Coin(textures);
			c.z = 99900 + i;
			this.coins.push(c);
			c.x = Math.random() * 1136;
			c.y = Math.random() * 640;
			container.addChild(c);
		}

		this.hideCoins();
	};

	Coins.prototype.hideCoins = function()
	{
		var i = this.coins.length;
		while (--i > -1)
		{
			this.coins[i].visible = false;
			this.coins[i].stop();
		}
	};

	Coins.prototype.disperseCoins = function(x, y)
	{
		var i = this.coins.length;
		while (--i > -1)
		{
			this.coins[i].x = this.coins[i].startX = x + (-10 + Math.random() * 20);
			this.coins[i].y = this.coins[i].startY = y + (-5 + Math.random() * 10);
			this.coins[i].scaleX = this.coins[i].scaleY = 0.5 + (Math.random() * 0.5);
			this.coins[i].visible = true;
			this.coins[i].play();
		}
	};

	Coins.prototype.playEffect = function(toX, toY, emitX, emitY)
	{
		this.disperseCoins(emitX, emitY);
		TweenMax.staggerFrom (this.coins, .5,
			{ x: toX, y: toY, scaleX:0, scaleY:0, onStart:this.onStart, onStartParams:["{self}"], onStartScope:this, onUpdate:this.updateR, onUpdateParams:["{self}"], onUpdateScope:this, ease:Elastic.easeOut },
			0.015,
			this.hideCoins,
			[],
			this );
	};

	Coins.prototype.onStart = function(value)
	{
		var dX = value.vars.x - value.target.startX;
		var dY = value.vars.y - value.target.startY;
		var len = Math.sqrt(dX * dX + dY * dY);

		value.target.wobbleSpeed = 2 + Math.random() * 4;
		value.target.wobbleSize = 60 + Math.random() * 50;

		if (len > 0)
		{
			var nX = -dY / len;
			var nY = dX / len;
			value.target.nX = nX;
			value.target.nY = nY;
		}
		else
		{
			value.target.nX = value.target.nY = 0;
		}
	};

	Coins.prototype.updateR = function(value)
	{
		var dX = value.vars.x - value.target.startX;
		var dY = value.vars.y - value.target.startY;
		var t = value.progress();
		var tX = value.target.startX + dX * t;
		var tY = value.target.startY + dY * t;
		var wobbleSpeed = value.target.wobbleSpeed;
		var wobbleSize = value.target.wobbleSize;
		var wT = Math.sin(t * Math.PI);
		var oX = value.target.nX * Math.sin(t * Math.PI * wobbleSpeed) * wobbleSize * (wT);
		var oY = value.target.nY * Math.sin(t * Math.PI * wobbleSpeed) * wobbleSize * (wT);

		value.target.x = tX + oX;
		value.target.y = tY + oY;
	};

	return Coins;
});