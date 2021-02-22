/**
 * Created by rufian on 11/24/14.
 */
define(['PIXI',
		'orion/GameObject',
		'numeral',
		'tweenmax',
		'game/GameConfig',
		'orion/Application',
		'game/logic/Audio',
		'underscore'],
function(PIXI,
		 GameObject,
		 numeral,
		 TweenMax,
		 GameConfig,
		 Application,
		 Audio,
		 _)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var HUDMessage = function()
	{
		GameObject.call(this, HUDMessage.NAME);

		// Complete set-up
		this.setUp();
	};

	HUDMessage.prototype = Object.create(GameObject.prototype);
	HUDMessage.prototype.constructor = HUDMessage;

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	HUDMessage.NAME = 'HudMessage';
	HUDMessage.prototype.audio = null;
	HUDMessage.prototype.label = null;
	HUDMessage.prototype.physicsContainer = null;
	HUDMessage.prototype.roundText = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	HUDMessage.prototype.setUp = function()
	{
		this.asset = new PIXI.DisplayObjectContainer();
		this.label = new PIXI.Text('', { font: '42px Superclarendon', fill: '#f46d09', stroke: "#ffffff", strokeThickness: 10 });
		this.asset.addChild(this.label);
		this.asset.visible = false;

//		this.roundText = $("#localization .round").html();
		this.roundText = 'Round';
		this.refreshPivots();
		this.asset.z = this.z = 10001;

		_.bindAll(this, 'playWhoosh');
	};

	// Updates -------------------------------------------------------------------------------------------------------------
	//
	HUDMessage.prototype.refreshPivots = function()
	{
		this.asset.pivot.x = this.asset.width * 0.5;
		this.asset.pivot.y = this.asset.height * 0.5;
		this.asset.position.x = 1136 * 0.5;
		this.asset.position.y = 640 * 0.5;
	};

	HUDMessage.prototype.updateLabel = function(value)
	{
		this.label.setText(value);

		// Shake camera a little
		if (this.physicsContainer != null) this.physicsContainer.shake(30, 2, 0.03, true, true);

		TweenMax.killTweensOf(this.asset);
		TweenMax.killTweensOf(this.asset.scale);
		TweenMax.to (this.asset, 0.5, { delay:1, alpha: 0, rotation: 5 * Math.random(), onComplete: this.hide, onCompleteScope: this });
		TweenMax.to (this.asset.scale, 0.5, { delay:1, ease: Back.easeInOut, x: 5, y: 5 });

		TweenMax.killDelayedCallsTo(this.playWhoosh);
		TweenMax.delayedCall(1, this.playWhoosh);

		this.asset.rotation = 0;
		this.asset.visible = true;
		this.asset.alpha = 1;
		this.asset.scale.x = 1;
		this.asset.scale.y = 1;

		if (this.audio == null)
		{
			this.audio = Application.getInstance().getView(Audio.NAME);
		}
		this.audio.playSnare();

		this.refreshPivots();
	};

	HUDMessage.prototype.hide = function()
	{
		this.asset.visible = false;
	};

	HUDMessage.prototype.playWhoosh = function()
	{
		this.audio.playRandomJump();
	};

	return HUDMessage;
});