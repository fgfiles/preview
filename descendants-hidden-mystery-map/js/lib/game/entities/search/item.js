ig.module(
	'lib.game.entities.search.item'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Search = ig.Entity.Search || {};

	ig.Entity.Search.Item = ig.Entity.extend(
	{
		rect : null,
		conItem : null,
		imgSize : [],
		opacity : 1,
		index : 0,

		init : function()
		{
			this.parent.apply(this, arguments);

			var ss = ig.loader.getSpriteSheet('map-search-item-level-' + ig.game.temp.mapSelectedLevel);

			if ( this.type == 'big' )
			{
				if ( this.name == 'stamp1' || 
					this.name == 'stamp2' || 
					this.name == 'stamp3' || 
					this.name == 'stamp4' || 
					this.name == 'crest' || 
					this.name == 'sketchbook' )
				{
					this.disObj = new createjs.Bitmap(ig.loader.getResult('map-search-' + this.name));
				}
				else
				{
					this.disObj = new createjs.Sprite(ss, this.name + '-big');
				}

				this.size.x = this.disObj.getBounds().width;
				this.size.y = this.disObj.getBounds().height;
			}
		}
	})
});