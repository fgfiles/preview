ig.module(
	'lib.impact.entity'
)
.requires(
	'lib.plugins.createjs.easel'
)
.defines(function()
{
	ig.Entity = ig.Class.extend(
	{
		disObj : null,
		stageIndex : 0,

		zIndex : 0,

		pos : { x : 0, y : 0 },
		size : { x : 0, y : 0, r : 0 },
		scale : { x : 1, y : 1 },
		localAnchor : { x : 0.5, y : 0.5 },
		screenAnchor : { x : 0.5, y : 0.5 },

		isUI : false,

		init : function(x, y, settings)
		{
			this.pos.x = x || this.pos.x;
			this.pos.y = y || this.pos.y;

			ig.merge(this, settings || {});
		},

		update : function(e)
		{
			// if this object has an createjs display object
			if ( this.disObj )
			{
				var disObj = this.disObj,
					sys = ig.system,
					stage = ig.game.stages[this.stageIndex]
					isSprite = disObj instanceof createjs.Sprite,
					isBitmap = disObj instanceof createjs.Bitmap,
					scale = isSprite ? sys.scale : 1,
					x = this.isUI ? stage.x : 0, // if its ui, keep it moving with stages x and y 
					y = this.isUI ? stage.y : 0,
					sx = this.size.x * scale,
					sy = this.size.y * scale;

				disObj.scaleX = this.scale.x;// * 1;//(isSprite || isBitmap ? sys.fixedScale : scale);
				disObj.scaleY = this.scale.y;// * 1;//(isSprite || isBitmap ? sys.fixedScale : scale);
				disObj.regX = sx * this.localAnchor.x;
				disObj.regY = sy * this.localAnchor.y;

				if ( disObj.parent === stage )
				{
					disObj.x = (sys.width * this.screenAnchor.x) + (this.pos.x - x) * scale;
					disObj.y = (sys.height * this.screenAnchor.y) + (this.pos.y - y) * scale;
				}
				
				// frustum culling
				// disObj.visible = !(
				// 	disObj.x + disObj.regX + sx + stage.x < 0 || 
				// 	disObj.x - disObj.regX - sx + stage.x > sys.fixedWidth || 
				// 	disObj.y + disObj.regY + sy + stage.y < 0 || 
				// 	disObj.y - disObj.regY - sy + stage.y > sys.fixedHeight);
			}
		},

		draw : function() {},

		kill : function()
		{
			// remove it from the scene
			ig.scene.removeEntity(this)
		},

		inBounds : function(useScale)
		{
			var stage = ig.game.stages.length ? ig.game.stages[this.stageIndex] : null,
				mx = ig.input.mouse.x,
				my = ig.input.mouse.y,
				rec = this.disObj ? this.disObj.getTransformedBounds() : null,
				w = rec && rec.width,
				h = rec && rec.height;

			if ( !stage || !rec )
				return false;

			// square if radius is not present
			if ( !this.size.r )
			{
				var ax = this.localAnchor.x,
					ay = this.localAnchor.y,
					sx = this.size.x * (useScale ? this.scale.x : 1),
					sy = this.size.y * (useScale ? this.scale.y : 1),
					// sx = this.size.x,
					// sy = this.size.y,
					x = rec.x + (this.isUI ? stage.x : 0) + w * ax,
					y = rec.y + (this.isUI ? stage.y : 0) + h * ay,
					// left = mx >= x - ((useScale ? w : sx) * ax),
					// right = mx <= x + ((useScale ? w : sx) * (1 - ax)),
					// top = my >= y - ((useScale ? h : sy) * ay),
					// bottom = my <= y + ((useScale ? h : sy) * (1 - ay));
					left = mx >= x - (sx * ax),
					right = mx <= x + (sx * (1 - ax)),
					top = my >= y - (sy * ay),
					bottom = my <= y + (sy * (1 - ay));

				return left && right && top && bottom;
			}

			// circle
			else
			{
				var dx = mx - (rec.x + (w * this.localAnchor.x)),
					dy = my - (rec.y + (h * this.localAnchor.y)),
					r = this.size.r;

				return dx * dx + dy * dy <= (r * r) * (useScale ? this.scale.x : 1);
			}
		}
	})
});