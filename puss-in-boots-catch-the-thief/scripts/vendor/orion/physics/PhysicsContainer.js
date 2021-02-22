/**
 * Created by rufian on 12/8/14.
 */
define(['orion/GameObject',
		'TweenMax',
		'PIXI'],
function(GameObject,
		 TweenMax,
		 PIXI)
{
	var PhysicsContainer = function(name, setUpObject)
	{
		GameObject.call(this, name);
		this.setUp(setUpObject);
	};

	PhysicsContainer.prototype = Object.create(GameObject.prototype);
	PhysicsContainer.prototype.backwards = null;
	PhysicsContainer.prototype.constructor = PhysicsContainer;
	PhysicsContainer.prototype.bounds = null;
	PhysicsContainer.prototype.floorBody = null;
	PhysicsContainer.prototype.lastX = null;
	PhysicsContainer.prototype.parallaxLayers = null;
	PhysicsContainer.prototype.scrollRateX = null;
	PhysicsContainer.prototype.shakeOffset = null;
	PhysicsContainer.prototype.target = null;
	PhysicsContainer.prototype.type = null;
	PhysicsContainer.TYPE_AUTO = 0;
	PhysicsContainer.TYPE_FOLLOW = 1;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	PhysicsContainer.prototype.setUp = function(setUpObject)
	{
		this.bounds = new PIXI.Rectangle(setUpObject.x, setUpObject.y, setUpObject.width, setUpObject.height);
		this.bounds.halfWidth = setUpObject.width * 0.3;
		this.asset = new PIXI.DisplayObjectContainer();
		this.parallaxLayers = [];
		this.type = (setUpObject.type == undefined) ? PhysicsContainer.TYPE_AUTO : setUpObject.type;
		this.shakeOffset = { x: 0, y: 0 };

		switch (this.type)
		{
			case PhysicsContainer.TYPE_AUTO:
				this.scrollRateX = (setUpObject.scrollRateX == undefined) ? 30 : setUpObject.scrollRateX;
				break;
			case PhysicsContainer.TYPE_FOLLOW:
				if (setUpObject.target != undefined) this.target = setUpObject.target;
				break;
		}
	};

	PhysicsContainer.prototype.addChild = function(value)
	{
		this.asset.addChild(value);
	};

	PhysicsContainer.prototype.addParallaxChild = function(value)
	{
		this.asset.addChild(value.asset);
		this.parallaxLayers.push(value);
	};

	// ---------------------------------------------------------------------------------------------------------------------
	//
	PhysicsContainer.prototype.getBounds = function()
	{
		return this.bounds;
	};

	PhysicsContainer.prototype.update = function(deltaTime)
	{
		// If the type is auto-scroll
		if (this.type == 0)
		{
			this.asset.position.x -= this.scrollRateX + this.shakeOffset.x;
			this.asset.position.y = this.shakeOffset.y;
		}
		// Or following a target
		else if (this.type == 1)
		{
			if (this.target != null)
			{
				this.asset.position.x = -this.target.x + this.bounds.halfWidth + this.shakeOffset.x;
				this.asset.position.y = this.shakeOffset.y;
			}
		}

		// Setting bounds
		this.bounds.left = this.asset.position.x;
		this.bounds.right = this.asset.position.x + this.bounds.width;

		// Updating any parallax layers
		var i = this.parallaxLayers.length;
		while (--i > -1)
		{
			this.parallaxLayers[i].updatePosition(this.asset.position.x);
		}
	};

	PhysicsContainer.prototype.shake = function(strength, repeatCount, duration, shakeX, shakeY)
	{
		TweenMax.killDelayedCallsTo(this.shakeOffset);
		TweenMax.killTweensOf(this.shakeOffset);

		if (shakeX && !shakeY)
		{
			TweenMax.to (this.shakeOffset, duration, { repeat:repeatCount-1, x:strength, ease:RoughEase.easeInOut});
		}
		else if (!shakeX && shakeY)
		{
			TweenMax.to (this.shakeOffset, duration, { repeat:repeatCount-1, y:strength, ease:RoughEase.easeInOut});
		}
		else
		{
			TweenMax.to (this.shakeOffset, duration, { repeat:repeatCount-1, y:strength, x:strength, ease:RoughEase.easeInOut});
		}

		// Return to normal
		TweenMax.to (this.shakeOffset, duration, { y:0, x:0, delay:(repeatCount + 1) * duration, ease:Linear.easeOut});
	};

	return PhysicsContainer;
});