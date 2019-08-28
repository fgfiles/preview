ig.module(
	'lib.game.entities.map.fadeaway'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Map = ig.Entity.Map || {};

	ig.Entity.Map.Fadeaway = ig.Entity.extend(
	{
		canDraw : false,

		count : 25,
		radiusMin : 10,
		radiusMax : 20,
		markerSize : 20,
		drawAlpha : 1,

		init : function()
		{
			this.parent.apply(this, arguments);

			var img = ig.loader.getResult('paper-bg');

			this.can = ig.$new('canvas');
			this.can.width = 1426 * ig.system.scale;
			this.can.height = 768 * ig.system.scale;

			this.ctx = this.can.getContext('2d');
			this.ctx.drawImage(img, 0, 0);

			var delay = ig.game.preloaderContainer ? 800 : 600;

			// increment these calues
			createjs.Tween.get(this)
				.wait(delay)
				.call(function() { this.canDraw = true }, null, this)
				.to(
				{ 
					count : 100, 
					radiusMin : this.can.width * 0.5, 
					radiusMax : this.can.width * 1.5,
					markerSize : 200
				}, 1200);

			// this is needed
			createjs.Tween.get(this).wait(1200).to({ drawAlpha : 0 }, delay).call(this.kill, null, this);

			createjs.Tween.get({}).wait(delay * 0.5).call(ig.sound.playSound, ['sfxWhoosh'], ig.sound);
		},

		update : function(e)
		{
			if ( this.canDraw )
			{
				this.ctx.save();
				this.ctx.translate(this.can.width * 0.5, this.can.height * 0.5);
				this.ctx.globalCompositeOperation = 'destination-out';

				// this.ctx.drawImage(ig.loader.getResult('map-brush'), 0, 50);

				this.ctx.globalAlpha = 0.1;

				for ( var i = 0, pi2 = 2 * Math.PI, r, a; i < this.count; i++ )
				{
					r = Math.rand(this.radiusMin, this.radiusMax);
					a = Math.rand(0, 360);

					this.ctx.beginPath();
					this.ctx.arc(r * Math.cos(a), r * Math.sin(a) * (this.can.height / this.can.width), this.markerSize, 0, pi2, false);
					this.ctx.fill();
				}

				this.ctx.restore();
			}

			this.parent(e);
		},

		draw : function()
		{
			// draw the off screen canvas to the game's canvas
			if ( this.canDraw )
			{
				var ctx = ig.game.stages[0].canvas.getContext('2d');
				ctx.save();
				ctx.globalAlpha = this.drawAlpha;
				ctx.drawImage(this.can, ig.system.fixedWidth * 0.5 - this.can.width * 0.5, ig.system.fixedHeight * 0.5 - this.can.height * 0.5);
				ctx.restore();
			}
		},

		kill : function()
		{
			this.ctx = null;
			this.can = null;

			// switch the scenes state
			ig.scene.switchState(this.toStateId || ig.scene.stateId.game);

			this.parent();
		}
	})
});