var DEBUG = false;
var WONBATS = WONBATS || {};

(function () {
    function MovieClip(json, classname) {
        PIXI.Container.call(this);

        this.json = json;
        this.classname = classname || "Root";
        this.fps = 0;
        this.totalFrames = 1;
        this.currentFrame = -1;
        this.labels = {};
        this.childrenPool = [];
        this.layers = [];
        this.layersName = {};
        this.time = 0;
        this.playable = false;
        this.speed = 1;
        this.multiplier = this.speed;
        this.wasPlayingBeforeStopAll = true;
        this.tint = -1;
        this.attribs = {};

        if (this.classname !== "_dummy") {
            this.parse(json[this.classname]);
            this.update(0, true);
        }
    }

    MovieClip.prototype = Object.create(PIXI.Container.prototype);
    MovieClip.prototype.constructor = MovieClip;

    MovieClip.prototype.parse = function (config) {
        this.config = config;
        if (config.type === "movieclip") {
            this.fps = config.fps || 0;
            this.totalFrames = config.totalFrames || 1;
            this.labels = config.labels || this.labels;
            this.playable = true;

            for (var i = 0; i < config.layers.length; i++) {
                this.layers[i] = null;
                this.layersName[config.layers[i].name] = i;
            }

        } else if (config.type === "bitmap") {
            var sprite = PIXI.Sprite.fromFrame(config.asset);
            sprite.scale.x = sprite.scale.y = 1 / config.scale;
            sprite.x = config.position[0];
            sprite.y = config.position[1];

            this.addChild(sprite);

            if (DEBUG) {
                sprite.alpha = 1;
                var graphics = new PIXI.Graphics();
                graphics.lineStyle(0.5, 0xFFFFFF, 1);
                graphics.beginFill(0x333333, 0.8);
                graphics.drawPolygon(-2, 0, 0, -2, 16, 0, 0, 2, -2, 0);
                graphics.endFill();
                graphics.name = "pivot";
                this.addChild(graphics);
            }
        }
    };

    MovieClip.prototype.getChildByLayerName = function (name) {
        var layerIndex = this.layersName[name];

        if (layerIndex !== undefined) {
            return this.layers[layerIndex];
        } else {
            return null;
        }
    };

    MovieClip.prototype.changeSpeed = function (speed) {
        this.speed = speed;

        if (this.multiplier !== 0) {
            this.play();
        }
    };

    MovieClip.prototype.play = function () {
        this.multiplier = this.speed;
    };

    MovieClip.prototype.playAll = function () {
        if (this.wasPlayingBeforeStopAll) {
            this.play();
        }

        for (var i = 0; i < this.layers.length; i++) {
            if (this.layers[i]) {
                this.layers[i].playAll();
            }
        }
    };

    MovieClip.prototype.stop = function () {
        this.multiplier = 0;
    };

    MovieClip.prototype.stopAll = function () {
        this.wasPlayingBeforeStopAll = this.multiplier > 0;
        this.stop();

        for (var i = 0; i < this.layers.length; i++) {
            if (this.layers[i]) {
                this.layers[i].stopAll();
            }
        }
    };

    MovieClip.prototype.gotoAndPlay = function (frame) {
        if (this.labels[frame] !== undefined) {
            frame = this.labels[frame].from;
        }

        this.time = frame / this.fps;
        this.play();
    };

    MovieClip.prototype.gotoAndStop = function (frame) {
        if (this.labels[frame] !== undefined) {
            frame = this.labels[frame].from;
        }

        this.time = frame / this.fps;
        this.stop();
    };

    MovieClip.prototype.getCurrentLabel = function () {
        var frame = Math.floor(this.time * this.fps);

        for (var key in this.labels) {
            if (frame >= this.labels[key].from && frame <= this.labels[key].to) {
                return key;
            }
        }

        return "";
    };

    MovieClip.prototype.getFreeChild = function (classname) {
        for (var i = 0; i < this.childrenPool.length; i++) {
            if (this.childrenPool[i].classname === classname && !this.childrenPool[i].parent) {
                return this.childrenPool[i];
            }
        }

        var mc = new MovieClip(this.json, classname);
        this.childrenPool.push(mc);
        return mc;
    };

    MovieClip.prototype.getBezierHeight = function (points, t) {
        var i = 3;

        while (t > points[i][0]) {
            i += 3;
        }

        var p0 = points[i - 3];
        var p1 = points[i - 2];
        var p2 = points[i - 1];
        var p3 = points[i - 0];

        t = (t - p0[0]) / (p3[0] - p0[0]);

        var height = Math.pow((1 - t), 3) * p0[1] + 3 * Math.pow((1 - t), 2) * t * p1[1] + 3 * (1 - t) * Math.pow(t, 2) * p2[1] + Math.pow(t, 3) * p3[1];

        return height;
    };

    MovieClip.prototype.applyTint = function (movie) {
        for (var i = 0; i < movie.children.length; i++) {
            movie.children[i].tint = this.tint;
            this.applyTint(movie.children[i]);
        }
    };

    MovieClip.prototype.update = function (dt, firstUpdate) {
        if (this.playable && (this.parent || firstUpdate)) {
            this.time += dt * this.multiplier;

            if (this.time >= ((this.totalFrames) / this.fps)) {
                this.time = 0;
            }

            var frame = Math.floor(this.time * this.fps);
            var isNewFrame = false;

            if (this.currentFrame !== frame) {
                isNewFrame = true;
                this.currentFrame = frame;
            }

            for (var i = 0; i < this.config.layers.length; i++) {
                var layer = this.config.layers[i];
                var keyFound = false;

                for (var j = 0; j < layer.keys.length && !keyFound; j++) {
                    var key = layer.keys[j];
                    var from = key.from / this.fps;
                    var to = (key.to + 1) / this.fps;

                    if (this.time >= from && this.time < to) {
                        keyFound = true;

                        if (key.classname === undefined) {
                            key.classname = "_dummy";
                            key.instancename = "_dummy" + i;
                        }

                        var index = Math.min(i, this.children.length);

                        if (this.layers[i]) {
                            if (this.layers[i].classname !== key.classname) {
                                this.layers[i].resetTime();

                                if (this.layers[i].parent) {
                                    index = this.getChildIndex(this.layers[i]);
                                    this.removeChild(this.layers[i]);
                                }

                                this.layers[i] = null;
                            }
                        }

                        if (!this.layers[i]) {
                            var child = this.getFreeChild(key.classname);
                            child.name = key.instancename;
                            this.layers[i] = child;
                            this.addChildAt(child, index);
                        }

                        this.updateLayer(dt * this.speed, this.layers[i], layer, j, from, to, isNewFrame);

                        if (isNewFrame && key.actions) {
                            key.actions(this);
                        }
                    }
                }
            }
        } else {
            this.time = 0;
        }

        if (this.tint !== -1) {
            this.applyTint(this);
            if (this.tint === 0xffffff) {
                this.tint = -1;
            }
        }
    };

    MovieClip.prototype.resetTime = function () {
        this.time = 0;
        this.play();

        for (var i = 0; i < this.layers.length; i++) {
            this.layers[i].resetTime();
        }
    }

    MovieClip.prototype.updateLayer = function (dt, mc, layer, j, from, to, isNewFrame) {
        if (mc.classname === "_dummy") return;

        var key = layer.keys[j];

        var posX = key.transform[0];
        var posY = key.transform[1];
        var sclX = key.transform[2];
        var sclY = key.transform[3];
        var skwX = key.transform[4];
        var skwY = key.transform[5];
        var alpha = key.alpha;
        var visible = key.visible;

        var posXDiff = 0;
        var posYDiff = 0;
        var sclXDiff = 0;
        var sclYDiff = 0;
        var skwXDiff = 0;
        var skwYDiff = 0;
        var alphaDiff = 0;
        var visibleDiff = false;

        if (key.tween && layer.keys[j + 1] && layer.keys[j + 1].classname) {
            var nextKey = layer.keys[j + 1];
            var t = Math.min(1, Math.max((this.time - from) / (to - from), 0));

            var pr = 0;
            var scr = 0;
            var skr = 0;
            var ar = 0;

            if (key.easing.all) {
                pr = scr = skr = ar = this.getBezierHeight(key.easing.all, t);
            }

            if (key.easing.position) {
                pr = this.getBezierHeight(key.easing.position, t);
            }

            if (key.easing.scale) {
                scr = this.getBezierHeight(key.easing.scale, t);
            }

            if (key.easing.rotation) {
                skr = this.getBezierHeight(key.easing.rotation, t);
            }

            if (key.easing.color) {
                ar = this.getBezierHeight(key.easing.color, t);
            }

            posXDiff = (nextKey.transform[0] - posX) * pr;
            posYDiff = (nextKey.transform[1] - posY) * pr;
            sclXDiff = (nextKey.transform[2] - sclX) * scr;
            sclYDiff = (nextKey.transform[3] - sclY) * scr;

            skwXDiff = nextKey.transform[4] - skwX;
            if (skwXDiff < -Math.PI) skwXDiff += Math.PI * 2;
            if (skwXDiff > Math.PI) skwXDiff -= Math.PI * 2;
            skwXDiff = skwXDiff * skr;

            skwYDiff = nextKey.transform[5] - skwY;
            if (skwYDiff < -Math.PI) skwYDiff += Math.PI * 2;
            if (skwYDiff > Math.PI) skwYDiff -= Math.PI * 2;
            skwYDiff = skwYDiff * skr;

            alphaDiff = (nextKey.alpha - alpha) * ar;

            visibleDiff = key.visible !== nextKey.visible;
        }

        if (posXDiff !== 0 || isNewFrame) mc.x = posX + posXDiff;
        if (posYDiff !== 0 || isNewFrame) mc.y = posY + posYDiff;
        if (sclXDiff !== 0 || isNewFrame) mc.scale.x = sclX + sclXDiff;
        if (sclYDiff !== 0 || isNewFrame) mc.scale.y = sclY + sclYDiff;
        if (skwXDiff !== 0 || isNewFrame) mc.skew.x = skwX + skwXDiff;
        if (skwYDiff !== 0 || isNewFrame) mc.skew.y = skwY + skwYDiff;
        if (alphaDiff !== 0 || isNewFrame) mc.alpha = alpha + alphaDiff;
        if (visibleDiff !== 0 || isNewFrame) mc.visible = visible;

        for (var attribKey in mc.attribs) {
            mc[attribKey] = mc.attribs[attribKey];
        }

        mc.update(dt);
    }

    WONBATS.MovieClip = MovieClip;
}());
