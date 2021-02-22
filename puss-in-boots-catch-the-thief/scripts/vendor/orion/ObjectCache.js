/**
 * Created by rufian on 12/12/14.
 */
define([],
function()
{
	var ObjectCache = function(name, type, num)
	{
		this.name = name;
		this.setUp(type, num);
	};

	ObjectCache.prototype.cache = null;
	ObjectCache.prototype.cacheInUse = null;
	ObjectCache.prototype.name = null;

	// Cache ---------------------------------------------------------------------------------------------------------------
	//
	ObjectCache.prototype.setUp = function(type, num)
	{
		this.cache = [];
		this.cacheInUse = [];

		var t;
		for (var i = 0; i < num; i++)
		{
			t = new type();
			this.cache.push(t);
		}
	};

	ObjectCache.prototype.getNext = function()
	{
		if (this.cache.length > 0)
		{
			var obj = this.cache.shift();
			obj.ready();
			this.cacheInUse.push(obj);
			return obj;
		}

		return null;
	};

	ObjectCache.prototype.getRandomObstacle = function()
	{
		if (this.cache.length == 0) return null;

		var r = Math.floor(Math.random() * this.cache.length);
		var obj = this.cache[r];
		obj.ready();
		this.cache.splice(r, 1);
		this.cacheInUse.push(obj);
		return obj;
	};

	ObjectCache.prototype.returnObject = function(value, andRecycle)
	{
		var recycleOnReturn = (andRecycle != undefined) ? andRecycle : false;
		var i = this.cacheInUse.length;
		while (--i > -1)
		{
			if (this.cacheInUse[i] == value)
			{
				if (recycleOnReturn) value.recycle();
				this.cache.push(value);
				this.cacheInUse.splice(i, 1);
				return;
			}
		}
	};

	ObjectCache.prototype.returnAll = function(andRecycle)
	{
	};

	return ObjectCache;
});