ig.module(
	'lib.game.entities.search.misc'
)
.requires(
	'lib.impact.entity'
)
.defines(function()
{
	ig.Entity.Search = ig.Entity.Search || {};

	ig.Entity.Search.Misc = ig.Entity.extend(
	{
		init : function()
		{
			this.parent.apply(this, arguments);

			if ( this.name.indexOf('character-') > -1 )
			{
				this.disObj = new createjs.Bitmap(ig.loader.getResult('map-search-character-' + this.name.split('-')[1]));
				this.size.x = this.disObj.image.width * ig.system.scale;
				this.size.y = this.disObj.image.height * ig.system.scale;
			}
			else if ( this.name == 'speech-bubble' )
			{
				this.disObj = new createjs.Container;
				this.size.x = 411 * ig.system.scale;
				this.size.y = 492 * ig.system.scale;

				var sBubble = new createjs.Sprite(ig.loader.getSpriteSheet('map-search'), 'bg-bubble-2');
				sBubble.scaleX = this.localAnchor.x ? -1 : 1;
				sBubble.x += this.localAnchor.x ? this.size.x + 45 : 0;
				this.disObj.addChild( sBubble );

				var sText = new createjs.Text('', 'bold ' + (20 * ig.system.scale) + 'px superclarendon', '#4a3f30');
				sText.x += 85 * ig.system.scale;
				sText.y += 55 * ig.system.scale;
				sText.lineHeight = 28 * ig.system.scale;
				sText.lineWidth = 290 * ig.system.scale;
				ig.merge(sText, ig.strings.SEARCH['LEVEL_' + ig.game.temp.mapSelectedLevel].STORY);

				if ( sText.getMeasuredHeight() > 400 )
				{
					sText.scaleX = sText.scaleY = 400 / sText.getMeasuredHeight();
					sText.lineWidth = sText.lineWidth / sText.scaleX;
				}

				this.disObj.addChild( sText );
			}
			else if ( this.name == 'timer' )
			{
				this.disObj = new createjs.Container;
				this.size.x = 645;
				this.size.y = 72;

				var ss = ig.loader.getSpriteSheet('map-search');

				var sBg = new createjs.Sprite(ss, 'bg-timer');
				this.disObj.addChild( sBg );

				// the mask for the blue bar
				this.shapeObj = new createjs.Shape;
				this.shapeObj.x = 48;

				var sBlue = new createjs.Sprite(ss, 'blue-bar');
				sBlue.mask = this.shapeObj;
				this.disObj.addChild( sBlue );

				this.starsFull = [];
				this.starsEmpty = [];

				for ( var i = 0; i < 3; i++ )
				{
					for ( var j = 0; j < 2; j++ )
					{
						var sStar = new createjs.Sprite(ss, 'bar-star-' + (j == 0 ? 'empty' : 'full'));
						sStar.n = i;
						sStar.visible = j == 1;
						sStar.regX = sStar.regY = 48;
						sStar.scaleX = sStar.scaleY = 0.5;
						sStar.x = sBg.getBounds().width * 0.5;
						sStar.y = 34;

						if ( i == 0 )
							sStar.x -= 180;
						else if ( i == 2 )
							sStar.x += 180;

						if ( j == 0 )
							this.starsEmpty.push(sStar);
						else
							this.starsFull.push(sStar);

						this.disObj.addChild( sStar );
					}
				}
			}
			else if ( this.name == 'list' )
			{
				this.disObj = new createjs.Container;
				this.size.x = 628;
				this.size.y = 587;

				var sBg = new createjs.Sprite(ig.loader.getSpriteSheet('map-search'), 'bg-list');
				this.disObj.addChild( sBg );

				for ( var i = 0; i < ig.scene.itemNames.length; i++ )
				{
					var sText = new createjs.Text('', 'italic ' + (30 * ig.system.scale) + 'px superclarendon', '#4a3f30');
					sText.name = 'text-' + i;
					sText.x = this.size.x * 0.5;
					sText.y = i * 42 + 120;
					sText.textAlign = 'center';
					sText.maxWidth = 460;
					ig.merge(sText, ig.strings.SEARCH.ITEM[ ig.scene.itemNames[i].toUpperCase() ]);

					this.disObj.addChild( sText );
				}
			}
			else if ( this.name == 'end-note' )
			{
				this.disObj = new createjs.Container;
				this.size.x = 358;
				this.size.y = 401;

				var sBg = new createjs.Sprite(ig.loader.getSpriteSheet('map-search'), 'bg-paper');
				this.disObj.addChild( sBg );

				var sText = new createjs.Text('', 'bold ' + (24 * ig.system.scale) + 'px superclarendon', '#4a3f30');
				sText.x = this.size.x * 0.5 - 10;
				sText.y = 42;
				sText.textAlign = 'center';
				sText.lineWidth = 280;
				sText.lineHeight = 30;
				ig.merge(sText, ig.strings.SEARCH['LEVEL_' + this.n].END_NOTE);
				this.disObj.addChild( sText );

				if ( sText.getMeasuredHeight() > 315 )
				{
					sText.scaleX = sText.scaleY = 315 / sText.getMeasuredHeight();
					sText.lineWidth = sText.lineWidth / sText.scaleX;
				}
			}
			else if ( this.name == 'found-text' )
			{
				this.disObj = new createjs.Container;

				var shadow = new createjs.Shadow('#000', 0, 0, 24);

				var sText = new createjs.Text('', 'bold ' + (26 * ig.system.scale) + 'px superclarendon', '#fff5df');
				sText.textAlign = 'center';
				sText.shadow = shadow;
				ig.merge(sText, ig.strings.SEARCH.ITEM_FOUND);
				this.disObj.addChild(sText);

				sText = new createjs.Text('', 'bold ' + (54 * ig.system.scale) + 'px superclarendon', '#fff5df');
				sText.y = 44;
				sText.textAlign = 'center';
				sText.shadow = shadow;
				ig.merge(sText, ig.strings.SEARCH.ITEM[this.itemName.toUpperCase()]);
				this.disObj.addChild(sText);
			}
		},

		update : function(e)
		{
			if ( this.name == 'timer' )
			{
				var t = (-ig.scene.gameTimer.delta()).limit(0, Infinity);
				var p = t / ig.scene.gameTimer.target;
				this.shapeObj.graphics.f('#000').moveTo(0, 0).drawRect(0, 0, p * 552, 64);

				if ( p < 0.666 && this.starsFull[2] )
				{
					ig.sound.playSound('sfxChime');
					ig.scene.starCount--;
					this.starsEmpty[2].visible = true;
					var sStar = this.starsFull.pop();
					createjs.Tween.get(sStar).to({ y : sStar.y + 100, alpha : 0 }, 600, createjs.Ease.backIn).call(this.disObj.removeChild, [sStar], this.disObj);
				}
				else if ( p < 0.333 && this.starsFull[1] )
				{
					ig.sound.playSound('sfxChime');
					ig.scene.starCount--;
					this.starsEmpty[1].visible = true;
					var sStar = this.starsFull.pop();
					createjs.Tween.get(sStar).to({ y : sStar.y + 100, alpha : 0 }, 600, createjs.Ease.backIn).call(this.disObj.removeChild, [sStar], this.disObj);
				}
				else if ( p <= 0 && this.starsFull[0] )
				{
					ig.sound.playSound('sfxChime');
					ig.scene.starCount--;
					this.starsEmpty[0].visible = true;
					var sStar = this.starsFull.pop();
					createjs.Tween.get(sStar).to({ y : sStar.y + 100, alpha : 0 }, 600, createjs.Ease.backIn).call(this.disObj.removeChild, [sStar], this.disObj);
				}
			}

			this.parent(e);
		},

		switchState : function(newStateId, currentStateId)
		{
			if ( this.name.indexOf('character-') > -1 )
			{
				if ( newStateId == ig.scene.stateId.intro )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).to({ alpha : 1 }, 800);
					createjs.Tween.get(this.pos).to({ x : this.toX * ig.system.scale }, 1200, createjs.Ease.quadOut);
				}
				else if ( newStateId == ig.scene.stateId.game )
				{
					createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200);
					createjs.Tween.get(this.pos).to({ x : this.toX * 2 * ig.system.scale }, 200).call(this.kill, null, this);
				}
			}
			else if ( this.name == 'speech-bubble' )
			{
				if ( newStateId == ig.scene.stateId.intro )
				{
					this.disObj.alpha = 0;
					createjs.Tween.get(this.disObj).wait(800).to({ alpha : 1 }, 600);
				}
				else if ( newStateId == ig.scene.stateId.game )
					createjs.Tween.get(this.disObj).to({ alpha : 0 }, 200).call(this.kill, null, this);
			}
			else if ( this.name == 'timer' )
			{
				if ( newStateId == ig.scene.stateId.game && currentStateId == ig.scene.stateId.intro )
				{
					this.pos.y -= this.size.y;
					createjs.Tween.get(this.pos).wait(200).to({ y : 64 }, 800, createjs.Ease.backOut);
				}
			}
			else if ( this.name == 'list' )
			{
				if ( newStateId == ig.scene.stateId.game )
				{
					if ( currentStateId == ig.scene.stateId.list )
						createjs.Tween.get(this.pos).to({ y : -90 }, 800, createjs.Ease.quadIn);

					else
					{
						this.pos.y += this.size.y;
						createjs.Tween.get(this.pos).wait(200).to({ y : -90 }, 800, createjs.Ease.backOut);
					}
				}
				else if ( newStateId == ig.scene.stateId.list )
					createjs.Tween.get(this.pos).to({ y : -550 }, 800, createjs.Ease.quadIn);

				else if ( newStateId == ig.scene.stateId.end )
					createjs.Tween.get(this.pos, { override : true }).to({ y : this.pos.y + this.size.y }, 600, createjs.Ease.backIn).call(this.kill, null, this);
			}
			else if ( this.name == 'end-note' )
			{
				if ( newStateId == ig.scene.stateId.end )
				{
					this.pos.y -= ig.system.height;
					createjs.Tween.get(this.pos).wait(600).to({ y : 0 }, 800, createjs.Ease.backOut);
				}
			}
		}
	})
});