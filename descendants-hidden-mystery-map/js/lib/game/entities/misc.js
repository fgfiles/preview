ig.module(
	'lib.game.entities.misc'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Misc = ig.Entity.extend(
	{
		init : function()
		{
			this.parent.apply(this, arguments);

			if ( this.name == 'bg' )
			{
				this.disObj = new createjs.Shape;
				this.disObj.graphics.f('#000').drawRect(0, 0, 1426, 768);
				this.size.x = 1426;
				this.size.y = 768;
			}
			else if ( this.name == 'text-confirm' )
			{
				this.disObj = new createjs.Text('', 'bold ' + (48 * ig.system.scale) + 'px superclarendon', '#fff');
				this.disObj.textAlign = 'center';
				this.disObj.lineWidth = 900 * ig.system.scale;
				ig.merge(this.disObj, ig.scene instanceof ig.Scene.Book ? ig.strings.SWITCH_GAME_TO_MAP : ig.strings.SWITCH_GAME_TO_BOOK);
			}
			else if ( this.name == 'btn-back' )
			{
				if ( ig.scene instanceof ig.Scene.Book )
					this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'btn-x');
				else
					this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-back');

				this.size.x = this.size.y = 84;
				this.size.r = 42;
			}
			else if ( this.name == 'btn-check' )
			{
				if ( ig.scene instanceof ig.Scene.Book )
					this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('book-general-ui'), 'btn-tick');
				else
					this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-check');

				this.size.x = this.size.y = 84;
				this.size.r = 42;
			}
		},

		update : function(e)
		{
			if ( (this.name == 'btn-back' || this.name == 'btn-check') && this.stateIds.indexOf(ig.scene.currentStateId) > -1 )
			{
				var inBounds = this.inBounds(true);

				if ( ig.device.mobile && !(ig.input.pressed(ig.KEY.MOUSE1) || ig.input.state(ig.KEY.MOUSE1)) )
					inBounds = false;

				if ( inBounds )
					ig.game.cursorPointer = true;
	
				// scale it
				this.scale.x = this.scale.y = Math.lerp(this.scale.x, inBounds ? 1.2 : 1, 0.2);

				// they clicked on it
				if ( inBounds && ig.input.released(ig.KEY.MOUSE1) )
				{
					ig.sound.playSound('sfxClick');
					
					if ( this.name == 'btn-back' )
						ig.scene.switchState(ig.scene.stateId.cancel);

					else if ( this.name == 'btn-check' )
						ig.game.switchGame(ig.scene instanceof ig.Scene.Book ? ig.Scene.Map : ig.Scene.Book);
				}
			}

			this.parent(e);
		},

		switchState : function(newStateId, currentStateId)
		{
			if ( this.name == 'bg' )
			{
				if ( newStateId == ig.scene.stateId.otherGame )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).to({ alpha : 0.7 }, 600);
				}
				else if ( newStateId == ig.scene.stateId.cancel )
					createjs.Tween.get(this.disObj).wait(100).to({ alpha : 0 }, 200).call(this.kill, null, this);
			}
			else if ( this.name == 'text-confirm' )
			{
				if ( newStateId == ig.scene.stateId.otherGame )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(200).to({ alpha : 1 }, 600);
				}
				else if ( newStateId == ig.scene.stateId.cancel )
					createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-back' || this.name == 'btn-check' )
			{
				if ( newStateId == ig.scene.stateId.otherGame )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(200).to({ x : 1, y : 1 }, 600, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.cancel )
					createjs.Tween.get(this.scale).to({ x : 0, y : 0 }, 200).call(this.kill, null, this);
			}
		}
	})
})