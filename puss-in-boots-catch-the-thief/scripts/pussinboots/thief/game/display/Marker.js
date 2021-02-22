/**
 * Created by rufian on 12/18/14.
 */
define(['orion/GameObject',
		'TweenMax'],
function(GameObject,
		 TweenMax)
{
	var Marker = function(name, asset)
	{
		GameObject.call(this, name, asset);

		this.asset.anchor = new PIXI.Point(0.5, 0.5);
		this.d = -1;
		this.diff = 0;
		this.distanceScale = this.getScale(this.d);
		this.offsetX = 0;
		this.offsetY = 0;
		this.offsetW = this.asset.width * 0.5;
		this.removing = false;
		this.asset.visible = false;
	};

	Marker.prototype = Object.create(GameObject.prototype);
	Marker.prototype.constructor = Marker;

	// Getters / setters ---------------------------------------------------------------------------------------------------
	//
	Object.defineProperty(Marker.prototype, 'alpha',	{
		get: function () { return this.asset.alpha },
		set: function(value) { this.asset.alpha = value; }
	});

	Object.defineProperty(Marker.prototype, 'scaleX',	{
		get: function () { return this.asset.scale.x },
		set: function(value) { this.asset.scale.x = value; }
	});

	Object.defineProperty(Marker.prototype, 'scaleY',	{
		get: function () { return this.asset.scale.y },
		set: function(value) { this.asset.scale.y = value; }
	});

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	Marker.prototype.d = null;
	Marker.prototype.diff = null;
	Marker.prototype.distanceScale = null;
	Marker.prototype.offsetX = null;
	Marker.prototype.offsetW = null;
	Marker.prototype.removing = null;

	// Behavior ------------------------------------------------------------------------------------------------------------
	//
	Marker.prototype.getScale = function(d)
	{
		if (d < 0)
		{
			this.removing = false;
			this.distanceScale = 0.1;
			this.asset.visible = true;
		}
		else if (d > 1)
		{
			if (!this.removing)
			{
				this.removing = true;
				TweenMax.to(this, 0.5, { alpha: 0, scaleX: 1.5, scaleY: 1.5, ease:Elastic.easeIn, onComplete:this.hideComplete, onCompleteScope:this })
			}
			this.distanceScale = 1;
		}
		else
		{
			this.distanceScale = d;
			this.asset.visible = true;
			this.removing = false;
		}
	};

	Marker.prototype.hideComplete = function()
	{
		this.asset.visible = false;
	};

	Marker.prototype.reset = function()
	{
		this.removing = false;
		this.scaleX = this.scaleY = 0;
		this.alpha = 1;
		this.distanceScale = 0;
		this.d = 0;
		this.asset.visible = false;
	};

	Marker.prototype.setPosition = function(character, target)
	{
		if (target == null)
		{
			this.hideComplete();
			return;
		}

//		this.d = 1 - ((target.asset.x - (character.asset.x + 2272)) / 1132);
		this.d = 1 - ((target.asset.x - (character.asset.x + 1200)) / 1132);
		this.offsetX = -100 * (1 - this.d);
		this.getScale(this.d);
	};

	// Update --------------------------------------------------------------------------------------------------------------
	//
	Marker.prototype.update = function(deltaTime)
	{
		if (this.removing) return;

		this.asset.x = 1136 - this.offsetX - this.offsetW;
		this.asset.y = 300 + this.offsetY;
		this.scaleX = this.scaleY = this.distanceScale;
		this.asset.rotation = 1 - this.scaleX;
	};

	return Marker;
});