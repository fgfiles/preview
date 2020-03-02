/**
 * Created by jonathan.kernick on 14/03/2017.
 */
createjs.Sound.alternateExtensions = ["ogg", 'm4a'];

//createjs.Sound.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin]);

CC.SoundJs = function() {

    this.muted = false;
    this.musicMuted = false;
    this.paused = false;
    this.instanceList = [];
    this.track;
};

CC.SoundJs.prototype.addSoundJSON = function (audioData, callback) {
  //  this.audioData = JSON.parse(JSON.stringify(audioData));
    this.audioData = audioData;
    var _self = this;
    createjs.Sound.on("fileload", function(arg){
        if(_self.currentMusic)
        {
            _self.track = this.playMusic(this.currentMusic, this.currentVolume);
        }

        callback();
    });

    createjs.Sound.registerSound(this.audioData);
};

CC.SoundJs.prototype.play = function (id, volume, loop, isMusic) {
    if(this.muted && !isMusic)
    {
      //  this.pause(false);
      volume = 0;
    }

    if(this.musicMuted && isMusic) {
        volume = 0;
    }

    var instance = createjs.Sound.play(id, {"loop": ((loop)?-1:0)});
    instance.volume = (volume !== undefined) ? volume : 1;
    instance.id = id;
    this.instanceList.push(instance);

    return instance;
};
CC.SoundJs.prototype.playMusic = function (id, volume) {
    this.stop(this.currentMusic);
    this.currentMusic = id;
    this.currentVolume = volume || 1;
    var _self = this;
    if(!this.musicMuted) {
        _self.track = this.play(this.currentMusic, volume, true, true);
        _self.track.music = true;
    }
};
CC.SoundJs.prototype.muteMusic = function () {
    this.musicMuted = true;
    if(this.track) {
        this.track.muted = true;
    }
};
CC.SoundJs.prototype.unmuteMusic = function () {
    this.musicMuted = false;

    if(this.track) {
        this.track.muted = false;
        this.track.volume = 0.3;
    }
};
CC.SoundJs.prototype.stopMusic = function () {
    this.stop(this.currentMusic);
    this.currentMusic = undefined;
    this.currentVolume = 1;
};

CC.SoundJs.prototype.stop = function (id) {

    var i,instance, length = this.instanceList.length;
    for (i = length-1; i >= 0; --i) {
        instance = this.instanceList[i];

        if(instance.id === id)
        {
            instance.stop();
            this.instanceList.splice(i,1);
        }
    }
};

CC.SoundJs.prototype.stopAll = function (omit, keepMusic) {
    if(!omit) {
        createjs.Sound.stop();
    }
    var i,instance, length = this.instanceList.length;
    for (i = length-1; i >= 0; --i) {
        instance = this.instanceList[i];

       if(instance.id !== omit) {
            if (instance.music && keepMusic) {

            } else {
                instance.stop();
                this.instanceList.splice(i, 1);
            }
        }
    }
};

CC.SoundJs.prototype.stopAllHard = function () {
    this.stopMusic();
    this.stopAll();
    this.instanceList = [];
    createjs.Sound.stop();
};

CC.SoundJs.prototype.removeSounds = function () {
    this.audioData = null;
    createjs.Sound.removeAllSounds();
};
CC.SoundJs.prototype.purge = function () {
    this.stopMusic();
    this.stopAll();
    this.instanceList = [];
};
CC.SoundJs.prototype.mute = function (mute) {
    this.muted = mute;
    
    var _self = this;
    _.each(this.instanceList, function(instance) {
        if(!instance.music) {
            instance.muted = _self.paused || _self.muted;
            instance.volume = 1;
        }
    });
};
CC.SoundJs.prototype.pause = function (pause) {
    this.paused = pause;

//    this.muteMusic();
  //  this.mute();
};