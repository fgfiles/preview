ig.module(
	'lib.game.entities.photo.btn'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Photo = ig.Entity.Photo || {};

	ig.Entity.Photo.Btn = ig.Entity.extend(
	{
		stateIds : [],

		init : function()
		{
			this.parent.apply(this, arguments);

			if ( this.name == 'btn-cancel' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-image-overlay'), 'cancel');
				this.size.x = this.size.y = 151;
				this.size.r = 75;
			}
			else if ( this.name == 'btn-confirm' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-image-overlay'), 'confirm');
				this.size.x = this.size.y = 151;
				this.size.r = 75;
			}
			else if ( this.name == 'btn-rotate' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-image-overlay'), 'rotate');
				this.size.x = this.size.y = 151;
				this.size.r = 75;
			}
			else if ( this.name == 'btn-plus' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-image-overlay'), 'plus');
				this.size.x = this.size.y = 42;
			}
			else if ( this.name == 'btn-minus' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-image-overlay'), 'minus');
				this.size.x = this.size.y = 42;
			}
			else if ( this.name == 'btn-slider-knob' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-image-overlay'), 'slider-knob');
				this.size.x = this.size.y = 110;
				this.size.r = 40;

				this.angleMax = -0.8;
				this.angleMin = -0.08;
				this.angle = this.currentAngle = (this.angleMax + this.angleMin) * 0.5;
				this.radius = 818 * 0.5;
				this.center = { x : -this.radius - 120, y : 40 };
			}
		},

		update : function(e)
		{
			if ( this.stateIds.indexOf(ig.scene.currentStateId) > -1 )
			{
				var inBounds = this.inBounds(true);

				if ( ig.device.mobile && !(ig.input.pressed(ig.KEY.MOUSE1) || ig.input.state(ig.KEY.MOUSE1)) )
					inBounds = false;

				if ( inBounds )
					ig.game.cursorPointer = true;

				// scale it
				this.scale.x = this.scale.y = Math.lerp(this.scale.x, inBounds ? 1.1 : 1, 0.2);

				if ( inBounds && ig.input.released(ig.KEY.MOUSE1) )
				{
					ig.sound.playSound('sfxClick');

					if ( this.name == 'btn-cancel' )
					{
						ig.game.temp.passportImage = null;
						ig.scene.switchState(ig.scene.stateId.end);
					}
					else if ( this.name == 'btn-confirm' )
					{
						ig.game.temp.passportImage = true;
						ig.scene.switchState(ig.scene.stateId.end);
					}

					else if ( this.name == 'btn-plus' )
						ig.scene.switchState(ig.scene.stateId.scaleUp);

					else if ( this.name == 'btn-minus' )
						ig.scene.switchState(ig.scene.stateId.scaleDown);

					else if ( this.name == 'btn-rotate' )
						ig.scene.switchState(ig.scene.stateId.rotate);
				}

				// the knob slider is a bit more complex
				if ( this.name == 'btn-slider-knob' )
				{
					var mx = ig.input.mouse.x,
						my = ig.input.mouse.y,
						x, y,
						perc;

					if ( inBounds && ig.input.pressed(ig.KEY.MOUSE1) )
					{
						this.isMouseDown = true;
						ig.sound.playSound('sfxClick');
					}

					else if ( ig.input.released(ig.KEY.MOUSE1) )
						this.isMouseDown = false;

					x = mx - ig.system.fixedWidth - this.center.x;
					y = my - (ig.system.fixedHeight * 0.5) - this.center.y;
					this.angle = this.isMouseDown ? Math.atan2(y, x) : this.angle;
					this.currentAngle = this.currentAngle.lerp(this.angle, 0.08).limit(this.angleMax, this.angleMin);
					this.pos.x = (this.radius * Math.cos(this.currentAngle)) + this.center.x;
					this.pos.y = (this.radius * Math.sin(this.currentAngle)) + this.center.y;

					perc = (this.currentAngle - this.angleMin) / (this.angleMax - this.angleMin);
					ig.scene.updateImageScale( Math.lerp(0.5, 2, perc) );
				}
			}

			this.parent(e);
		},

		switchState : function(newStateId, currentStateId)
		{
			if ( this.name == 'btn-cancel' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(600).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-confirm' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(600).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-rotate' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(600).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-plus' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(1200).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-minus' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(1200).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-slider-knob' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(1200).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200, createjs.Ease.backIn).call(this.kill, null, this);
			}
		},

		setPercentage : function(p)
		{
			this.angle = (this.angleMax + this.angleMin) * p.limit(0, 1);
		},

		getPercentage : function()
		{
			return (this.currentAngle - this.angleMin) / (this.angleMax - this.angleMin);
		}
	})
});