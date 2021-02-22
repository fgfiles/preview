/**
 * Created by rufian on 12/16/14.
 */
define(['orion/GameObject',
		'orion/Notifier',
		'TweenMax',
		'PIXI',
		'underscore'],
function(GameObject,
		 Notifier,
		 TweenMax,
		 PIXI,
		 _)
{
	var HUDRadar = function()
	{
		GameObject.call(this, HUDRadar.NAME, new PIXI.DisplayObjectContainer());

//		this.asset.z = this.z = 100000;
		this.setUp();
	};

	HUDRadar.NAME = 'HUDRadar';
	HUDRadar.prototype = Object.create(GameObject.prototype);
	HUDRadar.prototype.constructor = HUDRadar;
	HUDRadar.prototype.active = null;
	HUDRadar.prototype.distance = null;
	HUDRadar.prototype.maxRange = 1000;
	HUDRadar.prototype.minDistance = 40;
	HUDRadar.prototype.minRange = null;
	HUDRadar.prototype.pussMarker = null;
	HUDRadar.prototype.pussX = 0;
	HUDRadar.prototype.radarRange = 200;
	HUDRadar.prototype.thiefMarker = null;

	//
	HUDRadar.prototype.setUp = function()
	{
		_.bindAll(this, 'playOutOfRange', 'addThief');

		var bg = new PIXI.Graphics();
		bg.beginFill(0x000000, 0.5);
		bg.drawRoundedRect(0, 0, 240, 30, 8);
		bg.endFill();
		this.asset.addChild(bg);
		this.asset.position.x = 1136 - bg.width - 20;
		this.asset.position.y = 20;

		var line = new PIXI.Graphics();
		line.beginFill(0xffffff, 1);
		line.drawRect(0, 0, 200, 1);
		line.endFill();
		this.asset.addChild(line);

		line.x = 20;
		line.y = 20;

		this.pussMarker = new PIXI.Graphics();
		this.pussMarker.beginFill(0xffcc00);
		this.pussMarker.drawRect(0, 0, 3, 8);
		this.pussMarker.endFill();
		this.pussMarker.x = 23;
		this.pussMarker.y = 12;
		this.asset.addChild(this.pussMarker);

		this.thiefMarker = new PIXI.Graphics();
		this.thiefMarker.beginFill(0xfa343a);
		this.thiefMarker.drawRect(0, 0, 3, 8);
		this.thiefMarker.endFill();
		this.thiefMarker.x = 103;
		this.thiefMarker.y = 16;
		this.thiefMarker.pivot = new PIXI.Point(1.5, 4);
		this.thiefMarker.alpha = 0;
		this.asset.addChild(this.thiefMarker);

		this.active = false;
		this.asset.alpha = 0;
		this.minRange = 26;
	};

	HUDRadar.prototype.addThief = function(value)
	{
		TweenMax.killTweensOf(this.asset);
		TweenMax.to (this.asset, 0.5, { alpha: 1 });

		this.active = true;
		this.thiefMarker.alpha = 1;
		this.thiefMarker.scale.x = this.thiefMarker.scale.y = 1;
		this.thiefMarker.position.x = this.getRadarX(value);
	};

	HUDRadar.prototype.inRange = function()
	{
//		if (this.distance < this.minDistance) return true;
		return false;
	};

	HUDRadar.prototype.getRadarX = function(value)
	{
		this.distance = value - this.pussX;
		var x0 = this.distance / this.maxRange;
		return this.minRange + (x0 * this.radarRange);
	};

	HUDRadar.prototype.playInRange = function()
	{
		TweenMax.to (this.asset, 0.5, { alpha: 0 });
	};

	HUDRadar.prototype.playOutOfRange = function()
	{
		TweenMax.killTweensOf(this.asset);
		TweenMax.to (this.thiefMarker, 0.25, { alpha: 0, onUpdate: this.updateScale, onUpdateScope: this })
	};

	HUDRadar.prototype.updateScale = function()
	{
		this.thiefMarker.scale.x = this.thiefMarker.scale.y += 0.45;
		this.thiefMarker.rotation += 0.36;
	};

	HUDRadar.prototype.updatePuss = function(value)
	{
		this.pussX = value;
	};

	HUDRadar.prototype.updateThief = function(value)
	{
		if (value > this.maxRange)
		{
//			console.log('thief out of range! GAME OVER');
		}

		this.thiefMarker.position.x = this.getRadarX(value);
	};

	HUDRadar.prototype.update = function(deltaTime)
	{
		if (!this.active) return;

		if (this.inRange())
		{
			this.active = false;
			this.playInRange();
			Notifier.getInstance().trigger(tcat.GameNotifications.THIEF_IN_RANGE);
		}
	};

	return HUDRadar;
});