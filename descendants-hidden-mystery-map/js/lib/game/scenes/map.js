ig.module(
	'lib.game.scenes.map'
)
.requires(
	'lib.game.scenes.base',
	'lib.game.entities.map.btn',
	'lib.game.entities.map.fadeaway',
	'lib.game.entities.map.misc',
	'lib.game.entities.map.loader',
	'lib.game.entities.map.roller'
)
.defines(function()
{
	ig.Scene.Map = ig.Scene.Base.extend(
	{
		debug : false,

		itemObjs : [],

		extraElement : null,
		scale : 1,

		levelCount : 4,
		showedNextLevel : false,

		init : function()
		{
			// add this state
			ig.merge(this.stateId, { print : 100 });

			// apply resize event, then call it to make it fit the screen
			this.boundOnResizeWindow = this.onResizeWindow.bind(this);
			window.addEventListener('resize', this.boundOnResizeWindow, false);

			// the number we are on
			var n = parseInt(ig.storage.get('map-level'));

			// this is our game wrapper
			var gWrapper = ig.$('#' + ig.config.gameWrapper);

			var img;

			if ( ig.game.temp.mapShowNextLevel )
			{
				ig.game.temp.mapShowNextLevel = false;
				this.showedNextLevel = true;

				img = ig.loader.getResult('map-bg-' + (n - 2));
				gWrapper.style.backgroundImage = 'url(' + img.src + ')';

				this.extraElement = ig.$new('div');
				this.extraElement.style.backgroundImage = 'url(' + ig.loader.getResult('map-bg-' + (n - 1)).src + ')';
				this.extraElement.style.backgroundPosition = 'center';
				this.extraElement.style.backgroundSize = 'auto 100%';
				this.extraElement.style.backgroundRepeat = 'no-repeat';
				this.extraElement.style.position = 'absolute';
				this.extraElement.style.transition = this.extraElement.style['-webkit-transition'] = this.extraElement.style['-moz-transition'] = this.extraElement.style['-ms-transition'] = this.extraElement.style['-o-transition'] = 'opacity 0.8s'
				this.extraElement.style.opacity = 0;

				gWrapper.insertBefore(this.extraElement, gWrapper.firstChild);

				this.onResizeWindow();

				// wait a bit for the paper-overlay to finish its transition, then when we set the opacity to 1, it will do its own transition/fade in
				createjs.Tween.get(this.extraElement.style).wait(2000).call(function() { this.extraElement.style.opacity = 1 }, null, this);

				// after all that, set the background image as the new one and destroy the one we just creatd: extraElement
				createjs.Tween.get({}).wait(2800).call(function()
				{
					gWrapper.style.backgroundImage = this.extraElement.style.backgroundImage;
					gWrapper.removeChild(this.extraElement);
					this.extraElement = null;

				}, null, this);
			}
			else
			{
				img = ig.loader.getResult('map-bg-' + (n - 1));

				if ( !ig.game.temp.mapRoller )
					gWrapper.style.backgroundImage = 'url(' + img.src + ')';
			}

			// paper overlay to fade in the map
			// the paper overlay will switch the state when done!
			if ( ig.game.temp.mapRoller )
				this.spawnEntity(ig.Entity.Map.Roller, 0, 0, { img : img, toStateId : this.stateId.game });
			else
				this.spawnEntity(ig.Entity.Map.Fadeaway, 0, 0, { toStateId : this.stateId.game });

			// play the music!
			createjs.Tween.get({}).wait(600).call(ig.sound.playMusic, ['musicMap'], ig.sound);
		},

		update : function(e)
		{
			if ( this.debug && ig.s )
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

				ig.s.x = ~~ig.s.x;
				ig.s.y = ~~ig.s.y;
				// ig.log(ig.s.x, ig.s.y);
			}

			this.parent(e)
		},

		dispose : function()
		{
			window.removeEventListener('resize', this.boundOnResizeWindow, false);
			this.parent();
		},

		switchState : function(newStateId)
		{
			var w = ig.system.fixedWidth,
				h = ig.system.fixedHeight,
				w2 = w * 0.5,
				h2 = h * 0.5,
				currentStateId = this.currentStateId;

			// go to the game
			if ( newStateId == this.stateId.game )
			{
				if ( this.showedNextLevel )
				{
					this.showedNextLevel = false;

					// show the print note
					if ( parseInt(ig.storage.get('map-level')) === parseInt(this.levelCount + 1) && ig.config.enablePrint )
					{
						this.switchState(this.stateId.print);
						return;
					}
				}

				this.spawnEntity(ig.Entity.Map.Btn, 64, 64, { name : 'btn-travel-guide', stateIds : [this.stateId.game], screenAnchor : { x : 0, y : 0 } });
				this.spawnEntity(ig.Entity.Map.Misc, 0, 0, { name : 'crest', screenAnchor : { x : 0.5, y : 1 } });

				if ( ig.config.enablePrint && parseInt(ig.storage.get('map-level')) === parseInt(this.levelCount + 1) )
					this.spawnEntity(ig.Entity.Map.Btn, 64, -64, { name : 'btn-print', stateIds : [this.stateId.game], screenAnchor : { x : 0, y : 1 } });

				// add the markers
				for ( var i = 0; i < parseInt(ig.storage.get('map-level')); i++ )
				{
					var marker = ig.config.map['marker-' + (i + 1)];

					if ( !marker )
						break;

					// the ring
					var ringObj = this.spawnEntity(ig.Entity.Map.Btn, marker.x, marker.y, { name : 'ring', stateIds : [this.stateId.game], n : i + 1 });

					if ( this.debug && i == 3 )
						ig.s = ringObj.pos;

					// the stars
					this.spawnEntity(ig.Entity.Map.Misc, marker.x, marker.y + (i == 1 ? -68 : 68), { name : '3-stars', n : i + 1 });
				}

				// switch the state
				createjs.Tween.get({}).wait(800).call(function()
				{
					this.currentStateId = newStateId
				}, null, this)
			}

			else if ( newStateId == this.stateId.print )
			{
				// show the end note and button
				this.spawnEntity(ig.Entity.Map.Misc, 0, 0, { name : 'print-note', zIndex : 1000 });
				this.spawnEntity(ig.Entity.Map.Btn, 0, 180, { name : 'btn-print', zIndex : 1001, stateIds : [this.stateId.print] });
				this.spawnEntity(ig.Entity.Map.Btn, 130, -175, { name : 'btn-x', zIndex : 1001, stateIds : [this.stateId.print] });

				createjs.Tween.get({}).wait(800).call(function()
				{
					this.currentStateId = newStateId
				}, null, this);
			}

			// call the parent
			this.parent.apply(this, arguments);
		},

		onResizeWindow : function()
		{
			var gWrapper = ig.$('#' + ig.config.gameWrapper);

			if ( this.extraElement )
			{
				this.extraElement.style.width = gWrapper.style.width;
				this.extraElement.style.height = gWrapper.style.height;
			}
		}
	})
});