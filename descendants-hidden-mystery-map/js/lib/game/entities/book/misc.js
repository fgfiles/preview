ig.module(
	'lib.game.entities.book.misc'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Book = ig.Entity.Book || {};

	ig.Entity.Book.Misc = ig.Entity.extend(
	{
		init : function()
		{
			this.parent.apply(this, arguments);

			if ( this.name === 'bg' ) {
				this.disObj = new createjs.Bitmap(ig.loader.getResult('book-game-bg'))
				// this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-loader'), 'apple');
				this.size.x = 1426;
				this.size.y = 768;
			} else if( this.name === 'apple' ){

				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-loader'), 'apple');
				var bound = this.disObj.getBounds();
				this.size.x = bound.width;
				this.size.y = bound.height;

			} else if ( this.name === 'book-bg') {

				this.disObj = new createjs.Container();

				this.disObj.addChild(new createjs.Sprite(ig.loader.getSpriteSheet('book-bg'), 'book'));
				var bound = this.disObj.getBounds();
				this.size.x = bound.width;
				this.size.y = bound.height;

			} else if ( this.name === 'tab' ){
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-bg'), this.tabType);
				var bound = this.disObj.getBounds();
				this.size.x = bound.width;
				this.size.y = bound.height;
			}

		},

		update : function(e)
		{
			var dt = e.delta * 0.001;

			if ( this.name == 'bg' )
			{
				// this.scale.x -= dt;
			}

			this.parent(e);
		}
	})
})