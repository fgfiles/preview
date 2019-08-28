ig.module(
	'lib.game.entities.map.loader'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Map = ig.Entity.Map || {};

	ig.Entity.Map.Loader = ig.Entity.extend(
	{
		status : 0,

		init : function()
		{
			this.parent.apply(this, arguments);

			var scale = ig.system.scale;

			this.disObj = new createjs.Container;

			var b = new createjs.Bitmap(ig.loader.getResult('paper-bg'));
			b.alpha = this.alpha;
			b.x -= 1426 * 0.5 * scale;
			b.y -= 768 * 0.5 * scale;
			this.disObj.addChild( b );

			var c = new createjs.Sprite(ig.loader.getSpriteSheet('map-loader'), 'compass');
			c.alpha = this.alpha;
			c.regX = 237 * 0.5 * scale;
			c.regY = 234 * 0.5 * scale;
			c.y -= 24 * scale;
			this.disObj.addChild( c );

			// the bars
			var bar1 = new createjs.Sprite(ig.loader.getSpriteSheet('map-loader'), 'bar-back');
			bar1.alpha = this.alpha;
			bar1.regX = 700 * 0.5 * scale;
			bar1.regY = 14 * 0.5 * scale;
			bar1.y = 200 * scale;
			this.disObj.addChild( bar1 );

			var bar2 = new createjs.Sprite(ig.loader.getSpriteSheet('map-loader'), 'bar-top');
			bar2.alpha = this.alpha;
			bar2.regX = 700 * 0.5 * scale;
			bar2.regY = 14 * 0.5 * scale;
			bar2.y = 200 * scale;
			this.disObj.addChild( bar2 );

			// text
			var tRight = new createjs.Text('', (18 * scale) + 'px superclarendon', '#493e30');
			tRight.alpha = this.alpha;
			tRight.textAlign = 'right';
			tRight.x = 700 * 0.5 * scale;
			tRight.y = 180 * scale;
			ig.merge(tRight, ig.strings.MAP.LOADER.RIGHT);
			this.disObj.addChild( tRight );

			var tMiddle = new createjs.Text('', (18 * scale) + 'px superclarendon', '#493e30');
			tMiddle.alpha = this.alpha;
			tMiddle.textAlign = 'center';
			tMiddle.y = 180 * scale;
			ig.merge(tMiddle, ig.strings.MAP.LOADER.MIDDLE);
			this.disObj.addChild( tMiddle );

			var tLeft = new createjs.Text('', (18 * scale) + 'px superclarendon', '#493e30');
			tLeft.alpha = this.alpha;
			tLeft.textAlign = 'left';
			tLeft.x = -700 * 0.5 * scale;
			tLeft.y = 180 * scale;
			ig.merge(tLeft, ig.strings.MAP.LOADER.LEFT);
			this.disObj.addChild( tLeft );

			var tBottom = new createjs.Text('', (12 * scale) + 'px superclarendon', '#493e30');
			tBottom.alpha = this.alpha;
			tBottom.textAlign = 'center';
			tBottom.y = 225 * scale;
			ig.merge(tBottom, ig.strings.MAP.LOADER.BOTTOM);
			this.disObj.addChild( tBottom );

			// fade it in
			if ( this.alpha < 1 )
			{
				// the mask
				this.shapeObj = new createjs.Shape;
				this.shapeObj.x -= 700 * 0.5 * scale;
				this.shapeObj.y = 200 - 28 * scale;
				this.disObj.getChildAt(3).mask = this.shapeObj;

				createjs.Tween.get(b).to({ alpha : 1 }, 600);

				createjs.Tween.get(c).wait(600).to({ alpha : 1 }, 600);
				createjs.Tween.get(bar1).wait(600).to({ alpha : 1 }, 600);
				createjs.Tween.get(bar2).wait(600).to({ alpha : 1 }, 600);
				createjs.Tween.get(tRight).wait(600).to({ alpha : 1 }, 600);
				createjs.Tween.get(tMiddle).wait(600).to({ alpha : 1 }, 600);
				createjs.Tween.get(tLeft).wait(600).to({ alpha : 1 }, 600);
				createjs.Tween.get(tBottom).wait(600).to({ alpha : 1 }, 600);
			}
			// fade it out
			else
			{
				createjs.Tween.get(c).to({ alpha : 0 }, 600);
				createjs.Tween.get(bar1).to({ alpha : 0 }, 600);
				createjs.Tween.get(bar2).to({ alpha : 0 }, 600);
				createjs.Tween.get(tRight).to({ alpha : 0 }, 600);
				createjs.Tween.get(tMiddle).to({ alpha : 0 }, 600);
				createjs.Tween.get(tLeft).to({ alpha : 0 }, 600);
				createjs.Tween.get(tBottom).to({ alpha : 0 }, 600);

				createjs.Tween.get(b).wait(600).to({ alpha : 0 }, 600).call(this.kill, null, this);
			}
		},

		update : function(e)
		{
			this.status = Math.lerp(this.status, ig.loader.status, 0.06);

			if ( this.isReady() )
				this.status = 1;

			if ( this.shapeObj )
				this.shapeObj.graphics.f('#000').moveTo(0, 0).drawRect(0, 0, this.status * 700, 56 * ig.system.scale);

			this.parent(e);
		},

		isReady : function()
		{
			return ig.loader.status >= 1 && this.status >= 0.99;
		}
	})
})