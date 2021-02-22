/**
 * Created by rufian on 11/17/14.
 */
define(['PIXI',
		'orion/GameObject'],
function(PIXI,
		 GameObject)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var ColorOverlay = function(name, width, height, color, fadeOutRate, fadeInRate)
	{
		GameObject.call(this, name);

		this.asset = new PIXI.Graphics();

		var c = (color == undefined) ? 0xffffff : color;
		var w = (width == undefined) ? 320 : width;
		var h = (height == undefined)? 320 : height;
		this.fadeOutRate = (fadeOutRate == undefined) ? 1.2 : fadeOutRate;
		this.fadeInRate = (fadeInRate == undefined) ? 0.5 : fadeInRate;

		this.asset.beginFill(c);
		this.asset.drawRect(0, 0, w, h);
		this.asset.endFill();
	};

	ColorOverlay.NAME = 'ColorOverlay';
	ColorOverlay.prototype = Object.create(GameObject.prototype);
	ColorOverlay.prototype.constructor = ColorOverlay;
	ColorOverlay.prototype.fadeInRate = null;
	ColorOverlay.prototype.fadeOutRate = null;

	// Methods -------------------------------------------------------------------------------------------------------------
	//
	ColorOverlay.prototype.play = function()
	{
		this.asset.visible = true;
		this.asset.alpha = 1;

		TweenMax.to(this.asset, this.fadeOutRate, { alpha:0, onComplete:this.onPlayComplete, onCompleteScope:this })
	};

	ColorOverlay.prototype.onPlayComplete = function()
	{
		this.asset.visible = false;
	};

	ColorOverlay.prototype.update = function(deltaTime)
	{
		this.z = this.asset.z = 10400;
	};

	return ColorOverlay;
});