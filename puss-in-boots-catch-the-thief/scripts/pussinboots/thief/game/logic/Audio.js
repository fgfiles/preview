/**
 * Created by rufian on 11/25/14.
 */
define(['jquery',
		'underscore'],
function($,
		 _)
{
	var Audio = function()
	{
		this.setUp();
	};

	// Properties ----------------------------------------------------------------------------------------------------------
	//
	Audio.NAME = 'Audio';
	Audio.prototype.musicIDs = null;
	Audio.prototype.musicInstance = null;
	Audio.prototype.musicInstances = null;
	Audio.prototype.musicLevel = 0;
	Audio.prototype.randomBongos = null;
	Audio.prototype.randomJumps = null;
	Audio.prototype.scratch = null;

	// Set-up --------------------------------------------------------------------------------------------------------------
	//
	Audio.prototype.setUp = function()
	{
		_.bindAll(this, 'onMusicLoopComplete');

		$(window).on("AudioButton:Click", _.bind(this.onMute, this));

		this.musicIDs = ['music01', 'music02', 'music03', 'music04'];
		this.musicInstances = [];

		this.randomBongos = ['select1', 'select2', 'select3', 'select4'];
		this.randomJumps = ['jump01', 'jump02', 'jump03', 'jump04'];

		var instance;
		for (var i = 0; i < this.musicIDs.length; i++)
		{
			instance = createjs.Sound.createInstance(this.musicIDs[i]);
			instance.addEventListener('complete', this.onMusicLoopComplete);
			this.musicInstances.push(instance);
		}

		this.scratch = createjs.Sound.createInstance('scratch');
	};

	// Music ---------------------------------------------------------------------------------------------------------------
	//
	Audio.prototype.fadeIn = function(value)
	{
		value.play({ volume: 0, loop: -1 });
		TweenMax.killTweensOf(value);
		TweenMax.to(value, 2, { volume: 0.55 });
		this.musicInstance = value;
	};

	Audio.prototype.fadeOut = function(value)
	{
		if (value == null) return;
		TweenMax.killTweensOf(value);
		TweenMax.to(value, 1, { volume: 0, onComplete: this.stopAudio, onCompleteScope: this, onCompleteParams: [value] });
	};

	Audio.prototype.forceStop = function(value)
	{
		if (value != null) this.stopAudio(value);
	};

	Audio.prototype.onMute = function(args)
	{
		createjs.Sound.setMute(args.mute);
	};

	Audio.prototype.playScratch = function()
	{
		this.scratch.play();
	};

	Audio.prototype.stopAudio = function(value)
	{
		value.stop();
		if (this.musicInstance == value) this.musicInstance = null;
	};

	Audio.prototype.getRandomMusicLoop = function()
	{
		return this.musicInstances[Math.floor(Math.random() * 1)];
	};

	Audio.prototype.startMusic = function()
	{
		// Stop currently-playing music
		if (this.musicInstance != null)
		{
			this.fadeOut(this.musicInstance);
			this.musicInstance = null;
		}

		// Reset music object and play
		this.updateMusicLevel(0);
	};

	Audio.prototype.onMusicLoopComplete = function()
	{
		this.musicInstance = this.getRandomMusicLoop();
		this.musicInstance.play({ loop: -1 });
	};

	Audio.prototype.updateMusicLevel = function(value)
	{
		this.musicLevel = value;

		var r = this.musicLevel / 4;
		var l = this.musicInstances.length;
		var m = Math.floor(l * r);
		var instance = this.musicInstances[m];

		if (instance != this.musicInstance)
		{
			this.fadeOut(this.musicInstance);
			this.fadeIn(instance);
		}
	};

	Audio.prototype.playSnare = function()
	{
		createjs.Sound.play('snare');
	};

	Audio.prototype.playRandomJump = function()
	{
		var r = this.randomJumps[Math.floor(this.randomJumps.length * Math.random())];
		createjs.Sound.play(r);
	};

	Audio.prototype.playLevelStart = function()
	{
		createjs.Sound.play('startGame');
	};

	Audio.prototype.playRandomBongo = function()
	{
		createjs.Sound.play(this.randomBongos[Math.floor(Math.random() * 4)]);
	};
	return Audio;
});