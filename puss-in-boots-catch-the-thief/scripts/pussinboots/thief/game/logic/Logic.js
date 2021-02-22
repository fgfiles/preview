/**
 * Created by rufian on 11/17/14.
 */
define(['orion/GameObject',
		'game/logic/Sequence'],
function(GameObject,
		 Sequence)
{
	// Constructor ---------------------------------------------------------------------------------------------------------
	//
	var Logic = function(name)
	{
		GameObject.call(this, name);

		// Complete set up
		this.setUp();
	};

	Logic.prototype = Object.create(GameObject.prototype);
	Logic.prototype.constructor = Logic;

	// Constants -----------------------------------------------------------------------------------------------------------
	//
	Logic.NAME = 'Logic';

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	Logic.prototype.addTime = 0;
	Logic.prototype.character = null;
	Logic.prototype.container = null;
	Logic.prototype.currentSequence = null;
	Logic.prototype.currentTime = 0;
	Logic.prototype.introWait = false;
	Logic.prototype.markerCactus = null;
	Logic.prototype.markerMineShaft = null;
	Logic.prototype.obstacleCache = null;
	Logic.prototype.thief = null;

	// Methods -------------------------------------------------------------------------------------------------------------
	//
	Logic.prototype.clear = function()
	{
		if (this.currentSequence != null) this.currentSequence.destroy();
		this.obstacleCache.clear();
		this.thief.clear();
	};

	Logic.prototype.newSequence = function()
	{
		if (this.currentSequence != null) this.currentSequence.destroy();
		this.currentSequence = null;
		this.markerCactus.reset();
		this.markerMineShaft.reset();
		this.start(50);
	};

	Logic.prototype.recycle = function()
	{
		this.newSequence();
	};

	Logic.prototype.setUp = function()
	{

	};

	Logic.prototype.start = function(timeOffset)
	{
		this.addTime = timeOffset + (Math.random() * timeOffset);
		this.currentTime = 0;
		this.introWait = true;
	};

	Logic.prototype.update = function(deltaTime)
	{
		if (this.introWait)
		{
			this.currentTime += deltaTime;
			if (this.currentTime > this.addTime)
			{
				this.introWait = false;
				this.currentTime = 0;
				this.currentSequence = new Sequence(this);
				this.currentSequence.start(this.character, this.thief, this.container, this.obstacleCache);
			}
		}

		if (this.currentSequence != null)
		{
			this.currentSequence.update(this.character);

			// Updating cactus marker
			if (this.currentSequence.hasCacti)
			{
				this.markerCactus.setPosition(this.character, this.currentSequence.getNextCactus());
			}

			// Updating mine shaft marker
			if (this.currentSequence.hasMineShaft)
			{
				this.markerMineShaft.setPosition(this.character, this.currentSequence.mineShaft);
			}
		}

		this.container.children.sort(this.sortDepths);
	};

	Logic.prototype.sortDepths = function(a, b)
	{
		if (a.z < b.z) return -1;
		if (a.z > b.z) return 1;
		return 0;
	};

	return Logic;
});