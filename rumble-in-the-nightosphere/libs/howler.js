/*!
 *  howler.js v2.0.0-rc2
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function () {

    'use strict';
    var HowlerGlobal = function () {
        this.init();
    };
    HowlerGlobal.prototype = {
        init: function () {
            var self = this || Howler;
            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = 'canplaythrough';
            self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;
            self.mobileAutoEnable = true;
            self._setup();

            return self;
        },
        volume: function (vol) {
            var self = this || Howler;
            vol = parseFloat(vol);
            if (!self.ctx) {
                setupAudioContext();
            }

            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                self._volume = vol;
                if (self._muted) {
                    return self;
                }
                if (self.usingWebAudio) {
                    self.masterGain.gain.value = vol;
                }
                for (var i = 0; i < self._howls.length; i++) {
                    if (!self._howls[i]._webAudio) {
                        var ids = self._howls[i]._getSoundIds();
                        for (var j = 0; j < ids.length; j++) {
                            var sound = self._howls[i]._soundById(ids[j]);

                            if (sound && sound._node) {
                                sound._node.volume = Math.min(Math.max(0, sound._volume * vol), 1);
                            }
                        }
                    }
                }

                return self;
            }

            return self._volume;
        },
        mute: function (muted) {
            var self = this || Howler;
            if (!self.ctx) {
                setupAudioContext();
            }

            self._muted = muted;
            if (self.usingWebAudio) {
                self.masterGain.gain.value = muted ? 0 : self._volume;
            }
            for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                    var ids = self._howls[i]._getSoundIds();
                    for (var j = 0; j < ids.length; j++) {
                        var sound = self._howls[i]._soundById(ids[j]);

                        if (sound && sound._node) {
                            sound._node.muted = (muted) ? true : sound._muted;
                        }
                    }
                }
            }

            return self;
        },
        unload: function () {
            var self = this || Howler;

            for (var i = self._howls.length - 1; i >= 0; i--) {
                self._howls[i].unload();
            }
            if (self.usingWebAudio && typeof self.ctx.close !== 'undefined') {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
            }

            return self;
        },
        codecs: function (ext) {
            return (this || Howler)._codecs[ext];
        },
        _setup: function () {
            var self = this || Howler;
            self.state = self.ctx ? self.ctx.state || 'running' : 'running';
            self._autoSuspend();
            if (!self.noAudio) {
                self._setupCodecs();
            }

            return self;
        },
        _setupCodecs: function () {
            var self = this || Howler;
            var audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;

            if (!audioTest || typeof audioTest.canPlayType !== 'function') {
                return self;
            }

            var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');
            var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
            var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

            self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
                aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, '')
            };

            return self;
        },
        _enableMobileAudio: function () {
            var self = this || Howler;
            var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
            var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
            if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
                return;
            }

            self._mobileEnabled = false;
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
            }
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
            var unlock = function () {
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);
                if (typeof source.start === 'undefined') {
                    source.noteOn(0);
                } else {
                    source.start(0);
                }
                source.onended = function () {
                    source.disconnect(0);
                    self._mobileEnabled = true;
                    self.mobileAutoEnable = false;
                    document.removeEventListener('touchend', unlock, true);
                };
            };
            document.addEventListener('touchend', unlock, true);

            return self;
        },
        _autoSuspend: function () {
            var self = this;

            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
                return;
            }
            for (var i = 0; i < self._howls.length; i++) {
                if (self._howls[i]._webAudio) {
                    for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                        if (!self._howls[i]._sounds[j]._paused) {
                            return self;
                        }
                    }
                }
            }

            if (self._suspendTimer) {
                clearTimeout(self._suspendTimer);
            }
            self._suspendTimer = setTimeout(function () {
                if (!self.autoSuspend) {
                    return;
                }

                self._suspendTimer = null;
                self.state = 'suspending';
                self.ctx.suspend().then(function () {
                    self.state = 'suspended';

                    if (self._resumeAfterSuspend) {
                        delete self._resumeAfterSuspend;
                        self._autoResume();
                    }
                });
            }, 30000);

            return self;
        },
        _autoResume: function () {
            var self = this;

            if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
                return;
            }

            if (self.state === 'running' && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
            } else if (self.state === 'suspended') {
                self.state = 'resuming';
                self.ctx.resume().then(function () {
                    self.state = 'running';
                });

                if (self._suspendTimer) {
                    clearTimeout(self._suspendTimer);
                    self._suspendTimer = null;
                }
            } else if (self.state === 'suspending') {
                self._resumeAfterSuspend = true;
            }

            return self;
        }
    };
    var Howler = new HowlerGlobal();
    var Howl = function (o) {
        var self = this;
        if (!o.src || o.src.length === 0) {
            
            return;
        }

        self.init(o);
    };
    Howl.prototype = {
        init: function (o) {
            var self = this;
            if (!Howler.ctx) {
                setupAudioContext();
            }
            self._autoplay = o.autoplay || false;
            self._format = (typeof o.format !== 'string') ? o.format : [o.format];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = (typeof o.src !== 'string') ? o.src : [o.src];
            self._volume = o.volume !== undefined ? o.volume : 1;
            self._duration = 0;
            self._state = 'unloaded';
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];
            self._onend = o.onend ? [{
                fn: o.onend
            }] : [];
            self._onfade = o.onfade ? [{
                fn: o.onfade
            }] : [];
            self._onload = o.onload ? [{
                fn: o.onload
            }] : [];
            self._onloaderror = o.onloaderror ? [{
                fn: o.onloaderror
            }] : [];
            self._onpause = o.onpause ? [{
                fn: o.onpause
            }] : [];
            self._onplay = o.onplay ? [{
                fn: o.onplay
            }] : [];
            self._onstop = o.onstop ? [{
                fn: o.onstop
            }] : [];
            self._onmute = o.onmute ? [{
                fn: o.onmute
            }] : [];
            self._onvolume = o.onvolume ? [{
                fn: o.onvolume
            }] : [];
            self._onrate = o.onrate ? [{
                fn: o.onrate
            }] : [];
            self._onseek = o.onseek ? [{
                fn: o.onseek
            }] : [];
            self._webAudio = Howler.usingWebAudio && !self._html5;
            if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
                Howler._enableMobileAudio();
            }
            Howler._howls.push(self);
            if (self._preload) {
                self.load();
            }

            return self;
        },
        load: function () {
            var self = this;
            var url = null;
            if (Howler.noAudio) {
                self._emit('loaderror', null, 'No audio support.');
                return;
            }
            if (typeof self._src === 'string') {
                self._src = [self._src];
            }
            for (var i = 0; i < self._src.length; i++) {
                var ext, str;

                if (self._format && self._format[i]) {
                    ext = self._format[i];
                } else {
                    str = self._src[i];
                    if (typeof str !== 'string') {
                        self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                        continue;
                    }
                    ext = /^data:audio\/([^;,]+);/i.exec(str);
                    if (!ext) {
                        ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                    }

                    if (ext) {
                        ext = ext[1].toLowerCase();
                    }
                }
                if (Howler.codecs(ext)) {
                    url = self._src[i];
                    break;
                }
            }

            if (!url) {
                self._emit('loaderror', null, 'No codec support for selected audio sources.');
                return;
            }

            self._src = url;
            self._state = 'loading';
            if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
                self._html5 = true;
                self._webAudio = false;
            }
            new Sound(self);
            if (self._webAudio) {
                loadBuffer(self);
            }

            return self;
        },
        play: function (sprite, internal) {
            var self = this;
            var id = null;
            if (typeof sprite === 'number') {
                id = sprite;
                sprite = null;
            } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
                return null;
            } else if (typeof sprite === 'undefined') {
                sprite = '__default';
                var num = 0;
                for (var i = 0; i < self._sounds.length; i++) {
                    if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                        num++;
                        id = self._sounds[i]._id;
                    }
                }

                if (num === 1) {
                    sprite = null;
                } else {
                    id = null;
                }
            }
            var sound = id ? self._soundById(id) : self._inactiveSound();
            if (!sound) {
                return null;
            }
            if (id && !sprite) {
                sprite = sound._sprite || '__default';
            }
            if (self._state !== 'loaded' && !self._sprite[sprite]) {
                self._queue.push({
                    event: 'play',
                    action: function () {
                        self.play(self._soundById(sound._id) ? sound._id : undefined);
                    }
                });

                return sound._id;
            }
            if (id && !sound._paused) {
                if (!internal) {
                    setTimeout(function () {
                        self._emit('play', sound._id);
                    }, 0);
                }

                return sound._id;
            }
            if (self._webAudio) {
                Howler._autoResume();
            }
            var seek = sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000;
            var duration = ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);
            sound._paused = false;
            sound._ended = false;
            sound._sprite = sprite;
            sound._seek = seek;
            sound._start = self._sprite[sprite][0] / 1000;
            sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._loop = !!(sound._loop || self._sprite[sprite][2]);
            var node = sound._node;
            if (self._webAudio) {
                var playWebAudio = function () {
                    self._refreshBuffer(sound);
                    var vol = (sound._muted || self._muted) ? 0 : sound._volume;
                    node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                    sound._playStart = Howler.ctx.currentTime;
                    if (typeof node.bufferSource.start === 'undefined') {
                        sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                    } else {
                        sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                    }
                    if (timeout !== Infinity) {
                        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    }

                    if (!internal) {
                        setTimeout(function () {
                            self._emit('play', sound._id);
                        }, 0);
                    }
                };

                if (self._state === 'loaded') {
                    playWebAudio();
                } else {
                    self.once('load', playWebAudio, sound._id);
                    self._clearTimer(sound._id);
                }
            } else {
                var playHtml5 = function () {
                    node.currentTime = seek;
                    node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                    node.volume = Math.min(Math.max(0, sound._volume * Howler.volume()), 1);
                    node.playbackRate = sound._rate;

                    setTimeout(function () {
                        node.play();
                        if (timeout !== Infinity) {
                            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                        }

                        if (!internal) {
                            self._emit('play', sound._id);
                        }
                    }, 0);
                };
                var loadedNoReadyState = (self._state === 'loaded' && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS));
                if (node.readyState === 4 || loadedNoReadyState) {
                    playHtml5();
                } else {
                    var listener = function () {
                        playHtml5();
                        node.removeEventListener(Howler._canPlayEvent, listener, false);
                    };
                    node.addEventListener(Howler._canPlayEvent, listener, false);
                    self._clearTimer(sound._id);
                }
            }

            return sound._id;
        },
        pause: function (id) {
            var self = this;
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'pause',
                    action: function () {
                        self.pause(id);
                    }
                });

                return self;
            }
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                self._clearTimer(ids[i]);
                var sound = self._soundById(ids[i]);

                if (sound && !sound._paused) {
                    sound._seek = self.seek(ids[i]);
                    sound._rateSeek = 0;
                    sound._paused = true;
                    self._stopFade(ids[i]);

                    if (sound._node) {
                        if (self._webAudio) {
                            if (!sound._node.bufferSource) {
                                return self;
                            }

                            if (typeof sound._node.bufferSource.stop === 'undefined') {
                                sound._node.bufferSource.noteOff(0);
                            } else {
                                sound._node.bufferSource.stop(0);
                            }
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.pause();
                        }
                    }
                    if (!arguments[1]) {
                        self._emit('pause', sound._id);
                    }
                }
            }

            return self;
        },
        stop: function (id, internal) {
            var self = this;
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'stop',
                    action: function () {
                        self.stop(id);
                    }
                });

                return self;
            }
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                self._clearTimer(ids[i]);
                var sound = self._soundById(ids[i]);

                if (sound && !sound._paused) {
                    sound._seek = sound._start || 0;
                    sound._rateSeek = 0;
                    sound._paused = true;
                    sound._ended = true;
                    self._stopFade(ids[i]);

                    if (sound._node) {
                        if (self._webAudio) {
                            if (!sound._node.bufferSource) {
                                return self;
                            }

                            if (typeof sound._node.bufferSource.stop === 'undefined') {
                                sound._node.bufferSource.noteOff(0);
                            } else {
                                sound._node.bufferSource.stop(0);
                            }
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.currentTime = sound._start || 0;
                            sound._node.pause();
                        }
                    }
                }

                if (sound && !internal) {
                    self._emit('stop', sound._id);
                }
            }

            return self;
        },
        mute: function (muted, id) {
            var self = this;
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'mute',
                    action: function () {
                        self.mute(muted, id);
                    }
                });

                return self;
            }
            if (typeof id === 'undefined') {
                if (typeof muted === 'boolean') {
                    self._muted = muted;
                } else {
                    return self._muted;
                }
            }
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);

                if (sound) {
                    sound._muted = muted;

                    if (self._webAudio && sound._node) {
                        sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
                    } else if (sound._node) {
                        sound._node.muted = Howler._muted ? true : muted;
                    }

                    self._emit('mute', sound._id);
                }
            }

            return self;
        },
        volume: function () {
            var self = this;
            var args = arguments;
            var vol, id;
            if (args.length === 0) {
                return self._volume;
            } else if (args.length === 1) {
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    vol = parseFloat(args[0]);
                }
            } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            var sound;
            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                if (self._state !== 'loaded') {
                    self._queue.push({
                        event: 'volume',
                        action: function () {
                            self.volume.apply(self, args);
                        }
                    });

                    return self;
                }
                if (typeof id === 'undefined') {
                    self._volume = vol;
                }
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                    sound = self._soundById(id[i]);

                    if (sound) {
                        sound._volume = vol;
                        if (!args[2]) {
                            self._stopFade(id[i]);
                        }

                        if (self._webAudio && sound._node && !sound._muted) {
                            sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                        } else if (sound._node && !sound._muted) {
                            sound._node.volume = Math.min(Math.max(0, vol * Howler.volume()), 1);
                        }

                        self._emit('volume', sound._id);
                    }
                }
            } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
            }

            return self;
        },
        fade: function (from, to, len, id) {
            var self = this;
            var diff = Math.abs(from - to);
            var dir = from > to ? 'out' : 'in';
            var steps = diff / 0.01;
            var stepLen = len / steps;
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'fade',
                    action: function () {
                        self.fade(from, to, len, id);
                    }
                });

                return self;
            }
            self.volume(from, id);
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);
                if (sound) {
                    if (!id) {
                        self._stopFade(ids[i]);
                    }
                    if (self._webAudio && !sound._muted) {
                        var currentTime = Howler.ctx.currentTime;
                        var end = currentTime + (len / 1000);
                        sound._volume = from;
                        sound._node.gain.setValueAtTime(from, currentTime);
                        sound._node.gain.linearRampToValueAtTime(to, end);
                    }

                    var vol = from;
                    sound._interval = setInterval(function (soundId, sound) {
                        vol += (dir === 'in' ? 0.01 : -0.01);
                        vol = Math.max(0, vol);
                        vol = Math.min(1, vol);
                        vol = Math.round(vol * 100) / 100;
                        if (self._webAudio) {
                            if (typeof id === 'undefined') {
                                self._volume = vol;
                            }

                            sound._volume = vol;
                        } else {
                            self.volume(vol, soundId, true);
                        }
                        if (vol === to) {
                            clearInterval(sound._interval);
                            sound._interval = null;
                            self.volume(vol, soundId);
                            self._emit('fade', soundId);
                        }
                    }.bind(self, ids[i], sound), stepLen);
                }
            }

            return self;
        },
        _stopFade: function (id) {
            var self = this;
            var sound = self._soundById(id);

            if (sound && sound._interval) {
                if (self._webAudio) {
                    sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
                }

                clearInterval(sound._interval);
                sound._interval = null;
                self._emit('fade', id);
            }

            return self;
        },
        loop: function () {
            var self = this;
            var args = arguments;
            var loop, id, sound;
            if (args.length === 0) {
                return self._loop;
            } else if (args.length === 1) {
                if (typeof args[0] === 'boolean') {
                    loop = args[0];
                    self._loop = loop;
                } else {
                    sound = self._soundById(parseInt(args[0], 10));
                    return sound ? sound._loop : false;
                }
            } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
            }
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
                sound = self._soundById(ids[i]);

                if (sound) {
                    sound._loop = loop;
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.loop = loop;
                    }
                }
            }

            return self;
        },
        rate: function () {
            var self = this;
            var args = arguments;
            var rate, id;
            if (args.length === 0) {
                id = self._sounds[0]._id;
            } else if (args.length === 1) {
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    rate = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            var sound;
            if (typeof rate === 'number') {
                if (self._state !== 'loaded') {
                    self._queue.push({
                        event: 'rate',
                        action: function () {
                            self.rate.apply(self, args);
                        }
                    });

                    return self;
                }
                if (typeof id === 'undefined') {
                    self._rate = rate;
                }
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                    sound = self._soundById(id[i]);

                    if (sound) {
                        sound._rateSeek = self.seek(id[i]);
                        sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                        sound._rate = rate;
                        if (self._webAudio && sound._node && sound._node.bufferSource) {
                            sound._node.bufferSource.playbackRate.value = rate;
                        } else if (sound._node) {
                            sound._node.playbackRate = rate;
                        }
                        var seek = self.seek(id[i]);
                        var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
                        var timeout = (duration * 1000) / Math.abs(sound._rate);
                        if (self._endTimers[id[i]] || !sound._paused) {
                            self._clearTimer(id[i]);
                            self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                        }

                        self._emit('rate', sound._id);
                    }
                }
            } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
            }

            return self;
        },
        seek: function () {
            var self = this;
            var args = arguments;
            var seek, id;
            if (args.length === 0) {
                id = self._sounds[0]._id;
            } else if (args.length === 1) {
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    id = self._sounds[0]._id;
                    seek = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            if (typeof id === 'undefined') {
                return self;
            }
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'seek',
                    action: function () {
                        self.seek.apply(self, args);
                    }
                });

                return self;
            }
            var sound = self._soundById(id);

            if (sound) {
                if (typeof seek === 'number' && seek >= 0) {
                    var playing = self.playing(id);
                    if (playing) {
                        self.pause(id, true);
                    }
                    sound._seek = seek;
                    sound._ended = false;
                    self._clearTimer(id);
                    if (playing) {
                        self.play(id, true);
                    }
                    if (!self._webAudio && sound._node) {
                        sound._node.currentTime = seek;
                    }

                    self._emit('seek', id);
                } else {
                    if (self._webAudio) {
                        var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                        var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                        return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                    } else {
                        return sound._node.currentTime;
                    }
                }
            }

            return self;
        },
        playing: function (id) {
            var self = this;
            if (typeof id === 'number') {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
            }
            for (var i = 0; i < self._sounds.length; i++) {
                if (!self._sounds[i]._paused) {
                    return true;
                }
            }

            return false;
        },
        duration: function (id) {
            var self = this;
            var duration = self._duration;
            var sound = self._soundById(id);
            if (sound) {
                duration = self._sprite[sound._sprite][1] / 1000;
            }

            return duration;
        },
        state: function () {
            return this._state;
        },
        unload: function () {
            var self = this;
            var sounds = self._sounds;
            for (var i = 0; i < sounds.length; i++) {
                if (!sounds[i]._paused) {
                    self.stop(sounds[i]._id);
                    self._emit('end', sounds[i]._id);
                }
                if (!self._webAudio) {
                    sounds[i]._node.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
                    sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
                    sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
                }
                delete sounds[i]._node;
                self._clearTimer(sounds[i]._id);
                var index = Howler._howls.indexOf(self);
                if (index >= 0) {
                    Howler._howls.splice(index, 1);
                }
            }
            var remCache = true;
            for (i = 0; i < Howler._howls.length; i++) {
                if (Howler._howls[i]._src === self._src) {
                    remCache = false;
                    break;
                }
            }

            if (cache && remCache) {
                delete cache[self._src];
            }
            self._state = 'unloaded';
            self._sounds = [];
            self = null;

            return null;
        },
        on: function (event, fn, id, once) {
            var self = this;
            var events = self['_on' + event];

            if (typeof fn === 'function') {
                events.push(once ? {
                    id: id,
                    fn: fn,
                    once: once
                } : {
                    id: id,
                    fn: fn
                });
            }

            return self;
        },
        off: function (event, fn, id) {
            var self = this;
            var events = self['_on' + event];
            var i = 0;

            if (fn) {
                for (i = 0; i < events.length; i++) {
                    if (fn === events[i].fn && id === events[i].id) {
                        events.splice(i, 1);
                        break;
                    }
                }
            } else if (event) {
                self['_on' + event] = [];
            } else {
                var keys = Object.keys(self);
                for (i = 0; i < keys.length; i++) {
                    if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
                        self[keys[i]] = [];
                    }
                }
            }

            return self;
        },
        once: function (event, fn, id) {
            var self = this;
            self.on(event, fn, id, 1);

            return self;
        },
        _emit: function (event, id, msg) {
            var self = this;
            var events = self['_on' + event];
            for (var i = events.length - 1; i >= 0; i--) {
                if (!events[i].id || events[i].id === id || event === 'load') {
                    setTimeout(function (fn) {
                        fn.call(this, id, msg);
                    }.bind(self, events[i].fn), 0);
                    if (events[i].once) {
                        self.off(event, events[i].fn, events[i].id);
                    }
                }
            }

            return self;
        },
        _loadQueue: function () {
            var self = this;

            if (self._queue.length > 0) {
                var task = self._queue[0];
                self.once(task.event, function () {
                    self._queue.shift();
                    self._loadQueue();
                });

                task.action();
            }

            return self;
        },
        _ended: function (sound) {
            var self = this;
            var sprite = sound._sprite;
            var loop = !!(sound._loop || self._sprite[sprite][2]);
            self._emit('end', sound._id);
            if (!self._webAudio && loop) {
                self.stop(sound._id, true).play(sound._id);
            }
            if (self._webAudio && loop) {
                self._emit('play', sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler.ctx.currentTime;

                var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }
            if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);
                self._cleanBuffer(sound._node);
                Howler._autoSuspend();
            }
            if (!self._webAudio && !loop) {
                self.stop(sound._id);
            }

            return self;
        },
        _clearTimer: function (id) {
            var self = this;

            if (self._endTimers[id]) {
                clearTimeout(self._endTimers[id]);
                delete self._endTimers[id];
            }

            return self;
        },
        _soundById: function (id) {
            var self = this;
            for (var i = 0; i < self._sounds.length; i++) {
                if (id === self._sounds[i]._id) {
                    return self._sounds[i];
                }
            }

            return null;
        },
        _inactiveSound: function () {
            var self = this;

            self._drain();
            for (var i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                    return self._sounds[i].reset();
                }
            }
            return new Sound(self);
        },
        _drain: function () {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;
            if (self._sounds.length < limit) {
                return;
            }
            for (i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                    cnt++;
                }
            }
            for (i = self._sounds.length - 1; i >= 0; i--) {
                if (cnt <= limit) {
                    return;
                }

                if (self._sounds[i]._ended) {
                    if (self._webAudio && self._sounds[i]._node) {
                        self._sounds[i]._node.disconnect(0);
                    }
                    self._sounds.splice(i, 1);
                    cnt--;
                }
            }
        },
        _getSoundIds: function (id) {
            var self = this;

            if (typeof id === 'undefined') {
                var ids = [];
                for (var i = 0; i < self._sounds.length; i++) {
                    ids.push(self._sounds[i]._id);
                }

                return ids;
            } else {
                return [id];
            }
        },
        _refreshBuffer: function (sound) {
            var self = this;
            sound._node.bufferSource = Howler.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];
            if (sound._panner) {
                sound._node.bufferSource.connect(sound._panner);
            } else {
                sound._node.bufferSource.connect(sound._node);
            }
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop;
            }
            sound._node.bufferSource.playbackRate.value = sound._rate;

            return self;
        },
        _cleanBuffer: function (node) {
            var self = this;

            if (self._scratchBuffer) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                try {
                    node.bufferSource.buffer = self._scratchBuffer;
                } catch (e) {}
            }
            node.bufferSource = null;

            return self;
        }
    };
    var Sound = function (howl) {
        this._parent = howl;
        this.init();
    };
    Sound.prototype = {
        init: function () {
            var self = this;
            var parent = self._parent;
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._muted = parent._muted;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';
            self._id = Math.round(Date.now() * Math.random());
            parent._sounds.push(self);
            self.create();

            return self;
        },
        create: function () {
            var self = this;
            var parent = self._parent;
            var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

            if (parent._webAudio) {
                self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler.masterGain);
            } else {
                self._node = new Audio();
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener('error', self._errorFn, false);
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);
                self._node.src = parent._src;
                self._node.preload = 'auto';
                self._node.volume = Math.min(Math.max(0, volume * Howler.volume()), 1);
                self._node.load();
            }

            return self;
        },
        reset: function () {
            var self = this;
            var parent = self._parent;
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._muted = parent._muted;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';
            self._id = Math.round(Date.now() * Math.random());

            return self;
        },
        _errorListener: function () {
            var self = this;

            if (self._node.error && self._node.error.code === 4) {
                Howler.noAudio = true;
            }
            self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);
            self._node.removeEventListener('error', self._errorListener, false);
        },
        _loadListener: function () {
            var self = this;
            var parent = self._parent;
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            if (Object.keys(parent._sprite).length === 0) {
                parent._sprite = {
                    __default: [0, parent._duration * 1000]
                };
            }

            if (parent._state !== 'loaded') {
                parent._state = 'loaded';
                parent._emit('load');
                parent._loadQueue();
            }

            if (parent._autoplay) {
                parent.play();
            }
            self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
        }
    };

    var cache = {};
    var loadBuffer = function (self) {
        var url = self._src;
        if (cache[url]) {
            self._duration = cache[url].duration;
            loadSound(self);

            return;
        }

        if (/^data:[^;]+;base64,/.test(url)) {
            var data = atob(url.split(',')[1]);
            var dataView = new Uint8Array(data.length);
            for (var i = 0; i < data.length; ++i) {
                dataView[i] = data.charCodeAt(i);
            }

            decodeAudioData(dataView.buffer, self);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                var code = (xhr.status + '')[0];
                if (code !== '0' && code !== '2' && code !== '3') {
                    self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
                    return;
                }

                decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function () {
                if (self._webAudio) {
                    self._html5 = true;
                    self._webAudio = false;
                    self._sounds = [];
                    delete cache[url];
                    self.load();
                }
            };
            safeXhrSend(xhr);
        }
    };
    var safeXhrSend = function (xhr) {
        try {
            xhr.send();
        } catch (e) {
            xhr.onerror();
        }
    };
    var decodeAudioData = function (arraybuffer, self) {
        Howler.ctx.decodeAudioData(arraybuffer, function (buffer) {
            if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
            }
        }, function () {
            self._emit('loaderror', null, 'Decoding audio data failed.');
        });
    };
    var loadSound = function (self, buffer) {
        if (buffer && !self._duration) {
            self._duration = buffer.duration;
        }
        if (Object.keys(self._sprite).length === 0) {
            self._sprite = {
                __default: [0, self._duration * 1000]
            };
        }
        if (self._state !== 'loaded') {
            self._state = 'loaded';
            self._emit('load');
            self._loadQueue();
        }
        if (self._autoplay) {
            self.play();
        }
    };
    var setupAudioContext = function () {
        Howler.noAudio = false;
        try {
            if (typeof AudioContext !== 'undefined') {
                Howler.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== 'undefined') {
                Howler.ctx = new webkitAudioContext();
            } else {
                Howler.usingWebAudio = false;
            }
        } catch (e) {
            Howler.usingWebAudio = false;
        }

        if (!Howler.usingWebAudio) {
            if (typeof Audio !== 'undefined') {
                try {
                    var test = new Audio();
                    if (typeof test.oncanplaythrough === 'undefined') {
                        Howler._canPlayEvent = 'canplay';
                    }
                } catch (e) {
                    Howler.noAudio = true;
                }
            } else {
                Howler.noAudio = true;
            }
        }
        try {
            var test = new Audio();
            if (test.muted) {
                Howler.noAudio = true;
            }
        } catch (e) {}
        var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
        var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
            if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
                Howler.usingWebAudio = false;
            }
        }
        if (Howler.usingWebAudio) {
            Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
            Howler.masterGain.gain.value = 1;
            Howler.masterGain.connect(Howler.ctx.destination);
        }
        Howler._setup();
    };
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return {
                Howler: Howler,
                Howl: Howl
            };
        });
    }
    if (typeof exports !== 'undefined') {
        exports.Howler = Howler;
        exports.Howl = Howl;
    }
    if (typeof window !== 'undefined') {
        window.HowlerGlobal = HowlerGlobal;
        window.Howler = Howler;
        window.Howl = Howl;
        window.Sound = Sound;
    } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
        global.HowlerGlobal = HowlerGlobal;
        global.Howler = Howler;
        global.Howl = Howl;
        global.Sound = Sound;
    }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.0-rc2
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function () {

    'use strict';
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function (pan) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
            return self;
        }
        for (var i = self._howls.length - 1; i >= 0; i--) {
            self._howls[i].stereo(pan);
        }

        return self;
    };
    HowlerGlobal.prototype.pos = function (x, y, z) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
            return self;
        }
        y = (typeof y !== 'number') ? self._pos[1] : y;
        z = (typeof z !== 'number') ? self._pos[2] : z;

        if (typeof x === 'number') {
            self._pos = [x, y, z];
            self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        } else {
            return self._pos;
        }

        return self;
    };
    HowlerGlobal.prototype.orientation = function (x, y, z, xUp, yUp, zUp) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
            return self;
        }
        var or = self._orientation;
        y = (typeof y !== 'number') ? or[1] : y;
        z = (typeof z !== 'number') ? or[2] : z;
        xUp = (typeof xUp !== 'number') ? or[3] : xUp;
        yUp = (typeof yUp !== 'number') ? or[4] : yUp;
        zUp = (typeof zUp !== 'number') ? or[5] : zUp;

        if (typeof x === 'number') {
            self._orientation = [x, y, z, xUp, yUp, zUp];
            self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        } else {
            return or;
        }

        return self;
    };
    Howl.prototype.init = (function (_super) {
        return function (o) {
            var self = this;
            self._orientation = o.orientation || [1, 0, 0];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
                coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
                coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
                coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
                distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
                maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
                panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
                refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
                rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
            };
            self._onstereo = o.onstereo ? [{
                fn: o.onstereo
            }] : [];
            self._onpos = o.onpos ? [{
                fn: o.onpos
            }] : [];
            self._onorientation = o.onorientation ? [{
                fn: o.onorientation
            }] : [];
            return _super.call(this, o);
        };
    })(Howl.prototype.init);
    Howl.prototype.stereo = function (pan, id) {
        var self = this;
        if (!self._webAudio) {
            return self;
        }
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'stereo',
                action: function () {
                    self.stereo(pan, id);
                }
            });

            return self;
        }
        var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';
        if (typeof id === 'undefined') {
            if (typeof pan === 'number') {
                self._stereo = pan;
                self._pos = [pan, 0, 0];
            } else {
                return self._stereo;
            }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);

            if (sound) {
                if (typeof pan === 'number') {
                    sound._stereo = pan;
                    sound._pos = [pan, 0, 0];

                    if (sound._node) {
                        sound._pannerAttr.panningModel = 'equalpower';
                        if (!sound._panner || !sound._panner.pan) {
                            setupPanner(sound, pannerType);
                        }

                        if (pannerType === 'spatial') {
                            sound._panner.setPosition(pan, 0, 0);
                        } else {
                            sound._panner.pan.value = pan;
                        }
                    }

                    self._emit('stereo', sound._id);
                } else {
                    return sound._stereo;
                }
            }
        }

        return self;
    };
    Howl.prototype.pos = function (x, y, z, id) {
        var self = this;
        if (!self._webAudio) {
            return self;
        }
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'pos',
                action: function () {
                    self.pos(x, y, z, id);
                }
            });

            return self;
        }
        y = (typeof y !== 'number') ? 0 : y;
        z = (typeof z !== 'number') ? -0.5 : z;
        if (typeof id === 'undefined') {
            if (typeof x === 'number') {
                self._pos = [x, y, z];
            } else {
                return self._pos;
            }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);

            if (sound) {
                if (typeof x === 'number') {
                    sound._pos = [x, y, z];

                    if (sound._node) {
                        if (!sound._panner || sound._panner.pan) {
                            setupPanner(sound, 'spatial');
                        }

                        sound._panner.setPosition(x, y, z);
                    }

                    self._emit('pos', sound._id);
                } else {
                    return sound._pos;
                }
            }
        }

        return self;
    };
    Howl.prototype.orientation = function (x, y, z, id) {
        var self = this;
        if (!self._webAudio) {
            return self;
        }
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'orientation',
                action: function () {
                    self.orientation(x, y, z, id);
                }
            });

            return self;
        }
        y = (typeof y !== 'number') ? self._orientation[1] : y;
        z = (typeof z !== 'number') ? self._orientation[2] : z;
        if (typeof id === 'undefined') {
            if (typeof x === 'number') {
                self._orientation = [x, y, z];
            } else {
                return self._orientation;
            }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);

            if (sound) {
                if (typeof x === 'number') {
                    sound._orientation = [x, y, z];

                    if (sound._node) {
                        if (!sound._panner) {
                            if (!sound._pos) {
                                sound._pos = self._pos || [0, 0, -0.5];
                            }

                            setupPanner(sound, 'spatial');
                        }

                        sound._panner.setOrientation(x, y, z);
                    }

                    self._emit('orientation', sound._id);
                } else {
                    return sound._orientation;
                }
            }
        }

        return self;
    };
    Howl.prototype.pannerAttr = function () {
        var self = this;
        var args = arguments;
        var o, id, sound;
        if (!self._webAudio) {
            return self;
        }
        if (args.length === 0) {
            return self._pannerAttr;
        } else if (args.length === 1) {
            if (typeof args[0] === 'object') {
                o = args[0];
                if (typeof id === 'undefined') {
                    self._pannerAttr = {
                        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : self._coneInnerAngle,
                        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : self._coneOuterAngle,
                        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : self._coneOuterGain,
                        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : self._distanceModel,
                        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : self._maxDistance,
                        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : self._panningModel,
                        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : self._refDistance,
                        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : self._rolloffFactor
                    };
                }
            } else {
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._pannerAttr : self._pannerAttr;
            }
        } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            sound = self._soundById(ids[i]);

            if (sound) {
                var pa = sound._pannerAttr;
                pa = {
                    coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
                    coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
                    coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
                    distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
                    maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
                    panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel,
                    refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
                    rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor
                };
                var panner = sound._panner;
                if (panner) {
                    panner.coneInnerAngle = pa.coneInnerAngle;
                    panner.coneOuterAngle = pa.coneOuterAngle;
                    panner.coneOuterGain = pa.coneOuterGain;
                    panner.distanceModel = pa.distanceModel;
                    panner.maxDistance = pa.maxDistance;
                    panner.panningModel = pa.panningModel;
                    panner.refDistance = pa.refDistance;
                    panner.rolloffFactor = pa.rolloffFactor;
                } else {
                    if (!sound._pos) {
                        sound._pos = self._pos || [0, 0, -0.5];
                    }
                    setupPanner(sound, 'spatial');
                }
            }
        }

        return self;
    };
    Sound.prototype.init = (function (_super) {
        return function () {
            var self = this;
            var parent = self._parent;
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            _super.call(this);
            if (self._stereo) {
                parent.stereo(self._stereo);
            } else if (self._pos) {
                parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            }
        };
    })(Sound.prototype.init);
    Sound.prototype.reset = (function (_super) {
        return function () {
            var self = this;
            var parent = self._parent;
            self._orientation = parent._orientation;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            return _super.call(this);
        };
    })(Sound.prototype.reset);
    var setupPanner = function (sound, type) {
        type = type || 'spatial';
        if (type === 'spatial') {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.panningModel = sound._pannerAttr.panningModel;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        } else {
            sound._panner = Howler.ctx.createStereoPanner();
            sound._panner.pan.value = sound._stereo;
        }

        sound._panner.connect(sound._node);
        if (!sound._paused) {
            sound._parent.pause(sound._id, true).play(sound._id);
        }
    };
})();
