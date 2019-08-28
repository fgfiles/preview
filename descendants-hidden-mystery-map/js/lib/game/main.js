window.gameStart = function()
{
	var x = setInterval(function()
	{
		// when the class is created
		if ( !ig.Game )
			return;

		clearInterval(x);

		// load the minimum to get going
		ig.loader.load('preloader-' + ig.config.playGame, function(status)
		{
			// sweet, done loading... 
			if ( status >= 1 && !ig.game )
			{
				var gWrapper = ig.$('#' + ig.config.gameWrapper);
				var error = '';

				// ... but we must do some checks to see if the user can play the game!

				// do cookies exist?
				var enabled = navigator.cookieEnabled ? true : false;

				if ( typeof navigator.cookieEnabled == 'undefined' && !enabled )
				{
					document.cookie = 'testcookie';
					enabled = document.cookie.indexOf('testcookie') != -1 ? true : false;
				}

				if ( !enabled )
					error = 'cookie';

				// now lets check if the browser can do canvas
				var c = ig.$('#' + ig.config.gameCanvas);
				if ( !(!!(c.getContext && c.getContext('2d'))) )
					error = 'canvas';

				// show the error, if it exists! (bummer)
				if ( error != '' )
				{
					var img = ig.$new('img');
					img.className = 'warning';
					img.src = ig.config[error == 'cookie' ? 'noCookiesPath' : 'noCanvasPath'];
					gWrapper.appendChild( img );
					return;
				}

				// start the game already!
				new ig.Game;
			}
		});

	}, 10);
};

ig.module(
	'lib.game.main'
)
.requires(
	'config',
	'strings',

	// 'lib.impact.debug',

	'lib.impact.system',
	'lib.impact.input',
	'lib.impact.timer',
	'lib.impact.storage',

	'lib.plugins.createjs.impact',

	'lib.game.loader',
	'lib.game.sound',

	'lib.game.scenes.book',
	'lib.game.scenes.photo',
	'lib.game.scenes.map',
	'lib.game.scenes.search'
)
.defines(function()
{
	// start the game glass

	ig.Game = ig.Class.extend(
	{
		temp : // for misc temp data from switching to game to game or scene to scene
		{
			firstPlay : true,
			mapRoller : true,
			mapSelectedLevel : 1,
			mapShowNextLevel : false
		},

		preloaderContainer : null,
		preloaderArc : null,
		preloaderLastStatus : 0, // this isn't the 'preloaders' status, its the game's loader status

		isFocused : true, // this helps the tick
		cursorPointer : false, // changes the cursor from a pointer to a hand

		// contains the stages/canvas
		stages : [],
		stageUpdateBG : 1, // just once, until the screen size changes... or a -1 for infinite
		imageSmoothingEnabled : true,

		init : function()
		{
			ig.game = this;

			ig.debug && ig.debug.log('v', ig.config.version);

			// load the sound
			if ( ig.device.mobile )
				document.addEventListener('touchstart', function firstTouch()
				{
					document.removeEventListener('touchstart', firstTouch, false);
					ig.loader.load('sound');

					var canvas = document.documentElement;
					if ( canvas.requestFullScreen )
						canvas.requestFullScreen();
					else if ( canvas.webkitRequestFullScreen )
						canvas.webkitRequestFullScreen();
					else if ( canvas.mozRequestFullScreen )
						canvas.mozRequestFullScreen();

					ig.system.onResizeWindow(true);

				}, false);
			else
				ig.loader.load('sound');
				

			// set up the game stages
			this.setupStages();

			// set the input
			ig.input = new ig.Input(this.stages[this.stages.length - 1]);
			ig.input.bind(ig.KEY.MOUSE1);
			ig.input.bind(ig.KEY.MWHEEL_UP);
			ig.input.bind(ig.KEY.MWHEEL_DOWN);
			// ig.input.bind(ig.KEY.LEFT_ARROW);
			// ig.input.bind(ig.KEY.RIGHT_ARROW);
			// ig.input.bind(ig.KEY.UP_ARROW);
			// ig.input.bind(ig.KEY.DOWN_ARROW);
			// ig.input.bind(ig.KEY.SHIFT);
			// ig.input.bind(ig.KEY.SPACE);
			// ig.input.bind(ig.KEY.A);
			// ig.input.bind(ig.KEY.Z);

			// we need to update the bg canvas
			window.addEventListener('resize', this.onResizeWindow.bind(this), false);
			window.addEventListener('orientationchange', this.onResizeWindow.bind(this), false);
			window.addEventListener('pageshow', this.onPageShow.bind(this), false);
			window.addEventListener('pagehide', this.onPageHide.bind(this), false);
			window.addEventListener('focus', this.onPageShow.bind(this), false);
			window.addEventListener('blur', this.onPageHide.bind(this), false);

			// start the loop in request animation frame mode
			createjs.Ticker.timingMode = createjs.Ticker.RAF;
			createjs.Ticker.on('tick', this.run, this);

			ig.storage.prefix = 'descendants-';

			// we need to know how many levels the user has unlocked, they MUST have at least one!
			if ( isNaN(parseInt(ig.storage.get('map-level'))) )
				ig.storage.set('map-level', 1);

			// start with the title scene
			this.switchGame(ig.config.playGame == 'book' ? ig.Scene.Book : ig.Scene.Map);
			// this.switchGame(ig.Scene.Search);
		},

		run : function(e)
		{
			if ( !this.isFocused )
			{
				e.delta = 0;
				return;
			}

			// continue

			ig.Timer.step();

			// update the scene, it will update the entities
			ig.scene && ig.scene.update(e);

			// now update the stage, it will do the drawing of the display objects

			// updates the bg canvas when needed
			if ( this.stageUpdateBG == -1 || this.stageUpdateBG > 0 )
			{
				if ( this.stages[0] instanceof createjs.Stage )
					this.stages[0].update(e);

				if ( this.stageUpdateBG > 0 )
					this.stageUpdateBG--;
			}

			// update the rest of the canvases
			for ( var i = 1; i < this.stages.length; i++ )
				this.stages[i] instanceof createjs.Stage && this.stages[i].update(e);

			// now all the scene to do its drawing
			ig.scene && ig.scene.draw();

			// preloader drawing?
			this.preloaderContainer && this.preloaderUpdate();

			// wrong orientation?
			ig.system.isWrongOrientation && this.drawOrientation();

			// debug info
			ig.debug && ig.debug.update(e);

			// just like in impact
			ig.input && ig.input.clearPressed();

			// change the mouse cursor
			if ( !ig.device.mobile )
				document.body.style.cursor = this.cursorPointer ? 'pointer' : 'default';
			this.cursorPointer = false;
		},

		drawOrientation : function()
		{
			var img = ig.loader.getResult('orientation'),
				ctx = this.stages[this.stages.length - 1].canvas.getContext('2d'),
				w = ig.system.fixedWidth,
				h = ig.system.fixedHeight,
				s = ig.system.scale;

			ctx.save();

			if ( s != 1 )
				ctx.scale(s, s);

			ctx.fillStyle = '#000';
			ctx.fillRect(-2, -2, w + 4, h + 4);
			ctx.drawImage(img, w * 0.5 - img.width * 0.5, h * 0.5 - img.height * 0.5);
			ctx.restore();
		},

		switchScene : function(sceneObj)
		{
			// change the state
			ig.scene && ig.scene.switchState(-1);

			// get the arguments passed
			var args = Array.prototype.slice.call(arguments);
			var params = args.slice(1)[0];

			// what are we loading?
			var loadWhat = '';

			// what are we going to load?
			if ( sceneObj == ig.Scene.Search )
				loadWhat = 'map-search';
			if ( sceneObj == ig.Scene.Map )
				loadWhat = 'map';

			// no need to do the roll effect
			this.temp.mapRoller = false;

			var loaderObj;

			if ( ig.scene instanceof ig.Scene.Map || ig.scene instanceof ig.Scene.Search )
				loaderObj = ig.scene.spawnEntity(ig.Entity.Map.Loader, 0, 0, { alpha : 0, zIndex : Infinity });

			var x = setInterval(function()
			{
				if ( loaderObj && loaderObj.isReady() )
				{
					clearInterval(x);

					new sceneObj(params);

					// add the loader back it, it will fade out
					if ( ig.scene instanceof ig.Scene.Map || ig.scene instanceof ig.Scene.Search )
						ig.scene.spawnEntity(ig.Entity.Map.Loader, 0, 0, { alpha : 1, zIndex : Infinity });
				}
				else if ( ig.scene instanceof ig.Scene.Book || ig.scene instanceof ig.Scene.Photo )
				{
					clearInterval(x);

					new sceneObj(params);
				}
			}, 100);

			// call the loader
			ig.loader.status = 0;
			createjs.Tween.get({}).wait(1200).call(ig.loader.load, [loadWhat], ig.loader);
		},

		switchGame : function(sceneObj)
		{
			if ( this.preloaderContainer )
				return;

			// change current scene state
			ig.scene && ig.scene.switchState(-1);

			// get the arguments passed
			var args = Array.prototype.slice.call(arguments);
			var params = args.slice(1)[0];

			// TODO
			// fade out existing audio
			// var vol = { volume : createjs.Sound.getVolume() };
			// createjs.Tween.get({}).to({  })

			// what are we loading?
			var loadWhat = '';

			// what are we going to load?
			if ( sceneObj == ig.Scene.Map || sceneObj == ig.Scene.Search )
				loadWhat = 'map';
			else if ( sceneObj == ig.Scene.Book )
				loadWhat = 'book';

			// we need to do the roll effect
			this.temp.mapRoller = true;

			// set the status back to zero
			ig.loader.status = 0;
			this.preloaderLastStatus = 0;

			// create the preloader
			this.preloaderContainer = new createjs.Container;
			this.preloaderContainer.zIndex = Infinity;

			var scale = ig.system.scale;
			var w2 = 1426 * 0.5;
			var h2 = 768 * 0.5;

			// fade in bg
			var bg = new createjs.Bitmap(ig.loader.getResult(loadWhat + '-bg'));
			bg.alpha = 0;
			this.preloaderContainer.addChild(bg);
			createjs.Tween.get(bg).to({ alpha : 1 }, 800);

			// empty ring
			var ringEmpty = new createjs.Sprite(ig.loader.getSpriteSheet('preloader'), 'ring-empty');
			ringEmpty.x = w2 * scale;
			ringEmpty.y = 768 * 0.7 * scale;
			ringEmpty.regX = 250 * 0.5 * scale;
			ringEmpty.regY = 256 * 0.5 * scale;
			ringEmpty.scaleX = ringEmpty.scaleY = 0;
			this.preloaderContainer.addChild(ringEmpty);
			createjs.Tween.get(ringEmpty).wait(800).to({ scaleX : 1, scaleY : 1 }, 600, createjs.Ease.backOut);

			// full ring
			var ringFull = new createjs.Sprite(ig.loader.getSpriteSheet('preloader'), 'ring-full');
			ringFull.x = w2 * scale;
			ringFull.y = 768 * 0.7 * scale;
			ringFull.regX = 250 * 0.5 * scale;
			ringFull.regY = 256 * 0.5 * scale;
			ringFull.scaleX = ringFull.scaleY = 0;
			this.preloaderContainer.addChild(ringFull);
			createjs.Tween.get(ringFull).wait(800).to({ scaleX : 1, scaleY : 1 }, 600, createjs.Ease.backOut);

			// the mask arc!
			this.preloaderArc = new createjs.Shape;
			this.preloaderArc.x = w2 * scale;
			this.preloaderArc.y = 768 * 0.7 * scale;
			this.preloaderArc.rotation = -90;
			ringFull.mask = this.preloaderArc;

			// now the apple OR the play button
			var apple = new createjs.Sprite(ig.loader.getSpriteSheet('preloader'), ig.device.mobile && this.temp.firstPlay ? 'play' : 'apple');
			apple.x = w2 * scale;
			apple.y = 768 * 0.7 * scale;
			apple.regX = 250 * 0.5 * scale;
			apple.regY = 256 * 0.5 * scale;
			apple.scaleX = apple.scaleY = 0;
			this.preloaderContainer.addChild(apple);
			createjs.Tween.get(apple).wait(600).to({ scaleX : 1, scaleY : 1 }, 600, createjs.Ease.backOut);

			// the characters
			if ( sceneObj == ig.Scene.Map || sceneObj == ig.Scene.Search )
			{
				var char1 = new createjs.Sprite(ig.loader.getSpriteSheet('preloader-map'), 'carlos');
				char1.alpha = 0;
				char1.x = -203 * 0.5;
				char1.y = 768;
				char1.regX = 203 * 0.5 * scale;
				char1.regY = 472 * scale;
				this.preloaderContainer.addChild(char1);
				createjs.Tween.get(char1).wait(200).to({ x : (w2 - 420) * scale, alpha : 1 }, 600, createjs.Ease.quadOut);

				var char2 = new createjs.Sprite(ig.loader.getSpriteSheet('preloader-map'), 'jay');
				char2.alpha = 0;
				char2.x = -273 * 0.5;
				char2.y = 768;
				char2.regX = 273 * 0.5 * scale;
				char2.regY = 490 * scale;
				this.preloaderContainer.addChild(char2);
				createjs.Tween.get(char2).wait(400).to({ x : (w2 - 270) * scale, alpha : 1 }, 600, createjs.Ease.quadOut);

				var char3 = new createjs.Sprite(ig.loader.getSpriteSheet('preloader-map'), 'evie');
				char3.alpha = 0;
				char3.x = ig.system.width + (333 * 0.5);
				char3.y = 768;
				char3.regX = 333 * 0.5 * scale;
				char3.regY = 495 * scale;
				this.preloaderContainer.addChild(char3);
				createjs.Tween.get(char3).wait(200).to({ x : (w2 + 420) * scale, alpha : 1 }, 600, createjs.Ease.quadOut);

				var char4 = new createjs.Sprite(ig.loader.getSpriteSheet('preloader-map'), 'mal');
				char4.alpha = 0;
				char4.x = ig.system.width + (273 * 0.5);
				char4.y = 768;
				char4.regX = 273 * 0.5 * scale;
				char4.regY = 472 * scale;
				this.preloaderContainer.addChild(char4);
				createjs.Tween.get(char4).wait(400).to({ x : (w2 + 270) * scale, alpha : 1 }, 600, createjs.Ease.quadOut);

				var crest = new createjs.Bitmap(ig.loader.getResult('auradon-crest'));
				crest.alpha = 0;
				crest.x = w2 * scale;
				crest.y = 105 * scale;
				crest.regX = 146 * 0.5 * scale;
				crest.regY = 153 * 0.5 * scale;
				this.preloaderContainer.addChild(crest);
				createjs.Tween.get(crest).wait(600).to({ alpha : 1 }, 600);

				var title = new createjs.Bitmap(ig.loader.getResult('title-map'));
				title.alpha = 0;
				title.x = (w2 + 18) * scale;
				title.y = 272 * scale;
				title.regX = 688 * 0.5 * scale;
				title.regY = 166 * 0.5 * scale;
				this.preloaderContainer.addChild(title);
				createjs.Tween.get(title).wait(600).to({ alpha : 1 }, 600);
			}
			else
			{
				var char1 = new createjs.Sprite(ig.loader.getSpriteSheet('preloader-book'), 'boy');
				char1.alpha = 0;
				char1.x = -428 * 0.5;
				char1.y = 768;
				char1.regX = 428 * 0.5 * scale;
				char1.regY = 524 * scale;
				this.preloaderContainer.addChild(char1);
				createjs.Tween.get(char1).wait(200).to({ x : (w2 - 330) * scale, alpha : 1 }, 600, createjs.Ease.quadOut);

				var char2 = new createjs.Sprite(ig.loader.getSpriteSheet('preloader-book'), 'girl');
				char2.alpha = 0;
				char2.x = ig.system.width + (400 * 0.5);
				char2.y = 768;
				char2.regX = 400 * 0.5 * scale;
				char2.regY = 482 * scale;
				this.preloaderContainer.addChild(char2);
				createjs.Tween.get(char2).wait(200).to({ x : (w2 + 330) * scale, alpha : 1 }, 600, createjs.Ease.quadOut);

				var banner = new createjs.Bitmap(ig.loader.getResult('auradon-banner'));
				banner.alpha = 0;
				banner.x = w2 * scale;
				banner.y = 130 * scale;
				banner.regX = 757 * 0.5 * scale;
				banner.regY = 158 * 0.5 * scale;
				this.preloaderContainer.addChild(banner);
				createjs.Tween.get(banner).wait(600).to({ alpha : 1 }, 600);

				var title = new createjs.Bitmap(ig.loader.getResult('title-book'));
				title.alpha = 0;
				title.x = w2 * scale;
				title.y = 250 * scale;
				title.regX = 555 * 0.5 * scale;
				title.regY = 69 * 0.5 * scale;
				this.preloaderContainer.addChild(title);
				createjs.Tween.get(title).wait(600).to({ alpha : 1 }, 600);
			}

			// add it to the stage
			this.stages[0].addChild(this.preloaderContainer);

			// lets put this in a loader caller
			this.preloaderLoadCaller = createjs.Tween.get({}).wait(1600).call(ig.loader.load, [loadWhat], ig.loader);

			// we need to call this loader again so it loads the search assets
			if ( sceneObj == ig.Scene.Search )
				this.preloaderLoadCaller.call(ig.loader.load, ['map-search'], ig.loader);

			if ( ig.device.mobile && this.temp.firstPlay )
				this.preloaderLoadCaller.setPaused(true);

			// this interval is to wait for the loading to finish
			var x = setInterval(function()
			{
				// this was set to 1 via preloaderUpdate function
				if ( ig.game.preloaderLastStatus >= 1 )
				{
					clearInterval(x);

					// set the gameWrapper dom with the background
					ig.$('#' + ig.config.gameWrapper).style.backgroundImage = 'url(' + ig.loader.getResult(loadWhat + '-bg').src + ')';

					// start the new scene/game, passing the params
					new sceneObj(params);

					// setting preloaderContainer to null will stop this from excuting the next tick
					var con = ig.game.preloaderContainer;
					ig.game.preloaderContainer = null;

					// the rings first
					createjs.Tween.get(con.getChildAt(1)).to({ scaleX : 0, scaleY : 0 }, 600, createjs.Ease.backIn);
					createjs.Tween.get(con.getChildAt(2)).to({ scaleX : 0, scaleY : 0 }, 600, createjs.Ease.backIn);

					// now the aple
					createjs.Tween.get(con.getChildAt(3)).wait(200).to({ alpha : 0, scaleX : 0, scaleY : 0 }, 600, createjs.Ease.backIn);

					if ( sceneObj == ig.Scene.Map || sceneObj == ig.Scene.Search )
					{
						createjs.Tween.get(char1).to({ x : -203 * 0.5, alpha : 0 }, 600, createjs.Ease.quadIn);
						createjs.Tween.get(char2).wait(200).to({ x : -273 * 0.5, alpha : 0 }, 600, createjs.Ease.quadIn);
						createjs.Tween.get(char3).to({ x : ig.system.width + (333 * 0.5), alpha : 0 }, 600, createjs.Ease.quadIn);
						createjs.Tween.get(char4).wait(200).to({ x : ig.system.width + (273 * 0.5), alpha : 0 }, 600, createjs.Ease.quadIn);

						createjs.Tween.get(crest).to({ alpha : 0 }, 600, createjs.Ease.quadIn);
						createjs.Tween.get(title).to({ alpha : 0 }, 600, createjs.Ease.quadIn);
					}
					else
					{
						createjs.Tween.get(char1).to({ x : -428 * 0.5, alpha : 0 }, 600, createjs.Ease.quadIn);
						createjs.Tween.get(char2).to({ x : ig.system.width + (400 * 0.5), alpha : 0 }, 600, createjs.Ease.quadIn);

						createjs.Tween.get(banner).to({ alpha : 0 }, 600, createjs.Ease.quadIn);
						createjs.Tween.get(title).to({ alpha : 0 }, 600, createjs.Ease.quadIn);
					}

					// remove the container
					createjs.Tween.get({}).wait(800).call(ig.game.stages[0].removeChild, [con], ig.game.stages[0]);
				}
			}, 100);
		},

		preloaderUpdate : function()
		{
			// this position check is because of the first touch on mobile device
			this.preloaderLastStatus = this.preloaderLoadCaller.position == this.preloaderLoadCaller.duration ? Math.lerp(this.preloaderLastStatus, ig.loader.status, 0.06) : 0;

			// done?
			if ( ig.loader.status >= 1 && this.preloaderLastStatus >= 0.99 )
				this.preloaderLastStatus = 1;

			this.preloaderArc.graphics.f('#000').moveTo(0, 0).arc(0, 0, 900, 0, (Math.PI * 2) * this.preloaderLastStatus);

			var scale = ig.system.scale;
			this.preloaderContainer.x = (ig.system.width * 0.5) - (1426 * 0.5 * scale);
			this.preloaderContainer.y = (ig.system.height * 0.5) - (768 * 0.5 * scale);

			// check if the mouse coordinates are over the play button
			// this if statement is here because we the user is on mobile and we are showing a play button instead of the apple graphic
			// once the user touches/taps the play button we continue with the loader (and with that the first touch ;)
			if ( ig.device.mobile && this.temp.firstPlay )
			{
				var btnPlay = this.preloaderContainer.getChildAt(3),
					rec = btnPlay.getTransformedBounds(),
					mx = ig.input.mouse.x,
					my = ig.input.mouse.y;

				if ( btnPlay.scaleX >= 1 )
				{
					var dx = mx - (this.preloaderContainer.x + (ig.system.width * 0.5) + 125),// rec.x + (rec.width * 0.5)),
						dy = my - ((ig.system.height * 0.5) + 125),//rec.y + (rec.height * 0.5)),
						r = 125,
						inBounds = dx * dx + dy * dy <= r * r;

					// if ( ig.device.mobile && !(ig.input.pressed(ig.KEY.MOUSE1) || ig.input.state(ig.KEY.MOUSE1)) )
					// 	inBounds = false;

					if ( inBounds )
						this.cursorPointer = true;

					// mouseover/out scale
					btnPlay.scaleX = btnPlay.scaleY = btnPlay.scaleX.lerp(inBounds ? 1.2 : 1, 0.2);

					// 
					if ( ig.input.released(ig.KEY.MOUSE1) && inBounds )
					{
						this.temp.firstPlay = false;
						this.preloaderLoadCaller.setPosition(9999);

						createjs.Tween.get(btnPlay)
							.to({ scaleX : 0 }, 200, createjs.Ease.backIn)
							.call(function()
							{
								this.preloaderContainer.removeChild(btnPlay);

								var apple = new createjs.Sprite(ig.loader.getSpriteSheet('preloader'), 'apple');
								apple.x = btnPlay.x;
								apple.y = btnPlay.y;
								apple.regX = btnPlay.regX;
								apple.regY = btnPlay.regX;
								apple.scaleX = 0;
								this.preloaderContainer.addChildAt(apple, 3);

								createjs.Tween.get(apple).to({ scaleX : 1 }, 200, createjs.Ease.quadOut);

							}, null, this)
					}
				}
			}
		},

		// lets make sure it is updated the next update/tick
		onResizeWindow : function()
		{
			if ( this.stageUpdateBG == 0 )
				this.stageUpdateBG = 1;
		},

		onPageShow : function()
		{
			createjs.Sound.setVolume(1);
			this.isFocused = true;
		},

		onPageHide : function()
		{
			createjs.Sound.setVolume(0);
			this.isFocused = false;
		},

		setupStages : function()
		{
			var gameWrapper = ig.$('#' + ig.config.gameWrapper);
			var canvases = gameWrapper ? gameWrapper.getElementsByTagName('canvas') : [];
			var attrName = 'data-render-type';

			// add a canvas if one isn't present
			if ( !canvases.length )
			{
				// for ejecta
				if ( ig.$('#canvas') )
					canvases = [ ig.$('#canvas') ];
				else
				{
					canvases = [ ig.$new('canvas') ];
					gameWrapper.appendChild( canvases[0] );
				}

				ig.system.onResizeWindow(true);
				this.stageUpdateBG = -1;
			}

			for ( var i = 0, canvas; canvas = canvases[i++]; )
			{
				var attrValue = canvas.getAttribute ? canvas.getAttribute(attrName) || '' : '';

				// createjs, standard
				if ( !attrValue || attrValue.toLowerCase() == 'createjs' )
				{
					var stage = new createjs.Stage(canvas);

					this.stages.push(stage);

					// enable touch
					createjs.Touch.enable(stage);

					// no need because the first canvas is the background
					if ( this.stages.length == 1 && canvases.length > 1 )
						stage.autoClear = false;
				}

				// for threejs
				else if ( attrValue == 'threejs' )
					this.stages.push(canvas);
			}

			// copy the events down the chain, good for mobile
			for ( i = this.stages.length - 1; i > -1; i-- )
				if ( i > 0 && this.stages[i] instanceof createjs.Stage && this.stages[i - 1] instanceof createjs.Stage )
					this.stages[i].nextStage = this.stages[i - 1];

			// make the scale mode
			for ( i = 0; i < this.stages.length; i++ )
			{
				var ctx = this.stages[i].canvas.getContext('2d');
				if ( ctx )
				{
					var attr = 'imageSmoothingEnabled';
					var uc = attr.charAt(0).toUpperCase() + attr.substr(1);
					ctx[attr] = ctx['ms' + uc] = ctx['moz' + uc] = ctx['webkit' + uc] = ctx['o' + uc] = this.imageSmoothingEnabled;
				}
			}

			// only one?
			if ( this.stages.length == 1 )
				this.stageUpdateBG = -1;
		}
	})
});