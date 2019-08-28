function SoundManager() {
    this.sound = {};
    this.config;
};

SoundManager.prototype.isMuted = function () {
    return Howler._muted;
};

SoundManager.prototype.switchMute = function () {
    Howler.mute(!Howler._muted);
};

SoundManager.prototype.mute = function (value) {
    Howler.mute(value);
};

SoundManager.prototype.load = function (soundConfig, loadedCallback) {
    this.config = soundConfig.files;
    for (var i = 0; i < soundConfig.files.length; i++) {
        var file = soundConfig.files[i];
        var src = [];
        for (var format in soundConfig.format) {
            var ext = soundConfig.format[format];
            src.push(soundConfig.path + file.src + "." + ext);
        }
        var sound = new Howl({
            src: src,
            loop: file.loop,
            volume: file.volume,
            format: soundConfig.format
        });
        sound.once("load", loadedCallback);
        this.sound[file.id] = sound;
    }
};
SoundManager.prototype.play = function (id, interrupt) {
    if (this.sound[id]) {
        if (this.sound[id].playing() && interrupt) {
            this.sound[id].stop();
        }
        if (!this.sound[id].playing()) {
            var sound = this.sound[id].play();
            sound.volume = this.getVolume(id);
        }
    }
};
SoundManager.prototype.fade = function (id, from, to, duration) {
    if (this.sound[id]) {
        var maxVolume = this.getVolume(id);
        from = Math.clamp(from, 0, maxVolume);
        to = Math.clamp(to, 0, maxVolume);
        this.sound[id].fade(from, to, (duration * 1000)); //Howler needs milliseconds
    }
};

SoundManager.prototype.fadeTo = function (id, to, duration) {
    if (this.sound[id]) {
        var from = this.sound[id]._volume;
        this.fade(id, from, to, duration);
    }
};

SoundManager.prototype.playRandom = function (name, qty) {
    var fullname = name + "0" + Math.ceil(Math.random() * qty);
    this.play(fullname, true);
};

SoundManager.prototype.stop = function (id) {
    if (this.sound[id]) {
        this.sound[id].stop();
    }
};

SoundManager.prototype.getVolume = function (id) {
    for (var i = 0; i < this.config.length; i++) {
        if (this.config[i].id === id) {
            return this.config[i].volume;
        }
    }
    return null;
};
