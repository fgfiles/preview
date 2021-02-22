/**
 * Created by rufian on 12/10/14.
 */
define(['orion/GameObject',
		'PIXI'],
function(GameObject,
		 PIXI)
{
	var ParallaxLayer = function(name, setUpObject)
	{
		var texture = PIXI.Texture.fromFrame(setUpObject.textureID);

		if (setUpObject.tile)
		{
			GameObject.call(this, name, new PIXI.TilingSprite(texture, setUpObject.width, setUpObject.height));
		}
		else
		{
			GameObject.call(this, name, new PIXI.Sprite(texture));
		}

		this.multiplier = setUpObject.multiplier;
		this.asset.x = setUpObject.x;
		this.asset.y = setUpObject.y;
		this.asset.z = this.z = setUpObject.z;
		this.startX = this.asset.x;
		this.offsetX = this.startX;
		this.sceneWidth = setUpObject.sceneWidth;
		this.tile = setUpObject.tile;
		this.tilePoint = new PIXI.Point(0, 0);
	};

	ParallaxLayer.prototype = Object.create(GameObject.prototype);
	ParallaxLayer.prototype.constructor = ParallaxLayer;
	ParallaxLayer.prototype.multiplier = null;
	ParallaxLayer.prototype.pos = null;
	ParallaxLayer.prototype.offsetX = null;
	ParallaxLayer.prototype.sceneWidth = null;
	ParallaxLayer.prototype.startX = null;
	ParallaxLayer.prototype.tile = null;
	ParallaxLayer.prototype.tilePoint = null;

	// Positioning ---------------------------------------------------------------------------------------------------------
	//
	ParallaxLayer.prototype.updatePosition = function(value)
	{

		if (this.tile)
		{
			this.asset.position.x = -value;
			this.tilePoint.x = value * this.multiplier;
			this.asset.tilePosition = this.tilePoint;
		}
		else
		{
			this.pos = -value;
			this.asset.position.x = (-value * this.multiplier) + this.offsetX;

			if ((this.asset.position.x + this.asset.width) < this.pos)
			{
				this.offsetX += (this.sceneWidth + this.asset.width);
			}
		}
	};

	ParallaxLayer.prototype.update = function(deltaTime)
	{
	};

	return ParallaxLayer;
});