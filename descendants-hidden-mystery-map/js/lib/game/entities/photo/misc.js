ig.module(
	'lib.game.entities.photo.misc'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Photo = ig.Entity.Photo || {};

	ig.Entity.Photo.Misc = ig.Entity.extend(
	{
		stateIds : [],

		init : function()
		{
			this.parent.apply(this, arguments);

			if ( this.name == 'slider' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-image-overlay'), 'slider');
				this.size.x = 156;
				this.size.y = 323;
			}
			else if ( this.name == 'overlay-shield' )
			{
				this.disObj = new createjs.Bitmap(ig.loader.getResult('book-image-overlay-shield'));
				this.size.x = this.disObj.image.width;
				this.size.y = this.disObj.image.height;
			}
			else if ( this.name == 'overlay-circle' )
			{
				this.disObj = new createjs.Bitmap(ig.loader.getResult('book-image-overlay-circle'));
				this.size.x = this.disObj.image.width;
				this.size.y = this.disObj.image.height;
			}
		},

		update : function(e)
		{
			this.parent(e);
		},

		switchState : function(newStateId, currentStateId)
		{
			if ( this.name == 'slider' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(600).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'overlay-shield' || this.name == 'overlay-circle' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(600).to({ alpha : 0.5 }, 600);
				}

				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);
			}
		}
	})
});