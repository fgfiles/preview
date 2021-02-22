/**
 * Created by rufian on 11/24/14.
 */
define(["PIXI",'orion/GameObject',
		'numeral',
		'tweenmax'],
function(PIXI,GameObject,
		 numeral,
		 TweenMax)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var HUDScore = function()
	{
		GameObject.call(this, HUDScore.NAME);

		// Complete set-up
		this.setUp();
	};

	HUDScore.prototype = Object.create(GameObject.prototype);
	HUDScore.prototype.constructor = HUDScore;

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	HUDScore.NAME = 'HudScore';
	HUDScore.prototype.score = null;
	HUDScore.prototype.scoreLabel = null;
	HUDScore.prototype.current = null;
	HUDScore.prototype.formatted = null;

	// Set-up ----------------------------------------------------------------------------------------------------------
	//
	HUDScore.prototype.reset = function()
	{
		this.current = 0;
		this.formatted = numeral(this.current).format('0,0');
		this.score.setText(this.formatted);
	};

	HUDScore.prototype.setUp = function()
	{
		this.asset = new PIXI.DisplayObjectContainer();
/*		var background = new PIXI.Sprite.fromFrame('Score.png');
		background.anchor = new PIXI.Point(0.5, 0);
		this.asset.addChild(background);
*/
/*		this.scoreLabel = new PIXI.Text($("#localization .score").html(), { font: "29px KookyBT-Regular", fill: "#f46d09" });
		this.scoreLabel.position.set(0, 35);
		this.scoreLabel.anchor = new PIXI.Point(0.5, 0);
		this.asset.addChild(this.scoreLabel);
*/
		this.score = new PIXI.Text("0", { font: "39px Superclarendon", fill: "#f46d09", stroke: "#ffffff", strokeThickness: 6 });
		this.score.position.set(0, 0);
		this.score.anchor = new PIXI.Point(0, 0);
		this.asset.addChild(this.score);

		this.asset.position.x = 38;
		this.asset.y = 30;
		this.asset.z = this.z = 10000;

		this.current = 0;
		this.updateLabel(0);
	};

	HUDScore.prototype.updateLabel = function(value)
	{
		TweenMax.killTweensOf(this);
		TweenMax.to (this, 0.3, { current: value, onUpdate: this.onUpdate, onUpdateScope: this });
	};

	HUDScore.prototype.onUpdate = function()
	{
		this.current = this.current.toFixed(0);
		this.formatted = numeral(this.current).format('0,0');
		this.score.setText(this.formatted);
	};

	return HUDScore;
});