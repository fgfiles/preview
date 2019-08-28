ig.module(
	'lib.game.sound'
)
.defines(function()
{
	ig.Sound = ig.Class.extend(
	{
		// these id's need to match with what is in the loader
		id :
		{
			musicBook : { id : 'music-book' },
			musicQuiz : { id : 'music-quiz' },
			musicMuseum : { id : 'music-museum' },
			musicPassport : { id : 'music-passport' },
			musicMap : { id : 'music-map' },
			musicSearch1 : { id : 'music-search-1' },
			musicSearch2 : { id : 'music-search-2' },
			musicSearch3 : { id : 'music-search-3' },
			musicSearch4 : { id : 'music-search-4' },
			musicAmbient1 : { id : 'music-ambient-1' },
			musicAmbient2 : { id : 'music-ambient-2' },
			musicAmbient3 : { id : 'music-ambient-3' },
			musicAmbient4 : { id : 'music-ambient-4' },

			sfxPageTurn : { id : 'sfx-pageturn' },
			sfxQuizGood : { id : 'sfx-quiz-good' },
			sfxQuizBad : { id : 'sfx-quiz-bad' },
			sfxAnimationGood : { id : 'sfx-animation-good' },
			sfxAnimationBad : { id : 'sfx-animation-bad' },
			sfxDrums : { id : 'sfx-drums' },

			sfxRoller : { id : 'sfx-roller' },
			sfxWhoosh : { id : 'sfx-whoosh' },
			sfxDing : { id : 'sfx-ding' },
			sfxCryptic : { id : 'sfx-cryptic', volume : 0.4 },
			sfxClick : { id : 'sfx-click' },
			sfxShinyBell : { id : 'sfx-shiny-bell' },
			sfxChime : { id : 'sfx-chime' },

			sfxPencil1 : { id : 'sfx-pencil-1' },
			sfxPencil2 : { id : 'sfx-pencil-2' },
			sfxPencil3 : { id : 'sfx-pencil-3' }
		},

		_musicObj : null,
		_currentMusic : null,
		_ids : null,
		_idsIndex : -1,

		staticInstantiate : function()
		{
			return ig.sound || null
		},

		init : function()
		{
			ig.sound = this;

			window.addEventListener('pageshow', this.onPageShow.bind(this), false);
			window.addEventListener('pagehide', this.onPageHide.bind(this), false);
			window.addEventListener('focus', this.onPageShow.bind(this), false);
			window.addEventListener('blur', this.onPageHide.bind(this), false);
		},

		playMusic : function(id)
		{
			if ( !ig.config.enableSound )
				return;

			id = typeof id === 'string' ? this.id[id] : id;

			if ( this._currentMusic == id )
				return;

			// fade out old bg music
			if ( this._musicObj )
			{
				this._musicObj.removeAllEventListeners();

				createjs.Tween.get(this._musicObj, { override : true }).to({ volume : 0 }, 600).call(function(id)
				{
					this._musicObj.stop();
					this._musicObj = null;
					this.playMusic(id)
				}, [id], this);
			}

			// fade in new music
			else
			{
				this._currentMusic = id;
				this._musicObj = createjs.Sound.play(id.id, { volume : 0, loop : -1 });
				createjs.Tween.get(this._musicObj).to({ volume : id.volume || 0.3 }, 1800);
			}
		},

		playMusics : function(ids)
		{
			if ( !ig.config.enableSound )
				return;

			this._ids = ids;
			this._idsIndex = -1;
			
			// stop previous music
			if ( this._musicObj )
				createjs.Tween.get(this._musicObj, { override : true }).to({ volume : 0 }, 600).call(function()
				{
					this._musicObj.stop();
					this._musicObj = null;
					this._currentMusic = null;
					this._playMusics();
				}, null, this);
			else
				this._playMusics();
		},

		_playMusics : function()
		{
			this._idsIndex++;

			if ( this._idsIndex == this._ids.length )
				this._idsIndex = 0;

			this.playMusic(this._ids[this._idsIndex]);

			// this interval loop is for ie11 because it uses HTML audio
			// we have to wait and check for the position before setting properties and applying events
			var x = setInterval(function()
			{
				if ( this._musicObj.position > 0 )
				{
					clearInterval(x);

					this._musicObj.loop = this._musicObj._loop = 0;

					this._musicObj.on('complete', function() 
					{
						this._musicObj = null;
						this._currentMusic = null;
						createjs.Tween.get({}).wait(1000).call(this._playMusics, null, this);
					}, this)
				}
			}.bind(this), 100);
		},

		playSound : function(id)
		{
			if ( !ig.config.enableSound )
				return;

			if ( !ig.game.isFocused )
				return;

			id = typeof id === 'string' ? this.id[id] : id;
			
			createjs.Sound.play(id.id, { volume : id.volume || 1 });
		},

		onPageShow : function()
		{
			this._musicObj && this._musicObj.play()
		},

		onPageHide : function()
		{
			this._musicObj && this._musicObj.pause()
		}
	});

	ig.sound = new ig.Sound
});