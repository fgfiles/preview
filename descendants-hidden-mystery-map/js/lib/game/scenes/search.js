ig.module(
	'lib.game.scenes.search'
)
.requires(
	'lib.game.scenes.base',
	'lib.game.entities.map.btn',
	'lib.game.entities.map.fadeaway',
	'lib.game.entities.map.misc',
	'lib.game.entities.map.loader',
	'lib.game.entities.map.roller',
	'lib.game.entities.search.misc',
	'lib.game.entities.search.item',
	'lib.game.entities.search.field'
)
.defines(function()
{
	ig.Scene.Search = ig.Scene.Base.extend(
	{
		debug : false,

		fieldObj : null,

		gameTimer : new ig.Timer,
		hintTimer : new ig.Timer,
		itemNames : [],
		divWrapper : null,

		starCount : 3,

		showHint : false,

		init : function()
		{
			ig.merge(this.stateId,
			{ 
				list : 100,
				hintSetup : 101,
				hintUse : 102
			});

			// set the items
			var items = [];
			switch ( ig.game.temp.mapSelectedLevel )
			{
				// ben
				case 1 : 
				{
					items.push('backpack', 'ball', 'candle', 'crest', 'crown', 'glove', 'ring', 'shoes', 'tourneystick', 'stamp1');
					break;
				}
				// dorm
				case 2 :
				{
					items.push('brush', 'dog', 'makeup', 'mirror', 'pendant', 'sketchbook', 'sleepingspray', 'spraypaint', 'thread', 'stamp2');
					break;
				}
				// kitchen
				case 3 :
				{
					items.push('chocolatechips', 'cookie', 'cupcake', 'measuringcup', 'milk', 'purse', 'rollingpin', 'spoon', 'tray', 'stamp3');
					break;
				}
				// market
				case 4 :
				{
					items.push('apple', 'basket', 'clock', 'crystalball', 'kettle', 'rose', 'spinningwheel', 'sword', 'wand', 'stamp4');
					break;
				}
			}

			// add the field obj
			this.fieldObj = this.spawnEntity(ig.Entity.Search.Field, 0, 0, { img : ig.loader.getResult('map-search-bg-' + ig.game.temp.mapSelectedLevel), zIndex : -100 });

			// add them to the scene
			for ( var i = 0; i < items.length; i++ )
			{
				var ss = ig.loader.getSpriteSheet('map-search-item-level-' + ig.game.temp.mapSelectedLevel);
				var spr = new createjs.Sprite(ss, items[i]);
				spr.name = items[i];
				spr.index = i;

				var pos = ig.config.search.items[ items[i] ];
				spr.x = (pos[0] + (1426 * 0.5)) * ig.system.scale;
				spr.y = (pos[1] + (768 * 0.5)) * ig.system.scale;

				var sprGlow = new createjs.Sprite(ss, items[i] + '-glow');
				sprGlow.alpha = 0;
				sprGlow.name = items[i] + '-glow';
				sprGlow.index = i;

				sprGlow.x = spr.x;
				sprGlow.y = spr.y;

				this.itemNames.push( items[i] );

				this.fieldObj.disObj.addChild(spr, sprGlow);
			}

			// do the fancy fadeaway
			if ( ig.game.temp.mapRoller )
				// pass null and it will get the 'fieldObj' property
				this.spawnEntity(ig.Entity.Map.Roller, 0, 0, { img : null, toStateId : this.stateId.intro });
			else
				this.spawnEntity(ig.Entity.Map.Fadeaway, 0, 0, { toStateId : this.stateId.intro });

			// play the music!
			ig.sound.playMusics(['musicSearch' + ig.game.temp.mapSelectedLevel, 'musicAmbient' + ig.game.temp.mapSelectedLevel]);
		},

		update : function(e)
		{
			if ( this.currentStateId == ig.scene.stateId.game )
			{
				if ( !this.showHint && ((this.starCount === 0 && this.hintTimer.delta() === -this.hintTimer.target) || this.hintTimer.delta() > 0) )
					this.switchState(this.stateId.hintSetup);
			}

			if ( this.debug )
			{
				if ( ig.s )
				{
					var what = ig.input.state(ig.KEY.SHIFT) ? 'state' : 'released';
					if ( ig.input[what](ig.KEY.LEFT_ARROW) )
						ig.s.x--;
					if ( ig.input[what](ig.KEY.RIGHT_ARROW) )
						ig.s.x++;
					if ( ig.input[what](ig.KEY.UP_ARROW) )
						ig.s.y--;
					if ( ig.input[what](ig.KEY.DOWN_ARROW) )
						ig.s.y++;

					ig.s.gotoAndStop( ig.s.name + (ig.input.state(ig.KEY.SPACE) ? '-glow' : ''));

					ig.s.x = ~~ig.s.x;
					ig.s.y = ~~ig.s.y;
					// ig.log(ig.s.x - (1426 * 0.5), ig.s.y - (768 * 0.5));
				}

				if ( typeof ig.sn === 'undefined' )
					ig.sn = 0;

				if ( ig.input.released(ig.KEY.A) )
					ig.sn++;
				else if ( ig.input.released(ig.KEY.Z) )
					ig.sn--;

				ig.sn = ig.sn.limit(0, 9);
			}

			this.parent(e);
		},

		switchState : function(newStateId)
		{
			var w = ig.system.fixedWidth,
				h = ig.system.fixedHeight,
				w2 = w * 0.5,
				h2 = h * 0.5,
				currentStateId = this.currentStateId;

			// the speech
			if ( newStateId == this.stateId.intro )
			{
				// set the background to be the paper
				ig.$('#' + ig.config.gameWrapper).style.backgroundImage = 'url(' + ig.loader.getResult('paper-bg').src + ')';

				this.spawnEntity(ig.Entity.Map.Btn, 64, 64, { name : 'btn-travel-guide', stateIds : [this.stateId.transit, this.stateId.intro, this.stateId.game, this.stateId.list, this.stateId.end], screenAnchor : { x : 0, y : 0 }, zIndex : 1000 });
				this.spawnEntity(ig.Entity.Map.Btn, -64, 64, { name : 'btn-home', stateIds : [this.stateId.transit, this.stateId.intro, this.stateId.game, this.stateId.list, this.stateId.end], screenAnchor : { x : 1, y : 0 }, zIndex : 1000 });

				// spawn the characters
				var n = ig.game.temp.mapSelectedLevel;
				var cSearch = ig.config.search['level-' + n];
				for ( var i = 0; i < cSearch.characters.length; i++ )
				{
					var posX = cSearch.positions[i];
					var charObj = this.spawnEntity(ig.Entity.Search.Misc, posX < 0 ? w2 : -w2, 0, { name : 'character-' + cSearch.characters[i], zIndex : 100, toX : posX, localAnchor : { x : 0.5, y : 1 }, screenAnchor : { x : 0.5, y : 1 } });

					// TODO - for now, only one speech bubble?
					if ( i == 0 )
					{
						// speech bubble
						var bubbleObj = this.spawnEntity(ig.Entity.Search.Misc, posX < 0 ? posX + 100 : posX - 200, -charObj.size.y + 60, { name : 'speech-bubble', zIndex : 90, localAnchor : { x : posX > 0 ? 1 : 0, y : 0 }, screenAnchor : { x : 0.5, y : 1 } });

						// next button
						this.spawnEntity(ig.Entity.Map.Btn, bubbleObj.pos.x + ((posX < 0 ? 1 : -1) * (bubbleObj.size.x * 0.5)) + 28, bubbleObj.pos.y + bubbleObj.size.y - 12, { name : 'btn-next', zIndex : 91, stateIds : [this.stateId.intro], screenAnchor : { x : 0.5, y : 1 } })
					}
				}

				// switch the state
				createjs.Tween.get({}).wait(800).call(function()
				{
					this.currentStateId = newStateId
				}, null, this)
			}

			else if ( newStateId == this.stateId.game )
			{
				if ( currentStateId == this.stateId.intro )
				{
					this.gameTimer.target = ig.config.search['game-timer'];
					this.gameTimer.reset().pause();

					this.hintTimer.target = ig.config.search['hint-timer'];
					this.hintTimer.reset().pause();

					this.spawnEntity(ig.Entity.Search.Misc, 0, 0, { name : 'timer', screenAnchor : { x : 0.5, y : 0 }, zIndex : 1000 });
					this.spawnEntity(ig.Entity.Search.Misc, 0, 0, { name : 'list', localAnchor : { x : 0.5, y : 0 }, screenAnchor : { x : 0.5, y : 1 }, zIndex : 1000 });

					// 587 is the size of the 'list' entity
					this.spawnEntity(ig.Entity.Map.Btn, 0, 587 + 64, { name : 'btn-list', stateIds : [this.stateId.game, this.stateId.list], screenAnchor : { x : 0.5, y : 1 }, zIndex : 1001 });
				}

				// switch the state
				createjs.Tween.get({}).wait(800).call(function()
				{
					this.gameTimer.resume();
					this.currentStateId = newStateId;

				}, null, this)
			}

			// viewing the list
			else if ( newStateId == this.stateId.list )
			{
				createjs.Tween.get({}).wait(800).call(function()
				{
					this.currentStateId = newStateId
				}, null, this)
			}

			// user needs a hint
			else if ( newStateId == this.stateId.hintSetup )
			{
				this.showHint = true;
				this.hintTimer.reset().pause();

				this.spawnEntity(ig.Entity.Map.Btn, 64, -64, { name : 'btn-hint', stateIds : [this.stateId.game], screenAnchor : { x : 0, y : 1 }, zIndex : 1000 });

				createjs.Tween.get({}).wait(1).call(function()
				{
					this.currentStateId = this.stateId.game
				}, null, this)
			}

			// 
			else if ( newStateId == this.stateId.hintUse )
			{
				this.showHint = false;
				this.hintTimer.resume();

				var children = this.fieldObj.disObj.children;

				for ( var i = 1, child; child = children[i++]; )
					if ( child.name.indexOf('-glow') > -1 )
						createjs.Tween.get(child).to({ alpha : 1 }, 200).wait(ig.config.search.hintDisplayTimer * 1000).to({ alpha : 0 }, 600);

				createjs.Tween.get({}).wait(1).call(function()
				{
					this.currentStateId = this.stateId.game
				}, null, this)
			}

			// end of the game!
			else if ( newStateId == this.stateId.end )
			{
				ig.sound.playSound('sfxCryptic');

				// new record?
				var prevScore = parseInt(ig.storage.get('map-level-' + ig.game.temp.mapSelectedLevel) || 0);
				if ( this.starCount > prevScore )
					ig.storage.set('map-level-' + ig.game.temp.mapSelectedLevel, this.starCount);

				// new level unlocked?
				if ( ig.game.temp.mapSelectedLevel == parseInt(ig.storage.get('map-level')) )
				{
					ig.game.temp.mapShowNextLevel = true;
					ig.storage.set('map-level', parseInt(ig.storage.get('map-level')) + 1);					
				}

				// show the end note and button
				this.spawnEntity(ig.Entity.Search.Misc, 0, 0, { name : 'end-note', n : ig.game.temp.mapSelectedLevel });
				this.spawnEntity(ig.Entity.Map.Btn, 0, 180, { name : 'btn-next', stateIds : [this.stateId.end] });

				createjs.Tween.get({}).wait(800).call(function()
				{
					this.currentStateId = newStateId
				}, null, this)
			}

			// switching game?
			else if ( newStateId == this.stateId.otherGame )
			{
				this.gameTimer.pause();
				this.hintTimer.pause();
			}

			else if ( newStateId == this.stateId.cancel )
			{
				createjs.Tween.get({}).wait(400).call(function()
				{ 
					this.gameTimer.resume();

					if ( this.hintTimer.delta() !== -this.hintTimer.target )
						this.hintTimer.resume();

				}, null, this);
			}

			this.parent.apply(this, arguments);
		},

		checkOff : function(index)
		{
			var lObj = this.getEntityByName('list');
			var sText = lObj.disObj.getChildByName('text-' + index);

			var pMark = new createjs.Sprite(ig.loader.getSpriteSheet('map-search'), 'pencil-mark-' + Math.rand(1, 3));
			pMark.x = lObj.size.x * 0.5;
			pMark.y = sText.y - 8;
			pMark.regX = pMark.getBounds().width * 0.5;

			sText.alpha = 0.6;

			lObj.disObj.addChild(pMark);
		},

		foundItem : function(itemObj)
		{
			if ( this.isShowingFoundItem )
				return;

			ig.sound.playSound('sfxShinyBell');

			this.isShowingFoundItem = true;

			// stop timer
			if ( this.fieldObj.disObj.children.length === 3 ) // bitmap, and the 2 sprites (1 is the glowing object)
				this.gameTimer.pause();

			// mark it off
			this.checkOff(itemObj.index);

			// get the name
			var name = itemObj.name.split('-');
			if ( name[name.length - 1] === 'glow' )
				name.pop();
			name = name.join('-');

			// erase from the array
			this.itemNames.erase(name);

			// save it for the travel guide
			if ( name === 'basket' )
				ig.storage.set('itemfound-basket', true);
			else if ( name === 'rose' )
				ig.storage.set('itemfound-rose', true);
			else if ( name === 'sword' )
				ig.storage.set('itemfound-sword', true);
			else if ( name === 'wand' )
				ig.storage.set('itemfound-wand', true);
			else if ( name === 'spinningwheel' )
				ig.storage.set('itemfound-wheel', true);
			else if ( name === 'stamp1' )
				ig.storage.set('itemfound-stamp1', true);
			else if ( name === 'stamp2' )
				ig.storage.set('itemfound-stamp2', true);
			else if ( name === 'stamp3' )
				ig.storage.set('itemfound-stamp3', true);
			else if ( name === 'stamp4' )
				ig.storage.set('itemfound-stamp4', true);

			// get the sprites
			var spr = this.fieldObj.disObj.getChildByName(name);
			var sprGlow = this.fieldObj.disObj.getChildByName(name + '-glow');

			// fade out, then remove it
			createjs.Tween.get(spr, { override : true }).to({ alpha : 0 }, 600).call(this.fieldObj.disObj.removeChild, [spr], this.fieldObj.disObj);
			createjs.Tween.get(sprGlow, { override : true }).to({ alpha : 0 }, 600).call(this.fieldObj.disObj.removeChild, [sprGlow], this.fieldObj.disObj);

			// show the text
			var textObj = ig.scene.spawnEntity(ig.Entity.Search.Misc, 0, -232, { name : 'found-text', itemName : name, zIndex : 200 });
			textObj.disObj.alpha = 0;
			createjs.Tween.get(textObj.disObj).wait(200).to({ alpha : 1 }, 800).wait(1200).to({ alpha : 0 }, 600).call(textObj.kill, null, textObj);

			// show the big overlay
			var itemBigObj = ig.scene.spawnEntity(ig.Entity.Search.Item, 0, -ig.system.height, { name : name, type : 'big', zIndex : 100 });
			createjs.Tween.get(itemBigObj.pos).wait(200).to({ y : 42 }, 800, createjs.Ease.backOut).wait(1200).to({ y : ig.system.height * 0.5 }, 600, createjs.Ease.backIn);
			createjs.Tween.get(itemBigObj.scale).wait(2200).to({ x : 0.5, y : 0.5 }, 600);
			createjs.Tween.get(itemBigObj.disObj).wait(2200).to({ alpha : 0 }, 600).call(itemBigObj.kill, null, itemBigObj);

			// TODO - later!
			// do the sparkles
			// var sparklesSpr = new createjs.Sprite(ig.loader.getSpriteSheet('map-search'), 'sparkles');
			// var pt = sparklesSpr.globalToLocal(ig.input.mouse.x, ig.input.mouse.y);
			// sparklesSpr.scaleX = sparklesSpr.scaleY = sparklesSpr.alpha = 0;
			// sparklesSpr.rotation = Math.rand(0, 360);
			// sparklesSpr.x = pt.x;
			// sparklesSpr.y = pt.y;
			// sparklesSpr.regX = 93 * 0.5;
			// sparklesSpr.regY = 92 * 0.5;
			// this.fieldObj.disObj.addChild(sparklesSpr);
			// createjs.Tween.get(sparklesSpr).to({ alpha : 1, scaleX : 1, scaleY : 1 }, 200, createjs.Ease.quadOut).to({ y : sparklesSpr.y + 60, alpha : 0, scaleX : 1.2, scaleY : 1.2 }, 600, createjs.Ease.circIn);

			// set it back to false
			createjs.Tween.get(this).wait(2200).call(function()
			{ 
				this.isShowingFoundItem = false;

				// nothing left!
				if ( !this.itemNames.length )
					this.switchState(this.stateId.end);

			}, null, this);
		}
	})
});