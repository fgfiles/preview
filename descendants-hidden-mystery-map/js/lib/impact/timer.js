ig.module(
	'lib.impact.timer'
)
.defines(function()
{
	'use strict';
	
	ig.Timer = ig.Class.extend(
	{
		target : 0,
		base : 0,
		last : 0,
		pausedAt : 0,
		ignoreTimeScale : false,
		
		init : function(seconds, ignoreTimeScale) 
		{
			this.base = ig.Timer.time;
			this.last = ig.Timer.time;
			this.ignoreTimeScale = !!ignoreTimeScale;
			
			this.target = seconds || 0
		},
		
		set : function(seconds) 
		{
			this.target = seconds || 0;
			return this.reset()
		},
		
		reset : function() 
		{
			this.base = this.ignoreTimeScale ? ig.Timer.timeIgnoreScale : ig.Timer.time;
			this.pausedAt = 0;
			return this
		},
		
		tick : function() 
		{
			var time = this.ignoreTimeScale ? ig.Timer.timeIgnoreScale : ig.Timer.time,
				delta = time - this.last;

			this.last = time;

			return this.pausedAt ? 0 : delta
		},
		
		delta : function() 
		{
			if ( this.ignoreTimeScale )
				return (this.pausedAt || ig.Timer.timeIgnoreScale) - this.base - this.target;
			else
				return (this.pausedAt || ig.Timer.time) - this.base - this.target;
		},

		pause : function() 
		{
			if ( !this.pausedAt )
				this.pausedAt = this.ignoreTimeScale ? ig.Timer.timeIgnoreScale : ig.Timer.time;

			return this
		},

		resume : function() 
		{
			if ( this.pausedAt ) 
			{
				this.base += (this.ignoreTimeScale ? ig.Timer.timeIgnoreScale : ig.Timer.time) - this.pausedAt;
				this.pausedAt = 0;
			}

			return this
		}
	});

	ig.Timer._last = 0;
	ig.Timer.time = Number.MIN_VALUE;
	ig.Timer.timeIgnoreScale = Number.MIN_VALUE;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;

	ig.Timer.step = function() 
	{
		var current = Date.now(),
			delta = (current - ig.Timer._last) * 0.001,
			time = Math.min(delta, ig.Timer.maxStep);

		ig.Timer.time += time * ig.Timer.timeScale;
		ig.Timer.timeIgnoreScale += time;
		ig.Timer._last = current;
	}
});