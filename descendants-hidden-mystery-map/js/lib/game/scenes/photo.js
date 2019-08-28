ig.module(
	'lib.game.scenes.photo'
)
.requires(
	'lib.game.scenes.base',

	'lib.game.entities.photo.image',
	'lib.game.entities.photo.btn',
	'lib.game.entities.photo.misc'
)
.defines(function()
{
	ig.Scene.Photo = ig.Scene.Base.extend(
	{
		init : function()
		{
			ig.merge(this.stateId, 
			{
				scaleUp : 100,
				scaleDown : 101,
				rotate : 102
			})

			// ig.loader.load('book-image-overlays', function(s)
			// {
			// 	if ( s >= 1 && !ig.scene.getEntityByName('slider') )
			// 	{
					var gWrapper = ig.$('#' + ig.config.gameWrapper);
					if ( gWrapper )
						gWrapper.style.backgroundImage = 'url(' + ig.loader.getResult('book-bg').src + ')';

					this.spawnEntity(ig.Entity.Photo.Image, 0, 0, { img : ig.game.temp.uploadImage, zIndex : -1000 });

					this.spawnEntity(ig.Entity.Photo.Misc, 0, 0, { name : ig.game.temp.nationality == 'auradon-bg' ? 'overlay-circle' : 'overlay-shield' });

					this.spawnEntity(ig.Entity.Photo.Btn, 120, -120, { name : 'btn-cancel', stateIds : [this.stateId.game], screenAnchor : { x : 0, y : 1 } });
					this.spawnEntity(ig.Entity.Photo.Btn, -120, -120, { name : 'btn-confirm', stateIds : [this.stateId.game], screenAnchor : { x : 1, y : 1 } });
					this.spawnEntity(ig.Entity.Photo.Btn, 120, 120, { name : 'btn-rotate', stateIds : [this.stateId.game], screenAnchor : { x : 0, y : 0 } });

					this.spawnEntity(ig.Entity.Photo.Misc, -195, -120, { name : 'slider', screenAnchor : { x : 1, y : 0.5 } });
					this.spawnEntity(ig.Entity.Photo.Btn, -195, -120, { name : 'btn-slider-knob', stateIds : [this.stateId.game], screenAnchor : { x : 1, y : 0.5 } });
					this.spawnEntity(ig.Entity.Photo.Btn, -195 - 105, -120 - 185, { name : 'btn-plus', stateIds : [this.stateId.game], screenAnchor : { x : 1, y : 0.5 } });
					this.spawnEntity(ig.Entity.Photo.Btn, -195 + 77, -120 + 190, { name : 'btn-minus', stateIds : [this.stateId.game], screenAnchor : { x : 1, y : 0.5 } });

					this.switchState(this.stateId.game);
			// 	}
			// }.bind(this))
		},

		switchState : function(newStateId)
		{
			var w = ig.system.fixedWidth,
				h = ig.system.fixedHeight,
				w2 = w * 0.5,
				h2 = h * 0.5,
				currentStateId = this.currentStateId;

			if ( newStateId == this.stateId.game )
			{
				createjs.Tween.get({}).wait(1200).call(function() { this.currentStateId = newStateId }, null, this);
			}

			else if ( newStateId == this.stateId.scaleUp || newStateId == this.stateId.scaleDown )
			{
				var knobObj = this.getEntityByName('btn-slider-knob');

				var perc = knobObj.getPercentage() + (newStateId == this.stateId.scaleUp ? 0.1 : -0.1);

				knobObj.setPercentage(perc);
				return;
			}

			else if ( newStateId == this.stateId.rotate )
			{
				var imgObj = this.getEntityByType(ig.Entity.Photo.Image);
				createjs.Tween.get(imgObj.disObj).to({ rotation : imgObj.disObj.rotation + 180 }, 600, createjs.Ease.quadInOut).call(function()
				{
					this.currentStateId = this.stateId.game
				}, null, this)
			}

			else if ( newStateId == this.stateId.end )
			{
				ig.game.temp.previousScene = 'photo';

				// if null, they cancelled
				if ( ig.game.temp.passportImage == null )
					createjs.Tween.get({}).wait(200).call(ig.game.switchScene, [ig.Scene.Book], ig.game);

				// do some magic
				else
				{
					var can = ig.$new('canvas');
					can.width = ig.game.stages[0].canvas.width;
					can.height = ig.game.stages[0].canvas.height;

					var imgObj = this.getEntityByType(ig.Entity.Photo.Image);
					var imgDisObj = imgObj.disObj;
					var w = imgObj.size.x;
					var h = imgObj.size.y;
					var scale = imgObj.scale.x;

					var x = -imgDisObj.x + ig.game.stages[0].canvas.width * 0.5;
					var y = -imgDisObj.y + ig.game.stages[0].canvas.height * 0.5;

					var ctx = can.getContext('2d');
					ctx.save();
					ctx.translate(imgDisObj.x, imgDisObj.y);

					if ( ig.game.temp.nationality == 'auradon-bg' )
					{
						ctx.beginPath();
						ctx.arc(x, y, 333, 0, 2 * Math.PI, false);
						ctx.closePath();
						ctx.clip();

						ctx.scale(scale, scale);
						ctx.rotate(imgDisObj.rotation.toRad());
						ctx.drawImage(imgDisObj.image, -w * 0.5, -h * 0.5);
						ctx.rotate(-imgDisObj.rotation.toRad()); // rotate back
						ctx.scale(1/scale, 1/scale);
						ctx.translate(-imgDisObj.x, -imgDisObj.y);

						var frame = new createjs.Sprite(ig.loader.getSpriteSheet('book-passport-images'), 'auradon-frame-masked');
						var frameImage = frame.spriteSheet._images[0];
						var rect = frame.spriteSheet._frames[frame.currentFrame].rect;
						var frameScale = 3.4;
						ctx.drawImage( frameImage, rect.x, rect.y, rect.width, rect.height, 
						(can.width/2) - ((rect.width/2) * frameScale) - 5, (can.height/2) - ((rect.height/2) * frameScale) + 30,
						rect.width * frameScale, rect.height * frameScale);

					}
					else
					{
						ctx.beginPath();
						
						ctx.moveTo(x - 300, y - 285);
						ctx.quadraticCurveTo(x - 120, y - 225, x, y - 350);
						ctx.quadraticCurveTo(x + 120, y - 235, x + 295, y - 275);
						ctx.quadraticCurveTo(x + 320, y + 180, x + 10, y + 350);
						ctx.quadraticCurveTo(x - 295, y + 180, x - 300, y - 285);
						
						ctx.closePath();
						ctx.clip();

						ctx.scale(scale, scale);
						ctx.rotate(imgDisObj.rotation.toRad());
						ctx.drawImage(imgDisObj.image, -w * 0.5, -h * 0.5);
					}

					ctx.restore();

					var can2 = ig.$new('canvas');
					can2.width = ig.game.temp.nationality == 'auradon-bg' ? 666 : 600;
					can2.height = ig.game.temp.nationality == 'auradon-bg' ? 666 : 700;

					var ctx2 = can2.getContext('2d');
					ctx2.drawImage(can, -(can.width * 0.5 - can2.width * 0.5), -(can.height * 0.5 - can2.height * 0.5));

					can = null;
					ctx = null;

					ig.game.temp.passportImage = can2;
					createjs.Tween.get({}).wait(200).call(ig.game.switchScene, [ig.Scene.Book], ig.game);
				}
			}

			this.parent.apply(this, arguments);
		},

		updateImageScale : function(perc)
		{
			var imgObj = this.getEntityByType(ig.Entity.Photo.Image);
			imgObj.scale.x = imgObj.scale.y = perc;
		}
	})
});