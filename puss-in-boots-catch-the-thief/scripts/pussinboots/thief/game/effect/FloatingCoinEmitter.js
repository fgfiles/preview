/**
 * Created by rufian on 12/17/14.
 */
define(['orion/GameObject',
		'game/effect/FloatingCoin',
		'PIXI'],
function(GameObject,
		 FloatingCoin,
		 PIXI)
{
	var FloatingCoinEmitter = function(container)
	{
		GameObject.call(this, FloatingCoinEmitter.NAME);

		this.setUp(container);
	};

	FloatingCoinEmitter.NAME = 'FloatingCoinEmitter';
	FloatingCoinEmitter.prototype = Object.create(GameObject.prototype);
	FloatingCoinEmitter.prototype.constructor = FloatingCoinEmitter;
	FloatingCoinEmitter.prototype.cache = null;
	FloatingCoinEmitter.prototype.character = null;
	FloatingCoinEmitter.prototype.coins = null;
	FloatingCoinEmitter.prototype.container = null;
	FloatingCoinEmitter.prototype.currentTime = null;
	FloatingCoinEmitter.prototype.diffX = null;
	FloatingCoinEmitter.prototype.emitY = null;
	FloatingCoinEmitter.prototype.emitDir = null;
	FloatingCoinEmitter.prototype.emitMinY = null;
	FloatingCoinEmitter.prototype.emitMaxY = null;
	FloatingCoinEmitter.prototype.lastEmit = null;
	FloatingCoinEmitter.prototype.playerModel = null;
	FloatingCoinEmitter.prototype.thief = null;
	//
	// Persistent sound
	FloatingCoinEmitter.prototype.soundCoins = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	FloatingCoinEmitter.prototype.setUp = function(container)
	{
		this.cache = [];
		this.coins = [];
		this.container = container;

		var textureA = PIXI.Texture.fromFrame('Coin1.png');
		var textureB = PIXI.Texture.fromFrame('Coin2.png');
		var textureC = PIXI.Texture.fromFrame('Coin3.png');
		var textureD = PIXI.Texture.fromFrame('Coin4.png');
		var textureE = PIXI.Texture.fromFrame('Coin5.png');
		var textureF = PIXI.Texture.fromFrame('Coin6.png');
		var textureG = PIXI.Texture.fromFrame('Coin7.png');
		var textures = [textureA, textureB, textureC, textureD, textureE, textureF, textureG];
		var c;
		for (var i = 0; i < 8; i++)
		{
			c = new FloatingCoin(textures);
			c.x = -300;
			c.y = -300;
			c.z = 99800 + i;
			c.anchor = new PIXI.Point(0.5, 0.5);
			c.scaleX = c.scaleY = 1;
			c.rotation = Math.random();
			this.cache.push(c);
			container.addChild(c);
		}

		this.currentTime = 0;
		this.emitMinY = 200;
		this.emitMaxY = 380;
		this.emitDir = 20;
		this.emitY = this.emitMaxY;
		this.lastEmit = 0;

		// Making persistent sounds
		this.soundCoins = [];
		for (i = 0; i < 8; i++)
		{
			this.soundCoins.push(createjs.Sound.createInstance('coin0' + (i + 1)));
		}
	};

	FloatingCoinEmitter.prototype.clear = function()
	{
		this.recycleAll();
	};

	// Emitting coins ------------------------------------------------------------------------------------------------------
	//
	FloatingCoinEmitter.prototype.emit = function()
	{
		if (this.cache.length > 0)
		{
			var c = this.cache.shift();
			c.position.x = this.character.asset.position.x + 1136;
			c.position.y = this.emitY;
			c.active = true;
			c.visible = true;
			c.play();
			this.coins.push(c);

			this.emitY += this.emitDir;
			if (this.emitY <= this.emitMinY)
			{
				this.emitDir = 20;
			}
			else if (this.emitY >= this.emitMaxY)
			{
				this.emitDir = -20;
			}
		}
	};

	FloatingCoinEmitter.prototype.emitBatch = function()
	{
		if (this.cache.length > 0)
		{
			this.count = 0;
			var c;
			var i = this.cache.length;
			var x = 50 + (Math.random() * 100);
			var y = 20 + (Math.random() * 20);
			while (--i > -1)
			{
				c = this.cache.shift();
				c.position.x = this.character.asset.position.x + 1136 + (x * i);
				c.position.y = this.emitY;
				c.visible = true;
				c.play();
				this.coins.push(c);

				this.emitY += this.emitDir;
				if (this.emitY <= this.emitMinY) this.emitDir = y;
				else if (this.emitY >= this.emitMaxY)this.emitDir = -y;
			}
			return true;
		}
		return false;
	};

	FloatingCoinEmitter.prototype.getLast = function()
	{
		return this.coins[0].position.x;
	};

	FloatingCoinEmitter.prototype.recycleCoin = function(value)
	{
		value.visible = false;
		value.active = false;
		value.reset();
		value.stop();
	};

	FloatingCoinEmitter.prototype.recycleAll = function()
	{
		var c;
		var i;
		while (this.coins.length > 0)
		{
			i = this.coins.length - 1;
			c = this.coins.splice(i, 1);
			this.recycleCoin(c[0]);
			this.cache.push(c[0]);
		}
	};

	FloatingCoinEmitter.prototype.playCoinSound = function(value)
	{
		this.soundCoins[value].play();
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	FloatingCoinEmitter.prototype.update = function(deltaTime)
	{
		if (this.character != null)
		{
			var i = this.coins.length;
			var skip = false;

			if (i > 0)
			{
				var c = this.coins[0];
				var d;
				var dX;
				var dY;

				if ((c.position.x + c.width) < -this.container.bounds.left)
				{
					this.recycleAll();
					skip = true;
				}

				if (!skip)
				{
					while (--i > -1)
					{
						c = this.coins[i];
						dX = this.character.asset.position.x - c.position.x;
						dY = this.character.asset.position.y - c.position.y - 50;
						d = Math.sqrt((dX * dX) + (dY * dY));

						if (d < 100)
						{
							if (c.active)
							{
								c.hit();
								this.playCoinSound(i);
								this.playerModel.floatingCoinScore();
								this.thief.incrementCoinCount();
							}
						}
					}
				}
			}
		}
	};

	return FloatingCoinEmitter;
});