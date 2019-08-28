ig.module(
	'lib.game.entities.map.btn'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Map = ig.Entity.Map || {};

	ig.Entity.Map.Btn = ig.Entity.extend(
	{
		init : function()
		{
			this.parent.apply(this, arguments);

			if ( this.name == 'btn-travel-guide' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-travel-guide');
				this.size.x = this.size.y = 84;
				this.size.r = 42;
			}
			else if ( this.name == 'btn-home' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-home');
				this.size.x = this.size.y = 84;
				this.size.r = 42;
			}
			else if ( this.name == 'btn-next' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-next');
				this.size.x = this.size.y = 84;
				this.size.r = 42;
			}
			else if ( this.name == 'btn-list' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-list');
				this.size.x = this.size.y = 84;
				this.size.r = 42;
			}
			else if ( this.name == 'btn-print' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-print');
				this.size.x = this.size.y = 84;
				this.size.r = 42;

				this.disObj.on('click', function()
				{
					window.open(ig.config.mapPrintPath);

					if ( ig.scene.currentStateId === ig.scene.stateId.print )
						ig.scene.switchState(ig.scene.stateId.game);
				})
			}
			else if ( this.name == 'btn-hint' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'btn-help');
				this.size.x = this.size.y = 84;
				this.size.r = 42;
			}
			else if ( this.name == 'btn-x' )
			{
				this.disObj = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'x');
				this.size.x = this.size.y = 48;
			}
			else if ( this.name == 'ring' )
			{
				var sRing = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'ring')

				if ( this.n == 2 || this.n == 3 )
				{
					this.disObj = new createjs.Container;

					var sArrow = new createjs.Sprite(ig.loader.getSpriteSheet('map'), this.n == 2 ? 'arrow-down' : 'arrow-up');
					sArrow.x = 40;
					sArrow.y = this.n == 2 ? 90 : -40;
					this.disObj.addChild(sArrow);

					var sBg = new createjs.Sprite(ig.loader.getSpriteSheet('map'), 'zoom-' + (this.n - 1));
					sBg.regX = sBg.regY = 80 * 0.5;
					sBg.x = sBg.y = (114 * 0.5) - 1;
					this.disObj.addChild(sBg);

					sRing.regX = sRing.regY = 114 * 0.5;
					sRing.x = sRing.y = 114 * 0.5;
					this.disObj.addChild(sRing);
				}
				else
					this.disObj = sRing;

				this.size.x = this.size.y = 114;
				this.size.r = 58;
				this.angle = 0;
			}
		},

		update : function(e)
		{
			if ( this.stateIds.indexOf(ig.scene.currentStateId) > -1 )
			{
				var inBounds = this.inBounds(true);

				if ( ig.device.mobile && !(ig.input.pressed(ig.KEY.MOUSE1) || ig.input.state(ig.KEY.MOUSE1)) )
					inBounds = false;

				if ( this.name == 'btn-list' && ig.scene.isShowingFoundItem )
					inBounds = false;

				if ( inBounds )
					ig.game.cursorPointer = true;

				// make it rock?
				if ( this.name == 'ring' )
				{
					if ( inBounds )
					{
						this.angle += 10 * (e.delta * 0.001);

						if ( this.n == 2 || this.n == 3 )
						{
							var sRing = this.disObj.getChildAt(2);
							sRing.rotation = Math.cos(this.angle) * 10;

							var sBg = this.disObj.getChildAt(1);
							
							sBg.scaleX = sBg.scaleY = sRing.scaleX = sRing.scaleY = Math.lerp(sBg.scaleX, 1.1, 0.2);
						}
						else
						{
							this.disObj.rotation = Math.cos(this.angle) * 10;
							this.scale.x = this.scale.y = Math.lerp(this.scale.x, 1.1, 0.2);
						}
					}
					else
					{
						this.angle = 0;

						if ( this.n == 2 || this.n == 3 )
						{
							var sRing = this.disObj.getChildAt(2);
							sRing.rotation = Math.lerp(sRing.rotation, 0, 0.2);

							var sBg = this.disObj.getChildAt(1);

							sBg.scaleX = sBg.scaleY = sRing.scaleX = sRing.scaleY = Math.lerp(sBg.scaleX, 1, 0.2);
						}
						else
						{
							this.disObj.rotation = Math.lerp(this.disObj.rotation, 0, 0.2);
							this.scale.x = this.scale.y = Math.lerp(this.scale.x, 1, 0.2);
						}
					}
				}
				else
					// scale it
					this.scale.x = this.scale.y = Math.lerp(this.scale.x, inBounds ? 1.2 : 1, 0.2);

				// they clicked on it
				if ( inBounds && ig.input.released(ig.KEY.MOUSE1) )
				{
					if ( this.name == 'ring' )
						ig.sound.playSound('sfxDing');
					else
						ig.sound.playSound('sfxClick');

					if ( this.name == 'btn-travel-guide' )
						ig.scene.switchState(ig.scene.stateId.otherGame);

					else if ( this.name == 'btn-home' )
						ig.game.switchScene(ig.Scene.Map);

					else if ( this.name == 'btn-next' )
					{
						if ( ig.scene.currentStateId == ig.scene.stateId.intro )
							ig.scene.switchState(ig.scene.stateId.game);

						else if ( ig.scene.currentStateId == ig.scene.stateId.end )
							ig.game.switchScene(ig.Scene.Map);
					}

					else if ( this.name == 'btn-list' )
					{
						if ( ig.scene.currentStateId == ig.scene.stateId.game )
							ig.scene.switchState(ig.scene.stateId.list);

						else if ( ig.scene.currentStateId == ig.scene.stateId.list )
							ig.scene.switchState(ig.scene.stateId.game);
					}

					else if ( this.name == 'ring' )
					{
						ig.game.temp.mapSelectedLevel = this.n; // n was set via the scene
						ig.game.switchScene(ig.Scene.Search);
					}

					else if ( this.name == 'btn-x' )
						ig.scene.switchState(ig.scene.stateId.game);

					else if ( this.name == 'btn-hint' )
						ig.scene.switchState(ig.scene.stateId.hintUse);
				}
			}
			else
			{
				if ( this.scale.x >= 1 )
					this.scale.x = this.scale.y = Math.lerp(this.scale.x, 1, 0.2);

				if ( this.name == 'ring' )
				{
					this.angle = 0;

					if ( this.n == 2 || this.n == 3 )
						this.disObj.getChildAt(2).rotation = Math.lerp(this.disObj.getChildAt(2).rotation, 0, 0.2);
					else
						this.disObj.rotation = Math.lerp(this.disObj.rotation, 0, 0.2);
				}
			}

			this.parent(e);
		},

		switchState : function(newStateId, currentStateId)
		{
			if ( this.name == 'btn-travel-guide' )
			{
				if ( ig.scene instanceof ig.Scene.Map )
				{
					if ( newStateId == ig.scene.stateId.game )
					{
						this.scale.x = this.scale.y = 0;
						createjs.Tween.get(this.scale).wait(currentStateId === ig.scene.stateId.print ? 400 : 0).to({ x : 1, y : 1 }, 800, createjs.Ease.backOut);
					}
				}
				else if ( ig.scene instanceof ig.Scene.Search )
				{
					if ( newStateId == ig.scene.stateId.intro )
					{
						this.scale.x = this.scale.y = 0;
						createjs.Tween.get(this.scale).to({ x : 1, y : 1 }, 800, createjs.Ease.backOut);
					}
				}
			}
			else if ( this.name == 'btn-home' )
			{
				if ( newStateId == ig.scene.stateId.intro )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).to({ x : 1, y : 1 }, 800, createjs.Ease.backOut);
				}
			}
			else if ( this.name == 'btn-next' )
			{
				if ( newStateId == ig.scene.stateId.intro )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(1600).to({ alpha : 1 }, 800);
				}
				else if ( newStateId == ig.scene.stateId.game )
					createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);

				else if ( newStateId == ig.scene.stateId.end )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(1200).to({ alpha : 1 }, 800);
				}
			}
			else if ( this.name == 'btn-list' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					if ( currentStateId == ig.scene.stateId.list )
						createjs.Tween.get(this.pos).to({ y : -64 }, 800, createjs.Ease.quadIn);

					else
						createjs.Tween.get(this.pos).wait(200).to({ y : -64 }, 800, createjs.Ease.backOut);
				}

				else if ( newStateId == ig.scene.stateId.list )
					createjs.Tween.get(this.pos).to({ y : -524 }, 800, createjs.Ease.quadIn);

				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.pos, { override : true }).to({ y : 587 + 64 }, 600, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-print' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					// bottom left corner
					if ( this.screenAnchor.x === 0 )
					{
						this.scale.x = this.scale.y = 0;
						createjs.Tween.get(this.scale).wait(currentStateId === ig.scene.stateId.print ? 400 : 0).to({ x : 1, y : 1 }, 800, createjs.Ease.backOut);
					}
					// this one belongs to the print note
					else
						createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);
				}
				else if ( newStateId == ig.scene.stateId.print )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(1200).to({ alpha : 1 }, 800);
				}
			}
			else if ( this.name == 'btn-x' )
			{
				if ( newStateId == ig.scene.stateId.print )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(1200).to({ alpha : 1 }, 800);
				}
				else if ( newStateId == ig.scene.stateId.game )
					createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);
			}
			else if ( this.name == 'btn-hint' )
			{
				if ( newStateId == ig.scene.stateId.hintSetup )
				{
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).to({ x : 1, y : 1 }, 800, createjs.Ease.backOut);
				}
				else if ( newStateId == ig.scene.stateId.hintUse )
					createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);
			}
			else if ( this.name == 'ring' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					var delay = currentStateId === ig.scene.stateId.print ? 400 : 0;

					if ( this.n == 2 || this.n == 3 )
					{
						this.disObj.getChildAt(0).alpha = 0;
						createjs.Tween.get(this.disObj.getChildAt(0)).wait(800 + delay).to({ alpha : 1 }, 600);
					}

					this.disObj.rotation = -360;
					this.scale.x = this.scale.y = 0;
					createjs.Tween.get(this.scale).wait(delay).to({ x : 1, y : 1 }, 800, createjs.Ease.backOut);
					createjs.Tween.get(this.disObj).wait(delay).to({ rotation : 0 }, 800, createjs.Ease.backOut);
				}
			}
		}
	})
});