/**
 * Created by rufian on 11/18/14.
 */
define([],
function()
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var PlayerModel = function()
	{
		this.init();
	};

	// Constants -----------------------------------------------------------------------------------------------------------
	//
	PlayerModel.NAME = 'PlayerModel';

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	PlayerModel.prototype.hudMessage = null;
	PlayerModel.prototype.hudScore = null;
	PlayerModel.prototype.round = 0;
	PlayerModel.prototype.score = 0;

	// Methods -------------------------------------------------------------------------------------------------------------
	//
	PlayerModel.prototype.init = function()
	{
		this.round = 0;
		this.score = 0;
	};

	PlayerModel.prototype.airborneAttackBonus = function()
	{
		this.score += 2500;
		this.updateHUD();
	};

	PlayerModel.prototype.floatingCoinScore = function()
	{
		this.score += 50;
		this.updateHUD();
	};

	PlayerModel.prototype.standardAttackScore = function()
	{
		this.score += 1000;
		this.updateHUD();
	};

	PlayerModel.prototype.updateHUD = function()
	{
		this.hudScore.updateLabel(this.score);
	};

	return PlayerModel;
});