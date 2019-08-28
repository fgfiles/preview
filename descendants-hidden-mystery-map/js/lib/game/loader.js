ig.module(
	'lib.game.loader'
)
.requires(
	'lib.plugins.createjs.preload',
	'lib.plugins.createjs.sound'
)
.defines(function()
{
	ig.Loader = ig.Class.extend(
	{
		loadCallback : null,
		loadQueue : null,
		status : 0,

		spriteSheet : {},
		loadedObjects : {},
		// isComplete : false,

		init : function()
		{
			this.setupLoadQueue();

			// this.loadQueue = new createjs.LoadQueue(false);
			// this.loadQueue.setMaxConnections(1);
			// this.loadQueue.installPlugin(createjs.Sound);
			// this.loadQueue.on('fileload', this.fileLoadComplete, this);

			// createjs.FlashPlugin.swfPath = ig.prefix + 'media/swf/';
			// createjs.Sound.registerPlugins([ createjs.WebAudioPlugin, createjs.FlashPlugin, createjs.HTMLAudioPlugin ]);

			createjs.Sound.registerPlugins([ createjs.WebAudioPlugin, createjs.HTMLAudioPlugin ]);
			createjs.Sound.alternateExtensions = ['mp3', 'ogg'];
			createjs.Sound.EXTENSION_MAP.mp3 = 'mpeg';

			if ( ig.device.mobile && createjs.WebAudioPlugin.isSupported() )
				document.addEventListener('touchstart', function firstTouch()
				{
					document.removeEventListener('touchstart', firstTouch, false);
					createjs.WebAudioPlugin.playEmptySound();

				}, false);
		},

		setupLoadQueue : function()
		{
			if ( !this.loadQueue )
			{
				this.status = 0;
				this.isComplete = false;

				this.loadQueue = new createjs.LoadQueue(false);
				this.loadQueue.setMaxConnections(8);
				this.loadQueue.installPlugin(createjs.Sound);
				this.loadQueue.on('fileload', this.fileLoadComplete, this);
				this.loadQueue.on('complete', function()
				{
					this.status = 1;
					// this.isComplete = true;
					this.loadQueue = null;
				}, this);
			}
		},

		load : function(what, callback)
		{
			this.setupLoadQueue();

			// load callback
			this.loadCallback = callback || null;

			var manifest = [];

			// must needed
			manifest.push(
				{ id : 'preloader-sprites', src : 'media/images/{scale}/preloader/sprites.png' },
				{ id : 'preloader-atlas', src: 'js/lib/game/data/preloader.json' },
				{ id : 'orientation', src : 'media/images/orientation_' + (ig.device.mobile ? 'mobile' : 'tablet') + '.jpg' }
			);

			// continue with the rest...

			var preloaderMap = [
				{ id : 'title-map', src : 'media/images/localized/hidden-mystery-map.png' },
				{ id : 'auradon-crest', src : 'media/images/localized/auradon-crest.png' },
				{ id : 'map-bg', src : 'media/images/{scale}/preloader/bg-map.jpg' },
				{ id : 'paper-bg', src : 'media/images/{scale}/preloader/bg-paper.jpg' },
				{ id : 'preloader-map-sprites', src : 'media/images/{scale}/preloader/sprites-map.png' },
				{ id : 'preloader-map-atlas', src: 'js/lib/game/data/preloader-map.json' },

				{ id : 'sfx-roller', src : 'media/audio/sfx/033000173-pirate-treasure-map-03.mp3' },
				{ id : 'sfx-whoosh', src : 'media/audio/sfx/006224189-organic-whoosh-25.mp3' }
			];

			var preloaderBook = [
				{ id : 'title-book', src : 'media/images/localized/travel-guide.png' },
				{ id : 'auradon-banner', src : 'media/images/localized/auradon-banner.png' },
				{ id : 'book-bg', src : 'media/images/{scale}/preloader/bg-book.jpg' },
				{ id : 'preloader-book-sprites', src : 'media/images/{scale}/preloader/sprites-book.png' },
				{ id : 'preloader-book-atlas', src: 'js/lib/game/data/preloader-book.json' }
			];

			if ( what == 'preloader-map' )
				manifest = manifest.concat(preloaderMap);
			else if ( what.indexOf('preloader-') == -1 )
				manifest = manifest.concat(preloaderBook);

			if ( what == 'preloader-book' )
				manifest = manifest.concat(preloaderBook);
			else if ( what.indexOf('preloader-') == -1 )
				manifest = manifest.concat(preloaderMap);

			if ( what == 'map' )
			{
				manifest.push(
					{ id : 'map-sprites', src : 'media/images/{scale}/map/map/sprites.png' },
					{ id : 'map-atlas', src : 'js/lib/game/data/map/map.json' },

					{ id : 'map-loader-sprites', src : 'media/images/{scale}/map/loader/sprites.png' },
					{ id : 'map-loader-atlas', src : 'js/lib/game/data/map/loader.json' },

					{ id : 'map-crest', src : 'media/images/localized/map-crest.png' },

					{ id : 'music-map', src : 'media/audio/music/HM_4m64S_Ladamus-Te-Overlay.mp3' },
					{ id : 'sfx-ding', src : 'media/audio/sfx/044422879-bells-piano-strings-single-din.mp3' }
				);

				var n = parseInt(ig.storage.get('map-level')) || 1;

				for ( var i = 0; i < n; i++ )
					manifest.push(
						{ id : 'map-bg-' + i, src : 'media/images/{scale}/map/map/bg-' + i + '.jpg' }
					);

				this.unload(
				[
					'map-search-stamp1',
					'map-search-stamp2',
					'map-search-stamp3',
					'map-search-stamp4',
					'map-search-sketchbook',
					'map-search-crest',
					'map-search-bg-1',
					'map-search-bg-2',
					'map-search-bg-3',
					'map-search-bg-4',
					'map-search-sprites',
					'map-search-atlas',
					'map-search-item-level-1-sprites',
					'map-search-item-level-1-atlas',
					'map-search-item-level-2-sprites',
					'map-search-item-level-2-atlas',
					'map-search-item-level-3-sprites',
					'map-search-item-level-3-atlas',
					'map-search-item-level-4-sprites',
					'map-search-item-level-4-atlas',
					'sfx-cryptic',
					'sfx-shiny-bell',
					'sfx-chime',
					'music-search-1',
					'music-ambient-1',
					'music-search-2',
					'music-ambient-2',
					'music-search-3',
					'music-ambient-3',
					'music-search-4',
					'music-ambient-4'
				]);

				for ( var i = 0, ch; ch = ig.config.search['level-' + ig.game.temp.mapSelectedLevel].characters[i++]; )
					this.unload(['map-search-character-' + ch]);
			}
			else if ( what == 'map-search' )
			{
				var n = ig.game.temp.mapSelectedLevel;

				manifest.push(
					{ id : 'map-search-bg-' + n, src : 'media/images/{scale}/map/search/bg-' + n + '.jpg' },

					{ id : 'map-search-sprites', src : 'media/images/{scale}/map/search/sprites.png' },
					{ id : 'map-search-atlas', src : 'js/lib/game/data/map/search.json' },
					{ id : 'map-search-item-level-' + n + '-sprites', src : 'media/images/{scale}/map/search/items/level-' + n + '-sprites.png' },
					{ id : 'map-search-item-level-' + n + '-atlas', src : 'js/lib/game/data/map/items-level-' + n + '.json' },

					{ id : 'map-search-stamp' + n, src : 'media/images/localized/map-search-stamp' + n + '.png' },
					{ id : 'map-search-sketchbook', src : 'media/images/localized/map-search-sketchbook.png' },
					{ id : 'map-search-crest', src : 'media/images/localized/map-search-crest.png' },

					{ id : 'sfx-cryptic', src : 'media/audio/sfx/000849986-stolen-souls-cry.mp3' },
					{ id : 'sfx-shiny-bell', src : 'media/audio/sfx/010591337-icicles-shiny-bells.mp3' },
					{ id : 'sfx-chime', src : 'media/audio/sfx/049287063-bell-mysterious.mp3' }
				);

				for ( var i = 0, ch; ch = ig.config.search['level-' + n].characters[i++]; )
					manifest.push(
						{ id : 'map-search-character-' + ch, src : 'media/images/{scale}/map/search/characters/' + ch + '.png' }
					);

				if ( n === 1 )
				{
					manifest.push(
						{ id : 'music-search-1', src : 'media/audio/music/HM_2m38_Ben-Eats-the-Cookie.mp3' },
						{ id : 'music-ambient-1', src : 'media/audio/music/012342745-band-practice-ambience.mp3' }
					);
				}
				else if ( n === 2 )
				{
					manifest.push(
						{ id : 'music-search-2', src : 'media/audio/music/HM_2m36_Villians-Dont-Love-Their-Kids.mp3' },
						{ id : 'music-ambient-2', src : 'media/audio/music/012189212-area-noise-ext-college-campus.mp3' }
					);
				}
				else if ( n === 3 )
				{
					manifest.push(
						{ id : 'music-search-3', src : 'media/audio/music/HM_2m35_Could-Use-Some-Chips.mp3' },
						{ id : 'music-ambient-3', src : 'media/audio/music/037438924-different-sounds-kitchen-stere.mp3' }
					);
				}
				else if ( n === 4 )
				{
					manifest.push(
						{ id : 'music-search-4', src : 'media/audio/music/HM_2m29_Meet-Under-Bleachers.mp3' },
						{ id : 'music-ambient-4', src : 'media/audio/music/011412991-market-town-crowd-atmos-11.mp3' }
					);
				}
			}
			else if ( what === 'book' )
			{
				manifest.push(
					{ id : 'book-game-bg2', src : 'media/images/{scale}/book/background2.jpg' },
					{ id : 'book-bg-sprites', src : 'media/images/{scale}/book/book.png' },
					{ id : 'book-bg-atlas', src: 'js/lib/game/data/book/book.json' },
					{ id : 'book-page-sprites', src : 'media/images/{scale}/book/top_pages.png' },
					{ id : 'book-page-atlas', src: 'js/lib/game/data/book/top_pages.json' },
					{ id : 'book-mainMenu-sprites', src : 'media/images/{scale}/book/main_menu.png' },
					{ id : 'book-mainMenu-atlas', src: 'js/lib/game/data/book/main_menu.json' },
					{ id : 'book-general-ui-sprites', src : 'media/images/{scale}/book/general_ui.png' },
					{ id : 'book-general-ui-atlas', src: 'js/lib/game/data/book/general_ui.json' },
					{ id : 'book-front-page-sprites', src : 'media/images/{scale}/book/front_page.png' },
					{ id : 'book-front-page-atlas', src: 'js/lib/game/data/book/front_page.json' },

					{ id : 'loc-book-mainMenu-logo', src: 'media/images/localized/main_menu_logo.png'},
					{ id : 'loc-museum', src: 'media/images/localized/museum.png' },

					{ id : 'music-book', src : 'media/audio/music/did-i-mention.mp3' },
					{ id : 'sfx-pageturn', src : 'media/audio/sfx/006144238-book-hardcover-page-turn-03.mp3' }
				);
			}
			else if ( what === 'book-quiz'){
				manifest.push(
					
					{ id : 'book-quiz1-sprites', src : 'media/images/{scale}/book/quiz_images1.png' },
					{ id : 'book-quiz1-atlas', src: 'js/lib/game/data/book/quiz_images1.json' },
					{ id : 'book-quiz-ui-sprites', src : 'media/images/{scale}/book/quiz_ui.png' },
					{ id : 'book-quiz-ui-atlas', src: 'js/lib/game/data/book/quiz_ui.json' },

					{ id : 'music-quiz', src : 'media/audio/music/HM_2m45_Respect-Honor-Code.mp3' },
					{ id : 'sfx-quiz-good', src : 'media/audio/sfx/039833799-magic-harp-game-level-complete.mp3' },
					{ id : 'sfx-quiz-bad', src : 'media/audio/sfx/047781147-epic-defeat-drums-and-horns-01.mp3' },
					{ id : 'sfx-pencil-1', src : 'media/audio/sfx/006199031-pencil-writing-long-01-1.mp3' },
					{ id : 'sfx-pencil-2', src : 'media/audio/sfx/006199031-pencil-writing-long-01-2.mp3' },
					{ id : 'sfx-pencil-3', src : 'media/audio/sfx/006199031-pencil-writing-long-01-3.mp3' }
				);

				this.unload(
				[
					// passport
					'book-passport-images-sprites',
					'book-passport-images-atlas',
					'book-image-overlay-sprites',
					'book-image-overlay-atlas',
					'book-image-overlay-shield',
					'book-image-overlay-circle',
					'music-passport',

					// museum
					'book-anim-backgrounds-sprites',
					'book-anim-backgrounds-atlas',
					'book-anim-foregrounds-sprites',
					'book-anim-foregrounds-atlas',
					'book-all-animations-0-sprites',
					'book-all-animations-1-sprites',
					'book-all-animations-2-sprites',
					'book-all-animations-3-sprites',
					'book-all-animations-4-sprites',
					'book-all-animations-atlas',
					'music-museum',
					'sfx-animation-good',
					'sfx-animation-bad',
					'sfx-drums'
				]);
			}
			else if ( what === 'book-passport'){
				manifest.push(
					
					{ id : 'book-passport-images-sprites', src : 'media/images/{scale}/book/passport_images.png' },
					{ id : 'book-passport-images-atlas', src: 'js/lib/game/data/book/passport_images.json' },
					{ id : 'book-image-overlay-sprites', src : 'media/images/{scale}/book/image_overlay.png' },
					{ id : 'book-image-overlay-atlas', src: 'js/lib/game/data/book/image_overlay.json' },
					{ id : 'book-image-overlay-shield', src : 'media/images/{scale}/book/overlay-shield.png' },
					{ id : 'book-image-overlay-circle', src : 'media/images/{scale}/book/overlay-circle.png' },

					{ id : 'loc-option-auradon-logo', src : 'media/images/localized/option_auradon.png' },
					{ id : 'loc-option-isle-logo', src : 'media/images/localized/option_isle.png' },
					{ id : 'loc-passport-auradon-logo', src : 'media/images/localized/passport_auradon_logo.png' },
					{ id : 'loc-passport-isle-logo', src : 'media/images/localized/passport_isle_logo.png' },

					{ id : 'loc-stamp-market', src : 'media/images/localized/loc-stamp-market.png' },
					{ id : 'loc-stamp-castle', src : 'media/images/localized/loc-stamp-castle.png' },
					{ id : 'loc-stamp-dorm', src : 'media/images/localized/loc-stamp-dorm.png' },
					{ id : 'loc-stamp-eden', src : 'media/images/localized/loc-stamp-kitchen.png' },

					{ id : 'music-passport', src : 'media/audio/music/HM_2m40_41_Game-On_Knights-Won.mp3' }
				);

				this.unload(
				[
					// quiz
					'book-quiz1-sprites',
					'book-quiz1-atlas',
					'book-quiz-ui-sprites',
					'book-quiz-ui-atlas',
					'music-quiz',
					'sfx-quiz-good',
					'sfx-quiz-bad',
					'sfx-pencil-1',
					'sfx-pencil-2',
					'sfx-pencil-3',

					// museum
					'book-anim-backgrounds-sprites',
					'book-anim-backgrounds-atlas',
					'book-anim-foregrounds-sprites',
					'book-anim-foregrounds-atlas',
					'book-all-animations-0-sprites',
					'book-all-animations-1-sprites',
					'book-all-animations-2-sprites',
					'book-all-animations-3-sprites',
					'book-all-animations-4-sprites',
					'book-all-animations-atlas',
					'music-museum',
					'sfx-animation-good',
					'sfx-animation-bad',
					'sfx-drums'
				]);
			}
			else if ( what === 'book-museum'){
				manifest.push(
					
					{ id : 'book-anim-backgrounds-sprites', src : 'media/images/{scale}/book/animations/anim_backgrounds.png' },
					{ id : 'book-anim-backgrounds-atlas', src: 'js/lib/game/data/book/animations/anim_backgrounds.json' },
					{ id : 'book-anim-foregrounds-sprites', src : 'media/images/{scale}/book/animations/anim_foregrounds.png' },
					{ id : 'book-anim-foregrounds-atlas', src: 'js/lib/game/data/book/animations/anim_foregrounds.json' },

					// { id : 'book-dragon-sprites', src : 'media/images/{scale}/book/animations/dragon_anim.png' },
					// { id : 'book-dragon-atlas', src: 'js/lib/game/data/book/animations/dragon_anim.json' },

					// { id : 'book-all-animations-0-sprites', src : 'media/images/{scale}/book/animations/all_animations_0.png' },
					// { id : 'book-all-animations-1-sprites', src : 'media/images/{scale}/book/animations/all_animations_1.png' },
					// { id : 'book-all-animations-2-sprites', src : 'media/images/{scale}/book/animations/all_animations_2.png' },
					// { id : 'book-all-animations-3-sprites', src : 'media/images/{scale}/book/animations/all_animations_3.png' },
					// { id : 'book-all-animations-4-sprites', src : 'media/images/{scale}/book/animations/all_animations_4.png' },
					// { id : 'book-all-animations-atlas', src: 'js/lib/game/data/book/animations/all_animations.json' },

					{ id : 'book-animations-one-0-sprites', src : 'media/images/{scale}/book/animations/animations_1.png' },
					{ id : 'book-animations-two-0-sprites', src : 'media/images/{scale}/book/animations/animations_2.png' },
					{ id : 'book-animations-three-0-sprites', src : 'media/images/{scale}/book/animations/animations_3_0.png' },
					{ id : 'book-animations-three-1-sprites', src : 'media/images/{scale}/book/animations/animations_3_1.png' },
					{ id : 'book-animations-four-0-sprites', src : 'media/images/{scale}/book/animations/animations_4.png' },
					{ id : 'book-animations-five-0-sprites', src : 'media/images/{scale}/book/animations/animations_5_0.png' },
					{ id : 'book-animations-five-1-sprites', src : 'media/images/{scale}/book/animations/animations_5_1.png' },

					{ id : 'book-animations-one-atlas', src: 'js/lib/game/data/book/animations/animations_1.json' },
					{ id : 'book-animations-two-atlas', src: 'js/lib/game/data/book/animations/animations_2.json' },
					{ id : 'book-animations-three-atlas', src: 'js/lib/game/data/book/animations/animations_3.json' },
					{ id : 'book-animations-four-atlas', src: 'js/lib/game/data/book/animations/animations_4.json' },
					{ id : 'book-animations-five-atlas', src: 'js/lib/game/data/book/animations/animations_5.json' },

					{ id : 'music-museum', src : 'media/audio/music/HM_1m13_Amazingly-Gross.mp3' },
					{ id : 'sfx-animation-good', src : 'media/audio/sfx/048685701-magical-fairy-dust-bell-sound-.mp3' },
					{ id : 'sfx-animation-bad', src : 'media/audio/sfx/006146525-spray-paint-spray-09.mp3' },
					{ id : 'sfx-drums', src : 'media/audio/sfx/000665988-forbidding-drum-hits.mp3' }
				);

				this.unload(
				[
					// quiz
					'book-quiz1-sprites',
					'book-quiz1-atlas',
					'book-quiz-ui-sprites',
					'book-quiz-ui-atlas',
					'music-quiz',
					'sfx-quiz-good',
					'sfx-quiz-bad',
					'sfx-pencil-1',
					'sfx-pencil-2',
					'sfx-pencil-3',

					// passport
					'book-passport-images-sprites',
					'book-passport-images-atlas',
					'book-image-overlay-sprites',
					'book-image-overlay-atlas',
					'book-image-overlay-shield',
					'book-image-overlay-circle',
					'music-passport'
				]);
			}

			else if ( what == 'sound' )
			{
				manifest.push(
					{ id : 'sfx-click', src : 'media/audio/sfx/041428391-soft-click.mp3' }
				);
			}

			// get rid of the obects we already loaded
			for ( var i = 0; i < manifest.length; i++ )
				if ( this.loadedObjects[manifest[i].id] )
				{
					manifest.splice(i, 1);
					i--;
				}

			// loop through the manifest
			for ( var i = 0, scale = ~~(ig.system.scale * 100); i < manifest.length; i++ )
			{
				// append ig.nocache
				manifest[i].src += ig.nocache;

				// replace the scale
				manifest[i].src = manifest[i].src.replace('{scale}', scale);
			}

			// load the files
			if ( manifest.length )
				this.loadQueue.loadManifest(manifest, true, ig.prefix);
			else
			{
				this.loadCallback && setTimeout(this.loadCallback.bind(this, 1, {}), 1);

				if ( this.status === 0 )
					this.status = 1;
			}
		},

		unload : function(ids)
		{
			return;

			for ( var i = 0, id; id = ids[i++]; )
			{
				this.loadedObjects[id] = null;
				delete this.loadedObjects[id];

				// was it a sprite sheet?
				id = id.split('-');
				if ( id.pop() == 'sprites' )
				{
					this.spriteSheet[id.join('-')] = null;
					delete this.spriteSheet[id.join('-')];
				}
			}
		},

		fileLoadComplete : function(e)
		{
			// update status
			this.status = this.loadQueue ? this.loadQueue.progress : this.status;

			this.loadedObjects[e.item.id] = e.result;

			// done with it!
			if ( this.status >= 1 )
			{
				this.loadQueue = null;

				if ( this.loadCallback )
					this.loadCallback(this.status, e);
			}
			// else
			// 	this.status = 0.95;
		},

		getResult : function(value, raw) 
		{
			return this.loadedObjects[value]
		},

		getSpriteSheet : function(name)
		{
			var ss = this.spriteSheet[name];

			if ( !ss )
			{
				var data = this.getResult(name + '-atlas');

				if ( !data )
					throw('no data for "' + name + '"');

				data.images.length = 0;

				var imgObj = this.getResult(name + '-sprites');
				if ( imgObj )
					data.images.push( imgObj );

				else
				{
					var i = 0;
					while ( true)
					{
						imgObj = this.getResult(name + '-' + i + '-sprites');
						if ( imgObj )
							data.images.push(imgObj);
						else
							break;

						if ( ++i > 100 )
							break;
					}
				}

				if ( ig.system.scale != 1 )
				{
					for ( var i = 0; i < data.frames.length; i++ )
					{
						for ( var j = 0; j < data.frames[i].length; j++ )
						{
							// this is the image index
							if ( j == 4 )
								continue; 

							data.frames[i][j] *= ig.system.scale;
						}
					}
				}

				ss = new createjs.SpriteSheet(data);

				this.spriteSheet[name] = ss;
			}

			return ss
		}
	});

	ig.loader = new ig.Loader
});