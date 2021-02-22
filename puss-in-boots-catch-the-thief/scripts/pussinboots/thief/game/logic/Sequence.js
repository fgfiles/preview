/**
 * Created by rufian on 12/15/14.
 */
define([],
function()
{
	var Sequence = function(logic)
	{
		this.setUp(logic);
	};

	Sequence.prototype.cacti = null;
	Sequence.prototype.hasCacti = null;
	Sequence.prototype.hasMineShaft = null;
	Sequence.prototype.items = null;
	Sequence.prototype.logic = null;
	Sequence.prototype.mineShaft = null;
	Sequence.prototype.nextCactus = null;
	Sequence.prototype.nextMineShaft = null;
	Sequence.prototype.thiefDistance = null;
	Sequence.prototype.thief = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	Sequence.prototype.destroy = function()
	{
		this.cacti = null;
		this.hasCacti = null;
		this.hasMineShaft = null;
		this.items = null;
		this.logic = null;
		this.mineShaft = null;
		this.nextCactus = null;
		this.nextMineShaft = null;
		this.thiefDistance = null;
		this.thief = null;
	};

	Sequence.prototype.setUp = function(logic)
	{
		this.logic = logic;

		var rndObstacles = 2 + (Math.ceil(Math.random() * 6));
		this.items = [];

		for (i = 0; i < rndObstacles; i++)
		{
			this.items.push({ type: 'Obstacle' });
		}

		var t = this.shuffle(this.items);
		this.items = t;

		this.cacti = [];
		this.hasCacti = false;
		this.hasMineShaft = false;
		this.mineShaft = null;
		this.nextCactus = null;
		this.nextMineShaft = null;
	};

	Sequence.prototype.shuffle = function(o)
	{
		for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	Sequence.prototype.start = function(character, thief, container, obstacles)
	{
		var minX = 1200;

		// Laying out obstacles and thieves
		var l = this.items.length;
		var x = character.box2DObject.body2D.GetPosition().x;

		obstacles.sequence = this;

		this.thief = thief;

		for (var i = 0; i < l; i++)
		{
			if (this.items[i].type == 'Obstacle')
			{
				this.items[i].asset = obstacles.getRandomObstacle();

				x += ((minX + (Math.random() * minX)) / 30) + Math.random() * 40;

				if (this.items[i].asset.isCactus)
				{
					this.hasCacti = true;
					this.cacti.push(this.items[i].asset);
					x += 80;
				}

				this.items[i].asset.setScenePosition(x);
				container.addChild(this.items[i].asset.asset);

				if (this.items[i].asset.foreground != undefined || this.items[i].asset.foreground != null)
				{
					container.addChild(this.items[i].asset.foreground);
				}

				// Add cactus to array of cacti
				if (this.items[i].asset.isCactus)
				{
				}

				// Set mine shaft reference
				if (this.items[i].asset.isMineShaft)
				{
					this.hasMineShaft = true;
					this.mineShaft = this.items[i].asset;
				}
			}
		}

		this.thiefDistance = x;
		this.thief.setCoinTarget(0.5, 30);
		this.thief.setOnScreen(this.thiefDistance);
		this.thief.setObstacles(obstacles.cacheInUse);
	};

	Sequence.prototype.update = function(character)
	{
		if (this.hasCacti) this.nextCactus = this.getNextCactus(character);
		if (this.hasMineShaft) this.nextMineShaft = this.mineShaft;
	};

	Sequence.prototype.getNextCactus = function(character)
	{
		if (this.cacti.length == 0) return null;
		return this.cacti[0];
	};

	Sequence.prototype.removeCactus = function()
	{
		this.logic.markerCactus.reset();
		this.cacti.splice(0, 1);
	};

	return Sequence;
});