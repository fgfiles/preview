ig.module(
	'lib.game.entities.search.field'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Search = ig.Entity.Search || {};

	ig.Entity.Search.Field = ig.Entity.extend(
	{
		touchStart : { x : 0, y : 0 },
		scrollSpeed : { x : 0, y : 0 },
		scrollPos : { x : 0, y : 0 },

		touchCount : 0,

		init : function()
		{
			this.parent.apply(this, arguments);

			this.size.x = 1426 * ig.system.scale;
			this.size.y = 768 * ig.system.scale;

			this.disObj = new createjs.Container;
			this.disObj.addChild( new createjs.Bitmap(this.img) );

			this.touchStartHandler = this.onTouchStart.bind(this);
			this.touchMoveHandler = this.onTouchMove.bind(this);
			this.touchEndHandler = this.onTouchEnd.bind(this);
			var can = ig.game.stages[0].canvas;
			can.addEventListener('touchstart', this.touchStartHandler, false);
			can.addEventListener('touchmove', this.touchMoveHandler, false);
			can.addEventListener('touchend', this.touchEndHandler, false);

			this.disObj.on('pressup', function(e) 
			{
				if ( ig.scene.currentStateId == ig.scene.stateId.game && 
					e.target instanceof createjs.Sprite && 
					!ig.scene.isShowingFoundItem )
					ig.scene.foundItem(e.target);

			});
		},

		update : function(e)
		{
			if ( ig.scene.currentStateId == ig.scene.stateId.game )
			{
				var mx = ig.input.mouse.x,
					my = ig.input.mouse.y,
					sx = this.size.x * 0.5,
					sy = this.size.y * 0.5,
					sxs = sx * this.scale.x,
					sys = sy * this.scale.y;

				if ( ig.input.pressed(ig.KEY.MOUSE1) && ((ig.device.mobile && this.touchCount === 1) || !ig.device.mobile) )
				{
					var w = ig.system.fixedWidth,
						h = ig.system.fixedHeight,
						w2 = w * 0.5,
						h2 = h * 0.5;

					if ( mx > 100 && mx < w - 100 &&
						 my > 120 && my < h - 120 )
					{
						this.touchStart.x = mx;
						this.touchStart.y = my;
					}
				}

				if ( ig.input.released(ig.KEY.MOUSE1) )
				{
					this.touchStart.x = this.touchStart.y = 0;
					this.scrollSpeed.x = this.scrollSpeed.y = 0;
				}

				if ( this.touchStart.x > 0 )
				{
					this.scrollSpeed.x = mx - this.touchStart.x;
					this.touchStart.x = mx;
					this.scrollSpeed.y = my - this.touchStart.y;
					this.touchStart.y = my;
				}

				if ( ig.input.released(ig.KEY.MWHEEL_UP) )
				{
					this.doScale(0.2);
					this.scrollPos.x = (mx - (ig.system.width * 0.5)) * this.scale.x;
					this.scrollPos.y = (my - (ig.system.height * 0.5)) * this.scale.y;
				}

				else if ( ig.input.released(ig.KEY.MWHEEL_DOWN) )
				{
					this.doScale(-0.2);
					this.scrollPos.x = (mx - (ig.system.width * 0.5)) * this.scale.x;
					this.scrollPos.y = (my - (ig.system.height * 0.5)) * this.scale.y;
				}

				this.scrollPos.x = (this.scrollPos.x - this.scrollSpeed.x).limit(-sxs + sx, sxs - sx);
				this.scrollPos.y = (this.scrollPos.y - this.scrollSpeed.y).limit(-sys + sy, sys - sy);

				this.pos.x = this.pos.x.lerp(-this.scrollPos.x, 0.12);
				this.pos.y = this.pos.y.lerp(-this.scrollPos.y, 0.12);
			}

			this.parent(e);
		},

		kill : function()
		{
			var can = ig.game.stages[0].canvas;
			can.removeEventListener('touchstart', this.touchStartHandler, false);
			can.removeEventListener('touchmove', this.touchMoveHandler, false);
			can.removeEventListener('touchend', this.touchEndHandler, false);

			this.parent();
		},

		doScale : function(n)
		{
			this.scale.x += n;
			this.scale.y += n;
			this.scale.x = this.scale.x.limit(1, 2);
			this.scale.y = this.scale.y.limit(1, 2);
		},

		onTouchStart : function(e)
		{
			this.touchCount = e.touches.length;

			if ( e.touches.length == 2 )
				this.initScale = Math.sqrt(Math.pow(e.touches[0].pageX - e.touches[1].pageX, 2) + Math.pow(e.touches[0].pageY - e.touches[1].pageY, 2)) / this.scale.x;
		},

		onTouchMove : function(e)
		{
			if ( e.touches.length == 2 )
			{
				var newScale = Math.sqrt(Math.pow(e.touches[0].pageX - e.touches[1].pageX, 2) + Math.pow(e.touches[0].pageY - e.touches[1].pageY, 2)) / this.initScale;

				newScale *= 0.8;

				this.scale.x = this.scale.x.lerp(Math.min(newScale, 2), 0.2);
				this.scale.y = this.scale.y.lerp(Math.min(newScale, 2), 0.2);
				this.scale.x = this.scale.x.limit(1, 2);
				this.scale.y = this.scale.y.limit(1, 2);

				var midX = e.touches[0].pageX + ((e.touches[1].pageX - e.touches[0].pageX) * 0.5);
				var midY = e.touches[0].pageY + ((e.touches[1].pageY - e.touches[0].pageY) * 0.5);

				var x = (midX - (ig.system.width * 0.5)) * this.scale.x;
				var y = (midY - (ig.system.height * 0.5)) * this.scale.y;

				this.scrollPos.x = x;
				this.scrollPos.y = y;

				// ig.debug && ig.debug.log('x|y', x.toFixed(1) + ',' + y.toFixed(1));
			}
		},

		onTouchEnd : function(e)
		{
		}
	})
});