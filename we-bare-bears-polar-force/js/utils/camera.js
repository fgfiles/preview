var WONBATS = WONBATS || {};

(function () {
    function Camera(movieClipContainer, screenRatio, layersMult) {
        this.container = movieClipContainer;
        this.ratio = screenRatio;
        this.mult = layersMult;
        this.target = null;
        this.zoom = 1;
        this.targetPoint = {
            x: -440,
            y: -265
        };

        this.currentPoint = {
            x: -440,
            y: -265
        };

        this.shakePoint = {
            x: 0,
            y: 0
        };

        this.zoomSpeed = 5;
        this.zoomRestore = false;
        this.zoomRestoreDelay = 0;
        this.previousZoomConfig = {
            zoom: this.zoom,
            zoomSpeed: this.zoomSpeed
        };

        this.shakeIntensity = 0;
        this.shakeDuration = 0;
    }

    Camera.TILE_WIDTH = 1399;

    Camera.prototype.follow = function (movieClipTarget, force) {
        this.target = movieClipTarget;
        if (force && this.target) {
            this.targetPoint.x = (this.target.x + this.target.parent.x + this.target.parent.parent.x);
            this.targetPoint.y = (this.target.y + this.target.parent.y + this.target.parent.parent.y);

            this.container.scale.x = (this.zoom - this.container.scale.x);
            this.container.scale.y = (this.zoom - this.container.scale.y);

            this.currentPoint.x = (this.targetPoint.x - this.currentPoint.x);
            this.currentPoint.y = (this.targetPoint.y - this.currentPoint.y);

            this.container.x = game.config.GAME_WIDTH * this.ratio[0] + this.currentPoint.x * this.container.scale.x;
            this.container.y = game.config.GAME_HEIGHT * this.ratio[1] + this.currentPoint.y * this.container.scale.y;
        }
    };

    Camera.prototype.shake = function (intensity, duration) {
        this.shakeIntensity = intensity;
        this.shakeDuration = duration;
    }

    Camera.prototype.setZoom = function (value, speed, restoreDelay, restoreZoom, restoreSpeed) {
        this.zoom = value;
        this.zoomSpeed = speed || 5;

        this.zoomRestoreDelay = restoreDelay || 0;
        if (restoreDelay > 0) {
            this.zoomRestore = true;
        }

        if (restoreZoom) {
            this.previousZoomConfig.zoom = restoreZoom;
        }

        if (restoreSpeed) {
            this.previousZoomConfig.zoomSpeed = restoreSpeed;
        }
    };

    Camera.prototype.update = function (dt) {
        if (this.shakeDuration > 0) {
            this.shakeDuration -= dt;
            this.shakePoint.x = (-this.shakeIntensity / 2 + Math.random() * this.shakeIntensity);
            this.shakePoint.y = (-this.shakeIntensity / 2 + Math.random() * this.shakeIntensity);
        } else {
            this.shakePoint.x = 0;
            this.shakePoint.y = 0;
        }

        if (this.zoomRestore) {
            this.zoomRestoreDelay -= dt;
            if (this.zoomRestoreDelay <= 0) {
                this.zoomRestore = false;
                this.zoom = this.previousZoomConfig.zoom;
                this.zoomSpeed = this.previousZoomConfig.zoomSpeed;
            }
        }

        this.container.scale.x += (this.zoom - this.container.scale.x) * dt * this.zoomSpeed;
        this.container.scale.y += (this.zoom - this.container.scale.y) * dt * this.zoomSpeed;

        this.currentPoint.x += (this.targetPoint.x - this.currentPoint.x) * dt * this.zoomSpeed;
        this.currentPoint.y += (this.targetPoint.y - this.currentPoint.y) * dt * this.zoomSpeed;

        this.container.x = game.config.GAME_WIDTH * this.ratio[0] + this.currentPoint.x * this.container.scale.x + this.shakePoint.x;
        this.container.y = game.config.GAME_HEIGHT * this.ratio[1] + this.currentPoint.y * this.container.scale.y + this.shakePoint.y;

        for (var i = 0; i < this.container.children[0].children.length; i++) {
            var layer = this.container.children[0].children[i];
            layer.x = this.currentPoint.x * this.mult[i];

            if (layer.name !== "gameplay") {
                for (var j = 0; j < layer.children.length; j++) {
                    var tile = layer.children[j];
                    var globalX = ((tile.x + layer.x) * this.container.scale.x + this.container.x + this.container.children[0].x);
                    var tileWidth = tile.getChildByName("size").scale.x * 100;

                    if (globalX < -tileWidth * this.container.scale.x) {
                        tile.x += layer.children.length * tileWidth;
                    } else if (globalX > game.config.GAME_WIDTH) {
                        tile.x -= layer.children.length * tileWidth;
                    }
                }
            }

        }

        if (!this.target)
            return;

        this.targetPoint.x = -(this.target.x + this.target.parent.x + this.target.parent.parent.x);
        this.targetPoint.y = -(this.target.y + this.target.parent.y + this.target.parent.parent.y);
    };

    Camera.prototype.dispose = function () {
        this.container = null;
        this.ratio = null;
        this.mult = null;
        this.target = null;
        this.zoom = null;
        this.targetPoint = null;

        this.currentPoint = null;

        this.shakePoint = null;

        this.zoomSpeed = null;
        this.zoomRestore = null;
        this.zoomRestoreDelay = null;
        this.previousZoomConfig = null;

        this.shakeIntensity = null;
        this.shakeDuration = null;
    };

    WONBATS.Camera = Camera;
}());
