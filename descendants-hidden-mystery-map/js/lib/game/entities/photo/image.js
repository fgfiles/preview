ig.module(
	'lib.game.entities.photo.image'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Photo = ig.Entity.Photo || {};

	ig.Entity.Photo.Image = ig.Entity.extend(
	{
		touchStart : { x : 0, y : 0 },
		scrollSpeed : { x : 0, y : 0 },
		scrollPos : { x : 0, y : 0 },

		init : function()
		{
			this.parent.apply(this, arguments);

			this.disObj = new createjs.Bitmap(this.img);
			this.size.x = this.disObj.image.width;
			this.size.y = this.disObj.image.height;

			this.scale.x = this.scale.y = Math.lerp(0.5, 2, 0.5);
		},

		update : function(e)
		{
			if ( ig.scene.currentStateId == ig.scene.stateId.game )
			{
				var mx = ig.input.mouse.x,
					my = ig.input.mouse.y,
					sx = (this.size.x * 0.25) * this.scale.x,
					sy = (this.size.y * 0.25) * this.scale.y;

				if ( ig.input.pressed(ig.KEY.MOUSE1) )
				{
					var w = ig.system.fixedWidth,
						h = ig.system.fixedHeight,
						w2 = w * 0.5,
						h2 = h * 0.5;

					if ( mx > w2 - w * 0.25 && mx < w2 + w * 0.25 &&
						 my > h2 - h * 0.35 && my < h2 + h * 0.35 )
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

				this.scrollPos.x = (this.scrollPos.x - this.scrollSpeed.x).limit(-sx, sx);
				this.scrollPos.y = (this.scrollPos.y - this.scrollSpeed.y).limit(-sy, sy);

				this.pos.x = this.pos.x.lerp(-this.scrollPos.x, 0.08);
				this.pos.y = this.pos.y.lerp(-this.scrollPos.y, 0.08);
			}

			this.parent(e);
		},

		switchState : function(newStateId, currentStateId)
		{
			if ( newStateId == ig.scene.stateId.game )
			{
				this.pos.x -= this.size.x * 0.5;
				this.pos.y += this.size.y * 1.5;
				this.disObj.rotation = 30;

				createjs.Tween.get(this.pos).to({ x : 0, y : 0 }, 600);
				createjs.Tween.get(this.disObj).to({ rotation : 0 }, 600);
			}
			else if ( newStateId == ig.scene.stateId.end )
				createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);
		}
	})
});