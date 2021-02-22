/**
 * Created by rufian on 12/15/14.
 */
define(['orion/ObjectCache',
		'orion/Notifier',
		'game/display/Obstacle',
		'game/display/MineShaft'],
function(ObjectCache,
		 Notifier,
		 Obstacle,
		 MineShaft)
{
	var ObstacleCache = function(physicsWorld)
	{
		this.physicsWorld = physicsWorld;
		ObjectCache.call(this, ObstacleCache.NAME, Obstacle);
	};

	ObstacleCache.NAME = 'ObstacleCache';
	ObstacleCache.prototype = Object.create(ObjectCache.prototype);
	ObstacleCache.prototype.constructor = ObstacleCache;
	ObstacleCache.prototype.container = null;
	ObstacleCache.prototype.physicsWorld = null;
	ObstacleCache.prototype.sequence = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	ObstacleCache.prototype.setUp = function(type)
	{
		this.cache = [];
		this.cacheInUse = [];

		// -1 because the Mineshaft obstacle is a unique case
		var number = 3 * (tcat.GameConfig.Obstacles.length - 1);

		// Make 3 of each
		var t;
		for (var i = 0; i < number; i++)
		{
			var setUpObject = tcat.GameConfig.Obstacles[i % (number / 3)];
			setUpObject.physicsWorld = this.physicsWorld;
			setUpObject.cache = this;

			t = new type(Obstacle.NAME + i, setUpObject);
			this.cache.push(t);
		}

		// Make 1 mine shaft
		setUpObject = tcat.GameConfig.Obstacles[tcat.GameConfig.Obstacles.length - 1];
		setUpObject.physicsWorld = this.physicsWorld;
		setUpObject.cache = this;

		t = new MineShaft(Obstacle.NAME + 'Mine', setUpObject);
		this.cache.push(t);
	};

	ObstacleCache.prototype.setCamera = function(value)
	{
		var i = this.cache.length;
		while (--i > -1)
		{
			this.cache[i].camera = value;
		}

		i = this.cacheInUse.length;
		while (--i > -1)
		{
			this.cacheInUse[i].camera = value;
		}
	};

	ObstacleCache.prototype.setContainer = function(value)
	{
		this.container = value;
	};

	ObstacleCache.prototype.clear = function()
	{
		var o;
		for (var i = 0; i < this.cacheInUse.length; i++)
		{
			o = this.cacheInUse[i];
			o.recycle();
			o.box2DObject.body2D.SetPosition(new box2d.b2Vec2(-1000 / 30, this.yFloor));
			var b = o.box2DObject.body2D;
			b.SetType(0);

			// Cycling through obstacle fixtures
			var fixture = b.GetFixtureList();
			var filterData = new box2d.b2FilterData();

			filterData.categoryBits = 0x0001;
			filterData.maskBits = 0x0001 | 0x0002;

			while (fixture)
			{
				fixture.SetFilterData(filterData);
				fixture = fixture.GetNext();
			}

			b.SetLinearVelocity(this.freezeVec2, b.GetWorldCenter());
			b.SetAngularVelocity(0);
			this.cache.push(o);
		}

		this.cacheInUse = [];

		for (i = 0; i < this.cache.length; i++)
		{
			o = this.cache[i];
			o.recycle();
			o.box2DObject.body2D.SetPosition(new box2d.b2Vec2(-1000 / 30, this.yFloor));
		}
	};

	// Caching -------------------------------------------------------------------------------------------------------------
	//
	ObstacleCache.prototype.returnObject = function(value, andRecycle)
	{
		var recycleOnReturn = (andRecycle != undefined) ? andRecycle : false;
		var i = this.cacheInUse.length;
		while (--i > -1)
		{
			if (this.cacheInUse[i] == value)
			{
				if (recycleOnReturn) value.recycle();

				if (value.isCactus)
				{
					this.sequence.removeCactus();
				}

				this.cache.push(value);
				this.cacheInUse.splice(i, 1);
				break;
			}
		}

		if (this.cacheInUse.length == 0)
		{
			Notifier.getInstance().trigger(tcat.GameNotifications.OBSTACLES_CLEARED);
		}
	};

	return ObstacleCache;
});