ig.module(
	'lib.game.entities.map.roller'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Map = ig.Entity.Map || {};

	ig.Entity.Map.Roller = ig.Entity.extend(
	{
		img : null,
		maskX : -80,
		frameCount : 0,

		init : function()
		{
			this.parent.apply(this, arguments);

			this.size.x = 1426 * ig.system.scale;
			this.size.y = 768 * ig.system.scale;

			this.disObj = new createjs.Container;

			this.mask = new createjs.Shape;

			// it was the display object container from the field
			if ( this.img === null )
				ig.scene.fieldObj.disObj.mask = this.mask;

			// make a container
			else
			{
				// add the background
				var sBg = new createjs.Bitmap(this.img);
				sBg.mask = this.mask;
				this.disObj.addChild(sBg);
			}

			var sGradient = new createjs.Shape;
			sGradient.graphics.beginLinearGradientFill(['transparent', '#6d5935'], [0, 1], 0, 768, 320 * ig.system.scale, 768).drawRect(0, 0, 320 * ig.system.scale, 768);
			sGradient.x = -320 * ig.system.scale;
			// sGradient.regY = 768 * 0.5;
			this.disObj.addChild(sGradient);

			var sRoll = new createjs.Sprite(ig.loader.getSpriteSheet('preloader-map'), 'roll');
			sRoll.x = -80 * ig.system.scale;
			sRoll.regX = 160 * 0.5 * ig.system.scale;
			this.disObj.addChild(sRoll);

			var delay = ig.game.preloaderContainer ? 800 : 600;

			// increment these values
			createjs.Tween.get(this)
				.wait(delay)
				.call(function() { this.canDraw = true }, null, this)
				.to({ maskX : 1426 + 320 }, 1200, createjs.Ease.quadOut)
				.call(this.kill, null, this);

			// play sound
			createjs.Tween.get({}).wait(delay * 0.5).call(ig.sound.playSound, ['sfxRoller'], ig.sound);
		},

		update : function(e)
		{
			if ( this.canDraw )
			{
				this.mask.graphics.f('#000').moveTo(0, 0).rect(0, 0, this.maskX * ig.system.scale, 768);

				var sRoll = this.disObj.getChildAt(this.img === null ? 1 : 2);
				sRoll.x = this.maskX * ig.system.scale;

				this.disObj.getChildAt(this.img === null ? 0 : 1).x = sRoll.x - (320 * ig.system.scale);

				// this.frameCount += e.delta * 0.001;
				// if ( this.frameCount >= 0.1 )
				// {
				// 	this.frameCount = 0;
				// 	sRoll.scaleX = sRoll.scaleX > 0 ? -1 : 1;
				// }
			}

			this.parent(e);
		},

		kill : function()
		{
			this.mask.graphics.f('#000').moveTo(0, 0).rect(0, 0, 1426, 768);

			if ( this.img )
				ig.$('#' + ig.config.gameWrapper).style.backgroundImage = 'url(' + this.img.src + ')';

			// switch the scenes state
			ig.scene.switchState(this.toStateId || ig.scene.stateId.game);

			this.parent();
		}
	})
});