ig.module(
	'lib.game.entities.map.misc'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Map = ig.Entity.Map || {};

	ig.Entity.Map.Misc = ig.Entity.extend(
	{
		init : function()
		{
			this.parent.apply(this, arguments);

			if ( this.name == 'crest' )
			{
				// this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'crest');
				this.disObj = new createjs.Bitmap(ig.loader.getResult('map-crest'));
				this.size.x = 231;
				this.size.y = 262;
			}
			else if ( this.name == '3-stars' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'));
				this.size.x = 116;
				this.size.y = 44;

				var score = parseInt(ig.storage.get('map-level-' + this.n) || 0);
				this.disObj.gotoAndStop('stars-3-' + score);
			}
			else if ( this.name == 'print-note' )
			{
				this.disObj = new createjs.Container;
				this.size.x = 358;
				this.size.y = 401;

				var sBg = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'bg-paper');
				this.disObj.addChild( sBg );

				var sText = new createjs.Text('', 'bold ' + (24 * ig.system.scale) + 'px superclarendon', '#4a3f30');
				sText.x = this.size.x * 0.5 - 10;
				sText.y = 42;
				sText.textAlign = 'center';
				sText.lineWidth = 280;
				sText.lineHeight = 30;
				ig.merge(sText, ig.strings.MAP.PRINT);
				this.disObj.addChild( sText );

				if ( sText.getMeasuredHeight() > 315 )
				{
					sText.scaleX = sText.scaleY = 315 / sText.getMeasuredHeight();
					sText.lineWidth = sText.lineWidth / sText.scaleX;
				}
			}
		},

		switchState : function(newStateId, currentStateId)
		{
			if ( this.name == 'crest' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.pos.y = this.size.y;
					createjs.Tween.get(this.pos).wait(currentStateId === ig.scene.stateId.print ? 400 : 0).to({ y : -60 }, 800, createjs.Ease.backOut);
				}
			}
			else if ( this.name == '3-stars' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(currentStateId === ig.scene.stateId.print ? 400 : 0).wait(200).to({ alpha : 1 }, 800);
				}
			}
			else if ( this.name == 'print-note' )
			{
				if ( newStateId == ig.scene.stateId.print )
				{
					this.pos.y -= ig.system.height;
					createjs.Tween.get(this.pos).wait(600).to({ y : 0 }, 800, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.game )
					createjs.Tween.get(this.pos).to({ y : this.pos.y - ig.system.height }, 400, createjs.Ease.backIn);
			}
		}
	})
});