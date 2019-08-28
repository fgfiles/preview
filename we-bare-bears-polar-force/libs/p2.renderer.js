
(function () {

    var root = this;
    var PIXI = PIXI || {};

    PIXI.WEBGL_RENDERER = 0;
    PIXI.CANVAS_RENDERER = 1;
    PIXI.Point = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
    };
    PIXI.Point.prototype.clone = function () {
        return new PIXI.Point(this.x, this.y);
    };
    PIXI.Point.prototype.constructor = PIXI.Point;
    PIXI.Rectangle = function (x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
    };
    PIXI.Rectangle.prototype.clone = function () {
        return new PIXI.Rectangle(this.x, this.y, this.width, this.height);
    };
    PIXI.Rectangle.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0)
            return false;

        var x1 = this.x;
        if (x >= x1 && x <= x1 + this.width) {
            var y1 = this.y;

            if (y >= y1 && y <= y1 + this.height) {
                return true;
            }
        }

        return false;
    };
    PIXI.Rectangle.prototype.constructor = PIXI.Rectangle;
    PIXI.Polygon = function (points) {
        if (!(points instanceof Array))
            points = Array.prototype.slice.call(arguments);
        if (typeof points[0] === 'number') {
            var p = [];
            for (var i = 0, il = points.length; i < il; i += 2) {
                p.push(
                    new PIXI.Point(points[i], points[i + 1])
                );
            }

            points = p;
        }

        this.points = points;
    };
    PIXI.Polygon.prototype.clone = function () {
        var points = [];
        for (var i = 0; i < this.points.length; i++) {
            points.push(this.points[i].clone());
        }

        return new PIXI.Polygon(points);
    };
    PIXI.Polygon.prototype.contains = function (x, y) {
        var inside = false;
        for (var i = 0, j = this.points.length - 1; i < this.points.length; j = i++) {
            var xi = this.points[i].x,
                yi = this.points[i].y,
                xj = this.points[j].x,
                yj = this.points[j].y,
                intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

            if (intersect) inside = !inside;
        }

        return inside;
    };
    PIXI.Polygon.prototype.constructor = PIXI.Polygon;
    PIXI.Circle = function (x, y, radius) {
        this.x = x || 0;
        this.y = y || 0;
        this.radius = radius || 0;
    };
    PIXI.Circle.prototype.clone = function () {
        return new PIXI.Circle(this.x, this.y, this.radius);
    };
    PIXI.Circle.prototype.contains = function (x, y) {
        if (this.radius <= 0)
            return false;

        var dx = (this.x - x),
            dy = (this.y - y),
            r2 = this.radius * this.radius;

        dx *= dx;
        dy *= dy;

        return (dx + dy <= r2);
    };
    PIXI.Circle.prototype.constructor = PIXI.Circle;
    PIXI.Ellipse = function (x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
    };
    PIXI.Ellipse.prototype.clone = function () {
        return new PIXI.Ellipse(this.x, this.y, this.width, this.height);
    };
    PIXI.Ellipse.prototype.contains = function (x, y) {
        if (this.width <= 0 || this.height <= 0)
            return false;
        var normx = ((x - this.x) / this.width) - 0.5,
            normy = ((y - this.y) / this.height) - 0.5;

        normx *= normx;
        normy *= normy;

        return (normx + normy < 0.25);
    };

    PIXI.Ellipse.prototype.getBounds = function () {
        return new PIXI.Rectangle(this.x, this.y, this.width, this.height);
    };
    PIXI.Ellipse.prototype.constructor = PIXI.Ellipse;

    function determineMatrixArrayType() {
        PIXI.Matrix = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
        return PIXI.Matrix;
    }

    determineMatrixArrayType();

    PIXI.mat3 = {};

    PIXI.mat3.create = function () {
        var matrix = new PIXI.Matrix(9);

        matrix[0] = 1;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 0;
        matrix[4] = 1;
        matrix[5] = 0;
        matrix[6] = 0;
        matrix[7] = 0;
        matrix[8] = 1;

        return matrix;
    };


    PIXI.mat3.identity = function (matrix) {
        matrix[0] = 1;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 0;
        matrix[4] = 1;
        matrix[5] = 0;
        matrix[6] = 0;
        matrix[7] = 0;
        matrix[8] = 1;

        return matrix;
    };


    PIXI.mat4 = {};

    PIXI.mat4.create = function () {
        var matrix = new PIXI.Matrix(16);

        matrix[0] = 1;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 0;
        matrix[4] = 0;
        matrix[5] = 1;
        matrix[6] = 0;
        matrix[7] = 0;
        matrix[8] = 0;
        matrix[9] = 0;
        matrix[10] = 1;
        matrix[11] = 0;
        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;

        return matrix;
    };

    PIXI.mat3.multiply = function (mat, mat2, dest) {
        if (!dest) {
            dest = mat;
        }
        var a00 = mat[0],
            a01 = mat[1],
            a02 = mat[2],
            a10 = mat[3],
            a11 = mat[4],
            a12 = mat[5],
            a20 = mat[6],
            a21 = mat[7],
            a22 = mat[8],

            b00 = mat2[0],
            b01 = mat2[1],
            b02 = mat2[2],
            b10 = mat2[3],
            b11 = mat2[4],
            b12 = mat2[5],
            b20 = mat2[6],
            b21 = mat2[7],
            b22 = mat2[8];

        dest[0] = b00 * a00 + b01 * a10 + b02 * a20;
        dest[1] = b00 * a01 + b01 * a11 + b02 * a21;
        dest[2] = b00 * a02 + b01 * a12 + b02 * a22;

        dest[3] = b10 * a00 + b11 * a10 + b12 * a20;
        dest[4] = b10 * a01 + b11 * a11 + b12 * a21;
        dest[5] = b10 * a02 + b11 * a12 + b12 * a22;

        dest[6] = b20 * a00 + b21 * a10 + b22 * a20;
        dest[7] = b20 * a01 + b21 * a11 + b22 * a21;
        dest[8] = b20 * a02 + b21 * a12 + b22 * a22;

        return dest;
    };

    PIXI.mat3.clone = function (mat) {
        var matrix = new PIXI.Matrix(9);

        matrix[0] = mat[0];
        matrix[1] = mat[1];
        matrix[2] = mat[2];
        matrix[3] = mat[3];
        matrix[4] = mat[4];
        matrix[5] = mat[5];
        matrix[6] = mat[6];
        matrix[7] = mat[7];
        matrix[8] = mat[8];

        return matrix;
    };

    PIXI.mat3.transpose = function (mat, dest) {
        if (!dest || mat === dest) {
            var a01 = mat[1],
                a02 = mat[2],
                a12 = mat[5];

            mat[1] = mat[3];
            mat[2] = mat[6];
            mat[3] = a01;
            mat[5] = mat[7];
            mat[6] = a02;
            mat[7] = a12;
            return mat;
        }

        dest[0] = mat[0];
        dest[1] = mat[3];
        dest[2] = mat[6];
        dest[3] = mat[1];
        dest[4] = mat[4];
        dest[5] = mat[7];
        dest[6] = mat[2];
        dest[7] = mat[5];
        dest[8] = mat[8];
        return dest;
    };

    PIXI.mat3.toMat4 = function (mat, dest) {
        if (!dest) {
            dest = PIXI.mat4.create();
        }

        dest[15] = 1;
        dest[14] = 0;
        dest[13] = 0;
        dest[12] = 0;

        dest[11] = 0;
        dest[10] = mat[8];
        dest[9] = mat[7];
        dest[8] = mat[6];

        dest[7] = 0;
        dest[6] = mat[5];
        dest[5] = mat[4];
        dest[4] = mat[3];

        dest[3] = 0;
        dest[2] = mat[2];
        dest[1] = mat[1];
        dest[0] = mat[0];

        return dest;
    };


    PIXI.mat4.create = function () {
        var matrix = new PIXI.Matrix(16);

        matrix[0] = 1;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 0;
        matrix[4] = 0;
        matrix[5] = 1;
        matrix[6] = 0;
        matrix[7] = 0;
        matrix[8] = 0;
        matrix[9] = 0;
        matrix[10] = 1;
        matrix[11] = 0;
        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;

        return matrix;
    };

    PIXI.mat4.transpose = function (mat, dest) {
        if (!dest || mat === dest) {
            var a01 = mat[1],
                a02 = mat[2],
                a03 = mat[3],
                a12 = mat[6],
                a13 = mat[7],
                a23 = mat[11];

            mat[1] = mat[4];
            mat[2] = mat[8];
            mat[3] = mat[12];
            mat[4] = a01;
            mat[6] = mat[9];
            mat[7] = mat[13];
            mat[8] = a02;
            mat[9] = a12;
            mat[11] = mat[14];
            mat[12] = a03;
            mat[13] = a13;
            mat[14] = a23;
            return mat;
        }

        dest[0] = mat[0];
        dest[1] = mat[4];
        dest[2] = mat[8];
        dest[3] = mat[12];
        dest[4] = mat[1];
        dest[5] = mat[5];
        dest[6] = mat[9];
        dest[7] = mat[13];
        dest[8] = mat[2];
        dest[9] = mat[6];
        dest[10] = mat[10];
        dest[11] = mat[14];
        dest[12] = mat[3];
        dest[13] = mat[7];
        dest[14] = mat[11];
        dest[15] = mat[15];
        return dest;
    };

    PIXI.mat4.multiply = function (mat, mat2, dest) {
        if (!dest) {
            dest = mat;
        }
        var a00 = mat[0],
            a01 = mat[1],
            a02 = mat[2],
            a03 = mat[3];
        var a10 = mat[4],
            a11 = mat[5],
            a12 = mat[6],
            a13 = mat[7];
        var a20 = mat[8],
            a21 = mat[9],
            a22 = mat[10],
            a23 = mat[11];
        var a30 = mat[12],
            a31 = mat[13],
            a32 = mat[14],
            a33 = mat[15];
        var b0 = mat2[0],
            b1 = mat2[1],
            b2 = mat2[2],
            b3 = mat2[3];
        dest[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        dest[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        dest[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        dest[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = mat2[4];
        b1 = mat2[5];
        b2 = mat2[6];
        b3 = mat2[7];
        dest[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        dest[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        dest[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        dest[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = mat2[8];
        b1 = mat2[9];
        b2 = mat2[10];
        b3 = mat2[11];
        dest[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        dest[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        dest[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        dest[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = mat2[12];
        b1 = mat2[13];
        b2 = mat2[14];
        b3 = mat2[15];
        dest[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        dest[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        dest[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        dest[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        return dest;
    };

    PIXI.identityMatrix = PIXI.mat3.create();
    PIXI.DisplayObject = function () {
        this.last = this;
        this.first = this;
        this.position = new PIXI.Point();
        this.scale = new PIXI.Point(1, 1); //{x:1, y:1};
        this.pivot = new PIXI.Point(0, 0);
        this.rotation = 0;
        this.alpha = 1;
        this.visible = true;
        this.hitArea = null;
        this.buttonMode = false;
        this.renderable = false;
        this.parent = null;
        this.stage = null;
        this.worldAlpha = 1;
        this._interactive = false;
        this.defaultCursor = 'pointer';
        this.worldTransform = PIXI.mat3.create(); //mat3.identity();
        this.localTransform = PIXI.mat3.create(); //mat3.identity();
        this.color = [];
        this.dynamic = true;
        this._sr = 0;
        this._cr = 1;


        this.filterArea = new PIXI.Rectangle(0, 0, 1, 1);
        this._bounds = new PIXI.Rectangle(0, 0, 1, 1);
        this._currentBounds = null;
        this._mask = null;
    };
    PIXI.DisplayObject.prototype.constructor = PIXI.DisplayObject;
    PIXI.DisplayObject.prototype.setInteractive = function (interactive) {
        this.interactive = interactive;
    };
    Object.defineProperty(PIXI.DisplayObject.prototype, 'interactive', {
        get: function () {
            return this._interactive;
        },
        set: function (value) {
            this._interactive = value;
            if (this.stage) this.stage.dirty = true;
        }
    });
    Object.defineProperty(PIXI.DisplayObject.prototype, 'worldVisible', {
        get: function () {
            var item = this;

            do {
                if (!item.visible) return false;
                item = item.parent;
            }
            while (item);

            return true;
        }
    });
    Object.defineProperty(PIXI.DisplayObject.prototype, 'mask', {
        get: function () {
            return this._mask;
        },
        set: function (value) {

            if (this._mask) this._mask.isMask = false;
            this._mask = value;
            if (this._mask) this._mask.isMask = true;
        }
    });
    Object.defineProperty(PIXI.DisplayObject.prototype, 'filters', {
        get: function () {
            return this._filters;
        },
        set: function (value) {

            if (value) {
                var passes = [];
                for (var i = 0; i < value.length; i++) {
                    var filterPasses = value[i].passes;
                    for (var j = 0; j < filterPasses.length; j++) {
                        passes.push(filterPasses[j]);
                    }
                }
                this._filterBlock = {
                    target: this,
                    filterPasses: passes
                };
            }

            this._filters = value;
        }
    });
    PIXI.DisplayObject.prototype.updateTransform = function () {
        if (this.rotation !== this.rotationCache) {
            this.rotationCache = this.rotation;
            this._sr = Math.sin(this.rotation);
            this._cr = Math.cos(this.rotation);
        }

        var localTransform = this.localTransform;
        var parentTransform = this.parent.worldTransform;
        var worldTransform = this.worldTransform;

        localTransform[0] = this._cr * this.scale.x;
        localTransform[1] = -this._sr * this.scale.y;
        localTransform[3] = this._sr * this.scale.x;
        localTransform[4] = this._cr * this.scale.y;

        var px = this.pivot.x;
        var py = this.pivot.y;
        var a00 = localTransform[0],
            a01 = localTransform[1],
            a02 = this.position.x - localTransform[0] * px - py * localTransform[1],
            a10 = localTransform[3],
            a11 = localTransform[4],
            a12 = this.position.y - localTransform[4] * py - px * localTransform[3],

            b00 = parentTransform[0],
            b01 = parentTransform[1],
            b02 = parentTransform[2],
            b10 = parentTransform[3],
            b11 = parentTransform[4],
            b12 = parentTransform[5];

        localTransform[2] = a02;
        localTransform[5] = a12;

        worldTransform[0] = b00 * a00 + b01 * a10;
        worldTransform[1] = b00 * a01 + b01 * a11;
        worldTransform[2] = b00 * a02 + b01 * a12 + b02;

        worldTransform[3] = b10 * a00 + b11 * a10;
        worldTransform[4] = b10 * a01 + b11 * a11;
        worldTransform[5] = b10 * a02 + b11 * a12 + b12;
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
    };

    PIXI.DisplayObject.prototype.getBounds = function () {
        return PIXI.EmptyRectangle;
    };

    PIXI.DisplayObject.prototype.getLocalBounds = function () {
        var matrixCache = this.worldTransform;

        this.worldTransform = PIXI.identityMatrix;

        this.updateTransform();

        var bounds = this.getBounds();

        this.worldTransform = matrixCache;

        return bounds;
    };

    PIXI.DisplayObject.prototype.setStageReference = function (stage) {
        this.stage = stage;
        if (this._interactive) this.stage.dirty = true;
    };

    PIXI.DisplayObject.prototype._renderWebGL = function (renderSession) {
        renderSession = renderSession;
    };

    PIXI.DisplayObject.prototype._renderCanvas = function (renderSession) {
        renderSession = renderSession;
    };

    PIXI.EmptyRectangle = new PIXI.Rectangle(0, 0, 0, 0);
    PIXI.DisplayObjectContainer = function () {
        PIXI.DisplayObject.call(this);
        this.children = [];
    };
    PIXI.DisplayObjectContainer.prototype = Object.create(PIXI.DisplayObject.prototype);
    PIXI.DisplayObjectContainer.prototype.constructor = PIXI.DisplayObjectContainer;
    PIXI.DisplayObjectContainer.prototype.addChild = function (child) {
        if (child.parent && child !== this) {
            child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.push(child);

        if (this.stage) child.setStageReference(this.stage);

    };
    PIXI.DisplayObjectContainer.prototype.addChildAt = function (child, index) {
        if (index >= 0 && index <= this.children.length) {
            if (child.parent) {
                child.parent.removeChild(child);
            }

            child.parent = this;

            this.children.splice(index, 0, child);

            if (this.stage) child.setStageReference(this.stage);
        } else {
            throw new Error(child + ' The index ' + index + ' supplied is out of bounds ' + this.children.length);
        }
    };
    PIXI.DisplayObjectContainer.prototype.swapChildren = function (child, child2) {
        if (child === child2) {
            return;
        }

        var index1 = this.children.indexOf(child);
        var index2 = this.children.indexOf(child2);

        if (index1 < 0 || index2 < 0) {
            throw new Error('swapChildren: Both the supplied DisplayObjects must be a child of the caller.');
        }

        this.children[index1] = child2;
        this.children[index2] = child;

    };
    PIXI.DisplayObjectContainer.prototype.getChildAt = function (index) {
        if (index >= 0 && index < this.children.length) {
            return this.children[index];
        } else {
            throw new Error('The supplied DisplayObjects must be a child of the caller ' + this);
        }
    };
    PIXI.DisplayObjectContainer.prototype.removeChild = function (child) {
        var index = this.children.indexOf(child);
        if (index !== -1) {
            if (this.stage) child.removeStageReference();

            child.parent = undefined;
            this.children.splice(index, 1);
        } else {
            throw new Error(child + ' The supplied DisplayObject must be a child of the caller ' + this);
        }
    };
    PIXI.DisplayObjectContainer.prototype.updateTransform = function () {

        if (!this.visible) return;

        PIXI.DisplayObject.prototype.updateTransform.call(this);

        for (var i = 0, j = this.children.length; i < j; i++) {
            this.children[i].updateTransform();
        }
    };

    PIXI.DisplayObjectContainer.prototype.getBounds = function () {
        if (this.children.length === 0) return PIXI.EmptyRectangle;


        var minX = Infinity;
        var minY = Infinity;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var childBounds;
        var childMaxX;
        var childMaxY;

        for (var i = 0, j = this.children.length; i < j; i++) {
            var child = this.children[i];

            if (!child.visible) continue;

            childBounds = this.children[i].getBounds();

            minX = minX < childBounds.x ? minX : childBounds.x;
            minY = minY < childBounds.y ? minY : childBounds.y;

            childMaxX = childBounds.width + childBounds.x;
            childMaxY = childBounds.height + childBounds.y;

            maxX = maxX > childMaxX ? maxX : childMaxX;
            maxY = maxY > childMaxY ? maxY : childMaxY;
        }

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.y = minY;
        bounds.width = maxX - minX;
        bounds.height = maxY - minY;

        return bounds;
    };

    PIXI.DisplayObjectContainer.prototype.setStageReference = function (stage) {
        this.stage = stage;
        if (this._interactive) this.stage.dirty = true;

        for (var i = 0, j = this.children.length; i < j; i++) {
            var child = this.children[i];
            child.setStageReference(stage);
        }
    };

    PIXI.DisplayObjectContainer.prototype.removeStageReference = function () {

        for (var i = 0, j = this.children.length; i < j; i++) {
            var child = this.children[i];
            child.removeStageReference();
        }

        if (this._interactive) this.stage.dirty = true;

        this.stage = null;
    };

    PIXI.DisplayObjectContainer.prototype._renderWebGL = function (renderSession) {
        if (this.visible === false || this.alpha === 0) return;

        var i, j;

        if (this._mask || this._filters) {
            if (this._mask) {
                renderSession.spriteBatch.stop();
                renderSession.maskManager.pushMask(this.mask, renderSession);
                renderSession.spriteBatch.start();
            }

            if (this._filters) {
                renderSession.spriteBatch.flush();
                renderSession.filterManager.pushFilter(this._filterBlock);
            }
            for (i = 0, j = this.children.length; i < j; i++) {
                this.children[i]._renderWebGL(renderSession);
            }

            renderSession.spriteBatch.stop();

            if (this._filters) renderSession.filterManager.popFilter();
            if (this._mask) renderSession.maskManager.popMask(renderSession);

            renderSession.spriteBatch.start();
        } else {
            for (i = 0, j = this.children.length; i < j; i++) {
                this.children[i]._renderWebGL(renderSession);
            }
        }
    };

    PIXI.DisplayObjectContainer.prototype._renderCanvas = function (renderSession) {
        if (this.visible === false || this.alpha === 0) return;

        if (this._mask) {
            renderSession.maskManager.pushMask(this._mask, renderSession.context);
        }

        for (var i = 0, j = this.children.length; i < j; i++) {
            var child = this.children[i];
            child._renderCanvas(renderSession);
        }

        if (this._mask) {
            renderSession.maskManager.popMask(renderSession.context);
        }
    };

    PIXI.blendModes = {};
    PIXI.blendModes.NORMAL = 0;
    PIXI.blendModes.ADD = 1;
    PIXI.blendModes.MULTIPLY = 2;
    PIXI.blendModes.SCREEN = 3;
    PIXI.Sprite = function (texture) {
        PIXI.DisplayObjectContainer.call(this);
        this.anchor = new PIXI.Point();
        this.texture = texture;
        this._width = 0;
        this._height = 0;
        this.tint = 0xFFFFFF; // * Math.random();
        this.blendMode = PIXI.blendModes.NORMAL;

        if (texture.baseTexture.hasLoaded) {
            this.onTextureUpdate();
        } else {
            this.onTextureUpdateBind = this.onTextureUpdate.bind(this);
            this.texture.addEventListener('update', this.onTextureUpdateBind);
        }

        this.renderable = true;
    };
    PIXI.Sprite.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    PIXI.Sprite.prototype.constructor = PIXI.Sprite;
    Object.defineProperty(PIXI.Sprite.prototype, 'width', {
        get: function () {
            return this.scale.x * this.texture.frame.width;
        },
        set: function (value) {
            this.scale.x = value / this.texture.frame.width;
            this._width = value;
        }
    });
    Object.defineProperty(PIXI.Sprite.prototype, 'height', {
        get: function () {
            return this.scale.y * this.texture.frame.height;
        },
        set: function (value) {
            this.scale.y = value / this.texture.frame.height;
            this._height = value;
        }
    });
    PIXI.Sprite.prototype.setTexture = function (texture) {
        if (this.texture.baseTexture !== texture.baseTexture) {
            this.textureChange = true;
            this.texture = texture;
        } else {
            this.texture = texture;
        }

        this.cachedTint = 0xFFFFFF;
        this.updateFrame = true;
    };
    PIXI.Sprite.prototype.onTextureUpdate = function () {
        if (this._width) this.scale.x = this._width / this.texture.frame.width;
        if (this._height) this.scale.y = this._height / this.texture.frame.height;


        this.updateFrame = true;
    };

    PIXI.Sprite.prototype.getBounds = function () {

        var width = this.texture.frame.width;
        var height = this.texture.frame.height;

        var w0 = width * (1 - this.anchor.x);
        var w1 = width * -this.anchor.x;

        var h0 = height * (1 - this.anchor.y);
        var h1 = height * -this.anchor.y;

        var worldTransform = this.worldTransform;

        var a = worldTransform[0];
        var b = worldTransform[3];
        var c = worldTransform[1];
        var d = worldTransform[4];
        var tx = worldTransform[2];
        var ty = worldTransform[5];

        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;

        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;

        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;

        var x4 = a * w1 + c * h0 + tx;
        var y4 = d * h0 + b * w1 + ty;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var minX = Infinity;
        var minY = Infinity;

        minX = x1 < minX ? x1 : minX;
        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;

        minY = y1 < minY ? y1 : minY;
        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;

        maxX = x1 > maxX ? x1 : maxX;
        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;

        maxY = y1 > maxY ? y1 : maxY;
        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;
        this._currentBounds = bounds;

        return bounds;
    };


    PIXI.Sprite.prototype._renderWebGL = function (renderSession) {
        if (this.visible === false || this.alpha === 0) return;

        var i, j;
        if (this._mask || this._filters) {
            var spriteBatch = renderSession.spriteBatch;

            if (this._mask) {
                spriteBatch.stop();
                renderSession.maskManager.pushMask(this.mask, renderSession);
                spriteBatch.start();
            }

            if (this._filters) {
                spriteBatch.flush();
                renderSession.filterManager.pushFilter(this._filterBlock);
            }
            spriteBatch.render(this);
            for (i = 0, j = this.children.length; i < j; i++) {
                this.children[i]._renderWebGL(renderSession);
            }
            spriteBatch.stop();

            if (this._filters) renderSession.filterManager.popFilter();
            if (this._mask) renderSession.maskManager.popMask(renderSession);

            spriteBatch.start();
        } else {
            renderSession.spriteBatch.render(this);
            for (i = 0, j = this.children.length; i < j; i++) {
                this.children[i]._renderWebGL(renderSession);
            }
        }
    };

    PIXI.Sprite.prototype._renderCanvas = function (renderSession) {
        if (this.visible === false || this.alpha === 0) return;

        if (this._mask) {
            renderSession.maskManager.pushMask(this._mask, renderSession.context);
        }

        var frame = this.texture.frame;
        var context = renderSession.context;
        var texture = this.texture;
        if (frame && frame.width && frame.height && texture.baseTexture.source) {
            context.globalAlpha = this.worldAlpha;

            var transform = this.worldTransform;

            context.setTransform(transform[0], transform[3], transform[1], transform[4], transform[2], transform[5]);
            if (this.blendMode !== renderSession.currentBlendMode) {
                renderSession.currentBlendMode = this.blendMode;
                context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
            }


            if (this.tint !== 0xFFFFFF) {
                if (this.cachedTint !== this.tint) {
                    if (!texture.baseTexture.hasLoaded) return;

                    this.cachedTint = this.tint;
                    this.tintedTexture = PIXI.CanvasTinter.getTintedTexture(this, this.tint);

                }

                context.drawImage(this.tintedTexture,
                    0,
                    0,
                    frame.width,
                    frame.height, (this.anchor.x) * -frame.width, (this.anchor.y) * -frame.height,
                    frame.width,
                    frame.height);
            } else {



                if (texture.trimmed) {
                    var trim = texture.trim;

                    context.drawImage(this.texture.baseTexture.source,
                        frame.x,
                        frame.y,
                        frame.width,
                        frame.height,
                        trim.x - this.anchor.x * trim.realWidth,
                        trim.y - this.anchor.y * trim.realHeight,
                        frame.width,
                        frame.height);
                } else {

                    context.drawImage(this.texture.baseTexture.source,
                        frame.x,
                        frame.y,
                        frame.width,
                        frame.height, (this.anchor.x) * -frame.width, (this.anchor.y) * -frame.height,
                        frame.width,
                        frame.height);
                }

            }
        }
        for (var i = 0, j = this.children.length; i < j; i++) {
            var child = this.children[i];
            child._renderCanvas(renderSession);
        }

        if (this._mask) {
            renderSession.maskManager.popMask(renderSession.context);
        }
    };
    PIXI.Sprite.fromFrame = function (frameId) {
        var texture = PIXI.TextureCache[frameId];
        if (!texture) throw new Error('The frameId "' + frameId + '" does not exist in the texture cache' + this);
        return new PIXI.Sprite(texture);
    };
    PIXI.Sprite.fromImage = function (imageId) {
        var texture = PIXI.Texture.fromImage(imageId);
        return new PIXI.Sprite(texture);
    };
    PIXI.MovieClip = function (textures) {
        PIXI.Sprite.call(this, textures[0]);
        this.textures = textures;
        this.animationSpeed = 1;
        this.loop = true;
        this.onComplete = null;
        this.currentFrame = 0;
        this.playing = false;
    };
    PIXI.MovieClip.prototype = Object.create(PIXI.Sprite.prototype);
    PIXI.MovieClip.prototype.constructor = PIXI.MovieClip;
    Object.defineProperty(PIXI.MovieClip.prototype, 'totalFrames', {
        get: function () {

            return this.textures.length;
        }
    });
    PIXI.MovieClip.prototype.stop = function () {
        this.playing = false;
    };
    PIXI.MovieClip.prototype.play = function () {
        this.playing = true;
    };
    PIXI.MovieClip.prototype.gotoAndStop = function (frameNumber) {
        this.playing = false;
        this.currentFrame = frameNumber;
        var round = (this.currentFrame + 0.5) | 0;
        this.setTexture(this.textures[round % this.textures.length]);
    };
    PIXI.MovieClip.prototype.gotoAndPlay = function (frameNumber) {
        this.currentFrame = frameNumber;
        this.playing = true;
    };
    PIXI.MovieClip.prototype.updateTransform = function () {
        PIXI.Sprite.prototype.updateTransform.call(this);

        if (!this.playing) return;

        this.currentFrame += this.animationSpeed;

        var round = (this.currentFrame + 0.5) | 0;

        if (this.loop || round < this.textures.length) {
            this.setTexture(this.textures[round % this.textures.length]);
        } else if (round >= this.textures.length) {
            this.gotoAndStop(this.textures.length - 1);
            if (this.onComplete) {
                this.onComplete();
            }
        }
    };



    PIXI.FilterBlock = function () {
        this.visible = true;
        this.renderable = true;
    };
    PIXI.Text = function (text, style) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        PIXI.Sprite.call(this, PIXI.Texture.fromCanvas(this.canvas));

        this.setText(text);
        this.setStyle(style);

        this.updateText();
        this.dirty = false;
    };
    PIXI.Text.prototype = Object.create(PIXI.Sprite.prototype);
    PIXI.Text.prototype.constructor = PIXI.Text;
    PIXI.Text.prototype.setStyle = function (style) {
        style = style || {};
        style.font = style.font || 'bold 20pt Arial';
        style.fill = style.fill || 'black';
        style.align = style.align || 'left';
        style.stroke = style.stroke || 'black'; //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
        style.strokeThickness = style.strokeThickness || 0;
        style.wordWrap = style.wordWrap || false;
        style.wordWrapWidth = style.wordWrapWidth || 100;
        this.style = style;
        this.dirty = true;
    };
    PIXI.Text.prototype.setText = function (text) {
        this.text = text.toString() || ' ';
        this.dirty = true;

    };
    PIXI.Text.prototype.updateText = function () {
        this.context.font = this.style.font;

        var outputText = this.text;
        if (this.style.wordWrap) outputText = this.wordWrap(this.text);
        var lines = outputText.split(/(?:\r\n|\r|\n)/);
        var lineWidths = [];
        var maxLineWidth = 0;
        for (var i = 0; i < lines.length; i++) {
            var lineWidth = this.context.measureText(lines[i]).width;
            lineWidths[i] = lineWidth;
            maxLineWidth = Math.max(maxLineWidth, lineWidth);
        }
        this.canvas.width = maxLineWidth + this.style.strokeThickness;
        var lineHeight = this.determineFontHeight('font: ' + this.style.font + ';') + this.style.strokeThickness;
        this.canvas.height = lineHeight * lines.length;

        if (navigator.isCocoonJS) this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = this.style.fill;
        this.context.font = this.style.font;

        this.context.strokeStyle = this.style.stroke;
        this.context.lineWidth = this.style.strokeThickness;

        this.context.textBaseline = 'top';
        for (i = 0; i < lines.length; i++) {
            var linePosition = new PIXI.Point(this.style.strokeThickness / 2, this.style.strokeThickness / 2 + i * lineHeight);

            if (this.style.align === 'right') {
                linePosition.x += maxLineWidth - lineWidths[i];
            } else if (this.style.align === 'center') {
                linePosition.x += (maxLineWidth - lineWidths[i]) / 2;
            }

            if (this.style.stroke && this.style.strokeThickness) {
                this.context.strokeText(lines[i], linePosition.x, linePosition.y);
            }

            if (this.style.fill) {
                this.context.fillText(lines[i], linePosition.x, linePosition.y);
            }
        }

        this.updateTexture();
    };
    PIXI.Text.prototype.updateTexture = function () {
        this.texture.baseTexture.width = this.canvas.width;
        this.texture.baseTexture.height = this.canvas.height;
        this.texture.frame.width = this.canvas.width;
        this.texture.frame.height = this.canvas.height;

        this._width = this.canvas.width;
        this._height = this.canvas.height;

        this.requiresUpdate = true;
    };

    PIXI.Text.prototype._renderWebGL = function (renderSession) {
        if (this.requiresUpdate) {
            this.requiresUpdate = false;
            PIXI.updateWebGLTexture(this.texture.baseTexture, renderSession.gl);
        }

        PIXI.Sprite.prototype._renderWebGL.call(this, renderSession);
    };
    PIXI.Text.prototype.updateTransform = function () {
        if (this.dirty) {
            this.updateText();
            this.dirty = false;
        }

        PIXI.Sprite.prototype.updateTransform.call(this);
    };
    PIXI.Text.prototype.determineFontHeight = function (fontStyle) {
        var result = PIXI.Text.heightCache[fontStyle];

        if (!result) {
            var body = document.getElementsByTagName('body')[0];
            var dummy = document.createElement('div');
            var dummyText = document.createTextNode('M');
            dummy.appendChild(dummyText);
            dummy.setAttribute('style', fontStyle + ';position:absolute;top:0;left:0');
            body.appendChild(dummy);

            result = dummy.offsetHeight;
            PIXI.Text.heightCache[fontStyle] = result;

            body.removeChild(dummy);
        }

        return result;
    };
    PIXI.Text.prototype.wordWrap = function (text) {
        var result = '';
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var spaceLeft = this.style.wordWrapWidth;
            var words = lines[i].split(' ');
            for (var j = 0; j < words.length; j++) {
                var wordWidth = this.context.measureText(words[j]).width;
                var wordWidthWithSpace = wordWidth + this.context.measureText(' ').width;
                if (wordWidthWithSpace > spaceLeft) {
                    if (j > 0) {
                        result += '\n';
                    }
                    result += words[j] + ' ';
                    spaceLeft = this.style.wordWrapWidth - wordWidth;
                } else {
                    spaceLeft -= wordWidthWithSpace;
                    result += words[j] + ' ';
                }
            }
            result += '\n';
        }
        return result;
    };
    PIXI.Text.prototype.destroy = function (destroyTexture) {
        if (destroyTexture) {
            this.texture.destroy();
        }

    };

    PIXI.Text.heightCache = {};
    PIXI.BitmapText = function (text, style) {
        PIXI.DisplayObjectContainer.call(this);

        this.setText(text);
        this.setStyle(style);
        this.updateText();
        this.dirty = false;
    };
    PIXI.BitmapText.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    PIXI.BitmapText.prototype.constructor = PIXI.BitmapText;
    PIXI.BitmapText.prototype.setText = function (text) {
        this.text = text || ' ';
        this.dirty = true;
    };
    PIXI.BitmapText.prototype.setStyle = function (style) {
        style = style || {};
        style.align = style.align || 'left';
        this.style = style;

        var font = style.font.split(' ');
        this.fontName = font[font.length - 1];
        this.fontSize = font.length >= 2 ? parseInt(font[font.length - 2], 10) : PIXI.BitmapText.fonts[this.fontName].size;

        this.dirty = true;
    };
    PIXI.BitmapText.prototype.updateText = function () {
        var data = PIXI.BitmapText.fonts[this.fontName];
        var pos = new PIXI.Point();
        var prevCharCode = null;
        var chars = [];
        var maxLineWidth = 0;
        var lineWidths = [];
        var line = 0;
        var scale = this.fontSize / data.size;
        for (var i = 0; i < this.text.length; i++) {
            var charCode = this.text.charCodeAt(i);
            if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
                lineWidths.push(pos.x);
                maxLineWidth = Math.max(maxLineWidth, pos.x);
                line++;

                pos.x = 0;
                pos.y += data.lineHeight;
                prevCharCode = null;
                continue;
            }

            var charData = data.chars[charCode];
            if (!charData) continue;

            if (prevCharCode && charData[prevCharCode]) {
                pos.x += charData.kerning[prevCharCode];
            }
            chars.push({
                texture: charData.texture,
                line: line,
                charCode: charCode,
                position: new PIXI.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)
            });
            pos.x += charData.xAdvance;

            prevCharCode = charCode;
        }

        lineWidths.push(pos.x);
        maxLineWidth = Math.max(maxLineWidth, pos.x);

        var lineAlignOffsets = [];
        for (i = 0; i <= line; i++) {
            var alignOffset = 0;
            if (this.style.align === 'right') {
                alignOffset = maxLineWidth - lineWidths[i];
            } else if (this.style.align === 'center') {
                alignOffset = (maxLineWidth - lineWidths[i]) / 2;
            }
            lineAlignOffsets.push(alignOffset);
        }

        for (i = 0; i < chars.length; i++) {
            var c = new PIXI.Sprite(chars[i].texture); //PIXI.Sprite.fromFrame(chars[i].charCode);
            c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
            c.position.y = chars[i].position.y * scale;
            c.scale.x = c.scale.y = scale;
            this.addChild(c);
        }

        this.width = maxLineWidth * scale;
        this.height = (pos.y + data.lineHeight) * scale;
    };
    PIXI.BitmapText.prototype.updateTransform = function () {
        if (this.dirty) {
            while (this.children.length > 0) {
                this.removeChild(this.getChildAt(0));
            }
            this.updateText();

            this.dirty = false;
        }

        PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
    };

    PIXI.BitmapText.fonts = {};
    PIXI.InteractionManager = function (stage) {
        this.stage = stage;
        this.mouse = new PIXI.InteractionData();
        this.touchs = {};
        this.tempPoint = new PIXI.Point();

        this.mouseoverEnabled = true;
        this.pool = [];

        this.interactiveItems = [];
        this.interactionDOMElement = null;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.last = 0;

        this.currentCursor = 'inherit';
    };
    PIXI.InteractionManager.prototype.constructor = PIXI.InteractionManager;
    PIXI.InteractionManager.prototype.collectInteractiveSprite = function (displayObject, iParent) {
        var children = displayObject.children;
        var length = children.length;
        for (var i = length - 1; i >= 0; i--) {
            var child = children[i];
            if (child.interactive) {
                iParent.interactiveChildren = true;
                this.interactiveItems.push(child);

                if (child.children.length > 0) {
                    this.collectInteractiveSprite(child, child);
                }
            } else {
                child.__iParent = null;

                if (child.children.length > 0) {
                    this.collectInteractiveSprite(child, iParent);
                }
            }
        }
    };
    PIXI.InteractionManager.prototype.setTarget = function (target) {
        this.target = target;
        if (this.interactionDOMElement === null) {

            this.setTargetDomElement(target.view);
        }

        document.body.addEventListener('mouseup', this.onMouseUp, true);
    };
    PIXI.InteractionManager.prototype.setTargetDomElement = function (domElement) {
        if (this.interactionDOMElement !== null) {
            this.interactionDOMElement.style['-ms-content-zooming'] = '';
            this.interactionDOMElement.style['-ms-touch-action'] = '';

            this.interactionDOMElement.removeEventListener('mousemove', this.onMouseMove, true);
            this.interactionDOMElement.removeEventListener('mousedown', this.onMouseDown, true);
            this.interactionDOMElement.removeEventListener('mouseout', this.onMouseOut, true);
            this.interactionDOMElement.removeEventListener('touchstart', this.onTouchStart, true);
            this.interactionDOMElement.removeEventListener('touchend', this.onTouchEnd, true);
            this.interactionDOMElement.removeEventListener('touchmove', this.onTouchMove, true);
        }


        if (window.navigator.msPointerEnabled) {
            domElement.style['-ms-content-zooming'] = 'none';
            domElement.style['-ms-touch-action'] = 'none';
        }

        this.interactionDOMElement = domElement;

        domElement.addEventListener('mousemove', this.onMouseMove, true);
        domElement.addEventListener('mousedown', this.onMouseDown, true);
        domElement.addEventListener('mouseout', this.onMouseOut, true);
        domElement.addEventListener('touchstart', this.onTouchStart, true);
        domElement.addEventListener('touchend', this.onTouchEnd, true);
        domElement.addEventListener('touchmove', this.onTouchMove, true);
    };
    PIXI.InteractionManager.prototype.update = function () {
        if (!this.target) return;
        var now = Date.now();
        var diff = now - this.last;
        diff = (diff * 30) / 1000;
        if (diff < 1) return;
        this.last = now;

        var i = 0;
        if (this.dirty) {
            this.dirty = false;

            var len = this.interactiveItems.length;

            for (i = 0; i < len; i++) {
                this.interactiveItems[i].interactiveChildren = false;
            }

            this.interactiveItems = [];

            if (this.stage.interactive) this.interactiveItems.push(this.stage);
            this.collectInteractiveSprite(this.stage, this.stage);
        }
        var length = this.interactiveItems.length;

        for (i = 0; i < length; i++) {
            var item = this.interactiveItems[i];


            if (item.mouseover || item.mouseout || item.buttonMode) {
                item.__hit = this.hitTest(item, this.mouse);
                this.mouse.target = item;
                if (item.__hit) {
                    if (item.buttonMode) this.currentCursor = item.defaultCursor;

                    if (!item.__isOver) {

                        if (item.mouseover) item.mouseover(this.mouse);
                        item.__isOver = true;
                    }
                } else {
                    if (item.__isOver) {
                        if (item.mouseout) item.mouseout(this.mouse);
                        item.__isOver = false;
                    }
                }
            }
        }


        if (this.currentCursor !== this.interactionDOMElement.style.cursor) {
            this.interactionDOMElement.style.cursor = this.currentCursor;
        }
    };
    PIXI.InteractionManager.prototype.onMouseMove = function (event) {
        this.mouse.originalEvent = event || window.event; //IE uses window.event
        var rect = this.interactionDOMElement.getBoundingClientRect();

        this.mouse.global.x = (event.clientX - rect.left) * (this.target.width / rect.width);
        this.mouse.global.y = (event.clientY - rect.top) * (this.target.height / rect.height);

        var length = this.interactiveItems.length;

        for (var i = 0; i < length; i++) {
            var item = this.interactiveItems[i];

            if (item.mousemove) {
                item.mousemove(this.mouse);
            }
        }
    };
    PIXI.InteractionManager.prototype.onMouseDown = function (event) {
        this.mouse.originalEvent = event || window.event; //IE uses window.event
        var length = this.interactiveItems.length;
        for (var i = 0; i < length; i++) {
            var item = this.interactiveItems[i];

            if (item.mousedown || item.click) {
                item.__mouseIsDown = true;
                item.__hit = this.hitTest(item, this.mouse);

                if (item.__hit) {
                    if (item.mousedown) item.mousedown(this.mouse);
                    item.__isDown = true;
                    if (!item.interactiveChildren) break;
                }
            }
        }
    };


    PIXI.InteractionManager.prototype.onMouseOut = function () {
        var length = this.interactiveItems.length;

        this.currentCursor = 'inherit';

        for (var i = 0; i < length; i++) {
            var item = this.interactiveItems[i];

            if (item.__isOver) {
                this.mouse.target = item;
                if (item.mouseout) item.mouseout(this.mouse);
                item.__isOver = false;
            }
        }
    };
    PIXI.InteractionManager.prototype.onMouseUp = function (event) {
        this.mouse.originalEvent = event || window.event; //IE uses window.event

        var length = this.interactiveItems.length;
        var up = false;

        for (var i = 0; i < length; i++) {
            var item = this.interactiveItems[i];

            if (item.mouseup || item.mouseupoutside || item.click) {
                item.__hit = this.hitTest(item, this.mouse);

                if (item.__hit && !up) {
                    if (item.mouseup) {
                        item.mouseup(this.mouse);
                    }
                    if (item.__isDown) {
                        if (item.click) item.click(this.mouse);
                    }

                    if (!item.interactiveChildren) up = true;
                } else {
                    if (item.__isDown) {
                        if (item.mouseupoutside) item.mouseupoutside(this.mouse);
                    }
                }

                item.__isDown = false;
            }
        }
    };
    PIXI.InteractionManager.prototype.hitTest = function (item, interactionData) {
        var global = interactionData.global;

        if (!item.worldVisible) return false;

        var isSprite = (item instanceof PIXI.Sprite),
            worldTransform = item.worldTransform,
            a00 = worldTransform[0],
            a01 = worldTransform[1],
            a02 = worldTransform[2],
            a10 = worldTransform[3],
            a11 = worldTransform[4],
            a12 = worldTransform[5],
            id = 1 / (a00 * a11 + a01 * -a10),
            x = a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id,
            y = a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id;

        interactionData.target = item;
        if (item.hitArea && item.hitArea.contains) {
            if (item.hitArea.contains(x, y)) {
                interactionData.target = item;

                return true;
            }

            return false;
        }
        else if (isSprite) {
            var width = item.texture.frame.width,
                height = item.texture.frame.height,
                x1 = -width * item.anchor.x,
                y1;

            if (x > x1 && x < x1 + width) {
                y1 = -height * item.anchor.y;

                if (y > y1 && y < y1 + height) {
                    interactionData.target = item;
                    return true;
                }
            }
        }

        var length = item.children.length;

        for (var i = 0; i < length; i++) {
            var tempItem = item.children[i];
            var hit = this.hitTest(tempItem, interactionData);
            if (hit) {
                interactionData.target = item;
                return true;
            }
        }

        return false;
    };
    PIXI.InteractionManager.prototype.onTouchMove = function (event) {
        var rect = this.interactionDOMElement.getBoundingClientRect();
        var changedTouches = event.changedTouches;
        var touchData;
        var i = 0;

        for (i = 0; i < changedTouches.length; i++) {
            var touchEvent = changedTouches[i];
            touchData = this.touchs[touchEvent.identifier];
            touchData.originalEvent = event || window.event;
            touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
            touchData.global.y = (touchEvent.clientY - rect.top) * (this.target.height / rect.height);
            if (navigator.isCocoonJS) {
                touchData.global.x = touchEvent.clientX;
                touchData.global.y = touchEvent.clientY;
            }
        }

        var length = this.interactiveItems.length;
        for (i = 0; i < length; i++) {
            var item = this.interactiveItems[i];
            if (item.touchmove)
                item.touchmove(touchData);
        }
    };
    PIXI.InteractionManager.prototype.onTouchStart = function (event) {
        var rect = this.interactionDOMElement.getBoundingClientRect();

        var changedTouches = event.changedTouches;
        for (var i = 0; i < changedTouches.length; i++) {
            var touchEvent = changedTouches[i];

            var touchData = this.pool.pop();
            if (!touchData) touchData = new PIXI.InteractionData();

            touchData.originalEvent = event || window.event;

            this.touchs[touchEvent.identifier] = touchData;
            touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
            touchData.global.y = (touchEvent.clientY - rect.top) * (this.target.height / rect.height);
            if (navigator.isCocoonJS) {
                touchData.global.x = touchEvent.clientX;
                touchData.global.y = touchEvent.clientY;
            }

            var length = this.interactiveItems.length;

            for (var j = 0; j < length; j++) {
                var item = this.interactiveItems[j];

                if (item.touchstart || item.tap) {
                    item.__hit = this.hitTest(item, touchData);

                    if (item.__hit) {
                        if (item.touchstart) item.touchstart(touchData);
                        item.__isDown = true;
                        item.__touchData = touchData;

                        if (!item.interactiveChildren) break;
                    }
                }
            }
        }
    };
    PIXI.InteractionManager.prototype.onTouchEnd = function (event) {
        var rect = this.interactionDOMElement.getBoundingClientRect();
        var changedTouches = event.changedTouches;

        for (var i = 0; i < changedTouches.length; i++) {
            var touchEvent = changedTouches[i];
            var touchData = this.touchs[touchEvent.identifier];
            var up = false;
            touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
            touchData.global.y = (touchEvent.clientY - rect.top) * (this.target.height / rect.height);
            if (navigator.isCocoonJS) {
                touchData.global.x = touchEvent.clientX;
                touchData.global.y = touchEvent.clientY;
            }

            var length = this.interactiveItems.length;
            for (var j = 0; j < length; j++) {
                var item = this.interactiveItems[j];
                var itemTouchData = item.__touchData; // <-- Here!
                item.__hit = this.hitTest(item, touchData);

                if (itemTouchData === touchData) {
                    touchData.originalEvent = event || window.event;

                    if (item.touchend || item.tap) {
                        if (item.__hit && !up) {
                            if (item.touchend) item.touchend(touchData);
                            if (item.__isDown) {
                                if (item.tap) item.tap(touchData);
                            }

                            if (!item.interactiveChildren) up = true;
                        } else {
                            if (item.__isDown) {
                                if (item.touchendoutside) item.touchendoutside(touchData);
                            }
                        }

                        item.__isDown = false;
                    }

                    item.__touchData = null;

                }
            }
            this.pool.push(touchData);
            this.touchs[touchEvent.identifier] = null;
        }
    };
    PIXI.InteractionData = function () {
        this.global = new PIXI.Point();
        this.local = new PIXI.Point();
        this.target = null;
        this.originalEvent = null;
    };
    PIXI.InteractionData.prototype.getLocalPosition = function (displayObject) {
        var worldTransform = displayObject.worldTransform;
        var global = this.global;
        var a00 = worldTransform[0],
            a01 = worldTransform[1],
            a02 = worldTransform[2],
            a10 = worldTransform[3],
            a11 = worldTransform[4],
            a12 = worldTransform[5],
            id = 1 / (a00 * a11 + a01 * -a10);
        return new PIXI.Point(a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id,
            a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id);
    };
    PIXI.InteractionData.prototype.constructor = PIXI.InteractionData;
    PIXI.Stage = function (backgroundColor) {
        PIXI.DisplayObjectContainer.call(this);
        this.worldTransform = PIXI.mat3.create();
        this.interactive = true;
        this.interactionManager = new PIXI.InteractionManager(this);
        this.dirty = true;
        this.stage = this;
        this.stage.hitArea = new PIXI.Rectangle(0, 0, 100000, 100000);

        this.setBackgroundColor(backgroundColor);
    };
    PIXI.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    PIXI.Stage.prototype.constructor = PIXI.Stage;
    PIXI.Stage.prototype.setInteractionDelegate = function (domElement) {
        this.interactionManager.setTargetDomElement(domElement);
    };
    PIXI.Stage.prototype.updateTransform = function () {
        this.worldAlpha = 1;

        for (var i = 0, j = this.children.length; i < j; i++) {
            this.children[i].updateTransform();
        }

        if (this.dirty) {
            this.dirty = false;
            this.interactionManager.dirty = true;
        }

        if (this.interactive) this.interactionManager.update();
    };
    PIXI.Stage.prototype.setBackgroundColor = function (backgroundColor) {
        this.backgroundColor = backgroundColor || 0x000000;
        this.backgroundColorSplit = PIXI.hex2rgb(this.backgroundColor);
        var hex = this.backgroundColor.toString(16);
        hex = '000000'.substr(0, 6 - hex.length) + hex;
        this.backgroundColorString = '#' + hex;
    };
    PIXI.Stage.prototype.getMousePosition = function () {
        return this.interactionManager.mouse.global;
    };
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }

    window.requestAnimFrame = window.requestAnimationFrame;
    PIXI.hex2rgb = function (hex) {
        return [(hex >> 16 & 0xFF) / 255, (hex >> 8 & 0xFF) / 255, (hex & 0xFF) / 255];
    };


    PIXI.rgb2hex = function (rgb) {
        return ((rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + rgb[2] * 255);
    };
    if (typeof Function.prototype.bind !== 'function') {
        Function.prototype.bind = (function () {
            var slice = Array.prototype.slice;
            return function (thisArg) {
                var target = this,
                    boundArgs = slice.call(arguments, 1);

                if (typeof target !== 'function') throw new TypeError();

                function bound() {
                    var args = boundArgs.concat(slice.call(arguments));
                    target.apply(this instanceof bound ? this : thisArg, args);
                }

                bound.prototype = (function F(proto) {
                    if (proto) F.prototype = proto;
                    if (!(this instanceof F)) return new F();
                })(target.prototype);

                return bound;
            };
        })();
    }
    PIXI.AjaxRequest = function AjaxRequest() {
        var activexmodes = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Microsoft.XMLHTTP']; //activeX versions to check for in IE

        if (window.ActiveXObject) { //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
            for (var i = 0; i < activexmodes.length; i++) {
                try {
                    return new window.ActiveXObject(activexmodes[i]);
                } catch (e) {
                }
            }
        } else if (window.XMLHttpRequest) // if Mozilla, Safari etc
        {
            return new window.XMLHttpRequest();
        } else {
            return false;
        }
    };

    PIXI.canUseNewCanvasBlendModes = function () {
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        var context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0, 0, 1, 1);
        context.globalCompositeOperation = 'multiply';
        context.fillStyle = '#fff';
        context.fillRect(0, 0, 1, 1);
        return context.getImageData(0, 0, 1, 1).data[0] === 0;
    };
    PIXI.getNextPowerOfTwo = function (number) {
        if (number > 0 && (number & (number - 1)) === 0) // see: http://goo.gl/D9kPj
            return number;
        else {
            var result = 1;
            while (result < number) result <<= 1;
            return result;
        }
    };
    PIXI.EventTarget = function () {

        var listeners = {};

        this.addEventListener = this.on = function (type, listener) {


            if (listeners[type] === undefined) {

                listeners[type] = [];

            }

            if (listeners[type].indexOf(listener) === -1) {

                listeners[type].push(listener);
            }

        };

        this.dispatchEvent = this.emit = function (event) {

            if (!listeners[event.type] || !listeners[event.type].length) {

                return;

            }

            for (var i = 0, l = listeners[event.type].length; i < l; i++) {

                listeners[event.type][i](event);

            }

        };

        this.removeEventListener = this.off = function (type, listener) {

            var index = listeners[type].indexOf(listener);

            if (index !== -1) {

                listeners[type].splice(index, 1);

            }

        };

        this.removeAllEventListeners = function (type) {
            var a = listeners[type];
            if (a)
                a.length = 0;
        };
    };
    PIXI.autoDetectRenderer = function (width, height, view, transparent, antialias) {
        if (!width) width = 800;
        if (!height) height = 600;
        var webgl = (function () {
            try {
                var canvas = document.createElement('canvas');
                return !!window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
            } catch (e) {
                return false;
            }
        })();


        if (webgl) {
            return new PIXI.WebGLRenderer(width, height, view, transparent, antialias);
        }

        return new PIXI.CanvasRenderer(width, height, view, transparent);
    };

    PIXI.PolyK = {};
    PIXI.PolyK.Triangulate = function (p) {
        var sign = true;

        var n = p.length >> 1;
        if (n < 3) return [];

        var tgs = [];
        var avl = [];
        for (var i = 0; i < n; i++) avl.push(i);

        i = 0;
        var al = n;
        while (al > 3) {
            var i0 = avl[(i + 0) % al];
            var i1 = avl[(i + 1) % al];
            var i2 = avl[(i + 2) % al];

            var ax = p[2 * i0],
                ay = p[2 * i0 + 1];
            var bx = p[2 * i1],
                by = p[2 * i1 + 1];
            var cx = p[2 * i2],
                cy = p[2 * i2 + 1];

            var earFound = false;
            if (PIXI.PolyK._convex(ax, ay, bx, by, cx, cy, sign)) {
                earFound = true;
                for (var j = 0; j < al; j++) {
                    var vi = avl[j];
                    if (vi === i0 || vi === i1 || vi === i2) continue;

                    if (PIXI.PolyK._PointInTriangle(p[2 * vi], p[2 * vi + 1], ax, ay, bx, by, cx, cy)) {
                        earFound = false;
                        break;
                    }
                }
            }

            if (earFound) {
                tgs.push(i0, i1, i2);
                avl.splice((i + 1) % al, 1);
                al--;
                i = 0;
            } else if (i++ > 3 * al) {
                if (sign) {
                    tgs = [];
                    avl = [];
                    for (i = 0; i < n; i++) avl.push(i);

                    i = 0;
                    al = n;

                    sign = false;
                } else {
                    
                    return [];
                }
            }
        }

        tgs.push(avl[0], avl[1], avl[2]);
        return tgs;
    };
    PIXI.PolyK._PointInTriangle = function (px, py, ax, ay, bx, by, cx, cy) {
        var v0x = cx - ax;
        var v0y = cy - ay;
        var v1x = bx - ax;
        var v1y = by - ay;
        var v2x = px - ax;
        var v2y = py - ay;

        var dot00 = v0x * v0x + v0y * v0y;
        var dot01 = v0x * v1x + v0y * v1y;
        var dot02 = v0x * v2x + v0y * v2y;
        var dot11 = v1x * v1x + v1y * v1y;
        var dot12 = v1x * v2x + v1y * v2y;

        var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
        var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
        return (u >= 0) && (v >= 0) && (u + v < 1);
    };
    PIXI.PolyK._convex = function (ax, ay, bx, by, cx, cy, sign) {
        return ((ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0) === sign;
    };

    PIXI.initDefaultShaders = function () {

    };

    PIXI.CompileVertexShader = function (gl, shaderSrc) {
        return PIXI._CompileShader(gl, shaderSrc, gl.VERTEX_SHADER);
    };

    PIXI.CompileFragmentShader = function (gl, shaderSrc) {
        return PIXI._CompileShader(gl, shaderSrc, gl.FRAGMENT_SHADER);
    };

    PIXI._CompileShader = function (gl, shaderSrc, shaderType) {
        var src = shaderSrc.join("\n");
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            
            return null;
        }

        return shader;
    };

    PIXI.compileProgram = function (gl, vertexSrc, fragmentSrc) {
        var fragmentShader = PIXI.CompileFragmentShader(gl, fragmentSrc);
        var vertexShader = PIXI.CompileVertexShader(gl, vertexSrc);

        var shaderProgram = gl.createProgram();

        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            
        }

        return shaderProgram;
    };
    PIXI.PixiShader = function (gl) {
        this.gl = gl;
        this.program = null;
        this.fragmentSrc = [
        'precision lowp float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D uSampler;',
        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
        '}'
    ];
        this.textureCount = 0;


        this.init();
    };
    PIXI.PixiShader.prototype.init = function () {

        var gl = this.gl;

        var program = PIXI.compileProgram(gl, this.vertexSrc || PIXI.PixiShader.defaultVertexSrc, this.fragmentSrc);

        gl.useProgram(program);
        this.uSampler = gl.getUniformLocation(program, 'uSampler');
        this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
        this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
        this.dimensions = gl.getUniformLocation(program, 'dimensions');
        this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
        this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');
        this.colorAttribute = gl.getAttribLocation(program, 'aColor');
        if (this.colorAttribute === -1) {
            this.colorAttribute = 2;
        }
        for (var key in this.uniforms) {
            this.uniforms[key].uniformLocation = gl.getUniformLocation(program, key);
        }

        this.initUniforms();

        this.program = program;
    };
    PIXI.PixiShader.prototype.initUniforms = function () {
        this.textureCount = 1;
        var gl = this.gl;
        var uniform;

        for (var key in this.uniforms) {
            uniform = this.uniforms[key];

            var type = uniform.type;

            if (type === 'sampler2D') {
                uniform._init = false;

                if (uniform.value !== null) {
                    this.initSampler2D(uniform);
                }
            } else if (type === 'mat2' || type === 'mat3' || type === 'mat4') {
                uniform.glMatrix = true;
                uniform.glValueLength = 1;

                if (type === 'mat2') {
                    uniform.glFunc = gl.uniformMatrix2fv;
                } else if (type === 'mat3') {
                    uniform.glFunc = gl.uniformMatrix3fv;
                } else if (type === 'mat4') {
                    uniform.glFunc = gl.uniformMatrix4fv;
                }
            } else {
                uniform.glFunc = gl['uniform' + type];

                if (type === '2f' || type === '2i') {
                    uniform.glValueLength = 2;
                } else if (type === '3f' || type === '3i') {
                    uniform.glValueLength = 3;
                } else if (type === '4f' || type === '4i') {
                    uniform.glValueLength = 4;
                } else {
                    uniform.glValueLength = 1;
                }
            }
        }

    };
    PIXI.PixiShader.prototype.initSampler2D = function (uniform) {
        if (!uniform.value || !uniform.value.baseTexture || !uniform.value.baseTexture.hasLoaded) {
            return;
        }

        var gl = this.gl;

        gl.activeTexture(gl['TEXTURE' + this.textureCount]);
        gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTexture);
        if (uniform.textureData) {
            var data = uniform.textureData;

            var magFilter = (data.magFilter) ? data.magFilter : gl.LINEAR;
            var minFilter = (data.minFilter) ? data.minFilter : gl.LINEAR;
            var wrapS = (data.wrapS) ? data.wrapS : gl.CLAMP_TO_EDGE;
            var wrapT = (data.wrapT) ? data.wrapT : gl.CLAMP_TO_EDGE;
            var format = (data.luminance) ? gl.LUMINANCE : gl.RGBA;

            if (data.repeat) {
                wrapS = gl.REPEAT;
                wrapT = gl.REPEAT;
            }

            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

            if (data.width) {
                var width = (data.width) ? data.width : 512;
                var height = (data.height) ? data.height : 2;
                var border = (data.border) ? data.border : 0;
                gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, border, format, gl.UNSIGNED_BYTE, null);
            } else {
                gl.texImage2D(gl.TEXTURE_2D, 0, format, gl.RGBA, gl.UNSIGNED_BYTE, uniform.value.baseTexture.source);
            }

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
        }

        gl.uniform1i(uniform.uniformLocation, this.textureCount);

        uniform._init = true;

        this.textureCount++;

    };
    PIXI.PixiShader.prototype.syncUniforms = function () {
        this.textureCount = 1;
        var uniform;
        var gl = this.gl;
        for (var key in this.uniforms) {

            uniform = this.uniforms[key];

            if (uniform.glValueLength === 1) {
                if (uniform.glMatrix === true) {
                    uniform.glFunc.call(gl, uniform.uniformLocation, uniform.transpose, uniform.value);
                } else {
                    uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value);
                }
            } else if (uniform.glValueLength === 2) {
                uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y);
            } else if (uniform.glValueLength === 3) {
                uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y, uniform.value.z);
            } else if (uniform.glValueLength === 4) {
                uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y, uniform.value.z, uniform.value.w);
            } else if (uniform.type === 'sampler2D') {
                if (uniform._init) {
                    gl.activeTexture(gl['TEXTURE' + this.textureCount]);
                    gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTextures[gl.id] || PIXI.createWebGLTexture(uniform.value.baseTexture, gl));
                    gl.uniform1i(uniform.uniformLocation, this.textureCount);
                    this.textureCount++;
                } else {
                    this.initSampler2D(uniform);
                }
            }
        }

    };

    PIXI.PixiShader.defaultVertexSrc = [
    'attribute vec2 aVertexPosition;',
    'attribute vec2 aTextureCoord;',
    'attribute vec2 aColor;',

    'uniform vec2 projectionVector;',
    'uniform vec2 offsetVector;',

    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',

    'const vec2 center = vec2(-1.0, 1.0);',

    'void main(void) {',
    '   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);',
    '   vTextureCoord = aTextureCoord;',
    '   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;',
    '   vColor = vec4(color * aColor.x, aColor.x);',
    '}'
];


    PIXI.StripShader = function () {
        this.program = null;

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying float vColor;',
        'uniform float alpha;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));',
        '   gl_FragColor = gl_FragColor * alpha;',
        '}'
    ];

        this.vertexSrc = [
        'attribute vec2 aVertexPosition;',
        'attribute vec2 aTextureCoord;',
        'attribute float aColor;',
        'uniform mat3 translationMatrix;',
        'uniform vec2 projectionVector;',
        'varying vec2 vTextureCoord;',
        'uniform vec2 offsetVector;',
        'varying float vColor;',

        'void main(void) {',
        '   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);',
        '   v -= offsetVector.xyx;',
        '   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);',
        '   vTextureCoord = aTextureCoord;',
        '   vColor = aColor;',
        '}'
    ];
    };

    PIXI.StripShader.prototype.init = function () {

        var gl = PIXI.gl;

        var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);
        gl.useProgram(program);
        this.uSampler = gl.getUniformLocation(program, 'uSampler');
        this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
        this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
        this.colorAttribute = gl.getAttribLocation(program, 'aColor');
        this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
        this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');

        this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');
        this.alpha = gl.getUniformLocation(program, 'alpha');

        this.program = program;
    };


    PIXI.PrimitiveShader = function (gl) {
        this.gl = gl;
        this.program = null;

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec4 vColor;',

        'void main(void) {',
        '   gl_FragColor = vColor;',
        '}'
    ];

        this.vertexSrc = [
        'attribute vec2 aVertexPosition;',
        'attribute vec4 aColor;',
        'uniform mat3 translationMatrix;',
        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',
        'uniform float alpha;',
        'uniform vec3 tint;',
        'varying vec4 vColor;',

        'void main(void) {',
        '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',
        '   v -= offsetVector.xyx;',
        '   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);',
        '   vColor = aColor * vec4(tint * alpha, alpha);',
        '}'
    ];

        this.init();
    };

    PIXI.PrimitiveShader.prototype.init = function () {

        var gl = this.gl;

        var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);
        gl.useProgram(program);
        this.projectionVector = gl.getUniformLocation(program, 'projectionVector');
        this.offsetVector = gl.getUniformLocation(program, 'offsetVector');
        this.tintColor = gl.getUniformLocation(program, 'tint');
        this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
        this.colorAttribute = gl.getAttribLocation(program, 'aColor');

        this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');
        this.alpha = gl.getUniformLocation(program, 'alpha');

        this.program = program;
    };
    PIXI.WebGLGraphics = function () {

    };
    PIXI.WebGLGraphics.renderGraphics = function (graphics, renderSession) //projection, offset)
        {
            var gl = renderSession.gl;
            var projection = renderSession.projection,
                offset = renderSession.offset,
                shader = renderSession.shaderManager.primitiveShader;

            if (!graphics._webGL[gl.id]) graphics._webGL[gl.id] = {
                points: [],
                indices: [],
                lastIndex: 0,
                buffer: gl.createBuffer(),
                indexBuffer: gl.createBuffer()
            };

            var webGL = graphics._webGL[gl.id];

            if (graphics.dirty) {
                graphics.dirty = false;

                if (graphics.clearDirty) {
                    graphics.clearDirty = false;

                    webGL.lastIndex = 0;
                    webGL.points = [];
                    webGL.indices = [];

                }

                PIXI.WebGLGraphics.updateGraphics(graphics, gl);
            }

            renderSession.shaderManager.activatePrimitiveShader();
            var m = PIXI.mat3.clone(graphics.worldTransform);

            PIXI.mat3.transpose(m);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

            gl.uniformMatrix3fv(shader.translationMatrix, false, m);

            gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
            gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);

            gl.uniform3fv(shader.tintColor, PIXI.hex2rgb(graphics.tint));

            gl.uniform1f(shader.alpha, graphics.worldAlpha);
            gl.bindBuffer(gl.ARRAY_BUFFER, webGL.buffer);

            gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
            gl.vertexAttribPointer(shader.colorAttribute, 4, gl.FLOAT, false, 4 * 6, 2 * 4);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGL.indexBuffer);

            gl.drawElements(gl.TRIANGLE_STRIP, webGL.indices.length, gl.UNSIGNED_SHORT, 0);

            renderSession.shaderManager.deactivatePrimitiveShader();
        };
    PIXI.WebGLGraphics.updateGraphics = function (graphics, gl) {
        var webGL = graphics._webGL[gl.id];

        for (var i = webGL.lastIndex; i < graphics.graphicsData.length; i++) {
            var data = graphics.graphicsData[i];

            if (data.type === PIXI.Graphics.POLY) {
                if (data.fill) {
                    if (data.points.length > 3)
                        PIXI.WebGLGraphics.buildPoly(data, webGL);
                }

                if (data.lineWidth > 0) {
                    PIXI.WebGLGraphics.buildLine(data, webGL);
                }
            } else if (data.type === PIXI.Graphics.RECT) {
                PIXI.WebGLGraphics.buildRectangle(data, webGL);
            } else if (data.type === PIXI.Graphics.CIRC || data.type === PIXI.Graphics.ELIP) {
                PIXI.WebGLGraphics.buildCircle(data, webGL);
            }
        }

        webGL.lastIndex = graphics.graphicsData.length;



        webGL.glPoints = new Float32Array(webGL.points);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGL.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, webGL.glPoints, gl.STATIC_DRAW);

        webGL.glIndicies = new Uint16Array(webGL.indices);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGL.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, webGL.glIndicies, gl.STATIC_DRAW);
    };
    PIXI.WebGLGraphics.buildRectangle = function (graphicsData, webGLData) {
        var rectData = graphicsData.points;
        var x = rectData[0];
        var y = rectData[1];
        var width = rectData[2];
        var height = rectData[3];


        if (graphicsData.fill) {
            var color = PIXI.hex2rgb(graphicsData.fillColor);
            var alpha = graphicsData.fillAlpha;

            var r = color[0] * alpha;
            var g = color[1] * alpha;
            var b = color[2] * alpha;

            var verts = webGLData.points;
            var indices = webGLData.indices;

            var vertPos = verts.length / 6;
            verts.push(x, y);
            verts.push(r, g, b, alpha);

            verts.push(x + width, y);
            verts.push(r, g, b, alpha);

            verts.push(x, y + height);
            verts.push(r, g, b, alpha);

            verts.push(x + width, y + height);
            verts.push(r, g, b, alpha);
            indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
        }

        if (graphicsData.lineWidth) {
            var tempPoints = graphicsData.points;

            graphicsData.points = [x, y,
                  x + width, y,
                  x + width, y + height,
                  x, y + height,
                  x, y];


            PIXI.WebGLGraphics.buildLine(graphicsData, webGLData);

            graphicsData.points = tempPoints;
        }
    };
    PIXI.WebGLGraphics.buildCircle = function (graphicsData, webGLData) {
        var rectData = graphicsData.points;
        var x = rectData[0];
        var y = rectData[1];
        var width = rectData[2];
        var height = rectData[3];

        var totalSegs = 40;
        var seg = (Math.PI * 2) / totalSegs;

        var i = 0;

        if (graphicsData.fill) {
            var color = PIXI.hex2rgb(graphicsData.fillColor);
            var alpha = graphicsData.fillAlpha;

            var r = color[0] * alpha;
            var g = color[1] * alpha;
            var b = color[2] * alpha;

            var verts = webGLData.points;
            var indices = webGLData.indices;

            var vecPos = verts.length / 6;

            indices.push(vecPos);

            for (i = 0; i < totalSegs + 1; i++) {
                verts.push(x, y, r, g, b, alpha);

                verts.push(x + Math.sin(seg * i) * width,
                    y + Math.cos(seg * i) * height,
                    r, g, b, alpha);

                indices.push(vecPos++, vecPos++);
            }

            indices.push(vecPos - 1);
        }

        if (graphicsData.lineWidth) {
            var tempPoints = graphicsData.points;

            graphicsData.points = [];

            for (i = 0; i < totalSegs + 1; i++) {
                graphicsData.points.push(x + Math.sin(seg * i) * width,
                    y + Math.cos(seg * i) * height);
            }

            PIXI.WebGLGraphics.buildLine(graphicsData, webGLData);

            graphicsData.points = tempPoints;
        }
    };
    PIXI.WebGLGraphics.buildLine = function (graphicsData, webGLData) {
        var i = 0;

        var points = graphicsData.points;
        if (points.length === 0) return;
        var firstPoint = new PIXI.Point(points[0], points[1]);
        var lastPoint = new PIXI.Point(points[points.length - 2], points[points.length - 1]);
        if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y) {
            points.pop();
            points.pop();

            lastPoint = new PIXI.Point(points[points.length - 2], points[points.length - 1]);

            var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
            var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;

            points.unshift(midPointX, midPointY);
            points.push(midPointX, midPointY);
        }

        var verts = webGLData.points;
        var indices = webGLData.indices;
        var length = points.length / 2;
        var indexCount = points.length;
        var indexStart = verts.length / 6;
        var width = graphicsData.lineWidth / 2;
        var color = PIXI.hex2rgb(graphicsData.lineColor);
        var alpha = graphicsData.lineAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var px, py, p1x, p1y, p2x, p2y, p3x, p3y;
        var perpx, perpy, perp2x, perp2y, perp3x, perp3y;
        var a1, b1, c1, a2, b2, c2;
        var denom, pdist, dist;

        p1x = points[0];
        p1y = points[1];

        p2x = points[2];
        p2y = points[3];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt(perpx * perpx + perpy * perpy);

        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;
        verts.push(p1x - perpx, p1y - perpy,
            r, g, b, alpha);

        verts.push(p1x + perpx, p1y + perpy,
            r, g, b, alpha);

        for (i = 1; i < length - 1; i++) {
            p1x = points[(i - 1) * 2];
            p1y = points[(i - 1) * 2 + 1];

            p2x = points[(i) * 2];
            p2y = points[(i) * 2 + 1];

            p3x = points[(i + 1) * 2];
            p3y = points[(i + 1) * 2 + 1];

            perpx = -(p1y - p2y);
            perpy = p1x - p2x;

            dist = Math.sqrt(perpx * perpx + perpy * perpy);
            perpx /= dist;
            perpy /= dist;
            perpx *= width;
            perpy *= width;

            perp2x = -(p2y - p3y);
            perp2y = p2x - p3x;

            dist = Math.sqrt(perp2x * perp2x + perp2y * perp2y);
            perp2x /= dist;
            perp2y /= dist;
            perp2x *= width;
            perp2y *= width;

            a1 = (-perpy + p1y) - (-perpy + p2y);
            b1 = (-perpx + p2x) - (-perpx + p1x);
            c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
            a2 = (-perp2y + p3y) - (-perp2y + p2y);
            b2 = (-perp2x + p2x) - (-perp2x + p3x);
            c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

            denom = a1 * b2 - a2 * b1;

            px = (b1 * c2 - b2 * c1) / denom;
            py = (a2 * c1 - a1 * c2) / denom;


            pdist = (px - p2x) * (px - p2x) + (py - p2y) + (py - p2y);


            if (pdist > 140 * 140) {
                perp3x = perpx - perp2x;
                perp3y = perpy - perp2y;

                dist = Math.sqrt(perp3x * perp3x + perp3y * perp3y);
                perp3x /= dist;
                perp3y /= dist;
                perp3x *= width;
                perp3y *= width;

                verts.push(p2x - perp3x, p2y - perp3y);
                verts.push(r, g, b, alpha);

                verts.push(p2x + perp3x, p2y + perp3y);
                verts.push(r, g, b, alpha);

                verts.push(p2x - perp3x, p2y - perp3y);
                verts.push(r, g, b, alpha);

                indexCount++;
            } else {

                verts.push(px, py);
                verts.push(r, g, b, alpha);

                verts.push(p2x - (px - p2x), p2y - (py - p2y));
                verts.push(r, g, b, alpha);
            }
        }

        p1x = points[(length - 2) * 2];
        p1y = points[(length - 2) * 2 + 1];

        p2x = points[(length - 1) * 2];
        p2y = points[(length - 1) * 2 + 1];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt(perpx * perpx + perpy * perpy);
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;

        verts.push(p2x - perpx, p2y - perpy);
        verts.push(r, g, b, alpha);

        verts.push(p2x + perpx, p2y + perpy);
        verts.push(r, g, b, alpha);

        indices.push(indexStart);

        for (i = 0; i < indexCount; i++) {
            indices.push(indexStart++);
        }

        indices.push(indexStart - 1);
    };
    PIXI.WebGLGraphics.buildPoly = function (graphicsData, webGLData) {
        var points = graphicsData.points;
        if (points.length < 6) return;
        var verts = webGLData.points;
        var indices = webGLData.indices;

        var length = points.length / 2;
        var color = PIXI.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var triangles = PIXI.PolyK.Triangulate(points);

        var vertPos = verts.length / 6;

        var i = 0;

        for (i = 0; i < triangles.length; i += 3) {
            indices.push(triangles[i] + vertPos);
            indices.push(triangles[i] + vertPos);
            indices.push(triangles[i + 1] + vertPos);
            indices.push(triangles[i + 2] + vertPos);
            indices.push(triangles[i + 2] + vertPos);
        }

        for (i = 0; i < length; i++) {
            verts.push(points[i * 2], points[i * 2 + 1],
                r, g, b, alpha);
        }
    };

    PIXI.glContexts = []; // this is where we store the webGL contexts for easy access.
    PIXI.WebGLRenderer = function (width, height, view, transparent, antialias) {
        if (!PIXI.defaultRenderer) PIXI.defaultRenderer = this;

        this.type = PIXI.WEBGL_RENDERER;
        this.transparent = !!transparent;

        this.width = width || 800;
        this.height = height || 600;

        this.view = view || document.createElement('canvas');
        this.view.width = this.width;
        this.view.height = this.height;
        var scope = this;
        this.view.addEventListener('webglcontextlost', function (event) {
            scope.handleContextLost(event);
        }, false);
        this.view.addEventListener('webglcontextrestored', function (event) {
            scope.handleContextRestored(event);
        }, false);

        this.options = {
            alpha: this.transparent,
            antialias: !!antialias, // SPEED UP??
            premultipliedAlpha: false,
            stencil: true
        };
        try {
            this.gl = this.view.getContext('experimental-webgl', this.options);
        } catch (e) {
            try {
                this.gl = this.view.getContext('webgl', this.options);
            } catch (e2) {
                throw new Error(' This browser does not support webGL. Try using the canvas renderer' + this);
            }
        }

        var gl = this.gl;
        this.glContextId = gl.id = PIXI.WebGLRenderer.glContextId++;

        PIXI.glContexts[this.glContextId] = gl;

        if (!PIXI.blendModesWebGL) {
            PIXI.blendModesWebGL = [];

            PIXI.blendModesWebGL[PIXI.blendModes.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
            PIXI.blendModesWebGL[PIXI.blendModes.ADD] = [gl.SRC_ALPHA, gl.DST_ALPHA];
            PIXI.blendModesWebGL[PIXI.blendModes.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
            PIXI.blendModesWebGL[PIXI.blendModes.SCREEN] = [gl.SRC_ALPHA, gl.ONE];
        }




        this.projection = new PIXI.Point();
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;

        this.offset = new PIXI.Point(0, 0);

        this.resize(this.width, this.height);
        this.contextLost = false;
        this.shaderManager = new PIXI.WebGLShaderManager(gl); // deals with managing the shader programs and their attribs
        this.spriteBatch = new PIXI.WebGLSpriteBatch(gl); // manages the rendering of sprites
        this.maskManager = new PIXI.WebGLMaskManager(gl); // manages the masks using the stencil buffer
        this.filterManager = new PIXI.WebGLFilterManager(gl, this.transparent); // manages the filters
        this.renderSession = {};
        this.renderSession.gl = this.gl;
        this.renderSession.drawCount = 0;
        this.renderSession.shaderManager = this.shaderManager;
        this.renderSession.maskManager = this.maskManager;
        this.renderSession.filterManager = this.filterManager;
        this.renderSession.spriteBatch = this.spriteBatch;


        gl.useProgram(this.shaderManager.defaultShader.program);

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);

        gl.enable(gl.BLEND);
        gl.colorMask(true, true, true, this.transparent);
    };
    PIXI.WebGLRenderer.prototype.constructor = PIXI.WebGLRenderer;
    PIXI.WebGLRenderer.prototype.render = function (stage) {
        if (this.contextLost) return;
        if (this.__stage !== stage) {
            this.__stage = stage;
        }
        PIXI.WebGLRenderer.updateTextures();
        stage.updateTransform();

        var gl = this.gl;
        gl.colorMask(true, true, true, this.transparent);
        gl.viewport(0, 0, this.width, this.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        gl.clearColor(stage.backgroundColorSplit[0], stage.backgroundColorSplit[1], stage.backgroundColorSplit[2], !this.transparent);
        gl.clear(gl.COLOR_BUFFER_BIT);

        this.renderDisplayObject(stage, this.projection);
        if (stage.interactive) {
            if (!stage._interactiveEventsAdded) {
                stage._interactiveEventsAdded = true;
                stage.interactionManager.setTarget(this);
            }
        }
    };

    PIXI.WebGLRenderer.prototype.renderDisplayObject = function (displayObject, projection) {
        this.renderSession.drawCount = 0;
        this.renderSession.currentBlendMode = 9999;

        this.renderSession.projection = projection;
        this.renderSession.offset = this.offset;
        this.spriteBatch.begin(this.renderSession);
        this.filterManager.begin(this.renderSession, null);
        displayObject._renderWebGL(this.renderSession);
        this.spriteBatch.end();
    };
    PIXI.WebGLRenderer.updateTextures = function () {
        var i = 0;


        for (i = 0; i < PIXI.Texture.frameUpdates.length; i++)
            PIXI.WebGLRenderer.updateTextureFrame(PIXI.Texture.frameUpdates[i]);

        for (i = 0; i < PIXI.texturesToDestroy.length; i++)
            PIXI.WebGLRenderer.destroyTexture(PIXI.texturesToDestroy[i]);

        PIXI.texturesToUpdate.length = 0;
        PIXI.texturesToDestroy.length = 0;
        PIXI.Texture.frameUpdates.length = 0;
    };
    PIXI.WebGLRenderer.destroyTexture = function (texture) {

        for (var i = texture._glTextures.length - 1; i >= 0; i--) {
            var glTexture = texture._glTextures[i];
            var gl = PIXI.glContexts[i];

            if (gl && glTexture) {
                gl.deleteTexture(glTexture);
            }
        }

        texture._glTextures.length = 0;
    };

    PIXI.WebGLRenderer.updateTextureFrame = function (texture) {
        texture.updateFrame = false;
        texture._updateWebGLuvs();
    };
    PIXI.WebGLRenderer.prototype.resize = function (width, height) {
        this.width = width;
        this.height = height;

        this.view.width = width;
        this.view.height = height;

        this.gl.viewport(0, 0, this.width, this.height);

        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;
    };

    PIXI.createWebGLTexture = function (texture, gl) {


        if (texture.hasLoaded) {
            texture._glTextures[gl.id] = gl.createTexture();

            gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === PIXI.BaseTexture.SCALE_MODE.LINEAR ? gl.LINEAR : gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === PIXI.BaseTexture.SCALE_MODE.LINEAR ? gl.LINEAR : gl.NEAREST);

            if (!texture._powerOf2) {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            } else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            }

            gl.bindTexture(gl.TEXTURE_2D, null);
        }

        return texture._glTextures[gl.id];
    };

    PIXI.updateWebGLTexture = function (texture, gl) {
        if (texture._glTextures[gl.id]) {
            gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === PIXI.BaseTexture.SCALE_MODE.LINEAR ? gl.LINEAR : gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === PIXI.BaseTexture.SCALE_MODE.LINEAR ? gl.LINEAR : gl.NEAREST);

            if (!texture._powerOf2) {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            } else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            }

            gl.bindTexture(gl.TEXTURE_2D, null);
        }

    };
    PIXI.WebGLRenderer.prototype.handleContextLost = function (event) {
        event.preventDefault();
        this.contextLost = true;
    };
    PIXI.WebGLRenderer.prototype.handleContextRestored = function () {
        try {
            this.gl = this.view.getContext('experimental-webgl', this.options);
        } catch (e) {
            try {
                this.gl = this.view.getContext('webgl', this.options);
            } catch (e2) {
                throw new Error(' This browser does not support webGL. Try using the canvas renderer' + this);
            }
        }

        var gl = this.gl;
        gl.id = PIXI.WebGLRenderer.glContextId++;
        this.shaderManager.setContext(gl);
        this.spriteBatch.setContext(gl);
        this.maskManager.setContext(gl);
        this.filterManager.setContext(gl);


        this.renderSession.gl = this.gl;

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);

        gl.enable(gl.BLEND);
        gl.colorMask(true, true, true, this.transparent);

        this.gl.viewport(0, 0, this.width, this.height);

        for (var key in PIXI.TextureCache) {
            var texture = PIXI.TextureCache[key].baseTexture;
            texture._glTextures = [];
        }

        this.contextLost = false;

    };

    PIXI.WebGLRenderer.glContextId = 0;

    PIXI.WebGLMaskManager = function (gl) {
        this.maskStack = [];
        this.maskPosition = 0;

        this.setContext(gl);
    };

    PIXI.WebGLMaskManager.prototype.setContext = function (gl) {
        this.gl = gl;
    };

    PIXI.WebGLMaskManager.prototype.pushMask = function (maskData, renderSession) {
        var gl = this.gl;

        if (this.maskStack.length === 0) {
            gl.enable(gl.STENCIL_TEST);
            gl.stencilFunc(gl.ALWAYS, 1, 1);
        }

        this.maskStack.push(maskData);

        gl.colorMask(false, false, false, true);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);

        PIXI.WebGLGraphics.renderGraphics(maskData, renderSession);

        gl.colorMask(true, true, true, true);
        gl.stencilFunc(gl.NOTEQUAL, 0, this.maskStack.length);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    };

    PIXI.WebGLMaskManager.prototype.popMask = function (renderSession) {
        var gl = this.gl;

        var maskData = this.maskStack.pop();

        if (maskData) {
            gl.colorMask(false, false, false, false);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);

            PIXI.WebGLGraphics.renderGraphics(maskData, renderSession);

            gl.colorMask(true, true, true, true);
            gl.stencilFunc(gl.NOTEQUAL, 0, this.maskStack.length);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
        }

        if (this.maskStack.length === 0) gl.disable(gl.STENCIL_TEST);
    };

    PIXI.WebGLShaderManager = function (gl) {
        this.setContext(gl);
    };

    PIXI.WebGLShaderManager.prototype.setContext = function (gl) {
        this.gl = gl;
        this.primitiveShader = new PIXI.PrimitiveShader(gl);
        this.defaultShader = new PIXI.PixiShader(gl);

        var shaderProgram = this.defaultShader.program;

        gl.useProgram(shaderProgram);

        gl.enableVertexAttribArray(this.defaultShader.aVertexPosition);
        gl.enableVertexAttribArray(this.defaultShader.colorAttribute);
        gl.enableVertexAttribArray(this.defaultShader.aTextureCoord);


    };

    PIXI.WebGLShaderManager.prototype.activatePrimitiveShader = function () {
        var gl = this.gl;

        gl.useProgram(this.primitiveShader.program);

        gl.disableVertexAttribArray(this.defaultShader.aVertexPosition);
        gl.disableVertexAttribArray(this.defaultShader.colorAttribute);
        gl.disableVertexAttribArray(this.defaultShader.aTextureCoord);

        gl.enableVertexAttribArray(this.primitiveShader.aVertexPosition);
        gl.enableVertexAttribArray(this.primitiveShader.colorAttribute);
    };

    PIXI.WebGLShaderManager.prototype.deactivatePrimitiveShader = function () {
        var gl = this.gl;

        gl.useProgram(this.defaultShader.program);

        gl.disableVertexAttribArray(this.primitiveShader.aVertexPosition);
        gl.disableVertexAttribArray(this.primitiveShader.colorAttribute);

        gl.enableVertexAttribArray(this.defaultShader.aVertexPosition);
        gl.enableVertexAttribArray(this.defaultShader.colorAttribute);
        gl.enableVertexAttribArray(this.defaultShader.aTextureCoord);
    };

    PIXI.WebGLSpriteBatch = function (gl) {


        this.size = 2000;
        this.vertSize = 6;
        var numVerts = this.size * 4 * this.vertSize;
        var numIndices = this.size * 6;
        this.vertices = new Float32Array(numVerts);
        this.indices = new Uint16Array(numIndices);

        this.lastIndexCount = 0;

        for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
            this.indices[i + 0] = j + 0;
            this.indices[i + 1] = j + 1;
            this.indices[i + 2] = j + 2;
            this.indices[i + 3] = j + 0;
            this.indices[i + 4] = j + 2;
            this.indices[i + 5] = j + 3;
        }


        this.drawing = false;
        this.currentBatchSize = 0;
        this.currentBaseTexture = null;

        this.setContext(gl);
    };

    PIXI.WebGLSpriteBatch.prototype.setContext = function (gl) {
        this.gl = gl;
        this.vertexBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

        this.currentBlendMode = 99999;
    };

    PIXI.WebGLSpriteBatch.prototype.begin = function (renderSession) {
        this.renderSession = renderSession;
        this.shader = this.renderSession.shaderManager.defaultShader;

        this.start();
    };

    PIXI.WebGLSpriteBatch.prototype.end = function () {
        this.flush();
    };


    PIXI.WebGLSpriteBatch.prototype.render = function (sprite) {
        if (sprite.texture.baseTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) {
            this.flush();
            this.currentBaseTexture = sprite.texture.baseTexture;
        }
        if (sprite.blendMode !== this.currentBlendMode) {
            this.setBlendMode(sprite.blendMode);
        }
        var uvs = sprite._uvs || sprite.texture._uvs;
        if (!uvs) return;
        var alpha = sprite.worldAlpha;
        var tint = sprite.tint;

        var verticies = this.vertices;

        var width = sprite.texture.frame.width;
        var height = sprite.texture.frame.height;
        var aX = sprite.anchor.x;
        var aY = sprite.anchor.y;

        var w0, w1, h0, h1;

        if (sprite.texture.trimmed) {
            var trim = sprite.texture.trim;

            w1 = trim.x - aX * trim.realWidth;
            w0 = w1 + width;

            h1 = trim.y - aY * trim.realHeight;
            h0 = h1 + height;
        } else {
            w0 = (width) * (1 - aX);
            w1 = (width) * -aX;

            h0 = height * (1 - aY);
            h1 = height * -aY;
        }

        var index = this.currentBatchSize * 4 * this.vertSize;

        var worldTransform = sprite.worldTransform;

        var a = worldTransform[0];
        var b = worldTransform[3];
        var c = worldTransform[1];
        var d = worldTransform[4];
        var tx = worldTransform[2];
        var ty = worldTransform[5];
        verticies[index++] = a * w1 + c * h1 + tx;
        verticies[index++] = d * h1 + b * w1 + ty;
        verticies[index++] = uvs[0];
        verticies[index++] = uvs[1];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        verticies[index++] = a * w0 + c * h1 + tx;
        verticies[index++] = d * h1 + b * w0 + ty;
        verticies[index++] = uvs[2];
        verticies[index++] = uvs[3];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        verticies[index++] = a * w0 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w0 + ty;
        verticies[index++] = uvs[4];
        verticies[index++] = uvs[5];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        verticies[index++] = a * w1 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w1 + ty;
        verticies[index++] = uvs[6];
        verticies[index++] = uvs[7];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        this.currentBatchSize++;


    };

    PIXI.WebGLSpriteBatch.prototype.renderTilingSprite = function (tilingSprite) {
        var texture = tilingSprite.tilingTexture;

        if (texture.baseTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) {
            this.flush();
            this.currentBaseTexture = texture.baseTexture;
        }
        if (tilingSprite.blendMode !== this.currentBlendMode) {
            this.setBlendMode(tilingSprite.blendMode);
        }

        if (!tilingSprite._uvs) tilingSprite._uvs = new Float32Array(8);

        var uvs = tilingSprite._uvs;

        var offsetX = tilingSprite.tilePosition.x / texture.baseTexture.width;
        var offsetY = tilingSprite.tilePosition.y / texture.baseTexture.height;

        var scaleX = (tilingSprite.width / texture.baseTexture.width) / (tilingSprite.tileScale.x * tilingSprite.tileScaleOffset.x);
        var scaleY = (tilingSprite.height / texture.baseTexture.height) / (tilingSprite.tileScale.y * tilingSprite.tileScaleOffset.y);

        uvs[0] = 0 - offsetX;
        uvs[1] = 0 - offsetY;

        uvs[2] = (1 * scaleX) - offsetX;
        uvs[3] = 0 - offsetY;

        uvs[4] = (1 * scaleX) - offsetX;
        uvs[5] = (1 * scaleY) - offsetY;

        uvs[6] = 0 - offsetX;
        uvs[7] = (1 * scaleY) - offsetY;
        var alpha = tilingSprite.worldAlpha;
        var tint = tilingSprite.tint;

        var verticies = this.vertices;

        var width = tilingSprite.width;
        var height = tilingSprite.height;
        var aX = tilingSprite.anchor.x; // - tilingSprite.texture.trim.x
        var aY = tilingSprite.anchor.y; //- tilingSprite.texture.trim.y
        var w0 = width * (1 - aX);
        var w1 = width * -aX;

        var h0 = height * (1 - aY);
        var h1 = height * -aY;

        var index = this.currentBatchSize * 4 * this.vertSize;

        var worldTransform = tilingSprite.worldTransform;

        var a = worldTransform[0];
        var b = worldTransform[3];
        var c = worldTransform[1];
        var d = worldTransform[4];
        var tx = worldTransform[2];
        var ty = worldTransform[5];
        verticies[index++] = a * w1 + c * h1 + tx;
        verticies[index++] = d * h1 + b * w1 + ty;
        verticies[index++] = uvs[0];
        verticies[index++] = uvs[1];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        verticies[index++] = a * w0 + c * h1 + tx;
        verticies[index++] = d * h1 + b * w0 + ty;
        verticies[index++] = uvs[2];
        verticies[index++] = uvs[3];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        verticies[index++] = a * w0 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w0 + ty;
        verticies[index++] = uvs[4];
        verticies[index++] = uvs[5];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        verticies[index++] = a * w1 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w1 + ty;
        verticies[index++] = uvs[6];
        verticies[index++] = uvs[7];
        verticies[index++] = alpha;
        verticies[index++] = tint;
        this.currentBatchSize++;
    };

    PIXI.WebGLSpriteBatch.prototype.flush = function () {
        if (this.currentBatchSize === 0) return;

        var gl = this.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.currentBaseTexture._glTextures[gl.id] || PIXI.createWebGLTexture(this.currentBaseTexture, gl));
        var view = this.vertices.subarray(0, this.currentBatchSize * 4 * this.vertSize);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        gl.drawElements(gl.TRIANGLES, this.currentBatchSize * 6, gl.UNSIGNED_SHORT, 0);
        this.currentBatchSize = 0;
        this.renderSession.drawCount++;
    };


    PIXI.WebGLSpriteBatch.prototype.stop = function () {
        this.flush();
    };

    PIXI.WebGLSpriteBatch.prototype.start = function () {
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var projection = this.renderSession.projection;
        gl.uniform2f(this.shader.projectionVector, projection.x, projection.y);
        var stride = this.vertSize * 4;
        gl.vertexAttribPointer(this.shader.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
        gl.vertexAttribPointer(this.shader.aTextureCoord, 2, gl.FLOAT, false, stride, 2 * 4);
        gl.vertexAttribPointer(this.shader.colorAttribute, 2, gl.FLOAT, false, stride, 4 * 4);
        if (this.currentBlendMode !== PIXI.blendModes.NORMAL) {
            this.setBlendMode(PIXI.blendModes.NORMAL);
        }
    };

    PIXI.WebGLSpriteBatch.prototype.setBlendMode = function (blendMode) {
        this.flush();

        this.currentBlendMode = blendMode;

        var blendModeWebGL = PIXI.blendModesWebGL[this.currentBlendMode];
        this.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
    };


    PIXI.WebGLFilterManager = function (gl, transparent) {
        this.transparent = transparent;

        this.filterStack = [];

        this.offsetX = 0;
        this.offsetY = 0;

        this.setContext(gl);
    };

    PIXI.WebGLFilterManager.prototype.setContext = function (gl) {
        this.gl = gl;
        this.texturePool = [];

        this.initShaderBuffers();
    };

    PIXI.WebGLFilterManager.prototype.begin = function (renderSession, buffer) {
        this.renderSession = renderSession;
        this.defaultShader = renderSession.shaderManager.defaultShader;

        var projection = this.renderSession.projection;

        this.width = projection.x * 2;
        this.height = -projection.y * 2;
        this.buffer = buffer;
    };

    PIXI.WebGLFilterManager.prototype.pushFilter = function (filterBlock) {
        var gl = this.gl;

        var projection = this.renderSession.projection;
        var offset = this.renderSession.offset;
        this.filterStack.push(filterBlock);

        var filter = filterBlock.filterPasses[0];

        this.offsetX += filterBlock.target.filterArea.x;
        this.offsetY += filterBlock.target.filterArea.y;

        var texture = this.texturePool.pop();
        if (!texture) {
            texture = new PIXI.FilterTexture(this.gl, this.width, this.height);
        } else {
            texture.resize(this.width, this.height);
        }

        gl.bindTexture(gl.TEXTURE_2D, texture.texture);

        filterBlock.target.filterArea = filterBlock.target.getBounds();

        var filterArea = filterBlock.target.filterArea;

        var padidng = filter.padding;
        filterArea.x -= padidng;
        filterArea.y -= padidng;
        filterArea.width += padidng * 2;
        filterArea.height += padidng * 2;
        if (filterArea.x < 0) filterArea.x = 0;
        if (filterArea.width > this.width) filterArea.width = this.width;
        if (filterArea.y < 0) filterArea.y = 0;
        if (filterArea.height > this.height) filterArea.height = this.height;
        gl.bindFramebuffer(gl.FRAMEBUFFER, texture.frameBuffer);
        gl.viewport(0, 0, filterArea.width, filterArea.height);

        projection.x = filterArea.width / 2;
        projection.y = -filterArea.height / 2;

        offset.x = -filterArea.x;
        offset.y = -filterArea.y;
        gl.uniform2f(this.defaultShader.projectionVector, filterArea.width / 2, -filterArea.height / 2);
        gl.uniform2f(this.defaultShader.offsetVector, -filterArea.x, -filterArea.y);

        gl.colorMask(true, true, true, true);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        filterBlock._glFilterTexture = texture;


    };


    PIXI.WebGLFilterManager.prototype.popFilter = function () {
        var gl = this.gl;
        var filterBlock = this.filterStack.pop();
        var filterArea = filterBlock.target.filterArea;
        var texture = filterBlock._glFilterTexture;
        var projection = this.renderSession.projection;
        var offset = this.renderSession.offset;

        if (filterBlock.filterPasses.length > 1) {
            gl.viewport(0, 0, filterArea.width, filterArea.height);

            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

            this.vertexArray[0] = 0;
            this.vertexArray[1] = filterArea.height;

            this.vertexArray[2] = filterArea.width;
            this.vertexArray[3] = filterArea.height;

            this.vertexArray[4] = 0;
            this.vertexArray[5] = 0;

            this.vertexArray[6] = filterArea.width;
            this.vertexArray[7] = 0;

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);

            gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
            this.uvArray[2] = filterArea.width / this.width;
            this.uvArray[5] = filterArea.height / this.height;
            this.uvArray[6] = filterArea.width / this.width;
            this.uvArray[7] = filterArea.height / this.height;

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);

            var inputTexture = texture;
            var outputTexture = this.texturePool.pop();
            if (!outputTexture) outputTexture = new PIXI.FilterTexture(this.gl, this.width, this.height);
            gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.disable(gl.BLEND);

            for (var i = 0; i < filterBlock.filterPasses.length - 1; i++) {
                var filterPass = filterBlock.filterPasses[i];

                gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer);
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, inputTexture.texture);
                this.applyFilterPass(filterPass, filterArea, filterArea.width, filterArea.height);
                var temp = inputTexture;
                inputTexture = outputTexture;
                outputTexture = temp;
            }

            gl.enable(gl.BLEND);

            texture = inputTexture;
            this.texturePool.push(outputTexture);
        }

        var filter = filterBlock.filterPasses[filterBlock.filterPasses.length - 1];

        this.offsetX -= filterArea.x;
        this.offsetY -= filterArea.y;


        var sizeX = this.width;
        var sizeY = this.height;

        var offsetX = 0;
        var offsetY = 0;

        var buffer = this.buffer;
        if (this.filterStack.length === 0) {
            gl.colorMask(true, true, true, this.transparent);
        } else {
            var currentFilter = this.filterStack[this.filterStack.length - 1];
            filterArea = currentFilter.target.filterArea;

            sizeX = filterArea.width;
            sizeY = filterArea.height;

            offsetX = filterArea.x;
            offsetY = filterArea.y;

            buffer = currentFilter._glFilterTexture.frameBuffer;
        }
        projection.x = sizeX / 2;
        projection.y = -sizeY / 2;

        offset.x = offsetX;
        offset.y = offsetY;

        filterArea = filterBlock.target.filterArea;

        var x = filterArea.x - offsetX;
        var y = filterArea.y - offsetY;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

        this.vertexArray[0] = x;
        this.vertexArray[1] = y + filterArea.height;

        this.vertexArray[2] = x + filterArea.width;
        this.vertexArray[3] = y + filterArea.height;

        this.vertexArray[4] = x;
        this.vertexArray[5] = y;

        this.vertexArray[6] = x + filterArea.width;
        this.vertexArray[7] = y;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);

        this.uvArray[2] = filterArea.width / this.width;
        this.uvArray[5] = filterArea.height / this.height;
        this.uvArray[6] = filterArea.width / this.width;
        this.uvArray[7] = filterArea.height / this.height;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);

        gl.viewport(0, 0, sizeX, sizeY);
        gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture.texture);
        this.applyFilterPass(filter, filterArea, sizeX, sizeY);
        gl.useProgram(this.defaultShader.program);
        gl.uniform2f(this.defaultShader.projectionVector, sizeX / 2, -sizeY / 2);
        gl.uniform2f(this.defaultShader.offsetVector, -offsetX, -offsetY);
        this.texturePool.push(texture);
        filterBlock._glFilterTexture = null;
    };

    PIXI.WebGLFilterManager.prototype.applyFilterPass = function (filter, filterArea, width, height) {
        var gl = this.gl;
        var shader = filter.shaders[gl.id];

        if (!shader) {
            shader = new PIXI.PixiShader(gl);

            shader.fragmentSrc = filter.fragmentSrc;
            shader.uniforms = filter.uniforms;
            shader.init();

            filter.shaders[gl.id] = shader;
        }
        gl.useProgram(shader.program);

        gl.uniform2f(shader.projectionVector, width / 2, -height / 2);
        gl.uniform2f(shader.offsetVector, 0, 0);

        if (filter.uniforms.dimensions) {

            filter.uniforms.dimensions.value[0] = this.width; //width;
            filter.uniforms.dimensions.value[1] = this.height; //height;
            filter.uniforms.dimensions.value[2] = this.vertexArray[0];
            filter.uniforms.dimensions.value[3] = this.vertexArray[5]; //filterArea.height;
        }

        shader.syncUniforms();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
        gl.vertexAttribPointer(shader.colorAttribute, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

        this.renderSession.drawCount++;
    };

    PIXI.WebGLFilterManager.prototype.initShaderBuffers = function () {
        var gl = this.gl;
        this.vertexBuffer = gl.createBuffer();
        this.uvBuffer = gl.createBuffer();
        this.colorBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        this.vertexArray = new Float32Array([0.0, 0.0,
                                         1.0, 0.0,
                                         0.0, 1.0,
                                         1.0, 1.0]);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            this.vertexArray,
            gl.STATIC_DRAW);
        this.uvArray = new Float32Array([0.0, 0.0,
                                     1.0, 0.0,
                                     0.0, 1.0,
                                     1.0, 1.0]);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            this.uvArray,
            gl.STATIC_DRAW);

        this.colorArray = new Float32Array([1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF]);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            this.colorArray,
            gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER,
            new Uint16Array([0, 1, 2, 1, 3, 2]),
            gl.STATIC_DRAW);
    };

    PIXI.FilterTexture = function (gl, width, height) {
        this.gl = gl;
        this.frameBuffer = gl.createFramebuffer();
        this.texture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

        this.resize(width, height);
    };

    PIXI.FilterTexture.prototype.clear = function () {
        var gl = this.gl;

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };

    PIXI.FilterTexture.prototype.resize = function (width, height) {
        if (this.width === width && this.height === height) return;

        this.width = width;
        this.height = height;

        var gl = this.gl;

        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    };

    PIXI.CanvasMaskManager = function () {

    };

    PIXI.CanvasMaskManager.prototype.pushMask = function (maskData, context) {
        context.save();

        var cacheAlpha = maskData.alpha;
        var transform = maskData.worldTransform;

        context.setTransform(transform[0], transform[3], transform[1], transform[4], transform[2], transform[5]);

        PIXI.CanvasGraphics.renderGraphicsMask(maskData, context);

        context.clip();

        maskData.worldAlpha = cacheAlpha;
    };

    PIXI.CanvasMaskManager.prototype.popMask = function (context) {
        context.restore();
    };

    PIXI.CanvasTinter = function () {
    };


    PIXI.CanvasTinter.getTintedTexture = function (sprite, color) {

        var texture = sprite.texture;

        color = PIXI.CanvasTinter.roundColor(color);

        var stringColor = "#" + ("00000" + (color | 0).toString(16)).substr(-6);

        texture.tintCache = texture.tintCache || {};

        if (texture.tintCache[stringColor]) return texture.tintCache[stringColor];
        var canvas = PIXI.CanvasTinter.canvas || document.createElement("canvas");


        PIXI.CanvasTinter.tintMethod(texture, color, canvas);

        if (PIXI.CanvasTinter.convertTintToImage) {
            var tintImage = new Image();
            tintImage.src = canvas.toDataURL();

            texture.tintCache[stringColor] = tintImage;
        } else {

            texture.tintCache[stringColor] = canvas;
            PIXI.CanvasTinter.canvas = null;

        }

        return canvas;
    };

    PIXI.CanvasTinter.tintWithMultiply = function (texture, color, canvas) {
        var context = canvas.getContext("2d");

        var frame = texture.frame;

        canvas.width = frame.width;
        canvas.height = frame.height;

        context.fillStyle = "#" + ("00000" + (color | 0).toString(16)).substr(-6);

        context.fillRect(0, 0, frame.width, frame.height);

        context.globalCompositeOperation = "multiply";

        context.drawImage(texture.baseTexture.source,
            frame.x,
            frame.y,
            frame.width,
            frame.height,
            0,
            0,
            frame.width,
            frame.height);

        context.globalCompositeOperation = "destination-atop";

        context.drawImage(texture.baseTexture.source,
            frame.x,
            frame.y,
            frame.width,
            frame.height,
            0,
            0,
            frame.width,
            frame.height);
    };

    PIXI.CanvasTinter.tintWithOverlay = function (texture, color, canvas) {
        var context = canvas.getContext("2d");

        var frame = texture.frame;

        canvas.width = frame.width;
        canvas.height = frame.height;



        context.globalCompositeOperation = "copy";
        context.fillStyle = "#" + ("00000" + (color | 0).toString(16)).substr(-6);
        context.fillRect(0, 0, frame.width, frame.height);

        context.globalCompositeOperation = "destination-atop";
        context.drawImage(texture.baseTexture.source,
            frame.x,
            frame.y,
            frame.width,
            frame.height,
            0,
            0,
            frame.width,
            frame.height);

    };


    PIXI.CanvasTinter.tintWithPerPixel = function (texture, color, canvas) {
        var context = canvas.getContext("2d");

        var frame = texture.frame;

        canvas.width = frame.width;
        canvas.height = frame.height;

        context.globalCompositeOperation = "copy";
        context.drawImage(texture.baseTexture.source,
            frame.x,
            frame.y,
            frame.width,
            frame.height,
            0,
            0,
            frame.width,
            frame.height);

        var rgbValues = PIXI.hex2rgb(color);
        var r = rgbValues[0],
            g = rgbValues[1],
            b = rgbValues[2];

        var pixelData = context.getImageData(0, 0, frame.width, frame.height);

        var pixels = pixelData.data;

        for (var i = 0; i < pixels.length; i += 4) {
            pixels[i + 0] *= r;
            pixels[i + 1] *= g;
            pixels[i + 2] *= b;
        }

        context.putImageData(pixelData, 0, 0);
    };

    PIXI.CanvasTinter.roundColor = function (color) {
        var step = PIXI.CanvasTinter.cacheStepsPerColorChannel;

        var rgbValues = PIXI.hex2rgb(color);

        rgbValues[0] = Math.min(255, Math.round(rgbValues[0] / step) * step);
        rgbValues[1] = Math.min(255, Math.round(rgbValues[1] / step) * step);
        rgbValues[2] = Math.min(255, Math.round(rgbValues[2] / step) * step);

        return PIXI.rgb2hex(rgbValues);
    };

    PIXI.CanvasTinter.cacheStepsPerColorChannel = 8;
    PIXI.CanvasTinter.convertTintToImage = false;

    PIXI.CanvasTinter.canUseMultiply = PIXI.canUseNewCanvasBlendModes();

    PIXI.CanvasTinter.tintMethod = PIXI.CanvasTinter.canUseMultiply ? PIXI.CanvasTinter.tintWithMultiply : PIXI.CanvasTinter.tintWithPerPixel;
    PIXI.CanvasRenderer = function (width, height, view, transparent) {
        PIXI.defaultRenderer = PIXI.defaultRenderer || this;

        this.type = PIXI.CANVAS_RENDERER;

        this.transparent = transparent;

        if (!PIXI.blendModesCanvas) {
            PIXI.blendModesCanvas = [];

            if (PIXI.canUseNewCanvasBlendModes()) {
                PIXI.blendModesCanvas[PIXI.blendModes.NORMAL] = "source-over";
                PIXI.blendModesCanvas[PIXI.blendModes.ADD] = "lighter"; //IS THIS OK???
                PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = "multiply";
                PIXI.blendModesCanvas[PIXI.blendModes.SCREEN] = "screen";
            } else {
                PIXI.blendModesCanvas[PIXI.blendModes.NORMAL] = "source-over";
                PIXI.blendModesCanvas[PIXI.blendModes.ADD] = "lighter"; //IS THIS OK???
                PIXI.blendModesCanvas[PIXI.blendModes.MULTIPLY] = "source-over";
                PIXI.blendModesCanvas[PIXI.blendModes.SCREEN] = "source-over";
            }
        }
        this.width = width || 800;
        this.height = height || 600;
        this.view = view || document.createElement("canvas");
        this.context = this.view.getContext("2d");
        this.smoothProperty = null;

        if ("imageSmoothingEnabled" in this.context)
            this.smoothProperty = "imageSmoothingEnabled";
        else if ("webkitImageSmoothingEnabled" in this.context)
            this.smoothProperty = "webkitImageSmoothingEnabled";
        else if ("mozImageSmoothingEnabled" in this.context)
            this.smoothProperty = "mozImageSmoothingEnabled";
        else if ("oImageSmoothingEnabled" in this.context)
            this.smoothProperty = "oImageSmoothingEnabled";

        this.scaleMode = null;

        this.refresh = true;

        this.view.width = this.width;
        this.view.height = this.height;
        this.count = 0;

        this.maskManager = new PIXI.CanvasMaskManager();

        this.renderSession = {};
        this.renderSession.context = this.context;
        this.renderSession.maskManager = this.maskManager;

    };
    PIXI.CanvasRenderer.prototype.constructor = PIXI.CanvasRenderer;
    PIXI.CanvasRenderer.prototype.render = function (stage) {
        PIXI.texturesToUpdate.length = 0;
        PIXI.texturesToDestroy.length = 0;

        stage.updateTransform();
        if (this.view.style.backgroundColor !== stage.backgroundColorString && !this.transparent)
            this.view.style.backgroundColor = stage.backgroundColorString;

        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, this.width, this.height);
        this.renderDisplayObject(stage);
        if (stage.interactive) {
            if (!stage._interactiveEventsAdded) {
                stage._interactiveEventsAdded = true;
                stage.interactionManager.setTarget(this);
            }
        }
        if (PIXI.Texture.frameUpdates.length > 0) {
            PIXI.Texture.frameUpdates.length = 0;
        }
    };
    PIXI.CanvasRenderer.prototype.resize = function (width, height) {
        this.width = width;
        this.height = height;

        this.view.width = width;
        this.view.height = height;
    };
    PIXI.CanvasRenderer.prototype.renderDisplayObject = function (displayObject, context) {

        this.renderSession.context = context || this.context;
        displayObject._renderCanvas(this.renderSession);
    };
    PIXI.CanvasRenderer.prototype.renderStripFlat = function (strip) {
        var context = this.context;
        var verticies = strip.verticies;

        var length = verticies.length / 2;
        this.count++;

        context.beginPath();
        for (var i = 1; i < length - 2; i++) {
            var index = i * 2;

            var x0 = verticies[index],
                x1 = verticies[index + 2],
                x2 = verticies[index + 4];
            var y0 = verticies[index + 1],
                y1 = verticies[index + 3],
                y2 = verticies[index + 5];

            context.moveTo(x0, y0);
            context.lineTo(x1, y1);
            context.lineTo(x2, y2);
        }

        context.fillStyle = "#FF0000";
        context.fill();
        context.closePath();
    };
    PIXI.CanvasRenderer.prototype.renderStrip = function (strip) {
        var context = this.context;
        var verticies = strip.verticies;
        var uvs = strip.uvs;

        var length = verticies.length / 2;
        this.count++;

        for (var i = 1; i < length - 2; i++) {
            var index = i * 2;

            var x0 = verticies[index],
                x1 = verticies[index + 2],
                x2 = verticies[index + 4];
            var y0 = verticies[index + 1],
                y1 = verticies[index + 3],
                y2 = verticies[index + 5];

            var u0 = uvs[index] * strip.texture.width,
                u1 = uvs[index + 2] * strip.texture.width,
                u2 = uvs[index + 4] * strip.texture.width;
            var v0 = uvs[index + 1] * strip.texture.height,
                v1 = uvs[index + 3] * strip.texture.height,
                v2 = uvs[index + 5] * strip.texture.height;

            context.save();
            context.beginPath();
            context.moveTo(x0, y0);
            context.lineTo(x1, y1);
            context.lineTo(x2, y2);
            context.closePath();

            context.clip();
            var delta = u0 * v1 + v0 * u2 + u1 * v2 - v1 * u2 - v0 * u1 - u0 * v2;
            var deltaA = x0 * v1 + v0 * x2 + x1 * v2 - v1 * x2 - v0 * x1 - x0 * v2;
            var deltaB = u0 * x1 + x0 * u2 + u1 * x2 - x1 * u2 - x0 * u1 - u0 * x2;
            var deltaC = u0 * v1 * x2 + v0 * x1 * u2 + x0 * u1 * v2 - x0 * v1 * u2 - v0 * u1 * x2 - u0 * x1 * v2;
            var deltaD = y0 * v1 + v0 * y2 + y1 * v2 - v1 * y2 - v0 * y1 - y0 * v2;
            var deltaE = u0 * y1 + y0 * u2 + u1 * y2 - y1 * u2 - y0 * u1 - u0 * y2;
            var deltaF = u0 * v1 * y2 + v0 * y1 * u2 + y0 * u1 * v2 - y0 * v1 * u2 - v0 * u1 * y2 - u0 * y1 * v2;

            context.transform(deltaA / delta, deltaD / delta,
                deltaB / delta, deltaE / delta,
                deltaC / delta, deltaF / delta);

            context.drawImage(strip.texture.baseTexture.source, 0, 0);
            context.restore();
        }
    };

    PIXI.CanvasBuffer = function (width, height) {
        this.width = width;
        this.height = height;

        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
    };

    PIXI.CanvasBuffer.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height);
    };

    PIXI.CanvasBuffer.prototype.resize = function (width, height) {
        this.width = this.canvas.width = width;
        this.height = this.canvas.height = height;
    };
    PIXI.CanvasGraphics = function () {

    };
    PIXI.CanvasGraphics.renderGraphics = function (graphics, context) {
        var worldAlpha = graphics.worldAlpha;
        var color = '';

        for (var i = 0; i < graphics.graphicsData.length; i++) {
            var data = graphics.graphicsData[i];
            var points = data.points;

            context.strokeStyle = color = '#' + ('00000' + (data.lineColor | 0).toString(16)).substr(-6);

            context.lineWidth = data.lineWidth;

            if (data.type === PIXI.Graphics.POLY) {
                context.beginPath();

                context.moveTo(points[0], points[1]);

                for (var j = 1; j < points.length / 2; j++) {
                    context.lineTo(points[j * 2], points[j * 2 + 1]);
                }
                if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
                    context.closePath();
                }

                if (data.fill) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = color = '#' + ('00000' + (data.fillColor | 0).toString(16)).substr(-6);
                    context.fill();
                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.stroke();
                }
            } else if (data.type === PIXI.Graphics.RECT) {

                if (data.fillColor || data.fillColor === 0) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = color = '#' + ('00000' + (data.fillColor | 0).toString(16)).substr(-6);
                    context.fillRect(points[0], points[1], points[2], points[3]);

                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.strokeRect(points[0], points[1], points[2], points[3]);
                }

            } else if (data.type === PIXI.Graphics.CIRC) {
                context.beginPath();
                context.arc(points[0], points[1], points[2], 0, 2 * Math.PI);
                context.closePath();

                if (data.fill) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = color = '#' + ('00000' + (data.fillColor | 0).toString(16)).substr(-6);
                    context.fill();
                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.stroke();
                }
            } else if (data.type === PIXI.Graphics.ELIP) {

                var ellipseData = data.points;

                var w = ellipseData[2] * 2;
                var h = ellipseData[3] * 2;

                var x = ellipseData[0] - w / 2;
                var y = ellipseData[1] - h / 2;

                context.beginPath();

                var kappa = 0.5522848,
                    ox = (w / 2) * kappa, // control point offset horizontal
                    oy = (h / 2) * kappa, // control point offset vertical
                    xe = x + w, // x-end
                    ye = y + h, // y-end
                    xm = x + w / 2, // x-middle
                    ym = y + h / 2; // y-middle

                context.moveTo(x, ym);
                context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

                context.closePath();

                if (data.fill) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = color = '#' + ('00000' + (data.fillColor | 0).toString(16)).substr(-6);
                    context.fill();
                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.stroke();
                }
            }
        }
    };
    PIXI.CanvasGraphics.renderGraphicsMask = function (graphics, context) {
        var len = graphics.graphicsData.length;

        if (len === 0) return;

        if (len > 1) {
            len = 1;
            
        }

        for (var i = 0; i < 1; i++) {
            var data = graphics.graphicsData[i];
            var points = data.points;

            if (data.type === PIXI.Graphics.POLY) {
                context.beginPath();
                context.moveTo(points[0], points[1]);

                for (var j = 1; j < points.length / 2; j++) {
                    context.lineTo(points[j * 2], points[j * 2 + 1]);
                }
                if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
                    context.closePath();
                }

            } else if (data.type === PIXI.Graphics.RECT) {
                context.beginPath();
                context.rect(points[0], points[1], points[2], points[3]);
                context.closePath();
            } else if (data.type === PIXI.Graphics.CIRC) {
                context.beginPath();
                context.arc(points[0], points[1], points[2], 0, 2 * Math.PI);
                context.closePath();
            } else if (data.type === PIXI.Graphics.ELIP) {
                var ellipseData = data.points;

                var w = ellipseData[2] * 2;
                var h = ellipseData[3] * 2;

                var x = ellipseData[0] - w / 2;
                var y = ellipseData[1] - h / 2;

                context.beginPath();

                var kappa = 0.5522848,
                    ox = (w / 2) * kappa, // control point offset horizontal
                    oy = (h / 2) * kappa, // control point offset vertical
                    xe = x + w, // x-end
                    ye = y + h, // y-end
                    xm = x + w / 2, // x-middle
                    ym = y + h / 2; // y-middle

                context.moveTo(x, ym);
                context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
                context.closePath();
            }
        }
    };
    PIXI.Graphics = function () {
        PIXI.DisplayObjectContainer.call(this);

        this.renderable = true;
        this.fillAlpha = 1;
        this.lineWidth = 0;
        this.lineColor = "black";
        this.graphicsData = [];

        this.tint = 0xFFFFFF; // * Math.random();

        this.blendMode = PIXI.blendModes.NORMAL;
        this.currentPath = {
            points: []
        };

        this._webGL = [];

        this.isMask = false;

        this.bounds = null;

        this.boundsPadding = 10;
    };
    PIXI.Graphics.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    PIXI.Graphics.prototype.constructor = PIXI.Graphics;
    Object.defineProperty(PIXI.Graphics.prototype, "cacheAsBitmap", {
        get: function () {
            return this._cacheAsBitmap;
        },
        set: function (value) {
            this._cacheAsBitmap = value;

            if (this._cacheAsBitmap) {
                this._generateCachedSprite();
            } else {
                this.destroyCachedSprite();
                this.dirty = true;
            }

        }
    });
    PIXI.Graphics.prototype.lineStyle = function (lineWidth, color, alpha) {
        if (!this.currentPath.points.length) this.graphicsData.pop();

        this.lineWidth = lineWidth || 0;
        this.lineColor = color || 0;
        this.lineAlpha = (arguments.length < 3) ? 1 : alpha;

        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: PIXI.Graphics.POLY
        };

        this.graphicsData.push(this.currentPath);
    };
    PIXI.Graphics.prototype.moveTo = function (x, y) {
        if (!this.currentPath.points.length) this.graphicsData.pop();

        this.currentPath = this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: PIXI.Graphics.POLY
        };

        this.currentPath.points.push(x, y);

        this.graphicsData.push(this.currentPath);
    };
    PIXI.Graphics.prototype.lineTo = function (x, y) {
        this.currentPath.points.push(x, y);
        this.dirty = true;
    };
    PIXI.Graphics.prototype.beginFill = function (color, alpha) {

        this.filling = true;
        this.fillColor = color || 0;
        this.fillAlpha = (arguments.length < 2) ? 1 : alpha;
    };
    PIXI.Graphics.prototype.endFill = function () {
        this.filling = false;
        this.fillColor = null;
        this.fillAlpha = 1;
    };
    PIXI.Graphics.prototype.drawRect = function (x, y, width, height) {
        if (!this.currentPath.points.length) this.graphicsData.pop();

        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [x, y, width, height],
            type: PIXI.Graphics.RECT
        };

        this.graphicsData.push(this.currentPath);
        this.dirty = true;
    };
    PIXI.Graphics.prototype.drawCircle = function (x, y, radius) {

        if (!this.currentPath.points.length) this.graphicsData.pop();

        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [x, y, radius, radius],
            type: PIXI.Graphics.CIRC
        };

        this.graphicsData.push(this.currentPath);
        this.dirty = true;
    };
    PIXI.Graphics.prototype.drawEllipse = function (x, y, width, height) {

        if (!this.currentPath.points.length) this.graphicsData.pop();

        this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [x, y, width, height],
            type: PIXI.Graphics.ELIP
        };

        this.graphicsData.push(this.currentPath);
        this.dirty = true;
    };
    PIXI.Graphics.prototype.clear = function () {
        this.lineWidth = 0;
        this.filling = false;

        this.dirty = true;
        this.clearDirty = true;
        this.graphicsData = [];

        this.bounds = null; //new PIXI.Rectangle();
    };
    PIXI.Graphics.prototype.generateTexture = function () {
        var bounds = this.getBounds();

        var canvasBuffer = new PIXI.CanvasBuffer(bounds.width, bounds.height);
        var texture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);

        canvasBuffer.context.translate(-bounds.x, -bounds.y);

        PIXI.CanvasGraphics.renderGraphics(this, canvasBuffer.context);

        return texture;
    };

    PIXI.Graphics.prototype._renderWebGL = function (renderSession) {
        if (this.visible === false || this.alpha === 0 || this.isMask === true) return;

        if (this._cacheAsBitmap) {

            if (this.dirty) {
                this._generateCachedSprite();
                PIXI.updateWebGLTexture(this._cachedSprite.texture.baseTexture, renderSession.gl);

                this.dirty = false;
            }

            PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, renderSession);

            return;
        } else {
            renderSession.spriteBatch.stop();

            if (this._mask) renderSession.maskManager.pushMask(this.mask, renderSession);
            if (this._filters) renderSession.filterManager.pushFilter(this._filterBlock);
            if (this.blendMode !== renderSession.spriteBatch.currentBlendMode) {
                this.spriteBatch.currentBlendMode = this.blendMode;
                var blendModeWebGL = PIXI.blendModesWebGL[renderSession.spriteBatch.currentBlendMode];
                this.spriteBatch.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
            }

            PIXI.WebGLGraphics.renderGraphics(this, renderSession);
            if (this.children.length) {
                renderSession.spriteBatch.start();
                for (var i = 0, j = this.children.length; i < j; i++) {
                    this.children[i]._renderWebGL(renderSession);
                }

                renderSession.spriteBatch.stop();
            }

            if (this._filters) renderSession.filterManager.popFilter();
            if (this._mask) renderSession.maskManager.popMask(renderSession);

            renderSession.drawCount++;

            renderSession.spriteBatch.start();
        }
    };

    PIXI.Graphics.prototype._renderCanvas = function (renderSession) {
        if (this.visible === false || this.alpha === 0 || this.isMask === true) return;

        var context = renderSession.context;
        var transform = this.worldTransform;

        if (this.blendMode !== renderSession.currentBlendMode) {
            renderSession.currentBlendMode = this.blendMode;
            context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
        }

        context.setTransform(transform[0], transform[3], transform[1], transform[4], transform[2], transform[5]);
        PIXI.CanvasGraphics.renderGraphics(this, context);
        for (var i = 0, j = this.children.length; i < j; i++) {
            this.children[i]._renderCanvas(renderSession);
        }
    };

    PIXI.Graphics.prototype.getBounds = function () {
        if (!this.bounds) this.updateBounds();

        var w0 = this.bounds.x;
        var w1 = this.bounds.width + this.bounds.x;

        var h0 = this.bounds.y;
        var h1 = this.bounds.height + this.bounds.y;

        var worldTransform = this.worldTransform;

        var a = worldTransform[0];
        var b = worldTransform[3];
        var c = worldTransform[1];
        var d = worldTransform[4];
        var tx = worldTransform[2];
        var ty = worldTransform[5];

        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;

        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;

        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;

        var x4 = a * w1 + c * h0 + tx;
        var y4 = d * h0 + b * w1 + ty;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var minX = Infinity;
        var minY = Infinity;

        minX = x1 < minX ? x1 : minX;
        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;

        minY = y1 < minY ? y1 : minY;
        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;

        maxX = x1 > maxX ? x1 : maxX;
        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;

        maxY = y1 > maxY ? y1 : maxY;
        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;

        return bounds;
    };

    PIXI.Graphics.prototype.updateBounds = function () {

        var minX = Infinity;
        var maxX = -Infinity;

        var minY = Infinity;
        var maxY = -Infinity;

        var points, x, y;

        for (var i = 0; i < this.graphicsData.length; i++) {
            var data = this.graphicsData[i];
            var type = data.type;
            var lineWidth = data.lineWidth;

            points = data.points;

            if (type === PIXI.Graphics.RECT) {
                x = points.x - lineWidth / 2;
                y = points.y - lineWidth / 2;
                var width = points.width + lineWidth;
                var height = points.height + lineWidth;

                minX = x < minX ? x : minX;
                maxX = x + width > maxX ? x + width : maxX;

                minY = y < minY ? x : minY;
                maxY = y + height > maxY ? y + height : maxY;
            } else if (type === PIXI.Graphics.CIRC || type === PIXI.Graphics.ELIP) {
                x = points.x;
                y = points.y;
                var radius = points.radius + lineWidth / 2;

                minX = x - radius < minX ? x - radius : minX;
                maxX = x + radius > maxX ? x + radius : maxX;

                minY = y - radius < minY ? y - radius : minY;
                maxY = y + radius > maxY ? y + radius : maxY;
            } else {
                for (var j = 0; j < points.length; j += 2) {

                    x = points[j];
                    y = points[j + 1];
                    minX = x - lineWidth < minX ? x - lineWidth : minX;
                    maxX = x + lineWidth > maxX ? x + lineWidth : maxX;

                    minY = y - lineWidth < minY ? y - lineWidth : minY;
                    maxY = y + lineWidth > maxY ? y + lineWidth : maxY;
                }
            }
        }

        var padding = this.boundsPadding;
        this.bounds = new PIXI.Rectangle(minX - padding, minY - padding, (maxX - minX) + padding * 2, (maxY - minY) + padding * 2);
    };

    PIXI.Graphics.prototype._generateCachedSprite = function () {
        var bounds = this.getBounds();

        if (!this._cachedSprite) {
            var canvasBuffer = new PIXI.CanvasBuffer(bounds.width, bounds.height);
            var texture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);

            this._cachedSprite = new PIXI.Sprite(texture);
            this._cachedSprite.buffer = canvasBuffer;

            this._cachedSprite.worldTransform = this.worldTransform;
        } else {
            this._cachedSprite.buffer.resize(bounds.width, bounds.height);
        }
        this._cachedSprite.anchor.x = -(bounds.x / bounds.width);
        this._cachedSprite.anchor.y = -(bounds.y / bounds.height);
        this._cachedSprite.buffer.context.translate(-bounds.x, -bounds.y);

        PIXI.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context);
    };

    PIXI.Graphics.prototype.destroyCachedSprite = function () {
        this._cachedSprite.texture.destroy(true);
        this._cachedSprite = null;
    };
    PIXI.Graphics.POLY = 0;
    PIXI.Graphics.RECT = 1;
    PIXI.Graphics.CIRC = 2;
    PIXI.Graphics.ELIP = 3;

    PIXI.Strip = function (texture, width, height) {
        PIXI.DisplayObjectContainer.call(this);
        this.texture = texture;
        this.blendMode = PIXI.blendModes.NORMAL;

        try {
            this.uvs = new Float32Array([0, 1,
                1, 1,
                1, 0, 0, 1]);

            this.verticies = new Float32Array([0, 0,
                          0, 0,
                          0, 0, 0,
                          0, 0]);

            this.colors = new Float32Array([1, 1, 1, 1]);

            this.indices = new Uint16Array([0, 1, 2, 3]);
        } catch (error) {
            this.uvs = [0, 1,
                1, 1,
                1, 0, 0, 1];

            this.verticies = [0, 0,
                          0, 0,
                          0, 0, 0,
                          0, 0];

            this.colors = [1, 1, 1, 1];

            this.indices = [0, 1, 2, 3];
        }
        this.width = width;
        this.height = height;
        if (texture.baseTexture.hasLoaded) {
            this.width = this.texture.frame.width;
            this.height = this.texture.frame.height;
            this.updateFrame = true;
        } else {
            this.onTextureUpdateBind = this.onTextureUpdate.bind(this);
            this.texture.addEventListener('update', this.onTextureUpdateBind);
        }

        this.renderable = true;
    };
    PIXI.Strip.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    PIXI.Strip.prototype.constructor = PIXI.Strip;

    PIXI.Strip.prototype.setTexture = function (texture) {
        this.texture = texture;
        this.width = texture.frame.width;
        this.height = texture.frame.height;
        this.updateFrame = true;
    };

    PIXI.Strip.prototype.onTextureUpdate = function () {
        this.updateFrame = true;
    };

    PIXI.Rope = function (texture, points) {
        PIXI.Strip.call(this, texture);
        this.points = points;

        try {
            this.verticies = new Float32Array(points.length * 4);
            this.uvs = new Float32Array(points.length * 4);
            this.colors = new Float32Array(points.length * 2);
            this.indices = new Uint16Array(points.length * 2);
        } catch (error) {
            this.verticies = new Array(points.length * 4);
            this.uvs = new Array(points.length * 4);
            this.colors = new Array(points.length * 2);
            this.indices = new Array(points.length * 2);
        }

        this.refresh();
    };
    PIXI.Rope.prototype = Object.create(PIXI.Strip.prototype);
    PIXI.Rope.prototype.constructor = PIXI.Rope;

    PIXI.Rope.prototype.refresh = function () {
        var points = this.points;
        if (points.length < 1) return;

        var uvs = this.uvs;

        var lastPoint = points[0];
        var indices = this.indices;
        var colors = this.colors;

        this.count -= 0.2;


        uvs[0] = 0;
        uvs[1] = 1;
        uvs[2] = 0;
        uvs[3] = 1;

        colors[0] = 1;
        colors[1] = 1;

        indices[0] = 0;
        indices[1] = 1;

        var total = points.length,
            point, index, amount;

        for (var i = 1; i < total; i++) {

            point = points[i];
            index = i * 4;
            amount = i / (total - 1);

            if (i % 2) {
                uvs[index] = amount;
                uvs[index + 1] = 0;

                uvs[index + 2] = amount;
                uvs[index + 3] = 1;

            } else {
                uvs[index] = amount;
                uvs[index + 1] = 0;

                uvs[index + 2] = amount;
                uvs[index + 3] = 1;
            }

            index = i * 2;
            colors[index] = 1;
            colors[index + 1] = 1;

            index = i * 2;
            indices[index] = index;
            indices[index + 1] = index + 1;

            lastPoint = point;
        }
    };

    PIXI.Rope.prototype.updateTransform = function () {

        var points = this.points;
        if (points.length < 1) return;

        var lastPoint = points[0];
        var nextPoint;
        var perp = {
            x: 0,
            y: 0
        };

        this.count -= 0.2;

        var verticies = this.verticies;
        verticies[0] = lastPoint.x + perp.x;
        verticies[1] = lastPoint.y + perp.y; //+ 200
        verticies[2] = lastPoint.x - perp.x;
        verticies[3] = lastPoint.y - perp.y; //+200

        var total = points.length,
            point, index, ratio, perpLength, num;

        for (var i = 1; i < total; i++) {
            point = points[i];
            index = i * 4;

            if (i < points.length - 1) {
                nextPoint = points[i + 1];
            } else {
                nextPoint = point;
            }

            perp.y = -(nextPoint.x - lastPoint.x);
            perp.x = nextPoint.y - lastPoint.y;

            ratio = (1 - (i / (total - 1))) * 10;

            if (ratio > 1) ratio = 1;

            perpLength = Math.sqrt(perp.x * perp.x + perp.y * perp.y);
            num = this.texture.height / 2; //(20 + Math.abs(Math.sin((i + this.count) * 0.3) * 50) )* ratio;
            perp.x /= perpLength;
            perp.y /= perpLength;

            perp.x *= num;
            perp.y *= num;

            verticies[index] = point.x + perp.x;
            verticies[index + 1] = point.y + perp.y;
            verticies[index + 2] = point.x - perp.x;
            verticies[index + 3] = point.y - perp.y;

            lastPoint = point;
        }

        PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
    };

    PIXI.Rope.prototype.setTexture = function (texture) {
        this.texture = texture;
        this.updateFrame = true;
    };
    PIXI.TilingSprite = function (texture, width, height) {
        PIXI.Sprite.call(this, texture);

        this.width = width || 100;
        this.height = height || 100;
        this.tileScale = new PIXI.Point(1, 1);


        this.tileScaleOffset = new PIXI.Point(1, 1);
        this.tilePosition = new PIXI.Point(0, 0);

        this.renderable = true;

        this.tint = 0xFFFFFF;
        this.blendMode = PIXI.blendModes.NORMAL;
    };
    PIXI.TilingSprite.prototype = Object.create(PIXI.Sprite.prototype);
    PIXI.TilingSprite.prototype.constructor = PIXI.TilingSprite;
    Object.defineProperty(PIXI.TilingSprite.prototype, 'width', {
        get: function () {
            return this._width;
        },
        set: function (value) {

            this._width = value;
        }
    });
    Object.defineProperty(PIXI.TilingSprite.prototype, 'height', {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        }
    });

    PIXI.TilingSprite.prototype.onTextureUpdate = function () {



        this.updateFrame = true;
    };

    PIXI.TilingSprite.prototype._renderWebGL = function (renderSession) {

        if (this.visible === false || this.alpha === 0) return;

        var i, j;

        if (this.mask || this.filters) {
            if (this.mask) {
                renderSession.spriteBatch.stop();
                renderSession.maskManager.pushMask(this.mask, renderSession.projection);
                renderSession.spriteBatch.start();
            }

            if (this.filters) {
                renderSession.spriteBatch.flush();
                renderSession.filterManager.pushFilter(this._filterBlock);
            }

            if (!this.tilingTexture) this.generateTilingTexture(true);
            else renderSession.spriteBatch.renderTilingSprite(this);
            for (i = 0, j = this.children.length; i < j; i++) {
                this.children[i]._renderWebGL(renderSession);
            }

            renderSession.spriteBatch.stop();

            if (this.filters) renderSession.filterManager.popFilter();
            if (this.mask) renderSession.maskManager.popMask(renderSession.projection);

            renderSession.spriteBatch.start();
        } else {
            if (!this.tilingTexture) this.generateTilingTexture(true);
            else renderSession.spriteBatch.renderTilingSprite(this);
            for (i = 0, j = this.children.length; i < j; i++) {
                this.children[i]._renderWebGL(renderSession);
            }
        }
    };


    PIXI.TilingSprite.prototype._renderCanvas = function (renderSession) {
        if (this.visible === false || this.alpha === 0) return;

        var context = renderSession.context;

        context.globalAlpha = this.worldAlpha;


        var transform = this.worldTransform;

        context.setTransform(transform[0], transform[3], transform[1], transform[4], transform[2], transform[5]);


        if (!this.__tilePattern) {
            this.generateTilingTexture(false);

            if (this.tilingTexture) {
                this.__tilePattern = context.createPattern(this.tilingTexture.baseTexture.source, 'repeat');
            }

        }
        if (this.blendMode !== renderSession.currentBlendMode) {
            renderSession.currentBlendMode = this.blendMode;
            context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
        }

        context.beginPath();

        var tilePositionX = this.tilePosition.x % this.tilingTexture.width;
        var tilePositionY = this.tilePosition.y % this.tilingTexture.height;

        var tileScale = this.tileScale;
        context.scale(tileScale.x, tileScale.y);
        context.translate(tilePositionX, tilePositionY);

        context.fillStyle = this.__tilePattern;
        context.fillRect(-tilePositionX, -tilePositionY, this.width / tileScale.x, this.height / tileScale.y);

        context.scale(1 / tileScale.x, 1 / tileScale.y);
        context.translate(-tilePositionX, -tilePositionY);

        context.closePath();
    };

    PIXI.TilingSprite.prototype.getBounds = function () {

        var width = this._width;
        var height = this._height;

        var w0 = width * (1 - this.anchor.x);
        var w1 = width * -this.anchor.x;

        var h0 = height * (1 - this.anchor.y);
        var h1 = height * -this.anchor.y;

        var worldTransform = this.worldTransform;

        var a = worldTransform[0];
        var b = worldTransform[3];
        var c = worldTransform[1];
        var d = worldTransform[4];
        var tx = worldTransform[2];
        var ty = worldTransform[5];

        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;

        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;

        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;

        var x4 = a * w1 + c * h0 + tx;
        var y4 = d * h0 + b * w1 + ty;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var minX = Infinity;
        var minY = Infinity;

        minX = x1 < minX ? x1 : minX;
        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;

        minY = y1 < minY ? y1 : minY;
        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;

        maxX = x1 > maxX ? x1 : maxX;
        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;

        maxY = y1 > maxY ? y1 : maxY;
        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;
        this._currentBounds = bounds;

        return bounds;
    };


    PIXI.TilingSprite.prototype.generateTilingTexture = function (forcePowerOfTwo) {
        var texture = this.texture;

        if (!texture.baseTexture.hasLoaded) return;

        var baseTexture = texture.baseTexture;
        var frame = texture.frame;

        var targetWidth, targetHeight;

        var isFrame = frame.width !== baseTexture.width || frame.height !== baseTexture.height;

        this.tilingTexture = texture;

        var newTextureRequired = false;

        if (!forcePowerOfTwo) {
            if (isFrame) {
                targetWidth = frame.width;
                targetHeight = frame.height;

                newTextureRequired = true;
            }
        } else {
            targetWidth = PIXI.getNextPowerOfTwo(texture.frame.width);
            targetHeight = PIXI.getNextPowerOfTwo(texture.frame.height);

            if (frame.width !== targetWidth && frame.height !== targetHeight) newTextureRequired = true;
        }

        if (newTextureRequired) {
            var canvasBuffer = new PIXI.CanvasBuffer(targetWidth, targetHeight);

            canvasBuffer.context.drawImage(texture.baseTexture.source,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                0,
                0,
                targetWidth,
                targetHeight);

            this.tilingTexture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);

            this.tileScaleOffset.x = frame.width / targetWidth;
            this.tileScaleOffset.y = frame.height / targetHeight;
        }


        this.tilingTexture.baseTexture._powerOf2 = true;
    };

    var spine = {};

    spine.BoneData = function (name, parent) {
        this.name = name;
        this.parent = parent;
    };
    spine.BoneData.prototype = {
        length: 0,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1
    };

    spine.SlotData = function (name, boneData) {
        this.name = name;
        this.boneData = boneData;
    };
    spine.SlotData.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        attachmentName: null
    };

    spine.Bone = function (boneData, parent) {
        this.data = boneData;
        this.parent = parent;
        this.setToSetupPose();
    };
    spine.Bone.yDown = false;
    spine.Bone.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        m00: 0,
        m01: 0,
        worldX: 0, // a b x
        m10: 0,
        m11: 0,
        worldY: 0, // c d y
        worldRotation: 0,
        worldScaleX: 1,
        worldScaleY: 1,
        updateWorldTransform: function (flipX, flipY) {
            var parent = this.parent;
            if (parent != null) {
                this.worldX = this.x * parent.m00 + this.y * parent.m01 + parent.worldX;
                this.worldY = this.x * parent.m10 + this.y * parent.m11 + parent.worldY;
                this.worldScaleX = parent.worldScaleX * this.scaleX;
                this.worldScaleY = parent.worldScaleY * this.scaleY;
                this.worldRotation = parent.worldRotation + this.rotation;
            } else {
                this.worldX = this.x;
                this.worldY = this.y;
                this.worldScaleX = this.scaleX;
                this.worldScaleY = this.scaleY;
                this.worldRotation = this.rotation;
            }
            var radians = this.worldRotation * Math.PI / 180;
            var cos = Math.cos(radians);
            var sin = Math.sin(radians);
            this.m00 = cos * this.worldScaleX;
            this.m10 = sin * this.worldScaleX;
            this.m01 = -sin * this.worldScaleY;
            this.m11 = cos * this.worldScaleY;
            if (flipX) {
                this.m00 = -this.m00;
                this.m01 = -this.m01;
            }
            if (flipY) {
                this.m10 = -this.m10;
                this.m11 = -this.m11;
            }
            if (spine.Bone.yDown) {
                this.m10 = -this.m10;
                this.m11 = -this.m11;
            }
        },
        setToSetupPose: function () {
            var data = this.data;
            this.x = data.x;
            this.y = data.y;
            this.rotation = data.rotation;
            this.scaleX = data.scaleX;
            this.scaleY = data.scaleY;
        }
    };

    spine.Slot = function (slotData, skeleton, bone) {
        this.data = slotData;
        this.skeleton = skeleton;
        this.bone = bone;
        this.setToSetupPose();
    };
    spine.Slot.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        _attachmentTime: 0,
        attachment: null,
        setAttachment: function (attachment) {
            this.attachment = attachment;
            this._attachmentTime = this.skeleton.time;
        },
        setAttachmentTime: function (time) {
            this._attachmentTime = this.skeleton.time - time;
        },
        getAttachmentTime: function () {
            return this.skeleton.time - this._attachmentTime;
        },
        setToSetupPose: function () {
            var data = this.data;
            this.r = data.r;
            this.g = data.g;
            this.b = data.b;
            this.a = data.a;

            var slotDatas = this.skeleton.data.slots;
            for (var i = 0, n = slotDatas.length; i < n; i++) {
                if (slotDatas[i] == data) {
                    this.setAttachment(!data.attachmentName ? null : this.skeleton.getAttachmentBySlotIndex(i, data.attachmentName));
                    break;
                }
            }
        }
    };

    spine.Skin = function (name) {
        this.name = name;
        this.attachments = {};
    };
    spine.Skin.prototype = {
        addAttachment: function (slotIndex, name, attachment) {
            this.attachments[slotIndex + ":" + name] = attachment;
        },
        getAttachment: function (slotIndex, name) {
            return this.attachments[slotIndex + ":" + name];
        },
        _attachAll: function (skeleton, oldSkin) {
            for (var key in oldSkin.attachments) {
                var colon = key.indexOf(":");
                var slotIndex = parseInt(key.substring(0, colon), 10);
                var name = key.substring(colon + 1);
                var slot = skeleton.slots[slotIndex];
                if (slot.attachment && slot.attachment.name == name) {
                    var attachment = this.getAttachment(slotIndex, name);
                    if (attachment) slot.setAttachment(attachment);
                }
            }
        }
    };

    spine.Animation = function (name, timelines, duration) {
        this.name = name;
        this.timelines = timelines;
        this.duration = duration;
    };
    spine.Animation.prototype = {
        apply: function (skeleton, time, loop) {
            if (loop && this.duration) time %= this.duration;
            var timelines = this.timelines;
            for (var i = 0, n = timelines.length; i < n; i++)
                timelines[i].apply(skeleton, time, 1);
        },
        mix: function (skeleton, time, loop, alpha) {
            if (loop && this.duration) time %= this.duration;
            var timelines = this.timelines;
            for (var i = 0, n = timelines.length; i < n; i++)
                timelines[i].apply(skeleton, time, alpha);
        }
    };

    spine.binarySearch = function (values, target, step) {
        var low = 0;
        var high = Math.floor(values.length / step) - 2;
        if (!high) return step;
        var current = high >>> 1;
        while (true) {
            if (values[(current + 1) * step] <= target)
                low = current + 1;
            else
                high = current;
            if (low == high) return (low + 1) * step;
            current = (low + high) >>> 1;
        }
    };
    spine.linearSearch = function (values, target, step) {
        for (var i = 0, last = values.length - step; i <= last; i += step)
            if (values[i] > target) return i;
        return -1;
    };

    spine.Curves = function (frameCount) {
        this.curves = []; // dfx, dfy, ddfx, ddfy, dddfx, dddfy, ...
        this.curves.length = (frameCount - 1) * 6;
    };
    spine.Curves.prototype = {
        setLinear: function (frameIndex) {
            this.curves[frameIndex * 6] = 0 /*LINEAR*/ ;
        },
        setStepped: function (frameIndex) {
            this.curves[frameIndex * 6] = -1 /*STEPPED*/ ;
        },
        setCurve: function (frameIndex, cx1, cy1, cx2, cy2) {
            var subdiv_step = 1 / 10 /*BEZIER_SEGMENTS*/ ;
            var subdiv_step2 = subdiv_step * subdiv_step;
            var subdiv_step3 = subdiv_step2 * subdiv_step;
            var pre1 = 3 * subdiv_step;
            var pre2 = 3 * subdiv_step2;
            var pre4 = 6 * subdiv_step2;
            var pre5 = 6 * subdiv_step3;
            var tmp1x = -cx1 * 2 + cx2;
            var tmp1y = -cy1 * 2 + cy2;
            var tmp2x = (cx1 - cx2) * 3 + 1;
            var tmp2y = (cy1 - cy2) * 3 + 1;
            var i = frameIndex * 6;
            var curves = this.curves;
            curves[i] = cx1 * pre1 + tmp1x * pre2 + tmp2x * subdiv_step3;
            curves[i + 1] = cy1 * pre1 + tmp1y * pre2 + tmp2y * subdiv_step3;
            curves[i + 2] = tmp1x * pre4 + tmp2x * pre5;
            curves[i + 3] = tmp1y * pre4 + tmp2y * pre5;
            curves[i + 4] = tmp2x * pre5;
            curves[i + 5] = tmp2y * pre5;
        },
        getCurvePercent: function (frameIndex, percent) {
            percent = percent < 0 ? 0 : (percent > 1 ? 1 : percent);
            var curveIndex = frameIndex * 6;
            var curves = this.curves;
            var dfx = curves[curveIndex];
            if (!dfx /*LINEAR*/ ) return percent;
            if (dfx == -1 /*STEPPED*/ ) return 0;
            var dfy = curves[curveIndex + 1];
            var ddfx = curves[curveIndex + 2];
            var ddfy = curves[curveIndex + 3];
            var dddfx = curves[curveIndex + 4];
            var dddfy = curves[curveIndex + 5];
            var x = dfx,
                y = dfy;
            var i = 10 /*BEZIER_SEGMENTS*/ - 2;
            while (true) {
                if (x >= percent) {
                    var lastX = x - dfx;
                    var lastY = y - dfy;
                    return lastY + (y - lastY) * (percent - lastX) / (x - lastX);
                }
                if (!i) break;
                i--;
                dfx += ddfx;
                dfy += ddfy;
                ddfx += dddfx;
                ddfy += dddfy;
                x += dfx;
                y += dfy;
            }
            return y + (1 - y) * (percent - x) / (1 - x); // Last point is 1,1.
        }
    };

    spine.RotateTimeline = function (frameCount) {
        this.curves = new spine.Curves(frameCount);
        this.frames = []; // time, angle, ...
        this.frames.length = frameCount * 2;
    };
    spine.RotateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 2;
        },
        setFrame: function (frameIndex, time, angle) {
            frameIndex *= 2;
            this.frames[frameIndex] = time;
            this.frames[frameIndex + 1] = angle;
        },
        apply: function (skeleton, time, alpha) {
            var frames = this.frames,
                amount;

            if (time < frames[0]) return; // Time is before first frame.

            var bone = skeleton.bones[this.boneIndex];

            if (time >= frames[frames.length - 2]) { // Time is after last frame.
                amount = bone.data.rotation + frames[frames.length - 1] - bone.rotation;
                while (amount > 180)
                    amount -= 360;
                while (amount < -180)
                    amount += 360;
                bone.rotation += amount * alpha;
                return;
            }
            var frameIndex = spine.binarySearch(frames, time, 2);
            var lastFrameValue = frames[frameIndex - 1];
            var frameTime = frames[frameIndex];
            var percent = 1 - (time - frameTime) / (frames[frameIndex - 2 /*LAST_FRAME_TIME*/ ] - frameTime);
            percent = this.curves.getCurvePercent(frameIndex / 2 - 1, percent);

            amount = frames[frameIndex + 1 /*FRAME_VALUE*/ ] - lastFrameValue;
            while (amount > 180)
                amount -= 360;
            while (amount < -180)
                amount += 360;
            amount = bone.data.rotation + (lastFrameValue + amount * percent) - bone.rotation;
            while (amount > 180)
                amount -= 360;
            while (amount < -180)
                amount += 360;
            bone.rotation += amount * alpha;
        }
    };

    spine.TranslateTimeline = function (frameCount) {
        this.curves = new spine.Curves(frameCount);
        this.frames = []; // time, x, y, ...
        this.frames.length = frameCount * 3;
    };
    spine.TranslateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 3;
        },
        setFrame: function (frameIndex, time, x, y) {
            frameIndex *= 3;
            this.frames[frameIndex] = time;
            this.frames[frameIndex + 1] = x;
            this.frames[frameIndex + 2] = y;
        },
        apply: function (skeleton, time, alpha) {
            var frames = this.frames;
            if (time < frames[0]) return; // Time is before first frame.

            var bone = skeleton.bones[this.boneIndex];

            if (time >= frames[frames.length - 3]) { // Time is after last frame.
                bone.x += (bone.data.x + frames[frames.length - 2] - bone.x) * alpha;
                bone.y += (bone.data.y + frames[frames.length - 1] - bone.y) * alpha;
                return;
            }
            var frameIndex = spine.binarySearch(frames, time, 3);
            var lastFrameX = frames[frameIndex - 2];
            var lastFrameY = frames[frameIndex - 1];
            var frameTime = frames[frameIndex];
            var percent = 1 - (time - frameTime) / (frames[frameIndex + -3 /*LAST_FRAME_TIME*/ ] - frameTime);
            percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);

            bone.x += (bone.data.x + lastFrameX + (frames[frameIndex + 1 /*FRAME_X*/ ] - lastFrameX) * percent - bone.x) * alpha;
            bone.y += (bone.data.y + lastFrameY + (frames[frameIndex + 2 /*FRAME_Y*/ ] - lastFrameY) * percent - bone.y) * alpha;
        }
    };

    spine.ScaleTimeline = function (frameCount) {
        this.curves = new spine.Curves(frameCount);
        this.frames = []; // time, x, y, ...
        this.frames.length = frameCount * 3;
    };
    spine.ScaleTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 3;
        },
        setFrame: function (frameIndex, time, x, y) {
            frameIndex *= 3;
            this.frames[frameIndex] = time;
            this.frames[frameIndex + 1] = x;
            this.frames[frameIndex + 2] = y;
        },
        apply: function (skeleton, time, alpha) {
            var frames = this.frames;
            if (time < frames[0]) return; // Time is before first frame.

            var bone = skeleton.bones[this.boneIndex];

            if (time >= frames[frames.length - 3]) { // Time is after last frame.
                bone.scaleX += (bone.data.scaleX - 1 + frames[frames.length - 2] - bone.scaleX) * alpha;
                bone.scaleY += (bone.data.scaleY - 1 + frames[frames.length - 1] - bone.scaleY) * alpha;
                return;
            }
            var frameIndex = spine.binarySearch(frames, time, 3);
            var lastFrameX = frames[frameIndex - 2];
            var lastFrameY = frames[frameIndex - 1];
            var frameTime = frames[frameIndex];
            var percent = 1 - (time - frameTime) / (frames[frameIndex + -3 /*LAST_FRAME_TIME*/ ] - frameTime);
            percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);

            bone.scaleX += (bone.data.scaleX - 1 + lastFrameX + (frames[frameIndex + 1 /*FRAME_X*/ ] - lastFrameX) * percent - bone.scaleX) * alpha;
            bone.scaleY += (bone.data.scaleY - 1 + lastFrameY + (frames[frameIndex + 2 /*FRAME_Y*/ ] - lastFrameY) * percent - bone.scaleY) * alpha;
        }
    };

    spine.ColorTimeline = function (frameCount) {
        this.curves = new spine.Curves(frameCount);
        this.frames = []; // time, r, g, b, a, ...
        this.frames.length = frameCount * 5;
    };
    spine.ColorTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 2;
        },
        setFrame: function (frameIndex, time, x, y) {
            frameIndex *= 5;
            this.frames[frameIndex] = time;
            this.frames[frameIndex + 1] = r;
            this.frames[frameIndex + 2] = g;
            this.frames[frameIndex + 3] = b;
            this.frames[frameIndex + 4] = a;
        },
        apply: function (skeleton, time, alpha) {
            var frames = this.frames;
            if (time < frames[0]) return; // Time is before first frame.

            var slot = skeleton.slots[this.slotIndex];

            if (time >= frames[frames.length - 5]) { // Time is after last frame.
                var i = frames.length - 1;
                slot.r = frames[i - 3];
                slot.g = frames[i - 2];
                slot.b = frames[i - 1];
                slot.a = frames[i];
                return;
            }
            var frameIndex = spine.binarySearch(frames, time, 5);
            var lastFrameR = frames[frameIndex - 4];
            var lastFrameG = frames[frameIndex - 3];
            var lastFrameB = frames[frameIndex - 2];
            var lastFrameA = frames[frameIndex - 1];
            var frameTime = frames[frameIndex];
            var percent = 1 - (time - frameTime) / (frames[frameIndex - 5 /*LAST_FRAME_TIME*/ ] - frameTime);
            percent = this.curves.getCurvePercent(frameIndex / 5 - 1, percent);

            var r = lastFrameR + (frames[frameIndex + 1 /*FRAME_R*/ ] - lastFrameR) * percent;
            var g = lastFrameG + (frames[frameIndex + 2 /*FRAME_G*/ ] - lastFrameG) * percent;
            var b = lastFrameB + (frames[frameIndex + 3 /*FRAME_B*/ ] - lastFrameB) * percent;
            var a = lastFrameA + (frames[frameIndex + 4 /*FRAME_A*/ ] - lastFrameA) * percent;
            if (alpha < 1) {
                slot.r += (r - slot.r) * alpha;
                slot.g += (g - slot.g) * alpha;
                slot.b += (b - slot.b) * alpha;
                slot.a += (a - slot.a) * alpha;
            } else {
                slot.r = r;
                slot.g = g;
                slot.b = b;
                slot.a = a;
            }
        }
    };

    spine.AttachmentTimeline = function (frameCount) {
        this.curves = new spine.Curves(frameCount);
        this.frames = []; // time, ...
        this.frames.length = frameCount;
        this.attachmentNames = []; // time, ...
        this.attachmentNames.length = frameCount;
    };
    spine.AttachmentTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function () {
            return this.frames.length;
        },
        setFrame: function (frameIndex, time, attachmentName) {
            this.frames[frameIndex] = time;
            this.attachmentNames[frameIndex] = attachmentName;
        },
        apply: function (skeleton, time, alpha) {
            var frames = this.frames;
            if (time < frames[0]) return; // Time is before first frame.

            var frameIndex;
            if (time >= frames[frames.length - 1]) // Time is after last frame.
                frameIndex = frames.length - 1;
            else
                frameIndex = spine.binarySearch(frames, time, 1) - 1;

            var attachmentName = this.attachmentNames[frameIndex];
            skeleton.slots[this.slotIndex].setAttachment(!attachmentName ? null : skeleton.getAttachmentBySlotIndex(this.slotIndex, attachmentName));
        }
    };

    spine.SkeletonData = function () {
        this.bones = [];
        this.slots = [];
        this.skins = [];
        this.animations = [];
    };
    spine.SkeletonData.prototype = {
        defaultSkin: null,
        findBone: function (boneName) {
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                if (bones[i].name == boneName) return bones[i];
            return null;
        },
        findBoneIndex: function (boneName) {
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                if (bones[i].name == boneName) return i;
            return -1;
        },
        findSlot: function (slotName) {
            var slots = this.slots;
            for (var i = 0, n = slots.length; i < n; i++) {
                if (slots[i].name == slotName) return slot[i];
            }
            return null;
        },
        findSlotIndex: function (slotName) {
            var slots = this.slots;
            for (var i = 0, n = slots.length; i < n; i++)
                if (slots[i].name == slotName) return i;
            return -1;
        },
        findSkin: function (skinName) {
            var skins = this.skins;
            for (var i = 0, n = skins.length; i < n; i++)
                if (skins[i].name == skinName) return skins[i];
            return null;
        },
        findAnimation: function (animationName) {
            var animations = this.animations;
            for (var i = 0, n = animations.length; i < n; i++)
                if (animations[i].name == animationName) return animations[i];
            return null;
        }
    };

    spine.Skeleton = function (skeletonData) {
        this.data = skeletonData;

        this.bones = [];
        for (var i = 0, n = skeletonData.bones.length; i < n; i++) {
            var boneData = skeletonData.bones[i];
            var parent = !boneData.parent ? null : this.bones[skeletonData.bones.indexOf(boneData.parent)];
            this.bones.push(new spine.Bone(boneData, parent));
        }

        this.slots = [];
        this.drawOrder = [];
        for (i = 0, n = skeletonData.slots.length; i < n; i++) {
            var slotData = skeletonData.slots[i];
            var bone = this.bones[skeletonData.bones.indexOf(slotData.boneData)];
            var slot = new spine.Slot(slotData, this, bone);
            this.slots.push(slot);
            this.drawOrder.push(slot);
        }
    };
    spine.Skeleton.prototype = {
        x: 0,
        y: 0,
        skin: null,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        time: 0,
        flipX: false,
        flipY: false,
        updateWorldTransform: function () {
            var flipX = this.flipX;
            var flipY = this.flipY;
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                bones[i].updateWorldTransform(flipX, flipY);
        },
        setToSetupPose: function () {
            this.setBonesToSetupPose();
            this.setSlotsToSetupPose();
        },
        setBonesToSetupPose: function () {
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                bones[i].setToSetupPose();
        },
        setSlotsToSetupPose: function () {
            var slots = this.slots;
            for (var i = 0, n = slots.length; i < n; i++)
                slots[i].setToSetupPose(i);
        },
        getRootBone: function () {
            return this.bones.length ? this.bones[0] : null;
        },
        findBone: function (boneName) {
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                if (bones[i].data.name == boneName) return bones[i];
            return null;
        },
        findBoneIndex: function (boneName) {
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                if (bones[i].data.name == boneName) return i;
            return -1;
        },
        findSlot: function (slotName) {
            var slots = this.slots;
            for (var i = 0, n = slots.length; i < n; i++)
                if (slots[i].data.name == slotName) return slots[i];
            return null;
        },
        findSlotIndex: function (slotName) {
            var slots = this.slots;
            for (var i = 0, n = slots.length; i < n; i++)
                if (slots[i].data.name == slotName) return i;
            return -1;
        },
        setSkinByName: function (skinName) {
            var skin = this.data.findSkin(skinName);
            if (!skin) throw "Skin not found: " + skinName;
            this.setSkin(skin);
        },
        setSkin: function (newSkin) {
            if (this.skin && newSkin) newSkin._attachAll(this, this.skin);
            this.skin = newSkin;
        },
        getAttachmentBySlotName: function (slotName, attachmentName) {
            return this.getAttachmentBySlotIndex(this.data.findSlotIndex(slotName), attachmentName);
        },
        getAttachmentBySlotIndex: function (slotIndex, attachmentName) {
            if (this.skin) {
                var attachment = this.skin.getAttachment(slotIndex, attachmentName);
                if (attachment) return attachment;
            }
            if (this.data.defaultSkin) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
            return null;
        },
        setAttachment: function (slotName, attachmentName) {
            var slots = this.slots;
            for (var i = 0, n = slots.size; i < n; i++) {
                var slot = slots[i];
                if (slot.data.name == slotName) {
                    var attachment = null;
                    if (attachmentName) {
                        attachment = this.getAttachment(i, attachmentName);
                        if (attachment == null) throw "Attachment not found: " + attachmentName + ", for slot: " + slotName;
                    }
                    slot.setAttachment(attachment);
                    return;
                }
            }
            throw "Slot not found: " + slotName;
        },
        update: function (delta) {
            time += delta;
        }
    };

    spine.AttachmentType = {
        region: 0
    };

    spine.RegionAttachment = function () {
        this.offset = [];
        this.offset.length = 8;
        this.uvs = [];
        this.uvs.length = 8;
    };
    spine.RegionAttachment.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        width: 0,
        height: 0,
        rendererObject: null,
        regionOffsetX: 0,
        regionOffsetY: 0,
        regionWidth: 0,
        regionHeight: 0,
        regionOriginalWidth: 0,
        regionOriginalHeight: 0,
        setUVs: function (u, v, u2, v2, rotate) {
            var uvs = this.uvs;
            if (rotate) {
                uvs[2 /*X2*/ ] = u;
                uvs[3 /*Y2*/ ] = v2;
                uvs[4 /*X3*/ ] = u;
                uvs[5 /*Y3*/ ] = v;
                uvs[6 /*X4*/ ] = u2;
                uvs[7 /*Y4*/ ] = v;
                uvs[0 /*X1*/ ] = u2;
                uvs[1 /*Y1*/ ] = v2;
            } else {
                uvs[0 /*X1*/ ] = u;
                uvs[1 /*Y1*/ ] = v2;
                uvs[2 /*X2*/ ] = u;
                uvs[3 /*Y2*/ ] = v;
                uvs[4 /*X3*/ ] = u2;
                uvs[5 /*Y3*/ ] = v;
                uvs[6 /*X4*/ ] = u2;
                uvs[7 /*Y4*/ ] = v2;
            }
        },
        updateOffset: function () {
            var regionScaleX = this.width / this.regionOriginalWidth * this.scaleX;
            var regionScaleY = this.height / this.regionOriginalHeight * this.scaleY;
            var localX = -this.width / 2 * this.scaleX + this.regionOffsetX * regionScaleX;
            var localY = -this.height / 2 * this.scaleY + this.regionOffsetY * regionScaleY;
            var localX2 = localX + this.regionWidth * regionScaleX;
            var localY2 = localY + this.regionHeight * regionScaleY;
            var radians = this.rotation * Math.PI / 180;
            var cos = Math.cos(radians);
            var sin = Math.sin(radians);
            var localXCos = localX * cos + this.x;
            var localXSin = localX * sin;
            var localYCos = localY * cos + this.y;
            var localYSin = localY * sin;
            var localX2Cos = localX2 * cos + this.x;
            var localX2Sin = localX2 * sin;
            var localY2Cos = localY2 * cos + this.y;
            var localY2Sin = localY2 * sin;
            var offset = this.offset;
            offset[0 /*X1*/ ] = localXCos - localYSin;
            offset[1 /*Y1*/ ] = localYCos + localXSin;
            offset[2 /*X2*/ ] = localXCos - localY2Sin;
            offset[3 /*Y2*/ ] = localY2Cos + localXSin;
            offset[4 /*X3*/ ] = localX2Cos - localY2Sin;
            offset[5 /*Y3*/ ] = localY2Cos + localX2Sin;
            offset[6 /*X4*/ ] = localX2Cos - localYSin;
            offset[7 /*Y4*/ ] = localYCos + localX2Sin;
        },
        computeVertices: function (x, y, bone, vertices) {
            x += bone.worldX;
            y += bone.worldY;
            var m00 = bone.m00;
            var m01 = bone.m01;
            var m10 = bone.m10;
            var m11 = bone.m11;
            var offset = this.offset;
            vertices[0 /*X1*/ ] = offset[0 /*X1*/ ] * m00 + offset[1 /*Y1*/ ] * m01 + x;
            vertices[1 /*Y1*/ ] = offset[0 /*X1*/ ] * m10 + offset[1 /*Y1*/ ] * m11 + y;
            vertices[2 /*X2*/ ] = offset[2 /*X2*/ ] * m00 + offset[3 /*Y2*/ ] * m01 + x;
            vertices[3 /*Y2*/ ] = offset[2 /*X2*/ ] * m10 + offset[3 /*Y2*/ ] * m11 + y;
            vertices[4 /*X3*/ ] = offset[4 /*X3*/ ] * m00 + offset[5 /*X3*/ ] * m01 + x;
            vertices[5 /*X3*/ ] = offset[4 /*X3*/ ] * m10 + offset[5 /*X3*/ ] * m11 + y;
            vertices[6 /*X4*/ ] = offset[6 /*X4*/ ] * m00 + offset[7 /*Y4*/ ] * m01 + x;
            vertices[7 /*Y4*/ ] = offset[6 /*X4*/ ] * m10 + offset[7 /*Y4*/ ] * m11 + y;
        }
    }

    spine.AnimationStateData = function (skeletonData) {
        this.skeletonData = skeletonData;
        this.animationToMixTime = {};
    };
    spine.AnimationStateData.prototype = {
        defaultMix: 0,
        setMixByName: function (fromName, toName, duration) {
            var from = this.skeletonData.findAnimation(fromName);
            if (!from) throw "Animation not found: " + fromName;
            var to = this.skeletonData.findAnimation(toName);
            if (!to) throw "Animation not found: " + toName;
            this.setMix(from, to, duration);
        },
        setMix: function (from, to, duration) {
            this.animationToMixTime[from.name + ":" + to.name] = duration;
        },
        getMix: function (from, to) {
            var time = this.animationToMixTime[from.name + ":" + to.name];
            return time ? time : this.defaultMix;
        }
    };

    spine.AnimationState = function (stateData) {
        this.data = stateData;
        this.queue = [];
    };
    spine.AnimationState.prototype = {
        current: null,
        previous: null,
        currentTime: 0,
        previousTime: 0,
        currentLoop: false,
        previousLoop: false,
        mixTime: 0,
        mixDuration: 0,
        update: function (delta) {
            this.currentTime += delta;
            this.previousTime += delta;
            this.mixTime += delta;

            if (this.queue.length > 0) {
                var entry = this.queue[0];
                if (this.currentTime >= entry.delay) {
                    this._setAnimation(entry.animation, entry.loop);
                    this.queue.shift();
                }
            }
        },
        apply: function (skeleton) {
            if (!this.current) return;
            if (this.previous) {
                this.previous.apply(skeleton, this.previousTime, this.previousLoop);
                var alpha = this.mixTime / this.mixDuration;
                if (alpha >= 1) {
                    alpha = 1;
                    this.previous = null;
                }
                this.current.mix(skeleton, this.currentTime, this.currentLoop, alpha);
            } else
                this.current.apply(skeleton, this.currentTime, this.currentLoop);
        },
        clearAnimation: function () {
            this.previous = null;
            this.current = null;
            this.queue.length = 0;
        },
        _setAnimation: function (animation, loop) {
            this.previous = null;
            if (animation && this.current) {
                this.mixDuration = this.data.getMix(this.current, animation);
                if (this.mixDuration > 0) {
                    this.mixTime = 0;
                    this.previous = this.current;
                    this.previousTime = this.currentTime;
                    this.previousLoop = this.currentLoop;
                }
            }
            this.current = animation;
            this.currentLoop = loop;
            this.currentTime = 0;
        },
        setAnimationByName: function (animationName, loop) {
            var animation = this.data.skeletonData.findAnimation(animationName);
            if (!animation) throw "Animation not found: " + animationName;
            this.setAnimation(animation, loop);
        },
        setAnimation: function (animation, loop) {
            this.queue.length = 0;
            this._setAnimation(animation, loop);
        },
        addAnimationByName: function (animationName, loop, delay) {
            var animation = this.data.skeletonData.findAnimation(animationName);
            if (!animation) throw "Animation not found: " + animationName;
            this.addAnimation(animation, loop, delay);
        },
        addAnimation: function (animation, loop, delay) {
            var entry = {};
            entry.animation = animation;
            entry.loop = loop;

            if (!delay || delay <= 0) {
                var previousAnimation = this.queue.length ? this.queue[this.queue.length - 1].animation : this.current;
                if (previousAnimation != null)
                    delay = previousAnimation.duration - this.data.getMix(previousAnimation, animation) + (delay || 0);
                else
                    delay = 0;
            }
            entry.delay = delay;

            this.queue.push(entry);
        },
        isComplete: function () {
            return !this.current || this.currentTime >= this.current.duration;
        }
    };

    spine.SkeletonJson = function (attachmentLoader) {
        this.attachmentLoader = attachmentLoader;
    };
    spine.SkeletonJson.prototype = {
        scale: 1,
        readSkeletonData: function (root) {
            var skeletonData = new spine.SkeletonData(),
                boneData;
            var bones = root["bones"];
            for (var i = 0, n = bones.length; i < n; i++) {
                var boneMap = bones[i];
                var parent = null;
                if (boneMap["parent"]) {
                    parent = skeletonData.findBone(boneMap["parent"]);
                    if (!parent) throw "Parent bone not found: " + boneMap["parent"];
                }
                boneData = new spine.BoneData(boneMap["name"], parent);
                boneData.length = (boneMap["length"] || 0) * this.scale;
                boneData.x = (boneMap["x"] || 0) * this.scale;
                boneData.y = (boneMap["y"] || 0) * this.scale;
                boneData.rotation = (boneMap["rotation"] || 0);
                boneData.scaleX = boneMap["scaleX"] || 1;
                boneData.scaleY = boneMap["scaleY"] || 1;
                skeletonData.bones.push(boneData);
            }
            var slots = root["slots"];
            for (i = 0, n = slots.length; i < n; i++) {
                var slotMap = slots[i];
                boneData = skeletonData.findBone(slotMap["bone"]);
                if (!boneData) throw "Slot bone not found: " + slotMap["bone"];
                var slotData = new spine.SlotData(slotMap["name"], boneData);

                var color = slotMap["color"];
                if (color) {
                    slotData.r = spine.SkeletonJson.toColor(color, 0);
                    slotData.g = spine.SkeletonJson.toColor(color, 1);
                    slotData.b = spine.SkeletonJson.toColor(color, 2);
                    slotData.a = spine.SkeletonJson.toColor(color, 3);
                }

                slotData.attachmentName = slotMap["attachment"];

                skeletonData.slots.push(slotData);
            }
            var skins = root["skins"];
            for (var skinName in skins) {
                if (!skins.hasOwnProperty(skinName)) continue;
                var skinMap = skins[skinName];
                var skin = new spine.Skin(skinName);
                for (var slotName in skinMap) {
                    if (!skinMap.hasOwnProperty(slotName)) continue;
                    var slotIndex = skeletonData.findSlotIndex(slotName);
                    var slotEntry = skinMap[slotName];
                    for (var attachmentName in slotEntry) {
                        if (!slotEntry.hasOwnProperty(attachmentName)) continue;
                        var attachment = this.readAttachment(skin, attachmentName, slotEntry[attachmentName]);
                        if (attachment != null) skin.addAttachment(slotIndex, attachmentName, attachment);
                    }
                }
                skeletonData.skins.push(skin);
                if (skin.name == "default") skeletonData.defaultSkin = skin;
            }
            var animations = root["animations"];
            for (var animationName in animations) {
                if (!animations.hasOwnProperty(animationName)) continue;
                this.readAnimation(animationName, animations[animationName], skeletonData);
            }

            return skeletonData;
        },
        readAttachment: function (skin, name, map) {
            name = map["name"] || name;

            var type = spine.AttachmentType[map["type"] || "region"];

            if (type == spine.AttachmentType.region) {
                var attachment = new spine.RegionAttachment();
                attachment.x = (map["x"] || 0) * this.scale;
                attachment.y = (map["y"] || 0) * this.scale;
                attachment.scaleX = map["scaleX"] || 1;
                attachment.scaleY = map["scaleY"] || 1;
                attachment.rotation = map["rotation"] || 0;
                attachment.width = (map["width"] || 32) * this.scale;
                attachment.height = (map["height"] || 32) * this.scale;
                attachment.updateOffset();

                attachment.rendererObject = {};
                attachment.rendererObject.name = name;
                attachment.rendererObject.scale = {};
                attachment.rendererObject.scale.x = attachment.scaleX;
                attachment.rendererObject.scale.y = attachment.scaleY;
                attachment.rendererObject.rotation = -attachment.rotation * Math.PI / 180;
                return attachment;
            }

            throw "Unknown attachment type: " + type;
        },

        readAnimation: function (name, map, skeletonData) {
            var timelines = [];
            var duration = 0;
            var frameIndex, timeline, timelineName, valueMap, values,
                i, n;

            var bones = map["bones"];
            for (var boneName in bones) {
                if (!bones.hasOwnProperty(boneName)) continue;
                var boneIndex = skeletonData.findBoneIndex(boneName);
                if (boneIndex == -1) throw "Bone not found: " + boneName;
                var boneMap = bones[boneName];

                for (timelineName in boneMap) {
                    if (!boneMap.hasOwnProperty(timelineName)) continue;
                    values = boneMap[timelineName];
                    if (timelineName == "rotate") {
                        timeline = new spine.RotateTimeline(values.length);
                        timeline.boneIndex = boneIndex;

                        frameIndex = 0;
                        for (i = 0, n = values.length; i < n; i++) {
                            valueMap = values[i];
                            timeline.setFrame(frameIndex, valueMap["time"], valueMap["angle"]);
                            spine.SkeletonJson.readCurve(timeline, frameIndex, valueMap);
                            frameIndex++;
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 2 - 2]);

                    } else if (timelineName == "translate" || timelineName == "scale") {
                        var timelineScale = 1;
                        if (timelineName == "scale")
                            timeline = new spine.ScaleTimeline(values.length);
                        else {
                            timeline = new spine.TranslateTimeline(values.length);
                            timelineScale = this.scale;
                        }
                        timeline.boneIndex = boneIndex;

                        frameIndex = 0;
                        for (i = 0, n = values.length; i < n; i++) {
                            valueMap = values[i];
                            var x = (valueMap["x"] || 0) * timelineScale;
                            var y = (valueMap["y"] || 0) * timelineScale;
                            timeline.setFrame(frameIndex, valueMap["time"], x, y);
                            spine.SkeletonJson.readCurve(timeline, frameIndex, valueMap);
                            frameIndex++;
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 3 - 3]);

                    } else
                        throw "Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")";
                }
            }
            var slots = map["slots"];
            for (var slotName in slots) {
                if (!slots.hasOwnProperty(slotName)) continue;
                var slotMap = slots[slotName];
                var slotIndex = skeletonData.findSlotIndex(slotName);

                for (timelineName in slotMap) {
                    if (!slotMap.hasOwnProperty(timelineName)) continue;
                    values = slotMap[timelineName];
                    if (timelineName == "color") {
                        timeline = new spine.ColorTimeline(values.length);
                        timeline.slotIndex = slotIndex;

                        frameIndex = 0;
                        for (i = 0, n = values.length; i < n; i++) {
                            valueMap = values[i];
                            var color = valueMap["color"];
                            var r = spine.SkeletonJson.toColor(color, 0);
                            var g = spine.SkeletonJson.toColor(color, 1);
                            var b = spine.SkeletonJson.toColor(color, 2);
                            var a = spine.SkeletonJson.toColor(color, 3);
                            timeline.setFrame(frameIndex, valueMap["time"], r, g, b, a);
                            spine.SkeletonJson.readCurve(timeline, frameIndex, valueMap);
                            frameIndex++;
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 5 - 5]);

                    } else if (timelineName == "attachment") {
                        timeline = new spine.AttachmentTimeline(values.length);
                        timeline.slotIndex = slotIndex;

                        frameIndex = 0;
                        for (i = 0, n = values.length; i < n; i++) {
                            valueMap = values[i];
                            timeline.setFrame(frameIndex++, valueMap["time"], valueMap["name"]);
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);

                    } else
                        throw "Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")";
                }
            }
            skeletonData.animations.push(new spine.Animation(name, timelines, duration));
        }
    };
    spine.SkeletonJson.readCurve = function (timeline, frameIndex, valueMap) {
        var curve = valueMap["curve"];
        if (!curve) return;
        if (curve == "stepped")
            timeline.curves.setStepped(frameIndex);
        else if (curve instanceof Array)
            timeline.curves.setCurve(frameIndex, curve[0], curve[1], curve[2], curve[3]);
    };
    spine.SkeletonJson.toColor = function (hexString, colorIndex) {
        if (hexString.length != 8) throw "Color hexidecimal length must be 8, recieved: " + hexString;
        return parseInt(hexString.substring(colorIndex * 2, 2), 16) / 255;
    };

    spine.Atlas = function (atlasText, textureLoader) {
        this.textureLoader = textureLoader;
        this.pages = [];
        this.regions = [];

        var reader = new spine.AtlasReader(atlasText);
        var tuple = [];
        tuple.length = 4;
        var page = null;
        while (true) {
            var line = reader.readLine();
            if (line == null) break;
            line = reader.trim(line);
            if (!line.length)
                page = null;
            else if (!page) {
                page = new spine.AtlasPage();
                page.name = line;

                page.format = spine.Atlas.Format[reader.readValue()];

                reader.readTuple(tuple);
                page.minFilter = spine.Atlas.TextureFilter[tuple[0]];
                page.magFilter = spine.Atlas.TextureFilter[tuple[1]];

                var direction = reader.readValue();
                page.uWrap = spine.Atlas.TextureWrap.clampToEdge;
                page.vWrap = spine.Atlas.TextureWrap.clampToEdge;
                if (direction == "x")
                    page.uWrap = spine.Atlas.TextureWrap.repeat;
                else if (direction == "y")
                    page.vWrap = spine.Atlas.TextureWrap.repeat;
                else if (direction == "xy")
                    page.uWrap = page.vWrap = spine.Atlas.TextureWrap.repeat;

                textureLoader.load(page, line);

                this.pages.push(page);

            } else {
                var region = new spine.AtlasRegion();
                region.name = line;
                region.page = page;

                region.rotate = reader.readValue() == "true";

                reader.readTuple(tuple);
                var x = parseInt(tuple[0], 10);
                var y = parseInt(tuple[1], 10);

                reader.readTuple(tuple);
                var width = parseInt(tuple[0], 10);
                var height = parseInt(tuple[1], 10);

                region.u = x / page.width;
                region.v = y / page.height;
                if (region.rotate) {
                    region.u2 = (x + height) / page.width;
                    region.v2 = (y + width) / page.height;
                } else {
                    region.u2 = (x + width) / page.width;
                    region.v2 = (y + height) / page.height;
                }
                region.x = x;
                region.y = y;
                region.width = Math.abs(width);
                region.height = Math.abs(height);

                if (reader.readTuple(tuple) == 4) { // split is optional
                    region.splits = [parseInt(tuple[0], 10), parseInt(tuple[1], 10), parseInt(tuple[2], 10), parseInt(tuple[3], 10)];

                    if (reader.readTuple(tuple) == 4) { // pad is optional, but only present with splits
                        region.pads = [parseInt(tuple[0], 10), parseInt(tuple[1], 10), parseInt(tuple[2], 10), parseInt(tuple[3], 10)];

                        reader.readTuple(tuple);
                    }
                }

                region.originalWidth = parseInt(tuple[0], 10);
                region.originalHeight = parseInt(tuple[1], 10);

                reader.readTuple(tuple);
                region.offsetX = parseInt(tuple[0], 10);
                region.offsetY = parseInt(tuple[1], 10);

                region.index = parseInt(reader.readValue(), 10);

                this.regions.push(region);
            }
        }
    };
    spine.Atlas.prototype = {
        findRegion: function (name) {
            var regions = this.regions;
            for (var i = 0, n = regions.length; i < n; i++)
                if (regions[i].name == name) return regions[i];
            return null;
        },
        dispose: function () {
            var pages = this.pages;
            for (var i = 0, n = pages.length; i < n; i++)
                this.textureLoader.unload(pages[i].rendererObject);
        },
        updateUVs: function (page) {
            var regions = this.regions;
            for (var i = 0, n = regions.length; i < n; i++) {
                var region = regions[i];
                if (region.page != page) continue;
                region.u = region.x / page.width;
                region.v = region.y / page.height;
                if (region.rotate) {
                    region.u2 = (region.x + region.height) / page.width;
                    region.v2 = (region.y + region.width) / page.height;
                } else {
                    region.u2 = (region.x + region.width) / page.width;
                    region.v2 = (region.y + region.height) / page.height;
                }
            }
        }
    };

    spine.Atlas.Format = {
        alpha: 0,
        intensity: 1,
        luminanceAlpha: 2,
        rgb565: 3,
        rgba4444: 4,
        rgb888: 5,
        rgba8888: 6
    };

    spine.Atlas.TextureFilter = {
        nearest: 0,
        linear: 1,
        mipMap: 2,
        mipMapNearestNearest: 3,
        mipMapLinearNearest: 4,
        mipMapNearestLinear: 5,
        mipMapLinearLinear: 6
    };

    spine.Atlas.TextureWrap = {
        mirroredRepeat: 0,
        clampToEdge: 1,
        repeat: 2
    };

    spine.AtlasPage = function () {};
    spine.AtlasPage.prototype = {
        name: null,
        format: null,
        minFilter: null,
        magFilter: null,
        uWrap: null,
        vWrap: null,
        rendererObject: null,
        width: 0,
        height: 0
    };

    spine.AtlasRegion = function () {};
    spine.AtlasRegion.prototype = {
        page: null,
        name: null,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        u: 0,
        v: 0,
        u2: 0,
        v2: 0,
        offsetX: 0,
        offsetY: 0,
        originalWidth: 0,
        originalHeight: 0,
        index: 0,
        rotate: false,
        splits: null,
        pads: null,
    };

    spine.AtlasReader = function (text) {
        this.lines = text.split(/\r\n|\r|\n/);
    };
    spine.AtlasReader.prototype = {
        index: 0,
        trim: function (value) {
            return value.replace(/^\s+|\s+$/g, "");
        },
        readLine: function () {
            if (this.index >= this.lines.length) return null;
            return this.lines[this.index++];
        },
        readValue: function () {
            var line = this.readLine();
            var colon = line.indexOf(":");
            if (colon == -1) throw "Invalid line: " + line;
            return this.trim(line.substring(colon + 1));
        },
        readTuple: function (tuple) {
            var line = this.readLine();
            var colon = line.indexOf(":");
            if (colon == -1) throw "Invalid line: " + line;
            var i = 0,
                lastMatch = colon + 1;
            for (; i < 3; i++) {
                var comma = line.indexOf(",", lastMatch);
                if (comma == -1) {
                    if (!i) throw "Invalid line: " + line;
                    break;
                }
                tuple[i] = this.trim(line.substr(lastMatch, comma - lastMatch));
                lastMatch = comma + 1;
            }
            tuple[i] = this.trim(line.substring(lastMatch));
            return i + 1;
        }
    }

    spine.AtlasAttachmentLoader = function (atlas) {
        this.atlas = atlas;
    }
    spine.AtlasAttachmentLoader.prototype = {
        newAttachment: function (skin, type, name) {
            switch (type) {
                case spine.AttachmentType.region:
                    var region = this.atlas.findRegion(name);
                    if (!region) throw "Region not found in atlas: " + name + " (" + type + ")";
                    var attachment = new spine.RegionAttachment(name);
                    attachment.rendererObject = region;
                    attachment.setUVs(region.u, region.v, region.u2, region.v2, region.rotate);
                    attachment.regionOffsetX = region.offsetX;
                    attachment.regionOffsetY = region.offsetY;
                    attachment.regionWidth = region.width;
                    attachment.regionHeight = region.height;
                    attachment.regionOriginalWidth = region.originalWidth;
                    attachment.regionOriginalHeight = region.originalHeight;
                    return attachment;
            }
            throw "Unknown attachment type: " + type;
        }
    }

    spine.Bone.yDown = true;
    PIXI.AnimCache = {};
    PIXI.Spine = function (url) {
        PIXI.DisplayObjectContainer.call(this);

        this.spineData = PIXI.AnimCache[url];

        if (!this.spineData) {
            throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + url);
        }

        this.skeleton = new spine.Skeleton(this.spineData);
        this.skeleton.updateWorldTransform();

        this.stateData = new spine.AnimationStateData(this.spineData);
        this.state = new spine.AnimationState(this.stateData);

        this.slotContainers = [];

        for (var i = 0, n = this.skeleton.drawOrder.length; i < n; i++) {
            var slot = this.skeleton.drawOrder[i];
            var attachment = slot.attachment;
            var slotContainer = new PIXI.DisplayObjectContainer();
            this.slotContainers.push(slotContainer);
            this.addChild(slotContainer);
            if (!(attachment instanceof spine.RegionAttachment)) {
                continue;
            }
            var spriteName = attachment.rendererObject.name;
            var sprite = this.createSprite(slot, attachment.rendererObject);
            slot.currentSprite = sprite;
            slot.currentSpriteName = spriteName;
            slotContainer.addChild(sprite);
        }
    };

    PIXI.Spine.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    PIXI.Spine.prototype.constructor = PIXI.Spine;
    PIXI.Spine.prototype.updateTransform = function () {
        this.lastTime = this.lastTime || Date.now();
        var timeDelta = (Date.now() - this.lastTime) * 0.001;
        this.lastTime = Date.now();
        this.state.update(timeDelta);
        this.state.apply(this.skeleton);
        this.skeleton.updateWorldTransform();

        var drawOrder = this.skeleton.drawOrder;
        for (var i = 0, n = drawOrder.length; i < n; i++) {
            var slot = drawOrder[i];
            var attachment = slot.attachment;
            var slotContainer = this.slotContainers[i];
            if (!(attachment instanceof spine.RegionAttachment)) {
                slotContainer.visible = false;
                continue;
            }

            if (attachment.rendererObject) {
                if (!slot.currentSpriteName || slot.currentSpriteName != attachment.name) {
                    var spriteName = attachment.rendererObject.name;
                    if (slot.currentSprite !== undefined) {
                        slot.currentSprite.visible = false;
                    }
                    slot.sprites = slot.sprites || {};
                    if (slot.sprites[spriteName] !== undefined) {
                        slot.sprites[spriteName].visible = true;
                    } else {
                        var sprite = this.createSprite(slot, attachment.rendererObject);
                        slotContainer.addChild(sprite);
                    }
                    slot.currentSprite = slot.sprites[spriteName];
                    slot.currentSpriteName = spriteName;
                }
            }
            slotContainer.visible = true;

            var bone = slot.bone;

            slotContainer.position.x = bone.worldX + attachment.x * bone.m00 + attachment.y * bone.m01;
            slotContainer.position.y = bone.worldY + attachment.x * bone.m10 + attachment.y * bone.m11;
            slotContainer.scale.x = bone.worldScaleX;
            slotContainer.scale.y = bone.worldScaleY;

            slotContainer.rotation = -(slot.bone.worldRotation * Math.PI / 180);
        }

        PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
    };


    PIXI.Spine.prototype.createSprite = function (slot, descriptor) {
        var name = PIXI.TextureCache[descriptor.name] ? descriptor.name : descriptor.name + ".png";
        var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(name));
        sprite.scale = descriptor.scale;
        sprite.rotation = descriptor.rotation;
        sprite.anchor.x = sprite.anchor.y = 0.5;

        slot.sprites = slot.sprites || {};
        slot.sprites[descriptor.name] = sprite;
        return sprite;
    };

    PIXI.BaseTextureCache = {};
    PIXI.texturesToUpdate = [];
    PIXI.texturesToDestroy = [];
    PIXI.BaseTexture = function (source, scaleMode) {
        PIXI.EventTarget.call(this);
        this.width = 100;
        this.height = 100;
        this.scaleMode = scaleMode || PIXI.BaseTexture.SCALE_MODE.DEFAULT;
        this.hasLoaded = false;
        this.source = source;

        if (!source) return;

        if (this.source instanceof Image || this.source instanceof HTMLImageElement) {
            if (this.source.complete) {
                this.hasLoaded = true;
                this.width = this.source.width;
                this.height = this.source.height;

                PIXI.texturesToUpdate.push(this);
            } else {

                var scope = this;
                this.source.onload = function () {

                    scope.hasLoaded = true;
                    scope.width = scope.source.width;
                    scope.height = scope.source.height;
                    PIXI.texturesToUpdate.push(scope);
                    scope.dispatchEvent({
                        type: 'loaded',
                        content: scope
                    });
                };
            }
        } else {
            this.hasLoaded = true;
            this.width = this.source.width;
            this.height = this.source.height;

            PIXI.texturesToUpdate.push(this);
        }

        this.imageUrl = null;
        this._powerOf2 = false;
        this._glTextures = [];

    };

    PIXI.BaseTexture.prototype.constructor = PIXI.BaseTexture;
    PIXI.BaseTexture.prototype.destroy = function () {
        if (this.source instanceof Image) {
            if (this.imageUrl in PIXI.BaseTextureCache)
                delete PIXI.BaseTextureCache[this.imageUrl];
            this.imageUrl = null;
            this.source.src = null;
        }
        this.source = null;
        PIXI.texturesToDestroy.push(this);
    };

    PIXI.BaseTexture.prototype.updateSourceImage = function (newSrc) {
        this.hasLoaded = false;
        this.source.src = null;
        this.source.src = newSrc;
    };
    PIXI.BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode) {
        var baseTexture = PIXI.BaseTextureCache[imageUrl];
        if (!baseTexture) {
            var image = new Image(); //document.createElement('img');
            if (crossorigin) {
                image.crossOrigin = '';
            }
            image.src = imageUrl;
            baseTexture = new PIXI.BaseTexture(image, scaleMode);
            baseTexture.imageUrl = imageUrl;
            PIXI.BaseTextureCache[imageUrl] = baseTexture;
        }

        return baseTexture;
    };

    PIXI.BaseTexture.SCALE_MODE = {
        DEFAULT: 0, //default to LINEAR
        LINEAR: 0,
        NEAREST: 1
    };

    PIXI.TextureCache = {};
    PIXI.FrameCache = {};
    PIXI.Texture = function (baseTexture, frame) {
        PIXI.EventTarget.call(this);

        if (!frame) {
            this.noFrame = true;
            frame = new PIXI.Rectangle(0, 0, 1, 1);
        }

        if (baseTexture instanceof PIXI.Texture)
            baseTexture = baseTexture.baseTexture;
        this.baseTexture = baseTexture;
        this.frame = frame;
        this.trim = new PIXI.Point();

        this.scope = this;

        if (baseTexture.hasLoaded) {
            if (this.noFrame) frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height);

            this.setFrame(frame);
        } else {
            var scope = this;
            baseTexture.addEventListener('loaded', function () {
                scope.onBaseTextureLoaded();
            });
        }
    };

    PIXI.Texture.prototype.constructor = PIXI.Texture;
    PIXI.Texture.prototype.onBaseTextureLoaded = function () {
        var baseTexture = this.baseTexture;
        baseTexture.removeEventListener('loaded', this.onLoaded);

        if (this.noFrame) this.frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height);

        this.setFrame(this.frame);

        this.scope.dispatchEvent({
            type: 'update',
            content: this
        });
    };
    PIXI.Texture.prototype.destroy = function (destroyBase) {
        if (destroyBase) this.baseTexture.destroy();
    };
    PIXI.Texture.prototype.setFrame = function (frame) {
        this.frame = frame;
        this.width = frame.width;
        this.height = frame.height;

        if (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height) {
            throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);
        }

        this.updateFrame = true;

        PIXI.Texture.frameUpdates.push(this);
    };

    PIXI.Texture.prototype._updateWebGLuvs = function () {
        if (!this._uvs) this._uvs = new Float32Array(8);

        var frame = this.frame;
        var tw = this.baseTexture.width;
        var th = this.baseTexture.height;

        this._uvs[0] = frame.x / tw;
        this._uvs[1] = frame.y / th;

        this._uvs[2] = (frame.x + frame.width) / tw;
        this._uvs[3] = frame.y / th;

        this._uvs[4] = (frame.x + frame.width) / tw;
        this._uvs[5] = (frame.y + frame.height) / th;

        this._uvs[6] = frame.x / tw;
        this._uvs[7] = (frame.y + frame.height) / th;
    };
    PIXI.Texture.fromImage = function (imageUrl, crossorigin, scaleMode) {
        var texture = PIXI.TextureCache[imageUrl];

        if (!texture) {
            texture = new PIXI.Texture(PIXI.BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
            PIXI.TextureCache[imageUrl] = texture;
        }

        return texture;
    };
    PIXI.Texture.fromFrame = function (frameId) {
        var texture = PIXI.TextureCache[frameId];
        if (!texture) throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
        return texture;
    };
    PIXI.Texture.fromCanvas = function (canvas, scaleMode) {
        var baseTexture = new PIXI.BaseTexture(canvas, scaleMode);
        return new PIXI.Texture(baseTexture);
    };
    PIXI.Texture.addTextureToCache = function (texture, id) {
        PIXI.TextureCache[id] = texture;
    };
    PIXI.Texture.removeTextureFromCache = function (id) {
        var texture = PIXI.TextureCache[id];
        PIXI.TextureCache[id] = null;
        return texture;
    };
    PIXI.Texture.frameUpdates = [];

    PIXI.Texture.SCALE_MODE = PIXI.BaseTexture.SCALE_MODE;
    PIXI.RenderTexture = function (width, height, renderer) {
        PIXI.EventTarget.call(this);

        this.width = width || 100;
        this.height = height || 100;

        this.indetityMatrix = PIXI.mat3.create();

        this.frame = new PIXI.Rectangle(0, 0, this.width, this.height);

        this.baseTexture = new PIXI.BaseTexture();
        this.baseTexture.width = this.width;
        this.baseTexture.height = this.height;
        this.baseTexture._glTextures = [];

        this.baseTexture.hasLoaded = true;
        this.renderer = renderer || PIXI.defaultRenderer;

        if (this.renderer.type === PIXI.WEBGL_RENDERER) {
            var gl = this.renderer.gl;

            this.textureBuffer = new PIXI.FilterTexture(gl, this.width, this.height);
            this.baseTexture._glTextures[gl.id] = this.textureBuffer.texture;

            this.render = this.renderWebGL;
            this.projection = new PIXI.Point(this.width / 2, -this.height / 2);
        } else {
            this.render = this.renderCanvas;
            this.textureBuffer = new PIXI.CanvasBuffer(this.width, this.height);
            this.baseTexture.source = this.textureBuffer.canvas;
        }

        PIXI.Texture.frameUpdates.push(this);
    };

    PIXI.RenderTexture.prototype = Object.create(PIXI.Texture.prototype);
    PIXI.RenderTexture.prototype.constructor = PIXI.RenderTexture;

    PIXI.RenderTexture.prototype.resize = function (width, height) {
        this.width = width;
        this.height = height;

        this.frame.width = this.width;
        this.frame.height = this.height;

        if (this.renderer.type === PIXI.WEBGL_RENDERER) {
            this.projection.x = this.width / 2;
            this.projection.y = -this.height / 2;

            var gl = this.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.baseTexture._glTextures[gl.id]);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        } else {
            this.textureBuffer.resize(this.width, this.height);
        }

        PIXI.Texture.frameUpdates.push(this);
    };
    PIXI.RenderTexture.prototype.renderWebGL = function (displayObject, position, clear) {
        var gl = this.renderer.gl;

        gl.colorMask(true, true, true, true);

        gl.viewport(0, 0, this.width, this.height);

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);

        if (clear) this.textureBuffer.clear();
        var children = displayObject.children;
        var originalWorldTransform = displayObject.worldTransform;
        displayObject.worldTransform = PIXI.mat3.create(); //sthis.indetityMatrix;
        displayObject.worldTransform[4] = -1;
        displayObject.worldTransform[5] = this.projection.y * -2;

        if (position) {
            displayObject.worldTransform[2] = position.x;
            displayObject.worldTransform[5] -= position.y;
        }

        for (var i = 0, j = children.length; i < j; i++) {
            children[i].updateTransform();
        }
        this.renderer.renderDisplayObject(displayObject, this.projection);

        displayObject.worldTransform = originalWorldTransform;
    };
    PIXI.RenderTexture.prototype.renderCanvas = function (displayObject, position, clear) {

        var children = displayObject.children;

        displayObject.worldTransform = PIXI.mat3.create();

        if (position) {
            displayObject.worldTransform[2] = position.x;
            displayObject.worldTransform[5] = position.y;
        }

        for (var i = 0, j = children.length; i < j; i++) {
            children[i].updateTransform();
        }

        if (clear) this.textureBuffer.clear();

        var context = this.textureBuffer.context;

        this.renderer.renderDisplayObject(displayObject, context);

        context.setTransform(1, 0, 0, 1, 0, 0);

    };
    PIXI.AssetLoader = function (assetURLs, crossorigin) {
        PIXI.EventTarget.call(this);
        this.assetURLs = assetURLs;
        this.crossorigin = crossorigin;
        this.loadersByType = {
            'jpg': PIXI.ImageLoader,
            'jpeg': PIXI.ImageLoader,
            'png': PIXI.ImageLoader,
            'gif': PIXI.ImageLoader,
            'json': PIXI.JsonLoader,
            'atlas': PIXI.AtlasLoader,
            'anim': PIXI.SpineLoader,
            'xml': PIXI.BitmapFontLoader,
            'fnt': PIXI.BitmapFontLoader
        };
    };
    PIXI.AssetLoader.prototype.constructor = PIXI.AssetLoader;


    PIXI.AssetLoader.prototype._getDataType = function (str) {
        var test = 'data:';
        var start = str.slice(0, test.length).toLowerCase();
        if (start === test) {
            var data = str.slice(test.length);

            var sepIdx = data.indexOf(',');
            if (sepIdx === -1) //malformed data URI scheme
                return null;
            var info = data.slice(0, sepIdx).split(';')[0];
            if (!info || info.toLowerCase() === 'text/plain')
                return 'txt';
            return info.split('/').pop().toLowerCase();
        }

        return null;
    };
    PIXI.AssetLoader.prototype.load = function () {
        var scope = this;

        function onLoad() {
            scope.onAssetLoaded();
        }

        this.loadCount = this.assetURLs.length;

        for (var i = 0; i < this.assetURLs.length; i++) {
            var fileName = this.assetURLs[i];
            var fileType = this._getDataType(fileName);
            if (!fileType)
                fileType = fileName.split('?').shift().split('.').pop().toLowerCase();

            var Constructor = this.loadersByType[fileType];
            if (!Constructor)
                throw new Error(fileType + ' is an unsupported file type');

            var loader = new Constructor(fileName, this.crossorigin);

            loader.addEventListener('loaded', onLoad);
            loader.load();
        }
    };
    PIXI.AssetLoader.prototype.onAssetLoaded = function () {
        this.loadCount--;
        this.dispatchEvent({
            type: 'onProgress',
            content: this
        });
        if (this.onProgress) this.onProgress();

        if (!this.loadCount) {
            this.dispatchEvent({
                type: 'onComplete',
                content: this
            });
            if (this.onComplete) this.onComplete();
        }
    };
    PIXI.JsonLoader = function (url, crossorigin) {
        PIXI.EventTarget.call(this);
        this.url = url;
        this.crossorigin = crossorigin;
        this.baseUrl = url.replace(/[^\/]*$/, '');
        this.loaded = false;

    };
    PIXI.JsonLoader.prototype.constructor = PIXI.JsonLoader;
    PIXI.JsonLoader.prototype.load = function () {
        this.ajaxRequest = new PIXI.AjaxRequest();
        var scope = this;
        this.ajaxRequest.onreadystatechange = function () {
            scope.onJSONLoaded();
        };

        this.ajaxRequest.open('GET', this.url, true);
        if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType('application/json');
        this.ajaxRequest.send(null);
    };
    PIXI.JsonLoader.prototype.onJSONLoaded = function () {
        if (this.ajaxRequest.readyState === 4) {
            if (this.ajaxRequest.status === 200 || window.location.protocol.indexOf('http') === -1) {
                this.json = JSON.parse(this.ajaxRequest.responseText);

                if (this.json.frames) {
                    var scope = this;
                    var textureUrl = this.baseUrl + this.json.meta.image;
                    var image = new PIXI.ImageLoader(textureUrl, this.crossorigin);
                    var frameData = this.json.frames;

                    this.texture = image.texture.baseTexture;
                    image.addEventListener('loaded', function () {
                        scope.onLoaded();
                    });

                    for (var i in frameData) {
                        var rect = frameData[i].frame;
                        if (rect) {
                            PIXI.TextureCache[i] = new PIXI.Texture(this.texture, {
                                x: rect.x,
                                y: rect.y,
                                width: rect.w,
                                height: rect.h
                            });
                            if (frameData[i].trimmed) {

                                var texture = PIXI.TextureCache[i];

                                texture.trimmed = true;

                                var actualSize = frameData[i].sourceSize;
                                var realSize = frameData[i].spriteSourceSize;

                                texture.trim.x = realSize.x;
                                texture.trim.y = realSize.y;
                                texture.trim.realWidth = actualSize.w;
                                texture.trim.realHeight = actualSize.h;
                            }
                        }
                    }

                    image.load();

                } else if (this.json.bones) {
                    var spineJsonParser = new spine.SkeletonJson();
                    var skeletonData = spineJsonParser.readSkeletonData(this.json);
                    PIXI.AnimCache[this.url] = skeletonData;
                    this.onLoaded();
                } else {
                    this.onLoaded();
                }
            } else {
                this.onError();
            }
        }
    };
    PIXI.JsonLoader.prototype.onLoaded = function () {
        this.loaded = true;
        this.dispatchEvent({
            type: 'loaded',
            content: this
        });
    };
    PIXI.JsonLoader.prototype.onError = function () {
        this.dispatchEvent({
            type: 'error',
            content: this
        });
    };

    PIXI.AtlasLoader = function (url, crossorigin) {
        PIXI.EventTarget.call(this);
        this.url = url;
        this.baseUrl = url.replace(/[^\/]*$/, '');
        this.crossorigin = crossorigin;
        this.loaded = false;

    };
    PIXI.AtlasLoader.constructor = PIXI.AtlasLoader;
    PIXI.AtlasLoader.prototype.load = function () {
        this.ajaxRequest = new PIXI.AjaxRequest();
        this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this);

        this.ajaxRequest.open('GET', this.url, true);
        if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType('application/json');
        this.ajaxRequest.send(null);
    };
    PIXI.AtlasLoader.prototype.onAtlasLoaded = function () {
        if (this.ajaxRequest.readyState === 4) {
            if (this.ajaxRequest.status === 200 || window.location.href.indexOf('http') === -1) {
                this.atlas = {
                    meta: {
                        image: []
                    },
                    frames: []
                };
                var result = this.ajaxRequest.responseText.split(/\r?\n/);
                var lineCount = -3;

                var currentImageId = 0;
                var currentFrame = null;
                var nameInNextLine = false;

                var i = 0,
                    j = 0,
                    selfOnLoaded = this.onLoaded.bind(this);
                for (i = 0; i < result.length; i++) {
                    result[i] = result[i].replace(/^\s+|\s+$/g, '');
                    if (result[i] === '') {
                        nameInNextLine = i + 1;
                    }
                    if (result[i].length > 0) {
                        if (nameInNextLine === i) {
                            this.atlas.meta.image.push(result[i]);
                            currentImageId = this.atlas.meta.image.length - 1;
                            this.atlas.frames.push({});
                            lineCount = -3;
                        } else if (lineCount > 0) {
                            if (lineCount % 7 === 1) { // frame name
                                if (currentFrame != null) { //jshint ignore:line
                                    this.atlas.frames[currentImageId][currentFrame.name] = currentFrame;
                                }
                                currentFrame = {
                                    name: result[i],
                                    frame: {}
                                };
                            } else {
                                var text = result[i].split(' ');
                                if (lineCount % 7 === 3) { // position
                                    currentFrame.frame.x = Number(text[1].replace(',', ''));
                                    currentFrame.frame.y = Number(text[2]);
                                } else if (lineCount % 7 === 4) { // size
                                    currentFrame.frame.w = Number(text[1].replace(',', ''));
                                    currentFrame.frame.h = Number(text[2]);
                                } else if (lineCount % 7 === 5) { // real size
                                    var realSize = {
                                        x: 0,
                                        y: 0,
                                        w: Number(text[1].replace(',', '')),
                                        h: Number(text[2])
                                    };

                                    if (realSize.w > currentFrame.frame.w || realSize.h > currentFrame.frame.h) {
                                        currentFrame.trimmed = true;
                                        currentFrame.realSize = realSize;
                                    } else {
                                        currentFrame.trimmed = false;
                                    }
                                }
                            }
                        }
                        lineCount++;
                    }
                }

                if (currentFrame != null) { //jshint ignore:line
                    this.atlas.frames[currentImageId][currentFrame.name] = currentFrame;
                }

                if (this.atlas.meta.image.length > 0) {
                    this.images = [];
                    for (j = 0; j < this.atlas.meta.image.length; j++) {
                        var textureUrl = this.baseUrl + this.atlas.meta.image[j];
                        var frameData = this.atlas.frames[j];
                        this.images.push(new PIXI.ImageLoader(textureUrl, this.crossorigin));

                        for (i in frameData) {
                            var rect = frameData[i].frame;
                            if (rect) {
                                PIXI.TextureCache[i] = new PIXI.Texture(this.images[j].texture.baseTexture, {
                                    x: rect.x,
                                    y: rect.y,
                                    width: rect.w,
                                    height: rect.h
                                });
                                if (frameData[i].trimmed) {
                                    PIXI.TextureCache[i].realSize = frameData[i].realSize;
                                    PIXI.TextureCache[i].trim.x = 0;
                                    PIXI.TextureCache[i].trim.y = 0;
                                }
                            }
                        }
                    }

                    this.currentImageId = 0;
                    for (j = 0; j < this.images.length; j++) {
                        this.images[j].addEventListener('loaded', selfOnLoaded);
                    }
                    this.images[this.currentImageId].load();

                } else {
                    this.onLoaded();
                }

            } else {
                this.onError();
            }
        }
    };
    PIXI.AtlasLoader.prototype.onLoaded = function () {
        if (this.images.length - 1 > this.currentImageId) {
            this.currentImageId++;
            this.images[this.currentImageId].load();
        } else {
            this.loaded = true;
            this.dispatchEvent({
                type: 'loaded',
                content: this
            });
        }
    };
    PIXI.AtlasLoader.prototype.onError = function () {
        this.dispatchEvent({
            type: 'error',
            content: this
        });
    };
    PIXI.SpriteSheetLoader = function (url, crossorigin) {
        PIXI.EventTarget.call(this);
        this.url = url;
        this.crossorigin = crossorigin;
        this.baseUrl = url.replace(/[^\/]*$/, '');
        this.texture = null;
        this.frames = {};
    };
    PIXI.SpriteSheetLoader.prototype.constructor = PIXI.SpriteSheetLoader;
    PIXI.SpriteSheetLoader.prototype.load = function () {
        var scope = this;
        var jsonLoader = new PIXI.JsonLoader(this.url, this.crossorigin);
        jsonLoader.addEventListener('loaded', function (event) {
            scope.json = event.content.json;
            scope.onLoaded();
        });
        jsonLoader.load();
    };
    PIXI.SpriteSheetLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: 'loaded',
            content: this
        });
    };
    PIXI.ImageLoader = function (url, crossorigin) {
        PIXI.EventTarget.call(this);
        this.texture = PIXI.Texture.fromImage(url, crossorigin);
        this.frames = [];
    };
    PIXI.ImageLoader.prototype.constructor = PIXI.ImageLoader;
    PIXI.ImageLoader.prototype.load = function () {
        if (!this.texture.baseTexture.hasLoaded) {
            var scope = this;
            this.texture.baseTexture.addEventListener('loaded', function () {
                scope.onLoaded();
            });
        } else {
            this.onLoaded();
        }
    };
    PIXI.ImageLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: 'loaded',
            content: this
        });
    };
    PIXI.ImageLoader.prototype.loadFramedSpriteSheet = function (frameWidth, frameHeight, textureName) {
        this.frames = [];
        var cols = Math.floor(this.texture.width / frameWidth);
        var rows = Math.floor(this.texture.height / frameHeight);

        var i = 0;
        for (var y = 0; y < rows; y++) {
            for (var x = 0; x < cols; x++, i++) {
                var texture = new PIXI.Texture(this.texture, {
                    x: x * frameWidth,
                    y: y * frameHeight,
                    width: frameWidth,
                    height: frameHeight
                });

                this.frames.push(texture);
                if (textureName) PIXI.TextureCache[textureName + '-' + i] = texture;
            }
        }

        if (!this.texture.baseTexture.hasLoaded) {
            var scope = this;
            this.texture.baseTexture.addEventListener('loaded', function () {
                scope.onLoaded();
            });
        } else {
            this.onLoaded();
        }
    };
    PIXI.BitmapFontLoader = function (url, crossorigin) {
        PIXI.EventTarget.call(this);
        this.url = url;
        this.crossorigin = crossorigin;
        this.baseUrl = url.replace(/[^\/]*$/, '');
        this.texture = null;
    };
    PIXI.BitmapFontLoader.prototype.constructor = PIXI.BitmapFontLoader;
    PIXI.BitmapFontLoader.prototype.load = function () {
        this.ajaxRequest = new XMLHttpRequest();
        var scope = this;
        this.ajaxRequest.onreadystatechange = function () {
            scope.onXMLLoaded();
        };

        this.ajaxRequest.open('GET', this.url, true);
        if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType('application/xml');
        this.ajaxRequest.send(null);
    };
    PIXI.BitmapFontLoader.prototype.onXMLLoaded = function () {
        if (this.ajaxRequest.readyState === 4) {
            if (this.ajaxRequest.status === 200 || window.location.protocol.indexOf('http') === -1) {
                var responseXML = this.ajaxRequest.responseXML;
                if (!responseXML || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS) {
                    if (typeof (window.DOMParser) === 'function') {
                        var domparser = new DOMParser();
                        responseXML = domparser.parseFromString(this.ajaxRequest.responseText, 'text/xml');
                    } else {
                        var div = document.createElement('div');
                        div.innerHTML = this.ajaxRequest.responseText;
                        responseXML = div;
                    }
                }

                var textureUrl = this.baseUrl + responseXML.getElementsByTagName('page')[0].getAttribute('file');
                var image = new PIXI.ImageLoader(textureUrl, this.crossorigin);
                this.texture = image.texture.baseTexture;

                var data = {};
                var info = responseXML.getElementsByTagName('info')[0];
                var common = responseXML.getElementsByTagName('common')[0];
                data.font = info.getAttribute('face');
                data.size = parseInt(info.getAttribute('size'), 10);
                data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10);
                data.chars = {};
                var letters = responseXML.getElementsByTagName('char');

                for (var i = 0; i < letters.length; i++) {
                    var charCode = parseInt(letters[i].getAttribute('id'), 10);

                    var textureRect = new PIXI.Rectangle(
                        parseInt(letters[i].getAttribute('x'), 10),
                        parseInt(letters[i].getAttribute('y'), 10),
                        parseInt(letters[i].getAttribute('width'), 10),
                        parseInt(letters[i].getAttribute('height'), 10)
                    );

                    data.chars[charCode] = {
                        xOffset: parseInt(letters[i].getAttribute('xoffset'), 10),
                        yOffset: parseInt(letters[i].getAttribute('yoffset'), 10),
                        xAdvance: parseInt(letters[i].getAttribute('xadvance'), 10),
                        kerning: {},
                        texture: PIXI.TextureCache[charCode] = new PIXI.Texture(this.texture, textureRect)

                    };
                }
                var kernings = responseXML.getElementsByTagName('kerning');
                for (i = 0; i < kernings.length; i++) {
                    var first = parseInt(kernings[i].getAttribute('first'), 10);
                    var second = parseInt(kernings[i].getAttribute('second'), 10);
                    var amount = parseInt(kernings[i].getAttribute('amount'), 10);

                    data.chars[second].kerning[first] = amount;

                }

                PIXI.BitmapText.fonts[data.font] = data;

                var scope = this;
                image.addEventListener('loaded', function () {
                    scope.onLoaded();
                });
                image.load();
            }
        }
    };
    PIXI.BitmapFontLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: 'loaded',
            content: this
        });
    };
    PIXI.SpineLoader = function (url, crossorigin) {
        PIXI.EventTarget.call(this);
        this.url = url;
        this.crossorigin = crossorigin;
        this.loaded = false;
    };

    PIXI.SpineLoader.prototype.constructor = PIXI.SpineLoader;
    PIXI.SpineLoader.prototype.load = function () {

        var scope = this;
        var jsonLoader = new PIXI.JsonLoader(this.url, this.crossorigin);
        jsonLoader.addEventListener("loaded", function (event) {
            scope.json = event.content.json;
            scope.onLoaded();
        });
        jsonLoader.load();
    };
    PIXI.SpineLoader.prototype.onLoaded = function () {
        this.loaded = true;
        this.dispatchEvent({
            type: "loaded",
            content: this
        });
    };
    PIXI.AbstractFilter = function (fragmentSrc, uniforms) {
        this.passes = [this];

        this.shaders = [];

        this.dirty = true;
        this.padding = 0;
        this.uniforms = uniforms || {};

        this.fragmentSrc = fragmentSrc || [];
    };
    PIXI.AlphaMaskFilter = function (texture) {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        texture.baseTexture._powerOf2 = true;
        this.uniforms = {
            mask: {
                type: 'sampler2D',
                value: texture
            },
            mapDimensions: {
                type: '2f',
                value: {
                    x: 1,
                    y: 5112
                }
            },
            dimensions: {
                type: '4fv',
                value: [0, 0, 0, 0]
            }
        };

        if (texture.baseTexture.hasLoaded) {
            this.uniforms.mask.value.x = texture.width;
            this.uniforms.mask.value.y = texture.height;
        } else {
            this.boundLoadedFunction = this.onTextureLoaded.bind(this);

            texture.baseTexture.on('loaded', this.boundLoadedFunction);
        }

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D mask;',
        'uniform sampler2D uSampler;',
        'uniform vec2 offset;',
        'uniform vec4 dimensions;',
        'uniform vec2 mapDimensions;',

        'void main(void) {',
        '   vec2 mapCords = vTextureCoord.xy;',
        '   mapCords += (dimensions.zw + offset)/ dimensions.xy ;',
        '   mapCords.y *= -1.0;',
        '   mapCords.y += 1.0;',
        '   mapCords *= dimensions.xy / mapDimensions;',

        '   vec4 original =  texture2D(uSampler, vTextureCoord);',
        '   float maskAlpha =  texture2D(mask, mapCords).r;',
        '   original *= maskAlpha;',
        '   gl_FragColor =  original;',
        '}'
    ];
    };

    PIXI.AlphaMaskFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.AlphaMaskFilter.prototype.constructor = PIXI.AlphaMaskFilter;

    PIXI.AlphaMaskFilter.prototype.onTextureLoaded = function () {
        this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width;
        this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height;

        this.uniforms.mask.value.baseTexture.off('loaded', this.boundLoadedFunction);
    };
    Object.defineProperty(PIXI.AlphaMaskFilter.prototype, 'map', {
        get: function () {
            return this.uniforms.mask.value;
        },
        set: function (value) {
            this.uniforms.mask.value = value;
        }
    });
    PIXI.ColorMatrixFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            matrix: {
                type: 'mat4',
                value: [1, 0, 0, 0,
                                       0, 1, 0, 0,
                                       0, 0, 1, 0,
                                       0, 0, 0, 1]
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float invert;',
        'uniform mat4 matrix;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;',
        '}'
    ];
    };

    PIXI.ColorMatrixFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.ColorMatrixFilter.prototype.constructor = PIXI.ColorMatrixFilter;
    Object.defineProperty(PIXI.ColorMatrixFilter.prototype, 'matrix', {
        get: function () {
            return this.uniforms.matrix.value;
        },
        set: function (value) {
            this.uniforms.matrix.value = value;
        }
    });
    PIXI.GrayFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            gray: {
                type: '1f',
                value: 1
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D uSampler;',
        'uniform float gray;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);',
        '}'
    ];
    };

    PIXI.GrayFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.GrayFilter.prototype.constructor = PIXI.GrayFilter;
    Object.defineProperty(PIXI.GrayFilter.prototype, 'gray', {
        get: function () {
            return this.uniforms.gray.value;
        },
        set: function (value) {
            this.uniforms.gray.value = value;
        }
    });
    PIXI.DisplacementFilter = function (texture) {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        texture.baseTexture._powerOf2 = true;

        this.uniforms = {
            displacementMap: {
                type: 'sampler2D',
                value: texture
            },
            scale: {
                type: '2f',
                value: {
                    x: 30,
                    y: 30
                }
            },
            offset: {
                type: '2f',
                value: {
                    x: 0,
                    y: 0
                }
            },
            mapDimensions: {
                type: '2f',
                value: {
                    x: 1,
                    y: 5112
                }
            },
            dimensions: {
                type: '4fv',
                value: [0, 0, 0, 0]
            }
        };

        if (texture.baseTexture.hasLoaded) {
            this.uniforms.mapDimensions.value.x = texture.width;
            this.uniforms.mapDimensions.value.y = texture.height;
        } else {
            this.boundLoadedFunction = this.onTextureLoaded.bind(this);

            texture.baseTexture.on('loaded', this.boundLoadedFunction);
        }

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D displacementMap;',
        'uniform sampler2D uSampler;',
        'uniform vec2 scale;',
        'uniform vec2 offset;',
        'uniform vec4 dimensions;',
        'uniform vec2 mapDimensions;', // = vec2(256.0, 256.0);',

        'void main(void) {',
        '   vec2 mapCords = vTextureCoord.xy;',
        '   mapCords += (dimensions.zw + offset)/ dimensions.xy ;',
        '   mapCords.y *= -1.0;',
        '   mapCords.y += 1.0;',
        '   vec2 matSample = texture2D(displacementMap, mapCords).xy;',
        '   matSample -= 0.5;',
        '   matSample *= scale;',
        '   matSample /= mapDimensions;',
        '   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));',
        '   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);',
        '   vec2 cord = vTextureCoord;',
        '}'
    ];
    };

    PIXI.DisplacementFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.DisplacementFilter.prototype.constructor = PIXI.DisplacementFilter;

    PIXI.DisplacementFilter.prototype.onTextureLoaded = function () {
        this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
        this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;

        this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
    };
    Object.defineProperty(PIXI.DisplacementFilter.prototype, 'map', {
        get: function () {
            return this.uniforms.displacementMap.value;
        },
        set: function (value) {
            this.uniforms.displacementMap.value = value;
        }
    });
    Object.defineProperty(PIXI.DisplacementFilter.prototype, 'scale', {
        get: function () {
            return this.uniforms.scale.value;
        },
        set: function (value) {
            this.uniforms.scale.value = value;
        }
    });
    Object.defineProperty(PIXI.DisplacementFilter.prototype, 'offset', {
        get: function () {
            return this.uniforms.offset.value;
        },
        set: function (value) {
            this.uniforms.offset.value = value;
        }
    });
    PIXI.PixelateFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            invert: {
                type: '1f',
                value: 0
            },
            dimensions: {
                type: '4fv',
                value: new Float32Array([10000, 100, 10, 10])
            },
            pixelSize: {
                type: '2f',
                value: {
                    x: 10,
                    y: 10
                }
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec2 testDim;',
        'uniform vec4 dimensions;',
        'uniform vec2 pixelSize;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec2 coord = vTextureCoord;',

        '   vec2 size = dimensions.xy/pixelSize;',

        '   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;',
        '   gl_FragColor = texture2D(uSampler, color);',
        '}'
    ];
    };

    PIXI.PixelateFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.PixelateFilter.prototype.constructor = PIXI.PixelateFilter;
    Object.defineProperty(PIXI.PixelateFilter.prototype, 'size', {
        get: function () {
            return this.uniforms.pixelSize.value;
        },
        set: function (value) {
            this.dirty = true;
            this.uniforms.pixelSize.value = value;
        }
    });

    PIXI.BlurXFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            blur: {
                type: '1f',
                value: 1 / 512
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec4 sum = vec4(0.0);',

        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;',

        '   gl_FragColor = sum;',
        '}'
    ];
    };

    PIXI.BlurXFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.BlurXFilter.prototype.constructor = PIXI.BlurXFilter;

    Object.defineProperty(PIXI.BlurXFilter.prototype, 'blur', {
        get: function () {
            return this.uniforms.blur.value / (1 / 7000);
        },
        set: function (value) {

            this.dirty = true;
            this.uniforms.blur.value = (1 / 7000) * value;
        }
    });

    PIXI.BlurYFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            blur: {
                type: '1f',
                value: 1 / 512
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec4 sum = vec4(0.0);',

        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;',

        '   gl_FragColor = sum;',
        '}'
    ];
    };

    PIXI.BlurYFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.BlurYFilter.prototype.constructor = PIXI.BlurYFilter;

    Object.defineProperty(PIXI.BlurYFilter.prototype, 'blur', {
        get: function () {
            return this.uniforms.blur.value / (1 / 7000);
        },
        set: function (value) {
            this.uniforms.blur.value = (1 / 7000) * value;
        }
    });
    PIXI.BlurFilter = function () {
        this.blurXFilter = new PIXI.BlurXFilter();
        this.blurYFilter = new PIXI.BlurYFilter();

        this.passes = [this.blurXFilter, this.blurYFilter];
    };
    Object.defineProperty(PIXI.BlurFilter.prototype, 'blur', {
        get: function () {
            return this.blurXFilter.blur;
        },
        set: function (value) {
            this.blurXFilter.blur = this.blurYFilter.blur = value;
        }
    });
    Object.defineProperty(PIXI.BlurFilter.prototype, 'blurX', {
        get: function () {
            return this.blurXFilter.blur;
        },
        set: function (value) {
            this.blurXFilter.blur = value;
        }
    });
    Object.defineProperty(PIXI.BlurFilter.prototype, 'blurY', {
        get: function () {
            return this.blurYFilter.blur;
        },
        set: function (value) {
            this.blurYFilter.blur = value;
        }
    });
    PIXI.InvertFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            invert: {
                type: '1f',
                value: 1
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float invert;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);',
        '}'
    ];
    };

    PIXI.InvertFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.InvertFilter.prototype.constructor = PIXI.InvertFilter;
    Object.defineProperty(PIXI.InvertFilter.prototype, 'invert', {
        get: function () {
            return this.uniforms.invert.value;
        },
        set: function (value) {
            this.uniforms.invert.value = value;
        }
    });
    PIXI.SepiaFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            sepia: {
                type: '1f',
                value: 1
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float sepia;',
        'uniform sampler2D uSampler;',

        'const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);',
        '}'
    ];
    };

    PIXI.SepiaFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.SepiaFilter.prototype.constructor = PIXI.SepiaFilter;
    Object.defineProperty(PIXI.SepiaFilter.prototype, 'sepia', {
        get: function () {
            return this.uniforms.sepia.value;
        },
        set: function (value) {
            this.uniforms.sepia.value = value;
        }
    });
    PIXI.TwistFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            radius: {
                type: '1f',
                value: 0.5
            },
            angle: {
                type: '1f',
                value: 5
            },
            offset: {
                type: '2f',
                value: {
                    x: 0.5,
                    y: 0.5
                }
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'uniform float radius;',
        'uniform float angle;',
        'uniform vec2 offset;',

        'void main(void) {',
        '   vec2 coord = vTextureCoord - offset;',
        '   float distance = length(coord);',

        '   if (distance < radius) {',
        '       float ratio = (radius - distance) / radius;',
        '       float angleMod = ratio * ratio * angle;',
        '       float s = sin(angleMod);',
        '       float c = cos(angleMod);',
        '       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);',
        '   }',

        '   gl_FragColor = texture2D(uSampler, coord+offset);',
        '}'
    ];
    };

    PIXI.TwistFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.TwistFilter.prototype.constructor = PIXI.TwistFilter;
    Object.defineProperty(PIXI.TwistFilter.prototype, 'offset', {
        get: function () {
            return this.uniforms.offset.value;
        },
        set: function (value) {
            this.dirty = true;
            this.uniforms.offset.value = value;
        }
    });
    Object.defineProperty(PIXI.TwistFilter.prototype, 'radius', {
        get: function () {
            return this.uniforms.radius.value;
        },
        set: function (value) {
            this.dirty = true;
            this.uniforms.radius.value = value;
        }
    });
    Object.defineProperty(PIXI.TwistFilter.prototype, 'angle', {
        get: function () {
            return this.uniforms.angle.value;
        },
        set: function (value) {
            this.dirty = true;
            this.uniforms.angle.value = value;
        }
    });
    PIXI.ColorStepFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            step: {
                type: '1f',
                value: 5
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D uSampler;',
        'uniform float step;',

        'void main(void) {',
        '   vec4 color = texture2D(uSampler, vTextureCoord);',
        '   color = floor(color * step) / step;',
        '   gl_FragColor = color;',
        '}'
    ];
    };

    PIXI.ColorStepFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.ColorStepFilter.prototype.constructor = PIXI.ColorStepFilter;
    Object.defineProperty(PIXI.ColorStepFilter.prototype, 'step', {
        get: function () {
            return this.uniforms.step.value;
        },
        set: function (value) {
            this.uniforms.step.value = value;
        }
    });
    PIXI.DotScreenFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            scale: {
                type: '1f',
                value: 1
            },
            angle: {
                type: '1f',
                value: 5
            },
            dimensions: {
                type: '4fv',
                value: [0, 0, 0, 0]
            }
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'uniform float angle;',
        'uniform float scale;',

        'float pattern() {',
        '   float s = sin(angle), c = cos(angle);',
        '   vec2 tex = vTextureCoord * dimensions.xy;',
        '   vec2 point = vec2(',
        '       c * tex.x - s * tex.y,',
        '       s * tex.x + c * tex.y',
        '   ) * scale;',
        '   return (sin(point.x) * sin(point.y)) * 4.0;',
        '}',

        'void main() {',
        '   vec4 color = texture2D(uSampler, vTextureCoord);',
        '   float average = (color.r + color.g + color.b) / 3.0;',
        '   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);',
        '}'
    ];
    };

    PIXI.DotScreenFilter.prototype = Object.create(PIXI.DotScreenFilter.prototype);
    PIXI.DotScreenFilter.prototype.constructor = PIXI.DotScreenFilter;
    Object.defineProperty(PIXI.DotScreenFilter.prototype, 'scale', {
        get: function () {
            return this.uniforms.scale.value;
        },
        set: function (value) {
            this.dirty = true;
            this.uniforms.scale.value = value;
        }
    });
    Object.defineProperty(PIXI.DotScreenFilter.prototype, 'angle', {
        get: function () {
            return this.uniforms.angle.value;
        },
        set: function (value) {
            this.dirty = true;
            this.uniforms.angle.value = value;
        }
    });

    PIXI.CrossHatchFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            blur: {
                type: '1f',
                value: 1 / 512
            },
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);',

        '    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);',

        '    if (lum < 1.00) {',
        '        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.75) {',
        '        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.50) {',
        '        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.3) {',
        '        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',
        '}'
    ];
    };

    PIXI.CrossHatchFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.CrossHatchFilter.prototype.constructor = PIXI.BlurYFilter;

    Object.defineProperty(PIXI.CrossHatchFilter.prototype, 'blur', {
        get: function () {
            return this.uniforms.blur.value / (1 / 7000);
        },
        set: function (value) {
            this.uniforms.blur.value = (1 / 7000) * value;
        }
    });

    PIXI.RGBSplitFilter = function () {
        PIXI.AbstractFilter.call(this);

        this.passes = [this];
        this.uniforms = {
            red: {
                type: '2f',
                value: {
                    x: 20,
                    y: 20
                }
            },
            green: {
                type: '2f',
                value: {
                    x: -20,
                    y: 20
                }
            },
            blue: {
                type: '2f',
                value: {
                    x: 20,
                    y: -20
                }
            },
            dimensions: {
                type: '4fv',
                value: [0, 0, 0, 0]
            }
        };

        this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform vec2 red;',
        'uniform vec2 green;',
        'uniform vec2 blue;',
        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;',
        '   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;',
        '   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;',
        '   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;',
        '}'
    ];
    };

    PIXI.RGBSplitFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
    PIXI.RGBSplitFilter.prototype.constructor = PIXI.RGBSplitFilter;

    Object.defineProperty(PIXI.RGBSplitFilter.prototype, 'angle', {
        get: function () {
            return this.uniforms.blur.value / (1 / 7000);
        },
        set: function (value) {
            this.uniforms.blur.value = (1 / 7000) * value;
        }
    });

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = PIXI;
        }
        exports.PIXI = PIXI;
    } else if (typeof define !== 'undefined' && define.amd) {
        define(PIXI);
    } else {
        root.PIXI = PIXI;
    }
}).call(this);
var dat = dat || {};
dat.gui = dat.gui || {};
dat.utils = dat.utils || {};
dat.controllers = dat.controllers || {};
dat.dom = dat.dom || {};
dat.color = dat.color || {};

dat.utils.css = (function () {
    return {
        load: function (url, doc) {
            doc = doc || document;
            var link = doc.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = url;
            doc.getElementsByTagName('head')[0].appendChild(link);
        },
        inject: function (css, doc) {
            doc = doc || document;
            var injected = document.createElement('style');
            injected.type = 'text/css';
            injected.innerHTML = css;
            doc.getElementsByTagName('head')[0].appendChild(injected);
        }
    }
})();


dat.utils.common = (function () {

    var ARR_EACH = Array.prototype.forEach;
    var ARR_SLICE = Array.prototype.slice;

    return {

        BREAK: {},

        extend: function (target) {

            this.each(ARR_SLICE.call(arguments, 1), function (obj) {

                for (var key in obj)
                    if (!this.isUndefined(obj[key]))
                        target[key] = obj[key];

            }, this);

            return target;

        },

        defaults: function (target) {

            this.each(ARR_SLICE.call(arguments, 1), function (obj) {

                for (var key in obj)
                    if (this.isUndefined(target[key]))
                        target[key] = obj[key];

            }, this);

            return target;

        },

        compose: function () {
            var toCall = ARR_SLICE.call(arguments);
            return function () {
                var args = ARR_SLICE.call(arguments);
                for (var i = toCall.length - 1; i >= 0; i--) {
                    args = [toCall[i].apply(this, args)];
                }
                return args[0];
            }
        },

        each: function (obj, itr, scope) {

            if (!obj) return;

            if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {

                obj.forEach(itr, scope);

            } else if (obj.length === obj.length + 0) { // Is number but not NaN

                for (var key = 0, l = obj.length; key < l; key++)
                    if (key in obj && itr.call(scope, obj[key], key) === this.BREAK)
                        return;

            } else {

                for (var key in obj)
                    if (itr.call(scope, obj[key], key) === this.BREAK)
                        return;

            }

        },

        defer: function (fnc) {
            setTimeout(fnc, 0);
        },

        toArray: function (obj) {
            if (obj.toArray) return obj.toArray();
            return ARR_SLICE.call(obj);
        },

        isUndefined: function (obj) {
            return obj === undefined;
        },

        isNull: function (obj) {
            return obj === null;
        },

        isNaN: function (obj) {
            return obj !== obj;
        },

        isArray: Array.isArray || function (obj) {
            return obj.constructor === Array;
        },

        isObject: function (obj) {
            return obj === Object(obj);
        },

        isNumber: function (obj) {
            return obj === obj + 0;
        },

        isString: function (obj) {
            return obj === obj + '';
        },

        isBoolean: function (obj) {
            return obj === false || obj === true;
        },

        isFunction: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Function]';
        }

    };

})();


dat.controllers.Controller = (function (common) {
    var Controller = function (object, property) {

        this.initialValue = object[property];
        this.domElement = document.createElement('div');
        this.object = object;
        this.property = property;
        this.__onChange = undefined;
        this.__onFinishChange = undefined;

    };

    common.extend(

        Controller.prototype,
        {
            onChange: function (fnc) {
                this.__onChange = fnc;
                return this;
            },
            onFinishChange: function (fnc) {
                this.__onFinishChange = fnc;
                return this;
            },
            setValue: function (newValue) {
                this.object[this.property] = newValue;
                if (this.__onChange) {
                    this.__onChange.call(this, newValue);
                }
                this.updateDisplay();
                return this;
            },
            getValue: function () {
                return this.object[this.property];
            },
            updateDisplay: function () {
                return this;
            },
            isModified: function () {
                return this.initialValue !== this.getValue()
            }

        }

    );

    return Controller;


})(dat.utils.common);


dat.dom.dom = (function (common) {

    var EVENT_MAP = {
        'HTMLEvents': ['change'],
        'MouseEvents': ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
        'KeyboardEvents': ['keydown']
    };

    var EVENT_MAP_INV = {};
    common.each(EVENT_MAP, function (v, k) {
        common.each(v, function (e) {
            EVENT_MAP_INV[e] = k;
        });
    });

    var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

    function cssValueToPixels(val) {

        if (val === '0' || common.isUndefined(val)) return 0;

        var match = val.match(CSS_VALUE_PIXELS);

        if (!common.isNull(match)) {
            return parseFloat(match[1]);
        }

        return 0;

    }
    var dom = {
        makeSelectable: function (elem, selectable) {

            if (elem === undefined || elem.style === undefined) return;

            elem.onselectstart = selectable ? function () {
                return false;
            } : function () {};

            elem.style.MozUserSelect = selectable ? 'auto' : 'none';
            elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
            elem.unselectable = selectable ? 'on' : 'off';

        },
        makeFullscreen: function (elem, horizontal, vertical) {

            if (common.isUndefined(horizontal)) horizontal = true;
            if (common.isUndefined(vertical)) vertical = true;

            elem.style.position = 'absolute';

            if (horizontal) {
                elem.style.left = 0;
                elem.style.right = 0;
            }
            if (vertical) {
                elem.style.top = 0;
                elem.style.bottom = 0;
            }

        },
        fakeEvent: function (elem, eventType, params, aux) {
            params = params || {};
            var className = EVENT_MAP_INV[eventType];
            if (!className) {
                throw new Error('Event type ' + eventType + ' not supported.');
            }
            var evt = document.createEvent(className);
            switch (className) {
                case 'MouseEvents':
                    var clientX = params.x || params.clientX || 0;
                    var clientY = params.y || params.clientY || 0;
                    evt.initMouseEvent(eventType, params.bubbles || false,
                        params.cancelable || true, window, params.clickCount || 1,
                        0, //screen X
                        0, //screen Y
                        clientX, //client X
                        clientY, //client Y
                        false, false, false, false, 0, null);
                    break;
                case 'KeyboardEvents':
                    var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
                    common.defaults(params, {
                        cancelable: true,
                        ctrlKey: false,
                        altKey: false,
                        shiftKey: false,
                        metaKey: false,
                        keyCode: undefined,
                        charCode: undefined
                    });
                    init(eventType, params.bubbles || false,
                        params.cancelable, window,
                        params.ctrlKey, params.altKey,
                        params.shiftKey, params.metaKey,
                        params.keyCode, params.charCode);
                    break;
                default:
                    evt.initEvent(eventType, params.bubbles || false,
                        params.cancelable || true);
                    break;
            }
            common.defaults(evt, aux);
            elem.dispatchEvent(evt);
        },
        bind: function (elem, event, func, bool) {
            bool = bool || false;
            if (elem.addEventListener)
                elem.addEventListener(event, func, bool);
            else if (elem.attachEvent)
                elem.attachEvent('on' + event, func);
            return dom;
        },
        unbind: function (elem, event, func, bool) {
            bool = bool || false;
            if (elem.removeEventListener)
                elem.removeEventListener(event, func, bool);
            else if (elem.detachEvent)
                elem.detachEvent('on' + event, func);
            return dom;
        },
        addClass: function (elem, className) {
            if (elem.className === undefined) {
                elem.className = className;
            } else if (elem.className !== className) {
                var classes = elem.className.split(/ +/);
                if (classes.indexOf(className) == -1) {
                    classes.push(className);
                    elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
                }
            }
            return dom;
        },
        removeClass: function (elem, className) {
            if (className) {
                if (elem.className === undefined) {
                } else if (elem.className === className) {
                    elem.removeAttribute('class');
                } else {
                    var classes = elem.className.split(/ +/);
                    var index = classes.indexOf(className);
                    if (index != -1) {
                        classes.splice(index, 1);
                        elem.className = classes.join(' ');
                    }
                }
            } else {
                elem.className = undefined;
            }
            return dom;
        },

        hasClass: function (elem, className) {
            return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
        },
        getWidth: function (elem) {

            var style = getComputedStyle(elem);

            return cssValueToPixels(style['border-left-width']) +
                cssValueToPixels(style['border-right-width']) +
                cssValueToPixels(style['padding-left']) +
                cssValueToPixels(style['padding-right']) +
                cssValueToPixels(style['width']);
        },
        getHeight: function (elem) {

            var style = getComputedStyle(elem);

            return cssValueToPixels(style['border-top-width']) +
                cssValueToPixels(style['border-bottom-width']) +
                cssValueToPixels(style['padding-top']) +
                cssValueToPixels(style['padding-bottom']) +
                cssValueToPixels(style['height']);
        },
        getOffset: function (elem) {
            var offset = {
                left: 0,
                top: 0
            };
            if (elem.offsetParent) {
                do {
                    offset.left += elem.offsetLeft;
                    offset.top += elem.offsetTop;
                } while (elem = elem.offsetParent);
            }
            return offset;
        },
        isActive: function (elem) {
            return elem === document.activeElement && (elem.type || elem.href);
        }

    };

    return dom;

})(dat.utils.common);


dat.controllers.OptionController = (function (Controller, dom, common) {
    var OptionController = function (object, property, options) {

        OptionController.superclass.call(this, object, property);

        var _this = this;
        this.__select = document.createElement('select');

        if (common.isArray(options)) {
            var map = {};
            common.each(options, function (element) {
                map[element] = element;
            });
            options = map;
        }

        common.each(options, function (value, key) {

            var opt = document.createElement('option');
            opt.innerHTML = key;
            opt.setAttribute('value', value);
            _this.__select.appendChild(opt);

        });
        this.updateDisplay();

        dom.bind(this.__select, 'change', function () {
            var desiredValue = this.options[this.selectedIndex].value;
            _this.setValue(desiredValue);
        });

        this.domElement.appendChild(this.__select);

    };

    OptionController.superclass = Controller;

    common.extend(

        OptionController.prototype,
        Controller.prototype,

        {

            setValue: function (v) {
                var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
                if (this.__onFinishChange) {
                    this.__onFinishChange.call(this, this.getValue());
                }
                return toReturn;
            },

            updateDisplay: function () {
                this.__select.value = this.getValue();
                return OptionController.superclass.prototype.updateDisplay.call(this);
            }

        }

    );

    return OptionController;

})(dat.controllers.Controller,
    dat.dom.dom,
    dat.utils.common);


dat.controllers.NumberController = (function (Controller, common) {
    var NumberController = function (object, property, params) {

        NumberController.superclass.call(this, object, property);

        params = params || {};

        this.__min = params.min;
        this.__max = params.max;
        this.__step = params.step;

        if (common.isUndefined(this.__step)) {

            if (this.initialValue == 0) {
                this.__impliedStep = 1; // What are we, psychics?
            } else {
                this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10;
            }

        } else {

            this.__impliedStep = this.__step;

        }

        this.__precision = numDecimals(this.__impliedStep);


    };

    NumberController.superclass = Controller;

    common.extend(

        NumberController.prototype,
        Controller.prototype,
        {

            setValue: function (v) {

                if (this.__min !== undefined && v < this.__min) {
                    v = this.__min;
                } else if (this.__max !== undefined && v > this.__max) {
                    v = this.__max;
                }

                if (this.__step !== undefined && v % this.__step != 0) {
                    v = Math.round(v / this.__step) * this.__step;
                }

                return NumberController.superclass.prototype.setValue.call(this, v);

            },
            min: function (v) {
                this.__min = v;
                return this;
            },
            max: function (v) {
                this.__max = v;
                return this;
            },
            step: function (v) {
                this.__step = v;
                this.__impliedStep = v;
                this.__precision = numDecimals(v);
                return this;
            }

        }

    );

    function numDecimals(x) {
        x = x.toString();
        if (x.indexOf('.') > -1) {
            return x.length - x.indexOf('.') - 1;
        } else {
            return 0;
        }
    }

    return NumberController;

})(dat.controllers.Controller,
    dat.utils.common);


dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {
    var NumberControllerBox = function (object, property, params) {

        this.__truncationSuspended = false;

        NumberControllerBox.superclass.call(this, object, property, params);

        var _this = this;
        var prev_y;

        this.__input = document.createElement('input');
        this.__input.setAttribute('type', 'text');

        dom.bind(this.__input, 'change', onChange);
        dom.bind(this.__input, 'blur', onBlur);
        dom.bind(this.__input, 'mousedown', onMouseDown);
        dom.bind(this.__input, 'keydown', function (e) {
            if (e.keyCode === 13) {
                _this.__truncationSuspended = true;
                this.blur();
                _this.__truncationSuspended = false;
            }

        });

        function onChange() {
            var attempted = parseFloat(_this.__input.value);
            if (!common.isNaN(attempted)) _this.setValue(attempted);
        }

        function onBlur() {
            onChange();
            if (_this.__onFinishChange) {
                _this.__onFinishChange.call(_this, _this.getValue());
            }
        }

        function onMouseDown(e) {
            dom.bind(window, 'mousemove', onMouseDrag);
            dom.bind(window, 'mouseup', onMouseUp);
            prev_y = e.clientY;
        }

        function onMouseDrag(e) {

            var diff = prev_y - e.clientY;
            _this.setValue(_this.getValue() + diff * _this.__impliedStep);

            prev_y = e.clientY;

        }

        function onMouseUp() {
            dom.unbind(window, 'mousemove', onMouseDrag);
            dom.unbind(window, 'mouseup', onMouseUp);
        }

        this.updateDisplay();

        this.domElement.appendChild(this.__input);

    };

    NumberControllerBox.superclass = NumberController;

    common.extend(

        NumberControllerBox.prototype,
        NumberController.prototype,

        {

            updateDisplay: function () {

                this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
                return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
            }

        }

    );

    function roundToDecimal(value, decimals) {
        var tenTo = Math.pow(10, decimals);
        return Math.round(value * tenTo) / tenTo;
    }

    return NumberControllerBox;

})(dat.controllers.NumberController,
    dat.dom.dom,
    dat.utils.common);


dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {
    var NumberControllerSlider = function (object, property, min, max, step) {

        NumberControllerSlider.superclass.call(this, object, property, {
            min: min,
            max: max,
            step: step
        });

        var _this = this;

        this.__background = document.createElement('div');
        this.__foreground = document.createElement('div');



        dom.bind(this.__background, 'mousedown', onMouseDown);

        dom.addClass(this.__background, 'slider');
        dom.addClass(this.__foreground, 'slider-fg');

        function onMouseDown(e) {

            dom.bind(window, 'mousemove', onMouseDrag);
            dom.bind(window, 'mouseup', onMouseUp);

            onMouseDrag(e);
        }

        function onMouseDrag(e) {

            e.preventDefault();

            var offset = dom.getOffset(_this.__background);
            var width = dom.getWidth(_this.__background);

            _this.setValue(
                map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
            );

            return false;

        }

        function onMouseUp() {
            dom.unbind(window, 'mousemove', onMouseDrag);
            dom.unbind(window, 'mouseup', onMouseUp);
            if (_this.__onFinishChange) {
                _this.__onFinishChange.call(_this, _this.getValue());
            }
        }

        this.updateDisplay();

        this.__background.appendChild(this.__foreground);
        this.domElement.appendChild(this.__background);

    };

    NumberControllerSlider.superclass = NumberController;
    NumberControllerSlider.useDefaultStyles = function () {
        css.inject(styleSheet);
    };

    common.extend(

        NumberControllerSlider.prototype,
        NumberController.prototype,

        {

            updateDisplay: function () {
                var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
                this.__foreground.style.width = pct * 100 + '%';
                return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
            }

        }



    );

    function map(v, i1, i2, o1, o2) {
        return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
    }

    return NumberControllerSlider;

})(dat.controllers.NumberController,
    dat.dom.dom,
    dat.utils.css,
    dat.utils.common,
    "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");


dat.controllers.FunctionController = (function (Controller, dom, common) {
    var FunctionController = function (object, property, text) {

        FunctionController.superclass.call(this, object, property);

        var _this = this;

        this.__button = document.createElement('div');
        this.__button.innerHTML = text === undefined ? 'Fire' : text;
        dom.bind(this.__button, 'click', function (e) {
            e.preventDefault();
            _this.fire();
            return false;
        });

        dom.addClass(this.__button, 'button');

        this.domElement.appendChild(this.__button);


    };

    FunctionController.superclass = Controller;

    common.extend(

        FunctionController.prototype,
        Controller.prototype, {

            fire: function () {
                if (this.__onChange) {
                    this.__onChange.call(this);
                }
                if (this.__onFinishChange) {
                    this.__onFinishChange.call(this, this.getValue());
                }
                this.getValue().call(this.object);
            }
        }

    );

    return FunctionController;

})(dat.controllers.Controller,
    dat.dom.dom,
    dat.utils.common);


dat.controllers.BooleanController = (function (Controller, dom, common) {
    var BooleanController = function (object, property) {

        BooleanController.superclass.call(this, object, property);

        var _this = this;
        this.__prev = this.getValue();

        this.__checkbox = document.createElement('input');
        this.__checkbox.setAttribute('type', 'checkbox');


        dom.bind(this.__checkbox, 'change', onChange, false);

        this.domElement.appendChild(this.__checkbox);
        this.updateDisplay();

        function onChange() {
            _this.setValue(!_this.__prev);
        }

    };

    BooleanController.superclass = Controller;

    common.extend(

        BooleanController.prototype,
        Controller.prototype,

        {

            setValue: function (v) {
                var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
                if (this.__onFinishChange) {
                    this.__onFinishChange.call(this, this.getValue());
                }
                this.__prev = this.getValue();
                return toReturn;
            },

            updateDisplay: function () {

                if (this.getValue() === true) {
                    this.__checkbox.setAttribute('checked', 'checked');
                    this.__checkbox.checked = true;
                } else {
                    this.__checkbox.checked = false;
                }

                return BooleanController.superclass.prototype.updateDisplay.call(this);

            }


        }

    );

    return BooleanController;

})(dat.controllers.Controller,
    dat.dom.dom,
    dat.utils.common);


dat.color.toString = (function (common) {

    return function (color) {

        if (color.a == 1 || common.isUndefined(color.a)) {

            var s = color.hex.toString(16);
            while (s.length < 6) {
                s = '0' + s;
            }

            return '#' + s;

        } else {

            return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

        }

    }

})(dat.utils.common);


dat.color.interpret = (function (toString, common) {

    var result, toReturn;

    var interpret = function () {

        toReturn = false;

        var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

        common.each(INTERPRETATIONS, function (family) {

            if (family.litmus(original)) {

                common.each(family.conversions, function (conversion, conversionName) {

                    result = conversion.read(original);

                    if (toReturn === false && result !== false) {
                        toReturn = result;
                        result.conversionName = conversionName;
                        result.conversion = conversion;
                        return common.BREAK;

                    }

                });

                return common.BREAK;

            }

        });

        return toReturn;

    };

    var INTERPRETATIONS = [
        {

            litmus: common.isString,

            conversions: {

                THREE_CHAR_HEX: {

                    read: function (original) {

                        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                        if (test === null) return false;

                        return {
                            space: 'HEX',
                            hex: parseInt(
                                '0x' +
                                test[1].toString() + test[1].toString() +
                                test[2].toString() + test[2].toString() +
                                test[3].toString() + test[3].toString())
                        };

                    },

                    write: toString

                },

                SIX_CHAR_HEX: {

                    read: function (original) {

                        var test = original.match(/^#([A-F0-9]{6})$/i);
                        if (test === null) return false;

                        return {
                            space: 'HEX',
                            hex: parseInt('0x' + test[1].toString())
                        };

                    },

                    write: toString

                },

                CSS_RGB: {

                    read: function (original) {

                        var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                        if (test === null) return false;

                        return {
                            space: 'RGB',
                            r: parseFloat(test[1]),
                            g: parseFloat(test[2]),
                            b: parseFloat(test[3])
                        };

                    },

                    write: toString

                },

                CSS_RGBA: {

                    read: function (original) {

                        var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                        if (test === null) return false;

                        return {
                            space: 'RGB',
                            r: parseFloat(test[1]),
                            g: parseFloat(test[2]),
                            b: parseFloat(test[3]),
                            a: parseFloat(test[4])
                        };

                    },

                    write: toString

                }

            }

    },
        {

            litmus: common.isNumber,

            conversions: {

                HEX: {
                    read: function (original) {
                        return {
                            space: 'HEX',
                            hex: original,
                            conversionName: 'HEX'
                        }
                    },

                    write: function (color) {
                        return color.hex;
                    }
                }

            }

    },
        {

            litmus: common.isArray,

            conversions: {

                RGB_ARRAY: {
                    read: function (original) {
                        if (original.length != 3) return false;
                        return {
                            space: 'RGB',
                            r: original[0],
                            g: original[1],
                            b: original[2]
                        };
                    },

                    write: function (color) {
                        return [color.r, color.g, color.b];
                    }

                },

                RGBA_ARRAY: {
                    read: function (original) {
                        if (original.length != 4) return false;
                        return {
                            space: 'RGB',
                            r: original[0],
                            g: original[1],
                            b: original[2],
                            a: original[3]
                        };
                    },

                    write: function (color) {
                        return [color.r, color.g, color.b, color.a];
                    }

                }

            }

    },
        {

            litmus: common.isObject,

            conversions: {

                RGBA_OBJ: {
                    read: function (original) {
                        if (common.isNumber(original.r) &&
                            common.isNumber(original.g) &&
                            common.isNumber(original.b) &&
                            common.isNumber(original.a)) {
                            return {
                                space: 'RGB',
                                r: original.r,
                                g: original.g,
                                b: original.b,
                                a: original.a
                            }
                        }
                        return false;
                    },

                    write: function (color) {
                        return {
                            r: color.r,
                            g: color.g,
                            b: color.b,
                            a: color.a
                        }
                    }
                },

                RGB_OBJ: {
                    read: function (original) {
                        if (common.isNumber(original.r) &&
                            common.isNumber(original.g) &&
                            common.isNumber(original.b)) {
                            return {
                                space: 'RGB',
                                r: original.r,
                                g: original.g,
                                b: original.b
                            }
                        }
                        return false;
                    },

                    write: function (color) {
                        return {
                            r: color.r,
                            g: color.g,
                            b: color.b
                        }
                    }
                },

                HSVA_OBJ: {
                    read: function (original) {
                        if (common.isNumber(original.h) &&
                            common.isNumber(original.s) &&
                            common.isNumber(original.v) &&
                            common.isNumber(original.a)) {
                            return {
                                space: 'HSV',
                                h: original.h,
                                s: original.s,
                                v: original.v,
                                a: original.a
                            }
                        }
                        return false;
                    },

                    write: function (color) {
                        return {
                            h: color.h,
                            s: color.s,
                            v: color.v,
                            a: color.a
                        }
                    }
                },

                HSV_OBJ: {
                    read: function (original) {
                        if (common.isNumber(original.h) &&
                            common.isNumber(original.s) &&
                            common.isNumber(original.v)) {
                            return {
                                space: 'HSV',
                                h: original.h,
                                s: original.s,
                                v: original.v
                            }
                        }
                        return false;
                    },

                    write: function (color) {
                        return {
                            h: color.h,
                            s: color.s,
                            v: color.v
                        }
                    }

                }

            }

    }


  ];

    return interpret;


})(dat.color.toString,
    dat.utils.common);


dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {

    css.inject(styleSheet);
    var CSS_NAMESPACE = 'dg';

    var HIDE_KEY_CODE = 72;
    var CLOSE_BUTTON_HEIGHT = 20;

    var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

    var SUPPORTS_LOCAL_STORAGE = (function () {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    })();

    var SAVE_DIALOGUE;
    var auto_place_virgin = true;
    var auto_place_container;
    var hide = false;
    var hideable_guis = [];
    var GUI = function (params) {

        var _this = this;
        this.domElement = document.createElement('div');
        this.__ul = document.createElement('ul');
        this.domElement.appendChild(this.__ul);

        dom.addClass(this.domElement, CSS_NAMESPACE);
        this.__folders = {};

        this.__controllers = [];
        this.__rememberedObjects = [];
        this.__rememberedObjectIndecesToControllers = [];

        this.__listening = [];

        params = params || {};
        params = common.defaults(params, {
            autoPlace: true,
            width: GUI.DEFAULT_WIDTH
        });

        params = common.defaults(params, {
            resizable: params.autoPlace,
            hideable: params.autoPlace
        });


        if (!common.isUndefined(params.load)) {
            if (params.preset) params.load.preset = params.preset;

        } else {

            params.load = {
                preset: DEFAULT_DEFAULT_PRESET_NAME
            };

        }

        if (common.isUndefined(params.parent) && params.hideable) {
            hideable_guis.push(this);
        }
        params.resizable = common.isUndefined(params.parent) && params.resizable;


        if (params.autoPlace && common.isUndefined(params.scrollable)) {
            params.scrollable = true;
        }
        var use_local_storage =
            SUPPORTS_LOCAL_STORAGE &&
            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

        var saveToLocalStorage;

        Object.defineProperties(this,
            {
                parent: {
                    get: function () {
                        return params.parent;
                    }
                },

                scrollable: {
                    get: function () {
                        return params.scrollable;
                    }
                },
                autoPlace: {
                    get: function () {
                        return params.autoPlace;
                    }
                },
                preset: {

                    get: function () {
                        if (_this.parent) {
                            return _this.getRoot().preset;
                        } else {
                            return params.load.preset;
                        }
                    },

                    set: function (v) {
                        if (_this.parent) {
                            _this.getRoot().preset = v;
                        } else {
                            params.load.preset = v;
                        }
                        setPresetSelectIndex(this);
                        _this.revert();
                    }

                },
                width: {
                    get: function () {
                        return params.width;
                    },
                    set: function (v) {
                        params.width = v;
                        setWidth(_this, v);
                    }
                },
                name: {
                    get: function () {
                        return params.name;
                    },
                    set: function (v) {
                        params.name = v;
                        if (title_row_name) {
                            title_row_name.innerHTML = params.name;
                        }
                    }
                },
                closed: {
                    get: function () {
                        return params.closed;
                    },
                    set: function (v) {
                        params.closed = v;
                        if (params.closed) {
                            dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
                        } else {
                            dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
                        }
                        this.onResize();

                        if (_this.__closeButton) {
                            _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
                        }
                    }
                },
                load: {
                    get: function () {
                        return params.load;
                    }
                },
                useLocalStorage: {

                    get: function () {
                        return use_local_storage;
                    },
                    set: function (bool) {
                        if (SUPPORTS_LOCAL_STORAGE) {
                            use_local_storage = bool;
                            if (bool) {
                                dom.bind(window, 'unload', saveToLocalStorage);
                            } else {
                                dom.unbind(window, 'unload', saveToLocalStorage);
                            }
                            localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
                        }
                    }

                }

            });
        if (common.isUndefined(params.parent)) {

            params.closed = false;

            dom.addClass(this.domElement, GUI.CLASS_MAIN);
            dom.makeSelectable(this.domElement, false);
            if (SUPPORTS_LOCAL_STORAGE) {

                if (use_local_storage) {

                    _this.useLocalStorage = true;

                    var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

                    if (saved_gui) {
                        params.load = JSON.parse(saved_gui);
                    }

                }

            }

            this.__closeButton = document.createElement('div');
            this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
            dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
            this.domElement.appendChild(this.__closeButton);

            dom.bind(this.__closeButton, 'click', function () {

                _this.closed = !_this.closed;


            });
        } else {

            if (params.closed === undefined) {
                params.closed = true;
            }

            var title_row_name = document.createTextNode(params.name);
            dom.addClass(title_row_name, 'controller-name');

            var title_row = addRow(_this, title_row_name);

            var on_click_title = function (e) {
                e.preventDefault();
                _this.closed = !_this.closed;
                return false;
            };

            dom.addClass(this.__ul, GUI.CLASS_CLOSED);

            dom.addClass(title_row, 'title');
            dom.bind(title_row, 'click', on_click_title);

            if (!params.closed) {
                this.closed = false;
            }

        }

        if (params.autoPlace) {

            if (common.isUndefined(params.parent)) {

                if (auto_place_virgin) {
                    auto_place_container = document.createElement('div');
                    dom.addClass(auto_place_container, CSS_NAMESPACE);
                    dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
                    document.body.appendChild(auto_place_container);
                    auto_place_virgin = false;
                }
                auto_place_container.appendChild(this.domElement);
                dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);

            }
            if (!this.parent) setWidth(_this, params.width);

        }

        dom.bind(window, 'resize', function () {
            _this.onResize()
        });
        dom.bind(this.__ul, 'webkitTransitionEnd', function () {
            _this.onResize();
        });
        dom.bind(this.__ul, 'transitionend', function () {
            _this.onResize()
        });
        dom.bind(this.__ul, 'oTransitionEnd', function () {
            _this.onResize()
        });
        this.onResize();


        if (params.resizable) {
            addResizeHandle(this);
        }

        saveToLocalStorage = function () {
            if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
                localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
            }
        }
        this.saveToLocalStorageIfPossible = saveToLocalStorage;

        var root = _this.getRoot();

        function resetWidth() {
            var root = _this.getRoot();
            root.width += 1;
            common.defer(function () {
                root.width -= 1;
            });
        }

        if (!params.parent) {
            resetWidth();
        }

    };

    GUI.toggleHide = function () {

        hide = !hide;
        common.each(hideable_guis, function (gui) {
            gui.domElement.style.zIndex = hide ? -999 : 999;
            gui.domElement.style.opacity = hide ? 0 : 1;
        });
    };

    GUI.CLASS_AUTO_PLACE = 'a';
    GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
    GUI.CLASS_MAIN = 'main';
    GUI.CLASS_CONTROLLER_ROW = 'cr';
    GUI.CLASS_TOO_TALL = 'taller-than-window';
    GUI.CLASS_CLOSED = 'closed';
    GUI.CLASS_CLOSE_BUTTON = 'close-button';
    GUI.CLASS_DRAG = 'drag';

    GUI.DEFAULT_WIDTH = 245;
    GUI.TEXT_CLOSED = 'Close Controls';
    GUI.TEXT_OPEN = 'Open Controls';

    dom.bind(window, 'keydown', function (e) {

        if (document.activeElement.type !== 'text' &&
            (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
            GUI.toggleHide();
        }

    }, false);

    common.extend(

        GUI.prototype,
        {
            add: function (object, property) {

                return add(
                    this,
                    object,
                    property, {
                        factoryArgs: Array.prototype.slice.call(arguments, 2)
                    }
                );

            },
            addColor: function (object, property) {

                return add(
                    this,
                    object,
                    property, {
                        color: true
                    }
                );

            },
            remove: function (controller) {
                this.__ul.removeChild(controller.__li);
                this.__controllers.slice(this.__controllers.indexOf(controller), 1);
                var _this = this;
                common.defer(function () {
                    _this.onResize();
                });

            },

            destroy: function () {

                if (this.autoPlace) {
                    auto_place_container.removeChild(this.domElement);
                }

            },
            addFolder: function (name) {
                if (this.__folders[name] !== undefined) {
                    throw new Error('You already have a folder in this GUI by the' +
                        ' name "' + name + '"');
                }

                var new_gui_params = {
                    name: name,
                    parent: this
                };
                new_gui_params.autoPlace = this.autoPlace;

                if (this.load && // Anything loaded?
                    this.load.folders && // Was my parent a dead-end?
                    this.load.folders[name]) { // Did daddy remember me?
                    new_gui_params.closed = this.load.folders[name].closed;
                    new_gui_params.load = this.load.folders[name];

                }

                var gui = new GUI(new_gui_params);
                this.__folders[name] = gui;

                var li = addRow(this, gui.domElement);
                dom.addClass(li, 'folder');
                return gui;

            },

            open: function () {
                this.closed = false;
            },

            close: function () {
                this.closed = true;
            },

            onResize: function () {

                var root = this.getRoot();

                if (root.scrollable) {

                    var top = dom.getOffset(root.__ul).top;
                    var h = 0;

                    common.each(root.__ul.childNodes, function (node) {
                        if (!(root.autoPlace && node === root.__save_row))
                            h += dom.getHeight(node);
                    });

                    if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
                        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
                        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
                    } else {
                        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
                        root.__ul.style.height = 'auto';
                    }

                }

                if (root.__resize_handle) {
                    common.defer(function () {
                        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
                    });
                }

                if (root.__closeButton) {
                    root.__closeButton.style.width = root.width + 'px';
                }

            },
            remember: function () {

                if (common.isUndefined(SAVE_DIALOGUE)) {
                    SAVE_DIALOGUE = new CenteredDiv();
                    SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
                }

                if (this.parent) {
                    throw new Error("You can only call remember on a top level GUI.");
                }

                var _this = this;

                common.each(Array.prototype.slice.call(arguments), function (object) {
                    if (_this.__rememberedObjects.length == 0) {
                        addSaveMenu(_this);
                    }
                    if (_this.__rememberedObjects.indexOf(object) == -1) {
                        _this.__rememberedObjects.push(object);
                    }
                });

                if (this.autoPlace) {
                    setWidth(this, this.width);
                }

            },
            getRoot: function () {
                var gui = this;
                while (gui.parent) {
                    gui = gui.parent;
                }
                return gui;
            },
            getSaveObject: function () {

                var toReturn = this.load;

                toReturn.closed = this.closed;
                if (this.__rememberedObjects.length > 0) {

                    toReturn.preset = this.preset;

                    if (!toReturn.remembered) {
                        toReturn.remembered = {};
                    }

                    toReturn.remembered[this.preset] = getCurrentPreset(this);

                }

                toReturn.folders = {};
                common.each(this.__folders, function (element, key) {
                    toReturn.folders[key] = element.getSaveObject();
                });

                return toReturn;

            },

            save: function () {

                if (!this.load.remembered) {
                    this.load.remembered = {};
                }

                this.load.remembered[this.preset] = getCurrentPreset(this);
                markPresetModified(this, false);
                this.saveToLocalStorageIfPossible();

            },

            saveAs: function (presetName) {

                if (!this.load.remembered) {
                    this.load.remembered = {};
                    this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);

                }

                this.load.remembered[presetName] = getCurrentPreset(this);
                this.preset = presetName;
                addPresetOption(this, presetName, true);
                this.saveToLocalStorageIfPossible();

            },

            revert: function (gui) {

                common.each(this.__controllers, function (controller) {
                    if (!this.getRoot().load.remembered) {
                        controller.setValue(controller.initialValue);
                    } else {
                        recallSavedValue(gui || this.getRoot(), controller);
                    }
                }, this);

                common.each(this.__folders, function (folder) {
                    folder.revert(folder);
                });

                if (!gui) {
                    markPresetModified(this.getRoot(), false);
                }


            },

            listen: function (controller) {

                var init = this.__listening.length == 0;
                this.__listening.push(controller);
                if (init) updateDisplays(this.__listening);

            }

        }

    );

    function add(gui, object, property, params) {

        if (object[property] === undefined) {
            throw new Error("Object " + object + " has no property \"" + property + "\"");
        }

        var controller;

        if (params.color) {

            controller = new ColorController(object, property);

        } else {

            var factoryArgs = [object, property].concat(params.factoryArgs);
            controller = controllerFactory.apply(gui, factoryArgs);

        }

        if (params.before instanceof Controller) {
            params.before = params.before.__li;
        }

        recallSavedValue(gui, controller);

        dom.addClass(controller.domElement, 'c');

        var name = document.createElement('span');
        dom.addClass(name, 'property-name');
        name.innerHTML = controller.property;

        var container = document.createElement('div');
        container.appendChild(name);
        container.appendChild(controller.domElement);

        var li = addRow(gui, container, params.before);

        dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
        dom.addClass(li, typeof controller.getValue());

        augmentController(gui, li, controller);

        gui.__controllers.push(controller);

        return controller;

    }
    function addRow(gui, dom, liBefore) {
        var li = document.createElement('li');
        if (dom) li.appendChild(dom);
        if (liBefore) {
            gui.__ul.insertBefore(li, params.before);
        } else {
            gui.__ul.appendChild(li);
        }
        gui.onResize();
        return li;
    }

    function augmentController(gui, li, controller) {

        controller.__li = li;
        controller.__gui = gui;

        common.extend(controller, {

            options: function (options) {

                if (arguments.length > 1) {
                    controller.remove();

                    return add(
                        gui,
                        controller.object,
                        controller.property, {
                            before: controller.__li.nextElementSibling,
                            factoryArgs: [common.toArray(arguments)]
                        }
                    );

                }

                if (common.isArray(options) || common.isObject(options)) {
                    controller.remove();

                    return add(
                        gui,
                        controller.object,
                        controller.property, {
                            before: controller.__li.nextElementSibling,
                            factoryArgs: [options]
                        }
                    );

                }

            },

            name: function (v) {
                controller.__li.firstElementChild.firstElementChild.innerHTML = v;
                return controller;
            },

            listen: function () {
                controller.__gui.listen(controller);
                return controller;
            },

            remove: function () {
                controller.__gui.remove(controller);
                return controller;
            }

        });
        if (controller instanceof NumberControllerSlider) {

            var box = new NumberControllerBox(controller.object, controller.property, {
                min: controller.__min,
                max: controller.__max,
                step: controller.__step
            });

            common.each(['updateDisplay', 'onChange', 'onFinishChange'], function (method) {
                var pc = controller[method];
                var pb = box[method];
                controller[method] = box[method] = function () {
                    var args = Array.prototype.slice.call(arguments);
                    pc.apply(controller, args);
                    return pb.apply(box, args);
                }
            });

            dom.addClass(li, 'has-slider');
            controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);

        } else if (controller instanceof NumberControllerBox) {

            var r = function (returned) {
                if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {
                    controller.remove();
                    return add(
                        gui,
                        controller.object,
                        controller.property, {
                            before: controller.__li.nextElementSibling,
                            factoryArgs: [controller.__min, controller.__max, controller.__step]
                        });

                }

                return returned;

            };

            controller.min = common.compose(r, controller.min);
            controller.max = common.compose(r, controller.max);

        } else if (controller instanceof BooleanController) {

            dom.bind(li, 'click', function () {
                dom.fakeEvent(controller.__checkbox, 'click');
            });

            dom.bind(controller.__checkbox, 'click', function (e) {
                e.stopPropagation(); // Prevents double-toggle
            })

        } else if (controller instanceof FunctionController) {

            dom.bind(li, 'click', function () {
                dom.fakeEvent(controller.__button, 'click');
            });

            dom.bind(li, 'mouseover', function () {
                dom.addClass(controller.__button, 'hover');
            });

            dom.bind(li, 'mouseout', function () {
                dom.removeClass(controller.__button, 'hover');
            });

        } else if (controller instanceof ColorController) {

            dom.addClass(li, 'color');
            controller.updateDisplay = common.compose(function (r) {
                li.style.borderLeftColor = controller.__color.toString();
                return r;
            }, controller.updateDisplay);

            controller.updateDisplay();

        }

        controller.setValue = common.compose(function (r) {
            if (gui.getRoot().__preset_select && controller.isModified()) {
                markPresetModified(gui.getRoot(), true);
            }
            return r;
        }, controller.setValue);

    }

    function recallSavedValue(gui, controller) {
        var root = gui.getRoot();
        var matched_index = root.__rememberedObjects.indexOf(controller.object);
        if (matched_index != -1) {
            var controller_map =
                root.__rememberedObjectIndecesToControllers[matched_index];
            if (controller_map === undefined) {
                controller_map = {};
                root.__rememberedObjectIndecesToControllers[matched_index] =
                    controller_map;
            }
            controller_map[controller.property] = controller;
            if (root.load && root.load.remembered) {

                var preset_map = root.load.remembered;
                var preset;

                if (preset_map[gui.preset]) {

                    preset = preset_map[gui.preset];

                } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {
                    preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];

                } else {

                    return;

                }
                if (preset[matched_index] &&
                    preset[matched_index][controller.property] !== undefined) {
                    var value = preset[matched_index][controller.property];
                    controller.initialValue = value;
                    controller.setValue(value);

                }

            }

        }

    }

    function getLocalStorageHash(gui, key) {
        return document.location.href + '.' + key;

    }

    function addSaveMenu(gui) {

        var div = gui.__save_row = document.createElement('li');

        dom.addClass(gui.domElement, 'has-save');

        gui.__ul.insertBefore(div, gui.__ul.firstChild);

        dom.addClass(div, 'save-row');

        var gears = document.createElement('span');
        gears.innerHTML = '&nbsp;';
        dom.addClass(gears, 'button gears');
        var button = document.createElement('span');
        button.innerHTML = 'Save';
        dom.addClass(button, 'button');
        dom.addClass(button, 'save');

        var button2 = document.createElement('span');
        button2.innerHTML = 'New';
        dom.addClass(button2, 'button');
        dom.addClass(button2, 'save-as');

        var button3 = document.createElement('span');
        button3.innerHTML = 'Revert';
        dom.addClass(button3, 'button');
        dom.addClass(button3, 'revert');

        var select = gui.__preset_select = document.createElement('select');

        if (gui.load && gui.load.remembered) {

            common.each(gui.load.remembered, function (value, key) {
                addPresetOption(gui, key, key == gui.preset);
            });

        } else {
            addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
        }

        dom.bind(select, 'change', function () {


            for (var index = 0; index < gui.__preset_select.length; index++) {
                gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
            }

            gui.preset = this.value;

        });

        div.appendChild(select);
        div.appendChild(gears);
        div.appendChild(button);
        div.appendChild(button2);
        div.appendChild(button3);

        if (SUPPORTS_LOCAL_STORAGE) {

            var saveLocally = document.getElementById('dg-save-locally');
            var explain = document.getElementById('dg-local-explain');

            saveLocally.style.display = 'block';

            var localStorageCheckBox = document.getElementById('dg-local-storage');

            if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
                localStorageCheckBox.setAttribute('checked', 'checked');
            }

            function showHideExplain() {
                explain.style.display = gui.useLocalStorage ? 'block' : 'none';
            }

            showHideExplain();
            dom.bind(localStorageCheckBox, 'change', function () {
                gui.useLocalStorage = !gui.useLocalStorage;
                showHideExplain();
            });

        }

        var newConstructorTextArea = document.getElementById('dg-new-constructor');

        dom.bind(newConstructorTextArea, 'keydown', function (e) {
            if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
                SAVE_DIALOGUE.hide();
            }
        });

        dom.bind(gears, 'click', function () {
            newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
            SAVE_DIALOGUE.show();
            newConstructorTextArea.focus();
            newConstructorTextArea.select();
        });

        dom.bind(button, 'click', function () {
            gui.save();
        });

        dom.bind(button2, 'click', function () {
            var presetName = prompt('Enter a new preset name.');
            if (presetName) gui.saveAs(presetName);
        });

        dom.bind(button3, 'click', function () {
            gui.revert();
        });

    }

    function addResizeHandle(gui) {

        gui.__resize_handle = document.createElement('div');

        common.extend(gui.__resize_handle.style, {

            width: '6px',
            marginLeft: '-3px',
            height: '200px',
            cursor: 'ew-resize',
            position: 'absolute'

        });

        var pmouseX;

        dom.bind(gui.__resize_handle, 'mousedown', dragStart);
        dom.bind(gui.__closeButton, 'mousedown', dragStart);

        gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

        function dragStart(e) {

            e.preventDefault();

            pmouseX = e.clientX;

            dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
            dom.bind(window, 'mousemove', drag);
            dom.bind(window, 'mouseup', dragStop);

            return false;

        }

        function drag(e) {

            e.preventDefault();

            gui.width += pmouseX - e.clientX;
            gui.onResize();
            pmouseX = e.clientX;

            return false;

        }

        function dragStop() {

            dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
            dom.unbind(window, 'mousemove', drag);
            dom.unbind(window, 'mouseup', dragStop);

        }

    }

    function setWidth(gui, w) {
        gui.domElement.style.width = w + 'px';
        if (gui.__save_row && gui.autoPlace) {
            gui.__save_row.style.width = w + 'px';
        }
        if (gui.__closeButton) {
            gui.__closeButton.style.width = w + 'px';
        }
    }

    function getCurrentPreset(gui, useInitialValues) {

        var toReturn = {};
        common.each(gui.__rememberedObjects, function (val, index) {

            var saved_values = {};
            var controller_map =
                gui.__rememberedObjectIndecesToControllers[index];
            common.each(controller_map, function (controller, property) {
                saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
            });
            toReturn[index] = saved_values;

        });

        return toReturn;

    }

    function addPresetOption(gui, name, setSelected) {
        var opt = document.createElement('option');
        opt.innerHTML = name;
        opt.value = name;
        gui.__preset_select.appendChild(opt);
        if (setSelected) {
            gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
        }
    }

    function setPresetSelectIndex(gui) {
        for (var index = 0; index < gui.__preset_select.length; index++) {
            if (gui.__preset_select[index].value == gui.preset) {
                gui.__preset_select.selectedIndex = index;
            }
        }
    }

    function markPresetModified(gui, modified) {
        var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
        if (modified) {
            opt.innerHTML = opt.value + "*";
        } else {
            opt.innerHTML = opt.value;
        }
    }

    function updateDisplays(controllerArray) {


        if (controllerArray.length != 0) {

            requestAnimationFrame(function () {
                updateDisplays(controllerArray);
            });

        }

        common.each(controllerArray, function (c) {
            c.updateDisplay();
        });

    }

    return GUI;

})(dat.utils.css,
    "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
    ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n",
    dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {

        return function (object, property) {

            var initialValue = object[property];
            if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
                return new OptionController(object, property, arguments[2]);
            }

            if (common.isNumber(initialValue)) {

                if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {
                    return new NumberControllerSlider(object, property, arguments[2], arguments[3]);

                } else {

                    return new NumberControllerBox(object, property, {
                        min: arguments[2],
                        max: arguments[3]
                    });

                }

            }

            if (common.isString(initialValue)) {
                return new StringController(object, property);
            }

            if (common.isFunction(initialValue)) {
                return new FunctionController(object, property, '');
            }

            if (common.isBoolean(initialValue)) {
                return new BooleanController(object, property);
            }

        }

    })(dat.controllers.OptionController,
        dat.controllers.NumberControllerBox,
        dat.controllers.NumberControllerSlider,
        dat.controllers.StringController = (function (Controller, dom, common) {
            var StringController = function (object, property) {

                StringController.superclass.call(this, object, property);

                var _this = this;

                this.__input = document.createElement('input');
                this.__input.setAttribute('type', 'text');

                dom.bind(this.__input, 'keyup', onChange);
                dom.bind(this.__input, 'change', onChange);
                dom.bind(this.__input, 'blur', onBlur);
                dom.bind(this.__input, 'keydown', function (e) {
                    if (e.keyCode === 13) {
                        this.blur();
                    }
                });


                function onChange() {
                    _this.setValue(_this.__input.value);
                }

                function onBlur() {
                    if (_this.__onFinishChange) {
                        _this.__onFinishChange.call(_this, _this.getValue());
                    }
                }

                this.updateDisplay();

                this.domElement.appendChild(this.__input);

            };

            StringController.superclass = Controller;

            common.extend(

                StringController.prototype,
                Controller.prototype,

                {

                    updateDisplay: function () {
                        if (!dom.isActive(this.__input)) {
                            this.__input.value = this.getValue();
                        }
                        return StringController.superclass.prototype.updateDisplay.call(this);
                    }

                }

            );

            return StringController;

        })(dat.controllers.Controller,
            dat.dom.dom,
            dat.utils.common),
        dat.controllers.FunctionController,
        dat.controllers.BooleanController,
        dat.utils.common),
    dat.controllers.Controller,
    dat.controllers.BooleanController,
    dat.controllers.FunctionController,
    dat.controllers.NumberControllerBox,
    dat.controllers.NumberControllerSlider,
    dat.controllers.OptionController,
    dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {

        var ColorController = function (object, property) {

            ColorController.superclass.call(this, object, property);

            this.__color = new Color(this.getValue());
            this.__temp = new Color(0);

            var _this = this;

            this.domElement = document.createElement('div');

            dom.makeSelectable(this.domElement, false);

            this.__selector = document.createElement('div');
            this.__selector.className = 'selector';

            this.__saturation_field = document.createElement('div');
            this.__saturation_field.className = 'saturation-field';

            this.__field_knob = document.createElement('div');
            this.__field_knob.className = 'field-knob';
            this.__field_knob_border = '2px solid ';

            this.__hue_knob = document.createElement('div');
            this.__hue_knob.className = 'hue-knob';

            this.__hue_field = document.createElement('div');
            this.__hue_field.className = 'hue-field';

            this.__input = document.createElement('input');
            this.__input.type = 'text';
            this.__input_textShadow = '0 1px 1px ';

            dom.bind(this.__input, 'keydown', function (e) {
                if (e.keyCode === 13) { // on enter
                    onBlur.call(this);
                }
            });

            dom.bind(this.__input, 'blur', onBlur);

            dom.bind(this.__selector, 'mousedown', function (e) {

                dom
                    .addClass(this, 'drag')
                    .bind(window, 'mouseup', function (e) {
                        dom.removeClass(_this.__selector, 'drag');
                    });

            });

            var value_field = document.createElement('div');

            common.extend(this.__selector.style, {
                width: '122px',
                height: '102px',
                padding: '3px',
                backgroundColor: '#222',
                boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
            });

            common.extend(this.__field_knob.style, {
                position: 'absolute',
                width: '12px',
                height: '12px',
                border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
                boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
                borderRadius: '12px',
                zIndex: 1
            });

            common.extend(this.__hue_knob.style, {
                position: 'absolute',
                width: '15px',
                height: '2px',
                borderRight: '4px solid #fff',
                zIndex: 1
            });

            common.extend(this.__saturation_field.style, {
                width: '100px',
                height: '100px',
                border: '1px solid #555',
                marginRight: '3px',
                display: 'inline-block',
                cursor: 'pointer'
            });

            common.extend(value_field.style, {
                width: '100%',
                height: '100%',
                background: 'none'
            });

            linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');

            common.extend(this.__hue_field.style, {
                width: '15px',
                height: '100px',
                display: 'inline-block',
                border: '1px solid #555',
                cursor: 'ns-resize'
            });

            hueGradient(this.__hue_field);

            common.extend(this.__input.style, {
                outline: 'none',
                textAlign: 'center',
                color: '#fff',
                border: 0,
                fontWeight: 'bold',
                textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
            });

            dom.bind(this.__saturation_field, 'mousedown', fieldDown);
            dom.bind(this.__field_knob, 'mousedown', fieldDown);

            dom.bind(this.__hue_field, 'mousedown', function (e) {
                setH(e);
                dom.bind(window, 'mousemove', setH);
                dom.bind(window, 'mouseup', unbindH);
            });

            function fieldDown(e) {
                setSV(e);
                dom.bind(window, 'mousemove', setSV);
                dom.bind(window, 'mouseup', unbindSV);
            }

            function unbindSV() {
                dom.unbind(window, 'mousemove', setSV);
                dom.unbind(window, 'mouseup', unbindSV);
            }

            function onBlur() {
                var i = interpret(this.value);
                if (i !== false) {
                    _this.__color.__state = i;
                    _this.setValue(_this.__color.toOriginal());
                } else {
                    this.value = _this.__color.toString();
                }
            }

            function unbindH() {
                dom.unbind(window, 'mousemove', setH);
                dom.unbind(window, 'mouseup', unbindH);
            }

            this.__saturation_field.appendChild(value_field);
            this.__selector.appendChild(this.__field_knob);
            this.__selector.appendChild(this.__saturation_field);
            this.__selector.appendChild(this.__hue_field);
            this.__hue_field.appendChild(this.__hue_knob);

            this.domElement.appendChild(this.__input);
            this.domElement.appendChild(this.__selector);

            this.updateDisplay();

            function setSV(e) {

                e.preventDefault();

                var w = dom.getWidth(_this.__saturation_field);
                var o = dom.getOffset(_this.__saturation_field);
                var s = (e.clientX - o.left + document.body.scrollLeft) / w;
                var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;

                if (v > 1) v = 1;
                else if (v < 0) v = 0;

                if (s > 1) s = 1;
                else if (s < 0) s = 0;

                _this.__color.v = v;
                _this.__color.s = s;

                _this.setValue(_this.__color.toOriginal());


                return false;

            }

            function setH(e) {

                e.preventDefault();

                var s = dom.getHeight(_this.__hue_field);
                var o = dom.getOffset(_this.__hue_field);
                var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;

                if (h > 1) h = 1;
                else if (h < 0) h = 0;

                _this.__color.h = h * 360;

                _this.setValue(_this.__color.toOriginal());

                return false;

            }

        };

        ColorController.superclass = Controller;

        common.extend(

            ColorController.prototype,
            Controller.prototype,

            {

                updateDisplay: function () {

                    var i = interpret(this.getValue());

                    if (i !== false) {

                        var mismatch = false;

                        common.each(Color.COMPONENTS, function (component) {
                            if (!common.isUndefined(i[component]) &&
                                !common.isUndefined(this.__color.__state[component]) &&
                                i[component] !== this.__color.__state[component]) {
                                mismatch = true;
                                return {}; // break
                            }
                        }, this);
                        if (mismatch) {
                            common.extend(this.__color.__state, i);
                        }

                    }

                    common.extend(this.__temp.__state, this.__color.__state);

                    this.__temp.a = 1;

                    var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
                    var _flip = 255 - flip;

                    common.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + 'px',
                        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
                        backgroundColor: this.__temp.toString(),
                        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
                    });

                    this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'

                    this.__temp.s = 1;
                    this.__temp.v = 1;

                    linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());

                    common.extend(this.__input.style, {
                        backgroundColor: this.__input.value = this.__color.toString(),
                        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
                        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
                    });

                }

            }

        );

        var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];

        function linearGradient(elem, x, a, b) {
            elem.style.background = '';
            common.each(vendors, function (vendor) {
                elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
            });
        }

        function hueGradient(elem) {
            elem.style.background = '';
            elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
            elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
            elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
            elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
            elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
        }


        return ColorController;

    })(dat.controllers.Controller,
        dat.dom.dom,
        dat.color.Color = (function (interpret, math, toString, common) {

            var Color = function () {

                this.__state = interpret.apply(this, arguments);

                if (this.__state === false) {
                    throw 'Failed to interpret color arguments';
                }

                this.__state.a = this.__state.a || 1;


            };

            Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];

            common.extend(Color.prototype, {

                toString: function () {
                    return toString(this);
                },

                toOriginal: function () {
                    return this.__state.conversion.write(this);
                }

            });

            defineRGBComponent(Color.prototype, 'r', 2);
            defineRGBComponent(Color.prototype, 'g', 1);
            defineRGBComponent(Color.prototype, 'b', 0);

            defineHSVComponent(Color.prototype, 'h');
            defineHSVComponent(Color.prototype, 's');
            defineHSVComponent(Color.prototype, 'v');

            Object.defineProperty(Color.prototype, 'a', {

                get: function () {
                    return this.__state.a;
                },

                set: function (v) {
                    this.__state.a = v;
                }

            });

            Object.defineProperty(Color.prototype, 'hex', {

                get: function () {

                    if (!this.__state.space !== 'HEX') {
                        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
                    }

                    return this.__state.hex;

                },

                set: function (v) {

                    this.__state.space = 'HEX';
                    this.__state.hex = v;

                }

            });

            function defineRGBComponent(target, component, componentHexIndex) {

                Object.defineProperty(target, component, {

                    get: function () {

                        if (this.__state.space === 'RGB') {
                            return this.__state[component];
                        }

                        recalculateRGB(this, component, componentHexIndex);

                        return this.__state[component];

                    },

                    set: function (v) {

                        if (this.__state.space !== 'RGB') {
                            recalculateRGB(this, component, componentHexIndex);
                            this.__state.space = 'RGB';
                        }

                        this.__state[component] = v;

                    }

                });

            }

            function defineHSVComponent(target, component) {

                Object.defineProperty(target, component, {

                    get: function () {

                        if (this.__state.space === 'HSV')
                            return this.__state[component];

                        recalculateHSV(this);

                        return this.__state[component];

                    },

                    set: function (v) {

                        if (this.__state.space !== 'HSV') {
                            recalculateHSV(this);
                            this.__state.space = 'HSV';
                        }

                        this.__state[component] = v;

                    }

                });

            }

            function recalculateRGB(color, component, componentHexIndex) {

                if (color.__state.space === 'HEX') {

                    color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

                } else if (color.__state.space === 'HSV') {

                    common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

                } else {

                    throw 'Corrupted color state';

                }

            }

            function recalculateHSV(color) {

                var result = math.rgb_to_hsv(color.r, color.g, color.b);

                common.extend(color.__state, {
                    s: result.s,
                    v: result.v
                });

                if (!common.isNaN(result.h)) {
                    color.__state.h = result.h;
                } else if (common.isUndefined(color.__state.h)) {
                    color.__state.h = 0;
                }

            }

            return Color;

        })(dat.color.interpret,
            dat.color.math = (function () {

                var tmpComponent;

                return {

                    hsv_to_rgb: function (h, s, v) {

                        var hi = Math.floor(h / 60) % 6;

                        var f = h / 60 - Math.floor(h / 60);
                        var p = v * (1.0 - s);
                        var q = v * (1.0 - (f * s));
                        var t = v * (1.0 - ((1.0 - f) * s));
                        var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

                        return {
                            r: c[0] * 255,
                            g: c[1] * 255,
                            b: c[2] * 255
                        };

                    },

                    rgb_to_hsv: function (r, g, b) {

                        var min = Math.min(r, g, b),
                            max = Math.max(r, g, b),
                            delta = max - min,
                            h, s;

                        if (max != 0) {
                            s = delta / max;
                        } else {
                            return {
                                h: NaN,
                                s: 0,
                                v: 0
                            };
                        }

                        if (r == max) {
                            h = (g - b) / delta;
                        } else if (g == max) {
                            h = 2 + (b - r) / delta;
                        } else {
                            h = 4 + (r - g) / delta;
                        }
                        h /= 6;
                        if (h < 0) {
                            h += 1;
                        }

                        return {
                            h: h * 360,
                            s: s,
                            v: max / 255
                        };
                    },

                    rgb_to_hex: function (r, g, b) {
                        var hex = this.hex_with_component(0, 2, r);
                        hex = this.hex_with_component(hex, 1, g);
                        hex = this.hex_with_component(hex, 0, b);
                        return hex;
                    },

                    component_from_hex: function (hex, componentIndex) {
                        return (hex >> (componentIndex * 8)) & 0xFF;
                    },

                    hex_with_component: function (hex, componentIndex, value) {
                        return value << (tmpComponent = componentIndex * 8) | (hex & ~(0xFF << tmpComponent));
                    }

                }

            })(),
            dat.color.toString,
            dat.utils.common),
        dat.color.interpret,
        dat.utils.common),
    dat.utils.requestAnimationFrame = (function () {

        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback, element) {

                window.setTimeout(callback, 1000 / 60);

            };
    })(),
    dat.dom.CenteredDiv = (function (dom, common) {


        var CenteredDiv = function () {

            this.backgroundElement = document.createElement('div');
            common.extend(this.backgroundElement.style, {
                backgroundColor: 'rgba(0,0,0,0.8)',
                top: 0,
                left: 0,
                display: 'none',
                zIndex: '1000',
                opacity: 0,
                WebkitTransition: 'opacity 0.2s linear'
            });

            dom.makeFullscreen(this.backgroundElement);
            this.backgroundElement.style.position = 'fixed';

            this.domElement = document.createElement('div');
            common.extend(this.domElement.style, {
                position: 'fixed',
                display: 'none',
                zIndex: '1001',
                opacity: 0,
                WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
            });


            document.body.appendChild(this.backgroundElement);
            document.body.appendChild(this.domElement);

            var _this = this;
            dom.bind(this.backgroundElement, 'click', function () {
                _this.hide();
            });


        };

        CenteredDiv.prototype.show = function () {

            var _this = this;



            this.backgroundElement.style.display = 'block';

            this.domElement.style.display = 'block';
            this.domElement.style.opacity = 0;
            this.domElement.style.webkitTransform = 'scale(1.1)';

            this.layout();

            common.defer(function () {
                _this.backgroundElement.style.opacity = 1;
                _this.domElement.style.opacity = 1;
                _this.domElement.style.webkitTransform = 'scale(1)';
            });

        };

        CenteredDiv.prototype.hide = function () {

            var _this = this;

            var hide = function () {

                _this.domElement.style.display = 'none';
                _this.backgroundElement.style.display = 'none';

                dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
                dom.unbind(_this.domElement, 'transitionend', hide);
                dom.unbind(_this.domElement, 'oTransitionEnd', hide);

            };

            dom.bind(this.domElement, 'webkitTransitionEnd', hide);
            dom.bind(this.domElement, 'transitionend', hide);
            dom.bind(this.domElement, 'oTransitionEnd', hide);

            this.backgroundElement.style.opacity = 0;
            this.domElement.style.opacity = 0;
            this.domElement.style.webkitTransform = 'scale(1.1)';

        };

        CenteredDiv.prototype.layout = function () {
            this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
            this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
        };

        function lockScroll(e) {
            
        }

        return CenteredDiv;

    })(dat.dom.dom,
        dat.utils.common),
    dat.dom.dom,
    dat.utils.common);

(function (p2) {
    var requestAnimFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };

    var disableSelectionCSS = [
    "-ms-user-select: none",
    "-moz-user-select: -moz-none",
    "-khtml-user-select: none",
    "-webkit-user-select: none",
    "user-select: none"
];

    p2.Renderer = Renderer;
    function Renderer(scenes, options) {
        p2.EventEmitter.call(this);

        options = options || {};
        window.app = this;

        var that = this;

        if (scenes.setup) {
            scenes = {
                'default': scenes
            };
        } else if (typeof (scenes) === 'function') {
            scenes = {
                'default': {
                    setup: scenes
                }
            };
        }

        this.scenes = scenes;

        this.state = Renderer.DEFAULT;
        this.bodies = [];
        this.springs = [];
        this.timeStep = 1 / 60;
        this.relaxation = p2.Equation.DEFAULT_RELAXATION;
        this.stiffness = p2.Equation.DEFAULT_STIFFNESS;

        this.mouseConstraint = null;
        this.nullBody = new p2.Body();
        this.pickPrecision = 5;

        this.useInterpolatedPositions = true;

        this.drawPoints = [];
        this.drawPointsChangeEvent = {
            type: "drawPointsChange"
        };
        this.drawCircleCenter = p2.vec2.create();
        this.drawCirclePoint = p2.vec2.create();
        this.drawCircleChangeEvent = {
            type: "drawCircleChange"
        };
        this.drawRectangleChangeEvent = {
            type: "drawRectangleChange"
        };
        this.drawRectStart = p2.vec2.create();
        this.drawRectEnd = p2.vec2.create();

        this.stateChangeEvent = {
            type: "stateChange",
            state: null
        };
        this.newShapeCollisionMask = 1;
        this.newShapeCollisionGroup = 1;
        this.drawConstraints = false;

        this.stats_sum = 0;
        this.stats_N = 100;
        this.stats_Nsummed = 0;
        this.stats_average = -1;

        this.addedGlobals = [];

        this.settings = {
            tool: Renderer.DEFAULT,
            fullscreen: function () {
                var el = document.body;
                var requestFullscreen = el.requestFullscreen || el.msRequestFullscreen || el.mozRequestFullScreen || el.webkitRequestFullscreen;
                if (requestFullscreen) {
                    requestFullscreen.call(el);
                }
            },

            'paused [p]': false,
            'manualStep [s]': function () {
                that.world.step(that.world.lastTimeStep);
            },
            fps: 60,
            maxSubSteps: 3,
            gravityX: 0,
            gravityY: -10,
            sleepMode: p2.World.NO_SLEEPING,

            'drawContacts [c]': false,
            'drawAABBs [t]': false,
            drawConstraints: false,

            iterations: 10,
            stiffness: 1000000,
            relaxation: 4,
            tolerance: 0.0001,
        };

        this.init();
        this.resizeToFit();
        this.render();
        this.createStats();
        this.addLogo();
        this.centerCamera(0, 0);

        window.onresize = function () {
            that.resizeToFit();
        };

        this.setUpKeyboard();
        this.setupGUI();

        if (typeof (options.hideGUI) === 'undefined') {
            options.hideGUI = 'auto';
        }
        if ((options.hideGUI === 'auto' && window.innerWidth < 600) || options.hideGUI === true) {
            this.gui.close();
        }

        this.printConsoleMessage();
        this.setSceneByIndex(0);

        this.startRenderingLoop();

    }
    Renderer.prototype = new p2.EventEmitter();

    Renderer.DEFAULT = 1;
    Renderer.PANNING = 2;
    Renderer.DRAGGING = 3;
    Renderer.DRAWPOLYGON = 4;
    Renderer.DRAWINGPOLYGON = 5;
    Renderer.DRAWCIRCLE = 6;
    Renderer.DRAWINGCIRCLE = 7;
    Renderer.DRAWRECTANGLE = 8;
    Renderer.DRAWINGRECTANGLE = 9;

    Renderer.toolStateMap = {
        'pick/pan [q]': Renderer.DEFAULT,
        'polygon [d]': Renderer.DRAWPOLYGON,
        'circle [a]': Renderer.DRAWCIRCLE,
        'rectangle [f]': Renderer.DRAWRECTANGLE
    };
    Renderer.stateToolMap = {};
    for (var key in Renderer.toolStateMap) {
        Renderer.stateToolMap[Renderer.toolStateMap[key]] = key;
    }

    Renderer.keydownEvent = {
        type: "keydown",
        originalEvent: null,
        keyCode: 0,
    };
    Renderer.keyupEvent = {
        type: "keyup",
        originalEvent: null,
        keyCode: 0,
    };

    Object.defineProperty(Renderer.prototype, 'drawContacts', {
        get: function () {
            return this.settings['drawContacts [c]'];
        },
        set: function (value) {
            this.settings['drawContacts [c]'] = value;
            this.updateGUI();
        }
    });

    Object.defineProperty(Renderer.prototype, 'drawAABBs', {
        get: function () {
            return this.settings['drawAABBs [t]'];
        },
        set: function (value) {
            this.settings['drawAABBs [t]'] = value;
            this.updateGUI();
        }
    });

    Object.defineProperty(Renderer.prototype, 'paused', {
        get: function () {
            return this.settings['paused [p]'];
        },
        set: function (value) {
            this.resetCallTime = true;
            this.settings['paused [p]'] = value;
            this.updateGUI();
        }
    });

    Renderer.prototype.getDevicePixelRatio = function () {
        return window.devicePixelRatio || 1;
    };

    Renderer.prototype.printConsoleMessage = function () {
        console.log([
        '=== p2.js v' + p2.version + ' ===',
        'Welcome to the p2.js debugging environment!',
        'Did you know you can interact with the physics here in the console? Try executing the following:',
        '',
        '  world.gravity[1] = 10;',
        ''
    ].join('\n'));
    };

    Renderer.prototype.resizeToFit = function () {
        var dpr = this.getDevicePixelRatio();
        var rect = this.elementContainer.getBoundingClientRect();
        var w = rect.width * dpr;
        var h = rect.height * dpr;
        this.resize(w, h);
    }
    Renderer.prototype.setupGUI = function () {
        if (typeof (dat) === 'undefined') {
            return;
        }

        var that = this;

        var gui = this.gui = new dat.GUI();
        gui.domElement.setAttribute('style', disableSelectionCSS.join(';'));

        var settings = this.settings;

        gui.add(settings, 'tool', Renderer.toolStateMap).onChange(function (state) {
            that.setState(parseInt(state));
        });
        gui.add(settings, 'fullscreen');
        var worldFolder = gui.addFolder('World');
        worldFolder.open();
        worldFolder.add(settings, 'paused [p]').onChange(function (p) {
            that.paused = p;
        });
        worldFolder.add(settings, 'manualStep [s]');
        worldFolder.add(settings, 'fps', 10, 60 * 10).step(10).onChange(function (freq) {
            that.timeStep = 1 / freq;
        });
        worldFolder.add(settings, 'maxSubSteps', 0, 10).step(1);
        var maxg = 100;

        function changeGravity() {
            if (!isNaN(settings.gravityX) && !isNaN(settings.gravityY)) {
                p2.vec2.set(that.world.gravity, settings.gravityX, settings.gravityY);
            }
        }
        worldFolder.add(settings, 'gravityX', -maxg, maxg).onChange(changeGravity);
        worldFolder.add(settings, 'gravityY', -maxg, maxg).onChange(changeGravity);
        worldFolder.add(settings, 'sleepMode', {
            NO_SLEEPING: p2.World.NO_SLEEPING,
            BODY_SLEEPING: p2.World.BODY_SLEEPING,
            ISLAND_SLEEPING: p2.World.ISLAND_SLEEPING,
        }).onChange(function (mode) {
            that.world.sleepMode = parseInt(mode);
        });
        var renderingFolder = gui.addFolder('Rendering');
        renderingFolder.open();
        renderingFolder.add(settings, 'drawContacts [c]').onChange(function (draw) {
            that.drawContacts = draw;
        });
        renderingFolder.add(settings, 'drawAABBs [t]').onChange(function (draw) {
            that.drawAABBs = draw;
        });
        var solverFolder = gui.addFolder('Solver');
        solverFolder.open();
        solverFolder.add(settings, 'iterations', 1, 100).step(1).onChange(function (it) {
            that.world.solver.iterations = it;
        });
        solverFolder.add(settings, 'stiffness', 10).onChange(function (k) {
            that.setEquationParameters();
        });
        solverFolder.add(settings, 'relaxation', 0, 20).step(0.1).onChange(function (d) {
            that.setEquationParameters();
        });
        solverFolder.add(settings, 'tolerance', 0, 10).step(0.01).onChange(function (t) {
            that.world.solver.tolerance = t;
        });
        var sceneFolder = gui.addFolder('Scenes');
        sceneFolder.open();
        var i = 1;
        for (var sceneName in this.scenes) {
            var guiLabel = sceneName + ' [' + (i++) + ']';
            this.settings[guiLabel] = function () {
                that.setScene(that.scenes[sceneName]);
            };
            sceneFolder.add(settings, guiLabel);
        }
    };
    Renderer.prototype.updateGUI = function () {
        if (!this.gui) {
            return;
        }

        function updateControllers(folder) {
            for (var i in folder.__controllers) {
                folder.__controllers[i].updateDisplay();
            }
            for (var f in folder.__folders) {
                updateControllers(folder.__folders[f]);
            }
        }
        updateControllers(this.gui);
    };

    Renderer.prototype.setWorld = function (world) {
        this.world = world;

        window.world = world; // For debugging.

        var that = this;

        world.on("postStep", function (e) {
            that.updateStats();
        }).on("addBody", function (e) {
            that.addVisual(e.body);
        }).on("removeBody", function (e) {
            that.removeVisual(e.body);
        }).on("addSpring", function (e) {
            that.addVisual(e.spring);
        }).on("removeSpring", function (e) {
            that.removeVisual(e.spring);
        });
    };
    Renderer.prototype.setScene = function (sceneDefinition) {
        if (typeof (sceneDefinition) === 'string') {
            sceneDefinition = this.scenes[sceneDefinition];
        }

        this.removeAllVisuals();
        if (this.currentScene && this.currentScene.teardown) {
            this.currentScene.teardown();
        }
        if (this.world) {
            this.world.clear();
        }

        for (var i = 0; i < this.addedGlobals.length; i++) {
            delete window[this.addedGlobals];
        }

        var preGlobalVars = Object.keys(window);

        this.currentScene = sceneDefinition;
        this.world = null;
        sceneDefinition.setup.call(this);
        if (!this.world) {
            throw new Error('The .setup function in the scene definition must run this.setWorld(world);');
        }

        var postGlobalVars = Object.keys(window);
        var added = [];
        for (var i = 0; i < postGlobalVars.length; i++) {
            if (preGlobalVars.indexOf(postGlobalVars[i]) === -1 && postGlobalVars[i] !== 'world') {
                added.push(postGlobalVars[i]);
            }
        }
        if (added.length) {
            added.sort();
            
        }

        this.addedGlobals = added;
        var settings = this.settings;
        settings.iterations = this.world.solver.iterations;
        settings.tolerance = this.world.solver.tolerance;
        settings.gravityX = this.world.gravity[0];
        settings.gravityY = this.world.gravity[1];
        settings.sleepMode = this.world.sleepMode;
        this.updateGUI();
    };
    Renderer.prototype.setSceneByIndex = function (index) {
        var i = 0;
        for (var key in this.scenes) {
            if (i === index) {
                this.setScene(this.scenes[key]);
                break;
            }
            i++;
        }
    };

    Renderer.elementClass = 'p2-canvas';
    Renderer.containerClass = 'p2-container';
    Renderer.prototype.setUpKeyboard = function () {
        var that = this;

        this.elementContainer.onkeydown = function (e) {
            if (!e.keyCode) {
                return;
            }
            var s = that.state;
            var ch = String.fromCharCode(e.keyCode);
            switch (ch) {
                case "P": // pause
                    that.paused = !that.paused;
                    break;
                case "S": // step
                    that.world.step(that.world.lastTimeStep);
                    break;
                case "R": // restart
                    that.setScene(that.currentScene);
                    break;
                case "C": // toggle draw contacts & constraints
                    that.drawContacts = !that.drawContacts;
                    that.drawConstraints = !that.drawConstraints;
                    break;
                case "T": // toggle draw AABBs
                    that.drawAABBs = !that.drawAABBs;
                    break;
                case "D": // toggle draw polygon mode
                    that.setState(s === Renderer.DRAWPOLYGON ? Renderer.DEFAULT : s = Renderer.DRAWPOLYGON);
                    break;
                case "A": // toggle draw circle mode
                    that.setState(s === Renderer.DRAWCIRCLE ? Renderer.DEFAULT : s = Renderer.DRAWCIRCLE);
                    break;
                case "F": // toggle draw rectangle mode
                    that.setState(s === Renderer.DRAWRECTANGLE ? Renderer.DEFAULT : s = Renderer.DRAWRECTANGLE);
                    break;
                case "Q": // set default
                    that.setState(Renderer.DEFAULT);
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    that.setSceneByIndex(parseInt(ch) - 1);
                    break;
                default:
                    Renderer.keydownEvent.keyCode = e.keyCode;
                    Renderer.keydownEvent.originalEvent = e;
                    that.emit(Renderer.keydownEvent);
                    break;
            }
            that.updateGUI();
        };

        this.elementContainer.onkeyup = function (e) {
            if (e.keyCode) {
                switch (String.fromCharCode(e.keyCode)) {
                    default: Renderer.keyupEvent.keyCode = e.keyCode;
                    Renderer.keyupEvent.originalEvent = e;
                    that.emit(Renderer.keyupEvent);
                    break;
                }
            }
        };
    };
    Renderer.prototype.startRenderingLoop = function () {
        var demo = this,
            lastCallTime = Date.now() / 1000;

        function update() {
            if (!demo.paused) {
                var now = Date.now() / 1000,
                    timeSinceLastCall = now - lastCallTime;
                if (demo.resetCallTime) {
                    timeSinceLastCall = 0;
                    demo.resetCallTime = false;
                }
                lastCallTime = now;
                demo.world.step(demo.timeStep, timeSinceLastCall, demo.settings.maxSubSteps);
            }
            demo.render();
            requestAnimFrame(update);
        }
        requestAnimFrame(update);
    };
    Renderer.prototype.setState = function (state) {
        this.state = state;
        this.stateChangeEvent.state = state;
        this.emit(this.stateChangeEvent);
        if (Renderer.stateToolMap[state]) {
            this.settings.tool = state;
            this.updateGUI();
        }
    };
    Renderer.prototype.handleMouseDown = function (physicsPosition) {
        switch (this.state) {

            case Renderer.DEFAULT:
                var result = this.world.hitTest(physicsPosition, this.world.bodies, this.pickPrecision);
                var b;
                while (result.length > 0) {
                    b = result.shift();
                    if (b.type === p2.Body.STATIC) {
                        b = null;
                    } else {
                        break;
                    }
                }

                if (b) {
                    b.wakeUp();
                    this.setState(Renderer.DRAGGING);
                    var localPoint = p2.vec2.create();
                    b.toLocalFrame(localPoint, physicsPosition);
                    this.world.addBody(this.nullBody);
                    this.mouseConstraint = new p2.RevoluteConstraint(this.nullBody, b, {
                        localPivotA: physicsPosition,
                        localPivotB: localPoint
                    });
                    this.world.addConstraint(this.mouseConstraint);
                } else {
                    this.setState(Renderer.PANNING);
                }
                break;

            case Renderer.DRAWPOLYGON:
                this.setState(Renderer.DRAWINGPOLYGON);
                this.drawPoints = [];
                var copy = p2.vec2.create();
                p2.vec2.copy(copy, physicsPosition);
                this.drawPoints.push(copy);
                this.emit(this.drawPointsChangeEvent);
                break;

            case Renderer.DRAWCIRCLE:
                this.setState(Renderer.DRAWINGCIRCLE);
                p2.vec2.copy(this.drawCircleCenter, physicsPosition);
                p2.vec2.copy(this.drawCirclePoint, physicsPosition);
                this.emit(this.drawCircleChangeEvent);
                break;

            case Renderer.DRAWRECTANGLE:
                this.setState(Renderer.DRAWINGRECTANGLE);
                p2.vec2.copy(this.drawRectStart, physicsPosition);
                p2.vec2.copy(this.drawRectEnd, physicsPosition);
                this.emit(this.drawRectangleChangeEvent);
                break;
        }
    };
    Renderer.prototype.handleMouseMove = function (physicsPosition) {
        var sampling = 0.4;
        switch (this.state) {
            case Renderer.DEFAULT:
            case Renderer.DRAGGING:
                if (this.mouseConstraint) {
                    p2.vec2.copy(this.mouseConstraint.pivotA, physicsPosition);
                    this.mouseConstraint.bodyA.wakeUp();
                    this.mouseConstraint.bodyB.wakeUp();
                }
                break;

            case Renderer.DRAWINGPOLYGON:
                var sqdist = p2.vec2.dist(physicsPosition, this.drawPoints[this.drawPoints.length - 1]);
                if (sqdist > sampling * sampling) {
                    var copy = [0, 0];
                    p2.vec2.copy(copy, physicsPosition);
                    this.drawPoints.push(copy);
                    this.emit(this.drawPointsChangeEvent);
                }
                break;

            case Renderer.DRAWINGCIRCLE:
                p2.vec2.copy(this.drawCirclePoint, physicsPosition);
                this.emit(this.drawCircleChangeEvent);
                break;

            case Renderer.DRAWINGRECTANGLE:
                p2.vec2.copy(this.drawRectEnd, physicsPosition);
                this.emit(this.drawRectangleChangeEvent);
                break;
        }
    };
    Renderer.prototype.handleMouseUp = function (physicsPosition) {

        var b;

        switch (this.state) {

            case Renderer.DEFAULT:
                break;

            case Renderer.DRAGGING:
                this.world.removeConstraint(this.mouseConstraint);
                this.mouseConstraint = null;
                this.world.removeBody(this.nullBody);
                this.setState(Renderer.DEFAULT);
                break;

            case Renderer.PANNING:
                this.setState(Renderer.DEFAULT);
                break;

            case Renderer.DRAWINGPOLYGON:
                this.setState(Renderer.DRAWPOLYGON);
                if (this.drawPoints.length > 3) {
                    b = new p2.Body({
                        mass: 1
                    });
                    if (b.fromPolygon(this.drawPoints, {
                            removeCollinearPoints: 0.01,
                        })) {
                        this.world.addBody(b);
                    }
                }
                this.drawPoints = [];
                this.emit(this.drawPointsChangeEvent);
                break;

            case Renderer.DRAWINGCIRCLE:
                this.setState(Renderer.DRAWCIRCLE);
                var R = p2.vec2.dist(this.drawCircleCenter, this.drawCirclePoint);
                if (R > 0) {
                    b = new p2.Body({
                        mass: 1,
                        position: this.drawCircleCenter
                    });
                    var circle = new p2.Circle({
                        radius: R
                    });
                    b.addShape(circle);
                    this.world.addBody(b);
                }
                p2.vec2.copy(this.drawCircleCenter, this.drawCirclePoint);
                this.emit(this.drawCircleChangeEvent);
                break;

            case Renderer.DRAWINGRECTANGLE:
                this.setState(Renderer.DRAWRECTANGLE);
                var start = this.drawRectStart;
                var end = this.drawRectEnd;
                for (var i = 0; i < 2; i++) {
                    if (start[i] > end[i]) {
                        var tmp = end[i];
                        end[i] = start[i];
                        start[i] = tmp;
                    }
                }
                var width = Math.abs(start[0] - end[0]);
                var height = Math.abs(start[1] - end[1]);
                if (width > 0 && height > 0) {
                    b = new p2.Body({
                        mass: 1,
                        position: [this.drawRectStart[0] + width * 0.5, this.drawRectStart[1] + height * 0.5]
                    });
                    var rectangleShape = new p2.Box({
                        width: width,
                        height: height
                    });
                    b.addShape(rectangleShape);
                    this.world.addBody(b);
                }
                p2.vec2.copy(this.drawRectEnd, this.drawRectStart);
                this.emit(this.drawRectangleChangeEvent);
                break;
        }

        if (b) {
            b.wakeUp();
            for (var i = 0; i < b.shapes.length; i++) {
                var s = b.shapes[i];
                s.collisionMask = this.newShapeCollisionMask;
                s.collisionGroup = this.newShapeCollisionGroup;
            }
        }
    };
    Renderer.prototype.updateStats = function () {
        this.stats_sum += this.world.lastStepTime;
        this.stats_Nsummed++;
        if (this.stats_Nsummed === this.stats_N) {
            this.stats_average = this.stats_sum / this.stats_N;
            this.stats_sum = 0.0;
            this.stats_Nsummed = 0;
        }
    };
    Renderer.prototype.addVisual = function (obj) {
        if (obj instanceof p2.LinearSpring) {
            this.springs.push(obj);
            this.addRenderable(obj);
        } else if (obj instanceof p2.Body) {
            if (obj.shapes.length) { // Only draw things that can be seen
                this.bodies.push(obj);
                this.addRenderable(obj);
            }
        }
    };
    Renderer.prototype.removeAllVisuals = function () {
        var bodies = this.bodies,
            springs = this.springs;
        while (bodies.length) {
            this.removeVisual(bodies[bodies.length - 1]);
        }
        while (springs.length) {
            this.removeVisual(springs[springs.length - 1]);
        }
    };
    Renderer.prototype.removeVisual = function (obj) {
        this.removeRenderable(obj);
        if (obj instanceof p2.LinearSpring) {
            var idx = this.springs.indexOf(obj);
            if (idx !== -1) {
                this.springs.splice(idx, 1);
            }
        } else if (obj instanceof p2.Body) {
            var idx = this.bodies.indexOf(obj);
            if (idx !== -1) {
                this.bodies.splice(idx, 1);
            }
        } else {
            
        }
    };
    Renderer.prototype.createStats = function () {
    };

    Renderer.prototype.addLogo = function () {
        var css = [
        'position:absolute',
        'left:10px',
        'top:15px',
        'text-align:center',
        'font: 13px Helvetica, arial, freesans, clean, sans-serif',
    ].concat(disableSelectionCSS);

        var div = document.createElement('div');
        div.innerHTML = [
        "<div style='" + css.join(';') + "' user-select='none'>",
        "<h1 style='margin:0px'><a href='http://github.com/schteppe/p2.js' style='color:black; text-decoration:none;'>p2.js</a></h1>",
        "<p style='margin:5px'>Physics Engine</p>",
        '<a style="color:black; text-decoration:none;" href="https://twitter.com/share" class="twitter-share-button" data-via="schteppe" data-count="none" data-hashtags="p2js">Tweet</a>',
        "</div>"
    ].join("");
        this.elementContainer.appendChild(div);
        ! function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
    };

    Renderer.zoomInEvent = {
        type: "zoomin"
    };
    Renderer.zoomOutEvent = {
        type: "zoomout"
    };

    Renderer.prototype.setEquationParameters = function () {
        this.world.setGlobalStiffness(this.settings.stiffness);
        this.world.setGlobalRelaxation(this.settings.relaxation);
    };

})(p2);

(function (p2) {

    p2.WebGLRenderer = WebGLRenderer;

    var Renderer = p2.Renderer;
    function WebGLRenderer(scenes, options) {
        options = options || {};

        var that = this;

        var settings = {
            lineWidth: 0.01,
            scrollFactor: 0.1,
            width: 1280, // Pixi screen resolution
            height: 720,
            useDeviceAspect: false,
            sleepOpacity: 0.2,
        };
        for (var key in options) {
            settings[key] = options[key];
        }

        if (settings.useDeviceAspect) {
            settings.height = window.innerHeight / window.innerWidth * settings.width;
        }
        this.lineWidth = settings.lineWidth;
        this.scrollFactor = settings.scrollFactor;
        this.sleepOpacity = settings.sleepOpacity;

        this.sprites = [];
        this.springSprites = [];
        this.debugPolygons = false;

        Renderer.call(this, scenes, options);

        for (var key in settings) {
            this.settings[key] = settings[key];
        }

        this.pickPrecision = 0.1;
        this.on("drawPointsChange", function (e) {
            var g = that.drawShapeGraphics;
            var path = that.drawPoints;

            g.clear();

            var path2 = [];
            for (var j = 0; j < path.length; j++) {
                var v = path[j];
                path2.push([v[0], v[1]]);
            }

            that.drawPath(g, path2, 0xff0000, false, that.lineWidth, false);
        });
        this.on("drawCircleChange", function (e) {
            var g = that.drawShapeGraphics;
            g.clear();
            var center = that.drawCircleCenter;
            var R = p2.vec2.dist(center, that.drawCirclePoint);
            that.drawCircle(g, center[0], center[1], 0, R, false, that.lineWidth);
        });
        this.on("drawRectangleChange", function (e) {
            var g = that.drawShapeGraphics;
            g.clear();
            var start = that.drawRectStart;
            var end = that.drawRectEnd;
            var width = start[0] - end[0];
            var height = start[1] - end[1];
            that.drawRectangle(g, start[0] - width / 2, start[1] - height / 2, 0, width, height, false, false, that.lineWidth, false);
        });
    }
    WebGLRenderer.prototype = Object.create(Renderer.prototype);

    WebGLRenderer.prototype.stagePositionToPhysics = function (out, stagePosition) {
        var x = stagePosition[0],
            y = stagePosition[1];
        p2.vec2.set(out, x, y);
        return out;
    };
    var init_stagePosition = p2.vec2.create(),
        init_physicsPosition = p2.vec2.create();
    WebGLRenderer.prototype.init = function () {
        var w = this.w,
            h = this.h,
            s = this.settings;

        var that = this;

        var renderer = this.renderer = PIXI.autoDetectRenderer(s.width, s.height, null, null, true);
        var stage = this.stage = new PIXI.DisplayObjectContainer();
        var container = this.container = new PIXI.Stage(0xFFFFFF, true);

        var el = this.element = this.renderer.view;
        el.tabIndex = 1;
        el.classList.add(Renderer.elementClass);
        el.setAttribute('style', 'width:100%;');

        var div = this.elementContainer = document.createElement('div');
        div.classList.add(Renderer.containerClass);
        div.setAttribute('style', 'width:100%; height:100%');
        div.appendChild(el);
        document.body.appendChild(div);
        el.focus();
        el.oncontextmenu = function (e) {
            return false;
        };

        this.container.addChild(stage);
        this.drawShapeGraphics = new PIXI.Graphics();
        stage.addChild(this.drawShapeGraphics);
        this.contactGraphics = new PIXI.Graphics();
        stage.addChild(this.contactGraphics);
        this.aabbGraphics = new PIXI.Graphics();
        stage.addChild(this.aabbGraphics);

        stage.scale.x = 200; // Flip Y direction.
        stage.scale.y = -200;

        var lastX, lastY, lastMoveX, lastMoveY, startX, startY, down = false;

        var physicsPosA = p2.vec2.create();
        var physicsPosB = p2.vec2.create();
        var stagePos = p2.vec2.create();
        var initPinchLength = 0;
        var initScaleX = 1;
        var initScaleY = 1;
        var lastNumTouches = 0;
        container.mousedown = container.touchstart = function (e) {
            lastMoveX = e.global.x;
            lastMoveY = e.global.y;

            if (e.originalEvent.touches) {
                lastNumTouches = e.originalEvent.touches.length;
            }

            if (e.originalEvent.touches && e.originalEvent.touches.length === 2) {

                var touchA = that.container.interactionManager.touchs[0];
                var touchB = that.container.interactionManager.touchs[1];

                var pos = touchA.getLocalPosition(stage);
                p2.vec2.set(stagePos, pos.x, pos.y);
                that.stagePositionToPhysics(physicsPosA, stagePos);

                var pos = touchB.getLocalPosition(stage);
                p2.vec2.set(stagePos, pos.x, pos.y);
                that.stagePositionToPhysics(physicsPosB, stagePos);

                initPinchLength = p2.vec2.dist(physicsPosA, physicsPosB);

                var initScaleX = stage.scale.x;
                var initScaleY = stage.scale.y;

                return;
            }
            lastX = e.global.x;
            lastY = e.global.y;
            startX = stage.position.x;
            startY = stage.position.y;
            down = true;

            that.lastMousePos = e.global;

            var pos = e.getLocalPosition(stage);
            p2.vec2.set(init_stagePosition, pos.x, pos.y);
            that.stagePositionToPhysics(init_physicsPosition, init_stagePosition);
            that.handleMouseDown(init_physicsPosition);
        };
        container.mousemove = container.touchmove = function (e) {
            if (e.originalEvent.touches) {
                if (lastNumTouches !== e.originalEvent.touches.length) {
                    lastX = e.global.x;
                    lastY = e.global.y;
                    startX = stage.position.x;
                    startY = stage.position.y;
                }

                lastNumTouches = e.originalEvent.touches.length;
            }

            lastMoveX = e.global.x;
            lastMoveY = e.global.y;

            if (e.originalEvent.touches && e.originalEvent.touches.length === 2) {
                var touchA = that.container.interactionManager.touchs[0];
                var touchB = that.container.interactionManager.touchs[1];

                var pos = touchA.getLocalPosition(stage);
                p2.vec2.set(stagePos, pos.x, pos.y);
                that.stagePositionToPhysics(physicsPosA, stagePos);

                var pos = touchB.getLocalPosition(stage);
                p2.vec2.set(stagePos, pos.x, pos.y);
                that.stagePositionToPhysics(physicsPosB, stagePos);

                var pinchLength = p2.vec2.dist(physicsPosA, physicsPosB);
                p2.vec2.add(physicsPosA, physicsPosA, physicsPosB);
                p2.vec2.scale(physicsPosA, physicsPosA, 0.5);
                that.zoom(
                    (touchA.global.x + touchB.global.x) * 0.5, (touchA.global.y + touchB.global.y) * 0.5,
                    null,
                    pinchLength / initPinchLength * initScaleX, // zoom relative to the initial scale
                    pinchLength / initPinchLength * initScaleY
                );

                return;
            }

            if (down && that.state === Renderer.PANNING) {
                stage.position.x = e.global.x - lastX + startX;
                stage.position.y = e.global.y - lastY + startY;
            }

            that.lastMousePos = e.global;

            var pos = e.getLocalPosition(stage);
            p2.vec2.set(init_stagePosition, pos.x, pos.y);
            that.stagePositionToPhysics(init_physicsPosition, init_stagePosition);
            that.handleMouseMove(init_physicsPosition);
        };
        container.mouseup = container.touchend = function (e) {
            if (e.originalEvent.touches) {
                lastNumTouches = e.originalEvent.touches.length;
            }

            down = false;
            lastMoveX = e.global.x;
            lastMoveY = e.global.y;

            that.lastMousePos = e.global;

            var pos = e.getLocalPosition(stage);
            p2.vec2.set(init_stagePosition, pos.x, pos.y);
            that.stagePositionToPhysics(init_physicsPosition, init_stagePosition);
            that.handleMouseUp(init_physicsPosition);
        };
        this.element.ontouchmove = function (e) {
            e.preventDefault();
        };

        function MouseWheelHandler(e) {
            e = window.event || e; // old IE support

            var o = e,
                d = o.detail,
                w = o.wheelDelta,
                n = 225,
                n1 = n - 1;
            var f;
            d = d ? w && (f = w / d) ? d / f : -d / 1.35 : w / 120;
            d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
            var delta = Math.min(Math.max(d / 2, -1), 1);

            var out = delta >= 0;
            if (typeof lastMoveX !== 'undefined') {
                that.zoom(lastMoveX, lastMoveY, out, undefined, undefined, delta);
            }
        }

        if (el.addEventListener) {
            el.addEventListener("mousewheel", MouseWheelHandler, false); // IE9, Chrome, Safari, Opera
            el.addEventListener("DOMMouseScroll", MouseWheelHandler, false); // Firefox
        } else {
            el.attachEvent("onmousewheel", MouseWheelHandler); // IE 6/7/8
        }

        this.centerCamera(0, 0);
    };

    WebGLRenderer.prototype.zoom = function (x, y, zoomOut, actualScaleX, actualScaleY, multiplier) {
        var scrollFactor = this.scrollFactor,
            stage = this.stage;

        if (typeof actualScaleX === 'undefined') {

            if (!zoomOut) {
                scrollFactor *= -1;
            }

            scrollFactor *= Math.abs(multiplier);

            stage.scale.x *= (1 + scrollFactor);
            stage.scale.y *= (1 + scrollFactor);
            stage.position.x += (scrollFactor) * (stage.position.x - x);
            stage.position.y += (scrollFactor) * (stage.position.y - y);
        } else {
            stage.scale.x *= actualScaleX;
            stage.scale.y *= actualScaleY;
            stage.position.x += (actualScaleX - 1) * (stage.position.x - x);
            stage.position.y += (actualScaleY - 1) * (stage.position.y - y);
        }

        stage.updateTransform();
    };

    WebGLRenderer.prototype.centerCamera = function (x, y) {
        this.stage.position.x = this.renderer.width / 2 - this.stage.scale.x * x;
        this.stage.position.y = this.renderer.height / 2 - this.stage.scale.y * y;

        this.stage.updateTransform();
    };
    WebGLRenderer.prototype.frame = function (centerX, centerY, width, height) {
        var ratio = this.renderer.width / this.renderer.height;
        if (ratio < width / height) {
            this.stage.scale.x = this.renderer.width / width;
            this.stage.scale.y = -this.stage.scale.x;
        } else {
            this.stage.scale.y = -this.renderer.height / height;
            this.stage.scale.x = -this.stage.scale.y;
        }
        this.centerCamera(centerX, centerY);
    };
    WebGLRenderer.prototype.drawCircle = function (g, x, y, angle, radius, color, lineWidth, isSleeping) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "number" ? color : 0xffffff;
        g.lineStyle(lineWidth, 0x000000, 1);
        g.beginFill(color, isSleeping ? this.sleepOpacity : 1.0);
        g.drawCircle(x, y, radius);
        g.endFill();
        g.moveTo(x, y);
        g.lineTo(x + radius * Math.cos(angle),
            y + radius * Math.sin(angle));
    };

    WebGLRenderer.drawSpring = function (g, restLength, color, lineWidth) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "undefined" ? 0xffffff : color;
        g.lineStyle(lineWidth, color, 1);
        if (restLength < lineWidth * 10) {
            restLength = lineWidth * 10;
        }
        var M = 12;
        var dx = restLength / M;
        g.moveTo(-restLength / 2, 0);
        for (var i = 1; i < M; i++) {
            var x = -restLength / 2 + dx * i;
            var y = 0;
            if (i <= 1 || i >= M - 1) {
            } else if (i % 2 === 0) {
                y -= 0.1 * restLength;
            } else {
                y += 0.1 * restLength;
            }
            g.lineTo(x, y);
        }
        g.lineTo(restLength / 2, 0);
    };
    WebGLRenderer.drawPlane = function (g, x0, x1, color, lineColor, lineWidth, diagMargin, diagSize, maxLength) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "undefined" ? 0xffffff : color;
        g.lineStyle(lineWidth, lineColor, 1);
        g.lineStyle(0, 0, 0);
        g.beginFill(color);
        var max = maxLength;
        g.moveTo(-max, 0);
        g.lineTo(max, 0);
        g.lineTo(max, -max);
        g.lineTo(-max, -max);
        g.endFill();
        g.lineStyle(lineWidth, lineColor);
        g.moveTo(-max, 0);
        g.lineTo(max, 0);
    };


    WebGLRenderer.drawLine = function (g, offset, angle, len, color, lineWidth) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "undefined" ? 0x000000 : color;
        g.lineStyle(lineWidth, color, 1);

        var startPoint = p2.vec2.fromValues(-len / 2, 0);
        var endPoint = p2.vec2.fromValues(len / 2, 0);

        p2.vec2.rotate(startPoint, startPoint, angle);
        p2.vec2.rotate(endPoint, endPoint, angle);

        p2.vec2.add(startPoint, startPoint, offset);
        p2.vec2.add(endPoint, endPoint, offset);

        g.moveTo(startPoint[0], startPoint[1]);
        g.lineTo(endPoint[0], endPoint[1]);
    };

    WebGLRenderer.prototype.drawCapsule = function (g, x, y, angle, len, radius, color, fillColor, lineWidth, isSleeping) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "undefined" ? 0x000000 : color;
        g.lineStyle(lineWidth, color, 1);
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        g.beginFill(fillColor, isSleeping ? this.sleepOpacity : 1.0);
        g.drawCircle(-len / 2 * c + x, -len / 2 * s + y, radius);
        g.drawCircle(len / 2 * c + x, len / 2 * s + y, radius);
        g.endFill();
        g.lineStyle(lineWidth, color, 0);
        g.beginFill(fillColor, isSleeping ? this.sleepOpacity : 1.0);
        g.moveTo(-len / 2 * c + radius * s + x, -len / 2 * s + radius * c + y);
        g.lineTo(len / 2 * c + radius * s + x, len / 2 * s + radius * c + y);
        g.lineTo(len / 2 * c - radius * s + x, len / 2 * s - radius * c + y);
        g.lineTo(-len / 2 * c - radius * s + x, -len / 2 * s - radius * c + y);
        g.endFill();
        g.lineStyle(lineWidth, color, 1);
        g.moveTo(-len / 2 * c + radius * s + x, -len / 2 * s + radius * c + y);
        g.lineTo(len / 2 * c + radius * s + x, len / 2 * s + radius * c + y);
        g.moveTo(-len / 2 * c - radius * s + x, -len / 2 * s - radius * c + y);
        g.lineTo(len / 2 * c - radius * s + x, len / 2 * s - radius * c + y);

    };
    WebGLRenderer.prototype.drawRectangle = function (g, x, y, angle, w, h, color, fillColor, lineWidth, isSleeping) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "number" ? color : 0xffffff;
        fillColor = typeof (fillColor) === "number" ? fillColor : 0xffffff;
        g.lineStyle(lineWidth);
        g.beginFill(fillColor, isSleeping ? this.sleepOpacity : 1.0);
        g.drawRect(x - w / 2, y - h / 2, w, h);
    };

    WebGLRenderer.prototype.drawConvex = function (g, verts, triangles, color, fillColor, lineWidth, debug, offset, isSleeping) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "undefined" ? 0x000000 : color;
        if (!debug) {
            g.lineStyle(lineWidth, color, 1);
            g.beginFill(fillColor, isSleeping ? this.sleepOpacity : 1.0);
            for (var i = 0; i !== verts.length; i++) {
                var v = verts[i],
                    x = v[0],
                    y = v[1];
                if (i === 0) {
                    g.moveTo(x, y);
                } else {
                    g.lineTo(x, y);
                }
            }
            g.endFill();
            if (verts.length > 2) {
                g.moveTo(verts[verts.length - 1][0], verts[verts.length - 1][1]);
                g.lineTo(verts[0][0], verts[0][1]);
            }
        } else {
            var colors = [0xff0000, 0x00ff00, 0x0000ff];
            for (var i = 0; i !== verts.length + 1; i++) {
                var v0 = verts[i % verts.length],
                    v1 = verts[(i + 1) % verts.length],
                    x0 = v0[0],
                    y0 = v0[1],
                    x1 = v1[0],
                    y1 = v1[1];
                g.lineStyle(lineWidth, colors[i % colors.length], 1);
                g.moveTo(x0, y0);
                g.lineTo(x1, y1);
                g.drawCircle(x0, y0, lineWidth * 2);
            }

            g.lineStyle(lineWidth, 0x000000, 1);
            g.drawCircle(offset[0], offset[1], lineWidth * 2);
        }
    };

    WebGLRenderer.prototype.drawPath = function (g, path, color, fillColor, lineWidth, isSleeping) {
        lineWidth = typeof (lineWidth) === "number" ? lineWidth : 1;
        color = typeof (color) === "undefined" ? 0x000000 : color;
        g.lineStyle(lineWidth, color, 1);
        if (typeof (fillColor) === "number") {
            g.beginFill(fillColor, isSleeping ? this.sleepOpacity : 1.0);
        }
        var lastx = null,
            lasty = null;
        for (var i = 0; i < path.length; i++) {
            var v = path[i],
                x = v[0],
                y = v[1];
            if (x !== lastx || y !== lasty) {
                if (i === 0) {
                    g.moveTo(x, y);
                } else {
                    var p1x = lastx,
                        p1y = lasty,
                        p2x = x,
                        p2y = y,
                        p3x = path[(i + 1) % path.length][0],
                        p3y = path[(i + 1) % path.length][1];
                    var area = ((p2x - p1x) * (p3y - p1y)) - ((p3x - p1x) * (p2y - p1y));
                    if (area !== 0) {
                        g.lineTo(x, y);
                    }
                }
                lastx = x;
                lasty = y;
            }
        }
        if (typeof (fillColor) === "number") {
            g.endFill();
        }
        if (path.length > 2 && typeof (fillColor) === "number") {
            g.moveTo(path[path.length - 1][0], path[path.length - 1][1]);
            g.lineTo(path[0][0], path[0][1]);
        }
    };

    WebGLRenderer.prototype.updateSpriteTransform = function (sprite, body) {
        if (this.useInterpolatedPositions && !this.paused) {
            sprite.position.x = body.interpolatedPosition[0];
            sprite.position.y = body.interpolatedPosition[1];
            sprite.rotation = body.interpolatedAngle;
        } else {
            sprite.position.x = body.position[0];
            sprite.position.y = body.position[1];
            sprite.rotation = body.angle;
        }
    };

    var X = p2.vec2.fromValues(1, 0),
        distVec = p2.vec2.fromValues(0, 0),
        worldAnchorA = p2.vec2.fromValues(0, 0),
        worldAnchorB = p2.vec2.fromValues(0, 0);
    WebGLRenderer.prototype.render = function () {
        var w = this.renderer.width,
            h = this.renderer.height,
            springSprites = this.springSprites,
            sprites = this.sprites;
        for (var i = 0; i !== this.bodies.length; i++) {
            this.updateSpriteTransform(this.sprites[i], this.bodies[i]);
        }
        for (var i = 0; i !== this.bodies.length; i++) {
            var isSleeping = (this.bodies[i].sleepState === p2.Body.SLEEPING);
            var sprite = this.sprites[i];
            var body = this.bodies[i];
            if (sprite.drawnSleeping !== isSleeping) {
                sprite.clear();
                this.drawRenderable(body, sprite, sprite.drawnColor, sprite.drawnLineColor);
            }
        }
        for (var i = 0; i !== this.springs.length; i++) {
            var s = this.springs[i],
                sprite = springSprites[i],
                bA = s.bodyA,
                bB = s.bodyB;

            if (this.useInterpolatedPositions && !this.paused) {
                p2.vec2.toGlobalFrame(worldAnchorA, s.localAnchorA, bA.interpolatedPosition, bA.interpolatedAngle);
                p2.vec2.toGlobalFrame(worldAnchorB, s.localAnchorB, bB.interpolatedPosition, bB.interpolatedAngle);
            } else {
                s.getWorldAnchorA(worldAnchorA);
                s.getWorldAnchorB(worldAnchorB);
            }

            sprite.scale.y = 1;
            if (worldAnchorA[1] < worldAnchorB[1]) {
                var tmp = worldAnchorA;
                worldAnchorA = worldAnchorB;
                worldAnchorB = tmp;
                sprite.scale.y = -1;
            }

            var sxA = worldAnchorA[0],
                syA = worldAnchorA[1],
                sxB = worldAnchorB[0],
                syB = worldAnchorB[1];
            sprite.position.x = (sxA + sxB) / 2;
            sprite.position.y = (syA + syB) / 2;
            distVec[0] = sxA - sxB;
            distVec[1] = syA - syB;
            sprite.rotation = Math.acos(p2.vec2.dot(X, distVec) / p2.vec2.length(distVec));
            sprite.scale.x = p2.vec2.length(distVec) / s.restLength;
        }
        if (this.drawContacts) {
            this.contactGraphics.clear();
            this.stage.removeChild(this.contactGraphics);
            this.stage.addChild(this.contactGraphics);

            var g = this.contactGraphics;
            g.lineStyle(this.lineWidth, 0x000000, 1);
            for (var i = 0; i !== this.world.narrowphase.contactEquations.length; i++) {
                var eq = this.world.narrowphase.contactEquations[i],
                    bi = eq.bodyA,
                    bj = eq.bodyB,
                    ri = eq.contactPointA,
                    rj = eq.contactPointB,
                    xi = bi.position[0],
                    yi = bi.position[1],
                    xj = bj.position[0],
                    yj = bj.position[1];

                g.moveTo(xi, yi);
                g.lineTo(xi + ri[0], yi + ri[1]);

                g.moveTo(xj, yj);
                g.lineTo(xj + rj[0], yj + rj[1]);

            }
            this.contactGraphics.cleared = false;
        } else if (!this.contactGraphics.cleared) {
            this.contactGraphics.clear();
            this.contactGraphics.cleared = true;
        }
        if (this.drawAABBs) {
            this.aabbGraphics.clear();
            this.stage.removeChild(this.aabbGraphics);
            this.stage.addChild(this.aabbGraphics);
            var g = this.aabbGraphics;
            g.lineStyle(this.lineWidth, 0x000000, 1);

            for (var i = 0; i !== this.world.bodies.length; i++) {
                var aabb = this.world.bodies[i].getAABB();
                g.drawRect(aabb.lowerBound[0], aabb.lowerBound[1], aabb.upperBound[0] - aabb.lowerBound[0], aabb.upperBound[1] - aabb.lowerBound[1]);
            }
            this.aabbGraphics.cleared = false;
        } else if (!this.aabbGraphics.cleared) {
            this.aabbGraphics.clear();
            this.aabbGraphics.cleared = true;
        }

        if (this.followBody) {
            app.centerCamera(this.followBody.interpolatedPosition[0], this.followBody.interpolatedPosition[1]);
        }

        this.renderer.render(this.container);
    };
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    function randomPastelHex() {
        var mix = [255, 255, 255];
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        red = Math.floor((red + 3 * mix[0]) / 4);
        green = Math.floor((green + 3 * mix[1]) / 4);
        blue = Math.floor((blue + 3 * mix[2]) / 4);

        return rgbToHex(red, green, blue);
    }

    WebGLRenderer.prototype.drawRenderable = function (obj, graphics, color, lineColor) {
        var lw = this.lineWidth;

        var zero = [0, 0];
        graphics.drawnSleeping = false;
        graphics.drawnColor = color;
        graphics.drawnLineColor = lineColor;

        if (obj instanceof p2.Body && obj.shapes.length) {

            var isSleeping = (obj.sleepState === p2.Body.SLEEPING);
            graphics.drawnSleeping = isSleeping;

            if (obj.concavePath && !this.debugPolygons) {
                var path = [];
                for (var j = 0; j !== obj.concavePath.length; j++) {
                    var v = obj.concavePath[j];
                    path.push([v[0], v[1]]);
                }
                this.drawPath(graphics, path, lineColor, color, lw, isSleeping);
            } else {
                for (var i = 0; i < obj.shapes.length; i++) {
                    var child = obj.shapes[i],
                        offset = child.position,
                        angle = child.angle;

                    if (child instanceof p2.Circle) {
                        this.drawCircle(graphics, offset[0], offset[1], angle, child.radius, color, lw, isSleeping);

                    } else if (child instanceof p2.Particle) {
                        this.drawCircle(graphics, offset[0], offset[1], angle, 2 * lw, lineColor, 0);

                    } else if (child instanceof p2.Plane) {
                        WebGLRenderer.drawPlane(graphics, -10, 10, color, lineColor, lw, lw * 10, lw * 10, 100);

                    } else if (child instanceof p2.Line) {
                        WebGLRenderer.drawLine(graphics, offset, angle, child.length, lineColor, lw);

                    } else if (child instanceof p2.Box) {
                        this.drawRectangle(graphics, offset[0], offset[1], angle, child.width, child.height, lineColor, color, lw, isSleeping);

                    } else if (child instanceof p2.Capsule) {
                        this.drawCapsule(graphics, offset[0], offset[1], angle, child.length, child.radius, lineColor, color, lw, isSleeping);

                    } else if (child instanceof p2.Convex) {
                        var verts = [],
                            vrot = p2.vec2.create();
                        for (var j = 0; j !== child.vertices.length; j++) {
                            var v = child.vertices[j];
                            p2.vec2.rotate(vrot, v, angle);
                            verts.push([(vrot[0] + offset[0]), (vrot[1] + offset[1])]);
                        }
                        this.drawConvex(graphics, verts, child.triangles, lineColor, color, lw, this.debugPolygons, [offset[0], -offset[1]], isSleeping);

                    } else if (child instanceof p2.Heightfield) {
                        var path = [[0, -100]];
                        for (var j = 0; j !== child.heights.length; j++) {
                            var v = child.heights[j];
                            path.push([j * child.elementWidth, v]);
                        }
                        path.push([child.heights.length * child.elementWidth, -100]);
                        this.drawPath(graphics, path, lineColor, color, lw, isSleeping);

                    }
                }
            }

        } else if (obj instanceof p2.Spring) {
            var restLengthPixels = obj.restLength;
            WebGLRenderer.drawSpring(graphics, restLengthPixels, 0x000000, lw);
        }
    };

    WebGLRenderer.prototype.addRenderable = function (obj) {
        var lw = this.lineWidth;
        var color = parseInt(randomPastelHex(), 16),
            lineColor = 0x000000;

        var zero = [0, 0];

        var sprite = new PIXI.Graphics();
        if (obj instanceof p2.Body && obj.shapes.length) {

            this.drawRenderable(obj, sprite, color, lineColor);
            this.sprites.push(sprite);
            this.stage.addChild(sprite);

        } else if (obj instanceof p2.Spring) {
            this.drawRenderable(obj, sprite, 0x000000, lineColor);
            this.springSprites.push(sprite);
            this.stage.addChild(sprite);
        }
    };

    WebGLRenderer.prototype.removeRenderable = function (obj) {
        if (obj instanceof p2.Body) {
            var i = this.bodies.indexOf(obj);
            if (i !== -1) {
                this.stage.removeChild(this.sprites[i]);
                this.sprites.splice(i, 1);
            }
        } else if (obj instanceof p2.Spring) {
            var i = this.springs.indexOf(obj);
            if (i !== -1) {
                this.stage.removeChild(this.springSprites[i]);
                this.springSprites.splice(i, 1);
            }
        }
    };

    WebGLRenderer.prototype.resize = function (w, h) {
        var renderer = this.renderer;
        var view = renderer.view;
        var ratio = w / h;
        renderer.resize(w, h);
    };

})(p2);
