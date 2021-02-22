define([ 
    "backbone",
    "PIXI",
    "preloadjs",
    "soundjs"
],
function (
	Backbone,
	PIXI,
	preloadjs,
	soundjs
){
	
	var LoadAssets = Backbone.View.extend({

		loader : null,
		counter : 0,
		total : 0,


		initialize:function() {

	         _.bindAll(this,"onGameAssetProgress",
				 			"onGameAssetsComplete",
				 			"onJSONComplete",
							"onJSONBComplete",
							"onGameComplete");

			this.loadJSON();
			this.loadAudio();
			this.addListeners();
			this.start();
     	},

     	addListeners:function() {

     		this.loader.onProgress = this.onGameAssetProgress;
     		this.loader.onComplete = this.onJSONComplete;
	        this.queue.addEventListener("fileload", this.onGameAssetProgress);
			this.queue.addEventListener("complete", this.onGameAssetsComplete);
     	},

     	loadJSON:function() {

			PIXI.SkeletonScale = 0.4;

     		// Add JSON files below
     		this.jsons =
			[
     			tcat.GameConfig.texturePath,
				tcat.GameConfig.pussPath
			];

			this.loader = new PIXI.AssetLoader(this.jsons);
		},

     	loadAudio:function() {

     		this.queue = new createjs.LoadQueue();
			createjs.Sound.alternateExtensions = ["ogg"];
			this.queue.installPlugin(createjs.Sound);			

			/* Add Audio & Images files below */
			this.medias =
			[
				{ id: 'coin01', src: 'sounds/thief/Coin01.mp3'},
				{ id: 'coin02', src: 'sounds/thief/Coin02.mp3'},
				{ id: 'coin03', src: 'sounds/thief/Coin03.mp3'},
				{ id: 'coin04', src: 'sounds/thief/Coin04.mp3'},
				{ id: 'coin05', src: 'sounds/thief/Coin05.mp3'},
				{ id: 'coin06', src: 'sounds/thief/Coin06.mp3'},
				{ id: 'coin07', src: 'sounds/thief/Coin07.mp3'},
				{ id: 'coin08', src: 'sounds/thief/Coin08.mp3'},
				{ id: 'coinDropped01', src: 'sounds/thief/CoinsDropped01.mp3'},
				{ id: 'coinDropped02', src: 'sounds/thief/CoinsDropped02.mp3'},
				{ id: 'coinDropped03', src: 'sounds/thief/CoinsDropped03.mp3'},
				{ id: 'land01', src: 'sounds/thief/DropOntoRock01.mp3'},
				{ id: 'land02', src: 'sounds/thief/DropOntoRock02.mp3'},
				{ id: 'fail', src: 'sounds/thief/Fail.mp3'},
				{ id: 'grunt', src: 'sounds/thief/Grunt.mp3'},
				{ id: 'hitThief01', src: 'sounds/thief/HitThief01.mp3'},
				{ id: 'hitThief02', src: 'sounds/thief/HitThief02.mp3'},
				{ id: 'jump01', src: 'sounds/thief/Jump01.mp3'},
				{ id: 'jump02', src: 'sounds/thief/Jump02.mp3'},
				{ id: 'jump03', src: 'sounds/thief/Jump03.mp3'},
				{ id: 'jump04', src: 'sounds/thief/Jump04.mp3'},
				{ id: 'levelStart', src: 'sounds/thief/LevelStart.mp3'},
				{ id: 'music', src: 'sounds/thief/Music.mp3'},
				{ id: 'run', src: 'sounds/thief/Run.mp3'},
				{ id: 'spring', src: 'sounds/thief/Spring.mp3'},
				{ id: 'stumble', src: 'sounds/thief/Stumble.mp3'},
				{ id: 'success', src: 'sounds/thief/Success.mp3'}
			]
		},

		start:function() {

			console.log("start");
			this.total = this.medias.length + this.jsons.length + 1;
			this.loader.load();
			this.queue.loadManifest(this.medias);
		},

		onGameAssetProgress:function() {

			this.counter++;
			Backbone.trigger('onProgress', this.counter/this.total );
//			Backbone.trigger(window.App.events.ON_PROGRESS, this.counter/this.total);
		},

		onGameAssetsComplete:function() {
			
			this.mediasComplete = true;
			this.onGameComplete();
//			console.log("on media loaded");
		},

		onJSONComplete:function() {

			/**
			 * Now preload the thief JSON (done separate because we have to explicitly
			 * hack the PIXI.SkeletonScale
			 */
			PIXI.SkeletonScale = 0.65;

			this.loader = new PIXI.AssetLoader([tcat.GameConfig.thiefPath]);
			this.loader.onProgress = this.onGameAssetProgress;
			this.loader.onComplete = this.onJSONBComplete;
			this.loader.load();

//			console.log("on json loaded");
		},

		onJSONBComplete:function() {

			this.JSONComplete = true;
			this.onGameComplete();

//			console.log("on json loaded");
		},

		onGameComplete:function() {

			if (this.JSONComplete && this.mediasComplete)
			{
				Backbone.trigger('onComplete', 1);
//				Backbone.trigger(window.App.events.ON_COMPLETE, 1);
			}
		}	
				
	})

	return LoadAssets;
});